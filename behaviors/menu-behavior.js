/**
 * Use `KsMenuBehavior` to implement menu with `<ks-main-navigation>`.
 * It exposes a number of properties from `<ks-primary-menu>` `<ks-secondary-menu>` and
 * they should be bound in your template.
 *
 * @polymerBehavior KsMenuBehavior
 */

export const KsMenuBehavior = function (superClass) {
    return class extends superClass {
        constructor() {
            super();
            window.CUIBehaviors = window.CUIBehaviors || {};
        }
        static get properties() {
            return {
                items: {
                    type: Array,
                    value: function () {
                        return [];
                    },
                    observer: '_itemAdded'
                },
                disableMenu: {
                    type: String,
                    value: 'false',
                    observer: '_onDisableMenu'
                }
            };
        }
        identification = [];
        allMenuItems = [];

        _onDisableMenu(){
            this.hideMenu = (this.disableMenu === '' || this.disableMenu === 'true' );
            if(this.hideMenu){
                this.allMenuItems = [];
            }
            CUIBehaviors.StateBehavior.submenuClosed(this.hideMenu);
        }

        _itemAdded() {
            if(this._isResolved(this.items)){
                CUIBehaviors.GlobalBehavior.mergeArray(this.items, this.allMenuItems);
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
                CUIBehaviors.GlobalBehavior.safeCall(element.classList, 'remove', 'open');
            });
        }

        toggleSubmenu(parentNode, activeSubmenu, notify) {
            CUIBehaviors.StateBehavior.submenuClosed(notify);
            if(activeSubmenu && activeSubmenu.querySelector('li') !== null) {
                activeSubmenu.classList.add('open');
                CUIBehaviors.StateBehavior.submenuOpen(notify);
            }
        }

        getActiveSubmenu(title, id) {
            var subMenuHash = this.subMenuHash(title) + '-' + id,
                activeSubMenu = this.querySelector('#' + subMenuHash);
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
                    CUIBehaviors.GlobalBehavior.safeCall(trigger.parentNode.classList, 'remove', 'active');
                })
            }else{
                CUIBehaviors.GlobalBehavior.safeCall(document.querySelector('.more-trigger').parentNode.classList, 'remove', 'active');
            }
            var activeSubmenu = this.getActiveSubmenu(parentNode.title, parentNode.id);
            this.resetMenu('.subnav.open');
            this.toggleSubmenu(parentNode, activeSubmenu, true);
        }
    }
};

/** @polymerBehavior */
