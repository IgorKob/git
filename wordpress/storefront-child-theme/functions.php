<?php
/*
* Generated By Orbisius Child Theme Creator - your favorite plugin for Child Theme creation :)
* https://wordpress.org/plugins/orbisius-child-theme-creator/
*
* Unlike style.css, the functions.php of a child theme does not override its counterpart from the parent.
* Instead, it is loaded in addition to the parent’s functions.php. (Specifically, it is loaded right before the parent theme's functions.php).
* Source: https://codex.wordpress.org/Child_Themes#Using_functions.php
*
* Be sure not to define functions, that already exist in the parent theme!
* A common pattern is to prefix function names with the (child) theme name.
* Also if the parent theme supports pluggable functions you can use function_exists( 'put_the_function_name_here' ) checks.
*/

/**
 * Loads parent and child themes' style.css
 */
function orbisius_ct_storefront_child_theme_child_theme_enqueue_styles() {
    $parent_style = 'orbisius_ct_storefront_child_theme_parent_style';
    $parent_base_dir = 'storefront';

    wp_enqueue_style( $parent_style,
        get_template_directory_uri() . '/style.css',
        array(),
        wp_get_theme( $parent_base_dir ) ? wp_get_theme( $parent_base_dir )->get('Version') : ''
    );

    wp_enqueue_style( $parent_style . '_child_style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}

add_action( 'wp_enqueue_scripts', 'orbisius_ct_storefront_child_theme_child_theme_enqueue_styles' );









// //                      kim
// //підключення Зовнішні файли CSS та JavaScript
//Коли вам потрібно включити деякі зовнішні файли CSS або JavaScript, ви завжди повинні використовувати ці гачки дій:
// wp_enqueue_scripts
// admin_enqueue_scripts - для інформаційної панелі адміністратора WordPress
// //всередині цих гачків, повинні використовувати спеціальні функції, ось список
// wp_register_script() / wp_register_style()
// wp_deregister_script() / wp_deregister_style()
// wp_enqueue_script() / wp_enqueue_style()
// wp_localize_script()
// wp_add_inline_script()

// // style.css
// add_action( 'wp_enqueue_scripts', 'misha_main_theme_css' );
// function misha_main_theme_css() {
// 	wp_enqueue_script( 'misha-css', get_stylesheet_uri() );
// }
// //get_stylesheet_uri(),
// //get_stylesheet_directory_uri() . '/style.css',
// //get_template_directory_uri() . '/style.css' - цей дещо інший, якщо ви збираєтеся використовувати його в дочірній темі, він поверне style.cssURL-адресу файлу батьківського.

// //попередньо зареєструвати власні сценарії та стилі, наприклад, у деяких темах чи плагінах
// add_action( 'wp_enqueue_scripts', 'misha_register_and_enqueue' );
// function misha_register_and_enqueue() {
// 	wp_register_script( 'some-script', $url );
// 	wp_enqueue_script( 'some-script' );
// }

// //Скасуйте реєстрацію скриптів та таблиць стилів, які вам не потрібні
// //Хороший приклад тут - контактна форма 7 плагінів, яка додає свій власний
// //таблицю стилів на вашому веб-сайті. У деяких випадках він вам може не знадобиться, тому  його можна легко деактивувати:
// add_action( 'wp_enqueue_scripts', 'misha_remove_contact_form_7_css', 9999 );
// function misha_remove_contact_form_7_css() {
// 	wp_deregister_style( 'contact-form-7' );
// }

// //Залежності
// //не має значення, який пріоритет гака та в якому файлі плагіна або теми
// // у всіх випадках misha-script-2буде додано до документа HTML лише після
// //jquery та misha-script-1.
// add_action( 'wp_enqueue_scripts', 'misha_custom_js_with_dependency' );
// function misha_custom_js_with_dependency() {
// 	wp_enqueue_script(
// 		'misha-script-2',
// 		plugin_dir_url( __FILE__ ) . 'assets/script.js',
// 		array( 'jquery', 'misha-script-1' )
// 	);
// }

// //Перемістіть jQuery від Header до Footer
// add_action( 'wp_enqueue_scripts', 'misha_jquery_in_footer' );
// function misha_jquery_in_footer() {
// 	wp_deregister_script( 'jquery' );
// 	wp_register_script(
// 		'jquery',
// 		includes_url( '/js/jquery/jquery.js' ),
// 		false, // no dependencies
// 		NULL, // no version to show
// 		true // in footer? yes
// 	);
// 	wp_enqueue_script( 'jquery' );
// }

// //Не допускайте кешування файлів CSS та JavaScript
// add_action( 'wp_enqueue_scripts', 'misha_main_theme_css_cache_refresh' );
// function misha_main_theme_css_cache_refresh() {
// 	wp_enqueue_style(
// 		'misha-css',
// 		get_stylesheet_uri(),
// 		array(),
// 		filemtime( dirname( __FILE__ ) . '/style.css' )
// 	);
// }

// //Не допускайте кешування файлів приклад для користувацьких плагінів.
// //У нас є файл плагінів misha-plugin.php, каталог assets/і script.jsв ньому.
// add_action( 'wp_enqueue_scripts', 'misha_plugin_javascript_cache_refresh' );
// function misha_plugin_javascript_cache_refresh() {
// 	wp_enqueue_script(
// 		'misha-plugin-js',
// 		plugin_dir_url( __FILE__ ) . 'assets/script.js', // no slashes
// 		array( 'jquery' ),
// 		filemtime( dirname( __FILE__ ) . '/assets/script.js )
// 	);
// }










//добавляємо до назви товару артикль товару на сторіні магазину
remove_filter('woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10);
add_action('woocommerce_shop_loop_item_title', 'mykim', 10);
function mykim() {
  global $product;
  $sku = $product->get_sku() ? '-'.$product->get_sku():'';
  $title = $product->get_title();
  echo '<h2>'.$title.$sku.'</h2>';
}
// добавляємо до назви товару артикль товару на сторіні товару
remove_filter('woocommerce_single_product_summary', 'woocommerce_template_single_title', 5);
add_action('woocommerce_single_product_summary', 'mykim', 5);
function mykim() {
  global $product;
  $sku = $product->get_sku() ? '-'.$product->get_sku():'';
  $title = $product->get_title();
  echo '<h2>'.$title.$sku.'</h2>';
}




//kim - змінюємо розміщення поля 'city' на сторінці 'оформити замовлення', міняючи пріорітет
add_action('woocommerce_default_address_fields', 'mykim2');
function mykim2($v){
  $v['city']['priority'] = 45;
  return $v;
}



// // замінити текст кнопки замовлення
// add_filter( 'woocommerce_order_button_text', 'misha_custom_button_text' );
// function misha_custom_button_text( $button_text ) {
//    return 'Submit'; // new text is here
// }
// // або
// add_filter( 'woocommerce_order_button_text', 'misha_custom_button_text_for_product' );
// function misha_custom_button_text_for_product( $button_text ) {
// 	$product_id = 18; // a specific product ID you would like to check
// 	if( WC()->cart->find_product_in_cart( WC()->cart->generate_cart_id( $product_id ) ) ) {
// 		$button_text = 'Submit';
// 	}
// 	return $button_text;
// }
// // або
// add_filter( 'woocommerce_order_button_html', 'misha_custom_button_html' );
// function misha_custom_button_html( $button_html ) {
// 	// $button_html = str_replace( 'Place order', 'Submit', $button_html );
//   $order_button_text = 'Submit';
//   $button_html = '<button type="submit" class="button alt" name="woocommerce_checkout_place_order" id="place_order" value="' . esc_attr( $order_button_text ) . '" data-value="' . esc_attr( $order_button_text ) . '">' . esc_html( $order_button_text ) . '</button>';
// 	return $button_html;
// }






// // Видаліть поля оплати та доставки
// add_filter( 'woocommerce_default_address_fields', 'misha_remove_fields' );
// function misha_remove_fields( $fields ) {
// 	unset( $fields[ 'company' ] );
// // first_name,
// // last_name,
// // company,
// // address_1,
// // address_2,
// // state,
// // city,
// // country,
// // postcode
// 	return $fields;
// }

// // Але зауважте, що якщо ви використовуєте woocommerce_shipping_fields
// // або woocommerce_billing_fields фільтруєте гачок, до ідентифікатора поля
// // повинен бути доданий відповідний префікс ( billing_або shipping_), наприклад:
// add_filter( 'woocommerce_billing_fields', 'misha_remove_billing_fields' );
// function misha_remove_billing_fields( $fields ) {
// 	unset( $fields[ 'billing_address_2' ] ); // or shipping_address_2 for woocommerce_shipping_fields hook
// 	return $fields;
// }



// // Вимкнути перевірку поля
// // У цьому випадку вам не потрібно видаляти все поле, а лише певну властивість його ( required).
// add_filter( 'woocommerce_default_address_fields', 'misha_remove_fields' );
// function misha_remove_fields( $fields ) {
// // $fields[ 'shipping_company' ]['required'] = true;
// 	unset( $fields[ 'last_name' ]['required'] );
// 	return $fields;
// }


// // змінюємо поля
// //Але requiredце не єдиний параметр поля, який ми можемо змінити. Ось список:
// // label (рядок)
// // placeholder (рядок)
// // class (масив)
// // priority (ціле число)
// add_filter( 'woocommerce_default_address_fields' , 'misha_change_fname_field' );
// function misha_change_fname_field( $fields ) {
// 	$fields['first_name']['label'] = 'Name';
// 	$fields['first_name']['placeholder'] = 'Your mom calls you';
// 	return $fields;
// }







// // Створіть власне поле адреси
// add_filter( 'woocommerce_default_address_fields', 'misha_add_field' );
// function misha_add_field( $fields ) {
// 	$fields['fav_color']   = array(
// 		'label'        => 'Favorite color',
// 		'required'     => true,
// 		'class'        => array( 'form-row-wide', 'my-custom-class' ),
// // form-row-wide - повна ширина поля,
// // form-row-first - поле з 2 стовпцями, перший стовпець,
// // form-row-last - поле з 2 стовпцями, другий стовпчик;
// 		'priority'     => 20,
// 		'placeholder'  => 'Is it black or orange or maybe green?',
// 	);
// 	return $fields;
// }





// // додати поле на сторінки WordPress / wp-admin /
// add_filter( 'woocommerce_customer_meta_fields', 'misha_admin_address_field' );
// function misha_admin_address_field( $admin_fields ) {
// 	$admin_fields['billing']['fields']['billing_fav_color'] = array(
// 		'label' => 'Fav color',
// 		'description' => 'Some field description will go here',
// 	);
// 	// or $admin_fields['shipping']['fields']['shipping_fav_color']
// 	// or both
// 	return $admin_fields;
// }







// //Видаліть перевірку за замовчуванням з полів
// add_filter( 'woocommerce_checkout_fields', 'misha_no_email_validation' );
// function misha_no_email_validation( $fields ){
// 	unset( $fields['billing']['billing_email']['validate'] );
// 	return $fields;
// }




// //Укажіть ім’я та прізвище, щоб містити лише літери
// add_action( 'woocommerce_after_checkout_validation', 'misha_validate_fname_lname', 10, 2);
// function misha_validate_fname_lname( $fields, $errors ){
//     if ( preg_match( '/\\d/', $fields[ 'billing_first_name' ] ) || preg_match( '/\\d/', $fields[ 'billing_last_name' ] )  ){
//         $errors->add( 'validation', 'Your first or last name contains a number. Really?' );
//     }
// }











// //Сортування полів у групі
// Перше, що потрібно пам’ятати, що поля розділені на групи, а насправді є 4 групи:
// billing - платіжна адреса
// shipping - Адреса доставки
// account - Вхід в обліковий запис
// order - Додаткова інформація

// //Приклад - зробити поле електронної пошти першим
// add_filter( 'woocommerce_checkout_fields', 'misha_email_first' );
// function misha_email_first( $checkout_fields ) {
// 	$checkout_fields['billing']['billing_email']['priority'] = 4;
// 	return $checkout_fields;
// }





//одночасно змінювати замовлення як для полів рахунків, так і для доставки
add_filter( 'woocommerce_default_address_fields', 'misha_email_first' );
function misha_email_first( $address_fields ) {
	// as you can see, no needs to specify a field group anymore
	$address_fields['email']['priority'] = 4;
	return $address_fields;
}













// відобразити стовпець із датою / часом останнього входу користувачів - admin панель користувачів
add_action( 'wp_login', 'misha_collect_login_timestamp', 20, 2 );
function misha_collect_login_timestamp( $user_login, $user ) {
	update_user_meta( $user->ID, 'last_login', time() );
}
// Відображте стовпець на сторінці всіх користувачів
add_filter( 'manage_users_columns', 'misha_add_last_login_column' );
add_filter( 'manage_users_custom_column', 'misha_last_login_column', 10, 3 );
function misha_user_last_login_column( $columns ) {
	$columns['last_login'] = 'Last Login'; // column ID / column Title
	return $columns;
}
function misha_last_login_column( $output, $column_id, $user_id ){
	if( $column_id == 'last_login' ) {
		$last_login = get_user_meta( $user_id, 'last_login', true );
		$date_format = 'j M, Y';
		$output = $last_login ? date( $date_format, $last_login ) : '-';
	}
	return $output;
}
// Створення сортування останнього стовпця для входу
add_filter( 'manage_users_sortable_columns', 'misha_sortable_columns' );
add_action( 'pre_get_users', 'misha_sort_last_login_column' );
function misha_sortable_columns( $columns ) {
	return wp_parse_args( array(
	 	'last_login' => 'last_login'
	), $columns );
}
function misha_sort_last_login_column( $query ) {
	if( !is_admin() ) {
		return $query;
	}
	$screen = get_current_screen();
	if( isset( $screen->id ) && $screen->id !== 'users' ) {
		return $query;
	}
	if( isset( $_GET[ 'orderby' ] ) && $_GET[ 'orderby' ] == 'last_login' ) {
		$query->query_vars['meta_key'] = 'last_login';
		$query->query_vars['orderby'] = 'meta_value';
	}
	return $query;
}





// Як додати Стовпець Дата реєстрації користувача на сторінку "Усі користувачі"
add_filter( 'manage_users_columns', 'rudr_modify_user_table' );
function rudr_modify_user_table( $columns ) {
	// unset( $columns['posts'] ); // maybe you would like to remove default columns
	$columns['registration_date'] = 'Registration date'; // add new
	return $columns;
}
add_filter( 'manage_users_custom_column', 'rudr_modify_user_table_row', 10, 3 );
function rudr_modify_user_table_row( $row_output, $column_id_attr, $user ) {
	$date_format = 'j M, Y H:i';
	switch ( $column_id_attr ) {
		case 'registration_date' :
			return date( $date_format, strtotime( get_the_author_meta( 'registered', $user ) ) );
			break;
		default:
	}
	return $row_output;
}
add_filter( 'manage_users_sortable_columns', 'rudr_make_registered_column_sortable' );
function rudr_make_registered_column_sortable( $columns ) {
	return wp_parse_args( array( 'registration_date' => 'registered' ), $columns );
}

// сортувати за замовчуванням дату реєстрації DESC
add_action( 'pre_user_query', 'misha_users_by_date_registered_by_default' );
function misha_users_by_date_registered_by_default( $query ) {
	global $pagenow;
	if ( is_admin() && 'users.php' == $pagenow ) {
		$query->query_orderby = 'ORDER BY user_registered DESC';
	}
	return $query;
}










// Додайте стовпці ідентифікатора і батьківського коментаря до таблиці коментарів у / wp-admin
add_filter( 'manage_edit-comments_columns', 'rudr_add_comments_columns' );
function rudr_add_comments_columns( $my_cols ){
	// $my_cols is the array of all column IDs and labels
	// if you know arrays, you can add, remove or change column order with no problems
	// like this:
	/*
	$my_cols = array(
		'cb' => '', // do not forget about the CheckBox
		'author' => 'Author',
		'comment' => 'Comment',
		'm_comment_id' => 'ID', // added
		'm_parent_id' => 'Parent ID', // added
		'response' => 'In reply to',
		'date' => 'Date'
	);
	*/
	// but the above way is not so good - there could be problems when plugins would like to hook the comment columns
	// so, better like this:
	$misha_columns = array(
		'm_comment_id' => 'ID',
		'm_parent_id' => 'Parent ID'
	);
	$my_cols = array_slice( $my_cols, 0, 3, true ) + $misha_columns + array_slice( $my_cols, 3, NULL, true );
	// if you want to remove a column, you can just use:
	// unset( $my_cols['response'] );
	// return the result
	return $my_cols;
}
add_action( 'manage_comments_custom_column', 'rudr_add_comment_columns_content', 10, 2 );
function rudr_add_comment_columns_content( $column, $comment_ID ) {
	global $comment;
	switch ( $column ) :
		case 'm_comment_id' : {
			echo $comment_ID; // or echo $comment->comment_ID;
			break;
		}
		case 'm_parent_id' : {
			// try to print_r( $comment ); to see more comment information
			echo $comment->comment_parent; // this will be printed inside the column
			break;
		}
	endswitch;
}
// ..kim
add_action( 'admin_head', 'rudr_columns_too_wide' );
function rudr_columns_too_wide(){
	echo '<style>#m_comment_id, #m_parent_id {width: 100px;}</style>';
}














//Надсилання коментарів без оновлення сторінки - AJAX - TwentySeventeen theme
add_action( 'wp_enqueue_scripts', 'misha_ajax_comments_scripts' );
function misha_ajax_comments_scripts() {
	// I think jQuery is already included in your theme, check it yourself
	wp_enqueue_script('jquery');
	// just register for now, we will enqueue it below
	wp_register_script( 'ajax_comment', get_stylesheet_directory_uri() . '/ajax-comment.js', array('jquery') );
	// let's pass ajaxurl here, you can do it directly in JavaScript but sometimes it can cause problems, so better is PHP
	wp_localize_script( 'ajax_comment', 'misha_ajax_comment_params', array(
		'ajaxurl' => site_url() . '/wp-admin/admin-ajax.php'
	) );
 	wp_enqueue_script( 'ajax_comment' );
}
//
add_action( 'wp_ajax_ajaxcomments', 'misha_submit_ajax_comment' ); // wp_ajax_{action} for registered user
add_action( 'wp_ajax_nopriv_ajaxcomments', 'misha_submit_ajax_comment' ); // wp_ajax_nopriv_{action} for not registered users
function misha_submit_ajax_comment(){
	$comment = wp_handle_comment_submission( wp_unslash( $_POST ) );
	if ( is_wp_error( $comment ) ) {
		$error_data = intval( $comment->get_error_data() );
		if ( ! empty( $error_data ) ) {
			wp_die( '<p>' . $comment->get_error_message() . '</p>', __( 'Comment Submission Failure' ), array( 'response' => $error_data, 'back_link' => true ) );
		} else {
			wp_die( 'Unknown error' );
		}
	}
	$user = wp_get_current_user();
	do_action('set_comment_cookies', $comment, $user);
	$comment_depth = 1;
	$comment_parent = $comment->comment_parent;
	while( $comment_parent ){
		$comment_depth++;
		$parent_comment = get_comment( $comment_parent );
		$comment_parent = $parent_comment->comment_parent;
	}
	$GLOBALS['comment'] = $comment;
	$GLOBALS['comment_depth'] = $comment_depth;
	$comment_html = '<li ' . comment_class('', null, null, false ) . ' id="comment-' . get_comment_ID() . '">
		<article class="comment-body" id="div-comment-' . get_comment_ID() . '">
			<footer class="comment-meta">
				<div class="comment-author vcard">
					' . get_avatar( $comment, 100 ) . '
					<b class="fn">' . get_comment_author_link() . '</b> <span class="says">says:</span>
				</div>
				<div class="comment-metadata">
					<a href="' . esc_url( get_comment_link( $comment->comment_ID ) ) . '">' . sprintf('%1$s at %2$s', get_comment_date(),  get_comment_time() ) . '</a>';
					if( $edit_link = get_edit_comment_link() )
						$comment_html .= '<span class="edit-link"><a class="comment-edit-link" href="' . $edit_link . '">Edit</a></span>';
				$comment_html .= '</div>';
				if ( $comment->comment_approved == '0' )
					$comment_html .= '<p class="comment-awaiting-moderation">Your comment is awaiting moderation.</p>';
			$comment_html .= '</footer>
			<div class="comment-content">' . apply_filters( 'comment_text', get_comment_text( $comment ), $comment ) . '</div>
		</article>
	</li>';
	echo $comment_html;
	die();
}

//ajax-comment.js
jQuery.extend(jQuery.fn, {
	validate: function () {
		if (jQuery(this).val().length < 3) {jQuery(this).addClass('error');return false} else {jQuery(this).removeClass('error');return true}
	},
	validateEmail: function () {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
		    emailToValidate = jQuery(this).val();
		if (!emailReg.test( emailToValidate ) || emailToValidate == "") {
			jQuery(this).addClass('error');return false
		} else {
			jQuery(this).removeClass('error');return true
		}
	},
});
jQuery(function($){
	$( '#commentform' ).submit(function(){
		// define some vars
		var button = $('#submit'), // submit button
		    respond = $('#respond'), // comment form container
		    commentlist = $('.comment-list'), // comment list container
		    cancelreplylink = $('#cancel-comment-reply-link');
		// if user is logged in, do not validate author and email fields
		if( $( '#author' ).length )
			$( '#author' ).validate();
		if( $( '#email' ).length )
			$( '#email' ).validateEmail();
		// validate comment in any case
		$( '#comment' ).validate();
		// if comment form isn't in process, submit it
		if ( !button.hasClass( 'loadingform' ) && !$( '#author' ).hasClass( 'error' ) && !$( '#email' ).hasClass( 'error' ) && !$( '#comment' ).hasClass( 'error' ) ){
			// ajax request
			$.ajax({
				type : 'POST',
				url : misha_ajax_comment_params.ajaxurl, // admin-ajax.php URL
				data: $(this).serialize() + '&action=ajaxcomments', // send form data + action parameter
				beforeSend: function(xhr){
					// what to do just after the form has been submitted
					button.addClass('loadingform').val('Loading...');
				},
				error: function (request, status, error) {
					if( status == 500 ){
						alert( 'Error while adding comment' );
					} else if( status == 'timeout' ){
						alert('Error: Server doesn\'t respond.');
					} else {
						// process WordPress errors
						var wpErrorHtml = request.responseText.split("<p>"),
							wpErrorStr = wpErrorHtml[1].split("</p>");
						alert( wpErrorStr[0] );
					}
				},
				success: function ( addedCommentHTML ) {
					// if this post already has comments
					if( commentlist.length > 0 ){
						// if in reply to another comment
						if( respond.parent().hasClass( 'comment' ) ){
							// if the other replies exist
							if( respond.parent().children( '.children' ).length ){
								respond.parent().children( '.children' ).append( addedCommentHTML );
							} else {
								// if no replies, add <ol class="children">
								addedCommentHTML = '<ol class="children">' + addedCommentHTML + '</ol>';
								respond.parent().append( addedCommentHTML );
							}
							// close respond form
							cancelreplylink.trigger("click");
						} else {
							// simple comment
							commentlist.append( addedCommentHTML );
						}
					}else{
						// if no comments yet
						addedCommentHTML = '<ol class="comment-list">' + addedCommentHTML + '</ol>';
						respond.before( $(addedCommentHTML) );
					}
					// clear textarea field
					$('#comment').val('');
				},
				complete: function(){
					// what to do after a comment has been added
					button.removeClass( 'loadingform' ).val( 'Post Comment' );
				}
			});
		}
		return false;
	});
});






// //                            Image
// // https://developer.wordpress.org/reference/functions/remove_image_size/
// // Щоб замінити будь-який із розмірів зображень за замовчуванням, таких як "середній",
// // "великий" тощо, потрібно спочатку видалити, а потім додати нові атрибути.
// add_action( 'init', 'wpdocs_change_medium_image_size' );
// function wpdocs_change_medium_image_size() {
//     remove_image_size( 'medium' );
//     add_image_size( 'medium', 300, 300, true );
// }

// //Щоб видалити всі розміри зображень, зберігаючи лише стандартні розміри зображень WordPress -
// function remove_extra_image_sizes() {
//     foreach ( get_intermediate_image_sizes() as $size ) {
//         if ( !in_array( $size, array( 'thumbnail', 'medium', 'medium_large', 'large' ) ) ) {
//             remove_image_size( $size );
//         }
//     }
// }
// add_action('init', 'remove_extra_image_sizes');

// //Скасування реєстрації небажаних розмірів - коли ваша (батьківська) тема
// // або плагін створює розміри зображень, які ви ніколи не будете використовувати.
// update_option( 'thumbnail_size_h', 0 );
// update_option( 'thumbnail_size_w', 0 );
// update_option( 'medium_size_h', 0 );
// update_option( 'medium_size_w', 0 );
// update_option( 'large_size_h', 0 );
// update_option( 'large_size_w', 0 );


////////////////////////



// // відключити створення діблікатів картинок по розмірах
// add_filter('intermediate_image_sizes', 'misha_turn_off_default_sizes');
// function misha_turn_off_default_sizes( $default_image_sizes) {
// 	unset( $default_image_sizes['thumbnail']); // turn off thumbnail size
// 	unset( $default_image_sizes['medium']); // turn off medium size
// 	unset( $default_image_sizes['large']); // turn off large size
// 	return $default_image_sizes;
// }

// // відключити medium_largeрозмір - WordPress 4.4
// add_filter('intermediate_image_sizes', 'misha_deactivate_medium_large');
// function misha_deactivate_medium_large( $default_image_sizes ){
// 	$default_image_sizes['medium_large'];
// 	return $default_image_sizes;
// }

// // додати власні розміри зображень
// add_image_size( $size_name, $width = 0, $height = 0, $crop = false );
// // приклад буде таким
// add_image_size( 'my-image-size-name', 200, 200, array( 'left', 'top' ) );

// // додати свій власний розмір зображення до медіа-завантажувача та Гутенберга
// add_filter('image_size_names_choose', 'misha_new_image_sizes');
// function misha_new_image_sizes($sizes) {
// 	$addsizes = array(
// 		"my-image-size-name" => 'Misha size' // "image size name" => "Label (anything)"
// 	);
// 	$newsizes = array_merge( $sizes, $addsizes );
// 	return $newsizes;
// }


// // Як створити мініатюри певного розміру зображення лише для користувацьких типів публікації
// add_filter( 'intermediate_image_sizes', 'misha_reduce_image_sizes' );
// function misha_reduce_image_sizes( $sizes ){
//   $type = get_post_type($_REQUEST['post_id']); // $_REQUEST['post_id'] post id the image uploads to
// 	foreach( $sizes as $key => $value ){
// 		if( $type == 'page' ) {
// 			if( $value == 'regionfeatured' ){ // turn off 'regionfeatured' for pages
//     				unset( $sizes[$key] );
//     			}
// 		} else if ( $type == 'region' ) {
// 			if( !in_array( $value, array('regionfeatured','misha335') ) ){ // for regions turn off everyting except 'regionfeatured' and 'misha335'
//     				unset( $sizes[$key] );
//     			}
// 		} else {
// 			if( $value != 'thumbnail' ){ // turn off everything except thumbnail
//     				unset( $sizes[$key] );
//     			}
// 		}
// 	}
// 	return $sizes;
// }






// ///////////////////
// //Для скидання розмірів плагіну woocommerce
// add_action('init', 'zod_remove_extra_images');
// function zod_remove_extra_images() {
//     remove_image_size( 'woocommerce_thumbnail' ); // 300.300
//     remove_image_size( 'woocommerce_single' ); // 600.0
//     remove_image_size( 'woocommerce_gallery_thumbnail' ); // 100.100
//
//     /* Alternative to remove ALL sizes except the default ones
//     foreach ( get_intermediate_image_sizes() as $size ) {
//         if ( !in_array( $size, array( 'thumbnail', 'medium', 'medium_large', 'large' ) ) ) {
//             remove_image_size( $size );
//         }
//     }
//     */
// }














//////////////////////////////WooCommerce


////////////////tab

// //Створіть вкладку спеціального продукту (сторінка продукту, внизу де є відгуки і опис продукту)
// add_filter( 'woocommerce_product_tabs', 'misha_custom_tab' );
// function misha_custom_tab( $tabs ) {
// 	$tabs['misha_custom_tab'] = array(
// 		'title'    => 'About Misha',
// 		'callback' => 'misha_custom_tab_content', // the function name, which is on line 15
// 		'priority' => 50,
// 	);
// 	return $tabs;
// }
// function misha_custom_tab_content( $slug, $tab ) {
// 	echo '<h2>' . $tab['title'] . '</h2><p>Tab Content. You can display something in PHP here as well.</p>';
// }

// //відображати вкладку лише для певних продуктів:
// function misha_custom_tab( $tabs ) {
// 	global $product;
// 	if( $product->get_id() == 5 ) {
// 		$tabs['misha_custom_tab'] = array(

// //Або лише для конкретних видів продукції :
// function misha_custom_tab( $tabs ) {
// 	global $product;
// 	if( $product->is_type( 'variable' ) ) {
// 		$tabs['misha_custom_tab'] = array(





// // Змінити заголовки вкладок продукту
// add_filter( 'woocommerce_product_tabs', 'misha_rename_additional_info_tab' );
// function misha_rename_additional_info_tab( $tabs ) {
// 	$tabs['additional_information']['title'] = 'Product size';
// 	return $tabs;
// }

// //Перейменування вкладок продукту 'відгуківи'
// add_filter( 'woocommerce_product_tabs', 'misha_rename_reviews_tab' );
// function misha_rename_reviews_tab( $tabs ) {
// 	$tabs['reviews']['title'] = str_replace( 'Відгуки', 'Відгуки користувачів', $tabs['reviews']['title'] );
// 	return $tabs;
// }

// // або Перейменування вкладок продукту 'відгуківи2'
// add_filter( 'woocommerce_product_tabs', 'misha_rename_reviews_tab' );
// function misha_rename_reviews_tab( $tabs ) {
// 	global $product;
// 	$tabs['reviews']['title'] = 'Відгуки користувачів2 (' . $product->get_review_count() . ') ';
// 	return $tabs;
// }

// // Змініть заголовок "Опис"
// add_filter( 'woocommerce_product_description_heading', 'misha_description_heading' );
// function misha_description_heading( $heading ){
// 	return 'My new heading';
// }

// // Змініть заголовок "Додаткова інформація"
// add_filter( 'woocommerce_product_additional_information_heading', 'misha_additional_info_heading' );
// function misha_additional_info_heading( $heading ){
// 	return 'My new heading';
// }

// // Змініть заголовок "Відгуки"
// add_filter( 'woocommerce_reviews_title', 'misha_reviews_heading', 10, 3 );
// function misha_reviews_heading( $heading, $count, $product ){
// 	return 'What customers think about this product';
// }




// // Додати або змінити вміст вкладок продуктів за замовчуванням
// add_filter( 'the_content', 'misha_add_something_description_tab' );
// function misha_add_something_description_tab( $content ){
// 	if( is_product() ) { // I recommend to always use this condition
// 		$content .= '<p>Your custom text or HTML.</p>';
// 	}
// 	return $content;
// }




//Змінити порядок вкладок продуктів
add_filter( 'woocommerce_product_tabs', 'misha_change_tabs_order' );
function misha_change_tabs_order( $tabs ) {
	$tabs['reviews']['priority'] = 5;
	return $tabs;
}



// Як видалити вкладки продукту
add_filter( 'woocommerce_product_tabs', 'misha_remove_description_tab', 11 );
function misha_remove_description_tab( $tabs ) {
	unset( $tabs['description'] );
	return $tabs;
}

// Видалити вкладку Опис
add_filter( 'woocommerce_product_tabs', 'misha_remove_additional_information' );
function misha_remove_additional_information( $tabs ) {
	unset( $tabs['additional_information'] );
	return $tabs;
}

// Видалити вкладку "Додаткова інформація"
add_filter( 'woocommerce_product_tabs', 'misha_remove_additional_information' );
function misha_remove_additional_information( $tabs ) {
	unset( $tabs['additional_information'] );
	return $tabs;
}

// Вкладка Видалити відгуки
add_filter( 'woocommerce_product_tabs', 'misha_remove_reviews_tab' );
function misha_remove_reviews_tab( $tabs ) {
	unset( $tabs['reviews'] );
	return $tabs;
}
////////////////////////////////////////////





/////////////////кнопку "Оновити кошик"
// // Видаліть кнопку "Оновити кошик" і зробіть це автоматично на зміні кількості
// // style.css
// .woocommerce button[name="update_cart"],
// .woocommerce input[name="update_cart"] {
// 	display: none;
// }
// // main.js
// var timeout;
// jQuery( function( $ ) {
// 	$('.woocommerce').on('change', 'input.qty', function(){
// 		if ( timeout !== undefined ) {
// 			clearTimeout( timeout );
// 		}
// 		timeout = setTimeout(function() {
// 			$("[name='update_cart']").trigger("click");
// 		}, 1000 ); // 1 second delay, half a second (500) seems comfortable too
// 	});
// } );



// //Змініть текст на кнопках "Додати в кошик"
// add_filter( 'woocommerce_loop_add_to_cart_link', 'misha_add_to_cart_text_1' );
// function misha_add_to_cart_text_1( $add_to_cart_html ) {
// 	return str_replace( 'Add to cart', 'Buy now', $add_to_cart_html );
// }
// add_filter( 'woocommerce_product_single_add_to_cart_text', 'misha_add_to_cart_text_2' );
// function misha_add_to_cart_text_2( $product ){
// 	return 'Buy now';
// }


// //Додати текст до і після Додати в кошик
// add_filter( 'woocommerce_loop_add_to_cart_link', 'misha_before_after_btn', 10, 3 );
// function misha_before_after_btn( $add_to_cart_html, $product, $args ){
// 	$before = ''; // Some text or HTML here
// 	$after = ''; // Add some text or HTML here as well
// 	return $before . $add_to_cart_html . $after;
// }





// // Видаліть кнопки «Додати в кошик» та «Детальніше» - На сторінках архіву, супутні товари, перехресні продажі, продажі
// remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart');

// // На сторінках одного продукту
// remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart');

// //  видалити з певних категорій або із розділу, що стосується супутніх товарів
// add_action('wp', 'misha_remove_add_to_cart_product_categories' );
// function misha_remove_add_to_cart_product_categories(){
// 	if( is_product_category( 'uncategorized' ) ) {
// 		remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart');
// 	}
// }




// // Видаліть ціни на товар
// // Сторінка магазину, категорії товарів, теги товарів, сторінка пошуку, супутні товари, продажі, перехресні продажі
// remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );

// // Сторінки одного продукту
// remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );






// // Змінення або видалення значка продажу
// add_filter( 'woocommerce_sale_flash', 'misha_remove_on_sale_badge' );
// function misha_remove_on_sale_badge( $badge_html ){
// 	return '';
// }
// // або змінити HTML за замовчуванням значка
// add_filter( 'woocommerce_sale_flash', 'misha_change_on_sale_badge', 10, 2 );
// function misha_change_on_sale_badge( $badge_html, $post ) {
// 	return '<span class="onsale">Top!</span>';
// }


// /////////Видаліть поля оплати та доставки за замовчуванням
// add_filter( 'woocommerce_default_address_fields', 'misha_remove_fields' );
// function misha_remove_fields( $fields ) {
// 	unset( $fields[ 'address_2' ] );
// 	return $fields;
// }
// // first_name,
// // last_name,
// // company,
// // address_1,
// // address_2,
// // state,
// // city,
// // country,
// // postcode




// //Вимкнути перевірку поля (обовязкове для заповнення)
// add_filter( 'woocommerce_shipping_fields', 'misha_remove_fields' );
// function misha_remove_fields( $fields ) {
//   // $fields[ 'shipping_company' ]['required'] = true;
// 	unset( $fields[ 'shipping_last_name' ]['required'] );
// 	return $fields;
// }




// // змінити поля адрес за замовчуванням
// // label (рядок)
// // placeholder (рядок)
// // class (масив)
// // priority (ціле число)
// add_filter( 'woocommerce_default_address_fields' , 'misha_change_fname_field' );
// function misha_change_fname_field( $fields ) {
// 	$fields['first_name']['label'] = 'Name';
// 	$fields['first_name']['placeholder'] = 'Your mom calls you';
// 	return $fields;
// }





// // Створіть власне поле адреси
// add_filter( 'woocommerce_default_address_fields', 'misha_add_field' );
// function misha_add_field( $fields ) {
// 	$fields['fav_color']   = array(
// 		'label'        => 'Favorite color',
// 		'required'     => true,
// 		'class'        => array( 'form-row-wide', 'my-custom-class' ),
// 		'priority'     => 20,
// 		'placeholder'  => 'Is it black or orange or maybe green?',
// 	);
// 	return $fields;
// }
// // form-row-wide - повна ширина поля,
// // form-row-first - поле з 2 стовпцями, перший стовпець,
// // form-row-last - поле з 2 стовпцями, другий стовпчик;






// // видалити спадне меню сортування продуктів
// remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
// // видалити обидва спадні меню "Сортування за замовчуванням" у темі StoreFront
// remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 10 );
// // Щоб видалити спадне меню, яке знаходиться за списком продуктів
// remove_action( 'woocommerce_after_shop_loop', 'woocommerce_catalog_ordering', 10 );






// // Змінити сортування продуктів за замовчуванням
// add_filter('woocommerce_default_catalog_orderby', 'misha_default_catalog_orderby');
// function misha_default_catalog_orderby( $sort_by ) {
// 	return 'date';
// }
// // menu_order (За замовчуванням) - спочатку за власним замовленням, потім за назвою продукту
// // popularity - за кількістю продажів
// // rating - за середньою оцінкою
// // date - нещодавно додані продукти будуть показані першими
// // price - найдешевші продукти будуть показані першими
// // price-desc - найдорожчий перший
// // rand- у випадковому порядку (прочитайте також, як зберегти пагінацію в цьому випадку)

// // лише для певної категорії
// add_filter('woocommerce_default_catalog_orderby', 'misha_catalog_orderby_for_category');
// function misha_catalog_orderby_for_category( $sort_by ) {
// 	if( !is_product_category('uncategorized') ) {
// 		return $sort_by; // no changes for any page except Uncategorized
// 	}
// 	return 'date';
// }




// // Видаліть параметри сортування за замовчуванням
// add_filter( 'woocommerce_catalog_orderby', 'misha_remove_default_sorting_options' );
// function misha_remove_default_sorting_options( $options ){
// 	unset( $options[ 'popularity' ] );
// 	//unset( $options[ 'menu_order' ] );
// 	//unset( $options[ 'rating' ] );
// 	//unset( $options[ 'date' ] );
// 	//unset( $options[ 'price' ] );
// 	//unset( $options[ 'price-desc' ] );
// 	return $options;
// }

// // Перейменуйте параметри сортування за замовчуванням
// add_filter( 'woocommerce_catalog_orderby', 'misha_rename_default_sorting_options' );
// function misha_rename_default_sorting_options( $options ){
// 	unset( $options[ 'price-desc' ] ); // remove
// 	$options[ 'price' ] = 'Sort by price'; // rename
// 	return $options;
// }







// // зміни заголовків "Вам також можуть сподобатися", "Супутні товари" та "Вас можуть зацікавити"
// add_filter( 'gettext', 'misha_custom_related_products_text', 20, 3 );
// function misha_custom_related_products_text( $translated_text, $text, $domain ) {
// 	if( $translated_text == 'Related products' // for Related products
// 	|| $translated_text == 'You may also like&hellip;' || // for Upsells
// 	|| $translated_text == 'You may be interested in&hellip;' ) { // for Cross-sells
// 		$translated_text = 'Do not miss these products too'; // new title
// 	}
// 	return $translated_text;
// }









// Змінення або видалення значка продажу
