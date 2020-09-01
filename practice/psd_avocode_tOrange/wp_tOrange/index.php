<?php
/**
 * The main template file
 * Template name: Головна
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package tOrange
 */

get_header();
?>

<div class="header-content">
	<div class="header-text0">
		<h1 class="header-title"><?php the_field('header-title'); ?></h1>
		<div class="header-text">
			<p><?php the_field('header-text'); ?></p>
		</div>

			<a href="<?php if (!the_field('contact_href')) {
			// the_field('contact_href');
		}
			echo esc_url( home_url( '/contact' ) );

			?>" class="header-btn"><?php the_field('btn_title'); ?></a>

	</div>
	<div class="header-photo">
		<?php
			$image = get_field('header-photo');
			if( !empty( $image ) ): ?>
		    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
		<?php endif; ?>
	</div>
</div>


<div class="header-social">
<a href="<?php the_field('href'); ?>" class="header-social-item"><i class="<?php the_field('icon_class'); ?>"></i></a>
<a href="<?php the_field('href2'); ?>" class="header-social-item"><i class="<?php the_field('icon_class2'); ?>"></i></a>
<a href="<?php the_field('href3'); ?>" class="header-social-item"><i class="<?php the_field('icon_class3'); ?>"></i></a>
<a href="<?php the_field('href4'); ?>" class="header-social-item"><i class="<?php the_field('icon_class4'); ?>"></i></a>

</div>

</div>
</header>

<?php
// get_sidebar();
get_footer();
