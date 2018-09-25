import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import 'polymer3-granite-bootstrap/granite-bootstrap-min';
import 'corporate-ui/dist/css-modules/corporate-ui';
import 'fontawesome-icon/fontawesome-icon';

/**
 * `ks-search`
 * ks search
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class NavItem extends PolymerElement {


    static get template() {
        return html`
        <custom-style>
            <style is="custom-style" include="granite-bootstrap-min"></style>
        </custom-style>
        <custom-style>
             <style is="corporate-ui" include="corporate-ui"></style>
        </custom-style>
        <style>
            /* shadow DOM styles go here */
            :host {
                display: block;
            }
            .clear-input {
                cursor: pointer;
            }

        </style>
       
            <a href="[[location]]" text="[[text]]"></a>
        `

    }

    static get properties() {
        return {
            location: {
                type: String
            },
            text: {
                type: String
            }
        };
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

}

customElements.define('nav-item', NavItem);
