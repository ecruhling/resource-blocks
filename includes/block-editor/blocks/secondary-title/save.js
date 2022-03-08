/**
 * WordPress dependencies.
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param {Object} props
 * @param {Object} props.attributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {

	const { secondaryTitle } = attributes;

	const classes = classnames( 'resource-blocks-row' );

	return (
		<div
			{ ...useBlockProps.save( {
				className: classes,
			} ) }
		>
			<div className={ 'resource-blocks-column' }>
				<RichText.Content tagName="h2" value={ secondaryTitle } />
			</div>
		</div>
	);
}
