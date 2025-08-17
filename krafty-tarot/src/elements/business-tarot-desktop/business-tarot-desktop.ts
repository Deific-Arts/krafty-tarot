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
    return html`<div>${this.current}</div>`;
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
}

export default BusinessTarotDesktop;
