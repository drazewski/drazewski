(self.webpackChunkldrazewski_blog=self.webpackChunkldrazewski_blog||[]).push([[744],{1394:function(e,t,n){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var i=function(e){return e&&e.Math==Math&&e},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||Function("return this")(),c=function(e){try{return!!e()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!l.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:l},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,y="".split,m=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return d.call(e).slice(8,-1)}(e)?y.call(e,""):Object(e)}:Object,g=function(e){return m(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},h=function(e){return"object"==typeof e?null!==e:"function"==typeof e},E=function(e,t){if(!h(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!h(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!h(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!h(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},v={}.hasOwnProperty,b=function(e,t){return v.call(e,t)},T=u.document,_=h(T)&&h(T.createElement),O=function(e){return _?T.createElement(e):{}},S=!a&&!c((function(){return 7!=Object.defineProperty(O("div"),"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,I={f:a?w:function(e,t){if(e=g(e),t=E(t,!0),S)try{return w(e,t)}catch(n){}if(b(e,t))return p(!s.f.call(e,t),e[t])}},D=function(e){if(!h(e))throw TypeError(String(e)+" is not an object");return e},A=Object.defineProperty,P={f:a?A:function(e,t,n){if(D(e),t=E(t,!0),D(n),S)try{return A(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},N=a?function(e,t,n){return P.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{N(u,e,t)}catch(n){u[e]=t}return t},x="__core-js_shared__",L=u[x]||j(x,{}),M=Function.toString;"function"!=typeof L.inspectSource&&(L.inspectSource=function(e){return M.call(e)});var R,H,k,C=L.inspectSource,B=u.WeakMap,G="function"==typeof B&&/native code/.test(C(B)),Y=o((function(e){(e.exports=function(e,t){return L[e]||(L[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),Z=0,U=Math.random(),K=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++Z+U).toString(36)},z=Y("keys"),F=function(e){return z[e]||(z[e]=K(e))},W={},V=u.WeakMap;if(G){var q=new V,Q=q.get,J=q.has,X=q.set;R=function(e,t){return X.call(q,e,t),t},H=function(e){return Q.call(q,e)||{}},k=function(e){return J.call(q,e)}}else{var $=F("state");W[$]=!0,R=function(e,t){return N(e,$,t),t},H=function(e){return b(e,$)?e[$]:{}},k=function(e){return b(e,$)}}var ee={set:R,get:H,has:k,enforce:function(e){return k(e)?H(e):R(e,{})},getterFor:function(e){return function(t){var n;if(!h(t)||(n=H(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},te=o((function(e){var t=ee.get,n=ee.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var c=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||b(o,"name")||N(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==u?(c?!l&&e[t]&&(a=!0):delete e[t],a?e[t]=o:N(e,t,o)):a?e[t]=o:j(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||C(this)}))})),ne=u,re=function(e){return"function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?re(ne[e])||re(u[e]):ne[e]&&ne[e][t]||u[e]&&u[e][t]},ie=Math.ceil,ue=Math.floor,ce=function(e){return isNaN(e=+e)?0:(e>0?ue:ie)(e)},ae=Math.min,le=Math.max,fe=Math.min,se=function(e){return function(t,n,r){var o,i,u=g(t),c=(o=u.length)>0?ae(ce(o),9007199254740991):0,a=function(e,t){var n=ce(e);return n<0?le(n+t,0):fe(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((i=u[a++])!=i)return!0}else for(;c>a;a++)if((e||a in u)&&u[a]===n)return e||a||0;return!e&&-1}},pe={includes:se(!0),indexOf:se(!1)},de=pe.indexOf,ye=function(e,t){var n,r=g(e),o=0,i=[];for(n in r)!b(W,n)&&b(r,n)&&i.push(n);for(;t.length>o;)b(r,n=t[o++])&&(~de(i,n)||i.push(n));return i},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ge=me.concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return ye(e,ge)}},Ee={f:Object.getOwnPropertySymbols},ve=oe("Reflect","ownKeys")||function(e){var t=he.f(D(e)),n=Ee.f;return n?t.concat(n(e)):t},be=function(e,t){for(var n=ve(t),r=P.f,o=I.f,i=0;i<n.length;i++){var u=n[i];b(e,u)||r(e,u,o(t,u))}},Te=/#|\.prototype\./,_e=function(e,t){var n=Se[Oe(e)];return n==Ie||n!=we&&("function"==typeof t?c(t):!!t)},Oe=_e.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},Se=_e.data={},we=_e.NATIVE="N",Ie=_e.POLYFILL="P",De=_e,Ae=I.f,Pe=function(e,t){var n,r,o,i,c,a=e.target,l=e.global,f=e.stat;if(n=l?u:f?u[a]||j(a,{}):(u[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=Ae(n,r))&&c.value:n[r],!De(l?r:a+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;be(i,o)}(e.sham||o&&o.sham)&&N(i,"sham",!0),te(n,r,i,e)}},Ne=Object.keys||function(e){return ye(e,me)},je=s.f,xe=function(e){return function(t){for(var n,r=g(t),o=Ne(r),i=o.length,u=0,c=[];i>u;)n=o[u++],a&&!je.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Le={entries:xe(!0),values:xe(!1)}.values;Pe({target:"Object",stat:!0},{values:function(e){return Le(e)}});ne.Object.values;var Me,Re=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),He=Re&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ke=Y("wks"),Ce=u.Symbol,Be=He?Ce:Ce&&Ce.withoutSetter||K,Ge=a?Object.defineProperties:function(e,t){D(e);for(var n,r=Ne(t),o=r.length,i=0;o>i;)P.f(e,n=r[i++],t[n]);return e},Ye=oe("document","documentElement"),Ze=F("IE_PROTO"),Ue=function(){},Ke=function(e){return"<script>"+e+"</"+"script>"},ze=function(){try{Me=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;ze=Me?function(e){e.write(Ke("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Me):((t=O("iframe")).style.display="none",Ye.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Ke("document.F=Object")),e.close(),e.F);for(var n=me.length;n--;)delete ze.prototype[me[n]];return ze()};W[Ze]=!0;var Fe,We=Object.create||function(e,t){var n;return null!==e?(Ue.prototype=D(e),n=new Ue,Ue.prototype=null,n[Ze]=e):n=ze(),void 0===t?n:Ge(n,t)},Ve=(b(ke,Fe="unscopables")||(Re&&b(Ce,Fe)?ke[Fe]=Ce[Fe]:ke[Fe]=Be("Symbol."+Fe)),ke[Fe]),qe=Array.prototype;null==qe[Ve]&&P.f(qe,Ve,{configurable:!0,value:We(null)});var Qe,Je=Object.defineProperty,Xe={},$e=function(e){throw e},et=pe.includes;Pe({target:"Array",proto:!0,forced:!function(e,t){if(b(Xe,e))return Xe[e];t||(t={});var n=[][e],r=!!b(t,"ACCESSORS")&&t.ACCESSORS,o=b(t,0)?t[0]:$e,i=b(t,1)?t[1]:void 0;return Xe[e]=!!n&&!c((function(){if(r&&!a)return!0;var e={length:-1};r?Je(e,1,{enumerable:!0,get:$e}):e[1]=1,n.call(e,o,i)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return et(this,e,arguments.length>1?arguments[1]:void 0)}}),Qe="includes",qe[Ve][Qe]=!0;var tt,nt,rt,ot=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},it=Function.call;tt="includes",ot(it,u["Array"].prototype[tt],nt);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(rt||(rt={}));var ut,ct=rt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ut||(ut={}));var at,lt=ut,ft=[ct.PARAGRAPH,ct.HEADING_1,ct.HEADING_2,ct.HEADING_3,ct.HEADING_4,ct.HEADING_5,ct.HEADING_6,ct.OL_LIST,ct.UL_LIST,ct.HR,ct.QUOTE,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],st=[ct.HR,ct.EMBEDDED_ENTRY,ct.EMBEDDED_ASSET],pt=((at={})[ct.OL_LIST]=[ct.LIST_ITEM],at[ct.UL_LIST]=[ct.LIST_ITEM],at[ct.LIST_ITEM]=ft.slice(),at[ct.QUOTE]=[ct.PARAGRAPH],at),dt={nodeType:ct.DOCUMENT,data:{},content:[{nodeType:ct.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var yt=Object.freeze({isInline:function(e){return Object.values(lt).includes(e.nodeType)},isBlock:function(e){return Object.values(ct).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.RG=ct},5830:function(e,t,n){"use strict";n.r(t);var r=n(2459),o=n.n(r),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={},a=function(e){return e&&e.sys&&"Link"===e.sys.type},l=function(e){return e.type+"!"+e.id},f=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":i(t))){for(var u in t)t.hasOwnProperty(u)&&(t[u]=e(t[u],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==c}));for(var t in e)e[t]===c&&delete e[t];return e}(t))}return t},s=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,o=n.id,i=l({type:r,id:o});return e.get(i)||c}(e,t);return r===c?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(u(t),u(e.includes[n]))}),[]),i=[].concat(u(n.items),u(r)),c=new Map(i.map((function(e){return[l(e.sys),e]})));return i.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,f(n,a,(function(e){return s(c,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},2459:function(e,t,n){e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,c=Object.getPrototypeOf,a=Object.prototype,l=a.hasOwnProperty,f=a.propertyIsEnumerable,s={SYMBOL_PROPERTIES:"function"==typeof u,WEAKMAP:"function"==typeof WeakMap},p=function(){if(s.WEAKMAP)return new WeakMap;var e=t({has:function(t){return!!~e._keys.indexOf(t)},set:function(t,n){e._keys.push(t),e._values.push(n)},get:function(t){return e._values[e._keys.indexOf(t)]}});return e._keys=[],e._values=[],e},d=function(n,r){if(!n.constructor)return t(null);var o=n.constructor,i=n.__proto__||c(n);if(o===r.Object)return i===r.Object.prototype?{}:t(i);if(~e.call(o).indexOf("[native code]"))try{return new o}catch(a){}return t(i)},y=function(e,t,n,r){var o=d(e,t);for(var i in r.set(e,o),e)l.call(e,i)&&(o[i]=n(e[i],r));if(s.SYMBOL_PROPERTIES){var c=u(e),a=c.length;if(a)for(var p=0,y=void 0;p<a;p++)y=c[p],f.call(e,y)&&(o[y]=n(e[y],r))}return o},m=function(e,t,n,c){var a=d(e,t);c.set(e,a);var l=s.SYMBOL_PROPERTIES?i(e).concat(u(e)):i(e),f=l.length;if(f)for(var p=0,y=void 0,m=void 0;p<f;p++)if("callee"!==(y=l[p])&&"caller"!==y)if(m=o(e,y)){m.get||m.set||(m.value=n(e[y],c));try{r(a,y,m)}catch(g){a[y]=m.value}}else a[y]=n(e[y],c);return a},g=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},h=Array.isArray,E="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:void(console&&console.error&&console.error('Unable to locate global object, returning "this".'));function v(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||E,o=n?m:y;return function e(t,i){if(!t||"object"!=typeof t)return t;if(i.has(t))return i.get(t);var u,c=t.constructor;if(c===r.Object)return o(t,r,e,i);if(h(t)){if(n)return m(t,r,e,i);var a=t.length;u=new c,i.set(t,u);for(var l=0;l<a;l++)u[l]=e(t[l],i);return u}if(t instanceof r.Date)return new c(t.getTime());if(t instanceof r.RegExp)return(u=new c(t.source,t.flags||g(t))).lastIndex=t.lastIndex,u;if(r.Map&&t instanceof r.Map)return u=new c,i.set(t,u),t.forEach((function(t,n){u.set(n,e(t,i))})),u;if(r.Set&&t instanceof r.Set)return u=new c,i.set(t,u),t.forEach((function(t){u.add(e(t,i))})),u;if(r.Blob&&t instanceof r.Blob)return t.slice(0,t.size,t.type);if(r.Buffer&&r.Buffer.isBuffer(t))return u=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(t.length):new c(t.length),i.set(t,u),t.copy(u),u;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(t))return u=new c(t.buffer.slice(0)),i.set(t,u),u;if(t instanceof r.ArrayBuffer)return u=t.slice(0),i.set(t,u),u}return"function"==typeof t.then||t instanceof Error||r.WeakMap&&t instanceof r.WeakMap||r.WeakSet&&t instanceof r.WeakSet?t:o(t,r,e,i)}(e,p())}return v.default=v,v.strict=function(e,t){return v(e,{isStrict:!0,realm:t?t.realm:void 0})},v}()},9301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var a,l,f=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),u=function(e){try{return!!e()}catch(t){return!0}},a=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!l.call({1:2},1)?function(e){var t=f(this,e);return!!t&&t.enumerable}:l},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,y=function(e){return d.call(e).slice(8,-1)},m="".split,g=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==y(e)?m.call(e,""):Object(e)}:Object,h=function(e){return g(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},E=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!E(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!E(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!E(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!E(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,T=function(e,t){return b.call(e,t)},_=i.document,O=E(_)&&E(_.createElement),S=function(e){return O?_.createElement(e):{}},w=!a&&!u((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,D={f:a?I:function(e,t){if(e=h(e),t=v(t,!0),w)try{return I(e,t)}catch(n){}if(T(e,t))return p(!s.f.call(e,t),e[t])}},A=function(e){if(!E(e))throw TypeError(String(e)+" is not an object");return e},P=Object.defineProperty,N={f:a?P:function(e,t,n){if(A(e),t=v(t,!0),A(n),w)try{return P(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},j=a?function(e,t,n){return N.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},x=function(e,t){try{j(i,e,t)}catch(n){i[e]=t}return t},L="__core-js_shared__",M=i[L]||x(L,{}),R=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(e){return R.call(e)});var H,k,C,B=M.inspectSource,G=i.WeakMap,Y="function"==typeof G&&/native code/.test(B(G)),Z=r((function(e){(e.exports=function(e,t){return M[e]||(M[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),U=0,K=Math.random(),z=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++U+K).toString(36)},F=Z("keys"),W=function(e){return F[e]||(F[e]=z(e))},V={},q=i.WeakMap;if(Y){var Q=M.state||(M.state=new q),J=Q.get,X=Q.has,$=Q.set;H=function(e,t){return t.facade=e,$.call(Q,e,t),t},k=function(e){return J.call(Q,e)||{}},C=function(e){return X.call(Q,e)}}else{var ee=W("state");V[ee]=!0,H=function(e,t){return t.facade=e,j(e,ee,t),t},k=function(e){return T(e,ee)?e[ee]:{}},C=function(e){return T(e,ee)}}var te={set:H,get:k,has:C,enforce:function(e){return C(e)?k(e):H(e,{})},getterFor:function(e){return function(t){var n;if(!E(t)||(n=k(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ne=r((function(e){var t=te.get,n=te.enforce,r=String(String).split("String");(e.exports=function(e,t,o,u){var c,a=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof t||T(o,"name")||j(o,"name",t),(c=n(o)).source||(c.source=r.join("string"==typeof t?t:""))),e!==i?(a?!f&&e[t]&&(l=!0):delete e[t],l?e[t]=o:j(e,t,o)):l?e[t]=o:x(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||B(this)}))})),re=i,oe=function(e){return"function"==typeof e?e:void 0},ie=function(e,t){return arguments.length<2?oe(re[e])||oe(i[e]):re[e]&&re[e][t]||i[e]&&i[e][t]},ue=Math.ceil,ce=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?ce:ue)(e)},le=Math.min,fe=Math.max,se=Math.min,pe=function(e){return function(t,n,r){var o,i,u=h(t),c=(o=u.length)>0?le(ae(o),9007199254740991):0,a=function(e,t){var n=ae(e);return n<0?fe(n+t,0):se(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((i=u[a++])!=i)return!0}else for(;c>a;a++)if((e||a in u)&&u[a]===n)return e||a||0;return!e&&-1}},de={includes:pe(!0),indexOf:pe(!1)},ye=de.indexOf,me=function(e,t){var n,r=h(e),o=0,i=[];for(n in r)!T(V,n)&&T(r,n)&&i.push(n);for(;t.length>o;)T(r,n=t[o++])&&(~ye(i,n)||i.push(n));return i},ge=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=ge.concat("length","prototype"),Ee={f:Object.getOwnPropertyNames||function(e){return me(e,he)}},ve={f:Object.getOwnPropertySymbols},be=ie("Reflect","ownKeys")||function(e){var t=Ee.f(A(e)),n=ve.f;return n?t.concat(n(e)):t},Te=function(e,t){for(var n=be(t),r=N.f,o=D.f,i=0;i<n.length;i++){var u=n[i];T(e,u)||r(e,u,o(t,u))}},_e=/#|\.prototype\./,Oe=function(e,t){var n=we[Se(e)];return n==De||n!=Ie&&("function"==typeof t?u(t):!!t)},Se=Oe.normalize=function(e){return String(e).replace(_e,".").toLowerCase()},we=Oe.data={},Ie=Oe.NATIVE="N",De=Oe.POLYFILL="P",Ae=Oe,Pe=D.f,Ne=function(e,t){var n,r,o,u,c,a=e.target,l=e.global,f=e.stat;if(n=l?i:f?i[a]||x(a,{}):(i[a]||{}).prototype)for(r in t){if(u=t[r],o=e.noTargetGet?(c=Pe(n,r))&&c.value:n[r],!Ae(l?r:a+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;Te(u,o)}(e.sham||o&&o.sham)&&j(u,"sham",!0),ne(n,r,u,e)}},je=Object.keys||function(e){return me(e,ge)},xe=s.f,Le=function(e){return function(t){for(var n,r=h(t),o=je(r),i=o.length,u=0,c=[];i>u;)n=o[u++],a&&!xe.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Me=(Le(!0),Le(!1));Ne({target:"Object",stat:!0},{values:function(e){return Me(e)}}),re.Object.values;var Re,He,ke="process"==y(i.process),Ce=ie("navigator","userAgent")||"",Be=i.process,Ge=Be&&Be.versions,Ye=Ge&&Ge.v8;Ye?He=(Re=Ye.split("."))[0]+Re[1]:Ce&&(!(Re=Ce.match(/Edge\/(\d+)/))||Re[1]>=74)&&(Re=Ce.match(/Chrome\/(\d+)/))&&(He=Re[1]);var Ze,Ue=He&&+He,Ke=!!Object.getOwnPropertySymbols&&!u((function(){return!Symbol.sham&&(ke?38===Ue:Ue>37&&Ue<41)})),ze=Ke&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Fe=Z("wks"),We=i.Symbol,Ve=ze?We:We&&We.withoutSetter||z,qe=a?Object.defineProperties:function(e,t){A(e);for(var n,r=je(t),o=r.length,i=0;o>i;)N.f(e,n=r[i++],t[n]);return e},Qe=ie("document","documentElement"),Je=W("IE_PROTO"),Xe=function(){},$e=function(e){return"<script>"+e+"<\/script>"},et=function(){try{Ze=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;et=Ze?function(e){e.write($e("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ze):((t=S("iframe")).style.display="none",Qe.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write($e("document.F=Object")),e.close(),e.F);for(var n=ge.length;n--;)delete et.prototype[ge[n]];return et()};V[Je]=!0;var tt,nt=Object.create||function(e,t){var n;return null!==e?(Xe.prototype=A(e),n=new Xe,Xe.prototype=null,n[Je]=e):n=et(),void 0===t?n:qe(n,t)},rt=(T(Fe,tt="unscopables")&&(Ke||"string"==typeof Fe[tt])||(Ke&&T(We,tt)?Fe[tt]=We[tt]:Fe[tt]=Ve("Symbol."+tt)),Fe[tt]),ot=Array.prototype;null==ot[rt]&&N.f(ot,rt,{configurable:!0,value:nt(null)});var it,ut=de.includes;Ne({target:"Array",proto:!0},{includes:function(e){return ut(this,e,arguments.length>1?arguments[1]:void 0)}}),it="includes",ot[rt][it]=!0;var ct,at,lt,ft=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},st=Function.call;ct="includes",ft(st,i.Array.prototype[ct],at),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(lt||(lt={}));var pt,dt=lt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(pt||(pt={}));var yt,mt=pt,gt=[dt.PARAGRAPH,dt.HEADING_1,dt.HEADING_2,dt.HEADING_3,dt.HEADING_4,dt.HEADING_5,dt.HEADING_6,dt.OL_LIST,dt.UL_LIST,dt.HR,dt.QUOTE,dt.EMBEDDED_ENTRY,dt.EMBEDDED_ASSET],ht=[dt.HR,dt.EMBEDDED_ENTRY,dt.EMBEDDED_ASSET],Et=((yt={})[dt.OL_LIST]=[dt.LIST_ITEM],yt[dt.UL_LIST]=[dt.LIST_ITEM],yt[dt.LIST_ITEM]=gt.slice(),yt[dt.QUOTE]=[dt.PARAGRAPH],yt),vt={nodeType:dt.DOCUMENT,data:{},content:[{nodeType:dt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},bt=Object.freeze({isInline:function(e){return Object.values(mt).includes(e.nodeType)},isBlock:function(e){return Object.values(dt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=dt,t.CONTAINERS=Et,t.EMPTY_DOCUMENT=vt,t.INLINES=mt,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=gt,t.VOID_BLOCKS=ht,t.helpers=bt}(a={exports:{}},a.exports),a.exports);(l=f)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var s,p,d=f.BLOCKS,y=(f.CONTAINERS,f.EMPTY_DOCUMENT,f.INLINES),m=f.MARKS,g=(f.TOP_LEVEL_BLOCKS,f.VOID_BLOCKS,f.helpers);function h(e,t){return e.map((function(e,n){return r=E(e,t),i=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:i}):r;var r,i}))}function E(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(g.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var u=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):i.createElement(i.Fragment,null,u)}var v=((s={})[d.DOCUMENT]=function(e,t){return t},s[d.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},s[d.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},s[d.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},s[d.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},s[d.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},s[d.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},s[d.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},s[d.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},s[d.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},s[d.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},s[d.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},s[d.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},s[d.HR]=function(){return i.createElement("hr",null)},s[y.ASSET_HYPERLINK]=function(e){return T(y.ASSET_HYPERLINK,e)},s[y.ENTRY_HYPERLINK]=function(e){return T(y.ENTRY_HYPERLINK,e)},s[y.EMBEDDED_ENTRY]=function(e){return T(y.EMBEDDED_ENTRY,e)},s[y.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},s),b=((p={})[m.BOLD]=function(e){return i.createElement("b",null,e)},p[m.ITALIC]=function(e){return i.createElement("i",null,e)},p[m.UNDERLINE]=function(e){return i.createElement("u",null,e)},p[m.CODE]=function(e){return i.createElement("code",null,e)},p);function T(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?E(e,{renderNode:u({},v,t.renderNode),renderMark:u({},b,t.renderMark),renderText:t.renderText}):null}},5761:function(e,t,n){"use strict";var r=n(5318),o=n(9301),i=r(n(5830));t.Z=function(e,t){var n=e.raw,r=e.references;void 0===t&&(t={});var u=JSON.parse(n);if(!r||!r.length)return(0,o.documentToReactComponents)(u,t);var c={items:[{sys:{type:"Entry"},richText:u}],includes:{Entry:r.filter((function(e){return"ContentfulAsset"!==e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Entry",id:e.contentful_id}})})),Asset:r.filter((function(e){return"ContentfulAsset"===e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Asset",id:e.contentful_id}})}))}},a=(0,i.default)(c,{removeUnresolved:!0});return(0,o.documentToReactComponents)(a[0].richText,t)}},1111:function(e,t,n){"use strict";var r=n(7294),o=n(9),i=n(6805),u=o.ZP.div.withConfig({displayName:"HeroImageTitle__HeroImageTitleWrapper",componentId:"sc-oy8ghw-0"})(["max-width:1030px;width:100%;position:absolute;bottom:5%;left:50%;right:50%;transform:translateX(-50%);"]),c=o.ZP.div.withConfig({displayName:"HeroImageTitle__Title",componentId:"sc-oy8ghw-1"})(["position:absolute;bottom:0px;color:white;left:15px;"]),a=o.ZP.h1.withConfig({displayName:"HeroImageTitle__Name",componentId:"sc-oy8ghw-2"})(["font-size:22px;margin-bottom:1px;padding-bottom:12px;font-weight:300;@media(min-width:","){font-size:30px;}"],i.J.sm),l=o.ZP.div.withConfig({displayName:"HeroImageTitle__Border",componentId:"sc-oy8ghw-3"})(["height:2px;background:linear-gradient(77deg,#c805f1,#84b3f9ed,#cbe0ff00);"]),f=o.ZP.h5.withConfig({displayName:"HeroImageTitle__Subname",componentId:"sc-oy8ghw-4"})(["font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;margin:10px 0;@media(min-width:","){margin:15px 0;}"],i.J.sm);t.Z=function(){return r.createElement(u,null,r.createElement(c,null,r.createElement(a,null,"Lukasz Drazewski"),r.createElement(l,null),r.createElement(f,null,"personal blog")))}},3785:function(e,t,n){"use strict";var r=n(7294),o=n(9),i=n(5593),u=o.ZP.h2.withConfig({displayName:"MainTitle__Title",componentId:"sc-h1m5yj-0"})(["font-size:",";font-weight:300;color:",";letter-spacing:2px;text-transform:uppercase;text-align:center;margin:",";"],(function(e){return e.isHome?"30px":"40px"}),i.O.headingsPrimary,(function(e){return e.isHome?"4px 0 15px":"15px 0"}));t.Z=function(e){var t=e.children,n=e.isHome;return r.createElement(u,{isHome:n},t)}},2906:function(e,t,n){"use strict";var r=n(7294),o=n(9),i=n(5593),u=o.ZP.span.withConfig({displayName:"PostDate__Date",componentId:"sc-i1d74y-0"})(["text-transform:uppercase;letter-spacing:1px;color:",";font:12px Lora;"],i.O.textLight);t.Z=function(e){var t=e.date;return r.createElement(u,null,t)}},3941:function(e,t,n){"use strict";var r=n(5785),o=function(){function e(){this.setVars()&&this.setListeners()}var t=e.prototype;return t.setVars=function(){return this.elements=document.body.getElementsByClassName("parallax"),!!this.elements.length},t.setListeners=function(){this.moveElements=this.moveElements.bind(this),window.addEventListener("scroll",this.moveElements,{passive:!0})},t.moveElements=function(){var e=(0,r.Z)(this.elements)[0];if((e&&e.getBoundingClientRect().bottom)>0){var t=e.getBoundingClientRect().top,n=e.offsetHeight/-t;if(t<0&&n>1){var o=e.getElementsByTagName("img").length;o&&(e.getElementsByTagName("img")[o-1].style="object-position: center calc(50% - "+1/n+" * 36%); opacity: 1")}}},e}();t.Z=o},9535:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r,o=n(7294),i=n(1496),u=n(5072),c=n(7862),a=n(9777),l=n(3941),f=n(9),s=n(1633),p=n(1111),d=f.ZP.div.withConfig({displayName:"PostsLayout__Grid",componentId:"sc-rnvi7f-0"})(["display:grid;grid-template-columns:1fr;margin:auto;max-width:1030px;"]),y=f.ZP.img.withConfig({displayName:"PostsLayout__Image",componentId:"sc-rnvi7f-1"})(["max-height:69vh;min-height:50vh;width:100%;object-fit:cover;object-position:center;transition:object-position 0.1s ease-out;"]),m=f.ZP.div.withConfig({displayName:"PostsLayout__ImageShadow",componentId:"sc-rnvi7f-2"})(["position:absolute;width:100%;height:40%;background:linear-gradient(0deg,#2222226b,rgb(203 224 255 / 0%));bottom:2px;left:0;"]),g=f.ZP.div.withConfig({displayName:"PostsLayout__AnimationWrapper",componentId:"sc-rnvi7f-3"})(["opacity:",";transition:opacity 0.6s;"],(function(e){return e.isVisible?1:0})),h=function(e){var t=e.imageData,n=e.children,r=e.postTitle,i=(0,o.useState)(!1),f=i[0],h=i[1];return(0,o.useEffect)((function(){var e=setTimeout((function(){return h(!0)}),2e3);return(new l.Z).setVars(),function(){clearTimeout(e)}}),[]),o.createElement(o.Fragment,null,o.createElement(s.Z,{title:r}),o.createElement(u.Z,null),o.createElement("div",{style:{position:"relative"},className:"parallax"},o.createElement(y,{srcSet:t.fluid.srcSet}),o.createElement(m,null),o.createElement(g,{isVisible:f},o.createElement(p.Z,null))),o.createElement(d,null,o.createElement(a.Z,null,n)),o.createElement(c.Z,null))},E=n(5593),v=n(1394),b=n(5761),T=n(5444),_=n(3785),O=n(2906),S=n(6805),w=f.ZP.div.withConfig({displayName:"blog__PostHeader",componentId:"sc-1buq64m-0"})(["text-align:center;margin-bottom:30px;"]),I=f.ZP.article.withConfig({displayName:"blog__Article",componentId:"sc-1buq64m-1"})(["color:",";text-align:justify;a{font-weight:600;}b{color:#000;}h1,h2,h3,h4,h5,h6{text-align:left;}h2:not(:first-of-type){padding-top:40px}p code{background-color:#ededed;padding:0 4px;}hr{margin:40px auto 35px;border:0;background:linear-gradient(77deg,rgb(200,5,241),rgba(132,179,249,0.93),rgba(203,224,255,0));height:2px;width:55%;}pre.javascript{padding:4px 10px;border:1px solid #aaa;background:#fbf5ef;font-size:10px;line-height:1.25em;margin-bottom:30px;white-space:break-spaces;@media(min-width:","){font-size:12px;}@media(min-width:","){font-size:14px;}}"],E.O.textPrimary,S.J.sm,S.J.md),D=(0,f.ZP)(i.Z).withConfig({displayName:"blog__IMG",componentId:"sc-1buq64m-2"})(["margin:30px 0;max-width:100%;max-height:75vh;& img{object-fit:contain !important;}"]),A={renderNode:(r={},r[v.RG.EMBEDDED_ASSET]=function(e){var t,n,r=(t=e.data.target.sys.id,(null===(n=(0,T.useStaticQuery)("2543130515").allContentfulAsset.nodes.find((function(e){return e.file.url.includes(t)})))||void 0===n?void 0:n.fluid)||null);return o.createElement(D,{fluid:r})},r[v.RG.EMBEDDED_ENTRY]=function(e){switch(e.data.target.__typename){case"ContentfulCodeBlock":return o.createElement("pre",{className:"prettyprint lang-js "+e.data.target.language},o.createElement("code",null,e.data.target.code.code));case"ContentfulScripts":return o.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.target.htmlTag.htmlTag}});default:return null}},r)},P=function(e){var t=e.data.contentfulBlogPosts.content;return(0,o.useEffect)((function(){var e,n=null==t||null===(e=t.references)||void 0===e?void 0:e.find((function(e){return e.scriptTag}));if(n){var r=document.createElement("script");r.async=!0,r.src=n.scriptTag.scriptTag,document.body.appendChild(r)}}),[]),o.createElement(h,{postTitle:e.data.contentfulBlogPosts.title,imageData:e.data.contentfulBlogPosts.featuredImage},o.createElement(w,null,o.createElement(_.Z,null,e.data.contentfulBlogPosts.title),o.createElement(O.Z,{date:e.data.contentfulBlogPosts.date})),o.createElement(I,null,(0,b.Z)(t,A)))}}}]);
//# sourceMappingURL=component---src-templates-blog-js-21557c1505d6fecc0009.js.map