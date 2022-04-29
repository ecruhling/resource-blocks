import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	Button,
	Modal,
	ResponsiveWrapper,
	Spinner,
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

function PostThumbnail( { featuredImageId, media, meta, setMeta } ) {
	const instructions = (
		<p>
			{ __(
				'To edit the post thumbnail, you need permission to upload media.'
			) }
		</p>
	);

	let mediaWidth, mediaHeight;

	if ( media ) {
		mediaWidth = media.media_details.width;
		mediaHeight = media.media_details.height;
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

	// Image selected and updated.
	function onUpdateImage( image ) {
		setMeta( { ...meta, post_thumbnail: image.id } );
	}

	// Image removed.
	function onRemoveImage() {
		setMeta( { ...meta, post_thumbnail: null } );
	}

	return (
		<>
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
								// translators: %s: Current image
								__( 'Current image: %s' ),
								media.alt_text
							) }
						{ ! media.alt_text &&
							sprintf(
								// translators: %s: File name
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
						title={ __( 'Post thumbnail' ) }
						onSelect={ onUpdateImage }
						allowedTypes={ [ 'image' ] }
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
												src={ media.source_url }
												alt=""
											/>
										</ResponsiveWrapper>
									) }
									{ !! featuredImageId && ! media && (
										<Spinner />
									) }
									{ ! featuredImageId &&
										__( 'Set post thumbnail' ) }
								</Button>
							</div>
						) }
					/>
				</MediaUploadCheck>
				{ !! featuredImageId && media && ! media.isLoading && (
					<MediaUploadCheck>
						<MediaUpload
							title={ __( 'Post thumbnail' ) }
							onSelect={ onUpdateImage }
							unstableFeaturedImageFlow
							allowedTypes={ [ 'image' ] }
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
							{ __( 'Remove post thumbnail' ) }
						</Button>
					</MediaUploadCheck>
				) }
			</div>
		</>
	);
}

export default PostThumbnail;
