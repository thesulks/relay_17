(this.webpackJsonpfe=this.webpackJsonpfe||[]).push([[0],{39:function(n,e,t){n.exports=t(66)},66:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(35),u=t.n(c),o=t(18),i=t(3),l=t(1),f=t(10),d=t.n(f),s=t(12),p=t(8),b=t(2),m=t(17),g=t.n(m),h=URL={login:"http://101.101.219.177/users/insert",userInfoAll:"http://101.101.219.177/users",userInfo:"http://101.101.219.177/users",chatbot:"http://101.101.219.177/chatbot"},v=function(n){g.a.post(h.login,n).then((function(n){return n.data})).catch((function(n){return n}))},x=function(n){return g.a.get("".concat(h.chatbot,"/").concat(n)).then((function(n){return n.data})).catch((function(n){return n}))};function O(){var n=Object(l.a)(["\n  display: block;\n  margin: 0 auto;\n  margin-top: 50px;\n"]);return O=function(){return n},n}function j(){var n=Object(l.a)(["\n  text-align: center;\n  color: red;\n  font-size: small;\n"]);return j=function(){return n},n}function E(){var n=Object(l.a)(["\n  display: block;\n  margin: 0 auto;\n  margin-top: 10px;\n"]);return E=function(){return n},n}function w(){var n=Object(l.a)(["\n  display: block;\n  text-align: center;\n"]);return w=function(){return n},n}function k(){var n=Object(l.a)(["\n  display: block;\n  top: 30%;\n  margin: auto;\n  margin-top: 5%;\n  width: 40%;\n  border: 3px solid grey;\n  padding: 10px;\n"]);return k=function(){return n},n}function y(){var n=Object(l.a)(["\n  text-align: center;\n  padding-top: 50px;\n"]);return y=function(){return n},n}var S=b.a.div(y()),C=b.a.div(k()),I=b.a.div(w()),L=b.a.input(E()),F=b.a.p(j()),z=b.a.button(O()),U=function(){var n=Object(i.f)(),e=Object(r.useState)(""),t=Object(p.a)(e,2),c=t[0],u=t[1],o=Object(r.useState)(""),l=Object(p.a)(o,2),f=l[0],b=l[1],m=Object(r.useState)(0),g=Object(p.a)(m,2),h=g[0],x=g[1],O=Object(r.useState)(""),j=Object(p.a)(O,2),E=j[0],w=j[1],k=Object(r.useState)(""),y=Object(p.a)(k,2),U=y[0],M=y[1],T=function(){var e=Object(s.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c&&f&&h&&E){e.next=3;break}return M("\uc774\ub984, \ud559\uad50, \uc878\uc5c5\ub144\ub3c4, \uad00\uc2ec\uc0ac\ub97c \ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694."),e.abrupt("return");case 3:if(!U){e.next=5;break}return e.abrupt("return");case 5:return t={name:c,school:f,favors:E,graduatedYear:h},e.next=8,v(t);case 8:n.push("/MainPage/".concat(c));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(S,null,a.a.createElement("h1",null,"I Loved School Logo"),a.a.createElement(C,null,a.a.createElement(I,null,a.a.createElement("h1",null,"\ub85c\uadf8\uc778"),a.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694, I Loved School \uc785\ub2c8\ub2e4.")),a.a.createElement(L,{type:"text",name:"name",placeholder:"\uc774\ub984",onChange:function(n){var e=n.target;u(e.value)}}),a.a.createElement(L,{type:"text",name:"school",placeholder:"\ud559\uad50",onChange:function(n){var e=n.target;b(e.value)}}),a.a.createElement(L,{type:"text",name:"graduatedYear",placeholder:"\uc878\uc5c5\ub144\ub3c4",onChange:function(n){var e=n.target;x(e.value),e.value<1500||e.value>2100?M("\uc878\uc5c5\ub144\ub3c4\ub97c \uc815\ud655\ud788 \uc785\ub825\ud574\uc8fc\uc138\uc694"):M("")}}),a.a.createElement(L,{type:"text",name:"favors",placeholder:"\uad00\uc2ec\uc0ac",onChange:function(n){var e=n.target;w(e.value)}}),a.a.createElement(F,null,U),a.a.createElement(z,{onClick:T},"\uc2dc\uc791\ud558\uae30")))},M=t(23);function T(){var n=Object(l.a)(["\n  background-color: ",";\n  float: inherit;\n  margin: 5px;\n  padding: 4px 10px;\n  border-radius: 5px;\n  width: fit-content;\n  overflow-wrap: anywhere;\n"]);return T=function(){return n},n}function Y(){var n=Object(l.a)(["\n  float: ",";\n  width: 100%;\n"]);return Y=function(){return n},n}var A=b.a.div(Y(),(function(n){return n.isUser?"right":"left"})),B=b.a.div(T(),(function(n){return n.isUser?"#4fd2c2":"#ddd"})),H=function(n){var e=n.message;return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{isUser:e.user},a.a.createElement(B,{isUser:e.user},e.text)))};function P(){var n=Object(l.a)(["\n  margin-left: 8px;\n  margin-right: 4px;\n  height: 70%;\n  width: 20%;\n  color: white;\n  background: #4fd2c2;\n  border: none;\n  border-radius: 5px;\n  font-size: small;\n"]);return P=function(){return n},n}function J(){var n=Object(l.a)(["\n  margin-left: 4px;\n  padding-left: 4px;\n  width: 80%;\n  height: 50%;\n  border: none;\n"]);return J=function(){return n},n}function N(){var n=Object(l.a)(["\n  width: 100%;\n  height: 10%;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  background-color: #f2f2f2;\n"]);return N=function(){return n},n}function D(){var n=Object(l.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  padding: 4px;\n  background-color: #ffffff;\n"]);return D=function(){return n},n}function K(){var n=Object(l.a)(["\n  height: 80%;\n  overflow: scroll;\n"]);return K=function(){return n},n}function R(){var n=Object(l.a)(["\n  margin-right: 8px;\n  border: none;\n  width: 10%;\n  height: 50%;\n  border-radius: 5px;\n  color: #626466;\n  font-weight: bold;\n"]);return R=function(){return n},n}function X(){var n=Object(l.a)(["\n  margin-left: 8px;\n  color: #f2f2f2;\n"]);return X=function(){return n},n}function q(){var n=Object(l.a)(["\n  width: 100%;\n  height: 10%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #4fd2c2;\n  border-radius: 10px 10px 0 0;\n"]);return q=function(){return n},n}function G(){var n=Object(l.a)(["\n  visibility: ",";\n  height: 90%;\n  box-shadow: 1px 1px 2px 6px #f0f0f0;\n  border-radius: 10px;\n"]);return G=function(){return n},n}var Q=b.a.div(G(),(function(n){return n.isOpen?"visible":"hidden"})),V=b.a.div(q()),W=b.a.div(X()),Z=b.a.button(R()),$=b.a.div(K()),_=b.a.div(D()),nn=b.a.div(N()),en=b.a.input(J()),tn=b.a.button(P()),rn=function(n){var e=n.isOpen,t=n.onSetChatbotOpen,c=Object(r.useState)(""),u=Object(p.a)(c,2),o=u[0],i=u[1],l=Object(r.useState)([]),f=Object(p.a)(l,2),b=f[0],m=f[1],g=Object(r.useState)(!0),h=Object(p.a)(g,2),v=h[0],O=h[1],j=function(){var n=Object(s.a)(d.a.mark((function n(){var e,t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==o){n.next=2;break}return n.abrupt("return");case 2:return O(!1),m((function(n){return[].concat(Object(M.a)(n),[{text:o,user:!0}])})),n.next=6,x(o);case 6:return e=n.sent,n.next=9,m((function(n){return[].concat(Object(M.a)(n),[{text:e,user:!1}])}));case 9:O(!0),i(""),(t=document.getElementById("context")).scrollTop=t.scrollHeight-400;case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),E=b.map((function(n,e){return a.a.createElement(H,{message:n,key:e})}));return a.a.createElement(Q,{isOpen:e},a.a.createElement(V,null,a.a.createElement(W,null,"I Loved School \ucc57\ubd07"),a.a.createElement(Z,{onClick:function(){t()}},"X")),a.a.createElement($,{id:"context"},a.a.createElement(_,null,E)),a.a.createElement(nn,null,a.a.createElement(en,{placeholder:"\ucc57\ubd07\uc5d0\uac8c \uad81\uae08\ud55c \uc810\uc744 \ubb3c\uc5b4\ubcf4\uc138\uc694!",value:o,onKeyDown:function(n){v&&13===n.keyCode&&j()},onChange:function(n){var e=n.target;i(e.value)}}),a.a.createElement(tn,{onClick:j,disabled:!v},"\ubcf4\ub0b4\uae30")))};function an(){var n=Object(l.a)(["\n  height: 10%;\n  color: white;\n  background: #4fd2c2;\n  border: none;\n  border-radius: 5px;\n  margin-top: 14px;\n"]);return an=function(){return n},n}function cn(){var n=Object(l.a)(["\n  padding: 20px;\n  height: 50px;\n  background-color: #4fd2c2;\n"]);return cn=function(){return n},n}function un(){var n=Object(l.a)(["\n  padding: 20px;\n  width: 25%;\n  background-color: #ffffff;\n  display: block;\n  align-items: center;\n  justify-content: space-between;\n"]);return un=function(){return n},n}function on(){var n=Object(l.a)(["\n  padding: 20px;\n  width: 55%;\n  background-color: #dddddd;\n"]);return on=function(){return n},n}function ln(){var n=Object(l.a)(["\n  width: 100%;\n  height: 60%;\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  box-sizing: border-box;\n"]);return ln=function(){return n},n}function fn(){var n=Object(l.a)(["\n  margin: 0 0 20px 0;\n  width: 100%;\n  height: 30%;\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  box-sizing: border-box;\n  display: table;\n"]);return fn=function(){return n},n}function dn(){var n=Object(l.a)(["\n  padding: 20px;\n  width: 15%;\n  background-color: #dddddd;\n"]);return dn=function(){return n},n}function sn(){var n=Object(l.a)(["\n  height: 550px;\n  display: flex;\n"]);return sn=function(){return n},n}function pn(){var n=Object(l.a)(["\n  padding: 20px;\n"]);return pn=function(){return n},n}var bn=b.a.div(pn()),mn=b.a.div(sn()),gn=b.a.div(dn()),hn=b.a.div(fn()),vn=b.a.div(ln()),xn=b.a.div(on()),On=b.a.div(un()),jn=b.a.div(cn()),En=b.a.button(an()),wn=function(){var n=Object(i.g)().userName,e=Object(r.useState)(!1),t=Object(p.a)(e,2),c=t[0],u=t[1],o=Object(r.useState)({name:"",school:"",favors:"",graduatedYear:null}),l=Object(p.a)(o,2),f=l[0],b=l[1],m=function(){var e=Object(s.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=n,g.a.get("".concat(h.userInfo,"/").concat(r)).then((function(n){return n.data})).catch((function(n){return n}));case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}var r}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){m()}),[]);var v=function(){u(!c)};return a.a.createElement(a.a.Fragment,null,f&&a.a.createElement(a.a.Fragment,null,a.a.createElement(bn,null,a.a.createElement(mn,null,a.a.createElement(gn,null,a.a.createElement(hn,null,a.a.createElement("p",null,"\uc774\ub984: ",f.name),a.a.createElement("p",null,"\ud559\uad50: ",f.school),a.a.createElement("p",null,"\uc878\uc5c5\ub144\ub3c4: ",f.graduatedYear),a.a.createElement("p",null,"\uad00\uc2ec\uc0ac: ",f.favors)),a.a.createElement(vn,null,"School List")),a.a.createElement(xn,null,"Center"),a.a.createElement(On,null,a.a.createElement(rn,{isOpen:c,onSetChatbotOpen:v}),a.a.createElement(En,{onClick:v},"CHAT BOT"))),a.a.createElement(jn,null,a.a.createElement("div",null,"Footer")))))},kn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:"https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-Animated.png",alt:"404 error page",style:{width:"100%"}}))},yn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/",exact:!0,component:U}),a.a.createElement(i.a,{path:"/MainPage/:userName",exact:!0,component:wn}),a.a.createElement(i.a,{component:kn}))))};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(yn,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.61f35772.chunk.js.map