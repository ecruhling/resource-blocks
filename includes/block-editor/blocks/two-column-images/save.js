/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import classnames from 'classnames';

export default function save() {
	const classes = classnames( 'resource-blocks-row' );

	return (
		<div { ...useBlockProps.save( { className: classes } ) }>
			<InnerBlocks.Content />
		</div>
	);
}
