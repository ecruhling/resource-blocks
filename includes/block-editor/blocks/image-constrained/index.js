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

const { name, ...settings } = json;

// Media Library opens
// wp.media.view.Modal.prototype.on( 'open', function () {
// 	console.log( wp.media.frame );
// } );
//
const AttachmentLibrary = wp.media.view.Attachment.Library;

wp.media.view.Attachment.Library = AttachmentLibrary.extend( {
	// initialize() {
	// 	console.log( 'init' );
	// },
	// className() {
	// 	return 'attachment resource-disabled';
	// },
	render() {
		console.log( this );
		return AttachmentLibrary.prototype.render.apply( this, arguments );
	},
} );

/**
 * Register block.
 */
registerBlockType( name, {
	...settings,
	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
