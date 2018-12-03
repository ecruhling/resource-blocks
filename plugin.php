<?php
/**
 * Plugin Name: Resource Branding Gutenberg Blocks
 * Plugin URI: https://resourceatlanta.com
 * Description: resource-blocks — is a Gutenberg plugin created via create-guten-block.
 * Author: Resource Branding
 * Author URI: https://resourceatlanta.com
 * Version: 1.0.0
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
