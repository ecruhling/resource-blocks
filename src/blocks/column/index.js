import classnames from 'classnames'

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
	createHigherOrderComponent
} = wp.compose

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
	xsColumnWidth: {
		type: 'number',
		default: null,
	},
	smColumnWidth: {
		type: 'number',
		default: null,
	},
	mdColumnWidth: {
		type: 'number',
		default: null,
	},
	lgColumnWidth: {
		type: 'number',
		default: null,
	},
	xlColumnWidth: {
		type: 'number',
		default: null,
	},
}

/**
 * Block Filter
 */

const withCustomClassName = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		if (props.attributes.xsColumnWidth) {
			return <BlockListBlock {...props} className={'col-xs-' + props.attributes.xsColumnWidth}/>
		} else if (props.attributes.smColumnWidth) {
			return <BlockListBlock {...props} className={'col-sm-' + props.attributes.smColumnWidth}/>
		} else if (props.attributes.mdColumnWidth) {
			return <BlockListBlock {...props} className={'col-md-' + props.attributes.mdColumnWidth}/>
		} else if (props.attributes.lgColumnWidth) {
			return <BlockListBlock {...props} className={'col-lg-' + props.attributes.lgColumnWidth}/>
		} else if (props.attributes.xlColumnWidth) {
			return <BlockListBlock {...props} className={'col-xl-' + props.attributes.xlColumnWidth}/>
		} else {
			return <BlockListBlock {...props} />
		}

	}
}, 'withClientIdClassName')

wp.hooks.addFilter('editor.BlockListBlock', 'resource-blocks/with-client-id-class-name', withCustomClassName)

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

		const { xsColumnWidth, smColumnWidth, mdColumnWidth, lgColumnWidth, xlColumnWidth } = attributes
		const classes = classnames(className)

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Column Settings')}>
						<RangeControl
							label="xs column width (< 576px)"
							value={xsColumnWidth}
							onChange={(nextWidth) => {
								setAttributes({
									xsColumnWidth: nextWidth,
								})
							}}
							min={1}
							max={12}
						/>
						<RangeControl
							label="sm column width (576px - 768px)"
							value={smColumnWidth}
							onChange={(nextWidth) => {
								setAttributes({
									smColumnWidth: nextWidth,
								})
							}}
							min={1}
							max={12}
						/>
						<RangeControl
							label="md column width (768px - 992px)"
							value={mdColumnWidth}
							onChange={(nextWidth) => {
								setAttributes({
									mdColumnWidth: nextWidth,
								})
							}}
							min={1}
							max={12}
						/>
						<RangeControl
							label="lg column width (992px - 1200px)"
							value={lgColumnWidth}
							onChange={(nextWidth) => {
								setAttributes({
									lgColumnWidth: nextWidth,
								})
							}}
							min={1}
							max={12}
						/>
						<RangeControl
							label="xl column width (> 1200px)"
							value={xlColumnWidth}
							onChange={(nextWidth) => {
								setAttributes({
									xlColumnWidth: nextWidth,
								})
							}}
							min={1}
							max={12}
						/>
					</PanelBody>
				</InspectorControls>
				<div className={classes}>
					<InnerBlocks templateLock={false}/>
				</div>
			</Fragment>
		)
	},

	save ({ attributes, className }) {

		const { xsColumnWidth, smColumnWidth, mdColumnWidth, lgColumnWidth, xlColumnWidth } = attributes
		const classes = classnames(
			className,
			{['col-xs-' + xsColumnWidth] : xsColumnWidth},
			{['col-sm-' + smColumnWidth] : smColumnWidth},
			{['col-md-' + mdColumnWidth] : mdColumnWidth},
			{['col-lg-' + lgColumnWidth] : lgColumnWidth},
			{['col-xl-' + xlColumnWidth] : xlColumnWidth},
		)

		return <div className={classes}>
			<InnerBlocks.Content/>
		</div>
	},
}

/**
 * Register Block
 */
registerBlockType(name, settings)
