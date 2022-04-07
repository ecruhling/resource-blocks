/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Import styles.
 */
import './style.scss';

/**
 * Internal dependencies.
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import icons from '../../../icons/icons';

const { name, ...settings } = json;

/**
 * Extend wp.media.view.Attachment.Library.
 *
 * This extends the render method of the media library. It gets the current
 * attribute values designHeight & designWidth from the currently selected
 * block and compares the values against the images in the media library.
 *
 * Any images that don't equal the attribute values are disabled from being
 * selected by the user.
 *
 * @private
 */
const _AttachmentLibrary = wp.media.view.Attachment.Library;

wp.media.view.Attachment.Library = _AttachmentLibrary.extend( {
	render() {
		const designWidth = wp.data
			.select( 'core/block-editor' )
			.getSelectedBlock().attributes.designWidth;

		const designHeight = wp.data
			.select( 'core/block-editor' )
			.getSelectedBlock().attributes.designHeight;

		if ( '' !== designWidth ) {
			if ( parseInt( designWidth ) !== this.model.attributes.width ) {
				this.$el.addClass( 'resource-disabled' );
			}
		}

		if ( '' !== designHeight ) {
			if ( parseInt( designHeight ) !== this.model.attributes.height ) {
				this.$el.addClass( 'resource-disabled' );
			}
		}

		return _AttachmentLibrary.prototype.render.apply( this, arguments );
	},
} );

/**
 * Register block.
 */
registerBlockType( name, {
	...settings,
	icon: icons.single_image,
	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
