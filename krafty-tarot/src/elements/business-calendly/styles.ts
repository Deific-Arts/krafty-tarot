import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  :host([mode="edit"]) {
    color: white;
    padding: 0.5rem 1rem;
    background: blue;
    border: 2px dashed green;
  }
`;
