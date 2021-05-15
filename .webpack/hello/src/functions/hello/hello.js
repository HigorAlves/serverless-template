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

/***/ "./src/functions/hello/hello.ts":
/*!**************************************!*\
  !*** ./src/functions/hello/hello.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hello\": () => (/* binding */ hello)\n/* harmony export */ });\nclass Handler {\n    async main(event) {\n        console.log(event.body);\n        return {\n            statusCode: 200,\n            body: 'Its all OK'\n        };\n    }\n}\nconst handler = new Handler();\nconst hello = handler.main.bind(handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2hlbGxvLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy13aXRoLXR5cGVzY3JpcHQvLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2hlbGxvLnRzPzQzNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QVBJR2F0ZXdheUV2ZW50RGVmYXVsdEF1dGhvcml6ZXJDb250ZXh0LFxuXHRBUElHYXRld2F5UHJveHlFdmVudEJhc2UsXG5cdEFQSUdhdGV3YXlQcm94eUhhbmRsZXJcbn0gZnJvbSAnYXdzLWxhbWJkYSdcblxudHlwZSBJRXZlbnQgPSBBUElHYXRld2F5UHJveHlFdmVudEJhc2U8QVBJR2F0ZXdheUV2ZW50RGVmYXVsdEF1dGhvcml6ZXJDb250ZXh0PlxuXG5jbGFzcyBIYW5kbGVyIHtcblx0YXN5bmMgbWFpbihldmVudDogSUV2ZW50KTogUHJvbWlzZTxJUmVzcG9uc2U+IHtcblx0XHRjb25zb2xlLmxvZyhldmVudC5ib2R5KVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXR1c0NvZGU6IDIwMCxcblx0XHRcdGJvZHk6ICdJdHMgYWxsIE9LJ1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBoYW5kbGVyID0gbmV3IEhhbmRsZXIoKVxuZXhwb3J0IGNvbnN0IGhlbGxvOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gaGFuZGxlci5tYWluLmJpbmQoaGFuZGxlcilcbiJdLCJtYXBwaW5ncyI6Ijs7OztBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/hello/hello.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/functions/hello/hello.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;