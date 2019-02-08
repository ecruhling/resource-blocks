/**
 * frontend.js (Common JS to ALL Blocks)
 */

// import srcsetBackgroundImage
import srcsetBackgroundImage from './srcsetBackgroundImage'

jQuery(document).ready(function ($) {

	// variable - select all containing divs with corresponding class
	const $srcsetBackgroundImages = $('.srcset-background-image')

	// replace background with screen appropriate image extracted from image with srcset attribute
	for (let i = 0; i < $srcsetBackgroundImages.length; i++) {
		new srcsetBackgroundImage($srcsetBackgroundImages[i])
	}

	$('.wp-block-resource-blocks-hero-carousel').each(function () {

		const $carousel = $(this)

		$carousel.slick({
			adaptiveHeight: $carousel.data('adaptiveheight'),
			arrows: $carousel.data('arrows'),
			autoplay: $carousel.data('autoplay'),
			autoplaySpeed: $carousel.data('autoplayspeed'),
			centerMode: $carousel.data('centermode'),
			dots: $carousel.data('dots'),
			fade: ($carousel.data('effect') === 'fade'),
			lazyLoad: 'ondemand',
			pauseOnHover: false,
			speed: $carousel.data('speed'),
		})

	})

})
