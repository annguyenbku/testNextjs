webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.tsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/annguyen/Documents/testNextjs/components/Layout.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      showFooter = _ref.showFooter;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"0px\"),\n      headerHeight = _useState[0],\n      setHeaderHeight = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function mount() {\n    var header = document.getElementById('header');\n\n    if (header !== null) {\n      setHeaderHeight(\"\".concat(header.offsetHeight, \"px\"));\n    }\n  });\n  return __jsx(\"div\", {\n    id: \"wrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Open Pediatrics\"), __jsx(\"meta\", {\n    charSet: \"UTF-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"profile\",\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"format-detection\",\n    content: \"telephone-no\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"css/plugins.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"css/style.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })), __jsx(\"span\", {\n    className: \"menu-btn overlay\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \" \"), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"afterHeader\",\n    style: {\n      height: headerHeight\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }), children, showFooter && __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(Layout, \"S8Ie/zt8/6YIMzWu1/OngJfdAQc=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4PzZhOTMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJzaG93Rm9vdGVyIiwidXNlU3RhdGUiLCJoZWFkZXJIZWlnaHQiLCJzZXRIZWFkZXJIZWlnaHQiLCJ1c2VFZmZlY3QiLCJtb3VudCIsImhlYWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRIZWlnaHQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLElBQU1BLE1BQXNDLEdBQUcsU0FBekNBLE1BQXlDLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQztBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7O0FBQUEsa0JBQzFDQyxzREFBUSxDQUFDLEtBQUQsQ0FEa0M7QUFBQSxNQUMzRUMsWUFEMkU7QUFBQSxNQUM3REMsZUFENkQ7O0FBRWxGQyx5REFBUyxDQUFDLFNBQVNDLEtBQVQsR0FBaUI7QUFDekIsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjs7QUFDQSxRQUFJRixNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNuQkgscUJBQWUsV0FBSUcsTUFBTSxDQUFDRyxZQUFYLFFBQWY7QUFDRDtBQUNGLEdBTFEsQ0FBVDtBQU1BLFNBQ0U7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFvQixXQUFPLEVBQUMsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBTSxPQUFHLEVBQUMsU0FBVjtBQUFvQixRQUFJLEVBQUMsR0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMscUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQU0sUUFBSSxFQUFDLGtCQUFYO0FBQThCLFdBQU8sRUFBQyxjQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxpQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsZUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREYsRUFhRTtBQUFNLGFBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWJGLEVBY0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUFlRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQTZCLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUVSO0FBQVYsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLEVBZ0JHSCxRQWhCSCxFQWlCR0MsVUFBVSxJQUNULE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCSixDQURGO0FBdUJELENBL0JEOztHQUFNRixNOztLQUFBQSxNO0FBaUNTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGUsXG4gIHNob3dGb290ZXI6IGJvb2xlYW5cbn1cblxuY29uc3QgTGF5b3V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgc2hvd0Zvb3RlciB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbaGVhZGVySGVpZ2h0LCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlU3RhdGUoXCIwcHhcIik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaWYgKGhlYWRlciAhPT0gbnVsbCkge1xuICAgICAgc2V0SGVhZGVySGVpZ2h0KGAke2hlYWRlci5vZmZzZXRIZWlnaHR9cHhgKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9wZW4gUGVkaWF0cmljczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcm9maWxlXCIgaHJlZj1cIiNcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZm9ybWF0LWRldGVjdGlvblwiIGNvbnRlbnQ9XCJ0ZWxlcGhvbmUtbm9cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9wbHVnaW5zLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL3N0eWxlLmNzc1wiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnUtYnRuIG92ZXJsYXlcIj4gPC9zcGFuPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZnRlckhlYWRlclwiIHN0eWxlPXt7IGhlaWdodDogaGVhZGVySGVpZ2h0IH19PjwvZGl2PlxuICAgICAge2NoaWxkcmVufVxuICAgICAge3Nob3dGb290ZXIgJiYgKFxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ })

})