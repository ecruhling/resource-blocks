/**
 * WordPress dependencies.
 */
import {
	Fill,
	ExternalLink,
	PanelBody,
	Spinner,
	TextareaControl,
	TextControl,
} from '@wordpress/components';
import { usePrevious } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	RichText,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalImageURLInputUI as ImageURLInputUI,
	MediaReplaceFlow,
	BlockAlignmentControl,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import { useEffect, useState, useRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { getFilename } from '@wordpress/url';
import { createBlock } from '@wordpress/blocks';
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
		alignCaption,
		id,
		href,
		rel,
		linkClass,
		linkDestination,
		title,
		width,
		height,
		designWidth,
		designHeight,
		linkTarget,
	},
	setAttributes,
	isSelected,
	insertBlocksAfter,
	onCloseModal,
	onSelectImage,
	onSelectURL,
	onUploadError,
	onImageLoadError,
} ) {
	const imageRef = useRef();
	const captionRef = useRef();
	const prevUrl = usePrevious( url );

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

	const [ isEditingImage, setIsEditingImage ] = useState( false );

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
			</BlockControls>
			{ ! isEditingImage && (
				<BlockControls group="other">
					<div className={ 'components-toolbar-image-constrained' }>
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
					</div>
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

	// caption controls are filled into the Toolbar, placed
	// after the link button on the toolbar
	const captionControls = (
		<Fill name="RichText.ToolbarControls.link">
			<AlignmentToolbar
				value={ alignCaption }
				onChange={ ( newAlignCaption ) =>
					setAttributes( { alignCaption: newAlignCaption } )
				}
			/>
		</Fill>
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
				data-design-width={ designWidth }
				data-design-height={ designHeight }
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
			{ isSelected && captionControls }
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
					inlineToolbar={ true }
					__unstableOnSplitAtEnd={ () =>
						insertBlocksAfter( createBlock( 'core/paragraph' ) )
					}
				/>
			) }
		</>
	);
}
