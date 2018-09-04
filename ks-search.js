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
class KsSearch extends PolymerElement {
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
        <div class="form-group sc-search">
            <div class="input-group">
                <input id="ksSearch" value="{{value::input}}" class="form-control" type="text" on-focus="toggleIcon" on-input="toggleIcon"/>
                <div class="input-icon">
                    <template is="dom-if" if="[[showClearIcon]]">
                        <span on-click="clearInput" class="clear-input">
                            <fontawesome-icon prefix="fas" name="times" fixed-width></fontawesome-icon>
                        </span>
                    </template>
                    <template is="dom-if" if="[[!showClearIcon]]">
                        <fontawesome-icon prefix="fas" name="[[iconClass]]" fixed-width></fontawesome-icon>
                    </template>
                </div>
            </div>
        </div>
        <div style="background-color: gray"> Value received in <span style="font-style: normal">ks-search</span> the custom element : [[value]]</div>
        `;
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

customElements.define('ks-search', KsSearch);
