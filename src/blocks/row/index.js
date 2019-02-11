/**
 * BLOCK: Row
 */

/**
 * External dependencies
 */
import { times } from 'lodash'
import classnames from 'classnames'
import memoize from 'memize'

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

const {
	PanelBody,
	RangeControl,
} = wp.components

const {
	Fragment,
} = wp.element

const {
	InspectorControls,
	InnerBlocks,
} = wp.editor

const {
	registerBlockType,
} = wp.blocks

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = ['resource-blocks/column']

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */
const getColumnsTemplate = memoize((columns) => {
	return times(columns, () => ['resource-blocks/column', { className: 'column' }])
})

/**
 * Internal dependencies
 */
import './style.scss'

/**
 * Block Name
 */
export const name = 'resource-blocks/row'

/**
 * Block Attributes
 */
const blockAttributes = {
	columns: {
		type: 'number',
		default: 1,
	},
}

/**
 * Block Settings
 */
export const settings = {
	title: __('Bootstrap Row'),
	description: __('Bootstrap row as a block'),
	icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
		<path d="m0 0h20v20h-20z" fill="none"/>
		<path d="m19 6.83v2.5h-18v-2.5h-1v2.5 1 2.5h1v-2.5h18v2.5h1v-2.5-1-2.5z"/>
	</svg>,
	category: 'resource-blocks',
	attributes: blockAttributes,
	supports: { align: ['wide', 'full'] },
	edit ({ attributes, setAttributes, className }) {

		const { columns } = attributes
		const classes = classnames(className, `col-${columns}`)

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<RangeControl
							label={__('Columns')}
							value={columns}
							onChange={(nextColumns) => {
								setAttributes({
									columns: nextColumns,
								})
							}}
							min={1}
							max={12}
						/>
					</PanelBody>
				</InspectorControls>
				<div className={className}>
					<InnerBlocks
						template={getColumnsTemplate(columns)}
						templateLock="all"
						allowedBlocks={ALLOWED_BLOCKS}/>
				</div>
			</Fragment>
		)
	},
	save ({ attributes }) {

		const { columns } = attributes

		return (
			<div className='row'>
				<InnerBlocks.Content/>
			</div>
		)
	}
}

/**
 * Register Block
 */
registerBlockType(name, settings)
