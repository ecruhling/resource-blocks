/**
 * Internal dependencies
 */
import {
	createUpgradedEmbedBlock,
	fallback,
	getAttributesFromPreview,
	getEmbedInfoByProvider,
} from './util';
import EmbedControls from './embed-controls';
import { embedContentIcon } from './icons';
import EmbedLoading from './embed-loading';
import EmbedPlaceholder from './embed-placeholder';
import EmbedPreview from './embed-preview';

/**
 * External dependencies
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __, _x, sprintf } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { View } from '@wordpress/primitives';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

const EmbedEdit = ( props ) => {
	const {
		attributes: {
			providerNameSlug,
			previewable,
			url: attributesUrl,
			autoplay,
		},
		attributes,
		isSelected,
		onReplace,
		setAttributes,
		insertBlocksAfter,
		onFocus,
	} = props;

	const defaultEmbedInfo = {
		title: _x( 'Embed', 'block title' ),
		icon: embedContentIcon,
	};
	const { icon, title } =
		getEmbedInfoByProvider( providerNameSlug ) || defaultEmbedInfo;

	const [ url, setURL ] = useState( attributesUrl );
	const [ isEditingURL, setIsEditingURL ] = useState( false );
	const { invalidateResolution } = useDispatch( coreStore );

	const { preview, fetching, cannotEmbed } = useSelect(
		( select ) => {
			const {
				getEmbedPreview,
				isPreviewEmbedFallback,
				isRequestingEmbedPreview,
			} = select( coreStore );
			if ( ! attributesUrl ) {
				return { fetching: false, cannotEmbed: false };
			}

			const embedPreview = getEmbedPreview( attributesUrl );
			const previewIsFallback = isPreviewEmbedFallback( attributesUrl );

			// The external oEmbed provider does not exist. We got no type info and no html.
			const badEmbedProvider =
				embedPreview?.html === false &&
				embedPreview?.type === undefined;
			// Some WordPress URLs that can't be embedded will cause the API to return
			// a valid JSON response with no HTML and `data.status` set to 404, rather
			// than generating a fallback response as other embeds do.
			const wordpressCantEmbed = embedPreview?.data?.status === 404;
			const validPreview =
				!! embedPreview && ! badEmbedProvider && ! wordpressCantEmbed;
			return {
				preview: validPreview ? embedPreview : undefined,
				fetching: isRequestingEmbedPreview( attributesUrl ),
				cannotEmbed: ! validPreview || previewIsFallback,
			};
		},
		[ attributesUrl ]
	);

	/**
	 * @return {Object} Attributes derived from the preview, merged with the current attributes.
	 */
	const getMergedAttributes = () => {
		const { className } = attributes;
		return {
			...attributes,
			...getAttributesFromPreview( preview, title, className ),
		};
	};

	useEffect( () => {
		if ( ! preview?.html || ! cannotEmbed || fetching ) {
			return;
		}
		// At this stage, we're not fetching the preview and know it can't be embedded,
		// so try removing any trailing slash, and resubmit.
		const newURL = attributesUrl.replace( /\/$/, '' );
		setURL( newURL );
		setIsEditingURL( false );
		setAttributes( { url: newURL } );
	}, [ preview?.html, attributesUrl ] );

	// Handle incoming preview
	useEffect( () => {
		if ( preview && ! isEditingURL ) {
			// Even though we set attributes that get derived from the preview,
			// we don't access them directly because for the initial render,
			// the `setAttributes` call will not have taken effect. If we're
			// rendering responsive content, setting the responsive classes
			// after the preview has been rendered can result in unwanted
			// clipping or scrollbars. The `getAttributesFromPreview` function
			// that `getMergedAttributes` uses is memoized so that we're not
			// calculating them on every render.
			setAttributes( getMergedAttributes() );
			if ( onReplace ) {
				const upgradedBlock = createUpgradedEmbedBlock(
					props,
					getMergedAttributes()
				);

				if ( upgradedBlock ) {
					onReplace( upgradedBlock );
				}
			}
		}
	}, [ preview, isEditingURL ] );

	const blockProps = useBlockProps( {
		className: 'resource-blocks-row',
	} );

	if ( fetching ) {
		return (
			<View { ...blockProps }>
				<EmbedLoading />
			</View>
		);
	}

	// eslint-disable-next-line @wordpress/valid-sprintf
	const label = sprintf( __( 'Full-width Video' ), title );

	// No preview, or we can't embed the current URL, or we've clicked the edit button.
	const showEmbedPlaceholder = ! preview || cannotEmbed || isEditingURL;

	if ( showEmbedPlaceholder ) {
		return (
			<View { ...blockProps }>
				<div className="resource-blocks-column">
					<EmbedPlaceholder
						icon={ icon }
						label={ label }
						onFocus={ onFocus }
						onSubmit={ ( event ) => {
							if ( event ) {
								event.preventDefault();
							}

							setIsEditingURL( false );
							setAttributes( { url } );
						} }
						value={ url }
						cannotEmbed={ cannotEmbed }
						onChange={ ( event ) => setURL( event.target.value ) }
						fallback={ () => fallback( url, onReplace ) }
						tryAgain={ () => {
							invalidateResolution( 'getEmbedPreview', [ url ] );
						} }
					/>
				</div>
			</View>
		);
	}

	// Even though we set attributes that get derived from the preview,
	// we don't access them directly because for the initial render,
	// the `setAttributes` call will not have taken effect. If we're
	// rendering responsive content, setting the responsive classes
	// after the preview has been rendered can result in unwanted
	// clipping or scrollbars. The `getAttributesFromPreview` function
	// that `getMergedAttributes` uses is memoized so that we're not
	// calculating them on every render.
	const { type, className: classFromPreview } = getMergedAttributes();
	const className = classnames( classFromPreview, props.className );

	return (
		<>
			<EmbedControls
				showEditButton={ preview && ! cannotEmbed }
				switchBackToURLInput={ () => setIsEditingURL( true ) }
			/>
			<InspectorControls>
				<PanelBody title={ __( 'Video attributes' ) }>
					<PanelRow>
						<ToggleControl
							label="Autoplay video?"
							help={
								autoplay
									? 'Autoplay the video in a loop.'
									: 'Do not autoplay the video.'
							}
							checked={ autoplay }
							onChange={ ( value ) => {
								setAttributes( {
									autoplay: value,
								} );
							} }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<View { ...blockProps }>
				<div className="resource-blocks-column">
					<EmbedPreview
						preview={ preview }
						previewable={ previewable }
						className={ className }
						url={ url }
						type={ type }
						isSelected={ isSelected }
						icon={ icon }
						label={ label }
						insertBlocksAfter={ insertBlocksAfter }
					/>
				</div>
			</View>
		</>
	);
};

export default EmbedEdit;
