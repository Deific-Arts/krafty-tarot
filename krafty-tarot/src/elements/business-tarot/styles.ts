import { css } from 'lit';

export default css`
  :host {
    display: block;
    border-radius: 1rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    line-height: 1.1;
    width: 100%;
    height: 100%;
    color: var(--color-white);
    position: relative;
    border: 2px solid var(--color-white);
  }

  :host([light]) {
    color: rgb(var(--primitive-color-primary));
    border-color: rgb(var(--primitive-color-primary));
  }

  @media (min-height: 768px) {
    :host {
      line-height: 1.5;
    }
  }

  .corner {
    position: absolute;
    width: 100px;
    height: 100px;
  }

  .top {
    top: 1rem;
  }

  .bottom {
    bottom: 1rem;
  }

  .left {
    left: 1rem;
  }

  .right {
    right: 1rem;
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

  .content {
    display: grid;
    grid-template-rows: 1fr 100px;
    height: 100%;
  }

  .content > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 2rem;
    justify-content: center;
  }

  .title {
    font-size: 1.25rem;
    text-transform: uppercase;
    font-weight: 500;
    border-top: 2px solid var(--color-white);
    padding-top: 0.5rem;
    width: 60vw;
    margin: auto;
  }

  :host([light]) .title {
    border-color: rgb(var(--primitive-color-primary));
  }
`;
