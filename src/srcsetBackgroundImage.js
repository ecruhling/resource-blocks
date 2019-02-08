// drop-in srcsetBackgroundImage class to replace background images with image extracted from srcset

class srcsetBackgroundImage {

	constructor(element) {
		this.element = element;
		this.img = element.querySelector('img');
		this.src = '';

		this.img.addEventListener('load', () => {
			this.update();
		});

		if (this.img.complete) {
			this.update();
		}
	}

	update() {
		let src = typeof this.img.currentSrc !== 'undefined' ? this.img.currentSrc : this.img.src;
		if (this.src !== src) {
			this.src = src;
			this.element.style.backgroundImage = 'url("' + this.src + '")';

		}
	}
}

module.exports = srcsetBackgroundImage;
