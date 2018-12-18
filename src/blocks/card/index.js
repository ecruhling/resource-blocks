/**
 * BLOCK: Card
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

const {
	RichText,
	MediaUpload,
	PlainText,
} = wp.editor

const {
	registerBlockType,
} = wp.blocks

const {
	Button,
} = wp.components

/**
 * Internal dependencies
 */
import './style.scss'
import './editor.scss'

/**
 * Block Name
 */
export const name = 'resource-blocks/card'

/**
 * Block Attributes
 */
const blockAttributes = {
	title: {
		source: 'text',
		selector: '.card__title'
	},
	body: {
		type: 'array',
		source: 'children',
		selector: '.card__body'
	},
	imageAlt: {
		attribute: 'alt',
		selector: '.card__image'
	},
	imageUrl: {
		attribute: 'src',
		selector: '.card__image'
	}
}

/**
 * Block Settings
 */
export const settings = {
	title: __('Card'),
	description: __('A card block'),
	icon: <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		<path d="m20 19.23h-20v-18.46h20zm-18.32-2.18h16.63v-14.1h-16.63z"/>
		<path
			d="m10.18 9.39c.41-.02.81-.24 1.21-.66l.02-.02c.27-.28.5-.46.69-.55s.39-.13.61-.13c.44 0 .81.15 1.12.45s.45.67.45 1.1c0 .44-.15.81-.45 1.1s-.67.45-1.12.45c-.22 0-.43-.05-.61-.14s-.41-.28-.68-.54c0 0-.01 0-.01-.01-.41-.44-.83-.67-1.24-.68.03.4.24.8.64 1.2l.04.04c.27.27.45.5.54.69s.14.39.14.61c0 .44-.15.81-.45 1.12s-.67.46-1.1.46c-.44 0-.8-.15-1.1-.45s-.45-.68-.45-1.12c0-.22.04-.42.13-.6s.29-.44.56-.71c.01-.01.03-.03.05-.05.4-.39.61-.79.62-1.2-.39.03-.79.25-1.2.65l-.04.04c-.27.27-.5.46-.69.55s-.39.14-.61.14c-.45 0-.82-.15-1.12-.45s-.45-.67-.45-1.11c0-.43.15-.8.45-1.1s.67-.45 1.12-.45c.22 0 .43.04.61.13s.43.28.7.55l.05.05c.39.4.79.61 1.2.62-.03-.39-.24-.78-.63-1.18-.02-.02-.04-.04-.06-.05-.27-.28-.45-.51-.54-.69s-.14-.39-.14-.61c0-.44.15-.81.45-1.12s.66-.45 1.1-.45c.43 0 .8.15 1.1.45s.45.67.45 1.12c0 .22-.05.43-.14.62s-.28.42-.54.69l-.04.04c-.41.39-.62.8-.64 1.2z"/>
	</svg>,
	category: 'resource-blocks',
	attributes: blockAttributes,
	edit ({ attributes, className, setAttributes }) {

		const getImageButton = (openEvent) => {
			if (attributes.imageUrl) {
				return (
					<img
						src={attributes.imageUrl}
						onClick={openEvent}
						className="image"
					/>
				)
			} else {
				return (
					<div className="button-container">
						<Button
							onClick={openEvent}
							className="button button-large"
						>
							Pick an image
						</Button>
					</div>
				)
			}
		}

		return (
			<div className="container">
				<MediaUpload
					onSelect={media => {
						setAttributes({ imageAlt: media.alt, imageUrl: media.url })
					}}
					type="image"
					value={attributes.imageID}
					render={({ open }) => getImageButton(open)}
				/>
				<PlainText
					onChange={content => setAttributes({ title: content })}
					value={attributes.title}
					placeholder="Your card title"
					className="heading"
				/>
				<RichText
					onChange={content => setAttributes({ body: content })}
					value={attributes.body}
					multiline="p"
					placeholder="Your card text"
				/>
			</div>
		)
	},
	save ({ attributes }) {

		const cardImage = (src, alt) => {
			if (!src) {
				return null
			}
			if (alt) {
				return (
					<img
						className="card__image"
						src={src}
						alt={alt}
					/>
				)
			}

			// No alt set, so let's hide it from screen readers
			return (
				<img
					className="card__image"
					src={src}
					alt=""
					aria-hidden="true"
				/>
			)
		}

		return (
			<div className="card">
				{cardImage(attributes.imageUrl, attributes.imageAlt)}
				<div className="card__content">
					<h3 className="card__title">{attributes.title}</h3>
					<div className="card__body">
						{attributes.body}
					</div>
				</div>
			</div>
		)
	}
}

/**
 * Register Block
 */
registerBlockType(name, settings)
