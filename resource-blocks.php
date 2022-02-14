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
		'container/',
		'full-width-image/',
		'two-column-images/',
		'full-width-video/',
		'test/',
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
 * Restrict Media Library by width.
 *
 * @param $response
 * @param $attachment
 * @param $meta
 *
 * @return false|mixed
 */
function restrict_media_library_by_width( $response, $attachment, $meta ) {
	if ( isset( $response['width'] ) && isset( $response['height'] ) && $response['width'] >= 2040 ) {
		return $response;
	}

	return false;
}

add_filter( 'wp_prepare_attachment_for_js', 'restrict_media_library_by_width', 10, 3 );
