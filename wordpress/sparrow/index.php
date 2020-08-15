<?php get_header(); ?>


<!-- Journal Section
================================================== -->
<section id="journal">

   <div class="row">
      <div class="twelve columns align-center">
         <h1>kim.</h1>
      </div>



         <div class="blog-entries">

           <?php
           $posts = get_posts( array(
           	'numberposts' => 5,
           	'category'    => 0,
           	'orderby'     => 'date',
           	'order'       => 'DESC',
           	'include'     => array(),
           	'exclude'     => array(),
           	'meta_key'    => '',
           	'meta_value'  =>'',
           	'post_type'   => 'post',
           	'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
           ) );

           foreach( $posts as $post ){
      	setup_postdata($post);
        ?>
          <!-- Entry -->
          <article class="row entry">

             <div class="entry-header">

                <div class="permalink">
                   <a href="<?php the_permalink(); ?>"><i class="fa fa-link"></i></a>
                </div>

                <div class="ten columns entry-title pull-right">
                   <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                </div>

                <div class="two columns post-meta end">
                   <p>
                   <time datetime="2014-01-31" class="post-date" pubdate=""><?php the_time('F jS, Y'); ?></time>
                   <span class="dauthor">By <?php echo get_the_author();?></span>
                   </p>
                </div>

             </div>

             <div class="ten columns offset-2 post-content">
                <p><?php the_excerpt(); ?>
      </p>
             </div>

          </article> <!-- Entry End -->

          <?php
      }

      wp_reset_postdata(); // сброс

           ?>


         </div> <!-- Entries End -->














            <div id="primary" class="eight columns">

              <?php if (have_posts()) { while (have_posts()) { the_post(); ?>
                <article class="post">
<p><?php the_tags(); ?></p>
                   <div class="entry-header cf">

                     <h1><a href="<?php the_permalink(); ?>" title=""><?php the_title(); ?></a></h1>

                      <p class="post-meta">

                        <time class="date" datetime="2014-01-14T11:24"><?php the_time('F jS, Y'); ?></time>

                         <span class="categories">
                            <?php the_tags('', '/'); ?>
                         </span>

                      </p>

                   </div>

                   <div class="post-thumb">
                      <a href="<?php the_permalink(); ?>" title=""><?php the_post_thumbnail('post_thumb'); ?></a>
                   </div>

                   <div class="post-content">

                      <?php the_excerpt(); ?>

                   </div>

                </article> <!-- post end -->


              <?php }      ?>

              <!-- Pagination -->
         <?php the_posts_pagination(); ?>

              <?php } ?>


            </div> <!-- Primary End-->







 </div>




</section> <!-- Journal Section End-->


<?php get_footer(); ?>
