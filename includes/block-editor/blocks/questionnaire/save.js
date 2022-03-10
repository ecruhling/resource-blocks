/**
 * WordPress dependencies.
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	const classes = classnames( 'resource-blocks-row' );

	return (
		<div { ...useBlockProps.save( { className: classes } ) }>
			<InnerBlocks.Content />
		</div>
	);
}
