/**
 * WordPress dependencies
 */
import { getPlugins, registerPlugin } from '@wordpress/plugins';
import domReady from '@wordpress/dom-ready';

/**
 * Internal dependencies
 */
import PostMeta from './post-meta';
import ProjectsMeta from './projects-meta';
import TeamMeta from './team-meta';
import './style.scss';
import './editor.scss';
import checkDimensions from '../block-editor/blocks/lib/check-dimensions';

// Create and set a global object to contain some global variables
window.resourceBlocks = {
	targetWidth: '',
	targetHeight: '',
};

// Log all media modal events
// wp.media.view.Modal.prototype.on( 'all', function ( e ) {
// 	// prepare, ready, attach, open, close, escape
// 	console.log( e );
// } );

// set global variables to null when media library modal is closed.
wp.media.view.Modal.prototype.on( 'close', function () {
	window.resourceBlocks = {
		targetWidth: '',
		targetHeight: '',
	};
} );

const AttachmentLibrary = wp.media.view.Attachment.Library; // extend

wp.media.view.Attachment.Library = AttachmentLibrary.extend( {
	render() {
		if ( typeof window.resourceBlocks !== 'undefined' ) {
			if (
				! checkDimensions(
					this.model.attributes.width,
					this.model.attributes.height,
					window.resourceBlocks.targetWidth,
					window.resourceBlocks.targetHeight
				)
			) {
				// if checkDimensions returns false
				// add disabled class to element
				this.$el.addClass( 'resource-disabled' );
			}
		}

		return AttachmentLibrary.prototype.render.apply( this, arguments );
	},
} );

/**
 * Retrieve the type of the post.
 */
const getPostType = () => wp.data.select( 'core/editor' ).getCurrentPostType();

// set the initial postType.
let postType = getPostType();

// DOM ready.
domReady( () => {
	const { removeEditorPanel } = wp.data.dispatch( 'core/edit-post' );

	// subscribe, since this runs multiple times.
	wp.data.subscribe( () => {
		// get the current postType.
		const newPostType = getPostType();

		// once the post type changes from null to an actual value, the post type is valid.
		if ( postType !== newPostType ) {
			// this is a regular 'Recently' post type.
			if ( newPostType === 'post' ) {
				// remove panels.
				removeEditorPanel( 'featured-image' );
				removeEditorPanel( 'post-excerpt' );
				removeEditorPanel( 'discussion-panel' );
				// get registered plugins.
				const registeredPlugins = getPlugins();

				// register panel (verify that plugin is registered only once).
				if (
					! registeredPlugins.some(
						( plugin ) => plugin.name === 'post-meta'
					)
				) {
					registerPlugin( 'post-meta', {
						render() {
							return <PostMeta />;
						},
					} );
				}
			}
			// this is a Projects post type.
			if ( newPostType === 'projects' ) {
				// remove panels.
				removeEditorPanel( 'featured-image' );
				removeEditorPanel( 'post-excerpt' );
				removeEditorPanel( 'discussion-panel' );
				// get registered plugins.
				const registeredPlugins = getPlugins();

				// register panel (verify that plugin is registered only once).
				if (
					! registeredPlugins.some(
						( plugin ) => plugin.name === 'projects-meta'
					)
				) {
					registerPlugin( 'projects-meta', {
						render() {
							return <ProjectsMeta />;
						},
					} );
				}
			}

			// this is a Team post type.
			if ( newPostType === 'team' ) {
				// remove panels.
				removeEditorPanel( 'featured-image' );

				// get registered plugins.
				const registeredPlugins = getPlugins();

				// register panel (verify that plugin is registered only once).
				if (
					! registeredPlugins.some(
						( plugin ) => plugin.name === 'team-meta'
					)
				) {
					registerPlugin( 'team-meta', {
						render() {
							return <TeamMeta />;
						},
					} );
				}
			}
		}
		// update the postType variable, so the above runs only once.
		postType = newPostType;
	} );
} );
