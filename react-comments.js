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
	var content = __webpack_require__(/*! !../~/css-loader!../~/sass-loader?outputStyle=expanded&includePaths[]=/Users/romaindiegoni/Documents/Root/Projects/ruby/react-comments/bower_components&includePaths[]=/Users/romaindiegoni/Documents/Root/Projects/ruby/react-comments/node_modules!./comments.scss */ 7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../~/style-loader/addStyles.js */ 9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js?outputStyle=expanded&includePaths[]=/Users/romaindiegoni/Documents/Root/Projects/ruby/react-comments/bower_components&includePaths[]=/Users/romaindiegoni/Documents/Root/Projects/ruby/react-comments/node_modules!./comments.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js?outputStyle=expanded&includePaths[]=/Users/romaindiegoni/Documents/Root/Projects/ruby/react-comments/bower_components&includePaths[]=/Users/romaindiegoni/Documents/Root/Projects/ruby/react-comments/node_modules!./comments.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader?outputStyle=expanded&includePaths[]=/Users/romaindiegoni/Documents/Root/Projects/ruby/react-comments/bower_components&includePaths[]=/Users/romaindiegoni/Documents/Root/Projects/ruby/react-comments/node_modules!./lib/comments.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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

	"use strict";
	
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
	
	var CommentForm = function (_React$Component) {
	  _inherits(CommentForm, _React$Component);
	
	  function CommentForm(props) {
	    _classCallCheck(this, CommentForm);
	
	    var _this = _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).call(this, props));
	
	    _this.state = { comment: {} };
	    return _this;
	  }
	
	  _createClass(CommentForm, [{
	    key: "handleInputChange",
	    value: function handleInputChange(event) {
	
	      var state = this.state.comment;
	      state[event.target.name] = event.target.value;
	
	      this.setState({ comment: state });
	    }
	  }, {
	    key: "handleSubmit",
	    value: function handleSubmit(event) {
	      event.preventDefault();
	
	      console.log(this.state);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          handleSubmit = _props.handleSubmit,
	          submitting = _props.submitting;
	
	      return _react2.default.createElement(
	        "form",
	        { method: "post", onSubmit: function onSubmit(e) {
	            return _this2.handleSubmit(e);
	          } },
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "label",
	            null,
	            "Content"
	          ),
	          _react2.default.createElement("textarea", { id: "content",
	            name: "content",
	            type: "text",
	            onChange: function onChange(e) {
	              return _this2.handleInputChange(e);
	            } })
	        ),
	        _react2.default.createElement("input", { type: "submit", value: "Create" })
	      );
	    }
	  }]);
	
	  return CommentForm;
	}(_react2.default.Component);
	
	exports.default = CommentForm;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-comments.js.map