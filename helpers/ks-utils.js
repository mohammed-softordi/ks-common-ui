export const KsUtils = {
     activatedRoute: function(menuItems, url) {
        // event.target.parentNode.classList.add('active');
         return menuItems.map((item) => this.setActiveRoute(item, url));
     },
    setActiveRoute: function(menuItem, url, parent) {
        menuItem.active = (menuItem.link == url);
        if(menuItem.active && parent){
            parent.active = menuItem.active;
        }
        if (!menuItem.items) {
            return menuItem;
        }
        menuItem.items.map((item) => {
            var parent = menuItem;
            this.setActiveRoute(item, url, parent);
        });
        return menuItem;
    }
}
