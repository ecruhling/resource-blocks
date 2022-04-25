/**
 * TODO: check original video embed block and get the original responsive / aspect ratio class logic from there. See edit.js for how it calculates this.
 */

/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { url, type, providerNameSlug, autoplay } = attributes;

	if ( ! url ) {
		return null;
	}

	const className = classnames( 'wp-block-embed resource-blocks-row', {
		[ `is-type-${ type }` ]: type,
		[ `is-provider-${ providerNameSlug }` ]: providerNameSlug,
		[ `wp-block-embed-${ providerNameSlug }` ]: providerNameSlug,
	} );

	return (
		<div { ...useBlockProps.save( { className } ) }>
			<div className={ 'resource-blocks-column' }>
				<div className="wp-block-embed__wrapper">
					{ `\n${ url }\n` /* URL needs to be on its own line. */ }
				</div>
			</div>
		</div>
	);
}
