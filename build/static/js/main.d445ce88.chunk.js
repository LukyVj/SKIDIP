(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),o=n.n(l),c=(n(17),n(3)),s=n(4),i=n(6),u=n(5),d=n(7),m=n(2),p=n(1),f=function(e){var t=new Date(1e3*e),n=new Date,a=new Date(Date.now()-864e5),r=t.getFullYear(),l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getDate(),c=t.getHours(),s=t.getMinutes();return t.setHours(0,0,0,0)===n.setHours(0,0,0,0)?"today, "+c+":"+s:t.setHours(0,0,0,0)===a.setHours(0,0,0,0)?"yesterday, "+c+":"+s:r===n.getFullYear()?o+" "+l+", "+c+":"+s:o+" "+l+" "+r+", "+c+":"+s},b=function(e){if(0===e.length)return-1;for(var t=e[0],n=0,a=1;a<e.length;a++)e[a]>t&&(n=a,t=e[a]);return n},h=n(10),E=n.n(h),w=(n(18),function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:Object(p.b)("feather feather-user",e.className)},r.a.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r.a.createElement("circle",{cx:"12",cy:"7",r:"4"}))}),v=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:Object(p.b)("feather feather-zoom-in",e.className)},r.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.a.createElement("path",{d:"M21 21l-4.35-4.35M11 8v6M8 11h6"}))};function g(){var e=Object(m.a)(["\n                font-size: 4em;\n              "]);return g=function(){return e},e}function x(){var e=Object(m.a)(["\n              @media (min-width: 960px) {\n                grid-column-start: 1;\n                grid-column-end: 5;\n              }\n            "]);return x=function(){return e},e}function O(){var e=Object(m.a)(["\n              display: grid;\n              grid-template-columns: repeat(1, 1fr);\n              grid-gap: 0px;\n              grid-auto-rows: minmax(100px, auto);\n\n              @media (min-width: 960px) {\n                grid-template-columns: repeat(2, 1fr);\n              }\n              @media (min-width: 1200px) {\n                grid-template-columns: repeat(4, 1fr);\n              }\n            "]);return O=function(){return e},e}function j(){var e=Object(m.a)(["\n              width: 24px;\n            "]);return j=function(){return e},e}function k(){var e=Object(m.a)(["\n              position: absolute;\n              top: 0;\n              right: 0;\n              margin: 1em;\n              z-index: 99;\n            "]);return k=function(){return e},e}function y(){var e=Object(m.a)(["\n            width: 24px;\n            height: 24px;\n            vertical-align: middle;\n          "]);return y=function(){return e},e}function S(){var e=Object(m.a)(["\n          text-align: left;\n        "]);return S=function(){return e},e}function D(){var e=Object(m.a)(["\n        width: 100%;\n        max-width: 580px;\n      "]);return D=function(){return e},e}function N(){var e=Object(m.a)(["\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          * {\n            color: lime !important;\n            text-shadow: 0 0 5px #000;\n          }\n        "]);return N=function(){return e},e}function q(){var e=Object(m.a)(["\n      height: auto;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      width: calc(100% - 4em);\n      border: 1px solid;\n      padding: 2em;\n      border-top: 10px solid\n        ",";\n      p {\n        border-bottom: 1px dashed;\n        flex: 0 1 100%;\n        display: flex;\n        justify-content: space-between;\n        text-align: left;\n      }\n\n      test: ",";\n\n      span {\n        text-transform: uppercase;\n      }\n\n      ","\n    "]);return q=function(){return e},e}var M=[{uid:"2b7897075f20421b81529bdc2ab742f3"},{uid:"ff29ca89e591485e8d450c2aec558c15"},{uid:"c605a87eba634e8dbfc7fba4448fa87d"},{uid:"0d4f175a990f44a08e0447b56ed42703"}],_=function(e){return e>1.5?3:e>1?2:e>.5?1:e>0?0:void 0},H=function(e){return r.a.createElement("div",{className:Object(p.a)(q(),E.a.scale(["#fafa6e","#2A4858"]).mode("lch").colors(6)[_(e.kd)],_(e.kd),e.isExpanded&&Object(p.a)(N()))},r.a.createElement("div",{className:Object(p.a)(D())},r.a.createElement("h2",{className:Object(p.a)(S())},r.a.createElement(w,{className:Object(p.a)(y())})," ","@",e.name),r.a.createElement("p",null,"Does best in","\xa0",r.a.createElement("b",null,function(e){var t;switch(b(e)){case 0:t="Solo then ".concat(1===b(e.splice(0,1))?"Duo":"Squad");break;case 1:t="Duo then ".concat(0===b(e.splice(1,1))?"Solo":"Squad");break;case 2:console.log(b(e.splice(2,1))),t="Squad then ".concat(0===b(e.splice(2,1))?"Solo":"Duo");break;default:t="Solo"}return t}([e.topOneSolo,e.topOneDuo,e.topOneSquad]))),r.a.createElement("p",null,r.a.createElement("span",null,"wins:")," ",r.a.createElement("b",null,e.wins)),r.a.createElement("p",null,r.a.createElement("span",null,"kills:")," ",r.a.createElement("b",null,e.kills)),r.a.createElement("p",null,r.a.createElement("span",null,"k/d:")," ",r.a.createElement("b",null,e.kd)),r.a.createElement("p",null,r.a.createElement("span",null,"matchesplayed:")," ",r.a.createElement("b",null,e.matchesplayed)),r.a.createElement("p",null,r.a.createElement("span",null,"winrate:")," ",r.a.createElement("b",null,e.winrate)),r.a.createElement("p",null,r.a.createElement("span",null,"last solo")," ",r.a.createElement("b",null,f(e.lastSolo))),r.a.createElement("p",null,r.a.createElement("span",null,"last duo")," ",r.a.createElement("b",null,f(e.lastDuo))),r.a.createElement("p",null,r.a.createElement("span",null,"last squad")," ",r.a.createElement("b",null,f(e.lastSquad))),e.isExpanded&&console.log(e.stats)))},J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[],expanded:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id="+this.props.uid+"&platform=ps4";fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({data:[t]})})}},{key:"render",value:function(){var e=this;return console.log(this.state.data),this.state.data.map(function(t,n){return r.a.createElement("div",null,r.a.createElement("button",{className:e.state.expanded&&Object(p.a)(k()),onClick:function(){console.log(e.state.expanded),e.setState({expanded:!e.state.expanded})}},r.a.createElement(v,{className:Object(p.a)(j())})),r.a.createElement(H,{key:t.uid,index:n,name:t.username,wins:t.totals.wins,kills:t.totals.kills,kd:t.totals.kd,matchesplayed:t.totals.matchesplayed,winrate:t.totals.winrate,hoursplayed:t.totals.hoursplayed,lastSolo:t.stats.lastmodified_solo,lastDuo:t.stats.lastmodified_duo,lastSquad:t.stats.lastmodified_squad,topOneSolo:t.stats.placetop1_solo,topOneDuo:t.stats.placetop1_duo,topOneSquad:t.stats.placetop1_squad,isExpanded:e.state.expanded,parent:e.state,stats:t.stats}))})}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:Object(p.b)("App")},r.a.createElement("div",{className:Object(p.b)(Object(p.a)(O()))},r.a.createElement("div",{className:Object(p.a)(x())},r.a.createElement("h1",{className:Object(p.a)(g())},"SKIDIP"),r.a.createElement("p",null,"Support a creator code: ",r.a.createElement("code",null,"SKIDIP-LUKYVJ"))),M.map(function(e){return r.a.createElement(J,{uid:e.uid})})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.d445ce88.chunk.js.map