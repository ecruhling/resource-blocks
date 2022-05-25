/**
 * WordPress dependencies.
 */
import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	Button,
	Modal,
	ResponsiveWrapper,
	Spinner,
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import checkDimensions from '../../block-editor/blocks/lib/check-dimensions';

/**
 * React component PostThumbnail.
 *
 * @param {number}   featuredImageId.featuredImageId
 * @param {number}   featuredImageId
 * @param {Object}   media
 * @param {Object}   meta
 * @param {Function} setMeta
 * @param {string}   WIDTH
 * @param {string}   HEIGHT
 * @param {Object}   featuredImageId.media
 * @param {Object}   featuredImageId.meta
 * @param {Function} featuredImageId.setMeta
 * @return {Object} {JSX.Element}
 * @function Object() { [native code] }
 */
function PostThumbnail( {
	featuredImageId,
	media,
	meta,
	setMeta,
	WIDTH,
	HEIGHT,
} ) {
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
	 * Image sizeCheck.
	 *
	 * Runs onSelect, checks dimensions, opens modal if incorrect.
	 *
	 * @param {Object} image
	 */
	function imageSizeCheck( image ) {
		// Check for minimum width.
		// Selecting a new image from the Media Library uses media.width,
		// Uploading a new image uses media.media_details.width
		const widthCheck = image.width ?? image.media_details.width;
		const heightCheck = image.height ?? image.media_details.height;

		if (
			widthCheck !== parseInt( WIDTH ) ||
			heightCheck !== parseInt( HEIGHT )
		) {
			openModal();
		} else {
			onUpdateImage( image );
		}
	}

	// set up modal.
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

	// onClickButton function contains open
	// and logic for checkDimensions
	// const onClickButton = ( open ) => {
	// 	// Event Listener approach.
	// 	const originalAttachmentTrigger =
	// 		wp.media.view.Attachment.prototype.trigger;
	// 	wp.media.view.Attachment.prototype.trigger = function () {
	// 		// triggers all events, compares against 'ready'
	// 		// first argument contains the event name
	// 		if ( arguments[ 0 ] === 'ready' ) {
	// 			if (
	// 				! checkDimensions(
	// 					this.model.attributes.width,
	// 					this.model.attributes.height,
	// 					WIDTH,
	// 					HEIGHT
	// 				)
	// 			) {
	// 				// if checkDimensions returns false
	// 				// add disabled class to element
	// 				this.$el.addClass( 'resource-disabled' );
	// 			}
	// 		}
	//
	// 		originalAttachmentTrigger.apply(
	// 			this,
	// 			Array.prototype.slice.call( arguments )
	// 		);
	// 	};
	//
	// 	return open;
	// };

	function setDefinedValues() {
		if ( typeof window.resourceBlocks !== 'undefined' ) {
			window.resourceBlocks = {
				definedWidth: WIDTH,
				definedHeight: HEIGHT,
			};
		}
	}

	return (
		<>
			<div
				className="editor-post-featured-image"
				style={ { width: '100%' } }
			>
				<h2 style={ { marginBottom: '0.6em', display: 'block' } }>
					Post thumbnail ({ WIDTH }px x { HEIGHT }px)
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
							Image must be { WIDTH }px x { HEIGHT }px! Choose
							another image.
						</p>
					</Modal>
				) }
				<MediaUploadCheck fallback={ instructions }>
					<MediaUpload
						title={ __( 'Post thumbnail' ) }
						onSelect={ imageSizeCheck }
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
									onClick={ () => {
										setDefinedValues();
										open();
									} }
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
							onSelect={ imageSizeCheck }
							unstableFeaturedImageFlow
							allowedTypes={ [ 'image' ] }
							modalClass="editor-post-featured-image__media-modal"
							render={ ( { open } ) => (
								<Button
									onClick={ () => {
										setDefinedValues();
										open();
									} }
									variant="secondary"
								>
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
