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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var public_images_image_not_found_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/images/image-not-found.png */ \"./public/images/image-not-found.png\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nquery Person($id: ID) {\\n  person(where: {id: $id}){\\n  \tname\\n    life\\n    birth\\n    death\\n    education\\n    workHistory\\n    spouse {\\n      id\\n      name\\n    }\\n    children {\\n      id\\n      name\\n    }\\n    siblings {\\n      id\\n      name\\n    }\\n    gallerySlug\\n    profileImage {\\n      width\\n      height\\n      url\\n    }\\n    overview\\n    militaryService\\n    residence\\n    relationship    \\n  }\\n}\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar PERSON_BIO_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject());\nvar Profile = function(param) {\n    var id1 = param.id;\n    var ref20, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16;\n    _s();\n    var ref17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"string\"), profileId = ref17[0], setProfileId = ref17[1];\n    var ref18 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(PERSON_BIO_QUERY, {\n        notifyOnNetworkStatusChange: true,\n        variables: {\n            id: 2\n        }\n    }), loading = ref18.loading, error = ref18.error, data = ref18.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (id1) {\n            setProfileId(id1);\n        }\n    }, [\n        id1\n    ]);\n    var handleNewProfileId = function(id) {\n        setProfileId(id);\n    };\n    console.log({\n        data: data\n    });\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-60 flex flex-col justify-center items-center\",\n            children: \"cool loading icon!\"\n        }, void 0, false, {\n            fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, _this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-60 flex flex-col justify-center items-center text-center\",\n            children: \"There was an error loading this profile!\"\n        }, void 0, false, {\n            fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col sm:flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-2 sm:mr-6\",\n                children: (data === null || data === void 0 ? void 0 : (ref20 = data.person) === null || ref20 === void 0 ? void 0 : ref20.profileImage) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: data === null || data === void 0 ? void 0 : (ref1 = data.person) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.profileImage) === null || ref2 === void 0 ? void 0 : ref2.url,\n                    alt: data === null || data === void 0 ? void 0 : (ref3 = data.person) === null || ref3 === void 0 ? void 0 : ref3.name,\n                    width: data === null || data === void 0 ? void 0 : (ref4 = data.person) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.profileImage) === null || ref5 === void 0 ? void 0 : ref5.width,\n                    height: data === null || data === void 0 ? void 0 : (ref6 = data.person) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.profileImage) === null || ref7 === void 0 ? void 0 : ref7.height\n                }, void 0, false, {\n                    fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: public_images_image_not_found_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"no image found\",\n                    width: 400,\n                    height: 400,\n                    layout: \"intrinsic\"\n                }, void 0, false, {\n                    fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-bold\",\n                        children: data === null || data === void 0 ? void 0 : (ref8 = data.person) === null || ref8 === void 0 ? void 0 : ref8.name\n                    }, void 0, false, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: data === null || data === void 0 ? void 0 : (ref9 = data.person) === null || ref9 === void 0 ? void 0 : ref9.life\n                    }, void 0, false, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"my-3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: data === null || data === void 0 ? void 0 : (ref10 = data.person) === null || ref10 === void 0 ? void 0 : ref10.overview\n                    }, void 0, false, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Birth: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 12\n                            }, _this),\n                            data === null || data === void 0 ? void 0 : (ref11 = data.person) === null || ref11 === void 0 ? void 0 : ref11.birth\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Death: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 12\n                            }, _this),\n                            data === null || data === void 0 ? void 0 : (ref12 = data.person) === null || ref12 === void 0 ? void 0 : ref12.death\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Education: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 12\n                            }, _this),\n                            data === null || data === void 0 ? void 0 : (ref13 = data.person) === null || ref13 === void 0 ? void 0 : ref13.education\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Work History: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 12\n                            }, _this),\n                            data === null || data === void 0 ? void 0 : (ref14 = data.person) === null || ref14 === void 0 ? void 0 : ref14.workHistory\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Spouse: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 12\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"underline\",\n                        onClick: function() {\n                            var ref, ref19;\n                            return handleNewProfileId(data === null || data === void 0 ? void 0 : (ref = data.person) === null || ref === void 0 ? void 0 : (ref19 = ref.spouse) === null || ref19 === void 0 ? void 0 : ref19.id);\n                        },\n                        children: data === null || data === void 0 ? void 0 : (ref15 = data.person) === null || ref15 === void 0 ? void 0 : (ref16 = ref15.spouse) === null || ref16 === void 0 ? void 0 : ref16.name\n                    }, void 0, false, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web/components/molecules/Profile.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this);\n};\n_s(Profile, \"MJ45+IusOyWxNCIfdTVPsY3ivYI=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBYzs7Ozs7cUNBQVM7NEJBQUMxQixJQUFJLGFBQUpBLElBQUksV0FBUSxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLENBQUFBLEtBQVksR0FBWkEsSUFBSSxDQUFFWSxNQUFNLGNBQVpaLEtBQVksY0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxLQUFZLENBQUU4QixXQUFXOzs7Ozs7NkJBQUs7a0NBQ2pFLDhEQUFDUixHQUFDO2tDQUFDLDRFQUFDSSxRQUFNO3NDQUFDLFVBQVE7Ozs7O2lDQUFTOzs7Ozs2QkFBSTtrQ0FDaEMsOERBQUNLLFFBQU07d0JBQUNwQixTQUFTLEVBQUMsV0FBV3FCO3dCQUFBQSxPQUFPLEVBQUU7Z0NBQXlCaEMsR0FBWTs0QkFBL0JPLE9BQUFBLGtCQUFrQixDQUFDUCxJQUFJLGFBQUpBLElBQUksV0FBUSxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLENBQUFBLEdBQVksR0FBWkEsSUFBSSxDQUFFWSxNQUFNLGNBQVpaLEdBQVksY0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxTQUFBQSxHQUFZLENBQUVpQyxNQUFNLDhCQUFSLEdBQVpqQyxLQUFBQSxDQUFZLFNBQVVELEVBQUUsQ0FBQzt5QkFBQTtrQ0FBR0MsSUFBSSxhQUFKQSxJQUFJLFdBQVEsR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxDQUFBQSxLQUFZLEdBQVpBLElBQUksQ0FBRVksTUFBTSxjQUFaWixLQUFZLGNBQVpBLEtBQUFBLENBQVksR0FBWkEsU0FBQUEsS0FBWSxDQUFFaUMsTUFBTSw4QkFBUixHQUFaakMsS0FBQUEsQ0FBWSxTQUFVaUIsSUFBSTs7Ozs7NkJBQVU7Ozs7OztxQkE4QjNIOzs7Ozs7YUFDRixDQUNQO0NBQ0Y7R0F0R0tuQixPQUFPOztRQUVzQkgsb0RBQVE7OztBQUZyQ0csS0FBQUEsT0FBTztBQXdHYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1Byb2ZpbGUudHN4PzY2MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgbm9JbWcgZnJvbSBcInB1YmxpYy9pbWFnZXMvaW1hZ2Utbm90LWZvdW5kLnBuZ1wiO1xuXG5jb25zdCBQRVJTT05fQklPX1FVRVJZID0gZ3FsYFxucXVlcnkgUGVyc29uKCRpZDogSUQpIHtcbiAgcGVyc29uKHdoZXJlOiB7aWQ6ICRpZH0pe1xuICBcdG5hbWVcbiAgICBsaWZlXG4gICAgYmlydGhcbiAgICBkZWF0aFxuICAgIGVkdWNhdGlvblxuICAgIHdvcmtIaXN0b3J5XG4gICAgc3BvdXNlIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICAgIGNoaWxkcmVuIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICAgIHNpYmxpbmdzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICAgIGdhbGxlcnlTbHVnXG4gICAgcHJvZmlsZUltYWdlIHtcbiAgICAgIHdpZHRoXG4gICAgICBoZWlnaHRcbiAgICAgIHVybFxuICAgIH1cbiAgICBvdmVydmlld1xuICAgIG1pbGl0YXJ5U2VydmljZVxuICAgIHJlc2lkZW5jZVxuICAgIHJlbGF0aW9uc2hpcCAgICBcbiAgfVxufVxuYFxuXG5cbmNvbnN0IFByb2ZpbGUgPSAoeyBpZCB9OiB7IGlkOiBzdHJpbmcgfSkgPT4ge1xuICBjb25zdCBbIHByb2ZpbGVJZCwgc2V0UHJvZmlsZUlkXSA9IHVzZVN0YXRlKCdzdHJpbmcnKTtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXG4gICAgUEVSU09OX0JJT19RVUVSWSxcbiAgICB7XG4gICAgICBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2U6IHRydWUsXG4gICAgICB2YXJpYWJsZXM6IHsgaWQ6IDIgfVxuICAgIH1cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGlkKSB7XG4gICAgICBzZXRQcm9maWxlSWQoaWQpO1xuICAgIH1cbiAgfSwgW2lkXSk7XG5cbiAgY29uc3QgaGFuZGxlTmV3UHJvZmlsZUlkID0gKGlkKSA9PiB7XG4gICAgc2V0UHJvZmlsZUlkKGlkKTtcbiAgICBcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHsgZGF0YSB9KVxuICBcbiAgaWYobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTYwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIGNvb2wgbG9hZGluZyBpY29uIVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgaWYoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02MCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgIFRoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoaXMgcHJvZmlsZSFcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTIgc206bXItNlwiPlxuICAgICAgICB7ZGF0YT8ucGVyc29uPy5wcm9maWxlSW1hZ2UgPyAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtkYXRhPy5wZXJzb24/LnByb2ZpbGVJbWFnZT8udXJsfVxuICAgICAgICAgIGFsdD17ZGF0YT8ucGVyc29uPy5uYW1lfVxuICAgICAgICAgIHdpZHRoPXtkYXRhPy5wZXJzb24/LnByb2ZpbGVJbWFnZT8ud2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtkYXRhPy5wZXJzb24/LnByb2ZpbGVJbWFnZT8uaGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e25vSW1nfVxuICAgICAgICAgICAgYWx0PVwibm8gaW1hZ2UgZm91bmRcIlxuICAgICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgbGF5b3V0PVwiaW50cmluc2ljXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57ZGF0YT8ucGVyc29uPy5uYW1lfTwvaDM+XG4gICAgICAgIDxwPntkYXRhPy5wZXJzb24/LmxpZmV9PC9wPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktM1wiLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPntkYXRhPy5wZXJzb24/Lm92ZXJ2aWV3fTwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5CaXJ0aDogPC9zdHJvbmc+e2RhdGE/LnBlcnNvbj8uYmlydGh9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPkRlYXRoOiA8L3N0cm9uZz57ZGF0YT8ucGVyc29uPy5kZWF0aH08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+RWR1Y2F0aW9uOiA8L3N0cm9uZz57ZGF0YT8ucGVyc29uPy5lZHVjYXRpb259PC9wPlxuICAgICAgICA8cD48c3Ryb25nPldvcmsgSGlzdG9yeTogPC9zdHJvbmc+e2RhdGE/LnBlcnNvbj8ud29ya0hpc3Rvcnl9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPlNwb3VzZTogPC9zdHJvbmc+PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVuZGVybGluZVwib25DbGljaz17KCkgPT4gaGFuZGxlTmV3UHJvZmlsZUlkKGRhdGE/LnBlcnNvbj8uc3BvdXNlPy5pZCl9PntkYXRhPy5wZXJzb24/LnNwb3VzZT8ubmFtZX08L2J1dHRvbj5cblxuICAgICAgICB7LyoqKlxuICAgICAgICAgKiBcbiAgICAgICAgICogICAgYmlydGhcbiAgICBkZWF0aFxuICAgIGVkdWNhdGlvblxuICAgIHdvcmtIaXN0b3J5XG4gICAgc3BvdXNlIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICAgIGNoaWxkcmVuIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICAgIHNpYmxpbmdzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICAgIGdhbGxlcnlTbHVnXG4gICAgcHJvZmlsZUltYWdlIHtcbiAgICAgIHdpZHRoXG4gICAgICBoZWlnaHRcbiAgICAgIHVybFxuICAgIH1cbiAgICBvdmVydmlld1xuICAgIG1pbGl0YXJ5U2VydmljZVxuICAgIHJlc2lkZW5jZVxuICAgICAgICAgKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiZ3FsIiwidXNlUXVlcnkiLCJub0ltZyIsIlBFUlNPTl9CSU9fUVVFUlkiLCJQcm9maWxlIiwiaWQiLCJkYXRhIiwicHJvZmlsZUlkIiwic2V0UHJvZmlsZUlkIiwibm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlIiwidmFyaWFibGVzIiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlTmV3UHJvZmlsZUlkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInBlcnNvbiIsInByb2ZpbGVJbWFnZSIsInNyYyIsInVybCIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsImgzIiwicCIsImxpZmUiLCJociIsIm92ZXJ2aWV3Iiwic3Ryb25nIiwiYmlydGgiLCJkZWF0aCIsImVkdWNhdGlvbiIsIndvcmtIaXN0b3J5IiwiYnV0dG9uIiwib25DbGljayIsInNwb3VzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/Profile.tsx\n");

/***/ })

});