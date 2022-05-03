/**
 * checkDimensions function.
 *
 * returns false if either designWidth or
 * designHeight are not equal to width or height.
 *
 * @param {string} width        the width of the current object in the media attachment (wp.media.view.Attachment).
 * @param {string} height       the height of the current object in the media attachment (wp.media.view.Attachment).
 * @param {string} designWidth  a hardcoded target width, can be overridden in the function by a block attribute.
 * @param {string} designHeight a hardcoded target height, can be overridden in the function by a block attribute.
 * @private
 */
export default function checkDimensions(
	width,
	height,
	designWidth = '',
	designHeight = ''
) {
	// get currently selected block (if any)
	const selectedBlock = wp.data
		.select( 'core/block-editor' )
		.getSelectedBlock();

	// if this is coming from a block, there will
	// be a designWidth or designHeight attribute(s)
	// get these values in order to override the default null.
	if ( selectedBlock ) {
		designWidth = selectedBlock.attributes.designWidth;
		designHeight = selectedBlock.attributes.designHeight;
	}

	// default is '', if it is still default, continue
	if ( '' !== designWidth ) {
		if ( parseInt( designWidth ) !== parseInt( width ) ) {
			return false;
		}
	}

	// default is '', if it is still default, continue
	if ( '' !== designHeight ) {
		if ( parseInt( designHeight ) !== parseInt( height ) ) {
			return false;
		}
	}

	return true;
}
