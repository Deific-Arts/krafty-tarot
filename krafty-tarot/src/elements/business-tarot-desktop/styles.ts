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
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    nav {
      display: flex;
      gap: 1rem;
    }

    button {
      background: none;
      border: none;
      color: var(--color-border);
      cursor: pointer;
      font-size: 1.25rem;
      transition: 0.3s ease-in-out;
      text-transform: uppercase;
      font-family: 'Spectral', serif;
      font-weight: 500;
    }

    button:hover {
      color: var(--color-secondary);
    }

    div {
      display: none;
      position: relative;
      right: 28.5vw;
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
      width: 400px;
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
  }
`
