/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { align, content } = attributes;
	const className = classnames( 'resource-blocks-row', {
		[ `has-text-align-${ align }` ]: align,
	} );

	return (
		<div className="wp-block-resource-blocks-body-text resource-blocks-row">
			<div className="resource-blocks-column">
				<p { ...useBlockProps.save( { className } ) }>
					<RichText.Content value={ content } />
				</p>
			</div>
		</div>
	);
}
