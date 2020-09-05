<?php
/**
 * Plugin Name: Tutsplus display WooCommerce products and categories/subcategories separately in archive pages
 */

 function tutsplus_product_cats_css() {

  /* register the stylesheet */
  wp_register_style( 'tutsplus_product_cats_css', plugins_url( 'css/style.css', __FILE__ ) );

  /* enqueue the stylsheet */
  wp_enqueue_style( 'tutsplus_product_cats_css' );

 }

 add_action( 'wp_enqueue_scripts', 'tutsplus_product_cats_css' );



function tutsplus_product_subcategories( $args = array() ) {
  $parentid = get_queried_object_id();

$args = array(
'parent' => $parentid
);

$terms = get_terms( 'product_cat', $args );

if ( $terms ) {

echo '<ul class="product-cats">';

foreach ( $terms as $term ) {

echo '<li class="category">';

woocommerce_subcategory_thumbnail( $term );

echo '<h2>';
echo '<a href="' .  esc_url( get_term_link( $term ) ) . '" class="' . $term->slug . '">';
echo $term->name;
echo '</a>';
echo '</h2>';

echo '</li>';


}

echo '</ul>';

}
    }

add_action( 'woocommerce_before_shop_loop', 'tutsplus_product_subcategories', 50 );
