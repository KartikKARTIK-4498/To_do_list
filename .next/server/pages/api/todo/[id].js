"use strict";
(() => {
var exports = {};
exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handler)
/* harmony export */ });
/* harmony import */ var _lib_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7792);
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2339);


async function Handler(req, res) {
    try {
        if (req.method === 'PATCH') {
            await (0,_lib_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const updatedTodo = await _models_Todo__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(req.query.id, {
                $set: req.body
            }, {
                new: true
            });
            res.status(201).json({
                message: 'Todo updated',
                updatedTodo
            });
        } else if (req.method === 'DELETE') {
            await (0,_lib_connectDb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const deletedTodo = await _models_Todo__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndDelete */ .Z.findByIdAndDelete(req.query.id);
            res.status(201).json({
                message: 'Todo deleted'
            });
        } else {
            res.status(400).json({
                message: 'Invalid HTTP method'
            });
            throw new Error('Invalid HTTP method');
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: err
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [396], () => (__webpack_exec__(4629)));
module.exports = __webpack_exports__;

})();