"use strict";function b(a){return o(a)||c(a)||m()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a,b){if(null==a)return{};var c,d,f=e(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function f(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?f(Object(b),!0).forEach(function(c){k(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):f(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a,b){return o(a)||n(a,b)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function o(a){if(Array.isArray(a))return a}function q(a){"@babel/helpers - typeof";return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},q(a)}var r=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,q=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,q))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==q[A]&&o(c,A,n[A],q[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===q(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),s=r.h,h=r.app,i=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===q(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return s(a,{},b);return s(a,b,d)}},t=i("a"),a=i("circle"),u=i("div"),v=i("footer"),w=i("g"),g=i("h1"),x=i("h2"),y=i("h3"),z=i("h4"),A=i("h5"),B=i("header"),C=i("img"),D=i("input"),E=i("label"),F=i("li"),G=i("link"),H=i("main"),I=i("meta"),J=i("nav"),K=i("p"),p=i("path"),L=i("script"),M=i("span"),N=i("svg"),O=i("title"),P=i("ul"),Q=i("view"),R={description:["noncon - description"],footer:{one:{before:["created by the parallele polis dao."],menu:[{text:"privacy notice",to:"/privacy/"}],title:"noncon"},three:{menu:[{text:"keybase",to:"https://keybase.io/noncon"},{text:"github",to:"https://github.com/nonconorg"}],title:"social"},two:{menu:[{text:"parallele polis",to:"https://parallele.at"}],title:"network"}},gdpr:{allowed:[],show:!1},hero:{description:"more info soon."},menu:[],pageClass:{},pages:{"/":{description:"noncon.org",title:"Non Con Org"},"/404/":{description:["unfortunately, there is nothing here but nothingness."," i think you looked for something on https://parallele.at and got lost."],title:"404 - not found"},"/privacy/":{description:"noncon.org privacy",title:"Non Con Org"}},root:"/",title:"noncon.org",url:"/"},S={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},T=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[y(b?_({to:b},i):i),h.map(function(c){var d=l(c,2),e=d[0],f=d[1];return f.map(function(c){return U(j({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},U=function(a){return u([z([a.day,"-",a.month,"-",a.year," - ",_({to:a.name},a.title)]),K(a.description)])},V=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),u([x(c?_({to:b},d):d),Object.entries(e[d]).map(function(c){var d=l(c,2),e=d[0],f=d[1];return T(j({},a,{month:e,days:f,link:b}))})])},W=function(a){var b=a.footer,c=b.one,d=b.two,e=b.three;return v({class:"Footer"},[u({class:"Container"},[u({class:"Menus"},[c&&u({class:"Child Info"},[c.title&&x(c.title),c.before&&c.before.map(function(b){return K(b)}),c.menu&&P([c.menu.map(function(a){return F(_(a))})]),c.after&&c.after.map(function(b){return K(b)})]),d&&u({class:"Child"},[d.title&&x(d.title),d.before&&d.before.map(function(b){return K(b)}),d.menu&&P([d.menu.map(function(a){return F(_(a))})]),d.after&&d.after.map(function(b){return K(b)})]),e&&u({class:"Child"},[e.title&&x(e.title),e.before&&e.before.map(function(b){return K(b)}),e.menu&&P([e.menu.map(function(a){return F(_(a))})]),e.after&&e.after.map(function(b){return K(b)})])]),u({class:"Credits"},["made with a few bits of ",_({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])},X=function(b){var c=b.gdpr,d=void 0===c?{}:c,e=b.cookies,f=void 0===e?[]:e,g=d.show,h=d.title,i=void 0===h?"Privacy Information":h,j=d.content,k=void 0===j?"This app neither saves, collects, nor shares any data about you.":j,l=d.noDataText,m=void 0===l?"Awesome.":l,n=d.allowTitle,o=void 0===n?"Allow:":n,q=d.allowAllText,r=void 0===q?"All":q,s=d.allowText,t=void 0===s?"Selected":s,v=d.denyText,x=void 0===v?"None":v;if(!g)return u({class:"Gdpr"},N({class:"ShowHide",onclick:[ha.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[w([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),a({cx:"192",cy:"128",r:"32"}),a({cx:"128",cy:"256",r:"32"}),a({cx:"288",cy:"384",r:"32"}),a({cx:"272",cy:"272",r:"16"}),a({cx:"400",cy:"336",r:"16"}),a({cx:"176",cy:"368",r:"16"})])]));var B=!!f.length;return u({class:"Gdpr"},[u({class:"Container"},[i&&y(i),k&&K(k),B&&[P(f.map(function(a){var b=a.name,c=a.title,e=a.content,f=a.allowed;return F({class:"Cookie"},[D({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:d.allowed.includes(b),onchange:[ha.gdpr.toggleAllow,{name:b}]}),(c||e)&&E({for:b},[c&&z(c),e&&K(e)])])}))],B?[A(o),D({class:"allow all",onclick:ha.gdpr.allow,type:"button",value:r}),D({class:"allow",onclick:ha.gdpr.close,type:"button",value:t}),D({class:"allow none",onclick:ha.gdpr.deny,type:"button",value:x})]:D({onclick:ha.gdpr.close,value:m,type:"button"})])])},Y=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],e=a.logo,f=a.menu,g=a.title,h=a.root,i=d(a,["logo","menu","title","root"]);if(e||f||logotext){var j=i.branding;Array.isArray(j)||(j=[j]);var k=j,l=b(k),m=l[0],n=l.slice(1);return B({class:"Header"},u([aa({root:h}),j&&_({to:h,class:"branding"},[M(m),n]),f&&ba({state:i,items:f})]))}},Z=function(a){var b=a.hero,c=d(a,["hero"]),e=Array.isArray(b.title)?b.title:[b.title],f=b.content&&Array.isArray(b.content)?b.content:[b.content];return u({id:"hero",class:"Hero"},[u({class:"LogoWrapper"},[$("/img/noncon2020-banner.png"),b.title&&g([M(e[0]),e[1]]),b.description&&K(b.description)]),f&&u({class:"content"},f.map(function(b){return K(b)})),b.menu&&ba({items:b.menu,state:c})])},$=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),C(a)},_=function(a,b){var c=a.to,e=a.action,f=void 0===e?ha.go:e,g=d(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=d(g,["href","text","nofollow","noreferrer"]);c=c||h||"",l.href=c;var m="/"===c[0]||"#"===c[0];return m?l.onclick=[f,ga.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),t(l,[i,b])},aa=function(a){var b=a.branding,c=a.root;return _({to:c,class:"Logo"},[$("/noncon2020-logo.png")])},ba=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),J({className:c},P(e.map(function(a){return ca(j({},a,{url:g,root:i,collapse:void 0===d||d}))})))},ca=function(a){var b=a.text,c=a.items,e=void 0===c?[]:c,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,k=a.collapse,l=d(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;i&&p&&("-"===o||"#"===o)&&(n=i+n);var q=n.startsWith(g);g&&p&&!q&&(n=g+n),l.to=n.replace(/\/\//g,"/"),l.to===f&&(m["class"].active=!0);var r=[],s=f.startsWith(l.to)||!k;return s&&e.length&&(r=P(e.map(function(a){return ca(j({parentTo:l.to,url:f,root:g,collapse:k},a))}))),F(m,[l.to?da(l,b):M(l,b),r])},da=function(a,b){return _(a,b)},ea=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return H(e,u({class:{Wrapper:!0}},[fa({state:d,page:c}),b]))},fa=function(a){var b=a.page,c=a.state;return[Y(c),u({class:"Page",id:"page"},b),W(c)]},ga={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ga.db.init(),g=ga.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ga.db.init(),f=void 0;return d&&e[d]&&(f=ga.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ga.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},ha={gdpr:{allow:function allow(a){return[j({},a,{gdpr:j({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[ga.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[ha.gdpr.show,{show:!1}]}]]},close:function close(a){return[j({},a,{gdpr:j({},a.gdpr,{show:!1})}),[ga.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[ha.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[j({},a,{gdpr:j({},a.gdpr,{allowed:[]})}),[ga.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[ha.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?j({},a,{gdpr:j({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),j({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=l(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return window.location.hash=h,a;var i=window,k=i.scrollY,m=a.titles[f];if(m&&(document.title=a.title=m),window.history.pushState({url:f,hash:h,scrollY:k},a.title,c),f===a.url)window.location.hash=h;else if(!h){var n=document.getElementsByTagName("html"),o=l(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return j({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),j({},a,{url:d,hash:e})}},ia={"/":function _(a){return[Z(a),u([x({id:"vienna"},"Vienna Calling"),x("stay tuned.")])]},"/404/":function _(){return[x("404 - not found."),K("unfortunately, there is nothing here but nothingness."),K([_({to:"/"},"click here")," to get back to safety"])]},"/privacy/":function privacy(){return[u([x("Privacy Notice"),x("stay tuned.")])]}};h({init:[j({},R,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[ga.db.get,{key:"magic-gdpr",action:ha.gdpr.show}]]],subscriptions:function subscriptions(){return[[S.listenPopState,ha.pop]]},view:function(a){var b=ia[a.url]?a.url:"/404/",c=ia[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.titles={"/":"Non Con Org","/404/":"404 - not found","/privacy/":"Non Con Org"},ea({page:c,state:a},X(a))},node:document.getElementById("Magic")});