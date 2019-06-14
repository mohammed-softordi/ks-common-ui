
import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import {KsAnchorBehavior} from './behaviors/anchor-behavior';
import './ks-shared-styles';

/**
 * `ks-nav-item`
 * ks nav item
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsNavItem extends KsAnchorBehavior(PolymerElement) {
    static get template() {
        return html`
        <style include="ks-shared-styles">
            /* shadow DOM styles go here */
            :host {
                display: inline-block;
            }
           
        </style>

        <!-- shadow DOM for your element -->
        <a class$="ks-nav-item {{class}}" href="{{href}}" target="{{target}}" type="{{type}}" download="{{download}}" rel="{{rel}}" referrerpolicy="{{referrerpolicy}}" ping="{{ping}}" hreflang="{{hreflang}}">
            <template is="dom-if" if="[[iconPosition]]">
                [[title]]
                <slot></slot>
            </template>
            <template is="dom-if" if="[[!iconPosition]]">
                <slot></slot>
                [[title]]
            </template>
        </a>
        `;
    }
    constructor() {
        super();
    }
    static get properties() {
        return {
            iconPosition: {
                type: String,
                value: ''
            }
        };
    }

    ready() {
        super.ready();
    }

}

customElements.define('ks-nav-item', KsNavItem);
