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

/***/ "./src/template_method/AbstractDisplay.ts":
/*!************************************************!*\
  !*** ./src/template_method/AbstractDisplay.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass AbstractDisplay {\n    /**\n     * display\n     */\n    display() {\n        this.open();\n        for (let i = 0; i < 5; i++) {\n            this.print();\n        }\n        this.close();\n    }\n}\nexports.default = AbstractDisplay;\n\n\n//# sourceURL=webpack:///./src/template_method/AbstractDisplay.ts?");

/***/ }),

/***/ "./src/template_method/CharDisplay.ts":
/*!********************************************!*\
  !*** ./src/template_method/CharDisplay.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstractDisplay_1 = __importDefault(__webpack_require__(/*! ./AbstractDisplay */ \"./src/template_method/AbstractDisplay.ts\"));\nclass CharDisplay extends AbstractDisplay_1.default {\n    constructor(ch) {\n        super();\n        this.ch = ch;\n    }\n    open() {\n        console.log('<<');\n    }\n    print() {\n        console.log(this.ch);\n    }\n    close() {\n        console.log('>>');\n    }\n}\nexports.default = CharDisplay;\n\n\n//# sourceURL=webpack:///./src/template_method/CharDisplay.ts?");

/***/ }),

/***/ "./src/template_method/GetBytes.ts":
/*!*****************************************!*\
  !*** ./src/template_method/GetBytes.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass GetBytes {\n    constructor() { }\n    /**\n     * getBytes\n     */\n    getBytes(str) {\n        const ESCAPECHAR = \";,/?:@&=+$ \";\n        const ESCAPEDLEN_TABLE = [0, 1, 1, 1, 2, 3, 2, 3, 4, 3];\n        let size = 0;\n        let len_str = str.length;\n        if (str == null || str == \"\") {\n            return size;\n        }\n        for (let i = 0; i < len_str; i++) {\n            let c = str.charAt(i);\n            if (ESCAPECHAR.indexOf(c) >= 0) {\n                size++;\n            }\n            else {\n                size += ESCAPEDLEN_TABLE[encodeURI(c).length];\n            }\n        }\n        return size;\n    }\n}\nexports.default = GetBytes;\n\n\n//# sourceURL=webpack:///./src/template_method/GetBytes.ts?");

/***/ }),

/***/ "./src/template_method/Main.ts":
/*!*************************************!*\
  !*** ./src/template_method/Main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst CharDisplay_1 = __importDefault(__webpack_require__(/*! ./CharDisplay */ \"./src/template_method/CharDisplay.ts\"));\nconst StringDisplay_1 = __importDefault(__webpack_require__(/*! ./StringDisplay */ \"./src/template_method/StringDisplay.ts\"));\nclass Main {\n    constructor() {\n        let d1 = new CharDisplay_1.default('H');\n        let d2 = new StringDisplay_1.default('Hello,World.');\n        let d3 = new StringDisplay_1.default('こんにちは。');\n        d1.display();\n        d2.display();\n        d3.display();\n    }\n}\nexports.default = Main;\nnew Main();\n\n\n//# sourceURL=webpack:///./src/template_method/Main.ts?");

/***/ }),

/***/ "./src/template_method/StringDisplay.ts":
/*!**********************************************!*\
  !*** ./src/template_method/StringDisplay.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstractDisplay_1 = __importDefault(__webpack_require__(/*! ./AbstractDisplay */ \"./src/template_method/AbstractDisplay.ts\"));\nconst GetBytes_1 = __importDefault(__webpack_require__(/*! ./GetBytes */ \"./src/template_method/GetBytes.ts\"));\nclass StringDisplay extends AbstractDisplay_1.default {\n    constructor(string) {\n        super();\n        let getbytes = new GetBytes_1.default();\n        this.string = string;\n        this.width = getbytes.getBytes(string);\n    }\n    /**\n     * open\n     */\n    open() {\n        this.printLine();\n    }\n    /**\n     * print\n     */\n    print() {\n        console.log('(' + this.string + ')');\n    }\n    /**\n     * close\n     */\n    close() {\n        this.printLine();\n    }\n    printLine() {\n        console.log('+');\n        for (let i = 0; i < this.width; i++) {\n            console.log('-');\n        }\n        console.log('+');\n    }\n}\nexports.default = StringDisplay;\n\n\n//# sourceURL=webpack:///./src/template_method/StringDisplay.ts?");

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************!*\
  !*** multi ./src/template_method/AbstractDisplay.ts ./src/template_method/CharDisplay.ts ./src/template_method/Main.ts ./src/template_method/StringDisplay.ts ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/template_method/AbstractDisplay.ts */\"./src/template_method/AbstractDisplay.ts\");\n__webpack_require__(/*! ./src/template_method/CharDisplay.ts */\"./src/template_method/CharDisplay.ts\");\n__webpack_require__(/*! ./src/template_method/Main.ts */\"./src/template_method/Main.ts\");\nmodule.exports = __webpack_require__(/*! ./src/template_method/StringDisplay.ts */\"./src/template_method/StringDisplay.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/template_method/AbstractDisplay.ts_./src/template_method/CharDisplay.ts_./src/template_method/Main.ts_./src/template_method/StringDisplay.ts?");

/***/ })

/******/ });