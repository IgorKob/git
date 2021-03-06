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
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'jquery-1.10.2.min', get_template_directory_uri() .'/assets/js/jquery-1.10.2.min.js');
	wp_enqueue_script( 'jquery-migrate-1.2.1.min', get_template_directory_uri() .'/assets/js/jquery-migrate-1.2.1.min.js');
  wp_enqueue_script( 'jquery.flexslider', get_template_directory_uri() .'/assets/js/jquery.flexslider.js', ['jquery']);
  wp_enqueue_script( 'doubletaptogo', get_template_directory_uri() .'/assets/js/doubletaptogo.js', ['jquery']);
  wp_enqueue_script( 'init', get_template_directory_uri() .'/assets/js/init.js', ['jquery']);
	wp_enqueue_script( 'modernizr', get_template_directory_uri() .'/assets/js/modernizr.js', ['jquery']);
	wp_enqueue_script( 'main', get_template_directory_uri() .'/assets/js/main.js', ['jquery']);

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
add_theme_support( 'post-thumbnails', array( 'post', 'portfolio' ) );          // Только для post
add_theme_support( 'post-formats', array( 'video', 'aside', 'galley', 'chat' ) );   //Формат запису - в редакторі // Только для page
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


//міняємо '-' на '|'  в верху на закладках
//По умолчанию: $sep = '-';
add_filter( 'document_title_separator', 'filter_separator' );
function filter_separator( $sep ){
  $sep = ' | ';
	return $sep;
}

// добавляємо до кожного контенту ' OK kim '
add_filter( 'the_content', 'test_content' );
function test_content( $content ){
  $content.= ' OK kim ';
	return $content;
}


add_action('my_action', 'action_function');
function action_function() {
	echo 'я тут';
}
add_shortcode('my_short', 'short_function');
function short_function() {
	return 'я shortcode';
}

add_shortcode('iframe', 'Generate_iframe');
// использование: [iframe href="http://www.exmaple.com" height="480" width="640"]
function Generate_iframe( $atts ) {
	$atts = shortcode_atts( array(
		'href'   => 'http://olx.com',
		'height' => '550px',
		'width'  => '600px',
	), $atts );

	return '<iframe src="'. $atts['href'] .'" width="'. $atts['width'] .'" height="'. $atts['height'] .'"> <p>Your Browser does not support Iframes.</p></iframe>';
}





add_action( 'init', 'register_post_types' );
function register_post_types(){
	register_post_type( 'portfolio', [
		'label'  => null,
		'labels' => [
			'name'               => 'Portfolio', // основное название для типа записи
			'singular_name'      => 'Portfolio', // название для одной записи этого типа
			'add_new'            => 'Добавить Portfolio', // для добавления новой записи
			'add_new_item'       => 'Добавление Portfolio', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование Portfolio', // для редактирования типа записи
			'new_item'           => 'Новое Portfolio', // текст новой записи
			'view_item'          => 'Смотреть Portfolio', // для просмотра записи этого типа.
			'search_items'       => 'Искать Portfolio', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => 'Portfolio', // название меню
		],
		'description'         => '',
		'public'              => true,
		'publicly_queryable'  => true, // зависит от public
		'exclude_from_search' => false, // зависит от public
		'show_ui'             => true, // зависит от public
		'show_in_nav_menus'   => true, // зависит от public
		'show_in_menu'        => true, // показывать ли в меню адмнки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest'        => true, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => 4,
		'menu_icon'           => 'dashicons-format-gallery',
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical'        => false,
		'supports'            => [ 'title', 'editor', 'author','thumbnail','excerpt' ], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => ['skills'],
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	] );
}




// хук для регистрации
add_action( 'init', 'create_taxonomy' );
function create_taxonomy(){

	// список параметров: wp-kama.ru/function/get_taxonomy_labels
	register_taxonomy( 'skills', [ 'portfolio', 'post' ], [
		'label'                 => '', // определяется параметром $labels->name
		'labels'                => [
			'name'              => 'navyky',
			'singular_name'     => 'navyky',
			'search_items'      => 'Search Navyky',
			'all_items'         => 'All Navyky',
			'view_item '        => 'View Navyky',
			'parent_item'       => 'Parent Navyky',
			'parent_item_colon' => 'Parent Navyky:',
			'edit_item'         => 'Edit Navyky',
			'update_item'       => 'Update Navyky',
			'add_new_item'      => 'Add New Navyky',
			'new_item_name'     => 'New Navyky Name',
			'menu_name'         => 'Navyky',
		],
		'description'           => '', // описание таксономии
		'public'                => true,
		// 'publicly_queryable'    => null, // равен аргументу public
		// 'show_in_nav_menus'     => true, // равен аргументу public
		// 'show_ui'               => true, // равен аргументу public
		// 'show_in_menu'          => true, // равен аргументу show_ui
		// 'show_tagcloud'         => true, // равен аргументу show_ui
		// 'show_in_quick_edit'    => null, // равен аргументу show_ui
		'hierarchical'          => false,

		'rewrite'               => true,
		'show_in_rest'          => true, // добавить в REST API
		//'query_var'             => $taxonomy, // название параметра запроса
		'capabilities'          => array(),
		'meta_box_cb'           => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column'     => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'rest_base'             => null, // $taxonomy
		// '_builtin'              => false,
		//'update_count_callback' => '_update_post_term_count',
	] );
}




//mail
add_action('wp_ajax_send_mail', 'send_mail');
add_action('wp_ajax_nopriv_send_mail', 'send_mail');
function send_mail() {
	$contactName = $_POST['contactName'];
	$contactEmail = $_POST['contactEmail'];
	$contactSubject = $_POST['contactSubject'];
	$contactMessage = $_POST['contactMessage'];
	$to = get_option('admin_email');

	// удалим фильтры, которые могут изменять заголовок $headers
	remove_all_filters( 'wp_mail_from' );
	remove_all_filters( 'wp_mail_from_name' );

	$headers = array(
		'From: Me Myself <shayan.maxon@intrees.org>',
		'content-type: text/html',
		'Cc: John Q Codex <shayan.maxon@intrees.org>',
		'Cc: shayan.maxon@intrees.org', // тут можно использовать только простой email адрес
	);

	wp_mail( $to, $contactSubject, $contactMessage, $headers );
	wp_die();
}



// https://underscores.me/
// http://unyson.io/
// http://tgmpluginactivation.com/



// https://wp-kama.ru/id_7654/ierarhiya-fajlov-temy-shablona.html


// https://wp-kama.ru/id_119/the-loop.html
// https://wp-kama.ru/function/the_tags
// https://wp-kama.ru/function/get_the_author
// https://wp-kama.ru/function/add_theme_support
// https://wp-kama.ru/function/add_image_size
// https://wp-kama.ru/hook/the_excerpt
//https://wp-kama.ru/function/the_posts_pagination
//https://wp-kama.ru/function/get_posts


//filter
// https://wp-kama.ru/hook/document_title_separator

// https://wp-kama.ru/function/add_shortcode

// https://wp-kama.ru/function/get_template_part

// https://wp-kama.ru/id_8577/shablony-stranitsy-dlya-tipov-zapisej-v-wp-4-7.html

// https://wp-kama.ru/function/register_post_type



//  plugin - Advanced Custom Fields

//https://wp-kama.ru/function/register_taxonomy

// https://wp-kama.ru/function/the_terms


// plugin - Contact Form 7
// plugin - Ninja Forms Contact Form – The Drag and Drop Form Builder for WordPress

// https://wp-kama.ru/function/wp_mail
// https://wp-kama.ru/function/get_option

// plugin - Yoast SEO
// plugin - WP Super Cache
// plugin - WP Fastest Cache



//gzip to  '.htaccess'
// https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/


// plugin - Autoptimize
//plugin -  Smush – Compress, Image Optimizer, Lazy Load, WebP Images
// plugin - Compress JPEG & PNG images






///кнопка прокрутки вгору
add_action( 'wp_footer', 'back_to_top' );
function back_to_top() {
echo '<img id="totop" src="https://wp-lessons.com/wp-content/uploads/2015/04/scroll-to-img.gif" />';
}

add_action( 'wp_head', 'back_to_top_style' );
function back_to_top_style() {
echo '<style type="text/css">
#totop {
cursor:pointer;
position: fixed;
right: 30px;
bottom: 30px;
display: none;
outline: none;
}
</style>';
}

add_action( 'wp_footer', 'back_to_top_script' );
function back_to_top_script() {
echo '<script type="text/javascript">
jQuery(document).ready(function($){
$(window).scroll(function () {
if ( $(this).scrollTop() > 400 )
$("#totop").fadeIn();
else
$("#totop").fadeOut();
});

$("#totop").click(function () {
$("body,html").animate({ scrollTop: 0 }, 800 );
return false;
});
});
</script>';
}
/////////////







//////різні меню для реєстрованих і не реєстрованих коритувачів
function my_wp_nav_menu_args( $args = '' ) {

if( is_user_logged_in() ) {
$args['menu'] = 'Простое меню';
} else {
$args['menu'] = 'Для зарегистрированных';
}
return $args;
}
add_filter( 'wp_nav_menu_args', 'my_wp_nav_menu_args' );
///////////





// для вставки шорткоду на сторінках (not function.php)
// <?php echo do_shortcode('[metaslider id="15"]'); ...
	//




// //отключить обновления WordPress
// add_filter('pre_site_transient_update_core',create_function('$a', "return null;"));
// wp_clear_scheduled_hook('wp_version_check');
// // or
// add_filter(‘pre_site_transient_update_core’, function($a) {return null;} );
// wp_clear_scheduled_hook(‘wp_version_check’);


// //Отключение обновления шаблонов (тем) WordPress
// remove_action('load-update-core.php','wp_update_themes');
// add_filter('pre_site_transient_update_themes',create_function('$a', "return null;"));
// wp_clear_scheduled_hook('wp_update_themes');

// //Отключение обновления плагинов WordPress
// remove_action( 'load-update-core.php', 'wp_update_plugins' );
// add_filter( 'pre_site_transient_update_plugins', create_function( '$a', "return null;" ) );
// wp_clear_scheduled_hook( 'wp_update_plugins' );

// //Ограничение на размер загружаемого файла WordPress:
// add_filter( 'upload_size_limit', 'PBP_increase_upload' );
//  function PBP_increase_upload( $bytes )
//  {
//  return 1048576; // 1 megabyte
//  }

// //Как добавить индикатор выпадающего меню в WordPress (style.css)
// .nav-menu li &gt; a:after {
//  color: #888;
//  content: ' ▾';
//  font-size: 24px;
// }
//
// .nav-menu li &gt; a:hover:after {
//  color: #444;
//  content: ' ▾';
// }
//
// .nav-menu li &gt; a:only-child:after {
//  content: '';
// }
// //Добавление изображений в индикатор выпадающего меню
// content: url(https://wp-lessons.com/wp-content/uploads/2015/04/arrow_down.png);
// ////////////////




// // theme shop
// Storefront
// i-craft
// Oceanic
// Modality
// RetroTale
// Boutique
// //kim
// Envo Storefront
// Easy Storefront
// Envo eCommerce
// Envo Shop
// Shop Isle


////                          WooCommerce
//// вывести последние добавленные (новые) товары
// [recent_products per_page="12" columns="4"]

// //вывести популярные товары
// [featured_products per_page="12" columns="4"]

// //Вывод одного(багатьох) товара по ID или артикулу (SKU)
// [product id="45"]
// //or
// [products ids="1, 2, 3, 4, 5"]
// //or too
// [product sku="0001"]
// //or
// [products skus="0001, 0002"]

// //Кнопка «Добавить в корзину» для определенного товара
// [add_to_cart id="40"]

// //вывести товары из категории WooCommerce
// [product_category category="kategoriya-1"]
// //вывод категорий
// [product_categories number="7" parent="0"]
// [product_categories ids="7,8" parent="0"]

// // вывести товары со скидкой
// [sale_products per_page="4"]

// //вывести топ рейтинговых товаров
// [top_rated_products per_page="12"]


// // товаров по свойствам
// [product_attribute attribute='color' filter='black']





// //Массовое изменение цен с помощью запроса в базу данных MySQL
// UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, ',', '.') WHERE meta_key = '_price';
// UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, ',', '.') WHERE meta_key = '_regular_price';
// UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, ',', '.') WHERE meta_key = '_sale_price';
// UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, ',', '.') WHERE meta_key = '_min_variation_price';
// UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, ',', '.') WHERE meta_key = '_max_variation_price';
// UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, ',', '.') WHERE meta_key = '_min_variation_regular_price';
// UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, ',', '.') WHERE meta_key = '_max_variation_regular_price';
// UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, ',', '.') WHERE meta_key = '_min_variation_sale_price';
// UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, ',', '.') WHERE meta_key = '_max_variation_sale_price';








// //Отключение вкладки (таба) отзывов в WooCommerce
// add_filter( 'woocommerce_product_tabs', 'sb_woo_remove_reviews_tab', 98);
// function sb_woo_remove_reviews_tab($tabs) {
// unset($tabs['reviews']);
// return $tabs;
// }
///как убрать отзывы товара только от незарегистрированных гостей сайта
////заменив стандартный вывод комментариев в теме на:
// <?php if (is_user_logged_in()) {
//     comments_template();
// } ...


// // Отключение вкладок на странице товара
// add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );
// function woo_remove_product_tabs( $tabs ) {
// unset( $tabs['description'] ); // Убираем вкладку "Описание"
// unset( $tabs['reviews'] ); // Убираем вкладку "Отзывы"
// unset( $tabs['additional_information'] ); // Убираем вкладку "Свойства"
// return $tabs;
// }


////изменить количество товаров на странице WooCommerce на 24
// add_filter( 'loop_shop_per_page', create_function( '$cols', 'return 24;' ), 20 );

// // изменить количество похожих товаров в WooCommerce
// add_filter( 'woocommerce_output_related_products_args', 'jk_related_products_args' );
//  function jk_related_products_args( $args ) {
// $args['posts_per_page'] = 6; // количество "Похожих товаров"
//  $args['columns'] = 3; // количество колонок
//  return $args;
// }
// //для того щоб видалити  похожі товари
// function wc_remove_related_products( $args ) {
//     return array();
// }
// add_filter('woocommerce_related_products_args','wc_remove_related_products', 10);




?>
