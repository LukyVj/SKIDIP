(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,n){t.exports=n(229)},106:function(t,e,n){},115:function(t,e,n){var a={"./activity":31,"./activity-up":32,"./activity-up.js":32,"./activity.js":31,"./analytics":33,"./analytics.js":33,"./arrow-left":34,"./arrow-left.js":34,"./arrow-right":35,"./arrow-right.js":35,"./arrow-up-right":36,"./arrow-up-right.js":36,"./book-closed":37,"./book-closed.js":37,"./book-open":38,"./book-open.js":38,"./box":39,"./box.js":39,"./call":40,"./call.js":40,"./caret-down":41,"./caret-down.js":41,"./caret-left":42,"./caret-left.js":42,"./caret-right":43,"./caret-right.js":43,"./caret-up":44,"./caret-up.js":44,"./checkmark":45,"./checkmark.js":45,"./cog":46,"./cog.js":46,"./cross":47,"./cross.js":47,"./devices":48,"./devices.js":48,"./discover":49,"./discover.js":49,"./dots":50,"./dots.js":50,"./download":51,"./download.js":51,"./external-link":52,"./external-link.js":52,"./facebook":53,"./facebook.js":53,"./find":54,"./find.js":54,"./grid":55,"./grid.js":55,"./inspire":56,"./inspire.js":56,"./instagram":57,"./instagram.js":57,"./iphone":58,"./iphone.js":58,"./layers":59,"./layers.js":59,"./learn":60,"./learn.js":60,"./life-buoy":61,"./life-buoy.js":61,"./link":62,"./link.js":62,"./linkedin":63,"./linkedin.js":63,"./lock":64,"./lock-open":65,"./lock-open.js":65,"./lock.js":64,"./log-out":66,"./log-out.js":66,"./mac":67,"./mac.js":67,"./magnifying-glass":68,"./magnifying-glass.js":68,"./menu":69,"./menu.js":69,"./minus":70,"./minus.js":70,"./multi-cluster":71,"./multi-cluster.js":71,"./no-network":72,"./no-network.js":72,"./partners":73,"./partners.js":73,"./personalization":74,"./personalization.js":74,"./pie-chart":75,"./pie-chart.js":75,"./play":76,"./play.js":76,"./plus":77,"./plus.js":77,"./question":78,"./question.js":78,"./search-api":79,"./search-api.js":79,"./server":80,"./server.js":80,"./shield":81,"./shield.js":81,"./sorting":82,"./sorting.js":82,"./triangle-left":83,"./triangle-left.js":83,"./triangle-right":84,"./triangle-right.js":84,"./twitter":85,"./twitter.js":85,"./typography":86,"./typography.js":86,"./user":87,"./user.js":87,"./users":88,"./users.js":88,"./vault":89,"./vault.js":89};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id=115},226:function(t,e,n){},227:function(t,e,n){},228:function(t,e,n){var a={"./twitch":93,"./twitch.js":93,"./user":94,"./user.js":94,"./zoom":95,"./zoom.js":95};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id=228},229:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),r=n(96),c=n.n(r),o=(n(106),n(6)),i=n(9),l=n(10),u=n(12),j=n(11),d=n(13),b=n(0),p=n(19);n(226),n(227);function f(){var t=Object(o.a)(["\n                        border-top-right-radius: 100px;\n                        border-bottom-right-radius: 100px;\n                      "]);return f=function(){return t},t}function h(){var t=Object(o.a)(["\n                        border-top-left-radius: 100px;\n                        border-bottom-left-radius: 100px;\n                      "]);return h=function(){return t},t}function m(){var t=Object(o.a)(["\n                        border-right: 1px solid #353c51;\n                      "]);return m=function(){return t},t}function O(){var t=Object(o.a)(["\n                        background: var(--nebula);\n                        color: white;\n                      "]);return O=function(){return t},t}function x(){var t=Object(o.a)(["\n                    appearance: none;\n                    border: 0;\n                    padding: 1em;\n                  "]);return x=function(){return t},t}var v=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(j.a)(e).call(this,t))).selectItem=function(t){n.setState({selected:t.toLowerCase()}),document.body.dataset.selectedSection=t.toLowerCase()},n.state={selected:"team"},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){document.body.dataset.selectedSection=this.state.selected}},{key:"render",value:function(){var t=this,e=["Team","Shop","Creative"];return Object(b.jsx)("nav",null,Object(b.jsx)("ul",{className:"lis-none p-0 m-0 ov-hidden bdr-max d-block"},e.map(function(n,a){return Object(b.jsx)("li",{className:"d-inline-block"},Object(b.jsx)("button",{onClick:function(){return t.selectItem(n)},css:[Object(b.css)(x()),n.toLowerCase()===t.state.selected?Object(b.css)(O()):null,a!==e.length-1?Object(b.css)(m()):null,0===a?Object(b.css)(h()):null,a===e.length-1?Object(b.css)(f()):null]},n))})))}}]),e}(a.Component),g=n(21);function w(){var t=Object(o.a)(["\n          width: 100%;\n          max-width: 200px;\n          display: block;\n        "]);return w=function(){return t},t}var k=function(t){return s.a.createElement("div",{className:"ta-center d-grid g-2"},s.a.createElement("img",{alt:t.name,src:t.image.information,className:Object(g.a)(w())}),s.a.createElement("div",null,s.a.createElement("h3",null,t.name),s.a.createElement("h4",null,t.description)))},y=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(j.a)(e).call(this,t))).state={shop:[],ready:!1},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){var t=this;fetch("https://fortnite-api.theapinetwork.com/store/get?authorization=fb36a5e4c77bcaa2a0e5e5f1bd8bbb11").then(function(t){return t.json()}).then(function(e){t.setState({shop:e,ready:!0})})}},{key:"render",value:function(){var t=this.state.shop.data;return!0===this.state.ready?t.map(function(t){return s.a.createElement("div",{className:"pv-0 ph-16 bgc-white mb-8"},s.a.createElement(k,{name:t.item.name,description:t.item.description,image:t.item.images}))}):null}}]),e}(a.Component),N=function(t){var e=new Date(1e3*t),n=new Date,a=new Date(Date.now()-864e5),s=e.getFullYear(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],c=e.getDate(),o=e.getHours(),i=e.getMinutes();return e.setHours(0,0,0,0)===n.setHours(0,0,0,0)?"today, "+o+":"+i:e.setHours(0,0,0,0)===a.setHours(0,0,0,0)?"yesterday, "+o+":"+i:s===n.getFullYear()?c+" "+r+", "+o+":"+i:c+" "+r+" "+s+", "+o+":"+i},S=function(t){if(0===t.length)return-1;for(var e=t[0],n=0,a=1;a<t.length;a++)t[a]>e&&(n=a,e=t[a]);return n},D=n(99),E=n.n(D);function C(){var t=Object(o.a)(["\n        width: 24px;\n        height: 24px;\n      "]);return C=function(){return t},t}var M=function(t){var e=n(228)("./".concat(t.name)).default;return Object(b.jsx)(e,Object.assign({css:Object(b.css)(C()),title:t.title},t.other))};function z(){var t=Object(o.a)(["\n      width: 100%;\n    "]);return z=function(){return t},t}function q(){var t=Object(o.a)(["\n                  position: absolute;\n                  top: 0;\n                  right: 0;\n                  margin: -3em;\n                "]);return q=function(){return t},t}function L(){var t=Object(o.a)(["\n                  position: absolute;\n                  top: 0;\n                  right: 0;\n                  margin: 1em;\n                  z-index: 99;\n                "]);return L=function(){return t},t}function _(){var t=Object(o.a)(["\n                position: absolute;\n                top: 0;\n                left: 0;\n                margin: -3em;\n              "]);return _=function(){return t},t}function H(){var t=Object(o.a)(["\n            padding: 0.5em;\n            background: ",";\n          "]);return H=function(){return t},t}function V(){var t=Object(o.a)(["\n          text-align: left;\n        "]);return V=function(){return t},t}function I(){var t=Object(o.a)(["\n        width: 100%;\n      "]);return I=function(){return t},t}function J(){var t=Object(o.a)(["\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: #353c51;\n          z-index: 98;\n          padding: 0 1em;\n          border: 2px solid white;\n\n          p,\n          h2 {\n            color: white;\n          }\n        "]);return J=function(){return t},t}function W(){var t=Object(o.a)(["\n      height: auto;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      width: 100%;\n\n      p {\n        border-bottom: 1px dashed;\n        flex: 0 1 100%;\n        display: flex;\n        justify-content: space-between;\n        text-align: left;\n      }\n\n      span {\n        text-transform: uppercase;\n      }\n\n      ","\n    "]);return W=function(){return t},t}function A(){var t=Object(o.a)(["\n      background: linear-gradient(to right, #6441a5, #2a0845);\n    "]);return A=function(){return t},t}function B(){var t=Object(o.a)(["\n      background: linear-gradient(to right, #11998e, #38ef7d);\n    "]);return B=function(){return t},t}function F(){var t=Object(o.a)(["\n      width: 48px;\n      height: 48px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    "]);return F=function(){return t},t}function U(){var t=Object(o.a)(["\n      appearance: none;\n      border: 0;\n      border-radius: 100px;\n      cursor: pointer;\n      color: white;\n    "]);return U=function(){return t},t}var T={button:{root:Object(b.css)(U()),round:Object(b.css)(F()),green:Object(b.css)(B()),purple:Object(b.css)(A())}},K=[{uid:"2b7897075f20421b81529bdc2ab742f3",twitch:"iamfabriceg"},{uid:"ff29ca89e591485e8d450c2aec558c15",twitch:"lukyvj"},{uid:"c605a87eba634e8dbfc7fba4448fa87d"},{uid:"0d4f175a990f44a08e0447b56ed42703"}],Y=function(t){return Object(b.jsx)("div",{css:Object(b.css)(W(),t.isExpanded&&Object(b.css)(J()))},Object(b.jsx)("div",{css:Object(b.css)(I())},Object(b.jsx)("h2",{css:Object(b.css)(V())},Object(b.jsx)("div",null,Object(b.jsx)("h3",null,"@",t.name)),Object(b.jsx)("small",{css:Object(b.css)(H(),E.a.scale(["#fafa6e","#2A4858"]).mode("lch").colors(6)[(e=t.kd,e>1.5?3:e>1?2:e>.5?1:e>0?0:void 0)])},t.kd)),Object(b.jsx)("p",null,"Does best in",Object(b.jsx)("br",null),Object(b.jsx)("b",null,function(t){var e;switch(S(t)){case 0:e="Solo then ".concat(1===S(t.splice(0,1))?"Duo":"Squad");break;case 1:e="Duo then ".concat(0===S(t.splice(1,1))?"Solo":"Squad");break;case 2:console.log(S(t.splice(2,1))),e="Squad then ".concat(0===S(t.splice(2,1))?"Solo":"Duo");break;default:e="Solo"}return e}([t.topOneSolo,t.topOneDuo,t.topOneSquad]))),Object(b.jsx)("p",null,Object(b.jsx)("span",null,"wins:")," ",Object(b.jsx)("br",null),Object(b.jsx)("b",null,t.wins)),Object(b.jsx)("p",null,Object(b.jsx)("span",null,"kills:")," ",Object(b.jsx)("br",null),Object(b.jsx)("b",null,t.kills)),Object(b.jsx)("p",null,Object(b.jsx)("span",null,"k/d:")," ",Object(b.jsx)("br",null),Object(b.jsx)("b",null,t.kd)),Object(b.jsx)("p",null,Object(b.jsx)("span",null,"matchesplayed:")," ",Object(b.jsx)("br",null),Object(b.jsx)("b",null,t.matchesplayed)),Object(b.jsx)("p",null,Object(b.jsx)("span",null,"winrate:")," ",Object(b.jsx)("br",null),Object(b.jsx)("b",null,t.winrate)),Object(b.jsx)("p",null,Object(b.jsx)("span",null,"last solo")," ",Object(b.jsx)("b",null,N(t.lastSolo))),Object(b.jsx)("p",null,Object(b.jsx)("span",null,"last duo")," ",Object(b.jsx)("b",null,N(t.lastDuo))),Object(b.jsx)("p",null,Object(b.jsx)("span",null,"last squad")," ",Object(b.jsx)("b",null,N(t.lastSquad)))));var e},P=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(j.a)(e).call(this,t))).state={data:[],expanded:!1},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this,e="https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id="+this.props.uid+"&platform=ps4";fetch(e).then(function(t){return t.json()}).then(function(e){t.setState({data:[e]})})}},{key:"render",value:function(){var t=this;return this.state.data.map(function(e,n){return Object(b.jsx)("div",{key:n,className:t.state.expanded?null:"pos-relative z-max"},t.props.twitch&&Object(b.jsx)("a",{href:"https://twitch.com/".concat(t.props.twitch),className:"va-middle d-block p-0 bxs-default color-current",css:[T.button.root,T.button.round,T.button.purple,Object(b.css)(_())]},Object(b.jsx)(M,{name:"twitch"})),Object(b.jsx)("button",{className:"bxs-default",css:[T.button.root,T.button.round,T.button.green,t.state.expanded?Object(b.css)(L()):Object(b.css)(q())],onClick:function(){t.setState({expanded:!t.state.expanded})}},Object(b.jsx)(M,{name:"zoom"})),Object(b.jsx)(Y,{key:e.uid,index:n,name:e.username,wins:e.totals.wins,kills:e.totals.kills,kd:e.totals.kd,matchesplayed:e.totals.matchesplayed,winrate:e.totals.winrate,hoursplayed:e.totals.hoursplayed,lastSolo:e.stats.lastmodified_solo,lastDuo:e.stats.lastmodified_duo,lastSquad:e.stats.lastmodified_squad,topOneSolo:e.stats.placetop1_solo,topOneDuo:e.stats.placetop1_duo,topOneSquad:e.stats.placetop1_squad,isExpanded:t.state.expanded,parent:t.state,stats:e.stats,twitch:t.props.twitch}))})}}]),e}(a.Component),R=function(){return Object(b.jsx)(p.CardsRow,{css:Object(b.css)(z())},K.map(function(t,e){return Object(b.jsx)(p.Card,{key:e},Object(b.jsx)(P,{uid:t.uid,twitch:t.twitch}))}))};function $(){var t=Object(o.a)(["\n          width: 100%;\n          max-width: 200px;\n          display: block;\n        "]);return $=function(){return t},t}var G=function(t){return console.log(t),Object(b.jsx)("div",{className:"ta-center d-grid g-2"},Object(b.jsx)("img",{alt:t.name,src:t.image.thumbnail.path,css:Object(b.css)($())}),Object(b.jsx)("div",null,Object(b.jsx)("h3",null,t.name),Object(b.jsx)("h4",null,t.description),Object(b.jsx)("span",{className:"p-8 bgc-moon color-nebula"},t.code)))},Q=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(j.a)(e).call(this,t))).state={list:[],ready:!1},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){var t=this;fetch("https://fortnite-api.theapinetwork.com/creative/list?order=newest&authorization=fb36a5e4c77bcaa2a0e5e5f1bd8bbb11").then(function(t){return t.json()}).then(function(e){t.setState({list:e,ready:!0})})}},{key:"render",value:function(){var t=this.state.list.data;return console.log("island ",this.state.list.data),!0===this.state.ready?t.entries.map(function(t){return console.log("item",t)||Object(b.jsx)("div",{className:"pv-0 ph-16 bgc-white mb-8"},Object(b.jsx)(G,{name:t.island.name,description:t.island.description,image:t.island.images,code:t.island.code}))}):null}}]),e}(a.Component);s.a.Component;function X(){var t=Object(o.a)(["\n            font-size: 6em;\n            margin: 0.5em auto;\n            padding: 0;\n            color: #fff;\n          "]);return X=function(){return t},t}var Z=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(j.a)(e).call(this,t))).state={data:[]},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App"},Object(b.jsx)("h1",{css:Object(b.css)(X())},"SKIDIP"),Object(b.jsx)(v,null),Object(b.jsx)("p",{className:"color-white m-0"},"Support a creator code: ",Object(b.jsx)("code",null,"SKIDIP-LUKYVJ")),Object(b.jsx)(p.Section,{background:"transparent",className:"section",id:"team-section"},Object(b.jsx)("h2",{className:"color-white"},"Team Data"),Object(b.jsx)(R,null)),Object(b.jsx)(p.Section,{background:"transparent",className:"section",id:"shop-section"},Object(b.jsx)("h2",{className:"color-white"},"Shop items"),Object(b.jsx)("div",{className:"d-grid g-2"},Object(b.jsx)(y,null))),Object(b.jsx)(p.Section,{background:"transparent",className:"section",id:"creative-section"},Object(b.jsx)("h2",{className:"color-white"},"Creative islands"),Object(b.jsx)("div",{className:"d-grid g-2"},Object(b.jsx)(Q,null))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},93:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a);e.default=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];return s.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",className:t.className},n),s.a.createElement("path",{d:"M5.7 0L1.4 10.985V55.88h15.284V64h8.597l8.12-8.12h12.418l16.716-16.716V0H5.7zm51.104 36.3L47.25 45.85H31.967l-8.12 8.12v-8.12H10.952V5.73h45.85V36.3zM47.25 16.716v16.716h-5.73V16.716h5.73zm-15.284 0v16.716h-5.73V16.716h5.73z",fill:"currentColor"}))}},94:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),r=n(21);e.default=function(t){return s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:Object(r.b)("feather feather-user",t.className)},s.a.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),s.a.createElement("circle",{cx:"12",cy:"7",r:"4"}))}},95:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),r=n(21);e.default=function(t){return s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:Object(r.b)("feather feather-zoom-in",t.className)},s.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),s.a.createElement("path",{d:"M21 21l-4.35-4.35M11 8v6M8 11h6"}))}}},[[100,1,2]]]);
//# sourceMappingURL=main.bb723708.chunk.js.map