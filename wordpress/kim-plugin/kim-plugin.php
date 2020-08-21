<?php
/*
Plugin Name: kim-plugin
Plugin URI: http://kim-plugin.com
Description: A very basic test plugin
Version: 1.0
Author: I.K.
Author URI: http://kim.com
License: GPL2
*/

add_action ( 'the_content', 'say_hello');

function say_hello($post_ID) {
  echo 'Hello world. This is my first wordpress plugin';
  return $post_ID;
}


add_action ( 'the_content', 'fb_like');
function fb_like($post_ID)  {
?>
<iframe src="http://www.facebook.com/plugins/like.php?href=
<?php echo urlencode('http://'.$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"]); ?>
layout=standard; show_faces=true; width=450; action=like; colorscheme=light;
height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:80px;"
 allowTransparency="true"></iframe>
<?php
    return $post_ID;
}
?>




///kim









//kim
