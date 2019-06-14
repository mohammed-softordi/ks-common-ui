
import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

import {KsGlobalBehavior} from './behaviors/global-behavior';
import {KsStateBehavior} from './behaviors/state-behavior';
import './ks-shared-styles';

/**
 * `ks-fullscreen`
 * ks fullscreen
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsFullscreen extends KsStateBehavior(KsGlobalBehavior(PolymerElement)) {
    static get template() {
        return html`
        <style include="ks-shared-styles">
        .sticky-toolbar {
            margin-right: 26px;
            position: absolute;
            right: 0;
            z-index: 11;
            top: 124px;
        }
        .sticky-toolbar a {
            float: left;
            display: block;
            width: 30px;
            height: 30px;
            padding: 3px;
            margin: 0;
            z-index: 1000;
            background-color: #041e42;
            text-align: center;
            font-size: 21px;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
            border: 1px solid #ccc;
            border: 1px solid rgba(4, 30, 66, .15);
            border-radius: 4px;
            -webkit-box-shadow: 0 6px 12px rgba(4, 30, 66, .175);
            box-shadow: 0 6px 12px rgba(4, 30, 66, .175);
        }
        .sticky-toolbar a:hover,:host .sticky-toolbar a:active{
            background-color: rgba(0, 0, 0, .175);
            color: #041e42;
            text-decoration: none;
            border: 1px solid rgba(0, 0, 0, .15);
            border-radius: 4px;
            -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
            box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
        }
        body[ks-fullscreen-mode] .sticky-toolbar,
        .sticky-header .sticky-toolbar {
            top: 4px;
        }

        body[ks-fullscreen-mode] ks-primary-menu .main-menu,
        body[ks-fullscreen-mode] ks-secondary-menu-item {
            display: none !important;
        }
        .icon-fullscreen {
            font-family: "Font Awesome 5 Pro";
        }
        .icon-fullscreen:before {
            content: "\\f424";
        }
        ks-fullscreen[fullscreen-active] .icon-fullscreen:before {
            content: "\\f422";
        }
        ks-fullscreen[fullscreen-active] .sticky-toolbar a {
            background-color: #97999b;
        }
        .tooltip .tooltip-inner {
            background-color: #041e42;
            color: #fff;
            border-color: #041e42;
            white-space: nowrap;
        }
        .tooltip.left .tooltip-arrow{
            border-left-color: #041e42
        }
        .tooltip.left {
            left: -125px!important;
        }
       
        ks-fullscreen[fullscreen-active] .tooltip.left {
            left: -157px!important;
        }
        
       
        </style>
        
        <div class="hidden-xs sticky-toolbar" id="stickyToolbar">
            <a on-click="onfullSreenToggled" class="icon-fullscreen" data-toggle="tooltip" id="fullcreenToggle">
            </a>
        </div>
        `;
    }
    constructor() {
        super();
    }
    static get properties() {
        return {
            hideElements: {
                type: Array,
                value: []
            },
            openTitle:{
                type: String,
                value: 'Fullscreen mode'
            },
            closeTitle:{
                type: String,
                value: 'Quite fullscreen mode'
            }
        };
    }

    _attachDom(dom) {
        this.appendChild(dom);
    }

    connectedCallback() {
        super.connectedCallback();
        afterNextRender(this, function () {
            this.toolTipTitle = this.openTitle;
            this.initTooltip();
        }.bind(this));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback();
        afterNextRender(this, function () {
            if(name == 'disable' && !this.hasAttribute('fullscreen-active')){
                this.toolTipTitle = this.openTitle;
            }
        }.bind(this));
    }

    _getTitle() {
        return this.toolTipTitle;
    }

    initTooltip() {
        $(this.$.fullcreenToggle).tooltip({
            trigger: 'hover focus',
            delay: { 'show': 100, 'hide': 500 },
            placement: 'left',
            title: this._getTitle.bind(this)
        });
        $(this.$.fullcreenToggle).tooltip('show');

        // this.scopeSubtree(this, true);

        window.setTimeout(function () {
            $(this.$.fullcreenToggle).tooltip('hide');
        }.bind(this), 6000);
    }

    onfullSreenToggled() {
        if (this.hideElements.length > 0) {
            this.elementsToHide = document.querySelectorAll(this.hideElements.join(', '));
            this.elementsToHide.forEach(function(element){
                var isDisabled = element.hasAttribute('disable'),
                    isFullScreenMode = element.hasAttribute('ks-fullscreen-mode');

                element.toggleAttribute('ks-fullscreen-mode');
                if(isDisabled) {
                    return;
                }
                if(isFullScreenMode){
                    element.removeAttribute('hidden');
                } else {
                    element.setAttribute('hidden', '');
                }
            });
        }

        this.toggleAttribute('fullscreen-active');
        var isFullScreenActive = this.hasAttribute('fullscreen-active');
        this.fullscreen(isFullScreenActive);
        // Todo: Find better:
        // this.toggleMainHeader(isFullScreenActive); // This solve the issue where a deep shadow dom css cannot refer a parent element(Example: <body>).
        if(isFullScreenActive){
            this.toolTipTitle = this.closeTitle;
        } else {
            this.toolTipTitle = this.openTitle;
        }
        //To notify the window that the layout has changed. E.g the sticky-header will be recalculated
        window.dispatchEvent(new CustomEvent('scroll'));
    }

    toggleMainHeader(fullscreenActive){
        var t = document.querySelector('ks-main-navigation ks-main-header');
        if (!t) {
            return;
        }
        var navHeader = t.shadowRoot.querySelector('nav .navbar-header');
        if (!navHeader) {
            return;
        }

        if (fullscreenActive) {
            navHeader.style.display = "none";
        } else {
            navHeader.style.display = "block";
        }
    }
}

customElements.define('ks-fullscreen', KsFullscreen);
