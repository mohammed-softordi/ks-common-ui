import {html, PolymerElement} from './node_modules/@polymer/polymer/polymer-element';
import {DomIf as DomIf} from './node_modules/@polymer/polymer/lib/elements/dom-if';
import './node_modules/polymer3-granite-bootstrap/granite-bootstrap-min';
import './node_modules/fontawesome-icon/fontawesome-icon';

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
        <style>
            /* shadow DOM styles go here */
            :host {
                display: inline-block;
            }

            iron-icon {
                fill: rgba(0, 0, 0, 0);
                stroke: currentcolor;
            }

            :host([pressed]) iron-icon {
                fill: currentcolor;
            }
        </style>
        <div class="form-group sc-search">

            <input id="ksSearch" value="[[value]]" class="form-control" type="text" on-focus="toggleIcon" on-input="toggleIcon"/>
                <span class="input-icon">
                <template is="dom-if" if="[[showClearIcon]]">
                    <span on-click="clearInput">
                        <fontawesome-icon prefix="fas" name="times" fixed-width></fontawesome-icon>
                    </span>
                </template>
                     <template is="dom-if" if="[[!showClearIcon]]">
                        <fontawesome-icon prefix="fas" name="[[iconClass]]" fixed-width></fontawesome-icon>
                     </template>

                </span>
        </div>`;
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
                type: String
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
        //this.$.ksSearch.setAttribute('placeholder', placeholder);

    }

    clearInput() {
        this.$.ksSearch.value = '';
        this.trigger('input');
        if (typeof this.onClear === 'function') {
            this.onClear();
        }
        if (this.reloadOnClear) {
            window.location.reload(true);
        }
    }

    toggleIcon() {
        this.showClearIcon = this.$.ksSearch.value.length > 0;
    }

}

customElements.define('ks-search', KsSearch);
