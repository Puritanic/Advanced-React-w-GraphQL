webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
var _jsxFileName = "/Users/v-darko.tasevski/Projects/sick-fits/client/components/Item.js";








var Item = function Item(_ref) {
  var item = _ref.item;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/item',
      query: {
        id: item.id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, item.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__["default"])(item.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, item.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttonList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: 'update',
      query: {
        id: item.id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Edit \u270F\uFE0F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Add to Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Delete")));
};

Item.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.24c27e9e7877c41b4e47.hot-update.js.map