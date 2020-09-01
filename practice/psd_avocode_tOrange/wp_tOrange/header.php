<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package tOrange
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<!-- <meta charset="UTF-8" /> -->

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Document</title>

	<?php wp_head(); ?>
</head>

<body>
		<header class="header">

			<div class="container">

				<nav class='nav-wrapper'>

					<div class="logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
						<span><?php bloginfo( 'name' ); ?></span> <?php bloginfo('description'); ?></a></div>

			<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'container'       => false,
							'menu_class'      => 'nav_ul',
							// 'menu_id'        => 'primary-menu',
							// 'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
						)
					);
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

				</nav>

				</div>

			</nav>
