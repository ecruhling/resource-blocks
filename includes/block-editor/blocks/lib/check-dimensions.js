/**
 * checkDimensions function.
 * returns false if either designWidth or
 * designHeight are not equal to width or height.
 *
 * @param {string} width
 * @param {string} height
 * @private
 */
export default function checkDimensions( width, height ) {
	// init variables
	let designWidth, designHeight;

	// get currently selected block (if any)
	const selectedBlock = wp.data
		.select( 'core/block-editor' )
		.getSelectedBlock();

	// if this is coming from a block, there will
	// be a designWidth or designHeight attribute(s)
	if ( selectedBlock ) {
		designWidth = selectedBlock.attributes.designWidth;
		designHeight = selectedBlock.attributes.designHeight;
	}

	// if designWidth exists
	if ( designWidth ) {
		// and is not blank
		if ( '' !== designWidth ) {
			if ( parseInt( designWidth ) !== parseInt( width ) ) {
				return false;
			}
		}
	}

	// if designHeight exists
	if ( designHeight ) {
		// and is not blank
		if ( '' !== designHeight ) {
			if ( parseInt( designHeight ) !== parseInt( height ) ) {
				return false;
			}
		}
	}

	return true;
}
