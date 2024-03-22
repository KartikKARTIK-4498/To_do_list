exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 2728:
/***/ ((module) => {

// Exports
module.exports = {
	"todoItem": "TodoItem_todoItem__Fxmfn",
	"todoContent": "TodoItem_todoContent__CiXR7",
	"starIconDiv": "TodoItem_starIconDiv__nugqs",
	"trashIcon": "TodoItem_trashIcon__a1_oi",
	"circle": "TodoItem_circle__UWHpO",
	"checkmark": "TodoItem_checkmark__iE6mi",
	"taskDone": "TodoItem_taskDone__dWkpQ"
};


/***/ }),

/***/ 6542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ todo_TodoList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/todo/TodoItem.module.css
var TodoItem_module = __webpack_require__(2728);
var TodoItem_module_default = /*#__PURE__*/__webpack_require__.n(TodoItem_module);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(197);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/todo/TodoItem.js








function TodoItem({ content , _id , description , important , task_done , setTodo , todoDescription , settodoDescription  }) {
    const { 0: starChecked , 1: setStarChecked  } = (0,external_react_.useState)(important);
    const { 0: taskDone , 1: setTaskDone  } = (0,external_react_.useState)(task_done);
    const setMarkAsImportantHandler = async (ev)=>{
        const todoElement = ev.currentTarget.parentElement.parentElement;
        const taskId = todoElement.getAttribute('data-id');
        try {
            const response = await external_axios_default()({
                method: 'PATCH',
                url: `/api/todo/${taskId}`,
                data: {
                    important: !starChecked
                }
            });
            setStarChecked((prev)=>!prev
            );
            console.log('Task Marked as important: ', taskId);
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    };
    const setTaskDoneHandler = async (ev)=>{
        const todoElement = ev.currentTarget.parentElement;
        const taskId = todoElement.getAttribute('data-id');
        try {
            const response = await external_axios_default()({
                method: 'PATCH',
                url: `/api/todo/${taskId}`,
                data: {
                    task_done: !taskDone
                }
            });
            console.warn('Marked as done: ', taskId);
            setTaskDone((prev)=>!prev
            );
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    };
    const deleteTodoHandler = async (ev)=>{
        const todoElement = ev.currentTarget.parentElement.parentElement;
        const taskId = todoElement.getAttribute('data-id');
        try {
            const response = await external_axios_default()({
                method: 'DELETE',
                url: `/api/todo/${taskId}`
            });
            todoElement.remove();
            console.log('Task deleted: ', taskId);
        } catch (err) {
            console.error(err.message);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: (TodoItem_module_default()).todoItem,
        "data-id": _id,
        style: {
            display: "flex",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    marginRight: "1rem"
                },
                className: `${(TodoItem_module_default()).circle} ${taskDone ? (TodoItem_module_default()).taskDone : ''}`,
                onClick: setTaskDoneHandler,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (TodoItem_module_default()).checkmark
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (TodoItem_module_default()).todoContent,
                        style: {
                            left: "-1rem"
                        },
                        children: content
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (TodoItem_module_default()).todoContent,
                        style: {
                            fontSize: "0.8rem",
                            left: "-0.8rem"
                        },
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TodoItem_module_default()).starIconDiv,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: free_solid_svg_icons_.faPencilAlt,
                        onClick: (ev)=>{
                            setTodo(content);
                            settodoDescription(description);
                            deleteTodoHandler(ev);
                        }
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: starChecked ? free_solid_svg_icons_.faStar : free_regular_svg_icons_.faStar,
                        onClick: setMarkAsImportantHandler
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: free_regular_svg_icons_.faTrashAlt,
                        className: (TodoItem_module_default()).trashIcon,
                        onClick: deleteTodoHandler
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const todo_TodoItem = (TodoItem);

;// CONCATENATED MODULE: ./components/todo/TodoList.js




function TodoList({ todos , setTodo , todoDescription , settodoDescription  }) {
    if (!todos || todos.length <= 0) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    marginLeft: '1.75em'
                },
                children: "No tasks yet. Click on the input to add a new task"
            })
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        style: {
            marginTop: "2rem"
        },
        children: todos.map((todo)=>/*#__PURE__*/ (0,external_react_.createElement)(todo_TodoItem, {
                ...todo,
                key: todo._id,
                setTodo: setTodo,
                todoDescription: todoDescription,
                settodoDescription: settodoDescription
            })
        )
    }));
}
/* harmony default export */ const todo_TodoList = (TodoList);


/***/ }),

/***/ 3895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function connectDb() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);


/***/ }),

/***/ 4605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const TodoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    content: {
        type: String,
        required: [
            true,
            'Please provide a name for this task.'
        ]
    },
    description: {
        type: String,
        required: [
            true,
            'Please provide a description for this task.'
        ]
    },
    important: {
        type: Boolean,
        default: false
    },
    task_done: {
        type: Boolean,
        default: false
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Todo) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Todo', TodoSchema));


/***/ })

};
;