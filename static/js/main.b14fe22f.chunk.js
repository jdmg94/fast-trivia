(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(n,e,t){n.exports=t(63)},63:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"default",function(){return W}),t.d(r,"SUBMIT_ANSWERS",function(){return j}),t.d(r,"FETCH_QUESTIONS",function(){return x}),t.d(r,"FETCH_QUESTIONS_FAIL",function(){return O}),t.d(r,"FETCH_QUESTIONS_SUCCESS",function(){return y}),t.d(r,"submitAnswers",function(){return S}),t.d(r,"fetchQuestions",function(){return _}),t.d(r,"fetchQuestionsFail",function(){return k}),t.d(r,"fetchQuestionsSuccess",function(){return T});var a=t(0),o=t.n(a),c=t(19),i=t.n(c),u=t(6),s=t(21),l=t(8),d=t(9),f=t(27),p=t(7);function b(){var n=Object(u.a)(["\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  padding: 0;\n  width: 100%;  \n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  user-select: none;\n  overscroll-behavior-y: contain;\n}\n\n#root > div {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  will-change: transform;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#root > div > div {\n  background-color: white;\n  background-size: auto 85%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 45vh;\n  max-width: 300px;\n  height: 85vh;\n  max-height: 570px;\n  will-change: transform;\n  border-radius: 10px;\n  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);\n}\n"]);return b=function(){return n},n}var h=Object(p.a)(b()),m=function(n){return{x:0,y:-4*n,scale:1,rot:20*Math.random()-10,delay:100*n}},g=function(n){return{x:0,rot:0,scale:1.5,y:-1e3}},v=function(n,e){return"perspective(1500px) rotateX(30deg) rotateY(".concat(n/10,"deg) rotateZ(").concat(n,"deg) scale(").concat(e,")")};var w=function(){var n=Object(a.useState)([]),e=Object(l.a)(n,2),t=e[0],r=e[1];Object(a.useEffect)(function(){setTimeout(function(){r(["https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg","https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg","https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg","https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg","https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg"])},1500)},[]);var c=Object(a.useState)(function(){return new Set}),i=Object(l.a)(c,1)[0],u=Object(d.c)(t.length,function(n){return Object(s.a)({},m(n),{from:g(n)})}),p=Object(l.a)(u,2),b=p[0],w=p[1],j=Object(f.a)(function(n){var e=Object(l.a)(n.args,1)[0],r=n.down,a=Object(l.a)(n.delta,1)[0],o=(n.distance,Object(l.a)(n.direction,1)[0]),c=n.velocity,u=o<0?-1:1;!r&&c>.2&&i.add(e),w(function(n){if(e===n){var t=i.has(e);return{x:t?(200+window.innerWidth)*u:r?a:0,rot:a/100+(t?10*u*c:0),scale:r?1.1:1,delay:void 0,config:{friction:50,tension:r?800:t?200:500}}}}),r||i.size!==t.length||setTimeout(function(){return i.clear()||w(function(n){return m(n)})},600)});return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null),b.map(function(n,e){var r=n.x,a=n.y,c=n.rot,i=n.scale;return o.a.createElement(d.a.div,{key:e,style:{transform:Object(d.b)([r,a],function(n,e){return"translate3d(".concat(n,"px,").concat(e,"px,0)")})}},o.a.createElement(d.a.div,Object.assign({},j(e),{style:{transform:Object(d.b)([c,i],v),backgroundImage:"url(".concat(t[e],")")}})))}))},j="game/SUBMIT_ANSWERS",x="game/FETCH_QUESTIONS",O="game/FETCH_QUESTIONS_FAIL",y="game/FETCH_QUESTIONS_SUCCESS",E={results:{points:0,hits:[]},questions:[]},S=function(n){return{type:j,payload:{answers:n}}},_=function(){return{type:x}},k=function(n){return{payload:{error:n},type:O}},T=function(n){return{payload:{questions:n},type:y}},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case y:var a=r.questions,o=E.results;return Object(s.a)({},n,{results:o,questions:a});case j:var c=0,i=r.answers,u=n.questions,l=i.map(function(n,e){var t=u[e];return n===t.correct_answer&&c++,Object(s.a)({},t,{answer:n})});return console.log("results",c,l),Object(s.a)({},n,{results:{hits:l,points:c}});case"GAME/RESET_GAME":return E;default:return n}},C=t(20),F=t(44),R=t(37);function I(){var n=Object(u.a)(["\n  margin: 0; \n  width: 100%;\n  flex-grow: 1;\n  height: 100%;\n  display: flex;\n  padding: 1rem;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return I=function(){return n},n}function q(){var n=Object(u.a)(["\n  width: 45vh;\n  height: 85vh;  \n  max-width: 300px;\n  max-height: 570px;\n  border-radius: 10px;\n  will-change: transform;\n  background-color: white;\n  background-size: auto 85%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);\n"]);return q=function(){return n},n}var U=Object(p.b)(d.a.div)(q()),M=p.b.div(I()),Q=function(n){var e=n.data,t=Object(F.a)(n,["data"]);return o.a.createElement(U,t,o.a.createElement(M,null,o.a.createElement("h2",null,e.category),o.a.createElement("p",null,Object(R.decode)(e.question)),o.a.createElement("span",null,"Difficulty: ",e.difficulty)))};function H(){var n=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  position: absolute;\n  align-items: center;\n  will-change: transform;\n  justify-content: center;\n"]);return H=function(){return n},n}var N=Object(p.b)(d.a.div)(H()),z=function(n){return{x:0,y:-4*n,scale:1,rot:20*Math.random()-10,delay:100*n}},A=function(n,e){return"perspective(1500px) rotateX(30deg) rotateY(".concat(n/10,"deg) rotateZ(").concat(n,"deg) scale(").concat(e,")")},B=function(n){var e=n.questions,t=n.onSubmit,r=Object(a.useState)([]),c=Object(l.a)(r,1)[0],i=Object(a.useState)(function(){return new Set}),u=Object(l.a)(i,1)[0],s=Object(d.c)(e.length,function(n){return{to:z(n),from:{x:0,rot:0,scale:1.5,y:-1e3}}}),p=Object(l.a)(s,2),b=p[0],h=p[1],m=Object(f.a)(function(n){var r=Object(l.a)(n.args,1)[0],a=n.down,o=Object(l.a)(n.delta,1)[0],i=Object(l.a)(n.direction,1)[0],s=n.velocity,d=i>0?1:-1;if(!a&&s>.2){var f=1===d;u.add(r),c[r]=!0===f?"True":"False"}h(function(n){if(n===r){var e=a?1.1:1;if(u.has(r)){var t=a?800:200;return{x:(200+window.innerWidth)*d,rot:o/100+d*s*10,scale:e,config:{tension:t,friction:50}}}return{x:a?o:0,rot:o/100,scale:e,config:{tension:a?800:500,friction:50}}}}),!a&&e.length>0&&u.size===e.length&&t&&t(c)});return b.map(function(n,t){var r=n.x,a=n.y,c=n.rot,i=n.scale;return o.a.createElement(N,{key:t,style:{transform:Object(d.b)([r,a],function(n,e){return"translate3d(".concat(n,"px,").concat(e,"px,0)")})}},o.a.createElement(Q,Object.assign({},m(t),{data:e[t],style:{transform:Object(d.b)([c,i],A)}})))})},G=Object(C.b)(function(n){return{questions:n.game.questions}})(function(n){var e=n.questions,t=n.history,r=n.dispatch;return Object(a.useEffect)(function(){r(_())},[]),e.length>0&&o.a.createElement(B,{onSubmit:function(n){r(S(n)),t.push("/results")},questions:e})}),L=t(15),P=t.n(L),D=t(38),J=function(n){var e=new URLSearchParams;return Object.entries(n).map(function(n){var t=Object(l.a)(n,2),r=t[0],a=t[1];return e.append(r,a),null}),"?".concat(e.toString())},X=function(){var n=Object(D.a)(P.a.mark(function n(){var e,t,r,a,o,c,i,u=arguments;return P.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:"hard",t=u.length>1&&void 0!==u[1]?u[1]:10,r=u.length>2&&void 0!==u[2]?u[2]:"boolean","https://opentdb.com/api.php",a=J({type:r,amount:t,difficulty:e}),n.next=7,fetch("".concat("https://opentdb.com/api.php").concat(a));case 7:return o=n.sent,n.next=10,o.json();case 10:return c=n.sent,i=c.results,n.abrupt("return",i);case 13:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),Y=t(22),Z=P.a.mark(K),$=P.a.mark(V);function K(){var n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Y.b)(X);case 3:return n=e.sent,e.next=6,Object(Y.c)(T(n));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Y.c)(k(e.t0));case 12:case"end":return e.stop()}},Z,null,[[0,8]])}function V(){return P.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Y.a)([Object(Y.d)(x,K)]);case 2:case"end":return n.stop()}},$)}var nn=V,en=t(14),tn=Object(en.combineReducers)({game:W}),rn=t(42),an=t(39),on=Object(rn.a)(),cn=Object(en.createStore)(tn,Object(an.composeWithDevTools)(Object(en.applyMiddleware)(on)));on.run(nn);var un=cn;function sn(){var n=Object(u.a)(["\n  margin: .5rem;\n  cursor: pointer;\n  padding: 0 1rem;\n  text-align: center;\n  border-radius: 1rem;\n  white-space: no-wrap;\n  justify-content: center;\n"]);return sn=function(){return n},n}var ln=p.b.button(sn());function dn(){var n=Object(u.a)(["\n  color: ",";\n"]);return dn=function(){return n},n}var fn=p.b.span(dn(),function(n){return n.color});function pn(){var n=Object(u.a)(["\n  font-size: 45px;\n  font-weight: 600;\n"]);return pn=function(){return n},n}var bn=Object(p.b)(fn.withComponent("h1"))(pn());function hn(){var n=Object(u.a)(["\n  font-weight: bold;\n"]);return hn=function(){return n},n}Object(p.b)(fn)(hn());function mn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n  text-align: center;\n  align-items: center;\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return mn=function(){return n},n}var gn=p.b.div(mn()),vn=function(n){var e=n.history;return o.a.createElement(gn,null,o.a.createElement(bn,{color:"white"},"Welcome to Fast Trivia!"),o.a.createElement(ln,{onClick:function(){return e.push("/game")}},"Start Game"))},wn=r.resetGame,jn=r.fetchQuestions,xn=Object(C.b)(function(n){return{results:{}}})(function(n){n.results;var e=n.history,t=n.dispatch;Object(a.useCallback)(function(){t(wn()),t(jn()),e.push("/game")},[]);return o.a.createElement(o.a.Fragment,null,"Hello Results")}),On=t(40),yn=t(17);function En(){var n=Object(u.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat');\n  body {\n    margin: 0;\n    padding: 0;\n    width: 100%;  \n    height: 100%;\n    position: fixed;\n    overflow: hidden;\n    user-select: none;\n    overscroll-behavior-y: contain;\n  }\n\n  html * {\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif !important;\n  }\n\n  #root {\n    background: lightblue;\n    position: fixed;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n  }\n"]);return En=function(){return n},n}var Sn=Object(p.a)(En()),_n=function(){return o.a.createElement(C.a,{store:un},o.a.createElement(Sn,null),o.a.createElement(On.a,null,o.a.createElement(yn.c,null,o.a.createElement(yn.a,{exact:!0,path:"/deck",component:w}),o.a.createElement(yn.a,{exact:!0,path:"/game",component:G}),o.a.createElement(yn.a,{exact:!0,path:"/results",component:xn}),o.a.createElement(yn.a,{component:vn}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(_n,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.b14fe22f.chunk.js.map