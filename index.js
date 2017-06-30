!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.KladrapiReact=t(require("React")):e.KladrapiReact=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){"use strict";var r=n(2)["default"];Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),i=r(o),s=n(7),a=r(s);n(11),t["default"]=i["default"].createClass({displayName:"kladrapi-react",propTypes:{token:i["default"].PropTypes.string.isRequired,contentType:i["default"].PropTypes.string.isRequired,withParent:i["default"].PropTypes.bool,limit:i["default"].PropTypes.number,regionId:i["default"].PropTypes.string,districtId:i["default"].PropTypes.string,cityId:i["default"].PropTypes.string,streetId:i["default"].PropTypes.string,buildingId:i["default"].PropTypes.string},getInitialState:function(){return{value:"",result:null}},onChange:function u(e){var t=e.target.value,n=this.props,u=n.onChange,r=n.onEmpty;u&&u(t),this.setState({value:t}),t?this.search(t):(r&&r(!0),this.setState({result:null}))},search:function(e){var t=this,n=this.props,r=n.token,o=n.contentType,i=n.withParent,s=n.limit,u=n.regionId,c=n.districtId,l=n.cityId,f=n.streetId,d=n.buildingId;if(!r)return void console.error("Token is required! Please register on https://kladr-api.ru/register/ and get token");if(!o)return void console.error("contentType is required property!");var p="http://kladr-api.ru/api.php?token="+r+"&contentType="+o+"&query="+e;i&&(p+="&withParent=1"),s&&(p+="&limit="+s),u&&(p+="&regionId="+u),c&&(p+="&districtId="+c),l&&(p+="&cityId="+l),f&&(p+="&streetId="+f),d&&(p+="&buildingId="+d),a["default"](p,null,function(e,n){if(e)console.error(e.message);else{var r=n.result;t.setState({result:r})}})},choose:function(e){var t=thos.props.onSelect;t&&t(e),this.setState({result:null,item:e,value:e.name,objectId:e.id,objectType:e.contentType})},render:function(){var e=this,t=this.state,n=t.value,r=t.result;return i["default"].createElement("div",{className:"kladr"},i["default"].createElement("input",{type:"text",onChange:this.onChange,value:n}),r?i["default"].createElement("ul",{className:"kladr__list"},r.map(function(t){var n=null;return t.parents.length>0&&"city"===t.contentType&&(n=t.parents.map(function(e){return"region"===e.contentType?i["default"].createElement("span",{key:e.id},"(",e.name," ",e.type,")"):!1})),i["default"].createElement("li",{key:t.id,className:"kladr__item",onClick:e.choose(t)},t.typeShort,".",t.name," ",n?n:null)})):null)}}),e.exports=t["default"]},function(e,t){"use strict";t["default"]=function(e){return e&&e.__esModule?e:{"default":e}},t.__esModule=!0},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".kladr{position:relative}.kladr input{width:100%}.kladr__list{position:absolute;z-index:1;margin:0;padding:0;list-style:none;width:100%;background-color:#fff;box-shadow:0 10px 20px rgba(0,0,0,.5)}.kladr__list li{padding:10px 15px;cursor:pointer}.kladr__list li:hover{background-color:#1e88e5;color:#fff}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){(function(r){function o(){return"undefined"!=typeof window&&window.process&&"renderer"===window.process.type?!0:"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function i(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,r)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}}function u(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof r&&"env"in r&&(e=r.env.DEBUG),e}function c(){try{return window.localStorage}catch(e){}}t=e.exports=n(6),t.log=s,t.formatArgs=i,t.save=a,t.load=u,t.useColors=o,t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(u())}).call(t,n(9))},function(e,t,n){function r(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function o(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(c||r);e.diff=o,e.prev=c,e.curr=r,c=r;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var a=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;a++;var o=t.formatters[r];if("function"==typeof o){var s=i[a];n=o.call(e,s),i.splice(a,1),a--}return n}),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"==typeof t.init&&t.init(n),n}function i(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;r>o;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function s(){t.enable("")}function a(e){var n,r;for(n=0,r=t.skips.length;r>n;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;r>n;n++)if(t.names[n].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=o.debug=o["default"]=o,t.coerce=u,t.disable=s,t.enable=i,t.enabled=a,t.humanize=n(8),t.names=[],t.skips=[],t.formatters={};var c},function(e,t,n){function r(){}function o(e,t,n){function o(){u.parentNode&&u.parentNode.removeChild(u),window[f]=r,c&&clearTimeout(c)}function a(){window[f]&&o()}"function"==typeof t&&(n=t,t={}),t||(t={});var u,c,l=t.prefix||"__jp",f=t.name||l+s++,d=t.param||"callback",p=null!=t.timeout?t.timeout:6e4,h=encodeURIComponent,m=document.getElementsByTagName("script")[0]||document.head;return p&&(c=setTimeout(function(){o(),n&&n(new Error("Timeout"))},p)),window[f]=function(e){i("jsonp got",e),o(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+d+"="+h(f),e=e.replace("?&","?"),i('jsonp req "%s"',e),u=document.createElement("script"),u.src=e,m.parentNode.insertBefore(u,m),a}var i=n(5)("jsonp");e.exports=o;var s=0},function(e,t){function n(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*l;case"days":case"day":case"d":return n*c;case"hours":case"hour":case"hrs":case"hr":case"h":return n*u;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return void 0}}}}function r(e){return e>=c?Math.round(e/c)+"d":e>=u?Math.round(e/u)+"h":e>=a?Math.round(e/a)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function o(e){return i(e,c,"day")||i(e,u,"hour")||i(e,a,"minute")||i(e,s,"second")||e+" ms"}function i(e,t,n){return t>e?void 0:1.5*t>e?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var s=1e3,a=60*s,u=60*a,c=24*u,l=365.25*c;e.exports=function(e,t){t=t||{};var i=typeof e;if("string"===i&&e.length>0)return n(e);if("number"===i&&isNaN(e)===!1)return t["long"]?o(e):r(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function s(){m&&p&&(m=!1,p.length?h=p.concat(h):g=-1,h.length&&a())}function a(){if(!m){var e=o(s);m=!0;for(var t=h.length;t;){for(p=h,h=[];++g<t;)p&&p[g].run();g=-1,t=h.length}p=null,m=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,h=[],m=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||m||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(a(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(a(r.parts[i],t));f[r.id]={id:r.id,refs:1,parts:s}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],s=o[1],a=o[2],u=o[3],c={css:s,media:a,sourceMap:u};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(){var e=document.createElement("style"),t=h();return e.type="text/css",t.appendChild(e),e}function s(){var e=document.createElement("link"),t=h();return e.rel="stylesheet",t.appendChild(e),e}function a(e,t){var n,r,o;if(t.singleton){var a=g++;n=m||(m=i()),r=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(),r=l.bind(null,n),o=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(),r=c.bind(null,n),o=function(){n.parentNode.removeChild(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function l(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var f={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p());var n=o(e);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],u=f[a.id];u.refs--,i.push(u)}if(e){var c=o(e);r(c,t)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete f[u.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]);n(10)(r,{});r.locals&&(e.exports=r.locals)},function(e,t){e.exports=React}])});