"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tree",{

/***/ "./components/molecules/Profile.tsx":
/*!******************************************!*\
  !*** ./components/molecules/Profile.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nquery Person($id: ID) {\\n  person(where: {id: $id}){\\n  \tname\\n    life\\n    birth\\n    death\\n    education\\n    workHistory\\n    spouse {\\n      id\\n      name\\n    }\\n    children {\\n      id\\n      name\\n    }\\n    siblings {\\n      id\\n      name\\n    }\\n    gallerySlug\\n    profileImage {\\n      width\\n      height\\n      url\\n    }\\n    overview\\n    militaryService\\n    residence\\n    relationship    \\n  }\\n}\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nvar PERSON_BIO_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nvar Profile = function(param) {\n    var id = param.id;\n    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;\n    _s();\n    var ref8 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(PERSON_BIO_QUERY, {\n        notifyOnNetworkStatusChange: true,\n        variables: {\n            id: id\n        }\n    }), loading = ref8.loading, error = ref8.error, data = ref8.data, fetchMore = ref8.fetchMore, networkStatus = ref8.networkStatus;\n    console.log({\n        data: data\n    });\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-60 flex flex-col justify-center items-center\",\n            children: \"cool loading icon!\"\n        }, void 0, false, {\n            fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col sm:flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: data === null || data === void 0 ? void 0 : (ref = data.person) === null || ref === void 0 ? void 0 : (ref1 = ref.profileImage) === null || ref1 === void 0 ? void 0 : ref1.url,\n                    alt: data === null || data === void 0 ? void 0 : (ref2 = data.person) === null || ref2 === void 0 ? void 0 : ref2.name,\n                    width: data === null || data === void 0 ? void 0 : (ref3 = data.person) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.profileImage) === null || ref4 === void 0 ? void 0 : ref4.width,\n                    height: data === null || data === void 0 ? void 0 : (ref5 = data.person) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.profileImage) === null || ref6 === void 0 ? void 0 : ref6.height\n                }, void 0, false, {\n                    fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-xl font-bold\",\n                    children: data === null || data === void 0 ? void 0 : (ref7 = data.person) === null || ref7 === void 0 ? void 0 : ref7.name\n                }, void 0, false, {\n                    fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this);\n};\n_s(Profile, \"mFEtHJ551DdfKMGceX+yK2BKkLk=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87O1FBQ2dERixvREFBUTs7O0FBRC9ERSxLQUFBQSxPQUFPO0FBb0NiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvUHJvZmlsZS50c3g/NjYzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG5jb25zdCBQRVJTT05fQklPX1FVRVJZID0gZ3FsYFxucXVlcnkgUGVyc29uKCRpZDogSUQpIHtcbiAgcGVyc29uKHdoZXJlOiB7aWQ6ICRpZH0pe1xuICBcdG5hbWVcbiAgICBsaWZlXG4gICAgYmlydGhcbiAgICBkZWF0aFxuICAgIGVkdWNhdGlvblxuICAgIHdvcmtIaXN0b3J5XG4gICAgc3BvdXNlIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICAgIGNoaWxkcmVuIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICAgIHNpYmxpbmdzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICAgIGdhbGxlcnlTbHVnXG4gICAgcHJvZmlsZUltYWdlIHtcbiAgICAgIHdpZHRoXG4gICAgICBoZWlnaHRcbiAgICAgIHVybFxuICAgIH1cbiAgICBvdmVydmlld1xuICAgIG1pbGl0YXJ5U2VydmljZVxuICAgIHJlc2lkZW5jZVxuICAgIHJlbGF0aW9uc2hpcCAgICBcbiAgfVxufVxuYFxuXG5cbmNvbnN0IFByb2ZpbGUgPSAoeyBpZCB9OiB7IGlkOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCBmZXRjaE1vcmUsIG5ldHdvcmtTdGF0dXMgfSA9IHVzZVF1ZXJ5KFxuICAgIFBFUlNPTl9CSU9fUVVFUlksXG4gICAge1xuICAgICAgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlOiB0cnVlLFxuICAgICAgdmFyaWFibGVzOiB7IGlkIH1cbiAgICB9XG4gICk7XG5cbiAgY29uc29sZS5sb2coeyBkYXRhIH0pXG4gIFxuICBpZihsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtNjAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgY29vbCBsb2FkaW5nIGljb24hXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvd1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgIHNyYz17ZGF0YT8ucGVyc29uPy5wcm9maWxlSW1hZ2U/LnVybH1cbiAgICAgICAgICAgYWx0PXtkYXRhPy5wZXJzb24/Lm5hbWV9XG4gICAgICAgICAgIHdpZHRoPXtkYXRhPy5wZXJzb24/LnByb2ZpbGVJbWFnZT8ud2lkdGh9XG4gICAgICAgICAgIGhlaWdodD17ZGF0YT8ucGVyc29uPy5wcm9maWxlSW1hZ2U/LmhlaWdodH1cbiAgICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e2RhdGE/LnBlcnNvbj8ubmFtZX08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJncWwiLCJ1c2VRdWVyeSIsIlBFUlNPTl9CSU9fUVVFUlkiLCJQcm9maWxlIiwiaWQiLCJkYXRhIiwibm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlIiwidmFyaWFibGVzIiwibG9hZGluZyIsImVycm9yIiwiZmV0Y2hNb3JlIiwibmV0d29ya1N0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJwZXJzb24iLCJwcm9maWxlSW1hZ2UiLCJ1cmwiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/Profile.tsx\n");

/***/ })

});