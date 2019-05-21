
import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import './ks-shared-styles';

/**
 * `ks-main-navigation`
 * ks main-navigation
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsMainNavigation extends PolymerElement {
    static get template() {
        return html`
        <style include="ks-shared-styles">
            /* shadow DOM styles go here */
            :host .main-nav {
                background-color: #fff;
            }
            :host .main-nav[hidden] {
                display: none !important;
            }
            :host ::slotted() .dropdown-menu > li {
                display: inline-block;
            }
            :host ::slotted() .navbar-nav .dropdown-menu li ::slotted() a:before {
                content: "";
                padding: 15px;
            }
            :host ::slotted() .navbar-nav.navbar-right {
                transition: padding-right .2s ease-out;
            }
            :host .subnav-fill {
                position: relative;
                height: 56px;
                background-color: transparent;
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
                :host.sticky-header .main-nav, :host[hidden].sticky-header .main-nav {
                    position: fixed;
                    top: -1px;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
                    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
                }
                :host.sticky-header ::slotted() .navbar-nav > .subnav .dropdown-menu {
                    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175) !important;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, .175) !important;
                }
                :host.sticky-header ::slotted() .navbar-default {
                    z-index: 1010;
                }
                :host.sticky-header ::slotted() .sticky-toolbar {
                    z-index: 1011;
                    /*top: 53px!important;*/
                    position: fixed;
                }
                :host.sticky-header ::slotted() .navbar-nav.navbar-right:not([dropdownmenu]), :host[hidden].sticky-header ::slotted() .navbar-nav.navbar-right:not([dropdownmenu]) {
                    padding-right: 60px;
                }
                :host.sticky-header ::slotted() .navbar-header .navbar-symbol, :host[hidden].sticky-header ::slotted() .navbar-header .navbar-symbol {
                    width: 40px;
                    height: 37px;
                }
                :host.sticky-header ::slotted() .navbar-header .navbar-symbol:before, :host[hidden].sticky-header ::slotted() .navbar-header .navbar-symbol:before {
                    position: fixed;
                    top: 7px;
                    right: 10px;
                    animation: logoslide .4s ease-in-out;
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
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNav"
                            aria-expanded="false" aria-controls="mainNav" disabled="{{hideMenu}}">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <slot name="ks-main-header"></slot>
                    <slot name="#ks-top-banner"></slot>
                </div>
                <div class="collapse navbar-collapse" id="mainNav" >
                    <div class="visible-xs visible-sm">
                            <ks-device-menu hidden="{{hideMenu}}"></ks-device-menu>
                    </div>
                    <div class="main-nav" hidden="{{hideMenu}}" >
                        <slot name="primary-menu"></slot>
                        <slot name="secondary-menu"></slot>
                    </div>
                </div>
            </div>
            <slot name="ks-fullscreen"></slot>
        </nav>
        `;
    }
    constructor() {
        super();
    }
    static get properties() {
        return {
        };
    }

    connectedCallback() {
        super.connectedCallback();
        this.mainHeader = this.querySelector('ks-main-header');
        this.isHeaderSticky = false;
        window.addEventListener('scroll', this._onWindowScroll.bind(this));
        this.scopeSubtree(this, true);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('scroll', this._onWindowScroll.bind(this));
    }

    _onWindowScroll(event) {
        var mainHeaderBox = this.mainHeader.getBoundingClientRect();
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
