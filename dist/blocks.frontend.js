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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("/**\n * frontend.js (Common JS to ALL Blocks)\n */\njQuery(document).ready(function ($) {\n\n\t$('.wp-block-resource-blocks-hero-carousel').each(function () {\n\n\t\tvar $carousel = $(this);\n\n\t\t$carousel.slick({\n\t\t\tlazyLoad: 'ondemand',\n\t\t\tcssEase: 'ease',\n\t\t\tadaptiveHeight: false,\n\t\t\tcenterMode: false,\n\t\t\tpauseOnHover: false,\n\t\t\tautoplay: $carousel.data('autoplay'),\n\t\t\tautoplaySpeed: $carousel.data('autoplayspeed'),\n\t\t\tarrows: $carousel.data('arrows'),\n\t\t\tdots: $carousel.data('dots'),\n\t\t\tfade: $carousel.data('effect') === 'fade',\n\t\t\tspeed: $carousel.data('speed')\n\t\t});\n\t});\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQuanM/N2YyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGZyb250ZW5kLmpzIChDb21tb24gSlMgdG8gQUxMIEJsb2NrcylcbiAqL1xualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuXG5cdCQoJy53cC1ibG9jay1yZXNvdXJjZS1ibG9ja3MtaGVyby1jYXJvdXNlbCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXG5cdFx0dmFyICRjYXJvdXNlbCA9ICQodGhpcyk7XG5cblx0XHQkY2Fyb3VzZWwuc2xpY2soe1xuXHRcdFx0bGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG5cdFx0XHRjc3NFYXNlOiAnZWFzZScsXG5cdFx0XHRhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG5cdFx0XHRjZW50ZXJNb2RlOiBmYWxzZSxcblx0XHRcdHBhdXNlT25Ib3ZlcjogZmFsc2UsXG5cdFx0XHRhdXRvcGxheTogJGNhcm91c2VsLmRhdGEoJ2F1dG9wbGF5JyksXG5cdFx0XHRhdXRvcGxheVNwZWVkOiAkY2Fyb3VzZWwuZGF0YSgnYXV0b3BsYXlzcGVlZCcpLFxuXHRcdFx0YXJyb3dzOiAkY2Fyb3VzZWwuZGF0YSgnYXJyb3dzJyksXG5cdFx0XHRkb3RzOiAkY2Fyb3VzZWwuZGF0YSgnZG90cycpLFxuXHRcdFx0ZmFkZTogJGNhcm91c2VsLmRhdGEoJ2VmZmVjdCcpID09PSAnZmFkZScsXG5cdFx0XHRzcGVlZDogJGNhcm91c2VsLmRhdGEoJ3NwZWVkJylcblx0XHR9KTtcblx0fSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcm9udGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ })

/******/ });