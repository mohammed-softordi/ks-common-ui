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
                <style is="corporate-ui" include="corporate-ui"></style>
            </custom-style>
            <custom-style>
                <style is="custom-style" include="granite-bootstrap-min"></style>
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
            
            
    <h4>Findings regarding Corporate-UI toolbox in KS toolbox</h4>
   
    <div class="container">
      <div class="row">
        <div class="col col-lg-6">
        <h3>Corporate UI is based on legacy versions of frameworks used</h3>
          <demo-snippet> 
               <a  href="http://bootstrapdocs.com/v3.2.0/docs/components/#navbar-default">Bootstrap 3.2.0</a>      
               
               <nav class="navbar navbar-default" role="navigation">
                   <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                          <a class="navbar-brand" href="#">Brand</a>
                        </div>

                        <a href="#">Home</a>
                        <a  href="#">Link</a>
                      
                        <nav class="nav navbar-nav navbar-right">
                            <a href="#">Link</a>
                        </nav>
                       
                    </div><!-- /.container-fluid -->
                </nav>  
          </demo-snippet>
          <demo-snippet> 
               <a  href="https://www.polymer-project.org/1.0/docs/about_10">Polymer 1.4.0</a>   
               <p>Not available as npm package. @mohammed-softordi register a nmp package for it to work with KS UI.</p>
               <p>Corprate UI components will conflict with KS UI components</p>    
          </demo-snippet>
          <demo-snippet> 
               <p>Does not provide standalone custome element for each component</p>
               <p>You have to use the whole CUI or nothing</p>
          </demo-snippet>
        </div>
        <div class="col col-lg-6">
        <h3>KS UI is based on up to date versions of frameworks used</h3>
          <demo-snippet>
               <a  href="https://getbootstrap.com/docs/4.0/components/navbar/">Bootstrap 4.0.0</a>
               <p>Corporate UI does not work with this template</p>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#">Brand</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navigation" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                
                
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                    </ul>
                  <ul class="navbar-nav ml-auto">
                     <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>                
                     </li>
                </ul>
                </nav>
          </demo-snippet>
          <demo-snippet> 
               <a  href="https://www.polymer-project.org/3.0/docs/devguide/feature-overview">Polymer 3.x</a> 
               <p>Nmp supported</p>
               <p>Breaking changes from Polymer 1 meaning one has rewrite Corporate UI from the ground</p>
                    
          </demo-snippet>
          <demo-snippet> 
               <p>Provides standalone custome element for each component in the toolbox</p>
          </demo-snippet>
          
        </div>
      </div>
    </div>
            
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
