import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import {DomIf as DomIf} from '@polymer/polymer/lib/elements/dom-if';
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
    .clear-input {
        cursor: pointer;
    }

</style>
<nav class="navbar navbar-default c-corporate-header">
    <a class="navbar-brand" href="[[siteUrl]]">
        <img src="https://static.scania.com/resources/logotype/scania/scania-wordmark.svg" width="30" height="30" class="d-inline-block align-top" alt="Scania">
        | [[siteName]]
    </a>


</nav>
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
