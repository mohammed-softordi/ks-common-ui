import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import {CustomStyle} from '@polymer/polymer/lib/elements/custom-style'
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
        .dropdown a {
             cursor: pointer;
         }
        .nav a {
            font-family: "Scania Sans";
            font-weight: bold;
            text-transform: uppercase;
            cursor: pointer;
        }
        .nav > li > a:hover,
        .nav > li > a:focus,
        .dropdown a:hover,
        .dropdown a:focus,
        .dropdown.open a,
        .dropdown.open a:hover,
        .dropdown.open a:focus {
             background-color: transparent;
        }
        li + li > a .pipe, .piped {
            border-left: 1px solid #e2e2e2;
            padding: 0 15px;
        }
        .navbar-nav a,
        .navbar-nav .dropdown-menu li a{                  
           color: #909090;
        }
       .navbar-nav .active a,
       .navbar-nav a:hover,
       .navbar-nav a:focus,
       .navbar-nav .dropdown-menu li.active a,
       .navbar-nav .dropdown-menu li a:hover,
       .navbar-nav .dropdown-menu li a:focus
       .navbar-nav .more .dropdown-menu li.active a,
       .navbar-nav .more .dropdown-menu li a:hover,
       .navbar-nav .more .dropdown-menu li a:focus{
            color: #041e42;
       }
        /* #ks-main-header shared style */ 
        .navbar-nav.navbar-right,
        .user-account-menu {
            transition: padding-right .2s ease-out;
        }
       
      /* #ks-main-header shared style */
      .ks-nav-item.ks-main-header {
        padding: 15px;
        font-family: "Scania Sans";
        font-weight: normal;
        font-size: 12px;
        color: #747472;
        text-transform: uppercase;
      }
    
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


