/**
 * frontend.js (Common JS to ALL Blocks)
 */
jQuery(document).ready(function ($) {

	$('.wp-block-resource-blocks-hero-carousel').each(function () {

		const $carousel = $(this);

		$carousel.slick({
			lazyLoad: 'ondemand',
			cssEase: 'ease',
			adaptiveHeight: false,
			centerMode: false,
			pauseOnHover: false,
			autoplay: $carousel.data('autoplay'),
			autoplaySpeed: $carousel.data('autoplayspeed'),
			arrows: $carousel.data('arrows'),
			dots: $carousel.data('dots'),
			fade: ($carousel.data('effect') === 'fade'),
			speed: $carousel.data('speed'),
		});

	});

});
