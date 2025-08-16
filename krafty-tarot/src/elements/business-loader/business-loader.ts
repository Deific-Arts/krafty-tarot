import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles';

@customElement('business-loader')
class BusinessLoader extends LitElement {
  static styles = [styles];

  static properties = {
    loading: { type: Boolean, reflect: true },
  };

  loading: boolean = false;

  render() {
    return html`<div class="loader"></div>`;
  }
}

export default BusinessLoader;
