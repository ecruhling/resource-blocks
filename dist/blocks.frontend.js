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

eval("jQuery(document).ready(function ($) {\n\n\t$('.wp-block-resource-blocks-hero-carousel').each(function () {\n\n\t\tvar $gallery = $(this);\n\t\tvar slideCount = null;\n\n\t\t$gallery.on('init', function (event, slick) {\n\t\t\tslideCount = slick.slideCount;\n\t\t\tsetSlideCount();\n\t\t\tsetCurrentSlideNumber(slick.currentSlide);\n\t\t});\n\n\t\t$gallery.slick({\n\t\t\tfade: $gallery.data('effect') === 'fade',\n\t\t\tautoplay: $gallery.data('autoplay'),\n\t\t\tspeed: $gallery.data('speed'),\n\t\t\tadaptiveHeight: true,\n\t\t\tappendArrows: false,\n\t\t\tpauseOnFocus: false,\n\t\t\tcssEase: 'linear',\n\t\t\tlazyLoad: 'anticipated',\n\t\t\tprevArrow: '.exhibit-navigation .prev',\n\t\t\tnextArrow: '.exhibit-navigation .next, .slick-slide img, .slick-slide div'\n\t\t});\n\n\t\t$gallery.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\n\t\t\tsetCurrentSlideNumber(nextSlide);\n\t\t});\n\n\t\tfunction setSlideCount() {\n\t\t\tvar $el = $('.exhibit-navigation .counter').find('.total');\n\t\t\t$el.text(slideCount);\n\t\t}\n\n\t\tfunction setCurrentSlideNumber(currentSlide) {\n\t\t\tvar $el = $('.exhibit-navigation .counter').find('.current');\n\t\t\t$el.text(currentSlide + 1);\n\t\t}\n\t});\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVyby1jYXJvdXNlbC9mcm9udGVuZC5qcz8zMzVhIl0sInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcblxuXHQkKCcud3AtYmxvY2stcmVzb3VyY2UtYmxvY2tzLWhlcm8tY2Fyb3VzZWwnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciAkZ2FsbGVyeSA9ICQodGhpcyk7XG5cdFx0dmFyIHNsaWRlQ291bnQgPSBudWxsO1xuXG5cdFx0JGdhbGxlcnkub24oJ2luaXQnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrKSB7XG5cdFx0XHRzbGlkZUNvdW50ID0gc2xpY2suc2xpZGVDb3VudDtcblx0XHRcdHNldFNsaWRlQ291bnQoKTtcblx0XHRcdHNldEN1cnJlbnRTbGlkZU51bWJlcihzbGljay5jdXJyZW50U2xpZGUpO1xuXHRcdH0pO1xuXG5cdFx0JGdhbGxlcnkuc2xpY2soe1xuXHRcdFx0ZmFkZTogJGdhbGxlcnkuZGF0YSgnZWZmZWN0JykgPT09ICdmYWRlJyxcblx0XHRcdGF1dG9wbGF5OiAkZ2FsbGVyeS5kYXRhKCdhdXRvcGxheScpLFxuXHRcdFx0c3BlZWQ6ICRnYWxsZXJ5LmRhdGEoJ3NwZWVkJyksXG5cdFx0XHRhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcblx0XHRcdGFwcGVuZEFycm93czogZmFsc2UsXG5cdFx0XHRwYXVzZU9uRm9jdXM6IGZhbHNlLFxuXHRcdFx0Y3NzRWFzZTogJ2xpbmVhcicsXG5cdFx0XHRsYXp5TG9hZDogJ2FudGljaXBhdGVkJyxcblx0XHRcdHByZXZBcnJvdzogJy5leGhpYml0LW5hdmlnYXRpb24gLnByZXYnLFxuXHRcdFx0bmV4dEFycm93OiAnLmV4aGliaXQtbmF2aWdhdGlvbiAubmV4dCwgLnNsaWNrLXNsaWRlIGltZywgLnNsaWNrLXNsaWRlIGRpdidcblx0XHR9KTtcblxuXHRcdCRnYWxsZXJ5Lm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuXHRcdFx0c2V0Q3VycmVudFNsaWRlTnVtYmVyKG5leHRTbGlkZSk7XG5cdFx0fSk7XG5cblx0XHRmdW5jdGlvbiBzZXRTbGlkZUNvdW50KCkge1xuXHRcdFx0dmFyICRlbCA9ICQoJy5leGhpYml0LW5hdmlnYXRpb24gLmNvdW50ZXInKS5maW5kKCcudG90YWwnKTtcblx0XHRcdCRlbC50ZXh0KHNsaWRlQ291bnQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNldEN1cnJlbnRTbGlkZU51bWJlcihjdXJyZW50U2xpZGUpIHtcblx0XHRcdHZhciAkZWwgPSAkKCcuZXhoaWJpdC1uYXZpZ2F0aW9uIC5jb3VudGVyJykuZmluZCgnLmN1cnJlbnQnKTtcblx0XHRcdCRlbC50ZXh0KGN1cnJlbnRTbGlkZSArIDEpO1xuXHRcdH1cblx0fSk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaGVyby1jYXJvdXNlbC9mcm9udGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })

/******/ });