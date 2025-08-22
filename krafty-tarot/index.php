<?php get_header(); ?>
<main>
	<section>
    <business-home>
      <business-svg icon="logo"></business-svg>
      <aside>
        <?php
          $homePage = get_page_by_path('home');
          if ($homePage) {
            $content = apply_filters('the_content', $homePage->post_content);
            echo $content;
          } else {
            echo 'There was an error grabbing the home page.';
          }
        ?>
      </aside>
    </business-home>
	</section>
	<section>
		<business-bio>
      <business-tarot title="The Reader" dark>
        <?php
          $theReaderPage = get_page_by_path('the-reader');
          if ($theReaderPage) {
            $content = apply_filters('the_content', $theReaderPage->post_content);
            echo $content;
          } else {
            echo 'There was an error grabbing the reader.';
          }
        ?>
      </business-tarot>
    </business-bio>
	</section>
	<section>
		<business-booking>
      <business-tarot title="The Calendar" light>
        <div>
          <p>Book a reading with me today and let's explore the magic.</p>
          <business-calendly url="https://calendly.com/carrie-kraftytarot/meet-and-greet" mode="save" height="50vh"></business-calendly>
        </div>
      </business-tarot>
    </business-booking>
	</section>
	<section>
    <business-event>
      <business-tarot title="The Place" dark>
        <?php
          $thePlacePage = get_page_by_path('the-place');
          if ($thePlacePage) {
            $content = apply_filters('the_content', $thePlacePage->post_content);
            echo $content;
          } else {
            echo 'There was an error grabbing the place.';
          }
        ?>
      </business-tarot>
    </business-event>
	</section>
	<section>
    <business-contact>
      <business-tarot title="The Message" light>
        <p>Feel free to send your questions into the universe—I am here to help you uncover the answers the cards hold for you.</p>
        <business-contact-form url="<?php echo rest_url("business/v1/forms/contact"); ?>" to="carrie@kraftytarot.com" subject="Someone wants to reach out to Krafty Tarot" from-name="Krafty Tarot" from-email="carrie@kraftytarot.com"></business-contact-form>
      </business-tarot>
    </business-contact>
	</section>
  <section>
    <business-testimony>
      <business-tarot title="The Love" dark>
        <?php
          $testimonials = get_posts(array(
            'post_type' => 'testimonial',
            'posts_per_page' => -1,
          ));

          if ($testimonials) {
            $testimonialsArray = [];
            foreach ($testimonials as $testimonial) {
              $testimonialsArray[] = str_replace("\n", "", strip_tags(apply_filters('the_content', '&ldquo;'. $testimonial->post_content .'&rdquo;')) . '<br /><br ><cite>&mdash; '. $testimonial->post_title .'</cite>');
            }
            echo '<kemet-rotator effect="flip" rotation-speed="8" messages=\''. json_encode($testimonialsArray) .'\'></kemet-rotator>';
          } else {
            echo '<p>There was an error grabbing the testimonials.</p>';
          }
        ?>
      </business-tarot>
    </business-testimony>
	</section>
  <section>
    <business-social>
      <business-tarot title="The Community" light>
        <?php
          $theCommunityPage = get_page_by_path('the-community');
          if ($theCommunityPage) {
            $content = apply_filters('the_content', $theCommunityPage->post_content);
            echo $content;
          } else {
            echo 'There was an error grabbing the community.';
          }
        ?>
      </business-tarot>
    </business-social>
	</section>
</main>
<business-tarot-desktop></business-tarot-desktop>
<?php get_footer(); ?>
