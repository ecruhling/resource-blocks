/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		url,
		alt,
		align,
		width,
		height,
		id,
		sizeSlug,
		title,
	} = attributes;

	const classes = classnames( {
		[ `align${ align }` ]: align,
		[ `size-${ sizeSlug }` ]: sizeSlug,
		'is-resized': width || height,
		[ `col-12 px-sm-0` ]: 'col-12 px-sm-0',
	} );

	const image = (
		<img
			src={ url }
			alt={ alt }
			className={ id ? `wp-image-${ id }` : null }
			width={ width }
			height={ height }
			title={ title }
		/>
	);

	const figure = (
		<figure>
			{ image }
		</figure>
	);

	return (
		<div { ...useBlockProps.save( { className: classes } ) }>
			{ figure }
		</div>
	);
}
