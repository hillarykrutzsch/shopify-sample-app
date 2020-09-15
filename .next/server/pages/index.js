module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n`;\n\nfunction ProductList() {\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(GET_PRODUCTS_BY_ID, {\n    variables: {\n      ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"ids\")\n    }\n  });\n  if (loading) return __jsx(\"div\", null, \"Loading...\");\n  if (error) return __jsx(\"div\", null, error.message);\n  console.log(\"this is data:\", data);\n  return __jsx(\"div\", null, __jsx(\"h1\", null, \"These are the products selected:\"), data.nodes.map(item => {\n    return __jsx(\"p\", {\n      key: item.id\n    }, item.title);\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzP2I4ZDUiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTX0JZX0lEIiwiZ3FsIiwiUHJvZHVjdExpc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZHMiLCJzdG9yZSIsImdldCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibm9kZXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBRUEsTUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUEvQjs7QUE0QkEsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQixRQUFNO0FBQUVDLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsTUFBMkJDLG9FQUFRLENBQUNOLGtCQUFELEVBQXFCO0FBQzVETyxhQUFTLEVBQUU7QUFBRUMsU0FBRyxFQUFFQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFQO0FBRGlELEdBQXJCLENBQXpDO0FBSUEsTUFBSVAsT0FBSixFQUFhLE9BQU8sZ0NBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTyxtQkFBTUEsS0FBSyxDQUFDTyxPQUFaLENBQVA7QUFFWEMsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QlIsSUFBN0I7QUFFQSxTQUNFLG1CQUNFLHFEQURGLEVBR0dBLElBQUksQ0FBQ1MsS0FBTCxDQUFXQyxHQUFYLENBQWdCQyxJQUFELElBQVU7QUFDeEIsV0FBTztBQUFHLFNBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUFiLE9BQWtCRCxJQUFJLENBQUNFLEtBQXZCLENBQVA7QUFDRCxHQUZBLENBSEgsQ0FERjtBQVNEOztBQUVjaEIsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIFJlc291cmNlTGlzdCxcbiAgU3RhY2ssXG4gIFRleHRTdHlsZSxcbiAgVGh1bWJuYWlsLFxufSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZS1qc1wiO1xuXG5jb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXG4gIHF1ZXJ5IGdldFByb2R1Y3RzKCRpZHM6IFtJRCFdISkge1xuICAgIG5vZGVzKGlkczogJGlkcykge1xuICAgICAgLi4uIG9uIFByb2R1Y3Qge1xuICAgICAgICB0aXRsZVxuICAgICAgICBoYW5kbGVcbiAgICAgICAgaWRcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFNfQllfSUQsIHtcbiAgICB2YXJpYWJsZXM6IHsgaWRzOiBzdG9yZS5nZXQoXCJpZHNcIikgfSxcbiAgfSk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuXG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyBkYXRhOlwiLCBkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VGhlc2UgYXJlIHRoZSBwcm9kdWN0cyBzZWxlY3RlZDo8L2gxPlxuXG4gICAgICB7ZGF0YS5ub2Rlcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIDxwIGtleT17aXRlbS5pZH0+e2l0ZW0udGl0bGV9PC9wPjtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Index() {\n  const {\n    0: modal,\n    1: setModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    open: false\n  });\n  const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"ids\");\n\n  function handleSelection(resources) {\n    const idsFromResources = resources.selection.map(product => product.id);\n    setModal({\n      open: false\n    });\n    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set(\"ids\", idsFromResources);\n    console.log(\"product ids: \" + store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"ids\"));\n  }\n\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n    resourceType: \"Product\",\n    showVariants: false,\n    open: modal.open,\n    onCancel: () => setModal({\n      open: false\n    }),\n    onSelection: resources => handleSelection(resources)\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    heading: \"Manage your inventory transfers\",\n    action: {\n      content: \"Select Products\",\n      onAction: () => setModal({\n        open: true\n      })\n    },\n    secondaryAction: {\n      content: \"Learn more\",\n      url: \"https://help.shopify.com\"\n    },\n    image: \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\"\n  }) : __jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwibW9kYWwiLCJzZXRNb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImVtcHR5U3RhdGUiLCJzdG9yZSIsImdldCIsImhhbmRsZVNlbGVjdGlvbiIsInJlc291cmNlcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm9uQWN0aW9uIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNmLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFELENBQWxDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQUNDLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLENBQXBCOztBQUVBLFdBQVNDLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW9DO0FBQ2xDLFVBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXlCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0MsRUFBN0MsQ0FBekI7QUFDQVosWUFBUSxDQUFDO0FBQUVFLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNBRSxtREFBSyxDQUFDUyxHQUFOLENBQVUsS0FBVixFQUFpQkwsZ0JBQWpCO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFrQlgsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsQ0FBOUI7QUFDRDs7QUFFRCxTQUNFLE1BQUMscURBQUQsUUFDRSxNQUFDLHdFQUFEO0FBQ0UsZ0JBQVksRUFBQyxTQURmO0FBRUUsZ0JBQVksRUFBRSxLQUZoQjtBQUdFLFFBQUksRUFBRU4sS0FBSyxDQUFDRyxJQUhkO0FBSUUsWUFBUSxFQUFFLE1BQU1GLFFBQVEsQ0FBQztBQUFFRSxVQUFJLEVBQUU7QUFBUixLQUFELENBSjFCO0FBS0UsZUFBVyxFQUFHSyxTQUFELElBQWVELGVBQWUsQ0FBQ0MsU0FBRDtBQUw3QyxJQURGLEVBU0UsTUFBQyx1REFBRCxRQUNHSixVQUFVLEdBQ1QsTUFBQywyREFBRDtBQUNFLFdBQU8sRUFBQyxpQ0FEVjtBQUVFLFVBQU0sRUFBRTtBQUNOYSxhQUFPLEVBQUUsaUJBREg7QUFFTkMsY0FBUSxFQUFFLE1BQU1qQixRQUFRLENBQUM7QUFBRUUsWUFBSSxFQUFFO0FBQVIsT0FBRDtBQUZsQixLQUZWO0FBTUUsbUJBQWUsRUFBRTtBQUNmYyxhQUFPLEVBQUUsWUFETTtBQUVmRSxTQUFHLEVBQUU7QUFGVSxLQU5uQjtBQVVFLFNBQUssRUFBQztBQVZSLElBRFMsR0FjVCxNQUFDLCtEQUFELE9BZkosQ0FURixDQURGO0FBOEJEOztBQUVjcEIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRW1wdHlTdGF0ZSwgTGF5b3V0LCBQYWdlIH0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcbmltcG9ydCB7IFJlc291cmNlUGlja2VyIH0gZnJvbSBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwic3RvcmUtanNcIjtcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdFwiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldChcImlkc1wiKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKSB7XG4gICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcbiAgICBzZXRNb2RhbCh7IG9wZW46IGZhbHNlIH0pO1xuICAgIHN0b3JlLnNldChcImlkc1wiLCBpZHNGcm9tUmVzb3VyY2VzKTtcbiAgICBjb25zb2xlLmxvZyhcInByb2R1Y3QgaWRzOiBcIiArIHN0b3JlLmdldChcImlkc1wiKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxuICAgICAgICBvcGVuPXttb2RhbC5vcGVufVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWwoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IGhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgLz5cblxuICAgICAgPExheW91dD5cbiAgICAgICAge2VtcHR5U3RhdGUgPyAoXG4gICAgICAgICAgPEVtcHR5U3RhdGVcbiAgICAgICAgICAgIGhlYWRpbmc9XCJNYW5hZ2UgeW91ciBpbnZlbnRvcnkgdHJhbnNmZXJzXCJcbiAgICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlNlbGVjdCBQcm9kdWN0c1wiLFxuICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gc2V0TW9kYWwoeyBvcGVuOiB0cnVlIH0pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbj17e1xuICAgICAgICAgICAgICBjb250ZW50OiBcIkxlYXJuIG1vcmVcIixcbiAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vaGVscC5zaG9waWZ5LmNvbVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmdcIlxuICAgICAgICAgID48L0VtcHR5U3RhdGU+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFByb2R1Y3RMaXN0IC8+XG4gICAgICAgICl9XG4gICAgICA8L0xheW91dD5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });