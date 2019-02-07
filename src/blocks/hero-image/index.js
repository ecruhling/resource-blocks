/**
 * BLOCK: Hero
 */

/**
 * Localization
 */
const { __ } = wp.i18n

/**
 * Block Editor components
 */
const {
	RichText,
	InspectorControls,
	ColorPalette,
} = wp.editor

const {
	registerBlockType,
} = wp.blocks

const {} = wp.element

/**
 * Internal dependencies
 */
import './style.scss'

/**
 * Block Name
 */
export const name = 'resource-blocks/hero-image'

/**
 * Block Attributes
 */
const blockAttributes = {
	textString: {
		type: 'array',
		source: 'children',
		selector: 'h2',
	},
	fontColor: {
		type: 'string',
		default: 'black'
	},
	overlayColor: {
		type: 'string',
		default: 'orange'
	},
}

/**
 * Block Settings
 */
export const settings = {
	title: __('Hero Image'),
	description: __('A block to display a full-width hero image with overlaid text or buttons.'),
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,0h24v24H0V0z" fill="none"/>
		<path
			d="M21,4H3C1.9,4,1,4.9,1,6v12c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6C23,4.9,22.1,4,21,4z M21,18H3V6h18V18z"/>
		<polygon points="14.5 11 11 15.51 8.5 12.5 5 17 19 17"/>
	</svg>,
	category: 'resource-blocks',
	keywords: [__('images'), __('hero')],
	attributes: blockAttributes,

	edit ({ setAttributes, attributes, className, focus }) {

		const { fontColor, overlayColor } = attributes

		function onTextChange (changes) {
			setAttributes({
				textString: changes
			})
		}

		function onTextColorChange (changes) {
			setAttributes({
				fontColor: changes
			})
		}

		function onOverlayColorChange (changes) {
			setAttributes({
				overlayColor: changes
			})
		}

		return ([
			<InspectorControls>
				<div>
					<strong>Select a font color:</strong>
					<ColorPalette
						value={fontColor}
						onChange={onTextColorChange}
					/>
				</div>
				<div>
					<strong>Select an overlay color:</strong>
					<ColorPalette
						value={overlayColor}
						onChange={onOverlayColorChange}
					/>
				</div>
			</InspectorControls>,
			<div
				className={className}
				style={{
					backgroundImage: `url('http://placehold.it/1440x700')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}>
				<div className="overlay"
						 style={{ background: overlayColor }}
				></div>
				{/* Adding an overlay element */}
				<RichText
					tagName="h2"
					className="content" // adding a class we can target
					value={attributes.textString}
					onChange={onTextChange}
					placeholder="Enter your text here!"
					style={{ color: fontColor }}
				/>
			</div>
		])
	},

	save ({ attributes, className }) {

		const { fontColor, overlayColor } = attributes

		return (
			<div
				className={className}
				style={{
					backgroundImage: `url('http://placehold.it/1440x700')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}>
				<div className="overlay"
						 style={{ background: overlayColor }}
				></div>
				<h2 className="content" style={{ color: fontColor }}>{attributes.textString}</h2>
			</div>
		)

	},
}

registerBlockType(name, settings)
