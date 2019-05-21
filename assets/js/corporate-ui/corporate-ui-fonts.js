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
  src: url("ScaniaSans-Regular.eot");
  src: url("ScaniaSans-Regular.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSans-Regular.woff2") format("woff2"), 
  url("ScaniaSans-Regular.woff") format("woff"), 
  url("ScaniaSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans';
  font-weight: bold;
  src: url("ScaniaSans-Bold.eot");
  src: url("ScaniaSans-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSans-Bold.woff2") format("woff2"), 
  url("ScaniaSans-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Bold';
  font-weight: normal;
  src: url("ScaniaSans-Bold.eot");
  src: url("ScaniaSans-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSans-Bold.woff2") format("woff2"), 
  url("ScaniaSans-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans';
  font-style: italic;
  src: url("ScaniaSans-Italic.eot");
  src: url("ScaniaSans-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSans-Italic.woff2") format("woff2"), 
  url("ScaniaSans-Italic.woff") format("woff"), 
  url("ScaniaSans-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Italic';
  font-weight: normal;
  src: url("ScaniaSans-Italic.eot");
  src: url("ScaniaSans-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSans-Italic.woff2") format("woff2"), 
  url("ScaniaSans-Italic.woff") format("woff"), 
  url("ScaniaSans-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline';
  font-weight: normal;
  src: url("ScaniaSansHeadline-Regular.eot");
  src: url("ScaniaSansHeadline-Regular.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansHeadline-Regular.woff2") format("woff2"), 
  url("ScaniaSansHeadline-Regular.woff") format("woff"), 
  url("ScaniaSansHeadline-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline';
  font-weight: bold;
  src: url("ScaniaSansHeadline-Bold.eot");
  src: url("ScaniaSansHeadline-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansHeadline-Bold.woff2") format("woff2"), 
  url("ScaniaSansHeadline-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline Bold';
  font-weight: normal;
  src: url("ScaniaSansHeadline-Bold.eot");
  src: url("ScaniaSansHeadline-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansHeadline-Bold.woff2") format("woff2"), 
  url("ScaniaSansHeadline-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-weight: normal;
  src: url("ScaniaSansSemiCondensed-Regular.eot");
  src: url("ScaniaSansSemiCondensed-Regular.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansSemiCondensed-Regular.woff2") format("woff2"), 
  url("ScaniaSansSemiCondensed-Regular.woff") format("woff"), 
  url("ScaniaSansSemiCondensed-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-weight: bold;
  src: url("ScaniaSansSemiCondensed-Bold.eot");
  src: url("ScaniaSansSemiCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansSemiCondensed-Bold.woff2") format("woff2"),
  url("ScaniaSansSemiCondensed-Bold.woff") format("woff"),
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed Bold';
  font-weight: normal;
  src: url("ScaniaSansSemiCondensed-Bold.eot");
  src: url("ScaniaSansSemiCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansSemiCondensed-Bold.woff2") format("woff2"), 
  url("ScaniaSansSemiCondensed-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-style: italic;
  src: url("ScaniaSansSemiCondensed-Italic.eot");
  src: url("ScaniaSansSemiCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansSemiCondensed-Italic.woff2") format("woff2"), 
  url("ScaniaSansSemiCondensed-Italic.woff") format("woff"), 
  url("ScaniaSansSemiCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed Italic';
  font-weight: normal;
  src: url("ScaniaSansSemiCondensed-Italic.eot");
  src: url("ScaniaSansSemiCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansSemiCondensed-Italic.woff2") format("woff2"), 
  url("ScaniaSansSemiCondensed-Italic.woff") format("woff"), 
  url("ScaniaSansSemiCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-weight: normal;
  src: url("ScaniaSansCondensed-Regular.eot");
  src: url("ScaniaSansCondensed-Regular.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansCondensed-Regular.woff2") format("woff2"), 
  url("ScaniaSansCondensed-Regular.woff") format("woff"), 
  url("ScaniaSansCondensed-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  src: url("ScaniaSansCondensed-Bold.eot");
  src: url("ScaniaSansCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansCondensed-Bold.woff2") format("woff2"), 
  url("ScaniaSansCondensed-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed Bold';
  font-weight: normal;
  src: url("ScaniaSansCondensed-Bold.eot");
  src: url("ScaniaSansCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansCondensed-Bold.woff2") format("woff2"), 
  url("ScaniaSansCondensed-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-style: italic;
  src: url("ScaniaSansCondensed-Italic.eot");
  src: url("ScaniaSansCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansCondensed-Italic.woff2") format("woff2"), 
  url("ScaniaSansCondensed-Italic.woff") format("woff"), 
  url("ScaniaSansCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed Italic';
  font-weight: normal;
  src: url("ScaniaSansCondensed-Italic.eot");
  src: url("ScaniaSansCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansCondensed-Italic.woff2") format("woff2"), 
  url("ScaniaSansCondensed-Italic.woff") format("woff"), 
  url("ScaniaSansCondensed-Italic.ttf") format("truetype");
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

i,span{}

i[class*=scania-icon-],span[class*=scania-icon-]{display:inline-block;vertical-align:middle;background-repeat:no-repeat;background-size:54px;width:54px;height:54px;margin:5px}

i.lg,i.md,i.sm,i.xl,i.xs,i.xxl,span.lg,span.md,span.sm,span.xl,span.xs,span.xxl{display:inline-block}

i.xs,span.xs{background-size:16px;width:16px;height:16px;margin:2px}

i.sm,span.sm{background-size:28px;width:28px;height:28px;margin:2px}

i.md,span.md{background-size:54px;width:54px;height:54px;margin:5px}

i.lg,span.lg{background-size:90px;width:90px;height:90px;margin:8px}

i.xl,span.xl{background-size:140px 140px;width:140px;height:140px;padding:10px}

i.xxl,span.xxl{background-size:240px;width:240px;height:240px;padding:10px}

i.scania-icon-find-a-dealer,span.scania-icon-find-a-dealer{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/01_Find_a_dealer-54-72px.svg')}

i.scania-icon-search,span.scania-icon-search{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/02_Icon_search-54-72px.svg')}

i.scania-icon-close-input,span.scania-icon-close-input{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/03_Search-desktop_in-field-delete-54-72px.svg')}

i.scania-icon-search-mobile,span.scania-icon-search-mobile{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/04_Search-mobile_in-field-delete-54-72px.svg')}

i.scania-icon-menu-mobile,span.scania-icon-menu-mobile{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/05_Menu_mobile-54-72px.svg')}

i.scania-icon-close-mobile-menu,span.scania-icon-close-mobile-menu{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/06_Menu_close_button_Mobile-54-72px.svg')}

i.scania-icon-menu-back-button,span.scania-icon-menu-back-button{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/07_Menu_back_button-54-72px.svg')}

i.scania-icon-my-scania-mobile,span.scania-icon-my-scania-mobile{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/08_My_scania_Mobile-54-72px.svg')}

i.scania-icon-share-social-media,span.scania-icon-share-social-media{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/09_Share_page_tool_share_icon-54-72px.svg')}

i.scania-icon-share-page-tool,span.scania-icon-share-page-tool{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/10_Share_page_tool-54-72px.svg')}

i.scania-icon-video-play,span.scania-icon-video-play{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/11_Video_play_icon-54-72px.svg')}

i.scania-icon-find-a-dealer,span.scania-icon-find-a-dealer{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/12_Find_a_dealer_CTA-54-72px.svg')}

i.scania-icon-open-accordian-plus,span.scania-icon-open-accordian-plus{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/13_Open_accordian_plus_Mobile-54-72px.svg')}

i.scania-icon-close-accordian-minus,span.scania-icon-close-accordian-minus{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/14_Close_accordian_minus_icon_Mobile-54-72px.svg')}

i.scania-icon-tick,span.scania-icon-tick{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/15_Tick_icon-54-72px.svg')}

i.scania-icon-filter-dropdown,span.scania-icon-filter-dropdown{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/16_Filter_drop_down_icon-54-72px.svg')}

i.scania-icon-dealer-locator-detect,span.scania-icon-dealer-locator-detect{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/17_Dealer_locator_Detect_location_54-72px.svg')}

i.scania-icon-dealer-locator-map-pin,span.scania-icon-dealer-locator-map-pin{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/18_Dealer_locator_map_pin_filled-54-72px.svg')}

i.scania-icon-dealer-locator-current,span.scania-icon-dealer-locator-current{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/19_Dealer_locator_Current_location_pin-54-72px.svg')}

i.scania-icon-job-posting-location,span.scania-icon-job-posting-location{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/20_Job_posting_info_Location_generic-54-72px.svg')}

i.scania-icon-job-posting-workarea,span.scania-icon-job-posting-workarea{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/21_Job_posting_info_Location_generic-54-72px.svg')}

i.scania-icon-job-posting-closing-date,span.scania-icon-job-posting-closing-date{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/22_Closing_date-54-72px.svg')}

i.scania-icon-email,span.scania-icon-email{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/23_E-mail_US-54-72px.svg')}

i.scania-icon-dealer-website,span.scania-icon-dealer-website{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/24_View_dealer_website-54-72px.svg')}

i.scania-icon-dealer-direction,span.scania-icon-dealer-direction{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/25_Dealer_key_actions_Get_directions_generic_54-72px.svg')}

i.scania-icon-truck,span.scania-icon-truck{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/26_Truck-54-72px.svg')}

i.scania-icon-engine,span.scania-icon-engine{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/27_Engine-54-72px.svg')}

i.scania-icon-bus,span.scania-icon-bus{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/28_Bus-54-72px.svg')}

i.scania-icon-boat,span.scania-icon-boat{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/29_Boat-54-72px.svg')}

i.scania-icon-finance,span.scania-icon-finance{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/30_Finance-54-72px.svg')}

i.scania-icon-conveyorbelt,span.scania-icon-conveyorbelt{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/31_Conveyorbelt_Machinery-54-72px.svg')}

i.scania-icon-powergen,span.scania-icon-powergen{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/32_Powergen-54-72px.svg')}

i.scania-icon-insurance,span.scania-icon-insurance{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/33_Insurance_risk_management-54-72px.svg')}

i.scania-icon-repairs,span.scania-icon-repairs{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/34_Repairs-54-72px.svg')}

i.scania-icon-connected-services,span.scania-icon-connected-services{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/35_Connected_services-54-72px.svg')}

i.scania-icon-training-classroom,span.scania-icon-training-classroom{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/36_Training_Classroom-54-72px.svg')}

i.scania-icon-bus-driver,span.scania-icon-bus-driver{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/37_Driver_Bus_driver-54-72px.svg')}

i.scania-icon-business-operator,span.scania-icon-business-operator{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/38_Business_operator-54-72px.svg')}

i.scania-icon-passenger,span.scania-icon-passenger{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/39_Passanger-54-72px.svg')}

i.scania-icon-mechanic-technician,span.scania-icon-mechanic-technician{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/40_Mechanic_Technician-54-72px.svg')}

i.scania-icon-concrete-mixer,span.scania-icon-concrete-mixer{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/42_Concrete_mixer-54-72px.svg')}

i.scania-icon-truck-assembly-component,span.scania-icon-truck-assembly-component{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/43_Truck_assembly-54-72px.svg')}

i.scania-icon-bus-application,span.scania-icon-bus-application{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/44_Bus_application-54-72px.svg')}

i.scania-icon-engine-application,span.scania-icon-engine-application{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/45_Engine_application-54-72px.svg')}

i.scania-icon-fuel-economy,span.scania-icon-fuel-economy{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/46_Fuel_economy-54-72px.svg')}

i.scania-icon-sustainability,span.scania-icon-sustainability{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/47_Sustainabillity_Environment-54-72px.svg')}

i.scania-icon-comfort-passenger,span.scania-icon-comfort-passenger{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/48_Comfort_Passanger_environment-54-72px.svg')}

i.scania-icon-driver-omptimization,span.scania-icon-driver-omptimization{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/49_Driver_optimisation-54-72px.svg')}

i.scania-icon-uptime,span.scania-icon-uptime{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/50_Uptime-54-72px.svg')}

i.scania-icon-productivity,span.scania-icon-productivity{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/51_Productivity-54-72px.svg')}

i.scania-icon-business-growth,span.scania-icon-business-growth{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/52_Business_growth-54-72px.svg')}

i.scania-icon-efficiency,span.scania-icon-efficiency{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/53_Efficiency-54-72px.svg')}

i.scania-icon-condition-roads,span.scania-icon-condition-roads{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/54_Conditions_roads-54-72px.svg')}

i.scania-icon-safety,span.scania-icon-safety{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/55_Safety_54-72px.svg')}

i.scania-icon-quality-engineering,span.scania-icon-quality-engineering{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/56_Quality_Engineering-54-72px.svg')}

i.scania-icon-toe,span.scania-icon-toe{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/57_TOE-54-72px.svg')}

i.scania-icon-alternative-fuels,span.scania-icon-alternative-fuels{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/58_Alternative_fuels-54-72px.svg')}

i.scania-icon-tma,span.scania-icon-tma{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/59_TMA-54-72px.svg')}

i.scania-icon-payload,span.scania-icon-payload{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/60_Payload-54-72px.svg')}

i.scania-icon-driveability,span.scania-icon-driveability{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/61_Driveability-54-72px.svg')}

i.scania-icon-ecolution-analysis,span.scania-icon-ecolution-analysis{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/62_Ecolution_analysis-54-72px.svg')}

i.scania-icon-ecolution-solutions,span.scania-icon-ecolution-solutions{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/63_Ecolution_solutions-54-72px.svg')}

i.scania-icon-ecolution-results,span.scania-icon-ecolution-results{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/64_Ecolution_results-54-72px.svg')}

i.scania-icon-fuel-efficency,span.scania-icon-fuel-efficency{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/65_Fuel_efficency-54-72px.svg')}

i.scania-icon-co2-emissions,span.scania-icon-co2-emissions{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/66_Co2_emissions-54-72px.svg')}

i.scania-icon-miles-capacity,span.scania-icon-miles-capacity{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/67_Miles_capacity-54-72px.svg')}

i.scania-icon-events,span.scania-icon-events{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/68_Events-54-72px.svg')}

i.scania-icon-truck-assembly,span.scania-icon-truck-assembly{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/69_Truck_assembly-54-72px.svg')}

i.scania-icon-waiting-time,span.scania-icon-waiting-time{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/70_Waiting-time-54-72px.svg')}

i.scania-icon-explore,span.scania-icon-explore{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/71_Explore-54-72px.svg')}

i.scania-icon-see-details,span.scania-icon-see-details{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/72_See details-54-72px.svg')}

i.scania-icon-network-worldwide-open,span.scania-icon-network-worldwide-open{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/73_Scania_network_worldwide_open_24h-54-72px.svg')}

i.scania-icon-warranty,span.scania-icon-warranty{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/74_Warranty-54-72px.svg')}

i.scania-icon-gear-shift,span.scania-icon-gear-shift{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/75_Gear_shift-54-72px.svg')}

i.scania-icon-knowledge,span.scania-icon-knowledge{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/76_Knowledge-54-72px.svg')}

i.scania-icon-brake,span.scania-icon-brake{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/77_Brake-54-72px.svg')}

i.scania-icon-social-media-facebook,span.scania-icon-social-media-facebook{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Facebook.svg')}

i.scania-icon-social-media-flickr,span.scania-icon-social-media-flickr{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Flickr.svg')}

i.scania-icon-social-media-googleplus,span.scania-icon-social-media-googleplus{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_GooglePlus.svg')}

i.scania-icon-social-media-instagram,span.scania-icon-social-media-instagram{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Instagram.svg')}

i.scania-icon-social-media-linkedin,span.scania-icon-social-media-linkedin{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Linkedin.svg')}

i.scania-icon-social-media-slideshare,span.scania-icon-social-media-slideshare{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_SlideShare.svg')}

i.scania-icon-social-media-twitter,span.scania-icon-social-media-twitter{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Twitter.svg')}

i.scania-icon-social-media-youtube,span.scania-icon-social-media-youtube{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Youtube.svg')}

i.scania-icon-social-media-youtube-variation-2,span.scania-icon-social-media-youtube-variation-2{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Youtube_variation-2.svg')}

i.scania-icon-save-download,span.scania-icon-save-download{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/84_Save-54-72px.svg')}

i.scania-icon-truck-service,span.scania-icon-truck-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/01_SIS_Truck_service-54-72px.svg')}

i.scania-icon-bus-service,span.scania-icon-bus-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/02_SIS_Bus_service-54-72px.svg')}

i.scania-icon-engine-service,span.scania-icon-engine-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/03_SIS_Engines_service-54-72px.svg')}

i.scania-icon-marine-engine-service,span.scania-icon-marine-engine-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/04_SIS_Marine_engine_service-54-72px.svg')}

i.scania-icon-genstes-service,span.scania-icon-genstes-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/05_SIS_Scania_gensets_service-54-72px.svg')}

i.scania-icon-24h-breakdown-service,span.scania-icon-24h-breakdown-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/06_SIS_24h-emergency-breakdown-service_54-72px.svg')}

i.scania-icon-accident-repairs,span.scania-icon-accident-repairs{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/07_SIS_Accident_repairs-54-72px.svg')}

i.scania-icon-towing-recovery-service,span.scania-icon-towing-recovery-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/08_SIS_Towing_and_recovery_service2-54-72px.svg')}

i.scania-icon-toll-collect-recivery-service,span.scania-icon-toll-collect-recivery-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/09_SIS_Toll_collect_and_installation_service-54-72px.svg')}

i.scania-icon-tyre-service,span.scania-icon-tyre-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/10_SIS_Tyre_service-54-72px.svg')}

i.scania-icon-vehicle-washing,span.scania-icon-vehicle-washing{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/11_SIS_Vehicle_washing-54-72px.svg')}

i.scania-icon-vehicle-rental,span.scania-icon-vehicle-rental{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/12_SIS_Vehicle_rental-54-72px.svg')}

i.scania-icon-truck-sales,span.scania-icon-truck-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/13_SIS_Truck_sales-54-72px.svg')}

i.scania-icon-bus-sales,span.scania-icon-bus-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/14_SIS_Bus_sales-54-72px.svg')}

i.scania-icon-power-engine-sales,span.scania-icon-power-engine-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/15_SIS_Power_generation_enigine_sales-54-72px.svg')}

i.scania-icon-marine-engine-sales,span.scania-icon-marine-engine-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/16_SIS_Marine_engine_sales-54-72px.svg')}

i.scania-icon-genstes-sales,span.scania-icon-genstes-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/17_SIS_Scania_gensets_sales-54-72px.svg')}

i.scania-icon-parts-sales,span.scania-icon-parts-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/18_SIS_Scania_parts_sales-54-72px.svg')}

i.scania-icon-digital-tachograph-download,span.scania-icon-digital-tachograph-download{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/19_SIS_Digital_tachograph_data_download-54-72px.svg')}

i.scania-icon-digital-tachograph-inspection,span.scania-icon-digital-tachograph-inspection{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/20_SIS_Digital_tachograph_legal_inspection-54-72px.svg')}

i.scania-icon-analogue-tachograph-inspection,span.scania-icon-analogue-tachograph-inspection{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/21_SIS_Analogue_tachograph_inspection_and_repairs-54-72px.svg')}

i.scania-icon-roller-brake-test,span.scania-icon-roller-brake-test{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/22_SIS_Roller_brake_test-54-72px.svg')}

i.scania-icon-trailer-service,span.scania-icon-trailer-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/23_SIS_Trailer_service-54-72px.svg')}

i.scania-icon-refrigeration-service,span.scania-icon-refrigeration-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/24_SIS_Transport_refrigeration_unit_service-54-72px.svg')}

i.scania-icon-tarpaulin-service,span.scania-icon-tarpaulin-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/25_SIS_Tarpaulin_service-54-72px.svg')}

i.scania-icon-adr-service,span.scania-icon-adr-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/26_SIS_ADR_Vehicle_service-54-72px.svg')}

i.scania-icon-hydraulics-service,span.scania-icon-hydraulics-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/27_SIS_Hydraulics-bodywork_service-54-72px.svg')}

i.scania-icon-used-vehicle-sales,span.scania-icon-used-vehicle-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/28_SIS_Used_vehicle_sales-54-72px.svg')}

i.scania-icon-mining-service,span.scania-icon-mining-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/29_SIS_Mining-service-54-72px.svg')}

i.scania-icon-mining-sales,span.scania-icon-mining-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/30_SIS_Mining-sales-54-72px.svg')}

i.scania-icon-tail-lift-service,span.scania-icon-tail-lift-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/31_SIS_Tail-lift-service-54-72px.svg')}

i.scania-icon-fixed-price-repairs,span.scania-icon-fixed-price-repairs{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/products-services/SVG_POS/01_Fixed_price_repairs_24-48px.svg')}

i.scania-icon-service_exchange,span.scania-icon-service_exchange{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/products-services/SVG_POS/02_Service_exchange_24-48px.svg')}

i.scania-icon-emergency,span.scania-icon-emergency{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/79_Emergency_54-72px.svg')}

i.scania-icon-time,span.scania-icon-time{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/80_Time-54-72px.svg')}

i.scania-icon-battery,span.scania-icon-battery{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/81_Battery_54-72px.svg')}

i.scania-icon-sound,span.scania-icon-sound{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/83_Sound-54-72px.svg')}

i.scania-icon-smart-transport,span.scania-icon-smart-transport{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-date,span.scania-icon-date{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/82_Date-54-72px.svg')}

i.scania-icon-rough-roads,span.scania-icon-rough-roads{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-start-stop,span.scania-icon-start-stop{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-fuel-quality,span.scania-icon-fuel-quality{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-error,span.scania-icon-error{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-heart,span.scania-icon-heart{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-caret-left,span.scania-icon-caret-left{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-caret-right,span.scania-icon-caret-right{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-open-upload,span.scania-icon-open-upload{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-guotation,span.scania-icon-guotation{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-summary,span.scania-icon-summary{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-zoomin,span.scania-icon-zoomin{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-zoomout,span.scania-icon-zoomout{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-no-photo,span.scania-icon-no-photo{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/92_No_photo-54-72px.svg')}

i.scania-icon-no-smoking,span.scania-icon-no-smoking{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/93_No_smoking-54-72px.svg')}

i.scania-icon-no-drugs-or-alcohol,span.scania-icon-no-drugs-or-alcohol{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/94_No_drugs_or_alcohol-54-72px.svg')}

i.scania-icon-drivers-licence-required,span.scania-icon-drivers-licence-required{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/95_Drivers_licence_required-54-72px.svg')}

i.scania-icon-forbidden-to-enter-course,span.scania-icon-forbidden-to-enter-course{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/96_Forbidden_to_enter_course-54-72px.svg')}

i.scania-icon-wear-seatbelt,span.scania-icon-wear-seatbelt{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/97_Wear_seatbelt-54-72px.svg')}

i.scania-icon-no-phone-during-driving,span.scania-icon-no-phone-during-driving{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/98_No_phone_during_driving-54-72px.svg')}

i.scania-icon-listen-to-demo-driver,span.scania-icon-listen-to-demo-driver{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/99_Listen_to_demo_driver-54-72px.svg')}

i.scania-icon-connected-services-bus,span.scania-icon-connected-services-bus{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/100_Connected_services_bus-54-72px.svg')}

i.scania-icon-info-round,span.scania-icon-info-round{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/101_Info_round-54-72px.svg')}

i.scania-icon-call-us,span.scania-icon-call-us{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/102_Call_us_54-72px.svg')}

i.scania-icon-link,span.scania-icon-link{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/103_Link-icon-24-48px.svg')}

i.scania-truck-configurator,span.scania-truck-configurator{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/104_Truck-configurator-24-48px.svg')}

i.scania-icon-change,span.scania-icon-change{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/105_Change-24-48px.svg')}

i.scania-icon-edit,span.scania-icon-edit{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/106_Edit-24-48px.svg')}

i.scania-icon-conversation,span.scania-icon-conversation{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/107_Conversation-24-48px.svg')}

i.scania-icon-settings,span.scania-icon-settings{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/108_Settings-24-48px.svg')}

i.scania-icon-dealer-locator-detect.active,span.scania-icon-dealer-locator-detect.active{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/17_Dealer_locator_Detect_location_54-72px-Active.svg')}

i.scania-icon-find-a-dealer.neg,span.scania-icon-find-a-dealer.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/01_Find_a_dealer-54-72px_neg.svg')}

i.scania-icon-search.neg,span.scania-icon-search.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/02_Icon_search-54-72px_neg.svg')}

i.scania-icon-close-input.neg,span.scania-icon-close-input.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/03_Search-desktop_in-field-delete-54-72px_neg.svg')}

i.scania-icon-search-mobile.neg,span.scania-icon-search-mobile.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/04_Search-mobile_in-field-delete-54-72px_neg.svg')}

i.scania-icon-menu-mobile.neg,span.scania-icon-menu-mobile.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/05_Menu_mobile-54-72px_neg.svg')}

i.scania-icon-close-mobile-menu.neg,span.scania-icon-close-mobile-menu.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/06_Menu_close_button_Mobile-54-72px_neg.svg')}

i.scania-icon-menu-back-button.neg,span.scania-icon-menu-back-button.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/07_Menu_back_button-54-72px_neg.svg')}

i.scania-icon-my-scania-mobile.neg,span.scania-icon-my-scania-mobile.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/08_My_scania_Mobile-54-72px_neg.svg')}

i.scania-icon-share-social-media.neg,span.scania-icon-share-social-media.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/09_Share_page_tool_share_icon-54-72px_neg.svg')}

i.scania-icon-share-page-tool.neg,span.scania-icon-share-page-tool.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/10_Share_page_tool-54-72px_neg.svg')}

i.scania-icon-video-play.neg,span.scania-icon-video-play.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/11_Video_play_icon-54-72px_neg.svg')}

i.scania-icon-find-a-dealer.neg,span.scania-icon-find-a-dealer.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/12_Find_a_dealer_CTA-54-72px_neg.svg')}

i.scania-icon-open-accordian-plus.neg,span.scania-icon-open-accordian-plus.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/13_Open_accordian_plus_Mobile-54-72px_neg.svg')}

i.scania-icon-close-accordian-minus.neg,span.scania-icon-close-accordian-minus.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/14_Close_accordian_minus_icon_Mobile-54-72px_neg.svg')}

i.scania-icon-tick.neg,span.scania-icon-tick.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/15_Tick_icon-54-72px_neg.svg')}

i.scania-icon-filter-dropdown.neg,span.scania-icon-filter-dropdown.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/16_Filter_drop_down_icon-54-72px_neg.svg')}

i.scania-icon-dealer-locator-detect.neg,span.scania-icon-dealer-locator-detect.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/17_Dealer_locator_Detect_location_54-72px_neg.svg')}

i.scania-icon-dealer-locator-map-pin.neg,span.scania-icon-dealer-locator-map-pin.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/18_Dealer_locator_map_pin_filled-54-72px_neg.svg')}

i.scania-icon-dealer-locator-current.neg,span.scania-icon-dealer-locator-current.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/19_Dealer_locator_Current_location_pin-54-72px_neg.svg')}

i.scania-icon-job-posting-location.neg,span.scania-icon-job-posting-location.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/20_Job_posting_info_Location_generic-54-72px_neg.svg')}

i.scania-icon-job-posting-workarea.neg,span.scania-icon-job-posting-workarea.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/21_Job_posting_info_Location_generic-54-72px_neg.svg')}

i.scania-icon-job-posting-closing-date.neg,span.scania-icon-job-posting-closing-date.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/22_Closing_date-54-72px_neg.svg')}

i.scania-icon-email.neg,span.scania-icon-email.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/23_E-mail_US-54-72px_neg.svg')}

i.scania-icon-dealer-website.neg,span.scania-icon-dealer-website.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/24_View_dealer_website-54-72px_neg.svg')}

i.scania-icon-dealer-direction.neg,span.scania-icon-dealer-direction.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/25_Dealer_key_actions_Get_directions_generic_54-72px_neg.svg')}

i.scania-icon-truck.neg,span.scania-icon-truck.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/26_Truck-54-72px_neg.svg')}

i.scania-icon-engine.neg,span.scania-icon-engine.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/27_Engine-54-72px_neg.svg')}

i.scania-icon-bus.neg,span.scania-icon-bus.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/28_Bus-54-72px_neg.svg')}

i.scania-icon-boat.neg,span.scania-icon-boat.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/29_Boat-54-72px_neg.svg')}

i.scania-icon-finance.neg,span.scania-icon-finance.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/30_Finance-54-72px_neg.svg')}

i.scania-icon-conveyorbelt.neg,span.scania-icon-conveyorbelt.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/31_Conveyorbelt_Machinery-54-72px_neg.svg')}

i.scania-icon-powergen.neg,span.scania-icon-powergen.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/32_Powergen-54-72px_neg.svg')}

i.scania-icon-insurance.neg,span.scania-icon-insurance.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/33_Insurance_risk_management-54-72px_neg.svg')}

i.scania-icon-repairs.neg,span.scania-icon-repairs.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/34_Repairs-54-72px_neg.svg')}

i.scania-icon-connected-services.neg,span.scania-icon-connected-services.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/35_Connected_services-54-72px_neg.svg')}

i.scania-icon-training-classroom.neg,span.scania-icon-training-classroom.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/36_Training_Classroom-54-72px_neg.svg')}

i.scania-icon-bus-driver.neg,span.scania-icon-bus-driver.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/37_Driver_Bus_driver-54-72px_neg.svg')}

i.scania-icon-business-operator.neg,span.scania-icon-business-operator.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/38_Business_operator-54-72px_neg.svg')}

i.scania-icon-passenger.neg,span.scania-icon-passenger.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/39_Passanger-54-72px_neg.svg')}

i.scania-icon-mechanic-technician.neg,span.scania-icon-mechanic-technician.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/40_Mechanic_Technician-54-72px_neg.svg')}

i.scania-icon-concrete-mixer.neg,span.scania-icon-concrete-mixer.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/42_Concrete_mixer-54-72px_neg.svg')}

i.scania-icon-truck-assembly-component.neg,span.scania-icon-truck-assembly-component.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/43_Truck_assembly-54-72px_neg.svg')}

i.scania-icon-bus-application.neg,span.scania-icon-bus-application.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/44_Bus_application-54-72px_neg.svg')}

i.scania-icon-engine-application.neg,span.scania-icon-engine-application.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/45_Engine_application-54-72px_neg.svg')}

i.scania-icon-fuel-economy.neg,span.scania-icon-fuel-economy.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/46_Fuel_economy-54-72px_neg.svg')}

i.scania-icon-sustainability.neg,span.scania-icon-sustainability.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/47_Sustainabillity_Environment-54-72px_neg.svg')}

i.scania-icon-comfort-passenger.neg,span.scania-icon-comfort-passenger.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/48_Comfort_Passanger_environment-54-72px_neg.svg')}

i.scania-icon-driver-omptimization.neg,span.scania-icon-driver-omptimization.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/49_Driver_optimisation-54-72px_neg.svg')}

i.scania-icon-uptime.neg,span.scania-icon-uptime.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/50_Uptime-54-72px_neg.svg')}

i.scania-icon-productivity.neg,span.scania-icon-productivity.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/51_Productivity-54-72px_neg.svg')}

i.scania-icon-business-growth.neg,span.scania-icon-business-growth.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/52_Business_growth-54-72px_neg.svg')}

i.scania-icon-efficiency.neg,span.scania-icon-efficiency.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/53_Efficiency-54-72px_neg.svg')}

i.scania-icon-condition-roads.neg,span.scania-icon-condition-roads.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/54_Conditions_roads-54-72px_neg.svg')}

i.scania-icon-safety.neg,span.scania-icon-safety.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/55_Safety_54-72px_neg.svg')}

i.scania-icon-quality-engineering.neg,span.scania-icon-quality-engineering.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/56_Quality_Engineering-54-72px_neg.svg')}

i.scania-icon-toe.neg,span.scania-icon-toe.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/57_TOE-54-72px_neg.svg')}

i.scania-icon-alternative-fuels.neg,span.scania-icon-alternative-fuels.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/58_Alternative_fuels-54-72px_neg.svg')}

i.scania-icon-tma.neg,span.scania-icon-tma.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/59_TMA-54-72px_neg.svg')}

i.scania-icon-payload.neg,span.scania-icon-payload.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/60_Payload-54-72px_neg.svg')}

i.scania-icon-driveability.neg,span.scania-icon-driveability.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/61_Driveability-54-72px_neg.svg')}

i.scania-icon-ecolution-analysis.neg,span.scania-icon-ecolution-analysis.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/62_Ecolution_analysis-54-72px_neg.svg')}

i.scania-icon-ecolution-solutions.neg,span.scania-icon-ecolution-solutions.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/63_Ecolution_solutions-54-72px_neg.svg')}

i.scania-icon-ecolution-results.neg,span.scania-icon-ecolution-results.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/64_Ecolution_results-54-72px_neg.svg')}

i.scania-icon-fuel-efficency.neg,span.scania-icon-fuel-efficency.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/65_Fuel_efficency-54-72px_neg.svg')}

i.scania-icon-co2-emissions.neg,span.scania-icon-co2-emissions.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/66_Co2_emissions-54-72px_neg.svg')}

i.scania-icon-miles-capacity.neg,span.scania-icon-miles-capacity.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/67_Miles_capacity-54-72px_neg.svg')}

i.scania-icon-events.neg,span.scania-icon-events.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/68_Events-54-72px_neg.svg')}

i.scania-icon-truck-assembly.neg,span.scania-icon-truck-assembly.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/69_Truck_assembly-54-72px_neg.svg')}

i.scania-icon-waiting-time.neg,span.scania-icon-waiting-time.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/70_Waiting-time-54-72px_neg.svg')}

i.scania-icon-explore.neg,span.scania-icon-explore.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/71_Explore-54-72px_neg.svg')}

i.scania-icon-see-details.neg,span.scania-icon-see-details.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/72_See details-54-72px_neg.svg')}

i.scania-icon-network-worldwide-open.neg,span.scania-icon-network-worldwide-open.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/73_Scania_network_worldwide_open_24h-54-72px_neg.svg')}

i.scania-icon-warranty.neg,span.scania-icon-warranty.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/74_Warranty-54-72px_neg.svg')}

i.scania-icon-gear-shift.neg,span.scania-icon-gear-shift.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/75_Gear_shift-54-72px_neg.svg')}

i.scania-icon-knowledge.neg,span.scania-icon-knowledge.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/76_Knowledge-54-72px_neg.svg')}

i.scania-icon-brake.neg,span.scania-icon-brake.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/77_Brake-54-72px_neg.svg')}

i.scania-icon-social-media-facebook.neg,span.scania-icon-social-media-facebook.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Facebook_neg.svg')}

i.scania-icon-social-media-flickr.neg,span.scania-icon-social-media-flickr.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Flickr_neg.svg')}

i.scania-icon-social-media-googleplus.neg,span.scania-icon-social-media-googleplus.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_GooglePlus_neg.svg')}

i.scania-icon-social-media-instagram.neg,span.scania-icon-social-media-instagram.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Instagram_neg.svg')}

i.scania-icon-social-media-linkedin.neg,span.scania-icon-social-media-linkedin.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Linkedin_neg.svg')}

i.scania-icon-social-media-slideshare.neg,span.scania-icon-social-media-slideshare.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_SlideShare_neg.svg')}

i.scania-icon-social-media-twitter.neg,span.scania-icon-social-media-twitter.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Twitter_neg.svg')}

i.scania-icon-social-media-youtube.neg,span.scania-icon-social-media-youtube.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Youtube_neg.svg')}

i.scania-icon-social-media-youtube-variation-2.neg,span.scania-icon-social-media-youtube-variation-2.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Youtube_variation-2_neg.svg')}

i.scania-icon-save-download.neg,span.scania-icon-save-download.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/84_Save-54-72px_neg.svg')}

i.scania-icon-truck-service.neg,span.scania-icon-truck-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/01_SIS_Truck_service-54-72px_neg.svg')}

i.scania-icon-bus-service.neg,span.scania-icon-bus-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/02_SIS_Bus_service-54-72px_neg.svg')}

i.scania-icon-engine-service.neg,span.scania-icon-engine-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/03_SIS_Engines_service-54-72px_neg.svg')}

i.scania-icon-marine-engine-service.neg,span.scania-icon-marine-engine-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/04_SIS_Marine_engine_service-54-72px_neg.svg')}

i.scania-icon-genstes-service.neg,span.scania-icon-genstes-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/05_SIS_Scania_gensets_service-54-72px_neg.svg')}

i.scania-icon-24h-breakdown-service.neg,span.scania-icon-24h-breakdown-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/06_SIS_24h-emergency-breakdown-service_54-72px_neg.svg')}

i.scania-icon-accident-repairs.neg,span.scania-icon-accident-repairs.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/07_SIS_Accident_repairs-54-72px_neg.svg')}

i.scania-icon-towing-recovery-service.neg,span.scania-icon-towing-recovery-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/08_SIS_Towing_and_recovery_service2-54-72px_neg.svg')}

i.scania-icon-toll-collect-recivery-service.neg,span.scania-icon-toll-collect-recivery-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/09_SIS_Toll_collect_and_installation_service-54-72px_neg.svg')}

i.scania-icon-tyre-service.neg,span.scania-icon-tyre-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/10_SIS_Tyre_service-54-72px_neg.svg')}

i.scania-icon-vehicle-washing.neg,span.scania-icon-vehicle-washing.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/11_SIS_Vehicle_washing-54-72px_neg.svg')}

i.scania-icon-vehicle-rental.neg,span.scania-icon-vehicle-rental.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/12_SIS_Vehicle_rental-54-72px_neg.svg')}

i.scania-icon-truck-sales.neg,span.scania-icon-truck-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/13_SIS_Truck_sales-54-72px_neg.svg')}

i.scania-icon-bus-sales.neg,span.scania-icon-bus-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/14_SIS_Bus_sales-54-72px_neg.svg')}

i.scania-icon-power-engine-sales.neg,span.scania-icon-power-engine-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/15_SIS_Power_generation_enigine_sales-54-72px_neg.svg')}

i.scania-icon-marine-engine-sales.neg,span.scania-icon-marine-engine-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/16_SIS_Marine_engine_sales-54-72px_neg.svg')}

i.scania-icon-genstes-sales.neg,span.scania-icon-genstes-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/17_SIS_Scania_gensets_sales-54-72px_neg.svg')}

i.scania-icon-parts-sales.neg,span.scania-icon-parts-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/18_SIS_Scania_parts_sales-54-72px_neg.svg')}

i.scania-icon-digital-tachograph-download.neg,span.scania-icon-digital-tachograph-download.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/19_SIS_Digital_tachograph_data_download-54-72px_neg.svg')}

i.scania-icon-digital-tachograph-inspection.neg,span.scania-icon-digital-tachograph-inspection.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/20_SIS_Digital_tachograph_legal_inspection-54-72px_neg.svg')}

i.scania-icon-analogue-tachograph-inspection.neg,span.scania-icon-analogue-tachograph-inspection.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/21_SIS_Analogue_tachograph_inspection_and_repairs-54-72px_neg.svg')}

i.scania-icon-roller-brake-test.neg,span.scania-icon-roller-brake-test.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/22_SIS_Roller_brake_test-54-72px_neg.svg')}

i.scania-icon-trailer-service.neg,span.scania-icon-trailer-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/23_SIS_Trailer_service-54-72px_neg.svg')}

i.scania-icon-refrigeration-service.neg,span.scania-icon-refrigeration-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/24_SIS_Transport_refrigeration_unit_service-54-72px_neg.svg')}

i.scania-icon-tarpaulin-service.neg,span.scania-icon-tarpaulin-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/25_SIS_Tarpaulin_service-54-72px_neg.svg')}

i.scania-icon-adr-service.neg,span.scania-icon-adr-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/26_SIS_ADR_Vehicle_service-54-72px_neg.svg')}

i.scania-icon-hydraulics-service.neg,span.scania-icon-hydraulics-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/27_SIS_Hydraulics-bodywork_service-54-72px_neg.svg')}

i.scania-icon-used-vehicle-sales.neg,span.scania-icon-used-vehicle-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/28_SIS_Used_vehicle_sales-54-72px_neg.svg')}

i.scania-icon-mining-service.neg,span.scania-icon-mining-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/29_SIS_Mining-service-54-72px_neg.svg')}

i.scania-icon-mining-sales.neg,span.scania-icon-mining-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/30_SIS_Mining-sales-54-72px_neg.svg')}

i.scania-icon-tail-lift-service.neg,span.scania-icon-tail-lift-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/31_SIS_Tail-lift-service-54-72px_neg.svg')}

i.scania-icon-fixed-price-repairs.neg,span.scania-icon-fixed-price-repairs.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/products-services/SVG_NEG/01_Fixed_price_repairs_24-48px_neg.svg')}

i.scania-icon-service_exchange.neg,span.scania-icon-service_exchange.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/products-services/SVG_NEG/02_Service_exchange_24-48px_neg.svg')}

i.scania-icon-emergency.neg,span.scania-icon-emergency.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/79_Emergency_54-72px_neg.svg')}

i.scania-icon-time.neg,span.scania-icon-time.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/80_Time-54-72px_neg.svg')}

i.scania-icon-battery.neg,span.scania-icon-battery.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/81_Battery_54-72px_neg.svg')}

i.scania-icon-sound.neg,span.scania-icon-sound.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/83_Sound-54-72px_neg.svg')}

i.scania-icon-smart-transport.neg,span.scania-icon-smart-transport.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-date.neg,span.scania-icon-date.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/82_Date-54-72px_neg.svg')}

i.scania-icon-rough-roads.neg,span.scania-icon-rough-roads.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-start-stop.neg,span.scania-icon-start-stop.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-fuel-quality.neg,span.scania-icon-fuel-quality.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-error.neg,span.scania-icon-error.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-heart.neg,span.scania-icon-heart.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-caret-left.neg,span.scania-icon-caret-left.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-caret-right.neg,span.scania-icon-caret-right.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-open-upload.neg,span.scania-icon-open-upload.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-guotation.neg,span.scania-icon-guotation.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-summary.neg,span.scania-icon-summary.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-zoomin.neg,span.scania-icon-zoomin.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-zoomout.neg,span.scania-icon-zoomout.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-no-photo.neg,span.scania-icon-no-photo.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/92_No_photo-54-72px_neg.svg')}

i.scania-icon-no-smoking.neg,span.scania-icon-no-smoking.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/93_No_smoking-54-72px_neg.svg')}

i.scania-icon-no-drugs-or-alcohol.neg,span.scania-icon-no-drugs-or-alcohol.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/94_No_drugs_or_alcohol-54-72px_neg.svg')}

i.scania-icon-drivers-licence-required.neg,span.scania-icon-drivers-licence-required.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/95_Drivers_licence_required-54-72px_neg.svg')}

i.scania-icon-forbidden-to-enter-course.neg,span.scania-icon-forbidden-to-enter-course.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/96_Forbidden_to_enter_course-54-72px_neg.svg')}

i.scania-icon-wear-seatbelt.neg,span.scania-icon-wear-seatbelt.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/97_Wear_seatbelt-54-72px_neg.svg')}

i.scania-icon-no-phone-during-driving.neg,span.scania-icon-no-phone-during-driving.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/98_No_phone_during_driving-54-72px_neg.svg')}

i.scania-icon-listen-to-demo-driver.neg,span.scania-icon-listen-to-demo-driver.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/99_Listen_to_demo_driver-54-72px_neg.svg')}

i.scania-icon-connected-services-bus.neg,span.scania-icon-connected-services-bus.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/100_Connected_services_bus-54-72px_neg.svg')}

i.scania-icon-info-round.neg,span.scania-icon-info-round.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/101_Info_round-54-72px_neg.svg')}

i.scania-icon-call-us.neg,span.scania-icon-call-us.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/102_Call_us_54-72px_neg.svg')}

i.scania-icon-link.neg,span.scania-icon-link.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/103_Link-icon-24-48px_neg.svg')}

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
  src: url("ScaniaSans-Regular.eot");
  src: url("ScaniaSans-Regular.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSans-Regular.woff2") format("woff2"), 
  url("ScaniaSans-Regular.woff") format("woff"), 
  url("ScaniaSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans';
  font-weight: bold;
  src: url("ScaniaSans-Bold.eot");
  src: url("ScaniaSans-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSans-Bold.woff2") format("woff2"), 
  url("ScaniaSans-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Bold';
  font-weight: normal;
  src: url("ScaniaSans-Bold.eot");
  src: url("ScaniaSans-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSans-Bold.woff2") format("woff2"), 
  url("ScaniaSans-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans';
  font-style: italic;
  src: url("ScaniaSans-Italic.eot");
  src: url("ScaniaSans-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSans-Italic.woff2") format("woff2"), 
  url("ScaniaSans-Italic.woff") format("woff"), 
  url("ScaniaSans-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Italic';
  font-weight: normal;
  src: url("ScaniaSans-Italic.eot");
  src: url("ScaniaSans-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSans-Italic.woff2") format("woff2"), 
  url("ScaniaSans-Italic.woff") format("woff"), 
  url("ScaniaSans-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline';
  font-weight: normal;
  src: url("ScaniaSansHeadline-Regular.eot");
  src: url("ScaniaSansHeadline-Regular.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansHeadline-Regular.woff2") format("woff2"), 
  url("ScaniaSansHeadline-Regular.woff") format("woff"), 
  url("ScaniaSansHeadline-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline';
  font-weight: bold;
  src: url("ScaniaSansHeadline-Bold.eot");
  src: url("ScaniaSansHeadline-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansHeadline-Bold.woff2") format("woff2"), 
  url("ScaniaSansHeadline-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Headline Bold';
  font-weight: normal;
  src: url("ScaniaSansHeadline-Bold.eot");
  src: url("ScaniaSansHeadline-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansHeadline-Bold.woff2") format("woff2"), 
  url("ScaniaSansHeadline-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-weight: normal;
  src: url("ScaniaSansSemiCondensed-Regular.eot");
  src: url("ScaniaSansSemiCondensed-Regular.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansSemiCondensed-Regular.woff2") format("woff2"), 
  url("ScaniaSansSemiCondensed-Regular.woff") format("woff"), 
  url("ScaniaSansSemiCondensed-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-weight: bold;
  src: url("ScaniaSansSemiCondensed-Bold.eot");
  src: url("ScaniaSansSemiCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansSemiCondensed-Bold.woff2") format("woff2"),
  url("ScaniaSansSemiCondensed-Bold.woff") format("woff"),
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed Bold';
  font-weight: normal;
  src: url("ScaniaSansSemiCondensed-Bold.eot");
  src: url("ScaniaSansSemiCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansSemiCondensed-Bold.woff2") format("woff2"), 
  url("ScaniaSansSemiCondensed-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed';
  font-style: italic;
  src: url("ScaniaSansSemiCondensed-Italic.eot");
  src: url("ScaniaSansSemiCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansSemiCondensed-Italic.woff2") format("woff2"), 
  url("ScaniaSansSemiCondensed-Italic.woff") format("woff"), 
  url("ScaniaSansSemiCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Semi Condensed Italic';
  font-weight: normal;
  src: url("ScaniaSansSemiCondensed-Italic.eot");
  src: url("ScaniaSansSemiCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansSemiCondensed-Italic.woff2") format("woff2"), 
  url("ScaniaSansSemiCondensed-Italic.woff") format("woff"), 
  url("ScaniaSansSemiCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-weight: normal;
  src: url("ScaniaSansCondensed-Regular.eot");
  src: url("ScaniaSansCondensed-Regular.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansCondensed-Regular.woff2") format("woff2"), 
  url("ScaniaSansCondensed-Regular.woff") format("woff"), 
  url("ScaniaSansCondensed-Regular.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-weight: bold;
  src: url("ScaniaSansCondensed-Bold.eot");
  src: url("ScaniaSansCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansCondensed-Bold.woff2") format("woff2"), 
  url("ScaniaSansCondensed-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed Bold';
  font-weight: normal;
  src: url("ScaniaSansCondensed-Bold.eot");
  src: url("ScaniaSansCondensed-Bold.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansCondensed-Bold.woff2") format("woff2"), 
  url("ScaniaSansCondensed-Bold.woff") format("woff"), 
  url("ScaniaSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed';
  font-style: italic;
  src: url("ScaniaSansCondensed-Italic.eot");
  src: url("ScaniaSansCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansCondensed-Italic.woff2") format("woff2"), 
  url("ScaniaSansCondensed-Italic.woff") format("woff"), 
  url("ScaniaSansCondensed-Italic.ttf") format("truetype");
}

@font-face {
  font-family: 'Scania Sans Condensed Italic';
  font-weight: normal;
  src: url("ScaniaSansCondensed-Italic.eot");
  src: url("ScaniaSansCondensed-Italic.eot?#iefix") format("embedded-opentype"), 
  url("ScaniaSansCondensed-Italic.woff2") format("woff2"), 
  url("ScaniaSansCondensed-Italic.woff") format("woff"), 
  url("ScaniaSansCondensed-Italic.ttf") format("truetype");
}

i,span{}

i[class*=scania-icon-],span[class*=scania-icon-]{display:inline-block;vertical-align:middle;background-repeat:no-repeat;background-size:54px;width:54px;height:54px;margin:5px}

i.lg,i.md,i.sm,i.xl,i.xs,i.xxl,span.lg,span.md,span.sm,span.xl,span.xs,span.xxl{display:inline-block}

i.xs,span.xs{background-size:16px;width:16px;height:16px;margin:2px}

i.sm,span.sm{background-size:28px;width:28px;height:28px;margin:2px}

i.md,span.md{background-size:54px;width:54px;height:54px;margin:5px}

i.lg,span.lg{background-size:90px;width:90px;height:90px;margin:8px}

i.xl,span.xl{background-size:140px 140px;width:140px;height:140px;padding:10px}

i.xxl,span.xxl{background-size:240px;width:240px;height:240px;padding:10px}

i.scania-icon-find-a-dealer,span.scania-icon-find-a-dealer{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/01_Find_a_dealer-54-72px.svg')}

i.scania-icon-search,span.scania-icon-search{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/02_Icon_search-54-72px.svg')}

i.scania-icon-close-input,span.scania-icon-close-input{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/03_Search-desktop_in-field-delete-54-72px.svg')}

i.scania-icon-search-mobile,span.scania-icon-search-mobile{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/04_Search-mobile_in-field-delete-54-72px.svg')}

i.scania-icon-menu-mobile,span.scania-icon-menu-mobile{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/05_Menu_mobile-54-72px.svg')}

i.scania-icon-close-mobile-menu,span.scania-icon-close-mobile-menu{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/06_Menu_close_button_Mobile-54-72px.svg')}

i.scania-icon-menu-back-button,span.scania-icon-menu-back-button{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/07_Menu_back_button-54-72px.svg')}

i.scania-icon-my-scania-mobile,span.scania-icon-my-scania-mobile{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/08_My_scania_Mobile-54-72px.svg')}

i.scania-icon-share-social-media,span.scania-icon-share-social-media{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/09_Share_page_tool_share_icon-54-72px.svg')}

i.scania-icon-share-page-tool,span.scania-icon-share-page-tool{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/10_Share_page_tool-54-72px.svg')}

i.scania-icon-video-play,span.scania-icon-video-play{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/11_Video_play_icon-54-72px.svg')}

i.scania-icon-find-a-dealer,span.scania-icon-find-a-dealer{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/12_Find_a_dealer_CTA-54-72px.svg')}

i.scania-icon-open-accordian-plus,span.scania-icon-open-accordian-plus{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/13_Open_accordian_plus_Mobile-54-72px.svg')}

i.scania-icon-close-accordian-minus,span.scania-icon-close-accordian-minus{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/14_Close_accordian_minus_icon_Mobile-54-72px.svg')}

i.scania-icon-tick,span.scania-icon-tick{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/15_Tick_icon-54-72px.svg')}

i.scania-icon-filter-dropdown,span.scania-icon-filter-dropdown{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/16_Filter_drop_down_icon-54-72px.svg')}

i.scania-icon-dealer-locator-detect,span.scania-icon-dealer-locator-detect{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/17_Dealer_locator_Detect_location_54-72px.svg')}

i.scania-icon-dealer-locator-map-pin,span.scania-icon-dealer-locator-map-pin{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/18_Dealer_locator_map_pin_filled-54-72px.svg')}

i.scania-icon-dealer-locator-current,span.scania-icon-dealer-locator-current{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/19_Dealer_locator_Current_location_pin-54-72px.svg')}

i.scania-icon-job-posting-location,span.scania-icon-job-posting-location{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/20_Job_posting_info_Location_generic-54-72px.svg')}

i.scania-icon-job-posting-workarea,span.scania-icon-job-posting-workarea{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/21_Job_posting_info_Location_generic-54-72px.svg')}

i.scania-icon-job-posting-closing-date,span.scania-icon-job-posting-closing-date{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/22_Closing_date-54-72px.svg')}

i.scania-icon-email,span.scania-icon-email{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/23_E-mail_US-54-72px.svg')}

i.scania-icon-dealer-website,span.scania-icon-dealer-website{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/24_View_dealer_website-54-72px.svg')}

i.scania-icon-dealer-direction,span.scania-icon-dealer-direction{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/25_Dealer_key_actions_Get_directions_generic_54-72px.svg')}

i.scania-icon-truck,span.scania-icon-truck{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/26_Truck-54-72px.svg')}

i.scania-icon-engine,span.scania-icon-engine{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/27_Engine-54-72px.svg')}

i.scania-icon-bus,span.scania-icon-bus{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/28_Bus-54-72px.svg')}

i.scania-icon-boat,span.scania-icon-boat{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/29_Boat-54-72px.svg')}

i.scania-icon-finance,span.scania-icon-finance{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/30_Finance-54-72px.svg')}

i.scania-icon-conveyorbelt,span.scania-icon-conveyorbelt{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/31_Conveyorbelt_Machinery-54-72px.svg')}

i.scania-icon-powergen,span.scania-icon-powergen{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/32_Powergen-54-72px.svg')}

i.scania-icon-insurance,span.scania-icon-insurance{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/33_Insurance_risk_management-54-72px.svg')}

i.scania-icon-repairs,span.scania-icon-repairs{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/34_Repairs-54-72px.svg')}

i.scania-icon-connected-services,span.scania-icon-connected-services{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/35_Connected_services-54-72px.svg')}

i.scania-icon-training-classroom,span.scania-icon-training-classroom{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/36_Training_Classroom-54-72px.svg')}

i.scania-icon-bus-driver,span.scania-icon-bus-driver{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/37_Driver_Bus_driver-54-72px.svg')}

i.scania-icon-business-operator,span.scania-icon-business-operator{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/38_Business_operator-54-72px.svg')}

i.scania-icon-passenger,span.scania-icon-passenger{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/39_Passanger-54-72px.svg')}

i.scania-icon-mechanic-technician,span.scania-icon-mechanic-technician{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/40_Mechanic_Technician-54-72px.svg')}

i.scania-icon-concrete-mixer,span.scania-icon-concrete-mixer{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/42_Concrete_mixer-54-72px.svg')}

i.scania-icon-truck-assembly-component,span.scania-icon-truck-assembly-component{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/43_Truck_assembly-54-72px.svg')}

i.scania-icon-bus-application,span.scania-icon-bus-application{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/44_Bus_application-54-72px.svg')}

i.scania-icon-engine-application,span.scania-icon-engine-application{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/45_Engine_application-54-72px.svg')}

i.scania-icon-fuel-economy,span.scania-icon-fuel-economy{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/46_Fuel_economy-54-72px.svg')}

i.scania-icon-sustainability,span.scania-icon-sustainability{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/47_Sustainabillity_Environment-54-72px.svg')}

i.scania-icon-comfort-passenger,span.scania-icon-comfort-passenger{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/48_Comfort_Passanger_environment-54-72px.svg')}

i.scania-icon-driver-omptimization,span.scania-icon-driver-omptimization{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/49_Driver_optimisation-54-72px.svg')}

i.scania-icon-uptime,span.scania-icon-uptime{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/50_Uptime-54-72px.svg')}

i.scania-icon-productivity,span.scania-icon-productivity{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/51_Productivity-54-72px.svg')}

i.scania-icon-business-growth,span.scania-icon-business-growth{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/52_Business_growth-54-72px.svg')}

i.scania-icon-efficiency,span.scania-icon-efficiency{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/53_Efficiency-54-72px.svg')}

i.scania-icon-condition-roads,span.scania-icon-condition-roads{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/54_Conditions_roads-54-72px.svg')}

i.scania-icon-safety,span.scania-icon-safety{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/55_Safety_54-72px.svg')}

i.scania-icon-quality-engineering,span.scania-icon-quality-engineering{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/56_Quality_Engineering-54-72px.svg')}

i.scania-icon-toe,span.scania-icon-toe{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/57_TOE-54-72px.svg')}

i.scania-icon-alternative-fuels,span.scania-icon-alternative-fuels{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/58_Alternative_fuels-54-72px.svg')}

i.scania-icon-tma,span.scania-icon-tma{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/59_TMA-54-72px.svg')}

i.scania-icon-payload,span.scania-icon-payload{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/60_Payload-54-72px.svg')}

i.scania-icon-driveability,span.scania-icon-driveability{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/61_Driveability-54-72px.svg')}

i.scania-icon-ecolution-analysis,span.scania-icon-ecolution-analysis{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/62_Ecolution_analysis-54-72px.svg')}

i.scania-icon-ecolution-solutions,span.scania-icon-ecolution-solutions{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/63_Ecolution_solutions-54-72px.svg')}

i.scania-icon-ecolution-results,span.scania-icon-ecolution-results{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/64_Ecolution_results-54-72px.svg')}

i.scania-icon-fuel-efficency,span.scania-icon-fuel-efficency{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/65_Fuel_efficency-54-72px.svg')}

i.scania-icon-co2-emissions,span.scania-icon-co2-emissions{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/66_Co2_emissions-54-72px.svg')}

i.scania-icon-miles-capacity,span.scania-icon-miles-capacity{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/67_Miles_capacity-54-72px.svg')}

i.scania-icon-events,span.scania-icon-events{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/68_Events-54-72px.svg')}

i.scania-icon-truck-assembly,span.scania-icon-truck-assembly{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/69_Truck_assembly-54-72px.svg')}

i.scania-icon-waiting-time,span.scania-icon-waiting-time{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/70_Waiting-time-54-72px.svg')}

i.scania-icon-explore,span.scania-icon-explore{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/71_Explore-54-72px.svg')}

i.scania-icon-see-details,span.scania-icon-see-details{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/72_See details-54-72px.svg')}

i.scania-icon-network-worldwide-open,span.scania-icon-network-worldwide-open{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/73_Scania_network_worldwide_open_24h-54-72px.svg')}

i.scania-icon-warranty,span.scania-icon-warranty{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/74_Warranty-54-72px.svg')}

i.scania-icon-gear-shift,span.scania-icon-gear-shift{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/75_Gear_shift-54-72px.svg')}

i.scania-icon-knowledge,span.scania-icon-knowledge{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/76_Knowledge-54-72px.svg')}

i.scania-icon-brake,span.scania-icon-brake{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/77_Brake-54-72px.svg')}

i.scania-icon-social-media-facebook,span.scania-icon-social-media-facebook{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Facebook.svg')}

i.scania-icon-social-media-flickr,span.scania-icon-social-media-flickr{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Flickr.svg')}

i.scania-icon-social-media-googleplus,span.scania-icon-social-media-googleplus{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_GooglePlus.svg')}

i.scania-icon-social-media-instagram,span.scania-icon-social-media-instagram{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Instagram.svg')}

i.scania-icon-social-media-linkedin,span.scania-icon-social-media-linkedin{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Linkedin.svg')}

i.scania-icon-social-media-slideshare,span.scania-icon-social-media-slideshare{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_SlideShare.svg')}

i.scania-icon-social-media-twitter,span.scania-icon-social-media-twitter{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Twitter.svg')}

i.scania-icon-social-media-youtube,span.scania-icon-social-media-youtube{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Youtube.svg')}

i.scania-icon-social-media-youtube-variation-2,span.scania-icon-social-media-youtube-variation-2{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/78_Social_media_Youtube_variation-2.svg')}

i.scania-icon-save-download,span.scania-icon-save-download{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/84_Save-54-72px.svg')}

i.scania-icon-truck-service,span.scania-icon-truck-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/01_SIS_Truck_service-54-72px.svg')}

i.scania-icon-bus-service,span.scania-icon-bus-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/02_SIS_Bus_service-54-72px.svg')}

i.scania-icon-engine-service,span.scania-icon-engine-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/03_SIS_Engines_service-54-72px.svg')}

i.scania-icon-marine-engine-service,span.scania-icon-marine-engine-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/04_SIS_Marine_engine_service-54-72px.svg')}

i.scania-icon-genstes-service,span.scania-icon-genstes-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/05_SIS_Scania_gensets_service-54-72px.svg')}

i.scania-icon-24h-breakdown-service,span.scania-icon-24h-breakdown-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/06_SIS_24h-emergency-breakdown-service_54-72px.svg')}

i.scania-icon-accident-repairs,span.scania-icon-accident-repairs{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/07_SIS_Accident_repairs-54-72px.svg')}

i.scania-icon-towing-recovery-service,span.scania-icon-towing-recovery-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/08_SIS_Towing_and_recovery_service2-54-72px.svg')}

i.scania-icon-toll-collect-recivery-service,span.scania-icon-toll-collect-recivery-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/09_SIS_Toll_collect_and_installation_service-54-72px.svg')}

i.scania-icon-tyre-service,span.scania-icon-tyre-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/10_SIS_Tyre_service-54-72px.svg')}

i.scania-icon-vehicle-washing,span.scania-icon-vehicle-washing{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/11_SIS_Vehicle_washing-54-72px.svg')}

i.scania-icon-vehicle-rental,span.scania-icon-vehicle-rental{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/12_SIS_Vehicle_rental-54-72px.svg')}

i.scania-icon-truck-sales,span.scania-icon-truck-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/13_SIS_Truck_sales-54-72px.svg')}

i.scania-icon-bus-sales,span.scania-icon-bus-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/14_SIS_Bus_sales-54-72px.svg')}

i.scania-icon-power-engine-sales,span.scania-icon-power-engine-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/15_SIS_Power_generation_enigine_sales-54-72px.svg')}

i.scania-icon-marine-engine-sales,span.scania-icon-marine-engine-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/16_SIS_Marine_engine_sales-54-72px.svg')}

i.scania-icon-genstes-sales,span.scania-icon-genstes-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/17_SIS_Scania_gensets_sales-54-72px.svg')}

i.scania-icon-parts-sales,span.scania-icon-parts-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/18_SIS_Scania_parts_sales-54-72px.svg')}

i.scania-icon-digital-tachograph-download,span.scania-icon-digital-tachograph-download{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/19_SIS_Digital_tachograph_data_download-54-72px.svg')}

i.scania-icon-digital-tachograph-inspection,span.scania-icon-digital-tachograph-inspection{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/20_SIS_Digital_tachograph_legal_inspection-54-72px.svg')}

i.scania-icon-analogue-tachograph-inspection,span.scania-icon-analogue-tachograph-inspection{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/21_SIS_Analogue_tachograph_inspection_and_repairs-54-72px.svg')}

i.scania-icon-roller-brake-test,span.scania-icon-roller-brake-test{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/22_SIS_Roller_brake_test-54-72px.svg')}

i.scania-icon-trailer-service,span.scania-icon-trailer-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/23_SIS_Trailer_service-54-72px.svg')}

i.scania-icon-refrigeration-service,span.scania-icon-refrigeration-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/24_SIS_Transport_refrigeration_unit_service-54-72px.svg')}

i.scania-icon-tarpaulin-service,span.scania-icon-tarpaulin-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/25_SIS_Tarpaulin_service-54-72px.svg')}

i.scania-icon-adr-service,span.scania-icon-adr-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/26_SIS_ADR_Vehicle_service-54-72px.svg')}

i.scania-icon-hydraulics-service,span.scania-icon-hydraulics-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/27_SIS_Hydraulics-bodywork_service-54-72px.svg')}

i.scania-icon-used-vehicle-sales,span.scania-icon-used-vehicle-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/28_SIS_Used_vehicle_sales-54-72px.svg')}

i.scania-icon-mining-service,span.scania-icon-mining-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/29_SIS_Mining-service-54-72px.svg')}

i.scania-icon-mining-sales,span.scania-icon-mining-sales{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/30_SIS_Mining-sales-54-72px.svg')}

i.scania-icon-tail-lift-service,span.scania-icon-tail-lift-service{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_POS/31_SIS_Tail-lift-service-54-72px.svg')}

i.scania-icon-fixed-price-repairs,span.scania-icon-fixed-price-repairs{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/products-services/SVG_POS/01_Fixed_price_repairs_24-48px.svg')}

i.scania-icon-service_exchange,span.scania-icon-service_exchange{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/products-services/SVG_POS/02_Service_exchange_24-48px.svg')}

i.scania-icon-emergency,span.scania-icon-emergency{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/79_Emergency_54-72px.svg')}

i.scania-icon-time,span.scania-icon-time{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/80_Time-54-72px.svg')}

i.scania-icon-battery,span.scania-icon-battery{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/81_Battery_54-72px.svg')}

i.scania-icon-sound,span.scania-icon-sound{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/83_Sound-54-72px.svg')}

i.scania-icon-smart-transport,span.scania-icon-smart-transport{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-date,span.scania-icon-date{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/82_Date-54-72px.svg')}

i.scania-icon-rough-roads,span.scania-icon-rough-roads{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-start-stop,span.scania-icon-start-stop{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-fuel-quality,span.scania-icon-fuel-quality{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-error,span.scania-icon-error{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-heart,span.scania-icon-heart{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-caret-left,span.scania-icon-caret-left{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-caret-right,span.scania-icon-caret-right{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-open-upload,span.scania-icon-open-upload{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-guotation,span.scania-icon-guotation{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-summary,span.scania-icon-summary{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-zoomin,span.scania-icon-zoomin{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-zoomout,span.scania-icon-zoomout{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/')}

i.scania-icon-no-photo,span.scania-icon-no-photo{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/92_No_photo-54-72px.svg')}

i.scania-icon-no-smoking,span.scania-icon-no-smoking{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/93_No_smoking-54-72px.svg')}

i.scania-icon-no-drugs-or-alcohol,span.scania-icon-no-drugs-or-alcohol{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/94_No_drugs_or_alcohol-54-72px.svg')}

i.scania-icon-drivers-licence-required,span.scania-icon-drivers-licence-required{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/95_Drivers_licence_required-54-72px.svg')}

i.scania-icon-forbidden-to-enter-course,span.scania-icon-forbidden-to-enter-course{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/96_Forbidden_to_enter_course-54-72px.svg')}

i.scania-icon-wear-seatbelt,span.scania-icon-wear-seatbelt{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/97_Wear_seatbelt-54-72px.svg')}

i.scania-icon-no-phone-during-driving,span.scania-icon-no-phone-during-driving{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/98_No_phone_during_driving-54-72px.svg')}

i.scania-icon-listen-to-demo-driver,span.scania-icon-listen-to-demo-driver{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/99_Listen_to_demo_driver-54-72px.svg')}

i.scania-icon-connected-services-bus,span.scania-icon-connected-services-bus{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/100_Connected_services_bus-54-72px.svg')}

i.scania-icon-info-round,span.scania-icon-info-round{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/101_Info_round-54-72px.svg')}

i.scania-icon-call-us,span.scania-icon-call-us{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/102_Call_us_54-72px.svg')}

i.scania-icon-link,span.scania-icon-link{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/103_Link-icon-24-48px.svg')}

i.scania-truck-configurator,span.scania-truck-configurator{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/104_Truck-configurator-24-48px.svg')}

i.scania-icon-change,span.scania-icon-change{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/105_Change-24-48px.svg')}

i.scania-icon-edit,span.scania-icon-edit{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/106_Edit-24-48px.svg')}

i.scania-icon-conversation,span.scania-icon-conversation{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/107_Conversation-24-48px.svg')}

i.scania-icon-settings,span.scania-icon-settings{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/108_Settings-24-48px.svg')}

i.scania-icon-dealer-locator-detect.active,span.scania-icon-dealer-locator-detect.active{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_POS/17_Dealer_locator_Detect_location_54-72px-Active.svg')}

i.scania-icon-find-a-dealer.neg,span.scania-icon-find-a-dealer.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/01_Find_a_dealer-54-72px_neg.svg')}

i.scania-icon-search.neg,span.scania-icon-search.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/02_Icon_search-54-72px_neg.svg')}

i.scania-icon-close-input.neg,span.scania-icon-close-input.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/03_Search-desktop_in-field-delete-54-72px_neg.svg')}

i.scania-icon-search-mobile.neg,span.scania-icon-search-mobile.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/04_Search-mobile_in-field-delete-54-72px_neg.svg')}

i.scania-icon-menu-mobile.neg,span.scania-icon-menu-mobile.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/05_Menu_mobile-54-72px_neg.svg')}

i.scania-icon-close-mobile-menu.neg,span.scania-icon-close-mobile-menu.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/06_Menu_close_button_Mobile-54-72px_neg.svg')}

i.scania-icon-menu-back-button.neg,span.scania-icon-menu-back-button.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/07_Menu_back_button-54-72px_neg.svg')}

i.scania-icon-my-scania-mobile.neg,span.scania-icon-my-scania-mobile.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/08_My_scania_Mobile-54-72px_neg.svg')}

i.scania-icon-share-social-media.neg,span.scania-icon-share-social-media.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/09_Share_page_tool_share_icon-54-72px_neg.svg')}

i.scania-icon-share-page-tool.neg,span.scania-icon-share-page-tool.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/10_Share_page_tool-54-72px_neg.svg')}

i.scania-icon-video-play.neg,span.scania-icon-video-play.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/11_Video_play_icon-54-72px_neg.svg')}

i.scania-icon-find-a-dealer.neg,span.scania-icon-find-a-dealer.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/12_Find_a_dealer_CTA-54-72px_neg.svg')}

i.scania-icon-open-accordian-plus.neg,span.scania-icon-open-accordian-plus.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/13_Open_accordian_plus_Mobile-54-72px_neg.svg')}

i.scania-icon-close-accordian-minus.neg,span.scania-icon-close-accordian-minus.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/14_Close_accordian_minus_icon_Mobile-54-72px_neg.svg')}

i.scania-icon-tick.neg,span.scania-icon-tick.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/15_Tick_icon-54-72px_neg.svg')}

i.scania-icon-filter-dropdown.neg,span.scania-icon-filter-dropdown.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/16_Filter_drop_down_icon-54-72px_neg.svg')}

i.scania-icon-dealer-locator-detect.neg,span.scania-icon-dealer-locator-detect.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/17_Dealer_locator_Detect_location_54-72px_neg.svg')}

i.scania-icon-dealer-locator-map-pin.neg,span.scania-icon-dealer-locator-map-pin.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/18_Dealer_locator_map_pin_filled-54-72px_neg.svg')}

i.scania-icon-dealer-locator-current.neg,span.scania-icon-dealer-locator-current.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/19_Dealer_locator_Current_location_pin-54-72px_neg.svg')}

i.scania-icon-job-posting-location.neg,span.scania-icon-job-posting-location.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/20_Job_posting_info_Location_generic-54-72px_neg.svg')}

i.scania-icon-job-posting-workarea.neg,span.scania-icon-job-posting-workarea.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/21_Job_posting_info_Location_generic-54-72px_neg.svg')}

i.scania-icon-job-posting-closing-date.neg,span.scania-icon-job-posting-closing-date.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/22_Closing_date-54-72px_neg.svg')}

i.scania-icon-email.neg,span.scania-icon-email.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/23_E-mail_US-54-72px_neg.svg')}

i.scania-icon-dealer-website.neg,span.scania-icon-dealer-website.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/24_View_dealer_website-54-72px_neg.svg')}

i.scania-icon-dealer-direction.neg,span.scania-icon-dealer-direction.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/25_Dealer_key_actions_Get_directions_generic_54-72px_neg.svg')}

i.scania-icon-truck.neg,span.scania-icon-truck.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/26_Truck-54-72px_neg.svg')}

i.scania-icon-engine.neg,span.scania-icon-engine.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/27_Engine-54-72px_neg.svg')}

i.scania-icon-bus.neg,span.scania-icon-bus.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/28_Bus-54-72px_neg.svg')}

i.scania-icon-boat.neg,span.scania-icon-boat.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/29_Boat-54-72px_neg.svg')}

i.scania-icon-finance.neg,span.scania-icon-finance.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/30_Finance-54-72px_neg.svg')}

i.scania-icon-conveyorbelt.neg,span.scania-icon-conveyorbelt.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/31_Conveyorbelt_Machinery-54-72px_neg.svg')}

i.scania-icon-powergen.neg,span.scania-icon-powergen.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/32_Powergen-54-72px_neg.svg')}

i.scania-icon-insurance.neg,span.scania-icon-insurance.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/33_Insurance_risk_management-54-72px_neg.svg')}

i.scania-icon-repairs.neg,span.scania-icon-repairs.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/34_Repairs-54-72px_neg.svg')}

i.scania-icon-connected-services.neg,span.scania-icon-connected-services.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/35_Connected_services-54-72px_neg.svg')}

i.scania-icon-training-classroom.neg,span.scania-icon-training-classroom.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/36_Training_Classroom-54-72px_neg.svg')}

i.scania-icon-bus-driver.neg,span.scania-icon-bus-driver.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/37_Driver_Bus_driver-54-72px_neg.svg')}

i.scania-icon-business-operator.neg,span.scania-icon-business-operator.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/38_Business_operator-54-72px_neg.svg')}

i.scania-icon-passenger.neg,span.scania-icon-passenger.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/39_Passanger-54-72px_neg.svg')}

i.scania-icon-mechanic-technician.neg,span.scania-icon-mechanic-technician.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/40_Mechanic_Technician-54-72px_neg.svg')}

i.scania-icon-concrete-mixer.neg,span.scania-icon-concrete-mixer.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/42_Concrete_mixer-54-72px_neg.svg')}

i.scania-icon-truck-assembly-component.neg,span.scania-icon-truck-assembly-component.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/43_Truck_assembly-54-72px_neg.svg')}

i.scania-icon-bus-application.neg,span.scania-icon-bus-application.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/44_Bus_application-54-72px_neg.svg')}

i.scania-icon-engine-application.neg,span.scania-icon-engine-application.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/45_Engine_application-54-72px_neg.svg')}

i.scania-icon-fuel-economy.neg,span.scania-icon-fuel-economy.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/46_Fuel_economy-54-72px_neg.svg')}

i.scania-icon-sustainability.neg,span.scania-icon-sustainability.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/47_Sustainabillity_Environment-54-72px_neg.svg')}

i.scania-icon-comfort-passenger.neg,span.scania-icon-comfort-passenger.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/48_Comfort_Passanger_environment-54-72px_neg.svg')}

i.scania-icon-driver-omptimization.neg,span.scania-icon-driver-omptimization.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/49_Driver_optimisation-54-72px_neg.svg')}

i.scania-icon-uptime.neg,span.scania-icon-uptime.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/50_Uptime-54-72px_neg.svg')}

i.scania-icon-productivity.neg,span.scania-icon-productivity.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/51_Productivity-54-72px_neg.svg')}

i.scania-icon-business-growth.neg,span.scania-icon-business-growth.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/52_Business_growth-54-72px_neg.svg')}

i.scania-icon-efficiency.neg,span.scania-icon-efficiency.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/53_Efficiency-54-72px_neg.svg')}

i.scania-icon-condition-roads.neg,span.scania-icon-condition-roads.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/54_Conditions_roads-54-72px_neg.svg')}

i.scania-icon-safety.neg,span.scania-icon-safety.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/55_Safety_54-72px_neg.svg')}

i.scania-icon-quality-engineering.neg,span.scania-icon-quality-engineering.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/56_Quality_Engineering-54-72px_neg.svg')}

i.scania-icon-toe.neg,span.scania-icon-toe.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/57_TOE-54-72px_neg.svg')}

i.scania-icon-alternative-fuels.neg,span.scania-icon-alternative-fuels.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/58_Alternative_fuels-54-72px_neg.svg')}

i.scania-icon-tma.neg,span.scania-icon-tma.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/59_TMA-54-72px_neg.svg')}

i.scania-icon-payload.neg,span.scania-icon-payload.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/60_Payload-54-72px_neg.svg')}

i.scania-icon-driveability.neg,span.scania-icon-driveability.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/61_Driveability-54-72px_neg.svg')}

i.scania-icon-ecolution-analysis.neg,span.scania-icon-ecolution-analysis.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/62_Ecolution_analysis-54-72px_neg.svg')}

i.scania-icon-ecolution-solutions.neg,span.scania-icon-ecolution-solutions.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/63_Ecolution_solutions-54-72px_neg.svg')}

i.scania-icon-ecolution-results.neg,span.scania-icon-ecolution-results.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/64_Ecolution_results-54-72px_neg.svg')}

i.scania-icon-fuel-efficency.neg,span.scania-icon-fuel-efficency.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/65_Fuel_efficency-54-72px_neg.svg')}

i.scania-icon-co2-emissions.neg,span.scania-icon-co2-emissions.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/66_Co2_emissions-54-72px_neg.svg')}

i.scania-icon-miles-capacity.neg,span.scania-icon-miles-capacity.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/67_Miles_capacity-54-72px_neg.svg')}

i.scania-icon-events.neg,span.scania-icon-events.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/68_Events-54-72px_neg.svg')}

i.scania-icon-truck-assembly.neg,span.scania-icon-truck-assembly.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/69_Truck_assembly-54-72px_neg.svg')}

i.scania-icon-waiting-time.neg,span.scania-icon-waiting-time.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/70_Waiting-time-54-72px_neg.svg')}

i.scania-icon-explore.neg,span.scania-icon-explore.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/71_Explore-54-72px_neg.svg')}

i.scania-icon-see-details.neg,span.scania-icon-see-details.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/72_See details-54-72px_neg.svg')}

i.scania-icon-network-worldwide-open.neg,span.scania-icon-network-worldwide-open.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/73_Scania_network_worldwide_open_24h-54-72px_neg.svg')}

i.scania-icon-warranty.neg,span.scania-icon-warranty.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/74_Warranty-54-72px_neg.svg')}

i.scania-icon-gear-shift.neg,span.scania-icon-gear-shift.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/75_Gear_shift-54-72px_neg.svg')}

i.scania-icon-knowledge.neg,span.scania-icon-knowledge.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/76_Knowledge-54-72px_neg.svg')}

i.scania-icon-brake.neg,span.scania-icon-brake.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/77_Brake-54-72px_neg.svg')}

i.scania-icon-social-media-facebook.neg,span.scania-icon-social-media-facebook.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Facebook_neg.svg')}

i.scania-icon-social-media-flickr.neg,span.scania-icon-social-media-flickr.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Flickr_neg.svg')}

i.scania-icon-social-media-googleplus.neg,span.scania-icon-social-media-googleplus.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_GooglePlus_neg.svg')}

i.scania-icon-social-media-instagram.neg,span.scania-icon-social-media-instagram.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Instagram_neg.svg')}

i.scania-icon-social-media-linkedin.neg,span.scania-icon-social-media-linkedin.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Linkedin_neg.svg')}

i.scania-icon-social-media-slideshare.neg,span.scania-icon-social-media-slideshare.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_SlideShare_neg.svg')}

i.scania-icon-social-media-twitter.neg,span.scania-icon-social-media-twitter.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Twitter_neg.svg')}

i.scania-icon-social-media-youtube.neg,span.scania-icon-social-media-youtube.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Youtube_neg.svg')}

i.scania-icon-social-media-youtube-variation-2.neg,span.scania-icon-social-media-youtube-variation-2.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/78_Social_media_Youtube_variation-2_neg.svg')}

i.scania-icon-save-download.neg,span.scania-icon-save-download.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/84_Save-54-72px_neg.svg')}

i.scania-icon-truck-service.neg,span.scania-icon-truck-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/01_SIS_Truck_service-54-72px_neg.svg')}

i.scania-icon-bus-service.neg,span.scania-icon-bus-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/02_SIS_Bus_service-54-72px_neg.svg')}

i.scania-icon-engine-service.neg,span.scania-icon-engine-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/03_SIS_Engines_service-54-72px_neg.svg')}

i.scania-icon-marine-engine-service.neg,span.scania-icon-marine-engine-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/04_SIS_Marine_engine_service-54-72px_neg.svg')}

i.scania-icon-genstes-service.neg,span.scania-icon-genstes-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/05_SIS_Scania_gensets_service-54-72px_neg.svg')}

i.scania-icon-24h-breakdown-service.neg,span.scania-icon-24h-breakdown-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/06_SIS_24h-emergency-breakdown-service_54-72px_neg.svg')}

i.scania-icon-accident-repairs.neg,span.scania-icon-accident-repairs.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/07_SIS_Accident_repairs-54-72px_neg.svg')}

i.scania-icon-towing-recovery-service.neg,span.scania-icon-towing-recovery-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/08_SIS_Towing_and_recovery_service2-54-72px_neg.svg')}

i.scania-icon-toll-collect-recivery-service.neg,span.scania-icon-toll-collect-recivery-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/09_SIS_Toll_collect_and_installation_service-54-72px_neg.svg')}

i.scania-icon-tyre-service.neg,span.scania-icon-tyre-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/10_SIS_Tyre_service-54-72px_neg.svg')}

i.scania-icon-vehicle-washing.neg,span.scania-icon-vehicle-washing.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/11_SIS_Vehicle_washing-54-72px_neg.svg')}

i.scania-icon-vehicle-rental.neg,span.scania-icon-vehicle-rental.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/12_SIS_Vehicle_rental-54-72px_neg.svg')}

i.scania-icon-truck-sales.neg,span.scania-icon-truck-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/13_SIS_Truck_sales-54-72px_neg.svg')}

i.scania-icon-bus-sales.neg,span.scania-icon-bus-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/14_SIS_Bus_sales-54-72px_neg.svg')}

i.scania-icon-power-engine-sales.neg,span.scania-icon-power-engine-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/15_SIS_Power_generation_enigine_sales-54-72px_neg.svg')}

i.scania-icon-marine-engine-sales.neg,span.scania-icon-marine-engine-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/16_SIS_Marine_engine_sales-54-72px_neg.svg')}

i.scania-icon-genstes-sales.neg,span.scania-icon-genstes-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/17_SIS_Scania_gensets_sales-54-72px_neg.svg')}

i.scania-icon-parts-sales.neg,span.scania-icon-parts-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/18_SIS_Scania_parts_sales-54-72px_neg.svg')}

i.scania-icon-digital-tachograph-download.neg,span.scania-icon-digital-tachograph-download.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/19_SIS_Digital_tachograph_data_download-54-72px_neg.svg')}

i.scania-icon-digital-tachograph-inspection.neg,span.scania-icon-digital-tachograph-inspection.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/20_SIS_Digital_tachograph_legal_inspection-54-72px_neg.svg')}

i.scania-icon-analogue-tachograph-inspection.neg,span.scania-icon-analogue-tachograph-inspection.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/21_SIS_Analogue_tachograph_inspection_and_repairs-54-72px_neg.svg')}

i.scania-icon-roller-brake-test.neg,span.scania-icon-roller-brake-test.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/22_SIS_Roller_brake_test-54-72px_neg.svg')}

i.scania-icon-trailer-service.neg,span.scania-icon-trailer-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/23_SIS_Trailer_service-54-72px_neg.svg')}

i.scania-icon-refrigeration-service.neg,span.scania-icon-refrigeration-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/24_SIS_Transport_refrigeration_unit_service-54-72px_neg.svg')}

i.scania-icon-tarpaulin-service.neg,span.scania-icon-tarpaulin-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/25_SIS_Tarpaulin_service-54-72px_neg.svg')}

i.scania-icon-adr-service.neg,span.scania-icon-adr-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/26_SIS_ADR_Vehicle_service-54-72px_neg.svg')}

i.scania-icon-hydraulics-service.neg,span.scania-icon-hydraulics-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/27_SIS_Hydraulics-bodywork_service-54-72px_neg.svg')}

i.scania-icon-used-vehicle-sales.neg,span.scania-icon-used-vehicle-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/28_SIS_Used_vehicle_sales-54-72px_neg.svg')}

i.scania-icon-mining-service.neg,span.scania-icon-mining-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/29_SIS_Mining-service-54-72px_neg.svg')}

i.scania-icon-mining-sales.neg,span.scania-icon-mining-sales.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/30_SIS_Mining-sales-54-72px_neg.svg')}

i.scania-icon-tail-lift-service.neg,span.scania-icon-tail-lift-service.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/sis-icons/SVG_NEG/31_SIS_Tail-lift-service-54-72px_neg.svg')}

i.scania-icon-fixed-price-repairs.neg,span.scania-icon-fixed-price-repairs.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/products-services/SVG_NEG/01_Fixed_price_repairs_24-48px_neg.svg')}

i.scania-icon-service_exchange.neg,span.scania-icon-service_exchange.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/products-services/SVG_NEG/02_Service_exchange_24-48px_neg.svg')}

i.scania-icon-emergency.neg,span.scania-icon-emergency.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/79_Emergency_54-72px_neg.svg')}

i.scania-icon-time.neg,span.scania-icon-time.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/80_Time-54-72px_neg.svg')}

i.scania-icon-battery.neg,span.scania-icon-battery.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/81_Battery_54-72px_neg.svg')}

i.scania-icon-sound.neg,span.scania-icon-sound.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/83_Sound-54-72px_neg.svg')}

i.scania-icon-smart-transport.neg,span.scania-icon-smart-transport.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-date.neg,span.scania-icon-date.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/82_Date-54-72px_neg.svg')}

i.scania-icon-rough-roads.neg,span.scania-icon-rough-roads.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-start-stop.neg,span.scania-icon-start-stop.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-fuel-quality.neg,span.scania-icon-fuel-quality.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-error.neg,span.scania-icon-error.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-heart.neg,span.scania-icon-heart.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-caret-left.neg,span.scania-icon-caret-left.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-caret-right.neg,span.scania-icon-caret-right.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-open-upload.neg,span.scania-icon-open-upload.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-guotation.neg,span.scania-icon-guotation.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-summary.neg,span.scania-icon-summary.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-zoomin.neg,span.scania-icon-zoomin.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-zoomout.neg,span.scania-icon-zoomout.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/')}

i.scania-icon-no-photo.neg,span.scania-icon-no-photo.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/92_No_photo-54-72px_neg.svg')}

i.scania-icon-no-smoking.neg,span.scania-icon-no-smoking.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/93_No_smoking-54-72px_neg.svg')}

i.scania-icon-no-drugs-or-alcohol.neg,span.scania-icon-no-drugs-or-alcohol.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/94_No_drugs_or_alcohol-54-72px_neg.svg')}

i.scania-icon-drivers-licence-required.neg,span.scania-icon-drivers-licence-required.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/95_Drivers_licence_required-54-72px_neg.svg')}

i.scania-icon-forbidden-to-enter-course.neg,span.scania-icon-forbidden-to-enter-course.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/96_Forbidden_to_enter_course-54-72px_neg.svg')}

i.scania-icon-wear-seatbelt.neg,span.scania-icon-wear-seatbelt.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/97_Wear_seatbelt-54-72px_neg.svg')}

i.scania-icon-no-phone-during-driving.neg,span.scania-icon-no-phone-during-driving.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/98_No_phone_during_driving-54-72px_neg.svg')}

i.scania-icon-listen-to-demo-driver.neg,span.scania-icon-listen-to-demo-driver.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/99_Listen_to_demo_driver-54-72px_neg.svg')}

i.scania-icon-connected-services-bus.neg,span.scania-icon-connected-services-bus.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/100_Connected_services_bus-54-72px_neg.svg')}

i.scania-icon-info-round.neg,span.scania-icon-info-round.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/101_Info_round-54-72px_neg.svg')}

i.scania-icon-call-us.neg,span.scania-icon-call-us.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/102_Call_us_54-72px_neg.svg')}

i.scania-icon-link.neg,span.scania-icon-link.neg{background-image:url('https://d31jnweo1ynb8u.cloudfront.net/resources/icons/scania/SVG_NEG/103_Link-icon-24-48px_neg.svg')}

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
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9jc3MvY29ycG9yYXRlLXVpL2NvcnBvcmF0ZS11aS1mb250cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JDOztBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qiw4RkFBOEY7SUFDOUYsOEZBQThGO0lBQzlGLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0dBQWdHO0lBQ2hHLGdHQUFnRztJQUNoRyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0dBQXNHO0lBQ3RHLHNHQUFzRztBQUMxRzs7QUFFQSwwRUFBMEU7O0FBRTFFO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpSEFBaUg7SUFDakgsaUhBQWlIO0lBQ2pILDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBR0E7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQzs7O2tEQUdnRDtBQUNsRDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9COzs7K0NBRzZDO0FBQy9DOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0I7OzsrQ0FHNkM7QUFDL0M7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQzs7O2lEQUcrQztBQUNqRDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDOzs7aURBRytDO0FBQ2pEOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFD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LCJmaWxlIjoiY29ycG9yYXRlLXVpLWZvbnRzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBcclxuVGhlIFNjYW5pYSBMb2dvdHlwZSBTdHlsZXNoZWV0XHJcblRoZSBTY2FuaWEgc3ltYm9sIGFuZCB3b3JkbWFyayBzaG91bGQgYmUgdXNlZCBpbiBhY2NvcmRhbmNlIHRvIHRoZSBndWlkZWxpbmVzIHNwZWNpZmllZCBpbiB0aGUgQnJhbmQgTWFudWFsLiBcclxuV2UgZG8gbm90IHdhbnQgb3VyIGxvZ290eXBlIHRvIGJlIGRvd25sb2FkZWQgdG8gbG9jYWwgc2VydmVycyBhcyB1cGRhdGVzIHRvIHRoZSBsb2dvdHlwZSBpcyBtYWRlIHRvIHRoZXNlIFxyXG5jZW50cmFseSBzdG9yZWQgdmVyc2lvbnMuXHJcblxyXG5Ib3cgdG8gdXNlXHJcbkluY2x1ZGUgdGhpcyBzdHlsZXNoZWV0IGluIHlvdSBhcHBsaWNhdGlvbiBieSBjb3B5aW5nIHRoaXMgbGluZSBvZiBjb2RlIHRvIHlvdXIgSEVBRCBzZWN0aW9uOlxyXG5cclxuPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvbG9nb3R5cGUtc3R5bGVzaGVldC9zY2FuaWEtbG9nb3R5cGUuY3NzXCI+XHJcblxyXG5Vc2UgdGhlc2UgSFRNTCB0YWdzIHRvIHNob3cgdGhlIHN5bWJvbCBhbmQgd29yZG1hcmsuXHJcbjxzcGFuIGNsYXNzPVwic2NhbmlhIHdvcmRtYXJrXCI+PC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cInNjYW5pYSBzeW1ib2xcIj48L3NwYW4+XHJcbjxzcGFuIGNsYXNzPVwic2NhbmlhIHN5bWJvbCBuZWdcIj48L3NwYW4+ICBGb3IgYSB3aGl0ZSB3b3JkbWFya1xyXG48c3BhbiBjbGFzcz1cInNjYW5pYSBsb2dvdHlwZS12ZXJ0aWNhbC1sb2NrdXBcIj48L3NwYW4+XHJcbiovXHJcblxyXG4uc2NhbmlhIC5zeW1ib2wsIC5zY2FuaWEuc3ltYm9sIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9zY2FuaWEtc3ltYm9sLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLXN5bWJvbC5zdmcnKTsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0OHB4IDQ2cHg7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDZweDsgICBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCBcclxufVxyXG5cclxuLnNjYW5pYSAud29yZG1hcmssIC5zY2FuaWEud29yZG1hcmsge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL3NjYW5pYS13b3JkbWFyay5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL3NjYW5pYS13b3JkbWFyay5zdmcnKTsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNjlweCAyOHB4O1xyXG4gICAgd2lkdGg6IDE2OXB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG4uc2NhbmlhIC53b3JkbWFyay5uZWcsIC5zY2FuaWEud29yZG1hcmsubmVnIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL3NjYW5pYS13b3JkbWFyay13aGl0ZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL3NjYW5pYS13b3JkbWFyay13aGl0ZS5zdmcnKTsgIFxyXG59XHJcblxyXG4vKiBMb2NrdXBzIG9mIHRoZSBzeW1ib2wgYW5kIHdvcmRtYXJrIHNob3VsZCBiZSB1c2VkIGFzIGFuIGV4ZXB0aW9uIG9ubHkgKi9cclxuXHJcbi5zY2FuaWEgLmxvZ290eXBlLXZlcnRpY2FsLWxvY2t1cCwgLnNjYW5pYS5sb2dvdHlwZS12ZXJ0aWNhbC1sb2NrdXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL3NjYW5pYS1sb2dvdHlwZS12ZXJ0aWNhbC1sb2NrLXVwLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLWxvZ290eXBlLXZlcnRpY2FsLWxvY2stdXAuc3ZnJyk7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjUwcHggMTQxcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDE0MXB4OyAgICBcclxufVxuQGltcG9ydCB1cmwoXCIvcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL2N5cmlsbGljL3NjYW5pYS1jeXJpbGxpYy1mb250cy5jc3NcIik7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zLVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnMtUmVndWxhci5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBCb2xkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zLUJvbGQuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnMtQm9sZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zJztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnMtSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zLUl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIEl0YWxpYyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fucy1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnMtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgSGVhZGxpbmUnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNIZWFkbGluZS1SZWd1bGFyLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zSGVhZGxpbmUtUmVndWxhci5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc0hlYWRsaW5lLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zSGVhZGxpbmUtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zSGVhZGxpbmUtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIEhlYWRsaW5lJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0hlYWRsaW5lLUJvbGQuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIEhlYWRsaW5lIEJvbGQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc0hlYWRsaW5lLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIFNlbWkgQ29uZGVuc2VkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1SZWd1bGFyLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgU2VtaSBDb25kZW5zZWQnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcbiAgdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgU2VtaSBDb25kZW5zZWQgQm9sZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtQm9sZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgU2VtaSBDb25kZW5zZWQnO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBTZW1pIENvbmRlbnNlZCBJdGFsaWMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy5lb3RcIik7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgQ29uZGVuc2VkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtUmVndWxhci5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIENvbmRlbnNlZCc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgQ29uZGVuc2VkIEJvbGQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgQ29uZGVuc2VkJztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIENvbmRlbnNlZCBJdGFsaWMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4vKiFcclxuICogIEltcG9ydGluZyBTY2FuaWMgQ29ycG9yYXRlIEljb25zIGluY2x1ZGluZyBGb250IEF3ZXNvbWUgdmVyc2lvbiAzLjIuMVxyXG4gKi9cclxuLyogRk9OVCBQQVRIXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cclxuQGltcG9ydCB1cmwoXCIvL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9mb250cy9jb3Jwb3JhdGUtaWNvbnMvc3R5bGUuY3NzXCIpO1xyXG5cclxuLyohXHJcbiAqIEFkZGl0aW9uYWwgQ2xhc3NlcyBub3QgcmVuZGVyZWQgYnkgSWNvTW9vbiB3aGVyZSBTY2FuaWEgQ29ycG9yYXRlIEljb25zIGFyZSBjcmVhdGVkLCBtYWludGFpbmVkIGFuZCBob3N0ZWQuXHJcbiAvKiBGT05UIEFXRVNPTUUgQ09SRVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5bY2xhc3NePVwiaWNvbi1cIl0sXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgKm1hcmdpbi1yaWdodDogLjNlbTtcclxufVxyXG5bY2xhc3NePVwiaWNvbi1cIl06YmVmb3JlLFxyXG5bY2xhc3MqPVwiIGljb24tXCJdOmJlZm9yZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBzcGVhazogbm9uZTtcclxufVxyXG4vKiBtYWtlcyB0aGUgZm9udCAzMyUgbGFyZ2VyIHJlbGF0aXZlIHRvIHRoZSBpY29uIGNvbnRhaW5lciAqL1xyXG4uaWNvbi1sYXJnZTpiZWZvcmUge1xyXG4gIHZlcnRpY2FsLWFsaWduOiAtMTAlO1xyXG4gIGZvbnQtc2l6ZTogMS4zMzMzMzMzMzMzMzMzMzMzZW07XHJcbn1cclxuLyogbWFrZXMgc3VyZSBpY29ucyBhY3RpdmUgb24gcm9sbG92ZXIgaW4gbGlua3MgKi9cclxuYSBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbmEgW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi8qIGluY3JlYXNlZCBmb250IHNpemUgZm9yIGljb24tbGFyZ2UgKi9cclxuW2NsYXNzXj1cImljb24tXCJdLmljb24tZml4ZWQtd2lkdGgsXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1maXhlZC13aWR0aCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxLjE0Mjg1NzE0Mjg1NzE0MjhlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjI4NTcxNDI4NTcxNDI4NTdlbTtcclxufVxyXG5bY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1maXhlZC13aWR0aC5pY29uLWxhcmdlLFxyXG5bY2xhc3MqPVwiIGljb24tXCJdLmljb24tZml4ZWQtd2lkdGguaWNvbi1sYXJnZSB7XHJcbiAgd2lkdGg6IDEuNDI4NTcxNDI4NTcxNDI4NmVtO1xyXG59XHJcbi5pY29ucy11bCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIuMTQyODU3MTQyODU3MTQzZW07XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5pY29ucy11bCA+IGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmljb25zLXVsIC5pY29uLWxpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTIuMTQyODU3MTQyODU3MTQzZW07XHJcbiAgd2lkdGg6IDIuMTQyODU3MTQyODU3MTQzZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcbltjbGFzc149XCJpY29uLVwiXS5oaWRlLFxyXG5bY2xhc3MqPVwiIGljb24tXCJdLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmljb24tbXV0ZWQge1xyXG4gIGNvbG9yOiAjZWVlZWVlO1xyXG59XHJcbi5pY29uLWxpZ2h0IHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uaWNvbi1kYXJrIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4uaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNlZWVlZWU7XHJcbiAgcGFkZGluZzogLjJlbSAuMjVlbSAuMTVlbTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmljb24tMngge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbi5pY29uLTJ4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmljb24tM3gge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcbi5pY29uLTN4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDNweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmljb24tNHgge1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG59XHJcbi5pY29uLTR4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDRweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLmljb24tNXgge1xyXG4gIGZvbnQtc2l6ZTogNWVtO1xyXG59XHJcbi5pY29uLTV4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5pY29uLTZ4IHtcclxuICBmb250LXNpemU6IDZlbTtcclxufVxyXG4uaWNvbi02eC5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5pY29uLTd4IHtcclxuICBmb250LXNpemU6IDdlbTtcclxufVxyXG4uaWNvbi03eC5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA3cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG59XHJcbi5pY29uLTh4IHtcclxuICBmb250LXNpemU6IDhlbTtcclxufVxyXG4uaWNvbi04eC5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA4cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi05eCB7XHJcbiAgZm9udC1zaXplOiA5ZW07XHJcbn1cclxuLmljb24tOXguaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogOXB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcclxufVxyXG5cclxuLmljb24tZXh0cmVtZSB7XHJcbmZvbnQtc2l6ZTogNTBlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHVsbC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5wdWxsLWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbltjbGFzc149XCJpY29uLVwiXS5wdWxsLWxlZnQsXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1sZWZ0IHtcclxuICBtYXJnaW4tcmlnaHQ6IC4zZW07XHJcbn1cclxuW2NsYXNzXj1cImljb24tXCJdLnB1bGwtcmlnaHQsXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1yaWdodCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC4zZW07XHJcbn1cclxuLyogQk9PVFNUUkFQIFNQRUNJRklDIENMQVNTRVNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogQm9vdHN0cmFwIDIuMCBzcHJpdGVzLmxlc3MgcmVzZXQgKi9cclxuW2NsYXNzXj1cImljb24tXCJdLFxyXG5bY2xhc3MqPVwiIGljb24tXCJdIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi8qIG1vcmUgc3ByaXRlcy5sZXNzIHJlc2V0ICovXHJcbi5pY29uLXdoaXRlLFxyXG4ubmF2LXBpbGxzID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5uYXYtcGlsbHMgPiAuYWN0aXZlID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5uYXYtbGlzdCA+IC5hY3RpdmUgPiBhID4gW2NsYXNzXj1cImljb24tXCJdLFxyXG4ubmF2LWxpc3QgPiAuYWN0aXZlID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5uYXZiYXItaW52ZXJzZSAubmF2ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5uYXZiYXItaW52ZXJzZSAubmF2ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3MqPVwiIGljb24tXCJdLFxyXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciA+IFtjbGFzc149XCJpY29uLVwiXSxcclxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIgPiBbY2xhc3MqPVwiIGljb24tXCJdLFxyXG4uZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhID4gW2NsYXNzXj1cImljb24tXCJdLFxyXG4uZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhID4gW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLmRyb3Bkb3duLXN1Ym1lbnU6aG92ZXIgPiBhID4gW2NsYXNzXj1cImljb24tXCJdLFxyXG4uZHJvcGRvd24tc3VibWVudTpob3ZlciA+IGEgPiBbY2xhc3MqPVwiIGljb24tXCJdIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcbi8qIGtlZXBzIEJvb3RzdHJhcCBzdHlsZXMgd2l0aCBhbmQgd2l0aG91dCBpY29ucyB0aGUgc2FtZSAqL1xyXG4uYnRuIFtjbGFzc149XCJpY29uLVwiXS5pY29uLWxhcmdlLFxyXG4ubmF2IFtjbGFzc149XCJpY29uLVwiXS5pY29uLWxhcmdlLFxyXG4uYnRuIFtjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1sYXJnZSxcclxuLm5hdiBbY2xhc3MqPVwiIGljb24tXCJdLmljb24tbGFyZ2Uge1xyXG4gIGxpbmUtaGVpZ2h0OiAuOWVtO1xyXG59XHJcbi5idG4gW2NsYXNzXj1cImljb24tXCJdLmljb24tc3BpbixcclxuLm5hdiBbY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1zcGluLFxyXG4uYnRuIFtjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1zcGluLFxyXG4ubmF2IFtjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1zcGluIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm5hdi10YWJzIFtjbGFzc149XCJpY29uLVwiXSxcclxuLm5hdi1waWxscyBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5uYXYtdGFicyBbY2xhc3MqPVwiIGljb24tXCJdLFxyXG4ubmF2LXBpbGxzIFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5uYXYtdGFicyBbY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1sYXJnZSxcclxuLm5hdi1waWxscyBbY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1sYXJnZSxcclxuLm5hdi10YWJzIFtjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1sYXJnZSxcclxuLm5hdi1waWxscyBbY2xhc3MqPVwiIGljb24tXCJdLmljb24tbGFyZ2Uge1xyXG4gIGxpbmUtaGVpZ2h0OiAuOWVtO1xyXG59XHJcbi5idG4gW2NsYXNzXj1cImljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4LFxyXG4uYnRuIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngsXHJcbi5idG4gW2NsYXNzXj1cImljb24tXCJdLnB1bGwtcmlnaHQuaWNvbi0yeCxcclxuLmJ0biBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtcmlnaHQuaWNvbi0yeCB7XHJcbiAgbWFyZ2luLXRvcDogLjE4ZW07XHJcbn1cclxuLmJ0biBbY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1zcGluLmljb24tbGFyZ2UsXHJcbi5idG4gW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLXNwaW4uaWNvbi1sYXJnZSB7XHJcbiAgbGluZS1oZWlnaHQ6IC44ZW07XHJcbn1cclxuLmJ0bi5idG4tc21hbGwgW2NsYXNzXj1cImljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1zbWFsbCBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1zbWFsbCBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1zbWFsbCBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtcmlnaHQuaWNvbi0yeCB7XHJcbiAgbWFyZ2luLXRvcDogLjI1ZW07XHJcbn1cclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzXj1cImljb24tXCJdLFxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3MqPVwiIGljb24tXCJdIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzc149XCJpY29uLVwiXS5wdWxsLWxlZnQuaWNvbi0yeCxcclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLWxlZnQuaWNvbi0yeCxcclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzXj1cImljb24tXCJdLnB1bGwtcmlnaHQuaWNvbi0yeCxcclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLXJpZ2h0Lmljb24tMngge1xyXG4gIG1hcmdpbi10b3A6IC4wNWVtO1xyXG59XHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzc149XCJpY29uLVwiXS5wdWxsLWxlZnQuaWNvbi0yeCxcclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLWxlZnQuaWNvbi0yeCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuMmVtO1xyXG59XHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzc149XCJpY29uLVwiXS5wdWxsLXJpZ2h0Lmljb24tMngsXHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4IHtcclxuICBtYXJnaW4tbGVmdDogLjJlbTtcclxufVxyXG4vKiBGaXhlcyBhbGlnbm1lbnQgaW4gbmF2IGxpc3RzICovXHJcbi5uYXYtbGlzdCBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5uYXYtbGlzdCBbY2xhc3MqPVwiIGljb24tXCJdIHtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxufVxyXG4vKiBFWFRSQVNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogU3RhY2tlZCBhbmQgbGF5ZXJlZCBpY29uICovXHJcbi5pY29uLXN0YWNrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogLTM1JTtcclxufVxyXG4uaWNvbi1zdGFjayBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5pY29uLXN0YWNrIFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICpsaW5lLWhlaWdodDogMmVtO1xyXG59XHJcbi5pY29uLXN0YWNrIC5pY29uLXN0YWNrLWJhc2Uge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gICpsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcbi8qIEFuaW1hdGVkIHJvdGF0aW5nIGljb24gKi9cclxuLmljb24tc3BpbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi8qIFByZXZlbnQgc3RhY2sgYW5kIHNwaW5uZXJzIGZyb20gYmVpbmcgdGFrZW4gaW5saW5lIHdoZW4gaW5zaWRlIGEgbGluayAqL1xyXG5hIC5pY29uLXN0YWNrLFxyXG5hIC5pY29uLXNwaW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICB9XHJcbn1cclxuQC1tcy1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcbi8qIEljb24gcm90YXRpb25zIGFuZCBtaXJyb3JpbmcgKi9cclxuLmljb24tcm90YXRlLTkwOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSk7XHJcbn1cclxuLmljb24tcm90YXRlLTE4MDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Mik7XHJcbn1cclxuLmljb24tcm90YXRlLTI3MDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Myk7XHJcbn1cclxuLmljb24tZmxpcC1ob3Jpem9udGFsOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxufVxyXG4uaWNvbi1mbGlwLXZlcnRpY2FsOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcclxufVxyXG4vKiBlbnN1cmUgcm90YXRpb24gb2NjdXJzIGluc2lkZSBhbmNob3IgdGFncyAqL1xyXG5hIC5pY29uLXJvdGF0ZS05MDpiZWZvcmUsXHJcbmEgLmljb24tcm90YXRlLTE4MDpiZWZvcmUsXHJcbmEgLmljb24tcm90YXRlLTI3MDpiZWZvcmUsXHJcbmEgLmljb24tZmxpcC1ob3Jpem9udGFsOmJlZm9yZSxcclxuYSAuaWNvbi1mbGlwLXZlcnRpY2FsOmJlZm9yZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cbmksc3Bhbnt9aVtjbGFzcyo9c2NhbmlhLWljb24tXSxzcGFuW2NsYXNzKj1zY2FuaWEtaWNvbi1de2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOjU0cHg7d2lkdGg6NTRweDtoZWlnaHQ6NTRweDttYXJnaW46NXB4fWkubGcsaS5tZCxpLnNtLGkueGwsaS54cyxpLnh4bCxzcGFuLmxnLHNwYW4ubWQsc3Bhbi5zbSxzcGFuLnhsLHNwYW4ueHMsc3Bhbi54eGx7ZGlzcGxheTppbmxpbmUtYmxvY2t9aS54cyxzcGFuLnhze2JhY2tncm91bmQtc2l6ZToxNnB4O3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWFyZ2luOjJweH1pLnNtLHNwYW4uc217YmFja2dyb3VuZC1zaXplOjI4cHg7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDttYXJnaW46MnB4fWkubWQsc3Bhbi5tZHtiYWNrZ3JvdW5kLXNpemU6NTRweDt3aWR0aDo1NHB4O2hlaWdodDo1NHB4O21hcmdpbjo1cHh9aS5sZyxzcGFuLmxne2JhY2tncm91bmQtc2l6ZTo5MHB4O3dpZHRoOjkwcHg7aGVpZ2h0OjkwcHg7bWFyZ2luOjhweH1pLnhsLHNwYW4ueGx7YmFja2dyb3VuZC1zaXplOjE0MHB4IDE0MHB4O3dpZHRoOjE0MHB4O2hlaWdodDoxNDBweDtwYWRkaW5nOjEwcHh9aS54eGwsc3Bhbi54eGx7YmFja2dyb3VuZC1zaXplOjI0MHB4O3dpZHRoOjI0MHB4O2hlaWdodDoyNDBweDtwYWRkaW5nOjEwcHh9aS5zY2FuaWEtaWNvbi1maW5kLWEtZGVhbGVyLHNwYW4uc2NhbmlhLWljb24tZmluZC1hLWRlYWxlcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDFfRmluZF9hX2RlYWxlci01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tc2VhcmNoLHNwYW4uc2NhbmlhLWljb24tc2VhcmNoe2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wMl9JY29uX3NlYXJjaC01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tY2xvc2UtaW5wdXQsc3Bhbi5zY2FuaWEtaWNvbi1jbG9zZS1pbnB1dHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDNfU2VhcmNoLWRlc2t0b3BfaW4tZmllbGQtZGVsZXRlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1zZWFyY2gtbW9iaWxlLHNwYW4uc2NhbmlhLWljb24tc2VhcmNoLW1vYmlsZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDRfU2VhcmNoLW1vYmlsZV9pbi1maWVsZC1kZWxldGUtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1lbnUtbW9iaWxlLHNwYW4uc2NhbmlhLWljb24tbWVudS1tb2JpbGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzA1X01lbnVfbW9iaWxlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jbG9zZS1tb2JpbGUtbWVudSxzcGFuLnNjYW5pYS1pY29uLWNsb3NlLW1vYmlsZS1tZW51e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wNl9NZW51X2Nsb3NlX2J1dHRvbl9Nb2JpbGUtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1lbnUtYmFjay1idXR0b24sc3Bhbi5zY2FuaWEtaWNvbi1tZW51LWJhY2stYnV0dG9ue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wN19NZW51X2JhY2tfYnV0dG9uLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1teS1zY2FuaWEtbW9iaWxlLHNwYW4uc2NhbmlhLWljb24tbXktc2NhbmlhLW1vYmlsZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDhfTXlfc2NhbmlhX01vYmlsZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tc2hhcmUtc29jaWFsLW1lZGlhLHNwYW4uc2NhbmlhLWljb24tc2hhcmUtc29jaWFsLW1lZGlhe2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wOV9TaGFyZV9wYWdlX3Rvb2xfc2hhcmVfaWNvbi01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tc2hhcmUtcGFnZS10b29sLHNwYW4uc2NhbmlhLWljb24tc2hhcmUtcGFnZS10b29se2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMF9TaGFyZV9wYWdlX3Rvb2wtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXZpZGVvLXBsYXksc3Bhbi5zY2FuaWEtaWNvbi12aWRlby1wbGF5e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMV9WaWRlb19wbGF5X2ljb24tNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIsc3Bhbi5zY2FuaWEtaWNvbi1maW5kLWEtZGVhbGVye2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMl9GaW5kX2FfZGVhbGVyX0NUQS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tb3Blbi1hY2NvcmRpYW4tcGx1cyxzcGFuLnNjYW5pYS1pY29uLW9wZW4tYWNjb3JkaWFuLXBsdXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEzX09wZW5fYWNjb3JkaWFuX3BsdXNfTW9iaWxlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jbG9zZS1hY2NvcmRpYW4tbWludXMsc3Bhbi5zY2FuaWEtaWNvbi1jbG9zZS1hY2NvcmRpYW4tbWludXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzE0X0Nsb3NlX2FjY29yZGlhbl9taW51c19pY29uX01vYmlsZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdGljayxzcGFuLnNjYW5pYS1pY29uLXRpY2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzE1X1RpY2tfaWNvbi01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tZmlsdGVyLWRyb3Bkb3duLHNwYW4uc2NhbmlhLWljb24tZmlsdGVyLWRyb3Bkb3due2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xNl9GaWx0ZXJfZHJvcF9kb3duX2ljb24tNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdCxzcGFuLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTdfRGVhbGVyX2xvY2F0b3JfRGV0ZWN0X2xvY2F0aW9uXzU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1tYXAtcGluLHNwYW4uc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItbWFwLXBpbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMThfRGVhbGVyX2xvY2F0b3JfbWFwX3Bpbl9maWxsZWQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWN1cnJlbnQsc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1jdXJyZW50e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xOV9EZWFsZXJfbG9jYXRvcl9DdXJyZW50X2xvY2F0aW9uX3Bpbi01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tam9iLXBvc3RpbmctbG9jYXRpb24sc3Bhbi5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy1sb2NhdGlvbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjBfSm9iX3Bvc3RpbmdfaW5mb19Mb2NhdGlvbl9nZW5lcmljLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy13b3JrYXJlYSxzcGFuLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLXdvcmthcmVhe2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yMV9Kb2JfcG9zdGluZ19pbmZvX0xvY2F0aW9uX2dlbmVyaWMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLWNsb3NpbmctZGF0ZSxzcGFuLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLWNsb3NpbmctZGF0ZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjJfQ2xvc2luZ19kYXRlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1lbWFpbCxzcGFuLnNjYW5pYS1pY29uLWVtYWlse2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yM19FLW1haWxfVVMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci13ZWJzaXRlLHNwYW4uc2NhbmlhLWljb24tZGVhbGVyLXdlYnNpdGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzI0X1ZpZXdfZGVhbGVyX3dlYnNpdGUtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1kaXJlY3Rpb24sc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItZGlyZWN0aW9ue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yNV9EZWFsZXJfa2V5X2FjdGlvbnNfR2V0X2RpcmVjdGlvbnNfZ2VuZXJpY181NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2ssc3Bhbi5zY2FuaWEtaWNvbi10cnVja3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjZfVHJ1Y2stNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWVuZ2luZSxzcGFuLnNjYW5pYS1pY29uLWVuZ2luZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjdfRW5naW5lLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1idXMsc3Bhbi5zY2FuaWEtaWNvbi1idXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzI4X0J1cy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tYm9hdCxzcGFuLnNjYW5pYS1pY29uLWJvYXR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzI5X0JvYXQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWZpbmFuY2Usc3Bhbi5zY2FuaWEtaWNvbi1maW5hbmNle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zMF9GaW5hbmNlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb252ZXlvcmJlbHQsc3Bhbi5zY2FuaWEtaWNvbi1jb252ZXlvcmJlbHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzMxX0NvbnZleW9yYmVsdF9NYWNoaW5lcnktNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXBvd2VyZ2VuLHNwYW4uc2NhbmlhLWljb24tcG93ZXJnZW57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzMyX1Bvd2VyZ2VuLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1pbnN1cmFuY2Usc3Bhbi5zY2FuaWEtaWNvbi1pbnN1cmFuY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzMzX0luc3VyYW5jZV9yaXNrX21hbmFnZW1lbnQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXJlcGFpcnMsc3Bhbi5zY2FuaWEtaWNvbi1yZXBhaXJze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zNF9SZXBhaXJzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXMsc3Bhbi5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzM1X0Nvbm5lY3RlZF9zZXJ2aWNlcy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdHJhaW5pbmctY2xhc3Nyb29tLHNwYW4uc2NhbmlhLWljb24tdHJhaW5pbmctY2xhc3Nyb29te2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zNl9UcmFpbmluZ19DbGFzc3Jvb20tNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1kcml2ZXIsc3Bhbi5zY2FuaWEtaWNvbi1idXMtZHJpdmVye2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zN19Ecml2ZXJfQnVzX2RyaXZlci01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tYnVzaW5lc3Mtb3BlcmF0b3Isc3Bhbi5zY2FuaWEtaWNvbi1idXNpbmVzcy1vcGVyYXRvcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMzhfQnVzaW5lc3Nfb3BlcmF0b3ItNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXBhc3NlbmdlcixzcGFuLnNjYW5pYS1pY29uLXBhc3NlbmdlcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMzlfUGFzc2FuZ2VyLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1tZWNoYW5pYy10ZWNobmljaWFuLHNwYW4uc2NhbmlhLWljb24tbWVjaGFuaWMtdGVjaG5pY2lhbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDBfTWVjaGFuaWNfVGVjaG5pY2lhbi01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tY29uY3JldGUtbWl4ZXIsc3Bhbi5zY2FuaWEtaWNvbi1jb25jcmV0ZS1taXhlcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDJfQ29uY3JldGVfbWl4ZXItNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXRydWNrLWFzc2VtYmx5LWNvbXBvbmVudCxzcGFuLnNjYW5pYS1pY29uLXRydWNrLWFzc2VtYmx5LWNvbXBvbmVudHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDNfVHJ1Y2tfYXNzZW1ibHktNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1hcHBsaWNhdGlvbixzcGFuLnNjYW5pYS1pY29uLWJ1cy1hcHBsaWNhdGlvbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDRfQnVzX2FwcGxpY2F0aW9uLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1lbmdpbmUtYXBwbGljYXRpb24sc3Bhbi5zY2FuaWEtaWNvbi1lbmdpbmUtYXBwbGljYXRpb257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzQ1X0VuZ2luZV9hcHBsaWNhdGlvbi01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tZnVlbC1lY29ub215LHNwYW4uc2NhbmlhLWljb24tZnVlbC1lY29ub215e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy80Nl9GdWVsX2Vjb25vbXktNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXN1c3RhaW5hYmlsaXR5LHNwYW4uc2NhbmlhLWljb24tc3VzdGFpbmFiaWxpdHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzQ3X1N1c3RhaW5hYmlsbGl0eV9FbnZpcm9ubWVudC01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tY29tZm9ydC1wYXNzZW5nZXIsc3Bhbi5zY2FuaWEtaWNvbi1jb21mb3J0LXBhc3NlbmdlcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDhfQ29tZm9ydF9QYXNzYW5nZXJfZW52aXJvbm1lbnQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRyaXZlci1vbXB0aW1pemF0aW9uLHNwYW4uc2NhbmlhLWljb24tZHJpdmVyLW9tcHRpbWl6YXRpb257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzQ5X0RyaXZlcl9vcHRpbWlzYXRpb24tNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXVwdGltZSxzcGFuLnNjYW5pYS1pY29uLXVwdGltZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTBfVXB0aW1lLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1wcm9kdWN0aXZpdHksc3Bhbi5zY2FuaWEtaWNvbi1wcm9kdWN0aXZpdHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzUxX1Byb2R1Y3Rpdml0eS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tYnVzaW5lc3MtZ3Jvd3RoLHNwYW4uc2NhbmlhLWljb24tYnVzaW5lc3MtZ3Jvd3Roe2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81Ml9CdXNpbmVzc19ncm93dGgtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWVmZmljaWVuY3ksc3Bhbi5zY2FuaWEtaWNvbi1lZmZpY2llbmN5e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81M19FZmZpY2llbmN5LTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb25kaXRpb24tcm9hZHMsc3Bhbi5zY2FuaWEtaWNvbi1jb25kaXRpb24tcm9hZHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzU0X0NvbmRpdGlvbnNfcm9hZHMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXNhZmV0eSxzcGFuLnNjYW5pYS1pY29uLXNhZmV0eXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTVfU2FmZXR5XzU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1xdWFsaXR5LWVuZ2luZWVyaW5nLHNwYW4uc2NhbmlhLWljb24tcXVhbGl0eS1lbmdpbmVlcmluZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTZfUXVhbGl0eV9FbmdpbmVlcmluZy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdG9lLHNwYW4uc2NhbmlhLWljb24tdG9le2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81N19UT0UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWFsdGVybmF0aXZlLWZ1ZWxzLHNwYW4uc2NhbmlhLWljb24tYWx0ZXJuYXRpdmUtZnVlbHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzU4X0FsdGVybmF0aXZlX2Z1ZWxzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi10bWEsc3Bhbi5zY2FuaWEtaWNvbi10bWF7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzU5X1RNQS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tcGF5bG9hZCxzcGFuLnNjYW5pYS1pY29uLXBheWxvYWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzYwX1BheWxvYWQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRyaXZlYWJpbGl0eSxzcGFuLnNjYW5pYS1pY29uLWRyaXZlYWJpbGl0eXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjFfRHJpdmVhYmlsaXR5LTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1lY29sdXRpb24tYW5hbHlzaXMsc3Bhbi5zY2FuaWEtaWNvbi1lY29sdXRpb24tYW5hbHlzaXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzYyX0Vjb2x1dGlvbl9hbmFseXNpcy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tZWNvbHV0aW9uLXNvbHV0aW9ucyxzcGFuLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1zb2x1dGlvbnN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzYzX0Vjb2x1dGlvbl9zb2x1dGlvbnMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1yZXN1bHRzLHNwYW4uc2NhbmlhLWljb24tZWNvbHV0aW9uLXJlc3VsdHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY0X0Vjb2x1dGlvbl9yZXN1bHRzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1mdWVsLWVmZmljZW5jeSxzcGFuLnNjYW5pYS1pY29uLWZ1ZWwtZWZmaWNlbmN5e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy82NV9GdWVsX2VmZmljZW5jeS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tY28yLWVtaXNzaW9ucyxzcGFuLnNjYW5pYS1pY29uLWNvMi1lbWlzc2lvbnN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY2X0NvMl9lbWlzc2lvbnMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbGVzLWNhcGFjaXR5LHNwYW4uc2NhbmlhLWljb24tbWlsZXMtY2FwYWNpdHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY3X01pbGVzX2NhcGFjaXR5LTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1ldmVudHMsc3Bhbi5zY2FuaWEtaWNvbi1ldmVudHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY4X0V2ZW50cy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHksc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1hc3NlbWJseXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjlfVHJ1Y2tfYXNzZW1ibHktNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXdhaXRpbmctdGltZSxzcGFuLnNjYW5pYS1pY29uLXdhaXRpbmctdGltZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzBfV2FpdGluZy10aW1lLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1leHBsb3JlLHNwYW4uc2NhbmlhLWljb24tZXhwbG9yZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzFfRXhwbG9yZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tc2VlLWRldGFpbHMsc3Bhbi5zY2FuaWEtaWNvbi1zZWUtZGV0YWlsc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzJfU2VlIGRldGFpbHMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW5ldHdvcmstd29ybGR3aWRlLW9wZW4sc3Bhbi5zY2FuaWEtaWNvbi1uZXR3b3JrLXdvcmxkd2lkZS1vcGVue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83M19TY2FuaWFfbmV0d29ya193b3JsZHdpZGVfb3Blbl8yNGgtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXdhcnJhbnR5LHNwYW4uc2NhbmlhLWljb24td2FycmFudHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc0X1dhcnJhbnR5LTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1nZWFyLXNoaWZ0LHNwYW4uc2NhbmlhLWljb24tZ2Vhci1zaGlmdHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzVfR2Vhcl9zaGlmdC01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24ta25vd2xlZGdlLHNwYW4uc2NhbmlhLWljb24ta25vd2xlZGdle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83Nl9Lbm93bGVkZ2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWJyYWtlLHNwYW4uc2NhbmlhLWljb24tYnJha2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc3X0JyYWtlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmFjZWJvb2ssc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmFjZWJvb2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc4X1NvY2lhbF9tZWRpYV9GYWNlYm9vay5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1mbGlja3Isc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmxpY2tye2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfRmxpY2tyLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWdvb2dsZXBsdXMsc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZ29vZ2xlcGx1c3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX0dvb2dsZVBsdXMuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtaW5zdGFncmFtLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWluc3RhZ3JhbXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX0luc3RhZ3JhbS5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1saW5rZWRpbixzcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1saW5rZWRpbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX0xpbmtlZGluLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXNsaWRlc2hhcmUsc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtc2xpZGVzaGFyZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX1NsaWRlU2hhcmUuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtdHdpdHRlcixzcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS10d2l0dGVye2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfVHdpdHRlci5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmV7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc4X1NvY2lhbF9tZWRpYV9Zb3V0dWJlLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUtdmFyaWF0aW9uLTIsc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEteW91dHViZS12YXJpYXRpb24tMntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX1lvdXR1YmVfdmFyaWF0aW9uLTIuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zYXZlLWRvd25sb2FkLHNwYW4uc2NhbmlhLWljb24tc2F2ZS1kb3dubG9hZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODRfU2F2ZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2stc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLXRydWNrLXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wMV9TSVNfVHJ1Y2tfc2VydmljZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tYnVzLXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi1idXMtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzAyX1NJU19CdXNfc2VydmljZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tZW5naW5lLXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi1lbmdpbmUtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzAzX1NJU19FbmdpbmVzX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzA0X1NJU19NYXJpbmVfZW5naW5lX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzA1X1NJU19TY2FuaWFfZ2Vuc2V0c19zZXJ2aWNlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi0yNGgtYnJlYWtkb3duLXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi0yNGgtYnJlYWtkb3duLXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wNl9TSVNfMjRoLWVtZXJnZW5jeS1icmVha2Rvd24tc2VydmljZV81NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tYWNjaWRlbnQtcmVwYWlycyxzcGFuLnNjYW5pYS1pY29uLWFjY2lkZW50LXJlcGFpcnN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wN19TSVNfQWNjaWRlbnRfcmVwYWlycy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdG93aW5nLXJlY292ZXJ5LXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi10b3dpbmctcmVjb3Zlcnktc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzA4X1NJU19Ub3dpbmdfYW5kX3JlY292ZXJ5X3NlcnZpY2UyLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi10b2xsLWNvbGxlY3QtcmVjaXZlcnktc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLXRvbGwtY29sbGVjdC1yZWNpdmVyeS1zZXJ2aWNle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMDlfU0lTX1RvbGxfY29sbGVjdF9hbmRfaW5zdGFsbGF0aW9uX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXR5cmUtc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLXR5cmUtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzEwX1NJU19UeXJlX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXZlaGljbGUtd2FzaGluZyxzcGFuLnNjYW5pYS1pY29uLXZlaGljbGUtd2FzaGluZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzExX1NJU19WZWhpY2xlX3dhc2hpbmctNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXZlaGljbGUtcmVudGFsLHNwYW4uc2NhbmlhLWljb24tdmVoaWNsZS1yZW50YWx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8xMl9TSVNfVmVoaWNsZV9yZW50YWwtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXRydWNrLXNhbGVzLHNwYW4uc2NhbmlhLWljb24tdHJ1Y2stc2FsZXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8xM19TSVNfVHJ1Y2tfc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1zYWxlcyxzcGFuLnNjYW5pYS1pY29uLWJ1cy1zYWxlc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzE0X1NJU19CdXNfc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXBvd2VyLWVuZ2luZS1zYWxlcyxzcGFuLnNjYW5pYS1pY29uLXBvd2VyLWVuZ2luZS1zYWxlc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzE1X1NJU19Qb3dlcl9nZW5lcmF0aW9uX2VuaWdpbmVfc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2FsZXMsc3Bhbi5zY2FuaWEtaWNvbi1tYXJpbmUtZW5naW5lLXNhbGVze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTZfU0lTX01hcmluZV9lbmdpbmVfc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2FsZXMsc3Bhbi5zY2FuaWEtaWNvbi1nZW5zdGVzLXNhbGVze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTdfU0lTX1NjYW5pYV9nZW5zZXRzX3NhbGVzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1wYXJ0cy1zYWxlcyxzcGFuLnNjYW5pYS1pY29uLXBhcnRzLXNhbGVze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMThfU0lTX1NjYW5pYV9wYXJ0c19zYWxlcy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tZGlnaXRhbC10YWNob2dyYXBoLWRvd25sb2FkLHNwYW4uc2NhbmlhLWljb24tZGlnaXRhbC10YWNob2dyYXBoLWRvd25sb2Fke2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTlfU0lTX0RpZ2l0YWxfdGFjaG9ncmFwaF9kYXRhX2Rvd25sb2FkLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1kaWdpdGFsLXRhY2hvZ3JhcGgtaW5zcGVjdGlvbixzcGFuLnNjYW5pYS1pY29uLWRpZ2l0YWwtdGFjaG9ncmFwaC1pbnNwZWN0aW9ue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjBfU0lTX0RpZ2l0YWxfdGFjaG9ncmFwaF9sZWdhbF9pbnNwZWN0aW9uLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1hbmFsb2d1ZS10YWNob2dyYXBoLWluc3BlY3Rpb24sc3Bhbi5zY2FuaWEtaWNvbi1hbmFsb2d1ZS10YWNob2dyYXBoLWluc3BlY3Rpb257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yMV9TSVNfQW5hbG9ndWVfdGFjaG9ncmFwaF9pbnNwZWN0aW9uX2FuZF9yZXBhaXJzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1yb2xsZXItYnJha2UtdGVzdCxzcGFuLnNjYW5pYS1pY29uLXJvbGxlci1icmFrZS10ZXN0e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjJfU0lTX1JvbGxlcl9icmFrZV90ZXN0LTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi10cmFpbGVyLXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi10cmFpbGVyLXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yM19TSVNfVHJhaWxlcl9zZXJ2aWNlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1yZWZyaWdlcmF0aW9uLXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi1yZWZyaWdlcmF0aW9uLXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yNF9TSVNfVHJhbnNwb3J0X3JlZnJpZ2VyYXRpb25fdW5pdF9zZXJ2aWNlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi10YXJwYXVsaW4tc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLXRhcnBhdWxpbi1zZXJ2aWNle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjVfU0lTX1RhcnBhdWxpbl9zZXJ2aWNlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1hZHItc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLWFkci1zZXJ2aWNle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjZfU0lTX0FEUl9WZWhpY2xlX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWh5ZHJhdWxpY3Mtc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLWh5ZHJhdWxpY3Mtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzI3X1NJU19IeWRyYXVsaWNzLWJvZHl3b3JrX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXVzZWQtdmVoaWNsZS1zYWxlcyxzcGFuLnNjYW5pYS1pY29uLXVzZWQtdmVoaWNsZS1zYWxlc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzI4X1NJU19Vc2VkX3ZlaGljbGVfc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbmluZy1zZXJ2aWNlLHNwYW4uc2NhbmlhLWljb24tbWluaW5nLXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yOV9TSVNfTWluaW5nLXNlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbmluZy1zYWxlcyxzcGFuLnNjYW5pYS1pY29uLW1pbmluZy1zYWxlc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzMwX1NJU19NaW5pbmctc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXRhaWwtbGlmdC1zZXJ2aWNlLHNwYW4uc2NhbmlhLWljb24tdGFpbC1saWZ0LXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8zMV9TSVNfVGFpbC1saWZ0LXNlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWZpeGVkLXByaWNlLXJlcGFpcnMsc3Bhbi5zY2FuaWEtaWNvbi1maXhlZC1wcmljZS1yZXBhaXJze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvcHJvZHVjdHMtc2VydmljZXMvU1ZHX1BPUy8wMV9GaXhlZF9wcmljZV9yZXBhaXJzXzI0LTQ4cHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1zZXJ2aWNlX2V4Y2hhbmdlLHNwYW4uc2NhbmlhLWljb24tc2VydmljZV9leGNoYW5nZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Byb2R1Y3RzLXNlcnZpY2VzL1NWR19QT1MvMDJfU2VydmljZV9leGNoYW5nZV8yNC00OHB4LnN2ZycpfWkuc2NhbmlhLWljb24tZW1lcmdlbmN5LHNwYW4uc2NhbmlhLWljb24tZW1lcmdlbmN5e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OV9FbWVyZ2VuY3lfNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXRpbWUsc3Bhbi5zY2FuaWEtaWNvbi10aW1le2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy84MF9UaW1lLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1iYXR0ZXJ5LHNwYW4uc2NhbmlhLWljb24tYmF0dGVyeXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODFfQmF0dGVyeV81NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tc291bmQsc3Bhbi5zY2FuaWEtaWNvbi1zb3VuZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODNfU291bmQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXNtYXJ0LXRyYW5zcG9ydCxzcGFuLnNjYW5pYS1pY29uLXNtYXJ0LXRyYW5zcG9ydHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvJyl9aS5zY2FuaWEtaWNvbi1kYXRlLHNwYW4uc2NhbmlhLWljb24tZGF0ZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODJfRGF0ZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tcm91Z2gtcm9hZHMsc3Bhbi5zY2FuaWEtaWNvbi1yb3VnaC1yb2Fkc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvJyl9aS5zY2FuaWEtaWNvbi1zdGFydC1zdG9wLHNwYW4uc2NhbmlhLWljb24tc3RhcnQtc3RvcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvJyl9aS5zY2FuaWEtaWNvbi1mdWVsLXF1YWxpdHksc3Bhbi5zY2FuaWEtaWNvbi1mdWVsLXF1YWxpdHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLycpfWkuc2NhbmlhLWljb24tZXJyb3Isc3Bhbi5zY2FuaWEtaWNvbi1lcnJvcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvJyl9aS5zY2FuaWEtaWNvbi1oZWFydCxzcGFuLnNjYW5pYS1pY29uLWhlYXJ0e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8nKX1pLnNjYW5pYS1pY29uLWNhcmV0LWxlZnQsc3Bhbi5zY2FuaWEtaWNvbi1jYXJldC1sZWZ0e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8nKX1pLnNjYW5pYS1pY29uLWNhcmV0LXJpZ2h0LHNwYW4uc2NhbmlhLWljb24tY2FyZXQtcmlnaHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLycpfWkuc2NhbmlhLWljb24tb3Blbi11cGxvYWQsc3Bhbi5zY2FuaWEtaWNvbi1vcGVuLXVwbG9hZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvJyl9aS5zY2FuaWEtaWNvbi1ndW90YXRpb24sc3Bhbi5zY2FuaWEtaWNvbi1ndW90YXRpb257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLycpfWkuc2NhbmlhLWljb24tc3VtbWFyeSxzcGFuLnNjYW5pYS1pY29uLXN1bW1hcnl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLycpfWkuc2NhbmlhLWljb24tem9vbWluLHNwYW4uc2NhbmlhLWljb24tem9vbWlue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8nKX1pLnNjYW5pYS1pY29uLXpvb21vdXQsc3Bhbi5zY2FuaWEtaWNvbi16b29tb3V0e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8nKX1pLnNjYW5pYS1pY29uLW5vLXBob3RvLHNwYW4uc2NhbmlhLWljb24tbm8tcGhvdG97YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzkyX05vX3Bob3RvLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1uby1zbW9raW5nLHNwYW4uc2NhbmlhLWljb24tbm8tc21va2luZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvOTNfTm9fc21va2luZy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tbm8tZHJ1Z3Mtb3ItYWxjb2hvbCxzcGFuLnNjYW5pYS1pY29uLW5vLWRydWdzLW9yLWFsY29ob2x7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk0X05vX2RydWdzX29yX2FsY29ob2wtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRyaXZlcnMtbGljZW5jZS1yZXF1aXJlZCxzcGFuLnNjYW5pYS1pY29uLWRyaXZlcnMtbGljZW5jZS1yZXF1aXJlZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvOTVfRHJpdmVyc19saWNlbmNlX3JlcXVpcmVkLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1mb3JiaWRkZW4tdG8tZW50ZXItY291cnNlLHNwYW4uc2NhbmlhLWljb24tZm9yYmlkZGVuLXRvLWVudGVyLWNvdXJzZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvOTZfRm9yYmlkZGVuX3RvX2VudGVyX2NvdXJzZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24td2Vhci1zZWF0YmVsdCxzcGFuLnNjYW5pYS1pY29uLXdlYXItc2VhdGJlbHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk3X1dlYXJfc2VhdGJlbHQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW5vLXBob25lLWR1cmluZy1kcml2aW5nLHNwYW4uc2NhbmlhLWljb24tbm8tcGhvbmUtZHVyaW5nLWRyaXZpbmd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk4X05vX3Bob25lX2R1cmluZ19kcml2aW5nLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1saXN0ZW4tdG8tZGVtby1kcml2ZXIsc3Bhbi5zY2FuaWEtaWNvbi1saXN0ZW4tdG8tZGVtby1kcml2ZXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk5X0xpc3Rlbl90b19kZW1vX2RyaXZlci01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tY29ubmVjdGVkLXNlcnZpY2VzLWJ1cyxzcGFuLnNjYW5pYS1pY29uLWNvbm5lY3RlZC1zZXJ2aWNlcy1idXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwMF9Db25uZWN0ZWRfc2VydmljZXNfYnVzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1pbmZvLXJvdW5kLHNwYW4uc2NhbmlhLWljb24taW5mby1yb3VuZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTAxX0luZm9fcm91bmQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWNhbGwtdXMsc3Bhbi5zY2FuaWEtaWNvbi1jYWxsLXVze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDJfQ2FsbF91c181NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tbGluayxzcGFuLnNjYW5pYS1pY29uLWxpbmt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwM19MaW5rLWljb24tMjQtNDhweC5zdmcnKX1pLnNjYW5pYS10cnVjay1jb25maWd1cmF0b3Isc3Bhbi5zY2FuaWEtdHJ1Y2stY29uZmlndXJhdG9ye2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDRfVHJ1Y2stY29uZmlndXJhdG9yLTI0LTQ4cHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jaGFuZ2Usc3Bhbi5zY2FuaWEtaWNvbi1jaGFuZ2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwNV9DaGFuZ2UtMjQtNDhweC5zdmcnKX1pLnNjYW5pYS1pY29uLWVkaXQsc3Bhbi5zY2FuaWEtaWNvbi1lZGl0e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDZfRWRpdC0yNC00OHB4LnN2ZycpfWkuc2NhbmlhLWljb24tY29udmVyc2F0aW9uLHNwYW4uc2NhbmlhLWljb24tY29udmVyc2F0aW9ue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDdfQ29udmVyc2F0aW9uLTI0LTQ4cHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1zZXR0aW5ncyxzcGFuLnNjYW5pYS1pY29uLXNldHRpbmdze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDhfU2V0dGluZ3MtMjQtNDhweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdC5hY3RpdmUsc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1kZXRlY3QuYWN0aXZle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xN19EZWFsZXJfbG9jYXRvcl9EZXRlY3RfbG9jYXRpb25fNTQtNzJweC1BY3RpdmUuc3ZnJyl9aS5zY2FuaWEtaWNvbi1maW5kLWEtZGVhbGVyLm5lZyxzcGFuLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wMV9GaW5kX2FfZGVhbGVyLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc2VhcmNoLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNlYXJjaC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzAyX0ljb25fc2VhcmNoLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tY2xvc2UtaW5wdXQubmVnLHNwYW4uc2NhbmlhLWljb24tY2xvc2UtaW5wdXQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wM19TZWFyY2gtZGVza3RvcF9pbi1maWVsZC1kZWxldGUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zZWFyY2gtbW9iaWxlLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNlYXJjaC1tb2JpbGUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wNF9TZWFyY2gtbW9iaWxlX2luLWZpZWxkLWRlbGV0ZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1lbnUtbW9iaWxlLm5lZyxzcGFuLnNjYW5pYS1pY29uLW1lbnUtbW9iaWxlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMDVfTWVudV9tb2JpbGUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jbG9zZS1tb2JpbGUtbWVudS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1jbG9zZS1tb2JpbGUtbWVudS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzA2X01lbnVfY2xvc2VfYnV0dG9uX01vYmlsZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1lbnUtYmFjay1idXR0b24ubmVnLHNwYW4uc2NhbmlhLWljb24tbWVudS1iYWNrLWJ1dHRvbi5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzA3X01lbnVfYmFja19idXR0b24tNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1teS1zY2FuaWEtbW9iaWxlLm5lZyxzcGFuLnNjYW5pYS1pY29uLW15LXNjYW5pYS1tb2JpbGUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wOF9NeV9zY2FuaWFfTW9iaWxlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc2hhcmUtc29jaWFsLW1lZGlhLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNoYXJlLXNvY2lhbC1tZWRpYS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzA5X1NoYXJlX3BhZ2VfdG9vbF9zaGFyZV9pY29uLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc2hhcmUtcGFnZS10b29sLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNoYXJlLXBhZ2UtdG9vbC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzEwX1NoYXJlX3BhZ2VfdG9vbC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXZpZGVvLXBsYXkubmVnLHNwYW4uc2NhbmlhLWljb24tdmlkZW8tcGxheS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzExX1ZpZGVvX3BsYXlfaWNvbi01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIubmVnLHNwYW4uc2NhbmlhLWljb24tZmluZC1hLWRlYWxlci5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzEyX0ZpbmRfYV9kZWFsZXJfQ1RBLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tb3Blbi1hY2NvcmRpYW4tcGx1cy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1vcGVuLWFjY29yZGlhbi1wbHVzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTNfT3Blbl9hY2NvcmRpYW5fcGx1c19Nb2JpbGUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jbG9zZS1hY2NvcmRpYW4tbWludXMubmVnLHNwYW4uc2NhbmlhLWljb24tY2xvc2UtYWNjb3JkaWFuLW1pbnVzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTRfQ2xvc2VfYWNjb3JkaWFuX21pbnVzX2ljb25fTW9iaWxlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdGljay5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10aWNrLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTVfVGlja19pY29uLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZmlsdGVyLWRyb3Bkb3duLm5lZyxzcGFuLnNjYW5pYS1pY29uLWZpbHRlci1kcm9wZG93bi5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzE2X0ZpbHRlcl9kcm9wX2Rvd25faWNvbi01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1kZXRlY3QubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xN19EZWFsZXJfbG9jYXRvcl9EZXRlY3RfbG9jYXRpb25fNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1tYXAtcGluLm5lZyxzcGFuLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLW1hcC1waW4ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xOF9EZWFsZXJfbG9jYXRvcl9tYXBfcGluX2ZpbGxlZC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWN1cnJlbnQubmVnLHNwYW4uc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItY3VycmVudC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzE5X0RlYWxlcl9sb2NhdG9yX0N1cnJlbnRfbG9jYXRpb25fcGluLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tam9iLXBvc3RpbmctbG9jYXRpb24ubmVnLHNwYW4uc2NhbmlhLWljb24tam9iLXBvc3RpbmctbG9jYXRpb24ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yMF9Kb2JfcG9zdGluZ19pbmZvX0xvY2F0aW9uX2dlbmVyaWMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy13b3JrYXJlYS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy13b3JrYXJlYS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzIxX0pvYl9wb3N0aW5nX2luZm9fTG9jYXRpb25fZ2VuZXJpYy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLWNsb3NpbmctZGF0ZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy1jbG9zaW5nLWRhdGUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yMl9DbG9zaW5nX2RhdGUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1lbWFpbC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1lbWFpbC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzIzX0UtbWFpbF9VUy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci13ZWJzaXRlLm5lZyxzcGFuLnNjYW5pYS1pY29uLWRlYWxlci13ZWJzaXRlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjRfVmlld19kZWFsZXJfd2Vic2l0ZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1kaXJlY3Rpb24ubmVnLHNwYW4uc2NhbmlhLWljb24tZGVhbGVyLWRpcmVjdGlvbi5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzI1X0RlYWxlcl9rZXlfYWN0aW9uc19HZXRfZGlyZWN0aW9uc19nZW5lcmljXzU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2submVnLHNwYW4uc2NhbmlhLWljb24tdHJ1Y2submVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yNl9UcnVjay01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWVuZ2luZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1lbmdpbmUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yN19FbmdpbmUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1idXMubmVnLHNwYW4uc2NhbmlhLWljb24tYnVzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjhfQnVzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tYm9hdC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1ib2F0Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjlfQm9hdC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWZpbmFuY2UubmVnLHNwYW4uc2NhbmlhLWljb24tZmluYW5jZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzMwX0ZpbmFuY2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb252ZXlvcmJlbHQubmVnLHNwYW4uc2NhbmlhLWljb24tY29udmV5b3JiZWx0Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzFfQ29udmV5b3JiZWx0X01hY2hpbmVyeS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXBvd2VyZ2VuLm5lZyxzcGFuLnNjYW5pYS1pY29uLXBvd2VyZ2VuLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzJfUG93ZXJnZW4tNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1pbnN1cmFuY2UubmVnLHNwYW4uc2NhbmlhLWljb24taW5zdXJhbmNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzNfSW5zdXJhbmNlX3Jpc2tfbWFuYWdlbWVudC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXJlcGFpcnMubmVnLHNwYW4uc2NhbmlhLWljb24tcmVwYWlycy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzM0X1JlcGFpcnMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXMubmVnLHNwYW4uc2NhbmlhLWljb24tY29ubmVjdGVkLXNlcnZpY2VzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzVfQ29ubmVjdGVkX3NlcnZpY2VzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdHJhaW5pbmctY2xhc3Nyb29tLm5lZyxzcGFuLnNjYW5pYS1pY29uLXRyYWluaW5nLWNsYXNzcm9vbS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzM2X1RyYWluaW5nX0NsYXNzcm9vbS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1kcml2ZXIubmVnLHNwYW4uc2NhbmlhLWljb24tYnVzLWRyaXZlci5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzM3X0RyaXZlcl9CdXNfZHJpdmVyLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tYnVzaW5lc3Mtb3BlcmF0b3IubmVnLHNwYW4uc2NhbmlhLWljb24tYnVzaW5lc3Mtb3BlcmF0b3IubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zOF9CdXNpbmVzc19vcGVyYXRvci01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXBhc3Nlbmdlci5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1wYXNzZW5nZXIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zOV9QYXNzYW5nZXItNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1tZWNoYW5pYy10ZWNobmljaWFuLm5lZyxzcGFuLnNjYW5pYS1pY29uLW1lY2hhbmljLXRlY2huaWNpYW4ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80MF9NZWNoYW5pY19UZWNobmljaWFuLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tY29uY3JldGUtbWl4ZXIubmVnLHNwYW4uc2NhbmlhLWljb24tY29uY3JldGUtbWl4ZXIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80Ml9Db25jcmV0ZV9taXhlci01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXRydWNrLWFzc2VtYmx5LWNvbXBvbmVudC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1hc3NlbWJseS1jb21wb25lbnQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80M19UcnVja19hc3NlbWJseS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1hcHBsaWNhdGlvbi5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1idXMtYXBwbGljYXRpb24ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80NF9CdXNfYXBwbGljYXRpb24tNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1lbmdpbmUtYXBwbGljYXRpb24ubmVnLHNwYW4uc2NhbmlhLWljb24tZW5naW5lLWFwcGxpY2F0aW9uLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDVfRW5naW5lX2FwcGxpY2F0aW9uLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZnVlbC1lY29ub215Lm5lZyxzcGFuLnNjYW5pYS1pY29uLWZ1ZWwtZWNvbm9teS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzQ2X0Z1ZWxfZWNvbm9teS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXN1c3RhaW5hYmlsaXR5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLXN1c3RhaW5hYmlsaXR5Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDdfU3VzdGFpbmFiaWxsaXR5X0Vudmlyb25tZW50LTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tY29tZm9ydC1wYXNzZW5nZXIubmVnLHNwYW4uc2NhbmlhLWljb24tY29tZm9ydC1wYXNzZW5nZXIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80OF9Db21mb3J0X1Bhc3Nhbmdlcl9lbnZpcm9ubWVudC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRyaXZlci1vbXB0aW1pemF0aW9uLm5lZyxzcGFuLnNjYW5pYS1pY29uLWRyaXZlci1vbXB0aW1pemF0aW9uLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDlfRHJpdmVyX29wdGltaXNhdGlvbi01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXVwdGltZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi11cHRpbWUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81MF9VcHRpbWUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1wcm9kdWN0aXZpdHkubmVnLHNwYW4uc2NhbmlhLWljb24tcHJvZHVjdGl2aXR5Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTFfUHJvZHVjdGl2aXR5LTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tYnVzaW5lc3MtZ3Jvd3RoLm5lZyxzcGFuLnNjYW5pYS1pY29uLWJ1c2luZXNzLWdyb3d0aC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzUyX0J1c2luZXNzX2dyb3d0aC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWVmZmljaWVuY3kubmVnLHNwYW4uc2NhbmlhLWljb24tZWZmaWNpZW5jeS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzUzX0VmZmljaWVuY3ktNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb25kaXRpb24tcm9hZHMubmVnLHNwYW4uc2NhbmlhLWljb24tY29uZGl0aW9uLXJvYWRzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTRfQ29uZGl0aW9uc19yb2Fkcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXNhZmV0eS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1zYWZldHkubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81NV9TYWZldHlfNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1xdWFsaXR5LWVuZ2luZWVyaW5nLm5lZyxzcGFuLnNjYW5pYS1pY29uLXF1YWxpdHktZW5naW5lZXJpbmcubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81Nl9RdWFsaXR5X0VuZ2luZWVyaW5nLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdG9lLm5lZyxzcGFuLnNjYW5pYS1pY29uLXRvZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzU3X1RPRS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWFsdGVybmF0aXZlLWZ1ZWxzLm5lZyxzcGFuLnNjYW5pYS1pY29uLWFsdGVybmF0aXZlLWZ1ZWxzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNThfQWx0ZXJuYXRpdmVfZnVlbHMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi10bWEubmVnLHNwYW4uc2NhbmlhLWljb24tdG1hLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTlfVE1BLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tcGF5bG9hZC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1wYXlsb2FkLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjBfUGF5bG9hZC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRyaXZlYWJpbGl0eS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1kcml2ZWFiaWxpdHkubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82MV9Ecml2ZWFiaWxpdHktNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1lY29sdXRpb24tYW5hbHlzaXMubmVnLHNwYW4uc2NhbmlhLWljb24tZWNvbHV0aW9uLWFuYWx5c2lzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjJfRWNvbHV0aW9uX2FuYWx5c2lzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZWNvbHV0aW9uLXNvbHV0aW9ucy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1lY29sdXRpb24tc29sdXRpb25zLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjNfRWNvbHV0aW9uX3NvbHV0aW9ucy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1yZXN1bHRzLm5lZyxzcGFuLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1yZXN1bHRzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjRfRWNvbHV0aW9uX3Jlc3VsdHMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1mdWVsLWVmZmljZW5jeS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1mdWVsLWVmZmljZW5jeS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzY1X0Z1ZWxfZWZmaWNlbmN5LTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tY28yLWVtaXNzaW9ucy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1jbzItZW1pc3Npb25zLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjZfQ28yX2VtaXNzaW9ucy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbGVzLWNhcGFjaXR5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLW1pbGVzLWNhcGFjaXR5Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjdfTWlsZXNfY2FwYWNpdHktNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1ldmVudHMubmVnLHNwYW4uc2NhbmlhLWljb24tZXZlbnRzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjhfRXZlbnRzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHkubmVnLHNwYW4uc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHkubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82OV9UcnVja19hc3NlbWJseS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXdhaXRpbmctdGltZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi13YWl0aW5nLXRpbWUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83MF9XYWl0aW5nLXRpbWUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1leHBsb3JlLm5lZyxzcGFuLnNjYW5pYS1pY29uLWV4cGxvcmUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83MV9FeHBsb3JlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc2VlLWRldGFpbHMubmVnLHNwYW4uc2NhbmlhLWljb24tc2VlLWRldGFpbHMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83Ml9TZWUgZGV0YWlscy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW5ldHdvcmstd29ybGR3aWRlLW9wZW4ubmVnLHNwYW4uc2NhbmlhLWljb24tbmV0d29yay13b3JsZHdpZGUtb3Blbi5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzczX1NjYW5pYV9uZXR3b3JrX3dvcmxkd2lkZV9vcGVuXzI0aC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXdhcnJhbnR5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLXdhcnJhbnR5Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzRfV2FycmFudHktNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1nZWFyLXNoaWZ0Lm5lZyxzcGFuLnNjYW5pYS1pY29uLWdlYXItc2hpZnQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83NV9HZWFyX3NoaWZ0LTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24ta25vd2xlZGdlLm5lZyxzcGFuLnNjYW5pYS1pY29uLWtub3dsZWRnZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc2X0tub3dsZWRnZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWJyYWtlLm5lZyxzcGFuLnNjYW5pYS1pY29uLWJyYWtlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzdfQnJha2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmFjZWJvb2submVnLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWZhY2Vib29rLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX0ZhY2Vib29rX25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1mbGlja3IubmVnLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWZsaWNrci5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9GbGlja3JfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWdvb2dsZXBsdXMubmVnLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWdvb2dsZXBsdXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfR29vZ2xlUGx1c19uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtaW5zdGFncmFtLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1pbnN0YWdyYW0ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfSW5zdGFncmFtX25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1saW5rZWRpbi5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtbGlua2VkaW4ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfTGlua2VkaW5fbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXNsaWRlc2hhcmUubmVnLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXNsaWRlc2hhcmUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfU2xpZGVTaGFyZV9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtdHdpdHRlci5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtdHdpdHRlci5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9Ud2l0dGVyX25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX1lvdXR1YmVfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUtdmFyaWF0aW9uLTIubmVnLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUtdmFyaWF0aW9uLTIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfWW91dHViZV92YXJpYXRpb24tMl9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zYXZlLWRvd25sb2FkLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNhdmUtZG93bmxvYWQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy84NF9TYXZlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2stc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzAxX1NJU19UcnVja19zZXJ2aWNlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tYnVzLXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tYnVzLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMDJfU0lTX0J1c19zZXJ2aWNlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZW5naW5lLXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tZW5naW5lLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMDNfU0lTX0VuZ2luZXNfc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1tYXJpbmUtZW5naW5lLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMDRfU0lTX01hcmluZV9lbmdpbmVfc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1nZW5zdGVzLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMDVfU0lTX1NjYW5pYV9nZW5zZXRzX3NlcnZpY2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi0yNGgtYnJlYWtkb3duLXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tMjRoLWJyZWFrZG93bi1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzA2X1NJU18yNGgtZW1lcmdlbmN5LWJyZWFrZG93bi1zZXJ2aWNlXzU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tYWNjaWRlbnQtcmVwYWlycy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1hY2NpZGVudC1yZXBhaXJzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzA3X1NJU19BY2NpZGVudF9yZXBhaXJzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdG93aW5nLXJlY292ZXJ5LXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tdG93aW5nLXJlY292ZXJ5LXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMDhfU0lTX1Rvd2luZ19hbmRfcmVjb3Zlcnlfc2VydmljZTItNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi10b2xsLWNvbGxlY3QtcmVjaXZlcnktc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10b2xsLWNvbGxlY3QtcmVjaXZlcnktc2VydmljZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8wOV9TSVNfVG9sbF9jb2xsZWN0X2FuZF9pbnN0YWxsYXRpb25fc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXR5cmUtc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10eXJlLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMTBfU0lTX1R5cmVfc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXZlaGljbGUtd2FzaGluZy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi12ZWhpY2xlLXdhc2hpbmcubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMTFfU0lTX1ZlaGljbGVfd2FzaGluZy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXZlaGljbGUtcmVudGFsLm5lZyxzcGFuLnNjYW5pYS1pY29uLXZlaGljbGUtcmVudGFsLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzEyX1NJU19WZWhpY2xlX3JlbnRhbC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXRydWNrLXNhbGVzLm5lZyxzcGFuLnNjYW5pYS1pY29uLXRydWNrLXNhbGVzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzEzX1NJU19UcnVja19zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1zYWxlcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1idXMtc2FsZXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMTRfU0lTX0J1c19zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXBvd2VyLWVuZ2luZS1zYWxlcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1wb3dlci1lbmdpbmUtc2FsZXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMTVfU0lTX1Bvd2VyX2dlbmVyYXRpb25fZW5pZ2luZV9zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2FsZXMubmVnLHNwYW4uc2NhbmlhLWljb24tbWFyaW5lLWVuZ2luZS1zYWxlcy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8xNl9TSVNfTWFyaW5lX2VuZ2luZV9zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2FsZXMubmVnLHNwYW4uc2NhbmlhLWljb24tZ2Vuc3Rlcy1zYWxlcy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8xN19TSVNfU2NhbmlhX2dlbnNldHNfc2FsZXMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1wYXJ0cy1zYWxlcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1wYXJ0cy1zYWxlcy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8xOF9TSVNfU2NhbmlhX3BhcnRzX3NhbGVzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZGlnaXRhbC10YWNob2dyYXBoLWRvd25sb2FkLm5lZyxzcGFuLnNjYW5pYS1pY29uLWRpZ2l0YWwtdGFjaG9ncmFwaC1kb3dubG9hZC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8xOV9TSVNfRGlnaXRhbF90YWNob2dyYXBoX2RhdGFfZG93bmxvYWQtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1kaWdpdGFsLXRhY2hvZ3JhcGgtaW5zcGVjdGlvbi5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1kaWdpdGFsLXRhY2hvZ3JhcGgtaW5zcGVjdGlvbi5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8yMF9TSVNfRGlnaXRhbF90YWNob2dyYXBoX2xlZ2FsX2luc3BlY3Rpb24tNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1hbmFsb2d1ZS10YWNob2dyYXBoLWluc3BlY3Rpb24ubmVnLHNwYW4uc2NhbmlhLWljb24tYW5hbG9ndWUtdGFjaG9ncmFwaC1pbnNwZWN0aW9uLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzIxX1NJU19BbmFsb2d1ZV90YWNob2dyYXBoX2luc3BlY3Rpb25fYW5kX3JlcGFpcnMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1yb2xsZXItYnJha2UtdGVzdC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1yb2xsZXItYnJha2UtdGVzdC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8yMl9TSVNfUm9sbGVyX2JyYWtlX3Rlc3QtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi10cmFpbGVyLXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tdHJhaWxlci1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzIzX1NJU19UcmFpbGVyX3NlcnZpY2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1yZWZyaWdlcmF0aW9uLXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tcmVmcmlnZXJhdGlvbi1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzI0X1NJU19UcmFuc3BvcnRfcmVmcmlnZXJhdGlvbl91bml0X3NlcnZpY2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi10YXJwYXVsaW4tc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10YXJwYXVsaW4tc2VydmljZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8yNV9TSVNfVGFycGF1bGluX3NlcnZpY2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1hZHItc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1hZHItc2VydmljZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8yNl9TSVNfQURSX1ZlaGljbGVfc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWh5ZHJhdWxpY3Mtc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1oeWRyYXVsaWNzLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMjdfU0lTX0h5ZHJhdWxpY3MtYm9keXdvcmtfc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXVzZWQtdmVoaWNsZS1zYWxlcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi11c2VkLXZlaGljbGUtc2FsZXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMjhfU0lTX1VzZWRfdmVoaWNsZV9zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbmluZy1zZXJ2aWNlLm5lZyxzcGFuLnNjYW5pYS1pY29uLW1pbmluZy1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzI5X1NJU19NaW5pbmctc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbmluZy1zYWxlcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1taW5pbmctc2FsZXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMzBfU0lTX01pbmluZy1zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXRhaWwtbGlmdC1zZXJ2aWNlLm5lZyxzcGFuLnNjYW5pYS1pY29uLXRhaWwtbGlmdC1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzMxX1NJU19UYWlsLWxpZnQtc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWZpeGVkLXByaWNlLXJlcGFpcnMubmVnLHNwYW4uc2NhbmlhLWljb24tZml4ZWQtcHJpY2UtcmVwYWlycy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9wcm9kdWN0cy1zZXJ2aWNlcy9TVkdfTkVHLzAxX0ZpeGVkX3ByaWNlX3JlcGFpcnNfMjQtNDhweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zZXJ2aWNlX2V4Y2hhbmdlLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNlcnZpY2VfZXhjaGFuZ2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvcHJvZHVjdHMtc2VydmljZXMvU1ZHX05FRy8wMl9TZXJ2aWNlX2V4Y2hhbmdlXzI0LTQ4cHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZW1lcmdlbmN5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLWVtZXJnZW5jeS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc5X0VtZXJnZW5jeV81NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXRpbWUubmVnLHNwYW4uc2NhbmlhLWljb24tdGltZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzgwX1RpbWUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1iYXR0ZXJ5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLWJhdHRlcnkubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy84MV9CYXR0ZXJ5XzU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc291bmQubmVnLHNwYW4uc2NhbmlhLWljb24tc291bmQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy84M19Tb3VuZC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXNtYXJ0LXRyYW5zcG9ydC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1zbWFydC10cmFuc3BvcnQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8nKX1pLnNjYW5pYS1pY29uLWRhdGUubmVnLHNwYW4uc2NhbmlhLWljb24tZGF0ZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzgyX0RhdGUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1yb3VnaC1yb2Fkcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1yb3VnaC1yb2Fkcy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLycpfWkuc2NhbmlhLWljb24tc3RhcnQtc3RvcC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1zdGFydC1zdG9wLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvJyl9aS5zY2FuaWEtaWNvbi1mdWVsLXF1YWxpdHkubmVnLHNwYW4uc2NhbmlhLWljb24tZnVlbC1xdWFsaXR5Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvJyl9aS5zY2FuaWEtaWNvbi1lcnJvci5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1lcnJvci5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLycpfWkuc2NhbmlhLWljb24taGVhcnQubmVnLHNwYW4uc2NhbmlhLWljb24taGVhcnQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8nKX1pLnNjYW5pYS1pY29uLWNhcmV0LWxlZnQubmVnLHNwYW4uc2NhbmlhLWljb24tY2FyZXQtbGVmdC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLycpfWkuc2NhbmlhLWljb24tY2FyZXQtcmlnaHQubmVnLHNwYW4uc2NhbmlhLWljb24tY2FyZXQtcmlnaHQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8nKX1pLnNjYW5pYS1pY29uLW9wZW4tdXBsb2FkLm5lZyxzcGFuLnNjYW5pYS1pY29uLW9wZW4tdXBsb2FkLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvJyl9aS5zY2FuaWEtaWNvbi1ndW90YXRpb24ubmVnLHNwYW4uc2NhbmlhLWljb24tZ3VvdGF0aW9uLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvJyl9aS5zY2FuaWEtaWNvbi1zdW1tYXJ5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLXN1bW1hcnkubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8nKX1pLnNjYW5pYS1pY29uLXpvb21pbi5uZWcsc3Bhbi5zY2FuaWEtaWNvbi16b29taW4ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8nKX1pLnNjYW5pYS1pY29uLXpvb21vdXQubmVnLHNwYW4uc2NhbmlhLWljb24tem9vbW91dC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLycpfWkuc2NhbmlhLWljb24tbm8tcGhvdG8ubmVnLHNwYW4uc2NhbmlhLWljb24tbm8tcGhvdG8ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85Ml9Ob19waG90by01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW5vLXNtb2tpbmcubmVnLHNwYW4uc2NhbmlhLWljb24tbm8tc21va2luZy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzkzX05vX3Ntb2tpbmctNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1uby1kcnVncy1vci1hbGNvaG9sLm5lZyxzcGFuLnNjYW5pYS1pY29uLW5vLWRydWdzLW9yLWFsY29ob2wubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85NF9Ob19kcnVnc19vcl9hbGNvaG9sLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZHJpdmVycy1saWNlbmNlLXJlcXVpcmVkLm5lZyxzcGFuLnNjYW5pYS1pY29uLWRyaXZlcnMtbGljZW5jZS1yZXF1aXJlZC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzk1X0RyaXZlcnNfbGljZW5jZV9yZXF1aXJlZC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWZvcmJpZGRlbi10by1lbnRlci1jb3Vyc2UubmVnLHNwYW4uc2NhbmlhLWljb24tZm9yYmlkZGVuLXRvLWVudGVyLWNvdXJzZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzk2X0ZvcmJpZGRlbl90b19lbnRlcl9jb3Vyc2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi13ZWFyLXNlYXRiZWx0Lm5lZyxzcGFuLnNjYW5pYS1pY29uLXdlYXItc2VhdGJlbHQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85N19XZWFyX3NlYXRiZWx0LTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tbm8tcGhvbmUtZHVyaW5nLWRyaXZpbmcubmVnLHNwYW4uc2NhbmlhLWljb24tbm8tcGhvbmUtZHVyaW5nLWRyaXZpbmcubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85OF9Ob19waG9uZV9kdXJpbmdfZHJpdmluZy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWxpc3Rlbi10by1kZW1vLWRyaXZlci5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1saXN0ZW4tdG8tZGVtby1kcml2ZXIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85OV9MaXN0ZW5fdG9fZGVtb19kcml2ZXItNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXMtYnVzLm5lZyxzcGFuLnNjYW5pYS1pY29uLWNvbm5lY3RlZC1zZXJ2aWNlcy1idXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xMDBfQ29ubmVjdGVkX3NlcnZpY2VzX2J1cy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWluZm8tcm91bmQubmVnLHNwYW4uc2NhbmlhLWljb24taW5mby1yb3VuZC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzEwMV9JbmZvX3JvdW5kLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tY2FsbC11cy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1jYWxsLXVzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTAyX0NhbGxfdXNfNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1saW5rLm5lZyxzcGFuLnNjYW5pYS1pY29uLWxpbmsubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xMDNfTGluay1pY29uLTI0LTQ4cHhfbmVnLnN2ZycpfVxuLyohXHJcbiAqICBJbXBvcnRpbmcgU2NhbmljIENvcnBvcmF0ZSBJY29ucyBpbmNsdWRpbmcgRm9udCBBd2Vzb21lIHZlcnNpb24gMy4yLjFcclxuICovXHJcbi8qIEZPTlQgUEFUSFxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbkBpbXBvcnQgdXJsKFwiLy9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvZm9udHMvY29ycG9yYXRlLWljb25zL3N0eWxlLmNzc1wiKTtcclxuXHJcbi8qIVxyXG4gKiBBZGRpdGlvbmFsIENsYXNzZXMgbm90IHJlbmRlcmVkIGJ5IEljb01vb24gd2hlcmUgU2NhbmlhIENvcnBvcmF0ZSBJY29ucyBhcmUgY3JlYXRlZCwgbWFpbnRhaW5lZCBhbmQgaG9zdGVkLlxyXG4gLyogRk9OVCBBV0VTT01FIENPUkVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuW2NsYXNzXj1cImljb24tXCJdLFxyXG5bY2xhc3MqPVwiIGljb24tXCJdIHtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICptYXJnaW4tcmlnaHQ6IC4zZW07XHJcbn1cclxuW2NsYXNzXj1cImljb24tXCJdOmJlZm9yZSxcclxuW2NsYXNzKj1cIiBpY29uLVwiXTpiZWZvcmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgc3BlYWs6IG5vbmU7XHJcbn1cclxuLyogbWFrZXMgdGhlIGZvbnQgMzMlIGxhcmdlciByZWxhdGl2ZSB0byB0aGUgaWNvbiBjb250YWluZXIgKi9cclxuLmljb24tbGFyZ2U6YmVmb3JlIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogLTEwJTtcclxuICBmb250LXNpemU6IDEuMzMzMzMzMzMzMzMzMzMzM2VtO1xyXG59XHJcbi8qIG1ha2VzIHN1cmUgaWNvbnMgYWN0aXZlIG9uIHJvbGxvdmVyIGluIGxpbmtzICovXHJcbmEgW2NsYXNzXj1cImljb24tXCJdLFxyXG5hIFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4vKiBpbmNyZWFzZWQgZm9udCBzaXplIGZvciBpY29uLWxhcmdlICovXHJcbltjbGFzc149XCJpY29uLVwiXS5pY29uLWZpeGVkLXdpZHRoLFxyXG5bY2xhc3MqPVwiIGljb24tXCJdLmljb24tZml4ZWQtd2lkdGgge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMS4xNDI4NTcxNDI4NTcxNDI4ZW07XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogMC4yODU3MTQyODU3MTQyODU3ZW07XHJcbn1cclxuW2NsYXNzXj1cImljb24tXCJdLmljb24tZml4ZWQtd2lkdGguaWNvbi1sYXJnZSxcclxuW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLWZpeGVkLXdpZHRoLmljb24tbGFyZ2Uge1xyXG4gIHdpZHRoOiAxLjQyODU3MTQyODU3MTQyODZlbTtcclxufVxyXG4uaWNvbnMtdWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAyLjE0Mjg1NzE0Mjg1NzE0M2VtO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4uaWNvbnMtdWwgPiBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pY29ucy11bCAuaWNvbi1saSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0yLjE0Mjg1NzE0Mjg1NzE0M2VtO1xyXG4gIHdpZHRoOiAyLjE0Mjg1NzE0Mjg1NzE0M2VtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5bY2xhc3NePVwiaWNvbi1cIl0uaGlkZSxcclxuW2NsYXNzKj1cIiBpY29uLVwiXS5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5pY29uLW11dGVkIHtcclxuICBjb2xvcjogI2VlZWVlZTtcclxufVxyXG4uaWNvbi1saWdodCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmljb24tZGFyayB7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLmljb24tYm9yZGVyIHtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZWVlZWVlO1xyXG4gIHBhZGRpbmc6IC4yZW0gLjI1ZW0gLjE1ZW07XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5pY29uLTJ4IHtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG4uaWNvbi0yeC5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5pY29uLTN4IHtcclxuICBmb250LXNpemU6IDNlbTtcclxufVxyXG4uaWNvbi0zeC5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5pY29uLTR4IHtcclxuICBmb250LXNpemU6IDRlbTtcclxufVxyXG4uaWNvbi00eC5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5pY29uLTV4IHtcclxuICBmb250LXNpemU6IDVlbTtcclxufVxyXG4uaWNvbi01eC5pY29uLWJvcmRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uaWNvbi02eCB7XHJcbiAgZm9udC1zaXplOiA2ZW07XHJcbn1cclxuLmljb24tNnguaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogNnB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4uaWNvbi03eCB7XHJcbiAgZm9udC1zaXplOiA3ZW07XHJcbn1cclxuLmljb24tN3guaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogN3B4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG4uaWNvbi04eCB7XHJcbiAgZm9udC1zaXplOiA4ZW07XHJcbn1cclxuLmljb24tOHguaWNvbi1ib3JkZXIge1xyXG4gIGJvcmRlci13aWR0aDogOHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmljb24tOXgge1xyXG4gIGZvbnQtc2l6ZTogOWVtO1xyXG59XHJcbi5pY29uLTl4Lmljb24tYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDlweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbn1cclxuXHJcbi5pY29uLWV4dHJlbWUge1xyXG5mb250LXNpemU6IDUwZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnB1bGwtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4ucHVsbC1sZWZ0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5bY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1sZWZ0LFxyXG5bY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtbGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xyXG59XHJcbltjbGFzc149XCJpY29uLVwiXS5wdWxsLXJpZ2h0LFxyXG5bY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtcmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAuM2VtO1xyXG59XHJcbi8qIEJPT1RTVFJBUCBTUEVDSUZJQyBDTEFTU0VTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIEJvb3RzdHJhcCAyLjAgc3ByaXRlcy5sZXNzIHJlc2V0ICovXHJcbltjbGFzc149XCJpY29uLVwiXSxcclxuW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4vKiBtb3JlIHNwcml0ZXMubGVzcyByZXNldCAqL1xyXG4uaWNvbi13aGl0ZSxcclxuLm5hdi1waWxscyA+IC5hY3RpdmUgPiBhID4gW2NsYXNzXj1cImljb24tXCJdLFxyXG4ubmF2LXBpbGxzID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3MqPVwiIGljb24tXCJdLFxyXG4ubmF2LWxpc3QgPiAuYWN0aXZlID4gYSA+IFtjbGFzc149XCJpY29uLVwiXSxcclxuLm5hdi1saXN0ID4gLmFjdGl2ZSA+IGEgPiBbY2xhc3MqPVwiIGljb24tXCJdLFxyXG4ubmF2YmFyLWludmVyc2UgLm5hdiA+IC5hY3RpdmUgPiBhID4gW2NsYXNzXj1cImljb24tXCJdLFxyXG4ubmF2YmFyLWludmVyc2UgLm5hdiA+IC5hY3RpdmUgPiBhID4gW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIgPiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyID4gW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYSA+IFtjbGFzc149XCJpY29uLVwiXSxcclxuLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYSA+IFtjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbi5kcm9wZG93bi1zdWJtZW51OmhvdmVyID4gYSA+IFtjbGFzc149XCJpY29uLVwiXSxcclxuLmRyb3Bkb3duLXN1Ym1lbnU6aG92ZXIgPiBhID4gW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4vKiBrZWVwcyBCb290c3RyYXAgc3R5bGVzIHdpdGggYW5kIHdpdGhvdXQgaWNvbnMgdGhlIHNhbWUgKi9cclxuLmJ0biBbY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1sYXJnZSxcclxuLm5hdiBbY2xhc3NePVwiaWNvbi1cIl0uaWNvbi1sYXJnZSxcclxuLmJ0biBbY2xhc3MqPVwiIGljb24tXCJdLmljb24tbGFyZ2UsXHJcbi5uYXYgW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLWxhcmdlIHtcclxuICBsaW5lLWhlaWdodDogLjllbTtcclxufVxyXG4uYnRuIFtjbGFzc149XCJpY29uLVwiXS5pY29uLXNwaW4sXHJcbi5uYXYgW2NsYXNzXj1cImljb24tXCJdLmljb24tc3BpbixcclxuLmJ0biBbY2xhc3MqPVwiIGljb24tXCJdLmljb24tc3BpbixcclxuLm5hdiBbY2xhc3MqPVwiIGljb24tXCJdLmljb24tc3BpbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5uYXYtdGFicyBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbi5uYXYtcGlsbHMgW2NsYXNzXj1cImljb24tXCJdLFxyXG4ubmF2LXRhYnMgW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuLm5hdi1waWxscyBbY2xhc3MqPVwiIGljb24tXCJdLFxyXG4ubmF2LXRhYnMgW2NsYXNzXj1cImljb24tXCJdLmljb24tbGFyZ2UsXHJcbi5uYXYtcGlsbHMgW2NsYXNzXj1cImljb24tXCJdLmljb24tbGFyZ2UsXHJcbi5uYXYtdGFicyBbY2xhc3MqPVwiIGljb24tXCJdLmljb24tbGFyZ2UsXHJcbi5uYXYtcGlsbHMgW2NsYXNzKj1cIiBpY29uLVwiXS5pY29uLWxhcmdlIHtcclxuICBsaW5lLWhlaWdodDogLjllbTtcclxufVxyXG4uYnRuIFtjbGFzc149XCJpY29uLVwiXS5wdWxsLWxlZnQuaWNvbi0yeCxcclxuLmJ0biBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtbGVmdC5pY29uLTJ4LFxyXG4uYnRuIFtjbGFzc149XCJpY29uLVwiXS5wdWxsLXJpZ2h0Lmljb24tMngsXHJcbi5idG4gW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLXJpZ2h0Lmljb24tMngge1xyXG4gIG1hcmdpbi10b3A6IC4xOGVtO1xyXG59XHJcbi5idG4gW2NsYXNzXj1cImljb24tXCJdLmljb24tc3Bpbi5pY29uLWxhcmdlLFxyXG4uYnRuIFtjbGFzcyo9XCIgaWNvbi1cIl0uaWNvbi1zcGluLmljb24tbGFyZ2Uge1xyXG4gIGxpbmUtaGVpZ2h0OiAuOGVtO1xyXG59XHJcbi5idG4uYnRuLXNtYWxsIFtjbGFzc149XCJpY29uLVwiXS5wdWxsLWxlZnQuaWNvbi0yeCxcclxuLmJ0bi5idG4tc21hbGwgW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLWxlZnQuaWNvbi0yeCxcclxuLmJ0bi5idG4tc21hbGwgW2NsYXNzXj1cImljb24tXCJdLnB1bGwtcmlnaHQuaWNvbi0yeCxcclxuLmJ0bi5idG4tc21hbGwgW2NsYXNzKj1cIiBpY29uLVwiXS5wdWxsLXJpZ2h0Lmljb24tMngge1xyXG4gIG1hcmdpbi10b3A6IC4yNWVtO1xyXG59XHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzc149XCJpY29uLVwiXSxcclxuLmJ0bi5idG4tbGFyZ2UgW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngsXHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngsXHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzc149XCJpY29uLVwiXS5wdWxsLXJpZ2h0Lmljb24tMngsXHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4IHtcclxuICBtYXJnaW4tdG9wOiAuMDVlbTtcclxufVxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngsXHJcbi5idG4uYnRuLWxhcmdlIFtjbGFzcyo9XCIgaWNvbi1cIl0ucHVsbC1sZWZ0Lmljb24tMngge1xyXG4gIG1hcmdpbi1yaWdodDogLjJlbTtcclxufVxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3NePVwiaWNvbi1cIl0ucHVsbC1yaWdodC5pY29uLTJ4LFxyXG4uYnRuLmJ0bi1sYXJnZSBbY2xhc3MqPVwiIGljb24tXCJdLnB1bGwtcmlnaHQuaWNvbi0yeCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC4yZW07XHJcbn1cclxuLyogRml4ZXMgYWxpZ25tZW50IGluIG5hdiBsaXN0cyAqL1xyXG4ubmF2LWxpc3QgW2NsYXNzXj1cImljb24tXCJdLFxyXG4ubmF2LWxpc3QgW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuLyogRVhUUkFTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qIFN0YWNrZWQgYW5kIGxheWVyZWQgaWNvbiAqL1xyXG4uaWNvbi1zdGFjayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMmVtO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IC0zNSU7XHJcbn1cclxuLmljb24tc3RhY2sgW2NsYXNzXj1cImljb24tXCJdLFxyXG4uaWNvbi1zdGFjayBbY2xhc3MqPVwiIGljb24tXCJdIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAqbGluZS1oZWlnaHQ6IDJlbTtcclxufVxyXG4uaWNvbi1zdGFjayAuaWNvbi1zdGFjay1iYXNlIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICAqbGluZS1oZWlnaHQ6IDFlbTtcclxufVxyXG4vKiBBbmltYXRlZCByb3RhdGluZyBpY29uICovXHJcbi5pY29uLXNwaW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAtbW96LWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLW8tYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG4vKiBQcmV2ZW50IHN0YWNrIGFuZCBzcGlubmVycyBmcm9tIGJlaW5nIHRha2VuIGlubGluZSB3aGVuIGluc2lkZSBhIGxpbmsgKi9cclxuYSAuaWNvbi1zdGFjayxcclxuYSAuaWNvbi1zcGluIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbkAtbW96LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcbkAtbXMta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gIH1cclxufVxyXG4vKiBJY29uIHJvdGF0aW9ucyBhbmQgbWlycm9yaW5nICovXHJcbi5pY29uLXJvdGF0ZS05MDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpO1xyXG59XHJcbi5pY29uLXJvdGF0ZS0xODA6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpO1xyXG59XHJcbi5pY29uLXJvdGF0ZS0yNzA6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpO1xyXG59XHJcbi5pY29uLWZsaXAtaG9yaXpvbnRhbDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XHJcbn1cclxuLmljb24tZmxpcC12ZXJ0aWNhbDpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XHJcbn1cclxuLyogZW5zdXJlIHJvdGF0aW9uIG9jY3VycyBpbnNpZGUgYW5jaG9yIHRhZ3MgKi9cclxuYSAuaWNvbi1yb3RhdGUtOTA6YmVmb3JlLFxyXG5hIC5pY29uLXJvdGF0ZS0xODA6YmVmb3JlLFxyXG5hIC5pY29uLXJvdGF0ZS0yNzA6YmVmb3JlLFxyXG5hIC5pY29uLWZsaXAtaG9yaXpvbnRhbDpiZWZvcmUsXHJcbmEgLmljb24tZmxpcC12ZXJ0aWNhbDpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXG5AaW1wb3J0IHVybChcIi9yZXNvdXJjZXMvZm9udHMvc2NhbmlhLXNhbnMvY3lyaWxsaWMvc2NhbmlhLWN5cmlsbGljLWZvbnRzLmNzc1wiKTtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnMtUmVndWxhci5lb3RcIik7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fucy1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zLUJvbGQuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnMtQm9sZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIEJvbGQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnMtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMnO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fucy1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnMtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgSXRhbGljJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zLUl0YWxpYy5lb3RcIik7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fucy1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1JdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBIZWFkbGluZSc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0hlYWRsaW5lLVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNIZWFkbGluZS1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zSGVhZGxpbmUtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNIZWFkbGluZS1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNIZWFkbGluZS1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgSGVhZGxpbmUnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0hlYWRsaW5lLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc0hlYWRsaW5lLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgSGVhZGxpbmUgQm9sZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0hlYWRsaW5lLUJvbGQuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zSGVhZGxpbmUtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNIZWFkbGluZS1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgU2VtaSBDb25kZW5zZWQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLVJlZ3VsYXIuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBTZW1pIENvbmRlbnNlZCc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gIHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxuICB1cmwoXCJTY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBTZW1pIENvbmRlbnNlZCBCb2xkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBTZW1pIENvbmRlbnNlZCc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NjYW5pYSBTYW5zIFNlbWkgQ29uZGVuc2VkIEl0YWxpYyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc1NlbWlDb25kZW5zZWQtSXRhbGljLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNTZW1pQ29uZGVuc2VkLUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zU2VtaUNvbmRlbnNlZC1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBDb25kZW5zZWQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtUmVndWxhci5lb3RcIik7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1SZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCBcbiAgdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgQ29uZGVuc2VkJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBDb25kZW5zZWQgQm9sZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1Cb2xkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTY2FuaWEgU2FucyBDb25kZW5zZWQnO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2NhbmlhIFNhbnMgQ29uZGVuc2VkIEl0YWxpYyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiU2NhbmlhU2Fuc0NvbmRlbnNlZC1JdGFsaWMuZW90XCIpO1xuICBzcmM6IHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIFxuICB1cmwoXCJTY2FuaWFTYW5zQ29uZGVuc2VkLUl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgXG4gIHVybChcIlNjYW5pYVNhbnNDb25kZW5zZWQtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbmksc3Bhbnt9aVtjbGFzcyo9c2NhbmlhLWljb24tXSxzcGFuW2NsYXNzKj1zY2FuaWEtaWNvbi1de2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOjU0cHg7d2lkdGg6NTRweDtoZWlnaHQ6NTRweDttYXJnaW46NXB4fWkubGcsaS5tZCxpLnNtLGkueGwsaS54cyxpLnh4bCxzcGFuLmxnLHNwYW4ubWQsc3Bhbi5zbSxzcGFuLnhsLHNwYW4ueHMsc3Bhbi54eGx7ZGlzcGxheTppbmxpbmUtYmxvY2t9aS54cyxzcGFuLnhze2JhY2tncm91bmQtc2l6ZToxNnB4O3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWFyZ2luOjJweH1pLnNtLHNwYW4uc217YmFja2dyb3VuZC1zaXplOjI4cHg7d2lkdGg6MjhweDtoZWlnaHQ6MjhweDttYXJnaW46MnB4fWkubWQsc3Bhbi5tZHtiYWNrZ3JvdW5kLXNpemU6NTRweDt3aWR0aDo1NHB4O2hlaWdodDo1NHB4O21hcmdpbjo1cHh9aS5sZyxzcGFuLmxne2JhY2tncm91bmQtc2l6ZTo5MHB4O3dpZHRoOjkwcHg7aGVpZ2h0OjkwcHg7bWFyZ2luOjhweH1pLnhsLHNwYW4ueGx7YmFja2dyb3VuZC1zaXplOjE0MHB4IDE0MHB4O3dpZHRoOjE0MHB4O2hlaWdodDoxNDBweDtwYWRkaW5nOjEwcHh9aS54eGwsc3Bhbi54eGx7YmFja2dyb3VuZC1zaXplOjI0MHB4O3dpZHRoOjI0MHB4O2hlaWdodDoyNDBweDtwYWRkaW5nOjEwcHh9aS5zY2FuaWEtaWNvbi1maW5kLWEtZGVhbGVyLHNwYW4uc2NhbmlhLWljb24tZmluZC1hLWRlYWxlcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDFfRmluZF9hX2RlYWxlci01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tc2VhcmNoLHNwYW4uc2NhbmlhLWljb24tc2VhcmNoe2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wMl9JY29uX3NlYXJjaC01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tY2xvc2UtaW5wdXQsc3Bhbi5zY2FuaWEtaWNvbi1jbG9zZS1pbnB1dHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDNfU2VhcmNoLWRlc2t0b3BfaW4tZmllbGQtZGVsZXRlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1zZWFyY2gtbW9iaWxlLHNwYW4uc2NhbmlhLWljb24tc2VhcmNoLW1vYmlsZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDRfU2VhcmNoLW1vYmlsZV9pbi1maWVsZC1kZWxldGUtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1lbnUtbW9iaWxlLHNwYW4uc2NhbmlhLWljb24tbWVudS1tb2JpbGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzA1X01lbnVfbW9iaWxlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jbG9zZS1tb2JpbGUtbWVudSxzcGFuLnNjYW5pYS1pY29uLWNsb3NlLW1vYmlsZS1tZW51e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wNl9NZW51X2Nsb3NlX2J1dHRvbl9Nb2JpbGUtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1lbnUtYmFjay1idXR0b24sc3Bhbi5zY2FuaWEtaWNvbi1tZW51LWJhY2stYnV0dG9ue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wN19NZW51X2JhY2tfYnV0dG9uLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1teS1zY2FuaWEtbW9iaWxlLHNwYW4uc2NhbmlhLWljb24tbXktc2NhbmlhLW1vYmlsZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMDhfTXlfc2NhbmlhX01vYmlsZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tc2hhcmUtc29jaWFsLW1lZGlhLHNwYW4uc2NhbmlhLWljb24tc2hhcmUtc29jaWFsLW1lZGlhe2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8wOV9TaGFyZV9wYWdlX3Rvb2xfc2hhcmVfaWNvbi01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tc2hhcmUtcGFnZS10b29sLHNwYW4uc2NhbmlhLWljb24tc2hhcmUtcGFnZS10b29se2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMF9TaGFyZV9wYWdlX3Rvb2wtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXZpZGVvLXBsYXksc3Bhbi5zY2FuaWEtaWNvbi12aWRlby1wbGF5e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMV9WaWRlb19wbGF5X2ljb24tNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIsc3Bhbi5zY2FuaWEtaWNvbi1maW5kLWEtZGVhbGVye2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMl9GaW5kX2FfZGVhbGVyX0NUQS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tb3Blbi1hY2NvcmRpYW4tcGx1cyxzcGFuLnNjYW5pYS1pY29uLW9wZW4tYWNjb3JkaWFuLXBsdXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEzX09wZW5fYWNjb3JkaWFuX3BsdXNfTW9iaWxlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jbG9zZS1hY2NvcmRpYW4tbWludXMsc3Bhbi5zY2FuaWEtaWNvbi1jbG9zZS1hY2NvcmRpYW4tbWludXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzE0X0Nsb3NlX2FjY29yZGlhbl9taW51c19pY29uX01vYmlsZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdGljayxzcGFuLnNjYW5pYS1pY29uLXRpY2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzE1X1RpY2tfaWNvbi01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tZmlsdGVyLWRyb3Bkb3duLHNwYW4uc2NhbmlhLWljb24tZmlsdGVyLWRyb3Bkb3due2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xNl9GaWx0ZXJfZHJvcF9kb3duX2ljb24tNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdCxzcGFuLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTdfRGVhbGVyX2xvY2F0b3JfRGV0ZWN0X2xvY2F0aW9uXzU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1tYXAtcGluLHNwYW4uc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItbWFwLXBpbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMThfRGVhbGVyX2xvY2F0b3JfbWFwX3Bpbl9maWxsZWQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWN1cnJlbnQsc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1jdXJyZW50e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xOV9EZWFsZXJfbG9jYXRvcl9DdXJyZW50X2xvY2F0aW9uX3Bpbi01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tam9iLXBvc3RpbmctbG9jYXRpb24sc3Bhbi5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy1sb2NhdGlvbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjBfSm9iX3Bvc3RpbmdfaW5mb19Mb2NhdGlvbl9nZW5lcmljLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy13b3JrYXJlYSxzcGFuLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLXdvcmthcmVhe2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yMV9Kb2JfcG9zdGluZ19pbmZvX0xvY2F0aW9uX2dlbmVyaWMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLWNsb3NpbmctZGF0ZSxzcGFuLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLWNsb3NpbmctZGF0ZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjJfQ2xvc2luZ19kYXRlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1lbWFpbCxzcGFuLnNjYW5pYS1pY29uLWVtYWlse2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yM19FLW1haWxfVVMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci13ZWJzaXRlLHNwYW4uc2NhbmlhLWljb24tZGVhbGVyLXdlYnNpdGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzI0X1ZpZXdfZGVhbGVyX3dlYnNpdGUtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1kaXJlY3Rpb24sc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItZGlyZWN0aW9ue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8yNV9EZWFsZXJfa2V5X2FjdGlvbnNfR2V0X2RpcmVjdGlvbnNfZ2VuZXJpY181NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2ssc3Bhbi5zY2FuaWEtaWNvbi10cnVja3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjZfVHJ1Y2stNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWVuZ2luZSxzcGFuLnNjYW5pYS1pY29uLWVuZ2luZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMjdfRW5naW5lLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1idXMsc3Bhbi5zY2FuaWEtaWNvbi1idXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzI4X0J1cy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tYm9hdCxzcGFuLnNjYW5pYS1pY29uLWJvYXR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzI5X0JvYXQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWZpbmFuY2Usc3Bhbi5zY2FuaWEtaWNvbi1maW5hbmNle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zMF9GaW5hbmNlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb252ZXlvcmJlbHQsc3Bhbi5zY2FuaWEtaWNvbi1jb252ZXlvcmJlbHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzMxX0NvbnZleW9yYmVsdF9NYWNoaW5lcnktNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXBvd2VyZ2VuLHNwYW4uc2NhbmlhLWljb24tcG93ZXJnZW57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzMyX1Bvd2VyZ2VuLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1pbnN1cmFuY2Usc3Bhbi5zY2FuaWEtaWNvbi1pbnN1cmFuY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzMzX0luc3VyYW5jZV9yaXNrX21hbmFnZW1lbnQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXJlcGFpcnMsc3Bhbi5zY2FuaWEtaWNvbi1yZXBhaXJze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zNF9SZXBhaXJzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXMsc3Bhbi5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzM1X0Nvbm5lY3RlZF9zZXJ2aWNlcy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdHJhaW5pbmctY2xhc3Nyb29tLHNwYW4uc2NhbmlhLWljb24tdHJhaW5pbmctY2xhc3Nyb29te2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zNl9UcmFpbmluZ19DbGFzc3Jvb20tNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1kcml2ZXIsc3Bhbi5zY2FuaWEtaWNvbi1idXMtZHJpdmVye2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8zN19Ecml2ZXJfQnVzX2RyaXZlci01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tYnVzaW5lc3Mtb3BlcmF0b3Isc3Bhbi5zY2FuaWEtaWNvbi1idXNpbmVzcy1vcGVyYXRvcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMzhfQnVzaW5lc3Nfb3BlcmF0b3ItNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXBhc3NlbmdlcixzcGFuLnNjYW5pYS1pY29uLXBhc3NlbmdlcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMzlfUGFzc2FuZ2VyLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1tZWNoYW5pYy10ZWNobmljaWFuLHNwYW4uc2NhbmlhLWljb24tbWVjaGFuaWMtdGVjaG5pY2lhbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDBfTWVjaGFuaWNfVGVjaG5pY2lhbi01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tY29uY3JldGUtbWl4ZXIsc3Bhbi5zY2FuaWEtaWNvbi1jb25jcmV0ZS1taXhlcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDJfQ29uY3JldGVfbWl4ZXItNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXRydWNrLWFzc2VtYmx5LWNvbXBvbmVudCxzcGFuLnNjYW5pYS1pY29uLXRydWNrLWFzc2VtYmx5LWNvbXBvbmVudHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDNfVHJ1Y2tfYXNzZW1ibHktNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1hcHBsaWNhdGlvbixzcGFuLnNjYW5pYS1pY29uLWJ1cy1hcHBsaWNhdGlvbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDRfQnVzX2FwcGxpY2F0aW9uLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1lbmdpbmUtYXBwbGljYXRpb24sc3Bhbi5zY2FuaWEtaWNvbi1lbmdpbmUtYXBwbGljYXRpb257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzQ1X0VuZ2luZV9hcHBsaWNhdGlvbi01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tZnVlbC1lY29ub215LHNwYW4uc2NhbmlhLWljb24tZnVlbC1lY29ub215e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy80Nl9GdWVsX2Vjb25vbXktNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXN1c3RhaW5hYmlsaXR5LHNwYW4uc2NhbmlhLWljb24tc3VzdGFpbmFiaWxpdHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzQ3X1N1c3RhaW5hYmlsbGl0eV9FbnZpcm9ubWVudC01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tY29tZm9ydC1wYXNzZW5nZXIsc3Bhbi5zY2FuaWEtaWNvbi1jb21mb3J0LXBhc3NlbmdlcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNDhfQ29tZm9ydF9QYXNzYW5nZXJfZW52aXJvbm1lbnQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRyaXZlci1vbXB0aW1pemF0aW9uLHNwYW4uc2NhbmlhLWljb24tZHJpdmVyLW9tcHRpbWl6YXRpb257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzQ5X0RyaXZlcl9vcHRpbWlzYXRpb24tNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXVwdGltZSxzcGFuLnNjYW5pYS1pY29uLXVwdGltZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTBfVXB0aW1lLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1wcm9kdWN0aXZpdHksc3Bhbi5zY2FuaWEtaWNvbi1wcm9kdWN0aXZpdHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzUxX1Byb2R1Y3Rpdml0eS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tYnVzaW5lc3MtZ3Jvd3RoLHNwYW4uc2NhbmlhLWljb24tYnVzaW5lc3MtZ3Jvd3Roe2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81Ml9CdXNpbmVzc19ncm93dGgtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWVmZmljaWVuY3ksc3Bhbi5zY2FuaWEtaWNvbi1lZmZpY2llbmN5e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81M19FZmZpY2llbmN5LTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb25kaXRpb24tcm9hZHMsc3Bhbi5zY2FuaWEtaWNvbi1jb25kaXRpb24tcm9hZHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzU0X0NvbmRpdGlvbnNfcm9hZHMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXNhZmV0eSxzcGFuLnNjYW5pYS1pY29uLXNhZmV0eXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTVfU2FmZXR5XzU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1xdWFsaXR5LWVuZ2luZWVyaW5nLHNwYW4uc2NhbmlhLWljb24tcXVhbGl0eS1lbmdpbmVlcmluZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNTZfUXVhbGl0eV9FbmdpbmVlcmluZy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdG9lLHNwYW4uc2NhbmlhLWljb24tdG9le2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy81N19UT0UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWFsdGVybmF0aXZlLWZ1ZWxzLHNwYW4uc2NhbmlhLWljb24tYWx0ZXJuYXRpdmUtZnVlbHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzU4X0FsdGVybmF0aXZlX2Z1ZWxzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi10bWEsc3Bhbi5zY2FuaWEtaWNvbi10bWF7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzU5X1RNQS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tcGF5bG9hZCxzcGFuLnNjYW5pYS1pY29uLXBheWxvYWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzYwX1BheWxvYWQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRyaXZlYWJpbGl0eSxzcGFuLnNjYW5pYS1pY29uLWRyaXZlYWJpbGl0eXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjFfRHJpdmVhYmlsaXR5LTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1lY29sdXRpb24tYW5hbHlzaXMsc3Bhbi5zY2FuaWEtaWNvbi1lY29sdXRpb24tYW5hbHlzaXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzYyX0Vjb2x1dGlvbl9hbmFseXNpcy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tZWNvbHV0aW9uLXNvbHV0aW9ucyxzcGFuLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1zb2x1dGlvbnN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzYzX0Vjb2x1dGlvbl9zb2x1dGlvbnMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1yZXN1bHRzLHNwYW4uc2NhbmlhLWljb24tZWNvbHV0aW9uLXJlc3VsdHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY0X0Vjb2x1dGlvbl9yZXN1bHRzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1mdWVsLWVmZmljZW5jeSxzcGFuLnNjYW5pYS1pY29uLWZ1ZWwtZWZmaWNlbmN5e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy82NV9GdWVsX2VmZmljZW5jeS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tY28yLWVtaXNzaW9ucyxzcGFuLnNjYW5pYS1pY29uLWNvMi1lbWlzc2lvbnN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY2X0NvMl9lbWlzc2lvbnMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbGVzLWNhcGFjaXR5LHNwYW4uc2NhbmlhLWljb24tbWlsZXMtY2FwYWNpdHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY3X01pbGVzX2NhcGFjaXR5LTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1ldmVudHMsc3Bhbi5zY2FuaWEtaWNvbi1ldmVudHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzY4X0V2ZW50cy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHksc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1hc3NlbWJseXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNjlfVHJ1Y2tfYXNzZW1ibHktNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXdhaXRpbmctdGltZSxzcGFuLnNjYW5pYS1pY29uLXdhaXRpbmctdGltZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzBfV2FpdGluZy10aW1lLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1leHBsb3JlLHNwYW4uc2NhbmlhLWljb24tZXhwbG9yZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzFfRXhwbG9yZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tc2VlLWRldGFpbHMsc3Bhbi5zY2FuaWEtaWNvbi1zZWUtZGV0YWlsc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzJfU2VlIGRldGFpbHMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW5ldHdvcmstd29ybGR3aWRlLW9wZW4sc3Bhbi5zY2FuaWEtaWNvbi1uZXR3b3JrLXdvcmxkd2lkZS1vcGVue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83M19TY2FuaWFfbmV0d29ya193b3JsZHdpZGVfb3Blbl8yNGgtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXdhcnJhbnR5LHNwYW4uc2NhbmlhLWljb24td2FycmFudHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc0X1dhcnJhbnR5LTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1nZWFyLXNoaWZ0LHNwYW4uc2NhbmlhLWljb24tZ2Vhci1zaGlmdHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzVfR2Vhcl9zaGlmdC01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24ta25vd2xlZGdlLHNwYW4uc2NhbmlhLWljb24ta25vd2xlZGdle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83Nl9Lbm93bGVkZ2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWJyYWtlLHNwYW4uc2NhbmlhLWljb24tYnJha2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc3X0JyYWtlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmFjZWJvb2ssc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmFjZWJvb2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc4X1NvY2lhbF9tZWRpYV9GYWNlYm9vay5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1mbGlja3Isc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmxpY2tye2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfRmxpY2tyLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWdvb2dsZXBsdXMsc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZ29vZ2xlcGx1c3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX0dvb2dsZVBsdXMuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtaW5zdGFncmFtLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWluc3RhZ3JhbXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX0luc3RhZ3JhbS5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1saW5rZWRpbixzcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1saW5rZWRpbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX0xpbmtlZGluLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXNsaWRlc2hhcmUsc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtc2xpZGVzaGFyZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX1NsaWRlU2hhcmUuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtdHdpdHRlcixzcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS10d2l0dGVye2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OF9Tb2NpYWxfbWVkaWFfVHdpdHRlci5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmV7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzc4X1NvY2lhbF9tZWRpYV9Zb3V0dWJlLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUtdmFyaWF0aW9uLTIsc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEteW91dHViZS12YXJpYXRpb24tMntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvNzhfU29jaWFsX21lZGlhX1lvdXR1YmVfdmFyaWF0aW9uLTIuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zYXZlLWRvd25sb2FkLHNwYW4uc2NhbmlhLWljb24tc2F2ZS1kb3dubG9hZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODRfU2F2ZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2stc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLXRydWNrLXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wMV9TSVNfVHJ1Y2tfc2VydmljZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tYnVzLXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi1idXMtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzAyX1NJU19CdXNfc2VydmljZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tZW5naW5lLXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi1lbmdpbmUtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzAzX1NJU19FbmdpbmVzX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzA0X1NJU19NYXJpbmVfZW5naW5lX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzA1X1NJU19TY2FuaWFfZ2Vuc2V0c19zZXJ2aWNlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi0yNGgtYnJlYWtkb3duLXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi0yNGgtYnJlYWtkb3duLXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wNl9TSVNfMjRoLWVtZXJnZW5jeS1icmVha2Rvd24tc2VydmljZV81NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tYWNjaWRlbnQtcmVwYWlycyxzcGFuLnNjYW5pYS1pY29uLWFjY2lkZW50LXJlcGFpcnN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8wN19TSVNfQWNjaWRlbnRfcmVwYWlycy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tdG93aW5nLXJlY292ZXJ5LXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi10b3dpbmctcmVjb3Zlcnktc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzA4X1NJU19Ub3dpbmdfYW5kX3JlY292ZXJ5X3NlcnZpY2UyLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi10b2xsLWNvbGxlY3QtcmVjaXZlcnktc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLXRvbGwtY29sbGVjdC1yZWNpdmVyeS1zZXJ2aWNle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMDlfU0lTX1RvbGxfY29sbGVjdF9hbmRfaW5zdGFsbGF0aW9uX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXR5cmUtc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLXR5cmUtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzEwX1NJU19UeXJlX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXZlaGljbGUtd2FzaGluZyxzcGFuLnNjYW5pYS1pY29uLXZlaGljbGUtd2FzaGluZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzExX1NJU19WZWhpY2xlX3dhc2hpbmctNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXZlaGljbGUtcmVudGFsLHNwYW4uc2NhbmlhLWljb24tdmVoaWNsZS1yZW50YWx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8xMl9TSVNfVmVoaWNsZV9yZW50YWwtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXRydWNrLXNhbGVzLHNwYW4uc2NhbmlhLWljb24tdHJ1Y2stc2FsZXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8xM19TSVNfVHJ1Y2tfc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1zYWxlcyxzcGFuLnNjYW5pYS1pY29uLWJ1cy1zYWxlc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzE0X1NJU19CdXNfc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXBvd2VyLWVuZ2luZS1zYWxlcyxzcGFuLnNjYW5pYS1pY29uLXBvd2VyLWVuZ2luZS1zYWxlc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzE1X1NJU19Qb3dlcl9nZW5lcmF0aW9uX2VuaWdpbmVfc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2FsZXMsc3Bhbi5zY2FuaWEtaWNvbi1tYXJpbmUtZW5naW5lLXNhbGVze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTZfU0lTX01hcmluZV9lbmdpbmVfc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2FsZXMsc3Bhbi5zY2FuaWEtaWNvbi1nZW5zdGVzLXNhbGVze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTdfU0lTX1NjYW5pYV9nZW5zZXRzX3NhbGVzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1wYXJ0cy1zYWxlcyxzcGFuLnNjYW5pYS1pY29uLXBhcnRzLXNhbGVze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMThfU0lTX1NjYW5pYV9wYXJ0c19zYWxlcy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tZGlnaXRhbC10YWNob2dyYXBoLWRvd25sb2FkLHNwYW4uc2NhbmlhLWljb24tZGlnaXRhbC10YWNob2dyYXBoLWRvd25sb2Fke2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMTlfU0lTX0RpZ2l0YWxfdGFjaG9ncmFwaF9kYXRhX2Rvd25sb2FkLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1kaWdpdGFsLXRhY2hvZ3JhcGgtaW5zcGVjdGlvbixzcGFuLnNjYW5pYS1pY29uLWRpZ2l0YWwtdGFjaG9ncmFwaC1pbnNwZWN0aW9ue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjBfU0lTX0RpZ2l0YWxfdGFjaG9ncmFwaF9sZWdhbF9pbnNwZWN0aW9uLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1hbmFsb2d1ZS10YWNob2dyYXBoLWluc3BlY3Rpb24sc3Bhbi5zY2FuaWEtaWNvbi1hbmFsb2d1ZS10YWNob2dyYXBoLWluc3BlY3Rpb257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yMV9TSVNfQW5hbG9ndWVfdGFjaG9ncmFwaF9pbnNwZWN0aW9uX2FuZF9yZXBhaXJzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1yb2xsZXItYnJha2UtdGVzdCxzcGFuLnNjYW5pYS1pY29uLXJvbGxlci1icmFrZS10ZXN0e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjJfU0lTX1JvbGxlcl9icmFrZV90ZXN0LTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi10cmFpbGVyLXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi10cmFpbGVyLXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yM19TSVNfVHJhaWxlcl9zZXJ2aWNlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1yZWZyaWdlcmF0aW9uLXNlcnZpY2Usc3Bhbi5zY2FuaWEtaWNvbi1yZWZyaWdlcmF0aW9uLXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yNF9TSVNfVHJhbnNwb3J0X3JlZnJpZ2VyYXRpb25fdW5pdF9zZXJ2aWNlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi10YXJwYXVsaW4tc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLXRhcnBhdWxpbi1zZXJ2aWNle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjVfU0lTX1RhcnBhdWxpbl9zZXJ2aWNlLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1hZHItc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLWFkci1zZXJ2aWNle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19QT1MvMjZfU0lTX0FEUl9WZWhpY2xlX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWh5ZHJhdWxpY3Mtc2VydmljZSxzcGFuLnNjYW5pYS1pY29uLWh5ZHJhdWxpY3Mtc2VydmljZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzI3X1NJU19IeWRyYXVsaWNzLWJvZHl3b3JrX3NlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXVzZWQtdmVoaWNsZS1zYWxlcyxzcGFuLnNjYW5pYS1pY29uLXVzZWQtdmVoaWNsZS1zYWxlc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzI4X1NJU19Vc2VkX3ZlaGljbGVfc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbmluZy1zZXJ2aWNlLHNwYW4uc2NhbmlhLWljb24tbWluaW5nLXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8yOV9TSVNfTWluaW5nLXNlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbmluZy1zYWxlcyxzcGFuLnNjYW5pYS1pY29uLW1pbmluZy1zYWxlc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfUE9TLzMwX1NJU19NaW5pbmctc2FsZXMtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXRhaWwtbGlmdC1zZXJ2aWNlLHNwYW4uc2NhbmlhLWljb24tdGFpbC1saWZ0LXNlcnZpY2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX1BPUy8zMV9TSVNfVGFpbC1saWZ0LXNlcnZpY2UtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWZpeGVkLXByaWNlLXJlcGFpcnMsc3Bhbi5zY2FuaWEtaWNvbi1maXhlZC1wcmljZS1yZXBhaXJze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvcHJvZHVjdHMtc2VydmljZXMvU1ZHX1BPUy8wMV9GaXhlZF9wcmljZV9yZXBhaXJzXzI0LTQ4cHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1zZXJ2aWNlX2V4Y2hhbmdlLHNwYW4uc2NhbmlhLWljb24tc2VydmljZV9leGNoYW5nZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Byb2R1Y3RzLXNlcnZpY2VzL1NWR19QT1MvMDJfU2VydmljZV9leGNoYW5nZV8yNC00OHB4LnN2ZycpfWkuc2NhbmlhLWljb24tZW1lcmdlbmN5LHNwYW4uc2NhbmlhLWljb24tZW1lcmdlbmN5e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy83OV9FbWVyZ2VuY3lfNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXRpbWUsc3Bhbi5zY2FuaWEtaWNvbi10aW1le2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy84MF9UaW1lLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1iYXR0ZXJ5LHNwYW4uc2NhbmlhLWljb24tYmF0dGVyeXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODFfQmF0dGVyeV81NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tc291bmQsc3Bhbi5zY2FuaWEtaWNvbi1zb3VuZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODNfU291bmQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLXNtYXJ0LXRyYW5zcG9ydCxzcGFuLnNjYW5pYS1pY29uLXNtYXJ0LXRyYW5zcG9ydHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvJyl9aS5zY2FuaWEtaWNvbi1kYXRlLHNwYW4uc2NhbmlhLWljb24tZGF0ZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvODJfRGF0ZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tcm91Z2gtcm9hZHMsc3Bhbi5zY2FuaWEtaWNvbi1yb3VnaC1yb2Fkc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvJyl9aS5zY2FuaWEtaWNvbi1zdGFydC1zdG9wLHNwYW4uc2NhbmlhLWljb24tc3RhcnQtc3RvcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvJyl9aS5zY2FuaWEtaWNvbi1mdWVsLXF1YWxpdHksc3Bhbi5zY2FuaWEtaWNvbi1mdWVsLXF1YWxpdHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLycpfWkuc2NhbmlhLWljb24tZXJyb3Isc3Bhbi5zY2FuaWEtaWNvbi1lcnJvcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvJyl9aS5zY2FuaWEtaWNvbi1oZWFydCxzcGFuLnNjYW5pYS1pY29uLWhlYXJ0e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8nKX1pLnNjYW5pYS1pY29uLWNhcmV0LWxlZnQsc3Bhbi5zY2FuaWEtaWNvbi1jYXJldC1sZWZ0e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8nKX1pLnNjYW5pYS1pY29uLWNhcmV0LXJpZ2h0LHNwYW4uc2NhbmlhLWljb24tY2FyZXQtcmlnaHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLycpfWkuc2NhbmlhLWljb24tb3Blbi11cGxvYWQsc3Bhbi5zY2FuaWEtaWNvbi1vcGVuLXVwbG9hZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvJyl9aS5zY2FuaWEtaWNvbi1ndW90YXRpb24sc3Bhbi5zY2FuaWEtaWNvbi1ndW90YXRpb257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLycpfWkuc2NhbmlhLWljb24tc3VtbWFyeSxzcGFuLnNjYW5pYS1pY29uLXN1bW1hcnl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLycpfWkuc2NhbmlhLWljb24tem9vbWluLHNwYW4uc2NhbmlhLWljb24tem9vbWlue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8nKX1pLnNjYW5pYS1pY29uLXpvb21vdXQsc3Bhbi5zY2FuaWEtaWNvbi16b29tb3V0e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8nKX1pLnNjYW5pYS1pY29uLW5vLXBob3RvLHNwYW4uc2NhbmlhLWljb24tbm8tcGhvdG97YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzkyX05vX3Bob3RvLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1uby1zbW9raW5nLHNwYW4uc2NhbmlhLWljb24tbm8tc21va2luZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvOTNfTm9fc21va2luZy01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tbm8tZHJ1Z3Mtb3ItYWxjb2hvbCxzcGFuLnNjYW5pYS1pY29uLW5vLWRydWdzLW9yLWFsY29ob2x7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk0X05vX2RydWdzX29yX2FsY29ob2wtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRyaXZlcnMtbGljZW5jZS1yZXF1aXJlZCxzcGFuLnNjYW5pYS1pY29uLWRyaXZlcnMtbGljZW5jZS1yZXF1aXJlZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvOTVfRHJpdmVyc19saWNlbmNlX3JlcXVpcmVkLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1mb3JiaWRkZW4tdG8tZW50ZXItY291cnNlLHNwYW4uc2NhbmlhLWljb24tZm9yYmlkZGVuLXRvLWVudGVyLWNvdXJzZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvOTZfRm9yYmlkZGVuX3RvX2VudGVyX2NvdXJzZS01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24td2Vhci1zZWF0YmVsdCxzcGFuLnNjYW5pYS1pY29uLXdlYXItc2VhdGJlbHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk3X1dlYXJfc2VhdGJlbHQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLW5vLXBob25lLWR1cmluZy1kcml2aW5nLHNwYW4uc2NhbmlhLWljb24tbm8tcGhvbmUtZHVyaW5nLWRyaXZpbmd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk4X05vX3Bob25lX2R1cmluZ19kcml2aW5nLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1saXN0ZW4tdG8tZGVtby1kcml2ZXIsc3Bhbi5zY2FuaWEtaWNvbi1saXN0ZW4tdG8tZGVtby1kcml2ZXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzk5X0xpc3Rlbl90b19kZW1vX2RyaXZlci01NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tY29ubmVjdGVkLXNlcnZpY2VzLWJ1cyxzcGFuLnNjYW5pYS1pY29uLWNvbm5lY3RlZC1zZXJ2aWNlcy1idXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwMF9Db25uZWN0ZWRfc2VydmljZXNfYnVzLTU0LTcycHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1pbmZvLXJvdW5kLHNwYW4uc2NhbmlhLWljb24taW5mby1yb3VuZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19QT1MvMTAxX0luZm9fcm91bmQtNTQtNzJweC5zdmcnKX1pLnNjYW5pYS1pY29uLWNhbGwtdXMsc3Bhbi5zY2FuaWEtaWNvbi1jYWxsLXVze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDJfQ2FsbF91c181NC03MnB4LnN2ZycpfWkuc2NhbmlhLWljb24tbGluayxzcGFuLnNjYW5pYS1pY29uLWxpbmt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwM19MaW5rLWljb24tMjQtNDhweC5zdmcnKX1pLnNjYW5pYS10cnVjay1jb25maWd1cmF0b3Isc3Bhbi5zY2FuaWEtdHJ1Y2stY29uZmlndXJhdG9ye2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDRfVHJ1Y2stY29uZmlndXJhdG9yLTI0LTQ4cHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1jaGFuZ2Usc3Bhbi5zY2FuaWEtaWNvbi1jaGFuZ2V7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfUE9TLzEwNV9DaGFuZ2UtMjQtNDhweC5zdmcnKX1pLnNjYW5pYS1pY29uLWVkaXQsc3Bhbi5zY2FuaWEtaWNvbi1lZGl0e2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDZfRWRpdC0yNC00OHB4LnN2ZycpfWkuc2NhbmlhLWljb24tY29udmVyc2F0aW9uLHNwYW4uc2NhbmlhLWljb24tY29udmVyc2F0aW9ue2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDdfQ29udmVyc2F0aW9uLTI0LTQ4cHguc3ZnJyl9aS5zY2FuaWEtaWNvbi1zZXR0aW5ncyxzcGFuLnNjYW5pYS1pY29uLXNldHRpbmdze2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xMDhfU2V0dGluZ3MtMjQtNDhweC5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdC5hY3RpdmUsc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1kZXRlY3QuYWN0aXZle2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX1BPUy8xN19EZWFsZXJfbG9jYXRvcl9EZXRlY3RfbG9jYXRpb25fNTQtNzJweC1BY3RpdmUuc3ZnJyl9aS5zY2FuaWEtaWNvbi1maW5kLWEtZGVhbGVyLm5lZyxzcGFuLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wMV9GaW5kX2FfZGVhbGVyLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc2VhcmNoLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNlYXJjaC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzAyX0ljb25fc2VhcmNoLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tY2xvc2UtaW5wdXQubmVnLHNwYW4uc2NhbmlhLWljb24tY2xvc2UtaW5wdXQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wM19TZWFyY2gtZGVza3RvcF9pbi1maWVsZC1kZWxldGUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zZWFyY2gtbW9iaWxlLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNlYXJjaC1tb2JpbGUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wNF9TZWFyY2gtbW9iaWxlX2luLWZpZWxkLWRlbGV0ZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1lbnUtbW9iaWxlLm5lZyxzcGFuLnNjYW5pYS1pY29uLW1lbnUtbW9iaWxlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMDVfTWVudV9tb2JpbGUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jbG9zZS1tb2JpbGUtbWVudS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1jbG9zZS1tb2JpbGUtbWVudS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzA2X01lbnVfY2xvc2VfYnV0dG9uX01vYmlsZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1lbnUtYmFjay1idXR0b24ubmVnLHNwYW4uc2NhbmlhLWljb24tbWVudS1iYWNrLWJ1dHRvbi5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzA3X01lbnVfYmFja19idXR0b24tNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1teS1zY2FuaWEtbW9iaWxlLm5lZyxzcGFuLnNjYW5pYS1pY29uLW15LXNjYW5pYS1tb2JpbGUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8wOF9NeV9zY2FuaWFfTW9iaWxlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc2hhcmUtc29jaWFsLW1lZGlhLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNoYXJlLXNvY2lhbC1tZWRpYS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzA5X1NoYXJlX3BhZ2VfdG9vbF9zaGFyZV9pY29uLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc2hhcmUtcGFnZS10b29sLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNoYXJlLXBhZ2UtdG9vbC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzEwX1NoYXJlX3BhZ2VfdG9vbC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXZpZGVvLXBsYXkubmVnLHNwYW4uc2NhbmlhLWljb24tdmlkZW8tcGxheS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzExX1ZpZGVvX3BsYXlfaWNvbi01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWZpbmQtYS1kZWFsZXIubmVnLHNwYW4uc2NhbmlhLWljb24tZmluZC1hLWRlYWxlci5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzEyX0ZpbmRfYV9kZWFsZXJfQ1RBLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tb3Blbi1hY2NvcmRpYW4tcGx1cy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1vcGVuLWFjY29yZGlhbi1wbHVzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTNfT3Blbl9hY2NvcmRpYW5fcGx1c19Nb2JpbGUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jbG9zZS1hY2NvcmRpYW4tbWludXMubmVnLHNwYW4uc2NhbmlhLWljb24tY2xvc2UtYWNjb3JkaWFuLW1pbnVzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTRfQ2xvc2VfYWNjb3JkaWFuX21pbnVzX2ljb25fTW9iaWxlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdGljay5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10aWNrLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTVfVGlja19pY29uLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZmlsdGVyLWRyb3Bkb3duLm5lZyxzcGFuLnNjYW5pYS1pY29uLWZpbHRlci1kcm9wZG93bi5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzE2X0ZpbHRlcl9kcm9wX2Rvd25faWNvbi01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWRldGVjdC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1kZXRlY3QubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xN19EZWFsZXJfbG9jYXRvcl9EZXRlY3RfbG9jYXRpb25fNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1kZWFsZXItbG9jYXRvci1tYXAtcGluLm5lZyxzcGFuLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLW1hcC1waW4ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xOF9EZWFsZXJfbG9jYXRvcl9tYXBfcGluX2ZpbGxlZC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1sb2NhdG9yLWN1cnJlbnQubmVnLHNwYW4uc2NhbmlhLWljb24tZGVhbGVyLWxvY2F0b3ItY3VycmVudC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzE5X0RlYWxlcl9sb2NhdG9yX0N1cnJlbnRfbG9jYXRpb25fcGluLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tam9iLXBvc3RpbmctbG9jYXRpb24ubmVnLHNwYW4uc2NhbmlhLWljb24tam9iLXBvc3RpbmctbG9jYXRpb24ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yMF9Kb2JfcG9zdGluZ19pbmZvX0xvY2F0aW9uX2dlbmVyaWMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy13b3JrYXJlYS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy13b3JrYXJlYS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzIxX0pvYl9wb3N0aW5nX2luZm9fTG9jYXRpb25fZ2VuZXJpYy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWpvYi1wb3N0aW5nLWNsb3NpbmctZGF0ZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1qb2ItcG9zdGluZy1jbG9zaW5nLWRhdGUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yMl9DbG9zaW5nX2RhdGUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1lbWFpbC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1lbWFpbC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzIzX0UtbWFpbF9VUy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci13ZWJzaXRlLm5lZyxzcGFuLnNjYW5pYS1pY29uLWRlYWxlci13ZWJzaXRlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjRfVmlld19kZWFsZXJfd2Vic2l0ZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRlYWxlci1kaXJlY3Rpb24ubmVnLHNwYW4uc2NhbmlhLWljb24tZGVhbGVyLWRpcmVjdGlvbi5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzI1X0RlYWxlcl9rZXlfYWN0aW9uc19HZXRfZGlyZWN0aW9uc19nZW5lcmljXzU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2submVnLHNwYW4uc2NhbmlhLWljb24tdHJ1Y2submVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yNl9UcnVjay01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWVuZ2luZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1lbmdpbmUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8yN19FbmdpbmUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1idXMubmVnLHNwYW4uc2NhbmlhLWljb24tYnVzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjhfQnVzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tYm9hdC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1ib2F0Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMjlfQm9hdC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWZpbmFuY2UubmVnLHNwYW4uc2NhbmlhLWljb24tZmluYW5jZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzMwX0ZpbmFuY2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb252ZXlvcmJlbHQubmVnLHNwYW4uc2NhbmlhLWljb24tY29udmV5b3JiZWx0Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzFfQ29udmV5b3JiZWx0X01hY2hpbmVyeS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXBvd2VyZ2VuLm5lZyxzcGFuLnNjYW5pYS1pY29uLXBvd2VyZ2VuLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzJfUG93ZXJnZW4tNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1pbnN1cmFuY2UubmVnLHNwYW4uc2NhbmlhLWljb24taW5zdXJhbmNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzNfSW5zdXJhbmNlX3Jpc2tfbWFuYWdlbWVudC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXJlcGFpcnMubmVnLHNwYW4uc2NhbmlhLWljb24tcmVwYWlycy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzM0X1JlcGFpcnMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXMubmVnLHNwYW4uc2NhbmlhLWljb24tY29ubmVjdGVkLXNlcnZpY2VzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMzVfQ29ubmVjdGVkX3NlcnZpY2VzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdHJhaW5pbmctY2xhc3Nyb29tLm5lZyxzcGFuLnNjYW5pYS1pY29uLXRyYWluaW5nLWNsYXNzcm9vbS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzM2X1RyYWluaW5nX0NsYXNzcm9vbS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1kcml2ZXIubmVnLHNwYW4uc2NhbmlhLWljb24tYnVzLWRyaXZlci5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzM3X0RyaXZlcl9CdXNfZHJpdmVyLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tYnVzaW5lc3Mtb3BlcmF0b3IubmVnLHNwYW4uc2NhbmlhLWljb24tYnVzaW5lc3Mtb3BlcmF0b3IubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zOF9CdXNpbmVzc19vcGVyYXRvci01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXBhc3Nlbmdlci5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1wYXNzZW5nZXIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8zOV9QYXNzYW5nZXItNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1tZWNoYW5pYy10ZWNobmljaWFuLm5lZyxzcGFuLnNjYW5pYS1pY29uLW1lY2hhbmljLXRlY2huaWNpYW4ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80MF9NZWNoYW5pY19UZWNobmljaWFuLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tY29uY3JldGUtbWl4ZXIubmVnLHNwYW4uc2NhbmlhLWljb24tY29uY3JldGUtbWl4ZXIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80Ml9Db25jcmV0ZV9taXhlci01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXRydWNrLWFzc2VtYmx5LWNvbXBvbmVudC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1hc3NlbWJseS1jb21wb25lbnQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80M19UcnVja19hc3NlbWJseS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1hcHBsaWNhdGlvbi5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1idXMtYXBwbGljYXRpb24ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80NF9CdXNfYXBwbGljYXRpb24tNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1lbmdpbmUtYXBwbGljYXRpb24ubmVnLHNwYW4uc2NhbmlhLWljb24tZW5naW5lLWFwcGxpY2F0aW9uLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDVfRW5naW5lX2FwcGxpY2F0aW9uLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZnVlbC1lY29ub215Lm5lZyxzcGFuLnNjYW5pYS1pY29uLWZ1ZWwtZWNvbm9teS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzQ2X0Z1ZWxfZWNvbm9teS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXN1c3RhaW5hYmlsaXR5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLXN1c3RhaW5hYmlsaXR5Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDdfU3VzdGFpbmFiaWxsaXR5X0Vudmlyb25tZW50LTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tY29tZm9ydC1wYXNzZW5nZXIubmVnLHNwYW4uc2NhbmlhLWljb24tY29tZm9ydC1wYXNzZW5nZXIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy80OF9Db21mb3J0X1Bhc3Nhbmdlcl9lbnZpcm9ubWVudC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRyaXZlci1vbXB0aW1pemF0aW9uLm5lZyxzcGFuLnNjYW5pYS1pY29uLWRyaXZlci1vbXB0aW1pemF0aW9uLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNDlfRHJpdmVyX29wdGltaXNhdGlvbi01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXVwdGltZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi11cHRpbWUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81MF9VcHRpbWUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1wcm9kdWN0aXZpdHkubmVnLHNwYW4uc2NhbmlhLWljb24tcHJvZHVjdGl2aXR5Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTFfUHJvZHVjdGl2aXR5LTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tYnVzaW5lc3MtZ3Jvd3RoLm5lZyxzcGFuLnNjYW5pYS1pY29uLWJ1c2luZXNzLWdyb3d0aC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzUyX0J1c2luZXNzX2dyb3d0aC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWVmZmljaWVuY3kubmVnLHNwYW4uc2NhbmlhLWljb24tZWZmaWNpZW5jeS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzUzX0VmZmljaWVuY3ktNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb25kaXRpb24tcm9hZHMubmVnLHNwYW4uc2NhbmlhLWljb24tY29uZGl0aW9uLXJvYWRzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTRfQ29uZGl0aW9uc19yb2Fkcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXNhZmV0eS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1zYWZldHkubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81NV9TYWZldHlfNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1xdWFsaXR5LWVuZ2luZWVyaW5nLm5lZyxzcGFuLnNjYW5pYS1pY29uLXF1YWxpdHktZW5naW5lZXJpbmcubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy81Nl9RdWFsaXR5X0VuZ2luZWVyaW5nLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdG9lLm5lZyxzcGFuLnNjYW5pYS1pY29uLXRvZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzU3X1RPRS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWFsdGVybmF0aXZlLWZ1ZWxzLm5lZyxzcGFuLnNjYW5pYS1pY29uLWFsdGVybmF0aXZlLWZ1ZWxzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNThfQWx0ZXJuYXRpdmVfZnVlbHMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi10bWEubmVnLHNwYW4uc2NhbmlhLWljb24tdG1hLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNTlfVE1BLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tcGF5bG9hZC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1wYXlsb2FkLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjBfUGF5bG9hZC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWRyaXZlYWJpbGl0eS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1kcml2ZWFiaWxpdHkubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82MV9Ecml2ZWFiaWxpdHktNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1lY29sdXRpb24tYW5hbHlzaXMubmVnLHNwYW4uc2NhbmlhLWljb24tZWNvbHV0aW9uLWFuYWx5c2lzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjJfRWNvbHV0aW9uX2FuYWx5c2lzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZWNvbHV0aW9uLXNvbHV0aW9ucy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1lY29sdXRpb24tc29sdXRpb25zLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjNfRWNvbHV0aW9uX3NvbHV0aW9ucy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1yZXN1bHRzLm5lZyxzcGFuLnNjYW5pYS1pY29uLWVjb2x1dGlvbi1yZXN1bHRzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjRfRWNvbHV0aW9uX3Jlc3VsdHMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1mdWVsLWVmZmljZW5jeS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1mdWVsLWVmZmljZW5jeS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzY1X0Z1ZWxfZWZmaWNlbmN5LTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tY28yLWVtaXNzaW9ucy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1jbzItZW1pc3Npb25zLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjZfQ28yX2VtaXNzaW9ucy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbGVzLWNhcGFjaXR5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLW1pbGVzLWNhcGFjaXR5Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjdfTWlsZXNfY2FwYWNpdHktNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1ldmVudHMubmVnLHNwYW4uc2NhbmlhLWljb24tZXZlbnRzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNjhfRXZlbnRzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHkubmVnLHNwYW4uc2NhbmlhLWljb24tdHJ1Y2stYXNzZW1ibHkubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy82OV9UcnVja19hc3NlbWJseS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXdhaXRpbmctdGltZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi13YWl0aW5nLXRpbWUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83MF9XYWl0aW5nLXRpbWUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1leHBsb3JlLm5lZyxzcGFuLnNjYW5pYS1pY29uLWV4cGxvcmUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83MV9FeHBsb3JlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc2VlLWRldGFpbHMubmVnLHNwYW4uc2NhbmlhLWljb24tc2VlLWRldGFpbHMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83Ml9TZWUgZGV0YWlscy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW5ldHdvcmstd29ybGR3aWRlLW9wZW4ubmVnLHNwYW4uc2NhbmlhLWljb24tbmV0d29yay13b3JsZHdpZGUtb3Blbi5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzczX1NjYW5pYV9uZXR3b3JrX3dvcmxkd2lkZV9vcGVuXzI0aC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXdhcnJhbnR5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLXdhcnJhbnR5Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzRfV2FycmFudHktNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1nZWFyLXNoaWZ0Lm5lZyxzcGFuLnNjYW5pYS1pY29uLWdlYXItc2hpZnQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83NV9HZWFyX3NoaWZ0LTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24ta25vd2xlZGdlLm5lZyxzcGFuLnNjYW5pYS1pY29uLWtub3dsZWRnZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc2X0tub3dsZWRnZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWJyYWtlLm5lZyxzcGFuLnNjYW5pYS1pY29uLWJyYWtlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzdfQnJha2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtZmFjZWJvb2submVnLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWZhY2Vib29rLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX0ZhY2Vib29rX25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1mbGlja3IubmVnLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWZsaWNrci5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9GbGlja3JfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWdvb2dsZXBsdXMubmVnLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLWdvb2dsZXBsdXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfR29vZ2xlUGx1c19uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtaW5zdGFncmFtLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1pbnN0YWdyYW0ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfSW5zdGFncmFtX25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS1saW5rZWRpbi5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtbGlua2VkaW4ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfTGlua2VkaW5fbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXNsaWRlc2hhcmUubmVnLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXNsaWRlc2hhcmUubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfU2xpZGVTaGFyZV9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtdHdpdHRlci5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1zb2NpYWwtbWVkaWEtdHdpdHRlci5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc4X1NvY2lhbF9tZWRpYV9Ud2l0dGVyX25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNvY2lhbC1tZWRpYS15b3V0dWJlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvNzhfU29jaWFsX21lZGlhX1lvdXR1YmVfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUtdmFyaWF0aW9uLTIubmVnLHNwYW4uc2NhbmlhLWljb24tc29jaWFsLW1lZGlhLXlvdXR1YmUtdmFyaWF0aW9uLTIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy83OF9Tb2NpYWxfbWVkaWFfWW91dHViZV92YXJpYXRpb24tMl9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zYXZlLWRvd25sb2FkLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNhdmUtZG93bmxvYWQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy84NF9TYXZlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdHJ1Y2stc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10cnVjay1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzAxX1NJU19UcnVja19zZXJ2aWNlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tYnVzLXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tYnVzLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMDJfU0lTX0J1c19zZXJ2aWNlLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZW5naW5lLXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tZW5naW5lLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMDNfU0lTX0VuZ2luZXNfc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1tYXJpbmUtZW5naW5lLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMDRfU0lTX01hcmluZV9lbmdpbmVfc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1nZW5zdGVzLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMDVfU0lTX1NjYW5pYV9nZW5zZXRzX3NlcnZpY2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi0yNGgtYnJlYWtkb3duLXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tMjRoLWJyZWFrZG93bi1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzA2X1NJU18yNGgtZW1lcmdlbmN5LWJyZWFrZG93bi1zZXJ2aWNlXzU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tYWNjaWRlbnQtcmVwYWlycy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1hY2NpZGVudC1yZXBhaXJzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzA3X1NJU19BY2NpZGVudF9yZXBhaXJzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tdG93aW5nLXJlY292ZXJ5LXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tdG93aW5nLXJlY292ZXJ5LXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMDhfU0lTX1Rvd2luZ19hbmRfcmVjb3Zlcnlfc2VydmljZTItNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi10b2xsLWNvbGxlY3QtcmVjaXZlcnktc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10b2xsLWNvbGxlY3QtcmVjaXZlcnktc2VydmljZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8wOV9TSVNfVG9sbF9jb2xsZWN0X2FuZF9pbnN0YWxsYXRpb25fc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXR5cmUtc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10eXJlLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMTBfU0lTX1R5cmVfc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXZlaGljbGUtd2FzaGluZy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi12ZWhpY2xlLXdhc2hpbmcubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMTFfU0lTX1ZlaGljbGVfd2FzaGluZy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXZlaGljbGUtcmVudGFsLm5lZyxzcGFuLnNjYW5pYS1pY29uLXZlaGljbGUtcmVudGFsLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzEyX1NJU19WZWhpY2xlX3JlbnRhbC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXRydWNrLXNhbGVzLm5lZyxzcGFuLnNjYW5pYS1pY29uLXRydWNrLXNhbGVzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzEzX1NJU19UcnVja19zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWJ1cy1zYWxlcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1idXMtc2FsZXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMTRfU0lTX0J1c19zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXBvd2VyLWVuZ2luZS1zYWxlcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1wb3dlci1lbmdpbmUtc2FsZXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMTVfU0lTX1Bvd2VyX2dlbmVyYXRpb25fZW5pZ2luZV9zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1hcmluZS1lbmdpbmUtc2FsZXMubmVnLHNwYW4uc2NhbmlhLWljb24tbWFyaW5lLWVuZ2luZS1zYWxlcy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8xNl9TSVNfTWFyaW5lX2VuZ2luZV9zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWdlbnN0ZXMtc2FsZXMubmVnLHNwYW4uc2NhbmlhLWljb24tZ2Vuc3Rlcy1zYWxlcy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8xN19TSVNfU2NhbmlhX2dlbnNldHNfc2FsZXMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1wYXJ0cy1zYWxlcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1wYXJ0cy1zYWxlcy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8xOF9TSVNfU2NhbmlhX3BhcnRzX3NhbGVzLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZGlnaXRhbC10YWNob2dyYXBoLWRvd25sb2FkLm5lZyxzcGFuLnNjYW5pYS1pY29uLWRpZ2l0YWwtdGFjaG9ncmFwaC1kb3dubG9hZC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8xOV9TSVNfRGlnaXRhbF90YWNob2dyYXBoX2RhdGFfZG93bmxvYWQtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1kaWdpdGFsLXRhY2hvZ3JhcGgtaW5zcGVjdGlvbi5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1kaWdpdGFsLXRhY2hvZ3JhcGgtaW5zcGVjdGlvbi5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8yMF9TSVNfRGlnaXRhbF90YWNob2dyYXBoX2xlZ2FsX2luc3BlY3Rpb24tNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1hbmFsb2d1ZS10YWNob2dyYXBoLWluc3BlY3Rpb24ubmVnLHNwYW4uc2NhbmlhLWljb24tYW5hbG9ndWUtdGFjaG9ncmFwaC1pbnNwZWN0aW9uLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzIxX1NJU19BbmFsb2d1ZV90YWNob2dyYXBoX2luc3BlY3Rpb25fYW5kX3JlcGFpcnMtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1yb2xsZXItYnJha2UtdGVzdC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1yb2xsZXItYnJha2UtdGVzdC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8yMl9TSVNfUm9sbGVyX2JyYWtlX3Rlc3QtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi10cmFpbGVyLXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tdHJhaWxlci1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzIzX1NJU19UcmFpbGVyX3NlcnZpY2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1yZWZyaWdlcmF0aW9uLXNlcnZpY2UubmVnLHNwYW4uc2NhbmlhLWljb24tcmVmcmlnZXJhdGlvbi1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzI0X1NJU19UcmFuc3BvcnRfcmVmcmlnZXJhdGlvbl91bml0X3NlcnZpY2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi10YXJwYXVsaW4tc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi10YXJwYXVsaW4tc2VydmljZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8yNV9TSVNfVGFycGF1bGluX3NlcnZpY2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1hZHItc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1hZHItc2VydmljZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9zaXMtaWNvbnMvU1ZHX05FRy8yNl9TSVNfQURSX1ZlaGljbGVfc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWh5ZHJhdWxpY3Mtc2VydmljZS5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1oeWRyYXVsaWNzLXNlcnZpY2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMjdfU0lTX0h5ZHJhdWxpY3MtYm9keXdvcmtfc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXVzZWQtdmVoaWNsZS1zYWxlcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi11c2VkLXZlaGljbGUtc2FsZXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMjhfU0lTX1VzZWRfdmVoaWNsZV9zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbmluZy1zZXJ2aWNlLm5lZyxzcGFuLnNjYW5pYS1pY29uLW1pbmluZy1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzI5X1NJU19NaW5pbmctc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW1pbmluZy1zYWxlcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1taW5pbmctc2FsZXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvc2lzLWljb25zL1NWR19ORUcvMzBfU0lTX01pbmluZy1zYWxlcy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXRhaWwtbGlmdC1zZXJ2aWNlLm5lZyxzcGFuLnNjYW5pYS1pY29uLXRhaWwtbGlmdC1zZXJ2aWNlLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL3Npcy1pY29ucy9TVkdfTkVHLzMxX1NJU19UYWlsLWxpZnQtc2VydmljZS01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWZpeGVkLXByaWNlLXJlcGFpcnMubmVnLHNwYW4uc2NhbmlhLWljb24tZml4ZWQtcHJpY2UtcmVwYWlycy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9wcm9kdWN0cy1zZXJ2aWNlcy9TVkdfTkVHLzAxX0ZpeGVkX3ByaWNlX3JlcGFpcnNfMjQtNDhweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1zZXJ2aWNlX2V4Y2hhbmdlLm5lZyxzcGFuLnNjYW5pYS1pY29uLXNlcnZpY2VfZXhjaGFuZ2UubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvcHJvZHVjdHMtc2VydmljZXMvU1ZHX05FRy8wMl9TZXJ2aWNlX2V4Y2hhbmdlXzI0LTQ4cHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZW1lcmdlbmN5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLWVtZXJnZW5jeS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzc5X0VtZXJnZW5jeV81NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXRpbWUubmVnLHNwYW4uc2NhbmlhLWljb24tdGltZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzgwX1RpbWUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1iYXR0ZXJ5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLWJhdHRlcnkubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy84MV9CYXR0ZXJ5XzU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tc291bmQubmVnLHNwYW4uc2NhbmlhLWljb24tc291bmQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy84M19Tb3VuZC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLXNtYXJ0LXRyYW5zcG9ydC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1zbWFydC10cmFuc3BvcnQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8nKX1pLnNjYW5pYS1pY29uLWRhdGUubmVnLHNwYW4uc2NhbmlhLWljb24tZGF0ZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzgyX0RhdGUtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1yb3VnaC1yb2Fkcy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1yb3VnaC1yb2Fkcy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLycpfWkuc2NhbmlhLWljb24tc3RhcnQtc3RvcC5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1zdGFydC1zdG9wLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvJyl9aS5zY2FuaWEtaWNvbi1mdWVsLXF1YWxpdHkubmVnLHNwYW4uc2NhbmlhLWljb24tZnVlbC1xdWFsaXR5Lm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvJyl9aS5zY2FuaWEtaWNvbi1lcnJvci5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1lcnJvci5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLycpfWkuc2NhbmlhLWljb24taGVhcnQubmVnLHNwYW4uc2NhbmlhLWljb24taGVhcnQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8nKX1pLnNjYW5pYS1pY29uLWNhcmV0LWxlZnQubmVnLHNwYW4uc2NhbmlhLWljb24tY2FyZXQtbGVmdC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLycpfWkuc2NhbmlhLWljb24tY2FyZXQtcmlnaHQubmVnLHNwYW4uc2NhbmlhLWljb24tY2FyZXQtcmlnaHQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8nKX1pLnNjYW5pYS1pY29uLW9wZW4tdXBsb2FkLm5lZyxzcGFuLnNjYW5pYS1pY29uLW9wZW4tdXBsb2FkLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvJyl9aS5zY2FuaWEtaWNvbi1ndW90YXRpb24ubmVnLHNwYW4uc2NhbmlhLWljb24tZ3VvdGF0aW9uLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvJyl9aS5zY2FuaWEtaWNvbi1zdW1tYXJ5Lm5lZyxzcGFuLnNjYW5pYS1pY29uLXN1bW1hcnkubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8nKX1pLnNjYW5pYS1pY29uLXpvb21pbi5uZWcsc3Bhbi5zY2FuaWEtaWNvbi16b29taW4ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8nKX1pLnNjYW5pYS1pY29uLXpvb21vdXQubmVnLHNwYW4uc2NhbmlhLWljb24tem9vbW91dC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLycpfWkuc2NhbmlhLWljb24tbm8tcGhvdG8ubmVnLHNwYW4uc2NhbmlhLWljb24tbm8tcGhvdG8ubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85Ml9Ob19waG90by01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLW5vLXNtb2tpbmcubmVnLHNwYW4uc2NhbmlhLWljb24tbm8tc21va2luZy5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzkzX05vX3Ntb2tpbmctNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1uby1kcnVncy1vci1hbGNvaG9sLm5lZyxzcGFuLnNjYW5pYS1pY29uLW5vLWRydWdzLW9yLWFsY29ob2wubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85NF9Ob19kcnVnc19vcl9hbGNvaG9sLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tZHJpdmVycy1saWNlbmNlLXJlcXVpcmVkLm5lZyxzcGFuLnNjYW5pYS1pY29uLWRyaXZlcnMtbGljZW5jZS1yZXF1aXJlZC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzk1X0RyaXZlcnNfbGljZW5jZV9yZXF1aXJlZC01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWZvcmJpZGRlbi10by1lbnRlci1jb3Vyc2UubmVnLHNwYW4uc2NhbmlhLWljb24tZm9yYmlkZGVuLXRvLWVudGVyLWNvdXJzZS5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzk2X0ZvcmJpZGRlbl90b19lbnRlcl9jb3Vyc2UtNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi13ZWFyLXNlYXRiZWx0Lm5lZyxzcGFuLnNjYW5pYS1pY29uLXdlYXItc2VhdGJlbHQubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85N19XZWFyX3NlYXRiZWx0LTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tbm8tcGhvbmUtZHVyaW5nLWRyaXZpbmcubmVnLHNwYW4uc2NhbmlhLWljb24tbm8tcGhvbmUtZHVyaW5nLWRyaXZpbmcubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85OF9Ob19waG9uZV9kdXJpbmdfZHJpdmluZy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWxpc3Rlbi10by1kZW1vLWRyaXZlci5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1saXN0ZW4tdG8tZGVtby1kcml2ZXIubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy85OV9MaXN0ZW5fdG9fZGVtb19kcml2ZXItNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1jb25uZWN0ZWQtc2VydmljZXMtYnVzLm5lZyxzcGFuLnNjYW5pYS1pY29uLWNvbm5lY3RlZC1zZXJ2aWNlcy1idXMubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xMDBfQ29ubmVjdGVkX3NlcnZpY2VzX2J1cy01NC03MnB4X25lZy5zdmcnKX1pLnNjYW5pYS1pY29uLWluZm8tcm91bmQubmVnLHNwYW4uc2NhbmlhLWljb24taW5mby1yb3VuZC5uZWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vZDMxam53ZW8xeW5iOHUuY2xvdWRmcm9udC5uZXQvcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9TVkdfTkVHLzEwMV9JbmZvX3JvdW5kLTU0LTcycHhfbmVnLnN2ZycpfWkuc2NhbmlhLWljb24tY2FsbC11cy5uZWcsc3Bhbi5zY2FuaWEtaWNvbi1jYWxsLXVzLm5lZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9kMzFqbndlbzF5bmI4dS5jbG91ZGZyb250Lm5ldC9yZXNvdXJjZXMvaWNvbnMvc2NhbmlhL1NWR19ORUcvMTAyX0NhbGxfdXNfNTQtNzJweF9uZWcuc3ZnJyl9aS5zY2FuaWEtaWNvbi1saW5rLm5lZyxzcGFuLnNjYW5pYS1pY29uLWxpbmsubmVne2JhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL2QzMWpud2VvMXluYjh1LmNsb3VkZnJvbnQubmV0L3Jlc291cmNlcy9pY29ucy9zY2FuaWEvU1ZHX05FRy8xMDNfTGluay1pY29uLTI0LTQ4cHhfbmVnLnN2ZycpfVxuXHJcbi8qIFxyXG5UaGUgU2NhbmlhIExvZ290eXBlIFN0eWxlc2hlZXRcclxuVGhlIFNjYW5pYSBzeW1ib2wgYW5kIHdvcmRtYXJrIHNob3VsZCBiZSB1c2VkIGluIGFjY29yZGFuY2UgdG8gdGhlIGd1aWRlbGluZXMgc3BlY2lmaWVkIGluIHRoZSBCcmFuZCBNYW51YWwuIFxyXG5XZSBkbyBub3Qgd2FudCBvdXIgbG9nb3R5cGUgdG8gYmUgZG93bmxvYWRlZCB0byBsb2NhbCBzZXJ2ZXJzIGFzIHVwZGF0ZXMgdG8gdGhlIGxvZ290eXBlIGlzIG1hZGUgdG8gdGhlc2UgXHJcbmNlbnRyYWx5IHN0b3JlZCB2ZXJzaW9ucy5cclxuXHJcbkhvdyB0byB1c2VcclxuSW5jbHVkZSB0aGlzIHN0eWxlc2hlZXQgaW4geW91IGFwcGxpY2F0aW9uIGJ5IGNvcHlpbmcgdGhpcyBsaW5lIG9mIGNvZGUgdG8geW91ciBIRUFEIHNlY3Rpb246XHJcblxyXG48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9sb2dvdHlwZS1zdHlsZXNoZWV0L3NjYW5pYS1sb2dvdHlwZS5jc3NcIj5cclxuXHJcblVzZSB0aGVzZSBIVE1MIHRhZ3MgdG8gc2hvdyB0aGUgc3ltYm9sIGFuZCB3b3JkbWFyay5cclxuPHNwYW4gY2xhc3M9XCJzY2FuaWEgd29yZG1hcmtcIj48L3NwYW4+XHJcbjxzcGFuIGNsYXNzPVwic2NhbmlhIHN5bWJvbFwiPjwvc3Bhbj5cclxuPHNwYW4gY2xhc3M9XCJzY2FuaWEgc3ltYm9sIG5lZ1wiPjwvc3Bhbj4gIEZvciBhIHdoaXRlIHdvcmRtYXJrXHJcbjxzcGFuIGNsYXNzPVwic2NhbmlhIGxvZ290eXBlLXZlcnRpY2FsLWxvY2t1cFwiPjwvc3Bhbj5cclxuKi9cclxuXHJcbi5zY2FuaWEgLnN5bWJvbCwgLnNjYW5pYS5zeW1ib2wge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL3NjYW5pYS1zeW1ib2wucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9zY2FuaWEtc3ltYm9sLnN2ZycpOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ4cHggNDZweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4OyAgIFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4IFxyXG59XHJcblxyXG4uc2NhbmlhIC53b3JkbWFyaywgLnNjYW5pYS53b3JkbWFyayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLXdvcmRtYXJrLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLXdvcmRtYXJrLnN2ZycpOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2OXB4IDI4cHg7XHJcbiAgICB3aWR0aDogMTY5cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5zY2FuaWEgLndvcmRtYXJrLm5lZywgLnNjYW5pYS53b3JkbWFyay5uZWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLXdvcmRtYXJrLXdoaXRlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLXdvcmRtYXJrLXdoaXRlLnN2ZycpOyAgXHJcbn1cclxuXHJcbi8qIExvY2t1cHMgb2YgdGhlIHN5bWJvbCBhbmQgd29yZG1hcmsgc2hvdWxkIGJlIHVzZWQgYXMgYW4gZXhlcHRpb24gb25seSAqL1xyXG5cclxuLnNjYW5pYSAubG9nb3R5cGUtdmVydGljYWwtbG9ja3VwLCAuc2NhbmlhLmxvZ290eXBlLXZlcnRpY2FsLWxvY2t1cCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3Jlc291cmNlcy9sb2dvdHlwZS9zY2FuaWEvc2NhbmlhLWxvZ290eXBlLXZlcnRpY2FsLWxvY2stdXAucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2xvZ290eXBlL3NjYW5pYS9zY2FuaWEtbG9nb3R5cGUtdmVydGljYWwtbG9jay11cC5zdmcnKTsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNTBweCAxNDFweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMTQxcHg7ICAgIFxyXG59Il19 */</style></template></dom-module>
  `;
  document.head.appendChild($_documentContainer.content);
}
