import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles';
import '../business-svg/business-svg';

@customElement('business-tarot')
class BusinessTarot extends LitElement {
  static styles = [styles];

  static properties = {
    title: { type: String },
  };

  title: string = 'The Tarot';

  render() {
    return html`
      <span class="corner top left" part="corner"><business-svg icon="corner"></business-svg></span>
      <span class="corner top right" part="corner"><business-svg icon="corner"></business-svg></span>
      <span class="corner bottom left" part="corner"><business-svg icon="corner"></business-svg></span>
      <span class="corner bottom right" part="corner"><business-svg icon="corner"></business-svg></span>
      <div class="content" part="content">
        <div><slot></slot></div>
        <p class="title" part="title">${this.title}</p>
      </div>
    `;
  }
}

export default BusinessTarot;

