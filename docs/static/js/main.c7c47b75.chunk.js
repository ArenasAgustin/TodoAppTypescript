(this["webpackJsonpwks-typescript"]=this["webpackJsonpwks-typescript"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(13),i=n.n(a),r=(n(30),n(31),n(3)),d=n(6),l=(n(32),n(1));function o(){return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)(d.b,{className:"link",to:"/",children:Object(l.jsx)("span",{children:"TODOS"})}),Object(l.jsx)(d.b,{className:"link",to:"/add",children:Object(l.jsx)("span",{children:"Add Todo"})})]})}var u=function(e){var t=e.title;return Object(l.jsx)("div",{children:t})},j=n(9);n(39);var O=function(e){var t=e.status,n=Object(j.c)((function(e){return e})).filter((function(e){return e.status===t}));return Object(l.jsxs)("div",{className:"carTodos",children:[Object(l.jsx)("span",{className:"titulos",children:t}),n.map((function(e){return Object(l.jsx)(d.b,{className:"tarea",to:"/edit/".concat(e.id),children:Object(l.jsx)(u,{title:e.title})},e.id)}))]})},b=(n(40),[{status:"Todo"},{status:"InProgress"},{status:"Done"}]);var v=function(){return Object(l.jsx)("div",{className:"TodoCards",children:b.map((function(e,t){var n=e.status;return Object(l.jsx)(O,{status:n},t)}))})},x=n(15),p=n(22),h=n(17),f="ADD_TODO",m="REMOVE_TODO",N="TODO_PROGRESS",D="TODO_DONE";var T={addTodo:function(e){var t=e.title,n=e.id,c=void 0===n?1:n,s=e.status,a=void 0===s?"Todo":s,i=e.date,r=e.place,d=e.description;return{type:f,payload:{title:t,id:c,status:a,date:i,place:r,description:d}}},ADD_TODO:f,removeTodo:function(e){var t=e.id;return{type:m,payload:{id:t}}},REMOVE_TODO:m,todoInProgress:function(e){var t=e.id;return{type:N,payload:{id:t}}},TODO_PROGRESS:N,todoDone:function(e){var t=e.id;return{type:D,payload:{id:t}}},TODO_DONE:D},E=(n(41),T.addTodo);function _(){var e=Object(j.b)(),t=s.a.useState({title:"",description:"",place:"",date:""}),n=Object(h.a)(t,2),c=n[0],a=n[1],i=function(e){a(Object(p.a)(Object(p.a)({},c),{},Object(x.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("form",{className:"form",onSubmit:function(t){return function(t){t.preventDefault(),e(E(c)),a({title:"",description:"",place:"",date:""})}(t)},children:[Object(l.jsxs)("div",{className:"divInput",children:[Object(l.jsx)("label",{className:"titulo",children:"Title"}),Object(l.jsx)("input",{name:"title",onChange:function(e){return i(e)},value:c.title,className:"input"})]}),Object(l.jsxs)("div",{className:"divInput",children:[Object(l.jsx)("label",{className:"titulo",children:"Description"}),Object(l.jsx)("textarea",{name:"description",onChange:function(e){return i(e)},value:c.description,className:"input"})]}),Object(l.jsxs)("div",{className:"divInput",children:[Object(l.jsx)("label",{className:"titulo",children:"Place"}),Object(l.jsx)("input",{name:"place",onChange:function(e){return i(e)},value:c.place,className:"input"})]}),Object(l.jsxs)("div",{className:"divInput",children:[Object(l.jsx)("label",{className:"titulo",children:"Date"}),Object(l.jsx)("input",{name:"date",onChange:function(e){return i(e)},value:c.date,className:"input"})]}),Object(l.jsx)("button",{type:"submit",className:"btn",children:"Add"})]})}n(42);var g=function(){var e,t=Object(j.c)((function(e){return e})),n=Object(j.b)(),s=Object(c.useState)(e),a=Object(h.a)(s,2),i=a[0],o=a[1],u=Object(r.e)().id;return Object(c.useEffect)((function(){e=t.find((function(e){return"number"===typeof e.id&&e.id.toString()===u})),o(e)})),Object(l.jsxs)("div",{className:"divDetail",children:[Object(l.jsxs)("div",{className:"divText",children:[Object(l.jsx)("label",{className:"detalle",children:"ToDo: "}),Object(l.jsx)("span",{className:"textos",children:null===i||void 0===i?void 0:i.title})]}),Object(l.jsxs)("div",{className:"divText",children:[Object(l.jsx)("label",{className:"detalle",children:"Description:"}),Object(l.jsx)("span",{className:"textos",children:null===i||void 0===i?void 0:i.description})]}),Object(l.jsxs)("div",{className:"divText",children:[Object(l.jsx)("label",{className:"detalle",children:"Place:"}),Object(l.jsx)("span",{className:"textos",children:null===i||void 0===i?void 0:i.place})]}),Object(l.jsxs)("div",{className:"divText",children:[Object(l.jsx)("label",{className:"detalle",children:"Date:"}),Object(l.jsx)("span",{className:"textos",children:null===i||void 0===i?void 0:i.date})]}),Object(l.jsxs)("div",{className:"btns",children:[Object(l.jsx)(d.b,{to:"/",children:Object(l.jsx)("button",{onClick:function(){return function(e){var t={id:e};n(T.todoDone(t))}(null===i||void 0===i?void 0:i.id)},className:"detalleBtn",children:"DONE"})}),Object(l.jsx)(d.b,{to:"/",children:Object(l.jsx)("button",{onClick:function(){return function(e){var t={id:e};n(T.todoInProgress(t))}(null===i||void 0===i?void 0:i.id)},className:"detalleBtn",children:"IN PROGRESS"})}),Object(l.jsx)(d.b,{to:"/",children:Object(l.jsx)("button",{onClick:function(){return function(e){var t={id:e};n(T.removeTodo(t))}(null===i||void 0===i?void 0:i.id)},className:"detalleBtn",children:"DELETE"})})]})]})};var y=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(r.a,{exact:!0,path:"/",render:function(){return Object(l.jsx)(v,{})}}),Object(l.jsx)(r.a,{path:"/add",render:function(){return Object(l.jsx)(_,{})}}),Object(l.jsx)(r.a,{path:"/edit/:id",render:function(){return Object(l.jsx)(g,{})}})]})},S=n(18),R=n(24),I=n(25),P=[],k=[],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case T.ADD_TODO:return c.id=e.length+1,[].concat(Object(I.a)(e),[c]);case T.REMOVE_TODO:return e.filter((function(e){return e.id!==c.id}));case T.TODO_PROGRESS:k=e;for(var s=0;s<k.length;s++)k[s].id===c.id&&(k[s].status="InProgress");return k;case T.TODO_DONE:k=e;for(var a=0;a<k.length;a++)k[a].id===c.id&&(k[a].status="Done");return k;default:return e}},C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.b,A=Object(S.c)(w,C(Object(S.a)(R.a)));i.a.render(Object(l.jsx)(j.a,{store:A,children:Object(l.jsx)(d.a,{children:Object(l.jsx)(y,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c7c47b75.chunk.js.map