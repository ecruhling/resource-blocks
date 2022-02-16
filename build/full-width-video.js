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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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


/**
 * Internal dependencies
 */






/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








const EmbedEdit = props => {
  const {
    attributes: {
      providerNameSlug,
      previewable,
      responsive,
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
    icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module './icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
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
    themeSupportsResponsive,
    cannotEmbed
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => {
    var _embedPreview$data;

    const {
      getEmbedPreview,
      isPreviewEmbedFallback,
      isRequestingEmbedPreview,
      getThemeSupports
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
      themeSupportsResponsive: getThemeSupports()['responsive-embeds'],
      cannotEmbed: !validPreview || previewIsFallback
    };
  }, [attributesUrl]);
  /**
   * @return {Object} Attributes derived from the preview, merged with the current attributes.
   */

  const getMergedAttributes = () => {
    const {
      allowResponsive,
      className
    } = attributes;
    return { ...attributes,
      ...(0,_util__WEBPACK_IMPORTED_MODULE_1__.getAttributesFromPreview)(preview, title, className, responsive, allowResponsive)
    };
  };

  const toggleResponsive = () => {
    const {
      allowResponsive,
      className
    } = attributes;
    const {
      html
    } = preview;
    const newAllowResponsive = !allowResponsive;
    setAttributes({
      allowResponsive: newAllowResponsive,
      className: (0,_util__WEBPACK_IMPORTED_MODULE_1__.getClassNames)(html, className, responsive && newAllowResponsive)
    });
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
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__.useBlockProps)();

  if (fetching) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_12__.View, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_embed_loading__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  } // translators: %s: type of embed e.g: "YouTube", "Twitter", etc. "Embed" is used when no specific type exists


  const label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('%s URL'), title); // No preview, or we can't embed the current URL, or we've clicked the edit button.

  const showEmbedPlaceholder = !preview || cannotEmbed || isEditingURL;

  if (showEmbedPlaceholder) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_12__.View, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_embed_placeholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }));
  } // Even though we set attributes that get derived from the preview,
  // we don't access them directly because for the initial render,
  // the `setAttributes` call will not have taken effect. If we're
  // rendering responsive content, setting the responsive classes
  // after the preview has been rendered can result in unwanted
  // clipping or scrollbars. The `getAttributesFromPreview` function
  // that `getMergedAttributes` uses is memoized so that we're not
  // calculating them on every render.


  const {
    caption,
    type,
    allowResponsive,
    className: classFromPreview
  } = getMergedAttributes();
  const className = classnames__WEBPACK_IMPORTED_MODULE_7___default()(classFromPreview, props.className);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_embed_controls__WEBPACK_IMPORTED_MODULE_2__["default"], {
    showEditButton: preview && !cannotEmbed,
    themeSupportsResponsive: themeSupportsResponsive,
    blockSupportsResponsive: responsive,
    allowResponsive: allowResponsive,
    toggleResponsive: toggleResponsive,
    switchBackToURLInput: () => setIsEditingURL(true)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_12__.View, blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_embed_preview__WEBPACK_IMPORTED_MODULE_6__["default"], {
    preview: preview,
    previewable: previewable,
    className: className,
    url: url,
    type: type,
    caption: caption,
    onCaptionChange: value => setAttributes({
      caption: value
    }),
    isSelected: isSelected,
    icon: icon,
    label: label,
    insertBlocksAfter: insertBlocksAfter
  })));
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
    className: "blocks-responsive"
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


/**
 * WordPress dependencies
 */




const EmbedPlaceholder = _ref => {
  let {
    icon,
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
      icon: icon,
      showColors: true
    }),
    label: label,
    className: "wp-block-embed",
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paste a link to the content you want to display on your site.')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: onSubmit
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "url",
    value: value || '',
    className: "components-placeholder__input",
    "aria-label": label,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter URL to embed here…'),
    onChange: onChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    type: "submit"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Embed', 'button label'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-placeholder__learn-more"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('https://wordpress.org/support/article/embeds/')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Learn more about embeds'))), cannotEmbed && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './wp-embed-preview'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


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
      caption,
      onCaptionChange,
      isSelected,
      className,
      icon,
      label,
      insertBlocksAfter
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
    const iframeTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( // translators: %s: host providing embed content e.g: www.youtube.com
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Embedded content from %s'), parsedHostBaseUrl);
    const sandboxClassnames = classnames_dedupe__WEBPACK_IMPORTED_MODULE_2___default()(type, className, 'wp-block-embed__wrapper'); // Disabled because the overlay div doesn't actually have a role or functionality
    // as far as the user is concerned. We're just catching the first click so that
    // the block can be selected without interacting with the embed preview that the overlay covers.

    /* eslint-disable jsx-a11y/no-static-element-interactions */

    const embedWrapper = 'wp-embed' === type ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './wp-embed-preview'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
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
    /* eslint-enable jsx-a11y/no-static-element-interactions */

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
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
    /* translators: %s: host providing embed content e.g: www.youtube.com */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Embedded content from %s can\'t be previewed in the editor.'), parsedHostBaseUrl))), (!_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText.isEmpty(caption) || isSelected) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
      tagName: "figcaption",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add caption'),
      value: caption,
      onChange: onCaptionChange,
      inlineToolbar: true,
      __unstableOnSplitAtEnd: () => insertBlocksAfter((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.createBlock)('core/paragraph'))
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EmbedPreview);

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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full-width Video – hello from the saved content!', 'full-width-video'));
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_3__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'memize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./includes/block-editor/blocks/full-width-video/block.json");


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
} = _block_json__WEBPACK_IMPORTED_MODULE_5__;
/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Returns the embed block's information by matching the provided service provider
 *
 * @param {string} provider The embed block's provider
 * @return {WPBlockVariation} The embed block's information
 */

const getEmbedInfoByProvider = provider => {
  var _getBlockVariations;

  return (_getBlockVariations = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.getBlockVariations)(DEFAULT_EMBED_BLOCK)) === null || _getBlockVariations === void 0 ? void 0 : _getBlockVariations.find(_ref => {
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

  return (_getBlockVariations2 = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.getBlockVariations)(DEFAULT_EMBED_BLOCK)) === null || _getBlockVariations2 === void 0 ? void 0 : _getBlockVariations2.find(_ref2 => {
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
  if (!url || !(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.getBlockType)(DEFAULT_EMBED_BLOCK)) return;
  const matchedBlock = findMoreSuitableBlock(url); // WordPress blocks can work on multiple sites, and so don't have patterns,
  // so if we're in a WordPress block, assume the user has chosen it for a WordPress URL.

  const isCurrentBlockWP = providerNameSlug === 'wordpress' || type === Object(function webpackMissingModule() { var e = new Error("Cannot find module './constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()); // if current block is not WordPress and a more suitable block found
  // that is different from the current one, create the new matched block

  const shouldCreateNewBlock = !isCurrentBlockWP && matchedBlock && (matchedBlock.attributes.providerNameSlug !== providerNameSlug || !providerNameSlug);

  if (shouldCreateNewBlock) {
    return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.createBlock)(DEFAULT_EMBED_BLOCK, {
      url,
      ...restAttributes,
      ...matchedBlock.attributes
    });
  }

  const wpVariation = (_getBlockVariations3 = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.getBlockVariations)(DEFAULT_EMBED_BLOCK)) === null || _getBlockVariations3 === void 0 ? void 0 : _getBlockVariations3.find(_ref3 => {
    let {
      name
    } = _ref3;
    return name === 'wordpress';
  }); // We can't match the URL for WordPress embeds, we have to check the HTML instead.

  if (!wpVariation || !preview || !isFromWordPress(preview.html) || isCurrentBlockWP) {
    return;
  } // This is not the WordPress embed block so transform it into one.


  return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.createBlock)(DEFAULT_EMBED_BLOCK, {
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

  const aspectRatioClassNames = Object(function webpackMissingModule() { var e = new Error("Cannot find module './constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((accumulator, _ref4) => {
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

    for (let ratioIndex = 0; ratioIndex < Object(function webpackMissingModule() { var e = new Error("Cannot find module './constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()); ratioIndex++) {
      const potentialRatio = Object(function webpackMissingModule() { var e = new Error("Cannot find module './constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[ratioIndex];

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
  onReplace((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.createBlock)('core/paragraph', {
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

const getAttributesFromPreview = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'memize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (preview, title, currentClassNames, isResponsive) {
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
    type = Object(function webpackMissingModule() { var e = new Error("Cannot find module './constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
  }

  if (html || 'photo' === type) {
    attributes.type = type;
    attributes.providerNameSlug = providerNameSlug;
  }

  attributes.className = getClassNames(html, currentClassNames, isResponsive && allowResponsive);
  return attributes;
});

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

/***/ "./includes/block-editor/blocks/full-width-video/block.json":
/*!******************************************************************!*\
  !*** ./includes/block-editor/blocks/full-width-video/block.json ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"resource-blocks/full-width-video","version":"1.0.0","title":"Full-width Video","category":"resource-blocks","description":"Full-width Vimeo video embed.","textdomain":"resource-blocks","attributes":{"url":{"type":"string"},"type":{"type":"string"},"providerNameSlug":{"type":"string"},"allowResponsive":{"type":"boolean","default":true},"responsive":{"type":"boolean","default":false},"previewable":{"type":"boolean","default":true}},"editorScript":"file:../../../../build/full-width-video.js","editorStyle":"file:../../../../build/full-width-video.css","style":"file:../../../../build/style-full-width-video.css"}');

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