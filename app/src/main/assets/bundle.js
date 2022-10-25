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

/***/ "./src/web-common.ts":
/*!***************************!*\
  !*** ./src/web-common.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\nfunction content(onClickFun) {\n    const element = document.createElement('div');\n    const btn = document.createElement('button');\n    btn.innerHTML = 'Click me!';\n    btn.onclick = onClickFun;\n    element.appendChild(btn);\n    return element;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2ViLWNvbW1vbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBUyxPQUFPLENBQUMsVUFBZ0I7SUFDcEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFekIsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JsdWVzaGVsbC10ZXN0Ly4vc3JjL3dlYi1jb21tb24udHM/YzkyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udGVudChvbkNsaWNrRnVuIDogYW55KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUhJztcbiAgICBidG4ub25jbGljayA9IG9uQ2xpY2tGdW47XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/web-common.ts\n");

/***/ }),

/***/ "./src/webworker-web.ts":
/*!******************************!*\
  !*** ./src/webworker-web.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _web_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-common */ \"./src/web-common.ts\");\n\nif (window.Worker) {\n    const myWorker = new Worker('worker-bundle.js');\n    document.body.appendChild(_web_common__WEBPACK_IMPORTED_MODULE_0__.content(btnOnClick));\n    myWorker.onmessage = (e) => {\n        document.body.append(e.data[1].desc + ': ' + e.data[0].value + \" \" + e.data[0].alarm);\n        document.body.append(document.createElement('br'));\n    };\n    function btnOnClick() {\n        myWorker.postMessage([Math.random()]);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2Vid29ya2VyLXdlYi50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUEyQztBQUUzQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDZixNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRWhELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdEQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFMUQsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFNBQVMsVUFBVTtRQUNmLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibHVlc2hlbGwtdGVzdC8uL3NyYy93ZWJ3b3JrZXItd2ViLnRzP2UxZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2ViX2NvbW1vbiBmcm9tICcuL3dlYi1jb21tb24nO1xuXG5pZiAod2luZG93Lldvcmtlcikge1xuICAgIGNvbnN0IG15V29ya2VyID0gbmV3IFdvcmtlcignd29ya2VyLWJ1bmRsZS5qcycpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3ZWJfY29tbW9uLmNvbnRlbnQoYnRuT25DbGljaykpO1xuXG4gICAgbXlXb3JrZXIub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZS5kYXRhWzFdLmRlc2MgKyAnOiAnICsgZS5kYXRhWzBdLnZhbHVlICsgXCIgXCIgKyBlLmRhdGFbMF0uYWxhcm0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidG5PbkNsaWNrKCkge1xuICAgICAgICBteVdvcmtlci5wb3N0TWVzc2FnZShbTWF0aC5yYW5kb20oKV0pXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/webworker-web.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/webworker-web.ts");
/******/ 	
/******/ })()
;