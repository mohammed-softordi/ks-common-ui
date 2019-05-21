/**
 * Use `KsStateBehavior` to implement component state.
 * It exposes a number of function for `document.body` and
 * they should be bound in your template.
 *
 * @polymerBehavior KsStateBehavior
 */

export const KsStateBehavior = function (superClass) {
    return class extends superClass {
        constructor() {
            super();
        }

        static get properties() {
            return {};
        }

        submenuOpen(open){
            if(open){
                document.body.setAttribute('ks-primary-submenu-open', '');
            }
        }
        submenuClosed(closed){
            if(closed){
                document.body.removeAttribute('ks-primary-submenu-open');
            }
        }
        fullscreen(on){
            if(on){
                document.body.setAttribute('ks-fullscreen-mode', '');
            } else {
                document.body.removeAttribute('ks-fullscreen-mode');
            }
        }
        sticky(on){
            if(on){
                document.body.setAttribute('ks-sticky-mode', '');
            } else {
                document.body.removeAttribute('ks-sticky-mode');
            }
        }
        header(hidden){
            if(hidden){
                document.body.setAttribute('ks-main-header-hidden', '');
            } else {
                document.body.removeAttribute('ks-main-header-hidden');
            }
        }
        unresolved() {
            document.body.setAttribute('unresolved', '');
        }
        topBannerOn(on) {
            if(on){
                document.body.setAttribute('ks-top-banner', '');
            }
        }
        topBannerOff(off) {
            if(off){
                document.body.removeAttribute('ks-top-banner');
            }
        }
    }
};

/** @polymerBehavior */
