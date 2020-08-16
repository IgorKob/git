<?php get_header('2'); ?>

   <!-- Page Title
   ================================================== -->
   <?php if (have_posts()) : while(have_posts()) : the_post(); ?>

<?php the_post(); ?>

   <div id="page-title">

      <div class="row">

         <div class="ten columns centered text-center">
            <h1>single<span>.</span></h1>

            <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi
            enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. </p>
         </div>

      </div>

   </div> <!-- Page Title End-->

   <!-- Content
   ================================================== -->
   <div class="content-outer">

      <div id="page-content" class="row">

         <div id="primary" class="eight columns">
           <?php get_template_part('post-templates/post', get_post_format() ); ?>

         </div> <!-- Primary End-->






         <div id="secondary" class="four columns end">

<?php get_sidebar(); ?>



         </div> <!-- Secondary End-->






      </div>

   </div> <!-- Content End-->

<?php endwhile; ?>
<?php endif; ?>














<?php get_footer(); ?>
