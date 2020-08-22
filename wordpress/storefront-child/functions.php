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

// END ENQUEUE PARENT ACTION



// //kim
// //new product
// add_action( 'woocommerce_before_shop_loop_item_title', 'bbloomer_new_badge_shop_page', 3 );
//
// function bbloomer_new_badge_shop_page() {
//    global $product;
//    $newness_days = 30;
//    $created = strtotime( $product->get_date_created() );
//    if ( ( time() - ( 60 * 60 * 24 * $newness_days ) ) < $created ) {
//       echo '<span class="itsnew onsale">' . esc_html__( 'New!', 'woocommerce' ) . '</span>';
//    }
// }


// //кількості продуктів в рядоку '1'
// add_filter( 'loop_shop_columns', 'loop_columns', 999 );
// function loop_columns() {
//    return 1;
// }


// //Видаліть заголовок 'Shop' Сторінка магазину
// add_filter( 'woocommerce_show_page_title', 'bbloomer_hide_shop_page_title' );
// function bbloomer_hide_shop_page_title( $title ) {
//    if ( is_shop() ) $title = false;
//    return $title;
// }

// //Видаліть сторінки @ WooCommerce категорії категорій продуктів
// add_filter( 'woocommerce_show_page_title', 'bbloomer_hide_cat_page_title' );
// function bbloomer_hide_cat_page_title( $title ) {
//    if ( is_product_category() ) $title = false;
//    return $title;
// }

// //Видаліть сторінки архіву заголовка @ WooCommerce (магазин, категорія, тег тощо)
// add_filter( 'woocommerce_show_page_title', '__return_null' );




// //Показати порожні категорії продуктів WooCommerce
// add_filter( 'woocommerce_product_subcategories_hide_empty', '__return_false' );

// //Показати порожні категорії продуктів WooCommerce @ Домашня сторінка
// add_filter( 'storefront_product_categories_shortcode_args', 'bblomer_storefront_homepage_show_empty_cats' );
// function bblomer_storefront_homepage_show_empty_cats( $args ) {
//   $args['hide_empty'] = 0;
//   return $args;
// }




// //Показати висоту продукту, довжину, ширину @ Сторінка магазину WooCommerce
// add_action( 'woocommerce_after_shop_loop_item', 'bbloomer_show_product_dimensions_loop', 20 );
// function bbloomer_show_product_dimensions_loop() {
//    global $product;
//    $dimensions = $product->get_dimensions();
//    if ( ! empty( $dimensions ) ) {
//       echo '<div class="dimensions"><b>Height:</b> ' . $product->get_height() . get_option( 'woocommerce_dimension_unit' );
//       echo '<br><b>Width:</b> ' . $product->get_width() . get_option( 'woocommerce_dimension_unit' );
//       echo '<br><b>Length:</b> ' . $product->get_length() . get_option( 'woocommerce_dimension_unit' );
//       echo '</div>';
//    }
// }




// //Відображення назв варіантів і назв @ Сторінки циклу WooCommerce
// add_action( 'woocommerce_after_shop_loop_item', 'bbloomer_echo_stock_variations_loop' );
// function bbloomer_echo_stock_variations_loop(){
//     global $product;
//     if ( $product->get_type() == 'variable' ) {
//         foreach ( $product->get_available_variations() as $key ) {
//             $attr_string = array();
//             foreach ( $key['attributes'] as $attr_name => $attr_value ) {
//                 $attr_string[] = $attr_value;
//             }
//             if ( $key['max_qty'] > 0 ) {
//               echo '<br/>' . implode( ', ', $attr_string ) . ': ' . $key['max_qty'] . ' in stock';
//             } else {
//               echo '<br/>' . implode(', ', $attr_string ) . ': out of stock';
//             }
//         }
//     }
// }





// //кількість продуктів на сторінці '12'
// add_filter( 'loop_shop_per_page', 'bbloomer_redefine_products_per_page', 9999 );
// function bbloomer_redefine_products_per_page( $per_page ) {
//   $per_page = 12;
//   return $per_page;
// }



// //приховати "Не знайдено жодного товару, який відповідає вашому вибору" @ Сторінка магазину WooCommerce та / або Сторінки категорій
// remove_action( 'woocommerce_no_products_found', 'wc_no_products_found' );





// //Видаліть спадне меню «Сортування за замовчуванням» у темі StoreFront
// add_action( 'init', 'bbloomer_remove_default_sorting_storefront' );
// function bbloomer_remove_default_sorting_storefront() {
//    remove_action( 'woocommerce_after_shop_loop', 'woocommerce_catalog_ordering', 10 );
//    remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 10 );
// }

// //Видаліть спадне меню «Сортування за замовчуванням» @ Сторінки магазину та архіву WooCommerce
// remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );







// //Покажіть "Продано" на сторінках магазинів та архівів - WooCommerce
// add_action( 'woocommerce_before_shop_loop_item_title', 'bbloomer_display_sold_out_loop_woocommerce' );
// function bbloomer_display_sold_out_loop_woocommerce() {
//     global $product;
//
//     if ( !$product->is_in_stock() ) {
//         echo '<span class="soldout">' . __( 'SOLD OUT', 'woocommerce' ) . '</span>';
//     }
// }
// //* CSS: style.css */
// .soldout {
//     padding: 3px 8px;
//     text-align: center;
//     background: #222;
//     color: white;
//     font-weight: bold;
//     position: absolute;
//     top: 6px;
//     right: 6px;
//     font-size: 12px;
// }




// сортування продуктів за статусом запасів @ WooCommerce Shop
// add_filter( 'woocommerce_get_catalog_ordering_args', 'bbloomer_first_sort_by_stock_amount', 9999 );
// function bbloomer_first_sort_by_stock_amount( $args ) {
//    $args['orderby'] = 'meta_value';
//    $args['order'] = 'ASC';
//    $args['meta_key'] = '_stock_status';
//    return $args;
// }






// //Видаліть розпродаж! Етикетка від товарів - WooCommerce Shop & Сторінки окремих товарів
// remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10 );
// remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );
// add_filter( 'woocommerce_sale_flash', '__return_null' );

// //Перейменуйте / перекладіть продаж! Етикетка - Магазин WooCommerce та одиничні сторінки товарів
// add_filter( 'woocommerce_sale_flash', 'bbloomer_rename_sale_badge', 9999 );
// function bbloomer_rename_sale_badge() {
//    return '<span class="onsale">ON OFFER</span>';
// }



// //Додайте спеціальне поле до кожного окремого продукту
// //щоб показати Спеціальне поле @ цикл
// //https://www.businessbloomer.com/woocommerce-show-product-custom-field-in-the-category-pages/
// add_action( 'woocommerce_after_shop_loop_item_title', 'bbloomer_woocommerce_product_excerpt', 35 );
// function bbloomer_woocommerce_product_excerpt() {
// global $post;
// if ( is_home() || is_shop() || is_product_category() || is_product_tag() ) {
//    echo '<span class="excerpt">';
//    echo get_post_meta( $post->ID, 'loopdesc', true );
//    echo '</span>';
// }
// }





// //Відображення кнопок списку бажань YITH @ Сторінка магазину - WooCommerce
// add_action( 'woocommerce_after_shop_loop_item', 'bbloomer_display_yith_wishlist_loop', 97 );
// function bbloomer_display_yith_wishlist_loop() {
// echo do_shortcode( "[yith_wcwl_add_to_wishlist]" );
// }




// //Перевірте, чи зареєстрований користувач вже придбав продукт
// add_action( 'woocommerce_after_shop_loop_item', 'bbloomer_user_logged_in_product_already_bought', 30 );
// function bbloomer_user_logged_in_product_already_bought() {
// global $product;
// if ( ! is_user_logged_in() ) return;
// $current_user = wp_get_current_user();
// if ( wc_customer_bought_product( $current_user->user_email, $current_user->ID, $product->get_id() ) ) echo '<div class="user-bought">&hearts; Hey ' . $current_user->first_name . ', you\'ve purchased this in the past. Buy again?</div>';
// }


// //приховати продукти з конкретної категорії @ Магазин - WooCommerce
// add_action( 'woocommerce_product_query', 'bbloomer_hide_products_category_shop' );
// function bbloomer_hide_products_category_shop( $q ) {
//     $tax_query = (array) $q->get( 'tax_query' );
//     $tax_query[] = array(
//            'taxonomy' => 'product_cat',
//            'field' => 'slug',
//            'terms' => array( 'chairs' ), // Category slug here
//            'operator' => 'NOT IN'
//     );
//     $q->set( 'tax_query', $tax_query );
// }







// //Видаліть варіант сортування @ WooCommerce Shop
// add_filter( 'woocommerce_catalog_orderby', 'bbloomer_remove_sorting_option_woocommerce_shop' );
// function bbloomer_remove_sorting_option_woocommerce_shop( $options ) {
//    unset( $options['rating'] );
//    return $options;
// }

// //Перейменуйте параметр сортування @ WooCommerce Shop
// add_filter( 'woocommerce_catalog_orderby', 'bbloomer_rename_sorting_option_woocommerce_shop' );
// function bbloomer_rename_sorting_option_woocommerce_shop( $options ) {
//    $options['price'] = 'Sort by price (asc)';
//    return $options;
// }

// //Додайте користувальницький варіант сортування @ WooCommerce Shop
// add_filter( 'woocommerce_get_catalog_ordering_args', 'bbloomer_sort_by_name_woocommerce_shop' );
// function bbloomer_sort_by_name_woocommerce_shop( $args ) {
//    $orderby_value = isset( $_GET['orderby'] ) ? wc_clean( $_GET['orderby'] ) : apply_filters( 'woocommerce_default_catalog_orderby', get_option( 'woocommerce_default_catalog_orderby' ) );
//    if ( 'name' == $orderby_value ) {
//       $args['orderby'] = 'title';
//       $args['order'] = 'DESC';
//    }
//    return $args;
// }
// // 2. Add new product sorting option to Sorting dropdown
// add_filter( 'woocommerce_catalog_orderby', 'bbloomer_load_custom_woocommerce_catalog_sorting' );
// function bbloomer_load_custom_woocommerce_catalog_sorting( $options ) {
//    $options['name'] = 'Sort by name (desc)';
//    return $options;
// }






// //Показати кількість / стан запасів @ Сторінка магазину WooCommerce
// add_action( 'woocommerce_after_shop_loop_item', 'bbloomer_show_stock_shop', 10 );
// function bbloomer_show_stock_shop() {
//    global $product;
//    echo wc_get_stock_html( $product );
// }




// //змінити посилання на продукт @ WooCommerce Shop / Loop Pages
// add_filter( 'woocommerce_loop_product_link', 'bbloomer_change_product_permalink_shop', 99, 2 );
// function bbloomer_change_product_permalink_shop( $link, $product ) {
//    $this_product_id = $product->get_id();
//    // E.G. CHANGE LINK FOR PRODUCT ID = 25
//    if ( $this_product_id === 25 ) $link = '/custom-landing-page';
//    return $link;
// }
