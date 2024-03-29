/**
 * External dependencies.
 */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies.
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		url,
		alt,
		caption,
		align,
		showCaption,
		alignCaption,
		href,
		rel,
		linkClass,
		width,
		imageWidthInsideContainer,
		height,
		designWidth,
		designHeight,
		id,
		linkTarget,
		title,
	} = attributes;

	const newRel = isEmpty( rel ) ? undefined : rel;

	const classes = classnames( 'size-full', {
		[ `align${ align }` ]: align,
		[ `align-caption-${ alignCaption }` ]: alignCaption,
		[ `has-${ showCaption ? 'caption' : 'no-caption' }` ]: showCaption,
	} );

	const image = (
		<img
			src={ url }
			alt={ alt }
			className={ id ? `wp-image-${ id }` : null }
			width={ width }
			height={ height }
			title={ title }
			data-design-width={ designWidth }
			data-design-height={ designHeight }
		/>
	);

	const figure = (
		<>
			{ href ? (
				<a
					className={ linkClass }
					href={ href }
					target={ linkTarget }
					rel={ newRel }
				>
					{ image }
				</a>
			) : (
				image
			) }
			{ ! RichText.isEmpty( caption ) && (
				<RichText.Content tagName="figcaption" value={ caption } />
			) }
		</>
	);

	const styles = imageWidthInsideContainer
		? { style: { width: imageWidthInsideContainer } }
		: {};

	return (
		<figure
			{ ...useBlockProps.save( {
				className: classes,
			} ) }
			{ ...styles }
		>
			{ figure }
		</figure>
	);
}
