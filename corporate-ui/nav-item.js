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
        <nav class="nav navbar-nav navbar-right">
            <a href="[[location]]" text="[[text]]"></a>
        </nav>

    }
    constructor() {
        super();
    }
    static get properties() {
        return {
            showClearIcon: {
                type: Boolean,
                value: false
            },
            value: {
                type: String,
                notify: true
            },
            iconClass: {
                type: String
            },
            onClear: {
                type: Object
            },
            reloadOnClear: {
                type: String,
                reflectToAttribute: true
            }
        };
    }

    ready() {
        super.ready();
        let placeholder = 'Scs_Core.Filtrera';
        if (this.iconClass === 'fa-search') {
            placeholder = 'Scs_Core.Sök';
        }
        this.$.ksSearch.setAttribute('placeholder', placeholder);
        this.toggleIcon();
    }

    clearInput() {
        this.$.ksSearch.value = '';
        //this.trigger('input');
        this.set('value', this.$.ksSearch.value);
        if (typeof this.onClear === 'function') {
            this.onClear();
        }
        if (this.reloadOnClear) {
            window.location.reload(true);
        }
        this.toggleIcon();
        // Sample trigger custom event
        this.customEv();
    }

    toggleIcon() {
        this.showClearIcon = this.$.ksSearch.value.length > 0;
    }

    customEv() {
        this.dispatchEvent(new CustomEvent('custom-ev', {detail: { data: 'Trigger event from custom element' }}));
    }

}

customElements.define('nav-item', NavItem);
