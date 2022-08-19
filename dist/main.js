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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --navy:  #1C3879;\n    --blue: #607EAA;\n    --beige: #EAE3D2;\n    --winter: #F9F5EB;\n}\n\n*{\n    box-sizing: border-box;\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--winter);\n}\n\n.header{\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--navy);\n    font-size: calc(30px + 3vw);\n    color: var(--beige);\n    font-weight: bold;\n    padding: 20px;\n}\n\n.content{\n    display: flex;\n    flex: 10;\n}\n\n.sidebarContainer {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--blue);\n}\n\n.sidebarButton{\n    background-color: var(--blue);\n    font-weight: bold;\n    padding: 10px;\n    border: none;\n    color: var(--beige);\n    font-size: calc(15px + 1vw);\n    margin-left: 20px ;\n    margin-right: 100px;\n    text-align: start;\n}\n\n.taskSectionContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.taskSection{\n    display: flex;\n}\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content/Box */\n.modal-content {\n    background-color: var(--beige);\n    border-radius: 10px;\n    margin: 15% auto; \n    padding: 20px;\n    border: 1px solid #888;\n    width: 800px;\n    max-width: 80%; \n    \n}\n  \n\n.taskHeader{\n  display: flex;\n  font-weight: bold;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modalHeaderTitle{\n  font-size: 2rem;\n}\n/* The Close Button */\n.close {\n  background: none;\n  float: right;\n  font-size: 20px;\n  border: none;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* Project Modal */\n.projectHeader{\n  padding-bottom: 10px;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n}\n\n.projectContainer{\n  background-color: var(--winter);\n  padding: 10px;\n  border-radius: 10px;\n}\n\n#titleProjectInput{\n  display: flex;\n  border: none;\n  background-color: var(--winter);\n  width: 100%;\n  font-size: 2rem;\n  border-bottom: solid 3px black;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  font-weight: bold;\n  \n}\n\n.projectContentContainer{\n  display: flex;\n  width: 100%;\n}\n\n#descriptionProject{\n  display: flex;\n  border: none;\n  background-color: var(--winter);\n  width: 90%;\n  font-size: 1rem;\n  padding: 10px;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  resize: none;\n  height: 200px;\n  max-height: 50%;\n}\n\n.rightContainer{\n  display: flex;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n  width: 200px;\n  font-size: 1rem;\n  font-weight: bold;\n  justify-content: center;\n}\n\n.colorContainer, .dateContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding:10px;\n  gap: 10px;\n}\n#colorPickerInput{\n  border: none;\n  background-color: var(--winter);\n}\n\n#datePickerInput{\n\n  border: none;\n  background-color: var(--winter);\n  \n}\n\n.projectAddButtonContainer{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#addProjectButton{\n  border: none;\n  background-color: var(--winter);\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#addProjectButton:hover{\n  text-decoration: underline;\n}\n\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,YAAY;IACZ,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,OAAO;IACP,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA,2BAA2B;AAC3B;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;EAC1D;;EAEA,sBAAsB;AACxB;IACI,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,cAAc;;AAElB;;;AAGA;EACE,aAAa;EACb,iBAAiB;EACjB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;AACA,qBAAqB;AACrB;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA,kBAAkB;AAClB;EACE,oBAAoB;EACpB,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,+BAA+B;EAC/B,WAAW;EACX,eAAe;EACf,8BAA8B;EAC9B,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;;AAEnB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,+BAA+B;EAC/B,UAAU;EACV,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,SAAS;AACX;AACA;EACE,YAAY;EACZ,+BAA+B;AACjC;;AAEA;;EAEE,YAAY;EACZ,+BAA+B;;AAEjC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,+BAA+B;EAC/B,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;;;AAIA;;;;IAII,aAAa;AACjB","sourcesContent":[":root{\n    --navy:  #1C3879;\n    --blue: #607EAA;\n    --beige: #EAE3D2;\n    --winter: #F9F5EB;\n}\n\n*{\n    box-sizing: border-box;\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--winter);\n}\n\n.header{\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--navy);\n    font-size: calc(30px + 3vw);\n    color: var(--beige);\n    font-weight: bold;\n    padding: 20px;\n}\n\n.content{\n    display: flex;\n    flex: 10;\n}\n\n.sidebarContainer {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--blue);\n}\n\n.sidebarButton{\n    background-color: var(--blue);\n    font-weight: bold;\n    padding: 10px;\n    border: none;\n    color: var(--beige);\n    font-size: calc(15px + 1vw);\n    margin-left: 20px ;\n    margin-right: 100px;\n    text-align: start;\n}\n\n.taskSectionContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n.taskSection{\n    display: flex;\n}\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content/Box */\n.modal-content {\n    background-color: var(--beige);\n    border-radius: 10px;\n    margin: 15% auto; \n    padding: 20px;\n    border: 1px solid #888;\n    width: 800px;\n    max-width: 80%; \n    \n}\n  \n\n.taskHeader{\n  display: flex;\n  font-weight: bold;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modalHeaderTitle{\n  font-size: 2rem;\n}\n/* The Close Button */\n.close {\n  background: none;\n  float: right;\n  font-size: 20px;\n  border: none;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* Project Modal */\n.projectHeader{\n  padding-bottom: 10px;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n}\n\n.projectContainer{\n  background-color: var(--winter);\n  padding: 10px;\n  border-radius: 10px;\n}\n\n#titleProjectInput{\n  display: flex;\n  border: none;\n  background-color: var(--winter);\n  width: 100%;\n  font-size: 2rem;\n  border-bottom: solid 3px black;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  font-weight: bold;\n  \n}\n\n.projectContentContainer{\n  display: flex;\n  width: 100%;\n}\n\n#descriptionProject{\n  display: flex;\n  border: none;\n  background-color: var(--winter);\n  width: 90%;\n  font-size: 1rem;\n  padding: 10px;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  resize: none;\n  height: 200px;\n  max-height: 50%;\n}\n\n.rightContainer{\n  display: flex;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n  width: 200px;\n  font-size: 1rem;\n  font-weight: bold;\n  justify-content: center;\n}\n\n.colorContainer, .dateContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding:10px;\n  gap: 10px;\n}\n#colorPickerInput{\n  border: none;\n  background-color: var(--winter);\n}\n\n#datePickerInput{\n\n  border: none;\n  background-color: var(--winter);\n  \n}\n\n.projectAddButtonContainer{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#addProjectButton{\n  border: none;\n  background-color: var(--winter);\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#addProjectButton:hover{\n  text-decoration: underline;\n}\n\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/capitalize.js":
/*!***************************!*\
  !*** ./src/capitalize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter)
/* harmony export */ });
let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContent": () => (/* binding */ createContent)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _taskContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskContainer */ "./src/taskContainer.js");



let createContent = () => {

    let content = createContentContainer()
    ;(0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.loadSidebar)(content)
    ;(0,_taskContainer__WEBPACK_IMPORTED_MODULE_1__.loadTaskSection)(content)

    
}

let createContentContainer = () =>{
    
    /* content */
    let  content = document.createElement('div')
    content.classList.add('content')
    document.body.appendChild(content)

    return content
}



/***/ }),

/***/ "./src/domCreators.js":
/*!****************************!*\
  !*** ./src/domCreators.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMContainer": () => (/* binding */ createDOMContainer),
/* harmony export */   "createDomElement": () => (/* binding */ createDomElement)
/* harmony export */ });
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ "./src/capitalize.js");


let createDOMContainer = (name,classlist) =>{

    let element = document.createElement('div')
    element.setAttribute('id',`${name}`)
    element.classList.add(`${classlist}`)
    
    return element
    
    
  
}

let createDomElement = (type,name,classlist,textContent) =>{
    
    if(type === 'button' || type === 'input'){
        let element = document.createElement(`${type}`)
        element.textContent = (0,_capitalize__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(textContent)
        element.setAttribute('id',`${name}${(0,_capitalize__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(type)}`)
        element.classList.add(`${classlist}`)

        return element
    }else{
        let element = document.createElement(`${type}`)
        element.textContent = (0,_capitalize__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(textContent)
        element.setAttribute('id',`${name}`)
        element.classList.add(`${classlist}`)

        return element
    }
    
    
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });

let createHeader = () => {

    let header = createHeaderContainer()
    createHeaderTitle(header)
}

let createHeaderContainer = () =>{
    
    /* Header */
    let  header = document.createElement('div')
    header.classList.add('header')
    document.body.appendChild(header)

    return header

}


let createHeaderTitle = (header) =>{

    
    let headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle')
    headerTitle.textContent = 'To-Do'

    header.appendChild(headerTitle)

}








/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPageStucture": () => (/* binding */ loadPageStucture)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/modal.js");




/* HTML Structure */

let loadPageStucture = () => {

   

    /*Creates the header*/
    (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)()
    /* Creates the content side */
    ;(0,_content__WEBPACK_IMPORTED_MODULE_1__.createContent)()
    
   
    
}








/***/ }),

/***/ "./src/mainObjects.js":
/*!****************************!*\
  !*** ./src/mainObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
class project {

    constructor(title,description,dueDate,tasks,color) {
     this.color = color
     this.tasks = tasks
     this.title = title
     this.description = description
     this.dueDate = dueDate
    }
    
    /*Deltes a task from a project */
    deleteTask = (task) => {
        let indexDel = this.tasks.indexOf(task)
        task.splice(indexDel,1)
    }

}

class task extends project {

    constructor(title,dueDate,priority,notes,project,checklist) {
     this.title = title
     this.dueDate = dueDate
     this.priority = priority
     this.notes = notes
     super(project)
     this.checklist = checklist
    }
    
    changeStaus = () => {
        if( this.checklist === true){
            this.checklist = true
        }else{
            this.checklist = false
        }
        
    }
}


  

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModalStructure": () => (/* binding */ createModalStructure),
/* harmony export */   "createTaskModal": () => (/* binding */ createTaskModal)
/* harmony export */ });
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ "./src/capitalize.js");
/* harmony import */ var _domCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domCreators */ "./src/domCreators.js");
/* harmony import */ var _taskModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskModal */ "./src/taskModal.js");






let createTaskModal = () => {
    

    let mainContainer = (0,_taskModal__WEBPACK_IMPORTED_MODULE_2__.createTaskOption)()
    // let mainContainer = createDOMContainer('','testContent')

    // let structure = ['project','title','description','dueDate','priority','notes','checklist']

  
    // structure.forEach(field => {
        
    //     let name = createDomElement('div',field,`modalFieldTitle`,`${capitalizeFirstLetter(field)}`)
    //     mainContainer.appendChild(name)

    //     let input = createDomElement('input',field,`modalFieldInput`,``)
    //     mainContainer.appendChild(input)
    // })

    
    return mainContainer
}


let createModalStructure = (content,modalName,title,openButton)=>{


    /* Creates the modal Container */
    let modalContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)(modalName,'modal')
    
    let modalContent = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)('','modal-content')

    /* Creates the modal header */
    let modalHeader = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)('',`${modalName}Header`)
    
    /* Creates the modal title */
    let modalTitle = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('div','','modalHeaderTitle',title)
    modalHeader.appendChild(modalTitle)
    /* Creates the close button*/
    let close  = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('button','','close','x')
    modalHeader.appendChild(close)

    /* Adds the modal */
    modalContent.appendChild(modalHeader)
    modalContent.appendChild(content)

    modalContainer.appendChild(modalContent)

    openButton.addEventListener('click',()=>{
        document.body.appendChild(modalContainer)
        modalContainer.style.display = "block";

    })
    close.addEventListener('click',()=>{
        modalContainer.style.display = "none";
        document.body.removeChild(modalContainer)
    
    
    })

}

let closeModals = () => {
    modalContainer.style.display = "none";
    document.body.removeChild(modalContainer)
}





/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadSidebar": () => (/* binding */ loadSidebar)
/* harmony export */ });
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ "./src/capitalize.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");


 
/* Creates the side bar*/
let loadSidebar= (content) => {
    let sidebarContainer = createSidebarContainer(content)


    
    createSidebar(sidebarContainer)
    addButtonListeners()
}

let createSidebarContainer = (content) => {
    let sidebarContainer = document.createElement('div')
    sidebarContainer.classList.add('sidebarContainer')

    content.appendChild(sidebarContainer)

    return sidebarContainer
}

let createSidebar = (container) => {
    
    let itemNames = ['home','today','week','month','projects','add']

    itemNames.forEach(item => {
        createSidebarItem(item,container)
    });


}


let createSidebarItem = (name,container) =>{
    
    let button = document.createElement('button')
    button.textContent = (0,_capitalize__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(name)
    button.setAttribute('id',`${name}Button`)
    button.classList.add(`sidebarButton`)

    container.appendChild(button)

}

let addButtonListeners = () => {
    addTaskButton()
}

let addTaskButton = () => {

    let addButton = document.getElementById('addButton')
    let taskContent = (0,_modal__WEBPACK_IMPORTED_MODULE_1__.createTaskModal)()
    ;(0,_modal__WEBPACK_IMPORTED_MODULE_1__.createModalStructure)(taskContent,'task','Add a...',addButton)


}





/***/ }),

/***/ "./src/taskContainer.js":
/*!******************************!*\
  !*** ./src/taskContainer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadTaskSection": () => (/* binding */ loadTaskSection)
/* harmony export */ });
let loadTaskSection = (content) => {
    let main = createTaskSection()
    createTaskContainer(main)
    createFooter(main)
    content.appendChild(main)
}

let createTaskSection = () => {
    let taskSectionContainer = document.createElement('div')
    taskSectionContainer.classList.add('taskSectionContainer')
    taskSectionContainer.textContent ='asdas'

    return taskSectionContainer
}

let createTaskContainer = (taskSectionContainer) => {
    let tasksContainer = document.createElement('div')
    tasksContainer.classList.add('taskContainer')

    taskSectionContainer.appendChild(tasksContainer)
}

let createFooter = (taskSectionContainer) => {
    let footer = document.createElement('div')
    footer.classList.add('footer')
    footer.textContent = 'A project by Alejandro Banuelos'
    taskSectionContainer.appendChild(footer)
}




/***/ }),

/***/ "./src/taskModal.js":
/*!**************************!*\
  !*** ./src/taskModal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskOption": () => (/* binding */ createTaskOption)
/* harmony export */ });
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ "./src/capitalize.js");
/* harmony import */ var _domCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domCreators */ "./src/domCreators.js");
/* harmony import */ var _mainObjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainObjects */ "./src/mainObjects.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/modal.js");





let createTaskOption = () => {
    
    let mainContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)('','optionContainer')

    let project =  (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('button','modalProject','modalTaskButton','Project')
    let task =  (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('button','modalTask','modalTaskButton','Task')

    ;(0,_modal__WEBPACK_IMPORTED_MODULE_3__.createModalStructure)(createProjectStructure(),'project','Add your project',project)


    project.addEventListener('click',()=>{
        let modalContainer = document.getElementById('task')
        modalContainer.style.display = "none";
        document.body.removeChild(modalContainer)
    })

    task.addEventListener('click',()=>{
        let modalContainer = document.getElementById('task')
        modalContainer.style.display = "none";
        document.body.removeChild(modalContainer)
    })

    mainContainer.appendChild(project)
    mainContainer.appendChild(task)

    return mainContainer
}


let createProjectStructure = () => {
        
    let mainContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'projectContainer')

    
    /* Gets the title input of the container*/
    let titleContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','titleProject','modalInput','')
    titleContainer.placeholder = 'The projects title...'
    mainContainer.appendChild(titleContainer)

    /*Content description*/
    let contentSide = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'projectContentContainer')
    
    /*Description*/
    let descriptionBox = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('textarea','descriptionProject','modalTextInput','')
    descriptionBox.placeholder = 'The project consists of ....'

    contentSide.appendChild(descriptionBox)

    /*Right side container*/
    let rightContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'rightContainer')

    /*Color*/
    let colorBox = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'colorContainer')

    /* Color Title */
    let colorTitle = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('div','colorTitle','titleTextContent','Choose a color')
    colorBox.appendChild(colorTitle)
    
    /*ColorPicker*/
    let colorPicker = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','colorPicker','colorInput','')
    colorPicker.type = 'color'
    
    colorBox.appendChild(colorPicker)


    /*Date*/
    let dateBox = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)('','dateContainer')

    /* Color Title */
    let dateTitle = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('div','dateTitle','titleTextContent','Choose a due date')
    dateBox.appendChild(dateTitle)
    
    /*ColorPicker*/
    let datePicker = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','datePicker','dateInput','')
    datePicker.type = 'date'
    
    dateBox.appendChild(datePicker)   

    rightContainer.appendChild(colorBox)
    rightContainer.appendChild(dateBox)

    contentSide.appendChild(rightContainer)
    mainContainer.appendChild(contentSide)

    /*Project Container */
    let addProjectContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)('','projectAddButtonContainer')

    let addButton = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('button','addProject','addProject','Add project')
    
    addProjectContainer.appendChild(addButton)

    mainContainer.append(addProjectContainer)
    return mainContainer

}

let createTaskStructure = () => {
    
    let mainContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'projectContainer')

    
    /* Gets the title input of the container*/
    let titleContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','titleTask','modalInput','')
    titleContainer.placeholder = 'The tasks title...'
    mainContainer.appendChild(titleContainer)

    /*Content description*/
    let contentSide = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'taskContentContainer')

    /*notes*/
    let notes  = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','noteFiled','note','')
    notes.placeholder = 'Some notes of the task...'
    
    /*Project*/
    let projectFather = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input')

    /*Right side container*/
    let rightContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'rightContainer')

    /*Date*/
    let dateBox = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)('','dateContainer')

    /* Date Title */
    let dateTitle = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('div','dateTitle','titleTextContent','Choose a due date')
    dateBox.appendChild(dateTitle)
    
    /*DatePicker*/
    let datePicker = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','datePicker','dateInput','')
    datePicker.type = 'date'
    

    dateBox.appendChild(dateTitle)   

    rightContainer.appendChild(dateBox)

    contentSide.appendChild(rightContainer)
    mainContainer.appendChild(contentSide)


    return mainContainer
}

let readProject = (project) =>{
    let mainContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)(a,'projectContainer')

    
    /* Gets the title input of the container*/
    let titleContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','titleProject','modalInput','')
    titleContainer.placeholder = 'The projects title...'
    titleContainer.textContent =  project.name
    mainContainer.appendChild(titleContainer)

    /*Content description*/
    let contentSide = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)(a,'projectContentContainer')
    
    /*Description*/
    let descriptionBox = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','descriptionProject','modalTextInput','')
    descriptionBox.placeholder = 'The project consists of ....'
    descriptionBox.type = 'text'

    contentSide.appendChild(descriptionBox)

    /*Right side container*/
    let rightContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)(a,'rightContainer')

    /*Color*/
    let colorBox = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)(a,'colorContainer')

    /* Color Title */
    let colorTitle = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('div','colorTitle','titleTextContent','Choose a color')
    colorBox.appendChild(colorTitle)
    
    /*ColorPicker*/
    let colorPicker = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','colorPicker','colorInput','')
    colorPicker.type = 'color'
    
    colorBox.appendChild(colorPicker)


    /*Date*/
    let dateBox = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)(date,'dateContainer')

    /* Color Title */
    let dateTitle = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('div','dateTitle','titleTextContent','Choose a date')
    dateBox.appendChild(dateTitle)
    
    /*ColorPicker*/
    let datePicker = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','datePicker','dateInput','')
    datePicker.type = 'date'
    
    dateBox.appendChild(dateTitle)   

    rightContainer.appendChild(colorBox)
    rightContainer.appendChild(dateBox)

    contentSide.appendChild(rightContainer)
    mainContainer.appendChild(contentSide)


    return mainContainer
}



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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadPageStucture)()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFHQTtBQUNBOzs7Ozs7OztVQzdNQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNsQjs7QUFFckIsdURBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21haW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYWluLy4vc3JjL2NhcGl0YWxpemUuanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL21haW4vLi9zcmMvZG9tQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL21haW4vLi9zcmMvbWFpbk9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9tYWluLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL3NyYy90YXNrQ29udGFpbmVyLmpzIiwid2VicGFjazovL21haW4vLi9zcmMvdGFza01vZGFsLmpzIiwid2VicGFjazovL21haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21haW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1uYXZ5OiAgIzFDMzg3OTtcXG4gICAgLS1ibHVlOiAjNjA3RUFBO1xcbiAgICAtLWJlaWdlOiAjRUFFM0QyO1xcbiAgICAtLXdpbnRlcjogI0Y5RjVFQjtcXG59XFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6J0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZlxcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2ludGVyKTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgICBmb250LXNpemU6IGNhbGMoMzBweCArIDN2dyk7XFxuICAgIGNvbG9yOiB2YXIoLS1iZWlnZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTA7XFxufVxcblxcbi5zaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5zaWRlYmFyQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWJlaWdlKTtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweCA7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4udGFza1NlY3Rpb25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrU2VjdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICB9XFxuICBcXG4gIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWlnZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIG1heC13aWR0aDogODAlOyBcXG4gICAgXFxufVxcbiAgXFxuXFxuLnRhc2tIZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWxIZWFkZXJUaXRsZXtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBQcm9qZWN0IE1vZGFsICovXFxuLnByb2plY3RIZWFkZXJ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0aXRsZVByb2plY3RJbnB1dHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIFxcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNkZXNjcmlwdGlvblByb2plY3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2ludGVyKTtcXG4gIHdpZHRoOiA5MCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1heC1oZWlnaHQ6IDUwJTtcXG59XFxuXFxuLnJpZ2h0Q29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbG9yQ29udGFpbmVyLCAuZGF0ZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuI2NvbG9yUGlja2VySW5wdXR7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbn1cXG5cXG4jZGF0ZVBpY2tlcklucHV0e1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2ludGVyKTtcXG4gIFxcbn1cXG5cXG4ucHJvamVjdEFkZEJ1dHRvbkNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9ue1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2ludGVyKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVye1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcblxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0VBQzFEOztFQUVBLHNCQUFzQjtBQUN4QjtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGNBQWM7O0FBRWxCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQSxxQkFBcUI7QUFDckI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtBQUNqQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osK0JBQStCOztBQUVqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOzs7O0FBSUE7Ozs7SUFJSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLW5hdnk6ICAjMUMzODc5O1xcbiAgICAtLWJsdWU6ICM2MDdFQUE7XFxuICAgIC0tYmVpZ2U6ICNFQUUzRDI7XFxuICAgIC0td2ludGVyOiAjRjlGNUVCO1xcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmXFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgM3Z3KTtcXG4gICAgY29sb3I6IHZhcigtLWJlaWdlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxMDtcXG59XFxuXFxuLnNpZGViYXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnNpZGViYXJCdXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tYmVpZ2UpO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4IDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi50YXNrU2VjdGlvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2tTZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIH1cXG4gIFxcbiAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJlaWdlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bzsgXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7IFxcbiAgICBcXG59XFxuICBcXG5cXG4udGFza0hlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbEhlYWRlclRpdGxle1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFByb2plY3QgTW9kYWwgKi9cXG4ucHJvamVjdEhlYWRlcntcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdENvbnRhaW5lcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbnRlcik7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3RpdGxlUHJvamVjdElucHV0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbnRlcik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBibGFjaztcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgXFxufVxcblxcbi5wcm9qZWN0Q29udGVudENvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uUHJvamVjdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICByZXNpemU6IG5vbmU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWF4LWhlaWdodDogNTAlO1xcbn1cXG5cXG4ucmlnaHRDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjAwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29sb3JDb250YWluZXIsIC5kYXRlQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzoxMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4jY29sb3JQaWNrZXJJbnB1dHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbnRlcik7XFxufVxcblxcbiNkYXRlUGlja2VySW5wdXR7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbiAgXFxufVxcblxcbi5wcm9qZWN0QWRkQnV0dG9uQ29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b257XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXJ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuXFxuXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5leHBvcnR7XG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyXG59IiwiaW1wb3J0IHtsb2FkU2lkZWJhcn0gZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IHtsb2FkVGFza1NlY3Rpb259IGZyb20gJy4vdGFza0NvbnRhaW5lcidcblxubGV0IGNyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XG5cbiAgICBsZXQgY29udGVudCA9IGNyZWF0ZUNvbnRlbnRDb250YWluZXIoKVxuICAgIGxvYWRTaWRlYmFyKGNvbnRlbnQpXG4gICAgbG9hZFRhc2tTZWN0aW9uKGNvbnRlbnQpXG5cbiAgICBcbn1cblxubGV0IGNyZWF0ZUNvbnRlbnRDb250YWluZXIgPSAoKSA9PntcbiAgICBcbiAgICAvKiBjb250ZW50ICovXG4gICAgbGV0ICBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudClcblxuICAgIHJldHVybiBjb250ZW50XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlQ29udGVudFxuXG59IiwiaW1wb3J0IHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJ9IGZyb20gJy4vY2FwaXRhbGl6ZSdcblxubGV0IGNyZWF0ZURPTUNvbnRhaW5lciA9IChuYW1lLGNsYXNzbGlzdCkgPT57XG5cbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuYW1lfWApXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuICAgIFxuICAgIHJldHVybiBlbGVtZW50XG4gICAgXG4gICAgXG4gIFxufVxuXG5sZXQgY3JlYXRlRG9tRWxlbWVudCA9ICh0eXBlLG5hbWUsY2xhc3NsaXN0LHRleHRDb250ZW50KSA9PntcbiAgICBcbiAgICBpZih0eXBlID09PSAnYnV0dG9uJyB8fCB0eXBlID09PSAnaW5wdXQnKXtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YClcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcih0ZXh0Q29udGVudClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuYW1lfSR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUpfWApXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc2xpc3R9YClcblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1lbHNle1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke25hbWV9YClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5leHBvcnR7XG4gICAgY3JlYXRlRE9NQ29udGFpbmVyLFxuICAgIGNyZWF0ZURvbUVsZW1lbnRcbn0iLCJcbmxldCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG5cbiAgICBsZXQgaGVhZGVyID0gY3JlYXRlSGVhZGVyQ29udGFpbmVyKClcbiAgICBjcmVhdGVIZWFkZXJUaXRsZShoZWFkZXIpXG59XG5cbmxldCBjcmVhdGVIZWFkZXJDb250YWluZXIgPSAoKSA9PntcbiAgICBcbiAgICAvKiBIZWFkZXIgKi9cbiAgICBsZXQgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgICByZXR1cm4gaGVhZGVyXG5cbn1cblxuXG5sZXQgY3JlYXRlSGVhZGVyVGl0bGUgPSAoaGVhZGVyKSA9PntcblxuICAgIFxuICAgIGxldCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlclRpdGxlJylcbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUby1EbydcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSlcblxufVxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlSGVhZGVyXG59XG5cblxuXG4iLCJpbXBvcnQge2NyZWF0ZUhlYWRlcn0gIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGVudCB9IGZyb20gJy4vY29udGVudCc7XG5pbXBvcnQge2NyZWF0ZU1vZGFsfSBmcm9tICcuL21vZGFsJ1xuXG4vKiBIVE1MIFN0cnVjdHVyZSAqL1xuXG5sZXQgbG9hZFBhZ2VTdHVjdHVyZSA9ICgpID0+IHtcblxuICAgXG5cbiAgICAvKkNyZWF0ZXMgdGhlIGhlYWRlciovXG4gICAgY3JlYXRlSGVhZGVyKClcbiAgICAvKiBDcmVhdGVzIHRoZSBjb250ZW50IHNpZGUgKi9cbiAgICBjcmVhdGVDb250ZW50KClcbiAgICBcbiAgIFxuICAgIFxufVxuXG5leHBvcnR7XG4gICAgbG9hZFBhZ2VTdHVjdHVyZVxufVxuXG5cblxuXG4iLCJjbGFzcyBwcm9qZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUsdGFza3MsY29sb3IpIHtcbiAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgIHRoaXMudGFza3MgPSB0YXNrc1xuICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9XG4gICAgXG4gICAgLypEZWx0ZXMgYSB0YXNrIGZyb20gYSBwcm9qZWN0ICovXG4gICAgZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCBpbmRleERlbCA9IHRoaXMudGFza3MuaW5kZXhPZih0YXNrKVxuICAgICAgICB0YXNrLnNwbGljZShpbmRleERlbCwxKVxuICAgIH1cblxufVxuXG5jbGFzcyB0YXNrIGV4dGVuZHMgcHJvamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkdWVEYXRlLHByaW9yaXR5LG5vdGVzLHByb2plY3QsY2hlY2tsaXN0KSB7XG4gICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICB0aGlzLm5vdGVzID0gbm90ZXNcbiAgICAgc3VwZXIocHJvamVjdClcbiAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3RcbiAgICB9XG4gICAgXG4gICAgY2hhbmdlU3RhdXMgPSAoKSA9PiB7XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrbGlzdCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnR7XG4gICAgcHJvamVjdCxcbiAgICB0YXNrXG59XG4gICIsImltcG9ydCB7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyfSBmcm9tICcuL2NhcGl0YWxpemUnXG5pbXBvcnQge2NyZWF0ZURPTUNvbnRhaW5lcixjcmVhdGVEb21FbGVtZW50fSBmcm9tICcuL2RvbUNyZWF0b3JzJ1xuaW1wb3J0IHtjcmVhdGVUYXNrT3B0aW9ufSBmcm9tICcuL3Rhc2tNb2RhbCdcblxuXG5cbmxldCBjcmVhdGVUYXNrTW9kYWwgPSAoKSA9PiB7XG4gICAgXG5cbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZVRhc2tPcHRpb24oKVxuICAgIC8vIGxldCBtYWluQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCcnLCd0ZXN0Q29udGVudCcpXG5cbiAgICAvLyBsZXQgc3RydWN0dXJlID0gWydwcm9qZWN0JywndGl0bGUnLCdkZXNjcmlwdGlvbicsJ2R1ZURhdGUnLCdwcmlvcml0eScsJ25vdGVzJywnY2hlY2tsaXN0J11cblxuICBcbiAgICAvLyBzdHJ1Y3R1cmUuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIFxuICAgIC8vICAgICBsZXQgbmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsZmllbGQsYG1vZGFsRmllbGRUaXRsZWAsYCR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGZpZWxkKX1gKVxuICAgIC8vICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpXG5cbiAgICAvLyAgICAgbGV0IGlucHV0ID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnLGZpZWxkLGBtb2RhbEZpZWxkSW5wdXRgLGBgKVxuICAgIC8vICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIC8vIH0pXG5cbiAgICBcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lclxufVxuXG5cbmxldCBjcmVhdGVNb2RhbFN0cnVjdHVyZSA9IChjb250ZW50LG1vZGFsTmFtZSx0aXRsZSxvcGVuQnV0dG9uKT0+e1xuXG5cbiAgICAvKiBDcmVhdGVzIHRoZSBtb2RhbCBDb250YWluZXIgKi9cbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIobW9kYWxOYW1lLCdtb2RhbCcpXG4gICAgXG4gICAgbGV0IG1vZGFsQ29udGVudCA9IGNyZWF0ZURPTUNvbnRhaW5lcignJywnbW9kYWwtY29udGVudCcpXG5cbiAgICAvKiBDcmVhdGVzIHRoZSBtb2RhbCBoZWFkZXIgKi9cbiAgICBsZXQgbW9kYWxIZWFkZXIgPSBjcmVhdGVET01Db250YWluZXIoJycsYCR7bW9kYWxOYW1lfUhlYWRlcmApXG4gICAgXG4gICAgLyogQ3JlYXRlcyB0aGUgbW9kYWwgdGl0bGUgKi9cbiAgICBsZXQgbW9kYWxUaXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsJycsJ21vZGFsSGVhZGVyVGl0bGUnLHRpdGxlKVxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpXG4gICAgLyogQ3JlYXRlcyB0aGUgY2xvc2UgYnV0dG9uKi9cbiAgICBsZXQgY2xvc2UgID0gY3JlYXRlRG9tRWxlbWVudCgnYnV0dG9uJywnJywnY2xvc2UnLCd4JylcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZSlcblxuICAgIC8qIEFkZHMgdGhlIG1vZGFsICovXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KVxuXG4gICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIH0pXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICBcbiAgICBcbiAgICB9KVxuXG59XG5cbmxldCBjbG9zZU1vZGFscyA9ICgpID0+IHtcbiAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcbn1cblxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlVGFza01vZGFsLFxuICAgIGNyZWF0ZU1vZGFsU3RydWN0dXJlXG59IiwiaW1wb3J0IHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJ9IGZyb20gJy4vY2FwaXRhbGl6ZSdcbmltcG9ydCB7Y3JlYXRlTW9kYWxTdHJ1Y3R1cmUsY3JlYXRlVGFza01vZGFsfSBmcm9tICcuL21vZGFsJ1xuIFxuLyogQ3JlYXRlcyB0aGUgc2lkZSBiYXIqL1xubGV0IGxvYWRTaWRlYmFyPSAoY29udGVudCkgPT4ge1xuICAgIGxldCBzaWRlYmFyQ29udGFpbmVyID0gY3JlYXRlU2lkZWJhckNvbnRhaW5lcihjb250ZW50KVxuXG5cbiAgICBcbiAgICBjcmVhdGVTaWRlYmFyKHNpZGViYXJDb250YWluZXIpXG4gICAgYWRkQnV0dG9uTGlzdGVuZXJzKClcbn1cblxubGV0IGNyZWF0ZVNpZGViYXJDb250YWluZXIgPSAoY29udGVudCkgPT4ge1xuICAgIGxldCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJDb250YWluZXInKVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGFpbmVyKVxuXG4gICAgcmV0dXJuIHNpZGViYXJDb250YWluZXJcbn1cblxubGV0IGNyZWF0ZVNpZGViYXIgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgXG4gICAgbGV0IGl0ZW1OYW1lcyA9IFsnaG9tZScsJ3RvZGF5Jywnd2VlaycsJ21vbnRoJywncHJvamVjdHMnLCdhZGQnXVxuXG4gICAgaXRlbU5hbWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNyZWF0ZVNpZGViYXJJdGVtKGl0ZW0sY29udGFpbmVyKVxuICAgIH0pO1xuXG5cbn1cblxuXG5sZXQgY3JlYXRlU2lkZWJhckl0ZW0gPSAobmFtZSxjb250YWluZXIpID0+e1xuICAgIFxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcihuYW1lKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuYW1lfUJ1dHRvbmApXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoYHNpZGViYXJCdXR0b25gKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcblxufVxuXG5sZXQgYWRkQnV0dG9uTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGFkZFRhc2tCdXR0b24oKVxufVxuXG5sZXQgYWRkVGFza0J1dHRvbiA9ICgpID0+IHtcblxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQnV0dG9uJylcbiAgICBsZXQgdGFza0NvbnRlbnQgPSBjcmVhdGVUYXNrTW9kYWwoKVxuICAgIGNyZWF0ZU1vZGFsU3RydWN0dXJlKHRhc2tDb250ZW50LCd0YXNrJywnQWRkIGEuLi4nLGFkZEJ1dHRvbilcblxuXG59XG5cbmV4cG9ydHtcbiAgICBsb2FkU2lkZWJhclxufVxuXG4iLCJsZXQgbG9hZFRhc2tTZWN0aW9uID0gKGNvbnRlbnQpID0+IHtcbiAgICBsZXQgbWFpbiA9IGNyZWF0ZVRhc2tTZWN0aW9uKClcbiAgICBjcmVhdGVUYXNrQ29udGFpbmVyKG1haW4pXG4gICAgY3JlYXRlRm9vdGVyKG1haW4pXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKVxufVxuXG5sZXQgY3JlYXRlVGFza1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgbGV0IHRhc2tTZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrU2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrU2VjdGlvbkNvbnRhaW5lcicpXG4gICAgdGFza1NlY3Rpb25Db250YWluZXIudGV4dENvbnRlbnQgPSdhc2RhcydcblxuICAgIHJldHVybiB0YXNrU2VjdGlvbkNvbnRhaW5lclxufVxuXG5sZXQgY3JlYXRlVGFza0NvbnRhaW5lciA9ICh0YXNrU2VjdGlvbkNvbnRhaW5lcikgPT4ge1xuICAgIGxldCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0NvbnRhaW5lcicpXG5cbiAgICB0YXNrU2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcilcbn1cblxubGV0IGNyZWF0ZUZvb3RlciA9ICh0YXNrU2VjdGlvbkNvbnRhaW5lcikgPT4ge1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdBIHByb2plY3QgYnkgQWxlamFuZHJvIEJhbnVlbG9zJ1xuICAgIHRhc2tTZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcilcbn1cblxuXG5leHBvcnR7XG4gICAgbG9hZFRhc2tTZWN0aW9uXG59IiwiaW1wb3J0IHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJ9IGZyb20gJy4vY2FwaXRhbGl6ZSdcbmltcG9ydCB7Y3JlYXRlRE9NQ29udGFpbmVyLGNyZWF0ZURvbUVsZW1lbnR9IGZyb20gJy4vZG9tQ3JlYXRvcnMnXG5pbXBvcnQge3Byb2plY3QsdGFza30gZnJvbSAnLi9tYWluT2JqZWN0cydcbmltcG9ydCB7Y3JlYXRlTW9kYWxTdHJ1Y3R1cmV9IGZyb20gJy4vbW9kYWwnXG5cbmxldCBjcmVhdGVUYXNrT3B0aW9uID0gKCkgPT4ge1xuICAgIFxuICAgIGxldCBtYWluQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCcnLCdvcHRpb25Db250YWluZXInKVxuXG4gICAgbGV0IHByb2plY3QgPSAgY3JlYXRlRG9tRWxlbWVudCgnYnV0dG9uJywnbW9kYWxQcm9qZWN0JywnbW9kYWxUYXNrQnV0dG9uJywnUHJvamVjdCcpXG4gICAgbGV0IHRhc2sgPSAgY3JlYXRlRG9tRWxlbWVudCgnYnV0dG9uJywnbW9kYWxUYXNrJywnbW9kYWxUYXNrQnV0dG9uJywnVGFzaycpXG5cbiAgICBjcmVhdGVNb2RhbFN0cnVjdHVyZShjcmVhdGVQcm9qZWN0U3RydWN0dXJlKCksJ3Byb2plY3QnLCdBZGQgeW91ciBwcm9qZWN0Jyxwcm9qZWN0KVxuXG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpXG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICB9KVxuXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKVxuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXG4gICAgfSlcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spXG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lclxufVxuXG5cbmxldCBjcmVhdGVQcm9qZWN0U3RydWN0dXJlID0gKCkgPT4ge1xuICAgICAgICBcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcihcIlwiLCdwcm9qZWN0Q29udGFpbmVyJylcblxuICAgIFxuICAgIC8qIEdldHMgdGhlIHRpdGxlIGlucHV0IG9mIHRoZSBjb250YWluZXIqL1xuICAgIGxldCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoJ2lucHV0JywndGl0bGVQcm9qZWN0JywnbW9kYWxJbnB1dCcsJycpXG4gICAgdGl0bGVDb250YWluZXIucGxhY2Vob2xkZXIgPSAnVGhlIHByb2plY3RzIHRpdGxlLi4uJ1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpXG5cbiAgICAvKkNvbnRlbnQgZGVzY3JpcHRpb24qL1xuICAgIGxldCBjb250ZW50U2lkZSA9IGNyZWF0ZURPTUNvbnRhaW5lcihcIlwiLCdwcm9qZWN0Q29udGVudENvbnRhaW5lcicpXG4gICAgXG4gICAgLypEZXNjcmlwdGlvbiovXG4gICAgbGV0IGRlc2NyaXB0aW9uQm94ID0gY3JlYXRlRG9tRWxlbWVudCgndGV4dGFyZWEnLCdkZXNjcmlwdGlvblByb2plY3QnLCdtb2RhbFRleHRJbnB1dCcsJycpXG4gICAgZGVzY3JpcHRpb25Cb3gucGxhY2Vob2xkZXIgPSAnVGhlIHByb2plY3QgY29uc2lzdHMgb2YgLi4uLidcblxuICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQm94KVxuXG4gICAgLypSaWdodCBzaWRlIGNvbnRhaW5lciovXG4gICAgbGV0IHJpZ2h0Q29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKFwiXCIsJ3JpZ2h0Q29udGFpbmVyJylcblxuICAgIC8qQ29sb3IqL1xuICAgIGxldCBjb2xvckJveCA9IGNyZWF0ZURPTUNvbnRhaW5lcihcIlwiLCdjb2xvckNvbnRhaW5lcicpXG5cbiAgICAvKiBDb2xvciBUaXRsZSAqL1xuICAgIGxldCBjb2xvclRpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywnY29sb3JUaXRsZScsJ3RpdGxlVGV4dENvbnRlbnQnLCdDaG9vc2UgYSBjb2xvcicpXG4gICAgY29sb3JCb3guYXBwZW5kQ2hpbGQoY29sb3JUaXRsZSlcbiAgICBcbiAgICAvKkNvbG9yUGlja2VyKi9cbiAgICBsZXQgY29sb3JQaWNrZXIgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ2NvbG9yUGlja2VyJywnY29sb3JJbnB1dCcsJycpXG4gICAgY29sb3JQaWNrZXIudHlwZSA9ICdjb2xvcidcbiAgICBcbiAgICBjb2xvckJveC5hcHBlbmRDaGlsZChjb2xvclBpY2tlcilcblxuXG4gICAgLypEYXRlKi9cbiAgICBsZXQgZGF0ZUJveCA9IGNyZWF0ZURPTUNvbnRhaW5lcignJywnZGF0ZUNvbnRhaW5lcicpXG5cbiAgICAvKiBDb2xvciBUaXRsZSAqL1xuICAgIGxldCBkYXRlVGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCdkYXRlVGl0bGUnLCd0aXRsZVRleHRDb250ZW50JywnQ2hvb3NlIGEgZHVlIGRhdGUnKVxuICAgIGRhdGVCb3guYXBwZW5kQ2hpbGQoZGF0ZVRpdGxlKVxuICAgIFxuICAgIC8qQ29sb3JQaWNrZXIqL1xuICAgIGxldCBkYXRlUGlja2VyID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnLCdkYXRlUGlja2VyJywnZGF0ZUlucHV0JywnJylcbiAgICBkYXRlUGlja2VyLnR5cGUgPSAnZGF0ZSdcbiAgICBcbiAgICBkYXRlQm94LmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpICAgXG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvckJveClcbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQm94KVxuXG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50U2lkZSlcblxuICAgIC8qUHJvamVjdCBDb250YWluZXIgKi9cbiAgICBsZXQgYWRkUHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignJywncHJvamVjdEFkZEJ1dHRvbkNvbnRhaW5lcicpXG5cbiAgICBsZXQgYWRkQnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCgnYnV0dG9uJywnYWRkUHJvamVjdCcsJ2FkZFByb2plY3QnLCdBZGQgcHJvamVjdCcpXG4gICAgXG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChhZGRQcm9qZWN0Q29udGFpbmVyKVxuICAgIHJldHVybiBtYWluQ29udGFpbmVyXG5cbn1cblxubGV0IGNyZWF0ZVRhc2tTdHJ1Y3R1cmUgPSAoKSA9PiB7XG4gICAgXG4gICAgbGV0IG1haW5Db250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoXCJcIiwncHJvamVjdENvbnRhaW5lcicpXG5cbiAgICBcbiAgICAvKiBHZXRzIHRoZSB0aXRsZSBpbnB1dCBvZiB0aGUgY29udGFpbmVyKi9cbiAgICBsZXQgdGl0bGVDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ3RpdGxlVGFzaycsJ21vZGFsSW5wdXQnLCcnKVxuICAgIHRpdGxlQ29udGFpbmVyLnBsYWNlaG9sZGVyID0gJ1RoZSB0YXNrcyB0aXRsZS4uLidcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKVxuXG4gICAgLypDb250ZW50IGRlc2NyaXB0aW9uKi9cbiAgICBsZXQgY29udGVudFNpZGUgPSBjcmVhdGVET01Db250YWluZXIoXCJcIiwndGFza0NvbnRlbnRDb250YWluZXInKVxuXG4gICAgLypub3RlcyovXG4gICAgbGV0IG5vdGVzICA9IGNyZWF0ZURvbUVsZW1lbnQoJ2lucHV0Jywnbm90ZUZpbGVkJywnbm90ZScsJycpXG4gICAgbm90ZXMucGxhY2Vob2xkZXIgPSAnU29tZSBub3RlcyBvZiB0aGUgdGFzay4uLidcbiAgICBcbiAgICAvKlByb2plY3QqL1xuICAgIGxldCBwcm9qZWN0RmF0aGVyID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnKVxuXG4gICAgLypSaWdodCBzaWRlIGNvbnRhaW5lciovXG4gICAgbGV0IHJpZ2h0Q29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKFwiXCIsJ3JpZ2h0Q29udGFpbmVyJylcblxuICAgIC8qRGF0ZSovXG4gICAgbGV0IGRhdGVCb3ggPSBjcmVhdGVET01Db250YWluZXIoJycsJ2RhdGVDb250YWluZXInKVxuXG4gICAgLyogRGF0ZSBUaXRsZSAqL1xuICAgIGxldCBkYXRlVGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCdkYXRlVGl0bGUnLCd0aXRsZVRleHRDb250ZW50JywnQ2hvb3NlIGEgZHVlIGRhdGUnKVxuICAgIGRhdGVCb3guYXBwZW5kQ2hpbGQoZGF0ZVRpdGxlKVxuICAgIFxuICAgIC8qRGF0ZVBpY2tlciovXG4gICAgbGV0IGRhdGVQaWNrZXIgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ2RhdGVQaWNrZXInLCdkYXRlSW5wdXQnLCcnKVxuICAgIGRhdGVQaWNrZXIudHlwZSA9ICdkYXRlJ1xuICAgIFxuXG4gICAgZGF0ZUJveC5hcHBlbmRDaGlsZChkYXRlVGl0bGUpICAgXG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQm94KVxuXG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50U2lkZSlcblxuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJcbn1cblxubGV0IHJlYWRQcm9qZWN0ID0gKHByb2plY3QpID0+e1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKGEsJ3Byb2plY3RDb250YWluZXInKVxuXG4gICAgXG4gICAgLyogR2V0cyB0aGUgdGl0bGUgaW5wdXQgb2YgdGhlIGNvbnRhaW5lciovXG4gICAgbGV0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnLCd0aXRsZVByb2plY3QnLCdtb2RhbElucHV0JywnJylcbiAgICB0aXRsZUNvbnRhaW5lci5wbGFjZWhvbGRlciA9ICdUaGUgcHJvamVjdHMgdGl0bGUuLi4nXG4gICAgdGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSAgcHJvamVjdC5uYW1lXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcilcblxuICAgIC8qQ29udGVudCBkZXNjcmlwdGlvbiovXG4gICAgbGV0IGNvbnRlbnRTaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKGEsJ3Byb2plY3RDb250ZW50Q29udGFpbmVyJylcbiAgICBcbiAgICAvKkRlc2NyaXB0aW9uKi9cbiAgICBsZXQgZGVzY3JpcHRpb25Cb3ggPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ2Rlc2NyaXB0aW9uUHJvamVjdCcsJ21vZGFsVGV4dElucHV0JywnJylcbiAgICBkZXNjcmlwdGlvbkJveC5wbGFjZWhvbGRlciA9ICdUaGUgcHJvamVjdCBjb25zaXN0cyBvZiAuLi4uJ1xuICAgIGRlc2NyaXB0aW9uQm94LnR5cGUgPSAndGV4dCdcblxuICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQm94KVxuXG4gICAgLypSaWdodCBzaWRlIGNvbnRhaW5lciovXG4gICAgbGV0IHJpZ2h0Q29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKGEsJ3JpZ2h0Q29udGFpbmVyJylcblxuICAgIC8qQ29sb3IqL1xuICAgIGxldCBjb2xvckJveCA9IGNyZWF0ZURPTUNvbnRhaW5lcihhLCdjb2xvckNvbnRhaW5lcicpXG5cbiAgICAvKiBDb2xvciBUaXRsZSAqL1xuICAgIGxldCBjb2xvclRpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywnY29sb3JUaXRsZScsJ3RpdGxlVGV4dENvbnRlbnQnLCdDaG9vc2UgYSBjb2xvcicpXG4gICAgY29sb3JCb3guYXBwZW5kQ2hpbGQoY29sb3JUaXRsZSlcbiAgICBcbiAgICAvKkNvbG9yUGlja2VyKi9cbiAgICBsZXQgY29sb3JQaWNrZXIgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ2NvbG9yUGlja2VyJywnY29sb3JJbnB1dCcsJycpXG4gICAgY29sb3JQaWNrZXIudHlwZSA9ICdjb2xvcidcbiAgICBcbiAgICBjb2xvckJveC5hcHBlbmRDaGlsZChjb2xvclBpY2tlcilcblxuXG4gICAgLypEYXRlKi9cbiAgICBsZXQgZGF0ZUJveCA9IGNyZWF0ZURPTUNvbnRhaW5lcihkYXRlLCdkYXRlQ29udGFpbmVyJylcblxuICAgIC8qIENvbG9yIFRpdGxlICovXG4gICAgbGV0IGRhdGVUaXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsJ2RhdGVUaXRsZScsJ3RpdGxlVGV4dENvbnRlbnQnLCdDaG9vc2UgYSBkYXRlJylcbiAgICBkYXRlQm94LmFwcGVuZENoaWxkKGRhdGVUaXRsZSlcbiAgICBcbiAgICAvKkNvbG9yUGlja2VyKi9cbiAgICBsZXQgZGF0ZVBpY2tlciA9IGNyZWF0ZURvbUVsZW1lbnQoJ2lucHV0JywnZGF0ZVBpY2tlcicsJ2RhdGVJbnB1dCcsJycpXG4gICAgZGF0ZVBpY2tlci50eXBlID0gJ2RhdGUnXG4gICAgXG4gICAgZGF0ZUJveC5hcHBlbmRDaGlsZChkYXRlVGl0bGUpICAgXG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvckJveClcbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQm94KVxuXG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50U2lkZSlcblxuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJcbn1cblxuZXhwb3J0e1xuICAgIGNyZWF0ZVRhc2tPcHRpb25cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2xvYWRQYWdlU3R1Y3R1cmV9IGZyb20gJy4vaG9tZSdcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sb2FkUGFnZVN0dWN0dXJlKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=