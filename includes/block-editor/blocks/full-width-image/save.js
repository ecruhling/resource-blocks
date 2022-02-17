/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor'

export default function save ({ attributes }) {
	const {
		url,
		alt,
		width,
		height,
		id,
		title,
	} = attributes

	const classes = classnames({
		[`row`]: 'row',
	})

	const image = (
		<img
			src={url}
			alt={alt}
			className={id ? `wp-image-${id} img-fluid` : `img-fluid`}
			width={width}
			height={height}
			title={title}
		/>
	)

	const figure = (
		<figure>
			{image}
		</figure>
	)

	return (
		<div {...useBlockProps.save({ className: classes })}>
			<div className={'col-12'}>
				{figure}
			</div>
		</div>
	)
}
