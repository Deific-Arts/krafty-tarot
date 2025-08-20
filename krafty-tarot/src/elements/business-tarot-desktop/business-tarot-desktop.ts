import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { isElementInView } from '../../utilities/intersection';
import styles from './styles';


@customElement('business-tarot-desktop')
class BusinessTarotDesktop extends LitElement {
  static styles = [styles];

  static properties = {
    current: { type: String, reflect: true },
  };

  current: string = 'home';

  firstUpdated() {
    this.inViewElements();
    this.scrollToCurrent();
  }

  render() {
    return html`
      <div>
        <tarot-card>
          <span class="corner top left" part="corner"><business-svg icon="corner"></business-svg></span>
          <span class="corner top right" part="corner"><business-svg icon="corner"></business-svg></span>
          <span class="corner bottom left" part="corner"><business-svg icon="corner"></business-svg></span>
          <span class="corner bottom right" part="corner"><business-svg icon="corner"></business-svg></span>
          <business-svg icon="${this.current}"></business-svg>
          <span class="title" part="title">${this.getTitle(this.current)}</span>
        </tarot-card>
        <nav>
          <button @click=${(event) => this.deepLink(event, 'bio')}><business-svg icon="bio"></business-svg>&nbsp;Bio</button>
          <button @click=${(event) => this.deepLink(event, 'event')}><business-svg icon="event"></business-svg>&nbsp;Events</button>
          <button @click=${(event) => this.deepLink(event, 'booking')}><business-svg icon="booking"></business-svg>&nbsp;Booking</button>
          <button @click=${(event) => this.deepLink(event, 'contact')}><business-svg icon="contact"></business-svg>&nbsp;Contact</button>
          <button @click=${(event) => this.deepLink(event, 'social')}><business-svg icon="social"></business-svg>&nbsp;Social</button>
        </nav>
      </div>
    `;
  }

  getTitle(current: string) {
    switch(current) {
      case "home" : return "The Love";
      case "bio" : return "The Reader";
      case "event" : return "The Place";
      case "booking" : return "The Calendar";
      case "contact" : return "The Message";
      case "social" : return "The Community";
      default: return "The Love";
    }
  }

  inViewElements() {
    const businessHome = document.querySelector('business-home') as HTMLElement;
    const businessBio = document.querySelector('business-bio') as HTMLElement;
    const businessEvent = document.querySelector('business-event') as HTMLElement;
    const businessBooking = document.querySelector('business-booking') as HTMLElement;
    const businessContact = document.querySelector('business-contact') as HTMLElement;
    const businessSocial = document.querySelector('business-social') as HTMLElement;

    businessHome && isElementInView(businessHome, (inView) => {
      if (inView) {
        this.current = 'home';
        this.style.opacity = "0";
        window.history.replaceState(null, '', '/');
      }
    }, { threshold: 1 });

    businessBio && isElementInView(businessBio, (inView) => {
      if (inView) {
        this.current = 'bio';
        this.style.opacity = "1";
        window.history.replaceState(null, '', '/bio/');
      }
    }, { threshold: 1 });

    businessEvent && isElementInView(businessEvent, (inView) => {
      if (inView) {
        this.current = 'event';
        this.style.opacity = "1";
        window.history.replaceState(null, '', '/event/');
      }
    }, { threshold: 1 });

    businessBooking && isElementInView(businessBooking, (inView) => {
      if (inView) {
        this.current = 'booking';
        this.style.opacity = "1";
        window.history.replaceState(null, '', '/booking/');
      }
    }, { threshold: 1 });

    businessContact && isElementInView(businessContact, (inView) => {
      if (inView) {
        this.current = 'contact';
        this.style.opacity = "1";
        window.history.replaceState(null, '', '/contact/');
      }
    }, { threshold: 1 });

    businessSocial && isElementInView(businessSocial, (inView) => {
      if (inView) {
        this.current = 'social';
        this.style.opacity = "1";
        window.history.replaceState(null, '', '/social/');
      }
    }, { threshold: 1 });
  }

  deepLink(event: Event, link: string) {
    event.preventDefault();
    const { search } = window.location;

    if (link) {
      const newUrl = `${link}/${search}`;
      window.history.replaceState(null, '', newUrl);
      const target = document.querySelector(`business-${link}`);
      target && target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToCurrent() {
    const { pathname } = window.location;
    this.current = pathname.replace(/\//g, '');
    const target = document.querySelector(`business-${this.current}`);
    target && target.scrollIntoView({ behavior: 'smooth' });
  }
}

export default BusinessTarotDesktop;
