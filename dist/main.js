(()=>{"use strict";var t={192:(t,e,n)=>{n.d(e,{Z:()=>d});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,"body{margin:0}.btnME{display:inline-block;padding:.46em 1.6em;border:.1em solid #fff;margin:0 .2em .2em 0;border-radius:.12em;text-decoration:none;font-weight:300;color:#fff;text-shadow:0 .04em .04em rgba(0,0,0,.35);background-color:#000;text-align:center;transition:all .15s}.btnME:hover{cursor:pointer;text-shadow:0 0 2em #fff;color:#000;border-color:#000;background-color:#fff}.nav{background-color:#000;color:#fff;position:fixed;top:0;width:100%;height:fit-content;display:flex;justify-content:center;padding:.2rem}.nav h1{font-size:2.5rem;text-align:center;text-shadow:1px 1px 5px #f1f16b;margin:.5rem}.nav button{margin-left:2rem}.left-nav{position:absolute;height:100%;background-color:#f1f16b;box-shadow:rgba(0,0,0,.4) 0px 2px 4px,rgba(0,0,0,.3) 0px 7px 13px -3px,rgba(0,0,0,.2) 0px -3px 0px inset;margin-top:70px;z-index:1}.left-nav h2{font-size:2rem;padding:.3rem .5rem;display:flex;justify-content:center}.left-nav button{margin-left:1rem}.side-area-header{display:flex;justify-content:center;align-items:center}@media screen and (max-width: 768px){.left-nav{bottom:0;width:100%}}@media screen and (min-width: 768px){.left-nav{width:20vw;height:100vh}}.form-area{height:100vh;text-align:center}.form-inner-area{max-width:400px;padding:1rem;background-color:#f1f16b;border-radius:10px;margin:0rem auto}.hidden{display:none}.active{background-color:#000;opacity:90%}.form{text-shadow:1px 1px 5px #f1f16b;display:flex;flex-direction:column;width:70%;margin:0 auto}.form input[type=text]{padding:12px 20px;margin:8px 0px;box-sizing:border-box;box-shadow:rgba(0,0,0,.4) 0px 2px 4px,rgba(0,0,0,.3) 0px 7px 13px -3px,rgba(0,0,0,.2) 0px -3px 0px inset}.form button{width:70%;margin:0 auto;margin-top:1rem}.form-label{margin:1rem}#toDoBox{width:100%;height:100%;position:absolute;margin:0 auto;margin-top:70px;text-align:center;background-color:#acaaaf}.todo-card{max-width:40%;margin:1rem auto;background-color:gray;border:3px solid #000}.todo-card button{margin:1rem .5rem}.todo-card .edit-button{padding:.4rem 1.3rem}",""]);const d=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],d=0;d<t.length;d++){var c=t[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var d=n(a[i]);e[d].references--}for(var c=o(t,r),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),a=n(569),i=n.n(a),d=n(565),c=n.n(d),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(192),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.getElementById("content"),x=()=>{const t=document.querySelector(".form-area");t.classList.remove("hidden"),t.classList.add("active")},v=(t,e,n,o)=>{const r=document.createElement("div");r.classList.add("todo-card");const a=()=>{},i=()=>{};return{title:t,content:e,createCard:()=>{const o=document.getElementById("toDoBox"),d=document.createElement("h2");d.textContent=t;const c=document.createElement("p");c.textContent=e;const s=document.createElement("p");s.textContent=n;const l=document.createElement("button");l.textContent="Delete",l.classList.add("btn"),l.classList.add("btn-danger"),l.classList.add("delete-button");const p=document.createElement("button");p.textContent="Edit",p.classList.add("btn"),p.classList.add("btn-primary"),p.classList.add("edit-button"),r.appendChild(d),r.appendChild(c),r.appendChild(s),r.appendChild(l),r.appendChild(p),o.appendChild(r),l.addEventListener("click",a),p.addEventListener("click",i)},deleteCard:a,editCard:i}};let g=[];const b=()=>document.createElement("div"),y=(t,e,n,o)=>{const r=document.createElement("input");return r.setAttribute("type",e),r.setAttribute("placeholder",t),r.setAttribute("name",n),r.setAttribute("id",o),r},C=(t,e)=>{const n=document.createElement("label");return n.classList.add("form-label"),n.setAttribute("for",e),n.textContent=t,n},E=(t,e)=>{const n=document.createElement("button");return n.setAttribute("type",e),n.classList.add("btnME"),n.textContent=t,n},L=()=>{const t=document.getElementById("title"),e=document.getElementById("description"),n=document.getElementById("priority");t.value="",e.value="",n.value="";const o=document.querySelector(".form-area");document.querySelector(".form-inner-area"),o.addEventListener("click",(t=>{t.target==o&&(o.classList.add("hidden"),o.classList.remove("active"))})),o.classList.add("hidden"),o.classList.remove("active")},I=document.getElementById("content");(()=>{const t=(t=>{const e=document.createElement("nav");e.classList.add("nav");const n=document.createElement("h1");return n.textContent="OdinList",e.appendChild(n),e})(),e=((t,e)=>{const n=document.createElement("button");return n.setAttribute("type",void 0),n.classList.add("btnME"),n.textContent="Add Item",n})();e.setAttribute("id","add-item-button"),e.addEventListener("click",x),t.appendChild(e),h.appendChild(t)})(),(()=>{const t=document.getElementById("content"),e=(t=>{const e=document.createElement("div");e.classList.add("side-area-header");const n=document.createElement("h2");n.textContent=t;const o=((t,e)=>{const n=document.createElement("button");return n.setAttribute("type",void 0),n.classList.add("btnME"),n.textContent="Add List+",n})();return e.appendChild(n),e.appendChild(o),e})("Lists"),n=(()=>{let t=document.createElement("div");return t.classList.add("left-nav"),t})();n.appendChild(e),t.appendChild(n)})(),(()=>{const t=document.getElementById("body"),e=b();e.classList.add("form-area");const n=b();n.classList.add("form-inner-area");const o=(()=>{const t=document.createElement("form");t.classList.add("form");const e=y("Task Name","text","title","title"),n=C("Title: ","title");t.appendChild(n),t.appendChild(e);const o=y("Optional","text","description","description"),r=C("ToDo: ","description");t.appendChild(r),t.appendChild(o);const a=y("Priority","text","priority","priority"),i=C("Priority","priority");t.appendChild(i),t.appendChild(a);const d=E("Submit","submit");d.addEventListener("click",(t=>{t.preventDefault(),(()=>{const t=document.getElementById("title"),e=document.getElementById("description"),n=document.getElementById("priority"),o=t.value,r=e.value,a=n.value,i=v(o,r,a);g.push(i),console.log(g),localStorage.setItem("toDoItems",JSON.stringify(g)),i.createCard()})(),L()}));const c=E("Close");return c.addEventListener("click",(t=>{t.preventDefault(),L()})),t.appendChild(d),t.appendChild(c),t})();n.appendChild(o),e.appendChild(n),e.classList.add("hidden"),t.appendChild(e)})(),(()=>{const t=document.createElement("div");t.setAttribute("id","toDoBox");const e=document.createElement("h2");e.textContent="To Do Items",t.appendChild(e),I.appendChild(t),(()=>{if(localStorage.getItem("toDoItems")&&(g=JSON.parse(localStorage.getItem("toDoItems")),g.forEach((t=>{v(t.title,t.content,t.priority).createCard()}))),0==g.length){console.log("yes");let t=v("Your first ToDoItem","Some content here to remind you of your task","Learning is your only priority");t.createCard(),g.push(t)}})()})()})()})();