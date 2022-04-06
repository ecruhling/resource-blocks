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
	BlockAlignmentControl,
	BlockControls,
	MediaPlaceholder,
	useBlockProps,
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, withNotices } from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import Image from './image';

/**
 * Import editor styles.
 */
import './editor.scss';

export const pickRelevantMediaFiles = ( image, size ) => {
	const imageProps = pick( image, [ 'alt', 'id', 'link', 'caption' ] );
	imageProps.url =
		get( image, [ 'sizes', size, 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', size, 'source_url' ] ) ||
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
 * @param {number} id The attachment id.
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
		id,
		width,
		designWidth,
		height,
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

	const { imageDefaultSize, mediaUpload } = useSelect( ( select ) => {
		const { getSettings } = select( blockEditorStore );
		return pick( getSettings(), [ 'imageDefaultSize', 'mediaUpload' ] );
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

	const mediaPreview = !! url && (
		<img
			alt={ __( 'Edit image' ) }
			title={ __( 'Edit image' ) }
			className={ 'edit-image-preview' }
			src={ url }
		/>
	);

	const classes = classnames( className, 'size-full', {
		'is-transient': temporaryURL,
		'is-resized': !! width || !! height,
	} );

	const blockProps = useBlockProps( {
		ref,
		className: classes,
	} );

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

		let mediaAttributes = pickRelevantMediaFiles( media, imageDefaultSize );

		// If a caption text was meanwhile written by the user,
		// make sure the text is not overwritten by empty captions.
		if ( captionRef.current && ! get( mediaAttributes, [ 'caption' ] ) ) {
			mediaAttributes = omit( mediaAttributes, [ 'caption' ] );
		}

		let additionalAttributes;
		// Reset the dimension attributes if changing to a different image.
		if ( ! media.id || media.id !== id ) {
			additionalAttributes = {
				width: undefined,
				height: undefined,
			};
		} else {
			// Keep the same url when selecting the same file, so "Image Size"
			// option is not changed.
			additionalAttributes = { url };
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
			...additionalAttributes,
			linkDestination,
		} );
	}

	function updateAlignment( nextAlign ) {
		const extraUpdatedAttributes = [ 'wide', 'full' ].includes( nextAlign )
			? { width: undefined, height: undefined }
			: {};
		setAttributes( {
			...extraUpdatedAttributes,
			align: nextAlign,
		} );
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
				data-design-width={ designWidth }
				data-design-height={ designHeight }
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
				{ ! url && (
					<BlockControls group="block">
						<BlockAlignmentControl
							value={ align }
							onChange={ updateAlignment }
						/>
					</BlockControls>
				) }
				<MediaPlaceholder
					multiple={ false }
					labels={ {
						title: __( 'Image [Size Constrained]' ),
						instructions: __(
							'Upload an image file, or pick one from the media library.'
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
					// onFilesPreUpload={ onFilesPreUpload }
					// handleUpload={ false }
				/>
				<InspectorControls>
					<PanelBody title={ __( 'Image design size' ) }>
						<TextControl
							label={ __( 'Width:' ) }
							value={ designWidth || '' }
							onChange={ onSetDesignWidth }
						/>
						<TextControl
							label={ __( 'Height:' ) }
							value={ designHeight || '' }
							onChange={ onSetDesignHeight }
						/>
					</PanelBody>
				</InspectorControls>
			</figure>
		</>
	);
}

export default withNotices( Edit );
