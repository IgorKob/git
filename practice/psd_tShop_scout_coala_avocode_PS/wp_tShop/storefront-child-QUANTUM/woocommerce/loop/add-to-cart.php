<?php
/**
 * Loop Add to Cart
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/add-to-cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce/Templates
 * @version     3.3.0
 */

// if ( ! defined( 'ABSPATH' ) ) {
// 	exit;
// }
//
// global $product;
//
// echo apply_filters(
// 	'woocommerce_loop_add_to_cart_link', // WPCS: XSS ok.
// 	sprintf(
// 		'<a href="%s" data-quantity="%s" class="%s" %s>%s</a>',
// 		esc_url( $product->add_to_cart_url() ),
// 		esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
// 		esc_attr( isset( $args['class'] ) ? $args['class'] : 'button' ),
// 		isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
// 		esc_html( $product->add_to_cart_text() )
// 	),
// 	$product,
// 	$args
// );




if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product;

echo apply_filters(
	'woocommerce_loop_add_to_cart_link', // WPCS: XSS ok.
	sprintf(
		'<a href="%s" data-quantity="%s" class="%s" %s>%s</a>',
		esc_url( $product->add_to_cart_url() ),
		esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
		esc_attr( isset( $args['class'] ) ? $args['class'] : 'button' ),
		isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
		// esc_html( $product->add_to_cart_text() )
		sprintf('<svg class="el-many__s__i" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		                <path
		                  d="M6 16c1.1 0 1.999.9 1.999 2s-.9 2-2 2C4.9 20 4.01 19.1 4.01 18S4.9 16 6 16zM-.001 0H3.27l.939 2H19c.549 0 .997.45.997 1 0 .17-.039.34-.12.48l-3.58 6.49c-.338.62-.997 1.03-1.749 1.03H7.1l-.9 1.63-.029.12c0 .14.11.25.25.25h11.578v2H6c-1.1 0-2-.9-2-2 0-.35.089-.68.249-.96L5.6 9.59 2 2H0zM16 16c1.1 0 1.998.9 1.998 2S17.1 20 16 20s-1.989-.9-1.989-2 .89-2 1.99-2z" />
		              </svg>')
	),
	$product,
	$args
);
