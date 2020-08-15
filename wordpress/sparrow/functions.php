<?php

add_action('wp_enqueue_scripts', 'style_theme');
add_action('wp_footer', 'scripts_theme');
add_action( 'wp_enqueue_scripts', 'my_scripts_method' );
add_action( 'after_setup_theme', 'theme_register_nav_menu' );
add_action( 'widgets_init', 'register_my_widgets' );


// https://wp-kama.ru/hook/wp_enqueue_scripts
  // <?php wp_head(); >  вставити в кінці файлу header.php
function style_theme() {
	wp_enqueue_style( 'style-name', get_stylesheet_uri() );
  wp_enqueue_style( 'sdefault', get_template_directory_uri() .'/assets/css/default.css');
  wp_enqueue_style( 'layout', get_template_directory_uri() .'/assets/css/layout.css');
  wp_enqueue_style( 'media-queries', get_template_directory_uri() .'/assets/css/media-queries.css');
}


//<?php wp_footer(); > вставити в кінці файлу footer.php
function scripts_theme() {
  wp_enqueue_script( 'jquery.flexslider', get_template_directory_uri() .'/assets/js/jquery.flexslider.js');
  wp_enqueue_script( 'doubletaptogo', get_template_directory_uri() .'/assets/js/doubletaptogo.js');
  wp_enqueue_script( 'init', get_template_directory_uri() .'/assets/js/init.js');

}

// https://wp-kama.ru/id_4579/podklyuchenie-jquery-c-cdn-google-s-dinamicheskim-opredeleniem-versii-jquery.html
function my_scripts_method() {
	// отменяем зарегистрированный jQuery
	// вместо "jquery-core", можно вписать "jquery", тогда будет отменен еще и jquery-migrate
	wp_deregister_script( 'jquery-core' );
  wp_register_script( 'jquery-core', 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');

	wp_enqueue_script( 'jquery' );
}


// https://wp-kama.ru/function/bloginfo

// https://wp-kama.ru/function/register_nav_menus
function theme_register_nav_menu() {
	register_nav_menu( 'top', 'Primary Menu' );
  register_nav_menu( 'footer', 'footer menu' );
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails', array( 'post' ) );          // Только для post
// add_theme_support( 'post-thumbnails', array( 'page' ) );          // Только для page
add_image_size( 'post_thumb', 1300, 500, true );

add_filter('excerpt_more', 'new_excerpt_more');
function new_excerpt_more($more) {
global $post;
return '<a href="'. get_permalink($post->ID) . '">Читати далі...</a>';
}

}
// add_action( 'after_setup_theme', function(){
// 	register_nav_menus( [
// 		'header_menu' => 'Меню в шапке',
// 		'footer_menu' => 'Меню в подвале'
// 	] );
// } );



// https://wp-kama.ru/function/register_sidebar
// https://wp-kama.ru/function/dynamic_sidebar
function register_my_widgets(){
	register_sidebar( array(
		'name'          => 'left_sidebar',
		'id'            => 'left_sidebar',
		'description'   => 'content',
		'before_widget' => '<div class="widget %2$s">',
		'after_widget'  => "</div>\n",
		'before_title'  => '<h5 class="widgettitle">',
		'after_title'   => "</h5>\n"
	) );
}



// https://wp-kama.ru/id_119/the-loop.html
// https://wp-kama.ru/function/the_tags
// https://wp-kama.ru/function/get_the_author
// https://wp-kama.ru/function/add_theme_support
// https://wp-kama.ru/function/add_image_size
// https://wp-kama.ru/hook/the_excerpt
//https://wp-kama.ru/function/the_posts_pagination
//https://wp-kama.ru/function/get_posts



?>
