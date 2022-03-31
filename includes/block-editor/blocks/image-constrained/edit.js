/**
 * WordPress dependencies.
 */
import { Component } from '@wordpress/element';
import {
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	URLInput,
	useBlockProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { getBlobByURL, isBlobURL, revokeBlobURL } from '@wordpress/blob';
import {
	Spinner,
	withNotices,
	Toolbar,
	IconButton,
	PanelBody,
	TextareaControl,
	SelectControl,
	Dashicon,
	Tooltip,
	TextControl,
} from '@wordpress/components';
import { withSelect } from '@wordpress/data';

/**
 * Import editor styles.
 */
import './editor.scss';

/**
 * Edit function.
 *
 * @param {WPElement} root0
 * @param {WPElement} root0.attributes
 * @param {WPElement} root0.setAttributes
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<figure { ...useBlockProps() }>
			<MediaPlaceholder
			// icon={ <BlockIcon icon={ icon } /> }
			// onSelect={ onSelectImage }
			// onSelectURL={ onSelectURL }
			// notices={ noticeUI }
			// onError={ onUploadError }
			// onClose={ onCloseModal }
			// accept="image/*"
			// allowedTypes={ ALLOWED_MEDIA_TYPES }
			// value={ { id, src } }
			// mediaPreview={ mediaPreview }
			// disableMediaButtons={ temporaryURL || url }
			/>
		</figure>
	);
}
