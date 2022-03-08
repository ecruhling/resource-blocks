/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param  props
 * @param  root0
 * @param  root0.className
 * @param  root0.secondaryTitle
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	const {
		attributes: { className, secondaryTitle },
	} = props;

	const classes = classnames( className, 'resource-blocks-row' );

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
