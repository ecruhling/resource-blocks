/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import classnames from 'classnames';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object} props
 * @param          className.className
 * @param          className
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit( props, { className } ) {
	const {
		attributes: { question, answer },
		setAttributes,
	} = props;

	const classes = classnames( className, 'resource-blocks-column' );

	const blockProps = useBlockProps( {
		className: classes,
	} );

	return (
		<div { ...blockProps }>
			<h3>
				<strong>{ question }</strong>
			</h3>
			<RichText
				tagName="p"
				placeholder={ __(
					'Write the answer here.',
					'resource-blocks'
				) }
				value={ answer }
				onChange={ ( value ) => setAttributes( { answer: value } ) }
			/>
		</div>
	);
}
