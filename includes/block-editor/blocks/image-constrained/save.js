/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Save function.
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		<figure { ...useBlockProps.save() }>
			{ __( 'Image [Constrained]', 'resource-blocks' ) }
		</figure>
	);
}
