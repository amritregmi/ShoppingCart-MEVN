(function(e){function t(t){for(var r,i,a=t[0],u=t[1],s=t[2],m=0,l=[];m<a.length;m++)i=a[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00bb":function(e,t,n){"use strict";n("9c34")},"0808":function(e,t,n){"use strict";n("bd45")},"41fe":function(e,t,n){"use strict";n("ec60")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=(n("9299"),{class:"container"});function c(e,t,n,c,i,a){var u=Object(r["v"])("Header"),s=Object(r["v"])("router-view"),d=Object(r["v"])("Footer");return Object(r["o"])(),Object(r["d"])("div",o,[Object(r["f"])(u),Object(r["f"])(s),Object(r["f"])(d)])}var i={class:"header"};function a(e,t,n,o,c,a){var u=Object(r["v"])("Button"),s=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["d"])("header",i,[Object(r["f"])("h1",null,Object(r["x"])(e.$store.getters.getAppTitle),1),Object(r["E"])(Object(r["f"])(u,{onButtonClicked:t[1]||(t[1]=function(t){return e.$store.dispatch("toggleButton")}),text:e.$store.state.toggleButton?"Close":"Add Item",color:e.$store.state.toggleButton?"red":"green"},null,8,["text","color"]),[[r["B"],a.homePage]]),Object(r["f"])(s,{to:"/"},{default:Object(r["D"])((function(){return[Object(r["E"])(Object(r["f"])(u,{text:"Go Back",color:"red"},null,512),[[r["B"],a.otherPage]])]})),_:1})])}function u(e,t,n,o,c,i){return Object(r["o"])(),Object(r["d"])("button",{onClick:t[1]||(t[1]=function(){return i.onClick&&i.onClick.apply(i,arguments)}),class:"btn btn--".concat(n.color),type:"button"},Object(r["x"])(n.text),3)}var s={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("button-clicked")}}};s.render=u;var d=s,m={name:"Header",props:{showAddItem:Boolean},methods:{toggleAddItem:function(){this.$emit("toogle-add-item")}},components:{Button:d},computed:{homePage:function(){return"/"===this.$route.path},otherPage:function(){return"/"!==this.$route.path}}};m.render=a;var l=m,f=Object(r["e"])("Signup"),p=Object(r["e"])("Login"),b=Object(r["e"])("About App"),O=Object(r["e"])("CounterApp"),j=Object(r["f"])("p",null,"© Amrit Regmi ",-1);function g(e,t,n,o,c,i){var a=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["d"])("footer",null,[Object(r["f"])("div",null,[Object(r["f"])(a,{to:"/signup"},{default:Object(r["D"])((function(){return[f]})),_:1}),Object(r["f"])(a,{to:"/login"},{default:Object(r["D"])((function(){return[p]})),_:1}),Object(r["f"])(a,{to:"/about"},{default:Object(r["D"])((function(){return[b]})),_:1}),Object(r["f"])(a,{to:"/counter-app"},{default:Object(r["D"])((function(){return[O]})),_:1}),j])])}var h={name:"Footer"};h.render=g;var v=h,x={name:"App",components:{Header:l,Footer:v},methods:{}};x.render=c;var w=x,I=n("6c02"),R=Object(r["F"])("data-v-760461d1"),k=R((function(e,t,n,o,c,i){var a=Object(r["v"])("AddItem"),u=Object(r["v"])("Items");return Object(r["o"])(),Object(r["d"])("div",null,[Object(r["E"])(Object(r["f"])(a,null,null,512),[[r["B"],e.$store.state.toggleAddItem]]),Object(r["f"])(u,{onDeleteItem:i.deleteItem,onToggleReminder:i.toggleReminder},null,8,["onDeleteItem","onToggleReminder"])])})),A=n("5530"),y=n("1da1"),$=(n("96cf"),n("d3b7"),n("4de4"),n("d81d"),n("a4d3"),n("e01a"),{class:"form-control"}),C=Object(r["f"])("label",{for:"task"},"Item Name",-1),S={class:"form-control"},B=Object(r["f"])("label",{for:"description"},"Description",-1),D={class:"form-control "},T=Object(r["f"])("label",{for:"reminder"},"Mark as important",-1),_=Object(r["f"])("input",{type:"submit",class:"btn btn--block",value:"Save Item"},null,-1);function E(e,t,n,o,c,i){return Object(r["o"])(),Object(r["d"])("form",{class:"add-form",onSubmit:t[4]||(t[4]=function(){return i.onAdd&&i.onAdd.apply(i,arguments)})},[Object(r["f"])("div",$,[C,Object(r["E"])(Object(r["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.text=e}),type:"text",placeholder:"Add item",name:"text",id:"task"},null,512),[[r["A"],i.text]]),Object(r["e"])(" "+Object(r["x"])(e.$store.state.text),1)]),Object(r["f"])("div",S,[B,Object(r["E"])(Object(r["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.description=e}),type:"text",placeholder:"Desc",name:"description",id:"description"},null,512),[[r["A"],i.description]]),Object(r["e"])(" "+Object(r["x"])(e.$store.state.description),1)]),Object(r["f"])("div",D,[T,Object(r["E"])(Object(r["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.reminder=e}),type:"checkbox",class:"form-control--check",id:"reminder",name:"reminder"},null,512),[[r["z"],i.reminder]]),Object(r["e"])(" "+Object(r["x"])(e.$store.state.reminder),1)]),_],32)}var P={name:"AddItem",computed:{text:{get:function(){return this.$store.state.text},set:function(e){this.$store.dispatch("setText",e)}},description:{get:function(){return this.$store.state.description},set:function(e){this.$store.dispatch("setDescription",e)}},reminder:{get:function(){return this.$store.state.reminder},set:function(e){this.$store.dispatch("setReminder",e)}}},methods:{onAdd:function(e){e.preventDefault(),this.text||(this.notValid=!0,alert("Item Name cannot be empty!!"));var t={text:this.text,description:this.description,reminder:this.reminder};this.$store.dispatch("addItem",t)}}};P.render=E;var F=P;function U(e,t,n,o,c,i){var a=Object(r["v"])("Item");return Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.$store.state.items,(function(t){return Object(r["o"])(),Object(r["d"])("div",{key:t.id},[Object(r["f"])(a,{onDeleteItem:function(n){return e.$emit("delete-item",t.id)},onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},item:t},null,8,["onDeleteItem","onToggleReminder","item"])])})),128)}function V(e,t,n,o,c,i){return Object(r["o"])(),Object(r["d"])("div",{class:["task",n.item.reminder?"task--shake":""]},[Object(r["f"])("h3",null,[Object(r["f"])("span",null,Object(r["x"])(n.item.text),1),Object(r["f"])("i",{class:"fas fa-bell",onClick:t[1]||(t[1]=function(t){return e.$emit("toggle-reminder",n.item.id)})}),Object(r["f"])("i",{class:"fas fa-times",onClick:t[2]||(t[2]=function(t){return e.$emit("delete-item",n.item.id)})})]),Object(r["f"])("p",null,Object(r["x"])(n.item.description),1)],2)}var M={name:"Item",props:{item:Object},methods:{toggleReminder:function(e){return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}};n("f54c");M.render=V;var N=M,H={name:"Items",components:{Item:N},emits:["delete-item","toggle-reminder"]};H.render=U;var J=H,G={name:"Home",components:{AddItem:F,Items:J},methods:{deleteItem:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm("Sure!")){n.next=5;break}return n.next=3,fetch("api/items/".concat(e),{method:"DELETE"});case 3:r=n.sent,200===r.status?t.items=t.items.filter((function(t){return t.id!==e})):alert("ERROR, while deleting");case 5:case"end":return n.stop()}}),n)})))()},toggleReminder:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){var r,o,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchItem(e);case 2:return r=n.sent,o=Object(A["a"])(Object(A["a"])({},r),{},{reminder:!r.reminder}),n.next=6,fetch("api/items/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(o)});case 6:return c=n.sent,n.next=9,c.json();case 9:i=n.sent,t.items=t.items.map((function(t){return t.id===e?Object(A["a"])(Object(A["a"])({},t),{},{reminder:i.reminder}):t}));case 11:case"end":return n.stop()}}),n)})))()},fetchItems:function(){return Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/items");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},fetchItem:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/items/".concat(e));case 2:return n=t.sent,r=n.json(),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("fetchItems");case 1:case"end":return t.stop()}}),t)})))()}};n("00bb");G.render=k,G.__scopeId="data-v-760461d1";var L=G,z=n("e91d"),q=n.n(z),K=Object(r["f"])("h2",null,"About This App",-1),Q=Object(r["f"])("img",{src:q.a,alt:"app-image"},null,-1);function W(e,t){return Object(r["o"])(),Object(r["d"])(r["a"],null,[K,Q],64)}n("41fe");const X={};X.render=W;var Y=X,Z=Object(r["f"])("h2",null,"Amrit Regmi, 0451805969",-1),ee=Object(r["f"])("hr",null,null,-1),te=Object(r["f"])("h2",null,"crazyregmi@gmail.com",-1);function ne(e,t){return Object(r["o"])(),Object(r["d"])(r["a"],null,[Z,ee,te],64)}const re={};re.render=ne;var oe=re;function ce(e,t){return Object(r["o"])(),Object(r["d"])("h2",null," ! TODO, comming soon (USING FIREBASE) ")}const ie={};ie.render=ce;var ae=ie;function ue(e,t){return Object(r["o"])(),Object(r["d"])("h2",null," ! TODO, comming soon (USING FIREBASE) ")}const se={};se.render=ue;var de=se,me=Object(r["F"])("data-v-1655822c");Object(r["r"])("data-v-1655822c");var le={class:"counter"},fe=Object(r["f"])("h1",null,"Counter App Using vuex for state management",-1),pe={class:"buttons"};Object(r["p"])();var be=me((function(e,t,n,o,c,i){return Object(r["o"])(),Object(r["d"])("div",le,[fe,Object(r["f"])("h2",null,Object(r["x"])(e.$store.state.counter),1),Object(r["f"])("div",pe,[Object(r["f"])("button",{onClick:t[1]||(t[1]=function(t){return e.$store.dispatch("increaseCounter")})},"+"),Object(r["f"])("button",{onClick:t[2]||(t[2]=function(t){return e.$store.dispatch("decreaseCounter")})},"-")])])})),Oe={name:"Counter",created:function(){this.$store.commit("increaseCounter",1e3)}};n("0808");Oe.render=be,Oe.__scopeId="data-v-1655822c";var je=Oe,ge=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:Y},{path:"/about-me",name:"AboutMe",component:oe},{path:"/signup",name:"Signup",component:de},{path:"/login",name:"Login",component:ae},{path:"/counter-app",name:"Counter",component:je}],he=Object(I["a"])({history:Object(I["b"])("/"),routes:ge}),ve=he,xe=n("2909"),we=(n("99af"),n("5502")),Ie=n("bc3a"),Re=n.n(Ie),ke=Object(we["a"])({state:{title:"ShoppingCart - Vue JS",counter:0,items:[],toggleButton:!0,toggleAddItem:!0,text:"",description:"",reminder:!0},mutations:{toggleButton:function(e){e.toggleButton=!e.toggleButton},toggleAddItem:function(e){e.toggleAddItem=!e.toggleAddItem},increaseCounter:function(e,t){e.counter+=t},decreaseCounter:function(e,t){e.counter-=t},addItemsToState:function(e,t){e.items=t},setText:function(e,t){e.text=t},setDescription:function(e,t){e.description=t},setReminder:function(e,t){e.reminder=t},addItem:function(e,t){e.items=[].concat(Object(xe["a"])(e.items),[t])}},actions:{toggleButton:function(e){var t=e.commit;t("toggleButton")},toggleAddItem:function(e){var t=e.commit;t("toggleAddItem")},increaseCounter:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Re()("https://www.random.org/integers/?num=1&min=1&max=10&col=5&base=10&format=plain&rnd=new");case 3:r=t.sent,n("increaseCounter",r.data);case 5:case"end":return t.stop()}}),t)})))()},decreaseCounter:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Re()("https://www.random.org/integers/?num=1&min=1&max=10&col=5&base=10&format=plain&rnd=new");case 3:r=t.sent,n("decreaseCounter",r.data);case 5:case"end":return t.stop()}}),t)})))()},fetchItems:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,console.log("Fetch Data from API - Action Called"),t.next=4,fetch("api/items");case 4:return r=t.sent,t.next=7,r.json();case 7:o=t.sent,n("addItemsToState",o);case 9:case"end":return t.stop()}}),t)})))()},addItem:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,fetch("api/items",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 3:return o=n.sent,n.next=6,o.json();case 6:c=n.sent,r("addItem",c);case 8:case"end":return n.stop()}}),n)})))()},setText:function(e,t){var n=e.commit;n("setText",t)},setDescription:function(e,t){var n=e.commit;n("setDescription",t)},setReminder:function(e,t){var n=e.commit;n("setReminder",t)}},getters:{getAppTitle:function(e){return e.title},getShowItemBooleanValue:function(e){return e.getShowItemBooleanValue}},modules:{}});Object(r["c"])(w).use(ke).use(ve).mount("#app")},9299:function(e,t,n){},"9c34":function(e,t,n){},bd45:function(e,t,n){},e22f:function(e,t,n){},e91d:function(e,t,n){e.exports=n.p+"img/appImage.516a6ab1.jpeg"},ec60:function(e,t,n){},f54c:function(e,t,n){"use strict";n("e22f")}});
//# sourceMappingURL=app.b823974b.js.map