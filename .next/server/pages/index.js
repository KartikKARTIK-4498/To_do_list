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
	"focused": "NewTodo_focused__nD7M4",
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
                    border: "5px solid #8282de",
                    padding: "0.5rem",
                    marginTop: "2rem",
                    borderRadius: "10px"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex"
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
                            border: "5px solid #8282de",
                            padding: "0.5rem",
                            marginTop: "0.5rem",
                            borderRadius: "10px"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        style: {
                            marginLeft: "1rem",
                            background: "transparent",
                            fontSize: "2rem",
                            border: " 0rem"
                        },
                        disabled: !todo.trim() || !todoDescription.trim(),
                        className: (NewTodo_module_default()).addBtn,
                        onClick: submitHandler,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            icon: free_regular_svg_icons_.faPlusSquare
                        })
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
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
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
var __webpack_exports__ = __webpack_require__.X(0, [130], () => (__webpack_exec__(1602)));
module.exports = __webpack_exports__;

})();