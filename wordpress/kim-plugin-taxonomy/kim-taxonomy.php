<?php
/*
* Plugin Name: Course Taxonomy
* Description: A short example showing how to add a taxonomy called Course.
* Version: 1.0
* Author: developer.wordpress.org
* Author URI: https://codex.wordpress.org/User:Aternus
*/

//
function tutsplus_movie_styles() {
    wp_enqueue_style( 'movies',  plugin_dir_url( __FILE__ ) . '/css/style.css' );
    wp_enqueue_script( 'movies',  plugin_dir_url( __FILE__ ) . '/js/main.js' );

}
add_action( 'wp_enqueue_scripts', 'tutsplus_movie_styles' );


//
include( plugin_dir_path( __FILE__ ) . 'includes/movie-content.php' );

function tutsplus_register_post_type() {

    // movies
    $labels = array(
        'name' => __( 'Movies' , 'tutsplus' ),
        'singular_name' => __( 'Movie' , 'tutsplus' ),
        'add_new' => __( 'New Movie' , 'tutsplus' ),
        'add_new_item' => __( 'Add New Movie' , 'tutsplus' ),
        'edit_item' => __( 'Edit Movie' , 'tutsplus' ),
        'new_item' => __( 'New Movie' , 'tutsplus' ),
        'view_item' => __( 'View Movie' , 'tutsplus' ),
        'search_items' => __( 'Search Movies' , 'tutsplus' ),
        'not_found' =>  __( 'No Movies Found' , 'tutsplus' ),
        'not_found_in_trash' => __( 'No Movies found in Trash' , 'tutsplus' ),
    );
    $args = array(
        'labels' => $labels,
        'has_archive' => true,
        'public' => true,
        'hierarchical' => false,
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'custom-fields',
            'thumbnail',
            'page-attributes'
        ),
        'rewrite'   => array( 'slug' => 'movies' ),
        'show_in_rest' => true

    );
    register_post_type( 'tutsplus_movie', $args );

}
add_action( 'init', 'tutsplus_register_post_type' );
