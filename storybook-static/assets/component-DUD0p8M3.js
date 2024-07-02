import{r as u}from"./index-uubelm5h.js";var d=function(){return d=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},d.apply(this,arguments)};function w(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function Q(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var s="right-scroll-bar-position",v="width-before-scroll-bar",E="with-scroll-bars-hidden",x="--removed-body-scroll-bar-size";function p(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function C(n,e){var t=u.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(r){var a=t.value;a!==r&&(t.value=r,t.callback(r,a))}}}})[0];return t.callback=e,t.facade}var O=typeof window<"u"?u.useLayoutEffect:u.useEffect,m=new WeakMap;function F(n,e){var t=C(null,function(r){return n.forEach(function(a){return p(a,r)})});return O(function(){var r=m.get(t);if(r){var a=new Set(r),o=new Set(n),c=t.current;a.forEach(function(i){o.has(i)||p(i,null)}),o.forEach(function(i){a.has(i)||p(i,c)})}m.set(t,n)},[n]),t}function k(n){return n}function _(n,e){e===void 0&&(e=k);var t=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(o){var c=e(o,r);return t.push(c),function(){t=t.filter(function(i){return i!==c})}},assignSyncMedium:function(o){for(r=!0;t.length;){var c=t;t=[],c.forEach(o)}t={push:function(i){return o(i)},filter:function(){return t}}},assignMedium:function(o){r=!0;var c=[];if(t.length){var i=t;t=[],i.forEach(o),c=t}var S=function(){var l=c;c=[],l.forEach(o)},h=function(){return Promise.resolve().then(S)};h(),t={push:function(l){c.push(l),h()},filter:function(l){return c=c.filter(l),t}}}};return a}function H(n){n===void 0&&(n={});var e=_(null);return e.options=d({async:!0,ssr:!1},n),e}var b=function(n){var e=n.sideCar,t=w(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return u.createElement(r,d({},t))};b.isSideCarExport=!0;function U(n,e){return n.useMedium(e),b}var A=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function R(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=A();return e&&n.setAttribute("nonce",e),n}function j(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function I(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var N=function(){var n=0,e=null;return{add:function(t){n==0&&(e=R())&&(j(e,t),I(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},T=function(){var n=N();return function(e,t){u.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},W=function(){var n=T(),e=function(t){var r=t.styles,a=t.dynamic;return n(r,a),null};return e},M={left:0,top:0,right:0,gap:0},g=function(n){return parseInt(n||"",10)||0},z=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],r=e[n==="padding"?"paddingTop":"marginTop"],a=e[n==="padding"?"paddingRight":"marginRight"];return[g(t),g(r),g(a)]},L=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return M;var e=z(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},P=W(),f="data-scroll-locked",B=function(n,e,t,r){var a=n.left,o=n.top,c=n.right,i=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(E,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(f,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(s,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(v,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(s," .").concat(s,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(v," .").concat(v,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(f,`] {
    `).concat(x,": ").concat(i,`px;
  }
`)},y=function(){var n=parseInt(document.body.getAttribute(f)||"0",10);return isFinite(n)?n:0},V=function(){u.useEffect(function(){return document.body.setAttribute(f,(y()+1).toString()),function(){var n=y()-1;n<=0?document.body.removeAttribute(f):document.body.setAttribute(f,n.toString())}},[])},q=function(n){var e=n.noRelative,t=n.noImportant,r=n.gapMode,a=r===void 0?"margin":r;V();var o=u.useMemo(function(){return L(a)},[a]);return u.createElement(P,{styles:B(o,!e,a,t?"":"!important")})};export{q as R,w as _,d as a,Q as b,H as c,U as e,v as f,W as s,F as u,s as z};
