(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{297:function(e,s,t){"use strict";var a=t(3),n=t(56),i=t(57),c=t(67),o=t(66),r=t(1),d=t.n(r),l=t(10),j=t(11),g=t(0);s.a=function(e){var s=function(s){Object(c.a)(r,s);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:this.props.isAuth?Object(g.jsx)(e,Object(a.a)({},this.props)):Object(g.jsx)(l.a,{to:"/login"})})}}]),r}(d.a.Component);return Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}),{})(s)}},301:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__3sv7Q",dialogItems:"Dialogs_dialogItems__5d03t",messages:"Dialogs_messages__1ED2B",newMessage:"Dialogs_newMessage__9snii"}},302:function(e,s,t){e.exports={dialogItem:"DialogItem_dialogItem__ssiaY"}},303:function(e,s,t){e.exports={message:"Message_message__1zHis"}},306:function(e,s,t){"use strict";t.r(s);t(1);var a=t(301),n=t.n(a),i=t(15),c=t(302),o=t.n(c),r=t(0),d=function(e){return Object(r.jsx)("div",{className:o.a.dialogItem,children:Object(r.jsx)(i.b,{to:"/dialogs/".concat(e.id+1),children:e.item})})},l=t(303),j=t.n(l),g=function(e){return Object(r.jsx)("div",{className:j.a.message,children:e.message})},u=t(134),m=t(135),b=t(81),O=t(46),f=t(103),h=Object(O.b)(50),x=Object(m.a)({form:"DialogsForm"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(u.a,{component:b.b,name:"newDialogField",validate:[O.a,h]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add new message"})})]})})),p=function(e){return Object(r.jsxs)("div",{className:n.a.dialogs,children:[Object(r.jsx)("div",{className:n.a.dialogItems,children:e.dialogItems.map((function(e,s){return Object(r.jsx)(d,{item:e,id:s},Object(f.a)(e))}))}),Object(r.jsx)("div",{className:n.a.messages,children:e.messages.map((function(e,s){return Object(r.jsx)(g,{message:e,id:s},Object(f.a)(e))}))}),Object(r.jsx)("div",{className:n.a.newMessage,children:Object(r.jsx)(x,{onSubmit:e.addNewMessage})})]})},_=t(133),v=t(11),w=t(297),I=t(96),N=t(9);s.default=Object(N.compose)(Object(v.b)((function(e){return{dialogItems:e.dialogs.dialogItems,messages:e.dialogs.messages}}),(function(e){return{addNewMessage:function(s){e(s)}}})),w.a,I.a)((function(e){return Object(r.jsx)(p,{addNewMessage:function(s){var t=Object(_.a)(s.newDialogField);e.addNewMessage(t)},dialogItems:e.dialogItems,messages:e.messages})}))}}]);
//# sourceMappingURL=3.38699aa2.chunk.js.map