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
  <dom-module id="bootstrap"><template><style>/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*! normalize.css v3.0.1 | MIT License | git.io/normalize */

html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
}

body {
  margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
template {
  display: none;
}

a {
  background: transparent;
}

a:active,
a:hover {
  outline: 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b,
strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

h1 {
  margin: .67em 0;
  font-size: 2em;
}

mark {
  color: #000;
  background: #ff0;
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sup {
  top: -.5em;
}

sub {
  bottom: -.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 1em 40px;
}

hr {
  height: 0;
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}

pre {
  overflow: auto;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
}

button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled],
html input[disabled] {
  cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}

input {
  line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

fieldset {
  padding: .35em .625em .75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}

legend {
  padding: 0;
  border: 0;
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: bold;
}

table {
  border-spacing: 0;
  border-collapse: collapse;
}

td,
th {
  padding: 0;
}

@media print {
  * {
    color: #000 !important;
    text-shadow: none !important;
    background: transparent !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  a[href^="javascript:"]:after,
  a[href^="#"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;

    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  select {
    background: #fff !important;
  }
  .navbar {
    display: none;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .btn > .caret,
  .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }
  .label {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
}

@font-face {
  font-family: 'Glyphicons Halflings';

  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}

.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.glyphicon-asterisk:before {
  content: "\\2a";
}

.glyphicon-plus:before {
  content: "\\2b";
}

.glyphicon-euro:before {
  content: "\\20ac";
}

.glyphicon-minus:before {
  content: "\\2212";
}

.glyphicon-cloud:before {
  content: "\\2601";
}

.glyphicon-envelope:before {
  content: "\\2709";
}

.glyphicon-pencil:before {
  content: "\\270f";
}

.glyphicon-glass:before {
  content: "\\e001";
}

.glyphicon-music:before {
  content: "\\e002";
}

.glyphicon-search:before {
  content: "\\e003";
}

.glyphicon-heart:before {
  content: "\\e005";
}

.glyphicon-star:before {
  content: "\\e006";
}

.glyphicon-star-empty:before {
  content: "\\e007";
}

.glyphicon-user:before {
  content: "\\e008";
}

.glyphicon-film:before {
  content: "\\e009";
}

.glyphicon-th-large:before {
  content: "\\e010";
}

.glyphicon-th:before {
  content: "\\e011";
}

.glyphicon-th-list:before {
  content: "\\e012";
}

.glyphicon-ok:before {
  content: "\\e013";
}

.glyphicon-remove:before {
  content: "\\e014";
}

.glyphicon-zoom-in:before {
  content: "\\e015";
}

.glyphicon-zoom-out:before {
  content: "\\e016";
}

.glyphicon-off:before {
  content: "\\e017";
}

.glyphicon-signal:before {
  content: "\\e018";
}

.glyphicon-cog:before {
  content: "\\e019";
}

.glyphicon-trash:before {
  content: "\\e020";
}

.glyphicon-home:before {
  content: "\\e021";
}

.glyphicon-file:before {
  content: "\\e022";
}

.glyphicon-time:before {
  content: "\\e023";
}

.glyphicon-road:before {
  content: "\\e024";
}

.glyphicon-download-alt:before {
  content: "\\e025";
}

.glyphicon-download:before {
  content: "\\e026";
}

.glyphicon-upload:before {
  content: "\\e027";
}

.glyphicon-inbox:before {
  content: "\\e028";
}

.glyphicon-play-circle:before {
  content: "\\e029";
}

.glyphicon-repeat:before {
  content: "\\e030";
}

.glyphicon-refresh:before {
  content: "\\e031";
}

.glyphicon-list-alt:before {
  content: "\\e032";
}

.glyphicon-lock:before {
  content: "\\e033";
}

.glyphicon-flag:before {
  content: "\\e034";
}

.glyphicon-headphones:before {
  content: "\\e035";
}

.glyphicon-volume-off:before {
  content: "\\e036";
}

.glyphicon-volume-down:before {
  content: "\\e037";
}

.glyphicon-volume-up:before {
  content: "\\e038";
}

.glyphicon-qrcode:before {
  content: "\\e039";
}

.glyphicon-barcode:before {
  content: "\\e040";
}

.glyphicon-tag:before {
  content: "\\e041";
}

.glyphicon-tags:before {
  content: "\\e042";
}

.glyphicon-book:before {
  content: "\\e043";
}

.glyphicon-bookmark:before {
  content: "\\e044";
}

.glyphicon-print:before {
  content: "\\e045";
}

.glyphicon-camera:before {
  content: "\\e046";
}

.glyphicon-font:before {
  content: "\\e047";
}

.glyphicon-bold:before {
  content: "\\e048";
}

.glyphicon-italic:before {
  content: "\\e049";
}

.glyphicon-text-height:before {
  content: "\\e050";
}

.glyphicon-text-width:before {
  content: "\\e051";
}

.glyphicon-align-left:before {
  content: "\\e052";
}

.glyphicon-align-center:before {
  content: "\\e053";
}

.glyphicon-align-right:before {
  content: "\\e054";
}

.glyphicon-align-justify:before {
  content: "\\e055";
}

.glyphicon-list:before {
  content: "\\e056";
}

.glyphicon-indent-left:before {
  content: "\\e057";
}

.glyphicon-indent-right:before {
  content: "\\e058";
}

.glyphicon-facetime-video:before {
  content: "\\e059";
}

.glyphicon-picture:before {
  content: "\\e060";
}

.glyphicon-map-marker:before {
  content: "\\e062";
}

.glyphicon-adjust:before {
  content: "\\e063";
}

.glyphicon-tint:before {
  content: "\\e064";
}

.glyphicon-edit:before {
  content: "\\e065";
}

.glyphicon-share:before {
  content: "\\e066";
}

.glyphicon-check:before {
  content: "\\e067";
}

.glyphicon-move:before {
  content: "\\e068";
}

.glyphicon-step-backward:before {
  content: "\\e069";
}

.glyphicon-fast-backward:before {
  content: "\\e070";
}

.glyphicon-backward:before {
  content: "\\e071";
}

.glyphicon-play:before {
  content: "\\e072";
}

.glyphicon-pause:before {
  content: "\\e073";
}

.glyphicon-stop:before {
  content: "\\e074";
}

.glyphicon-forward:before {
  content: "\\e075";
}

.glyphicon-fast-forward:before {
  content: "\\e076";
}

.glyphicon-step-forward:before {
  content: "\\e077";
}

.glyphicon-eject:before {
  content: "\\e078";
}

.glyphicon-chevron-left:before {
  content: "\\e079";
}

.glyphicon-chevron-right:before {
  content: "\\e080";
}

.glyphicon-plus-sign:before {
  content: "\\e081";
}

.glyphicon-minus-sign:before {
  content: "\\e082";
}

.glyphicon-remove-sign:before {
  content: "\\e083";
}

.glyphicon-ok-sign:before {
  content: "\\e084";
}

.glyphicon-question-sign:before {
  content: "\\e085";
}

.glyphicon-info-sign:before {
  content: "\\e086";
}

.glyphicon-screenshot:before {
  content: "\\e087";
}

.glyphicon-remove-circle:before {
  content: "\\e088";
}

.glyphicon-ok-circle:before {
  content: "\\e089";
}

.glyphicon-ban-circle:before {
  content: "\\e090";
}

.glyphicon-arrow-left:before {
  content: "\\e091";
}

.glyphicon-arrow-right:before {
  content: "\\e092";
}

.glyphicon-arrow-up:before {
  content: "\\e093";
}

.glyphicon-arrow-down:before {
  content: "\\e094";
}

.glyphicon-share-alt:before {
  content: "\\e095";
}

.glyphicon-resize-full:before {
  content: "\\e096";
}

.glyphicon-resize-small:before {
  content: "\\e097";
}

.glyphicon-exclamation-sign:before {
  content: "\\e101";
}

.glyphicon-gift:before {
  content: "\\e102";
}

.glyphicon-leaf:before {
  content: "\\e103";
}

.glyphicon-fire:before {
  content: "\\e104";
}

.glyphicon-eye-open:before {
  content: "\\e105";
}

.glyphicon-eye-close:before {
  content: "\\e106";
}

.glyphicon-warning-sign:before {
  content: "\\e107";
}

.glyphicon-plane:before {
  content: "\\e108";
}

.glyphicon-calendar:before {
  content: "\\e109";
}

.glyphicon-random:before {
  content: "\\e110";
}

.glyphicon-comment:before {
  content: "\\e111";
}

.glyphicon-magnet:before {
  content: "\\e112";
}

.glyphicon-chevron-up:before {
  content: "\\e113";
}

.glyphicon-chevron-down:before {
  content: "\\e114";
}

.glyphicon-retweet:before {
  content: "\\e115";
}

.glyphicon-shopping-cart:before {
  content: "\\e116";
}

.glyphicon-folder-close:before {
  content: "\\e117";
}

.glyphicon-folder-open:before {
  content: "\\e118";
}

.glyphicon-resize-vertical:before {
  content: "\\e119";
}

.glyphicon-resize-horizontal:before {
  content: "\\e120";
}

.glyphicon-hdd:before {
  content: "\\e121";
}

.glyphicon-bullhorn:before {
  content: "\\e122";
}

.glyphicon-bell:before {
  content: "\\e123";
}

.glyphicon-certificate:before {
  content: "\\e124";
}

.glyphicon-thumbs-up:before {
  content: "\\e125";
}

.glyphicon-thumbs-down:before {
  content: "\\e126";
}

.glyphicon-hand-right:before {
  content: "\\e127";
}

.glyphicon-hand-left:before {
  content: "\\e128";
}

.glyphicon-hand-up:before {
  content: "\\e129";
}

.glyphicon-hand-down:before {
  content: "\\e130";
}

.glyphicon-circle-arrow-right:before {
  content: "\\e131";
}

.glyphicon-circle-arrow-left:before {
  content: "\\e132";
}

.glyphicon-circle-arrow-up:before {
  content: "\\e133";
}

.glyphicon-circle-arrow-down:before {
  content: "\\e134";
}

.glyphicon-globe:before {
  content: "\\e135";
}

.glyphicon-wrench:before {
  content: "\\e136";
}

.glyphicon-tasks:before {
  content: "\\e137";
}

.glyphicon-filter:before {
  content: "\\e138";
}

.glyphicon-briefcase:before {
  content: "\\e139";
}

.glyphicon-fullscreen:before {
  content: "\\e140";
}

.glyphicon-dashboard:before {
  content: "\\e141";
}

.glyphicon-paperclip:before {
  content: "\\e142";
}

.glyphicon-heart-empty:before {
  content: "\\e143";
}

.glyphicon-link:before {
  content: "\\e144";
}

.glyphicon-phone:before {
  content: "\\e145";
}

.glyphicon-pushpin:before {
  content: "\\e146";
}

.glyphicon-usd:before {
  content: "\\e148";
}

.glyphicon-gbp:before {
  content: "\\e149";
}

.glyphicon-sort:before {
  content: "\\e150";
}

.glyphicon-sort-by-alphabet:before {
  content: "\\e151";
}

.glyphicon-sort-by-alphabet-alt:before {
  content: "\\e152";
}

.glyphicon-sort-by-order:before {
  content: "\\e153";
}

.glyphicon-sort-by-order-alt:before {
  content: "\\e154";
}

.glyphicon-sort-by-attributes:before {
  content: "\\e155";
}

.glyphicon-sort-by-attributes-alt:before {
  content: "\\e156";
}

.glyphicon-unchecked:before {
  content: "\\e157";
}

.glyphicon-expand:before {
  content: "\\e158";
}

.glyphicon-collapse-down:before {
  content: "\\e159";
}

.glyphicon-collapse-up:before {
  content: "\\e160";
}

.glyphicon-log-in:before {
  content: "\\e161";
}

.glyphicon-flash:before {
  content: "\\e162";
}

.glyphicon-log-out:before {
  content: "\\e163";
}

.glyphicon-new-window:before {
  content: "\\e164";
}

.glyphicon-record:before {
  content: "\\e165";
}

.glyphicon-save:before {
  content: "\\e166";
}

.glyphicon-open:before {
  content: "\\e167";
}

.glyphicon-saved:before {
  content: "\\e168";
}

.glyphicon-import:before {
  content: "\\e169";
}

.glyphicon-export:before {
  content: "\\e170";
}

.glyphicon-send:before {
  content: "\\e171";
}

.glyphicon-floppy-disk:before {
  content: "\\e172";
}

.glyphicon-floppy-saved:before {
  content: "\\e173";
}

.glyphicon-floppy-remove:before {
  content: "\\e174";
}

.glyphicon-floppy-save:before {
  content: "\\e175";
}

.glyphicon-floppy-open:before {
  content: "\\e176";
}

.glyphicon-credit-card:before {
  content: "\\e177";
}

.glyphicon-transfer:before {
  content: "\\e178";
}

.glyphicon-cutlery:before {
  content: "\\e179";
}

.glyphicon-header:before {
  content: "\\e180";
}

.glyphicon-compressed:before {
  content: "\\e181";
}

.glyphicon-earphone:before {
  content: "\\e182";
}

.glyphicon-phone-alt:before {
  content: "\\e183";
}

.glyphicon-tower:before {
  content: "\\e184";
}

.glyphicon-stats:before {
  content: "\\e185";
}

.glyphicon-sd-video:before {
  content: "\\e186";
}

.glyphicon-hd-video:before {
  content: "\\e187";
}

.glyphicon-subtitles:before {
  content: "\\e188";
}

.glyphicon-sound-stereo:before {
  content: "\\e189";
}

.glyphicon-sound-dolby:before {
  content: "\\e190";
}

.glyphicon-sound-5-1:before {
  content: "\\e191";
}

.glyphicon-sound-6-1:before {
  content: "\\e192";
}

.glyphicon-sound-7-1:before {
  content: "\\e193";
}

.glyphicon-copyright-mark:before {
  content: "\\e194";
}

.glyphicon-registration-mark:before {
  content: "\\e195";
}

.glyphicon-cloud-download:before {
  content: "\\e197";
}

.glyphicon-cloud-upload:before {
  content: "\\e198";
}

.glyphicon-tree-conifer:before {
  content: "\\e199";
}

.glyphicon-tree-deciduous:before {
  content: "\\e200";
}

* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

html {
  font-size: 10px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
}

input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

a {
  color: #428bca;
  text-decoration: none;
}

a:hover,
a:focus {
  color: #2a6496;
  text-decoration: underline;
}

a:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

figure {
  margin: 0;
}

img {
  vertical-align: middle;
}

.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  width: 100% \\9;
  max-width: 100%;
  height: auto;
}

.img-rounded {
  border-radius: 6px;
}

.img-thumbnail {
  display: inline-block;
  width: 100% \\9;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
       -o-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}

.img-circle {
  border-radius: 50%;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}

h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small,
.h1 small,
.h2 small,
.h3 small,
.h4 small,
.h5 small,
.h6 small,
h1 .small,
h2 .small,
h3 .small,
h4 .small,
h5 .small,
h6 .small,
.h1 .small,
.h2 .small,
.h3 .small,
.h4 .small,
.h5 .small,
.h6 .small {
  font-weight: normal;
  line-height: 1;
  color: #777;
}

h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

h1 small,
.h1 small,
h2 small,
.h2 small,
h3 small,
.h3 small,
h1 .small,
.h1 .small,
h2 .small,
.h2 .small,
h3 .small,
.h3 .small {
  font-size: 65%;
}

h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}

h4 small,
.h4 small,
h5 small,
.h5 small,
h6 small,
.h6 small,
h4 .small,
.h4 .small,
h5 .small,
.h5 .small,
h6 .small,
.h6 .small {
  font-size: 75%;
}

h1,
.h1 {
  font-size: 36px;
}

h2,
.h2 {
  font-size: 30px;
}

h3,
.h3 {
  font-size: 24px;
}

h4,
.h4 {
  font-size: 18px;
}

h5,
.h5 {
  font-size: 14px;
}

h6,
.h6 {
  font-size: 12px;
}

p {
  margin: 0 0 10px;
}

.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}

small,
.small {
  font-size: 85%;
}

cite {
  font-style: normal;
}

mark,
.mark {
  padding: .2em;
  background-color: #fcf8e3;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-justify {
  text-align: justify;
}

.text-nowrap {
  white-space: nowrap;
}

.text-lowercase {
  text-transform: lowercase;
}

.text-uppercase {
  text-transform: uppercase;
}

.text-capitalize {
  text-transform: capitalize;
}

.text-muted {
  color: #777;
}

.text-primary {
  color: #428bca;
}

a.text-primary:hover {
  color: #3071a9;
}

.text-success {
  color: #3c763d;
}

a.text-success:hover {
  color: #2b542c;
}

.text-info {
  color: #31708f;
}

a.text-info:hover {
  color: #245269;
}

.text-warning {
  color: #8a6d3b;
}

a.text-warning:hover {
  color: #66512c;
}

.text-danger {
  color: #a94442;
}

a.text-danger:hover {
  color: #843534;
}

.bg-primary {
  color: #fff;
  background-color: #428bca;
}

a.bg-primary:hover {
  background-color: #3071a9;
}

.bg-success {
  background-color: #dff0d8;
}

a.bg-success:hover {
  background-color: #c1e2b3;
}

.bg-info {
  background-color: #d9edf7;
}

a.bg-info:hover {
  background-color: #afd9ee;
}

.bg-warning {
  background-color: #fcf8e3;
}

a.bg-warning:hover {
  background-color: #f7ecb5;
}

.bg-danger {
  background-color: #f2dede;
}

a.bg-danger:hover {
  background-color: #e4b9b9;
}

.page-header {
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}

ul ul,
ol ul,
ul ol,
ol ol {
  margin-bottom: 0;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;
}

.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}

dl {
  margin-top: 0;
  margin-bottom: 20px;
}

dt,
dd {
  line-height: 1.42857143;
}

dt {
  font-weight: bold;
}

dd {
  margin-left: 0;
}

@media (min-width: 768px) {
  .dl-horizontal dt {
    float: left;
    width: 160px;
    overflow: hidden;
    clear: left;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dl-horizontal dd {
    margin-left: 180px;
  }
}

abbr[title],
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #777;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
}

blockquote p:last-child,
blockquote ul:last-child,
blockquote ol:last-child {
  margin-bottom: 0;
}

blockquote footer,
blockquote small,
blockquote .small {
  display: block;
  font-size: 80%;
  line-height: 1.42857143;
  color: #777;
}

blockquote footer:before,
blockquote small:before,
blockquote .small:before {
  content: '\\2014 \\00A0';
}

.blockquote-reverse,
blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  text-align: right;
  border-right: 5px solid #eee;
  border-left: 0;
}

.blockquote-reverse footer:before,
blockquote.pull-right footer:before,
.blockquote-reverse small:before,
blockquote.pull-right small:before,
.blockquote-reverse .small:before,
blockquote.pull-right .small:before {
  content: '';
}

.blockquote-reverse footer:after,
blockquote.pull-right footer:after,
.blockquote-reverse small:after,
blockquote.pull-right small:after,
.blockquote-reverse .small:after,
blockquote.pull-right .small:after {
  content: '\\00A0 \\2014';
}

blockquote:before,
blockquote:after {
  content: "";
}

address {
  margin-bottom: 20px;
  font-style: normal;
  line-height: 1.42857143;
}

code,
kbd,
pre,
samp {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}

code {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
}

kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  -webkit-box-shadow: none;
          box-shadow: none;
}

pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}

pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  border-radius: 0;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
}

.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
  float: left;
}

.col-xs-12 {
  width: 100%;
}

.col-xs-11 {
  width: 91.66666667%;
}

.col-xs-10 {
  width: 83.33333333%;
}

.col-xs-9 {
  width: 75%;
}

.col-xs-8 {
  width: 66.66666667%;
}

.col-xs-7 {
  width: 58.33333333%;
}

.col-xs-6 {
  width: 50%;
}

.col-xs-5 {
  width: 41.66666667%;
}

.col-xs-4 {
  width: 33.33333333%;
}

.col-xs-3 {
  width: 25%;
}

.col-xs-2 {
  width: 16.66666667%;
}

.col-xs-1 {
  width: 8.33333333%;
}

.col-xs-pull-12 {
  right: 100%;
}

.col-xs-pull-11 {
  right: 91.66666667%;
}

.col-xs-pull-10 {
  right: 83.33333333%;
}

.col-xs-pull-9 {
  right: 75%;
}

.col-xs-pull-8 {
  right: 66.66666667%;
}

.col-xs-pull-7 {
  right: 58.33333333%;
}

.col-xs-pull-6 {
  right: 50%;
}

.col-xs-pull-5 {
  right: 41.66666667%;
}

.col-xs-pull-4 {
  right: 33.33333333%;
}

.col-xs-pull-3 {
  right: 25%;
}

.col-xs-pull-2 {
  right: 16.66666667%;
}

.col-xs-pull-1 {
  right: 8.33333333%;
}

.col-xs-pull-0 {
  right: auto;
}

.col-xs-push-12 {
  left: 100%;
}

.col-xs-push-11 {
  left: 91.66666667%;
}

.col-xs-push-10 {
  left: 83.33333333%;
}

.col-xs-push-9 {
  left: 75%;
}

.col-xs-push-8 {
  left: 66.66666667%;
}

.col-xs-push-7 {
  left: 58.33333333%;
}

.col-xs-push-6 {
  left: 50%;
}

.col-xs-push-5 {
  left: 41.66666667%;
}

.col-xs-push-4 {
  left: 33.33333333%;
}

.col-xs-push-3 {
  left: 25%;
}

.col-xs-push-2 {
  left: 16.66666667%;
}

.col-xs-push-1 {
  left: 8.33333333%;
}

.col-xs-push-0 {
  left: auto;
}

.col-xs-offset-12 {
  margin-left: 100%;
}

.col-xs-offset-11 {
  margin-left: 91.66666667%;
}

.col-xs-offset-10 {
  margin-left: 83.33333333%;
}

.col-xs-offset-9 {
  margin-left: 75%;
}

.col-xs-offset-8 {
  margin-left: 66.66666667%;
}

.col-xs-offset-7 {
  margin-left: 58.33333333%;
}

.col-xs-offset-6 {
  margin-left: 50%;
}

.col-xs-offset-5 {
  margin-left: 41.66666667%;
}

.col-xs-offset-4 {
  margin-left: 33.33333333%;
}

.col-xs-offset-3 {
  margin-left: 25%;
}

.col-xs-offset-2 {
  margin-left: 16.66666667%;
}

.col-xs-offset-1 {
  margin-left: 8.33333333%;
}

.col-xs-offset-0 {
  margin-left: 0;
}

@media (min-width: 768px) {
  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
  }
  .col-sm-12 {
    width: 100%;
  }
  .col-sm-11 {
    width: 91.66666667%;
  }
  .col-sm-10 {
    width: 83.33333333%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-8 {
    width: 66.66666667%;
  }
  .col-sm-7 {
    width: 58.33333333%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-5 {
    width: 41.66666667%;
  }
  .col-sm-4 {
    width: 33.33333333%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-2 {
    width: 16.66666667%;
  }
  .col-sm-1 {
    width: 8.33333333%;
  }
  .col-sm-pull-12 {
    right: 100%;
  }
  .col-sm-pull-11 {
    right: 91.66666667%;
  }
  .col-sm-pull-10 {
    right: 83.33333333%;
  }
  .col-sm-pull-9 {
    right: 75%;
  }
  .col-sm-pull-8 {
    right: 66.66666667%;
  }
  .col-sm-pull-7 {
    right: 58.33333333%;
  }
  .col-sm-pull-6 {
    right: 50%;
  }
  .col-sm-pull-5 {
    right: 41.66666667%;
  }
  .col-sm-pull-4 {
    right: 33.33333333%;
  }
  .col-sm-pull-3 {
    right: 25%;
  }
  .col-sm-pull-2 {
    right: 16.66666667%;
  }
  .col-sm-pull-1 {
    right: 8.33333333%;
  }
  .col-sm-pull-0 {
    right: auto;
  }
  .col-sm-push-12 {
    left: 100%;
  }
  .col-sm-push-11 {
    left: 91.66666667%;
  }
  .col-sm-push-10 {
    left: 83.33333333%;
  }
  .col-sm-push-9 {
    left: 75%;
  }
  .col-sm-push-8 {
    left: 66.66666667%;
  }
  .col-sm-push-7 {
    left: 58.33333333%;
  }
  .col-sm-push-6 {
    left: 50%;
  }
  .col-sm-push-5 {
    left: 41.66666667%;
  }
  .col-sm-push-4 {
    left: 33.33333333%;
  }
  .col-sm-push-3 {
    left: 25%;
  }
  .col-sm-push-2 {
    left: 16.66666667%;
  }
  .col-sm-push-1 {
    left: 8.33333333%;
  }
  .col-sm-push-0 {
    left: auto;
  }
  .col-sm-offset-12 {
    margin-left: 100%;
  }
  .col-sm-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-sm-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-sm-offset-9 {
    margin-left: 75%;
  }
  .col-sm-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-sm-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-sm-offset-6 {
    margin-left: 50%;
  }
  .col-sm-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-sm-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-sm-offset-3 {
    margin-left: 25%;
  }
  .col-sm-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-sm-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-sm-offset-0 {
    margin-left: 0;
  }
}

@media (min-width: 992px) {
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0;
  }
}

@media (min-width: 1200px) {
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left;
  }
  .col-lg-12 {
    width: 100%;
  }
  .col-lg-11 {
    width: 91.66666667%;
  }
  .col-lg-10 {
    width: 83.33333333%;
  }
  .col-lg-9 {
    width: 75%;
  }
  .col-lg-8 {
    width: 66.66666667%;
  }
  .col-lg-7 {
    width: 58.33333333%;
  }
  .col-lg-6 {
    width: 50%;
  }
  .col-lg-5 {
    width: 41.66666667%;
  }
  .col-lg-4 {
    width: 33.33333333%;
  }
  .col-lg-3 {
    width: 25%;
  }
  .col-lg-2 {
    width: 16.66666667%;
  }
  .col-lg-1 {
    width: 8.33333333%;
  }
  .col-lg-pull-12 {
    right: 100%;
  }
  .col-lg-pull-11 {
    right: 91.66666667%;
  }
  .col-lg-pull-10 {
    right: 83.33333333%;
  }
  .col-lg-pull-9 {
    right: 75%;
  }
  .col-lg-pull-8 {
    right: 66.66666667%;
  }
  .col-lg-pull-7 {
    right: 58.33333333%;
  }
  .col-lg-pull-6 {
    right: 50%;
  }
  .col-lg-pull-5 {
    right: 41.66666667%;
  }
  .col-lg-pull-4 {
    right: 33.33333333%;
  }
  .col-lg-pull-3 {
    right: 25%;
  }
  .col-lg-pull-2 {
    right: 16.66666667%;
  }
  .col-lg-pull-1 {
    right: 8.33333333%;
  }
  .col-lg-pull-0 {
    right: auto;
  }
  .col-lg-push-12 {
    left: 100%;
  }
  .col-lg-push-11 {
    left: 91.66666667%;
  }
  .col-lg-push-10 {
    left: 83.33333333%;
  }
  .col-lg-push-9 {
    left: 75%;
  }
  .col-lg-push-8 {
    left: 66.66666667%;
  }
  .col-lg-push-7 {
    left: 58.33333333%;
  }
  .col-lg-push-6 {
    left: 50%;
  }
  .col-lg-push-5 {
    left: 41.66666667%;
  }
  .col-lg-push-4 {
    left: 33.33333333%;
  }
  .col-lg-push-3 {
    left: 25%;
  }
  .col-lg-push-2 {
    left: 16.66666667%;
  }
  .col-lg-push-1 {
    left: 8.33333333%;
  }
  .col-lg-push-0 {
    left: auto;
  }
  .col-lg-offset-12 {
    margin-left: 100%;
  }
  .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-lg-offset-9 {
    margin-left: 75%;
  }
  .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-lg-offset-6 {
    margin-left: 50%;
  }
  .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-lg-offset-3 {
    margin-left: 25%;
  }
  .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-lg-offset-0 {
    margin-left: 0;
  }
}

table {
  background-color: transparent;
}

th {
  text-align: left;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}

.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}

.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}

.table > caption + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > td {
  border-top: 0;
}

.table > tbody + tbody {
  border-top: 2px solid #ddd;
}

.table .table {
  background-color: #fff;
}

.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td {
  padding: 5px;
}

.table-bordered {
  border: 1px solid #ddd;
}

.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}

.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}

.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #f9f9f9;
}

.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
  background-color: #f5f5f5;
}

table col[class*="col-"] {
  position: static;
  display: table-column;
  float: none;
}

table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  display: table-cell;
  float: none;
}

.table > thead > tr > td.active,
.table > tbody > tr > td.active,
.table > tfoot > tr > td.active,
.table > thead > tr > th.active,
.table > tbody > tr > th.active,
.table > tfoot > tr > th.active,
.table > thead > tr.active > td,
.table > tbody > tr.active > td,
.table > tfoot > tr.active > td,
.table > thead > tr.active > th,
.table > tbody > tr.active > th,
.table > tfoot > tr.active > th {
  background-color: #f5f5f5;
}

.table-hover > tbody > tr > td.active:hover,
.table-hover > tbody > tr > th.active:hover,
.table-hover > tbody > tr.active:hover > td,
.table-hover > tbody > tr:hover > .active,
.table-hover > tbody > tr.active:hover > th {
  background-color: #e8e8e8;
}

.table > thead > tr > td.success,
.table > tbody > tr > td.success,
.table > tfoot > tr > td.success,
.table > thead > tr > th.success,
.table > tbody > tr > th.success,
.table > tfoot > tr > th.success,
.table > thead > tr.success > td,
.table > tbody > tr.success > td,
.table > tfoot > tr.success > td,
.table > thead > tr.success > th,
.table > tbody > tr.success > th,
.table > tfoot > tr.success > th {
  background-color: #dff0d8;
}

.table-hover > tbody > tr > td.success:hover,
.table-hover > tbody > tr > th.success:hover,
.table-hover > tbody > tr.success:hover > td,
.table-hover > tbody > tr:hover > .success,
.table-hover > tbody > tr.success:hover > th {
  background-color: #d0e9c6;
}

.table > thead > tr > td.info,
.table > tbody > tr > td.info,
.table > tfoot > tr > td.info,
.table > thead > tr > th.info,
.table > tbody > tr > th.info,
.table > tfoot > tr > th.info,
.table > thead > tr.info > td,
.table > tbody > tr.info > td,
.table > tfoot > tr.info > td,
.table > thead > tr.info > th,
.table > tbody > tr.info > th,
.table > tfoot > tr.info > th {
  background-color: #d9edf7;
}

.table-hover > tbody > tr > td.info:hover,
.table-hover > tbody > tr > th.info:hover,
.table-hover > tbody > tr.info:hover > td,
.table-hover > tbody > tr:hover > .info,
.table-hover > tbody > tr.info:hover > th {
  background-color: #c4e3f3;
}

.table > thead > tr > td.warning,
.table > tbody > tr > td.warning,
.table > tfoot > tr > td.warning,
.table > thead > tr > th.warning,
.table > tbody > tr > th.warning,
.table > tfoot > tr > th.warning,
.table > thead > tr.warning > td,
.table > tbody > tr.warning > td,
.table > tfoot > tr.warning > td,
.table > thead > tr.warning > th,
.table > tbody > tr.warning > th,
.table > tfoot > tr.warning > th {
  background-color: #fcf8e3;
}

.table-hover > tbody > tr > td.warning:hover,
.table-hover > tbody > tr > th.warning:hover,
.table-hover > tbody > tr.warning:hover > td,
.table-hover > tbody > tr:hover > .warning,
.table-hover > tbody > tr.warning:hover > th {
  background-color: #faf2cc;
}

.table > thead > tr > td.danger,
.table > tbody > tr > td.danger,
.table > tfoot > tr > td.danger,
.table > thead > tr > th.danger,
.table > tbody > tr > th.danger,
.table > tfoot > tr > th.danger,
.table > thead > tr.danger > td,
.table > tbody > tr.danger > td,
.table > tfoot > tr.danger > td,
.table > thead > tr.danger > th,
.table > tbody > tr.danger > th,
.table > tfoot > tr.danger > th {
  background-color: #f2dede;
}

.table-hover > tbody > tr > td.danger:hover,
.table-hover > tbody > tr > th.danger:hover,
.table-hover > tbody > tr.danger:hover > td,
.table-hover > tbody > tr:hover > .danger,
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}

@media screen and (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
  }
  .table-responsive > .table {
    margin-bottom: 0;
  }
  .table-responsive > .table > thead > tr > th,
  .table-responsive > .table > tbody > tr > th,
  .table-responsive > .table > tfoot > tr > th,
  .table-responsive > .table > thead > tr > td,
  .table-responsive > .table > tbody > tr > td,
  .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }
  .table-responsive > .table-bordered {
    border: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:first-child,
  .table-responsive > .table-bordered > tbody > tr > th:first-child,
  .table-responsive > .table-bordered > tfoot > tr > th:first-child,
  .table-responsive > .table-bordered > thead > tr > td:first-child,
  .table-responsive > .table-bordered > tbody > tr > td:first-child,
  .table-responsive > .table-bordered > tfoot > tr > td:first-child {
    border-left: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:last-child,
  .table-responsive > .table-bordered > tbody > tr > th:last-child,
  .table-responsive > .table-bordered > tfoot > tr > th:last-child,
  .table-responsive > .table-bordered > thead > tr > td:last-child,
  .table-responsive > .table-bordered > tbody > tr > td:last-child,
  .table-responsive > .table-bordered > tfoot > tr > td:last-child {
    border-right: 0;
  }
  .table-responsive > .table-bordered > tbody > tr:last-child > th,
  .table-responsive > .table-bordered > tfoot > tr:last-child > th,
  .table-responsive > .table-bordered > tbody > tr:last-child > td,
  .table-responsive > .table-bordered > tfoot > tr:last-child > td {
    border-bottom: 0;
  }
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="search"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

input[type="radio"],
input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \\9;
  line-height: normal;
}

input[type="file"] {
  display: block;
}

input[type="range"] {
  display: block;
  width: 100%;
}

select[multiple],
select[size] {
  height: auto;
}

input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

output {
  display: block;
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
}

.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}

.form-control::-moz-placeholder {
  color: #777;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: #777;
}

.form-control::-webkit-input-placeholder {
  color: #777;
}

.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  cursor: not-allowed;
  background-color: #eee;
  opacity: 1;
}

textarea.form-control {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: none;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  line-height: 34px;
  line-height: 1.42857143 \\0;
}

input[type="date"].input-sm,
input[type="time"].input-sm,
input[type="datetime-local"].input-sm,
input[type="month"].input-sm {
  line-height: 30px;
}

input[type="date"].input-lg,
input[type="time"].input-lg,
input[type="datetime-local"].input-lg,
input[type="month"].input-lg {
  line-height: 46px;
}

.form-group {
  margin-bottom: 15px;
}

.radio,
.checkbox {
  position: relative;
  display: block;
  min-height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.radio label,
.checkbox label {
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
}

.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-top: 4px \\9;
  margin-left: -20px;
}

.radio + .radio,
.checkbox + .checkbox {
  margin-top: -5px;
}

.radio-inline,
.checkbox-inline {
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  vertical-align: middle;
  cursor: pointer;
}

.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}

input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="checkbox"].disabled,
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"] {
  cursor: not-allowed;
}

.radio-inline.disabled,
.checkbox-inline.disabled,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}

.radio.disabled label,
.checkbox.disabled label,
fieldset[disabled] .radio label,
fieldset[disabled] .checkbox label {
  cursor: not-allowed;
}

.form-control-static {
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 0;
}

.form-control-static.input-lg,
.form-control-static.input-sm {
  padding-right: 0;
  padding-left: 0;
}

.input-sm,
.form-horizontal .form-group-sm .form-control {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

select.input-sm {
  height: 30px;
  line-height: 30px;
}

textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}

.input-lg,
.form-horizontal .form-group-lg .form-control {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}

select.input-lg {
  height: 46px;
  line-height: 46px;
}

textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}

.has-feedback {
  position: relative;
}

.has-feedback .form-control {
  padding-right: 42.5px;
}

.form-control-feedback {
  position: absolute;
  top: 25px;
  right: 0;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}

.input-lg + .form-control-feedback {
  width: 46px;
  height: 46px;
  line-height: 46px;
}

.input-sm + .form-control-feedback {
  width: 30px;
  height: 30px;
  line-height: 30px;
}

.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline {
  color: #3c763d;
}

.has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}

.has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
}

.has-success .input-group-addon {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #3c763d;
}

.has-success .form-control-feedback {
  color: #3c763d;
}

.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline {
  color: #8a6d3b;
}

.has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}

.has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
}

.has-warning .input-group-addon {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #8a6d3b;
}

.has-warning .form-control-feedback {
  color: #8a6d3b;
}

.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline {
  color: #a94442;
}

.has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}

.has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
}

.has-error .input-group-addon {
  color: #a94442;
  background-color: #f2dede;
  border-color: #a94442;
}

.has-error .form-control-feedback {
  color: #a94442;
}

.has-feedback label.sr-only ~ .form-control-feedback {
  top: 0;
}

.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
}

@media (min-width: 768px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .form-inline .input-group .input-group-addon,
  .form-inline .input-group .input-group-btn,
  .form-inline .input-group .form-control {
    width: auto;
  }
  .form-inline .input-group > .form-control {
    width: 100%;
  }
  .form-inline .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio,
  .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio label,
  .form-inline .checkbox label {
    padding-left: 0;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}

.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
}

.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 27px;
}

.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}

@media (min-width: 768px) {
  .form-horizontal .control-label {
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
  }
}

.form-horizontal .has-feedback .form-control-feedback {
  top: 0;
  right: 15px;
}

@media (min-width: 768px) {
  .form-horizontal .form-group-lg .control-label {
    padding-top: 14.3px;
  }
}

@media (min-width: 768px) {
  .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
  }
}

.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.btn:hover,
.btn:focus {
  color: #333;
  text-decoration: none;
}

.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}

.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  pointer-events: none;
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
          box-shadow: none;
  opacity: .65;
}

.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}

.btn-default:hover,
.btn-default:focus,
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}

.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  background-image: none;
}

.btn-default.disabled,
.btn-default[disabled],
fieldset[disabled] .btn-default,
.btn-default.disabled:hover,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default:hover,
.btn-default.disabled:focus,
.btn-default[disabled]:focus,
fieldset[disabled] .btn-default:focus,
.btn-default.disabled:active,
.btn-default[disabled]:active,
fieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active {
  background-color: #fff;
  border-color: #ccc;
}

.btn-default .badge {
  color: #fff;
  background-color: #333;
}

.btn-primary {
  color: #fff;
  background-color: #428bca;
  border-color: #357ebd;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #3071a9;
  border-color: #285e8e;
}

.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background-image: none;
}

.btn-primary.disabled,
.btn-primary[disabled],
fieldset[disabled] .btn-primary,
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #428bca;
  border-color: #357ebd;
}

.btn-primary .badge {
  color: #428bca;
  background-color: #fff;
}

.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}

.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  background-image: none;
}

.btn-success.disabled,
.btn-success[disabled],
fieldset[disabled] .btn-success,
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #5cb85c;
  border-color: #4cae4c;
}

.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}

.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}

.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}

.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  background-image: none;
}

.btn-info.disabled,
.btn-info[disabled],
fieldset[disabled] .btn-info,
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active {
  background-color: #5bc0de;
  border-color: #46b8da;
}

.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}

.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}

.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}

.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  background-image: none;
}

.btn-warning.disabled,
.btn-warning[disabled],
fieldset[disabled] .btn-warning,
.btn-warning.disabled:hover,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning:hover,
.btn-warning.disabled:focus,
.btn-warning[disabled]:focus,
fieldset[disabled] .btn-warning:focus,
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active {
  background-color: #f0ad4e;
  border-color: #eea236;
}

.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}

.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}

.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}

.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  background-image: none;
}

.btn-danger.disabled,
.btn-danger[disabled],
fieldset[disabled] .btn-danger,
.btn-danger.disabled:hover,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger:hover,
.btn-danger.disabled:focus,
.btn-danger[disabled]:focus,
fieldset[disabled] .btn-danger:focus,
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active {
  background-color: #d9534f;
  border-color: #d43f3a;
}

.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}

.btn-link {
  font-weight: normal;
  color: #428bca;
  cursor: pointer;
  border-radius: 0;
}

.btn-link,
.btn-link:active,
.btn-link[disabled],
fieldset[disabled] .btn-link {
  background-color: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}

.btn-link,
.btn-link:hover,
.btn-link:focus,
.btn-link:active {
  border-color: transparent;
}

.btn-link:hover,
.btn-link:focus {
  color: #2a6496;
  text-decoration: underline;
  background-color: transparent;
}

.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #777;
  text-decoration: none;
}

.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}

.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block + .btn-block {
  margin-top: 5px;
}

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}

.fade {
  opacity: 0;
  -webkit-transition: opacity .15s linear;
       -o-transition: opacity .15s linear;
          transition: opacity .15s linear;
}

.fade.in {
  opacity: 1;
}

.collapse {
  display: none;
}

.collapse.in {
  display: block;
}

tr.collapse.in {
  display: table-row;
}

tbody.collapse.in {
  display: table-row-group;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height .35s ease;
       -o-transition: height .35s ease;
          transition: height .35s ease;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.dropdown {
  position: relative;
}

.dropdown-toggle:focus {
  outline: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}

.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}

.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}

.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}

.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}

.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #428bca;
  outline: 0;
}

.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #777;
}

.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}

.open > .dropdown-menu {
  display: block;
}

.open > a {
  outline: 0;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropdown-menu-left {
  right: auto;
  left: 0;
}

.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #777;
  white-space: nowrap;
}

.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}

.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}

.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px solid;
}

.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 1px;
}

@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }
  .navbar-right .dropdown-menu-left {
    right: auto;
    left: 0;
  }
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  float: left;
}

.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover,
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus,
.btn-group > .btn:active,
.btn-group-vertical > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn.active {
  z-index: 2;
}

.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus {
  outline: 0;
}

.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px;
}

.btn-toolbar {
  margin-left: -5px;
}

.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}

.btn-toolbar > .btn,
.btn-toolbar > .btn-group,
.btn-toolbar > .input-group {
  margin-left: 5px;
}

.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}

.btn-group > .btn:first-child {
  margin-left: 0;
}

.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group > .btn-group {
  float: left;
}

.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}

.btn-group > .btn-group:first-child > .btn:last-child,
.btn-group > .btn-group:first-child > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group > .btn-group:last-child > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}

.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}

.btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}

.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}

.btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
          box-shadow: none;
}

.btn .caret {
  margin-left: 0;
}

.btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}

.dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}

.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}

.btn-group-vertical > .btn-group > .btn {
  float: none;
}

.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}

.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
}

.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}

.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}

.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  display: table-cell;
  float: none;
  width: 1%;
}

.btn-group-justified > .btn-group .btn {
  width: 100%;
}

.btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}

[data-toggle="buttons"] > .btn > input[type="radio"],
[data-toggle="buttons"] > .btn > input[type="checkbox"] {
  position: absolute;
  z-index: -1;
  filter: alpha(opacity=0);
  opacity: 0;
}

.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}

.input-group[class*="col-"] {
  float: none;
  padding-right: 0;
  padding-left: 0;
}

.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}

.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}

select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
}

textarea.input-group-lg > .form-control,
textarea.input-group-lg > .input-group-addon,
textarea.input-group-lg > .input-group-btn > .btn,
select[multiple].input-group-lg > .form-control,
select[multiple].input-group-lg > .input-group-addon,
select[multiple].input-group-lg > .input-group-btn > .btn {
  height: auto;
}

.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
}

textarea.input-group-sm > .form-control,
textarea.input-group-sm > .input-group-addon,
textarea.input-group-sm > .input-group-btn > .btn,
select[multiple].input-group-sm > .form-control,
select[multiple].input-group-sm > .input-group-addon,
select[multiple].input-group-sm > .input-group-btn > .btn {
  height: auto;
}

.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: table-cell;
}

.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}

.input-group-addon {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}

.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
  border-radius: 6px;
}

.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}

.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group-addon:first-child {
  border-right: 0;
}

.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-addon:last-child {
  border-left: 0;
}

.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}

.input-group-btn > .btn {
  position: relative;
}

.input-group-btn > .btn + .btn {
  margin-left: -1px;
}

.input-group-btn > .btn:hover,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:active {
  z-index: 2;
}

.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
  margin-right: -1px;
}

.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  margin-left: -1px;
}

.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav > li {
  position: relative;
  display: block;
}

.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}

.nav > li > a:hover,
.nav > li > a:focus {
  text-decoration: none;
  background-color: #eee;
}

.nav > li.disabled > a {
  color: #777;
}

.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #777;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}

.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eee;
  border-color: #428bca;
}

.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}

.nav > li > a > img {
  max-width: none;
}

.nav-tabs {
  border-bottom: 1px solid #ddd;
}

.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}

.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}

.nav-tabs > li > a:hover {
  border-color: #eee #eee #ddd;
}

.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}

.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}

.nav-tabs.nav-justified > li {
  float: none;
}

.nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}

.nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}

@media (min-width: 768px) {
  .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}

.nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}

.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #ddd;
}

@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}

.nav-pills > li {
  float: left;
}

.nav-pills > li > a {
  border-radius: 4px;
}

.nav-pills > li + li {
  margin-left: 2px;
}

.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #428bca;
}

.nav-stacked > li {
  float: none;
}

.nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}

.nav-justified {
  width: 100%;
}

.nav-justified > li {
  float: none;
}

.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}

.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}

@media (min-width: 768px) {
  .nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-justified > li > a {
    margin-bottom: 0;
  }
}

.nav-tabs-justified {
  border-bottom: 0;
}

.nav-tabs-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}

.nav-tabs-justified > .active > a,
.nav-tabs-justified > .active > a:hover,
.nav-tabs-justified > .active > a:focus {
  border: 1px solid #ddd;
}

@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}

.tab-content > .tab-pane {
  display: none;
}

.tab-content > .active {
  display: block;
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}

@media (min-width: 768px) {
  .navbar {
    border-radius: 4px;
  }
}

@media (min-width: 768px) {
  .navbar-header {
    float: left;
  }
}

.navbar-collapse {
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
}

.navbar-collapse.in {
  overflow-y: auto;
}

@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .navbar-collapse.in {
    overflow-y: visible;
  }
  .navbar-fixed-top .navbar-collapse,
  .navbar-static-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    padding-right: 0;
    padding-left: 0;
  }
}

.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}

@media (max-width: 480px) and (orientation: landscape) {
  .navbar-fixed-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}

.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
  margin-right: -15px;
  margin-left: -15px;
}

@media (min-width: 768px) {
  .container > .navbar-header,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}

.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}

@media (min-width: 768px) {
  .navbar-static-top {
    border-radius: 0;
  }
}

.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  -webkit-transform: translate3d(0, 0, 0);
       -o-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

@media (min-width: 768px) {
  .navbar-fixed-top,
  .navbar-fixed-bottom {
    border-radius: 0;
  }
}

.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}

.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}

.navbar-brand {
  float: left;
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}

.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}

@media (min-width: 768px) {
  .navbar > .container .navbar-brand,
  .navbar > .container-fluid .navbar-brand {
    margin-left: -15px;
  }
}

.navbar-toggle {
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.navbar-toggle:focus {
  outline: 0;
}

.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}

.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}

@media (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }
}

.navbar-nav {
  margin: 7.5px -15px;
}

.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}

@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
  }
  .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-nav .open .dropdown-menu > li > a:focus {
    background-image: none;
  }
}

@media (min-width: 768px) {
  .navbar-nav {
    float: left;
    margin: 0;
  }
  .navbar-nav > li {
    float: left;
  }
  .navbar-nav > li > a {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .navbar-nav.navbar-right:last-child {
    margin-right: -15px;
  }
}

@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
  }
}

.navbar-form {
  padding: 10px 15px;
  margin-top: 8px;
  margin-right: -15px;
  margin-bottom: 8px;
  margin-left: -15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
}

@media (min-width: 768px) {
  .navbar-form .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .navbar-form .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .navbar-form .input-group .input-group-addon,
  .navbar-form .input-group .input-group-btn,
  .navbar-form .input-group .form-control {
    width: auto;
  }
  .navbar-form .input-group > .form-control {
    width: 100%;
  }
  .navbar-form .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio,
  .navbar-form .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio label,
  .navbar-form .checkbox label {
    padding-left: 0;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .navbar-form .has-feedback .form-control-feedback {
    top: 0;
  }
}

@media (max-width: 767px) {
  .navbar-form .form-group {
    margin-bottom: 5px;
  }
}

@media (min-width: 768px) {
  .navbar-form {
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-form.navbar-right:last-child {
    margin-right: -15px;
  }
}

.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}

.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}

.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}

.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}

@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
  .navbar-text.navbar-right:last-child {
    margin-right: 0;
  }
}

.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}

.navbar-default .navbar-brand {
  color: #777;
}

.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}

.navbar-default .navbar-text {
  color: #777;
}

.navbar-default .navbar-nav > li > a {
  color: #777;
}

.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}

.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}

.navbar-default .navbar-toggle {
  border-color: #ddd;
}

.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}

.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}

.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}

@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}

.navbar-default .navbar-link {
  color: #777;
}

.navbar-default .navbar-link:hover {
  color: #333;
}

.navbar-default .btn-link {
  color: #777;
}

.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
  color: #333;
}

.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:focus {
  color: #ccc;
}

.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}

.navbar-inverse .navbar-brand {
  color: #777;
}

.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}

.navbar-inverse .navbar-text {
  color: #777;
}

.navbar-inverse .navbar-nav > li > a {
  color: #777;
}

.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}

.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}

.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}

.navbar-inverse .navbar-toggle {
  border-color: #333;
}

.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}

.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}

.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}

.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  color: #fff;
  background-color: #080808;
}

@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}

.navbar-inverse .navbar-link {
  color: #777;
}

.navbar-inverse .navbar-link:hover {
  color: #fff;
}

.navbar-inverse .btn-link {
  color: #777;
}

.navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link:focus {
  color: #fff;
}

.navbar-inverse .btn-link[disabled]:hover,
fieldset[disabled] .navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link[disabled]:focus,
fieldset[disabled] .navbar-inverse .btn-link:focus {
  color: #444;
}

.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.breadcrumb > li {
  display: inline-block;
}

.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\\00a0";
}

.breadcrumb > .active {
  color: #777;
}

.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}

.pagination > li {
  display: inline;
}

.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #428bca;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}

.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  color: #2a6496;
  background-color: #eee;
  border-color: #ddd;
}

.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #428bca;
  border-color: #428bca;
}

.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #777;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}

.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
}

.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
}

.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.pager {
  padding-left: 0;
  margin: 20px 0;
  text-align: center;
  list-style: none;
}

.pager li {
  display: inline;
}

.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}

.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eee;
}

.pager .next > a,
.pager .next > span {
  float: right;
}

.pager .previous > a,
.pager .previous > span {
  float: left;
}

.pager .disabled > a,
.pager .disabled > a:hover,
.pager .disabled > a:focus,
.pager .disabled > span {
  color: #777;
  cursor: not-allowed;
  background-color: #fff;
}

.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}

a.label:hover,
a.label:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.label:empty {
  display: none;
}

.btn .label {
  position: relative;
  top: -1px;
}

.label-default {
  background-color: #777;
}

.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #5e5e5e;
}

.label-primary {
  background-color: #428bca;
}

.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #3071a9;
}

.label-success {
  background-color: #5cb85c;
}

.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}

.label-info {
  background-color: #5bc0de;
}

.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}

.label-warning {
  background-color: #f0ad4e;
}

.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}

.label-danger {
  background-color: #d9534f;
}

.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}

.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: #777;
  border-radius: 10px;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.btn-xs .badge {
  top: 0;
  padding: 1px 5px;
}

a.badge:hover,
a.badge:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

a.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #428bca;
  background-color: #fff;
}

.nav-pills > li > a > .badge {
  margin-left: 3px;
}

.jumbotron {
  padding: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
}

.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}

.jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}

.jumbotron > hr {
  border-top-color: #d5d5d5;
}

.container .jumbotron {
  border-radius: 6px;
}

.jumbotron .container {
  max-width: 100%;
}

@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron {
    padding-right: 60px;
    padding-left: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 63px;
  }
}

.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
       -o-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}

.thumbnail > img,
.thumbnail a > img {
  margin-right: auto;
  margin-left: auto;
}

a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #428bca;
}

.thumbnail .caption {
  padding: 9px;
  color: #333;
}

.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert h4 {
  margin-top: 0;
  color: inherit;
}

.alert .alert-link {
  font-weight: bold;
}

.alert > p,
.alert > ul {
  margin-bottom: 0;
}

.alert > p + p {
  margin-top: 5px;
}

.alert-dismissable,
.alert-dismissible {
  padding-right: 35px;
}

.alert-dismissable .close,
.alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}

.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}

.alert-success hr {
  border-top-color: #c9e2b3;
}

.alert-success .alert-link {
  color: #2b542c;
}

.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}

.alert-info hr {
  border-top-color: #a6e1ec;
}

.alert-info .alert-link {
  color: #245269;
}

.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}

.alert-warning hr {
  border-top-color: #f7e1b5;
}

.alert-warning .alert-link {
  color: #66512c;
}

.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

.alert-danger hr {
  border-top-color: #e4b9c0;
}

.alert-danger .alert-link {
  color: #843534;
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}

@-o-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}

.progress {
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}

.progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
  -webkit-transition: width .6s ease;
       -o-transition: width .6s ease;
          transition: width .6s ease;
}

.progress-striped .progress-bar,
.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  -webkit-background-size: 40px 40px;
          background-size: 40px 40px;
}

.progress.active .progress-bar,
.progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
       -o-animation: progress-bar-stripes 2s linear infinite;
          animation: progress-bar-stripes 2s linear infinite;
}

.progress-bar[aria-valuenow="1"],
.progress-bar[aria-valuenow="2"] {
  min-width: 30px;
}

.progress-bar[aria-valuenow="0"] {
  min-width: 30px;
  color: #777;
  background-color: transparent;
  background-image: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}

.progress-bar-success {
  background-color: #5cb85c;
}

.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}

.progress-bar-info {
  background-color: #5bc0de;
}

.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}

.progress-bar-warning {
  background-color: #f0ad4e;
}

.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}

.progress-bar-danger {
  background-color: #d9534f;
}

.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}

.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}

.media,
.media .media {
  margin-top: 15px;
}

.media:first-child {
  margin-top: 0;
}

.media-object {
  display: block;
}

.media-heading {
  margin: 0 0 5px;
}

.media > .pull-left {
  margin-right: 10px;
}

.media > .pull-right {
  margin-left: 10px;
}

.media-list {
  padding-left: 0;
  list-style: none;
}

.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

.list-group-item > .badge {
  float: right;
}

.list-group-item > .badge + .badge {
  margin-right: 5px;
}

a.list-group-item {
  color: #555;
}

a.list-group-item .list-group-item-heading {
  color: #333;
}

a.list-group-item:hover,
a.list-group-item:focus {
  color: #555;
  text-decoration: none;
  background-color: #f5f5f5;
}

.list-group-item.disabled,
.list-group-item.disabled:hover,
.list-group-item.disabled:focus {
  color: #777;
  background-color: #eee;
}

.list-group-item.disabled .list-group-item-heading,
.list-group-item.disabled:hover .list-group-item-heading,
.list-group-item.disabled:focus .list-group-item-heading {
  color: inherit;
}

.list-group-item.disabled .list-group-item-text,
.list-group-item.disabled:hover .list-group-item-text,
.list-group-item.disabled:focus .list-group-item-text {
  color: #777;
}

.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}

.list-group-item.active .list-group-item-heading,
.list-group-item.active:hover .list-group-item-heading,
.list-group-item.active:focus .list-group-item-heading,
.list-group-item.active .list-group-item-heading > small,
.list-group-item.active:hover .list-group-item-heading > small,
.list-group-item.active:focus .list-group-item-heading > small,
.list-group-item.active .list-group-item-heading > .small,
.list-group-item.active:hover .list-group-item-heading > .small,
.list-group-item.active:focus .list-group-item-heading > .small {
  color: inherit;
}

.list-group-item.active .list-group-item-text,
.list-group-item.active:hover .list-group-item-text,
.list-group-item.active:focus .list-group-item-text {
  color: #e1edf7;
}

.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}

a.list-group-item-success {
  color: #3c763d;
}

a.list-group-item-success .list-group-item-heading {
  color: inherit;
}

a.list-group-item-success:hover,
a.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}

a.list-group-item-success.active,
a.list-group-item-success.active:hover,
a.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}

.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}

a.list-group-item-info {
  color: #31708f;
}

a.list-group-item-info .list-group-item-heading {
  color: inherit;
}

a.list-group-item-info:hover,
a.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}

a.list-group-item-info.active,
a.list-group-item-info.active:hover,
a.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}

.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}

a.list-group-item-warning {
  color: #8a6d3b;
}

a.list-group-item-warning .list-group-item-heading {
  color: inherit;
}

a.list-group-item-warning:hover,
a.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}

a.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}

.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}

a.list-group-item-danger {
  color: #a94442;
}

a.list-group-item-danger .list-group-item-heading {
  color: inherit;
}

a.list-group-item-danger:hover,
a.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}

a.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
}

.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}

.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}

.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.panel-body {
  padding: 15px;
}

.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}

.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}

.panel-title > a {
  color: inherit;
}

.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.panel > .list-group {
  margin-bottom: 0;
}

.panel > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}

.panel > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}

.list-group + .panel-footer {
  border-top-width: 0;
}

.panel > .table,
.panel > .table-responsive > .table,
.panel > .panel-collapse > .table {
  margin-bottom: 0;
}

.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
  border-top-left-radius: 3px;
}

.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
  border-top-right-radius: 3px;
}

.panel > .table:last-child,
.panel > .table-responsive:last-child > .table:last-child {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
  border-bottom-left-radius: 3px;
}

.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
  border-bottom-right-radius: 3px;
}

.panel > .panel-body + .table,
.panel > .panel-body + .table-responsive {
  border-top: 1px solid #ddd;
}

.panel > .table > tbody:first-child > tr:first-child th,
.panel > .table > tbody:first-child > tr:first-child td {
  border-top: 0;
}

.panel > .table-bordered,
.panel > .table-responsive > .table-bordered {
  border: 0;
}

.panel > .table-bordered > thead > tr > th:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
.panel > .table-bordered > tbody > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
.panel > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-bordered > thead > tr > td:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
.panel > .table-bordered > tbody > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
.panel > .table-bordered > tfoot > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
  border-left: 0;
}

.panel > .table-bordered > thead > tr > th:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
.panel > .table-bordered > tbody > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
.panel > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-bordered > thead > tr > td:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
.panel > .table-bordered > tbody > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
.panel > .table-bordered > tfoot > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
  border-right: 0;
}

.panel > .table-bordered > thead > tr:first-child > td,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
.panel > .table-bordered > tbody > tr:first-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
.panel > .table-bordered > thead > tr:first-child > th,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
.panel > .table-bordered > tbody > tr:first-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
  border-bottom: 0;
}

.panel > .table-bordered > tbody > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
.panel > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-bordered > tbody > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
.panel > .table-bordered > tfoot > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
  border-bottom: 0;
}

.panel > .table-responsive {
  margin-bottom: 0;
  border: 0;
}

.panel-group {
  margin-bottom: 20px;
}

.panel-group .panel {
  margin-bottom: 0;
  border-radius: 4px;
}

.panel-group .panel + .panel {
  margin-top: 5px;
}

.panel-group .panel-heading {
  border-bottom: 0;
}

.panel-group .panel-heading + .panel-collapse > .panel-body {
  border-top: 1px solid #ddd;
}

.panel-group .panel-footer {
  border-top: 0;
}

.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}

.panel-default {
  border-color: #ddd;
}

.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}

.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ddd;
}

.panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333;
}

.panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ddd;
}

.panel-primary {
  border-color: #428bca;
}

.panel-primary > .panel-heading {
  color: #fff;
  background-color: #428bca;
  border-color: #428bca;
}

.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #428bca;
}

.panel-primary > .panel-heading .badge {
  color: #428bca;
  background-color: #fff;
}

.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #428bca;
}

.panel-success {
  border-color: #d6e9c6;
}

.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}

.panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}

.panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}

.panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}

.panel-info {
  border-color: #bce8f1;
}

.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}

.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}

.panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}

.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}

.panel-warning {
  border-color: #faebcc;
}

.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}

.panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}

.panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}

.panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}

.panel-danger {
  border-color: #ebccd1;
}

.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

.panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}

.panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}

.panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}

.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}

.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}

.embed-responsive.embed-responsive-4by3 {
  padding-bottom: 75%;
}

.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}

.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, .15);
}

.well-lg {
  padding: 24px;
  border-radius: 6px;
}

.well-sm {
  padding: 9px;
  border-radius: 3px;
}

.close {
  float: right;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: .2;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  filter: alpha(opacity=50);
  opacity: .5;
}

button.close {
  -webkit-appearance: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
}

.modal-open {
  overflow: hidden;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}

.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform .3s ease-out;
       -o-transition:      -o-transform .3s ease-out;
          transition:         transform .3s ease-out;
  -webkit-transform: translate3d(0, -25%, 0);
       -o-transform: translate3d(0, -25%, 0);
          transform: translate3d(0, -25%, 0);
}

.modal.in .modal-dialog {
  -webkit-transform: translate3d(0, 0, 0);
       -o-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}

.modal-content {
  position: relative;
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  outline: 0;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}

.modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}

.modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: .5;
}

.modal-header {
  min-height: 16.42857143px;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}

.modal-header .close {
  margin-top: -2px;
}

.modal-title {
  margin: 0;
  line-height: 1.42857143;
}

.modal-body {
  position: relative;
  padding: 15px;
}

.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}

.modal-footer .btn + .btn {
  margin-bottom: 0;
  margin-left: 5px;
}

.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}

.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
  }
  .modal-sm {
    width: 300px;
  }
}

@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  font-size: 12px;
  line-height: 1.4;
  visibility: visible;
  filter: alpha(opacity=0);
  opacity: 0;
}

.tooltip.in {
  filter: alpha(opacity=90);
  opacity: .9;
}

.tooltip.top {
  padding: 5px 0;
  margin-top: -3px;
}

.tooltip.right {
  padding: 0 5px;
  margin-left: 3px;
}

.tooltip.bottom {
  padding: 5px 0;
  margin-top: 3px;
}

.tooltip.left {
  padding: 0 5px;
  margin-left: -3px;
}

.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #000;
  border-radius: 4px;
}

.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}

.tooltip.top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}

.tooltip.top-left .tooltip-arrow {
  bottom: 0;
  left: 5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}

.tooltip.top-right .tooltip-arrow {
  right: 5px;
  bottom: 0;
  border-width: 5px 5px 0;
  border-top-color: #000;
}

.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}

.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}

.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}

.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  left: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}

.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  right: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  text-align: left;
  white-space: normal;
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
}

.popover.top {
  margin-top: -10px;
}

.popover.right {
  margin-left: 10px;
}

.popover.bottom {
  margin-top: 10px;
}

.popover.left {
  margin-left: -10px;
}

.popover-title {
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
}

.popover-content {
  padding: 9px 14px;
}

.popover > .arrow,
.popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}

.popover > .arrow {
  border-width: 11px;
}

.popover > .arrow:after {
  content: "";
  border-width: 10px;
}

.popover.top > .arrow {
  bottom: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-color: #999;
  border-top-color: rgba(0, 0, 0, .25);
  border-bottom-width: 0;
}

.popover.top > .arrow:after {
  bottom: 1px;
  margin-left: -10px;
  content: " ";
  border-top-color: #fff;
  border-bottom-width: 0;
}

.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-right-color: #999;
  border-right-color: rgba(0, 0, 0, .25);
  border-left-width: 0;
}

.popover.right > .arrow:after {
  bottom: -10px;
  left: 1px;
  content: " ";
  border-right-color: #fff;
  border-left-width: 0;
}

.popover.bottom > .arrow {
  top: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999;
  border-bottom-color: rgba(0, 0, 0, .25);
}

.popover.bottom > .arrow:after {
  top: 1px;
  margin-left: -10px;
  content: " ";
  border-top-width: 0;
  border-bottom-color: #fff;
}

.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999;
  border-left-color: rgba(0, 0, 0, .25);
}

.popover.left > .arrow:after {
  right: 1px;
  bottom: -10px;
  content: " ";
  border-right-width: 0;
  border-left-color: #fff;
}

.carousel {
  position: relative;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner > .item {
  position: relative;
  display: none;
  -webkit-transition: .6s ease-in-out left;
       -o-transition: .6s ease-in-out left;
          transition: .6s ease-in-out left;
}

.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
}

.carousel-inner > .active,
.carousel-inner > .next,
.carousel-inner > .prev {
  display: block;
}

.carousel-inner > .active {
  left: 0;
}

.carousel-inner > .next,
.carousel-inner > .prev {
  position: absolute;
  top: 0;
  width: 100%;
}

.carousel-inner > .next {
  left: 100%;
}

.carousel-inner > .prev {
  left: -100%;
}

.carousel-inner > .next.left,
.carousel-inner > .prev.right {
  left: 0;
}

.carousel-inner > .active.left {
  left: -100%;
}

.carousel-inner > .active.right {
  left: 100%;
}

.carousel-control {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
  filter: alpha(opacity=50);
  opacity: .5;
}

.carousel-control.left {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}

.carousel-control.right {
  right: 0;
  left: auto;
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}

.carousel-control:hover,
.carousel-control:focus {
  color: #fff;
  text-decoration: none;
  filter: alpha(opacity=90);
  outline: 0;
  opacity: .9;
}

.carousel-control .icon-prev,
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-left,
.carousel-control .glyphicon-chevron-right {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
}

.carousel-control .icon-prev,
.carousel-control .glyphicon-chevron-left {
  left: 50%;
  margin-left: -10px;
}

.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
  margin-right: -10px;
}

.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  font-family: serif;
}

.carousel-control .icon-prev:before {
  content: '\\2039';
}

.carousel-control .icon-next:before {
  content: '\\203a';
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}

.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #000 \\9;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
}

.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #fff;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
}

.carousel-caption .btn {
  text-shadow: none;
}

@media screen and (min-width: 768px) {
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-prev,
  .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -15px;
    font-size: 30px;
  }
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .icon-prev {
    margin-left: -15px;
  }
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-next {
    margin-right: -15px;
  }
  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}

.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-footer:before,
.modal-footer:after {
  display: table;
  content: " ";
}

.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-footer:after {
  clear: both;
}

.center-block {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.pull-right {
  float: right !important;
}

.pull-left {
  float: left !important;
}

.hide {
  display: none !important;
}

.show {
  display: block !important;
}

.invisible {
  visibility: hidden;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.hidden {
  display: none !important;
  visibility: hidden !important;
}

.affix {
  position: fixed;
  -webkit-transform: translate3d(0, 0, 0);
       -o-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

@-ms-viewport {
  width: device-width;
}

.visible-xs,
.visible-sm,
.visible-md,
.visible-lg {
  display: none !important;
}

.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
  display: none !important;
}

@media (max-width: 767px) {
  .visible-xs {
    display: block !important;
  }
  table.visible-xs {
    display: table;
  }
  tr.visible-xs {
    display: table-row !important;
  }
  th.visible-xs,
  td.visible-xs {
    display: table-cell !important;
  }
}

@media (max-width: 767px) {
  .visible-xs-block {
    display: block !important;
  }
}

@media (max-width: 767px) {
  .visible-xs-inline {
    display: inline !important;
  }
}

@media (max-width: 767px) {
  .visible-xs-inline-block {
    display: inline-block !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm {
    display: block !important;
  }
  table.visible-sm {
    display: table;
  }
  tr.visible-sm {
    display: table-row !important;
  }
  th.visible-sm,
  td.visible-sm {
    display: table-cell !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-block {
    display: block !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline {
    display: inline !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline-block {
    display: inline-block !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md {
    display: block !important;
  }
  table.visible-md {
    display: table;
  }
  tr.visible-md {
    display: table-row !important;
  }
  th.visible-md,
  td.visible-md {
    display: table-cell !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-block {
    display: block !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline {
    display: inline !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline-block {
    display: inline-block !important;
  }
}

@media (min-width: 1200px) {
  .visible-lg {
    display: block !important;
  }
  table.visible-lg {
    display: table;
  }
  tr.visible-lg {
    display: table-row !important;
  }
  th.visible-lg,
  td.visible-lg {
    display: table-cell !important;
  }
}

@media (min-width: 1200px) {
  .visible-lg-block {
    display: block !important;
  }
}

@media (min-width: 1200px) {
  .visible-lg-inline {
    display: inline !important;
  }
}

@media (min-width: 1200px) {
  .visible-lg-inline-block {
    display: inline-block !important;
  }
}

@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}

@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}

.visible-print {
  display: none !important;
}

@media print {
  .visible-print {
    display: block !important;
  }
  table.visible-print {
    display: table;
  }
  tr.visible-print {
    display: table-row !important;
  }
  th.visible-print,
  td.visible-print {
    display: table-cell !important;
  }
}

.visible-print-block {
  display: none !important;
}

@media print {
  .visible-print-block {
    display: block !important;
  }
}

.visible-print-inline {
  display: none !important;
}

@media print {
  .visible-print-inline {
    display: inline !important;
  }
}

.visible-print-inline-block {
  display: none !important;
}

@media print {
  .visible-print-inline-block {
    display: inline-block !important;
  }
}

@media print {
  .hidden-print {
    display: none !important;
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9jc3MvYm9vdHN0cmFwL2Jvb3RzdHJhcC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTs7QUFFRiwyREFBMkQ7O0FBQzNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtNQUMxQiwwQkFBMEI7QUFDaEM7O0FBQ0E7RUFDRSxTQUFTO0FBQ1g7O0FBQ0E7Ozs7Ozs7Ozs7OztFQVlFLGNBQWM7QUFDaEI7O0FBQ0E7Ozs7RUFJRSxxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBQ0E7O0VBRUUsVUFBVTtBQUNaOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCwrQkFBK0I7S0FDNUIsNEJBQTRCO1VBQ3ZCLHVCQUF1QjtBQUNqQzs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7Ozs7RUFJRSxpQ0FBaUM7RUFDakMsY0FBYztBQUNoQjs7QUFDQTs7Ozs7RUFLRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7O0VBRUUsb0JB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OztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25C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bUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VB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QTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGdDQUFnQztFQUNsQztBQUNGOztBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTs7SUFFRSw4QkFBOEI7RUFDaEM7QUFDRjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0U7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0YiLCJmaWxlIjoiYm9vdHN0cnAuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBCb290c3RyYXAgdjMuMi4wIChodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbSlcbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuXG4vKiEgbm9ybWFsaXplLmNzcyB2My4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cbmh0bWwge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tYWluLFxubmF2LFxuc2VjdGlvbixcbnN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmF1ZGlvLFxuY2FudmFzLFxucHJvZ3Jlc3MsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuW2hpZGRlbl0sXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5hIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5hOmFjdGl2ZSxcbmE6aG92ZXIge1xuICBvdXRsaW5lOiAwO1xufVxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xufVxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuZGZuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuaDEge1xuICBtYXJnaW46IC42N2VtIDA7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxubWFyayB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmYwO1xufVxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5zdXAge1xuICB0b3A6IC0uNWVtO1xufVxuc3ViIHtcbiAgYm90dG9tOiAtLjI1ZW07XG59XG5pbWcge1xuICBib3JkZXI6IDA7XG59XG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuaHIge1xuICBoZWlnaHQ6IDA7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5idXR0b24ge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuYnV0dG9uLFxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG59XG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAuMzVlbSAuNjI1ZW0gLjc1ZW07XG4gIG1hcmdpbjogMCAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG59XG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxub3B0Z3JvdXAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cbkBtZWRpYSBwcmludCB7XG4gICoge1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIGEsXG4gIGE6dmlzaXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgYVtocmVmXTphZnRlciB7XG4gICAgY29udGVudDogXCIgKFwiIGF0dHIoaHJlZikgXCIpXCI7XG4gIH1cbiAgYWJiclt0aXRsZV06YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIChcIiBhdHRyKHRpdGxlKSBcIilcIjtcbiAgfVxuICBhW2hyZWZePVwiamF2YXNjcmlwdDpcIl06YWZ0ZXIsXG4gIGFbaHJlZl49XCIjXCJdOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG4gIHByZSxcbiAgYmxvY2txdW90ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcblxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgfVxuICB0aGVhZCB7XG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xuICB9XG4gIHRyLFxuICBpbWcge1xuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgfVxuICBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIHAsXG4gIGgyLFxuICBoMyB7XG4gICAgb3JwaGFuczogMztcbiAgICB3aWRvd3M6IDM7XG4gIH1cbiAgaDIsXG4gIGgzIHtcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcbiAgfVxuICBzZWxlY3Qge1xuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC50YWJsZSB0ZCxcbiAgLnRhYmxlIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ0biA+IC5jYXJldCxcbiAgLmRyb3B1cCA+IC5idG4gPiAuY2FyZXQge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgfVxuICAubGFiZWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIH1cbiAgLnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRhYmxlLWJvcmRlcmVkIHRoLFxuICAudGFibGUtYm9yZGVyZWQgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR2x5cGhpY29ucyBIYWxmbGluZ3MnO1xuXG4gIHNyYzogdXJsKCcuLi9mb250cy9nbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyLmVvdCcpO1xuICBzcmM6IHVybCgnLi4vZm9udHMvZ2x5cGhpY29ucy1oYWxmbGluZ3MtcmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJy4uL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIuc3ZnI2dseXBoaWNvbnNfaGFsZmxpbmdzcmVndWxhcicpIGZvcm1hdCgnc3ZnJyk7XG59XG4uZ2x5cGhpY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogJ0dseXBoaWNvbnMgSGFsZmxpbmdzJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTtcblxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbi5nbHlwaGljb24tYXN0ZXJpc2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcMmFcIjtcbn1cbi5nbHlwaGljb24tcGx1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFwyYlwiO1xufVxuLmdseXBoaWNvbi1ldXJvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXDIwYWNcIjtcbn1cbi5nbHlwaGljb24tbWludXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcMjIxMlwiO1xufVxuLmdseXBoaWNvbi1jbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFwyNjAxXCI7XG59XG4uZ2x5cGhpY29uLWVudmVsb3BlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXDI3MDlcIjtcbn1cbi5nbHlwaGljb24tcGVuY2lsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXDI3MGZcIjtcbn1cbi5nbHlwaGljb24tZ2xhc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAwMVwiO1xufVxuLmdseXBoaWNvbi1tdXNpYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDAyXCI7XG59XG4uZ2x5cGhpY29uLXNlYXJjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDAzXCI7XG59XG4uZ2x5cGhpY29uLWhlYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwMDVcIjtcbn1cbi5nbHlwaGljb24tc3RhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDA2XCI7XG59XG4uZ2x5cGhpY29uLXN0YXItZW1wdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAwN1wiO1xufVxuLmdseXBoaWNvbi11c2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwMDhcIjtcbn1cbi5nbHlwaGljb24tZmlsbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDA5XCI7XG59XG4uZ2x5cGhpY29uLXRoLWxhcmdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwMTBcIjtcbn1cbi5nbHlwaGljb24tdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAxMVwiO1xufVxuLmdseXBoaWNvbi10aC1saXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwMTJcIjtcbn1cbi5nbHlwaGljb24tb2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAxM1wiO1xufVxuLmdseXBoaWNvbi1yZW1vdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAxNFwiO1xufVxuLmdseXBoaWNvbi16b29tLWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwMTVcIjtcbn1cbi5nbHlwaGljb24tem9vbS1vdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAxNlwiO1xufVxuLmdseXBoaWNvbi1vZmY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAxN1wiO1xufVxuLmdseXBoaWNvbi1zaWduYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAxOFwiO1xufVxuLmdseXBoaWNvbi1jb2c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAxOVwiO1xufVxuLmdseXBoaWNvbi10cmFzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDIwXCI7XG59XG4uZ2x5cGhpY29uLWhvbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAyMVwiO1xufVxuLmdseXBoaWNvbi1maWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwMjJcIjtcbn1cbi5nbHlwaGljb24tdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDIzXCI7XG59XG4uZ2x5cGhpY29uLXJvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAyNFwiO1xufVxuLmdseXBoaWNvbi1kb3dubG9hZC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAyNVwiO1xufVxuLmdseXBoaWNvbi1kb3dubG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDI2XCI7XG59XG4uZ2x5cGhpY29uLXVwbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDI3XCI7XG59XG4uZ2x5cGhpY29uLWluYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwMjhcIjtcbn1cbi5nbHlwaGljb24tcGxheS1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAyOVwiO1xufVxuLmdseXBoaWNvbi1yZXBlYXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAzMFwiO1xufVxuLmdseXBoaWNvbi1yZWZyZXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwMzFcIjtcbn1cbi5nbHlwaGljb24tbGlzdC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAzMlwiO1xufVxuLmdseXBoaWNvbi1sb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwMzNcIjtcbn1cbi5nbHlwaGljb24tZmxhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDM0XCI7XG59XG4uZ2x5cGhpY29uLWhlYWRwaG9uZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAzNVwiO1xufVxuLmdseXBoaWNvbi12b2x1bWUtb2ZmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwMzZcIjtcbn1cbi5nbHlwaGljb24tdm9sdW1lLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAzN1wiO1xufVxuLmdseXBoaWNvbi12b2x1bWUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAzOFwiO1xufVxuLmdseXBoaWNvbi1xcmNvZGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTAzOVwiO1xufVxuLmdseXBoaWNvbi1iYXJjb2RlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNDBcIjtcbn1cbi5nbHlwaGljb24tdGFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNDFcIjtcbn1cbi5nbHlwaGljb24tdGFnczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDQyXCI7XG59XG4uZ2x5cGhpY29uLWJvb2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA0M1wiO1xufVxuLmdseXBoaWNvbi1ib29rbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDQ0XCI7XG59XG4uZ2x5cGhpY29uLXByaW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNDVcIjtcbn1cbi5nbHlwaGljb24tY2FtZXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNDZcIjtcbn1cbi5nbHlwaGljb24tZm9udDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDQ3XCI7XG59XG4uZ2x5cGhpY29uLWJvbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA0OFwiO1xufVxuLmdseXBoaWNvbi1pdGFsaWM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA0OVwiO1xufVxuLmdseXBoaWNvbi10ZXh0LWhlaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDUwXCI7XG59XG4uZ2x5cGhpY29uLXRleHQtd2lkdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA1MVwiO1xufVxuLmdseXBoaWNvbi1hbGlnbi1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNTJcIjtcbn1cbi5nbHlwaGljb24tYWxpZ24tY2VudGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNTNcIjtcbn1cbi5nbHlwaGljb24tYWxpZ24tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA1NFwiO1xufVxuLmdseXBoaWNvbi1hbGlnbi1qdXN0aWZ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNTVcIjtcbn1cbi5nbHlwaGljb24tbGlzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDU2XCI7XG59XG4uZ2x5cGhpY29uLWluZGVudC1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNTdcIjtcbn1cbi5nbHlwaGljb24taW5kZW50LXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNThcIjtcbn1cbi5nbHlwaGljb24tZmFjZXRpbWUtdmlkZW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA1OVwiO1xufVxuLmdseXBoaWNvbi1waWN0dXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNjBcIjtcbn1cbi5nbHlwaGljb24tbWFwLW1hcmtlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDYyXCI7XG59XG4uZ2x5cGhpY29uLWFkanVzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDYzXCI7XG59XG4uZ2x5cGhpY29uLXRpbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA2NFwiO1xufVxuLmdseXBoaWNvbi1lZGl0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNjVcIjtcbn1cbi5nbHlwaGljb24tc2hhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA2NlwiO1xufVxuLmdseXBoaWNvbi1jaGVjazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDY3XCI7XG59XG4uZ2x5cGhpY29uLW1vdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA2OFwiO1xufVxuLmdseXBoaWNvbi1zdGVwLWJhY2t3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNjlcIjtcbn1cbi5nbHlwaGljb24tZmFzdC1iYWNrd2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDcwXCI7XG59XG4uZ2x5cGhpY29uLWJhY2t3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNzFcIjtcbn1cbi5nbHlwaGljb24tcGxheTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDcyXCI7XG59XG4uZ2x5cGhpY29uLXBhdXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwNzNcIjtcbn1cbi5nbHlwaGljb24tc3RvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDc0XCI7XG59XG4uZ2x5cGhpY29uLWZvcndhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA3NVwiO1xufVxuLmdseXBoaWNvbi1mYXN0LWZvcndhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA3NlwiO1xufVxuLmdseXBoaWNvbi1zdGVwLWZvcndhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA3N1wiO1xufVxuLmdseXBoaWNvbi1lamVjdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDc4XCI7XG59XG4uZ2x5cGhpY29uLWNoZXZyb24tbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDc5XCI7XG59XG4uZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA4MFwiO1xufVxuLmdseXBoaWNvbi1wbHVzLXNpZ246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA4MVwiO1xufVxuLmdseXBoaWNvbi1taW51cy1zaWduOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwODJcIjtcbn1cbi5nbHlwaGljb24tcmVtb3ZlLXNpZ246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA4M1wiO1xufVxuLmdseXBoaWNvbi1vay1zaWduOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwODRcIjtcbn1cbi5nbHlwaGljb24tcXVlc3Rpb24tc2lnbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDg1XCI7XG59XG4uZ2x5cGhpY29uLWluZm8tc2lnbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDg2XCI7XG59XG4uZ2x5cGhpY29uLXNjcmVlbnNob3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA4N1wiO1xufVxuLmdseXBoaWNvbi1yZW1vdmUtY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwODhcIjtcbn1cbi5nbHlwaGljb24tb2stY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwODlcIjtcbn1cbi5nbHlwaGljb24tYmFuLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDkwXCI7XG59XG4uZ2x5cGhpY29uLWFycm93LWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTA5MVwiO1xufVxuLmdseXBoaWNvbi1hcnJvdy1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDkyXCI7XG59XG4uZ2x5cGhpY29uLWFycm93LXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwOTNcIjtcbn1cbi5nbHlwaGljb24tYXJyb3ctZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDk0XCI7XG59XG4uZ2x5cGhpY29uLXNoYXJlLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMDk1XCI7XG59XG4uZ2x5cGhpY29uLXJlc2l6ZS1mdWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwOTZcIjtcbn1cbi5nbHlwaGljb24tcmVzaXplLXNtYWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUwOTdcIjtcbn1cbi5nbHlwaGljb24tZXhjbGFtYXRpb24tc2lnbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTAxXCI7XG59XG4uZ2x5cGhpY29uLWdpZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEwMlwiO1xufVxuLmdseXBoaWNvbi1sZWFmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMDNcIjtcbn1cbi5nbHlwaGljb24tZmlyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTA0XCI7XG59XG4uZ2x5cGhpY29uLWV5ZS1vcGVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMDVcIjtcbn1cbi5nbHlwaGljb24tZXllLWNsb3NlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMDZcIjtcbn1cbi5nbHlwaGljb24td2FybmluZy1zaWduOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMDdcIjtcbn1cbi5nbHlwaGljb24tcGxhbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEwOFwiO1xufVxuLmdseXBoaWNvbi1jYWxlbmRhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTA5XCI7XG59XG4uZ2x5cGhpY29uLXJhbmRvbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTEwXCI7XG59XG4uZ2x5cGhpY29uLWNvbW1lbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTExMVwiO1xufVxuLmdseXBoaWNvbi1tYWduZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTExMlwiO1xufVxuLmdseXBoaWNvbi1jaGV2cm9uLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMTNcIjtcbn1cbi5nbHlwaGljb24tY2hldnJvbi1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMTRcIjtcbn1cbi5nbHlwaGljb24tcmV0d2VldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTE1XCI7XG59XG4uZ2x5cGhpY29uLXNob3BwaW5nLWNhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTExNlwiO1xufVxuLmdseXBoaWNvbi1mb2xkZXItY2xvc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTExN1wiO1xufVxuLmdseXBoaWNvbi1mb2xkZXItb3BlbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTE4XCI7XG59XG4uZ2x5cGhpY29uLXJlc2l6ZS12ZXJ0aWNhbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTE5XCI7XG59XG4uZ2x5cGhpY29uLXJlc2l6ZS1ob3Jpem9udGFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMjBcIjtcbn1cbi5nbHlwaGljb24taGRkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMjFcIjtcbn1cbi5nbHlwaGljb24tYnVsbGhvcm46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEyMlwiO1xufVxuLmdseXBoaWNvbi1iZWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMjNcIjtcbn1cbi5nbHlwaGljb24tY2VydGlmaWNhdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEyNFwiO1xufVxuLmdseXBoaWNvbi10aHVtYnMtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEyNVwiO1xufVxuLmdseXBoaWNvbi10aHVtYnMtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTI2XCI7XG59XG4uZ2x5cGhpY29uLWhhbmQtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEyN1wiO1xufVxuLmdseXBoaWNvbi1oYW5kLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEyOFwiO1xufVxuLmdseXBoaWNvbi1oYW5kLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMjlcIjtcbn1cbi5nbHlwaGljb24taGFuZC1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMzBcIjtcbn1cbi5nbHlwaGljb24tY2lyY2xlLWFycm93LXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMzFcIjtcbn1cbi5nbHlwaGljb24tY2lyY2xlLWFycm93LWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEzMlwiO1xufVxuLmdseXBoaWNvbi1jaXJjbGUtYXJyb3ctdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEzM1wiO1xufVxuLmdseXBoaWNvbi1jaXJjbGUtYXJyb3ctZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTM0XCI7XG59XG4uZ2x5cGhpY29uLWdsb2JlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMzVcIjtcbn1cbi5nbHlwaGljb24td3JlbmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxMzZcIjtcbn1cbi5nbHlwaGljb24tdGFza3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEzN1wiO1xufVxuLmdseXBoaWNvbi1maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEzOFwiO1xufVxuLmdseXBoaWNvbi1icmllZmNhc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTEzOVwiO1xufVxuLmdseXBoaWNvbi1mdWxsc2NyZWVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNDBcIjtcbn1cbi5nbHlwaGljb24tZGFzaGJvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNDFcIjtcbn1cbi5nbHlwaGljb24tcGFwZXJjbGlwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNDJcIjtcbn1cbi5nbHlwaGljb24taGVhcnQtZW1wdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE0M1wiO1xufVxuLmdseXBoaWNvbi1saW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNDRcIjtcbn1cbi5nbHlwaGljb24tcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE0NVwiO1xufVxuLmdseXBoaWNvbi1wdXNocGluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNDZcIjtcbn1cbi5nbHlwaGljb24tdXNkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNDhcIjtcbn1cbi5nbHlwaGljb24tZ2JwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNDlcIjtcbn1cbi5nbHlwaGljb24tc29ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTUwXCI7XG59XG4uZ2x5cGhpY29uLXNvcnQtYnktYWxwaGFiZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE1MVwiO1xufVxuLmdseXBoaWNvbi1zb3J0LWJ5LWFscGhhYmV0LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTUyXCI7XG59XG4uZ2x5cGhpY29uLXNvcnQtYnktb3JkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE1M1wiO1xufVxuLmdseXBoaWNvbi1zb3J0LWJ5LW9yZGVyLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTU0XCI7XG59XG4uZ2x5cGhpY29uLXNvcnQtYnktYXR0cmlidXRlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTU1XCI7XG59XG4uZ2x5cGhpY29uLXNvcnQtYnktYXR0cmlidXRlcy1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE1NlwiO1xufVxuLmdseXBoaWNvbi11bmNoZWNrZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE1N1wiO1xufVxuLmdseXBoaWNvbi1leHBhbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE1OFwiO1xufVxuLmdseXBoaWNvbi1jb2xsYXBzZS1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNTlcIjtcbn1cbi5nbHlwaGljb24tY29sbGFwc2UtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE2MFwiO1xufVxuLmdseXBoaWNvbi1sb2ctaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE2MVwiO1xufVxuLmdseXBoaWNvbi1mbGFzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTYyXCI7XG59XG4uZ2x5cGhpY29uLWxvZy1vdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE2M1wiO1xufVxuLmdseXBoaWNvbi1uZXctd2luZG93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNjRcIjtcbn1cbi5nbHlwaGljb24tcmVjb3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNjVcIjtcbn1cbi5nbHlwaGljb24tc2F2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTY2XCI7XG59XG4uZ2x5cGhpY29uLW9wZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE2N1wiO1xufVxuLmdseXBoaWNvbi1zYXZlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTY4XCI7XG59XG4uZ2x5cGhpY29uLWltcG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTY5XCI7XG59XG4uZ2x5cGhpY29uLWV4cG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTcwXCI7XG59XG4uZ2x5cGhpY29uLXNlbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE3MVwiO1xufVxuLmdseXBoaWNvbi1mbG9wcHktZGlzazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTcyXCI7XG59XG4uZ2x5cGhpY29uLWZsb3BweS1zYXZlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTczXCI7XG59XG4uZ2x5cGhpY29uLWZsb3BweS1yZW1vdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE3NFwiO1xufVxuLmdseXBoaWNvbi1mbG9wcHktc2F2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTc1XCI7XG59XG4uZ2x5cGhpY29uLWZsb3BweS1vcGVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxNzZcIjtcbn1cbi5nbHlwaGljb24tY3JlZGl0LWNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE3N1wiO1xufVxuLmdseXBoaWNvbi10cmFuc2ZlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTc4XCI7XG59XG4uZ2x5cGhpY29uLWN1dGxlcnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE3OVwiO1xufVxuLmdseXBoaWNvbi1oZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE4MFwiO1xufVxuLmdseXBoaWNvbi1jb21wcmVzc2VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxODFcIjtcbn1cbi5nbHlwaGljb24tZWFycGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE4MlwiO1xufVxuLmdseXBoaWNvbi1waG9uZS1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE4M1wiO1xufVxuLmdseXBoaWNvbi10b3dlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTg0XCI7XG59XG4uZ2x5cGhpY29uLXN0YXRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxODVcIjtcbn1cbi5nbHlwaGljb24tc2QtdmlkZW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE4NlwiO1xufVxuLmdseXBoaWNvbi1oZC12aWRlbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTg3XCI7XG59XG4uZ2x5cGhpY29uLXN1YnRpdGxlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTg4XCI7XG59XG4uZ2x5cGhpY29uLXNvdW5kLXN0ZXJlbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTg5XCI7XG59XG4uZ2x5cGhpY29uLXNvdW5kLWRvbGJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxOTBcIjtcbn1cbi5nbHlwaGljb24tc291bmQtNS0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxOTFcIjtcbn1cbi5nbHlwaGljb24tc291bmQtNi0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxOTJcIjtcbn1cbi5nbHlwaGljb24tc291bmQtNy0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxOTNcIjtcbn1cbi5nbHlwaGljb24tY29weXJpZ2h0LW1hcms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTE5NFwiO1xufVxuLmdseXBoaWNvbi1yZWdpc3RyYXRpb24tbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlMTk1XCI7XG59XG4uZ2x5cGhpY29uLWNsb3VkLWRvd25sb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxOTdcIjtcbn1cbi5nbHlwaGljb24tY2xvdWQtdXBsb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxOThcIjtcbn1cbi5nbHlwaGljb24tdHJlZS1jb25pZmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGUxOTlcIjtcbn1cbi5nbHlwaGljb24tdHJlZS1kZWNpZHVvdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTIwMFwiO1xufVxuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcblxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5pbnB1dCxcbmJ1dHRvbixcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5hIHtcbiAgY29sb3I6ICM0MjhiY2E7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgY29sb3I6ICMyYTY0OTY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5pbWctcmVzcG9uc2l2ZSxcbi50aHVtYm5haWwgPiBpbWcsXG4udGh1bWJuYWlsIGEgPiBpbWcsXG4uY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSA+IGltZyxcbi5jYXJvdXNlbC1pbm5lciA+IC5pdGVtID4gYSA+IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJSBcXFxcOTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uaW1nLXJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uaW1nLXRodW1ibmFpbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCUgXFxcXDk7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uaW1nLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmhyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cbi5zci1vbmx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDA7XG59XG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLFxuLnNyLW9ubHktZm9jdXNhYmxlOmZvY3VzIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgY2xpcDogYXV0bztcbn1cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbi5oMSxcbi5oMixcbi5oMyxcbi5oNCxcbi5oNSxcbi5oNiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbmgxIHNtYWxsLFxuaDIgc21hbGwsXG5oMyBzbWFsbCxcbmg0IHNtYWxsLFxuaDUgc21hbGwsXG5oNiBzbWFsbCxcbi5oMSBzbWFsbCxcbi5oMiBzbWFsbCxcbi5oMyBzbWFsbCxcbi5oNCBzbWFsbCxcbi5oNSBzbWFsbCxcbi5oNiBzbWFsbCxcbmgxIC5zbWFsbCxcbmgyIC5zbWFsbCxcbmgzIC5zbWFsbCxcbmg0IC5zbWFsbCxcbmg1IC5zbWFsbCxcbmg2IC5zbWFsbCxcbi5oMSAuc21hbGwsXG4uaDIgLnNtYWxsLFxuLmgzIC5zbWFsbCxcbi5oNCAuc21hbGwsXG4uaDUgLnNtYWxsLFxuLmg2IC5zbWFsbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzc3Nztcbn1cbmgxLFxuLmgxLFxuaDIsXG4uaDIsXG5oMyxcbi5oMyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5oMSBzbWFsbCxcbi5oMSBzbWFsbCxcbmgyIHNtYWxsLFxuLmgyIHNtYWxsLFxuaDMgc21hbGwsXG4uaDMgc21hbGwsXG5oMSAuc21hbGwsXG4uaDEgLnNtYWxsLFxuaDIgLnNtYWxsLFxuLmgyIC5zbWFsbCxcbmgzIC5zbWFsbCxcbi5oMyAuc21hbGwge1xuICBmb250LXNpemU6IDY1JTtcbn1cbmg0LFxuLmg0LFxuaDUsXG4uaDUsXG5oNixcbi5oNiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5oNCBzbWFsbCxcbi5oNCBzbWFsbCxcbmg1IHNtYWxsLFxuLmg1IHNtYWxsLFxuaDYgc21hbGwsXG4uaDYgc21hbGwsXG5oNCAuc21hbGwsXG4uaDQgLnNtYWxsLFxuaDUgLnNtYWxsLFxuLmg1IC5zbWFsbCxcbmg2IC5zbWFsbCxcbi5oNiAuc21hbGwge1xuICBmb250LXNpemU6IDc1JTtcbn1cbmgxLFxuLmgxIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuaDIsXG4uaDIge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5oMyxcbi5oMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmg0LFxuLmg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaDUsXG4uaDUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5oNixcbi5oNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbnAge1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuLmxlYWQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmxlYWQge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgfVxufVxuc21hbGwsXG4uc21hbGwge1xuICBmb250LXNpemU6IDg1JTtcbn1cbmNpdGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5tYXJrLFxuLm1hcmsge1xuICBwYWRkaW5nOiAuMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xufVxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtanVzdGlmeSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4udGV4dC1ub3dyYXAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnRleHQtbG93ZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi50ZXh0LXVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4udGV4dC1jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4udGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAjNzc3O1xufVxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjNDI4YmNhO1xufVxuYS50ZXh0LXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogIzMwNzFhOTtcbn1cbi50ZXh0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzNjNzYzZDtcbn1cbmEudGV4dC1zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6ICMyYjU0MmM7XG59XG4udGV4dC1pbmZvIHtcbiAgY29sb3I6ICMzMTcwOGY7XG59XG5hLnRleHQtaW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjMjQ1MjY5O1xufVxuLnRleHQtd2FybmluZyB7XG4gIGNvbG9yOiAjOGE2ZDNiO1xufVxuYS50ZXh0LXdhcm5pbmc6aG92ZXIge1xuICBjb2xvcjogIzY2NTEyYztcbn1cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjYTk0NDQyO1xufVxuYS50ZXh0LWRhbmdlcjpob3ZlciB7XG4gIGNvbG9yOiAjODQzNTM0O1xufVxuLmJnLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcbn1cbmEuYmctcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDcxYTk7XG59XG4uYmctc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XG59XG5hLmJnLXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFlMmIzO1xufVxuLmJnLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xufVxuYS5iZy1pbmZvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmZDllZTtcbn1cbi5iZy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcbn1cbmEuYmctd2FybmluZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2VjYjU7XG59XG4uYmctZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbn1cbmEuYmctZGFuZ2VyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0YjliOTtcbn1cbi5wYWdlLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gIG1hcmdpbjogNDBweCAwIDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxudWwsXG5vbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG51bCB1bCxcbm9sIHVsLFxudWwgb2wsXG5vbCBvbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubGlzdC11bnN0eWxlZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5saXN0LWlubGluZSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC1pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbmRsIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmR0LFxuZGQge1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mztcbn1cbmR0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5kZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kbC1ob3Jpem9udGFsIGR0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGVhcjogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC5kbC1ob3Jpem9udGFsIGRkIHtcbiAgICBtYXJnaW4tbGVmdDogMTgwcHg7XG4gIH1cbn1cbmFiYnJbdGl0bGVdLFxuYWJicltkYXRhLW9yaWdpbmFsLXRpdGxlXSB7XG4gIGN1cnNvcjogaGVscDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjNzc3O1xufVxuLmluaXRpYWxpc20ge1xuICBmb250LXNpemU6IDkwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmJsb2NrcXVvdGUge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTcuNXB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlZWU7XG59XG5ibG9ja3F1b3RlIHA6bGFzdC1jaGlsZCxcbmJsb2NrcXVvdGUgdWw6bGFzdC1jaGlsZCxcbmJsb2NrcXVvdGUgb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5ibG9ja3F1b3RlIGZvb3RlcixcbmJsb2NrcXVvdGUgc21hbGwsXG5ibG9ja3F1b3RlIC5zbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDgwJTtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjNzc3O1xufVxuYmxvY2txdW90ZSBmb290ZXI6YmVmb3JlLFxuYmxvY2txdW90ZSBzbWFsbDpiZWZvcmUsXG5ibG9ja3F1b3RlIC5zbWFsbDpiZWZvcmUge1xuICBjb250ZW50OiAnXFxcXDIwMTQgXFxcXDAwQTAnO1xufVxuLmJsb2NrcXVvdGUtcmV2ZXJzZSxcbmJsb2NrcXVvdGUucHVsbC1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuLmJsb2NrcXVvdGUtcmV2ZXJzZSBmb290ZXI6YmVmb3JlLFxuYmxvY2txdW90ZS5wdWxsLXJpZ2h0IGZvb3RlcjpiZWZvcmUsXG4uYmxvY2txdW90ZS1yZXZlcnNlIHNtYWxsOmJlZm9yZSxcbmJsb2NrcXVvdGUucHVsbC1yaWdodCBzbWFsbDpiZWZvcmUsXG4uYmxvY2txdW90ZS1yZXZlcnNlIC5zbWFsbDpiZWZvcmUsXG5ibG9ja3F1b3RlLnB1bGwtcmlnaHQgLnNtYWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xufVxuLmJsb2NrcXVvdGUtcmV2ZXJzZSBmb290ZXI6YWZ0ZXIsXG5ibG9ja3F1b3RlLnB1bGwtcmlnaHQgZm9vdGVyOmFmdGVyLFxuLmJsb2NrcXVvdGUtcmV2ZXJzZSBzbWFsbDphZnRlcixcbmJsb2NrcXVvdGUucHVsbC1yaWdodCBzbWFsbDphZnRlcixcbi5ibG9ja3F1b3RlLXJldmVyc2UgLnNtYWxsOmFmdGVyLFxuYmxvY2txdW90ZS5wdWxsLXJpZ2h0IC5zbWFsbDphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXFxcMDBBMCBcXFxcMjAxNCc7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xufVxuYWRkcmVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG59XG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5jb2RlIHtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjYzcyNTRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmMmY0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5rYmQge1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xufVxua2JkIGtiZCB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5wcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOS41cHg7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjMzMzO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxucHJlIGNvZGUge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnByZS1zY3JvbGxhYmxlIHtcbiAgbWF4LWhlaWdodDogMzQwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk3MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMTcwcHg7XG4gIH1cbn1cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLmNvbC14cy0xLCAuY29sLXNtLTEsIC5jb2wtbWQtMSwgLmNvbC1sZy0xLCAuY29sLXhzLTIsIC5jb2wtc20tMiwgLmNvbC1tZC0yLCAuY29sLWxnLTIsIC5jb2wteHMtMywgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wtbGctMywgLmNvbC14cy00LCAuY29sLXNtLTQsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXhzLTUsIC5jb2wtc20tNSwgLmNvbC1tZC01LCAuY29sLWxnLTUsIC5jb2wteHMtNiwgLmNvbC1zbS02LCAuY29sLW1kLTYsIC5jb2wtbGctNiwgLmNvbC14cy03LCAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC1sZy03LCAuY29sLXhzLTgsIC5jb2wtc20tOCwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wteHMtOSwgLmNvbC1zbS05LCAuY29sLW1kLTksIC5jb2wtbGctOSwgLmNvbC14cy0xMCwgLmNvbC1zbS0xMCwgLmNvbC1tZC0xMCwgLmNvbC1sZy0xMCwgLmNvbC14cy0xMSwgLmNvbC1zbS0xMSwgLmNvbC1tZC0xMSwgLmNvbC1sZy0xMSwgLmNvbC14cy0xMiwgLmNvbC1zbS0xMiwgLmNvbC1tZC0xMiwgLmNvbC1sZy0xMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uY29sLXhzLTEsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05LCAuY29sLXhzLTEwLCAuY29sLXhzLTExLCAuY29sLXhzLTEyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uY29sLXhzLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29sLXhzLTExIHtcbiAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtMTAge1xuICB3aWR0aDogODMuMzMzMzMzMzMlO1xufVxuLmNvbC14cy05IHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5jb2wteHMtOCB7XG4gIHdpZHRoOiA2Ni42NjY2NjY2NyU7XG59XG4uY29sLXhzLTcge1xuICB3aWR0aDogNTguMzMzMzMzMzMlO1xufVxuLmNvbC14cy02IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5jb2wteHMtNSB7XG4gIHdpZHRoOiA0MS42NjY2NjY2NyU7XG59XG4uY29sLXhzLTQge1xuICB3aWR0aDogMzMuMzMzMzMzMzMlO1xufVxuLmNvbC14cy0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5jb2wteHMtMiB7XG4gIHdpZHRoOiAxNi42NjY2NjY2NyU7XG59XG4uY29sLXhzLTEge1xuICB3aWR0aDogOC4zMzMzMzMzMyU7XG59XG4uY29sLXhzLXB1bGwtMTIge1xuICByaWdodDogMTAwJTtcbn1cbi5jb2wteHMtcHVsbC0xMSB7XG4gIHJpZ2h0OiA5MS42NjY2NjY2NyU7XG59XG4uY29sLXhzLXB1bGwtMTAge1xuICByaWdodDogODMuMzMzMzMzMzMlO1xufVxuLmNvbC14cy1wdWxsLTkge1xuICByaWdodDogNzUlO1xufVxuLmNvbC14cy1wdWxsLTgge1xuICByaWdodDogNjYuNjY2NjY2NjclO1xufVxuLmNvbC14cy1wdWxsLTcge1xuICByaWdodDogNTguMzMzMzMzMzMlO1xufVxuLmNvbC14cy1wdWxsLTYge1xuICByaWdodDogNTAlO1xufVxuLmNvbC14cy1wdWxsLTUge1xuICByaWdodDogNDEuNjY2NjY2NjclO1xufVxuLmNvbC14cy1wdWxsLTQge1xuICByaWdodDogMzMuMzMzMzMzMzMlO1xufVxuLmNvbC14cy1wdWxsLTMge1xuICByaWdodDogMjUlO1xufVxuLmNvbC14cy1wdWxsLTIge1xuICByaWdodDogMTYuNjY2NjY2NjclO1xufVxuLmNvbC14cy1wdWxsLTEge1xuICByaWdodDogOC4zMzMzMzMzMyU7XG59XG4uY29sLXhzLXB1bGwtMCB7XG4gIHJpZ2h0OiBhdXRvO1xufVxuLmNvbC14cy1wdXNoLTEyIHtcbiAgbGVmdDogMTAwJTtcbn1cbi5jb2wteHMtcHVzaC0xMSB7XG4gIGxlZnQ6IDkxLjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtcHVzaC0xMCB7XG4gIGxlZnQ6IDgzLjMzMzMzMzMzJTtcbn1cbi5jb2wteHMtcHVzaC05IHtcbiAgbGVmdDogNzUlO1xufVxuLmNvbC14cy1wdXNoLTgge1xuICBsZWZ0OiA2Ni42NjY2NjY2NyU7XG59XG4uY29sLXhzLXB1c2gtNyB7XG4gIGxlZnQ6IDU4LjMzMzMzMzMzJTtcbn1cbi5jb2wteHMtcHVzaC02IHtcbiAgbGVmdDogNTAlO1xufVxuLmNvbC14cy1wdXNoLTUge1xuICBsZWZ0OiA0MS42NjY2NjY2NyU7XG59XG4uY29sLXhzLXB1c2gtNCB7XG4gIGxlZnQ6IDMzLjMzMzMzMzMzJTtcbn1cbi5jb2wteHMtcHVzaC0zIHtcbiAgbGVmdDogMjUlO1xufVxuLmNvbC14cy1wdXNoLTIge1xuICBsZWZ0OiAxNi42NjY2NjY2NyU7XG59XG4uY29sLXhzLXB1c2gtMSB7XG4gIGxlZnQ6IDguMzMzMzMzMzMlO1xufVxuLmNvbC14cy1wdXNoLTAge1xuICBsZWZ0OiBhdXRvO1xufVxuLmNvbC14cy1vZmZzZXQtMTIge1xuICBtYXJnaW4tbGVmdDogMTAwJTtcbn1cbi5jb2wteHMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcbn1cbi5jb2wteHMtb2Zmc2V0LTkge1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuLmNvbC14cy1vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XG59XG4uY29sLXhzLW9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcbn1cbi5jb2wteHMtb2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuLmNvbC14cy1vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XG59XG4uY29sLXhzLW9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcbn1cbi5jb2wteHMtb2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuLmNvbC14cy1vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XG59XG4uY29sLXhzLW9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xufVxuLmNvbC14cy1vZmZzZXQtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtc20tMSwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5jb2wtc20tMTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb2wtc20tMTEge1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS0xMCB7XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLTkge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNvbC1zbS04IHtcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tNyB7XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLTYge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbC1zbS01IHtcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tNCB7XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLTMge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLmNvbC1zbS0yIHtcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tMSB7XG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tcHVsbC0xMiB7XG4gICAgcmlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNvbC1zbS1wdWxsLTExIHtcbiAgICByaWdodDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tcHVsbC0xMCB7XG4gICAgcmlnaHQ6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLXB1bGwtOSB7XG4gICAgcmlnaHQ6IDc1JTtcbiAgfVxuICAuY29sLXNtLXB1bGwtOCB7XG4gICAgcmlnaHQ6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLXB1bGwtNyB7XG4gICAgcmlnaHQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLXB1bGwtNiB7XG4gICAgcmlnaHQ6IDUwJTtcbiAgfVxuICAuY29sLXNtLXB1bGwtNSB7XG4gICAgcmlnaHQ6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLXB1bGwtNCB7XG4gICAgcmlnaHQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLXB1bGwtMyB7XG4gICAgcmlnaHQ6IDI1JTtcbiAgfVxuICAuY29sLXNtLXB1bGwtMiB7XG4gICAgcmlnaHQ6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLXB1bGwtMSB7XG4gICAgcmlnaHQ6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tcHVsbC0wIHtcbiAgICByaWdodDogYXV0bztcbiAgfVxuICAuY29sLXNtLXB1c2gtMTIge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbiAgLmNvbC1zbS1wdXNoLTExIHtcbiAgICBsZWZ0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS1wdXNoLTEwIHtcbiAgICBsZWZ0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS1wdXNoLTkge1xuICAgIGxlZnQ6IDc1JTtcbiAgfVxuICAuY29sLXNtLXB1c2gtOCB7XG4gICAgbGVmdDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tcHVzaC03IHtcbiAgICBsZWZ0OiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS1wdXNoLTYge1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuICAuY29sLXNtLXB1c2gtNSB7XG4gICAgbGVmdDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tcHVzaC00IHtcbiAgICBsZWZ0OiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS1wdXNoLTMge1xuICAgIGxlZnQ6IDI1JTtcbiAgfVxuICAuY29sLXNtLXB1c2gtMiB7XG4gICAgbGVmdDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tcHVzaC0xIHtcbiAgICBsZWZ0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLXB1c2gtMCB7XG4gICAgbGVmdDogYXV0bztcbiAgfVxuICAuY29sLXNtLW9mZnNldC0xMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gIH1cbiAgLmNvbC1zbS1vZmZzZXQtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS1vZmZzZXQtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS1vZmZzZXQtOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuICAuY29sLXNtLW9mZnNldC04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tb2Zmc2V0LTcge1xuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS1vZmZzZXQtNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuICAuY29sLXNtLW9mZnNldC01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tb2Zmc2V0LTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS1vZmZzZXQtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICAuY29sLXNtLW9mZnNldC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tb2Zmc2V0LTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLW9mZnNldC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb2wtbWQtMSwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5jb2wtbWQtMTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb2wtbWQtMTEge1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC0xMCB7XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLTkge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNvbC1tZC04IHtcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtNyB7XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLTYge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbC1tZC01IHtcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtNCB7XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLTMge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLmNvbC1tZC0yIHtcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtMSB7XG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtcHVsbC0xMiB7XG4gICAgcmlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNvbC1tZC1wdWxsLTExIHtcbiAgICByaWdodDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtcHVsbC0xMCB7XG4gICAgcmlnaHQ6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLXB1bGwtOSB7XG4gICAgcmlnaHQ6IDc1JTtcbiAgfVxuICAuY29sLW1kLXB1bGwtOCB7XG4gICAgcmlnaHQ6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLW1kLXB1bGwtNyB7XG4gICAgcmlnaHQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLXB1bGwtNiB7XG4gICAgcmlnaHQ6IDUwJTtcbiAgfVxuICAuY29sLW1kLXB1bGwtNSB7XG4gICAgcmlnaHQ6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLW1kLXB1bGwtNCB7XG4gICAgcmlnaHQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLXB1bGwtMyB7XG4gICAgcmlnaHQ6IDI1JTtcbiAgfVxuICAuY29sLW1kLXB1bGwtMiB7XG4gICAgcmlnaHQ6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLW1kLXB1bGwtMSB7XG4gICAgcmlnaHQ6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtcHVsbC0wIHtcbiAgICByaWdodDogYXV0bztcbiAgfVxuICAuY29sLW1kLXB1c2gtMTIge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbiAgLmNvbC1tZC1wdXNoLTExIHtcbiAgICBsZWZ0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC1wdXNoLTEwIHtcbiAgICBsZWZ0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC1wdXNoLTkge1xuICAgIGxlZnQ6IDc1JTtcbiAgfVxuICAuY29sLW1kLXB1c2gtOCB7XG4gICAgbGVmdDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtcHVzaC03IHtcbiAgICBsZWZ0OiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC1wdXNoLTYge1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuICAuY29sLW1kLXB1c2gtNSB7XG4gICAgbGVmdDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtcHVzaC00IHtcbiAgICBsZWZ0OiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC1wdXNoLTMge1xuICAgIGxlZnQ6IDI1JTtcbiAgfVxuICAuY29sLW1kLXB1c2gtMiB7XG4gICAgbGVmdDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtcHVzaC0xIHtcbiAgICBsZWZ0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLXB1c2gtMCB7XG4gICAgbGVmdDogYXV0bztcbiAgfVxuICAuY29sLW1kLW9mZnNldC0xMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gIH1cbiAgLmNvbC1tZC1vZmZzZXQtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC1vZmZzZXQtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC1vZmZzZXQtOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuICAuY29sLW1kLW9mZnNldC04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtb2Zmc2V0LTcge1xuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC1vZmZzZXQtNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuICAuY29sLW1kLW9mZnNldC01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtb2Zmc2V0LTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC1vZmZzZXQtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICAuY29sLW1kLW9mZnNldC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtb2Zmc2V0LTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLW9mZnNldC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29sLWxnLTEsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuY29sLWxnLTEyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29sLWxnLTExIHtcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctMTAge1xuICAgIHdpZHRoOiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy05IHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jb2wtbGctOCB7XG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLTcge1xuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy02IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb2wtbGctNSB7XG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLTQge1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy0zIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5jb2wtbGctMiB7XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLTEge1xuICAgIHdpZHRoOiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLXB1bGwtMTIge1xuICAgIHJpZ2h0OiAxMDAlO1xuICB9XG4gIC5jb2wtbGctcHVsbC0xMSB7XG4gICAgcmlnaHQ6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLXB1bGwtMTAge1xuICAgIHJpZ2h0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1wdWxsLTkge1xuICAgIHJpZ2h0OiA3NSU7XG4gIH1cbiAgLmNvbC1sZy1wdWxsLTgge1xuICAgIHJpZ2h0OiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1sZy1wdWxsLTcge1xuICAgIHJpZ2h0OiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1wdWxsLTYge1xuICAgIHJpZ2h0OiA1MCU7XG4gIH1cbiAgLmNvbC1sZy1wdWxsLTUge1xuICAgIHJpZ2h0OiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1sZy1wdWxsLTQge1xuICAgIHJpZ2h0OiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1wdWxsLTMge1xuICAgIHJpZ2h0OiAyNSU7XG4gIH1cbiAgLmNvbC1sZy1wdWxsLTIge1xuICAgIHJpZ2h0OiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1sZy1wdWxsLTEge1xuICAgIHJpZ2h0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLXB1bGwtMCB7XG4gICAgcmlnaHQ6IGF1dG87XG4gIH1cbiAgLmNvbC1sZy1wdXNoLTEyIHtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG4gIC5jb2wtbGctcHVzaC0xMSB7XG4gICAgbGVmdDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctcHVzaC0xMCB7XG4gICAgbGVmdDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctcHVzaC05IHtcbiAgICBsZWZ0OiA3NSU7XG4gIH1cbiAgLmNvbC1sZy1wdXNoLTgge1xuICAgIGxlZnQ6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLXB1c2gtNyB7XG4gICAgbGVmdDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctcHVzaC02IHtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cbiAgLmNvbC1sZy1wdXNoLTUge1xuICAgIGxlZnQ6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLXB1c2gtNCB7XG4gICAgbGVmdDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctcHVzaC0zIHtcbiAgICBsZWZ0OiAyNSU7XG4gIH1cbiAgLmNvbC1sZy1wdXNoLTIge1xuICAgIGxlZnQ6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLXB1c2gtMSB7XG4gICAgbGVmdDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1wdXNoLTAge1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbiAgLmNvbC1sZy1vZmZzZXQtMTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICB9XG4gIC5jb2wtbGctb2Zmc2V0LTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctb2Zmc2V0LTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctb2Zmc2V0LTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIH1cbiAgLmNvbC1sZy1vZmZzZXQtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLW9mZnNldC03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctb2Zmc2V0LTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cbiAgLmNvbC1sZy1vZmZzZXQtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLW9mZnNldC00IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctb2Zmc2V0LTMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbiAgLmNvbC1sZy1vZmZzZXQtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLW9mZnNldC0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1vZmZzZXQtMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG50aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLFxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLFxuLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLFxuLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRkLFxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLFxuLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRkIHtcbiAgcGFkZGluZzogOHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbn1cbi50YWJsZSA+IGNhcHRpb24gKyB0aGVhZCA+IHRyOmZpcnN0LWNoaWxkID4gdGgsXG4udGFibGUgPiBjb2xncm91cCArIHRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCxcbi50YWJsZSA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCxcbi50YWJsZSA+IGNhcHRpb24gKyB0aGVhZCA+IHRyOmZpcnN0LWNoaWxkID4gdGQsXG4udGFibGUgPiBjb2xncm91cCArIHRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCxcbi50YWJsZSA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCB7XG4gIGJvcmRlci10b3A6IDA7XG59XG4udGFibGUgPiB0Ym9keSArIHRib2R5IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGQ7XG59XG4udGFibGUgLnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi50YWJsZS1jb25kZW5zZWQgPiB0aGVhZCA+IHRyID4gdGgsXG4udGFibGUtY29uZGVuc2VkID4gdGJvZHkgPiB0ciA+IHRoLFxuLnRhYmxlLWNvbmRlbnNlZCA+IHRmb290ID4gdHIgPiB0aCxcbi50YWJsZS1jb25kZW5zZWQgPiB0aGVhZCA+IHRyID4gdGQsXG4udGFibGUtY29uZGVuc2VkID4gdGJvZHkgPiB0ciA+IHRkLFxuLnRhYmxlLWNvbmRlbnNlZCA+IHRmb290ID4gdHIgPiB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGgsXG4udGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGgsXG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQsXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsXG4udGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoLFxuLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xufVxuLnRhYmxlLXN0cmlwZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGQsXG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID4gdGQsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxudGFibGUgY29sW2NsYXNzKj1cImNvbC1cIl0ge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiB0YWJsZS1jb2x1bW47XG4gIGZsb2F0OiBub25lO1xufVxudGFibGUgdGRbY2xhc3MqPVwiY29sLVwiXSxcbnRhYmxlIHRoW2NsYXNzKj1cImNvbC1cIl0ge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBmbG9hdDogbm9uZTtcbn1cbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0ZC5hY3RpdmUsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQuYWN0aXZlLFxuLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRkLmFjdGl2ZSxcbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aC5hY3RpdmUsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGguYWN0aXZlLFxuLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLmFjdGl2ZSxcbi50YWJsZSA+IHRoZWFkID4gdHIuYWN0aXZlID4gdGQsXG4udGFibGUgPiB0Ym9keSA+IHRyLmFjdGl2ZSA+IHRkLFxuLnRhYmxlID4gdGZvb3QgPiB0ci5hY3RpdmUgPiB0ZCxcbi50YWJsZSA+IHRoZWFkID4gdHIuYWN0aXZlID4gdGgsXG4udGFibGUgPiB0Ym9keSA+IHRyLmFjdGl2ZSA+IHRoLFxuLnRhYmxlID4gdGZvb3QgPiB0ci5hY3RpdmUgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyID4gdGQuYWN0aXZlOmhvdmVyLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ciA+IHRoLmFjdGl2ZTpob3Zlcixcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIuYWN0aXZlOmhvdmVyID4gdGQsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID4gLmFjdGl2ZSxcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIuYWN0aXZlOmhvdmVyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRkLnN1Y2Nlc3MsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQuc3VjY2Vzcyxcbi50YWJsZSA+IHRmb290ID4gdHIgPiB0ZC5zdWNjZXNzLFxuLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLnN1Y2Nlc3MsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGguc3VjY2Vzcyxcbi50YWJsZSA+IHRmb290ID4gdHIgPiB0aC5zdWNjZXNzLFxuLnRhYmxlID4gdGhlYWQgPiB0ci5zdWNjZXNzID4gdGQsXG4udGFibGUgPiB0Ym9keSA+IHRyLnN1Y2Nlc3MgPiB0ZCxcbi50YWJsZSA+IHRmb290ID4gdHIuc3VjY2VzcyA+IHRkLFxuLnRhYmxlID4gdGhlYWQgPiB0ci5zdWNjZXNzID4gdGgsXG4udGFibGUgPiB0Ym9keSA+IHRyLnN1Y2Nlc3MgPiB0aCxcbi50YWJsZSA+IHRmb290ID4gdHIuc3VjY2VzcyA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbn1cbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIgPiB0ZC5zdWNjZXNzOmhvdmVyLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ciA+IHRoLnN1Y2Nlc3M6aG92ZXIsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyLnN1Y2Nlc3M6aG92ZXIgPiB0ZCxcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHI6aG92ZXIgPiAuc3VjY2Vzcyxcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIuc3VjY2Vzczpob3ZlciA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwZTljNjtcbn1cbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0ZC5pbmZvLFxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLmluZm8sXG4udGFibGUgPiB0Zm9vdCA+IHRyID4gdGQuaW5mbyxcbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aC5pbmZvLFxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLmluZm8sXG4udGFibGUgPiB0Zm9vdCA+IHRyID4gdGguaW5mbyxcbi50YWJsZSA+IHRoZWFkID4gdHIuaW5mbyA+IHRkLFxuLnRhYmxlID4gdGJvZHkgPiB0ci5pbmZvID4gdGQsXG4udGFibGUgPiB0Zm9vdCA+IHRyLmluZm8gPiB0ZCxcbi50YWJsZSA+IHRoZWFkID4gdHIuaW5mbyA+IHRoLFxuLnRhYmxlID4gdGJvZHkgPiB0ci5pbmZvID4gdGgsXG4udGFibGUgPiB0Zm9vdCA+IHRyLmluZm8gPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG59XG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyID4gdGQuaW5mbzpob3Zlcixcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIgPiB0aC5pbmZvOmhvdmVyLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ci5pbmZvOmhvdmVyID4gdGQsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID4gLmluZm8sXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyLmluZm86aG92ZXIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGUzZjM7XG59XG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGQud2FybmluZyxcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC53YXJuaW5nLFxuLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRkLndhcm5pbmcsXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGgud2FybmluZyxcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0aC53YXJuaW5nLFxuLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLndhcm5pbmcsXG4udGFibGUgPiB0aGVhZCA+IHRyLndhcm5pbmcgPiB0ZCxcbi50YWJsZSA+IHRib2R5ID4gdHIud2FybmluZyA+IHRkLFxuLnRhYmxlID4gdGZvb3QgPiB0ci53YXJuaW5nID4gdGQsXG4udGFibGUgPiB0aGVhZCA+IHRyLndhcm5pbmcgPiB0aCxcbi50YWJsZSA+IHRib2R5ID4gdHIud2FybmluZyA+IHRoLFxuLnRhYmxlID4gdGZvb3QgPiB0ci53YXJuaW5nID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xufVxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ciA+IHRkLndhcm5pbmc6aG92ZXIsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyID4gdGgud2FybmluZzpob3Zlcixcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIud2FybmluZzpob3ZlciA+IHRkLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0cjpob3ZlciA+IC53YXJuaW5nLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ci53YXJuaW5nOmhvdmVyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmMmNjO1xufVxuLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRkLmRhbmdlcixcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5kYW5nZXIsXG4udGFibGUgPiB0Zm9vdCA+IHRyID4gdGQuZGFuZ2VyLFxuLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLmRhbmdlcixcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0aC5kYW5nZXIsXG4udGFibGUgPiB0Zm9vdCA+IHRyID4gdGguZGFuZ2VyLFxuLnRhYmxlID4gdGhlYWQgPiB0ci5kYW5nZXIgPiB0ZCxcbi50YWJsZSA+IHRib2R5ID4gdHIuZGFuZ2VyID4gdGQsXG4udGFibGUgPiB0Zm9vdCA+IHRyLmRhbmdlciA+IHRkLFxuLnRhYmxlID4gdGhlYWQgPiB0ci5kYW5nZXIgPiB0aCxcbi50YWJsZSA+IHRib2R5ID4gdHIuZGFuZ2VyID4gdGgsXG4udGFibGUgPiB0Zm9vdCA+IHRyLmRhbmdlciA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbn1cbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIgPiB0ZC5kYW5nZXI6aG92ZXIsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyID4gdGguZGFuZ2VyOmhvdmVyLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ci5kYW5nZXI6aG92ZXIgPiB0ZCxcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHI6aG92ZXIgPiAuZGFuZ2VyLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ci5kYW5nZXI6aG92ZXIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmNjY2M7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSA+IHRoZWFkID4gdHIgPiB0aCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUgPiB0Ym9keSA+IHRyID4gdGgsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLFxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUgPiB0Ym9keSA+IHRyID4gdGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGg6Zmlyc3QtY2hpbGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRoOmZpcnN0LWNoaWxkLFxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkOmZpcnN0LWNoaWxkLFxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gIH1cbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGg6bGFzdC1jaGlsZCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGg6bGFzdC1jaGlsZCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGg6bGFzdC1jaGlsZCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQ6bGFzdC1jaGlsZCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGgsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0cjpsYXN0LWNoaWxkID4gdGgsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0cjpsYXN0LWNoaWxkID4gdGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gIH1cbn1cbmZpZWxkc2V0IHtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbn1cbmxlZ2VuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6ICMzMzM7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIG1hcmdpbi10b3A6IDFweCBcXFxcOTtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5zZWxlY3RbbXVsdGlwbGVdLFxuc2VsZWN0W3NpemVdIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW5wdXRbdHlwZT1cImZpbGVcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMge1xuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbn1cbm91dHB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBjb2xvcjogIzU1NTtcbn1cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzRweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjNTU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIC13ZWJraXQtYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xuICAgICAgIC1vLXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM2NmFmZTk7XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAuNik7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA4cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAuNik7XG59XG4uZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3Nzc7XG4gIG9wYWNpdHk6IDE7XG59XG4uZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNzc3O1xufVxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNzc3O1xufVxuLmZvcm0tY29udHJvbFtkaXNhYmxlZF0sXG4uZm9ybS1jb250cm9sW3JlYWRvbmx5XSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZm9ybS1jb250cm9sIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3BhY2l0eTogMTtcbn1cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogYXV0bztcbn1cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbmlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLFxuaW5wdXRbdHlwZT1cIm1vbnRoXCJdIHtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzIFxcXFwwO1xufVxuaW5wdXRbdHlwZT1cImRhdGVcIl0uaW5wdXQtc20sXG5pbnB1dFt0eXBlPVwidGltZVwiXS5pbnB1dC1zbSxcbmlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXS5pbnB1dC1zbSxcbmlucHV0W3R5cGU9XCJtb250aFwiXS5pbnB1dC1zbSB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuaW5wdXRbdHlwZT1cImRhdGVcIl0uaW5wdXQtbGcsXG5pbnB1dFt0eXBlPVwidGltZVwiXS5pbnB1dC1sZyxcbmlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXS5pbnB1dC1sZyxcbmlucHV0W3R5cGU9XCJtb250aFwiXS5pbnB1dC1sZyB7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xufVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnJhZGlvLFxuLmNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5yYWRpbyBsYWJlbCxcbi5jaGVja2JveCBsYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbi5yYWRpby1pbmxpbmUgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi5jaGVja2JveC1pbmxpbmUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA0cHggXFxcXDk7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cbi5yYWRpbyArIC5yYWRpbyxcbi5jaGVja2JveCArIC5jaGVja2JveCB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG4ucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmFkaW8taW5saW5lICsgLnJhZGlvLWlubGluZSxcbi5jaGVja2JveC1pbmxpbmUgKyAuY2hlY2tib3gtaW5saW5lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pbnB1dFt0eXBlPVwicmFkaW9cIl1bZGlzYWJsZWRdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW2Rpc2FibGVkXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXS5kaXNhYmxlZCxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5kaXNhYmxlZCxcbmZpZWxkc2V0W2Rpc2FibGVkXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5maWVsZHNldFtkaXNhYmxlZF0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5yYWRpby1pbmxpbmUuZGlzYWJsZWQsXG4uY2hlY2tib3gtaW5saW5lLmRpc2FibGVkLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5yYWRpby1pbmxpbmUsXG5maWVsZHNldFtkaXNhYmxlZF0gLmNoZWNrYm94LWlubGluZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ucmFkaW8uZGlzYWJsZWQgbGFiZWwsXG4uY2hlY2tib3guZGlzYWJsZWQgbGFiZWwsXG5maWVsZHNldFtkaXNhYmxlZF0gLnJhZGlvIGxhYmVsLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5jaGVja2JveCBsYWJlbCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uZm9ybS1jb250cm9sLXN0YXRpYyB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZm9ybS1jb250cm9sLXN0YXRpYy5pbnB1dC1sZyxcbi5mb3JtLWNvbnRyb2wtc3RhdGljLmlucHV0LXNtIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmlucHV0LXNtLFxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5zZWxlY3QuaW5wdXQtc20ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxudGV4dGFyZWEuaW5wdXQtc20sXG5zZWxlY3RbbXVsdGlwbGVdLmlucHV0LXNtIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmlucHV0LWxnLFxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbnNlbGVjdC5pbnB1dC1sZyB7XG4gIGhlaWdodDogNDZweDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG50ZXh0YXJlYS5pbnB1dC1sZyxcbnNlbGVjdFttdWx0aXBsZV0uaW5wdXQtbGcge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uaGFzLWZlZWRiYWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZy1yaWdodDogNDIuNXB4O1xufVxuLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXQtbGcgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogNDZweDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG4uaW5wdXQtc20gKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uaGFzLXN1Y2Nlc3MgLmhlbHAtYmxvY2ssXG4uaGFzLXN1Y2Nlc3MgLmNvbnRyb2wtbGFiZWwsXG4uaGFzLXN1Y2Nlc3MgLnJhZGlvLFxuLmhhcy1zdWNjZXNzIC5jaGVja2JveCxcbi5oYXMtc3VjY2VzcyAucmFkaW8taW5saW5lLFxuLmhhcy1zdWNjZXNzIC5jaGVja2JveC1pbmxpbmUge1xuICBjb2xvcjogIzNjNzYzZDtcbn1cbi5oYXMtc3VjY2VzcyAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjM2M3NjNkO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpO1xufVxuLmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMyYjU0MmM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSksIDAgMCA2cHggIzY3YjE2ODtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDc1KSwgMCAwIDZweCAjNjdiMTY4O1xufVxuLmhhcy1zdWNjZXNzIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIGNvbG9yOiAjM2M3NjNkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xuICBib3JkZXItY29sb3I6ICMzYzc2M2Q7XG59XG4uaGFzLXN1Y2Nlc3MgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIGNvbG9yOiAjM2M3NjNkO1xufVxuLmhhcy13YXJuaW5nIC5oZWxwLWJsb2NrLFxuLmhhcy13YXJuaW5nIC5jb250cm9sLWxhYmVsLFxuLmhhcy13YXJuaW5nIC5yYWRpbyxcbi5oYXMtd2FybmluZyAuY2hlY2tib3gsXG4uaGFzLXdhcm5pbmcgLnJhZGlvLWlubGluZSxcbi5oYXMtd2FybmluZyAuY2hlY2tib3gtaW5saW5lIHtcbiAgY29sb3I6ICM4YTZkM2I7XG59XG4uaGFzLXdhcm5pbmcgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1jb2xvcjogIzhhNmQzYjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDc1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDc1KTtcbn1cbi5oYXMtd2FybmluZyAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjY1MTJjO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpLCAwIDAgNnB4ICNjMGExNmI7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSksIDAgMCA2cHggI2MwYTE2Yjtcbn1cbi5oYXMtd2FybmluZyAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBjb2xvcjogIzhhNmQzYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcbiAgYm9yZGVyLWNvbG9yOiAjOGE2ZDNiO1xufVxuLmhhcy13YXJuaW5nIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICBjb2xvcjogIzhhNmQzYjtcbn1cbi5oYXMtZXJyb3IgLmhlbHAtYmxvY2ssXG4uaGFzLWVycm9yIC5jb250cm9sLWxhYmVsLFxuLmhhcy1lcnJvciAucmFkaW8sXG4uaGFzLWVycm9yIC5jaGVja2JveCxcbi5oYXMtZXJyb3IgLnJhZGlvLWlubGluZSxcbi5oYXMtZXJyb3IgLmNoZWNrYm94LWlubGluZSB7XG4gIGNvbG9yOiAjYTk0NDQyO1xufVxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjYTk0NDQyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpO1xufVxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjODQzNTM0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpLCAwIDAgNnB4ICNjZTg0ODM7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSksIDAgMCA2cHggI2NlODQ4Mztcbn1cbi5oYXMtZXJyb3IgLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XG4gIGJvcmRlci1jb2xvcjogI2E5NDQ0Mjtcbn1cbi5oYXMtZXJyb3IgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIGNvbG9yOiAjYTk0NDQyO1xufVxuLmhhcy1mZWVkYmFjayBsYWJlbC5zci1vbmx5IH4gLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHRvcDogMDtcbn1cbi5oZWxwLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM3MzczNzM7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0taW5saW5lIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5mb3JtLWlubGluZSAuZm9ybS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1hZGRvbixcbiAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuLFxuICAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLmNvbnRyb2wtbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLnJhZGlvLFxuICAuZm9ybS1pbmxpbmUgLmNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmZvcm0taW5saW5lIC5yYWRpbyBsYWJlbCxcbiAgLmZvcm0taW5saW5lIC5jaGVja2JveCBsYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIC5mb3JtLWlubGluZSAucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuICAuZm9ybS1pbmxpbmUgLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5mb3JtLWlubGluZSAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIHRvcDogMDtcbiAgfVxufVxuLmZvcm0taG9yaXpvbnRhbCAucmFkaW8sXG4uZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveCxcbi5mb3JtLWhvcml6b250YWwgLnJhZGlvLWlubGluZSxcbi5mb3JtLWhvcml6b250YWwgLmNoZWNrYm94LWlubGluZSB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5yYWRpbyxcbi5mb3JtLWhvcml6b250YWwgLmNoZWNrYm94IHtcbiAgbWluLWhlaWdodDogMjdweDtcbn1cbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0taG9yaXpvbnRhbCAuY29udHJvbC1sYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG4uZm9ybS1ob3Jpem9udGFsIC5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cC1sZyAuY29udHJvbC1sYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IDE0LjNweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAtc20gLmNvbnRyb2wtbGFiZWwge1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gIH1cbn1cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5idG46Zm9jdXMsXG4uYnRuOmFjdGl2ZTpmb2N1cyxcbi5idG4uYWN0aXZlOmZvY3VzIHtcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG4uYnRuOmhvdmVyLFxuLmJ0bjpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnRuOmFjdGl2ZSxcbi5idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAuMTI1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAuMTI1KTtcbn1cbi5idG4uZGlzYWJsZWQsXG4uYnRuW2Rpc2FibGVkXSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT02NSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICBvcGFjaXR5OiAuNjU7XG59XG4uYnRuLWRlZmF1bHQge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuLmJ0bi1kZWZhdWx0OmhvdmVyLFxuLmJ0bi1kZWZhdWx0OmZvY3VzLFxuLmJ0bi1kZWZhdWx0OmFjdGl2ZSxcbi5idG4tZGVmYXVsdC5hY3RpdmUsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWRlZmF1bHQge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgYm9yZGVyLWNvbG9yOiAjYWRhZGFkO1xufVxuLmJ0bi1kZWZhdWx0OmFjdGl2ZSxcbi5idG4tZGVmYXVsdC5hY3RpdmUsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLmJ0bi1kZWZhdWx0LmRpc2FibGVkLFxuLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlZmF1bHQsXG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQ6aG92ZXIsXG4uYnRuLWRlZmF1bHRbZGlzYWJsZWRdOmhvdmVyLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdDpob3Zlcixcbi5idG4tZGVmYXVsdC5kaXNhYmxlZDpmb2N1cyxcbi5idG4tZGVmYXVsdFtkaXNhYmxlZF06Zm9jdXMsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWZhdWx0OmZvY3VzLFxuLmJ0bi1kZWZhdWx0LmRpc2FibGVkOmFjdGl2ZSxcbi5idG4tZGVmYXVsdFtkaXNhYmxlZF06YWN0aXZlLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdDphY3RpdmUsXG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQuYWN0aXZlLFxuLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXS5hY3RpdmUsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWZhdWx0LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbn1cbi5idG4tZGVmYXVsdCAuYmFkZ2Uge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xuICBib3JkZXItY29sb3I6ICMzNTdlYmQ7XG59XG4uYnRuLXByaW1hcnk6aG92ZXIsXG4uYnRuLXByaW1hcnk6Zm9jdXMsXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxuLmJ0bi1wcmltYXJ5LmFjdGl2ZSxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA3MWE5O1xuICBib3JkZXItY29sb3I6ICMyODVlOGU7XG59XG4uYnRuLXByaW1hcnk6YWN0aXZlLFxuLmJ0bi1wcmltYXJ5LmFjdGl2ZSxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG4uYnRuLXByaW1hcnkuZGlzYWJsZWQsXG4uYnRuLXByaW1hcnlbZGlzYWJsZWRdLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeSxcbi5idG4tcHJpbWFyeS5kaXNhYmxlZDpob3Zlcixcbi5idG4tcHJpbWFyeVtkaXNhYmxlZF06aG92ZXIsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1wcmltYXJ5LmRpc2FibGVkOmZvY3VzLFxuLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpmb2N1cyxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnk6Zm9jdXMsXG4uYnRuLXByaW1hcnkuZGlzYWJsZWQ6YWN0aXZlLFxuLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXTphY3RpdmUsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcbi5idG4tcHJpbWFyeS5kaXNhYmxlZC5hY3RpdmUsXG4uYnRuLXByaW1hcnlbZGlzYWJsZWRdLmFjdGl2ZSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcbiAgYm9yZGVyLWNvbG9yOiAjMzU3ZWJkO1xufVxuLmJ0bi1wcmltYXJ5IC5iYWRnZSB7XG4gIGNvbG9yOiAjNDI4YmNhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJ0bi1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XG4gIGJvcmRlci1jb2xvcjogIzRjYWU0Yztcbn1cbi5idG4tc3VjY2Vzczpob3Zlcixcbi5idG4tc3VjY2Vzczpmb2N1cyxcbi5idG4tc3VjY2VzczphY3RpdmUsXG4uYnRuLXN1Y2Nlc3MuYWN0aXZlLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDlkNDQ7XG4gIGJvcmRlci1jb2xvcjogIzM5ODQzOTtcbn1cbi5idG4tc3VjY2VzczphY3RpdmUsXG4uYnRuLXN1Y2Nlc3MuYWN0aXZlLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi5idG4tc3VjY2Vzcy5kaXNhYmxlZCxcbi5idG4tc3VjY2Vzc1tkaXNhYmxlZF0sXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zdWNjZXNzLFxuLmJ0bi1zdWNjZXNzLmRpc2FibGVkOmhvdmVyLFxuLmJ0bi1zdWNjZXNzW2Rpc2FibGVkXTpob3ZlcixcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3M6aG92ZXIsXG4uYnRuLXN1Y2Nlc3MuZGlzYWJsZWQ6Zm9jdXMsXG4uYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdOmZvY3VzLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tc3VjY2Vzczpmb2N1cyxcbi5idG4tc3VjY2Vzcy5kaXNhYmxlZDphY3RpdmUsXG4uYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdOmFjdGl2ZSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3M6YWN0aXZlLFxuLmJ0bi1zdWNjZXNzLmRpc2FibGVkLmFjdGl2ZSxcbi5idG4tc3VjY2Vzc1tkaXNhYmxlZF0uYWN0aXZlLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tc3VjY2Vzcy5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xuICBib3JkZXItY29sb3I6ICM0Y2FlNGM7XG59XG4uYnRuLXN1Y2Nlc3MgLmJhZGdlIHtcbiAgY29sb3I6ICM1Y2I4NWM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYnRuLWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcbiAgYm9yZGVyLWNvbG9yOiAjNDZiOGRhO1xufVxuLmJ0bi1pbmZvOmhvdmVyLFxuLmJ0bi1pbmZvOmZvY3VzLFxuLmJ0bi1pbmZvOmFjdGl2ZSxcbi5idG4taW5mby5hY3RpdmUsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxYjBkNTtcbiAgYm9yZGVyLWNvbG9yOiAjMjY5YWJjO1xufVxuLmJ0bi1pbmZvOmFjdGl2ZSxcbi5idG4taW5mby5hY3RpdmUsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLmJ0bi1pbmZvLmRpc2FibGVkLFxuLmJ0bi1pbmZvW2Rpc2FibGVkXSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWluZm8sXG4uYnRuLWluZm8uZGlzYWJsZWQ6aG92ZXIsXG4uYnRuLWluZm9bZGlzYWJsZWRdOmhvdmVyLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mbzpob3Zlcixcbi5idG4taW5mby5kaXNhYmxlZDpmb2N1cyxcbi5idG4taW5mb1tkaXNhYmxlZF06Zm9jdXMsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1pbmZvOmZvY3VzLFxuLmJ0bi1pbmZvLmRpc2FibGVkOmFjdGl2ZSxcbi5idG4taW5mb1tkaXNhYmxlZF06YWN0aXZlLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mbzphY3RpdmUsXG4uYnRuLWluZm8uZGlzYWJsZWQuYWN0aXZlLFxuLmJ0bi1pbmZvW2Rpc2FibGVkXS5hY3RpdmUsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1pbmZvLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7XG4gIGJvcmRlci1jb2xvcjogIzQ2YjhkYTtcbn1cbi5idG4taW5mbyAuYmFkZ2Uge1xuICBjb2xvcjogIzViYzBkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5idG4td2FybmluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlO1xuICBib3JkZXItY29sb3I6ICNlZWEyMzY7XG59XG4uYnRuLXdhcm5pbmc6aG92ZXIsXG4uYnRuLXdhcm5pbmc6Zm9jdXMsXG4uYnRuLXdhcm5pbmc6YWN0aXZlLFxuLmJ0bi13YXJuaW5nLmFjdGl2ZSxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4td2FybmluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5NzFmO1xuICBib3JkZXItY29sb3I6ICNkNTg1MTI7XG59XG4uYnRuLXdhcm5pbmc6YWN0aXZlLFxuLmJ0bi13YXJuaW5nLmFjdGl2ZSxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4td2FybmluZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG4uYnRuLXdhcm5pbmcuZGlzYWJsZWQsXG4uYnRuLXdhcm5pbmdbZGlzYWJsZWRdLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4td2FybmluZyxcbi5idG4td2FybmluZy5kaXNhYmxlZDpob3Zlcixcbi5idG4td2FybmluZ1tkaXNhYmxlZF06aG92ZXIsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi13YXJuaW5nOmhvdmVyLFxuLmJ0bi13YXJuaW5nLmRpc2FibGVkOmZvY3VzLFxuLmJ0bi13YXJuaW5nW2Rpc2FibGVkXTpmb2N1cyxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXdhcm5pbmc6Zm9jdXMsXG4uYnRuLXdhcm5pbmcuZGlzYWJsZWQ6YWN0aXZlLFxuLmJ0bi13YXJuaW5nW2Rpc2FibGVkXTphY3RpdmUsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi13YXJuaW5nOmFjdGl2ZSxcbi5idG4td2FybmluZy5kaXNhYmxlZC5hY3RpdmUsXG4uYnRuLXdhcm5pbmdbZGlzYWJsZWRdLmFjdGl2ZSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXdhcm5pbmcuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjZWVhMjM2O1xufVxuLmJ0bi13YXJuaW5nIC5iYWRnZSB7XG4gIGNvbG9yOiAjZjBhZDRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJ0bi1kYW5nZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcbiAgYm9yZGVyLWNvbG9yOiAjZDQzZjNhO1xufVxuLmJ0bi1kYW5nZXI6aG92ZXIsXG4uYnRuLWRhbmdlcjpmb2N1cyxcbi5idG4tZGFuZ2VyOmFjdGl2ZSxcbi5idG4tZGFuZ2VyLmFjdGl2ZSxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tZGFuZ2VyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOTMwMmM7XG4gIGJvcmRlci1jb2xvcjogI2FjMjkyNTtcbn1cbi5idG4tZGFuZ2VyOmFjdGl2ZSxcbi5idG4tZGFuZ2VyLmFjdGl2ZSxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi5idG4tZGFuZ2VyLmRpc2FibGVkLFxuLmJ0bi1kYW5nZXJbZGlzYWJsZWRdLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGFuZ2VyLFxuLmJ0bi1kYW5nZXIuZGlzYWJsZWQ6aG92ZXIsXG4uYnRuLWRhbmdlcltkaXNhYmxlZF06aG92ZXIsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXI6aG92ZXIsXG4uYnRuLWRhbmdlci5kaXNhYmxlZDpmb2N1cyxcbi5idG4tZGFuZ2VyW2Rpc2FibGVkXTpmb2N1cyxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlcjpmb2N1cyxcbi5idG4tZGFuZ2VyLmRpc2FibGVkOmFjdGl2ZSxcbi5idG4tZGFuZ2VyW2Rpc2FibGVkXTphY3RpdmUsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXI6YWN0aXZlLFxuLmJ0bi1kYW5nZXIuZGlzYWJsZWQuYWN0aXZlLFxuLmJ0bi1kYW5nZXJbZGlzYWJsZWRdLmFjdGl2ZSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlci5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xuICBib3JkZXItY29sb3I6ICNkNDNmM2E7XG59XG4uYnRuLWRhbmdlciAuYmFkZ2Uge1xuICBjb2xvcjogI2Q5NTM0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5idG4tbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNDI4YmNhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWxpbmssXG4uYnRuLWxpbms6YWN0aXZlLFxuLmJ0bi1saW5rW2Rpc2FibGVkXSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLWxpbmssXG4uYnRuLWxpbms6aG92ZXIsXG4uYnRuLWxpbms6Zm9jdXMsXG4uYnRuLWxpbms6YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5idG4tbGluazpob3Zlcixcbi5idG4tbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjMmE2NDk2O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYnRuLWxpbmtbZGlzYWJsZWRdOmhvdmVyLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tbGluazpob3Zlcixcbi5idG4tbGlua1tkaXNhYmxlZF06Zm9jdXMsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1saW5rOmZvY3VzIHtcbiAgY29sb3I6ICM3Nzc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idG4tbGcsXG4uYnRuLWdyb3VwLWxnID4gLmJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmJ0bi1zbSxcbi5idG4tZ3JvdXAtc20gPiAuYnRuIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmJ0bi14cyxcbi5idG4tZ3JvdXAteHMgPiAuYnRuIHtcbiAgcGFkZGluZzogMXB4IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYnRuLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmJ0bi1ibG9jayxcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5idG4tYmxvY2ssXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmJ0bi1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZhZGUge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG4gICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xufVxuLmZhZGUuaW4ge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbGxhcHNlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb2xsYXBzZS5pbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxudHIuY29sbGFwc2UuaW4ge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG50Ym9keS5jb2xsYXBzZS5pbiB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcbn1cbi5jb2xsYXBzaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IC4zNXMgZWFzZTtcbiAgICAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgLjM1cyBlYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuMzVzIGVhc2U7XG59XG4uY2FyZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiAycHggMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgLjE3NSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xNzUpO1xufVxuLmRyb3Bkb3duLW1lbnUucHVsbC1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xufVxuLmRyb3Bkb3duLW1lbnUgLmRpdmlkZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiA5cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbn1cbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBjbGVhcjogYm90aDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjMzMzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4uZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhLFxuLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpob3Zlcixcbi5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xuICBvdXRsaW5lOiAwO1xufVxuLmRyb3Bkb3duLW1lbnUgPiAuZGlzYWJsZWQgPiBhLFxuLmRyb3Bkb3duLW1lbnUgPiAuZGlzYWJsZWQgPiBhOmhvdmVyLFxuLmRyb3Bkb3duLW1lbnUgPiAuZGlzYWJsZWQgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4uZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGE6aG92ZXIsXG4uZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGE6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xufVxuLm9wZW4gPiAuZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm9wZW4gPiBhIHtcbiAgb3V0bGluZTogMDtcbn1cbi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG4uZHJvcGRvd24tbWVudS1sZWZ0IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG59XG4uZHJvcGRvd24taGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBjb2xvcjogIzc3NztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5kcm9wZG93bi1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTA7XG59XG4ucHVsbC1yaWdodCA+IC5kcm9wZG93bi1tZW51IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG4uZHJvcHVwIC5jYXJldCxcbi5uYXZiYXItZml4ZWQtYm90dG9tIC5kcm9wZG93biAuY2FyZXQge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQ7XG59XG4uZHJvcHVwIC5kcm9wZG93bi1tZW51LFxuLm5hdmJhci1maXhlZC1ib3R0b20gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLXJpZ2h0IC5kcm9wZG93bi1tZW51IHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG4gIC5uYXZiYXItcmlnaHQgLmRyb3Bkb3duLW1lbnUtbGVmdCB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogMDtcbiAgfVxufVxuLmJ0bi1ncm91cCxcbi5idG4tZ3JvdXAtdmVydGljYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmJ0bi1ncm91cCA+IC5idG46aG92ZXIsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjpob3Zlcixcbi5idG4tZ3JvdXAgPiAuYnRuOmZvY3VzLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG46Zm9jdXMsXG4uYnRuLWdyb3VwID4gLmJ0bjphY3RpdmUsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjphY3RpdmUsXG4uYnRuLWdyb3VwID4gLmJ0bi5hY3RpdmUsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi5hY3RpdmUge1xuICB6LWluZGV4OiAyO1xufVxuLmJ0bi1ncm91cCA+IC5idG46Zm9jdXMsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uYnRuLWdyb3VwIC5idG4gKyAuYnRuLFxuLmJ0bi1ncm91cCAuYnRuICsgLmJ0bi1ncm91cCxcbi5idG4tZ3JvdXAgLmJ0bi1ncm91cCArIC5idG4sXG4uYnRuLWdyb3VwIC5idG4tZ3JvdXAgKyAuYnRuLWdyb3VwIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG4uYnRuLXRvb2xiYXIge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cbi5idG4tdG9vbGJhciAuYnRuLWdyb3VwLFxuLmJ0bi10b29sYmFyIC5pbnB1dC1ncm91cCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmJ0bi10b29sYmFyID4gLmJ0bixcbi5idG4tdG9vbGJhciA+IC5idG4tZ3JvdXAsXG4uYnRuLXRvb2xiYXIgPiAuaW5wdXQtZ3JvdXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmJ0bi1ncm91cCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cCA+IC5idG46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cCA+IC5idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSxcbi5idG4tZ3JvdXAgPiAuZHJvcGRvd24tdG9nZ2xlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpmaXJzdC1jaGlsZCA+IC5idG46bGFzdC1jaGlsZCxcbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwOmZpcnN0LWNoaWxkID4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwOmxhc3QtY2hpbGQgPiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAgLmRyb3Bkb3duLXRvZ2dsZTphY3RpdmUsXG4uYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIG91dGxpbmU6IDA7XG59XG4uYnRuLWdyb3VwID4gLmJ0biArIC5kcm9wZG93bi10b2dnbGUge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmJ0bi1ncm91cCA+IC5idG4tbGcgKyAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIC4xMjUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIC4xMjUpO1xufVxuLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGUuYnRuLWxpbmsge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idG4gLmNhcmV0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uYnRuLWxnIC5jYXJldCB7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuLmRyb3B1cCAuYnRuLWxnIC5jYXJldCB7XG4gIGJvcmRlci13aWR0aDogMCA1cHggNXB4O1xufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4sXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cCxcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwID4gLmJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwID4gLmJ0biB7XG4gIGZsb2F0OiBub25lO1xufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4gKyAuYnRuLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4gKyAuYnRuLWdyb3VwLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXAgKyAuYnRuLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXAgKyAuYnRuLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSA+IC5idG46bGFzdC1jaGlsZCxcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cC1qdXN0aWZpZWQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG4uYnRuLWdyb3VwLWp1c3RpZmllZCA+IC5idG4sXG4uYnRuLWdyb3VwLWp1c3RpZmllZCA+IC5idG4tZ3JvdXAge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBmbG9hdDogbm9uZTtcbiAgd2lkdGg6IDElO1xufVxuLmJ0bi1ncm91cC1qdXN0aWZpZWQgPiAuYnRuLWdyb3VwIC5idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG4tZ3JvdXAtanVzdGlmaWVkID4gLmJ0bi1ncm91cCAuZHJvcGRvd24tbWVudSB7XG4gIGxlZnQ6IGF1dG87XG59XG5bZGF0YS10b2dnbGU9XCJidXR0b25zXCJdID4gLmJ0biA+IGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbltkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0gPiAuYnRuID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvcGFjaXR5OiAwO1xufVxuLmlucHV0LWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbi5pbnB1dC1ncm91cFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uaW5wdXQtZ3JvdXAtbGcgPiAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWJ0biA+IC5idG4ge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuc2VsZWN0LmlucHV0LWdyb3VwLWxnID4gLmZvcm0tY29udHJvbCxcbnNlbGVjdC5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1hZGRvbixcbnNlbGVjdC5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcbiAgaGVpZ2h0OiA0NnB4O1xuICBsaW5lLWhlaWdodDogNDZweDtcbn1cbnRleHRhcmVhLmlucHV0LWdyb3VwLWxnID4gLmZvcm0tY29udHJvbCxcbnRleHRhcmVhLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWFkZG9uLFxudGV4dGFyZWEuaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0bixcbnNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtbGcgPiAuZm9ybS1jb250cm9sLFxuc2VsZWN0W211bHRpcGxlXS5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1hZGRvbixcbnNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5pbnB1dC1ncm91cC1zbSA+IC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuc2VsZWN0LmlucHV0LWdyb3VwLXNtID4gLmZvcm0tY29udHJvbCxcbnNlbGVjdC5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1hZGRvbixcbnNlbGVjdC5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbnRleHRhcmVhLmlucHV0LWdyb3VwLXNtID4gLmZvcm0tY29udHJvbCxcbnRleHRhcmVhLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWFkZG9uLFxudGV4dGFyZWEuaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0bixcbnNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtc20gPiAuZm9ybS1jb250cm9sLFxuc2VsZWN0W211bHRpcGxlXS5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1hZGRvbixcbnNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5pbnB1dC1ncm91cC1hZGRvbixcbi5pbnB1dC1ncm91cC1idG4sXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG4uaW5wdXQtZ3JvdXAtYWRkb246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcbi5pbnB1dC1ncm91cC1idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWJ0biB7XG4gIHdpZHRoOiAxJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzU1NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaW5wdXQtZ3JvdXAtYWRkb24uaW5wdXQtc20ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uaW5wdXQtZ3JvdXAtYWRkb24uaW5wdXQtbGcge1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmlucHV0LWdyb3VwLWFkZG9uIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbi5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zmlyc3QtY2hpbGQsXG4uaW5wdXQtZ3JvdXAtYWRkb246Zmlyc3QtY2hpbGQsXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuLWdyb3VwID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuZHJvcGRvd24tdG9nZ2xlLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bjpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSxcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG4tZ3JvdXA6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uaW5wdXQtZ3JvdXAtYWRkb246Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpsYXN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQsXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bi1ncm91cCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuZHJvcGRvd24tdG9nZ2xlLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCksXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogMDtcbn1cbi5pbnB1dC1ncm91cC1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmlucHV0LWdyb3VwLWJ0biA+IC5idG4gKyAuYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG4uaW5wdXQtZ3JvdXAtYnRuID4gLmJ0bjpob3Zlcixcbi5pbnB1dC1ncm91cC1idG4gPiAuYnRuOmZvY3VzLFxuLmlucHV0LWdyb3VwLWJ0biA+IC5idG46YWN0aXZlIHtcbiAgei1pbmRleDogMjtcbn1cbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG4tZ3JvdXAge1xuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG59XG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bi1ncm91cCB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuLm5hdiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5uYXYgPiBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2ID4gbGkgPiBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLm5hdiA+IGxpID4gYTpob3Zlcixcbi5uYXYgPiBsaSA+IGE6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4ubmF2ID4gbGkuZGlzYWJsZWQgPiBhIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ubmF2ID4gbGkuZGlzYWJsZWQgPiBhOmhvdmVyLFxuLm5hdiA+IGxpLmRpc2FibGVkID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjNzc3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm5hdiAub3BlbiA+IGEsXG4ubmF2IC5vcGVuID4gYTpob3Zlcixcbi5uYXYgLm9wZW4gPiBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWNvbG9yOiAjNDI4YmNhO1xufVxuLm5hdiAubmF2LWRpdmlkZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiA5cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbn1cbi5uYXYgPiBsaSA+IGEgPiBpbWcge1xuICBtYXgtd2lkdGg6IG5vbmU7XG59XG4ubmF2LXRhYnMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbi5uYXYtdGFicyA+IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG4ubmF2LXRhYnMgPiBsaSA+IGEge1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbn1cbi5uYXYtdGFicyA+IGxpID4gYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2VlZSAjZWVlICNkZGQ7XG59XG4ubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhLFxuLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYTpob3Zlcixcbi5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICBjb2xvcjogIzU1NTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uYXYtdGFicy5uYXYtanVzdGlmaWVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IGxpIHtcbiAgZmxvYXQ6IG5vbmU7XG59XG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IGxpID4gYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICB0b3A6IGF1dG87XG4gIGxlZnQ6IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiBsaSB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB3aWR0aDogMSU7XG4gIH1cbiAgLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiBsaSA+IGEge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbi5uYXYtdGFicy5uYXYtanVzdGlmaWVkID4gbGkgPiBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhLFxuLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiAuYWN0aXZlID4gYTpob3Zlcixcbi5uYXYtdGFicy5uYXYtanVzdGlmaWVkID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXYtdGFicy5uYXYtanVzdGlmaWVkID4gbGkgPiBhIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgfVxuICAubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhLFxuICAubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuICAubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICB9XG59XG4ubmF2LXBpbGxzID4gbGkge1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXYtcGlsbHMgPiBsaSA+IGEge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubmF2LXBpbGxzID4gbGkgKyBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG4ubmF2LXBpbGxzID4gbGkuYWN0aXZlID4gYSxcbi5uYXYtcGlsbHMgPiBsaS5hY3RpdmUgPiBhOmhvdmVyLFxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcbn1cbi5uYXYtc3RhY2tlZCA+IGxpIHtcbiAgZmxvYXQ6IG5vbmU7XG59XG4ubmF2LXN0YWNrZWQgPiBsaSArIGxpIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5uYXYtanVzdGlmaWVkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2LWp1c3RpZmllZCA+IGxpIHtcbiAgZmxvYXQ6IG5vbmU7XG59XG4ubmF2LWp1c3RpZmllZCA+IGxpID4gYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5hdi1qdXN0aWZpZWQgPiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICB0b3A6IGF1dG87XG4gIGxlZnQ6IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi1qdXN0aWZpZWQgPiBsaSB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB3aWR0aDogMSU7XG4gIH1cbiAgLm5hdi1qdXN0aWZpZWQgPiBsaSA+IGEge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbi5uYXYtdGFicy1qdXN0aWZpZWQge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLm5hdi10YWJzLWp1c3RpZmllZCA+IGxpID4gYSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm5hdi10YWJzLWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhLFxuLm5hdi10YWJzLWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuLm5hdi10YWJzLWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2LXRhYnMtanVzdGlmaWVkID4gbGkgPiBhIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgfVxuICAubmF2LXRhYnMtanVzdGlmaWVkID4gLmFjdGl2ZSA+IGEsXG4gIC5uYXYtdGFicy1qdXN0aWZpZWQgPiAuYWN0aXZlID4gYTpob3ZlcixcbiAgLm5hdi10YWJzLWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICB9XG59XG4udGFiLWNvbnRlbnQgPiAudGFiLXBhbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRhYi1jb250ZW50ID4gLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hdi10YWJzIC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWhlYWRlciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cbi5uYXZiYXItY29sbGFwc2Uge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbn1cbi5uYXZiYXItY29sbGFwc2UuaW4ge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1jb2xsYXBzZS5pbiB7XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgfVxuICAubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLWNvbGxhcHNlLFxuICAubmF2YmFyLXN0YXRpYy10b3AgLm5hdmJhci1jb2xsYXBzZSxcbiAgLm5hdmJhci1maXhlZC1ib3R0b20gLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cbi5uYXZiYXItZml4ZWQtdG9wIC5uYXZiYXItY29sbGFwc2UsXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSAubmF2YmFyLWNvbGxhcHNlIHtcbiAgbWF4LWhlaWdodDogMzQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLWNvbGxhcHNlLFxuICAubmF2YmFyLWZpeGVkLWJvdHRvbSAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgfVxufVxuLmNvbnRhaW5lciA+IC5uYXZiYXItaGVhZGVyLFxuLmNvbnRhaW5lci1mbHVpZCA+IC5uYXZiYXItaGVhZGVyLFxuLmNvbnRhaW5lciA+IC5uYXZiYXItY29sbGFwc2UsXG4uY29udGFpbmVyLWZsdWlkID4gLm5hdmJhci1jb2xsYXBzZSB7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyID4gLm5hdmJhci1oZWFkZXIsXG4gIC5jb250YWluZXItZmx1aWQgPiAubmF2YmFyLWhlYWRlcixcbiAgLmNvbnRhaW5lciA+IC5uYXZiYXItY29sbGFwc2UsXG4gIC5jb250YWluZXItZmx1aWQgPiAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbi5uYXZiYXItc3RhdGljLXRvcCB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLXN0YXRpYy10b3Age1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbi5uYXZiYXItZml4ZWQtdG9wLFxuLm5hdmJhci1maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDMwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXItZml4ZWQtdG9wLFxuICAubmF2YmFyLWZpeGVkLWJvdHRvbSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuLm5hdmJhci1maXhlZC10b3Age1xuICB0b3A6IDA7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbn1cbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXItd2lkdGg6IDFweCAwIDA7XG59XG4ubmF2YmFyLWJyYW5kIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm5hdmJhci1icmFuZDpob3Zlcixcbi5uYXZiYXItYnJhbmQ6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciA+IC5jb250YWluZXIgLm5hdmJhci1icmFuZCxcbiAgLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICB9XG59XG4ubmF2YmFyLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA5cHggMTBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubmF2YmFyLXRvZ2dsZTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4ubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG4ubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIgKyAuaWNvbi1iYXIge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci10b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5uYXZiYXItbmF2IHtcbiAgbWFyZ2luOiA3LjVweCAtMTVweDtcbn1cbi5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhLFxuICAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMjVweDtcbiAgfVxuICAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsXG4gIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1uYXYge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAubmF2YmFyLW5hdiA+IGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cbiAgLm5hdmJhci1uYXYubmF2YmFyLXJpZ2h0Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5uYXZiYXItZm9ybSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXItZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAubmF2YmFyLWZvcm0gLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLm5hdmJhci1mb3JtIC5pbnB1dC1ncm91cCB7XG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLm5hdmJhci1mb3JtIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYWRkb24sXG4gIC5uYXZiYXItZm9ybSAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0bixcbiAgLm5hdmJhci1mb3JtIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAubmF2YmFyLWZvcm0gLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm5hdmJhci1mb3JtIC5jb250cm9sLWxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLm5hdmJhci1mb3JtIC5yYWRpbyxcbiAgLm5hdmJhci1mb3JtIC5jaGVja2JveCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5uYXZiYXItZm9ybSAucmFkaW8gbGFiZWwsXG4gIC5uYXZiYXItZm9ybSAuY2hlY2tib3ggbGFiZWwge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICAubmF2YmFyLWZvcm0gLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbiAgLm5hdmJhci1mb3JtIC5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAubmF2YmFyLWZvcm0gLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubmF2YmFyLWZvcm0gLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXItZm9ybSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIC5uYXZiYXItZm9ybS5uYXZiYXItcmlnaHQ6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgfVxufVxuLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG4ubmF2YmFyLWZpeGVkLWJvdHRvbSAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5uYXZiYXItYnRuIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubmF2YmFyLWJ0bi5idG4tc20ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm5hdmJhci1idG4uYnRuLXhzIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbi5uYXZiYXItdGV4dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci10ZXh0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLm5hdmJhci10ZXh0Lm5hdmJhci1yaWdodDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbi5uYXZiYXItZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGJvcmRlci1jb2xvcjogI2U3ZTdlNztcbn1cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZDpob3Zlcixcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kOmZvY3VzIHtcbiAgY29sb3I6ICM1ZTVlNWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdGV4dCB7XG4gIGNvbG9yOiAjNzc3O1xufVxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXIsXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXMge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSxcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbn1cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5kaXNhYmxlZCA+IGEsXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuZGlzYWJsZWQgPiBhOmhvdmVyLFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmRpc2FibGVkID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSB7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbn1cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpob3Zlcixcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbn1cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWNvbGxhcHNlLFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItZm9ybSB7XG4gIGJvcmRlci1jb2xvcjogI2U3ZTdlNztcbn1cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYSxcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpob3Zlcixcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjNTU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyLFxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhLFxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpob3ZlcixcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG4gIH1cbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmRpc2FibGVkID4gYSxcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmRpc2FibGVkID4gYTpob3ZlcixcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmRpc2FibGVkID4gYTpmb2N1cyB7XG4gICAgY29sb3I6ICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWxpbmsge1xuICBjb2xvcjogIzc3Nztcbn1cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWxpbms6aG92ZXIge1xuICBjb2xvcjogIzMzMztcbn1cbi5uYXZiYXItZGVmYXVsdCAuYnRuLWxpbmsge1xuICBjb2xvcjogIzc3Nztcbn1cbi5uYXZiYXItZGVmYXVsdCAuYnRuLWxpbms6aG92ZXIsXG4ubmF2YmFyLWRlZmF1bHQgLmJ0bi1saW5rOmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG59XG4ubmF2YmFyLWRlZmF1bHQgLmJ0bi1saW5rW2Rpc2FibGVkXTpob3ZlcixcbmZpZWxkc2V0W2Rpc2FibGVkXSAubmF2YmFyLWRlZmF1bHQgLmJ0bi1saW5rOmhvdmVyLFxuLm5hdmJhci1kZWZhdWx0IC5idG4tbGlua1tkaXNhYmxlZF06Zm9jdXMsXG5maWVsZHNldFtkaXNhYmxlZF0gLm5hdmJhci1kZWZhdWx0IC5idG4tbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjY2NjO1xufVxuLm5hdmJhci1pbnZlcnNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgYm9yZGVyLWNvbG9yOiAjMDgwODA4O1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogIzc3Nztcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWJyYW5kOmhvdmVyLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci10ZXh0IHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xuICBjb2xvcjogIzc3Nztcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYTpob3Zlcixcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwODA4O1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLmRpc2FibGVkID4gYSxcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5kaXNhYmxlZCA+IGE6aG92ZXIsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiAuZGlzYWJsZWQgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItdG9nZ2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzMzO1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItdG9nZ2xlOmhvdmVyLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItdG9nZ2xlOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItY29sbGFwc2UsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1mb3JtIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTAxMDEwO1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhOmhvdmVyLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODA4MDg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmRyb3Bkb3duLWhlYWRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDgwODA4O1xuICB9XG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSAuZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODtcbiAgfVxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlcixcbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYSxcbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6aG92ZXIsXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwODA4O1xuICB9XG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGEsXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGE6aG92ZXIsXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1saW5rIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmF2YmFyLWludmVyc2UgLmJ0bi1saW5rIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ubmF2YmFyLWludmVyc2UgLmJ0bi1saW5rOmhvdmVyLFxuLm5hdmJhci1pbnZlcnNlIC5idG4tbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hdmJhci1pbnZlcnNlIC5idG4tbGlua1tkaXNhYmxlZF06aG92ZXIsXG5maWVsZHNldFtkaXNhYmxlZF0gLm5hdmJhci1pbnZlcnNlIC5idG4tbGluazpob3Zlcixcbi5uYXZiYXItaW52ZXJzZSAuYnRuLWxpbmtbZGlzYWJsZWRdOmZvY3VzLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5uYXZiYXItaW52ZXJzZSAuYnRuLWxpbms6Zm9jdXMge1xuICBjb2xvcjogIzQ0NDtcbn1cbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5icmVhZGNydW1iID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYnJlYWRjcnVtYiA+IGxpICsgbGk6YmVmb3JlIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGNvbG9yOiAjY2NjO1xuICBjb250ZW50OiBcIi9cXFxcMDBhMFwiO1xufVxuLmJyZWFkY3J1bWIgPiAuYWN0aXZlIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW46IDIwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnBhZ2luYXRpb24gPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5wYWdpbmF0aW9uID4gbGkgPiBhLFxuLnBhZ2luYXRpb24gPiBsaSA+IHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBjb2xvcjogIzQyOGJjYTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuLnBhZ2luYXRpb24gPiBsaTpmaXJzdC1jaGlsZCA+IGEsXG4ucGFnaW5hdGlvbiA+IGxpOmZpcnN0LWNoaWxkID4gc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbn1cbi5wYWdpbmF0aW9uID4gbGk6bGFzdC1jaGlsZCA+IGEsXG4ucGFnaW5hdGlvbiA+IGxpOmxhc3QtY2hpbGQgPiBzcGFuIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbn1cbi5wYWdpbmF0aW9uID4gbGkgPiBhOmhvdmVyLFxuLnBhZ2luYXRpb24gPiBsaSA+IHNwYW46aG92ZXIsXG4ucGFnaW5hdGlvbiA+IGxpID4gYTpmb2N1cyxcbi5wYWdpbmF0aW9uID4gbGkgPiBzcGFuOmZvY3VzIHtcbiAgY29sb3I6ICMyYTY0OTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbn1cbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IGEsXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuLFxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYTpob3Zlcixcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IHNwYW46aG92ZXIsXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhOmZvY3VzLFxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XG4gIGJvcmRlci1jb2xvcjogIzQyOGJjYTtcbn1cbi5wYWdpbmF0aW9uID4gLmRpc2FibGVkID4gc3Bhbixcbi5wYWdpbmF0aW9uID4gLmRpc2FibGVkID4gc3Bhbjpob3Zlcixcbi5wYWdpbmF0aW9uID4gLmRpc2FibGVkID4gc3Bhbjpmb2N1cyxcbi5wYWdpbmF0aW9uID4gLmRpc2FibGVkID4gYSxcbi5wYWdpbmF0aW9uID4gLmRpc2FibGVkID4gYTpob3Zlcixcbi5wYWdpbmF0aW9uID4gLmRpc2FibGVkID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjNzc3O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG4ucGFnaW5hdGlvbi1sZyA+IGxpID4gYSxcbi5wYWdpbmF0aW9uLWxnID4gbGkgPiBzcGFuIHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucGFnaW5hdGlvbi1sZyA+IGxpOmZpcnN0LWNoaWxkID4gYSxcbi5wYWdpbmF0aW9uLWxnID4gbGk6Zmlyc3QtY2hpbGQgPiBzcGFuIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG59XG4ucGFnaW5hdGlvbi1sZyA+IGxpOmxhc3QtY2hpbGQgPiBhLFxuLnBhZ2luYXRpb24tbGcgPiBsaTpsYXN0LWNoaWxkID4gc3BhbiB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG59XG4ucGFnaW5hdGlvbi1zbSA+IGxpID4gYSxcbi5wYWdpbmF0aW9uLXNtID4gbGkgPiBzcGFuIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYWdpbmF0aW9uLXNtID4gbGk6Zmlyc3QtY2hpbGQgPiBhLFxuLnBhZ2luYXRpb24tc20gPiBsaTpmaXJzdC1jaGlsZCA+IHNwYW4ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cbi5wYWdpbmF0aW9uLXNtID4gbGk6bGFzdC1jaGlsZCA+IGEsXG4ucGFnaW5hdGlvbi1zbSA+IGxpOmxhc3QtY2hpbGQgPiBzcGFuIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbn1cbi5wYWdlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wYWdlciBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5wYWdlciBsaSA+IGEsXG4ucGFnZXIgbGkgPiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5wYWdlciBsaSA+IGE6aG92ZXIsXG4ucGFnZXIgbGkgPiBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuLnBhZ2VyIC5uZXh0ID4gYSxcbi5wYWdlciAubmV4dCA+IHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucGFnZXIgLnByZXZpb3VzID4gYSxcbi5wYWdlciAucHJldmlvdXMgPiBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucGFnZXIgLmRpc2FibGVkID4gYSxcbi5wYWdlciAuZGlzYWJsZWQgPiBhOmhvdmVyLFxuLnBhZ2VyIC5kaXNhYmxlZCA+IGE6Zm9jdXMsXG4ucGFnZXIgLmRpc2FibGVkID4gc3BhbiB7XG4gIGNvbG9yOiAjNzc3O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAuMmVtIC42ZW0gLjNlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbn1cbmEubGFiZWw6aG92ZXIsXG5hLmxhYmVsOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxhYmVsOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5idG4gLmxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG59XG4ubGFiZWwtZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG59XG4ubGFiZWwtZGVmYXVsdFtocmVmXTpob3Zlcixcbi5sYWJlbC1kZWZhdWx0W2hyZWZdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWU1ZTtcbn1cbi5sYWJlbC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcbn1cbi5sYWJlbC1wcmltYXJ5W2hyZWZdOmhvdmVyLFxuLmxhYmVsLXByaW1hcnlbaHJlZl06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA3MWE5O1xufVxuLmxhYmVsLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xufVxuLmxhYmVsLXN1Y2Nlc3NbaHJlZl06aG92ZXIsXG4ubGFiZWwtc3VjY2Vzc1tocmVmXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDlkNDQ7XG59XG4ubGFiZWwtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7XG59XG4ubGFiZWwtaW5mb1tocmVmXTpob3Zlcixcbi5sYWJlbC1pbmZvW2hyZWZdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxYjBkNTtcbn1cbi5sYWJlbC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcbn1cbi5sYWJlbC13YXJuaW5nW2hyZWZdOmhvdmVyLFxuLmxhYmVsLXdhcm5pbmdbaHJlZl06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5NzFmO1xufVxuLmxhYmVsLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XG59XG4ubGFiZWwtZGFuZ2VyW2hyZWZdOmhvdmVyLFxuLmxhYmVsLWRhbmdlcltocmVmXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOTMwMmM7XG59XG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTBweDtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5iYWRnZTplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYnRuIC5iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuLmJ0bi14cyAuYmFkZ2Uge1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDFweCA1cHg7XG59XG5hLmJhZGdlOmhvdmVyLFxuYS5iYWRnZTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmEubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSA+IC5iYWRnZSxcbi5uYXYtcGlsbHMgPiAuYWN0aXZlID4gYSA+IC5iYWRnZSB7XG4gIGNvbG9yOiAjNDI4YmNhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLm5hdi1waWxscyA+IGxpID4gYSA+IC5iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uanVtYm90cm9uIHtcbiAgcGFkZGluZzogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4uanVtYm90cm9uIGgxLFxuLmp1bWJvdHJvbiAuaDEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5qdW1ib3Ryb24gcCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbi5qdW1ib3Ryb24gPiBociB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkNWQ1ZDU7XG59XG4uY29udGFpbmVyIC5qdW1ib3Ryb24ge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uanVtYm90cm9uIC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuanVtYm90cm9uIHtcbiAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcbiAgfVxuICAuY29udGFpbmVyIC5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG4gIC5qdW1ib3Ryb24gaDEsXG4gIC5qdW1ib3Ryb24gLmgxIHtcbiAgICBmb250LXNpemU6IDYzcHg7XG4gIH1cbn1cbi50aHVtYm5haWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuLnRodW1ibmFpbCA+IGltZyxcbi50aHVtYm5haWwgYSA+IGltZyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5hLnRodW1ibmFpbDpob3ZlcixcbmEudGh1bWJuYWlsOmZvY3VzLFxuYS50aHVtYm5haWwuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDI4YmNhO1xufVxuLnRodW1ibmFpbCAuY2FwdGlvbiB7XG4gIHBhZGRpbmc6IDlweDtcbiAgY29sb3I6ICMzMzM7XG59XG4uYWxlcnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmFsZXJ0IGg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uYWxlcnQgLmFsZXJ0LWxpbmsge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hbGVydCA+IHAsXG4uYWxlcnQgPiB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYWxlcnQgPiBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5hbGVydC1kaXNtaXNzYWJsZSxcbi5hbGVydC1kaXNtaXNzaWJsZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG59XG4uYWxlcnQtZGlzbWlzc2FibGUgLmNsb3NlLFxuLmFsZXJ0LWRpc21pc3NpYmxlIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICByaWdodDogLTIxcHg7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzNjNzYzZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbiAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xufVxuLmFsZXJ0LXN1Y2Nlc3MgaHIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYzllMmIzO1xufVxuLmFsZXJ0LXN1Y2Nlc3MgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzJiNTQyYztcbn1cbi5hbGVydC1pbmZvIHtcbiAgY29sb3I6ICMzMTcwOGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG4gIGJvcmRlci1jb2xvcjogI2JjZThmMTtcbn1cbi5hbGVydC1pbmZvIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2E2ZTFlYztcbn1cbi5hbGVydC1pbmZvIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICMyNDUyNjk7XG59XG4uYWxlcnQtd2FybmluZyB7XG4gIGNvbG9yOiAjOGE2ZDNiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xuICBib3JkZXItY29sb3I6ICNmYWViY2M7XG59XG4uYWxlcnQtd2FybmluZyBociB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmN2UxYjU7XG59XG4uYWxlcnQtd2FybmluZyAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjNjY1MTJjO1xufVxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjYTk0NDQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG59XG4uYWxlcnQtZGFuZ2VyIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U0YjljMDtcbn1cbi5hbGVydC1kYW5nZXIgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzg0MzUzNDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlcyB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQwcHggMDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDBweCAwO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MHB4IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgfVxufVxuLnByb2dyZXNzIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4xKTtcbn1cbi5wcm9ncmVzcy1iYXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO1xuICAgICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO1xufVxuLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhcixcbi5wcm9ncmVzcy1iYXItc3RyaXBlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XG59XG4ucHJvZ3Jlc3MuYWN0aXZlIC5wcm9ncmVzcy1iYXIsXG4ucHJvZ3Jlc3MtYmFyLmFjdGl2ZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgLW8tYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XG59XG4ucHJvZ3Jlc3MtYmFyW2FyaWEtdmFsdWVub3c9XCIxXCJdLFxuLnByb2dyZXNzLWJhclthcmlhLXZhbHVlbm93PVwiMlwiXSB7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5wcm9ncmVzcy1iYXJbYXJpYS12YWx1ZW5vdz1cIjBcIl0ge1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xufVxuLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogICAgICAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbn1cbi5wcm9ncmVzcy1iYXItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7XG59XG4ucHJvZ3Jlc3Mtc3RyaXBlZCAucHJvZ3Jlc3MtYmFyLWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xufVxuLnByb2dyZXNzLWJhci13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcbn1cbi5wcm9ncmVzcy1zdHJpcGVkIC5wcm9ncmVzcy1iYXItd2FybmluZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4ucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XG59XG4ucHJvZ3Jlc3Mtc3RyaXBlZCAucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4ubWVkaWEsXG4ubWVkaWEtYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHpvb206IDE7XG59XG4ubWVkaWEsXG4ubWVkaWEgLm1lZGlhIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5tZWRpYTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ubWVkaWEtb2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWVkaWEtaGVhZGluZyB7XG4gIG1hcmdpbjogMCAwIDVweDtcbn1cbi5tZWRpYSA+IC5wdWxsLWxlZnQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWVkaWEgPiAucHVsbC1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1lZGlhLWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC1ncm91cCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG4ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xufVxuLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xufVxuLmxpc3QtZ3JvdXAtaXRlbSA+IC5iYWRnZSB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5saXN0LWdyb3VwLWl0ZW0gPiAuYmFkZ2UgKyAuYmFkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbmEubGlzdC1ncm91cC1pdGVtIHtcbiAgY29sb3I6ICM1NTU7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICBjb2xvcjogIzMzMztcbn1cbmEubGlzdC1ncm91cC1pdGVtOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW06Zm9jdXMge1xuICBjb2xvcjogIzU1NTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZCxcbi5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQ6aG92ZXIsXG4ubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkOmZvY3VzIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4ubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyxcbi5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQ6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZDpmb2N1cyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0LFxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZDpob3ZlciAubGlzdC1ncm91cC1pdGVtLXRleHQsXG4ubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XG4gIGNvbG9yOiAjNzc3O1xufVxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUsXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpob3Zlcixcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XG4gIGJvcmRlci1jb2xvcjogIzQyOGJjYTtcbn1cbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyxcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyxcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyxcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyA+IHNtYWxsLFxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gc21hbGwsXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcgPiBzbWFsbCxcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyA+IC5zbWFsbCxcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyA+IC5zbWFsbCxcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyA+IC5zbWFsbCB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0LFxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0LFxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6Zm9jdXMgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcbiAgY29sb3I6ICNlMWVkZjc7XG59XG4ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3Mge1xuICBjb2xvcjogIzNjNzYzZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbn1cbmEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3Mge1xuICBjb2xvcjogIzNjNzYzZDtcbn1cbmEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzczpmb2N1cyB7XG4gIGNvbG9yOiAjM2M3NjNkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBlOWM2O1xufVxuYS5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzcy5hY3RpdmUsXG5hLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmFjdGl2ZTpob3ZlcixcbmEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MuYWN0aXZlOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzc2M2Q7XG4gIGJvcmRlci1jb2xvcjogIzNjNzYzZDtcbn1cbi5saXN0LWdyb3VwLWl0ZW0taW5mbyB7XG4gIGNvbG9yOiAjMzE3MDhmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xufVxuYS5saXN0LWdyb3VwLWl0ZW0taW5mbyB7XG4gIGNvbG9yOiAjMzE3MDhmO1xufVxuYS5saXN0LWdyb3VwLWl0ZW0taW5mbyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbmEubGlzdC1ncm91cC1pdGVtLWluZm86aG92ZXIsXG5hLmxpc3QtZ3JvdXAtaXRlbS1pbmZvOmZvY3VzIHtcbiAgY29sb3I6ICMzMTcwOGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGUzZjM7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbS1pbmZvLmFjdGl2ZSxcbmEubGlzdC1ncm91cC1pdGVtLWluZm8uYWN0aXZlOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNzA4ZjtcbiAgYm9yZGVyLWNvbG9yOiAjMzE3MDhmO1xufVxuLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nIHtcbiAgY29sb3I6ICM4YTZkM2I7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nIHtcbiAgY29sb3I6ICM4YTZkM2I7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZzpob3ZlcixcbmEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmc6Zm9jdXMge1xuICBjb2xvcjogIzhhNmQzYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjJjYztcbn1cbmEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlLFxuYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZy5hY3RpdmU6aG92ZXIsXG5hLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nLmFjdGl2ZTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE2ZDNiO1xuICBib3JkZXItY29sb3I6ICM4YTZkM2I7XG59XG4ubGlzdC1ncm91cC1pdGVtLWRhbmdlciB7XG4gIGNvbG9yOiAjYTk0NDQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xufVxuYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXI6aG92ZXIsXG5hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXI6Zm9jdXMge1xuICBjb2xvcjogI2E5NDQ0MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViY2NjYztcbn1cbmEubGlzdC1ncm91cC1pdGVtLWRhbmdlci5hY3RpdmUsXG5hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIuYWN0aXZlOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmFjdGl2ZTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTk0NDQyO1xuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XG59XG4ubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLnBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNSk7XG59XG4ucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ucGFuZWwtaGVhZGluZyB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG59XG4ucGFuZWwtaGVhZGluZyA+IC5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ucGFuZWwtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLnBhbmVsLXRpdGxlID4gYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLnBhbmVsLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cbi5wYW5lbCA+IC5saXN0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wYW5lbCA+IC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBib3JkZXItd2lkdGg6IDFweCAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnBhbmVsID4gLmxpc3QtZ3JvdXA6Zmlyc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbn1cbi5wYW5lbCA+IC5saXN0LWdyb3VwOmxhc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xufVxuLnBhbmVsLWhlYWRpbmcgKyAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbn1cbi5saXN0LWdyb3VwICsgLnBhbmVsLWZvb3RlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG59XG4ucGFuZWwgPiAudGFibGUsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSxcbi5wYW5lbCA+IC5wYW5lbC1jb2xsYXBzZSA+IC50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGFuZWwgPiAudGFibGU6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbn1cbi5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG59XG4ucGFuZWwgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0aGVhZDpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0aGVhZDpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG59XG4ucGFuZWwgPiAudGFibGU6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cbi5wYW5lbCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGJvZHk6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGZvb3Q6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Zm9vdDpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGJvZHk6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGZvb3Q6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Zm9vdDpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cbi5wYW5lbCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGJvZHk6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRib2R5Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRmb290Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Zm9vdDpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGJvZHk6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGZvb3Q6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRmb290Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xufVxuLnBhbmVsID4gLnBhbmVsLWJvZHkgKyAudGFibGUsXG4ucGFuZWwgPiAucGFuZWwtYm9keSArIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG4ucGFuZWwgPiAudGFibGUgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoLFxuLnBhbmVsID4gLnRhYmxlID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci10b3A6IDA7XG59XG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMDtcbn1cbi5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRoOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGg6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGg6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0aDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0aDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0ZDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyOmZpcnN0LWNoaWxkID4gdGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkID4gdGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCxcbi5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRoLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCA+IHRoLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkID4gdGgge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6bGFzdC1jaGlsZCA+IHRkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0cjpsYXN0LWNoaWxkID4gdGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHI6bGFzdC1jaGlsZCA+IHRkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGgsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6bGFzdC1jaGlsZCA+IHRoLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0cjpsYXN0LWNoaWxkID4gdGgsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHI6bGFzdC1jaGlsZCA+IHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyOiAwO1xufVxuLnBhbmVsLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5wYW5lbC1ncm91cCAucGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ucGFuZWwtZ3JvdXAgLnBhbmVsICsgLnBhbmVsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG4ucGFuZWwtZ3JvdXAgLnBhbmVsLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDA7XG59XG4ucGFuZWwtZ3JvdXAgLnBhbmVsLWZvb3RlciArIC5wYW5lbC1jb2xsYXBzZSAucGFuZWwtYm9keSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuLnBhbmVsLWRlZmF1bHQge1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG4ucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbn1cbi5wYW5lbC1kZWZhdWx0ID4gLnBhbmVsLWhlYWRpbmcgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkZGQ7XG59XG4ucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIC5iYWRnZSB7XG4gIGNvbG9yOiAjZjVmNWY1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtZm9vdGVyICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xufVxuLnBhbmVsLXByaW1hcnkge1xuICBib3JkZXItY29sb3I6ICM0MjhiY2E7XG59XG4ucGFuZWwtcHJpbWFyeSA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XG4gIGJvcmRlci1jb2xvcjogIzQyOGJjYTtcbn1cbi5wYW5lbC1wcmltYXJ5ID4gLnBhbmVsLWhlYWRpbmcgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM0MjhiY2E7XG59XG4ucGFuZWwtcHJpbWFyeSA+IC5wYW5lbC1oZWFkaW5nIC5iYWRnZSB7XG4gIGNvbG9yOiAjNDI4YmNhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnBhbmVsLXByaW1hcnkgPiAucGFuZWwtZm9vdGVyICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNDI4YmNhO1xufVxuLnBhbmVsLXN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG59XG4ucGFuZWwtc3VjY2VzcyA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICMzYzc2M2Q7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XG4gIGJvcmRlci1jb2xvcjogI2Q2ZTljNjtcbn1cbi5wYW5lbC1zdWNjZXNzID4gLnBhbmVsLWhlYWRpbmcgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNkNmU5YzY7XG59XG4ucGFuZWwtc3VjY2VzcyA+IC5wYW5lbC1oZWFkaW5nIC5iYWRnZSB7XG4gIGNvbG9yOiAjZGZmMGQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M3NjNkO1xufVxuLnBhbmVsLXN1Y2Nlc3MgPiAucGFuZWwtZm9vdGVyICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZDZlOWM2O1xufVxuLnBhbmVsLWluZm8ge1xuICBib3JkZXItY29sb3I6ICNiY2U4ZjE7XG59XG4ucGFuZWwtaW5mbyA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICMzMTcwOGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG4gIGJvcmRlci1jb2xvcjogI2JjZThmMTtcbn1cbi5wYW5lbC1pbmZvID4gLnBhbmVsLWhlYWRpbmcgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiY2U4ZjE7XG59XG4ucGFuZWwtaW5mbyA+IC5wYW5lbC1oZWFkaW5nIC5iYWRnZSB7XG4gIGNvbG9yOiAjZDllZGY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE3MDhmO1xufVxuLnBhbmVsLWluZm8gPiAucGFuZWwtZm9vdGVyICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmNlOGYxO1xufVxuLnBhbmVsLXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmYWViY2M7XG59XG4ucGFuZWwtd2FybmluZyA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICM4YTZkM2I7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XG4gIGJvcmRlci1jb2xvcjogI2ZhZWJjYztcbn1cbi5wYW5lbC13YXJuaW5nID4gLnBhbmVsLWhlYWRpbmcgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmYWViY2M7XG59XG4ucGFuZWwtd2FybmluZyA+IC5wYW5lbC1oZWFkaW5nIC5iYWRnZSB7XG4gIGNvbG9yOiAjZmNmOGUzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE2ZDNiO1xufVxuLnBhbmVsLXdhcm5pbmcgPiAucGFuZWwtZm9vdGVyICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmFlYmNjO1xufVxuLnBhbmVsLWRhbmdlciB7XG4gIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcbn1cbi5wYW5lbC1kYW5nZXIgPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjYTk0NDQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG59XG4ucGFuZWwtZGFuZ2VyID4gLnBhbmVsLWhlYWRpbmcgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlYmNjZDE7XG59XG4ucGFuZWwtZGFuZ2VyID4gLnBhbmVsLWhlYWRpbmcgLmJhZGdlIHtcbiAgY29sb3I6ICNmMmRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOTQ0NDI7XG59XG4ucGFuZWwtZGFuZ2VyID4gLnBhbmVsLWZvb3RlciArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ViY2NkMTtcbn1cbi5lbWJlZC1yZXNwb25zaXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmVtYmVkLXJlc3BvbnNpdmUgLmVtYmVkLXJlc3BvbnNpdmUtaXRlbSxcbi5lbWJlZC1yZXNwb25zaXZlIGlmcmFtZSxcbi5lbWJlZC1yZXNwb25zaXZlIGVtYmVkLFxuLmVtYmVkLXJlc3BvbnNpdmUgb2JqZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAwO1xufVxuLmVtYmVkLXJlc3BvbnNpdmUuZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OSB7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG59XG4uZW1iZWQtcmVzcG9uc2l2ZS5lbWJlZC1yZXNwb25zaXZlLTRieTMge1xuICBwYWRkaW5nLWJvdHRvbTogNzUlO1xufVxuLndlbGwge1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xufVxuLndlbGwgYmxvY2txdW90ZSB7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xNSk7XG59XG4ud2VsbC1sZyB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi53ZWxsLXNtIHtcbiAgcGFkZGluZzogOXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uY2xvc2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcbiAgb3BhY2l0eTogLjI7XG59XG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XG4gIG9wYWNpdHk6IC41O1xufVxuYnV0dG9uLmNsb3NlIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG4ubW9kYWwtb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA1MDtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdXRsaW5lOiAwO1xufVxuLm1vZGFsLmZhZGUgLm1vZGFsLWRpYWxvZyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2Utb3V0O1xuICAgICAgIC1vLXRyYW5zaXRpb246ICAgICAgLW8tdHJhbnNmb3JtIC4zcyBlYXNlLW91dDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjUlLCAwKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yNSUsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTI1JSwgMCk7XG59XG4ubW9kYWwuaW4gLm1vZGFsLWRpYWxvZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG4ubW9kYWwtb3BlbiAubW9kYWwge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubW9kYWwtZGlhbG9nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAxMHB4O1xufVxuLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDlweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA5cHggcmdiYSgwLCAwLCAwLCAuNSk7XG59XG4ubW9kYWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA0MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5tb2RhbC1iYWNrZHJvcC5mYWRlIHtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvcGFjaXR5OiAwO1xufVxuLm1vZGFsLWJhY2tkcm9wLmluIHtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcbiAgb3BhY2l0eTogLjU7XG59XG4ubW9kYWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogMTYuNDI4NTcxNDNweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4ubW9kYWwtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xufVxuLm1vZGFsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubW9kYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xufVxuLm1vZGFsLWZvb3RlciAuYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubW9kYWwtZm9vdGVyIC5idG4tZ3JvdXAgLmJ0biArIC5idG4ge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5tb2RhbC1mb290ZXIgLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5tb2RhbC1zY3JvbGxiYXItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgfVxuICAubW9kYWwtY29udGVudCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgfVxuICAubW9kYWwtc20ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tb2RhbC1sZyB7XG4gICAgd2lkdGg6IDkwMHB4O1xuICB9XG59XG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA3MDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvcGFjaXR5OiAwO1xufVxuLnRvb2x0aXAuaW4ge1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTApO1xuICBvcGFjaXR5OiAuOTtcbn1cbi50b29sdGlwLnRvcCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuLnRvb2x0aXAucmlnaHQge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi50b29sdGlwLmJvdHRvbSB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4udG9vbHRpcC5sZWZ0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuLnRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi50b29sdGlwLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLnRvb2x0aXAudG9wIC50b29sdGlwLWFycm93IHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweCA1cHggMDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDtcbn1cbi50b29sdGlwLnRvcC1sZWZ0IC50b29sdGlwLWFycm93IHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwO1xufVxuLnRvb2x0aXAudG9wLXJpZ2h0IC50b29sdGlwLWFycm93IHtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItd2lkdGg6IDVweCA1cHggMDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDtcbn1cbi50b29sdGlwLnJpZ2h0IC50b29sdGlwLWFycm93IHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCA1cHggMDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwO1xufVxuLnRvb2x0aXAubGVmdCAudG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggMCA1cHggNXB4O1xuICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDtcbn1cbi50b29sdGlwLmJvdHRvbSAudG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDA7XG59XG4udG9vbHRpcC5ib3R0b20tbGVmdCAudG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogMDtcbiAgbGVmdDogNXB4O1xuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcbn1cbi50b29sdGlwLmJvdHRvbS1yaWdodCAudG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDA7XG59XG4ucG9wb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDYwO1xuICBkaXNwbGF5OiBub25lO1xuICBtYXgtd2lkdGg6IDI3NnB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbn1cbi5wb3BvdmVyLnRvcCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLnBvcG92ZXIucmlnaHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wb3BvdmVyLmJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucG9wb3Zlci5sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLnBvcG92ZXItdGl0bGUge1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG59XG4ucG9wb3Zlci1jb250ZW50IHtcbiAgcGFkZGluZzogOXB4IDE0cHg7XG59XG4ucG9wb3ZlciA+IC5hcnJvdyxcbi5wb3BvdmVyID4gLmFycm93OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5wb3BvdmVyID4gLmFycm93IHtcbiAgYm9yZGVyLXdpZHRoOiAxMXB4O1xufVxuLnBvcG92ZXIgPiAuYXJyb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItd2lkdGg6IDEwcHg7XG59XG4ucG9wb3Zlci50b3AgPiAuYXJyb3cge1xuICBib3R0b206IC0xMXB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTFweDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk5OTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuLnBvcG92ZXIudG9wID4gLmFycm93OmFmdGVyIHtcbiAgYm90dG9tOiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgY29udGVudDogXCIgXCI7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG4ucG9wb3Zlci5yaWdodCA+IC5hcnJvdyB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAtMTFweDtcbiAgbWFyZ2luLXRvcDogLTExcHg7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzk5OTtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuLnBvcG92ZXIucmlnaHQgPiAuYXJyb3c6YWZ0ZXIge1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiAxcHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuLnBvcG92ZXIuYm90dG9tID4gLmFycm93IHtcbiAgdG9wOiAtMTFweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTExcHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5OTk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcbn1cbi5wb3BvdmVyLmJvdHRvbSA+IC5hcnJvdzphZnRlciB7XG4gIHRvcDogMXB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xufVxuLnBvcG92ZXIubGVmdCA+IC5hcnJvdyB7XG4gIHRvcDogNTAlO1xuICByaWdodDogLTExcHg7XG4gIG1hcmdpbi10b3A6IC0xMXB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjOTk5O1xuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xufVxuLnBvcG92ZXIubGVmdCA+IC5hcnJvdzphZnRlciB7XG4gIHJpZ2h0OiAxcHg7XG4gIGJvdHRvbTogLTEwcHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xufVxuLmNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcm91c2VsLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJvdXNlbC1pbm5lciA+IC5pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC42cyBlYXNlLWluLW91dCBsZWZ0O1xuICAgICAgIC1vLXRyYW5zaXRpb246IC42cyBlYXNlLWluLW91dCBsZWZ0O1xuICAgICAgICAgIHRyYW5zaXRpb246IC42cyBlYXNlLWluLW91dCBsZWZ0O1xufVxuLmNhcm91c2VsLWlubmVyID4gLml0ZW0gPiBpbWcsXG4uY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSA+IGEgPiBpbWcge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5jYXJvdXNlbC1pbm5lciA+IC5hY3RpdmUsXG4uY2Fyb3VzZWwtaW5uZXIgPiAubmV4dCxcbi5jYXJvdXNlbC1pbm5lciA+IC5wcmV2IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2Fyb3VzZWwtaW5uZXIgPiAuYWN0aXZlIHtcbiAgbGVmdDogMDtcbn1cbi5jYXJvdXNlbC1pbm5lciA+IC5uZXh0LFxuLmNhcm91c2VsLWlubmVyID4gLnByZXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2Fyb3VzZWwtaW5uZXIgPiAubmV4dCB7XG4gIGxlZnQ6IDEwMCU7XG59XG4uY2Fyb3VzZWwtaW5uZXIgPiAucHJldiB7XG4gIGxlZnQ6IC0xMDAlO1xufVxuLmNhcm91c2VsLWlubmVyID4gLm5leHQubGVmdCxcbi5jYXJvdXNlbC1pbm5lciA+IC5wcmV2LnJpZ2h0IHtcbiAgbGVmdDogMDtcbn1cbi5jYXJvdXNlbC1pbm5lciA+IC5hY3RpdmUubGVmdCB7XG4gIGxlZnQ6IC0xMDAlO1xufVxuLmNhcm91c2VsLWlubmVyID4gLmFjdGl2ZS5yaWdodCB7XG4gIGxlZnQ6IDEwMCU7XG59XG4uY2Fyb3VzZWwtY29udHJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIC42KTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcbiAgb3BhY2l0eTogLjU7XG59XG4uY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgwLCAwLCAwLCAuNSkgMCUsIHJnYmEoMCwgMCwgMCwgLjAwMDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDAsIDAsIDAsIC41KSAwJSwgcmdiYSgwLCAwLCAwLCAuMDAwMSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoMCwgMCwgMCwgLjUpKSwgdG8ocmdiYSgwLCAwLCAwLCAuMDAwMSkpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgLjUpIDAlLCByZ2JhKDAsIDAsIDAsIC4wMDAxKSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzgwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyMwMDAwMDAwMCcsIEdyYWRpZW50VHlwZT0xKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuLmNhcm91c2VsLWNvbnRyb2wucmlnaHQge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgwLCAwLCAwLCAuMDAwMSkgMCUsIHJnYmEoMCwgMCwgMCwgLjUpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDAsIDAsIDAsIC4wMDAxKSAwJSwgcmdiYSgwLCAwLCAwLCAuNSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoMCwgMCwgMCwgLjAwMDEpKSwgdG8ocmdiYSgwLCAwLCAwLCAuNSkpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgLjAwMDEpIDAlLCByZ2JhKDAsIDAsIDAsIC41KSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzAwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyM4MDAwMDAwMCcsIEdyYWRpZW50VHlwZT0xKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuLmNhcm91c2VsLWNvbnRyb2w6aG92ZXIsXG4uY2Fyb3VzZWwtY29udHJvbDpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT05MCk7XG4gIG91dGxpbmU6IDA7XG4gIG9wYWNpdHk6IC45O1xufVxuLmNhcm91c2VsLWNvbnRyb2wgLmljb24tcHJldixcbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHQsXG4uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCxcbi5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYsXG4uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCB7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLmNhcm91c2VsLWNvbnRyb2wgLmljb24tbmV4dCxcbi5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCB7XG4gIHJpZ2h0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2LFxuLmNhcm91c2VsLWNvbnRyb2wgLmljb24tbmV4dCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBmb250LWZhbWlseTogc2VyaWY7XG59XG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXFxcMjAzOSc7XG59XG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXFxcMjAzYSc7XG59XG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDE1O1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luOiAxcHg7XG4gIHRleHQtaW5kZW50OiAtOTk5cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCBcXFxcOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1JTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAxNSU7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAuNik7XG59XG4uY2Fyb3VzZWwtY2FwdGlvbiAuYnRuIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCxcbiAgLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0LFxuICAuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2LFxuICAuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0IHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LFxuICAuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2IHtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIH1cbiAgLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0LFxuICAuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICB9XG4gIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICByaWdodDogMjAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgYm90dG9tOiAyMHB4O1xuICB9XG59XG4uY2xlYXJmaXg6YmVmb3JlLFxuLmNsZWFyZml4OmFmdGVyLFxuLmRsLWhvcml6b250YWwgZGQ6YmVmb3JlLFxuLmRsLWhvcml6b250YWwgZGQ6YWZ0ZXIsXG4uY29udGFpbmVyOmJlZm9yZSxcbi5jb250YWluZXI6YWZ0ZXIsXG4uY29udGFpbmVyLWZsdWlkOmJlZm9yZSxcbi5jb250YWluZXItZmx1aWQ6YWZ0ZXIsXG4ucm93OmJlZm9yZSxcbi5yb3c6YWZ0ZXIsXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmJlZm9yZSxcbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXA6YWZ0ZXIsXG4uYnRuLXRvb2xiYXI6YmVmb3JlLFxuLmJ0bi10b29sYmFyOmFmdGVyLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6YmVmb3JlLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6YWZ0ZXIsXG4ubmF2OmJlZm9yZSxcbi5uYXY6YWZ0ZXIsXG4ubmF2YmFyOmJlZm9yZSxcbi5uYXZiYXI6YWZ0ZXIsXG4ubmF2YmFyLWhlYWRlcjpiZWZvcmUsXG4ubmF2YmFyLWhlYWRlcjphZnRlcixcbi5uYXZiYXItY29sbGFwc2U6YmVmb3JlLFxuLm5hdmJhci1jb2xsYXBzZTphZnRlcixcbi5wYWdlcjpiZWZvcmUsXG4ucGFnZXI6YWZ0ZXIsXG4ucGFuZWwtYm9keTpiZWZvcmUsXG4ucGFuZWwtYm9keTphZnRlcixcbi5tb2RhbC1mb290ZXI6YmVmb3JlLFxuLm1vZGFsLWZvb3RlcjphZnRlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjb250ZW50OiBcIiBcIjtcbn1cbi5jbGVhcmZpeDphZnRlcixcbi5kbC1ob3Jpem9udGFsIGRkOmFmdGVyLFxuLmNvbnRhaW5lcjphZnRlcixcbi5jb250YWluZXItZmx1aWQ6YWZ0ZXIsXG4ucm93OmFmdGVyLFxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cDphZnRlcixcbi5idG4tdG9vbGJhcjphZnRlcixcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOmFmdGVyLFxuLm5hdjphZnRlcixcbi5uYXZiYXI6YWZ0ZXIsXG4ubmF2YmFyLWhlYWRlcjphZnRlcixcbi5uYXZiYXItY29sbGFwc2U6YWZ0ZXIsXG4ucGFnZXI6YWZ0ZXIsXG4ucGFuZWwtYm9keTphZnRlcixcbi5tb2RhbC1mb290ZXI6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cbi5jZW50ZXItYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4ucHVsbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi50ZXh0LWhpZGUge1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuLmFmZml4IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuQC1tcy12aWV3cG9ydCB7XG4gIHdpZHRoOiBkZXZpY2Utd2lkdGg7XG59XG4udmlzaWJsZS14cyxcbi52aXNpYmxlLXNtLFxuLnZpc2libGUtbWQsXG4udmlzaWJsZS1sZyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi52aXNpYmxlLXhzLWJsb2NrLFxuLnZpc2libGUteHMtaW5saW5lLFxuLnZpc2libGUteHMtaW5saW5lLWJsb2NrLFxuLnZpc2libGUtc20tYmxvY2ssXG4udmlzaWJsZS1zbS1pbmxpbmUsXG4udmlzaWJsZS1zbS1pbmxpbmUtYmxvY2ssXG4udmlzaWJsZS1tZC1ibG9jayxcbi52aXNpYmxlLW1kLWlubGluZSxcbi52aXNpYmxlLW1kLWlubGluZS1ibG9jayxcbi52aXNpYmxlLWxnLWJsb2NrLFxuLnZpc2libGUtbGctaW5saW5lLFxuLnZpc2libGUtbGctaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC52aXNpYmxlLXhzIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIHRhYmxlLnZpc2libGUteHMge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIHRyLnZpc2libGUteHMge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG4gIHRoLnZpc2libGUteHMsXG4gIHRkLnZpc2libGUteHMge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC52aXNpYmxlLXhzLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnZpc2libGUteHMtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC52aXNpYmxlLXhzLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC52aXNpYmxlLXNtIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIHRhYmxlLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIHRyLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG4gIHRoLnZpc2libGUtc20sXG4gIHRkLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnZpc2libGUtc20tYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC52aXNpYmxlLXNtLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC52aXNpYmxlLXNtLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAudmlzaWJsZS1tZCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICB0YWJsZS52aXNpYmxlLW1kIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuICB0ci52aXNpYmxlLW1kIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuICB0aC52aXNpYmxlLW1kLFxuICB0ZC52aXNpYmxlLW1kIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAudmlzaWJsZS1tZC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC52aXNpYmxlLW1kLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAudmlzaWJsZS1tZC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC52aXNpYmxlLWxnIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIHRhYmxlLnZpc2libGUtbGcge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIHRyLnZpc2libGUtbGcge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG4gIHRoLnZpc2libGUtbGcsXG4gIHRkLnZpc2libGUtbGcge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudmlzaWJsZS1sZy1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudmlzaWJsZS1sZy1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC52aXNpYmxlLWxnLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGlkZGVuLXhzIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5oaWRkZW4tc20ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5oaWRkZW4tbWQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaGlkZGVuLWxnIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLXByaW50IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIHByaW50IHtcbiAgLnZpc2libGUtcHJpbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGFibGUudmlzaWJsZS1wcmludCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbiAgdHIudmlzaWJsZS1wcmludCB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGgudmlzaWJsZS1wcmludCxcbiAgdGQudmlzaWJsZS1wcmludCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBwcmludCB7XG4gIC52aXNpYmxlLXByaW50LWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1pbmxpbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgcHJpbnQge1xuICAudmlzaWJsZS1wcmludC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgcHJpbnQge1xuICAudmlzaWJsZS1wcmludC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgcHJpbnQge1xuICAuaGlkZGVuLXByaW50IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJvb3RzdHJhcC5jc3MubWFwICovXG4iXX0= */</style></template></dom-module>
  `;
  document.head.appendChild($_documentContainer.content);
}
