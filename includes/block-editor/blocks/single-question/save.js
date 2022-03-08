/**
 * WordPress dependencies.
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param {Object} props
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	const {
		attributes: { question, answer },
	} = props;

	const classes = classnames( 'resource-blocks-column' );

	return (
		<div { ...useBlockProps.save( { className: classes } ) }>
			<h3>
				<strong>{ question }</strong>
			</h3>
			<RichText.Content tagName="p" value={ answer } />
		</div>
	);
}
