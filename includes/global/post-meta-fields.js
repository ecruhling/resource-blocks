/**
 * External dependencies
 */
import { has, get } from 'lodash';

/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import {
	DropZone,
	Button,
	PanelRow,
	TextareaControl,
	Spinner,
	ResponsiveWrapper,
	withNotices,
	withFilters,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
	useSelect,
	useDispatch,
	withSelect,
	withDispatch,
} from '@wordpress/data';
import {
	MediaUpload,
	MediaPlaceholder,
	MediaUploadCheck,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';

import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { upload } from '@wordpress/icons';

import icons from '../icons/icons';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

// Used when labels from post type were not yet loaded or when they are not present.
const DEFAULT_FEATURE_IMAGE_LABEL = __( 'Post thumbnail' );
const DEFAULT_SET_FEATURE_IMAGE_LABEL = __( 'Set post thumbnail' );
const DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = __( 'Remove post thumbnail' );

function PostFeaturedImage( {
	currentPostId,
	onUpdateImage,
	onDropImage,
	onRemoveImage,
	postType,
	noticeUI,
	meta,
} ) {
	const postLabel = get( postType, [ 'labels' ], {} );

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

	console.log(media);

	let mediaWidth, mediaHeight, mediaSourceUrl;

	// if ( meta.post_thumbnail ) {
	// 	const mediaSize = applyFilters(
	// 		'editor.PostFeaturedImage.imageSize',
	// 		'post-thumbnail',
	// 		meta.post_thumbnail,
	// 		currentPostId
	// 	);
	// 	if (
	// 		has( meta.post_thumbnail, [ 'media_details', 'sizes', mediaSize ] )
	// 	) {
	// 		// use mediaSize when available
	// 		mediaWidth = media.media_details.sizes[ mediaSize ].width;
	// 		mediaHeight = media.media_details.sizes[ mediaSize ].height;
	// 		mediaSourceUrl = media.media_details.sizes[ mediaSize ].source_url;
	// 	} else {
	// 		// get fallbackMediaSize if mediaSize is not available
	// 		const fallbackMediaSize = applyFilters(
	// 			'editor.PostFeaturedImage.imageSize',
	// 			'full',
	// 			meta.post_thumbnail,
	// 			currentPostId
	// 		);
	// 		if (
	// 			has( meta.post_thumbnail, [
	// 				'media_details',
	// 				'sizes',
	// 				fallbackMediaSize,
	// 			] )
	// 		) {
	// 			// use fallbackMediaSize when mediaSize is not available
	// 			mediaWidth =
	// 				media.media_details.sizes[ fallbackMediaSize ].width;
	// 			mediaHeight =
	// 				media.media_details.sizes[ fallbackMediaSize ].height;
	// 			mediaSourceUrl =
	// 				media.media_details.sizes[ fallbackMediaSize ].source_url;
	// 		} else {
	// 			// use full image size when mediaFallbackSize and mediaSize are not available
	// 			mediaWidth = media.media_details.width;
	// 			mediaHeight = media.media_details.height;
	// 			mediaSourceUrl = media.source_url;
	// 		}
	// 	}
	// }

	return (
		<>
			{ noticeUI }
			<div className="editor-post-thumbnail">
				{ meta.post_thumbnail && (
					<div
						id={ `editor-post-thumbnail-${ meta.post_thumbnail }-describedby` }
						className="hidden"
					>
						{ /*{ media.alt_text &&*/ }
						{ /*	sprintf(*/ }
						{ /*		// Translators: %s: The selected image alt text.*/ }
						{ /*		__( 'Current image: %s' ),*/ }
						{ /*		media.alt_text*/ }
						{ /*	) }*/ }
						{ /*{ ! media.alt_text &&*/ }
						{ /*	sprintf(*/ }
						{ /*		// Translators: %s: The selected image filename.*/ }
						{ /*		__(*/ }
						{ /*			'The current image has no alternative text. The file name is: %s'*/ }
						{ /*		),*/ }
						{ /*		media.media_details.sizes?.full?.file ||*/ }
						{ /*			media.slug*/ }
						{ /*	) }*/ }
					</div>
				) }
				<MediaUploadCheck fallback={ instructions }>
					<MediaUpload
						title={
							postLabel.post_thumbnail ||
							DEFAULT_FEATURE_IMAGE_LABEL
						}
						onSelect={ onUpdateImage }
						unstableFeaturedImageFlow
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						modalClass="editor-post-thumbnail__media-modal"
						render={ ( { open } ) => (
							<div className="editor-post-thumbnail__container">
								<Button
									className={
										! meta.post_thumbnail
											? 'editor-post-thumbnail__toggle'
											: 'editor-post-thumbnail__preview'
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
											: `editor-post-thumbnail-${ meta.post_thumbnail }-describedby`
									}
								>
									{ !! meta.post_thumbnail &&
										meta.post_thumbnail && (
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
									{ !! meta.post_thumbnail &&
										! meta.post_thumbnail && <Spinner /> }
									{ ! meta.post_thumbnail &&
										( postLabel.post_thumbnail ||
											DEFAULT_SET_FEATURE_IMAGE_LABEL ) }
								</Button>
								<DropZone onFilesDrop={ onDropImage } />
							</div>
						) }
						value={ meta.post_thumbnail }
					/>
				</MediaUploadCheck>
				{ !! meta.post_thumbnail &&
					meta.post_thumbnail &&
					! meta.post_thumbnail.isLoading && (
						<MediaUploadCheck>
							<MediaUpload
								title={
									postLabel.post_thumbnail ||
									DEFAULT_FEATURE_IMAGE_LABEL
								}
								onSelect={ onUpdateImage }
								unstableFeaturedImageFlow
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								modalClass="editor-post-thumbnail__media-modal"
								render={ ( { open } ) => (
									<Button
										onClick={ open }
										variant="secondary"
									>
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
							{ postLabel.remove_featured_image ||
								DEFAULT_REMOVE_FEATURE_IMAGE_LABEL }
						</Button>
					</MediaUploadCheck>
				) }
			</div>
		</>
	);
}

const ResourceBlocksMeta = () => {
	const meta = useSelect(
		( select ) => select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		[]
	);

	// const media = useSelect(
	// 	( select ) => select( 'core' ).getMedia( meta.post_thumbnail ),
	// 	[]
	// );
	//
	// console.log( meta, media );
	const { editPost } = useDispatch( 'core/editor' );

	const label = __( 'Add a post thumbnail' );

	return (
		<PluginDocumentSettingPanel
			name="resource-blocks-meta"
			title={ __( 'Post Meta', 'resource-blocks' ) }
			initialOpen="true"
			opened="true"
			icon={ icons.resource }
		>
			<PanelRow>
				<PostFeaturedImage meta={ meta } />
				{ /*<MediaPlaceholder*/ }
				{ /*	onSelect={ ( value ) => {*/ }
				{ /*		editPost( { meta: { post_thumbnail: value } } );*/ }
				{ /*	} }*/ }
				{ /*	accept="image/*"*/ }
				{ /*	allowedTypes={ [ 'image' ] }*/ }
				{ /*	// onError={ onUploadError }*/ }
				{ /*	// placeholder={ placeholder }*/ }
				{ /*	mediaLibraryButton={ ( { open } ) => {*/ }
				{ /*		return (*/ }
				{ /*			<Button*/ }
				{ /*				icon={ upload }*/ }
				{ /*				variant="primary"*/ }
				{ /*				label={ label }*/ }
				{ /*				showTooltip*/ }
				{ /*				tooltipPosition="top center"*/ }
				{ /*				onClick={ () => {*/ }
				{ /*					open();*/ }
				{ /*				} }*/ }
				{ /*			/>*/ }
				{ /*		);*/ }
				{ /*	} }*/ }
				{ /*	value={ meta.post_thumbnail }*/ }
				{ /*	multiple={ false }*/ }
				{ /*	labels={ {*/ }
				{ /*		title: 'Post Thumbnail',*/ }
				{ /*		instructions:*/ }
				{ /*			'Upload an image, or pick one from the media library. Image must be 995px x 410px.',*/ }
				{ /*	} }*/ }
				{ /*/>*/ }
			</PanelRow>
			<PanelRow>
				<TextareaControl
					label={ __( 'Optional Description', 'resource-blocks' ) }
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

export default ResourceBlocksMeta;
