/**
 * frontend.js (Common JS to ALL Blocks)
 */
jQuery(document).ready(function ($) {

	$('.wp-block-resource-blocks-hero-carousel').each(function () {

		const $carousel = $(this);

		$carousel.slick({
			accessibility: true,
			adaptiveHeight: false,
			autoplay: $carousel.data('autoplay'),
			autoplaySpeed: 3000,
			arrows: $carousel.data('arrows'),
			centerMode: false,
			cssEase: 'ease',
			dots: false,
			fade: ($carousel.data('effect') === 'fade'),
			lazyLoad: 'ondemand',
			pauseOnHover: false,
			speed: $carousel.data('speed'),
		}, 'refresh')
			.addClass('show');

	});

});
