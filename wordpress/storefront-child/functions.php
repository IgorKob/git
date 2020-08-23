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





// //kim , коли виводиться і категорії і товари , ця функція приховує категорії
// remove_filter('woocommerce_product_loop_start', 'woocommerce_maybe_show_product_subcategories');





// //Автоматично оновлювати кошик щодо зміни кількості
// //style.css - прихойте кнопку «Оновити кошик»
// input[name='update_cart'] {
// display: none !important;
// }
// /* OR TRY THIS */
// button[name='update_cart'] {
// display: none !important;
// }
// //Автоматичне оновлення кошика WooCommerce, коли кількість змінюється
// add_action( 'wp_footer', 'bbloomer_cart_refresh_update_qty' );
function bbloomer_cart_refresh_update_qty() {
   if (is_cart()) {
      ?>
      <script type="text/javascript">
         jQuery('div.woocommerce').on('click', 'input.qty', function(){
            jQuery("[name='update_cart']").trigger("click");
         });
      </script>
      <?php
   }
}







// //Програмна зміна ціни на продукт
// // якщо користувач увійшов у систему та є зареєстрованим клієнтом (ціна показується зі знижкою)
// add_filter( 'woocommerce_get_price_html', 'bbloomer_alter_price_display', 9999, 2 );
// function bbloomer_alter_price_display( $price_html, $product ) {
//     // ONLY ON FRONTEND
//     if ( is_admin() ) return $price_html;
//     // ONLY IF PRICE NOT NULL
//     if ( '' === $product->get_price() ) return $price_html;
//     // IF CUSTOMER LOGGED IN, APPLY 20% DISCOUNT
//     if ( wc_current_user_has_role( 'customer' ) ) {
//         $orig_price = wc_get_price_to_display( $product );
//         $price_html = wc_price( $orig_price * 0.80 );
//     }
//     return $price_html;
// }
// // для всіх незареєстрованих користувачів, а також для всіх користувачів,
// // які не ввійшли в систему, які не є "клієнтами": (ціна показується по замовчуванню)
// add_action( 'woocommerce_before_calculate_totals', 'bbloomer_alter_price_cart', 9999 );
// function bbloomer_alter_price_cart( $cart ) {
//     if ( is_admin() && ! defined( 'DOING_AJAX' ) ) return;
//     if ( did_action( 'woocommerce_before_calculate_totals' ) >= 2 ) return;
//     // IF CUSTOMER NOT LOGGED IN, DONT APPLY DISCOUNT
//     if ( ! wc_current_user_has_role( 'customer' ) ) return;
//     // LOOP THROUGH CART ITEMS & APPLY 20% DISCOUNT
//     foreach ( $cart->get_cart() as $cart_item_key => $cart_item ) {
//         $product = $cart_item['data'];
//         $price = $product->get_price();
//         $cart_item['data']->set_price( $price * 0.80 );
//     }
// }









// //10 простих знімків для збільшення продажів
// //1. "Замовляйте до 18:00 та доставляйте її завтра!" повідомлення @ Сторінка одного продукту
// add_action( 'woocommerce_single_product_summary', 'bbloomer_display_pressure_badge', 6 );
// function bbloomer_display_pressure_badge() {
//     echo '<div class="woocommerce-message">Order by 6pm and get it delivered tomorrow!</div>';
// }
// //2. Зображення "Безпечні платежі" @ Сторінка оформлення замовлення
// add_action( 'woocommerce_review_order_after_submit', 'bbloomer_trust_place_order' );
// function bbloomer_trust_place_order() {
//     echo '<img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/logo-center/9_bdg_secured_by_pp_2line.png" style="margin: 1em auto">';
// }
// //3. Відредагуйте "Лише 1 запас" @ Єдину сторінку товару
// add_filter( 'woocommerce_get_availability_text', 'bbloomer_edit_left_stock', 9999, 2 );
// function bbloomer_edit_left_stock( $text, $product ) {
//    $stock = $product->get_stock_quantity();
//      if ( $product->is_in_stock() && $product->managing_stock() && $stock <= get_option( 'woocommerce_notify_low_stock_amount' ) ) $text .= '. Get it today to avoid 5+ days restocking delay!';
//    return $text;
// }
// //4. Замовлення без відволікань
// add_action( 'wp', 'bbloomer_nodistraction_checkout' );
// function bbloomer_nodistraction_checkout() {
//    if ( ! is_checkout() ) return;
//    remove_action( 'storefront_header', 'storefront_social_icons', 10 );
//    remove_action( 'storefront_header', 'storefront_secondary_navigation', 30 );
//    remove_action( 'storefront_header', 'storefront_product_search', 40 );
//    remove_action( 'storefront_header', 'storefront_primary_navigation', 50 );
//    remove_action( 'storefront_header', 'storefront_header_cart', 60 );
//    remove_action( 'storefront_footer', 'storefront_footer_widgets', 10 );
// }
// //5. "Спробуйте перед покупкою" @ Сторінка одного продукту
// add_action( 'woocommerce_single_product_summary', 'bbloomer_add_free_sample_add_cart', 35 );
// function bbloomer_add_free_sample_add_cart() {
//    echo '<p><a href="/?add-to-cart=953" class="button">Add Sample to Cart</a></p>';
// }
// //6. Сторінка Upsell @ Thanks-you
// add_action( 'woocommerce_thankyou', 'bbloomer_thankyou_upsell', 5 );
// function bbloomer_thankyou_upsell() {
// echo '<h2>Customers also bought...</h2>';
// echo do_shortcode( '[products limit="3" columns="3" orderby="popularity" on_sale="true" ]' );
// }
// //7. Масова знижка @ Сторінка замовлення
// add_action( 'woocommerce_before_cart', 'bbloomer_apply_bulk_coupon' );
// function bbloomer_apply_bulk_coupon() {
//     $coupon_code = 'bulk';
//    if ( WC()->cart->get_cart_contents_count() > 5 ) {
//        if ( ! WC()->cart->has_discount( $coupon_code ) ) WC()->cart->add_discount( $coupon_code );
//    } else {
//       if ( WC()->cart->has_discount( $coupon_code ) ) WC()->cart->remove_coupon( $coupon_code );
//    }
// }
// //8. Додатки до продукту @ Один продукт
// add_action( 'woocommerce_before_add_to_cart_quantity', 'bbloomer_gift_wrap', 35 );
function bbloomer_gift_wrap() {
   ?>
   <label><input type="checkbox" name="gift-wrap" value="Yes">$2 Gift Wrap?</label>
    <?php
}
// add_filter( 'woocommerce_add_cart_item_data', 'bbloomer_store_gift', 10, 2 );
// function bbloomer_store_gift( $cart_item, $product_id ) {
//    if( isset( $_POST['gift-wrap'] ) ) $cart_item['gift-wrap'] = $_POST['gift-wrap'];
//    return $cart_item;
// }
// add_action( 'woocommerce_cart_calculate_fees', 'bbloomer_add_checkout_fee' );
// function bbloomer_add_checkout_fee() {
//    foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
//         if ( isset( $cart_item['gift-wrap'] ) ) {
//             $itsagift = true;
//             break;
//         }
//     }
//     if ( $itsagift == true ) WC()->cart->add_fee( 'Gift Wrap', 2 );
// }
// //9. BOGO
// add_filter( 'woocommerce_add_to_cart_validation', 'bbloomer_bogo', 10, 3 );
// function bbloomer_bogo( $passed, $product_id, $quantity ) {
//    $sku_with_gift = 'sku0001';
//    $sku_free_gift = 'sku0002';
//    $product = wc_get_product( $product_id );
//    $sku_this = $product->get_sku();
//     if ( $sku_this == $skuswithgift ) {
//        WC()->cart->add_to_cart( wc_get_product_id_by_sku( $sku_free_gift ) );
//    }
//    return $passed;
// }
// //10. Поріг безкоштовної доставки @ Кошик
// add_action( 'woocommerce_before_cart', 'bbloomer_free_shipping_cart_notice' );
// function bbloomer_free_shipping_cart_notice() {
//    $threshold = 80;
//    $current = WC()->cart->get_subtotal();
//    if ( $current < $threshold ) {
//       wc_print_notice( 'Get free shipping if you order ' . wc_price( $threshold - $current ) . ' more!', 'notice' );
//    }
// }







// //Зміна ціни на продукт залежно від кількості, доданої в кошик (оптові ціни)
// add_action( 'woocommerce_before_calculate_totals', 'bbloomer_quantity_based_pricing', 9999 );
// function bbloomer_quantity_based_pricing( $cart ) {
//     if ( is_admin() && ! defined( 'DOING_AJAX' ) ) return;
//     if ( did_action( 'woocommerce_before_calculate_totals' ) >= 2 ) return;
//     // Define discount rules and thresholds
//     $threshold1 = 101; // Change price if items > 100
//     $discount1 = 0.05; // Reduce unit price by 5%
//     $threshold2 = 1001; // Change price if items > 1000
//     $discount2 = 0.1; // Reduce unit price by 10%
//     foreach ( $cart->get_cart() as $cart_item_key => $cart_item ) {
//       if ( $cart_item['quantity'] >= $threshold1 && $cart_item['quantity'] < $threshold2 ) {
//          $price = round( $cart_item['data']->get_price() * ( 1 - $discount1 ), 2 );
//          $cart_item['data']->set_price( $price );
//       } elseif ( $cart_item['quantity'] >= $threshold2 ) {
//          $price = round( $cart_item['data']->get_price() * ( 1 - $discount2 ), 2 );
//          $cart_item['data']->set_price( $price );
//       }
//     }
//  }







// //Дзвінок за ціну @ Один продукт
// //Відобразити кнопку "POA" та кнопку запиту, якщо ціна порожня @ Єдиний продукт на WooCommerce
// add_filter( 'woocommerce_empty_price_html', 'bbloomer_poa_and_enquiry_cf7_woocommerce' );
// function bbloomer_poa_and_enquiry_cf7_woocommerce() {
//    $html = '<div class="poa">POA</div>';
//    $html .= '<button type="submit" id="trigger_cf" class="single_add_to_cart_button button alt"> Request Price Now </button>';
//    $html .=  '<div id="product_inq" style="display:none">';
//    $html .= do_shortcode('[paste_your_contact_form_7_shortcode_here]');
//    $html .=  '</div>';
//    return $html;
// }









// //Встановити мінімальну кількість у кошик для конкретного товару на основі мінімальної закупівлі @ WooCommerce Єдиного сторінки та сторінки кошика
// add_filter( 'woocommerce_quantity_input_min', 'bloomer_woocommerce_quantity_min_50_eur', 9999, 2 );
// function bloomer_woocommerce_quantity_min_50_eur( $min, $product ) {
//    if ( is_product() ) {
//       if ( 123 === $product->get_id() ) {
//          $min = ceil( 50 / $product->get_price() );
//       }
//    }
//    return $min;
// }
// // ------------
// // 2. Cart Page
// add_filter( 'woocommerce_cart_item_quantity', 'bloomer_woocommerce_quantity_min_50_eur_cart', 9999, 3 );
// function bloomer_woocommerce_quantity_min_50_eur_cart( $product_quantity, $cart_item_key, $cart_item ) {
//    $_product = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
//    $min = 0;
//    if ( 123 === $product->get_id() ) {
//       $min = ceil( 50 / $_product->get_price() );
//    }
//    $product_quantity = woocommerce_quantity_input( array(
//       'input_name'   => "cart[{$cart_item_key}][qty]",
//       'input_value'  => $cart_item['quantity'],
//       'max_value'    => $_product->get_max_purchase_quantity(),
//       'min_value'    => $min,
//       'product_name' => $_product->get_name(),
//    ), $_product, false );
//    return $product_quantity;
// }




// //Показ звичайної та ціни продажу @ Кошик
// add_filter( 'woocommerce_cart_item_price', 'bbloomer_change_cart_table_price_display', 30, 3 );
// function bbloomer_change_cart_table_price_display( $price, $values, $cart_item_key ) {
//    $slashed_price = $values['data']->get_price_html();
//    $is_on_sale = $values['data']->is_on_sale();
//    if ( $is_on_sale ) {
//       $price = $slashed_price;
//    }
//    return $price;
// }




// //style.css - як приховати стовпчик кошика таблиці
// .woocommerce table.cart td:nth-of-type(4), .woocommerce table.cart th:nth-of-type(4) {
// display: none;
// }





// //Відображення підсумкової позиції кошика після знижки купона @ WooCommerce Cart
// add_filter( 'woocommerce_cart_item_subtotal', 'bbloomer_if_coupon_slash_item_subtotal', 99, 3 );
// function bbloomer_if_coupon_slash_item_subtotal( $subtotal, $cart_item, $cart_item_key ){
// global $woocommerce;
// // Note: use your own coupon code here
// $coupon_code = 'barmada';
// if ( $woocommerce->cart->has_discount( $coupon_code )) {
// // Note: apply your own coupon discount multiplier here
// // In this case, it's a 99% discount, hence I multiply by 0.01
// $newsubtotal = wc_price( $cart_item['data']->get_price() * 0.01 * $cart_item['quantity'] );
// $subtotal = sprintf( '<s>%s</s> %s', $subtotal, $newsubtotal );
// }
// return $subtotal;
// }







// //обчисліть загальну ціну при збільшенні кількості @ Один продукт продукту WooCommerce
// add_action( 'woocommerce_after_add_to_cart_button', 'bbloomer_product_price_recalculate' );
// function bbloomer_product_price_recalculate() {
//    global $product;
//    echo '<div id="subtot" style="display:inline-block;">Total: <span></span></div>';
//    $price = $product->get_price();
//    $currency = get_woocommerce_currency_symbol();
//    wc_enqueue_js( "
//       $('[name=quantity]').on('input change', function() {
//          var qty = $(this).val();
//          var price = '" . esc_js( $price ) . "';
//          var price_string = (price*qty).toFixed(2);
//          $('#subtot > span').html('" . esc_js( $currency ) . "'+price_string);
//       }).change();
//    " );
// }








// //відображення знижок y відсоткaх (червоний квадрат з відсотками) @ Loop Pages - WooCommerce
// add_action( 'woocommerce_before_shop_loop_item_title', 'bbloomer_show_sale_percentage_loop', 25 );
// function bbloomer_show_sale_percentage_loop() {
//    global $product;
//    if ( ! $product->is_on_sale() ) return;
//    if ( $product->is_type( 'simple' ) ) {
//       $max_percentage = ( ( $product->get_regular_price() - $product->get_sale_price() ) / $product->get_regular_price() ) * 100;
//    } elseif ( $product->is_type( 'variable' ) ) {
//       $max_percentage = 0;
//       foreach ( $product->get_children() as $child_id ) {
//          $variation = wc_get_product( $child_id );
//          $price = $variation->get_regular_price();
//          $sale = $variation->get_sale_price();
//          if ( $price != 0 && ! empty( $sale ) ) $percentage = ( $price - $sale ) / $price * 100;
//          if ( $percentage > $max_percentage ) {
//             $max_percentage = $percentage;
//          }
//       }
//    }
//    if ( $max_percentage > 0 ) echo "<div class='sale-perc'>-" . round($max_percentage) . "%</div>";
// }
// //style.css -
// .sale-perc {
// background-color: #D9534F;
// display: inline;
// padding: .2em .6em .3em;
// font-size: 75%;
// font-weight: bold;
// color: #fff;
// text-align: center;
// border-radius: .25em;
// }





// // Показуйте "БЕЗКОШТОВНО", якщо ціна продукту WooCommerce нульова або порожня - Єдина сторінка продукту WooCommerce
// add_filter( 'woocommerce_get_price_html', 'bbloomer_price_free_zero_empty', 9999, 2 );
// function bbloomer_price_free_zero_empty( $price, $product ){
//     if ( '' === $product->get_price() || 0 == $product->get_price() ) {
//         $price = '<span class="woocommerce-Price-amount amount">FREE</span>';
//     }
//     return $price;
// }




// //перемикайте кольори фонового зображення на варіацію кольорів Виберіть @ Один продукт
// add_action( 'woocommerce_after_variations_form', 'bbloomer_switch_image_background_variable_colors' );
// function bbloomer_switch_image_background_variable_colors() {
//    wc_enqueue_js( "
//       $('input.variation_id').change(function(){
//          if('' != $('input.variation_id').val()) {
//             if($('#pa_color').val() =='red'){
//                $('.woocommerce-product-gallery figure').css('background-color', 'red');
//             } else if($('#pa_color').val() =='yellow'){
//                $('.woocommerce-product-gallery figure').css('background-color', 'yellow');
//             }
//          } else {
//             $('.woocommerce-product-gallery figure').css('background-color', 'transparent');
//          }
//       });
//    ");
// }





// //style.css - зображення на повній ширині @ зображення однієї продукції
// .woocommerce #content div.product div.images, .woocommerce div.product div.images, .woocommerce-page #content div.product div.images, .woocommerce-page div.product div.images, .woocommerce #content div.product div.summary, .woocommerce div.product div.summary, .woocommerce-page #content div.product div.summary, .woocommerce-page div.product div.summary {
//    float: none;
//    width: 100%;
//    max-width: unset;
//    clear: both;
// }
// .woocommerce-product-gallery img {
//    width: 100%;
// }





// //Відображення відео замість зображень продукту - сторінка єдиного продукту WooCommerce
// add_action( 'woocommerce_before_single_product', 'bbloomer_show_video_not_image' );
// function bbloomer_show_video_not_image() {
//    // Do this for product ID = 282 only
//    if ( is_single( '282' ) ) {
//       remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20 );
//       remove_action( 'woocommerce_product_thumbnails', 'woocommerce_show_product_thumbnails', 20 );
//       add_action( 'woocommerce_before_single_product_summary', 'bbloomer_show_product_video', 20 );
//    }
// }
// function bbloomer_show_product_video() {
//    echo '<div class="woocommerce-product-gallery">';
//    // get video embed HTML from YouTube
//    echo '<iframe width="560" height="315" src="https://www.youtube.com/embed/JHN7viKRxbQ?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>';
//    echo '</div>';
// }






// //Показати підкатегорії товарів на сторінках циклу WooCommerce
// add_action( 'woocommerce_after_shop_loop_item_title', 'bbloomer_show_all_subcats', 2 );
// function bbloomer_show_all_subcats() {
// global $post;
// $cats = get_the_terms( $post->ID, 'product_cat' );
// if ( ! empty( $cats ) ) {
//         foreach ( $cats as $term ) {
//    // If parent cat ID = 116 echo subcat name...
//         if( $term->parent == 116 ) {
//       echo $term->name;
//    }
//         }
// }
// }

// //Фрагмент 2: Відображення конкретної категорії на сторінці магазину WooCommerce
// add_action( 'woocommerce_after_shop_loop_item_title','bbloomer_show_cat_id', 2 );
// function bbloomer_show_cat_id() {
// global $post;
// $cats = get_the_terms( $post->ID, 'product_cat' );
// if ( count($cats) > 1 ) {
//    foreach ( $cats as $term ) {
//       if( $term->term_id == 35 ) { echo $term->name; }
//    }
// }
// }







// /////////////////////////////////////
// //налаштувати замовлення для покращення конверсій
// //10 Фрагменти оптимізації швидкості конверсії PHP та CSS WooCommerce Checkout
// // 1 Видаліть заголовок, бічну панель, колонтитул, щоб не було відволікань, і клієнт повністю орієнтований на єдиний, що залишився заклик до дії - кнопку «ПЛАЧАТИ»
// // 2 Перемістіть підсумок замовлення, вибір доставки та спосіб оплати праворуч, щоб це було завжди видно
// // 3 Візуальними кроками розділіть довгий макет, зроблений з виставлення рахунків, доставки, банкнот, замовлення та ін
// // 4 Перемістіть форму купона донизу, щоб уникнути шахрайства
// // 5 Зберігайте форму доставки завжди "відкритою", оскільки це найважливіший розділ для B2C
// // 6 Перемістіть форму оплати нижче форми доставки
// // 7 Видаліть непотрібні поля рахунків / доставки; чим більше полів, тим нижчий показник конверсії!
// // 8 Переконайтеся, що вибір способу доставки виділяється більше, оскільки макет за замовчуванням досить поганий
// // 9 Додайте посилання "редагувати кошик", щоб користувачі могли повернутися на сторінку "Кошик" та редагувати своє замовлення
// // 10 Додайте значки безпеки / телефон / Поширені запитання, щоб клієнт довіряв вашому інтернет-бізнесу

// //1. Фрагмент PHP: Видаліть заголовок, бічну панель та колонтитул @ Сторінку оформлення замовлення WooCommerce
// //Цей фрагмент дійсний лише для теми Storefront . Вам потрібно буде відкоригувати код для вашої спеціалізованої теми.
// add_action( 'wp', 'bbloomer_unhook_storefront_functions' );
// function bbloomer_unhook_storefront_functions() {
//    if ( is_checkout() ) {
//       remove_all_actions( 'storefront_header' );
//       remove_action( 'storefront_before_content', 'woocommerce_breadcrumb', 10 );
//       remove_action( 'storefront_sidebar', 'storefront_get_sidebar', 10 );
//       remove_action( 'storefront_footer', 'storefront_footer_widgets', 10 );
//    }
// }
// //style.css
// @media (min-width: 768px) {
//    .woocommerce-checkout.right-sidebar .content-area {
//       width: 100%;
//       float: none;
//       margin-right: 0;
//    }
// }

// //2. Фрагмент CSS: перемістіть огляд замовлень угорі праворуч @ сторінку оформлення замовлення WooCommerce
// //style.css
// @media (min-width: 768px) {
//    /* Billing & Shipping @ Left */
//    .col2-set {
//       width: 52.9411764706%;
//       float: left;
//       margin-right: 5.8823529412%;
//    }
//    /* Order Review @ Right */
//    #order_review_heading, #order_review {
//       width: 41.1764705882%;
//       float: right;
//       margin-right: 0;
//       clear: right;
//    }
// }
// #order_review {
//     position: sticky;
//     top: 0;
// }

// //3. Фрагмент PHP: перемістіть форму купона донизу на сторінку @ WooCommerce Checkout
// //Для цього ми можемо використовувати посібник Visual Hook для оформлення замовлення. Спочатку його виймаємо, потім читаємо в самому дні.
// remove_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10 );
// add_action( 'woocommerce_after_checkout_form', 'woocommerce_checkout_coupon_form', 10 );

// //4. Фрагмент PHP: Форма доставки завжди залишається «відкритою» @ Сторінка оформлення замовлення WooCommerce
// add_filter( 'woocommerce_ship_to_different_address_checked', 'bbloomer_open_shipping_checkout' );
// function bbloomer_open_shipping_checkout() {
//    return 1;
// }

// //5. Фрагмент CSS: перемістіть форму оплати нижче форми доставки @ Сторінку замовлення WooCommerce
// .col2-set .col-1, .col2-set .col-2 {
//    float:none;
//    width: 100%
//    margin: 0;
// }
// //розмістити форму доставки спочатку (вгорі) та форму виставлення рахунків після (знизу)
// .col2-set {
//     display: flex;
//     flex-direction: column;
// }
// .col2-set > .col-1 {
//    order: 2;
// }
// .col2-set > .col-2 {
//    order: 1;
// }

// //6. Фрагмент PHP: розділіть довгий макет на основі виставлення рахунків, доставки, перегляду замовлень на візуальні етапи @ Сторінка оформлення замовлення WooCommerce
// add_action( 'woocommerce_checkout_shipping', 'bbloomer_checkout_step1' );
// function bbloomer_checkout_step1() {
//    echo '<p class="steps">STEP1</p>';
// }
// add_action( 'woocommerce_checkout_billing', 'bbloomer_checkout_step2' );
// function bbloomer_checkout_step2() {
//    echo '<p class="steps">STEP2</p>';
// }
// add_action( 'woocommerce_checkout_before_order_review_heading', 'bbloomer_checkout_step3' );
// function bbloomer_checkout_step3() {
//    echo '<p class="steps">STEP3</p>';
// }
// // style.css -  CSS:
// .steps {
//    background: black;
//    color: white;
//    display: inline-block;
//    padding: 0.5em 2em;
// }

// //7. Фрагмент PHP: Видаліть непотрібні поля рахунків / доставки @ Сторінка оформлення замовлення WooCommerce
// add_filter( 'woocommerce_checkout_fields' , 'custom_override_checkout_fields' );
// function custom_override_checkout_fields( $fields ) {
//      unset(
//        $fields['order']['order_comments'],
//        $fields['shipping']['shipping_company'],
//        $fields['shipping']['shipping_address_2'],
//        $fields['billing']['billing_company'],
//        $fields['billing']['billing_address_2'],
//        $fields['billing']['billing_postcode'],
//        $fields['billing']['billing_phone']
//      );
//      return $fields;
// }

// //9. Фрагмент PHP: додайте посилання "редагувати кошик" @ Сторінку оформлення замовлення WooCommerce
// add_action( 'woocommerce_checkout_before_order_review', 'bbloomer_edit_cart_checkout' );
// function bbloomer_edit_cart_checkout() {
//    echo '<a href="' . wc_get_cart_url() . '">Edit Cart</a>';
// }

// //10. Фрагмент PHP: додайте номер телефону @ Сторінку оформлення замовлення WooCommerce
// add_action( 'woocommerce_review_order_after_submit', 'bloomer_phone_checkout_page' );
function bloomer_phone_checkout_page() {
   ?>
   <p>Need help? Give us a call at <a href="tel:1123456789">+1 123456789</a></p>
   <?php
}









// //Відгуки про продукт WooCommerce Короткий код
// //Після того, як фрагмент нижче буде доданий до вашого function.php,
// //просто використовуйте короткий код [product_reviews id = "123"] де завгодно.
// //Зверніть увагу, що " id " - це ідентифікатор товару, щодо якого ви хочете отримати відгуки клієнтів.
// add_shortcode( 'product_reviews', 'bbloomer_product_reviews_shortcode' );
// function bbloomer_product_reviews_shortcode( $atts ) {
//    if ( empty( $atts ) ) return '';
//    if ( ! isset( $atts['id'] ) ) return '';
//    $comments = get_comments( 'post_id=' . $atts['id'] );
//    if ( ! $comments ) return '';
//    $html .= '<div class="woocommerce-tabs"><div id="reviews"><ol class="commentlist">';
//    foreach ( $comments as $comment ) {
//       $rating = intval( get_comment_meta( $comment->comment_ID, 'rating', true ) );
//       $html .= '<li class="review">';
//       $html .= get_avatar( $comment, '60' );
//       $html .= '<div class="comment-text">';
//       if ( $rating ) $html .= wc_get_rating_html( $rating );
//       $html .= '<p class="meta"><strong class="woocommerce-review__author">';
//       $html .= get_comment_author( $comment );
//       $html .= '</strong></p>';
//       $html .= '<div class="description">';
//       $html .= $comment->comment_content;
//       $html .= '</div></div>';
//       $html .= '</li>';
//    }
//    $html .= '</ol></div></div>';
//    return $html;
// }







// //Показуйте всі продукти, придбані користувачем - WooCommerce сторінка Мій обліковий запис
// //[my_purchased_products]
// add_shortcode( 'my_purchased_products', 'bbloomer_products_bought_by_curr_user' );
// function bbloomer_products_bought_by_curr_user() {
//     // GET CURR USER
//     $current_user = wp_get_current_user();
//     if ( 0 == $current_user->ID ) return;
//     // GET USER ORDERS (COMPLETED + PROCESSING)
//     $customer_orders = get_posts( array(
//         'numberposts' => -1,
//         'meta_key'    => '_customer_user',
//         'meta_value'  => $current_user->ID,
//         'post_type'   => wc_get_order_types(),
//         'post_status' => array_keys( wc_get_is_paid_statuses() ),
//     ) );
//     // LOOP THROUGH ORDERS AND GET PRODUCT IDS
//     if ( ! $customer_orders ) return;
//     $product_ids = array();
//     foreach ( $customer_orders as $customer_order ) {
//         $order = wc_get_order( $customer_order->ID );
//         $items = $order->get_items();
//         foreach ( $items as $item ) {
//             $product_id = $item->get_product_id();
//             $product_ids[] = $product_id;
//         }
//     }
//     $product_ids = array_unique( $product_ids );
//     $product_ids_str = implode( ",", $product_ids );
//     // PASS PRODUCT IDS TO PRODUCTS SHORTCODE
//     return do_shortcode("[products ids='$product_ids_str']");
// }


// //нещодавно переглянуті товари (короткий код)
// //[recently_viewed_products]
// add_shortcode( 'recently_viewed_products', 'bbloomer_recently_viewed_shortcode' );
// function bbloomer_recently_viewed_shortcode() {
//    $viewed_products = ! empty( $_COOKIE['woocommerce_recently_viewed'] ) ? (array) explode( '|', wp_unslash( $_COOKIE['woocommerce_recently_viewed'] ) ) : array();
//    $viewed_products = array_reverse( array_filter( array_map( 'absint', $viewed_products ) ) );
//    if ( empty( $viewed_products ) ) return;
//    $title = '<h3>Recently Viewed Products</h3>';
//    $product_ids = implode( ",", $viewed_products );
//    return $title . do_shortcode("[products ids='$product_ids']");
// }









// //виявлення поточної країни користувача (геолокація)
// //Нова домашня сторінка з "персоналізованим" привітанням на основі геолокованої країни користувача
// function bbloomer_use_geolocated_user_country(){
// // Geolocation must be enabled @ Woo Settings
// $location = WC_Geolocation::geolocate_ip();
// $country = $location['country'];
// // Lets use the country to e.g. echo greetings
// switch ($country) {
//     case "IE":
//         $hello = "Howya!";
//         break;
//     case "IN":
//         $hello = "Namaste!";
//         break;
//     default:
//         $hello = "Hello!";
// }
// echo $hello;
// }
// add_action( '_______', 'bbloomer_use_geolocated_user_country' );





// //приховати продукти на основі IP-адреси / геолокації
// //пам'ятайте, що це не буде працювати, якщо ви не включили геолокацію в загальних налаштуваннях WooCommerce . Окрім цього, отримайте свій ідентифікатор продукту, з’ясуйте 2-літерний код цільової країни, і цей фрагмент зробить цю справу.
// //1. Сховати ідентифікатор продукту на основі геолокованої країни @ WooCommerce Shop
// //У наведеному нижче прикладі я приховую ідентифікатор продукту = 344, якщо поточний відвідувач з Італії. Цей фрагмент PHP може іноді створювати проблеми із сторінками - якщо це не вдалося, перегляньте фрагмент 2 нижче.
// add_filter( 'woocommerce_product_is_visible', 'bbloomer_hide_product_if_country', 9999, 2 );
// function bbloomer_hide_product_if_country( $visible, $product_id ){
//    $location = WC_Geolocation::geolocate_ip();
//    $country = $location['country'];
//    if ( $country === "IT" && $product_id === 344 ) {
//       $visible = false;
//    }
//    return $visible;
// }
// //2. (Альтернатива): Сховати ідентифікатор продукту на основі IP-адреси @ WooCommerce Shop
// //У цьому прикладі я приховую продукти 21 та 32, якщо користувач переглядає IP-адресу США.
// add_action( 'woocommerce_product_query', 'bbloomer_hide_product_if_country_new', 9999, 2 );
// function bbloomer_hide_product_if_country_new( $q, $query ) {
//     if ( is_admin() ) return;
//     $location = WC_Geolocation::geolocate_ip();
//     $hide_products = array( 21, 32 );
//     $country = $location['country'];
//     if ( $country === "US" ) {
//         $q->set( 'post__not_in', $hide_products );
//     }
// }







// //програмно скоротити короткий опис та замінити посиланням "Детальніше" @ Одиночна сторінка продукту WooCommerce
// //Примітка: змінна " show_char " визначає кількість видимих ​​символів короткого опису. У наведеному нижче прикладі я використовую 40.
// add_action( 'woocommerce_after_single_product', 'bbloomer_woocommerce_short_description_truncate_read_more' );
// function bbloomer_woocommerce_short_description_truncate_read_more() {
//    wc_enqueue_js('
//       var show_char = 40;
//       var ellipses = "... ";
//       var content = $(".woocommerce-product-details__short-description").html();
//       if (content.length > show_char) {
//          var a = content.substr(0, show_char);
//          var b = content.substr(show_char - content.length);
//          var html = a + "<span class=\'truncated\'>" + ellipses + "<a class=\'read-more\'>Read more</a></span><span class=\'truncated\' style=\'display:none\'>" + b + "</span>";
//          $(".woocommerce-product-details__short-description").html(html);
//       }
//       $(".read-more").click(function(e) {
//          e.preventDefault();
//          $(".woocommerce-product-details__short-description .truncated").toggle();
//       });
//    ');
// }





// //Дозвольте клієнтові «оплатити замовлення», якщо вийшли з системи (WooCommerce Checkout)
// add_filter( 'user_has_cap', 'bbloomer_order_pay_without_login', 9999, 3 );
// function bbloomer_order_pay_without_login( $allcaps, $caps, $args ) {
//    if ( isset( $caps[0], $_GET['key'] ) ) {
//       if ( $caps[0] == 'pay_for_order' ) {
//          $order_id = isset( $args[2] ) ? $args[2] : null;
//          $order = wc_get_order( $order_id );
//          if ( $order ) {
//             $allcaps['pay_for_order'] = true;
//          }
//       }
//    }
//    return $allcaps;
// }





// //поставте кошик і замовлення на ту ж сторінку
// add_action( 'woocommerce_before_checkout_form', 'bbloomer_cart_on_checkout_page_only', 5 );
// function bbloomer_cart_on_checkout_page_only() {
// if ( is_wc_endpoint_url( 'order-received' ) ) return;
// echo do_shortcode('[woocommerce_cart]');
// }
// //перенаправити порожню сторінку оформлення замовлення на головну сторінку
// add_action( 'template_redirect', 'bbloomer_redirect_empty_cart_checkout_to_home' );
// function bbloomer_redirect_empty_cart_checkout_to_home() {
//    if ( is_cart() && is_checkout() && 0 == WC()->cart->get_cart_contents_count() && ! is_wc_endpoint_url( 'order-pay' ) && ! is_wc_endpoint_url( 'order-received' ) ) {
//       wp_safe_redirect( home_url() );
//       exit;
//    }
// }



// //додайте вміст під зображеннями галереї @ Один продукт WooCommerce
// add_action( 'woocommerce_after_single_product_summary' , 'bbloomer_add_below_prod_gallery', 5 );
// function bbloomer_add_below_prod_gallery() {
//    echo '<div class="woocommerce-product-gallery" style="background: #fdfd5a; padding: 1em 2em">';
//    echo '<span>THIS IS A TEST. YOU CAN ADD TEXT, IMAGES AND ANY HTML</span>';
//    echo '</div>';
// }




// //Відображення галереї продуктів вертикально (одна сторінка продукту)
// add_filter ( 'woocommerce_product_thumbnails_columns', 'bbloomer_change_gallery_columns' );
// function bbloomer_change_gallery_columns() {
//      return 1;
// }
// add_filter ( 'storefront_product_thumbnail_columns', 'bbloomer_change_gallery_columns_storefront' );
// function bbloomer_change_gallery_columns_storefront() {
//      return 1;
// }
// //style.css
// .single-product div.product .woocommerce-product-gallery .flex-viewport {
//     width: 75%;
//     float: left;
// }
// .single-product div.product .woocommerce-product-gallery .flex-control-thumbs {
//     width: 25%;
//     float: left;
// }
// .single-product div.product .woocommerce-product-gallery .flex-control-thumbs li img {
//     width: 90%;
//     float: none;
//     margin: 0 0 10% 10%;
// }






// //Показати кількість проданих товарів @ Сторінка товару
// add_action( 'woocommerce_single_product_summary', 'bbloomer_product_sold_count', 11 );
// function bbloomer_product_sold_count() {
//    global $product;
//    $units_sold = $product->get_total_sales();
//    if ( $units_sold ) echo '<p>' . sprintf( __( 'Units Sold: %s', 'woocommerce' ), $units_sold ) . '</p>';
// }



// //показ продажів для адміністратора @ FrontEnd
// //v3.0+:
// function bbloomer_show_sales_to_admin_325() {
// global $product, $post;
// if ( current_user_can( 'administrator' ) ) {
// echo '<div class="sales-admin"><b>SALES (admin-only):</b><ol>';
// $orders = get_posts( array(
//         'post_type'   => 'shop_order',
//         'post_status' => 'wc-completed'
// ) );
// foreach ($orders as $order) {
//  $order = new WC_Order( $order->ID );
//  $items = $order->get_items();
//  foreach( $items as $item ) {
//   $product_id = $item['product_id'];
//   if ( $post->ID == $product_id ) { echo '<li>' . $order->get_billing_first_name() . ' ' . $order->get_billing_last_name() . '</li>'; }
//  }
// }
// echo '</ol></div>';
// }
// }
// add_action( 'woocommerce_after_shop_loop_item', 'bbloomer_show_sales_to_admin_325', 10 );
// //v3.0:
// function bbloomer_show_sales_to_admin() {
// global $product, $post;
// if ( current_user_can( 'administrator' ) ) {
// echo '<div class="sales-admin"><b>SALES (admin-only):</b><ol>';
// $orders = get_posts( array(
//         'post_type'   => 'shop_order',
//         'post_status' => 'wc-completed'
// ) );
// foreach ($orders as $order) {
//  $order = new WC_Order($order->ID);
//  $items = $order->get_items();
//  foreach($items as $item) {
//   $product_id = $item['product_id'];
//   if ($post->ID == $product_id) { echo '<li>' . $order->billing_first_name . ' ' . $order->billing_last_name . '</li>'; }
//   }
// }
// echo '</ol></div>';
// }
// }
// add_action('woocommerce_after_shop_loop_item','bbloomer_show_sales_to_admin', 10);
// //style.css
// .sales-admin {
// text-align:left;
// margin: 5% auto;
// padding: 0 5%;
// border: 1px dashed red;
// font-size: 14px;
// }







// //Показати дату опублікування @ єдиний продукт
// add_action( 'woocommerce_single_product_summary','bloomer_echo_product_date',25 );
// function bloomer_echo_product_date() {
// if ( is_product() ) {
// echo the_date('', '<span class="date_published">Published on: ', '</span>', false);
// }
// }







// //додайте значок до кнопок 'Додати в кошик'
// add_filter( 'woocommerce_product_single_add_to_cart_text', 'bbloomer_add_symbol_add_cart_button_single' );
// function bbloomer_add_symbol_add_cart_button_single( $button ) {
// $button_new = '&raquo; ' . $button;
// return $button_new;
// }
// //style.css
// button.single_add_to_cart_button:before {
//     display: inline-block;
//     font-family: FontAwesome;
//     float: left;
//     content: "\f217";
//     font-weight: 300;
//     margin-right: 1em;
// }








// //Супутні товари на вкладці на сторінці продукту
// remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20);
// add_filter( 'woocommerce_product_tabs', 'woo_new_product_tab' );
// function woo_new_product_tab( $tabs ) {
// $tabs['related_products'] = array(
//    'title'    => __( 'Try it with', 'woocommerce' ),
//    'priority'    => 50,
//    'callback'    => 'woo_new_product_tab_content'
// );
//    return $tabs;
// }
// function woo_new_product_tab_content() {
// woocommerce_output_related_products();
// }









// //сортуйте тарифи на доставку за ціною @ Кошик / Оформити замовлення на WooCommerce
// add_filter( 'woocommerce_package_rates' , 'businessbloomer_sort_shipping_methods', 10, 2 );
// function businessbloomer_sort_shipping_methods( $rates, $package ) {
//     if ( empty( $rates ) ) return;
//     if ( ! is_array( $rates ) ) return;
//     uasort( $rates, function ( $a, $b ) {
//         if ( $a == $b ) return 0;
//         return ( $a->cost < $b->cost ) ? -1 : 1;
//     } );
//     return $rates;
//     // NOTE: BEFORE TESTING EMPTY YOUR CART
// }






// //Видаліть / перейменуйте код купона з підсумків кошика
// add_filter( 'woocommerce_cart_totals_coupon_label', 'bbloomer_hide_coupon_code', 99, 2 );
// function bbloomer_hide_coupon_code( $label, $coupon ) {
//     return 'Coupon Applied!';
// }



// //додайте префікс / суфікс до цін на продукцію
// //1. додайте суфікс до WooCommerce цін
// add_filter( 'woocommerce_get_price_suffix', 'bbloomer_add_price_suffix', 99, 4 );
// function bbloomer_add_price_suffix( $html, $product, $price, $qty ){
//     $html .= ' suffix here';
//     return $html;
// }
// //2. додайте префікс до WooCommerce цін
// add_filter( 'woocommerce_get_price_html', 'bbloomer_add_price_prefix', 99, 2 );
// function bbloomer_add_price_prefix( $price, $product ){
//     $price = 'Prefix here ' . $price;
//     return $price;
// }





// //Відображення категорій під назвою продукту @ Кошик
// add_filter( 'woocommerce_cart_item_name', 'bbloomer_cart_item_category', 99, 3);
// function bbloomer_cart_item_category( $name, $cart_item, $cart_item_key ) {
// $product_item = $cart_item['data'];
// // make sure to get parent product if variation
// if ( $product_item->is_type( 'variation' ) ) {
// $product_item = wc_get_product( $product_item->get_parent_id() );
// }
// $cat_ids = $product_item->get_category_ids();
// // if product has categories, concatenate cart item name with them
// if ( $cat_ids ) $name .= '</br>' . wc_get_product_category_list( $product_item->get_id(), ', ', '<span class="posted_in">' . _n( 'Category:', 'Categories:', count( $cat_ids ), 'woocommerce' ) . ' ', '</span>' );
// return $name;
// }
