"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handler)
/* harmony export */ });
/* harmony import */ var _lib_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7792);
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2339);


async function Handler(req, res) {
    if (req.method === 'POST') {
        try {
            await (0,_lib_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const todo = await _models_Todo__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
                content: req.body.content,
                description: req.body.description,
                important: false,
                task_done: false
            });
            res.status(201).json({
                message: 'OK',
                todo: todo
            });
        } catch (err) {
            console.log('Error: ', err.message);
            res.status(500).json({
                message: 'FAILED',
                error: err.message
            });
        }
    } else {
        res.status(400).json({
            message: 'FAILED'
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [396], () => (__webpack_exec__(9991)));
module.exports = __webpack_exports__;

})();