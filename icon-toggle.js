import {html, PolymerElement} from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@polymer/iron-icons/iron-icons.js';
import './node_modules/@polymer/iron-icon/iron-icon.js';
/**
 * `icon-toggle`
 * icon toggle
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class IconToggle extends PolymerElement {
  static get template() {
    return html`
       <style>
      /* shadow DOM styles go here */
      :host {
        display: inline-block;
      }
      iron-icon {
        fill: rgba(0,0,0,0);
        stroke: currentcolor;
      }
      :host([pressed]) iron-icon {
        fill: currentcolor;
      }
    </style>
      <iron-icon icon="[[toggleIcon]]" on-click="toggle"></iron-icon>
    `;
  }
  static get properties() {
    return {
      pressed: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false
      },
      toggleIcon: {
        type: String
      }
    };
  }

  toggle() {
    this.pressed = !this.pressed;
  }
  constructor() {
    super();
  }
}

customElements.define('icon-toggle', IconToggle);
