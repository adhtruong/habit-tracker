(this["webpackJsonphabit-tracker"]=this["webpackJsonphabit-tracker"]||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n.n(r),i=n(11),s=n.n(i),o=n(12),l=n(40),d=n(7),u=(n(53),function(e){return e.habits});function j(e){var t=e.habitId,n=Object(o.c)(function(e){return function(t){return(n=e,function(e){return e.find((function(e){return e.id===n}))})(t.habits);var n}}(t));return n?Object(a.jsxs)("div",{children:["Habit ",n.name]}):Object(a.jsx)("div",{children:"Habit not found!"})}var b,h=n(69),O=n(70),f=n(37),x=n(14),m=n(19),p=n(72),v=n(73);!function(e){e.ADD_HABIT="ADD_HABIT",e.UPDATE_HABIT="UPDATE_HABIT",e.DELETE_HABIT="DELETE_HABIT"}(b||(b={}));var g=n(36),D=n.n(g),y=n(15),A=n(41),H=function(e){return e.length?Math.max.apply(null,e.map((function(e){return e.id})))+1:1},T=[];var E=Object(y.b)({habits:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.ADD_HABIT:var n=H(e),a=Object(x.a)({id:n,events:[]},t.payload);return[].concat(Object(A.a)(e),[a]);case b.UPDATE_HABIT:return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case b.DELETE_HABIT:return e.filter((function(e){return e.id!==t.payload.id}));default:return e}}}),I="persitantState",k=Object(y.c)(E,function(){try{var e=localStorage.getItem(I);if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}());k.subscribe(D()((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem(I,t)}catch(n){console.warn(n)}}(k.getState())}),1e3));var S=k,B=function(){var e=Object(r.useState)({name:"",detail:""}),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(p.a,{inline:!0,children:[Object(a.jsx)(p.a.Control,{className:"mb-2 mr-sm-2",placeholder:"Habit name...",type:"text",value:n.name,onChange:function(e){return c(Object(x.a)(Object(x.a)({},n),{},{name:e.target.value}))}}),Object(a.jsx)(p.a.Control,{className:"mb-2 mr-sm-2",placeholder:"Details...",type:"text",value:n.detail,onChange:function(e){return c(Object(x.a)(Object(x.a)({},n),{},{detail:e.target.value}))}}),Object(a.jsx)(v.a,{type:"submit",className:"mb-2 mr-sm-2",onClick:function(e){var t;(e.preventDefault(),n.name)&&(S.dispatch((t=n,{type:b.ADD_HABIT,payload:t})),c({name:"",detail:""}))},children:"Add Habit"})]})},C=n(39),w=n(30),_=n(71),N=function(e){var t=e.handleClose,n=e.habit;if(!n)return Object(a.jsx)("div",{});var c=Object(o.b)(),i=Object(r.useCallback)((function(){return c(function(e){return{type:b.DELETE_HABIT,payload:e}}(n))}),[c]);return Object(a.jsxs)(_.a,{show:!!n,animation:!1,onHide:t,children:[Object(a.jsx)(_.a.Header,{closeButton:!0,children:Object(a.jsx)(_.a.Title,{children:n.name})}),Object(a.jsxs)(_.a.Body,{children:[n.detail?Object(a.jsx)("p",{children:n.detail}):"",Object(a.jsxs)("p",{children:["Habit occurred ",n.events.length," times."]})]}),Object(a.jsxs)(_.a.Footer,{children:[Object(a.jsx)(v.a,{onClick:function(){window.confirm("Are you sure you wish to delete this item?")&&(i(),t())},children:"Delete"}),Object(a.jsx)(v.a,{variant:"secondary",onClick:t,children:"Close"})]})]})},L=c.a.memo(N),U=function(e){var t=e.ticked,n=e.toggleHabit;return Object(a.jsx)("td",{align:"center",onClick:n,children:t?Object(a.jsx)(w.a,{}):Object(a.jsx)(w.b,{color:"grey"})})};function J(e,t){return t.map((function(t){return{date:t,ticked:-1!==e.events.map((function(e){return e.date})).indexOf(t.toLocaleDateString())}}))}var P=function(e){var t=e.habit,n=e.dates,r=e.handleShow,c=Object(o.b)();return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{onClick:function(){return r(t)},children:t.name},t.name),J(t,n).map((function(e){var n=e.ticked,r=e.date;return Object(a.jsx)(U,{ticked:n,date:r,toggleHabit:function(){return c(function(e,t){var n=-1!==e.events.map((function(e){return e.date})).indexOf(t.toLocaleDateString()),a=e;return n?a.events=a.events.filter((function(e){return e.date!==t.toLocaleDateString()})):a.events.push({date:t.toLocaleDateString()}),{type:b.UPDATE_HABIT,payload:a}}(t,r))}},r.getDate())}))]})},F=function(e){var t=e.dates;return Object(a.jsxs)("thead",{children:[Object(a.jsx)("th",{children:"Habit"},"title"),t.map((function(e){return Object(a.jsx)("th",{className:"text-center",children:e.toString().split(" ")[0]+" "+e.getDate()},e.getUTCDate())}))]})};var M=function(e){var t=e.dates,n=Object(o.c)(u),c=Object(r.useState)(null),i=Object(m.a)(c,2),s=i[0],l=i[1],d=function(e){return l(e)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(C.a,{responsive:!0,striped:!0,bordered:!0,children:[Object(a.jsx)(F,{dates:t}),Object(a.jsx)("tbody",{children:n.map((function(e){return Object(a.jsx)(P,{habit:e,dates:t,handleShow:d},e.id)}))})]}),Object(a.jsx)(L,{handleClose:function(){return l(null)},habit:s})]})};function q(){var e,t=(e=7,Array.from(Array(e).keys()).map((function(e){var t=new Date;return t.setDate(t.getDate()-e),t})));return Object(a.jsxs)(h.a,{fluid:"md",children:[Object(a.jsx)(O.a,{className:"p-2",children:Object(a.jsx)(f.a,{children:Object(a.jsx)(B,{})})}),Object(a.jsx)(O.a,{className:"p-2",children:Object(a.jsx)(f.a,{children:Object(a.jsx)(M,{dates:t})})})]})}var z=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"App p-4",children:[Object(a.jsx)("h1",{className:"text-center",children:"Habit Tracker"}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{exact:!0,path:"/",component:q}),Object(a.jsx)(d.a,{path:"/habit/:id(\\d+)",render:function(e){var t=e.match;return Object(a.jsx)(j,{habitId:Number(t.params.id)})}})]})]})})};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(o.a,{store:S,children:Object(a.jsx)(z,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d7217970.chunk.js.map