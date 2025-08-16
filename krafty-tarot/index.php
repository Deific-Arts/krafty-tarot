<?php get_header(); ?>
<main>
	<section>
    <business-home>
      <business-svg icon="logo"></business-svg>
      <aside>Unlock your path. Insight, guidance, and clarity, one card at a time.</aside>
    </business-home>
	</section>
	<section>
		<business-bio>
      <business-tarot title="The Reader" dark>
        <p>I believe every card tells a story, and every story holds the power to illuminate your path. Led by passion and intuition, Krafty Tarot offers personalized readings that blend deep insight with practical guidance. Whether you’re seeking clarity in love, career, or life’s bigger questions, I provide a safe and supportive space to explore possibilities and uncover hidden truths.
        <p>With a craft honed through years of study and experience, our approach combines intuition, symbolism, and creativity to empower you to make informed decisions and embrace your journey with confidence. At Krafty Tarot, the cards are more than just a tool—they’re a bridge to self-discovery, transformation, and personal growth.</p>
        <p>Discover the magic within your own story—one card at a time.</p>
      </business-tarot>
    </business-bio>
	</section>
	<section>
		<business-booking>
      <business-tarot title="The Calendar" light>
        <div>
          <p>Book a reading with me today and let's explore the magic.</p>
          <business-calendly url="https://calendly.com/contact-deificarts/booking-demo" mode="save" height="50vh"></business-calendly>
        </div>
      </business-tarot>
    </business-booking>
	</section>
	<section>
    <business-tarot title="The Place" dark>
      <h2>Events</h2>
      <p>Check back for upcoming events.</p>
    </business-tarot>
	</section>
	<section>
    <business-contact>
      <business-tarot title="The Message" light>
        <p>Feel free to send your questions into the universe—I am here to help you uncover the answers the cards hold for you.</p>
        <business-contact-form url="<?php echo rest_url("business/v1/forms/contact"); ?>" to="contact@deificarts.com" subject="Contact Form" from-name="Krafty Tarot" from-email="contact@deificarts.com"></business-contact-form>
      </business-tarot>
    </business-contact>
	</section>
  <section>
    <business-social>
      <business-tarot title="The Community" dark>
        <img src="http://localhost:3340/wp-content/uploads/2025/08/avatar.jpg" class="avatar circle" alt="Krafty Tarot">
        <h2>Discover the magic I share online</h2>
      </business-tarot>
    </business-social>
	</section>
</main>
<?php get_footer(); ?>
