<?php
/*
Plugin Name: my_plugin_filter_content
*/
define('CENZORSHIP_DIR', plugin_dir_path(__FILE__));
function my_plugin_filter_content($the_content) {
  static $badwords = array();
if(empty($badwords)) {
  $badwords = explode(',', file_get_contents(CENZORSHIP_DIR . 'filter.txt'));
}

for ($i = 0; $i < count($badwords); $i++ ) {

  $the_content = preg_replace('/'.$badwords[$i].'/iu', '{погане слово}', $the_content);

}
return $the_content;

}
add_filter('the_content', 'my_plugin_filter_content');


// // filter.txt
// Labore,lorenArbitror,
