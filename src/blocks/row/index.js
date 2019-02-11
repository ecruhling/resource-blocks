/**
 * BLOCK: Row
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

const {
	InnerBlocks,
} = wp.editor

const {
	registerBlockType,
} = wp.blocks

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
const blockAttributes = {}

/**
 * Block Template
 */
const TEMPLATE = [
	['core/columns', {}, []]
]

/**
 * Block Settings
 */
export const settings = {
	title: __('Bootstrap Row'),
	description: __('Bootstrap Row as a Block'),
	icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
		<path d="m0 0h20v20h-20z" fill="none"/>
		<path d="m19 6.83v2.5h-18v-2.5h-1v2.5 1 2.5h1v-2.5h18v2.5h1v-2.5-1-2.5z"/>
	</svg>,
	category: 'resource-blocks',
	attributes: blockAttributes,
	edit ({ attributes, className }) {
		return (
			<div className={className}>
				<InnerBlocks
					allowedBlocks={['resource-blocks/columns']}
					template={TEMPLATE}
					templateLock='false'
				/>
			</div>
		)
	},
	save () {
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
