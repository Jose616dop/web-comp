import { html, css, LitElement } from 'lit-element';

export class MyComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--my-component-text-color, #000);
      }
      .bg{
        background-color: red;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>José Sandoval: ${this.title} Nr. ${this.counter}!</h2>
      <button class="bg" @click=${this.__increment}>increment</button>
    `;
  }
}
