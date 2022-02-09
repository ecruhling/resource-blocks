const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		'test': './includes/block-editor/blocks/test',
		'image': './includes/block-editor/blocks/image',
	},
};
