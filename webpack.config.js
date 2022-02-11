const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		'container': './includes/block-editor/blocks/container',
		'full-width-image': './includes/block-editor/blocks/full-width-image',
		'test': './includes/block-editor/blocks/test',
	},
};
