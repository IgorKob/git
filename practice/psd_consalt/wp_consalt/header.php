<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package consalt
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body>
	<div class="container0">


<?php wp_body_open(); ?>

	<header class='header'>
		<div class="container">
			<a class="logo" href='<?php echo esc_url( home_url( '/' ) ); ?>'>
				<!-- <img src="logo.png" alt="logo"> -->
				<?php
					$image = get_field('logo_icon');
					if( !empty( $image ) ): ?>
						<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
				<?php endif; ?>

			</a>

			<nav class="nav">

					<?php wp_nav_menu( [
						'theme_location'  => 'menu1',
						'menu'            => 'menu1',
						'container'       => false,
						'container_class' => false,
						'container_id'    => false,
						'menu_class'      => 'menu',
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




					<span class="mob_nav_icon" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
					<div id="myNav" class="overlay">
					  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
					  <div class="overlay-content">
							<?php
									wp_nav_menu(
										array(
											'theme_location' => 'menu-1',
											'container'       => false,
											'menu_class'      => false,
											'menu_id'        => false,
											// 'items_wrap'      => false,
										)
									);
									?>
					  </div>
					</div>
<!--  -->










		</nav>



		</div>
	</header>
