/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import 'lodash';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { DropdownMenu, ToolbarGroup } from '@wordpress/components';
import questions from './questions';

const controls = questions.map( ( p ) => ( {
	title: __( p, 'resource-blocks' ),
	icon: 'admin-default',
} ) );

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<DropdownMenu
						icon="arrow-down-alt2"
						label={ __( 'Questions', 'resource-blocks' ) }
						controls={ [ controls ] }
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText { ...useBlockProps() } placeholder={ __( 'Question' ) } />
		</>
	);
}
