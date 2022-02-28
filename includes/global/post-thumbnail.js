/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import {
	DropZone,
	ResponsiveWrapper,
	Button,
	PanelRow,
	TextareaControl,
	Spinner,
	Modal,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

/**
 * Internal dependencies
 */
import icons from '../icons/icons';
import { useState } from '@wordpress/element';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

// Used when labels from post type were not yet loaded or when they are not present.
const DEFAULT_FEATURE_IMAGE_LABEL = __( 'Post thumbnail' );
const DEFAULT_SET_FEATURE_IMAGE_LABEL = __( 'Set post thumbnail' );
const DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = __( 'Remove post thumbnail' );

function PostThumbnail( {
	onUpdateImage,
	onDropImage,
	onRemoveImage,
	noticeUI,
	meta,
} ) {
	const instructions = (
		<p>
			{ __(
				'To edit the post thumbnail, you need permission to upload media.'
			) }
		</p>
	);

	const media = useSelect(
		( select ) => select( 'core' ).getMedia( meta.post_thumbnail ),
		[]
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
	function imageSizeCheck( image ) {

		// Check for minimum width.
		// Selecting a new image from the Media Library uses media.width,
		// Uploading a new image uses media.media_details.width
		console.log( image );
		const widthCheck = image.width ?? image.media_details.width;
		const heightCheck = image.height ?? image.media_details.height;

		if ( widthCheck !== 995 || heightCheck !== 410 ) {
			openModal();
		}
	}

	const [ modalIsOpen, setIsOpen ] = useState( false );

	function openModal() {
		setIsOpen( true );
	}

	function closeModal() {
		setIsOpen( false );
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
						id={ `editor-post-featured-image-${ meta.post_thumbnail }-describedby` }
						className="hidden"
					>
						{ media.alt_text &&
							sprintf(
								// Translators: %s: The selected image alt text.
								__( 'Current image: %s' ),
								media.alt_text
							) }
						{ ! media.alt_text &&
							sprintf(
								// Translators: %s: The selected image filename.
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
						unstableFeaturedImageFlow
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						modalClass="editor-post-featured-image__media-modal"
						render={ ( { open } ) => (
							<div className="editor-post-featured-image__container">
								<Button
									className={
										! meta.post_thumbnail
											? 'editor-post-featured-image__toggle'
											: 'editor-post-featured-image__preview'
									}
									onClick={ open }
									aria-label={
										! meta.post_thumbnail
											? null
											: __( 'Edit or update the image' )
									}
									aria-describedby={
										! meta.post_thumbnail
											? null
											: `editor-post-featured-image-${ meta.post_thumbnail }-describedby`
									}
								>
									{ !! meta.post_thumbnail && media && (
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
									{ !! meta.post_thumbnail && ! media && (
										<Spinner />
									) }
									{ ! meta.post_thumbnail &&
										DEFAULT_SET_FEATURE_IMAGE_LABEL }
								</Button>
								<DropZone onFilesDrop={ onDropImage } />
							</div>
						) }
						value={ meta.post_thumbnail }
					/>
				</MediaUploadCheck>
				{ !! meta.post_thumbnail && media && ! media.isLoading && (
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
				{ !! meta.post_thumbnail && (
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

const PostMeta = () => {
	const meta = useSelect(
		( select ) => select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		[]
	);

	const { editPost } = useDispatch( 'core/editor' );

	return (
		<PluginDocumentSettingPanel
			name="resource-blocks-meta"
			title={ __( 'Post Meta', 'resource-blocks' ) }
			initialOpen="true"
			opened="true"
			icon={ icons.resource }
		>
			<PanelRow>
				<PostThumbnail meta={ meta } />
			</PanelRow>
			<PanelRow>
				<TextareaControl
					label={ __(
						'Optional Description (displayed after title)',
						'resource-blocks'
					) }
					value={ meta.optional_description }
					onChange={ ( value ) =>
						editPost( {
							meta: { optional_description: value },
						} )
					}
				/>
			</PanelRow>
		</PluginDocumentSettingPanel>
	);
};

export default PostMeta;
