<?php
/*
 * Template name: Servises
 */
get_header();



$current_page = (get_query_var('home')) ? get_query_var('home') : 1; // определяем текущую страницу блога
$args = array(
    'posts_per_page' => get_option('posts_per_page'), // значение по умолчанию берётся из настроек, но вы можете использовать и собственное
    'blog'          => $current_page // текущая страница
);
query_posts( $args );

$wp_query->is_archive = true;
$wp_query->is_home = false;

while(have_posts()): the_post();
    ?>
    <h2><a href='<?php the_permalink(); ?>'><?php the_title();?></a></h2>

    <div><?php the_time('j F Y'); ?> © <?php the_author_posts_link() ?></div>

    <!-- Мініатюра як силка на пост -->
    <?php if ( has_post_thumbnail()) { ?>
      <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >
      <?php the_post_thumbnail(); ?>
      </a>
    <?php } ?>

    <!-- php the_content(); -->
    <p><?php the_excerpt(); ?></p>



    <?php
endwhile;

// if( function_exists('wp_pagenavi') ) wp_pagenavi(); // функция постраничной навигации
the_posts_pagination( $args );





get_footer();
