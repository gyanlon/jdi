(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],h=0,p=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"0f88":function(t,e,n){"use strict";var r=n("3878"),s=n.n(r);s.a},3878:function(t,e,n){},5057:function(t,e,n){"use strict";var r=n("8cfd"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",[n("router-view",{key:t.$route.path})],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[n("span",[t._v("Jimmy 测验小站")])])])])}],a={name:"app",methods:{startTest:function(){}},created:function(){this.$router.push("menu")}},o=a,c=(n("034f"),n("2877")),u=Object(c["a"])(o,s,i,!1,null,null,null),l=u.exports,h=n("c478"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exam"},[t.submit?n("h3",[t._v("考试已完成")]):t._e(),t.submit?t._e():n("h3",[t._v("考试中...")]),n("div",{staticClass:"container papper"},[n("ExamPapper",{attrs:{submit:t.submit},on:{change:t.change}})],1),t.submit?t._e():n("div",{staticClass:"container button"},[n("input",{staticClass:"primary-button",attrs:{type:"button",value:"做完了"},on:{click:t.check}})]),t.submit?n("div",{staticClass:"container result"},[n("p",[t._v("考试得分："+t._s(t.resultMessage))]),n("p"),100===t.score?n("h3",[t._v("不错哦")]):t._e(),t.score>=80&&t.score<100?n("h3",[t._v("加油，再细心一点，你可以得到100分的！")]):t._e(),t.score>60&&t.score<80?n("h3",[t._v("有点难度吧，不服气就"),n("router-link",{attrs:{to:"/menu"}},[t._v(" 点我 ")]),t._v("再来一遍。")],1):t._e(),t.score<60?n("h3",[t._v("失败是成功之母，错题是最好的老师，来看看我们错在哪儿了吧。"),n("p"),t._v("不服气就"),n("router-link",{attrs:{to:"/menu"}},[t._v(" 点我 ")]),t._v("再来一遍!")],1):t._e()]):t._e()])},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questionBody"},t._l(t.questions,(function(e){return n("div",[n("InputQ",{attrs:{id:e.id,score:e.score,content:e.pattern,variables:e.variables,answers:e.answers,submit:t.submit},on:{change:t.change}})],1)})),0)},v=[],m=n("768b"),g=(n("ac6a"),n("ffc1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"question",attrs:{id:t.id,score:t.score},domProps:{innerHTML:t._s(t.template)}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.submit,expression:"submit"}]},[t.correct?n("a",{staticClass:"correct"}):t._e(),t.correct?t._e():n("a",{staticClass:"wrong"})])])}),b=[],_=(n("6b54"),n("456d"),n("28a5"),{props:{id:null,score:0,content:null,variables:null,answers:null,submit:!1},data:function(){return{HTMLcontent:null,result:{},template:null,correct:!1}},methods:{getInputHtml:function(t){return"(<input type='text' id='"+this.id+"_in"+t+"' class='input "+this.id+"'/>)"},genQuestions:function(){var t=this.variables.split(",");this.HTMLcontent=this.content;var e=this.HTMLcontent.split("{}");this.HTMLcontent=e[0];for(var n=1;n<e.length;n++)this.HTMLcontent+=t[n-1]+e[n];for(e=this.HTMLcontent.split("()"),this.HTMLcontent=e[0],n=1;n<e.length;n++)this.HTMLcontent+=this.getInputHtml(n-1)+e[n];return"<div>"+this.HTMLcontent+"</div>"},sendBackResponse:function(){console.log(JSON.stringify(this.result)),this.correct=this.check(this.answers,this.result);var t={qid:this.id,score:this.correct?this.score:0};this.$emit("change",t)},check:function(t,e){var n=0,r=t.split(",");if(r.length!==Object.keys(e).length)return!1;for(var s=0,i=Object.entries(e);s<i.length;s++){var a=Object(m["a"])(i[s],2),o=(a[0],a[1]);if(console.log(r[n].toString(),o.toString()),r[n].toString()!==o.toString())return!1;n++}return!0},change:function(t,e){return function(n){t[n.target.id]=n.target.value,e()}}},created:function(){this.template=this.genQuestions()},mounted:function(){var t,e=document.getElementsByClassName("input "+this.id);for(t=0;t<e.length;t++)e[t].addEventListener("change",this.change(this.result,this.sendBackResponse))}}),y=_,w=(n("0f88"),Object(c["a"])(y,g,b,!1,null,null,null)),O=w.exports,x="questions",M=[{id:"q1",score:5,pattern:"{} X {} = ()",variables:"3,5",answers:"15"},{id:"q2",score:20,pattern:"{} X {} 表示 () 的 () 倍， 又表示()个() 。",variables:"8,9",answers:"8,9,9,8"}];window.localStorage.setItem(x,JSON.stringify(M));var S={fetch:function(){return JSON.parse(window.localStorage.getItem(x)||"[]")},save:function(t){window.localStorage.setItem(x,JSON.stringify(t))}},j={props:{submit:!1},components:{InputQ:O},data:function(){return{total:0,result:{},questions:S.fetch()}},methods:{calculateTotal:function(){var t,e=document.getElementsByClassName("question");for(this.total=0,t=0;t<e.length;t++){var n=e[t].getAttribute("score");n&&(this.total+=parseInt(n))}return this.total},caculateScore:function(t){for(var e=0,n=0,r=Object.entries(t);n<r.length;n++){var s=Object(m["a"])(r[n],2),i=(s[0],s[1]);e+=parseInt(i)}return e},change:function(t){console.log("GET event:",JSON.stringify(t)),this.result[t.qid]=t.score;var e={total:this.calculateTotal(),score:this.caculateScore(this.result)};this.$emit("change",e)}}},T=j,C=Object(c["a"])(T,d,v,!1,null,null,null),k=C.exports,E={components:{ExamPapper:k},data:function(){return{resultMessage:null,score:0,submit:!1}},methods:{change:function(t){this.score=Math.round(100*parseInt(t.score)/parseInt(t.total))},check:function(){this.submit=!1,this.resultMessage="",this.inputAllFilled()?(this.resultMessage=this.score+"分",this.submit=!0,this.disableAllInputBox()):alert("你还没有做完呢 ！！！")},inputAllFilled:function(){for(var t=document.getElementsByClassName("input"),e=0;e<t.length;e++){var n=t[e].value;if(!n)return!1}return!0},disableAllInputBox:function(){for(var t=document.getElementsByClassName("input"),e=0;e<t.length;e++)t[e].readOnly=!0}}},I=E,H=(n("5057"),Object(c["a"])(I,p,f,!1,null,null,null)),L=H.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"/exam"}},[n("h2",{staticClass:"ab_title",staticStyle:{color:"blue",cursor:"wait"}},[t._v("新的测验")])])],1)},N=[],P={name:"Menu"},$=P,B=Object(c["a"])($,q,N,!1,null,null,null),J=B.exports;r["a"].use(h["a"]);var A=new h["a"]({routes:[{path:"/exam",name:"Exam",component:L},{path:"/menu",name:"Menu",component:J}]});new r["a"]({el:"#app",router:A,render:function(t){return t(l)}}),r["a"].config.productionTip=!1},"64a9":function(t,e,n){},"8cfd":function(t,e,n){}});
//# sourceMappingURL=app.b6ca4033.js.map