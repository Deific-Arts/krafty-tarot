import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles';
import { logo, corner, booking, bio, contact, social, event } from './svgs';

@customElement('business-svg')
class BusinessSVG extends LitElement {
  static styles = [styles];

  static properties = {
    icon: { type: String },
    size: { type: String },
  };

  icon: string = 'logo';
  height: string | null = null;

  render() {
    switch(this.icon) {
      case "logo" : return logo;
      case "corner" : return corner;
      case "bio" : return bio;
      case "booking" : return booking;
      case "event" : return event;
      case "contact" : return contact;
      case "social" : return social;
      default: return logo;
    }
  }
}

export default BusinessSVG;

