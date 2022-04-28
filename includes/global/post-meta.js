/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelRow, TextareaControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

/**
 * Internal dependencies
 */
import icons from '../icons/icons';
import PostThumbnail from './post-thumbnail';

const PostMeta = () => {
	// meta information for this post.
	// includes fields: 'post_thumbnail' and 'optional_description'.
	const meta = useSelect(
		( select ) => select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		[]
	);

	const id = meta.post_thumbnail;

	// media object from meta.post_thumbnail (ID).
	// use 'id' as a dependency (final argument), in order to update on the fly.
	const media = useSelect( ( select ) => select( 'core' ).getMedia( id ), [
		id,
	] );

	// image ID
	const featuredImageId = meta.post_thumbnail ?? null;

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
				<PostThumbnail
					meta={ meta }
					media={ media }
					featuredImageId={ featuredImageId }
				/>
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
