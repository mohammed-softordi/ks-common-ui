import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import 'polymer3-granite-bootstrap/granite-bootstrap-min';
import './assets/js/font-awesome/font-awesome';
import './assets/js/corporate-ui/corporate-ui-vendors'
import './assets/js/corporate-ui/corporate-ui';

import './ks-shared-styles';

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
        <style include="granite-bootstrap-min"></style>
        <style include="font-awesome"></style>
        <style include="corporate-ui">
            /* shadow DOM styles go here */
            :host {
                display: block;
            }

            .clear-input {
                cursor: pointer;
            }
            
            .form-control {
                padding: 10px 12px;
                height: 42px;
            }

            .form-control:focus {
                background-color: #fff;
            }

            .input-icon {
                z-index: 10;
            }
        </style>
        <div class="form-group sc-search">
            <div class="input-group">
                <input id="ksSearch" value="{{value::input}}" class="form-control" 
                        type="text" on-focus="toggleIcon" on-input="toggleIcon" 
                        placeholder="{{placeholder::input}}"/>
                <div class="input-icon">
                    <template is="dom-if" if="[[showClearIcon]]">
                        <span on-click="clearInput" class="clear-input">
                            <i class="fal fa-times"></i>
                        </span>
                    </template>
                    <template is="dom-if" if="[[!showClearIcon]]">
                        <i class="fal fa-filter"></i>
                    </template>
                </div>
            </div>
        </div>
<!--        <div style="background-color: gray"> Value received in <span style="font-style: normal">ks-search</span> the custom element : [[value]]</div>-->
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
        // let placeholder = 'Scs_Core.Filtrera';
        // if (this.iconClass === 'fa-search') {
        //     placeholder = 'Scs_Core.Sök';
        // }
        // this.$.ksSearch.setAttribute('placeholder', placeholder);
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
