(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(23),s=c.n(a),n=c(8),i=(c(28),c(29),c(30),c(2)),b=c(13),r=c.n(b),j=c(3),l=function(){return Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:"Home"}),Object(j.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:"Tabs"})]})})})},d=function(e){var t=e.tabs,c=e.selectedTab;return Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)("li",{"data-cy":"Tab",className:r()({"is-active":e.id===c}),children:Object(j.jsx)(n.b,{to:"../".concat(e.id),children:e.title})},e.id)}))})})},o=function(e,t){var c=e.find((function(e){return e.id===t}));return c?c.content:"Please select a tab"},x=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){var e=Object(i.q)().tabId,t=void 0===e?"":e;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)(d,{tabs:x,selectedTab:t}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:t?o(x,t):"Please select a tab"})]})},O=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},m=function(){return Object(j.jsx)("h1",{className:"title",children:"Home page"})},u=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/",element:Object(j.jsx)(m,{})}),Object(j.jsx)(i.b,{path:"home",element:Object(j.jsx)(i.a,{to:"/",replace:!0})}),Object(j.jsxs)(i.b,{path:"tabs",children:[Object(j.jsx)(i.b,{index:!0,element:Object(j.jsx)(h,{})}),Object(j.jsx)(i.b,{path:":tabId",element:Object(j.jsx)(h,{})})]}),Object(j.jsx)(i.b,{path:"*",element:Object(j.jsx)(O,{})})]})})})]})};s.a.render(Object(j.jsx)(n.a,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.f5be1727.chunk.js.map