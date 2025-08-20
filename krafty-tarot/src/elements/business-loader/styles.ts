import { css } from 'lit';

export default css`
  :host {
    --loader-size: 40px;
    --loader-border: 2px;
    --color: var(--color-secondary);
    --background: var(--color-tertiary);

    display: inline-block;
    visibility: hidden;
    position: relative;
  }

  :host([loading]) {
    visibility: visible;
  }

  .loader {
    display: inline-block;
    position: relative;
    top: calc(var(--loader-size) / 2);

    width: var(--loader-size);
    height: var(--loader-size);
    opacity: 0.9;
    animation: rotate 1.2s linear infinite;
  }

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--loader-size);
    height: var(--loader-size);
    border-radius: 50%;
    background: linear-gradient(160deg, var(--background) 45%, var(--color));
  }

  .inner-circle {
    position: absolute;
    top: 0;
    left: var(--loader-border);
    width: calc(var(--loader-size) - calc(2 * var(--loader-border)));
    height: calc(var(--loader-size) - calc(2 * var(--loader-border)));
    border-radius: 50%;
    background: var(--background);
  }

  @keyframes rotate {
    0% {
      transform: translateY(-50%) rotate(0deg);
    }
    100% {
      transform: translateY(-50%) rotate(360deg);
    }
  }
`
