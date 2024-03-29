<<<<<<< HEAD
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6287:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "NewTodo_wrapper__PNad7",
	"inputWrapper": "NewTodo_inputWrapper__WBt0k",
	"input": "NewTodo_input__WR2v3",
	"icon": "NewTodo_icon__ycbqz",
	"addBtn": "NewTodo_addBtn__0Vddt"
};


/***/ }),

/***/ 1602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/connectDb.js
var connectDb = __webpack_require__(3895);
// EXTERNAL MODULE: ./models/Todo.js
var Todo = __webpack_require__(4605);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: ./components/todo/NewTodo.module.css
var NewTodo_module = __webpack_require__(6287);
var NewTodo_module_default = /*#__PURE__*/__webpack_require__.n(NewTodo_module);
// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(197);
;// CONCATENATED MODULE: ./components/todo/NewTodo.js





function NewTodo({ onSubmit , todo , setTodo , todoDescription , settodoDescription ,  }) {
    const { 0: inputOnFocus , 1: setInputOnFocus  } = (0,external_react_.useState)(false);
    const input = (0,external_react_.useRef)();
    const submitHandler = (ev)=>{
        setTodo("");
        settodoDescription("");
        setInputOnFocus(false);
        input.current.value = "";
        onSubmit(todo);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                name: "todo",
                className: `${(NewTodo_module_default()).input} `,
                placeholder: "Add a task",
                value: todo,
                onChange: (ev)=>setTodo(ev.target.value)
                ,
                onFocus: (ev)=>setInputOnFocus(true)
                ,
                autoComplete: "off",
                ref: input,
                style: {
                    border: "2px solid #8282de",
                    padding: "0.5rem",
                    marginTop: "2rem",
                    borderRadius: "10px"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        type: "text",
                        name: "todo",
                        className: `${(NewTodo_module_default()).input} `,
                        placeholder: "Description",
                        value: todoDescription,
                        onChange: (ev)=>settodoDescription(ev.target.value)
                        ,
                        onFocus: (ev)=>setInputOnFocus(true)
                        ,
                        autoComplete: "off",
                        ref: input,
                        style: {
                            border: "2px solid #8282de",
                            padding: "0.5rem",
                            marginTop: "1rem",
                            borderRadius: "10px"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        style: {
                            background: " #8282de",
                            fontSize: "1.2rem",
                            color: "white",
                            // border: " 2px solid",
                            alignSelf: "flex-end"
                        },
                        disabled: !todo.trim() || !todoDescription.trim(),
                        className: (NewTodo_module_default()).addBtn,
                        onClick: submitHandler,
                        children: [
                            "Add",
                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_regular_svg_icons_.faPlusSquare
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const todo_NewTodo = (NewTodo);

// EXTERNAL MODULE: ./components/todo/TodoList.js + 1 modules
var TodoList = __webpack_require__(6542);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.js








function Home({ todos  }) {
    const { 0: tasks , 1: setTasks  } = (0,external_react_.useState)(todos);
    const { 0: todo1 , 1: setTodo  } = (0,external_react_.useState)('');
    const { 0: todoDescription , 1: settodoDescription  } = (0,external_react_.useState)('');
    const onSubmitHandler = async (todo)=>{
        try {
            console.log(todo);
            const response = await external_axios_default()({
                method: 'POST',
                url: '/api/new',
                data: {
                    content: todo,
                    description: todoDescription
                }
            });
            setTasks((prev)=>[
                    ...prev,
                    {
                        ...response.data.todo,
                        _id: response.data.todo._id.toString()
                    }, 
                ]
            );
        } catch (err) {
            console.error(err.message);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Todos || Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Todos || Manage your tasks easily"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(todo_NewTodo, {
                onSubmit: onSubmitHandler,
                todo: todo1,
                setTodo: setTodo,
                todoDescription: todoDescription,
                settodoDescription: settodoDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TodoList/* default */.Z, {
                todos: tasks,
                setTodo: setTodo,
                todoDescription: todoDescription,
                settodoDescription: settodoDescription
            })
        ]
    }));
}
async function getServerSideProps() {
    await (0,connectDb/* default */.Z)();
    const todos = await Todo/* default.find */.Z.find({
    });
    return {
        props: {
            todos: todos.map((todo)=>({
                    _id: todo._id.toString(),
                    content: todo.content,
                    description: todo.description,
                    important: todo.important,
                    task_done: todo.task_done
                })
            )
        }
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 197:
=======
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/todo/NewTodo.module.css":
/*!********************************************!*\
  !*** ./components/todo/NewTodo.module.css ***!
  \********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"NewTodo_wrapper__PNad7\",\n\t\"inputWrapper\": \"NewTodo_inputWrapper__WBt0k\",\n\t\"input\": \"NewTodo_input__WR2v3\",\n\t\"focused\": \"NewTodo_focused__nD7M4\",\n\t\"icon\": \"NewTodo_icon__ycbqz\",\n\t\"addBtn\": \"NewTodo_addBtn__0Vddt\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG8vTmV3VG9kby5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vY29tcG9uZW50cy90b2RvL05ld1RvZG8ubW9kdWxlLmNzcz80MmEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJOZXdUb2RvX3dyYXBwZXJfX1BOYWQ3XCIsXG5cdFwiaW5wdXRXcmFwcGVyXCI6IFwiTmV3VG9kb19pbnB1dFdyYXBwZXJfX1dCdDBrXCIsXG5cdFwiaW5wdXRcIjogXCJOZXdUb2RvX2lucHV0X19XUjJ2M1wiLFxuXHRcImZvY3VzZWRcIjogXCJOZXdUb2RvX2ZvY3VzZWRfX25EN000XCIsXG5cdFwiaWNvblwiOiBcIk5ld1RvZG9faWNvbl9feWNicXpcIixcblx0XCJhZGRCdG5cIjogXCJOZXdUb2RvX2FkZEJ0bl9fMFZkZHRcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/todo/NewTodo.module.css\n");

/***/ }),

/***/ "./components/todo/TodoItem.module.css":
/*!*********************************************!*\
  !*** ./components/todo/TodoItem.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"todoItem\": \"TodoItem_todoItem__Fxmfn\",\n\t\"todoContent\": \"TodoItem_todoContent__CiXR7\",\n\t\"starIconDiv\": \"TodoItem_starIconDiv__nugqs\",\n\t\"trashIcon\": \"TodoItem_trashIcon__a1_oi\",\n\t\"circle\": \"TodoItem_circle__UWHpO\",\n\t\"checkmark\": \"TodoItem_checkmark__iE6mi\",\n\t\"taskDone\": \"TodoItem_taskDone__dWkpQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG8vVG9kb0l0ZW0ubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vY29tcG9uZW50cy90b2RvL1RvZG9JdGVtLm1vZHVsZS5jc3M/YzgxZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0b2RvSXRlbVwiOiBcIlRvZG9JdGVtX3RvZG9JdGVtX19GeG1mblwiLFxuXHRcInRvZG9Db250ZW50XCI6IFwiVG9kb0l0ZW1fdG9kb0NvbnRlbnRfX0NpWFI3XCIsXG5cdFwic3Rhckljb25EaXZcIjogXCJUb2RvSXRlbV9zdGFySWNvbkRpdl9fbnVncXNcIixcblx0XCJ0cmFzaEljb25cIjogXCJUb2RvSXRlbV90cmFzaEljb25fX2ExX29pXCIsXG5cdFwiY2lyY2xlXCI6IFwiVG9kb0l0ZW1fY2lyY2xlX19VV0hwT1wiLFxuXHRcImNoZWNrbWFya1wiOiBcIlRvZG9JdGVtX2NoZWNrbWFya19faUU2bWlcIixcblx0XCJ0YXNrRG9uZVwiOiBcIlRvZG9JdGVtX3Rhc2tEb25lX19kV2twUVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/todo/TodoItem.module.css\n");

/***/ }),

/***/ "./components/todo/NewTodo.js":
/*!************************************!*\
  !*** ./components/todo/NewTodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NewTodo_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewTodo.module.css */ \"./components/todo/NewTodo.module.css\");\n/* harmony import */ var _NewTodo_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NewTodo_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"@fortawesome/free-regular-svg-icons\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction NewTodo({ onSubmit , todo , setTodo , todoDescription , settodoDescription ,  }) {\n    const { 0: inputOnFocus , 1: setInputOnFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const input = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const submitHandler = (ev)=>{\n        setTodo(\"\");\n        settodoDescription(\"\");\n        setInputOnFocus(false);\n        input.current.value = \"\";\n        onSubmit(todo);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"text\",\n                name: \"todo\",\n                className: `${(_NewTodo_module_css__WEBPACK_IMPORTED_MODULE_4___default().input)} `,\n                placeholder: \"Add a task\",\n                value: todo,\n                onChange: (ev)=>setTodo(ev.target.value)\n                ,\n                onFocus: (ev)=>setInputOnFocus(true)\n                ,\n                autoComplete: \"off\",\n                ref: input,\n                style: {\n                    border: \"5px solid #8282de\",\n                    padding: \"0.5rem\",\n                    marginTop: \"2rem\",\n                    borderRadius: \"10px\"\n                },\n                __source: {\n                    fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/NewTodo.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                __source: {\n                    fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/NewTodo.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"textarea\", {\n                        type: \"text\",\n                        name: \"todo\",\n                        className: `${(_NewTodo_module_css__WEBPACK_IMPORTED_MODULE_4___default().input)} `,\n                        placeholder: \"Description\",\n                        value: todoDescription,\n                        onChange: (ev)=>settodoDescription(ev.target.value)\n                        ,\n                        onFocus: (ev)=>setInputOnFocus(true)\n                        ,\n                        autoComplete: \"off\",\n                        ref: input,\n                        style: {\n                            border: \"5px solid #8282de\",\n                            padding: \"0.5rem\",\n                            marginTop: \"0.5rem\",\n                            borderRadius: \"10px\"\n                        },\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/NewTodo.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        style: {\n                            marginLeft: \"1rem\",\n                            background: \"transparent\",\n                            fontSize: \"2rem\",\n                            border: \" 0rem\"\n                        },\n                        disabled: !todo.trim() || !todoDescription.trim(),\n                        className: (_NewTodo_module_css__WEBPACK_IMPORTED_MODULE_4___default().addBtn),\n                        onClick: submitHandler,\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/NewTodo.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlusSquare,\n                            __source: {\n                                fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/NewTodo.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTodo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3RvZG8tYXBwLy4vY29tcG9uZW50cy90b2RvL05ld1RvZG8uanM/ZDc2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9OZXdUb2RvLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGZhUGx1c1NxdWFyZSBhcyBmYVBsdXNTcXVhcmUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcblxuZnVuY3Rpb24gTmV3VG9kbyh7XG4gIG9uU3VibWl0LFxuICB0b2RvLFxuICBzZXRUb2RvLFxuICB0b2RvRGVzY3JpcHRpb24sXG4gIHNldHRvZG9EZXNjcmlwdGlvbixcbn0pIHtcbiAgY29uc3QgW2lucHV0T25Gb2N1cywgc2V0SW5wdXRPbkZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaW5wdXQgPSB1c2VSZWYoKTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2KSA9PiB7XG4gICAgc2V0VG9kbyhcIlwiKTtcbiAgICBzZXR0b2RvRGVzY3JpcHRpb24oXCJcIik7XG4gICAgc2V0SW5wdXRPbkZvY3VzKGZhbHNlKTtcbiAgICBpbnB1dC5jdXJyZW50LnZhbHVlID0gXCJcIjtcbiAgICBvblN1Ym1pdCh0b2RvKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwidG9kb1wiXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5pbnB1dH0gYH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSB0YXNrXCJcbiAgICAgICAgdmFsdWU9e3RvZG99XG4gICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHNldFRvZG8oZXYudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25Gb2N1cz17KGV2KSA9PiBzZXRJbnB1dE9uRm9jdXModHJ1ZSl9XG4gICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIHJlZj17aW5wdXR9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYm9yZGVyOiBcIjVweCBzb2xpZCAjODI4MmRlXCIsXG4gICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMnJlbVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0b2RvXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuaW5wdXR9IGB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgdmFsdWU9e3RvZG9EZXNjcmlwdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiBzZXR0b2RvRGVzY3JpcHRpb24oZXYudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBvbkZvY3VzPXsoZXYpID0+IHNldElucHV0T25Gb2N1cyh0cnVlKX1cbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIHJlZj17aW5wdXR9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJvcmRlcjogXCI1cHggc29saWQgIzgyODJkZVwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIwLjVyZW1cIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvdGV4dGFyZWE+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIgMHJlbVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzYWJsZWQ9eyF0b2RvLnRyaW0oKSB8fCAhdG9kb0Rlc2NyaXB0aW9uLnRyaW0oKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWRkQnRufVxuICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEhhbmRsZXJ9XG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUGx1c1NxdWFyZX0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3VG9kbztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIkZvbnRBd2Vzb21lSWNvbiIsImNsYXNzZXMiLCJmYVBsdXNTcXVhcmUiLCJOZXdUb2RvIiwib25TdWJtaXQiLCJ0b2RvIiwic2V0VG9kbyIsInRvZG9EZXNjcmlwdGlvbiIsInNldHRvZG9EZXNjcmlwdGlvbiIsImlucHV0T25Gb2N1cyIsInNldElucHV0T25Gb2N1cyIsImlucHV0Iiwic3VibWl0SGFuZGxlciIsImV2IiwiY3VycmVudCIsInZhbHVlIiwidHlwZSIsIm5hbWUiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25Gb2N1cyIsImF1dG9Db21wbGV0ZSIsInJlZiIsInN0eWxlIiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImRpdiIsImRpc3BsYXkiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kIiwiZm9udFNpemUiLCJkaXNhYmxlZCIsInRyaW0iLCJhZGRCdG4iLCJvbkNsaWNrIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/todo/NewTodo.js\n");

/***/ }),

/***/ "./components/todo/TodoItem.js":
/*!*************************************!*\
  !*** ./components/todo/TodoItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoItem.module.css */ \"./components/todo/TodoItem.module.css\");\n/* harmony import */ var _TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"@fortawesome/free-regular-svg-icons\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nfunction TodoItem({ content , _id , description , important , task_done , setTodo , todoDescription , settodoDescription  }) {\n    const { 0: starChecked , 1: setStarChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(important);\n    const { 0: taskDone , 1: setTaskDone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(task_done);\n    const setMarkAsImportantHandler = async (ev)=>{\n        const todoElement = ev.currentTarget.parentElement.parentElement;\n        const taskId = todoElement.getAttribute('data-id');\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5___default()({\n                method: 'PATCH',\n                url: `/api/todo/${taskId}`,\n                data: {\n                    important: !starChecked\n                }\n            });\n            setStarChecked((prev)=>!prev\n            );\n            console.log('Task Marked as important: ', taskId);\n            console.log(response);\n        } catch (err) {\n            console.error(err.message);\n        }\n    };\n    const setTaskDoneHandler = async (ev)=>{\n        const todoElement = ev.currentTarget.parentElement;\n        const taskId = todoElement.getAttribute('data-id');\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5___default()({\n                method: 'PATCH',\n                url: `/api/todo/${taskId}`,\n                data: {\n                    task_done: !taskDone\n                }\n            });\n            console.warn('Marked as done: ', taskId);\n            setTaskDone((prev)=>!prev\n            );\n            console.log(response);\n        } catch (err) {\n            console.error(err.message);\n        }\n    };\n    const deleteTodoHandler = async (ev)=>{\n        const todoElement = ev.currentTarget.parentElement.parentElement;\n        const taskId = todoElement.getAttribute('data-id');\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5___default()({\n                method: 'DELETE',\n                url: `/api/todo/${taskId}`\n            });\n            todoElement.remove();\n            console.log('Task deleted: ', taskId);\n        } catch (err) {\n            console.error(err.message);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"article\", {\n        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().todoItem),\n        \"data-id\": _id,\n        style: {\n            display: \"flex\",\n            alignItems: \"center\"\n        },\n        __source: {\n            fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n            lineNumber: 63,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    marginRight: \"1rem\"\n                },\n                className: `${(_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().circle)} ${taskDone ? (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().taskDone) : ''}`,\n                onClick: setTaskDoneHandler,\n                __source: {\n                    fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                    className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().checkmark),\n                    __source: {\n                        fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                __source: {\n                    fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().todoContent),\n                        style: {\n                            left: \"-1rem\"\n                        },\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: content\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", {\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().todoContent),\n                        style: {\n                            fontSize: \"0.8rem\",\n                            left: \"-0.8rem\"\n                        },\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: description\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().starIconDiv),\n                __source: {\n                    fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n                    lineNumber: 79,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPencilAlt,\n                        onClick: (ev)=>{\n                            setTodo(content);\n                            settodoDescription(description);\n                            deleteTodoHandler(ev);\n                        },\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        },\n                        __self: this\n                    }),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        icon: starChecked ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar : _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faStar,\n                        onClick: setMarkAsImportantHandler,\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n                            lineNumber: 88,\n                            columnNumber: 17\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTrashAlt,\n                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_6___default().trashIcon),\n                        onClick: deleteTodoHandler,\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoItem.js\",\n                            lineNumber: 92,\n                            columnNumber: 17\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUMsQ0FBUTs0QkFBRUgsSUFBSSxFQUFDLENBQVM7d0JBQUEsQ0FBQzs7Ozs7OztrQ0FBRy9DLFdBQVc7Ozs7a0ZBRzNGc0MsQ0FBRztnQkFBQ04sU0FBUyxFQUFFM0MseUVBQW1COzs7Ozs7Ozt5RkFDOUJDLDJFQUFlO3dCQUNaOEQsSUFBSSxFQUFFeEQsMEVBQVc7d0JBQ2pCNkMsT0FBTyxHQUFHOUIsRUFBRSxHQUFHLENBQUM7NEJBQ1pSLE9BQU8sQ0FBQ0wsT0FBTzs0QkFDZk8sa0JBQWtCLENBQUNMLFdBQVc7NEJBQzlCNkIsaUJBQWlCLENBQUNsQixFQUFFO3dCQUN4QixDQUFDOzs7Ozs7OztvQkFDRixDQUFHO3lGQUNMckIsMkVBQWU7d0JBQ1o4RCxJQUFJLEVBQUU5QyxXQUFXLEdBQUdmLHFFQUFNLEdBQUdDLHVFQUFPO3dCQUNwQ2lELE9BQU8sRUFBRS9CLHlCQUF5Qjs7Ozs7Ozs7eUZBRXJDcEIsMkVBQWU7d0JBQ1o4RCxJQUFJLEVBQUUxRCwyRUFBVzt3QkFDakJzQyxTQUFTLEVBQUUzQyx1RUFBaUI7d0JBQzVCb0QsT0FBTyxFQUFFWixpQkFBaUI7Ozs7Ozs7Ozs7OztBQU85QyxDQUFDO0FBRUQsaUVBQWVoQyxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL2NvbXBvbmVudHMvdG9kby9Ub2RvSXRlbS5qcz80NjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9Ub2RvSXRlbS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFTdGFyIGFzIGZhclN0YXIsIGZhVHJhc2hBbHQgYXMgZmFyVHJhc2hBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgZmFQZW5jaWxBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5mdW5jdGlvbiBUb2RvSXRlbSh7IGNvbnRlbnQsIF9pZCxkZXNjcmlwdGlvbiwgaW1wb3J0YW50LCB0YXNrX2RvbmUsIHNldFRvZG8sdG9kb0Rlc2NyaXB0aW9uLCBzZXR0b2RvRGVzY3JpcHRpb24gfSkge1xuICAgIGNvbnN0IFtzdGFyQ2hlY2tlZCwgc2V0U3RhckNoZWNrZWRdID0gdXNlU3RhdGUoaW1wb3J0YW50KTtcbiAgICBjb25zdCBbdGFza0RvbmUsIHNldFRhc2tEb25lXSA9IHVzZVN0YXRlKHRhc2tfZG9uZSk7XG5cbiAgICBjb25zdCBzZXRNYXJrQXNJbXBvcnRhbnRIYW5kbGVyID0gYXN5bmMgZXYgPT4ge1xuICAgICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGV2LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCB0YXNrSWQgPSB0b2RvRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgICAgICB1cmw6IGAvYXBpL3RvZG8vJHt0YXNrSWR9YCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGltcG9ydGFudDogIXN0YXJDaGVja2VkIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFN0YXJDaGVja2VkKHByZXYgPT4gIXByZXYpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rhc2sgTWFya2VkIGFzIGltcG9ydGFudDogJywgdGFza0lkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRUYXNrRG9uZUhhbmRsZXIgPSBhc3luYyBldiA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZXYuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCB0YXNrSWQgPSB0b2RvRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgICAgICB1cmw6IGAvYXBpL3RvZG8vJHt0YXNrSWR9YCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHRhc2tfZG9uZTogIXRhc2tEb25lIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTWFya2VkIGFzIGRvbmU6ICcsIHRhc2tJZCk7XG4gICAgICAgICAgICBzZXRUYXNrRG9uZShwcmV2ID0+ICFwcmV2KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVUb2RvSGFuZGxlciA9IGFzeW5jIGV2ID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSBldi5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgdGFza0lkID0gdG9kb0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgIHVybDogYC9hcGkvdG9kby8ke3Rhc2tJZH1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2RvRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUYXNrIGRlbGV0ZWQ6ICcsIHRhc2tJZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZG9JdGVtfSBkYXRhLWlkPXtfaWR9IHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OlwiMXJlbVwifX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuY2lyY2xlfSAke3Rhc2tEb25lID8gY2xhc3Nlcy50YXNrRG9uZSA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17c2V0VGFza0RvbmVIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2ttYXJrfT48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJ9fT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudG9kb0NvbnRlbnR9IHN0eWxlPXt7IGxlZnQ6XCItMXJlbVwifX0+e2NvbnRlbnR9PC9oMT5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbGFzc2VzLnRvZG9Db250ZW50fSBzdHlsZT17e2ZvbnRTaXplOlwiMC44cmVtXCIsIGxlZnQ6XCItMC44cmVtXCJ9fT57ZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFySWNvbkRpdn0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICBpY29uPXtmYVBlbmNpbEFsdH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9kbyhjb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dG9kb0Rlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVG9kb0hhbmRsZXIoZXYpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICBpY29uPXtzdGFyQ2hlY2tlZCA/IGZhU3RhciA6IGZhclN0YXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldE1hcmtBc0ltcG9ydGFudEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICAgIGljb249e2ZhclRyYXNoQWx0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudHJhc2hJY29ufVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVUb2RvSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3Rhckljb25EaXZ9PiAqL31cbiAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvSXRlbTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJGb250QXdlc29tZUljb24iLCJmYVN0YXIiLCJmYXJTdGFyIiwiZmFUcmFzaEFsdCIsImZhclRyYXNoQWx0IiwiYXhpb3MiLCJmYVBlbmNpbEFsdCIsIlRvZG9JdGVtIiwiY29udGVudCIsIl9pZCIsImRlc2NyaXB0aW9uIiwiaW1wb3J0YW50IiwidGFza19kb25lIiwic2V0VG9kbyIsInRvZG9EZXNjcmlwdGlvbiIsInNldHRvZG9EZXNjcmlwdGlvbiIsInN0YXJDaGVja2VkIiwic2V0U3RhckNoZWNrZWQiLCJ0YXNrRG9uZSIsInNldFRhc2tEb25lIiwic2V0TWFya0FzSW1wb3J0YW50SGFuZGxlciIsImV2IiwidG9kb0VsZW1lbnQiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInRhc2tJZCIsImdldEF0dHJpYnV0ZSIsInJlc3BvbnNlIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInByZXYiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwic2V0VGFza0RvbmVIYW5kbGVyIiwid2FybiIsImRlbGV0ZVRvZG9IYW5kbGVyIiwicmVtb3ZlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsInRvZG9JdGVtIiwiZGF0YS1pZCIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJkaXYiLCJtYXJnaW5SaWdodCIsImNpcmNsZSIsIm9uQ2xpY2siLCJzcGFuIiwiY2hlY2ttYXJrIiwiZmxleERpcmVjdGlvbiIsImgxIiwidG9kb0NvbnRlbnQiLCJsZWZ0IiwiaHIiLCJoMyIsImZvbnRTaXplIiwic3Rhckljb25EaXYiLCJpY29uIiwidHJhc2hJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/todo/TodoItem.js\n");

/***/ }),

/***/ "./components/todo/TodoList.js":
/*!*************************************!*\
  !*** ./components/todo/TodoList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ \"./components/todo/TodoItem.js\");\n\n\n\n\nfunction TodoList({ todos , setTodo , todoDescription , settodoDescription  }) {\n    if (!todos || todos.length <= 0) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n            __source: {\n                fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoList.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                style: {\n                    marginLeft: '1.75em'\n                },\n                __source: {\n                    fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoList.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: \"No tasks yet. Click on the input to add a new task\"\n            })\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        style: {\n            marginTop: \"2rem\"\n        },\n        __source: {\n            fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoList.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        },\n        __self: this,\n        children: todos.map((todo)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_TodoItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...todo,\n                key: todo._id,\n                setTodo: setTodo,\n                todoDescription: todoDescription,\n                settodoDescription: settodoDescription,\n                __source: {\n                    fileName: \"/Users/kartikkartik/Desktop/To_do_list/components/todo/TodoList.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                },\n                __self: this\n            })\n        )\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG8vVG9kb0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUTtTQUV4QkUsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFFQyxPQUFPLEdBQUNDLGVBQWUsR0FBRUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkUsRUFBRSxHQUFHSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0ksTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzlCLE1BQU0sc0VBQ0RDLENBQU87Ozs7Ozs7MkZBQ0hDLENBQUM7Z0JBQUNDLEtBQUssRUFBRSxDQUFDO29CQUFDQyxVQUFVLEVBQUUsQ0FBUTtnQkFBQyxDQUFDOzs7Ozs7OzBCQUFFLENBRXBDOzs7SUFHWixDQUFDO0lBQ0QsTUFBTSxzRUFDREgsQ0FBTztRQUFDRSxLQUFLLEVBQUUsQ0FBQ0U7WUFBQUEsU0FBUyxFQUFDLENBQU07UUFBQSxDQUFDOzs7Ozs7O2tCQUM3QlQsS0FBSyxDQUFDVSxHQUFHLEVBQUNDLElBQUksc0VBQ1ZiLGlEQUFRO21CQUFLYSxJQUFJO2dCQUFFQyxHQUFHLEVBQUVELElBQUksQ0FBQ0UsR0FBRztnQkFBRVosT0FBTyxFQUFFQSxPQUFPO2dCQUFDQyxlQUFlLEVBQUVBLGVBQWU7Z0JBQUVDLGtCQUFrQixFQUFFQSxrQkFBa0I7Ozs7Ozs7Ozs7QUFJNUksQ0FBQztBQUVELGlFQUFlSixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL2NvbXBvbmVudHMvdG9kby9Ub2RvTGlzdC5qcz9lZTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSc7XG5cbmZ1bmN0aW9uIFRvZG9MaXN0KHsgdG9kb3MsIHNldFRvZG8sdG9kb0Rlc2NyaXB0aW9uLCBzZXR0b2RvRGVzY3JpcHRpb24gfSkge1xuICAgIGlmICghdG9kb3MgfHwgdG9kb3MubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxLjc1ZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICBObyB0YXNrcyB5ZXQuIENsaWNrIG9uIHRoZSBpbnB1dCB0byBhZGQgYSBuZXcgdGFza1xuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3ttYXJnaW5Ub3A6XCIycmVtXCJ9fT5cbiAgICAgICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXG4gICAgICAgICAgICAgICAgPFRvZG9JdGVtIHsuLi50b2RvfSBrZXk9e3RvZG8uX2lkfSBzZXRUb2RvPXtzZXRUb2RvfXRvZG9EZXNjcmlwdGlvbj17dG9kb0Rlc2NyaXB0aW9ufSBzZXR0b2RvRGVzY3JpcHRpb249e3NldHRvZG9EZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUb2RvSXRlbSIsIlRvZG9MaXN0IiwidG9kb3MiLCJzZXRUb2RvIiwidG9kb0Rlc2NyaXB0aW9uIiwic2V0dG9kb0Rlc2NyaXB0aW9uIiwibGVuZ3RoIiwic2VjdGlvbiIsInAiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJtYXAiLCJ0b2RvIiwia2V5IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/todo/TodoList.js\n");

/***/ }),

/***/ "./lib/connectDb.js":
/*!**************************!*\
  !*** ./lib/connectDb.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDb() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29ubmVjdERiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLFdBQVcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsRUFBRSxHQUFHQSxXQUFXLEVBQUUsQ0FBQztJQUNmLEtBQUssQ0FBQyxHQUFHLENBQUNHLEtBQUssQ0FBQyxDQUFzRTtBQUMxRixDQUFDO0FBRUQsR0FBRyxDQUFDQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ04sUUFBUTtBQUU1QixFQUFFLEdBQUdLLE1BQU0sRUFBRSxDQUFDO0lBQ1ZBLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRLEdBQUcsQ0FBQztRQUFDTyxJQUFJLEVBQUUsSUFBSTtRQUFFQyxPQUFPLEVBQUUsSUFBSTtJQUFDLENBQUM7QUFDNUQsQ0FBQztlQUVjQyxTQUFTLEdBQUcsQ0FBQztJQUN4QixFQUFFLEVBQUVKLE1BQU0sQ0FBQ0UsSUFBSSxFQUFFLENBQUM7UUFDZCxNQUFNLENBQUNGLE1BQU0sQ0FBQ0UsSUFBSTtJQUN0QixDQUFDO0lBRUQsRUFBRSxHQUFHRixNQUFNLENBQUNHLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLEtBQUssQ0FBQ0UsSUFBSSxHQUFHLENBQUM7WUFDVkMsY0FBYyxFQUFFLEtBQUs7UUFDekIsQ0FBQztRQUVETixNQUFNLENBQUNHLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLFdBQVcsRUFBRVMsSUFBSSxFQUFFRyxJQUFJLEVBQUNiLFFBQVEsR0FBSSxDQUFDO1lBQ25FLE1BQU0sQ0FBQ0EsUUFBUTtRQUNuQixDQUFDO0lBQ0wsQ0FBQztJQUNESyxNQUFNLENBQUNFLElBQUksR0FBRyxLQUFLLENBQUNGLE1BQU0sQ0FBQ0csT0FBTztJQUNsQyxNQUFNLENBQUNILE1BQU0sQ0FBQ0UsSUFBSTtBQUN0QixDQUFDO0FBRUQsaUVBQWVFLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vbGliL2Nvbm5lY3REYi5qcz84MTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJyk7XG59XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XG5cbmlmICghY2FjaGVkKSB7XG4gICAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYigpIHtcbiAgICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICAgIH1cblxuICAgIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4obW9uZ29vc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0RGIiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/connectDb.js\n");

/***/ }),

/***/ "./models/Todo.js":
/*!************************!*\
  !*** ./models/Todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TodoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    content: {\n        type: String,\n        required: [\n            true,\n            'Please provide a name for this task.'\n        ]\n    },\n    description: {\n        type: String,\n        required: [\n            true,\n            'Please provide a description for this task.'\n        ]\n    },\n    important: {\n        type: Boolean,\n        default: false\n    },\n    task_done: {\n        type: Boolean,\n        default: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Todo) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Todo', TodoSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvVG9kby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsS0FBSyxDQUFDQyxVQUFVLEdBQUcsR0FBRyxDQUFDRCx3REFBZSxDQUFDLENBQUM7SUFDcENHLE9BQU8sRUFBRSxDQUFDO1FBQ05DLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsQ0FBQztZQUFBLElBQUk7WUFBRSxDQUFzQztRQUFBLENBQUM7SUFDNUQsQ0FBQztJQUNEQyxXQUFXLEVBQUUsQ0FBQztRQUNWSCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLENBQUM7WUFBQSxJQUFJO1lBQUUsQ0FBNkM7UUFBQSxDQUFDO0lBQ25FLENBQUM7SUFDREUsU0FBUyxFQUFFLENBQUM7UUFDUkosSUFBSSxFQUFFSyxPQUFPO1FBQ2JDLE9BQU8sRUFBRSxLQUFLO0lBQ2xCLENBQUM7SUFDREMsU0FBUyxFQUFFLENBQUM7UUFDUlAsSUFBSSxFQUFFSyxPQUFPO1FBQ2JDLE9BQU8sRUFBRSxLQUFLO0lBQ2xCLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVWLDZEQUFvQixJQUFJQSxxREFBYyxDQUFDLENBQU0sT0FBRUMsVUFBVSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL21vZGVscy9Ub2RvLmpzP2NiMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgVG9kb1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgcHJvdmlkZSBhIG5hbWUgZm9yIHRoaXMgdGFzay4nXSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIHByb3ZpZGUgYSBkZXNjcmlwdGlvbiBmb3IgdGhpcyB0YXNrLiddLFxuICAgIH0sXG4gICAgaW1wb3J0YW50OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgdGFza19kb25lOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlRvZG8gfHwgbW9uZ29vc2UubW9kZWwoJ1RvZG8nLCBUb2RvU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlRvZG9TY2hlbWEiLCJTY2hlbWEiLCJjb250ZW50IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJpbXBvcnRhbnQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInRhc2tfZG9uZSIsIm1vZGVscyIsIlRvZG8iLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/Todo.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/connectDb */ \"./lib/connectDb.js\");\n/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Todo */ \"./models/Todo.js\");\n/* harmony import */ var _components_todo_NewTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/todo/NewTodo */ \"./components/todo/NewTodo.js\");\n/* harmony import */ var _components_todo_TodoList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/todo/TodoList */ \"./components/todo/TodoList.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction Home({ todos  }) {\n    const { 0: tasks , 1: setTasks  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todos);\n    const { 0: todo1 , 1: setTodo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: todoDescription , 1: settodoDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const onSubmitHandler = async (todo)=>{\n        try {\n            console.log(todo);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6___default()({\n                method: 'POST',\n                url: '/api/new',\n                data: {\n                    content: todo,\n                    description: todoDescription\n                }\n            });\n            setTasks((prev)=>[\n                    ...prev,\n                    {\n                        ...response.data.todo,\n                        _id: response.data.todo._id.toString()\n                    }, \n                ]\n            );\n        } catch (err) {\n            console.error(err.message);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                __source: {\n                    fileName: \"/Users/kartikkartik/Desktop/To_do_list/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"Todos || Home\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Todos || Manage your tasks easily\",\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\",\n                        __source: {\n                            fileName: \"/Users/kartikkartik/Desktop/To_do_list/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_todo_NewTodo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onSubmit: onSubmitHandler,\n                todo: todo1,\n                setTodo: setTodo,\n                todoDescription: todoDescription,\n                settodoDescription: settodoDescription,\n                __source: {\n                    fileName: \"/Users/kartikkartik/Desktop/To_do_list/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_todo_TodoList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                todos: tasks,\n                setTodo: setTodo,\n                todoDescription: todoDescription,\n                settodoDescription: settodoDescription,\n                __source: {\n                    fileName: \"/Users/kartikkartik/Desktop/To_do_list/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                },\n                __self: this\n            })\n        ]\n    }));\n}\nasync function getServerSideProps() {\n    await (0,_lib_connectDb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const todos = await _models_Todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n    });\n    return {\n        props: {\n            todos: todos.map((todo)=>({\n                    _id: todo._id.toString(),\n                    content: todo.content,\n                    description: todo.description,\n                    important: todo.important,\n                    task_done: todo.task_done\n                })\n            )\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUNMLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVoQyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY29ubmVjdERiIGZyb20gJy4uL2xpYi9jb25uZWN0RGInO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi4vbW9kZWxzL1RvZG8nO1xuaW1wb3J0IE5ld1RvZG8gZnJvbSAnLi4vY29tcG9uZW50cy90b2RvL05ld1RvZG8nO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdG9kby9Ub2RvTGlzdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZnVuY3Rpb24gSG9tZSh7IHRvZG9zIH0pIHtcbiAgICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKHRvZG9zKTtcbiAgICBjb25zdCBbdG9kbywgc2V0VG9kb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3RvZG9EZXNjcmlwdGlvbiwgc2V0dG9kb0Rlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IGFzeW5jIHRvZG8gPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kbyk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL25ldycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBjb250ZW50OiB0b2RvLCBkZXNjcmlwdGlvbjp0b2RvRGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGFza3MocHJldiA9PiBbXG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnJlc3BvbnNlLmRhdGEudG9kbyxcbiAgICAgICAgICAgICAgICAgICAgX2lkOiByZXNwb25zZS5kYXRhLnRvZG8uX2lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+VG9kb3MgfHwgSG9tZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1RvZG9zIHx8IE1hbmFnZSB5b3VyIHRhc2tzIGVhc2lseScgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxOZXdUb2RvIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9IHRvZG89e3RvZG99IHNldFRvZG89e3NldFRvZG99IFxuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uPXt0b2RvRGVzY3JpcHRpb259IHNldHRvZG9EZXNjcmlwdGlvbj17c2V0dG9kb0Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUb2RvTGlzdCBcbiAgICAgICAgICAgIHRvZG9zPXt0YXNrc30gc2V0VG9kbz17c2V0VG9kb30gXG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb249e3RvZG9EZXNjcmlwdGlvbn0gc2V0dG9kb0Rlc2NyaXB0aW9uPXtzZXR0b2RvRGVzY3JpcHRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGF3YWl0IGNvbm5lY3REYigpO1xuICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgVG9kby5maW5kKHt9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdG9kb3M6IHRvZG9zLm1hcCh0b2RvID0+ICh7XG4gICAgICAgICAgICAgICAgX2lkOiB0b2RvLl9pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRvZG8uY29udGVudCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdG9kby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IHRvZG8uaW1wb3J0YW50LFxuICAgICAgICAgICAgICAgIHRhc2tfZG9uZTogdG9kby50YXNrX2RvbmUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNvbm5lY3REYiIsIlRvZG8iLCJOZXdUb2RvIiwiVG9kb0xpc3QiLCJheGlvcyIsIkhlYWQiLCJIb21lIiwidG9kb3MiLCJ0YXNrcyIsInNldFRhc2tzIiwidG9kbyIsInNldFRvZG8iLCJ0b2RvRGVzY3JpcHRpb24iLCJzZXR0b2RvRGVzY3JpcHRpb24iLCJvblN1Ym1pdEhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwicHJldiIsIl9pZCIsInRvU3RyaW5nIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsIm9uU3VibWl0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZmluZCIsInByb3BzIiwibWFwIiwiaW1wb3J0YW50IiwidGFza19kb25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@fortawesome/free-regular-svg-icons":
/*!******************************************************!*\
  !*** external "@fortawesome/free-regular-svg-icons" ***!
  \******************************************************/
>>>>>>> daf1795927da2d71e7fda32ee847e5794b9052d5
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

<<<<<<< HEAD
/***/ 6466:
=======
/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
>>>>>>> daf1795927da2d71e7fda32ee847e5794b9052d5
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

<<<<<<< HEAD
/***/ 7197:
=======
/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
>>>>>>> daf1795927da2d71e7fda32ee847e5794b9052d5
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

<<<<<<< HEAD
/***/ 2167:
=======
/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
>>>>>>> daf1795927da2d71e7fda32ee847e5794b9052d5
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

<<<<<<< HEAD
/***/ 1185:
=======
/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
>>>>>>> daf1795927da2d71e7fda32ee847e5794b9052d5
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

<<<<<<< HEAD
/***/ 968:
=======
/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
>>>>>>> daf1795927da2d71e7fda32ee847e5794b9052d5
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

<<<<<<< HEAD
/***/ 6689:
=======
/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
>>>>>>> daf1795927da2d71e7fda32ee847e5794b9052d5
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

<<<<<<< HEAD
/***/ 997:
=======
/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
>>>>>>> daf1795927da2d71e7fda32ee847e5794b9052d5
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
<<<<<<< HEAD
var __webpack_exports__ = __webpack_require__.X(0, [130], () => (__webpack_exec__(1602)));
=======
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
>>>>>>> daf1795927da2d71e7fda32ee847e5794b9052d5
module.exports = __webpack_exports__;

})();