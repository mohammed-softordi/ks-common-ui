import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';
import {KsGlobalBehavior} from './behaviors/global-behavior';
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
class KsMainHeader extends  KsGlobalBehavior(KsStateBehavior(PolymerElement)) {
    static get template() {
        return html`
        <style include="ks-shared-styles">
            :host {
                display: block;
            }
            
            @keyframes logoslide {
                0% {
                    right: -50px;
                }
                1% {
                    right: -50px;
                }
                50% {
                    width: 48px;
                    height: 46px;
                }
                100% {
                    right: 10px;
                    width: 40px;
                    height: 37px
                }
            }
           
            @media (min-width: 992px) {
                :host .navbar-header {
                    padding: 0;
                }
                :host-context(.sticky-header) .navbar-default .navbar-header .navbar-symbol,
                :host-context(.sticky-header[hidden]) .navbar-default .navbar-header .navbar-symbol {
                    width: 40px;
                    height: 37px;
                }
                
                :host-context(.sticky-header) .navbar-default .navbar-header .navbar-symbol:before,
                :host-context(.sticky-header[hidden]) .navbar-default .navbar-header .navbar-symbol:before {
                    position: fixed;
                    top: 7px;
                    right: 10px;
                    animation: logoslide .4s ease-in-out;
                }
            }
            
            @media (max-width: 991px) {
                :host .navbar-header {
                    /*line-height: 0px;*/
                }
                :host .navbar-default .navbar-header, .app .navbar-default .navbar-header {
                    padding: 15px;
                }
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
            siteName: String,
            shortName: String,
            siteUrl: {
                type: String,
                value: '/'
            }

        };
    }
    attributeChangedCallback (name, oldValue, newValue) {
        super.attributeChangedCallback (name, oldValue, newValue);
        this.header(this.disable);
    }
}

customElements.define('ks-main-header', KsMainHeader);
