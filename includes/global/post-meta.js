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
	const meta = useSelect(
		( select ) => select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		[]
	);

	const media = useSelect(
		( select ) => select( 'core' ).getMedia( meta.post_thumbnail ),
		[]
	);

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
