import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { PanelRow, TextareaControl, Button } from '@wordpress/components';
import { MediaPlaceholder } from '@wordpress/block-editor';
import { upload } from '@wordpress/icons';

import icons from '../icons/icons';

const ResourceBlocksMeta = () => {
	const meta = useSelect(
		( select ) => select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		[]
	);

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
				<MediaPlaceholder
					onSelect={ ( value ) => {
						editPost( { meta: { post_thumbnail: value } } );
					} }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					// onError={ onUploadError }
					// placeholder={ placeholder }
					mediaLibraryButton={ ( { open } ) => {
						return (
							<Button
								icon={ upload }
								variant="primary"
								label={ label }
								showTooltip
								tooltipPosition="top center"
								onClick={ () => {
									open();
								} }
							/>
						);
					} }
					value={ meta.post_thumbnail }
					multiple={ false }
					labels={ {
						title: 'Post Thumbnail',
						instructions:
							'Upload an image, or pick one from the media library. Image must be 995px x 410px.',
					} }
				/>
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
