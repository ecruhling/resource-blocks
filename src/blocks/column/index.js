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
 * Block Name
 */
export const name = 'resource-blocks/column'

/**
 * Block Settings
 */
export const settings = {
	title: __('Bootstrap Column'),
	parent: ['resource-blocks/row'],
	icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
		<path d="m0 0h20v20h-20z" fill="none"/>
		<path d="m13 19h-2.5v-18h2.5v-1h-2.5-1-2.5v1h2.5v18h-2.5v1h2.5 1 2.5z"/>
	</svg>,
	description: __('Single Bootstrap column block.'),
	category: 'resource-blocks',
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	edit () {
		return <InnerBlocks templateLock={false}/>
	},

	save () {
		return <div className={'col'}><InnerBlocks.Content/></div>
	},
}

/**
 * Register Block
 */
registerBlockType(name, settings)
