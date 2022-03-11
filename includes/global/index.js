/**
 * Register post meta fields, uses global.js
 */
import { registerPlugin } from '@wordpress/plugins';
import domReady from '@wordpress/dom-ready';
import PostMeta from './post-meta';
import ProjectsMeta from './projects-meta';

/**
 * Check what kind of post
 */
const getPostType = () => wp.data.select( 'core/editor' ).getCurrentPostType();

// set the initial postType
let postType = getPostType();

// DOM ready
domReady( () => {
	const { removeEditorPanel } = wp.data.dispatch( 'core/edit-post' );

	// subscribe, since this runs multiple times
	wp.data.subscribe( () => {
		// get the current postType
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
		// update the postType variable, so the above runs only once.
		postType = newPostType;
	} );
} );
