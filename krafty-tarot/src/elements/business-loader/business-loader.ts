import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles';

@customElement('business-loader')
class BusinessLoader extends LitElement {
  static styles = [styles];

  static properties = {
    loading: { type: Boolean, reflect: true },
  };

  loading: boolean = false;

  render() {
    return html`
      <div class="loader">
        <div class="circle"></div>
        <div class="inner-circle"></div>
      </div>
    `;
  }
}

export default BusinessLoader;
