<?php
/**
 * Plugin Name:       Resource Blocks
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Erik Rühling
 * Text Domain:       resource-blocks
 *
 * @package           resource-blocks
 */

/**
 * Register blocks, meta & patterns.
 */
function resource_blocks_init()
{
	// The order below is the order that they will appear in the editor.
	$blocks = array(
		'intro-paragraph/',
		'body-text/',
		'image-constrained/',
		'full-width-image/',
		'two-column-images/',
		'full-width-video/',
		'single-image/',
		'single-question/',
		'triptych/',
		'secondary-title/',
		'team-member-title/',
		'questionnaire/',
	);

	foreach ($blocks as $block) {
		register_block_type(plugin_dir_path(__FILE__) . 'includes/block-editor/blocks/' . $block);
	}

	/**
	 * Register post meta for the editor sidebar on the post edit screen.
	 */
	register_post_meta('post', 'post_thumbnail', [
		'single' => true,
		'type' => 'integer',
		'show_in_rest' => true,
		'auth_callback' => function () {
			return current_user_can('edit_posts');
		}
	]);

	register_post_meta('post', 'optional_description', [
		'single' => true,
		'type' => 'string',
		'show_in_rest' => true,
		'sanitize_callback' => 'sanitize_text_field',
		'auth_callback' => function () {
			return current_user_can('edit_posts');
		}
	]);

	/**
	 * Register post meta for the editor sidebar on the team edit screen.
	 */
	register_post_meta('team', 'team_member_title', [
		'single' => true,
		'type' => 'string',
		'show_in_rest' => true,
		'sanitize_callback' => 'sanitize_text_field',
		'auth_callback' => function () {
			return current_user_can('edit_posts');
		}
	]);

	/**
	 * Register post meta for the editor sidebar on the project edit screen.
	 */
	register_post_meta('projects', 'second_line', [
		'single' => true,
		'type' => 'string',
		'show_in_rest' => true,
		'sanitize_callback' => 'sanitize_text_field',
		'auth_callback' => function () {
			return current_user_can('edit_posts');
		}
	]);

	/**
	 * Block patterns & Resource Blocks pattern category.
	 */
	register_block_pattern_category(
		'resource-blocks-patterns',
		array('label' => __('Resource Blocks Patterns', 'resource-blocks'))
	);

	// Team Member pattern: Triptych, Secondary Title, Questionnaire
	register_block_pattern(
		'resource-blocks/team-member',
		array(
			'title' => __('Team member template', 'resource-blocks'),
			'categories' => array('resource-blocks-patterns'),
			'description' => _x('For new team members', 'Block pattern description', 'resource-blocks'),
			'content' => "<!-- wp:resource-blocks/triptych --><div class='wp-block-resource-blocks-triptych resource-blocks-row'><div class='resource-blocks-column'><figure><img alt='' class=''/></figure></div></div>
<!-- /wp:resource-blocks/triptych --><!-- wp:resource-blocks/secondary-title --><div class='wp-block-resource-blocks-secondary-title resource-blocks-row'><div class='resource-blocks-column'><h2></h2></div></div>
<!-- /wp:resource-blocks/secondary-title --><!-- wp:resource-blocks/questionnaire --><div class='wp-block-resource-blocks-questionnaire resource-blocks-row'></div>
<!-- /wp:resource-blocks/questionnaire -->",
		)
	);

	/**
	 * 'team' CPT block template:
	 *
	 * triptych
	 * secondary-title ('fun' title)
	 * questionnaire
	 */

	$post_type_object = get_post_type_object('team');
	$post_type_object->template = array(
		array('resource-blocks/triptych'),
		array('resource-blocks/secondary-title'),
		array('resource-blocks/questionnaire'),
	);

}

add_action('init', 'resource_blocks_init');

/**
 * Change 'ADD TITLE' placeholder text for 'team' CPT.
 * @param $title
 * @return string
 */
function change_default_title_for_team_member_cpt( $title ): string
{

	$screen = get_current_screen();

	if ( 'team' == $screen->post_type ){
		$title = 'Team Member name';
	}

	return $title;
}

add_filter( 'enter_title_here', 'change_default_title_for_team_member_cpt' );

/**
 * Enqueue global block CSS for the editor.
 * Enqueue Resource Blocks meta script (sidebar editor).
 * Localize script to create plugin_path variable.
 */
function resource_blocks_styles_scripts()
{
	wp_enqueue_style(
		'resource-blocks-global-editor-css',
		plugins_url('/build/global.css', __FILE__),
		['wp-edit-blocks'],
		filemtime(plugin_dir_path(__FILE__) . 'build/global.css')
	);

	wp_enqueue_script(
		'resource-blocks-meta',
		plugins_url('build/global.js', __FILE__),
		['wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-data', 'wp-block-editor', 'wp-dom-ready']
	);

	wp_localize_script('resource-blocks-meta', 'resource_blocks_meta', array(
		'plugin_path' => plugin_dir_url(__FILE__)
	));
}

add_action('enqueue_block_editor_assets', 'resource_blocks_styles_scripts');

/**
 * Enqueue global frontend and editor CSS.
 */
function resource_blocks_styles()
{
	wp_enqueue_style(
		'resource-blocks-global-css',
		plugins_url('/build/style-global.css', __FILE__),
		[],
		filemtime(plugin_dir_path(__FILE__) . 'build/style-global.css')
	);
}

add_action('enqueue_block_assets', 'resource_blocks_styles');

/**
 * Register Resource Blocks category.
 *
 * @param array $block_categories Array of categories for block types.
 */
function resource_block_category(array $block_categories): array
{
	$resource_category = array(
		'slug' => 'resource-blocks',
		'title' => __('Resource Blocks', 'resource-blocks'),
		'icon' => null, // icon is set in index.js of each block.
	);

	// move Resource Blocks category to beginning of block list.
	array_unshift($block_categories, $resource_category);

	return $block_categories;
}

add_action('block_categories_all', 'resource_block_category', 10, 2);

/**
 * Filter to remove all blocks other than Resource Blocks.
 *
 * @return string[]
 */
function allow_only_resource_blocks(): array
{
	return array(
		'resource-blocks/intro-paragraph',
		'resource-blocks/body-text',
		'resource-blocks/full-width-image',
		'resource-blocks/two-column-images',
		'resource-blocks/full-width-video',
		'resource-blocks/single-image',
		'resource-blocks/single-question',
		'resource-blocks/triptych',
		'resource-blocks/secondary-title',
		'resource-blocks/questionnaire',
		'resource-blocks/image-constrained',
	);
}

add_filter('allowed_block_types_all', 'allow_only_resource_blocks', 10, 2);

/**
 * Filter Vimeo block markup to add autoplay parameters, according to the block attribute 'autoplay'.
 */
function resource_vimeo_embed_html_filter($block_content, $block)
{
	if ('resource-blocks/full-width-video' === $block['blockName']) {

		preg_match('/src="(.+?)"/', $block_content, $matches);
		$src = $matches[1];

		// Boolean parameters must be in number format, so can't use the actual value of 'true' or 'false'.
		// A null value will leave the parameter out of the argument.
		$params = array(
			// most of these parameters have to be enabled/disabled in order for video to actually autoplay.
			'autoplay' => isset($block['attrs']['autoplay']) ? 1 : null,
			'autopause' => isset($block['attrs']['autoplay']) ? 0 : null,
			'background' => isset($block['attrs']['autoplay']) ? 1 : null,
			'muted' => isset($block['attrs']['autoplay']) ? 1 : null,
			'playsinline' => isset($block['attrs']['autoplay']) ? 1 : null,
			'loop' => 1, // all videos will loop by default.
			'byline' => 0, // no bylines by default.
			'title' => 0, // no title by default.
		);

		$new_src = add_query_arg($params, $src);

		$block_content = str_replace($src, $new_src, $block_content);
	}
	return $block_content;
}

add_filter('render_block', 'resource_vimeo_embed_html_filter', 10, 3);

/**
 * Filter the Media list table columns to add a File Size column.
 *
 * @param array $posts_columns Existing array of columns displayed in the Media list table.
 * @return array Amended array of columns to be displayed in the Media list table.
 */
function resource_media_columns_filesize(array $posts_columns): array
{
	unset($posts_columns['comments']);
	$posts_columns['filesize'] = __('Size & Dimensions', 'resource-blocks');

	return $posts_columns;
}

add_filter('manage_media_columns', 'resource_media_columns_filesize');

/**
 * Display File Size custom column in the Media list table.
 *
 * @param string $column_name Name of the custom column.
 * @param int $post_id Current Attachment ID.
 */
function resource_media_custom_column_filesize(string $column_name, int $post_id)
{
	if ('filesize' !== $column_name) {
		return;
	}

	$width = wp_get_attachment_metadata($post_id)['width'] ?? null;
	$height = wp_get_attachment_metadata($post_id)['height'] ?? null;
	$bytes = filesize(get_attached_file($post_id));

	$string = size_format($bytes, 2) . '</br>';
	$string .= 'height: ' . $width . 'px</br>';
	$string .= 'width: ' . $height . 'px</br>';

	echo $string;
}

add_action('manage_media_custom_column', 'resource_media_custom_column_filesize', 10, 2);

/**
 * Adjust File Size column on Media Library page in WP admin
 */
function resource_filesize_column_filesize()
{
	echo
	'<style>
        .fixed .column-filesize {
            width: 10%;
        }
    </style>';
}

add_action('admin_print_styles-upload.php', 'resource_filesize_column_filesize');
