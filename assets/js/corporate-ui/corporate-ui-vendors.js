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
  <dom-module id="corporate-ui-vendors"><template><style>/*
Version: 3.5.2 Timestamp: Sat Nov  1 14:43:36 EDT 2014
*/
.select2-container {
    margin: 0;
    position: relative;
    display: inline-block;
    /* inline-block for ie7 */
    zoom: 1;
    *display: inline;
    vertical-align: middle;
}
.select2-container,
.select2-drop,
.select2-search,
.select2-search input {
  /*
    Force border-box so that % widths fit the parent
    container without overlap because of margin/padding.
    More Info : http://www.quirksmode.org/css/box.html
  */
  -webkit-box-sizing: border-box; /* webkit */
     -moz-box-sizing: border-box; /* firefox */
          box-sizing: border-box; /* css3 */
}
.select2-container .select2-choice {
    display: block;
    height: 26px;
    padding: 0 0 0 8px;
    overflow: hidden;
    position: relative;

    border: 1px solid #aaa;
    white-space: nowrap;
    line-height: 26px;
    color: #444;
    text-decoration: none;

    border-radius: 4px;

    background-clip: padding-box;

    -webkit-touch-callout: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;

    background-color: #fff;
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #eee), color-stop(0.5, #fff));
    background-image: -webkit-linear-gradient(center bottom, #eee 0%, #fff 50%);
    background-image: -moz-linear-gradient(center bottom, #eee 0%, #fff 50%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#ffffff', endColorstr = '#eeeeee', GradientType = 0);
    background-image: linear-gradient(to top, #eee 0%, #fff 50%);
}
html[dir="rtl"] .select2-container .select2-choice {
    padding: 0 8px 0 0;
}
.select2-container.select2-drop-above .select2-choice {
    border-bottom-color: #aaa;

    border-radius: 0 0 4px 4px;

    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #eee), color-stop(0.9, #fff));
    background-image: -webkit-linear-gradient(center bottom, #eee 0%, #fff 90%);
    background-image: -moz-linear-gradient(center bottom, #eee 0%, #fff 90%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#eeeeee', GradientType=0);
    background-image: linear-gradient(to bottom, #eee 0%, #fff 90%);
}
.select2-container.select2-allowclear .select2-choice .select2-chosen {
    margin-right: 42px;
}
.select2-container .select2-choice > .select2-chosen {
    margin-right: 26px;
    display: block;
    overflow: hidden;

    white-space: nowrap;

    text-overflow: ellipsis;
    float: none;
    width: auto;
}
html[dir="rtl"] .select2-container .select2-choice > .select2-chosen {
    margin-left: 26px;
    margin-right: 0;
}
.select2-container .select2-choice abbr {
    display: none;
    width: 12px;
    height: 12px;
    position: absolute;
    right: 24px;
    top: 8px;

    font-size: 1px;
    text-decoration: none;

    border: 0;
    background: url('select2.png') right top no-repeat;
    cursor: pointer;
    outline: 0;
}
.select2-container.select2-allowclear .select2-choice abbr {
    display: inline-block;
}
.select2-container .select2-choice abbr:hover {
    background-position: right -11px;
    cursor: pointer;
}
.select2-drop-mask {
    border: 0;
    margin: 0;
    padding: 0;
    position: fixed;
    left: 0;
    top: 0;
    min-height: 100%;
    min-width: 100%;
    height: auto;
    width: auto;
    opacity: 0;
    z-index: 9998;
    /* styles required for IE to work */
    background-color: #fff;
    filter: alpha(opacity=0);
}
.select2-drop {
    width: 100%;
    margin-top: -1px;
    position: absolute;
    z-index: 9999;
    top: 100%;

    background: #fff;
    color: #000;
    border: 1px solid #aaa;
    border-top: 0;

    border-radius: 0 0 4px 4px;

    -webkit-box-shadow: 0 4px 5px rgba(0, 0, 0, .15);
            box-shadow: 0 4px 5px rgba(0, 0, 0, .15);
}
.select2-drop.select2-drop-above {
    margin-top: 1px;
    border-top: 1px solid #aaa;
    border-bottom: 0;

    border-radius: 4px 4px 0 0;

    -webkit-box-shadow: 0 -4px 5px rgba(0, 0, 0, .15);
            box-shadow: 0 -4px 5px rgba(0, 0, 0, .15);
}
.select2-drop-active {
    border: 1px solid #5897fb;
    border-top: none;
}
.select2-drop.select2-drop-above.select2-drop-active {
    border-top: 1px solid #5897fb;
}
.select2-drop-auto-width {
    border-top: 1px solid #aaa;
    width: auto;
}
.select2-drop-auto-width .select2-search {
    padding-top: 4px;
}
.select2-container .select2-choice .select2-arrow {
    display: inline-block;
    width: 18px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;

    border-left: 1px solid #aaa;
    border-radius: 0 4px 4px 0;

    background-clip: padding-box;

    background: #ccc;
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #ccc), color-stop(0.6, #eee));
    background-image: -webkit-linear-gradient(center bottom, #ccc 0%, #eee 60%);
    background-image: -moz-linear-gradient(center bottom, #ccc 0%, #eee 60%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#eeeeee', endColorstr = '#cccccc', GradientType = 0);
    background-image: linear-gradient(to top, #ccc 0%, #eee 60%);
}
html[dir="rtl"] .select2-container .select2-choice .select2-arrow {
    left: 0;
    right: auto;

    border-left: none;
    border-right: 1px solid #aaa;
    border-radius: 4px 0 0 4px;
}
.select2-container .select2-choice .select2-arrow b {
    display: block;
    width: 100%;
    height: 100%;
    background: url('select2.png') no-repeat 0 1px;
}
html[dir="rtl"] .select2-container .select2-choice .select2-arrow b {
    background-position: 2px 1px;
}
.select2-search {
    display: inline-block;
    width: 100%;
    min-height: 26px;
    margin: 0;
    padding-left: 4px;
    padding-right: 4px;

    position: relative;
    z-index: 10000;

    white-space: nowrap;
}
.select2-search input {
    width: 100%;
    height: auto !important;
    min-height: 26px;
    padding: 4px 20px 4px 5px;
    margin: 0;

    outline: 0;
    font-family: sans-serif;
    font-size: 1em;

    border: 1px solid #aaa;
    border-radius: 0;

    -webkit-box-shadow: none;
            box-shadow: none;

    background: #fff url('select2.png') no-repeat 100% -22px;
    background: url('select2.png') no-repeat 100% -22px, -webkit-gradient(linear, left bottom, left top, color-stop(0.85, #fff), color-stop(0.99, #eee));
    background: url('select2.png') no-repeat 100% -22px, -webkit-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2.png') no-repeat 100% -22px, -moz-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2.png') no-repeat 100% -22px, linear-gradient(to bottom, #fff 85%, #eee 99%) 0 0;
}
html[dir="rtl"] .select2-search input {
    padding: 4px 5px 4px 20px;

    background: #fff url('select2.png') no-repeat -37px -22px;
    background: url('select2.png') no-repeat -37px -22px, -webkit-gradient(linear, left bottom, left top, color-stop(0.85, #fff), color-stop(0.99, #eee));
    background: url('select2.png') no-repeat -37px -22px, -webkit-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2.png') no-repeat -37px -22px, -moz-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2.png') no-repeat -37px -22px, linear-gradient(to bottom, #fff 85%, #eee 99%) 0 0;
}
.select2-drop.select2-drop-above .select2-search input {
    margin-top: 4px;
}
.select2-search input.select2-active {
    background: #fff url('select2-spinner.gif') no-repeat 100%;
    background: url('select2-spinner.gif') no-repeat 100%, -webkit-gradient(linear, left bottom, left top, color-stop(0.85, #fff), color-stop(0.99, #eee));
    background: url('select2-spinner.gif') no-repeat 100%, -webkit-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2-spinner.gif') no-repeat 100%, -moz-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2-spinner.gif') no-repeat 100%, linear-gradient(to bottom, #fff 85%, #eee 99%) 0 0;
}
.select2-container-active .select2-choice,
.select2-container-active .select2-choices {
    border: 1px solid #5897fb;
    outline: none;

    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .3);
            box-shadow: 0 0 5px rgba(0, 0, 0, .3);
}
.select2-dropdown-open .select2-choice {
    border-bottom-color: transparent;
    -webkit-box-shadow: 0 1px 0 #fff inset;
            box-shadow: 0 1px 0 #fff inset;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    background-color: #eee;
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #fff), color-stop(0.5, #eee));
    background-image: -webkit-linear-gradient(center bottom, #fff 0%, #eee 50%);
    background-image: -moz-linear-gradient(center bottom, #fff 0%, #eee 50%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#ffffff', GradientType=0);
    background-image: linear-gradient(to top, #fff 0%, #eee 50%);
}
.select2-dropdown-open.select2-drop-above .select2-choice,
.select2-dropdown-open.select2-drop-above .select2-choices {
    border: 1px solid #5897fb;
    border-top-color: transparent;

    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff), color-stop(0.5, #eee));
    background-image: -webkit-linear-gradient(center top, #fff 0%, #eee 50%);
    background-image: -moz-linear-gradient(center top, #fff 0%, #eee 50%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#ffffff', GradientType=0);
    background-image: linear-gradient(to bottom, #fff 0%, #eee 50%);
}
.select2-dropdown-open .select2-choice .select2-arrow {
    background: transparent;
    border-left: none;
    filter: none;
}
html[dir="rtl"] .select2-dropdown-open .select2-choice .select2-arrow {
    border-right: none;
}
.select2-dropdown-open .select2-choice .select2-arrow b {
    background-position: -18px 1px;
}
html[dir="rtl"] .select2-dropdown-open .select2-choice .select2-arrow b {
    background-position: -16px 1px;
}
.select2-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
/* results */
.select2-results {
    max-height: 200px;
    padding: 0 0 0 4px;
    margin: 4px 4px 4px 0;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html[dir="rtl"] .select2-results {
    padding: 0 4px 0 0;
    margin: 4px 0 4px 4px;
}
.select2-results ul.select2-result-sub {
    margin: 0;
    padding-left: 0;
}
.select2-results li {
    list-style: none;
    display: list-item;
    background-image: none;
}
.select2-results li.select2-result-with-children > .select2-result-label {
    font-weight: bold;
}
.select2-results .select2-result-label {
    padding: 3px 7px 4px;
    margin: 0;
    cursor: pointer;

    min-height: 1em;

    -webkit-touch-callout: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
}
.select2-results-dept-1 .select2-result-label { padding-left: 20px }
.select2-results-dept-2 .select2-result-label { padding-left: 40px }
.select2-results-dept-3 .select2-result-label { padding-left: 60px }
.select2-results-dept-4 .select2-result-label { padding-left: 80px }
.select2-results-dept-5 .select2-result-label { padding-left: 100px }
.select2-results-dept-6 .select2-result-label { padding-left: 110px }
.select2-results-dept-7 .select2-result-label { padding-left: 120px }
.select2-results .select2-highlighted {
    background: #3875d7;
    color: #fff;
}
.select2-results li em {
    background: #feffde;
    font-style: normal;
}
.select2-results .select2-highlighted em {
    background: transparent;
}
.select2-results .select2-highlighted ul {
    background: #fff;
    color: #000;
}
.select2-results .select2-no-results,
.select2-results .select2-searching,
.select2-results .select2-ajax-error,
.select2-results .select2-selection-limit {
    background: #f4f4f4;
    display: list-item;
    padding-left: 5px;
}
/*
disabled look for disabled choices in the results dropdown
*/
.select2-results .select2-disabled.select2-highlighted {
    color: #666;
    background: #f4f4f4;
    display: list-item;
    cursor: default;
}
.select2-results .select2-disabled {
  background: #f4f4f4;
  display: list-item;
  cursor: default;
}
.select2-results .select2-selected {
    display: none;
}
.select2-more-results.select2-active {
    background: #f4f4f4 url('select2-spinner.gif') no-repeat 100%;
}
.select2-results .select2-ajax-error {
    background: rgba(255, 50, 50, .2);
}
.select2-more-results {
    background: #f4f4f4;
    display: list-item;
}
/* disabled styles */
.select2-container.select2-container-disabled .select2-choice {
    background-color: #f4f4f4;
    background-image: none;
    border: 1px solid #ddd;
    cursor: default;
}
.select2-container.select2-container-disabled .select2-choice .select2-arrow {
    background-color: #f4f4f4;
    background-image: none;
    border-left: 0;
}
.select2-container.select2-container-disabled .select2-choice abbr {
    display: none;
}
/* multiselect */
.select2-container-multi .select2-choices {
    height: auto !important;
    height: 1%;
    margin: 0;
    padding: 0 5px 0 0;
    position: relative;

    border: 1px solid #aaa;
    cursor: text;
    overflow: hidden;

    background-color: #fff;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, color-stop(1%, #eee), color-stop(15%, #fff));
    background-image: -webkit-linear-gradient(top, #eee 1%, #fff 15%);
    background-image: -moz-linear-gradient(top, #eee 1%, #fff 15%);
    background-image: linear-gradient(to bottom, #eee 1%, #fff 15%);
}
html[dir="rtl"] .select2-container-multi .select2-choices {
    padding: 0 0 0 5px;
}
.select2-locked {
  padding: 3px 5px 3px 5px !important;
}
.select2-container-multi .select2-choices {
    min-height: 26px;
}
.select2-container-multi.select2-container-active .select2-choices {
    border: 1px solid #5897fb;
    outline: none;

    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .3);
            box-shadow: 0 0 5px rgba(0, 0, 0, .3);
}
.select2-container-multi .select2-choices li {
    float: left;
    list-style: none;
}
html[dir="rtl"] .select2-container-multi .select2-choices li
{
    float: right;
}
.select2-container-multi .select2-choices .select2-search-field {
    margin: 0;
    padding: 0;
    white-space: nowrap;
}
.select2-container-multi .select2-choices .select2-search-field input {
    padding: 5px;
    margin: 1px 0;

    font-family: sans-serif;
    font-size: 100%;
    color: #666;
    outline: 0;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
    background: transparent !important;
}
.select2-container-multi .select2-choices .select2-search-field input.select2-active {
    background: #fff url('select2-spinner.gif') no-repeat 100% !important;
}
.select2-default {
    color: #999 !important;
}
.select2-container-multi .select2-choices .select2-search-choice {
    padding: 3px 5px 3px 18px;
    margin: 3px 0 3px 5px;
    position: relative;

    line-height: 13px;
    color: #333;
    cursor: default;
    border: 1px solid #aaaaaa;

    border-radius: 3px;

    -webkit-box-shadow: 0 0 2px #fff inset, 0 1px 0 rgba(0, 0, 0, 0.05);
            box-shadow: 0 0 2px #fff inset, 0 1px 0 rgba(0, 0, 0, 0.05);

    background-clip: padding-box;

    -webkit-touch-callout: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;

    background-color: #e4e4e4;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#f4f4f4', GradientType=0);
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, color-stop(20%, #f4f4f4), color-stop(50%, #f0f0f0), color-stop(52%, #e8e8e8), color-stop(100%, #eee));
    background-image: -webkit-linear-gradient(top, #f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
    background-image: -moz-linear-gradient(top, #f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
    background-image: linear-gradient(to bottom, #f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
}
html[dir="rtl"] .select2-container-multi .select2-choices .select2-search-choice
{
    margin: 3px 5px 3px 0;
    padding: 3px 18px 3px 5px;
}
.select2-container-multi .select2-choices .select2-search-choice .select2-chosen {
    cursor: default;
}
.select2-container-multi .select2-choices .select2-search-choice-focus {
    background: #d4d4d4;
}
.select2-search-choice-close {
    display: block;
    width: 12px;
    height: 13px;
    position: absolute;
    right: 3px;
    top: 4px;

    font-size: 1px;
    outline: none;
    background: url('select2.png') right top no-repeat;
}
html[dir="rtl"] .select2-search-choice-close {
    right: auto;
    left: 3px;
}
.select2-container-multi .select2-search-choice-close {
    left: 3px;
}
html[dir="rtl"] .select2-container-multi .select2-search-choice-close {
    left: auto;
    right: 2px;
}
.select2-container-multi .select2-choices .select2-search-choice .select2-search-choice-close:hover {
  background-position: right -11px;
}
.select2-container-multi .select2-choices .select2-search-choice-focus .select2-search-choice-close {
    background-position: right -11px;
}
/* disabled styles */
.select2-container-multi.select2-container-disabled .select2-choices {
    background-color: #f4f4f4;
    background-image: none;
    border: 1px solid #ddd;
    cursor: default;
}
.select2-container-multi.select2-container-disabled .select2-choices .select2-search-choice {
    padding: 3px 5px 3px 5px;
    border: 1px solid #ddd;
    background-image: none;
    background-color: #f4f4f4;
}
.select2-container-multi.select2-container-disabled .select2-choices .select2-search-choice .select2-search-choice-close {    display: none;
    background: none;
}
/* end multiselect */
.select2-result-selectable .select2-match,
.select2-result-unselectable .select2-match {
    text-decoration: underline;
}
.select2-offscreen, .select2-offscreen:focus {
    clip: rect(0 0 0 0) !important;
    width: 1px !important;
    height: 1px !important;
    border: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    position: absolute !important;
    outline: 0 !important;
    left: 0px !important;
    top: 0px !important;
}
.select2-display-none {
    display: none;
}
.select2-measure-scrollbar {
    position: absolute;
    top: -10000px;
    left: -10000px;
    width: 100px;
    height: 100px;
    overflow: scroll;
}
/* Retina-ize icons */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-resolution: 2dppx)  {
    .select2-search input,
    .select2-search-choice-close,
    .select2-container .select2-choice abbr,
    .select2-container .select2-choice .select2-arrow b {
        background-image: url('select2x2.png') !important;
        background-repeat: no-repeat !important;
        background-size: 60px 40px !important;
    }

    .select2-search input {
        background-position: 100% -21px !important;
    }
}
/*
Version: 3.5.2 Timestamp: Sat Nov  1 14:43:36 EDT 2014
*/
.select2-container {
    margin: 0;
    position: relative;
    display: inline-block;
    /* inline-block for ie7 */
    zoom: 1;
    *display: inline;
    vertical-align: middle;
}
.select2-container,
.select2-drop,
.select2-search,
.select2-search input {
  /*
    Force border-box so that % widths fit the parent
    container without overlap because of margin/padding.
    More Info : http://www.quirksmode.org/css/box.html
  */
  -webkit-box-sizing: border-box; /* webkit */
     -moz-box-sizing: border-box; /* firefox */
          box-sizing: border-box; /* css3 */
}
.select2-container .select2-choice {
    display: block;
    height: 26px;
    padding: 0 0 0 8px;
    overflow: hidden;
    position: relative;

    border: 1px solid #aaa;
    white-space: nowrap;
    line-height: 26px;
    color: #444;
    text-decoration: none;

    border-radius: 4px;

    background-clip: padding-box;

    -webkit-touch-callout: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;

    background-color: #fff;
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #eee), color-stop(0.5, #fff));
    background-image: -webkit-linear-gradient(center bottom, #eee 0%, #fff 50%);
    background-image: -moz-linear-gradient(center bottom, #eee 0%, #fff 50%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#ffffff', endColorstr = '#eeeeee', GradientType = 0);
    background-image: linear-gradient(to top, #eee 0%, #fff 50%);
}
html[dir="rtl"] .select2-container .select2-choice {
    padding: 0 8px 0 0;
}
.select2-container.select2-drop-above .select2-choice {
    border-bottom-color: #aaa;

    border-radius: 0 0 4px 4px;

    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #eee), color-stop(0.9, #fff));
    background-image: -webkit-linear-gradient(center bottom, #eee 0%, #fff 90%);
    background-image: -moz-linear-gradient(center bottom, #eee 0%, #fff 90%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#eeeeee', GradientType=0);
    background-image: linear-gradient(to bottom, #eee 0%, #fff 90%);
}
.select2-container.select2-allowclear .select2-choice .select2-chosen {
    margin-right: 42px;
}
.select2-container .select2-choice > .select2-chosen {
    margin-right: 26px;
    display: block;
    overflow: hidden;

    white-space: nowrap;

    text-overflow: ellipsis;
    float: none;
    width: auto;
}
html[dir="rtl"] .select2-container .select2-choice > .select2-chosen {
    margin-left: 26px;
    margin-right: 0;
}
.select2-container .select2-choice abbr {
    display: none;
    width: 12px;
    height: 12px;
    position: absolute;
    right: 24px;
    top: 8px;

    font-size: 1px;
    text-decoration: none;

    border: 0;
    background: url('select2.png') right top no-repeat;
    cursor: pointer;
    outline: 0;
}
.select2-container.select2-allowclear .select2-choice abbr {
    display: inline-block;
}
.select2-container .select2-choice abbr:hover {
    background-position: right -11px;
    cursor: pointer;
}
.select2-drop-mask {
    border: 0;
    margin: 0;
    padding: 0;
    position: fixed;
    left: 0;
    top: 0;
    min-height: 100%;
    min-width: 100%;
    height: auto;
    width: auto;
    opacity: 0;
    z-index: 9998;
    /* styles required for IE to work */
    background-color: #fff;
    filter: alpha(opacity=0);
}
.select2-drop {
    width: 100%;
    margin-top: -1px;
    position: absolute;
    z-index: 9999;
    top: 100%;

    background: #fff;
    color: #000;
    border: 1px solid #aaa;
    border-top: 0;

    border-radius: 0 0 4px 4px;

    -webkit-box-shadow: 0 4px 5px rgba(0, 0, 0, .15);
            box-shadow: 0 4px 5px rgba(0, 0, 0, .15);
}
.select2-drop.select2-drop-above {
    margin-top: 1px;
    border-top: 1px solid #aaa;
    border-bottom: 0;

    border-radius: 4px 4px 0 0;

    -webkit-box-shadow: 0 -4px 5px rgba(0, 0, 0, .15);
            box-shadow: 0 -4px 5px rgba(0, 0, 0, .15);
}
.select2-drop-active {
    border: 1px solid #5897fb;
    border-top: none;
}
.select2-drop.select2-drop-above.select2-drop-active {
    border-top: 1px solid #5897fb;
}
.select2-drop-auto-width {
    border-top: 1px solid #aaa;
    width: auto;
}
.select2-drop-auto-width .select2-search {
    padding-top: 4px;
}
.select2-container .select2-choice .select2-arrow {
    display: inline-block;
    width: 18px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;

    border-left: 1px solid #aaa;
    border-radius: 0 4px 4px 0;

    background-clip: padding-box;

    background: #ccc;
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #ccc), color-stop(0.6, #eee));
    background-image: -webkit-linear-gradient(center bottom, #ccc 0%, #eee 60%);
    background-image: -moz-linear-gradient(center bottom, #ccc 0%, #eee 60%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#eeeeee', endColorstr = '#cccccc', GradientType = 0);
    background-image: linear-gradient(to top, #ccc 0%, #eee 60%);
}
html[dir="rtl"] .select2-container .select2-choice .select2-arrow {
    left: 0;
    right: auto;

    border-left: none;
    border-right: 1px solid #aaa;
    border-radius: 4px 0 0 4px;
}
.select2-container .select2-choice .select2-arrow b {
    display: block;
    width: 100%;
    height: 100%;
    background: url('select2.png') no-repeat 0 1px;
}
html[dir="rtl"] .select2-container .select2-choice .select2-arrow b {
    background-position: 2px 1px;
}
.select2-search {
    display: inline-block;
    width: 100%;
    min-height: 26px;
    margin: 0;
    padding-left: 4px;
    padding-right: 4px;

    position: relative;
    z-index: 10000;

    white-space: nowrap;
}
.select2-search input {
    width: 100%;
    height: auto !important;
    min-height: 26px;
    padding: 4px 20px 4px 5px;
    margin: 0;

    outline: 0;
    font-family: sans-serif;
    font-size: 1em;

    border: 1px solid #aaa;
    border-radius: 0;

    -webkit-box-shadow: none;
            box-shadow: none;

    background: #fff url('select2.png') no-repeat 100% -22px;
    background: url('select2.png') no-repeat 100% -22px, -webkit-gradient(linear, left bottom, left top, color-stop(0.85, #fff), color-stop(0.99, #eee));
    background: url('select2.png') no-repeat 100% -22px, -webkit-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2.png') no-repeat 100% -22px, -moz-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2.png') no-repeat 100% -22px, linear-gradient(to bottom, #fff 85%, #eee 99%) 0 0;
}
html[dir="rtl"] .select2-search input {
    padding: 4px 5px 4px 20px;

    background: #fff url('select2.png') no-repeat -37px -22px;
    background: url('select2.png') no-repeat -37px -22px, -webkit-gradient(linear, left bottom, left top, color-stop(0.85, #fff), color-stop(0.99, #eee));
    background: url('select2.png') no-repeat -37px -22px, -webkit-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2.png') no-repeat -37px -22px, -moz-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2.png') no-repeat -37px -22px, linear-gradient(to bottom, #fff 85%, #eee 99%) 0 0;
}
.select2-drop.select2-drop-above .select2-search input {
    margin-top: 4px;
}
.select2-search input.select2-active {
    background: #fff url('select2-spinner.gif') no-repeat 100%;
    background: url('select2-spinner.gif') no-repeat 100%, -webkit-gradient(linear, left bottom, left top, color-stop(0.85, #fff), color-stop(0.99, #eee));
    background: url('select2-spinner.gif') no-repeat 100%, -webkit-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2-spinner.gif') no-repeat 100%, -moz-linear-gradient(center bottom, #fff 85%, #eee 99%);
    background: url('select2-spinner.gif') no-repeat 100%, linear-gradient(to bottom, #fff 85%, #eee 99%) 0 0;
}
.select2-container-active .select2-choice,
.select2-container-active .select2-choices {
    border: 1px solid #5897fb;
    outline: none;

    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .3);
            box-shadow: 0 0 5px rgba(0, 0, 0, .3);
}
.select2-dropdown-open .select2-choice {
    border-bottom-color: transparent;
    -webkit-box-shadow: 0 1px 0 #fff inset;
            box-shadow: 0 1px 0 #fff inset;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    background-color: #eee;
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #fff), color-stop(0.5, #eee));
    background-image: -webkit-linear-gradient(center bottom, #fff 0%, #eee 50%);
    background-image: -moz-linear-gradient(center bottom, #fff 0%, #eee 50%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#ffffff', GradientType=0);
    background-image: linear-gradient(to top, #fff 0%, #eee 50%);
}
.select2-dropdown-open.select2-drop-above .select2-choice,
.select2-dropdown-open.select2-drop-above .select2-choices {
    border: 1px solid #5897fb;
    border-top-color: transparent;

    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff), color-stop(0.5, #eee));
    background-image: -webkit-linear-gradient(center top, #fff 0%, #eee 50%);
    background-image: -moz-linear-gradient(center top, #fff 0%, #eee 50%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#ffffff', GradientType=0);
    background-image: linear-gradient(to bottom, #fff 0%, #eee 50%);
}
.select2-dropdown-open .select2-choice .select2-arrow {
    background: transparent;
    border-left: none;
    filter: none;
}
html[dir="rtl"] .select2-dropdown-open .select2-choice .select2-arrow {
    border-right: none;
}
.select2-dropdown-open .select2-choice .select2-arrow b {
    background-position: -18px 1px;
}
html[dir="rtl"] .select2-dropdown-open .select2-choice .select2-arrow b {
    background-position: -16px 1px;
}
.select2-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
/* results */
.select2-results {
    max-height: 200px;
    padding: 0 0 0 4px;
    margin: 4px 4px 4px 0;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html[dir="rtl"] .select2-results {
    padding: 0 4px 0 0;
    margin: 4px 0 4px 4px;
}
.select2-results ul.select2-result-sub {
    margin: 0;
    padding-left: 0;
}
.select2-results li {
    list-style: none;
    display: list-item;
    background-image: none;
}
.select2-results li.select2-result-with-children > .select2-result-label {
    font-weight: bold;
}
.select2-results .select2-result-label {
    padding: 3px 7px 4px;
    margin: 0;
    cursor: pointer;

    min-height: 1em;

    -webkit-touch-callout: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
}
.select2-results-dept-1 .select2-result-label { padding-left: 20px }
.select2-results-dept-2 .select2-result-label { padding-left: 40px }
.select2-results-dept-3 .select2-result-label { padding-left: 60px }
.select2-results-dept-4 .select2-result-label { padding-left: 80px }
.select2-results-dept-5 .select2-result-label { padding-left: 100px }
.select2-results-dept-6 .select2-result-label { padding-left: 110px }
.select2-results-dept-7 .select2-result-label { padding-left: 120px }
.select2-results .select2-highlighted {
    background: #3875d7;
    color: #fff;
}
.select2-results li em {
    background: #feffde;
    font-style: normal;
}
.select2-results .select2-highlighted em {
    background: transparent;
}
.select2-results .select2-highlighted ul {
    background: #fff;
    color: #000;
}
.select2-results .select2-no-results,
.select2-results .select2-searching,
.select2-results .select2-ajax-error,
.select2-results .select2-selection-limit {
    background: #f4f4f4;
    display: list-item;
    padding-left: 5px;
}
/*
disabled look for disabled choices in the results dropdown
*/
.select2-results .select2-disabled.select2-highlighted {
    color: #666;
    background: #f4f4f4;
    display: list-item;
    cursor: default;
}
.select2-results .select2-disabled {
  background: #f4f4f4;
  display: list-item;
  cursor: default;
}
.select2-results .select2-selected {
    display: none;
}
.select2-more-results.select2-active {
    background: #f4f4f4 url('select2-spinner.gif') no-repeat 100%;
}
.select2-results .select2-ajax-error {
    background: rgba(255, 50, 50, .2);
}
.select2-more-results {
    background: #f4f4f4;
    display: list-item;
}
/* disabled styles */
.select2-container.select2-container-disabled .select2-choice {
    background-color: #f4f4f4;
    background-image: none;
    border: 1px solid #ddd;
    cursor: default;
}
.select2-container.select2-container-disabled .select2-choice .select2-arrow {
    background-color: #f4f4f4;
    background-image: none;
    border-left: 0;
}
.select2-container.select2-container-disabled .select2-choice abbr {
    display: none;
}
/* multiselect */
.select2-container-multi .select2-choices {
    height: auto !important;
    height: 1%;
    margin: 0;
    padding: 0 5px 0 0;
    position: relative;

    border: 1px solid #aaa;
    cursor: text;
    overflow: hidden;

    background-color: #fff;
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, color-stop(1%, #eee), color-stop(15%, #fff));
    background-image: -webkit-linear-gradient(top, #eee 1%, #fff 15%);
    background-image: -moz-linear-gradient(top, #eee 1%, #fff 15%);
    background-image: linear-gradient(to bottom, #eee 1%, #fff 15%);
}
html[dir="rtl"] .select2-container-multi .select2-choices {
    padding: 0 0 0 5px;
}
.select2-locked {
  padding: 3px 5px 3px 5px !important;
}
.select2-container-multi .select2-choices {
    min-height: 26px;
}
.select2-container-multi.select2-container-active .select2-choices {
    border: 1px solid #5897fb;
    outline: none;

    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .3);
            box-shadow: 0 0 5px rgba(0, 0, 0, .3);
}
.select2-container-multi .select2-choices li {
    float: left;
    list-style: none;
}
html[dir="rtl"] .select2-container-multi .select2-choices li
{
    float: right;
}
.select2-container-multi .select2-choices .select2-search-field {
    margin: 0;
    padding: 0;
    white-space: nowrap;
}
.select2-container-multi .select2-choices .select2-search-field input {
    padding: 5px;
    margin: 1px 0;

    font-family: sans-serif;
    font-size: 100%;
    color: #666;
    outline: 0;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
    background: transparent !important;
}
.select2-container-multi .select2-choices .select2-search-field input.select2-active {
    background: #fff url('select2-spinner.gif') no-repeat 100% !important;
}
.select2-default {
    color: #999 !important;
}
.select2-container-multi .select2-choices .select2-search-choice {
    padding: 3px 5px 3px 18px;
    margin: 3px 0 3px 5px;
    position: relative;

    line-height: 13px;
    color: #333;
    cursor: default;
    border: 1px solid #aaaaaa;

    border-radius: 3px;

    -webkit-box-shadow: 0 0 2px #fff inset, 0 1px 0 rgba(0, 0, 0, 0.05);
            box-shadow: 0 0 2px #fff inset, 0 1px 0 rgba(0, 0, 0, 0.05);

    background-clip: padding-box;

    -webkit-touch-callout: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;

    background-color: #e4e4e4;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#f4f4f4', GradientType=0);
    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, color-stop(20%, #f4f4f4), color-stop(50%, #f0f0f0), color-stop(52%, #e8e8e8), color-stop(100%, #eee));
    background-image: -webkit-linear-gradient(top, #f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
    background-image: -moz-linear-gradient(top, #f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
    background-image: linear-gradient(to bottom, #f4f4f4 20%, #f0f0f0 50%, #e8e8e8 52%, #eee 100%);
}
html[dir="rtl"] .select2-container-multi .select2-choices .select2-search-choice
{
    margin: 3px 5px 3px 0;
    padding: 3px 18px 3px 5px;
}
.select2-container-multi .select2-choices .select2-search-choice .select2-chosen {
    cursor: default;
}
.select2-container-multi .select2-choices .select2-search-choice-focus {
    background: #d4d4d4;
}
.select2-search-choice-close {
    display: block;
    width: 12px;
    height: 13px;
    position: absolute;
    right: 3px;
    top: 4px;

    font-size: 1px;
    outline: none;
    background: url('select2.png') right top no-repeat;
}
html[dir="rtl"] .select2-search-choice-close {
    right: auto;
    left: 3px;
}
.select2-container-multi .select2-search-choice-close {
    left: 3px;
}
html[dir="rtl"] .select2-container-multi .select2-search-choice-close {
    left: auto;
    right: 2px;
}
.select2-container-multi .select2-choices .select2-search-choice .select2-search-choice-close:hover {
  background-position: right -11px;
}
.select2-container-multi .select2-choices .select2-search-choice-focus .select2-search-choice-close {
    background-position: right -11px;
}
/* disabled styles */
.select2-container-multi.select2-container-disabled .select2-choices {
    background-color: #f4f4f4;
    background-image: none;
    border: 1px solid #ddd;
    cursor: default;
}
.select2-container-multi.select2-container-disabled .select2-choices .select2-search-choice {
    padding: 3px 5px 3px 5px;
    border: 1px solid #ddd;
    background-image: none;
    background-color: #f4f4f4;
}
.select2-container-multi.select2-container-disabled .select2-choices .select2-search-choice .select2-search-choice-close {    display: none;
    background: none;
}
/* end multiselect */
.select2-result-selectable .select2-match,
.select2-result-unselectable .select2-match {
    text-decoration: underline;
}
.select2-offscreen, .select2-offscreen:focus {
    clip: rect(0 0 0 0) !important;
    width: 1px !important;
    height: 1px !important;
    border: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    position: absolute !important;
    outline: 0 !important;
    left: 0px !important;
    top: 0px !important;
}
.select2-display-none {
    display: none;
}
.select2-measure-scrollbar {
    position: absolute;
    top: -10000px;
    left: -10000px;
    width: 100px;
    height: 100px;
    overflow: scroll;
}
/* Retina-ize icons */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-resolution: 2dppx)  {
    .select2-search input,
    .select2-search-choice-close,
    .select2-container .select2-choice abbr,
    .select2-container .select2-choice .select2-arrow b {
        background-image: url('select2x2.png') !important;
        background-repeat: no-repeat !important;
        background-size: 60px 40px !important;
    }

    .select2-search input {
        background-position: 100% -21px !important;
    }
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9jc3MvY29ycG9yYXRlLXVpL2NvcnBvcmF0ZS11aS12ZW5kb3JzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQztBQUNEO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLE9BQU87S0FDUCxlQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFFQTs7OztFQUlFOzs7O0dBSUM7RUFDRCw4QkFBOEIsRUFBRSxXQUFXO0tBQ3hDLDJCQUEyQixFQUFFLFlBQVk7VUFDcEMsc0JBQXNCLEVBQUUsU0FBUztBQUMzQztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7SUFFbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjs7SUFFckIsa0JBQWtCOztJQUVsQiw0QkFBNEI7O0lBRTVCLDJCQUEyQjtNQUN6Qix5QkFBeUI7U0FDdEIsc0JBQXNCO1VBQ3JCLHFCQUFxQjtjQUNqQixpQkFBaUI7O0lBRTNCLHNCQUFzQjtJQUN0Qiw2R0FBNkc7SUFDN0csMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSx3SEFBd0g7SUFDeEgsNERBQTREO0FBQ2hFO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHlCQUF5Qjs7SUFFekIsMEJBQTBCOztJQUUxQiw2R0FBNkc7SUFDN0csMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSxrSEFBa0g7SUFDbEgsK0RBQStEO0FBQ25FO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCOztJQUVoQixtQkFBbUI7O0lBRW5CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ks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QUVSLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0RBQWtEO0FBQ3REO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztBQUNiO0FBRUE7SUFDSSxTQUFTO0FBQ2I7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCO0FBRUEsOEhBQThILGFBQWE7SUFDdkksZ0JBQWdCO0FBQ3BCO0FBQ0Esb0JBQW9CO0FBR3BCOztJQUVJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQSxxQkFBcUI7QUFFckI7SUFDSTs7OztRQUlJLGlEQUFpRDtRQUNqRCx1Q0FBdUM7UUFDdkMscUNBQXFDO0lBQ3pDOztJQUVBO1FBQ0ksMENBQTBDO0lBQzlDO0FBQ0oiLCJmaWxlIjoiY29ycG9yYXRlLXVpLXZlbmRvcnMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuVmVyc2lvbjogMy41LjIgVGltZXN0YW1wOiBTYXQgTm92ICAxIDE0OjQzOjM2IEVEVCAyMDE0XHJcbiovXHJcbi5zZWxlY3QyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBpbmxpbmUtYmxvY2sgZm9yIGllNyAqL1xyXG4gICAgem9vbTogMTtcclxuICAgICpkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXIsXHJcbi5zZWxlY3QyLWRyb3AsXHJcbi5zZWxlY3QyLXNlYXJjaCxcclxuLnNlbGVjdDItc2VhcmNoIGlucHV0IHtcclxuICAvKlxyXG4gICAgRm9yY2UgYm9yZGVyLWJveCBzbyB0aGF0ICUgd2lkdGhzIGZpdCB0aGUgcGFyZW50XHJcbiAgICBjb250YWluZXIgd2l0aG91dCBvdmVybGFwIGJlY2F1c2Ugb2YgbWFyZ2luL3BhZGRpbmcuXHJcbiAgICBNb3JlIEluZm8gOiBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2Nzcy9ib3guaHRtbFxyXG4gICovXHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiB3ZWJraXQgKi9cclxuICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIGZpcmVmb3ggKi9cclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIGNzczMgKi9cclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLWNob2ljZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG5cclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLCAjZWVlKSwgY29sb3Itc3RvcCgwLjUsICNmZmYpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICNlZWUgMCUsICNmZmYgNTAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICNlZWUgMCUsICNmZmYgNTAlKTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHIgPSAnI2ZmZmZmZicsIGVuZENvbG9yc3RyID0gJyNlZWVlZWUnLCBHcmFkaWVudFR5cGUgPSAwKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNlZWUgMCUsICNmZmYgNTAlKTtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLWNob2ljZSB7XHJcbiAgICBwYWRkaW5nOiAwIDhweCAwIDA7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lci5zZWxlY3QyLWRyb3AtYWJvdmUgLnNlbGVjdDItY2hvaWNlIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNhYWE7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLCAjZWVlKSwgY29sb3Itc3RvcCgwLjksICNmZmYpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICNlZWUgMCUsICNmZmYgOTAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICNlZWUgMCUsICNmZmYgOTAlKTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2VlZWVlZScsIEdyYWRpZW50VHlwZT0wKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZWUgMCUsICNmZmYgOTAlKTtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLnNlbGVjdDItYWxsb3djbGVhciAuc2VsZWN0Mi1jaG9pY2UgLnNlbGVjdDItY2hvc2VuIHtcclxuICAgIG1hcmdpbi1yaWdodDogNDJweDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLWNob2ljZSA+IC5zZWxlY3QyLWNob3NlbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1jaG9pY2UgPiAuc2VsZWN0Mi1jaG9zZW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1jaG9pY2UgYWJiciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjRweDtcclxuICAgIHRvcDogOHB4O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi5wbmcnKSByaWdodCB0b3Agbm8tcmVwZWF0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLnNlbGVjdDItYWxsb3djbGVhciAuc2VsZWN0Mi1jaG9pY2UgYWJiciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1jaG9pY2UgYWJicjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAtMTFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdDItZHJvcC1tYXNrIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDk5OTg7XHJcbiAgICAvKiBzdHlsZXMgcmVxdWlyZWQgZm9yIElFIHRvIHdvcmsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWRyb3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHRvcDogMTAwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgYm9yZGVyLXRvcDogMDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDVweCByZ2JhKDAsIDAsIDAsIC4xNSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCByZ2JhKDAsIDAsIDAsIC4xNSk7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWRyb3Auc2VsZWN0Mi1kcm9wLWFib3ZlIHtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLTRweCA1cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC00cHggNXB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcclxufVxyXG5cclxuLnNlbGVjdDItZHJvcC1hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU4OTdmYjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWRyb3Auc2VsZWN0Mi1kcm9wLWFib3ZlLnNlbGVjdDItZHJvcC1hY3RpdmUge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1ODk3ZmI7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWRyb3AtYXV0by13aWR0aCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1kcm9wLWF1dG8td2lkdGggLnNlbGVjdDItc2VhcmNoIHtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1jaG9pY2UgLnNlbGVjdDItYXJyb3cge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuXHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAsICNjY2MpLCBjb2xvci1zdG9wKDAuNiwgI2VlZSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2NjYyAwJSwgI2VlZSA2MCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2NjYyAwJSwgI2VlZSA2MCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0ciA9ICcjZWVlZWVlJywgZW5kQ29sb3JzdHIgPSAnI2NjY2NjYycsIEdyYWRpZW50VHlwZSA9IDApO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2NjYyAwJSwgI2VlZSA2MCUpO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItY2hvaWNlIC5zZWxlY3QyLWFycm93IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogYXV0bztcclxuXHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLWNob2ljZSAuc2VsZWN0Mi1hcnJvdyBiIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NlbGVjdDIucG5nJykgbm8tcmVwZWF0IDAgMXB4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItY2hvaWNlIC5zZWxlY3QyLWFycm93IGIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4IDFweDtcclxufVxyXG5cclxuLnNlbGVjdDItc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDAwO1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5zZWxlY3QyLXNlYXJjaCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMjZweDtcclxuICAgIHBhZGRpbmc6IDRweCAyMHB4IDRweCA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKCdzZWxlY3QyLnBuZycpIG5vLXJlcGVhdCAxMDAlIC0yMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzZWxlY3QyLnBuZycpIG5vLXJlcGVhdCAxMDAlIC0yMnB4LCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuODUsICNmZmYpLCBjb2xvci1zdG9wKDAuOTksICNlZWUpKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi5wbmcnKSBuby1yZXBlYXQgMTAwJSAtMjJweCwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2ZmZiA4NSUsICNlZWUgOTklKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi5wbmcnKSBuby1yZXBlYXQgMTAwJSAtMjJweCwgLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2ZmZiA4NSUsICNlZWUgOTklKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi5wbmcnKSBuby1yZXBlYXQgMTAwJSAtMjJweCwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZiA4NSUsICNlZWUgOTklKSAwIDA7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWxlY3QyLXNlYXJjaCBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA0cHggNXB4IDRweCAyMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKCdzZWxlY3QyLnBuZycpIG5vLXJlcGVhdCAtMzdweCAtMjJweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi5wbmcnKSBuby1yZXBlYXQgLTM3cHggLTIycHgsIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC44NSwgI2ZmZiksIGNvbG9yLXN0b3AoMC45OSwgI2VlZSkpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzZWxlY3QyLnBuZycpIG5vLXJlcGVhdCAtMzdweCAtMjJweCwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2ZmZiA4NSUsICNlZWUgOTklKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi5wbmcnKSBuby1yZXBlYXQgLTM3cHggLTIycHgsIC1tb3otbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICNmZmYgODUlLCAjZWVlIDk5JSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NlbGVjdDIucG5nJykgbm8tcmVwZWF0IC0zN3B4IC0yMnB4LCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmIDg1JSwgI2VlZSA5OSUpIDAgMDtcclxufVxyXG5cclxuLnNlbGVjdDItZHJvcC5zZWxlY3QyLWRyb3AtYWJvdmUgLnNlbGVjdDItc2VhcmNoIGlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLnNlbGVjdDItc2VhcmNoIGlucHV0LnNlbGVjdDItYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKCdzZWxlY3QyLXNwaW5uZXIuZ2lmJykgbm8tcmVwZWF0IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NlbGVjdDItc3Bpbm5lci5naWYnKSBuby1yZXBlYXQgMTAwJSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjg1LCAjZmZmKSwgY29sb3Itc3RvcCgwLjk5LCAjZWVlKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NlbGVjdDItc3Bpbm5lci5naWYnKSBuby1yZXBlYXQgMTAwJSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2ZmZiA4NSUsICNlZWUgOTklKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi1zcGlubmVyLmdpZicpIG5vLXJlcGVhdCAxMDAlLCAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAjZmZmIDg1JSwgI2VlZSA5OSUpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzZWxlY3QyLXNwaW5uZXIuZ2lmJykgbm8tcmVwZWF0IDEwMCUsIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmYgODUlLCAjZWVlIDk5JSkgMCAwO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXItYWN0aXZlIC5zZWxlY3QyLWNob2ljZSxcclxuLnNlbGVjdDItY29udGFpbmVyLWFjdGl2ZSAuc2VsZWN0Mi1jaG9pY2VzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1ODk3ZmI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxufVxyXG5cclxuLnNlbGVjdDItZHJvcGRvd24tb3BlbiAuc2VsZWN0Mi1jaG9pY2Uge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgI2ZmZiBpbnNldDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCAjZmZmIGluc2V0O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLCAjZmZmKSwgY29sb3Itc3RvcCgwLjUsICNlZWUpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICNmZmYgMCUsICNlZWUgNTAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICNmZmYgMCUsICNlZWUgNTAlKTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNlZWVlZWUnLCBlbmRDb2xvcnN0cj0nI2ZmZmZmZicsIEdyYWRpZW50VHlwZT0wKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmYgMCUsICNlZWUgNTAlKTtcclxufVxyXG5cclxuLnNlbGVjdDItZHJvcGRvd24tb3Blbi5zZWxlY3QyLWRyb3AtYWJvdmUgLnNlbGVjdDItY2hvaWNlLFxyXG4uc2VsZWN0Mi1kcm9wZG93bi1vcGVuLnNlbGVjdDItZHJvcC1hYm92ZSAuc2VsZWN0Mi1jaG9pY2VzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1ODk3ZmI7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsICNmZmYpLCBjb2xvci1zdG9wKDAuNSwgI2VlZSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY2VudGVyIHRvcCwgI2ZmZiAwJSwgI2VlZSA1MCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIHRvcCwgI2ZmZiAwJSwgI2VlZSA1MCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2VlZWVlZScsIGVuZENvbG9yc3RyPScjZmZmZmZmJywgR3JhZGllbnRUeXBlPTApO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZiAwJSwgI2VlZSA1MCUpO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1kcm9wZG93bi1vcGVuIC5zZWxlY3QyLWNob2ljZSAuc2VsZWN0Mi1hcnJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgZmlsdGVyOiBub25lO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWxlY3QyLWRyb3Bkb3duLW9wZW4gLnNlbGVjdDItY2hvaWNlIC5zZWxlY3QyLWFycm93IHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLnNlbGVjdDItZHJvcGRvd24tb3BlbiAuc2VsZWN0Mi1jaG9pY2UgLnNlbGVjdDItYXJyb3cgYiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMThweCAxcHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWxlY3QyLWRyb3Bkb3duLW9wZW4gLnNlbGVjdDItY2hvaWNlIC5zZWxlY3QyLWFycm93IGIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggMXB4O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbi8qIHJlc3VsdHMgKi9cclxuLnNlbGVjdDItcmVzdWx0cyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDRweDtcclxuICAgIG1hcmdpbjogNHB4IDRweCA0cHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWxlY3QyLXJlc3VsdHMge1xyXG4gICAgcGFkZGluZzogMCA0cHggMCAwO1xyXG4gICAgbWFyZ2luOiA0cHggMCA0cHggNHB4O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1yZXN1bHRzIHVsLnNlbGVjdDItcmVzdWx0LXN1YiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zZWxlY3QyLXJlc3VsdHMgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3QyLXJlc3VsdHMgbGkuc2VsZWN0Mi1yZXN1bHQtd2l0aC1jaGlsZHJlbiA+IC5zZWxlY3QyLXJlc3VsdC1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlbGVjdDItcmVzdWx0cyAuc2VsZWN0Mi1yZXN1bHQtbGFiZWwge1xyXG4gICAgcGFkZGluZzogM3B4IDdweCA0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgbWluLWhlaWdodDogMWVtO1xyXG5cclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnNlbGVjdDItcmVzdWx0cy1kZXB0LTEgLnNlbGVjdDItcmVzdWx0LWxhYmVsIHsgcGFkZGluZy1sZWZ0OiAyMHB4IH1cclxuLnNlbGVjdDItcmVzdWx0cy1kZXB0LTIgLnNlbGVjdDItcmVzdWx0LWxhYmVsIHsgcGFkZGluZy1sZWZ0OiA0MHB4IH1cclxuLnNlbGVjdDItcmVzdWx0cy1kZXB0LTMgLnNlbGVjdDItcmVzdWx0LWxhYmVsIHsgcGFkZGluZy1sZWZ0OiA2MHB4IH1cclxuLnNlbGVjdDItcmVzdWx0cy1kZXB0LTQgLnNlbGVjdDItcmVzdWx0LWxhYmVsIHsgcGFkZGluZy1sZWZ0OiA4MHB4IH1cclxuLnNlbGVjdDItcmVzdWx0cy1kZXB0LTUgLnNlbGVjdDItcmVzdWx0LWxhYmVsIHsgcGFkZGluZy1sZWZ0OiAxMDBweCB9XHJcbi5zZWxlY3QyLXJlc3VsdHMtZGVwdC02IC5zZWxlY3QyLXJlc3VsdC1sYWJlbCB7IHBhZGRpbmctbGVmdDogMTEwcHggfVxyXG4uc2VsZWN0Mi1yZXN1bHRzLWRlcHQtNyAuc2VsZWN0Mi1yZXN1bHQtbGFiZWwgeyBwYWRkaW5nLWxlZnQ6IDEyMHB4IH1cclxuXHJcbi5zZWxlY3QyLXJlc3VsdHMgLnNlbGVjdDItaGlnaGxpZ2h0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzM4NzVkNztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1yZXN1bHRzIGxpIGVtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZWZmZGU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWxlY3QyLXJlc3VsdHMgLnNlbGVjdDItaGlnaGxpZ2h0ZWQgZW0ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3QyLXJlc3VsdHMgLnNlbGVjdDItaGlnaGxpZ2h0ZWQgdWwge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1yZXN1bHRzIC5zZWxlY3QyLW5vLXJlc3VsdHMsXHJcbi5zZWxlY3QyLXJlc3VsdHMgLnNlbGVjdDItc2VhcmNoaW5nLFxyXG4uc2VsZWN0Mi1yZXN1bHRzIC5zZWxlY3QyLWFqYXgtZXJyb3IsXHJcbi5zZWxlY3QyLXJlc3VsdHMgLnNlbGVjdDItc2VsZWN0aW9uLWxpbWl0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLypcclxuZGlzYWJsZWQgbG9vayBmb3IgZGlzYWJsZWQgY2hvaWNlcyBpbiB0aGUgcmVzdWx0cyBkcm9wZG93blxyXG4qL1xyXG4uc2VsZWN0Mi1yZXN1bHRzIC5zZWxlY3QyLWRpc2FibGVkLnNlbGVjdDItaGlnaGxpZ2h0ZWQge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5zZWxlY3QyLXJlc3VsdHMgLnNlbGVjdDItZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLnNlbGVjdDItcmVzdWx0cyAuc2VsZWN0Mi1zZWxlY3RlZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1tb3JlLXJlc3VsdHMuc2VsZWN0Mi1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNCB1cmwoJ3NlbGVjdDItc3Bpbm5lci5naWYnKSBuby1yZXBlYXQgMTAwJTtcclxufVxyXG5cclxuLnNlbGVjdDItcmVzdWx0cyAuc2VsZWN0Mi1hamF4LWVycm9yIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA1MCwgNTAsIC4yKTtcclxufVxyXG5cclxuLnNlbGVjdDItbW9yZS1yZXN1bHRzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbn1cclxuXHJcbi8qIGRpc2FibGVkIHN0eWxlcyAqL1xyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLnNlbGVjdDItY29udGFpbmVyLWRpc2FibGVkIC5zZWxlY3QyLWNob2ljZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lci5zZWxlY3QyLWNvbnRhaW5lci1kaXNhYmxlZCAuc2VsZWN0Mi1jaG9pY2UgLnNlbGVjdDItYXJyb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogMDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLnNlbGVjdDItY29udGFpbmVyLWRpc2FibGVkIC5zZWxlY3QyLWNob2ljZSBhYmJyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBtdWx0aXNlbGVjdCAqL1xyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLW11bHRpIC5zZWxlY3QyLWNob2ljZXMge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDElO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCA1cHggMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCUgMCUsIDAlIDEwMCUsIGNvbG9yLXN0b3AoMSUsICNlZWUpLCBjb2xvci1zdG9wKDE1JSwgI2ZmZikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlIDElLCAjZmZmIDE1JSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlZWUgMSUsICNmZmYgMTUlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZWUgMSUsICNmZmYgMTUlKTtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlbGVjdDItY29udGFpbmVyLW11bHRpIC5zZWxlY3QyLWNob2ljZXMge1xyXG4gICAgcGFkZGluZzogMCAwIDAgNXB4O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1sb2NrZWQge1xyXG4gIHBhZGRpbmc6IDNweCA1cHggM3B4IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItY2hvaWNlcyB7XHJcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXItbXVsdGkuc2VsZWN0Mi1jb250YWluZXItYWN0aXZlIC5zZWxlY3QyLWNob2ljZXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU4OTdmYjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG59XHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1jaG9pY2VzIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItY2hvaWNlcyBsaVxyXG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnNlbGVjdDItY29udGFpbmVyLW11bHRpIC5zZWxlY3QyLWNob2ljZXMgLnNlbGVjdDItc2VhcmNoLWZpZWxkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItY2hvaWNlcyAuc2VsZWN0Mi1zZWFyY2gtZmllbGQgaW5wdXQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAxcHggMDtcclxuXHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1jaG9pY2VzIC5zZWxlY3QyLXNlYXJjaC1maWVsZCBpbnB1dC5zZWxlY3QyLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybCgnc2VsZWN0Mi1zcGlubmVyLmdpZicpIG5vLXJlcGVhdCAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWRlZmF1bHQge1xyXG4gICAgY29sb3I6ICM5OTkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLW11bHRpIC5zZWxlY3QyLWNob2ljZXMgLnNlbGVjdDItc2VhcmNoLWNob2ljZSB7XHJcbiAgICBwYWRkaW5nOiAzcHggNXB4IDNweCAxOHB4O1xyXG4gICAgbWFyZ2luOiAzcHggMCAzcHggNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAycHggI2ZmZiBpbnNldCwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNmZmYgaW5zZXQsIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG5cclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2VlZWVlZScsIGVuZENvbG9yc3RyPScjZjRmNGY0JywgR3JhZGllbnRUeXBlPTApO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAlIDAlLCAwJSAxMDAlLCBjb2xvci1zdG9wKDIwJSwgI2Y0ZjRmNCksIGNvbG9yLXN0b3AoNTAlLCAjZjBmMGYwKSwgY29sb3Itc3RvcCg1MiUsICNlOGU4ZTgpLCBjb2xvci1zdG9wKDEwMCUsICNlZWUpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y0ZjRmNCAyMCUsICNmMGYwZjAgNTAlLCAjZThlOGU4IDUyJSwgI2VlZSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y0ZjRmNCAyMCUsICNmMGYwZjAgNTAlLCAjZThlOGU4IDUyJSwgI2VlZSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNGY0ZjQgMjAlLCAjZjBmMGYwIDUwJSwgI2U4ZThlOCA1MiUsICNlZWUgMTAwJSk7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlbGVjdDItY29udGFpbmVyLW11bHRpIC5zZWxlY3QyLWNob2ljZXMgLnNlbGVjdDItc2VhcmNoLWNob2ljZVxyXG57XHJcbiAgICBtYXJnaW46IDNweCA1cHggM3B4IDA7XHJcbiAgICBwYWRkaW5nOiAzcHggMThweCAzcHggNXB4O1xyXG59XHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1jaG9pY2VzIC5zZWxlY3QyLXNlYXJjaC1jaG9pY2UgLnNlbGVjdDItY2hvc2VuIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4uc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItY2hvaWNlcyAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlLWZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICNkNGQ0ZDQ7XHJcbn1cclxuXHJcbi5zZWxlY3QyLXNlYXJjaC1jaG9pY2UtY2xvc2Uge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzcHg7XHJcbiAgICB0b3A6IDRweDtcclxuXHJcbiAgICBmb250LXNpemU6IDFweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NlbGVjdDIucG5nJykgcmlnaHQgdG9wIG5vLXJlcGVhdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlLWNsb3NlIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogM3B4O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItc2VhcmNoLWNob2ljZS1jbG9zZSB7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlLWNsb3NlIHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogMnB4O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItY2hvaWNlcyAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlIC5zZWxlY3QyLXNlYXJjaC1jaG9pY2UtY2xvc2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC0xMXB4O1xyXG59XHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1jaG9pY2VzIC5zZWxlY3QyLXNlYXJjaC1jaG9pY2UtZm9jdXMgLnNlbGVjdDItc2VhcmNoLWNob2ljZS1jbG9zZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAtMTFweDtcclxufVxyXG5cclxuLyogZGlzYWJsZWQgc3R5bGVzICovXHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aS5zZWxlY3QyLWNvbnRhaW5lci1kaXNhYmxlZCAuc2VsZWN0Mi1jaG9pY2VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLW11bHRpLnNlbGVjdDItY29udGFpbmVyLWRpc2FibGVkIC5zZWxlY3QyLWNob2ljZXMgLnNlbGVjdDItc2VhcmNoLWNob2ljZSB7XHJcbiAgICBwYWRkaW5nOiAzcHggNXB4IDNweCA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aS5zZWxlY3QyLWNvbnRhaW5lci1kaXNhYmxlZCAuc2VsZWN0Mi1jaG9pY2VzIC5zZWxlY3QyLXNlYXJjaC1jaG9pY2UgLnNlbGVjdDItc2VhcmNoLWNob2ljZS1jbG9zZSB7ICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi8qIGVuZCBtdWx0aXNlbGVjdCAqL1xyXG5cclxuXHJcbi5zZWxlY3QyLXJlc3VsdC1zZWxlY3RhYmxlIC5zZWxlY3QyLW1hdGNoLFxyXG4uc2VsZWN0Mi1yZXN1bHQtdW5zZWxlY3RhYmxlIC5zZWxlY3QyLW1hdGNoIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1vZmZzY3JlZW4sIC5zZWxlY3QyLW9mZnNjcmVlbjpmb2N1cyB7XHJcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1kaXNwbGF5LW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNlbGVjdDItbWVhc3VyZS1zY3JvbGxiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTAwMDBweDtcclxuICAgIGxlZnQ6IC0xMDAwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi8qIFJldGluYS1pemUgaWNvbnMgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSwgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpICB7XHJcbiAgICAuc2VsZWN0Mi1zZWFyY2ggaW5wdXQsXHJcbiAgICAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlLWNsb3NlLFxyXG4gICAgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLWNob2ljZSBhYmJyLFxyXG4gICAgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLWNob2ljZSAuc2VsZWN0Mi1hcnJvdyBiIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NlbGVjdDJ4Mi5wbmcnKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QyLXNlYXJjaCBpbnB1dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAtMjFweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XG4vKlxyXG5WZXJzaW9uOiAzLjUuMiBUaW1lc3RhbXA6IFNhdCBOb3YgIDEgMTQ6NDM6MzYgRURUIDIwMTRcclxuKi9cclxuLnNlbGVjdDItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8qIGlubGluZS1ibG9jayBmb3IgaWU3ICovXHJcbiAgICB6b29tOiAxO1xyXG4gICAgKmRpc3BsYXk6IGlubGluZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lcixcclxuLnNlbGVjdDItZHJvcCxcclxuLnNlbGVjdDItc2VhcmNoLFxyXG4uc2VsZWN0Mi1zZWFyY2ggaW5wdXQge1xyXG4gIC8qXHJcbiAgICBGb3JjZSBib3JkZXItYm94IHNvIHRoYXQgJSB3aWR0aHMgZml0IHRoZSBwYXJlbnRcclxuICAgIGNvbnRhaW5lciB3aXRob3V0IG92ZXJsYXAgYmVjYXVzZSBvZiBtYXJnaW4vcGFkZGluZy5cclxuICAgIE1vcmUgSW5mbyA6IGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvY3NzL2JveC5odG1sXHJcbiAgKi9cclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIHdlYmtpdCAqL1xyXG4gICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogZmlyZWZveCAqL1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogY3NzMyAqL1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItY2hvaWNlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgcGFkZGluZzogMCAwIDAgOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblxyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAsICNlZWUpLCBjb2xvci1zdG9wKDAuNSwgI2ZmZikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2VlZSAwJSwgI2ZmZiA1MCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2VlZSAwJSwgI2ZmZiA1MCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0ciA9ICcjZmZmZmZmJywgZW5kQ29sb3JzdHIgPSAnI2VlZWVlZScsIEdyYWRpZW50VHlwZSA9IDApO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2VlZSAwJSwgI2ZmZiA1MCUpO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItY2hvaWNlIHtcclxuICAgIHBhZGRpbmc6IDAgOHB4IDAgMDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLnNlbGVjdDItZHJvcC1hYm92ZSAuc2VsZWN0Mi1jaG9pY2Uge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2FhYTtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAsICNlZWUpLCBjb2xvci1zdG9wKDAuOSwgI2ZmZikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2VlZSAwJSwgI2ZmZiA5MCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2VlZSAwJSwgI2ZmZiA5MCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZWVlZWVlJywgR3JhZGllbnRUeXBlPTApO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VlZSAwJSwgI2ZmZiA5MCUpO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXIuc2VsZWN0Mi1hbGxvd2NsZWFyIC5zZWxlY3QyLWNob2ljZSAuc2VsZWN0Mi1jaG9zZW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MnB4O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItY2hvaWNlID4gLnNlbGVjdDItY2hvc2VuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLWNob2ljZSA+IC5zZWxlY3QyLWNob3NlbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLWNob2ljZSBhYmJyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgdG9wOiA4cHg7XHJcblxyXG4gICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzZWxlY3QyLnBuZycpIHJpZ2h0IHRvcCBuby1yZXBlYXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXIuc2VsZWN0Mi1hbGxvd2NsZWFyIC5zZWxlY3QyLWNob2ljZSBhYmJyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLWNob2ljZSBhYmJyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC0xMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1kcm9wLW1hc2sge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogOTk5ODtcclxuICAgIC8qIHN0eWxlcyByZXF1aXJlZCBmb3IgSUUgdG8gd29yayAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxufVxyXG5cclxuLnNlbGVjdDItZHJvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgdG9wOiAxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG5cclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNXB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNXB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcclxufVxyXG5cclxuLnNlbGVjdDItZHJvcC5zZWxlY3QyLWRyb3AtYWJvdmUge1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG5cclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAtNHB4IDVweCByZ2JhKDAsIDAsIDAsIC4xNSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTRweCA1cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1kcm9wLWFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTg5N2ZiO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLnNlbGVjdDItZHJvcC5zZWxlY3QyLWRyb3AtYWJvdmUuc2VsZWN0Mi1kcm9wLWFjdGl2ZSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzU4OTdmYjtcclxufVxyXG5cclxuLnNlbGVjdDItZHJvcC1hdXRvLXdpZHRoIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5zZWxlY3QyLWRyb3AtYXV0by13aWR0aCAuc2VsZWN0Mi1zZWFyY2gge1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLWNob2ljZSAuc2VsZWN0Mi1hcnJvdyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG5cclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2FhYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG5cclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMCwgI2NjYyksIGNvbG9yLXN0b3AoMC42LCAjZWVlKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAjY2NjIDAlLCAjZWVlIDYwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAjY2NjIDAlLCAjZWVlIDYwJSk7XHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyID0gJyNlZWVlZWUnLCBlbmRDb2xvcnN0ciA9ICcjY2NjY2NjJywgR3JhZGllbnRUeXBlID0gMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjY2NjIDAlLCAjZWVlIDYwJSk7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1jaG9pY2UgLnNlbGVjdDItYXJyb3cge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG5cclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2FhYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItY2hvaWNlIC5zZWxlY3QyLWFycm93IGIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi5wbmcnKSBuby1yZXBlYXQgMCAxcHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1jaG9pY2UgLnNlbGVjdDItYXJyb3cgYiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHggMXB4O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1zZWFyY2gge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcblxyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnNlbGVjdDItc2VhcmNoIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xyXG4gICAgcGFkZGluZzogNHB4IDIwcHggNHB4IDVweDtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJ3NlbGVjdDIucG5nJykgbm8tcmVwZWF0IDEwMCUgLTIycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NlbGVjdDIucG5nJykgbm8tcmVwZWF0IDEwMCUgLTIycHgsIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMC44NSwgI2ZmZiksIGNvbG9yLXN0b3AoMC45OSwgI2VlZSkpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzZWxlY3QyLnBuZycpIG5vLXJlcGVhdCAxMDAlIC0yMnB4LCAtd2Via2l0LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAjZmZmIDg1JSwgI2VlZSA5OSUpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzZWxlY3QyLnBuZycpIG5vLXJlcGVhdCAxMDAlIC0yMnB4LCAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAjZmZmIDg1JSwgI2VlZSA5OSUpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzZWxlY3QyLnBuZycpIG5vLXJlcGVhdCAxMDAlIC0yMnB4LCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmIDg1JSwgI2VlZSA5OSUpIDAgMDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlbGVjdDItc2VhcmNoIGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDRweCA1cHggNHB4IDIwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJ3NlbGVjdDIucG5nJykgbm8tcmVwZWF0IC0zN3B4IC0yMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzZWxlY3QyLnBuZycpIG5vLXJlcGVhdCAtMzdweCAtMjJweCwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjg1LCAjZmZmKSwgY29sb3Itc3RvcCgwLjk5LCAjZWVlKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NlbGVjdDIucG5nJykgbm8tcmVwZWF0IC0zN3B4IC0yMnB4LCAtd2Via2l0LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAjZmZmIDg1JSwgI2VlZSA5OSUpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzZWxlY3QyLnBuZycpIG5vLXJlcGVhdCAtMzdweCAtMjJweCwgLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2ZmZiA4NSUsICNlZWUgOTklKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi5wbmcnKSBuby1yZXBlYXQgLTM3cHggLTIycHgsIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmYgODUlLCAjZWVlIDk5JSkgMCAwO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1kcm9wLnNlbGVjdDItZHJvcC1hYm92ZSAuc2VsZWN0Mi1zZWFyY2ggaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1zZWFyY2ggaW5wdXQuc2VsZWN0Mi1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJ3NlbGVjdDItc3Bpbm5lci5naWYnKSBuby1yZXBlYXQgMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi1zcGlubmVyLmdpZicpIG5vLXJlcGVhdCAxMDAlLCAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAuODUsICNmZmYpLCBjb2xvci1zdG9wKDAuOTksICNlZWUpKTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi1zcGlubmVyLmdpZicpIG5vLXJlcGVhdCAxMDAlLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAjZmZmIDg1JSwgI2VlZSA5OSUpO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzZWxlY3QyLXNwaW5uZXIuZ2lmJykgbm8tcmVwZWF0IDEwMCUsIC1tb3otbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICNmZmYgODUlLCAjZWVlIDk5JSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NlbGVjdDItc3Bpbm5lci5naWYnKSBuby1yZXBlYXQgMTAwJSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZiA4NSUsICNlZWUgOTklKSAwIDA7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lci1hY3RpdmUgLnNlbGVjdDItY2hvaWNlLFxyXG4uc2VsZWN0Mi1jb250YWluZXItYWN0aXZlIC5zZWxlY3QyLWNob2ljZXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU4OTdmYjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1kcm9wZG93bi1vcGVuIC5zZWxlY3QyLWNob2ljZSB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAjZmZmIGluc2V0O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAwICNmZmYgaW5zZXQ7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAsICNmZmYpLCBjb2xvci1zdG9wKDAuNSwgI2VlZSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2ZmZiAwJSwgI2VlZSA1MCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2ZmZiAwJSwgI2VlZSA1MCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2VlZWVlZScsIGVuZENvbG9yc3RyPScjZmZmZmZmJywgR3JhZGllbnRUeXBlPTApO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZmZiAwJSwgI2VlZSA1MCUpO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1kcm9wZG93bi1vcGVuLnNlbGVjdDItZHJvcC1hYm92ZSAuc2VsZWN0Mi1jaG9pY2UsXHJcbi5zZWxlY3QyLWRyb3Bkb3duLW9wZW4uc2VsZWN0Mi1kcm9wLWFib3ZlIC5zZWxlY3QyLWNob2ljZXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU4OTdmYjtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgI2ZmZiksIGNvbG9yLXN0b3AoMC41LCAjZWVlKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChjZW50ZXIgdG9wLCAjZmZmIDAlLCAjZWVlIDUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgdG9wLCAjZmZmIDAlLCAjZWVlIDUwJSk7XHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZWVlZWVlJywgZW5kQ29sb3JzdHI9JyNmZmZmZmYnLCBHcmFkaWVudFR5cGU9MCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmIDAlLCAjZWVlIDUwJSk7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWRyb3Bkb3duLW9wZW4gLnNlbGVjdDItY2hvaWNlIC5zZWxlY3QyLWFycm93IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBmaWx0ZXI6IG5vbmU7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlbGVjdDItZHJvcGRvd24tb3BlbiAuc2VsZWN0Mi1jaG9pY2UgLnNlbGVjdDItYXJyb3cge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1kcm9wZG93bi1vcGVuIC5zZWxlY3QyLWNob2ljZSAuc2VsZWN0Mi1hcnJvdyBiIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOHB4IDFweDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlbGVjdDItZHJvcGRvd24tb3BlbiAuc2VsZWN0Mi1jaG9pY2UgLnNlbGVjdDItYXJyb3cgYiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAxcHg7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDFweDtcclxufVxyXG5cclxuLyogcmVzdWx0cyAqL1xyXG4uc2VsZWN0Mi1yZXN1bHRzIHtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMCAwIDAgNHB4O1xyXG4gICAgbWFyZ2luOiA0cHggNHB4IDRweCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlbGVjdDItcmVzdWx0cyB7XHJcbiAgICBwYWRkaW5nOiAwIDRweCAwIDA7XHJcbiAgICBtYXJnaW46IDRweCAwIDRweCA0cHg7XHJcbn1cclxuXHJcbi5zZWxlY3QyLXJlc3VsdHMgdWwuc2VsZWN0Mi1yZXN1bHQtc3ViIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnNlbGVjdDItcmVzdWx0cyBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLnNlbGVjdDItcmVzdWx0cyBsaS5zZWxlY3QyLXJlc3VsdC13aXRoLWNoaWxkcmVuID4gLnNlbGVjdDItcmVzdWx0LWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1yZXN1bHRzIC5zZWxlY3QyLXJlc3VsdC1sYWJlbCB7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4IDRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiAxZW07XHJcblxyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1yZXN1bHRzLWRlcHQtMSAuc2VsZWN0Mi1yZXN1bHQtbGFiZWwgeyBwYWRkaW5nLWxlZnQ6IDIwcHggfVxyXG4uc2VsZWN0Mi1yZXN1bHRzLWRlcHQtMiAuc2VsZWN0Mi1yZXN1bHQtbGFiZWwgeyBwYWRkaW5nLWxlZnQ6IDQwcHggfVxyXG4uc2VsZWN0Mi1yZXN1bHRzLWRlcHQtMyAuc2VsZWN0Mi1yZXN1bHQtbGFiZWwgeyBwYWRkaW5nLWxlZnQ6IDYwcHggfVxyXG4uc2VsZWN0Mi1yZXN1bHRzLWRlcHQtNCAuc2VsZWN0Mi1yZXN1bHQtbGFiZWwgeyBwYWRkaW5nLWxlZnQ6IDgwcHggfVxyXG4uc2VsZWN0Mi1yZXN1bHRzLWRlcHQtNSAuc2VsZWN0Mi1yZXN1bHQtbGFiZWwgeyBwYWRkaW5nLWxlZnQ6IDEwMHB4IH1cclxuLnNlbGVjdDItcmVzdWx0cy1kZXB0LTYgLnNlbGVjdDItcmVzdWx0LWxhYmVsIHsgcGFkZGluZy1sZWZ0OiAxMTBweCB9XHJcbi5zZWxlY3QyLXJlc3VsdHMtZGVwdC03IC5zZWxlY3QyLXJlc3VsdC1sYWJlbCB7IHBhZGRpbmctbGVmdDogMTIwcHggfVxyXG5cclxuLnNlbGVjdDItcmVzdWx0cyAuc2VsZWN0Mi1oaWdobGlnaHRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzg3NWQ3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWxlY3QyLXJlc3VsdHMgbGkgZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZlZmZkZTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlbGVjdDItcmVzdWx0cyAuc2VsZWN0Mi1oaWdobGlnaHRlZCBlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNlbGVjdDItcmVzdWx0cyAuc2VsZWN0Mi1oaWdobGlnaHRlZCB1bCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5zZWxlY3QyLXJlc3VsdHMgLnNlbGVjdDItbm8tcmVzdWx0cyxcclxuLnNlbGVjdDItcmVzdWx0cyAuc2VsZWN0Mi1zZWFyY2hpbmcsXHJcbi5zZWxlY3QyLXJlc3VsdHMgLnNlbGVjdDItYWpheC1lcnJvcixcclxuLnNlbGVjdDItcmVzdWx0cyAuc2VsZWN0Mi1zZWxlY3Rpb24tbGltaXQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4vKlxyXG5kaXNhYmxlZCBsb29rIGZvciBkaXNhYmxlZCBjaG9pY2VzIGluIHRoZSByZXN1bHRzIGRyb3Bkb3duXHJcbiovXHJcbi5zZWxlY3QyLXJlc3VsdHMgLnNlbGVjdDItZGlzYWJsZWQuc2VsZWN0Mi1oaWdobGlnaHRlZCB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuLnNlbGVjdDItcmVzdWx0cyAuc2VsZWN0Mi1kaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1yZXN1bHRzIC5zZWxlY3QyLXNlbGVjdGVkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3QyLW1vcmUtcmVzdWx0cy5zZWxlY3QyLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0IHVybCgnc2VsZWN0Mi1zcGlubmVyLmdpZicpIG5vLXJlcGVhdCAxMDAlO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1yZXN1bHRzIC5zZWxlY3QyLWFqYXgtZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDUwLCA1MCwgLjIpO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1tb3JlLXJlc3VsdHMge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxufVxyXG5cclxuLyogZGlzYWJsZWQgc3R5bGVzICovXHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXIuc2VsZWN0Mi1jb250YWluZXItZGlzYWJsZWQgLnNlbGVjdDItY2hvaWNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLnNlbGVjdDItY29udGFpbmVyLWRpc2FibGVkIC5zZWxlY3QyLWNob2ljZSAuc2VsZWN0Mi1hcnJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXIuc2VsZWN0Mi1jb250YWluZXItZGlzYWJsZWQgLnNlbGVjdDItY2hvaWNlIGFiYnIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qIG11bHRpc2VsZWN0ICovXHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItY2hvaWNlcyB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMSU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDVweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIGN1cnNvcjogdGV4dDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwJSAwJSwgMCUgMTAwJSwgY29sb3Itc3RvcCgxJSwgI2VlZSksIGNvbG9yLXN0b3AoMTUlLCAjZmZmKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlZWUgMSUsICNmZmYgMTUlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2VlZSAxJSwgI2ZmZiAxNSUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VlZSAxJSwgI2ZmZiAxNSUpO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItY2hvaWNlcyB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWxvY2tlZCB7XHJcbiAgcGFkZGluZzogM3B4IDVweCAzcHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1jaG9pY2VzIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aS5zZWxlY3QyLWNvbnRhaW5lci1hY3RpdmUgLnNlbGVjdDItY2hvaWNlcyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTg5N2ZiO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcbn1cclxuLnNlbGVjdDItY29udGFpbmVyLW11bHRpIC5zZWxlY3QyLWNob2ljZXMgbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1jaG9pY2VzIGxpXHJcbntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItY2hvaWNlcyAuc2VsZWN0Mi1zZWFyY2gtZmllbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1jaG9pY2VzIC5zZWxlY3QyLXNlYXJjaC1maWVsZCBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDFweCAwO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLW11bHRpIC5zZWxlY3QyLWNob2ljZXMgLnNlbGVjdDItc2VhcmNoLWZpZWxkIGlucHV0LnNlbGVjdDItYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKCdzZWxlY3QyLXNwaW5uZXIuZ2lmJykgbm8tcmVwZWF0IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdDItZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogIzk5OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItY2hvaWNlcyAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlIHtcclxuICAgIHBhZGRpbmc6IDNweCA1cHggM3B4IDE4cHg7XHJcbiAgICBtYXJnaW46IDNweCAwIDNweCA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWFhYWE7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDJweCAjZmZmIGluc2V0LCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggI2ZmZiBpbnNldCwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblxyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZWVlZWVlJywgZW5kQ29sb3JzdHI9JyNmNGY0ZjQnLCBHcmFkaWVudFR5cGU9MCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCUgMCUsIDAlIDEwMCUsIGNvbG9yLXN0b3AoMjAlLCAjZjRmNGY0KSwgY29sb3Itc3RvcCg1MCUsICNmMGYwZjApLCBjb2xvci1zdG9wKDUyJSwgI2U4ZThlOCksIGNvbG9yLXN0b3AoMTAwJSwgI2VlZSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjRmNGY0IDIwJSwgI2YwZjBmMCA1MCUsICNlOGU4ZTggNTIlLCAjZWVlIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjRmNGY0IDIwJSwgI2YwZjBmMCA1MCUsICNlOGU4ZTggNTIlLCAjZWVlIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y0ZjRmNCAyMCUsICNmMGYwZjAgNTAlLCAjZThlOGU4IDUyJSwgI2VlZSAxMDAlKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2VsZWN0Mi1jb250YWluZXItbXVsdGkgLnNlbGVjdDItY2hvaWNlcyAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlXHJcbntcclxuICAgIG1hcmdpbjogM3B4IDVweCAzcHggMDtcclxuICAgIHBhZGRpbmc6IDNweCAxOHB4IDNweCA1cHg7XHJcbn1cclxuLnNlbGVjdDItY29udGFpbmVyLW11bHRpIC5zZWxlY3QyLWNob2ljZXMgLnNlbGVjdDItc2VhcmNoLWNob2ljZSAuc2VsZWN0Mi1jaG9zZW4ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1jaG9pY2VzIC5zZWxlY3QyLXNlYXJjaC1jaG9pY2UtZm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogI2Q0ZDRkNDtcclxufVxyXG5cclxuLnNlbGVjdDItc2VhcmNoLWNob2ljZS1jbG9zZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDNweDtcclxuICAgIHRvcDogNHB4O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc2VsZWN0Mi5wbmcnKSByaWdodCB0b3Agbm8tcmVwZWF0O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWxlY3QyLXNlYXJjaC1jaG9pY2UtY2xvc2Uge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlLWNsb3NlIHtcclxuICAgIGxlZnQ6IDNweDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlbGVjdDItY29udGFpbmVyLW11bHRpIC5zZWxlY3QyLXNlYXJjaC1jaG9pY2UtY2xvc2Uge1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWNvbnRhaW5lci1tdWx0aSAuc2VsZWN0Mi1jaG9pY2VzIC5zZWxlY3QyLXNlYXJjaC1jaG9pY2UgLnNlbGVjdDItc2VhcmNoLWNob2ljZS1jbG9zZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLTExcHg7XHJcbn1cclxuLnNlbGVjdDItY29udGFpbmVyLW11bHRpIC5zZWxlY3QyLWNob2ljZXMgLnNlbGVjdDItc2VhcmNoLWNob2ljZS1mb2N1cyAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlLWNsb3NlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC0xMXB4O1xyXG59XHJcblxyXG4vKiBkaXNhYmxlZCBzdHlsZXMgKi9cclxuLnNlbGVjdDItY29udGFpbmVyLW11bHRpLnNlbGVjdDItY29udGFpbmVyLWRpc2FibGVkIC5zZWxlY3QyLWNob2ljZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXItbXVsdGkuc2VsZWN0Mi1jb250YWluZXItZGlzYWJsZWQgLnNlbGVjdDItY2hvaWNlcyAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlIHtcclxuICAgIHBhZGRpbmc6IDNweCA1cHggM3B4IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxufVxyXG5cclxuLnNlbGVjdDItY29udGFpbmVyLW11bHRpLnNlbGVjdDItY29udGFpbmVyLWRpc2FibGVkIC5zZWxlY3QyLWNob2ljZXMgLnNlbGVjdDItc2VhcmNoLWNob2ljZSAuc2VsZWN0Mi1zZWFyY2gtY2hvaWNlLWNsb3NlIHsgICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLyogZW5kIG11bHRpc2VsZWN0ICovXHJcblxyXG5cclxuLnNlbGVjdDItcmVzdWx0LXNlbGVjdGFibGUgLnNlbGVjdDItbWF0Y2gsXHJcbi5zZWxlY3QyLXJlc3VsdC11bnNlbGVjdGFibGUgLnNlbGVjdDItbWF0Y2gge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5zZWxlY3QyLW9mZnNjcmVlbiwgLnNlbGVjdDItb2Zmc2NyZWVuOmZvY3VzIHtcclxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3QyLWRpc3BsYXktbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1tZWFzdXJlLXNjcm9sbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMDAwMHB4O1xyXG4gICAgbGVmdDogLTEwMDAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLyogUmV0aW5hLWl6ZSBpY29ucyAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgIHtcclxuICAgIC5zZWxlY3QyLXNlYXJjaCBpbnB1dCxcclxuICAgIC5zZWxlY3QyLXNlYXJjaC1jaG9pY2UtY2xvc2UsXHJcbiAgICAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItY2hvaWNlIGFiYnIsXHJcbiAgICAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItY2hvaWNlIC5zZWxlY3QyLWFycm93IGIge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc2VsZWN0MngyLnBuZycpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjBweCA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdDItc2VhcmNoIGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIC0yMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */</style></template></dom-module>
  `;
  document.head.appendChild($_documentContainer.content);
}
