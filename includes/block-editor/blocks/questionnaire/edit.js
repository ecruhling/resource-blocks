/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { ToolbarDropdownMenu, ToolbarGroup } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies.
 */
import questions from './questions';
import icons from '../../../icons/icons';

/**
 * External dependencies
 */
import classnames from 'classnames';

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
 * @param {Object}    props
 * @param {WPElement} className
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit( props, { className } ) {
	const { clientId } = props;
	const classes = classnames( className, 'resource-blocks-row' );

	const blockProps = useBlockProps( {
		className: classes,
	} );

	const innerBlockCount = useSelect(
		( select ) =>
			select( 'core/block-editor' ).getBlock( clientId ).innerBlocks
	);

	/**
	 * Add Single Question Block
	 *
	 * @param {string} singleQuestion
	 */
	const addBlock = ( singleQuestion ) => {
		// Create a new block
		const block = createBlock( 'resource-blocks/single-question', {
			question: singleQuestion,
		} );

		// Insert the block
		wp.data
			.dispatch( 'core/block-editor' )
			.insertBlock( block, innerBlockCount.length, clientId, true, {
				question: singleQuestion,
			} );

		// Update the question attribute
		props.setAttributes( {
			question: singleQuestion,
		} );
	};

	const controls = questions.map( ( singleQuestion ) => ( {
		title: singleQuestion,
		icon: icons.question,
		onClick: () => {
			addBlock( singleQuestion );
		},
	} ) );

	// This is a hack which forces the template to appear valid.
	// See https://github.com/WordPress/gutenberg/issues/11681
	window.wp.data.dispatch( 'core/block-editor' ).setTemplateValidity( true );

	return (
		<div { ...blockProps }>
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
				allowedBlocks={ [ 'resource-blocks/single-question' ] }
				templateLock={ false }
				orientation="horizontal"
				placeholder={ __(
					'Select a question from the Question mark drop down menu above.',
					'resource-blocks'
				) }
				renderAppender={ false }
			/>
		</div>
	);
}
