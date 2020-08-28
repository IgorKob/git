<!-- index.php -->
<?php get_header(); ?>
<?php get_header($name); ?>    header-name.php
<?php wp_head(); ?>

<?php get_footer(); ?>
<?php wp_foot(); ?>



<!-- підключення стилів і скріптів  -->
function kim_style() {
 wp_enqueue_style( 'grid', get_template_directory_uri() . '/css/grid.css');
 wp_enqueue_style( 'kim-style', get_stylesheet_uri() );
 wp_enqueue_style( 'font', 'http://fonts.googleapis.com/css?family=Roboto:400,500,700');
 wp_enqueue_style( 'font-awesome', 'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
 wp_enqueue_style( 'animate', get_template_directory_uri() . '/css/animate.css');
 wp_enqueue_style( 'colorScheme', get_template_directory_uri() . '/css/colorScheme-2.css');
 wp_enqueue_style( 'carousel', get_template_directory_uri() . '/css/owl-carousel.css');
}
add_action( 'wp_enqueue_scripts', 'kim_style' );


function kim_scripts() {
<!-- відключаємо версію jquery яке є у "wp", і підключаємо свою версію   -->
 <!-- wp_deregister_script('jquery'); -->
 <!-- wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'); -->
 <!-- wp_enqueue_script('jquery'); -->

 wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/script.js', array ('jquery'), '', true );

 if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
	 wp_enqueue_script( 'comment-reply' );
 }
}
add_action( 'wp_enqueue_scripts', 'kim_scripts' );






add_action( 'wp_enqueue_scripts', 'theme_add_scripts' );
function theme_add_scripts() {
	wp_enqueue_style( 'style-name', get_stylesheet_uri() );
	wp_enqueue_script( 'script-name', get_template_directory_uri() .'/js/example.js', array(), '1.0', true );
}





<!-- logo -->
<?php if (is_front_page() && is_home()) { ?>
  <h1 class="brand_name"><?php bloginfo('name'); ?></h1>
<?php } else {?>
  <div class="brand_name"><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></div>
<?php } ?>
<p class="brand_slogan"><?php bloginfo('description'); ?></p>



<!-- tel -->
<!-- в силці вставляємо номер тел. без лишніх симвоів (' ', '(', ')', '-'),
що дає змогу при натисканні на силку номера тел. вибрати програми для дзвінка -->
<a href="callto:<?php echo str_replace(array(' ', '(', ')', '-'), '', ot_get_option('contact_phone')); ?>"></a>




////////
<!-- вивід кастомних полів -->
<?php the_field('phone'); ?>



//
<?php bloginfo( $show ); ?>
name - назва сайту.
description - короткий опис сайту, яке задається в настройках.
template_url - урл директорії поточної теми.
stylesheet_url - урл на файл стилів CSS (зазвичай style.css) поточної теми.
rss2_url - урл RSS 2.0 фида (/ feed).
comments_rss2_url - урл RSS 2.0 фида коментарів (/ comments / feed).
pingback_url - урл для повідомлень на XML-RPC файл (xmlrpc.php).
charset - кодування сайту.
version - версія WordPress.
html_type - Content-Type HTML сторінки (зазвичай text / html).
language - поточна локаль сайту (мова), наприклад ru-RU.
stylesheet_directory - урл директорії поточної теми. Краще використовувати функцію get_stylesheet_directory_uri ()
template_directory - урл директорії поточної теми. Краще використовувати функцію get_template_directory ().
admin_email - "E-mail адреса" в Налаштування> Загальні.
rdf_url - урл RDF / RSS 1.0 фида (/ feed / rfd).
rss_url - урл RSS 0.92 фида (/ feed / rss`).
atom_url - урл Atom фида (/ feed / atom).
url - урл на головну сторінку. Алиас функції home_url ().
wpurl - урл на головну сторінку. Алиас функції site_url ().



//
<?php echo home_url( $path, $scheme ); ?>
$ Path (рядок) - Шлях, який буде вставлений в кінець посилання.
$ Scheme (рядок) - Протокол передачі даних. За замовчуванням обчислюється через is_ssl (). Може бути: http або https.
echo home_url();    // http://example.com
echo home_url('/'); // http://example.com/
echo home_url('/blog', 'https'); // http://example.com/blog
echo home_url('#hash', 'https'); // http://example.com/#hash
echo home_url( 'http://foo.bar/foo' ); // https://wp-kama.ru/http://foo.bar/foo
