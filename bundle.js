/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar search = 315635;\nvar page = 1;\n\n_modules_search__WEBPACK_IMPORTED_MODULE_0__.movieId = (0,_modules_search__WEBPACK_IMPORTED_MODULE_0__.searchMovie)();\n\nvar getMovie = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, data, movie;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(\"https://api.themoviedb.org/3/movie/\".concat(search, \"?api_key=e4b30a1db5bc22a592d00146854380c7&language=en-US\"));\n\n          case 3:\n            response = _context.sent;\n\n            if (!(response.status === 200)) {\n              _context.next = 13;\n              break;\n            }\n\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            data = _context.sent;\n\n            /* console.log(data.id) */\n            movie = '';\n            movie = \"\\n        <h3>Si te gust\\xF3</h3>\\n        <img class=\\\"image\\\" src=\\\"https://image.tmdb.org/t/p/w500/\".concat(data.poster_path, \"\\\"/> \\n        <H2>\").concat(data.title, \"</H2>\");\n            document.getElementById('liked').innerHTML = movie;\n            _context.next = 14;\n            break;\n\n          case 13:\n            if (response.status == 401) {\n              console.log('Invalid Key');\n            } else if (response.status == 404) {\n              console.log('This movie doesn\\'t exist');\n            } else {\n              console.log('Unexpected error');\n            }\n\n          case 14:\n            _context.next = 19;\n            break;\n\n          case 16:\n            _context.prev = 16;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 19:\n            ;\n\n          case 20:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 16]]);\n  }));\n\n  return function getMovie() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ngetMovie();\n\nvar getRecommendations = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var response, data, movies;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return fetch(\"https://api.themoviedb.org/3/movie/\".concat(search, \"/recommendations?api_key=e4b30a1db5bc22a592d00146854380c7&page=\").concat(page));\n\n          case 3:\n            response = _context2.sent;\n\n            if (!(response.status === 200)) {\n              _context2.next = 14;\n              break;\n            }\n\n            _context2.next = 7;\n            return response.json();\n\n          case 7:\n            data = _context2.sent;\n            console.log(data);\n            movies = [];\n            data.results.forEach(function (movie) {\n              movies += \"\\n        <div class=\\\"cards\\\">\\n          <img class=\\\"cards__images\\\" src=\\\"https://image.tmdb.org/t/p/w500/\".concat(movie.poster_path, \"\\\"/>\\n          <h3>\").concat(movie.title, \"</h3>\\n        </div>\\n        \");\n            });\n            document.getElementById('container').innerHTML = movies;\n            _context2.next = 15;\n            break;\n\n          case 14:\n            if (response.status == 401) {\n              console.log('Invalid Key');\n            } else if (response.status == 404) {\n              console.log('This movie doesn\\'t exist');\n            } else {\n              console.log('Unexpected error');\n            }\n\n          case 15:\n            _context2.next = 20;\n            break;\n\n          case 17:\n            _context2.prev = 17;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.log(_context2.t0);\n\n          case 20:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 17]]);\n  }));\n\n  return function getRecommendations() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\ngetRecommendations();\n\nvar nextPageLeft = function nextPageLeft() {\n  var left = document.getElementById('container');\n  left.scrollBy(-850, 0);\n};\n\nvar nextPageRight = function nextPageRight() {\n  var right = document.getElementById('container');\n  right.scrollBy(850, 0);\n};\n\nvar btnSelected = function btnSelected() {\n  var btn1 = document.querySelector('#btn1');\n  var btn2 = document.querySelector('#btn2');\n\n  if (btn1.classList.contains('selected')) {\n    btn1.classList.remove('selected');\n    btn2.classList.add('selected');\n  } else {\n    btn1.classList.add('selected');\n    btn2.classList.remove('selected');\n  }\n};\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getResults\": () => (/* binding */ getResults),\n/* harmony export */   \"movieId\": () => (/* binding */ movieId),\n/* harmony export */   \"searchMovie\": () => (/* binding */ searchMovie)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar movieId = '';\nvar searchMovie = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(liked) {\n    var response, data, finded;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(\"https://api.themoviedb.org/3/search/movie?api_key=e4b30a1db5bc22a592d00146854380c7&language=en-US&query=\".concat(liked, \"&page=1&include_adult=false\"));\n\n          case 3:\n            response = _context.sent;\n\n            if (!(response.status === 200)) {\n              _context.next = 12;\n              break;\n            }\n\n            _context.next = 7;\n            return response.json();\n\n          case 7:\n            data = _context.sent;\n            finded = data.results[0].id;\n            return _context.abrupt(\"return\", finded);\n\n          case 12:\n            if (response.status == 401) {\n              console.log('Invalid Key');\n            } else if (response.status == 404) {\n              console.log('This movie doesn\\'t exist');\n            } else {\n              console.log('Unexpected error');\n            }\n\n          case 13:\n            _context.next = 18;\n            break;\n\n          case 15:\n            _context.prev = 15;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 18:\n            ;\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 15]]);\n  }));\n\n  return function searchMovie(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar getResults = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var input, liked;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            input = document.getElementById('entry');\n            liked = input.value;\n            _context2.next = 4;\n            return searchMovie(liked);\n\n          case 4:\n            movieId = _context2.sent;\n            return _context2.abrupt(\"return\", movieId);\n\n          case 6:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getResults() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/modules/search.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;