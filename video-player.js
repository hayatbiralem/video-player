!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){(function(t){!function(n,r){"use strict";var o={};n.PubSub=o;var i=n.define;!function(t){var e={},n=-1;function r(t){var e;for(e in t)if(t.hasOwnProperty(e))return!0;return!1}function o(t,e,n){try{t(e,n)}catch(t){setTimeout(function(t){return function(){throw t}}(t),0)}}function i(t,e,n){t(e,n)}function u(t,n,r,u){var c,a=e[n],f=u?i:o;if(e.hasOwnProperty(n))for(c in a)a.hasOwnProperty(c)&&f(a[c],t,r)}function c(t,n,o,i){var c=function(t,e,n){return function(){var r=String(t),o=r.lastIndexOf(".");for(u(t,t,e,n);-1!==o;)o=(r=r.substr(0,o)).lastIndexOf("."),u(t,r,e,n)}}(t="symbol"==typeof t?t.toString():t,n,i);return!!function(t){for(var n=String(t),o=Boolean(e.hasOwnProperty(n)&&r(e[n])),i=n.lastIndexOf(".");!o&&-1!==i;)i=(n=n.substr(0,i)).lastIndexOf("."),o=Boolean(e.hasOwnProperty(n)&&r(e[n]));return o}(t)&&(!0===o?c():setTimeout(c,0),!0)}t.publish=function(e,n){return c(e,n,!1,t.immediateExceptions)},t.publishSync=function(e,n){return c(e,n,!0,t.immediateExceptions)},t.subscribe=function(t,r){if("function"!=typeof r)return!1;t="symbol"==typeof t?t.toString():t,e.hasOwnProperty(t)||(e[t]={});var o="uid_"+String(++n);return e[t][o]=r,o},t.subscribeOnce=function(e,n){var r=t.subscribe(e,(function(){t.unsubscribe(r),n.apply(this,arguments)}));return t},t.clearAllSubscriptions=function(){e={}},t.clearSubscriptions=function(t){var n;for(n in e)e.hasOwnProperty(n)&&0===n.indexOf(t)&&delete e[n]},t.countSubscriptions=function(t){var n,r=0;for(n in e)e.hasOwnProperty(n)&&0===n.indexOf(t)&&r++;return r},t.getSubscriptions=function(t){var n,r=[];for(n in e)e.hasOwnProperty(n)&&0===n.indexOf(t)&&r.push(n);return r},t.unsubscribe=function(n){var r,o,i,u="string"==typeof n&&(e.hasOwnProperty(n)||function(t){var n;for(n in e)if(e.hasOwnProperty(n)&&0===n.indexOf(t))return!0;return!1}(n)),c=!u&&"string"==typeof n,a="function"==typeof n,f=!1;if(!u){for(r in e)if(e.hasOwnProperty(r)){if(o=e[r],c&&o[n]){delete o[n],f=n;break}if(a)for(i in o)o.hasOwnProperty(i)&&o[i]===n&&(delete o[i],f=!0)}return f}t.clearSubscriptions(n)}}(o),"function"==typeof i&&i.amd?i((function(){return o})):(void 0!==t&&t.exports&&(e=t.exports=o),e.PubSub=o,t.exports=e=o)}("object"==typeof window&&window||this)}).call(this,n(1)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function r(t,e){!function(t,e){Array.prototype.forEach.call(t,e)}(document.querySelectorAll(t),e)}function o(t){let e=t.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return e&&e[1]?e[1]:0}function i(t){let e=t.match(/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/);return e&&e[5]?e[5]:0}function u(t,e){let n=function(e){let n=function(){},r=(e=e||{}).data||{},o=e.success||n,i=e.error||n,u=e.always||n,c=e.type||"get",a=new XMLHttpRequest,f="post"===c;f?(a.open("POST",t,!0),a.setRequestHeader("Content-Type","application/json")):a.open("GET",t,!0),a.onload=function(){if(this.status>=200&&this.status<400){let t=JSON.parse(this.response);o(t),u(t)}else i(this),u(this)},a.onerror=function(){i(this),u(this)},f?a.send(JSON.stringify(r)):a.send()};if(!e)return n;n(e)}n.r(e),window.oldFashionedAjax=u;var c=u;let a={youtube:[{name:"poster",func:function(t,e){return"https://i.ytimg.com/vi/"+t+"/"+(e=e||"sddefault")+".jpg"}}],vimeo:[{name:"data",func:function(t){return c("https://vimeo.com/api/v2/video/"+t+".json")}}]};function f(t){let e=!1,n=!1,r=!1;return[{type:"youtube",func:o},{type:"vimeo",func:i}].forEach((function(o){if(!n){let i=o.func(t);i&&(n=i,e=o.type,r=function(t,e){let n=!1;return a[t]&&(n={},a[t].forEach((function(t){n[t.name]=t.func(e)}))),n}(e,n))}})),!!n&&{id:n,meta:r,type:e,url:t}}function s(t,e){let n=document.createElement("div");n.setAttribute("class","o-video-player__poster"),n.setAttribute("style","background-image: url("+e+");"),t.appendChild(n)}let l={youtube:function(t,e){s(t,e.meta.poster),t.defaultInnerHTML=t.innerHTML},vimeo:function(t,e){e.meta.data({success:function(e){s(t,e[0].thumbnail_large),t.defaultInnerHTML=t.innerHTML},error:function(t){console.error&&console.error(t)}})}};function p(t,e){return t.classList.contains(e)}let d={youtube:"https://www.youtube.com/embed/{id}?autoplay=1{params}",vimeo:"https://player.vimeo.com/video/{id}?autoplay=1{params}"};function y(t,e){if(d[e.type]){let n="";e.muted&&(n+="&muted=1"),t.appendChild(function(t){let e=document.createElement("iframe");return e.setAttribute("class","o-video-player__video"),e.setAttribute("width","560"),e.setAttribute("height","315"),e.setAttribute("frameborder","0"),e.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),e.setAttribute("allowfullscreen","allowfullscreen"),e.setAttribute("src",t),e}(d[e.type].replace("{id}",e.id).replace("{params}",n))),t.iframedInnerHTML=t.innerHTML}}var b=n(0),m=n.n(b);let v=function(t,e){let n=!p(t,"is-activated");!function(t,e,n){t.classList.toggle(e,n)}(t,"is-activated",n),n?(y(t,e),m.a.publish("video-player-played",{el:t,video:e})):t.innerHTML=t.defaultInnerHTML};function h(t,e){t.addEventListener("click",(function(n){!function(t,e,n){p(e,"is-activated")||v(e,n)}(0,t,e)})),m.a.subscribe("video-player-played",(function(n,r){!function(t,e,n,r){if(e.el!==n){p(n,"is-activated")&&v(n,r)}}(0,r,t,e)}))}function w(){r(".o-video-player",(function(t){if(function(t,e){return e="data-"+(e=e||"processed"),"1"!==t.getAttribute(e)&&(t.setAttribute(e,"1"),!0)}(t)){let e=f(encodeURI(t.getAttribute("data-url")));e&&(e.muted=t.getAttribute("data-muted")?1:0,window[e.type]=e,function(t,e){l[e.type]&&l[e.type](t,e)}(t,e),h(t,e))}}))}var O;n(2),n(3),n(4),n(5);window.processVideoPlayer=w,O=function(){w()},"loading"!=document.readyState?O():document.addEventListener("DOMContentLoaded",O);e.default=w}]);