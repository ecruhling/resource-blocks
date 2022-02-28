/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./includes/global/index.js":
/*!**********************************!*\
  !*** ./includes/global/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./includes/global/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./includes/global/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./includes/global/block.json");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _post_thumbnail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-thumbnail */ "./includes/global/post-thumbnail.js");


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
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */


const {
  name,
  ...settings
} = _block_json__WEBPACK_IMPORTED_MODULE_4__;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(name, { ...settings
});
/**
 * Register post meta fields, uses global.js
 */



/**
 * Check what kind of post
 */

const getPostType = () => wp.data.select('core/editor').getCurrentPostType();

const postType = getPostType(); // DOM ready

wp.domReady(() => {
  const {
    removeEditorPanel
  } = wp.data.dispatch('core/edit-post'); // subscribe, since this runs multiple times

  wp.data.subscribe(() => {
    // get the current postFormat
    const newPostType = getPostType(); // once the post type changes from null to an actual value, the post type is valid

    if (postType !== newPostType) {
      // this is a post
      if (newPostType === 'post') {
        // remove panels
        removeEditorPanel('featured-image');
        removeEditorPanel('post-excerpt');
        removeEditorPanel('discussion-panel');
      }
    }
  });
}); // register panel

(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__.registerPlugin)('post-thumbnail', {
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_thumbnail__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }

});

/***/ }),

/***/ "./includes/global/post-thumbnail.js":
/*!*******************************************!*\
  !*** ./includes/global/post-thumbnail.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/icons */ "./includes/icons/icons.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const ALLOWED_MEDIA_TYPES = ['image']; // Used when labels from post type were not yet loaded or when they are not present.

const DEFAULT_FEATURE_IMAGE_LABEL = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Post thumbnail');

const DEFAULT_SET_FEATURE_IMAGE_LABEL = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set post thumbnail');

const DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove post thumbnail');

function PostThumbnail(_ref) {
  var _media$media_details$, _media$media_details$2;

  let {
    onUpdateImage,
    onDropImage,
    onRemoveImage,
    noticeUI,
    meta
  } = _ref;
  const instructions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('To edit the post thumbnail, you need permission to upload media.'));
  const media = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core').getMedia(meta.post_thumbnail), []);
  let mediaWidth, mediaHeight, mediaSourceUrl;

  if (media) {
    mediaWidth = media.media_details.width;
    mediaHeight = media.media_details.height;
    mediaSourceUrl = media.source_url;
  }
  /**
   * Image selected.
   *
   * @param  image
   */


  function imageSizeCheck(image) {
    var _image$width, _image$height;

    // Check for minimum width.
    // Selecting a new image from the Media Library uses media.width,
    // Uploading a new image uses media.media_details.width
    console.log(image);
    const widthCheck = (_image$width = image.width) !== null && _image$width !== void 0 ? _image$width : image.media_details.width;
    const heightCheck = (_image$height = image.height) !== null && _image$height !== void 0 ? _image$height : image.media_details.height;

    if (widthCheck !== 995 || heightCheck !== 410) {
      openModal();
    }
  }

  const [modalIsOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, noticeUI, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-featured-image",
    style: {
      width: '100%'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      marginBottom: '0.6em',
      display: 'block'
    }
  }, "Post thumbnail (995px x 410px)"), media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: `editor-post-featured-image-${meta.post_thumbnail}-describedby`,
    className: "hidden"
  }, media.alt_text && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( // Translators: %s: The selected image alt text.
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Current image: %s'), media.alt_text), !media.alt_text && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( // Translators: %s: The selected image filename.
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The current image has no alternative text. The file name is: %s'), ((_media$media_details$ = media.media_details.sizes) === null || _media$media_details$ === void 0 ? void 0 : (_media$media_details$2 = _media$media_details$.full) === null || _media$media_details$2 === void 0 ? void 0 : _media$media_details$2.file) || media.slug)), modalIsOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    contentLabel: "Error",
    title: "Error"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Image must be 995px x 410px! Choose another image.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, {
    fallback: instructions
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    title: DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "editor-post-featured-image__container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: !meta.post_thumbnail ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open,
        "aria-label": !meta.post_thumbnail ? null : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit or update the image'),
        "aria-describedby": !meta.post_thumbnail ? null : `editor-post-featured-image-${meta.post_thumbnail}-describedby`
      }, !!meta.post_thumbnail && media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ResponsiveWrapper, {
        naturalWidth: mediaWidth,
        naturalHeight: mediaHeight,
        isInline: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: mediaSourceUrl,
        alt: ""
      })), !!meta.post_thumbnail && !media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), !meta.post_thumbnail && DEFAULT_SET_FEATURE_IMAGE_LABEL), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DropZone, {
        onFilesDrop: onDropImage
      }));
    },
    value: meta.post_thumbnail
  })), !!meta.post_thumbnail && media && !media.isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    title: DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    unstableFeaturedImageFlow: true,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        variant: "secondary"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace Image'));
    }
  })), !!meta.post_thumbnail && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: onRemoveImage,
    variant: "link",
    isDestructive: true
  }, DEFAULT_REMOVE_FEATURE_IMAGE_LABEL))));
}

const PostMeta = () => {
  const meta = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core/editor').getEditedPostAttribute('meta'), []);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('core/editor');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__.PluginDocumentSettingPanel, {
    name: "resource-blocks-meta",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Post Meta', 'resource-blocks'),
    initialOpen: "true",
    opened: "true",
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_6__["default"].resource
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostThumbnail, {
    meta: meta
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Optional Description (displayed after title)', 'resource-blocks'),
    value: meta.optional_description,
    onChange: value => editPost({
      meta: {
        optional_description: value
      }
    })
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PostMeta);

/***/ }),

/***/ "./includes/icons/icons.js":
/*!*********************************!*\
  !*** ./includes/icons/icons.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./includes/global/editor.scss":
/*!*************************************!*\
  !*** ./includes/global/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./includes/global/style.scss":
/*!************************************!*\
  !*** ./includes/global/style.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "./includes/global/block.json":
/*!************************************!*\
  !*** ./includes/global/block.json ***!
  \************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"resource-blocks/global","version":"1.0.0","title":"Global Styles","category":"resource-blocks","textdomain":"resource-blocks","editorStyle":"file:../../../../build/global.css","style":"file:../../../../build/style-global.css"}');

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
/******/ 			"global": 0,
/******/ 			"./style-global": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-global"], function() { return __webpack_require__("./includes/global/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=global.js.map