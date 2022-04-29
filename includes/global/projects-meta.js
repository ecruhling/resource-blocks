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

const ProjectsMeta = () => {
	const [ meta, setMeta ] = useEntityProp( 'postType', 'projects', 'meta' );

	return (
		<PluginDocumentSettingPanel
			name="resource-blocks-projects-meta"
			title={ __( 'Projects Meta', 'resource-blocks' ) }
			initialOpen="true"
			opened="true"
			icon={ icons.resource }
		>
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
