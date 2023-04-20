/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@500&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Stylesheet injected into DOM using webpack CSS loader */\n\n:root {\n    --body-padding: 1rem 5rem;\n    --header-title-font-size: 2rem;\n    --nav-list-gap: 5%;\n\n    --heading-font-size: 4rem;\n    --main-sushi-image-width: 400px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    \n    box-sizing: border-box;\n\n    text-decoration: none;\n\n    user-select: none;\n}\n\nbody {\n    height: 100vh;\n    \n    background: rgb(187, 219, 110);\n    display: grid;\n    grid-template-rows: auto 2fr;\n    padding: var(--body-padding);\n\n    font-family: 'Lobster', 'Lucida Sans', Arial;\n}\n\n/* Header & Navbar */\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: var(--header-title-font-size);\n\n    min-width: 200px;\n}\n\n.menu {\n    display: flex;\n    list-style-type: none;\n    gap: var(--nav-list-gap);\n    flex-grow: 1;\n\n    justify-content: flex-end;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-weight: lighter;\n}\n\n.menu > li {\n    overflow: hidden;\n}\n\na {\n    color: inherit;\n}\n\n\n.menu-button-container {\n    display: none;\n    height: 100%;\n    width: 30px;\n    cursor: pointer;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#menu-toggle {\n    display: none;\n}\n\n.menu-button,\n.menu-button::before,\n.menu-button::after {\n    display: block;\n    background-color: #000;\n    position: absolute;\n    height: 4px;\n    width: 30px;\n    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);\n    border-radius: 2px;\n}\n\n.menu-button::before {\n    content: '';\n    margin-top: -8px;\n}\n\n.menu-button::after {\n    content: '';\n    margin-top: 8px;\n}\n\n#menu-toggle:checked + .menu-button-container .menu-button::before {\n    margin-top: 0px;\n    transform: rotate(405deg);\n}\n\n#menu-toggle:checked + .menu-button-container .menu-button {\n    background:rgba(255, 255, 255, 0);\n}\n\n#menu-toggle:checked + .menu-button-container .menu-button::after {\n    margin-top: 0px;\n    transform: rotate(-405deg);\n}\n\n\n.content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    margin-top: 3rem;\n}\n\n/* Home content */\n\n.description {\n    display: flex;\n    flex-direction: column;\n\n    gap: 20px;\n\n    margin-bottom: 2rem;\n}\n\n.heading {\n    font-size: var(--heading-font-size);\n    line-height: 55px;\n}\n\n.sub-heading {\n    font-size: calc(var(--heading-font-size) / 3);\n    font-family: sans-serif;\n}\n\n.check-it-out {\n    align-self: flex-start;\n    border: 0;\n    background-color: rgb(75, 88, 44);\n    padding: 10px 2rem;\n\n    color: white;\n    font-weight: bold;\n\n    cursor: pointer;\n}\n\n.main-food {\n    width: var(--main-sushi-image-width);\n}\n\n.main-food img {\n    width: 100%;\n}\n\n/* Menu content */\n\n.container {\n    box-sizing: content-box;\n    width: 100%;\n    background: white;\n    border: 5px solid #deeeb9;\n    padding: 0 1rem 2rem 1rem;\n    text-align: center;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\n    gap: 5rem;\n\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.sushi-card > img {\n    width: 100%;\n}\n\n.sushi-card {\n    display: flex;\n    flex-direction: column;\n}\n\n\n.sushi-card img {\n    max-height: 200px;\n    flex-grow: 1;\n    object-fit: contain;\n}\n\n.sushi-info {\n    line-height: 1.6;\n\n    margin-bottom: auto;\n}\n\n.sushi-name {\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.sushi-price {\n    color: rgb(203, 43, 43);\n}\n\n.sushi-description {\n    opacity: 0.5;\n}\n\n/* Footer content */\n\nfooter {\n    position: fixed;\n    \n    right: 5px;\n    top: 50%;\n    transform: translateY(-50%);\n\n    font-family: 'Gill Sans', Arial;\n    writing-mode: vertical-rl;\n    text-orientation: mixed;\n\n}\n\n/* Responsive Media */\n\n@media (max-width: 1050px){\n    :root {    \n        --heading-font-size: 3.5rem;\n        --main-sushi-image-width: 350px;\n    }\n\n    header .restaurant-name {\n        width: 50%;\n    }\n    \n    header nav {\n        width: 50%;\n    }\n}\n\n@media (max-width: 930px){\n\n    :root {    \n        --heading-font-size: 3rem;\n        --main-sushi-image-width: 300px;\n    }\n\n    .content {\n        display: flex;\n        flex-direction: column-reverse;\n        justify-content: center;\n\n        gap: 2rem;\n\n        \n    }\n\n}\n\n@media (max-width: 800px) {\n\n    header > div {\n        font-size: 1.7rem;\n    }\n    \n    /* Collapsible Navbar */\n\n    .menu-button-container {\n      display: flex;\n    }\n    .menu {\n      position: absolute;\n      top: 0;\n      margin-top: 70px;\n      left: 0;\n      flex-direction: column;\n      width: 100%;\n      justify-content: center;\n      align-items: center;\n    }\n    #menu-toggle ~ .menu li {\n      height: 0;\n      margin: 0;\n      padding: 0;\n      border: 0;\n      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);\n    }\n    #menu-toggle:checked ~ .menu li {\n      border: 1px solid #333;\n      height: 2.5em;\n      padding: 0.5em;\n      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);\n    }\n    .menu > li {\n      display: flex;\n      justify-content: center;\n      margin: 0;\n      padding: 0.5em 0;\n      width: 100%;\n      color: white;\n      background-color: #222;\n    }\n    .menu > li:not(:last-child) {\n      border-bottom: 1px solid #444;\n    }\n}\n\n@media (max-width: 470px) {\n    header > div {\n        font-size: 1.5rem;\n    }\n\n}\n\n@media (max-width: 400px) {\n    :root {\n        --body-padding: 1rem 2rem;\n    }\n    \n    header > div {\n        font-size: 1.1rem;\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Stylesheet injected into DOM using webpack CSS loader */\n\n@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@500&family=Roboto&display=swap');\n\n:root {\n    --body-padding: 1rem 5rem;\n    --header-title-font-size: 2rem;\n    --nav-list-gap: 5%;\n\n    --heading-font-size: 4rem;\n    --main-sushi-image-width: 400px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    \n    box-sizing: border-box;\n\n    text-decoration: none;\n\n    user-select: none;\n}\n\nbody {\n    height: 100vh;\n    \n    background: rgb(187, 219, 110);\n    display: grid;\n    grid-template-rows: auto 2fr;\n    padding: var(--body-padding);\n\n    font-family: 'Lobster', 'Lucida Sans', Arial;\n}\n\n/* Header & Navbar */\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: var(--header-title-font-size);\n\n    min-width: 200px;\n}\n\n.menu {\n    display: flex;\n    list-style-type: none;\n    gap: var(--nav-list-gap);\n    flex-grow: 1;\n\n    justify-content: flex-end;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-weight: lighter;\n}\n\n.menu > li {\n    overflow: hidden;\n}\n\na {\n    color: inherit;\n}\n\n\n.menu-button-container {\n    display: none;\n    height: 100%;\n    width: 30px;\n    cursor: pointer;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#menu-toggle {\n    display: none;\n}\n\n.menu-button,\n.menu-button::before,\n.menu-button::after {\n    display: block;\n    background-color: #000;\n    position: absolute;\n    height: 4px;\n    width: 30px;\n    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);\n    border-radius: 2px;\n}\n\n.menu-button::before {\n    content: '';\n    margin-top: -8px;\n}\n\n.menu-button::after {\n    content: '';\n    margin-top: 8px;\n}\n\n#menu-toggle:checked + .menu-button-container .menu-button::before {\n    margin-top: 0px;\n    transform: rotate(405deg);\n}\n\n#menu-toggle:checked + .menu-button-container .menu-button {\n    background:rgba(255, 255, 255, 0);\n}\n\n#menu-toggle:checked + .menu-button-container .menu-button::after {\n    margin-top: 0px;\n    transform: rotate(-405deg);\n}\n\n\n.content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    margin-top: 3rem;\n}\n\n/* Home content */\n\n.description {\n    display: flex;\n    flex-direction: column;\n\n    gap: 20px;\n\n    margin-bottom: 2rem;\n}\n\n.heading {\n    font-size: var(--heading-font-size);\n    line-height: 55px;\n}\n\n.sub-heading {\n    font-size: calc(var(--heading-font-size) / 3);\n    font-family: sans-serif;\n}\n\n.check-it-out {\n    align-self: flex-start;\n    border: 0;\n    background-color: rgb(75, 88, 44);\n    padding: 10px 2rem;\n\n    color: white;\n    font-weight: bold;\n\n    cursor: pointer;\n}\n\n.main-food {\n    width: var(--main-sushi-image-width);\n}\n\n.main-food img {\n    width: 100%;\n}\n\n/* Menu content */\n\n.container {\n    box-sizing: content-box;\n    width: 100%;\n    background: white;\n    border: 5px solid #deeeb9;\n    padding: 0 1rem 2rem 1rem;\n    text-align: center;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\n    gap: 5rem;\n\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.sushi-card > img {\n    width: 100%;\n}\n\n.sushi-card {\n    display: flex;\n    flex-direction: column;\n}\n\n\n.sushi-card img {\n    max-height: 200px;\n    flex-grow: 1;\n    object-fit: contain;\n}\n\n.sushi-info {\n    line-height: 1.6;\n\n    margin-bottom: auto;\n}\n\n.sushi-name {\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.sushi-price {\n    color: rgb(203, 43, 43);\n}\n\n.sushi-description {\n    opacity: 0.5;\n}\n\n/* Footer content */\n\nfooter {\n    position: fixed;\n    \n    right: 5px;\n    top: 50%;\n    transform: translateY(-50%);\n\n    font-family: 'Gill Sans', Arial;\n    writing-mode: vertical-rl;\n    text-orientation: mixed;\n\n}\n\n/* Responsive Media */\n\n@media (max-width: 1050px){\n    :root {    \n        --heading-font-size: 3.5rem;\n        --main-sushi-image-width: 350px;\n    }\n\n    header .restaurant-name {\n        width: 50%;\n    }\n    \n    header nav {\n        width: 50%;\n    }\n}\n\n@media (max-width: 930px){\n\n    :root {    \n        --heading-font-size: 3rem;\n        --main-sushi-image-width: 300px;\n    }\n\n    .content {\n        display: flex;\n        flex-direction: column-reverse;\n        justify-content: center;\n\n        gap: 2rem;\n\n        \n    }\n\n}\n\n@media (max-width: 800px) {\n\n    header > div {\n        font-size: 1.7rem;\n    }\n    \n    /* Collapsible Navbar */\n\n    .menu-button-container {\n      display: flex;\n    }\n    .menu {\n      position: absolute;\n      top: 0;\n      margin-top: 70px;\n      left: 0;\n      flex-direction: column;\n      width: 100%;\n      justify-content: center;\n      align-items: center;\n    }\n    #menu-toggle ~ .menu li {\n      height: 0;\n      margin: 0;\n      padding: 0;\n      border: 0;\n      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);\n    }\n    #menu-toggle:checked ~ .menu li {\n      border: 1px solid #333;\n      height: 2.5em;\n      padding: 0.5em;\n      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);\n    }\n    .menu > li {\n      display: flex;\n      justify-content: center;\n      margin: 0;\n      padding: 0.5em 0;\n      width: 100%;\n      color: white;\n      background-color: #222;\n    }\n    .menu > li:not(:last-child) {\n      border-bottom: 1px solid #444;\n    }\n}\n\n@media (max-width: 470px) {\n    header > div {\n        font-size: 1.5rem;\n    }\n\n}\n\n@media (max-width: 400px) {\n    :root {\n        --body-padding: 1rem 2rem;\n    }\n    \n    header > div {\n        font-size: 1.1rem;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_main_sushi_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/main-sushi.png */ "./src/img/main-sushi.png");


function createDescription() {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');
    headingDiv.innerHTML = 
    `
        <span>Home For Healthy,</span>
        <br>
        <span>Delicious Sushis</span>
    `;

    const subHeadingDiv = document.createElement('div');
    subHeadingDiv.classList.add('sub-heading');
    subHeadingDiv.innerHTML = 
    `
        <span>No guilty pleasure,</span>
        <br>
        <span>just enjoy!</span>
    `;

    const checkItOutBtn = document.createElement('button');
    checkItOutBtn.textContent = "Check It Out"
    checkItOutBtn.classList.add('check-it-out');

    descriptionDiv.appendChild(headingDiv)
    descriptionDiv.appendChild(subHeadingDiv)
    descriptionDiv.appendChild(checkItOutBtn);
    
    return descriptionDiv;
}

function createImageContainer() {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('main-food');


    const sushiIMG = document.createElement('img');
    sushiIMG.src = _img_main_sushi_png__WEBPACK_IMPORTED_MODULE_0__;

    imageContainer.appendChild(sushiIMG);

    return imageContainer
}

function createContent() {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const description = createDescription();
    const imageSection = createImageContainer();

    contentDiv.appendChild(description);
    contentDiv.appendChild(imageSection);

    return contentDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContent);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_tamago_sushi_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/tamago-sushi.png */ "./src/img/tamago-sushi.png");
/* harmony import */ var _img_saba_teriyaki_sushi_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/saba-teriyaki-sushi.png */ "./src/img/saba-teriyaki-sushi.png");
/* harmony import */ var _img_masago_sushi_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/masago-sushi.png */ "./src/img/masago-sushi.png");
/* harmony import */ var _img_nigiri_sushi_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/nigiri-sushi.png */ "./src/img/nigiri-sushi.png");
/* harmony import */ var _img_toro_sushi_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/toro-sushi.png */ "./src/img/toro-sushi.png");
/* harmony import */ var _img_ikura_sushi_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/ikura-sushi.png */ "./src/img/ikura-sushi.png");
/* harmony import */ var _img_unagi_sushi_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/unagi-sushi.png */ "./src/img/unagi-sushi.png");
/* harmony import */ var _img_philadelphia_sushi_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/philadelphia-sushi.png */ "./src/img/philadelphia-sushi.png");
/* harmony import */ var _img_sake_hand_roll_sushi_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/sake-hand-roll-sushi.png */ "./src/img/sake-hand-roll-sushi.png");
/* harmony import */ var _img_tekkamaki_sushi_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/tekkamaki-sushi.png */ "./src/img/tekkamaki-sushi.png");












function createContent() {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add("content");

    contentDiv.innerHTML = 
    `
    <div class="container">
        <div class="sushi-card">
            <img src=${_img_tamago_sushi_png__WEBPACK_IMPORTED_MODULE_0__} />
            <div class="sushi-info">
                <p class="sushi-name">Tamago</p>
                <p class="sushi-price">$2.50</p>
                <p class="sushi-description">Tamago sushi is a delicate Japanese sushi made with seasoned egg, rice, and love</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${_img_tekkamaki_sushi_png__WEBPACK_IMPORTED_MODULE_9__} />
            <div class="sushi-info">
                <p class="sushi-name">Tekkamaki</p>
                <p class="sushi-price">$3.00</p>
                <p class="sushi-description">Tekkamaki sushi is a classic sushi roll filled with fresh tuna and wrapped in seaweed</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${_img_saba_teriyaki_sushi_png__WEBPACK_IMPORTED_MODULE_1__} />
            <div class="sushi-info">
                <p class="sushi-name">Saba Teriyaki</p>
                <p class="sushi-price">$4.50</p>
                <p class="sushi-description">Saba teriyaki sushi features grilled mackerel with a sweet and savory teriyaki sauce</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${_img_masago_sushi_png__WEBPACK_IMPORTED_MODULE_2__} />
            <div class="sushi-info">
                <p class="sushi-name">Masago</p>
                <p class="sushi-price">$4.50</p>
                <p class="sushi-description">Masago sushi is a sushi roll filled with crunchy, colourful capelin roe, delivering a burst of flavour</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${_img_nigiri_sushi_png__WEBPACK_IMPORTED_MODULE_3__} />
            <div class="sushi-info">
                <p class="sushi-name">Nigiri</p>
                <p class="sushi-price">$5.00</p>
                <p class="sushi-description">Nigiri sushi is a simple and elegant sushi that consists of a small ball of rice topped with fresh fish</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${_img_toro_sushi_png__WEBPACK_IMPORTED_MODULE_4__} />
            <div class="sushi-info">
                <p class="sushi-name">Toro</p>
                <p class="sushi-price">$4.00</p>
                <p class="sushi-description">Toro sushi is a prized delicacy made from the buttery, fatty belly of tuna</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${_img_ikura_sushi_png__WEBPACK_IMPORTED_MODULE_5__} />
            <div class="sushi-info">
                <p class="sushi-name">Ikura</p>
                <p class="sushi-price">$4.00</p>
                <p class="sushi-description">Ikura sushi features bright, plump salmon roe that pops with a satisfying burst of briny flavour</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${_img_unagi_sushi_png__WEBPACK_IMPORTED_MODULE_6__} />
            <div class="sushi-info">
                <p class="sushi-name">Unagi</p>
                <p class="sushi-price">$5.00</p>
                <p class="sushi-description">Unagi sushi showcases savoury, grilled freshwater eel with a touch of sweet sauce</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${_img_philadelphia_sushi_png__WEBPACK_IMPORTED_MODULE_7__} />
            <div class="sushi-info">
                <p class="sushi-name">Philadelphia</p>
                <p class="sushi-price">$3.50</p>
                <p class="sushi-description">Philadelphia sushi is a popular sushi roll that combines creamy cheese, smoked salmon and avocado</p>
            </div>
        </div>

        <div class="sushi-card">
            <img src=${_img_sake_hand_roll_sushi_png__WEBPACK_IMPORTED_MODULE_8__} />
            <div class="sushi-info">
                <p class="sushi-name">Sake Handroll</p>
                <p class="sushi-price">$3.50</p>
                <p class="sushi-description">Sake handroll is a hand-rolled sushi filled with fresh salmon and other ingredients</p>
            </div>
        </div>
    </div>
    `
    return contentDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContent);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindingEvents": () => (/* binding */ bindingEvents),
/* harmony export */   "initWebsite": () => (/* binding */ initWebsite)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



// Default content
let content = (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

function createHeader() {
    const headerContainer = document.createElement('header');

    // Bad practice, don't use this in real life projects
    headerContainer.innerHTML = 
    `
    <div>
      Zhenkai's Sushi Place
    </div>

    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
    </label>

    <ul class="menu">
      <li id='home-btn'><a href=''>Home</a></li>
      <li id='menu-btn'><a href=''>Menu</a></li>
    </ul>
    `;


    return headerContainer;
}

function createFooter() {
    const footerContainer = document.createElement('footer');
    footerContainer.textContent = 'Copyright © 2023 hzk2021@GitHub';

    return footerContainer;
}

function loadContent() {

    const htmlBody = document.querySelector('body');
    const footerDiv = document.querySelector('footer');
    const contentDiv = document.querySelector('.content');
    
    contentDiv.remove();
    
    htmlBody.insertBefore(content, footerDiv);
}

function bindingEvents(home_btn, menu_btn, about_btn, check_it_out_btn) {
    home_btn.addEventListener('click', () => {
        e.preventDefault();

        content = (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
        loadContent();
    });

    menu_btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        content = (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        loadContent();
    });

    check_it_out_btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        content = (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        loadContent();
    });

}

function initWebsite() {
    document.createComment("Dynamically generated content with JavaScript");

    const htmlBody = document.querySelector('body');

    const header = createHeader();
    const footer = createFooter();

    htmlBody.appendChild(header);
    htmlBody.appendChild(content);
    htmlBody.appendChild(footer);

};


/***/ }),

/***/ "./src/img/ikura-sushi.png":
/*!*********************************!*\
  !*** ./src/img/ikura-sushi.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df3727cdd3c6e150bdb0.png";

/***/ }),

/***/ "./src/img/main-sushi.png":
/*!********************************!*\
  !*** ./src/img/main-sushi.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3d4d88a895bad682cf0.png";

/***/ }),

/***/ "./src/img/masago-sushi.png":
/*!**********************************!*\
  !*** ./src/img/masago-sushi.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5f71fb96175fe4f3e5e.png";

/***/ }),

/***/ "./src/img/nigiri-sushi.png":
/*!**********************************!*\
  !*** ./src/img/nigiri-sushi.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04c129ab75689a8defcb.png";

/***/ }),

/***/ "./src/img/philadelphia-sushi.png":
/*!****************************************!*\
  !*** ./src/img/philadelphia-sushi.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d9edb467b6c4cdab977.png";

/***/ }),

/***/ "./src/img/saba-teriyaki-sushi.png":
/*!*****************************************!*\
  !*** ./src/img/saba-teriyaki-sushi.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a40662884422e01b06b9.png";

/***/ }),

/***/ "./src/img/sake-hand-roll-sushi.png":
/*!******************************************!*\
  !*** ./src/img/sake-hand-roll-sushi.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3582e776879423570ff7.png";

/***/ }),

/***/ "./src/img/tamago-sushi.png":
/*!**********************************!*\
  !*** ./src/img/tamago-sushi.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e1027777b424b8bd06e.png";

/***/ }),

/***/ "./src/img/tekkamaki-sushi.png":
/*!*************************************!*\
  !*** ./src/img/tekkamaki-sushi.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcd01e693dd4e7aa22c6.png";

/***/ }),

/***/ "./src/img/toro-sushi.png":
/*!********************************!*\
  !*** ./src/img/toro-sushi.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b095b4570a93eed956f.png";

/***/ }),

/***/ "./src/img/unagi-sushi.png":
/*!*********************************!*\
  !*** ./src/img/unagi-sushi.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17f09698ac72abf63748.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/website.js");




(0,_website__WEBPACK_IMPORTED_MODULE_1__.initWebsite)();

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const checkItOutBtn = document.querySelector('.check-it-out');

(0,_website__WEBPACK_IMPORTED_MODULE_1__.bindingEvents)(homeBtn, menuBtn, aboutBtn, checkItOutBtn);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsV0FBVyxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sV0FBVyxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZ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QWEsNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmZhbWlseT1Qb3BwaW5zOndnaHRANTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU3R5bGVzaGVldCBpbmplY3RlZCBpbnRvIERPTSB1c2luZyB3ZWJwYWNrIENTUyBsb2FkZXIgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tYm9keS1wYWRkaW5nOiAxcmVtIDVyZW07XFxuICAgIC0taGVhZGVyLXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1uYXYtbGlzdC1nYXA6IDUlO1xcblxcbiAgICAtLWhlYWRpbmctZm9udC1zaXplOiA0cmVtO1xcbiAgICAtLW1haW4tc3VzaGktaW1hZ2Utd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg3LCAyMTksIDExMCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAyZnI7XFxuICAgIHBhZGRpbmc6IHZhcigtLWJvZHktcGFkZGluZyk7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsICdMdWNpZGEgU2FucycsIEFyaWFsO1xcbn1cXG5cXG4vKiBIZWFkZXIgJiBOYXZiYXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLXRpdGxlLWZvbnQtc2l6ZSk7XFxuXFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBnYXA6IHZhcigtLW5hdi1saXN0LWdhcCk7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4ubWVudSA+IGxpIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5cXG4ubWVudS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21lbnUtdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1lbnUtYnV0dG9uLFxcbi5tZW51LWJ1dHRvbjo6YmVmb3JlLFxcbi5tZW51LWJ1dHRvbjo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbiNtZW51LXRvZ2dsZTpjaGVja2VkICsgLm1lbnUtYnV0dG9uLWNvbnRhaW5lciAubWVudS1idXR0b246OmJlZm9yZSB7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcXG59XFxuXFxuI21lbnUtdG9nZ2xlOmNoZWNrZWQgKyAubWVudS1idXR0b24tY29udGFpbmVyIC5tZW51LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuI21lbnUtdG9nZ2xlOmNoZWNrZWQgKyAubWVudS1idXR0b24tY29udGFpbmVyIC5tZW51LWJ1dHRvbjo6YWZ0ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xcbn1cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLyogSG9tZSBjb250ZW50ICovXFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xcbiAgICBsaW5lLWhlaWdodDogNTVweDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLWhlYWRpbmctZm9udC1zaXplKSAvIDMpO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNoZWNrLWl0LW91dCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA4OCwgNDQpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDJyZW07XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tZm9vZCB7XFxuICAgIHdpZHRoOiB2YXIoLS1tYWluLXN1c2hpLWltYWdlLXdpZHRoKTtcXG59XFxuXFxuLm1haW4tZm9vZCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogTWVudSBjb250ZW50ICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNkZWVlYjk7XFxuICAgIHBhZGRpbmc6IDAgMXJlbSAycmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuXFxuICAgIGdhcDogNXJlbTtcXG5cXG4gICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnN1c2hpLWNhcmQgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN1c2hpLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4uc3VzaGktY2FyZCBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uc3VzaGktaW5mbyB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5zdXNoaS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uc3VzaGktcHJpY2Uge1xcbiAgICBjb2xvcjogcmdiKDIwMywgNDMsIDQzKTtcXG59XFxuXFxuLnN1c2hpLWRlc2NyaXB0aW9uIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBGb290ZXIgY29udGVudCAqL1xcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgXFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgQXJpYWw7XFxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxuICAgIHRleHQtb3JpZW50YXRpb246IG1peGVkO1xcblxcbn1cXG5cXG4vKiBSZXNwb25zaXZlIE1lZGlhICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCl7XFxuICAgIDpyb290IHsgICAgXFxuICAgICAgICAtLWhlYWRpbmctZm9udC1zaXplOiAzLjVyZW07XFxuICAgICAgICAtLW1haW4tc3VzaGktaW1hZ2Utd2lkdGg6IDM1MHB4O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciAucmVzdGF1cmFudC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG4gICAgXFxuICAgIGhlYWRlciBuYXYge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpe1xcblxcbiAgICA6cm9vdCB7ICAgIFxcbiAgICAgICAgLS1oZWFkaW5nLWZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIC0tbWFpbi1zdXNoaS1pbWFnZS13aWR0aDogMzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgZ2FwOiAycmVtO1xcblxcbiAgICAgICAgXFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuXFxuICAgIGhlYWRlciA+IGRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLyogQ29sbGFwc2libGUgTmF2YmFyICovXFxuXFxuICAgIC5tZW51LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gICAgLm1lbnUge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjbWVudS10b2dnbGUgfiAubWVudSBsaSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICB9XFxuICAgICNtZW51LXRvZ2dsZTpjaGVja2VkIH4gLm1lbnUgbGkge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICB9XFxuICAgIC5tZW51ID4gbGkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxuICAgIH1cXG4gICAgLm1lbnUgPiBsaTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDcwcHgpIHtcXG4gICAgaGVhZGVyID4gZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLWJvZHktcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICBoZWFkZXIgPiBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIH1cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFj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O0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLHlCQUF5QjtRQUN6QiwrQkFBK0I7SUFDbkM7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLHVCQUF1Qjs7UUFFdkIsU0FBUzs7O0lBR2I7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUEsdUJBQXVCOztJQUV2QjtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLE1BQU07TUFDTixnQkFBZ0I7TUFDaEIsT0FBTztNQUNQLHNCQUFzQjtNQUN0QixXQUFXO01BQ1gsdUJBQXVCO01BQ3ZCLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsU0FBUztNQUNULFNBQVM7TUFDVCxVQUFVO01BQ1YsU0FBUztNQUNULHVEQUF1RDtJQUN6RDtJQUNBO01BQ0Usc0JBQXNCO01BQ3RCLGFBQWE7TUFDYixjQUFjO01BQ2QsdURBQXVEO0lBQ3pEO0lBQ0E7TUFDRSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLFNBQVM7TUFDVCxnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVk7TUFDWixzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLDZCQUE2QjtJQUMvQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdHlsZXNoZWV0IGluamVjdGVkIGludG8gRE9NIHVzaW5nIHdlYnBhY2sgQ1NTIGxvYWRlciAqL1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZmFtaWx5PVBvcHBpbnM6d2dodEA1MDAmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tYm9keS1wYWRkaW5nOiAxcmVtIDVyZW07XFxuICAgIC0taGVhZGVyLXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1uYXYtbGlzdC1nYXA6IDUlO1xcblxcbiAgICAtLWhlYWRpbmctZm9udC1zaXplOiA0cmVtO1xcbiAgICAtLW1haW4tc3VzaGktaW1hZ2Utd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg3LCAyMTksIDExMCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAyZnI7XFxuICAgIHBhZGRpbmc6IHZhcigtLWJvZHktcGFkZGluZyk7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsICdMdWNpZGEgU2FucycsIEFyaWFsO1xcbn1cXG5cXG4vKiBIZWFkZXIgJiBOYXZiYXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLXRpdGxlLWZvbnQtc2l6ZSk7XFxuXFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBnYXA6IHZhcigtLW5hdi1saXN0LWdhcCk7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4ubWVudSA+IGxpIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5cXG4ubWVudS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21lbnUtdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1lbnUtYnV0dG9uLFxcbi5tZW51LWJ1dHRvbjo6YmVmb3JlLFxcbi5tZW51LWJ1dHRvbjo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbiNtZW51LXRvZ2dsZTpjaGVja2VkICsgLm1lbnUtYnV0dG9uLWNvbnRhaW5lciAubWVudS1idXR0b246OmJlZm9yZSB7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcXG59XFxuXFxuI21lbnUtdG9nZ2xlOmNoZWNrZWQgKyAubWVudS1idXR0b24tY29udGFpbmVyIC5tZW51LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuI21lbnUtdG9nZ2xlOmNoZWNrZWQgKyAubWVudS1idXR0b24tY29udGFpbmVyIC5tZW51LWJ1dHRvbjo6YWZ0ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xcbn1cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLyogSG9tZSBjb250ZW50ICovXFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xcbiAgICBsaW5lLWhlaWdodDogNTVweDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLWhlYWRpbmctZm9udC1zaXplKSAvIDMpO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNoZWNrLWl0LW91dCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA4OCwgNDQpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDJyZW07XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tZm9vZCB7XFxuICAgIHdpZHRoOiB2YXIoLS1tYWluLXN1c2hpLWltYWdlLXdpZHRoKTtcXG59XFxuXFxuLm1haW4tZm9vZCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogTWVudSBjb250ZW50ICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNkZWVlYjk7XFxuICAgIHBhZGRpbmc6IDAgMXJlbSAycmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuXFxuICAgIGdhcDogNXJlbTtcXG5cXG4gICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnN1c2hpLWNhcmQgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN1c2hpLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4uc3VzaGktY2FyZCBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uc3VzaGktaW5mbyB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi5zdXNoaS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uc3VzaGktcHJpY2Uge1xcbiAgICBjb2xvcjogcmdiKDIwMywgNDMsIDQzKTtcXG59XFxuXFxuLnN1c2hpLWRlc2NyaXB0aW9uIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBGb290ZXIgY29udGVudCAqL1xcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgXFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgQXJpYWw7XFxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxuICAgIHRleHQtb3JpZW50YXRpb246IG1peGVkO1xcblxcbn1cXG5cXG4vKiBSZXNwb25zaXZlIE1lZGlhICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCl7XFxuICAgIDpyb290IHsgICAgXFxuICAgICAgICAtLWhlYWRpbmctZm9udC1zaXplOiAzLjVyZW07XFxuICAgICAgICAtLW1haW4tc3VzaGktaW1hZ2Utd2lkdGg6IDM1MHB4O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciAucmVzdGF1cmFudC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG4gICAgXFxuICAgIGhlYWRlciBuYXYge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpe1xcblxcbiAgICA6cm9vdCB7ICAgIFxcbiAgICAgICAgLS1oZWFkaW5nLWZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIC0tbWFpbi1zdXNoaS1pbWFnZS13aWR0aDogMzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgZ2FwOiAycmVtO1xcblxcbiAgICAgICAgXFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuXFxuICAgIGhlYWRlciA+IGRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLyogQ29sbGFwc2libGUgTmF2YmFyICovXFxuXFxuICAgIC5tZW51LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gICAgLm1lbnUge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjbWVudS10b2dnbGUgfiAubWVudSBsaSB7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICB9XFxuICAgICNtZW51LXRvZ2dsZTpjaGVja2VkIH4gLm1lbnUgbGkge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICB9XFxuICAgIC5tZW51ID4gbGkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxuICAgIH1cXG4gICAgLm1lbnUgPiBsaTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDcwcHgpIHtcXG4gICAgaGVhZGVyID4gZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLWJvZHktcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICBoZWFkZXIgPiBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzdXNoaUltYWdlIGZyb20gJy4vaW1nL21haW4tc3VzaGkucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuXG4gICAgY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmdEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgIGhlYWRpbmdEaXYuaW5uZXJIVE1MID0gXG4gICAgYFxuICAgICAgICA8c3Bhbj5Ib21lIEZvciBIZWFsdGh5LDwvc3Bhbj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8c3Bhbj5EZWxpY2lvdXMgU3VzaGlzPC9zcGFuPlxuICAgIGA7XG5cbiAgICBjb25zdCBzdWJIZWFkaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViSGVhZGluZ0Rpdi5jbGFzc0xpc3QuYWRkKCdzdWItaGVhZGluZycpO1xuICAgIHN1YkhlYWRpbmdEaXYuaW5uZXJIVE1MID0gXG4gICAgYFxuICAgICAgICA8c3Bhbj5ObyBndWlsdHkgcGxlYXN1cmUsPC9zcGFuPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxzcGFuPmp1c3QgZW5qb3khPC9zcGFuPlxuICAgIGA7XG5cbiAgICBjb25zdCBjaGVja0l0T3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2hlY2tJdE91dEJ0bi50ZXh0Q29udGVudCA9IFwiQ2hlY2sgSXQgT3V0XCJcbiAgICBjaGVja0l0T3V0QnRuLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWl0LW91dCcpO1xuXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoaGVhZGluZ0RpdilcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChzdWJIZWFkaW5nRGl2KVxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNoZWNrSXRPdXRCdG4pO1xuICAgIFxuICAgIHJldHVybiBkZXNjcmlwdGlvbkRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VDb250YWluZXIoKSB7XG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWZvb2QnKTtcblxuXG4gICAgY29uc3Qgc3VzaGlJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzdXNoaUlNRy5zcmMgPSBzdXNoaUltYWdlO1xuXG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VzaGlJTUcpO1xuXG4gICAgcmV0dXJuIGltYWdlQ29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbigpO1xuICAgIGNvbnN0IGltYWdlU2VjdGlvbiA9IGNyZWF0ZUltYWdlQ29udGFpbmVyKCk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGltYWdlU2VjdGlvbik7XG5cbiAgICByZXR1cm4gY29udGVudERpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGVudDsiLCJpbXBvcnQgdGFtYWdvIGZyb20gJy4vaW1nL3RhbWFnby1zdXNoaS5wbmcnO1xuaW1wb3J0IHNhYmFUZXJpeWFraSBmcm9tICcuL2ltZy9zYWJhLXRlcml5YWtpLXN1c2hpLnBuZyc7XG5pbXBvcnQgbWFzYWdvIGZyb20gJy4vaW1nL21hc2Fnby1zdXNoaS5wbmcnO1xuaW1wb3J0IG5pZ2lyaSBmcm9tICcuL2ltZy9uaWdpcmktc3VzaGkucG5nJztcbmltcG9ydCB0b3JvIGZyb20gJy4vaW1nL3Rvcm8tc3VzaGkucG5nJztcbmltcG9ydCBpa3VyYSBmcm9tICcuL2ltZy9pa3VyYS1zdXNoaS5wbmcnO1xuaW1wb3J0IHVuYWdpIGZyb20gJy4vaW1nL3VuYWdpLXN1c2hpLnBuZyc7XG5pbXBvcnQgcGhpbGFkZWxwaGlhIGZyb20gJy4vaW1nL3BoaWxhZGVscGhpYS1zdXNoaS5wbmcnXG5pbXBvcnQgc2FrZUhhbmRSb2xsIGZyb20gJy4vaW1nL3Nha2UtaGFuZC1yb2xsLXN1c2hpLnBuZydcbmltcG9ydCB0ZWtrYW1ha2kgZnJvbSAnLi9pbWcvdGVra2FtYWtpLXN1c2hpLnBuZydcblxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VzaGktY2FyZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9JHt0YW1hZ299IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VzaGktaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktbmFtZVwiPlRhbWFnbzwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1c2hpLXByaWNlXCI+JDIuNTA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdXNoaS1kZXNjcmlwdGlvblwiPlRhbWFnbyBzdXNoaSBpcyBhIGRlbGljYXRlIEphcGFuZXNlIHN1c2hpIG1hZGUgd2l0aCBzZWFzb25lZCBlZ2csIHJpY2UsIGFuZCBsb3ZlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdXNoaS1jYXJkXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz0ke3Rla2thbWFraX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXNoaS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdXNoaS1uYW1lXCI+VGVra2FtYWtpPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktcHJpY2VcIj4kMy4wMDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1c2hpLWRlc2NyaXB0aW9uXCI+VGVra2FtYWtpIHN1c2hpIGlzIGEgY2xhc3NpYyBzdXNoaSByb2xsIGZpbGxlZCB3aXRoIGZyZXNoIHR1bmEgYW5kIHdyYXBwZWQgaW4gc2Vhd2VlZDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VzaGktY2FyZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9JHtzYWJhVGVyaXlha2l9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VzaGktaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktbmFtZVwiPlNhYmEgVGVyaXlha2k8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdXNoaS1wcmljZVwiPiQ0LjUwPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktZGVzY3JpcHRpb25cIj5TYWJhIHRlcml5YWtpIHN1c2hpIGZlYXR1cmVzIGdyaWxsZWQgbWFja2VyZWwgd2l0aCBhIHN3ZWV0IGFuZCBzYXZvcnkgdGVyaXlha2kgc2F1Y2U8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1c2hpLWNhcmRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPSR7bWFzYWdvfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1c2hpLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1c2hpLW5hbWVcIj5NYXNhZ288L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdXNoaS1wcmljZVwiPiQ0LjUwPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktZGVzY3JpcHRpb25cIj5NYXNhZ28gc3VzaGkgaXMgYSBzdXNoaSByb2xsIGZpbGxlZCB3aXRoIGNydW5jaHksIGNvbG91cmZ1bCBjYXBlbGluIHJvZSwgZGVsaXZlcmluZyBhIGJ1cnN0IG9mIGZsYXZvdXI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1c2hpLWNhcmRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPSR7bmlnaXJpfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1c2hpLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1c2hpLW5hbWVcIj5OaWdpcmk8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdXNoaS1wcmljZVwiPiQ1LjAwPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktZGVzY3JpcHRpb25cIj5OaWdpcmkgc3VzaGkgaXMgYSBzaW1wbGUgYW5kIGVsZWdhbnQgc3VzaGkgdGhhdCBjb25zaXN0cyBvZiBhIHNtYWxsIGJhbGwgb2YgcmljZSB0b3BwZWQgd2l0aCBmcmVzaCBmaXNoPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdXNoaS1jYXJkXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz0ke3Rvcm99IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VzaGktaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktbmFtZVwiPlRvcm88L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdXNoaS1wcmljZVwiPiQ0LjAwPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktZGVzY3JpcHRpb25cIj5Ub3JvIHN1c2hpIGlzIGEgcHJpemVkIGRlbGljYWN5IG1hZGUgZnJvbSB0aGUgYnV0dGVyeSwgZmF0dHkgYmVsbHkgb2YgdHVuYTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VzaGktY2FyZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9JHtpa3VyYX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXNoaS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdXNoaS1uYW1lXCI+SWt1cmE8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdXNoaS1wcmljZVwiPiQ0LjAwPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktZGVzY3JpcHRpb25cIj5Ja3VyYSBzdXNoaSBmZWF0dXJlcyBicmlnaHQsIHBsdW1wIHNhbG1vbiByb2UgdGhhdCBwb3BzIHdpdGggYSBzYXRpc2Z5aW5nIGJ1cnN0IG9mIGJyaW55IGZsYXZvdXI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1c2hpLWNhcmRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPSR7dW5hZ2l9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VzaGktaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktbmFtZVwiPlVuYWdpPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktcHJpY2VcIj4kNS4wMDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1c2hpLWRlc2NyaXB0aW9uXCI+VW5hZ2kgc3VzaGkgc2hvd2Nhc2VzIHNhdm91cnksIGdyaWxsZWQgZnJlc2h3YXRlciBlZWwgd2l0aCBhIHRvdWNoIG9mIHN3ZWV0IHNhdWNlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdXNoaS1jYXJkXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz0ke3BoaWxhZGVscGhpYX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXNoaS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdXNoaS1uYW1lXCI+UGhpbGFkZWxwaGlhPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktcHJpY2VcIj4kMy41MDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1c2hpLWRlc2NyaXB0aW9uXCI+UGhpbGFkZWxwaGlhIHN1c2hpIGlzIGEgcG9wdWxhciBzdXNoaSByb2xsIHRoYXQgY29tYmluZXMgY3JlYW15IGNoZWVzZSwgc21va2VkIHNhbG1vbiBhbmQgYXZvY2FkbzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VzaGktY2FyZFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9JHtzYWtlSGFuZFJvbGx9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VzaGktaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktbmFtZVwiPlNha2UgSGFuZHJvbGw8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdXNoaS1wcmljZVwiPiQzLjUwPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VzaGktZGVzY3JpcHRpb25cIj5TYWtlIGhhbmRyb2xsIGlzIGEgaGFuZC1yb2xsZWQgc3VzaGkgZmlsbGVkIHdpdGggZnJlc2ggc2FsbW9uIGFuZCBvdGhlciBpbmdyZWRpZW50czwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRlbnQ7IiwiaW1wb3J0IGNyZWF0ZUhvbWVDb250ZW50IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVNZW51Q29udGVudCBmcm9tIFwiLi9tZW51XCI7XG5cbi8vIERlZmF1bHQgY29udGVudFxubGV0IGNvbnRlbnQgPSBjcmVhdGVIb21lQ29udGVudCgpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICAvLyBCYWQgcHJhY3RpY2UsIGRvbid0IHVzZSB0aGlzIGluIHJlYWwgbGlmZSBwcm9qZWN0c1xuICAgIGhlYWRlckNvbnRhaW5lci5pbm5lckhUTUwgPSBcbiAgICBgXG4gICAgPGRpdj5cbiAgICAgIFpoZW5rYWkncyBTdXNoaSBQbGFjZVxuICAgIDwvZGl2PlxuXG4gICAgPGlucHV0IGlkPVwibWVudS10b2dnbGVcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgIDxsYWJlbCBjbGFzcz0nbWVudS1idXR0b24tY29udGFpbmVyJyBmb3I9XCJtZW51LXRvZ2dsZVwiPlxuICAgIDxkaXYgY2xhc3M9J21lbnUtYnV0dG9uJz48L2Rpdj5cbiAgICA8L2xhYmVsPlxuXG4gICAgPHVsIGNsYXNzPVwibWVudVwiPlxuICAgICAgPGxpIGlkPSdob21lLWJ0bic+PGEgaHJlZj0nJz5Ib21lPC9hPjwvbGk+XG4gICAgICA8bGkgaWQ9J21lbnUtYnRuJz48YSBocmVmPScnPk1lbnU8L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIGA7XG5cblxuICAgIHJldHVybiBoZWFkZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXJDb250YWluZXIudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpIDIwMjMgaHprMjAyMUBHaXRIdWInO1xuXG4gICAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRlbnQoKSB7XG5cbiAgICBjb25zdCBodG1sQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBcbiAgICBjb250ZW50RGl2LnJlbW92ZSgpO1xuICAgIFxuICAgIGh0bWxCb2R5Lmluc2VydEJlZm9yZShjb250ZW50LCBmb290ZXJEaXYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZGluZ0V2ZW50cyhob21lX2J0biwgbWVudV9idG4sIGFib3V0X2J0biwgY2hlY2tfaXRfb3V0X2J0bikge1xuICAgIGhvbWVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29udGVudCA9IGNyZWF0ZUhvbWVDb250ZW50KCk7XG4gICAgICAgIGxvYWRDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBtZW51X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnQgPSBjcmVhdGVNZW51Q29udGVudCgpO1xuICAgICAgICBsb2FkQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgY2hlY2tfaXRfb3V0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnQgPSBjcmVhdGVNZW51Q29udGVudCgpO1xuICAgICAgICBsb2FkQ29udGVudCgpO1xuICAgIH0pO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2Vic2l0ZSgpIHtcbiAgICBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiRHluYW1pY2FsbHkgZ2VuZXJhdGVkIGNvbnRlbnQgd2l0aCBKYXZhU2NyaXB0XCIpO1xuXG4gICAgY29uc3QgaHRtbEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcblxuICAgIGh0bWxCb2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgaHRtbEJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgaHRtbEJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHtpbml0V2Vic2l0ZSwgYmluZGluZ0V2ZW50c30gZnJvbSBcIi4vd2Vic2l0ZVwiO1xuXG5pbml0V2Vic2l0ZSgpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJyk7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJyk7XG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1idG4nKTtcbmNvbnN0IGNoZWNrSXRPdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2staXQtb3V0Jyk7XG5cbmJpbmRpbmdFdmVudHMoaG9tZUJ0biwgbWVudUJ0biwgYWJvdXRCdG4sIGNoZWNrSXRPdXRCdG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==