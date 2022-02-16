(()=>{"use strict";var t={192:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"body{margin:0;overflow:hidden}.nav{background-color:#000;color:#fff;position:fixed;top:0;width:100%;height:fit-content}.nav h1{font-size:2.5rem;text-align:center;text-shadow:1px 1px 5px #f1f16b;margin:.5rem}.left-nav{position:absolute;background-color:#f1f16b;box-shadow:rgba(0,0,0,.4) 0px 2px 4px,rgba(0,0,0,.3) 0px 7px 13px -3px,rgba(0,0,0,.2) 0px -3px 0px inset}.left-nav h2{font-size:2rem;padding:.3rem .5rem;display:flex;justify-content:center}.left-nav button{margin-left:1rem}@media screen and (max-width: 768px){.left-nav{bottom:0;width:100%}}@media screen and (min-width: 768px){.left-nav{width:20vw;height:100vh}}.form-area{margin-top:64px;height:100vh;background-color:gray;text-align:center}.form-inner-area{max-width:400px;height:300px;padding:1rem;background-color:#f1f16b;border-radius:10px;margin:0 auto}.form{text-shadow:1px 1px 5px #f1f16b;display:flex;flex-direction:column;width:70%;margin:0 auto}.form input[type=text]{padding:12px 20px;margin:8px 0px;box-sizing:border-box;box-shadow:rgba(0,0,0,.4) 0px 2px 4px,rgba(0,0,0,.3) 0px 7px 13px -3px,rgba(0,0,0,.2) 0px -3px 0px inset}.form button{width:70%;margin:0 auto;margin-top:1rem}.form-label{margin:1rem}",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],d=r.base?s[0]+r.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),d=0;d<a.length;d++){var p=n(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),p=n.n(d),l=n(589),u=n.n(l),m=n(192),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.getElementById("content"),x=()=>document.createElement("div"),v=(t,e,n)=>{const r=document.createElement("input");return r.setAttribute("type",e),r.setAttribute("placeholder",t),r.setAttribute("name",n),r},b=(t,e)=>{const n=document.createElement("label");return n.classList.add("form-label"),n.setAttribute("for",e),n.textContent=t,n};(()=>{const t=(t=>{const e=document.createElement("nav");e.classList.add("nav");const n=document.createElement("h1");return n.textContent="OdinList",e.appendChild(n),e})();h.appendChild(t)})(),(()=>{const t=document.getElementById("content"),e=(t=>{const e=document.createElement("h2");e.textContent="Lists";const n=((t,e)=>{const n=document.createElement("button");return n.setAttribute("type",e),n.textContent=t,n})("Add List+","button");return e.appendChild(n),e})(),n=(()=>{let t=document.createElement("div");return t.classList.add("left-nav"),t})();n.appendChild(e),t.appendChild(n)})(),(()=>{const t=document.getElementById("content"),e=x();e.classList.add("form-area");const n=x();n.classList.add("form-inner-area");const r=(()=>{const t=document.createElement("form");t.classList.add("form");const e=v("Task Name","text","title"),n=b("Title: ","title");t.appendChild(n),t.appendChild(e);const r=v("Description","text","description"),o=b("ToDo: ","description");t.appendChild(o),t.appendChild(r);const a=((t,e)=>{const n=document.createElement("button");return n.setAttribute("type","submit"),n.textContent="Submit",n})();return t.appendChild(a),t})();n.appendChild(r),e.appendChild(n),t.appendChild(e)})()})()})();