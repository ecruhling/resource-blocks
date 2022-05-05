/**
 * checkDimensions function.
 *
 * returns false if either designWidth or
 * targetHeight are not equal to width or height.
 *
 * @param {string} width        the width of the current object in the media attachment (wp.media.view.Attachment).
 * @param {string} height       the height of the current object in the media attachment (wp.media.view.Attachment).
 * @param {string} targetWidth  a hardcoded target width, can be overridden in the function by a block attribute.
 * @param {string} targetHeight a hardcoded target height, can be overridden in the function by a block attribute.
 * @private
 */
export default function checkDimensions(
	width,
	height,
	targetWidth = '',
	targetHeight = ''
) {
	// default is '', if it is still default, continue
	if ( '' !== targetWidth ) {
		if ( parseInt( targetWidth ) !== parseInt( width ) ) {
			return false;
		}
	}

	// default is '', if it is still default, continue
	if ( '' !== targetHeight ) {
		if ( parseInt( targetHeight ) !== parseInt( height ) ) {
			return false;
		}
	}

	return true;
}
