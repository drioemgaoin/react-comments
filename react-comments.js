(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Comments"] = factory(require("react"));
	else
		root["Comments"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _CommentList = __webpack_require__(/*! ./CommentList/CommentList */ 1);
	
	var _CommentList2 = _interopRequireDefault(_CommentList);
	
	var _CommentForm = __webpack_require__(/*! ./CommentForm/CommentForm */ 10);
	
	var _CommentForm2 = _interopRequireDefault(_CommentForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    CommentList: _CommentList2.default,
	    CommentForm: _CommentForm2.default
	};

/***/ },
/* 1 */
/*!*****************************************!*\
  !*** ./lib/CommentList/CommentList.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CommentAvatar = __webpack_require__(/*! ./CommentAvatar */ 3);
	
	var _CommentAvatar2 = _interopRequireDefault(_CommentAvatar);
	
	var _CommentBody = __webpack_require__(/*! ./CommentBody */ 4);
	
	var _CommentBody2 = _interopRequireDefault(_CommentBody);
	
	var _CommentHeader = __webpack_require__(/*! ./CommentHeader */ 5);
	
	var _CommentHeader2 = _interopRequireDefault(_CommentHeader);
	
	__webpack_require__(/*! ../comments.scss */ 6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommentList = function CommentList(_ref) {
	    var comments = _ref.comments;
	
	    return _react2.default.createElement(
	        'div',
	        { className: 'comments' },
	        comments.map(function (comment) {
	            return _react2.default.createElement(
	                'div',
	                { key: comment.id, className: 'comment' },
	                _react2.default.createElement(_CommentAvatar2.default, null),
	                _react2.default.createElement(_CommentHeader2.default, { author: comment.author, date: comment.date }),
	                _react2.default.createElement(_CommentBody2.default, { content: comment.content })
	            );
	        })
	    );
	};
	
	CommentList.defaultProps = {
	    comments: []
	};
	
	CommentList.propTypes = {
	    comments: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	        author: _react2.default.PropTypes.string.isRequired,
	        date: _react2.default.PropTypes.string.isRequired,
	        content: _react2.default.PropTypes.string.isRequired
	    }))
	};
	
	exports.default = CommentList;

/***/ },
/* 2 */
/*!****************************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"} ***!
  \****************************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/*!*******************************************!*\
  !*** ./lib/CommentList/CommentAvatar.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommentAvatar = function (_React$Component) {
	    _inherits(CommentAvatar, _React$Component);
	
	    function CommentAvatar() {
	        _classCallCheck(this, CommentAvatar);
	
	        return _possibleConstructorReturn(this, (CommentAvatar.__proto__ || Object.getPrototypeOf(CommentAvatar)).apply(this, arguments));
	    }
	
	    _createClass(CommentAvatar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'comment-avatar' },
	                _react2.default.createElement('img', null)
	            );
	        }
	    }]);
	
	    return CommentAvatar;
	}(_react2.default.Component);
	
	exports.default = CommentAvatar;

/***/ },
/* 4 */
/*!*****************************************!*\
  !*** ./lib/CommentList/CommentBody.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommentBody = function CommentBody(_ref) {
	    var content = _ref.content;
	
	    return _react2.default.createElement(
	        "div",
	        { className: "comment-body" },
	        _react2.default.createElement(
	            "p",
	            null,
	            content
	        )
	    );
	};
	
	CommentBody.propTypes = {
	    content: _react2.default.PropTypes.string.isRequired
	};
	
	exports.default = CommentBody;

/***/ },
/* 5 */
/*!*******************************************!*\
  !*** ./lib/CommentList/CommentHeader.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommentHeader = function CommentHeader(_ref) {
	    var author = _ref.author,
	        date = _ref.date;
	
	    return _react2.default.createElement(
	        "div",
	        { className: "comment-header" },
	        _react2.default.createElement(
	            "div",
	            null,
	            author
	        ),
	        _react2.default.createElement(
	            "div",
	            null,
	            date
	        )
	    );
	};
	
	CommentHeader.propTypes = {
	    author: _react2.default.PropTypes.string.isRequired,
	    date: _react2.default.PropTypes.string.isRequired
	};
	
	exports.default = CommentHeader;

/***/ },
/* 6 */
/*!***************************!*\
  !*** ./lib/comments.scss ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../~/css-loader!../~/sass-loader?outputStyle=expanded&includePaths[]=C:/Users/romain.diegoni/Documents/Root/Projects/ruby/react-comments/bower_components&includePaths[]=C:/Users/romain.diegoni/Documents/Root/Projects/ruby/react-comments/node_modules!./comments.scss */ 7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../~/style-loader/addStyles.js */ 9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js?outputStyle=expanded&includePaths[]=C:\\Users\\romain.diegoni\\Documents\\Root\\Projects\\ruby\\react-comments\\bower_components&includePaths[]=C:\\Users\\romain.diegoni\\Documents\\Root\\Projects\\ruby\\react-comments\\node_modules!./comments.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js?outputStyle=expanded&includePaths[]=C:\\Users\\romain.diegoni\\Documents\\Root\\Projects\\ruby\\react-comments\\bower_components&includePaths[]=C:\\Users\\romain.diegoni\\Documents\\Root\\Projects\\ruby\\react-comments\\node_modules!./comments.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?outputStyle=expanded&includePaths[]=C:/Users/romain.diegoni/Documents/Root/Projects/ruby/react-comments/bower_components&includePaths[]=C:/Users/romain.diegoni/Documents/Root/Projects/ruby/react-comments/node_modules!./lib/comments.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../~/css-loader/lib/css-base.js */ 8)();
	// imports
	
	
	// module
	exports.push([module.id, ".comments .comment:not(:first-child) {\n  margin-top: 50px;\n}\n\n.comments .comment-avatar {\n  display: inline-block;\n  vertical-align: top;\n  width: 50px;\n}\n\n.comments .comment-avatar img {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin: auto;\n  background-size: contain;\n  vertical-align: middle;\n}\n\n.comments .comment-header {\n  position: relative;\n  display: inline-block;\n  line-height: 50px;\n  height: 50px;\n  width: calc(100% - 100px);\n  background: lightgrey;\n  margin-left: 50px;\n}\n\n.comments .comment-header div {\n  display: inline-block;\n}\n\n.comments .comment-header div:first-child {\n  float: left;\n}\n\n.comments .comment-header div:last-child {\n  float: right;\n}\n\n.comments .comment-header:before {\n  content: '';\n  position: absolute;\n  left: -25px;\n  border-top: 25px solid transparent;\n  border-bottom: 25px solid transparent;\n  border-right: 25px solid lightgrey;\n}\n\n.comments .comment-body {\n  margin-left: 100px;\n}\n", ""]);
	
	// exports


/***/ },
/* 8 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/*!*****************************************!*\
  !*** ./lib/CommentForm/CommentForm.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxForm = __webpack_require__(/*! redux-form */ 11);
	
	var _redux = __webpack_require__(/*! redux */ 187);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommentForm = function (_React$Component) {
	    _inherits(CommentForm, _React$Component);
	
	    function CommentForm() {
	        _classCallCheck(this, CommentForm);
	
	        return _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).apply(this, arguments));
	    }
	
	    _createClass(CommentForm, [{
	        key: 'handleSubmit',
	        value: function handleSubmit(data) {
	            console.log(data);
	        }
	    }, {
	        key: 'renderField',
	        value: function renderField(fields) {
	            var input = fields.input,
	                label = fields.label,
	                type = fields.type,
	                className = fields.className,
	                _fields$meta = fields.meta,
	                touched = _fields$meta.touched,
	                error = _fields$meta.error,
	                warning = _fields$meta.warning;
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'label',
	                    null,
	                    label
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement('input', _extends({}, input, { placeholder: label, type: type, className: className })),
	                    touched && (error && _react2.default.createElement(
	                        'span',
	                        null,
	                        error
	                    ) || warning && _react2.default.createElement(
	                        'span',
	                        null,
	                        warning
	                    ))
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props,
	                handleSubmit = _props.handleSubmit,
	                submitting = _props.submitting;
	
	            return _react2.default.createElement(
	                'form',
	                { id: 'comment', onSubmit: handleSubmit(function (data) {
	                        return _this2.handleSubmit(data);
	                    }) },
	                _react2.default.createElement(_reduxForm.Field, _extends({ name: 'content',
	                    component: this.renderField,
	                    type: 'text',
	                    label: 'Content'
	                }, this.props)),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement('input', { type: 'submit', value: 'Create', disabled: submitting })
	                )
	            );
	        }
	    }]);
	
	    return CommentForm;
	}(_react2.default.Component);
	
	CommentForm = (0, _reduxForm.reduxForm)({ form: 'comment', store: (0, _redux.createStore)(_reduxForm.reduxForm) })(CommentForm);
	exports.default = CommentForm;

/***/ },
/* 11 */
/*!***********************************!*\
  !*** ./~/redux-form/lib/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.values = exports.untouch = exports.unregisterField = exports.touch = exports.SubmissionError = exports.submit = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.setSubmitSucceeded = exports.setSubmitFailed = exports.reset = exports.registerField = exports.reduxForm = exports.reducer = exports.propTypes = exports.hasSubmitFailed = exports.hasSubmitSucceeded = exports.isSubmitting = exports.isValid = exports.isPristine = exports.isInvalid = exports.isDirty = exports.initialize = exports.getFormSubmitErrors = exports.getFormSyncWarnings = exports.getFormAsyncErrors = exports.getFormSyncErrors = exports.getFormInitialValues = exports.getFormValues = exports.getFormNames = exports.formValueSelector = exports.focus = exports.FormSection = exports.Form = exports.FieldArray = exports.Fields = exports.Field = exports.destroy = exports.clearSubmitErrors = exports.change = exports.blur = exports.autofill = exports.arrayUnshift = exports.arraySwap = exports.arraySplice = exports.arrayShift = exports.arrayRemoveAll = exports.arrayRemove = exports.arrayPush = exports.arrayPop = exports.arrayMove = exports.arrayInsert = exports.actionTypes = undefined;
	
	var _createAll2 = __webpack_require__(/*! ./createAll */ 12);
	
	var _createAll3 = _interopRequireDefault(_createAll2);
	
	var _plain = __webpack_require__(/*! ./structure/plain */ 66);
	
	var _plain2 = _interopRequireDefault(_plain);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _createAll = (0, _createAll3.default)(_plain2.default);
	
	var actionTypes = _createAll.actionTypes,
	    arrayInsert = _createAll.arrayInsert,
	    arrayMove = _createAll.arrayMove,
	    arrayPop = _createAll.arrayPop,
	    arrayPush = _createAll.arrayPush,
	    arrayRemove = _createAll.arrayRemove,
	    arrayRemoveAll = _createAll.arrayRemoveAll,
	    arrayShift = _createAll.arrayShift,
	    arraySplice = _createAll.arraySplice,
	    arraySwap = _createAll.arraySwap,
	    arrayUnshift = _createAll.arrayUnshift,
	    autofill = _createAll.autofill,
	    blur = _createAll.blur,
	    change = _createAll.change,
	    clearSubmitErrors = _createAll.clearSubmitErrors,
	    destroy = _createAll.destroy,
	    Field = _createAll.Field,
	    Fields = _createAll.Fields,
	    FieldArray = _createAll.FieldArray,
	    Form = _createAll.Form,
	    FormSection = _createAll.FormSection,
	    focus = _createAll.focus,
	    formValueSelector = _createAll.formValueSelector,
	    getFormNames = _createAll.getFormNames,
	    getFormValues = _createAll.getFormValues,
	    getFormInitialValues = _createAll.getFormInitialValues,
	    getFormSyncErrors = _createAll.getFormSyncErrors,
	    getFormAsyncErrors = _createAll.getFormAsyncErrors,
	    getFormSyncWarnings = _createAll.getFormSyncWarnings,
	    getFormSubmitErrors = _createAll.getFormSubmitErrors,
	    initialize = _createAll.initialize,
	    isDirty = _createAll.isDirty,
	    isInvalid = _createAll.isInvalid,
	    isPristine = _createAll.isPristine,
	    isValid = _createAll.isValid,
	    isSubmitting = _createAll.isSubmitting,
	    hasSubmitSucceeded = _createAll.hasSubmitSucceeded,
	    hasSubmitFailed = _createAll.hasSubmitFailed,
	    propTypes = _createAll.propTypes,
	    reducer = _createAll.reducer,
	    reduxForm = _createAll.reduxForm,
	    registerField = _createAll.registerField,
	    reset = _createAll.reset,
	    setSubmitFailed = _createAll.setSubmitFailed,
	    setSubmitSucceeded = _createAll.setSubmitSucceeded,
	    startAsyncValidation = _createAll.startAsyncValidation,
	    startSubmit = _createAll.startSubmit,
	    stopAsyncValidation = _createAll.stopAsyncValidation,
	    stopSubmit = _createAll.stopSubmit,
	    submit = _createAll.submit,
	    SubmissionError = _createAll.SubmissionError,
	    touch = _createAll.touch,
	    unregisterField = _createAll.unregisterField,
	    untouch = _createAll.untouch,
	    values = _createAll.values;
	exports.actionTypes = actionTypes;
	exports.arrayInsert = arrayInsert;
	exports.arrayMove = arrayMove;
	exports.arrayPop = arrayPop;
	exports.arrayPush = arrayPush;
	exports.arrayRemove = arrayRemove;
	exports.arrayRemoveAll = arrayRemoveAll;
	exports.arrayShift = arrayShift;
	exports.arraySplice = arraySplice;
	exports.arraySwap = arraySwap;
	exports.arrayUnshift = arrayUnshift;
	exports.autofill = autofill;
	exports.blur = blur;
	exports.change = change;
	exports.clearSubmitErrors = clearSubmitErrors;
	exports.destroy = destroy;
	exports.Field = Field;
	exports.Fields = Fields;
	exports.FieldArray = FieldArray;
	exports.Form = Form;
	exports.FormSection = FormSection;
	exports.focus = focus;
	exports.formValueSelector = formValueSelector;
	exports.getFormNames = getFormNames;
	exports.getFormValues = getFormValues;
	exports.getFormInitialValues = getFormInitialValues;
	exports.getFormSyncErrors = getFormSyncErrors;
	exports.getFormAsyncErrors = getFormAsyncErrors;
	exports.getFormSyncWarnings = getFormSyncWarnings;
	exports.getFormSubmitErrors = getFormSubmitErrors;
	exports.initialize = initialize;
	exports.isDirty = isDirty;
	exports.isInvalid = isInvalid;
	exports.isPristine = isPristine;
	exports.isValid = isValid;
	exports.isSubmitting = isSubmitting;
	exports.hasSubmitSucceeded = hasSubmitSucceeded;
	exports.hasSubmitFailed = hasSubmitFailed;
	exports.propTypes = propTypes;
	exports.reducer = reducer;
	exports.reduxForm = reduxForm;
	exports.registerField = registerField;
	exports.reset = reset;
	exports.setSubmitFailed = setSubmitFailed;
	exports.setSubmitSucceeded = setSubmitSucceeded;
	exports.startAsyncValidation = startAsyncValidation;
	exports.startSubmit = startSubmit;
	exports.stopAsyncValidation = stopAsyncValidation;
	exports.stopSubmit = stopSubmit;
	exports.submit = submit;
	exports.SubmissionError = SubmissionError;
	exports.touch = touch;
	exports.unregisterField = unregisterField;
	exports.untouch = untouch;
	exports.values = values;

/***/ },
/* 12 */
/*!***************************************!*\
  !*** ./~/redux-form/lib/createAll.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _reducer = __webpack_require__(/*! ./reducer */ 13);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _reduxForm = __webpack_require__(/*! ./reduxForm */ 123);
	
	var _reduxForm2 = _interopRequireDefault(_reduxForm);
	
	var _Field = __webpack_require__(/*! ./Field */ 228);
	
	var _Field2 = _interopRequireDefault(_Field);
	
	var _Fields = __webpack_require__(/*! ./Fields */ 237);
	
	var _Fields2 = _interopRequireDefault(_Fields);
	
	var _FieldArray = __webpack_require__(/*! ./FieldArray */ 239);
	
	var _FieldArray2 = _interopRequireDefault(_FieldArray);
	
	var _formValueSelector = __webpack_require__(/*! ./formValueSelector */ 242);
	
	var _formValueSelector2 = _interopRequireDefault(_formValueSelector);
	
	var _values = __webpack_require__(/*! ./values */ 243);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _getFormNames = __webpack_require__(/*! ./selectors/getFormNames */ 244);
	
	var _getFormNames2 = _interopRequireDefault(_getFormNames);
	
	var _getFormValues = __webpack_require__(/*! ./selectors/getFormValues */ 245);
	
	var _getFormValues2 = _interopRequireDefault(_getFormValues);
	
	var _getFormInitialValues = __webpack_require__(/*! ./selectors/getFormInitialValues */ 246);
	
	var _getFormInitialValues2 = _interopRequireDefault(_getFormInitialValues);
	
	var _getFormSyncErrors = __webpack_require__(/*! ./selectors/getFormSyncErrors */ 247);
	
	var _getFormSyncErrors2 = _interopRequireDefault(_getFormSyncErrors);
	
	var _getFormAsyncErrors = __webpack_require__(/*! ./selectors/getFormAsyncErrors */ 248);
	
	var _getFormAsyncErrors2 = _interopRequireDefault(_getFormAsyncErrors);
	
	var _getFormSyncWarnings = __webpack_require__(/*! ./selectors/getFormSyncWarnings */ 249);
	
	var _getFormSyncWarnings2 = _interopRequireDefault(_getFormSyncWarnings);
	
	var _getFormSubmitErrors = __webpack_require__(/*! ./selectors/getFormSubmitErrors */ 250);
	
	var _getFormSubmitErrors2 = _interopRequireDefault(_getFormSubmitErrors);
	
	var _isDirty = __webpack_require__(/*! ./selectors/isDirty */ 251);
	
	var _isDirty2 = _interopRequireDefault(_isDirty);
	
	var _isInvalid = __webpack_require__(/*! ./selectors/isInvalid */ 253);
	
	var _isInvalid2 = _interopRequireDefault(_isInvalid);
	
	var _isPristine = __webpack_require__(/*! ./selectors/isPristine */ 252);
	
	var _isPristine2 = _interopRequireDefault(_isPristine);
	
	var _isValid = __webpack_require__(/*! ./selectors/isValid */ 226);
	
	var _isValid2 = _interopRequireDefault(_isValid);
	
	var _isSubmitting = __webpack_require__(/*! ./selectors/isSubmitting */ 254);
	
	var _isSubmitting2 = _interopRequireDefault(_isSubmitting);
	
	var _hasSubmitSucceeded = __webpack_require__(/*! ./selectors/hasSubmitSucceeded */ 255);
	
	var _hasSubmitSucceeded2 = _interopRequireDefault(_hasSubmitSucceeded);
	
	var _hasSubmitFailed = __webpack_require__(/*! ./selectors/hasSubmitFailed */ 256);
	
	var _hasSubmitFailed2 = _interopRequireDefault(_hasSubmitFailed);
	
	var _Form = __webpack_require__(/*! ./Form */ 257);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormSection = __webpack_require__(/*! ./FormSection */ 258);
	
	var _FormSection2 = _interopRequireDefault(_FormSection);
	
	var _SubmissionError = __webpack_require__(/*! ./SubmissionError */ 217);
	
	var _SubmissionError2 = _interopRequireDefault(_SubmissionError);
	
	var _propTypes = __webpack_require__(/*! ./propTypes */ 259);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _actions = __webpack_require__(/*! ./actions */ 215);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _actionTypes = __webpack_require__(/*! ./actionTypes */ 14);
	
	var actionTypes = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createAll = function createAll(structure) {
	  return _extends({
	    // separate out field actions
	    actionTypes: actionTypes
	  }, actions, {
	    Field: (0, _Field2.default)(structure),
	    Fields: (0, _Fields2.default)(structure),
	    FieldArray: (0, _FieldArray2.default)(structure),
	    Form: _Form2.default,
	    FormSection: _FormSection2.default,
	    formValueSelector: (0, _formValueSelector2.default)(structure),
	    getFormNames: (0, _getFormNames2.default)(structure),
	    getFormValues: (0, _getFormValues2.default)(structure),
	    getFormInitialValues: (0, _getFormInitialValues2.default)(structure),
	    getFormSyncErrors: (0, _getFormSyncErrors2.default)(structure),
	    getFormAsyncErrors: (0, _getFormAsyncErrors2.default)(structure),
	    getFormSyncWarnings: (0, _getFormSyncWarnings2.default)(structure),
	    getFormSubmitErrors: (0, _getFormSubmitErrors2.default)(structure),
	    isDirty: (0, _isDirty2.default)(structure),
	    isInvalid: (0, _isInvalid2.default)(structure),
	    isPristine: (0, _isPristine2.default)(structure),
	    isValid: (0, _isValid2.default)(structure),
	    isSubmitting: (0, _isSubmitting2.default)(structure),
	    hasSubmitSucceeded: (0, _hasSubmitSucceeded2.default)(structure),
	    hasSubmitFailed: (0, _hasSubmitFailed2.default)(structure),
	    propTypes: _propTypes2.default,
	    reduxForm: (0, _reduxForm2.default)(structure),
	    reducer: (0, _reducer2.default)(structure),
	    SubmissionError: _SubmissionError2.default,
	    values: (0, _values2.default)(structure)
	  });
	};
	
	exports.default = createAll;

/***/ },
/* 13 */
/*!*************************************!*\
  !*** ./~/redux-form/lib/reducer.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actionTypes = __webpack_require__(/*! ./actionTypes */ 14);
	
	var _deleteInWithCleanUp = __webpack_require__(/*! ./deleteInWithCleanUp */ 15);
	
	var _deleteInWithCleanUp2 = _interopRequireDefault(_deleteInWithCleanUp);
	
	var _plain = __webpack_require__(/*! ./structure/plain */ 66);
	
	var _plain2 = _interopRequireDefault(_plain);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var createReducer = function createReducer(structure) {
	  var _behaviors;
	
	  var deepEqual = structure.deepEqual,
	      empty = structure.empty,
	      getIn = structure.getIn,
	      setIn = structure.setIn,
	      deleteIn = structure.deleteIn,
	      fromJS = structure.fromJS,
	      keys = structure.keys,
	      size = structure.size,
	      splice = structure.splice;
	
	  var deleteInWithCleanUp = (0, _deleteInWithCleanUp2.default)(structure);
	  var doSplice = function doSplice(state, key, field, index, removeNum, value, force) {
	    var existing = getIn(state, key + '.' + field);
	    return existing || force ? setIn(state, key + '.' + field, splice(existing, index, removeNum, value)) : state;
	  };
	  var doPlainSplice = function doPlainSplice(state, key, field, index, removeNum, value, force) {
	    var slice = getIn(state, key);
	    var existing = _plain2.default.getIn(slice, field);
	    return existing || force ? setIn(state, key, _plain2.default.setIn(slice, field, _plain2.default.splice(existing, index, removeNum, value))) : state;
	  };
	  var rootKeys = ['values', 'fields', 'submitErrors', 'asyncErrors'];
	  var arraySplice = function arraySplice(state, field, index, removeNum, value) {
	    var result = state;
	    var nonValuesValue = value != null ? empty : undefined;
	    result = doSplice(result, 'values', field, index, removeNum, value, true);
	    result = doSplice(result, 'fields', field, index, removeNum, nonValuesValue);
	    result = doPlainSplice(result, 'syncErrors', field, index, removeNum, undefined);
	    result = doPlainSplice(result, 'syncWarnings', field, index, removeNum, undefined);
	    result = doSplice(result, 'submitErrors', field, index, removeNum, undefined);
	    result = doSplice(result, 'asyncErrors', field, index, removeNum, undefined);
	    return result;
	  };
	
	  var behaviors = (_behaviors = {}, _defineProperty(_behaviors, _actionTypes.ARRAY_INSERT, function (state, _ref) {
	    var _ref$meta = _ref.meta,
	        field = _ref$meta.field,
	        index = _ref$meta.index,
	        payload = _ref.payload;
	
	    return arraySplice(state, field, index, 0, payload);
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_MOVE, function (state, _ref2) {
	    var _ref2$meta = _ref2.meta,
	        field = _ref2$meta.field,
	        from = _ref2$meta.from,
	        to = _ref2$meta.to;
	
	    var array = getIn(state, 'values.' + field);
	    var length = array ? size(array) : 0;
	    var result = state;
	    if (length) {
	      rootKeys.forEach(function (key) {
	        var path = key + '.' + field;
	        if (getIn(result, path)) {
	          var value = getIn(result, path + '[' + from + ']');
	          result = setIn(result, path, splice(getIn(result, path), from, 1)); // remove
	          result = setIn(result, path, splice(getIn(result, path), to, 0, value)); // insert
	        }
	      });
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_POP, function (state, _ref3) {
	    var field = _ref3.meta.field;
	
	    var array = getIn(state, 'values.' + field);
	    var length = array ? size(array) : 0;
	    return length ? arraySplice(state, field, length - 1, 1) : state;
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_PUSH, function (state, _ref4) {
	    var field = _ref4.meta.field,
	        payload = _ref4.payload;
	
	    var array = getIn(state, 'values.' + field);
	    var length = array ? size(array) : 0;
	    return arraySplice(state, field, length, 0, payload);
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_REMOVE, function (state, _ref5) {
	    var _ref5$meta = _ref5.meta,
	        field = _ref5$meta.field,
	        index = _ref5$meta.index;
	
	    return arraySplice(state, field, index, 1);
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_REMOVE_ALL, function (state, _ref6) {
	    var field = _ref6.meta.field;
	
	    var array = getIn(state, 'values.' + field);
	    var length = array ? size(array) : 0;
	    return length ? arraySplice(state, field, 0, length) : state;
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_SHIFT, function (state, _ref7) {
	    var field = _ref7.meta.field;
	
	    return arraySplice(state, field, 0, 1);
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_SPLICE, function (state, _ref8) {
	    var _ref8$meta = _ref8.meta,
	        field = _ref8$meta.field,
	        index = _ref8$meta.index,
	        removeNum = _ref8$meta.removeNum,
	        payload = _ref8.payload;
	
	    return arraySplice(state, field, index, removeNum, payload);
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_SWAP, function (state, _ref9) {
	    var _ref9$meta = _ref9.meta,
	        field = _ref9$meta.field,
	        indexA = _ref9$meta.indexA,
	        indexB = _ref9$meta.indexB;
	
	    var result = state;
	    rootKeys.forEach(function (key) {
	      var valueA = getIn(result, key + '.' + field + '[' + indexA + ']');
	      var valueB = getIn(result, key + '.' + field + '[' + indexB + ']');
	      if (valueA !== undefined || valueB !== undefined) {
	        result = setIn(result, key + '.' + field + '[' + indexA + ']', valueB);
	        result = setIn(result, key + '.' + field + '[' + indexB + ']', valueA);
	      }
	    });
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.ARRAY_UNSHIFT, function (state, _ref10) {
	    var field = _ref10.meta.field,
	        payload = _ref10.payload;
	
	    return arraySplice(state, field, 0, 0, payload);
	  }), _defineProperty(_behaviors, _actionTypes.AUTOFILL, function (state, _ref11) {
	    var field = _ref11.meta.field,
	        payload = _ref11.payload;
	
	    var result = state;
	    result = deleteInWithCleanUp(result, 'asyncErrors.' + field);
	    result = deleteInWithCleanUp(result, 'submitErrors.' + field);
	    result = setIn(result, 'fields.' + field + '.autofilled', true);
	    result = setIn(result, 'values.' + field, payload);
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.BLUR, function (state, _ref12) {
	    var _ref12$meta = _ref12.meta,
	        field = _ref12$meta.field,
	        touch = _ref12$meta.touch,
	        payload = _ref12.payload;
	
	    var result = state;
	    var initial = getIn(result, 'initial.' + field);
	    if (initial === undefined && payload === '') {
	      result = deleteInWithCleanUp(result, 'values.' + field);
	    } else if (payload !== undefined) {
	      result = setIn(result, 'values.' + field, payload);
	    }
	    if (field === getIn(result, 'active')) {
	      result = deleteIn(result, 'active');
	    }
	    result = deleteIn(result, 'fields.' + field + '.active');
	    if (touch) {
	      result = setIn(result, 'fields.' + field + '.touched', true);
	      result = setIn(result, 'anyTouched', true);
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.CHANGE, function (state, _ref13) {
	    var _ref13$meta = _ref13.meta,
	        field = _ref13$meta.field,
	        touch = _ref13$meta.touch,
	        persistentSubmitErrors = _ref13$meta.persistentSubmitErrors,
	        payload = _ref13.payload;
	
	    var result = state;
	    var initial = getIn(result, 'initial.' + field);
	    if (initial === undefined && payload === '') {
	      result = deleteInWithCleanUp(result, 'values.' + field);
	    } else if (payload !== undefined) {
	      result = setIn(result, 'values.' + field, payload);
	    }
	    result = deleteInWithCleanUp(result, 'asyncErrors.' + field);
	    if (!persistentSubmitErrors) {
	      result = deleteInWithCleanUp(result, 'submitErrors.' + field);
	    }
	    result = deleteInWithCleanUp(result, 'fields.' + field + '.autofilled');
	    if (touch) {
	      result = setIn(result, 'fields.' + field + '.touched', true);
	      result = setIn(result, 'anyTouched', true);
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.CLEAR_SUBMIT, function (state) {
	    return deleteIn(state, 'triggerSubmit');
	  }), _defineProperty(_behaviors, _actionTypes.CLEAR_SUBMIT_ERRORS, function (state) {
	    return deleteInWithCleanUp(state, 'submitErrors');
	  }), _defineProperty(_behaviors, _actionTypes.CLEAR_ASYNC_ERROR, function (state, _ref14) {
	    var field = _ref14.meta.field;
	
	    return deleteIn(state, 'asyncErrors.' + field);
	  }), _defineProperty(_behaviors, _actionTypes.FOCUS, function (state, _ref15) {
	    var field = _ref15.meta.field;
	
	    var result = state;
	    var previouslyActive = getIn(state, 'active');
	    result = deleteIn(result, 'fields.' + previouslyActive + '.active');
	    result = setIn(result, 'fields.' + field + '.visited', true);
	    result = setIn(result, 'fields.' + field + '.active', true);
	    result = setIn(result, 'active', field);
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.INITIALIZE, function (state, _ref16) {
	    var payload = _ref16.payload,
	        _ref16$meta = _ref16.meta,
	        keepDirty = _ref16$meta.keepDirty,
	        keepSubmitSucceeded = _ref16$meta.keepSubmitSucceeded;
	
	    var mapData = fromJS(payload);
	    var result = empty; // clean all field state
	
	    // persist old warnings, they will get recalculated if the new form values are different from the old values
	    var warning = getIn(state, 'warning');
	    if (warning) {
	      result = setIn(result, 'warning', warning);
	    }
	    var syncWarnings = getIn(state, 'syncWarnings');
	    if (syncWarnings) {
	      result = setIn(result, 'syncWarnings', syncWarnings);
	    }
	
	    // persist old errors, they will get recalculated if the new form values are different from the old values
	    var error = getIn(state, 'error');
	    if (error) {
	      result = setIn(result, 'error', error);
	    }
	    var syncErrors = getIn(state, 'syncErrors');
	    if (syncErrors) {
	      result = setIn(result, 'syncErrors', syncErrors);
	    }
	
	    var registeredFields = getIn(state, 'registeredFields');
	    if (registeredFields) {
	      result = setIn(result, 'registeredFields', registeredFields);
	    }
	    var newValues = mapData;
	    if (keepDirty && registeredFields) {
	      //
	      // Keep the value of dirty fields while updating the value of
	      // pristine fields. This way, apps can reinitialize forms while
	      // avoiding stomping on user edits.
	      //
	      // Note 1: The initialize action replaces all initial values
	      // regardless of keepDirty.
	      //
	      // Note 2: When a field is dirty, keepDirty is enabled, and the field
	      // value is the same as the new initial value for the field, the
	      // initialize action causes the field to become pristine. That effect
	      // is what we want.
	      //
	      var previousValues = getIn(state, 'values');
	      var previousInitialValues = getIn(state, 'initial');
	      keys(registeredFields).forEach(function (name) {
	        var previousInitialValue = getIn(previousInitialValues, name);
	        var previousValue = getIn(previousValues, name);
	        if (!deepEqual(previousValue, previousInitialValue)) {
	          // This field was dirty. Restore the dirty value.
	          newValues = setIn(newValues, name, previousValue);
	        }
	      });
	    }
	    if (keepSubmitSucceeded && getIn(state, 'submitSucceeded')) {
	      result = setIn(result, 'submitSucceeded', true);
	    }
	    result = setIn(result, 'values', newValues);
	    result = setIn(result, 'initial', mapData);
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.REGISTER_FIELD, function (state, _ref17) {
	    var _ref17$payload = _ref17.payload,
	        name = _ref17$payload.name,
	        type = _ref17$payload.type;
	
	    var key = 'registeredFields[\'' + name + '\']';
	    var field = getIn(state, key);
	    if (field) {
	      var count = getIn(field, 'count') + 1;
	      field = setIn(field, 'count', count);
	    } else {
	      field = fromJS({ name: name, type: type, count: 1 });
	    }
	    return setIn(state, key, field);
	  }), _defineProperty(_behaviors, _actionTypes.RESET, function (state) {
	    var result = empty;
	    var registeredFields = getIn(state, 'registeredFields');
	    if (registeredFields) {
	      result = setIn(result, 'registeredFields', registeredFields);
	    }
	    var values = getIn(state, 'initial');
	    if (values) {
	      result = setIn(result, 'values', values);
	      result = setIn(result, 'initial', values);
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.SUBMIT, function (state) {
	    return setIn(state, 'triggerSubmit', true);
	  }), _defineProperty(_behaviors, _actionTypes.START_ASYNC_VALIDATION, function (state, _ref18) {
	    var field = _ref18.meta.field;
	
	    return setIn(state, 'asyncValidating', field || true);
	  }), _defineProperty(_behaviors, _actionTypes.START_SUBMIT, function (state) {
	    return setIn(state, 'submitting', true);
	  }), _defineProperty(_behaviors, _actionTypes.STOP_ASYNC_VALIDATION, function (state, _ref19) {
	    var payload = _ref19.payload;
	
	    var result = state;
	    result = deleteIn(result, 'asyncValidating');
	    if (payload && Object.keys(payload).length) {
	      var _error = payload._error,
	          fieldErrors = _objectWithoutProperties(payload, ['_error']);
	
	      if (_error) {
	        result = setIn(result, 'error', _error);
	      }
	      if (Object.keys(fieldErrors).length) {
	        result = setIn(result, 'asyncErrors', fromJS(fieldErrors));
	      } else {
	        result = deleteIn(result, 'asyncErrors');
	      }
	    } else {
	      result = deleteIn(result, 'error');
	      result = deleteIn(result, 'asyncErrors');
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.STOP_SUBMIT, function (state, _ref20) {
	    var payload = _ref20.payload;
	
	    var result = state;
	    result = deleteIn(result, 'submitting');
	    result = deleteIn(result, 'submitFailed');
	    result = deleteIn(result, 'submitSucceeded');
	    if (payload && Object.keys(payload).length) {
	      var _error = payload._error,
	          fieldErrors = _objectWithoutProperties(payload, ['_error']);
	
	      if (_error) {
	        result = setIn(result, 'error', _error);
	      } else {
	        result = deleteIn(result, 'error');
	      }
	      if (Object.keys(fieldErrors).length) {
	        result = setIn(result, 'submitErrors', fromJS(fieldErrors));
	      } else {
	        result = deleteIn(result, 'submitErrors');
	      }
	      result = setIn(result, 'submitFailed', true);
	    } else {
	      result = setIn(result, 'submitSucceeded', true);
	      result = deleteIn(result, 'error');
	      result = deleteIn(result, 'submitErrors');
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.SET_SUBMIT_FAILED, function (state, _ref21) {
	    var fields = _ref21.meta.fields;
	
	    var result = state;
	    result = setIn(result, 'submitFailed', true);
	    result = deleteIn(result, 'submitSucceeded');
	    result = deleteIn(result, 'submitting');
	    fields.forEach(function (field) {
	      return result = setIn(result, 'fields.' + field + '.touched', true);
	    });
	    if (fields.length) {
	      result = setIn(result, 'anyTouched', true);
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.SET_SUBMIT_SUCCEEDED, function (state) {
	    var result = state;
	    result = deleteIn(result, 'submitFailed');
	    result = setIn(result, 'submitSucceeded', true);
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.TOUCH, function (state, _ref22) {
	    var fields = _ref22.meta.fields;
	
	    var result = state;
	    fields.forEach(function (field) {
	      return result = setIn(result, 'fields.' + field + '.touched', true);
	    });
	    result = setIn(result, 'anyTouched', true);
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.UNREGISTER_FIELD, function (state, _ref23) {
	    var _ref23$payload = _ref23.payload,
	        name = _ref23$payload.name,
	        destroyOnUnmount = _ref23$payload.destroyOnUnmount;
	
	    var result = state;
	    var key = 'registeredFields[\'' + name + '\']';
	    var field = getIn(result, key);
	    if (!field) {
	      return result;
	    }
	
	    var count = getIn(field, 'count') - 1;
	    if (count <= 0 && destroyOnUnmount) {
	      result = deleteIn(result, key);
	      if (deepEqual(getIn(result, 'registeredFields'), empty)) {
	        result = deleteIn(result, 'registeredFields');
	      }
	    } else {
	      field = setIn(field, 'count', count);
	      result = setIn(result, key, field);
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.UNTOUCH, function (state, _ref24) {
	    var fields = _ref24.meta.fields;
	
	    var result = state;
	    fields.forEach(function (field) {
	      return result = deleteIn(result, 'fields.' + field + '.touched');
	    });
	    var anyTouched = keys(getIn(result, 'registeredFields')).some(function (key) {
	      return getIn(result, 'fields.' + key + '.touched');
	    });
	    result = anyTouched ? setIn(result, 'anyTouched', true) : deleteIn(result, 'anyTouched');
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.UPDATE_SYNC_ERRORS, function (state, _ref25) {
	    var _ref25$payload = _ref25.payload,
	        syncErrors = _ref25$payload.syncErrors,
	        error = _ref25$payload.error;
	
	    var result = state;
	    if (error) {
	      result = setIn(result, 'error', error);
	      result = setIn(result, 'syncError', true);
	    } else {
	      result = deleteIn(result, 'error');
	      result = deleteIn(result, 'syncError');
	    }
	    if (Object.keys(syncErrors).length) {
	      result = setIn(result, 'syncErrors', syncErrors);
	    } else {
	      result = deleteIn(result, 'syncErrors');
	    }
	    return result;
	  }), _defineProperty(_behaviors, _actionTypes.UPDATE_SYNC_WARNINGS, function (state, _ref26) {
	    var _ref26$payload = _ref26.payload,
	        syncWarnings = _ref26$payload.syncWarnings,
	        warning = _ref26$payload.warning;
	
	    var result = state;
	    if (warning) {
	      result = setIn(result, 'warning', warning);
	    } else {
	      result = deleteIn(result, 'warning');
	    }
	    if (Object.keys(syncWarnings).length) {
	      result = setIn(result, 'syncWarnings', syncWarnings);
	    } else {
	      result = deleteIn(result, 'syncWarnings');
	    }
	    return result;
	  }), _behaviors);
	
	  var reducer = function reducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
	    var action = arguments[1];
	
	    var behavior = behaviors[action.type];
	    return behavior ? behavior(state, action) : state;
	  };
	
	  var byForm = function byForm(reducer) {
	    return function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
	      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      var form = action && action.meta && action.meta.form;
	      if (!form) {
	        return state;
	      }
	      if (action.type === _actionTypes.DESTROY) {
	        return action.meta.form.reduce(function (result, form) {
	          return deleteInWithCleanUp(result, form);
	        }, state);
	      }
	      var formState = getIn(state, form);
	      var result = reducer(formState, action);
	      return result === formState ? state : setIn(state, form, result);
	    };
	  };
	
	  /**
	   * Adds additional functionality to the reducer
	   */
	  function decorate(target) {
	    target.plugin = function plugin(reducers) {
	      var _this = this;
	
	      // use 'function' keyword to enable 'this'
	      return decorate(function () {
	        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
	        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	        return Object.keys(reducers).reduce(function (accumulator, key) {
	          var previousState = getIn(accumulator, key);
	          var nextState = reducers[key](previousState, action, getIn(state, key));
	          return nextState === previousState ? accumulator : setIn(accumulator, key, nextState);
	        }, _this(state, action));
	      });
	    };
	
	    return target;
	  }
	
	  return decorate(byForm(reducer));
	};
	
	exports.default = createReducer;

/***/ },
/* 14 */
/*!*****************************************!*\
  !*** ./~/redux-form/lib/actionTypes.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ARRAY_INSERT = exports.ARRAY_INSERT = '@@redux-form/ARRAY_INSERT';
	var ARRAY_MOVE = exports.ARRAY_MOVE = '@@redux-form/ARRAY_MOVE';
	var ARRAY_POP = exports.ARRAY_POP = '@@redux-form/ARRAY_POP';
	var ARRAY_PUSH = exports.ARRAY_PUSH = '@@redux-form/ARRAY_PUSH';
	var ARRAY_REMOVE = exports.ARRAY_REMOVE = '@@redux-form/ARRAY_REMOVE';
	var ARRAY_REMOVE_ALL = exports.ARRAY_REMOVE_ALL = '@@redux-form/ARRAY_REMOVE_ALL';
	var ARRAY_SHIFT = exports.ARRAY_SHIFT = '@@redux-form/ARRAY_SHIFT';
	var ARRAY_SPLICE = exports.ARRAY_SPLICE = '@@redux-form/ARRAY_SPLICE';
	var ARRAY_UNSHIFT = exports.ARRAY_UNSHIFT = '@@redux-form/ARRAY_UNSHIFT';
	var ARRAY_SWAP = exports.ARRAY_SWAP = '@@redux-form/ARRAY_SWAP';
	var AUTOFILL = exports.AUTOFILL = '@@redux-form/AUTOFILL';
	var BLUR = exports.BLUR = '@@redux-form/BLUR';
	var CHANGE = exports.CHANGE = '@@redux-form/CHANGE';
	var CLEAR_SUBMIT = exports.CLEAR_SUBMIT = '@@redux-form/CLEAR_SUBMIT';
	var CLEAR_SUBMIT_ERRORS = exports.CLEAR_SUBMIT_ERRORS = '@@redux-form/CLEAR_SUBMIT_ERRORS';
	var CLEAR_ASYNC_ERROR = exports.CLEAR_ASYNC_ERROR = '@redux-form/CLEAR_ASYNC_ERROR';
	var DESTROY = exports.DESTROY = '@@redux-form/DESTROY';
	var FOCUS = exports.FOCUS = '@@redux-form/FOCUS';
	var INITIALIZE = exports.INITIALIZE = '@@redux-form/INITIALIZE';
	var REGISTER_FIELD = exports.REGISTER_FIELD = '@@redux-form/REGISTER_FIELD';
	var RESET = exports.RESET = '@@redux-form/RESET';
	var SET_SUBMIT_FAILED = exports.SET_SUBMIT_FAILED = '@@redux-form/SET_SUBMIT_FAILED';
	var SET_SUBMIT_SUCCEEDED = exports.SET_SUBMIT_SUCCEEDED = '@@redux-form/SET_SUBMIT_SUCCEEDED';
	var START_ASYNC_VALIDATION = exports.START_ASYNC_VALIDATION = '@@redux-form/START_ASYNC_VALIDATION';
	var START_SUBMIT = exports.START_SUBMIT = '@@redux-form/START_SUBMIT';
	var STOP_ASYNC_VALIDATION = exports.STOP_ASYNC_VALIDATION = '@@redux-form/STOP_ASYNC_VALIDATION';
	var STOP_SUBMIT = exports.STOP_SUBMIT = '@@redux-form/STOP_SUBMIT';
	var SUBMIT = exports.SUBMIT = '@@redux-form/SUBMIT';
	var TOUCH = exports.TOUCH = '@@redux-form/TOUCH';
	var UNREGISTER_FIELD = exports.UNREGISTER_FIELD = '@@redux-form/UNREGISTER_FIELD';
	var UNTOUCH = exports.UNTOUCH = '@@redux-form/UNTOUCH';
	var UPDATE_SYNC_ERRORS = exports.UPDATE_SYNC_ERRORS = '@@redux-form/UPDATE_SYNC_ERRORS';
	var UPDATE_SYNC_WARNINGS = exports.UPDATE_SYNC_WARNINGS = '@@redux-form/UPDATE_SYNC_WARNINGS';

/***/ },
/* 15 */
/*!*************************************************!*\
  !*** ./~/redux-form/lib/deleteInWithCleanUp.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toPath2 = __webpack_require__(/*! lodash/toPath */ 16);
	
	var _toPath3 = _interopRequireDefault(_toPath2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createDeleteInWithCleanUp = function createDeleteInWithCleanUp(_ref) {
	  var deepEqual = _ref.deepEqual,
	      empty = _ref.empty,
	      getIn = _ref.getIn,
	      deleteIn = _ref.deleteIn,
	      setIn = _ref.setIn;
	
	
	  var deleteInWithCleanUp = function deleteInWithCleanUp(state, path) {
	    if (path[path.length - 1] === ']') {
	      // array path
	      var pathTokens = (0, _toPath3.default)(path);
	      pathTokens.pop();
	      var parent = getIn(state, pathTokens.join('.'));
	      return parent ? setIn(state, path, undefined) : state;
	    }
	    var result = deleteIn(state, path);
	    var dotIndex = path.lastIndexOf('.');
	    if (dotIndex > 0) {
	      var parentPath = path.substring(0, dotIndex);
	      if (parentPath[parentPath.length - 1] !== ']') {
	        var _parent = getIn(result, parentPath);
	        if (deepEqual(_parent, empty)) {
	          return deleteInWithCleanUp(result, parentPath);
	        }
	      }
	    }
	    return result;
	  };
	
	  return deleteInWithCleanUp;
	};
	
	exports.default = createDeleteInWithCleanUp;

/***/ },
/* 16 */
/*!*****************************************!*\
  !*** ./~/redux-form/~/lodash/toPath.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(/*! ./_arrayMap */ 17),
	    copyArray = __webpack_require__(/*! ./_copyArray */ 18),
	    isArray = __webpack_require__(/*! ./isArray */ 19),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 20),
	    stringToPath = __webpack_require__(/*! ./_stringToPath */ 28),
	    toKey = __webpack_require__(/*! ./_toKey */ 63),
	    toString = __webpack_require__(/*! ./toString */ 64);
	
	/**
	 * Converts `value` to a property path array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Util
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the new property path array.
	 * @example
	 *
	 * _.toPath('a.b.c');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toPath('a[0].b.c');
	 * // => ['a', '0', 'b', 'c']
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return arrayMap(value, toKey);
	  }
	  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
	}
	
	module.exports = toPath;


/***/ },
/* 17 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_arrayMap.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 18 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_copyArray.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 19 */
/*!******************************************!*\
  !*** ./~/redux-form/~/lodash/isArray.js ***!
  \******************************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 20 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/isSymbol.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 21),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 27);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 21 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseGetTag.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 22),
	    getRawTag = __webpack_require__(/*! ./_getRawTag */ 25),
	    objectToString = __webpack_require__(/*! ./_objectToString */ 26);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 22 */
/*!******************************************!*\
  !*** ./~/redux-form/~/lodash/_Symbol.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 23);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 23 */
/*!****************************************!*\
  !*** ./~/redux-form/~/lodash/_root.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 24);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 24 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_freeGlobal.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 25 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_getRawTag.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 22);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 26 */
/*!**************************************************!*\
  !*** ./~/redux-form/~/lodash/_objectToString.js ***!
  \**************************************************/
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 27 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/isObjectLike.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 28 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_stringToPath.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 29);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ },
/* 29 */
/*!*************************************************!*\
  !*** ./~/redux-form/~/lodash/_memoizeCapped.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(/*! ./memoize */ 30);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ },
/* 30 */
/*!******************************************!*\
  !*** ./~/redux-form/~/lodash/memoize.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(/*! ./_MapCache */ 31);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ },
/* 31 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_MapCache.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 32),
	    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 57),
	    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 60),
	    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 61),
	    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 62);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 32 */
/*!*************************************************!*\
  !*** ./~/redux-form/~/lodash/_mapCacheClear.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(/*! ./_Hash */ 33),
	    ListCache = __webpack_require__(/*! ./_ListCache */ 48),
	    Map = __webpack_require__(/*! ./_Map */ 56);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 33 */
/*!****************************************!*\
  !*** ./~/redux-form/~/lodash/_Hash.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(/*! ./_hashClear */ 34),
	    hashDelete = __webpack_require__(/*! ./_hashDelete */ 44),
	    hashGet = __webpack_require__(/*! ./_hashGet */ 45),
	    hashHas = __webpack_require__(/*! ./_hashHas */ 46),
	    hashSet = __webpack_require__(/*! ./_hashSet */ 47);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 34 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_hashClear.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 35);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ },
/* 35 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_nativeCreate.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 36);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 36 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_getNative.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 37),
	    getValue = __webpack_require__(/*! ./_getValue */ 43);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 37 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseIsNative.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(/*! ./isFunction */ 38),
	    isMasked = __webpack_require__(/*! ./_isMasked */ 40),
	    isObject = __webpack_require__(/*! ./isObject */ 39),
	    toSource = __webpack_require__(/*! ./_toSource */ 42);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 38 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/isFunction.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 21),
	    isObject = __webpack_require__(/*! ./isObject */ 39);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 39 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/isObject.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 40 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_isMasked.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(/*! ./_coreJsData */ 41);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 41 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_coreJsData.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 23);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 42 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_toSource.js ***!
  \********************************************/
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 43 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_getValue.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 44 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_hashDelete.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ },
/* 45 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/_hashGet.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 35);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 46 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/_hashHas.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 35);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 47 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/_hashSet.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 35);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 48 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_ListCache.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 49),
	    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 50),
	    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 53),
	    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 54),
	    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 55);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 49 */
/*!**************************************************!*\
  !*** ./~/redux-form/~/lodash/_listCacheClear.js ***!
  \**************************************************/
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ },
/* 50 */
/*!***************************************************!*\
  !*** ./~/redux-form/~/lodash/_listCacheDelete.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 51);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 51 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_assocIndexOf.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(/*! ./eq */ 52);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 52 */
/*!*************************************!*\
  !*** ./~/redux-form/~/lodash/eq.js ***!
  \*************************************/
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 53 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_listCacheGet.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 51);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 54 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_listCacheHas.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 51);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 55 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_listCacheSet.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 51);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 56 */
/*!***************************************!*\
  !*** ./~/redux-form/~/lodash/_Map.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 36),
	    root = __webpack_require__(/*! ./_root */ 23);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 57 */
/*!**************************************************!*\
  !*** ./~/redux-form/~/lodash/_mapCacheDelete.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 58);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 58 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_getMapData.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(/*! ./_isKeyable */ 59);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 59 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_isKeyable.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 60 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_mapCacheGet.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 58);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 61 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_mapCacheHas.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 58);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 62 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_mapCacheSet.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 58);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 63 */
/*!*****************************************!*\
  !*** ./~/redux-form/~/lodash/_toKey.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(/*! ./isSymbol */ 20);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ },
/* 64 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/toString.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(/*! ./_baseToString */ 65);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ },
/* 65 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseToString.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 22),
	    arrayMap = __webpack_require__(/*! ./_arrayMap */ 17),
	    isArray = __webpack_require__(/*! ./isArray */ 19),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 20);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ },
/* 66 */
/*!***************************************************!*\
  !*** ./~/redux-form/lib/structure/plain/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _splice = __webpack_require__(/*! ./splice */ 67);
	
	var _splice2 = _interopRequireDefault(_splice);
	
	var _getIn = __webpack_require__(/*! ./getIn */ 68);
	
	var _getIn2 = _interopRequireDefault(_getIn);
	
	var _setIn = __webpack_require__(/*! ./setIn */ 69);
	
	var _setIn2 = _interopRequireDefault(_setIn);
	
	var _deepEqual = __webpack_require__(/*! ./deepEqual */ 70);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _deleteIn = __webpack_require__(/*! ./deleteIn */ 121);
	
	var _deleteIn2 = _interopRequireDefault(_deleteIn);
	
	var _keys = __webpack_require__(/*! ./keys */ 122);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var structure = {
	  allowsArrayErrors: true,
	  empty: {},
	  emptyList: [],
	  getIn: _getIn2.default,
	  setIn: _setIn2.default,
	  deepEqual: _deepEqual2.default,
	  deleteIn: _deleteIn2.default,
	  fromJS: function fromJS(value) {
	    return value;
	  },
	  keys: _keys2.default,
	  size: function size(array) {
	    return array ? array.length : 0;
	  },
	  splice: _splice2.default,
	  toJS: function toJS(value) {
	    return value;
	  }
	};
	
	exports.default = structure;

/***/ },
/* 67 */
/*!****************************************************!*\
  !*** ./~/redux-form/lib/structure/plain/splice.js ***!
  \****************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var splice = function splice(array, index, removeNum, value) {
	  array = array || [];
	
	  if (index < array.length) {
	    if (value === undefined && !removeNum) {
	      // inserting undefined
	      var _copy2 = [].concat(_toConsumableArray(array));
	      _copy2.splice(index, 0, null);
	      _copy2[index] = undefined;
	      return _copy2;
	    }
	    if (value != null) {
	      var _copy3 = [].concat(_toConsumableArray(array));
	      _copy3.splice(index, removeNum, value); // removing and adding
	      return _copy3;
	    }
	    var _copy = [].concat(_toConsumableArray(array));
	    _copy.splice(index, removeNum); // removing
	    return _copy;
	  }
	  if (removeNum) {
	    // trying to remove non-existant item: return original array
	    return array;
	  }
	  // trying to add outside of range: just set value
	  var copy = [].concat(_toConsumableArray(array));
	  copy[index] = value;
	  return copy;
	};
	
	exports.default = splice;

/***/ },
/* 68 */
/*!***************************************************!*\
  !*** ./~/redux-form/lib/structure/plain/getIn.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toPath2 = __webpack_require__(/*! lodash/toPath */ 16);
	
	var _toPath3 = _interopRequireDefault(_toPath2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getIn = function getIn(state, field) {
	  if (!state) {
	    return state;
	  }
	
	  var path = (0, _toPath3.default)(field);
	  var length = path.length;
	  if (!length) {
	    return undefined;
	  }
	
	  var result = state;
	  for (var i = 0; i < length && !!result; ++i) {
	    result = result[path[i]];
	  }
	
	  return result;
	};
	
	exports.default = getIn;

/***/ },
/* 69 */
/*!***************************************************!*\
  !*** ./~/redux-form/lib/structure/plain/setIn.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toPath2 = __webpack_require__(/*! lodash/toPath */ 16);
	
	var _toPath3 = _interopRequireDefault(_toPath2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var setInWithPath = function setInWithPath(state, value, path, pathIndex) {
	  if (pathIndex >= path.length) {
	    return value;
	  }
	
	  var first = path[pathIndex];
	  var next = setInWithPath(state && state[first], value, path, pathIndex + 1);
	
	  if (!state) {
	    var initialized = isNaN(first) ? {} : [];
	    initialized[first] = next;
	    return initialized;
	  }
	
	  if (Array.isArray(state)) {
	    var copy = [].concat(state);
	    copy[first] = next;
	    return copy;
	  }
	
	  return _extends({}, state, _defineProperty({}, first, next));
	};
	
	var setIn = function setIn(state, field, value) {
	  return setInWithPath(state, value, (0, _toPath3.default)(field), 0);
	};
	
	exports.default = setIn;

/***/ },
/* 70 */
/*!*******************************************************!*\
  !*** ./~/redux-form/lib/structure/plain/deepEqual.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isEqualWith2 = __webpack_require__(/*! lodash/isEqualWith */ 71);
	
	var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var customizer = function customizer(obj, other) {
	  if (obj === other) return true;
	  if ((obj == null || obj === '' || obj === false) && (other == null || other === '' || other === false)) return true;
	
	  if (obj && other && obj._error !== other._error) return false;
	  if (obj && other && obj._warning !== other._warning) return false;
	};
	
	var deepEqual = function deepEqual(a, b) {
	  return (0, _isEqualWith3.default)(a, b, customizer);
	};
	
	exports.default = deepEqual;

/***/ },
/* 71 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/isEqualWith.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 72);
	
	/**
	 * This method is like `_.isEqual` except that it accepts `customizer` which
	 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	 * are handled by the method instead. The `customizer` is invoked with up to
	 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * function isGreeting(value) {
	 *   return /^h(?:i|ello)$/.test(value);
	 * }
	 *
	 * function customizer(objValue, othValue) {
	 *   if (isGreeting(objValue) && isGreeting(othValue)) {
	 *     return true;
	 *   }
	 * }
	 *
	 * var array = ['hello', 'goodbye'];
	 * var other = ['hi', 'goodbye'];
	 *
	 * _.isEqualWith(array, other, customizer);
	 * // => true
	 */
	function isEqualWith(value, other, customizer) {
	  customizer = typeof customizer == 'function' ? customizer : undefined;
	  var result = customizer ? customizer(value, other) : undefined;
	  return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
	}
	
	module.exports = isEqualWith;


/***/ },
/* 72 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseIsEqual.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ 73),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 27);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 73 */
/*!***************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseIsEqualDeep.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(/*! ./_Stack */ 74),
	    equalArrays = __webpack_require__(/*! ./_equalArrays */ 80),
	    equalByTag = __webpack_require__(/*! ./_equalByTag */ 86),
	    equalObjects = __webpack_require__(/*! ./_equalObjects */ 90),
	    getTag = __webpack_require__(/*! ./_getTag */ 116),
	    isArray = __webpack_require__(/*! ./isArray */ 19),
	    isBuffer = __webpack_require__(/*! ./isBuffer */ 102),
	    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 106);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 74 */
/*!*****************************************!*\
  !*** ./~/redux-form/~/lodash/_Stack.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 48),
	    stackClear = __webpack_require__(/*! ./_stackClear */ 75),
	    stackDelete = __webpack_require__(/*! ./_stackDelete */ 76),
	    stackGet = __webpack_require__(/*! ./_stackGet */ 77),
	    stackHas = __webpack_require__(/*! ./_stackHas */ 78),
	    stackSet = __webpack_require__(/*! ./_stackSet */ 79);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 75 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_stackClear.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 48);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ },
/* 76 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_stackDelete.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ },
/* 77 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_stackGet.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 78 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_stackHas.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 79 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_stackSet.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 48),
	    Map = __webpack_require__(/*! ./_Map */ 56),
	    MapCache = __webpack_require__(/*! ./_MapCache */ 31);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 80 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_equalArrays.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(/*! ./_SetCache */ 81),
	    arraySome = __webpack_require__(/*! ./_arraySome */ 84),
	    cacheHas = __webpack_require__(/*! ./_cacheHas */ 85);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ },
/* 81 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_SetCache.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(/*! ./_MapCache */ 31),
	    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ 82),
	    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ 83);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ },
/* 82 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_setCacheAdd.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ },
/* 83 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_setCacheHas.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ },
/* 84 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_arraySome.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 85 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_cacheHas.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ },
/* 86 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_equalByTag.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 22),
	    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ 87),
	    eq = __webpack_require__(/*! ./eq */ 52),
	    equalArrays = __webpack_require__(/*! ./_equalArrays */ 80),
	    mapToArray = __webpack_require__(/*! ./_mapToArray */ 88),
	    setToArray = __webpack_require__(/*! ./_setToArray */ 89);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 87 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_Uint8Array.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 23);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 88 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_mapToArray.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 89 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_setToArray.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 90 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_equalObjects.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 91);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ },
/* 91 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_getAllKeys.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ 92),
	    getSymbols = __webpack_require__(/*! ./_getSymbols */ 94),
	    keys = __webpack_require__(/*! ./keys */ 97);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ },
/* 92 */
/*!**************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseGetAllKeys.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(/*! ./_arrayPush */ 93),
	    isArray = __webpack_require__(/*! ./isArray */ 19);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ },
/* 93 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_arrayPush.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 94 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_getSymbols.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ 95),
	    stubArray = __webpack_require__(/*! ./stubArray */ 96);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ },
/* 95 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_arrayFilter.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 96 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/stubArray.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 97 */
/*!***************************************!*\
  !*** ./~/redux-form/~/lodash/keys.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 98),
	    baseKeys = __webpack_require__(/*! ./_baseKeys */ 111),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 115);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 98 */
/*!*************************************************!*\
  !*** ./~/redux-form/~/lodash/_arrayLikeKeys.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(/*! ./_baseTimes */ 99),
	    isArguments = __webpack_require__(/*! ./isArguments */ 100),
	    isArray = __webpack_require__(/*! ./isArray */ 19),
	    isBuffer = __webpack_require__(/*! ./isBuffer */ 102),
	    isIndex = __webpack_require__(/*! ./_isIndex */ 105),
	    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 106);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 99 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseTimes.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 100 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/isArguments.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ 101),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 27);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ },
/* 101 */
/*!***************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseIsArguments.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 21),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 27);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ },
/* 102 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/isBuffer.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ 23),
	    stubFalse = __webpack_require__(/*! ./stubFalse */ 104);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/module.js */ 103)(module)))

/***/ },
/* 103 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 104 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/stubFalse.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 105 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/_isIndex.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 106 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/isTypedArray.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ 107),
	    baseUnary = __webpack_require__(/*! ./_baseUnary */ 109),
	    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 110);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 107 */
/*!****************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseIsTypedArray.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 21),
	    isLength = __webpack_require__(/*! ./isLength */ 108),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 27);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 108 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/isLength.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 109 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseUnary.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 110 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_nodeUtil.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 24);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/module.js */ 103)(module)))

/***/ },
/* 111 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseKeys.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(/*! ./_isPrototype */ 112),
	    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ 113);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 112 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_isPrototype.js ***!
  \***********************************************/
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 113 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_nativeKeys.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(/*! ./_overArg */ 114);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 114 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/_overArg.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 115 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/isArrayLike.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(/*! ./isFunction */ 38),
	    isLength = __webpack_require__(/*! ./isLength */ 108);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 116 */
/*!******************************************!*\
  !*** ./~/redux-form/~/lodash/_getTag.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(/*! ./_DataView */ 117),
	    Map = __webpack_require__(/*! ./_Map */ 56),
	    Promise = __webpack_require__(/*! ./_Promise */ 118),
	    Set = __webpack_require__(/*! ./_Set */ 119),
	    WeakMap = __webpack_require__(/*! ./_WeakMap */ 120),
	    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 21),
	    toSource = __webpack_require__(/*! ./_toSource */ 42);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 117 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_DataView.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 36),
	    root = __webpack_require__(/*! ./_root */ 23);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 118 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/_Promise.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 36),
	    root = __webpack_require__(/*! ./_root */ 23);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 119 */
/*!***************************************!*\
  !*** ./~/redux-form/~/lodash/_Set.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 36),
	    root = __webpack_require__(/*! ./_root */ 23);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 120 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/_WeakMap.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 36),
	    root = __webpack_require__(/*! ./_root */ 23);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 121 */
/*!******************************************************!*\
  !*** ./~/redux-form/lib/structure/plain/deleteIn.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toPath2 = __webpack_require__(/*! lodash/toPath */ 16);
	
	var _toPath3 = _interopRequireDefault(_toPath2);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var deleteInWithPath = function deleteInWithPath(state, first) {
	  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    rest[_key - 2] = arguments[_key];
	  }
	
	  if (state === undefined || first === undefined) {
	    return state;
	  }
	  if (rest.length) {
	    if (Array.isArray(state)) {
	      if (first < state.length) {
	        var result = deleteInWithPath.apply(undefined, [state && state[first]].concat(rest));
	        if (result !== state[first]) {
	          var copy = [].concat(_toConsumableArray(state));
	          copy[first] = result;
	          return copy;
	        }
	      }
	      return state;
	    }
	    if (first in state) {
	      var _result = deleteInWithPath.apply(undefined, [state && state[first]].concat(rest));
	      return state[first] === _result ? state : _extends({}, state, _defineProperty({}, first, _result));
	    }
	    return state;
	  }
	  if (Array.isArray(state)) {
	    if (isNaN(first)) {
	      throw new Error('Cannot delete non-numerical index from an array');
	    }
	    if (first < state.length) {
	      var _copy = [].concat(_toConsumableArray(state));
	      _copy.splice(first, 1);
	      return _copy;
	    }
	    return state;
	  }
	  if (first in state) {
	    var _copy2 = _extends({}, state);
	    delete _copy2[first];
	    return _copy2;
	  }
	  return state;
	};
	
	var deleteIn = function deleteIn(state, field) {
	  return deleteInWithPath.apply(undefined, [state].concat(_toConsumableArray((0, _toPath3.default)(field))));
	};
	
	exports.default = deleteIn;

/***/ },
/* 122 */
/*!**************************************************!*\
  !*** ./~/redux-form/lib/structure/plain/keys.js ***!
  \**************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var keys = function keys(value) {
	  return value ? Object.keys(value) : [];
	};
	
	exports.default = keys;

/***/ },
/* 123 */
/*!***************************************!*\
  !*** ./~/redux-form/lib/reduxForm.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _merge4 = __webpack_require__(/*! lodash/merge */ 124);
	
	var _merge5 = _interopRequireDefault(_merge4);
	
	var _mapValues2 = __webpack_require__(/*! lodash/mapValues */ 156);
	
	var _mapValues3 = _interopRequireDefault(_mapValues2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ 175);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 176);
	
	var _redux = __webpack_require__(/*! redux */ 187);
	
	var _isPromise = __webpack_require__(/*! is-promise */ 213);
	
	var _isPromise2 = _interopRequireDefault(_isPromise);
	
	var _getDisplayName = __webpack_require__(/*! ./util/getDisplayName */ 214);
	
	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);
	
	var _actions = __webpack_require__(/*! ./actions */ 215);
	
	var importedActions = _interopRequireWildcard(_actions);
	
	var _handleSubmit = __webpack_require__(/*! ./handleSubmit */ 216);
	
	var _handleSubmit2 = _interopRequireDefault(_handleSubmit);
	
	var _silenceEvent = __webpack_require__(/*! ./events/silenceEvent */ 219);
	
	var _silenceEvent2 = _interopRequireDefault(_silenceEvent);
	
	var _silenceEvents = __webpack_require__(/*! ./events/silenceEvents */ 221);
	
	var _silenceEvents2 = _interopRequireDefault(_silenceEvents);
	
	var _asyncValidation = __webpack_require__(/*! ./asyncValidation */ 222);
	
	var _asyncValidation2 = _interopRequireDefault(_asyncValidation);
	
	var _defaultShouldAsyncValidate = __webpack_require__(/*! ./defaultShouldAsyncValidate */ 223);
	
	var _defaultShouldAsyncValidate2 = _interopRequireDefault(_defaultShouldAsyncValidate);
	
	var _defaultShouldValidate = __webpack_require__(/*! ./defaultShouldValidate */ 224);
	
	var _defaultShouldValidate2 = _interopRequireDefault(_defaultShouldValidate);
	
	var _plain = __webpack_require__(/*! ./structure/plain */ 66);
	
	var _plain2 = _interopRequireDefault(_plain);
	
	var _generateValidator2 = __webpack_require__(/*! ./generateValidator */ 225);
	
	var _generateValidator3 = _interopRequireDefault(_generateValidator2);
	
	var _isValid = __webpack_require__(/*! ./selectors/isValid */ 226);
	
	var _isValid2 = _interopRequireDefault(_isValid);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var isClassComponent = function isClassComponent(Component) {
	  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
	};
	
	// extract field-specific actions
	
	var arrayInsert = importedActions.arrayInsert,
	    arrayMove = importedActions.arrayMove,
	    arrayPop = importedActions.arrayPop,
	    arrayPush = importedActions.arrayPush,
	    arrayRemove = importedActions.arrayRemove,
	    arrayRemoveAll = importedActions.arrayRemoveAll,
	    arrayShift = importedActions.arrayShift,
	    arraySplice = importedActions.arraySplice,
	    arraySwap = importedActions.arraySwap,
	    arrayUnshift = importedActions.arrayUnshift,
	    blur = importedActions.blur,
	    change = importedActions.change,
	    focus = importedActions.focus,
	    formActions = _objectWithoutProperties(importedActions, ['arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'blur', 'change', 'focus']);
	
	var arrayActions = {
	  arrayInsert: arrayInsert,
	  arrayMove: arrayMove,
	  arrayPop: arrayPop,
	  arrayPush: arrayPush,
	  arrayRemove: arrayRemove,
	  arrayRemoveAll: arrayRemoveAll,
	  arrayShift: arrayShift,
	  arraySplice: arraySplice,
	  arraySwap: arraySwap,
	  arrayUnshift: arrayUnshift
	};
	
	var propsToNotUpdateFor = [].concat(_toConsumableArray(Object.keys(importedActions)), ['array', 'asyncErrors', 'initialized', 'initialValues', 'syncErrors', 'syncWarnings', 'values', 'registeredFields']);
	
	var checkSubmit = function checkSubmit(submit) {
	  if (!submit || typeof submit !== 'function') {
	    throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
	  }
	  return submit;
	};
	
	/**
	 * The decorator that is the main API to redux-form
	 */
	var createReduxForm = function createReduxForm(structure) {
	  var deepEqual = structure.deepEqual,
	      empty = structure.empty,
	      getIn = structure.getIn,
	      setIn = structure.setIn,
	      keys = structure.keys,
	      fromJS = structure.fromJS;
	
	  var isValid = (0, _isValid2.default)(structure);
	  return function (initialConfig) {
	    var config = _extends({
	      touchOnBlur: true,
	      touchOnChange: false,
	      persistentSubmitErrors: false,
	      destroyOnUnmount: true,
	      shouldAsyncValidate: _defaultShouldAsyncValidate2.default,
	      shouldValidate: _defaultShouldValidate2.default,
	      enableReinitialize: false,
	      keepDirtyOnReinitialize: false,
	      getFormState: function getFormState(state) {
	        return getIn(state, 'form');
	      },
	      pure: true,
	      forceUnregisterOnUnmount: false
	    }, initialConfig);
	
	    return function (WrappedComponent) {
	      var Form = function (_Component) {
	        _inherits(Form, _Component);
	
	        function Form(props) {
	          _classCallCheck(this, Form);
	
	          var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
	
	          _this.submit = _this.submit.bind(_this);
	          _this.reset = _this.reset.bind(_this);
	          _this.asyncValidate = _this.asyncValidate.bind(_this);
	          _this.getValues = _this.getValues.bind(_this);
	          _this.register = _this.register.bind(_this);
	          _this.unregister = _this.unregister.bind(_this);
	          _this.submitCompleted = _this.submitCompleted.bind(_this);
	          _this.submitFailed = _this.submitFailed.bind(_this);
	          _this.fieldValidators = {};
	          _this.lastFieldValidatorKeys = [];
	          _this.fieldWarners = {};
	          _this.lastFieldWarnerKeys = [];
	          return _this;
	        }
	
	        _createClass(Form, [{
	          key: 'getChildContext',
	          value: function getChildContext() {
	            var _this2 = this;
	
	            return {
	              _reduxForm: _extends({}, this.props, {
	                getFormState: function getFormState(state) {
	                  return getIn(_this2.props.getFormState(state), _this2.props.form);
	                },
	                asyncValidate: this.asyncValidate,
	                getValues: this.getValues,
	                sectionPrefix: undefined,
	                register: this.register,
	                unregister: this.unregister,
	                registerInnerOnSubmit: function registerInnerOnSubmit(innerOnSubmit) {
	                  return _this2.innerOnSubmit = innerOnSubmit;
	                }
	              })
	            };
	          }
	        }, {
	          key: 'initIfNeeded',
	          value: function initIfNeeded(nextProps) {
	            var enableReinitialize = this.props.enableReinitialize;
	
	            if (nextProps) {
	              if ((enableReinitialize || !nextProps.initialized) && !deepEqual(this.props.initialValues, nextProps.initialValues)) {
	                var keepDirty = nextProps.initialized && this.props.keepDirtyOnReinitialize;
	                this.props.initialize(nextProps.initialValues, keepDirty);
	              }
	            } else if (this.props.initialValues && (!this.props.initialized || enableReinitialize)) {
	              this.props.initialize(this.props.initialValues, this.props.keepDirtyOnReinitialize);
	            }
	          }
	        }, {
	          key: 'updateSyncErrorsIfNeeded',
	          value: function updateSyncErrorsIfNeeded(nextSyncErrors, nextError) {
	            var _props = this.props,
	                error = _props.error,
	                syncErrors = _props.syncErrors,
	                updateSyncErrors = _props.updateSyncErrors;
	
	            var noErrors = (!syncErrors || !Object.keys(syncErrors).length) && !error;
	            var nextNoErrors = (!nextSyncErrors || !Object.keys(nextSyncErrors).length) && !nextError;
	            if (!(noErrors && nextNoErrors) && (!_plain2.default.deepEqual(syncErrors, nextSyncErrors) || !_plain2.default.deepEqual(error, nextError))) {
	              updateSyncErrors(nextSyncErrors, nextError);
	            }
	          }
	        }, {
	          key: 'clearSubmitPromiseIfNeeded',
	          value: function clearSubmitPromiseIfNeeded(nextProps) {
	            var submitting = this.props.submitting;
	
	            if (this.submitPromise && submitting && !nextProps.submitting) {
	              delete this.submitPromise;
	            }
	          }
	        }, {
	          key: 'submitIfNeeded',
	          value: function submitIfNeeded(nextProps) {
	            var _props2 = this.props,
	                clearSubmit = _props2.clearSubmit,
	                triggerSubmit = _props2.triggerSubmit;
	
	            if (!triggerSubmit && nextProps.triggerSubmit) {
	              clearSubmit();
	              this.submit();
	            }
	          }
	        }, {
	          key: 'validateIfNeeded',
	          value: function validateIfNeeded(nextProps) {
	            var _props3 = this.props,
	                shouldValidate = _props3.shouldValidate,
	                validate = _props3.validate,
	                values = _props3.values;
	
	            var fieldLevelValidate = this.generateValidator();
	            if (validate || fieldLevelValidate) {
	              var initialRender = nextProps === undefined;
	              var fieldValidatorKeys = Object.keys(this.getValidators());
	              var shouldValidateResult = shouldValidate({
	                values: values,
	                nextProps: nextProps,
	                props: this.props,
	                initialRender: initialRender,
	                lastFieldValidatorKeys: this.lastFieldValidatorKeys,
	                fieldValidatorKeys: fieldValidatorKeys,
	                structure: structure
	              });
	
	              if (shouldValidateResult) {
	                var propsToValidate = initialRender ? this.props : nextProps;
	
	                var _merge2 = (0, _merge5.default)(validate ? validate(propsToValidate.values, propsToValidate) || {} : {}, fieldLevelValidate ? fieldLevelValidate(propsToValidate.values, propsToValidate) || {} : {}),
	                    _error = _merge2._error,
	                    nextSyncErrors = _objectWithoutProperties(_merge2, ['_error']);
	
	                this.lastFieldValidatorKeys = fieldValidatorKeys;
	                this.updateSyncErrorsIfNeeded(nextSyncErrors, _error);
	              }
	            }
	          }
	        }, {
	          key: 'updateSyncWarningsIfNeeded',
	          value: function updateSyncWarningsIfNeeded(nextSyncWarnings, nextWarning) {
	            var _props4 = this.props,
	                warning = _props4.warning,
	                syncWarnings = _props4.syncWarnings,
	                updateSyncWarnings = _props4.updateSyncWarnings;
	
	            var noWarnings = (!syncWarnings || !Object.keys(syncWarnings).length) && !warning;
	            var nextNoWarnings = (!nextSyncWarnings || !Object.keys(nextSyncWarnings).length) && !nextWarning;
	            if (!(noWarnings && nextNoWarnings) && (!_plain2.default.deepEqual(syncWarnings, nextSyncWarnings) || !_plain2.default.deepEqual(warning, nextWarning))) {
	              updateSyncWarnings(nextSyncWarnings, nextWarning);
	            }
	          }
	        }, {
	          key: 'warnIfNeeded',
	          value: function warnIfNeeded(nextProps) {
	            var _props5 = this.props,
	                shouldValidate = _props5.shouldValidate,
	                warn = _props5.warn,
	                values = _props5.values;
	
	            var fieldLevelWarn = this.generateWarner();
	            if (warn || fieldLevelWarn) {
	              var initialRender = nextProps === undefined;
	              var fieldWarnerKeys = Object.keys(this.getWarners());
	              var shouldWarnResult = shouldValidate({
	                values: values,
	                nextProps: nextProps,
	                props: this.props,
	                initialRender: initialRender,
	                lastFieldValidatorKeys: this.lastFieldWarnerKeys,
	                fieldValidatorKeys: fieldWarnerKeys,
	                structure: structure
	              });
	
	              if (shouldWarnResult) {
	                var propsToWarn = initialRender ? this.props : nextProps;
	
	                var _merge3 = (0, _merge5.default)(warn ? warn(propsToWarn.values, propsToWarn) : {}, fieldLevelWarn ? fieldLevelWarn(propsToWarn.values, propsToWarn) : {}),
	                    _warning = _merge3._warning,
	                    nextSyncWarnings = _objectWithoutProperties(_merge3, ['_warning']);
	
	                this.lastFieldWarnerKeys = fieldWarnerKeys;
	                this.updateSyncWarningsIfNeeded(nextSyncWarnings, _warning);
	              }
	            }
	          }
	        }, {
	          key: 'componentWillMount',
	          value: function componentWillMount() {
	            this.initIfNeeded();
	            this.validateIfNeeded();
	            this.warnIfNeeded();
	          }
	        }, {
	          key: 'componentWillReceiveProps',
	          value: function componentWillReceiveProps(nextProps) {
	            this.initIfNeeded(nextProps);
	            this.validateIfNeeded(nextProps);
	            this.warnIfNeeded(nextProps);
	            this.clearSubmitPromiseIfNeeded(nextProps);
	            this.submitIfNeeded(nextProps);
	            if (nextProps.onChange) {
	              if (!deepEqual(nextProps.values, this.props.values)) {
	                nextProps.onChange(nextProps.values, nextProps.dispatch, nextProps);
	              }
	            }
	          }
	        }, {
	          key: 'shouldComponentUpdate',
	          value: function shouldComponentUpdate(nextProps) {
	            var _this3 = this;
	
	            if (!this.props.pure) return true;
	            return Object.keys(nextProps).some(function (prop) {
	              // useful to debug rerenders
	              // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
	              //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
	              // }
	              return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
	            });
	          }
	        }, {
	          key: 'componentWillUnmount',
	          value: function componentWillUnmount() {
	            var _props6 = this.props,
	                destroyOnUnmount = _props6.destroyOnUnmount,
	                destroy = _props6.destroy;
	
	            if (destroyOnUnmount) {
	              this.destroyed = true;
	              destroy();
	            }
	          }
	        }, {
	          key: 'getValues',
	          value: function getValues() {
	            return this.props.values;
	          }
	        }, {
	          key: 'isValid',
	          value: function isValid() {
	            return this.props.valid;
	          }
	        }, {
	          key: 'isPristine',
	          value: function isPristine() {
	            return this.props.pristine;
	          }
	        }, {
	          key: 'register',
	          value: function register(name, type, getValidator, getWarner) {
	            this.props.registerField(name, type);
	            if (getValidator) {
	              this.fieldValidators[name] = getValidator;
	            }
	            if (getWarner) {
	              this.fieldWarners[name] = getWarner;
	            }
	          }
	        }, {
	          key: 'unregister',
	          value: function unregister(name) {
	            if (!this.destroyed) {
	              if (this.props.destroyOnUnmount || this.props.forceUnregisterOnUnmount) {
	                this.props.unregisterField(name);
	                delete this.fieldValidators[name];
	                delete this.fieldWarners[name];
	              } else {
	                this.props.unregisterField(name, false);
	              }
	            }
	          }
	        }, {
	          key: 'getFieldList',
	          value: function getFieldList(options) {
	            var registeredFields = this.props.registeredFields;
	            var list = [];
	            if (!registeredFields) {
	              return list;
	            }
	            var keySeq = keys(registeredFields);
	            if (options && options.excludeFieldArray) {
	              keySeq = keySeq.filter(function (name) {
	                return getIn(registeredFields, '[\'' + name + '\'].type') !== 'FieldArray';
	              });
	            }
	            return fromJS(keySeq.reduce(function (acc, key) {
	              acc.push(key);
	              return acc;
	            }, list));
	          }
	        }, {
	          key: 'getValidators',
	          value: function getValidators() {
	            var _this4 = this;
	
	            var validators = {};
	            Object.keys(this.fieldValidators).forEach(function (name) {
	              var validator = _this4.fieldValidators[name]();
	              if (validator) {
	                validators[name] = validator;
	              }
	            });
	            return validators;
	          }
	        }, {
	          key: 'generateValidator',
	          value: function generateValidator() {
	            var validators = this.getValidators();
	            return Object.keys(validators).length ? (0, _generateValidator3.default)(validators, structure) : undefined;
	          }
	        }, {
	          key: 'getWarners',
	          value: function getWarners() {
	            var _this5 = this;
	
	            var warners = {};
	            Object.keys(this.fieldWarners).forEach(function (name) {
	              var warner = _this5.fieldWarners[name]();
	              if (warner) {
	                warners[name] = warner;
	              }
	            });
	            return warners;
	          }
	        }, {
	          key: 'generateWarner',
	          value: function generateWarner() {
	            var warners = this.getWarners();
	            return Object.keys(warners).length ? (0, _generateValidator3.default)(warners, structure) : undefined;
	          }
	        }, {
	          key: 'asyncValidate',
	          value: function asyncValidate(name, value) {
	            var _this6 = this;
	
	            var _props7 = this.props,
	                asyncBlurFields = _props7.asyncBlurFields,
	                asyncErrors = _props7.asyncErrors,
	                asyncValidate = _props7.asyncValidate,
	                dispatch = _props7.dispatch,
	                initialized = _props7.initialized,
	                pristine = _props7.pristine,
	                shouldAsyncValidate = _props7.shouldAsyncValidate,
	                startAsyncValidation = _props7.startAsyncValidation,
	                stopAsyncValidation = _props7.stopAsyncValidation,
	                syncErrors = _props7.syncErrors,
	                values = _props7.values;
	
	            var submitting = !name;
	            if (asyncValidate) {
	              var valuesToValidate = submitting ? values : setIn(values, name, value);
	              var syncValidationPasses = submitting || !getIn(syncErrors, name);
	              var isBlurredField = !submitting && (!asyncBlurFields || ~asyncBlurFields.indexOf(name.replace(/\[[0-9]+\]/g, '[]')));
	              if ((isBlurredField || submitting) && shouldAsyncValidate({
	                asyncErrors: asyncErrors,
	                initialized: initialized,
	                trigger: submitting ? 'submit' : 'blur',
	                blurredField: name,
	                pristine: pristine,
	                syncValidationPasses: syncValidationPasses
	              })) {
	                return (0, _asyncValidation2.default)(function () {
	                  return asyncValidate(valuesToValidate, dispatch, _this6.props, name);
	                }, startAsyncValidation, stopAsyncValidation, name);
	              }
	            }
	          }
	        }, {
	          key: 'submitCompleted',
	          value: function submitCompleted(result) {
	            delete this.submitPromise;
	            return result;
	          }
	        }, {
	          key: 'submitFailed',
	          value: function submitFailed(error) {
	            delete this.submitPromise;
	            throw error;
	          }
	        }, {
	          key: 'listenToSubmit',
	          value: function listenToSubmit(promise) {
	            if (!(0, _isPromise2.default)(promise)) {
	              return promise;
	            }
	            this.submitPromise = promise;
	            return promise.then(this.submitCompleted, this.submitFailed);
	          }
	        }, {
	          key: 'submit',
	          value: function submit(submitOrEvent) {
	            var _this7 = this;
	
	            var _props8 = this.props,
	                onSubmit = _props8.onSubmit,
	                blur = _props8.blur,
	                change = _props8.change,
	                dispatch = _props8.dispatch,
	                validExceptSubmit = _props8.validExceptSubmit;
	
	
	            if (!submitOrEvent || (0, _silenceEvent2.default)(submitOrEvent)) {
	              // submitOrEvent is an event: fire submit if not already submitting
	              if (!this.submitPromise) {
	                if (this.innerOnSubmit) {
	                  // will call "submitOrEvent is the submit function" block below
	                  return this.innerOnSubmit();
	                } else {
	                  return this.listenToSubmit((0, _handleSubmit2.default)(checkSubmit(onSubmit), _extends({}, this.props, (0, _redux.bindActionCreators)({ blur: blur, change: change }, dispatch)), validExceptSubmit, this.asyncValidate, this.getFieldList({ excludeFieldArray: true })));
	                }
	              }
	            } else {
	              // submitOrEvent is the submit function: return deferred submit thunk
	              return (0, _silenceEvents2.default)(function () {
	                return !_this7.submitPromise && _this7.listenToSubmit((0, _handleSubmit2.default)(checkSubmit(submitOrEvent), _extends({}, _this7.props, (0, _redux.bindActionCreators)({ blur: blur, change: change }, dispatch)), validExceptSubmit, _this7.asyncValidate, _this7.getFieldList({ excludeFieldArray: true })));
	              });
	            }
	          }
	        }, {
	          key: 'reset',
	          value: function reset() {
	            this.props.reset();
	          }
	        }, {
	          key: 'render',
	          value: function render() {
	            // remove some redux-form config-only props
	            /* eslint-disable no-unused-vars */
	            var _props9 = this.props,
	                anyTouched = _props9.anyTouched,
	                arrayInsert = _props9.arrayInsert,
	                arrayMove = _props9.arrayMove,
	                arrayPop = _props9.arrayPop,
	                arrayPush = _props9.arrayPush,
	                arrayRemove = _props9.arrayRemove,
	                arrayRemoveAll = _props9.arrayRemoveAll,
	                arrayShift = _props9.arrayShift,
	                arraySplice = _props9.arraySplice,
	                arraySwap = _props9.arraySwap,
	                arrayUnshift = _props9.arrayUnshift,
	                asyncErrors = _props9.asyncErrors,
	                asyncValidate = _props9.asyncValidate,
	                asyncValidating = _props9.asyncValidating,
	                blur = _props9.blur,
	                change = _props9.change,
	                destroy = _props9.destroy,
	                destroyOnUnmount = _props9.destroyOnUnmount,
	                forceUnregisterOnUnmount = _props9.forceUnregisterOnUnmount,
	                dirty = _props9.dirty,
	                dispatch = _props9.dispatch,
	                enableReinitialize = _props9.enableReinitialize,
	                error = _props9.error,
	                focus = _props9.focus,
	                form = _props9.form,
	                getFormState = _props9.getFormState,
	                initialize = _props9.initialize,
	                initialized = _props9.initialized,
	                initialValues = _props9.initialValues,
	                invalid = _props9.invalid,
	                keepDirtyOnReinitialize = _props9.keepDirtyOnReinitialize,
	                pristine = _props9.pristine,
	                propNamespace = _props9.propNamespace,
	                registeredFields = _props9.registeredFields,
	                registerField = _props9.registerField,
	                reset = _props9.reset,
	                setSubmitFailed = _props9.setSubmitFailed,
	                setSubmitSucceeded = _props9.setSubmitSucceeded,
	                shouldAsyncValidate = _props9.shouldAsyncValidate,
	                shouldValidate = _props9.shouldValidate,
	                startAsyncValidation = _props9.startAsyncValidation,
	                startSubmit = _props9.startSubmit,
	                stopAsyncValidation = _props9.stopAsyncValidation,
	                stopSubmit = _props9.stopSubmit,
	                submitting = _props9.submitting,
	                submitFailed = _props9.submitFailed,
	                submitSucceeded = _props9.submitSucceeded,
	                touch = _props9.touch,
	                touchOnBlur = _props9.touchOnBlur,
	                touchOnChange = _props9.touchOnChange,
	                persistentSubmitErrors = _props9.persistentSubmitErrors,
	                syncErrors = _props9.syncErrors,
	                syncWarnings = _props9.syncWarnings,
	                unregisterField = _props9.unregisterField,
	                untouch = _props9.untouch,
	                updateSyncErrors = _props9.updateSyncErrors,
	                updateSyncWarnings = _props9.updateSyncWarnings,
	                valid = _props9.valid,
	                validExceptSubmit = _props9.validExceptSubmit,
	                values = _props9.values,
	                warning = _props9.warning,
	                rest = _objectWithoutProperties(_props9, ['anyTouched', 'arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'asyncErrors', 'asyncValidate', 'asyncValidating', 'blur', 'change', 'destroy', 'destroyOnUnmount', 'forceUnregisterOnUnmount', 'dirty', 'dispatch', 'enableReinitialize', 'error', 'focus', 'form', 'getFormState', 'initialize', 'initialized', 'initialValues', 'invalid', 'keepDirtyOnReinitialize', 'pristine', 'propNamespace', 'registeredFields', 'registerField', 'reset', 'setSubmitFailed', 'setSubmitSucceeded', 'shouldAsyncValidate', 'shouldValidate', 'startAsyncValidation', 'startSubmit', 'stopAsyncValidation', 'stopSubmit', 'submitting', 'submitFailed', 'submitSucceeded', 'touch', 'touchOnBlur', 'touchOnChange', 'persistentSubmitErrors', 'syncErrors', 'syncWarnings', 'unregisterField', 'untouch', 'updateSyncErrors', 'updateSyncWarnings', 'valid', 'validExceptSubmit', 'values', 'warning']);
	            /* eslint-enable no-unused-vars */
	
	
	            var reduxFormProps = _extends({
	              anyTouched: anyTouched,
	              asyncValidate: this.asyncValidate,
	              asyncValidating: asyncValidating
	            }, (0, _redux.bindActionCreators)({ blur: blur, change: change }, dispatch), {
	              destroy: destroy,
	              dirty: dirty,
	              dispatch: dispatch,
	              error: error,
	              form: form,
	              handleSubmit: this.submit,
	              initialize: initialize,
	              initialized: initialized,
	              initialValues: initialValues,
	              invalid: invalid,
	              pristine: pristine,
	              reset: reset,
	              submitting: submitting,
	              submitFailed: submitFailed,
	              submitSucceeded: submitSucceeded,
	              touch: touch,
	              untouch: untouch,
	              valid: valid,
	              warning: warning
	            });
	            var propsToPass = _extends({}, propNamespace ? _defineProperty({}, propNamespace, reduxFormProps) : reduxFormProps, rest);
	            if (isClassComponent(WrappedComponent)) {
	              propsToPass.ref = 'wrapped';
	            }
	            return (0, _react.createElement)(WrappedComponent, propsToPass);
	          }
	        }]);
	
	        return Form;
	      }(_react.Component);
	
	      Form.displayName = 'Form(' + (0, _getDisplayName2.default)(WrappedComponent) + ')';
	      Form.WrappedComponent = WrappedComponent;
	      Form.childContextTypes = {
	        _reduxForm: _react.PropTypes.object.isRequired
	      };
	      Form.propTypes = {
	        destroyOnUnmount: _react.PropTypes.bool,
	        forceUnregisterOnUnmount: _react.PropTypes.bool,
	        form: _react.PropTypes.string.isRequired,
	        initialValues: _react.PropTypes.object,
	        getFormState: _react.PropTypes.func,
	        onSubmitFail: _react.PropTypes.func,
	        onSubmitSuccess: _react.PropTypes.func,
	        propNameSpace: _react.PropTypes.string,
	        validate: _react.PropTypes.func,
	        warn: _react.PropTypes.func,
	        touchOnBlur: _react.PropTypes.bool,
	        touchOnChange: _react.PropTypes.bool,
	        triggerSubmit: _react.PropTypes.bool,
	        persistentSubmitErrors: _react.PropTypes.bool,
	        registeredFields: _react.PropTypes.any
	      };
	
	      var connector = (0, _reactRedux.connect)(function (state, props) {
	        var form = props.form,
	            getFormState = props.getFormState,
	            initialValues = props.initialValues,
	            enableReinitialize = props.enableReinitialize,
	            keepDirtyOnReinitialize = props.keepDirtyOnReinitialize;
	
	        var formState = getIn(getFormState(state) || empty, form) || empty;
	        var stateInitial = getIn(formState, 'initial');
	        var initialized = !!stateInitial;
	
	        var shouldUpdateInitialValues = enableReinitialize && initialized && !deepEqual(initialValues, stateInitial);
	        var shouldResetValues = shouldUpdateInitialValues && !keepDirtyOnReinitialize;
	
	        var initial = initialValues || stateInitial || empty;
	
	        if (shouldUpdateInitialValues) {
	          initial = stateInitial || empty;
	        }
	
	        var values = getIn(formState, 'values') || initial;
	
	        if (shouldResetValues) {
	          values = initial;
	        }
	
	        var pristine = shouldResetValues || deepEqual(initial, values);
	        var asyncErrors = getIn(formState, 'asyncErrors');
	        var syncErrors = getIn(formState, 'syncErrors') || {};
	        var syncWarnings = getIn(formState, 'syncWarnings') || {};
	        var registeredFields = getIn(formState, 'registeredFields');
	        var valid = isValid(form, getFormState, false)(state);
	        var validExceptSubmit = isValid(form, getFormState, true)(state);
	        var anyTouched = !!getIn(formState, 'anyTouched');
	        var submitting = !!getIn(formState, 'submitting');
	        var submitFailed = !!getIn(formState, 'submitFailed');
	        var submitSucceeded = !!getIn(formState, 'submitSucceeded');
	        var error = getIn(formState, 'error');
	        var warning = getIn(formState, 'warning');
	        var triggerSubmit = getIn(formState, 'triggerSubmit');
	        return {
	          anyTouched: anyTouched,
	          asyncErrors: asyncErrors,
	          asyncValidating: getIn(formState, 'asyncValidating') || false,
	          dirty: !pristine,
	          error: error,
	          initialized: initialized,
	          invalid: !valid,
	          pristine: pristine,
	          registeredFields: registeredFields,
	          submitting: submitting,
	          submitFailed: submitFailed,
	          submitSucceeded: submitSucceeded,
	          syncErrors: syncErrors,
	          syncWarnings: syncWarnings,
	          triggerSubmit: triggerSubmit,
	          values: values,
	          valid: valid,
	          validExceptSubmit: validExceptSubmit,
	          warning: warning
	        };
	      }, function (dispatch, initialProps) {
	        var bindForm = function bindForm(actionCreator) {
	          return actionCreator.bind(null, initialProps.form);
	        };
	
	        // Bind the first parameter on `props.form`
	        var boundFormACs = (0, _mapValues3.default)(formActions, bindForm);
	        var boundArrayACs = (0, _mapValues3.default)(arrayActions, bindForm);
	        var boundBlur = function boundBlur(field, value) {
	          return blur(initialProps.form, field, value, !!initialProps.touchOnBlur);
	        };
	        var boundChange = function boundChange(field, value) {
	          return change(initialProps.form, field, value, !!initialProps.touchOnChange, !!initialProps.persistentSubmitErrors);
	        };
	        var boundFocus = bindForm(focus);
	
	        // Wrap action creators with `dispatch`
	        var connectedFormACs = (0, _redux.bindActionCreators)(boundFormACs, dispatch);
	        var connectedArrayACs = {
	          insert: (0, _redux.bindActionCreators)(boundArrayACs.arrayInsert, dispatch),
	          move: (0, _redux.bindActionCreators)(boundArrayACs.arrayMove, dispatch),
	          pop: (0, _redux.bindActionCreators)(boundArrayACs.arrayPop, dispatch),
	          push: (0, _redux.bindActionCreators)(boundArrayACs.arrayPush, dispatch),
	          remove: (0, _redux.bindActionCreators)(boundArrayACs.arrayRemove, dispatch),
	          removeAll: (0, _redux.bindActionCreators)(boundArrayACs.arrayRemoveAll, dispatch),
	          shift: (0, _redux.bindActionCreators)(boundArrayACs.arrayShift, dispatch),
	          splice: (0, _redux.bindActionCreators)(boundArrayACs.arraySplice, dispatch),
	          swap: (0, _redux.bindActionCreators)(boundArrayACs.arraySwap, dispatch),
	          unshift: (0, _redux.bindActionCreators)(boundArrayACs.arrayUnshift, dispatch)
	        };
	
	        var computedActions = _extends({}, connectedFormACs, boundArrayACs, {
	          blur: boundBlur,
	          change: boundChange,
	          array: connectedArrayACs,
	          focus: boundFocus,
	          dispatch: dispatch
	        });
	
	        return function () {
	          return computedActions;
	        };
	      }, undefined, { withRef: true });
	      var ConnectedForm = (0, _hoistNonReactStatics2.default)(connector(Form), WrappedComponent);
	      ConnectedForm.defaultProps = config;
	
	      // build outer component to expose instance api
	      return function (_Component2) {
	        _inherits(ReduxForm, _Component2);
	
	        function ReduxForm() {
	          _classCallCheck(this, ReduxForm);
	
	          return _possibleConstructorReturn(this, (ReduxForm.__proto__ || Object.getPrototypeOf(ReduxForm)).apply(this, arguments));
	        }
	
	        _createClass(ReduxForm, [{
	          key: 'submit',
	          value: function submit() {
	            return this.refs.wrapped.getWrappedInstance().submit();
	          }
	        }, {
	          key: 'reset',
	          value: function reset() {
	            return this.refs.wrapped.getWrappedInstance().reset();
	          }
	        }, {
	          key: 'render',
	          value: function render() {
	            var _props10 = this.props,
	                initialValues = _props10.initialValues,
	                rest = _objectWithoutProperties(_props10, ['initialValues']);
	
	            return (0, _react.createElement)(ConnectedForm, _extends({}, rest, {
	              ref: 'wrapped',
	              // convert initialValues if need to
	              initialValues: fromJS(initialValues)
	            }));
	          }
	        }, {
	          key: 'valid',
	          get: function get() {
	            return this.refs.wrapped.getWrappedInstance().isValid();
	          }
	        }, {
	          key: 'invalid',
	          get: function get() {
	            return !this.valid;
	          }
	        }, {
	          key: 'pristine',
	          get: function get() {
	            return this.refs.wrapped.getWrappedInstance().isPristine();
	          }
	        }, {
	          key: 'dirty',
	          get: function get() {
	            return !this.pristine;
	          }
	        }, {
	          key: 'values',
	          get: function get() {
	            return this.refs.wrapped.getWrappedInstance().getValues();
	          }
	        }, {
	          key: 'fieldList',
	          get: function get() {
	            // mainly provided for testing
	            return this.refs.wrapped.getWrappedInstance().getFieldList();
	          }
	        }, {
	          key: 'wrappedInstance',
	          get: function get() {
	            // for testine
	            return this.refs.wrapped.getWrappedInstance().refs.wrapped;
	          }
	        }]);
	
	        return ReduxForm;
	      }(_react.Component);
	    };
	  };
	};
	
	exports.default = createReduxForm;

/***/ },
/* 124 */
/*!****************************************!*\
  !*** ./~/redux-form/~/lodash/merge.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(/*! ./_baseMerge */ 125),
	    createAssigner = __webpack_require__(/*! ./_createAssigner */ 146);
	
	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});
	
	module.exports = merge;


/***/ },
/* 125 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseMerge.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(/*! ./_Stack */ 74),
	    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ 126),
	    baseFor = __webpack_require__(/*! ./_baseFor */ 129),
	    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ 131),
	    isObject = __webpack_require__(/*! ./isObject */ 39),
	    keysIn = __webpack_require__(/*! ./keysIn */ 143);
	
	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;
	
	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}
	
	module.exports = baseMerge;


/***/ },
/* 126 */
/*!****************************************************!*\
  !*** ./~/redux-form/~/lodash/_assignMergeValue.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 127),
	    eq = __webpack_require__(/*! ./eq */ 52);
	
	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignMergeValue;


/***/ },
/* 127 */
/*!***************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseAssignValue.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(/*! ./_defineProperty */ 128);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ },
/* 128 */
/*!**************************************************!*\
  !*** ./~/redux-form/~/lodash/_defineProperty.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 36);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ },
/* 129 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/_baseFor.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ 130);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 130 */
/*!*************************************************!*\
  !*** ./~/redux-form/~/lodash/_createBaseFor.js ***!
  \*************************************************/
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 131 */
/*!*************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseMergeDeep.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ 126),
	    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ 132),
	    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ 133),
	    copyArray = __webpack_require__(/*! ./_copyArray */ 18),
	    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ 135),
	    isArguments = __webpack_require__(/*! ./isArguments */ 100),
	    isArray = __webpack_require__(/*! ./isArray */ 19),
	    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ 138),
	    isBuffer = __webpack_require__(/*! ./isBuffer */ 102),
	    isFunction = __webpack_require__(/*! ./isFunction */ 38),
	    isObject = __webpack_require__(/*! ./isObject */ 39),
	    isPlainObject = __webpack_require__(/*! ./isPlainObject */ 139),
	    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 106),
	    toPlainObject = __webpack_require__(/*! ./toPlainObject */ 140);
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);
	
	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;
	
	  var isCommon = newValue === undefined;
	
	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
	
	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}
	
	module.exports = baseMergeDeep;


/***/ },
/* 132 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_cloneBuffer.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ 23);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	
	  buffer.copy(result);
	  return result;
	}
	
	module.exports = cloneBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/module.js */ 103)(module)))

/***/ },
/* 133 */
/*!***************************************************!*\
  !*** ./~/redux-form/~/lodash/_cloneTypedArray.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ 134);
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	module.exports = cloneTypedArray;


/***/ },
/* 134 */
/*!****************************************************!*\
  !*** ./~/redux-form/~/lodash/_cloneArrayBuffer.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ 87);
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	module.exports = cloneArrayBuffer;


/***/ },
/* 135 */
/*!***************************************************!*\
  !*** ./~/redux-form/~/lodash/_initCloneObject.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(/*! ./_baseCreate */ 136),
	    getPrototype = __webpack_require__(/*! ./_getPrototype */ 137),
	    isPrototype = __webpack_require__(/*! ./_isPrototype */ 112);
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	module.exports = initCloneObject;


/***/ },
/* 136 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseCreate.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./isObject */ 39);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());
	
	module.exports = baseCreate;


/***/ },
/* 137 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_getPrototype.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(/*! ./_overArg */ 114);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 138 */
/*!****************************************************!*\
  !*** ./~/redux-form/~/lodash/isArrayLikeObject.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 115),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 27);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 139 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/isPlainObject.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 21),
	    getPrototype = __webpack_require__(/*! ./_getPrototype */ 137),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 27);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },
/* 140 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/toPlainObject.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(/*! ./_copyObject */ 141),
	    keysIn = __webpack_require__(/*! ./keysIn */ 143);
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}
	
	module.exports = toPlainObject;


/***/ },
/* 141 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_copyObject.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(/*! ./_assignValue */ 142),
	    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 127);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 142 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_assignValue.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 127),
	    eq = __webpack_require__(/*! ./eq */ 52);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 143 */
/*!*****************************************!*\
  !*** ./~/redux-form/~/lodash/keysIn.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 98),
	    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ 144),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 115);
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	module.exports = keysIn;


/***/ },
/* 144 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseKeysIn.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./isObject */ 39),
	    isPrototype = __webpack_require__(/*! ./_isPrototype */ 112),
	    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ 145);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeysIn;


/***/ },
/* 145 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_nativeKeysIn.js ***!
  \************************************************/
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = nativeKeysIn;


/***/ },
/* 146 */
/*!**************************************************!*\
  !*** ./~/redux-form/~/lodash/_createAssigner.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(/*! ./_baseRest */ 147),
	    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 155);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 147 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseRest.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(/*! ./identity */ 148),
	    overRest = __webpack_require__(/*! ./_overRest */ 149),
	    setToString = __webpack_require__(/*! ./_setToString */ 151);
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}
	
	module.exports = baseRest;


/***/ },
/* 148 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/identity.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 149 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_overRest.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(/*! ./_apply */ 150);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;


/***/ },
/* 150 */
/*!*****************************************!*\
  !*** ./~/redux-form/~/lodash/_apply.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 151 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_setToString.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ 152),
	    shortOut = __webpack_require__(/*! ./_shortOut */ 154);
	
	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);
	
	module.exports = setToString;


/***/ },
/* 152 */
/*!***************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseSetToString.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(/*! ./constant */ 153),
	    defineProperty = __webpack_require__(/*! ./_defineProperty */ 128),
	    identity = __webpack_require__(/*! ./identity */ 148);
	
	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	
	module.exports = baseSetToString;


/***/ },
/* 153 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/constant.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	module.exports = constant;


/***/ },
/* 154 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_shortOut.js ***!
  \********************************************/
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;
	
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	
	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	
	module.exports = shortOut;


/***/ },
/* 155 */
/*!**************************************************!*\
  !*** ./~/redux-form/~/lodash/_isIterateeCall.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(/*! ./eq */ 52),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 115),
	    isIndex = __webpack_require__(/*! ./_isIndex */ 105),
	    isObject = __webpack_require__(/*! ./isObject */ 39);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 156 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/mapValues.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 127),
	    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 157),
	    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 158);
	
	/**
	 * Creates an object with the same keys as `object` and values generated
	 * by running each own enumerable string keyed property of `object` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns the new mapped object.
	 * @see _.mapKeys
	 * @example
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * _.mapValues(users, function(o) { return o.age; });
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	function mapValues(object, iteratee) {
	  var result = {};
	  iteratee = baseIteratee(iteratee, 3);
	
	  baseForOwn(object, function(value, key, object) {
	    baseAssignValue(result, key, iteratee(value, key, object));
	  });
	  return result;
	}
	
	module.exports = mapValues;


/***/ },
/* 157 */
/*!**********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseForOwn.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(/*! ./_baseFor */ 129),
	    keys = __webpack_require__(/*! ./keys */ 97);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 158 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseIteratee.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(/*! ./_baseMatches */ 159),
	    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ 164),
	    identity = __webpack_require__(/*! ./identity */ 148),
	    isArray = __webpack_require__(/*! ./isArray */ 19),
	    property = __webpack_require__(/*! ./property */ 172);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ },
/* 159 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseMatches.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ 160),
	    getMatchData = __webpack_require__(/*! ./_getMatchData */ 161),
	    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 163);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 160 */
/*!***********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseIsMatch.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(/*! ./_Stack */ 74),
	    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 72);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 161 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_getMatchData.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 162),
	    keys = __webpack_require__(/*! ./keys */ 97);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 162 */
/*!******************************************************!*\
  !*** ./~/redux-form/~/lodash/_isStrictComparable.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./isObject */ 39);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 163 */
/*!***********************************************************!*\
  !*** ./~/redux-form/~/lodash/_matchesStrictComparable.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ },
/* 164 */
/*!*******************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseMatchesProperty.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 72),
	    get = __webpack_require__(/*! ./get */ 165),
	    hasIn = __webpack_require__(/*! ./hasIn */ 169),
	    isKey = __webpack_require__(/*! ./_isKey */ 168),
	    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 162),
	    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 163),
	    toKey = __webpack_require__(/*! ./_toKey */ 63);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 165 */
/*!**************************************!*\
  !*** ./~/redux-form/~/lodash/get.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(/*! ./_baseGet */ 166);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 166 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/_baseGet.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(/*! ./_castPath */ 167),
	    toKey = __webpack_require__(/*! ./_toKey */ 63);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 167 */
/*!********************************************!*\
  !*** ./~/redux-form/~/lodash/_castPath.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(/*! ./isArray */ 19),
	    isKey = __webpack_require__(/*! ./_isKey */ 168),
	    stringToPath = __webpack_require__(/*! ./_stringToPath */ 28),
	    toString = __webpack_require__(/*! ./toString */ 64);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ },
/* 168 */
/*!*****************************************!*\
  !*** ./~/redux-form/~/lodash/_isKey.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(/*! ./isArray */ 19),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 20);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ },
/* 169 */
/*!****************************************!*\
  !*** ./~/redux-form/~/lodash/hasIn.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ 170),
	    hasPath = __webpack_require__(/*! ./_hasPath */ 171);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ },
/* 170 */
/*!*********************************************!*\
  !*** ./~/redux-form/~/lodash/_baseHasIn.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ },
/* 171 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/_hasPath.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(/*! ./_castPath */ 167),
	    isArguments = __webpack_require__(/*! ./isArguments */ 100),
	    isArray = __webpack_require__(/*! ./isArray */ 19),
	    isIndex = __webpack_require__(/*! ./_isIndex */ 105),
	    isLength = __webpack_require__(/*! ./isLength */ 108),
	    toKey = __webpack_require__(/*! ./_toKey */ 63);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ },
/* 172 */
/*!*******************************************!*\
  !*** ./~/redux-form/~/lodash/property.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(/*! ./_baseProperty */ 173),
	    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ 174),
	    isKey = __webpack_require__(/*! ./_isKey */ 168),
	    toKey = __webpack_require__(/*! ./_toKey */ 63);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 173 */
/*!************************************************!*\
  !*** ./~/redux-form/~/lodash/_baseProperty.js ***!
  \************************************************/
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 174 */
/*!****************************************************!*\
  !*** ./~/redux-form/~/lodash/_basePropertyDeep.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(/*! ./_baseGet */ 166);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 175 */
/*!********************************************!*\
  !*** ./~/hoist-non-react-statics/index.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ },
/* 176 */
/*!************************************!*\
  !*** ./~/react-redux/lib/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(/*! ./components/Provider */ 177);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connectAdvanced = __webpack_require__(/*! ./components/connectAdvanced */ 181);
	
	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
	
	var _connect = __webpack_require__(/*! ./connect/connect */ 184);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Provider = _Provider2.default;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ },
/* 177 */
/*!**************************************************!*\
  !*** ./~/react-redux/lib/components/Provider.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.default = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _PropTypes = __webpack_require__(/*! ../utils/PropTypes */ 179);
	
	var _warning = __webpack_require__(/*! ../utils/warning */ 180);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider = function (_Component) {
	  _inherits(Provider, _Component);
	
	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store, storeSubscription: null };
	  };
	
	  function Provider(props, context) {
	    _classCallCheck(this, Provider);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.store = props.store;
	    return _this;
	  }
	
	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };
	
	  return Provider;
	}(_react.Component);
	
	exports.default = Provider;
	
	
	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;
	
	
	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}
	
	Provider.propTypes = {
	  store: _PropTypes.storeShape.isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _PropTypes.storeShape.isRequired,
	  storeSubscription: _PropTypes.subscriptionShape
	};
	Provider.displayName = 'Provider';
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 178)))

/***/ },
/* 178 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 179 */
/*!**********************************************!*\
  !*** ./~/react-redux/lib/utils/PropTypes.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var subscriptionShape = exports.subscriptionShape = _react.PropTypes.shape({
	  trySubscribe: _react.PropTypes.func.isRequired,
	  tryUnsubscribe: _react.PropTypes.func.isRequired,
	  notifyNestedSubs: _react.PropTypes.func.isRequired,
	  isSubscribed: _react.PropTypes.func.isRequired
	});
	
	var storeShape = exports.storeShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 180 */
/*!********************************************!*\
  !*** ./~/react-redux/lib/utils/warning.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 181 */
/*!*********************************************************!*\
  !*** ./~/react-redux/lib/components/connectAdvanced.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = connectAdvanced;
	
	var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ 175);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(/*! invariant */ 182);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _Subscription = __webpack_require__(/*! ../utils/Subscription */ 183);
	
	var _Subscription2 = _interopRequireDefault(_Subscription);
	
	var _PropTypes = __webpack_require__(/*! ../utils/PropTypes */ 179);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var hotReloadingVersion = 0;
	var dummyState = {};
	function noop() {}
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };
	
	  return selector;
	}
	
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;
	
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);
	
	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;
	
	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);
	
	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));
	
	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	
	    var displayName = getDisplayName(wrappedComponentName);
	
	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
	
	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
	
	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }
	
	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;
	
	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;
	
	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };
	
	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };
	
	      Connect.prototype.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };
	
	      Connect.prototype.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return;
	
	        // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));
	
	        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };
	
	      Connect.prototype.onStateChange = function onStateChange() {
	        this.selector.run(this.props);
	
	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };
	
	      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };
	
	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };
	
	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;
	
	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;
	
	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();
	
	          if (this.subscription) this.subscription.tryUnsubscribe();
	          this.initSubscription();
	          if (shouldHandleStateChanges) this.subscription.trySubscribe();
	        }
	      };
	    }
	
	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 178)))

/***/ },
/* 182 */
/*!********************************!*\
  !*** ./~/invariant/browser.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 178)))

/***/ },
/* 183 */
/*!*************************************************!*\
  !*** ./~/react-redux/lib/utils/Subscription.js ***!
  \*************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants
	
	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};
	
	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];
	
	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);
	
	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;
	
	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}
	
	var Subscription = function () {
	  function Subscription(store, parentSub, onStateChange) {
	    _classCallCheck(this, Subscription);
	
	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }
	
	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };
	
	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };
	
	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };
	
	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
	
	      this.listeners = createListenerCollection();
	    }
	  };
	
	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };
	
	  return Subscription;
	}();
	
	exports.default = Subscription;

/***/ },
/* 184 */
/*!**********************************************!*\
  !*** ./~/react-redux/lib/connect/connect.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createConnect = createConnect;
	
	var _connectAdvanced = __webpack_require__(/*! ../components/connectAdvanced */ 181);
	
	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
	
	var _shallowEqual = __webpack_require__(/*! ../utils/shallowEqual */ 185);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _mapDispatchToProps = __webpack_require__(/*! ./mapDispatchToProps */ 186);
	
	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);
	
	var _mapStateToProps = __webpack_require__(/*! ./mapStateToProps */ 209);
	
	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);
	
	var _mergeProps = __webpack_require__(/*! ./mergeProps */ 210);
	
	var _mergeProps2 = _interopRequireDefault(_mergeProps);
	
	var _selectorFactory = __webpack_require__(/*! ./selectorFactory */ 211);
	
	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:
	
	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.
	
	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.
	
	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */
	
	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }
	
	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}
	
	function strictEqual(a, b) {
	  return a === b;
	}
	
	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;
	
	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);
	
	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	
	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',
	
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },
	
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	
	    }, extraOptions));
	  };
	}
	
	exports.default = createConnect();

/***/ },
/* 185 */
/*!*************************************************!*\
  !*** ./~/react-redux/lib/utils/shallowEqual.js ***!
  \*************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;
	
	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) return false;
	
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 186 */
/*!*********************************************************!*\
  !*** ./~/react-redux/lib/connect/mapDispatchToProps.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
	
	var _redux = __webpack_require__(/*! redux */ 187);
	
	var _wrapMapToProps = __webpack_require__(/*! ./wrapMapToProps */ 207);
	
	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}
	
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	
	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ },
/* 187 */
/*!******************************!*\
  !*** ./~/redux/lib/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 188);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(/*! ./combineReducers */ 202);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(/*! ./bindActionCreators */ 204);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(/*! ./applyMiddleware */ 205);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(/*! ./compose */ 206);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 203);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 178)))

/***/ },
/* 188 */
/*!************************************!*\
  !*** ./~/redux/lib/createStore.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 189);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(/*! symbol-observable */ 199);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 189 */
/*!***********************************!*\
  !*** ./~/lodash/isPlainObject.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 190),
	    getPrototype = __webpack_require__(/*! ./_getPrototype */ 196),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 198);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },
/* 190 */
/*!*********************************!*\
  !*** ./~/lodash/_baseGetTag.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 191),
	    getRawTag = __webpack_require__(/*! ./_getRawTag */ 194),
	    objectToString = __webpack_require__(/*! ./_objectToString */ 195);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 191 */
/*!*****************************!*\
  !*** ./~/lodash/_Symbol.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 192);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 192 */
/*!***************************!*\
  !*** ./~/lodash/_root.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 193);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 193 */
/*!*********************************!*\
  !*** ./~/lodash/_freeGlobal.js ***!
  \*********************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 194 */
/*!********************************!*\
  !*** ./~/lodash/_getRawTag.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 191);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 195 */
/*!*************************************!*\
  !*** ./~/lodash/_objectToString.js ***!
  \*************************************/
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 196 */
/*!***********************************!*\
  !*** ./~/lodash/_getPrototype.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(/*! ./_overArg */ 197);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 197 */
/*!******************************!*\
  !*** ./~/lodash/_overArg.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 198 */
/*!**********************************!*\
  !*** ./~/lodash/isObjectLike.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 199 */
/*!**************************************!*\
  !*** ./~/symbol-observable/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/index */ 200);


/***/ },
/* 200 */
/*!******************************************!*\
  !*** ./~/symbol-observable/lib/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(/*! ./ponyfill */ 201);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(/*! (webpack)/buildin/module.js */ 103)(module)))

/***/ },
/* 201 */
/*!*********************************************!*\
  !*** ./~/symbol-observable/lib/ponyfill.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 202 */
/*!****************************************!*\
  !*** ./~/redux/lib/combineReducers.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 188);
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 189);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 203);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 178)))

/***/ },
/* 203 */
/*!**************************************!*\
  !*** ./~/redux/lib/utils/warning.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 204 */
/*!*******************************************!*\
  !*** ./~/redux/lib/bindActionCreators.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 205 */
/*!****************************************!*\
  !*** ./~/redux/lib/applyMiddleware.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(/*! ./compose */ 206);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 206 */
/*!********************************!*\
  !*** ./~/redux/lib/compose.js ***!
  \********************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 207 */
/*!*****************************************************!*\
  !*** ./~/react-redux/lib/connect/wrapMapToProps.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
	
	var _verifyPlainObject = __webpack_require__(/*! ../utils/verifyPlainObject */ 208);
	
	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);
	
	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}
	
	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}
	
	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;
	
	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };
	
	    // allow detectFactoryAndVerify to get ownProps
	    proxy.dependsOnOwnProps = true;
	
	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);
	
	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }
	
	      if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(props, displayName, methodName);
	
	      return props;
	    };
	
	    return proxy;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 178)))

/***/ },
/* 208 */
/*!******************************************************!*\
  !*** ./~/react-redux/lib/utils/verifyPlainObject.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = verifyPlainObject;
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 189);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(/*! ./warning */ 180);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ },
/* 209 */
/*!******************************************************!*\
  !*** ./~/react-redux/lib/connect/mapStateToProps.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
	
	var _wrapMapToProps = __webpack_require__(/*! ./wrapMapToProps */ 207);
	
	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}
	
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}
	
	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ },
/* 210 */
/*!*************************************************!*\
  !*** ./~/react-redux/lib/connect/mergeProps.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
	
	var _verifyPlainObject = __webpack_require__(/*! ../utils/verifyPlainObject */ 208);
	
	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}
	
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	
	    var hasRunOnce = false;
	    var mergedProps = void 0;
	
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	
	        if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }
	
	      return mergedProps;
	    };
	  };
	}
	
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	
	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 178)))

/***/ },
/* 211 */
/*!******************************************************!*\
  !*** ./~/react-redux/lib/connect/selectorFactory.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;
	
	var _verifySubselectors = __webpack_require__(/*! ./verifySubselectors */ 212);
	
	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	
	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;
	
	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }
	
	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	    return mergedProps;
	  }
	
	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }
	
	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}
	
	// TODO: Add more comments
	
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.
	
	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);
	
	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);
	
	  if (process.env.NODE_ENV !== 'production') {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }
	
	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 178)))

/***/ },
/* 212 */
/*!*********************************************************!*\
  !*** ./~/react-redux/lib/connect/verifySubselectors.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = verifySubselectors;
	
	var _warning = __webpack_require__(/*! ../utils/warning */ 180);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}
	
	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ },
/* 213 */
/*!*******************************!*\
  !*** ./~/is-promise/index.js ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = isPromise;
	
	function isPromise(obj) {
	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}


/***/ },
/* 214 */
/*!*************************************************!*\
  !*** ./~/redux-form/lib/util/getDisplayName.js ***!
  \*************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getDisplayName = function getDisplayName(Comp) {
	  return Comp.displayName || Comp.name || 'Component';
	};
	
	exports.default = getDisplayName;

/***/ },
/* 215 */
/*!*************************************!*\
  !*** ./~/redux-form/lib/actions.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateSyncWarnings = exports.updateSyncErrors = exports.untouch = exports.unregisterField = exports.touch = exports.setSubmitSucceeded = exports.setSubmitFailed = exports.submit = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.reset = exports.registerField = exports.initialize = exports.focus = exports.destroy = exports.clearAsyncError = exports.clearSubmitErrors = exports.clearSubmit = exports.change = exports.blur = exports.autofill = exports.arrayUnshift = exports.arraySwap = exports.arraySplice = exports.arrayShift = exports.arrayRemoveAll = exports.arrayRemove = exports.arrayPush = exports.arrayPop = exports.arrayMove = exports.arrayInsert = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _actionTypes = __webpack_require__(/*! ./actionTypes */ 14);
	
	var arrayInsert = exports.arrayInsert = function arrayInsert(form, field, index, value) {
	  return { type: _actionTypes.ARRAY_INSERT, meta: { form: form, field: field, index: index }, payload: value };
	};
	
	var arrayMove = exports.arrayMove = function arrayMove(form, field, from, to) {
	  return { type: _actionTypes.ARRAY_MOVE, meta: { form: form, field: field, from: from, to: to } };
	};
	
	var arrayPop = exports.arrayPop = function arrayPop(form, field) {
	  return { type: _actionTypes.ARRAY_POP, meta: { form: form, field: field } };
	};
	
	var arrayPush = exports.arrayPush = function arrayPush(form, field, value) {
	  return { type: _actionTypes.ARRAY_PUSH, meta: { form: form, field: field }, payload: value };
	};
	
	var arrayRemove = exports.arrayRemove = function arrayRemove(form, field, index) {
	  return { type: _actionTypes.ARRAY_REMOVE, meta: { form: form, field: field, index: index } };
	};
	
	var arrayRemoveAll = exports.arrayRemoveAll = function arrayRemoveAll(form, field) {
	  return { type: _actionTypes.ARRAY_REMOVE_ALL, meta: { form: form, field: field } };
	};
	
	var arrayShift = exports.arrayShift = function arrayShift(form, field) {
	  return { type: _actionTypes.ARRAY_SHIFT, meta: { form: form, field: field } };
	};
	
	var arraySplice = exports.arraySplice = function arraySplice(form, field, index, removeNum, value) {
	  var action = {
	    type: _actionTypes.ARRAY_SPLICE,
	    meta: { form: form, field: field, index: index, removeNum: removeNum }
	  };
	  if (value !== undefined) {
	    action.payload = value;
	  }
	  return action;
	};
	
	var arraySwap = exports.arraySwap = function arraySwap(form, field, indexA, indexB) {
	  if (indexA === indexB) {
	    throw new Error('Swap indices cannot be equal');
	  }
	  if (indexA < 0 || indexB < 0) {
	    throw new Error('Swap indices cannot be negative');
	  }
	  return { type: _actionTypes.ARRAY_SWAP, meta: { form: form, field: field, indexA: indexA, indexB: indexB } };
	};
	
	var arrayUnshift = exports.arrayUnshift = function arrayUnshift(form, field, value) {
	  return { type: _actionTypes.ARRAY_UNSHIFT, meta: { form: form, field: field }, payload: value };
	};
	
	var autofill = exports.autofill = function autofill(form, field, value) {
	  return { type: _actionTypes.AUTOFILL, meta: { form: form, field: field }, payload: value };
	};
	
	var blur = exports.blur = function blur(form, field, value, touch) {
	  return { type: _actionTypes.BLUR, meta: { form: form, field: field, touch: touch }, payload: value };
	};
	
	var change = exports.change = function change(form, field, value, touch, persistentSubmitErrors) {
	  return { type: _actionTypes.CHANGE, meta: { form: form, field: field, touch: touch, persistentSubmitErrors: persistentSubmitErrors }, payload: value };
	};
	
	var clearSubmit = exports.clearSubmit = function clearSubmit(form) {
	  return { type: _actionTypes.CLEAR_SUBMIT, meta: { form: form } };
	};
	
	var clearSubmitErrors = exports.clearSubmitErrors = function clearSubmitErrors(form) {
	  return { type: _actionTypes.CLEAR_SUBMIT_ERRORS, meta: { form: form } };
	};
	
	var clearAsyncError = exports.clearAsyncError = function clearAsyncError(form, field) {
	  return { type: _actionTypes.CLEAR_ASYNC_ERROR, meta: { form: form, field: field } };
	};
	
	var destroy = exports.destroy = function destroy() {
	  for (var _len = arguments.length, form = Array(_len), _key = 0; _key < _len; _key++) {
	    form[_key] = arguments[_key];
	  }
	
	  return { type: _actionTypes.DESTROY, meta: { form: form } };
	};
	
	var focus = exports.focus = function focus(form, field) {
	  return { type: _actionTypes.FOCUS, meta: { form: form, field: field } };
	};
	
	var initialize = exports.initialize = function initialize(form, values, keepDirty) {
	  var otherMeta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	  if (keepDirty instanceof Object) {
	    otherMeta = keepDirty;
	    keepDirty = false;
	  }
	  return { type: _actionTypes.INITIALIZE, meta: _extends({ form: form, keepDirty: keepDirty }, otherMeta), payload: values };
	};
	
	var registerField = exports.registerField = function registerField(form, name, type) {
	  return { type: _actionTypes.REGISTER_FIELD, meta: { form: form }, payload: { name: name, type: type } };
	};
	
	var reset = exports.reset = function reset(form) {
	  return { type: _actionTypes.RESET, meta: { form: form } };
	};
	
	var startAsyncValidation = exports.startAsyncValidation = function startAsyncValidation(form, field) {
	  return { type: _actionTypes.START_ASYNC_VALIDATION, meta: { form: form, field: field } };
	};
	
	var startSubmit = exports.startSubmit = function startSubmit(form) {
	  return { type: _actionTypes.START_SUBMIT, meta: { form: form } };
	};
	
	var stopAsyncValidation = exports.stopAsyncValidation = function stopAsyncValidation(form, errors) {
	  var action = {
	    type: _actionTypes.STOP_ASYNC_VALIDATION,
	    meta: { form: form },
	    payload: errors
	  };
	  if (errors && Object.keys(errors).length) {
	    action.error = true;
	  }
	  return action;
	};
	
	var stopSubmit = exports.stopSubmit = function stopSubmit(form, errors) {
	  var action = {
	    type: _actionTypes.STOP_SUBMIT,
	    meta: { form: form },
	    payload: errors
	  };
	  if (errors && Object.keys(errors).length) {
	    action.error = true;
	  }
	  return action;
	};
	
	var submit = exports.submit = function submit(form) {
	  return { type: _actionTypes.SUBMIT, meta: { form: form } };
	};
	
	var setSubmitFailed = exports.setSubmitFailed = function setSubmitFailed(form) {
	  for (var _len2 = arguments.length, fields = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    fields[_key2 - 1] = arguments[_key2];
	  }
	
	  return { type: _actionTypes.SET_SUBMIT_FAILED, meta: { form: form, fields: fields }, error: true };
	};
	
	var setSubmitSucceeded = exports.setSubmitSucceeded = function setSubmitSucceeded(form) {
	  for (var _len3 = arguments.length, fields = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    fields[_key3 - 1] = arguments[_key3];
	  }
	
	  return { type: _actionTypes.SET_SUBMIT_SUCCEEDED, meta: { form: form, fields: fields }, error: false };
	};
	
	var touch = exports.touch = function touch(form) {
	  for (var _len4 = arguments.length, fields = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    fields[_key4 - 1] = arguments[_key4];
	  }
	
	  return { type: _actionTypes.TOUCH, meta: { form: form, fields: fields } };
	};
	
	var unregisterField = exports.unregisterField = function unregisterField(form, name) {
	  var destroyOnUnmount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  return { type: _actionTypes.UNREGISTER_FIELD, meta: { form: form }, payload: { name: name, destroyOnUnmount: destroyOnUnmount } };
	};
	
	var untouch = exports.untouch = function untouch(form) {
	  for (var _len5 = arguments.length, fields = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	    fields[_key5 - 1] = arguments[_key5];
	  }
	
	  return { type: _actionTypes.UNTOUCH, meta: { form: form, fields: fields } };
	};
	
	var updateSyncErrors = exports.updateSyncErrors = function updateSyncErrors(form) {
	  var syncErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var error = arguments[2];
	  return { type: _actionTypes.UPDATE_SYNC_ERRORS, meta: { form: form }, payload: { syncErrors: syncErrors, error: error } };
	};
	
	var updateSyncWarnings = exports.updateSyncWarnings = function updateSyncWarnings(form) {
	  var syncWarnings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var warning = arguments[2];
	  return { type: _actionTypes.UPDATE_SYNC_WARNINGS, meta: { form: form }, payload: { syncWarnings: syncWarnings, warning: warning } };
	};

/***/ },
/* 216 */
/*!******************************************!*\
  !*** ./~/redux-form/lib/handleSubmit.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isPromise = __webpack_require__(/*! is-promise */ 213);
	
	var _isPromise2 = _interopRequireDefault(_isPromise);
	
	var _SubmissionError = __webpack_require__(/*! ./SubmissionError */ 217);
	
	var _SubmissionError2 = _interopRequireDefault(_SubmissionError);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var handleSubmit = function handleSubmit(submit, props, valid, asyncValidate, fields) {
	  var dispatch = props.dispatch,
	      onSubmitFail = props.onSubmitFail,
	      onSubmitSuccess = props.onSubmitSuccess,
	      startSubmit = props.startSubmit,
	      stopSubmit = props.stopSubmit,
	      setSubmitFailed = props.setSubmitFailed,
	      setSubmitSucceeded = props.setSubmitSucceeded,
	      syncErrors = props.syncErrors,
	      touch = props.touch,
	      values = props.values,
	      persistentSubmitErrors = props.persistentSubmitErrors;
	
	
	  touch.apply(undefined, _toConsumableArray(fields)); // mark all fields as touched
	
	  if (valid || persistentSubmitErrors) {
	    var doSubmit = function doSubmit() {
	      var result = void 0;
	      try {
	        result = submit(values, dispatch, props);
	      } catch (submitError) {
	        var error = submitError instanceof _SubmissionError2.default ? submitError.errors : undefined;
	        stopSubmit(error);
	        setSubmitFailed.apply(undefined, _toConsumableArray(fields));
	        if (onSubmitFail) {
	          onSubmitFail(error, dispatch, submitError, props);
	        }
	        if (error || onSubmitFail) {
	          // if you've provided an onSubmitFail callback, don't re-throw the error
	          return error;
	        } else {
	          throw submitError;
	        }
	      }
	      if ((0, _isPromise2.default)(result)) {
	        startSubmit();
	        return result.then(function (submitResult) {
	          stopSubmit();
	          setSubmitSucceeded();
	          if (onSubmitSuccess) {
	            onSubmitSuccess(submitResult, dispatch, props);
	          }
	          return submitResult;
	        }, function (submitError) {
	          var error = submitError instanceof _SubmissionError2.default ? submitError.errors : undefined;
	          stopSubmit(error);
	          setSubmitFailed.apply(undefined, _toConsumableArray(fields));
	          if (onSubmitFail) {
	            onSubmitFail(error, dispatch, submitError, props);
	          }
	          if (error || onSubmitFail) {
	            // if you've provided an onSubmitFail callback, don't re-throw the error
	            return error;
	          } else {
	            throw submitError;
	          }
	        });
	      } else {
	        setSubmitSucceeded();
	        if (onSubmitSuccess) {
	          onSubmitSuccess(result, dispatch, props);
	        }
	      }
	      return result;
	    };
	
	    var asyncValidateResult = asyncValidate && asyncValidate();
	    if (asyncValidateResult) {
	      return asyncValidateResult.then(function (asyncErrors) {
	        if (asyncErrors) {
	          throw asyncErrors;
	        }
	        return doSubmit();
	      }).catch(function (asyncErrors) {
	        setSubmitFailed.apply(undefined, _toConsumableArray(fields));
	        if (onSubmitFail) {
	          onSubmitFail(asyncErrors, dispatch, null, props);
	        }
	        return Promise.reject(asyncErrors);
	      });
	    } else {
	      return doSubmit();
	    }
	  } else {
	    setSubmitFailed.apply(undefined, _toConsumableArray(fields));
	    if (onSubmitFail) {
	      onSubmitFail(syncErrors, dispatch, null, props);
	    }
	    return syncErrors;
	  }
	};
	
	exports.default = handleSubmit;

/***/ },
/* 217 */
/*!*********************************************!*\
  !*** ./~/redux-form/lib/SubmissionError.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _es6Error = __webpack_require__(/*! es6-error */ 218);
	
	var _es6Error2 = _interopRequireDefault(_es6Error);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SubmissionError = function (_ExtendableError) {
	  _inherits(SubmissionError, _ExtendableError);
	
	  function SubmissionError(errors) {
	    _classCallCheck(this, SubmissionError);
	
	    var _this = _possibleConstructorReturn(this, (SubmissionError.__proto__ || Object.getPrototypeOf(SubmissionError)).call(this, 'Submit Validation Failed'));
	
	    _this.errors = errors;
	    return _this;
	  }
	
	  return SubmissionError;
	}(_es6Error2.default);
	
	exports.default = SubmissionError;

/***/ },
/* 218 */
/*!**********************************!*\
  !*** ./~/es6-error/lib/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _extendableBuiltin(cls) {
	  function ExtendableBuiltin() {
	    cls.apply(this, arguments);
	  }
	
	  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	    constructor: {
	      value: cls,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	
	  if (Object.setPrototypeOf) {
	    Object.setPrototypeOf(ExtendableBuiltin, cls);
	  } else {
	    ExtendableBuiltin.__proto__ = cls;
	  }
	
	  return ExtendableBuiltin;
	}
	
	var ExtendableError = function (_extendableBuiltin2) {
	  _inherits(ExtendableError, _extendableBuiltin2);
	
	  function ExtendableError() {
	    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	    _classCallCheck(this, ExtendableError);
	
	    // extending Error is weird and does not propagate `message`
	    var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));
	
	    Object.defineProperty(_this, 'message', {
	      configurable: true,
	      enumerable: false,
	      value: message,
	      writable: true
	    });
	
	    Object.defineProperty(_this, 'name', {
	      configurable: true,
	      enumerable: false,
	      value: _this.constructor.name,
	      writable: true
	    });
	
	    if (Error.hasOwnProperty('captureStackTrace')) {
	      Error.captureStackTrace(_this, _this.constructor);
	      return _possibleConstructorReturn(_this);
	    }
	
	    Object.defineProperty(_this, 'stack', {
	      configurable: true,
	      enumerable: false,
	      value: new Error(message).stack,
	      writable: true
	    });
	    return _this;
	  }
	
	  return ExtendableError;
	}(_extendableBuiltin(Error));
	
	exports.default = ExtendableError;
	module.exports = exports['default'];


/***/ },
/* 219 */
/*!*************************************************!*\
  !*** ./~/redux-form/lib/events/silenceEvent.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isEvent = __webpack_require__(/*! ./isEvent */ 220);
	
	var _isEvent2 = _interopRequireDefault(_isEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var silenceEvent = function silenceEvent(event) {
	  var is = (0, _isEvent2.default)(event);
	  if (is) {
	    event.preventDefault();
	  }
	  return is;
	};
	
	exports.default = silenceEvent;

/***/ },
/* 220 */
/*!********************************************!*\
  !*** ./~/redux-form/lib/events/isEvent.js ***!
  \********************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isEvent = function isEvent(candidate) {
	  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
	};
	
	exports.default = isEvent;

/***/ },
/* 221 */
/*!**************************************************!*\
  !*** ./~/redux-form/lib/events/silenceEvents.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _silenceEvent = __webpack_require__(/*! ./silenceEvent */ 219);
	
	var _silenceEvent2 = _interopRequireDefault(_silenceEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var silenceEvents = function silenceEvents(fn) {
	  return function (event) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    return (0, _silenceEvent2.default)(event) ? fn.apply(undefined, args) : fn.apply(undefined, [event].concat(args));
	  };
	};
	
	exports.default = silenceEvents;

/***/ },
/* 222 */
/*!*********************************************!*\
  !*** ./~/redux-form/lib/asyncValidation.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isPromise = __webpack_require__(/*! is-promise */ 213);
	
	var _isPromise2 = _interopRequireDefault(_isPromise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var asyncValidation = function asyncValidation(fn, start, stop, field) {
	  start(field);
	  var promise = fn();
	  if (!(0, _isPromise2.default)(promise)) {
	    throw new Error('asyncValidate function passed to reduxForm must return a promise');
	  }
	  var handleErrors = function handleErrors(rejected) {
	    return function (errors) {
	      if (errors && Object.keys(errors).length) {
	        stop(errors);
	        return errors;
	      } else if (rejected) {
	        stop();
	        throw new Error('Asynchronous validation promise was rejected without errors.');
	      }
	      stop();
	      return Promise.resolve();
	    };
	  };
	  return promise.then(handleErrors(false), handleErrors(true));
	};
	
	exports.default = asyncValidation;

/***/ },
/* 223 */
/*!********************************************************!*\
  !*** ./~/redux-form/lib/defaultShouldAsyncValidate.js ***!
  \********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var defaultShouldAsyncValidate = function defaultShouldAsyncValidate(_ref) {
	  var initialized = _ref.initialized,
	      trigger = _ref.trigger,
	      pristine = _ref.pristine,
	      syncValidationPasses = _ref.syncValidationPasses;
	
	  if (!syncValidationPasses) {
	    return false;
	  }
	  switch (trigger) {
	    case 'blur':
	      // blurring
	      return true;
	    case 'submit':
	      // submitting, so only async validate if form is dirty or was never initialized
	      // conversely, DON'T async validate if the form is pristine just as it was initialized
	      return !pristine || !initialized;
	    default:
	      return false;
	  }
	};
	
	exports.default = defaultShouldAsyncValidate;

/***/ },
/* 224 */
/*!***************************************************!*\
  !*** ./~/redux-form/lib/defaultShouldValidate.js ***!
  \***************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var defaultShouldValidate = function defaultShouldValidate(_ref) {
	  var values = _ref.values,
	      nextProps = _ref.nextProps,
	      initialRender = _ref.initialRender,
	      lastFieldValidatorKeys = _ref.lastFieldValidatorKeys,
	      fieldValidatorKeys = _ref.fieldValidatorKeys,
	      structure = _ref.structure;
	
	  if (initialRender) {
	    return true;
	  }
	  return !structure.deepEqual(values, nextProps.values) || !structure.deepEqual(lastFieldValidatorKeys, fieldValidatorKeys);
	};
	
	exports.default = defaultShouldValidate;

/***/ },
/* 225 */
/*!***********************************************!*\
  !*** ./~/redux-form/lib/generateValidator.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _plain = __webpack_require__(/*! ./structure/plain */ 66);
	
	var _plain2 = _interopRequireDefault(_plain);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var toArray = function toArray(value) {
	  return Array.isArray(value) ? value : [value];
	};
	
	var getError = function getError(value, values, props, validators) {
	  var array = toArray(validators);
	  for (var i = 0; i < array.length; i++) {
	    var error = array[i](value, values, props);
	    if (error) {
	      return error;
	    }
	  }
	};
	
	var generateValidator = function generateValidator(validators, _ref) {
	  var getIn = _ref.getIn;
	  return function (values, props) {
	    var errors = {};
	    Object.keys(validators).forEach(function (name) {
	      var value = getIn(values, name);
	      var error = getError(value, values, props, validators[name]);
	      if (error) {
	        errors = _plain2.default.setIn(errors, name, error);
	      }
	    });
	    return errors;
	  };
	};
	
	exports.default = generateValidator;

/***/ },
/* 226 */
/*!***********************************************!*\
  !*** ./~/redux-form/lib/selectors/isValid.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hasError = __webpack_require__(/*! ../hasError */ 227);
	
	var _hasError2 = _interopRequireDefault(_hasError);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createIsValid = function createIsValid(structure) {
	  var getIn = structure.getIn,
	      keys = structure.keys;
	
	  var hasError = (0, _hasError2.default)(structure);
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    var ignoreSubmitErrors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	    return function (state) {
	      var formState = getFormState(state);
	      var syncError = getIn(formState, form + '.syncError');
	      if (syncError) {
	        return false;
	      }
	      if (!ignoreSubmitErrors) {
	        var error = getIn(formState, form + '.error');
	        if (error) {
	          return false;
	        }
	      }
	      var syncErrors = getIn(formState, form + '.syncErrors');
	      var asyncErrors = getIn(formState, form + '.asyncErrors');
	      var submitErrors = ignoreSubmitErrors ? undefined : getIn(formState, form + '.submitErrors');
	      if (!syncErrors && !asyncErrors && !submitErrors) {
	        return true;
	      }
	
	      var registeredFields = getIn(formState, form + '.registeredFields');
	      if (!registeredFields) {
	        return true;
	      }
	
	      return !keys(registeredFields).filter(function (name) {
	        return getIn(registeredFields, '[\'' + name + '\'].count') > 0;
	      }).some(function (name) {
	        return hasError(getIn(registeredFields, '[\'' + name + '\']'), syncErrors, asyncErrors, submitErrors);
	      });
	    };
	  };
	};
	
	exports.default = createIsValid;

/***/ },
/* 227 */
/*!**************************************!*\
  !*** ./~/redux-form/lib/hasError.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getErrorKeys = function getErrorKeys(name, type) {
	  switch (type) {
	    case 'Field':
	      return [name, name + '._error'];
	    case 'FieldArray':
	      return [name + '._error'];
	    default:
	      throw new Error('Unknown field type');
	  }
	};
	
	var createHasError = function createHasError(_ref) {
	  var getIn = _ref.getIn;
	
	  var hasError = function hasError(field, syncErrors, asyncErrors, submitErrors) {
	    if (!syncErrors && !asyncErrors && !submitErrors) {
	      return false;
	    }
	
	    var name = getIn(field, 'name');
	    var type = getIn(field, 'type');
	    return getErrorKeys(name, type).some(function (key) {
	      return getIn(syncErrors, key) || getIn(asyncErrors, key) || getIn(submitErrors, key);
	    });
	  };
	  return hasError;
	};
	
	exports.default = createHasError;

/***/ },
/* 228 */
/*!***********************************!*\
  !*** ./~/redux-form/lib/Field.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _invariant = __webpack_require__(/*! invariant */ 182);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ConnectedField = __webpack_require__(/*! ./ConnectedField */ 229);
	
	var _ConnectedField2 = _interopRequireDefault(_ConnectedField);
	
	var _shallowCompare = __webpack_require__(/*! ./util/shallowCompare */ 235);
	
	var _shallowCompare2 = _interopRequireDefault(_shallowCompare);
	
	var _prefixName = __webpack_require__(/*! ./util/prefixName */ 236);
	
	var _prefixName2 = _interopRequireDefault(_prefixName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var createField = function createField(_ref) {
	  var deepEqual = _ref.deepEqual,
	      getIn = _ref.getIn,
	      setIn = _ref.setIn,
	      toJS = _ref.toJS;
	
	
	  var ConnectedField = (0, _ConnectedField2.default)({
	    deepEqual: deepEqual,
	    getIn: getIn,
	    toJS: toJS
	  });
	
	  var Field = function (_Component) {
	    _inherits(Field, _Component);
	
	    function Field(props, context) {
	      _classCallCheck(this, Field);
	
	      var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props, context));
	
	      if (!context._reduxForm) {
	        throw new Error('Field must be inside a component decorated with reduxForm()');
	      }
	
	      _this.normalize = _this.normalize.bind(_this);
	      return _this;
	    }
	
	    _createClass(Field, [{
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps, nextState) {
	        return (0, _shallowCompare2.default)(this, nextProps, nextState);
	      }
	    }, {
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        var _this2 = this;
	
	        this.context._reduxForm.register(this.name, 'Field', function () {
	          return _this2.props.validate;
	        }, function () {
	          return _this2.props.warn;
	        });
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (this.props.name !== nextProps.name) {
	          // unregister old name
	          this.context._reduxForm.unregister(this.name);
	          // register new name
	          this.context._reduxForm.register((0, _prefixName2.default)(this.context, nextProps.name), 'Field');
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.context._reduxForm.unregister(this.name);
	      }
	    }, {
	      key: 'getRenderedComponent',
	      value: function getRenderedComponent() {
	        (0, _invariant2.default)(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to Field');
	        return this.refs.connected.getWrappedInstance().getRenderedComponent();
	      }
	    }, {
	      key: 'normalize',
	      value: function normalize(name, value) {
	        var normalize = this.props.normalize;
	
	        if (!normalize) {
	          return value;
	        }
	        var previousValues = this.context._reduxForm.getValues();
	        var previousValue = this.value;
	        var nextValues = setIn(previousValues, name, value);
	        return normalize(value, previousValue, nextValues, previousValues);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return (0, _react.createElement)(ConnectedField, _extends({}, this.props, {
	          name: this.name,
	          normalize: this.normalize,
	          _reduxForm: this.context._reduxForm,
	          ref: 'connected'
	        }));
	      }
	    }, {
	      key: 'name',
	      get: function get() {
	        return (0, _prefixName2.default)(this.context, this.props.name);
	      }
	    }, {
	      key: 'dirty',
	      get: function get() {
	        return !this.pristine;
	      }
	    }, {
	      key: 'pristine',
	      get: function get() {
	        return this.refs.connected.getWrappedInstance().isPristine();
	      }
	    }, {
	      key: 'value',
	      get: function get() {
	        return this.refs.connected && this.refs.connected.getWrappedInstance().getValue();
	      }
	    }]);
	
	    return Field;
	  }(_react.Component);
	
	  Field.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	    format: _react.PropTypes.func,
	    normalize: _react.PropTypes.func,
	    onBlur: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    onFocus: _react.PropTypes.func,
	    onDragStart: _react.PropTypes.func,
	    onDrop: _react.PropTypes.func,
	    parse: _react.PropTypes.func,
	    props: _react.PropTypes.object,
	    validate: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.func)]),
	    warn: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.func)]),
	    withRef: _react.PropTypes.bool
	  };
	  Field.contextTypes = {
	    _reduxForm: _react.PropTypes.object
	  };
	
	  return Field;
	};
	
	exports.default = createField;

/***/ },
/* 229 */
/*!********************************************!*\
  !*** ./~/redux-form/lib/ConnectedField.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 176);
	
	var _createFieldProps2 = __webpack_require__(/*! ./createFieldProps */ 230);
	
	var _createFieldProps3 = _interopRequireDefault(_createFieldProps2);
	
	var _onChangeValue = __webpack_require__(/*! ./events/onChangeValue */ 231);
	
	var _onChangeValue2 = _interopRequireDefault(_onChangeValue);
	
	var _eventConsts = __webpack_require__(/*! ./util/eventConsts */ 234);
	
	var _plain = __webpack_require__(/*! ./structure/plain */ 66);
	
	var _plain2 = _interopRequireDefault(_plain);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propsToNotUpdateFor = ['_reduxForm'];
	
	var createConnectedField = function createConnectedField(_ref) {
	  var deepEqual = _ref.deepEqual,
	      getIn = _ref.getIn,
	      toJS = _ref.toJS;
	
	
	  var getSyncError = function getSyncError(syncErrors, name) {
	    var error = _plain2.default.getIn(syncErrors, name);
	    // Because the error for this field might not be at a level in the error structure where
	    // it can be set directly, it might need to be unwrapped from the _error property
	    return error && error._error ? error._error : error;
	  };
	
	  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
	    var warning = getIn(syncWarnings, name);
	    // Because the warning for this field might not be at a level in the warning structure where
	    // it can be set directly, it might need to be unwrapped from the _warning property
	    return warning && warning._warning ? warning._warning : warning;
	  };
	
	  var ConnectedField = function (_Component) {
	    _inherits(ConnectedField, _Component);
	
	    function ConnectedField(props) {
	      _classCallCheck(this, ConnectedField);
	
	      var _this = _possibleConstructorReturn(this, (ConnectedField.__proto__ || Object.getPrototypeOf(ConnectedField)).call(this, props));
	
	      _this.handleChange = _this.handleChange.bind(_this);
	      _this.handleFocus = _this.handleFocus.bind(_this);
	      _this.handleBlur = _this.handleBlur.bind(_this);
	      _this.handleDragStart = _this.handleDragStart.bind(_this);
	      _this.handleDrop = _this.handleDrop.bind(_this);
	      return _this;
	    }
	
	    _createClass(ConnectedField, [{
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps) {
	        var _this2 = this;
	
	        var nextPropsKeys = Object.keys(nextProps);
	        var thisPropsKeys = Object.keys(this.props);
	        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
	          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
	        });
	      }
	    }, {
	      key: 'isPristine',
	      value: function isPristine() {
	        return this.props.pristine;
	      }
	    }, {
	      key: 'getValue',
	      value: function getValue() {
	        return this.props.value;
	      }
	    }, {
	      key: 'getRenderedComponent',
	      value: function getRenderedComponent() {
	        return this.refs.renderedComponent;
	      }
	    }, {
	      key: 'handleChange',
	      value: function handleChange(event) {
	        var _props = this.props,
	            name = _props.name,
	            dispatch = _props.dispatch,
	            parse = _props.parse,
	            normalize = _props.normalize,
	            onChange = _props.onChange,
	            _reduxForm = _props._reduxForm,
	            previousValue = _props.value;
	
	        var newValue = (0, _onChangeValue2.default)(event, { name: name, parse: parse, normalize: normalize });
	
	        var defaultPrevented = false;
	        if (onChange) {
	          onChange(_extends({}, event, {
	            preventDefault: function preventDefault() {
	              defaultPrevented = true;
	              return event.preventDefault();
	            }
	          }), newValue, previousValue);
	        }
	        if (!defaultPrevented) {
	          // dispatch change action
	          dispatch(_reduxForm.change(name, newValue));
	        }
	      }
	    }, {
	      key: 'handleFocus',
	      value: function handleFocus(event) {
	        var _props2 = this.props,
	            name = _props2.name,
	            dispatch = _props2.dispatch,
	            onFocus = _props2.onFocus,
	            _reduxForm = _props2._reduxForm;
	
	
	        var defaultPrevented = false;
	        if (onFocus) {
	          onFocus(_extends({}, event, {
	            preventDefault: function preventDefault() {
	              defaultPrevented = true;
	              return event.preventDefault();
	            }
	          }));
	        }
	
	        if (!defaultPrevented) {
	          dispatch(_reduxForm.focus(name));
	        }
	      }
	    }, {
	      key: 'handleBlur',
	      value: function handleBlur(event) {
	        var _props3 = this.props,
	            name = _props3.name,
	            dispatch = _props3.dispatch,
	            parse = _props3.parse,
	            normalize = _props3.normalize,
	            onBlur = _props3.onBlur,
	            _reduxForm = _props3._reduxForm,
	            _value = _props3._value,
	            previousValue = _props3.value;
	
	        var newValue = (0, _onChangeValue2.default)(event, { name: name, parse: parse, normalize: normalize });
	
	        // for checkbox and radio, if the value property of checkbox or radio equals
	        // the value passed by blur event, then fire blur action with previousValue.
	        if (newValue === _value && _value !== undefined) {
	          newValue = previousValue;
	        }
	
	        var defaultPrevented = false;
	        if (onBlur) {
	          onBlur(_extends({}, event, {
	            preventDefault: function preventDefault() {
	              defaultPrevented = true;
	              return event.preventDefault();
	            }
	          }), newValue, previousValue);
	        }
	
	        if (!defaultPrevented) {
	          // dispatch blur action
	          dispatch(_reduxForm.blur(name, newValue));
	
	          // call post-blur callback
	          if (_reduxForm.asyncValidate) {
	            _reduxForm.asyncValidate(name, newValue);
	          }
	        }
	      }
	    }, {
	      key: 'handleDragStart',
	      value: function handleDragStart(event) {
	        var _props4 = this.props,
	            onDragStart = _props4.onDragStart,
	            value = _props4.value;
	
	        event.dataTransfer.setData(_eventConsts.dataKey, value == null ? '' : value);
	
	        if (onDragStart) {
	          onDragStart(event);
	        }
	      }
	    }, {
	      key: 'handleDrop',
	      value: function handleDrop(event) {
	        var _props5 = this.props,
	            name = _props5.name,
	            dispatch = _props5.dispatch,
	            onDrop = _props5.onDrop,
	            _reduxForm = _props5._reduxForm,
	            previousValue = _props5.value;
	
	        var newValue = event.dataTransfer.getData(_eventConsts.dataKey);
	
	        var defaultPrevented = false;
	        if (onDrop) {
	          onDrop(_extends({}, event, {
	            preventDefault: function preventDefault() {
	              defaultPrevented = true;
	              return event.preventDefault();
	            }
	          }), newValue, previousValue);
	        }
	
	        if (!defaultPrevented) {
	          // dispatch change action
	          dispatch(_reduxForm.change(name, newValue));
	          event.preventDefault();
	        }
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _props6 = this.props,
	            component = _props6.component,
	            withRef = _props6.withRef,
	            name = _props6.name,
	            _reduxForm = _props6._reduxForm,
	            normalize = _props6.normalize,
	            onBlur = _props6.onBlur,
	            onChange = _props6.onChange,
	            onFocus = _props6.onFocus,
	            onDragStart = _props6.onDragStart,
	            onDrop = _props6.onDrop,
	            rest = _objectWithoutProperties(_props6, ['component', 'withRef', 'name', '_reduxForm', 'normalize', 'onBlur', 'onChange', 'onFocus', 'onDragStart', 'onDrop']);
	
	        var _createFieldProps = (0, _createFieldProps3.default)({ getIn: getIn, toJS: toJS }, name, _extends({}, rest, {
	          form: _reduxForm.form,
	          onBlur: this.handleBlur,
	          onChange: this.handleChange,
	          onDrop: this.handleDrop,
	          onDragStart: this.handleDragStart,
	          onFocus: this.handleFocus
	        })),
	            custom = _createFieldProps.custom,
	            props = _objectWithoutProperties(_createFieldProps, ['custom']);
	
	        if (withRef) {
	          custom.ref = 'renderedComponent';
	        }
	        if (typeof component === 'string') {
	          var input = props.input,
	              meta = props.meta; // eslint-disable-line no-unused-vars
	          // flatten input into other props
	
	          return (0, _react.createElement)(component, _extends({}, input, custom));
	        } else {
	          return (0, _react.createElement)(component, _extends({}, props, custom));
	        }
	      }
	    }]);
	
	    return ConnectedField;
	  }(_react.Component);
	
	  ConnectedField.propTypes = {
	    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	    props: _react.PropTypes.object
	  };
	
	  var connector = (0, _reactRedux.connect)(function (state, ownProps) {
	    var name = ownProps.name,
	        _ownProps$_reduxForm = ownProps._reduxForm,
	        initialValues = _ownProps$_reduxForm.initialValues,
	        getFormState = _ownProps$_reduxForm.getFormState;
	
	    var formState = getFormState(state);
	    var initialState = getIn(formState, 'initial.' + name);
	    var initial = initialState !== undefined ? initialState : initialValues && getIn(initialValues, name);
	    var value = getIn(formState, 'values.' + name);
	    var submitting = getIn(formState, 'submitting');
	    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
	    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
	    var pristine = deepEqual(value, initial);
	    return {
	      asyncError: getIn(formState, 'asyncErrors.' + name),
	      asyncValidating: getIn(formState, 'asyncValidating') === name,
	      dirty: !pristine,
	      pristine: pristine,
	      state: getIn(formState, 'fields.' + name),
	      submitError: getIn(formState, 'submitErrors.' + name),
	      submitFailed: getIn(formState, 'submitFailed'),
	      submitting: submitting,
	      syncError: syncError,
	      syncWarning: syncWarning,
	      value: value,
	      _value: ownProps.value // save value passed in (for checkboxes)
	    };
	  }, undefined, undefined, { withRef: true });
	  return connector(ConnectedField);
	};
	
	exports.default = createConnectedField;

/***/ },
/* 230 */
/*!**********************************************!*\
  !*** ./~/redux-form/lib/createFieldProps.js ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var processProps = function processProps(type, props, _value) {
	  var value = props.value;
	
	  if (type === 'checkbox') {
	    return _extends({}, props, {
	      checked: !!value
	    });
	  }
	  if (type === 'radio') {
	    return _extends({}, props, {
	      checked: value === _value,
	      value: _value
	    });
	  }
	  if (type === 'select-multiple') {
	    return _extends({}, props, {
	      value: value || []
	    });
	  }
	  if (type === 'file') {
	    return _extends({}, props, {
	      value: value || undefined
	    });
	  }
	  return props;
	};
	
	var createFieldProps = function createFieldProps(_ref2, name, _ref) {
	  var getIn = _ref2.getIn,
	      toJS = _ref2.toJS;
	
	  var asyncError = _ref.asyncError,
	      asyncValidating = _ref.asyncValidating,
	      onBlur = _ref.onBlur,
	      onChange = _ref.onChange,
	      onDrop = _ref.onDrop,
	      onDragStart = _ref.onDragStart,
	      dirty = _ref.dirty,
	      dispatch = _ref.dispatch,
	      onFocus = _ref.onFocus,
	      form = _ref.form,
	      format = _ref.format,
	      parse = _ref.parse,
	      pristine = _ref.pristine,
	      props = _ref.props,
	      state = _ref.state,
	      submitError = _ref.submitError,
	      submitFailed = _ref.submitFailed,
	      submitting = _ref.submitting,
	      syncError = _ref.syncError,
	      syncWarning = _ref.syncWarning,
	      validate = _ref.validate,
	      value = _ref.value,
	      _value = _ref._value,
	      warn = _ref.warn,
	      custom = _objectWithoutProperties(_ref, ['asyncError', 'asyncValidating', 'onBlur', 'onChange', 'onDrop', 'onDragStart', 'dirty', 'dispatch', 'onFocus', 'form', 'format', 'parse', 'pristine', 'props', 'state', 'submitError', 'submitFailed', 'submitting', 'syncError', 'syncWarning', 'validate', 'value', '_value', 'warn']);
	
	  var error = syncError || asyncError || submitError;
	  var warning = syncWarning;
	
	  var formatFieldValue = function formatFieldValue(value, format) {
	    if (format === null) {
	      return value;
	    }
	    var defaultFormattedValue = value == null ? '' : value;
	    return format ? format(value, name) : defaultFormattedValue;
	  };
	
	  var formattedFieldValue = formatFieldValue(value, format);
	
	  return {
	    input: processProps(custom.type, {
	      name: name,
	      onBlur: onBlur,
	      onChange: onChange,
	      onDragStart: onDragStart,
	      onDrop: onDrop,
	      onFocus: onFocus,
	      value: formattedFieldValue
	    }, _value),
	    meta: _extends({}, toJS(state), {
	      active: !!(state && getIn(state, 'active')),
	      asyncValidating: asyncValidating,
	      autofilled: !!(state && getIn(state, 'autofilled')),
	      dirty: dirty,
	      dispatch: dispatch,
	      error: error,
	      form: form,
	      warning: warning,
	      invalid: !!error,
	      pristine: pristine,
	      submitting: !!submitting,
	      submitFailed: !!submitFailed,
	      touched: !!(state && getIn(state, 'touched')),
	      valid: !error,
	      visited: !!(state && getIn(state, 'visited'))
	    }),
	    custom: _extends({}, custom, props)
	  };
	};
	
	exports.default = createFieldProps;

/***/ },
/* 231 */
/*!**************************************************!*\
  !*** ./~/redux-form/lib/events/onChangeValue.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getValue = __webpack_require__(/*! ./getValue */ 232);
	
	var _getValue2 = _interopRequireDefault(_getValue);
	
	var _isReactNative = __webpack_require__(/*! ../isReactNative */ 233);
	
	var _isReactNative2 = _interopRequireDefault(_isReactNative);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var onChangeValue = function onChangeValue(event, _ref) {
	  var name = _ref.name,
	      parse = _ref.parse,
	      normalize = _ref.normalize;
	
	  // read value from input
	  var value = (0, _getValue2.default)(event, _isReactNative2.default);
	
	  // parse value if we have a parser
	  if (parse) {
	    value = parse(value, name);
	  }
	
	  // normalize value
	  if (normalize) {
	    value = normalize(name, value);
	  }
	
	  return value;
	};
	
	exports.default = onChangeValue;

/***/ },
/* 232 */
/*!*********************************************!*\
  !*** ./~/redux-form/lib/events/getValue.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isEvent = __webpack_require__(/*! ./isEvent */ 220);
	
	var _isEvent2 = _interopRequireDefault(_isEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getSelectedValues = function getSelectedValues(options) {
	  var result = [];
	  if (options) {
	    for (var index = 0; index < options.length; index++) {
	      var option = options[index];
	      if (option.selected) {
	        result.push(option.value);
	      }
	    }
	  }
	  return result;
	};
	
	var getValue = function getValue(event, isReactNative) {
	  if ((0, _isEvent2.default)(event)) {
	    if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
	      return event.nativeEvent.text;
	    }
	    if (isReactNative && event.nativeEvent !== undefined) {
	      return event.nativeEvent.text;
	    }
	    var _event$target = event.target,
	        type = _event$target.type,
	        value = _event$target.value,
	        checked = _event$target.checked,
	        files = _event$target.files,
	        dataTransfer = event.dataTransfer;
	
	    if (type === 'checkbox') {
	      return checked;
	    }
	    if (type === 'file') {
	      return files || dataTransfer && dataTransfer.files;
	    }
	    if (type === 'select-multiple') {
	      return getSelectedValues(event.target.options);
	    }
	    return value;
	  }
	  return event;
	};
	
	exports.default = getValue;

/***/ },
/* 233 */
/*!*******************************************!*\
  !*** ./~/redux-form/lib/isReactNative.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isReactNative = typeof window !== 'undefined' && window.navigator && window.navigator.product && window.navigator.product === 'ReactNative';
	
	exports.default = isReactNative;

/***/ },
/* 234 */
/*!**********************************************!*\
  !*** ./~/redux-form/lib/util/eventConsts.js ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var dataKey = exports.dataKey = 'text';

/***/ },
/* 235 */
/*!*************************************************!*\
  !*** ./~/redux-form/lib/util/shallowCompare.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isEqualWith2 = __webpack_require__(/*! lodash/isEqualWith */ 71);
	
	var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var customizer = function customizer(objectValue, otherValue, indexOrkey, object, other, stack) {
	  // https://lodash.com/docs/4.17.4#isEqualWith
	  if (stack) {
	    // Shallow compares
	    // For 1st level, stack === undefined.
	    //   -> Do nothing (and implicitly return undefined so that it goes to compare 2nd level)
	    // For 2nd level and up, stack !== undefined.
	    //   -> Compare by === operator
	    return objectValue === otherValue;
	  }
	};
	
	var shallowCompare = function shallowCompare(instance, nextProps, nextState) {
	  return !(0, _isEqualWith3.default)(instance.props, nextProps, customizer) || !(0, _isEqualWith3.default)(instance.state, nextState, customizer);
	};
	
	exports.default = shallowCompare;

/***/ },
/* 236 */
/*!*********************************************!*\
  !*** ./~/redux-form/lib/util/prefixName.js ***!
  \*********************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = formatName;
	function formatName(context, name) {
	  var sectionPrefix = context._reduxForm.sectionPrefix;
	
	  return !sectionPrefix ? name : sectionPrefix + "." + name;
	}

/***/ },
/* 237 */
/*!************************************!*\
  !*** ./~/redux-form/lib/Fields.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _invariant = __webpack_require__(/*! invariant */ 182);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ConnectedFields = __webpack_require__(/*! ./ConnectedFields */ 238);
	
	var _ConnectedFields2 = _interopRequireDefault(_ConnectedFields);
	
	var _shallowCompare = __webpack_require__(/*! ./util/shallowCompare */ 235);
	
	var _shallowCompare2 = _interopRequireDefault(_shallowCompare);
	
	var _plain = __webpack_require__(/*! ./structure/plain */ 66);
	
	var _plain2 = _interopRequireDefault(_plain);
	
	var _prefixName = __webpack_require__(/*! ./util/prefixName */ 236);
	
	var _prefixName2 = _interopRequireDefault(_prefixName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var validateNameProp = function validateNameProp(prop) {
	  if (!prop) {
	    return new Error('No "names" prop was specified <Fields/>');
	  }
	  if (!Array.isArray(prop) && !prop._isFieldArray) {
	    return new Error('Invalid prop "names" supplied to <Fields/>. Must be either an array of strings or the fields array generated by FieldArray.');
	  }
	};
	
	var createFields = function createFields(_ref) {
	  var deepEqual = _ref.deepEqual,
	      getIn = _ref.getIn,
	      toJS = _ref.toJS,
	      size = _ref.size;
	
	
	  var ConnectedFields = (0, _ConnectedFields2.default)({
	    deepEqual: deepEqual,
	    getIn: getIn,
	    toJS: toJS,
	    size: size
	  });
	
	  var Fields = function (_Component) {
	    _inherits(Fields, _Component);
	
	    function Fields(props, context) {
	      _classCallCheck(this, Fields);
	
	      var _this = _possibleConstructorReturn(this, (Fields.__proto__ || Object.getPrototypeOf(Fields)).call(this, props, context));
	
	      if (!context._reduxForm) {
	        throw new Error('Fields must be inside a component decorated with reduxForm()');
	      }
	      return _this;
	    }
	
	    _createClass(Fields, [{
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps, nextState) {
	        return (0, _shallowCompare2.default)(this, nextProps, nextState);
	      }
	    }, {
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        var error = validateNameProp(this.props.names);
	        if (error) {
	          throw error;
	        }
	        var context = this.context;
	        var register = context._reduxForm.register;
	
	        this.names.forEach(function (name) {
	          return register(name, 'Field');
	        });
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (!_plain2.default.deepEqual(this.props.names, nextProps.names)) {
	          var context = this.context;
	          var _context$_reduxForm = context._reduxForm,
	              register = _context$_reduxForm.register,
	              unregister = _context$_reduxForm.unregister;
	          // unregister old name
	
	          this.props.names.forEach(function (name) {
	            return unregister((0, _prefixName2.default)(context, name));
	          });
	          // register new name
	          nextProps.names.forEach(function (name) {
	            return register((0, _prefixName2.default)(context, name), 'Field');
	          });
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        var context = this.context;
	        var unregister = context._reduxForm.unregister;
	
	        this.props.names.forEach(function (name) {
	          return unregister((0, _prefixName2.default)(context, name));
	        });
	      }
	    }, {
	      key: 'getRenderedComponent',
	      value: function getRenderedComponent() {
	        (0, _invariant2.default)(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to Fields');
	        return this.refs.connected.getWrappedInstance().getRenderedComponent();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var context = this.context;
	
	        return (0, _react.createElement)(ConnectedFields, _extends({}, this.props, {
	          names: this.props.names.map(function (name) {
	            return (0, _prefixName2.default)(context, name);
	          }),
	          _reduxForm: this.context._reduxForm,
	          ref: 'connected'
	        }));
	      }
	    }, {
	      key: 'names',
	      get: function get() {
	        var context = this.context;
	
	        return this.props.names.map(function (name) {
	          return (0, _prefixName2.default)(context, name);
	        });
	      }
	    }, {
	      key: 'dirty',
	      get: function get() {
	        return this.refs.connected.getWrappedInstance().isDirty();
	      }
	    }, {
	      key: 'pristine',
	      get: function get() {
	        return !this.dirty;
	      }
	    }, {
	      key: 'values',
	      get: function get() {
	        return this.refs.connected && this.refs.connected.getWrappedInstance().getValues();
	      }
	    }]);
	
	    return Fields;
	  }(_react.Component);
	
	  Fields.propTypes = {
	    names: function names(props, propName) {
	      return validateNameProp(props[propName]);
	    },
	    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	    format: _react.PropTypes.func,
	    parse: _react.PropTypes.func,
	    props: _react.PropTypes.object,
	    withRef: _react.PropTypes.bool
	  };
	  Fields.contextTypes = {
	    _reduxForm: _react.PropTypes.object
	  };
	
	  return Fields;
	};
	
	exports.default = createFields;

/***/ },
/* 238 */
/*!*********************************************!*\
  !*** ./~/redux-form/lib/ConnectedFields.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 176);
	
	var _createFieldProps2 = __webpack_require__(/*! ./createFieldProps */ 230);
	
	var _createFieldProps3 = _interopRequireDefault(_createFieldProps2);
	
	var _plain = __webpack_require__(/*! ./structure/plain */ 66);
	
	var _plain2 = _interopRequireDefault(_plain);
	
	var _onChangeValue = __webpack_require__(/*! ./events/onChangeValue */ 231);
	
	var _onChangeValue2 = _interopRequireDefault(_onChangeValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propsToNotUpdateFor = ['_reduxForm'];
	
	var createConnectedFields = function createConnectedFields(_ref) {
	  var deepEqual = _ref.deepEqual,
	      getIn = _ref.getIn,
	      toJS = _ref.toJS,
	      size = _ref.size;
	
	
	  var getSyncError = function getSyncError(syncErrors, name) {
	    // Because the error for this field might not be at a level in the error structure where
	    // it can be set directly, it might need to be unwrapped from the _error property
	    return _plain2.default.getIn(syncErrors, name + '._error') || _plain2.default.getIn(syncErrors, name);
	  };
	
	  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
	    var warning = getIn(syncWarnings, name);
	    // Because the warning for this field might not be at a level in the warning structure where
	    // it can be set directly, it might need to be unwrapped from the _warning property
	    return warning && warning._warning ? warning._warning : warning;
	  };
	
	  var ConnectedFields = function (_Component) {
	    _inherits(ConnectedFields, _Component);
	
	    function ConnectedFields(props) {
	      _classCallCheck(this, ConnectedFields);
	
	      var _this = _possibleConstructorReturn(this, (ConnectedFields.__proto__ || Object.getPrototypeOf(ConnectedFields)).call(this, props));
	
	      _this.handleChange = _this.handleChange.bind(_this);
	      _this.handleFocus = _this.handleFocus.bind(_this);
	      _this.handleBlur = _this.handleBlur.bind(_this);
	
	      _this.onChangeFns = props.names.reduce(function (acc, name) {
	        acc[name] = function (event) {
	          return _this.handleChange(name, event);
	        };
	        return acc;
	      }, {});
	
	      _this.onFocusFns = props.names.reduce(function (acc, name) {
	        acc[name] = function () {
	          return _this.handleFocus(name);
	        };
	        return acc;
	      }, {});
	
	      _this.onBlurFns = props.names.reduce(function (acc, name) {
	        acc[name] = function (event) {
	          return _this.handleBlur(name, event);
	        };
	        return acc;
	      }, {});
	      return _this;
	    }
	
	    _createClass(ConnectedFields, [{
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        var _this2 = this;
	
	        if (this.props.names !== nextProps.names && (size(this.props.names) !== size(nextProps.names) || nextProps.names.some(function (nextName) {
	          return !_this2.props._fields[nextName];
	        }))) {
	
	          // names is changed. The cached event handlers need to be updated
	          this.onChangeFns = nextProps.names.reduce(function (acc, name) {
	            acc[name] = function (event) {
	              return _this2.handleChange(name, event);
	            };
	            return acc;
	          }, {});
	
	          this.onFocusFns = nextProps.names.reduce(function (acc, name) {
	            acc[name] = function () {
	              return _this2.handleFocus(name);
	            };
	            return acc;
	          }, {});
	
	          this.onBlurFns = nextProps.names.reduce(function (acc, name) {
	            acc[name] = function (event) {
	              return _this2.handleBlur(name, event);
	            };
	            return acc;
	          }, {});
	        }
	      }
	    }, {
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps) {
	        var _this3 = this;
	
	        var nextPropsKeys = Object.keys(nextProps);
	        var thisPropsKeys = Object.keys(this.props);
	        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
	          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
	        });
	      }
	    }, {
	      key: 'isDirty',
	      value: function isDirty() {
	        var _fields = this.props._fields;
	
	        return Object.keys(_fields).some(function (name) {
	          return _fields[name].dirty;
	        });
	      }
	    }, {
	      key: 'getValues',
	      value: function getValues() {
	        var _fields = this.props._fields;
	
	        return Object.keys(_fields).reduce(function (accumulator, name) {
	          return _plain2.default.setIn(accumulator, name, _fields[name].value);
	        }, {});
	      }
	    }, {
	      key: 'getRenderedComponent',
	      value: function getRenderedComponent() {
	        return this.refs.renderedComponent;
	      }
	    }, {
	      key: 'handleChange',
	      value: function handleChange(name, event) {
	        var _props = this.props,
	            dispatch = _props.dispatch,
	            parse = _props.parse,
	            normalize = _props.normalize,
	            _reduxForm = _props._reduxForm;
	
	        var value = (0, _onChangeValue2.default)(event, { name: name, parse: parse, normalize: normalize });
	
	        dispatch(_reduxForm.change(name, value));
	      }
	    }, {
	      key: 'handleFocus',
	      value: function handleFocus(name) {
	        var _props2 = this.props,
	            dispatch = _props2.dispatch,
	            _reduxForm = _props2._reduxForm;
	
	        dispatch(_reduxForm.focus(name));
	      }
	    }, {
	      key: 'handleBlur',
	      value: function handleBlur(name, event) {
	        var _props3 = this.props,
	            dispatch = _props3.dispatch,
	            parse = _props3.parse,
	            normalize = _props3.normalize,
	            _reduxForm = _props3._reduxForm;
	
	        var value = (0, _onChangeValue2.default)(event, { name: name, parse: parse, normalize: normalize });
	
	        // dispatch blur action
	        dispatch(_reduxForm.blur(name, value));
	
	        // call post-blur callback
	        if (_reduxForm.asyncValidate) {
	          _reduxForm.asyncValidate(name, value);
	        }
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this4 = this;
	
	        var _props4 = this.props,
	            component = _props4.component,
	            withRef = _props4.withRef,
	            _fields = _props4._fields,
	            _reduxForm = _props4._reduxForm,
	            rest = _objectWithoutProperties(_props4, ['component', 'withRef', '_fields', '_reduxForm']);
	
	        var sectionPrefix = _reduxForm.sectionPrefix;
	
	        var _Object$keys$reduce = Object.keys(_fields).reduce(function (accumulator, name) {
	          var connectedProps = _fields[name];
	
	          var _createFieldProps = (0, _createFieldProps3.default)({ getIn: getIn, toJS: toJS }, name, _extends({}, connectedProps, rest, {
	            onBlur: _this4.onBlurFns[name],
	            onChange: _this4.onChangeFns[name],
	            onFocus: _this4.onFocusFns[name]
	          })),
	              custom = _createFieldProps.custom,
	              fieldProps = _objectWithoutProperties(_createFieldProps, ['custom']);
	
	          accumulator.custom = custom;
	          var fieldName = sectionPrefix ? name.replace(sectionPrefix + '.', '') : name;
	          return _plain2.default.setIn(accumulator, fieldName, fieldProps);
	        }, {}),
	            custom = _Object$keys$reduce.custom,
	            props = _objectWithoutProperties(_Object$keys$reduce, ['custom']);
	
	        if (withRef) {
	          props.ref = 'renderedComponent';
	        }
	
	        return (0, _react.createElement)(component, _extends({}, props, custom));
	      }
	    }]);
	
	    return ConnectedFields;
	  }(_react.Component);
	
	  ConnectedFields.propTypes = {
	    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	    _fields: _react.PropTypes.object.isRequired,
	    props: _react.PropTypes.object
	  };
	
	  var connector = (0, _reactRedux.connect)(function (state, ownProps) {
	    var names = ownProps.names,
	        _ownProps$_reduxForm = ownProps._reduxForm,
	        initialValues = _ownProps$_reduxForm.initialValues,
	        getFormState = _ownProps$_reduxForm.getFormState;
	
	    var formState = getFormState(state);
	    return {
	      _fields: names.reduce(function (accumulator, name) {
	        var initialState = getIn(formState, 'initial.' + name);
	        var initial = initialState !== undefined ? initialState : initialValues && getIn(initialValues, name);
	        var value = getIn(formState, 'values.' + name);
	        var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
	        var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
	        var submitting = getIn(formState, 'submitting');
	        var pristine = value === initial;
	        accumulator[name] = {
	          asyncError: getIn(formState, 'asyncErrors.' + name),
	          asyncValidating: getIn(formState, 'asyncValidating') === name,
	          dirty: !pristine,
	          pristine: pristine,
	          state: getIn(formState, 'fields.' + name),
	          submitError: getIn(formState, 'submitErrors.' + name),
	          submitFailed: getIn(formState, 'submitFailed'),
	          submitting: submitting,
	          syncError: syncError,
	          syncWarning: syncWarning,
	          value: value,
	          _value: ownProps.value // save value passed in (for checkboxes)
	        };
	        return accumulator;
	      }, {})
	    };
	  }, undefined, undefined, { withRef: true });
	  return connector(ConnectedFields);
	};
	
	exports.default = createConnectedFields;

/***/ },
/* 239 */
/*!****************************************!*\
  !*** ./~/redux-form/lib/FieldArray.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _invariant = __webpack_require__(/*! invariant */ 182);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ConnectedFieldArray = __webpack_require__(/*! ./ConnectedFieldArray */ 240);
	
	var _ConnectedFieldArray2 = _interopRequireDefault(_ConnectedFieldArray);
	
	var _prefixName = __webpack_require__(/*! ./util/prefixName */ 236);
	
	var _prefixName2 = _interopRequireDefault(_prefixName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var toArray = function toArray(value) {
	  return Array.isArray(value) ? value : [value];
	};
	
	var wrapError = function wrapError(fn, key) {
	  return fn && function () {
	    var validators = toArray(fn);
	    for (var i = 0; i < validators.length; i++) {
	      var result = validators[i].apply(validators, arguments);
	      if (result) {
	        return _defineProperty({}, key, result);
	      }
	    }
	  };
	};
	
	var createFieldArray = function createFieldArray(_ref2) {
	  var deepEqual = _ref2.deepEqual,
	      getIn = _ref2.getIn,
	      size = _ref2.size;
	
	
	  var ConnectedFieldArray = (0, _ConnectedFieldArray2.default)({ deepEqual: deepEqual, getIn: getIn, size: size });
	
	  var FieldArray = function (_Component) {
	    _inherits(FieldArray, _Component);
	
	    function FieldArray(props, context) {
	      _classCallCheck(this, FieldArray);
	
	      var _this = _possibleConstructorReturn(this, (FieldArray.__proto__ || Object.getPrototypeOf(FieldArray)).call(this, props, context));
	
	      if (!context._reduxForm) {
	        throw new Error('FieldArray must be inside a component decorated with reduxForm()');
	      }
	      return _this;
	    }
	
	    _createClass(FieldArray, [{
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        var _this2 = this;
	
	        this.context._reduxForm.register(this.name, 'FieldArray', function () {
	          return wrapError(_this2.props.validate, '_error');
	        }, function () {
	          return wrapError(_this2.props.warn, '_warning');
	        });
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (this.props.name !== nextProps.name) {
	          // unregister old name
	          this.context._reduxForm.unregister(this.name);
	          // register new name
	          this.context._reduxForm.register((0, _prefixName2.default)(this.context, nextProps.name), 'FieldArray');
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.context._reduxForm.unregister(this.name);
	      }
	    }, {
	      key: 'getRenderedComponent',
	      value: function getRenderedComponent() {
	        (0, _invariant2.default)(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to FieldArray');
	        return this.refs.connected.getWrappedInstance().getRenderedComponent();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return (0, _react.createElement)(ConnectedFieldArray, _extends({}, this.props, {
	          name: this.name,
	          syncError: this.syncError,
	          syncWarning: this.syncWarning,
	          _reduxForm: this.context._reduxForm,
	          ref: 'connected'
	        }));
	      }
	    }, {
	      key: 'name',
	      get: function get() {
	        return (0, _prefixName2.default)(this.context, this.props.name);
	      }
	    }, {
	      key: 'dirty',
	      get: function get() {
	        return this.refs.connected.getWrappedInstance().dirty;
	      }
	    }, {
	      key: 'pristine',
	      get: function get() {
	        return this.refs.connected.getWrappedInstance().pristine;
	      }
	    }, {
	      key: 'value',
	      get: function get() {
	        return this.refs.connected.getWrappedInstance().value;
	      }
	    }]);
	
	    return FieldArray;
	  }(_react.Component);
	
	  FieldArray.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.func.isRequired,
	    props: _react.PropTypes.object,
	    validate: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.func)]),
	    warn: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.func)]),
	    withRef: _react.PropTypes.bool
	  };
	  FieldArray.contextTypes = {
	    _reduxForm: _react.PropTypes.object
	  };
	
	  return FieldArray;
	};
	
	exports.default = createFieldArray;

/***/ },
/* 240 */
/*!*************************************************!*\
  !*** ./~/redux-form/lib/ConnectedFieldArray.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mapValues2 = __webpack_require__(/*! lodash/mapValues */ 156);
	
	var _mapValues3 = _interopRequireDefault(_mapValues2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 176);
	
	var _redux = __webpack_require__(/*! redux */ 187);
	
	var _createFieldArrayProps = __webpack_require__(/*! ./createFieldArrayProps */ 241);
	
	var _createFieldArrayProps2 = _interopRequireDefault(_createFieldArrayProps);
	
	var _plain = __webpack_require__(/*! ./structure/plain */ 66);
	
	var _plain2 = _interopRequireDefault(_plain);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propsToNotUpdateFor = ['_reduxForm', 'value'];
	
	var createConnectedFieldArray = function createConnectedFieldArray(_ref) {
	  var deepEqual = _ref.deepEqual,
	      getIn = _ref.getIn,
	      size = _ref.size;
	
	
	  var getSyncError = function getSyncError(syncErrors, name) {
	    // For an array, the error can _ONLY_ be under _error.
	    // This is why this getSyncError is not the same as the
	    // one in Field.
	    return _plain2.default.getIn(syncErrors, name + '._error');
	  };
	
	  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
	    // For an array, the warning can _ONLY_ be under _warning.
	    // This is why this getSyncError is not the same as the
	    // one in Field.
	    return getIn(syncWarnings, name + '._warning');
	  };
	
	  var ConnectedFieldArray = function (_Component) {
	    _inherits(ConnectedFieldArray, _Component);
	
	    function ConnectedFieldArray() {
	      _classCallCheck(this, ConnectedFieldArray);
	
	      var _this = _possibleConstructorReturn(this, (ConnectedFieldArray.__proto__ || Object.getPrototypeOf(ConnectedFieldArray)).call(this));
	
	      _this.getValue = _this.getValue.bind(_this);
	      return _this;
	    }
	
	    _createClass(ConnectedFieldArray, [{
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps) {
	        var _this2 = this;
	
	        // Update if the elements of the value array was updated.
	        var thisValue = this.props.value;
	        var nextValue = nextProps.value;
	
	        if (thisValue && nextValue) {
	          if (thisValue.length !== nextValue.length || thisValue.every(function (val) {
	            return nextValue.some(function (next) {
	              return deepEqual(val, next);
	            });
	          })) {
	            return true;
	          }
	        }
	
	        var nextPropsKeys = Object.keys(nextProps);
	        var thisPropsKeys = Object.keys(this.props);
	        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
	          // useful to debug rerenders
	          // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
	          //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
	          // }
	          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
	        });
	      }
	    }, {
	      key: 'getRenderedComponent',
	      value: function getRenderedComponent() {
	        return this.refs.renderedComponent;
	      }
	    }, {
	      key: 'getValue',
	      value: function getValue(index) {
	        return this.props.value && getIn(this.props.value, index);
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _props = this.props,
	            component = _props.component,
	            withRef = _props.withRef,
	            name = _props.name,
	            _reduxForm = _props._reduxForm,
	            validate = _props.validate,
	            warn = _props.warn,
	            rest = _objectWithoutProperties(_props, ['component', 'withRef', 'name', '_reduxForm', 'validate', 'warn']);
	
	        var props = (0, _createFieldArrayProps2.default)(getIn, name, _reduxForm.form, _reduxForm.sectionPrefix, this.getValue, rest);
	        if (withRef) {
	          props.ref = 'renderedComponent';
	        }
	        return (0, _react.createElement)(component, props);
	      }
	    }, {
	      key: 'dirty',
	      get: function get() {
	        return this.props.dirty;
	      }
	    }, {
	      key: 'pristine',
	      get: function get() {
	        return this.props.pristine;
	      }
	    }, {
	      key: 'value',
	      get: function get() {
	        return this.props.value;
	      }
	    }]);
	
	    return ConnectedFieldArray;
	  }(_react.Component);
	
	  ConnectedFieldArray.propTypes = {
	    component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]).isRequired,
	    props: _react.PropTypes.object
	  };
	
	  ConnectedFieldArray.contextTypes = {
	    _reduxForm: _react.PropTypes.object
	  };
	
	  var connector = (0, _reactRedux.connect)(function (state, ownProps) {
	    var name = ownProps.name,
	        _ownProps$_reduxForm = ownProps._reduxForm,
	        initialValues = _ownProps$_reduxForm.initialValues,
	        getFormState = _ownProps$_reduxForm.getFormState;
	
	    var formState = getFormState(state);
	    var initial = getIn(formState, 'initial.' + name) || initialValues && getIn(initialValues, name);
	    var value = getIn(formState, 'values.' + name);
	    var submitting = getIn(formState, 'submitting');
	    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
	    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
	    var pristine = deepEqual(value, initial);
	    return {
	      asyncError: getIn(formState, 'asyncErrors.' + name + '._error'),
	      dirty: !pristine,
	      pristine: pristine,
	      state: getIn(formState, 'fields.' + name),
	      submitError: getIn(formState, 'submitErrors.' + name + '._error'),
	      submitFailed: getIn(formState, 'submitFailed'),
	      submitting: submitting,
	      syncError: syncError,
	      syncWarning: syncWarning,
	      value: value,
	      length: size(value)
	    };
	  }, function (dispatch, ownProps) {
	    var name = ownProps.name,
	        _reduxForm = ownProps._reduxForm;
	    var arrayInsert = _reduxForm.arrayInsert,
	        arrayMove = _reduxForm.arrayMove,
	        arrayPop = _reduxForm.arrayPop,
	        arrayPush = _reduxForm.arrayPush,
	        arrayRemove = _reduxForm.arrayRemove,
	        arrayRemoveAll = _reduxForm.arrayRemoveAll,
	        arrayShift = _reduxForm.arrayShift,
	        arraySplice = _reduxForm.arraySplice,
	        arraySwap = _reduxForm.arraySwap,
	        arrayUnshift = _reduxForm.arrayUnshift;
	
	    return (0, _mapValues3.default)({
	      arrayInsert: arrayInsert,
	      arrayMove: arrayMove,
	      arrayPop: arrayPop,
	      arrayPush: arrayPush,
	      arrayRemove: arrayRemove,
	      arrayRemoveAll: arrayRemoveAll,
	      arrayShift: arrayShift,
	      arraySplice: arraySplice,
	      arraySwap: arraySwap,
	      arrayUnshift: arrayUnshift
	    }, function (actionCreator) {
	      return (0, _redux.bindActionCreators)(actionCreator.bind(null, name), dispatch);
	    });
	  }, undefined, { withRef: true });
	  return connector(ConnectedFieldArray);
	};
	
	exports.default = createConnectedFieldArray;

/***/ },
/* 241 */
/*!***************************************************!*\
  !*** ./~/redux-form/lib/createFieldArrayProps.js ***!
  \***************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var createFieldArrayProps = function createFieldArrayProps(getIn, name, form, sectionPrefix, getValue, _ref) {
	  var arrayInsert = _ref.arrayInsert,
	      arrayMove = _ref.arrayMove,
	      arrayPop = _ref.arrayPop,
	      arrayPush = _ref.arrayPush,
	      arrayRemove = _ref.arrayRemove,
	      arrayRemoveAll = _ref.arrayRemoveAll,
	      arrayShift = _ref.arrayShift,
	      arraySplice = _ref.arraySplice,
	      arraySwap = _ref.arraySwap,
	      arrayUnshift = _ref.arrayUnshift,
	      asyncError = _ref.asyncError,
	      dirty = _ref.dirty,
	      length = _ref.length,
	      pristine = _ref.pristine,
	      submitError = _ref.submitError,
	      state = _ref.state,
	      submitFailed = _ref.submitFailed,
	      submitting = _ref.submitting,
	      syncError = _ref.syncError,
	      syncWarning = _ref.syncWarning,
	      value = _ref.value,
	      props = _ref.props,
	      rest = _objectWithoutProperties(_ref, ['arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'asyncError', 'dirty', 'length', 'pristine', 'submitError', 'state', 'submitFailed', 'submitting', 'syncError', 'syncWarning', 'value', 'props']);
	
	  var error = syncError || asyncError || submitError;
	  var warning = syncWarning;
	  var fieldName = sectionPrefix ? name.replace(sectionPrefix + '.', '') : name;
	  var finalProps = _extends({
	    fields: {
	      _isFieldArray: true,
	      forEach: function forEach(callback) {
	        return (value || []).forEach(function (item, index) {
	          return callback(fieldName + '[' + index + ']', index, finalProps.fields);
	        });
	      },
	      get: getValue,
	      getAll: function getAll() {
	        return value;
	      },
	      insert: arrayInsert,
	      length: length,
	      map: function map(callback) {
	        return (value || []).map(function (item, index) {
	          return callback(fieldName + '[' + index + ']', index, finalProps.fields);
	        });
	      },
	      move: arrayMove,
	      name: name,
	      pop: function pop() {
	        arrayPop();
	        return getIn(value, length - 1);
	      },
	      push: arrayPush,
	      reduce: function reduce(callback, initial) {
	        return (value || []).reduce(function (accumulator, item, index) {
	          return callback(accumulator, fieldName + '[' + index + ']', index, finalProps.fields);
	        }, initial);
	      },
	      remove: arrayRemove,
	      removeAll: arrayRemoveAll,
	      shift: function shift() {
	        arrayShift();
	        return getIn(value, 0);
	      },
	      swap: arraySwap,
	      unshift: arrayUnshift
	    },
	    meta: {
	      dirty: dirty,
	      error: error,
	      form: form,
	      warning: warning,
	      invalid: !!error,
	      pristine: pristine,
	      submitting: submitting,
	      submitFailed: submitFailed,
	      touched: !!(state && getIn(state, 'touched')),
	      valid: !error
	    }
	  }, props, rest);
	  return finalProps;
	};
	
	exports.default = createFieldArrayProps;

/***/ },
/* 242 */
/*!***********************************************!*\
  !*** ./~/redux-form/lib/formValueSelector.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _invariant = __webpack_require__(/*! invariant */ 182);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _plain = __webpack_require__(/*! ./structure/plain */ 66);
	
	var _plain2 = _interopRequireDefault(_plain);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createFormValueSelector = function createFormValueSelector(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	
	    (0, _invariant2.default)(form, 'Form value must be specified');
	    return function (state) {
	      for (var _len = arguments.length, fields = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        fields[_key - 1] = arguments[_key];
	      }
	
	      (0, _invariant2.default)(fields.length, 'No fields specified');
	      return fields.length === 1 ?
	      // only selecting one field, so return its value
	      getIn(getFormState(state), form + '.values.' + fields[0]) :
	      // selecting many fields, so return an object of field values
	      fields.reduce(function (accumulator, field) {
	        var value = getIn(getFormState(state), form + '.values.' + field);
	        return value === undefined ? accumulator : _plain2.default.setIn(accumulator, field, value);
	      }, {});
	    };
	  };
	};
	
	exports.default = createFormValueSelector;

/***/ },
/* 243 */
/*!************************************!*\
  !*** ./~/redux-form/lib/values.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 176);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var createValues = function createValues(_ref) {
	  var getIn = _ref.getIn;
	  return function (config) {
	    var _prop$getFormState$co = _extends({
	      prop: 'values',
	      getFormState: function getFormState(state) {
	        return getIn(state, 'form');
	      }
	    }, config),
	        form = _prop$getFormState$co.form,
	        prop = _prop$getFormState$co.prop,
	        getFormState = _prop$getFormState$co.getFormState;
	
	    return (0, _reactRedux.connect)(function (state) {
	      return _defineProperty({}, prop, getIn(getFormState(state), form + '.values'));
	    }, function () {
	      return {};
	    } // ignore dispatch
	    );
	  };
	};
	
	exports.default = createValues;

/***/ },
/* 244 */
/*!****************************************************!*\
  !*** ./~/redux-form/lib/selectors/getFormNames.js ***!
  \****************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createGetFormNames = function createGetFormNames(_ref) {
	  var getIn = _ref.getIn,
	      keys = _ref.keys;
	  return function () {
	    var getFormState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      return keys(getFormState(state));
	    };
	  };
	};
	
	exports.default = createGetFormNames;

/***/ },
/* 245 */
/*!*****************************************************!*\
  !*** ./~/redux-form/lib/selectors/getFormValues.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createGetFormValues = function createGetFormValues(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      return getIn(getFormState(state), form + '.values');
	    };
	  };
	};
	
	exports.default = createGetFormValues;

/***/ },
/* 246 */
/*!************************************************************!*\
  !*** ./~/redux-form/lib/selectors/getFormInitialValues.js ***!
  \************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createGetFormInitialValues = function createGetFormInitialValues(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      return getIn(getFormState(state), form + '.initial');
	    };
	  };
	};
	
	exports.default = createGetFormInitialValues;

/***/ },
/* 247 */
/*!*********************************************************!*\
  !*** ./~/redux-form/lib/selectors/getFormSyncErrors.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createGetFormSyncErrors = function createGetFormSyncErrors(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      return getIn(getFormState(state), form + '.syncErrors');
	    };
	  };
	};
	
	exports.default = createGetFormSyncErrors;

/***/ },
/* 248 */
/*!**********************************************************!*\
  !*** ./~/redux-form/lib/selectors/getFormAsyncErrors.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createGetFormAsyncErrors = function createGetFormAsyncErrors(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      return getIn(getFormState(state), form + '.asyncErrors');
	    };
	  };
	};
	
	exports.default = createGetFormAsyncErrors;

/***/ },
/* 249 */
/*!***********************************************************!*\
  !*** ./~/redux-form/lib/selectors/getFormSyncWarnings.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createGetFormSyncWarnings = function createGetFormSyncWarnings(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      return getIn(getFormState(state), form + '.syncWarnings');
	    };
	  };
	};
	
	exports.default = createGetFormSyncWarnings;

/***/ },
/* 250 */
/*!***********************************************************!*\
  !*** ./~/redux-form/lib/selectors/getFormSubmitErrors.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createGetFormSubmitErrors = function createGetFormSubmitErrors(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      return getIn(getFormState(state), form + '.submitErrors');
	    };
	  };
	};
	
	exports.default = createGetFormSubmitErrors;

/***/ },
/* 251 */
/*!***********************************************!*\
  !*** ./~/redux-form/lib/selectors/isDirty.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isPristine = __webpack_require__(/*! ./isPristine */ 252);
	
	var _isPristine2 = _interopRequireDefault(_isPristine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createIsDirty = function createIsDirty(structure) {
	  return function (form, getFormState) {
	    var isPristine = (0, _isPristine2.default)(structure)(form, getFormState);
	    return function (state) {
	      return !isPristine(state);
	    };
	  };
	};
	
	exports.default = createIsDirty;

/***/ },
/* 252 */
/*!**************************************************!*\
  !*** ./~/redux-form/lib/selectors/isPristine.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createIsPristine = function createIsPristine(_ref) {
	  var deepEqual = _ref.deepEqual,
	      empty = _ref.empty,
	      getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      var formState = getFormState(state);
	      var initial = getIn(formState, form + '.initial') || empty;
	      var values = getIn(formState, form + '.values') || initial;
	      return deepEqual(initial, values);
	    };
	  };
	};
	
	exports.default = createIsPristine;

/***/ },
/* 253 */
/*!*************************************************!*\
  !*** ./~/redux-form/lib/selectors/isInvalid.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isValid = __webpack_require__(/*! ./isValid */ 226);
	
	var _isValid2 = _interopRequireDefault(_isValid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createIsInvalid = function createIsInvalid(structure) {
	  return function (form, getFormState) {
	    var isValid = (0, _isValid2.default)(structure)(form, getFormState);
	    return function (state) {
	      return !isValid(state);
	    };
	  };
	};
	
	exports.default = createIsInvalid;

/***/ },
/* 254 */
/*!****************************************************!*\
  !*** ./~/redux-form/lib/selectors/isSubmitting.js ***!
  \****************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createIsSubmitting = function createIsSubmitting(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      var formState = getFormState(state);
	      return getIn(formState, form + '.submitting') || false;
	    };
	  };
	};
	
	exports.default = createIsSubmitting;

/***/ },
/* 255 */
/*!**********************************************************!*\
  !*** ./~/redux-form/lib/selectors/hasSubmitSucceeded.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createHasSubmitSucceeded = function createHasSubmitSucceeded(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      var formState = getFormState(state);
	      return getIn(formState, form + '.submitSucceeded') || false;
	    };
	  };
	};
	
	exports.default = createHasSubmitSucceeded;

/***/ },
/* 256 */
/*!*******************************************************!*\
  !*** ./~/redux-form/lib/selectors/hasSubmitFailed.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createHasSubmitFailed = function createHasSubmitFailed(_ref) {
	  var getIn = _ref.getIn;
	  return function (form) {
	    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
	      return getIn(state, 'form');
	    };
	    return function (state) {
	      var formState = getFormState(state);
	      return getIn(formState, form + '.submitFailed') || false;
	    };
	  };
	};
	
	exports.default = createHasSubmitFailed;

/***/ },
/* 257 */
/*!**********************************!*\
  !*** ./~/redux-form/lib/Form.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Form = function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form(props, context) {
	    _classCallCheck(this, Form);
	
	    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props, context));
	
	    if (!context._reduxForm) {
	      throw new Error('Form must be inside a component decorated with reduxForm()');
	    }
	    return _this;
	  }
	
	  _createClass(Form, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.context._reduxForm.registerInnerOnSubmit(this.props.onSubmit);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('form', this.props);
	    }
	  }]);
	
	  return Form;
	}(_react.Component);
	
	Form.propTypes = {
	  onSubmit: _react.PropTypes.func.isRequired
	};
	Form.contextTypes = {
	  _reduxForm: _react.PropTypes.object
	};
	
	exports.default = Form;

/***/ },
/* 258 */
/*!*****************************************!*\
  !*** ./~/redux-form/lib/FormSection.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _prefixName = __webpack_require__(/*! ./util/prefixName */ 236);
	
	var _prefixName2 = _interopRequireDefault(_prefixName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormSection = function (_Component) {
	  _inherits(FormSection, _Component);
	
	  function FormSection(props, context) {
	    _classCallCheck(this, FormSection);
	
	    var _this = _possibleConstructorReturn(this, (FormSection.__proto__ || Object.getPrototypeOf(FormSection)).call(this, props, context));
	
	    if (!context._reduxForm) {
	      throw new Error('FormSection must be inside a component decorated with reduxForm()');
	    }
	    return _this;
	  }
	
	  _createClass(FormSection, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var context = this.context,
	          name = this.props.name;
	
	      return {
	        _reduxForm: _extends({}, context._reduxForm, {
	          sectionPrefix: (0, _prefixName2.default)(context, name)
	        })
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          name = _props.name,
	          component = _props.component,
	          rest = _objectWithoutProperties(_props, ['children', 'name', 'component']);
	
	      if (_react2.default.isValidElement(children)) {
	        return children;
	      }
	
	      return (0, _react.createElement)(component, _extends({}, rest, {
	        children: children
	      }));
	    }
	  }]);
	
	  return FormSection;
	}(_react.Component);
	
	FormSection.propTypes = {
	  name: _react.PropTypes.string.isRequired,
	  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string])
	};
	
	FormSection.defaultProps = {
	  component: 'div'
	};
	
	FormSection.childContextTypes = {
	  _reduxForm: _react.PropTypes.object.isRequired
	};
	
	FormSection.contextTypes = {
	  _reduxForm: _react.PropTypes.object
	};
	
	exports.default = FormSection;

/***/ },
/* 259 */
/*!***************************************!*\
  !*** ./~/redux-form/lib/propTypes.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var any = _react.PropTypes.any,
	    bool = _react.PropTypes.bool,
	    func = _react.PropTypes.func,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string,
	    oneOfType = _react.PropTypes.oneOfType,
	    object = _react.PropTypes.object;
	
	
	var propTypes = {
	  // State:
	  anyTouched: bool.isRequired, // true if any of the fields have been marked as touched
	  asyncValidating: oneOfType([bool, string]).isRequired, // true if async validation is running, a string if a field triggered async validation
	  dirty: bool.isRequired, // true if any values are different from initialValues
	  error: any, // form-wide error from '_error' key in validation result
	  form: string.isRequired, // the name of the form
	  invalid: bool.isRequired, // true if there are any validation errors
	  initialized: bool.isRequired, // true if the form has been initialized
	  initialValues: object, // the initialValues object passed to reduxForm
	  pristine: bool.isRequired, // true if the values are the same as initialValues
	  pure: bool.isRequired, // if true, implements shouldComponentUpdate
	  submitting: bool.isRequired, // true if the form is in the process of being submitted
	  submitFailed: bool.isRequired, // true if the form was submitted and failed for any reason
	  submitSucceeded: bool.isRequired, // true if the form was successfully submitted
	  valid: bool.isRequired, // true if there are no validation errors
	  warning: any, // form-wide warning from '_warning' key in validation result
	  // Actions:
	  array: shape({
	    insert: func.isRequired, // function to insert a value into an array field
	    move: func.isRequired, // function to move a value within an array field
	    pop: func.isRequired, // function to pop a value off of an array field
	    push: func.isRequired, // function to push a value onto an array field
	    remove: func.isRequired, // function to remove a value from an array field
	    removeAll: func.isRequired, // function to remove all the values from an array field
	    shift: func.isRequired, // function to shift a value out of an array field
	    splice: func.isRequired, // function to splice a value into an array field
	    swap: func.isRequired, // function to swap values in an array field
	    unshift: func.isRequired // function to unshift a value into an array field
	  }),
	  asyncValidate: func.isRequired, // function to trigger async validation
	  autofill: func.isRequired, // action to set a value of a field and mark it as autofilled
	  blur: func.isRequired, // action to mark a field as blurred
	  change: func.isRequired, // action to change the value of a field
	  clearAsyncError: func.isRequired, // action to clear the async error of a field
	  destroy: func.isRequired, // action to destroy the form's data in Redux
	  dispatch: func.isRequired, // the Redux dispatch action
	  handleSubmit: func.isRequired, // function to submit the form
	  initialize: func.isRequired, // action to initialize form data
	  reset: func.isRequired, // action to reset the form data to previously initialized values
	  touch: func.isRequired, // action to mark fields as touched
	  submit: func.isRequired, // action to trigger a submission of the specified form
	  untouch: func.isRequired, // action to mark fields as untouched
	
	  // triggerSubmit
	  triggerSubmit: bool, // if true, submits the form on componentWillReceiveProps
	  clearSubmit: func.isRequired // called before a triggered submit, by default clears triggerSubmit
	};
	
	exports.default = propTypes;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-comments.js.map