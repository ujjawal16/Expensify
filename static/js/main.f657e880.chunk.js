(this.webpackJsonpexpensify=this.webpackJsonpexpensify||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),a=n.n(s),i=(n(13),n(0)),o=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:"Track your Expenses"})})},j=n(3),u=n(8),l=n(4),d=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{transactions:[t.payload].concat(Object(u.a)(e.transactions))});default:return e}},b={transactions:[]},x=Object(c.createContext)(b),O=function(e){var t=e.children,n=Object(c.useReducer)(d,b),r=Object(j.a)(n,2),s=r[0],a=r[1];return Object(i.jsx)(x.Provider,{value:{transactions:s.transactions,deleteTransaction:function(e){a({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){a({type:"ADD_TRANSACTION",payload:e})}},children:t})},h=function(){var e=Object(c.useContext)(x).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Balance"}),Object(i.jsxs)("h1",{id:"balance",children:["$",e]})]})},m=function(){var e=Object(c.useContext)(x).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)*-1..toFixed(2);return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsx)("p",{id:"money-plus",className:"money plus",children:t})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsx)("p",{id:"money-minus",className:"money minus",children:n})]})]})},f=function(e){var t=e.transaction,n=t.amount<0?"-":"+",r=Object(c.useContext)(x).deleteTransaction;return Object(i.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text,Object(i.jsxs)("span",{children:[n,"$",Math.abs(t.amount)]}),Object(i.jsx)("button",{onClick:function(){return r(t.id)},className:"delete-btn",children:"x"})]})},p=function(){var e=Object(c.useContext)(x).transactions;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{className:"list",children:e.map((function(e){return Object(i.jsx)(f,{transaction:e},e.id)}))})]})},v=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(0),a=Object(j.a)(s,2),o=a[0],u=a[1],l=Object(c.useContext)(x).addTransaction;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e6*Math.random()),text:n,amount:+o};l(t)},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Enter text..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(i.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(i.jsx)("input",{type:"number",value:o,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})]})})};n(15);var y=function(){return Object(i.jsxs)(O,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(h,{}),Object(i.jsx)(m,{}),Object(i.jsx)(p,{}),Object(i.jsx)(v,{})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.f657e880.chunk.js.map