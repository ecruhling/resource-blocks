<?php
/**
 * Plugin Name:       Resource Blocks
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Resource
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       resource-blocks
 *
 * @package           create-block
 */

/**
 * Register blocks.
 */
function resource_blocks_init() {

	$blocks = array(
		'intro-paragraph/',
		'full-width-image/',
		'two-column-images/',
		'full-width-video/',
		'single-image/',
	);

	foreach ( $blocks as $block ) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'includes/block-editor/blocks/' . $block );
	}
}

add_action( 'init', 'resource_blocks_init' );

/**
 * Register custom block category.
 *
 * @param array $block_categories Array of categories for block types.
 */
function resource_block_category( array $block_categories ): array {

	// define new block category.
	$resource_category = array(
		'slug'  => 'resource-blocks',
		'title' => __( 'Resource Blocks', 'resource-blocks' ),
		'icon'  => null, // icon is set in index.js of each block.
	);

	// move new category to beginning of block list.
	array_unshift( $block_categories, $resource_category );

	return $block_categories;

}

add_action( 'block_categories_all', 'resource_block_category', 10, 2 );

/**
 * Filter to remove all blocks other than Resource blocks.
 *
 * @return string[]
 */
function allow_only_resource_blocks(): array {
	return array(
		'resource-blocks/full-width-image',
		'resource-blocks/full-width-video',
		'resource-blocks/two-column-images',
		'resource-blocks/single-image',
		'resource-blocks/intro-paragraph',
	);
}

add_filter( 'allowed_block_types_all', 'allow_only_resource_blocks', 10, 2 );


/**
 * Enqueue global block CSS for the editor
 */
function resource_blocks_editor_styles()
{

	// Enqueue block editor styles
	wp_enqueue_style(
		'resource-blocks-global-editor-css',
		plugins_url('/build/global.css', __FILE__),
		['wp-edit-blocks'],
		filemtime(plugin_dir_path(__FILE__) . 'build/global.css')
	);

}

// Hook the enqueue functions into the editor
add_action('enqueue_block_editor_assets', 'resource_blocks_editor_styles');

/**
 * Enqueue global frontend and editor CSS
 */
function resource_blocks_styles()
{

	// Enqueue block editor styles
	wp_enqueue_style(
		'resource-blocks-global-css',
		plugins_url('/build/style-global.css', __FILE__),
		[],
		filemtime(plugin_dir_path(__FILE__) . 'build/style-global.css')
	);

}

// Hook the enqueue functions into the frontend and editor
add_action('enqueue_block_assets', 'resource_blocks_styles');
