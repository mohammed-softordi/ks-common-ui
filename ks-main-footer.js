import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import '@webcomponents/shadycss/entrypoints/apply-shim';
import {KsGlobalBehavior} from './behaviors/global-behavior';
import './ks-shared-styles';

/**
 * `ks-main-footer`
 * ks main footer
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsMainFooter extends KsGlobalBehavior(PolymerElement) {
    static get template() {
        return html`
        <style include="ks-shared-styles">
            :host {
                display: block;
            }
            :host .float-left {
                float: left;
            }
            :host .float-right {
                float: right;
            }
            :host .footer-links {
                margin: 0;
                padding: 4px 0;
            }
            :host footer {
                padding: 20px 30px 0px;
                background-color: #1d1d1b;
                text-align: left;
                color: #fff;
            }
            :host .wordmark {
                float: right;
                width: 178px;
                height: 29px;
                display: inline-block;
                vertical-align: middle;
                background-size: 100%;
                background-repeat: no-repeat;
            }
            :host .footer-copy-text {
                color: #97999b;
                font-size: 10px;
                padding: 8px 0;
                margin: 0;
                letter-spacing: 0.05rem;
                text-align: left;
            }
            :host ::slotted(ks-nav-item) {
                display: inline-block;
                padding: 0 21px 0 0;
                font-size: 1.3rem;
            }
            :host-context(.scania) .wordmark {
                background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark-white.png');
                background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark-white.svg');
            }
            :host-context(.app) .footer-links {
                margin: 0 0 10px 0;
            }
            @media (min-width: 992px) {
                :host-context(body.fullscreen) {
                    display: none !important;
                }
            }
            @media (max-width: 991px) {
                :host footer {
                    padding: 23px 0 0 0;
                    text-align: center;
                }
                :host .wordmark {
                    float: none;
                    display: block;
                    margin: auto;
                    padding-bottom: 22px;
                    width: 113px;
                    height: 40px;
                }
                :host .footer-copy-text {
                    text-align: center;
                }
                :host ::slotted(*) {
                    padding: 0;
                    display: block;
                }
            }
        </style>

        <!-- shadow DOM for your element -->
        <footer class="footer ks-main-footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 col-sm-12 col-xs-12 float-right">
                        <span class="wordmark"></span>
                    </div>
                    <div class="col-md-10 col-sm-12 col-xs-12 float-left">
                        <slot name="c-social-media"></slot>
                        <nav class="footer-links">
                            <slot name="privacy"></slot>
                        </nav>
                        <p class="footer-copy-text">
                            <span>&copy;</span> {{copyright}}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
    constructor() {
        super();
    }
    static get properties() {
        return {
            copyright: {
                type: String,
                value: function() {
                    var date = new Date();
                    return "Copyright Scania " + date.getFullYear() + " All rights reserved."
                }
            }
        };
    }

    ready() {
        super.ready();
        this.classList.add(this.tagName.toLowerCase());
    }
}

customElements.define('ks-main-footer', KsMainFooter);
