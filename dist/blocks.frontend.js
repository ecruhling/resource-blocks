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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/*!**********************************************!*\
  !*** ./src/blocks/hero-carousel/frontend.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("jQuery(document).ready(function ($) {\n\n\t$('.wp-block-resource-blocks-hero-carousel').each(function () {\n\n\t\tvar $carousel = $(this);\n\t\tvar slideCount = null;\n\n\t\t$carousel.on('init', function (event, slick) {\n\t\t\tslideCount = slick.slideCount;\n\t\t\tsetSlideCount();\n\t\t\tsetCurrentSlideNumber(slick.currentSlide);\n\t\t});\n\n\t\t// $('.carousel').slick({\n\t\t// \tslide: '.carousel-slide',\n\t\t// \tarrows: false,\n\t\t// \tdots: false,\n\t\t// \tautoplay: true,\n\t\t// \tpauseOnHover: false,\n\t\t// }, 'refresh')\n\t\t// \t.addClass('show');\n\n\t\t$carousel.slick({\n\t\t\taccessibility: true,\n\t\t\tadaptiveHeight: false,\n\t\t\tautoplay: $carousel.data('autoplay'),\n\t\t\tautoplaySpeed: 3000,\n\t\t\tarrows: $carousel.data('arrows'),\n\t\t\tcenterMode: false,\n\t\t\tcssEase: 'ease',\n\t\t\tdots: false,\n\t\t\tfade: $carousel.data('effect') === 'fade',\n\t\t\tlazyLoad: 'ondemand',\n\t\t\tpauseOnHover: false,\n\t\t\tspeed: $carousel.data('speed')\n\t\t});\n\n\t\t$carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\n\t\t\tsetCurrentSlideNumber(nextSlide);\n\t\t});\n\n\t\tfunction setSlideCount() {\n\t\t\tvar $el = $('.exhibit-navigation .counter').find('.total');\n\t\t\t$el.text(slideCount);\n\t\t}\n\n\t\tfunction setCurrentSlideNumber(currentSlide) {\n\t\t\tvar $el = $('.exhibit-navigation .counter').find('.current');\n\t\t\t$el.text(currentSlide + 1);\n\t\t}\n\t});\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVyby1jYXJvdXNlbC9mcm9udGVuZC5qcz8zMzVhIl0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcblxuXHQkKCcud3AtYmxvY2stcmVzb3VyY2UtYmxvY2tzLWhlcm8tY2Fyb3VzZWwnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciAkY2Fyb3VzZWwgPSAkKHRoaXMpO1xuXHRcdHZhciBzbGlkZUNvdW50ID0gbnVsbDtcblxuXHRcdCRjYXJvdXNlbC5vbignaW5pdCcsIGZ1bmN0aW9uIChldmVudCwgc2xpY2spIHtcblx0XHRcdHNsaWRlQ291bnQgPSBzbGljay5zbGlkZUNvdW50O1xuXHRcdFx0c2V0U2xpZGVDb3VudCgpO1xuXHRcdFx0c2V0Q3VycmVudFNsaWRlTnVtYmVyKHNsaWNrLmN1cnJlbnRTbGlkZSk7XG5cdFx0fSk7XG5cblx0XHQvLyAkKCcuY2Fyb3VzZWwnKS5zbGljayh7XG5cdFx0Ly8gXHRzbGlkZTogJy5jYXJvdXNlbC1zbGlkZScsXG5cdFx0Ly8gXHRhcnJvd3M6IGZhbHNlLFxuXHRcdC8vIFx0ZG90czogZmFsc2UsXG5cdFx0Ly8gXHRhdXRvcGxheTogdHJ1ZSxcblx0XHQvLyBcdHBhdXNlT25Ib3ZlcjogZmFsc2UsXG5cdFx0Ly8gfSwgJ3JlZnJlc2gnKVxuXHRcdC8vIFx0LmFkZENsYXNzKCdzaG93Jyk7XG5cblx0XHQkY2Fyb3VzZWwuc2xpY2soe1xuXHRcdFx0YWNjZXNzaWJpbGl0eTogdHJ1ZSxcblx0XHRcdGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcblx0XHRcdGF1dG9wbGF5OiAkY2Fyb3VzZWwuZGF0YSgnYXV0b3BsYXknKSxcblx0XHRcdGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG5cdFx0XHRhcnJvd3M6ICRjYXJvdXNlbC5kYXRhKCdhcnJvd3MnKSxcblx0XHRcdGNlbnRlck1vZGU6IGZhbHNlLFxuXHRcdFx0Y3NzRWFzZTogJ2Vhc2UnLFxuXHRcdFx0ZG90czogZmFsc2UsXG5cdFx0XHRmYWRlOiAkY2Fyb3VzZWwuZGF0YSgnZWZmZWN0JykgPT09ICdmYWRlJyxcblx0XHRcdGxhenlMb2FkOiAnb25kZW1hbmQnLFxuXHRcdFx0cGF1c2VPbkhvdmVyOiBmYWxzZSxcblx0XHRcdHNwZWVkOiAkY2Fyb3VzZWwuZGF0YSgnc3BlZWQnKVxuXHRcdH0pO1xuXG5cdFx0JGNhcm91c2VsLm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuXHRcdFx0c2V0Q3VycmVudFNsaWRlTnVtYmVyKG5leHRTbGlkZSk7XG5cdFx0fSk7XG5cblx0XHRmdW5jdGlvbiBzZXRTbGlkZUNvdW50KCkge1xuXHRcdFx0dmFyICRlbCA9ICQoJy5leGhpYml0LW5hdmlnYXRpb24gLmNvdW50ZXInKS5maW5kKCcudG90YWwnKTtcblx0XHRcdCRlbC50ZXh0KHNsaWRlQ291bnQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNldEN1cnJlbnRTbGlkZU51bWJlcihjdXJyZW50U2xpZGUpIHtcblx0XHRcdHZhciAkZWwgPSAkKCcuZXhoaWJpdC1uYXZpZ2F0aW9uIC5jb3VudGVyJykuZmluZCgnLmN1cnJlbnQnKTtcblx0XHRcdCRlbC50ZXh0KGN1cnJlbnRTbGlkZSArIDEpO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaGVyby1jYXJvdXNlbC9mcm9udGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ })

/******/ });