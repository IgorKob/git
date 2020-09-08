<?php
/**
 * Template Name: Мій шаблон home
 * Template Post Type: post, page, product
 */

get_header(); ?>

<!-- ///////////////// -->


<!-- <div class="slideshow-container2" style="width:1110px;height:300px;background:red">
asd
</div> -->

<!-- slideshow-container -->
<div class="slideshow-container">

  <div class="mySlides fade">
<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/slideshow/image.png" style="width:100%">

    <div class="text"><?php the_field('text1'); ?></div>
  </div>

  <div class="mySlides fade">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/slideshow/image2.jpg" style="width:100%">

    <div class="text"><?php the_field('text2'); ?></div>
  </div>

  <div class="mySlides fade">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/slideshow/image3.jpg" style="width:100%">
    <div class="text"><?php the_field('text3'); ?></div>
  </div>

  <a class="prev" onclick="plusSlides(-1)">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path fill="#fff" d="M10.576 20.077l1.393-1.511-7.951-7.553h15.964V9.027H4.018l7.951-7.49L10.41 0 0 10.006l10.576 10.071" />
    </svg>
  </a>

  <a class="next" onclick="plusSlides(1)">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path fill="#fff" d="M9.425 20.077l-1.396-1.511 7.955-7.553H.019V9.027h15.965l-7.955-7.49L9.591 0 20 10.006 9.424 20.077" />
    </svg>
  </a>

  <div class="dot-wrapper" style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div>

</div>
<!-- //slideshow-container -->



<!-- container promo -->
<div class="container00">

  <div class="promo">

    <div class="col">

      <h4 class="col1-title"><?php the_field('title1'); ?></h4>

      <h5 class="col1-text"><?php the_field('desc1'); ?></h5>

      <?php
        $image = get_field('img1');
        if( !empty( $image ) ): ?>
          <img class="col1-img" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
      <?php endif; ?>



      <!-- <img class="col1-img" src="./img/promo/image.png" alt="image"> -->

    </div>

    <div class="col">

      <h4 class="col2-title"><?php the_field('title2'); ?><br><?php the_field('title22'); ?></h4>

      <h5 class="col2-text"><?php the_field('desc2'); ?></h5>

      <?php
        $image = get_field('img2');
        if( !empty( $image ) ): ?>
          <img class="col2-img" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
      <?php endif; ?>

      <!-- <img class="col2-img" src="./img/promo/image2.png" alt="image"> -->

    </div>

    <div class="col colorFaFaFa">

      <div class="col-row">

        <!-- <img class="col3-img" src="./img/promo/image3.png" alt="image"> -->
        <?php
          $image = get_field('img3');
          if( !empty( $image ) ): ?>
            <img class="col3-img" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
        <?php endif; ?>


        <h4 class="col3-title"><?php the_field('title3'); ?> <br><?php the_field('title33'); ?></h4>

      </div>

      <div class="col-row">

        <?php
          $image = get_field('img4');
          if( !empty( $image ) ): ?>
            <img class="col3-img" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
        <?php endif; ?>



        <!-- <img class="col3-img" src="./img/promo/image4.png" alt="image"> -->

        <h4 class="col3-title"><?php the_field('title4'); ?><br><?php the_field('title44'); ?></h4>

      </div>

    </div>

  </div>

</div>
<!-- //container promo -->





















<!-- //////////////// -->


<div class="container00">

  <main>

    <!-- main-nav -->
    <div class="main-nav">

<?php wp_nav_menu( [
  'theme_location'  => 'menu_sidebar',
  'menu'            => 'menu_sidebar',
  'container'       => false,
  'container_class' => false,
  'container_id'    => false,
  'menu_class'      => false,
  'menu_id'         => false,
  'echo'            => true,
  'fallback_cb'     => 'wp_page_menu',
  'before'          => '',
  'link_before'     => '',
  'link_after'      => '',
  'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
  'depth'           => 0,
  'walker'          => '',
] );
?>


<div class="aser">

  <div class="aser-content">

    <h4>Look Up In The Sky</h4>

    <h5>Astronomy Or Astrology</h5>

  </div>

</div>


</div>





    <!-- main-content -->
    <div class="main-content">

      <div class="filter">

        <div class="filter-item filter-active">
          <a href="#">Most Popular</a>
        </div>

        <div class="filter-item">
          <a href="#">My communities</a>
        </div>

      </div>

      <div class="content">

        <?php
        $posts = get_posts( array(
        	'numberposts' => 6,
        	'category'    => 'Uncategorized',
        	'orderby'     => 'date',
        	'order'       => 'ASC',
        	'include'     => array(),
        	'exclude'     => array(),
        	'meta_key'    => '',
        	'meta_value'  =>'',
        	'post_type'   => 'post',
        	'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
        ) );











/////////////////










//////////////////
// echo do_shortcode('[top_rated_products]');
// [products limit="6" columns="3" best_selling="true" ]
// https://docs.woocommerce.com/document/woocommerce-shortcodes/#section-10
// [product limit = "4" columns = "4" orderby = "popularity" class = "quick-sale" on_sale = "true"]




// $loop = new WP_Query( array(
//   'category_name' => 'имя_категории',
//   'post_type' => 'product',
//   'posts_per_page' => 40,
//   'orderby' => 'menu_order',
//   'order' => 'ASC',
//   ));



$loop = new WP_Query( array(
'post_type' => 'product',
// 'posts_per_page' => get_field('products_per_page'),
'posts_per_page' => '6',
'orderby' => 'menu_order',
'order' => 'ASC',
));

while ( $loop->have_posts() ): $loop->the_post(); ?>



        <div class="el" <?php post_class("inloop-product"); ?>>

          <div class="el-top">



<!-- sale -->
            <?php if ( ! defined( 'ABSPATH' ) ) {
            	exit; // Exit if accessed directly
            }

            global $post, $product;

            ?>
            <?php if ( $product->is_on_sale() ) : ?>
<div class="el-top__left">
            	<?php echo apply_filters( 'woocommerce_sale_flash', '<span class="onsale">' . esc_html__( 'Sale!', 'woocommerce' ) . '</span>', $post, $product ); ?>
</div>
            	<?php
            endif; ?>
            <!-- //sale -->

            <div class="el-top__right">

<div class="el-top__menu"><?php $post_id = get_the_ID(); echo do_shortcode( '[wishlist_button show_count="" show_menu="yes" icon_active="" icon_inactive="" icon_loading="" id=$post_id]' ); ?></div>

            </div>

          </div>

          <div class="el-img-wrapper">

            <div class="el-img"><a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a></div>

            <!-- <img class="el-img" src="./img/el/image.png" alt="image"> -->

          </div>

          <div class="el-title">
            <h4>
            <a href="<?php the_permalink(); ?>">
            <?php the_title(); ?>
            </a>
            </h4>
          </div>
<!-- ///////////////////// -->






<!-- //////////////start -->
          <div class="el-start-icon">

            <div class="start"><?php

            if ( ! defined( 'ABSPATH' ) ) {
            	exit;
            }

            global $product;

            if ( ! wc_review_ratings_enabled() ) {
            	return;
            }
// виводимо зірки
            echo wc_get_rating_html( $product->get_average_rating() );


            ?></div>

            <!-- <div class="start">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                <path fill="#f9a72d" d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.189-.61L10 0 7.19 6.63l-7.19.61 5.461 4.73L3.82 19 10 15.27z" />
              </svg>
            </div> -->

            <div class="start-title"><?php
// виводимо кількість голосів
            $rating_count = $product->get_rating_count();
            // $review_count = $product->get_review_count();
            // $average      = $product->get_average_rating();


            if ( $rating_count > 0 ) : ?>
          <?php  echo $rating_count;  ?>


            <?php endif;?></div>


          </div>
          <!-- //////start -->




          <div class="el-many">

            <div class="el-many__d"><?php

            // _e("Price:","examp");
            // woocommerce_template_loop_price();


          woocommerce_template_loop_price();

// woocommerce_template_loop_price - 10


          // echo $product->get_regular_price();

          // echo '$ '.$product->get_regular_price();
// $price
// $regular_price
// $sale_price








            ?></div>

            <div class="el-many__s">

<div class="el-many__s__i"><?php


woocommerce_template_loop_add_to_cart();



?></div>

            </div>

          </div>

        </div>



<?php endwhile; wp_reset_postdata();


////////////////////////














///////////////////////////////



        ?>

      </div>

    </div>
    <!-- //main-content -->

  </main>

</div>
<!-- //container main -->












<?php
do_action( 'storefront_sidebar' );
get_footer();
