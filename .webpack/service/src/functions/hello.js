/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/settings.ts":
/*!****************************!*\
  !*** ./config/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"settings\": () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var env_var__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! env-var */ \"env-var\");\n/* harmony import */ var env_var__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(env_var__WEBPACK_IMPORTED_MODULE_0__);\n\nconst settings = {\n    NODE_ENV: env_var__WEBPACK_IMPORTED_MODULE_0__.get('NODE_ENV').required().asString(),\n    AWS_NODEJS_CONNECTION_REUSE_ENABLED: env_var__WEBPACK_IMPORTED_MODULE_0__.get('AWS_NODEJS_CONNECTION_REUSE_ENABLED')\n        .required()\n        .asInt()\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvc2V0dGluZ3MudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLXdpdGgtdHlwZXNjcmlwdC8uL2NvbmZpZy9zZXR0aW5ncy50cz81YjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVudiBmcm9tICdlbnYtdmFyJ1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdE5PREVfRU5WOiBlbnYuZ2V0KCdOT0RFX0VOVicpLnJlcXVpcmVkKCkuYXNTdHJpbmcoKSxcblx0QVdTX05PREVKU19DT05ORUNUSU9OX1JFVVNFX0VOQUJMRUQ6IGVudlxuXHRcdC5nZXQoJ0FXU19OT0RFSlNfQ09OTkVDVElPTl9SRVVTRV9FTkFCTEVEJylcblx0XHQucmVxdWlyZWQoKVxuXHRcdC5hc0ludCgpXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBLGlGQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/settings.ts\n");

/***/ }),

/***/ "./src/functions/hello.ts":
/*!********************************!*\
  !*** ./src/functions/hello.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hello\": () => (/* binding */ hello)\n/* harmony export */ });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @settings */ \"./config/settings.ts\");\n\nfunction hello() {\n    console.log(process.env, _settings__WEBPACK_IMPORTED_MODULE_0__.settings);\n    return {\n        statusCode: 200,\n        body: 'Its all right'\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy13aXRoLXR5cGVzY3JpcHQvLi9zcmMvZnVuY3Rpb25zL2hlbGxvLnRzP2I0YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dGluZ3MgfSBmcm9tICdAc2V0dGluZ3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBoZWxsbygpOiBJUmVzcG9uc2Uge1xuXHRjb25zb2xlLmxvZyhwcm9jZXNzLmVudiwgc2V0dGluZ3MpXG5cblx0cmV0dXJuIHtcblx0XHRzdGF0dXNDb2RlOiAyMDAsXG5cdFx0Ym9keTogJ0l0cyBhbGwgcmlnaHQnXG5cdH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/hello.ts\n");

/***/ }),

/***/ "env-var":
/*!**************************!*\
  !*** external "env-var" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("env-var");;

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/hello.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;