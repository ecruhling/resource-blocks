/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelRow, TextareaControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

/**
 * Internal dependencies
 */
import icons from '../icons/icons';
import PostThumbnail from './post-thumbnail';

const PostMeta = () => {
	// meta information for this post.
	// includes fields: 'post_thumbnail' and 'optional_description'.
	const [ meta, setMeta ] = useEntityProp( 'postType', 'post', 'meta' );

	// post thumbnail image ID
	const featuredImageId = meta.post_thumbnail;

	// media object from meta.post_thumbnail (ID).
	// use 'id' as a dependency (final argument), in order to update on the fly.
	const media = useSelect(
		( select ) => select( 'core' ).getMedia( featuredImageId ),
		[ featuredImageId ]
	);

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
					setMeta={ setMeta }
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
					onChange={ ( value ) => {
						setMeta( { ...meta, optional_description: value } );
					} }
				/>
			</PanelRow>
		</PluginDocumentSettingPanel>
	);
};

export default PostMeta;
