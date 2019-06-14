
import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

import {KsMenuBehavior} from './behaviors/menu-behavior';
import './assets/js/bootstrap-treeview/bootstrap-treeview';
import './ks-shared-styles';

/**
 * `ks-device-menu`
 * ks device menu
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KsDeviceMenu extends KsMenuBehavior {

    static get template() {
        return html`
        <style include="bootstrap-treeview"></style>
        <style include="ks-shared-styles">
            /* shadow DOM styles go here */
            ks-device-menu {
                display: inline-block;
            }
            ks-device-menu .node-ksDeviceMenu {
                font-family: "Scania Sans";
                background-color: #f5f5f5;
                padding: 10px 5px;
                font-size: 14px;
                font-weight: 400;
                text-transform: capitalize;
            }
            ks-device-menu .node-ksDeviceMenu.top-level {
                width: 80%;
                font-size: 14px;
                font-weight: 700;
                overflow: hidden;
                word-break: normal;
                white-space: nowrap;
                text-transform: uppercase;
                text-overflow: ellipsis;
            }
            ks-device-menu .node-ksDeviceMenu.top-level a {
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
            }
            ks-device-menu .node-ksDeviceMenu a {
                font-size: 14px;
                font-weight: 400;
                text-transform: capitalize;
            }
            ks-device-menu #ksDeviceMenu .list-group {
                padding-left: 15px;
                padding-right: 15px;
                margin-bottom: 10px;
                margin-top: 27px;
            }
            ks-device-menu .node-ksDeviceMenu.node-selected {
                font-family: "Scania Sans ";
                color: #4a8ba4;
                background-color: transparent;
                border-left: 4px solid #d6001c;
            }
            ks-device-menu .node-ksDeviceMenu.node-expanded {
                font-family: "Scania Sans";
                font-weight: bold;
                color: #041e42;
            }
            ks-device-menu #customTemplate {
                padding-left: 0;
                cursor: pointer;
            }
            ks-device-menu #customContent {
                list-style: none;
            }
            ks-device-menu #customTemplate ul {
                padding-left: 15px;
                padding-right: 15px;
                box-shadow: none;
                border: none;
                background-color: #f5f5f5;
            }
            ks-device-menu #customTemplate ul > li {
                display: block;
                padding-left: 10px;
                padding-right: 10px;
            }
            ks-device-menu #customTemplate ul > li > a {
                text-transform: capitalize;
            }
            @media (max-width: 991px) {
                ks-device-menu {
                    /*overflow-y: scroll;*/
                    /*max-height: 90vh;*/
                    /*position: fixed;*/
                    height: auto;
                    width: 100%;
                    background-color: #f5f5f5;
                    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
                }
                ks-device-menu .list-group-item {
                    border: none;
                }
            }
        </style>

        <div id="ksDeviceMenu"></div>
        `;
    }
    constructor() {
        super();
    }

    ready() {
        super.ready();
        this.ksMainNav = document.querySelector('ks-main-navigation').shadowRoot;
        this.collapsedButton = this.ksMainNav.querySelector('#mainNav.navbar-collapse');
        this.allItems = [];
    }

    _attachDom(dom) {
        this.appendChild(dom);
    }

    connectedCallback() {
        super.connectedCallback();
        this.rendered = false;
        document.addEventListener('menu-item-added', this._buildMenu.bind(this));
        document.addEventListener('click', this._onClick.bind(this));
        afterNextRender(this, function () {
            $(this.collapsedButton).collapse({ toggle: false});
        }.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('menu-item-added', this._buildMenu.bind(this));
        document.removeEventListener('click', this._onClick.bind(this));
    }

    _onClick(event) {
        var parentNodeClassList = this.ksMainNav.querySelector('.navbar-collapse').classList,
            isOpened = parentNodeClassList && parentNodeClassList.contains('in'),
            isCustomToggle = this.findByAttr(event.path, 'ks-navigation-toggle');
        if (isOpened && isCustomToggle) {
            // this._toggleCollapse();
            $(this.collapsedButton).collapse('hide');
        } else if ( !isOpened && isCustomToggle) {
            $(this.collapsedButton).collapse('show');
        }
    }

    _toggleCollapse() {
        var parentNodeClassList = this.ksMainNav.querySelector('#mainNav.navbar-collapse').classList;
        this.safeCall(this.ksMainNav.querySelector('button.navbar-toggle').classList, 'add', 'collapsed');
        this.safeCall(parentNodeClassList, 'remove', 'in');
    }

    _buildMenu(event) {
        var ksDeviceMenu = this.ksMainNav.querySelector('#ksDeviceMenu');
        $(ksDeviceMenu).treeview(this._menuOption(event));
        $(ksDeviceMenu).treeview('collapseAll', {silent: true});
    }

    _menuOption(event){
        return {
            showBorder: false,
            color: '#909090',
            hoverTextColor: '#041e42',
            collapseIcon: 'none',
            expandIcon: 'none',
            emptyIcon: 'none',
            enableLinks: true,
            customSelectedStyle: 'custom',
            customExpandedStyle: 'custom',
            indentNode: true,
            data: this._formatedNodes(event),
            decorator: this._decorate.bind(this),
            onNodeSelected: this._toggleCollapse.bind(this)
        };

    }

    _formatedNodes(event) {
        console.log('event.detail.menuItems ', event.detail.menuItems);
        var menuItems = this.renamePropertiy(event.detail.menuItems, 'state', 'stateName', true),
            formatedItems = [];
        menuItems.forEach(function(node){
            node = this.renamePropertiy(node, 'items', 'nodes');
            node = this.renamePropertiy(node, 'title', 'text');
            node.selector = 'top-level';
            // formatedItems.push(node);
            this.allItems.push(node);

        }, this);
        return this.allItems;
    }

    _decorate(node) {
        node.selectable = node.nodes === undefined;
        return node;
    }
}

customElements.define('ks-device-menu', KsDeviceMenu);
