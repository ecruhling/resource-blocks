/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("/**\n * frontend.js (Common JS to ALL Blocks)\n */\njQuery(document).ready(function ($) {\n\n\t$('.wp-block-resource-blocks-hero-carousel').each(function () {\n\n\t\tvar $carousel = $(this);\n\n\t\t$carousel.slick({\n\t\t\tlazyLoad: 'ondemand',\n\t\t\tcssEase: 'ease',\n\t\t\tadaptiveHeight: false,\n\t\t\tcenterMode: false,\n\t\t\tpauseOnHover: false,\n\t\t\tautoplay: $carousel.data('autoplay'),\n\t\t\tautoplaySpeed: $carousel.data('autoplayspeed'),\n\t\t\tarrows: $carousel.data('arrows'),\n\t\t\tdots: $carousel.data('dots'),\n\t\t\tfade: $carousel.data('effect') === 'fade',\n\t\t\tspeed: $carousel.data('speed')\n\t\t});\n\t});\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC5qcz83ZjJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogZnJvbnRlbmQuanMgKENvbW1vbiBKUyB0byBBTEwgQmxvY2tzKVxuICovXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cblx0JCgnLndwLWJsb2NrLXJlc291cmNlLWJsb2Nrcy1oZXJvLWNhcm91c2VsJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgJGNhcm91c2VsID0gJCh0aGlzKTtcblxuXHRcdCRjYXJvdXNlbC5zbGljayh7XG5cdFx0XHRsYXp5TG9hZDogJ29uZGVtYW5kJyxcblx0XHRcdGNzc0Vhc2U6ICdlYXNlJyxcblx0XHRcdGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcblx0XHRcdGNlbnRlck1vZGU6IGZhbHNlLFxuXHRcdFx0cGF1c2VPbkhvdmVyOiBmYWxzZSxcblx0XHRcdGF1dG9wbGF5OiAkY2Fyb3VzZWwuZGF0YSgnYXV0b3BsYXknKSxcblx0XHRcdGF1dG9wbGF5U3BlZWQ6ICRjYXJvdXNlbC5kYXRhKCdhdXRvcGxheXNwZWVkJyksXG5cdFx0XHRhcnJvd3M6ICRjYXJvdXNlbC5kYXRhKCdhcnJvd3MnKSxcblx0XHRcdGRvdHM6ICRjYXJvdXNlbC5kYXRhKCdkb3RzJyksXG5cdFx0XHRmYWRlOiAkY2Fyb3VzZWwuZGF0YSgnZWZmZWN0JykgPT09ICdmYWRlJyxcblx0XHRcdHNwZWVkOiAkY2Fyb3VzZWwuZGF0YSgnc3BlZWQnKVxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zyb250ZW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ })

/******/ });