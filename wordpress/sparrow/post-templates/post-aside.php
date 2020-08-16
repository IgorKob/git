<article class="post">

   <div class="entry-header cf">

     <h1><a href="<?php the_permalink(); ?>" title=""><?php the_title(); ?></a></h1>

   </div>

   <div class="post-content">
     <?php the_post(); ?>
     <?php the_content(); ?>
   </div>

   <!-- виводить я тут -->
   <?php do_action('my_action'); ?>

</article> <!-- post end -->
