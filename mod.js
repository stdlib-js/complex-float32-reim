// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,a="function"==typeof n?n.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,l,y,f;if(null==t)return r.call(t);e=t[a],f=a,n=null!=(y=t)&&o.call(y,f);try{t[a]=void 0}catch(o){return r.call(t)}return l=r.call(t),n?t[a]=e:delete t[a],l}:function(t){return r.call(t)},l="function"==typeof Float32Array;var y=Number.POSITIVE_INFINITY,f="function"==typeof Float32Array?Float32Array:null;var c="function"==typeof Float32Array?Float32Array:void 0;var u=function(){var t,r,o;if("function"!=typeof f)return!1;try{r=new f([1,3.14,-3.14,5e40]),o=r,t=(l&&o instanceof Float32Array||"[object Float32Array]"===e(o))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===y}catch(r){t=!1}return t}()?c:function(){throw new Error("not implemented")};function i(t){var r=new u(2);return r[0]=t.re,r[1]=t.im,r}export{i as default};
//# sourceMappingURL=mod.js.map
