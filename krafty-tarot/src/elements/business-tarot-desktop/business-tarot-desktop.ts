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
  }

  render() {
    return html`
      <div>
        <tarot-card>
          <span class="corner top left" part="corner"><business-svg icon="corner"></business-svg></span>
          <span class="corner top right" part="corner"><business-svg icon="corner"></business-svg></span>
          <span class="corner bottom left" part="corner"><business-svg icon="corner"></business-svg></span>
          <span class="corner bottom right" part="corner"><business-svg icon="corner"></business-svg></span>
          ${this.current}
        </tarot-card>
        <nav>
          <button @click=${(event) => this.deepLink(event, 'home')}>Home</button>
          <button @click=${(event) => this.deepLink(event, 'bio')}>Bio</button>
          <button @click=${(event) => this.deepLink(event, 'booking')}>Booking</button>
          <button @click=${(event) => this.deepLink(event, 'contact')}>Contact</button>
          <button @click=${(event) => this.deepLink(event, 'social')}>Social</button>
        </nav>
      </div>
    `;
  }

  inViewElements() {
    const businessHome = document.querySelector('business-home') as HTMLElement;
    const businessBio = document.querySelector('business-bio') as HTMLElement;
    const businessBooking = document.querySelector('business-booking') as HTMLElement;
    const businessContact = document.querySelector('business-contact') as HTMLElement;
    const businessSocial = document.querySelector('business-social') as HTMLElement;

    businessHome && isElementInView(businessHome, (inView) => {
      if (inView) {
        this.current = 'home';
      }
    }, { threshold: 1 });

    businessBio && isElementInView(businessBio, (inView) => {
      if (inView) {
        this.current = 'bio';
      }
    }, { threshold: 1 });

    businessBooking && isElementInView(businessBooking, (inView) => {
      if (inView) {
        this.current = 'booking';
      }
    }, { threshold: 1 });

    businessContact && isElementInView(businessContact, (inView) => {
      if (inView) {
        this.current = 'contact';
      }
    }, { threshold: 1 });

    businessSocial && isElementInView(businessSocial, (inView) => {
      if (inView) {
        this.current = 'social';
      }
    }, { threshold: 1 });
  }

  deepLink(event, link: string) {
    event.preventDefault();
    const { search } = window.location;

    if (link) {
      const newUrl = `${link}/${search}`;
      window.history.replaceState(null, '', newUrl);
      const target = document.querySelector(`business-${link}`);
      target && target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export default BusinessTarotDesktop;
