<?php
/*
Template Name: contacts
Template Post Type: post, page, product
*/
 ?>

<?php get_header(); ?>



   <!-- Page Title
   ================================================== -->
   <div id="page-title">

      <div class="row">

         <div class="ten columns centered text-center">
            <h1>Get In Touch<span>.</span></h1>

            <p>Aenean condimentum, lacus sit amet luctus lobortis, dolores et quas molestias excepturi
            enim tellus ultrices elit, amet consequat enim elit noneas sit amet luctu. </p>
         </div>

      </div>

   </div> <!-- Page Title End-->

   <!-- Content
   ================================================== -->
   <div class="content-outer">

      <div id="page-content" class="row page">

         <div id="primary" class="eight columns">

            <section>

              <h1>Hello. Let's talk.</h1>

              <p class="lead">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
              nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. </p>

              <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
              nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
              ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. </p>

              <div id="contact-form">

<?php echo do_shortcode('[contact-form-7 id="96" title="Контактна форма 1"]'); ?>
<hr>
<?php echo do_shortcode('[ninja_form id="3"]'); ?>
<hr>

                  <!-- form -->
                  <form name="contactForm" id="contactForm" method="post"
                  action="<?php echo admin_url('admin-ajax.php?action=send_mail'); ?>">
      					<fieldset>

                        <div class="half">
      						   <label for="contactName">Name <span class="required">*</span></label>
      						   <input name="contactName" type="text" id="contactName" size="35" value="" />
                        </div>

                        <div class="half pull-right">
      						   <label for="contactEmail">Email <span class="required">*</span></label>
      						   <input name="contactEmail" type="text" id="contactEmail" size="35" value="" />
                        </div>

                        <div>
      						   <label for="contactSubject">Subject</label>
      						   <input name="contactSubject" type="text" id="contactSubject" size="35" value="" />
                        </div>

                        <div>
                           <label  for="contactMessage">Message <span class="required">*</span></label>
                           <textarea name="contactMessage"  id="contactMessage" rows="15" cols="50" ></textarea>
                        </div>

                        <div>
                           <button class="submit">Submit</button>
                           <span id="image-loader">
                              <img src="images/loader.gif" alt="" />
                           </span>
                        </div>

      					</fieldset>
      				</form>
              <!-- Form End -->

                  <!-- contact-warning -->
                  <div id="message-warning"></div>
                  <!-- contact-success -->
      				<div id="message-success">
                     <i class="icon-ok"></i>Your message was sent, thank you!<br />
      				</div>

               </div>

            </section> <!-- section end -->

         </div>

         <div id="secondary" class="four columns end">

            <aside id="sidebar">

               <div class="widget widget_search">
                  <h5>Search</h5>
                  <form action="#">

                     <input class="text-search" type="text" onfocus="if (this.value == 'Search here...') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'Search here...'; }" value="Search here...">
                     <input type="submit" class="submit-search" value="">

                  </form>
               </div>

               <div class="widget widget_text">
                  <h5 class="widget-title">Text Widget</h5>
                  <div class="textwidget">Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                  nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
                  a sit amet mauris. Morbi accumsan ipsum velit. </div>
		         </div>

               <div class="widget widget_contact">
					   <h5>Address and Phone</h5>
					   <p class="address">
						   Sparrow Studio<br>
						   1600 Amphitheatre Parkway <br>
						   Mountain View, CA 94043 US<br>
						   <span>(123) 456-7890</span>
					   </p>

					   <h5>Email and Social</h5>
					   <p>
                     E-mail: info{@}sparrow.com<br>
                     Twitter: <a href="#">@sparrow</a><br>
                     Facebook: <a href="#">sparrow FB page</a><br>
                     Google+: <a href="#">sparrow G+ page</a>
                  </p>
				   </div>

               <div class="widget widget_photostream">
                  <h5>Photostream</h5>
                  <ul class="photostream cf">
                     <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"></a></li>
                     <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"></a></li>
                     <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"></a></li>
                     <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"></a></li>
                     <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"></a></li>
                     <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"></a></li>
                     <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"></a></li>
                     <li><a href="#"><img src="images/thumb.jpg" alt="thumbnail"></a></li>
                  </ul>
	            </div>

            </aside>

         </div>

      </div>

   </div> <!-- Content End-->

   <!-- Tweets Section
   ================================================== -->
   <section id="tweets">

      <div class="row">

         <div class="tweeter-icon align-center">
            <i class="fa fa-twitter"></i>
         </div>

         <ul id="twitter" class="align-center">
            <li>
               <span>
               This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
               Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
               <a href="#">http://t.co/CGIrdxIlI3</a>
               </span>
               <b><a href="#">2 Days Ago</a></b>
            </li>
            <!--
            <li>
               <span>
               This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
               Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
               <a href="#">http://t.co/CGIrdxIlI3</a>
               </span>
               <b><a href="#">3 Days Ago</a></b>
            </li>
            -->
         </ul>

         <p class="align-center"><a href="#" class="button">Follow us</a></p>

      </div>

   </section> <!-- Tweet Section End-->

<?php get_footer(); ?>
