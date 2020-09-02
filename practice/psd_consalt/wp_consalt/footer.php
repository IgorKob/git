<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package consalt
 */

?>


<footer class="footer">
  <div class="container clearfix">


<div class="footer_icon">
  <a href="<?php the_field('facebook'); ?>" class="fb"><?php
  					$image = get_field('facebook_icon');
  					if( !empty( $image ) ): ?>
  						<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
  				<?php endif; ?></a>

  <a href="<?php the_field('twitter'); ?>" class="tw"><?php
  					$image = get_field('twitter_icon');
  					if( !empty( $image ) ): ?>
  						<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
  				<?php endif; ?></a>

  <a href="<?php the_field('other'); ?>" class="other"><?php
  					$image = get_field('other_icon');
  					if( !empty( $image ) ): ?>
  						<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
  				<?php endif; ?></a>

  <a href="<?php the_field('youtube'); ?>" class="tube"><?php
  					$image = get_field('youtube_icon');
  					if( !empty( $image ) ): ?>
  						<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
  				<?php endif; ?></a>

  <a href="<?php the_field('rss'); ?>" class="rss"><?php
  					$image = get_field('rss_icon');
  					if( !empty( $image ) ): ?>
  						<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
  				<?php endif; ?></a>

</div>
<div class="footer_nav">

  <?php wp_nav_menu( [
    'theme_location'  => 'menufooter',
    'menu'            => 'menufooter',
    'container'       => false,
    'container_class' => false,
    'container_id'    => false,
    'menu_class'      => 'footer_nav',
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
  ?>

</div>
<div class="copy"><?php the_field('copyright'); ?> <?php echo date("Y"); ?>  <a href="#"><?php the_field('privacy'); ?></a>

</div></div>
</footer>


	</div>
<?php wp_footer(); ?>

</body>
</html>
