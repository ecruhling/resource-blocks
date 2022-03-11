import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import {
	Button,
	Modal,
	ResponsiveWrapper,
	Spinner,
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

// Used when labels from post type were not yet loaded or when they are not present.
const DEFAULT_FEATURE_IMAGE_LABEL = __( 'Post thumbnail' );
const DEFAULT_SET_FEATURE_IMAGE_LABEL = __( 'Set post thumbnail' );
const DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = __( 'Remove post thumbnail' );

function PostThumbnail( { featuredImageId, onRemoveImage, noticeUI, media } ) {
	const instructions = (
		<p>
			{ __(
				'To edit the post thumbnail, you need permission to upload media.'
			) }
		</p>
	);

	let mediaWidth, mediaHeight, mediaSourceUrl;

	if ( media ) {
		mediaWidth = media.media_details.width;
		mediaHeight = media.media_details.height;
		mediaSourceUrl = media.source_url;
	}

	/**
	 * Image selected.
	 *
	 * @param  image
	 */
	// function imageSizeCheck( image ) {
	// 	// Check for minimum width.
	// 	// Selecting a new image from the Media Library uses media.width,
	// 	// Uploading a new image uses media.media_details.width
	// 	console.log( image );
	// 	const widthCheck = image.width ?? image.media_details.width;
	// 	const heightCheck = image.height ?? image.media_details.height;
	//
	// 	if ( widthCheck !== 995 || heightCheck !== 410 ) {
	// 		openModal();
	// 	}
	// }

	const [ modalIsOpen, setIsOpen ] = useState( false );

	function openModal() {
		setIsOpen( true );
	}

	function closeModal() {
		setIsOpen( false );
	}

	const { editPost } = useDispatch( 'core/editor' );

	function onUpdateImage( image ) {
		editPost( {
			meta: { post_thumbnail: image },
		} );
	}

	return (
		<>
			{ noticeUI }
			<div
				className="editor-post-featured-image"
				style={ { width: '100%' } }
			>
				<h2 style={ { marginBottom: '0.6em', display: 'block' } }>
					Post thumbnail (995px x 410px)
				</h2>
				{ media && (
					<div
						id={ `editor-post-featured-image-${ featuredImageId }-describedby` }
						className="hidden"
					>
						{ media.alt_text &&
							sprintf(
								__( 'Current image: %s' ),
								media.alt_text
							) }
						{ ! media.alt_text &&
							sprintf(
								__(
									'The current image has no alternative text. The file name is: %s'
								),
								media.media_details.sizes?.full?.file ||
									media.slug
							) }
					</div>
				) }
				{ modalIsOpen && (
					<Modal
						isOpen={ modalIsOpen }
						onRequestClose={ closeModal }
						contentLabel="Error"
						title="Error"
					>
						<p>
							Image must be 995px x 410px! Choose another image.
						</p>
					</Modal>
				) }
				<MediaUploadCheck fallback={ instructions }>
					<MediaUpload
						title={ DEFAULT_FEATURE_IMAGE_LABEL }
						onSelect={ onUpdateImage }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						modalClass="editor-post-featured-image__media-modal"
						value={ featuredImageId }
						render={ ( { open } ) => (
							<div className="editor-post-featured-image__container">
								<Button
									className={
										! featuredImageId
											? 'editor-post-featured-image__toggle'
											: 'editor-post-featured-image__preview'
									}
									onClick={ open }
									aria-label={
										! featuredImageId
											? null
											: __( 'Edit or update the image' )
									}
									aria-describedby={
										! featuredImageId
											? null
											: `editor-post-featured-image-${ featuredImageId }-describedby`
									}
								>
									{ !! featuredImageId && media && (
										<ResponsiveWrapper
											naturalWidth={ mediaWidth }
											naturalHeight={ mediaHeight }
											isInline
										>
											<img
												src={ mediaSourceUrl }
												alt=""
											/>
										</ResponsiveWrapper>
									) }
									{ !! featuredImageId && ! media && (
										<Spinner />
									) }
									{ ! featuredImageId &&
										DEFAULT_SET_FEATURE_IMAGE_LABEL }
								</Button>
							</div>
						) }
					/>
				</MediaUploadCheck>
				{ !! featuredImageId && media && ! media.isLoading && (
					<MediaUploadCheck>
						<MediaUpload
							title={ DEFAULT_FEATURE_IMAGE_LABEL }
							onSelect={ onUpdateImage }
							unstableFeaturedImageFlow
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							modalClass="editor-post-featured-image__media-modal"
							render={ ( { open } ) => (
								<Button onClick={ open } variant="secondary">
									{ __( 'Replace Image' ) }
								</Button>
							) }
						/>
					</MediaUploadCheck>
				) }
				{ !! featuredImageId && (
					<MediaUploadCheck>
						<Button
							onClick={ onRemoveImage }
							variant="link"
							isDestructive
						>
							{ DEFAULT_REMOVE_FEATURE_IMAGE_LABEL }
						</Button>
					</MediaUploadCheck>
				) }
			</div>
		</>
	);
}

export default PostThumbnail;
