/**
 * External dependencies.
 */
import { pick } from 'lodash';

/**
 * WordPress dependencies.
 */
import { isBlobURL } from '@wordpress/blob';
import {
	ExternalLink,
	PanelBody,
	Spinner,
	TextareaControl,
	TextControl,
	ToolbarButton,
} from '@wordpress/components';
import { usePrevious } from '@wordpress/compose';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	RichText,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalImageURLInputUI as ImageURLInputUI,
	MediaReplaceFlow,
	store as blockEditorStore,
	BlockAlignmentControl,
} from '@wordpress/block-editor';
import { useEffect, useState, useRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { getFilename } from '@wordpress/url';
import { createBlock, switchToBlockType } from '@wordpress/blocks';
import { overlayText, upload } from '@wordpress/icons';
import { store as noticesStore } from '@wordpress/notices';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies.
 */
import { isMediaDestroyed } from './edit';

export default function Image( {
	temporaryURL,
	attributes: {
		url = '',
		alt,
		caption,
		align,
		id,
		href,
		rel,
		linkClass,
		linkDestination,
		title,
		width,
		imageWidthInsideContainer,
		height,
		linkTarget,
	},
	setAttributes,
	isSelected,
	insertBlocksAfter,
	onCloseModal,
	onSelectImage,
	onSelectURL,
	onUploadError,
	clientId,
	onImageLoadError,
} ) {
	const imageRef = useRef();
	const captionRef = useRef();
	const prevUrl = usePrevious( url );
	const { getBlock } = useSelect( blockEditorStore, [] );

	const { image } = useSelect(
		( select ) => {
			const { getMedia } = select( coreStore );
			return {
				image:
					id && isSelected
						? getMedia( id, { context: 'view' } )
						: null,
			};
		},
		[ id, isSelected ]
	);

	const { canInsertCover, mediaUpload } = useSelect(
		( select ) => {
			const {
				getBlockRootClientId,
				getSettings,
				canInsertBlockType,
			} = select( blockEditorStore );

			const rootClientId = getBlockRootClientId( clientId );
			const settings = pick( getSettings(), [
				'imageSizes',
				'mediaUpload',
			] );

			return {
				...settings,
				canInsertCover: canInsertBlockType(
					'core/cover',
					rootClientId
				),
			};
		},
		[ clientId ]
	);

	const { replaceBlocks } = useDispatch( blockEditorStore );

	const { createErrorNotice, createSuccessNotice } = useDispatch(
		noticesStore
	);

	const [ isEditingImage, setIsEditingImage ] = useState( false );

	const [ externalBlob, setExternalBlob ] = useState();

	// Focus the caption after inserting an image from the placeholder. This is
	// done to preserve the behaviour of focussing the first tabbable element
	// when a block is mounted. Previously, the image block would remount when
	// the placeholder is removed. Maybe this behaviour could be removed.
	useEffect( () => {
		if ( url && ! prevUrl && isSelected ) {
			captionRef.current.focus();
		}
	}, [ url, prevUrl ] );

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
			allowedTypes: [ 'image' ],
			onError( message ) {
				createErrorNotice( message, { type: 'snackbar' } );
			},
		} );
	}

	function updateAlignment( nextAlign ) {
		const extraUpdatedAttributes = [ 'wide', 'full' ].includes( nextAlign )
			? { width: undefined, height: undefined }
			: {};
		if ( ! nextAlign ) {
			nextAlign = 'none';
		}
		setAttributes( {
			...extraUpdatedAttributes,
			align: nextAlign,
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

	function switchToCover() {
		replaceBlocks(
			clientId,
			switchToBlockType( getBlock( clientId ), 'core/cover' )
		);
	}

	const controls = (
		<>
			<BlockControls group="block">
				<BlockAlignmentControl
					value={ align }
					onChange={ updateAlignment }
				/>
				{ ! isEditingImage && (
					<ImageURLInputUI
						url={ href || '' }
						onChangeUrl={ onSetHref }
						linkDestination={ linkDestination }
						mediaUrl={ ( image && image.source_url ) || url }
						mediaLink={ image && image.link }
						linkTarget={ linkTarget }
						linkClass={ linkClass }
						rel={ rel }
					/>
				) }
				{ externalBlob && (
					<ToolbarButton
						onClick={ uploadExternal }
						icon={ upload }
						label={ __( 'Upload external image' ) }
					/>
				) }
				{ canInsertCover && (
					<ToolbarButton
						icon={ overlayText }
						label={ __( 'Add text over image' ) }
						onClick={ switchToCover }
					/>
				) }
			</BlockControls>
			{ ! isEditingImage && (
				<BlockControls group="other">
					<MediaReplaceFlow
						mediaId={ id }
						mediaURL={ url }
						allowedTypes={ [ 'image' ] }
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

	const img = (
		// Disable reason: Image itself is not meant to be interactive, but
		// should direct focus to block.
		/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
		<>
			<img
				src={ temporaryURL || url }
				alt={ defaultedAlt }
				width={ width }
				height={ height }
				ref={ imageRef }
			/>
			{ temporaryURL && <Spinner /> }
		</>
		/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
	);

	return (
		<>
			{ /* Hide controls during upload to avoid component remount,
				which causes duplicated image upload. */ }
			{ ! temporaryURL && controls }
			{ img }
			{ ( ! RichText.isEmpty( caption ) || isSelected ) && (
				<RichText
					ref={ captionRef }
					tagName="figcaption"
					aria-label={ __( 'Image caption text' ) }
					placeholder={ __( 'Add caption' ) }
					value={ caption }
					onChange={ ( value ) =>
						setAttributes( { caption: value } )
					}
					inlineToolbar
					__unstableOnSplitAtEnd={ () =>
						insertBlocksAfter( createBlock( 'core/paragraph' ) )
					}
				/>
			) }
		</>
	);
}
