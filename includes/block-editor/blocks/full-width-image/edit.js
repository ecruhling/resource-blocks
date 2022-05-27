/**
 * External dependencies
 */
import classnames from 'classnames';
import { get, pick } from 'lodash';

/**
 * WordPress dependencies
 */
import { getBlobByURL, isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { Modal, withNotices } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	BlockIcon,
	MediaPlaceholder,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import icons from '../../../icons/icons';

/**
 * Internal dependencies
 */
import Image, { isExternalImage, isMediaDestroyed } from '../lib/image';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Module constants
 */
import { ALLOWED_MEDIA_TYPES, WIDTH } from './constants';

export const pickRelevantMediaFiles = ( image, size ) => {
	const imageProps = pick( image, [ 'alt', 'id' ] );
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
 * @return {boolean} Is the URL a Blob URL
 */
const isTemporaryImage = ( id, url ) => ! id && isBlobURL( url );

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}  root0
 * @param {Object}  root0.attributes
 * @param {Object}  root0.setAttributes
 * @param {boolean} root0.isSelected
 * @param {string}  root0.className
 * @param {Object}  root0.noticeUI
 * @param {Object}  root0.insertBlocksAfter
 * @param {Object}  root0.noticeOperations
 * @param {Object}  root0.onReplace
 * @param {Object}  root0.context
 * @param {string}  root0.clientId
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export function ImageEdit( {
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
	const { url = '', alt, id, width, height } = attributes;
	const [ temporaryURL, setTemporaryURL ] = useState();

	const altRef = useRef();
	useEffect( () => {
		altRef.current = alt;
	}, [ alt ] );

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

	function onUploadError( message ) {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( message );
	}

	/**
	 * Image selected.
	 *
	 * @param {Object} media
	 */
	function onSelectImage( media ) {
		if ( ! media || ! media.url ) {
			setAttributes( {
				url: undefined,
				alt: undefined,
				id: undefined,
				title: undefined,
			} );

			return;
		}

		if ( isBlobURL( media.url ) ) {
			setTemporaryURL( media.url );
			return;
		}

		setTemporaryURL();

		let additionalAttributes;
		// Reset the dimension attributes if changing to a different image.
		if ( ! media.id || media.id !== id ) {
			additionalAttributes = {
				width: undefined,
				height: undefined, // Fallback to size "full" if there's no default image size.
			};
		} else {
			// Keep the same url when selecting the same file, so "Image Size"
			// option is not changed.
			additionalAttributes = { url };
		}

		// Check for minimum width.
		// Selecting a new image from the Media Library uses media.width,
		// Uploading a new image uses media.media_details.width
		const widthCheck = media.width ?? media.media_details.width;

		if ( widthCheck !== WIDTH ) {
			openModal();

			return;
		}

		const mediaAttributes = pickRelevantMediaFiles( media, 'full' );

		setAttributes( {
			...mediaAttributes,
			...additionalAttributes,
		} );
	}

	function onSelectURL( newURL ) {
		if ( newURL !== url ) {
			setAttributes( {
				url: newURL,
				id: undefined,
				width: undefined,
				height: undefined,
			} );
		}
	}

	const [ modalIsOpen, setIsOpen ] = useState( false );

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
				allowedTypes: ALLOWED_MEDIA_TYPES,
				onError: ( message ) => {
					isTemp = false;
					noticeOperations.createErrorNotice( message );
					setAttributes( {
						src: undefined,
						id: undefined,
						url: undefined,
					} );
				},
			} );
		}
	}, [] );

	// If an image is temporary, revoke the Blob url when it is uploaded (and is
	// no longer temporary).
	useEffect( () => {
		if ( isTemp ) {
			setTemporaryURL( url );
			return;
		}
		revokeBlobURL( temporaryURL );
	}, [ isTemp, url ] );

	const isExternal = isExternalImage( id, url );
	const src = isExternal ? url : undefined;
	const mediaPreview = !! url && (
		<img
			alt={ __( 'Edit image' ) }
			title={ __( 'Edit image' ) }
			className={ 'edit-image-preview' }
			src={ url }
		/>
	);

	const classes = classnames( className, 'resource-blocks-row', {
		'is-transient': temporaryURL,
		'is-resized': !! width || !! height,
	} );

	const blockProps = useBlockProps( {
		ref,
		className: classes,
	} );

	return (
		<div { ...blockProps }>
			<div className={ 'resource-blocks-column' }>
				{ ( temporaryURL || url ) && (
					<Image
						temporaryURL={ temporaryURL }
						attributes={ attributes }
						setAttributes={ setAttributes }
						isSelected={ isSelected }
						insertBlocksAfter={ insertBlocksAfter }
						onReplace={ onReplace }
						onSelectImage={ onSelectImage }
						onSelectURL={ onSelectURL }
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
						<p>
							Image must be { WIDTH }px wide! Choose another
							image.
						</p>
					</Modal>
				) }
				<MediaPlaceholder
					icon={ <BlockIcon icon={ icons.image_full_width } /> }
					onSelect={ onSelectImage }
					notices={ noticeUI }
					onError={ onUploadError }
					onClose={ onCloseModal }
					accept="image/*"
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ { id, src } }
					mediaPreview={ mediaPreview }
					labels={ {
						title: 'Full-width Image',
						instructions:
							'Upload an image, or pick one from the media library. Image must be ' +
							WIDTH +
							'px wide. 870px is an appropriate height, but it is not enforced.',
					} }
					disableMediaButtons={ temporaryURL || url }
				/>
			</div>
		</div>
	);
}

export default withNotices( ImageEdit );
