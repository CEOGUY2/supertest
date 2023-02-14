(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[2441],{42441:(e,t,n)=>{var r;!function(a,o,i){if(a){for(var c,s={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},l={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},p={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},f=1;f<20;++f)s[111+f]="f"+f;for(f=0;f<=9;++f)s[f+96]=f.toString();b.prototype.bind=function(e,t,n){var r=this;return e=e instanceof Array?e:[e],r._bindMultiple.call(r,e,t,n),r},b.prototype.unbind=function(e,t){return this.bind.call(this,e,(function(){}),t)},b.prototype.trigger=function(e,t){var n=this;return n._directMap[e+":"+t]&&n._directMap[e+":"+t]({},e),n},b.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},b.prototype.stopCallback=function(e,t){return!((" "+t.className+" ").indexOf(" mousetrap ")>-1)&&!v(t,this.target)&&("INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable)},b.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},b.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);c=null},b.init=function(){var e=b(o);for(var t in e)"_"!==t.charAt(0)&&(b[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},b.init(),a.Mousetrap=b,e.exports&&(e.exports=b),void 0===(r=function(){return b}.call(t,n,t,e))||(e.exports=r)}function h(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function y(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return s[e.which]?s[e.which]:l[e.which]?l[e.which]:String.fromCharCode(e.which).toLowerCase()}function d(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function k(e,t,n){return n||(n=function(){if(!c)for(var e in c={},s)e>95&&e<112||s.hasOwnProperty(e)&&(c[s[e]]=e);return c}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function m(e,t){var n,r,a,o=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),a=0;a<n.length;++a)r=n[a],p[r]&&(r=p[r]),t&&"keypress"!=t&&u[r]&&(r=u[r],o.push("shift")),d(r)&&o.push(r);return{key:r,modifiers:o,action:t=k(r,o,t)}}function v(e,t){return null!==e&&e!==o&&(e===t||v(e.parentNode,t))}function b(e){var t=this;if(e=e||o,!(t instanceof b))return new b(e);t.target=e,t._callbacks={},t._directMap={};var n,r={},a=!1,i=!1,c=!1;function s(e){e=e||{};var t,n=!1;for(t in r)e[t]?n=!0:r[t]=0;n||(c=!1)}function l(e,n,a,o,i,c){var s,l,u,p,f=[],h=a.type;if(!t._callbacks[e])return[];for("keyup"==h&&d(e)&&(n=[e]),s=0;s<t._callbacks[e].length;++s)if(l=t._callbacks[e][s],(o||!l.seq||r[l.seq]==l.level)&&h==l.action&&("keypress"==h&&!a.metaKey&&!a.ctrlKey||(u=n,p=l.modifiers,u.sort().join(",")===p.sort().join(",")))){var y=!o&&l.combo==i,k=o&&l.seq==o&&l.level==c;(y||k)&&t._callbacks[e].splice(s,1),f.push(l)}return f}function u(e,n,r,a){t.stopCallback(n,n.target||n.srcElement,r,a)||!1===e(n,r)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(n),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(n))}function p(e){"number"!=typeof e.which&&(e.which=e.keyCode);var n=y(e);n&&("keyup"!=e.type||a!==n?t.handleKey(n,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):a=!1)}function f(e,o,i,p,h){t._directMap[e+":"+i]=o;var d,k=(e=e.replace(/\s+/g," ")).split(" ");k.length>1?function(e,t,o,i){function l(t){return function(){c=t,++r[e],clearTimeout(n),n=setTimeout(s,1e3)}}function p(t){u(o,t,e),"keyup"!==i&&(a=y(t)),setTimeout(s,10)}r[e]=0;for(var h=0;h<t.length;++h){var d=h+1===t.length?p:l(i||m(t[h+1]).action);f(t[h],d,i,e,h)}}(e,k,o,i):(d=m(e,i),t._callbacks[d.key]=t._callbacks[d.key]||[],l(d.key,d.modifiers,{type:d.action},p,e,h),t._callbacks[d.key][p?"unshift":"push"]({callback:o,modifiers:d.modifiers,action:d.action,seq:p,level:h,combo:e}))}t._handleKey=function(e,t,n){var r,a=l(e,t,n),o={},p=0,f=!1;for(r=0;r<a.length;++r)a[r].seq&&(p=Math.max(p,a[r].level));for(r=0;r<a.length;++r)if(a[r].seq){if(a[r].level!=p)continue;f=!0,o[a[r].seq]=1,u(a[r].callback,n,a[r].combo,a[r].seq)}else f||u(a[r].callback,n,a[r].combo);var h="keypress"==n.type&&i;n.type!=c||d(e)||h||s(o),i=f&&"keydown"==n.type},t._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)f(e[r],t,n)},h(e,"keypress",p),h(e,"keydown",p),h(e,"keyup",p)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)}}]);
//# sourceMappingURL=2441.9d43893841d3df512e51.entry.js.map