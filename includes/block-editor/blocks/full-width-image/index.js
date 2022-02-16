/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

// import SVG icons
import icons from '../../../icons/icons'

// self-invoking function creates custom icon for block-category
( function () {
	wp.blocks.updateCategory( 'resource-blocks', { icon: icons.resource } );
} )();

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

const {name, ...settings} = json;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(name, {
	...settings,
	icon: icons.image_full_width,
	example: {
		attributes: {
			sizeSlug: 'large',
			url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
			caption: __( 'Mont Blanc appears—still, snowy, and serene.' ),
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
});
