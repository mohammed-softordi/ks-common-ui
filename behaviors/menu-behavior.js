/**
 * Use `KsMenuBehavior` to implement menu with `<ks-main-navigation>`.
 * It exposes a number of properties from `<ks-primary-menu>` `<ks-secondary-menu>` and
 * they should be bound in your template.
 *
 * @polymerBehavior KsMenuBehavior
 */
import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {KsStateBehavior} from './state-behavior';
import {KsGlobalBehavior} from './global-behavior';

export class KsMenuBehavior extends KsStateBehavior(KsGlobalBehavior(PolymerElement)) {

        constructor() {
            super();
        this.identification = [];
        this.allMenuItems = [];
        }
        static get properties() {
            return {
                items: {
                    type: Array,
                    value: [],
                    observer: '_itemAdded',
                    reflectToAttribute: true
                },
                disableMenu: {
                    type: String,
                    value: 'false',
                    observer: '_onDisableMenu',
                    reflectToAttribute: true
                },
                subMenuClickHandler: {
                    type: Object
                }
            };
        }

        _onDisableMenu(){
            this.hideMenu = (this.disableMenu === '' || this.disableMenu === 'true' );
            if(this.hideMenu){
                this.allMenuItems = [];
            }
            this.submenuClosed(this.hideMenu);
        }

        _itemAdded() {
            if(this._isResolved(this.items)){
                this.mergeArray(this.items, this.allMenuItems);
                this.notifySplices('items',[{
                    object: this.items,
                    index: 0,
                    addedCount: this.items.length,
                    removed: this.items,
                    type: 'splice'
                }]);

                document.dispatchEvent(new CustomEvent('menu-item-added', {detail: {menuItems: $.extend(true, [], this.allMenuItems), bubbles: false, composed: true}}));
            }
        }

        _isResolved(items){
            var resolved = true;
            if(!items || items.length == 0){
                return false;
            }
            items.forEach(function (item) {
                if(!item.title){
                    resolved = false;
                }
            });
            return resolved;
        }
        onSubMenuClick(event){
            if (typeof this.subMenuClickHandler === 'function') {
                this.subMenuClickHandler(event);
            }
        }
        subMenuHash(title) {
            var matcher = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;
            if(title) {
                return title.match(matcher).join('-').toLowerCase();
            }
        }

        resetMenu(subMenuSelector){
            var allOpenSubMenu = document.querySelectorAll(subMenuSelector);
            allOpenSubMenu.forEach(function (element) {
                element.classList.remove('open');
                this.safeCall(element.classList, 'remove', 'open');
            }, this);
        }

        toggleSubmenu(parentNode, activeSubmenu, notify) {
           this.submenuClosed(notify);
            if(activeSubmenu && activeSubmenu.querySelector('li') !== null) {
                activeSubmenu.classList.add('open');
                this.submenuOpen(notify);
            }
        }

        getActiveSubmenu(parentNode) {
            var activeSubMenu = this.querySelector('#' + parentNode.id + '-' +  parentNode.getAttribute('index'));
            return activeSubMenu;
        }

        _initMenu(selector){
            var activeItem = this.querySelector(selector);
            if (activeItem) {
                this.toggle(activeItem.parentNode);
            }
        }

        toggle(parentNode, isPrimary) {
            if(isPrimary){
                document.querySelectorAll('.dropdown-trigger').forEach(function(trigger){
                    this.safeCall(trigger.parentNode.classList, 'remove', 'active');
                }, this)
            }else{
               this.safeCall(document.querySelector('.more-trigger').parentNode.classList, 'remove', 'active');
            }
            var activeSubmenu = this.getActiveSubmenu(parentNode);
            this.resetMenu('.subnav.open');
            this.toggleSubmenu(parentNode, activeSubmenu, true);
        }
};

/** @polymerBehavior */
