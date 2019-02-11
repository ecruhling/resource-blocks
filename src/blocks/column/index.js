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
	parent: ['resource-blocks/columns'],
	icon: <svg xmlns="http://www.w3.org/2000/svg">
		<path fill="none" d="m0 0h24v24h0v0z"/>
		<path
			d="m11.99 18.54l-7.37-5.73l3 14.07l9 7 9-7-1.63-1.27zm12 16l7.36-5.73l21 9l-9-7-9 7 1.63 1.27l12 16zm0-11.47l17.74 9 12 13.47 6.26 9 12 4.53z"/>
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
