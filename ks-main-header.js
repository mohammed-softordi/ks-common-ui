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
            dealerName: {
              type: String,
              observer: '_initDealer'
            },
            dealerLogo: {
              type: String,
              observer: '_initDealer'
            },
            dealerUrl: {
              type: String,
              observer: '_initDealer'
            },
            dealer: {
              type: String
            },
            variation: {
                type: Number
            },
            siteUrl: {
              type: String,
              value: '/'
            },
            fullbleed: {
              type: Boolean,
              value: true
            },
            hasMainNav: {
              type: Boolean,
              value: false,
              observer: '_initHamburger'
            },
            sticky: {
              type: String,
              value: ''
            },
            items: {
              type: Array,
              value: []
            }
        };
    }

    ready() {
        super.ready();

        this.style.display = 'block';
        this._initDealer();
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

    _initDealer() {
        this.dealer = '';
        if ((this.dealerName || this.dealerLogo) && this.dealerUrl) {
          this.dealer = ' is-dealer';
        }
    }

    _initHamburger(state) {
        // Special handling for Firefox 64 if application is using requirejs
        if (state && !window['Collapse']) {
          this.async(function() {
            var button = this.querySelector('button')
            button.onclick = function() {
              document.querySelector('#main-navigation').classList.toggle('in');
              document.body.classList.toggle('navigation-open')
            }
          });
        }
      }
}

customElements.define('ks-main-header', KsMainHeader);
