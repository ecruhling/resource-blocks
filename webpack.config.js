const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		'global': './includes/global',
		'intro-paragraph': './includes/block-editor/blocks/intro-paragraph',
		'full-width-image': './includes/block-editor/blocks/full-width-image',
		'two-column-images': './includes/block-editor/blocks/two-column-images',
		'full-width-video': './includes/block-editor/blocks/full-width-video',
		'single-image': './includes/block-editor/blocks/single-image',
	},
};
