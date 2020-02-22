"use strict";function b(a,b){if(null==a)return{};var d,e,f=c(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(0<=b.indexOf(d))&&Object.prototype.propertyIsEnumerable.call(a,d)&&(f[d]=a[d])}return f}function c(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function d(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?d(Object(b),!0).forEach(function(c){i(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function j(a,b){return m(a)||l(a,b)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function m(a){if(Array.isArray(a))return a}function n(a){"@babel/helpers - typeof";return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(a)}var o=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===n(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){n(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=o(j,k([i(b)]),n)),d&&!c&&g(p,c=!0)),b},n=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?n(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?n(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](n,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};n(a.init)}}}(),q=o.h,e=o.app,h=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===n(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return q(a,{},b);return q(a,b,d)}},r=h("a"),a=h("circle"),s=h("div"),t=h("footer"),u=h("g"),g=h("h2"),v=h("h3"),w=h("h4"),x=h("h5"),y=h("header"),z=h("img"),A=h("input"),B=h("label"),C=h("li"),D=h("link"),E=h("main"),F=h("meta"),G=h("nav"),H=h("p"),p=h("path"),I=h("script"),J=h("span"),K=h("svg"),L=h("title"),M=h("ul"),N=h("view"),O={description:["parallele polis vienna - description"],gdpr:{allowed:[],show:!1},hideMenu:!0,logo:"/logo.png",menu:[{items:[{text:"Code of Conduct",to:"/code-of-conduct/"}],text:"NonCon",to:"/"},{text:"News",to:"/news/"},{text:"Events",to:"/events/"}],pageClass:{},pages:{"/":{description:"noncon.org",title:"Non Con Org"},"/404/":{description:["unfortunately, there is nothing here but nothingness."," i think you looked for something on https://parallele.at and got lost."],title:"404 - not found"}},root:"/",title:"parallele.at",url:"/"},P={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},Q=function(a){var b,c=a.blog,d=a.link,e=a.month,g=a.url,h=a.year,i=Object.entries(c[h][e]),k=[e];return d?b="".concat(d).concat(e,"/"):k.push(" - ",h),[v(b?Y({to:b},k):k),i.map(function(c){var d=j(c,2),e=d[0],g=d[1];return g.map(function(c){return R(f({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},R=function(a){return s([w([a.day,"-",a.month,"-",a.year," - ",Y({to:a.name},a.title)]),H(a.description)])},S=function(a){var b,c=a.link,d=a.year,e=a.blog,h=a.url;return c?b="".concat(c).concat(d,"/"):h.endsWith("".concat(d,"/"))&&(b=h),s([g(c?Y({to:b},d):d),Object.entries(e[d]).map(function(c){var d=j(c,2),e=d[0],g=d[1];return Q(f({},a,{month:e,days:g,link:b}))})])},T=function(a){return s({class:"Burger",onclick:a.action},[s(),s(),s()])},U=function(){return[t({class:"Footer"},[J([r({class:"anarchy",href:"http://principiadiscordia.com",rel:"nofollow noopener",target:"allhaileris",title:"Lick here, you might be one of the lucky 23."},"\u24B6"),"2019 - ",new Date().getFullYear()," - all rites reversed."]),J([" made with a few bits of ",Y({to:"https://github.com/magic/core"},"magic")])])]},V=function(b){var c=b.gdpr,d=void 0===c?{}:c,e=b.cookies,f=void 0===e?[]:e,g=d.show,h=d.title,i=void 0===h?"Privacy Information":h,j=d.content,k=void 0===j?"This app neither saves, collects, nor shares any data about you.":j,l=d.noDataText,m=void 0===l?"Awesome.":l,n=d.allowTitle,o=void 0===n?"Allow:":n,q=d.allowAllText,r=void 0===q?"All":q,t=d.allowText,y=void 0===t?"Selected":t,z=d.denyText,D=void 0===z?"None":z;if(!g)return s({class:"Gdpr"},K({class:"ShowHide",onclick:[da.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[u([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),a({cx:"192",cy:"128",r:"32"}),a({cx:"128",cy:"256",r:"32"}),a({cx:"288",cy:"384",r:"32"}),a({cx:"272",cy:"272",r:"16"}),a({cx:"400",cy:"336",r:"16"}),a({cx:"176",cy:"368",r:"16"})])]));var E=!!f.length;return s({class:"Gdpr"},[s({class:"Container"},[i&&v(i),k&&H(k),E&&[M(f.map(function(a){var b=a.name,c=a.title,e=a.content,f=a.allowed;return C({class:"Cookie"},[A({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:d.allowed.includes(b),onchange:[da.gdpr.toggleAllow,{name:b}]}),(c||e)&&B({for:b},[c&&w(c),e&&H(e)])])}))],E?[x(o),A({class:"allow all",onclick:da.gdpr.allow,type:"button",value:r}),A({class:"allow",onclick:da.gdpr.close,type:"button",value:y}),A({class:"allow none",onclick:da.gdpr.deny,type:"button",value:D})]:A({onclick:da.gdpr.close,value:m,type:"button"})])])},W=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],d=a.logo,e=a.menu,g=a.logotext,h=a.hideMenu,i=b(a,["logo","menu","logotext","hideMenu"]);return y({class:{Header:!0,hide:h}},[Y({to:i.root,class:"Logo"},X(d)),Z({state:i,items:e,collapse:!1}),T(f({},i,{action:da.header.toggleMenu})),c])},X=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),z(a)},Y=function(a,c){var d=a.to,e=a.action,f=void 0===e?da.go:e,g=b(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=b(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,ca.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),r(l,[i,c])},Z=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,g=a.state,h=g.url,i=g.hash,j=g.root;return i&&!h.endsWith(i)&&(h+="#".concat(i)),G({className:c},M(e.map(function(a){return $(f({},a,{url:h,root:j,collapse:void 0===d||d}))})))},$=function(a){var c=a.text,d=a.items,e=void 0===d?[]:d,g=a.url,h=a.root,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=b(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;j&&p&&("-"===o||"#"===o)&&(n=j+n);var q=n.startsWith(h);h&&p&&!q&&(n=h+n),l.to=n.replace(/\/\//g,"/"),l.to===g&&(m["class"].active=!0);var r=[],s=g.startsWith(l.to)||!k;return s&&e.length&&(r=M(e.map(function(a){return $(f({parentTo:l.to,url:g,root:h,collapse:k},a))}))),C(m,[l.to?_(l,c):J(l,c),r])},_=function(a,b){return Y(f({},a,{action:da.menuGo}),b)},aa=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return E(e,s({class:{Wrapper:!0}},[ba({state:d,page:c}),b]))},ba=function(a){var b=a.page,c=a.state;return[W(c),s({class:"Page",id:"page"},b),U(c)]},ca={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ca.db.init(),g=ca.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ca.db.init(),f=void 0;return d&&e[d]&&(f=ca.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ca.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},da={gdpr:{allow:function allow(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[ca.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[da.gdpr.show,{show:!1}]}]]},close:function close(a){return[f({},a,{gdpr:f({},a.gdpr,{show:!1})}),[ca.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[da.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:[]})}),[ca.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[da.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?f({},a,{gdpr:f({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,g=e.allowed.includes(d);return g?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),f({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=j(d,2),g=e[0],h=e[1],i=void 0===h?"":h;if(g===a.url&&i===a.hash)return window.location.hash=i,a;var k=window,l=k.scrollY,m=a.titles[g];if(m&&(document.title=a.title=m),window.history.pushState({url:g,hash:i,scrollY:l},a.title,c),g===a.url)window.location.hash=i;else if(!i){var n=document.getElementsByTagName("html"),o=j(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return f({},a,{url:g,hash:i,prev:a.url})},header:{toggleMenu:function toggleMenu(a){return f({},a,{hideMenu:!a.hideMenu})}},menuGo:function menuGo(a,b){return da.go(f({},a,{hideMenu:!0}),b)},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var g=0;return b.state&&(d=b.state.url,e=b.state.hash,g=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:g,behavior:"smooth"}),f({},a,{url:d,hash:e})}},ea={"/":function _(){return[g({id:"vienna"},"Vienna Calling"),s([g("some content"),H(["to show some usage of html content and meta"]),H({class:"aclass",title:"add any html meta here."},"content"),H(Y({to:"/news/",text:"smart Link, internal"})),H(Y({to:"https://parallele.at"},"smart Link, external"))])]},"/404/":function _(){return[g("404 - not found."),H("unfortunately, there is nothing here but nothingness."),H([Y({to:"/"},"click here")," to get back to safety"])]}};e({init:[f({},O,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[ca.db.get,{key:"magic-gdpr",action:da.gdpr.show}]]],subscriptions:function subscriptions(){return[[P.listenPopState,da.pop]]},view:function(a){var b=ea[a.url]?a.url:"/404/",c=ea[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.titles={"/":"Non Con Org","/404/":"404 - not found"},aa({page:c,state:a},V(a))},node:document.getElementById("Magic")});