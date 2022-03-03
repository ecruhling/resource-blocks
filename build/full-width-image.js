/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/upload.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/upload.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const upload = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (upload);
//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-image/constants.js":
/*!********************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-image/constants.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WIDTH": function() { return /* binding */ WIDTH; },
/* harmony export */   "ALLOWED_MEDIA_TYPES": function() { return /* binding */ ALLOWED_MEDIA_TYPES; }
/* harmony export */ });
const WIDTH = 2040;
const ALLOWED_MEDIA_TYPES = ['image'];

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-image/edit.js":
/*!***************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-image/edit.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pickRelevantMediaFiles": function() { return /* binding */ pickRelevantMediaFiles; },
/* harmony export */   "ImageEdit": function() { return /* binding */ ImageEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../icons/icons */ "./includes/icons/icons.js");
/* harmony import */ var _lib_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/image */ "./includes/block-editor/blocks/lib/image.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.scss */ "./includes/block-editor/blocks/full-width-image/editor.scss");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./includes/block-editor/blocks/full-width-image/constants.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Module constants
 */


const pickRelevantMediaFiles = (image, size) => {
  const imageProps = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pick)(image, ['alt', 'id']);
  imageProps.url = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(image, ['sizes', size, 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(image, ['media_details', 'sizes', size, 'source_url']) || image.url;
  return imageProps;
};
/**
 * Is the URL a temporary blob URL? A blob URL is one that is used temporarily
 * while the image is being uploaded and will not have an id yet allocated.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the URL a Blob URL
 */

const isTemporaryImage = (id, url) => !id && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url);
/**
 * Checks if WP generated default image size. Size generation is skipped
 * when the image is smaller than the said size.
 *
 * @param {Object} image
 * @param {string} defaultSize
 *
 * @return {boolean} Whether or not it has default image size.
 */


function hasDefaultSize(image, defaultSize) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.has)(image, ['sizes', defaultSize, 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_2__.has)(image, ['media_details', 'sizes', defaultSize, 'source_url']);
}
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @param  root0.isSelected
 * @param  root0.className
 * @param  root0.noticeUI
 * @param  root0.insertBlocksAfter
 * @param  root0.noticeOperations
 * @param  root0.onReplace
 * @param  root0.context
 * @param  root0.clientId
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */


function ImageEdit(_ref) {
  let {
    attributes,
    setAttributes,
    isSelected,
    className,
    noticeUI,
    insertBlocksAfter,
    noticeOperations,
    onReplace,
    context,
    clientId
  } = _ref;
  const {
    url = '',
    alt,
    id,
    width,
    height
  } = attributes;
  const [temporaryURL, setTemporaryURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const altRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    altRef.current = alt;
  }, [alt]);
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    mediaUpload
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pick)(getSettings(), ['mediaUpload']);
  }, []); // A callback passed to MediaUpload,
  // fired when the media modal closes.

  function onCloseModal() {
    if ((0,_lib_image__WEBPACK_IMPORTED_MODULE_9__.isMediaDestroyed)(attributes === null || attributes === void 0 ? void 0 : attributes.id)) {
      setAttributes({
        url: undefined,
        id: undefined
      });
    }
  }
  /*
  	 Runs an error callback if the image does not load.
  	 If the error callback is triggered, we infer that that image
  	 has been deleted.
  */


  function onImageError() {
    let isReplaced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    // If the image block was not replaced with an embed,
    // clear the attributes and trigger the placeholder.
    if (!isReplaced) {
      setAttributes({
        url: undefined,
        id: undefined
      });
    }
  }

  function onUploadError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  }
  /**
   * Image selected.
   *
   * @param  media
   */


  function onSelectImage(media) {
    var _media$width;

    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        alt: undefined,
        id: undefined,
        title: undefined
      });
      return;
    }

    if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(media.url)) {
      setTemporaryURL(media.url);
      return;
    }

    setTemporaryURL();
    const mediaAttributes = pickRelevantMediaFiles(media, 'full');
    let additionalAttributes; // Reset the dimension attributes if changing to a different image.

    if (!media.id || media.id !== id) {
      additionalAttributes = {
        width: undefined,
        height: undefined // Fallback to size "full" if there's no default image size.

      };
    } else {
      // Keep the same url when selecting the same file, so "Image Size"
      // option is not changed.
      additionalAttributes = {
        url
      };
    } // Check for minimum width.
    // Selecting a new image from the Media Library uses media.width,
    // Uploading a new image uses media.media_details.width


    const widthCheck = (_media$width = media.width) !== null && _media$width !== void 0 ? _media$width : media.media_details.width;

    if (widthCheck !== _constants__WEBPACK_IMPORTED_MODULE_11__.WIDTH) {
      openModal();
      return;
    }

    setAttributes({ ...mediaAttributes,
      ...additionalAttributes
    });
  }

  function onSelectURL(newURL) {
    if (newURL !== url) {
      setAttributes({
        url: newURL,
        id: undefined,
        width: undefined,
        height: undefined
      });
    }
  }

  const [modalIsOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  let isTemp = isTemporaryImage(id, url); // Upload a temporary image on mount.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isTemp) {
      return;
    }

    const file = (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.getBlobByURL)(url);

    if (file) {
      mediaUpload({
        filesList: [file],
        onFileChange: _ref2 => {
          let [img] = _ref2;
          onSelectImage(img);
        },
        allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_11__.ALLOWED_MEDIA_TYPES,
        onError: message => {
          isTemp = false;
          noticeOperations.createErrorNotice(message);
          setAttributes({
            src: undefined,
            id: undefined,
            url: undefined
          });
        }
      });
    }
  }, []); // If an image is temporary, revoke the Blob url when it is uploaded (and is
  // no longer temporary).

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isTemp) {
      setTemporaryURL(url);
      return;
    }

    (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.revokeBlobURL)(temporaryURL);
  }, [isTemp, url]);
  const isExternal = (0,_lib_image__WEBPACK_IMPORTED_MODULE_9__.isExternalImage)(id, url);
  const src = isExternal ? url : undefined;
  const mediaPreview = !!url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Edit image'),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Edit image'),
    className: 'edit-image-preview',
    src: url
  });
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'resource-blocks-row', {
    'is-transient': temporaryURL,
    'is-resized': !!width || !!height
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)({
    ref,
    className: classes
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'resource-blocks-column'
  }, (temporaryURL || url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_lib_image__WEBPACK_IMPORTED_MODULE_9__["default"], {
    temporaryURL: temporaryURL,
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected,
    insertBlocksAfter: insertBlocksAfter,
    onReplace: onReplace,
    onSelectImage: onSelectImage,
    onSelectURL: onSelectURL,
    onUploadError: onUploadError,
    containerRef: ref,
    context: context,
    clientId: clientId,
    onCloseModal: onCloseModal,
    onImageLoadError: onImageError
  }), modalIsOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    contentLabel: "Error",
    title: "Error"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Image must be ", _constants__WEBPACK_IMPORTED_MODULE_11__.WIDTH, "px wide! Choose another image.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockIcon, {
      icon: _icons_icons__WEBPACK_IMPORTED_MODULE_8__["default"].image_full_width
    }),
    onSelect: onSelectImage,
    notices: noticeUI,
    onError: onUploadError,
    onClose: onCloseModal,
    accept: "image/*",
    allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_11__.ALLOWED_MEDIA_TYPES,
    value: {
      id,
      src
    },
    mediaPreview: mediaPreview,
    labels: {
      title: 'Full-width Image',
      instructions: 'Upload an image, or pick one from the media library. Image must be ' + _constants__WEBPACK_IMPORTED_MODULE_11__.WIDTH + 'px wide. 870px is an appropriate height, but it is not enforced.'
    },
    disableMediaButtons: temporaryURL || url
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withNotices)(ImageEdit));

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-image/index.js":
/*!****************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-image/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icons/icons */ "./includes/icons/icons.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./includes/block-editor/blocks/full-width-image/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./includes/block-editor/blocks/full-width-image/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./includes/block-editor/blocks/full-width-image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./includes/block-editor/blocks/full-width-image/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 // import SVG icons

 // self-invoking function creates custom icon for block-category

(function () {
  wp.blocks.updateCategory('resource-blocks', {
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["default"].resource
  });
})();
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */




const {
  name,
  ...settings
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, { ...settings,
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_1__["default"].image_full_width,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-image/save.js":
/*!***************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-image/save.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    url,
    alt,
    width,
    height,
    id,
    title
  } = attributes;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('resource-blocks-row');
  const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt,
    className: id ? `wp-image-${id}` : ``,
    width: width,
    height: height,
    title: title
  });
  const figure = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, image);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: classes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'resource-blocks-column'
  }, figure));
}

/***/ }),

/***/ "./includes/block-editor/blocks/lib/constants.js":
/*!*******************************************************!*\
  !*** ./includes/block-editor/blocks/lib/constants.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOWED_MEDIA_TYPES": function() { return /* binding */ ALLOWED_MEDIA_TYPES; }
/* harmony export */ });
const ALLOWED_MEDIA_TYPES = ['image'];

/***/ }),

/***/ "./includes/block-editor/blocks/lib/image.js":
/*!***************************************************!*\
  !*** ./includes/block-editor/blocks/lib/image.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExternalImage": function() { return /* binding */ isExternalImage; },
/* harmony export */   "isMediaDestroyed": function() { return /* binding */ isMediaDestroyed; },
/* harmony export */   "default": function() { return /* binding */ Image; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/upload.js");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _use_client_width__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./use-client-width */ "./includes/block-editor/blocks/lib/use-client-width.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./includes/block-editor/blocks/lib/constants.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */


/**
 * Is the url for the image hosted externally. An externally hosted image has no
 * id and is not a blob url.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the url an externally hosted url?
 */

const isExternalImage = (id, url) => url && !id && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__.isBlobURL)(url);
/**
 * Checks if a media attachment object has been "destroyed",
 * that is, removed from the media library. The core Media Library
 * adds a `destroyed` property to a deleted attachment object in the media collection.
 *
 * @param {number} id The attachment id.
 *
 * @return {boolean} Whether the image has been destroyed.
 */

function isMediaDestroyed(id) {
  var _wp, _wp$media;

  const attachment = ((_wp = wp) === null || _wp === void 0 ? void 0 : (_wp$media = _wp.media) === null || _wp$media === void 0 ? void 0 : _wp$media.attachment(id)) || {};
  return attachment.destroyed;
}
/**
 * Module constants
 */


function Image(_ref) {
  var _imageRef$current3;

  let {
    temporaryURL,
    attributes: {
      url = '',
      alt,
      id,
      title,
      width,
      height
    },
    setAttributes,
    isSelected,
    onCloseModal,
    onSelectImage,
    onSelectURL,
    onUploadError,
    containerRef,
    clientId,
    onImageLoadError
  } = _ref;
  const imageRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    image,
    multiImageSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getMedia
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_9__.store);
    const {
      getMultiSelectedBlockClientIds,
      getBlockName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    const multiSelectedClientIds = getMultiSelectedBlockClientIds();
    return {
      image: id && isSelected ? getMedia(id) : null,
      multiImageSelection: multiSelectedClientIds.length && multiSelectedClientIds.every(_clientId => getBlockName(_clientId) === 'core/image')
    };
  }, [id, isSelected]);
  const {
    imageSizes,
    mediaUpload
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    const settings = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pick)(getSettings(), ['imageSizes', 'mediaUpload']);
    return { ...settings
    };
  }, [clientId]);
  const {
    createErrorNotice,
    createSuccessNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__.store);
  const [{
    loadedNaturalWidth,
    loadedNaturalHeight
  }, setLoadedNaturalSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isEditingImage, setIsEditingImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [externalBlob, setExternalBlob] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const clientWidth = (0,_use_client_width__WEBPACK_IMPORTED_MODULE_10__["default"])(containerRef, []);
  const imageSizeOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(imageSizes, _ref2 => {
    let {
      slug
    } = _ref2;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ['media_details', 'sizes', slug, 'source_url']);
  }), _ref3 => {
    let {
      name,
      slug
    } = _ref3;
    return {
      value: slug,
      label: name
    };
  }); // If an image is externally hosted, try to fetch the image data. This may
  // fail if the image host doesn't allow CORS with the domain. If it works,
  // we can enable a button in the toolbar to upload the image.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isExternalImage(id, url) || !isSelected || externalBlob) {
      return;
    }

    window.fetch(url).then(response => response.blob()).then(blob => setExternalBlob(blob)) // Do nothing, cannot upload.
    .catch(() => {});
  }, [id, url, isSelected, externalBlob]); // Get naturalWidth and naturalHeight from image ref, and fall back to loaded natural
  // width and height. This resolves an issue in Safari where the loaded natural
  // width and height is otherwise lost when switching between alignments.
  // See: https://github.com/WordPress/gutenberg/pull/37210.

  const {
    naturalWidth,
    naturalHeight
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _imageRef$current, _imageRef$current2;

    return {
      naturalWidth: ((_imageRef$current = imageRef.current) === null || _imageRef$current === void 0 ? void 0 : _imageRef$current.naturalWidth) || loadedNaturalWidth || undefined,
      naturalHeight: ((_imageRef$current2 = imageRef.current) === null || _imageRef$current2 === void 0 ? void 0 : _imageRef$current2.naturalHeight) || loadedNaturalHeight || undefined
    };
  }, [loadedNaturalWidth, loadedNaturalHeight, (_imageRef$current3 = imageRef.current) === null || _imageRef$current3 === void 0 ? void 0 : _imageRef$current3.complete]);

  function onSetTitle(value) {
    // This is the HTML title attribute, separate from the media object
    // title.
    setAttributes({
      title: value
    });
  }

  function updateAlt(newAlt) {
    setAttributes({
      alt: newAlt
    });
  }

  function uploadExternal() {
    mediaUpload({
      filesList: [externalBlob],

      onFileChange(_ref4) {
        let [img] = _ref4;
        onSelectImage(img);

        if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__.isBlobURL)(img.url)) {
          return;
        }

        setExternalBlob();
        createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Image uploaded.'), {
          type: 'snackbar'
        });
      },

      allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_11__.ALLOWED_MEDIA_TYPES,

      onError(message) {
        createErrorNotice(message, {
          type: 'snackbar'
        });
      }

    });
  }

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSelected) {
      setIsEditingImage(false);
    }

    if (isSelected && isMediaDestroyed(id)) {
      onImageLoadError();
    }
  }, [isSelected]);
  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, {
    group: "block"
  }, externalBlob && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    onClick: uploadExternal,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Upload external image')
  })), !multiImageSelection && !isEditingImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, {
    group: "other"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaReplaceFlow, {
    mediaId: id,
    mediaURL: url,
    allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_11__.ALLOWED_MEDIA_TYPES,
    accept: "image/*",
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    onError: onUploadError,
    onCloseModal: onCloseModal
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Image settings')
  }, !multiImageSelection && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Alt text (alternative text)'),
    value: alt,
    onChange: updateAlt,
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Describe the purpose of the image')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Leave empty if the image is purely decorative.'))
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
    __experimentalGroup: "advanced"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Title attribute'),
    value: title || '',
    onChange: onSetTitle,
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Describe the role of this image on the page.'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
      href: "https://www.w3.org/TR/html52/dom.html#the-title-attribute"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('(Note: many devices and browsers do not display this text.)')))
  })));
  const filename = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_7__.getFilename)(url);
  let defaultedAlt;

  if (alt) {
    defaultedAlt = alt;
  } else if (filename) {
    defaultedAlt = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.sprintf)(
    /* translators: %s: file name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('This image has an empty alt attribute; its file name is %s'), filename);
  } else {
    defaultedAlt = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('This image has an empty alt attribute');
  }

  let img = // Disable reason: Image itself is not meant to be interactive, but
  // should direct focus to block.

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: temporaryURL || url,
    alt: defaultedAlt,
    onLoad: event => {
      var _event$target, _event$target2;

      setLoadedNaturalSize({
        loadedNaturalWidth: (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.naturalWidth,
        loadedNaturalHeight: (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.naturalHeight
      });
    },
    ref: imageRef
  }), temporaryURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null))
  /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  ;
  let imageWidthWithinContainer;
  let imageHeightWithinContainer;

  if (clientWidth && naturalWidth && naturalHeight) {
    const exceedMaxWidth = naturalWidth > clientWidth;
    const ratio = naturalHeight / naturalWidth;
    imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
    imageHeightWithinContainer = exceedMaxWidth ? clientWidth * ratio : naturalHeight;
  }

  img = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    style: {
      width,
      height
    }
  }, img);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalImageEditingProvider, {
    id: id,
    url: url,
    naturalWidth: naturalWidth,
    naturalHeight: naturalHeight,
    clientWidth: clientWidth,
    onSaveImage: imageAttributes => setAttributes(imageAttributes),
    isEditing: isEditingImage,
    onFinishEditing: () => setIsEditingImage(false)
  }, !temporaryURL && controls, img);
}

/***/ }),

/***/ "./includes/block-editor/blocks/lib/use-client-width.js":
/*!**************************************************************!*\
  !*** ./includes/block-editor/blocks/lib/use-client-width.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useClientWidth; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function useClientWidth(ref, dependencies) {
  const [clientWidth, setClientWidth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();

  function calculateClientWidth() {
    setClientWidth(ref.current.clientWidth);
  }

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(calculateClientWidth, dependencies);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      defaultView
    } = ref.current.ownerDocument;
    defaultView.addEventListener('resize', calculateClientWidth);
    return () => {
      defaultView.removeEventListener('resize', calculateClientWidth);
    };
  }, []);
  return clientWidth;
}

/***/ }),

/***/ "./includes/icons/icons.js":
/*!*********************************!*\
  !*** ./includes/icons/icons.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.resource = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "20",
  viewBox: "0 0 11 20",
  width: "11",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#231f20"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m2.4 17.96h.38l.93 2.04h-.48l-.18-.43h-.93l-.18.43h-.46zm-.13 1.26h.63l-.3-.72h-.02c0-.01-.31.72-.31.72z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m4.59 17.96h1.88v.39h-.72v1.65h-.44v-1.65h-.72z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m8.34 17.96v1.65h1.18v.39h-1.61v-2.04z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m1.48 15.26h8.04v.52h-8.04z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0 .03c1.21.03 2.75-.03 4.24-.03 2.03 0 4.41.39 4.41 2.91 0 1.38-1.16 2.85-3.27 2.94 1.53.16 2.34.88 2.84 2.46.75 2.31 1.18 3.03 2.72 2.97l.06.22c-.47.24-.99.35-1.52.33-1.6 0-2.4-1.35-2.88-3.13-.63-2.34-1.91-2.61-3.54-2.61v1.45c0 1.36.03 2.88.03 2.88 0 .54.21.66.88.75l.88.11v.35h-4.85v-.35l.74-.11c.46-.08.74-.21.74-.75 0 0 .01-.72.01-2.88v-3.57c0-1.25-.01-2.17-.01-2.74 0-.54-.28-.67-.74-.75l-.74-.11zm3.06 5.64h.87c2.23 0 3.09-1.08 3.09-2.71 0-2.05-1.6-2.4-3.07-2.4-.3-.01-.59.02-.88.06-.01 0-.01 5.05-.01 5.05z"
})));
icons.intro_paragraph = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m23.1 0c.5 0 .9.4.9.9v5.1c0 .5-.4.9-.9.9h-1.7c-.5 0-.9-.4-.9-.9v-1.7h-6.4v16.3h2.1c.5 0 .9.4.9.9v1.7c0 .5-.4.9-.9.9h-8.5c-.5 0-.9-.4-.9-.9v-1.7c0-.5.4-.9.9-.9h2.1v-16.3h-6.4v1.7c0 .5-.4.9-.9.9h-1.6c-.5 0-.9-.4-.9-.9v-5.1c0-.5.4-.9.9-.9z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0 0h24v24h-24z",
  fill: "none"
}));
icons.body_text = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m.7 17.1h19.1c.4 0 .7-.3.7-.7v-2.1c0-.4-.3-.7-.7-.7h-19.1c-.4.1-.7.4-.7.8v2.1c0 .3.3.6.7.6zm0-13.7h14.1c.4 0 .7-.3.7-.7v-2c0-.4-.3-.7-.7-.7h-14.1c-.4 0-.7.3-.7.7v2.1c0 .3.3.6.7.6zm22.4 3.5h-22.2c-.5 0-.9.3-.9.8v1.7c0 .5.4.9.9.9h22.3c.5 0 .9-.4.9-.9v-1.7c-.1-.5-.5-.8-1-.8zm0 13.7h-22.2c-.5 0-.9.4-.9.8v1.7c0 .5.4.9.9.9h22.3c.5 0 .9-.4.9-.9v-1.7c-.1-.4-.5-.8-1-.8z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0 0h25v24h-25z",
  fill: "none"
}));
icons.image_full_width = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0 0h24v24h-24z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m21.74 19.2h-19.48c-1.25 0-2.26-.8-2.26-1.8v-10.8c0-1 1.01-1.8 2.26-1.8h19.5c1.23 0 2.24.8 2.24 1.8v10.8c0 1-1.01 1.8-2.26 1.8zm-16.48-12.3c-1.46 0-2.63.94-2.63 2.1s1.18 2.1 2.63 2.1 2.61-.94 2.61-2.1-1.17-2.1-2.61-2.1zm-2.26 9.9h18v-4.2l-4.1-3.28c-.22-.18-.58-.18-.79 0l-6.37 5.08-2.6-2.08c-.22-.18-.58-.18-.79 0l-3.35 2.68z"
}));
icons.two_column_images = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m10.87 17.72h-9.74c-.63 0-1.13-.64-1.13-1.43v-8.58c0-.79.5-1.43 1.13-1.43h9.74c.63 0 1.13.64 1.13 1.43v8.58c0 .79-.5 1.43-1.13 1.43zm-8.24-9.78c-.73 0-1.31.75-1.31 1.66 0 .92.59 1.66 1.31 1.66s1.31-.75 1.31-1.66-.59-1.66-1.31-1.66zm-1.13 7.87h9v-3.34l-2.05-2.59c-.11-.14-.29-.14-.4 0l-3.18 4.03-1.3-1.65c-.11-.14-.29-.14-.4 0l-1.67 2.12z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m22.87 17.72h-9.74c-.62 0-1.13-.64-1.13-1.43v-8.58c0-.79.5-1.43 1.13-1.43h9.74c.63 0 1.13.64 1.13 1.43v8.58c0 .79-.5 1.43-1.13 1.43zm-8.24-9.78c-.73 0-1.31.75-1.31 1.66 0 .92.59 1.66 1.31 1.66s1.31-.75 1.31-1.66-.59-1.66-1.31-1.66zm-1.13 7.87h9v-3.34l-2.05-2.61c-.11-.14-.29-.14-.4 0l-3.18 4.03-1.3-1.65c-.11-.14-.29-.14-.4 0l-1.68 2.12z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0 0h24v24h-24z",
  fill: "none"
}));
icons.vimeo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m22.4 7.16c-.09 2.03-1.51 4.8-4.24 8.32-2.84 3.68-5.23 5.52-7.19 5.52-1.21 0-2.24-1.12-3.08-3.36-.56-2.05-1.12-4.1-1.68-6.16-.62-2.24-1.29-3.36-2-3.36-.16 0-.7.33-1.63.98l-.99-1.26c1.03-.9 2.04-1.81 3.04-2.71 1.37-1.18 2.4-1.8 3.09-1.86 1.62-.16 2.62.95 2.99 3.32.4 2.56.69 4.15.84 4.77.47 2.12.98 3.18 1.54 3.18.44 0 1.09-.69 1.96-2.06.87-1.38 1.34-2.42 1.4-3.14.12-1.19-.34-1.78-1.4-1.78-.5 0-1.01.11-1.54.34 1.02-3.35 2.98-4.98 5.86-4.88 2.14.05 3.15 1.43 3.03 4.14z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0 0h24v24h-24z",
  fill: "none"
}));
icons.single_image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m19.8 19.2h-15.6c-1 0-1.8-.8-1.8-1.8v-10.8c0-1 .8-1.8 1.8-1.8h15.6c1 0 1.8.8 1.8 1.8v10.8c0 1-.8 1.8-1.8 1.8zm-13.2-12.3c-1.16 0-2.1.94-2.1 2.1s.94 2.1 2.1 2.1 2.1-.94 2.1-2.1-.94-2.1-2.1-2.1zm-1.8 9.9h14.4v-4.2l-3.28-3.28c-.18-.18-.46-.18-.64 0l-5.08 5.08-2.08-2.08c-.18-.18-.46-.18-.64 0l-2.68 2.68z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0 0h24v24h-24z",
  fill: "none"
}));
icons.triptych = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m7 17h-6.3c-.4 0-.7-.5-.7-1.2v-7.6c0-.7.3-1.2.7-1.2h6.3c.4 0 .7.6.7 1.3v7.5c0 .7-.3 1.2-.7 1.2zm-5.3-8.6c-.5 0-.8.7-.8 1.5s.4 1.5.8 1.5.8-.7.8-1.5-.4-1.5-.8-1.5zm-.7 6.9h5.8v-2.9l-1.3-2.3c-.1-.1-.2-.1-.3 0l-2 3.5-.8-1.4c-.1-.1-.2-.1-.3 0l-1.1 1.9z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m15.1 17h-6.2c-.4 0-.7-.6-.7-1.3v-7.5c0-.7.3-1.2.7-1.2h6.2c.4 0 .7.6.7 1.3v7.5c0 .7-.3 1.2-.7 1.2zm-5.3-8.6c-.4 0-.8.7-.8 1.5s.4 1.5.8 1.5c.5 0 .8-.7.8-1.5.1-.8-.3-1.5-.8-1.5zm-.7 6.9h5.8v-2.9l-1.3-2.3c-.1-.1-.2-.1-.3 0l-2 3.5-.8-1.4c-.1-.1-.2-.1-.3 0l-1.1 1.9z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m23.3 17h-6.3c-.4 0-.7-.6-.7-1.3v-7.5c0-.7.3-1.2.7-1.2h6.2c.5 0 .8.5.8 1.2v7.5c0 .8-.3 1.3-.7 1.3zm-5.3-8.6c-.5 0-.8.7-.8 1.5s.4 1.5.8 1.5.8-.7.8-1.5-.3-1.5-.8-1.5zm-.7 6.9h5.7v-2.9l-1.3-2.3c-.1-.1-.2-.1-.3 0l-2 3.5-.8-1.4c-.1-.1-.2-.1-.3 0l-1.1 1.9z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0 0h24v24h-24z",
  fill: "none"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./includes/block-editor/blocks/full-width-image/editor.scss":
/*!*******************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-image/editor.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./includes/block-editor/blocks/full-width-image/style.scss":
/*!******************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-image/style.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-image/block.json":
/*!******************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-image/block.json ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"resource-blocks/full-width-image","version":"1.0.0","title":"Full-width Image","category":"resource-blocks","description":"A single full-width image. 2040px width.","keywords":["img","photo","picture"],"attributes":{"url":{"type":"string","source":"attribute","selector":"img","attribute":"src"},"alt":{"type":"string","source":"attribute","selector":"img","attribute":"alt","default":""},"title":{"type":"string","source":"attribute","selector":"img","attribute":"title"},"id":{"type":"number"},"width":{"type":"number"},"height":{"type":"number"}},"supports":{"anchor":false,"color":{"text":false,"background":false}},"example":{"attributes":{"cover":"https://example.com/image.jpg"}},"textdomain":"resource-blocks","editorScript":"file:../../../../build/full-width-image.js","editorStyle":"file:../../../../build/full-width-image.css","style":"file:../../../../build/style-full-width-image.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"full-width-image": 0,
/******/ 			"./style-full-width-image": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkresource_blocks"] = self["webpackChunkresource_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-full-width-image"], function() { return __webpack_require__("./includes/block-editor/blocks/full-width-image/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=full-width-image.js.map