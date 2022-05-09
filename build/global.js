/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./includes/block-editor/blocks/lib/check-dimensions.js":
/*!**************************************************************!*\
  !*** ./includes/block-editor/blocks/lib/check-dimensions.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ checkDimensions; }
/* harmony export */ });
/**
 * checkDimensions function.
 *
 * returns false if either designWidth or
 * targetHeight are not equal to width or height.
 *
 * @param {string} width        the width of the current object in the media attachment (wp.media.view.Attachment).
 * @param {string} height       the height of the current object in the media attachment (wp.media.view.Attachment).
 * @param {string} targetWidth  a hardcoded target width, can be overridden in the function by a block attribute.
 * @param {string} targetHeight a hardcoded target height, can be overridden in the function by a block attribute.
 * @private
 */
function checkDimensions(width, height) {
  let targetWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  let targetHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  // default is '', if it is still default, continue
  if ('' !== targetWidth) {
    if (parseInt(targetWidth) !== parseInt(width)) {
      return false;
    }
  } // default is '', if it is still default, continue


  if ('' !== targetHeight) {
    if (parseInt(targetHeight) !== parseInt(height)) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./includes/global/components/constants.js":
/*!*************************************************!*\
  !*** ./includes/global/components/constants.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WIDTH": function() { return /* binding */ WIDTH; },
/* harmony export */   "HEIGHT": function() { return /* binding */ HEIGHT; }
/* harmony export */ });
const WIDTH = '995';
const HEIGHT = '410';

/***/ }),

/***/ "./includes/global/components/post-thumbnail.js":
/*!******************************************************!*\
  !*** ./includes/global/components/post-thumbnail.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./includes/global/components/constants.js");
/* harmony import */ var _block_editor_blocks_lib_check_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../block-editor/blocks/lib/check-dimensions */ "./includes/block-editor/blocks/lib/check-dimensions.js");


/**
 * WordPress dependencies.
 */




/**
 * Internal dependencies.
 */



/**
 * React component PostThumbnail.
 *
 * @param {number}   featuredImageId.featuredImageId
 * @param {number}   featuredImageId
 * @param {Object}   media
 * @param {Object}   meta
 * @param {Function} setMeta
 * @param {Object}   featuredImageId.media
 * @param {Object}   featuredImageId.meta
 * @param {Function} featuredImageId.setMeta
 * @return {Object} {JSX.Element}
 * @function Object() { [native code] }
 */

function PostThumbnail(_ref) {
  var _media$media_details$, _media$media_details$2;

  let {
    featuredImageId,
    media,
    meta,
    setMeta
  } = _ref;
  const instructions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('To edit the post thumbnail, you need permission to upload media.'));
  let mediaWidth, mediaHeight;

  if (media) {
    mediaWidth = media.media_details.width;
    mediaHeight = media.media_details.height;
  }
  /**
   * Image sizeCheck.
   *
   * Runs onSelect, checks dimensions, opens modal if incorrect.
   *
   * @param {Object} image
   */


  function imageSizeCheck(image) {
    var _image$width, _image$height;

    // Check for minimum width.
    // Selecting a new image from the Media Library uses media.width,
    // Uploading a new image uses media.media_details.width
    const widthCheck = (_image$width = image.width) !== null && _image$width !== void 0 ? _image$width : image.media_details.width;
    const heightCheck = (_image$height = image.height) !== null && _image$height !== void 0 ? _image$height : image.media_details.height;

    if (widthCheck !== parseInt(_constants__WEBPACK_IMPORTED_MODULE_4__.WIDTH) || heightCheck !== parseInt(_constants__WEBPACK_IMPORTED_MODULE_4__.HEIGHT)) {
      openModal();
    } else {
      onUpdateImage(image);
    }
  } // set up modal.


  const [modalIsOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  } // Image selected and updated.


  function onUpdateImage(image) {
    setMeta({ ...meta,
      post_thumbnail: image.id
    });
  } // Image removed.


  function onRemoveImage() {
    setMeta({ ...meta,
      post_thumbnail: null
    });
  } // onClickButton function contains open
  // and logic for checkDimensions


  const onClickButton = open => {
    // Event Listener approach.
    const originalAttachmentTrigger = wp.media.view.Attachment.prototype.trigger;

    wp.media.view.Attachment.prototype.trigger = function () {
      // triggers all events, compares against 'ready'
      // first argument contains the event name
      if (arguments[0] === 'ready') {
        if (!(0,_block_editor_blocks_lib_check_dimensions__WEBPACK_IMPORTED_MODULE_5__["default"])(this.model.attributes.width, this.model.attributes.height, _constants__WEBPACK_IMPORTED_MODULE_4__.WIDTH, _constants__WEBPACK_IMPORTED_MODULE_4__.HEIGHT)) {
          // if checkDimensions returns false
          // add disabled class to element
          this.$el.addClass('resource-disabled');
        }
      }

      originalAttachmentTrigger.apply(this, Array.prototype.slice.call(arguments));
    };

    return open;
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-post-featured-image",
    style: {
      width: '100%'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      marginBottom: '0.6em',
      display: 'block'
    }
  }, "Post thumbnail (", _constants__WEBPACK_IMPORTED_MODULE_4__.WIDTH, "px x ", _constants__WEBPACK_IMPORTED_MODULE_4__.HEIGHT, "px)"), media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: `editor-post-featured-image-${featuredImageId}-describedby`,
    className: "hidden"
  }, media.alt_text && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( // translators: %s: Current image
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Current image: %s'), media.alt_text), !media.alt_text && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( // translators: %s: File name
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The current image has no alternative text. The file name is: %s'), ((_media$media_details$ = media.media_details.sizes) === null || _media$media_details$ === void 0 ? void 0 : (_media$media_details$2 = _media$media_details$.full) === null || _media$media_details$2 === void 0 ? void 0 : _media$media_details$2.file) || media.slug)), modalIsOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    contentLabel: "Error",
    title: "Error"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Image must be ", _constants__WEBPACK_IMPORTED_MODULE_4__.WIDTH, "px x ", _constants__WEBPACK_IMPORTED_MODULE_4__.HEIGHT, "px! Choose another image.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, {
    fallback: instructions
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Post thumbnail'),
    onSelect: imageSizeCheck,
    allowedTypes: ['image'],
    modalClass: "editor-post-featured-image__media-modal",
    value: featuredImageId,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "editor-post-featured-image__container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: !featuredImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: onClickButton(open),
        "aria-label": !featuredImageId ? null : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit or update the image'),
        "aria-describedby": !featuredImageId ? null : `editor-post-featured-image-${featuredImageId}-describedby`
      }, !!featuredImageId && media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ResponsiveWrapper, {
        naturalWidth: mediaWidth,
        naturalHeight: mediaHeight,
        isInline: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: media.source_url,
        alt: ""
      })), !!featuredImageId && !media && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), !featuredImageId && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set post thumbnail')));
    }
  })), !!featuredImageId && media && !media.isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Post thumbnail'),
    onSelect: imageSizeCheck,
    unstableFeaturedImageFlow: true,
    allowedTypes: ['image'],
    modalClass: "editor-post-featured-image__media-modal",
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: onClickButton(open),
        variant: "secondary"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace Image'));
    }
  })), !!featuredImageId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: onRemoveImage,
    variant: "link",
    isDestructive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove post thumbnail')))));
}

/* harmony default export */ __webpack_exports__["default"] = (PostThumbnail);

/***/ }),

/***/ "./includes/global/index.js":
/*!**********************************!*\
  !*** ./includes/global/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _post_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-meta */ "./includes/global/post-meta.js");
/* harmony import */ var _projects_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-meta */ "./includes/global/projects-meta.js");
/* harmony import */ var _team_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-meta */ "./includes/global/team-meta.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./includes/global/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./includes/global/editor.scss");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






/**
 * Method to retrieve the type of the post.
 */

const getPostType = () => wp.data.select('core/editor').getCurrentPostType(); // set the initial postType.


let postType = getPostType(); // DOM ready.

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(() => {
  const {
    removeEditorPanel
  } = wp.data.dispatch('core/edit-post'); // subscribe, since this runs multiple times.

  wp.data.subscribe(() => {
    // get the current postType.
    const newPostType = getPostType(); // once the post type changes from null to an actual value, the post type is valid.

    if (postType !== newPostType) {
      // this is a regular 'Recently' post type.
      if (newPostType === 'post') {
        // remove panels.
        removeEditorPanel('featured-image');
        removeEditorPanel('post-excerpt');
        removeEditorPanel('discussion-panel'); // get registered plugins.

        const registeredPlugins = (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.getPlugins)(); // register panel (verify that plugin is registered only once).

        if (!registeredPlugins.some(plugin => plugin.name === 'post-meta')) {
          (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('post-meta', {
            render() {
              return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_meta__WEBPACK_IMPORTED_MODULE_3__["default"], null);
            }

          });
        }
      } // this is a Projects post type.


      if (newPostType === 'projects') {
        // get registered plugins.
        const registeredPlugins = (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.getPlugins)(); // register panel (verify that plugin is registered only once).

        if (!registeredPlugins.some(plugin => plugin.name === 'projects-meta')) {
          (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('projects-meta', {
            render() {
              return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_projects_meta__WEBPACK_IMPORTED_MODULE_4__["default"], null);
            }

          });
        }
      } // this is a Team post type.


      if (newPostType === 'team') {
        // get registered plugins.
        const registeredPlugins = (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.getPlugins)(); // register panel (verify that plugin is registered only once).

        if (!registeredPlugins.some(plugin => plugin.name === 'team-meta')) {
          (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('team-meta', {
            render() {
              return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_team_meta__WEBPACK_IMPORTED_MODULE_5__["default"], null);
            }

          });
        }
      }
    } // update the postType variable, so the above runs only once.


    postType = newPostType;
  });
});

/***/ }),

/***/ "./includes/global/post-meta.js":
/*!**************************************!*\
  !*** ./includes/global/post-meta.js ***!
  \**************************************/
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
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/icons */ "./includes/icons/icons.js");
/* harmony import */ var _components_post_thumbnail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/post-thumbnail */ "./includes/global/components/post-thumbnail.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




const PostMeta = () => {
  // meta information for this post.
  // includes fields: 'post_thumbnail' and 'optional_description'.
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('postType', 'post', 'meta'); // post thumbnail image ID

  const featuredImageId = meta.post_thumbnail; // media object from meta.post_thumbnail (ID).
  // use 'id' as a dependency (final argument), in order to update on the fly.

  const media = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('core').getMedia(featuredImageId), [featuredImageId]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__.PluginDocumentSettingPanel, {
    name: "resource-blocks-meta",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Post Meta', 'resource-blocks'),
    initialOpen: "true",
    opened: "true",
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_6__["default"].resource
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_post_thumbnail__WEBPACK_IMPORTED_MODULE_7__["default"], {
    meta: meta,
    setMeta: setMeta,
    media: media,
    featuredImageId: featuredImageId
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Optional Description (displayed after title)', 'resource-blocks'),
    value: meta.optional_description,
    onChange: value => {
      setMeta({ ...meta,
        optional_description: value
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PostMeta);

/***/ }),

/***/ "./includes/global/projects-meta.js":
/*!******************************************!*\
  !*** ./includes/global/projects-meta.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/icons */ "./includes/icons/icons.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const ProjectsMeta = () => {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', 'projects', 'meta');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__.PluginDocumentSettingPanel, {
    name: "resource-blocks-projects-meta",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Projects Meta', 'resource-blocks'),
    initialOpen: "true",
    opened: "true",
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_5__["default"].resource
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Second Line (displayed after title). Usually City, ST', 'resource-blocks'),
    value: meta.second_line,
    onChange: value => {
      setMeta({ ...meta,
        second_line: value
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectsMeta);

/***/ }),

/***/ "./includes/global/team-meta.js":
/*!**************************************!*\
  !*** ./includes/global/team-meta.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/icons */ "./includes/icons/icons.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const TeamMeta = () => {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', 'team', 'meta');
  console.log(meta);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__.PluginDocumentSettingPanel, {
    name: "resource-blocks-team-meta",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Team Meta', 'resource-blocks'),
    initialOpen: "true",
    opened: "true",
    icon: _icons_icons__WEBPACK_IMPORTED_MODULE_5__["default"].resource
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Official team member title (ex. President).', 'resource-blocks'),
    value: meta.team_member_title,
    onChange: value => {
      setMeta({ ...meta,
        team_member_title: value
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamMeta);

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
icons.question = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m12 0c-3.7 0-6.1 1.5-8 4.3-.4.5-.3 1.1.2 1.5l2 1.5c.5.4 1.2.3 1.6-.2 1.2-1.5 2-2.3 3.9-2.3 1.4 0 3.2.9 3.2 2.3 0 1.1-.9 1.6-2.3 2.4-1.7.9-3.9 2.1-3.9 5v.5c0 .6.5 1.1 1.1 1.1h3.4c.6 0 1.1-.5 1.1-1.1v-.3c0-2 5.9-2.1 5.9-7.5 0-4.1-4.2-7.2-8.2-7.2zm-.4 17.5c-1.8 0-3.2 1.5-3.2 3.2 0 1.8 1.5 3.2 3.2 3.2s3.2-1.5 3.2-3.2-1.5-3.2-3.2-3.2z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0 0h24v24h-24z",
  fill: "none"
}));
icons.heading = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m21.6 4v16h1.6c.4 0 .8.4.8.8v1.6c0 .4-.4.8-.8.8h-8c-.4 0-.8-.4-.8-.8v-1.6c0-.4.4-.8.8-.8h1.6v-6.4h-9.6v6.4h1.6c.4 0 .8.4.8.8v1.6c0 .4-.4.8-.8.8h-8c-.4 0-.8-.4-.8-.8v-1.6c0-.4.4-.8.8-.8h1.6v-16h-1.6c-.4 0-.8-.4-.8-.8v-1.6c0-.4.4-.8.8-.8h8c.4 0 .8.4.8.8v1.6c0 .4-.4.8-.8.8h-1.6v6.4h9.6v-6.4h-1.6c-.4 0-.8-.4-.8-.8v-1.6c0-.4.4-.8.8-.8h8c.4 0 .8.4.8.8v1.6c0 .4-.4.8-.8.8z"
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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["domReady"];

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