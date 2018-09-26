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
                
                :host {
                    display: block;
                }
              
                .navbar {
                    padding: 0;
                }
                .navbar-default {
                    border-bottom: 1px solid #e2e2e2;
                }
                .navbar-default .navbar-header {
                    padding: 2px 0 0px;
                    border-bottom: 0;
                }
                .navbar-default .navbar-header span{
                    text-transform: uppercase;
                }
               .navbar-symbol {
                    width: 48px;
                    height: 46px;
                    float: right;
                    margin-right: 10px;
                    margin-left: 45px;
                    margin-top: 9px;
                  
                }
                .navbar-symbol:before {
                    display: inline-block;
                    content: "";
                    background-image: url(https://static.scania.com/resources/logotype/scania/scania-symbol.png);
                    background-image: url(https://static.scania.com/resources/logotype/scania/scania-symbol.svg);
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: inherit;
                    height: inherit;
                }
                /*.navbar-default .navbar-nav.ml-auto {
                    margin: 15px 0 0 -15px;
                }*/
                                
            </style>
            
            <nav class="navbar navbar-expand-lg navbar-default">
                <div class="navbar-header">
                    <a class="navbar-brand" href="[[siteUrl]]"></a>
                               <span>[[siteName]]</span>
                      
                      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#main-navigation" aria-controls="main-navigation" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      
                </div>
                      
               
                <div class="navbar-nav ml-auto">
                  <slot></slot>
                  <a href="[[siteUrl]]" class="navbar-symbol should-stick"></a>
                </div>
            </nav>
            
            
            <!--nav class="navbar navbar-default">
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
            </nav-->
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
