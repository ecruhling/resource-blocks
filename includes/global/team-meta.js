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

const TeamMeta = () => {
	const [ meta, setMeta ] = useEntityProp( 'postType', 'team', 'meta' );
	console.log( meta );
	return (
		<PluginDocumentSettingPanel
			name="resource-blocks-team-meta"
			title={ __( 'Team Meta', 'resource-blocks' ) }
			initialOpen="true"
			opened="true"
			icon={ icons.resource }
		>
			<PanelRow>
				<TextControl
					label={ __(
						'Official team member title (ex. President).',
						'resource-blocks'
					) }
					value={ meta.team_member_title }
					onChange={ ( value ) => {
						setMeta( { ...meta, team_member_title: value } );
					} }
				/>
			</PanelRow>
		</PluginDocumentSettingPanel>
	);
};

export default TeamMeta;
