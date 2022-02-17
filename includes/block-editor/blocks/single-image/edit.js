/**
 * External dependencies
 */
import classnames from 'classnames'
import { get, has, pick } from 'lodash'

/**
 * WordPress dependencies
 */
import { getBlobByURL, isBlobURL, revokeBlobURL } from '@wordpress/blob'
import { withNotices } from '@wordpress/components'
import { useSelect } from '@wordpress/data'
import {
	BlockIcon, MediaPlaceholder, useBlockProps, store as blockEditorStore,
} from '@wordpress/block-editor'
import { useEffect, useRef, useState } from '@wordpress/element'
import { Modal } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import icons from '../../../icons/icons'

/**
 * Internal dependencies
 */
import Image, { isExternalImage, isMediaDestroyed } from '../lib/image'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'

/**
 * Module constants
 */
import {
	ALLOWED_MEDIA_TYPES,
} from './constants'

/**
 * pickRelevantMediaFiles.
 *
 * @param image
 * @param size
 * @returns {Pick<*, keyof *>}
 */
export const pickRelevantMediaFiles = (image, size) => {
	const imageProps = pick(image, ['alt', 'id'])
	imageProps.url = get(image, ['sizes', size, 'url']) || get(image, ['media_details', 'sizes', size, 'source_url']) || image.url
	return imageProps
}

/**
 * Is the URL a temporary blob URL? A blob URL is one that is used temporarily
 * while the image is being uploaded and will not have an id yet allocated.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the URL a Blob URL
 */
const isTemporaryImage = (id, url) => !id && isBlobURL(url)

/**
 * Checks if WP generated default image size. Size generation is skipped
 * when the image is smaller than the said size.
 *
 * @param {Object} image
 * @param {string} defaultSize
 *
 * @return {boolean} Whether or not it has default image size.
 */
function hasDefaultSize (image, defaultSize) {
	return (has(image, ['sizes', defaultSize, 'url']) || has(image, ['media_details', 'sizes', defaultSize, 'source_url']))
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export function ImageEdit ({
														 attributes,
														 setAttributes,
														 isSelected,
														 className,
														 noticeUI,
														 insertBlocksAfter,
														 noticeOperations,
														 onReplace,
														 context,
														 clientId,
													 }) {
	const {
		required_width, required_height, instructions, url = '', alt, id, width, height, sizeSlug,
	} = attributes
	const [temporaryURL, setTemporaryURL] = useState()

	const altRef = useRef()
	useEffect(() => {
		altRef.current = alt
	}, [alt])

	const ref = useRef()
	const { imageDefaultSize, mediaUpload } = useSelect((select) => {
		const { getSettings } = select(blockEditorStore)
		return pick(getSettings(), ['imageDefaultSize', 'mediaUpload'])
	}, [])

	// A callback passed to MediaUpload,
	// fired when the media modal closes.
	function onCloseModal () {
		if (isMediaDestroyed(attributes?.id)) {
			setAttributes({
				url: undefined, id: undefined,
			})
		}
	}

	/*
		 Runs an error callback if the image does not load.
		 If the error callback is triggered, we infer that that image
		 has been deleted.
	*/
	function onImageError (isReplaced = false) {
		// If the image block was not replaced with an embed,
		// clear the attributes and trigger the placeholder.
		if (!isReplaced) {
			setAttributes({
				url: undefined, id: undefined,
			})
		}
	}

	function onUploadError (message) {
		noticeOperations.removeAllNotices()
		noticeOperations.createErrorNotice(message)
	}

	/**
	 * Image selected.
	 * @param media
	 */
	function onSelectImage (media) {
		if (!media || !media.url) {
			setAttributes({
				url: undefined, alt: undefined, id: undefined, title: undefined,
			})

			return
		}

		if (isBlobURL(media.url)) {
			setTemporaryURL(media.url)
			return
		}

		setTemporaryURL()

		let mediaAttributes = pickRelevantMediaFiles(media, imageDefaultSize)

		let additionalAttributes
		// Reset the dimension attributes if changing to a different image.
		if (!media.id || media.id !== id) {
			additionalAttributes = {
				width: undefined, height: undefined, // Fallback to size "full" if there's no default image size.
				// It means the image is smaller, and the block will use a full-size URL.
				sizeSlug: hasDefaultSize(media, imageDefaultSize) ? imageDefaultSize : 'full',
			}
		} else {
			// Keep the same url when selecting the same file, so "Image Size"
			// option is not changed.
			additionalAttributes = { url }
		}

		// Check for minimum width.
		// Selecting a new image from the Media Library uses media.width,
		// Uploading a new image uses media.media_details.width
		let widthCheck = media.width ?? media.media_details.width

		if (widthCheck !== required_width) {
			openModal()

			return
		}

		setAttributes({
			...mediaAttributes, ...additionalAttributes,
		})
	}

	/**
	 * onSelectURL.
	 *
	 * @param newURL
	 */
	function onSelectURL (newURL) {
		if (newURL !== url) {
			setAttributes({
				url: newURL, id: undefined, width: undefined, height: undefined, sizeSlug: imageDefaultSize,
			})
		}
	}

	/**
	 * Set up modal.
	 */
	const [modalIsOpen, setIsOpen] = useState(false)

	function openModal () {
		setIsOpen(true)
	}

	function closeModal () {
		setIsOpen(false)
	}

	/**
	 * Temporary image.
	 *
	 * @type {boolean}
	 */
	let isTemp = isTemporaryImage(id, url)

	// Upload a temporary image on mount.
	useEffect(() => {
		if (!isTemp) {
			return
		}

		const file = getBlobByURL(url)

		if (file) {
			mediaUpload({
				filesList: [file], onFileChange: ([img]) => {
					onSelectImage(img)
				}, allowedTypes: ALLOWED_MEDIA_TYPES, onError: (message) => {
					isTemp = false
					noticeOperations.createErrorNotice(message)
					setAttributes({
						src: undefined, id: undefined, url: undefined,
					})
				},
			})
		}
	}, [])

	// If an image is temporary, revoke the Blob url when it is uploaded (and is
	// no longer temporary).
	useEffect(() => {
		if (isTemp) {
			setTemporaryURL(url)
			return
		}
		revokeBlobURL(temporaryURL)
	}, [isTemp, url])

	const isExternal = isExternalImage(id, url)
	const src = isExternal ? url : undefined
	const mediaPreview = !!url && (<img
		alt={__('Edit image')}
		title={__('Edit image')}
		className={'edit-image-preview'}
		src={url}
	/>)

	const classes = classnames(className, {
		'is-transient': temporaryURL, 'is-resized': !!width || !!height, [`size-${sizeSlug}`]: sizeSlug,
	})

	const blockProps = useBlockProps({
		ref, className: classes,
	})

	return (<div {...blockProps}>
		{(temporaryURL || url) && (<Image
			temporaryURL={temporaryURL}
			attributes={attributes}
			setAttributes={setAttributes}
			isSelected={isSelected}
			insertBlocksAfter={insertBlocksAfter}
			onReplace={onReplace}
			onSelectImage={onSelectImage}
			onSelectURL={onSelectURL}
			onUploadError={onUploadError}
			containerRef={ref}
			context={context}
			clientId={clientId}
			onCloseModal={onCloseModal}
			onImageLoadError={onImageError}
		/>)}
		{modalIsOpen && (<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Error"
			title="Error"
		>
			<p>Image must be {required_width}px wide! Choose another image.</p>
		</Modal>)}
		<MediaPlaceholder
			icon={<BlockIcon icon={icons.single_image}/>}
			onSelect={onSelectImage}
			notices={noticeUI}
			onError={onUploadError}
			onClose={onCloseModal}
			accept="image/*"
			allowedTypes={ALLOWED_MEDIA_TYPES}
			value={{ id, src }}
			mediaPreview={mediaPreview}
			labels={{
				title: 'Single Image',
				instructions: instructions
			}}
			disableMediaButtons={temporaryURL || url}
		/>
	</div>)
}

export default withNotices(ImageEdit)
