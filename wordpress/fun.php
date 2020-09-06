
<!-- index.php -->
<?php get_header(); ?>
<?php get_header($name); ?>    header-name.php
<?php wp_head(); ?> - це Тег шаблону, який потрібно вставляти перед </head>,
  в файлах теми: header.php або index.php, якщо header.php не використовується.

<?php get_footer(); ?>
<?php wp_footer(); ?> - тег шаблону повинен розташовуватися прямо перед закриває HTML тегом </body>.


//Дочірні теми WordPress - style.css
/*
Theme Name: Моя дочiрня тема
Template: twentyfifteen
* ...
*/
// … код styles

//functions.php
get_stylesheet_directory_uri () - отримує URL поточної теми (дочірньої, що не батьківської).
get_template_directory_uri () - отримує URL поточної теми (батьківської, що не дочірньої).
get_stylesheet_directory () - отримує шлях до поточної теми (дочірньої, що не батьківської).
get_template_directory () - отримує шлях до поточної теми (батьківської, що не дочірньої).
get_stylesheet () - отримує назву каталогу поточної теми (дочірньої, що не батьківської).
get_template () - отримує назву каталогу поточної теми (батьківської, що не дочірньої).
get_stylesheet_uri () - отримує готовий URL на файл стилів style.css поточної теми.
  Якщо використовується дочірня тема, то отримає посилання на стилі доч. теми.



//Шаблони сторінки для типів записів: post, page, product.
<?php
/*
Template Name: Мій шаблон
Template Post Type: post, page, product
* ...
*/
// … код шаблону
//Тепер на сторінках редагування записів типів: post, page, product, можна буде вибрати шаблон «Мій шаблон сторінки».





//Заголовки Плагина. Файл readme.txt
<?php
/**
 * Plugin Name: Название плагина
 * Description: Описание плагина (140 символов)
 * ...
*/
// код плагина






правильно вставить шорткод [shortcode]
<?php echo do_shortcode( '[slidercc id="128"]' ); ?>





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




//
add_action( 'wp_enqueue_scripts', 'add_my_scripts' );    // Фронт
add_action( 'admin_enqueue_scripts', 'add_my_scripts' ); // Админка
add_action( 'login_enqueue_scripts', 'add_my_scripts' ); // wp-login.php



//
add_action( 'wp_enqueue_scripts', 'theme_add_scripts' );
function theme_add_scripts() {
	wp_enqueue_style( 'style-name', get_stylesheet_uri() );
	wp_enqueue_script( 'script-name', get_template_directory_uri() .'/js/example.js', array(), '1.0', true );
}





                    add_filter
function my_filter_function( $str ){
	return 'Здравствуйте '. $str;
}
// Прикрепим функцию к фильтру
add_filter( 'my_filter', 'my_filter_function' );
// Вызов фильтра
echo apply_filters( 'my_filter', 'Владимир' ); //> Здравствуйте Владимир


                      add_action
// Cоздадим функцию для события
function my_action_function( $text ){
	echo 'Событие `my_action` сработало сейчас.';
}
// Прикрепим функцию к событию 'my_action'
add_action( 'my_action', 'my_action_function' );
// Вызов события
do_action( 'my_action' ); //> Событие `my_action` сработало сейчас.










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
// rss2_url - урл RSS 2.0 фида (/ feed).
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






//Отримує значення зазначеної настройки (опції).
get_option( $option, $default );
  $option(строка) (обязательный)
    admin_email - E-mail администратора блога.
    blogname - название блога. Устанавливается в настройках.
    blogdescription - описание блога. Устанавливается в настройках.
    blog_charset - Кодировка блога. Устанавливается в настройках.
    date_format - формат даты. Устанавливается в настройках.
    default_category - категория постов по умолчанию. Устанавливается в настройках.
    home - Адрес домашней страницы блога. Устанавливается в основных настройках.
    siteurl - Адрес WordPress. Устанавливается в основных настройках.
    Заметка: siteurl отличается от get_bloginfo('siteurl') (который возвращает url домашней страницы блога). И не отличается от get_bloginfo('wpurl').
    template - название текущей темы.
    start_of_week - день с которого начинается неделя. Устанавливается в основных настройках.
    upload_path - каталог загрузки по умолчанию.  Устанавливается в настройках.
    posts_per_page - максимальное число постов на странице.  Устанавливается в настройках чтения.
    posts_per_rss -  максимальное число постов выводимых в фид.  Устанавливается в настройках чтения.
  $default(строка/число/логический)
    Значение по умолчанию, которое нужно вернуть, если опции в БД не существует.
    По умолчанию: false

// Выведем название блога в теге H1:
<h1><?php echo get_option('blogname'); ?></h1>
//Получим email администратора сайта в переменную $admin_email:
$admin_email = get_option('admin_email');






//
<?php echo home_url( $path, $scheme ); ?>
$ Path (рядок) - Шлях, який буде вставлений в кінець посилання.
$ Scheme (рядок) - Протокол передачі даних. За замовчуванням обчислюється через is_ssl (). Може бути: http або https.
echo home_url();    // http://example.com
echo home_url('/'); // http://example.com/
echo home_url('/blog', 'https'); // http://example.com/blog
echo home_url('#hash', 'https'); // http://example.com/#hash
echo home_url( 'http://foo.bar/foo' ); // https://wp-kama.ru/http://foo.bar/foo




<!--                   menu-->
//Приклад, реєстрації відразу двох меню
add_action( 'after_setup_theme', function(){
	register_nav_menus( [
		'header_menu' => 'Меню в шапці',
		'footer_menu' => 'Меню в підвалі'
	] );
} );
//index.php щоб використовувати
<?php wp_nav_menu( [ 'menu' => 'Навігація по сайту' ] ); ?>
<?php wp_nav_menu( $args ); ?>
wp_nav_menu( [
	'theme_location'  => '',
	'menu'            => '',
	'container'       => 'div',
	'container_class' => '',
	'container_id'    => '',
	'menu_class'      => 'menu',
	'menu_id'         => '',
	'echo'            => true,
	'fallback_cb'     => 'wp_page_menu',
	'before'          => '',
	'after'           => '',
	'link_before'     => '',
	'link_after'      => '',
	'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
	'depth'           => 0,
	'walker'          => '',
] );



<!--                     віджети -->
//Реєстрація віджетів для бічній панелі сайту
add_action( 'widgets_init', 'register_my_widgets' );
function register_my_widgets(){
	register_sidebar( array(
		'name'          => sprintf(__('Sidebar %d'), $i ),
		'id'            => "sidebar-$i",
		'description'   => '',
		'class'         => '',
		'before_widget' => '<li id="%1$s" class="widget %2$s">',
		'after_widget'  => "</li>\n",
		'before_title'  => '<h2 class="widgettitle">',
		'after_title'   => "</h2>\n",
	) );
//functions.php
  function register_my_widgets(){
  	register_sidebar( array(
  		'name' => "Права бічна панель сайту",
  		'id' => 'right-sidebar',
  		'description' => 'Ці віджети будуть показані в правій колонці сайту',
  		'before_title' => '<h2>',
  		'after_title' => '</h2>'
  	) );
  }
  add_action( 'widgets_init', 'register_my_widgets' );
//index.php
<?php
	if ( function_exists('dynamic_sidebar') )
		dynamic_sidebar('right-sidebar');
?>






<!--                        Loop -->
//Цикл в WordPress - index.php
<!-- Перевірка наявності записів у циклі -->
<?php if ( have_posts() ) : ?>
	<!-- початок циклу -->
	<?php while ( have_posts() ) : the_post(); ?>
		<!-- Цикл WordPress -->
		<!-- Тут вже визначилася змінна $post, -->
		<!-- на основі якої буде будуватися подальший код. -->
		<!-- $post буде змінюватися для кожного поста while( have_posts() ). -->
		<!-- $post потрібна, щоб працювали теги шаблону: in_category('3'), the_permalink() i т.д. -->
		<!-- Перевірка чи знаходиться цей пост в категорії 3. -->
		<!-- Якщо так, то задаємо CSS класс div-у class="post-cat-three". -->
		<!-- Якщо немає, то клас буде post class="post". -->
		<?php if ( in_category('3') ) { ?>
				  <div class="post-cat-three">
		<?php } else { ?>
				  <div class="post">
		<?php } ?>
		<!-- Виводимо заголовок поста, як посилання на сам пост. -->
		<h2><a href="<?php the_permalink() ?>" title="Ссылка на: <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
		<!-- Виводимо дату поста і посилання на інші записи автора. -->
		<small><?php the_time('F jS, Y') ?> Автор: <?php the_author_posts_link() ?></small>
		<!-- Виводимо текст поста в тезі div. -->
		<div class="entry">
		   <?php the_content(); ?>
		</div>
		<!-- Виводимо категорії поста, через кому. -->
		<p class="postmetadata">Расположено в <?php the_category(', '); ?></p>
		</div> <!-- закриваємо основний тег div -->
		<!-- Звідси цикл починає повторюватися, якщо є ще пости -->
		<!-- Останавливаем цикл (endwhile), -->
	<?php endwhile; ?>
	<!-- Повне закінчення циклу. -->
<!-- Якщо записів в циклі немає - цикл не спрацював (else) -->
<?php else: ?>
	<p>Немає постів в циклі.</p>
<?php endif; ?>





1. query_posts () - якщо потрібно змінити / підправити стандартний висновок
записів на сторінках WordPress. Можна використовувати 1 раз на сторінці;

2. get_posts () - якщо потрібно вивести записи з Бази Даних. Можна використовувати
скільки завгодно раз на сторінці;

3. WP_Query () - у всіх інших випадках коли не підійшли query_posts () і get_posts ().
Клас WP_Query () є ядром query_posts () і get_posts () і може бути використаний для
будь-яких складних випадків виводу.


///////////////// 1. цикл на основi query_posts();
<?php
// перевіряємо чи є пости в глобальному запиті - змінна $wp_query
if( have_posts() ){
	// перебираємо всі наявні пости і виводимо їх
	while( have_posts() ){
		the_post();
		?>
		<div <?php post_class(); ?> id="post-<?php the_ID(); ?>">
			<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			<?php the_content(); ?>
		</div>
		<?php
	}
	?>
	<div class="navigation">
		<div class="next-posts"><?php next_posts_link(); ?></div>
		<div class="prev-posts"><?php previous_posts_link(); ?></div>
	</div>
	<?php
}
// постів немає
else {
	echo "<h2>записів нема.</h2>";
}

// У цьому прикладі ми створили новий запит до БД, в якому використовували
// параметри базового запиту + свої параметри: виключили категорії 6 і 9
// (cat = -6, -9), а також відсортували записи по порядку (order = ASC) і
// вивели 20 записів на сторінці замість, встановлених в налаштуваннях 10
// (posts_per_page = 20).
<?php
global $query_string; // параметры базового запроса
query_posts( $query_string .'&cat=-6,-9&order=ASC&posts_per_page=20' ); // базовий запит + свої параметри
[СТАНДАРТНИЙ ЦИКЛ WORDPRESS]
wp_reset_query(); // скидання запиту
?>


//////////////////////// 2. цикл на основi WP_Query();
<?php
// вказуємо категорію 9 і вимикаємо розбиття на сторінки (пагінацію)
$query = new WP_Query( 'cat=9&nopaging=1' );
if( $query->have_posts() ){
	while( $query->have_posts() ){
		$query->the_post();
		?>
		<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		<?php the_content(); ?>
		<?php
	}
	wp_reset_postdata(); // скидаємо змінну $ post
}
else
	echo 'записів нема.';
?>

// Пример создания множественных циклов на основе WP_Query():
<?php
// Цикл 1
$query1 = new WP_Query('cat=-1&nopaging=1'); // все посты, кроме категории 1
while( $query1->have_posts() ){
	$query1->the_post();
	// вывод записей
}
wp_reset_postdata();
// Цикл 2
$query2 = new WP_Query('cat=-2&nopaging=1'); // все посты, кроме категории 2
while( $query2->have_posts() ){
	$query2->the_post();
	// вывод записей
}
wp_reset_postdata();
// Цикл 3
$query3 = new WP_Query('cat=-3&nopaging=1'); // все посты, кроме категории 3
while( $query3->have_posts() ){
	$query3->the_post();
	// вывод записей
}
wp_reset_postdata();
?>


//////////////////////// 3. цикл на основi get_posts().
// параметры по умолчанию
$posts = get_posts( array(
	'numberposts' => 5,
	'category'    => 0,
	'orderby'     => 'date',
	'order'       => 'DESC',
	'include'     => array(),
	'exclude'     => array(),
	'meta_key'    => '',
	'meta_value'  =>'',
	'post_type'   => 'post',
	'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
) );
foreach( $posts as $post ){
	setup_postdata($post);
    // формат вывода the_title() ...
}
wp_reset_postdata(); // сброс


//........ Виведемо 5 записів з рубрики 9:
<?php
global $post; // не обязательно
// 5 записей из рубрики 9
$myposts = get_posts( array(
	'category' => 9
) );
foreach( $myposts as $post ){
	setup_postdata( $post );
	// стандартный вывод записей
}
wp_reset_postdata(); // сбрасываем переменную $post
?>












// Выводит имя автора поста.
<?php the_author(); ?>








<?php the_title(); ?>
// Виведемо на екран заголовок запису в html тезі h3:
<?php the_title( '<h3>', '</h3>' ); ?>


// Выведем ссылку на пост
<?php the_permalink(); ?>
// Выведем ссылку на текущий пост (опубликованные в один день). Используется в цикле WordPress.
<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>




//Выводит на экран время (дату) публикации текущей записи в Цикле WordPress.
<?php the_time(); ?>
// 15 апреля 2004
<div><?php the_time('j F Y'); ?></div>

//11-6-2011
<?php echo get_the_date('n-j-Y'); ?>

//"© 2020 Ваш веб-сайт"
<p>&copy; <?php echo date("Y"); echo " "; echo bloginfo('name'); ?></p>

//Выводит на экран или получает дату публикации поста или группы постов
<?php the_date(); ?>
// Выведем дату в формате 2007-07-23 и обрамим его в тег <h2>:
<?php the_date('Y-m-d', '<h2>', '</h2>'); ?>




// Выводит контент текущего поста (записи).
<?php the_content(); ?>


//Виводить "уривок" (цитату) поста або перші 55 слів контенту, зі вставкою в кінець [...].
<?php the_excerpt(); ?>
// Зміна довжини обрізаного тексту
add_filter( 'excerpt_length', function(){
	return 20;
} );
//Видалення конструкції [...] на кінці
add_filter('excerpt_more', function($more) {
	return '...';
});
//Створюємо посилання "Читати далі ..." на кінці
add_filter( 'excerpt_more', 'new_excerpt_more' );
function new_excerpt_more( $more ){
	global $post;
	return '<a href="'. get_permalink($post) . '">Читати далі ...</a>';
}





//image
<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/slideshow/image.png" style="width:100%;height:300px">




//Миниатюра поста
<?php the_post_thumbnail( $size, $attr ); ?>
// $size(строка/массив)
//   Размер миниатюры, которую нужно получить. Может быть строкой: thumbnail, medium,
//   large, full или массивом из двух элементов (ширина и высота картинки): array(32, 32).
// $attr(строка/массив)
//   $default_attr = array(
//   	'src'   => $src,
//   	'class' => "attachment-$size",
//   	'alt'   => trim(strip_tags( $wp_postmeta->_wp_attachment_image_alt )),
//   );

#1: Миниатюра как ссылка на пост
<?php if ( has_post_thumbnail()) { ?>
  <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >
  <?php the_post_thumbnail(); ?>
  </a>
<?php } ?>

#2: Сделаем миниатюру ссылкой на пост
add_filter( 'post_thumbnail_html', 'my_post_image_html', 10, 3 );
function my_post_image_html( $html, $post_id, $post_image_id ) {
 $html = '<a href="' . get_permalink( $post_id ) . '" title="' . esc_attr( get_post_field( 'post_title', $post_id ) ) . '">' . $html . '</a>';
 return $html;
}

#3 Миниатюра-ссылка на оригинальный размер
<?php
 if ( has_post_thumbnail()) {
   $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(), 'large');
   echo '<a href="' . $large_image_url[0] . '" title="' . the_title_attribute('echo=0') . '" >';
   the_post_thumbnail('thumbnail');
   echo '</a>';
 }
 ?>

#4 Регистрация нового размера
// допустим в functions.php мы регистрируем дополнительный размер так:
add_image_size( 'spec_thumb', 360, 240, true );
// далее в цикле выводим этот размер так:
the_post_thumbnail( 'spec_thumb' );





//Регистрирует новый размер картинки (миниатюры).
add_image_size()







//Выводит на экран ссылки пагинации на след./пред. сет постов. Используется на страницах архивов (рубрики, метки, ...).
the_posts_pagination( $args );
$args = array(
	'show_all'     => false, // показаны все страницы участвующие в пагинации
	'end_size'     => 1,     // количество страниц на концах
	'mid_size'     => 1,     // количество страниц вокруг текущей
	'prev_next'    => true,  // выводить ли боковые ссылки "предыдущая/следующая страница".
	'prev_text'    => __('« Previous'),
	'next_text'    => __('Next »'),
	'add_args'     => false, // Массив аргументов (переменных запроса), которые нужно добавить к ссылкам.
	'add_fragment' => '',     // Текст который добавиться ко всем ссылкам.
	'screen_reader_text' => __( 'Posts navigation' ),
);






//Регистрирует поддержку новых возможностей темы в WordPress (поддержка миниатюр, форматов записей и т.д.).
add_theme_support()



// Получает имя (display_name) автора поста.
echo get_the_author();



<p><?php the_tags(); ?></p>
// Выводит ссылки на метки, которые относятся к посту.
Изменим начальный текст и разделитель между метками:
<?php the_tags( 'Связи поста: ', ' > '); ?>



<?php echo get_search_query(); ?>
// Подключает форму поиска, файл темы searchform.php. Если такого файла в
// шаблоне темы нет, то будет использован дефолтный код для формы поиска.
// searchform.php
<form role="search" method="get" id="searchform" class="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<div>
		<label class="screen-reader-text" for="s"><?php _x( 'Search for:', 'label' ); ?></label>
		<input type="text" value="<?php echo get_search_query(); ?>" name="s" id="s" />
		<input type="submit" id="searchsubmit" value="<?php echo esc_attr_x( 'Search', 'submit button' ); ?>" />
	</div>
</form>










// подключит файл breadcrumbs.php из каталога текущей темы
get_template_part( 'breadcrumbs' );
// подключит файл breadcrumbs-footer.php из каталога текущей темы
get_template_part( 'breadcrumbs', 'footer' );

// Использование файла loop.php в дочерней теме
// Подразумевается что шаблоны лежат в каталоге wp-content/themes и родительская
// тема называется twentyten, а дочерняя twentytenchild, тогда следующий код будет
// пытаться подключить файлы в следующем порядке:
<?php get_template_part( 'loop', 'index' ); ?>
wp-content/themes/twentytenchild/loop-index.php
wp-content/themes/twentytenchild/loop.php
wp-content/themes/twentyten/loop-index.php
wp-content/themes/twentyten/loop.php







//
// Шаблон для створення нового типу записи
add_action( 'init', 'register_post_types' );
function register_post_types(){
	register_post_type( 'post_type_name', [
		'label'  => null,
		'labels' => [
			'name'               => '____', // основное название для типа записи
			'singular_name'      => '____', // название для одной записи этого типа
			'add_new'            => 'Добавить ____', // для добавления новой записи
			'add_new_item'       => 'Добавление ____', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование ____', // для редактирования типа записи
			'new_item'           => 'Новое ____', // текст новой записи
			'view_item'          => 'Смотреть ____', // для просмотра записи этого типа.
			'search_items'       => 'Искать ____', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'parent_item_colon'  => '', // для родителей (у древовидных типов)
			'menu_name'          => '____', // название меню
		],
		'description'         => '',
		'public'              => true,
		// 'publicly_queryable'  => null, // зависит от public
		// 'exclude_from_search' => null, // зависит от public
		// 'show_ui'             => null, // зависит от public
		// 'show_in_nav_menus'   => null, // зависит от public
		'show_in_menu'        => null, // показывать ли в меню адмнки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest'        => null, // добавить в REST API. C WP 4.7
		'rest_base'           => null, // $post_type. C WP 4.7
		'menu_position'       => null,
		'menu_icon'           => null,
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical'        => false,
		'supports'            => [ 'title', 'editor' ], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => [],
		'has_archive'         => false,
		'rewrite'             => true,
		'query_var'           => true,
	] );
}

//Использование
register_post_type( $post_type, $args );










//Добавляет (регистрирует) новую (пользовательскую) таксономию.
// хук для регистрации
add_action( 'init', 'create_taxonomy' );
function create_taxonomy(){
	// список параметров: wp-kama.ru/function/get_taxonomy_labels
	register_taxonomy( 'taxonomy', [ 'post' ], [
		'label'                 => '', // определяется параметром $labels->name
		'labels'                => [
			'name'              => 'Genres',
			'singular_name'     => 'Genre',
			'search_items'      => 'Search Genres',
			'all_items'         => 'All Genres',
			'view_item '        => 'View Genre',
			'parent_item'       => 'Parent Genre',
			'parent_item_colon' => 'Parent Genre:',
			'edit_item'         => 'Edit Genre',
			'update_item'       => 'Update Genre',
			'add_new_item'      => 'Add New Genre',
			'new_item_name'     => 'New Genre Name',
			'menu_name'         => 'Genre',
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
		//'query_var'             => $taxonomy, // название параметра запроса
		'capabilities'          => array(),
		'meta_box_cb'           => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column'     => false, // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
		'show_in_rest'          => null, // добавить в REST API
		'rest_base'             => null, // $taxonomy
		// '_builtin'              => false,
		//'update_count_callback' => '_update_post_term_count',
	] );
}







//Выводит список ссылок на термины (элементы таксономии), относящиеся к указанному посту.
<?php the_terms( $id, $taxonomy, $before, $sep, $after ); ?>










// Прячем Заголовки Для Всех Статей И Страниц
.page-id-341 .entry-header {
    display:none;
}
//or
function devise_hidetitle_class($classes) {
if ( is_single() || is_page() ) :
$classes[] = 'hidetitle';
return $classes;
endif;
return $classes;
}
add_filter('post_class', 'wpb_hidetitle_class');
//css
.hidetitle .entry-title {
	display:none;
}


//убрать вывод заголовка на всех статичных страницах
function themeslug_basic_before_page_title(){
    ob_start();
}
add_action( 'basic_before_page_title', 'themeslug_basic_before_page_title' );
function themeslug_basic_after_page_title(){
    ob_clean();
}
add_action( 'basic_after_page_title', 'themeslug_basic_after_page_title' );


//убрать вывод заголовка на определенных статичных страницах
function themeslug_basic_before_page_title(){
  ob_start();
}
add_action( 'basic_before_page_title', 'themeslug_basic_before_page_title' );
function themeslug_basic_after_page_title(){
  $title = ob_get_clean();
  // set up conditions below where you want disable title
  // disable title on page with slug 'contacts'
  if ( is_page( 'contacts' ) ){
    return;
  }
  // disable title on pages with slug 'contacts', title 'Out Contacts' or ID 42
  if ( is_page( array('Page Comments','Out Contacts',1146) ) ){
    return;
  }
  // else show page title by default
  echo $title;
}
add_action( 'basic_after_page_title', 'themeslug_basic_after_page_title' );












//WooHelp.ru
//WooCommerce 3.5.3
//Вывод рейтинга в звездах в каталог
add_filter('woocommerce_product_get_rating_html', 'your_get_rating_html', 10, 2);
  function your_get_rating_html($rating_html, $rating) {
    if ( $rating > 0 ) {
      $title = sprintf( __( 'Rated %s out of 5', 'woocommerce' ), $rating );
    } else {
      $title = 'Not yet rated';
      $rating = 0;
    }
    $rating_html  = '<div class="star-rating" title="' . $title . '">';
    $rating_html .= '<span style="width:' . ( ( $rating / 5 ) * 100 ) . '%"><strong class="rating">' . $rating . '</strong> ' . __( 'out of 5', 'woocommerce' ) . '</span>';
    $rating_html .= '</div>';
    return $rating_html;
  }



  ////kim рейтинг 
  function get_total_reviews_count(){
    return get_comments(array(
        'status'   => 'approve',
        'post_status' => 'publish',
        'post_type'   => 'product',
        'count' => true
    ));
}

function get_products_ratings(){
    global $wpdb;

    return $wpdb->get_results("
        SELECT t.slug, tt.count
        FROM {$wpdb->prefix}terms as t
        JOIN {$wpdb->prefix}term_taxonomy as tt ON tt.term_id = t.term_id
        WHERE t.slug LIKE 'rated-%' AND tt.taxonomy LIKE 'product_visibility'
        ORDER BY t.slug
    ");
}

function products_count_by_rating_html(){
    $star = 1;
    $html = '';
    foreach( get_products_ratings() as $values ){
        $star_text = '<strong>'.$star.' '._n('Star', 'Stars', $star, 'woocommerce').'<strong>: ';
        $html .= '<li class="'.$values->slug.'">'.$star_text.$values->count.'</li>';
        $star++;
    }
    return '<ul class="products-rating">'.$html.'</ul>';
}

function products_rating_average_html(){
    $stars = 1;
    $average = 0;
    $total_count = 0;
    if( sizeof(get_products_ratings()) > 0 ) :
        foreach( get_products_ratings() as $values ){
            $average += $stars * $values->count;
            $total_count += $values->count;
            $stars++;
        }
        return '<p class="rating-average">'.round($average / $total_count, 1).' / 5 '. __('Stars average').'</p>';
    else :
        return '<p class="rating-average">'. __('No reviews yet', 'woocommerce').'</p>';
    endif;
}
// Код идет в файл function.php вашей активной дочерней темы (или активной темы). Проверено и работает.

// Всего отзывов клиентов:
echo '<p>'.__('Total reviews','woocommerce').': '.get_total_reviews_count().'</p>';

// Количество продуктов по списку рейтингов:
echo products_count_by_rating_html();

// Средний рейтинг продуктов:
echo products_rating_average_html();
