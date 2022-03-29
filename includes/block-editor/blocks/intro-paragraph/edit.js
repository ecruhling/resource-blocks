/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	AlignmentControl,
	BlockControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';

const name = 'resource-blocks/intro-paragraph';

function IntroductoryParagraphBlock( {
	attributes,
	mergeBlocks,
	onReplace,
	onRemove,
	setAttributes,
	clientId,
} ) {
	const { align, content, placeholder, preview } = attributes;
	const blockProps = useBlockProps( {
		className: classnames( 'resource-blocks-row', {
			[ `has-text-align-${ align }` ]: align,
		} ),
	} );

	if ( preview ) {
		return (
			<img
				src={
					// eslint-disable-next-line no-undef,camelcase
					resource_blocks_meta.plugin_path +
					'assets/images/intro-paragraph.gif'
				}
				alt="preview"
			/>
		);
	}

	return (
		<>
			<BlockControls group="block">
				<AlignmentControl
					value={ align }
					onChange={ ( newAlign ) =>
						setAttributes( { align: newAlign } )
					}
				/>
			</BlockControls>
			<div { ...blockProps }>
				<div className="resource-blocks-column">
					<RichText
						identifier="content"
						tagName="p"
						value={ content }
						onChange={ ( newContent ) =>
							setAttributes( { content: newContent } )
						}
						onSplit={ ( value, isOriginal ) => {
							let newAttributes;

							if ( isOriginal || value ) {
								newAttributes = {
									...attributes,
									content: value,
								};
							}

							const block = createBlock( name, newAttributes );

							if ( isOriginal ) {
								block.clientId = clientId;
							}

							return block;
						} }
						onMerge={ mergeBlocks }
						onReplace={ onReplace }
						onRemove={ onRemove }
						aria-label={
							content
								? __( 'Introductory paragraph block' )
								: __(
										'Empty Introductory paragraph; start writing or type forward slash to choose a block'
								  )
						}
						data-empty={ ! content }
						placeholder={
							placeholder || __( 'Introductory paragraph.' )
						}
						__unstableEmbedURLOnPaste
						__unstableAllowPrefixTransformations
					/>
				</div>
			</div>
		</>
	);
}

export default IntroductoryParagraphBlock;
