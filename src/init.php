<?php
/**
 * Initialize plugin.
 *
 * @since 1.0.0
 */

namespace Resource\Blocks;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Enqueue Resource Blocks block assets for both frontend & backend.
 *
 * @uses {wp-editor} for WP editor styles.
 *
 * @since 1.0.0
 */
function enqueue_block_assets()
{
	wp_enqueue_style(
		'resource-blocks-css',
		plugins_url('dist/blocks.style.build.css', __DIR__),
		['wp-editor'],
		filemtime(plugin_dir_path(__DIR__) . 'dist/blocks.style.build.css')
	);

	if ( !is_admin() ) { // front-end only
		wp_enqueue_style(
			'slick',
			plugins_url( 'vendor/slick.css', __DIR__ ),
			[],
			filemtime( plugin_dir_path( __DIR__ ) . 'vendor/slick.css' )
		);

		wp_register_script(
			'slick',
			plugins_url('vendor/slick.min.js', __DIR__),
			[],
			filemtime(plugin_dir_path(__DIR__) . 'vendor/slick.min.js'),
			true
		);

		wp_enqueue_script(
			'resource-blocks-frontend-js',
			plugins_url('dist/blocks.frontend.js', __DIR__),
			['jquery', 'slick'],
			filemtime(plugin_dir_path(__DIR__) . 'dist/blocks.frontend.js')
		);
	}

}

add_action('enqueue_block_assets', __NAMESPACE__ . '\\enqueue_block_assets');

/**
 * Enqueue Resource Blocks block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-editor} for WP editor styles.
 *
 * @since 1.0.0
 */
function enqueue_block_editor_assets()
{

	wp_enqueue_script(
		'resource-blocks-editor-js',
		plugins_url('dist/blocks.build.js', __DIR__),
		['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'],
		filemtime(plugin_dir_path(__DIR__) . 'dist/blocks.build.js')
	);

	wp_enqueue_style(
		'resource-blocks-editor-css',
		plugins_url('dist/blocks.editor.build.css', __DIR__),
		['wp-edit-blocks'],
		filemtime(plugin_dir_path(__DIR__) . 'dist/blocks.editor.build.css')
	);
}

add_action('enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_block_editor_assets');

/**
 * Adds custom category for use in block
 *
 * @url https://wordpress.org/gutenberg/handbook/extensibility/extending-blocks/#managing-block-categories
 */
function add_block_categories($categories, $post)
{

	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'resource-blocks',
				'title' => __('Resource Blocks', 'resource-blocks'),
			),
		)
	);
}

add_filter('block_categories', __NAMESPACE__ . '\\add_block_categories', 10, 2);
