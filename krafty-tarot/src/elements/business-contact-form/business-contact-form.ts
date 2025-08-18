import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import KemetField from 'kemet-ui/dist/components/kemet-field/kemet-field';
import BusinessLoader from '../business-loader/business-loader';
import styles from './styles';

interface IData {
  message: string;
  code: number;
};

@customElement('business-contact-form')
class BusinessContactForm extends LitElement {
  static styles = [styles];

  // properties
  static properties = {
    url: { type: String },
    to: { type: String },
    subject: { type: String },
    fromName: { type: String },
    fromEmail: { type: String },
    formMessage: { type: String },
  };

  // @property
  url: string | null = null;
  to: string | null = null;
  subject: string | null = null;
  fromName: string | null = null;
  fromEmail: string | null = null;
  formMessage: string | null = null;

  // @query
  form: HTMLFormElement | null = null;
  fields: NodeListOf<KemetField> | null = null;
  loader: BusinessLoader | null = null;

  firstUpdated() {
    this.form = this.shadowRoot?.querySelector('form') || null;
    this.fields = this.shadowRoot?.querySelectorAll('kemet-field') || null;
    this.loader = this.shadowRoot?.querySelector('business-loader') || null;
  }

  render() {
    return html`
      <form @submit=${(event: any) => this.sendMessage(event)}>
        <fieldset>
          <kemet-field label="Your Name" message="Your name is required.">
            <kemet-input slot="input" name="fullname" required></kemet-input>
          </kemet-field>
          <kemet-field label="Your Email" message="Your email is required.">
            <kemet-input slot="input" name="email" required></kemet-input>
          </kemet-field>
          <kemet-field label="Your Message" message="Please leave a message.">
            <kemet-textarea slot="input" name="message" required></kemet-textarea>
          </kemet-field>
        </fieldset>
        <div class="center">
          <p><business-loader></business-loader></p>
          <kemet-button variant="rounded">Send</kemet-button>
        </div>
        <p>${this.formMessage}</p>
      </form>
    `;
  }

  sendMessage(event: any) {
    event.preventDefault();
    this.loader.loading = true;

    setTimeout(async () => {
      const hasError = Array.from(this.fields).some(field => field.status === 'error');

      if (hasError) {
        this.formMessage = "Please fix the errors on the form!"
      } else {
        const form = new FormData(this.form);

        const bodyData = {
          to: this.to,
          subject: this.subject,
          fullname: form.get('fullname'),
          email: form.get('email'),
          message: form.get('message'),
        };

        const config = {
          method: 'POST',
          body: JSON.stringify(bodyData),
          headers: {
            'Content-Type': 'application/json'
          }
        };

        try {
          const response = await fetch(this.url, config);
          const data = await response.json() as IData;
          this.loader.loading = false;
          this.formMessage = data.message;
        } catch (error) {
          console.error(error);
        }
      }
    }, 1);

  }
}

export default BusinessContactForm;

