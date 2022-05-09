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

const TeamMeta = () => {
	const [ meta, setMeta ] = useEntityProp( 'postType', 'team', 'meta' );

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
			name="resource-blocks-team-meta"
			title={ __( 'Team Meta', 'resource-blocks' ) }
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
