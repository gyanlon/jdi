(function(t){function e(e){for(var a,s,l=e[0],o=e[1],c=e[2],h=0,f=[];h<l.length;h++)s=l[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,l=1;l<n.length;l++){var o=n[l];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"0f88":function(t,e,n){"use strict";var a=n("3878"),i=n.n(a);i.a},3878:function(t,e,n){},5057:function(t,e,n){"use strict";var a=n("8cfd"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",[t.isRouterAlive?n("router-view",{key:t.$route.path}):t._e()],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[n("span",[t._v("Jimmy 测验小站")])])])])}],s=n("bd86"),l=Object(s["a"])({name:"app",methods:{startTest:function(){}},created:function(){this.$router.push("menu")},data:function(){return{isRouterAlive:!0}},provide:function(){return{reload:this.reload}}},"methods",{reload:function(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}}),o=l,c=(n("034f"),n("2877")),u=Object(c["a"])(o,i,r,!1,null,null,null),h=u.exports,f=n("c478"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exam"},[t.submit?n("h3",[t._v("考试已完成")]):t._e(),t.submit?t._e():n("h3",[t._v("考试中...")]),n("div",{staticClass:"container papper"},[n("ExamPapper",{attrs:{submit:t.submit},on:{change:t.change}})],1),t.submit?t._e():n("div",{staticClass:"container button"},[n("input",{staticClass:"primary-button",attrs:{type:"button",value:"做完了"},on:{click:t.check}})]),t.submit?n("div",{staticClass:"container result"},[n("p",[t._v("考试得分："+t._s(t.resultMessage))]),n("p"),100===t.score?n("h3",[t._v("🐂🐂🐂"),n("p",[n("a",{attrs:{href:"javascript: ;"},on:{click:t.refresh}},[t._v(" 再来 ")])])]):t._e(),t.score>=80&&t.score<100?n("h3",[t._v("加油，再细心一点，你可以得到100分的！"),n("p"),t._v("不服气"),n("a",{attrs:{href:"javascript: ;"},on:{click:t.refresh}},[t._v(" 再来 ")]),t._v("!")]):t._e(),t.score>=60&&t.score<80?n("h3",[t._v("有点难度吧，不服气就"),n("a",{attrs:{href:"javascript: ;"},on:{click:t.refresh}},[t._v("  点我 ")]),t._v("再来一遍。")]):t._e(),t.score<60?n("h3",[t._v("失败是成功之母，错题是最好的老师，不要着急，先仔细看看我们错在哪儿了。"),n("p"),t._v("不服气就"),n("a",{attrs:{href:"javascript: ;"},on:{click:t.refresh}},[t._v("  点我 ")]),t._v("再来一遍!")]):t._e()]):t._e()])},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questionBody"},[n("ul",t._l(t.questions,(function(e){return n("li",[n("InputQ",{attrs:{id:e.id,score:e.score,content:e.pattern,variables:e.variables,answers:e.answers,submit:t.submit},on:{change:t.change}})],1)})),0)])},g=[],m=n("768b"),b=(n("ac6a"),n("ffc1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"question",attrs:{id:t.id,score:t.score},domProps:{innerHTML:t._s(t.template)}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.submit,expression:"submit"}]},[t.correct?n("a",{staticClass:"correct"}):t._e(),t.correct?t._e():n("a",{staticClass:"wrong"})])])}),_=[],w=(n("6b54"),n("456d"),n("28a5"),n("a481"),"questions"),y="backups",O="UDQ",x=[{id:"q1",score:5,pattern:"{} &times; {} = ()",variables:"3,5",answers:"15",variable_range:["1-9","1-9"],answer_alg:["$[1]*$[2]"]},{id:"q2",score:20,pattern:"{} &times; {} 表示 () 的 () <b>倍</b>， 又表示() 个 () 。",variables:"8,9",answers:"8,9,9,8",variable_range:["1-9","1-9"],answer_alg:["$[1]","$[2]","$[2]","$[1]"]}];function D(t,e){for(var n="",a=S(t,e),i=0;i<a.length;i++)n+=a[i]+",";return n=n.substr(0,n.length-1),console.log("answers:",n),n}function S(t,e){for(var n=[],a=0;a<e.length;a++){for(var i=[],r=t.split(","),s=0;s<r.length;s++){i[s+1]=r[s];var l=/^\d+$/;l.test(i[s+1])&&(i[s+1]=parseInt(i[s+1]))}var o=e[a].replace(/\$/g,"adjustArr");console.log("exp=",o,"adjustArr",i),n[a]=window.eval.call(window,"(function (adjustArr) { return "+o+"; })")(i)}return console.log("args:",n),n}var j={};function A(t){console.log("ex=",t);var e=t;return t.indexOf("-")>0?e=C(parseInt(t.split("-")[0]),parseInt(t.split("-")[1])):k(t)&&(e=j[t]),console.log("random:",e),e}function k(t){var e=/^\$\[\d+\]$/;return e.test(t)}function C(t,e){return Math.floor(Math.random()*(e-t+1)+t)}var Q={init:function(){console.log("init");var t=x.concat(this.fetchActiveUDQ());t=this.initQuestions(t),window.localStorage.setItem(w,JSON.stringify(t))},initQuestions:function(t){for(var e=0;e<t.length;e++)this.initQuestion(t[e]);return t},initQuestion:function(t){j={};var e="";console.log(t.variable_range);for(var n=0;n<t.variable_range.length;n++){var a=A(t.variable_range[n]);j["$["+(n+1)+"]"]=a,e+=a+","}return t.variables=e.substr(0,e.length-1),console.log("variables",t.variables),t.answers=D(t.variables,t.answer_alg),t},fetch:function(){this.init();var t=JSON.parse(window.localStorage.getItem(w)||"[]");return t=this.rearrageIds(t.concat(this.fetchBackup())),t},rearrageIds:function(t){for(var e=0;e<t.length;e++){var n=t[e];n.id="q"+(e+1)}return t},save:function(t){window.localStorage.setItem(w,JSON.stringify(t))},saveBackups:function(t){window.localStorage.setItem(y,JSON.stringify(t))},saveUDQ:function(t){window.localStorage.setItem(O,JSON.stringify(t))},appendBackup:function(t){var e=this.fetchBackup();this.indexOf(e,t)<0&&(e.push(t),this.saveBackups(e))},appendUDQ:function(t){var e=this.fetchUDQ();this.indexOfUDQ(e,t)<0&&(e.push(t),this.saveUDQ(e))},removeBackup:function(t){var e=this.fetchBackup(),n=this.indexOf(e,t);while(n>=0)e.splice(n,1),n=this.indexOf(e,t);this.saveBackups(e)},removeUDQ:function(t){var e=this.fetchUDQ(),n=this.indexOfUDQ(e,t);while(n>=0)e.splice(n,1),n=this.indexOfUDQ(e,t);this.saveUDQ(e)},activateUDQ:function(t){console.log("activate:",JSON.stringify(t));var e=this.fetchUDQ(),n=this.indexOfUDQ(e,t);this.initQuestion(e[n]),confirm(JSON.stringify(e[n]))&&(e[n].active=!0,this.saveUDQ(e))},inactivateUDQ:function(t){var e=this.fetchUDQ(),n=this.indexOfUDQ(e,t);e[n].active=!1,this.saveUDQ(e)},fetchBackup:function(){return JSON.parse(window.localStorage.getItem(y)||"[]")},fetchUDQ:function(){return JSON.parse(window.localStorage.getItem(O)||"[]")},fetchActiveUDQ:function(){for(var t=this.fetchUDQ(),e=[],n=0;n<t.length;n++)t[n].active&&e.push(t[n]);return e},indexOf:function(t,e){for(var n=0;n<t.length;n++){var a=t[n];if(a.pattern===e.pattern&&(a.variables===e.variables||!a.variables&&!e.variables))return n}return-1},indexOfUDQ:function(t,e){for(var n=0;n<t.length;n++){var a=t[n];if(a.pattern===e.pattern)return n}return-1}},M={props:{id:null,score:0,content:null,variables:null,answers:null,submit:!1},data:function(){return{HTMLcontent:null,result:{},template:null,correct:!1}},methods:{getInputHtml:function(t){return"(<input type='text' id='"+this.id+"_in"+t+"' class='input "+this.id+"'/>)"},genQuestions:function(){var t=this.variables.split(",");this.HTMLcontent=this.content;var e=this.HTMLcontent.split("{}");this.HTMLcontent=e[0];for(var n=1;n<e.length;n++)this.HTMLcontent+=t[n-1]+e[n];for(e=this.HTMLcontent.split("()"),this.HTMLcontent=e[0],n=1;n<e.length;n++)this.HTMLcontent+=this.getInputHtml(n-1)+e[n];return"<div>"+this.HTMLcontent+"</div>"},sendBackResponse:function(){console.log(JSON.stringify(this.result)),this.correct=this.check(this.answers,this.result);var t={qid:this.id,score:this.correct?this.score:0};this.$emit("change",t);var e={id:this.id,score:this.score,pattern:this.content,variables:this.variables,answers:this.answers};this.correct?Q.removeBackup(e):Q.appendBackup(e)},check:function(t,e){var n=0,a=t.split(",");if(a.length!==Object.keys(e).length)return!1;for(var i=0,r=Object.entries(e);i<r.length;i++){var s=Object(m["a"])(r[i],2),l=(s[0],s[1]);if(console.log(a[n].toString(),l.toString()),a[n].toString()!==l.toString())return!1;n++}return!0},change:function(t,e){return function(n){t[n.target.id]=n.target.value,e()}}},created:function(){this.template=this.genQuestions()},mounted:function(){var t,e=document.getElementsByClassName("input "+this.id);for(t=0;t<e.length;t++)e[t].addEventListener("change",this.change(this.result,this.sendBackResponse))}},T=M,U=(n("0f88"),Object(c["a"])(T,b,_,!1,null,null,null)),$=U.exports,I={props:{submit:!1},components:{InputQ:$},data:function(){return{total:0,result:{},questions:Q.fetch()}},methods:{calculateTotal:function(){var t,e=document.getElementsByClassName("question");for(this.total=0,t=0;t<e.length;t++){var n=e[t].getAttribute("score");n&&(this.total+=parseInt(n))}return this.total},caculateScore:function(t){for(var e=0,n=0,a=Object.entries(t);n<a.length;n++){var i=Object(m["a"])(a[n],2),r=(i[0],i[1]);e+=parseInt(r)}return e},change:function(t){console.log("GET event:",JSON.stringify(t)),this.result[t.qid]=t.score;var e={total:this.calculateTotal(),score:this.caculateScore(this.result)};this.$emit("change",e)}}},N=I,B=Object(c["a"])(N,p,g,!1,null,null,null),z=B.exports,H={components:{ExamPapper:z},data:function(){return{resultMessage:null,score:0,submit:!1}},inject:["reload"],methods:{refresh:function(){this.reload()},change:function(t){this.score=Math.round(100*parseInt(t.score)/parseInt(t.total))},check:function(){this.submit=!1,this.resultMessage="",this.inputAllFilled()?(this.resultMessage=this.score+"分",this.submit=!0,this.disableAllInputBox()):alert("你还没有做完呢 ！！！")},inputAllFilled:function(){for(var t=document.getElementsByClassName("input"),e=0;e<t.length;e++){var n=t[e].value;if(!n)return!1}return!0},disableAllInputBox:function(){for(var t=document.getElementsByClassName("input"),e=0;e<t.length;e++)t[e].readOnly=!0}}},J=H,E=(n("5057"),Object(c["a"])(J,v,d,!1,null,null,null)),P=E.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"/exam"}},[n("h2",{staticClass:"ab_title",staticStyle:{color:"blue",cursor:"wait"}},[t._v("开始吧")])]),n("div",{staticStyle:{"margin-top":"1000px"}},[n("router-link",{attrs:{to:"/adm"}},[n("h2",{staticClass:"ab_title",staticStyle:{color:"blue",cursor:"wait"}},[t._v(" ")])])],1)],1)},R=[],Z={name:"Menu"},L=Z,G=Object(c["a"])(L,q,R,!1,null,null,null),F=G.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-24 col-sm-24 col-xs-24 adm"},[n("h3",[t._v(" 做错的题目 ")]),n("v-table",{attrs:{width:700,columns:t.backupColumns,"table-data":t.backupData,"show-vertical-border":!0}}),n("h3",[t._v(" 自定义 ")]),n("v-table",{attrs:{width:700,columns:t.udqColumns,"table-data":t.udqData,"show-vertical-border":!0,"select-change":t.select}}),n("div",{staticClass:"list buttons"},[n("a",{attrs:{href:"javascript:;"},on:{click:t.add}},[t._v("添加")]),t._v("   \n        "),n("a",{attrs:{href:"javascript:;"},on:{click:t.activate}},[t._v("启用")]),t._v("  \n        "),n("a",{attrs:{href:"javascript:;"},on:{click:t.inactivate}},[t._v("停用")]),t._v("  \n        "),n("a",{attrs:{href:"javascript:;"},on:{click:t.modify}},[t._v("修改")]),t._v("  \n        "),n("a",{attrs:{href:"javascript:;"},on:{click:t.del}},[t._v("删除")])]),t.create?n("div",{staticClass:"form"},[n("span",{staticClass:"close",on:{click:t.closeForm}},[t._v("X")]),t._v("\n        题干："),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.pattern,expression:"form.pattern"}],attrs:{type:"text",id:"pattern"},domProps:{value:t.form.pattern},on:{input:function(e){e.target.composing||t.$set(t.form,"pattern",e.target.value)}}}),n("span",{staticClass:"helpicon",on:{click:t.openHelp}},[t._v(" ? ")]),n("p",[t._v("\n        分数："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.score,expression:"form.score"}],staticStyle:{"text-align":"left"},attrs:{type:"text",id:"score"},domProps:{value:t.form.score},on:{input:function(e){e.target.composing||t.$set(t.form,"score",e.target.value)}}}),t._v("\n        参数范围："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.variable_range,expression:"form.variable_range"}],attrs:{type:"text",id:"variable_range"},domProps:{value:t.form.variable_range},on:{input:function(e){e.target.composing||t.$set(t.form,"variable_range",e.target.value)}}}),t._v("\n        答案算法："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.answer_alg,expression:"form.answer_alg"}],attrs:{type:"text",id:"answer_alg"},domProps:{value:t.form.answer_alg},on:{input:function(e){e.target.composing||t.$set(t.form,"answer_alg",e.target.value)}}})]),n("div",{staticClass:"buttons"},[n("a",{attrs:{href:"javascript:;"},on:{click:t.save}},[t._v(" 保存 ")])])]):t._e(),t.help?n("div",{staticClass:"help"},[n("span",{staticClass:"close",on:{click:t.closeHelp}},[t._v("X")]),t._m(0)]):t._e()],1)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("b",[t._v("题干")]),t._v(" ：支持生成随机参数\n            "),n("ul",[n("li",[t._v("{} ：题干中英文的{}表示随机参数, 可以在后面配置的参数范围内随机取数。")]),n("li",[t._v("() ：题干中英文的()表示需要填写的内容。")])])]),n("li",[n("b",[t._v("参数范围")]),t._v("：题干中的参数的取值范围，比如1-9，生成题目时，会在参数范围内随机取一个数。如果有多个参数，需要用,(英文的,)分开。也支持$[n]表示前面的参数。")]),n("li",[n("b",[t._v("答案算法")]),t._v("：如果有参数，答案与参数的算法关系！请中$[1]表示第一个参数")]),n("li",[n("b",[t._v("示例：")]),t._v(" 一位数求和："),n("br"),t._v("\n            题干：{} + {} = ()"),n("br"),t._v("\n            参数范围：1-9，1-9"),n("br"),t._v("\n            答案算法：$[1]+$[2]\n        ")])])}],V=(n("7f7f"),n("3b20"),n("65f4"));a["a"].component(V["VTable"].name,V["VTable"]),a["a"].component(V["VPagination"].name,V["VPagination"]);var K={data:function(){return{backupData:Q.fetchBackup(),udqData:Q.fetchUDQ(),backupColumns:[{field:"pattern",title:"题干",width:300,titleAlign:"center",columnAlign:"left"},{field:"score",title:"分数",width:100,titleAlign:"center",columnAlign:"center"},{field:"variables",title:"参数",width:100,titleAlign:"center",columnAlign:"center"},{field:"answers",title:"答案",titleAlign:"center",columnAlign:"center"}],udqColumns:[{width:40,titleAlign:"center",columnAlign:"center",type:"selection"},{field:"pattern",title:"题干",width:280,titleAlign:"center",columnAlign:"left"},{field:"score",title:"分数",width:50,titleAlign:"center",columnAlign:"center"},{field:"variable_range",title:"参数范围",width:140,titleAlign:"center",columnAlign:"center"},{field:"answer_alg",title:"答案算法",width:140,titleAlign:"center",columnAlign:"center"},{field:"active",title:"是否启用",titleAlign:"center",columnAlign:"center"}],create:!1,form:{pattern:"",score:5,variable_range:"",answer_alg:""},selectObj:[],help:!1}},inject:["reload"],methods:{add:function(){this.create=!0},save:function(){console.log(Q.indexOfUDQ(this.form));var t=Q.fetchUDQ();if(Q.indexOfUDQ(t,this.form)>=0){if(!confirm("是否覆盖已存在的记录"))return;Q.removeUDQ(this.selectObj[0])}if(this.form.pattern&&this.form.score&&this.form.answer_alg){var e={pattern:this.form.pattern,score:this.form.score,variable_range:Array.isArray(this.form.variable_range)?this.form.variable_range:this.form.variable_range.replace(/ /g,"").split(","),answer_alg:Array.isArray(this.form.answer_alg)?this.form.answer_alg:this.form.answer_alg.replace(/ /g,"").this.form.answer_alg.split(","),variables:"",answers:"",active:!1};Q.appendUDQ(e)}this.create=!1,this.form={pattern:"",score:0,variable_range:"",answanswer_alg:""},this.reload()},select:function(t){this.selectObj=[],this.selectObj=this.selectObj.concat(t),console.log(JSON.stringify(this.selectObj))},modify:function(){if(1===this.selectObj.length){this.create=!0;var t=this.selectObj[0];this.form.pattern=t.pattern,this.form.score=t.score,this.form.variable_range=t.variable_range,this.form.answer_alg=t.answer_alg}else alert("请选择且仅选择一条记录！")},del:function(){for(var t=0;t<this.selectObj.length;t++)Q.removeUDQ(this.selectObj[t]);this.reload()},activate:function(){for(var t=0;t<this.selectObj.length;t++)Q.activateUDQ(this.selectObj[t]);this.reload()},inactivate:function(){for(var t=0;t<this.selectObj.length;t++)Q.inactivateUDQ(this.selectObj[t]);this.reload()},openHelp:function(){this.help=!0},closeHelp:function(){this.help=!1},closeForm:function(){this.create=!1,this.help=!1}}},W=K,tt=(n("58a8"),Object(c["a"])(W,Y,X,!1,null,null,null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{background:"#ccc",padding:"40px","min-height":"1500px"},attrs:{id:"vueeasytable"}},[n("h3",{staticStyle:{"text-align":"left","margin-top":"30px"}},[t._v("\n    家庭农场\n    "),n("div",{staticStyle:{float:"right"}},[n("button",{attrs:{type:"primary"},on:{click:t.seeData}},[t._v("查看")]),n("button",{attrs:{type:"primary"},on:{click:function(e){t.addModalframe=!0}}},[t._v("添加")]),n("button",{attrs:{type:"success"},on:{click:t.modifyData}},[t._v("修改")]),n("button",{attrs:{type:"warning"},on:{click:t.deleData}},[t._v("删除")])])]),n("hr"),n("div",{staticStyle:{"margin-bottom":"20px"}},[n("span",[t._v(" 身份证号：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sfzhcx,expression:"sfzhcx"}],staticStyle:{width:"280px",display:"inline-block"},attrs:{type:"text",placeholder:"输入提示",status:"info"},domProps:{value:t.sfzhcx},on:{input:function(e){e.target.composing||(t.sfzhcx=e.target.value)}}}),n("button",{attrs:{type:"primary"},on:{click:t.selectData}},[t._v("查询")])]),n("div",{staticClass:"col-md-24 col-sm-24 col-xs-24",staticStyle:{padding:"30px"}},[n("v-table",{staticStyle:{width:"100%"},attrs:{"is-horizontal-resize":"",columns:t.columns,"table-data":t.tableData,"show-vertical-border":!1,"select-change":t.GetSelectObj}}),n("div",{staticStyle:{padding:"20px",float:"right"}},[n("v-pagination",{attrs:{total:t.dataNum,"page-size":10},on:{"page-change":t.pageChange,"page-size-change":t.pageSizeChange}})],1)],1)])},at=[],it={name:"vueeasytable",data:function(){return{GetData:[],pageIndex:1,pageSize:10,dataNum:0,columns:[{width:60,titleAlign:"center",columnAlign:"center",type:"selection"},{field:"QYBM",title:"企业编码",width:100,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"ZTMC",title:"主体名称",width:260,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"SFZH",title:"身份证号",width:100,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"NCMC",title:"农场名称",width:100,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"ZTDJ",title:"主体等级",width:100,titleAlign:"center",columnAlign:"center",isResize:!0},{field:"XYDJ",title:"信用等级",width:100,titleAlign:"center",columnAlign:"center",isResize:!0}],tableData:[],sfzhcx:"",SelectObj:[],seeobjs:{},seeModalframe:!1,addModalframe:!1,modifyModalframe:!1,addModel:{},modifyModel:{}}},created:function(){this.getTableData()},mounted:function(){},methods:{Getwebsites:function(){var t;return t},websitesHandle:function(){var t,e=this.Getwebsites(),n=[];for(var a in e)t={ID:e[a].ID,QYBM:e[a].QYBM,ZTMC:e[a].ZTMC,SFZH:e[a].SFZH,NCMC:e[a].NCMC,ZTDJ:e[a].ZTDJ,XYDJ:e[a].XYDJ},n.push(t);var i=n,r=[{ID:"1",QYBM:"1",ZTMC:"1",SFZH:"1",NCMC:"1",ZTDJ:"1",XYDJ:"1"}];r=r.concat(i),this.GetData=r,this.dataNum=this.GetData.length},getTableData:function(){this.websitesHandle(),this.tableData=this.GetData.slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize)},pageChange:function(t){this.pageIndex=t,this.getTableData()},pageSizeChange:function(t){this.pageIndex=1,this.pageSize=t,this.getTableData()},selectData:function(){this.websitesHandle(),this.tableData=this.GetData.slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize)},GetSelectObj:function(t){this.SelectObj=[],this.SelectObj=this.SelectObj.concat(t)},seeData:function(){if(0==this.SelectObj.length)alert({title:"错误信息",content:"请先选择一条记录"});else if(this.SelectObj.length>1)alert({title:"错误信息",content:"每次只可以查看一条记录"});else if(1==this.SelectObj.length){this.seeModalframe=!0}},modifyData:function(){if(0==this.SelectObj.length)alert({title:"错误信息",content:"请先选择一条记录"});else if(this.SelectObj.length>1)alert({title:"错误信息",content:"每次只可以查看一条记录"});else if(1==this.SelectObj.length){var t;this.modifyModalframe=!0,this.seeobjs=t}},modifyConfirm:function(){console.log(this.modifyModel),this.selectData(),this.SelectObj=[]},addConfirm:function(){this.selectData()},deleData:function(){this.selectData(),this.SelectObj=[]}}},rt=it,st=Object(c["a"])(rt,nt,at,!1,null,"54522431",null),lt=st.exports;a["a"].use(f["a"]);var ot=new f["a"]({routes:[{path:"/exam",name:"Exam",component:P},{path:"/menu",name:"Menu",component:F},{path:"/adm",name:"Adm",component:et},{path:"/test",name:"Test",component:lt}]});new a["a"]({el:"#app",router:ot,render:function(t){return t(h)}}),a["a"].config.productionTip=!1},"58a8":function(t,e,n){"use strict";var a=n("e1fd"),i=n.n(a);i.a},"64a9":function(t,e,n){},"8cfd":function(t,e,n){},e1fd:function(t,e,n){}});
//# sourceMappingURL=app.cee91bf1.js.map