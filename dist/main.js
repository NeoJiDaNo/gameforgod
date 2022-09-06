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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_heroAbilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/heroAbilities */ \"./src/modules/heroAbilities.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n\r\n\r\n\r\n(0,_modules_heroAbilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\n\n//# sourceURL=webpack://layout/./src/index.js?");

/***/ }),

/***/ "./src/modules/heroAbilities.js":
/*!**************************************!*\
  !*** ./src/modules/heroAbilities.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\nconst heroA = () => {\r\n\r\n    const hero = document.querySelector('#hero')\r\n    let posX = 0\r\n    let posY = 0\r\n\r\n    window.onkeydown = (e) => {\r\n        if (e.keyCode == 37) {\r\n            // влево\r\n            (0,_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(posX, posY)\r\n            posX = posX - 5\r\n            hero.style.left = posX + 'px'\r\n        } else if (e.keyCode == 38) {\r\n            // вверх\r\n            (0,_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(posX, posY)\r\n            posY = posY - 5\r\n            hero.style.top = posY + 'px'\r\n        } else if (e.keyCode == 39) {\r\n            // вправо\r\n            (0,_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(posX, posY)\r\n            posX = posX + 5\r\n            hero.style.left = posX + 'px'\r\n        } else if (e.keyCode == 40) {\r\n            // вниз\r\n            (0,_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(posX, posY)\r\n            posY = posY + 5\r\n            hero.style.top = posY + 'px'\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heroA);\n\n//# sourceURL=webpack://layout/./src/modules/heroAbilities.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import heroA from './heroAbilities'\r\nconst render = (posX, posY) => {\r\n\r\nconst hero = document.querySelector('#hero')\r\n\r\n    if (posX < 0) {\r\n        hero.style.left = 700 + 'px'\r\n        posX = 700\r\n    } else if (posX > 700) {\r\n        hero.style.left = 0 + 'px'\r\n        posX = 0\r\n    } else if (posY < 0) {\r\n        hero.style.top = 700 + 'px'\r\n        posY = 700\r\n    } else if (posY > 700) {\r\n        hero.style.top = 0 + 'px'\r\n        posY = 0\r\n    }\r\n\r\n    // heroA(posX, posY)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://layout/./src/modules/render.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;