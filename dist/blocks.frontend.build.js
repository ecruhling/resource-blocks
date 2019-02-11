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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__srcsetBackgroundImage__ = __webpack_require__(/*! ./srcsetBackgroundImage */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__srcsetBackgroundImage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__srcsetBackgroundImage__);\n/**\n * frontend.js (Common JS to ALL Blocks)\n */\n\n// import srcsetBackgroundImage\n\n\njQuery(document).ready(function ($) {\n\n\t// variable - select all containing divs with corresponding class\n\tvar $srcsetBackgroundImages = $('.srcset-background-image');\n\n\t// replace background with screen appropriate image extracted from image with srcset attribute\n\tfor (var i = 0; i < $srcsetBackgroundImages.length; i++) {\n\t\tnew __WEBPACK_IMPORTED_MODULE_0__srcsetBackgroundImage___default.a($srcsetBackgroundImages[i]);\n\t}\n\n\t$('.wp-block-resource-blocks-hero-carousel').each(function () {\n\n\t\tvar $carousel = $(this);\n\n\t\t$carousel.slick({\n\t\t\tadaptiveHeight: $carousel.data('adaptiveheight'),\n\t\t\tarrows: $carousel.data('arrows'),\n\t\t\tautoplay: $carousel.data('autoplay'),\n\t\t\tautoplaySpeed: $carousel.data('autoplayspeed'),\n\t\t\tcenterMode: $carousel.data('centermode'),\n\t\t\tdots: $carousel.data('dots'),\n\t\t\tfade: $carousel.data('effect') === 'fade',\n\t\t\tlazyLoad: 'ondemand',\n\t\t\tpauseOnHover: false,\n\t\t\tspeed: $carousel.data('speed')\n\t\t});\n\t});\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRlbmQuanM/N2YyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGZyb250ZW5kLmpzIChDb21tb24gSlMgdG8gQUxMIEJsb2NrcylcbiAqL1xuXG4vLyBpbXBvcnQgc3Jjc2V0QmFja2dyb3VuZEltYWdlXG5pbXBvcnQgc3Jjc2V0QmFja2dyb3VuZEltYWdlIGZyb20gJy4vc3Jjc2V0QmFja2dyb3VuZEltYWdlJztcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuXG5cdC8vIHZhcmlhYmxlIC0gc2VsZWN0IGFsbCBjb250YWluaW5nIGRpdnMgd2l0aCBjb3JyZXNwb25kaW5nIGNsYXNzXG5cdHZhciAkc3Jjc2V0QmFja2dyb3VuZEltYWdlcyA9ICQoJy5zcmNzZXQtYmFja2dyb3VuZC1pbWFnZScpO1xuXG5cdC8vIHJlcGxhY2UgYmFja2dyb3VuZCB3aXRoIHNjcmVlbiBhcHByb3ByaWF0ZSBpbWFnZSBleHRyYWN0ZWQgZnJvbSBpbWFnZSB3aXRoIHNyY3NldCBhdHRyaWJ1dGVcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAkc3Jjc2V0QmFja2dyb3VuZEltYWdlcy5sZW5ndGg7IGkrKykge1xuXHRcdG5ldyBzcmNzZXRCYWNrZ3JvdW5kSW1hZ2UoJHNyY3NldEJhY2tncm91bmRJbWFnZXNbaV0pO1xuXHR9XG5cblx0JCgnLndwLWJsb2NrLXJlc291cmNlLWJsb2Nrcy1oZXJvLWNhcm91c2VsJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgJGNhcm91c2VsID0gJCh0aGlzKTtcblxuXHRcdCRjYXJvdXNlbC5zbGljayh7XG5cdFx0XHRhZGFwdGl2ZUhlaWdodDogJGNhcm91c2VsLmRhdGEoJ2FkYXB0aXZlaGVpZ2h0JyksXG5cdFx0XHRhcnJvd3M6ICRjYXJvdXNlbC5kYXRhKCdhcnJvd3MnKSxcblx0XHRcdGF1dG9wbGF5OiAkY2Fyb3VzZWwuZGF0YSgnYXV0b3BsYXknKSxcblx0XHRcdGF1dG9wbGF5U3BlZWQ6ICRjYXJvdXNlbC5kYXRhKCdhdXRvcGxheXNwZWVkJyksXG5cdFx0XHRjZW50ZXJNb2RlOiAkY2Fyb3VzZWwuZGF0YSgnY2VudGVybW9kZScpLFxuXHRcdFx0ZG90czogJGNhcm91c2VsLmRhdGEoJ2RvdHMnKSxcblx0XHRcdGZhZGU6ICRjYXJvdXNlbC5kYXRhKCdlZmZlY3QnKSA9PT0gJ2ZhZGUnLFxuXHRcdFx0bGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG5cdFx0XHRwYXVzZU9uSG92ZXI6IGZhbHNlLFxuXHRcdFx0c3BlZWQ6ICRjYXJvdXNlbC5kYXRhKCdzcGVlZCcpXG5cdFx0fSk7XG5cdH0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZnJvbnRlbmQuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),

/***/ 16:
/*!**************************************!*\
  !*** ./src/srcsetBackgroundImage.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// drop-in srcsetBackgroundImage class to replace background images with image extracted from srcset\n\nvar srcsetBackgroundImage = function () {\n\tfunction srcsetBackgroundImage(element) {\n\t\tvar _this = this;\n\n\t\t_classCallCheck(this, srcsetBackgroundImage);\n\n\t\tthis.element = element;\n\t\tthis.img = element.querySelector('img');\n\t\tthis.src = '';\n\n\t\tthis.img.addEventListener('load', function () {\n\t\t\t_this.update();\n\t\t});\n\n\t\tif (this.img.complete) {\n\t\t\tthis.update();\n\t\t}\n\t}\n\n\t_createClass(srcsetBackgroundImage, [{\n\t\tkey: 'update',\n\t\tvalue: function update() {\n\t\t\tvar src = typeof this.img.currentSrc !== 'undefined' ? this.img.currentSrc : this.img.src;\n\t\t\tif (this.src !== src) {\n\t\t\t\tthis.src = src;\n\t\t\t\tthis.element.style.backgroundImage = 'url(\"' + this.src + '\")';\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn srcsetBackgroundImage;\n}();\n\nmodule.exports = srcsetBackgroundImage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3Jjc2V0QmFja2dyb3VuZEltYWdlLmpzP2Q2NzQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gZHJvcC1pbiBzcmNzZXRCYWNrZ3JvdW5kSW1hZ2UgY2xhc3MgdG8gcmVwbGFjZSBiYWNrZ3JvdW5kIGltYWdlcyB3aXRoIGltYWdlIGV4dHJhY3RlZCBmcm9tIHNyY3NldFxuXG52YXIgc3Jjc2V0QmFja2dyb3VuZEltYWdlID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBzcmNzZXRCYWNrZ3JvdW5kSW1hZ2UoZWxlbWVudCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgc3Jjc2V0QmFja2dyb3VuZEltYWdlKTtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0dGhpcy5pbWcgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXHRcdHRoaXMuc3JjID0gJyc7XG5cblx0XHR0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0X3RoaXMudXBkYXRlKCk7XG5cdFx0fSk7XG5cblx0XHRpZiAodGhpcy5pbWcuY29tcGxldGUpIHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKHNyY3NldEJhY2tncm91bmRJbWFnZSwgW3tcblx0XHRrZXk6ICd1cGRhdGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cdFx0XHR2YXIgc3JjID0gdHlwZW9mIHRoaXMuaW1nLmN1cnJlbnRTcmMgIT09ICd1bmRlZmluZWQnID8gdGhpcy5pbWcuY3VycmVudFNyYyA6IHRoaXMuaW1nLnNyYztcblx0XHRcdGlmICh0aGlzLnNyYyAhPT0gc3JjKSB7XG5cdFx0XHRcdHRoaXMuc3JjID0gc3JjO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyB0aGlzLnNyYyArICdcIiknO1xuXHRcdFx0fVxuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBzcmNzZXRCYWNrZ3JvdW5kSW1hZ2U7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3Jjc2V0QmFja2dyb3VuZEltYWdlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NyY3NldEJhY2tncm91bmRJbWFnZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ })

/******/ });