/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { withNotices } from '@wordpress/components';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

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
 * @param  root0
 * @param  root0.className
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export function ColumnsEdit( { className } ) {
	const classes = classnames( className, 'resource-blocks-row' );

	const blockProps = useBlockProps( {
		className: classes,
	} );

	const instructions = __(
		'Upload an image, or pick one from the media library. Image must be 990px wide x 990px tall.',
		'resource-blocks'
	);

	// use just the single-image blocks as a template
	const template = [
		[
			'resource-blocks/single-image',
			{
				required_width: 990,
				instructions,
			},
		],
		[
			'resource-blocks/single-image',
			{
				required_width: 990,
				instructions,
			},
		],
	];

	return (
		<div { ...blockProps }>
			<InnerBlocks
				template={ template }
				templateLock="insert"
				orientation="horizontal"
			/>
		</div>
	);
}

export default withNotices( ColumnsEdit );
