<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php do_action( 'storefront_before_footer' ); ?>




	<!-- footer -->
  <footer>

    <div class="footer-top">

      <div class="footer-logo"><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></div>

      <div class="footer-nav">

				<!-- menu_footer1 -->
				<?php
				wp_nav_menu( [
					'theme_location'  => '',
					'menu'            => 'menu_footer1',
					'container'       => false,
					'container_class' => false,
					'container_id'    => false,
					'menu_class'      => false,
					'menu_id'         => false,
					'echo'            => true,
					'fallback_cb'     => 'wp_page_menu',
					'before'          => '',
					'after'           => '',
					'link_before'     => '',
					'link_after'      => '',
					// 'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
					'depth'           => 0,
					'walker'          => '',
				] );
				 ?>

      </div>

      <div class="footer-sites">

        <div class="icon-ff">

					<a href="<?php the_field('social_href1'); ?>"  class='icon-f'>
						<i class="<?php the_field('social_img1'); ?>"></i>
         </a>

        </div>

        <div class="icon-ff">

					<a href="<?php the_field('social_href2'); ?>"  class='icon-f'>
						<i class="<?php the_field('social_img2'); ?>"></i>
				 </a>

        </div>

        <div class="icon-ff">

					<a href="<?php the_field('social_href3'); ?>"  class='icon-f'>
						<i class="<?php the_field('social_img3'); ?>"></i>
				 </a>

        </div>

        <div class="icon-ff">

					<a href="<?php the_field('social_href4'); ?>"  class='icon-f'>
						<i class="<?php the_field('social_img4'); ?>"></i>
				 </a>

        </div>

      </div>

    </div>

    <div class="footer-bottom">

      <div class="footer-bottom__left">

        <div class="footer-bottom__copy">© <?php echo date("Y"); ?>. Quantum UI kit</div>

				<?php
				wp_nav_menu( [
					'theme_location'  => '',
					'menu'            => 'menu_footer2',
					'container'       => false,
					'container_class' => false,
					'container_id'    => false,
					'menu_class'      => false,
					'menu_id'         => false,
					'echo'            => true,
					'fallback_cb'     => 'wp_page_menu',
					'before'          => '',
					'after'           => '',
					'link_before'     => '',
					'link_after'      => '',
					// 'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
					'depth'           => 0,
					'walker'          => '',
				] );
				 ?>

      </div>

      <div class="footer-bottom__right">

        <div class="footer-bottom__right__text">Accepted payment methods</div>

        <div class="footer-bottom__right__icon"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/banks/amazon_icon.png" alt="amazon"></div>

        <div class="footer-bottom__right__icon"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/banks/master_card_icon.png" alt="master card"></div>

        <div class="footer-bottom__right__icon"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/banks/pay_pal_icon.png" alt="pay pal"></div>

        <div class="footer-bottom__right__icon"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/banks/visa_icon.png" alt="visa"></div>


      </div>

    </div>




			<?php
			/**
			 * Functions hooked in to storefront_footer action
			 *
			 * @hooked storefront_footer_widgets - 10
			 * @hooked storefront_credit         - 20
			 */
			?>


	</footer><!-- #colophon -->

	<?php do_action( 'storefront_after_footer' ); ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
