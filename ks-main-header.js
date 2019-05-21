import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import {KsStateBehavior} from './behaviors/state-behavior';
import './ks-shared-styles';

/**
 * `ks-main-header`
 * ks main header
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsMainHeader extends KsStateBehavior(PolymerElement) {
    static get template() {
        return html`
        <style include="ks-shared-styles">
            :host {
                display: block;
            }
            @media (max-width: 991px) {
                :host .navbar-default {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    /*z-index: 1030;*/
                }
                :host .navbar-default .navbar-header[short-name]:not([short-name='']) {
                    font-size: 0;
                }
                :host .navbar-default .navbar-header .navbar-symbol:after {
                    height: 58px;
                }
                :host .navbar-default .navbar-header[short-name]:not([short-name='']):after {
                    display: inline-block;
                    font-size: 16px;
                    vertical-align: middle;
                    content: attr(short-name);
                }
                :host .navbar-default .navbar-header[short-name]:not([short-name='']) button {
                    font-size: 1.8rem;
                }
                :host .navbar-default .navbar-toggle:after {
                    display: block;
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }
            }
        </style>
        <nav class="navbar navbar-default ks-main-header">
            <div class="navbar-header" short-name$="{{shortName}}">
                <a class="navbar-brand" href="{{siteUrl}}"></a>
                {{siteName}}
                <a href="{{siteUrl}}" class="navbar-symbol"></a>
                <nav class="nav navbar-nav navbar-right">
                    <slot></slot>
                </nav>
            </div>
        </nav>`
            ;
    }
    constructor() {
        super();
    }
    static get properties() {
        return {
            siteName: {
                type: String,
                value: ''
            },
            shortName: {
                type: String,
                value: String
            },

            siteUrl: {
                type: String,
                value: '/'
            }

        };
    }

    ready() {
        super.ready();
        this._setSize();
        window.addEventListener('resize', this._setSize.bind(this));
    }
    _setSize() {
        this.style.padding = '';
        if(window.innerWidth < 992) {
            // TODO - We should use height, but then we need to add flex-grow & flex-shrink
            this.style.paddingTop = this.querySelector('.navbar-default').offsetHeight + 'px';
        }
    }
}

customElements.define('ks-main-header', KsMainHeader);