import { css } from 'lit';

export default css`
  :host {
    display: none;
  }

  @media (min-width: 1024px) {
    :host {
      width: 100vw;
      display: flex;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      opacity: 0;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition: opacity 0.3s ease-in-out;
    }

    :host([current="bio"]),
    :host([current="event"]),
    :host([current="booking"]),
    :host([current="contact"]),
    :host([current="social"]) {
      opacity: 1;
    }

    nav {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      max-width: 60%;
      justify-content: center;
      margin: auto;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background: none;
      border: none;
      color: var(--color-border);
      cursor: pointer;
      font-size: 1.25rem;
      transition: 0.3s ease-in-out;
      text-transform: uppercase;
      font-family: 'Spectral', serif;
      font-weight: 500;
      letter-spacing: 0;
    }

    button:hover {
      color: var(--color-secondary);
    }

    div {
      display: none;
      position: relative;
      right: calc(calc(100vw - 600px) / 2);
      gap: 2rem;
      flex-direction: column;
    }

    @media (min-width: 1280px) {
      div {
        display: flex;
      }
    }

    @media (min-width: 1440px) {
      div {
        right: 20vw;
      }
    }

    tarot-card {
      position: relative;
      color: var(--color-background);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 450px;
      height: 700px;
      margin: auto;
      border-radius: 1rem;
      background-color: var(--color-border);
    }

    tarot-card::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 86%;
      height: 90%;
      border-radius: 1rem;
      border: 2px solid var(--color-background);
    }

    tarot-card::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 55%;
      height: 50%;
      border-radius: 1rem;
      border-left: 2px solid var(--color-background);
      border-right: 2px solid var(--color-background);
      border-bottom: 2px solid var(--color-background);
    }

    nav business-svg {
      width: 1em;
      height: 1em;
    }

    tarot-card business-svg {
      width: 100px;
      height: 100px;
    }

    .corner {
      position: absolute;
      width: 100px;
      height: 100px;
    }

    .top {
      top: 3rem;
    }

    .bottom {
      bottom: 3rem;
    }

    .left {
      left: 3rem;
    }

    .right {
      right: 3rem;
    }

    .top.right {
      transform: scaleX(-1);
    }

    .bottom.left {
      transform: scaleY(-1);
    }

    .bottom.right {
      transform: scaleX(-1) scaleY(-1);
    }

    .title {
      position: absolute;
      color: var(--color-background);
      width: 60%;
      bottom: 5rem;
      text-transform: uppercase;
      font-weight: 500;
      border-top: 2px solid;
      padding-top: 1rem;
    }
  }
`
