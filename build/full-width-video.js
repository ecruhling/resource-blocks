/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/edit.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/edit.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil */ "./node_modules/@wordpress/icons/build-module/library/pencil.js");
/**
 * Internal dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (_pencil__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=edit.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pencil.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pencil.js ***!
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

const pencil = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pencil);
//# sourceMappingURL=pencil.js.map

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/constants.js":
/*!********************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/constants.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASPECT_RATIOS": function() { return /* binding */ ASPECT_RATIOS; },
/* harmony export */   "WP_EMBED_TYPE": function() { return /* binding */ WP_EMBED_TYPE; }
/* harmony export */ });
const ASPECT_RATIOS = [// Common video resolutions.
{
  ratio: '2.33',
  className: 'wp-embed-aspect-21-9'
}, {
  ratio: '2.00',
  className: 'wp-embed-aspect-18-9'
}, {
  ratio: '1.78',
  className: 'wp-embed-aspect-16-9'
}, {
  ratio: '1.33',
  className: 'wp-embed-aspect-4-3'
}, // Vertical video and instagram square video support.
{
  ratio: '1.00',
  className: 'wp-embed-aspect-1-1'
}, {
  ratio: '0.56',
  className: 'wp-embed-aspect-9-16'
}, {
  ratio: '0.50',
  className: 'wp-embed-aspect-1-2'
}];
const WP_EMBED_TYPE = 'wp-embed';

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/edit.js":
/*!***************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/edit.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./includes/block-editor/blocks/full-width-video/util.js");
/* harmony import */ var _embed_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embed-controls */ "./includes/block-editor/blocks/full-width-video/embed-controls.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./includes/block-editor/blocks/full-width-video/icons.js");
/* harmony import */ var _embed_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./embed-loading */ "./includes/block-editor/blocks/full-width-video/embed-loading.js");
/* harmony import */ var _embed_placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./embed-placeholder */ "./includes/block-editor/blocks/full-width-video/embed-placeholder.js");
/* harmony import */ var _embed_preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./embed-preview */ "./includes/block-editor/blocks/full-width-video/embed-preview.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editor.scss */ "./includes/block-editor/blocks/full-width-video/editor.scss");


/**
 * Internal dependencies
 */






/**
 * External dependencies
 */
// eslint-disable-next-line import/no-extraneous-dependencies


/**
 * WordPress dependencies
 */







/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



const EmbedEdit = props => {
  const {
    attributes: {
      providerNameSlug,
      previewable,
      url: attributesUrl
    },
    attributes,
    isSelected,
    onReplace,
    setAttributes,
    insertBlocksAfter,
    onFocus
  } = props;
  const defaultEmbedInfo = {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__._x)('Embed', 'block title'),
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__.embedContentIcon
  };
  const {
    icon,
    title
  } = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getEmbedInfoByProvider)(providerNameSlug) || defaultEmbedInfo;
  const [url, setURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributesUrl);
  const [isEditingURL, setIsEditingURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    invalidateResolution
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_11__.store);
  const {
    preview,
    fetching,
    cannotEmbed
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => {
    var _embedPreview$data;

    const {
      getEmbedPreview,
      isPreviewEmbedFallback,
      isRequestingEmbedPreview
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_11__.store);

    if (!attributesUrl) {
      return {
        fetching: false,
        cannotEmbed: false
      };
    }

    const embedPreview = getEmbedPreview(attributesUrl);
    const previewIsFallback = isPreviewEmbedFallback(attributesUrl); // The external oEmbed provider does not exist. We got no type info and no html.

    const badEmbedProvider = (embedPreview === null || embedPreview === void 0 ? void 0 : embedPreview.html) === false && (embedPreview === null || embedPreview === void 0 ? void 0 : embedPreview.type) === undefined; // Some WordPress URLs that can't be embedded will cause the API to return
    // a valid JSON response with no HTML and `data.status` set to 404, rather
    // than generating a fallback response as other embeds do.

    const wordpressCantEmbed = (embedPreview === null || embedPreview === void 0 ? void 0 : (_embedPreview$data = embedPreview.data) === null || _embedPreview$data === void 0 ? void 0 : _embedPreview$data.status) === 404;
    const validPreview = !!embedPreview && !badEmbedProvider && !wordpressCantEmbed;
    return {
      preview: validPreview ? embedPreview : undefined,
      fetching: isRequestingEmbedPreview(attributesUrl),
      cannotEmbed: !validPreview || previewIsFallback
    };
  }, [attributesUrl]);
  /**
   * @return {Object} Attributes derived from the preview, merged with the current attributes.
   */

  const getMergedAttributes = () => {
    const {
      className
    } = attributes;
    return { ...attributes,
      ...(0,_util__WEBPACK_IMPORTED_MODULE_1__.getAttributesFromPreview)(preview, title, className)
    };
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(preview !== null && preview !== void 0 && preview.html) || !cannotEmbed || fetching) {
      return;
    } // At this stage, we're not fetching the preview and know it can't be embedded,
    // so try removing any trailing slash, and resubmit.


    const newURL = attributesUrl.replace(/\/$/, '');
    setURL(newURL);
    setIsEditingURL(false);
    setAttributes({
      url: newURL
    });
  }, [preview === null || preview === void 0 ? void 0 : preview.html, attributesUrl]); // Handle incoming preview

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (preview && !isEditingURL) {
      // Even though we set attributes that get derived from the preview,
      // we don't access them directly because for the initial render,
      // the `setAttributes` call will not have taken effect. If we're
      // rendering responsive content, setting the responsive classes
      // after the preview has been rendered can result in unwanted
      // clipping or scrollbars. The `getAttributesFromPreview` function
      // that `getMergedAttributes` uses is memoized so that we're not
      // calculating them on every render.
      setAttributes(getMergedAttributes());

      if (onReplace) {
        const upgradedBlock = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createUpgradedEmbedBlock)(props, getMergedAttributes());

        if (upgradedBlock) {
          onReplace(upgradedBlock);
        }
      }
    }
  }, [preview, isEditingURL]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__.useBlockProps)({
    className: 'resource-blocks-row'
  });

  if (fetching) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_12__.View, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_embed_loading__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  } // eslint-disable-next-line @wordpress/valid-sprintf


  const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Full-width Video'), title); // No preview, or we can't embed the current URL, or we've clicked the edit button.

  const showEmbedPlaceholder = !preview || cannotEmbed || isEditingURL;

  if (showEmbedPlaceholder) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_12__.View, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "resource-blocks-column"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_embed_placeholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: icon,
      label: label,
      onFocus: onFocus,
      onSubmit: event => {
        if (event) {
          event.preventDefault();
        }

        setIsEditingURL(false);
        setAttributes({
          url
        });
      },
      value: url,
      cannotEmbed: cannotEmbed,
      onChange: event => setURL(event.target.value),
      fallback: () => (0,_util__WEBPACK_IMPORTED_MODULE_1__.fallback)(url, onReplace),
      tryAgain: () => {
        invalidateResolution('getEmbedPreview', [url]);
      }
    })));
  } // Even though we set attributes that get derived from the preview,
  // we don't access them directly because for the initial render,
  // the `setAttributes` call will not have taken effect. If we're
  // rendering responsive content, setting the responsive classes
  // after the preview has been rendered can result in unwanted
  // clipping or scrollbars. The `getAttributesFromPreview` function
  // that `getMergedAttributes` uses is memoized so that we're not
  // calculating them on every render.


  const {
    type,
    className: classFromPreview
  } = getMergedAttributes();
  const className = classnames__WEBPACK_IMPORTED_MODULE_7___default()(classFromPreview, props.className);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_embed_controls__WEBPACK_IMPORTED_MODULE_2__["default"], {
    showEditButton: preview && !cannotEmbed,
    switchBackToURLInput: () => setIsEditingURL(true)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_12__.View, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "resource-blocks-column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_embed_preview__WEBPACK_IMPORTED_MODULE_6__["default"], {
    preview: preview,
    previewable: previewable,
    className: className,
    url: url,
    type: type,
    isSelected: isSelected,
    icon: icon,
    label: label,
    insertBlocksAfter: insertBlocksAfter
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (EmbedEdit);

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/embed-controls.js":
/*!*************************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/embed-controls.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/edit.js");


/**
 * WordPress dependencies
 */





function getResponsiveHelp(checked) {
  return checked ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This embed will preserve its aspect ratio when the browser is resized.') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This embed may not preserve its aspect ratio when the browser is resized.');
}

const EmbedControls = _ref => {
  let {
    blockSupportsResponsive,
    showEditButton,
    themeSupportsResponsive,
    allowResponsive,
    toggleResponsive,
    switchBackToURLInput
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, showEditButton && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    className: "components-toolbar__control",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit URL'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    onClick: switchBackToURLInput
  }))), themeSupportsResponsive && blockSupportsResponsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media settings'),
    className: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Resize for smaller devices'),
    checked: allowResponsive,
    help: getResponsiveHelp,
    onChange: toggleResponsive
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (EmbedControls);

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/embed-loading.js":
/*!************************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/embed-loading.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */


const EmbedLoading = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: "wp-block-embed is-loading"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));

/* harmony default export */ __webpack_exports__["default"] = (EmbedLoading);

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/embed-placeholder.js":
/*!****************************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/embed-placeholder.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/icons */ "./includes/icons/icons.js");


/**
 * WordPress dependencies
 */





const EmbedPlaceholder = _ref => {
  let {
    label,
    value,
    onSubmit,
    onChange,
    cannotEmbed,
    fallback,
    tryAgain
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockIcon, {
      icon: _icons_icons__WEBPACK_IMPORTED_MODULE_4__["default"].vimeo
    }),
    label: label,
    className: "wp-block-embed",
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('URL to the Vimeo video. Video should be aspect ratio 137 : 66\n suggested sizes:\n 1530px x 737px (preferred) 1370px x 660px')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: onSubmit
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "url",
    value: value || '',
    className: "components-placeholder__input",
    "aria-label": label,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('https://player.vimeo.com/video/xxxxxxxxx'),
    onChange: onChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    type: "submit"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Embed', 'button label'))), cannotEmbed && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-placeholder__error"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-placeholder__instructions"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sorry, this content could not be embedded.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: tryAgain
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Try again', 'button label')), ' ', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: fallback
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Convert to link', 'button label'))));
};

/* harmony default export */ __webpack_exports__["default"] = (EmbedPlaceholder);

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/embed-preview.js":
/*!************************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/embed-preview.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./includes/block-editor/blocks/full-width-video/util.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wp_embed_preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wp-embed-preview */ "./includes/block-editor/blocks/full-width-video/wp-embed-preview.js");


/**
 * Internal dependencies
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



class EmbedPreview extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.hideOverlay = this.hideOverlay.bind(this);
    this.state = {
      interactive: false
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (!nextProps.isSelected && state.interactive) {
      // We only want to change this when the block is not selected, because changing it when
      // the block becomes selected makes the overlap disappear too early. Hiding the overlay
      // happens on mouseup when the overlay is clicked.
      return {
        interactive: false
      };
    }

    return null;
  }

  hideOverlay() {
    // This is called onMouseUp on the overlay. We can't respond to the `isSelected` prop
    // changing, because that happens on mouse down, and the overlay immediately disappears,
    // and the mouse event can end up in the preview content. We can't use onClick on
    // the overlay to hide it either, because then the editor misses the mouseup event, and
    // thinks we're multi-selecting blocks.
    this.setState({
      interactive: true
    });
  }

  render() {
    const {
      preview,
      previewable,
      url,
      type,
      className,
      icon,
      label
    } = this.props;
    const {
      scripts
    } = preview;
    const {
      interactive
    } = this.state;
    const html = 'photo' === type ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.getPhotoHtml)(preview) : preview.html;
    const parsedHost = new URL(url).host.split('.');
    const parsedHostBaseUrl = parsedHost.splice(parsedHost.length - 2, parsedHost.length - 1).join('.');
    const iframeTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Embedded content from Vimeo'), parsedHostBaseUrl);
    const sandboxClassnames = classnames_dedupe__WEBPACK_IMPORTED_MODULE_2___default()(type, className, 'wp-block-embed__wrapper'); // Disabled because the overlay div doesn't actually have a role or functionality
    // as far as the user is concerned. We're just catching the first click so that
    // the block can be selected without interacting with the embed preview that the overlay covers.

    /* eslint-disable jsx-a11y/no-static-element-interactions */

    const embedWrapper = 'wp-embed' === type ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wp_embed_preview__WEBPACK_IMPORTED_MODULE_6__["default"], {
      html: html
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-embed__wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SandBox, {
      html: html,
      scripts: scripts,
      title: iframeTitle,
      type: sandboxClassnames,
      onFocus: this.hideOverlay
    }), !interactive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "block-library-embed__interactive-overlay",
      onMouseUp: this.hideOverlay
    }));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_2___default()(className, 'wp-block-embed', {
        'is-type-video': 'video' === type
      })
    }, previewable ? embedWrapper : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockIcon, {
        icon: icon,
        showColors: true
      }),
      label: label
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "components-placeholder__error"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: url
    }, url)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "components-placeholder__error"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Embedded content from Vimeo can\'t be previewed in the editor.'), parsedHostBaseUrl))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmbedPreview);

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/icons.js":
/*!****************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/icons.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "embedContentIcon": function() { return /* binding */ embedContentIcon; },
/* harmony export */   "embedAudioIcon": function() { return /* binding */ embedAudioIcon; },
/* harmony export */   "embedPhotoIcon": function() { return /* binding */ embedPhotoIcon; },
/* harmony export */   "embedVideoIcon": function() { return /* binding */ embedVideoIcon; },
/* harmony export */   "embedTwitterIcon": function() { return /* binding */ embedTwitterIcon; },
/* harmony export */   "embedYouTubeIcon": function() { return /* binding */ embedYouTubeIcon; },
/* harmony export */   "embedFacebookIcon": function() { return /* binding */ embedFacebookIcon; },
/* harmony export */   "embedInstagramIcon": function() { return /* binding */ embedInstagramIcon; },
/* harmony export */   "embedWordPressIcon": function() { return /* binding */ embedWordPressIcon; },
/* harmony export */   "embedSpotifyIcon": function() { return /* binding */ embedSpotifyIcon; },
/* harmony export */   "embedFlickrIcon": function() { return /* binding */ embedFlickrIcon; },
/* harmony export */   "embedVimeoIcon": function() { return /* binding */ embedVimeoIcon; },
/* harmony export */   "embedRedditIcon": function() { return /* binding */ embedRedditIcon; },
/* harmony export */   "embedTumblrIcon": function() { return /* binding */ embedTumblrIcon; },
/* harmony export */   "embedAmazonIcon": function() { return /* binding */ embedAmazonIcon; },
/* harmony export */   "embedAnimotoIcon": function() { return /* binding */ embedAnimotoIcon; },
/* harmony export */   "embedDailymotionIcon": function() { return /* binding */ embedDailymotionIcon; },
/* harmony export */   "embedPinterestIcon": function() { return /* binding */ embedPinterestIcon; },
/* harmony export */   "embedWolframIcon": function() { return /* binding */ embedWolframIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const embedContentIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"
}));
const embedAudioIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zM13.2 7.7c-.4.4-.7 1.1-.7 1.9v3.7c-.4-.3-.8-.4-1.3-.4-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2.5 0 1-.2 1.4-.5.9-.6 1.4-1.6 1.4-2.6V9.6c0-.4.1-.6.2-.8.3-.3 1-.3 1.6-.3h.2V7h-.2c-.7 0-1.8 0-2.6.7z"
}));
const embedPhotoIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.2 4.5H19c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V9.8l4.6-5.3zm9.8 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
}));
const embedVideoIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zM10 15l5-3-5-3v6z"
}));
const embedTwitterIcon = {
  foreground: '#1da1f2',
  src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.G, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M22.23 5.924c-.736.326-1.527.547-2.357.646.847-.508 1.498-1.312 1.804-2.27-.793.47-1.67.812-2.606.996C18.325 4.498 17.258 4 16.078 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.635.106.935-3.41-.17-6.433-1.804-8.457-4.287-.353.607-.556 1.312-.556 2.064 0 1.424.724 2.68 1.825 3.415-.673-.022-1.305-.207-1.86-.514v.052c0 1.988 1.415 3.647 3.293 4.023-.344.095-.707.145-1.08.145-.265 0-.522-.026-.773-.074.522 1.63 2.038 2.817 3.833 2.85-1.404 1.1-3.174 1.757-5.096 1.757-.332 0-.66-.02-.98-.057 1.816 1.164 3.973 1.843 6.29 1.843 7.547 0 11.675-6.252 11.675-11.675 0-.178-.004-.355-.012-.53.802-.578 1.497-1.3 2.047-2.124z"
  })))
};
const embedYouTubeIcon = {
  foreground: '#ff0000',
  src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M21.8 8s-.195-1.377-.795-1.984c-.76-.797-1.613-.8-2.004-.847-2.798-.203-6.996-.203-6.996-.203h-.01s-4.197 0-6.996.202c-.39.046-1.242.05-2.003.846C2.395 6.623 2.2 8 2.2 8S2 9.62 2 11.24v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.77 2.205.855 1.6.153 6.8.2 6.8.2s4.203-.005 7-.208c.392-.047 1.244-.05 2.005-.847.6-.607.795-1.985.795-1.985s.2-1.618.2-3.237v-1.517C22 9.62 21.8 8 21.8 8zM9.935 14.595v-5.62l5.403 2.82-5.403 2.8z"
  }))
};
const embedFacebookIcon = {
  foreground: '#3b5998',
  src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M20 3H4c-.6 0-1 .4-1 1v16c0 .5.4 1 1 1h8.6v-7h-2.3v-2.7h2.3v-2c0-2.3 1.4-3.6 3.5-3.6 1 0 1.8.1 2.1.1v2.4h-1.4c-1.1 0-1.3.5-1.3 1.3v1.7h2.7l-.4 2.8h-2.3v7H20c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1z"
  }))
};
const embedInstagramIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.G, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.01-3.637-.052c-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638s.01-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052M12 3c-2.444 0-2.75.01-3.71.054s-1.613.196-2.185.418c-.592.23-1.094.538-1.594 1.04-.5.5-.807 1-1.037 1.593-.223.572-.375 1.226-.42 2.184C3.01 9.25 3 9.555 3 12s.01 2.75.054 3.71.196 1.613.418 2.186c.23.592.538 1.094 1.038 1.594s1.002.808 1.594 1.038c.572.222 1.227.375 2.185.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054 1.613-.196 2.186-.418c.592-.23 1.094-.538 1.594-1.038s.808-1.002 1.038-1.594c.222-.572.375-1.227.418-2.185.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71-.196-1.613-.418-2.186c-.23-.592-.538-1.094-1.038-1.594s-1.002-.808-1.594-1.038c-.572-.222-1.227-.375-2.185-.418C14.75 3.01 14.445 3 12 3zm0 4.378c-2.552 0-4.622 2.07-4.622 4.622s2.07 4.622 4.622 4.622 4.622-2.07 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884c-.596 0-1.08.484-1.08 1.08s.484 1.08 1.08 1.08c.596 0 1.08-.484 1.08-1.08s-.483-1.08-1.08-1.08z"
})));
const embedWordPressIcon = {
  foreground: '#0073AA',
  src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.G, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.05-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.762-7.57zM3.008 12c0 3.56 2.07 6.634 5.068 8.092L3.788 8.342c-.5 1.117-.78 2.354-.78 3.658zm15.06-.454c0-1.112-.398-1.88-.74-2.48-.456-.74-.883-1.368-.883-2.11 0-.825.627-1.595 1.51-1.595.04 0 .078.006.116.008-1.598-1.464-3.73-2.36-6.07-2.36-3.14 0-5.904 1.613-7.512 4.053.21.008.41.012.58.012.94 0 2.395-.114 2.395-.114.484-.028.54.684.057.74 0 0-.487.058-1.03.086l3.275 9.74 1.968-5.902-1.4-3.838c-.485-.028-.944-.085-.944-.085-.486-.03-.43-.77.056-.742 0 0 1.484.114 2.368.114.94 0 2.397-.114 2.397-.114.486-.028.543.684.058.74 0 0-.488.058-1.03.086l3.25 9.665.897-2.997c.456-1.17.684-2.137.684-2.907zm1.82-3.86c.04.286.06.593.06.924 0 .912-.17 1.938-.683 3.22l-2.746 7.94c2.672-1.558 4.47-4.454 4.47-7.77 0-1.564-.4-3.033-1.1-4.314zM12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"
  })))
};
const embedSpotifyIcon = {
  foreground: '#1db954',
  src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.206.857M17.81 13.7c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.13-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.52-.973 3.632-1.102 8.147-.568 11.234 1.328.366.226.48.707.256 1.072m.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.493.15-1.016-.13-1.166-.624-.148-.495.13-1.017.625-1.167 3.532-1.073 9.404-.866 13.115 1.337.445.264.59.838.327 1.282-.264.443-.838.59-1.282.325"
  }))
};
const embedFlickrIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m6.5 7c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm11 0c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5z"
}));
const embedVimeoIcon = {
  foreground: '#1ab7ea',
  src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.G, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.323 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.118-4.105-1.68-6.158-.622-2.24-1.29-3.36-2.004-3.36-.156 0-.7.328-1.634.98l-.978-1.26c1.027-.903 2.04-1.806 3.037-2.71C6 3.95 7.03 3.328 7.716 3.265c1.62-.156 2.616.95 2.99 3.32.404 2.558.685 4.148.84 4.77.468 2.12.982 3.18 1.543 3.18.435 0 1.09-.687 1.963-2.064.872-1.376 1.34-2.422 1.402-3.142.125-1.187-.343-1.782-1.4-1.782-.5 0-1.013.115-1.542.34 1.023-3.35 2.977-4.976 5.862-4.883 2.14.063 3.148 1.45 3.024 4.16z"
  })))
};
const embedRedditIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M22 11.816c0-1.256-1.02-2.277-2.277-2.277-.593 0-1.122.24-1.526.613-1.48-.965-3.455-1.594-5.647-1.69l1.17-3.702 3.18.75c.01 1.027.847 1.86 1.877 1.86 1.035 0 1.877-.84 1.877-1.877 0-1.035-.842-1.877-1.877-1.877-.77 0-1.43.466-1.72 1.13L13.55 3.92c-.204-.047-.4.067-.46.26l-1.35 4.27c-2.317.037-4.412.67-5.97 1.67-.402-.355-.917-.58-1.493-.58C3.02 9.54 2 10.56 2 11.815c0 .814.433 1.523 1.078 1.925-.037.222-.06.445-.06.673 0 3.292 4.01 5.97 8.94 5.97s8.94-2.678 8.94-5.97c0-.214-.02-.424-.052-.632.687-.39 1.154-1.12 1.154-1.964zm-3.224-7.422c.606 0 1.1.493 1.1 1.1s-.493 1.1-1.1 1.1-1.1-.494-1.1-1.1.493-1.1 1.1-1.1zm-16 7.422c0-.827.673-1.5 1.5-1.5.313 0 .598.103.838.27-.85.675-1.477 1.478-1.812 2.36-.32-.274-.525-.676-.525-1.13zm9.183 7.79c-4.502 0-8.165-2.33-8.165-5.193S7.457 9.22 11.96 9.22s8.163 2.33 8.163 5.193-3.663 5.193-8.164 5.193zM20.635 13c-.326-.89-.948-1.7-1.797-2.383.247-.186.55-.3.882-.3.827 0 1.5.672 1.5 1.5 0 .482-.23.91-.586 1.184zm-11.64 1.704c-.76 0-1.397-.616-1.397-1.376 0-.76.636-1.397 1.396-1.397.76 0 1.376.638 1.376 1.398 0 .76-.616 1.376-1.376 1.376zm7.405-1.376c0 .76-.615 1.376-1.375 1.376s-1.4-.616-1.4-1.376c0-.76.64-1.397 1.4-1.397.76 0 1.376.638 1.376 1.398zm-1.17 3.38c.15.152.15.398 0 .55-.675.674-1.728 1.002-3.22 1.002l-.01-.002-.012.002c-1.492 0-2.544-.328-3.218-1.002-.152-.152-.152-.398 0-.55.152-.152.4-.15.55 0 .52.52 1.394.775 2.67.775l.01.002.01-.002c1.276 0 2.15-.253 2.67-.775.15-.152.398-.152.55 0z"
}));
const embedTumblrIcon = {
  foreground: '#35465c',
  src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M19 3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-5.69 14.66c-2.72 0-3.1-1.9-3.1-3.16v-3.56H8.49V8.99c1.7-.62 2.54-1.99 2.64-2.87 0-.06.06-.41.06-.58h1.9v3.1h2.17v2.3h-2.18v3.1c0 .47.13 1.3 1.2 1.26h1.1v2.36c-1.01.02-2.07 0-2.07 0z"
  }))
};
const embedAmazonIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.42 14.58c-.51-.66-1.05-1.23-1.05-2.5V7.87c0-1.8.15-3.45-1.2-4.68-1.05-1.02-2.79-1.35-4.14-1.35-2.6 0-5.52.96-6.12 4.14-.06.36.18.54.4.57l2.66.3c.24-.03.42-.27.48-.5.24-1.12 1.17-1.63 2.2-1.63.56 0 1.22.21 1.55.7.4.56.33 1.31.33 1.97v.36c-1.59.18-3.66.27-5.16.93a4.63 4.63 0 0 0-2.93 4.44c0 2.82 1.8 4.23 4.1 4.23 1.95 0 3.03-.45 4.53-1.98.51.72.66 1.08 1.59 1.83.18.09.45.09.63-.1v.04l2.1-1.8c.24-.21.2-.48.03-.75zm-5.4-1.2c-.45.75-1.14 1.23-1.92 1.23-1.05 0-1.65-.81-1.65-1.98 0-2.31 2.1-2.73 4.08-2.73v.6c0 1.05.03 1.92-.5 2.88z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M21.69 19.2a17.62 17.62 0 0 1-21.6-1.57c-.23-.2 0-.5.28-.33a23.88 23.88 0 0 0 20.93 1.3c.45-.19.84.3.39.6z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M22.8 17.96c-.36-.45-2.22-.2-3.1-.12-.23.03-.3-.18-.05-.36 1.5-1.05 3.96-.75 4.26-.39.3.36-.1 2.82-1.5 4.02-.21.18-.42.1-.3-.15.3-.8 1.02-2.58.69-3z"
}));
const embedAnimotoIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m.0206909 21 19.8160091-13.07806 3.5831 6.20826z",
  fill: "#4bc7ee"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m23.7254 19.0205-10.1074-17.18468c-.6421-1.114428-1.7087-1.114428-2.3249 0l-11.2931 19.16418h22.5655c1.279 0 1.8019-.8905 1.1599-1.9795z",
  fill: "#d4cdcb"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m.0206909 21 15.2439091-16.38571 4.3029 7.32271z",
  fill: "#c3d82e"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m13.618 1.83582c-.6421-1.114428-1.7087-1.114428-2.3249 0l-11.2931 19.16418 15.2646-16.38573z",
  fill: "#e4ecb0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m.0206909 21 19.5468091-9.063 1.6621 2.8344z",
  fill: "#209dbd"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m.0206909 21 17.9209091-11.82623 1.6259 2.76323z",
  fill: "#7cb3c9"
}));
const embedDailymotionIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m12.1479 18.5957c-2.4949 0-4.28131-1.7558-4.28131-4.0658 0-2.2176 1.78641-4.0965 4.09651-4.0965 2.2793 0 4.0349 1.7864 4.0349 4.1581 0 2.2794-1.7556 4.0042-3.8501 4.0042zm8.3521-18.5957-4.5329 1v7c-1.1088-1.41691-2.8028-1.8787-4.8049-1.8787-2.09443 0-3.97329.76993-5.5133 2.27917-1.72483 1.66323-2.6489 3.78863-2.6489 6.16033 0 2.5873.98562 4.8049 2.89526 6.499 1.44763 1.2936 3.17251 1.9402 5.17454 1.9402 1.9713 0 3.4498-.5236 4.8973-1.9402v1.9402h4.5329c0-7.6359 0-15.3641 0-23z",
  fill: "#333436"
}));
const embedPinterestIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.289,2C6.617,2,3.606,5.648,3.606,9.622c0,1.846,1.025,4.146,2.666,4.878c0.25,0.111,0.381,0.063,0.439-0.169 c0.044-0.175,0.267-1.029,0.365-1.428c0.032-0.128,0.017-0.237-0.091-0.362C6.445,11.911,6.01,10.75,6.01,9.668 c0-2.777,2.194-5.464,5.933-5.464c3.23,0,5.49,2.108,5.49,5.122c0,3.407-1.794,5.768-4.13,5.768c-1.291,0-2.257-1.021-1.948-2.277 c0.372-1.495,1.089-3.112,1.089-4.191c0-0.967-0.542-1.775-1.663-1.775c-1.319,0-2.379,1.309-2.379,3.059 c0,1.115,0.394,1.869,0.394,1.869s-1.302,5.279-1.54,6.261c-0.405,1.666,0.053,4.368,0.094,4.604 c0.021,0.126,0.167,0.169,0.25,0.063c0.129-0.165,1.699-2.419,2.142-4.051c0.158-0.59,0.817-2.995,0.817-2.995 c0.43,0.784,1.681,1.446,3.013,1.446c3.963,0,6.822-3.494,6.822-7.833C20.394,5.112,16.849,2,12.289,2"
}));
const embedWolframIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 44 44"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M32.59521,22.001l4.31885-4.84473-6.34131-1.38379.646-6.459-5.94336,2.61035L22,6.31934l-3.27344,5.60351L12.78418,9.3125l.645,6.458L7.08643,17.15234,11.40479,21.999,7.08594,26.84375l6.34131,1.38379-.64551,6.458,5.94287-2.60938L22,37.68066l3.27344-5.60351,5.94287,2.61035-.64551-6.458,6.34277-1.38183Zm.44385,2.75244L30.772,23.97827l-1.59558-2.07391,1.97888.735Zm-8.82147,6.1579L22.75,33.424V30.88977l1.52228-2.22168ZM18.56226,13.48816,19.819,15.09534l-2.49219-.88642L15.94037,12.337Zm6.87719.00116,2.62043-1.15027-1.38654,1.86981L24.183,15.0946Zm3.59357,2.6029-1.22546,1.7381.07525-2.73486,1.44507-1.94867ZM22,29.33008l-2.16406-3.15686L22,23.23688l2.16406,2.93634Zm-4.25458-9.582-.10528-3.836,3.60986,1.284v3.73242Zm5.00458-2.552,3.60986-1.284-.10528,3.836L22.75,20.92853Zm-7.78174-1.10559-.29352-2.94263,1.44245,1.94739.07519,2.73321Zm2.30982,5.08319,3.50817,1.18164-2.16247,2.9342-3.678-1.08447Zm2.4486,7.49285L21.25,30.88977v2.53485L19.78052,30.91Zm3.48707-6.31121,3.50817-1.18164,2.33228,3.03137-3.678,1.08447Zm10.87219-4.28113-2.714,3.04529L28.16418,19.928l1.92176-2.72565ZM24.06036,12.81769l-2.06012,2.6322-2.059-2.63318L22,9.292ZM9.91455,18.07227l4.00079-.87195,1.921,2.72735-3.20794,1.19019Zm2.93024,4.565,1.9801-.73462L13.228,23.97827l-2.26838.77429Zm-1.55591,3.58819L13.701,25.4021l2.64935.78058-2.14447.67853Zm3.64868,1.977L18.19,27.17334l.08313,3.46332L14.52979,32.2793Zm10.7876,2.43549.08447-3.464,3.25165,1.03052.407,4.07684Zm4.06824-3.77478-2.14545-.68,2.65063-.781,2.41266.825Z"
}));

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/index.js":
/*!****************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./includes/block-editor/blocks/full-width-video/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./includes/block-editor/blocks/full-width-video/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./includes/block-editor/blocks/full-width-video/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./includes/block-editor/blocks/full-width-video/save.js");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../icons/icons */ "./includes/icons/icons.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

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
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, { ...settings,
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_5__["default"].vimeo,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/save.js":
/*!***************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/save.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * TODO: check original video embed block and get the original responsive / aspect ratio class logic from there. See edit.js for how it calculates this.
 */

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
    type,
    providerNameSlug
  } = attributes;

  if (!url) {
    return null;
  }

  const className = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-embed resource-blocks-row', {
    [`is-type-${type}`]: type,
    [`is-provider-${providerNameSlug}`]: providerNameSlug,
    [`wp-block-embed-${providerNameSlug}`]: providerNameSlug
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'resource-blocks-column'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-embed__wrapper"
  }, `\n${url}\n`
  /* URL needs to be on its own line. */
  )));
}

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/util.js":
/*!***************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/util.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEmbedInfoByProvider": function() { return /* binding */ getEmbedInfoByProvider; },
/* harmony export */   "matchesPatterns": function() { return /* binding */ matchesPatterns; },
/* harmony export */   "findMoreSuitableBlock": function() { return /* binding */ findMoreSuitableBlock; },
/* harmony export */   "isFromWordPress": function() { return /* binding */ isFromWordPress; },
/* harmony export */   "getPhotoHtml": function() { return /* binding */ getPhotoHtml; },
/* harmony export */   "createUpgradedEmbedBlock": function() { return /* binding */ createUpgradedEmbedBlock; },
/* harmony export */   "removeAspectRatioClasses": function() { return /* binding */ removeAspectRatioClasses; },
/* harmony export */   "getClassNames": function() { return /* binding */ getClassNames; },
/* harmony export */   "fallback": function() { return /* binding */ fallback; },
/* harmony export */   "getAttributesFromPreview": function() { return /* binding */ getAttributesFromPreview; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./includes/block-editor/blocks/full-width-video/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./includes/block-editor/blocks/full-width-video/block.json");


/**
 * Internal dependencies
 */

/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const {
  name: DEFAULT_EMBED_BLOCK
} = _block_json__WEBPACK_IMPORTED_MODULE_6__;
/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Returns the embed block's information by matching the provided service provider
 *
 * @param {string} provider The embed block's provider
 * @return {WPBlockVariation} The embed block's information
 */

const getEmbedInfoByProvider = provider => {
  var _getBlockVariations;

  return (_getBlockVariations = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.getBlockVariations)(DEFAULT_EMBED_BLOCK)) === null || _getBlockVariations === void 0 ? void 0 : _getBlockVariations.find(_ref => {
    let {
      name
    } = _ref;
    return name === provider;
  });
};
/**
 * Returns true if any of the regular expressions match the URL.
 *
 * @param {string} url      The URL to test.
 * @param {Array}  patterns The list of regular expressions to test agains.
 * @return {boolean} True if any of the regular expressions match the URL.
 */

const matchesPatterns = function (url) {
  let patterns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return patterns.some(pattern => url.match(pattern));
};
/**
 * Finds the block variation that should be used for the URL,
 * based on the provided URL and the variation's patterns.
 *
 * @param {string} url The URL to test.
 * @return {WPBlockVariation} The block variation that should be used for this URL
 */

const findMoreSuitableBlock = url => {
  var _getBlockVariations2;

  return (_getBlockVariations2 = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.getBlockVariations)(DEFAULT_EMBED_BLOCK)) === null || _getBlockVariations2 === void 0 ? void 0 : _getBlockVariations2.find(_ref2 => {
    let {
      patterns
    } = _ref2;
    return matchesPatterns(url, patterns);
  });
};
const isFromWordPress = html => html && html.includes('class="wp-embedded-content"');
const getPhotoHtml = photo => {
  // 100% width for the preview so it fits nicely into the document, some "thumbnails" are
  // actually the full size photo. If thumbnails not found, use full image.
  const imageUrl = photo.thumbnail_url || photo.url;
  const photoPreview = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageUrl,
    alt: photo.title,
    width: "100%"
  }));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.renderToString)(photoPreview);
};
/**
 * Creates a more suitable embed block based on the passed in props
 * and attributes generated from an embed block's preview.
 *
 * We require `attributesFromPreview` to be generated from the latest attributes
 * and preview, and because of the way the react lifecycle operates, we can't
 * guarantee that the attributes contained in the block's props are the latest
 * versions, so we require that these are generated separately.
 * See `getAttributesFromPreview` in the generated embed edit component.
 *
 * @param {Object} props                   The block's props.
 * @param {Object} [attributesFromPreview] Attributes generated from the block's most up to date preview.
 * @return {Object|undefined} A more suitable embed block if one exists.
 */

const createUpgradedEmbedBlock = function (props) {
  var _getBlockVariations3;

  let attributesFromPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    preview,
    attributes = {}
  } = props;
  const {
    url,
    providerNameSlug,
    type,
    ...restAttributes
  } = attributes;
  if (!url || !(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.getBlockType)(DEFAULT_EMBED_BLOCK)) return;
  const matchedBlock = findMoreSuitableBlock(url); // WordPress blocks can work on multiple sites, and so don't have patterns,
  // so if we're in a WordPress block, assume the user has chosen it for a WordPress URL.

  const isCurrentBlockWP = providerNameSlug === 'wordpress' || type === _constants__WEBPACK_IMPORTED_MODULE_1__.WP_EMBED_TYPE; // if current block is not WordPress and a more suitable block found
  // that is different from the current one, create the new matched block

  const shouldCreateNewBlock = !isCurrentBlockWP && matchedBlock && (matchedBlock.attributes.providerNameSlug !== providerNameSlug || !providerNameSlug);

  if (shouldCreateNewBlock) {
    return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.createBlock)(DEFAULT_EMBED_BLOCK, {
      url,
      ...restAttributes,
      ...matchedBlock.attributes
    });
  }

  const wpVariation = (_getBlockVariations3 = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.getBlockVariations)(DEFAULT_EMBED_BLOCK)) === null || _getBlockVariations3 === void 0 ? void 0 : _getBlockVariations3.find(_ref3 => {
    let {
      name
    } = _ref3;
    return name === 'wordpress';
  }); // We can't match the URL for WordPress embeds, we have to check the HTML instead.

  if (!wpVariation || !preview || !isFromWordPress(preview.html) || isCurrentBlockWP) {
    return;
  } // This is not the WordPress embed block so transform it into one.


  return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.createBlock)(DEFAULT_EMBED_BLOCK, {
    url,
    ...wpVariation.attributes,
    // By now we have the preview, but when the new block first renders, it
    // won't have had all the attributes set, and so won't get the correct
    // type and it won't render correctly. So, we pass through the current attributes
    // here so that the initial render works when we switch to the WordPress
    // block. This only affects the WordPress block because it can't be
    // rendered in the usual Sandbox (it has a sandbox of its own) and it
    // relies on the preview to set the correct render type.
    ...attributesFromPreview
  });
};
/**
 * Removes all previously set aspect ratio related classes and return the rest
 * existing class names.
 *
 * @param {string} existingClassNames Any existing class names.
 * @return {string} The class names without any aspect ratio related class.
 */

const removeAspectRatioClasses = existingClassNames => {
  if (!existingClassNames) {
    // Avoids extraneous work and also, by returning the same value as
    // received, ensures the post is not dirtied by a change of the block
    // attribute from `undefined` to an emtpy string.
    return existingClassNames;
  }

  const aspectRatioClassNames = _constants__WEBPACK_IMPORTED_MODULE_1__.ASPECT_RATIOS.reduce((accumulator, _ref4) => {
    let {
      className
    } = _ref4;
    accumulator[className] = false;
    return accumulator;
  }, {
    'wp-has-aspect-ratio': false
  });
  return classnames_dedupe__WEBPACK_IMPORTED_MODULE_3___default()(existingClassNames, aspectRatioClassNames);
};
/**
 * Returns class names with any relevant responsive aspect ratio names.
 *
 * @param {string}  html               The preview HTML that possibly contains an iframe with width and height set.
 * @param {string}  existingClassNames Any existing class names.
 * @param {boolean} allowResponsive    If the responsive class names should be added, or removed.
 * @return {string} Deduped class names.
 */

function getClassNames(html, existingClassNames) {
  let allowResponsive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!allowResponsive) {
    return removeAspectRatioClasses(existingClassNames);
  }

  const previewDocument = document.implementation.createHTMLDocument('');
  previewDocument.body.innerHTML = html;
  const iframe = previewDocument.body.querySelector('iframe'); // If we have a fixed aspect iframe, and it's a responsive embed block.

  if (iframe && iframe.height && iframe.width) {
    const aspectRatio = (iframe.width / iframe.height).toFixed(2); // Given the actual aspect ratio, find the widest ratio to support it.

    for (let ratioIndex = 0; ratioIndex < _constants__WEBPACK_IMPORTED_MODULE_1__.ASPECT_RATIOS.length; ratioIndex++) {
      const potentialRatio = _constants__WEBPACK_IMPORTED_MODULE_1__.ASPECT_RATIOS[ratioIndex];

      if (aspectRatio >= potentialRatio.ratio) {
        // Evaluate the difference between actual aspect ratio and closest match.
        // If the difference is too big, do not scale the embed according to aspect ratio.
        const ratioDiff = aspectRatio - potentialRatio.ratio;

        if (ratioDiff > 0.1) {
          // No close aspect ratio match found.
          return removeAspectRatioClasses(existingClassNames);
        } // Close aspect ratio match found.


        return classnames_dedupe__WEBPACK_IMPORTED_MODULE_3___default()(removeAspectRatioClasses(existingClassNames), potentialRatio.className, 'wp-has-aspect-ratio');
      }
    }
  }

  return existingClassNames;
}
/**
 * Fallback behaviour for unembeddable URLs.
 * Creates a paragraph block containing a link to the URL, and calls `onReplace`.
 *
 * @param {string}   url       The URL that could not be embedded.
 * @param {Function} onReplace Function to call with the created fallback block.
 */

function fallback(url, onReplace) {
  const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: url
  }, url);
  onReplace((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.createBlock)('core/paragraph', {
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.renderToString)(link)
  }));
}
/***
 * Gets block attributes based on the preview and responsive state.
 *
 * @param {Object} preview The preview data.
 * @param {string} title The block's title, e.g. Twitter.
 * @param {Object} currentClassNames The block's current class names.
 * @param {boolean} isResponsive Boolean indicating if the block supports responsive content.
 * @param {boolean} allowResponsive Apply responsive classes to fixed size content.
 * @return {Object} Attributes and values.
 */

const getAttributesFromPreview = memize__WEBPACK_IMPORTED_MODULE_4___default()(function (preview, title, currentClassNames, isResponsive) {
  let allowResponsive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  if (!preview) {
    return {};
  }

  const attributes = {}; // Some plugins only return HTML with no type info, so default this to 'rich'.

  let {
    type = 'rich'
  } = preview; // If we got a provider name from the API, use it for the slug, otherwise we use the title,
  // because not all embed code gives us a provider name.

  const {
    html,
    provider_name: providerName
  } = preview;
  const providerNameSlug = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.kebabCase)((providerName || title).toLowerCase());

  if (isFromWordPress(html)) {
    type = _constants__WEBPACK_IMPORTED_MODULE_1__.WP_EMBED_TYPE;
  }

  if (html || 'photo' === type) {
    attributes.type = type;
    attributes.providerNameSlug = providerNameSlug;
  }

  attributes.className = getClassNames(html, currentClassNames, isResponsive && allowResponsive);
  return attributes;
});

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/wp-embed-preview.js":
/*!***************************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/wp-embed-preview.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WpEmbedPreview; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */


/** @typedef {import('@wordpress/element').WPSyntheticEvent} WPSyntheticEvent */

const attributeMap = {
  class: 'className',
  frameborder: 'frameBorder',
  marginheight: 'marginHeight',
  marginwidth: 'marginWidth'
};
function WpEmbedPreview(_ref) {
  let {
    html
  } = _ref;
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const props = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const doc = new window.DOMParser().parseFromString(html, 'text/html');
    const iframe = doc.querySelector('iframe');
    const iframeProps = {};
    if (!iframe) return iframeProps;
    Array.from(iframe.attributes).forEach(_ref2 => {
      let {
        name,
        value
      } = _ref2;
      if (name === 'style') return;
      iframeProps[attributeMap[name] || name] = value;
    });
    return iframeProps;
  }, [html]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const {
      ownerDocument
    } = ref.current;
    const {
      defaultView
    } = ownerDocument;
    /**
     * Checks for WordPress embed events signaling the height change when
     * iframe content loads or iframe's window is resized.  The event is
     * sent from WordPress core via the window.postMessage API.
     *
     * References:
     * window.postMessage:
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
     * WordPress core embed-template on load:
     * https://github.com/WordPress/WordPress/blob/HEAD/wp-includes/js/wp-embed-template.js#L143
     * WordPress core embed-template on resize:
     * https://github.com/WordPress/WordPress/blob/HEAD/wp-includes/js/wp-embed-template.js#L187
     *
     * @param {MessageEvent} event Message event.
     */

    function resizeWPembeds(_ref3) {
      let {
        data: {
          secret,
          message,
          value
        } = {}
      } = _ref3;

      if (message !== 'height' || secret !== props['data-secret']) {
        return;
      }

      ref.current.height = value;
    }

    defaultView.addEventListener('message', resizeWPembeds);
    return () => {
      defaultView.removeEventListener('message', resizeWPembeds);
    };
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wp-block-embed__wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("iframe", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useMergeRefs)([ref, (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useFocusableIframe)()]),
    title: props.title
  }, props)));
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

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			if (object.toString === Object.prototype.toString) {
				for (var k in object) {
					if (hasOwn.call(object, k)) {
						// set value to false instead of deleting it to avoid changing object structure
						// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
						resultSet[k] = !!object[k];
					}
				}
			} else {
				resultSet[object.toString()] = true;
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

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

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/***/ (function(module) {

/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;


/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/editor.scss":
/*!*******************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/editor.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/style.scss":
/*!******************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/style.scss ***!
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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

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

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./includes/block-editor/blocks/full-width-video/block.json":
/*!******************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/block.json ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"resource-blocks/full-width-video","version":"1.0.0","title":"Full-width Video","category":"resource-blocks","description":"Full-width Vimeo video embed.","textdomain":"resource-blocks","attributes":{"url":{"type":"string"},"type":{"type":"string"},"providerNameSlug":{"type":"string"},"allowResponsive":{"type":"boolean","default":true},"responsive":{"type":"boolean","default":false},"previewable":{"type":"boolean","default":true}},"example":{"attributes":{"cover":"https://example.com/image.jpg"}},"editorScript":"file:../../../../build/full-width-video.js","editorStyle":"file:../../../../build/full-width-video.css","style":"file:../../../../build/style-full-width-video.css"}');

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
/******/ 			"full-width-video": 0,
/******/ 			"./style-full-width-video": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-full-width-video"], function() { return __webpack_require__("./includes/block-editor/blocks/full-width-video/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=full-width-video.js.map