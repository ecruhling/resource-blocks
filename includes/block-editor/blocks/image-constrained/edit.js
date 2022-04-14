/**
 * External dependencies
 */
import classnames from 'classnames';
import { get, omit, pick } from 'lodash';

/**
 * WordPress dependencies.
 */
import { getBlobByURL, isBlobURL } from '@wordpress/blob';
import {
	MediaPlaceholder,
	useBlockProps,
	InspectorControls,
	store as blockEditorStore,
	BlockIcon,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl,
	withNotices,
	Modal,
} from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';
import icons from '../../../icons/icons';

/**
 * Internal dependencies.
 */
import Image from './image';

/**
 * Import editor styles.
 */
import './editor.scss';

export const pickRelevantMediaFiles = ( image ) => {
	const imageProps = pick( image, [ 'alt', 'id', 'link', 'caption' ] );

	imageProps.width =
		get( image, [ 'media_details', 'width' ] ) || image.width;

	imageProps.height =
		get( image, [ 'media_details', 'height' ] ) || image.height;

	imageProps.url =
		get( image, [ 'sizes', 'full', 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', 'full', 'source_url' ] ) ||
		image.url;

	return imageProps;
};

/**
 * Is the URL a temporary blob URL? A blob URL is one that is used temporarily
 * while the image is being uploaded and will not have an id yet allocated.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the URL a Blob URL?
 */
const isTemporaryImage = ( id, url ) => ! id && isBlobURL( url );

/**
 * Checks if a media attachment object has been "destroyed",
 * that is, removed from the media library. The core Media Library
 * adds a `destroyed` property to a deleted attachment object in the media collection.
 *
 * @param {string} id The attachment id.
 *
 * @return {boolean} Whether the image has been destroyed.
 */
export function isMediaDestroyed( id ) {
	const attachment = wp?.media?.attachment( id ) || {};
	return attachment.destroyed;
}

/**
 * Edit function.
 *
 * @param {WPElement} root0
 * @param {WPElement} root0.attributes
 * @param {WPElement} root0.setAttributes
 *
 * @return {WPElement} Element to render.
 */

export function Edit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
	insertBlocksAfter,
	noticeOperations,
	onReplace,
	context,
	clientId,
} ) {
	const {
		url = '',
		alt,
		caption,
		align,
		showCaption,
		alignCaption,
		id,
		imageWidthInsideContainer,
		designWidth,
		designHeight,
	} = attributes;

	const [ temporaryURL, setTemporaryURL ] = useState();

	const altRef = useRef();

	useEffect( () => {
		altRef.current = alt;
	}, [ alt ] );

	const captionRef = useRef();
	useEffect( () => {
		captionRef.current = caption;
	}, [ caption ] );

	const ref = useRef();

	const { mediaUpload } = useSelect( ( select ) => {
		const { getSettings } = select( blockEditorStore );
		return pick( getSettings(), [ 'mediaUpload' ] );
	}, [] );

	// A callback passed to MediaUpload,
	// fired when the media modal closes.
	function onCloseModal() {
		if ( isMediaDestroyed( attributes?.id ) ) {
			setAttributes( {
				url: undefined,
				id: undefined,
			} );
		}
	}

	/*
		 Runs an error callback if the image does not load.
		 If the error callback is triggered, we infer that that image
		 has been deleted.
	*/
	function onImageError( isReplaced = false ) {
		// If the image block was not replaced with an embed,
		// clear the attributes and trigger the placeholder.
		if ( ! isReplaced ) {
			setAttributes( {
				url: undefined,
				id: undefined,
			} );
		}
	}

	function onSetDesignWidth( value ) {
		setAttributes( { designWidth: value } );
	}

	function onSetDesignHeight( value ) {
		setAttributes( { designHeight: value } );
	}

	function onSetImageWidthInsideContainer( value ) {
		setAttributes( { imageWidthInsideContainer: value } );
	}

	const mediaPreview = !! url && (
		<img
			alt={ __( 'Edit image' ) }
			title={ __( 'Edit image' ) }
			className={ 'edit-image-preview' }
			src={ url }
		/>
	);

	const classes = classnames( className, 'size-full', {
		[ `align${ align }` ]: align,
		'is-transient': temporaryURL,
		[ `align-caption-${ alignCaption }` ]: alignCaption,
		[ `has-${ showCaption ? 'caption' : 'no-caption' }` ]: showCaption,
	} );

	const blockProps = useBlockProps( {
		ref,
		className: classes,
	} );

	const [ modalIsOpen, setIsOpen ] = useState( false );

	function onUploadError( message ) {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( message );
		setAttributes( {
			src: undefined,
			id: undefined,
			url: undefined,
		} );
		setTemporaryURL( undefined );
	}

	function onSelectImage( media ) {
		if ( ! media || ! media.url ) {
			setAttributes( {
				url: undefined,
				alt: undefined,
				id: undefined,
				title: undefined,
				caption: undefined,
			} );

			return;
		}

		if ( isBlobURL( media.url ) ) {
			setTemporaryURL( media.url );
			return;
		}

		setTemporaryURL();

		let mediaAttributes = pickRelevantMediaFiles( media );

		// Check for width.
		if ( '' !== designWidth ) {
			if (
				parseInt( mediaAttributes.width ) !== parseInt( designWidth )
			) {
				openModal();

				return;
			}
		}

		// Check for height.
		if ( '' !== designHeight ) {
			if (
				parseInt( mediaAttributes.height ) !== parseInt( designHeight )
			) {
				openModal();

				return;
			}
		}

		// If a caption text was meanwhile written by the user,
		// make sure the text is not overwritten by empty captions.
		if ( captionRef.current && ! get( mediaAttributes, [ 'caption' ] ) ) {
			mediaAttributes = omit( mediaAttributes, [ 'caption' ] );
		}

		// Check if default link setting should be used.
		let linkDestination = attributes.linkDestination;
		if ( ! linkDestination ) {
			// Use the WordPress option to determine the proper default.
			// The constants used in Gutenberg do not match WP options so a little more complicated than ideal.
			// TODO: fix this in a follow up PR, requires updating media-text and ui component.
			switch ( wp?.media?.view?.settings?.defaultProps?.link || 'none' ) {
				case 'file':
				case 'media':
					linkDestination = 'media';
					break;
				case 'post':
				case 'attachment':
					linkDestination = 'attachment';
					break;
				case 'custom':
					linkDestination = 'custom';
					break;
				case 'none':
					linkDestination = 'none';
					break;
			}
		}

		// Check if the image is linked to its media.
		let href;
		switch ( linkDestination ) {
			case 'media':
				href = media.url;
				break;
			case 'attachment':
				href = media.link;
				break;
		}
		mediaAttributes.href = href;

		setAttributes( {
			...mediaAttributes,
			linkDestination,
		} );
	}

	function openModal() {
		setIsOpen( true );
	}

	function closeModal() {
		setIsOpen( false );
	}

	let isTemp = isTemporaryImage( id, url );

	// Upload a temporary image on mount.
	useEffect( () => {
		if ( ! isTemp ) {
			return;
		}

		const file = getBlobByURL( url );

		if ( file ) {
			mediaUpload( {
				filesList: [ file ],
				onFileChange: ( [ img ] ) => {
					onSelectImage( img );
				},
				allowedTypes: [ 'image' ],
				onError: ( message ) => {
					isTemp = false;
					onUploadError( message );
				},
			} );
		}
	}, [] );

	return (
		<>
			<figure
				{ ...blockProps }
				style={ { width: imageWidthInsideContainer } }
			>
				{ ( temporaryURL || url ) && (
					<Image
						temporaryURL={ temporaryURL }
						attributes={ attributes }
						setAttributes={ setAttributes }
						isSelected={ isSelected }
						insertBlocksAfter={ insertBlocksAfter }
						onReplace={ onReplace }
						onSelectImage={ onSelectImage }
						onUploadError={ onUploadError }
						containerRef={ ref }
						context={ context }
						clientId={ clientId }
						onCloseModal={ onCloseModal }
						onImageLoadError={ onImageError }
					/>
				) }
				{ modalIsOpen && (
					<Modal
						isOpen={ modalIsOpen }
						onRequestClose={ closeModal }
						contentLabel="Error"
						title="Error"
					>
						Image must be { designWidth }px wide.
						<br />
						Image must be { designHeight }px tall.
						<br />
						Choose another image.
					</Modal>
				) }
				<MediaPlaceholder
					icon={ <BlockIcon icon={ icons.single_image } /> }
					multiple={ false }
					labels={ {
						title: __( 'Image [Size Constrained]' ),
						instructions: sprintf(
							/* translators: %1$s: designWidth %2$s: designHeight */
							__(
								'Upload an image file, or pick one from the media library. Required image size is %1$spx x %2$spx.'
							),
							designWidth,
							designHeight
						),
					} }
					disableDropZone={ true }
					onSelect={ onSelectImage }
					notices={ noticeUI }
					onError={ onUploadError }
					onClose={ onCloseModal }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					value={ { id } }
					mediaPreview={ mediaPreview }
					disableMediaButtons={ temporaryURL || url }
				/>
				<InspectorControls>
					<PanelBody title={ __( 'Image attributes' ) }>
						{ ( temporaryURL || url ) && (
							<>
								<PanelRow
									className={ 'image-attributes-heading' }
								>
									Image caption
								</PanelRow>
								<PanelRow>
									<ToggleControl
										label="Display Image Caption?"
										help={
											showCaption
												? 'Display the image caption.'
												: 'Do not display the image caption.'
										}
										checked={ showCaption }
										onChange={ ( value ) => {
											setAttributes( {
												showCaption: value,
											} );
										} }
									/>
								</PanelRow>
							</>
						) }
						<PanelRow className={ 'image-attributes-heading' }>
							Required image size
						</PanelRow>
						<PanelRow>
							<TextControl
								label={ __( 'Width' ) }
								value={ designWidth || '' }
								onChange={ onSetDesignWidth }
								type={ 'number' }
								className={ 'image-attributes-text-control' }
							/>
							<TextControl
								label={ __( 'Height' ) }
								value={ designHeight || '' }
								onChange={ onSetDesignHeight }
								type={ 'number' }
								className={ 'image-sizing-text-control' }
							/>
						</PanelRow>
						<PanelRow className={ 'image-attributes-heading' }>
							Image container width (figure)
						</PanelRow>
						<PanelRow>
							<TextControl
								label={ __( 'Width (auto, %, px, rem, etc.)' ) }
								value={ imageWidthInsideContainer || '' }
								onChange={ onSetImageWidthInsideContainer }
								className={ 'image-attributes-text-control' }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</figure>
		</>
	);
}

export default withNotices( Edit );
