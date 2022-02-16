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
		'full-width-image/',
		'full-width-video/',
		'two-column-images/',
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

add_action( 'block_categories', 'resource_block_category', 10, 2 );

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
	);
}

add_filter( 'allowed_block_types_all', 'allow_only_resource_blocks', 10, 2 );
