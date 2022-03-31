const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		global: './includes/global',
		'intro-paragraph': './includes/block-editor/blocks/intro-paragraph',
		'body-text': './includes/block-editor/blocks/body-text',
		'full-width-image': './includes/block-editor/blocks/full-width-image',
		'two-column-images': './includes/block-editor/blocks/two-column-images',
		'full-width-video': './includes/block-editor/blocks/full-width-video',
		'single-image': './includes/block-editor/blocks/single-image',
		'image-constrained': './includes/block-editor/blocks/image-constrained',
		triptych: './includes/block-editor/blocks/triptych',
		questionnaire: './includes/block-editor/blocks/questionnaire',
		'single-question': './includes/block-editor/blocks/single-question',
		'secondary-title': './includes/block-editor/blocks/secondary-title',
	},
};
