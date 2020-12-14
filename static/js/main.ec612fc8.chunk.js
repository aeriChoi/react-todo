(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{251:function(n,e,t){"use strict";t.r(e);var o=t(7),r=t(0),a=t(33),i=t.n(a),c=t(66),l=t(52),d=t(49),s=t(84),u=Object(s.b)({name:"todos",initialState:JSON.parse(localStorage.getItem("todos"))||[],reducers:{addTodo:function(n,e){var t=e.payload,o=t.id,r=t.title,a=t.description,i=t.rank,c=t.date;n.push({id:o,title:r,description:a,rank:i,date:c,completed:!1}),localStorage.setItem("todos",JSON.stringify(n))},toggleTodo:function(n,e){var t=e.payload.id,o=n.todos.find((function(n){return n.id===t}));o&&(o.completed=!o.completed,localStorage.setItem("todos",JSON.stringify(e.payload)))},removeTodo:function(n,e){return n.filter((function(n){return n.id!==e.payload}))}}}),b=u.actions,m=b.addTodo,f=(b.toggleTodo,b.removeTodo),p=u.reducer,j=t(22),h=t.n(j),O=t(256),x=t(257),g=t(258),v=t(255),y=t(83),w=t(35),k=t(36);function D(){var n=Object(w.a)(["\n:root{\n   --color-sunFlowerYellow: #ffd200;\n   --color-darkBrown: #5e5050;\n   --color-coralRed: #ff4d56;\n   --color-Grey: #777777;\n   --color-borderGrey: #e5e5e5;\n   --color-blue: #1890ff;\n   --color-green: #71d271;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, button{\n   margin: 0;\n   padding: 0;\n   border: 0;\n   font-size: 100%;\n   font: inherit;  \n   letter-spacing: 0.2px;\n   font-family: HelveticaNeue, sans-serif;\n   vertical-align: baseline;\n   box-sizing: border-box;  \n}\n\nhtml{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -webkit-tap-highlight-color:rgba(255, 255, 255, 0.4);\n  scroll-behavior:smooth;\n}\n\nbody{\n  line-height: 1;  \n  width: 100%;\n  background-color: #2193b0;\n  -webkit-text-size-adjust: none;\n}\n\nol, ul{\n   list-style: none;\n}\n\nblockquote, q{\n   quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after{\n   content: '';\n   content: none;\n}\n"]);return D=function(){return n},n}var Y=Object(k.a)(D());function S(){var n=Object(w.a)(["    \n  display: block;\n  animation-name: slideUpList;\n  opacity: 1;\n  height: auto;\n  ","  \n  \n  @keyframes slideUpList {\n   from {       \n     opacity: 0;\n     transform: translateY(-10px);\n   }\n  \n   to {        \n     opacity: 1;        \n     transform: translateY(0);\n   }\n  }\n"]);return S=function(){return n},n}function T(){var n=Object(w.a)(["    \n  display: block;\n  animation-name: animateViewDownShow;\n  opacity: 0;    \n  animation-duration: 0.4s;\n  animation-fill-mode: forwards;  \n    \n  @keyframes animateViewDownShow {\n   from {       \n     opacity: 0;\n     transform: translateY(-30px);\n   }\n  \n   to {        \n     opacity: 1;        \n     transform: translateY(0);\n   }\n  }\n"]);return T=function(){return n},n}function q(){var n=Object(w.a)([" \n  animation-duration: 0.4s;\n  animation-fill-mode: forwards; \n  transform: translateY(0px);\n"]);return q=function(){return n},n}var N=Object(k.b)(q()),H=(Object(k.b)(T()),Object(k.b)(S(),N));function I(){var n=Object(w.a)(["\n  h1 {\n    margin-bottom: 20px;\n    color: #000;\n    font-size: 25px;\n    font-weight: 700;\n    text-align: center;\n    line-height: 36px;\n  }\n"]);return I=function(){return n},n}function z(){var n=Object(w.a)(["\n  margin-bottom: 15px;\n \n  \n  &.title {\n    color: #333;\n    font-size: 18px;\n    font-weight: 700;\n  }\n  \n  &.des {\n    color: #999;\n    font-size: 14px;\n  }\n  \n  &.deadline {\n    color: var(--color-coralRed);\n    font-size: 12px;\n  }\n"]);return z=function(){return n},n}function M(){var n=Object(w.a)(["\n  margin: 15px auto;\n  padding: 10px 20px ;\n  border-right: 15px;\n  box-shadow: 0px 12px 20px rgba(0,0,0,0.5);\n  \n  &.top {\n    border-left: 5px solid var(--color-coralRed);\n  }\n  &.middle {\n    border-left: 5px solid var(--color-green);\n  }\n  &.low {\n    border-left: 5px solid var(--color-borderGrey);\n  }\n"]);return M=function(){return n},n}function C(){var n=Object(w.a)(["\n  margin: 30px auto;\n"]);return C=function(){return n},n}function J(){var n=Object(w.a)(["\n  max-width: 460px;\n  margin: 0 auto;\n"]);return J=function(){return n},n}function B(){var n=Object(w.a)(["\n  width: 80%;\n  max-width: 760px;\n  min-width: 280px;\n  margin:  30px auto;\n  padding: 20px 15px;\n  border-radius: 8px;\n  background-color: #fff;\n  box-shadow: 0px 12px 40px rgba(0,0,0,0.5);\n  \n  .ant-form-item-label {\n    text-align: left;\n  }\n  \n  .ant-btn-primary {\n    display: block;\n    width: 80%;\n    height: 50px;\n    margin: 0 auto;\n    border: 0;\n    border-radius: 25px;\n    font-size: 16px;\n    font-weight: 600;\n    background: linear-gradient(269.43deg, #3B5BC2 0%, #417FE9 100%);\n  }\n  ","\n"]);return B=function(){return n},n}var F=k.c.article(B(),H),V=k.c.section(J()),G=k.c.ul(C()),E=k.c.li(M()),R=k.c.p(z()),L=k.c.header(I()),U=function(n,e){if(void 0===e)return!1;var t=h()(e).format("YYYY-MM-DD"),o=h()(t,"YYYY-MM-DD").fromNow(),r=h()(e).format("HH:mm"),a=h()(r,"HH:mm").fromNow();switch(n){case"day":var i=o.includes("ago");return console.log("isBeforeDay",i),i;case"time":var c=a.includes("ago");return console.log("isBeforeTime",c),c;default:return!1}},A={labelCol:{span:4},wrapperCol:{span:14}},K={wrapperCol:{offset:0,span:24}},P={rules:[{type:"object"}]},Q=Object(r.memo)((function(n){n.toDos;var e=n.addToDo,t=n.onChange,a=O.a.useForm(),i=Object(c.a)(a,1)[0],d=Object(r.useState)({id:"",title:"",description:"",rank:"",date:""}),s=Object(c.a)(d,2),u=s[0],b=s[1],m=function(){i.resetFields()};return Object(o.jsxs)(O.a,Object(l.a)(Object(l.a)({},A),{},{form:i,name:"control-forms",onFinish:function(n){var o=n.title,r=n.description,a=n.rank,i=n.date,c=function(n){return void 0!==n?h()(n).format("YYYY-MM-DD HH:mm"):""}(i),d=U("day",i),s=U("time",i),u={id:h()().valueOf(),title:o,description:r,rank:a,date:c};if(d&&s)return alert("\ud604\uc7ac \uc2dc\uac04\ubcf4\ub2e4 \uc774\uc804 \uc2dc\uac04\uc740 \uc120\ud0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc120\ud0dd \uc2dc\uac04\uc744 \ub2e4\uc2dc \ud655\uc778 \ud574\uc8fc\uc138\uc694."),t(!1),void m();(!d&&!s||!d&&s)&&(b(Object(l.a)({},u)),e(u),b({id:"",title:"",description:"",rank:"",date:""}),t(!0),m())},children:[Object(o.jsx)(O.a.Item,{label:"\uc81c\ubaa9",name:"title",rules:[{initialValue:u.title||"",required:!0,message:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."}],children:Object(o.jsx)(x.a,{placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})}),Object(o.jsx)(O.a.Item,{label:"\uc0c1\uc138\ub0b4\uc6a9",name:"description",rules:[{initialValue:u.description||"",required:!0,message:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."}],children:Object(o.jsx)(x.a,{placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})}),Object(o.jsx)(O.a.Item,{name:"rank",label:"\uc6b0\uc120\uc21c\uc704",rules:[{initialValue:u.rank||"",required:!0,message:"\uc6b0\uc120\uc21c\uc704\ub97c \uc124\uc815\ud574\uc8fc\uc138\uc694."}],children:Object(o.jsxs)(g.a.Group,{children:[Object(o.jsx)(g.a,{value:"top",children:"\uc0c1"}),Object(o.jsx)(g.a,{value:"middle",children:"\uc911"}),Object(o.jsx)(g.a,{value:"low",children:"\ud558"})]})}),Object(o.jsx)(O.a.Item,Object(l.a)(Object(l.a)({name:"date",label:"\ub9c8\uac10 \uae30\ud55c"},P),{},{children:Object(o.jsx)(v.a,{format:"YYYY-MM-DD HH:mm",disabledDate:function(n){return n&&n<h()().endOf("day")},showTime:{defaultValue:h()("00:00","HH:mm")}})})),Object(o.jsx)(O.a.Item,Object(l.a)(Object(l.a)({},K),{},{children:Object(o.jsx)(y.a,{type:"primary",htmlType:"submit",children:"\ucd94\uac00\ud558\uae30"})}))]}))})),W=Object(d.b)((function(n){return{toDos:n}}),(function(n){return{addToDo:function(e){return n(m(e))}}}))(Q),X=Object(r.memo)((function(n){var e=n.data,t=n.removeToDo;return Object(o.jsxs)(E,{className:"".concat(e.rank),children:[Object(o.jsx)(R,{className:"title",children:e.title}),Object(o.jsx)(R,{className:"des",children:e.description}),Object(o.jsx)(R,{className:"deadline",children:e.date}),Object(o.jsx)("button",{onClick:function(){t(e)},children:"\uc0ad\uc81c"})]})})),Z=Object(d.b)(null,(function(n){return{removeToDo:function(e){return n(f(e))}}}))(X),$=Object(r.memo)((function(n){var e=n.toDos,t=Object(r.useState)({loaded:!1,toDos:e}),a=Object(c.a)(t,2),i=a[0],l=a[1];return Object(r.useEffect)((function(){l({loaded:!0,toDos:JSON.parse(localStorage.getItem("todos"))||[]})}),[i.loaded]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(L,{children:Object(o.jsx)("h1",{children:"TO-DO"})}),Object(o.jsx)(V,{children:Object(o.jsx)(W,{onChange:function(n){n&&l({loaded:!0,toDos:JSON.parse(localStorage.getItem("todos"))})}})}),Object(o.jsx)(G,{children:i.toDos&&i.toDos.length>0&&i.toDos.map((function(n){return Object(o.jsx)(Z,{data:n},n.id)}))})]})})),_=Object(d.b)((function(n){return{toDos:n}}),null)($),nn=Object(r.memo)((function(){return Object(o.jsx)(F,{children:Object(o.jsx)(_,{})})})),en=(t(250),t(34)),tn=Object(en.c)({todos:p}),on=Object(s.a)({reducer:tn});i.a.render(Object(o.jsxs)(d.a,{store:on,children:[Object(o.jsx)(Y,{}),Object(o.jsx)(nn,{})]}),document.getElementById("root"))}},[[251,1,2]]]);
//# sourceMappingURL=main.ec612fc8.chunk.js.map