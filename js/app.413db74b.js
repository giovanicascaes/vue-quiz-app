(function(e){function n(n){for(var r,o,u=n[0],a=n[1],c=n[2],f=0,l=[];f<u.length;f++)o=u[f],i[o]&&l.push(i[o][0]),i[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(n);while(l.length)l.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==i[a]&&(r=!1)}r&&(s.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},i={app:0},s=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/vue-quiz-app/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var d=a;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),i=t.n(r);i.a},"0c54":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),i=t("9f7b"),s=t.n(i),o=(t("f9e3"),t("2dd8"),t("2f62")),u={questions:[],answers:[],index:0},a=t("75fc"),c=t("2ef0"),d=t.n(c),f={incrementIndex:function(e){e.index++},decrementIndex:function(e){e.index--},questionsFetched:function(e,n){e.questions=n,e.questions.forEach(function(e){e.shuffledAnswers=d.a.shuffle([].concat(Object(a["a"])(e.incorrect_answers),[e.correct_answer])),e.correctAnswerIndex=e.shuffledAnswers.indexOf(e.correct_answer)}),e.answers=n.map(function(e){return{index:null,submitted:!1}})},selectAnswer:function(e,n){e.answers[e.index].index=n},submitAnswer:function(e){e.answers[e.index].submitted=!0}},l={incrementIndex:function(e){var n=e.commit;n("incrementIndex")},decrementIndex:function(e){var n=e.commit;n("decrementIndex")},questionsFetched:function(e,n){var t=e.commit;t("questionsFetched",n)},selectAnswer:function(e,n){var t=e.commit;t("selectAnswer",n)},submitAnswer:function(e){var n=e.commit;n("submitAnswer")}},b={};r["default"].use(o["a"]);var m=new o["a"].Store({state:u,mutations:f,actions:l,getters:b}),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"container"}},[t("Header"),t("QuestionBox")],1)])},w=[],v=t("cebc"),h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-nav",[t("b-nav-item",{attrs:{disabled:""}},[t("b",[e._v("A Nice Question App")])]),t("b-nav-item",{attrs:{disabled:""}},[e._v("Correct Answers: "+e._s(e.totalCorrectAnswers)+"/"+e._s(e.totalAnswers))])],1)},x=[],_={computed:Object(v["a"])({},Object(o["c"])({totalAnswers:function(e){return e.answers.filter(function(e){return e.submitted}).length},totalCorrectAnswers:function(e){return e.answers.reduce(function(n,t,r){return t.submitted&&e.questions[r].correctAnswerIndex===t.index?n+1:n},0)}}))},g=_,A=t("2877"),j=Object(A["a"])(g,h,x,!1,null,null,null),O=j.exports,y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:e.transitionName}},[e.transitioning?e._e():t("div",[e.loading?t("b-jumbotron",{attrs:{lead:"Loading..."}}):e._e(),e.loading?e._e():t("b-jumbotron",{attrs:{lead:"Question #"+(e.index+1)}},[t("p",[t("span",{domProps:{innerHTML:e._s(e.question.question)}})]),t("b-list-group",e._l(e.question.shuffledAnswers,function(n,r){return t("b-list-group-item",{key:r,attrs:{button:!e.answerSubmited,active:e.isSelected(r)&&!e.answerSubmited,variant:e.getAnswerVariant(r)},on:{click:function(n){return e.selectAnswer(r)}}},[e._v("\n          "+e._s(r+1)+")\n          "),t("span",{domProps:{innerHTML:e._s(n)}})])}),1),t("div",{staticClass:"buttons"},[t("b-button-group",[t("b-button",{attrs:{variant:"success",disabled:0===e.index},on:{click:e.previousQuestion}},[e._v("Previous")]),t("b-button",{attrs:{variant:"success",disabled:9===e.index},on:{click:e.nextQuestion}},[e._v("Next")])],1),t("b-button",{staticClass:"submit",attrs:{variant:"primary",disabled:e.answerSubmited||null===e.answerIndex},on:{click:e.submitAnswer}},[e._v("Submit")])],1)],1)],1)])},q=[],S=t("5118"),I={data:function(){return{transitioning:!1,transitionName:"slide-fade-next"}},methods:Object(v["a"])({},Object(o["b"])({submitAnswer:"submitAnswer"}),{_transition:function(e){var n=this;Object(S["setTimeout"])(function(){n.transitioning=!0,Object(S["setTimeout"])(function(){e(),n.transitioning=!1},200)},10)},previousQuestion:function(){var e=this;this.transitionName="slide-fade-previous",this._transition(function(){return e.$store.dispatch("decrementIndex")})},nextQuestion:function(){var e=this;this.transitionName="slide-fade-next",this._transition(function(){return e.$store.dispatch("incrementIndex")})},selectAnswer:function(e){this.answerSubmited||this.$store.dispatch("selectAnswer",e)},isSelected:function(e){return this.answerIndex===e},getAnswerVariant:function(e){if(this.answerSubmited)return this.question.correctAnswerIndex===e?"success":this.isSelected(e)?"danger":""}}),computed:Object(v["a"])({},Object(o["c"])({index:"index",loading:function(e){return 0===e.questions.length},question:function(e){return e.questions[e.index]},answerIndex:function(e){return e.answers[e.index].index},answerSubmited:function(e){return e.answers[e.index].submitted}}))},Q=I,P=(t("bf69"),Object(A["a"])(Q,y,q,!1,null,null,null)),k=P.exports,T={name:"app",components:{Header:O,QuestionBox:k},mounted:function(){var e=this;fetch("https://opentdb.com/api.php?amount=10").then(function(e){return e.json()}).then(function(n){e.storeQuestions(n.results)})},methods:Object(v["a"])({},Object(o["b"])({storeQuestions:"questionsFetched"}))},$=T,M=(t("034f"),Object(A["a"])($,p,w,!1,null,null,null)),N=M.exports;r["default"].config.productionTip=!1,r["default"].use(s.a),new r["default"]({store:m,render:function(e){return e(N)}}).$mount("#app")},"64a9":function(e,n,t){},bf69:function(e,n,t){"use strict";var r=t("0c54"),i=t.n(r);i.a}});
//# sourceMappingURL=app.413db74b.js.map