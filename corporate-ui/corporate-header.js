import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import 'polymer3-granite-bootstrap/granite-bootstrap-min';
import 'corporate-ui/dist/css-modules/corporate-ui';
import 'fontawesome-icon/fontawesome-icon';

/**
 * `corporate-header`
 * ks search
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CorporateHeader extends PolymerElement {
    static get template() {
        return html`
            <custom-style>
                <style is="custom-style" include="granite-bootstrap-min"></style>
            </custom-style>
            <custom-style>
                <style is="corporate-ui" include="corporate-ui"></style>
            </custom-style>
            <style>
                /* shadow DOM styles go here */
                :host {
                    display: block;
                }
               
                                
            </style>
            <nav class="navbar navbar-default">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navigation">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    
                     <a class="navbar-brand" href="[[siteUrl]]"></a>
                     [[siteName]]
                   <a href="[[siteUrl]]" class="navbar-symbol"></a>
                    <nav class="nav navbar-nav navbar-right">
                      <slot></slot>
                    </nav>
                  </div>
            </nav>
`

    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            siteUrl: {
                type: String,
                value: '/'
            },
            siteName: {
                type: String
            }
        };
    }


}

customElements.define('corporate-header', CorporateHeader);
