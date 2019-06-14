import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import * as async from '@polymer/polymer/lib/utils/async.js'
import {DomRepeat as DomRepeat} from '@polymer/polymer/lib/elements/dom-repeat';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';
import 'bootstrap/js/dropdown.js';


import {KsMenuBehavior} from './behaviors/menu-behavior';
import './ks-shared-styles';

/**
 * `ks-secondary-menu-item`
 * ks secondary menu item
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsSecondaryMenuItem extends KsMenuBehavior {
    static get template() {
        return html`
         <style  include="ks-shared-styles">
         .dropdown.open .caret {
             transform: rotate(180deg);
         }
         .navbar-nav .dropdown-menu > li {
             display: block;
         }
         .navbar-nav .dropdown-menu li a {
             padding: 7px 2px;
             text-transform: capitalize;
         }
         .navbar-nav .dropdown a {
             cursor: pointer;
         }
         
         .navbar-nav.navbar-right:last-child {
             margin-right: 0;
         }
      
         @media (max-width: 991px) {
             :host ul {
                 width: 100%;
             }
         }
         
        @media (min-width: 768px) {
            .navbar-nav.navbar-right:last-child {
                margin-right: 0 !important;
            }
        }
    </style>

    <ul class="nav navbar-nav navbar-right" dropdownMenu$="{{dropdown}}">
          <template is="dom-if" if="{{dropdown}}">
              <template is="dom-repeat" items="{{items}}" as="parent">
              <li class="dropdown visible-lg visible-md">
              <a id="administrationDrop" class="dropdown-toggle dropdown-trigger" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">                
                   <span class="piped"></span>
                  {{parent.title}}
                  <span class="caret"></span>
              </a>

                <ul class="dropdown-menu secondary-dropdown" aria-labelledby="administrationDrop">
                   <template is="dom-repeat" items="{{parent.items}}">
                     <li class$="{{conditionalClass('active', item, 'active')}}">
                        <a href="{{conditionalAttr(item.href)}}" target="{{conditionalAttr(item.target)}}" 
                         link$="{{conditionalAttr(item.link)}}" on-click="onDropdownItemActive">
                            {{item.title}}
                        </a>
                    </li>
                  </template>
                </ul>
               </li>
              </template>
          </template>
          <template is="dom-if" if="{{!dropdown}}">
               <template is="dom-repeat" items="{{items}}">
                 <li class$="{{conditionalClass('active', item, 'active')}} visible-lg visible-md">
                    <a href="{{conditionalAttr(item.href)}}" target="{{conditionalAttr(item.target)}}"  
                    link$="{{conditionalAttr(item.link)}}" on-click="onSubMenuClick" >
                        {{item.title}}
                    </a>
                </li>
              </template>
          </template>
        <li id="customContent">
          <slot></slot>
        </li>
      </ul>`;
    }
    constructor() {
        super();
    }
    static get properties() {
        return {
            dropdown: {
                type: Boolean,
                value: false
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        afterNextRender(this, function () {
            $('#administrationDrop').dropdown();
        }.bind(this));
    }

    _attachDom(dom) {
        this.appendChild(dom);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        afterNextRender(this, function () {
            var secondaryDropdownActiveItems = this.querySelector('ks-secondary-menu-item .secondary-dropdown li.active');
            if(secondaryDropdownActiveItems){
                this._setDropdownToActive();
            }
        }.bind(this));
    }
    _dropdown() {
        this.dropdownMenu = (this.dropdown === 'true');
    }
    onDropdownItemActive(event){
        this.onSubMenuClick(event);
        this.toggle(event.target.parentNode);
        this._setDropdownToActive();

    }
    _setDropdownToActive(){
        this.safeCall(this.querySelector('.dropdown-toggle').parentNode.classList, 'add', 'active');
    }

}
customElements.define('ks-secondary-menu-item', KsSecondaryMenuItem);

