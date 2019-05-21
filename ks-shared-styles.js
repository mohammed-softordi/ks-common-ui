import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { CustomStyle } from '@polymer/polymer/lib/elements/custom-style'
import '@webcomponents/shadycss/entrypoints/apply-shim';
import './assets/js/bootstrap/bootstrap'
import './assets/js/font-awesome/font-awesome'
import './assets/js/corporate-ui/corporate-ui-fonts'
import './assets/js/corporate-ui/corporate-ui-vendors'
import './assets/js/corporate-ui/corporate-ui';

const sharedStylesElement = document.createElement('dom-module');
sharedStylesElement.innerHTML =
  `<template>
    <style include="bootstrap"></style>
    <style include="font-awesome"></style>
    <style include="corporate-ui-fonts"></style>
    <style include="corporate-ui-vendors"></style>
    <style include="corporate-ui">
      /* #ks-main-footer shared style */
      .ks-nav-item.ks-main-footer {
        font-size: 13px;
        font-weight: bold;
        text-transform: uppercase;
      }
      .ks-nav-item.ks-main-footer:first-child {
          margin-left: 0;
      }
      .ks-nav-item.ks-main-footer:hover {
          text-decoration: underline;
          color: #fff;
      }
      .ks-nav-item.ks-main-footer,
      .ks-nav-item.ks-main-footer:active,
      .ks-nav-item.ks-main-footer:focus {
          color: #fff;
      }
      .ks-nav-item.ks-main-footer span {
          color: inherit;
      }
      /* #end ks-main-footer shared style */
    </style>
  </template>`;

  sharedStylesElement.register('ks-shared-styles');


