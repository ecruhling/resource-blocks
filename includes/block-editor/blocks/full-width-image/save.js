/**
 * External dependencies
 */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		url,
		alt,
		align,
		rel,
		width,
		height,
		id,
		sizeSlug,
		title,
	} = attributes;

	const newRel = isEmpty( rel ) ? undefined : rel;

	const classes = classnames( {
		[ `align${ align }` ]: align,
		[ `size-${ sizeSlug }` ]: sizeSlug,
		'is-resized': width || height,
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
		<>
			{ image }
		</>
	);

	return (
		<figure { ...useBlockProps.save( { className: classes } ) }>
			{ figure }
		</figure>
	);
}
