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

/***/ "./components/organisms/MemberBubble.tsx":
/*!***********************************************!*\
  !*** ./components/organisms/MemberBubble.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ptums_Sites_projects_personal_barnwell_family_tree_remix_run_web_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ptums_Sites_projects_personal_barnwell_family_tree_remix_run_web_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ptums_Sites_projects_personal_barnwell_family_tree_remix_run_web_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-draggable */ \"./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var utils_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/core */ \"./utils/core.ts\");\n/* harmony import */ var utils_trpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/trpc */ \"./utils/trpc.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MemberBubble = function(param) {\n    var member = param.member;\n    var ref, ref1, ref2;\n    _s();\n    var mutation = utils_trpc__WEBPACK_IMPORTED_MODULE_6__.trpc.useMutation([\n        \"position\"\n    ]);\n    var savePosition = function() {\n        var _ref = _asyncToGenerator(_Users_ptums_Sites_projects_personal_barnwell_family_tree_remix_run_web_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(memberId, coordinateX, coordinateY) {\n            return _Users_ptums_Sites_projects_personal_barnwell_family_tree_remix_run_web_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        mutation.mutate({\n                            memberId: memberId,\n                            coordinateX: coordinateX,\n                            coordinateY: coordinateY\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function savePosition(memberId, coordinateX, coordinateY) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    if (mutation === null || mutation === void 0 ? void 0 : mutation.data) {\n        console.log({\n            mutation: mutation\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_4___default()), {\n        onStop: function(e, data) {\n            savePosition(member === null || member === void 0 ? void 0 : member.id, data === null || data === void 0 ? void 0 : data.x, data === null || data === void 0 ? void 0 : data.y);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"absolute hover:cursor-pointer rounded-xl shadow-lg px-3 py-2 text-white flex flex-col flex-wrap items-center w-36 bg-black bg-opacity-50\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-12 h-16 mr-4 mb-2 overflow-hidden\",\n                    children: (member === null || member === void 0 ? void 0 : member.profileImage) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: member === null || member === void 0 ? void 0 : (ref = member.profileImage) === null || ref === void 0 ? void 0 : ref.url,\n                        alt: member === null || member === void 0 ? void 0 : member.name,\n                        height: (member === null || member === void 0 ? void 0 : (ref1 = member.profileImage) === null || ref1 === void 0 ? void 0 : ref1.height) || 300,\n                        width: (member === null || member === void 0 ? void 0 : (ref2 = member.profileImage) === null || ref2 === void 0 ? void 0 : ref2.width) || 300\n                    }, void 0, false, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web-2/components/organisms/MemberBubble.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"bg-gray-100 w-12 text-xs flex flex-col justify-center text-center h-16 text-black\",\n                        children: \"No Image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web-2/components/organisms/MemberBubble.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web-2/components/organisms/MemberBubble.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col text-xs text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                children: member === null || member === void 0 ? void 0 : member.name\n                            }, void 0, false, {\n                                fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web-2/components/organisms/MemberBubble.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 18\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web-2/components/organisms/MemberBubble.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: (0,utils_core__WEBPACK_IMPORTED_MODULE_5__.modifyRelationship)(member === null || member === void 0 ? void 0 : member.relationship)\n                        }, void 0, false, {\n                            fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web-2/components/organisms/MemberBubble.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web-2/components/organisms/MemberBubble.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web-2/components/organisms/MemberBubble.tsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ptums/Sites/projects/personal/barnwell-family-tree-remix-run/web-2/components/organisms/MemberBubble.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(MemberBubble, \"Kvw+Q3+Z705KOo+cvu2gXTQDxwg=\", false, function() {\n    return [\n        utils_trpc__WEBPACK_IMPORTED_MODULE_6__.trpc.useMutation\n    ];\n});\n_c = MemberBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MemberBubble);\nvar _c;\n$RefreshReg$(_c, \"MemberBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9NZW1iZXJCdWJibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSztBQUNTO0FBRVE7QUFDZDs7QUFFbEMsSUFBTUssWUFBWSxHQUFHLGdCQUFtQztRQUFoQ0MsTUFBTSxTQUFOQSxNQUFNO1FBd0JUQSxHQUFvQixFQUVqQkEsSUFBb0IsRUFDckJBLElBQW9COztJQTFCekMsSUFBTUMsUUFBUSxHQUFHSCx3REFBZ0IsQ0FBQztRQUFDLFVBQVU7S0FBQyxDQUFDO0lBQy9DLElBQU1LLFlBQVk7bUJBQUcsd05BQU9DLFFBQVEsRUFBRUMsV0FBVyxFQUFDQyxXQUFXLEVBQUs7Ozs7d0JBQzlETCxRQUFRLENBQUNNLE1BQU0sQ0FBQzs0QkFBRUgsUUFBUSxFQUFSQSxRQUFROzRCQUFFQyxXQUFXLEVBQVhBLFdBQVc7NEJBQUVDLFdBQVcsRUFBWEEsV0FBVzt5QkFBRSxDQUFDLENBQUM7Ozs7OztTQUMzRDt3QkFGS0gsWUFBWSxDQUFVQyxRQUFRLEVBQUVDLFdBQVcsRUFBQ0MsV0FBVzs7O09BRTVEO0lBRUQsSUFBR0wsUUFBUSxhQUFSQSxRQUFRLFdBQU0sR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxRQUFRLENBQUVPLElBQUksRUFBRTtRQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUM7WUFBRVQsUUFBUSxFQUFSQSxRQUFRO1NBQUUsQ0FBQztLQUMxQjtJQUdELHFCQUNFLDhEQUFDTCx3REFBUztRQUNSZSxNQUFNLEVBQUUsU0FBQ0MsQ0FBQyxFQUFFSixJQUFJLEVBQUs7WUFDbkJMLFlBQVksQ0FBQ0gsTUFBTSxhQUFOQSxNQUFNLFdBQUksR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxNQUFNLENBQUVhLEVBQUUsRUFBRUwsSUFBSSxhQUFKQSxJQUFJLFdBQUcsR0FBUEEsS0FBQUEsQ0FBTyxHQUFQQSxJQUFJLENBQUVNLENBQUMsRUFBRU4sSUFBSSxhQUFKQSxJQUFJLFdBQUcsR0FBUEEsS0FBQUEsQ0FBTyxHQUFQQSxJQUFJLENBQUVPLENBQUMsQ0FBQyxDQUFDO1NBQzVDO2tCQUVDLDRFQUFDQyxLQUFHO1lBRUZDLFNBQVMsRUFBRywwSUFBd0k7OzhCQUVsSiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHFDQUFxQzs4QkFDakRqQixDQUFBQSxNQUFNLGFBQU5BLE1BQU0sV0FBYyxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLE1BQU0sQ0FBRWtCLFlBQVksa0JBQ25CLDhEQUFDdkIsbURBQUs7d0JBQ053QixHQUFHLEVBQUVuQixNQUFNLGFBQU5BLE1BQU0sV0FBYyxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLENBQUFBLEdBQW9CLEdBQXBCQSxNQUFNLENBQUVrQixZQUFZLGNBQXBCbEIsR0FBb0IsY0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxHQUFvQixDQUFFb0IsR0FBRzt3QkFDOUJDLEdBQUcsRUFBRXJCLE1BQU0sYUFBTkEsTUFBTSxXQUFNLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsTUFBTSxDQUFFc0IsSUFBSTt3QkFDakJDLE1BQU0sRUFBRXZCLENBQUFBLE1BQU0sYUFBTkEsTUFBTSxXQUFjLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsQ0FBQUEsSUFBb0IsR0FBcEJBLE1BQU0sQ0FBRWtCLFlBQVksY0FBcEJsQixJQUFvQixjQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLElBQW9CLENBQUV1QixNQUFNLENBQVIsSUFBWSxHQUFHO3dCQUMzQ0MsS0FBSyxFQUFFeEIsQ0FBQUEsTUFBTSxhQUFOQSxNQUFNLFdBQWMsR0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxDQUFBQSxJQUFvQixHQUFwQkEsTUFBTSxDQUFFa0IsWUFBWSxjQUFwQmxCLElBQW9CLGNBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsSUFBb0IsQ0FBRXdCLEtBQUssQ0FBUCxJQUFXLEdBQUc7Ozs7OzZCQUN2QyxpQkFFRiw4REFBQ0MsTUFBSTt3QkFBQ1IsU0FBUyxFQUFDLG1GQUFvRjtrQ0FBQyxVQUVyRzs7Ozs7NkJBQU87Ozs7O3lCQUVMOzhCQUNOLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsbUNBQW1DOztzQ0FDaEQsOERBQUNTLEdBQUM7c0NBQUMsNEVBQUNDLFFBQU07MENBQUUzQixNQUFNLGFBQU5BLE1BQU0sV0FBTSxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLE1BQU0sQ0FBRXNCLElBQUk7Ozs7O3FDQUFVOzs7OztpQ0FBSTtzQ0FDdEMsOERBQUNJLEdBQUM7c0NBQUU3Qiw4REFBa0IsQ0FBQ0csTUFBTSxhQUFOQSxNQUFNLFdBQWMsR0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxNQUFNLENBQUU0QixZQUFZLENBQUM7Ozs7O2lDQUFLOzs7Ozs7eUJBQzdDOzs7Ozs7aUJBQ0o7Ozs7O2FBQ0UsQ0FDWjtDQUNIO0dBMUNLN0IsWUFBWTs7UUFDQ0Qsd0RBQWdCOzs7QUFEN0JDLEtBQUFBLFlBQVk7QUE0Q2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvTWVtYmVyQnViYmxlLnRzeD9hYmMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJ3JlYWN0LWRyYWdnYWJsZSc7XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICd0eXBlcy9NZW1iZXInO1xuaW1wb3J0IHsgbW9kaWZ5UmVsYXRpb25zaGlwIH0gZnJvbSAndXRpbHMvY29yZSc7XG5pbXBvcnQgeyB0cnBjIH0gZnJvbSBcInV0aWxzL3RycGNcIjtcblxuY29uc3QgTWVtYmVyQnViYmxlID0gKHsgbWVtYmVyIH06IHsgbWVtYmVyOiBNZW1iZXJ9KSA9PiB7XG4gIGNvbnN0IG11dGF0aW9uID0gdHJwYy51c2VNdXRhdGlvbihbJ3Bvc2l0aW9uJ10pO1xuICBjb25zdCBzYXZlUG9zaXRpb24gPSBhc3luYyAobWVtYmVySWQsIGNvb3JkaW5hdGVYLGNvb3JkaW5hdGVZKSA9PiB7XG4gICAgICBtdXRhdGlvbi5tdXRhdGUoeyBtZW1iZXJJZCwgY29vcmRpbmF0ZVgsIGNvb3JkaW5hdGVZIH0pO1xuICB9O1xuXG4gIGlmKG11dGF0aW9uPy5kYXRhKSB7XG4gICAgY29uc29sZS5sb2coeyBtdXRhdGlvbiB9KVxuICB9XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPERyYWdnYWJsZVxuICAgICAgb25TdG9wPXsoZSwgZGF0YSkgPT4ge1xuICAgICAgICBzYXZlUG9zaXRpb24obWVtYmVyPy5pZCwgZGF0YT8ueCwgZGF0YT8ueSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgIFxuICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGhvdmVyOmN1cnNvci1wb2ludGVyIHJvdW5kZWQteGwgc2hhZG93LWxnIHB4LTMgcHktMiB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgZmxleC13cmFwIGl0ZW1zLWNlbnRlciB3LTM2IGJnLWJsYWNrIGJnLW9wYWNpdHktNTBgfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xNiBtci00IG1iLTIgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgIHttZW1iZXI/LnByb2ZpbGVJbWFnZSA/IChcbiAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgc3JjPXttZW1iZXI/LnByb2ZpbGVJbWFnZT8udXJsfVxuICAgICAgICAgICAgICAgIGFsdD17bWVtYmVyPy5uYW1lfVxuICAgICAgICAgICAgICAgIGhlaWdodD17bWVtYmVyPy5wcm9maWxlSW1hZ2U/LmhlaWdodCB8fCAzMDB9XG4gICAgICAgICAgICAgICAgd2lkdGg9e21lbWJlcj8ucHJvZmlsZUltYWdlPy53aWR0aCB8fCAzMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCB3LTEyIHRleHQteHMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBoLTE2ICB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICBObyBJbWFnZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRleHQteHMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHA+PHN0cm9uZz57bWVtYmVyPy5uYW1lfTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgPHA+e21vZGlmeVJlbGF0aW9uc2hpcChtZW1iZXI/LnJlbGF0aW9uc2hpcCl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvRHJhZ2dhYmxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyQnViYmxlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiRHJhZ2dhYmxlIiwibW9kaWZ5UmVsYXRpb25zaGlwIiwidHJwYyIsIk1lbWJlckJ1YmJsZSIsIm1lbWJlciIsIm11dGF0aW9uIiwidXNlTXV0YXRpb24iLCJzYXZlUG9zaXRpb24iLCJtZW1iZXJJZCIsImNvb3JkaW5hdGVYIiwiY29vcmRpbmF0ZVkiLCJtdXRhdGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm9uU3RvcCIsImUiLCJpZCIsIngiLCJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZmlsZUltYWdlIiwic3JjIiwidXJsIiwiYWx0IiwibmFtZSIsImhlaWdodCIsIndpZHRoIiwic3BhbiIsInAiLCJzdHJvbmciLCJyZWxhdGlvbnNoaXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/organisms/MemberBubble.tsx\n");

/***/ })

});