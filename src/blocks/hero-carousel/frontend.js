jQuery(document).ready(function ($) {

	$('.wp-block-resource-blocks-hero-carousel').each(function () {

		var $carousel = $(this);
		var slideCount = null;

		$carousel.on('init', function (event, slick) {
			slideCount = slick.slideCount;
			setSlideCount();
			setCurrentSlideNumber(slick.currentSlide);
		});

		$carousel.slick({
			fade: ($carousel.data('effect') === 'fade'),
			autoplay: $carousel.data('autoplay'),
			speed: $carousel.data('speed'),
			adaptiveHeight: true,
			appendArrows: $carousel.data('arrows'),
			pauseOnFocus: false,
			cssEase: 'linear',
			lazyLoad: 'anticipated',
			prevArrow: '.exhibit-navigation .prev',
			nextArrow: '.exhibit-navigation .next, .slick-slide img, .slick-slide div'
		});

		$carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			setCurrentSlideNumber(nextSlide);
		});

		function setSlideCount() {
			var $el = $('.exhibit-navigation .counter').find('.total');
			$el.text(slideCount);
		}

		function setCurrentSlideNumber(currentSlide) {
			var $el = $('.exhibit-navigation .counter').find('.current');
			$el.text(currentSlide + 1);
		}

	});

});
