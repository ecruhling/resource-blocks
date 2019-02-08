/**
 * External Dependencies
 */
const { filter, pick, get } = lodash

/**
 * WordPress dependencies
 */
const {
	__,
	sprintf,
} = wp.i18n

const {
	BlockControls,
	MediaUpload,
	MediaPlaceholder,
	InspectorControls,
	mediaUpload,
} = wp.editor

const {
	Component,
	Fragment,
} = wp.element

const {
	IconButton,
	DropZone,
	FormFileUpload,
	PanelBody,
	TextControl,
	SelectControl,
	ToggleControl,
	Toolbar,
	withNotices,
} = wp.components

/**
 * Internal dependencies
 */
import SliderImage from './slider-image'
import './editor.scss'

/**
 * Carousel Effect Options
 */
const effectOptions = [
	{ value: 'fade', label: __('Fade', 'hero-carousel') },
	{ value: 'scroll', label: __('Slide', 'hero-carousel') },
]

/**
 * Allowed Media Types
 */
const ALLOWED_MEDIA_TYPES = ['image']

/**
 * Media Files Picker
 */
export const pickRelevantMediaFiles = (image) => {
	const imageProps = pick(image, ['alt', 'id', 'link'])
	imageProps.url = get(image, ['sizes', 'large', 'url']) || get(image, ['media_details', 'sizes', 'large', 'source_url']) || image.url
	return imageProps
}

/**
 * SliderEdit
 */
class SliderEdit extends Component {
	constructor () {
		super(...arguments)

		this.getAvailableSizes = this.getAvailableSizes.bind(this)
		this.onSelectImage = this.onSelectImage.bind(this)
		this.onSelectImages = this.onSelectImages.bind(this)
		this.setSpeed = this.setSpeed.bind(this)
		this.setAutoplaySpeed = this.setAutoplaySpeed.bind(this)
		this.setEffect = this.setEffect.bind(this)
		this.toggleAdaptiveHeight = this.toggleAdaptiveHeight.bind(this)
		this.toggleAutoplay = this.toggleAutoplay.bind(this)
		this.toggleArrows = this.toggleArrows.bind(this)
		this.toggleCenterMode = this.toggleCenterMode.bind(this)
		this.toggleDots = this.toggleDots.bind(this)
		this.onRemoveImage = this.onRemoveImage.bind(this)
		this.setImageAttributes = this.setImageAttributes.bind(this)
		this.addFiles = this.addFiles.bind(this)
		this.uploadFromFiles = this.uploadFromFiles.bind(this)
		this.setAttributes = this.setAttributes.bind(this)

		this.state = {
			selectedImage: null,
		}
	}

	getAvailableSizes () {
		return get(this.props.image, ['media_details', 'sizes'], {})
	}

	setAttributes (attributes) {
		if (attributes.ids) {
			throw new Error('The "ids" attribute should not be changed directly. It is managed automatically when "images" attribute changes')
		}

		if (attributes.images) {
			attributes = {
				...attributes,
				ids: map(attributes.images, 'id'),
			}
		}

		this.props.setAttributes(attributes)
	}

	onSelectImage (index) {
		return () => {
			if (this.state.selectedImage !== index) {
				this.setState({
					selectedImage: index,
				})
			}
		}
	}

	onRemoveImage (index) {
		return () => {
			const images = filter(this.props.attributes.images, (img, i) => index !== i)
			this.setState({ selectedImage: null })
			this.setAttributes({
				images,
			})
		}
	}

	onSelectImages (images) {
		this.props.setAttributes({
			images: images.map((image) => pickRelevantMediaFiles(image)),
		})
	}

	setSpeed (value) {
		this.setAttributes({ speed: value })
	}

	setAutoplaySpeed (value) {
		this.setAttributes({ autoplaySpeed: value })
	}

	setEffect (value) {
		this.setAttributes({ effect: value })
	}

	toggleAdaptiveHeight () {
		this.setAttributes({ adaptiveHeight: !this.props.attributes.adaptiveHeight })
	}

	toggleAutoplay () {
		this.setAttributes({ autoplay: !this.props.attributes.autoplay })
	}

	toggleArrows () {
		this.setAttributes({ arrows: !this.props.attributes.arrows })
	}

	toggleCenterMode () {
		this.setAttributes({ centerMode: !this.props.attributes.centerMode })
	}

	toggleDots () {
		this.setAttributes({ dots: !this.props.attributes.dots })
	}

	setImageAttributes (index, attributes) {
		const { attributes: { images } } = this.props
		const { setAttributes } = this
		if (!images[index]) {
			return
		}
		setAttributes({
			images: [
				...images.slice(0, index),
				{
					...images[index],
					...attributes,
				},
				...images.slice(index + 1),
			],
		})
	}

	uploadFromFiles (event) {
		this.addFiles(event.target.files)
	}

	addFiles (files) {
		const currentImages = this.props.attributes.images || []
		const { noticeOperations } = this.props
		const { setAttributes } = this
		mediaUpload({
			allowedTypes: ALLOWED_MEDIA_TYPES,
			filesList: files,
			onFileChange: (images) => {
				const imagesNormalized = images.map((image) => pickRelevantMediaFiles(image))
				setAttributes({
					images: currentImages.concat(imagesNormalized),
				})
			},
			onError: noticeOperations.createErrorNotice,
		})
	}

	componentDidUpdate (prevProps) {
		// Deselect images when deselecting the block
		if (!this.props.isSelected && prevProps.isSelected) {
			this.setState({
				selectedImage: null,
			})
		}
	}

	render () {
		const { attributes, isSelected, className, noticeOperations, noticeUI } = this.props
		const { images, adaptiveHeight, autoplay, autoplaySpeed, arrows, centerMode, dots, speed, effect } = attributes

		const dropZone = (
			<DropZone onFilesDrop={this.addFiles}/>
		)

		const controls = (
			<BlockControls>
				{!!images.length && (
					<Toolbar>
						<MediaUpload
							onSelect={this.onSelectImages}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							multiple
							gallery
							value={images.map((img) => img.id)}
							render={({ open }) => (
								<IconButton
									className="components-toolbar__control"
									label={__('Edit Carousel', 'hero-carousel')}
									icon="edit"
									onClick={open}
								/>
							)}
						/>
					</Toolbar>
				)}
			</BlockControls>
		)

		if (images.length === 0) {
			return (
				<Fragment>
					{controls}
					<MediaPlaceholder
						icon="format-gallery"
						className={className}
						labels={{
							title: __('Carousel', 'hero-carousel'),
							instructions: __('Drag images, upload new ones or select files from your library.', 'hero-carousel'),
						}}
						onSelect={this.onSelectImages}
						accept="image/*"
						allowedTypes={ALLOWED_MEDIA_TYPES}
						multiple
						notices={noticeUI}
						onError={noticeOperations.createErrorNotice}
					/>
				</Fragment>
			)
		}

		return (
			<Fragment>
				{controls}
				<InspectorControls>
					<PanelBody title={__('Carousel Settings')}>
						<ToggleControl
							label={__('Adaptive Height')}
							checked={!!adaptiveHeight}
							onChange={this.toggleAdaptiveHeight}
							help={__('Enables adaptive height for single slide horizontal carousels')}
						/>
						<ToggleControl
							label={__('Autoplay')}
							checked={!!autoplay}
							onChange={this.toggleAutoplay}
						/>
						<TextControl
							label={__('Autoplay Speed')}
							type='number'
							min='0'
							max='10000'
							value={autoplaySpeed}
							onChange={this.setAutoplaySpeed}
							help='Autoplay Speed in milliseconds'
						/>
						<ToggleControl
							label={__('Prev / Next Arrows')}
							checked={!!arrows}
							onChange={this.toggleArrows}
						/>
						<ToggleControl
							label={__('Navigation Dots')}
							checked={!!dots}
							onChange={this.toggleDots}
						/>
						<ToggleControl
							label={__('Center Mode')}
							checked={!!centerMode}
							onChange={this.toggleCenterMode}
							help='Enables centered view with partial Prev / Next slides'
						/>
						<TextControl
							label={__('Transition Speed')}
							type='number'
							min='100'
							max='500'
							value={speed}
							onChange={this.setSpeed}
						/>
						<SelectControl
							label={__('Transition Effect')}
							value={effect}
							onChange={this.setEffect}
							options={effectOptions}
						/>
					</PanelBody>
				</InspectorControls>
				{noticeUI}
				<ul className={`${className}`}>
					{dropZone}
					{images.map((img, index) => {

						const ariaLabel = __(sprintf('image %1$d of %2$d in carousel', (index + 1), images.length))

						return (
							<li className="blocks-gallery-item" key={img.id || img.url}>
								<SliderImage
									url={img.url}
									alt={img.alt}
									id={img.id}
									isSelected={isSelected && this.state.selectedImage === index}
									onRemove={this.onRemoveImage(index)}
									onSelect={this.onSelectImage(index)}
									setAttributes={(attrs) => this.setImageAttributes(index, attrs)}
									aria-label={ariaLabel}
								/>
							</li>
						)
					})}
					{isSelected &&
					<li className="blocks-gallery-item has-add-item-button">
						<FormFileUpload
							multiple
							isLarge
							className="block-library-gallery-add-item-button"
							onChange={this.uploadFromFiles}
							accept="image/*"
							icon="insert"
						>
							{__('Upload an image')}
						</FormFileUpload>
					</li>
					}
				</ul>
			</Fragment>
		)
	}
}

export default withNotices(SliderEdit)
