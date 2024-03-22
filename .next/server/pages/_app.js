(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2631:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Layout_main__NgJgX",
	"oneItem": "Layout_oneItem__3v07F",
	"childrenParent": "Layout_childrenParent__kNndD"
};


/***/ }),

/***/ 5657:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "PageHeader_header__Bf2pn",
	"toggleSideBarSect": "PageHeader_toggleSideBarSect__Y0kme",
	"bars": "PageHeader_bars__Cl89H",
	"title": "PageHeader_title__1UfDP",
	"showBars": "PageHeader_showBars__Z38qi"
};


/***/ }),

/***/ 3010:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "SideBar_sidebar__t0_Fy",
	"toggleSideBarSect": "SideBar_toggleSideBarSect__FkSde",
	"bars": "SideBar_bars__83ceB",
	"ul": "SideBar_ul__MBA1q",
	"button": "SideBar_button__ykRkw",
	"buttonInner": "SideBar_buttonInner__5CCN9",
	"title": "SideBar_title__an0Z6",
	"active": "SideBar_active__dBHqA"
};


/***/ }),

/***/ 4829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__(197);
// EXTERNAL MODULE: ./components/layout/SideBar.module.css
var SideBar_module = __webpack_require__(3010);
var SideBar_module_default = /*#__PURE__*/__webpack_require__.n(SideBar_module);
;// CONCATENATED MODULE: ./components/hooks/usepagetitle.js

function usePageTitle(pathname) {
    switch(pathname){
        case '/':
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    fontSize: "2rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "blue"
                        },
                        children: "TO"
                    }),
                    "-",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "DO"
                    }),
                    "-",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "blue"
                        },
                        children: "LIST"
                    })
                ]
            }));
        case '/important':
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    fontSize: "2rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "blue"
                        },
                        children: "IMP"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "ORTANT"
                    }),
                    ' ',
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "blue"
                        },
                        children: "LIST"
                    })
                ]
            }));
        case '/pending':
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    fontSize: "2rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "blue"
                        },
                        children: "PEN"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "DING"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "blue"
                        },
                        children: "LIST"
                    })
                ]
            }));
        default:
            return '';
    }
}

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/layout/SideBar.js









function SideBar(props) {
    const router = (0,router_namespaceObject.useRouter)();
    const pageTitle = usePageTitle(router.pathname);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: (SideBar_module_default()).sidebar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (SideBar_module_default()).toggleSideBarSect,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SideBar_module_default()).toggleSideBar,
                    onClick: props.onClickHandler,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (SideBar_module_default()).bars,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (SideBar_module_default()).ul,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `${(SideBar_module_default()).button} ${pageTitle === 'Todo' ? (SideBar_module_default()).active : ''}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (SideBar_module_default()).buttonInner,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                        icon: free_regular_svg_icons_.faCalendar
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (SideBar_module_default()).title,
                                        children: "Todos"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `${(SideBar_module_default()).button} ${pageTitle === 'Important' ? (SideBar_module_default()).active : ''}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/important",
                            passHref: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (SideBar_module_default()).buttonInner,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                        icon: free_regular_svg_icons_.faStar
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (SideBar_module_default()).title,
                                        children: "Important"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `${(SideBar_module_default()).button} ${pageTitle === 'Pending' ? (SideBar_module_default()).active : ''}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/pending",
                            passHref: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (SideBar_module_default()).buttonInner,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                        icon: free_solid_svg_icons_.faTasks
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (SideBar_module_default()).title,
                                        children: "Pending"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const layout_SideBar = (SideBar);

// EXTERNAL MODULE: ./components/layout/PageHeader.module.css
var PageHeader_module = __webpack_require__(5657);
var PageHeader_module_default = /*#__PURE__*/__webpack_require__.n(PageHeader_module);
;// CONCATENATED MODULE: ./components/layout/PageHeader.js


function PageHeader({ title , showBars , onClickBars  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (PageHeader_module_default()).header,
        children: [
            showBars && /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (PageHeader_module_default()).toggleSideBarSect,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (PageHeader_module_default()).bars,
                    onClick: onClickBars,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `${(PageHeader_module_default()).title} ${showBars ? '' : (PageHeader_module_default()).showBars}`,
                children: title
            })
        ]
    }));
}
/* harmony default export */ const layout_PageHeader = (PageHeader);

// EXTERNAL MODULE: ./components/layout/Layout.module.css
var Layout_module = __webpack_require__(2631);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/layout/Layout.js







function Layout({ children  }) {
    const { 0: sideBarHidden , 1: setSideBarHidden  } = (0,external_react_.useState)(false);
    const router = (0,router_namespaceObject.useRouter)();
    const pageTitle = usePageTitle(router.pathname);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: `${(Layout_module_default()).main} ${sideBarHidden ? (Layout_module_default()).oneItem : ''}`,
        children: [
            !sideBarHidden && /*#__PURE__*/ jsx_runtime_.jsx(layout_SideBar, {
                onClickHandler: (ev)=>setSideBarHidden((prev)=>!prev
                    )
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Layout_module_default()).childrenParent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_PageHeader, {
                        title: pageTitle,
                        showBars: sideBarHidden ? true : false,
                        onClickBars: (ev)=>setSideBarHidden((prev)=>!prev
                            )
                    }),
                    children
                ]
            })
        ]
    }));
}
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


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

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(4829)));
module.exports = __webpack_exports__;

})();