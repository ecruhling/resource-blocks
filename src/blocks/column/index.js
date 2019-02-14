import classnames from 'classnames'

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

const {
	PanelBody,
	TextControl,
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
 * Block Name
 */
export const name = 'resource-blocks/column'

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
	title: __('Bootstrap Column'),
	parent: ['resource-blocks/row'],
	icon: <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
		<path d="m0 0h20v20h-20z" fill="none"/>
		<path d="m13 19h-2.5v-18h2.5v-1h-2.5-1-2.5v1h2.5v18h-2.5v1h2.5 1 2.5z"/>
	</svg>,
	description: __('Single Bootstrap column block.'),
	category: 'resource-blocks',
	attributes: blockAttributes,
	supports: {
		inserter: false,
		reusable: false,
		html: false,
	},

	edit ({ attributes, setAttributes, className }) {

		const { columns } = attributes
		const classes = classnames(className, `class-in-column-block`)

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Column Settings')}>
						<TextControl
							label="xs-class"
							value={ className }
							onChange={ ( className ) => setState( { className } ) }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={classes}>
					<InnerBlocks templateLock={false}/>
				</div>
			</Fragment>
		)
	},

	save ({ attributes }) {

		const { columns } = attributes

		return <div className={columns}>
			<InnerBlocks.Content/>
		</div>
	},
}

/**
 * Register Block
 */
registerBlockType(name, settings)
