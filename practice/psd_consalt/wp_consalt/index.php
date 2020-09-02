<?php
/**
 * The main template file
 * Template name: Home-page
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package consalt
 */

get_header();
?>

<section class="main">
		<div class="container" style="background-image: url('<?php if( get_field('image_slider') ) {
				the_field('image_slider'); }?>');">

		<h1 class="head"><span><?php the_field('main_title1'); ?></span> <?php the_field('main_title2'); ?><br><?php the_field('main_title3'); ?> <span><?php the_field('main_title4'); ?></span></h1>
		<a href="<?php if (!the_field('contact_href_btn')) {
		// the_field('contact_href');
	}
		echo esc_url( home_url( '/contact' ) );

		?>" class="btn"><?php the_field('read_more'); ?></a>
	</div>
</section>




<section class="about">
	<div class="container">



<!-- ///////////////// -->
<?php
$posts = get_posts( array(
	'numberposts' => 3,
	'category'    => 'home',
	'orderby'     => 'date',
	'order'       => 'ASC',
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
		?>
		<div class="about_item">
			<h2 class="about_tittle"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>


			<?php if ( has_post_thumbnail()) { ?>
			  <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >

			  <div class="about_img">
			  	<?php the_post_thumbnail(); ?>
			  </div>
			  </a>
			<?php } ?>

			<!-- <div class="about_text"><?php the_content(); ?></div> -->
			<div class="about_text"><?php the_excerpt(); ?></div>







			<a href="<?php the_permalink(); ?>" class="btn btn2"><?php the_field('read_more2'); ?></a>
			</div>
		<?php
}
wp_reset_postdata(); // сброс

?>





<!-- //////////////////// -->



	</div>
</section>





<section class="services">
<div class="container">
<div class="services_left clearfix">
<h2 class="services_title"><?php the_field('services_title'); ?></h2>
<img class="img" src="image/f1.jpg"  alt="">
<p class="services_text"><?php the_field('services_text'); ?></p>
<p class="services_text"><?php the_field('services_text2'); ?></p>
<p class="services_text stg"><?php the_field('services_text3'); ?></p>
<p class="services_text stg"><?php the_field('services_text4'); ?></p>
<a href="#" class="btn"><?php the_field('services_text_btn'); ?></a>
</div>
<div class="services_right">
<h2 class="services_title"><?php the_field('services_title11'); ?></h2>
<p class="services_text"><?php the_field('services_text22'); ?></p>

<span><?php the_field('services_list'); ?></span>

<!-- <ul class="services_list">
<li>Malesuada at, neque.vamus eget nibhtia</li>
<li>Vivamus eget nibiam cursus leo vel metus</li>
<li>Nulla facilisienean nec erosestibulum </li>
<li>Qstibulum ante ipsum primis in </li>
</ul> -->


<a href="#" class="btn"><?php the_field('services_text_btn'); ?></a>
</div>
</div>


</section>

<?php
get_footer();
