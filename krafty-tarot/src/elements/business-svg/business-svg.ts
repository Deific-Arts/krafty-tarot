import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles';
import { logo, corner } from './svgs';

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
      default: return logo;
    }
  }
}

export default BusinessSVG;

