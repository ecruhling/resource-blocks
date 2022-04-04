/**
 * External dependencies
 */
import classnames from 'classnames';
import { get, has, omit, pick } from 'lodash';

/**
 * WordPress dependencies.
 */
import { isBlobURL } from '@wordpress/blob';
import {
	BlockAlignmentControl,
	BlockControls,
	MediaPlaceholder,
	useBlockProps,
} from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';

/**
 * Import editor styles.
 */
import './editor.scss';
import { BlockIcon } from '@wordpress/block-editor/build/components';

/**
 * Is this a temporary media object?
 *
 * @param {number} id
 * @param {string} url
 *
 * @return {boolean} true/false.
 */
const isTemporaryMedia = ( id, url ) => ! id && isBlobURL( url );

/**
 * Edit function.
 *
 * @param {WPElement} root0
 * @param {WPElement} root0.attributes
 * @param {WPElement} root0.setAttributes
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, className } ) {
	const {
		url = '',
		alt,
		caption,
		align,
		id,
		width,
		designWidth,
		height,
		designHeight,
		sizeSlug,
	} = attributes;

	const [ temporaryURL, setTemporaryURL ] = useState();

	const ref = useRef();

	const isUploadingMedia = isTemporaryMedia( id, url );

	const setImageAttributes = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( {
				url: null,
				id: null,
				alt: null,
			} );
			return;
		}
		setAttributes( {
			url: media.url,
			id: media.id,
			alt: media?.alt,
		} );
	};

	const classes = classnames( className, {
		'is-transient': temporaryURL,
		'is-resized': !! width || !! height,
		[ `size-${ sizeSlug }` ]: sizeSlug,
	} );

	const blockProps = useBlockProps( {
		ref,
		className: classes,
	} );

	return (
		<>
			<figure { ...blockProps }>
				{ ( temporaryURL || url ) && (
					<Image
						temporaryURL={ temporaryURL }
						attributes={ attributes }
						setAttributes={ setAttributes }
						isSelected={ isSelected }
						insertBlocksAfter={ insertBlocksAfter }
						onReplace={ onReplace }
						onSelectImage={ onSelectImage }
						onSelectURL={ onSelectURL }
						onUploadError={ onUploadError }
						containerRef={ ref }
						context={ context }
						clientId={ clientId }
						onCloseModal={ onCloseModal }
						onImageLoadError={ onImageError }
					/>
				) }
				{ ! url && (
					<BlockControls group="block">
						<BlockAlignmentControl
							value={ align }
							onChange={ updateAlignment }
						/>
					</BlockControls>
				) }
				<MediaPlaceholder
					icon={ <BlockIcon icon={ icon } /> }
					onSelect={ onSelectImage }
					onSelectURL={ onSelectURL }
					notices={ noticeUI }
					onError={ onUploadError }
					onClose={ onCloseModal }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					value={ { id, src } }
					mediaPreview={ mediaPreview }
					disableMediaButtons={ temporaryURL || url }
				/>
			</figure>
		</>
	);
}
