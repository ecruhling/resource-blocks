/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import icons from '../../../icons/icons';

/**
 * Module constants
 */
import { WIDTH, HEIGHT } from './constants';

const { name, ...settings } = json;

// jQuery function
( function ( $ ) {
	// buttons in the Media Placeholder component
	$( document ).on(
		'click',
		'.wp-block-resource-blocks-single-image',
		function () {
			setTargets();
		}
	);

	// buttons in the BlockControls (toolbar) component
	$( document ).on(
		'click',
		'.block-editor-media-replace-flow__media-upload-menu .components-button',
		function () {
			setTargets();
		}
	);

	// setTargets function; gets the selected block, checks the attributes,
	// and sets the targetWidth and targetHeight
	function setTargets() {
		const selectedBlock = wp.data
			.select( 'core/block-editor' )
			.getSelectedBlock();
		if ( selectedBlock.name === 'resource-blocks/single-image' ) {
			if ( WIDTH && HEIGHT ) {
				if ( typeof window.resourceBlocks !== 'undefined' ) {
					window.resourceBlocks = {
						targetWidth: WIDTH,
						targetHeight: HEIGHT,
					};
				}
			}
		}
	}
} )( jQuery );

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
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
