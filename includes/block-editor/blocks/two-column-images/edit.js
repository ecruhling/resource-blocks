/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { withNotices } from '@wordpress/components'
import {
	BlockIcon, InnerBlocks, useBlockProps,
} from '@wordpress/block-editor'
import icons from '../../../icons/icons'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export function ColumnsEdit ({
															 className,
														 }) {

	const classes = classnames(className)

	const blockProps = useBlockProps({
		className: classes,
	})

	// use just the single-image blocks as a template
	const template = [
		['resource-blocks/single-image', {}],
		['resource-blocks/single-image', {}],
	]

	return (<div {...blockProps}>
		<InnerBlocks
			template={template}
			templateLock="all"
		/>
	</div>)
}

export default withNotices(ColumnsEdit)
