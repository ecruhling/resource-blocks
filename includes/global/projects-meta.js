/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelRow, TextControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

/**
 * Internal dependencies
 */
import icons from '../icons/icons';
import PostThumbnail from './components/post-thumbnail';
import { useSelect } from '@wordpress/data';

const ProjectsMeta = () => {
	// meta information for this post.
	// includes fields: 'post_thumbnail' and 'second_line'.
	const [ meta, setMeta ] = useEntityProp( 'postType', 'projects', 'meta' );

	// set required width / height.
	const WIDTH = '645';
	const HEIGHT = '645';

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
			name="resource-blocks-projects-meta"
			title={ __( 'Projects Meta', 'resource-blocks' ) }
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
					WIDTH={ WIDTH }
					HEIGHT={ HEIGHT }
				/>
			</PanelRow>
			<PanelRow>
				<TextControl
					label={ __(
						'Second Line (displayed after title). Usually City, ST',
						'resource-blocks'
					) }
					value={ meta.second_line }
					onChange={ ( value ) => {
						setMeta( { ...meta, second_line: value } );
					} }
				/>
			</PanelRow>
		</PluginDocumentSettingPanel>
	);
};

export default ProjectsMeta;
