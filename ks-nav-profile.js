
import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';
import 'bootstrap/js/dropdown.js';

import {KsGlobalBehavior} from './behaviors/global-behavior';
import './ks-shared-styles';

/**
 * `ks-nav-profile`
 * ks nav profile
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsNavProfile extends KsGlobalBehavior(PolymerElement) {
    static get template() {
        return html`
        <style include="ks-shared-styles">
            .user-account-menu {
                float: right;
                position: relative;
            }
            .user-account-menu > div {
                background-color: #041e42;
                color: #fafafa;
                font-family: 'Scania Sans';
                font-size: 12px;
            }
            .user-account-menu > div a {
               display: flex;
               overflow: hidden;
               padding: 10px;
               text-decoration: none;
            }
            
            .app .navbar-default .navbar-header+.navbar-collapse .navbar-nav .user-account-menu>div a {
                padding: 10px;
            }
            
            .user-account-menu>div .user-name {
                color: #fafafa;
                text-transform: capitalize;
                word-break: initial;
                white-space: nowrap;
                overflow: hidden;
                padding-right: 10px;
                text-align: right;
                font-weight: bold;
            }
            .user-account-menu > div small {
                display: block;
                font-weight: 400;
            }
             .user-account-menu .dropdown-menu > li {
                display: block;
                text-transform: capitalize;
             }
             .user-account-menu .dropdown-menu {
                right: 0;
             }
            .user-account-menu>div .base64-avatar {
                background: #fafafa;
                background-size: 32px;
                vertical-align: top;
            }
            .user-account-menu>div .base64-avatar, .user-account-menu>div .staff-badge {
                width: 32px;
                height: 32px;
                font-size: 16px;
                padding: 6px 0;
                color: #041e42;
                text-align: center;
                border-radius: 50%;
                box-sizing: border-box;
            }
            .base64-avatar {
                display: inline-block;
                background: #ccc;
                color: #fff;
                min-width: 20px;
                min-height: 20px;
                text-align: center;
                font-weight: 700;
                background-size: cover;
                border-radius: 50%;
                text-transform: uppercase;
                overflow: hidden;
            }
            
            @media (min-width: 992px) {
                .sticky-header .user-account-menu,
                .sticky-header[hidden] .user-account-menu {
                    padding-right: 60px;
                }
                
                [ks-fullscreen-mode] .sticky-header .user-account-menu,
                [ks-fullscreen-mode] .sticky-header[hidden] .user-account-menu {
                    padding-right: 0;
                }
            }
            
            @media (max-width: 991px) {
                .user-account-menu {
                    float: none;
                }
                .user-account-menu>div .user-name {
                    flex: 1;
                    text-align: left;
                }
                .user-account-menu .dropdown-menu {
                    position: relative;
                    float: none;
                }
            }
            
                    
        </style>

        <div class="user-account-menu">
                <div class="dropdown">
                    <a id="profileDrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <div class="user-name">
                            <span>firstName Lastname</span>
                            <small>Customer name</small>
                        </div>
                        <div class="base64-avatar">
                            <span>
                                    <span>FL</span>
                            </span>
                        </div>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="profileDrop">
                    <template is="dom-repeat" items="{{items}}">
                         <li >
                              <a href="[[item.href]]" target="{{conditionalAttr(item.target)}}" id="[[index]]">
                                   [[item.title]]
                               </a>
                        </li>
                    </template>
                       
                        
                    </ul>
                </div>

            </div>
        `;
    }
    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        afterNextRender(this, function () {
            $('#profileDrop').dropdown();
        }.bind(this));
    }
    _attachDom(dom) {
        this.appendChild(dom);
    }
    static get properties() {
        return {
            items: {
                type: Array,
                value: []
            }
        };
    }

}

customElements.define('ks-nav-profile', KsNavProfile);
