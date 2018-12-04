/**
 * BLOCK: Hero
 */

/**
 * External dependencies
 */
const {filter, every, map, some} = lodash;

/**
 * WordPress dependencies
 */
const {__} = wp.i18n;

const {
	createBlock,
	registerBlockType,
} = wp.blocks;

const {
	RichText,
	BlockControls,
	AlignmentToolbar,
} = wp.editor;

/**
 * Internal dependencies
 */

import './style.scss';

const blockAttributes = {
	heading: {source: "children", selector: ".hero-heading"},
	text: {source: "children", selector: ".hero-text"},
	alignment: {type: "string"},
	position: {type: "string", default: "left"},
	width: {type: "number", default: 500},
	headingColor: {type: "string"},
	textColor: {type: "string"},
	buttonColor: {type: "string", default: "#ffffff"},
	showButton: {type: "bool", default: !0},
	buttonBackgroundColor: {type: "string", default: "#bc0d0d"},
	buttonText: {type: "string", default: "Click Here"},
	buttonURL: {type: "string", default: ""},
};

export const name = 'resource-blocks/hero';

const parseShortcodeIds = (ids) => {
	if (!ids) {
		return [];
	}

	return ids.split(',').map((id) => (
		parseInt(id, 10)
	));
};

export const settings = {
	title: __('Hero'),
	description: __('A block to display a full-width hero with overlayed text or buttons.'),
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M0,0h24v24H0V0z" fill="none"/>
		<path
			d="M21,4H3C1.9,4,1,4.9,1,6v12c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6C23,4.9,22.1,4,21,4z M21,18H3V6h18V18z"/>
		<polygon points="14.5 11 11 15.51 8.5 12.5 5 17 19 17"/>
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
					const validImages = filter(attributes, ({id, url}) => id && url);
					if (validImages.length > 0) {
						return createBlock(name, {
							images: validImages.map(({id, url, alt, caption}) => ({id, url, alt, caption})),
							ids: validImages.map(({id}) => id),
						});
					}
					return createBlock(name);
				},
			},
			{
				type: 'shortcode',
				tag: 'gallery',
				attributes: {
					images: {
						type: 'array',
						shortcode: ({named: {ids}}) => {
							return parseShortcodeIds(ids).map((id) => ({
								id,
							}));
						},
					},
					ids: {
						type: 'array',
						shortcode: ({named: {ids}}) => {
							return parseShortcodeIds(ids);
						},
					},
				},
			},
			{
				// When created by drag and dropping multiple files on an insertion point
				type: 'files',
				isMatch(files) {
					return files.length !== 1 && every(files, (file) => file.type.indexOf('image/') === 0);
				},
				transform(files, onChange) {
					const block = createBlock('resource-blocks/hero-carousel', {
						images: files.map((file) => pickRelevantMediaFiles({
							url: createBlobURL(file),
						})),
					});
					mediaUpload({
						filesList: files,
						onFileChange: (images) => {
							const imagesAttr = images.map(
								pickRelevantMediaFiles
							);
							onChange(block.clientId, {
								ids: map(imagesAttr, 'id'),
								images: imagesAttr,
							});
						},
						allowedTypes: ['image'],
					});
					return block;
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: ['core/image'],
				transform: ({images}) => {
					if (images.length > 0) {
						return images.map(({id, url, alt, caption}) => createBlock('core/image', {
							id,
							url,
							alt,
							caption
						}));
					}
					return createBlock('core/image');
				},
			},
		],
	},

	edit({attributes}) {

	},

	save({attributes}) {
		const {images, imageCrop, autoplay, autoplaySpeed, arrows, speed, effect} = attributes;
		return (
			<ul className={`${imageCrop ? 'is-cropped' : ''}`} data-autoplay={autoplay}
				data-autoplayspeed={autoplaySpeed} data-speed={speed}
				data-effect={effect} data-arrows={arrows}>
				{images.map((image) => {

					const img = <img src={image.url} alt={image.alt} data-id={image.id} data-link={image.link}
									 className={image.id ? `wp-image-${image.id} img-fluid d-none` : null}/>;

					return (
						<li key={image.id || image.url} className="blocks-carousel-slide">
							<div className="carousel-image bg-image responsive-background-image">
								{img}
							</div>
							{image.caption && image.caption.length > 0 && (
								<RichText.Content tagName="figcaption" value={image.caption}/>
							)}
						</li>
					);
				})}
			</ul>
		);
	},
};

registerBlockType(name, settings);
