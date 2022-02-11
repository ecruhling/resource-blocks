/**
 * External dependencies
 */
import { get, filter, map, pick, includes } from 'lodash';

/**
 * WordPress dependencies
 */
import { isBlobURL } from '@wordpress/blob';
import {
	ExternalLink,
	PanelBody,
	ResizableBox,
	Spinner,
	TextareaControl,
	TextControl,
	ToolbarButton,
} from '@wordpress/components';
import { useViewportMatch } from '@wordpress/compose';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	__experimentalImageSizeControl as ImageSizeControl,
	__experimentalImageURLInputUI as ImageURLInputUI,
	MediaReplaceFlow,
	store as blockEditorStore,
	__experimentalImageEditor as ImageEditor,
	__experimentalImageEditingProvider as ImageEditingProvider,
} from '@wordpress/block-editor';
import { useEffect, useMemo, useState, useRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { getFilename } from '@wordpress/url';
import { upload } from '@wordpress/icons';
import { store as noticesStore } from '@wordpress/notices';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import useClientWidth from './use-client-width';
import { isExternalImage, isMediaDestroyed } from './edit';

/**
 * Module constants
 */
import { MIN_SIZE, ALLOWED_MEDIA_TYPES } from './constants';

export default function Image( {
																 temporaryURL,
																 attributes: {
																	 url = '',
																	 alt,
																	 id,
																	 title,
																	 width,
																	 height,
																	 sizeSlug,
																 },
																 setAttributes,
																 isSelected,
																 onCloseModal,
																 onSelectImage,
																 onSelectURL,
																 onUploadError,
																 containerRef,
																 clientId,
																 onImageLoadError,
															 } ) {
	const imageRef = useRef();

	const { image, multiImageSelection } = useSelect(
		( select ) => {
			const { getMedia } = select( coreStore );
			const { getMultiSelectedBlockClientIds, getBlockName } = select(
				blockEditorStore
			);
			const multiSelectedClientIds = getMultiSelectedBlockClientIds();
			return {
				image: id && isSelected ? getMedia( id ) : null,
				multiImageSelection:
					multiSelectedClientIds.length &&
					multiSelectedClientIds.every(
						( _clientId ) =>
							getBlockName( _clientId ) === 'core/image'
					),
			};
		},
		[ id, isSelected ]
	);
	const {
		imageEditing,
		imageSizes,
		maxWidth,
		mediaUpload,
	} = useSelect(
		( select ) => {
			const {
				getBlockRootClientId,
				getSettings,
				canInsertBlockType,
			} = select( blockEditorStore );

			const rootClientId = getBlockRootClientId( clientId );
			const settings = pick( getSettings(), [
				'imageEditing',
				'imageSizes',
				'maxWidth',
				'mediaUpload',
			] );

			return {
				...settings,
			};
		},
		[ clientId ]
	);
	const { replaceBlocks, toggleSelection } = useDispatch( blockEditorStore );
	const { createErrorNotice, createSuccessNotice } = useDispatch(
		noticesStore
	);
	const isLargeViewport = useViewportMatch( 'medium' );
	const isWideAligned = includes( [ 'wide', 'full' ] );
	const [
		{ loadedNaturalWidth, loadedNaturalHeight },
		setLoadedNaturalSize,
	] = useState( {} );
	const [ isEditingImage, setIsEditingImage ] = useState( false );
	const [ externalBlob, setExternalBlob ] = useState();
	const clientWidth = useClientWidth( containerRef, [] );
	const imageSizeOptions = map(
		filter( imageSizes, ( { slug } ) =>
			get( image, [ 'media_details', 'sizes', slug, 'source_url' ] )
		),
		( { name, slug } ) => ( { value: slug, label: name } )
	);

	// If an image is externally hosted, try to fetch the image data. This may
	// fail if the image host doesn't allow CORS with the domain. If it works,
	// we can enable a button in the toolbar to upload the image.
	useEffect( () => {
		if ( ! isExternalImage( id, url ) || ! isSelected || externalBlob ) {
			return;
		}

		window
			.fetch( url )
			.then( ( response ) => response.blob() )
			.then( ( blob ) => setExternalBlob( blob ) )
			// Do nothing, cannot upload.
			.catch( () => {} );
	}, [ id, url, isSelected, externalBlob ] );

	// Get naturalWidth and naturalHeight from image ref, and fall back to loaded natural
	// width and height. This resolves an issue in Safari where the loaded natural
	// width and height is otherwise lost when switching between alignments.
	// See: https://github.com/WordPress/gutenberg/pull/37210.
	const { naturalWidth, naturalHeight } = useMemo( () => {
		return {
			naturalWidth:
				imageRef.current?.naturalWidth ||
				loadedNaturalWidth ||
				undefined,
			naturalHeight:
				imageRef.current?.naturalHeight ||
				loadedNaturalHeight ||
				undefined,
		};
	}, [
		loadedNaturalWidth,
		loadedNaturalHeight,
		imageRef.current?.complete,
	] );

	function onSetHref( props ) {
		setAttributes( props );
	}

	function onSetTitle( value ) {
		// This is the HTML title attribute, separate from the media object
		// title.
		setAttributes( { title: value } );
	}

	function updateAlt( newAlt ) {
		setAttributes( { alt: newAlt } );
	}

	function updateImage( newSizeSlug ) {
		const newUrl = get( image, [
			'media_details',
			'sizes',
			newSizeSlug,
			'source_url',
		] );
		if ( ! newUrl ) {
			return null;
		}

		setAttributes( {
			url: newUrl,
			width: undefined,
			height: undefined,
			sizeSlug: newSizeSlug,
		} );
	}

	function uploadExternal() {
		mediaUpload( {
			filesList: [ externalBlob ],
			onFileChange( [ img ] ) {
				onSelectImage( img );

				if ( isBlobURL( img.url ) ) {
					return;
				}

				setExternalBlob();
				createSuccessNotice( __( 'Image uploaded.' ), {
					type: 'snackbar',
				} );
			},
			allowedTypes: ALLOWED_MEDIA_TYPES,
			onError( message ) {
				createErrorNotice( message, { type: 'snackbar' } );
			},
		} );
	}

	useEffect( () => {
		if ( ! isSelected ) {
			setIsEditingImage( false );
		}
		if ( isSelected && isMediaDestroyed( id ) ) {
			onImageLoadError();
		}
	}, [ isSelected ] );

	const canEditImage = id && naturalWidth && naturalHeight && imageEditing;

	const controls = (
		<>
			<BlockControls group="block">
				{ externalBlob && (
					<ToolbarButton
						onClick={ uploadExternal }
						icon={ upload }
						label={ __( 'Upload external image' ) }
					/>
				) }
			</BlockControls>
			{ ! multiImageSelection && ! isEditingImage && (
				<BlockControls group="other">
					<MediaReplaceFlow
						mediaId={ id }
						mediaURL={ url }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						accept="image/*"
						onSelect={ onSelectImage }
						onSelectURL={ onSelectURL }
						onError={ onUploadError }
						onCloseModal={ onCloseModal }
					/>
				</BlockControls>
			) }
			<InspectorControls>
				<PanelBody title={ __( 'Image settings' ) }>
					{ ! multiImageSelection && (
						<TextareaControl
							label={ __( 'Alt text (alternative text)' ) }
							value={ alt }
							onChange={ updateAlt }
							help={
								<>
									<ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
										{ __(
											'Describe the purpose of the image'
										) }
									</ExternalLink>
									{ __(
										'Leave empty if the image is purely decorative.'
									) }
								</>
							}
						/>
					) }
					<ImageSizeControl
						onChangeImage={ updateImage }
						onChange={ ( value ) => setAttributes( value ) }
						slug={ sizeSlug }
						width={ width }
						height={ height }
						imageSizeOptions={ imageSizeOptions }
						imageWidth={ naturalWidth }
						imageHeight={ naturalHeight }
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls __experimentalGroup="advanced">
				<TextControl
					label={ __( 'Title attribute' ) }
					value={ title || '' }
					onChange={ onSetTitle }
					help={
						<>
							{ __(
								'Describe the role of this image on the page.'
							) }
							<ExternalLink href="https://www.w3.org/TR/html52/dom.html#the-title-attribute">
								{ __(
									'(Note: many devices and browsers do not display this text.)'
								) }
							</ExternalLink>
						</>
					}
				/>
			</InspectorControls>
		</>
	);

	const filename = getFilename( url );
	let defaultedAlt;

	if ( alt ) {
		defaultedAlt = alt;
	} else if ( filename ) {
		defaultedAlt = sprintf(
			/* translators: %s: file name */
			__( 'This image has an empty alt attribute; its file name is %s' ),
			filename
		);
	} else {
		defaultedAlt = __( 'This image has an empty alt attribute' );
	}

	let img = (
		// Disable reason: Image itself is not meant to be interactive, but
		// should direct focus to block.
		/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
		<>
			<img
				src={ temporaryURL || url }
				alt={ defaultedAlt }
				onLoad={ ( event ) => {
					setLoadedNaturalSize( {
						loadedNaturalWidth: event.target?.naturalWidth,
						loadedNaturalHeight: event.target?.naturalHeight,
					} );
				} }
				ref={ imageRef }
			/>
			{ temporaryURL && <Spinner /> }
		</>
		/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
	);

	let imageWidthWithinContainer;
	let imageHeightWithinContainer;

	if ( clientWidth && naturalWidth && naturalHeight ) {
		const exceedMaxWidth = naturalWidth > clientWidth;
		const ratio = naturalHeight / naturalWidth;
		imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
		imageHeightWithinContainer = exceedMaxWidth
			? clientWidth * ratio
			: naturalHeight;
	}

	if ( canEditImage && isEditingImage ) {
		img = (
			<ImageEditor
				url={ url }
				width={ width }
				height={ height }
				clientWidth={ clientWidth }
				naturalHeight={ naturalHeight }
				naturalWidth={ naturalWidth }
			/>
		);
	} else if ( ! imageWidthWithinContainer ) {
		img = <div style={ { width, height } }>{ img }</div>;
	} else {
		const currentWidth = width || imageWidthWithinContainer;
		const currentHeight = height || imageHeightWithinContainer;

		const ratio = naturalWidth / naturalHeight;
		const minWidth =
			naturalWidth < naturalHeight ? MIN_SIZE : MIN_SIZE * ratio;
		const minHeight =
			naturalHeight < naturalWidth ? MIN_SIZE : MIN_SIZE / ratio;

		// With the current implementation of ResizableBox, an image needs an
		// explicit pixel value for the max-width. In absence of being able to
		// set the content-width, this max-width is currently dictated by the
		// vanilla editor style. The following variable adds a buffer to this
		// vanilla style, so 3rd party themes have some wiggleroom. This does,
		// in most cases, allow you to scale the image beyond the width of the
		// main column, though not infinitely.
		// @todo It would be good to revisit this once a content-width variable
		// becomes available.
		const maxWidthBuffer = maxWidth * 2.5;

		let showRightHandle = false;
		let showLeftHandle = false;

		img = (
			<ResizableBox
				size={ {
					width: width ?? 'auto',
					height: height ?? 'auto',
				} }
				showHandle={ isSelected }
				minWidth={ minWidth }
				maxWidth={ maxWidthBuffer }
				minHeight={ minHeight }
				maxHeight={ maxWidthBuffer / ratio }
				lockAspectRatio
				enable={ {
					top: false,
					right: false,
					bottom: false,
					left: false,
				} }
			>
				{ img }
			</ResizableBox>
		);
	}

	return (
		<ImageEditingProvider
			id={ id }
			url={ url }
			naturalWidth={ naturalWidth }
			naturalHeight={ naturalHeight }
			clientWidth={ clientWidth }
			onSaveImage={ ( imageAttributes ) =>
				setAttributes( imageAttributes )
			}
			isEditing={ isEditingImage }
			onFinishEditing={ () => setIsEditingImage( false ) }
		>
			{ /* Hide controls during upload to avoid component remount,
				which causes duplicated image upload. */ }
			{ ! temporaryURL && controls }
			{ img }
		</ImageEditingProvider>
	);
}
