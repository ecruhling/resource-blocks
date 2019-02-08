/**
 * BLOCK: Hero Carousel
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

const {
	mediaUpload,
} = wp.editor

const {
	createBlock,
	registerBlockType,
} = wp.blocks

const {
	createBlobURL,
} = wp.blob

/**
 * Internal dependencies
 */
import { default as edit, pickRelevantMediaFiles } from './edit'
import './style.scss'

/**
 * Block Name
 */
export const name = 'resource-blocks/hero-carousel'

/**
 * Block Attributes
 */
const blockAttributes = {
	images: {
		type: 'array',
		default: [],
		source: 'query',
		selector: 'ul.wp-block-resource-blocks-hero-carousel .blocks-carousel-slide',
		query: {
			url: {
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
			link: {
				source: 'attribute',
				selector: 'img',
				attribute: 'data-link',
			},
			alt: {
				source: 'attribute',
				selector: 'img',
				attribute: 'alt',
				default: '',
			},
			id: {
				source: 'attribute',
				selector: 'img',
				attribute: 'data-id',
			},
		},
	},
	ids: {
		type: 'array',
		default: [],
	},
	adaptiveHeight: {
		type: 'boolean',
		default: false,
	},
	autoplay: {
		type: 'boolean',
		default: true,
	},
	autoplaySpeed: {
		type: 'string',
		default: '3000',
	},
	arrows: {
		type: 'boolean',
		default: true,
	},
	centerMode: {
		type: 'boolean',
		default: false,
	},
	dots: {
		type: 'boolean',
		default: true,
	},
	speed: {
		type: 'string',
		default: '300',
	},
	effect: {
		type: 'string',
		default: 'fade',
	},
}

/**
 * Block Settings
 */
export const settings = {
	title: __('Hero Carousel'),
	description: __('Full-width image carousel using background images.'),
	icon: <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		<path d="m0 0h20v20h-20z" fill="none"/>
		<path d="m20 18h-20v-16h20zm-18-2h16v-12h-16z"/>
		<path d="m5.87 12.62-2.01-2.63 2.01-2.57 1.33 1.03-1.21 1.56 1.22 1.6z"/>
		<path d="m14.34 12.62-1.34-1.01 1.22-1.6-1.22-1.56 1.33-1.03 2.01 2.57z"/>
	</svg>,
	category: 'resource-blocks',
	keywords: [__('images'), __('photos')],
	attributes: blockAttributes,
	transforms: {
		from: [
			{
				type: 'block',
				isMultiBlock: true,
				blocks: ['core/image'],
				transform: (attributes) => {
					const validImages = filter(attributes, ({ id, url }) => id && url)
					if (validImages.length > 0) {
						return createBlock(name, {
							images: validImages.map(({ id, url, alt }) => ({ id, url, alt })),
							ids: validImages.map(({ id }) => id),
						})
					}
					return createBlock(name)
				},
			},
			{
				type: 'shortcode',
				tag: 'gallery',
				attributes: {
					images: {
						type: 'array',
						shortcode: ({ named: { ids } }) => {
							return parseShortcodeIds(ids).map((id) => ({
								id,
							}))
						},
					},
					ids: {
						type: 'array',
						shortcode: ({ named: { ids } }) => {
							return parseShortcodeIds(ids)
						},
					},
				},
			},
			{
				// When created by drag and dropping multiple files on an insertion point
				type: 'files',
				isMatch (files) {
					return files.length !== 1 && every(files, (file) => file.type.indexOf('image/') === 0)
				},
				transform (files, onChange) {
					const block = createBlock('resource-blocks/hero-carousel', {
						images: files.map((file) => pickRelevantMediaFiles({
							url: createBlobURL(file),
						})),
					})
					mediaUpload({
						filesList: files,
						onFileChange: (images) => {
							const imagesAttr = images.map(
								pickRelevantMediaFiles
							)
							onChange(block.clientId, {
								ids: map(imagesAttr, 'id'),
								images: imagesAttr,
							})
						},
						allowedTypes: ['image'],
					})
					return block
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: ['core/image'],
				transform: ({ images }) => {
					if (images.length > 0) {
						return images.map(({ id, url, alt }) => createBlock('core/image', {
							id,
							url,
							alt,
						}))
					}
					return createBlock('core/image')
				},
			},
		],
	},

	edit,

	save ({ attributes }) {
		const { images, adaptiveHeight, autoplay, autoplaySpeed, arrows, centerMode, dots, speed, effect } = attributes

		return (
			<ul className='hero-carousel'
					data-adaptiveheight={adaptiveHeight}
					data-autoplay={autoplay}
					data-autoplayspeed={autoplaySpeed}
					data-speed={speed}
					data-effect={effect}
					data-arrows={arrows}
					data-centermode={centerMode}
					data-dots={dots}>

				{images.map((image) => {

					const img = <img src={image.url} alt={image.alt} data-id={image.id} data-link={image.link}
													 style={{ display: 'none' }} className={image.id ? `wp-image-${image.id} img-fluid d-none hero-carousel-item` : null}/>

					return (
						<li key={image.id || image.url} className="blocks-carousel-slide">
							<div className="carousel-image bg-image srcset-background-image">
								{img}
							</div>
						</li>
					)
				})}
			</ul>
		)
	},
}

registerBlockType(name, settings)
