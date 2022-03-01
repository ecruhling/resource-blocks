/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { url, alt, width, height, id, title } = attributes;

	const classes = classnames( 'resource-blocks-row' );

	const image = (
		<img
			src={ url }
			alt={ alt }
			className={ id ? `wp-image-${ id }` : `` }
			width={ width }
			height={ height }
			title={ title }
		/>
	);

	const figure = <figure>{ image }</figure>;

	return (
		<div { ...useBlockProps.save( { className: classes } ) }>
			<div className={ 'resource-blocks-column' }>{ figure }</div>
		</div>
	);
}
