/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	BlockControls, InnerBlocks
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { ToolbarDropdownMenu, ToolbarGroup } from '@wordpress/components';
import questions from './questions';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param props
 * @param  attributes
 * @param  setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit( props, attributes, setAttributes ) {
	const { question } = props.attributes;

	console.log( question );

	const controls = questions.map( ( singleQuestion ) => ( {
		title: __( singleQuestion, 'resource-blocks' ),
		icon: 'admin-default',
		onClick: () => {
			props.setAttributes( { question: singleQuestion } );
		},
	} ) );

	// use just the single-image blocks as a template
	const template = [
		[
			'resource-blocks/single-question',
			{
				question: 990,
				instructions: '',
			},
		],
		[
			'resource-blocks/single-question',
			{
				question: 990,
				instructions: '',
			},
		],
	];

	return (
		<>
			<BlockControls group="block">
				<ToolbarGroup>
					<ToolbarDropdownMenu
						icon="arrow-down-alt2"
						label={ __( 'Questions', 'resource-blocks' ) }
						controls={ [ controls ] }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InnerBlocks { ...useBlockProps() }
				template={ template }
				templateLock="insert"
				orientation="horizontal"
			/>
		</>
	);
}
