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
	BlockControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import { dispatch } from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { ToolbarDropdownMenu, ToolbarGroup } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';

import questions from './questions';
import icons from '../../../icons/icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @param  attributes
 * @param  setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit( props, attributes, setAttributes ) {
	const {
		attributes: { question },
		clientId,
	} = props;

console.log(question, clientId);

	/**
	 * Add Single Question Block
	 */
	const onAddBlock = () => {
		// const newColumn = 0;

		// Create a new block
		const block = createBlock( 'resource-blocks/single-question', {
			content: 'test content',
		} );

		// Insert the block
		wp.data
			.dispatch( 'core/block-editor' )
			.insertBlock( block, 1, clientId, true );

		console.log( block, clientId );

		// Update the columns attribute
		// setAttributes( {
		// 	columns: columns.concat( newColumn ),
		// } );
	};

	const controls = questions.map( ( singleQuestion ) => ( {
		title: __( singleQuestion, 'resource-blocks' ),
		icon: icons.question,
		onClick: () => {
			onAddBlock();
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
	];

	return (
		<>
			<BlockControls group="block">
				<ToolbarGroup>
					<ToolbarDropdownMenu
						icon={ icons.question }
						label={ __( 'Questions', 'resource-blocks' ) }
						controls={ [ controls ] }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InnerBlocks
				{ ...useBlockProps() }
				allowedBlocks={ [ 'resource-blocks/single-question' ] }
				template={ template }
				templateLock={ false }
				orientation="horizontal"
				// renderAppender={ false }
			/>
		</>
	);
}
