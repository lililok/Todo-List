/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    width: 100%;\n    height: 100vh;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 20% 80%;\n}\n\n/* sidebar */\n\n.sidebar {\n    background-color: #16a34a;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 0.3fr 2fr 0.3fr;\n    padding: 10px;\n    gap: 5px;\n}\n\n.logo {\n    padding: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 5px;\n}\n\n.logo-img {\n    width: 30px;\n}\n\n.project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    background-color: #14532d;\n    padding: 5px;\n}\n\n.project {\n    display: grid;\n    grid-template-columns: 1fr 0.1fr 0.1fr;\n    gap: 3px;\n    padding: 5px;\n    background-color: #15803d;\n    border-radius: 5px;\n}\n\n.project.active, body > div > div.sidebar > div.project-list > div.project.active > img.update-btn.project, body > div > div.sidebar > div.project-list > div.project.active > img.delete-btn.project{\n    background-color: #86efac;\n}\n\n.project:hover {\n    box-shadow: -2px 2px #f0fdf4;\n}\n\n.update-btn.project:hover, \n.delete-btn.project:hover {\n    box-shadow: none;\n}\n\n.add-project {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-self: center;\n    padding: 10px;\n    gap: 5px;\n    background-color: #15803d;\n    border-radius: 5px;\n}\n\n.project:first-child {\n    padding: 10px;\n    font-weight: bold;\n}\n\n\n/* content */\n\n.content {\n    background-color: #facc15;\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 0.3fr 3fr;\n    gap: 5px;\n}\n\n.add-task {\n    background-color: #fde047;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-self: center;\n    padding: 10px;\n    gap: 5px;\n    border-radius: 5px;\n}\n\n.completed .task-text {\n    text-decoration: line-through;\n    color: rgb(138, 124, 54);\n}\n\n.task {\n    background-color: #fde047;\n    display: grid;\n    grid-template-columns: 0.2fr 2fr 0.5fr 0.3fr 0.07fr 0.07fr;\n    align-items: center;\n    gap: 5px;\n    padding: 5px;\n    margin-bottom: 5px;\n    border-radius: 5px;\n}\n\n.task-list {\n    background-color: #eab308;\n    padding: 5px;\n}\n\n.status-checkbox {\n    width: 25px;\n    height: 25px;\n    justify-self: center;\n}\n\n.project-name {\n    align-self: center;\n}\n\n#task-date-text {\n    text-align: center;\n}\n\n/* dialogs */\n\ndialog {\n    display: flex;\n    align-self: center;\n    justify-self: center;\n    border: none;\n}\n\nform {\n    display: flex;\n    align-self: center;\n    justify-self: center;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#project-dialog {\n    background-color: rgb(64, 137, 90);\n    border-radius: 5px;\n}\n\n#task-dialog {\n    background-color: rgb(205, 176, 63);\n    border-radius: 5px;\n}\n\n#task-form {\n    gap: 5px;\n}\n\ninput#project-name {\n    margin-right: 5px;\n    background-color: rgb(61, 110, 80);\n    padding: 5px;\n    border: none;\n    border-radius: 5px;\n}\n\nlabel[for=\"project-name\"] {\n    font-size: 1.5em;\n    margin-bottom: 10px;\n}\n\nform#task-form > input, select {\n    background-color: rgb(227, 204, 83);\n    padding: 5px;\n    border: none;\n    border-radius: 5px;\n}\n\nform#task-form *:focus, *::selection {\n    background-color: rgb(248, 232, 116);\n}\n\n::placeholder {\n    color: black;\n}\n\n/* buttons */\n\n.update-btn, .delete-btn {\n    width: 20px;\n    padding: 0;\n}\n\n.open-btn {\n    border-radius: 50%;\n    padding: 10px 20px;\n    font-size: 2em;\n    cursor: pointer;\n    border: none;\n}\n\n.open-btn#projects {\n    background-color: #14532d;\n}\n\n.open-btn#tasks {\n    background-color: #fef08a;\n    border: 1px solid rgb(181, 152, 64);\n}\n\n.close-button#project {\n    margin-right: 5px;\n}\n\nbutton#project {\n    border: none;\n    padding: 5px;\n    border-radius: 5px;\n    background-color: #14532d;\n}\n\nbutton#project:hover {\n    background-color: rgb(106, 243, 155);\n}\n\nbutton#task {\n    border: none;\n    padding: 5px;\n    border-radius: 5px;\n    background-color: rgb(181, 152, 64);\n}\n\nbutton#task:hover {\n    background-color: rgb(248, 232, 116);;\n}\n\n.close-button#task {\n    position: relative;\n    width: 30px;\n    right: -160px;\n}\n\n.submit-button#task {\n    width: 50px;\n    align-self: center;\n    margin-top: 10px;\n}\n\n/* priorities */\n\n#task-priority-high {\n    background-color: red;\n    border: 3px solid rgb(248, 232, 116);\n}\n\n#task-priority-medium {\n    background-color: orange;\n    border: 3px solid rgb(248, 232, 116);\n}\n\n#task-priority-low {\n    background-color: green;\n    border: 3px solid rgb(248, 232, 116);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _js_forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/forms.js */ \"./src/js/forms.js\");\n/* harmony import */ var _js_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/render.js */ \"./src/js/render.js\");\n/* harmony import */ var _js_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/storage.js */ \"./src/js/storage.js\");\n/* harmony import */ var _js_classes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/classes.js */ \"./src/js/classes.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    createDefaultProject();\n    (0,_js_render_js__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();\n    (0,_js_render_js__WEBPACK_IMPORTED_MODULE_2__.renderLogo)();\n});\n\nfunction createDefaultProject() {\n    const defaultProject = new _js_classes_js__WEBPACK_IMPORTED_MODULE_4__.Project (\"Default\", true);\n    let projects = JSON.parse(localStorage.getItem('projects')) || [];\n    (0,_js_storage_js__WEBPACK_IMPORTED_MODULE_3__.setActiveProject)(0);\n    \n    const defaultExist = projects.some(project => project.title === \"Default\");\n\n    if (!defaultExist) {\n        projects.unshift(defaultProject);\n        localStorage.setItem('projects', JSON.stringify(projects));\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/js/classes.js":
/*!***************************!*\
  !*** ./src/js/classes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, date, priority='Low', status=false) {\n        this.title = title;\n        this.description = description;\n        this.priority = priority;\n        this.date = date;\n        this.status = status;\n    }\n\n    statusSwitch () {\n        this.status = !this.status;\n    }\n}\n\nclass Project {\n    constructor(title, system=false) {\n        this.title = title;\n        this.tasks = [];\n        this.system = system;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/classes.js?");

/***/ }),

/***/ "./src/js/forms.js":
/*!*************************!*\
  !*** ./src/js/forms.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectForm: () => (/* binding */ projectForm),\n/* harmony export */   taskForm: () => (/* binding */ taskForm)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/js/storage.js\");\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ \"./src/js/classes.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./src/js/render.js\");\n\n\n\n\nvar openBtnProjects = document.querySelector(\"#projects\");\nvar openBtnTasks = document.querySelector(\"#tasks\");\nvar projectFormContainer = document.querySelector(\".project-form-container\");\nvar taskFormContainer = document.querySelector(\".task-form-container\");\n\nopenBtnProjects.addEventListener(\"click\", function() {\n    const form = projectForm();\n\n    form.addEventListener(\"submit\", function(event) {\n        event.preventDefault();\n\n        var projectName = document.getElementById(\"project-name\").value;\n\n        const projectClass = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveProject)(projectClass);\n\n        const projects = JSON.parse(localStorage.getItem('projects')) || [];\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(projects.length - 1);\n\n        form.reset();\n        projectFormContainer.innerHTML = '';\n        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();\n    });\n});\n\nopenBtnTasks.addEventListener(\"click\", function() {\n    const form = taskForm();\n\n    form.addEventListener(\"submit\", function(event) {\n        event.preventDefault();\n\n        var taskName = document.getElementById(\"task-name\").value;\n        var taskDescription = document.getElementById(\"task-description\").value;\n        var taskPriority = document.getElementById(\"task-priority\").value;\n        var taskDate = document.getElementById(\"task-date\").value;\n\n        const taskClass = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Task(taskName, taskDescription, taskDate, taskPriority);\n        const activeProjectIndex = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getActiveProjectIndex)();\n        let projects = JSON.parse(localStorage.getItem('projects')) || [];\n        const activeProject = projects[activeProjectIndex];\n        activeProject.tasks.push(taskClass);\n        localStorage.setItem('projects', JSON.stringify(projects));\n        form.reset();\n        taskFormContainer.innerHTML = '';\n        (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();\n    });\n});\n\nfunction taskForm(title = '', description = '', priority = 'Low', date = '') {\n    taskFormContainer.innerHTML = '';\n\n    var dialog = document.createElement(\"dialog\");\n    dialog.id = \"task-dialog\";\n\n    var form = document.createElement(\"form\");\n    form.id = \"task-form\";\n\n    var closeButton = document.createElement(\"button\");\n    closeButton.className = 'close-button';\n    closeButton.id = \"task\";\n    closeButton.textContent = \"⨯\";\n\n    closeButton.addEventListener('click', (event) => {\n        event.preventDefault();\n        form.reset();\n        dialog.close();\n        taskFormContainer.removeChild(dialog);\n    });\n    \n    var labelName = document.createElement(\"label\");\n    labelName.setAttribute(\"for\", \"task-name\");\n    labelName.textContent = \"Task info:\";\n    \n    var inputName = document.createElement(\"input\");\n    inputName.type = \"text\";\n    inputName.id = \"task-name\";\n    inputName.name = \"task-name\";\n    inputName.placeholder = \"Title\";\n    inputName.required = true;\n    inputName.value = title;\n    inputName.setAttribute('maxlength', '60');\n    \n    var inputDescription = document.createElement(\"input\");\n    inputDescription.type = \"text\";\n    inputDescription.id = \"task-description\";\n    inputDescription.name = \"task-description\";\n    inputDescription.placeholder = \"Description (optional)\";\n    inputDescription.value = description;\n    inputDescription.setAttribute('maxlength', '90');\n\n    var labelPriority = document.createElement(\"label\");\n    labelPriority.setAttribute(\"for\", \"task-priority\");\n    labelPriority.textContent = \"Priority:\";\n    \n    var selectPriority = document.createElement(\"select\");\n    selectPriority.id = \"task-priority\";\n    selectPriority.name = \"task-priority\";\n    \n\n    var option1 = document.createElement(\"option\");\n    option1.value = \"Low\";\n    option1.textContent = \"Low\";\n    selectPriority.appendChild(option1);\n\n    var option2 = document.createElement(\"option\");\n    option2.value = \"Medium\";\n    option2.textContent = \"Medium\";\n    selectPriority.appendChild(option2);\n\n    var option3 = document.createElement(\"option\");\n    option3.value = \"High\";\n    option3.textContent = \"High\";\n    selectPriority.appendChild(option3);\n\n    selectPriority.value = priority;\n\n    var labelDate = document.createElement(\"label\");\n    labelDate.setAttribute(\"for\", \"task-date\");\n    labelDate.textContent = \"Due date:\";\n\n    var inputDate = document.createElement(\"input\");\n    inputDate.type = \"date\";\n    inputDate.id = \"task-date\";\n    inputDate.name = \"task-date\";\n    inputDate.required = true;\n    inputDate.value = date;\n\n    var submitButton = document.createElement(\"button\");\n    submitButton.className = 'submit-button';\n    submitButton.id = \"task\";\n    submitButton.type = \"submit\";\n    submitButton.textContent = \"submit\";\n    \n    form.appendChild(closeButton);\n\n    form.appendChild(labelName);\n    form.appendChild(inputName);\n    form.appendChild(inputDescription);\n\n    form.appendChild(labelPriority);\n    form.appendChild(selectPriority);\n\n    form.appendChild(labelDate);\n    form.appendChild(inputDate);\n\n    form.appendChild(submitButton);\n\n    dialog.appendChild(form);\n    \n    taskFormContainer.appendChild(dialog);\n\n    dialog.showModal();\n\n    return form;\n}\n\nfunction projectForm(title = '') {\n    projectFormContainer.innerHTML = '';\n\n    var dialog = document.createElement(\"dialog\");\n    dialog.id = \"project-dialog\";\n\n    var form = document.createElement(\"form\");\n    form.id = \"project-form\";\n    \n    var label = document.createElement(\"label\");\n    label.setAttribute(\"for\", \"project-name\");\n    label.textContent = \"Project title:\";\n\n    const inputProject = document.createElement('div');\n    inputProject.className = 'input-project';\n    \n    var input = document.createElement(\"input\");\n    input.type = \"text\";\n    input.id = \"project-name\";\n    input.name = \"project-name\";\n    input.required = true;\n    input.value = title;\n    input.setAttribute('maxlength', '30');\n\n    var submitButton = document.createElement(\"button\");\n    submitButton.type = \"submit\";\n    submitButton.className = 'submit-button';\n    submitButton.id = \"project\";\n    submitButton.textContent = \"ok\";\n\n    var closeButton = document.createElement(\"button\");\n    closeButton.className = 'close-button';\n    closeButton.id = \"project\";\n    closeButton.textContent = \"cancel\";\n\n    closeButton.addEventListener('click', (event) => {\n        event.preventDefault();\n        form.reset();\n        projectFormContainer.innerHTML = '';\n    });\n    \n    form.appendChild(label);\n    inputProject.appendChild(input);\n    inputProject.appendChild(closeButton);\n    inputProject.appendChild(submitButton);\n    form.appendChild(inputProject);\n\n    dialog.appendChild(form);\n    \n    projectFormContainer.appendChild(dialog);\n\n    dialog.showModal();\n\n    return form;\n}\n\n//# sourceURL=webpack://todo-list/./src/js/forms.js?");

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogo: () => (/* binding */ renderLogo),\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/js/storage.js\");\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ \"./src/js/classes.js\");\n/* harmony import */ var _images_updateIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/updateIcon.svg */ \"./src/images/updateIcon.svg\");\n/* harmony import */ var _images_deleteIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/deleteIcon.svg */ \"./src/images/deleteIcon.svg\");\n/* harmony import */ var _images_pineIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pineIcon.svg */ \"./src/images/pineIcon.svg\");\n\n\n\n\n\n\n\nfunction renderProjects() {\n    const projectList = document.querySelector('.project-list')\n    const taskList = document.querySelector('.task-list');\n\n    projectList.innerHTML = \"\";\n    taskList.innerHTML = \"\";\n\n    const activeProjectIndex = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getActiveProjectIndex)();\n    let projects = JSON.parse(localStorage.getItem('projects')) || [];\n    const activeProject = projects[activeProjectIndex];\n\n    projects.forEach((project, index) => {\n        const projectDiv = document.createElement('div');\n        projectDiv.className = 'project';\n        projectDiv.innerHTML = `<p>${project.title}</p>`;\n\n        if (!project.system) {\n            const updateButton = document.createElement('img');\n            updateButton.className = 'update-btn project';\n            updateButton.src = _images_updateIcon_svg__WEBPACK_IMPORTED_MODULE_2__;\n            projectDiv.appendChild(updateButton);\n\n            const deleteButton = document.createElement('img');\n            deleteButton.className = 'delete-btn project';\n            deleteButton.src = _images_deleteIcon_svg__WEBPACK_IMPORTED_MODULE_3__;\n            projectDiv.appendChild(deleteButton);\n\n            projectDiv.querySelector('.delete-btn.project').addEventListener('click', (e) => {\n                e.stopPropagation();\n                (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(index);\n                (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(0);\n                renderProjects();\n            });\n    \n            projectDiv.querySelector('.update-btn.project').addEventListener('click', (e) => {\n                e.stopPropagation();\n                (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.updateProject)(index);\n                renderProjects();\n            });\n        }\n\n        projectDiv.classList.add('project');\n        if (index === activeProjectIndex) {\n            projectDiv.classList.add('active');\n\n            const activeProjectHeader = document.querySelector('.project-name');\n            activeProjectHeader.innerHTML = project.title;\n        }\n\n        projectDiv.addEventListener('click', () => {\n            (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(index);\n            renderProjects();\n        });\n\n        projectList.appendChild(projectDiv);\n    });\n    if (activeProject) {\n        activeProject.tasks.forEach((task, taskIndex) => {\n            const taskDiv = document.createElement('div');\n            taskDiv.className = 'task';\n            const currentTask = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Task(task.title, task.description, task.date, task.priority, task.status);\n    \n            if (currentTask.status) {\n                taskDiv.classList.add('completed');\n            }\n            taskDiv.innerHTML = `\n                <input type=\"checkbox\" class=\"status-checkbox\" ${currentTask.status ? 'checked' : ''}>\n                <div class=\"task-text\">\n                    <p id=\"task-title-text\">${currentTask.title}</p>\n                    <p id=\"task-description-text\">${currentTask.description}</p>\n                </div>\n                <div id=\"task-priority-${currentTask.priority.toLowerCase()}\">&nbsp;</div>\n                <p id=\"task-date-text\">${currentTask.date.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$2/$3/$1')}</p>\n            `;\n\n            const updateButton = document.createElement('img');\n            updateButton.className = 'update-btn task';\n            updateButton.src = _images_updateIcon_svg__WEBPACK_IMPORTED_MODULE_2__;\n            taskDiv.appendChild(updateButton);\n\n            const deleteButton = document.createElement('img');\n            deleteButton.className = 'delete-btn task';\n            deleteButton.src = _images_deleteIcon_svg__WEBPACK_IMPORTED_MODULE_3__;\n            taskDiv.appendChild(deleteButton);\n    \n            taskDiv.querySelector('.delete-btn.task').addEventListener('click', (e) => {\n                e.stopPropagation();\n                (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(activeProjectIndex, taskIndex);\n                renderProjects();\n            });\n    \n            taskDiv.querySelector('.update-btn.task').addEventListener('click', (e) => {\n                e.stopPropagation();\n                (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.updateTask)(activeProjectIndex, taskIndex);\n                renderProjects();\n            });\n    \n            taskDiv.querySelector('.status-checkbox').addEventListener('click', (e) => {\n                e.stopPropagation();\n                currentTask.statusSwitch();\n                activeProject.tasks[taskIndex] = currentTask; \n                localStorage.setItem('projects', JSON.stringify(projects));\n                renderProjects();\n            });\n    \n            taskList.appendChild(taskDiv);\n        });\n    }\n};\n\nfunction renderLogo() {\n    const logoDiv = document.querySelector('.logo')\n    const logoImg = document.createElement('img');\n    logoImg.className = 'logo-img';\n    logoImg.src = _images_pineIcon_svg__WEBPACK_IMPORTED_MODULE_4__;\n    logoDiv.appendChild(logoImg);\n\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/js/render.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   getActiveProjectIndex: () => (/* binding */ getActiveProjectIndex),\n/* harmony export */   saveProject: () => (/* binding */ saveProject),\n/* harmony export */   setActiveProject: () => (/* binding */ setActiveProject),\n/* harmony export */   updateProject: () => (/* binding */ updateProject),\n/* harmony export */   updateTask: () => (/* binding */ updateTask)\n/* harmony export */ });\n/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.js */ \"./src/js/forms.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/js/render.js\");\n\n\n\nfunction saveProject(projectClass) {\n    var projects = JSON.parse(localStorage.getItem('projects')) || [];\n\n    projects.push({\n        title: projectClass.title,\n        tasks: projectClass.tasks\n    });\n\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\n\nfunction setActiveProject(index) {\n    localStorage.setItem('activeProjectIdx', index);\n}\n\nfunction getActiveProjectIndex() {\n    return parseInt(localStorage.getItem('activeProjectIdx'), 10);\n}\n\nfunction deleteProject(index) {\n    let projects = JSON.parse(localStorage.getItem('projects')) || [];\n    projects.splice(index, 1);\n    localStorage.setItem('projects', JSON.stringify(projects));\n    if (localStorage.getItem('activeProject') == index) {\n        localStorage.removeItem('activeProject');\n    }\n}\n\nfunction deleteTask(projectIndex, taskIndex) {\n    let projects = JSON.parse(localStorage.getItem('projects')) || [];\n    projects[projectIndex].tasks.splice(taskIndex, 1);\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\n\nfunction updateProject(index) {\n    const projects = JSON.parse(localStorage.getItem('projects')) || [];\n    const project = projects[index];\n    const form = (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.projectForm)(project.title);\n    var projectFormContainer = document.querySelector(\".project-form-container\");\n\n    form.addEventListener(\"submit\", function(event) {\n        event.preventDefault();\n\n        project.title = document.getElementById(\"project-name\").value;\n        localStorage.setItem('projects', JSON.stringify(projects));\n\n        form.reset();\n        projectFormContainer.innerHTML = ''; \n        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();\n    });\n}\n\nfunction updateTask(projectIndex, taskIndex) {\n    const projects = JSON.parse(localStorage.getItem('projects')) || [];\n    const task = projects[projectIndex].tasks[taskIndex];\n    const form = (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.taskForm)(task.title, task.description, task.priority, task.date);\n    var taskFormContainer = document.querySelector(\".task-form-container\");\n\n    form.addEventListener(\"submit\", function(event) {\n        event.preventDefault();\n\n        task.title = document.getElementById(\"task-name\").value;\n        task.description = document.getElementById(\"task-description\").value;\n        task.priority = document.getElementById(\"task-priority\").value;\n        task.date = document.getElementById(\"task-date\").value;\n\n        localStorage.setItem('projects', JSON.stringify(projects));\n\n        form.reset();\n        taskFormContainer.innerHTML = ''; \n        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();\n    });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/js/storage.js?");

/***/ }),

/***/ "./src/images/deleteIcon.svg":
/*!***********************************!*\
  !*** ./src/images/deleteIcon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2ba0fde71fa5c1053eb7.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/deleteIcon.svg?");

/***/ }),

/***/ "./src/images/pineIcon.svg":
/*!*********************************!*\
  !*** ./src/images/pineIcon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"efdf7acb4ad7a126cca5.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/pineIcon.svg?");

/***/ }),

/***/ "./src/images/updateIcon.svg":
/*!***********************************!*\
  !*** ./src/images/updateIcon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea43a833ce02cdbbd096.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/updateIcon.svg?");

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;