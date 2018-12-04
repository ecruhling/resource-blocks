<?php
/**
 * Plugin Name: Resource Branding Gutenberg Blocks
 * Plugin URI: https://resourceatlanta.com
 * Description: Resource Blocks — a Gutenberg block plugin created using custom create-guten-block (CGB) configuration.
 * Author: Resource Branding
 * Author URI: https://resourceatlanta.com
 * Version: 1.0.0
 **/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
