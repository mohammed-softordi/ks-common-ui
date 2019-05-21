/**
 * Use `KsGlobalBehavior` to implement anchors with `<ks-nav-item>`.
 * It exposes a number of properties for `<ks-*>` components and
 * they should be bound in your template.
 *
 * @polymerBehavior KsGlobalBehavior
 */
import '../polyfill/polyfills.js';

export const KsGlobalBehavior = function (superClass) {
    return class extends superClass {
        constructor() {
            super();
        }
        static get properties() {
            return {
                //Use this props to show or hide an element
                disable: {
                    type: String,
                    value: '',
                    observer: '_onDisableChange'
                }
            };
        }

        _onDisableChange(){
            this.hidden = this.disable === 'true' || this.hasAttribute('ks-fullscreen-mode');
            if(this.hidden) {
                this.setAttribute('hidden', '');
            } else {
                this.removeAttribute('hidden');
            }
        }
        conditionalClass(className, obj, property) {
            if(!obj){
                return;
            }
            if(Array.isArray(obj)){
                var result = '';
                obj.forEach(function (item) {
                    if(obj.hasOwnProperty(property)){
                        result = obj[property] ? className : '';
                    }
                })
            } else{
                result = obj[property] ? className : '';
            }
            return result;
        }
        conditionalAttr(attrValue) {
            return attrValue ? attrValue : '';
        }
        mergeArray(source, destination) {
            source.map(function(item, index){
                if(!destination.inArray(item, false, false, 'state')){
                    destination.push(item);
                }
            });
        }
        renamePropertiy(obj, oldProperty, newPredicate, replace){
            if(obj.hasOwnProperty(oldProperty)){
                obj[newPredicate] = obj[oldProperty];
                if(replace){
                    delete obj[oldProperty];
                }
            }
            if(Array.isArray(obj)){
                obj.forEach(function (item) {
                    this.renamePropertiy(item, oldProperty, newPredicate, replace)
                }, this)
            }
            var childObj = this.hasObjectProps(obj);
            if(childObj) {
                this.renamePropertiy(childObj, oldProperty, newPredicate, replace);
            }
            return obj;
        }
        hasObjectProps(obj) {
            for (var i in obj) {
                if (typeof obj[i] === 'object') {
                    return obj[i];
                } else {
                    continue;
                }
            }
            return false;
        }
        findById(collection, id) {
            for (var i in collection) {
                if (collection[i].id == id) {
                    return true;
                }
            }
            return false;
        }
        findByAttr(collection, attr) {
            for (var i in collection) {
                if (collection[i]['getAttribute'] && collection[i].getAttribute(attr) !== null) {
                    return true;
                }
            }
            return false;
        }
        safeCall(element, method, argument){
            if(!element){
                return;
            }
            element[method](argument);
        }
    }
};

/** @polymerBehavior */