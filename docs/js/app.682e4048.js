(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],m=0,u=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"0ddf":function(t,e,s){},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},"5f6c":function(t,e,s){"use strict";var a=s("eae6"),n=s.n(a);n.a},"867d":function(t,e,s){"use strict";var a=s("0ddf"),n=s.n(a);n.a},"9c0c":function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("7db0"),s("b0c0"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var a,n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-container"},[s("md-app",[s("md-app-toolbar",[s("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.showNavigation=!0}}},[s("md-icon",[t._v("menu")])],1),s("span",{staticClass:"md-title"},[t._v("fcl")])],1),s("md-app-drawer",{attrs:{"md-active":t.showNavigation,"md-swipeable":""},on:{"update:mdActive":function(e){t.showNavigation=e},"update:md-active":function(e){t.showNavigation=e}}},[s("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[t._v(" Navigation ")]),s("md-list",[s("md-list-item",{attrs:{to:"/"},on:{click:function(e){t.showNavigation=!1}}},[s("md-icon",[t._v("move_to_inbox")]),s("span",{staticClass:"md-list-item-text"},[t._v("Home")])],1),s("md-list-item",{attrs:{to:"/clicker"},on:{click:function(e){t.showNavigation=!1}}},[s("md-icon",[t._v("track_changes")]),s("span",{staticClass:"md-list-item-text"},[t._v("Clicker")])],1),s("md-list-item",{attrs:{"md-expand":""}},[s("md-icon",[t._v("timeline")]),s("span",{staticClass:"md-list-item-text"},[t._v("Games")]),s("md-list",{attrs:{slot:"md-expand"},slot:"md-expand"},t._l(t.games,(function(e){return s("md-list-item",{key:e.id,staticClass:"md-inset",attrs:{to:"/stats/"+e.id},on:{click:function(e){t.showNavigation=!1}}},[t._v(t._s(e.name())+" ("+t._s(new Date(e.startTime()).toLocaleDateString())+")")])})),1)],1),s("md-list-item",{attrs:{to:"/about"}},[s("md-icon",[t._v("send")]),s("span",{staticClass:"md-list-item-text"},[t._v("About")])],1),s("md-list-item",{on:{click:function(e){return t.deleteStorage()}}},[s("md-icon",[t._v("delete_sweep")]),s("span",{staticClass:"md-list-item-text"},[t._v("Delete Local Storage")])],1)],1)],1),s("md-app-content",[s("router-view")],1),s("md-snackbar",{attrs:{"md-position":"center","md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.showSnackbar=e},"update:md-active":function(e){t.showSnackbar=e}}},[s("span",[t._v(t._s(t.snackbarMessage))]),t._v(" > ")])],1)],1)},r=[],o=s("2f62"),l={name:"App",data:function(){return{snackbarMessage:"",showSnackbar:!1,showNavigation:!1}},methods:{deleteStorage:function(){this.$store.commit("clear"),this.snackbarMessage="cleared local storage. refreshing page...",this.showSnackbar=!0,setTimeout((function(){window.location.reload()}),1e3)}},computed:Object(o["b"])({games:function(t){return t.games}})},c=l,d=(s("5c0b"),s("2877")),m=Object(d["a"])(c,i,r,!1,null,null,null),u=m.exports,f=s("8c4f"),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("h1",[t._v("Welcome")])])}],g={name:"Home",components:{}},p=g,b=Object(d["a"])(p,h,v,!1,null,null,null),_=b.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],T={name:"Home",components:{},methods:{}},O=T,k=Object(d["a"])(O,E,w,!1,null,null,null),S=k.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",[s("md-card-header",[s("md-card-header-text",[s("div",{staticClass:"md-title"},[t._v(" "+t._s(t.game.name())+" ("+t._s(new Date(t.game.startTime()).toLocaleDateString())+") ")]),s("div",{staticClass:"md-subhead"},[s("div",[t._v(" Result: "+t._s(t.game.result().leftGoals)+" : "+t._s(t.game.result().rightGoals)+" ")])])])],1),s("md-card-content",[s("game-metrics",{attrs:{game:t.game}})],1),s("div",{staticClass:"actions-row"}),s("md-card-actions",[s("md-button",{staticClass:"md-icon-button md-raised md-accent",on:{click:function(e){return t.deleteGame()}}},[s("md-icon",[t._v("delete")])],1)],1),s("md-snackbar",{attrs:{"md-position":"center","md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.showSnackbar=e},"update:md-active":function(e){t.showSnackbar=e}}},[s("span",[t._v(t._s(t.snackbarMsg))])])],1)},y=[],G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",[t._v("Metrics")]),t._l(t.game.sets,(function(t){return s("svg",{key:t.id,attrs:{id:"goals-"+t.id}})})),s("md-table",{attrs:{"md-card":""}},[s("md-table-row",[s("md-table-head",[t._v(t._s(t.game.leftTeam))]),s("md-table-head"),s("md-table-head",[t._v(t._s(t.game.rightTeam))])],1),s("md-table-row",[s("md-table-cell",[t._v(t._s(t.statistics.total.left.goals.sum)+" / "+t._s(t.statistics.total.left.goals.sum+t.statistics.total.left.atGoal.sum)+" ("+t._s((t.statistics.total.left.goals.sum/(t.statistics.total.left.goals.sum+t.statistics.total.left.atGoal.sum)*100||0).toFixed(0))+"%)")]),s("md-table-cell",[t._v("Shots at goal")]),s("md-table-cell",[t._v(t._s(t.statistics.total.right.goals.sum)+" / "+t._s(t.statistics.total.right.goals.sum+t.statistics.total.right.atGoal.sum)+" ("+t._s((t.statistics.total.right.goals.sum/(t.statistics.total.right.goals.sum+t.statistics.total.right.atGoal.sum)*100||0).toFixed(0))+"%)")])],1),s("md-table-row",[s("md-table-cell",[t._v(t._s(t.statistics.total.left.pass))]),s("md-table-cell",[t._v("Pass")]),s("md-table-cell",[t._v(t._s(t.statistics.total.right.pass))])],1)],1)],2)},x=[],D=(s("4160"),s("159b"),s("5698")),L=s("2ef0"),M=s.n(L),A=(s("99af"),s("4de4"),s("d81d"),s("b64b"),s("d4ec")),N=s("bee2"),j=(s("caad"),s("2532"),s("ade3")),I=-1,P=0,R=1,F=2,$=3,Y=4,V=5,H=6,U=7,J=8,B=9,z=10,W=11,q=12,K=9e3,Q=9001,X=(a={},Object(j["a"])(a,I,"UNDEFINED"),Object(j["a"])(a,P,"TYPE_L_GOAL"),Object(j["a"])(a,R,"TYPE_L_DEFENSE"),Object(j["a"])(a,F,"TYPE_L_MIDDLE"),Object(j["a"])(a,$,"TYPE_L_OFFENSE"),Object(j["a"])(a,Y,"TYPE_L_SHOT_AT_GOAL"),Object(j["a"])(a,V,"TYPE_L_TIMEOUT"),Object(j["a"])(a,H,"TYPE_R_GOAL"),Object(j["a"])(a,U,"TYPE_R_DEFENSE"),Object(j["a"])(a,J,"TYPE_R_MIDDLE"),Object(j["a"])(a,B,"TYPE_R_OFFENSE"),Object(j["a"])(a,z,"TYPE_R_SHOT_AT_GOAL"),Object(j["a"])(a,W,"TYPE_R_TIMEOUT"),Object(j["a"])(a,q,"TYPE_N_BALL_LOST"),Object(j["a"])(a,K,"TYPE_START"),Object(j["a"])(a,Q,"TYPE_END"),a),Z=function(){function t(e,s){Object(A["a"])(this,t),this.type=-1,this.timestamp=0,this.type=e,this.timestamp=s}return Object(N["a"])(t,[{key:"toString",value:function(){return"".concat(X[this.type],": ").concat(this.timestamp)}}]),t}(),tt={L_GOAL:function(){return new Z(P,Date.now())},L_DEFENSE:function(){return new Z(R,Date.now())},L_MIDDLE:function(){return new Z(F,Date.now())},L_OFFENSE:function(){return new Z($,Date.now())},L_SHOT_AT_GOAL:function(){return new Z(Y,Date.now())},L_TIMEOUT:function(){return new Z(V,Date.now())},R_GOAL:function(){return new Z(H,Date.now())},R_DEFENSE:function(){return new Z(U,Date.now())},R_MIDDLE:function(){return new Z(J,Date.now())},R_OFFENSE:function(){return new Z(B,Date.now())},R_SHOT_AT_GOAL:function(){return new Z(z,Date.now())},R_TIMEOUT:function(){return new Z(W,Date.now())},N_BALL_LOST:function(){return new Z(q,Date.now())},START:function(){return new Z(K,Date.now())},END:function(){return new Z(Q,Date.now())}},et=function(t){return function(e){return t.includes(e.type)}},st=function(t){return et([t])},at=function(t,e,s){return t.filter((function(t,a,n){return a>0&&e.includes(t.type)&&s.includes(n[a-1].type)}))},nt=s("ec26"),it=function(){function t(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(A["a"])(this,t),this.id="",this.number=-1,this.events=[],this.id=Object(nt["a"])(),this.number=e,this.events=s}return Object(N["a"])(t,[{key:"startTime",value:function(){var t=this.events.find(st(K))||{};return t.timestamp}},{key:"endTime",value:function(){var t=this.events.find(st(Q))||{};return t.timestamp}},{key:"finished",value:function(){var t=this.events[this.events.length-1];return!(!t||t.type!=Q)}},{key:"pushEvent",value:function(t){this.events.push(t)}},{key:"goalStatistics",value:function(){var t={left:[],right:[]},e=0,s=0;if(0==this.events.length)return t;var a=this.startTime();return t.left.push({value:0,timestamp:a}),t.right.push({value:0,timestamp:a}),this.events.forEach((function(a){a.type==P&&(t.left.push({value:++e,timestamp:a.timestamp}),t.right.push({value:s,timestamp:a.timestamp})),a.type==H&&(t.right.push({value:++s,timestamp:a.timestamp}),t.left.push({value:e,timestamp:a.timestamp}))})),t}}]),t}(),rt=0,ot=1,lt=2,ct=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(nt["a"])(),s=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[new it(1)],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:rt;Object(A["a"])(this,t),this.id="",this.leftTeam="",this.rightTeam="",this.sets=[new it(1)],this.setIdx=0,this.state=rt,this.id=e,this.leftTeam=s,this.rightTeam=a,this.sets=n,this.state=i}return Object(N["a"])(t,[{key:"pushEvent",value:function(t){t.type==K&&this.sets[this.setIdx].finished()?this.state=ot:t.type==Q&&(this.state=lt),t.type==K&&this.sets[this.setIdx].finished()&&(++this.setIdx,this.sets[this.setIdx]=new it(this.setIdx+1)),this.sets[this.setIdx].pushEvent(t)}},{key:"name",value:function(){return"".concat(this.leftTeam," vs. ").concat(this.rightTeam)}},{key:"startTime",value:function(){return this.sets[0].startTime()||Date.now()}},{key:"endTime",value:function(){return this.sets[this.sets.length-1].endTime()}},{key:"getCurrentSet",value:function(){return this.sets[this.setIdx]}},{key:"getStatistics",value:function(){var t=this,e={total:{},sets:[]};this.sets.forEach((function(t){e.sets.push({left:{goals:{sum:t.events.filter(st(P)).length,fromMiddle:at(t.events,[P],[F]).length,fromOffense:at(t.events,[P],[$]).length,fromDefense:at(t.events,[P],[R]).length},atGoal:{sum:t.events.filter(st(Y)).length,fromMiddle:at(t.events,[Y],[F]).length,fromOffense:at(t.events,[Y],[$]).length,fromDefense:at(t.events,[Y],[R]).length},pass:at(t.events,[$],[R,F]).length,defensiveOdds:0,offensiveOdds:0},right:{goals:{sum:t.events.filter(st(H)).length,fromMiddle:at(t.events,[H],[J]).length,fromOffense:at(t.events,[H],[B]).length,fromDefense:at(t.events,[H],[U]).length},atGoal:{sum:t.events.filter(st(z)).length,fromMiddle:at(t.events,[z],[J]).length,fromOffense:at(t.events,[z],[B]).length,fromDefense:at(t.events,[z],[U]).length},pass:at(t.events,[B],[U,J]).length,defensiveOdds:0,offensiveOdds:0}})}));var s=M.a.flatten(Object.keys(this.sets).map((function(e,s){return t.sets[s].events})));return e.total={left:{goals:{sum:s.filter(st(P)).length,fromMiddle:at(s,[P],[F]).length,fromOffense:at(s,[P],[$]).length,fromDefense:at(s,[P],[R]).length},atGoal:{sum:s.filter(st(Y)).length,fromMiddle:at(s,[Y],[F]).length,fromOffense:at(s,[Y],[$]).length,fromDefense:at(s,[Y],[R]).length},pass:at(s,[$],[R,F]).length,defensiveOdds:0,offensiveOdds:0},right:{goals:{sum:s.filter(st(H)).length,fromMiddle:at(s,[H],[J]).length,fromOffense:at(s,[H],[B]).length,fromDefense:at(s,[H],[U]).length},atGoal:{sum:s.filter(st(z)).length,fromMiddle:at(s,[z],[J]).length,fromOffense:at(s,[z],[B]).length,fromDefense:at(s,[z],[U]).length},pass:at(s,[B],[U,J]).length,defensiveOdds:0,offensiveOdds:0}},e}},{key:"result",value:function(){return{leftGoals:this.sets[0].events.filter(st(P)).length,rightGoals:this.sets[0].events.filter(st(H)).length}}}],[{key:"fromJSON",value:function(e){return new t(e.id,e.leftTeam,e.rightTeam,e.sets.map((function(t){return new it(t.number,t.events.map((function(t){return new Z(t.type,t.timestamp)})))})),e.state)}}]),t}(),dt={props:["game"],data:function(){return{goalCharts:[]}},watch:{game:{handler:function(t){this.game=t,this.$forceUpdate(),this.$nextTick((function(){this.renderGoals(this.game)}))},deep:!0}},computed:{statistics:function(){return this.game.getStatistics()}},mounted:function(){this.$nextTick((function(){this.renderGoals(this.game)}))},methods:{renderGoals:function(t){var e=this;t.sets.forEach((function(t,s){e.goalCharts[s]&&e.goalCharts[s].selectAll("*").remove();var a=t.startTime(),n=t.endTime()||Date.now(),i=t.goalStatistics(),r=60,o=300,l=300,c=o-2*r,d=l-2*r,m=D["e"]("#goals-".concat(t.id)).attr("width",o).attr("height",l);e.goalCharts[s]=m.append("g").attr("transform","translate(".concat(r,", ").concat(r,")"));var u=D["d"]().range([d,0]).domain([0,Math.max(i.left.length,i.right.length)]);e.goalCharts[s].append("g").call(D["b"](u).ticks(Math.max(i.left.length,i.right.length)));var f=D["d"]().range([0,c]).domain([0,(n-a)/1e3]);e.goalCharts[s].append("g").attr("transform","translate(0, ".concat(d,")")).call(D["a"](f).ticks(10)),e.goalCharts[s].append("path").datum(i.left).attr("fill","none").attr("stroke","#759ef0").attr("stroke-width",1).attr("d",D["c"]().x((function(t){return f((t.timestamp-a)/1e3)})).y((function(t){return u(t.value)}))),e.goalCharts[s].append("path").datum(i.right).attr("fill","none").attr("stroke","#f5a3a3").attr("stroke-width",4).attr("d",D["c"]().x((function(t){return f((t.timestamp-a)/1e3)})).y((function(t){return u(t.value)}))),m.append("text").attr("class","label").attr("x",-d/2-r).attr("y",r/2.4).attr("transform","rotate(-90)").attr("text-anchor","middle").text("Goals"),m.append("text").attr("class","label").attr("x",c/2+r).attr("y",d+1.7*r).attr("text-anchor","middle").text("Time [seconds]"),m.append("text").attr("x",c-r/2).attr("y",r/2).attr("text-anchor","middle").style("font-size","16px").style("text-decoration","underline").text("Set ".concat(t.number))}))}}},mt=dt,ut=Object(d["a"])(mt,G,x,!1,null,null,null),ft=ut.exports,ht={name:"Stats",components:{"game-metrics":ft},data:function(){return{showSnackbar:!1,snackbarMsg:""}},methods:{deleteGame:function(){var t=this;this.$store.dispatch("deleteGame",this.game).then((function(){t.$router.push({path:"/"})})).catch((function(e){t.showSnackbar=!0,t.snackbarMsg=e}))}},computed:Object(o["b"])({game:function(t){var e=this;return t.games.find((function(t){return t.id==e.$route.params.id}))}})},vt=ht,gt=(s("5f6c"),Object(d["a"])(vt,C,y,!1,null,null,null)),pt=gt.exports,bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",[s("md-tabs",{scopedSlots:t._u([{key:"md-tab",fn:function(e){var a=e.tab;return[t._v(" "+t._s(a.label)+" "),a.data.badge?s("i",{staticClass:"badge"},[t._v(t._s(a.data.badge))]):t._e()]}}])},[s("md-tab",{attrs:{id:"tab-home","md-label":"Clicker"}},[s("div",{staticClass:"two-col-wrapper"},[s("div",{staticClass:"main-area"},[s("div",{staticClass:"clicker"},[s("div",{staticClass:"set-results"},t._l(t.game.sets,(function(e){return s("div",{key:e.id},[t._v(" "+t._s(e.results)+" ")])})),0),s("div",{staticClass:"clicker-area"},[s("div",{staticClass:"table-section dummy"}),s("div",{staticClass:"table-section shot-at-goal right"},[s("md-button",{staticClass:"md-raised",attrs:{"md-ripple":!1,disabled:t.disabled},on:{click:function(e){t.pushEvent(t.GAME_EVENTS.R_SHOT_AT_GOAL())}}},[t._v("Shot At Goal")])],1),s("div",{staticClass:"table-section goal right"},[s("md-button",{staticClass:"md-raised",attrs:{"md-ripple":!1,disabled:t.disabled},on:{click:function(e){t.pushEvent(t.GAME_EVENTS.R_GOAL())}}},[t._v("Goal")])],1),s("div",{staticClass:"table-section defense left"},[s("md-button",{staticClass:"md-raised",attrs:{"md-ripple":!1,disabled:t.disabled},on:{click:function(e){t.pushEvent(t.GAME_EVENTS.L_DEFENSE())}}},[t._v("Defense")])],1),s("div",{staticClass:"table-section offense right",on:{click:function(e){t.pushEvent(t.GAME_EVENTS.R_OFFENSE())}}},[s("md-button",{staticClass:"md-raised",attrs:{"md-ripple":!1,disabled:t.disabled}},[t._v("Offense")])],1),s("div",{staticClass:"table-section middle left",on:{click:function(e){t.pushEvent(t.GAME_EVENTS.L_MIDDLE())}}},[s("md-button",{staticClass:"md-raised",attrs:{"md-ripple":!1,disabled:t.disabled}},[t._v("Middle")])],1),s("div",{staticClass:"table-section middle right",on:{click:function(e){t.pushEvent(t.GAME_EVENTS.R_MIDDLE())}}},[s("md-button",{staticClass:"md-raised",attrs:{"md-ripple":!1,disabled:t.disabled}},[t._v("Middle")])],1),s("div",{staticClass:"table-section offense left",on:{click:function(e){t.pushEvent(t.GAME_EVENTS.L_OFFENSE())}}},[s("md-button",{staticClass:"md-raised",attrs:{"md-ripple":!1,disabled:t.disabled}},[t._v("Offense")])],1),s("div",{staticClass:"table-section defense right",on:{click:function(e){t.pushEvent(t.GAME_EVENTS.R_DEFENSE())}}},[s("md-button",{staticClass:"md-raised",attrs:{"md-ripple":!1,disabled:t.disabled}},[t._v("Defense")])],1),s("div",{staticClass:"table-section goal left",on:{click:function(e){t.pushEvent(t.GAME_EVENTS.L_GOAL())}}},[s("md-button",{staticClass:"md-raised",attrs:{disabled:t.disabled,"md-ripple":!1}},[t._v("Goal")])],1),s("div",{staticClass:"table-section shot-at-goal left"},[s("md-button",{staticClass:"md-raised",attrs:{disabled:t.disabled,"md-ripple":!1},on:{click:function(e){t.pushEvent(t.GAME_EVENTS.L_SHOT_AT_GOAL())}}},[t._v("Shot At Goal")])],1),s("div",{staticClass:"table-section dummy"}),s("div",{staticClass:"table-section timeout left",on:{click:function(e){t.pushEvent(t.GAME_EVENTS.L_TIMEOUT())}}},[s("md-button",{staticClass:"md-raised",attrs:{disabled:t.disabled,"md-ripple":!1}},[t._v("Timout")])],1),s("div",{staticClass:"table-section lost",on:{click:function(e){t.pushEvent(t.GAME_EVENTS.N_BALL_LOST())}}},[s("md-button",{staticClass:"md-raised",attrs:{disabled:t.disabled,"md-ripple":!1}},[t._v("Ball Lost")])],1),s("div",{staticClass:"table-section timeout right",on:{click:function(e){t.pushEvent(t.GAME_EVENTS.R_TIMEOUT())}}},[s("md-button",{staticClass:"md-raised",attrs:{disabled:t.disabled,"md-ripple":!1}},[t._v("Timeout")])],1)]),s("md-divider"),s("div",{staticClass:"game-controls"},[s("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:!t.disabled},on:{click:function(e){return t.startGame()}}},[t._v(" "+t._s(1!=t.game.sets.length||t.game.getCurrentSet().finished()?"Start Set "+(t.game.sets.length+1):"Start Game"))]),s("md-button",{staticClass:"md-raised md-accent",attrs:{disabled:t.disabled},on:{click:function(e){return t.endGame()}}},[t._v("End Set "+t._s(t.game.sets.length))])],1)],1)]),s("div",{staticClass:"sidebar"},[s("div",{staticClass:"form-wrapper"},[s("md-field",[s("label",[t._v("Left Team")]),s("md-input",{attrs:{maxlength:"30"},model:{value:t.game.leftTeam,callback:function(e){t.$set(t.game,"leftTeam",e)},expression:"game.leftTeam"}})],1),s("md-field",[s("label",[t._v("Right Team")]),s("md-input",{attrs:{maxlength:"30"},model:{value:t.game.rightTeam,callback:function(e){t.$set(t.game,"rightTeam",e)},expression:"game.rightTeam"}})],1),t.sending?s("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e(),s("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit",disabled:t.sending},on:{click:function(e){return t.save()}}},[t._v(" Save")]),s("md-checkbox",{model:{value:t.showEventLog,callback:function(e){t.showEventLog=e},expression:"showEventLog"}},[t._v("show event log")])],1),t.showEventLog?s("ul",{staticClass:"event-log"},t._l(t.game.getCurrentSet().events.slice().reverse(),(function(e,a){return s("li",{key:a},[t._v(" "+t._s(e.toString())+" ")])})),0):t._e()])])]),s("md-tab",{attrs:{id:"tab-metrics","md-label":"Metrics"}},[s("game-metrics",{attrs:{game:t.game}})],1),s("md-snackbar",{attrs:{"md-position":"center","md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.showSnackbar=e},"update:md-active":function(e){t.showSnackbar=e}}},[s("span",[t._v(t._s(t.snackbarMsg))])])],1)],1)},_t=[],Et={name:"Clicker",components:{"game-metrics":ft},data:function(){return{sending:!1,disabled:!0,showSnackbar:!1,snackbarMsg:"",showEventLog:!0,game:new ct(void 0,"",""),GAME_EVENTS:tt}},methods:{pushEvent:function(t){window.navigator.vibrate(10),this.game.pushEvent(t)},startGame:function(){this.pushEvent(tt.START()),this.disabled=!1},endGame:function(){this.disabled=!0,this.pushEvent(tt.END())},save:function(){var t=this;if(""==this.game.leftTeam||""==this.game.rightTeam||!this.game.startTime())return this.showSnackbar=!0,void(this.snackbarMsg="invalid game. missing team name");this.sending=!0,this.$store.dispatch("saveGame",this.game).then((function(){t.sending=!1,t.showSnackbar=!0,t.snackbarMsg="saved"})).catch((function(e){t.sending=!1,t.showSnackbar=!0,t.snackbarMsg=e}))}}},wt=Et,Tt=(s("867d"),Object(d["a"])(wt,bt,_t,!1,null,null,null)),Ot=Tt.exports;n["default"].use(f["a"]);var kt=[{path:"/",name:"Home",component:_},{path:"/clicker",name:"Clicker",component:Ot},{path:"/stats/:id",name:"Stats",component:pt},{path:"/about",name:"About",component:S}],St=new f["a"]({mode:"history",base:"/",routes:kt}),Ct=St;s("c740"),s("a434"),s("d3b7");n["default"].use(o["a"]);var yt=new o["a"].Store({state:{games:[]},mutations:{clear:function(t){t.games=[]},initialize:function(t){var e=localStorage.getItem("store");if(e){var s=JSON.parse(e);s.games=s.games.map((function(t){return ct.fromJSON(t)})),this.replaceState(Object.assign(t,s))}},deleteGame:function(t,e){var s=t.games.findIndex((function(t){return t.id==e.id}));t.games.splice(s,1)},upsertGame:function(t,e){var s=t.games.findIndex((function(t){return t.id==e.id}));-1!=s?t.games[s]=e:t.games.push(e)}},actions:{deleteGame:function(t,e){var s=t.commit,a=t.state;return new Promise((function(t,n){a.games.find((function(t){return t.id==e.id}))?(s("deleteGame",e),t()):n("game not found")}))},saveGame:function(t,e){var s=t.commit;t.state;return new Promise((function(t){setTimeout((function(){s("upsertGame",e),t()}),500)}))}},modules:{}}),Gt=yt,xt=s("43f9"),Dt=s.n(xt);s("51de"),s("e094");n["default"].use(Dt.a),n["default"].config.productionTip=!1,Gt.subscribe((function(t,e){localStorage.setItem("store",JSON.stringify(e))})),Gt.commit("initialize"),Ct.beforeEach((function(t,e,s){"Stats"!=t.name||Gt.state.games.find((function(e){return e.id==t.params.id}))?s():s({name:"Home"})})),new n["default"]({router:Ct,store:Gt,render:function(t){return t(u)}}).$mount("#app")},eae6:function(t,e,s){}});
//# sourceMappingURL=app.682e4048.js.map