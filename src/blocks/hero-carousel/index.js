/**
 * BLOCK: Hero Carousel
 */

/**
 * External dependencies
 */
const {filter, every, map, some} = lodash;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n

const {
	createBlock,
	registerBlockType,
} = wp.blocks;

const {
	RichText,
	mediaUpload,
} = wp.editor;

const {
	createBlobURL,
} = wp.blob;

const {
	G,
	Path,
	SVG,
} = wp.components;

/**
 * Internal dependencies
 */

import {default as edit, pickRelevantMediaFiles} from './edit';

import './style.scss';

const blockAttributes = {
	images: {
		type: 'array',
		default: [],
		source: 'query',
		selector: 'ul.wp-block-resource-blocks-hero-carousel .blocks-gallery-item',
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
			caption: {
				type: 'string',
				source: 'html',
				selector: 'figcaption',
			},
		},
	},
	ids: {
		type: 'array',
		default: [],
	},
	imageCrop: {
		type: 'boolean',
		default: true,
	},
	autoplay: {
		type: 'boolean',
		default: true,
	},
	arrows: {
		type: 'boolean',
		default: false,
	},
	speed: {
		type: 'string',
		default: '300',
	},
	effect: {
		type: 'string',
		default: 'fade',
	},
	linkTo: {
		type: 'string',
		default: 'none',
	},
};

export const name = 'resource-blocks/hero-carousel';

const parseShortcodeIds = (ids) => {
	if (!ids) {
		return [];
	}

	return ids.split(',').map((id) => (
		parseInt(id, 10)
	));
};

export const settings = {
	title: __('Hero Carousel', 'hero-carousel'),
	description: __('A block to display a full-width hero with an image background.', 'slick-carousel--hero'),
	icon: <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		<path d="m20 17.13h-20v-14.26h20zm-18.32-1.68h16.63v-10.9h-16.63z"/>
		<path d="m5.87 12.62-2.01-2.63 2.01-2.57 1.33 1.03-1.21 1.56 1.22 1.6z"/>
		<path d="m14.34 12.62-1.34-1.01 1.22-1.6-1.22-1.56 1.33-1.03 2.01 2.57z"/>
	</svg>,
	category: 'resource-blocks',
	keywords: [ __( 'images' ), __( 'photos' ) ],
	attributes: blockAttributes,

	transforms: {
		from: [
			{
				type: 'block',
				isMultiBlock: true,
				blocks: [ 'core/image' ],
				transform: ( attributes ) => {
					const validImages = filter( attributes, ( { id, url } ) => id && url );
					if ( validImages.length > 0 ) {
						return createBlock( 'resource-blocks/hero-carousel', {
							images: validImages.map( ( { id, url, alt, caption } ) => ( { id, url, alt, caption } ) ),
							ids: validImages.map( ( { id } ) => id ),
						} );
					}
					return createBlock( 'resource-blocks/hero-carousel' );
				},
			},
			{
				type: 'shortcode',
				tag: 'gallery',
				attributes: {
					images: {
						type: 'array',
						shortcode: ( { named: { ids } } ) => {
							return parseShortcodeIds( ids ).map( ( id ) => ( {
								id,
							} ) );
						},
					},
					ids: {
						type: 'array',
						shortcode: ( { named: { ids } } ) => {
							return parseShortcodeIds( ids );
						},
					},
					linkTo: {
						type: 'string',
						shortcode: ( { named: { link = 'attachment' } } ) => {
							return link === 'file' ? 'media' : link;
						},
					},
				},
			},
			{
				// When created by drag and dropping multiple files on an insertion point
				type: 'files',
				isMatch( files ) {
					return files.length !== 1 && every( files, ( file ) => file.type.indexOf( 'image/' ) === 0 );
				},
				transform( files, onChange ) {
					const block = createBlock( 'resource-blocks/hero-carousel', {
						images: files.map( ( file ) => pickRelevantMediaFiles( {
							url: createBlobURL( file ),
						} ) ),
					} );
					mediaUpload( {
						filesList: files,
						onFileChange: ( images ) => {
							const imagesAttr = images.map(
								pickRelevantMediaFiles
							);
							onChange( block.clientId, {
								ids: map( imagesAttr, 'id' ),
								images: imagesAttr,
							} );
						},
						allowedTypes: [ 'image' ],
					} );
					return block;
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/image' ],
				transform: ( { images } ) => {
					if ( images.length > 0 ) {
						return images.map( ( { id, url, alt, caption } ) => createBlock( 'core/image', { id, url, alt, caption } ) );
					}
					return createBlock( 'core/image' );
				},
			},
		],
	},

	edit,

	save( { attributes } ) {
		const { images, imageCrop, autoplay, arrows, speed, effect, linkTo } = attributes;
		return (
			<ul className={ `${ imageCrop ? 'is-cropped' : '' }` } data-autoplay={ autoplay } data-speed={ speed } data-effect={ effect } data-arrows={ arrows }>
				{ images.map( ( image ) => {
					let href;

					switch ( linkTo ) {
						case 'media':
							href = image.url;
							break;
						case 'attachment':
							href = image.link;
							break;
					}

					const img = <img src={ image.url } alt={ image.alt } data-id={ image.id } data-link={ image.link } className={ image.id ? `wp-image-${ image.id }` : null } />;

					return (
						<li key={ image.id || image.url } className="blocks-gallery-item">
							<figure>
								{ href ? <a href={ href }>{ img }</a> : img }
								{ image.caption && image.caption.length > 0 && (
									<RichText.Content tagName="figcaption" value={ image.caption } />
								) }
							</figure>
						</li>
					);
				} ) }
			</ul>
		);
	},
};

registerBlockType( name, settings );
