
import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import 'bootstrap/js/transition.js';
import 'bootstrap/js/dropdown.js';
import 'bootstrap/js/collapse.js'

import {KsStateBehavior} from './behaviors/state-behavior';
import {KsGlobalBehavior} from './behaviors/global-behavior';
import './ks-device-menu';
import './ks-shared-styles';



/**
 * `ks-main-navigation`
 * ks main-navigation
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsMainNavigation extends KsStateBehavior(KsGlobalBehavior(PolymerElement)) {
    static get template() {
        return html`
        <style include="ks-shared-styles">
           
            :host .main-nav {
                background-color: #fff;
            }
            
            :host .subnav-fill {
                position: relative;
                height: 56px;
                background-color: transparent;
            }

            @media (min-width: 992px) {
                :host .navbar-default .container-fluid .navbar-header {
                    padding: 0;
                }
                :host(.sticky-header) .main-nav, 
                :host(.sticky-header[hidden]) .main-nav {
                    position: fixed;
                    top: -1px;
                    left: 0;
                    right: 0;
                    /*z-index: 1000;*/
                    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
                    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
                }
                :host(.sticky-header) .navbar-nav > .subnav .dropdown-menu {
                    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175) !important;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, .175) !important;
                }
                :host(.sticky-header) .navbar-default {
                    z-index: 1010;
                }
                :host(.sticky-header) .sticky-toolbar {
                    z-index: 1011;
                    /*top: 53px!important;*/
                    position: fixed;
                }
            }
            @media (max-width: 991px) {
                :host .navbar-default .navbar-header {
                    width: 100%;
                }
                :host .navbar-default .navbar-header button.navbar-toggle {
                    position: fixed;
                    left: 23px;
                    z-index: 1031;
                    padding-left: 10px;
                    padding-right: 14px;
                    padding-bottom: 20px;
                }
                :host .collapse.in{
                    width: 100%;
                }
                :host .navbar-collapse{
                    margin-left: 0;
                    margin-right: 0;
                }
               
            }
        </style>

        <!-- shadow DOM for your element -->
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button ks-navigation-toggle type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNav"
                            aria-expanded="false" aria-controls="mainNav" disabled="{{hideMenu}}">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <slot name="main-header"></slot>
                </div>
                <div class="navbar-collapse collapse" id="mainNav" >
                    <div class="visible-xs visible-sm">
                        <ks-device-menu hidden="{{hideMenu}}"></ks-device-menu>
                    </div>
                    <div class="main-nav" hidden="{{hideMenu}}" >
                        <slot name="primary-menu"></slot>
                        <slot name="secondary-menu"></slot>
                    </div>
                </div>
            </div>
            <slot name="fullscreen"></slot>
        </nav>
        `;
    }
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        this.isHeaderSticky = false;
        window.addEventListener('scroll', this._onWindowScroll.bind(this));
        //this.scopeSubtree(this, true);
        this.timeoutWindowScroll = undefined;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('scroll', this._onWindowScroll.bind(this));
    }

    _onWindowScroll(event) {
        var mainHeaderBox = this.querySelector('[slot=main-header]').getBoundingClientRect();
        if (mainHeaderBox.top <= -mainHeaderBox.height && !this.isHeaderSticky) {
            this.classList.add('sticky-header');
            this.isHeaderSticky = true;
            this.sticky(true);
        } else if (this.isHeaderSticky && mainHeaderBox.top >= -mainHeaderBox.height) {
            this.classList.remove('sticky-header');
            this.isHeaderSticky = false;
            this.sticky(false);
        }

    }

}

customElements.define('ks-main-navigation', KsMainNavigation);
