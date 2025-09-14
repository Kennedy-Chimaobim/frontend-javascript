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

/***/ "./0x04-TypeScript/task_0/js/main.ts":
/*!*******************************************!*\
  !*** ./0x04-TypeScript/task_0/js/main.ts ***!
  \*******************************************/
/***/ (() => {

eval("{\nvar student1 = {\n    firstName: 'John',\n    lastName: 'Doe',\n    age: 20,\n    location: 'New York'\n};\nvar student2 = {\n    firstName: 'Jane',\n    lastName: 'Smith',\n    age: 22,\n    location: 'London'\n};\nvar studentsList = [student1, student2];\n// Create a table\nvar table = document.createElement('table');\ntable.border = \"1\"; // 👈 this adds a visible border\n// Create table header\nvar header = document.createElement('tr');\nheader.innerHTML = \"<th>First Name</th><th>Location</th>\";\ntable.appendChild(header);\n// Create rows\nstudentsList.forEach(function (student) {\n    var row = document.createElement('tr');\n    row.innerHTML = \"<td>\".concat(student.firstName, \"</td><td>\").concat(student.location, \"</td>\");\n    table.appendChild(row);\n});\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://frontend-javascript/./0x04-TypeScript/task_0/js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./0x04-TypeScript/task_0/js/main.ts"]();
/******/ 	
/******/ })()
;