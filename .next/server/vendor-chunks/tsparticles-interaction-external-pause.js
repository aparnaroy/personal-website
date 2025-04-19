"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-pause";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-pause"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pauser: () => (/* binding */ Pauser)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js\");\n\nclass Pauser extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ExternalInteractorBase {\n    constructor(container){\n        super(container);\n        this.handleClickMode = (mode)=>{\n            if (mode !== \"pause\") {\n                return;\n            }\n            const container = this.container;\n            if (container.getAnimationStatus()) {\n                container.pause();\n            } else {\n                container.play();\n            }\n        };\n    }\n    clear() {}\n    init() {}\n    async interact() {}\n    isEnabled() {\n        return true;\n    }\n    reset() {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL1BhdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUNyRCxNQUFNQyxlQUFlRCxzRUFBc0JBO0lBQzlDRSxZQUFZQyxTQUFTLENBQUU7UUFDbkIsS0FBSyxDQUFDQTtRQUNOLElBQUksQ0FBQ0MsZUFBZSxHQUFHLENBQUNDO1lBQ3BCLElBQUlBLFNBQVMsU0FBUztnQkFDbEI7WUFDSjtZQUNBLE1BQU1GLFlBQVksSUFBSSxDQUFDQSxTQUFTO1lBQ2hDLElBQUlBLFVBQVVHLGtCQUFrQixJQUFJO2dCQUNoQ0gsVUFBVUksS0FBSztZQUNuQixPQUNLO2dCQUNESixVQUFVSyxJQUFJO1lBQ2xCO1FBQ0o7SUFDSjtJQUNBQyxRQUFRLENBQ1I7SUFDQUMsT0FBTyxDQUNQO0lBQ0EsTUFBTUMsV0FBVyxDQUNqQjtJQUNBQyxZQUFZO1FBQ1IsT0FBTztJQUNYO0lBQ0FDLFFBQVEsQ0FDUjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1pbnRlcmFjdGlvbi1leHRlcm5hbC1wYXVzZS9lc20vUGF1c2VyLmpzP2JkMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0ZXJuYWxJbnRlcmFjdG9yQmFzZSB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmV4cG9ydCBjbGFzcyBQYXVzZXIgZXh0ZW5kcyBFeHRlcm5hbEludGVyYWN0b3JCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja01vZGUgPSAobW9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1vZGUgIT09IFwicGF1c2VcIikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5nZXRBbmltYXRpb25TdGF0dXMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgfVxuICAgIGFzeW5jIGludGVyYWN0KCkge1xuICAgIH1cbiAgICBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiRXh0ZXJuYWxJbnRlcmFjdG9yQmFzZSIsIlBhdXNlciIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwiaGFuZGxlQ2xpY2tNb2RlIiwibW9kZSIsImdldEFuaW1hdGlvblN0YXR1cyIsInBhdXNlIiwicGxheSIsImNsZWFyIiwiaW5pdCIsImludGVyYWN0IiwiaXNFbmFibGVkIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/esm/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadExternalPauseInteraction: () => (/* binding */ loadExternalPauseInteraction)\n/* harmony export */ });\n/* harmony import */ var _Pauser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pauser */ \"(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js\");\n\nasync function loadExternalPauseInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalPause\", (container)=>new _Pauser__WEBPACK_IMPORTED_MODULE_0__.Pauser(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBQzNCLGVBQWVDLDZCQUE2QkMsTUFBTSxFQUFFQyxVQUFVLElBQUk7SUFDckUsTUFBTUQsT0FBT0UsYUFBYSxDQUFDLGlCQUFpQixDQUFDQyxZQUFjLElBQUlMLDJDQUFNQSxDQUFDSyxZQUFZRjtBQUN0RiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL2luZGV4LmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF1c2VyIH0gZnJvbSBcIi4vUGF1c2VyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEV4dGVybmFsUGF1c2VJbnRlcmFjdGlvbihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZEludGVyYWN0b3IoXCJleHRlcm5hbFBhdXNlXCIsIChjb250YWluZXIpID0+IG5ldyBQYXVzZXIoY29udGFpbmVyKSwgcmVmcmVzaCk7XG59XG4iXSwibmFtZXMiOlsiUGF1c2VyIiwibG9hZEV4dGVybmFsUGF1c2VJbnRlcmFjdGlvbiIsImVuZ2luZSIsInJlZnJlc2giLCJhZGRJbnRlcmFjdG9yIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/index.js\n");

/***/ })

};
;