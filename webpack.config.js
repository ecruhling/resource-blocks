const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		'container': './includes/block-editor/blocks/container',
		'full-width-image': './includes/block-editor/blocks/full-width-image',
		'two-column-images': './includes/block-editor/blocks/two-column-images',
		'single-image': './includes/block-editor/blocks/single-image',
		'full-width-video': './includes/block-editor/blocks/full-width-video',
	},
};
