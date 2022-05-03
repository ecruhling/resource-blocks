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
 * checkDimensions function.
 *
 * @param {string} width
 * @param {string} height
 * @private
 */
function checkDimensions( width, height ) {
	// init variables
	let designWidth, designHeight;

	// get currently selected block (if any)
	const selectedBlock = wp.data
		.select( 'core/block-editor' )
		.getSelectedBlock();

	// if this is coming from a block, there will
	// be a designWidth or designHeight attribute(s)
	if ( selectedBlock ) {
		designWidth = selectedBlock.attributes.designWidth;
		designHeight = selectedBlock.attributes.designHeight;
	}

	// if designWidth exists
	if ( designWidth ) {
		// and is not blank
		if ( '' !== designWidth ) {
			if ( parseInt( designWidth ) !== parseInt( width ) ) {
				return false;
			}
		}
	}

	// if designHeight exists
	if ( designHeight ) {
		// and is not blank
		if ( '' !== designHeight ) {
			if ( parseInt( designHeight ) !== parseInt( height ) ) {
				return false;
			}
		}
	}

	return true;
}

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
