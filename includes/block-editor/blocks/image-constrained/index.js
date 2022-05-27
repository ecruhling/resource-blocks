/*global jQuery */

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

// jQuery function
( function ( $ ) {
	// buttons in the Media Placeholder component
	$( document ).on(
		'click',
		'.wp-block-resource-blocks-image-constrained button',
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
		if (
			selectedBlock.attributes.designHeight &&
			selectedBlock.attributes.designWidth
		) {
			if ( typeof window.resourceBlocks !== 'undefined' ) {
				window.resourceBlocks = {
					targetWidth: selectedBlock.attributes.designWidth,
					targetHeight: selectedBlock.attributes.designHeight,
				};
			}
		}
	}
} )( jQuery );

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
