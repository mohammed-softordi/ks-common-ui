try {
    $_documentContainer.setAttribute('style', 'display: none;');
    appenTemplate($_documentContainer);
} catch(err) {
    const $_documentContainer = document.createElement('template');
    $_documentContainer.setAttribute('style', 'display: none;');
    appenTemplate($_documentContainer);
}
function appenTemplate($_documentContainer) {
  // $_documentContainer.innerHTML = `<dom-module id="corporate-ui"><template><style>
  // /* DO NOT REMOVE "corporate-ui.css", it will be replace by gulp */
  // {%corporate-ui.css%}
  // </style></template></dom-module>`;

  $_documentContainer.innerHTML = `
  /* DO NOT REMOVE "style-module", it will be replace by gulp */
  <dom-module id="corporate-ui-fonts"><template><style>
/* 
The Scania Logotype Stylesheet
The Scania symbol and wordmark should be used in accordance to the guidelines specified in the Brand Manual. 
We do not want our logotype to be downloaded to local servers as updates to the logotype is made to these 
centraly stored versions.

How to use
Include this stylesheet in you application by copying this line of code to your HEAD section:

<link rel="stylesheet" type="text/css" href="https://static.scania.com/resources/logotype/scania/logotype-stylesheet/scania-logotype.css">

Use these HTML tags to show the symbol and wordmark.
<span class="scania wordmark"></span>
<span class="scania symbol"></span>
<span class="scania symbol neg"></span>  For a white wordmark
<span class="scania logotype-vertical-lockup"></span>
*/

.scania .symbol, .scania.symbol {
    display: inline-block;
    vertical-align: middle;
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-symbol.png');
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-symbol.svg'); 
    background-repeat: no-repeat;
    background-size: 48px 46px;
    width: 48px;
    height: 46px;   
    float: left;
    margin-bottom: 15px 
}

.scania .wordmark, .scania.wordmark {
    display: inline-block;
    vertical-align: middle;
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark.png');
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark.svg'); 
    background-repeat: no-repeat;
    background-size: 169px 28px;
    width: 169px;
    height: 28px;
}

.scania .wordmark.neg, .scania.wordmark.neg {
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark-white.png');
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark-white.svg');  
}

/* Lockups of the symbol and wordmark should be used as an exeption only */

.scania .logotype-vertical-lockup, .scania.logotype-vertical-lockup {
    display: inline-block;
    vertical-align: middle;
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-logotype-vertical-lock-up.png');
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-logotype-vertical-lock-up.svg'); 
    background-repeat: no-repeat;
    background-size: 250px 141px;
    width: 250px;
    height: 141px;    
}

@font-face {
  font-family: 'Scania Sans';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Regular.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Regular.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Regular.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Regular.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans';
  font-weight: bold;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Bold';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans';
  font-style: italic;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Italic';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Regular.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Regular.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Regular.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Regular.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline';
  font-weight: bold;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline Bold';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Regular.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Regular.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Regular.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Regular.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-weight: bold;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.woff2") format("woff2"),
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.woff") format("woff"),
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed Bold';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-style: italic;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed Italic';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Regular.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Regular.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Regular.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Regular.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed Bold';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-style: italic;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed Italic';
  font-weight: normal;
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.eot");
  src: url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.woff2") format("woff2"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.woff") format("woff"), 
  url("https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.ttf") format("truetype");
}

/*!
 *  Importing Scanic Corporate Icons including Font Awesome version 3.2.1
 */

/* FONT PATH
 * -------------------------- */

/*!
 * Additional Classes not rendered by IcoMoon where Scania Corporate Icons are created, maintained and hosted.
 /* FONT AWESOME CORE
 * -------------------------- */

[class^="icon-"],
[class*=" icon-"] {
   font-weight: normal;
  font-style: normal;
  text-decoration: inherit;
  -webkit-font-smoothing: antialiased;
  *margin-right: .3em;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  text-decoration: inherit;
  display: inline-block;
  speak: none;
}

/* makes the font 33% larger relative to the icon container */

.icon-large:before {
  vertical-align: -10%;
  font-size: 1.3333333333333333em;
}

/* makes sure icons active on rollover in links */

a [class^="icon-"],
a [class*=" icon-"] {
  display: inline;
}

/* increased font size for icon-large */

[class^="icon-"].icon-fixed-width,
[class*=" icon-"].icon-fixed-width {
  display: inline-block;
  width: 1.1428571428571428em;
  text-align: right;
  padding-right: 0.2857142857142857em;
}

[class^="icon-"].icon-fixed-width.icon-large,
[class*=" icon-"].icon-fixed-width.icon-large {
  width: 1.4285714285714286em;
}

.icons-ul {
  margin-left: 2.142857142857143em;
  list-style-type: none;
}

.icons-ul > li {
  position: relative;
}

.icons-ul .icon-li {
  position: absolute;
  left: -2.142857142857143em;
  width: 2.142857142857143em;
  text-align: center;
  line-height: inherit;
}

[class^="icon-"].hide,
[class*=" icon-"].hide {
  display: none;
}

.icon-muted {
  color: #eeeeee;
}

.icon-light {
  color: #ffffff;
}

.icon-dark {
  color: #333333;
}

.icon-border {
  border: solid 1px #eeeeee;
  padding: .2em .25em .15em;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.icon-2x {
  font-size: 2em;
}

.icon-2x.icon-border {
  border-width: 2px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.icon-3x {
  font-size: 3em;
}

.icon-3x.icon-border {
  border-width: 3px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.icon-4x {
  font-size: 4em;
}

.icon-4x.icon-border {
  border-width: 4px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}

.icon-5x {
  font-size: 5em;
}

.icon-5x.icon-border {
  border-width: 5px;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;
}

.icon-6x {
  font-size: 6em;
}

.icon-6x.icon-border {
  border-width: 6px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
}

.icon-7x {
  font-size: 7em;
}

.icon-7x.icon-border {
  border-width: 7px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.icon-8x {
  font-size: 8em;
}

.icon-8x.icon-border {
  border-width: 8px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

.icon-9x {
  font-size: 9em;
}

.icon-9x.icon-border {
  border-width: 9px;
  -webkit-border-radius: 11px;
  -moz-border-radius: 11px;
  border-radius: 11px;
}

.icon-extreme {
font-size: 50em !important;
}

.pull-right {
  float: right;
}

.pull-left {
  float: left;
}

[class^="icon-"].pull-left,
[class*=" icon-"].pull-left {
  margin-right: .3em;
}

[class^="icon-"].pull-right,
[class*=" icon-"].pull-right {
  margin-left: .3em;
}

/* BOOTSTRAP SPECIFIC CLASSES
 * -------------------------- */

/* Bootstrap 2.0 sprites.less reset */

[class^="icon-"],
[class*=" icon-"] {
  display: inline;
  width: auto;
  height: auto;
  line-height: normal;
  vertical-align: baseline;
  background-image: none;
  background-position: 0% 0%;
  background-repeat: repeat;
  margin-top: 0;
}

/* more sprites.less reset */

.icon-white,
.nav-pills > .active > a > [class^="icon-"],
.nav-pills > .active > a > [class*=" icon-"],
.nav-list > .active > a > [class^="icon-"],
.nav-list > .active > a > [class*=" icon-"],
.navbar-inverse .nav > .active > a > [class^="icon-"],
.navbar-inverse .nav > .active > a > [class*=" icon-"],
.dropdown-menu > li > a:hover > [class^="icon-"],
.dropdown-menu > li > a:hover > [class*=" icon-"],
.dropdown-menu > .active > a > [class^="icon-"],
.dropdown-menu > .active > a > [class*=" icon-"],
.dropdown-submenu:hover > a > [class^="icon-"],
.dropdown-submenu:hover > a > [class*=" icon-"] {
  background-image: none;
}

/* keeps Bootstrap styles with and without icons the same */

.btn [class^="icon-"].icon-large,
.nav [class^="icon-"].icon-large,
.btn [class*=" icon-"].icon-large,
.nav [class*=" icon-"].icon-large {
  line-height: .9em;
}

.btn [class^="icon-"].icon-spin,
.nav [class^="icon-"].icon-spin,
.btn [class*=" icon-"].icon-spin,
.nav [class*=" icon-"].icon-spin {
  display: inline-block;
}

.nav-tabs [class^="icon-"],
.nav-pills [class^="icon-"],
.nav-tabs [class*=" icon-"],
.nav-pills [class*=" icon-"],
.nav-tabs [class^="icon-"].icon-large,
.nav-pills [class^="icon-"].icon-large,
.nav-tabs [class*=" icon-"].icon-large,
.nav-pills [class*=" icon-"].icon-large {
  line-height: .9em;
}

.btn [class^="icon-"].pull-left.icon-2x,
.btn [class*=" icon-"].pull-left.icon-2x,
.btn [class^="icon-"].pull-right.icon-2x,
.btn [class*=" icon-"].pull-right.icon-2x {
  margin-top: .18em;
}

.btn [class^="icon-"].icon-spin.icon-large,
.btn [class*=" icon-"].icon-spin.icon-large {
  line-height: .8em;
}

.btn.btn-small [class^="icon-"].pull-left.icon-2x,
.btn.btn-small [class*=" icon-"].pull-left.icon-2x,
.btn.btn-small [class^="icon-"].pull-right.icon-2x,
.btn.btn-small [class*=" icon-"].pull-right.icon-2x {
  margin-top: .25em;
}

.btn.btn-large [class^="icon-"],
.btn.btn-large [class*=" icon-"] {
  margin-top: 0;
}

.btn.btn-large [class^="icon-"].pull-left.icon-2x,
.btn.btn-large [class*=" icon-"].pull-left.icon-2x,
.btn.btn-large [class^="icon-"].pull-right.icon-2x,
.btn.btn-large [class*=" icon-"].pull-right.icon-2x {
  margin-top: .05em;
}

.btn.btn-large [class^="icon-"].pull-left.icon-2x,
.btn.btn-large [class*=" icon-"].pull-left.icon-2x {
  margin-right: .2em;
}

.btn.btn-large [class^="icon-"].pull-right.icon-2x,
.btn.btn-large [class*=" icon-"].pull-right.icon-2x {
  margin-left: .2em;
}

/* Fixes alignment in nav lists */

.nav-list [class^="icon-"],
.nav-list [class*=" icon-"] {
  line-height: inherit;
}

/* EXTRAS
 * -------------------------- */

/* Stacked and layered icon */

.icon-stack {
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  vertical-align: -35%;
}

.icon-stack [class^="icon-"],
.icon-stack [class*=" icon-"] {
  display: block;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1em;
  line-height: inherit;
  *line-height: 2em;
}

.icon-stack .icon-stack-base {
  font-size: 2em;
  *line-height: 1em;
}

/* Animated rotating icon */

.icon-spin {
  display: inline-block;
  -moz-animation: spin 2s infinite linear;
  -o-animation: spin 2s infinite linear;
  -webkit-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;
}

/* Prevent stack and spinners from being taken inline when inside a link */

a .icon-stack,
a .icon-spin {
  display: inline-block;
  text-decoration: none;
}

@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(359deg);
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
  }
}

@-o-keyframes spin {
  0% {
    -o-transform: rotate(0deg);
  }
  100% {
    -o-transform: rotate(359deg);
  }
}

@-ms-keyframes spin {
  0% {
    -ms-transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(359deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

/* Icon rotations and mirroring */

.icon-rotate-90:before {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
}

.icon-rotate-180:before {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
}

.icon-rotate-270:before {
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}

.icon-flip-horizontal:before {
  -webkit-transform: scale(-1, 1);
  -moz-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  transform: scale(-1, 1);
}

.icon-flip-vertical:before {
  -webkit-transform: scale(1, -1);
  -moz-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  transform: scale(1, -1);
}

/* ensure rotation occurs inside anchor tags */

a .icon-rotate-90:before,
a .icon-rotate-180:before,
a .icon-rotate-270:before,
a .icon-flip-horizontal:before,
a .icon-flip-vertical:before {
  display: inline-block;
}

i[class*="scania-icon-"],
span[class*="scania-icon-"] {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-size: 54px;
  width: 54px;
  height: 54px;
  margin: 5px;
}

i.xs,
span.xs,
i.sm,
span.sm,
i.md,
span.md,
i.lg,
span.lg,
i.xl,
span.xl,
i.xxl,
span.xxl {
  display: inline-block;
}

i.xs,
span.xs {
  background-size: 16px;
  width: 16px;
  height: 16px;
  margin: 2px;
}

i.sm,
span.sm {
  background-size: 28px;
  width: 28px;
  height: 28px;
  margin: 2px;
}

i.md,
span.md {
  background-size: 54px;
  width: 54px;
  height: 54px;
  margin: 5px;
}

i.lg,
span.lg {
  background-size: 90px;
  width: 90px;
  height: 90px;
  margin: 8px;
}

i.xl,
span.xl {
  background-size: 140px 140px;
  width: 140px;
  height: 140px;
  padding: 10px;
}

i.xxl,
span.xxl {
  background-size: 240px;
  width: 240px;
  height: 240px;
  padding: 10px;
}

i.scania-icon-find-a-dealer,
span.scania-icon-find-a-dealer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/01_Find_a_dealer-54-72px.svg');
}

i.scania-icon-search,
span.scania-icon-search {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/02_Icon_search-54-72px.svg');
}

i.scania-icon-close-input,
span.scania-icon-close-input {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/03_Search-desktop_in-field-delete-54-72px.svg');
}

i.scania-icon-search-mobile,
span.scania-icon-search-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/04_Search-mobile_in-field-delete-54-72px.svg');
}

i.scania-icon-menu-mobile,
span.scania-icon-menu-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/05_Menu_mobile-54-72px.svg');
}

i.scania-icon-close-mobile-menu,
span.scania-icon-close-mobile-menu {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/06_Menu_close_button_Mobile-54-72px.svg');
}

i.scania-icon-menu-back-button,
span.scania-icon-menu-back-button {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/07_Menu_back_button-54-72px.svg');
}

i.scania-icon-my-scania-mobile,
span.scania-icon-my-scania-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/08_My_scania_Mobile-54-72px.svg');
}

i.scania-icon-share-social-media,
span.scania-icon-share-social-media {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/09_Share_page_tool_share_icon-54-72px.svg');
}

i.scania-icon-share-page-tool,
span.scania-icon-share-page-tool {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/10_Share_page_tool-54-72px.svg');
}

i.scania-icon-video-play,
span.scania-icon-video-play {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/11_Video_play_icon-54-72px.svg');
}

i.scania-icon-find-a-dealer,
span.scania-icon-find-a-dealer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/12_Find_a_dealer_CTA-54-72px.svg');
}

i.scania-icon-open-accordian-plus,
span.scania-icon-open-accordian-plus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/13_Open_accordian_plus_Mobile-54-72px.svg');
}

i.scania-icon-close-accordian-minus,
span.scania-icon-close-accordian-minus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/14_Close_accordian_minus_icon_Mobile-54-72px.svg');
}

i.scania-icon-tick,
span.scania-icon-tick {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/15_Tick_icon-54-72px.svg');
}

i.scania-icon-filter-dropdown,
span.scania-icon-filter-dropdown {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/16_Filter_drop_down_icon-54-72px.svg');
}

i.scania-icon-dealer-locator-detect,
span.scania-icon-dealer-locator-detect {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/17_Dealer_locator_Detect_location_54-72px.svg');
}

i.scania-icon-dealer-locator-map-pin,
span.scania-icon-dealer-locator-map-pin {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/18_Dealer_locator_map_pin_filled-54-72px.svg');
}

i.scania-icon-dealer-locator-current,
span.scania-icon-dealer-locator-current {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/19_Dealer_locator_Current_location_pin-54-72px.svg');
}

i.scania-icon-job-posting-location,
span.scania-icon-job-posting-location {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/20_Job_posting_info_Location_generic-54-72px.svg');
}

i.scania-icon-job-posting-workarea,
span.scania-icon-job-posting-workarea {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/21_Job_posting_info_Location_generic-54-72px.svg');
}

i.scania-icon-job-posting-closing-date,
span.scania-icon-job-posting-closing-date {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/22_Closing_date-54-72px.svg');
}

i.scania-icon-email,
span.scania-icon-email {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/23_E-mail_US-54-72px.svg');
}

i.scania-icon-dealer-website,
span.scania-icon-dealer-website {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/24_View_dealer_website-54-72px.svg');
}

i.scania-icon-dealer-direction,
span.scania-icon-dealer-direction {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/25_Dealer_key_actions_Get_directions_generic_54-72px.svg');
}

i.scania-icon-truck,
span.scania-icon-truck {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/26_Truck-54-72px.svg');
}

i.scania-icon-engine,
span.scania-icon-engine {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/27_Engine-54-72px.svg');
}

i.scania-icon-bus,
span.scania-icon-bus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/28_Bus-54-72px.svg');
}

i.scania-icon-boat,
span.scania-icon-boat {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/29_Boat-54-72px.svg');
}

i.scania-icon-finance,
span.scania-icon-finance {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/30_Finance-54-72px.svg');
}

i.scania-icon-conveyorbelt,
span.scania-icon-conveyorbelt {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/31_Conveyorbelt_Machinery-54-72px.svg');
}

i.scania-icon-powergen,
span.scania-icon-powergen {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/32_Powergen-54-72px.svg');
}

i.scania-icon-insurance,
span.scania-icon-insurance {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/33_Insurance_risk_management-54-72px.svg');
}

i.scania-icon-repairs,
span.scania-icon-repairs {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/34_Repairs-54-72px.svg');
}

i.scania-icon-connected-services,
span.scania-icon-connected-services {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/35_Connected_services-54-72px.svg');
}

i.scania-icon-training-classroom,
span.scania-icon-training-classroom {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/36_Training_Classroom-54-72px.svg');
}

i.scania-icon-bus-driver,
span.scania-icon-bus-driver {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/37_Driver_Bus_driver-54-72px.svg');
}

i.scania-icon-business-operator,
span.scania-icon-business-operator {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/38_Business_operator-54-72px.svg');
}

i.scania-icon-passenger,
span.scania-icon-passenger {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/39_Passanger-54-72px.svg');
}

i.scania-icon-mechanic-technician,
span.scania-icon-mechanic-technician {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/40_Mechanic_Technician-54-72px.svg');
}

i.scania-icon-concrete-mixer,
span.scania-icon-concrete-mixer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/42_Concrete_mixer-54-72px.svg');
}

i.scania-icon-truck-assembly-component,
span.scania-icon-truck-assembly-component {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/43_Truck_assembly-54-72px.svg');
}

i.scania-icon-bus-application,
span.scania-icon-bus-application {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/44_Bus_application-54-72px.svg');
}

i.scania-icon-engine-application,
span.scania-icon-engine-application {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/45_Engine_application-54-72px.svg');
}

i.scania-icon-fuel-economy,
span.scania-icon-fuel-economy {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/46_Fuel_economy-54-72px.svg');
}

i.scania-icon-sustainability,
span.scania-icon-sustainability {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/47_Sustainabillity_Environment-54-72px.svg');
}

i.scania-icon-comfort-passenger,
span.scania-icon-comfort-passenger {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/48_Comfort_Passanger_environment-54-72px.svg');
}

i.scania-icon-driver-omptimization,
span.scania-icon-driver-omptimization {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/49_Driver_optimisation-54-72px.svg');
}

i.scania-icon-uptime,
span.scania-icon-uptime {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/50_Uptime-54-72px.svg');
}

i.scania-icon-productivity,
span.scania-icon-productivity {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/51_Productivity-54-72px.svg');
}

i.scania-icon-business-growth,
span.scania-icon-business-growth {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/52_Business_growth-54-72px.svg');
}

i.scania-icon-efficiency,
span.scania-icon-efficiency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/53_Efficiency-54-72px.svg');
}

i.scania-icon-condition-roads,
span.scania-icon-condition-roads {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/54_Conditions_roads-54-72px.svg');
}

i.scania-icon-safety,
span.scania-icon-safety {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/55_Safety_54-72px.svg');
}

i.scania-icon-quality-engineering,
span.scania-icon-quality-engineering {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/56_Quality_Engineering-54-72px.svg');
}

i.scania-icon-toe,
span.scania-icon-toe {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/57_TOE-54-72px.svg');
}

i.scania-icon-alternative-fuels,
span.scania-icon-alternative-fuels {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/58_Alternative_fuels-54-72px.svg');
}

i.scania-icon-tma,
span.scania-icon-tma {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/59_TMA-54-72px.svg');
}

i.scania-icon-payload,
span.scania-icon-payload {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/60_Payload-54-72px.svg');
}

i.scania-icon-driveability,
span.scania-icon-driveability {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/61_Driveability-54-72px.svg');
}

i.scania-icon-ecolution-analysis,
span.scania-icon-ecolution-analysis {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/62_Ecolution_analysis-54-72px.svg');
}

i.scania-icon-ecolution-solutions,
span.scania-icon-ecolution-solutions {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/63_Ecolution_solutions-54-72px.svg');
}

i.scania-icon-ecolution-results,
span.scania-icon-ecolution-results {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/64_Ecolution_results-54-72px.svg');
}

i.scania-icon-fuel-efficency,
span.scania-icon-fuel-efficency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/65_Fuel_efficency-54-72px.svg');
}

i.scania-icon-co2-emissions,
span.scania-icon-co2-emissions {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/66_Co2_emissions-54-72px.svg');
}

i.scania-icon-miles-capacity,
span.scania-icon-miles-capacity {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/67_Miles_capacity-54-72px.svg');
}

i.scania-icon-events,
span.scania-icon-events {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/68_Events-54-72px.svg');
}

i.scania-icon-truck-assembly,
span.scania-icon-truck-assembly {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/69_Truck_assembly-54-72px.svg');
}

i.scania-icon-waiting-time,
span.scania-icon-waiting-time {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/70_Waiting-time-54-72px.svg');
}

i.scania-icon-explore,
span.scania-icon-explore {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/71_Explore-54-72px.svg');
}

i.scania-icon-see-details,
span.scania-icon-see-details {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/72_See details-54-72px.svg');
}

i.scania-icon-network-worldwide-open,
span.scania-icon-network-worldwide-open {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/73_Scania_network_worldwide_open_24h-54-72px.svg');
}

i.scania-icon-warranty,
span.scania-icon-warranty {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/74_Warranty-54-72px.svg');
}

i.scania-icon-gear-shift,
span.scania-icon-gear-shift {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/75_Gear_shift-54-72px.svg');
}

i.scania-icon-knowledge,
span.scania-icon-knowledge {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/76_Knowledge-54-72px.svg');
}

i.scania-icon-brake,
span.scania-icon-brake {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/77_Brake-54-72px.svg');
}

i.scania-icon-social-media-facebook,
span.scania-icon-social-media-facebook {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Facebook.svg');
}

i.scania-icon-social-media-flickr,
span.scania-icon-social-media-flickr {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Flickr.svg');
}

i.scania-icon-social-media-googleplus,
span.scania-icon-social-media-googleplus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_GooglePlus.svg');
}

i.scania-icon-social-media-instagram,
span.scania-icon-social-media-instagram {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Instagram.svg');
}

i.scania-icon-social-media-linkedin,
span.scania-icon-social-media-linkedin {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Linkedin.svg');
}

i.scania-icon-social-media-slideshare,
span.scania-icon-social-media-slideshare {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_SlideShare.svg');
}

i.scania-icon-social-media-twitter,
span.scania-icon-social-media-twitter {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Twitter.svg');
}

i.scania-icon-social-media-youtube,
span.scania-icon-social-media-youtube {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Youtube.svg');
}

i.scania-icon-social-media-youtube-variation-2,
span.scania-icon-social-media-youtube-variation-2 {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Youtube_variation-2.svg');
}

i.scania-icon-save-download,
span.scania-icon-save-download {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/84_Save-54-72px.svg');
}

i.scania-icon-emergency,
span.scania-icon-emergency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/79_Emergency_54-72px.svg');
}

i.scania-icon-time,
span.scania-icon-time {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/80_Time-54-72px.svg');
}

i.scania-icon-battery,
span.scania-icon-battery {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/81_Battery_54-72px.svg');
}

i.scania-icon-date,
span.scania-icon-date {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/82_Date-54-72px.svg');
}

i.scania-icon-sound,
span.scania-icon-sound {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/83_Sound-54-72px.svg');
}

i.scania-icon-no-photo,
span.scania-icon-no-photo {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/92_No_photo-54-72px.svg');
}

i.scania-icon-no-smoking,
span.scania-icon-no-smoking {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/93_No_smoking-54-72px.svg');
}

i.scania-icon-no-drugs-or-alcohol,
span.scania-icon-no-drugs-or-alcohol {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/94_No_drugs_or_alcohol-54-72px.svg');
}

i.scania-icon-drivers-licence-required,
span.scania-icon-drivers-licence-required {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/95_Drivers_licence_required-54-72px.svg');
}

i.scania-icon-forbidden-to-enter-course,
span.scania-icon-forbidden-to-enter-course {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/96_Forbidden_to_enter_course-54-72px.svg');
}

i.scania-icon-wear-seatbelt,
span.scania-icon-wear-seatbelt {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/97_Wear_seatbelt-54-72px.svg');
}

i.scania-icon-no-phone-during-driving,
span.scania-icon-no-phone-during-driving {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/98_No_phone_during_driving-54-72px.svg');
}

i.scania-icon-listen-to-demo-driver,
span.scania-icon-listen-to-demo-driver {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/99_Listen_to_demo_driver-54-72px.svg');
}

i.scania-icon-connected-services-bus,
span.scania-icon-connected-services-bus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/100_Connected_services_bus-54-72px.svg');
}

i.scania-icon-info-round,
span.scania-icon-info-round {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/101_Info_round-54-72px.svg');
}

i.scania-icon-call-us,
span.scania-icon-call-us {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/102_Call_us_54-72px.svg');
}

i.scania-icon-link,
span.scania-icon-link {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/103_Link-icon-24-48px.svg');
}

i.scania-icon-truck-configurator,
span.scania-icon-truck-configurator {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/104_Truck-configurator-24-48px.svg');
}

i.scania-icon-change,
span.scania-icon-change {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/105_Change-24-48px.svg');
}

i.scania-icon-edit,
span.scania-icon-edit {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/106_Edit-24-48px.svg');
}

i.scania-icon-conversation,
span.scania-icon-conversation {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/107_Conversation-24-48px.svg');
}

i.scania-icon-settings,
span.scania-icon-settings {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/108_Settings-24-48px.svg');
}

i.scania-icon-box,
span.scania-icon-box {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Box_24_48px.svg');
}

i.scania-icon-crane,
span.scania-icon-crane {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Crane-24-48px.svg');
}

i.scania-icon-fifth-wheel,
span.scania-icon-fifth-wheel {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Fifth_wheel-24-48px.svg');
}

i.scania-icon-fire-engine,
span.scania-icon-fire-engine {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Fire_engine-24-48px.svg');
}

i.scania-icon-hook-lift,
span.scania-icon-hook-lift {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Hook_lift-24-48px.svg');
}

i.scania-icon-recovery-body,
span.scania-icon-recovery-body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Recovery_body-24-48px.svg');
}

i.scania-icon-refuse-collection-body,
span.scania-icon-refuse-collection-body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Refuse_collection_body-24-48px.svg');
}

i.scania-icon-tail-lift,
span.scania-icon-tail-lift {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Tail_lift-24-48px.svg');
}

i.scania-icon-tank-body,
span.scania-icon-tank-body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Tank_body-24-48px.svg');
}

i.scania-icon-timber-body,
span.scania-icon-timber-body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Timber_body-24-48px.svg');
}

i.scania-icon-tipper_body,
span.scania-icon-tipper_body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Tipper_body-24-48px.svg');
}

i.scania-icon-trailer,
span.scania-icon-trailer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Trailer-24-48px.svg');
}

i.scania-icon-vehicle-transport-body,
span.scania-icon-vehicle-transport-body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Vehicle_transport_body-24-48px.svg');
}

i.scania-icon-truck-service,
span.scania-icon-truck-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/01_SIS_Truck_service-54-72px.svg');
}

i.scania-icon-bus-service,
span.scania-icon-bus-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/02_SIS_Bus_service-54-72px.svg');
}

i.scania-icon-engine-service,
span.scania-icon-engine-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/03_SIS_Engines_service-54-72px.svg');
}

i.scania-icon-marine-engine-service,
span.scania-icon-marine-engine-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/04_SIS_Marine_engine_service-54-72px.svg');
}

i.scania-icon-genstes-service,
span.scania-icon-genstes-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/05_SIS_Scania_gensets_service-54-72px.svg');
}

i.scania-icon-24h-breakdown-service,
span.scania-icon-24h-breakdown-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/06_SIS_24h_emergency_breakdown_service-54-72px.svg');
}

i.scania-icon-accident-repairs,
span.scania-icon-accident-repairs {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/07_SIS_Accident_repairs-54-72px.svg');
}

i.scania-icon-towing-recovery-service,
span.scania-icon-towing-recovery-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/08_SIS_Towing_and_recovery_service-54-72px.svg');
}

i.scania-icon-toll-collect-recivery-service,
span.scania-icon-toll-collect-recivery-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/09_SIS_Toll_collect_and_recovery_service-54-72px.svg');
}

i.scania-icon-tyre-service,
span.scania-icon-tyre-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/10_SIS_Tyre_service-54-72px.svg');
}

i.scania-icon-vehicle-washing,
span.scania-icon-vehicle-washing {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/11_SIS_Vehicle_washing-54-72px.svg');
}

i.scania-icon-vehicle-rental,
span.scania-icon-vehicle-rental {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/12_SIS_Vehicle_rental-54-72px.svg');
}

i.scania-icon-truck-sales,
span.scania-icon-truck-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/13_SIS_Truck_sales-54-72px.svg');
}

i.scania-icon-bus-sales,
span.scania-icon-bus-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/14_SIS_Bus_sales-54-72px.svg');
}

i.scania-icon-power-engine-sales,
span.scania-icon-power-engine-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/15_SIS_Power_generation_engine_sales-54-72px.svg');
}

i.scania-icon-marine-engine-sales,
span.scania-icon-marine-engine-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/16_SIS_Marine_engine_sales-54-72px.svg');
}

i.scania-icon-genstes-sales,
span.scania-icon-genstes-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/17_SIS_Scania_gensets_sales-54-72px.svg');
}

i.scania-icon-parts-sales,
span.scania-icon-parts-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/18_SIS_Scania_parts_sales-54-72px.svg');
}

i.scania-icon-digital-tachograph-download,
span.scania-icon-digital-tachograph-download {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/19_SIS_Digital_tachograph_data_download-54-72px.svg');
}

i.scania-icon-digital-tachograph-inspection,
span.scania-icon-digital-tachograph-inspection {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/20_SIS_Digital_tachograph_inspection_and_repairs-54-72px.svg');
}

i.scania-icon-analogue-tachograph-inspection,
span.scania-icon-analogue-tachograph-inspection {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/21_SIS_Analogue_tachograph_inspection_and_repairs-54-72px.svg');
}

i.scania-icon-roller-brake-test,
span.scania-icon-roller-brake-test {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/22_SIS_Roller_brake_test-54-72px.svg');
}

i.scania-icon-trailer-service,
span.scania-icon-trailer-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/23_SIS_Trailer_service-54-72px.svg');
}

i.scania-icon-refrigeration-service,
span.scania-icon-refrigeration-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/24_SIS_Transport_refrigeration_unit_service-54-72px.svg');
}

i.scania-icon-tarpaulin-service,
span.scania-icon-tarpaulin-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/25_SIS_Tarpaulin_service-54-72px.svg');
}

i.scania-icon-adr-service,
span.scania-icon-adr-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/26_SIS_ADR_Vehicle_service-54-72px.svg');
}

i.scania-icon-hydraulics-service,
span.scania-icon-hydraulics-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/27_SIS_Hydraulics_bodywork_service-54-72px.svg');
}

i.scania-icon-used-vehicle-sales,
span.scania-icon-used-vehicle-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/28_SIS_Used_vehicle_sales-54-72px.svg');
}

i.scania-icon-mining-service,
span.scania-icon-mining-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/29_SIS_Mining_service-54-72px.svg');
}

i.scania-icon-mining-sales,
span.scania-icon-mining-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/30_SIS_Mining_sales-54-72px.svg');
}

i.scania-icon-tail-lift-service,
span.scania-icon-tail-lift-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/31_SIS_Tail_lift_service-54-72px.svg');
}

i.scania-icon-fixed-price-repairs,
span.scania-icon-fixed-price-repairs {
  background-image: url('https://static.scania.com/resources/icons/scania/products-services/SVG_POS/01_Fixed_price_repairs_24-48px.svg');
}

i.scania-icon-service_exchange,
span.scania-icon-service_exchange {
  background-image: url('https://static.scania.com/resources/icons/scania/products-services/SVG_POS/02_Service_exchange_24-48px.svg');
}

i.neg.scania-icon-find-a-dealer,
span.neg.scania-icon-find-a-dealer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/01_Find_a_dealer-54-72px_neg.svg');
}

i.neg.scania-icon-search,
span.neg.scania-icon-search {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/02_Icon_search-54-72px_neg.svg');
}

i.neg.scania-icon-close-input,
span.neg.scania-icon-close-input {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/03_Search-desktop_in-field-delete-54-72px_neg.svg');
}

i.neg.scania-icon-search-mobile,
span.neg.scania-icon-search-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/04_Search-mobile_in-field-delete-54-72px_neg.svg');
}

i.neg.scania-icon-menu-mobile,
span.neg.scania-icon-menu-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/05_Menu_mobile-54-72px_neg.svg');
}

i.neg.scania-icon-close-mobile-menu,
span.neg.scania-icon-close-mobile-menu {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/06_Menu_close_button_Mobile-54-72px_neg.svg');
}

i.neg.scania-icon-menu-back-button,
span.neg.scania-icon-menu-back-button {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/07_Menu_back_button-54-72px_neg.svg');
}

i.neg.scania-icon-my-scania-mobile,
span.neg.scania-icon-my-scania-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/08_My_scania_Mobile-54-72px_neg.svg');
}

i.neg.scania-icon-share-social-media,
span.neg.scania-icon-share-social-media {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/09_Share_page_tool_share_icon-54-72px_neg.svg');
}

i.neg.scania-icon-share-page-tool,
span.neg.scania-icon-share-page-tool {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/10_Share_page_tool-54-72px_neg.svg');
}

i.neg.scania-icon-video-play,
span.neg.scania-icon-video-play {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/11_Video_play_icon-54-72px_neg.svg');
}

i.neg.scania-icon-find-a-dealer,
span.neg.scania-icon-find-a-dealer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/12_Find_a_dealer_CTA-54-72px_neg.svg');
}

i.neg.scania-icon-open-accordian-plus,
span.neg.scania-icon-open-accordian-plus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/13_Open_accordian_plus_Mobile-54-72px_neg.svg');
}

i.neg.scania-icon-close-accordian-minus,
span.neg.scania-icon-close-accordian-minus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/14_Close_accordian_minus_icon_Mobile-54-72px_neg.svg');
}

i.neg.scania-icon-tick,
span.neg.scania-icon-tick {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/15_Tick_icon-54-72px_neg.svg');
}

i.neg.scania-icon-filter-dropdown,
span.neg.scania-icon-filter-dropdown {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/16_Filter_drop_down_icon-54-72px_neg.svg');
}

i.neg.scania-icon-dealer-locator-detect,
span.neg.scania-icon-dealer-locator-detect {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/17_Dealer_locator_Detect_location_54-72px_neg.svg');
}

i.neg.scania-icon-dealer-locator-map-pin,
span.neg.scania-icon-dealer-locator-map-pin {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/18_Dealer_locator_map_pin_filled-54-72px_neg.svg');
}

i.neg.scania-icon-dealer-locator-current,
span.neg.scania-icon-dealer-locator-current {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/19_Dealer_locator_Current_location_pin-54-72px_neg.svg');
}

i.neg.scania-icon-job-posting-location,
span.neg.scania-icon-job-posting-location {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/20_Job_posting_info_Location_generic-54-72px_neg.svg');
}

i.neg.scania-icon-job-posting-workarea,
span.neg.scania-icon-job-posting-workarea {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/21_Job_posting_info_Location_generic-54-72px_neg.svg');
}

i.neg.scania-icon-job-posting-closing-date,
span.neg.scania-icon-job-posting-closing-date {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/22_Closing_date-54-72px_neg.svg');
}

i.neg.scania-icon-email,
span.neg.scania-icon-email {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/23_E-mail_US-54-72px_neg.svg');
}

i.neg.scania-icon-dealer-website,
span.neg.scania-icon-dealer-website {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/24_View_dealer_website-54-72px_neg.svg');
}

i.neg.scania-icon-dealer-direction,
span.neg.scania-icon-dealer-direction {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/25_Dealer_key_actions_Get_directions_generic_54-72px_neg.svg');
}

i.neg.scania-icon-truck,
span.neg.scania-icon-truck {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/26_Truck-54-72px_neg.svg');
}

i.neg.scania-icon-engine,
span.neg.scania-icon-engine {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/27_Engine-54-72px_neg.svg');
}

i.neg.scania-icon-bus,
span.neg.scania-icon-bus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/28_Bus-54-72px_neg.svg');
}

i.neg.scania-icon-boat,
span.neg.scania-icon-boat {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/29_Boat-54-72px_neg.svg');
}

i.neg.scania-icon-finance,
span.neg.scania-icon-finance {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/30_Finance-54-72px_neg.svg');
}

i.neg.scania-icon-conveyorbelt,
span.neg.scania-icon-conveyorbelt {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/31_Conveyorbelt_Machinery-54-72px_neg.svg');
}

i.neg.scania-icon-powergen,
span.neg.scania-icon-powergen {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/32_Powergen-54-72px_neg.svg');
}

i.neg.scania-icon-insurance,
span.neg.scania-icon-insurance {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/33_Insurance_risk_management-54-72px_neg.svg');
}

i.neg.scania-icon-repairs,
span.neg.scania-icon-repairs {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/34_Repairs-54-72px_neg.svg');
}

i.neg.scania-icon-connected-services,
span.neg.scania-icon-connected-services {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/35_Connected_services-54-72px_neg.svg');
}

i.neg.scania-icon-training-classroom,
span.neg.scania-icon-training-classroom {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/36_Training_Classroom-54-72px_neg.svg');
}

i.neg.scania-icon-bus-driver,
span.neg.scania-icon-bus-driver {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/37_Driver_Bus_driver-54-72px_neg.svg');
}

i.neg.scania-icon-business-operator,
span.neg.scania-icon-business-operator {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/38_Business_operator-54-72px_neg.svg');
}

i.neg.scania-icon-passenger,
span.neg.scania-icon-passenger {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/39_Passanger-54-72px_neg.svg');
}

i.neg.scania-icon-mechanic-technician,
span.neg.scania-icon-mechanic-technician {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/40_Mechanic_Technician-54-72px_neg.svg');
}

i.neg.scania-icon-concrete-mixer,
span.neg.scania-icon-concrete-mixer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/42_Concrete_mixer-54-72px_neg.svg');
}

i.neg.scania-icon-truck-assembly-component,
span.neg.scania-icon-truck-assembly-component {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/43_Truck_assembly-54-72px_neg.svg');
}

i.neg.scania-icon-bus-application,
span.neg.scania-icon-bus-application {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/44_Bus_application-54-72px_neg.svg');
}

i.neg.scania-icon-engine-application,
span.neg.scania-icon-engine-application {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/45_Engine_application-54-72px_neg.svg');
}

i.neg.scania-icon-fuel-economy,
span.neg.scania-icon-fuel-economy {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/46_Fuel_economy-54-72px_neg.svg');
}

i.neg.scania-icon-sustainability,
span.neg.scania-icon-sustainability {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/47_Sustainabillity_Environment-54-72px_neg.svg');
}

i.neg.scania-icon-comfort-passenger,
span.neg.scania-icon-comfort-passenger {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/48_Comfort_Passanger_environment-54-72px_neg.svg');
}

i.neg.scania-icon-driver-omptimization,
span.neg.scania-icon-driver-omptimization {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/49_Driver_optimisation-54-72px_neg.svg');
}

i.neg.scania-icon-uptime,
span.neg.scania-icon-uptime {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/50_Uptime-54-72px_neg.svg');
}

i.neg.scania-icon-productivity,
span.neg.scania-icon-productivity {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/51_Productivity-54-72px_neg.svg');
}

i.neg.scania-icon-business-growth,
span.neg.scania-icon-business-growth {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/52_Business_growth-54-72px_neg.svg');
}

i.neg.scania-icon-efficiency,
span.neg.scania-icon-efficiency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/53_Efficiency-54-72px_neg.svg');
}

i.neg.scania-icon-condition-roads,
span.neg.scania-icon-condition-roads {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/54_Conditions_roads-54-72px_neg.svg');
}

i.neg.scania-icon-safety,
span.neg.scania-icon-safety {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/55_Safety_54-72px_neg.svg');
}

i.neg.scania-icon-quality-engineering,
span.neg.scania-icon-quality-engineering {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/56_Quality_Engineering-54-72px_neg.svg');
}

i.neg.scania-icon-toe,
span.neg.scania-icon-toe {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/57_TOE-54-72px_neg.svg');
}

i.neg.scania-icon-alternative-fuels,
span.neg.scania-icon-alternative-fuels {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/58_Alternative_fuels-54-72px_neg.svg');
}

i.neg.scania-icon-tma,
span.neg.scania-icon-tma {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/59_TMA-54-72px_neg.svg');
}

i.neg.scania-icon-payload,
span.neg.scania-icon-payload {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/60_Payload-54-72px_neg.svg');
}

i.neg.scania-icon-driveability,
span.neg.scania-icon-driveability {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/61_Driveability-54-72px_neg.svg');
}

i.neg.scania-icon-ecolution-analysis,
span.neg.scania-icon-ecolution-analysis {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/62_Ecolution_analysis-54-72px_neg.svg');
}

i.neg.scania-icon-ecolution-solutions,
span.neg.scania-icon-ecolution-solutions {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/63_Ecolution_solutions-54-72px_neg.svg');
}

i.neg.scania-icon-ecolution-results,
span.neg.scania-icon-ecolution-results {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/64_Ecolution_results-54-72px_neg.svg');
}

i.neg.scania-icon-fuel-efficency,
span.neg.scania-icon-fuel-efficency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/65_Fuel_efficency-54-72px_neg.svg');
}

i.neg.scania-icon-co2-emissions,
span.neg.scania-icon-co2-emissions {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/66_Co2_emissions-54-72px_neg.svg');
}

i.neg.scania-icon-miles-capacity,
span.neg.scania-icon-miles-capacity {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/67_Miles_capacity-54-72px_neg.svg');
}

i.neg.scania-icon-events,
span.neg.scania-icon-events {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/68_Events-54-72px_neg.svg');
}

i.neg.scania-icon-truck-assembly,
span.neg.scania-icon-truck-assembly {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/69_Truck_assembly-54-72px_neg.svg');
}

i.neg.scania-icon-waiting-time,
span.neg.scania-icon-waiting-time {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/70_Waiting-time-54-72px_neg.svg');
}

i.neg.scania-icon-explore,
span.neg.scania-icon-explore {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/71_Explore-54-72px_neg.svg');
}

i.neg.scania-icon-see-details,
span.neg.scania-icon-see-details {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/72_See details-54-72px_neg.svg');
}

i.neg.scania-icon-network-worldwide-open,
span.neg.scania-icon-network-worldwide-open {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/73_Scania_network_worldwide_open_24h-54-72px_neg.svg');
}

i.neg.scania-icon-warranty,
span.neg.scania-icon-warranty {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/74_Warranty-54-72px_neg.svg');
}

i.neg.scania-icon-gear-shift,
span.neg.scania-icon-gear-shift {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/75_Gear_shift-54-72px_neg.svg');
}

i.neg.scania-icon-knowledge,
span.neg.scania-icon-knowledge {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/76_Knowledge-54-72px_neg.svg');
}

i.neg.scania-icon-brake,
span.neg.scania-icon-brake {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/77_Brake-54-72px_neg.svg');
}

i.neg.scania-icon-social-media-facebook,
span.neg.scania-icon-social-media-facebook {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Facebook_neg.svg');
}

i.neg.scania-icon-social-media-flickr,
span.neg.scania-icon-social-media-flickr {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Flickr_neg.svg');
}

i.neg.scania-icon-social-media-googleplus,
span.neg.scania-icon-social-media-googleplus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_GooglePlus_neg.svg');
}

i.neg.scania-icon-social-media-instagram,
span.neg.scania-icon-social-media-instagram {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Instagram_neg.svg');
}

i.neg.scania-icon-social-media-linkedin,
span.neg.scania-icon-social-media-linkedin {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Linkedin_neg.svg');
}

i.neg.scania-icon-social-media-slideshare,
span.neg.scania-icon-social-media-slideshare {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_SlideShare_neg.svg');
}

i.neg.scania-icon-social-media-twitter,
span.neg.scania-icon-social-media-twitter {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Twitter_neg.svg');
}

i.neg.scania-icon-social-media-youtube,
span.neg.scania-icon-social-media-youtube {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Youtube_neg.svg');
}

i.neg.scania-icon-social-media-youtube-variation-2,
span.neg.scania-icon-social-media-youtube-variation-2 {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Youtube_variation-2_neg.svg');
}

i.neg.scania-icon-save-download,
span.neg.scania-icon-save-download {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/84_Save-54-72px_neg.svg');
}

i.neg.scania-icon-emergency,
span.neg.scania-icon-emergency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/79_Emergency_54-72px_neg.svg');
}

i.neg.scania-icon-time,
span.neg.scania-icon-time {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/80_Time-54-72px_neg.svg');
}

i.neg.scania-icon-battery,
span.neg.scania-icon-battery {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/81_Battery_54-72px_neg.svg');
}

i.neg.scania-icon-date,
span.neg.scania-icon-date {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/82_Date-54-72px_neg.svg');
}

i.neg.scania-icon-sound,
span.neg.scania-icon-sound {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/83_Sound-54-72px_neg.svg');
}

i.neg.scania-icon-no-photo,
span.neg.scania-icon-no-photo {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/92_No_photo-54-72px_neg.svg');
}

i.neg.scania-icon-no-smoking,
span.neg.scania-icon-no-smoking {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/93_No_smoking-54-72px_neg.svg');
}

i.neg.scania-icon-no-drugs-or-alcohol,
span.neg.scania-icon-no-drugs-or-alcohol {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/94_No_drugs_or_alcohol-54-72px_neg.svg');
}

i.neg.scania-icon-drivers-licence-required,
span.neg.scania-icon-drivers-licence-required {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/95_Drivers_licence_required-54-72px_neg.svg');
}

i.neg.scania-icon-forbidden-to-enter-course,
span.neg.scania-icon-forbidden-to-enter-course {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/96_Forbidden_to_enter_course-54-72px_neg.svg');
}

i.neg.scania-icon-wear-seatbelt,
span.neg.scania-icon-wear-seatbelt {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/97_Wear_seatbelt-54-72px_neg.svg');
}

i.neg.scania-icon-no-phone-during-driving,
span.neg.scania-icon-no-phone-during-driving {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/98_No_phone_during_driving-54-72px_neg.svg');
}

i.neg.scania-icon-listen-to-demo-driver,
span.neg.scania-icon-listen-to-demo-driver {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/99_Listen_to_demo_driver-54-72px_neg.svg');
}

i.neg.scania-icon-connected-services-bus,
span.neg.scania-icon-connected-services-bus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/100_Connected_services_bus-54-72px_neg.svg');
}

i.neg.scania-icon-info-round,
span.neg.scania-icon-info-round {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/101_Info_round-54-72px_neg.svg');
}

i.neg.scania-icon-call-us,
span.neg.scania-icon-call-us {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/102_Call_us_54-72px_neg.svg');
}

i.neg.scania-icon-link,
span.neg.scania-icon-link {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/103_Link-icon-24-48px_neg.svg');
}

i.neg.scania-icon-fixed-price-repairs,
span.neg.scania-icon-fixed-price-repairs {
  background-image: url('https://static.scania.com/resources/icons/scania/products-services/SVG_NEG/01_Fixed_price_repairs_24-48px_neg.svg');
}

i.neg.scania-icon-service_exchange,
span.neg.scania-icon-service_exchange {
  background-image: url('https://static.scania.com/resources/icons/scania/products-services/SVG_NEG/02_Service_exchange_24-48px_neg.svg');
}

i.active.scania-icon-dealer-locator-detect,
span.active.scania-icon-dealer-locator-detect {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/17_Dealer_locator_Detect_location_54-72px-Active.svg');
}

i.scania-truck-configurator,
span.scania-truck-configurator {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/104_Truck-configurator-24-48px.svg');
}

i[class*="scania-icon-"],
span[class*="scania-icon-"] {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-size: 54px;
  width: 54px;
  height: 54px;
  margin: 5px;
}

i.xs,
span.xs,
i.sm,
span.sm,
i.md,
span.md,
i.lg,
span.lg,
i.xl,
span.xl,
i.xxl,
span.xxl {
  display: inline-block;
}

i.xs,
span.xs {
  background-size: 16px;
  width: 16px;
  height: 16px;
  margin: 2px;
}

i.sm,
span.sm {
  background-size: 28px;
  width: 28px;
  height: 28px;
  margin: 2px;
}

i.md,
span.md {
  background-size: 54px;
  width: 54px;
  height: 54px;
  margin: 5px;
}

i.lg,
span.lg {
  background-size: 90px;
  width: 90px;
  height: 90px;
  margin: 8px;
}

i.xl,
span.xl {
  background-size: 140px 140px;
  width: 140px;
  height: 140px;
  padding: 10px;
}

i.xxl,
span.xxl {
  background-size: 240px;
  width: 240px;
  height: 240px;
  padding: 10px;
}

i.scania-icon-find-a-dealer,
span.scania-icon-find-a-dealer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/01_Find_a_dealer-54-72px.svg');
}

i.scania-icon-search,
span.scania-icon-search {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/02_Icon_search-54-72px.svg');
}

i.scania-icon-close-input,
span.scania-icon-close-input {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/03_Search-desktop_in-field-delete-54-72px.svg');
}

i.scania-icon-search-mobile,
span.scania-icon-search-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/04_Search-mobile_in-field-delete-54-72px.svg');
}

i.scania-icon-menu-mobile,
span.scania-icon-menu-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/05_Menu_mobile-54-72px.svg');
}

i.scania-icon-close-mobile-menu,
span.scania-icon-close-mobile-menu {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/06_Menu_close_button_Mobile-54-72px.svg');
}

i.scania-icon-menu-back-button,
span.scania-icon-menu-back-button {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/07_Menu_back_button-54-72px.svg');
}

i.scania-icon-my-scania-mobile,
span.scania-icon-my-scania-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/08_My_scania_Mobile-54-72px.svg');
}

i.scania-icon-share-social-media,
span.scania-icon-share-social-media {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/09_Share_page_tool_share_icon-54-72px.svg');
}

i.scania-icon-share-page-tool,
span.scania-icon-share-page-tool {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/10_Share_page_tool-54-72px.svg');
}

i.scania-icon-video-play,
span.scania-icon-video-play {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/11_Video_play_icon-54-72px.svg');
}

i.scania-icon-find-a-dealer,
span.scania-icon-find-a-dealer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/12_Find_a_dealer_CTA-54-72px.svg');
}

i.scania-icon-open-accordian-plus,
span.scania-icon-open-accordian-plus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/13_Open_accordian_plus_Mobile-54-72px.svg');
}

i.scania-icon-close-accordian-minus,
span.scania-icon-close-accordian-minus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/14_Close_accordian_minus_icon_Mobile-54-72px.svg');
}

i.scania-icon-tick,
span.scania-icon-tick {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/15_Tick_icon-54-72px.svg');
}

i.scania-icon-filter-dropdown,
span.scania-icon-filter-dropdown {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/16_Filter_drop_down_icon-54-72px.svg');
}

i.scania-icon-dealer-locator-detect,
span.scania-icon-dealer-locator-detect {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/17_Dealer_locator_Detect_location_54-72px.svg');
}

i.scania-icon-dealer-locator-map-pin,
span.scania-icon-dealer-locator-map-pin {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/18_Dealer_locator_map_pin_filled-54-72px.svg');
}

i.scania-icon-dealer-locator-current,
span.scania-icon-dealer-locator-current {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/19_Dealer_locator_Current_location_pin-54-72px.svg');
}

i.scania-icon-job-posting-location,
span.scania-icon-job-posting-location {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/20_Job_posting_info_Location_generic-54-72px.svg');
}

i.scania-icon-job-posting-workarea,
span.scania-icon-job-posting-workarea {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/21_Job_posting_info_Location_generic-54-72px.svg');
}

i.scania-icon-job-posting-closing-date,
span.scania-icon-job-posting-closing-date {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/22_Closing_date-54-72px.svg');
}

i.scania-icon-email,
span.scania-icon-email {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/23_E-mail_US-54-72px.svg');
}

i.scania-icon-dealer-website,
span.scania-icon-dealer-website {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/24_View_dealer_website-54-72px.svg');
}

i.scania-icon-dealer-direction,
span.scania-icon-dealer-direction {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/25_Dealer_key_actions_Get_directions_generic_54-72px.svg');
}

i.scania-icon-truck,
span.scania-icon-truck {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/26_Truck-54-72px.svg');
}

i.scania-icon-engine,
span.scania-icon-engine {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/27_Engine-54-72px.svg');
}

i.scania-icon-bus,
span.scania-icon-bus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/28_Bus-54-72px.svg');
}

i.scania-icon-boat,
span.scania-icon-boat {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/29_Boat-54-72px.svg');
}

i.scania-icon-finance,
span.scania-icon-finance {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/30_Finance-54-72px.svg');
}

i.scania-icon-conveyorbelt,
span.scania-icon-conveyorbelt {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/31_Conveyorbelt_Machinery-54-72px.svg');
}

i.scania-icon-powergen,
span.scania-icon-powergen {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/32_Powergen-54-72px.svg');
}

i.scania-icon-insurance,
span.scania-icon-insurance {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/33_Insurance_risk_management-54-72px.svg');
}

i.scania-icon-repairs,
span.scania-icon-repairs {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/34_Repairs-54-72px.svg');
}

i.scania-icon-connected-services,
span.scania-icon-connected-services {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/35_Connected_services-54-72px.svg');
}

i.scania-icon-training-classroom,
span.scania-icon-training-classroom {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/36_Training_Classroom-54-72px.svg');
}

i.scania-icon-bus-driver,
span.scania-icon-bus-driver {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/37_Driver_Bus_driver-54-72px.svg');
}

i.scania-icon-business-operator,
span.scania-icon-business-operator {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/38_Business_operator-54-72px.svg');
}

i.scania-icon-passenger,
span.scania-icon-passenger {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/39_Passanger-54-72px.svg');
}

i.scania-icon-mechanic-technician,
span.scania-icon-mechanic-technician {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/40_Mechanic_Technician-54-72px.svg');
}

i.scania-icon-concrete-mixer,
span.scania-icon-concrete-mixer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/42_Concrete_mixer-54-72px.svg');
}

i.scania-icon-truck-assembly-component,
span.scania-icon-truck-assembly-component {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/43_Truck_assembly-54-72px.svg');
}

i.scania-icon-bus-application,
span.scania-icon-bus-application {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/44_Bus_application-54-72px.svg');
}

i.scania-icon-engine-application,
span.scania-icon-engine-application {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/45_Engine_application-54-72px.svg');
}

i.scania-icon-fuel-economy,
span.scania-icon-fuel-economy {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/46_Fuel_economy-54-72px.svg');
}

i.scania-icon-sustainability,
span.scania-icon-sustainability {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/47_Sustainabillity_Environment-54-72px.svg');
}

i.scania-icon-comfort-passenger,
span.scania-icon-comfort-passenger {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/48_Comfort_Passanger_environment-54-72px.svg');
}

i.scania-icon-driver-omptimization,
span.scania-icon-driver-omptimization {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/49_Driver_optimisation-54-72px.svg');
}

i.scania-icon-uptime,
span.scania-icon-uptime {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/50_Uptime-54-72px.svg');
}

i.scania-icon-productivity,
span.scania-icon-productivity {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/51_Productivity-54-72px.svg');
}

i.scania-icon-business-growth,
span.scania-icon-business-growth {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/52_Business_growth-54-72px.svg');
}

i.scania-icon-efficiency,
span.scania-icon-efficiency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/53_Efficiency-54-72px.svg');
}

i.scania-icon-condition-roads,
span.scania-icon-condition-roads {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/54_Conditions_roads-54-72px.svg');
}

i.scania-icon-safety,
span.scania-icon-safety {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/55_Safety_54-72px.svg');
}

i.scania-icon-quality-engineering,
span.scania-icon-quality-engineering {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/56_Quality_Engineering-54-72px.svg');
}

i.scania-icon-toe,
span.scania-icon-toe {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/57_TOE-54-72px.svg');
}

i.scania-icon-alternative-fuels,
span.scania-icon-alternative-fuels {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/58_Alternative_fuels-54-72px.svg');
}

i.scania-icon-tma,
span.scania-icon-tma {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/59_TMA-54-72px.svg');
}

i.scania-icon-payload,
span.scania-icon-payload {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/60_Payload-54-72px.svg');
}

i.scania-icon-driveability,
span.scania-icon-driveability {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/61_Driveability-54-72px.svg');
}

i.scania-icon-ecolution-analysis,
span.scania-icon-ecolution-analysis {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/62_Ecolution_analysis-54-72px.svg');
}

i.scania-icon-ecolution-solutions,
span.scania-icon-ecolution-solutions {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/63_Ecolution_solutions-54-72px.svg');
}

i.scania-icon-ecolution-results,
span.scania-icon-ecolution-results {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/64_Ecolution_results-54-72px.svg');
}

i.scania-icon-fuel-efficency,
span.scania-icon-fuel-efficency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/65_Fuel_efficency-54-72px.svg');
}

i.scania-icon-co2-emissions,
span.scania-icon-co2-emissions {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/66_Co2_emissions-54-72px.svg');
}

i.scania-icon-miles-capacity,
span.scania-icon-miles-capacity {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/67_Miles_capacity-54-72px.svg');
}

i.scania-icon-events,
span.scania-icon-events {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/68_Events-54-72px.svg');
}

i.scania-icon-truck-assembly,
span.scania-icon-truck-assembly {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/69_Truck_assembly-54-72px.svg');
}

i.scania-icon-waiting-time,
span.scania-icon-waiting-time {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/70_Waiting-time-54-72px.svg');
}

i.scania-icon-explore,
span.scania-icon-explore {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/71_Explore-54-72px.svg');
}

i.scania-icon-see-details,
span.scania-icon-see-details {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/72_See details-54-72px.svg');
}

i.scania-icon-network-worldwide-open,
span.scania-icon-network-worldwide-open {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/73_Scania_network_worldwide_open_24h-54-72px.svg');
}

i.scania-icon-warranty,
span.scania-icon-warranty {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/74_Warranty-54-72px.svg');
}

i.scania-icon-gear-shift,
span.scania-icon-gear-shift {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/75_Gear_shift-54-72px.svg');
}

i.scania-icon-knowledge,
span.scania-icon-knowledge {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/76_Knowledge-54-72px.svg');
}

i.scania-icon-brake,
span.scania-icon-brake {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/77_Brake-54-72px.svg');
}

i.scania-icon-social-media-facebook,
span.scania-icon-social-media-facebook {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Facebook.svg');
}

i.scania-icon-social-media-flickr,
span.scania-icon-social-media-flickr {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Flickr.svg');
}

i.scania-icon-social-media-googleplus,
span.scania-icon-social-media-googleplus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_GooglePlus.svg');
}

i.scania-icon-social-media-instagram,
span.scania-icon-social-media-instagram {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Instagram.svg');
}

i.scania-icon-social-media-linkedin,
span.scania-icon-social-media-linkedin {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Linkedin.svg');
}

i.scania-icon-social-media-slideshare,
span.scania-icon-social-media-slideshare {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_SlideShare.svg');
}

i.scania-icon-social-media-twitter,
span.scania-icon-social-media-twitter {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Twitter.svg');
}

i.scania-icon-social-media-youtube,
span.scania-icon-social-media-youtube {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Youtube.svg');
}

i.scania-icon-social-media-youtube-variation-2,
span.scania-icon-social-media-youtube-variation-2 {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/78_Social_media_Youtube_variation-2.svg');
}

i.scania-icon-save-download,
span.scania-icon-save-download {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/84_Save-54-72px.svg');
}

i.scania-icon-emergency,
span.scania-icon-emergency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/79_Emergency_54-72px.svg');
}

i.scania-icon-time,
span.scania-icon-time {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/80_Time-54-72px.svg');
}

i.scania-icon-battery,
span.scania-icon-battery {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/81_Battery_54-72px.svg');
}

i.scania-icon-date,
span.scania-icon-date {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/82_Date-54-72px.svg');
}

i.scania-icon-sound,
span.scania-icon-sound {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/83_Sound-54-72px.svg');
}

i.scania-icon-no-photo,
span.scania-icon-no-photo {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/92_No_photo-54-72px.svg');
}

i.scania-icon-no-smoking,
span.scania-icon-no-smoking {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/93_No_smoking-54-72px.svg');
}

i.scania-icon-no-drugs-or-alcohol,
span.scania-icon-no-drugs-or-alcohol {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/94_No_drugs_or_alcohol-54-72px.svg');
}

i.scania-icon-drivers-licence-required,
span.scania-icon-drivers-licence-required {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/95_Drivers_licence_required-54-72px.svg');
}

i.scania-icon-forbidden-to-enter-course,
span.scania-icon-forbidden-to-enter-course {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/96_Forbidden_to_enter_course-54-72px.svg');
}

i.scania-icon-wear-seatbelt,
span.scania-icon-wear-seatbelt {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/97_Wear_seatbelt-54-72px.svg');
}

i.scania-icon-no-phone-during-driving,
span.scania-icon-no-phone-during-driving {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/98_No_phone_during_driving-54-72px.svg');
}

i.scania-icon-listen-to-demo-driver,
span.scania-icon-listen-to-demo-driver {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/99_Listen_to_demo_driver-54-72px.svg');
}

i.scania-icon-connected-services-bus,
span.scania-icon-connected-services-bus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/100_Connected_services_bus-54-72px.svg');
}

i.scania-icon-info-round,
span.scania-icon-info-round {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/101_Info_round-54-72px.svg');
}

i.scania-icon-call-us,
span.scania-icon-call-us {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/102_Call_us_54-72px.svg');
}

i.scania-icon-link,
span.scania-icon-link {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/103_Link-icon-24-48px.svg');
}

i.scania-icon-truck-configurator,
span.scania-icon-truck-configurator {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/104_Truck-configurator-24-48px.svg');
}

i.scania-icon-change,
span.scania-icon-change {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/105_Change-24-48px.svg');
}

i.scania-icon-edit,
span.scania-icon-edit {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/106_Edit-24-48px.svg');
}

i.scania-icon-conversation,
span.scania-icon-conversation {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/107_Conversation-24-48px.svg');
}

i.scania-icon-settings,
span.scania-icon-settings {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/108_Settings-24-48px.svg');
}

i.scania-icon-box,
span.scania-icon-box {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Box_24_48px.svg');
}

i.scania-icon-crane,
span.scania-icon-crane {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Crane-24-48px.svg');
}

i.scania-icon-fifth-wheel,
span.scania-icon-fifth-wheel {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Fifth_wheel-24-48px.svg');
}

i.scania-icon-fire-engine,
span.scania-icon-fire-engine {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Fire_engine-24-48px.svg');
}

i.scania-icon-hook-lift,
span.scania-icon-hook-lift {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Hook_lift-24-48px.svg');
}

i.scania-icon-recovery-body,
span.scania-icon-recovery-body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Recovery_body-24-48px.svg');
}

i.scania-icon-refuse-collection-body,
span.scania-icon-refuse-collection-body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Refuse_collection_body-24-48px.svg');
}

i.scania-icon-tail-lift,
span.scania-icon-tail-lift {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Tail_lift-24-48px.svg');
}

i.scania-icon-tank-body,
span.scania-icon-tank-body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Tank_body-24-48px.svg');
}

i.scania-icon-timber-body,
span.scania-icon-timber-body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Timber_body-24-48px.svg');
}

i.scania-icon-tipper_body,
span.scania-icon-tipper_body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Tipper_body-24-48px.svg');
}

i.scania-icon-trailer,
span.scania-icon-trailer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Trailer-24-48px.svg');
}

i.scania-icon-vehicle-transport-body,
span.scania-icon-vehicle-transport-body {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/Vehicle_transport_body-24-48px.svg');
}

i.scania-icon-truck-service,
span.scania-icon-truck-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/01_SIS_Truck_service-54-72px.svg');
}

i.scania-icon-bus-service,
span.scania-icon-bus-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/02_SIS_Bus_service-54-72px.svg');
}

i.scania-icon-engine-service,
span.scania-icon-engine-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/03_SIS_Engines_service-54-72px.svg');
}

i.scania-icon-marine-engine-service,
span.scania-icon-marine-engine-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/04_SIS_Marine_engine_service-54-72px.svg');
}

i.scania-icon-genstes-service,
span.scania-icon-genstes-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/05_SIS_Scania_gensets_service-54-72px.svg');
}

i.scania-icon-24h-breakdown-service,
span.scania-icon-24h-breakdown-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/06_SIS_24h_emergency_breakdown_service-54-72px.svg');
}

i.scania-icon-accident-repairs,
span.scania-icon-accident-repairs {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/07_SIS_Accident_repairs-54-72px.svg');
}

i.scania-icon-towing-recovery-service,
span.scania-icon-towing-recovery-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/08_SIS_Towing_and_recovery_service-54-72px.svg');
}

i.scania-icon-toll-collect-recivery-service,
span.scania-icon-toll-collect-recivery-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/09_SIS_Toll_collect_and_recovery_service-54-72px.svg');
}

i.scania-icon-tyre-service,
span.scania-icon-tyre-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/10_SIS_Tyre_service-54-72px.svg');
}

i.scania-icon-vehicle-washing,
span.scania-icon-vehicle-washing {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/11_SIS_Vehicle_washing-54-72px.svg');
}

i.scania-icon-vehicle-rental,
span.scania-icon-vehicle-rental {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/12_SIS_Vehicle_rental-54-72px.svg');
}

i.scania-icon-truck-sales,
span.scania-icon-truck-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/13_SIS_Truck_sales-54-72px.svg');
}

i.scania-icon-bus-sales,
span.scania-icon-bus-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/14_SIS_Bus_sales-54-72px.svg');
}

i.scania-icon-power-engine-sales,
span.scania-icon-power-engine-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/15_SIS_Power_generation_engine_sales-54-72px.svg');
}

i.scania-icon-marine-engine-sales,
span.scania-icon-marine-engine-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/16_SIS_Marine_engine_sales-54-72px.svg');
}

i.scania-icon-genstes-sales,
span.scania-icon-genstes-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/17_SIS_Scania_gensets_sales-54-72px.svg');
}

i.scania-icon-parts-sales,
span.scania-icon-parts-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/18_SIS_Scania_parts_sales-54-72px.svg');
}

i.scania-icon-digital-tachograph-download,
span.scania-icon-digital-tachograph-download {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/19_SIS_Digital_tachograph_data_download-54-72px.svg');
}

i.scania-icon-digital-tachograph-inspection,
span.scania-icon-digital-tachograph-inspection {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/20_SIS_Digital_tachograph_inspection_and_repairs-54-72px.svg');
}

i.scania-icon-analogue-tachograph-inspection,
span.scania-icon-analogue-tachograph-inspection {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/21_SIS_Analogue_tachograph_inspection_and_repairs-54-72px.svg');
}

i.scania-icon-roller-brake-test,
span.scania-icon-roller-brake-test {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/22_SIS_Roller_brake_test-54-72px.svg');
}

i.scania-icon-trailer-service,
span.scania-icon-trailer-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/23_SIS_Trailer_service-54-72px.svg');
}

i.scania-icon-refrigeration-service,
span.scania-icon-refrigeration-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/24_SIS_Transport_refrigeration_unit_service-54-72px.svg');
}

i.scania-icon-tarpaulin-service,
span.scania-icon-tarpaulin-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/25_SIS_Tarpaulin_service-54-72px.svg');
}

i.scania-icon-adr-service,
span.scania-icon-adr-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/26_SIS_ADR_Vehicle_service-54-72px.svg');
}

i.scania-icon-hydraulics-service,
span.scania-icon-hydraulics-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/27_SIS_Hydraulics_bodywork_service-54-72px.svg');
}

i.scania-icon-used-vehicle-sales,
span.scania-icon-used-vehicle-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/28_SIS_Used_vehicle_sales-54-72px.svg');
}

i.scania-icon-mining-service,
span.scania-icon-mining-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/29_SIS_Mining_service-54-72px.svg');
}

i.scania-icon-mining-sales,
span.scania-icon-mining-sales {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/30_SIS_Mining_sales-54-72px.svg');
}

i.scania-icon-tail-lift-service,
span.scania-icon-tail-lift-service {
  background-image: url('https://static.scania.com/resources/icons/scania/sis-icons/SVG_POS/31_SIS_Tail_lift_service-54-72px.svg');
}

i.scania-icon-fixed-price-repairs,
span.scania-icon-fixed-price-repairs {
  background-image: url('https://static.scania.com/resources/icons/scania/products-services/SVG_POS/01_Fixed_price_repairs_24-48px.svg');
}

i.scania-icon-service_exchange,
span.scania-icon-service_exchange {
  background-image: url('https://static.scania.com/resources/icons/scania/products-services/SVG_POS/02_Service_exchange_24-48px.svg');
}

i.neg.scania-icon-find-a-dealer,
span.neg.scania-icon-find-a-dealer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/01_Find_a_dealer-54-72px_neg.svg');
}

i.neg.scania-icon-search,
span.neg.scania-icon-search {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/02_Icon_search-54-72px_neg.svg');
}

i.neg.scania-icon-close-input,
span.neg.scania-icon-close-input {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/03_Search-desktop_in-field-delete-54-72px_neg.svg');
}

i.neg.scania-icon-search-mobile,
span.neg.scania-icon-search-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/04_Search-mobile_in-field-delete-54-72px_neg.svg');
}

i.neg.scania-icon-menu-mobile,
span.neg.scania-icon-menu-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/05_Menu_mobile-54-72px_neg.svg');
}

i.neg.scania-icon-close-mobile-menu,
span.neg.scania-icon-close-mobile-menu {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/06_Menu_close_button_Mobile-54-72px_neg.svg');
}

i.neg.scania-icon-menu-back-button,
span.neg.scania-icon-menu-back-button {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/07_Menu_back_button-54-72px_neg.svg');
}

i.neg.scania-icon-my-scania-mobile,
span.neg.scania-icon-my-scania-mobile {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/08_My_scania_Mobile-54-72px_neg.svg');
}

i.neg.scania-icon-share-social-media,
span.neg.scania-icon-share-social-media {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/09_Share_page_tool_share_icon-54-72px_neg.svg');
}

i.neg.scania-icon-share-page-tool,
span.neg.scania-icon-share-page-tool {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/10_Share_page_tool-54-72px_neg.svg');
}

i.neg.scania-icon-video-play,
span.neg.scania-icon-video-play {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/11_Video_play_icon-54-72px_neg.svg');
}

i.neg.scania-icon-find-a-dealer,
span.neg.scania-icon-find-a-dealer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/12_Find_a_dealer_CTA-54-72px_neg.svg');
}

i.neg.scania-icon-open-accordian-plus,
span.neg.scania-icon-open-accordian-plus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/13_Open_accordian_plus_Mobile-54-72px_neg.svg');
}

i.neg.scania-icon-close-accordian-minus,
span.neg.scania-icon-close-accordian-minus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/14_Close_accordian_minus_icon_Mobile-54-72px_neg.svg');
}

i.neg.scania-icon-tick,
span.neg.scania-icon-tick {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/15_Tick_icon-54-72px_neg.svg');
}

i.neg.scania-icon-filter-dropdown,
span.neg.scania-icon-filter-dropdown {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/16_Filter_drop_down_icon-54-72px_neg.svg');
}

i.neg.scania-icon-dealer-locator-detect,
span.neg.scania-icon-dealer-locator-detect {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/17_Dealer_locator_Detect_location_54-72px_neg.svg');
}

i.neg.scania-icon-dealer-locator-map-pin,
span.neg.scania-icon-dealer-locator-map-pin {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/18_Dealer_locator_map_pin_filled-54-72px_neg.svg');
}

i.neg.scania-icon-dealer-locator-current,
span.neg.scania-icon-dealer-locator-current {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/19_Dealer_locator_Current_location_pin-54-72px_neg.svg');
}

i.neg.scania-icon-job-posting-location,
span.neg.scania-icon-job-posting-location {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/20_Job_posting_info_Location_generic-54-72px_neg.svg');
}

i.neg.scania-icon-job-posting-workarea,
span.neg.scania-icon-job-posting-workarea {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/21_Job_posting_info_Location_generic-54-72px_neg.svg');
}

i.neg.scania-icon-job-posting-closing-date,
span.neg.scania-icon-job-posting-closing-date {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/22_Closing_date-54-72px_neg.svg');
}

i.neg.scania-icon-email,
span.neg.scania-icon-email {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/23_E-mail_US-54-72px_neg.svg');
}

i.neg.scania-icon-dealer-website,
span.neg.scania-icon-dealer-website {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/24_View_dealer_website-54-72px_neg.svg');
}

i.neg.scania-icon-dealer-direction,
span.neg.scania-icon-dealer-direction {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/25_Dealer_key_actions_Get_directions_generic_54-72px_neg.svg');
}

i.neg.scania-icon-truck,
span.neg.scania-icon-truck {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/26_Truck-54-72px_neg.svg');
}

i.neg.scania-icon-engine,
span.neg.scania-icon-engine {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/27_Engine-54-72px_neg.svg');
}

i.neg.scania-icon-bus,
span.neg.scania-icon-bus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/28_Bus-54-72px_neg.svg');
}

i.neg.scania-icon-boat,
span.neg.scania-icon-boat {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/29_Boat-54-72px_neg.svg');
}

i.neg.scania-icon-finance,
span.neg.scania-icon-finance {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/30_Finance-54-72px_neg.svg');
}

i.neg.scania-icon-conveyorbelt,
span.neg.scania-icon-conveyorbelt {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/31_Conveyorbelt_Machinery-54-72px_neg.svg');
}

i.neg.scania-icon-powergen,
span.neg.scania-icon-powergen {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/32_Powergen-54-72px_neg.svg');
}

i.neg.scania-icon-insurance,
span.neg.scania-icon-insurance {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/33_Insurance_risk_management-54-72px_neg.svg');
}

i.neg.scania-icon-repairs,
span.neg.scania-icon-repairs {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/34_Repairs-54-72px_neg.svg');
}

i.neg.scania-icon-connected-services,
span.neg.scania-icon-connected-services {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/35_Connected_services-54-72px_neg.svg');
}

i.neg.scania-icon-training-classroom,
span.neg.scania-icon-training-classroom {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/36_Training_Classroom-54-72px_neg.svg');
}

i.neg.scania-icon-bus-driver,
span.neg.scania-icon-bus-driver {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/37_Driver_Bus_driver-54-72px_neg.svg');
}

i.neg.scania-icon-business-operator,
span.neg.scania-icon-business-operator {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/38_Business_operator-54-72px_neg.svg');
}

i.neg.scania-icon-passenger,
span.neg.scania-icon-passenger {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/39_Passanger-54-72px_neg.svg');
}

i.neg.scania-icon-mechanic-technician,
span.neg.scania-icon-mechanic-technician {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/40_Mechanic_Technician-54-72px_neg.svg');
}

i.neg.scania-icon-concrete-mixer,
span.neg.scania-icon-concrete-mixer {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/42_Concrete_mixer-54-72px_neg.svg');
}

i.neg.scania-icon-truck-assembly-component,
span.neg.scania-icon-truck-assembly-component {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/43_Truck_assembly-54-72px_neg.svg');
}

i.neg.scania-icon-bus-application,
span.neg.scania-icon-bus-application {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/44_Bus_application-54-72px_neg.svg');
}

i.neg.scania-icon-engine-application,
span.neg.scania-icon-engine-application {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/45_Engine_application-54-72px_neg.svg');
}

i.neg.scania-icon-fuel-economy,
span.neg.scania-icon-fuel-economy {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/46_Fuel_economy-54-72px_neg.svg');
}

i.neg.scania-icon-sustainability,
span.neg.scania-icon-sustainability {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/47_Sustainabillity_Environment-54-72px_neg.svg');
}

i.neg.scania-icon-comfort-passenger,
span.neg.scania-icon-comfort-passenger {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/48_Comfort_Passanger_environment-54-72px_neg.svg');
}

i.neg.scania-icon-driver-omptimization,
span.neg.scania-icon-driver-omptimization {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/49_Driver_optimisation-54-72px_neg.svg');
}

i.neg.scania-icon-uptime,
span.neg.scania-icon-uptime {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/50_Uptime-54-72px_neg.svg');
}

i.neg.scania-icon-productivity,
span.neg.scania-icon-productivity {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/51_Productivity-54-72px_neg.svg');
}

i.neg.scania-icon-business-growth,
span.neg.scania-icon-business-growth {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/52_Business_growth-54-72px_neg.svg');
}

i.neg.scania-icon-efficiency,
span.neg.scania-icon-efficiency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/53_Efficiency-54-72px_neg.svg');
}

i.neg.scania-icon-condition-roads,
span.neg.scania-icon-condition-roads {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/54_Conditions_roads-54-72px_neg.svg');
}

i.neg.scania-icon-safety,
span.neg.scania-icon-safety {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/55_Safety_54-72px_neg.svg');
}

i.neg.scania-icon-quality-engineering,
span.neg.scania-icon-quality-engineering {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/56_Quality_Engineering-54-72px_neg.svg');
}

i.neg.scania-icon-toe,
span.neg.scania-icon-toe {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/57_TOE-54-72px_neg.svg');
}

i.neg.scania-icon-alternative-fuels,
span.neg.scania-icon-alternative-fuels {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/58_Alternative_fuels-54-72px_neg.svg');
}

i.neg.scania-icon-tma,
span.neg.scania-icon-tma {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/59_TMA-54-72px_neg.svg');
}

i.neg.scania-icon-payload,
span.neg.scania-icon-payload {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/60_Payload-54-72px_neg.svg');
}

i.neg.scania-icon-driveability,
span.neg.scania-icon-driveability {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/61_Driveability-54-72px_neg.svg');
}

i.neg.scania-icon-ecolution-analysis,
span.neg.scania-icon-ecolution-analysis {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/62_Ecolution_analysis-54-72px_neg.svg');
}

i.neg.scania-icon-ecolution-solutions,
span.neg.scania-icon-ecolution-solutions {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/63_Ecolution_solutions-54-72px_neg.svg');
}

i.neg.scania-icon-ecolution-results,
span.neg.scania-icon-ecolution-results {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/64_Ecolution_results-54-72px_neg.svg');
}

i.neg.scania-icon-fuel-efficency,
span.neg.scania-icon-fuel-efficency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/65_Fuel_efficency-54-72px_neg.svg');
}

i.neg.scania-icon-co2-emissions,
span.neg.scania-icon-co2-emissions {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/66_Co2_emissions-54-72px_neg.svg');
}

i.neg.scania-icon-miles-capacity,
span.neg.scania-icon-miles-capacity {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/67_Miles_capacity-54-72px_neg.svg');
}

i.neg.scania-icon-events,
span.neg.scania-icon-events {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/68_Events-54-72px_neg.svg');
}

i.neg.scania-icon-truck-assembly,
span.neg.scania-icon-truck-assembly {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/69_Truck_assembly-54-72px_neg.svg');
}

i.neg.scania-icon-waiting-time,
span.neg.scania-icon-waiting-time {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/70_Waiting-time-54-72px_neg.svg');
}

i.neg.scania-icon-explore,
span.neg.scania-icon-explore {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/71_Explore-54-72px_neg.svg');
}

i.neg.scania-icon-see-details,
span.neg.scania-icon-see-details {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/72_See details-54-72px_neg.svg');
}

i.neg.scania-icon-network-worldwide-open,
span.neg.scania-icon-network-worldwide-open {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/73_Scania_network_worldwide_open_24h-54-72px_neg.svg');
}

i.neg.scania-icon-warranty,
span.neg.scania-icon-warranty {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/74_Warranty-54-72px_neg.svg');
}

i.neg.scania-icon-gear-shift,
span.neg.scania-icon-gear-shift {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/75_Gear_shift-54-72px_neg.svg');
}

i.neg.scania-icon-knowledge,
span.neg.scania-icon-knowledge {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/76_Knowledge-54-72px_neg.svg');
}

i.neg.scania-icon-brake,
span.neg.scania-icon-brake {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/77_Brake-54-72px_neg.svg');
}

i.neg.scania-icon-social-media-facebook,
span.neg.scania-icon-social-media-facebook {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Facebook_neg.svg');
}

i.neg.scania-icon-social-media-flickr,
span.neg.scania-icon-social-media-flickr {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Flickr_neg.svg');
}

i.neg.scania-icon-social-media-googleplus,
span.neg.scania-icon-social-media-googleplus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_GooglePlus_neg.svg');
}

i.neg.scania-icon-social-media-instagram,
span.neg.scania-icon-social-media-instagram {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Instagram_neg.svg');
}

i.neg.scania-icon-social-media-linkedin,
span.neg.scania-icon-social-media-linkedin {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Linkedin_neg.svg');
}

i.neg.scania-icon-social-media-slideshare,
span.neg.scania-icon-social-media-slideshare {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_SlideShare_neg.svg');
}

i.neg.scania-icon-social-media-twitter,
span.neg.scania-icon-social-media-twitter {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Twitter_neg.svg');
}

i.neg.scania-icon-social-media-youtube,
span.neg.scania-icon-social-media-youtube {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Youtube_neg.svg');
}

i.neg.scania-icon-social-media-youtube-variation-2,
span.neg.scania-icon-social-media-youtube-variation-2 {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/78_Social_media_Youtube_variation-2_neg.svg');
}

i.neg.scania-icon-save-download,
span.neg.scania-icon-save-download {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/84_Save-54-72px_neg.svg');
}

i.neg.scania-icon-emergency,
span.neg.scania-icon-emergency {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/79_Emergency_54-72px_neg.svg');
}

i.neg.scania-icon-time,
span.neg.scania-icon-time {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/80_Time-54-72px_neg.svg');
}

i.neg.scania-icon-battery,
span.neg.scania-icon-battery {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/81_Battery_54-72px_neg.svg');
}

i.neg.scania-icon-date,
span.neg.scania-icon-date {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/82_Date-54-72px_neg.svg');
}

i.neg.scania-icon-sound,
span.neg.scania-icon-sound {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/83_Sound-54-72px_neg.svg');
}

i.neg.scania-icon-no-photo,
span.neg.scania-icon-no-photo {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/92_No_photo-54-72px_neg.svg');
}

i.neg.scania-icon-no-smoking,
span.neg.scania-icon-no-smoking {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/93_No_smoking-54-72px_neg.svg');
}

i.neg.scania-icon-no-drugs-or-alcohol,
span.neg.scania-icon-no-drugs-or-alcohol {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/94_No_drugs_or_alcohol-54-72px_neg.svg');
}

i.neg.scania-icon-drivers-licence-required,
span.neg.scania-icon-drivers-licence-required {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/95_Drivers_licence_required-54-72px_neg.svg');
}

i.neg.scania-icon-forbidden-to-enter-course,
span.neg.scania-icon-forbidden-to-enter-course {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/96_Forbidden_to_enter_course-54-72px_neg.svg');
}

i.neg.scania-icon-wear-seatbelt,
span.neg.scania-icon-wear-seatbelt {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/97_Wear_seatbelt-54-72px_neg.svg');
}

i.neg.scania-icon-no-phone-during-driving,
span.neg.scania-icon-no-phone-during-driving {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/98_No_phone_during_driving-54-72px_neg.svg');
}

i.neg.scania-icon-listen-to-demo-driver,
span.neg.scania-icon-listen-to-demo-driver {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/99_Listen_to_demo_driver-54-72px_neg.svg');
}

i.neg.scania-icon-connected-services-bus,
span.neg.scania-icon-connected-services-bus {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/100_Connected_services_bus-54-72px_neg.svg');
}

i.neg.scania-icon-info-round,
span.neg.scania-icon-info-round {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/101_Info_round-54-72px_neg.svg');
}

i.neg.scania-icon-call-us,
span.neg.scania-icon-call-us {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/102_Call_us_54-72px_neg.svg');
}

i.neg.scania-icon-link,
span.neg.scania-icon-link {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_NEG/103_Link-icon-24-48px_neg.svg');
}

i.neg.scania-icon-fixed-price-repairs,
span.neg.scania-icon-fixed-price-repairs {
  background-image: url('https://static.scania.com/resources/icons/scania/products-services/SVG_NEG/01_Fixed_price_repairs_24-48px_neg.svg');
}

i.neg.scania-icon-service_exchange,
span.neg.scania-icon-service_exchange {
  background-image: url('https://static.scania.com/resources/icons/scania/products-services/SVG_NEG/02_Service_exchange_24-48px_neg.svg');
}

i.active.scania-icon-dealer-locator-detect,
span.active.scania-icon-dealer-locator-detect {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/17_Dealer_locator_Detect_location_54-72px-Active.svg');
}

i.scania-truck-configurator,
span.scania-truck-configurator {
  background-image: url('https://static.scania.com/resources/icons/scania/SVG_POS/104_Truck-configurator-24-48px.svg');
}

/*!
 *  Importing Scanic Corporate Icons including Font Awesome version 3.2.1
 */

/* FONT PATH
 * -------------------------- */

/*!
 * Additional Classes not rendered by IcoMoon where Scania Corporate Icons are created, maintained and hosted.
 /* FONT AWESOME CORE
 * -------------------------- */

[class^="icon-"],
[class*=" icon-"] {
   font-weight: normal;
  font-style: normal;
  text-decoration: inherit;
  -webkit-font-smoothing: antialiased;
  *margin-right: .3em;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  text-decoration: inherit;
  display: inline-block;
  speak: none;
}

/* makes the font 33% larger relative to the icon container */

.icon-large:before {
  vertical-align: -10%;
  font-size: 1.3333333333333333em;
}

/* makes sure icons active on rollover in links */

a [class^="icon-"],
a [class*=" icon-"] {
  display: inline;
}

/* increased font size for icon-large */

[class^="icon-"].icon-fixed-width,
[class*=" icon-"].icon-fixed-width {
  display: inline-block;
  width: 1.1428571428571428em;
  text-align: right;
  padding-right: 0.2857142857142857em;
}

[class^="icon-"].icon-fixed-width.icon-large,
[class*=" icon-"].icon-fixed-width.icon-large {
  width: 1.4285714285714286em;
}

.icons-ul {
  margin-left: 2.142857142857143em;
  list-style-type: none;
}

.icons-ul > li {
  position: relative;
}

.icons-ul .icon-li {
  position: absolute;
  left: -2.142857142857143em;
  width: 2.142857142857143em;
  text-align: center;
  line-height: inherit;
}

[class^="icon-"].hide,
[class*=" icon-"].hide {
  display: none;
}

.icon-muted {
  color: #eeeeee;
}

.icon-light {
  color: #ffffff;
}

.icon-dark {
  color: #333333;
}

.icon-border {
  border: solid 1px #eeeeee;
  padding: .2em .25em .15em;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.icon-2x {
  font-size: 2em;
}

.icon-2x.icon-border {
  border-width: 2px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.icon-3x {
  font-size: 3em;
}

.icon-3x.icon-border {
  border-width: 3px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.icon-4x {
  font-size: 4em;
}

.icon-4x.icon-border {
  border-width: 4px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}

.icon-5x {
  font-size: 5em;
}

.icon-5x.icon-border {
  border-width: 5px;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;
}

.icon-6x {
  font-size: 6em;
}

.icon-6x.icon-border {
  border-width: 6px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
}

.icon-7x {
  font-size: 7em;
}

.icon-7x.icon-border {
  border-width: 7px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.icon-8x {
  font-size: 8em;
}

.icon-8x.icon-border {
  border-width: 8px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

.icon-9x {
  font-size: 9em;
}

.icon-9x.icon-border {
  border-width: 9px;
  -webkit-border-radius: 11px;
  -moz-border-radius: 11px;
  border-radius: 11px;
}

.icon-extreme {
font-size: 50em !important;
}

.pull-right {
  float: right;
}

.pull-left {
  float: left;
}

[class^="icon-"].pull-left,
[class*=" icon-"].pull-left {
  margin-right: .3em;
}

[class^="icon-"].pull-right,
[class*=" icon-"].pull-right {
  margin-left: .3em;
}

/* BOOTSTRAP SPECIFIC CLASSES
 * -------------------------- */

/* Bootstrap 2.0 sprites.less reset */

[class^="icon-"],
[class*=" icon-"] {
  display: inline;
  width: auto;
  height: auto;
  line-height: normal;
  vertical-align: baseline;
  background-image: none;
  background-position: 0% 0%;
  background-repeat: repeat;
  margin-top: 0;
}

/* more sprites.less reset */

.icon-white,
.nav-pills > .active > a > [class^="icon-"],
.nav-pills > .active > a > [class*=" icon-"],
.nav-list > .active > a > [class^="icon-"],
.nav-list > .active > a > [class*=" icon-"],
.navbar-inverse .nav > .active > a > [class^="icon-"],
.navbar-inverse .nav > .active > a > [class*=" icon-"],
.dropdown-menu > li > a:hover > [class^="icon-"],
.dropdown-menu > li > a:hover > [class*=" icon-"],
.dropdown-menu > .active > a > [class^="icon-"],
.dropdown-menu > .active > a > [class*=" icon-"],
.dropdown-submenu:hover > a > [class^="icon-"],
.dropdown-submenu:hover > a > [class*=" icon-"] {
  background-image: none;
}

/* keeps Bootstrap styles with and without icons the same */

.btn [class^="icon-"].icon-large,
.nav [class^="icon-"].icon-large,
.btn [class*=" icon-"].icon-large,
.nav [class*=" icon-"].icon-large {
  line-height: .9em;
}

.btn [class^="icon-"].icon-spin,
.nav [class^="icon-"].icon-spin,
.btn [class*=" icon-"].icon-spin,
.nav [class*=" icon-"].icon-spin {
  display: inline-block;
}

.nav-tabs [class^="icon-"],
.nav-pills [class^="icon-"],
.nav-tabs [class*=" icon-"],
.nav-pills [class*=" icon-"],
.nav-tabs [class^="icon-"].icon-large,
.nav-pills [class^="icon-"].icon-large,
.nav-tabs [class*=" icon-"].icon-large,
.nav-pills [class*=" icon-"].icon-large {
  line-height: .9em;
}

.btn [class^="icon-"].pull-left.icon-2x,
.btn [class*=" icon-"].pull-left.icon-2x,
.btn [class^="icon-"].pull-right.icon-2x,
.btn [class*=" icon-"].pull-right.icon-2x {
  margin-top: .18em;
}

.btn [class^="icon-"].icon-spin.icon-large,
.btn [class*=" icon-"].icon-spin.icon-large {
  line-height: .8em;
}

.btn.btn-small [class^="icon-"].pull-left.icon-2x,
.btn.btn-small [class*=" icon-"].pull-left.icon-2x,
.btn.btn-small [class^="icon-"].pull-right.icon-2x,
.btn.btn-small [class*=" icon-"].pull-right.icon-2x {
  margin-top: .25em;
}

.btn.btn-large [class^="icon-"],
.btn.btn-large [class*=" icon-"] {
  margin-top: 0;
}

.btn.btn-large [class^="icon-"].pull-left.icon-2x,
.btn.btn-large [class*=" icon-"].pull-left.icon-2x,
.btn.btn-large [class^="icon-"].pull-right.icon-2x,
.btn.btn-large [class*=" icon-"].pull-right.icon-2x {
  margin-top: .05em;
}

.btn.btn-large [class^="icon-"].pull-left.icon-2x,
.btn.btn-large [class*=" icon-"].pull-left.icon-2x {
  margin-right: .2em;
}

.btn.btn-large [class^="icon-"].pull-right.icon-2x,
.btn.btn-large [class*=" icon-"].pull-right.icon-2x {
  margin-left: .2em;
}

/* Fixes alignment in nav lists */

.nav-list [class^="icon-"],
.nav-list [class*=" icon-"] {
  line-height: inherit;
}

/* EXTRAS
 * -------------------------- */

/* Stacked and layered icon */

.icon-stack {
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  vertical-align: -35%;
}

.icon-stack [class^="icon-"],
.icon-stack [class*=" icon-"] {
  display: block;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1em;
  line-height: inherit;
  *line-height: 2em;
}

.icon-stack .icon-stack-base {
  font-size: 2em;
  *line-height: 1em;
}

/* Animated rotating icon */

.icon-spin {
  display: inline-block;
  -moz-animation: spin 2s infinite linear;
  -o-animation: spin 2s infinite linear;
  -webkit-animation: spin 2s infinite linear;
  animation: spin 2s infinite linear;
}

/* Prevent stack and spinners from being taken inline when inside a link */

a .icon-stack,
a .icon-spin {
  display: inline-block;
  text-decoration: none;
}

@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(359deg);
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
  }
}

@-o-keyframes spin {
  0% {
    -o-transform: rotate(0deg);
  }
  100% {
    -o-transform: rotate(359deg);
  }
}

@-ms-keyframes spin {
  0% {
    -ms-transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(359deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

/* Icon rotations and mirroring */

.icon-rotate-90:before {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
}

.icon-rotate-180:before {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
}

.icon-rotate-270:before {
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}

.icon-flip-horizontal:before {
  -webkit-transform: scale(-1, 1);
  -moz-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  transform: scale(-1, 1);
}

.icon-flip-vertical:before {
  -webkit-transform: scale(1, -1);
  -moz-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  transform: scale(1, -1);
}

/* ensure rotation occurs inside anchor tags */

a .icon-rotate-90:before,
a .icon-rotate-180:before,
a .icon-rotate-270:before,
a .icon-flip-horizontal:before,
a .icon-flip-vertical:before {
  display: inline-block;
}

@font-face {
  font-family: 'Scania Sans';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Regular.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Regular.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Regular.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Regular.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans';
  font-weight: bold;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Bold';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans';
  font-style: italic;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Italic';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Regular.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Regular.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Regular.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Regular.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline';
  font-weight: bold;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline Bold';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansHeadline-Bold.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Regular.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Regular.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Regular.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Regular.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-weight: bold;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.woff2") format("woff2"),
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.woff") format("woff"),
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed Bold';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Bold.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-style: italic;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed Italic';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansSemiCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Regular.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Regular.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Regular.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Regular.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed Bold';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Bold.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-style: italic;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed Italic';
  font-weight: normal;
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.eot");
  src: url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.woff2") format("woff2"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.woff") format("woff"), 
  url("'https://static.scania.com/resources/fonts/scania-sans/ScaniaSansCondensed-Italic.ttf") format("truetype");
}

/* 
The Scania Logotype Stylesheet
The Scania symbol and wordmark should be used in accordance to the guidelines specified in the Brand Manual. 
We do not want our logotype to be downloaded to local servers as updates to the logotype is made to these 
centraly stored versions.

How to use
Include this stylesheet in you application by copying this line of code to your HEAD section:

<link rel="stylesheet" type="text/css" href="https://static.scania.com/resources/logotype/scania/logotype-stylesheet/scania-logotype.css">

Use these HTML tags to show the symbol and wordmark.
<span class="scania wordmark"></span>
<span class="scania symbol"></span>
<span class="scania symbol neg"></span>  For a white wordmark
<span class="scania logotype-vertical-lockup"></span>
*/

.scania .symbol, .scania.symbol {
    display: inline-block;
    vertical-align: middle;
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-symbol.png');
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-symbol.svg'); 
    background-repeat: no-repeat;
    background-size: 48px 46px;
    width: 48px;
    height: 46px;   
    float: left;
    margin-bottom: 15px 
}

.scania .wordmark, .scania.wordmark {
    display: inline-block;
    vertical-align: middle;
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark.png');
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark.svg'); 
    background-repeat: no-repeat;
    background-size: 169px 28px;
    width: 169px;
    height: 28px;
}

.scania .wordmark.neg, .scania.wordmark.neg {
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark-white.png');
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-wordmark-white.svg');  
}

/* Lockups of the symbol and wordmark should be used as an exeption only */

.scania .logotype-vertical-lockup, .scania.logotype-vertical-lockup {
    display: inline-block;
    vertical-align: middle;
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-logotype-vertical-lock-up.png');
    background-image: url('https://static.scania.com/resources/logotype/scania/scania-logotype-vertical-lock-up.svg'); 
    background-repeat: no-repeat;
    background-size: 250px 141px;
    width: 250px;
    height: 141px;    
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9jc3MvY29ycG9yYXRlLXVpL2NvcnBvcmF0ZS11aS1mb250cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JDOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qiw4RkFBOEY7SUFDOUYsOEZBQThGO0lBQzlGLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0dBQWdHO0lBQ2hHLGdHQUFnRztJQUNoRyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0dBQXNHO0lBQ3RHLHNHQUFzRztBQUMxRzs7QUFFQSwwRUFBMEU7O0FBRTFFO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpSEFBaUg7SUFDakgsaUhBQWlIO0lBQ2pILDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBR0E7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHdGQUF3RjtFQUN4Rjs7O3dHQUdzRztBQUN4Rzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIscUZBQXFGO0VBQ3JGOzs7cUdBR21HO0FBQ3JHOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixxRkFBcUY7RUFDckY7OztxR0FHbUc7QUFDckc7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLHVGQUF1RjtFQUN2Rjs7O3VHQUdxRztBQUN2Rzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsdUZBQXVGO0VBQ3ZGOzs7dUdBR3FHO0FBQ3ZHOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixnR0FBZ0c7RUFD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SUFDckIsc0JBQXNCO0lBQ3RCLGlIQUFpSDtJQUNqSCxpSEFBaUg7SUFDakgsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJjb3Jwb3JhdGUtdWktZm9udHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIFxyXG5UaGUgU2NhbmlhIExvZ290eXBlIFN0eWxlc2hlZXRcclxuVGhlIFNjYW5pYSBzeW1ib2wgYW5kIHdvcmRtYXJrIHNob3VsZCBiZSB1c2VkIGluIGFjY29yZGFuY2UgdG8gdGhlIGd1aWRlbGluZXMgc3BlY2lmaWVkIGluIHRoZSBCcmFuZCBNYW51YWwuIFxyXG5XZSBkbyBub3Qgd2FudCBvdXIgbG9nb3R5cGUgdG8gYmUgZG93bmxvYWRlZCB0byBsb2NhbCBzZXJ2ZXJzIGFzIHVwZGF0ZXMgdG8gdGhlIGxvZ290eXBlIGlzIG1hZGUgdG8gdGhlc2UgXHJcbmNlbnRyYWx5IHN0b3JlZCB2ZXJzaW9ucy5cclxuXHJcbkhvdyB0byB1c2VcclxuSW5jbHVkZSB0aGlzIHN0eWxlc2hlZXQgaW4geW91IGFwcGxpY2F0aW9uIGJ5IGNvcHlpbmcgdGhpcyBsaW5lIG9mIGNvZGUgdG8geW91ciBIRUFEIHNlY3Rpb246XHJcblxyXG48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9sb2dvdHlwZS1zdHlsZXNoZWV0L3NjYW5pYS1sb2dvdHlwZS5jc3NcIj5cclxuXHJcblVzZSB0aGVzZSBIVE1MIHRhZ3MgdG8gc2hvdyB0aGUgc3ltYm9sIGFuZCB3b3JkbWFyay5cclxuPHNwYW4gY2xhc3M9XCJzY2FuaWEgd29yZG1hcmtcIj48L3NwYW4+XHJcbjxzcGFuIGNsYXNzPVwic2NhbmlhIHN5bWJvbFwiPjwvc3Bhbj5cclxuPHNwYW4gY2xhc3M9XCJzY2FuaWEgc3ltYm9sIG5lZ1wiPjwvc3Bhbj4gIEZvciBhIHdoaXRlIHdvcmRtYXJrXHJcbjxzcGFuIGNsYXNzPVwic2NhbmlhIGxvZ290eXBlLXZlcnRpY2FsLWxvY2t1cFwiPjwvc3Bhbj5cclxuKi9cclxuXHJcbi5zY2FuaWEgLnN5bWJvbCwgLnNjYW5pYS5zeW1ib2wge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL3NjYW5pYS1zeW1ib2wucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9zY2FuaWEtc3ltYm9sLnN2ZycpOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ4cHggNDZweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4OyAgIFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4IFxyXG59XHJcblxyXG4uc2NhbmlhIC53b3JkbWFyaywgLnNjYW5pYS53b3JkbWFyayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLXdvcmRtYXJrLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLXdvcmRtYXJrLnN2ZycpOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2OXB4IDI4cHg7XHJcbiAgICB3aWR0aDogMTY5cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5zY2FuaWEgLndvcmRtYXJrLm5lZywgLnNjYW5pYS53b3JkbWFyay5uZWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLXdvcmRtYXJrLXdoaXRlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLXdvcmRtYXJrLXdoaXRlLnN2ZycpOyAgXHJcbn1cclxuXHJcbi8qIExvY2t1cHMgb2YgdGhlIHN5bWJvbCBhbmQgd29yZG1hcmsgc2hvdWxkIGJlIHVzZWQgYXMgYW4gZXhlcHRpb24gb25seSAqL1xyXG5cclxuLnNjYW5pYSAubG9nb3R5cGUtdmVydGljYWwtbG9ja3VwLCAuc2NhbmlhLmxvZ290eXBlLXZlcnRpY2FsLWxvY2t1cCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLWxvZ290eXBlLXZlcnRpY2FsLWxvY2stdXAucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9zY2FuaWEtbG9nb3R5cGUtdmVydGljYWwtbG9jay11cC5zdmcnKTsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNTBweCAxNDFweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMTQxcHg7ICAgIFxyXG59XG5AaW1wb3J0IHVybChcIi9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvY3lyaWxsaWMvc2NhbmlhLWN5cmlsbGljLWZvbnRzLmNzc1wiKTtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtUmVndWxhci5lb3RcIik7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUJvbGQuZW90XCIpO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtQm9sZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIEJvbGQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMnO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgSXRhbGljJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUl0YWxpYy5lb3RcIik7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBIZWFkbGluZSc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0hlYWRsaW5lLVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNIZWFkbGluZS1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zSGVhZGxpbmUtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNIZWFkbGluZS1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNIZWFkbGluZS1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgSGVhZGxpbmUnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0hlYWRsaW5lLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0hlYWRsaW5lLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgSGVhZGxpbmUgQm9sZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0hlYWRsaW5lLUJvbGQuZW90XCIpO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgU2VtaSBDb25kZW5zZWQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLVJlZ3VsYXIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBTZW1pIENvbmRlbnNlZCc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQuZW90XCIpO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBTZW1pIENvbmRlbnNlZCBCb2xkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBTZW1pIENvbmRlbnNlZCc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgc3JjOiB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIFNlbWkgQ29uZGVuc2VkIEl0YWxpYyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBDb25kZW5zZWQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtUmVndWxhci5lb3RcIik7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgQ29uZGVuc2VkJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBDb25kZW5zZWQgQm9sZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBDb25kZW5zZWQnO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgQ29uZGVuc2VkIEl0YWxpYyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbi8qIVxyXG4gKiAgSW1wb3J0aW5nIFNjYW5pYyBDb3Jwb3JhdGUgSWNvbnMgaW5jbHVkaW5nIEZvbnQgQXdlc29tZSB2ZXJzaW9uIDMuMi4xXHJcbiAqL1xyXG4vKiBGT05UIFBBVEhcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5AaW1wb3J0IHVybChcIi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ZvbnRzL2NvcnBvcmF0ZS1pY29ucy9zdHlsZS5jc3NcIik7XHJcblxyXG4vKiFcclxuICogQWRkaXRpb25hbCBDbGFzc2VzIG5vdCByZW5kZXJlZCBieSBJY29Nb29uIHdoZXJlIFNjYW5pYSBDb3Jwb3JhdGUgSWNvbnMgYXJlIGNyZWF0ZWQsIG1haW50YWluZWQgYW5kIGhvc3RlZC5cclxuIC8qIEZPTlQgQVdFU09NRSBDT1JFXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbltjbGFzc149XCJpY29uLVwiXSxcclxuW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAqbWFyZ2luLXJpZ2h0OiAuM2VtO1xyXG59XHJcbltjbGFzc149XCJpY29uLVwiXTpiZWZvcmUsXHJcbltjbGFzcyo9XCIgaWNvbi1cIl06YmVmb3JlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHNwZWFrOiBub25lO1xyXG59XHJcbi8qIG1ha2VzIHRoZSBmb250IDMzJSBsYXJnZXIgcmVsYXRpdmUgdG8gdGhlIGljb24gY29udGFpbmVyICovXHJcbi5pY29uLWxhcmdlOmJlZm9yZSB7XHJcbiAgdmVydGljYWwtYWxpZ246IC0xMCU7XHJcbiAgZm9udC1zaXplOiAxLjMzMzMzMzMzMzMzMzMzMzNlbTtcclxufVxyXG4vKiBtYWtlcyBzdXJlIGljb25zIGFjdGl2ZSBvbiByb2xsb3ZlciBpbiBsaW5rcyAqL1xyXG5hIFtjbGFzc149XCJpY29uLVwiXSxcclxuYSBbY2xhc3MqPVwiIGljb24tXCJdIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLyogaW5jcmVhc2VkIGZvbnQgc2l6ZSBmb3IgaWNvbi1sYXJnZSAqL1xyXG5bY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1maXhlZC13aWR0aCxcclxuW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLWZpeGVkLXdpZHRoIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEuMTQyODU3MTQyODU3MTQyOGVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjg1NzE0Mjg1NzE0Mjg1N2VtO1xyXG59XHJcbltjbGFzc149XCJpY29uLVwiXS5pY29uLWZpeGVkLXdpZHRoLmljb24tbGFyZ2UsXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1maXhlZC13aWR0aC5pY29uLWxhcmdlIHtcclxuICB3aWR0aDogMS40Mjg1NzE0Mjg1NzE0Mjg2ZW07XHJcbn1cclxuLmljb25zLXVsIHtcclxuICBtYXJnaW4tbGVmdDogMi4xNDI4NTcxNDI4NTcxNDNlbTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmljb25zLXVsID4gbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaWNvbnMtdWwgLmljb24tbGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMi4xNDI4NTcxNDI4NTcxNDNlbTtcclxuICB3aWR0aDogMi4xNDI4NTcxNDI4NTcxNDNlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuW2NsYXNzXj1cImljb24tXCJdLmhpZGUsXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaWNvbi1tdXRlZCB7XHJcbiAgY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuLmljb24tbGlnaHQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5pY29uLWRhcmsge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcclxuICBwYWRkaW5nOiAuMmVtIC4yNWVtIC4xNWVtO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uaWNvbi0yeCB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuLmljb24tMnguaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uaWNvbi0zeCB7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuLmljb24tM3guaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uaWNvbi00eCB7XHJcbiAgZm9udC1zaXplOiA0ZW07XHJcbn1cclxuLmljb24tNHguaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogNHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uaWNvbi01eCB7XHJcbiAgZm9udC1zaXplOiA1ZW07XHJcbn1cclxuLmljb24tNXguaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLmljb24tNngge1xyXG4gIGZvbnQtc2l6ZTogNmVtO1xyXG59XHJcbi5pY29uLTZ4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDZweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLmljb24tN3gge1xyXG4gIGZvbnQtc2l6ZTogN2VtO1xyXG59XHJcbi5pY29uLTd4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDdweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDlweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDlweDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuLmljb24tOHgge1xyXG4gIGZvbnQtc2l6ZTogOGVtO1xyXG59XHJcbi5pY29uLTh4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDhweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLTl4IHtcclxuICBmb250LXNpemU6IDllbTtcclxufVxyXG4uaWNvbi05eC5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA5cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTFweDtcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG59XHJcblxyXG4uaWNvbi1leHRyZW1lIHtcclxuZm9udC1zaXplOiA1MGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnB1bGwtbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuW2NsYXNzXj1cImljb24tXCJdLnB1bGwtbGVmdCxcclxuW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLWxlZnQge1xyXG4gIG1hcmdpbi1yaWdodDogLjNlbTtcclxufVxyXG5bY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1yaWdodCxcclxuW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLXJpZ2h0IHtcclxuICBtYXJnaW4tbGVmdDogLjNlbTtcclxufVxyXG4vKiBCT09UU1RSQVAgU1BFQ0lGSUMgQ0xBU1NFU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBCb290c3RyYXAgMi4wIHNwcml0ZXMubGVzcyByZXNldCAqL1xyXG5bY2xhc3NePVwiaWNvbi1cIl0sXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLyogbW9yZSBzcHJpdGVzLmxlc3MgcmVzZXQgKi9cclxuLmljb24td2hpdGUsXHJcbi5uYXYtcGlsbHMgPiAuYWN0aXZlID4gYSA+IFtjbGFzc149XCJpY29uLVwiXSxcclxuLm5hdi1waWxscyA+IC5hY3RpdmUgPiBhID4gW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLm5hdi1saXN0ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5uYXYtbGlzdCA+IC5hY3RpdmUgPiBhID4gW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLm5hdmJhci1pbnZlcnNlIC5uYXYgPiAuYWN0aXZlID4gYSA+IFtjbGFzc149XCJpY29uLVwiXSxcclxuLm5hdmJhci1pbnZlcnNlIC5uYXYgPiAuYWN0aXZlID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyID4gW2NsYXNzXj1cImljb24tXCJdLFxyXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciA+IFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3MqPVwiIGljb24tXCJdLFxyXG4uZHJvcGRvd24tc3VibWVudTpob3ZlciA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1zdWJtZW51OmhvdmVyID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuLyoga2VlcHMgQm9vdHN0cmFwIHN0eWxlcyB3aXRoIGFuZCB3aXRob3V0IGljb25zIHRoZSBzYW1lICovXHJcbi5idG4gW2NsYXNzXj1cImljb24tXCJdLmljb24tbGFyZ2UsXHJcbi5uYXYgW2NsYXNzXj1cImljb24tXCJdLmljb24tbGFyZ2UsXHJcbi5idG4gW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLWxhcmdlLFxyXG4ubmF2IFtjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1sYXJnZSB7XHJcbiAgbGluZS1oZWlnaHQ6IC45ZW07XHJcbn1cclxuLmJ0biBbY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1zcGluLFxyXG4ubmF2IFtjbGFzc149XCJpY29uLVwiXS5pY29uLXNwaW4sXHJcbi5idG4gW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLXNwaW4sXHJcbi5uYXYgW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLXNwaW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubmF2LXRhYnMgW2NsYXNzXj1cImljb24tXCJdLFxyXG4ubmF2LXBpbGxzIFtjbGFzc149XCJpY29uLVwiXSxcclxuLm5hdi10YWJzIFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5uYXYtcGlsbHMgW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLm5hdi10YWJzIFtjbGFzc149XCJpY29uLVwiXS5pY29uLWxhcmdlLFxyXG4ubmF2LXBpbGxzIFtjbGFzc149XCJpY29uLVwiXS5pY29uLWxhcmdlLFxyXG4ubmF2LXRhYnMgW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLWxhcmdlLFxyXG4ubmF2LXBpbGxzIFtjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1sYXJnZSB7XHJcbiAgbGluZS1oZWlnaHQ6IC45ZW07XHJcbn1cclxuLmJ0biBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngsXHJcbi5idG4gW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLWxlZnQuaWNvbi0yeCxcclxuLmJ0biBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4LFxyXG4uYnRuIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4IHtcclxuICBtYXJnaW4tdG9wOiAuMThlbTtcclxufVxyXG4uYnRuIFtjbGFzc149XCJpY29uLVwiXS5pY29uLXNwaW4uaWNvbi1sYXJnZSxcclxuLmJ0biBbY2xhc3MqPVwiIGljb24tXCJdLmljb24tc3Bpbi5pY29uLWxhcmdlIHtcclxuICBsaW5lLWhlaWdodDogLjhlbTtcclxufVxyXG4uYnRuLmJ0bi1zbWFsbCBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngsXHJcbi5idG4uYnRuLXNtYWxsIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngsXHJcbi5idG4uYnRuLXNtYWxsIFtjbGFzc149XCJpY29uLVwiXS5wdWxsLXJpZ2h0Lmljb24tMngsXHJcbi5idG4uYnRuLXNtYWxsIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4IHtcclxuICBtYXJnaW4tdG9wOiAuMjVlbTtcclxufVxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzXj1cImljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtcmlnaHQuaWNvbi0yeCB7XHJcbiAgbWFyZ2luLXRvcDogLjA1ZW07XHJcbn1cclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzXj1cImljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4IHtcclxuICBtYXJnaW4tcmlnaHQ6IC4yZW07XHJcbn1cclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzXj1cImljb24tXCJdLnB1bGwtcmlnaHQuaWNvbi0yeCxcclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLXJpZ2h0Lmljb24tMngge1xyXG4gIG1hcmdpbi1sZWZ0OiAuMmVtO1xyXG59XHJcbi8qIEZpeGVzIGFsaWdubWVudCBpbiBuYXYgbGlzdHMgKi9cclxuLm5hdi1saXN0IFtjbGFzc149XCJpY29uLVwiXSxcclxuLm5hdi1saXN0IFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcbi8qIEVYVFJBU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBTdGFja2VkIGFuZCBsYXllcmVkIGljb24gKi9cclxuLmljb24tc3RhY2sge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBsaW5lLWhlaWdodDogMmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiAtMzUlO1xyXG59XHJcbi5pY29uLXN0YWNrIFtjbGFzc149XCJpY29uLVwiXSxcclxuLmljb24tc3RhY2sgW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgKmxpbmUtaGVpZ2h0OiAyZW07XHJcbn1cclxuLmljb24tc3RhY2sgLmljb24tc3RhY2stYmFzZSB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgKmxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuLyogQW5pbWF0ZWQgcm90YXRpbmcgaWNvbiAqL1xyXG4uaWNvbi1zcGluIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLW1vei1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1vLWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuLyogUHJldmVudCBzdGFjayBhbmQgc3Bpbm5lcnMgZnJvbSBiZWluZyB0YWtlbiBpbmxpbmUgd2hlbiBpbnNpZGUgYSBsaW5rICovXHJcbmEgLmljb24tc3RhY2ssXHJcbmEgLmljb24tc3BpbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gIH1cclxufVxyXG5ALW1zLWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICB9XHJcbn1cclxuLyogSWNvbiByb3RhdGlvbnMgYW5kIG1pcnJvcmluZyAqL1xyXG4uaWNvbi1yb3RhdGUtOTA6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKTtcclxufVxyXG4uaWNvbi1yb3RhdGUtMTgwOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKTtcclxufVxyXG4uaWNvbi1yb3RhdGUtMjcwOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKTtcclxufVxyXG4uaWNvbi1mbGlwLWhvcml6b250YWw6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG59XHJcbi5pY29uLWZsaXAtdmVydGljYWw6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xyXG59XHJcbi8qIGVuc3VyZSByb3RhdGlvbiBvY2N1cnMgaW5zaWRlIGFuY2hvciB0YWdzICovXHJcbmEgLmljb24tcm90YXRlLTkwOmJlZm9yZSxcclxuYSAuaWNvbi1yb3RhdGUtMTgwOmJlZm9yZSxcclxuYSAuaWNvbi1yb3RhdGUtMjcwOmJlZm9yZSxcclxuYSAuaWNvbi1mbGlwLWhvcml6b250YWw6YmVmb3JlLFxyXG5hIC5pY29uLWZsaXAtdmVydGljYWw6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxuaVtjbGFzcyo9XCJzY2FuaWEtaWNvbi1cIl0sXHJcbnNwYW5bY2xhc3MqPVwic2NhbmlhLWljb24tXCJdIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTRweDtcclxuICB3aWR0aDogNTRweDtcclxuICBoZWlnaHQ6IDU0cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuaS54cyxcclxuc3Bhbi54cyxcclxuaS5zbSxcclxuc3Bhbi5zbSxcclxuaS5tZCxcclxuc3Bhbi5tZCxcclxuaS5sZyxcclxuc3Bhbi5sZyxcclxuaS54bCxcclxuc3Bhbi54bCxcclxuaS54eGwsXHJcbnNwYW4ueHhsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuaS54cyxcclxuc3Bhbi54cyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5pLnNtLFxyXG5zcGFuLnNtIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcbmkubWQsXHJcbnNwYW4ubWQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTRweDtcclxuICB3aWR0aDogNTRweDtcclxuICBoZWlnaHQ6IDU0cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuaS5sZyxcclxuc3Bhbi5sZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA5MHB4O1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBtYXJnaW46IDhweDtcclxufVxyXG5pLnhsLFxyXG5zcGFuLnhsIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE0MHB4IDE0MHB4O1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaS54eGwsXHJcbnNwYW4ueHhsIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI0MHB4O1xyXG4gIHdpZHRoOiAyNDBweDtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1maW5kLWEtZGVhbGVyLFxyXG5zcGFuLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDFfRmluZF9hX2RlYWxlci01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc2VhcmNoLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNlYXJjaCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wMl9JY29uX3NlYXJjaC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tY2xvc2UtaW5wdXQsXHJcbnNwYW4uc2NhbmlhLWljb24tY2xvc2UtaW5wdXQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDNfU2VhcmNoLWRlc2t0b3BfaW4tZmllbGQtZGVsZXRlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zZWFyY2gtbW9iaWxlLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNlYXJjaC1tb2JpbGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDRfU2VhcmNoLW1vYmlsZV9pbi1maWVsZC1kZWxldGUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW1lbnUtbW9iaWxlLFxyXG5zcGFuLnNjYW5pYS1pY29uLW1lbnUtbW9iaWxlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzA1X01lbnVfbW9iaWxlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jbG9zZS1tb2JpbGUtbWVudSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1jbG9zZS1tb2JpbGUtbWVudSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wNl9NZW51X2Nsb3NlX2J1dHRvbl9Nb2JpbGUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW1lbnUtYmFjay1idXR0b24sXHJcbnNwYW4uc2NhbmlhLWljb24tbWVudS1iYWNrLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wN19NZW51X2JhY2tfYnV0dG9uLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1teS1zY2FuaWEtbW9iaWxlLFxyXG5zcGFuLnNjYW5pYS1pY29uLW15LXNjYW5pYS1tb2JpbGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDhfTXlfc2NhbmlhX01vYmlsZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc2hhcmUtc29jaWFsLW1lZGlhLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNoYXJlLXNvY2lhbC1tZWRpYSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wOV9TaGFyZV9wYWdlX3Rvb2xfc2hhcmVfaWNvbi01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc2hhcmUtcGFnZS10b29sLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNoYXJlLXBhZ2UtdG9vbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMF9TaGFyZV9wYWdlX3Rvb2wtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXZpZGVvLXBsYXksXHJcbnNwYW4uc2NhbmlhLWljb24tdmlkZW8tcGxheSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMV9WaWRlb19wbGF5X2ljb24tNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIsXHJcbnNwYW4uc2NhbmlhLWljb24tZmluZC1hLWRlYWxlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMl9GaW5kX2FfZGVhbGVyX0NUQS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tb3Blbi1hY2NvcmRpYW4tcGx1cyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1vcGVuLWFjY29yZGlhbi1wbHVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEzX09wZW5fYWNjb3JkaWFuX3BsdXNfTW9iaWxlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jbG9zZS1hY2NvcmRpYW4tbWludXMsXHJcbnNwYW4uc2NhbmlhLWljb24tY2xvc2UtYWNjb3JkaWFuLW1pbnVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzE0X0Nsb3NlX2FjY29yZGlhbl9taW51c19pY29uX01vYmlsZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdGljayxcclxuc3Bhbi5zY2FuaWEtaWNvbi10aWNrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzE1X1RpY2tfaWNvbi01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZmlsdGVyLWRyb3Bkb3duLFxyXG5zcGFuLnNjYW5pYS1pY29uLWZpbHRlci1kcm9wZG93biB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xNl9GaWx0ZXJfZHJvcF9kb3duX2ljb24tNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1kZXRlY3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTdfRGVhbGVyX2xvY2F0b3JfRGV0ZWN0X2xvY2F0aW9uXzU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1tYXAtcGluLFxyXG5zcGFuLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLW1hcC1waW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMThfRGVhbGVyX2xvY2F0b3JfbWFwX3Bpbl9maWxsZWQtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWN1cnJlbnQsXHJcbnNwYW4uc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItY3VycmVudCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xOV9EZWFsZXJfbG9jYXRvcl9DdXJyZW50X2xvY2F0aW9uX3Bpbi01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tam9iLXBvc3RpbmctbG9jYXRpb24sXHJcbnNwYW4uc2NhbmlhLWljb24tam9iLXBvc3RpbmctbG9jYXRpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjBfSm9iX3Bvc3RpbmdfaW5mb19Mb2NhdGlvbl9nZW5lcmljLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy13b3JrYXJlYSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy13b3JrYXJlYSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yMV9Kb2JfcG9zdGluZ19pbmZvX0xvY2F0aW9uX2dlbmVyaWMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLWNsb3NpbmctZGF0ZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy1jbG9zaW5nLWRhdGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjJfQ2xvc2luZ19kYXRlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1lbWFpbCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1lbWFpbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yM19FLW1haWxfVVMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWRlYWxlci13ZWJzaXRlLFxyXG5zcGFuLnNjYW5pYS1pY29uLWRlYWxlci13ZWJzaXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzI0X1ZpZXdfZGVhbGVyX3dlYnNpdGUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWRlYWxlci1kaXJlY3Rpb24sXHJcbnNwYW4uc2NhbmlhLWljb24tZGVhbGVyLWRpcmVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yNV9EZWFsZXJfa2V5X2FjdGlvbnNfR2V0X2RpcmVjdGlvbnNfZ2VuZXJpY181NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdHJ1Y2ssXHJcbnNwYW4uc2NhbmlhLWljb24tdHJ1Y2sge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjZfVHJ1Y2stNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWVuZ2luZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1lbmdpbmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjdfRW5naW5lLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1idXMsXHJcbnNwYW4uc2NhbmlhLWljb24tYnVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzI4X0J1cy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYm9hdCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1ib2F0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzI5X0JvYXQtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWZpbmFuY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tZmluYW5jZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zMF9GaW5hbmNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jb252ZXlvcmJlbHQsXHJcbnNwYW4uc2NhbmlhLWljb24tY29udmV5b3JiZWx0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzMxX0NvbnZleW9yYmVsdF9NYWNoaW5lcnktNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXBvd2VyZ2VuLFxyXG5zcGFuLnNjYW5pYS1pY29uLXBvd2VyZ2VuIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzMyX1Bvd2VyZ2VuLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1pbnN1cmFuY2UsXHJcbnNwYW4uc2NhbmlhLWljb24taW5zdXJhbmNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzMzX0luc3VyYW5jZV9yaXNrX21hbmFnZW1lbnQtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXJlcGFpcnMsXHJcbnNwYW4uc2NhbmlhLWljb24tcmVwYWlycyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zNF9SZXBhaXJzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXMsXHJcbnNwYW4uc2NhbmlhLWljb24tY29ubmVjdGVkLXNlcnZpY2VzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzM1X0Nvbm5lY3RlZF9zZXJ2aWNlcy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdHJhaW5pbmctY2xhc3Nyb29tLFxyXG5zcGFuLnNjYW5pYS1pY29uLXRyYWluaW5nLWNsYXNzcm9vbSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zNl9UcmFpbmluZ19DbGFzc3Jvb20tNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWJ1cy1kcml2ZXIsXHJcbnNwYW4uc2NhbmlhLWljb24tYnVzLWRyaXZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zN19Ecml2ZXJfQnVzX2RyaXZlci01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYnVzaW5lc3Mtb3BlcmF0b3IsXHJcbnNwYW4uc2NhbmlhLWljb24tYnVzaW5lc3Mtb3BlcmF0b3Ige1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMzhfQnVzaW5lc3Nfb3BlcmF0b3ItNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXBhc3Nlbmdlcixcclxuc3Bhbi5zY2FuaWEtaWNvbi1wYXNzZW5nZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMzlfUGFzc2FuZ2VyLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1tZWNoYW5pYy10ZWNobmljaWFuLFxyXG5zcGFuLnNjYW5pYS1pY29uLW1lY2hhbmljLXRlY2huaWNpYW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDBfTWVjaGFuaWNfVGVjaG5pY2lhbi01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tY29uY3JldGUtbWl4ZXIsXHJcbnNwYW4uc2NhbmlhLWljb24tY29uY3JldGUtbWl4ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDJfQ29uY3JldGVfbWl4ZXItNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRydWNrLWFzc2VtYmx5LWNvbXBvbmVudCxcclxuc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1hc3NlbWJseS1jb21wb25lbnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDNfVHJ1Y2tfYXNzZW1ibHktNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWJ1cy1hcHBsaWNhdGlvbixcclxuc3Bhbi5zY2FuaWEtaWNvbi1idXMtYXBwbGljYXRpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDRfQnVzX2FwcGxpY2F0aW9uLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1lbmdpbmUtYXBwbGljYXRpb24sXHJcbnNwYW4uc2NhbmlhLWljb24tZW5naW5lLWFwcGxpY2F0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzQ1X0VuZ2luZV9hcHBsaWNhdGlvbi01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZnVlbC1lY29ub215LFxyXG5zcGFuLnNjYW5pYS1pY29uLWZ1ZWwtZWNvbm9teSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy80Nl9GdWVsX2Vjb25vbXktNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXN1c3RhaW5hYmlsaXR5LFxyXG5zcGFuLnNjYW5pYS1pY29uLXN1c3RhaW5hYmlsaXR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzQ3X1N1c3RhaW5hYmlsbGl0eV9FbnZpcm9ubWVudC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tY29tZm9ydC1wYXNzZW5nZXIsXHJcbnNwYW4uc2NhbmlhLWljb24tY29tZm9ydC1wYXNzZW5nZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDhfQ29tZm9ydF9QYXNzYW5nZXJfZW52aXJvbm1lbnQtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWRyaXZlci1vbXB0aW1pemF0aW9uLFxyXG5zcGFuLnNjYW5pYS1pY29uLWRyaXZlci1vbXB0aW1pemF0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzQ5X0RyaXZlcl9vcHRpbWlzYXRpb24tNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXVwdGltZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi11cHRpbWUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTBfVXB0aW1lLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1wcm9kdWN0aXZpdHksXHJcbnNwYW4uc2NhbmlhLWljb24tcHJvZHVjdGl2aXR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzUxX1Byb2R1Y3Rpdml0eS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYnVzaW5lc3MtZ3Jvd3RoLFxyXG5zcGFuLnNjYW5pYS1pY29uLWJ1c2luZXNzLWdyb3d0aCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81Ml9CdXNpbmVzc19ncm93dGgtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWVmZmljaWVuY3ksXHJcbnNwYW4uc2NhbmlhLWljb24tZWZmaWNpZW5jeSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81M19FZmZpY2llbmN5LTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jb25kaXRpb24tcm9hZHMsXHJcbnNwYW4uc2NhbmlhLWljb24tY29uZGl0aW9uLXJvYWRzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzU0X0NvbmRpdGlvbnNfcm9hZHMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNhZmV0eSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1zYWZldHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTVfU2FmZXR5XzU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1xdWFsaXR5LWVuZ2luZWVyaW5nLFxyXG5zcGFuLnNjYW5pYS1pY29uLXF1YWxpdHktZW5naW5lZXJpbmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTZfUXVhbGl0eV9FbmdpbmVlcmluZy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdG9lLFxyXG5zcGFuLnNjYW5pYS1pY29uLXRvZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81N19UT0UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWFsdGVybmF0aXZlLWZ1ZWxzLFxyXG5zcGFuLnNjYW5pYS1pY29uLWFsdGVybmF0aXZlLWZ1ZWxzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzU4X0FsdGVybmF0aXZlX2Z1ZWxzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10bWEsXHJcbnNwYW4uc2NhbmlhLWljb24tdG1hIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzU5X1RNQS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tcGF5bG9hZCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1wYXlsb2FkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzYwX1BheWxvYWQtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWRyaXZlYWJpbGl0eSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1kcml2ZWFiaWxpdHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjFfRHJpdmVhYmlsaXR5LTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1lY29sdXRpb24tYW5hbHlzaXMsXHJcbnNwYW4uc2NhbmlhLWljb24tZWNvbHV0aW9uLWFuYWx5c2lzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzYyX0Vjb2x1dGlvbl9hbmFseXNpcy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZWNvbHV0aW9uLXNvbHV0aW9ucyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1lY29sdXRpb24tc29sdXRpb25zIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzYzX0Vjb2x1dGlvbl9zb2x1dGlvbnMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1yZXN1bHRzLFxyXG5zcGFuLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1yZXN1bHRzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY0X0Vjb2x1dGlvbl9yZXN1bHRzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1mdWVsLWVmZmljZW5jeSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1mdWVsLWVmZmljZW5jeSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy82NV9GdWVsX2VmZmljZW5jeS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tY28yLWVtaXNzaW9ucyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1jbzItZW1pc3Npb25zIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY2X0NvMl9lbWlzc2lvbnMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW1pbGVzLWNhcGFjaXR5LFxyXG5zcGFuLnNjYW5pYS1pY29uLW1pbGVzLWNhcGFjaXR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY3X01pbGVzX2NhcGFjaXR5LTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1ldmVudHMsXHJcbnNwYW4uc2NhbmlhLWljb24tZXZlbnRzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY4X0V2ZW50cy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHksXHJcbnNwYW4uc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjlfVHJ1Y2tfYXNzZW1ibHktNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXdhaXRpbmctdGltZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi13YWl0aW5nLXRpbWUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzBfV2FpdGluZy10aW1lLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1leHBsb3JlLFxyXG5zcGFuLnNjYW5pYS1pY29uLWV4cGxvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzFfRXhwbG9yZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc2VlLWRldGFpbHMsXHJcbnNwYW4uc2NhbmlhLWljb24tc2VlLWRldGFpbHMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzJfU2VlIGRldGFpbHMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW5ldHdvcmstd29ybGR3aWRlLW9wZW4sXHJcbnNwYW4uc2NhbmlhLWljb24tbmV0d29yay13b3JsZHdpZGUtb3BlbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83M19TY2FuaWFfbmV0d29ya193b3JsZHdpZGVfb3Blbl8yNGgtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXdhcnJhbnR5LFxyXG5zcGFuLnNjYW5pYS1pY29uLXdhcnJhbnR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc0X1dhcnJhbnR5LTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1nZWFyLXNoaWZ0LFxyXG5zcGFuLnNjYW5pYS1pY29uLWdlYXItc2hpZnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzVfR2Vhcl9zaGlmdC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24ta25vd2xlZGdlLFxyXG5zcGFuLnNjYW5pYS1pY29uLWtub3dsZWRnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83Nl9Lbm93bGVkZ2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWJyYWtlLFxyXG5zcGFuLnNjYW5pYS1pY29uLWJyYWtlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc3X0JyYWtlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmFjZWJvb2ssXHJcbnNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc4X1NvY2lhbF9tZWRpYV9GYWNlYm9vay5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1mbGlja3IsXHJcbnNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWZsaWNrciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfRmxpY2tyLnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWdvb2dsZXBsdXMsXHJcbnNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWdvb2dsZXBsdXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX0dvb2dsZVBsdXMuc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtaW5zdGFncmFtLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1pbnN0YWdyYW0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX0luc3RhZ3JhbS5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1saW5rZWRpbixcclxuc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtbGlua2VkaW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX0xpbmtlZGluLnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXNsaWRlc2hhcmUsXHJcbnNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXNsaWRlc2hhcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX1NsaWRlU2hhcmUuc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtdHdpdHRlcixcclxuc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtdHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfVHdpdHRlci5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc4X1NvY2lhbF9tZWRpYV9Zb3V0dWJlLnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUtdmFyaWF0aW9uLTIsXHJcbnNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUtdmFyaWF0aW9uLTIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX1lvdXR1YmVfdmFyaWF0aW9uLTIuc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zYXZlLWRvd25sb2FkLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNhdmUtZG93bmxvYWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODRfU2F2ZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZW1lcmdlbmN5LFxyXG5zcGFuLnNjYW5pYS1pY29uLWVtZXJnZW5jeSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OV9FbWVyZ2VuY3lfNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRpbWUsXHJcbnNwYW4uc2NhbmlhLWljb24tdGltZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy84MF9UaW1lLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1iYXR0ZXJ5LFxyXG5zcGFuLnNjYW5pYS1pY29uLWJhdHRlcnkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODFfQmF0dGVyeV81NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZGF0ZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1kYXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzgyX0RhdGUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNvdW5kLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzgzX1NvdW5kLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1uby1waG90byxcclxuc3Bhbi5zY2FuaWEtaWNvbi1uby1waG90byB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy85Ml9Ob19waG90by01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tbm8tc21va2luZyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1uby1zbW9raW5nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzkzX05vX3Ntb2tpbmctNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW5vLWRydWdzLW9yLWFsY29ob2wsXHJcbnNwYW4uc2NhbmlhLWljb24tbm8tZHJ1Z3Mtb3ItYWxjb2hvbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy85NF9Ob19kcnVnc19vcl9hbGNvaG9sLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1kcml2ZXJzLWxpY2VuY2UtcmVxdWlyZWQsXHJcbnNwYW4uc2NhbmlhLWljb24tZHJpdmVycy1saWNlbmNlLXJlcXVpcmVkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk1X0RyaXZlcnNfbGljZW5jZV9yZXF1aXJlZC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZm9yYmlkZGVuLXRvLWVudGVyLWNvdXJzZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1mb3JiaWRkZW4tdG8tZW50ZXItY291cnNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk2X0ZvcmJpZGRlbl90b19lbnRlcl9jb3Vyc2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXdlYXItc2VhdGJlbHQsXHJcbnNwYW4uc2NhbmlhLWljb24td2Vhci1zZWF0YmVsdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy85N19XZWFyX3NlYXRiZWx0LTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1uby1waG9uZS1kdXJpbmctZHJpdmluZyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1uby1waG9uZS1kdXJpbmctZHJpdmluZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy85OF9Ob19waG9uZV9kdXJpbmdfZHJpdmluZy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tbGlzdGVuLXRvLWRlbW8tZHJpdmVyLFxyXG5zcGFuLnNjYW5pYS1pY29uLWxpc3Rlbi10by1kZW1vLWRyaXZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy85OV9MaXN0ZW5fdG9fZGVtb19kcml2ZXItNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWNvbm5lY3RlZC1zZXJ2aWNlcy1idXMsXHJcbnNwYW4uc2NhbmlhLWljb24tY29ubmVjdGVkLXNlcnZpY2VzLWJ1cyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDBfQ29ubmVjdGVkX3NlcnZpY2VzX2J1cy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24taW5mby1yb3VuZCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1pbmZvLXJvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwMV9JbmZvX3JvdW5kLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jYWxsLXVzLFxyXG5zcGFuLnNjYW5pYS1pY29uLWNhbGwtdXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTAyX0NhbGxfdXNfNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWxpbmssXHJcbnNwYW4uc2NhbmlhLWljb24tbGluayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDNfTGluay1pY29uLTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10cnVjay1jb25maWd1cmF0b3IsXHJcbnNwYW4uc2NhbmlhLWljb24tdHJ1Y2stY29uZmlndXJhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwNF9UcnVjay1jb25maWd1cmF0b3ItMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWNoYW5nZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1jaGFuZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTA1X0NoYW5nZS0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZWRpdCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1lZGl0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwNl9FZGl0LTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jb252ZXJzYXRpb24sXHJcbnNwYW4uc2NhbmlhLWljb24tY29udmVyc2F0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwN19Db252ZXJzYXRpb24tMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNldHRpbmdzLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNldHRpbmdzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwOF9TZXR0aW5ncy0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYm94LFxyXG5zcGFuLnNjYW5pYS1pY29uLWJveCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy9Cb3hfMjRfNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWNyYW5lLFxyXG5zcGFuLnNjYW5pYS1pY29uLWNyYW5lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TL0NyYW5lLTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1maWZ0aC13aGVlbCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1maWZ0aC13aGVlbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy9GaWZ0aF93aGVlbC0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZmlyZS1lbmdpbmUsXHJcbnNwYW4uc2NhbmlhLWljb24tZmlyZS1lbmdpbmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvRmlyZV9lbmdpbmUtMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWhvb2stbGlmdCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1ob29rLWxpZnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvSG9va19saWZ0LTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1yZWNvdmVyeS1ib2R5LFxyXG5zcGFuLnNjYW5pYS1pY29uLXJlY292ZXJ5LWJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvUmVjb3ZlcnlfYm9keS0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tcmVmdXNlLWNvbGxlY3Rpb24tYm9keSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1yZWZ1c2UtY29sbGVjdGlvbi1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TL1JlZnVzZV9jb2xsZWN0aW9uX2JvZHktMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRhaWwtbGlmdCxcclxuc3Bhbi5zY2FuaWEtaWNvbi10YWlsLWxpZnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvVGFpbF9saWZ0LTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10YW5rLWJvZHksXHJcbnNwYW4uc2NhbmlhLWljb24tdGFuay1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TL1RhbmtfYm9keS0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdGltYmVyLWJvZHksXHJcbnNwYW4uc2NhbmlhLWljb24tdGltYmVyLWJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvVGltYmVyX2JvZHktMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRpcHBlcl9ib2R5LFxyXG5zcGFuLnNjYW5pYS1pY29uLXRpcHBlcl9ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TL1RpcHBlcl9ib2R5LTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10cmFpbGVyLFxyXG5zcGFuLnNjYW5pYS1pY29uLXRyYWlsZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvVHJhaWxlci0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdmVoaWNsZS10cmFuc3BvcnQtYm9keSxcclxuc3Bhbi5zY2FuaWEtaWNvbi12ZWhpY2xlLXRyYW5zcG9ydC1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TL1ZlaGljbGVfdHJhbnNwb3J0X2JvZHktMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRydWNrLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tdHJ1Y2stc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMDFfU0lTX1RydWNrX3NlcnZpY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWJ1cy1zZXJ2aWNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLWJ1cy1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wMl9TSVNfQnVzX3NlcnZpY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWVuZ2luZS1zZXJ2aWNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLWVuZ2luZS1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wM19TSVNfRW5naW5lc19zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1tYXJpbmUtZW5naW5lLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tbWFyaW5lLWVuZ2luZS1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wNF9TSVNfTWFyaW5lX2VuZ2luZV9zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1nZW5zdGVzLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tZ2Vuc3Rlcy1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wNV9TSVNfU2NhbmlhX2dlbnNldHNfc2VydmljZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tMjRoLWJyZWFrZG93bi1zZXJ2aWNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLTI0aC1icmVha2Rvd24tc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMDZfU0lTXzI0aF9lbWVyZ2VuY3lfYnJlYWtkb3duX3NlcnZpY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWFjY2lkZW50LXJlcGFpcnMsXHJcbnNwYW4uc2NhbmlhLWljb24tYWNjaWRlbnQtcmVwYWlycyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMDdfU0lTX0FjY2lkZW50X3JlcGFpcnMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRvd2luZy1yZWNvdmVyeS1zZXJ2aWNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLXRvd2luZy1yZWNvdmVyeS1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wOF9TSVNfVG93aW5nX2FuZF9yZWNvdmVyeV9zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10b2xsLWNvbGxlY3QtcmVjaXZlcnktc2VydmljZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi10b2xsLWNvbGxlY3QtcmVjaXZlcnktc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMDlfU0lTX1RvbGxfY29sbGVjdF9hbmRfcmVjb3Zlcnlfc2VydmljZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdHlyZS1zZXJ2aWNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLXR5cmUtc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTBfU0lTX1R5cmVfc2VydmljZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdmVoaWNsZS13YXNoaW5nLFxyXG5zcGFuLnNjYW5pYS1pY29uLXZlaGljbGUtd2FzaGluZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTFfU0lTX1ZlaGljbGVfd2FzaGluZy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdmVoaWNsZS1yZW50YWwsXHJcbnNwYW4uc2NhbmlhLWljb24tdmVoaWNsZS1yZW50YWwge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzEyX1NJU19WZWhpY2xlX3JlbnRhbC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdHJ1Y2stc2FsZXMsXHJcbnNwYW4uc2NhbmlhLWljb24tdHJ1Y2stc2FsZXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzEzX1NJU19UcnVja19zYWxlcy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYnVzLXNhbGVzLFxyXG5zcGFuLnNjYW5pYS1pY29uLWJ1cy1zYWxlcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTRfU0lTX0J1c19zYWxlcy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tcG93ZXItZW5naW5lLXNhbGVzLFxyXG5zcGFuLnNjYW5pYS1pY29uLXBvd2VyLWVuZ2luZS1zYWxlcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTVfU0lTX1Bvd2VyX2dlbmVyYXRpb25fZW5naW5lX3NhbGVzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1tYXJpbmUtZW5naW5lLXNhbGVzLFxyXG5zcGFuLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2FsZXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzE2X1NJU19NYXJpbmVfZW5naW5lX3NhbGVzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1nZW5zdGVzLXNhbGVzLFxyXG5zcGFuLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2FsZXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzE3X1NJU19TY2FuaWFfZ2Vuc2V0c19zYWxlcy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tcGFydHMtc2FsZXMsXHJcbnNwYW4uc2NhbmlhLWljb24tcGFydHMtc2FsZXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzE4X1NJU19TY2FuaWFfcGFydHNfc2FsZXMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWRpZ2l0YWwtdGFjaG9ncmFwaC1kb3dubG9hZCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1kaWdpdGFsLXRhY2hvZ3JhcGgtZG93bmxvYWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzE5X1NJU19EaWdpdGFsX3RhY2hvZ3JhcGhfZGF0YV9kb3dubG9hZC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZGlnaXRhbC10YWNob2dyYXBoLWluc3BlY3Rpb24sXHJcbnNwYW4uc2NhbmlhLWljb24tZGlnaXRhbC10YWNob2dyYXBoLWluc3BlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzIwX1NJU19EaWdpdGFsX3RhY2hvZ3JhcGhfaW5zcGVjdGlvbl9hbmRfcmVwYWlycy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYW5hbG9ndWUtdGFjaG9ncmFwaC1pbnNwZWN0aW9uLFxyXG5zcGFuLnNjYW5pYS1pY29uLWFuYWxvZ3VlLXRhY2hvZ3JhcGgtaW5zcGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjFfU0lTX0FuYWxvZ3VlX3RhY2hvZ3JhcGhfaW5zcGVjdGlvbl9hbmRfcmVwYWlycy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tcm9sbGVyLWJyYWtlLXRlc3QsXHJcbnNwYW4uc2NhbmlhLWljb24tcm9sbGVyLWJyYWtlLXRlc3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzIyX1NJU19Sb2xsZXJfYnJha2VfdGVzdC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdHJhaWxlci1zZXJ2aWNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLXRyYWlsZXItc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjNfU0lTX1RyYWlsZXJfc2VydmljZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tcmVmcmlnZXJhdGlvbi1zZXJ2aWNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLXJlZnJpZ2VyYXRpb24tc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjRfU0lTX1RyYW5zcG9ydF9yZWZyaWdlcmF0aW9uX3VuaXRfc2VydmljZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdGFycGF1bGluLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tdGFycGF1bGluLXNlcnZpY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzI1X1NJU19UYXJwYXVsaW5fc2VydmljZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYWRyLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tYWRyLXNlcnZpY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzI2X1NJU19BRFJfVmVoaWNsZV9zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1oeWRyYXVsaWNzLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24taHlkcmF1bGljcy1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yN19TSVNfSHlkcmF1bGljc19ib2R5d29ya19zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi11c2VkLXZlaGljbGUtc2FsZXMsXHJcbnNwYW4uc2NhbmlhLWljb24tdXNlZC12ZWhpY2xlLXNhbGVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yOF9TSVNfVXNlZF92ZWhpY2xlX3NhbGVzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1taW5pbmctc2VydmljZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1taW5pbmctc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjlfU0lTX01pbmluZ19zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1taW5pbmctc2FsZXMsXHJcbnNwYW4uc2NhbmlhLWljb24tbWluaW5nLXNhbGVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8zMF9TSVNfTWluaW5nX3NhbGVzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10YWlsLWxpZnQtc2VydmljZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi10YWlsLWxpZnQtc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMzFfU0lTX1RhaWxfbGlmdF9zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1maXhlZC1wcmljZS1yZXBhaXJzLFxyXG5zcGFuLnNjYW5pYS1pY29uLWZpeGVkLXByaWNlLXJlcGFpcnMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Byb2R1Y3RzLXNlcnZpY2VzL1NWR19QT1MvMDFfRml4ZWRfcHJpY2VfcmVwYWlyc18yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc2VydmljZV9leGNoYW5nZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1zZXJ2aWNlX2V4Y2hhbmdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9wcm9kdWN0cy1zZXJ2aWNlcy9TVkdfUE9TLzAyX1NlcnZpY2VfZXhjaGFuZ2VfMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1maW5kLWEtZGVhbGVyLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1maW5kLWEtZGVhbGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzAxX0ZpbmRfYV9kZWFsZXItNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc2VhcmNoLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zZWFyY2gge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMDJfSWNvbl9zZWFyY2gtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tY2xvc2UtaW5wdXQsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWNsb3NlLWlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzAzX1NlYXJjaC1kZXNrdG9wX2luLWZpZWxkLWRlbGV0ZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zZWFyY2gtbW9iaWxlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zZWFyY2gtbW9iaWxlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzA0X1NlYXJjaC1tb2JpbGVfaW4tZmllbGQtZGVsZXRlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLW1lbnUtbW9iaWxlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1tZW51LW1vYmlsZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wNV9NZW51X21vYmlsZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1jbG9zZS1tb2JpbGUtbWVudSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tY2xvc2UtbW9iaWxlLW1lbnUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMDZfTWVudV9jbG9zZV9idXR0b25fTW9iaWxlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLW1lbnUtYmFjay1idXR0b24sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLW1lbnUtYmFjay1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMDdfTWVudV9iYWNrX2J1dHRvbi01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1teS1zY2FuaWEtbW9iaWxlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1teS1zY2FuaWEtbW9iaWxlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzA4X015X3NjYW5pYV9Nb2JpbGUtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc2hhcmUtc29jaWFsLW1lZGlhLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zaGFyZS1zb2NpYWwtbWVkaWEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMDlfU2hhcmVfcGFnZV90b29sX3NoYXJlX2ljb24tNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc2hhcmUtcGFnZS10b29sLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zaGFyZS1wYWdlLXRvb2wge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTBfU2hhcmVfcGFnZV90b29sLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXZpZGVvLXBsYXksXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXZpZGVvLXBsYXkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTFfVmlkZW9fcGxheV9pY29uLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTJfRmluZF9hX2RlYWxlcl9DVEEtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tb3Blbi1hY2NvcmRpYW4tcGx1cyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tb3Blbi1hY2NvcmRpYW4tcGx1cyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xM19PcGVuX2FjY29yZGlhbl9wbHVzX01vYmlsZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1jbG9zZS1hY2NvcmRpYW4tbWludXMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWNsb3NlLWFjY29yZGlhbi1taW51cyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xNF9DbG9zZV9hY2NvcmRpYW5fbWludXNfaWNvbl9Nb2JpbGUtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tdGljayxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tdGljayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xNV9UaWNrX2ljb24tNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZmlsdGVyLWRyb3Bkb3duLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1maWx0ZXItZHJvcGRvd24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTZfRmlsdGVyX2Ryb3BfZG93bl9pY29uLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItZGV0ZWN0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzE3X0RlYWxlcl9sb2NhdG9yX0RldGVjdF9sb2NhdGlvbl81NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1tYXAtcGluLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1tYXAtcGluIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzE4X0RlYWxlcl9sb2NhdG9yX21hcF9waW5fZmlsbGVkLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWN1cnJlbnQsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTlfRGVhbGVyX2xvY2F0b3JfQ3VycmVudF9sb2NhdGlvbl9waW4tNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tam9iLXBvc3RpbmctbG9jYXRpb24sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLWxvY2F0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzIwX0pvYl9wb3N0aW5nX2luZm9fTG9jYXRpb25fZ2VuZXJpYy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy13b3JrYXJlYSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tam9iLXBvc3Rpbmctd29ya2FyZWEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjFfSm9iX3Bvc3RpbmdfaW5mb19Mb2NhdGlvbl9nZW5lcmljLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLWNsb3NpbmctZGF0ZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tam9iLXBvc3RpbmctY2xvc2luZy1kYXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzIyX0Nsb3NpbmdfZGF0ZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1lbWFpbCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZW1haWwge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjNfRS1tYWlsX1VTLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWRlYWxlci13ZWJzaXRlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1kZWFsZXItd2Vic2l0ZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yNF9WaWV3X2RlYWxlcl93ZWJzaXRlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWRlYWxlci1kaXJlY3Rpb24sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWRlYWxlci1kaXJlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjVfRGVhbGVyX2tleV9hY3Rpb25zX0dldF9kaXJlY3Rpb25zX2dlbmVyaWNfNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tdHJ1Y2ssXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXRydWNrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzI2X1RydWNrLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWVuZ2luZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZW5naW5lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzI3X0VuZ2luZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1idXMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWJ1cyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yOF9CdXMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tYm9hdCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tYm9hdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yOV9Cb2F0LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWZpbmFuY2UsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWZpbmFuY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzBfRmluYW5jZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1jb252ZXlvcmJlbHQsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWNvbnZleW9yYmVsdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zMV9Db252ZXlvcmJlbHRfTWFjaGluZXJ5LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXBvd2VyZ2VuLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1wb3dlcmdlbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zMl9Qb3dlcmdlbi01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1pbnN1cmFuY2UsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWluc3VyYW5jZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zM19JbnN1cmFuY2Vfcmlza19tYW5hZ2VtZW50LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXJlcGFpcnMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXJlcGFpcnMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzRfUmVwYWlycy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWNvbm5lY3RlZC1zZXJ2aWNlcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zNV9Db25uZWN0ZWRfc2VydmljZXMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tdHJhaW5pbmctY2xhc3Nyb29tLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi10cmFpbmluZy1jbGFzc3Jvb20ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzZfVHJhaW5pbmdfQ2xhc3Nyb29tLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWJ1cy1kcml2ZXIsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWJ1cy1kcml2ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzdfRHJpdmVyX0J1c19kcml2ZXItNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tYnVzaW5lc3Mtb3BlcmF0b3IsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWJ1c2luZXNzLW9wZXJhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzM4X0J1c2luZXNzX29wZXJhdG9yLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXBhc3Nlbmdlcixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tcGFzc2VuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzM5X1Bhc3Nhbmdlci01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1tZWNoYW5pYy10ZWNobmljaWFuLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1tZWNoYW5pYy10ZWNobmljaWFuIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzQwX01lY2hhbmljX1RlY2huaWNpYW4tNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tY29uY3JldGUtbWl4ZXIsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWNvbmNyZXRlLW1peGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzQyX0NvbmNyZXRlX21peGVyLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXRydWNrLWFzc2VtYmx5LWNvbXBvbmVudCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHktY29tcG9uZW50IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzQzX1RydWNrX2Fzc2VtYmx5LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWJ1cy1hcHBsaWNhdGlvbixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tYnVzLWFwcGxpY2F0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzQ0X0J1c19hcHBsaWNhdGlvbi01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1lbmdpbmUtYXBwbGljYXRpb24sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWVuZ2luZS1hcHBsaWNhdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80NV9FbmdpbmVfYXBwbGljYXRpb24tNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZnVlbC1lY29ub215LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1mdWVsLWVjb25vbXkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDZfRnVlbF9lY29ub215LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXN1c3RhaW5hYmlsaXR5LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zdXN0YWluYWJpbGl0eSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80N19TdXN0YWluYWJpbGxpdHlfRW52aXJvbm1lbnQtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tY29tZm9ydC1wYXNzZW5nZXIsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWNvbWZvcnQtcGFzc2VuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzQ4X0NvbWZvcnRfUGFzc2FuZ2VyX2Vudmlyb25tZW50LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWRyaXZlci1vbXB0aW1pemF0aW9uLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1kcml2ZXItb21wdGltaXphdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80OV9Ecml2ZXJfb3B0aW1pc2F0aW9uLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXVwdGltZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tdXB0aW1lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzUwX1VwdGltZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1wcm9kdWN0aXZpdHksXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXByb2R1Y3Rpdml0eSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81MV9Qcm9kdWN0aXZpdHktNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tYnVzaW5lc3MtZ3Jvd3RoLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1idXNpbmVzcy1ncm93dGgge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTJfQnVzaW5lc3NfZ3Jvd3RoLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWVmZmljaWVuY3ksXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWVmZmljaWVuY3kge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTNfRWZmaWNpZW5jeS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1jb25kaXRpb24tcm9hZHMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWNvbmRpdGlvbi1yb2FkcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81NF9Db25kaXRpb25zX3JvYWRzLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXNhZmV0eSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tc2FmZXR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzU1X1NhZmV0eV81NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1xdWFsaXR5LWVuZ2luZWVyaW5nLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1xdWFsaXR5LWVuZ2luZWVyaW5nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzU2X1F1YWxpdHlfRW5naW5lZXJpbmctNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tdG9lLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi10b2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTdfVE9FLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWFsdGVybmF0aXZlLWZ1ZWxzLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1hbHRlcm5hdGl2ZS1mdWVscyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81OF9BbHRlcm5hdGl2ZV9mdWVscy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi10bWEsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXRtYSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81OV9UTUEtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tcGF5bG9hZCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tcGF5bG9hZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82MF9QYXlsb2FkLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWRyaXZlYWJpbGl0eSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZHJpdmVhYmlsaXR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzYxX0RyaXZlYWJpbGl0eS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1lY29sdXRpb24tYW5hbHlzaXMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1hbmFseXNpcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82Ml9FY29sdXRpb25fYW5hbHlzaXMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZWNvbHV0aW9uLXNvbHV0aW9ucyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZWNvbHV0aW9uLXNvbHV0aW9ucyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82M19FY29sdXRpb25fc29sdXRpb25zLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1yZXN1bHRzLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1lY29sdXRpb24tcmVzdWx0cyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82NF9FY29sdXRpb25fcmVzdWx0cy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1mdWVsLWVmZmljZW5jeSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZnVlbC1lZmZpY2VuY3kge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjVfRnVlbF9lZmZpY2VuY3ktNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tY28yLWVtaXNzaW9ucyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tY28yLWVtaXNzaW9ucyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82Nl9DbzJfZW1pc3Npb25zLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLW1pbGVzLWNhcGFjaXR5LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1taWxlcy1jYXBhY2l0eSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82N19NaWxlc19jYXBhY2l0eS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1ldmVudHMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWV2ZW50cyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82OF9FdmVudHMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHksXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXRydWNrLWFzc2VtYmx5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzY5X1RydWNrX2Fzc2VtYmx5LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXdhaXRpbmctdGltZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24td2FpdGluZy10aW1lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzcwX1dhaXRpbmctdGltZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1leHBsb3JlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1leHBsb3JlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzcxX0V4cGxvcmUtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc2VlLWRldGFpbHMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNlZS1kZXRhaWxzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzcyX1NlZSBkZXRhaWxzLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLW5ldHdvcmstd29ybGR3aWRlLW9wZW4sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLW5ldHdvcmstd29ybGR3aWRlLW9wZW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzNfU2NhbmlhX25ldHdvcmtfd29ybGR3aWRlX29wZW5fMjRoLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXdhcnJhbnR5LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi13YXJyYW50eSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83NF9XYXJyYW50eS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1nZWFyLXNoaWZ0LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1nZWFyLXNoaWZ0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc1X0dlYXJfc2hpZnQtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24ta25vd2xlZGdlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1rbm93bGVkZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzZfS25vd2xlZGdlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWJyYWtlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1icmFrZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83N19CcmFrZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmFjZWJvb2ssXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1mYWNlYm9vayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfRmFjZWJvb2tfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1mbGlja3IsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1mbGlja3Ige1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX0ZsaWNrcl9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWdvb2dsZXBsdXMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1nb29nbGVwbHVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9Hb29nbGVQbHVzX25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtaW5zdGFncmFtLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtaW5zdGFncmFtIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9JbnN0YWdyYW1fbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1saW5rZWRpbixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWxpbmtlZGluIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9MaW5rZWRpbl9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXNsaWRlc2hhcmUsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1zbGlkZXNoYXJlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9TbGlkZVNoYXJlX25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtdHdpdHRlcixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXR3aXR0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX1R3aXR0ZXJfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEteW91dHViZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfWW91dHViZV9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUtdmFyaWF0aW9uLTIsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlLXZhcmlhdGlvbi0yIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9Zb3V0dWJlX3ZhcmlhdGlvbi0yX25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zYXZlLWRvd25sb2FkLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zYXZlLWRvd25sb2FkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzg0X1NhdmUtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZW1lcmdlbmN5LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1lbWVyZ2VuY3kge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzlfRW1lcmdlbmN5XzU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXRpbWUsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXRpbWUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvODBfVGltZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1iYXR0ZXJ5LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1iYXR0ZXJ5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzgxX0JhdHRlcnlfNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZGF0ZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZGF0ZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy84Ml9EYXRlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXNvdW5kLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy84M19Tb3VuZC01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1uby1waG90byxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tbm8tcGhvdG8ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvOTJfTm9fcGhvdG8tNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tbm8tc21va2luZyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tbm8tc21va2luZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85M19Ob19zbW9raW5nLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLW5vLWRydWdzLW9yLWFsY29ob2wsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLW5vLWRydWdzLW9yLWFsY29ob2wge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvOTRfTm9fZHJ1Z3Nfb3JfYWxjb2hvbC01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1kcml2ZXJzLWxpY2VuY2UtcmVxdWlyZWQsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWRyaXZlcnMtbGljZW5jZS1yZXF1aXJlZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85NV9Ecml2ZXJzX2xpY2VuY2VfcmVxdWlyZWQtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZm9yYmlkZGVuLXRvLWVudGVyLWNvdXJzZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZm9yYmlkZGVuLXRvLWVudGVyLWNvdXJzZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85Nl9Gb3JiaWRkZW5fdG9fZW50ZXJfY291cnNlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXdlYXItc2VhdGJlbHQsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXdlYXItc2VhdGJlbHQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvOTdfV2Vhcl9zZWF0YmVsdC01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1uby1waG9uZS1kdXJpbmctZHJpdmluZyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tbm8tcGhvbmUtZHVyaW5nLWRyaXZpbmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvOThfTm9fcGhvbmVfZHVyaW5nX2RyaXZpbmctNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tbGlzdGVuLXRvLWRlbW8tZHJpdmVyLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1saXN0ZW4tdG8tZGVtby1kcml2ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvOTlfTGlzdGVuX3RvX2RlbW9fZHJpdmVyLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWNvbm5lY3RlZC1zZXJ2aWNlcy1idXMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWNvbm5lY3RlZC1zZXJ2aWNlcy1idXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTAwX0Nvbm5lY3RlZF9zZXJ2aWNlc19idXMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24taW5mby1yb3VuZCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24taW5mby1yb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xMDFfSW5mb19yb3VuZC01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1jYWxsLXVzLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1jYWxsLXVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzEwMl9DYWxsX3VzXzU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWxpbmssXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWxpbmsge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTAzX0xpbmstaWNvbi0yNC00OHB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1maXhlZC1wcmljZS1yZXBhaXJzLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1maXhlZC1wcmljZS1yZXBhaXJzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9wcm9kdWN0cy1zZXJ2aWNlcy9TVkdfTkVHLzAxX0ZpeGVkX3ByaWNlX3JlcGFpcnNfMjQtNDhweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc2VydmljZV9leGNoYW5nZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tc2VydmljZV9leGNoYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvcHJvZHVjdHMtc2VydmljZXMvU1ZHX05FRy8wMl9TZXJ2aWNlX2V4Y2hhbmdlXzI0LTQ4cHhfbmVnLnN2ZycpO1xyXG59XHJcbmkuYWN0aXZlLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdCxcclxuc3Bhbi5hY3RpdmUuc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItZGV0ZWN0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzE3X0RlYWxlcl9sb2NhdG9yX0RldGVjdF9sb2NhdGlvbl81NC03MnB4LUFjdGl2ZS5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS10cnVjay1jb25maWd1cmF0b3IsXHJcbnNwYW4uc2NhbmlhLXRydWNrLWNvbmZpZ3VyYXRvciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDRfVHJ1Y2stY29uZmlndXJhdG9yLTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuXG5pW2NsYXNzKj1cInNjYW5pYS1pY29uLVwiXSxcclxuc3BhbltjbGFzcyo9XCJzY2FuaWEtaWNvbi1cIl0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1NHB4O1xyXG4gIHdpZHRoOiA1NHB4O1xyXG4gIGhlaWdodDogNTRweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5pLnhzLFxyXG5zcGFuLnhzLFxyXG5pLnNtLFxyXG5zcGFuLnNtLFxyXG5pLm1kLFxyXG5zcGFuLm1kLFxyXG5pLmxnLFxyXG5zcGFuLmxnLFxyXG5pLnhsLFxyXG5zcGFuLnhsLFxyXG5pLnh4bCxcclxuc3Bhbi54eGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5pLnhzLFxyXG5zcGFuLnhzIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcbmkuc20sXHJcbnNwYW4uc20ge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjhweDtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbn1cclxuaS5tZCxcclxuc3Bhbi5tZCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1NHB4O1xyXG4gIHdpZHRoOiA1NHB4O1xyXG4gIGhlaWdodDogNTRweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5pLmxnLFxyXG5zcGFuLmxnIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDkwcHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcbmkueGwsXHJcbnNwYW4ueGwge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTQwcHggMTQwcHg7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5pLnh4bCxcclxuc3Bhbi54eGwge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjQwcHg7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGhlaWdodDogMjQwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5pLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIsXHJcbnNwYW4uc2NhbmlhLWljb24tZmluZC1hLWRlYWxlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wMV9GaW5kX2FfZGVhbGVyLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zZWFyY2gsXHJcbnNwYW4uc2NhbmlhLWljb24tc2VhcmNoIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzAyX0ljb25fc2VhcmNoLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jbG9zZS1pbnB1dCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1jbG9zZS1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wM19TZWFyY2gtZGVza3RvcF9pbi1maWVsZC1kZWxldGUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNlYXJjaC1tb2JpbGUsXHJcbnNwYW4uc2NhbmlhLWljb24tc2VhcmNoLW1vYmlsZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wNF9TZWFyY2gtbW9iaWxlX2luLWZpZWxkLWRlbGV0ZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tbWVudS1tb2JpbGUsXHJcbnNwYW4uc2NhbmlhLWljb24tbWVudS1tb2JpbGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDVfTWVudV9tb2JpbGUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWNsb3NlLW1vYmlsZS1tZW51LFxyXG5zcGFuLnNjYW5pYS1pY29uLWNsb3NlLW1vYmlsZS1tZW51IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzA2X01lbnVfY2xvc2VfYnV0dG9uX01vYmlsZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tbWVudS1iYWNrLWJ1dHRvbixcclxuc3Bhbi5zY2FuaWEtaWNvbi1tZW51LWJhY2stYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzA3X01lbnVfYmFja19idXR0b24tNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW15LXNjYW5pYS1tb2JpbGUsXHJcbnNwYW4uc2NhbmlhLWljb24tbXktc2NhbmlhLW1vYmlsZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wOF9NeV9zY2FuaWFfTW9iaWxlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zaGFyZS1zb2NpYWwtbWVkaWEsXHJcbnNwYW4uc2NhbmlhLWljb24tc2hhcmUtc29jaWFsLW1lZGlhIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzA5X1NoYXJlX3BhZ2VfdG9vbF9zaGFyZV9pY29uLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zaGFyZS1wYWdlLXRvb2wsXHJcbnNwYW4uc2NhbmlhLWljb24tc2hhcmUtcGFnZS10b29sIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwX1NoYXJlX3BhZ2VfdG9vbC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdmlkZW8tcGxheSxcclxuc3Bhbi5zY2FuaWEtaWNvbi12aWRlby1wbGF5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzExX1ZpZGVvX3BsYXlfaWNvbi01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZmluZC1hLWRlYWxlcixcclxuc3Bhbi5zY2FuaWEtaWNvbi1maW5kLWEtZGVhbGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEyX0ZpbmRfYV9kZWFsZXJfQ1RBLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1vcGVuLWFjY29yZGlhbi1wbHVzLFxyXG5zcGFuLnNjYW5pYS1pY29uLW9wZW4tYWNjb3JkaWFuLXBsdXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTNfT3Blbl9hY2NvcmRpYW5fcGx1c19Nb2JpbGUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWNsb3NlLWFjY29yZGlhbi1taW51cyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1jbG9zZS1hY2NvcmRpYW4tbWludXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTRfQ2xvc2VfYWNjb3JkaWFuX21pbnVzX2ljb25fTW9iaWxlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10aWNrLFxyXG5zcGFuLnNjYW5pYS1pY29uLXRpY2sge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTVfVGlja19pY29uLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1maWx0ZXItZHJvcGRvd24sXHJcbnNwYW4uc2NhbmlhLWljb24tZmlsdGVyLWRyb3Bkb3duIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzE2X0ZpbHRlcl9kcm9wX2Rvd25faWNvbi01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItZGV0ZWN0LFxyXG5zcGFuLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xN19EZWFsZXJfbG9jYXRvcl9EZXRlY3RfbG9jYXRpb25fNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLW1hcC1waW4sXHJcbnNwYW4uc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItbWFwLXBpbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xOF9EZWFsZXJfbG9jYXRvcl9tYXBfcGluX2ZpbGxlZC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItY3VycmVudCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzE5X0RlYWxlcl9sb2NhdG9yX0N1cnJlbnRfbG9jYXRpb25fcGluLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy1sb2NhdGlvbixcclxuc3Bhbi5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy1sb2NhdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yMF9Kb2JfcG9zdGluZ19pbmZvX0xvY2F0aW9uX2dlbmVyaWMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLXdvcmthcmVhLFxyXG5zcGFuLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLXdvcmthcmVhIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzIxX0pvYl9wb3N0aW5nX2luZm9fTG9jYXRpb25fZ2VuZXJpYy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tam9iLXBvc3RpbmctY2xvc2luZy1kYXRlLFxyXG5zcGFuLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLWNsb3NpbmctZGF0ZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yMl9DbG9zaW5nX2RhdGUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWVtYWlsLFxyXG5zcGFuLnNjYW5pYS1pY29uLWVtYWlsIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzIzX0UtbWFpbF9VUy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZGVhbGVyLXdlYnNpdGUsXHJcbnNwYW4uc2NhbmlhLWljb24tZGVhbGVyLXdlYnNpdGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjRfVmlld19kZWFsZXJfd2Vic2l0ZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZGVhbGVyLWRpcmVjdGlvbixcclxuc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItZGlyZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzI1X0RlYWxlcl9rZXlfYWN0aW9uc19HZXRfZGlyZWN0aW9uc19nZW5lcmljXzU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10cnVjayxcclxuc3Bhbi5zY2FuaWEtaWNvbi10cnVjayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yNl9UcnVjay01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZW5naW5lLFxyXG5zcGFuLnNjYW5pYS1pY29uLWVuZ2luZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yN19FbmdpbmUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWJ1cyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1idXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjhfQnVzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1ib2F0LFxyXG5zcGFuLnNjYW5pYS1pY29uLWJvYXQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjlfQm9hdC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZmluYW5jZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1maW5hbmNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzMwX0ZpbmFuY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWNvbnZleW9yYmVsdCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1jb252ZXlvcmJlbHQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMzFfQ29udmV5b3JiZWx0X01hY2hpbmVyeS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tcG93ZXJnZW4sXHJcbnNwYW4uc2NhbmlhLWljb24tcG93ZXJnZW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMzJfUG93ZXJnZW4tNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWluc3VyYW5jZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1pbnN1cmFuY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMzNfSW5zdXJhbmNlX3Jpc2tfbWFuYWdlbWVudC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tcmVwYWlycyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1yZXBhaXJzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzM0X1JlcGFpcnMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWNvbm5lY3RlZC1zZXJ2aWNlcyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMzVfQ29ubmVjdGVkX3NlcnZpY2VzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10cmFpbmluZy1jbGFzc3Jvb20sXHJcbnNwYW4uc2NhbmlhLWljb24tdHJhaW5pbmctY2xhc3Nyb29tIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzM2X1RyYWluaW5nX0NsYXNzcm9vbS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYnVzLWRyaXZlcixcclxuc3Bhbi5zY2FuaWEtaWNvbi1idXMtZHJpdmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzM3X0RyaXZlcl9CdXNfZHJpdmVyLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1idXNpbmVzcy1vcGVyYXRvcixcclxuc3Bhbi5zY2FuaWEtaWNvbi1idXNpbmVzcy1vcGVyYXRvciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zOF9CdXNpbmVzc19vcGVyYXRvci01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tcGFzc2VuZ2VyLFxyXG5zcGFuLnNjYW5pYS1pY29uLXBhc3NlbmdlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zOV9QYXNzYW5nZXItNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW1lY2hhbmljLXRlY2huaWNpYW4sXHJcbnNwYW4uc2NhbmlhLWljb24tbWVjaGFuaWMtdGVjaG5pY2lhbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy80MF9NZWNoYW5pY19UZWNobmljaWFuLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jb25jcmV0ZS1taXhlcixcclxuc3Bhbi5zY2FuaWEtaWNvbi1jb25jcmV0ZS1taXhlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy80Ml9Db25jcmV0ZV9taXhlci01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHktY29tcG9uZW50LFxyXG5zcGFuLnNjYW5pYS1pY29uLXRydWNrLWFzc2VtYmx5LWNvbXBvbmVudCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy80M19UcnVja19hc3NlbWJseS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYnVzLWFwcGxpY2F0aW9uLFxyXG5zcGFuLnNjYW5pYS1pY29uLWJ1cy1hcHBsaWNhdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy80NF9CdXNfYXBwbGljYXRpb24tNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWVuZ2luZS1hcHBsaWNhdGlvbixcclxuc3Bhbi5zY2FuaWEtaWNvbi1lbmdpbmUtYXBwbGljYXRpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDVfRW5naW5lX2FwcGxpY2F0aW9uLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1mdWVsLWVjb25vbXksXHJcbnNwYW4uc2NhbmlhLWljb24tZnVlbC1lY29ub215IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzQ2X0Z1ZWxfZWNvbm9teS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc3VzdGFpbmFiaWxpdHksXHJcbnNwYW4uc2NhbmlhLWljb24tc3VzdGFpbmFiaWxpdHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDdfU3VzdGFpbmFiaWxsaXR5X0Vudmlyb25tZW50LTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jb21mb3J0LXBhc3Nlbmdlcixcclxuc3Bhbi5zY2FuaWEtaWNvbi1jb21mb3J0LXBhc3NlbmdlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy80OF9Db21mb3J0X1Bhc3Nhbmdlcl9lbnZpcm9ubWVudC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZHJpdmVyLW9tcHRpbWl6YXRpb24sXHJcbnNwYW4uc2NhbmlhLWljb24tZHJpdmVyLW9tcHRpbWl6YXRpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDlfRHJpdmVyX29wdGltaXNhdGlvbi01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdXB0aW1lLFxyXG5zcGFuLnNjYW5pYS1pY29uLXVwdGltZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81MF9VcHRpbWUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXByb2R1Y3Rpdml0eSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1wcm9kdWN0aXZpdHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTFfUHJvZHVjdGl2aXR5LTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1idXNpbmVzcy1ncm93dGgsXHJcbnNwYW4uc2NhbmlhLWljb24tYnVzaW5lc3MtZ3Jvd3RoIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzUyX0J1c2luZXNzX2dyb3d0aC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZWZmaWNpZW5jeSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1lZmZpY2llbmN5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzUzX0VmZmljaWVuY3ktNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWNvbmRpdGlvbi1yb2Fkcyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1jb25kaXRpb24tcm9hZHMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTRfQ29uZGl0aW9uc19yb2Fkcy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc2FmZXR5LFxyXG5zcGFuLnNjYW5pYS1pY29uLXNhZmV0eSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81NV9TYWZldHlfNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXF1YWxpdHktZW5naW5lZXJpbmcsXHJcbnNwYW4uc2NhbmlhLWljb24tcXVhbGl0eS1lbmdpbmVlcmluZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81Nl9RdWFsaXR5X0VuZ2luZWVyaW5nLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10b2UsXHJcbnNwYW4uc2NhbmlhLWljb24tdG9lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzU3X1RPRS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYWx0ZXJuYXRpdmUtZnVlbHMsXHJcbnNwYW4uc2NhbmlhLWljb24tYWx0ZXJuYXRpdmUtZnVlbHMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNThfQWx0ZXJuYXRpdmVfZnVlbHMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRtYSxcclxuc3Bhbi5zY2FuaWEtaWNvbi10bWEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTlfVE1BLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1wYXlsb2FkLFxyXG5zcGFuLnNjYW5pYS1pY29uLXBheWxvYWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjBfUGF5bG9hZC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZHJpdmVhYmlsaXR5LFxyXG5zcGFuLnNjYW5pYS1pY29uLWRyaXZlYWJpbGl0eSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy82MV9Ecml2ZWFiaWxpdHktNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1hbmFseXNpcyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1lY29sdXRpb24tYW5hbHlzaXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjJfRWNvbHV0aW9uX2FuYWx5c2lzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1lY29sdXRpb24tc29sdXRpb25zLFxyXG5zcGFuLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1zb2x1dGlvbnMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjNfRWNvbHV0aW9uX3NvbHV0aW9ucy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZWNvbHV0aW9uLXJlc3VsdHMsXHJcbnNwYW4uc2NhbmlhLWljb24tZWNvbHV0aW9uLXJlc3VsdHMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjRfRWNvbHV0aW9uX3Jlc3VsdHMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWZ1ZWwtZWZmaWNlbmN5LFxyXG5zcGFuLnNjYW5pYS1pY29uLWZ1ZWwtZWZmaWNlbmN5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY1X0Z1ZWxfZWZmaWNlbmN5LTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1jbzItZW1pc3Npb25zLFxyXG5zcGFuLnNjYW5pYS1pY29uLWNvMi1lbWlzc2lvbnMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjZfQ28yX2VtaXNzaW9ucy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tbWlsZXMtY2FwYWNpdHksXHJcbnNwYW4uc2NhbmlhLWljb24tbWlsZXMtY2FwYWNpdHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjdfTWlsZXNfY2FwYWNpdHktNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWV2ZW50cyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1ldmVudHMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjhfRXZlbnRzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10cnVjay1hc3NlbWJseSxcclxuc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1hc3NlbWJseSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy82OV9UcnVja19hc3NlbWJseS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24td2FpdGluZy10aW1lLFxyXG5zcGFuLnNjYW5pYS1pY29uLXdhaXRpbmctdGltZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83MF9XYWl0aW5nLXRpbWUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWV4cGxvcmUsXHJcbnNwYW4uc2NhbmlhLWljb24tZXhwbG9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83MV9FeHBsb3JlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zZWUtZGV0YWlscyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1zZWUtZGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83Ml9TZWUgZGV0YWlscy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tbmV0d29yay13b3JsZHdpZGUtb3Blbixcclxuc3Bhbi5zY2FuaWEtaWNvbi1uZXR3b3JrLXdvcmxkd2lkZS1vcGVuIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzczX1NjYW5pYV9uZXR3b3JrX3dvcmxkd2lkZV9vcGVuXzI0aC01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24td2FycmFudHksXHJcbnNwYW4uc2NhbmlhLWljb24td2FycmFudHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzRfV2FycmFudHktNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWdlYXItc2hpZnQsXHJcbnNwYW4uc2NhbmlhLWljb24tZ2Vhci1zaGlmdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83NV9HZWFyX3NoaWZ0LTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1rbm93bGVkZ2UsXHJcbnNwYW4uc2NhbmlhLWljb24ta25vd2xlZGdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc2X0tub3dsZWRnZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYnJha2UsXHJcbnNwYW4uc2NhbmlhLWljb24tYnJha2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzdfQnJha2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1mYWNlYm9vayxcclxuc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX0ZhY2Vib29rLnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWZsaWNrcixcclxuc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmxpY2tyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc4X1NvY2lhbF9tZWRpYV9GbGlja3Iuc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZ29vZ2xlcGx1cyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZ29vZ2xlcGx1cyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfR29vZ2xlUGx1cy5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1pbnN0YWdyYW0sXHJcbnNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWluc3RhZ3JhbSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfSW5zdGFncmFtLnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWxpbmtlZGluLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1saW5rZWRpbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfTGlua2VkaW4uc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtc2xpZGVzaGFyZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtc2xpZGVzaGFyZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfU2xpZGVTaGFyZS5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS10d2l0dGVyLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS10d2l0dGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc4X1NvY2lhbF9tZWRpYV9Ud2l0dGVyLnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUsXHJcbnNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX1lvdXR1YmUuc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEteW91dHViZS12YXJpYXRpb24tMixcclxuc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEteW91dHViZS12YXJpYXRpb24tMiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfWW91dHViZV92YXJpYXRpb24tMi5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXNhdmUtZG93bmxvYWQsXHJcbnNwYW4uc2NhbmlhLWljb24tc2F2ZS1kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy84NF9TYXZlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1lbWVyZ2VuY3ksXHJcbnNwYW4uc2NhbmlhLWljb24tZW1lcmdlbmN5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc5X0VtZXJnZW5jeV81NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdGltZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi10aW1lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzgwX1RpbWUtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWJhdHRlcnksXHJcbnNwYW4uc2NhbmlhLWljb24tYmF0dGVyeSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy84MV9CYXR0ZXJ5XzU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1kYXRlLFxyXG5zcGFuLnNjYW5pYS1pY29uLWRhdGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODJfRGF0ZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc291bmQsXHJcbnNwYW4uc2NhbmlhLWljb24tc291bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODNfU291bmQtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW5vLXBob3RvLFxyXG5zcGFuLnNjYW5pYS1pY29uLW5vLXBob3RvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzkyX05vX3Bob3RvLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1uby1zbW9raW5nLFxyXG5zcGFuLnNjYW5pYS1pY29uLW5vLXNtb2tpbmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvOTNfTm9fc21va2luZy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tbm8tZHJ1Z3Mtb3ItYWxjb2hvbCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1uby1kcnVncy1vci1hbGNvaG9sIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk0X05vX2RydWdzX29yX2FsY29ob2wtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWRyaXZlcnMtbGljZW5jZS1yZXF1aXJlZCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1kcml2ZXJzLWxpY2VuY2UtcmVxdWlyZWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvOTVfRHJpdmVyc19saWNlbmNlX3JlcXVpcmVkLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1mb3JiaWRkZW4tdG8tZW50ZXItY291cnNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLWZvcmJpZGRlbi10by1lbnRlci1jb3Vyc2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvOTZfRm9yYmlkZGVuX3RvX2VudGVyX2NvdXJzZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24td2Vhci1zZWF0YmVsdCxcclxuc3Bhbi5zY2FuaWEtaWNvbi13ZWFyLXNlYXRiZWx0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk3X1dlYXJfc2VhdGJlbHQtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW5vLXBob25lLWR1cmluZy1kcml2aW5nLFxyXG5zcGFuLnNjYW5pYS1pY29uLW5vLXBob25lLWR1cmluZy1kcml2aW5nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk4X05vX3Bob25lX2R1cmluZ19kcml2aW5nLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1saXN0ZW4tdG8tZGVtby1kcml2ZXIsXHJcbnNwYW4uc2NhbmlhLWljb24tbGlzdGVuLXRvLWRlbW8tZHJpdmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk5X0xpc3Rlbl90b19kZW1vX2RyaXZlci01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tY29ubmVjdGVkLXNlcnZpY2VzLWJ1cyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXMtYnVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwMF9Db25uZWN0ZWRfc2VydmljZXNfYnVzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1pbmZvLXJvdW5kLFxyXG5zcGFuLnNjYW5pYS1pY29uLWluZm8tcm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTAxX0luZm9fcm91bmQtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWNhbGwtdXMsXHJcbnNwYW4uc2NhbmlhLWljb24tY2FsbC11cyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDJfQ2FsbF91c181NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tbGluayxcclxuc3Bhbi5zY2FuaWEtaWNvbi1saW5rIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwM19MaW5rLWljb24tMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRydWNrLWNvbmZpZ3VyYXRvcixcclxuc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1jb25maWd1cmF0b3Ige1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTA0X1RydWNrLWNvbmZpZ3VyYXRvci0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tY2hhbmdlLFxyXG5zcGFuLnNjYW5pYS1pY29uLWNoYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDVfQ2hhbmdlLTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1lZGl0LFxyXG5zcGFuLnNjYW5pYS1pY29uLWVkaXQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTA2X0VkaXQtMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWNvbnZlcnNhdGlvbixcclxuc3Bhbi5zY2FuaWEtaWNvbi1jb252ZXJzYXRpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTA3X0NvbnZlcnNhdGlvbi0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tc2V0dGluZ3MsXHJcbnNwYW4uc2NhbmlhLWljb24tc2V0dGluZ3Mge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTA4X1NldHRpbmdzLTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1ib3gsXHJcbnNwYW4uc2NhbmlhLWljb24tYm94IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TL0JveF8yNF80OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tY3JhbmUsXHJcbnNwYW4uc2NhbmlhLWljb24tY3JhbmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvQ3JhbmUtMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWZpZnRoLXdoZWVsLFxyXG5zcGFuLnNjYW5pYS1pY29uLWZpZnRoLXdoZWVsIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TL0ZpZnRoX3doZWVsLTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1maXJlLWVuZ2luZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1maXJlLWVuZ2luZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy9GaXJlX2VuZ2luZS0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24taG9vay1saWZ0LFxyXG5zcGFuLnNjYW5pYS1pY29uLWhvb2stbGlmdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy9Ib29rX2xpZnQtMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXJlY292ZXJ5LWJvZHksXHJcbnNwYW4uc2NhbmlhLWljb24tcmVjb3ZlcnktYm9keSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy9SZWNvdmVyeV9ib2R5LTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1yZWZ1c2UtY29sbGVjdGlvbi1ib2R5LFxyXG5zcGFuLnNjYW5pYS1pY29uLXJlZnVzZS1jb2xsZWN0aW9uLWJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvUmVmdXNlX2NvbGxlY3Rpb25fYm9keS0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdGFpbC1saWZ0LFxyXG5zcGFuLnNjYW5pYS1pY29uLXRhaWwtbGlmdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy9UYWlsX2xpZnQtMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRhbmstYm9keSxcclxuc3Bhbi5zY2FuaWEtaWNvbi10YW5rLWJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvVGFua19ib2R5LTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10aW1iZXItYm9keSxcclxuc3Bhbi5zY2FuaWEtaWNvbi10aW1iZXItYm9keSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy9UaW1iZXJfYm9keS0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdGlwcGVyX2JvZHksXHJcbnNwYW4uc2NhbmlhLWljb24tdGlwcGVyX2JvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvVGlwcGVyX2JvZHktMjQtNDhweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRyYWlsZXIsXHJcbnNwYW4uc2NhbmlhLWljb24tdHJhaWxlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy9UcmFpbGVyLTI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi12ZWhpY2xlLXRyYW5zcG9ydC1ib2R5LFxyXG5zcGFuLnNjYW5pYS1pY29uLXZlaGljbGUtdHJhbnNwb3J0LWJvZHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvVmVoaWNsZV90cmFuc3BvcnRfYm9keS0yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdHJ1Y2stc2VydmljZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wMV9TSVNfVHJ1Y2tfc2VydmljZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYnVzLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tYnVzLXNlcnZpY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzAyX1NJU19CdXNfc2VydmljZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZW5naW5lLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tZW5naW5lLXNlcnZpY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzAzX1NJU19FbmdpbmVzX3NlcnZpY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2VydmljZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1tYXJpbmUtZW5naW5lLXNlcnZpY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzA0X1NJU19NYXJpbmVfZW5naW5lX3NlcnZpY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2VydmljZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1nZW5zdGVzLXNlcnZpY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzA1X1NJU19TY2FuaWFfZ2Vuc2V0c19zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi0yNGgtYnJlYWtkb3duLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tMjRoLWJyZWFrZG93bi1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wNl9TSVNfMjRoX2VtZXJnZW5jeV9icmVha2Rvd25fc2VydmljZS01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tYWNjaWRlbnQtcmVwYWlycyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1hY2NpZGVudC1yZXBhaXJzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wN19TSVNfQWNjaWRlbnRfcmVwYWlycy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tdG93aW5nLXJlY292ZXJ5LXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tdG93aW5nLXJlY292ZXJ5LXNlcnZpY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzA4X1NJU19Ub3dpbmdfYW5kX3JlY292ZXJ5X3NlcnZpY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRvbGwtY29sbGVjdC1yZWNpdmVyeS1zZXJ2aWNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLXRvbGwtY29sbGVjdC1yZWNpdmVyeS1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wOV9TSVNfVG9sbF9jb2xsZWN0X2FuZF9yZWNvdmVyeV9zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10eXJlLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tdHlyZS1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8xMF9TSVNfVHlyZV9zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi12ZWhpY2xlLXdhc2hpbmcsXHJcbnNwYW4uc2NhbmlhLWljb24tdmVoaWNsZS13YXNoaW5nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8xMV9TSVNfVmVoaWNsZV93YXNoaW5nLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi12ZWhpY2xlLXJlbnRhbCxcclxuc3Bhbi5zY2FuaWEtaWNvbi12ZWhpY2xlLXJlbnRhbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTJfU0lTX1ZlaGljbGVfcmVudGFsLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10cnVjay1zYWxlcyxcclxuc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1zYWxlcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTNfU0lTX1RydWNrX3NhbGVzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1idXMtc2FsZXMsXHJcbnNwYW4uc2NhbmlhLWljb24tYnVzLXNhbGVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8xNF9TSVNfQnVzX3NhbGVzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1wb3dlci1lbmdpbmUtc2FsZXMsXHJcbnNwYW4uc2NhbmlhLWljb24tcG93ZXItZW5naW5lLXNhbGVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8xNV9TSVNfUG93ZXJfZ2VuZXJhdGlvbl9lbmdpbmVfc2FsZXMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2FsZXMsXHJcbnNwYW4uc2NhbmlhLWljb24tbWFyaW5lLWVuZ2luZS1zYWxlcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTZfU0lTX01hcmluZV9lbmdpbmVfc2FsZXMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2FsZXMsXHJcbnNwYW4uc2NhbmlhLWljb24tZ2Vuc3Rlcy1zYWxlcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTdfU0lTX1NjYW5pYV9nZW5zZXRzX3NhbGVzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1wYXJ0cy1zYWxlcyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1wYXJ0cy1zYWxlcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMThfU0lTX1NjYW5pYV9wYXJ0c19zYWxlcy01NC03MnB4LnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLWljb24tZGlnaXRhbC10YWNob2dyYXBoLWRvd25sb2FkLFxyXG5zcGFuLnNjYW5pYS1pY29uLWRpZ2l0YWwtdGFjaG9ncmFwaC1kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTlfU0lTX0RpZ2l0YWxfdGFjaG9ncmFwaF9kYXRhX2Rvd25sb2FkLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1kaWdpdGFsLXRhY2hvZ3JhcGgtaW5zcGVjdGlvbixcclxuc3Bhbi5zY2FuaWEtaWNvbi1kaWdpdGFsLXRhY2hvZ3JhcGgtaW5zcGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjBfU0lTX0RpZ2l0YWxfdGFjaG9ncmFwaF9pbnNwZWN0aW9uX2FuZF9yZXBhaXJzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1hbmFsb2d1ZS10YWNob2dyYXBoLWluc3BlY3Rpb24sXHJcbnNwYW4uc2NhbmlhLWljb24tYW5hbG9ndWUtdGFjaG9ncmFwaC1pbnNwZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yMV9TSVNfQW5hbG9ndWVfdGFjaG9ncmFwaF9pbnNwZWN0aW9uX2FuZF9yZXBhaXJzLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1yb2xsZXItYnJha2UtdGVzdCxcclxuc3Bhbi5zY2FuaWEtaWNvbi1yb2xsZXItYnJha2UtdGVzdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjJfU0lTX1JvbGxlcl9icmFrZV90ZXN0LTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10cmFpbGVyLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tdHJhaWxlci1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yM19TSVNfVHJhaWxlcl9zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1yZWZyaWdlcmF0aW9uLXNlcnZpY2UsXHJcbnNwYW4uc2NhbmlhLWljb24tcmVmcmlnZXJhdGlvbi1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yNF9TSVNfVHJhbnNwb3J0X3JlZnJpZ2VyYXRpb25fdW5pdF9zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi10YXJwYXVsaW4tc2VydmljZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi10YXJwYXVsaW4tc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjVfU0lTX1RhcnBhdWxpbl9zZXJ2aWNlLTU0LTcycHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1hZHItc2VydmljZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1hZHItc2VydmljZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjZfU0lTX0FEUl9WZWhpY2xlX3NlcnZpY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWh5ZHJhdWxpY3Mtc2VydmljZSxcclxuc3Bhbi5zY2FuaWEtaWNvbi1oeWRyYXVsaWNzLXNlcnZpY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzI3X1NJU19IeWRyYXVsaWNzX2JvZHl3b3JrX3NlcnZpY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXVzZWQtdmVoaWNsZS1zYWxlcyxcclxuc3Bhbi5zY2FuaWEtaWNvbi11c2VkLXZlaGljbGUtc2FsZXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzI4X1NJU19Vc2VkX3ZlaGljbGVfc2FsZXMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW1pbmluZy1zZXJ2aWNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLW1pbmluZy1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yOV9TSVNfTWluaW5nX3NlcnZpY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLW1pbmluZy1zYWxlcyxcclxuc3Bhbi5zY2FuaWEtaWNvbi1taW5pbmctc2FsZXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzMwX1NJU19NaW5pbmdfc2FsZXMtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLXRhaWwtbGlmdC1zZXJ2aWNlLFxyXG5zcGFuLnNjYW5pYS1pY29uLXRhaWwtbGlmdC1zZXJ2aWNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8zMV9TSVNfVGFpbF9saWZ0X3NlcnZpY2UtNTQtNzJweC5zdmcnKTtcclxufVxyXG5pLnNjYW5pYS1pY29uLWZpeGVkLXByaWNlLXJlcGFpcnMsXHJcbnNwYW4uc2NhbmlhLWljb24tZml4ZWQtcHJpY2UtcmVwYWlycyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvcHJvZHVjdHMtc2VydmljZXMvU1ZHX1BPUy8wMV9GaXhlZF9wcmljZV9yZXBhaXJzXzI0LTQ4cHguc3ZnJyk7XHJcbn1cclxuaS5zY2FuaWEtaWNvbi1zZXJ2aWNlX2V4Y2hhbmdlLFxyXG5zcGFuLnNjYW5pYS1pY29uLXNlcnZpY2VfZXhjaGFuZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Byb2R1Y3RzLXNlcnZpY2VzL1NWR19QT1MvMDJfU2VydmljZV9leGNoYW5nZV8yNC00OHB4LnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMDFfRmluZF9hX2RlYWxlci01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zZWFyY2gsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNlYXJjaCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wMl9JY29uX3NlYXJjaC01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1jbG9zZS1pbnB1dCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tY2xvc2UtaW5wdXQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMDNfU2VhcmNoLWRlc2t0b3BfaW4tZmllbGQtZGVsZXRlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXNlYXJjaC1tb2JpbGUsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNlYXJjaC1tb2JpbGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMDRfU2VhcmNoLW1vYmlsZV9pbi1maWVsZC1kZWxldGUtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tbWVudS1tb2JpbGUsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLW1lbnUtbW9iaWxlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzA1X01lbnVfbW9iaWxlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWNsb3NlLW1vYmlsZS1tZW51LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1jbG9zZS1tb2JpbGUtbWVudSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wNl9NZW51X2Nsb3NlX2J1dHRvbl9Nb2JpbGUtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tbWVudS1iYWNrLWJ1dHRvbixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tbWVudS1iYWNrLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wN19NZW51X2JhY2tfYnV0dG9uLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLW15LXNjYW5pYS1tb2JpbGUsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLW15LXNjYW5pYS1tb2JpbGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMDhfTXlfc2NhbmlhX01vYmlsZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zaGFyZS1zb2NpYWwtbWVkaWEsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNoYXJlLXNvY2lhbC1tZWRpYSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wOV9TaGFyZV9wYWdlX3Rvb2xfc2hhcmVfaWNvbi01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zaGFyZS1wYWdlLXRvb2wsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNoYXJlLXBhZ2UtdG9vbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xMF9TaGFyZV9wYWdlX3Rvb2wtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tdmlkZW8tcGxheSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tdmlkZW8tcGxheSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xMV9WaWRlb19wbGF5X2ljb24tNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZmluZC1hLWRlYWxlcixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZmluZC1hLWRlYWxlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xMl9GaW5kX2FfZGVhbGVyX0NUQS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1vcGVuLWFjY29yZGlhbi1wbHVzLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1vcGVuLWFjY29yZGlhbi1wbHVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzEzX09wZW5fYWNjb3JkaWFuX3BsdXNfTW9iaWxlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWNsb3NlLWFjY29yZGlhbi1taW51cyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tY2xvc2UtYWNjb3JkaWFuLW1pbnVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzE0X0Nsb3NlX2FjY29yZGlhbl9taW51c19pY29uX01vYmlsZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi10aWNrLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi10aWNrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzE1X1RpY2tfaWNvbi01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1maWx0ZXItZHJvcGRvd24sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWZpbHRlci1kcm9wZG93biB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xNl9GaWx0ZXJfZHJvcF9kb3duX2ljb24tNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItZGV0ZWN0LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1kZXRlY3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTdfRGVhbGVyX2xvY2F0b3JfRGV0ZWN0X2xvY2F0aW9uXzU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLW1hcC1waW4sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLW1hcC1waW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMThfRGVhbGVyX2xvY2F0b3JfbWFwX3Bpbl9maWxsZWQtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItY3VycmVudCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItY3VycmVudCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xOV9EZWFsZXJfbG9jYXRvcl9DdXJyZW50X2xvY2F0aW9uX3Bpbi01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy1sb2NhdGlvbixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tam9iLXBvc3RpbmctbG9jYXRpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjBfSm9iX3Bvc3RpbmdfaW5mb19Mb2NhdGlvbl9nZW5lcmljLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLXdvcmthcmVhLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy13b3JrYXJlYSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yMV9Kb2JfcG9zdGluZ19pbmZvX0xvY2F0aW9uX2dlbmVyaWMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tam9iLXBvc3RpbmctY2xvc2luZy1kYXRlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy1jbG9zaW5nLWRhdGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjJfQ2xvc2luZ19kYXRlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWVtYWlsLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1lbWFpbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yM19FLW1haWxfVVMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZGVhbGVyLXdlYnNpdGUsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWRlYWxlci13ZWJzaXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzI0X1ZpZXdfZGVhbGVyX3dlYnNpdGUtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZGVhbGVyLWRpcmVjdGlvbixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZGVhbGVyLWRpcmVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yNV9EZWFsZXJfa2V5X2FjdGlvbnNfR2V0X2RpcmVjdGlvbnNfZ2VuZXJpY181NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi10cnVjayxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tdHJ1Y2sge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjZfVHJ1Y2stNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZW5naW5lLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1lbmdpbmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjdfRW5naW5lLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWJ1cyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tYnVzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzI4X0J1cy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1ib2F0LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1ib2F0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzI5X0JvYXQtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZmluYW5jZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZmluYW5jZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zMF9GaW5hbmNlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWNvbnZleW9yYmVsdCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tY29udmV5b3JiZWx0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzMxX0NvbnZleW9yYmVsdF9NYWNoaW5lcnktNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tcG93ZXJnZW4sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXBvd2VyZ2VuIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzMyX1Bvd2VyZ2VuLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWluc3VyYW5jZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24taW5zdXJhbmNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzMzX0luc3VyYW5jZV9yaXNrX21hbmFnZW1lbnQtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tcmVwYWlycyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tcmVwYWlycyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zNF9SZXBhaXJzLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWNvbm5lY3RlZC1zZXJ2aWNlcyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tY29ubmVjdGVkLXNlcnZpY2VzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzM1X0Nvbm5lY3RlZF9zZXJ2aWNlcy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi10cmFpbmluZy1jbGFzc3Jvb20sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXRyYWluaW5nLWNsYXNzcm9vbSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zNl9UcmFpbmluZ19DbGFzc3Jvb20tNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tYnVzLWRyaXZlcixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tYnVzLWRyaXZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zN19Ecml2ZXJfQnVzX2RyaXZlci01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1idXNpbmVzcy1vcGVyYXRvcixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tYnVzaW5lc3Mtb3BlcmF0b3Ige1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzhfQnVzaW5lc3Nfb3BlcmF0b3ItNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tcGFzc2VuZ2VyLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1wYXNzZW5nZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzlfUGFzc2FuZ2VyLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLW1lY2hhbmljLXRlY2huaWNpYW4sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLW1lY2hhbmljLXRlY2huaWNpYW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDBfTWVjaGFuaWNfVGVjaG5pY2lhbi01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1jb25jcmV0ZS1taXhlcixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tY29uY3JldGUtbWl4ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDJfQ29uY3JldGVfbWl4ZXItNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHktY29tcG9uZW50LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi10cnVjay1hc3NlbWJseS1jb21wb25lbnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDNfVHJ1Y2tfYXNzZW1ibHktNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tYnVzLWFwcGxpY2F0aW9uLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1idXMtYXBwbGljYXRpb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDRfQnVzX2FwcGxpY2F0aW9uLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWVuZ2luZS1hcHBsaWNhdGlvbixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZW5naW5lLWFwcGxpY2F0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzQ1X0VuZ2luZV9hcHBsaWNhdGlvbi01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1mdWVsLWVjb25vbXksXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWZ1ZWwtZWNvbm9teSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80Nl9GdWVsX2Vjb25vbXktNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc3VzdGFpbmFiaWxpdHksXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXN1c3RhaW5hYmlsaXR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzQ3X1N1c3RhaW5hYmlsbGl0eV9FbnZpcm9ubWVudC01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1jb21mb3J0LXBhc3Nlbmdlcixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tY29tZm9ydC1wYXNzZW5nZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDhfQ29tZm9ydF9QYXNzYW5nZXJfZW52aXJvbm1lbnQtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZHJpdmVyLW9tcHRpbWl6YXRpb24sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWRyaXZlci1vbXB0aW1pemF0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzQ5X0RyaXZlcl9vcHRpbWlzYXRpb24tNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tdXB0aW1lLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi11cHRpbWUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTBfVXB0aW1lLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXByb2R1Y3Rpdml0eSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tcHJvZHVjdGl2aXR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzUxX1Byb2R1Y3Rpdml0eS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1idXNpbmVzcy1ncm93dGgsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWJ1c2luZXNzLWdyb3d0aCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81Ml9CdXNpbmVzc19ncm93dGgtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZWZmaWNpZW5jeSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZWZmaWNpZW5jeSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81M19FZmZpY2llbmN5LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWNvbmRpdGlvbi1yb2Fkcyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tY29uZGl0aW9uLXJvYWRzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzU0X0NvbmRpdGlvbnNfcm9hZHMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc2FmZXR5LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zYWZldHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTVfU2FmZXR5XzU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXF1YWxpdHktZW5naW5lZXJpbmcsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXF1YWxpdHktZW5naW5lZXJpbmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTZfUXVhbGl0eV9FbmdpbmVlcmluZy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi10b2UsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXRvZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81N19UT0UtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tYWx0ZXJuYXRpdmUtZnVlbHMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWFsdGVybmF0aXZlLWZ1ZWxzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzU4X0FsdGVybmF0aXZlX2Z1ZWxzLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXRtYSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tdG1hIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzU5X1RNQS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1wYXlsb2FkLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1wYXlsb2FkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzYwX1BheWxvYWQtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZHJpdmVhYmlsaXR5LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1kcml2ZWFiaWxpdHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjFfRHJpdmVhYmlsaXR5LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1hbmFseXNpcyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZWNvbHV0aW9uLWFuYWx5c2lzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzYyX0Vjb2x1dGlvbl9hbmFseXNpcy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1lY29sdXRpb24tc29sdXRpb25zLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1lY29sdXRpb24tc29sdXRpb25zIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzYzX0Vjb2x1dGlvbl9zb2x1dGlvbnMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tZWNvbHV0aW9uLXJlc3VsdHMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1yZXN1bHRzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzY0X0Vjb2x1dGlvbl9yZXN1bHRzLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWZ1ZWwtZWZmaWNlbmN5LFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1mdWVsLWVmZmljZW5jeSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82NV9GdWVsX2VmZmljZW5jeS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1jbzItZW1pc3Npb25zLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1jbzItZW1pc3Npb25zIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzY2X0NvMl9lbWlzc2lvbnMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tbWlsZXMtY2FwYWNpdHksXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLW1pbGVzLWNhcGFjaXR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzY3X01pbGVzX2NhcGFjaXR5LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWV2ZW50cyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZXZlbnRzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzY4X0V2ZW50cy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi10cnVjay1hc3NlbWJseSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjlfVHJ1Y2tfYXNzZW1ibHktNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24td2FpdGluZy10aW1lLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi13YWl0aW5nLXRpbWUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzBfV2FpdGluZy10aW1lLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWV4cGxvcmUsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWV4cGxvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzFfRXhwbG9yZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zZWUtZGV0YWlscyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tc2VlLWRldGFpbHMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzJfU2VlIGRldGFpbHMtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tbmV0d29yay13b3JsZHdpZGUtb3Blbixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tbmV0d29yay13b3JsZHdpZGUtb3BlbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83M19TY2FuaWFfbmV0d29ya193b3JsZHdpZGVfb3Blbl8yNGgtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24td2FycmFudHksXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXdhcnJhbnR5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc0X1dhcnJhbnR5LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWdlYXItc2hpZnQsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWdlYXItc2hpZnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzVfR2Vhcl9zaGlmdC01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1rbm93bGVkZ2UsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWtub3dsZWRnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83Nl9Lbm93bGVkZ2UtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tYnJha2UsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWJyYWtlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc3X0JyYWtlLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1mYWNlYm9vayxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9GYWNlYm9va19uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWZsaWNrcixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWZsaWNrciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfRmxpY2tyX25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZ29vZ2xlcGx1cyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWdvb2dsZXBsdXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX0dvb2dsZVBsdXNfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1pbnN0YWdyYW0sXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1pbnN0YWdyYW0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX0luc3RhZ3JhbV9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWxpbmtlZGluLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtbGlua2VkaW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX0xpbmtlZGluX25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtc2xpZGVzaGFyZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXNsaWRlc2hhcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX1NsaWRlU2hhcmVfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS10d2l0dGVyLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtdHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfVHdpdHRlcl9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9Zb3V0dWJlX25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEteW91dHViZS12YXJpYXRpb24tMixcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUtdmFyaWF0aW9uLTIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX1lvdXR1YmVfdmFyaWF0aW9uLTJfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLXNhdmUtZG93bmxvYWQsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNhdmUtZG93bmxvYWQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvODRfU2F2ZS01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1lbWVyZ2VuY3ksXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWVtZXJnZW5jeSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OV9FbWVyZ2VuY3lfNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tdGltZSxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tdGltZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy84MF9UaW1lLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWJhdHRlcnksXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWJhdHRlcnkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvODFfQmF0dGVyeV81NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1kYXRlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1kYXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzgyX0RhdGUtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tc291bmQsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLXNvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzgzX1NvdW5kLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLW5vLXBob3RvLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1uby1waG90byB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85Ml9Ob19waG90by01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1uby1zbW9raW5nLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1uby1zbW9raW5nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzkzX05vX3Ntb2tpbmctNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tbm8tZHJ1Z3Mtb3ItYWxjb2hvbCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tbm8tZHJ1Z3Mtb3ItYWxjb2hvbCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85NF9Ob19kcnVnc19vcl9hbGNvaG9sLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWRyaXZlcnMtbGljZW5jZS1yZXF1aXJlZCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tZHJpdmVycy1saWNlbmNlLXJlcXVpcmVkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzk1X0RyaXZlcnNfbGljZW5jZV9yZXF1aXJlZC01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1mb3JiaWRkZW4tdG8tZW50ZXItY291cnNlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1mb3JiaWRkZW4tdG8tZW50ZXItY291cnNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzk2X0ZvcmJpZGRlbl90b19lbnRlcl9jb3Vyc2UtNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24td2Vhci1zZWF0YmVsdCxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24td2Vhci1zZWF0YmVsdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85N19XZWFyX3NlYXRiZWx0LTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLW5vLXBob25lLWR1cmluZy1kcml2aW5nLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1uby1waG9uZS1kdXJpbmctZHJpdmluZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85OF9Ob19waG9uZV9kdXJpbmdfZHJpdmluZy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1saXN0ZW4tdG8tZGVtby1kcml2ZXIsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWxpc3Rlbi10by1kZW1vLWRyaXZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85OV9MaXN0ZW5fdG9fZGVtb19kcml2ZXItNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tY29ubmVjdGVkLXNlcnZpY2VzLWJ1cyxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tY29ubmVjdGVkLXNlcnZpY2VzLWJ1cyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xMDBfQ29ubmVjdGVkX3NlcnZpY2VzX2J1cy01NC03MnB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1pbmZvLXJvdW5kLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1pbmZvLXJvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzEwMV9JbmZvX3JvdW5kLTU0LTcycHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWNhbGwtdXMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWNhbGwtdXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTAyX0NhbGxfdXNfNTQtNzJweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5uZWcuc2NhbmlhLWljb24tbGluayxcclxuc3Bhbi5uZWcuc2NhbmlhLWljb24tbGluayB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xMDNfTGluay1pY29uLTI0LTQ4cHhfbmVnLnN2ZycpO1xyXG59XHJcbmkubmVnLnNjYW5pYS1pY29uLWZpeGVkLXByaWNlLXJlcGFpcnMsXHJcbnNwYW4ubmVnLnNjYW5pYS1pY29uLWZpeGVkLXByaWNlLXJlcGFpcnMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Byb2R1Y3RzLXNlcnZpY2VzL1NWR19ORUcvMDFfRml4ZWRfcHJpY2VfcmVwYWlyc18yNC00OHB4X25lZy5zdmcnKTtcclxufVxyXG5pLm5lZy5zY2FuaWEtaWNvbi1zZXJ2aWNlX2V4Y2hhbmdlLFxyXG5zcGFuLm5lZy5zY2FuaWEtaWNvbi1zZXJ2aWNlX2V4Y2hhbmdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9wcm9kdWN0cy1zZXJ2aWNlcy9TVkdfTkVHLzAyX1NlcnZpY2VfZXhjaGFuZ2VfMjQtNDhweF9uZWcuc3ZnJyk7XHJcbn1cclxuaS5hY3RpdmUuc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItZGV0ZWN0LFxyXG5zcGFuLmFjdGl2ZS5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1kZXRlY3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTdfRGVhbGVyX2xvY2F0b3JfRGV0ZWN0X2xvY2F0aW9uXzU0LTcycHgtQWN0aXZlLnN2ZycpO1xyXG59XHJcbmkuc2NhbmlhLXRydWNrLWNvbmZpZ3VyYXRvcixcclxuc3Bhbi5zY2FuaWEtdHJ1Y2stY29uZmlndXJhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwNF9UcnVjay1jb25maWd1cmF0b3ItMjQtNDhweC5zdmcnKTtcclxufVxyXG5cbi8qIVxyXG4gKiAgSW1wb3J0aW5nIFNjYW5pYyBDb3Jwb3JhdGUgSWNvbnMgaW5jbHVkaW5nIEZvbnQgQXdlc29tZSB2ZXJzaW9uIDMuMi4xXHJcbiAqL1xyXG4vKiBGT05UIFBBVEhcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5AaW1wb3J0IHVybChcIi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ZvbnRzL2NvcnBvcmF0ZS1pY29ucy9zdHlsZS5jc3NcIik7XHJcblxyXG4vKiFcclxuICogQWRkaXRpb25hbCBDbGFzc2VzIG5vdCByZW5kZXJlZCBieSBJY29Nb29uIHdoZXJlIFNjYW5pYSBDb3Jwb3JhdGUgSWNvbnMgYXJlIGNyZWF0ZWQsIG1haW50YWluZWQgYW5kIGhvc3RlZC5cclxuIC8qIEZPTlQgQVdFU09NRSBDT1JFXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbltjbGFzc149XCJpY29uLVwiXSxcclxuW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAqbWFyZ2luLXJpZ2h0OiAuM2VtO1xyXG59XHJcbltjbGFzc149XCJpY29uLVwiXTpiZWZvcmUsXHJcbltjbGFzcyo9XCIgaWNvbi1cIl06YmVmb3JlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHNwZWFrOiBub25lO1xyXG59XHJcbi8qIG1ha2VzIHRoZSBmb250IDMzJSBsYXJnZXIgcmVsYXRpdmUgdG8gdGhlIGljb24gY29udGFpbmVyICovXHJcbi5pY29uLWxhcmdlOmJlZm9yZSB7XHJcbiAgdmVydGljYWwtYWxpZ246IC0xMCU7XHJcbiAgZm9udC1zaXplOiAxLjMzMzMzMzMzMzMzMzMzMzNlbTtcclxufVxyXG4vKiBtYWtlcyBzdXJlIGljb25zIGFjdGl2ZSBvbiByb2xsb3ZlciBpbiBsaW5rcyAqL1xyXG5hIFtjbGFzc149XCJpY29uLVwiXSxcclxuYSBbY2xhc3MqPVwiIGljb24tXCJdIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLyogaW5jcmVhc2VkIGZvbnQgc2l6ZSBmb3IgaWNvbi1sYXJnZSAqL1xyXG5bY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1maXhlZC13aWR0aCxcclxuW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLWZpeGVkLXdpZHRoIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEuMTQyODU3MTQyODU3MTQyOGVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjg1NzE0Mjg1NzE0Mjg1N2VtO1xyXG59XHJcbltjbGFzc149XCJpY29uLVwiXS5pY29uLWZpeGVkLXdpZHRoLmljb24tbGFyZ2UsXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1maXhlZC13aWR0aC5pY29uLWxhcmdlIHtcclxuICB3aWR0aDogMS40Mjg1NzE0Mjg1NzE0Mjg2ZW07XHJcbn1cclxuLmljb25zLXVsIHtcclxuICBtYXJnaW4tbGVmdDogMi4xNDI4NTcxNDI4NTcxNDNlbTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmljb25zLXVsID4gbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaWNvbnMtdWwgLmljb24tbGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMi4xNDI4NTcxNDI4NTcxNDNlbTtcclxuICB3aWR0aDogMi4xNDI4NTcxNDI4NTcxNDNlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuW2NsYXNzXj1cImljb24tXCJdLmhpZGUsXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaWNvbi1tdXRlZCB7XHJcbiAgY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuLmljb24tbGlnaHQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5pY29uLWRhcmsge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTtcclxuICBwYWRkaW5nOiAuMmVtIC4yNWVtIC4xNWVtO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uaWNvbi0yeCB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuLmljb24tMnguaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uaWNvbi0zeCB7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuLmljb24tM3guaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uaWNvbi00eCB7XHJcbiAgZm9udC1zaXplOiA0ZW07XHJcbn1cclxuLmljb24tNHguaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogNHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uaWNvbi01eCB7XHJcbiAgZm9udC1zaXplOiA1ZW07XHJcbn1cclxuLmljb24tNXguaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLmljb24tNngge1xyXG4gIGZvbnQtc2l6ZTogNmVtO1xyXG59XHJcbi5pY29uLTZ4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDZweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLmljb24tN3gge1xyXG4gIGZvbnQtc2l6ZTogN2VtO1xyXG59XHJcbi5pY29uLTd4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDdweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDlweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDlweDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuLmljb24tOHgge1xyXG4gIGZvbnQtc2l6ZTogOGVtO1xyXG59XHJcbi5pY29uLTh4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDhweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLTl4IHtcclxuICBmb250LXNpemU6IDllbTtcclxufVxyXG4uaWNvbi05eC5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA5cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTFweDtcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG59XHJcblxyXG4uaWNvbi1leHRyZW1lIHtcclxuZm9udC1zaXplOiA1MGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnB1bGwtbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuW2NsYXNzXj1cImljb24tXCJdLnB1bGwtbGVmdCxcclxuW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLWxlZnQge1xyXG4gIG1hcmdpbi1yaWdodDogLjNlbTtcclxufVxyXG5bY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1yaWdodCxcclxuW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLXJpZ2h0IHtcclxuICBtYXJnaW4tbGVmdDogLjNlbTtcclxufVxyXG4vKiBCT09UU1RSQVAgU1BFQ0lGSUMgQ0xBU1NFU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBCb290c3RyYXAgMi4wIHNwcml0ZXMubGVzcyByZXNldCAqL1xyXG5bY2xhc3NePVwiaWNvbi1cIl0sXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLyogbW9yZSBzcHJpdGVzLmxlc3MgcmVzZXQgKi9cclxuLmljb24td2hpdGUsXHJcbi5uYXYtcGlsbHMgPiAuYWN0aXZlID4gYSA+IFtjbGFzc149XCJpY29uLVwiXSxcclxuLm5hdi1waWxscyA+IC5hY3RpdmUgPiBhID4gW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLm5hdi1saXN0ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5uYXYtbGlzdCA+IC5hY3RpdmUgPiBhID4gW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLm5hdmJhci1pbnZlcnNlIC5uYXYgPiAuYWN0aXZlID4gYSA+IFtjbGFzc149XCJpY29uLVwiXSxcclxuLm5hdmJhci1pbnZlcnNlIC5uYXYgPiAuYWN0aXZlID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyID4gW2NsYXNzXj1cImljb24tXCJdLFxyXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciA+IFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3MqPVwiIGljb24tXCJdLFxyXG4uZHJvcGRvd24tc3VibWVudTpob3ZlciA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1zdWJtZW51OmhvdmVyID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuLyoga2VlcHMgQm9vdHN0cmFwIHN0eWxlcyB3aXRoIGFuZCB3aXRob3V0IGljb25zIHRoZSBzYW1lICovXHJcbi5idG4gW2NsYXNzXj1cImljb24tXCJdLmljb24tbGFyZ2UsXHJcbi5uYXYgW2NsYXNzXj1cImljb24tXCJdLmljb24tbGFyZ2UsXHJcbi5idG4gW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLWxhcmdlLFxyXG4ubmF2IFtjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1sYXJnZSB7XHJcbiAgbGluZS1oZWlnaHQ6IC45ZW07XHJcbn1cclxuLmJ0biBbY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1zcGluLFxyXG4ubmF2IFtjbGFzc149XCJpY29uLVwiXS5pY29uLXNwaW4sXHJcbi5idG4gW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLXNwaW4sXHJcbi5uYXYgW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLXNwaW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubmF2LXRhYnMgW2NsYXNzXj1cImljb24tXCJdLFxyXG4ubmF2LXBpbGxzIFtjbGFzc149XCJpY29uLVwiXSxcclxuLm5hdi10YWJzIFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5uYXYtcGlsbHMgW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLm5hdi10YWJzIFtjbGFzc149XCJpY29uLVwiXS5pY29uLWxhcmdlLFxyXG4ubmF2LXBpbGxzIFtjbGFzc149XCJpY29uLVwiXS5pY29uLWxhcmdlLFxyXG4ubmF2LXRhYnMgW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLWxhcmdlLFxyXG4ubmF2LXBpbGxzIFtjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1sYXJnZSB7XHJcbiAgbGluZS1oZWlnaHQ6IC45ZW07XHJcbn1cclxuLmJ0biBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngsXHJcbi5idG4gW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLWxlZnQuaWNvbi0yeCxcclxuLmJ0biBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4LFxyXG4uYnRuIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4IHtcclxuICBtYXJnaW4tdG9wOiAuMThlbTtcclxufVxyXG4uYnRuIFtjbGFzc149XCJpY29uLVwiXS5pY29uLXNwaW4uaWNvbi1sYXJnZSxcclxuLmJ0biBbY2xhc3MqPVwiIGljb24tXCJdLmljb24tc3Bpbi5pY29uLWxhcmdlIHtcclxuICBsaW5lLWhlaWdodDogLjhlbTtcclxufVxyXG4uYnRuLmJ0bi1zbWFsbCBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngsXHJcbi5idG4uYnRuLXNtYWxsIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngsXHJcbi5idG4uYnRuLXNtYWxsIFtjbGFzc149XCJpY29uLVwiXS5wdWxsLXJpZ2h0Lmljb24tMngsXHJcbi5idG4uYnRuLXNtYWxsIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4IHtcclxuICBtYXJnaW4tdG9wOiAuMjVlbTtcclxufVxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzXj1cImljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtcmlnaHQuaWNvbi0yeCB7XHJcbiAgbWFyZ2luLXRvcDogLjA1ZW07XHJcbn1cclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzXj1cImljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4IHtcclxuICBtYXJnaW4tcmlnaHQ6IC4yZW07XHJcbn1cclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzXj1cImljb24tXCJdLnB1bGwtcmlnaHQuaWNvbi0yeCxcclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLXJpZ2h0Lmljb24tMngge1xyXG4gIG1hcmdpbi1sZWZ0OiAuMmVtO1xyXG59XHJcbi8qIEZpeGVzIGFsaWdubWVudCBpbiBuYXYgbGlzdHMgKi9cclxuLm5hdi1saXN0IFtjbGFzc149XCJpY29uLVwiXSxcclxuLm5hdi1saXN0IFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcbi8qIEVYVFJBU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBTdGFja2VkIGFuZCBsYXllcmVkIGljb24gKi9cclxuLmljb24tc3RhY2sge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBsaW5lLWhlaWdodDogMmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiAtMzUlO1xyXG59XHJcbi5pY29uLXN0YWNrIFtjbGFzc149XCJpY29uLVwiXSxcclxuLmljb24tc3RhY2sgW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgKmxpbmUtaGVpZ2h0OiAyZW07XHJcbn1cclxuLmljb24tc3RhY2sgLmljb24tc3RhY2stYmFzZSB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgKmxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuLyogQW5pbWF0ZWQgcm90YXRpbmcgaWNvbiAqL1xyXG4uaWNvbi1zcGluIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLW1vei1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1vLWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuLyogUHJldmVudCBzdGFjayBhbmQgc3Bpbm5lcnMgZnJvbSBiZWluZyB0YWtlbiBpbmxpbmUgd2hlbiBpbnNpZGUgYSBsaW5rICovXHJcbmEgLmljb24tc3RhY2ssXHJcbmEgLmljb24tc3BpbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gIH1cclxufVxyXG5ALW1zLWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICB9XHJcbn1cclxuLyogSWNvbiByb3RhdGlvbnMgYW5kIG1pcnJvcmluZyAqL1xyXG4uaWNvbi1yb3RhdGUtOTA6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKTtcclxufVxyXG4uaWNvbi1yb3RhdGUtMTgwOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKTtcclxufVxyXG4uaWNvbi1yb3RhdGUtMjcwOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKTtcclxufVxyXG4uaWNvbi1mbGlwLWhvcml6b250YWw6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG59XHJcbi5pY29uLWZsaXAtdmVydGljYWw6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xyXG59XHJcbi8qIGVuc3VyZSByb3RhdGlvbiBvY2N1cnMgaW5zaWRlIGFuY2hvciB0YWdzICovXHJcbmEgLmljb24tcm90YXRlLTkwOmJlZm9yZSxcclxuYSAuaWNvbi1yb3RhdGUtMTgwOmJlZm9yZSxcclxuYSAuaWNvbi1yb3RhdGUtMjcwOmJlZm9yZSxcclxuYSAuaWNvbi1mbGlwLWhvcml6b250YWw6YmVmb3JlLFxyXG5hIC5pY29uLWZsaXAtdmVydGljYWw6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxuQGltcG9ydCB1cmwoXCIvcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL2N5cmlsbGljL3NjYW5pYS1jeXJpbGxpYy1mb250cy5jc3NcIik7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1SZWd1bGFyLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgQm9sZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtQm9sZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zJztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUl0YWxpYy5lb3RcIik7XG4gIHNyYzogdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgSXRhbGljJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIEhlYWRsaW5lJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0hlYWRsaW5lLVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zSGVhZGxpbmUtUmVndWxhci5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNIZWFkbGluZS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNIZWFkbGluZS1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zSGVhZGxpbmUtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIEhlYWRsaW5lJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHNyYzogdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0hlYWRsaW5lLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgSGVhZGxpbmUgQm9sZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0hlYWRsaW5lLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBTZW1pIENvbmRlbnNlZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgU2VtaSBDb25kZW5zZWQnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBTZW1pIENvbmRlbnNlZCBCb2xkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIFNlbWkgQ29uZGVuc2VkJztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBTZW1pIENvbmRlbnNlZCBJdGFsaWMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBDb25kZW5zZWQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLVJlZ3VsYXIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBDb25kZW5zZWQnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgQ29uZGVuc2VkIEJvbGQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQuZW90XCIpO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBDb25kZW5zZWQnO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHNyYzogdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBDb25kZW5zZWQgSXRhbGljJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCInaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvU2NhbmlhU2Fuc0NvbmRlbnNlZC1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL1NjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIidodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9mb250cy9zY2FuaWEtc2Fucy9TY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cclxuLyogXHJcblRoZSBTY2FuaWEgTG9nb3R5cGUgU3R5bGVzaGVldFxyXG5UaGUgU2NhbmlhIHN5bWJvbCBhbmQgd29yZG1hcmsgc2hvdWxkIGJlIHVzZWQgaW4gYWNjb3JkYW5jZSB0byB0aGUgZ3VpZGVsaW5lcyBzcGVjaWZpZWQgaW4gdGhlIEJyYW5kIE1hbnVhbC4gXHJcbldlIGRvIG5vdCB3YW50IG91ciBsb2dvdHlwZSB0byBiZSBkb3dubG9hZGVkIHRvIGxvY2FsIHNlcnZlcnMgYXMgdXBkYXRlcyB0byB0aGUgbG9nb3R5cGUgaXMgbWFkZSB0byB0aGVzZSBcclxuY2VudHJhbHkgc3RvcmVkIHZlcnNpb25zLlxyXG5cclxuSG93IHRvIHVzZVxyXG5JbmNsdWRlIHRoaXMgc3R5bGVzaGVldCBpbiB5b3UgYXBwbGljYXRpb24gYnkgY29weWluZyB0aGlzIGxpbmUgb2YgY29kZSB0byB5b3VyIEhFQUQgc2VjdGlvbjpcclxuXHJcbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL2xvZ290eXBlLXN0eWxlc2hlZXQvc2NhbmlhLWxvZ290eXBlLmNzc1wiPlxyXG5cclxuVXNlIHRoZXNlIEhUTUwgdGFncyB0byBzaG93IHRoZSBzeW1ib2wgYW5kIHdvcmRtYXJrLlxyXG48c3BhbiBjbGFzcz1cInNjYW5pYSB3b3JkbWFya1wiPjwvc3Bhbj5cclxuPHNwYW4gY2xhc3M9XCJzY2FuaWEgc3ltYm9sXCI+PC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cInNjYW5pYSBzeW1ib2wgbmVnXCI+PC9zcGFuPiAgRm9yIGEgd2hpdGUgd29yZG1hcmtcclxuPHNwYW4gY2xhc3M9XCJzY2FuaWEgbG9nb3R5cGUtdmVydGljYWwtbG9ja3VwXCI+PC9zcGFuPlxyXG4qL1xyXG5cclxuLnNjYW5pYSAuc3ltYm9sLCAuc2NhbmlhLnN5bWJvbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLXN5bWJvbC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL3NjYW5pYS1zeW1ib2wuc3ZnJyk7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDhweCA0NnB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7ICAgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggXHJcbn1cclxuXHJcbi5zY2FuaWEgLndvcmRtYXJrLCAuc2NhbmlhLndvcmRtYXJrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9zY2FuaWEtd29yZG1hcmsucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9zY2FuaWEtd29yZG1hcmsuc3ZnJyk7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTY5cHggMjhweDtcclxuICAgIHdpZHRoOiAxNjlweDtcclxuICAgIGhlaWdodDogMjhweDtcclxufVxyXG5cclxuLnNjYW5pYSAud29yZG1hcmsubmVnLCAuc2NhbmlhLndvcmRtYXJrLm5lZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9zY2FuaWEtd29yZG1hcmstd2hpdGUucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9zY2FuaWEtd29yZG1hcmstd2hpdGUuc3ZnJyk7ICBcclxufVxyXG5cclxuLyogTG9ja3VwcyBvZiB0aGUgc3ltYm9sIGFuZCB3b3JkbWFyayBzaG91bGQgYmUgdXNlZCBhcyBhbiBleGVwdGlvbiBvbmx5ICovXHJcblxyXG4uc2NhbmlhIC5sb2dvdHlwZS12ZXJ0aWNhbC1sb2NrdXAsIC5zY2FuaWEubG9nb3R5cGUtdmVydGljYWwtbG9ja3VwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9zY2FuaWEtbG9nb3R5cGUtdmVydGljYWwtbG9jay11cC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL3NjYW5pYS1sb2dvdHlwZS12ZXJ0aWNhbC1sb2NrLXVwLnN2ZycpOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1MHB4IDE0MXB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDFweDsgICAgXHJcbn0iXX0= */</style></template></dom-module>
  `;
  document.head.appendChild($_documentContainer.content);
}
