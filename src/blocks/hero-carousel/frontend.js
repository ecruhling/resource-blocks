jQuery(document).ready(function ($) {

	$('.wp-block-resource-blocks-hero-carousel').each(function () {

		const $carousel = $(this);
		let slideCount = null;

		$carousel.on('init', function (event, slick) {
			slideCount = slick.slideCount;
			setSlideCount();
			setCurrentSlideNumber(slick.currentSlide);
		});

		// $('.carousel').slick({
		// 	slide: '.carousel-slide',
		// 	arrows: false,
		// 	dots: false,
		// 	autoplay: true,
		// 	pauseOnHover: false,
		// }, 'refresh')
		// 	.addClass('show');

		// $carousel.slick({
		// 	accessibility: true,
		// 	adaptiveHeight: false,
		// 	autoplay: $carousel.data('autoplay'),
		// 	autoplaySpeed: 3000,
		// 	arrows: $carousel.data('arrows'),
		// 	centerMode: false,
		// 	cssEase: 'ease',
		// 	dots: false,
		// 	fade: ($carousel.data('effect') === 'fade'),
		// 	lazyLoad: 'ondemand',
		// 	pauseOnHover: false,
		// 	speed: $carousel.data('speed'),
		// });

		$carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			setCurrentSlideNumber(nextSlide);
		});

		function setSlideCount() {
			const $el = $('.exhibit-navigation .counter').find('.total');
			$el.text(slideCount);
		}

		function setCurrentSlideNumber(currentSlide) {
			const $el = $('.exhibit-navigation .counter').find('.current');
			$el.text(currentSlide + 1);
		}

	});

});
