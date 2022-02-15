/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const classes = classnames();

	return (
		<div { ...useBlockProps.save( { className: classes } ) }>
			<InnerBlocks.Content />
		</div>
	);
}
