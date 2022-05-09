/**
 * WordPress dependencies.
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import { whenEditorIsReady } from '../lib/editor-ready';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { useEntityProp } from '@wordpress/core-data';

/**
 * Appends the visual placeholder team-member-title block
 * to the same container as the post title (team member name)
 *
 * Wait until the editor is completely ready.
 */
whenEditorIsReady().then( () => {
	// eslint-disable-next-line no-undef
	jQuery( 'em.wp-block-resource-blocks-team-member-title' ).detach().appendTo(
		// eslint-disable-next-line no-undef
		jQuery( '.edit-post-visual-editor__post-title-wrapper' )
	);
} );

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const [ meta ] = useEntityProp( 'postType', 'team', 'meta' );

	return <em { ...useBlockProps() }>, { meta.team_member_title }</em>;
}
