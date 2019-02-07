/**
 * frontend.js (Common JS to ALL Blocks)
 */
jQuery(document).ready(function ($) {

	$('.wp-block-resource-blocks-hero-carousel').each(function () {

		const $carousel = $(this);

		$carousel.slick({
			adaptiveHeight: false,
			arrows: $carousel.data('arrows'),
			autoplay: $carousel.data('autoplay'),
			autoplaySpeed: $carousel.data('autoplayspeed'),
			centerMode: false,
			cssEase: 'ease',
			dots: $carousel.data('dots'),
			fade: ($carousel.data('effect') === 'fade'),
			lazyLoad: 'ondemand',
			pauseOnHover: false,
			speed: $carousel.data('speed'),
		});

	});

});
