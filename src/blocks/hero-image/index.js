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
	MediaUpload,
	PanelColorSettings,
} = wp.editor

const {
	PanelBody,
	Button,
} = wp.components

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
		default: null
	},
	backgroundImage: {
		type: 'string',
		default: '',
	}
}

/**
 * Block Settings
 */
export const settings = {
	title: __('Hero Image'),
	description: __('Full-width hero image with overlaid text.'),
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,0h24v24H0V0z" fill="none"/>
		<path
			d="M21,4H3C1.9,4,1,4.9,1,6v12c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6C23,4.9,22.1,4,21,4z M21,18H3V6h18V18z"/>
		<polygon points="14.5 11 11 15.51 8.5 12.5 5 17 19 17"/>
	</svg>,
	category: 'resource-blocks',
	keywords: [__('images'), __('hero')],
	attributes: blockAttributes,

	edit ({ setAttributes, attributes, className }) {

		const { fontColor, overlayColor, backgroundImage } = attributes

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

		function onImageSelect (imageObject) {
			setAttributes({
				backgroundImage: imageObject.sizes.full.url
			})
		}

		return ([
			<InspectorControls>
				<PanelColorSettings title={__('Color Settings')}
														colorSettings={[
															{
																value: overlayColor,
																onChange: onOverlayColorChange,
																label: __('Overlay Color'),
															},
															{
																value: fontColor,
																onChange: onTextColorChange,
																label: __('Text Color'),
															},
														]}>
				</PanelColorSettings>
				<PanelBody title={ __( 'Background Image' ) }>
					<MediaUpload
						onSelect={onImageSelect}
						type="image"
						value={backgroundImage}
						render={({ open }) => (
							<Button onClick={open}
							className="editor-post-featured-image__toggle">
								Change / Upload Background Image
							</Button>
						)}
					/>
				</PanelBody>
			</InspectorControls>,
			<div
				className={className}
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}>
				<div className="overlay"
						 style={{ background: overlayColor }}
				>&nbsp;</div>
				<RichText
					tagName="h2"
					className="content"
					value={attributes.textString}
					onChange={onTextChange}
					placeholder="Enter text"
					style={{ color: fontColor }}
				/>
			</div>
		])
	},

	save ({ attributes, className }) {

		const { fontColor, overlayColor, backgroundImage } = attributes

		return (
			<div
				className={className}
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}>
				<div className="overlay"
						 style={{ background: overlayColor }}
				>&nbsp;</div>
				<h2 className="content" style={{ color: fontColor }}>{attributes.textString}</h2>
			</div>
		)

	},
}

registerBlockType(name, settings)
