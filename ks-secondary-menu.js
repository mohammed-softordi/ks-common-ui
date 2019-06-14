import {html, PolymerElement} from '@polymer/polymer/polymer-element';

/**
 * `ks-secondary-menu`
 * ks secondary menu
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ksSecondaryMenu extends PolymerElement {
    static get template() {
        return html`
        <style>
        :host {
            float: right;
        }
        @media (max-width: 991px) {
            :host {
                display: inline-block;
                width: 100%;
            }
        }
    </style>
      <slot></slot>`;
    }

}
customElements.define('ks-secondary-menu', ksSecondaryMenu);