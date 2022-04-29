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
import './style.scss';
import './editor.scss';

/**
 * Method to retrieve the type of the post.
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

					// TODO: figure out how to extend the library on the fly, instead of
					// having multiple extends overwriting one another. see another
					// approach to this in image-constrained/index.js line 21
					/*
					const _AttachmentLibrary = wp.media.view.Attachment.Library;

					wp.media.view.Attachment.Library = _AttachmentLibrary.extend(
						{
							render() {
								if (
									995 !==
										parseInt(
											this.model.attributes.width
										) ||
									410 !==
										parseInt( this.model.attributes.height )
								) {
									this.$el.addClass( 'resource-disabled' );
								}

								return _AttachmentLibrary.prototype.render.apply(
									this,
									arguments
								);
							},
						}
					);
*/
				}
			}
			// this is a Projects post type.
			if ( newPostType === 'projects' ) {
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
		}
		// update the postType variable, so the above runs only once.
		postType = newPostType;
	} );
} );
