"use strict";(self.webpackChunkldrazewski_blog=self.webpackChunkldrazewski_blog||[]).push([[44],{9806:function(e,n,t){var r,o=t(7294),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{};var l,a,f=(function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,n){return e(n={exports:{}},n.exports),n.exports}var o,u,i,l="object",a=function(e){return e&&e.Math==Math&&e},f=a(typeof globalThis==l&&globalThis)||a(typeof window==l&&window)||a(typeof self==l&&self)||a(typeof t==l&&t)||Function("return this")(),s=function(e){try{return!!e()}catch(n){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),E={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,y={f:d&&!E.call({1:2},1)?function(e){var n=d(this,e);return!!n&&n.enumerable}:E},h=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},g={}.toString,m="".split,T=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return g.call(e).slice(8,-1)}(e)?m.call(e,""):Object(e)}:Object,v=function(e){return T(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},O=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_=function(e,n){if(!O(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!O(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!O(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!O(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")},I={}.hasOwnProperty,b=function(e,n){return I.call(e,n)},D=f.document,S=O(D)&&O(D.createElement),N=function(e){return S?D.createElement(e):{}},L=!p&&!s((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,w={f:p?A:function(e,n){if(e=v(e),n=_(n,!0),L)try{return A(e,n)}catch(t){}if(b(e,n))return h(!y.f.call(e,n),e[n])}},P=function(e){if(!O(e))throw TypeError(String(e)+" is not an object");return e},H=Object.defineProperty,R={f:p?H:function(e,n,t){if(P(e),n=_(n,!0),P(t),L)try{return H(e,n,t)}catch(r){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},M=p?function(e,n,t){return R.f(e,n,h(1,t))}:function(e,n,t){return e[n]=t,e},j=function(e,n){try{M(f,e,n)}catch(t){f[e]=n}return n},k=r((function(e){var n="__core-js_shared__",t=f[n]||j(n,{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),x=k("native-function-to-string",Function.toString),G=f.WeakMap,C="function"==typeof G&&/native code/.test(x.call(G)),B=0,Y=Math.random(),K=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+Y).toString(36)},U=k("keys"),F=function(e){return U[e]||(U[e]=K(e))},z={},V=f.WeakMap;if(C){var Q=new V,q=Q.get,W=Q.has,Z=Q.set;o=function(e,n){return Z.call(Q,e,n),n},u=function(e){return q.call(Q,e)||{}},i=function(e){return W.call(Q,e)}}else{var J=F("state");z[J]=!0,o=function(e,n){return M(e,J,n),n},u=function(e){return b(e,J)?e[J]:{}},i=function(e){return b(e,J)}}var X={set:o,get:u,has:i,enforce:function(e){return i(e)?u(e):o(e,{})},getterFor:function(e){return function(n){var t;if(!O(n)||(t=u(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}},$=r((function(e){var n=X.get,t=X.enforce,r=String(x).split("toString");k("inspectSource",(function(e){return x.call(e)})),(e.exports=function(e,n,o,u){var i=!!u&&!!u.unsafe,c=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof n||b(o,"name")||M(o,"name",n),t(o).source=r.join("string"==typeof n?n:"")),e!==f?(i?!l&&e[n]&&(c=!0):delete e[n],c?e[n]=o:M(e,n,o)):c?e[n]=o:j(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||x.call(this)}))})),ee=f,ne=function(e){return"function"==typeof e?e:void 0},te=function(e,n){return arguments.length<2?ne(ee[e])||ne(f[e]):ee[e]&&ee[e][n]||f[e]&&f[e][n]},re=Math.ceil,oe=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,ce=Math.max,le=Math.min,ae=function(e){return function(n,t,r){var o,u,i=v(n),c=(o=i.length)>0?ie(ue(o),9007199254740991):0,l=function(e,n){var t=ue(e);return t<0?ce(t+n,0):le(t,n)}(r,c);if(e&&t!=t){for(;c>l;)if((u=i[l++])!=u)return!0}else for(;c>l;l++)if((e||l in i)&&i[l]===t)return e||l||0;return!e&&-1}},fe={includes:ae(!0),indexOf:ae(!1)},se=fe.indexOf,pe=function(e,n){var t,r=v(e),o=0,u=[];for(t in r)!b(z,t)&&b(r,t)&&u.push(t);for(;n.length>o;)b(r,t=n[o++])&&(~se(u,t)||u.push(t));return u},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],de=Ee.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return pe(e,de)}},he={f:Object.getOwnPropertySymbols},ge=te("Reflect","ownKeys")||function(e){var n=ye.f(P(e)),t=he.f;return t?n.concat(t(e)):n},me=function(e,n){for(var t=ge(n),r=R.f,o=w.f,u=0;u<t.length;u++){var i=t[u];b(e,i)||r(e,i,o(n,i))}},Te=/#|\.prototype\./,ve=function(e,n){var t=_e[Oe(e)];return t==be||t!=Ie&&("function"==typeof n?s(n):!!n)},Oe=ve.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},_e=ve.data={},Ie=ve.NATIVE="N",be=ve.POLYFILL="P",De=ve,Se=w.f,Ne=function(e,n){var t,r,o,u,i,c=e.target,l=e.global,a=e.stat;if(t=l?f:a?f[c]||j(c,{}):(f[c]||{}).prototype)for(r in n){if(u=n[r],o=e.noTargetGet?(i=Se(t,r))&&i.value:t[r],!De(l?r:c+(a?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;me(u,o)}(e.sham||o&&o.sham)&&M(u,"sham",!0),$(t,r,u,e)}},Le=Object.keys||function(e){return pe(e,Ee)},Ae=y.f,we=function(e){return function(n){for(var t,r=v(n),o=Le(r),u=o.length,i=0,c=[];u>i;)t=o[i++],p&&!Ae.call(r,t)||c.push(e?[t,r[t]]:r[t]);return c}},Pe=(we(!0),we(!1));Ne({target:"Object",stat:!0},{values:function(e){return Pe(e)}}),ee.Object.values;var He=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),Re=f.Symbol,Me=k("wks"),je=p?Object.defineProperties:function(e,n){P(e);for(var t,r=Le(n),o=r.length,u=0;o>u;)R.f(e,t=r[u++],n[t]);return e},ke=te("document","documentElement"),xe=F("IE_PROTO"),Ge=function(){},Ce=function(){var e,n=N("iframe"),t=Ee.length;for(n.style.display="none",ke.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ce=e.F;t--;)delete Ce.prototype[Ee[t]];return Ce()},Be=Object.create||function(e,n){var t;return null!==e?(Ge.prototype=P(e),t=new Ge,Ge.prototype=null,t[xe]=e):t=Ce(),void 0===n?t:je(t,n)};z[xe]=!0;var Ye,Ke=Me[Ye="unscopables"]||(Me[Ye]=He&&Re[Ye]||(He?Re:K)("Symbol."+Ye)),Ue=Array.prototype;null==Ue[Ke]&&M(Ue,Ke,Be(null));var Fe,ze=fe.includes;Ne({target:"Array",proto:!0},{includes:function(e){return ze(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ue[Ke][Fe]=!0;var Ve,Qe,qe,We=function(e,n,t){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},Ze=Function.call;Ve="includes",We(Ze,f.Array.prototype[Ve],Qe),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(qe||(qe={}));var Je,Xe=qe;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Je||(Je={}));var $e,en=Je,nn=[Xe.PARAGRAPH,Xe.HEADING_1,Xe.HEADING_2,Xe.HEADING_3,Xe.HEADING_4,Xe.HEADING_5,Xe.HEADING_6,Xe.OL_LIST,Xe.UL_LIST,Xe.HR,Xe.QUOTE,Xe.EMBEDDED_ENTRY,Xe.EMBEDDED_ASSET],tn=[Xe.HR,Xe.EMBEDDED_ENTRY,Xe.EMBEDDED_ASSET],rn=(($e={})[Xe.OL_LIST]=[Xe.LIST_ITEM],$e[Xe.UL_LIST]=[Xe.LIST_ITEM],$e[Xe.LIST_ITEM]=nn.slice(),$e[Xe.QUOTE]=[Xe.PARAGRAPH],$e),on=Object.freeze({isInline:function(e){return Object.values(en).includes(e.nodeType)},isBlock:function(e){return Object.values(Xe).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});n.BLOCKS=Xe,n.CONTAINERS=rn,n.INLINES=en,n.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},n.TOP_LEVEL_BLOCKS=nn,n.VOID_BLOCKS=tn,n.helpers=on}(l={exports:{}},l.exports),l.exports);(a=f)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")&&a.default;var s,p,E=f.BLOCKS,d=(f.CONTAINERS,f.INLINES),y=f.MARKS,h=(f.TOP_LEVEL_BLOCKS,f.VOID_BLOCKS,f.helpers);function g(e,n){return e.map((function(e,t){return r=m(e,n),u=t,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function m(e,n){var t=n.renderNode,r=n.renderMark,o=n.renderText;if(h.isText(e))return e.marks.reduce((function(e,n){return r[n.type]?r[n.type](e):e}),o?o(e.value):e.value);var i=g(e.content,n);return e.nodeType&&t[e.nodeType]?t[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var T=((s={})[E.DOCUMENT]=function(e,n){return n},s[E.PARAGRAPH]=function(e,n){return u.createElement("p",null,n)},s[E.HEADING_1]=function(e,n){return u.createElement("h1",null,n)},s[E.HEADING_2]=function(e,n){return u.createElement("h2",null,n)},s[E.HEADING_3]=function(e,n){return u.createElement("h3",null,n)},s[E.HEADING_4]=function(e,n){return u.createElement("h4",null,n)},s[E.HEADING_5]=function(e,n){return u.createElement("h5",null,n)},s[E.HEADING_6]=function(e,n){return u.createElement("h6",null,n)},s[E.EMBEDDED_ENTRY]=function(e,n){return u.createElement("div",null,n)},s[E.UL_LIST]=function(e,n){return u.createElement("ul",null,n)},s[E.OL_LIST]=function(e,n){return u.createElement("ol",null,n)},s[E.LIST_ITEM]=function(e,n){return u.createElement("li",null,n)},s[E.QUOTE]=function(e,n){return u.createElement("blockquote",null,n)},s[E.HR]=function(){return u.createElement("hr",null)},s[d.ASSET_HYPERLINK]=function(e){return O(d.ASSET_HYPERLINK,e)},s[d.ENTRY_HYPERLINK]=function(e){return O(d.ENTRY_HYPERLINK,e)},s[d.EMBEDDED_ENTRY]=function(e){return O(d.EMBEDDED_ENTRY,e)},s[d.HYPERLINK]=function(e,n){return u.createElement("a",{href:e.data.uri},n)},s),v=((p={})[y.BOLD]=function(e){return u.createElement("b",null,e)},p[y.ITALIC]=function(e){return u.createElement("i",null,e)},p[y.UNDERLINE]=function(e){return u.createElement("u",null,e)},p[y.CODE]=function(e){return u.createElement("code",null,e)},p);function O(e,n){return u.createElement("span",{key:n.data.target.sys.id},"type: ",n.nodeType," id: ",n.data.target.sys.id)}n.h=function(e,n){return void 0===n&&(n={}),e?m(e,{renderNode:i({},T,n.renderNode),renderMark:i({},v,n.renderMark),renderText:n.renderText}):null}},3785:function(e,n,t){var r=t(7294),o=t(9),u=t(5593),i=o.ZP.h2.withConfig({displayName:"MainTitle__Title",componentId:"sc-h1m5yj-0"})(["font-size:",";font-weight:300;color:",";letter-spacing:2px;text-transform:uppercase;text-align:center;margin:",";"],(function(e){return e.isHome?"30px":"40px"}),u.O.headingsPrimary,(function(e){return e.isHome?"4px 0 15px":"15px 0"}));n.Z=function(e){var n=e.children,t=e.isHome;return r.createElement(i,{isHome:t},n)}}}]);
//# sourceMappingURL=c7e76c9f0722f49af4141bd4cd0f44cdf0746e88-99867265dd2e05e8c0f2.js.map