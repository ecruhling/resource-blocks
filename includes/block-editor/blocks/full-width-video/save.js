/**
 * External dependencies
 */
import classnames from 'classnames/dedupe'

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor'

export default function save ({ attributes }) {
	const { url, type, providerNameSlug } = attributes

	if (!url) {
		return null
	}

	const className = classnames('wp-block-embed row', {
		[`is-type-${type}`]: type,
		[`is-provider-${providerNameSlug}`]: providerNameSlug,
		[`wp-block-embed-${providerNameSlug}`]: providerNameSlug,
	})

	return (
		<div {...useBlockProps.save({ className })}>
			<figure className={'col-12'}>
				<div className="wp-block-embed__wrapper">
					{`\n${url}\n` /* URL needs to be on its own line. */}
				</div>
			</figure>
		</div>
	)
}
