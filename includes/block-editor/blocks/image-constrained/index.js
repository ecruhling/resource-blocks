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
import checkDimensions from '../lib/check-dimensions';

const { name, ...settings } = json;

// Extend Attachment Library approach.
// wp.media.view.Attachment.Library = wp.media.view.Attachment.Library.extend( {
// 	className() {
// 		return checkDimensions(
// 			this.model.attributes.width,
// 			this.model.attributes.height
// 		)
// 			? 'attachment resource-disabled'
// 			: 'attachment';
// 	},
// } );

// Event Listener approach.
// const originalAttachmentTrigger = wp.media.view.Attachment.prototype.trigger;
wp.media.view.Attachment.prototype.trigger = function () {
	// triggers all events, compares against 'ready'
	// first argument contains the event name
	if ( arguments[ 0 ] === 'ready' ) {
		if (
			! checkDimensions(
				this.model.attributes.width,
				this.model.attributes.height
			)
		) {
			// if checkDimensions returns false
			// add disabled class to element
			this.$el.addClass( 'resource-disabled' );
		}
	}
	// unsure if below is needed

	// originalAttachmentTrigger.apply(
	// 	this,
	// 	Array.prototype.slice.call( arguments )
	// );
};

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
