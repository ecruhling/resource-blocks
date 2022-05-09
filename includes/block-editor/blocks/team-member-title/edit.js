/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object} props
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { teamMemberTitle } = attributes;

	return (
		<em { ...useBlockProps() }>
			<RichText
				tagName="em"
				placeholder={ __(
					'Official team member title.',
					'resource-blocks'
				) }
				value={ teamMemberTitle }
				onChange={ ( value ) =>
					setAttributes( { teamMemberTitle: value } )
				}
			/>
		</em>
	);
}
