<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );

if ( !function_exists( 'chld_thm_cfg_parent_css' ) ):
    function chld_thm_cfg_parent_css() {
        wp_enqueue_style( 'chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'style.css', array( 'storefront-gutenberg-blocks' ) );

        wp_enqueue_style('cdnfonts_style', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap&subset=cyrillic-ext');
        wp_enqueue_script('select_scripts2', get_stylesheet_directory_uri().'/assets/js/select.js', array(), null, true);
        wp_enqueue_script('slideshow_scripts2', get_stylesheet_directory_uri().'/assets/js/slideshow.js', array(), null, true);

    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css', 10 );

// END ENQUEUE PARENT ACTION



add_action('init', 'myff');
function myff() {
  remove_action('storefront_header', 'storefront_product_search', 40);
  remove_action('storefront_header', 'storefront_header_cart', 60);
  remove_action('storefront_header', 'storefront_primary_navigation', 50);


}

add_action('init', 'myff_search');
function myff_search() {
  add_action('storefront_header', 'myff3', 21);
  function myff3() {
  ?><div class="header-top__search search-heading col-md-6 col-xs-12">
    		<?php if (class_exists('WooCommerce')) { ?>
    				<div class="header-search-form">
    						<form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>">
    								<input type="hidden" name="post_type" value="product" />
    								<input class="header-search-input" name="s" type="text" placeholder="<?php esc_attr_e('Search goods', 'envo-storefront'); ?>"/>
    								<select class="header-top__search__category custom-select header-search-select" name="product_cat">
    										<option class="header-top__search__category_option" value=""><?php esc_html_e('CATEGORY', 'envo-storefront'); ?></option>
    										<?php
    										$categories = get_categories('taxonomy=product_cat');
    										foreach ($categories as $category) {
    												$option = '<option value="' . esc_attr($category->category_nicename) . '">';
    												$option .= esc_html($category->cat_name);
    												$option .= ' (' . absint($category->category_count) . ')';
    												$option .= '</option>';
    												echo $option; // WPCS: XSS OK.
    										}
    										?>
    								</select>
    								<button class="header-top__search__search-svg0" type="submit"><div class="header-top__search__search-svg">
                    					<svg class="search-svg" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                    						<path d="M5.001 8a3 3 0 0 0 0-6 3 3 0 1 0 0 6zm2.773 1.16A5 5 0 1 1 9.16 7.774L13 11.624 11.622 13z" />
                    					</svg>
                    				</div></button>
    						</form>
    				</div>
    		<?php } ?>
    		<?php if (is_active_sidebar('envo-storefront-header-area')) { ?>
    				<div class="site-heading-sidebar" >
    						<?php dynamic_sidebar('envo-storefront-header-area'); ?>
    				</div>
    		<?php } ?>
    </div><?php

  }
}

add_action('init', 'myff_cart');
function myff_cart() {
  remove_action('storefront_header', 'storefront_header_cart', 60);
  add_action('storefront_header', 'storefront_header_cart', 20);
}
add_action('init', 'myff_user');
function myff_user() {
  remove_action('storefront_header', 'storefront_secondary_navigation', 30);
  add_action('storefront_header', 'storefront_secondary_navigation', 21);
}


// // виводимо тільки одну ціну, якщо є ціна зі знихкою то виводимо тільки її
// function filter_woocommerce_format_sale_price( $price, $regular_price, $sale_price ) {
//     if ( $sale_price ) {
//       return '$ '.$sale_price;
//     }
//     return '$ '.$regular_price;
// };
// add_filter( 'woocommerce_format_sale_price', 'filter_woocommerce_format_sale_price', 10, 3 );






// error
function filter_woocommerce_format_sale_price( $price, $regular_price, $sale_price ) {
    if ( $sale_price ) {
      if (preg_match("/$/", $sale_price) ) {
        return '$ '.$sale_price;
      }
      return $sale_price.' грн';

    }
    if (preg_match("/$/", $sale_price) ) {
      return $regular_price.' грн';
    }
    return '$ '.$regular_price;

};
add_filter( 'woocommerce_format_sale_price', 'filter_woocommerce_format_sale_price', 10, 3 );



// $myString = 'Hello, world!';
// echo $myString[0]; // 'H'
