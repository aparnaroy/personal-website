"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-square";
exports.ids = ["vendor-chunks/tsparticles-shape-square"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/esm/SquareDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SquareDrawer: () => (/* binding */ SquareDrawer)\n/* harmony export */ });\nconst fixFactor = Math.sqrt(2);\nclass SquareDrawer {\n    draw(context, particle, radius) {\n        const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;\n        context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);\n    }\n    getSidesCount() {\n        return 4;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9TcXVhcmVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVlDLEtBQUtDLElBQUksQ0FBQztBQUNyQixNQUFNQztJQUNUQyxLQUFLQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFO1FBQzVCLE1BQU1DLGNBQWNELFNBQVNQLFdBQVdTLGdCQUFnQkQsY0FBYztRQUN0RUgsUUFBUUssSUFBSSxDQUFDLENBQUNGLGFBQWEsQ0FBQ0EsYUFBYUMsZUFBZUE7SUFDNUQ7SUFDQUUsZ0JBQWdCO1FBQ1osT0FBTztJQUNYO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXNxdWFyZS9lc20vU3F1YXJlRHJhd2VyLmpzP2E2NzMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZml4RmFjdG9yID0gTWF0aC5zcXJ0KDIpO1xuZXhwb3J0IGNsYXNzIFNxdWFyZURyYXdlciB7XG4gICAgZHJhdyhjb250ZXh0LCBwYXJ0aWNsZSwgcmFkaXVzKSB7XG4gICAgICAgIGNvbnN0IGZpeGVkUmFkaXVzID0gcmFkaXVzIC8gZml4RmFjdG9yLCBmaXhlZERpYW1ldGVyID0gZml4ZWRSYWRpdXMgKiAyO1xuICAgICAgICBjb250ZXh0LnJlY3QoLWZpeGVkUmFkaXVzLCAtZml4ZWRSYWRpdXMsIGZpeGVkRGlhbWV0ZXIsIGZpeGVkRGlhbWV0ZXIpO1xuICAgIH1cbiAgICBnZXRTaWRlc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gNDtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiZml4RmFjdG9yIiwiTWF0aCIsInNxcnQiLCJTcXVhcmVEcmF3ZXIiLCJkcmF3IiwiY29udGV4dCIsInBhcnRpY2xlIiwicmFkaXVzIiwiZml4ZWRSYWRpdXMiLCJmaXhlZERpYW1ldGVyIiwicmVjdCIsImdldFNpZGVzQ291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-square/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSquareShape: () => (/* binding */ loadSquareShape)\n/* harmony export */ });\n/* harmony import */ var _SquareDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SquareDrawer */ \"(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js\");\n\nasync function loadSquareShape(engine, refresh = true) {\n    await engine.addShape([\n        \"edge\",\n        \"square\"\n    ], new _SquareDrawer__WEBPACK_IMPORTED_MODULE_0__.SquareDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QyxlQUFlQyxnQkFBZ0JDLE1BQU0sRUFBRUMsVUFBVSxJQUFJO0lBQ3hELE1BQU1ELE9BQU9FLFFBQVEsQ0FBQztRQUFDO1FBQVE7S0FBUyxFQUFFLElBQUlKLHVEQUFZQSxJQUFJRztBQUNsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9pbmRleC5qcz9jNzAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNxdWFyZURyYXdlciB9IGZyb20gXCIuL1NxdWFyZURyYXdlclwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRTcXVhcmVTaGFwZShlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFNoYXBlKFtcImVkZ2VcIiwgXCJzcXVhcmVcIl0sIG5ldyBTcXVhcmVEcmF3ZXIoKSwgcmVmcmVzaCk7XG59XG4iXSwibmFtZXMiOlsiU3F1YXJlRHJhd2VyIiwibG9hZFNxdWFyZVNoYXBlIiwiZW5naW5lIiwicmVmcmVzaCIsImFkZFNoYXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/esm/index.js\n");

/***/ })

};
;