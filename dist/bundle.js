/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/iterator/Aggregate.ts":
/*!***********************************!*\
  !*** ./src/iterator/Aggregate.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n\n\n//# sourceURL=webpack:///./src/iterator/Aggregate.ts?");

/***/ }),

/***/ "./src/iterator/Book.ts":
/*!******************************!*\
  !*** ./src/iterator/Book.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Book {\n    constructor(name) {\n        this.name = name;\n    }\n    /**\n     * getName\n     */\n    getName() {\n        return this.name;\n    }\n}\nexports.default = Book;\n\n\n//# sourceURL=webpack:///./src/iterator/Book.ts?");

/***/ }),

/***/ "./src/iterator/BookShelf.ts":
/*!***********************************!*\
  !*** ./src/iterator/BookShelf.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst BookShelfIterator_1 = __importDefault(__webpack_require__(/*! ./BookShelfIterator */ \"./src/iterator/BookShelfIterator.ts\"));\nclass BookShelf {\n    constructor(maxsize = 0) {\n        this.last = 0;\n        this.books = new Array();\n        this.maxsize = maxsize;\n    }\n    /**\n     * getBookAt\n     */\n    getBookAt(index) {\n        return this.books[index];\n    }\n    /**\n     * getBookLIst\n     */\n    getBookList() {\n        return this.books;\n    }\n    /**\n     * appendBook\n     */\n    appendBook(book) {\n        if (this.maxsize > this.last) {\n            this.books[this.last] = book;\n            this.last++;\n        }\n        else if (this.maxsize === 0) {\n            this.books[this.last] = book;\n            this.last++;\n        }\n    }\n    /**\n     * removeBook\n     */\n    removeBook(index) {\n        this.books.splice(index, 1);\n    }\n    /**\n     * getLength\n     */\n    getLength() {\n        return this.books.length;\n    }\n    /**\n     * iterator\n     */\n    iterator() {\n        return new BookShelfIterator_1.default(this);\n    }\n}\nexports.default = BookShelf;\n\n\n//# sourceURL=webpack:///./src/iterator/BookShelf.ts?");

/***/ }),

/***/ "./src/iterator/BookShelfIterator.ts":
/*!*******************************************!*\
  !*** ./src/iterator/BookShelfIterator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass BookShelfIterator {\n    constructor(bookshelf) {\n        this.bookshelf = bookshelf;\n        this.index = 0;\n    }\n    hasNext() {\n        if (this.index < this.bookshelf.getLength()) {\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    next() {\n        const book = this.bookshelf.getBookAt(this.index);\n        this.index++;\n        return book;\n    }\n    remove() {\n        this.index--;\n        this.bookshelf.removeBook(this.index);\n    }\n}\nexports.default = BookShelfIterator;\n\n\n//# sourceURL=webpack:///./src/iterator/BookShelfIterator.ts?");

/***/ }),

/***/ "./src/iterator/Iterator.ts":
/*!**********************************!*\
  !*** ./src/iterator/Iterator.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n\n\n//# sourceURL=webpack:///./src/iterator/Iterator.ts?");

/***/ }),

/***/ "./src/iterator/main.ts":
/*!******************************!*\
  !*** ./src/iterator/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst BookShelf_1 = __importDefault(__webpack_require__(/*! ./BookShelf */ \"./src/iterator/BookShelf.ts\"));\nconst Book_1 = __importDefault(__webpack_require__(/*! ./Book */ \"./src/iterator/Book.ts\"));\nclass Main {\n    constructor() {\n        const bookshelf = new BookShelf_1.default();\n        bookshelf.appendBook(new Book_1.default(\"book1\"));\n        bookshelf.appendBook(new Book_1.default(\"book2\"));\n        bookshelf.appendBook(new Book_1.default(\"book3\"));\n        bookshelf.appendBook(new Book_1.default(\"book4\"));\n        const it = bookshelf.iterator();\n        let c = 0;\n        while (it.hasNext()) {\n            const book = it.next();\n            if (c % 2 != 0) {\n                it.remove();\n            }\n            c++;\n        }\n        console.log(bookshelf.getBookList());\n    }\n}\nexports.default = Main;\n// new Main();\n\n\n//# sourceURL=webpack:///./src/iterator/main.ts?");

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************!*\
  !*** multi ./src/iterator/Aggregate.ts ./src/iterator/Book.ts ./src/iterator/BookShelf.ts ./src/iterator/BookShelfIterator.ts ./src/iterator/Iterator.ts ./src/iterator/main.ts ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/iterator/Aggregate.ts */\"./src/iterator/Aggregate.ts\");\n__webpack_require__(/*! ./src/iterator/Book.ts */\"./src/iterator/Book.ts\");\n__webpack_require__(/*! ./src/iterator/BookShelf.ts */\"./src/iterator/BookShelf.ts\");\n__webpack_require__(/*! ./src/iterator/BookShelfIterator.ts */\"./src/iterator/BookShelfIterator.ts\");\n__webpack_require__(/*! ./src/iterator/Iterator.ts */\"./src/iterator/Iterator.ts\");\nmodule.exports = __webpack_require__(/*! ./src/iterator/main.ts */\"./src/iterator/main.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/iterator/Aggregate.ts_./src/iterator/Book.ts_./src/iterator/BookShelf.ts_./src/iterator/BookShelfIterator.ts_./src/iterator/Iterator.ts_./src/iterator/main.ts?");

/***/ })

/******/ });