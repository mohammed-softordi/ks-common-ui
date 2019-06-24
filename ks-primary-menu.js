import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import {DomRepeat as DomRepeat} from '@polymer/polymer/lib/elements/dom-repeat';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

import {KsMenuBehavior} from './behaviors/menu-behavior';
import './ks-shared-styles';

/**
 * `ks-primary-menu`
 * ks primary menu item
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsPrimaryMenu extends KsMenuBehavior {
    static get template() {
        return html`
         <style include="ks-shared-styles">
               .main-menu:not(.--jsfied) {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                }
                .main-menu .hidden {
                    display: none;
                }
               .navbar-nav.main-menu > li > a {
                    padding-top: 16px;
                    padding-bottom: 16px;
                }
                        
             .more.open .caret {
                    transform: rotate(180deg);
                }
                .more-dropdown {
                    z-index: 11;
                }
                 .more-trigger  {
                    cursor: pointer;
                }
                .navbar-nav > .subnav.dropdown.open {
                    position: static;
                }
               .navbar-nav > .subnav.dropdown.open .dropdown-menu {
                    width: 100%;
                    left: 0;
                    right: 0;
                    top: 100%;
                    background-color: #f5f5f5;
                    min-height: 0;
                    border-bottom: 1px solid #d3d3d3;
                    padding: 0;
                    -webkit-box-shadow: none;
                    box-shadow: none;
                    z-index: 10;
                }
                .navbar-nav.main-menu .more .dropdown-menu li a{
                    text-transform: uppercase;
                    font-weight: 700;
                    color: #909090;
                }
                 .navbar-nav > .subnav.dropdown.open .dropdown-menu li {
                    display: inline-block;
                 }
               .subnav .dropdown-menu .caption {
                    font-family: "Scania Sans Bold";
                    color: #041e42;
                    letter-spacing: .03rem;
                    text-transform: uppercase;
                    margin-left: 15px;
                    margin-right: 15px;
                    padding-right: 30px;
                    display: inline-block;
                    border-right: 1px solid #e2e2e2;
                    /*vertical-align: text-top;*/
                }
        
                .navbar-nav > .subnav .dropdown-menu li a:first-child {
                    padding-right: 0;
                }
                .navbar-nav > .subnav .dropdown-menu li a:hover, 
                .navbar-nav > .subnav .dropdown-menu li  a:focus,
                .navbar-nav > .subnav .dropdown-menu li.active, 
                .navbar-nav > .subnav .dropdown-menu li a:visited {
                    border-bottom: 2px solid #d6001c;
                }
                .navbar-nav > .subnav .dropdown-menu li a:hover, 
                .navbar-nav > .subnav .dropdown-menu li a:focus {
                    color: #041e42;
                }
                .navbar-nav > .subnav .dropdown-menu li a:first-child:before {
                    padding-right: 0;
                }
                .navbar-nav > .subnav .dropdown-menu li a:before, 
                .navbar-nav > .subnav .dropdown-menu li a:after {
                    content: "";
                    padding: 0 10px;
                }
            </style>
        
            <ul class="nav navbar-nav main-menu visible-lg visible-md">       
                 <template is="dom-repeat" items="{{items}}">
                     <li class$="main-menu-item {{conditionalClass('active', item, 'active')}}" id="{{item.id}}"
                      data-title$="{{item.title}}" index$="[[index]]">
                      <a href="{{conditionalAttr(item.href)}}" target="{{conditionalAttr(item.target)}}" 
                      link$="{{conditionalAttr(item.link)}}" on-click="onToggleSubmenu">
                      <span class="pipe"></span>
                      {{item.title}}
                      </a>
                    </li>
                  </template>
                <li class="dropdown more">
                      <a id="primaryMoreDrop" class="dropdown-toggle more-trigger dropdown-trigger" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                          <span class="piped"></span>
                          {{moreText}}
                          <span class="caret"></span>
                      </a>
                        <ul class="dropdown-menu more-dropdown" aria-labelledby="primaryMoreDrop">
                           <template is="dom-repeat" items="{{items}}">
                                 <li class$="{{conditionalClass('active', item, 'active')}}" id="[[item.id]]" 
                                        index$="[[index]]" data-title$="{{item.title}}">
                                      <a href="{{conditionalAttr(item.href)}}" target="{{conditionalAttr(item.target)}}" 
                                      link$="{{conditionalAttr(item.link)}}" on-click="onDropdownItemActive">
                                           [[item.title]]
                                       </a>
                                </li>
                          </template>
                      </ul>
                </li>
            </ul>
            <div class="nav navbar-nav visible-lg visible-md">
                  <template is="dom-repeat" items="{{items}}" as="primary" index-as="primary-index">
                        <div class="dropdown subnav" id="[[primary.id]]-[[primary-index]]">
                            <ul class="dropdown-menu">
                                <template is="dom-if" if="[[hasSubmenu(primary)]]">
                                    <li class="caption">[[primary.title]]</li>
                                </template>
        
                                <template is="dom-repeat" items="{{primary.items}}" as="subItem">
                                     <li class$="{{conditionalClass('active', subItem, 'active')}}">
                                        <a href="{{conditionalAttr(subItem.href)}}" target="{{conditionalAttr(subItem.target)}}" 
                                        on-click="onSubMenuClick" link$="{{conditionalAttr(subItem.link)}}">
                                        [[subItem.title]]
                                        </a>
                                     </li>
                                </template>
                            </ul>
                        </div>
                  </template>
            </div>
        `;
    }
    constructor() {
        super();
    }
    static get properties() {
        return {
            moreText: {
                type: String,
                value:'More'
            }
        };
    }
    _attachDom(dom) {
        this.appendChild(dom);
    }
    connectedCallback() {
        super.connectedCallback();
        this.init = false;
        window.addEventListener('resize', this.doAdapt.bind(this));
        window.addEventListener('scroll', this.doAdapt.bind(this));
        afterNextRender(this, function () {
            $('#primaryMoreDrop').dropdown();
            this.doAdapt();
        }.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this.doAdapt.bind(this));
        window.removeEventListener('scroll', this.doAdapt.bind(this));
    }
    attributeChangedCallback (name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue)
        afterNextRender(this, function () {
            if(!this.init){
                this._initMenu('.main-menu-item.active a');
                this.init = true;
            }
           this.doAdapt();
            var moreActiveItems = this.querySelector('.more-dropdown li.active:not(.hidden)');
            //Set more menu to be active
            if(moreActiveItems){
                this._setMoreMenuToActive();
            }

        }.bind(this));
    }
    onToggleSubmenu(event){
        this.onSubMenuClick(event);
        this.toggle(event.target.parentNode, true);
    }
    onDropdownItemActive(event){
        this.onSubMenuClick(event);
        this.toggle(event.target.parentNode, true);
        this._setMoreMenuToActive();

    }
    _setMoreMenuToActive(){
        this.safeCall(this.querySelector('.more-trigger').parentNode.classList, 'add', 'active');
    }
    doAdapt() {
        if(this.isDevice){
            //We are on a device
            return;
        }
        var moreDropdown = this.querySelector('.more-dropdown'),
            mainMenu = this.querySelector('.main-menu'),
            mainMenuItems = this.querySelectorAll('.main-menu-item'),
            moreItems = moreDropdown.querySelectorAll('li'),
            allItems = mainMenu.querySelectorAll('li'),
            moreLi = this.querySelector('.more'),
            secondaryMenu = this.parentNode.querySelector('ks-secondary-menu');
        if(!secondaryMenu){
            return;
        }
        mainMenu.classList.add('--jsfied');

        // reveal all items for the calculation
        allItems.forEach(function(item){
            item.classList.remove('hidden')
        });
        // hide items that won't fit in the Primary
        var hiddenItems = [],
            deviceWidth = window.innerWidth,
            totalMenuWidth = deviceWidth - secondaryMenu.offsetWidth,
            dynamicWidth = moreLi.offsetWidth + 100;

        mainMenuItems.forEach(function(item, i) {
            if(totalMenuWidth > dynamicWidth + item.offsetWidth) {
                dynamicWidth += item.offsetWidth
            } else {
                item.classList.add('hidden');
                hiddenItems.push(i)
            }
        });
        // toggle the visibility of More button and items in Secondary
        if(!hiddenItems.length) {
            moreLi.classList.add('hidden');
        }
        else {
            moreItems.forEach(function(item, i){
                if(!hiddenItems.includes(i)) {
                    item.classList.add('hidden')
                }
            })
        }
    }
    hasSubmenu(menuItem){
        return (menuItem.items && menuItem.items.length > 0);
    }

}
customElements.define('ks-primary-menu', KsPrimaryMenu);