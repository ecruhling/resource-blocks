/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelRow, TextControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

/**
 * Internal dependencies
 */
import icons from '../icons/icons';

const ProjectsMeta = () => {
	const meta = useSelect(
		( select ) => select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		[]
	);
	const { editPost } = useDispatch( 'core/editor' );

	const onSecondLineChange = ( newSecondLine ) =>
		editPost( {
			meta: { second_line: newSecondLine },
		} );

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
					onChange={ onSecondLineChange }
				/>
			</PanelRow>
		</PluginDocumentSettingPanel>
	);
};

export default ProjectsMeta;