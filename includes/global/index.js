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
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Internal dependencies
 */
import json from './block.json';

const { name, ...settings } = json;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( name, {
	...settings,
} );

/**
 * Register post meta fields, uses global.js
 */
import { registerPlugin } from '@wordpress/plugins';
import PostMeta from './post-meta';
import ProjectsMeta from './projects-meta';

/**
 * Check what kind of post
 */
const getPostType = () => wp.data.select( 'core/editor' ).getCurrentPostType();

const postType = getPostType();

// DOM ready
wp.domReady( () => {
	const { removeEditorPanel } = wp.data.dispatch( 'core/edit-post' );

	// subscribe, since this runs multiple times
	wp.data.subscribe( () => {
		// get the current postFormat
		const newPostType = getPostType();
		// once the post type changes from null to an actual value, the post type is valid
		if ( postType !== newPostType ) {
			// this is a post
			if ( newPostType === 'post' ) {
				// remove panels
				removeEditorPanel( 'featured-image' );
				removeEditorPanel( 'post-excerpt' );
				removeEditorPanel( 'discussion-panel' );

				// register panel
				registerPlugin( 'post-meta', {
					render() {
						return <PostMeta />;
					},
				} );
			}
			if ( newPostType === 'projects' ) {
				// register panel
				registerPlugin( 'projects-meta', {
					render() {
						return <ProjectsMeta />;
					},
				} );
			}
		}
	} );
} );
