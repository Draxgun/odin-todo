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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --navy:  #1C3879;\n    --blue: #607EAA;\n    --beige: #EAE3D2;\n    --winter: #F9F5EB;\n}\n\n*{\n    box-sizing: border-box;\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--winter);\n}\n\n.header{\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--navy);\n    font-size: calc(30px + 3vw);\n    color: var(--beige);\n    font-weight: bold;\n    padding: 20px;\n}\n\n.content{\n  display: flex;\n  flex: 10;\n}\n\n.sidebarContainer {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--blue);\n  padding-top: 20px;\n  width: 100%;\n  flex: 1;\n  border-radius: 10px;\n\n}\n\n\n.sidebarButton{\n    background-color: var(--blue);\n    font-weight: bold;\n    padding: 10px calc(30px + 5vw) 10px 30px;\n    border: none;\n    color: var(--beige);\n    font-size: calc(8px + 1vw);\n    text-align: start;\n}\n\n.sidebarButton:hover{\n  filter: brightness(85%);\n}\n\n/*Project Collapsable*/\n.projectsContainer {\n  flex-direction: column;\n  background-color:#92a0b4;\n  display: none;\n  overflow: hidden;\n  \n}\n\n.projectsContainer > * {\n  background-color:#92a0b4;\n  font-weight: bold;\n  padding: 10px 0px 10px 40px;\n  border: none;\n  color: var(--beige);\n  font-size: calc(4px + 0.75vw);\n  text-align: start;\n  \n}\n\n.taskSectionContainer{\n  display: flex;\n  flex-direction: column;\n  flex: 8;\n}\n\n.taskSection{\n    display: flex;\n}\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n/* Modal Content/Box */\n.modal-content {\n    background-color: var(--beige);\n    border-radius: 10px;\n    margin: 15% auto; \n    padding: 20px;\n    border: 1px solid #888;\n    width: 800px;\n    max-width: 80%; \n    \n}\n  \n\n.taskHeader{\n  display: flex;\n  font-weight: bold;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modalHeaderTitle{\n  font-size: 2rem;\n}\n/* The Close Button */\n.close {\n  background: none;\n  float: right;\n  font-size: 20px;\n  border: none;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* Project Modal */\n.projectHeader{\n  padding-bottom: 10px;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n}\n\n.projectContainer{\n  background-color: var(--winter);\n  padding: 10px;\n  border-radius: 10px;\n}\n\n#titleProjectInput{\n  display: flex;\n  border: none;\n  background-color: var(--winter);\n  width: 100%;\n  font-size: 2rem;\n  border-bottom: solid 3px black;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  font-weight: bold;\n  \n}\n\n.projectContentContainer{\n  display: flex;\n  width: 100%;\n}\n\n#descriptionProject{\n  display: flex;\n  border: none;\n  background-color: var(--winter);\n  width: 90%;\n  font-size: 1rem;\n  padding: 10px;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  resize: none;\n  height: 200px;\n  max-height: 50%;\n}\n\n.rightContainer{\n  display: flex;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n  width: 200px;\n  font-size: 1rem;\n  font-weight: bold;\n  justify-content: center;\n}\n\n.colorContainer, .dateContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding:10px;\n  gap: 10px;\n}\n#colorPickerInput{\n  border: none;\n  background-color: var(--winter);\n}\n\n#datePickerInput{\n\n  border: none;\n  background-color: var(--winter);\n  \n}\n\n.projectAddButtonContainer{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#addProjectButton{\n  border: none;\n  background-color: var(--winter);\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#addProjectButton:hover{\n  text-decoration: underline;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --navy:  #1C3879;\n    --blue: #607EAA;\n    --beige: #EAE3D2;\n    --winter: #F9F5EB;\n}\n\n*{\n    box-sizing: border-box;\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--winter);\n}\n\n.header{\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--navy);\n    font-size: calc(30px + 3vw);\n    color: var(--beige);\n    font-weight: bold;\n    padding: 20px;\n}\n\n.content{\n  display: flex;\n  flex: 10;\n}\n\n.sidebarContainer {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--blue);\n  padding-top: 20px;\n  width: 100%;\n  flex: 1;\n  border-radius: 10px;\n\n}\n\n\n.sidebarButton{\n    background-color: var(--blue);\n    font-weight: bold;\n    padding: 10px calc(30px + 5vw) 10px 30px;\n    border: none;\n    color: var(--beige);\n    font-size: calc(8px + 1vw);\n    text-align: start;\n}\n\n.sidebarButton:hover{\n  filter: brightness(85%);\n}\n\n/*Project Collapsable*/\n.projectsContainer {\n  flex-direction: column;\n  background-color:#92a0b4;\n  display: none;\n  overflow: hidden;\n  \n}\n\n.projectsContainer > * {\n  background-color:#92a0b4;\n  font-weight: bold;\n  padding: 10px 0px 10px 40px;\n  border: none;\n  color: var(--beige);\n  font-size: calc(4px + 0.75vw);\n  text-align: start;\n  \n}\n\n.taskSectionContainer{\n  display: flex;\n  flex-direction: column;\n  flex: 8;\n}\n\n.taskSection{\n    display: flex;\n}\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n/* Modal Content/Box */\n.modal-content {\n    background-color: var(--beige);\n    border-radius: 10px;\n    margin: 15% auto; \n    padding: 20px;\n    border: 1px solid #888;\n    width: 800px;\n    max-width: 80%; \n    \n}\n  \n\n.taskHeader{\n  display: flex;\n  font-weight: bold;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modalHeaderTitle{\n  font-size: 2rem;\n}\n/* The Close Button */\n.close {\n  background: none;\n  float: right;\n  font-size: 20px;\n  border: none;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* Project Modal */\n.projectHeader{\n  padding-bottom: 10px;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n}\n\n.projectContainer{\n  background-color: var(--winter);\n  padding: 10px;\n  border-radius: 10px;\n}\n\n#titleProjectInput{\n  display: flex;\n  border: none;\n  background-color: var(--winter);\n  width: 100%;\n  font-size: 2rem;\n  border-bottom: solid 3px black;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  font-weight: bold;\n  \n}\n\n.projectContentContainer{\n  display: flex;\n  width: 100%;\n}\n\n#descriptionProject{\n  display: flex;\n  border: none;\n  background-color: var(--winter);\n  width: 90%;\n  font-size: 1rem;\n  padding: 10px;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  resize: none;\n  height: 200px;\n  max-height: 50%;\n}\n\n.rightContainer{\n  display: flex;\n  align-items: center;\n  align-content: center;\n  flex-direction: column;\n  width: 200px;\n  font-size: 1rem;\n  font-weight: bold;\n  justify-content: center;\n}\n\n.colorContainer, .dateContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding:10px;\n  gap: 10px;\n}\n#colorPickerInput{\n  border: none;\n  background-color: var(--winter);\n}\n\n#datePickerInput{\n\n  border: none;\n  background-color: var(--winter);\n  \n}\n\n.projectAddButtonContainer{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#addProjectButton{\n  border: none;\n  background-color: var(--winter);\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#addProjectButton:hover{\n  text-decoration: underline;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFromLocalStorage": () => (/* binding */ getFromLocalStorage),
/* harmony export */   "saveInLocalStorage": () => (/* binding */ saveInLocalStorage)
/* harmony export */ });
let saveInLocalStorage  = (key,value) => {
    localStorage.setItem (key, JSON.stringify(value))
}

let getFromLocalStorage = (key) => {
    
    if (JSON.parse(localStorage.getItem(key))){     
        let value = JSON.parse(localStorage.getItem(key))
        return value
    }else{
        let placeHolder = []
        console.log('Created a placeholder array')
        localStorage.setItem (key,JSON.stringify(placeHolder))

        return JSON.parse(localStorage.getItem(key))
    }
    
   

}





/***/ }),

/***/ "./src/mainObjects.js":
/*!****************************!*\
  !*** ./src/mainObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "mainDatabase": () => (/* binding */ mainDatabase)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


class Project {

    constructor(title,description,dueDate,tasks,color) {

        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.tasks = tasks
        this.color = color
    }
    
    /*Deltes a task from a project */
    deleteTask = (task) => {
        let indexDel = this.tasks.indexOf(task)
        task.splice(indexDel,1)
    }

    addTask = (task) => {
        this.tasks.push(task)
    }

}

class Task extends Project {

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



const mainDatabase = (() => {

    /*gets the info of the main database*/
    let data  = () => (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)('projectDatabase');
    
    /*Adds a project to the main database*/
    const addProject = (project) => {
        let newData = data()
        newData.push(project)
        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveInLocalStorage)('projectDatabase',newData)
    }

    /*Gets the projectTitles*/
    const getProjectsTitles = () => {
        let newData = data()
        let titles  = newData.map((project)=> {return project.title})
        return titles
    }


    return {
      addProject,
      data,
      getProjectsTitles
    };
  })();


  

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModals": () => (/* binding */ closeModals),
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
    
    let modalContainer = document.querySelector('modal')[0]
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
/* harmony import */ var _mainObjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainObjects */ "./src/mainObjects.js");
/* harmony import */ var _domCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domCreators */ "./src/domCreators.js");




 
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
    addTaskButton();
    addProjectButton();
}

let addTaskButton = () => {

    let addButton = document.getElementById('addButton');
    let taskContent = (0,_modal__WEBPACK_IMPORTED_MODULE_1__.createTaskModal)();
    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.createModalStructure)(taskContent,'task','Add a...',addButton);


}

let addProjectButton = () => {
    let addButton = document.getElementById('projectsButton')
    let content = loadProjectCollapsible()
    addButton.addEventListener('click',()=>{
        if (content.style.display === "flex") {
            content.style.display = "none";
          } else {
            content.style.display = "flex";
          }
    })
    
}


let loadProjectCollapsible = () => {
    
    let addButton = document.getElementById('projectsButton')
    let projectTitles = _mainObjects__WEBPACK_IMPORTED_MODULE_2__.mainDatabase.getProjectsTitles()
    let projectsContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_3__.createDomElement)('div','','projectsContainer','')

    projectTitles.forEach(project => {
        let currentProject = (0,_domCreators__WEBPACK_IMPORTED_MODULE_3__.createDomElement)('button',`project ${project}`,'collapsible',`${project}`)
        projectsContainer.appendChild(currentProject)
    });

    addButton.insertAdjacentElement('afterend',projectsContainer)

    return projectsContainer
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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");







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
        
    let mainForm = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('form','projectForm','projectFormContainer','')

    let mainContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'projectContainer');

    
    /* Gets the title input of the container*/
    let titleContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','titleProject','projectInput','');
    titleContainer.placeholder = 'The projects title...';
    titleContainer.setAttribute('required','')
    mainContainer.appendChild(titleContainer);

    /*Content description*/
    let contentSide = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'projectContentContainer');
    
    /*Description*/
    let descriptionBox = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('textarea','descriptionProject','projectInput','');
    descriptionBox.placeholder = 'The project consists of ....';
    descriptionBox.setAttribute('required','')

    contentSide.appendChild(descriptionBox)

    /*Right side container*/
    let rightContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'rightContainer');

    /*Color*/
    let colorBox = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)("",'colorContainer');

    /* Color Title */
    let colorTitle = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('div','colorTitle','titleTextContent','Choose a color');
    colorBox.appendChild(colorTitle);
    
    /*ColorPicker*/
    let colorPicker = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','colorPicker','projectInput','');
    colorPicker.setAttribute('required','')
    colorPicker.type = 'color';
    
    colorBox.appendChild(colorPicker);


    /*Date*/
    let dateBox = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)('','dateContainer')

    /* Color Title */
    let dateTitle = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('div','dateTitle','titleTextContent','Choose a due date')
    dateBox.appendChild(dateTitle)
    
    
    /*ColorPicker*/
    let datePicker = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','datePicker','projectInput','');
    datePicker.type = 'date';
    datePicker.setAttribute('required','')
    
    dateBox.appendChild(datePicker) ;  

    rightContainer.appendChild(colorBox);
    rightContainer.appendChild(dateBox);

    contentSide.appendChild(rightContainer);
    mainContainer.appendChild(contentSide);

    /*Project Container */
    let addProjectContainer = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDOMContainer)('','projectAddButtonContainer');

    let addButton = (0,_domCreators__WEBPACK_IMPORTED_MODULE_1__.createDomElement)('input','addProject','addProject','Add project');
    addButton.type = 'submit'

    
    mainForm.addEventListener('submit',()=>{
        let newProject = createProject();
        _mainObjects__WEBPACK_IMPORTED_MODULE_2__.mainDatabase.addProject(newProject);
        
    })

    addProjectContainer.appendChild(addButton)

    mainContainer.append(addProjectContainer)
    mainForm.appendChild(mainContainer)
    return mainForm

}

let createProject = () => {
   let projectInput = document.querySelectorAll('.projectInput')

   let project = new _mainObjects__WEBPACK_IMPORTED_MODULE_2__.Project(
    projectInput[0].value,
    projectInput[1].value,
    projectInput[3].value,
    [],
    projectInput[2].value
   )

    return project
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUIsZ0VBQWtCOztBQUVyQztBQUNBLHFCQUFxQiw4REFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFnQjtBQUN0QztBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esa0JBQWtCLGdFQUFrQjs7QUFFcEM7QUFDQSxvQkFBb0IsOERBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4REFBZ0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7VUNqUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDbEI7O0FBRXJCLHVEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYWluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL3NyYy9jYXBpdGFsaXplLmpzIiwid2VicGFjazovL21haW4vLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9tYWluLy4vc3JjL2RvbUNyZWF0b3JzLmpzIiwid2VicGFjazovL21haW4vLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL21haW4vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9tYWluLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9tYWluLy4vc3JjL21haW5PYmplY3RzLmpzIiwid2VicGFjazovL21haW4vLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vbWFpbi8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL21haW4vLi9zcmMvdGFza0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9tYWluLy4vc3JjL3Rhc2tNb2RhbC5qcyIsIndlYnBhY2s6Ly9tYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWFpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tYWluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tbmF2eTogICMxQzM4Nzk7XFxuICAgIC0tYmx1ZTogIzYwN0VBQTtcXG4gICAgLS1iZWlnZTogI0VBRTNEMjtcXG4gICAgLS13aW50ZXI6ICNGOUY1RUI7XFxufVxcblxcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWZcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbnRlcik7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gICAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAzdncpO1xcbiAgICBjb2xvcjogdmFyKC0tYmVpZ2UpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTA7XFxufVxcblxcbi5zaWRlYmFyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxufVxcblxcblxcbi5zaWRlYmFyQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDEwcHggY2FsYygzMHB4ICsgNXZ3KSAxMHB4IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWJlaWdlKTtcXG4gICAgZm9udC1zaXplOiBjYWxjKDhweCArIDF2dyk7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uc2lkZWJhckJ1dHRvbjpob3ZlcntcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4vKlByb2plY3QgQ29sbGFwc2FibGUqL1xcbi5wcm9qZWN0c0NvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjojOTJhMGI0O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBcXG59XFxuXFxuLnByb2plY3RzQ29udGFpbmVyID4gKiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiM5MmEwYjQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggNDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1iZWlnZSk7XFxuICBmb250LXNpemU6IGNhbGMoNHB4ICsgMC43NXZ3KTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgXFxufVxcblxcbi50YXNrU2VjdGlvbkNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogODtcXG59XFxuXFxuLnRhc2tTZWN0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIH1cXG4gIFxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWlnZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIG1heC13aWR0aDogODAlOyBcXG4gICAgXFxufVxcbiAgXFxuXFxuLnRhc2tIZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWxIZWFkZXJUaXRsZXtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBQcm9qZWN0IE1vZGFsICovXFxuLnByb2plY3RIZWFkZXJ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3RDb250YWluZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0aXRsZVByb2plY3RJbnB1dHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIFxcbn1cXG5cXG4ucHJvamVjdENvbnRlbnRDb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNkZXNjcmlwdGlvblByb2plY3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2ludGVyKTtcXG4gIHdpZHRoOiA5MCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1heC1oZWlnaHQ6IDUwJTtcXG59XFxuXFxuLnJpZ2h0Q29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbG9yQ29udGFpbmVyLCAuZGF0ZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuI2NvbG9yUGlja2VySW5wdXR7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbn1cXG5cXG4jZGF0ZVBpY2tlcklucHV0e1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2ludGVyKTtcXG4gIFxcbn1cXG5cXG4ucHJvamVjdEFkZEJ1dHRvbkNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9ue1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2ludGVyKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVye1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hC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QUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLFlBQVk7RUFDWiwrQkFBK0I7O0FBRWpDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7Ozs7SUFJSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLW5hdnk6ICAjMUMzODc5O1xcbiAgICAtLWJsdWU6ICM2MDdFQUE7XFxuICAgIC0tYmVpZ2U6ICNFQUUzRDI7XFxuICAgIC0td2ludGVyOiAjRjlGNUVCO1xcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmXFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aW50ZXIpO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgM3Z3KTtcXG4gICAgY29sb3I6IHZhcigtLWJlaWdlKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEwO1xcbn1cXG5cXG4uc2lkZWJhckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbn1cXG5cXG5cXG4uc2lkZWJhckJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxMHB4IGNhbGMoMzBweCArIDV2dykgMTBweCAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1iZWlnZSk7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg4cHggKyAxdncpO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnNpZGViYXJCdXR0b246aG92ZXJ7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuLypQcm9qZWN0IENvbGxhcHNhYmxlKi9cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IzkyYTBiNDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgXFxufVxcblxcbi5wcm9qZWN0c0NvbnRhaW5lciA+ICoge1xcbiAgYmFja2dyb3VuZC1jb2xvcjojOTJhMGI0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDQwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tYmVpZ2UpO1xcbiAgZm9udC1zaXplOiBjYWxjKDRweCArIDAuNzV2dyk7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIFxcbn1cXG5cXG4udGFza1NlY3Rpb25Db250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDg7XFxufVxcblxcbi50YXNrU2VjdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICB9XFxuICBcXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmVpZ2UpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDE1JSBhdXRvOyBcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTsgXFxuICAgIFxcbn1cXG4gIFxcblxcbi50YXNrSGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsSGVhZGVyVGl0bGV7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogUHJvamVjdCBNb2RhbCAqL1xcbi5wcm9qZWN0SGVhZGVye1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2ludGVyKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jdGl0bGVQcm9qZWN0SW5wdXR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2ludGVyKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGJsYWNrO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBcXG59XFxuXFxuLnByb2plY3RDb250ZW50Q29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZGVzY3JpcHRpb25Qcm9qZWN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbnRlcik7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1MCU7XFxufVxcblxcbi5yaWdodENvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb2xvckNvbnRhaW5lciwgLmRhdGVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOjEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcbiNjb2xvclBpY2tlcklucHV0e1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2ludGVyKTtcXG59XFxuXFxuI2RhdGVQaWNrZXJJbnB1dHtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbnRlcik7XFxuICBcXG59XFxuXFxuLnByb2plY3RBZGRCdXR0b25Db250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdpbnRlcik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ1dHRvbjpob3ZlcntcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cmluZykgPT4ge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmV4cG9ydHtcbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXJcbn0iLCJpbXBvcnQge2xvYWRTaWRlYmFyfSBmcm9tICcuL3NpZGViYXInXG5pbXBvcnQge2xvYWRUYXNrU2VjdGlvbn0gZnJvbSAnLi90YXNrQ29udGFpbmVyJ1xuXG5sZXQgY3JlYXRlQ29udGVudCA9ICgpID0+IHtcblxuICAgIGxldCBjb250ZW50ID0gY3JlYXRlQ29udGVudENvbnRhaW5lcigpXG4gICAgbG9hZFNpZGViYXIoY29udGVudClcbiAgICBsb2FkVGFza1NlY3Rpb24oY29udGVudClcblxuICAgIFxufVxuXG5sZXQgY3JlYXRlQ29udGVudENvbnRhaW5lciA9ICgpID0+e1xuICAgIFxuICAgIC8qIGNvbnRlbnQgKi9cbiAgICBsZXQgIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVDb250ZW50XG5cbn0iLCJpbXBvcnQge2NhcGl0YWxpemVGaXJzdExldHRlcn0gZnJvbSAnLi9jYXBpdGFsaXplJ1xuXG5sZXQgY3JlYXRlRE9NQ29udGFpbmVyID0gKG5hbWUsY2xhc3NsaXN0KSA9PntcblxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke25hbWV9YClcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG4gICAgXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgICBcbiAgICBcbiAgXG59XG5cbmxldCBjcmVhdGVEb21FbGVtZW50ID0gKHR5cGUsbmFtZSxjbGFzc2xpc3QsdGV4dENvbnRlbnQpID0+e1xuICAgIFxuICAgIGlmKHR5cGUgPT09ICdidXR0b24nIHx8IHR5cGUgPT09ICdpbnB1dCcpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRleHRDb250ZW50KVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLGAke25hbWV9JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZSl9YClcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzbGlzdH1gKVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfWVsc2V7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApXG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGV4dENvbnRlbnQpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsYCR7bmFtZX1gKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NsaXN0fWApXG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG4gICAgXG4gICAgXG59XG5cbmV4cG9ydHtcbiAgICBjcmVhdGVET01Db250YWluZXIsXG4gICAgY3JlYXRlRG9tRWxlbWVudFxufSIsIlxubGV0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcblxuICAgIGxldCBoZWFkZXIgPSBjcmVhdGVIZWFkZXJDb250YWluZXIoKVxuICAgIGNyZWF0ZUhlYWRlclRpdGxlKGhlYWRlcilcbn1cblxubGV0IGNyZWF0ZUhlYWRlckNvbnRhaW5lciA9ICgpID0+e1xuICAgIFxuICAgIC8qIEhlYWRlciAqL1xuICAgIGxldCAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcblxuICAgIHJldHVybiBoZWFkZXJcblxufVxuXG5cbmxldCBjcmVhdGVIZWFkZXJUaXRsZSA9IChoZWFkZXIpID0+e1xuXG4gICAgXG4gICAgbGV0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyVGl0bGUnKVxuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ1RvLURvJ1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKVxuXG59XG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVIZWFkZXJcbn1cblxuXG5cbiIsImltcG9ydCB7Y3JlYXRlSGVhZGVyfSAgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgeyBjcmVhdGVDb250ZW50IH0gZnJvbSAnLi9jb250ZW50JztcbmltcG9ydCB7Y3JlYXRlTW9kYWx9IGZyb20gJy4vbW9kYWwnXG5cbi8qIEhUTUwgU3RydWN0dXJlICovXG5cbmxldCBsb2FkUGFnZVN0dWN0dXJlID0gKCkgPT4ge1xuXG4gICBcblxuICAgIC8qQ3JlYXRlcyB0aGUgaGVhZGVyKi9cbiAgICBjcmVhdGVIZWFkZXIoKVxuICAgIC8qIENyZWF0ZXMgdGhlIGNvbnRlbnQgc2lkZSAqL1xuICAgIGNyZWF0ZUNvbnRlbnQoKVxuICAgIFxuICAgXG4gICAgXG59XG5cbmV4cG9ydHtcbiAgICBsb2FkUGFnZVN0dWN0dXJlXG59XG5cblxuXG5cbiIsImxldCBzYXZlSW5Mb2NhbFN0b3JhZ2UgID0gKGtleSx2YWx1ZSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtIChrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbn1cblxubGV0IGdldEZyb21Mb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XG4gICAgXG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpeyAgICAgXG4gICAgICAgIGxldCB2YWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfWVsc2V7XG4gICAgICAgIGxldCBwbGFjZUhvbGRlciA9IFtdXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIGEgcGxhY2Vob2xkZXIgYXJyYXknKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSAoa2V5LEpTT04uc3RyaW5naWZ5KHBsYWNlSG9sZGVyKSlcblxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICAgIH1cbiAgICBcbiAgIFxuXG59XG5cblxuXG5leHBvcnQge1xuICAgIHNhdmVJbkxvY2FsU3RvcmFnZSxcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlLFxufSIsImltcG9ydCB7c2F2ZUluTG9jYWxTdG9yYWdlLCBnZXRGcm9tTG9jYWxTdG9yYWdlfSBmcm9tICcuL2xvY2FsU3RvcmFnZSdcblxuY2xhc3MgUHJvamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHRhc2tzLGNvbG9yKSB7XG5cbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrc1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB9XG4gICAgXG4gICAgLypEZWx0ZXMgYSB0YXNrIGZyb20gYSBwcm9qZWN0ICovXG4gICAgZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCBpbmRleERlbCA9IHRoaXMudGFza3MuaW5kZXhPZih0YXNrKVxuICAgICAgICB0YXNrLnNwbGljZShpbmRleERlbCwxKVxuICAgIH1cblxuICAgIGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzaylcbiAgICB9XG5cbn1cblxuY2xhc3MgVGFzayBleHRlbmRzIFByb2plY3Qge1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsZHVlRGF0ZSxwcmlvcml0eSxub3Rlcyxwcm9qZWN0LGNoZWNrbGlzdCkge1xuICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgdGhpcy5ub3RlcyA9IG5vdGVzXG4gICAgIHN1cGVyKHByb2plY3QpXG4gICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0XG4gICAgfVxuICAgIFxuICAgIGNoYW5nZVN0YXVzID0gKCkgPT4ge1xuICAgICAgICBpZiggdGhpcy5jaGVja2xpc3QgPT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5jaGVja2xpc3QgPSB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cbmNvbnN0IG1haW5EYXRhYmFzZSA9ICgoKSA9PiB7XG5cbiAgICAvKmdldHMgdGhlIGluZm8gb2YgdGhlIG1haW4gZGF0YWJhc2UqL1xuICAgIGxldCBkYXRhICA9ICgpID0+IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3Byb2plY3REYXRhYmFzZScpO1xuICAgIFxuICAgIC8qQWRkcyBhIHByb2plY3QgdG8gdGhlIG1haW4gZGF0YWJhc2UqL1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBsZXQgbmV3RGF0YSA9IGRhdGEoKVxuICAgICAgICBuZXdEYXRhLnB1c2gocHJvamVjdClcbiAgICAgICAgc2F2ZUluTG9jYWxTdG9yYWdlKCdwcm9qZWN0RGF0YWJhc2UnLG5ld0RhdGEpXG4gICAgfVxuXG4gICAgLypHZXRzIHRoZSBwcm9qZWN0VGl0bGVzKi9cbiAgICBjb25zdCBnZXRQcm9qZWN0c1RpdGxlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5ld0RhdGEgPSBkYXRhKClcbiAgICAgICAgbGV0IHRpdGxlcyAgPSBuZXdEYXRhLm1hcCgocHJvamVjdCk9PiB7cmV0dXJuIHByb2plY3QudGl0bGV9KVxuICAgICAgICByZXR1cm4gdGl0bGVzXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgYWRkUHJvamVjdCxcbiAgICAgIGRhdGEsXG4gICAgICBnZXRQcm9qZWN0c1RpdGxlc1xuICAgIH07XG4gIH0pKCk7XG5cbmV4cG9ydHtcbiAgICBQcm9qZWN0LFxuICAgIFRhc2ssXG4gICAgbWFpbkRhdGFiYXNlXG59XG4gICIsImltcG9ydCB7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyfSBmcm9tICcuL2NhcGl0YWxpemUnXG5pbXBvcnQge2NyZWF0ZURPTUNvbnRhaW5lcixjcmVhdGVEb21FbGVtZW50fSBmcm9tICcuL2RvbUNyZWF0b3JzJ1xuaW1wb3J0IHtjcmVhdGVUYXNrT3B0aW9ufSBmcm9tICcuL3Rhc2tNb2RhbCdcblxuXG5cbmxldCBjcmVhdGVUYXNrTW9kYWwgPSAoKSA9PiB7XG4gICAgXG5cbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZVRhc2tPcHRpb24oKVxuICAgIC8vIGxldCBtYWluQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCcnLCd0ZXN0Q29udGVudCcpXG5cbiAgICAvLyBsZXQgc3RydWN0dXJlID0gWydwcm9qZWN0JywndGl0bGUnLCdkZXNjcmlwdGlvbicsJ2R1ZURhdGUnLCdwcmlvcml0eScsJ25vdGVzJywnY2hlY2tsaXN0J11cblxuICBcbiAgICAvLyBzdHJ1Y3R1cmUuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIFxuICAgIC8vICAgICBsZXQgbmFtZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsZmllbGQsYG1vZGFsRmllbGRUaXRsZWAsYCR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGZpZWxkKX1gKVxuICAgIC8vICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpXG5cbiAgICAvLyAgICAgbGV0IGlucHV0ID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnLGZpZWxkLGBtb2RhbEZpZWxkSW5wdXRgLGBgKVxuICAgIC8vICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIC8vIH0pXG5cbiAgICBcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lclxufVxuXG5cbmxldCBjcmVhdGVNb2RhbFN0cnVjdHVyZSA9IChjb250ZW50LG1vZGFsTmFtZSx0aXRsZSxvcGVuQnV0dG9uKT0+e1xuXG5cbiAgICAvKiBDcmVhdGVzIHRoZSBtb2RhbCBDb250YWluZXIgKi9cbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIobW9kYWxOYW1lLCdtb2RhbCcpXG4gICAgXG4gICAgbGV0IG1vZGFsQ29udGVudCA9IGNyZWF0ZURPTUNvbnRhaW5lcignJywnbW9kYWwtY29udGVudCcpXG5cbiAgICAvKiBDcmVhdGVzIHRoZSBtb2RhbCBoZWFkZXIgKi9cbiAgICBsZXQgbW9kYWxIZWFkZXIgPSBjcmVhdGVET01Db250YWluZXIoJycsYCR7bW9kYWxOYW1lfUhlYWRlcmApXG4gICAgXG4gICAgLyogQ3JlYXRlcyB0aGUgbW9kYWwgdGl0bGUgKi9cbiAgICBsZXQgbW9kYWxUaXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsJycsJ21vZGFsSGVhZGVyVGl0bGUnLHRpdGxlKVxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpXG4gICAgLyogQ3JlYXRlcyB0aGUgY2xvc2UgYnV0dG9uKi9cbiAgICBsZXQgY2xvc2UgID0gY3JlYXRlRG9tRWxlbWVudCgnYnV0dG9uJywnJywnY2xvc2UnLCd4JylcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZSlcblxuICAgIC8qIEFkZHMgdGhlIG1vZGFsICovXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKVxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KVxuXG4gICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIH0pXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcbiAgICBcbiAgICBcbiAgICB9KVxuXG59XG5cbmxldCBjbG9zZU1vZGFscyA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtb2RhbCcpWzBdXG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXG59XG5cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZVRhc2tNb2RhbCxcbiAgICBjcmVhdGVNb2RhbFN0cnVjdHVyZSxcbiAgICBjbG9zZU1vZGFscyxcbn0iLCJpbXBvcnQge2NhcGl0YWxpemVGaXJzdExldHRlcn0gZnJvbSAnLi9jYXBpdGFsaXplJ1xuaW1wb3J0IHtjcmVhdGVNb2RhbFN0cnVjdHVyZSxjcmVhdGVUYXNrTW9kYWx9IGZyb20gJy4vbW9kYWwnXG5pbXBvcnQge1Byb2plY3QsVGFzayxtYWluRGF0YWJhc2V9IGZyb20gJy4vbWFpbk9iamVjdHMnXG5pbXBvcnQgeyBjcmVhdGVEb21FbGVtZW50IH0gZnJvbSAnLi9kb21DcmVhdG9ycydcbiBcbi8qIENyZWF0ZXMgdGhlIHNpZGUgYmFyKi9cbmxldCBsb2FkU2lkZWJhcj0gKGNvbnRlbnQpID0+IHtcbiAgICBsZXQgc2lkZWJhckNvbnRhaW5lciA9IGNyZWF0ZVNpZGViYXJDb250YWluZXIoY29udGVudClcblxuXG4gICAgXG4gICAgY3JlYXRlU2lkZWJhcihzaWRlYmFyQ29udGFpbmVyKVxuICAgIGFkZEJ1dHRvbkxpc3RlbmVycygpXG59XG5cbmxldCBjcmVhdGVTaWRlYmFyQ29udGFpbmVyID0gKGNvbnRlbnQpID0+IHtcbiAgICBsZXQgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZWJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyQ29udGFpbmVyJylcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRhaW5lcilcblxuICAgIHJldHVybiBzaWRlYmFyQ29udGFpbmVyXG59XG5cbmxldCBjcmVhdGVTaWRlYmFyID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIFxuICAgIGxldCBpdGVtTmFtZXMgPSBbJ2hvbWUnLCd0b2RheScsJ3dlZWsnLCdtb250aCcsJ3Byb2plY3RzJywnYWRkJ11cblxuICAgIGl0ZW1OYW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjcmVhdGVTaWRlYmFySXRlbShpdGVtLGNvbnRhaW5lcilcbiAgICB9KTtcblxuXG59XG5cbmxldCBjcmVhdGVTaWRlYmFySXRlbSA9IChuYW1lLGNvbnRhaW5lcikgPT57XG4gICAgXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG5hbWUpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLGAke25hbWV9QnV0dG9uYClcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChgc2lkZWJhckJ1dHRvbmApXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG59XG5cbmxldCBhZGRCdXR0b25MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgYWRkVGFza0J1dHRvbigpO1xuICAgIGFkZFByb2plY3RCdXR0b24oKTtcbn1cblxubGV0IGFkZFRhc2tCdXR0b24gPSAoKSA9PiB7XG5cbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEJ1dHRvbicpO1xuICAgIGxldCB0YXNrQ29udGVudCA9IGNyZWF0ZVRhc2tNb2RhbCgpO1xuICAgIGNyZWF0ZU1vZGFsU3RydWN0dXJlKHRhc2tDb250ZW50LCd0YXNrJywnQWRkIGEuLi4nLGFkZEJ1dHRvbik7XG5cblxufVxuXG5sZXQgYWRkUHJvamVjdEJ1dHRvbiA9ICgpID0+IHtcbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzQnV0dG9uJylcbiAgICBsZXQgY29udGVudCA9IGxvYWRQcm9qZWN0Q29sbGFwc2libGUoKVxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgaWYgKGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICB9XG4gICAgfSlcbiAgICBcbn1cblxuXG5sZXQgbG9hZFByb2plY3RDb2xsYXBzaWJsZSA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzQnV0dG9uJylcbiAgICBsZXQgcHJvamVjdFRpdGxlcyA9IG1haW5EYXRhYmFzZS5nZXRQcm9qZWN0c1RpdGxlcygpXG4gICAgbGV0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywnJywncHJvamVjdHNDb250YWluZXInLCcnKVxuXG4gICAgcHJvamVjdFRpdGxlcy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBjcmVhdGVEb21FbGVtZW50KCdidXR0b24nLGBwcm9qZWN0ICR7cHJvamVjdH1gLCdjb2xsYXBzaWJsZScsYCR7cHJvamVjdH1gKVxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdClcbiAgICB9KTtcblxuICAgIGFkZEJ1dHRvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJyxwcm9qZWN0c0NvbnRhaW5lcilcblxuICAgIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lclxufVxuXG5cblxuXG5leHBvcnR7XG4gICAgbG9hZFNpZGViYXJcbn1cblxuIiwibGV0IGxvYWRUYXNrU2VjdGlvbiA9IChjb250ZW50KSA9PiB7XG4gICAgbGV0IG1haW4gPSBjcmVhdGVUYXNrU2VjdGlvbigpXG4gICAgY3JlYXRlVGFza0NvbnRhaW5lcihtYWluKVxuICAgIGNyZWF0ZUZvb3RlcihtYWluKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbn1cblxubGV0IGNyZWF0ZVRhc2tTZWN0aW9uID0gKCkgPT4ge1xuICAgIGxldCB0YXNrU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza1NlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza1NlY3Rpb25Db250YWluZXInKVxuICAgIHRhc2tTZWN0aW9uQ29udGFpbmVyLnRleHRDb250ZW50ID0nYXNkYXMnXG5cbiAgICByZXR1cm4gdGFza1NlY3Rpb25Db250YWluZXJcbn1cblxubGV0IGNyZWF0ZVRhc2tDb250YWluZXIgPSAodGFza1NlY3Rpb25Db250YWluZXIpID0+IHtcbiAgICBsZXQgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250YWluZXInKVxuXG4gICAgdGFza1NlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpXG59XG5cbmxldCBjcmVhdGVGb290ZXIgPSAodGFza1NlY3Rpb25Db250YWluZXIpID0+IHtcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQSBwcm9qZWN0IGJ5IEFsZWphbmRybyBCYW51ZWxvcydcbiAgICB0YXNrU2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpXG59XG5cblxuZXhwb3J0e1xuICAgIGxvYWRUYXNrU2VjdGlvblxufSIsImltcG9ydCB7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyfSBmcm9tICcuL2NhcGl0YWxpemUnXG5pbXBvcnQge2NyZWF0ZURPTUNvbnRhaW5lcixjcmVhdGVEb21FbGVtZW50fSBmcm9tICcuL2RvbUNyZWF0b3JzJ1xuaW1wb3J0IHtQcm9qZWN0LFRhc2ssbWFpbkRhdGFiYXNlfSBmcm9tICcuL21haW5PYmplY3RzJ1xuaW1wb3J0IHtjcmVhdGVNb2RhbFN0cnVjdHVyZSxjbG9zZU1vZGFsc30gZnJvbSAnLi9tb2RhbCdcbmltcG9ydCB7c2F2ZUluTG9jYWxTdG9yYWdlLCBnZXRGcm9tTG9jYWxTdG9yYWdlfSBmcm9tICcuL2xvY2FsU3RvcmFnZSdcblxuXG5sZXQgY3JlYXRlVGFza09wdGlvbiA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZURPTUNvbnRhaW5lcignJywnb3B0aW9uQ29udGFpbmVyJylcblxuICAgIGxldCBwcm9qZWN0ID0gIGNyZWF0ZURvbUVsZW1lbnQoJ2J1dHRvbicsJ21vZGFsUHJvamVjdCcsJ21vZGFsVGFza0J1dHRvbicsJ1Byb2plY3QnKVxuICAgIGxldCB0YXNrID0gIGNyZWF0ZURvbUVsZW1lbnQoJ2J1dHRvbicsJ21vZGFsVGFzaycsJ21vZGFsVGFza0J1dHRvbicsJ1Rhc2snKVxuXG4gICAgY3JlYXRlTW9kYWxTdHJ1Y3R1cmUoY3JlYXRlUHJvamVjdFN0cnVjdHVyZSgpLCdwcm9qZWN0JywnQWRkIHlvdXIgcHJvamVjdCcscHJvamVjdClcblxuXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2snKVxuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXG4gICAgfSlcblxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJylcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIH0pXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKVxuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJcbn1cblxuXG5sZXQgY3JlYXRlUHJvamVjdFN0cnVjdHVyZSA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgbGV0IG1haW5Gb3JtID0gY3JlYXRlRG9tRWxlbWVudCgnZm9ybScsJ3Byb2plY3RGb3JtJywncHJvamVjdEZvcm1Db250YWluZXInLCcnKVxuXG4gICAgbGV0IG1haW5Db250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoXCJcIiwncHJvamVjdENvbnRhaW5lcicpO1xuXG4gICAgXG4gICAgLyogR2V0cyB0aGUgdGl0bGUgaW5wdXQgb2YgdGhlIGNvbnRhaW5lciovXG4gICAgbGV0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnLCd0aXRsZVByb2plY3QnLCdwcm9qZWN0SW5wdXQnLCcnKTtcbiAgICB0aXRsZUNvbnRhaW5lci5wbGFjZWhvbGRlciA9ICdUaGUgcHJvamVjdHMgdGl0bGUuLi4nO1xuICAgIHRpdGxlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gICAgLypDb250ZW50IGRlc2NyaXB0aW9uKi9cbiAgICBsZXQgY29udGVudFNpZGUgPSBjcmVhdGVET01Db250YWluZXIoXCJcIiwncHJvamVjdENvbnRlbnRDb250YWluZXInKTtcbiAgICBcbiAgICAvKkRlc2NyaXB0aW9uKi9cbiAgICBsZXQgZGVzY3JpcHRpb25Cb3ggPSBjcmVhdGVEb21FbGVtZW50KCd0ZXh0YXJlYScsJ2Rlc2NyaXB0aW9uUHJvamVjdCcsJ3Byb2plY3RJbnB1dCcsJycpO1xuICAgIGRlc2NyaXB0aW9uQm94LnBsYWNlaG9sZGVyID0gJ1RoZSBwcm9qZWN0IGNvbnNpc3RzIG9mIC4uLi4nO1xuICAgIGRlc2NyaXB0aW9uQm94LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuXG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Cb3gpXG5cbiAgICAvKlJpZ2h0IHNpZGUgY29udGFpbmVyKi9cbiAgICBsZXQgcmlnaHRDb250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoXCJcIiwncmlnaHRDb250YWluZXInKTtcblxuICAgIC8qQ29sb3IqL1xuICAgIGxldCBjb2xvckJveCA9IGNyZWF0ZURPTUNvbnRhaW5lcihcIlwiLCdjb2xvckNvbnRhaW5lcicpO1xuXG4gICAgLyogQ29sb3IgVGl0bGUgKi9cbiAgICBsZXQgY29sb3JUaXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsJ2NvbG9yVGl0bGUnLCd0aXRsZVRleHRDb250ZW50JywnQ2hvb3NlIGEgY29sb3InKTtcbiAgICBjb2xvckJveC5hcHBlbmRDaGlsZChjb2xvclRpdGxlKTtcbiAgICBcbiAgICAvKkNvbG9yUGlja2VyKi9cbiAgICBsZXQgY29sb3JQaWNrZXIgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ2NvbG9yUGlja2VyJywncHJvamVjdElucHV0JywnJyk7XG4gICAgY29sb3JQaWNrZXIuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG4gICAgY29sb3JQaWNrZXIudHlwZSA9ICdjb2xvcic7XG4gICAgXG4gICAgY29sb3JCb3guYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpO1xuXG5cbiAgICAvKkRhdGUqL1xuICAgIGxldCBkYXRlQm94ID0gY3JlYXRlRE9NQ29udGFpbmVyKCcnLCdkYXRlQ29udGFpbmVyJylcblxuICAgIC8qIENvbG9yIFRpdGxlICovXG4gICAgbGV0IGRhdGVUaXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsJ2RhdGVUaXRsZScsJ3RpdGxlVGV4dENvbnRlbnQnLCdDaG9vc2UgYSBkdWUgZGF0ZScpXG4gICAgZGF0ZUJveC5hcHBlbmRDaGlsZChkYXRlVGl0bGUpXG4gICAgXG4gICAgXG4gICAgLypDb2xvclBpY2tlciovXG4gICAgbGV0IGRhdGVQaWNrZXIgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ2RhdGVQaWNrZXInLCdwcm9qZWN0SW5wdXQnLCcnKTtcbiAgICBkYXRlUGlja2VyLnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcbiAgICBcbiAgICBkYXRlQm94LmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpIDsgIFxuXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JCb3gpO1xuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVCb3gpO1xuXG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudFNpZGUpO1xuXG4gICAgLypQcm9qZWN0IENvbnRhaW5lciAqL1xuICAgIGxldCBhZGRQcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKCcnLCdwcm9qZWN0QWRkQnV0dG9uQ29udGFpbmVyJyk7XG5cbiAgICBsZXQgYWRkQnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnLCdhZGRQcm9qZWN0JywnYWRkUHJvamVjdCcsJ0FkZCBwcm9qZWN0Jyk7XG4gICAgYWRkQnV0dG9uLnR5cGUgPSAnc3VibWl0J1xuXG4gICAgXG4gICAgbWFpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoKT0+e1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoKTtcbiAgICAgICAgbWFpbkRhdGFiYXNlLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKGFkZFByb2plY3RDb250YWluZXIpXG4gICAgbWFpbkZvcm0uYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcbiAgICByZXR1cm4gbWFpbkZvcm1cblxufVxuXG5sZXQgY3JlYXRlUHJvamVjdCA9ICgpID0+IHtcbiAgIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdElucHV0JylcblxuICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICBwcm9qZWN0SW5wdXRbMF0udmFsdWUsXG4gICAgcHJvamVjdElucHV0WzFdLnZhbHVlLFxuICAgIHByb2plY3RJbnB1dFszXS52YWx1ZSxcbiAgICBbXSxcbiAgICBwcm9qZWN0SW5wdXRbMl0udmFsdWVcbiAgIClcblxuICAgIHJldHVybiBwcm9qZWN0XG59XG5cblxuXG5cblxubGV0IGNyZWF0ZVRhc2tTdHJ1Y3R1cmUgPSAoKSA9PiB7XG4gICAgXG4gICAgbGV0IG1haW5Db250YWluZXIgPSBjcmVhdGVET01Db250YWluZXIoXCJcIiwncHJvamVjdENvbnRhaW5lcicpXG5cbiAgICBcbiAgICAvKiBHZXRzIHRoZSB0aXRsZSBpbnB1dCBvZiB0aGUgY29udGFpbmVyKi9cbiAgICBsZXQgdGl0bGVDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ3RpdGxlVGFzaycsJ21vZGFsSW5wdXQnLCcnKVxuICAgIHRpdGxlQ29udGFpbmVyLnBsYWNlaG9sZGVyID0gJ1RoZSB0YXNrcyB0aXRsZS4uLidcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKVxuXG4gICAgLypDb250ZW50IGRlc2NyaXB0aW9uKi9cbiAgICBsZXQgY29udGVudFNpZGUgPSBjcmVhdGVET01Db250YWluZXIoXCJcIiwndGFza0NvbnRlbnRDb250YWluZXInKVxuXG4gICAgLypub3RlcyovXG4gICAgbGV0IG5vdGVzICA9IGNyZWF0ZURvbUVsZW1lbnQoJ2lucHV0Jywnbm90ZUZpbGVkJywnbm90ZScsJycpXG4gICAgbm90ZXMucGxhY2Vob2xkZXIgPSAnU29tZSBub3RlcyBvZiB0aGUgdGFzay4uLidcbiAgICBcbiAgICAvKlByb2plY3QqL1xuICAgIGxldCBwcm9qZWN0RmF0aGVyID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnKVxuXG4gICAgLypSaWdodCBzaWRlIGNvbnRhaW5lciovXG4gICAgbGV0IHJpZ2h0Q29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKFwiXCIsJ3JpZ2h0Q29udGFpbmVyJylcblxuICAgIC8qRGF0ZSovXG4gICAgbGV0IGRhdGVCb3ggPSBjcmVhdGVET01Db250YWluZXIoJycsJ2RhdGVDb250YWluZXInKVxuXG4gICAgLyogRGF0ZSBUaXRsZSAqL1xuICAgIGxldCBkYXRlVGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCdkYXRlVGl0bGUnLCd0aXRsZVRleHRDb250ZW50JywnQ2hvb3NlIGEgZHVlIGRhdGUnKVxuICAgIGRhdGVCb3guYXBwZW5kQ2hpbGQoZGF0ZVRpdGxlKVxuICAgIFxuICAgIC8qRGF0ZVBpY2tlciovXG4gICAgbGV0IGRhdGVQaWNrZXIgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ2RhdGVQaWNrZXInLCdkYXRlSW5wdXQnLCcnKVxuICAgIGRhdGVQaWNrZXIudHlwZSA9ICdkYXRlJ1xuICAgIFxuXG4gICAgZGF0ZUJveC5hcHBlbmRDaGlsZChkYXRlVGl0bGUpICAgXG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQm94KVxuXG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50U2lkZSlcblxuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJcbn1cblxubGV0IHJlYWRQcm9qZWN0ID0gKHByb2plY3QpID0+e1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKGEsJ3Byb2plY3RDb250YWluZXInKVxuXG4gICAgXG4gICAgLyogR2V0cyB0aGUgdGl0bGUgaW5wdXQgb2YgdGhlIGNvbnRhaW5lciovXG4gICAgbGV0IHRpdGxlQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudCgnaW5wdXQnLCd0aXRsZVByb2plY3QnLCdtb2RhbElucHV0JywnJylcbiAgICB0aXRsZUNvbnRhaW5lci5wbGFjZWhvbGRlciA9ICdUaGUgcHJvamVjdHMgdGl0bGUuLi4nXG4gICAgdGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSAgcHJvamVjdC5uYW1lXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcilcblxuICAgIC8qQ29udGVudCBkZXNjcmlwdGlvbiovXG4gICAgbGV0IGNvbnRlbnRTaWRlID0gY3JlYXRlRE9NQ29udGFpbmVyKGEsJ3Byb2plY3RDb250ZW50Q29udGFpbmVyJylcbiAgICBcbiAgICAvKkRlc2NyaXB0aW9uKi9cbiAgICBsZXQgZGVzY3JpcHRpb25Cb3ggPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ2Rlc2NyaXB0aW9uUHJvamVjdCcsJ21vZGFsVGV4dElucHV0JywnJylcbiAgICBkZXNjcmlwdGlvbkJveC5wbGFjZWhvbGRlciA9ICdUaGUgcHJvamVjdCBjb25zaXN0cyBvZiAuLi4uJ1xuICAgIGRlc2NyaXB0aW9uQm94LnR5cGUgPSAndGV4dCdcblxuICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQm94KVxuXG4gICAgLypSaWdodCBzaWRlIGNvbnRhaW5lciovXG4gICAgbGV0IHJpZ2h0Q29udGFpbmVyID0gY3JlYXRlRE9NQ29udGFpbmVyKGEsJ3JpZ2h0Q29udGFpbmVyJylcblxuICAgIC8qQ29sb3IqL1xuICAgIGxldCBjb2xvckJveCA9IGNyZWF0ZURPTUNvbnRhaW5lcihhLCdjb2xvckNvbnRhaW5lcicpXG5cbiAgICAvKiBDb2xvciBUaXRsZSAqL1xuICAgIGxldCBjb2xvclRpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywnY29sb3JUaXRsZScsJ3RpdGxlVGV4dENvbnRlbnQnLCdDaG9vc2UgYSBjb2xvcicpXG4gICAgY29sb3JCb3guYXBwZW5kQ2hpbGQoY29sb3JUaXRsZSlcbiAgICBcbiAgICAvKkNvbG9yUGlja2VyKi9cbiAgICBsZXQgY29sb3JQaWNrZXIgPSBjcmVhdGVEb21FbGVtZW50KCdpbnB1dCcsJ2NvbG9yUGlja2VyJywnY29sb3JJbnB1dCcsJycpXG4gICAgY29sb3JQaWNrZXIudHlwZSA9ICdjb2xvcidcbiAgICBcbiAgICBjb2xvckJveC5hcHBlbmRDaGlsZChjb2xvclBpY2tlcilcblxuXG4gICAgLypEYXRlKi9cbiAgICBsZXQgZGF0ZUJveCA9IGNyZWF0ZURPTUNvbnRhaW5lcihkYXRlLCdkYXRlQ29udGFpbmVyJylcblxuICAgIC8qIENvbG9yIFRpdGxlICovXG4gICAgbGV0IGRhdGVUaXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsJ2RhdGVUaXRsZScsJ3RpdGxlVGV4dENvbnRlbnQnLCdDaG9vc2UgYSBkYXRlJylcbiAgICBkYXRlQm94LmFwcGVuZENoaWxkKGRhdGVUaXRsZSlcbiAgICBcbiAgICAvKkNvbG9yUGlja2VyKi9cbiAgICBsZXQgZGF0ZVBpY2tlciA9IGNyZWF0ZURvbUVsZW1lbnQoJ2lucHV0JywnZGF0ZVBpY2tlcicsJ2RhdGVJbnB1dCcsJycpXG4gICAgZGF0ZVBpY2tlci50eXBlID0gJ2RhdGUnXG4gICAgXG4gICAgZGF0ZUJveC5hcHBlbmRDaGlsZChkYXRlVGl0bGUpICAgXG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvckJveClcbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQm94KVxuXG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRDb250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50U2lkZSlcblxuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJcbn1cblxuZXhwb3J0e1xuICAgIGNyZWF0ZVRhc2tPcHRpb25cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2xvYWRQYWdlU3R1Y3R1cmV9IGZyb20gJy4vaG9tZSdcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sb2FkUGFnZVN0dWN0dXJlKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=