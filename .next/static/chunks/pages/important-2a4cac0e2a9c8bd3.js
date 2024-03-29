(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{3796:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/important",function(){return n(9276)}])},6542:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var o=n(5893),r=n(7294),a=n(8520),c=n.n(a),s=n(8758),i=n.n(s),l=n(2814),d=n(1436),u=n(6024),m=n(9669),p=n.n(m);function f(e,t,n,o,r,a,c){try{var s=e[a](c),i=s.value}catch(l){return void n(l)}s.done?t(i):Promise.resolve(i).then(o,r)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function c(e){f(a,o,r,c,s,"next",e)}function s(e){f(a,o,r,c,s,"throw",e)}c(void 0)}))}}var v=function(e){var t=e.content,n=e._id,a=e.description,s=e.important,m=e.task_done,f=e.setTodo,v=(e.todoDescription,e.settodoDescription),_=(0,r.useState)(s),k=_[0],x=_[1],g=(0,r.useState)(m),j=g[0],T=g[1],w=h(c().mark((function e(t){var n,o,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.currentTarget.parentElement.parentElement,o=n.getAttribute("data-id"),e.prev=2,e.next=5,p()({method:"PATCH",url:"/api/todo/".concat(o),data:{important:!k}});case 5:r=e.sent,x((function(e){return!e})),console.log("Task Marked as important: ",o),console.log(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,11]])}))),y=h(c().mark((function e(t){var n,o,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.currentTarget.parentElement,o=n.getAttribute("data-id"),e.prev=2,e.next=5,p()({method:"PATCH",url:"/api/todo/".concat(o),data:{task_done:!j}});case 5:r=e.sent,console.warn("Marked as done: ",o),T((function(e){return!e})),console.log(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,11]])}))),b=h(c().mark((function e(t){var n,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.currentTarget.parentElement.parentElement,o=n.getAttribute("data-id"),e.prev=2,e.next=5,p()({method:"DELETE",url:"/api/todo/".concat(o)});case 5:e.sent,n.remove(),console.log("Task deleted: ",o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return(0,o.jsxs)("article",{className:i().todoItem,"data-id":n,style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)("div",{style:{marginRight:"1rem"},className:"".concat(i().circle," ").concat(j?i().taskDone:""),onClick:y,children:(0,o.jsx)("span",{className:i().checkmark})}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"80%"},children:[(0,o.jsx)("h1",{className:i().todoContent,style:{left:"-1rem"},children:t}),(0,o.jsx)("hr",{}),(0,o.jsx)("h3",{className:i().todoContent,style:{fontSize:"0.8rem",left:"-0.8rem"},children:a})]}),(0,o.jsxs)("div",{className:i().starIconDiv,children:[(0,o.jsx)(l.G,{icon:d.UJf,onClick:function(e){f(t),v(a),b(e)}})," ",(0,o.jsx)(l.G,{icon:k?d.Tab:u.T,onClick:w}),(0,o.jsx)(l.G,{icon:u.I7,className:i().trashIcon,onClick:b})]})]})};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){var t=e.todos,n=e.setTodo,a=e.todoDescription,c=e.settodoDescription;return!t||t.length<=0?(0,o.jsx)("section",{children:(0,o.jsx)("p",{style:{marginLeft:"1.75em"},children:"No tasks yet. Click on the input to add a new task"})}):(0,o.jsx)("section",{style:{marginTop:"2rem"},children:t.map((function(e){return(0,r.createElement)(v,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){_(e,t,n[t])}))}return e}({},e,{key:e._id,setTodo:n,todoDescription:a,settodoDescription:c}))}))})}},9276:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return s}});var o=n(5893),r=n(6542),a=n(9008),c=n(7294);var s=!0;t.default=function(e){var t=e.todos;return(0,o.jsxs)(c.Fragment,{children:[(0,o.jsxs)(a.default,{children:[(0,o.jsx)("title",{children:"Todos || Important"}),(0,o.jsx)("meta",{name:"description",content:"Todos || Manage your tasks easily"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,o.jsx)(r.Z,{todos:t})]})}},8758:function(e){e.exports={todoItem:"TodoItem_todoItem__Fxmfn",todoContent:"TodoItem_todoContent__CiXR7",starIconDiv:"TodoItem_starIconDiv__nugqs",trashIcon:"TodoItem_trashIcon__a1_oi",circle:"TodoItem_circle__UWHpO",checkmark:"TodoItem_checkmark__iE6mi",taskDone:"TodoItem_taskDone__dWkpQ"}}},function(e){e.O(0,[647,774,888,179],(function(){return t=3796,e(e.s=t);var t}));var t=e.O();_N_E=t}]);