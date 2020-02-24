"use strict";function b(a,b){if(null==a)return{};var d,e,f=c(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(0<=b.indexOf(d))&&Object.prototype.propertyIsEnumerable.call(a,d)&&(f[d]=a[d])}return f}function c(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function d(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?d(Object(b),!0).forEach(function(c){i(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function j(a,b){return m(a)||l(a,b)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function m(a){if(Array.isArray(a))return a}function n(a){"@babel/helpers - typeof";return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(a)}var o=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===n(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){n(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=o(j,k([i(b)]),n)),d&&!c&&g(p,c=!0)),b},n=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?n(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?n(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](n,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};n(a.init)}}}(),q=o.h,e=o.app,h=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===n(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return q(a,{},b);return q(a,b,d)}},r=h("a"),a=h("button"),s=h("circle"),t=h("div"),u=h("footer"),v=h("g"),g=h("h1"),w=h("h2"),x=h("h3"),y=h("h4"),z=h("h5"),A=h("img"),B=h("input"),C=h("label"),D=h("li"),E=h("link"),F=h("main"),G=h("meta"),H=h("nav"),I=h("p"),p=h("path"),J=h("script"),K=h("span"),L=h("svg"),M=h("title"),N=h("ul"),O=h("view"),P={dealwithit:!1,description:["noncon - description"],footer:{one:{menu:[{text:"privacy notice",to:"/privacy/"},{text:"code of conduct",to:"https://www.parallele.at/code-of-conduct/"}],title:"NonCon"},three:{menu:[{text:"parallele.at",to:"https://parallele.at"},{text:"bwb.is",to:"https://bwb.is"},{text:"riat.at",to:"https://riat.at"}],title:"Network"},two:{menu:[{text:"keybase",to:"https://keybase.io/noncon"},{text:"github",to:"https://github.com/nonconorg"},{text:"telegram",to:"https://t.me/joinchat/E9fhuBVwENCRcC3-df9wxA"},{text:"twitter",to:"https://twitter.com/ParallelePolis"}],title:"Social"}},gdpr:{allowed:[],show:!1},hero:{},menu:[],pageClass:{},pages:{"/":{description:"noncon.org",title:"Non Con Org"},"/404/":{description:["unfortunately, there is nothing here but nothingness."," i think you looked for something on https://parallele.at and got lost."],title:"404 - not found"},"/privacy/":{description:"noncon.org privacy",title:"Non Con Org"}},root:"/",theme:"dark",title:"noncon.org",url:"/"},Q={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},R=function(a){var b,c=a.blog,d=a.link,e=a.month,g=a.url,h=a.year,i=Object.entries(c[h][e]),k=[e];return d?b="".concat(d).concat(e,"/"):k.push(" - ",h),[x(b?aa({to:b},k):k),i.map(function(c){var d=j(c,2),e=d[0],g=d[1];return g.map(function(c){return S(f({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},S=function(a){return t([y([a.day,"-",a.month,"-",a.year," - ",aa({to:a.name},a.title)]),I(a.description)])},T=function(a){var b,c=a.link,d=a.year,e=a.blog,g=a.url;return c?b="".concat(c).concat(d,"/"):g.endsWith("".concat(d,"/"))&&(b=g),t([w(c?aa({to:b},d):d),Object.entries(e[d]).map(function(c){var d=j(c,2),e=d[0],g=d[1];return R(f({},a,{month:e,days:g,link:b}))})])},U=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.to,c=a.text;return w({class:"Cta"},aa({to:b},c))},V=function(a){return K({class:"DealWithIt",onclick:la.dealwithit.toggle},["Deal with it.",a.dealwithit&&t($({src:"/img/dealwithit.gif"}))])},W=function(a){var b=a.footer,c=b.one,d=b.two,e=b.three;return u({class:"Footer"},[t({class:"Container"},[t({class:"Menus"},[c&&t({class:"Child Info"},[c.title&&w(c.title),c.before&&c.before.map(function(b){return I(b)}),c.menu&&N([c.menu.map(function(a){return D(aa(a))})]),c.after&&c.after.map(function(b){return I(b)})]),d&&t({class:"Child"},[d.title&&w(d.title),d.before&&d.before.map(function(b){return I(b)}),d.menu&&N([d.menu.map(function(a){return D(aa(a))})]),d.after&&d.after.map(function(b){return I(b)})]),e&&t({class:"Child"},[e.title&&w(e.title),e.before&&e.before.map(function(b){return I(b)}),e.menu&&N([e.menu.map(function(a){return D(aa(a))})]),e.after&&e.after.map(function(b){return I(b)})])]),t({class:"Credits"},[I("created by the parallele polis dao"),I(["made with a few bits of ",aa({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])])},X=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,u=void 0===r?"Selected":r,w=c.denyText,A=void 0===w?"None":w;if(!f)return t({class:"Gdpr"},L({class:"ShowHide",onclick:[la.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[v([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),s({cx:"192",cy:"128",r:"32"}),s({cx:"128",cy:"256",r:"32"}),s({cx:"288",cy:"384",r:"32"}),s({cx:"272",cy:"272",r:"16"}),s({cx:"400",cy:"336",r:"16"}),s({cx:"176",cy:"368",r:"16"})])]));var E=!!e.length;return t({class:"Gdpr"},[t({class:"Container"},[h&&x(h),j&&I(j),E&&[N(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return D({class:"Cookie"},[B({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[la.gdpr.toggleAllow,{name:b}]}),(d||e)&&C({for:b},[d&&y(d),e&&I(e)])])}))],E?[z(n),B({class:"allow all",onclick:la.gdpr.allow,type:"button",value:q}),B({class:"allow",onclick:la.gdpr.close,type:"button",value:u}),B({class:"allow none",onclick:la.gdpr.deny,type:"button",value:A})]:B({onclick:la.gdpr.close,value:l,type:"button"})])])},Y=function(){return[]},Z=function(){return I({class:"HeroImage"},$({height:300,src:"/img/noncon2020-banner.jpg"}))},$=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),A(a)},_=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:la.changeTheme},L({viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},aa=function(a,c){var d=a.to,e=a.action,f=void 0===e?la.go:e,g=b(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=b(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,ka.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),r(l,[i,c])},ba=function(a){return N({class:"List"},a.map(function(a){return[D([$({src:a.img,height:"90"}),aa({to:a.to},a.title)])]}))},ca=function(a){var b=a.branding,c=a.root;return aa({to:c,class:"Logo"},[$("/noncon2020-logo.png")])},da=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,g=a.state,h=g.url,i=g.hash,j=g.root;return i&&!h.endsWith(i)&&(h+="#".concat(i)),H({className:c},N(e.map(function(a){return ea(f({},a,{url:h,root:j,collapse:void 0===d||d}))})))},ea=function(a){var c=a.text,d=a.items,e=void 0===d?[]:d,g=a.url,h=a.root,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=b(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;h&&n.startsWith("/")&&(n=n.substr(1));var o=l.to[0];j&&("-"===o||"#"===o)&&(n=j+n);var p=n.startsWith(h);h&&("/"===o||"-"===o||"#"===o)&&!p&&(n=h+n),l.to=n.replace(/\/\//g,"/"),l.to===g&&(m["class"].active=!0);var q=[],r=g.startsWith(l.to)||!k;return r&&e.length&&(q=N(e.map(function(a){return ea(f({parentTo:l.to,url:g,root:h,collapse:k},a))}))),D(m,[l.to?fa(l,c):K(l,c),q])},fa=function(a,b){return aa(a,b)},ga=function(){return[w("Organizers"),ba([{img:"/img/organizers/parallele.jpg",to:"https://parallele.at",title:"parallele polis"},{img:"/img/organizers/bwb.png",to:"https://bwb.is",title:"bwb.is"},{img:"/img/organizers/riat.jpg",to:"https://riat.at",title:"riat.at"}])]},ha=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return F(e,t({class:{Wrapper:!0}},[ia({state:d,page:c}),b]))},ia=function(a){var b=a.page,c=a.state;return[Y(c),t({class:"Page",id:"page"},b),W(c)]},ja=function(){return[w("Support"),ba([{img:"/img/support/goerli.jpg",to:"https://goerli.net",title:"Goerli Testnet"},{img:"/img/support/metagame.png",to:"https://metagame.wtf",title:"Metagame"},{img:"/img/support/metacartel.png",to:"https://metacartel.org",title:"Metacartel"},{img:"/img/support/giveth.png",to:"https://giveth.io",title:"Giveth"},{img:"/img/support/commonsstack.png",to:"https://comonsstack.org",title:"Commons Stack"},{img:"/img/support/webboot.png",to:"https://webboot.org",title:"Webboot"}])]},ka={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ka.db.init(),g=ka.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ka.db.init(),f=void 0;return d&&e[d]&&(f=ka.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ka.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},la={changeTheme:function changeTheme(a){return f({},a,{pageClass:f({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},dealwithit:{toggle:function toggle(a){return f({},a,{dealwithit:!a.dealwithit})}},gdpr:{allow:function allow(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[ka.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[la.gdpr.show,{show:!1}]}]]},close:function close(a){return[f({},a,{gdpr:f({},a.gdpr,{show:!1})}),[ka.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[la.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:[]})}),[ka.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[la.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?f({},a,{gdpr:f({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,g=e.allowed.includes(d);return g?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),f({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=j(d,2),g=e[0],h=e[1],i=void 0===h?"":h;if(g===a.url&&i===a.hash)return a;var k=window,l=k.scrollY,m=a.titles[g];if(m&&(document.title=a.title=m),g===a.url)window.location.hash=i;else if(!i){var n=document.getElementsByTagName("html"),o=j(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return window.history.pushState({url:g,hash:i,scrollY:l},a.title,c),f({},a,{url:g,hash:i,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var g=0;return b.state&&(d=b.state.url,e=b.state.hash,g=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:g,behavior:"smooth"}),f({},a,{url:d,hash:e})}},ma={"/":function _(a){return[Z(a),U({to:"https://the-commons-stack.typeform.com/to/SemYgK",text:"SIGNUP"}),t([w([I("Not a Conference."),I(" Not a Conjob.")]),I(["We intend for NONCON 2020 to be much smaller in scope, cheaper,"," and in general more community oriented than EDCON,"," as well as tilting the main topics towards community, development, and security,"," while also being more inviting to interests outside the Ethereum ecosystem"," to include all cypherpunk and privacy focused individuals and communities."," Please bear with us in the coming weeks,"," as this is very much last notice"," and we will do our best to deliver an experience that proves fulfilling for its participants."," There might or might not be speakers, there might or might not be hackbounties,"," but there will definitely be a place to hang out with peers"," and do whatever it is ya wanna do together for four days in beautiful Vienna."," Open source Blockchain projects celebrate permissionless innovation and self sovereignty."," We subscribe to these values and support them flowing out into other social spaces. ",aa({to:"https://www.parallele.at/not-a-conference-not-a-conjob/"},"Read More...")])]),t([w("How do we intend to deal with Covid19?"),I(["It's the reason for the edcon cancellation after all."," We believe that public communication needs to shift from",aa({to:"https://www.psandman.com/col/swineflu2.htm"}," containment to coping."),", based on lessons learned from past viral infections."," Are we Crazy? Well, lets say we are willing to take a calculated risk."]),x("Things that we will provide:"),I(["EN 12054 certified ",aa({to:"https://en.wikipedia.org/wiki/Hand_sanitizer#Surgical_hand_disinfection"},"Surgical hand sanitizer")," and Masks. ",aa({to:"https://twitter.com/TheRealSmuggler/status/1203361366708494342?s=20"},"(It's a cypherpunk event after all.)")]),x("Sanitization Process"),I("First, every attendee will be required to sanitize their hands."),I([" Then, we will provide disinfectant for the masks."," You will hodl the mask,"," our team will handle the disinfectant,"," to prevent the bottle(s) from being our infection vector."]),I(["We advise everyone to wear some kind of glasses or goggles. ",V(a)]),I(["After sanitizing your hands,"," please make sure to cough into your elbow and not in your hands."]),I(["If you have any further suggestions to refine these processes, please ",aa({to:"/#contacts"},"contact us")])]),t([w("Venue"),$({class:"pageImg",src:"https://i.imgur.com/bmgyrhD.jpg",height:400}),I(["Located in the center of Vienna,"," our tentative venue ",aa({to:"https://www.mqw.at/en/institutions/q21/institutions/raum-d-q21/"},"Raum D")," can comfortably hold 100 people."," It is directly opposite our ",aa({to:"https://www.parallele.at/#qrypto-qube"},"Qrypto Qube")," on Electric Avenue in the ",aa({to:"https://www.mqw.at/institutionen/q21/"},"Museumsquarter")," and based on the response, we can scale up the amount of space we utilize there."," If you are arriving earlier than April 3rd,"," and staying longer than April 6, you can hang out in our coworking space, ",aa({to:"https://www.parallele.at/#paperhub-coworking"},"Paper Hub")," a short trip via ",aa({to:"https://www.google.com/maps/dir/MuseumsQuartier,+Museumsplatz,+Vienna/Hofstattgasse+4,+1180+Wien/@48.2167831,16.3352999,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x476d07903eeb4fdf:0x94d429b3eb41ebff!2m2!1d16.3586166!2d48.2033369!1m5!1m1!1s0x476d07d13a94c74d:0x9a5f70aab1cc7fb5!2m2!1d16.3409366!2d48.2283202!3e3)"},"public transport")," from the Museumsquarter."])]),t({id:"contacts"},[w("Connect"),I(["If you would like to attend, sponsor, or speak at NonCon 2020 in Vienna, ",aa({to:"https://the-commons-stack.typeform.com/to/SemYgK"},"sign up via this Typeform")," (thx to ",aa({to:"https://commonsstack.org"},"Commons Stack"),") and we'll keep you informed."]),I(["Join our ",aa({to:"https://keybase.io/team/nonconorg"},"Keybase Team Chat")," to collaborate with us on production."]),I(["Join our ",aa({to:"https://t.me/joinchat/E9fhuBVwENCRcC3-df9wxA"},"Telegram Channel")," to coordinate with other attendees."]),I(["Don't forget to ",aa({to:"https://twitter.com/ParallelePolis"},"follow us on Twitter")," to keep up to date :-)"]),I(["Oldskool-stylee: ",aa({to:"mailto:info@parallele.at"},"email")])]),t(ga()),t(ja()),U({to:"https://app.ens.domains/name/noncon.eth",text:"Donate"})]},"/404/":function _(){return[w("404 - not found."),I("unfortunately, there is nothing here but nothingness."),I([aa({to:"/"},"click here")," to get back to safety"])]},"/privacy/":function privacy(){return[t([w("Privacy Notice"),I("This page does not:"),I(["Collect personal data, load tracking scripts,"," or use any other means of spying on its users"]),I(["Since this page and the connecting databases were setup in about 12 hours,"," so we used ",aa({to:"https://www.typeform.com/"},"typeform")," to implement the form."," For now, we save all submitted forms in a google document."," This is expected to change very soon."]),I("We will in no way try to correlate form inputs with ticket purchases"),I(["All purchasers of tickets will receive an non-personalized ntf token."," This token will not be required for entry, ! just come !,"," but will unlock some awesome goodies instead."])])]}};e({init:[f({},P,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[ka.db.get,{key:"magic-gdpr",action:la.gdpr.show}]]],subscriptions:function subscriptions(){return[[Q.listenPopState,la.pop]]},view:function(a){var b=ma[a.url]?a.url:"/404/",c=ma[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.titles={"/":"Non Con Org","/404/":"404 - not found","/privacy/":"Non Con Org"},ha({page:c,state:a},[_(a),X(a)])},node:document.getElementById("Magic")});