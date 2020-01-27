exports.ids = [0];
exports.modules = {

/***/ "./client/component/Feature/index.jsx":
/*!********************************************!*\
  !*** ./client/component/Feature/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./client/component/Feature/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);


/**
 *
 */

class Feature extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      name,
      desc,
      avatar
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "Feature"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "feature-item avatar-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: avatar,
      alt: "avatar"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "feature-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-title small-text normal-color"
    }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-desc mini-text gray-color"
    }, desc)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ "./client/component/Feature/style.less":
/*!*********************************************!*\
  !*** ./client/component/Feature/style.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/less-loader/dist/cjs.js??ref--6-3!./style.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./client/component/Feature/style.less");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./client/container/Home/action.js":
/*!*****************************************!*\
  !*** ./client/container/Home/action.js ***!
  \*****************************************/
/*! exports provided: fetch, pull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pull", function() { return pull; });
function fetch() {
  return {
    type: 'FETCH'
  };
}
function pull() {
  return {
    type: 'PULL'
  };
}

/***/ }),

/***/ "./client/container/Home/index.jsx":
/*!*****************************************!*\
  !*** ./client/container/Home/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Feature */ "./client/component/Feature/index.jsx");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ "./client/container/Home/action.js");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.less */ "./client/container/Home/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_5__);







class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const {
      hospitalName,
      hospitalIcons,
      address,
      phone,
      serves
    } = this.props.store;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "HomeContainer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "home-info-section normal-left-padding normal-right-padding"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hos-name medium-text normal-top-padding"
    }, hospitalName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hos-property"
    }, hospitalIcons && hospitalIcons.length && hospitalIcons.map((icon, id) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: id,
        className: "hos-icon mini-text"
      }, icon);
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hos-address smaller-top-padding"
    }, address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hos-link flex flex-wrap smaller-top-padding"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hos-phone-link link-btn mini-text",
      "data-tel": phone
    }, '电话'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hos-detail-link link-btn mini-text"
    }, '详情'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "serve-section"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "serve-name small-text normal-left-padding normal-top-padding normal-bottom-padding"
    }, "\u533B\u7597\u670D\u52A1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "serve-container"
    }, serves && serves.length && serves.map((serve, id) => {
      const {
        serveName,
        serveDesc,
        img
      } = serve;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: id,
        name: serveName,
        desc: serveDesc,
        avatar: img
      });
    }))));
  }

}

const mapStateToProps = state => {
  return state;
};

const mapActionToProps = dispatch => {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_action__WEBPACK_IMPORTED_MODULE_4__, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapActionToProps)(Home));

/***/ }),

/***/ "./client/container/Home/style.less":
/*!******************************************!*\
  !*** ./client/container/Home/style.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/less-loader/dist/cjs.js??ref--6-3!./style.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./client/container/Home/style.less");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./client/component/Feature/style.less":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--6-3!./client/component/Feature/style.less ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Feature {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.Feature .feature-item img {\n  width: 80%;\n}\n.Feature .avatar-item {\n  text-align: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./client/container/Home/style.less":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--6-3!./client/container/Home/style.less ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".HomeContainer .home-info-section {\n  background: url('http://39.100.135.194/static/cms/img/bgHead.jpeg') center no-repeat;\n  background-size: cover;\n  padding-bottom: 5%;\n  color: #fff;\n}\n.HomeContainer .hos-icon {\n  display: inline-block;\n  background-color: #5292fb;\n  color: #fff;\n  margin-right: 1%;\n  padding: 0 0.5%;\n  border-radius: 2px;\n}\n.HomeContainer .serve-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  padding: 0 2%;\n}\n.HomeContainer .serve-container .Feature {\n  width: 50%;\n  padding: 2% 0;\n}\n.HomeContainer .link-btn {\n  border: 1px solid #ffffff;\n  border-radius: 50px;\n  padding: 0 2%;\n  margin-right: 2%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=0.js.map