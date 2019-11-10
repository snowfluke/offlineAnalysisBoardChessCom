(function(w){"use strict";function oe(a){if(B(a))u(a.objectMaxDepth)&&(Mc.objectMaxDepth=Wb(a.objectMaxDepth)?a.objectMaxDepth:NaN);else return Mc;
}function Wb(a){return Y(a)&&0<a}function K(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.9/"+(a?a+"/":"")+d;
for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;
c+=e(f)}return new b(c)}}function wa(a){if(null==a||Za(a))return!1;if(I(a)||E(a)||z&&a instanceof z)return!0;var b="length"in Object(a)&&a.length;
return Y(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(C(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(I(a)||wa(a)){
var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ra.call(a,c)&&b.call(d,a[c],c,a);
return a}function Oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Xb(a){return function(b,d){
a(d,b)}}function pe(){return++qb}function Yb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(B(g)||C(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){
var m=h[k],p=g[m];d&&B(p)?fa(p)?a[m]=new Date(p.valueOf()):$a(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):Zb(p)?a[m]=p.clone():(B(a[m])||(a[m]=I(p)?[]:{}),
Yb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function O(a){return Yb(a,xa.call(arguments,1),!1)}function qe(a){
return Yb(a,xa.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function $b(a,b){return O(Object.create(a),b)}function D(){}
function ab(a){return a}function la(a){return function(){return a}}function ac(a){return C(a.toString)&&a.toString!==ia}function x(a){
return"undefined"===typeof a}function u(a){return"undefined"!==typeof a}function B(a){return null!==a&&"object"===typeof a}function Nc(a){
return null!==a&&"object"===typeof a&&!Pc(a)}function E(a){return"string"===typeof a}function Y(a){return"number"===typeof a}function fa(a){
return"[object Date]"===ia.call(a)}function bc(a){switch(ia.call(a)){case"[object Error]":return!0;case"[object Exception]":return!0;
case"[object DOMException]":return!0;default:return a instanceof Error}}function C(a){return"function"===typeof a}function $a(a){
return"[object RegExp]"===ia.call(a)}function Za(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Na(a){
return"boolean"===typeof a}function re(a){return a&&Y(a.length)&&se.test(ia.call(a))}function Zb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find));
}function te(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ya(a){return L(a.nodeName||a[0]&&a[0].nodeName);
}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function pa(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,g;
if(I(a)){g=0;for(var f=a.length;g<f;g++)b.push(e(a[g],c))}else if(Nc(a))for(g in a)b[g]=e(a[g],c);else if(a&&"function"===typeof a.hasOwnProperty)for(g in a)a.hasOwnProperty(g)&&(b[g]=e(a[g],c));else for(g in a)ra.call(a,g)&&(b[g]=e(a[g],c));
d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!B(a))return a;var d=g.indexOf(a);if(-1!==d)return h[d];if(Za(a)||bb(a))throw qa("cpws");
var d=!1,e=f(a);void 0===e&&(e=I(a)?[]:Object.create(Pc(a)),d=!0);g.push(a);h.push(e);return d?c(a,e,b):e}function f(a){switch(ia.call(a)){
case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Float32Array]":case"[object Float64Array]":
case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return new a.constructor(e(a.buffer),a.byteOffset,a.length);
case"[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b}return a.slice(0);
case"[object Boolean]":case"[object Number]":case"[object String]":case"[object Date]":return new a.constructor(a.valueOf());case"[object RegExp]":
return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case"[object Blob]":return new a.constructor([a],{
type:a.type})}if(C(a.cloneNode))return a.cloneNode(!0)}var g=[],h=[];d=Wb(d)?d:NaN;if(b){if(re(b)||"[object ArrayBuffer]"===ia.call(b))throw qa("cpta");
if(a===b)throw qa("cpi");I(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);h.push(b);return c(a,b,d)}return e(a,d);
}function cc(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;
var d=typeof a,c;if(d===typeof b&&"object"===d)if(I(a)){if(!I(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],b[c]))return!1;
return!0}}else{if(fa(a))return fa(b)?cc(a.getTime(),b.getTime()):!1;if($a(a))return $a(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||Za(a)||Za(b)||I(b)||fa(b)||$a(b))return!1;
d=S();for(c in a)if("$"!==c.charAt(0)&&!C(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!C(b[c]))return!1;
return!0}return!1}function db(a,b,d){return a.concat(xa.call(b,d))}function Ra(a,b){var d=2<arguments.length?xa.call(arguments,2):[];
return!C(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){
return arguments.length?b.apply(a,arguments):b.call(a)}}function Qc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Za(b)?d="$WINDOW":b&&w.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");
return d}function eb(a,b){if(!x(a))return Y(b)||(b=b?2:null),JSON.stringify(a,Qc,b)}function Rc(a){return E(a)?JSON.parse(a):a}function Sc(a,b){
a=a.replace(ue,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return U(d)?b:d}function dc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();
b=Sc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function za(a){a=z(a).clone().empty();var b=z("<div>").append(a).html();
try{return a[0].nodeType===Oa?L(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+L(b)})}catch(d){return L(b);
}}function Tc(a){try{return decodeURIComponent(a)}catch(b){}}function ec(a){var b={};r((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Tc(e),u(e)&&(f=u(f)?Tc(f):!0,ra.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f));
});return b}function fc(a){var b=[];r(a,function(a,c){I(a)?r(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)));
});return b.length?b.join("&"):""}function fb(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ja(a,b){
return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+");
}function ve(a,b){var d,c,e=Ha.length;for(c=0;c<e;++c)if(d=Ha[c]+b,E(d=a.getAttribute(d)))return d;return null}function we(a,b){var d,c,e={};
r(Ha,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Ha,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,
c=e.getAttribute(b))});d&&(xe?(e.strictDi=null!==ve(d,"strict-di"),b(d,c?[c]:[],e)):w.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."));
}function Uc(a,b,d){B(d)||(d={});d=O({strictDi:!1},d);var c=function(){a=z(a);if(a.injector()){var c=a[0]===w.document?"document":za(a);
throw qa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"))}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a);
}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=gb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){
a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;w&&e.test(w.name)&&(d.debugInfoEnabled=!0,
w.name=w.name.replace(e,""));if(w&&!f.test(w.name))return c();w.name=w.name.replace(f,"");$.resumeBootstrap=function(a){r(a,function(a){
b.push(a)});return c()};C($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function ye(){w.name="NG_ENABLE_DEBUG_INFO!"+w.name;
w.location.reload()}function ze(a){a=$.element(a).injector();if(!a)throw qa("test");return a.get("$$testability")}function Vc(a,b){
b=b||"_";return a.replace(Ae,function(a,c){return(c?b:"")+a.toLowerCase()})}function Be(){var a;if(!Wc){var b=rb();(ma=x(b)?w.jQuery:b?w[b]:void 0)&&ma.fn.on?(z=ma,
O(ma.fn,{scope:Sa.scope,isolateScope:Sa.isolateScope,controller:Sa.controller,injector:Sa.injector,inheritedData:Sa.inheritedData
}),a=ma.cleanData,ma.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=ma._data(f,"events"))&&c.$destroy&&ma(f).triggerHandler("$destroy");
a(b)}):z=V;$.element=z;Wc=!0}}function hb(a,b,d){if(!a)throw qa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&I(a)&&(a=a[a.length-1]);
hb(C(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ia(a,b){if("hasOwnProperty"===a)throw qa("badname",b);
}function Xc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&C(a)?Ra(e,a):a;
}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=z(xa.call(a,0,e))),c.push(b);
return c||a}function S(){return Object.create(null)}function gc(a){if(null==a)return"";switch(typeof a){case"string":break;case"number":
a=""+a;break;default:a=!ac(a)||I(a)||fa(a)?eb(a):a.toString()}return a}function Ce(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=K("$injector"),c=K("ng");
a=b(a,"angular",Object);a.$$minErr=a.$$minErr||K;return b(a,"module",function(){var a={};return function(f,g,h){var k={};if("hasOwnProperty"===f)throw c("badname","module");
g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,g){g||(g=e);return function(){g[d||"push"]([b,c,arguments]);
return v}}function b(a,c,d){d||(d=e);return function(b,e){e&&C(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return v}}if(!g)throw d("nomod",f);
var e=[],n=[],F=[],s=a("$injector","invoke","push",n),v={_invokeQueue:e,_configBlocks:n,_runBlocks:F,info:function(a){if(u(a)){if(!B(a))throw c("aobj","value");
k=a;return this}return k},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),
value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),
filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),
component:b("$compileProvider","component"),config:s,run:function(a){F.push(a);return this}};h&&s(h);return v})}})}function ka(a,b){
if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(B(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];
return b||a}function De(a,b){var d=[];Wb(b)&&(a=$.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Qc(a,b);if(B(b)){if(0<=d.indexOf(b))return"...";
d.push(b)}return b})}function Ee(a){O(a,{errorHandlingConfig:oe,bootstrap:Uc,copy:pa,extend:O,merge:qe,equals:sa,element:z,forEach:r,
injector:gb,noop:D,bind:Ra,toJson:eb,fromJson:Rc,identity:ab,isUndefined:x,isDefined:u,isString:E,isFunction:C,isObject:B,isNumber:Y,
isElement:Zb,isArray:I,version:Fe,isDate:fa,lowercase:L,uppercase:ub,callbacks:{$$counter:0},getTestability:ze,reloadWithDebugInfo:ye,
$$minErr:K,$$csp:Ja,$$encodeUriSegment:fb,$$encodeUriQuery:ja,$$stringify:gc});ic=Ce(w);ic("ng",["ngLocale"],["$provide",function(a){
a.provider({$$sanitizeUri:Ge});a.provider("$compile",Yc).directive({a:He,input:Zc,textarea:Zc,form:Ie,script:Je,select:Ke,option:Le,
ngBind:Me,ngBindHtml:Ne,ngBindTemplate:Oe,ngClass:Pe,ngClassEven:Qe,ngClassOdd:Re,ngCloak:Se,ngController:Te,ngForm:Ue,ngHide:Ve,
ngIf:We,ngInclude:Xe,ngInit:Ye,ngNonBindable:Ze,ngPluralize:$e,ngRepeat:af,ngShow:bf,ngStyle:cf,ngSwitch:df,ngSwitchWhen:ef,ngSwitchDefault:ff,
ngOptions:gf,ngTransclude:hf,ngModel:jf,ngList:kf,ngChange:lf,pattern:$c,ngPattern:$c,required:ad,ngRequired:ad,minlength:bd,ngMinlength:bd,
maxlength:cd,ngMaxlength:cd,ngValue:mf,ngModelOptions:nf}).directive({ngInclude:of}).directive(vb).directive(dd);a.provider({$anchorScroll:pf,
$animate:qf,$animateCss:rf,$$animateJs:sf,$$animateQueue:tf,$$AnimateRunner:uf,$$animateAsyncRun:vf,$browser:wf,$cacheFactory:xf,
$controller:yf,$document:zf,$$isDocumentHidden:Af,$exceptionHandler:Bf,$filter:ed,$$forceReflow:Cf,$interpolate:Df,$interval:Ef,$http:Ff,
$httpParamSerializer:Gf,$httpParamSerializerJQLike:Hf,$httpBackend:If,$xhrFactory:Jf,$jsonpCallbacks:Kf,$location:Lf,$log:Mf,$parse:Nf,
$rootScope:Of,$q:Pf,$$q:Qf,$sce:Rf,$sceDelegate:Sf,$sniffer:Tf,$templateCache:Uf,$templateRequest:Vf,$$testability:Wf,$timeout:Xf,
$window:Yf,$$rAF:Zf,$$jqLite:$f,$$Map:ag,$$cookieReader:bg})}]).info({angularVersion:"1.6.9"})}function wb(a,b){return b.toUpperCase();
}function xb(a){return a.replace(cg,wb)}function jc(a){a=a.nodeType;return 1===a||!a||9===a}function fd(a,b){var d,c,e=b.createDocumentFragment(),f=[];
if(kc.test(a)){d=e.appendChild(b.createElement("div"));c=(dg.exec(a)||["",""])[1].toLowerCase();c=aa[c]||aa._default;d.innerHTML=c[1]+a.replace(eg,"<$1></$2>")+c[2];
for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";
e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function V(a){if(a instanceof V)return a;var b;E(a)&&(a=Q(a),b=!0);if(!(this instanceof V)){
if(b&&"<"!==a.charAt(0))throw lc("nosel");return new V(a)}if(b){b=w.document;var d;a=(d=fg.exec(a))?[b.createElement(d[1])]:(d=fd(a,b))?d.childNodes:[];
mc(this,a)}else C(a)?gd(a):mc(this,a)}function nc(a){return a.cloneNode(!0)}function yb(a,b){!b&&jc(a)&&z.cleanData([a]);a.querySelectorAll&&z.cleanData(a.querySelectorAll("*"));
}function hd(a,b,d,c){if(u(c))throw lc("offargs");var e=(c=zb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];
u(d)&&cb(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])});
}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b]}function oc(a,b){var d=a.ng339,c=d&&ib[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),
hd(a)),delete ib[d],a.ng339=void 0))}function zb(a,b){var d=a.ng339,d=d&&ib[d];b&&!d&&(a.ng339=d=++gg,d=ib[d]={events:{},data:{},
handle:void 0});return d}function pc(a,b,d){if(jc(a)){var c,e=u(d),f=!e&&b&&!B(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{
if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1;
}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){
a=Q(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",Q(c))}}function Db(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;
r(b.split(" "),function(a){a=Q(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",Q(c))}}function mc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{
var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function id(a,b){
return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=z.data(a,b[c])))return d;
a=a.parentNode||11===a.nodeType&&a.host}}function jd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);
var d=a.parentNode;d&&d.removeChild(a)}function hg(a,b){b=b||w;if("complete"===b.document.readyState)b.setTimeout(a);else z(b).on("load",a);
}function gd(a){function b(){w.document.removeEventListener("DOMContentLoaded",b);w.removeEventListener("load",b);a()}"complete"===w.document.readyState?w.setTimeout(a):(w.document.addEventListener("DOMContentLoaded",b),
w.addEventListener("load",b))}function kd(a,b){var d=Gb[b.toLowerCase()];return d&&ld[ya(a)]&&d}function ig(a,b){var d=function(c,d){
c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){
var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();
h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||jg;
1<g&&(f=ka(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function jg(a,b,d){d.call(a,b);
}function kg(a,b,d){var c=b.relatedTarget;c&&(c===a||lg.call(a,c))||d.call(a,b)}function $f(){this.$get=function(){return O(V,{hasClass:function(a,b){
a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);
return Cb(a,b)}})}}function Pa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||pe)():d+":"+a;
}function md(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function nd(a){a=Function.prototype.toString.call(a).replace(mg,"");
return a.match(ng)||a.match(og)}function pg(a){return(a=nd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function gb(a,b){
function d(a){return function(b,c){if(B(b))r(b,Xb(a));else return a(b,c)}}function c(a,b){Ia(a,"service");if(C(b)||I(b))b=n.instantiate(b);
if(!b.$get)throw Ba("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(x(c))throw Ba("undef",a);
return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){hb(x(a)||I(a),"modulesToLoad","not an array");var b=[],c;
r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],g=n.get(e[0]);g[e[1]].apply(g,e[2])}}if(!m.get(a)){m.set(a,!0);
try{E(a)?(c=ic(a),v.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):C(a)?b.push(n.invoke(a)):I(a)?b.push(n.invoke(a)):sb(a,"module");
}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);
}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b];
}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(g){throw a[b]===k&&delete a[b],g}finally{l.shift()}}function e(a,c,g){var f=[];
a=gb.$$annotate(a,b,g);for(var k=0,h=a.length;k<h;k++){var l=a[k];if("string"!==typeof l)throw Ba("itkn",l);f.push(c&&c.hasOwnProperty(l)?c[l]:d(l,g));
}return f}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);I(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{
var g=d.$$ngIsClass;Na(g)||(g=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=g}return d?(c.unshift(null),
new(Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=I(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);
return new(Function.prototype.bind.apply(d,a))},get:d,annotate:gb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b);
}}}b=!0===b;var k={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){
return a.instantiate(b)}])}),value:d(function(a,b){return f(a,la(b),!1)}),constant:d(function(a,b){Ia(a,"constant");p[a]=b;F[a]=b;
}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=v.invoke(d,c);return v.invoke(b,null,{$delegate:a
})}}}},n=p.$injector=h(p,function(a,b){$.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "))}),F={},s=h(F,function(a,b){var c=n.get(a+"Provider",b);
return v.invoke(c.$get,c,void 0,a)}),v=s;p.$injectorProvider={$get:la(s)};v.modules=n.modules=S();var y=g(a),v=s.get("$injector");
v.strictDi=b;r(y,function(a){a&&v.invoke(a)});v.loadNewModules=function(a){r(g(a),function(a){a&&v.invoke(a)})};return v}function pf(){
var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;
Array.prototype.some.call(a,function(a){if("a"===ya(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;
C(c)?c=c():Zb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(a=a.getBoundingClientRect().top,
b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:Y(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null);
}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||hg(function(){c.$evalAsync(g)})});return g;
}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function qg(a){
E(a)&&(a=a.split(" "));var b=S();r(a,function(a){a.length&&(b[a]=!0)});return b}function Ka(a){return B(a)?a:{}}function rg(a,b,d,c){
function e(a){try{a.apply(null,xa.call(arguments,1))}finally{if(s--,0===s)for(;v.length;)try{v.pop()()}catch(b){d.error(b)}}}function f(){
A=null;h()}function g(){y=H();y=x(y)?null:y;sa(y,J)&&(y=J);t=J=y}function h(){var a=t;g();if(Aa!==k.url()||a!==y)Aa=k.url(),t=y,r(G,function(a){
a(k.url(),y)})}var k=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,F={};k.isMock=!1;var s=0,v=[];k.$$completeOutstandingRequest=e;
k.$$incOutstandingRequestCount=function(){s++};k.notifyWhenNoOutstandingRequests=function(a){0===s?a():v.push(a)};var y,t,Aa=l.href,hc=b.find("base"),A=null,H=c.history?function(){
try{return m.state}catch(a){}}:D;g();k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);
if(b){var f=t===e;if(Aa===b&&(!c.history||f))return k;var h=Aa&&La(Aa)===La(b);Aa=b;t=e;!c.history||h&&f?(h||(A=b),d?l.replace(b):h?(d=l,
e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(A=b)):(m[d?"replaceState":"pushState"](e,"",b),g());A&&(A=b);
return k}return A||l.href.replace(/%27/g,"'")};k.state=function(){return y};var G=[],ba=!1,J=null;k.onUrlChange=function(b){if(!ba){
if(c.history)z(a).on("popstate",f);z(a).on("hashchange",f);ba=!0}G.push(b);return b};k.$$applicationDestroyed=function(){z(a).off("hashchange popstate",f);
};k.$$checkUrlChange=h;k.baseHref=function(){var a=hc.attr("href");return a?a.replace(/^(https?:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){
var c;s++;c=p(function(){delete F[c];e(a)},b||0);F[c]=!0;return c};k.defer.cancel=function(a){return F[a]?(delete F[a],n(a),e(D),
!0):!1}}function wf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new rg(a,c,b,d)}]}function xf(){
this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),
b&&(b.n=a))}if(a in b)throw K("$cacheFactory")("iid",a);var g=0,h=O({},c,{id:a}),k=S(),l=c&&c.capacity||Number.MAX_VALUE,m=S(),p=null,n=null;
return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(n.key);
return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){
var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=S();
g=0;m=S();p=n=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return O({},h,{size:g})}}}var b={};a.info=function(){
var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Uf(){this.$get=["$cacheFactory",function(a){
return a("templates")}]}function Yc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=S();r(a,function(a,g){
if(a in p)e[g]=p[a];else{var f=a.match(d);if(!f)throw ca("iscp",b,g,a,c?"controller bindings definition":"isolate scope definition");
e[g]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||g};f[4]&&(p[a]=e[g])}});return e}function c(a){var b=a.charAt(0);
if(!b||b!==L(b))throw ca("baddir",a);if(a!==a.trim())throw ca("baddir",a)}function e(a){var b=a.require||a.controller&&a.name;!I(b)&&B(b)&&r(b,function(a,c){
var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=te("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=S();
this.directive=function hc(b,d){hb(b,"name");Ia(b,"directive");E(b)?(c(b),hb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],
a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(g,f){try{var h=a.invoke(g);C(h)?h={
compile:la(h)}:!h.compile&&h.link&&(h.compile=la(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;
if(l&&(!E(l)||!/[EACM]/.test(l)))throw ca("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=g.$$moduleName;d.push(h)}catch(m){
c(m)}});return d}])),f[b].push(d)):r(b,Xb(hc));return this};this.component=function A(a,b){function c(a){function e(b){return C(b)||I(b)?function(c,d){
return a.invoke(b,this,{$element:c,$attrs:d})}:b}var g=b.template||b.templateUrl?b.template:"",f={controller:d,controllerAs:sg(b.controller)||b.controllerAs||"$ctrl",
template:e(g),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require
};r(b,function(a,b){"$"===b.charAt(0)&&(f[b]=a)});return f}if(!E(a))return r(a,Xb(Ra(this,A))),this;var d=b.controller||function(){};
r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,C(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){
return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),
this):b.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return u(a)?(n=a,this):n};var F=!1;this.preAssignBindingsEnabled=function(a){
return u(a)?(F=a,this):F};var s=!1;this.strictComponentBindingsEnabled=function(a){return u(a)?(s=a,this):s};var v=10;this.onChangesTtl=function(a){
return arguments.length?(v=a,this):v};var y=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(y=a,this):y};var t=!0;
this.cssClassDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,p,R,M,T,P,q){
function N(){try{if(!--Fa)throw ha=void 0,ca("infchng",v);M.$apply(function(){for(var a=[],b=0,c=ha.length;b<c;++b)try{ha[b]()}catch(d){
a.push(d)}ha=void 0;if(a.length)throw a})}finally{Fa++}}function qc(a,b){if(b){var c=Object.keys(b),d,e,g;d=0;for(e=c.length;d<e;d++)g=c[d],
this[g]=b[g]}else this.$attr={};this.$$element=a}function Ta(a,b,c){Ba.innerHTML="<span "+b+">";b=Ba.firstChild.attributes;var d=b[0];
b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function na(a,b){try{a.addClass(b)}catch(c){}}function da(a,b,c,d,e){
a instanceof z||(a=z(a));var g=Ua(a,b,a,c,d,e);da.$$addScopeClass(a);var f=null;return function(b,c,d){if(!a)throw ca("multilink");
hb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;
h&&h.$$boundTransclude&&(h=h.$$boundTransclude);f||(f=(d=d&&d[0])?"foreignobject"!==ya(d)&&ia.call(d).match(/SVG/)?"svg":"html":"html");
d="html"!==f?z(ka(f,z("<div>").append(a).html())):c?Sa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);
da.$$addScopeInfo(d,b);c&&c(d,b);g&&g(b,d,d,h);c||(a=g=null);return d}}function Ua(a,b,c,d,e,g){function f(a,c,d,e){var g,k,l,m,p,n,G;
if(t)for(G=Array(c.length),m=0;m<h.length;m+=3)g=h[m],G[g]=c[g];else G=c;m=0;for(p=h.length;m<p;)k=G[h[m++]],c=h[m++],g=h[m++],c?(c.scope?(l=a.$new(),
da.$$addScopeInfo(z(k),l)):l=a,n=c.transcludeOnThisElement?Ma(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?Ma(a,b):null,
c(g,l,k,d,n)):g&&g(a,k.childNodes,void 0,e)}for(var h=[],k=I(a)||a instanceof z,l,m,p,n,t,G=0;G<a.length;G++){l=new qc;11===Ca&&Da(a,G,k);
m=K(a[G],[],l,0===G?d:void 0,e);(g=m.length?Y(m,a[G],l,b,c,null,[],[],g):null)&&g.scope&&da.$$addScopeClass(l.$$element);l=g&&g.terminal||!(p=a[G].childNodes)||!p.length?null:Ua(p,g?(g.transcludeOnThisElement||!g.templateOnThisElement)&&g.transclude:b);
if(g||l)h.push(G,g,l),n=!0,t=t||g;g=null}return n?f:null}function Da(a,b,c){var d=a[b],e=d.parentNode,g;if(d.nodeType===Oa)for(;;){
g=e?d.nextSibling:a[b+1];if(!g||g.nodeType!==Oa)break;d.nodeValue+=g.nodeValue;g.parentNode&&g.parentNode.removeChild(g);c&&g===a[b+1]&&a.splice(b+1,1);
}}function Ma(a,b,c){function d(e,g,f,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,g,{parentBoundTranscludeFn:c,transcludeControllers:f,
futureParentElement:h})}var e=d.$$slots=S(),g;for(g in b.$$slots)e[g]=b.$$slots[g]?Ma(a,b.$$slots[g],c):null;return d}function K(a,b,c,d,e){
var g=c.$attr,f;switch(a.nodeType){case 1:f=ya(a);U(b,Ea(f),"E",d,e);for(var k,l,m,p,n=a.attributes,t=0,G=n&&n.length;t<G;t++){var H=!1,F=!1;
k=n[t];l=k.name;m=k.value;k=Ea(l);(p=Pa.test(k))&&(l=l.replace(od,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase();
}));(k=k.match(Qa))&&$(k[1])&&(H=l,F=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ea(l.toLowerCase());g[k]=l;if(p||!c.hasOwnProperty(k))c[k]=m,
kd(a,k)&&(c[k]=!0);wa(a,b,m,k,p);U(b,k,"A",d,e,H,F)}"input"===f&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");
if(!La)break;g=a.className;B(g)&&(g=g.animVal);if(E(g)&&""!==g)for(;a=h.exec(g);)k=Ea(a[2]),U(b,k,"C",d,e)&&(c[k]=Q(a[3])),g=g.substr(a.index+a[0].length);
break;case Oa:oa(b,a.nodeValue);break;case 8:if(!Ka)break;rc(a,b,c,d,e)}b.sort(la);return b}function rc(a,b,c,d,e){try{var f=g.exec(a.nodeValue);
if(f){var h=Ea(f[1]);U(b,h,"M",d,e)&&(c[h]=Q(f[2]))}}catch(k){}}function pd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){
do{if(!a)throw ca("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e);
}else d.push(a);return z(d)}function V(a,b,c){return function(d,e,g,f,h){e=pd(e[0],b,c);return a(d,e,g,f,h)}}function W(a,b,c,d,e,g){
var f;return a?da(b,c,d,e,g):function(){f||(f=da(b,c,d,e,g),b=c=g=null);return f.apply(this,arguments)}}function Y(a,b,d,e,g,f,h,k,l){
function m(a,b,c,d){if(a){c&&(a=V(a,c,d));a.require=s.require;a.directiveName=R;if(J===s||s.$$isolateScope)a=ta(a,{isolateScope:!0
});h.push(a)}if(b){c&&(b=V(b,c,d));b.require=s.require;b.directiveName=R;if(J===s||s.$$isolateScope)b=ta(b,{isolateScope:!0});k.push(b);
}}function p(a,e,g,f,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);T&&(e=M);c||(c=T?ga.parent():ga);if(d){var g=l.$$slots[d];
if(g)return g(a,b,e,c,N);if(x(g))throw ca("noslot",d,za(ga))}else return l(a,b,e,c,N)}var n,s,v,y,ba,M,R,ga;b===g?(f=d,ga=d.$$element):(ga=z(g),
f=new qc(ga,d));ba=e;J?y=e.$new(!0):t&&(ba=e.$parent);l&&(R=m,R.$$boundTransclude=l,R.isSlotFilled=function(a){return!!l.$$slots[a];
});H&&(M=ea(ga,f,R,H,y,e,J));J&&(da.$$addScopeInfo(ga,y,!0,!(A&&(A===J||A===J.$$originalDirective))),da.$$addScopeClass(ga,!0),y.$$isolateBindings=J.$$isolateBindings,
s=qa(e,f,y,y.$$isolateBindings,J),s.removeWatches&&y.$on("$destroy",s.removeWatches));for(n in M){s=H[n];v=M[n];var P=s.$$bindings.bindToController;
if(F){v.bindingInfo=P?qa(ba,f,v.instance,P,s):{};var q=v();q!==v.instance&&(v.instance=q,ga.data("$"+s.name+"Controller",q),v.bindingInfo.removeWatches&&v.bindingInfo.removeWatches(),
v.bindingInfo=qa(ba,f,v.instance,P,s))}else v.instance=v(),ga.data("$"+s.name+"Controller",v.instance),v.bindingInfo=qa(ba,f,v.instance,P,s);
}r(H,function(a,b){var c=a.require;a.bindToController&&!I(c)&&B(c)&&O(M[b].instance,X(b,c,ga,M))});r(M,function(a){var b=a.instance;
if(C(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(C(b.$onInit))try{b.$onInit()}catch(e){c(e)}C(b.$doCheck)&&(ba.$watch(function(){
b.$doCheck()}),b.$doCheck());C(b.$onDestroy)&&ba.$on("$destroy",function(){b.$onDestroy()})});n=0;for(s=h.length;n<s;n++)v=h[n],va(v,v.isolateScope?y:e,ga,f,v.require&&X(v.directiveName,v.require,ga,M),R);
var N=e;J&&(J.template||null===J.templateUrl)&&(N=y);a&&a(N,g.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)v=k[n],va(v,v.isolateScope?y:e,ga,f,v.require&&X(v.directiveName,v.require,ga,M),R);
r(M,function(a){a=a.instance;C(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,H=l.controllerDirectives,J=l.newIsolateScopeDirective,A=l.templateDirective,y=l.nonTlbTranscludeDirective,ba=!1,M=!1,T=l.hasElementTranscludeDirective,v=d.$$element=z(b),s,R,P,q=e,N,u=!1,Ib=!1,w,Da=0,D=a.length;Da<D;Da++){
s=a[Da];var Ta=s.$$start,E=s.$$end;Ta&&(v=pd(b,Ta,E));P=void 0;if(n>s.priority)break;if(w=s.scope)s.templateUrl||(B(w)?(aa("new/isolated scope",J||t,s,v),
J=s):aa("new/isolated scope",J,s,v)),t=t||s;R=s.name;if(!u&&(s.replace&&(s.templateUrl||s.template)||s.transclude&&!s.$$tlb)){for(w=Da+1;u=a[w++];)if(u.transclude&&!u.$$tlb||u.replace&&(u.templateUrl||u.template)){
Ib=!0;break}u=!0}!s.templateUrl&&s.controller&&(H=H||S(),aa("'"+R+"' controller",H[R],s,v),H[R]=s);if(w=s.transclude)if(ba=!0,s.$$tlb||(aa("transclusion",y,s,v),
y=s),"element"===w)T=!0,n=s.priority,P=v,v=d.$$element=z(da.$$createComment(R,d[R])),b=v[0],ma(g,xa.call(P,0),b),P[0].$$parentNode=P[0].parentNode,
q=W(Ib,P,e,n,f&&f.name,{nonTlbTranscludeDirective:y});else{var na=S();if(B(w)){P=[];var Ua=S(),Ma=S();r(w,function(a,b){var c="?"===a.charAt(0);
a=c?a.substring(1):a;Ua[a]=b;na[b]=null;Ma[b]=c});r(v.contents(),function(a){var b=Ua[Ea(ya(a))];b?(Ma[b]=!0,na[b]=na[b]||[],na[b].push(a)):P.push(a);
});r(Ma,function(a,b){if(!a)throw ca("reqslot",b)});for(var L in na)na[L]&&(na[L]=W(Ib,na[L],e))}else P=z(nc(b)).contents();v.empty();
q=W(Ib,P,e,void 0,void 0,{needsNewScope:s.$$isolateScope||s.$$newScope});q.$$slots=na}if(s.template)if(M=!0,aa("template",A,s,v),
A=s,w=C(s.template)?s.template(v,d):s.template,w=Ia(w),s.replace){f=s;P=kc.test(w)?qd(ka(s.templateNamespace,Q(w))):[];b=P[0];if(1!==P.length||1!==b.nodeType)throw ca("tplrt",R,"");
ma(g,v,b);D={$attr:{}};w=K(b,[],D);var rc=a.splice(Da+1,a.length-(Da+1));(J||t)&&Z(w,J,t);a=a.concat(w).concat(rc);fa(d,D);D=a.length;
}else v.html(w);if(s.templateUrl)M=!0,aa("template",A,s,v),A=s,s.replace&&(f=s),p=ja(a.splice(Da,a.length-Da),v,d,g,ba&&q,h,k,{controllerDirectives:H,
newScopeDirective:t!==s&&t,newIsolateScopeDirective:J,templateDirective:A,nonTlbTranscludeDirective:y}),D=a.length;else if(s.compile)try{
N=s.compile(v,d,q);var U=s.$$originalDirective||s;C(N)?m(null,Ra(U,N),Ta,E):N&&m(Ra(U,N.pre),Ra(U,N.post),Ta,E)}catch($){c($,za(v));
}s.terminal&&(p.terminal=!0,n=Math.max(n,s.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=ba;p.templateOnThisElement=M;
p.transclude=q;l.hasElementTranscludeDirective=T;return p}function X(a,b,c,d){var e;if(E(b)){var g=b.match(l);b=b.substring(g[0].length);
var f=g[1]||g[3],g="?"===g[2];"^^"===f?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=f?c.inheritedData(h):c.data(h);
}if(!e&&!g)throw ca("ctreq",b,a)}else if(I(b))for(e=[],f=0,g=b.length;f<g;f++)e[f]=X(a,b[f],c,d);else B(b)&&(e={},r(b,function(b,g){
e[g]=X(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,g,f){var h=S(),k;for(k in d){var l=d[k],m={$scope:l===f||l.$$isolateScope?e:g,
$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=R(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance);
}return h}function Z(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=$b(a[d],{$$isolateScope:b,$$newScope:c})}function U(b,c,e,g,h,k,l){
if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){
k&&(c=$b(c,{$$start:k,$$end:l}));if(!c.$$bindings){var t=m=c,G=c.name,H={isolateScope:null,bindToController:null};B(t.scope)&&(!0===t.bindToController?(H.bindToController=d(t.scope,G,!0),
H.isolateScope={}):H.isolateScope=d(t.scope,G,!1));B(t.bindToController)&&(H.bindToController=d(t.bindToController,G,!0));if(H.bindToController&&!t.controller)throw ca("noctrl",G);
m=m.$$bindings=H;B(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function $(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],
b.multiElement)return!0;return!1}function fa(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),
a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))});
}function ja(a,b,d,g,f,h,k,l){var m=[],p,n,t=b[0],H=a.shift(),s=$b(H,{templateUrl:null,transclude:null,replace:null,$$originalDirective:H
}),F=C(H.templateUrl)?H.templateUrl(b,d):H.templateUrl,v=H.templateNamespace;b.empty();e(F).then(function(c){var e,G;c=Ia(c);if(H.replace){
c=kc.test(c)?qd(ka(v,Q(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw ca("tplrt",H.name,F);c={$attr:{}};ma(g,b,e);var J=K(e,[],c);
B(H.scope)&&Z(J,!0);a=J.concat(a);fa(d,c)}else e=t,b.html(c);a.unshift(s);p=Y(a,e,d,f,b,H,h,k,l);r(g,function(a,c){a===e&&(g[c]=b[0]);
});for(n=Ua(b[0].childNodes,f);m.length;){c=m.shift();G=m.shift();var y=m.shift(),A=m.shift(),J=b[0];if(!c.$$destroyed){if(G!==t){
var M=G.className;l.hasElementTranscludeDirective&&H.replace||(J=nc(e));ma(y,z(G),J);na(z(J),M)}G=p.transcludeOnThisElement?Ma(c,p.transclude,A):A;
p(n,c,J,g,G)}}m=null}).catch(function(a){bc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(p.transcludeOnThisElement&&(a=Ma(b,p.transclude,e)),
p(n,b,c,d,a)))}}function la(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function aa(a,b,c,d){
function e(a){return a?" (module: "+a+")":""}if(b)throw ca("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d))}
function oa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a;
})}}})}function ka(a,b){a=L(a||"html");switch(a){case"svg":case"math":var c=w.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";
return c.childNodes[0].childNodes;default:return b}}function ua(a,b){if("srcdoc"===b)return T.HTML;var c=ya(a);if("src"===b||"ngSrc"===b){
if(-1===["img","video","audio","source","track"].indexOf(c))return T.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return T.RESOURCE_URL;
}function wa(a,c,d,e,g){var f=ua(a,e),h=k[e]||g,l=b(d,!g,f,h);if(l){if("multiple"===e&&"select"===ya(a))throw ca("selmulti",za(a));
if(m.test(e))throw ca("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers=S());
var k=g[e];k!==d&&(l=k&&b(k,!0,f,h),d=k);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){
"class"===e&&a!==b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function ma(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,h;if(a)for(f=0,
h=a.length;f<h;f++)if(a[f]===d){a[f++]=c;h=f+e-1;for(var k=a.length;f<k;f++,h++)h<k?a[f]=a[h]:delete a[f];a.length-=e-1;a.context===d&&(a.context=c);
break}g&&g.replaceChild(c,d);a=w.document.createDocumentFragment();for(f=0;f<e;f++)a.appendChild(b[f]);z.hasData(d)&&(z.data(c,z.data(d)),
z(d).off("$destroy"));z.cleanData(a.querySelectorAll("*"));for(f=1;f<e;f++)delete b[f];b[0]=c;b.length=1}function ta(a,b){return O(function(){
return a.apply(null,arguments)},a,b)}function va(a,b,d,e,g,f){try{a(b,d,e,g,f)}catch(h){c(h,za(d))}}function pa(a,b){if(s)throw ca("missingattr",a,b);
}function qa(a,c,d,e,g){function f(b,c,e){C(d.$onChanges)&&!cc(c,e)&&(ha||(a.$$postDigest(N),ha=[]),m||(m={},ha.push(h)),m[b]&&(e=m[b].previousValue),
m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,t,G,s,F;switch(e.mode){
case"@":n||ra.call(c,m)||(pa(m,g.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(E(a)||Na(a))f(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;
t=c[m];E(t)?d[h]=b(t)(a):Na(t)&&(d[h]=t);l[h]=new Jb(sc,d[h]);k.push(n);break;case"=":if(!ra.call(c,m)){if(n)break;pa(m,g.name);c[m]=void 0;
}if(n&&!c[m])break;G=p(c[m]);F=G.literal?sa:cc;s=G.assign||function(){t=d[h]=G(a);throw ca("nonassign",c[m],m,g.name)};t=d[h]=G(a);
n=function(b){F(b,d[h])||(F(b,t)?s(a,b=d[h]):d[h]=b);return t=b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,G.literal);
k.push(n);break;case"<":if(!ra.call(c,m)){if(n)break;pa(m,g.name);c[m]=void 0}if(n&&!c[m])break;G=p(c[m]);var v=G.literal,y=d[h]=G(a);
l[h]=new Jb(sc,d[h]);n=a.$watch(G,function(a,b){if(b===a){if(b===y||v&&sa(b,y))return;b=y}f(h,a,b);d[h]=a},v);k.push(n);break;case"&":
n||ra.call(c,m)||pa(m,g.name);G=c.hasOwnProperty(m)?p(c[m]):D;if(G===D&&n)break;d[h]=function(b){return G(a,b)}}});return{initialChanges:l,
removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ja=/^\w/,Ba=w.document.createElement("div"),Ka=y,La=t,Fa=v,ha;
qc.prototype={$normalize:Ea,$addClass:function(a){a&&0<a.length&&P.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&P.removeClass(this.$$element,a);
},$updateClass:function(a,b){var c=rd(a,b);c&&c.length&&P.addClass(this.$$element,c);(c=rd(b,a))&&c.length&&P.removeClass(this.$$element,c);
},$set:function(a,b,d,e){var g=kd(this.$$element[0],a),f=sd[a],h=a;g?(this.$$element.prop(a,b),e=g):f&&(this[f]=b,h=f);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));
g=ya(this.$$element);if("a"===g&&("href"===a||"xlinkHref"===a)||"img"===g&&"src"===a)this[a]=b=q(b,"src"===a);else if("img"===g&&"srcset"===a&&u(b)){
for(var g="",f=Q(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(f)?k:/(,)/,f=f.split(k),k=Math.floor(f.length/2),l=0;l<k;l++)var m=2*l,g=g+q(Q(f[m]),!0),g=g+(" "+Q(f[m+1]));
f=Q(f[2*l]).split(/\s/);g+=q(Q(f[0]),!0);2===f.length&&(g+=" "+Q(f[1]));this[a]=b=g}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):Ja.test(e)?this.$$element.attr(e,b):Ta(this.$$element[0],e,b));
(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=S()),e=d[a]||(d[a]=[]);
e.push(b);M.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ga=b.startSymbol(),Ha=b.endSymbol(),Ia="{{"===Ga&&"}}"===Ha?ab:function(a){
return a.replace(/\{\{/g,Ga).replace(/}}/g,Ha)},Pa=/^ngAttr[A-Z]/,Qa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];
I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:D;da.$$addBindingClass=n?function(a){na(a,"ng-binding")}:D;da.$$addScopeInfo=n?function(a,b,c,d){
a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:D;da.$$addScopeClass=n?function(a,b){na(a,b?"ng-isolate-scope":"ng-scope");
}:D;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return w.document.createComment(c)};return da;
}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function Ea(a){return a.replace(od,"").replace(tg,function(a,d,c){return c?d.toUpperCase():d;
})}function rd(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g===e[h])continue a;
d+=(0<d.length?" ":"")+g}return d}function qd(a){a=z(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Oa&&""===d.nodeValue.trim())&&ug.call(a,b,1);
}return a}function sg(a,b){if(b&&E(b))return b;if(E(a)){var d=td.exec(a);if(d)return d[3]}}function yf(){var a={},b=!1;this.has=function(b){
return a.hasOwnProperty(b)};this.register=function(b,c){Ia(b,"controller");B(b)?O(a,b):a[b]=c};this.allowGlobals=function(){b=!0};
this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!B(a.$scope))throw K("$controller")("noscp",d,b);a.$scope[b]=c;
}return function(f,g,h,k){var l,m,p;h=!0===h;k&&E(k)&&(p=k);if(E(f)){k=f.match(td);if(!k)throw ud("ctrlfmt",f);m=k[1];p=p||k[3];f=a.hasOwnProperty(m)?a[m]:Xc(g.$scope,m,!0)||(b?Xc(c,m,!0):void 0);
if(!f)throw ud("ctrlreg",m);sb(f,m,!0)}if(h)return h=(I(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),p&&e(g,p,l,m||f.name),
O(function(){var a=d.invoke(f,l,g,m);a!==l&&(B(a)||C(a))&&(l=a,p&&e(g,p,l,m||f.name));return l},{instance:l,identifier:p});l=d.instantiate(f,g,m);
p&&e(g,p,l,m||f.name);return l}}]}function zf(){this.$get=["$window",function(a){return z(a.document)}]}function Af(){this.$get=["$document","$rootScope",function(a,b){
function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d);
});return function(){return e}}]}function Bf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function tc(a){
return B(a)?fa(a)?a.toISOString():eb(a):a}function Gf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Oc(a,function(a,c){
null===a||x(a)||C(a)||(I(a)?r(a,function(a){b.push(ja(c)+"="+ja(tc(a)))}):b.push(ja(c)+"="+ja(tc(a))))});return b.join("&")}}}function Hf(){
this.$get=function(){return function(a){function b(a,e,f){null===a||x(a)||(I(a)?r(a,function(a,c){b(a,e+"["+(B(a)?c:"")+"]")}):B(a)&&!fa(a)?Oc(a,function(a,c){
b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(tc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function uc(a,b){
if(E(a)){var d=a.replace(vg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(vd),e;(e=c)||(e=(e=d.match(wg))&&xg[e[0]].test(d));
if(e)try{a=Rc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f)}}}return a}function wd(a){var b=S(),d;E(a)?r(a.split("\n"),function(a){
d=a.indexOf(":");var e=L(Q(a.substr(0,d)));a=Q(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):B(a)&&r(a,function(a,d){var f=L(d),g=Q(a);
f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function xd(a){var b;return function(d){b||(b=wd(a));return d?(d=b[L(d)],void 0===d&&(d=null),
d):b}}function yd(a,b,d,c){if(C(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Ff(){var a=this.defaults={transformResponse:[uc],
transformRequest:[function(a){return B(a)&&"[object File]"!==ia.call(a)&&"[object Blob]"!==ia.call(a)&&"[object FormData]"!==ia.call(a)?eb(a):a;
}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ka(vc),put:ka(vc),patch:ka(vc)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){
return u(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,e,f,g,h,k,l,m){
function p(b){function d(a,b){for(var c=0,e=b.length;c<e;){var g=b[c++],f=b[c++];a=a.then(g,f)}b.length=0;return a}function e(a,b){
var c,d={};r(a,function(a,e){C(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function g(a){var b=O({},a);b.data=yd(a.data,a.headers,a.status,f.transformResponse);
a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!B(b))throw K("$http")("badreq",b);if(!E(m.valueOf(b.url)))throw K("$http")("badreq",b.url);
var f=O({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,
jsonpCallbackParam:a.jsonpCallbackParam},b);f.headers=function(b){var c=a.headers,d=O({},b.headers),g,f,h,c=O({},c.common,c[L(b.method)]);
a:for(g in c){f=L(g);for(h in d)if(L(h)===f)continue a;d[g]=c[g]}return e(d,ka(b))}(b);f.method=ub(f.method);f.paramSerializer=E(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;
c.$$incOutstandingRequestCount();var h=[],p=[];b=k.resolve(f);r(y,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);
(a.response||a.responseError)&&p.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=b.headers,d=yd(b.data,xd(c),void 0,b.transformRequest);
x(d)&&r(c,function(a,b){"content-type"===L(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);
return n(b,d).then(g,g)});b=d(b,p);return b=b.finally(function(){c.$$completeOutstandingRequest(D)})}function n(c,d){function g(a){
if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e,g){
function f(){n(c,a,d,e,g)}M&&(200<=a&&300>a?M.put(N,[a,c,wd(d),e,g]):M.remove(N));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}
function n(a,b,d,e,g){b=-1<=b?b:0;(200<=b&&300>b?J.resolve:J.reject)({data:a,status:b,headers:xd(d),config:c,statusText:e,xhrStatus:g
})}function G(a){n(a.data,a.status,ka(a.headers()),a.statusText,a.xhrStatus)}function y(){var a=p.pendingRequests.indexOf(c);-1!==a&&p.pendingRequests.splice(a,1);
}var J=k.defer(),R=J.promise,M,T,P=c.headers,q="jsonp"===L(c.method),N=c.url;q?N=m.getTrustedResourceUrl(N):E(N)||(N=m.valueOf(N));
N=F(N,c.paramSerializer(c.params));q&&(N=s(N,c.jsonpCallbackParam));p.pendingRequests.push(c);R.then(y,y);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(M=B(c.cache)?c.cache:B(a.cache)?a.cache:v);
M&&(T=M.get(N),u(T)?T&&C(T.then)?T.then(G,G):I(T)?n(T[1],T[0],ka(T[2]),T[3],T[4]):n(T,200,{},"OK","complete"):M.put(N,R));x(T)&&((T=zd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(P[c.xsrfHeaderName||a.xsrfHeaderName]=T),
e(c.method,N,d,l,P,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return R}function F(a,b){
0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function s(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);
c=ec(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a)});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK";
}var v=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var y=[];r(d,function(a){y.unshift(E(a)?l.get(a):l.invoke(a));
});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(O({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");
(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(O({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");
p.defaults=a;return p}]}function Jf(){this.$get=function(){return function(){return new w.XMLHttpRequest}}}function If(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){
return yg(a,c,a.defer,b,d[0])}]}function yg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;
f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);
f=null;var g=-1,F="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),F=a.type,g="error"===a.type?404:200);d&&d(g,F);
};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,h,k,l,m,p,n,F,s,v){
function y(){q&&q();A&&A.abort()}function t(a,b,c,e,g,f){u(G)&&d.cancel(G);q=A=null;a(b,c,e,g,f)}h=h||a.url();if("jsonp"===L(e))var Aa=c.createCallback(h),q=f(h,Aa,function(a,b){
var d=200===a&&c.getResponse(Aa);t(l,a,d,"",b,"complete");c.removeCallback(Aa)});else{var A=b(e,h);A.open(e,h,!0);r(m,function(a,b){
u(a)&&A.setRequestHeader(b,a)});A.onload=function(){var a=A.statusText||"",b="response"in A?A.response:A.responseText,c=1223===A.status?204:A.status;
0===c&&(c=b?200:"file"===ta(h).protocol?404:0);t(l,c,b,A.getAllResponseHeaders(),a,"complete")};A.onerror=function(){t(l,-1,null,null,"","error");
};A.onabort=function(){t(l,-1,null,null,"","abort")};A.ontimeout=function(){t(l,-1,null,null,"","timeout")};r(s,function(a,b){A.addEventListener(b,a);
});r(v,function(a,b){A.upload.addEventListener(b,a)});n&&(A.withCredentials=!0);if(F)try{A.responseType=F}catch(H){if("json"!==F)throw H;
}A.send(x(k)?null:k)}if(0<p)var G=d(y,p);else p&&C(p.then)&&p.then(y)}}function Df(){var a="{{",b="}}";this.startSymbol=function(b){
return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){
function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();
return d(a)},b,c);return e}function k(f,k,p,n){function t(a){try{var b=a;a=p?e.getTrusted(p,b):e.valueOf(b);return n&&!u(a)?a:gc(a);
}catch(d){c(Fa.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var r;k||(k=g(f),r=la(k),r.exp=f,r.expressions=[],r.$$watchDelegate=h);
return r}n=!!n;var q,A,H=0,G=[],ba=[];r=f.length;for(var J=[],R=[];H<r;)if(-1!==(q=f.indexOf(a,H))&&-1!==(A=f.indexOf(b,q+l)))H!==q&&J.push(g(f.substring(H,q))),
H=f.substring(q+l,A),G.push(H),ba.push(d(H,t)),H=A+m,R.push(J.length),J.push("");else{H!==r&&J.push(g(f.substring(H)));break}p&&1<J.length&&Fa.throwNoconcat(f);
if(!k||G.length){var M=function(a){for(var b=0,c=G.length;b<c;b++){if(n&&x(a[b]))return;J[R[b]]=a[b]}return J.join("")};return O(function(a){
var b=0,d=G.length,e=Array(d);try{for(;b<d;b++)e[b]=ba[b](a);return M(e)}catch(g){c(Fa.interr(f,g))}},{exp:f,expressions:G,$$watchDelegate:function(a,b){
var c;return a.$watchGroup(ba,function(d,e){var g=M(d);b.call(this,g,d!==e?c:g,a);c=g})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");
k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function Ef(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){
function f(f,k,l,m){function p(){n?f.apply(null,F):f(y)}var n=4<arguments.length,F=n?xa.call(arguments,4):[],s=b.setInterval,v=b.clearInterval,y=0,t=u(m)&&!m,r=(t?c:d).defer(),q=r.promise;
l=u(l)?l:0;q.$$intervalId=s(function(){t?e.defer(p):a.$evalAsync(p);r.notify(y++);0<l&&y>=l&&(r.resolve(y),v(q.$$intervalId),delete g[q.$$intervalId]);
t||a.$apply()},k);g[q.$$intervalId]=r;return q}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.$$state.pur=!0,
g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function wc(a){a=a.split("/");
for(var b=a.length;b--;)a[b]=fb(a[b].replace(/%2F/g,"/"));return a.join("/")}function Ad(a,b){var d=ta(a);b.$$protocol=d.protocol;
b.$$host=d.hostname;b.$$port=Z(d.port)||zg[d.protocol]||null}function Bd(a,b,d){if(Ag.test(a))throw kb("badpath",a);var c="/"!==a.charAt(0);
c&&(a="/"+a);a=ta(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),
d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=ec(a.search);b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path);
}function xc(a,b){return a.slice(0,b.length)===b}function ua(a,b){if(xc(b,a))return b.substr(a.length)}function La(a){var b=a.indexOf("#");
return-1===b?a:a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function yc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);
this.$$parse=function(a){var d=ua(b,a);if(!E(d))throw kb("ipthprfx",a,b);Bd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose();
};this.$$compose=function(){var a=fc(this.$$search),d=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=wc(this.$$path)+(a?"?"+a:"")+d;
this.$$absUrl=b+this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;u(f=ua(a,c))?(g=f,g=d&&u(f=ua(d,f))?b+(ua("/",f)||f):a+g):u(f=ua(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g;
}}function zc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=ua(a,c)||ua(b,c),f;x(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",
x(e)&&(a=c,this.replace())):(f=ua(d,e),x(f)&&(f=e));Bd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;xc(f,e)&&(f=f.replace(e,""));
g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=fc(this.$$search),e=this.$$hash?"#"+fb(this.$$hash):"";
this.$$url=wc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){
return La(a)===La(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;zc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){
if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===La(c)?f=c:(g=ua(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f;
};this.$$compose=function(){var b=fc(this.$$search),e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=wc(this.$$path)+(b?"?"+b:"")+e;
this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Lb(a){return function(){return this[a]}}function Dd(a,b){return function(d){
if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Lf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0
};this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){if(Na(a))return b.enabled=a,this;if(B(a)){Na(a.enabled)&&(b.enabled=a.enabled);
Na(a.requireBase)&&(b.requireBase=a.requireBase);if(Na(a.rewriteLinks)||E(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this;
}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),g=l.$$state;
try{c.url(a,b,d),l.$$state=c.state()}catch(f){throw l.url(e),l.$$state=g,f}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b);
}var l,m;m=c.baseHref();var p=c.url(),n;if(b.enabled){if(!m&&b.requireBase)throw kb("nobase");n=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(m||"/");
m=e.history?yc:Cd}else n=La(p),m=zc;var F=n.substr(0,La(n).lastIndexOf("/")+1);l=new m(n,F,"#"+a);l.$$parseLinkUrl(p,p);l.$$state=c.state();
var s=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){
for(var h=z(a.target);"a"!==ya(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!E(e)||!x(h.attr(e))){var e=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");
B(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ta(e.animVal).href);s.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,k)||(a.preventDefault(),
l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});lb(l.absUrl())!==lb(p)&&c.url(l.absUrl(),!0);var v=!0;
c.onUrlChange(function(a,b){xc(a,F)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,g;a=lb(a);l.$$parse(a);l.$$state=b;g=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;
l.absUrl()===a&&(g?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(v=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){
if(v||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=lb(c.url()),b=lb(l.absUrl()),g=c.state(),f=l.$$replace,m=a!==b||l.$$html5&&e.history&&g!==l.$$state;
if(v||m)v=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,g).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),
l.$$state=g):(m&&h(b,f,g===l.$$state?null:l.$$state),k(a,g)))})}l.$$replace=!1});return l}]}function Mf(){var a=!0,b=this;this.debugEnabled=function(b){
return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){bc(a)&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));
return a}function e(a){var b=d.console||{},e=b[a]||b.log||D;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a);
}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Bg(a){return a+""}function Cg(a,b){return"undefined"!==typeof a?a:b;
}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Dg(a,b){switch(a.type){case q.MemberExpression:
if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==a.operator?1:!1;case q.CallExpression:
return!1}return void 0===b?Fd:b}function W(a,b,d){var c,e,f=a.isPure=Dg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){
W(a.expression,b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:
W(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:W(a.left,b,f);W(a.right,b,f);
a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:W(a.left,b,f);
W(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:W(a.test,b,f);
W(a.alternate,b,f);W(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];
break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:W(a.object,b,f);a.computed&&W(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);
a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){
W(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:W(a.left,b,f);
W(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){
W(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){
W(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(W(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,a.key.toWatch));
});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[];
}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===q.Identifier||a.type===q.MemberExpression;
}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{
type:q.NGValueParameter},operator:"="}}function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function Mb(a,b,d){this.ast=new q(a,d);
this.astCompiler=d.csp?new Kd(b):new Jd(b)}function Ac(a){return C(a.valueOf)?a.valueOf():Eg.call(a)}function Nf(){var a=S(),b={true:!0,
false:!1,null:null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this;
};this.$get=["$filter",function(e){function f(b,c){var d,g;switch(typeof b){case"string":return g=b=b.trim(),d=a[g],d||(d=new Nb(n),
d=new Mb(d,e,n).parse(b),d.constant?d.$$watchDelegate=m:d.oneTime?d.$$watchDelegate=d.literal?l:k:d.inputs&&(d.$$watchDelegate=h),
a[g]=d),p(d,c);case"function":return p(b,c);default:return p(D,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Ac(a),
"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function h(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){
var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Ac(b));return h},b,c,e)}for(var l=[],m=[],p=0,n=f.length;p<n;p++)l[p]=g,
m[p]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,
l[c]=k&&Ac(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function k(a,b,c,d,e){function g(a){return d(a)}function f(a,c,d){l=a;C(b)&&b(a,c,d);
u(a)&&d.$$postDigest(function(){u(l)&&k()})}var k,l;return k=d.inputs?h(a,f,c,d,e):a.$watch(g,f,c)}function l(a,b,c,d){function e(a){
var b=!0;r(a,function(a){u(a)||(b=!1)});return b}var g,f;return g=a.$watch(function(a){return d(a)},function(a,c,d){f=a;C(b)&&b(a,c,d);
e(a)&&d.$$postDigest(function(){e(f)&&g()})},c)}function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a,b){
if(!b)return a;var c=a.$$watchDelegate,d=!1,e=c!==l&&c!==k?function(c,e,g,f){g=d&&f?f[0]:a(c,e,g,f);return b(g,c,e)}:function(c,d,e,g){
e=a(c,d,e,g);c=b(e,c,d);return u(e)?c:e},d=!a.inputs;c&&c!==h?(e.$$watchDelegate=c,e.inputs=a.inputs):b.$stateful||(e.$$watchDelegate=h,
e.inputs=a.inputs?a.inputs:[a]);e.inputs&&(e.inputs=e.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a}));return e;
}var n={csp:Ja().noUnsafeEval,literals:pa(b),isIdentifierStart:C(d)&&d,isIdentifierContinue:C(c)&&c};f.$$getAst=function(a){var b=new Nb(n);
return new Mb(b,e,n).getAst(a).ast};return f}]}function Pf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){
b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Qf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){
return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Ld(a,b,d){
function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){
n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!u&&w.length;){var a=w.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):x(c)?"undefined":"string"!==typeof c?De(c,void 0):c);
bc(a.value)?b(a.value,c):b(c)}}}function h(c){!d||c.pending||2!==c.status||c.pur||(0===u&&0===w.length&&a(g),w.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,
++u,a(function(){var e,f,h;h=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,p=h.length;l<p;++l){c.pur=!0;f=h[l][0];
e=h[l][c.status];try{C(e)?k(f,e(c.value)):1===c.status?k(f,c.value):m(f,c.value)}catch(n){m(f,n),n&&!0===n.$$passToExceptionHandler&&b(n);
}}}finally{--u,d&&0===u&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?p(a,t("qcycle",b)):l(a,b))}function l(a,b){function c(b){
g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(B(b)||C(b))f=b.then;C(f)?(a.$$state.status=-1,
f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||p(a,b)}function p(a,b){
a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){
for(var a,c,g=0,f=e.length;g<f;g++){c=e[g][0];a=e[g][3];try{n(c,C(a)?a(d):d)}catch(h){b(h)}}})}function F(a){var b=new f;m(b,a);return b;
}function s(a,b,c){var d=null;try{C(c)&&(d=c())}catch(e){return F(e)}return d&&C(d.then)?d.then(function(){return b(a)},F):b(a)}function v(a,b,c,d){
var e=new f;k(e,a);return e.then(b,c,d)}function q(a){if(!C(a))throw t("norslvr",a);var b=new f;a(function(a){k(b,a)},function(a){
m(b,a)});return b}var t=K("$q",TypeError),u=0,w=[];O(f.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new f;
this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d;
},catch:function(a){return this.then(null,a)},finally:function(a,b){return this.then(function(b){return s(b,A,a)},function(b){return s(b,F,a);
},b)}});var A=v;q.prototype=f.prototype;q.defer=c;q.reject=F;q.when=v;q.resolve=A;q.all=function(a){var b=new f,c=0,d=I(a)?[]:{};r(a,function(a,e){
c++;v(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};q.race=function(a){var b=c();r(a,function(a){
v(a).then(b.resolve,b.reject)});return b.promise};return q}function Zf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){
var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Of(){
function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};
this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=K("$rootScope"),c=null,e=null;this.digestTtl=function(a){
arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0;
}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null;
}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;
this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null;
}function p(a){if(t.$$phase)throw d("inprog",t.$$phase);t.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function F(a,b,c){
do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function v(){for(;A.length;)try{
A.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=h.defer(function(){t.$apply(v)}))}m.prototype={constructor:m,$new:function(b,c){
var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;
d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);
return d},$watch:function(a,b,d,e){var f=g(a);b=C(b)?b:D;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={
fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);
return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){
function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;
g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;
b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){
for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(B(e))if(wa(e))for(f!==p&&(f=p,
t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==n&&(f=n={},
t=0,l++);a=0;for(b in e)ra.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,
f)ra.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),p=[],n={},s=!0,t=0;
return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(B(e))if(wa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a];
}else for(a in h={},e)ra.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,n,r,F=b,q,A=[],y,x;p("$digest");h.$$checkUrlChange();
this===t&&null!==e&&(h.defer.cancel(e),v());c=null;do{r=!1;q=this;for(n=0;n<u.length;n++){try{x=u[n],l=x.fn,l(x.scope,x.locals)}catch(z){
f(z)}c=null}u.length=0;a:do{if(n=q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,
(g=m(q))!==(k=a.last)&&!(a.eq?sa(g,k):U(g)&&U(k)))r=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,k===s?g:k,q),5>F&&(y=4-F,A[y]||(A[y]=[]),
A[y].push({msg:C(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(D){f(D);
}if(!(n=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((r||u.length)&&!F--)throw t.$$phase=null,
d("infdig",b,A)}while(r||u.length);for(t.$$phase=null;H<w.length;)try{w[H++]()}catch(B){f(B)}w.length=H=0;h.$$checkUrlChange()},$destroy:function(){
if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===t&&h.$$applicationDestroyed();n(this,-this.$$watchersCount);
for(var b in this.$$listenerCount)F(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);
this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=D;this.$on=this.$watch=this.$watchGroup=function(){return D;
};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){t.$$phase||u.length||h.defer(function(){
u.length&&t.$digest()});u.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){w.push(a)},$apply:function(a){try{p("$apply");
try{return this.$eval(a)}finally{t.$$phase=null}}catch(b){f(b)}finally{try{t.$digest()}catch(c){throw f(c),c}}},$applyAsync:function(a){
function b(){c.$eval(a)}var c=this;a&&A.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);
c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){
var d=c.indexOf(b);-1!==d&&(delete c[d],F(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){
g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;
l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);
h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0;
},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];
h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent;
}e.currentScope=null;return e}};var t=new m,u=t.$$asyncQueue=[],w=t.$$postDigestQueue=[],A=t.$$applyAsyncQueue=[],H=0;return t}]}
function Ge(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){
return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.$get=function(){return function(d,c){
var e=c?b:a,f;f=ta(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Fg(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw va("iwcard",a);
a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if($a(a))return new RegExp("^"+a.source+"$");
throw va("imatcher")}function Nd(a){var b=[];u(a)&&r(a,function(a){b.push(Fg(a))});return b}function Sf(){this.SCE_CONTEXTS=oa;var a=["self"],b=[];
this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));
return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?zd(b):!!a.exec(b.href)}function e(a){var b=function(a){
this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue();
};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw va("unsafe")};d.has("$sanitize")&&(f=d.get("$sanitize"));
var g=e(),h={};h[oa.HTML]=e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){
var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw va("icontext",a,b);if(null===b||x(b)||""===b)return b;if("string"!==typeof b)throw va("itype",a);
return new c(b)},getTrusted:function(d,e){if(null===e||x(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();
if(d===oa.RESOURCE_URL){var g=ta(e.toString()),p,n,r=!1;p=0;for(n=a.length;p<n;p++)if(c(a[p],g)){r=!0;break}if(r)for(p=0,n=b.length;p<n;p++)if(c(b[p],g)){
r=!1;break}if(r)return e;throw va("insecurl",e.toString())}if(d===oa.HTML)return f(e);throw va("unsafe")},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a;
}}}]}function Rf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){
if(a&&8>Ca)throw va("iequirks");var c=ka(oa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;
a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=ab);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){
return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(oa,function(a,b){var d=L(b);c[("parse_as_"+d).replace(Bc,wb)]=function(b){
return e(a,b)};c[("get_trusted_"+d).replace(Bc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Bc,wb)]=function(b){return g(a,b);
}});return c}]}function Tf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(L((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;
h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>e||f),hasEvent:function(a){
if("input"===a&&Ca)return!1;if(x(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ja(),transitions:k,animations:l,
android:e}}]}function Vf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){
function g(h,k){g.totalPendingRequests++;if(!E(h)||x(d.get(h)))h=f.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;
I(l)?l=l.filter(function(a){return a!==uc}):l===uc&&(l=null);return c.get(h,O({cache:d,transformResponse:l},a)).finally(function(){
g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=Gg("tpload",h,a.status,a.statusText),
b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function Wf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){
return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=$.element(a).data("$binding");
c&&r(c,function(c){d?new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)").test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){
for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k;
}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a);
}}}]}function Xf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){C(f)||(l=k,
k=f,f=D);var m=xa.call(arguments,3),p=u(l)&&!l,n=(p?c:d).defer(),r=n.promise,s;s=b.defer(function(){try{n.resolve(f.apply(null,m));
}catch(b){n.reject(b),e(b)}finally{delete g[r.$$timeoutId]}p||a.$apply()},k);r.$$timeoutId=s;g[s]=n;return r}var g={};f.cancel=function(a){
return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.$$state.pur=!0,g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],
b.defer.cancel(a.$$timeoutId)):!1};return f}]}function ta(a){Ca&&(X.setAttribute("href",a),a=X.href);X.setAttribute("href",a);return{
href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",
hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function zd(a){a=E(a)?ta(a):a;return a.protocol===Od.protocol&&a.host===Od.host;
}function Yf(){this.$get=la(w)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";
return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],
k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function bg(){this.$get=Pd}function ed(a){
function b(d,c){if(B(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){
return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Hg);b("json",Ig);b("limitTo",Jg);b("lowercase",Kg);
b("number",Sd);b("orderBy",Td);b("uppercase",Lg)}function Hg(){return function(a,b,d,c){if(!wa(a)){if(null==a)return a;throw K("filter")("notarray",a);
}c=c||"$";var e;switch(Cc(b)){case"function":break;case"boolean":case"null":case"number":case"string":e=!0;case"object":b=Mg(b,d,c,e);
break;default:return a}return Array.prototype.filter.call(a,b)}}function Mg(a,b,d,c){var e=B(a)&&d in a;!0===b?b=sa:C(b)||(b=function(a,b){
if(x(a))return!1;if(null===a||null===b)return a===b;if(B(b)||B(a)&&!ac(a))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(f){
return e&&!B(f)?ha(f,a[d],b,d,!1):ha(f,a,b,d,c)}}function ha(a,b,d,c,e,f){var g=Cc(a),h=Cc(b);if("string"===h&&"!"===b.charAt(0))return!ha(a,b.substring(1),d,c,e);
if(I(a))return a.some(function(a){return ha(a,b,d,c,e)});switch(g){case"object":var k;if(e){for(k in a)if(k.charAt&&"$"!==k.charAt(0)&&ha(a[k],b,d,c,!0))return!0;
return f?!1:ha(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!C(f)&&!x(f)&&(g=k===c,!ha(g?a:a[k],f,d,c,g,g)))return!1;return!0;
}return d(a,b);case"function":return!1;default:return d(a,b)}}function Cc(a){return null===a?"null":typeof a}function Qd(a){var b=a.NUMBER_FORMATS;
return function(a,c,e){x(c)&&(c=b.CURRENCY_SYM);x(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c);
}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Ng(a){
var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);
for(e=0;a.charAt(e)===Dc;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Dc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e);
}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Og(a,b,d,c){var e=a.d,f=e.length-a.i;b=x(b)?Math.min(Math.max(d,f),c):+b;
d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),
e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);
if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!E(a)&&!Y(a)||isNaN(a))return"";
var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="∞";else{g=Ng(h);Og(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){
return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));
k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf;
}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Dc+a;d&&(a=a.substr(a.length-b));return e+a;
}function ea(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function mb(a,b,d){
return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=new Date(a,0,1).getDay();
return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;
b=1+Math.round(b/6048e5);return Ob(b,a)}}function Ec(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){
var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),
g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1e3*parseFloat("0."+(b[7]||0)));
k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=Pg.test(c)?Z(c):b(c));Y(c)&&(c=new Date(c));
if(!fa(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Qg.exec(d))?(h=db(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();
f&&(m=Sc(f,m),c=dc(c,f,!0));r(h,function(b){k=Rg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'");
});return g}}function Ig(){return function(a,b){x(b)&&(b=2);return eb(a,b)}}function Jg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);
if(U(b))return a;Y(a)&&(a=a.toString());if(!wa(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Fc(a,d,d+b):0===d?Fc(a,b,a.length):Fc(a,Math.max(0,d+b),d);
}}function Fc(a,b,d){return E(a)?a.slice(b,d):xa.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=ab;if(C(b))d=b;else if(E(b)){
if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){
return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case"number":case"boolean":case"string":return!0;default:
return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(B(k)&&(k=a.index),
B(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!wa(a))throw K("orderBy")("notarray",a);
I(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=C(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{
value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{
if(C(e.valueOf)&&(e=e.valueOf(),d(e)))break a;ac(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){
for(var d=0,e=k.length;d<e;d++){var g=m(a.predicateValues[d],b.predicateValues[d]);if(g)return g*k[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l;
});return a=a.map(function(a){return a.value})}}function Qa(a){C(a)&&(a={link:a});a.restrict=a.restrict||"AC";return la(a)}function Pb(a,b,d,c,e){
this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;
this.$submitted=this.$invalid=!1;this.$$parentForm=Qb;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache={};
a.$$classCache[$d]=!(a.$$classCache[nb]=a.$$element.hasClass(nb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),
a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";
b(a,nb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){x(g)?(this.$pending||(this.$pending={}),
c(this.$pending,a,h)):(this.$pending&&e(this.$pending,a,h),be(this.$pending)&&(this.$pending=void 0));Na(g)?g?(e(this.$error,a,h),
c(this.$$success,a,h)):(c(this.$error,a,h),e(this.$$success,a,h)):(e(this.$error,a,h),e(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),
this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,
d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this);
}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Gc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString();
})}function Va(a,b,d,c,e,f){var g=L(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){
h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=Q(e));
(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){
k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value);
});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){
if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});
c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Rb(a,b){return function(d,c){
var e,f;if(fa(d))return d;if(E(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Sg.test(d))return new Date(d);
a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a);
}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1e3*f.sss||0)}return NaN}}function ob(a,b,d,c){return function(e,f,g,h,k,l,m){function p(a){
return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return u(a)&&!fa(a)?d(a)||void 0:a}Hc(e,f,g,h);Va(e,f,g,h,k,l);var r=h&&h.$options.getOption("timezone"),s;
h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,s),r&&(a=dc(a,r)),a});h.$formatters.push(function(a){
if(a&&!fa(a))throw pb("datefmt",a);if(p(a))return(s=a)&&r&&(s=dc(s,r,!0)),m("date")(a,c,r);s=null;return""});if(u(g.min)||g.ngMin){
var q;h.$validators.min=function(a){return!p(a)||x(q)||d(a)>=q};g.$observe("min",function(a){q=n(a);h.$validate()})}if(u(g.max)||g.ngMax){
var y;h.$validators.max=function(a){return!p(a)||x(y)||d(a)<=y};g.$observe("max",function(a){y=n(a);h.$validate()})}}}function Hc(a,b,d,c){
(c.$$hasNativeValidators=B(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a;
})}function de(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Tg.test(b))return parseFloat(b);
});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Y(b))throw pb("numfmt",b);b=b.toString()}return b})}function Wa(a){u(a)&&!Y(a)&&(a=parseFloat(a));
return U(a)?void 0:a}function Ic(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1;
}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Ic(a):0,h=e?Ic(b):0,k=f?Ic(d):0,g=Math.max(g,h,k),g=Math.pow(10,g);
a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(u(c)){
a=a(c);if(!a.constant)throw pb("constexpr",d,c);return a(b)}return e}function Jc(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;
var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;c.push(e)}return c}function c(a){var b=a;
I(a)?b=a.map(c).join(" "):B(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function e(a){var b=a;if(I(a))b=a.map(e);else if(B(a)){
var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&x(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var f;return["$parse",function(g){
return{restrict:"AC",link:function(h,k,l){function m(a,b){var c=[];r(a,function(a){if(0<b||t[a])t[a]=(t[a]||0)+b,t[a]===+(0<b)&&c.push(a);
});return c.join(" ")}function p(a){if(a===b){var c=w,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=w,c=m(c&&c.split(" "),-1),l.$removeClass(c);
u=a}function n(a){a=c(a);a!==w&&q(a)}function q(a){if(u===b){var c=w&&w.split(" "),e=a&&a.split(" "),g=d(c,e),c=d(e,c),g=m(g,-1),c=m(c,1);
l.$addClass(c);l.$removeClass(g)}w=a}var s=l[a].trim(),v=":"===s.charAt(0)&&":"===s.charAt(1),s=g(s,v?e:c),y=v?n:q,t=k.data("$classCounts"),u=!0,w;
t||(t=S(),k.data("$classCounts",t));"ngClass"!==a&&(f||(f=g("$index",function(a){return a&1})),h.$watch(f,p));h.$watch(s,y,v)}}}];
}function Sb(a,b,d,c,e,f,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};
this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=k(d.name||"",!1)(a);this.$$parentForm=Qb;
this.$options=Tb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);
this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;
this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;Object.defineProperty(this,"$$scope",{value:a
});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=h;this.$$exceptionHandler=b;Zd(this);Ug(this);
}function Ug(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);
return b})}function Kc(a){this.$$options=a}function ge(a,b){r(b,function(b,c){u(a[c])||(a[c]=b)})}function Ga(a,b){a.prop("selected",b);
a.attr("selected",b)}var Mc={objectMaxDepth:5},Vg=/^\/(.+)\/([a-z]*)$/,ra=Object.prototype.hasOwnProperty,L=function(a){return E(a)?a.toLowerCase():a;
},ub=function(a){return E(a)?a.toUpperCase():a},Ca,z,ma,xa=[].slice,ug=[].splice,Wg=[].push,ia=Object.prototype.toString,Pc=Object.getPrototypeOf,qa=K("ng"),$=w.angular||(w.angular={}),ic,qb=0;
Ca=w.document.documentMode;var U=Number.isNaN||function(a){return a!==a};D.$inject=[];ab.$inject=[];var I=Array.isArray,se=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,Q=function(a){
return E(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ja=function(){
if(!u(Ja.rules)){var a=w.document.querySelector("[ng-csp]")||w.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");
Ja.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ja;try{new Function(""),
b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ja.rules},rb=function(){if(u(rb.name_))return rb.name_;var a,b,d=Ha.length,c,e;
for(b=0;b<d;++b)if(c=Ha[b],a=w.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e;
},ue=/:/g,Ha=["ng-","data-ng-","ng:","x-ng-"],xe=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof w.HTMLScriptElement||b instanceof w.SVGScriptElement))return!1;
b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;
if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case"http:":
case"https:":case"ftp:":case"blob:":case"file:":case"data:":return!0;default:return!1}})}(w.document),Ae=/[A-Z]/g,Wc=!1,Oa=3,Fe={
full:"1.6.9",major:1,minor:6,dot:9,codeName:"fiery-basilisk"};V.expando="ng339";var ib=V.cache={},gg=1;V._data=function(a){return this.cache[a[this.expando]]||{};
};var cg=/-([a-z])/g,Xg=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},lc=K("jqLite"),fg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,kc=/<|&#?\w+;/,dg=/<([\w:-]+)/,eg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,aa={
option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],
tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};aa.optgroup=aa.option;
aa.tbody=aa.tfoot=aa.colgroup=aa.caption=aa.thead;aa.th=aa.td;var lg=w.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16);
},Sa=V.prototype={ready:gd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){
return 0<=a?z(this[a]):z(this[this.length+a])},length:0,push:Wg,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),function(a){
Gb[L(a)]=a});var ld={};r("input select option textarea button form details".split(" "),function(a){ld[a]=!0});var sd={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:pc,removeData:oc,hasData:function(a){for(var b in ib[a.ng339])return!0;
return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)oc(a[b])}},function(a,b){V[b]=a});r({data:pc,inheritedData:Eb,scope:function(a){
return z.data(a,"$scope")||Eb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return z.data(a,"$isolateScope")||z.data(a,"$isolateScopeNoTemplate");
},controller:id,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){
b=xb(b.replace(Xg,"ms-"));if(u(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Oa&&2!==c&&8!==c&&a.getAttribute){
var c=L(b),e=Gb[c];if(u(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),
null===a?void 0:a}},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;
return 1===c||c===Oa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===ya(a)){
var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;
yb(a,!0);a.innerHTML=b},empty:jd},function(a,b){V.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==jd&&x(2===a.length&&a!==Bb&&a!==id?b:c)){
if(B(b)){for(e=0;e<g;e++)if(a===pc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=x(e)?Math.min(g,1):g;for(f=0;f<g;f++){
var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:oc,on:function(a,b,d,c){if(u(c))throw lc("onargs");
if(jc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=ig(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){
var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));h.push(d)};g--;)b=c[g],Ab[b]?(h(Ab[b],kg),
h(b,void 0,!0)):h(b)}},off:hd,one:function(a,b,d){a=z(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){
var d,c=a.parentNode;yb(a);r(new V(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){
var b=[];r(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[];
},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new V(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){
if(1===a.nodeType){var d=a.firstChild;r(new V(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=z(b).eq(0).clone()[0],c=a.parentNode;
c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){
b=new V(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){
b&&r(b.split(" "),function(b){var e=d;x(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null;
},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:nc,
triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0;
},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0;
},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:D,type:f,target:a},b.type&&(c=O(c,b)),
b=ka(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){V.prototype[b]=function(b,c,e){
for(var f,g=0,h=this.length;g<h;g++)x(f)?(f=a(this[g],b,c,e),u(f)&&(f=z(f))):mc(f,a(this[g],b,c,e));return u(f)?f:this}});V.prototype.bind=V.prototype.on;
V.prototype.unbind=V.prototype.off;var Yg=Object.create(null);md.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;
this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return U(a)?Yg:a},get:function(a){a=this._transformKey(a);
a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);
this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);
this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=md,ag=[function(){this.$get=[function(){return Hb;
}]}],ng=/^([^(]+?)=>/,og=/^[^(]*\(\s*([^)]*)\)/m,Zg=/,/,$g=/^\s*(_?)(\S+?)\1\s*$/,mg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Ba=K("$injector");
gb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&d||(d=a.name||pg(a)),
Ba("strictdi",d);b=nd(a);r(b[1].split(Zg),function(a){a.replace($g,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,
sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var he=K("$animate"),sf=function(){this.$get=D},tf=function(){var a=new Hb,b=[];
this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):I(b)?b:[],r(b,function(b){
b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=qg(b.attr("class")),e="",f="";r(c,function(a,b){
a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0;
}return{enabled:D,on:D,off:D,pin:D,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,
l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.set(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();
return g}}}]},qf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){
if(c&&"."!==c.charAt(0))throw he("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){
1===arguments.length&&(c=C(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,
he("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){
var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a);
}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(c,d,k,l){d=d&&z(d);k=k&&z(k);
d=d||k.parent();b(c,d,k);return a.push(c,"enter",Ka(l))},move:function(c,d,k,l){d=d&&z(d);k=k&&z(k);d=d||k.parent();b(c,d,k);return a.push(c,"move",Ka(l));
},leave:function(b,c){return a.push(b,"leave",Ka(c),function(){b.remove()})},addClass:function(b,c,d){d=Ka(d);d.addClass=jb(d.addclass,c);
return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=Ka(d);d.removeClass=jb(d.removeClass,c);return a.push(b,"removeClass",d);
},setClass:function(b,c,d,f){f=Ka(f);f.addClass=jb(f.addClass,c);f.removeClass=jb(f.removeClass,d);return a.push(b,"setClass",f)},
animate:function(b,c,d,f,m){m=Ka(m);m.from=m.from?O(m.from,c):c;m.to=m.to?O(m.to,d):d;m.tempClasses=jb(m.tempClasses,f||"ng-inline-animate");
return a.push(b,"animate",m)}}}]}],vf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){
for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}];
},uf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){
this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){
if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e);
}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a);
},progress:D,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})});
}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},catch:function(a){return this.getPromise()["catch"](a);
},finally:function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){
this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();
this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){
2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},rf=function(){
this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),
g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0;
});return k}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;
return{start:f,end:f}}}]},ca=K("$compile"),sc=new function(){};Yc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){
return this.previousValue===sc};var od=/^((?:x|data)[:\-_])/i,tg=/[:\-_]+(.)/g,ud=K("$controller"),td=/^(\S+)(\s+as\s+([\w$]+))?$/,Cf=function(){
this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof z&&(b=b[0]):b=a[0].body;return b.offsetWidth+1};
}]},vd="application/json",vc={"Content-Type":vd+";charset=utf-8"},wg=/^\[|^\{(?!\{)/,xg={"[":/]$/,"{":/}$/},vg=/^\)]\}',?\n/,Kb=K("$http"),Fa=$.$interpolateMinErr=K("$interpolate");
Fa.throwNoconcat=function(a){throw Fa("noconcat",a)};Fa.interr=function(a,b){return Fa("interr",a,b.toString())};var Kf=function(){
this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=$.callbacks,d={};return{createCallback:function(c){
c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called;
},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ah=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,zg={
http:80,https:443,ftp:21},kb=K("$location"),Ag=/^\s*[\\\/]{2,}/,bh={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Lb("$$absUrl"),url:function(a){
if(x(a))return this.$$url;var b=ah.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");
this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==a?a.toString():"";
return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Y(a))a=a.toString(),
this.$$search=ec(a);else if(B(a))a=pa(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;
default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():"";
}),replace:function(){this.$$replace=!0;return this}};r([Cd,zc,yc],function(a){a.prototype=Object.create(bh);a.prototype.state=function(b){
if(!arguments.length)return this.$$state;if(a!==yc||!this.$$html5)throw kb("nostate");this.$$state=x(b)?null:b;this.$$urlUpdatedByLocation=!0;
return this}});var Xa=K("$parse"),Eg={}.constructor.prototype.valueOf,Ub=S();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){
Ub[a]=!0});var ch={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({
index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];
Ub[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1);
}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1;
},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||" "===a;
},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a);
},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a);
},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888;
},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);
return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){
d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Xa("lexerr",a,b,this.text)},readNumber:function(){
for(var a="",b=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{
var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent");
}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){
var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),
identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;
if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),
this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=ch[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({
index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;
this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";
q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";
q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";
q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";
q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);
return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),
!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()
}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment();
},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Xa("lval");a={type:q.AssignmentExpression,left:a,
right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),
this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={
type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={
type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={
type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={
type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={
type:q.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={
type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{
type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),
this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={
type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());
for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={
type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,
object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,
callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];
if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();
a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,
value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression());
}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){
do{if(this.peek("}"))break;b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),
b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),
b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());
a.push(b)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Xa("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));
},consume:function(a){if(0===this.tokens.length)throw Xa("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());
return b},peekToken:function(){if(0===this.tokens.length)throw Xa("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){
return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a;
}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{this:{type:q.ThisExpression
},$locals:{type:q.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],
body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};W(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing="assign",
d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";
r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var h=b.nextId();b.recurse(a,h);b.return_(h);
b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";
a=new Function("$filter","getStringValue","ifDefined","plus",a)(this.$filter,Bg,Cg,Ed);this.state=this.stage=void 0;return a},USE:"use",
STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));
b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name;
}).join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};";
},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":"";
},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("");
},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,p;c=c||D;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){
case q.Program:r(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h);
});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){
h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){
g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";
this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));
c(b);break;case q.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));
c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),
d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){
e&&1!==e&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name));
})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();
b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),
k.getStringValue(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.computedMember(g,h),
k.assign(b,m),d&&(d.computed=!0,d.name=h)):(e&&1!==e&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),
m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined");
});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=k.nextId();
k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){
k.if_(k.notNull(h),function(){r(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});
m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined");
});c(b)}));break;case q.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){
k.recurse(a.right,h);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:
l=[];r(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);
c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),
r(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;h=k.nextId();
k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(r(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){
l.push(k.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;
case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:
this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));
return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));
return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")";
},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;
c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){
return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]';
},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b);
},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){
g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";
if(Y(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";
throw Xa("esc")},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){
return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;W(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);
d=Gd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){
f.push(b.recurse(a.expression))});a=0===a.body.length?D:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=d(a,b)});return c;
};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);
switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);
case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:
return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);
case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),
a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:
return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),
a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,
value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var r=0;r<g.length;++r)n.push(g[r](a,c,d,f));n=p.value.apply(p.context,n);
}return b?{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=c(a,d,f,g);
a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a));
}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],
r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,
computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);
return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){
return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){
d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?-d:-0;return b?{
value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){
var h=a(c,e,f,g);c=b(c,e,f,g);h=Ed(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);
c=b(c,e,f,g);h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);
return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){
return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);
return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){
return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);
return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){
return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);
return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){
return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);
return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e
}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){
c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){
return function(e,f,g,h){var k=a(e,f,g,h),l,m;null!=k&&(l=b(e,f,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,
name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;
return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,
parse:function(a){a=this.getAst(a);var b=this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);
b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,
a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var va=K("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Bc=/_([a-z])/g,Gg=K("$compile"),X=w.document.createElement("a"),Od=ta(w.location.href);Pd.$inject=["$document"];ed.$inject=["$provide"];
var Wd=22,Vd=".",Dc="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var Rg={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),
y:ea("FullYear",1,0,!1,!0),MMMM:mb("Month"),MMM:mb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:mb("Month",!1,!0),dd:ea("Date",2),
d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),
s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:mb("Day"),EEE:mb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1];
},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Ec,
GG:Ec,GGG:Ec,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Qg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Pg=/^-?\d+$/;
Rd.$inject=["$locale"];var Kg=la(L),Lg=la(ub);Td.$inject=["$parse"];var He=la({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){
if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ia.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){
b.attr(e)||a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){
var c=Ea("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,
link:e}}}});r(sd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Vg))){
e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){
var b=Ea("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ia.call(c.prop("href"))&&(g="xlinkHref",
e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ca&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Qb={
$addControl:D,$$renameControl:function(a,b){a.$name=b},$removeControl:D,$setValidity:D,$setDirty:D,$setPristine:D,$setSubmitted:D
};Pb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){
a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){
Ia(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;
this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){
this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){
this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=Qb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Ya);
this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){
this.$$animate.setClass(this.$$element,Ya,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){
a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");
this.$submitted=!0;this.$$parentForm.$setSubmitted()}};ae({clazz:Pb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d];
},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ie=function(a){return["$timeout","$parse",function(b,d){
function c(a){return""===a?d('this[""]').assign:d(a).assign||D}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],
controller:Pb,compile:function(d,f){d.addClass(Ya).addClass(nb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){
var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();p.$setSubmitted()});b.preventDefault()};
d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);
var r=g?c(p.$name):D;g&&(r(a,p),e.$observe(g,function(b){p.$name!==b&&(r(a,void 0),p.$$parentForm.$$renameControl(p,b),r=c(p.$name),
r(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);r(a,void 0);O(p,Qb)})}}}}}]},Ie=ie(),Ue=ie(!0),Sg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,dh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,eh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Tg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,je=/^(\d{4,})-(\d{2})-(\d{2})$/,ke=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Lc=/^(\d{4,})-W(\d\d)$/,le=/^(\d{4,})-(\d\d)$/,me=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=S();
r(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var ne={text:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Gc(c);
},date:ob("date",je,Rb(je,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",ke,Rb(ke,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),
time:ob("time",me,Rb(me,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Lc,function(a,b){if(fa(a))return a;if(E(a)){Lc.lastIndex=0;
var d=Lc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());
return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:ob("month",le,Rb(le,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){
Hc(a,b,d,c);de(c);Va(a,b,d,c,e,f);var g,h;if(u(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||x(g)||a>=g},d.$observe("min",function(a){
g=Wa(a);c.$validate()});if(u(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h},d.$observe("max",function(a){
h=Wa(a);c.$validate()});if(u(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||x(k)||ee(b,g||0,k)};d.$observe("step",function(a){
k=Wa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Gc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;
return c.$isEmpty(d)||dh.test(d)}},email:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Gc(c);c.$$parserName="email";c.$validators.email=function(a,b){
var d=a||b;return c.$isEmpty(d)||eh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==Q(d.ngTrim);x(d.name)&&b.attr("name",++qb);
b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=Q(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;
e&&(a=Q(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);
d.$observe(a,c)}function h(a){p=Wa(a);U(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){
n=Wa(a);U(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){r=Wa(a);U(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate());
}Hc(a,b,d,c);de(c);Va(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?0:void 0,n=m?100:void 0,r=m?1:void 0,q=b[0].validity;
a=u(d.min);e=u(d.max);f=u(d.step);var v=c.$render;c.$render=m&&u(q.rangeUnderflow)&&u(q.rangeOverflow)?function(){v();c.$setViewValue(b.val());
}:v;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(p)||b>=p},g("min",h));e&&(c.$validators.max=m?function(){
return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b<=n},g("max",k));f&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){
return c.$isEmpty(b)||x(r)||ee(b,p||0,r)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,h){var k=fe(h,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(h,a,"ngFalseValue",d.ngFalseValue,!1);
b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){
return!1===a};c.$formatters.push(function(a){return sa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:D,button:D,submit:D,
reset:D,file:D},Zc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){
h[0]&&(ne[L(g.type)]||ne.text)(e,f,g,h[0],b,a,d,c)}}}}],fh=/^(true|false|\d+)$/,mf=function(){function a(a,d,c){var e=u(c)?c:9===Ca?"":null;
a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return fh.test(d.ngValue)?function(b,d,f){
b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Me=["$compile",function(a){return{restrict:"AC",
compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){
c.textContent=gc(a)})}}}}],Oe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){
c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a;
})}}}}],Ne=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){
return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);
c.html(a.getTrustedHtml(d)||"")})}}}}],lf=la({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){
a.$eval(d.ngChange)})}}),Pe=Jc("",!0),Re=Jc("Odd",0),Qe=Jc("Even",1),Se=Qa({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak");
}}),Te=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],dd={},gh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){
var b=Ea("ng-"+a);dd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){
d.on(a,function(d){var e=function(){g(b,{$event:d})};gh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var We=["$animate","$compile",function(a,b){
return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){
d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),
l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Xe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){
return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;
return function(c,e,m,p,n){var r=0,q,v,y,t=function(){v&&(v.remove(),v=null);q&&(q.$destroy(),q=null);y&&(d.leave(y).done(function(a){
!1!==a&&(v=null)}),v=y,y=null)};c.$watch(f,function(f){var m=function(a){!1===a||!u(h)||h&&!c.$eval(h)||b()},v=++r;f?(a(f,!0).then(function(a){
if(!c.$$destroyed&&v===r){var b=c.$new();p.template=a;a=n(b,function(a){t();d.enter(a,null,e).done(m)});q=b;y=a;q.$emit("$includeContentLoaded",f);
c.$eval(g)}},function(){c.$$destroyed||v!==r||(t(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(t(),
p.template=null)})}}}}],of=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){
ia.call(d[0]).match(/SVG/)?(d.empty(),a(fd(e.template,w.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),
a(d.contents())(b))}}}],Ye=Qa({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),kf=function(){return{
restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?Q(e):e;c.$parsers.push(function(a){
if(!x(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?Q(a):a)});return b}});c.$formatters.push(function(a){if(I(a))return a.join(e);
});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",$d="ng-invalid",Ya="ng-pristine",Vb="ng-dirty",pb=K("ngModel");Sb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
Sb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");
this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);C(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){C(this.$$parsedNgModel(a))?b(a,{
$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,za(this.$$element));
},$render:D,$isEmpty:function(a){return x(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),
this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"));
},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Ya);
},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Ya);this.$$animate.addClass(this.$$element,Vb);
this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched");
},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},
$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render();
},$validate:function(){if(!U(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;
this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){
function c(){var c=!0;r(k.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(k.$asyncValidators,function(a,b){
f(b,null)}),!1)}function e(){var c=[],d=!0;r(k.$asyncValidators,function(e,g){var k=e(a,b);if(!k||!C(k.then))throw pb("nopromise",k);
f(g,void 0);c.push(k.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.$$q.all(c).then(function(){g(d)},D):g(!0)}function f(a,b){
h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;
var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(x(k.$$parserValid))f(a,null);else return k.$$parserValid||(r(k.$validators,function(a,b){
f(b,null)}),r(k.$asyncValidators,function(a,b){f(b,null)})),f(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?e():g(!1):g(!1);
},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),
this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;
if(this.$$parserValid=x(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break;
}U(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");
this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){
e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);
r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;
this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");
Y(b[a])?b=b[a]:Y(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){
d.$commitViewValue()},b):this.$$scope.$root.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()});
},$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){
var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),
this.$$runValidators(this.$modelValue,this.$viewValue,D))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);
return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=void 0;this.$processModelValue();
},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler);
},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ae({clazz:Sb,set:function(a,b){a[b]=!0},unset:function(a,b){
delete a[b]}});var jf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Sb,
priority:1,compile:function(b){b.addClass(Ya).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;
if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a);
});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){h.$setTouched()}var h=f[0];
h.$$setUpdateOnEvents();c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Tb,hh=/(\s+|^)default(\s+|$)/;
Kc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=O({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],
"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=Q(d.replace(hh,function(){
a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Tb.$$options);return new Kc(a)}};Tb=new Kc({
updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var nf=function(){function a(a,d){this.$$attrs=a;
this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Tb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);
this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a
}},Ze=Qa({terminal:!0,priority:1e3}),ih=K("ngOptions"),jh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,gf=["$compile","$document","$parse",function(a,b,d){
function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){
var b;if(!r&&wa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(jh);if(!p)throw ih("iexp",a,za(b));
var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var v=a&&d(a)||b,u=q&&d(q),t=q?function(a,b){return u(c,b);
}:function(a){return Pa(a)},w=function(a,b){return t(a,C(a,b))},x=d(p[2]||p[1]),A=d(p[3]||""),H=d(p[4]||""),G=d(p[8]),z={},C=r?function(a,b){
z[r]=b;z[n]=a;return z}:function(a){z[n]=a;return z};return{trackBy:q,getTrackByValue:w,getWatchables:d(G,function(a){var b=[];a=a||[];
for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=C(l,h),l=t(l,h);b.push(l);if(p[2]||p[1])l=x(c,h),b.push(l);p[4]&&(h=H(c,h),
b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=G(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],r=C(d[p],p),u=v(c,r),p=t(u,r),y=x(c,r),F=A(c,r),r=H(c,r),u=new e(p,u,y,F,r);
a.push(u);b[p]=u}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){
return q?pa(a.viewValue):a.viewValue}}}}}var e=w.document.createElement("option"),f=w.document.createElement("optgroup");return{restrict:"A",
terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=D},post:function(d,h,k,l){function m(a){
var b=(a=t.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;
a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],s=k.multiple;l=0;for(var v=h.children(),y=v.length;l<y;l++)if(""===v[l].value){
n.hasEmptyOption=!0;n.emptyOption=v.eq(l);break}h.empty();l=!!n.emptyOption;z(e.cloneNode(!1)).val("?");var t,w=c(k.ngOptions,h,d),x=b[0].createDocumentFragment();
n.generateUnknownOptionValue=function(a){return"?"};s?(n.writeValue=function(a){if(t){var b=a&&a.map(m)||[];t.items.forEach(function(a){
a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=h.val()||[],b=[];
r(a,function(a){(a=t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},w.trackBy&&d.$watchCollection(function(){
if(I(q.$viewValue))return q.$viewValue.map(function(a){return w.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){
if(t){var b=h[0].options[h[0].selectedIndex],c=t.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(n.removeUnknownOption(),
h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},
n.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),t.getViewValueFromOption(a)):null;
},w.trackBy&&d.$watch(function(){return w.getTrackByValue(q.$viewValue)},function(){q.$render()}));l&&(a(n.emptyOption)(d),h.prepend(n.emptyOption),
8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,
n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;
n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(w.getWatchables,function(){var a=t&&n.readValue();
if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];u(c.group)?Fb(c.element.parentNode):Fb(c.element)}t=w.getOptions();var d={};
t.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),x.appendChild(b),b.label=null===a.group?"null":a.group,
d[a.group]=b);var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),x.appendChild(b),p(a,b)});h[0].appendChild(x);q.$render();
q.$isEmpty(a)||(b=n.readValue(),(w.trackBy||s?sa(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],$e=["$locale","$interpolate","$log",function(a,b,d){
var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,n=f.$eval(m)||{},q={},s=b.startSymbol(),v=b.endSymbol(),u=s+l+"-"+p+v,t=$.noop,w;
r(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+L(c[2]),n[c]=g.attr(h.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,u));
});f.$watch(l,function(b){var c=parseFloat(b),e=U(c);e||c in n||(c=a.pluralCat(c-p));c===w||e&&U(w)||(t(),e=q[c],x(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),
t=D,k()):t=f.$watch(e,k),w=c)})}}}],af=["$parse","$animate","$compile",function(a,b,d){var c=K("ngRepeat"),e=function(a,b,c,d,e,m,p){
a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",
multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",h);var m=l[1],p=l[2],n=l[3],q=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);
var s=l[3]||l[1],v=l[2];if(n&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw c("badident",n);
var u,t,w,x,z={$id:Pa};q?u=a(q):(w=function(a,b){return Pa(b)},x=function(a){return a});return function(a,d,f,g,l){u&&(t=function(b,c,d){
v&&(z[v]=b);z[s]=c;z.$index=d;return u(a,z)});var m=S();a.$watchCollection(p,function(f){var g,p,q=d[0],u,y=S(),z,F,C,A,D,B,E;n&&(a[n]=f);
if(wa(f))D=f,p=t||w;else for(E in p=t||x,D=[],f)ra.call(f,E)&&"$"!==E.charAt(0)&&D.push(E);z=D.length;E=Array(z);for(g=0;g<z;g++)if(F=f===D?g:D[g],
C=f[F],A=p(F,C,g),m[A])B=m[A],delete m[A],y[A]=B,E[g]=B;else{if(y[A])throw r(E,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,A,C);
E[g]={id:A,scope:void 0,clone:void 0};y[A]=!0}for(u in m){B=m[u];A=tb(B.clone);b.leave(A);if(A[0].parentNode)for(g=0,p=A.length;g<p;g++)A[g].$$NG_REMOVED=!0;
B.scope.$destroy()}for(g=0;g<z;g++)if(F=f===D?g:D[g],C=f[F],B=E[g],B.scope){u=q;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);B.clone[0]!==u&&b.move(tb(B.clone),null,q);
q=B.clone[B.clone.length-1];e(B.scope,g,s,C,v,F,z)}else l(function(a,c){B.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,q);
q=d;B.clone=a;y[B.id]=B;e(B.scope,g,s,C,v,F,z)});m=y})}}}}],bf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){
b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ve=["$animate",function(a){
return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{
tempClasses:"ng-hide-animate"})})}}}],cf=Qa(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,c){b.css(c,"");
});a&&b.css(a)},!0)}),df=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={};
}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){
for(var d,e;k.length;)a.cancel(k.pop());d=0;for(e=l.length;d<e;++d){var q=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(q)).done(m(k,d));
}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");
h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],ef=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});r(a,function(a){
c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),ff=Qa({transclude:"element",priority:1200,require:"^ngSwitch",
multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),kh=K("ngTransclude"),hf=["$compile",function(a){
return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){
b.append(a)})}if(!h)throw kh("orphan",za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;
h(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Oa||g.nodeValue.trim()){d=!0;break a;
}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],Je=["$templateCache",function(a){return{restrict:"E",
terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],lh={$setViewValue:D,$render:D},mh=["$element","$scope",function(a,b){
function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){h||(h=!0,b.$$postDigest(function(){
b.$$destroyed||(h=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};
e.ngModelCtrl=lh;e.multiple=!1;e.unknownOption=z(w.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){
b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ga(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){
b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ga(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){
return"? "+Pa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){
e.emptyOption&&(a.val(""),Ga(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Ga(e.emptyOption,!1)};b.$on("$destroy",function(){
e.renderUnknownOption=D});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null;
};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Ga(z(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Pa(b),
a.val(c in e.selectValueMap?c:b),Ga(z(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){
if(8!==b[0].nodeType){Ia(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){
var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){
return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0];
};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){
null==a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a);
};var g=!1,h=!1;e.registerOption=function(a,b,f,g,h){if(f.$attr.ngValue){var q,r=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");
u(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=Pa(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c();
})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");u(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);
d&&f&&c()}):h?a.$watch(h,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c();
}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),
e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0);
})}}],Ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:mh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];
if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),
d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b));
});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));
c!==b.selected&&Ga(z(b),c)})};var g,h=NaN;a.$watch(function(){h!==f.$viewValue||sa(g,f.$viewValue)||(g=ka(f.$viewValue),f.$render());
h=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=D},post:function(a,b,d,c){var e=c[1];if(e){
var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Le=["$interpolate",function(a){return{restrict:"E",priority:100,
compile:function(b,d){var c,e;u(d.ngValue)||(u(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){
var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],ad=function(){
return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b);
},d.$observe("required",function(){c.$validate()}))}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){
if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw K("ngPattern")("noregexp",f,a,za(b));
e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(e)||e.test(b)}}}}},cd=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=U(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){
return 0>e||c.$isEmpty(b)||b.length<=e}}}}},bd=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;
d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e;
}}}}};w.angular.bootstrap?w.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Be(),Ee($),$.module("ngLocale",[],["$provide",function(a){
function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",
short:"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{
gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,
negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));
Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),z(function(){we(w.document,Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
(function(S,q){"use strict";function Ea(a,b,c){if(!a)throw Pa("areq",b||"?",c||"required");return a}function Fa(a,b){if(!a&&!b)return"";
if(!a)return b;if(!b)return a;V(a)&&(a=a.join(" "));V(b)&&(b=b.join(" "));return a+" "+b}function Qa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,
b.from=a.from);return b}function W(a,b,c){var d="";a=V(a)?a:a&&C(a)&&a.length?a.split(/\s+/):[];t(a,function(a,f){a&&0<a.length&&(d+=0<f?" ":"",
d+=c?b+a:a+b)});return d}function Ga(a){if(a instanceof A)switch(a.length){case 0:return a;case 1:if(1===a[0].nodeType)return a;break;
default:return A(ua(a))}if(1===a.nodeType)return A(a)}function ua(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c;
}}function Ra(a,b,c){t(b,function(b){a.addClass(b,c)})}function Sa(a,b,c){t(b,function(b){a.removeClass(b,c)})}function X(a){return function(b,c){
c.addClass&&(Ra(a,b,c.addClass),c.addClass=null);c.removeClass&&(Sa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};
if(!a.$$prepared){var b=a.domOperation||O;a.domOperation=function(){a.$$domOperationFired=!0;b();b=O};a.$$prepared=!0}return a}function ha(a,b){
Ha(a,b);Ia(a,b)}function Ha(a,b){b.from&&(a.css(b.from),b.from=null)}function Ia(a,b){b.to&&(a.css(b.to),b.to=null)}function T(a,b,c){
var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),f=(d.removeClass||"")+" "+(c.removeClass||"");a=Ta(a.attr("class"),e,f);
c.preparationClasses&&(d.preparationClasses=ca(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);e=d.domOperation!==O?d.domOperation:null;
va(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;
b.removeClass=d.removeClass;return d}function Ta(a,b,c){function d(a){C(a)&&(a=a.split(" "));var b={};t(a,function(a){a.length&&(b[a]=!0);
});return b}var e={};a=d(a);b=d(b);t(b,function(a,b){e[b]=1});c=d(c);t(c,function(a,b){e[b]=1===e[b]?null:-1});var f={addClass:"",
removeClass:""};t(e,function(b,c){var d,e;1===b?(d="addClass",e=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",e=a[c]||a[c+"-add"]);
e&&(f[d].length&&(f[d]+=" "),f[d]+=c)});return f}function J(a){return a instanceof A?a[0]:a}function Ua(a,b,c){var d="";b&&(d=W(b,"ng-",!0));
c.addClass&&(d=ca(d,W(c.addClass,"-add")));c.removeClass&&(d=ca(d,W(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,
a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";ka(a,[la,c]);return[la,c]}function wa(a,b){var c=b?"paused":"",d=Y+"PlayState";
ka(a,[d,c]);return[d,c]}function ka(a,b){a.style[b[0]]=b[1]}function ca(a,b){return a?b?a+" "+b:a:b}function Ja(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};
t(c,function(a,b){var c=e[a];if(c){var l=c.charAt(0);if("-"===l||"+"===l||0<=l)c=Va(c);0===c&&(c=null);d[b]=c}});return d}function Va(a){
var b=0;a=a.split(/\s*,\s*/);t(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a;
});return b}function xa(a){return 0===a||null!=a}function Ka(a,b){var c=Q,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function La(){
var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){
return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ma(a,b,c){t(c,function(c){a[c]=ya(a[c])?a[c]:b.style.getPropertyValue(c);
})}var Q,za,Y,Aa;void 0===S.ontransitionend&&void 0!==S.onwebkittransitionend?(Q="WebkitTransition",za="webkitTransitionEnd transitionend"):(Q="transition",
za="transitionend");void 0===S.onanimationend&&void 0!==S.onwebkitanimationend?(Y="WebkitAnimation",Aa="webkitAnimationEnd animationend"):(Y="animation",
Aa="animationend");var qa=Y+"Delay",Ba=Y+"Duration",la=Q+"Delay",Na=Q+"Duration",Pa=q.$$minErr("ng"),Wa={transitionDuration:Na,transitionDelay:la,
transitionProperty:Q+"Property",animationDuration:Ba,animationDelay:qa,animationIterationCount:Y+"IterationCount"},Xa={transitionDuration:Na,
transitionDelay:la,animationDuration:Ba,animationDelay:qa},Ca,va,t,V,ya,Z,Da,ra,C,P,A,O;q.module("ngAnimate",[],function(){O=q.noop;
Ca=q.copy;va=q.extend;A=q.element;t=q.forEach;V=q.isArray;C=q.isString;ra=q.isObject;P=q.isUndefined;ya=q.isDefined;Da=q.isFunction;
Z=q.isElement}).info({angularVersion:"1.6.9"}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",
transclude:"element",terminal:!0,priority:600,link:function(b,d,e,f,n){var G,l;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){
G&&a.leave(G);l&&(l.$destroy(),l=null);if(e||0===e)l=b.$new(),n(l,function(b){G=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){
return{link:function(b,c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var f=d.ngAnimateChildren;C(f)&&0===f.length?c.data("$$ngAnimateChildren",!0):(e(a(f)(b)),
d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){
if(d.length){for(var b=d.shift(),n=0;n<b.length;n++)b[n]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){
e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;
a=a.split(" ");var b=Object.create(null);t(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){
return d[a]})}}function d(a,b,c){return f[a].some(function(a){return a(b,c)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;
return b?c&&d:c||d}var f=this.rules={skip:[],cancel:[],join:[]};f.join.push(function(a,b){return!a.structural&&e(a)});f.skip.push(function(a,b){
return!a.structural&&!e(a)});f.skip.push(function(a,b){return"leave"===b.event&&a.structural});f.skip.push(function(a,b){return b.structural&&2===b.state&&!a.structural;
});f.cancel.push(function(a,b){return b.structural&&a.structural});f.cancel.push(function(a,b){return 2===b.state&&a.structural});
f.cancel.push(function(a,b){if(b.structural)return!1;var d=a.addClass,e=a.removeClass,f=b.addClass,sa=b.removeClass;return P(d)&&P(e)||P(f)&&P(sa)?!1:c(d,sa)||c(e,f);
});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(b,c,f,s,y,sa,da,v,E,g,M){
function x(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function H(a,b,c){var h=[],d=k[c];d&&t(d,function(d){
u.call(d.node,b)?h.push(d.callback):"leave"===c&&u.call(d.node,a)&&h.push(d.callback)});return h}function I(a,b,c){var h=ua(b);return a.filter(function(a){
return!(a.node===h&&(!c||a.callback===c))})}function K(a,k,w){function K(a,c,h,k){s(function(){var a=H(na,p,c);a.length?b(function(){
t(a,function(a){a(f,h,k)});"close"!==h||p.parentNode||ba.off(p)}):"close"!==h||p.parentNode||ba.off(p)});a.progress(c,h,k)}function I(a){
var b=f,c=g;c.preparationClasses&&(b.removeClass(c.preparationClasses),c.preparationClasses=null);c.activeClasses&&(b.removeClass(c.activeClasses),
c.activeClasses=null);Oa(f,g);ha(f,g);g.domOperation();l.complete(!a)}var g=Ca(w),f=Ga(a),p=J(f),na=p&&p.parentNode,g=oa(g),l=new da,s=x();
V(g.addClass)&&(g.addClass=g.addClass.join(" "));g.addClass&&!C(g.addClass)&&(g.addClass=null);V(g.removeClass)&&(g.removeClass=g.removeClass.join(" "));
g.removeClass&&!C(g.removeClass)&&(g.removeClass=null);g.from&&!ra(g.from)&&(g.from=null);g.to&&!ra(g.to)&&(g.to=null);if(!(h&&p&&Ya(p,k,w)&&D(p,g)))return I(),
l;var v=0<=["enter","move","leave"].indexOf(k),u=M(),y=u||ga.get(p);w=!y&&z.get(p)||{};var E=!!w.state;y||E&&1===w.state||(y=!L(p,na,k));
if(y)return u&&K(l,k,"start"),I(),u&&K(l,k,"close"),l;v&&ta(p);u={structural:v,element:f,event:k,addClass:g.addClass,removeClass:g.removeClass,
close:I,options:g,runner:l};if(E){if(d("skip",u,w)){if(2===w.state)return I(),l;T(f,w,u);return w.runner}if(d("cancel",u,w))if(2===w.state)w.runner.end();else if(w.structural)w.close();else return T(f,w,u),
w.runner;else if(d("join",u,w))if(2===w.state)T(f,u,{});else return Ua(f,v?k:null,g),k=u.event=w.event,g=T(f,w,u),w.runner}else T(f,u,{});
(E=u.structural)||(E="animate"===u.event&&0<Object.keys(u.options.to||{}).length||e(u));if(!E)return I(),m(p),l;var q=(w.counter||0)+1;
u.counter=q;F(p,1,u);c.$$postDigest(function(){f=Ga(a);var b=z.get(p),c=!b,b=b||{},h=0<(f.parent()||[]).length&&("animate"===b.event||b.structural||e(b));
if(c||b.counter!==q||!h){c&&(Oa(f,g),ha(f,g));if(c||v&&b.event!==k)g.domOperation(),l.end();h||m(p)}else k=!b.structural&&e(b,!0)?"setClass":b.event,
F(p,2),b=sa(f,k,b.options),l.setHost(b),K(l,k,"start",{}),b.done(function(a){I(!a);(a=z.get(p))&&a.counter===q&&m(p);K(l,k,"close",{});
})});return l}function ta(a){a=a.querySelectorAll("[data-ng-animate]");t(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=z.get(a);
if(c)switch(b){case 2:c.runner.end();case 1:z.delete(a)}})}function m(a){a.removeAttribute("data-ng-animate");z.delete(a)}function L(a,b,c){
c=s[0].body;var h=J(f),k=a===c||"HTML"===a.nodeName,d=a===h,g=!1,e=ga.get(a),p;for((a=A.data(a,"$ngAnimatePin"))&&(b=J(a));b;){d||(d=b===h);
if(1!==b.nodeType)break;a=z.get(b)||{};if(!g){var H=ga.get(b);if(!0===H&&!1!==e){e=!0;break}else!1===H&&(e=!1);g=a.structural}if(P(p)||!0===p)a=A.data(b,"$$ngAnimateChildren"),
ya(a)&&(p=a);if(g&&!1===p)break;k||(k=b===c);if(k&&d)break;if(!d&&(a=A.data(b,"$ngAnimatePin"))){b=J(a);continue}b=b.parentNode}return(!g||p)&&!0!==e&&d&&k;
}function F(a,b,c){c=c||{};c.state=b;a.setAttribute("data-ng-animate",b);c=(b=z.get(a))?va(b,c):c;z.set(a,c)}var z=new y,ga=new y,h=null,p=c.$watch(function(){
return 0===v.totalPendingRequests},function(a){a&&(p(),c.$$postDigest(function(){c.$$postDigest(function(){null===h&&(h=!0)})}))}),k=Object.create(null);
y=a.customFilter();var na=a.classNameFilter();g=function(){return!0};var Ya=y||g,D=na?function(a,b){var c=[a.getAttribute("class"),b.addClass,b.removeClass].join(" ");
return na.test(c)}:g,Oa=X(E),u=S.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},ba={
on:function(a,b,c){var h=ua(b);k[a]=k[a]||[];k[a].push({node:h,callback:c});A(b).on("$destroy",function(){z.get(h)||ba.off(a,b,c);
})},off:function(a,b,c){if(1!==arguments.length||C(arguments[0])){var h=k[a];h&&(k[a]=1===arguments.length?null:I(h,b,c))}else for(h in b=arguments[0],
k)k[h]=I(k[h],b)},pin:function(a,b){Ea(Z(a),"element","not an element");Ea(Z(b),"parentElement","not an element");a.data("$ngAnimatePin",b);
},push:function(a,b,c,h){c=c||{};c.domOperation=h;return K(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!h;else if(Z(a)){
var k=J(a);1===c?b=!ga.get(k):ga.set(k,!b)}else b=h=!!a;return b}};return ba}]}]).provider("$$animation",["$animateProvider",function(a){
var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler",function(a,d,e,f,n,G){
function l(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,e=d.parentNode;g.set(d,a);for(var f;e;){if(f=g.get(e)){
f.processed||(f=b(f));break}e=e.parentNode}(f||c).children.push(a);return a}var c={children:[]},d,g=new n;for(d=0;d<a.length;d++){
var e=a[d];g.set(e.domNode,a[d]={domNode:e.domNode,fn:e.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;
for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var g=0,e=[];for(d=0;d<c.length;d++){var f=c[d];0>=a&&(a=g,g=0,b.push(e),
e=[]);e.push(f.fn);f.children.forEach(function(a){g++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var s=[],y=X(a);return function(n,q,v){
function E(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];t(a,function(a){var c=a.getAttribute("ng-animate-ref");
c&&c.length&&b.push(a)});return b}function g(a){var b=[],c={};t(a,function(a,d){var k=J(a.element),g=0<=["enter","move"].indexOf(a.event),k=a.structural?E(k):[];
if(k.length){var e=g?"to":"from";t(k,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][e]={animationID:d,element:A(a)
}})}else b.push(a)});var d={},g={};t(c,function(c,e){var f=c.from,p=c.to;if(f&&p){var H=a[f.animationID],z=a[p.animationID],m=f.animationID.toString();
if(!g[m]){var l=g[m]={structural:!0,beforeStart:function(){H.beforeStart();z.beforeStart()},close:function(){H.close();z.close()},
classes:M(H.classes,z.classes),from:H,to:z,anchors:[]};l.classes.length?b.push(l):(b.push(H),b.push(z))}g[m].anchors.push({out:f.element,
in:p.element})}else f=f?f.animationID:p.animationID,p=f.toString(),d[p]||(d[p]=!0,b.push(a[f]))});return b}function M(a,b){a=a.split(" ");
b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var g=a[d];if("ng-"!==g.substring(0,3))for(var e=0;e<b.length;e++)if(g===b[e]){c.push(g);
break}}return c.join(" ")}function x(a){for(var c=b.length-1;0<=c;c--){var d=e.get(b[c])(a);if(d)return d}}function H(a,b){function c(a){
(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function I(){var a=n.data("$$animationRunner");
!a||"leave"===q&&v.$$domOperationFired||a.end()}function K(b){n.off("$destroy",I);n.removeData("$$animationRunner");y(n,v);ha(n,v);
v.domOperation();F&&a.removeClass(n,F);n.removeClass("ng-animate");m.complete(!b)}v=oa(v);var ta=0<=["enter","move","leave"].indexOf(q),m=new f({
end:function(){K()},cancel:function(){K(!0)}});if(!b.length)return K(),m;n.data("$$animationRunner",m);var L=Fa(n.attr("class"),Fa(v.addClass,v.removeClass)),F=v.tempClasses;
F&&(L+=" "+F,v.tempClasses=null);var z;ta&&(z="ng-"+q+"-prepare",a.addClass(n,z));s.push({element:n,classes:L,event:q,structural:ta,
options:v,beforeStart:function(){n.addClass("ng-animate");F&&a.addClass(n,F);z&&(a.removeClass(n,z),z=null)},close:K});n.on("$destroy",I);
if(1<s.length)return m;d.$$postDigest(function(){var a=[];t(s,function(b){b.element.data("$$animationRunner")?a.push(b):b.close();
});s.length=0;var b=g(a),c=[];t(b,function(a){c.push({domNode:J(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;
if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=x(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){
c(!a)}),H(a,b)):c()}})});G(l(c))});return m}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=La(),c=La();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,f,n,G,l,s,y){
function q(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++M))+"-"+a.getAttribute("class")+"-"+b;
}function da(g,f,l,n){var m;0<b.count(l)&&(m=c.get(l),m||(f=W(f,"-stagger"),e.addClass(g,f),m=Ja(a,g,n),m.animationDuration=Math.max(m.animationDuration,0),
m.transitionDuration=Math.max(m.transitionDuration,0),e.removeClass(g,f),c.put(l,m)));return m||{}}function v(a){x.push(a);s.waitUntilQuiet(function(){
b.flush();c.flush();for(var a=G(),d=0;d<x.length;d++)x[d](a);x.length=0})}function E(c,g,e){g=b.get(e);g||(g=Ja(a,c,Wa),"infinite"===g.animationIterationCount&&(g.animationIterationCount=1));
b.put(e,g);c=g;e=c.animationDelay;g=c.transitionDelay;c.maxDelay=e&&g?Math.max(e,g):e||g;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);
return c}var g=X(e),M=0,x=[];return function(a,c){function d(){m()}function s(){m(!0)}function m(b){if(!(M||ba&&u)){M=!0;u=!1;h.$$skipPreparationClasses||e.removeClass(a,fa);
e.removeClass(a,ca);wa(k,!1);pa(k,!1);t(x,function(a){k.style[a[0]]=""});g(a,h);ha(a,h);Object.keys(p).length&&t(p,function(a,b){
a?k.style.setProperty(b,a):k.style.removeProperty(b)});if(h.onDone)h.onDone();ea&&ea.length&&a.off(ea.join(" "),z);var c=a.data("$$animateCss");
c&&(n.cancel(c[0].timer),a.removeData("$$animateCss"));A&&A.complete(!b)}}function L(a){r.blockTransition&&pa(k,a);r.blockKeyframeAnimation&&wa(k,!!a);
}function F(){A=new f({end:d,cancel:s});v(O);m();return{$$willAnimate:!1,start:function(){return A},end:d}}function z(a){a.stopPropagation();
var b=a.originalEvent||a;b.target===k&&(a=b.$manualTimeStamp||Date.now(),b=parseFloat(b.elapsedTime.toFixed(3)),Math.max(a-T,0)>=P&&b>=N&&(ba=!0,
m()))}function ga(){function b(){if(!M){L(!1);t(x,function(a){k.style[a[0]]=a[1]});g(a,h);e.addClass(a,ca);if(r.recalculateTimingStyles){
ma=k.getAttribute("class")+" "+fa;ja=q(k,ma);B=E(k,ma,ja);$=B.maxDelay;w=Math.max($,0);N=B.maxDuration;if(0===N){m();return}r.hasTransitions=0<B.transitionDuration;
r.hasAnimations=0<B.animationDuration}r.applyAnimationDelay&&($="boolean"!==typeof h.delay&&xa(h.delay)?parseFloat(h.delay):$,w=Math.max($,0),
B.animationDelay=$,aa=[qa,$+"s"],x.push(aa),k.style[aa[0]]=aa[1]);P=1e3*w;S=1e3*N;if(h.easing){var d,f=h.easing;r.hasTransitions&&(d=Q+"TimingFunction",
x.push([d,f]),k.style[d]=f);r.hasAnimations&&(d=Y+"TimingFunction",x.push([d,f]),k.style[d]=f)}B.transitionDuration&&ea.push(za);B.animationDuration&&ea.push(Aa);
T=Date.now();var l=P+1.5*S;d=T+l;var f=a.data("$$animateCss")||[],F=!0;if(f.length){var s=f[0];(F=d>s.expectedEndTime)?n.cancel(s.timer):f.push(m);
}F&&(l=n(c,l,!1),f[0]={timer:l,expectedEndTime:d},f.push(m),a.data("$$animateCss",f));if(ea.length)a.on(ea.join(" "),z);h.to&&(h.cleanupStyles&&Ma(p,k,Object.keys(h.to)),
Ia(a,h))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!M)if(k.parentNode){
var d=function(a){if(ba)u&&a&&(u=!1,m());else if(u=!a,B.animationDuration)if(a=wa(k,u),u)x.push(a);else{var b=x,c=b.indexOf(a);0<=a&&b.splice(c,1);
}},f=0<Z&&(B.transitionDuration&&0===U.transitionDuration||B.animationDuration&&0===U.animationDuration)&&Math.max(U.animationDelay,U.transitionDelay);
f?n(b,Math.floor(f*Z*1e3),!1):b();C.resume=function(){d(!0)};C.pause=function(){d(!1)}}else m()}var h=c||{};h.$$prepared||(h=oa(Ca(h)));
var p={},k=J(a);if(!k||!k.parentNode||!y.enabled())return F();var x=[],G=a.attr("class"),D=Qa(h),M,u,ba,A,C,w,P,N,S,T,ea=[];if(0===h.duration||!l.animations&&!l.transitions)return F();
var ia=h.event&&V(h.event)?h.event.join(" "):h.event,X="",R="";ia&&h.structural?X=W(ia,"ng-",!0):ia&&(X=ia);h.addClass&&(R+=W(h.addClass,"-add"));
h.removeClass&&(R.length&&(R+=" "),R+=W(h.removeClass,"-remove"));h.applyClassesEarly&&R.length&&g(a,h);var fa=[X,R].join(" ").trim(),ma=G+" "+fa,ca=W(fa,"-active"),G=D.to&&0<Object.keys(D.to).length;
if(!(0<(h.keyframeStyle||"").length||G||fa))return F();var ja,U;0<h.stagger?(D=parseFloat(h.stagger),U={transitionDelay:D,animationDelay:D,
transitionDuration:0,animationDuration:0}):(ja=q(k,ma),U=da(k,fa,ja,Xa));h.$$skipPreparationClasses||e.addClass(a,fa);h.transitionStyle&&(D=[Q,h.transitionStyle],
ka(k,D),x.push(D));0<=h.duration&&(D=0<k.style[Q].length,D=Ka(h.duration,D),ka(k,D),x.push(D));h.keyframeStyle&&(D=[Y,h.keyframeStyle],
ka(k,D),x.push(D));var Z=U?0<=h.staggerIndex?h.staggerIndex:b.count(ja):0;(ia=0===Z)&&!h.skipBlocking&&pa(k,9999);var B=E(k,ma,ja),$=B.maxDelay;
w=Math.max($,0);N=B.maxDuration;var r={};r.hasTransitions=0<B.transitionDuration;r.hasAnimations=0<B.animationDuration;r.hasTransitionAll=r.hasTransitions&&"all"===B.transitionProperty;
r.applyTransitionDuration=G&&(r.hasTransitions&&!r.hasTransitionAll||r.hasAnimations&&!r.hasTransitions);r.applyAnimationDuration=h.duration&&r.hasAnimations;
r.applyTransitionDelay=xa(h.delay)&&(r.applyTransitionDuration||r.hasTransitions);r.applyAnimationDelay=xa(h.delay)&&r.hasAnimations;
r.recalculateTimingStyles=0<R.length;if(r.applyTransitionDuration||r.applyAnimationDuration)N=h.duration?parseFloat(h.duration):N,
r.applyTransitionDuration&&(r.hasTransitions=!0,B.transitionDuration=N,D=0<k.style[Q+"Property"].length,x.push(Ka(N,D))),r.applyAnimationDuration&&(r.hasAnimations=!0,
B.animationDuration=N,x.push([Ba,N+"s"]));if(0===N&&!r.recalculateTimingStyles)return F();if(null!=h.delay){var aa;"boolean"!==typeof h.delay&&(aa=parseFloat(h.delay),
w=Math.max(aa,0));r.applyTransitionDelay&&x.push([la,aa+"s"]);r.applyAnimationDelay&&x.push([qa,aa+"s"])}null==h.duration&&0<B.transitionDuration&&(r.recalculateTimingStyles=r.recalculateTimingStyles||ia);
P=1e3*w;S=1e3*N;h.skipBlocking||(r.blockTransition=0<B.transitionDuration,r.blockKeyframeAnimation=0<B.animationDuration&&0<U.animationDelay&&0===U.animationDuration);
h.from&&(h.cleanupStyles&&Ma(p,k,Object.keys(h.from)),Ha(a,h));r.blockTransition||r.blockKeyframeAnimation?L(N):h.skipBlocking||pa(k,!1);
return{$$willAnimate:!0,end:d,start:function(){if(!M)return C={end:d,cancel:s,resume:null,pause:null},A=new f(C),v(ga),A}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){
a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,f,n,G){
function l(a){return a.replace(/\bng-\S+\b/g,"")}function s(a,b){C(a)&&(a=a.split(" "));C(b)&&(b=b.split(" "));return a.filter(function(a){
return-1===b.indexOf(a)}).join(" ")}function y(c,f,e){function n(a){var b={},c=J(a).getBoundingClientRect();t(["width","height","top","left"],function(a){
var d=c[a];switch(a){case"top":d+=v.scrollTop;break;case"left":d+=v.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function G(){var c=l(e.attr("class")||""),d=s(c,m),c=s(m,c),d=a(y,{
to:n(e),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function q(){y.remove();
f.removeClass("ng-animate-shim");e.removeClass("ng-animate-shim")}var y=A(J(f).cloneNode(!0)),m=l(y.attr("class")||"");f.addClass("ng-animate-shim");
e.addClass("ng-animate-shim");y.addClass("ng-anchor");E.append(y);var L;c=function(){var c=a(y,{addClass:"ng-anchor-out",delay:!0,
from:n(f)});return c.$$willAnimate?c:null}();if(!c&&(L=G(),!L))return q();var F=c||L;return{start:function(){function a(){c&&c.end();
}var b,c=F.start();c.done(function(){c=null;if(!L&&(L=G()))return c=L.start(),c.done(function(){c=null;q();b.complete()}),c;q();b.complete();
});return b=new d({end:a,cancel:a})}}}function q(a,b,c,f){var e=da(a,O),l=da(b,O),n=[];t(f,function(a){(a=y(c,a.out,a["in"]))&&n.push(a);
});if(e||l||0!==n.length)return{start:function(){function a(){t(b,function(a){a.end()})}var b=[];e&&b.push(e.start());l&&b.push(l.start());
t(n,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function da(c){var d=c.element,e=c.options||{};
c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=ca(e.event,e.preparationClasses));
c=a(d,e);return c.$$willAnimate?c:null}if(!f.animations&&!f.transitions)return O;var v=G[0].body;c=J(e);var E=A(c.parentNode&&11===c.parentNode.nodeType||v.contains(c)?c:v);
return function(a){return a.from&&a.to?q(a.from,a.to,a.classes,a.anchors):da(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){
this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=V(c)?c:c.split(" ");for(var d=[],e={},f=0;f<c.length;f++){
var y=c[f],q=a.$$registeredAnimations[y];q&&!e[y]&&(d.push(b.get(q)),e[y]=!0)}return d}var f=X(d);return function(a,b,d,s){function q(){
s.domOperation();f(a,s)}function A(a,b,d,e,f){switch(d){case"animate":b=[b,e.from,e.to,f];break;case"setClass":b=[b,g,M,f];break;case"addClass":
b=[b,g,f];break;case"removeClass":b=[b,M,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Da(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Da(a))return a;
return O}function C(a,b,d,e,f){var g=[];t(e,function(e){var l=e[f];l&&g.push(function(){var e,f,h=!1,g=function(a){h||(h=!0,(f||O)(a),
e.complete(!a))};e=new c({end:function(){g()},cancel:function(){g(!0)}});f=A(l,a,b,d,function(a){g(!1===a)});return e})});return g;
}function v(a,b,d,e,f){var g=C(a,b,d,e,f);if(0===g.length){var k,l;"beforeSetClass"===f?(k=C(a,"removeClass",d,e,"beforeRemoveClass"),
l=C(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(k=C(a,"removeClass",d,e,"removeClass"),l=C(a,"addClass",d,e,"addClass"));
k&&(g=g.concat(k));l&&(g=g.concat(l))}if(0!==g.length)return function(a){var b=[];g.length&&t(g,function(a){b.push(a())});b.length?c.all(b,a):a();
return function(a){t(b,function(b){a?b.cancel():b.end()})}}}var E=!1;3===arguments.length&&ra(d)&&(s=d,d=null);s=oa(s);d||(d=a.attr("class")||"",
s.addClass&&(d+=" "+s.addClass),s.removeClass&&(d+=" "+s.removeClass));var g=s.addClass,M=s.removeClass,x=e(d),H,I;if(x.length){var K,J;
"leave"===b?(J="leave",K="afterLeave"):(J="before"+b.charAt(0).toUpperCase()+b.substr(1),K=b);"enter"!==b&&"move"!==b&&(H=v(a,b,s,x,J));
I=v(a,b,s,x,K)}if(H||I){var m;return{$$willAnimate:!0,end:function(){m?m.end():(E=!0,q(),ha(a,s),m=new c,m.complete(!0));return m;
},start:function(){function b(c){E=!0;q();ha(a,s);m.complete(c)}if(m)return m;m=new c;var d,e=[];H&&e.push(function(a){d=H(a)});e.length?e.push(function(a){
q();a(!0)}):q();I&&e.push(function(a){d=I(a)});m.setHost({end:function(){E||((d||O)(void 0),b(void 0))},cancel:function(){E||((d||O)(!0),
b(!0))}});c.chain(e,b);return m}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");
this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){
if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){t(d,function(a){a.end();
})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e;
}}}else return d(a)}}]}])})(window,window.angular);(function(s,d){"use strict";function J(d){var k=[];w(k,B).chars(d);return k.join("");
}var x=d.$$minErr("$sanitize"),C,k,D,E,p,B,F,G,w;d.module("ngSanitize",[]).provider("$sanitize",function(){function g(a,e){var c={},b=a.split(","),f;
for(f=0;f<b.length;f++)c[e?p(b[f]):b[f]]=!0;return c}function K(a){for(var e={},c=0,b=a.length;c<b;c++){var f=a[c];e[f.name]=f.value;
}return e}function H(a){return a.replace(/&/g,"&amp;").replace(L,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";";
}).replace(M,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I(a){for(;a;){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,c=0,b=e.length;c<b;c++){
var f=e[c],h=f.name.toLowerCase();if("xmlns:ns1"===h||0===h.lastIndexOf("ns1:",0))a.removeAttributeNode(f),c--,b--}(e=a.firstChild)&&I(e);
a=t("nextSibling",a)}}function t(a,e){var c=e[a];if(c&&F.call(e,c))throw x("elclob",e.outerHTML||e.outerText);return c}var y=!1;this.$get=["$$sanitizeUri",function(a){
y&&k(n,z);return function(e){var c=[];G(e,w(c,function(b,c){return!/^unsafe:/.test(a(b,c))}));return c.join("")}}];this.enableSvg=function(a){
return E(a)?(y=a,this):y};C=d.bind;k=d.extend;D=d.forEach;E=d.isDefined;p=d.lowercase;B=d.noop;G=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);
var c=u(a);if(!c)return"";var b=5;do{if(0===b)throw x("uinput");b--;a=c.innerHTML;c=u(a)}while(a!==c.innerHTML);for(b=c.firstChild;b;){
switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),K(b.attributes));break;case 3:e.chars(b.textContent)}var f;if(!(f=b.firstChild)&&(1===b.nodeType&&e.end(b.nodeName.toLowerCase()),
f=t("nextSibling",b),!f))for(;null==f;){b=t("parentNode",b);if(b===c)break;f=t("nextSibling",b);1===b.nodeType&&e.end(b.nodeName.toLowerCase());
}b=f}for(;b=c.firstChild;)c.removeChild(b)};w=function(a,e){var c=!1,b=C(a,a.push);return{start:function(a,h){a=p(a);!c&&A[a]&&(c=a);
c||!0!==n[a]||(b("<"),b(a),D(h,function(c,h){var d=p(h),g="img"===a&&"src"===d||"background"===d;!0!==v[d]||!0===m[d]&&!e(c,g)||(b(" "),
b(h),b('="'),b(H(c)),b('"'))}),b(">"))},end:function(a){a=p(a);c||!0!==n[a]||!0===h[a]||(b("</"),b(a),b(">"));a==c&&(c=!1)},chars:function(a){
c||b(H(a))}}};F=s.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)};var L=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,M=/([^#-~ |!])/g,h=g("area,br,col,hr,img,wbr"),q=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),l=g("rp,rt"),r=k({},l,q),q=k({},q,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),l=k({},l,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),z=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),A=g("script,style"),n=k({},h,q,l,r),m=g("background,cite,href,longdesc,src,xlink:href,xml:base"),r=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),l=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",!0),v=k({},m,l,r),u=function(a,e){
function c(b){b="<remove></remove>"+b;try{var c=(new a.DOMParser).parseFromString(b,"text/html").body;c.firstChild.remove();return c;
}catch(e){}}function b(a){d.innerHTML=a;e.documentMode&&I(d);return d}var h;if(e&&e.implementation)h=e.implementation.createHTMLDocument("inert");else throw x("noinert");
var d=(h.documentElement||h.getDocumentElement()).querySelector("body");d.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>';
return d.querySelector("svg")?(d.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',d.querySelector("svg img")?c:b):function(b){
b="<remove></remove>"+b;try{b=encodeURI(b)}catch(c){return}var e=new a.XMLHttpRequest;e.responseType="document";e.open("GET","data:text/html;charset=utf-8,"+b,!1);
e.send(null);b=e.response.body;b.firstChild.remove();return b}}(s,s.document)}).info({angularVersion:"1.6.9"});d.module("ngSanitize").filter("linky",["$sanitize",function(g){
var k=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,p=/^mailto:/i,s=d.$$minErr("linky"),t=d.isDefined,y=d.isFunction,w=d.isObject,x=d.isString;
return function(d,q,l){function r(a){a&&m.push(J(a))}function z(a,d){var c,b=A(a);m.push("<a ");for(c in b)m.push(c+'="'+b[c]+'" ');
!t(q)||"target"in b||m.push('target="',q,'" ');m.push('href="',a.replace(/"/g,"&quot;"),'">');r(d);m.push("</a>")}if(null==d||""===d)return d;
if(!x(d))throw s("notstring",d);for(var A=y(l)?l:w(l)?function(){return l}:function(){return{}},n=d,m=[],v,u;d=n.match(k);)v=d[0],
d[2]||d[4]||(v=(d[3]?"http://":"mailto:")+v),u=d.index,r(n.substr(0,u)),z(v,d[0].replace(p,"")),n=n.substring(u+d[0].length);r(n);
return g(m.join(""))}}])})(window,window.angular);angular.module("ivpusic.cookie",["ipCookie"]),angular.module("ipCookie",["ng"]).factory("ipCookie",["$document",function(e){
"use strict";return function(){function i(i,t,o){var n,r,s,p,u,a,x,c,d;if(o=o||{},void 0!==t)return t="object"==typeof t?JSON.stringify(t):t+"",
"number"==typeof o.expires&&(d=o.expires,o.expires=new Date,-1===d?o.expires=new Date("Thu, 01 Jan 1970 00:00:00 GMT"):void 0!==o.expirationUnit?"hours"===o.expirationUnit?o.expires.setHours(o.expires.getHours()+d):"minutes"===o.expirationUnit?o.expires.setMinutes(o.expires.getMinutes()+d):"seconds"===o.expirationUnit?o.expires.setSeconds(o.expires.getSeconds()+d):o.expires.setDate(o.expires.getDate()+d):o.expires.setDate(o.expires.getDate()+d)),
e[0].cookie=[encodeURIComponent(i),"=",encodeURIComponent(t),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("");
for(r=[],c=e[0].cookie,c&&(r=c.split("; ")),n={},x=!1,s=0;r.length>s;++s)if(r[s]&&(p=r[s],u=p.indexOf("="),a=p.substring(0,u),t=decodeURIComponent(p.substring(u+1)),
void 0===i||i===a)){try{n[a]=JSON.parse(t)}catch(f){n[a]=t}if(i===a)return n[a];x=!0}return x&&void 0===i?n:void 0}return i.remove=function(e,t){
var o=void 0!==i(e);return o&&(t||(t={}),t.expires=-1,i(e,"",t)),o},i}()}]);var countTo=angular.module("countTo",[]).directive("countTo",["$timeout","$parse",function($timeout,$parse){
return{replace:false,scope:true,link:function(scope,element,attrs){var e=element[0];var num,refreshInterval,duration,steps,step,countTo,increment;
var onCountFinished=attrs.onCountFinished?$parse(attrs.onCountFinished):undefined;var calculate=function(){refreshInterval=30;step=0;
scope.timoutId=null;countTo=parseInt(attrs.countTo)||0;scope.value=parseInt(attrs.value,10)||0;duration=parseFloat(attrs.duration)*1e3||0;
steps=Math.ceil(duration/refreshInterval);increment=(countTo-scope.value)/steps;num=scope.value};var tick=function(){scope.timoutId=$timeout(function(){
num+=increment;step++;if(step>=steps){$timeout.cancel(scope.timoutId);num=countTo;e.textContent=countTo;if(onCountFinished!=null){
onCountFinished(scope)}}else{e.textContent=Math.round(num);tick()}},refreshInterval)};var start=function(){if(scope.timoutId){$timeout.cancel(scope.timoutId);
}calculate();tick()};attrs.$observe("countTo",function(val){if(val){start()}});attrs.$observe("value",function(){start()});return true;
}}}]);(function(module){module.provider("ezfb",function(){var APP_EVENTS_EVENT_NAMES={COMPLETED_REGISTRATION:"fb_mobile_complete_registration",
VIEWED_CONTENT:"fb_mobile_content_view",SEARCHED:"fb_mobile_search",RATED:"fb_mobile_rate",COMPLETED_TUTORIAL:"fb_mobile_tutorial_completion",
ADDED_TO_CART:"fb_mobile_add_to_cart",ADDED_TO_WISHLIST:"fb_mobile_add_to_wishlist",INITIATED_CHECKOUT:"fb_mobile_initiated_checkout",
ADDED_PAYMENT_INFO:"fb_mobile_add_payment_info",ACHIEVED_LEVEL:"fb_mobile_level_achieved",UNLOCKED_ACHIEVEMENT:"fb_mobile_achievement_unlocked",
SPENT_CREDITS:"fb_mobile_spent_credits"},APP_EVENTS_PARAMETER_NAMES={CURRENCY:"fb_currency",REGISTRATION_METHOD:"fb_registration_method",
CONTENT_TYPE:"fb_content_type",CONTENT_ID:"fb_content_id",SEARCH_STRING:"fb_search_string",SUCCESS:"fb_success",MAX_RATING_VALUE:"fb_max_rating_value",
PAYMENT_INFO_AVAILABLE:"fb_payment_info_available",NUM_ITEMS:"fb_num_items",LEVEL:"fb_level",DESCRIPTION:"fb_description"};var NO_CALLBACK=-1;
var _publishedApis={api:[1,2,3],ui:1,getAuthResponse:NO_CALLBACK,getLoginStatus:0,login:0,logout:0,"Event.subscribe":1,"Event.unsubscribe":1,
"XFBML.parse":1,"Canvas.Prefetcher.addStaticResource":NO_CALLBACK,"Canvas.Prefetcher.setCollectionMode":NO_CALLBACK,"Canvas.getPageInfo":0,
"Canvas.hideFlashElement":NO_CALLBACK,"Canvas.scrollTo":NO_CALLBACK,"Canvas.setAutoGrow":NO_CALLBACK,"Canvas.setDoneLoading":0,"Canvas.setSize":NO_CALLBACK,
"Canvas.setUrlHandler":0,"Canvas.showFlashElement":NO_CALLBACK,"Canvas.startTimer":NO_CALLBACK,"Canvas.stopTimer":0,"AppEvents.logEvent":NO_CALLBACK,
"AppEvents.logPurchase":NO_CALLBACK,"AppEvents.activateApp":NO_CALLBACK};var _locale="en_US";var _initParams={status:true,cookie:true,
xfbml:true,version:"v2.6"};var _defaultLoadSDKFunction=["$window","$document","$timeout","ezfbAsyncInit","ezfbLocale",function($window,$document,$timeout,ezfbAsyncInit,ezfbLocale){
(function(d){var insertScript=function(){var js,id="facebook-jssdk",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){
return}js=d.createElement("script");js.id=id;js.async=true;js.src="//connect.facebook.net/"+ezfbLocale+"/sdk.js";ref.parentNode.insertBefore(js,ref);
};$timeout(insertScript,0,false)})($document[0]);$window.fbAsyncInit=ezfbAsyncInit}],_loadSDKFunction=_defaultLoadSDKFunction;var _defaultInitFunction=["$window","ezfbInitParams",function($window,ezfbInitParams){
$window.FB.init(ezfbInitParams)}],_initFunction=_defaultInitFunction;function _config(target,config){if(angular.isObject(config)){
angular.extend(target,config)}else{return angular.copy(target)}}function _proxy(func,context,args){return function(){return func.apply(context,args);
}}return{setInitParams:function(params){_config(_initParams,params)},getInitParams:function(){return _config(_initParams)},setLocale:function(locale){
_locale=locale},getLocale:function(){return _locale},setLoadSDKFunction:function(func){if(angular.isArray(func)||angular.isFunction(func)){
_loadSDKFunction=func}else{throw new Error("Init function type error.")}},getLoadSDKFunction:function(){return _loadSDKFunction},
setInitFunction:function(func){if(angular.isArray(func)||angular.isFunction(func)){_initFunction=func}else{throw new Error("Init function type error.");
}},getInitFunction:function(){return _initFunction},$get:["$window","$q","$document","$parse","$rootScope","$injector","$timeout",function($window,$q,$document,$parse,$rootScope,$injector,$timeout){
var _initReady,_initRenderReady,_ezfb,_savedListeners,_paramsReady,ezfbAsyncInit;_savedListeners={};_paramsReady=$q.defer();if(_initParams.appId||_initFunction!==_defaultInitFunction){
_paramsReady.resolve()}_initReady=$q.defer();_initRenderReady=$q.defer();if(!$document[0].getElementById("fb-root")){$document.find("body").append('<div id="fb-root"></div>');
}ezfbAsyncInit=function(){_paramsReady.promise.then(function(){if(_initParams.xfbml){var onRender=function(){_ezfb.$$xfbmlRendered=true;
$timeout(function(){_initRenderReady.resolve(true)});_ezfb.Event.unsubscribe("xfbml.render",onRender)};_ezfb.Event.subscribe("xfbml.render",onRender);
}else{$timeout(function(){_initRenderReady.resolve(false)})}$injector.invoke(_initFunction,null,{ezfbInitParams:_initParams});_ezfb.$$ready=true;
_initReady.resolve()})};$injector.invoke(_loadSDKFunction,null,{ezfbAsyncInit:ezfbAsyncInit,ezfbLocale:_locale});_ezfb={$$ready:false,
$$xfbmlRendered:false,$ready:function(fn){if(angular.isFunction(fn)){_initReady.promise.then(fn)}return _initReady.promise},$rendered:function(fn){
if(angular.isFunction(fn)){_initRenderReady.promise.then(fn)}return _initRenderReady.promise},init:function(params){_config(_initParams,params);
_paramsReady.resolve()},AppEvents:{EventNames:APP_EVENTS_EVENT_NAMES,ParameterNames:APP_EVENTS_PARAMETER_NAMES}};angular.forEach(_publishedApis,function(cbArgIndex,apiPath){
var getter=$parse(apiPath),setter=getter.assign;setter(_ezfb,function(){var apiCall=_proxy(function(args){var dfd,replaceCallbackAt;
dfd=$q.defer();replaceCallbackAt=function(index){var func,newFunc;func=angular.isFunction(args[index])?args[index]:angular.noop;newFunc=function(){
var funcArgs=Array.prototype.slice.call(arguments);if($rootScope.$$phase){func.apply(null,funcArgs);dfd.resolve.apply(dfd,funcArgs);
}else{$rootScope.$apply(function(){func.apply(null,funcArgs);dfd.resolve.apply(dfd,funcArgs)})}};while(args.length<=index){args.push(null);
}var eventName;if(apiPath==="Event.subscribe"){eventName=args[0];if(angular.isUndefined(_savedListeners[eventName])){_savedListeners[eventName]=[];
}_savedListeners[eventName].push({original:func,wrapped:newFunc})}else if(apiPath==="Event.unsubscribe"){eventName=args[0];if(angular.isArray(_savedListeners[eventName])){
var i,subscribed,l=_savedListeners[eventName].length;for(i=0;i<l;i++){subscribed=_savedListeners[eventName][i];if(subscribed.original===func){
newFunc=subscribed.wrapped;_savedListeners[eventName].splice(i,1);break}}}}args[index]=newFunc};if(cbArgIndex!==NO_CALLBACK){if(angular.isNumber(cbArgIndex)){
replaceCallbackAt(cbArgIndex)}else if(angular.isArray(cbArgIndex)){var i,c;for(i=0;i<cbArgIndex.length;i++){c=cbArgIndex[i];if(args.length==c||args.length==c+1&&angular.isFunction(args[c])){
replaceCallbackAt(c);break}}}}var origFBFunc=getter($window.FB);if(!origFBFunc){throw new Error("Facebook API `FB."+apiPath+"` doesn't exist.");
}origFBFunc.apply($window.FB,args);return dfd.promise},null,[Array.prototype.slice.call(arguments)]);if(apiPath==="getAuthResponse"){
if(angular.isUndefined($window.FB)){throw new Error("`FB` is not ready.")}return $window.FB.getAuthResponse()}else if(cbArgIndex===NO_CALLBACK){
_initReady.promise.then(apiCall)}else{return _initReady.promise.then(apiCall)}})});return _ezfb}]}}).directive("ezfbXfbml",["ezfb","$parse","$compile","$timeout",function(ezfb,$parse,$compile,$timeout){
return{restrict:"EAC",controller:function(){},compile:function(tElm,tAttrs){var _savedHtml=tElm.html();return function postLink(scope,iElm,iAttrs){
var _rendering=true,onrenderExp=iAttrs.onrender,onrenderHandler=function(){if(_rendering){if(onrenderExp){scope.$eval(onrenderExp);
}_rendering=false}};ezfb.XFBML.parse(iElm[0],onrenderHandler);var setter=$parse(iAttrs.ezfbXfbml).assign;scope.$watch(iAttrs.ezfbXfbml,function(val){
if(val){_rendering=true;iElm.html(_savedHtml);$compile(iElm.contents())(scope);$timeout(function(){ezfb.XFBML.parse(iElm[0],onrenderHandler);
});(setter||angular.noop)(scope,false)}},true)}}}}]);var _socialPluginDirectiveConfig={fbLike:["action","colorscheme","href","kidDirectedSite","layout","ref","share","showFaces","width"],
fbShareButton:["href","layout","width"],fbSend:["colorscheme","href","kidDirectedSite","ref"],fbPost:["href","width"],fbFollow:["colorscheme","href","kidDirectedSite","layout","showFaces","width"],
fbComments:["colorscheme","href","mobile","numPosts","orderBy","width"],fbCommentsCount:["href"],fbActivity:["action","appId","colorscheme","filter","header","height","linktarget","maxAge","recommendations","ref","site","width"],
fbRecommendations:["action","appId","colorscheme","header","height","linktarget","maxAge","ref","site","width"],fbRecommendationsBar:["action","href","maxAge","numRecommendations","readTime","ref","side","site","trigger"],
fbLikeBox:["colorscheme","forceWall","header","height","href","showBorder","showFaces","stream","width"],fbFacepile:["action","appId","colorscheme","href","maxRows","size","width"],
fbPage:["href","width","height","hideCover","showFacepile","showPosts"],fbVideo:["href","width","allowfullscreen"],fbAdPreview:["adAccountId","adgroupId","creative","creativeId","adFormat","pageType","targeting","post"],
fbSendToMessenger:["messengerAppId","pageId","ref","color","size"],fbMessengermessageus:["messengerAppId","pageId","color","size"]
};angular.forEach(_socialPluginDirectiveConfig,creatSocialPluginDirective);function creatSocialPluginDirective(availableAttrs,dirName){
var CLASS_WRAP="ezfb-social-plugin-wrap",STYLE_WRAP_SPAN="display: inline-block; width: 0; height: 0; overflow: hidden;";var PLUGINS_WITH_ADAPTIVE_WIDTH=["fbPage","fbComments"];
var _wrap=function($elm){var tmpl='<span class="'+CLASS_WRAP+'" style="'+STYLE_WRAP_SPAN+'">';return $elm.wrap(tmpl).parent()},_wrapAdaptive=function($elm){
var tmpl='<div class="'+CLASS_WRAP+'">';return $elm.wrap(tmpl).parent()},_isWrapped=function($elm){return $elm.parent().hasClass(CLASS_WRAP);
},_unwrap=function($elm){var $parent=$elm.parent();$parent.after($elm).remove();return $elm};module.directive(dirName,["ezfb","$q","$document",function(ezfb,$q,$document){
var _withAdaptiveWidth=PLUGINS_WITH_ADAPTIVE_WIDTH.indexOf(dirName)>=0;var _dirClassName=dirName.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();
return{restrict:"EC",require:"?^ezfbXfbml",compile:function(tElm,tAttrs){tElm.removeClass(_dirClassName);return function postLink(scope,iElm,iAttrs,xfbmlCtrl){
if(xfbmlCtrl){return}var rendering=false,renderId=0;ezfb.$rendered().then(function(){iElm.addClass(_dirClassName);scope.$watch(function(){
var watchList=[];angular.forEach(availableAttrs,function(attrName){watchList.push(iAttrs[attrName])});return watchList},function(v){
var wrapFn;renderId++;if(!rendering){rendering=true;wrapFn=_withAdaptiveWidth?_wrapAdaptive:_wrap;ezfb.XFBML.parse(wrapFn(iElm)[0],genOnRenderHandler(renderId));
}else{ezfb.XFBML.parse(iElm.parent()[0],genOnRenderHandler(renderId))}},true)});iElm.bind("$destroy",function(){if(_isWrapped(iElm)){
_unwrap(iElm)}});function genOnRenderHandler(id){return function(){var onrenderExp;if(rendering&&id===renderId){onrenderExp=iAttrs.onrender;
if(onrenderExp){scope.$eval(onrenderExp)}rendering=false;_unwrap(iElm)}}}}}}}])}})(angular.module("ezfb",[]));!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("angular")):"function"==typeof define&&define.amd?define(["angular"],t):e.angularHttpEtag=t(e.angular);
}(this,function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function n(e,t){return t={exports:{}
},e(t,t.exports),t.exports}function r(){var t=this,n=["createCache","getCache"],r=["setItem","getItem","removeItem","removeAllItems"],o=n.concat(r),c={},i={},a="httpEtagCache",u={
deepCopy:!1,cacheResponseData:!0,cacheService:"$cacheFactory",cacheOptions:{number:25}};t.setDefaultCacheConfig=function(n){return u=e.extend({},u,n),
t},t.getDefaultCacheConfig=function(){return u},t.defineCache=function(n,r){return r=e.extend({},u,r,{id:n}),i[n]=r,t},t.defineCacheServiceAdapter=function(n,r){
if(!r)throw new Error("Missing cache service adapter configuration");if(!r.methods)throw new Error("Missing cache service adapter configuration methods");
return e.forEach(o,function(e){if("function"!=typeof r.methods[e])throw new Error('Expected cache service adapter method "'+e+'" to be a function');
}),c[n]=r,t},t.getCacheServiceAdapter=function(e){return c[e]},t.$get=["$injector",function(o){function u(e){var t=typeof e,n="number"===t||"string"===t&&!!e;
return n?e:a}var f={},s={},l={},p={},d={};return i[a]||t.defineCache(a),e.forEach(c,function(t,r){var c=s[r]=window[r]||o.get(r),i=l[r]={};
e.forEach(n,function(n){i[n]=e.bind({},t.methods[n],c)})}),e.forEach(i,function(t,n){l[t.cacheService].createCache(n,t);var o=p[n]=l[t.cacheService].getCache(n),a=d[n]={},u=c[t.cacheService].config.storesDeepCopies,s=!u&&i[n].deepCopy,h=function(e){
return s?O(e):e};e.forEach(r,function(n){var r,i,u=c[t.cacheService].methods[n];"getItem"===n&&(r=function(e,t,n){var r=u(e,t,n);return r&&h(r.responseData);
},i=function(e,t,n){return h(u(e,t,n))}),"setItem"===n&&(r=function(e,t,n,r){var o=a.$getItem(t);n=h(n),o&&"object"==typeof o?(o.responseData=n,
n=o):n={responseData:n},u(e,t,n,r)},i=function(e,t,n,r){u(e,t,h(n),r)}),a[n]=e.bind({},r||u,o),i&&(a["$"+n]=e.bind({},i,o))}),a.unsetItem=function(e){
a.setItem(e,void 0)},a.expireItem=function(e){var t=a.$getItem(e);delete t.etagHeader,a.$setItem(e,t)},a.getItemCache=function(e){
return f.getItemCache(n,e)},a.info=function(){return i[n]},a.isCache=!0}),f.info=function(){return i},f.getCache=function(e){var t=d[u(e)];
if(t)return t},f.getItemCache=function(t,n){var r=f.getCache(t),o={};if(r){var c=[["set","setItem"],["get","getItem"],["$set","$setItem"],["$get","$getItem"],["unset","unsetItem"],["expire","expireItem"],["remove","removeItem"]];
return e.forEach(c,function(t){o[t[0]]=e.bind({},r[t[1]],n)}),o.info=function e(){var e=r.info();return e.itemKey=n,e},o.isItemCache=!0,
o}},f.purgeCaches=function(){e.forEach(d,function(e){e.removeAllItems()})},f}]}function o(t,n){function r(t){function r(e){var n=e.then,o=e.success;
return e.cached=function(n){return d&&m&&v.cacheResponseData&&n(b,"cached",void 0,t,g),e},e.then=function(t,o,c){function i(e){return t(e,g);
}function a(e){return o(e,g)}var u=n.apply(e,[t?i:void 0,o?a:void 0,c]);return r(u)},a&&g&&(e.success=function(t){var n=u(t,void 0,void 0,void 0,void 0,g);
return o.apply(e,[n])}),e}var i,a=o.useLegacyPromiseExtensions(),l=!!t.etagCache,p=s.indexOf(t.method)>=0,d=l&&p;if(d){var h=c(t);
if(h){var g=n.getItemCache(h.id,h.itemKey);if(!g)throw new Error("No defined ETag caches match specified cache ID");var v=g.info(),m=g.$get(),y=m&&m.etagHeader,b=y&&m.responseData;
t.$$_itemCache=g,y&&(t.headers=e.extend({},t.headers,{"If-None-Match":y}))}}return i=f.apply(f,arguments),r(i),i}function c(e){var t=e.etagCache,n=typeof t,r={};
if("function"===n&&(t=t(e),n=typeof t),"object"===n){var o,c;t.isCache?(o=t.info().id,c=i(e)):t.isItemCache?(o=t.info().id,c=t.info().itemKey):(o=t.id,
c=t.itemKey||i(e)),r.id=o,r.itemKey=c}else if("string"===n)r.id=t,r.itemKey=i(e);else{if(t!==!0)return;r.itemKey=i(e)}return r}function i(e){
var t=e.url,n=a(e.params),r=n&&t.indexOf("?")>0?"&":"?",o=n&&r+n||"";return t+o}function a(t){return t?P(A(t).sort(),function(n){
var r=t[n];return e.isArray(r)?P(r.sort(),function(e){return encodeURIComponent(n)+"="+encodeURIComponent(e)}).join("&"):encodeURIComponent(n)+"="+encodeURIComponent(r);
}).join("&"):""}function u(e){var t=Array.prototype.slice.call(arguments,1);return function(){for(var n=0,r=0;r<t.length&&n<arguments.length;r++)void 0===t[r]&&(t[r]=arguments[n++]);
return e.apply(this,t)}}var f=t,s=["GET","JSONP"];return e.forEach(s,function(t){var n=t.toLowerCase();r[n]=function(n,o){return o=e.extend({},o,{
method:t,url:n}),r.call(f,o)}}),e.forEach(f,function(e,t){r[t]||(r[t]=e)}),r}function c(){function e(e){var t=e.config.$$_itemCache;
if(t){var n=t.info(),r=n.cacheResponseData,o=e.headers().etag,c={};o&&(c.etagHeader=o,r&&(c.responseData=e.data),t.$set(c)),delete e.config.$$_itemCache;
}return e}return{response:e}}function i(t){t.defineCacheServiceAdapter("$cacheFactory",{config:{storesDeepCopies:!1},methods:{createCache:function(e,t,n){
e(t,n)},getCache:function(e,t){return e.get(t)},setItem:function(e,t,n){e.put(t,n)},getItem:function(e,t){return e.get(t)},removeItem:function(e,t){
e.remove(t)},removeAllItems:function(e,t){e.removeAll()}}}).defineCacheServiceAdapter("localStorage",{config:{storesDeepCopies:!0
},methods:{createCache:e.noop,getCache:function(e,t){return t},setItem:function(e,t,n){t=e+":"+t,localStorage.setItem(t,JSON.stringify(n));
},getItem:function(e,t){return t=e+":"+t,JSON.parse(localStorage.getItem(t))},removeItem:function(e,t){t=e+":"+t,localStorage.removeItem(t);
},removeAllItems:function(t,n){var r=t+":";e.forEach(localStorage,function(e,t){0===t.indexOf(r)&&localStorage.removeItem(t)})}}}).defineCacheServiceAdapter("sessionStorage",{
config:{storesDeepCopies:!0},methods:{createCache:e.noop,getCache:function(e,t){return t},setItem:function(e,t,n){t=e+":"+t,sessionStorage.setItem(t,JSON.stringify(n));
},getItem:function(e,t){return t=e+":"+t,JSON.parse(sessionStorage.getItem(t))},removeItem:function(e,t){t=e+":"+t,sessionStorage.removeItem(t);
},removeAllItems:function(t,n){var r=t+":";e.forEach(sessionStorage,function(e,t){0===t.indexOf(r)&&sessionStorage.removeItem(t)});
}}})}e="default"in e?e.default:e;var a=n(function(e,t){function n(e,t){if("[object Array]"!==r.call(e))throw new TypeError("array must be an Array");
var n=void 0,o=void 0,c=void 0;for(n=0,o=e.length;n<o;++n)if(c=e[n],c===t||c!==c&&t!==t)return n;return-1}t.__esModule=!0;var r=Object.prototype.toString,o="undefined"!=typeof Buffer?function(e){
return Buffer.isBuffer(e)}:function(){return!1},c="function"==typeof Object.keys?function(e){return Object.keys(e)}:function(e){var t=typeof e;
if(null===e||"function"!==t&&"object"!==t)throw new TypeError("obj must be an Object");var n=[],r=void 0;for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.push(r);
return n},i="function"==typeof Symbol?function(e){return Object.getOwnPropertySymbols(e)}:function(){return[]};t.getKeys=c,t.getSymbols=i,
t.indexOf=n,t.isBuffer=o}),u=t(a),f=a.isBuffer,s=a.indexOf,l=a.getSymbols,p=a.getKeys,d=Object.freeze({default:u,isBuffer:f,indexOf:s,
getSymbols:l,getKeys:p}),h=n(function(e,n){function r(e,t){var n=c(e);return null!==n?n:o(e,t)}function o(e,t){if("function"!=typeof t)throw new TypeError("customizer is must be a Function");
if("function"==typeof e){var n=String(e);return/^\s*function\s*\S*\([^\)]*\)\s*{\s*\[native code\]\s*}/.test(n)?e:new Function("return "+String(n))();
}var r=a.call(e);if("[object Array]"===r)return[];if("[object Object]"===r&&e.constructor===Object)return{};if("[object Date]"===r)return new Date(e.getTime());
if("[object RegExp]"===r){var o=String(e),c=o.lastIndexOf("/");return new RegExp(o.slice(1,c),o.slice(c+1))}if((0,i.isBuffer)(e)){
var u=new Buffer(e.length);return e.copy(u),u}var f=t(e);return void 0!==f?f:null}function c(e){var t=typeof e;return null!==e&&"object"!==t&&"function"!==t?e:null;
}n.__esModule=!0,n.copyValue=n.copyCollection=n.copy=void 0;var i=t(d),a=Object.prototype.toString;n.copy=r,n.copyCollection=o,n.copyValue=c;
}),g=t(h),v=h.copyValue,m=h.copyCollection,y=h.copy,b=Object.freeze({default:g,copyValue:v,copyCollection:m,copy:y}),I=n(function(e,n){
function r(e){}function o(e){var t=arguments.length<=1||void 0===arguments[1]?r:arguments[1];if(null===e)return null;var n=(0,i.copyValue)(e);
if(null!==n)return n;var o=(0,i.copyCollection)(e,t),a=null!==o?o:e,u=[e],f=[a];return c(e,t,a,u,f)}function c(e,t,n,r,o){if(null===e)return null;
var u=(0,i.copyValue)(e);if(null!==u)return u;var f=(0,a.getKeys)(e).concat((0,a.getSymbols)(e)),s=void 0,l=void 0,p=void 0,d=void 0,h=void 0,g=void 0,v=void 0,m=void 0;
for(s=0,l=f.length;s<l;++s)p=f[s],d=e[p],h=(0,a.indexOf)(r,d),g=void 0,v=void 0,m=void 0,h===-1?(g=(0,i.copy)(d,t),v=null!==g?g:d,
null!==d&&/^(?:function|object)$/.test(typeof d)&&(r.push(d),o.push(v))):m=o[h],n[p]=m||c(d,t,v,r,o);return n}n.__esModule=!0;var i=t(b),a=t(d);
n.default=o,e.exports=n.default}),C=t(I),j=Object.freeze({default:C}),S=n(function(e){e.exports=t(j)}),O=t(S),$=n(function(e){var t=Object.prototype.toString;
e.exports=function(e){var n=t.call(e),r="[object Arguments]"===n;return r||(r="[object Array]"!==n&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===t.call(e.callee)),
r}}),w=t($),E=Object.freeze({default:w}),x=n(function(e){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Array.prototype.slice,c=t(E),i=Object.prototype.propertyIsEnumerable,a=!i.call({
toString:null},"toString"),u=i.call(function(){},"prototype"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=function(e){
var t=e.constructor;return t&&t.prototype===e},l={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,
$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,
$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},p=function(){if("undefined"==typeof window)return!1;for(var e in window)try{
if(!l["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{s(window[e])}catch(e){return!0}}catch(e){return!0;
}return!1}(),d=function(e){if("undefined"==typeof window||!p)return s(e);try{return s(e)}catch(e){return!1}},h=function(e){var t=null!==e&&"object"==typeof e,o="[object Function]"===r.call(e),i=c(e),s=t&&"[object String]"===r.call(e),l=[];
if(!t&&!o&&!i)throw new TypeError("Object.keys called on a non-object");var p=u&&o;if(s&&e.length>0&&!n.call(e,0))for(var h=0;h<e.length;++h)l.push(String(h));
if(i&&e.length>0)for(var g=0;g<e.length;++g)l.push(String(g));else for(var v in e)p&&"prototype"===v||!n.call(e,v)||l.push(String(v));
if(a)for(var m=d(e),y=0;y<f.length;++y)m&&"constructor"===f[y]||!n.call(e,f[y])||l.push(f[y]);return l};h.shim=function(){if(Object.keys){
var e=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!e){var t=Object.keys;Object.keys=function(e){return t(c(e)?o.call(e):e);
}}}else Object.keys=h;return Object.keys||h},e.exports=h}),A=t(x),D=n(function(e){e.exports=function(e,n){if(e.map)return e.map(n);
for(var r=[],o=0;o<e.length;o++){var c=e[o];t.call(e,o)&&r.push(n(c,o,e))}return r};var t=Object.prototype.hasOwnProperty}),P=t(D);
o.$inject=["$delegate","httpEtag"],i.$inject=["httpEtagProvider"];var k,K=e.module("http-etag",[]).provider("httpEtag",r).config(i).config(["$provide","$httpProvider",function(e,t){
k=e,t.interceptors.push(c),o.useLegacyPromiseExtensions=t.useLegacyPromiseExtensions||function(){return!0}}]).run(function(){k.decorator("$http",o);
}).name;return K});angular.module("angularLazyImg",[]),angular.module("angularLazyImg").factory("LazyImgMagic",["$window","$rootScope","lazyImgConfig","lazyImgHelpers",function(n,e,t,o){
"use strict";function i(){for(var n=h.length-1;n>=0;n--){var e=h[n];e&&o.isElementInView(e.$elem[0],y.offset,f)&&(u(e),h.splice(n,1));
}0===h.length&&a()}function r(n){z.forEach(function(e){e[n]("scroll",p),e[n]("touchmove",p)}),m[n]("resize",p),m[n]("resize",I)}function s(){
d=!0,setTimeout(function(){i(),r("on")},1)}function a(){d=!1,r("off")}function c(n){var e=h.indexOf(n);-1!==e&&h.splice(e,1)}function u(n){
var t=new Image;t.onerror=function(){y.errorClass&&n.$elem.addClass(y.errorClass),e.$emit("lazyImg:error",n),y.onError(n)},t.onload=function(){
l(n.$elem,n.src),y.successClass&&n.$elem.addClass(y.successClass),e.$emit("lazyImg:success",n),y.onSuccess(n)},t.src=n.src}function l(n,e){
"img"===n[0].nodeName.toLowerCase()?n[0].src=e:n.css("background-image",'url("'+e+'")')}function g(n){this.$elem=n}var f,m,h,d,y,p,I,z;
return h=[],d=!1,y=t.getOptions(),m=angular.element(n),f=o.getWinDimensions(),I=o.throttle(function(){f=o.getWinDimensions()},60),
z=[y.container||m],p=o.throttle(i,30),g.prototype.setSource=function(n){this.src=n,h.unshift(this),d||s()},g.prototype.removeImage=function(){
c(this),0===h.length&&a()},g.prototype.checkImages=function(){i()},g.addContainer=function(n){a(),z.push(n),s()},g.removeContainer=function(n){
a(),z.splice(z.indexOf(n),1),s()},g}]),angular.module("angularLazyImg").provider("lazyImgConfig",function(){"use strict";this.options={
offset:100,errorClass:null,successClass:null,onError:function(){},onSuccess:function(){}},this.$get=function(){var n=this.options;
return{getOptions:function(){return n}}},this.setOptions=function(n){angular.extend(this.options,n)}}),angular.module("angularLazyImg").factory("lazyImgHelpers",["$window",function(n){
"use strict";function e(){return{height:n.innerHeight,width:n.innerWidth}}function t(n,e,t){var o=n.getBoundingClientRect(),i=t.height+e;
return o.left>=0&&o.right<=t.width+e&&(o.top>=0&&o.top<=i||o.bottom<=i&&o.bottom>=0-e)}function o(n,e,t){var o,i;return function(){
var r=t||this,s=+new Date,a=arguments;o&&o+e>s?(clearTimeout(i),i=setTimeout(function(){o=s,n.apply(r,a)},e)):(o=s,n.apply(r,a))};
}return{isElementInView:t,getWinDimensions:e,throttle:o}}]),angular.module("angularLazyImg").directive("lazyImg",["$rootScope","LazyImgMagic",function(n,e){
"use strict";function t(t,o,i){var r=new e(o);i.$observe("lazyImg",function(n){n&&r.setSource(n)}),t.$on("$destroy",function(){r.removeImage();
}),n.$on("lazyImg.runCheck",function(){r.checkImages()}),n.$on("lazyImg:refresh",function(){r.checkImages()})}return{link:t,restrict:"A"
}}]).directive("lazyImgContainer",["LazyImgMagic",function(n){"use strict";function e(e,t){n.addContainer(t),e.$on("$destroy",function(){
n.removeContainer(t)})}return{link:e,restrict:"A"}}]);(function(){"use strict";angular.module("angularLoad",[]).service("angularLoad",["$document","$q","$timeout",function($document,$q,$timeout){
var document=$document[0];function loader(createElement){var promises={};return function(url,attributes){if(typeof promises[url]==="undefined"){
var deferred=$q.defer();var element=createElement(url,attributes);element.onload=element.onreadystatechange=function(e){$timeout(function(){
deferred.resolve(e)})};element.onerror=function(e){$timeout(function(){deferred.reject(e)})};promises[url]=deferred.promise}return promises[url];
}}this.loadScript=loader(function(src,attributes){var script=document.createElement("script");script.type="text/javascript";script.src=src;
if(attributes){Object.keys(attributes).forEach(function(key){script.setAttribute(key,attributes[key])})}document.body.appendChild(script);
return script});this.loadCSS=loader(function(href){var style=document.createElement("link");style.rel="stylesheet";style.type="text/css";
style.href=href;document.head.appendChild(style);return style})}])})();(function(){"use strict";var module=angular.module("smoothScroll",[]);
var smoothScroll=function(element,options){options=options||{};var duration=options.duration||800,offset=options.offset||0,easing=options.easing||"easeInOutQuart",callbackBefore=options.callbackBefore||function(){},callbackAfter=options.callbackAfter||function(){},container=document.getElementById(options.containerId)||null,containerPresent=container!=undefined&&container!=null;
var getScrollLocation=function(){if(containerPresent){return container.scrollTop}else{if(window.pageYOffset){return window.pageYOffset;
}else{return document.documentElement.scrollTop}}};var getEasingPattern=function(type,time){switch(type){case"easeInQuad":return time*time;
case"easeOutQuad":return time*(2-time);case"easeInOutQuad":return time<.5?2*time*time:-1+(4-2*time)*time;case"easeInCubic":return time*time*time;
case"easeOutCubic":return--time*time*time+1;case"easeInOutCubic":return time<.5?4*time*time*time:(time-1)*(2*time-2)*(2*time-2)+1;
case"easeInQuart":return time*time*time*time;case"easeOutQuart":return 1- --time*time*time*time;case"easeInOutQuart":return time<.5?8*time*time*time*time:1-8*--time*time*time*time;
case"easeInQuint":return time*time*time*time*time;case"easeOutQuint":return 1+--time*time*time*time*time;case"easeInOutQuint":return time<.5?16*time*time*time*time*time:1+16*--time*time*time*time*time;
default:return time}};var getEndLocation=function(element){var location=0;if(element.offsetParent){do{location+=element.offsetTop;
element=element.offsetParent}while(element)}location=Math.max(location-offset,0);return location};setTimeout(function(){var currentLocation=null,startLocation=getScrollLocation(),endLocation=getEndLocation(element),timeLapsed=0,distance=endLocation-startLocation,percentage,position,scrollHeight,internalHeight;
var stopAnimation=function(){currentLocation=getScrollLocation();if(containerPresent){scrollHeight=container.scrollHeight;internalHeight=container.clientHeight+currentLocation;
}else{scrollHeight=document.body.scrollheight;internalHeight=window.innerHeight+currentLocation}if(position==endLocation||currentLocation==endLocation||internalHeight>=scrollHeight){
clearInterval(runAnimation);callbackAfter(element)}};var animateScroll=function(){timeLapsed+=16;percentage=timeLapsed/duration;percentage=percentage>1?1:percentage;
position=startLocation+distance*getEasingPattern(easing,percentage);if(containerPresent){container.scrollTop=position}else{window.scrollTo(0,position);
}stopAnimation()};callbackBefore(element);var runAnimation=setInterval(animateScroll,16)},0)};module.factory("smoothScroll",function(){
return smoothScroll});module.directive("smoothScroll",["smoothScroll",function(smoothScroll){return{restrict:"A",scope:{callbackBefore:"&",
callbackAfter:"&"},link:function($scope,$elem,$attrs){if(typeof $attrs.scrollIf==="undefined"||$attrs.scrollIf==="true"){setTimeout(function(){
var callbackBefore=function(element){if($attrs.callbackBefore){var exprHandler=$scope.callbackBefore({element:element});if(typeof exprHandler==="function"){
exprHandler(element)}}};var callbackAfter=function(element){if($attrs.callbackAfter){var exprHandler=$scope.callbackAfter({element:element
});if(typeof exprHandler==="function"){exprHandler(element)}}};smoothScroll($elem[0],{duration:$attrs.duration,offset:$attrs.offset,
easing:$attrs.easing,callbackBefore:callbackBefore,callbackAfter:callbackAfter,containerId:$attrs.containerId})},0)}}}}]);module.directive("scrollTo",["smoothScroll",function(smoothScroll){
return{restrict:"A",scope:{callbackBefore:"&",callbackAfter:"&"},link:function($scope,$elem,$attrs){var targetElement;$elem.on("click",function(e){
e.preventDefault();targetElement=document.getElementById($attrs.scrollTo);if(!targetElement)return;var callbackBefore=function(element){
if($attrs.callbackBefore){var exprHandler=$scope.callbackBefore({element:element});if(typeof exprHandler==="function"){exprHandler(element);
}}};var callbackAfter=function(element){if($attrs.callbackAfter){var exprHandler=$scope.callbackAfter({element:element});if(typeof exprHandler==="function"){
exprHandler(element)}}};smoothScroll(targetElement,{duration:$attrs.duration,offset:$attrs.offset,easing:$attrs.easing,callbackBefore:callbackBefore,
callbackAfter:callbackAfter,containerId:$attrs.containerId});return false})}}}])})();angular.module("ui.filters",[]).filter("unique",function(){
return function(items,filterOn){if(filterOn===false){return items}if((filterOn||angular.isUndefined(filterOn))&&angular.isArray(items)){
var hashCheck={},newItems=[];var extractValueToCompare=function(item){if(angular.isObject(item)&&angular.isString(filterOn)){return item[filterOn];
}else{return item}};angular.forEach(items,function(item){var valueToCheck,isDuplicate=false;for(var i=0;i<newItems.length;i++){if(angular.equals(extractValueToCompare(newItems[i]),extractValueToCompare(item))){
isDuplicate=true;break}}if(!isDuplicate){newItems.push(item)}});items=newItems}return items}});angular.module("ui.bootstrap.contextMenu",[]).directive("contextMenu",["$parse","$q",function($parse,$q){
var contextMenus=[];var removeContextMenus=function(level){while(contextMenus.length&&(!level||contextMenus.length>level)){contextMenus.pop().remove();
}if(contextMenus.length==0&&$currentContextMenu){$currentContextMenu.remove()}};var $currentContextMenu=null;var renderContextMenu=function($scope,event,options,model,level){
if(!level){level=0}if(!$){var $=angular.element}$(event.currentTarget).addClass("context");var $contextMenu=$("<div>");if($currentContextMenu){
$contextMenu=$currentContextMenu}else{$currentContextMenu=$contextMenu}$contextMenu.addClass("dropdown clearfix");var $ul=$("<ul>");
$ul.addClass("dropdown-menu context-menu");$ul.attr({role:"menu"});$ul.css({display:"block",position:"absolute",left:event.pageX+"px",
top:event.pageY+"px","z-index":1e4});var $promises=[];angular.forEach(options,function(item,i){var $li=$("<li>");if(item===null){
$li.addClass("divider")}else{var nestedMenu=angular.isArray(item[1])?item[1]:angular.isArray(item[2])?item[2]:angular.isArray(item[3])?item[3]:null;
var $a=$("<a>");$a.css("padding-right","8px");$a.attr({tabindex:"-1",href:"#"});var text=typeof item[0]=="string"?item[0]:item[0].call($scope,$scope,event,model);
$promise=$q.when(text);$promises.push($promise);$promise.then(function(text){$a.text(text);if(nestedMenu){$a.css("cursor","default");
$a.append($('<strong style="font-family:monospace;font-weight:bold;float:right;">&gt;</strong>'))}});$li.append($a);var enabled=angular.isFunction(item[2])?item[2].call($scope,$scope,event,model,text):true;
if(enabled){var openNestedMenu=function($event){removeContextMenus(level+1);var ev={pageX:event.pageX+$ul[0].offsetWidth-1,pageY:$ul[0].offsetTop+$li[0].offsetTop-3
};renderContextMenu($scope,ev,nestedMenu,model,level+1)};$li.on("click",function($event){$event.preventDefault();$scope.$apply(function(){
if(nestedMenu){openNestedMenu($event)}else{$(event.currentTarget).removeClass("context");removeContextMenus();item[1].call($scope,$scope,event,model,text);
}})});$li.on("mouseover",function($event){$scope.$apply(function(){if(nestedMenu){openNestedMenu($event)}})})}else{$li.on("click",function($event){
$event.preventDefault()});$li.addClass("disabled")}}$ul.append($li)});$contextMenu.append($ul);var height=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);
$contextMenu.css({width:"100%",height:height+"px",position:"absolute",top:0,left:0,zIndex:9999});$(document).find("body").append($contextMenu);
$q.all($promises).then(function(){if(level===0){var topCoordinate=event.pageY;var menuHeight=angular.element($ul[0]).prop("offsetHeight");
var winHeight=event.view.innerHeight;if(topCoordinate>menuHeight&&winHeight-topCoordinate<menuHeight){topCoordinate=event.pageY-menuHeight;
}var leftCoordinate=event.pageX;var menuWidth=angular.element($ul[0]).prop("offsetWidth");var winWidth=event.view.innerWidth;if(leftCoordinate>menuWidth&&winWidth-leftCoordinate<menuWidth){
leftCoordinate=event.pageX-menuWidth}$ul.css({display:"block",position:"absolute",left:leftCoordinate+"px",top:topCoordinate+"px"
})}});$contextMenu.on("mousedown",function(e){if($(e.target).hasClass("dropdown")){$(event.currentTarget).removeClass("context");removeContextMenus();
}}).on("contextmenu",function(event){$(event.currentTarget).removeClass("context");event.preventDefault();removeContextMenus(level);
});$scope.$on("$destroy",function(){removeContextMenus()});contextMenus.push($ul)};return function($scope,element,attrs){element.on("contextmenu",function(event){
event.stopPropagation();$scope.$apply(function(){$scope.event=event[0];var options=$scope.$eval(attrs.contextMenu,{event:event});var model=$scope.$eval(attrs.model);
if(options instanceof Array){event.preventDefault();if(options.length===0){return}renderContextMenu($scope,event,options,model)}else if(options!==false){
throw'"'+attrs.contextMenu+'" not an array'}})})}}]);!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){
return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));
var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="12.0.4",ngFileUpload.service("UploadBase",["$http","$q","$timeout",function(a,b,c){
function d(d){function e(a){j.notify&&j.notify(a),k.progressFunc&&c(function(){k.progressFunc(a)})}function h(a){return null!=d._start&&g?{
loaded:a.loaded+d._start,total:d._file&&d._file.size||a.total,type:a.type,config:d,lengthComputable:!0,target:a.target}:a}function i(){
a(d).then(function(a){g&&d._chunkSize&&!d._finished&&d._file?(e({loaded:d._end,total:d._file&&d._file.size,config:d,type:"progress"
}),f.upload(d,!0)):(d._finished&&delete d._finished,j.resolve(a))},function(a){j.reject(a)},function(a){j.notify(a)})}d.method=d.method||"POST",
d.headers=d.headers||{};var j=d._deferred=d._deferred||b.defer(),k=j.promise;return d.disableProgress||(d.headers.__setXHR_=function(){
return function(a){a&&a.upload&&a.upload.addEventListener&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){
a.config=d,e(h(a))},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e(h(a)))},!1))}}),g?d._chunkSize&&d._end&&!d._finished?(d._start=d._end,
d._end+=d._chunkSize,i()):d.resumeSizeUrl?a.get(d.resumeSizeUrl).then(function(a){d._start=d.resumeSizeResponseReader?d.resumeSizeResponseReader(a.data):parseInt((null==a.data.size?a.data:a.data.size).toString()),
d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):d.resumeSize?d.resumeSize().then(function(a){d._start=a,i();
},function(a){throw a}):(d._chunkSize&&(d._start=0,d._end=d._start+d._chunkSize),i()):i(),k.success=function(a){return k.then(function(b){
a(b.data,b.status,b.headers,d)}),k},k.error=function(a){return k.then(null,function(b){a(b.data,b.status,b.headers,d)}),k},k.progress=function(a){
return k.progressFunc=a,k.then(null,null,function(b){a(b)}),k},k.abort=k.pause=function(){return d.__XHR&&c(function(){d.__XHR.abort();
}),k},k.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(k,arguments),a.apply(k,arguments)}}(d.xhrFn),k},f.promisesCount++,
k["finally"](function(){f.promisesCount--}),k}function e(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}var f=this;
f.promisesCount=0,this.isResumeSupported=function(){return window.Blob&&window.Blob.prototype.slice};var g=this.isResumeSupported();
this.isUploadInProgress=function(){return f.promisesCount>0},this.rename=function(a,b){return a.ngfName=b,a},this.jsonBlob=function(a){
null==a||angular.isString(a)||(a=JSON.stringify(a));var b=new window.Blob([a],{type:"application/json"});return b._ngfBlob=!0,b},
this.json=function(a){return angular.toJson(a)},this.isFile=function(a){return null!=a&&(a instanceof window.Blob||a.flashId&&a.name&&a.size);
},this.upload=function(a,b){function c(b,c){if(b._ngfBlob)return b;if(a._file=a._file||b,null!=a._start&&g){a._end&&a._end>=b.size&&(a._finished=!0,
a._end=b.size);var d=b.slice(a._start,a._end||b.size);return d.name=b.name,d.ngfName=b.ngfName,a._chunkSize&&(c.append("_chunkSize",a._chunkSize),
c.append("_currentChunkSize",a._end-a._start),c.append("_chunkNumber",Math.floor(a._start/a._chunkSize)),c.append("_totalSize",a._file.size)),
d}return b}function h(b,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))b.append(e,d);else if(f.isFile(d)){
var g=c(d,b),i=e.split(",");i[1]&&(g.ngfName=i[1].replace(/^\s+|\s+$/g,""),e=i[0]),a._fileKey=a._fileKey||e,b.append(e,g,g.ngfName||g.name);
}else if(angular.isObject(d)){if(d.$$ngfCircularDetection)throw"ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: "+e;
d.$$ngfCircularDetection=!0;try{for(var j in d)if(d.hasOwnProperty(j)&&"$$ngfCircularDetection"!==j){var k=null==a.objectKey?"[i]":a.objectKey;
d.length&&parseInt(j)>-1&&(k=null==a.arrayKey?k:a.arrayKey),h(b,d[j],e+k.replace(/[ik]/g,j))}}finally{delete d.$$ngfCircularDetection;
}}else b.append(e,d)}function i(){a._chunkSize=f.translateScalars(a.resumeChunkSize),a._chunkSize=a._chunkSize?parseInt(a._chunkSize.toString()):null,
a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],
a.transformRequest.push(function(b){var c,d=new window.FormData;b=b||a.fields||{},a.file&&(b.file=a.file);for(c in b)if(b.hasOwnProperty(c)){
var e=b[c];a.formDataAppender?a.formDataAppender(d,c,e):h(d,e,c)}return d})}return b||(a=e(a)),a._isDigested||(a._isDigested=!0,i()),
d(a)},this.http=function(b){return b=e(b),b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof window.Blob?b:a.defaults.transformRequest[0].apply(this,arguments);
},b._chunkSize=f.translateScalars(b.resumeChunkSize),b._chunkSize=b._chunkSize?parseInt(b._chunkSize.toString()):null,d(b)},this.translateScalars=function(a){
if(angular.isString(a)){if(a.search(/kb/i)===a.length-2)return parseFloat(1024*a.substring(0,a.length-2));if(a.search(/mb/i)===a.length-2)return parseFloat(1048576*a.substring(0,a.length-2));
if(a.search(/gb/i)===a.length-2)return parseFloat(1073741824*a.substring(0,a.length-2));if(a.search(/b/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));
if(a.search(/s/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/m/i)===a.length-1)return parseFloat(60*a.substring(0,a.length-1));
if(a.search(/h/i)===a.length-1)return parseFloat(3600*a.substring(0,a.length-1))}return a},this.urlToBlob=function(c){var d=b.defer();
return a({url:c,method:"get",responseType:"arraybuffer"}).then(function(a){var b=new Uint8Array(a.data),c=a.headers("content-type")||"image/WebP",e=new window.Blob([b],{
type:c});d.resolve(e)},function(a){d.reject(a)}),d.promise},this.setDefaults=function(a){this.defaults=a||{}},this.defaults={},this.version=ngFileUpload.version;
}]),ngFileUpload.service("Upload",["$parse","$timeout","$compile","$q","UploadExif",function(a,b,c,d,e){function f(a,b,c){var e=[i.emptyPromise()];
return angular.forEach(a,function(d,f){0===d.type.indexOf("image/jpeg")&&i.attrGetter("ngfFixOrientation",b,c,{$file:d})&&e.push(i.happyPromise(i.applyExifRotation(d),d).then(function(b){
a.splice(f,1,b)}))}),d.all(e)}function g(a,b,c){var e=i.attrGetter("ngfResize",b,c);if(!e||!i.isResizeSupported()||!a.length)return i.emptyPromise();
if(!(e instanceof Function))return h(e,a,b,c);var f=d.defer();e(a).then(function(d){h(d,a,b,c).then(function(a){f.resolve(a)},function(a){
f.reject(a)})},function(a){f.reject(a)})}function h(a,b,c,e){function f(d,f){if(0===d.type.indexOf("image")){if(a.pattern&&!i.validatePattern(d,a.pattern))return;
var h=i.resize(d,a.width,a.height,a.quality,a.type,a.ratio,a.centerCrop,function(a,b){return i.attrGetter("ngfResizeIf",c,e,{$width:a,
$height:b,$file:d})},a.restoreExif!==!1);g.push(h),h.then(function(a){b.splice(f,1,a)},function(a){d.$error="resize",d.$errorParam=(a?(a.message?a.message:a)+": ":"")+(d&&d.name);
})}}for(var g=[i.emptyPromise()],h=0;h<b.length;h++)f(b[h],h);return d.all(g)}var i=e;return i.getAttrWithDefaults=function(a,b){
if(null!=a[b])return a[b];var c=i.defaults[b];return null==c?c:angular.isString(c)?c:JSON.stringify(c)},i.attrGetter=function(b,c,d,e){
var f=this.getAttrWithDefaults(c,b);if(!d)return f;try{return e?a(f)(d,e):a(f)(d)}catch(g){if(b.search(/min|max|pattern/i))return f;
throw g}},i.shouldUpdateOn=function(a,b,c){var d=i.attrGetter("ngModelOptions",b,c);return d&&d.updateOn?d.updateOn.split(" ").indexOf(a)>-1:!0;
},i.emptyPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.resolve.apply(a,c)}),a.promise},i.rejectPromise=function(){
var a=d.defer(),c=arguments;return b(function(){a.reject.apply(a,c)}),a.promise},i.happyPromise=function(a,c){var e=d.defer();return a.then(function(a){
e.resolve(a)},function(a){b(function(){throw a}),e.resolve(c)}),e.promise},i.updateModel=function(c,d,e,h,j,k,l){function m(f,g,j,l,m){
d.$$ngfPrevValidFiles=f,d.$$ngfPrevInvalidFiles=g;var n=f&&f.length?f[0]:null,o=g&&g.length?g[0]:null;c&&(i.applyModelValidation(c,f),
c.$setViewValue(m?n:f)),h&&a(h)(e,{$files:f,$file:n,$newFiles:j,$duplicateFiles:l,$invalidFiles:g,$invalidFile:o,$event:k});var p=i.attrGetter("ngfModelInvalid",d);
p&&b(function(){a(p).assign(e,m?o:g)}),b(function(){})}function n(){function a(a,b){return a.name===b.name&&(a.$ngfOrigSize||a.size)===(b.$ngfOrigSize||b.size)&&a.type===b.type;
}function b(b){var c;for(c=0;c<s.length;c++)if(a(b,s[c]))return!0;for(c=0;c<t.length;c++)if(a(b,t[c]))return!0;return!1}if(j){r=[],
u=[];for(var c=0;c<j.length;c++)b(j[c])?u.push(j[c]):r.push(j[c])}}function o(a){return angular.isArray(a)?a:[a]}function p(){w=[],
v=[],angular.forEach(r,function(a){a.$error?v.push(a):w.push(a)})}function q(){function a(){b(function(){m(x?s.concat(w):w,x?t.concat(v):v,j,u,y);
},A&&A.debounce?A.debounce.change||A.debounce:0)}g(z?r:w,d,e).then(function(){z?i.validate(r,s.length,c,d,e).then(function(){p(),
a()}):a()},function(a){throw"Could not resize files "+a})}var r,s,t,u=[],v=[],w=[];s=d.$$ngfPrevValidFiles||[],t=d.$$ngfPrevInvalidFiles||[],
c&&c.$modelValue&&(s=o(c.$modelValue));var x=i.attrGetter("ngfKeep",d,e);r=(j||[]).slice(0),("distinct"===x||i.attrGetter("ngfKeepDistinct",d,e)===!0)&&n(d,e);
var y=!x&&!i.attrGetter("ngfMultiple",d,e)&&!i.attrGetter("multiple",d);if(!x||r.length){i.attrGetter("ngfBeforeModelChange",d,e,{
$files:j,$file:j&&j.length?j[0]:null,$newFiles:r,$duplicateFiles:u,$event:k});var z=i.attrGetter("ngfValidateAfterResize",d,e),A=i.attrGetter("ngModelOptions",d,e);
i.validate(r,s.length,c,d,e).then(function(){l?m(r,[],j,u,y):(A&&A.allowInvalid||z?w=r:p(),i.attrGetter("ngfFixOrientation",d,e)&&i.isExifSupported()?f(w,d,e).then(function(){
q()}):q())})}},i}]),ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile","Upload",function(a,b,c,d){function e(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);
if(b&&b.length>2){var c=d.defaults.androidFixMinorVersion||4;return parseInt(b[1])<4||parseInt(b[1])===c&&parseInt(b[2])<c}return-1===a.indexOf("Chrome")&&/.*Windows.*Safari.*/.test(a);
}function f(a,b,c,d,f,h,i,j){function k(){return"input"===b[0].tagName.toLowerCase()&&c.type&&"file"===c.type.toLowerCase()}function l(){
return t("ngfChange")||t("ngfSelect")}function m(b){if(j.shouldUpdateOn("change",c,a)){for(var e=b.__files_||b.target&&b.target.files,f=[],g=0;g<e.length;g++)f.push(e[g]);
j.updateModel(d,c,a,l(),f.length?f:null,b)}}function n(a){if(b!==a)for(var c=0;c<b[0].attributes.length;c++){var d=b[0].attributes[c];
"type"!==d.name&&"class"!==d.name&&"style"!==d.name&&((null==d.value||""===d.value)&&("required"===d.name&&(d.value="required"),"multiple"===d.name&&(d.value="multiple")),
a.attr(d.name,"id"===d.name?"ngf-"+d.value:d.value))}}function o(){if(k())return b;var a=angular.element('<input type="file">');n(a);
var c=angular.element("<label>upload</label>");return c.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),
g.push({el:b,ref:c}),document.body.appendChild(c.append(a)[0]),a}function p(c){if(b.attr("disabled"))return!1;if(!t("ngfSelectDisabled",a)){
var d=q(c);if(null!=d)return d;r(c);try{k()||document.body.contains(w[0])||(g.push({el:b,ref:w.parent()}),document.body.appendChild(w.parent()[0]),
w.bind("change",m))}catch(f){}return e(navigator.userAgent)?setTimeout(function(){w[0].click()},0):w[0].click(),!1}}function q(a){
var b=a.changedTouches||a.originalEvent&&a.originalEvent.changedTouches;if("touchstart"===a.type)return v=b?b[0].clientY:0,!0;if(a.stopPropagation(),
a.preventDefault(),"touchend"===a.type){var c=b?b[0].clientY:0;if(Math.abs(c-v)>20)return!1}}function r(b){j.shouldUpdateOn("click",c,a)&&w.val()&&(w.val(null),
j.updateModel(d,c,a,l(),null,b,!0))}function s(a){if(w&&!w.attr("__ngf_ie10_Fix_")){if(!w[0].parentNode)return void(w=null);a.preventDefault(),
a.stopPropagation(),w.unbind("click");var b=w.clone();return w.replaceWith(b),w=b,w.attr("__ngf_ie10_Fix_","true"),w.bind("change",m),
w.bind("click",s),w[0].click(),!1}w.removeAttr("__ngf_ie10_Fix_")}var t=function(a,b){return j.attrGetter(a,c,b)};j.registerModelChangeValidator(d,c,a);
var u=[];u.push(a.$watch(t("ngfMultiple"),function(){w.attr("multiple",t("ngfMultiple",a))})),u.push(a.$watch(t("ngfCapture"),function(){
w.attr("capture",t("ngfCapture",a))})),u.push(a.$watch(t("ngfAccept"),function(){w.attr("accept",t("ngfAccept",a))})),c.$observe("accept",function(){
w.attr("accept",t("accept"))}),u.push(function(){c.$$observers&&delete c.$$observers.accept});var v=0,w=b;k()||(w=o()),w.bind("change",m),
k()?b.bind("click",r):b.bind("click touchstart touchend",p),-1!==navigator.appVersion.indexOf("MSIE 10")&&w.bind("click",s),d&&d.$formatters.push(function(a){
return(null==a||0===a.length)&&w.val()&&w.val(null),a}),a.$on("$destroy",function(){k()||w.parent().remove(),angular.forEach(u,function(a){
a()})}),h(function(){for(var a=0;a<g.length;a++){var b=g[a];document.body.contains(b.el[0])||(g.splice(a,1),b.ref.remove())}}),window.FileAPI&&window.FileAPI.ngfFixIE&&window.FileAPI.ngfFixIE(b,w,m);
}var g=[];return{restrict:"AEC",require:"?ngModel",link:function(e,g,h,i){f(e,g,h,i,a,b,c,d)}}}]),function(){function a(a){return"img"===a.tagName.toLowerCase()?"image":"audio"===a.tagName.toLowerCase()?"audio":"video"===a.tagName.toLowerCase()?"video":/./;
}function b(b,c,d,e,f,g,h,i){function j(a){var g=b.attrGetter("ngfNoObjectUrl",f,d);b.dataUrl(a,g)["finally"](function(){c(function(){
var b=(g?a.$ngfDataUrl:a.$ngfBlobUrl)||a.$ngfDataUrl;i?e.css("background-image","url('"+(b||"")+"')"):e.attr("src",b),b?e.removeClass("ng-hide"):e.addClass("ng-hide");
})})}c(function(){var c=d.$watch(f[g],function(c){var d=h;if("ngfThumbnail"===g&&(d||(d={width:e[0].clientWidth,height:e[0].clientHeight
}),0===d.width&&window.getComputedStyle)){var f=getComputedStyle(e[0]);d={width:parseInt(f.width.slice(0,-2)),height:parseInt(f.height.slice(0,-2))
}}return angular.isString(c)?(e.removeClass("ng-hide"),i?e.css("background-image","url('"+c+"')"):e.attr("src",c)):void(!c||!c.type||0!==c.type.search(a(e[0]))||i&&0!==c.type.indexOf("image")?e.addClass("ng-hide"):d&&b.isResizeSupported()?b.resize(c,d.width,d.height,d.quality).then(function(a){
j(a)},function(a){throw a}):j(c))});d.$on("$destroy",function(){c()})})}ngFileUpload.service("UploadDataUrl",["UploadBase","$timeout","$q",function(a,b,c){
var d=a;return d.base64DataUrl=function(a){if(angular.isArray(a)){var b=c.defer(),e=0;return angular.forEach(a,function(c){d.dataUrl(c,!0)["finally"](function(){
if(e++,e===a.length){var c=[];angular.forEach(a,function(a){c.push(a.$ngfDataUrl)}),b.resolve(c,a)}})}),b.promise}return d.dataUrl(a,!0);
},d.dataUrl=function(a,e){if(!a)return d.emptyPromise(a,a);if(e&&null!=a.$ngfDataUrl||!e&&null!=a.$ngfBlobUrl)return d.emptyPromise(e?a.$ngfDataUrl:a.$ngfBlobUrl,a);
var f=e?a.$$ngfDataUrlPromise:a.$$ngfBlobUrlPromise;if(f)return f;var g=c.defer();return b(function(){if(window.FileReader&&a&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||a.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||a.size<4e6)){
var c=window.URL||window.webkitURL;if(c&&c.createObjectURL&&!e){var f;try{f=c.createObjectURL(a)}catch(h){return void b(function(){
a.$ngfBlobUrl="",g.reject()})}b(function(){if(a.$ngfBlobUrl=f,f){g.resolve(f,a),d.blobUrls=d.blobUrls||[],d.blobUrlsTotalSize=d.blobUrlsTotalSize||0,
d.blobUrls.push({url:f,size:a.size}),d.blobUrlsTotalSize+=a.size||0;for(var b=d.defaults.blobUrlsMaxMemory||268435456,e=d.defaults.blobUrlsMaxQueueSize||200;(d.blobUrlsTotalSize>b||d.blobUrls.length>e)&&d.blobUrls.length>1;){
var h=d.blobUrls.splice(0,1)[0];c.revokeObjectURL(h.url),d.blobUrlsTotalSize-=h.size}}})}else{var i=new FileReader;i.onload=function(c){
b(function(){a.$ngfDataUrl=c.target.result,g.resolve(c.target.result,a),b(function(){delete a.$ngfDataUrl},1e3)})},i.onerror=function(){
b(function(){a.$ngfDataUrl="",g.reject()})},i.readAsDataURL(a)}}else b(function(){a[e?"$ngfDataUrl":"$ngfBlobUrl"]="",g.reject()});
}),f=e?a.$$ngfDataUrlPromise=g.promise:a.$$ngfBlobUrlPromise=g.promise,f["finally"](function(){delete a[e?"$$ngfDataUrlPromise":"$$ngfBlobUrlPromise"];
}),f},d}]),ngFileUpload.directive("ngfSrc",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfSrc",a.attrGetter("ngfResize",f,d),!1);
}}}]),ngFileUpload.directive("ngfBackground",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfBackground",a.attrGetter("ngfResize",f,d),!0);
}}}]),ngFileUpload.directive("ngfThumbnail",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){var g=a.attrGetter("ngfSize",f,d);
b(a,c,d,e,f,"ngfThumbnail",g,a.attrGetter("ngfAsBackground",f,d))}}}]),ngFileUpload.config(["$compileProvider",function(a){a.imgSrcSanitizationWhitelist&&a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/),
a.aHrefSanitizationWhitelist&&a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/)}]),ngFileUpload.filter("ngfDataUrl",["UploadDataUrl","$sce",function(a,b){
return function(c,d,e){if(angular.isString(c))return b.trustAsResourceUrl(c);var f=c&&((d?c.$ngfDataUrl:c.$ngfBlobUrl)||c.$ngfDataUrl);
return c&&!f?(!c.$ngfDataUrlFilterInProgress&&angular.isObject(c)&&(c.$ngfDataUrlFilterInProgress=!0,a.dataUrl(c,d)),""):(c&&delete c.$ngfDataUrlFilterInProgress,
(c&&f?e?b.trustAsResourceUrl(f):f:c)||"")}}])}(),ngFileUpload.service("UploadValidate",["UploadDataUrl","$q","$timeout",function(a,b,c){
function d(a){var b="",c=[];if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])b=a.substring(1,a.length-1);else{var e=a.split(",");if(e.length>1)for(var f=0;f<e.length;f++){
var g=d(e[f]);g.regexp?(b+="("+g.regexp+")",f<e.length-1&&(b+="|")):c=c.concat(g.excludes)}else 0===a.indexOf("!")?c.push("^((?!"+d(a.substring(1)).regexp+").)*$"):(0===a.indexOf(".")&&(a="*"+a),
b="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",b=b.replace(/\\\*/g,".*").replace(/\\\?/g,"."))}return{
regexp:b,excludes:c}}function e(a,b){null==b||a.$dirty||(a.$setDirty?a.$setDirty():a.$dirty=!0)}var f=a;return f.validatePattern=function(a,b){
if(!b)return!0;var c=d(b),e=!0;if(c.regexp&&c.regexp.length){var f=new RegExp(c.regexp,"i");e=null!=a.type&&f.test(a.type)||null!=a.name&&f.test(a.name);
}for(var g=c.excludes.length;g--;){var h=new RegExp(c.excludes[g],"i");e=e&&(null==a.type||h.test(a.type))&&(null==a.name||h.test(a.name));
}return e},f.ratioToFloat=function(a){var b=a.toString(),c=b.search(/[x:]/i);return b=c>-1?parseFloat(b.substring(0,c))/parseFloat(b.substring(c+1)):parseFloat(b);
},f.registerModelChangeValidator=function(a,b,c){a&&a.$formatters.push(function(d){a.$dirty&&(d&&!angular.isArray(d)&&(d=[d]),f.validate(d,0,a,b,c).then(function(){
f.applyModelValidation(a,d)}))})},f.applyModelValidation=function(a,b){e(a,b),angular.forEach(a.$ngfValidations,function(b){a.$setValidity(b.name,b.valid);
})},f.getValidationAttr=function(a,b,c,d,e){var g="ngf"+c[0].toUpperCase()+c.substr(1),h=f.attrGetter(g,a,b,{$file:e});if(null==h&&(h=f.attrGetter("ngfValidate",a,b,{
$file:e}))){var i=(d||c).split(".");h=h[i[0]],i.length>1&&(h=h&&h[i[1]])}return h},f.validate=function(a,c,d,e,g){function h(b,c,h){
if(a){for(var i=a.length,j=null;i--;){var k=a[i];if(k){var l=f.getValidationAttr(e,g,b,c,k);null!=l&&(h(k,l,i)||(k.$error=b,(k.$errorMessages=k.$errorMessages||{})[b]=!0,
k.$errorParam=l,a.splice(i,1),j=!1))}}null!==j&&d.$ngfValidations.push({name:b,valid:j})}}function i(c,h,i,k,l){function m(a,b,d){
null!=d?k(b,d).then(function(e){l(e,d)?a.resolve():(b.$error=c,(b.$errorMessages=b.$errorMessages||{})[c]=!0,b.$errorParam=d,a.reject());
},function(){j("ngfValidateForce",{$file:b})?(b.$error=c,(b.$errorMessages=b.$errorMessages||{})[c]=!0,b.$errorParam=d,a.reject()):a.resolve();
}):a.resolve()}var n=[f.emptyPromise()];return a?(a=void 0===a.length?[a]:a,angular.forEach(a,function(a){var d=b.defer();return n.push(d.promise),
!i||null!=a.type&&0===a.type.search(i)?void("dimensions"===c&&null!=f.attrGetter("ngfDimensions",e)?f.imageDimensions(a).then(function(b){
m(d,a,j("ngfDimensions",{$file:a,$width:b.width,$height:b.height}))},function(){d.reject()}):"duration"===c&&null!=f.attrGetter("ngfDuration",e)?f.mediaDuration(a).then(function(b){
m(d,a,j("ngfDuration",{$file:a,$duration:b}))},function(){d.reject()}):m(d,a,f.getValidationAttr(e,g,c,h,a))):void d.resolve()}),
b.all(n).then(function(){d.$ngfValidations.push({name:c,valid:!0})},function(){d.$ngfValidations.push({name:c,valid:!1})})):void 0;
}d=d||{},d.$ngfValidations=d.$ngfValidations||[],angular.forEach(d.$ngfValidations,function(a){a.valid=!0});var j=function(a,b){return f.attrGetter(a,e,g,b);
};if(null==a||0===a.length)return f.emptyPromise(d);a=void 0===a.length?[a]:a.slice(0),h("maxFiles",null,function(a,b,d){return b>c+d;
}),h("pattern",null,f.validatePattern),h("minSize","size.min",function(a,b){return a.size+.1>=f.translateScalars(b)}),h("maxSize","size.max",function(a,b){
return a.size-.1<=f.translateScalars(b)});var k=0;if(h("maxTotalSize",null,function(b,c){return k+=b.size,k>f.translateScalars(c)?(a.splice(0,a.length),
!1):!0}),h("validateFn",null,function(a,b){return b===!0||null===b||""===b}),!a.length)return f.emptyPromise(d,d.$ngfValidations);
var l=b.defer(),m=[];return m.push(f.happyPromise(i("maxHeight","height.max",/image/,this.imageDimensions,function(a,b){return a.height<=b;
}))),m.push(f.happyPromise(i("minHeight","height.min",/image/,this.imageDimensions,function(a,b){return a.height>=b}))),m.push(f.happyPromise(i("maxWidth","width.max",/image/,this.imageDimensions,function(a,b){
return a.width<=b}))),m.push(f.happyPromise(i("minWidth","width.min",/image/,this.imageDimensions,function(a,b){return a.width>=b;
}))),m.push(f.happyPromise(i("dimensions",null,/image/,function(a,b){return f.emptyPromise(b)},function(a){return a}))),m.push(f.happyPromise(i("ratio",null,/image/,this.imageDimensions,function(a,b){
for(var c=b.toString().split(","),d=!1,e=0;e<c.length;e++)Math.abs(a.width/a.height-f.ratioToFloat(c[e]))<1e-4&&(d=!0);return d}))),
m.push(f.happyPromise(i("maxRatio","ratio.max",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)<1e-4;
}))),m.push(f.happyPromise(i("minRatio","ratio.min",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)>-1e-4;
}))),m.push(f.happyPromise(i("maxDuration","duration.max",/audio|video/,this.mediaDuration,function(a,b){return a<=f.translateScalars(b);
}))),m.push(f.happyPromise(i("minDuration","duration.min",/audio|video/,this.mediaDuration,function(a,b){return a>=f.translateScalars(b);
}))),m.push(f.happyPromise(i("duration",null,/audio|video/,function(a,b){return f.emptyPromise(b)},function(a){return a}))),m.push(f.happyPromise(i("validateAsyncFn",null,null,function(a,b){
return b},function(a){return a===!0||null===a||""===a}))),b.all(m).then(function(){l.resolve(d,d.$ngfValidations)})},f.imageDimensions=function(a){
if(a.$ngfWidth&&a.$ngfHeight){var d=b.defer();return c(function(){d.resolve({width:a.$ngfWidth,height:a.$ngfHeight})}),d.promise}
if(a.$ngfDimensionPromise)return a.$ngfDimensionPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("image")?void e.reject("not image"):void f.dataUrl(a).then(function(b){
function d(){var b=h[0].clientWidth,c=h[0].clientHeight;h.remove(),a.$ngfWidth=b,a.$ngfHeight=c,e.resolve({width:b,height:c})}function f(){
h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].clientWidth?d():i>10?f():g())},1e3)}var h=angular.element("<img>").attr("src",b).css("visibility","hidden").css("position","fixed").css("max-width","none !important").css("max-height","none !important");
h.on("load",d),h.on("error",f);var i=0;g(),angular.element(document.getElementsByTagName("body")[0]).append(h)},function(){e.reject("load error");
})}),a.$ngfDimensionPromise=e.promise,a.$ngfDimensionPromise["finally"](function(){delete a.$ngfDimensionPromise}),a.$ngfDimensionPromise;
},f.mediaDuration=function(a){if(a.$ngfDuration){var d=b.defer();return c(function(){d.resolve(a.$ngfDuration)}),d.promise}if(a.$ngfDurationPromise)return a.$ngfDurationPromise;
var e=b.defer();return c(function(){return 0!==a.type.indexOf("audio")&&0!==a.type.indexOf("video")?void e.reject("not media"):void f.dataUrl(a).then(function(b){
function d(){var b=h[0].duration;a.$ngfDuration=b,h.remove(),e.resolve(b)}function f(){h.remove(),e.reject("load error")}function g(){
c(function(){h[0].parentNode&&(h[0].duration?d():i>10?f():g())},1e3)}var h=angular.element(0===a.type.indexOf("audio")?"<audio>":"<video>").attr("src",b).css("visibility","none").css("position","fixed");
h.on("loadedmetadata",d),h.on("error",f);var i=0;g(),angular.element(document.body).append(h)},function(){e.reject("load error")});
}),a.$ngfDurationPromise=e.promise,a.$ngfDurationPromise["finally"](function(){delete a.$ngfDurationPromise}),a.$ngfDurationPromise;
},f}]),ngFileUpload.service("UploadResize",["UploadValidate","$q",function(a,b){var c=a,d=function(a,b,c,d,e){var f=e?Math.max(c/a,d/b):Math.min(c/a,d/b);
return{width:a*f,height:b*f,marginX:a*f-c,marginY:b*f-d}},e=function(a,e,f,g,h,i,j,k){var l=b.defer(),m=document.createElement("canvas"),n=document.createElement("img");
return n.onload=function(){if(null!=k&&k(n.width,n.height)===!1)return void l.reject("resizeIf");try{if(i){var a=c.ratioToFloat(i),b=n.width/n.height;
a>b?(e=n.width,f=e/a):(f=n.height,e=f*a)}e||(e=n.width),f||(f=n.height);var o=d(n.width,n.height,e,f,j);m.width=Math.min(o.width,e),
m.height=Math.min(o.height,f);var p=m.getContext("2d");p.drawImage(n,Math.min(0,-o.marginX/2),Math.min(0,-o.marginY/2),o.width,o.height),
l.resolve(m.toDataURL(h||"image/WebP",g||.934))}catch(q){l.reject(q)}},n.onerror=function(){l.reject()},n.src=a,l.promise};return c.dataUrltoBlob=function(a,b,c){
for(var d=a.split(","),e=d[0].match(/:(.*?);/)[1],f=atob(d[1]),g=f.length,h=new Uint8Array(g);g--;)h[g]=f.charCodeAt(g);var i=new window.Blob([h],{
type:e});return i.name=b,i.$ngfOrigSize=c,i},c.isResizeSupported=function(){var a=document.createElement("canvas");return window.atob&&a.getContext&&a.getContext("2d")&&window.Blob;
},c.isResizeSupported()&&Object.defineProperty(window.Blob.prototype,"name",{get:function(){return this.$ngfName},set:function(a){
this.$ngfName=a},configurable:!0}),c.resize=function(a,d,f,g,h,i,j,k,l){if(0!==a.type.indexOf("image"))return c.emptyPromise(a);var m=b.defer();
return c.dataUrl(a,!0).then(function(b){e(b,d,f,g,h||a.type,i,j,k).then(function(d){if("image/jpeg"===a.type&&l)try{d=c.restoreExif(b,d);
}catch(e){setTimeout(function(){throw e},1)}try{var f=c.dataUrltoBlob(d,a.name,a.size);m.resolve(f)}catch(e){m.reject(e)}},function(b){
"resizeIf"===b&&m.resolve(a),m.reject(b)})},function(a){m.reject(a)}),m.promise},c}]),function(){function a(a,c,d,e,f,g,h,i,j,k){
function l(){return c.attr("disabled")||r("ngfDropDisabled",a)}function m(b,c){i.updateModel(e,d,a,r("ngfChange")||r("ngfDrop"),b,c);
}function n(b,c){if(!i.shouldUpdateOn(b,d,a)||!c)return i.rejectPromise([]);var e=[];c.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi,function(a,b,c){
e.push(c)});var f=[],g=[];if(e.length){angular.forEach(e,function(a){f.push(i.urlToBlob(a).then(function(a){g.push(a)}))});var h=k.defer();
return k.all(f).then(function(){h.resolve(g)},function(a){h.reject(a)}),h.promise}return i.emptyPromise()}function o(a,b,c,d){var e=r("ngfDragOverClass",a,{
$event:c}),f="dragover";if(angular.isString(e))f=e;else if(e&&(e.delay&&(v=e.delay),e.accept||e.reject)){var g=c.dataTransfer.items;
if(null!=g&&g.length)for(var h=e.pattern||r("ngfPattern",a,{$event:c}),j=g.length;j--;){if(!i.validatePattern(g[j],h)){f=e.reject;
break}f=e.accept}else f=e.accept}d(f)}function p(b,c,e,f){function g(a,b){var c=k.defer();if(null!=a)if(a.isDirectory){var d=[i.emptyPromise()];
if(m){var e={type:"directory"};e.name=e.path=(b||"")+a.name+a.name,n.push(e)}var f=a.createReader(),h=[],p=function(){f.readEntries(function(e){
try{e.length?(h=h.concat(Array.prototype.slice.call(e||[],0)),p()):(angular.forEach(h.slice(0),function(c){n.length<=j&&l>=o&&d.push(g(c,(b?b:"")+a.name+"/"));
}),k.all(d).then(function(){c.resolve()},function(a){c.reject(a)}))}catch(f){c.reject(f)}},function(a){c.reject(a)})};p()}else a.file(function(a){
try{a.path=(b?b:"")+a.name,m&&(a=i.rename(a,a.path)),n.push(a),o+=a.size,c.resolve()}catch(d){c.reject(d)}},function(a){c.reject(a);
});return c.promise}var j=i.getValidationAttr(d,a,"maxFiles")||Number.MAX_VALUE,l=i.getValidationAttr(d,a,"maxTotalSize")||Number.MAX_VALUE,m=r("ngfIncludeDir",a),n=[],o=0,p=[i.emptyPromise()];
if(b&&b.length>0&&"file"!==h.protocol())for(var q=0;q<b.length;q++){if(b[q].webkitGetAsEntry&&b[q].webkitGetAsEntry()&&b[q].webkitGetAsEntry().isDirectory){
var s=b[q].webkitGetAsEntry();if(s.isDirectory&&!e)continue;null!=s&&p.push(g(s))}else{var t=b[q].getAsFile();null!=t&&(n.push(t),
o+=t.size)}if(n.length>j||o>l||!f&&n.length>0)break}else if(null!=c)for(var u=0;u<c.length;u++){var v=c.item(u);if((v.type||v.size>0)&&(n.push(v),
o+=v.size),n.length>j||o>l||!f&&n.length>0)break}var w=k.defer();return k.all(p).then(function(){if(f||m||!n.length)w.resolve(n);else{
for(var a=0;n[a]&&"directory"===n[a].type;)a++;w.resolve([n[a]])}},function(a){w.reject(a)}),w.promise}var q=b(),r=function(a,b,c){
return i.attrGetter(a,d,b,c)};if(r("dropAvailable")&&g(function(){a[r("dropAvailable")]?a[r("dropAvailable")].value=q:a[r("dropAvailable")]=q;
}),!q)return void(r("ngfHideOnDropNotAvailable",a)===!0&&c.css("display","none"));null==r("ngfSelect")&&i.registerModelChangeValidator(e,d,a);
var s,t=null,u=f(r("ngfStopPropagation")),v=1;c[0].addEventListener("dragover",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){
if(b.preventDefault(),u(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var e=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===e||"linkMove"===e?"move":"copy";
}g.cancel(t),s||(s="C",o(a,d,b,function(d){s=d,c.addClass(s),r("ngfDrag",a,{$isDragging:!0,$class:s,$event:b})}))}},!1),c[0].addEventListener("dragenter",function(b){
!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),u(a)&&b.stopPropagation())},!1),c[0].addEventListener("dragleave",function(b){
!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),u(a)&&b.stopPropagation(),t=g(function(){s&&c.removeClass(s),s=null,r("ngfDrag",a,{
$isDragging:!1,$event:b})},v||100))},!1),c[0].addEventListener("drop",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){b.preventDefault(),
u(a)&&b.stopPropagation(),s&&c.removeClass(s),s=null;var e,f=b.dataTransfer.items;try{e=b.dataTransfer&&b.dataTransfer.getData&&b.dataTransfer.getData("text/html");
}catch(g){}p(f,b.dataTransfer.files,r("ngfAllowDir",a)!==!1,r("multiple")||r("ngfMultiple",a)).then(function(a){a.length?m(a,b):n("dropUrl",e).then(function(a){
m(a,b)})})}},!1),c[0].addEventListener("paste",function(b){if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&r("ngfEnableFirefoxPaste",a)&&b.preventDefault(),
!l()&&i.shouldUpdateOn("paste",d,a)){var c=[],e=b.clipboardData||b.originalEvent.clipboardData;if(e&&e.items)for(var f=0;f<e.items.length;f++)-1!==e.items[f].type.indexOf("image")&&c.push(e.items[f].getAsFile());
c.length?m(c,b):n("pasteUrl",e).then(function(a){m(a,b)})}},!1),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&r("ngfEnableFirefoxPaste",a)&&(c.attr("contenteditable",!0),
c.on("keypress",function(a){a.metaKey||a.ctrlKey||a.preventDefault()}))}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a&&!/Edge\/12./i.test(navigator.userAgent);
}ngFileUpload.directive("ngfDrop",["$parse","$timeout","$location","Upload","$http","$q",function(b,c,d,e,f,g){return{restrict:"AEC",
require:"?ngModel",link:function(h,i,j,k){a(h,i,j,k,b,c,d,e,f,g)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){
b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout","Upload",function(a,c,d){return function(e,f,g){
if(b()){var h=a(d.attrGetter("ngfDropAvailable",g));c(function(){h(e),h.assign&&h.assign(e,!0)})}}}])}(),ngFileUpload.service("UploadExif",["UploadResize","$q",function(a,b){
function c(a,b,c,d){switch(b){case 2:return a.transform(-1,0,0,1,c,0);case 3:return a.transform(-1,0,0,-1,c,d);case 4:return a.transform(1,0,0,-1,0,d);
case 5:return a.transform(0,1,1,0,0,0);case 6:return a.transform(0,1,-1,0,d,0);case 7:return a.transform(0,-1,-1,0,d,c);case 8:return a.transform(0,-1,1,0,0,c);
}}function d(a){for(var b="",c=new Uint8Array(a),d=c.byteLength,e=0;d>e;e++)b+=String.fromCharCode(c[e]);return window.btoa(b)}var e=a;
return e.isExifSupported=function(){return window.FileReader&&(new FileReader).readAsArrayBuffer&&e.isResizeSupported()},e.readOrientation=function(a){
var c=b.defer(),d=new FileReader,e=a.slice?a.slice(0,65536):a;return d.readAsArrayBuffer(e),d.onerror=function(a){return c.reject(a);
},d.onload=function(a){var b={orientation:1},d=new DataView(this.result);if(65496!==d.getUint16(0,!1))return c.resolve(b);for(var e=d.byteLength,f=2;e>f;){
var g=d.getUint16(f,!1);if(f+=2,65505===g){if(1165519206!==d.getUint32(f+=2,!1))return c.resolve(b);var h=18761===d.getUint16(f+=6,!1);
f+=d.getUint32(f+4,h);var i=d.getUint16(f,h);f+=2;for(var j=0;i>j;j++)if(274===d.getUint16(f+12*j,h)){var k=d.getUint16(f+12*j+8,h);
return k>=2&&8>=k&&(d.setUint16(f+12*j+8,1,h),b.fixedArrayBuffer=a.target.result),b.orientation=k,c.resolve(b)}}else{if(65280!==(65280&g))break;
f+=d.getUint16(f,!1)}}return c.resolve(b)},c.promise},e.applyExifRotation=function(a){if(0!==a.type.indexOf("image/jpeg"))return e.emptyPromise(a);
var f=b.defer();return e.readOrientation(a).then(function(b){return b.orientation<2||b.orientation>8?f.resolve(a):void e.dataUrl(a,!0).then(function(g){
var h=document.createElement("canvas"),i=document.createElement("img");i.onload=function(){try{h.width=b.orientation>4?i.height:i.width,
h.height=b.orientation>4?i.width:i.height;var g=h.getContext("2d");c(g,b.orientation,i.width,i.height),g.drawImage(i,0,0);var j=h.toDataURL(a.type||"image/WebP",.934);
j=e.restoreExif(d(b.fixedArrayBuffer),j);var k=e.dataUrltoBlob(j,a.name);f.resolve(k)}catch(l){return f.reject(l)}},i.onerror=function(){
f.reject()},i.src=g},function(a){f.reject(a)})},function(a){f.reject(a)}),f.promise},e.restoreExif=function(a,b){var c={};return c.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
c.encode64=function(a){var b,c,d,e,f,g="",h="",i="",j=0;do b=a[j++],c=a[j++],h=a[j++],d=b>>2,e=(3&b)<<4|c>>4,f=(15&c)<<2|h>>6,i=63&h,
isNaN(c)?f=i=64:isNaN(h)&&(i=64),g=g+this.KEY_STR.charAt(d)+this.KEY_STR.charAt(e)+this.KEY_STR.charAt(f)+this.KEY_STR.charAt(i),
b=c=h="",d=e=f=i="";while(j<a.length);return g},c.restore=function(a,b){a.match("data:image/jpeg;base64,")&&(a=a.replace("data:image/jpeg;base64,",""));
var c=this.decode64(a),d=this.slice2Segments(c),e=this.exifManipulation(b,d);return"data:image/jpeg;base64,"+this.encode64(e)},c.exifManipulation=function(a,b){
var c=this.getExifArray(b),d=this.insertExif(a,c);return new Uint8Array(d)},c.getExifArray=function(a){for(var b,c=0;c<a.length;c++)if(b=a[c],
255===b[0]&225===b[1])return b;return[]},c.insertExif=function(a,b){var c=a.replace("data:image/jpeg;base64,",""),d=this.decode64(c),e=d.indexOf(255,3),f=d.slice(0,e),g=d.slice(e),h=f;
return h=h.concat(b),h=h.concat(g)},c.slice2Segments=function(a){for(var b=0,c=[];;){if(255===a[b]&218===a[b+1])break;if(255===a[b]&216===a[b+1])b+=2;else{
var d=256*a[b+2]+a[b+3],e=b+d+2,f=a.slice(b,e);c.push(f),b=e}if(b>a.length)break}return c},c.decode64=function(a){var b,c,d,e,f,g="",h="",i=0,j=[],k=/[^A-Za-z0-9\+\/\=]/g;
k.exec(a)&&console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."),
a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do d=this.KEY_STR.indexOf(a.charAt(i++)),e=this.KEY_STR.indexOf(a.charAt(i++)),f=this.KEY_STR.indexOf(a.charAt(i++)),
h=this.KEY_STR.indexOf(a.charAt(i++)),b=d<<2|e>>4,c=(15&e)<<4|f>>2,g=(3&f)<<6|h,j.push(b),64!==f&&j.push(c),64!==h&&j.push(g),b=c=g="",
d=e=f=h="";while(i<a.length);return j},c.restore(a,b)},e}]);angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.datepicker","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepickerPopup","ui.bootstrap.position","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.stackedMap","ui.bootstrap.progressbar"]),
angular.module("ui.bootstrap.tpls",["uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/window.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html"]),
angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerSuppressError",!1).value("$datepickerLiteralWarning",!0).constant("uibDatepickerConfig",{
datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",
maxDate:null,maxMode:"year",minDate:null,minMode:"day",monthColumns:3,ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,
yearRows:4}).controller("UibDatepickerController",["$scope","$element","$attrs","$parse","$interpolate","$locale","$log","dateFilter","uibDatepickerConfig","$datepickerLiteralWarning","$datepickerSuppressError","uibDateParser",function(e,t,n,a,r,i,o,s,l,u,c,d){
function p(t){e.datepickerMode=t,e.datepickerOptions.datepickerMode=t}var f=this,m={$setViewValue:angular.noop},h={},g=[];t.addClass("uib-datepicker"),
n.$set("role","application"),e.datepickerOptions||(e.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","monthColumns","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(t){
switch(t){case"customClass":case"dateDisabled":e[t]=e.datepickerOptions[t]||angular.noop;break;case"datepickerMode":e.datepickerMode=angular.isDefined(e.datepickerOptions.datepickerMode)?e.datepickerOptions.datepickerMode:l.datepickerMode;
break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":f[t]=angular.isDefined(e.datepickerOptions[t])?r(e.datepickerOptions[t])(e.$parent):l[t];
break;case"monthColumns":case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":f[t]=angular.isDefined(e.datepickerOptions[t])?e.datepickerOptions[t]:l[t];
break;case"startingDay":f.startingDay=angular.isDefined(e.datepickerOptions.startingDay)?e.datepickerOptions.startingDay:angular.isNumber(l.startingDay)?l.startingDay:(i.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;
break;case"maxDate":case"minDate":e.$watch("datepickerOptions."+t,function(e){e?angular.isDate(e)?f[t]=d.fromTimezone(new Date(e),h.timezone):(u&&o.warn("Literal date support has been deprecated, please switch to date object usage"),
f[t]=new Date(s(e,"medium"))):f[t]=l[t]?d.fromTimezone(new Date(l[t]),h.timezone):null,f.refreshView()});break;case"maxMode":case"minMode":
e.datepickerOptions[t]?e.$watch(function(){return e.datepickerOptions[t]},function(n){f[t]=e[t]=angular.isDefined(n)?n:e.datepickerOptions[t],
("minMode"===t&&f.modes.indexOf(e.datepickerOptions.datepickerMode)<f.modes.indexOf(f[t])||"maxMode"===t&&f.modes.indexOf(e.datepickerOptions.datepickerMode)>f.modes.indexOf(f[t]))&&(e.datepickerMode=f[t],
e.datepickerOptions.datepickerMode=f[t])}):f[t]=e[t]=l[t]||null}}),e.uniqueId="datepicker-"+e.$id+"-"+Math.floor(1e4*Math.random()),
e.disabled=angular.isDefined(n.disabled)||!1,angular.isDefined(n.ngDisabled)&&g.push(e.$parent.$watch(n.ngDisabled,function(t){e.disabled=t,
f.refreshView()})),e.isActive=function(t){return 0===f.compare(t.date,f.activeDate)?(e.activeDateId=t.uid,!0):!1},this.init=function(t){
m=t,h=t.$options||e.datepickerOptions.ngModelOptions||l.ngModelOptions,e.datepickerOptions.initDate?(f.activeDate=d.fromTimezone(e.datepickerOptions.initDate,h.timezone)||new Date,
e.$watch("datepickerOptions.initDate",function(e){e&&(m.$isEmpty(m.$modelValue)||m.$invalid)&&(f.activeDate=d.fromTimezone(e,h.timezone),
f.refreshView())})):f.activeDate=new Date;var n=m.$modelValue?new Date(m.$modelValue):new Date;this.activeDate=isNaN(n)?d.fromTimezone(new Date,h.timezone):d.fromTimezone(n,h.timezone),
m.$render=function(){f.render()}},this.render=function(){if(m.$viewValue){var e=new Date(m.$viewValue),t=!isNaN(e);t?this.activeDate=d.fromTimezone(e,h.timezone):c||o.error('Datepicker directive: "ng-model" value must be a Date object');
}this.refreshView()},this.refreshView=function(){if(this.element){e.selectedDt=null,this._refreshView(),e.activeDt&&(e.activeDateId=e.activeDt.uid);
var t=m.$viewValue?new Date(m.$viewValue):null;t=d.fromTimezone(t,h.timezone),m.$setValidity("dateDisabled",!t||this.element&&!this.isDisabled(t));
}},this.createDateObject=function(t,n){var a=m.$viewValue?new Date(m.$viewValue):null;a=d.fromTimezone(a,h.timezone);var r=new Date;
r=d.fromTimezone(r,h.timezone);var i=this.compare(t,r),o={date:t,label:d.filter(t,n),selected:a&&0===this.compare(t,a),disabled:this.isDisabled(t),
past:0>i,current:0===i,future:i>0,customClass:this.customClass(t)||null};return a&&0===this.compare(t,a)&&(e.selectedDt=o),f.activeDate&&0===this.compare(o.date,f.activeDate)&&(e.activeDt=o),
o},this.isDisabled=function(t){return e.disabled||this.minDate&&this.compare(t,this.minDate)<0||this.maxDate&&this.compare(t,this.maxDate)>0||e.dateDisabled&&e.dateDisabled({
date:t,mode:e.datepickerMode})},this.customClass=function(t){return e.customClass({date:t,mode:e.datepickerMode})},this.split=function(e,t){
for(var n=[];e.length>0;)n.push(e.splice(0,t));return n},e.select=function(t){if(e.datepickerMode===f.minMode){var n=m.$viewValue?d.fromTimezone(new Date(m.$viewValue),h.timezone):new Date(0,0,0,0,0,0,0);
n.setFullYear(t.getFullYear(),t.getMonth(),t.getDate()),n=d.toTimezone(n,h.timezone),m.$setViewValue(n),m.$render()}else f.activeDate=t,
p(f.modes[f.modes.indexOf(e.datepickerMode)-1]),e.$emit("uib:datepicker.mode");e.$broadcast("uib:datepicker.focus")},e.move=function(e){
var t=f.activeDate.getFullYear()+e*(f.step.years||0),n=f.activeDate.getMonth()+e*(f.step.months||0);f.activeDate.setFullYear(t,n,1),
f.refreshView()},e.toggleMode=function(t){t=t||1,e.datepickerMode===f.maxMode&&1===t||e.datepickerMode===f.minMode&&-1===t||(p(f.modes[f.modes.indexOf(e.datepickerMode)+t]),
e.$emit("uib:datepicker.mode"))},e.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",
40:"down"};var b=function(){f.element[0].focus()};e.$on("uib:datepicker.focus",b),e.keydown=function(t){var n=e.keys[t.which];if(n&&!t.shiftKey&&!t.altKey&&!e.disabled)if(t.preventDefault(),
f.shortcutPropagation||t.stopPropagation(),"enter"===n||"space"===n){if(f.isDisabled(f.activeDate))return;e.select(f.activeDate)}else!t.ctrlKey||"up"!==n&&"down"!==n?(f.handleKeyDown(n,t),
f.refreshView()):e.toggleMode("up"===n?1:-1)},t.on("keydown",function(t){e.$apply(function(){e.keydown(t)})}),e.$on("$destroy",function(){
for(;g.length;)g.shift()()})}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(e,t,n){function a(e,t){
return 1!==t||e%4!==0||e%100===0&&e%400!==0?i[t]:29}function r(e){var t=new Date(e);t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();
return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1}var i=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={
months:1},this.element=t,this.init=function(t){angular.extend(t,this),e.showWeeks=t.showWeeks,t.refreshView()},this.getDates=function(e,t){
for(var n,a=new Array(t),r=new Date(e),i=0;t>i;)n=new Date(r),a[i++]=n,r.setDate(r.getDate()+1);return a},this._refreshView=function(){
var t=this.activeDate.getFullYear(),a=this.activeDate.getMonth(),i=new Date(this.activeDate);i.setFullYear(t,a,1);var o=this.startingDay-i.getDay(),s=o>0?7-o:-o,l=new Date(i);
s>0&&l.setDate(-s+1);for(var u=this.getDates(l,42),c=0;42>c;c++)u[c]=angular.extend(this.createDateObject(u[c],this.formatDay),{secondary:u[c].getMonth()!==a,
uid:e.uniqueId+"-"+c});e.labels=new Array(7);for(var d=0;7>d;d++)e.labels[d]={abbr:n(u[d].date,this.formatDayHeader),full:n(u[d].date,"EEEE")
};if(e.title=n(this.activeDate,this.formatDayTitle),e.rows=this.split(u,7),e.showWeeks){e.weekNumbers=[];for(var p=(11-this.startingDay)%7,f=e.rows.length,m=0;f>m;m++)e.weekNumbers.push(r(e.rows[m][p].date));
}},this.compare=function(e,t){var n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=new Date(t.getFullYear(),t.getMonth(),t.getDate());
return n.setFullYear(e.getFullYear()),a.setFullYear(t.getFullYear()),n-a},this.handleKeyDown=function(e){var t=this.activeDate.getDate();
if("left"===e)t-=1;else if("up"===e)t-=7;else if("right"===e)t+=1;else if("down"===e)t+=7;else if("pageup"===e||"pagedown"===e){var n=this.activeDate.getMonth()+("pageup"===e?-1:1);
this.activeDate.setMonth(n,1),t=Math.min(a(this.activeDate.getFullYear(),this.activeDate.getMonth()),t)}else"home"===e?t=1:"end"===e&&(t=a(this.activeDate.getFullYear(),this.activeDate.getMonth()));
this.activeDate.setDate(t)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(e,t,n){this.step={
years:1},this.element=t,this.init=function(e){angular.extend(e,this),e.refreshView()},this._refreshView=function(){for(var t,a=new Array(12),r=this.activeDate.getFullYear(),i=0;12>i;i++)t=new Date(this.activeDate),
t.setFullYear(r,i,1),a[i]=angular.extend(this.createDateObject(t,this.formatMonth),{uid:e.uniqueId+"-"+i});e.title=n(this.activeDate,this.formatMonthTitle),
e.rows=this.split(a,this.monthColumns),e.yearHeaderColspan=this.monthColumns>3?this.monthColumns-2:1},this.compare=function(e,t){
var n=new Date(e.getFullYear(),e.getMonth()),a=new Date(t.getFullYear(),t.getMonth());return n.setFullYear(e.getFullYear()),a.setFullYear(t.getFullYear()),
n-a},this.handleKeyDown=function(e){var t=this.activeDate.getMonth();if("left"===e)t-=1;else if("up"===e)t-=this.monthColumns;else if("right"===e)t+=1;else if("down"===e)t+=this.monthColumns;else if("pageup"===e||"pagedown"===e){
var n=this.activeDate.getFullYear()+("pageup"===e?-1:1);this.activeDate.setFullYear(n)}else"home"===e?t=0:"end"===e&&(t=11);this.activeDate.setMonth(t);
}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(e,t){function n(e){return parseInt((e-1)/r,10)*r+1;
}var a,r;this.element=t,this.yearpickerInit=function(){a=this.yearColumns,r=this.yearRows*a,this.step={years:r}},this._refreshView=function(){
for(var t,i=new Array(r),o=0,s=n(this.activeDate.getFullYear());r>o;o++)t=new Date(this.activeDate),t.setFullYear(s+o,0,1),i[o]=angular.extend(this.createDateObject(t,this.formatYear),{
uid:e.uniqueId+"-"+o});e.title=[i[0].label,i[r-1].label].join(" - "),e.rows=this.split(i,a),e.columns=a},this.compare=function(e,t){
return e.getFullYear()-t.getFullYear()},this.handleKeyDown=function(e){var t=this.activeDate.getFullYear();"left"===e?t-=1:"up"===e?t-=a:"right"===e?t+=1:"down"===e?t+=a:"pageup"===e||"pagedown"===e?t+=("pageup"===e?-1:1)*r:"home"===e?t=n(this.activeDate.getFullYear()):"end"===e&&(t=n(this.activeDate.getFullYear())+r-1),
this.activeDate.setFullYear(t)}}]).directive("uibDatepicker",function(){return{templateUrl:function(e,t){return t.templateUrl||"uib/template/datepicker/datepicker.html";
},scope:{datepickerOptions:"=?"},require:["uibDatepicker","^ngModel"],restrict:"A",controller:"UibDatepickerController",controllerAs:"datepicker",
link:function(e,t,n,a){var r=a[0],i=a[1];r.init(i)}}}).directive("uibDaypicker",function(){return{templateUrl:function(e,t){return t.templateUrl||"uib/template/datepicker/day.html";
},require:["^uibDatepicker","uibDaypicker"],restrict:"A",controller:"UibDaypickerController",link:function(e,t,n,a){var r=a[0],i=a[1];
i.init(r)}}}).directive("uibMonthpicker",function(){return{templateUrl:function(e,t){return t.templateUrl||"uib/template/datepicker/month.html";
},require:["^uibDatepicker","uibMonthpicker"],restrict:"A",controller:"UibMonthpickerController",link:function(e,t,n,a){var r=a[0],i=a[1];
i.init(r)}}}).directive("uibYearpicker",function(){return{templateUrl:function(e,t){return t.templateUrl||"uib/template/datepicker/year.html";
},require:["^uibDatepicker","uibYearpicker"],restrict:"A",controller:"UibYearpickerController",link:function(e,t,n,a){var r=a[0];angular.extend(r,a[1]),
r.yearpickerInit(),r.refreshView()}}}),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","dateFilter","orderByFilter",function(e,t,n,a){
function r(e){var t=[],n=e.split(""),r=e.indexOf("'");if(r>-1){var i=!1;e=e.split("");for(var o=r;o<e.length;o++)i?("'"===e[o]&&(o+1<e.length&&"'"===e[o+1]?(e[o+1]="$",
n[o+1]=""):(n[o]="",i=!1)),e[o]="$"):"'"===e[o]&&(e[o]="$",n[o]="",i=!0);e=e.join("")}return angular.forEach(g,function(a){var r=e.indexOf(a.key);
if(r>-1){e=e.split(""),n[r]="("+a.regex+")",e[r]="$";for(var i=r+1,o=r+a.key.length;o>i;i++)n[i]="",e[i]="$";e=e.join(""),t.push({
index:r,key:a.key,apply:a.apply,matcher:a.regex})}}),{regex:new RegExp("^"+n.join("")+"$"),map:a(t,"index")}}function i(e){for(var t,n,a=[],r=0;r<e.length;)if(angular.isNumber(n)){
if("'"===e.charAt(r))(r+1>=e.length||"'"!==e.charAt(r+1))&&(a.push(o(e,n,r)),n=null);else if(r===e.length)for(;n<e.length;)t=s(e,n),
a.push(t),n=t.endIdx;r++}else"'"!==e.charAt(r)?(t=s(e,r),a.push(t.parser),r=t.endIdx):(n=r,r++);return a}function o(e,t,n){return function(){
return e.substr(t+1,n-t-1)}}function s(e,t){for(var n=e.substr(t),a=0;a<g.length;a++)if(new RegExp("^"+g[a].key).test(n)){var r=g[a];
return{endIdx:t+r.key.length,parser:r.formatter}}return{endIdx:t+1,parser:function(){return n.charAt(0)}}}function l(e,t,n){return 1>n?!1:1===t&&n>28?29===n&&(e%4===0&&e%100!==0||e%400===0):3===t||5===t||8===t||10===t?31>n:!0;
}function u(e){return parseInt(e,10)}function c(e,t){return e&&t?m(e,t):e}function d(e,t){return e&&t?m(e,t,!0):e}function p(e,t){
e=e.replace(/:/g,"");var n=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(n)?t:n}function f(e,t){return e=new Date(e.getTime()),
e.setMinutes(e.getMinutes()+t),e}function m(e,t,n){n=n?-1:1;var a=e.getTimezoneOffset(),r=p(t,a);return f(e,n*(r-a))}var h,g,b=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
this.init=function(){h=t.id,this.parsers={},this.formatters={},g=[{key:"yyyy",regex:"\\d{4}",apply:function(e){this.year=+e},formatter:function(e){
var t=new Date;return t.setFullYear(Math.abs(e.getFullYear())),n(t,"yyyy")}},{key:"yy",regex:"\\d{2}",apply:function(e){e=+e,this.year=69>e?e+2e3:e+1900;
},formatter:function(e){var t=new Date;return t.setFullYear(Math.abs(e.getFullYear())),n(t,"yy")}},{key:"y",regex:"\\d{1,4}",apply:function(e){
this.year=+e},formatter:function(e){var t=new Date;return t.setFullYear(Math.abs(e.getFullYear())),n(t,"y")}},{key:"M!",regex:"0?[1-9]|1[0-2]",
apply:function(e){this.month=e-1},formatter:function(e){var t=e.getMonth();return/^[0-9]$/.test(t)?n(e,"MM"):n(e,"M")}},{key:"MMMM",
regex:t.DATETIME_FORMATS.MONTH.join("|"),apply:function(e){this.month=t.DATETIME_FORMATS.MONTH.indexOf(e)},formatter:function(e){
return n(e,"MMMM")}},{key:"MMM",regex:t.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(e){this.month=t.DATETIME_FORMATS.SHORTMONTH.indexOf(e);
},formatter:function(e){return n(e,"MMM")}},{key:"MM",regex:"0[1-9]|1[0-2]",apply:function(e){this.month=e-1},formatter:function(e){
return n(e,"MM")}},{key:"M",regex:"[1-9]|1[0-2]",apply:function(e){this.month=e-1},formatter:function(e){return n(e,"M")}},{key:"LLLL",
regex:t.DATETIME_FORMATS.STANDALONEMONTH.join("|"),apply:function(e){this.month=t.DATETIME_FORMATS.STANDALONEMONTH.indexOf(e)},formatter:function(e){
return n(e,"LLLL")}},{key:"d!",regex:"[0-2]?[0-9]{1}|3[0-1]{1}",apply:function(e){this.date=+e},formatter:function(e){var t=e.getDate();
return/^[1-9]$/.test(t)?n(e,"dd"):n(e,"d")}},{key:"dd",regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(e){this.date=+e},formatter:function(e){
return n(e,"dd")}},{key:"d",regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(e){this.date=+e},formatter:function(e){return n(e,"d");
}},{key:"EEEE",regex:t.DATETIME_FORMATS.DAY.join("|"),formatter:function(e){return n(e,"EEEE")}},{key:"EEE",regex:t.DATETIME_FORMATS.SHORTDAY.join("|"),
formatter:function(e){return n(e,"EEE")}},{key:"HH",regex:"(?:0|1)[0-9]|2[0-3]",apply:function(e){this.hours=+e},formatter:function(e){
return n(e,"HH")}},{key:"hh",regex:"0[0-9]|1[0-2]",apply:function(e){this.hours=+e},formatter:function(e){return n(e,"hh")}},{key:"H",
regex:"1?[0-9]|2[0-3]",apply:function(e){this.hours=+e},formatter:function(e){return n(e,"H")}},{key:"h",regex:"[0-9]|1[0-2]",apply:function(e){
this.hours=+e},formatter:function(e){return n(e,"h")}},{key:"mm",regex:"[0-5][0-9]",apply:function(e){this.minutes=+e},formatter:function(e){
return n(e,"mm")}},{key:"m",regex:"[0-9]|[1-5][0-9]",apply:function(e){this.minutes=+e},formatter:function(e){return n(e,"m")}},{
key:"sss",regex:"[0-9][0-9][0-9]",apply:function(e){this.milliseconds=+e},formatter:function(e){return n(e,"sss")}},{key:"ss",regex:"[0-5][0-9]",
apply:function(e){this.seconds=+e},formatter:function(e){return n(e,"ss")}},{key:"s",regex:"[0-9]|[1-5][0-9]",apply:function(e){this.seconds=+e;
},formatter:function(e){return n(e,"s")}},{key:"a",regex:t.DATETIME_FORMATS.AMPMS.join("|"),apply:function(e){12===this.hours&&(this.hours=0),
"PM"===e&&(this.hours+=12)},formatter:function(e){return n(e,"a")}},{key:"Z",regex:"[+-]\\d{4}",apply:function(e){var t=e.match(/([+-])(\d{2})(\d{2})/),n=t[1],a=t[2],r=t[3];
this.hours+=u(n+a),this.minutes+=u(n+r)},formatter:function(e){return n(e,"Z")}},{key:"ww",regex:"[0-4][0-9]|5[0-3]",formatter:function(e){
return n(e,"ww")}},{key:"w",regex:"[0-9]|[1-4][0-9]|5[0-3]",formatter:function(e){return n(e,"w")}},{key:"GGGG",regex:t.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g,"\\s"),
formatter:function(e){return n(e,"GGGG")}},{key:"GGG",regex:t.DATETIME_FORMATS.ERAS.join("|"),formatter:function(e){return n(e,"GGG");
}},{key:"GG",regex:t.DATETIME_FORMATS.ERAS.join("|"),formatter:function(e){return n(e,"GG")}},{key:"G",regex:t.DATETIME_FORMATS.ERAS.join("|"),
formatter:function(e){return n(e,"G")}}]},this.init(),this.filter=function(e,n){if(!angular.isDate(e)||isNaN(e)||!n)return"";n=t.DATETIME_FORMATS[n]||n,
t.id!==h&&this.init(),this.formatters[n]||(this.formatters[n]=i(n));var a=this.formatters[n];return a.reduce(function(t,n){return t+n(e);
},"")},this.parse=function(n,a,i){if(!angular.isString(n)||!a)return n;a=t.DATETIME_FORMATS[a]||a,a=a.replace(b,"\\$&"),t.id!==h&&this.init(),
this.parsers[a]||(this.parsers[a]=r(a,"apply"));var o=this.parsers[a],s=o.regex,u=o.map,c=n.match(s),d=!1;if(c&&c.length){var p,f;
angular.isDate(i)&&!isNaN(i.getTime())?p={year:i.getFullYear(),month:i.getMonth(),date:i.getDate(),hours:i.getHours(),minutes:i.getMinutes(),
seconds:i.getSeconds(),milliseconds:i.getMilliseconds()}:(i&&e.warn("dateparser:","baseDate is not a valid date"),p={year:1900,month:0,
date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var m=1,g=c.length;g>m;m++){var v=u[m-1];"Z"===v.matcher&&(d=!0),v.apply&&v.apply.call(p,c[m]);
}var y=d?Date.prototype.setUTCFullYear:Date.prototype.setFullYear,w=d?Date.prototype.setUTCHours:Date.prototype.setHours;return l(p.year,p.month,p.date)&&(!angular.isDate(i)||isNaN(i.getTime())||d?(f=new Date(0),
y.call(f,p.year,p.month,p.date),w.call(f,p.hours||0,p.minutes||0,p.seconds||0,p.milliseconds||0)):(f=new Date(i),y.call(f,p.year,p.month,p.date),
w.call(f,p.hours,p.minutes,p.seconds,p.milliseconds))),f}},this.toTimezone=c,this.fromTimezone=d,this.timezoneToOffset=p,this.addDateMinutes=f,
this.convertTimezoneToLocal=m}]),angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(e){var t=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,n=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;
return{restrict:"A",compile:function(a,r){function i(e,t){l.push(e),u.push({scope:e,element:t}),m.forEach(function(t){o(t,e)}),e.$on("$destroy",s);
}function o(t,a){var r=t.match(n),i=a.$eval(r[1]),o=r[2],s=c[t];if(!s){var l=function(t){var n=null;u.some(function(e){var a=e.scope.$eval(p);
return a===t?(n=e,!0):void 0}),s.lastActivated!==n&&(s.lastActivated&&e.removeClass(s.lastActivated.element,i),n&&e.addClass(n.element,i),
s.lastActivated=n)};c[t]=s={lastActivated:null,scope:a,watchFn:l,compareWithExp:o,watcher:a.$watch(o,l)}}s.watchFn(a.$eval(o))}function s(e){
var t=e.targetScope,n=l.indexOf(t);if(l.splice(n,1),u.splice(n,1),l.length){var a=l[0];angular.forEach(c,function(e){e.scope===t&&(e.watcher=a.$watch(e.compareWithExp,e.watchFn),
e.scope=a)})}else c={}}var l=[],u=[],c={},d=r.uibIsClass.match(t),p=d[2],f=d[1],m=f.split(",");return i}}}]),angular.module("ui.bootstrap.datepickerPopup",["ui.bootstrap.datepicker","ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning",!0).constant("uibDatepickerPopupConfig",{
altInputFormats:[],appendToBody:!1,clearText:"Clear",closeOnDateSelection:!0,closeText:"Done",currentText:"Today",datepickerPopup:"yyyy-MM-dd",
datepickerPopupTemplateUrl:"uib/template/datepickerPopup/popup.html",datepickerTemplateUrl:"uib/template/datepicker/datepicker.html",
html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},onOpenFocus:!0,showButtonBar:!0,placement:"auto bottom-left"
}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$log","$parse","$window","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout","uibDatepickerConfig","$datepickerPopupLiteralWarning",function(e,t,n,a,r,i,o,s,l,u,c,d,p,f,m,h){
function g(t){var n=d.parse(t,D,e.date);if(isNaN(n))for(var a=0;a<N.length;a++)if(n=d.parse(t,N[a],e.date),!isNaN(n))return n;return n;
}function b(e){if(angular.isNumber(e)&&(e=new Date(e)),!e)return null;if(angular.isDate(e)&&!isNaN(e))return e;if(angular.isString(e)){
var t=g(e);if(!isNaN(t))return d.fromTimezone(t,S.timezone)}return A.$options&&A.$options.allowInvalid?e:void 0}function v(e,t){var a=e||t;
return n.ngRequired||a?(angular.isNumber(a)&&(a=new Date(a)),a?angular.isDate(a)&&!isNaN(a)?!0:angular.isString(a)?!isNaN(g(a)):!1:!0):!0;
}function y(n){if(e.isOpen||!e.disabled){var a=P[0],r=t[0].contains(n.target),i=void 0!==a.contains&&a.contains(n.target);!e.isOpen||r||i||e.$apply(function(){
e.isOpen=!1})}}function w(n){27===n.which&&e.isOpen?(n.preventDefault(),n.stopPropagation(),e.$apply(function(){e.isOpen=!1}),t[0].focus()):40!==n.which||e.isOpen||(n.preventDefault(),
n.stopPropagation(),e.$apply(function(){e.isOpen=!0}))}function k(){if(e.isOpen){var a=angular.element(P[0].querySelector(".uib-datepicker-popup")),r=n.popupPlacement?n.popupPlacement:p.placement,i=u.positionElements(t,a,r,M);
a.css({top:i.top+"px",left:i.left+"px"}),a.hasClass("uib-position-measure")&&a.removeClass("uib-position-measure")}}var D,$,M,T,x,O,C,E,F,A,S,P,N,I=!1,R=[];
this.init=function(r){if(A=r,S=angular.isObject(r.$options)?r.$options:{timezone:null},$=angular.isDefined(n.closeOnDateSelection)?e.$parent.$eval(n.closeOnDateSelection):p.closeOnDateSelection,
M=angular.isDefined(n.datepickerAppendToBody)?e.$parent.$eval(n.datepickerAppendToBody):p.appendToBody,T=angular.isDefined(n.onOpenFocus)?e.$parent.$eval(n.onOpenFocus):p.onOpenFocus,
x=angular.isDefined(n.datepickerPopupTemplateUrl)?n.datepickerPopupTemplateUrl:p.datepickerPopupTemplateUrl,O=angular.isDefined(n.datepickerTemplateUrl)?n.datepickerTemplateUrl:p.datepickerTemplateUrl,
N=angular.isDefined(n.altInputFormats)?e.$parent.$eval(n.altInputFormats):p.altInputFormats,e.showButtonBar=angular.isDefined(n.showButtonBar)?e.$parent.$eval(n.showButtonBar):p.showButtonBar,
p.html5Types[n.type]?(D=p.html5Types[n.type],I=!0):(D=n.uibDatepickerPopup||p.datepickerPopup,n.$observe("uibDatepickerPopup",function(e){
var t=e||p.datepickerPopup;if(t!==D&&(D=t,A.$modelValue=null,!D))throw new Error("uibDatepickerPopup must have a date format specified.");
})),!D)throw new Error("uibDatepickerPopup must have a date format specified.");if(I&&n.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");
C=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),C.attr({"ng-model":"date","ng-change":"dateSelection(date)",
"template-url":x}),E=angular.element(C.children()[0]),E.attr("template-url",O),e.datepickerOptions||(e.datepickerOptions={}),I&&"month"===n.type&&(e.datepickerOptions.datepickerMode="month",
e.datepickerOptions.minMode="month"),E.attr("datepicker-options","datepickerOptions"),I?A.$formatters.push(function(t){return e.date=d.fromTimezone(t,S.timezone),
t}):(A.$$parserName="date",A.$validators.date=v,A.$parsers.unshift(b),A.$formatters.push(function(t){return A.$isEmpty(t)?(e.date=t,
t):(angular.isNumber(t)&&(t=new Date(t)),e.date=d.fromTimezone(t,S.timezone),d.filter(e.date,D))})),A.$viewChangeListeners.push(function(){
e.date=g(A.$viewValue)}),t.on("keydown",w),P=a(C)(e),C.remove(),M?s.find("body").append(P):t.after(P),e.$on("$destroy",function(){
for(e.isOpen===!0&&(l.$$phase||e.$apply(function(){e.isOpen=!1})),P.remove(),t.off("keydown",w),s.off("click",y),F&&F.off("scroll",k),
angular.element(o).off("resize",k);R.length;)R.shift()()})},e.getText=function(t){return e[t+"Text"]||p[t+"Text"]},e.isDisabled=function(t){
"today"===t&&(t=d.fromTimezone(new Date,S.timezone));var n={};return angular.forEach(["minDate","maxDate"],function(t){e.datepickerOptions[t]?angular.isDate(e.datepickerOptions[t])?n[t]=new Date(e.datepickerOptions[t]):(h&&r.warn("Literal date support has been deprecated, please switch to date object usage"),
n[t]=new Date(c(e.datepickerOptions[t],"medium"))):n[t]=null}),e.datepickerOptions&&n.minDate&&e.compare(t,n.minDate)<0||n.maxDate&&e.compare(t,n.maxDate)>0;
},e.compare=function(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate())-new Date(t.getFullYear(),t.getMonth(),t.getDate());
},e.dateSelection=function(n){e.date=n;var a=e.date?d.filter(e.date,D):null;t.val(a),A.$setViewValue(a),$&&(e.isOpen=!1,t[0].focus());
},e.keydown=function(n){27===n.which&&(n.stopPropagation(),e.isOpen=!1,t[0].focus())},e.select=function(t,n){if(n.stopPropagation(),
"today"===t){var a=new Date;angular.isDate(e.date)?(t=new Date(e.date),t.setFullYear(a.getFullYear(),a.getMonth(),a.getDate())):(t=d.fromTimezone(a,S.timezone),
t.setHours(0,0,0,0))}e.dateSelection(t)},e.close=function(n){n.stopPropagation(),e.isOpen=!1,t[0].focus()},e.disabled=angular.isDefined(n.disabled)||!1,
n.ngDisabled&&R.push(e.$parent.$watch(i(n.ngDisabled),function(t){e.disabled=t})),e.$watch("isOpen",function(a){a?e.disabled?e.isOpen=!1:f(function(){
k(),T&&e.$broadcast("uib:datepicker.focus"),s.on("click",y);var a=n.popupPlacement?n.popupPlacement:p.placement;M||u.parsePlacement(a)[2]?(F=F||angular.element(u.scrollParent(t)),
F&&F.on("scroll",k)):F=null,angular.element(o).on("resize",k)},0,!1):(s.off("click",y),F&&F.off("scroll",k),angular.element(o).off("resize",k));
}),e.$on("uib:datepicker.mode",function(){f(k,0,!1)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],
controller:"UibDatepickerPopupController",scope:{datepickerOptions:"=?",isOpen:"=?",currentText:"@",clearText:"@",closeText:"@"},
link:function(e,t,n,a){var r=a[0],i=a[1];i.init(r)}}}).directive("uibDatepickerPopupWrap",function(){return{restrict:"A",transclude:!0,
templateUrl:function(e,t){return t.templateUrl||"uib/template/datepickerPopup/popup.html"}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(e,t){
var n,a,r={normal:/(auto|scroll)/,hidden:/(auto|scroll|hidden)/},i={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,
vertical:/^(top|bottom)$/},o=/(HTML|BODY)/;return{getRawNode:function(e){return e.nodeName?e:e[0]||e},parseStyle:function(e){return e=parseFloat(e),
isFinite(e)?e:0},offsetParent:function(n){function a(e){return"static"===(t.getComputedStyle(e).position||"static")}n=this.getRawNode(n);
for(var r=n.offsetParent||e[0].documentElement;r&&r!==e[0].documentElement&&a(r);)r=r.offsetParent;return r||e[0].documentElement;
},scrollbarWidth:function(r){if(r){if(angular.isUndefined(a)){var i=e.find("body");i.addClass("uib-position-body-scrollbar-measure"),
a=t.innerWidth-i[0].clientWidth,a=isFinite(a)?a:0,i.removeClass("uib-position-body-scrollbar-measure")}return a}if(angular.isUndefined(n)){
var o=angular.element('<div class="uib-position-scrollbar-measure"></div>');e.find("body").append(o),n=o[0].offsetWidth-o[0].clientWidth,
n=isFinite(n)?n:0,o.remove()}return n},scrollbarPadding:function(e){e=this.getRawNode(e);var n=t.getComputedStyle(e),a=this.parseStyle(n.paddingRight),r=this.parseStyle(n.paddingBottom),i=this.scrollParent(e,!1,!0),s=this.scrollbarWidth(o.test(i.tagName));
return{scrollbarWidth:s,widthOverflow:i.scrollWidth>i.clientWidth,right:a+s,originalRight:a,heightOverflow:i.scrollHeight>i.clientHeight,
bottom:r+s,originalBottom:r}},isScrollable:function(e,n){e=this.getRawNode(e);var a=n?r.hidden:r.normal,i=t.getComputedStyle(e);return a.test(i.overflow+i.overflowY+i.overflowX);
},scrollParent:function(n,a,i){n=this.getRawNode(n);var o=a?r.hidden:r.normal,s=e[0].documentElement,l=t.getComputedStyle(n);if(i&&o.test(l.overflow+l.overflowY+l.overflowX))return n;
var u="absolute"===l.position,c=n.parentElement||s;if(c===s||"fixed"===l.position)return s;for(;c.parentElement&&c!==s;){var d=t.getComputedStyle(c);
if(u&&"static"!==d.position&&(u=!1),!u&&o.test(d.overflow+d.overflowY+d.overflowX))break;c=c.parentElement}return c},position:function(n,a){
n=this.getRawNode(n);var r=this.offset(n);if(a){var i=t.getComputedStyle(n);r.top-=this.parseStyle(i.marginTop),r.left-=this.parseStyle(i.marginLeft);
}var o=this.offsetParent(n),s={top:0,left:0};return o!==e[0].documentElement&&(s=this.offset(o),s.top+=o.clientTop-o.scrollTop,s.left+=o.clientLeft-o.scrollLeft),
{width:Math.round(angular.isNumber(r.width)?r.width:n.offsetWidth),height:Math.round(angular.isNumber(r.height)?r.height:n.offsetHeight),
top:Math.round(r.top-s.top),left:Math.round(r.left-s.left)}},offset:function(n){n=this.getRawNode(n);var a=n.getBoundingClientRect();
return{width:Math.round(angular.isNumber(a.width)?a.width:n.offsetWidth),height:Math.round(angular.isNumber(a.height)?a.height:n.offsetHeight),
top:Math.round(a.top+(t.pageYOffset||e[0].documentElement.scrollTop)),left:Math.round(a.left+(t.pageXOffset||e[0].documentElement.scrollLeft))
}},viewportOffset:function(n,a,r){n=this.getRawNode(n),r=r!==!1?!0:!1;var i=n.getBoundingClientRect(),o={top:0,left:0,bottom:0,right:0
},s=a?e[0].documentElement:this.scrollParent(n),l=s.getBoundingClientRect();if(o.top=l.top+s.clientTop,o.left=l.left+s.clientLeft,
s===e[0].documentElement&&(o.top+=t.pageYOffset,o.left+=t.pageXOffset),o.bottom=o.top+s.clientHeight,o.right=o.left+s.clientWidth,
r){var u=t.getComputedStyle(s);o.top+=this.parseStyle(u.paddingTop),o.bottom-=this.parseStyle(u.paddingBottom),o.left+=this.parseStyle(u.paddingLeft),
o.right-=this.parseStyle(u.paddingRight)}return{top:Math.round(i.top-o.top),bottom:Math.round(o.bottom-i.bottom),left:Math.round(i.left-o.left),
right:Math.round(o.right-i.right)}},parsePlacement:function(e){var t=i.auto.test(e);return t&&(e=e.replace(i.auto,"")),e=e.split("-"),
e[0]=e[0]||"top",i.primary.test(e[0])||(e[0]="top"),e[1]=e[1]||"center",i.secondary.test(e[1])||(e[1]="center"),e[2]=t?!0:!1,e},positionElements:function(e,n,a,r){
e=this.getRawNode(e),n=this.getRawNode(n);var o=angular.isDefined(n.offsetWidth)?n.offsetWidth:n.prop("offsetWidth"),s=angular.isDefined(n.offsetHeight)?n.offsetHeight:n.prop("offsetHeight");
a=this.parsePlacement(a);var l=r?this.offset(e):this.position(e),u={top:0,left:0,placement:""};if(a[2]){var c=this.viewportOffset(e,r),d=t.getComputedStyle(n),p={
width:o+Math.round(Math.abs(this.parseStyle(d.marginLeft)+this.parseStyle(d.marginRight))),height:s+Math.round(Math.abs(this.parseStyle(d.marginTop)+this.parseStyle(d.marginBottom)))
};if(a[0]="top"===a[0]&&p.height>c.top&&p.height<=c.bottom?"bottom":"bottom"===a[0]&&p.height>c.bottom&&p.height<=c.top?"top":"left"===a[0]&&p.width>c.left&&p.width<=c.right?"right":"right"===a[0]&&p.width>c.right&&p.width<=c.left?"left":a[0],
a[1]="top"===a[1]&&p.height-l.height>c.bottom&&p.height-l.height<=c.top?"bottom":"bottom"===a[1]&&p.height-l.height>c.top&&p.height-l.height<=c.bottom?"top":"left"===a[1]&&p.width-l.width>c.right&&p.width-l.width<=c.left?"right":"right"===a[1]&&p.width-l.width>c.left&&p.width-l.width<=c.right?"left":a[1],
"center"===a[1])if(i.vertical.test(a[0])){var f=l.width/2-o/2;c.left+f<0&&p.width-l.width<=c.right?a[1]="left":c.right+f<0&&p.width-l.width<=c.left&&(a[1]="right");
}else{var m=l.height/2-p.height/2;c.top+m<0&&p.height-l.height<=c.bottom?a[1]="top":c.bottom+m<0&&p.height-l.height<=c.top&&(a[1]="bottom");
}}switch(a[0]){case"top":u.top=l.top-s;break;case"bottom":u.top=l.top+l.height;break;case"left":u.left=l.left-o;break;case"right":
u.left=l.left+l.width}switch(a[1]){case"top":u.top=l.top;break;case"bottom":u.top=l.top+l.height-s;break;case"left":u.left=l.left;
break;case"right":u.left=l.left+l.width-o;break;case"center":i.vertical.test(a[0])?u.left=l.left+l.width/2-o/2:u.top=l.top+l.height/2-s/2;
}return u.top=Math.round(u.top),u.left=Math.round(u.left),u.placement="center"===a[1]?a[0]:a[0]+"-"+a[1],u},adjustTop:function(e,t,n,a){
return-1!==e.indexOf("top")&&n!==a?{top:t.top-a+"px"}:void 0},positionArrow:function(e,n){e=this.getRawNode(e);var a=e.querySelector(".tooltip-inner, .popover-inner");
if(a){var r=angular.element(a).hasClass("tooltip-inner"),o=e.querySelector(r?".tooltip-arrow":".arrow");if(o){var s={top:"",bottom:"",
left:"",right:""};if(n=this.parsePlacement(n),"center"===n[1])return void angular.element(o).css(s);var l="border-"+n[0]+"-width",u=t.getComputedStyle(o)[l],c="border-";
c+=i.vertical.test(n[0])?n[0]+"-"+n[1]:n[1]+"-"+n[0],c+="-radius";var d=t.getComputedStyle(r?a:e)[c];switch(n[0]){case"top":s.bottom=r?"0":"-"+u;
break;case"bottom":s.top=r?"0":"-"+u;break;case"left":s.right=r?"0":"-"+u;break;case"right":s.left=r?"0":"-"+u}s[n[1]]=d,angular.element(o).css(s);
}}}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",
openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(e,t){var n=null;this.open=function(t){n||e.on("click",a),
n&&n!==t&&(n.isOpen=!1),n=t},this.close=function(t){n===t&&(e.off("click",a),e.off("keydown",this.keybindFilter),n=null)};var a=function(e){
if(n&&!(e&&"disabled"===n.getAutoClose()||e&&3===e.which)){var a=n.getToggleElement();if(!(e&&a&&a[0].contains(e.target))){var r=n.getDropdownElement();
e&&"outsideClick"===n.getAutoClose()&&r&&r[0].contains(e.target)||(n.focusToggleElement(),n.isOpen=!1,t.$$phase||n.$apply())}}};this.keybindFilter=function(e){
if(n){var t=n.getDropdownElement(),r=n.getToggleElement(),i=t&&t[0].contains(e.target),o=r&&r[0].contains(e.target);27===e.which?(e.stopPropagation(),
n.focusToggleElement(),a()):n.isKeynavEnabled()&&-1!==[38,40].indexOf(e.which)&&n.isOpen&&(i||o)&&(e.preventDefault(),e.stopPropagation(),
n.focusDropdownEntry(e.which))}}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(e,t,n,a,r,i,o,s,l,u,c){
var d,p,f=this,m=e.$new(),h=r.appendToOpenClass,g=r.openClass,b=angular.noop,v=n.onToggle?a(n.onToggle):angular.noop,y=!1,w=null,k=!1,D=l.find("body");
t.addClass("dropdown"),this.init=function(){if(n.isOpen&&(p=a(n.isOpen),b=p.assign,e.$watch(p,function(e){m.isOpen=!!e})),angular.isDefined(n.dropdownAppendTo)){
var r=a(n.dropdownAppendTo)(m);r&&(w=angular.element(r))}y=angular.isDefined(n.dropdownAppendToBody),k=angular.isDefined(n.keyboardNav),
y&&!w&&(w=D),w&&f.dropdownMenu&&(w.append(f.dropdownMenu),t.on("$destroy",function(){f.dropdownMenu.remove()}))},this.toggle=function(e){
return m.isOpen=arguments.length?!!e:!m.isOpen,angular.isFunction(b)&&b(m,m.isOpen),m.isOpen},this.isOpen=function(){return m.isOpen;
},m.getToggleElement=function(){return f.toggleElement},m.getAutoClose=function(){return n.autoClose||"always"},m.getElement=function(){
return t},m.isKeynavEnabled=function(){return k},m.focusDropdownEntry=function(e){var n=f.dropdownMenu?angular.element(f.dropdownMenu).find("a"):t.find("ul").eq(0).find("a");
switch(e){case 40:f.selectedOption=angular.isNumber(f.selectedOption)?f.selectedOption===n.length-1?f.selectedOption:f.selectedOption+1:0;
break;case 38:f.selectedOption=angular.isNumber(f.selectedOption)?0===f.selectedOption?0:f.selectedOption-1:n.length-1}n[f.selectedOption].focus();
},m.getDropdownElement=function(){return f.dropdownMenu},m.focusToggleElement=function(){f.toggleElement&&f.toggleElement[0].focus();
},m.$watch("isOpen",function(n,a){if(w&&f.dropdownMenu){var r,p,k,D=s.positionElements(t,f.dropdownMenu,"bottom-left",!0),$=0;if(r={
top:D.top+"px",display:n?"block":"none"},p=f.dropdownMenu.hasClass("dropdown-menu-right"),p?(r.left="auto",k=s.scrollbarPadding(w),
k.heightOverflow&&k.scrollbarWidth&&($=k.scrollbarWidth),r.right=window.innerWidth-$-(D.left+t.prop("offsetWidth"))+"px"):(r.left=D.left+"px",
r.right="auto"),!y){var M=s.offset(w);r.top=D.top-M.top+"px",p?r.right=window.innerWidth-(D.left-M.left+t.prop("offsetWidth"))+"px":r.left=D.left-M.left+"px";
}f.dropdownMenu.css(r)}var T=w?w:t,x=T.hasClass(w?h:g);if(x===!n&&o[n?"addClass":"removeClass"](T,w?h:g).then(function(){angular.isDefined(n)&&n!==a&&v(e,{
open:!!n})}),n)f.dropdownMenuTemplateUrl?c(f.dropdownMenuTemplateUrl).then(function(e){d=m.$new(),u(e.trim())(d,function(e){var t=e;
f.dropdownMenu.replaceWith(t),f.dropdownMenu=t,l.on("keydown",i.keybindFilter)})}):l.on("keydown",i.keybindFilter),m.focusToggleElement(),
i.open(m,t);else{if(i.close(m,t),f.dropdownMenuTemplateUrl){d&&d.$destroy();var O=angular.element('<ul class="dropdown-menu"></ul>');
f.dropdownMenu.replaceWith(O),f.dropdownMenu=O}f.selectedOption=null}angular.isFunction(b)&&b(e,n)})}]).directive("uibDropdown",function(){
return{controller:"UibDropdownController",link:function(e,t,n,a){a.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",
require:"?^uibDropdown",link:function(e,t,n,a){if(a&&!angular.isDefined(n.dropdownNested)){t.addClass("dropdown-menu");var r=n.templateUrl;
r&&(a.dropdownMenuTemplateUrl=r),a.dropdownMenu||(a.dropdownMenu=t)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",
link:function(e,t,n,a){if(a){t.addClass("dropdown-toggle"),a.toggleElement=t;var r=function(r){r.preventDefault(),t.hasClass("disabled")||n.disabled||e.$apply(function(){
a.toggle()})};t.bind("click",r),t.attr({"aria-haspopup":!0,"aria-expanded":!1}),e.$watch(a.isOpen,function(e){t.attr("aria-expanded",!!e);
}),e.$on("$destroy",function(){t.unbind("click",r)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap","ui.bootstrap.position"]).factory("$$multiMap",function(){
return{createNew:function(){var e={};return{entries:function(){return Object.keys(e).map(function(t){return{key:t,value:e[t]}})},
get:function(t){return e[t]},hasKey:function(t){return!!e[t]},keys:function(){return Object.keys(e)},put:function(t,n){e[t]||(e[t]=[]),
e[t].push(n)},remove:function(t,n){var a=e[t];if(a){var r=a.indexOf(n);-1!==r&&a.splice(r,1),a.length||delete e[t]}}}}}}).provider("$uibResolve",function(){
var e=this;this.resolver=null,this.setResolver=function(e){this.resolver=e},this.$get=["$injector","$q",function(t,n){var a=e.resolver?t.get(e.resolver):null;
return{resolve:function(e,r,i,o){if(a)return a.resolve(e,r,i,o);var s=[];return angular.forEach(e,function(e){s.push(angular.isFunction(e)||angular.isArray(e)?n.resolve(t.invoke(e)):angular.isString(e)?n.resolve(t.get(e)):n.resolve(e));
}),n.all(s).then(function(t){var n={},a=0;return angular.forEach(e,function(e,r){n[r]=t[a++]}),n})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(e,t,n){
function a(t,a,r){r.modalInClass&&(e.addClass(a,r.modalInClass),t.$on(n.NOW_CLOSING_EVENT,function(n,i){var o=i();t.modalOptions.animation?e.removeClass(a,r.modalInClass).then(o):o();
}))}return{restrict:"A",compile:function(e,t){return e.addClass(t.backdropClass),a}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(e,t,n,a){
return{scope:{index:"@"},restrict:"A",transclude:!0,templateUrl:function(e,t){return t.templateUrl||"uib/template/modal/window.html";
},link:function(r,i,o){i.addClass(o.windowTopClass||""),r.size=o.size,r.close=function(t){var n=e.getTop();n&&n.value.backdrop&&"static"!==n.value.backdrop&&t.target===t.currentTarget&&(t.preventDefault(),
t.stopPropagation(),e.dismiss(n.key,"backdrop click"))},i.on("click",r.close),r.$isRendered=!0;var s=t.defer();r.$$postDigest(function(){
s.resolve()}),s.promise.then(function(){var s=null;o.modalInClass&&(s=n(i,{addClass:o.modalInClass}).start(),r.$on(e.NOW_CLOSING_EVENT,function(e,t){
var a=t();n(i,{removeClass:o.modalInClass}).start().then(a)})),t.when(s).then(function(){var t=e.getTop();if(t&&e.modalRendered(t.key),
!a[0].activeElement||!i[0].contains(a[0].activeElement)){var n=i[0].querySelector("[autofocus]");n?n.focus():i[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){
return{compile:function(e,t){t.modalAnimation&&e.addClass(t.uibModalAnimationClass)}}}).directive("uibModalTransclude",["$animate",function(e){
return{link:function(t,n,a,r,i){i(t.$parent,function(t){n.empty(),e.enter(t,n)})}}}]).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(e,t,n,a,r,i,o,s,l){
function u(e){var t="-";return e.replace(F,function(e,n){return(n?t:"")+e.toLowerCase()})}function c(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length);
}function d(){for(var e=-1,t=$.keys(),n=0;n<t.length;n++)$.get(t[n]).value.backdrop&&(e=n);return e>-1&&x>e&&(e=x),e}function p(e,t){
var n=$.get(e).value,a=n.appendTo;$.remove(e),O=$.top(),O&&(x=parseInt(O.value.modalDomEl.attr("index"),10)),h(n.modalDomEl,n.modalScope,function(){
var t=n.openedClass||D;M.remove(t,e);var r=M.hasKey(t);a.toggleClass(t,r),!r&&k&&k.heightOverflow&&k.scrollbarWidth&&(a.css(k.originalRight?{
paddingRight:k.originalRight+"px"}:{paddingRight:""}),k=null),f(!0)},n.closedDeferred),m(),t&&t.focus?t.focus():a.focus&&a.focus();
}function f(e){var t;$.length()>0&&(t=$.top().value,t.modalDomEl.toggleClass(t.windowTopClass||"",e))}function m(){if(y&&-1===d()){
var e=w;h(y,w,function(){e=null}),y=void 0,w=void 0}}function h(t,n,a,r){function o(){o.done||(o.done=!0,e.leave(t).then(function(){
a&&a(),t.remove(),r&&r.resolve()}),n.$destroy())}var s,l=null,u=function(){return s||(s=i.defer(),l=s.promise),function(){s.resolve();
}};return n.$broadcast(T.NOW_CLOSING_EVENT,u),i.when(l).then(o)}function g(e){if(e.isDefaultPrevented())return e;var t=$.top();if(t)switch(e.which){
case 27:t.value.keyboard&&(e.preventDefault(),r.$apply(function(){T.dismiss(t.key,"escape key press")}));break;case 9:var n=T.loadFocusElementList(t),a=!1;
e.shiftKey?(T.isFocusInFirstItem(e,n)||T.isModalFocused(e,t))&&(a=T.focusLastFocusableElement(n)):T.isFocusInLastItem(e,n)&&(a=T.focusFirstFocusableElement(n)),
a&&(e.preventDefault(),e.stopPropagation())}}function b(e,t,n){return!e.value.modalScope.$broadcast("modal.closing",t,n).defaultPrevented;
}function v(){Array.prototype.forEach.call(document.querySelectorAll("["+C+"]"),function(e){var t=parseInt(e.getAttribute(C),10),n=t-1;
e.setAttribute(C,n),n||(e.removeAttribute(C),e.removeAttribute("aria-hidden"))})}var y,w,k,D="modal-open",$=s.createNew(),M=o.createNew(),T={
NOW_CLOSING_EVENT:"modal.stack.now-closing"},x=0,O=null,C="data-bootstrap-modal-aria-hidden-count",E="a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]",F=/[A-Z]/g;
return r.$watch(d,function(e){w&&(w.index=e)}),n.on("keydown",g),r.$on("$destroy",function(){n.off("keydown",g)}),T.open=function(t,i){
function o(e){function t(e){var t=e.parent()?e.parent().children():[];return Array.prototype.filter.call(t,function(t){return t!==e[0];
})}if(e&&"BODY"!==e[0].tagName)return t(e).forEach(function(e){var t="true"===e.getAttribute("aria-hidden"),n=parseInt(e.getAttribute(C),10);
n||(n=t?1:0),e.setAttribute(C,n+1),e.setAttribute("aria-hidden","true")}),o(e.parent())}var s=n[0].activeElement,c=i.openedClass||D;
f(!1),O=$.top(),$.add(t,{deferred:i.deferred,renderDeferred:i.renderDeferred,closedDeferred:i.closedDeferred,modalScope:i.scope,backdrop:i.backdrop,
keyboard:i.keyboard,openedClass:i.openedClass,windowTopClass:i.windowTopClass,animation:i.animation,appendTo:i.appendTo}),M.put(c,t);
var p=i.appendTo,m=d();if(!p.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");m>=0&&!y&&(w=r.$new(!0),
w.modalOptions=i,w.index=m,y=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),y.attr({class:"modal-backdrop","ng-style":"{'z-index': 1040 + (index && 1 || 0) + index*10}",
"uib-modal-animation-class":"fade","modal-in-class":"in"}),i.backdropClass&&y.addClass(i.backdropClass),i.animation&&y.attr("modal-animation","true"),
a(y)(w),e.enter(y,p),l.isScrollable(p)&&(k=l.scrollbarPadding(p),k.heightOverflow&&k.scrollbarWidth&&p.css({paddingRight:k.right+"px"
})));var h;i.component?(h=document.createElement(u(i.component.name)),h=angular.element(h),h.attr({resolve:"$resolve","modal-instance":"$uibModalInstance",
close:"$close($value)",dismiss:"$dismiss($value)"})):h=i.content,x=O?parseInt(O.value.modalDomEl.attr("index"),10)+1:0;var g=angular.element('<div uib-modal-window="modal-window"></div>');
g.attr({class:"modal","template-url":i.windowTemplateUrl,"window-top-class":i.windowTopClass,role:"dialog","aria-labelledby":i.ariaLabelledBy,
"aria-describedby":i.ariaDescribedBy,size:i.size,index:x,animate:"animate","ng-style":"{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",
tabindex:-1,"uib-modal-animation-class":"fade","modal-in-class":"in"}).append(h),i.windowClass&&g.addClass(i.windowClass),i.animation&&g.attr("modal-animation","true"),
p.addClass(c),i.scope&&(i.scope.$$topModalIndex=x),e.enter(a(g)(i.scope),p),$.top().value.modalDomEl=g,$.top().value.modalOpener=s,
o(g)},T.close=function(e,t){var n=$.get(e);return v(),n&&b(n,t,!0)?(n.value.modalScope.$$uibDestructionScheduled=!0,n.value.deferred.resolve(t),
p(e,n.value.modalOpener),!0):!n},T.dismiss=function(e,t){var n=$.get(e);return v(),n&&b(n,t,!1)?(n.value.modalScope.$$uibDestructionScheduled=!0,
n.value.deferred.reject(t),p(e,n.value.modalOpener),!0):!n},T.dismissAll=function(e){for(var t=this.getTop();t&&this.dismiss(t.key,e);)t=this.getTop();
},T.getTop=function(){return $.top()},T.modalRendered=function(e){var t=$.get(e);T.focusFirstFocusableElement(T.loadFocusElementList(t)),
t&&t.value.renderDeferred.resolve()},T.focusFirstFocusableElement=function(e){return e.length>0?(e[0].focus(),!0):!1},T.focusLastFocusableElement=function(e){
return e.length>0?(e[e.length-1].focus(),!0):!1},T.isModalFocused=function(e,t){if(e&&t){var n=t.value.modalDomEl;if(n&&n.length)return(e.target||e.srcElement)===n[0];
}return!1},T.isFocusInFirstItem=function(e,t){return t.length>0?(e.target||e.srcElement)===t[0]:!1},T.isFocusInLastItem=function(e,t){
return t.length>0?(e.target||e.srcElement)===t[t.length-1]:!1},T.loadFocusElementList=function(e){if(e){var t=e.value.modalDomEl;if(t&&t.length){
var n=t[0].querySelectorAll(E);return n?Array.prototype.filter.call(n,function(e){return c(e)}):n}}},T}]).provider("$uibModal",function(){
var e={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(t,n,a,r,i,o,s){
function l(e){return e.template?n.when(e.template):r(angular.isFunction(e.templateUrl)?e.templateUrl():e.templateUrl)}var u={},c=null;
return u.getPromiseChain=function(){return c},u.open=function(r){function u(){return g}var d=n.defer(),p=n.defer(),f=n.defer(),m=n.defer(),h={
result:d.promise,opened:p.promise,closed:f.promise,rendered:m.promise,close:function(e){return s.close(h,e)},dismiss:function(e){
return s.dismiss(h,e)}};if(r=angular.extend({},e.options,r),r.resolve=r.resolve||{},r.appendTo=r.appendTo||a.find("body").eq(0),!r.component&&!r.template&&!r.templateUrl)throw new Error("One of component or template or templateUrl options is required.");
var g;g=r.component?n.when(o.resolve(r.resolve,{},null,null)):n.all([l(r),o.resolve(r.resolve,{},null,null)]);var b;return b=c=n.all([c]).then(u,u).then(function(e){
function n(t,n,a,r){t.$scope=o,t.$scope.$resolve={},a?t.$scope.$uibModalInstance=h:t.$uibModalInstance=h;var i=n?e[1]:e;angular.forEach(i,function(e,n){
r&&(t[n]=e),t.$scope.$resolve[n]=e})}var a=r.scope||t,o=a.$new();o.$close=h.close,o.$dismiss=h.dismiss,o.$on("$destroy",function(){
o.$$uibDestructionScheduled||o.$dismiss("$uibUnscheduledDestruction")});var l,u,c={scope:o,deferred:d,renderDeferred:m,closedDeferred:f,
animation:r.animation,backdrop:r.backdrop,keyboard:r.keyboard,backdropClass:r.backdropClass,windowTopClass:r.windowTopClass,windowClass:r.windowClass,
windowTemplateUrl:r.windowTemplateUrl,ariaLabelledBy:r.ariaLabelledBy,ariaDescribedBy:r.ariaDescribedBy,size:r.size,openedClass:r.openedClass,
appendTo:r.appendTo},g={},b={};r.component?(n(g,!1,!0,!1),g.name=r.component,c.component=g):r.controller&&(n(b,!0,!1,!0),u=i(r.controller,b,!0,r.controllerAs),
r.controllerAs&&r.bindToController&&(l=u.instance,l.$close=o.$close,l.$dismiss=o.$dismiss,angular.extend(l,{$resolve:b.$scope.$resolve
},a)),l=u(),angular.isFunction(l.$onInit)&&l.$onInit()),r.component||(c.content=e[0]),s.open(h,c),p.resolve(!0)},function(e){p.reject(e),
d.reject(e)})["finally"](function(){c===b&&(c=null)}),h},u}]};return e}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){
return{createNew:function(){var e=[];return{add:function(t,n){e.push({key:t,value:n})},get:function(t){for(var n=0;n<e.length;n++)if(t===e[n].key)return e[n];
},keys:function(){for(var t=[],n=0;n<e.length;n++)t.push(e[n].key);return t},top:function(){return e[e.length-1]},remove:function(t){
for(var n=-1,a=0;a<e.length;a++)if(t===e[a].key){n=a;break}return e.splice(n,1)[0]},removeTop:function(){return e.pop()},length:function(){
return e.length}}}}}),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(e,t,n){
function a(){return angular.isDefined(e.maxParam)?e.maxParam:n.max}var r=this,i=angular.isDefined(t.animate)?e.$parent.$eval(t.animate):n.animate;
this.bars=[],e.max=a(),this.addBar=function(e,t,n){i||t.css({transition:"none"}),this.bars.push(e),e.max=a(),e.title=n&&angular.isDefined(n.title)?n.title:"progressbar",
e.$watch("value",function(){e.recalculatePercentage()}),e.recalculatePercentage=function(){var t=r.bars.reduce(function(e,t){return t.percent=+(100*t.value/t.max).toFixed(2),
e+t.percent},0);t>100&&(e.percent-=t-100)},e.$on("$destroy",function(){t=null,r.removeBar(e)})},this.removeBar=function(e){this.bars.splice(this.bars.indexOf(e),1),
this.bars.forEach(function(e){e.recalculatePercentage()})},e.$watch("maxParam",function(){r.bars.forEach(function(e){e.max=a(),e.recalculatePercentage();
})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",
scope:{maxParam:"=?max"},templateUrl:"uib/template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,
transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"uib/template/progressbar/bar.html",link:function(e,t,n,a){
a.addBar(e,t,n)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{
value:"=",maxParam:"=?max",type:"@"},templateUrl:"uib/template/progressbar/progressbar.html",link:function(e,t,n,a){a.addBar(e,angular.element(t.children()[0]),{
title:n.title})}}}),angular.module("uib/template/datepicker/datepicker.html",[]).run(["$templateCache",function(e){e.put("uib/template/datepicker/datepicker.html",'<div ng-switch="datepickerMode">\n  <div uib-daypicker ng-switch-when="day" tabindex="0" class="uib-daypicker"></div>\n  <div uib-monthpicker ng-switch-when="month" tabindex="0" class="uib-monthpicker"></div>\n  <div uib-yearpicker ng-switch-when="year" tabindex="0" class="uib-yearpicker"></div>\n</div>\n');
}]),angular.module("uib/template/datepicker/day.html",[]).run(["$templateCache",function(e){e.put("uib/template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index" role="row">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
}]),angular.module("uib/template/datepicker/month.html",[]).run(["$templateCache",function(e){e.put("uib/template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::yearHeaderColspan}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
}]),angular.module("uib/template/datepicker/year.html",[]).run(["$templateCache",function(e){e.put("uib/template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
}]),angular.module("uib/template/datepickerPopup/popup.html",[]).run(["$templateCache",function(e){e.put("uib/template/datepickerPopup/popup.html",'<ul role="presentation" class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n  <li ng-transclude></li>\n  <li ng-if="showButtonBar" class="uib-button-bar">\n    <span class="btn-group pull-left">\n      <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n      <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n    </span>\n    <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n  </li>\n</ul>\n');
}]),angular.module("uib/template/modal/window.html",[]).run(["$templateCache",function(e){e.put("uib/template/modal/window.html","<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n");
}]),angular.module("uib/template/progressbar/bar.html",[]).run(["$templateCache",function(e){e.put("uib/template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n');
}]),angular.module("uib/template/progressbar/progress.html",[]).run(["$templateCache",function(e){e.put("uib/template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>');
}]),angular.module("uib/template/progressbar/progressbar.html",[]).run(["$templateCache",function(e){e.put("uib/template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n');
}]),angular.module("ui.bootstrap.datepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'),
angular.$$uibDatepickerCss=!0}),angular.module("ui.bootstrap.datepickerPopup").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerpopupCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'),
angular.$$uibDatepickerpopupCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),
angular.$$uibPositionCss=!0});(function(ng){"use strict";var module=ng.module("zInfiniteScroll",[]);module.directive("zInfiniteScroll",["$timeout","$document",function($timeout,$document){
return{restrict:"A",link:function link($scope,$element,$attr){var lengthThreshold=$attr.scrollThreshold||50,timeThreshold=$attr.timeThreshold||200,handler=$scope.$eval($attr.zInfiniteScroll),bodyScroll=$scope.$eval($attr.bodyScroll)===true?true:false,inverse=$scope.$eval($attr.inverse)===true?true:false,promise=null,lastScrolled=9999,element=$element[0],scrollEvent,isDestorying=false;
$scope.$on("$destroy",function handleDestroyEvent(){isDestorying=true;$document.off("scroll",scrollEvent)});lengthThreshold=parseInt(lengthThreshold,10);
timeThreshold=parseInt(timeThreshold,10);if(!handler||!ng.isFunction(handler)){handler=ng.noop}if(inverse){scrollEvent=scrollUntilDataReady;
}else{scrollEvent=scrollUntilTimeout}if(bodyScroll){$document.on("scroll",scrollEvent);element=$document[0].documentElement}else{
$element.on("scroll",scrollEvent)}function scrollUntilDataReady(){if(isDestorying)return;var scrolled=calculateBarScrolled();if(scrolled<lengthThreshold&&scrolled-lastScrolled<0&&element.scrollHeight>=element.clientHeight){
var originalHeight=element.scrollHeight;var handlerCallback=$scope.$apply(handler);if(handlerCallback&&typeof handlerCallback.then==="function"){
handlerCallback.then(function(){$timeout(function(){element.scrollTop=element.scrollHeight-originalHeight})})}}lastScrolled=scrolled;
}function scrollUntilTimeout(){if(isDestorying)return;var scrolled=calculateBarScrolled();if(scrolled<lengthThreshold&&scrolled-lastScrolled<0&&element.scrollHeight>=element.clientHeight){
if(promise!==null){$timeout.cancel(promise)}promise=$timeout(function(){handler();promise=null},timeThreshold)}lastScrolled=scrolled;
}function calculateBarScrolled(){var scrollTop;if(bodyScroll){scrollTop=$document[0].documentElement.scrollTop||$document[0].body.scrollTop;
}else{scrollTop=element.scrollTop}return inverse?scrollTop:element.scrollHeight-(element.clientHeight+scrollTop)}}}}])})(angular);
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.amplitude=t();
}(this,function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s";
}function n(){var e;try{e=document.cookie}catch(e){return"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e.stack||e),
{}}return function(e){var t,n={},r=e.split(/ *; */);if(""==r[0])return n;for(var i=0;i<r.length;++i)t=r[i].split("="),n[o(t[0])]=o(t[1]);
return n}(e)}function r(e){try{return encodeURIComponent(e)}catch(t){E("error `encode(%o)` - %o",e,t)}}function o(e){try{return decodeURIComponent(e);
}catch(t){E("error `decode(%o)` - %o",e,t)}}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function s(e){switch(typeof e){
case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}}function a(e,t,n,r){
return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?u(kt(e),function(r){var o=encodeURIComponent(s(r))+n;return jt(e[r])?u(e[r],function(e){
return o+encodeURIComponent(s(e))}).join(t):o+encodeURIComponent(s(e[r]))}).join(t):r?encodeURIComponent(s(r))+n+encodeURIComponent(s(e)):"";
}function u(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}function c(e,t,n,r){t=t||"&",
n=n||"=";var o={};if("string"!=typeof e||0===e.length)return o;var s=/\+/g;e=e.split(t);var a=1e3;r&&"number"==typeof r.maxKeys&&(a=r.maxKeys);
var u=e.length;a>0&&u>a&&(u=a);for(var c=0;c<u;++c){var p,l,f,d,h=e[c].replace(s,"%20"),g=h.indexOf(n);g>=0?(p=h.substr(0,g),l=h.substr(g+1)):(p=h,
l=""),f=decodeURIComponent(p),d=decodeURIComponent(l),i(o,f)?jt(o[f])?o[f].push(d):o[f]=[o[f],d]:o[f]=d}return o}var p,l="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f=(e(function(e,t){
(function(){function n(e,t){function o(e){if(o[e]!==v)return o[e];var n;if("bug-string-char-index"==e)n="a"!="a"[0];else if("json"==e)n=o("json-stringify")&&o("json-parse");else{
var r,i='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==e){var u=t.stringify,p="function"==typeof u&&_;if(p){
(r=function(){return 1}).toJSON=r;try{p="0"===u(0)&&"0"===u(new s)&&'""'==u(new a)&&u(m)===v&&u(v)===v&&u()===v&&"1"===u(r)&&"[1]"==u([r])&&"[null]"==u([v])&&"null"==u(null)&&"[null,null,null]"==u([v,m,null])&&u({
a:[r,!0,!1,null,"\0\b\n\f\r\t"]})==i&&"1"===u(null,r)&&"[\n 1,\n 2\n]"==u([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==u(new c((-864e13)))&&'"+275760-09-13T00:00:00.000Z"'==u(new c(864e13))&&'"-000001-01-01T00:00:00.000Z"'==u(new c((-621987552e5)))&&'"1969-12-31T23:59:59.999Z"'==u(new c((-1)));
}catch(e){p=!1}}n=p}if("json-parse"==e){var l=t.parse;if("function"==typeof l)try{if(0===l("0")&&!l(!1)){var f=5==(r=l(i)).a.length&&1===r.a[0];
if(f){try{f=!l('"\t"')}catch(e){}if(f)try{f=1!==l("01")}catch(e){}if(f)try{f=1!==l("1.")}catch(e){}}}}catch(e){f=!1}n=f}}return o[e]=!!n;
}e||(e=i.Object()),t||(t=i.Object());var s=e.Number||i.Number,a=e.String||i.String,u=e.Object||i.Object,c=e.Date||i.Date,p=e.SyntaxError||i.SyntaxError,l=e.TypeError||i.TypeError,f=e.Math||i.Math,d=e.JSON||i.JSON;
"object"==typeof d&&d&&(t.stringify=d.stringify,t.parse=d.parse);var h,g,v,y=u.prototype,m=y.toString,_=new c((-0xc782b5b800cec));
try{_=-109252==_.getUTCFullYear()&&0===_.getUTCMonth()&&1===_.getUTCDate()&&10==_.getUTCHours()&&37==_.getUTCMinutes()&&6==_.getUTCSeconds()&&708==_.getUTCMilliseconds();
}catch(e){}if(!o("json")){var b=o("bug-string-char-index");if(!_)var w=f.floor,I=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(e,t){
return I[t]+365*(e-1970)+w((e-1969+(t=+(t>1)))/4)-w((e-1901+t)/100)+w((e-1601+t)/400)};if((h=y.hasOwnProperty)||(h=function(e){var t,n={};
return(n.__proto__=null,n.__proto__={toString:1},n).toString!=m?h=function(e){var t=this.__proto__,n=e in(this.__proto__=null,this);
return this.__proto__=t,n}:(t=n.constructor,h=function(e){var n=(this.constructor||t).prototype;return e in this&&!(e in n&&this[e]===n[e]);
}),n=null,h.call(this,e)}),g=function(e,t){var n,o,i,s=0;(n=function(){this.valueOf=0}).prototype.valueOf=0,o=new n;for(i in o)h.call(o,i)&&s++;
return n=o=null,s?g=2==s?function(e,t){var n,r={},o="[object Function]"==m.call(e);for(n in e)o&&"prototype"==n||h.call(r,n)||!(r[n]=1)||!h.call(e,n)||t(n);
}:function(e,t){var n,r,o="[object Function]"==m.call(e);for(n in e)o&&"prototype"==n||!h.call(e,n)||(r="constructor"===n)||t(n);(r||h.call(e,n="constructor"))&&t(n);
}:(o=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],g=function(e,t){
var n,i,s="[object Function]"==m.call(e),a=!s&&"function"!=typeof e.constructor&&r[typeof e.hasOwnProperty]&&e.hasOwnProperty||h;for(n in e)s&&"prototype"==n||!a.call(e,n)||t(n);
for(i=o.length;n=o[--i];a.call(e,n)&&t(n));}),g(e,t)},!o("json-stringify")){var S={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",
9:"\\t"},C=function(e,t){return("000000"+(t||0)).slice(-e)},O=function(e){for(var t='"',n=0,r=e.length,o=!b||r>10,i=o&&(b?e.split(""):e);n<r;n++){
var s=e.charCodeAt(n);switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:t+=S[s];break;default:if(s<32){t+="\\u00"+C(2,s.toString(16));
break}t+=o?i[n]:e.charAt(n)}}return t+'"'},N=function(e,t,n,r,o,i,s){var a,u,c,p,f,d,y,_,b,I,S,A,T,x,j,k;try{a=t[e]}catch(e){}if("object"==typeof a&&a)if("[object Date]"!=(u=m.call(a))||h.call(a,"toJSON"))"function"==typeof a.toJSON&&("[object Number]"!=u&&"[object String]"!=u&&"[object Array]"!=u||h.call(a,"toJSON"))&&(a=a.toJSON(e));else if(a>-1/0&&a<1/0){
if(E){for(f=w(a/864e5),c=w(f/365.2425)+1970-1;E(c+1,0)<=f;c++);for(p=w((f-E(c,0))/30.42);E(c,p+1)<=f;p++);f=1+f-E(c,p),y=w((d=(a%864e5+864e5)%864e5)/36e5)%24,
_=w(d/6e4)%60,b=w(d/1e3)%60,I=d%1e3}else c=a.getUTCFullYear(),p=a.getUTCMonth(),f=a.getUTCDate(),y=a.getUTCHours(),_=a.getUTCMinutes(),
b=a.getUTCSeconds(),I=a.getUTCMilliseconds();a=(c<=0||c>=1e4?(c<0?"-":"+")+C(6,c<0?-c:c):C(4,c))+"-"+C(2,p+1)+"-"+C(2,f)+"T"+C(2,y)+":"+C(2,_)+":"+C(2,b)+"."+C(3,I)+"Z";
}else a=null;if(n&&(a=n.call(t,e,a)),null===a)return"null";if("[object Boolean]"==(u=m.call(a)))return""+a;if("[object Number]"==u)return a>-1/0&&a<1/0?""+a:"null";
if("[object String]"==u)return O(""+a);if("object"==typeof a){for(x=s.length;x--;)if(s[x]===a)throw l();if(s.push(a),S=[],j=i,i+=o,
"[object Array]"==u){for(T=0,x=a.length;T<x;T++)A=N(T,a,n,r,o,i,s),S.push(A===v?"null":A);k=S.length?o?"[\n"+i+S.join(",\n"+i)+"\n"+j+"]":"["+S.join(",")+"]":"[]";
}else g(r||a,function(e){var t=N(e,a,n,r,o,i,s);t!==v&&S.push(O(e)+":"+(o?" ":"")+t)}),k=S.length?o?"{\n"+i+S.join(",\n"+i)+"\n"+j+"}":"{"+S.join(",")+"}":"{}";
return s.pop(),k}};t.stringify=function(e,t,n){var o,i,s,a;if(r[typeof t]&&t)if("[object Function]"==(a=m.call(t)))i=t;else if("[object Array]"==a){
s={};for(var u,c=0,p=t.length;c<p;u=t[c++],("[object String]"==(a=m.call(u))||"[object Number]"==a)&&(s[u]=1));}if(n)if("[object Number]"==(a=m.call(n))){
if((n-=n%1)>0)for(o="",n>10&&(n=10);o.length<n;o+=" ");}else"[object String]"==a&&(o=n.length<=10?n:n.slice(0,10));return N("",(u={},
u[""]=e,u),i,s,o,"",[])}}if(!o("json-parse")){var A,T,x=a.fromCharCode,j={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",
114:"\r"},k=function(){throw A=T=null,p()},R=function(){for(var e,t,n,r,o,i=T,s=i.length;A<s;)switch(o=i.charCodeAt(A)){case 9:case 10:
case 13:case 32:A++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=b?i.charAt(A):i[A],A++,e;case 34:for(e="@",A++;A<s;)if((o=i.charCodeAt(A))<32)k();else if(92==o)switch(o=i.charCodeAt(++A)){
case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=j[o],A++;break;case 117:for(t=++A,n=A+4;A<n;A++)(o=i.charCodeAt(A))>=48&&o<=57||o>=97&&o<=102||o>=65&&o<=70||k();
e+=x("0x"+i.slice(t,A));break;default:k()}else{if(34==o)break;for(o=i.charCodeAt(A),t=A;o>=32&&92!=o&&34!=o;)o=i.charCodeAt(++A);e+=i.slice(t,A);
}if(34==i.charCodeAt(A))return A++,e;k();default:if(t=A,45==o&&(r=!0,o=i.charCodeAt(++A)),o>=48&&o<=57){for(48==o&&(o=i.charCodeAt(A+1))>=48&&o<=57&&k(),
r=!1;A<s&&(o=i.charCodeAt(A))>=48&&o<=57;A++);if(46==i.charCodeAt(A)){for(n=++A;n<s&&(o=i.charCodeAt(n))>=48&&o<=57;n++);n==A&&k(),
A=n}if(101==(o=i.charCodeAt(A))||69==o){for(43!=(o=i.charCodeAt(++A))&&45!=o||A++,n=A;n<s&&(o=i.charCodeAt(n))>=48&&o<=57;n++);n==A&&k(),
A=n}return+i.slice(t,A)}if(r&&k(),"true"==i.slice(A,A+4))return A+=4,!0;if("false"==i.slice(A,A+5))return A+=5,!1;if("null"==i.slice(A,A+4))return A+=4,
null;k()}return"$"},P=function(e){var t,n;if("$"==e&&k(),"string"==typeof e){if("@"==(b?e.charAt(0):e[0]))return e.slice(1);if("["==e){
for(t=[];"]"!=(e=R());n||(n=!0))n&&(","==e?"]"==(e=R())&&k():k()),","==e&&k(),t.push(P(e));return t}if("{"==e){for(t={};"}"!=(e=R());n||(n=!0))n&&(","==e?"}"==(e=R())&&k():k()),
","!=e&&"string"==typeof e&&"@"==(b?e.charAt(0):e[0])&&":"==R()||k(),t[e.slice(1)]=P(R());return t}k()}return e},F=function(e,t,n){
var r=U(e,t,n);r===v?delete e[t]:e[t]=r},U=function(e,t,n){var r,o=e[t];if("object"==typeof o&&o)if("[object Array]"==m.call(o))for(r=o.length;r--;)F(o,r,n);else g(o,function(e){
F(o,e,n)});return n.call(e,t,o)};t.parse=function(e,t){var n,r;return A=0,T=""+e,n=P(R()),"$"!=R()&&k(),A=T=null,t&&"[object Function]"==m.call(t)?U((r={},
r[""]=n,r),"",t):n}}}return t.runInContext=n,t}var r={function:!0,object:!0},o=r.object&&t&&!t.nodeType&&t,i=r[typeof window]&&window||this,s=o&&r.object&&e&&!e.nodeType&&"object"==typeof l&&l;
if(!s||s.global!==s&&s.window!==s&&s.self!==s||(i=s),o)n(i,o);else{var a=i.JSON,u=i.JSON3,c=!1,p=n(i,i.JSON3={noConflict:function(){
return c||(c=!0,i.JSON=a,i.JSON3=u,a=u=null),p}});i.JSON={parse:p.parse,stringify:p.stringify}}}).call(l)}),{DEFAULT_INSTANCE:"$default_instance",
API_VERSION:2,MAX_STRING_LENGTH:4096,MAX_PROPERTY_KEYS:1e3,IDENTIFY_EVENT:"$identify",LAST_EVENT_ID:"amplitude_lastEventId",LAST_EVENT_TIME:"amplitude_lastEventTime",
LAST_IDENTIFY_ID:"amplitude_lastIdentifyId",LAST_SEQUENCE_NUMBER:"amplitude_lastSequenceNumber",SESSION_ID:"amplitude_sessionId",
DEVICE_ID:"amplitude_deviceId",OPT_OUT:"amplitude_optOut",USER_ID:"amplitude_userId",COOKIE_TEST:"amplitude_cookie_test",REVENUE_EVENT:"revenue_amount",
REVENUE_PRODUCT_ID:"$productId",REVENUE_QUANTITY:"$quantity",REVENUE_PRICE:"$price",REVENUE_REVENUE_TYPE:"$revenueType",AMP_DEVICE_ID_PARAM:"amp_device_id"
}),d={encode:function(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),
t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128));
}return t},decode:function(e){for(var t="",n=0,r=0,o=0,i=0;n<e.length;)(r=e.charCodeAt(n))<128?(t+=String.fromCharCode(r),n++):r>191&&r<224?(o=e.charCodeAt(n+1),
t+=String.fromCharCode((31&r)<<6|63&o),n+=2):(o=e.charCodeAt(n+1),i=e.charCodeAt(n+2),t+=String.fromCharCode((15&r)<<12|(63&o)<<6|63&i),
n+=3);return t}},h={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){try{if(window.btoa&&window.atob)return window.btoa(unescape(encodeURIComponent(e)));
}catch(e){}return h._encode(e)},_encode:function(e){var t,n,r,o,i,s,a,u="",c=0;for(e=d.encode(e);c<e.length;)o=(t=e.charCodeAt(c++))>>2,
i=(3&t)<<4|(n=e.charCodeAt(c++))>>4,s=(15&n)<<2|(r=e.charCodeAt(c++))>>6,a=63&r,isNaN(n)?s=a=64:isNaN(r)&&(a=64),u=u+h._keyStr.charAt(o)+h._keyStr.charAt(i)+h._keyStr.charAt(s)+h._keyStr.charAt(a);
return u},decode:function(e){try{if(window.btoa&&window.atob)return decodeURIComponent(escape(window.atob(e)))}catch(e){}return h._decode(e);
},_decode:function(e){var t,n,r,o,i,s,a="",u=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<e.length;)t=h._keyStr.indexOf(e.charAt(u++))<<2|(o=h._keyStr.indexOf(e.charAt(u++)))>>4,
n=(15&o)<<4|(i=h._keyStr.indexOf(e.charAt(u++)))>>2,r=(3&i)<<6|(s=h._keyStr.indexOf(e.charAt(u++))),a+=String.fromCharCode(t),64!==i&&(a+=String.fromCharCode(n)),
64!==s&&(a+=String.fromCharCode(r));return a=d.decode(a)}},g=e(function(e,t){t.parse=function(e){var t=document.createElement("a");
return t.href=e,{href:t.href,host:t.host||location.host,port:"0"===t.port||""===t.port?function(e){switch(e){case"http:":return 80;
case"https:":return 443;default:return location.port}}(t.protocol):t.port,hash:t.hash,hostname:t.hostname||location.hostname,pathname:"/"!=t.pathname.charAt(0)?"/"+t.pathname:t.pathname,
protocol:t.protocol&&":"!=t.protocol?t.protocol:location.protocol,search:t.search,query:t.search.slice(1)}},t.isAbsolute=function(e){
return 0==e.indexOf("//")||!!~e.indexOf("://")},t.isRelative=function(e){return!t.isAbsolute(e)},t.isCrossDomain=function(e){e=t.parse(e);
var n=t.parse(window.location.href);return e.hostname!==n.hostname||e.port!==n.port||e.protocol!==n.protocol}}),v=1e3,y=60*v,m=60*y,_=24*m,b=365.25*_,w=function(e,n){
n=n||{};var r=typeof e;if("string"===r&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*b;case"days":
case"day":case"d":return n*_;case"hours":case"hour":case"hrs":case"hr":case"h":return n*m;case"minutes":case"minute":case"mins":case"min":
case"m":return n*y;case"seconds":case"second":case"secs":case"sec":case"s":return n*v;case"milliseconds":case"millisecond":case"msecs":
case"msec":case"ms":return n;default:return}}}}(e);if("number"===r&&!1===isNaN(e))return n.long?function(e){return t(e,_,"day")||t(e,m,"hour")||t(e,y,"minute")||t(e,v,"second")||e+" ms";
}(e):function(e){return e>=_?Math.round(e/_)+"d":e>=m?Math.round(e/m)+"h":e>=y?Math.round(e/y)+"m":e>=v?Math.round(e/v)+"s":e+"ms";
}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))},I=e(function(e,t){function n(e){
function n(){if(n.enabled){var e=n,r=+new Date,i=r-(o||r);e.diff=i,e.prev=o,e.curr=r,o=r;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];
s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var u=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;
u++;var o=t.formatters[r];if("function"==typeof o){var i=s[u];n=o.call(e,i),s.splice(u,1),u--}return n}),t.formatArgs.call(e,s);(n.log||t.log||console.log.bind(console)).apply(e,s);
}}var o;return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),
r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),n.destroy=r,"function"==typeof t.init&&t.init(n),t.instances.push(n),n}function r(){
var e=t.instances.indexOf(this);return-1!==e&&(t.instances.splice(e,1),!0)}(t=e.exports=n.debug=n.default=n).coerce=function(e){return e instanceof Error?e.stack||e.message:e;
},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];var n,r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;
for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));
for(n=0;n<t.instances.length;n++){var i=t.instances[n];i.enabled=t.enabled(i.namespace)}},t.enabled=function(e){if("*"===e[e.length-1])return!0;
var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;
return!1},t.humanize=w,t.instances=[],t.names=[],t.skips=[],t.formatters={}}),E=e(function(e,t){function n(){var e;try{e=t.storage.debug;
}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=I).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments);
},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),
n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,
"%c"===e&&(i=o))}),e.splice(i,0,r)}},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=n,
t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}
}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],
t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(n())})("cookie"),S=function(e,t,o){
switch(arguments.length){case 3:case 2:return function(e,t,n){n=n||{};var o=r(e)+"="+r(t);null==t&&(n.maxage=-1),n.maxage&&(n.expires=new Date(+new Date+n.maxage)),
n.path&&(o+="; path="+n.path),n.domain&&(o+="; domain="+n.domain),n.expires&&(o+="; expires="+n.expires.toUTCString()),n.secure&&(o+="; secure"),
document.cookie=o}(e,t,o);case 1:return function(e){return n()[e]}(e);default:return n()}},C=e(function(e,t){function n(e){for(var n=t.cookie,r=t.levels(e),o=0;o<r.length;++o){
var i=r[o],s={domain:"."+i};if(n("__tld__",1,s),n("__tld__"))return n("__tld__",null,s),i}return""}var r=g.parse;n.levels=function(e){
var t=r(e).hostname.split("."),n=t[t.length-1],o=[];if(4===t.length&&n===parseInt(n,10))return o;if(t.length<=1)return o;for(var i=t.length-2;i>=0;--i)o.push(t.slice(i).join("."));
return o},n.cookie=S,t=e.exports=n}),O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N=Object.prototype.toString,A=function(e){
switch(N.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";
case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!=e?"nan":e&&1===e.nodeType?"element":"undefined"!=typeof Buffer&&Buffer.isBuffer(e)?"buffer":void 0===(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e))?"undefined":O(e);
},T="WARN",x={DISABLE:0,ERROR:1,WARN:2,INFO:3},j={error:function(e){T>=x.ERROR&&k(e)},warn:function(e){T>=x.WARN&&k(e)},info:function(e){
T>=x.INFO&&k(e)}},k=function(e){try{console.log("[Amplitude] "+e)}catch(e){}},R=function(e){return"string"===A(e)&&e.length>f.MAX_STRING_LENGTH?e.substring(0,f.MAX_STRING_LENGTH):e;
},P=function(e){var t=A(e);if("object"!==t)return j.error("Error: invalid properties format. Expecting Javascript object, received "+t+", ignoring"),
{};if(Object.keys(e).length>f.MAX_PROPERTY_KEYS)return j.error("Error: too many properties (more than 1000), ignoring"),{};var n={};
for(var r in e)if(e.hasOwnProperty(r)){var o=r,i=A(o);"string"!==i&&(o=String(o),j.warn("WARNING: Non-string property key, received type "+i+', coercing to string "'+o+'"'));
var s=U(o,e[r]);null!==s&&(n[o]=s)}return n},F=["null","nan","undefined","function","arguments","regexp","element"],U=function e(t,n){
var r=A(n);if(-1!==F.indexOf(r))j.warn('WARNING: Property key "'+t+'" with invalid value type '+r+", ignoring"),n=null;else if("error"===r)n=String(n),
j.warn('WARNING: Property key "'+t+'" with value type error, coercing to '+n);else if("array"===r){for(var o=[],i=0;i<n.length;i++){
var s=n[i],a=A(s);"array"!==a&&"object"!==a?o.push(e(t,s)):j.warn("WARNING: Cannot have "+a+" nested in an array property value, skipping");
}n=o}else"object"===r&&(n=P(n));return n},D=function(e,t){var n=A(t);if("string"===n)return t;if("date"===n||"number"===n||"boolean"===n)return t=String(t),
j.warn("WARNING: Non-string groupName, received type "+n+', coercing to string "'+t+'"'),t;if("array"===n){for(var r=[],o=0;o<t.length;o++){
var i=t[o],s=A(i);"array"!==s&&"object"!==s?"string"===s?r.push(i):"date"!==s&&"number"!==s&&"boolean"!==s||(i=String(i),j.warn("WARNING: Non-string groupName, received type "+s+', coercing to string "'+i+'"'),
r.push(i)):j.warn("WARNING: Skipping nested "+s+" in array groupName")}return r}j.warn("WARNING: Non-string groupName, received type "+n+". Please use strings or array of strings for groupName");
},M={setLogLevel:function(e){T=x[e]||T},getLogLevel:function(){return T},log:j,isEmptyString:function(e){return!e||0===e.length},
getQueryParam:function(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?void 0:decodeURIComponent(n[1].replace(/\+/g," "));
},sessionStorageEnabled:function(){try{if(window.sessionStorage)return!0}catch(e){}return!1},truncate:function e(t){if("array"===A(t))for(var n=0;n<t.length;n++)t[n]=e(t[n]);else if("object"===A(t))for(var r in t)t.hasOwnProperty(r)&&(t[r]=e(t[r]));else t=R(t);
return t},validateGroups:function(e){var t=A(e);if("object"!==t)return j.error("Error: invalid groups format. Expecting Javascript object, received "+t+", ignoring"),
{};var n={};for(var r in e)if(e.hasOwnProperty(r)){var o=r,i=A(o);"string"!==i&&(o=String(o),j.warn("WARNING: Non-string groupType, received type "+i+', coercing to string "'+o+'"'));
var s=D(o,e[r]);null!==s&&(n[o]=s)}return n},validateInput:function(e,t,n){return A(e)===n||(j.error("Invalid "+t+" input type. Expected "+n+" but received "+A(e)),
!1)},validateProperties:P},q={expirationDays:void 0,domain:void 0},L=function(e){var t="";return q.domain&&(t="."===q.domain.charAt(0)?q.domain.substring(1):q.domain),
e+t},V=function(e){try{for(var t=L(e)+"=",n=document.cookie.split(";"),r=null,o=0;o<n.length;o++){for(var i=n[o];" "===i.charAt(0);)i=i.substring(1,i.length);
if(0===i.indexOf(t)){r=i.substring(t.length,i.length);break}}return r?JSON.parse(h.decode(r)):null}catch(e){return null}},G=function(e,t){
try{return B(L(e),h.encode(JSON.stringify(t)),q),!0}catch(e){return!1}},B=function(e,t,n){var r=null!==t?n.expirationDays:-1;if(r){
var o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3),r=o}var i=e+"="+t;r&&(i+="; expires="+r.toUTCString()),i+="; path=/",n.domain&&(i+="; domain="+n.domain),
document.cookie=i},K=function(e){try{return B(L(e),null,q),!0}catch(e){return!1}},z={reset:function(){q={expirationDays:void 0,domain:void 0
}},options:function(e){if(0===arguments.length)return q;e=e||{},q.expirationDays=e.expirationDays;var t=M.isEmptyString(e.domain)?"."+C(window.location.href):e.domain,n=Math.random();
q.domain=t,G("amplitude_test",n);var r=V("amplitude_test");r&&r===n||(t=null),K("amplitude_test"),q.domain=t},get:V,set:G,remove:K
};if(function(){var e,t=new Date;try{return window.localStorage.setItem(t,t),e=window.localStorage.getItem(t)===String(t),window.localStorage.removeItem(t),
e}catch(e){}return!1}())p=window.localStorage;else if(window.globalStorage)try{p=window.globalStorage[window.location.hostname]}catch(e){}else{
var J=document.createElement("div"),$="localStorage";J.style.display="none",document.getElementsByTagName("head")[0].appendChild(J),
J.addBehavior&&(J.addBehavior("#default#userdata"),p={length:0,setItem:function(e,t){J.load($),J.getAttribute(e)||this.length++,J.setAttribute(e,t),
J.save($)},getItem:function(e){return J.load($),J.getAttribute(e)},removeItem:function(e){J.load($),J.getAttribute(e)&&this.length--,
J.removeAttribute(e),J.save($)},clear:function(){J.load($);for(var e,t=0;e=J.XMLDocument.documentElement.attributes[t++];)J.removeAttribute(e.name);
J.save($),this.length=0},key:function(e){return J.load($),J.XMLDocument.documentElement.attributes[e]}},J.load($),p.length=J.XMLDocument.documentElement.attributes.length);
}p||(p={length:0,setItem:function(e,t){},getItem:function(e){},removeItem:function(e){},clear:function(){},key:function(e){}});var W=p,Y=function(){
this.storage=null};Y.prototype._cookiesEnabled=function(){var e,t=String(new Date);try{return z.set(f.COOKIE_TEST,t),e=z.get(f.COOKIE_TEST)===t,
z.remove(f.COOKIE_TEST),e}catch(e){}return!1},Y.prototype.getStorage=function(){if(null!==this.storage)return this.storage;if(this._cookiesEnabled())this.storage=z;else{
this.storage={_options:{expirationDays:void 0,domain:void 0},reset:function(){this._options={expirationDays:void 0,domain:void 0};
},options:function(e){return 0===arguments.length?this._options:(e=e||{},this._options.expirationDays=e.expirationDays||this._options.expirationDays,
this._options.domain=e.domain||this._options.domain||window.location.hostname,this._options)},get:function(e){try{return JSON.parse(W.getItem("amp_cookiestore_"+e));
}catch(e){}return null},set:function(e,t){try{return W.setItem("amp_cookiestore_"+e,JSON.stringify(t)),!0}catch(e){}return!1},remove:function(e){
try{W.removeItem("amp_cookiestore_"+e)}catch(e){return!1}}}}return this.storage};var Q=function(){this.userPropertiesOperations={},
this.properties=[]};Q.prototype.add=function(e,t){return"number"===A(t)||"string"===A(t)?this._addOperation("$add",e,t):M.log.error("Unsupported type for value: "+A(t)+", expecting number or string"),
this},Q.prototype.append=function(e,t){return this._addOperation("$append",e,t),this},Q.prototype.clearAll=function(){return Object.keys(this.userPropertiesOperations).length>0?(this.userPropertiesOperations.hasOwnProperty("$clearAll")||M.log.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"),
this):(this.userPropertiesOperations.$clearAll="-",this)},Q.prototype.prepend=function(e,t){return this._addOperation("$prepend",e,t),
this},Q.prototype.set=function(e,t){return this._addOperation("$set",e,t),this},Q.prototype.setOnce=function(e,t){return this._addOperation("$setOnce",e,t),
this},Q.prototype.unset=function(e){return this._addOperation("$unset",e,"-"),this},Q.prototype._addOperation=function(e,t,n){this.userPropertiesOperations.hasOwnProperty("$clearAll")?M.log.error("This identify already contains a $clearAll operation, skipping operation "+e):-1===this.properties.indexOf(t)?(this.userPropertiesOperations.hasOwnProperty(e)||(this.userPropertiesOperations[e]={}),
this.userPropertiesOperations[e][t]=n,this.properties.push(t)):M.log.error('User property "'+t+'" already used in this identify, skipping operation '+e);
};var X=e(function(e){!function(t){function n(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function r(e,t,r,o,i,s){
return n(function(e,t){return e<<t|e>>>32-t}(n(n(t,e),n(o,s)),i),r)}function o(e,t,n,o,i,s,a){return r(t&n|~t&o,e,t,i,s,a)}function i(e,t,n,o,i,s,a){
return r(t&o|n&~o,e,t,i,s,a)}function s(e,t,n,o,i,s,a){return r(t^n^o,e,t,i,s,a)}function a(e,t,n,o,i,s,a){return r(n^(t|~o),e,t,i,s,a);
}function u(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var r,u,c,p,l,f=1732584193,d=-271733879,h=-1732584194,g=271733878;for(r=0;r<e.length;r+=16)u=f,
c=d,p=h,l=g,d=a(d=a(d=a(d=a(d=s(d=s(d=s(d=s(d=i(d=i(d=i(d=i(d=o(d=o(d=o(d=o(d,h=o(h,g=o(g,f=o(f,d,h,g,e[r],7,-680876936),d,h,e[r+1],12,-389564586),f,d,e[r+2],17,606105819),g,f,e[r+3],22,-1044525330),h=o(h,g=o(g,f=o(f,d,h,g,e[r+4],7,-176418897),d,h,e[r+5],12,1200080426),f,d,e[r+6],17,-1473231341),g,f,e[r+7],22,-45705983),h=o(h,g=o(g,f=o(f,d,h,g,e[r+8],7,1770035416),d,h,e[r+9],12,-1958414417),f,d,e[r+10],17,-42063),g,f,e[r+11],22,-1990404162),h=o(h,g=o(g,f=o(f,d,h,g,e[r+12],7,1804603682),d,h,e[r+13],12,-40341101),f,d,e[r+14],17,-1502002290),g,f,e[r+15],22,1236535329),h=i(h,g=i(g,f=i(f,d,h,g,e[r+1],5,-165796510),d,h,e[r+6],9,-1069501632),f,d,e[r+11],14,643717713),g,f,e[r],20,-373897302),h=i(h,g=i(g,f=i(f,d,h,g,e[r+5],5,-701558691),d,h,e[r+10],9,38016083),f,d,e[r+15],14,-660478335),g,f,e[r+4],20,-405537848),h=i(h,g=i(g,f=i(f,d,h,g,e[r+9],5,568446438),d,h,e[r+14],9,-1019803690),f,d,e[r+3],14,-187363961),g,f,e[r+8],20,1163531501),h=i(h,g=i(g,f=i(f,d,h,g,e[r+13],5,-1444681467),d,h,e[r+2],9,-51403784),f,d,e[r+7],14,1735328473),g,f,e[r+12],20,-1926607734),h=s(h,g=s(g,f=s(f,d,h,g,e[r+5],4,-378558),d,h,e[r+8],11,-2022574463),f,d,e[r+11],16,1839030562),g,f,e[r+14],23,-35309556),h=s(h,g=s(g,f=s(f,d,h,g,e[r+1],4,-1530992060),d,h,e[r+4],11,1272893353),f,d,e[r+7],16,-155497632),g,f,e[r+10],23,-1094730640),h=s(h,g=s(g,f=s(f,d,h,g,e[r+13],4,681279174),d,h,e[r],11,-358537222),f,d,e[r+3],16,-722521979),g,f,e[r+6],23,76029189),h=s(h,g=s(g,f=s(f,d,h,g,e[r+9],4,-640364487),d,h,e[r+12],11,-421815835),f,d,e[r+15],16,530742520),g,f,e[r+2],23,-995338651),h=a(h,g=a(g,f=a(f,d,h,g,e[r],6,-198630844),d,h,e[r+7],10,1126891415),f,d,e[r+14],15,-1416354905),g,f,e[r+5],21,-57434055),h=a(h,g=a(g,f=a(f,d,h,g,e[r+12],6,1700485571),d,h,e[r+3],10,-1894986606),f,d,e[r+10],15,-1051523),g,f,e[r+1],21,-2054922799),h=a(h,g=a(g,f=a(f,d,h,g,e[r+8],6,1873313359),d,h,e[r+15],10,-30611744),f,d,e[r+6],15,-1560198380),g,f,e[r+13],21,1309151649),h=a(h,g=a(g,f=a(f,d,h,g,e[r+4],6,-145523070),d,h,e[r+11],10,-1120210379),f,d,e[r+2],15,718787259),g,f,e[r+9],21,-343485551),
f=n(f,u),d=n(d,c),h=n(h,p),g=n(g,l);return[f,d,h,g]}function c(e){var t,n="",r=32*e.length;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);
return n}function p(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=8*e.length;for(t=0;t<r;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;
return n}function l(e){var t,n,r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);
return r}function f(e){return unescape(encodeURIComponent(e))}function d(e){return function(e){return c(u(p(e),8*e.length))}(f(e));
}function h(e,t){return function(e,t){var n,r,o=p(e),i=[],s=[];for(i[15]=s[15]=void 0,o.length>16&&(o=u(o,8*e.length)),n=0;n<16;n+=1)i[n]=909522486^o[n],
s[n]=1549556828^o[n];return r=u(i.concat(p(t)),512+8*t.length),c(u(s.concat(r),640))}(f(e),f(t))}function g(e,t,n){return t?n?h(t,e):function(e,t){
return l(h(e,t))}(t,e):n?d(e):function(e){return l(d(e))}(e)}e.exports?e.exports=g:t.md5=g}(l)}),H="object"==typeof l&&l&&l.Object===Object&&l,Z="object"==typeof self&&self&&self.Object===Object&&self,ee=H||Z||Function("return this")(),te=ee.Symbol,ne=Object.prototype,re=ne.hasOwnProperty,oe=ne.toString,ie=te?te.toStringTag:void 0,se=function(e){
var t=re.call(e,ie),n=e[ie];try{e[ie]=void 0;var r=!0}catch(e){}var o=oe.call(e);return r&&(t?e[ie]=n:delete e[ie]),o},ae=Object.prototype.toString,ue=function(e){
return ae.call(e)},ce="[object Null]",pe="[object Undefined]",le=te?te.toStringTag:void 0,fe=function(e){return null==e?void 0===e?pe:ce:le&&le in Object(e)?se(e):ue(e);
},de=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},he="[object AsyncFunction]",ge="[object Function]",ve="[object GeneratorFunction]",ye="[object Proxy]",me=function(e){
if(!de(e))return!1;var t=fe(e);return t==ge||t==ve||t==he||t==ye},_e=ee["__core-js_shared__"],be=function(){var e=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||"");
return e?"Symbol(src)_1."+e:""}(),we=function(e){return!!be&&be in e},Ie=Function.prototype.toString,Ee=function(e){if(null!=e){try{
return Ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=/^\[object .+?Constructor\]$/,Ce=Function.prototype,Oe=Object.prototype,Ne=Ce.toString,Ae=Oe.hasOwnProperty,Te=RegExp("^"+Ne.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xe=function(e){
return!(!de(e)||we(e))&&(me(e)?Te:Se).test(Ee(e))},je=function(e,t){return null==e?void 0:e[t]},ke=function(e,t){var n=je(e,t);return xe(n)?n:void 0;
},Re=function(){try{var e=ke(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),Pe=function(e,t,n){"__proto__"==t&&Re?Re(e,t,{
configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},Fe=function(e,t){return e===t||e!=e&&t!=t},Ue=Object.prototype.hasOwnProperty,De=function(e,t,n){
var r=e[t];Ue.call(e,t)&&Fe(r,n)&&(void 0!==n||t in e)||Pe(e,t,n)},Me=function(e,t,n,r){var o=!n;n||(n={});for(var i=-1,s=t.length;++i<s;){
var a=t[i],u=r?r(n[a],e[a],a,n,e):void 0;void 0===u&&(u=e[a]),o?Pe(n,a,u):De(n,a,u)}return n},qe=function(e){return e},Le=function(e,t,n){
switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2]);
}return e.apply(t,n)},Ve=Math.max,Ge=function(e,t,n){return t=Ve(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,i=Ve(r.length-t,0),s=Array(i);++o<i;)s[o]=r[t+o];
o=-1;for(var a=Array(t+1);++o<t;)a[o]=r[o];return a[t]=n(s),Le(e,this,a)}},Be=function(e){return function(){return e}},Ke=Re?function(e,t){
return Re(e,"toString",{configurable:!0,enumerable:!1,value:Be(t),writable:!0})}:qe,ze=800,Je=16,$e=Date.now,We=function(e){var t=0,n=0;
return function(){var r=$e(),o=Je-(r-n);if(n=r,o>0){if(++t>=ze)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(Ke),Ye=function(e,t){
return We(Ge(e,t,qe),e+"")},Qe=9007199254740991,Xe=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Qe},He=function(e){return null!=e&&Xe(e.length)&&!me(e);
},Ze=9007199254740991,et=/^(?:0|[1-9]\d*)$/,tt=function(e,t){return!!(t=null==t?Ze:t)&&("number"==typeof e||et.test(e))&&e>-1&&e%1==0&&e<t;
},nt=function(e,t,n){if(!de(n))return!1;var r=typeof t;return!!("number"==r?He(n)&&tt(t,n.length):"string"==r&&t in n)&&Fe(n[t],e);
},rt=function(e){return Ye(function(t,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,
i):void 0,s&&nt(n[0],n[1],s)&&(i=o<3?void 0:i,o=1),t=Object(t);++r<o;){var a=n[r];a&&e(t,a,r,i)}return t})},ot=Object.prototype,it=function(e){
var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ot)},st=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);
return r},at=function(e){return null!=e&&"object"==typeof e},ut="[object Arguments]",ct=function(e){return at(e)&&fe(e)==ut},pt=Object.prototype,lt=pt.hasOwnProperty,ft=pt.propertyIsEnumerable,dt=ct(function(){
return arguments}())?ct:function(e){return at(e)&&lt.call(e,"callee")&&!ft.call(e,"callee")},ht=Array.isArray,gt=function(){return!1;
},vt=e(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n?ee.Buffer:void 0,i=(o?o.isBuffer:void 0)||gt;
e.exports=i}),yt={};yt["[object Float32Array]"]=yt["[object Float64Array]"]=yt["[object Int8Array]"]=yt["[object Int16Array]"]=yt["[object Int32Array]"]=yt["[object Uint8Array]"]=yt["[object Uint8ClampedArray]"]=yt["[object Uint16Array]"]=yt["[object Uint32Array]"]=!0,
yt["[object Arguments]"]=yt["[object Array]"]=yt["[object ArrayBuffer]"]=yt["[object Boolean]"]=yt["[object DataView]"]=yt["[object Date]"]=yt["[object Error]"]=yt["[object Function]"]=yt["[object Map]"]=yt["[object Number]"]=yt["[object Object]"]=yt["[object RegExp]"]=yt["[object Set]"]=yt["[object String]"]=yt["[object WeakMap]"]=!1;
var mt=function(e){return at(e)&&Xe(e.length)&&!!yt[fe(e)]},_t=function(e){return function(t){return e(t)}},bt=e(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n&&H.process,i=function(){
try{return o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=i}),wt=bt&&bt.isTypedArray,It=wt?_t(wt):mt,Et=Object.prototype.hasOwnProperty,St=function(e,t){
var n=ht(e),r=!n&&dt(e),o=!n&&!r&&vt(e),i=!n&&!r&&!o&&It(e),s=n||r||o||i,a=s?st(e.length,String):[],u=a.length;for(var c in e)!t&&!Et.call(e,c)||s&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||tt(c,u))||a.push(c);
return a},Ct=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Ot=Object.prototype.hasOwnProperty,Nt=function(e){
if(!it(e))return Ct(e);var t=[];for(var n in Object(e))Ot.call(e,n)&&"constructor"!=n&&t.push(n);return t},At=function(e){return He(e)?St(e):Nt(e);
},Tt=Object.prototype.hasOwnProperty,xt=rt(function(e,t){if(it(t)||He(t))Me(t,At(t),e);else for(var n in t)Tt.call(t,n)&&De(e,n,t[n]);
}),jt=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},kt=Object.keys||function(e){var t=[];
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},Rt={encode:a,stringify:a,decode:c,parse:c},Pt=function(e,t){
this.url=e,this.data=t||{}};Pt.prototype.send=function(e){if(!!window.XDomainRequest){var t=new window.XDomainRequest;t.open("POST",this.url,!0),
t.onload=function(){e(200,t.responseText)},t.onerror=function(){"Request Entity Too Large"===t.responseText?e(413,t.responseText):e(500,t.responseText);
},t.ontimeout=function(){},t.onprogress=function(){},t.send(Rt.stringify(this.data))}else{var n=new XMLHttpRequest;n.open("POST",this.url,!0),
n.onreadystatechange=function(){4===n.readyState&&e(n.status,n.responseText)},n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
n.send(Rt.stringify(this.data))}};var Ft=function(){this._price=null,this._productId=null,this._quantity=1,this._revenueType=null,
this._properties=null};Ft.prototype.setProductId=function(e){return"string"!==A(e)?M.log.error("Unsupported type for productId: "+A(e)+", expecting string"):M.isEmptyString(e)?M.log.error("Invalid empty productId"):this._productId=e,
this},Ft.prototype.setQuantity=function(e){return"number"!==A(e)?M.log.error("Unsupported type for quantity: "+A(e)+", expecting number"):this._quantity=parseInt(e),
this},Ft.prototype.setPrice=function(e){return"number"!==A(e)?M.log.error("Unsupported type for price: "+A(e)+", expecting number"):this._price=e,
this},Ft.prototype.setRevenueType=function(e){return"string"!==A(e)?M.log.error("Unsupported type for revenueType: "+A(e)+", expecting string"):this._revenueType=e,
this},Ft.prototype.setEventProperties=function(e){return"object"!==A(e)?M.log.error("Unsupported type for eventProperties: "+A(e)+", expecting object"):this._properties=M.validateProperties(e),
this},Ft.prototype._isValidRevenue=function(){return"number"===A(this._price)||(M.log.error("Invalid revenue, need to set price field"),
!1)},Ft.prototype._toJSONObject=function(){var e="object"===A(this._properties)?this._properties:{};return null!==this._productId&&(e[f.REVENUE_PRODUCT_ID]=this._productId),
null!==this._quantity&&(e[f.REVENUE_QUANTITY]=this._quantity),null!==this._price&&(e[f.REVENUE_PRICE]=this._price),null!==this._revenueType&&(e[f.REVENUE_REVENUE_TYPE]=this._revenueType),
e};var Ut=e(function(e,t){!function(n,r){var o="model",i="name",s="type",a="vendor",u="version",c="mobile",p="tablet",l={extend:function(e,t){
var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n},has:function(e,t){return"string"==typeof e&&-1!==t.toLowerCase().indexOf(e.toLowerCase());
},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.split(".")[0]:void 0}},f={rgx:function(){
for(var e,t,n,r,o,i,s,a=0,u=arguments;a<u.length&&!i;){var c=u[a],p=u[a+1];if(void 0===e){e={};for(r in p)p.hasOwnProperty(r)&&("object"==typeof(o=p[r])?e[o[0]]=void 0:e[o]=void 0);
}for(t=n=0;t<c.length&&!i;)if(i=c[t++].exec(this.getUA()))for(r=0;r<p.length;r++)s=i[++n],"object"==typeof(o=p[r])&&o.length>0?2==o.length?"function"==typeof o[1]?e[o[0]]=o[1].call(this,s):e[o[0]]=o[1]:3==o.length?"function"!=typeof o[1]||o[1].exec&&o[1].test?e[o[0]]=s?s.replace(o[1],o[2]):void 0:e[o[0]]=s?o[1].call(this,s,o[2]):void 0:4==o.length&&(e[o[0]]=s?o[3].call(this,s.replace(o[1],o[2])):void 0):e[o]=s||void 0;
a+=2}return e},str:function(e,t){for(var n in t)if("object"==typeof t[n]&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(l.has(t[n][r],e))return"?"===n?void 0:n;
}else if(l.has(t[n],e))return"?"===n?void 0:n;return e}},d={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412",
"2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},name:{"Opera Mobile":"Opera Mobi","IE Mobile":"IEMobile"}},device:{amazon:{
model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{
ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",
10:["NT 6.4","NT 10.0"],RT:"ARM"},name:{"Windows Phone":"Windows Phone OS"}}}},h={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[i,u],[/(OPiOS)[\/\s]+([\w\.]+)/i],[[i,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[i,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[i,u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[i,"IE"],u],[/(edge)\/((\d+)?[\w\.]+)/i],[i,u],[/(yabrowser)\/([\w\.]+)/i],[[i,"Yandex"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[i,/_/g," "],u],[/((?:android.+)crmo|crios)\/([\w\.]+)/i,/android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i],[[i,"Chrome Mobile"],u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[i,u],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[[i,"UCBrowser"],u],[/(dolfin)\/([\w\.]+)/i],[[i,"Dolphin"],u],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[u,[i,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[u,[i,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[u,[i,"Facebook"]],[/fxios\/([\w\.-]+)/i],[u,[i,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[i,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,i],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[i,[u,f.str,d.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[i,u],[/(blackberry)\\s?\/([\w\.]+)/i],[[i,"BlackBerry"],u],[/(navigator|netscape)\/([\w\.-]+)/i],[[i,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[i,u]],
cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",l.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",l.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",l.lowerize]]],
device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[o,a,[s,p]],[/applecoremedia\/[\w\.]+ \((ipad)/],[o,[a,"Apple"],[s,p]],[/(apple\s{0,1}tv)/i],[[o,"Apple TV"],[a,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[a,o,[s,p]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[o,[a,"Amazon"],[s,p]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[o,f.str,d.device.amazon.model],[a,"Amazon"],[s,c]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[o,a,[s,c]],[/\((ip[honed|\s\w*]+);/i],[o,[a,"Apple"],[s,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[a,o,[s,c]],[/\(bb10;\s(\w+)/i],[o,[a,"BlackBerry"],[s,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[o,[a,"Asus"],[s,p]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[a,"Sony"],[o,"Xperia Tablet"],[s,p]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[a,"Sony"],[o,"Xperia Phone"],[s,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[a,o,[s,"console"]],[/android.+;\s(shield)\sbuild/i],[o,[a,"Nvidia"],[s,"console"]],[/(playstation\s[34portablevi]+)/i],[o,[a,"Sony"],[s,"console"]],[/(sprint\s(\w+))/i],[[a,f.str,d.device.sprint.vendor],[o,f.str,d.device.sprint.model],[s,c]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[a,o,[s,p]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[a,[o,/_/g," "],[s,c]],[/(nexus\s9)/i],[o,[a,"HTC"],[s,p]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[o,[a,"Microsoft"],[s,"console"]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[a,"Microsoft"],[s,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s[6])/i],[o,[a,"Motorola"],[s,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[o,[a,"Motorola"],[s,p]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[a,"Samsung"],o,[s,p]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[a,"Samsung"],o,[s,c]],[/(samsung);smarttv/i],[a,o,[s,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[o,[a,"Sharp"],[s,"smarttv"]],[/sie-(\w+)*/i],[o,[a,"Siemens"],[s,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[a,"Nokia"],o,[s,c]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[o,[a,"Acer"],[s,p]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[a,"LG"],o,[s,p]],[/(lg) netcast\.tv/i],[a,o,[s,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[o,[a,"LG"],[s,c]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[o,[a,"Lenovo"],[s,p]],[/linux;.+((jolla));/i],[a,o,[s,c]],[/((pebble))app\/[\d\.]+\s/i],[a,o,[s,"wearable"]],[/android.+;\s(glass)\s\d/i],[o,[a,"Google"],[s,"wearable"]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[o,/_/g," "],[a,"Xiaomi"],[s,c]],[/\s(tablet)[;\/\s]/i,/\s(mobile)[;\/\s]/i],[[s,l.lowerize],a,o]],
engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[i,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[i,u],[/rv\:([\w\.]+).*(gecko)/i],[u,i]],
os:[[/microsoft\s(windows)\s(vista|xp)/i],[i,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[[i,f.str,d.os.windows.name],[u,f.str,d.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[i,"Windows"],[u,f.str,d.os.windows.version]],[/\((bb)(10);/i],[[i,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[i,u],[/(symbian\s?o?s?|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[i,"Symbian"],u],[/\((series40);/i],[i],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[i,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[[i,"Linux"],u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[i,"Chromium OS"],u],[/(sunos)\s?([\w\.]+\d)*/i],[[i,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[[i,"Linux"],u],[/(iphone)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[i,"iPhone"],[u,/_/g,"."]],[/(ipad)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[i,"iPad"],[u,/_/g,"."]],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[i,"iOS"],[u,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[i,"Mac"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[i,u]]
},g=function(e,t){if(!(this instanceof g))return new g(e,t).getResult();var r=e||(n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),o=t?l.extend(h,t):h;
return this.getBrowser=function(){var e=f.rgx.apply(this,o.browser);return e.major=l.major(e.version),e},this.getCPU=function(){return f.rgx.apply(this,o.cpu);
},this.getDevice=function(){return f.rgx.apply(this,o.device)},this.getEngine=function(){return f.rgx.apply(this,o.engine)},this.getOS=function(){
return f.rgx.apply(this,o.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),
os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=e,this;
},this};g.VERSION="0.7.10",g.BROWSER={NAME:i,MAJOR:"major",VERSION:u},g.CPU={ARCHITECTURE:"architecture"},g.DEVICE={MODEL:o,VENDOR:a,
TYPE:s,CONSOLE:"console",MOBILE:c,SMARTTV:"smarttv",TABLET:p,WEARABLE:"wearable",EMBEDDED:"embedded"},g.ENGINE={NAME:i,VERSION:u},
g.OS={NAME:i,VERSION:u},e.exports&&(t=e.exports=g),t.UAParser=g;var v=n.jQuery||n.Zepto;if(void 0!==v){var y=new g;v.ua=y.getResult(),
v.ua.get=function(){return y.getUA()},v.ua.set=function(e){y.setUA(e);var t=y.getResult();for(var n in t)v.ua[n]=t[n]}}}("object"==typeof window?window:l);
}),Dt=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},Mt={apiEndpoint:"api.amplitude.com",
cookieExpiration:3650,cookieName:"amplitude_id",domain:"",includeReferrer:!1,includeUtm:!1,language:{language:navigator&&(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage)||void 0
}.language,logLevel:"WARN",optOut:!1,platform:"Web",savedMaxCount:1e3,saveEvents:!0,sessionTimeout:18e5,unsentKey:"amplitude_unsent",
unsentIdentifyKey:"amplitude_unsent_identify",uploadBatchSize:100,batchEvents:!1,eventUploadThreshold:30,eventUploadPeriodMillis:3e4,
forceHttps:!0,includeGclid:!1,saveParamsReferrerOncePerSession:!0,deviceIdFromUrlParam:!1},qt=function(e){this._instanceName=M.isEmptyString(e)?f.DEFAULT_INSTANCE:e.toLowerCase(),
this._legacyStorageSuffix=this._instanceName===f.DEFAULT_INSTANCE?"":"_"+this._instanceName,this._unsentEvents=[],this._unsentIdentifys=[],
this._ua=new Ut(navigator.userAgent).getResult(),this.options=xt({},Mt),this.cookieStorage=(new Y).getStorage(),this._q=[],this._sending=!1,
this._updateScheduled=!1,this._eventId=0,this._identifyId=0,this._lastEventTime=null,this._newSession=!1,this._sequenceNumber=0,this._sessionId=null,
this._userAgent=navigator&&navigator.userAgent||null};qt.prototype.Identify=Q,qt.prototype.Revenue=Ft,qt.prototype.init=function(e,t,n,r){
if("string"!==A(e)||M.isEmptyString(e))M.log.error("Invalid apiKey. Please re-initialize with a valid apiKey");else try{if(this.options.apiKey=e,
this._storageSuffix="_"+e+this._legacyStorageSuffix,Lt(this.options,n),this.cookieStorage.options({expirationDays:this.options.cookieExpiration,
domain:this.options.domain}),this.options.domain=this.cookieStorage.options().domain,this._instanceName===f.DEFAULT_INSTANCE&&Vt(this),
Gt(this),this.options.deviceId="object"===A(n)&&"string"===A(n.deviceId)&&!M.isEmptyString(n.deviceId)&&n.deviceId||this.options.deviceIdFromUrlParam&&this._getDeviceIdFromUrlParam(this._getUrlParams())||this.options.deviceId||Dt()+"R",
this.options.userId="string"===A(t)&&!M.isEmptyString(t)&&t||"number"===A(t)&&t.toString()||this.options.userId||null,this.options.saveEvents){
this._unsentEvents=this._loadSavedUnsentEvents(this.options.unsentKey),this._unsentIdentifys=this._loadSavedUnsentEvents(this.options.unsentIdentifyKey);
for(var o=0;o<this._unsentEvents.length;o++){var i=this._unsentEvents[o].event_properties,s=this._unsentEvents[o].groups;this._unsentEvents[o].event_properties=M.validateProperties(i),
this._unsentEvents[o].groups=M.validateGroups(s)}for(var a=0;a<this._unsentIdentifys.length;a++){var u=this._unsentIdentifys[a].user_properties,c=this._unsentIdentifys[a].groups;
this._unsentIdentifys[a].user_properties=M.validateProperties(u),this._unsentIdentifys[a].groups=M.validateGroups(c)}}var p=(new Date).getTime();
(!this._sessionId||!this._lastEventTime||p-this._lastEventTime>this.options.sessionTimeout)&&(this._newSession=!0,this._sessionId=p,
this.options.saveParamsReferrerOncePerSession&&this._trackParamsAndReferrer()),this.options.saveParamsReferrerOncePerSession||this._trackParamsAndReferrer(),
this._lastEventTime=p,Kt(this),this._sendEventsIfReady()}catch(e){M.log.error(e)}finally{"function"===A(r)&&r(this)}},qt.prototype._trackParamsAndReferrer=function(){
this.options.includeUtm&&this._initUtmData(),this.options.includeReferrer&&this._saveReferrer(this._getReferrer()),this.options.includeGclid&&this._saveGclid(this._getUrlParams());
};var Lt=function(e,t){if("object"===A(t)){var n=function(n){if(Mt.hasOwnProperty(n)){var r=t[n],o=A(Mt[n]);M.validateInput(r,n+" option",o)&&("boolean"===o?e[n]=!!r:("string"===o&&!M.isEmptyString(r)||"number"===o&&r>0)&&(e[n]=r));
}};for(var r in t)t.hasOwnProperty(r)&&n(r)}};qt.prototype.runQueuedFunctions=function(){for(var e=0;e<this._q.length;e++){var t=this[this._q[e][0]];
"function"===A(t)&&t.apply(this,this._q[e].slice(1))}this._q=[]},qt.prototype._apiKeySet=function(e){return!M.isEmptyString(this.options.apiKey)||(M.log.error("Invalid apiKey. Please set a valid apiKey with init() before calling "+e),
!1)},qt.prototype._loadSavedUnsentEvents=function(e){var t=this._getFromStorage(W,e),n=this._parseSavedUnsentEventsString(t,e),r=this._getFromStorageLegacy(W,e),o=this._parseSavedUnsentEventsString(r,e).concat(n);
return this._removeFromLegacyStorage(W,e),this._setInStorage(W,e,JSON.stringify(o)),o},qt.prototype._removeFromLegacyStorage=function(e,t){
e.removeItem(t+this._legacyStorageSuffix)},qt.prototype._parseSavedUnsentEventsString=function(e,t){if(M.isEmptyString(e))return[];
if("string"===A(e))try{var n=JSON.parse(e);if("array"===A(n))return n}catch(e){}return M.log.error("Unable to load "+t+" events. Restart with a new empty queue."),
[]},qt.prototype.isNewSession=function(){return this._newSession},qt.prototype.getSessionId=function(){return this._sessionId},qt.prototype.nextEventId=function(){
return this._eventId++,this._eventId},qt.prototype.nextIdentifyId=function(){return this._identifyId++,this._identifyId},qt.prototype.nextSequenceNumber=function(){
return this._sequenceNumber++,this._sequenceNumber},qt.prototype._unsentCount=function(){return this._unsentEvents.length+this._unsentIdentifys.length;
},qt.prototype._sendEventsIfReady=function(e){return 0!==this._unsentCount()&&(this.options.batchEvents?this._unsentCount()>=this.options.eventUploadThreshold?(this.sendEvents(e),
!0):(this._updateScheduled||(this._updateScheduled=!0,setTimeout(function(){this._updateScheduled=!1,this.sendEvents()}.bind(this),this.options.eventUploadPeriodMillis)),
!1):(this.sendEvents(e),!0))},qt.prototype._getFromStorage=function(e,t){return e.getItem(t+this._storageSuffix)},qt.prototype._getFromStorageLegacy=function(e,t){
return e.getItem(t+this._legacyStorageSuffix)},qt.prototype._setInStorage=function(e,t,n){e.setItem(t+this._storageSuffix,n)};var Vt=function(e){
var t=e.cookieStorage.get(e.options.cookieName+e._storageSuffix);if("object"!==A(t)&&(t=e.cookieStorage.get(e.options.cookieName+e._legacyStorageSuffix),
!("object"===A(t)&&t.deviceId&&t.sessionId&&t.lastEventTime))){var n=function(e){var t=W.getItem(e);return W.removeItem(e),t},r="string"===A(e.options.apiKey)&&"_"+e.options.apiKey.slice(0,6)||"",o=n(f.DEVICE_ID+r),i=n(f.USER_ID+r),s=n(f.OPT_OUT+r);
null!==s&&void 0!==s&&(s="true"===String(s));var a=parseInt(n(f.SESSION_ID)),u=parseInt(n(f.LAST_EVENT_TIME)),c=parseInt(n(f.LAST_EVENT_ID)),p=parseInt(n(f.LAST_IDENTIFY_ID)),l=parseInt(n(f.LAST_SEQUENCE_NUMBER)),d=function(e){
return"object"===A(t)&&t[e]};e.options.deviceId=d("deviceId")||o,e.options.userId=d("userId")||i,e._sessionId=d("sessionId")||a||e._sessionId,
e._lastEventTime=d("lastEventTime")||u||e._lastEventTime,e._eventId=d("eventId")||c||e._eventId,e._identifyId=d("identifyId")||p||e._identifyId,
e._sequenceNumber=d("sequenceNumber")||l||e._sequenceNumber,e.options.optOut=s||!1,t&&void 0!==t.optOut&&null!==t.optOut&&(e.options.optOut="true"===String(t.optOut)),
Kt(e)}},Gt=function(e){var t=e.cookieStorage.get(e.options.cookieName+e._storageSuffix);if("object"===A(t))Bt(e,t);else{var n=e.cookieStorage.get(e.options.cookieName+e._legacyStorageSuffix);
"object"===A(n)&&(e.cookieStorage.remove(e.options.cookieName+e._legacyStorageSuffix),Bt(e,n))}},Bt=function(e,t){t.deviceId&&(e.options.deviceId=t.deviceId),
t.userId&&(e.options.userId=t.userId),null!==t.optOut&&void 0!==t.optOut&&(e.options.optOut=t.optOut),t.sessionId&&(e._sessionId=parseInt(t.sessionId)),
t.lastEventTime&&(e._lastEventTime=parseInt(t.lastEventTime)),t.eventId&&(e._eventId=parseInt(t.eventId)),t.identifyId&&(e._identifyId=parseInt(t.identifyId)),
t.sequenceNumber&&(e._sequenceNumber=parseInt(t.sequenceNumber))},Kt=function(e){e.cookieStorage.set(e.options.cookieName+e._storageSuffix,{
deviceId:e.options.deviceId,userId:e.options.userId,optOut:e.options.optOut,sessionId:e._sessionId,lastEventTime:e._lastEventTime,
eventId:e._eventId,identifyId:e._identifyId,sequenceNumber:e._sequenceNumber})};qt.prototype._initUtmData=function(e,t){e=e||this._getUrlParams();
var n=function(e,t){var n=e?"?"+e.split(".").slice(-1)[0].replace(/\|/g,"&"):"",r=function(e,t,n,r){return M.getQueryParam(e,t)||M.getQueryParam(n,r);
},o=r("utm_source",t,"utmcsr",n),i=r("utm_medium",t,"utmcmd",n),s=r("utm_campaign",t,"utmccn",n),a=r("utm_term",t,"utmctr",n),u=r("utm_content",t,"utmcct",n),c={},p=function(e,t){
M.isEmptyString(t)||(c[e]=t)};return p("utm_source",o),p("utm_medium",i),p("utm_campaign",s),p("utm_term",a),p("utm_content",u),c;
}(t=t||this.cookieStorage.get("__utmz"),e);zt(this,n)};var zt=function(e,t){if("object"===A(t)&&0!==Object.keys(t).length){var n=new Q;
for(var r in t)t.hasOwnProperty(r)&&(n.setOnce("initial_"+r,t[r]),n.set(r,t[r]));e.identify(n)}};qt.prototype._getReferrer=function(){
return document.referrer},qt.prototype._getUrlParams=function(){return location.search},qt.prototype._saveGclid=function(e){var t=M.getQueryParam("gclid",e);
if(!M.isEmptyString(t)){zt(this,{gclid:t})}},qt.prototype._getDeviceIdFromUrlParam=function(e){return M.getQueryParam(f.AMP_DEVICE_ID_PARAM,e);
},qt.prototype._getReferringDomain=function(e){if(M.isEmptyString(e))return null;var t=e.split("/");return t.length>=3?t[2]:null},
qt.prototype._saveReferrer=function(e){if(!M.isEmptyString(e)){var t={referrer:e,referring_domain:this._getReferringDomain(e)};zt(this,t);
}},qt.prototype.saveEvents=function(){try{this._setInStorage(W,this.options.unsentKey,JSON.stringify(this._unsentEvents))}catch(e){}
try{this._setInStorage(W,this.options.unsentIdentifyKey,JSON.stringify(this._unsentIdentifys))}catch(e){}},qt.prototype.setDomain=function(e){
if(M.validateInput(e,"domain","string"))try{this.cookieStorage.options({domain:e}),this.options.domain=this.cookieStorage.options().domain,
Gt(this),Kt(this)}catch(e){M.log.error(e)}},qt.prototype.setUserId=function(e){try{this.options.userId=void 0!==e&&null!==e&&""+e||null,
Kt(this)}catch(e){M.log.error(e)}},qt.prototype.setGroup=function(e,t){if(this._apiKeySet("setGroup()")&&M.validateInput(e,"groupType","string")&&!M.isEmptyString(e)){
var n={};n[e]=t;var r=(new Q).set(e,t);this._logEvent(f.IDENTIFY_EVENT,null,null,r.userPropertiesOperations,n,null,null)}},qt.prototype.setOptOut=function(e){
if(M.validateInput(e,"enable","boolean"))try{this.options.optOut=e,Kt(this)}catch(e){M.log.error(e)}},qt.prototype.setSessionId=function(e){
if(M.validateInput(e,"sessionId","number"))try{this._sessionId=e,Kt(this)}catch(e){M.log.error(e)}},qt.prototype.resetSessionId=function(){
this.setSessionId((new Date).getTime())},qt.prototype.regenerateDeviceId=function(){this.setDeviceId(Dt()+"R")},qt.prototype.setDeviceId=function(e){
if(M.validateInput(e,"deviceId","string"))try{M.isEmptyString(e)||(this.options.deviceId=""+e,Kt(this))}catch(e){M.log.error(e)}},
qt.prototype.setUserProperties=function(e){if(this._apiKeySet("setUserProperties()")&&M.validateInput(e,"userProperties","object")){
var t=M.truncate(M.validateProperties(e));if(0!==Object.keys(t).length){var n=new Q;for(var r in t)t.hasOwnProperty(r)&&n.set(r,t[r]);
this.identify(n)}}},qt.prototype.clearUserProperties=function(){if(this._apiKeySet("clearUserProperties()")){var e=new Q;e.clearAll(),
this.identify(e)}};var Jt=function(e,t){for(var n=0;n<t._q.length;n++){var r=e[t._q[n][0]];"function"===A(r)&&r.apply(e,t._q[n].slice(1));
}return e};qt.prototype.identify=function(e,t){if(this._apiKeySet("identify()")){if("object"===A(e)&&e.hasOwnProperty("_q")&&(e=Jt(new Q,e)),
e instanceof Q){if(Object.keys(e.userPropertiesOperations).length>0)return this._logEvent(f.IDENTIFY_EVENT,null,null,e.userPropertiesOperations,null,null,t);
}else M.log.error("Invalid identify input type. Expected Identify object but saw "+A(e));"function"===A(t)&&t(0,"No request sent");
}else"function"===A(t)&&t(0,"No request sent")},qt.prototype.setVersionName=function(e){M.validateInput(e,"versionName","string")&&(this.options.versionName=e);
},qt.prototype._logEvent=function(e,t,n,r,o,i,s){if(Gt(this),e&&!this.options.optOut)try{var a;a=e===f.IDENTIFY_EVENT?this.nextIdentifyId():this.nextEventId();
var u=this.nextSequenceNumber(),c="number"===A(i)?i:(new Date).getTime();(!this._sessionId||!this._lastEventTime||c-this._lastEventTime>this.options.sessionTimeout)&&(this._sessionId=c),
this._lastEventTime=c,Kt(this),r=r||{},n=n||{},t=t||{},o=o||{};var p={device_id:this.options.deviceId,user_id:this.options.userId,
timestamp:c,event_id:a,session_id:this._sessionId||-1,event_type:e,version_name:this.options.versionName||null,platform:this.options.platform,
os_name:this._ua.browser.name||null,os_version:this._ua.browser.major||null,device_model:this._ua.os.name||null,language:this.options.language,
api_properties:n,event_properties:M.truncate(M.validateProperties(t)),user_properties:M.truncate(M.validateProperties(r)),uuid:Dt(),
library:{name:"amplitude-js",version:"4.2.1"},sequence_number:u,groups:M.truncate(M.validateGroups(o)),user_agent:this._userAgent
};return e===f.IDENTIFY_EVENT?(this._unsentIdentifys.push(p),this._limitEventsQueued(this._unsentIdentifys)):(this._unsentEvents.push(p),
this._limitEventsQueued(this._unsentEvents)),this.options.saveEvents&&this.saveEvents(),this._sendEventsIfReady(s)||"function"!==A(s)||s(0,"No request sent"),
a}catch(e){M.log.error(e)}else"function"===A(s)&&s(0,"No request sent")},qt.prototype._limitEventsQueued=function(e){e.length>this.options.savedMaxCount&&e.splice(0,e.length-this.options.savedMaxCount);
},qt.prototype.logEvent=function(e,t,n){return this.logEventWithTimestamp(e,t,null,n)},qt.prototype.logEventWithTimestamp=function(e,t,n,r){
return this._apiKeySet("logEvent()")&&M.validateInput(e,"eventType","string")&&!M.isEmptyString(e)?this._logEvent(e,t,null,null,null,n,r):("function"===A(r)&&r(0,"No request sent"),
-1)},qt.prototype.logEventWithGroups=function(e,t,n,r){return this._apiKeySet("logEventWithGroup()")&&M.validateInput(e,"eventType","string")?this._logEvent(e,t,null,null,n,null,r):("function"===A(r)&&r(0,"No request sent"),
-1)};var $t=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};qt.prototype.logRevenueV2=function(e){if(this._apiKeySet("logRevenueV2()"))if("object"===A(e)&&e.hasOwnProperty("_q")&&(e=Jt(new Ft,e)),
e instanceof Ft){if(e&&e._isValidRevenue())return this.logEvent(f.REVENUE_EVENT,e._toJSONObject())}else M.log.error("Invalid revenue input type. Expected Revenue object but saw "+A(e));
},qt.prototype.logRevenue=function(e,t,n){return this._apiKeySet("logRevenue()")&&$t(e)&&(void 0===t||$t(t))?this._logEvent(f.REVENUE_EVENT,{},{
productId:n,special:"revenue_amount",quantity:t||1,price:e},null,null,null,null):-1},qt.prototype.removeEvents=function(e,t){Wt(this,"_unsentEvents",e),
Wt(this,"_unsentIdentifys",t)};var Wt=function(e,t,n){if(!(n<0)){for(var r=[],o=0;o<e[t].length;o++)e[t][o].event_id>n&&r.push(e[t][o]);
e[t]=r}};qt.prototype.sendEvents=function(e){if(!this._apiKeySet("sendEvents()")||this._sending||this.options.optOut||0===this._unsentCount())"function"===A(e)&&e(0,"No request sent");else{
this._sending=!0;var t=(this.options.forceHttps?"https":"https:"===window.location.protocol?"https":"http")+"://"+this.options.apiEndpoint+"/",n=Math.min(this._unsentCount(),this.options.uploadBatchSize),r=this._mergeEventsAndIdentifys(n),o=r.maxEventId,i=r.maxIdentifyId,s=JSON.stringify(r.eventsToSend),a=(new Date).getTime(),u={
client:this.options.apiKey,e:s,v:f.API_VERSION,upload_time:a,checksum:X(f.API_VERSION+this.options.apiKey+s+a)},c=this;new Pt(t,u).send(function(t,r){
c._sending=!1;try{200===t&&"success"===r?(c.removeEvents(o,i),c.options.saveEvents&&c.saveEvents(),c._sendEventsIfReady(e)||"function"!==A(e)||e(t,r)):413===t?(1===c.options.uploadBatchSize&&c.removeEvents(o,i),
c.options.uploadBatchSize=Math.ceil(n/2),c.sendEvents(e)):"function"===A(e)&&e(t,r)}catch(e){}})}},qt.prototype._mergeEventsAndIdentifys=function(e){
for(var t=[],n=0,r=-1,o=0,i=-1;t.length<e;){var s,a=o>=this._unsentIdentifys.length,u=n>=this._unsentEvents.length;if(u&&a){M.log.error("Merging Events and Identifys, less events and identifys than expected");
break}a?r=(s=this._unsentEvents[n++]).event_id:u?i=(s=this._unsentIdentifys[o++]).event_id:!("sequence_number"in this._unsentEvents[n])||this._unsentEvents[n].sequence_number<this._unsentIdentifys[o].sequence_number?r=(s=this._unsentEvents[n++]).event_id:i=(s=this._unsentIdentifys[o++]).event_id,
t.push(s)}return{eventsToSend:t,maxEventId:r,maxIdentifyId:i}},qt.prototype.setGlobalUserProperties=function(e){this.setUserProperties(e);
},qt.prototype.__VERSION__="4.2.1";var Yt=function(){this.options=xt({},Mt),this._q=[],this._instances={}};Yt.prototype.Identify=Q,
Yt.prototype.Revenue=Ft,Yt.prototype.getInstance=function(e){e=M.isEmptyString(e)?f.DEFAULT_INSTANCE:e.toLowerCase();var t=this._instances[e];
return void 0===t&&(t=new qt(e),this._instances[e]=t),t},Yt.prototype.init=function(e,t,n,r){this.getInstance().init(e,t,n,function(e){
this.options=e.options,"function"===A(r)&&r(e)}.bind(this))},Yt.prototype.runQueuedFunctions=function(){for(var e=0;e<this._q.length;e++){
var t=this[this._q[e][0]];"function"===A(t)&&t.apply(this,this._q[e].slice(1))}this._q=[];for(var n in this._instances)this._instances.hasOwnProperty(n)&&this._instances[n].runQueuedFunctions();
},Yt.prototype.isNewSession=function(){return this.getInstance().isNewSession()},Yt.prototype.getSessionId=function(){return this.getInstance().getSessionId();
},Yt.prototype.nextEventId=function(){return this.getInstance().nextEventId()},Yt.prototype.nextIdentifyId=function(){return this.getInstance().nextIdentifyId();
},Yt.prototype.nextSequenceNumber=function(){return this.getInstance().nextSequenceNumber()},Yt.prototype.saveEvents=function(){this.getInstance().saveEvents();
},Yt.prototype.setDomain=function(e){this.getInstance().setDomain(e)},Yt.prototype.setUserId=function(e){this.getInstance().setUserId(e);
},Yt.prototype.setGroup=function(e,t){this.getInstance().setGroup(e,t)},Yt.prototype.setOptOut=function(e){this.getInstance().setOptOut(e);
},Yt.prototype.regenerateDeviceId=function(){this.getInstance().regenerateDeviceId()},Yt.prototype.setDeviceId=function(e){this.getInstance().setDeviceId(e);
},Yt.prototype.setUserProperties=function(e){this.getInstance().setUserProperties(e)},Yt.prototype.clearUserProperties=function(){
this.getInstance().clearUserProperties()},Yt.prototype.identify=function(e,t){this.getInstance().identify(e,t)},Yt.prototype.setVersionName=function(e){
this.getInstance().setVersionName(e)},Yt.prototype.logEvent=function(e,t,n){return this.getInstance().logEvent(e,t,n)},Yt.prototype.logEventWithGroups=function(e,t,n,r){
return this.getInstance().logEventWithGroups(e,t,n,r)},Yt.prototype.logRevenueV2=function(e){return this.getInstance().logRevenueV2(e);
},Yt.prototype.logRevenue=function(e,t,n){return this.getInstance().logRevenue(e,t,n)},Yt.prototype.removeEvents=function(e,t){this.getInstance().removeEvents(e,t);
},Yt.prototype.sendEvents=function(e){this.getInstance().sendEvents(e)},Yt.prototype.setGlobalUserProperties=function(e){this.getInstance().setUserProperties(e);
},Yt.prototype.__VERSION__="4.2.1";var Qt=window.amplitude||{},Xt=new Yt;Xt._q=Qt._q||[];for(var Ht in Qt._iq)Qt._iq.hasOwnProperty(Ht)&&(Xt.getInstance(Ht)._q=Qt._iq[Ht]._q||[]);
return Xt});!function(){"use strict";var e={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,
PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,COMMAND:91,MAP:{91:"COMMAND",8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",
17:"CTRL",18:"ALT",19:"PAUSEBREAK",20:"CAPSLOCK",27:"ESC",32:"SPACE",33:"PAGE_UP",34:"PAGE_DOWN",35:"END",36:"HOME",37:"LEFT",38:"UP",
39:"RIGHT",40:"DOWN",43:"+",44:"PRINTSCREEN",45:"INSERT",46:"DELETE",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",
57:"9",59:";",61:"=",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",
81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",
104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",
121:"F10",122:"F11",123:"F12",144:"NUMLOCK",145:"SCROLLLOCK",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",
221:"]",222:"'"},isControl:function(t){var s=t.which;switch(s){case e.COMMAND:case e.SHIFT:case e.CTRL:case e.ALT:return!0}return!!(t.metaKey||t.ctrlKey||t.altKey);
},isFunctionKey:function(e){return e=e.which?e.which:e,e>=112&&123>=e},isVerticalMovement:function(t){return~[e.UP,e.DOWN].indexOf(t);
},isHorizontalMovement:function(t){return~[e.LEFT,e.RIGHT,e.BACKSPACE,e.DELETE].indexOf(t)},toSeparator:function(t){var s={ENTER:"\n",
TAB:"\t",SPACE:" "}[t];return s?s:e[t]?void 0:t}};void 0===angular.element.prototype.querySelectorAll&&(angular.element.prototype.querySelectorAll=function(e){
return angular.element(this[0].querySelectorAll(e))}),void 0===angular.element.prototype.closest&&(angular.element.prototype.closest=function(e){
for(var t=this[0],s=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t;){if(s.bind(t)(e))return t;t=t.parentElement;
}return!1});var t=0,s=angular.module("ui.select",[]).constant("uiSelectConfig",{theme:"bootstrap",searchEnabled:!0,sortable:!1,placeholder:"",
refreshDelay:1e3,closeOnSelect:!0,skipFocusser:!1,dropdownPosition:"auto",removeSelected:!0,resetSearchInput:!0,generateId:function(){
return t++},appendToBody:!1,spinnerEnabled:!1,spinnerClass:"glyphicon-refresh ui-select-spin"}).service("uiSelectMinErr",function(){
var e=angular.$$minErr("ui.select");return function(){var t=e.apply(this,arguments),s=t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"),"");
return new Error(s)}}).directive("uisTranscludeAppend",function(){return{link:function(e,t,s,i,c){c(e,function(e){t.append(e)})}};
}).filter("highlight",function(){function e(e){return(""+e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,s){return s&&t?(""+t).replace(new RegExp(e(s),"gi"),'<span class="ui-select-highlight">$&</span>'):t;
}}).factory("uisOffset",["$document","$window",function(e,t){return function(s){var i=s[0].getBoundingClientRect();return{width:i.width||s.prop("offsetWidth"),
height:i.height||s.prop("offsetHeight"),top:i.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:i.left+(t.pageXOffset||e[0].documentElement.scrollLeft)
}}}]);s.directive("uiSelectChoices",["uiSelectConfig","uisRepeatParser","uiSelectMinErr","$compile","$window",function(e,t,s,i,c){
return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){t.addClass("ui-select-choices");var s=t.parent().attr("theme")||e.theme;
return s+"/choices.tpl.html"},compile:function(i,n){if(!n.repeat)throw s("repeat","Expected 'repeat' expression.");var l=n.groupBy,a=n.groupFilter;
if(l){var r=i.querySelectorAll(".ui-select-choices-group");if(1!==r.length)throw s("rows","Expected 1 .ui-select-choices-group but got '{0}'.",r.length);
r.attr("ng-repeat",t.getGroupNgRepeatExpression())}var o=t.parse(n.repeat),u=i.querySelectorAll(".ui-select-choices-row");if(1!==u.length)throw s("rows","Expected 1 .ui-select-choices-row but got '{0}'.",u.length);
u.attr("ng-repeat",o.repeatExpression(l)).attr("ng-if","$select.open");var d=i.querySelectorAll(".ui-select-choices-row-inner");if(1!==d.length)throw s("rows","Expected 1 .ui-select-choices-row-inner but got '{0}'.",d.length);
d.attr("uis-transclude-append","");var p=c.document.addEventListener?u:d;return p.attr("ng-click","$select.select("+o.itemName+",$select.skipFocusser,$event)"),
function(t,s,c,n){n.parseRepeatAttr(c.repeat,l,a),n.disableChoiceExpression=c.uiDisableChoice,n.onHighlightCallback=c.onHighlight,
n.dropdownPosition=c.position?c.position.toLowerCase():e.dropdownPosition,t.$on("$destroy",function(){u.remove()}),t.$watch("$select.search",function(e){
e&&!n.open&&n.multiple&&n.activate(!1,!0),n.activeIndex=n.tagging.isActivated?-1:0,!c.minimumInputLength||n.search.length>=c.minimumInputLength?n.refresh(c.refresh):n.items=[];
}),c.$observe("refreshDelay",function(){var s=t.$eval(c.refreshDelay);n.refreshDelay=void 0!==s?s:e.refreshDelay}),t.$watch("$select.open",function(e){
e?i.attr("role","listbox"):i.removeAttr("role")})}}}}]),s.controller("uiSelectCtrl",["$scope","$element","$timeout","$filter","$$uisDebounce","uisRepeatParser","uiSelectMinErr","uiSelectConfig","$parse","$injector","$window",function(t,s,i,c,n,l,a,r,o,u,d){
function p(e,t,s){if(e.findIndex)return e.findIndex(t,s);for(var i,c=Object(e),n=c.length>>>0,l=0;n>l;l++)if(i=c[l],t.call(s,i,l,c))return l;
return-1}function h(){w.resetSearchInput&&(w.search=y,w.selected&&w.items.length&&!w.multiple&&(w.activeIndex=p(w.items,function(e){
return angular.equals(this,e)},w.selected)))}function g(e,t){var s,i,c=[];for(s=0;s<t.length;s++)for(i=0;i<e.length;i++)e[i].name==[t[s]]&&c.push(e[i]);
return c}function f(e,t){var s=S.indexOf(e);t&&-1===s&&S.push(e),!t&&s>-1&&S.splice(s,1)}function v(e){return S.indexOf(e)>-1}function $(e){
function t(e,t){var s=i.indexOf(e);t&&-1===s&&i.push(e),!t&&s>-1&&i.splice(s,0)}function s(e){return i.indexOf(e)>-1}if(e){var i=[];
w.isLocked=function(e,i){var c=!1,n=w.selected[i];return n&&(e?(c=!!e.$eval(w.lockChoiceExpression),t(n,c)):c=s(n)),c}}}function m(t){
var s=!0;switch(t){case e.DOWN:!w.open&&w.multiple?w.activate(!1,!0):w.activeIndex<w.items.length-1&&w.activeIndex++;break;case e.UP:
!w.open&&w.multiple?w.activate(!1,!0):(w.activeIndex>0||0===w.search.length&&w.tagging.isActivated&&w.activeIndex>-1)&&w.activeIndex--;
break;case e.TAB:w.multiple&&!w.open||w.select(w.items[w.activeIndex],!0);break;case e.ENTER:w.open&&(w.tagging.isActivated||w.activeIndex>=0)?w.select(w.items[w.activeIndex],w.skipFocusser):w.activate(!1,!0);
break;case e.ESC:w.close();break;default:s=!1}return s}function b(){var e=s.querySelectorAll(".ui-select-choices-content"),t=e.querySelectorAll(".ui-select-choices-row");
if(t.length<1)throw a("choices","Expected multiple .ui-select-choices-row but got '{0}'.",t.length);if(!(w.activeIndex<0)){var i=t[w.activeIndex],c=i.offsetTop+i.clientHeight-e[0].scrollTop,n=e[0].offsetHeight;
c>n?e[0].scrollTop+=c-n:c<i.clientHeight&&(w.isGrouped&&0===w.activeIndex?e[0].scrollTop=0:e[0].scrollTop-=i.clientHeight-c)}}var w=this,y="";
if(w.placeholder=r.placeholder,w.searchEnabled=r.searchEnabled,w.sortable=r.sortable,w.refreshDelay=r.refreshDelay,w.paste=r.paste,
w.resetSearchInput=r.resetSearchInput,w.refreshing=!1,w.spinnerEnabled=r.spinnerEnabled,w.spinnerClass=r.spinnerClass,w.removeSelected=r.removeSelected,
w.closeOnSelect=!0,w.skipFocusser=!1,w.search=y,w.activeIndex=0,w.items=[],w.open=!1,w.focus=!1,w.disabled=!1,w.selected=void 0,w.dropdownPosition="auto",
w.focusser=void 0,w.multiple=void 0,w.disableChoiceExpression=void 0,w.tagging={isActivated:!1,fct:void 0},w.taggingTokens={isActivated:!1,
tokens:void 0},w.lockChoiceExpression=void 0,w.clickTriggeredSelect=!1,w.$filter=c,w.$element=s,w.$animate=function(){try{return u.get("$animate");
}catch(e){return null}}(),w.searchInput=s.querySelectorAll("input.ui-select-search"),1!==w.searchInput.length)throw a("searchInput","Expected 1 input.ui-select-search but got '{0}'.",w.searchInput.length);
w.isEmpty=function(){return angular.isUndefined(w.selected)||null===w.selected||""===w.selected||w.multiple&&0===w.selected.length;
},w.activate=function(e,c){if(w.disabled||w.open)w.open&&!w.searchEnabled&&w.close();else{c||h(),t.$broadcast("uis:activate"),w.open=!0,
w.activeIndex=w.activeIndex>=w.items.length?0:w.activeIndex,-1===w.activeIndex&&w.taggingLabel!==!1&&(w.activeIndex=0);var n=s.querySelectorAll(".ui-select-choices-content"),l=s.querySelectorAll(".ui-select-search");
if(w.$animate&&w.$animate.on&&w.$animate.enabled(n[0])){var a=function(t,s){"start"===s&&0===w.items.length?(w.$animate.off("removeClass",l[0],a),
i(function(){w.focusSearchInput(e)})):"close"===s&&(w.$animate.off("enter",n[0],a),i(function(){w.focusSearchInput(e)}))};w.items.length>0?w.$animate.on("enter",n[0],a):w.$animate.on("removeClass",l[0],a);
}else i(function(){w.focusSearchInput(e),!w.tagging.isActivated&&w.items.length>1&&b()})}},w.focusSearchInput=function(e){w.search=e||w.search,
w.searchInput[0].focus()},w.findGroupByName=function(e){return w.groups&&w.groups.filter(function(t){return t.name===e})[0]},w.parseRepeatAttr=function(e,s,i){
function c(e){var c=t.$eval(s);if(w.groups=[],angular.forEach(e,function(e){var t=angular.isFunction(c)?c(e):e[c],s=w.findGroupByName(t);
s?s.items.push(e):w.groups.push({name:t,items:[e]})}),i){var n=t.$eval(i);angular.isFunction(n)?w.groups=n(w.groups):angular.isArray(n)&&(w.groups=g(w.groups,n));
}w.items=[],w.groups.forEach(function(e){w.items=w.items.concat(e.items)})}function n(e){w.items=e}w.setItemsFn=s?c:n,w.parserResult=l.parse(e),
w.isGrouped=!!s,w.itemProperty=w.parserResult.itemName;var r=w.parserResult.source,u=function(){var e=r(t);t.$uisSource=Object.keys(e).map(function(t){
var s={};return s[w.parserResult.keyName]=t,s.value=e[t],s})};w.parserResult.keyName&&(u(),w.parserResult.source=o("$uisSource"+w.parserResult.filters),
t.$watch(r,function(e,t){e!==t&&u()},!0)),w.refreshItems=function(e){e=e||w.parserResult.source(t);var s=w.selected;if(w.isEmpty()||angular.isArray(s)&&!s.length||!w.multiple||!w.removeSelected)w.setItemsFn(e);else if(void 0!==e&&null!==e){
var i=e.filter(function(e){return angular.isArray(s)?s.every(function(t){return!angular.equals(e,t)}):!angular.equals(e,s)});w.setItemsFn(i);
}"auto"!==w.dropdownPosition&&"up"!==w.dropdownPosition||t.calculateDropdownPos(),t.$broadcast("uis:refresh")},t.$watchCollection(w.parserResult.source,function(e){
if(void 0===e||null===e)w.items=[];else{if(!angular.isArray(e))throw a("items","Expected an array but got '{0}'.",e);w.refreshItems(e),
angular.isDefined(w.ngModel.$modelValue)&&(w.ngModel.$modelValue=null)}})};var x;w.refresh=function(e){void 0!==e&&(x&&i.cancel(x),
x=i(function(){var s=t.$eval(e);s&&angular.isFunction(s.then)&&!w.refreshing&&(w.refreshing=!0,s.then(function(){w.refreshing=!1}));
},w.refreshDelay))},w.isActive=function(e){if(!w.open)return!1;var t=w.items.indexOf(e[w.itemProperty]),s=t==w.activeIndex;return!s||0>t?!1:(s&&!angular.isUndefined(w.onHighlightCallback)&&e.$eval(w.onHighlightCallback),
s)};var E=function(e){return w.selected&&angular.isArray(w.selected)&&w.selected.filter(function(t){return angular.equals(t,e)}).length>0;
},S=[];w.isDisabled=function(e){if(w.open){var t=e[w.itemProperty],s=w.items.indexOf(t),i=!1;if(s>=0&&(angular.isDefined(w.disableChoiceExpression)||w.multiple)){
if(t.isTag)return!1;w.multiple&&(i=E(t)),!i&&angular.isDefined(w.disableChoiceExpression)&&(i=!!e.$eval(w.disableChoiceExpression)),
f(t,i)}return i}},w.select=function(e,s,c){if(void 0===e||!v(e)){if(!w.items&&!w.search&&!w.tagging.isActivated)return;if(!e||!v(e)){
if(w.clickTriggeredSelect=!1,c&&("click"===c.type||"touchend"===c.type)&&e&&(w.clickTriggeredSelect=!0),w.tagging.isActivated&&w.clickTriggeredSelect===!1){
if(w.taggingLabel===!1)if(w.activeIndex<0){if(void 0===e&&(e=void 0!==w.tagging.fct?w.tagging.fct(w.search):w.search),!e||angular.equals(w.items[0],e))return;
}else e=w.items[w.activeIndex];else if(0===w.activeIndex){if(void 0===e)return;if(void 0!==w.tagging.fct&&"string"==typeof e){if(e=w.tagging.fct(e),
!e)return}else"string"==typeof e&&(e=e.replace(w.taggingLabel,"").trim())}if(E(e))return void w.close(s)}h(),t.$broadcast("uis:select",e);
var n={};n[w.parserResult.itemName]=e,i(function(){w.onSelectCallback(t,{$item:e,$model:w.parserResult.modelMapper(t,n)})}),w.closeOnSelect&&w.close(s);
}}},w.close=function(e){w.open&&(w.ngModel&&w.ngModel.$setTouched&&w.ngModel.$setTouched(),w.open=!1,h(),t.$broadcast("uis:close",e));
},w.setFocus=function(){w.focus||w.focusInput[0].focus()},w.clear=function(e){w.select(void 0),e.stopPropagation(),i(function(){w.focusser[0].focus();
},0,!1)},w.toggle=function(e){w.open?(w.close(),e.preventDefault(),e.stopPropagation()):w.activate()},w.isLocked=function(){return!1;
},t.$watch(function(){return angular.isDefined(w.lockChoiceExpression)&&""!==w.lockChoiceExpression},$);var C=null,I=!1;w.sizeSearchInput=function(){
var e=w.searchInput[0],s=w.searchInput.parent().parent()[0],c=function(){return s.clientWidth*!!e.offsetParent},n=function(t){if(0===t)return!1;
var s=t-e.offsetLeft-10;return 50>s&&(s=t),w.searchInput.css("width",s+"px"),!0};w.searchInput.css("width","10px"),i(function(){null!==C||n(c())||(C=t.$watch(function(){
I||(I=!0,t.$$postDigest(function(){I=!1,n(c())&&(C(),C=null)}))},angular.noop))})},w.searchInput.on("keydown",function(s){var c=s.which;
~[e.ENTER,e.ESC].indexOf(c)&&(s.preventDefault(),s.stopPropagation()),t.$apply(function(){var t=!1;if((w.items.length>0||w.tagging.isActivated)&&(m(c)||w.searchEnabled||(s.preventDefault(),
s.stopPropagation()),w.taggingTokens.isActivated)){for(var n=0;n<w.taggingTokens.tokens.length;n++)w.taggingTokens.tokens[n]===e.MAP[s.keyCode]&&w.search.length>0&&(t=!0);
t&&i(function(){w.searchInput.triggerHandler("tagged");var t=w.search.replace(e.MAP[s.keyCode],"").trim();w.tagging.fct&&(t=w.tagging.fct(t)),
t&&w.select(t,!0)})}}),e.isVerticalMovement(c)&&w.items.length>0&&b(),c!==e.ENTER&&c!==e.ESC||(s.preventDefault(),s.stopPropagation());
}),w.searchInput.on("paste",function(t){var s;if(s=window.clipboardData&&window.clipboardData.getData?window.clipboardData.getData("Text"):(t.originalEvent||t).clipboardData.getData("text/plain"),
s=w.search+s,s&&s.length>0)if(w.taggingTokens.isActivated){for(var i=[],c=0;c<w.taggingTokens.tokens.length;c++){var n=e.toSeparator(w.taggingTokens.tokens[c])||w.taggingTokens.tokens[c];
if(s.indexOf(n)>-1){i=s.split(n);break}}0===i.length&&(i=[s]);var l=w.search;angular.forEach(i,function(e){var t=w.tagging.fct?w.tagging.fct(e):e;
t&&w.select(t,!0)}),w.search=l||y,t.preventDefault(),t.stopPropagation()}else w.paste&&(w.paste(s),w.search=y,t.preventDefault(),
t.stopPropagation())}),w.searchInput.on("tagged",function(){i(function(){h()})});var A=n(function(){w.sizeSearchInput()},50);angular.element(d).bind("resize",A),
t.$on("$destroy",function(){w.searchInput.off("keyup keydown tagged blur paste"),angular.element(d).off("resize",A)}),t.$watch("$select.activeIndex",function(e){
e&&s.find("input").attr("aria-activedescendant","ui-select-choices-row-"+w.generatedId+"-"+e)}),t.$watch("$select.open",function(e){
e||s.find("input").removeAttr("aria-activedescendant")})}]),s.directive("uiSelect",["$document","uiSelectConfig","uiSelectMinErr","uisOffset","$compile","$parse","$timeout",function(e,t,s,i,c,n,l){
return{restrict:"EA",templateUrl:function(e,s){var i=s.theme||t.theme;return i+(angular.isDefined(s.multiple)?"/select-multiple.tpl.html":"/select.tpl.html");
},replace:!0,transclude:!0,require:["uiSelect","^ngModel"],scope:!0,controller:"uiSelectCtrl",controllerAs:"$select",compile:function(c,a){
var r=/{(.*)}\s*{(.*)}/.exec(a.ngClass);if(r){var o="{"+r[1]+", "+r[2]+"}";a.ngClass=o,c.attr("ng-class",o)}return angular.isDefined(a.multiple)?c.append("<ui-select-multiple/>").removeAttr("multiple"):c.append("<ui-select-single/>"),
a.inputId&&(c.querySelectorAll("input.ui-select-search")[0].id=a.inputId),function(c,a,r,o,u){function d(e){if(g.open){var t=!1;if(t=window.jQuery?window.jQuery.contains(a[0],e.target):a[0].contains(e.target),
!t&&!g.clickTriggeredSelect){var s;if(g.skipFocusser)s=!0;else{var i=["input","button","textarea","select"],n=angular.element(e.target).controller("uiSelect");
s=n&&n!==g,s||(s=~i.indexOf(e.target.tagName.toLowerCase()))}g.close(s),c.$digest()}g.clickTriggeredSelect=!1}}function p(){var t=i(a);
$=angular.element('<div class="ui-select-placeholder"></div>'),$[0].style.width=t.width+"px",$[0].style.height=t.height+"px",a.after($),
m=a[0].style.width,e.find("body").append(a),a[0].style.position="absolute",a[0].style.left=t.left+"px",a[0].style.top=t.top+"px",
a[0].style.width=t.width+"px"}function h(){null!==$&&($.replaceWith(a),$=null,a[0].style.position="",a[0].style.left="",a[0].style.top="",
a[0].style.width=m,g.setFocus())}var g=o[0],f=o[1];g.generatedId=t.generateId(),g.baseTitle=r.title||"Select box",g.focusserTitle=g.baseTitle+" focus",
g.focusserId="focusser-"+g.generatedId,g.closeOnSelect=function(){return angular.isDefined(r.closeOnSelect)?n(r.closeOnSelect)():t.closeOnSelect;
}(),c.$watch("skipFocusser",function(){var e=c.$eval(r.skipFocusser);g.skipFocusser=void 0!==e?e:t.skipFocusser}),g.onSelectCallback=n(r.onSelect),
g.onRemoveCallback=n(r.onRemove),g.ngModel=f,g.choiceGrouped=function(e){return g.isGrouped&&e&&e.name},r.tabindex&&r.$observe("tabindex",function(e){
g.focusInput.attr("tabindex",e),a.removeAttr("tabindex")}),c.$watch(function(){return c.$eval(r.searchEnabled)},function(e){g.searchEnabled=void 0!==e?e:t.searchEnabled;
}),c.$watch("sortable",function(){var e=c.$eval(r.sortable);g.sortable=void 0!==e?e:t.sortable}),r.$observe("limit",function(){g.limit=angular.isDefined(r.limit)?parseInt(r.limit,10):void 0;
}),c.$watch("removeSelected",function(){var e=c.$eval(r.removeSelected);g.removeSelected=void 0!==e?e:t.removeSelected}),r.$observe("disabled",function(){
g.disabled=void 0!==r.disabled?r.disabled:!1}),r.$observe("resetSearchInput",function(){var e=c.$eval(r.resetSearchInput);g.resetSearchInput=void 0!==e?e:!0;
}),r.$observe("paste",function(){g.paste=c.$eval(r.paste)}),r.$observe("tagging",function(){if(void 0!==r.tagging){var e=c.$eval(r.tagging);
g.tagging={isActivated:!0,fct:e!==!0?e:void 0}}else g.tagging={isActivated:!1,fct:void 0}}),r.$observe("taggingLabel",function(){
void 0!==r.tagging&&("false"===r.taggingLabel?g.taggingLabel=!1:g.taggingLabel=void 0!==r.taggingLabel?r.taggingLabel:"(new)")}),
r.$observe("taggingTokens",function(){if(void 0!==r.tagging){var e=void 0!==r.taggingTokens?r.taggingTokens.split("|"):[",","ENTER"];
g.taggingTokens={isActivated:!0,tokens:e}}}),r.$observe("spinnerEnabled",function(){var e=c.$eval(r.spinnerEnabled);g.spinnerEnabled=void 0!==e?e:t.spinnerEnabled;
}),r.$observe("spinnerClass",function(){var e=r.spinnerClass;g.spinnerClass=void 0!==e?r.spinnerClass:t.spinnerClass}),angular.isDefined(r.autofocus)&&l(function(){
g.setFocus()}),angular.isDefined(r.focusOn)&&c.$on(r.focusOn,function(){l(function(){g.setFocus()})}),e.on("click",d),c.$on("$destroy",function(){
e.off("click",d)}),u(c,function(e){var t=angular.element("<div>").append(e),i=t.querySelectorAll(".ui-select-match");if(i.removeAttr("ui-select-match"),
i.removeAttr("data-ui-select-match"),1!==i.length)throw s("transcluded","Expected 1 .ui-select-match but got '{0}'.",i.length);a.querySelectorAll(".ui-select-match").replaceWith(i);
var c=t.querySelectorAll(".ui-select-choices");if(c.removeAttr("ui-select-choices"),c.removeAttr("data-ui-select-choices"),1!==c.length)throw s("transcluded","Expected 1 .ui-select-choices but got '{0}'.",c.length);
a.querySelectorAll(".ui-select-choices").replaceWith(c);var n=t.querySelectorAll(".ui-select-no-choice");n.removeAttr("ui-select-no-choice"),
n.removeAttr("data-ui-select-no-choice"),1==n.length&&a.querySelectorAll(".ui-select-no-choice").replaceWith(n)});var v=c.$eval(r.appendToBody);
(void 0!==v?v:t.appendToBody)&&(c.$watch("$select.open",function(e){e?p():h()}),c.$on("$destroy",function(){h()}));var $=null,m="",b=null,w="direction-up";
c.$watch("$select.open",function(){"auto"!==g.dropdownPosition&&"up"!==g.dropdownPosition||c.calculateDropdownPos()});var y=function(e,t){
e=e||i(a),t=t||i(b),b[0].style.position="absolute",b[0].style.top=-1*t.height+"px",a.addClass(w)},x=function(e,t){a.removeClass(w),
e=e||i(a),t=t||i(b),b[0].style.position="",b[0].style.top=""},E=function(){l(function(){if("up"===g.dropdownPosition)y();else{a.removeClass(w);
var t=i(a),s=i(b),c=e[0].documentElement.scrollTop||e[0].body.scrollTop;t.top+t.height+s.height>c+e[0].documentElement.clientHeight?y(t,s):x(t,s);
}b[0].style.opacity=1})},S=!1;c.calculateDropdownPos=function(){if(g.open){if(b=angular.element(a).querySelectorAll(".ui-select-dropdown"),
0===b.length)return;if(""!==g.search||S||(b[0].style.opacity=0,S=!0),!i(b).height&&g.$animate&&g.$animate.on&&g.$animate.enabled(b)){
var e=!0;g.$animate.on("enter",b,function(t,s){"close"===s&&e&&(E(),e=!1)})}else E()}else{if(null===b||0===b.length)return;b[0].style.opacity=0,
b[0].style.position="",b[0].style.top="",a.removeClass(w)}}}}}}]),s.directive("uiSelectMatch",["uiSelectConfig",function(e){function t(e,t){
return e[0].hasAttribute(t)?e.attr(t):e[0].hasAttribute("data-"+t)?e.attr("data-"+t):e[0].hasAttribute("x-"+t)?e.attr("x-"+t):void 0;
}return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(s){s.addClass("ui-select-match");var i=s.parent(),c=t(i,"theme")||e.theme,n=angular.isDefined(t(i,"multiple"));
return c+(n?"/match-multiple.tpl.html":"/match.tpl.html")},link:function(t,s,i,c){function n(e){c.allowClear=angular.isDefined(e)?""===e?!0:"true"===e.toLowerCase():!1;
}c.lockChoiceExpression=i.uiLockChoice,i.$observe("placeholder",function(t){c.placeholder=void 0!==t?t:e.placeholder}),i.$observe("allowClear",n),
n(i.allowClear),c.multiple&&c.sizeSearchInput()}}}]),s.directive("uiSelectMultiple",["uiSelectMinErr","$timeout",function(t,s){return{
restrict:"EA",require:["^uiSelect","^ngModel"],controller:["$scope","$timeout",function(e,t){var s,i=this,c=e.$select;angular.isUndefined(c.selected)&&(c.selected=[]),
e.$evalAsync(function(){s=e.ngModel}),i.activeMatchIndex=-1,i.updateModel=function(){s.$setViewValue(Date.now()),i.refreshComponent();
},i.refreshComponent=function(){c.refreshItems&&c.refreshItems(),c.sizeSearchInput&&c.sizeSearchInput()},i.removeChoice=function(s){
if(c.isLocked(null,s))return!1;var n=c.selected[s],l={};return l[c.parserResult.itemName]=n,c.selected.splice(s,1),i.activeMatchIndex=-1,
c.sizeSearchInput(),t(function(){c.onRemoveCallback(e,{$item:n,$model:c.parserResult.modelMapper(e,l)})}),i.updateModel(),!0},i.getPlaceholder=function(){
return c.selected&&c.selected.length?void 0:c.placeholder}}],controllerAs:"$selectMultiple",link:function(i,c,n,l){function a(e){
return angular.isNumber(e.selectionStart)?e.selectionStart:e.value.length}function r(t){function s(){switch(t){case e.LEFT:return~h.activeMatchIndex?u:l;
case e.RIGHT:return~h.activeMatchIndex&&r!==l?o:(d.activate(),!1);case e.BACKSPACE:return~h.activeMatchIndex?h.removeChoice(r)?u:r:l;
case e.DELETE:return~h.activeMatchIndex?(h.removeChoice(h.activeMatchIndex),r):!1}}var i=a(d.searchInput[0]),c=d.selected.length,n=0,l=c-1,r=h.activeMatchIndex,o=h.activeMatchIndex+1,u=h.activeMatchIndex-1,p=r;
return i>0||d.search.length&&t==e.RIGHT?!1:(d.close(),p=s(),d.selected.length&&p!==!1?h.activeMatchIndex=Math.min(l,Math.max(n,p)):h.activeMatchIndex=-1,
!0)}function o(e){if(void 0===e||void 0===d.search)return!1;var t=e.filter(function(e){return void 0===d.search.toUpperCase()||void 0===e?!1:e.toUpperCase()===d.search.toUpperCase();
}).length>0;return t}function u(e,t){var s=-1;if(angular.isArray(e))for(var i=angular.copy(e),c=0;c<i.length;c++)if(void 0===d.tagging.fct)i[c]+" "+d.taggingLabel===t&&(s=c);else{
var n=i[c];angular.isObject(n)&&(n.isTag=!0),angular.equals(n,t)&&(s=c)}return s}var d=l[0],p=i.ngModel=l[1],h=i.$selectMultiple;d.multiple=!0,
d.focusInput=d.searchInput,p.$isEmpty=function(e){return!e||0===e.length},p.$parsers.unshift(function(){for(var e,t={},s=[],c=d.selected.length-1;c>=0;c--)t={},
t[d.parserResult.itemName]=d.selected[c],e=d.parserResult.modelMapper(i,t),s.unshift(e);return s}),p.$formatters.unshift(function(e){
var t,s=d.parserResult&&d.parserResult.source(i,{$select:{search:""}}),c={};if(!s)return e;var n=[],l=function(e,s){if(e&&e.length){
for(var l=e.length-1;l>=0;l--){if(c[d.parserResult.itemName]=e[l],t=d.parserResult.modelMapper(i,c),d.parserResult.trackByExp){var a=/(\w*)\./.exec(d.parserResult.trackByExp),r=/\.([^\s]+)/.exec(d.parserResult.trackByExp);
if(a&&a.length>0&&a[1]==d.parserResult.itemName&&r&&r.length>0&&t[r[1]]==s[r[1]])return n.unshift(e[l]),!0}if(angular.equals(t,s))return n.unshift(e[l]),
!0}return!1}};if(!e)return n;for(var a=e.length-1;a>=0;a--)l(d.selected,e[a])||l(s,e[a])||n.unshift(e[a]);return n}),i.$watchCollection(function(){
return p.$modelValue},function(e,t){t!=e&&(angular.isDefined(p.$modelValue)&&(p.$modelValue=null),h.refreshComponent())}),p.$render=function(){
if(!angular.isArray(p.$viewValue)){if(!angular.isUndefined(p.$viewValue)&&null!==p.$viewValue)throw t("multiarr","Expected model value to be array but got '{0}'",p.$viewValue);
p.$viewValue=[]}d.selected=p.$viewValue,h.refreshComponent(),i.$evalAsync()},i.$on("uis:select",function(e,t){d.selected.length>=d.limit||(d.selected.push(t),
h.updateModel())}),i.$on("uis:activate",function(){h.activeMatchIndex=-1}),i.$watch("$select.disabled",function(e,t){t&&!e&&d.sizeSearchInput();
}),d.searchInput.on("keydown",function(t){var s=t.which;i.$apply(function(){var i=!1;e.isHorizontalMovement(s)&&(i=r(s)),i&&s!=e.TAB&&(t.preventDefault(),
t.stopPropagation())})}),d.searchInput.on("keyup",function(t){if(e.isVerticalMovement(t.which)||i.$evalAsync(function(){d.activeIndex=d.taggingLabel===!1?-1:0;
}),d.tagging.isActivated&&d.search.length>0){if(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||e.isVerticalMovement(t.which))return;
if(d.activeIndex=d.taggingLabel===!1?-1:0,d.taggingLabel===!1)return;var s,c,n,l,a=angular.copy(d.items),r=angular.copy(d.items),p=!1,h=-1;
if(void 0!==d.tagging.fct){if(n=d.$filter("filter")(a,{isTag:!0}),n.length>0&&(l=n[0]),a.length>0&&l&&(p=!0,a=a.slice(1,a.length),
r=r.slice(1,r.length)),s=d.tagging.fct(d.search),r.some(function(e){return angular.equals(e,s)})||d.selected.some(function(e){return angular.equals(e,s);
}))return void i.$evalAsync(function(){d.activeIndex=0,d.items=a});s&&(s.isTag=!0)}else{if(n=d.$filter("filter")(a,function(e){return e.match(d.taggingLabel);
}),n.length>0&&(l=n[0]),c=a[0],void 0!==c&&a.length>0&&l&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),s=d.search+" "+d.taggingLabel,
u(d.selected,d.search)>-1)return;if(o(r.concat(d.selected)))return void(p&&(a=r,i.$evalAsync(function(){d.activeIndex=0,d.items=a;
})));if(o(r))return void(p&&(d.items=r.slice(1,r.length)))}p&&(h=u(d.selected,s)),h>-1?a=a.slice(h+1,a.length-1):(a=[],s&&a.push(s),
a=a.concat(r)),i.$evalAsync(function(){if(d.activeIndex=0,d.items=a,d.isGrouped){var e=s?a.slice(1):a;d.setItemsFn(e),s&&(d.items.unshift(s),
d.groups.unshift({name:"",items:[s],tagging:!0}))}})}}),d.searchInput.on("blur",function(){s(function(){h.activeMatchIndex=-1})});
}}}]),s.directive("uiSelectNoChoice",["uiSelectConfig",function(e){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,
templateUrl:function(t){t.addClass("ui-select-no-choice");var s=t.parent().attr("theme")||e.theme;return s+"/no-choice.tpl.html"}
}}]),s.directive("uiSelectSingle",["$timeout","$compile",function(t,s){return{restrict:"EA",require:["^uiSelect","^ngModel"],link:function(i,c,n,l){
var a=l[0],r=l[1];r.$parsers.unshift(function(e){var t,s={};return s[a.parserResult.itemName]=e,t=a.parserResult.modelMapper(i,s);
}),r.$formatters.unshift(function(e){var t,s=a.parserResult&&a.parserResult.source(i,{$select:{search:""}}),c={};if(s){var n=function(s){
return c[a.parserResult.itemName]=s,t=a.parserResult.modelMapper(i,c),t===e};if(a.selected&&n(a.selected))return a.selected;for(var l=s.length-1;l>=0;l--)if(n(s[l]))return s[l];
}return e}),i.$watch("$select.selected",function(e){r.$viewValue!==e&&r.$setViewValue(e)}),r.$render=function(){a.selected=r.$viewValue;
},i.$on("uis:select",function(e,t){a.selected=t}),i.$on("uis:close",function(e,s){t(function(){a.focusser.prop("disabled",!1),s||a.focusser[0].focus();
},0,!1)}),i.$on("uis:activate",function(){o.prop("disabled",!0)});var o=angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");
s(o)(i),a.focusser=o,a.focusInput=o,c.parent().append(o),o.bind("focus",function(){i.$evalAsync(function(){a.focus=!0})}),o.bind("blur",function(){
i.$evalAsync(function(){a.focus=!1})}),o.bind("keydown",function(t){return t.which===e.BACKSPACE?(t.preventDefault(),t.stopPropagation(),
a.select(void 0),void i.$apply()):void(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||(t.which!=e.DOWN&&t.which!=e.UP&&t.which!=e.ENTER&&t.which!=e.SPACE||(t.preventDefault(),
t.stopPropagation(),a.activate()),i.$digest()))}),o.bind("keyup input",function(t){t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||t.which==e.ENTER||t.which===e.BACKSPACE||(a.activate(o.val()),
o.val(""),i.$digest())})}}}]),s.directive("uiSelectSort",["$timeout","uiSelectConfig","uiSelectMinErr",function(e,t,s){return{require:["^^uiSelect","^ngModel"],
link:function(t,i,c,n){if(null===t[c.uiSelectSort])throw s("sort","Expected a list to sort");var l=n[0],a=n[1],r=angular.extend({
axis:"horizontal"},t.$eval(c.uiSelectSortOptions)),o=r.axis,u="dragging",d="dropping",p="dropping-before",h="dropping-after";t.$watch(function(){
return l.sortable},function(e){e?i.attr("draggable",!0):i.removeAttr("draggable")}),i.on("dragstart",function(e){i.addClass(u),(e.dataTransfer||e.originalEvent.dataTransfer).setData("text",t.$index.toString());
}),i.on("dragend",function(){v(u)});var g,f=function(e,t){this.splice(t,0,this.splice(e,1)[0])},v=function(e){angular.forEach(l.$element.querySelectorAll("."+e),function(t){
angular.element(t).removeClass(e)})},$=function(e){e.preventDefault();var t="vertical"===o?e.offsetY||e.layerY||(e.originalEvent?e.originalEvent.offsetY:0):e.offsetX||e.layerX||(e.originalEvent?e.originalEvent.offsetX:0);
t<this["vertical"===o?"offsetHeight":"offsetWidth"]/2?(v(h),i.addClass(p)):(v(p),i.addClass(h))},m=function(t){t.preventDefault();
var s=parseInt((t.dataTransfer||t.originalEvent.dataTransfer).getData("text"),10);e.cancel(g),g=e(function(){b(s)},20)},b=function(e){
var s=t.$eval(c.uiSelectSort),n=s[e],l=null;l=i.hasClass(p)?e<t.$index?t.$index-1:t.$index:e<t.$index?t.$index:t.$index+1,f.apply(s,[e,l]),
a.$setViewValue(Date.now()),t.$apply(function(){t.$emit("uiSelectSort:change",{array:s,item:n,from:e,to:l})}),v(d),v(p),v(h),i.off("drop",m);
};i.on("dragenter",function(){i.hasClass(u)||(i.addClass(d),i.on("dragover",$),i.on("drop",m))}),i.on("dragleave",function(e){e.target==i&&(v(d),
v(p),v(h),i.off("dragover",$),i.off("drop",m))})}}}]),s.factory("$$uisDebounce",["$timeout",function(e){return function(t,s){var i;
return function(){var c=this,n=Array.prototype.slice.call(arguments);i&&e.cancel(i),i=e(function(){t.apply(c,n)},s)}}}]),s.directive("uisOpenClose",["$parse","$timeout",function(e,t){
return{restrict:"A",require:"uiSelect",link:function(s,i,c,n){n.onOpenCloseCallback=e(c.uisOpenClose),s.$watch("$select.open",function(e,i){
e!==i&&t(function(){n.onOpenCloseCallback(s,{isOpen:e})})})}}}]),s.service("uisRepeatParser",["uiSelectMinErr","$parse",function(e,t){
var s=this;s.parse=function(s){var i;if(i=s.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(\s*[\s\S]+?)?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
!i)throw e("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",s);var c=i[5],n="";if(i[3]){
c=i[5].replace(/(^\()|(\)$)/g,"");var l=i[5].match(/^\s*(?:[\s\S]+?)(?:[^\|]|\|\|)+([\s\S]*)\s*$/);l&&l[1].trim()&&(n=l[1],c=c.replace(n,""));
}return{itemName:i[4]||i[2],keyName:i[3],source:t(c),filters:n,trackByExp:i[6],modelMapper:t(i[1]||i[4]||i[2]),repeatExpression:function(e){
var t=this.itemName+" in "+(e?"$group.items":"$select.items");return this.trackByExp&&(t+=" track by "+this.trackByExp),t}}},s.getGroupNgRepeatExpression=function(){
return"$group in $select.groups track by $group.name"}}])}(),angular.module("ui.select").run(["$templateCache",function(e){e.put("bootstrap/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" ng-show="$select.open && $select.items.length > 0"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div ng-attr-id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><span class="ui-select-choices-row-inner"></span></div></li></ul>'),
e.put("bootstrap/match-multiple.tpl.html",'<span class="ui-select-match"><span ng-repeat="$item in $select.selected track by $index"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'),
e.put("bootstrap/match.tpl.html",'<div class="ui-select-match" ng-hide="$select.open && $select.searchEnabled" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty() && ($select.disabled !== true)" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>'),
e.put("bootstrap/no-choice.tpl.html",'<ul class="ui-select-no-choice dropdown-menu" ng-show="$select.items.length == 0"><li ng-transclude=""></li></ul>'),
e.put("bootstrap/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-expanded="{{$select.open}}" aria-label="{{$select.baseTitle}}" ng-class="{\'spinner\': $select.refreshing}" ondrop="return false;"></div><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div>'),
e.put("bootstrap/select.tpl.html",'<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><span ng-show="$select.open && $select.refreshing && $select.spinnerEnabled" class="ui-select-refreshing {{$select.spinnerClass}}"></span> <input type="search" autocomplete="off" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" class="form-control ui-select-search" ng-class="{ \'ui-select-search-hidden\' : !$select.searchEnabled }" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.open"><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div>'),
e.put("select2/choices.tpl.html",'<ul tabindex="-1" class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" ng-attr-id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'),
e.put("select2/match-multiple.tpl.html",'<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected track by $index" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>'),
e.put("select2/match.tpl.html",'<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>'),
e.put("select2/no-choice.tpl.html",'<div class="ui-select-no-choice dropdown" ng-show="$select.items.length == 0"><div class="dropdown-content"><div data-selectable="" ng-transclude=""></div></div></div>'),
e.put("select2/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open || $select.items.length === 0}"><div class="ui-select-choices"></div></div></div>'),
e.put("select2/select.tpl.html",'<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="search-container" ng-class="{\'ui-select-search-hidden\':!$select.searchEnabled, \'select2-search\':$select.searchEnabled}"><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ng-class="{\'select2-active\': $select.refreshing}" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div></div>'),
e.put("selectize/choices.tpl.html",'<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown" ng-class="{\'single\': !$select.multiple, \'multi\': $select.multiple}"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'),
e.put("selectize/match-multiple.tpl.html",'<div class="ui-select-match" data-value="" ng-repeat="$item in $select.selected track by $index" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'active\':$selectMultiple.activeMatchIndex === $index}" ui-select-sort="$select.selected"><span class="ui-select-match-item" ng-class="{\'select-locked\':$select.isLocked(this, $index)}"><span uis-transclude-append=""></span> <span class="remove ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&times;</span></span></div>'),
e.put("selectize/match.tpl.html",'<div ng-hide="$select.searchEnabled && ($select.open || $select.isEmpty())" class="ui-select-match"><span ng-show="!$select.searchEnabled && ($select.isEmpty() || $select.open)" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty() || $select.open" ng-transclude=""></span></div>'),
e.put("selectize/no-choice.tpl.html",'<div class="ui-select-no-choice selectize-dropdown" ng-show="$select.items.length == 0"><div class="selectize-dropdown-content"><div data-selectable="" ng-transclude=""></div></div></div>'),
e.put("selectize/select-multiple.tpl.html",'<div class="ui-select-container selectize-control multi plugin-remove_button" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()"><div class="ui-select-match"></div><input type="search" autocomplete="off" tabindex="-1" class="ui-select-search" ng-class="{\'ui-select-search-hidden\':!$select.searchEnabled}" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-model="$select.search" ng-disabled="$select.disabled" aria-expanded="{{$select.open}}" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div>'),
e.put("selectize/select.tpl.html",'<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()"><div class="ui-select-match"></div><input type="search" autocomplete="off" tabindex="-1" class="ui-select-search ui-select-toggle" ng-class="{\'ui-select-search-hidden\':!$select.searchEnabled}" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.isEmpty() && !$select.open" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div>');
}]);angular.module("ui.tinymce",[]).value("uiTinymceConfig",{}).directive("uiTinymce",["$rootScope","$compile","$timeout","$window","$sce","uiTinymceConfig",function(a,b,c,d,e,f){
f=f||{};var g="ui-tinymce";return f.baseUrl&&(tinymce.baseURL=f.baseUrl),{require:["ngModel","^?form"],priority:599,link:function(h,i,j,k){
function l(a){a?(m(),o&&o.getBody().setAttribute("contenteditable",!1)):(m(),o&&!o.settings.readonly&&o.getBody().setAttribute("contenteditable",!0));
}function m(){o||(o=tinymce.get(j.id))}if(d.tinymce){var n,o,p=k[0],q=k[1]||null,r={debounce:!0},s=function(b){var c=b.getContent({
format:r.format}).trim();c=e.trustAsHtml(c),p.$setViewValue(c),a.$$phase||h.$digest()};j.$set("id",g+"-"+(new Date).valueOf()),n={},
angular.extend(n,h.$eval(j.uiTinymce));var t=function(a){var b;return function(d){c.cancel(b),b=c(function(){return function(a){a.isDirty()&&(a.save(),
s(a))}(d)},a)}}(400),u={setup:function(b){b.on("init",function(){p.$render(),p.$setPristine(),p.$setUntouched(),q&&q.$setPristine();
}),b.on("ExecCommand change NodeChange ObjectResized",function(){return r.debounce?void t(b):(b.save(),void s(b))}),b.on("blur",function(){
i[0].blur(),p.$setTouched(),a.$$phase||h.$digest()}),b.on("remove",function(){i.remove()}),f.setup&&f.setup(b,{updateView:s}),n.setup&&n.setup(b,{
updateView:s})},format:n.format||"html",selector:"#"+j.id};angular.extend(r,f,n,u),c(function(){r.baseURL&&(tinymce.baseURL=r.baseURL);
var a=tinymce.init(r);a&&"function"==typeof a.then?a.then(function(){l(h.$eval(j.ngDisabled))}):l(h.$eval(j.ngDisabled))}),p.$formatters.unshift(function(a){
return a?e.trustAsHtml(a):""}),p.$parsers.unshift(function(a){return a?e.getTrustedHtml(a):""}),p.$render=function(){m();var a=p.$viewValue?e.getTrustedHtml(p.$viewValue):"";
o&&o.getDoc()&&(o.setContent(a),o.fire("change"))},j.$observe("disabled",l),h.$on("$tinymce:refresh",function(a,c){var d=j.id;if(angular.isUndefined(c)||c===d){
var e=i.parent(),f=i.clone();f.removeAttr("id"),f.removeAttr("style"),f.removeAttr("aria-hidden"),tinymce.execCommand("mceRemoveEditor",!1,d),
e.append(b(f)(h))}}),h.$on("$destroy",function(){m(),o&&(o.remove(),o=null)})}}}}]);(function(){var undefined;var VERSION="3.10.1";
var BIND_FLAG=1,BIND_KEY_FLAG=2,CURRY_BOUND_FLAG=4,CURRY_FLAG=8,CURRY_RIGHT_FLAG=16,PARTIAL_FLAG=32,PARTIAL_RIGHT_FLAG=64,ARY_FLAG=128,REARG_FLAG=256;
var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION="...";var HOT_COUNT=150,HOT_SPAN=16;var LARGE_ARRAY_SIZE=200;var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2;
var FUNC_ERROR_TEXT="Expected a function";var PLACEHOLDER="__lodash_placeholder__";var argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",weakMapTag="[object WeakMap]";
var arrayBufferTag="[object ArrayBuffer]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]";
var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
var reEscapedHtml=/&(?:amp|lt|gt|quot|#39|#96);/g,reUnescapedHtml=/[&<>"'`]/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);
var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
var reRegExpChars=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,reHasRegExpChars=RegExp(reRegExpChars.source);
var reComboMark=/[\u0300-\u036f\ufe20-\ufe23]/g;var reEscapeChar=/\\(\\)?/g;var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;var reFlags=/\w*$/;
var reHasHexPrefix=/^0[xX]/;var reIsHostCtor=/^\[object .+?Constructor\]$/;var reIsUint=/^\d+$/;var reLatin1=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
var reNoMatch=/($^)/;var reUnescapedString=/['\n\r\u2028\u2029\\]/g;var reWords=function(){var upper="[A-Z\\xc0-\\xd6\\xd8-\\xde]",lower="[a-z\\xdf-\\xf6\\xf8-\\xff]+";
return RegExp(upper+"+(?="+upper+lower+")|"+upper+"?"+lower+"|"+upper+"+|[0-9]+","g")}();var contextProps=["Array","ArrayBuffer","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Math","Number","Object","RegExp","Set","String","_","clearTimeout","isFinite","parseFloat","parseInt","setTimeout","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap"];
var templateCounter=-1;var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;
typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;
var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[stringTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;
cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[mapTag]=cloneableTags[setTag]=cloneableTags[weakMapTag]=false;var deburredLetters={
"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E",
"É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n",
"Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u",
"ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"};var htmlEscapes={"&":"&amp;","<":"&lt;",
">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"};var htmlUnescapes={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"
};var objectTypes={function:true,object:true};var regexpEscapes={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",
8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",
u:"x75",v:"x76",x:"x78"};var stringEscapes={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;
var freeModule=objectTypes[typeof module]&&module&&!module.nodeType&&module;var freeGlobal=freeExports&&freeModule&&typeof global=="object"&&global&&global.Object&&global;
var freeSelf=objectTypes[typeof self]&&self&&self.Object&&self;var freeWindow=objectTypes[typeof window]&&window&&window.Object&&window;
var moduleExports=freeModule&&freeModule.exports===freeExports&&freeExports;var root=freeGlobal||freeWindow!==(this&&this.window)&&freeWindow||freeSelf||this;
function baseCompareAscending(value,other){if(value!==other){var valIsNull=value===null,valIsUndef=value===undefined,valIsReflexive=value===value;
var othIsNull=other===null,othIsUndef=other===undefined,othIsReflexive=other===other;if(value>other&&!othIsNull||!valIsReflexive||valIsNull&&!othIsUndef&&othIsReflexive||valIsUndef&&othIsReflexive){
return 1}if(value<other&&!valIsNull||!othIsReflexive||othIsNull&&!valIsUndef&&valIsReflexive||othIsUndef&&valIsReflexive){return-1;
}}return 0}function baseFindIndex(array,predicate,fromRight){var length=array.length,index=fromRight?length:-1;while(fromRight?index--:++index<length){
if(predicate(array[index],index,array)){return index}}return-1}function baseIndexOf(array,value,fromIndex){if(value!==value){return indexOfNaN(array,fromIndex);
}var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index}}return-1}function baseIsFunction(value){
return typeof value=="function"||false}function baseToString(value){return value==null?"":value+""}function charsLeftIndex(string,chars){
var index=-1,length=string.length;while(++index<length&&chars.indexOf(string.charAt(index))>-1){}return index}function charsRightIndex(string,chars){
var index=string.length;while(index--&&chars.indexOf(string.charAt(index))>-1){}return index}function compareAscending(object,other){
return baseCompareAscending(object.criteria,other.criteria)||object.index-other.index}function compareMultiple(object,other,orders){
var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){
var result=baseCompareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result}var order=orders[index];
return result*(order==="asc"||order===true?1:-1)}}return object.index-other.index}function deburrLetter(letter){return deburredLetters[letter];
}function escapeHtmlChar(chr){return htmlEscapes[chr]}function escapeRegExpChar(chr,leadingChar,whitespaceChar){if(leadingChar){chr=regexpEscapes[chr];
}else if(whitespaceChar){chr=stringEscapes[chr]}return"\\"+chr}function escapeStringChar(chr){return"\\"+stringEscapes[chr]}function indexOfNaN(array,fromIndex,fromRight){
var length=array.length,index=fromIndex+(fromRight?0:-1);while(fromRight?index--:++index<length){var other=array[index];if(other!==other){
return index}}return-1}function isObjectLike(value){return!!value&&typeof value=="object"}function isSpace(charCode){return charCode<=160&&(charCode>=9&&charCode<=13)||charCode==32||charCode==160||charCode==5760||charCode==6158||charCode>=8192&&(charCode<=8202||charCode==8232||charCode==8233||charCode==8239||charCode==8287||charCode==12288||charCode==65279);
}function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=-1,result=[];while(++index<length){if(array[index]===placeholder){
array[index]=PLACEHOLDER;result[++resIndex]=index}}return result}function sortedUniq(array,iteratee){var seen,index=-1,length=array.length,resIndex=-1,result=[];
while(++index<length){var value=array[index],computed=iteratee?iteratee(value,index,array):value;if(!index||seen!==computed){seen=computed;
result[++resIndex]=value}}return result}function trimmedLeftIndex(string){var index=-1,length=string.length;while(++index<length&&isSpace(string.charCodeAt(index))){}
return index}function trimmedRightIndex(string){var index=string.length;while(index--&&isSpace(string.charCodeAt(index))){}return index;
}function unescapeHtmlChar(chr){return htmlUnescapes[chr]}function runInContext(context){context=context?_.defaults(root.Object(),context,_.pick(root,contextProps)):root;
var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Number=context.Number,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;
var arrayProto=Array.prototype,objectProto=Object.prototype,stringProto=String.prototype;var fnToString=Function.prototype.toString;
var hasOwnProperty=objectProto.hasOwnProperty;var idCounter=0;var objToString=objectProto.toString;var oldDash=root._;var reIsNative=RegExp("^"+fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");
var ArrayBuffer=context.ArrayBuffer,clearTimeout=context.clearTimeout,parseFloat=context.parseFloat,pow=Math.pow,propertyIsEnumerable=objectProto.propertyIsEnumerable,Set=getNative(context,"Set"),setTimeout=context.setTimeout,splice=arrayProto.splice,Uint8Array=context.Uint8Array,WeakMap=getNative(context,"WeakMap");
var nativeCeil=Math.ceil,nativeCreate=getNative(Object,"create"),nativeFloor=Math.floor,nativeIsArray=getNative(Array,"isArray"),nativeIsFinite=context.isFinite,nativeKeys=getNative(Object,"keys"),nativeMax=Math.max,nativeMin=Math.min,nativeNow=getNative(Date,"now"),nativeParseInt=context.parseInt,nativeRandom=Math.random;
var NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY,POSITIVE_INFINITY=Number.POSITIVE_INFINITY;var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;
var MAX_SAFE_INTEGER=9007199254740991;var metaMap=WeakMap&&new WeakMap;var realNames={};function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){
if(value instanceof LodashWrapper){return value}if(hasOwnProperty.call(value,"__chain__")&&hasOwnProperty.call(value,"__wrapped__")){
return wrapperClone(value)}}return new LodashWrapper(value)}function baseLodash(){}function LodashWrapper(value,chainAll,actions){
this.__wrapped__=value;this.__actions__=actions||[];this.__chain__=!!chainAll}var support=lodash.support={};lodash.templateSettings={
escape:reEscape,evaluate:reEvaluate,interpolate:reInterpolate,variable:"",imports:{_:lodash}};function LazyWrapper(value){this.__wrapped__=value;
this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=POSITIVE_INFINITY;this.__views__=[];
}function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=arrayCopy(this.__actions__);result.__dir__=this.__dir__;
result.__filtered__=this.__filtered__;result.__iteratees__=arrayCopy(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=arrayCopy(this.__views__);
return result}function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;
}else{result=this.clone();result.__dir__*=-1}return result}function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);
if(!isArr||arrLength<LARGE_ARRAY_SIZE||arrLength==length&&takeCount==length){return baseWrapperValue(isRight&&isArr?array.reverse():array,this.__actions__);
}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){
var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;
}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer}else{break outer}}}result[resIndex++]=value}return result}function MapCache(){
this.__data__={}}function mapDelete(key){return this.has(key)&&delete this.__data__[key]}function mapGet(key){return key=="__proto__"?undefined:this.__data__[key];
}function mapHas(key){return key!="__proto__"&&hasOwnProperty.call(this.__data__,key)}function mapSet(key,value){if(key!="__proto__"){
this.__data__[key]=value}return this}function SetCache(values){var length=values?values.length:0;this.data={hash:nativeCreate(null),
set:new Set};while(length--){this.push(values[length])}}function cacheIndexOf(cache,value){var data=cache.data,result=typeof value=="string"||isObject(value)?data.set.has(value):data.hash[value];
return result?0:-1}function cachePush(value){var data=this.data;if(typeof value=="string"||isObject(value)){data.set.add(value)}else{
data.hash[value]=true}}function arrayConcat(array,other){var index=-1,length=array.length,othIndex=-1,othLength=other.length,result=Array(length+othLength);
while(++index<length){result[index]=array[index]}while(++othIndex<othLength){result[index++]=other[othIndex]}return result}function arrayCopy(source,array){
var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index]}return array}function arrayEach(array,iteratee){
var index=-1,length=array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break}}return array}function arrayEachRight(array,iteratee){
var length=array.length;while(length--){if(iteratee(array[length],length,array)===false){break}}return array}function arrayEvery(array,predicate){
var index=-1,length=array.length;while(++index<length){if(!predicate(array[index],index,array)){return false}}return true}function arrayExtremum(array,iteratee,comparator,exValue){
var index=-1,length=array.length,computed=exValue,result=computed;while(++index<length){var value=array[index],current=+iteratee(value);
if(comparator(current,computed)){computed=current;result=value}}return result}function arrayFilter(array,predicate){var index=-1,length=array.length,resIndex=-1,result=[];
while(++index<length){var value=array[index];if(predicate(value,index,array)){result[++resIndex]=value}}return result}function arrayMap(array,iteratee){
var index=-1,length=array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array)}return result;
}function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];
}return array}function arrayReduce(array,iteratee,accumulator,initFromArray){var index=-1,length=array.length;if(initFromArray&&length){
accumulator=array[++index]}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array)}return accumulator}function arrayReduceRight(array,iteratee,accumulator,initFromArray){
var length=array.length;if(initFromArray&&length){accumulator=array[--length]}while(length--){accumulator=iteratee(accumulator,array[length],length,array);
}return accumulator}function arraySome(array,predicate){var index=-1,length=array.length;while(++index<length){if(predicate(array[index],index,array)){
return true}}return false}function arraySum(array,iteratee){var length=array.length,result=0;while(length--){result+=+iteratee(array[length])||0;
}return result}function assignDefaults(objectValue,sourceValue){return objectValue===undefined?sourceValue:objectValue}function assignOwnDefaults(objectValue,sourceValue,key,object){
return objectValue===undefined||!hasOwnProperty.call(object,key)?sourceValue:objectValue}function assignWith(object,source,customizer){
var index=-1,props=keys(source),length=props.length;while(++index<length){var key=props[index],value=object[key],result=customizer(value,source[key],key,object,source);
if((result===result?result!==value:value===value)||value===undefined&&!(key in object)){object[key]=result}}return object}function baseAssign(object,source){
return source==null?object:baseCopy(source,keys(source),object)}function baseAt(collection,props){var index=-1,isNil=collection==null,isArr=!isNil&&isArrayLike(collection),length=isArr?collection.length:0,propsLength=props.length,result=Array(propsLength);
while(++index<propsLength){var key=props[index];if(isArr){result[index]=isIndex(key,length)?collection[key]:undefined}else{result[index]=isNil?undefined:collection[key];
}}return result}function baseCopy(source,props,object){object||(object={});var index=-1,length=props.length;while(++index<length){
var key=props[index];object[key]=source[key]}return object}function baseCallback(func,thisArg,argCount){var type=typeof func;if(type=="function"){
return thisArg===undefined?func:bindCallback(func,thisArg,argCount)}if(func==null){return identity}if(type=="object"){return baseMatches(func);
}return thisArg===undefined?property(func):baseMatchesProperty(func,thisArg)}function baseClone(value,isDeep,customizer,key,object,stackA,stackB){
var result;if(customizer){result=object?customizer(value,key,object):customizer(value)}if(result!==undefined){return result}if(!isObject(value)){
return value}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return arrayCopy(value,result)}}else{var tag=objToString.call(value),isFunc=tag==funcTag;
if(tag==objectTag||tag==argsTag||isFunc&&!object){result=initCloneObject(isFunc?{}:value);if(!isDeep){return baseAssign(result,value);
}}else{return cloneableTags[tag]?initCloneByTag(value,tag,isDeep):object?value:{}}}stackA||(stackA=[]);stackB||(stackB=[]);var length=stackA.length;
while(length--){if(stackA[length]==value){return stackB[length]}}stackA.push(value);stackB.push(result);(isArr?arrayEach:baseForOwn)(value,function(subValue,key){
result[key]=baseClone(subValue,isDeep,customizer,key,value,stackA,stackB)});return result}var baseCreate=function(){function object(){}
return function(prototype){if(isObject(prototype)){object.prototype=prototype;var result=new object;object.prototype=undefined}return result||{};
}}();function baseDelay(func,wait,args){if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}return setTimeout(function(){
func.apply(undefined,args)},wait)}function baseDifference(array,values){var length=array?array.length:0,result=[];if(!length){return result;
}var index=-1,indexOf=getIndexOf(),isCommon=indexOf==baseIndexOf,cache=isCommon&&values.length>=LARGE_ARRAY_SIZE?createCache(values):null,valuesLength=values.length;
if(cache){indexOf=cacheIndexOf;isCommon=false;values=cache}outer:while(++index<length){var value=array[index];if(isCommon&&value===value){
var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===value){continue outer}}result.push(value)}else if(indexOf(values,value,0)<0){
result.push(value)}}return result}var baseEach=createBaseEach(baseForOwn);var baseEachRight=createBaseEach(baseForOwnRight,true);function baseEvery(collection,predicate){
var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result});return result;
}function baseExtremum(collection,iteratee,comparator,exValue){var computed=exValue,result=computed;baseEach(collection,function(value,index,collection){
var current=+iteratee(value,index,collection);if(comparator(current,computed)||current===exValue&&current===result){computed=current;
result=value}});return result}function baseFill(array,value,start,end){var length=array.length;start=start==null?0:+start||0;if(start<0){
start=-start>length?0:length+start}end=end===undefined||end>length?length:+end||0;if(end<0){end+=length}length=start>end?0:end>>>0;
start>>>=0;while(start<length){array[start++]=value}return array}function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){
if(predicate(value,index,collection)){result.push(value)}});return result}function baseFind(collection,predicate,eachFunc,retKey){
var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=retKey?key:value;return false;
}});return result}function baseFlatten(array,isDeep,isStrict,result){result||(result=[]);var index=-1,length=array.length;while(++index<length){
var value=array[index];if(isObjectLike(value)&&isArrayLike(value)&&(isStrict||isArray(value)||isArguments(value))){if(isDeep){baseFlatten(value,isDeep,isStrict,result);
}else{arrayPush(result,value)}}else if(!isStrict){result[result.length]=value}}return result}var baseFor=createBaseFor();var baseForRight=createBaseFor(true);
function baseForIn(object,iteratee){return baseFor(object,iteratee,keysIn)}function baseForOwn(object,iteratee){return baseFor(object,iteratee,keys);
}function baseForOwnRight(object,iteratee){return baseForRight(object,iteratee,keys)}function baseFunctions(object,props){var index=-1,length=props.length,resIndex=-1,result=[];
while(++index<length){var key=props[index];if(isFunction(object[key])){result[++resIndex]=key}}return result}function baseGet(object,path,pathKey){
if(object==null){return}if(pathKey!==undefined&&pathKey in toObject(object)){path=[pathKey]}var index=0,length=path.length;while(object!=null&&index<length){
object=object[path[index++]]}return index&&index==length?object:undefined}function baseIsEqual(value,other,customizer,isLoose,stackA,stackB){
if(value===other){return true}if(value==null||other==null||!isObject(value)&&!isObjectLike(other)){return value!==value&&other!==other;
}return baseIsEqualDeep(value,other,baseIsEqual,customizer,isLoose,stackA,stackB)}function baseIsEqualDeep(object,other,equalFunc,customizer,isLoose,stackA,stackB){
var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;if(!objIsArr){objTag=objToString.call(object);
if(objTag==argsTag){objTag=objectTag}else if(objTag!=objectTag){objIsArr=isTypedArray(object)}}if(!othIsArr){othTag=objToString.call(other);
if(othTag==argsTag){othTag=objectTag}else if(othTag!=objectTag){othIsArr=isTypedArray(other)}}var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;
if(isSameTag&&!(objIsArr||objIsObj)){return equalByTag(object,other,objTag)}if(!isLoose){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,"__wrapped__"),othIsWrapped=othIsObj&&hasOwnProperty.call(other,"__wrapped__");
if(objIsWrapped||othIsWrapped){return equalFunc(objIsWrapped?object.value():object,othIsWrapped?other.value():other,customizer,isLoose,stackA,stackB);
}}if(!isSameTag){return false}stackA||(stackA=[]);stackB||(stackB=[]);var length=stackA.length;while(length--){if(stackA[length]==object){
return stackB[length]==other}}stackA.push(object);stackB.push(other);var result=(objIsArr?equalArrays:equalObjects)(object,other,equalFunc,customizer,isLoose,stackA,stackB);
stackA.pop();stackB.pop();return result}function baseIsMatch(object,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;
if(object==null){return!length}object=toObject(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){
return false}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){
if(objValue===undefined&&!(key in object)){return false}}else{var result=customizer?customizer(objValue,srcValue,key):undefined;if(!(result===undefined?baseIsEqual(srcValue,objValue,customizer,true):result)){
return false}}}return true}function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];
baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection)});return result}function baseMatches(source){
var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){var key=matchData[0][0],value=matchData[0][1];return function(object){
if(object==null){return false}return object[key]===value&&(value!==undefined||key in toObject(object))}}return function(object){return baseIsMatch(object,matchData);
}}function baseMatchesProperty(path,srcValue){var isArr=isArray(path),isCommon=isKey(path)&&isStrictComparable(srcValue),pathKey=path+"";
path=toPath(path);return function(object){if(object==null){return false}var key=pathKey;object=toObject(object);if((isArr||!isCommon)&&!(key in object)){
object=path.length==1?object:baseGet(object,baseSlice(path,0,-1));if(object==null){return false}key=last(path);object=toObject(object);
}return object[key]===srcValue?srcValue!==undefined||key in object:baseIsEqual(srcValue,object[key],undefined,true)}}function baseMerge(object,source,customizer,stackA,stackB){
if(!isObject(object)){return object}var isSrcArr=isArrayLike(source)&&(isArray(source)||isTypedArray(source)),props=isSrcArr?undefined:keys(source);
arrayEach(props||source,function(srcValue,key){if(props){key=srcValue;srcValue=source[key]}if(isObjectLike(srcValue)){stackA||(stackA=[]);
stackB||(stackB=[]);baseMergeDeep(object,source,key,baseMerge,customizer,stackA,stackB)}else{var value=object[key],result=customizer?customizer(value,srcValue,key,object,source):undefined,isCommon=result===undefined;
if(isCommon){result=srcValue}if((result!==undefined||isSrcArr&&!(key in object))&&(isCommon||(result===result?result!==value:value===value))){
object[key]=result}}});return object}function baseMergeDeep(object,source,key,mergeFunc,customizer,stackA,stackB){var length=stackA.length,srcValue=source[key];
while(length--){if(stackA[length]==srcValue){object[key]=stackB[length];return}}var value=object[key],result=customizer?customizer(value,srcValue,key,object,source):undefined,isCommon=result===undefined;
if(isCommon){result=srcValue;if(isArrayLike(srcValue)&&(isArray(srcValue)||isTypedArray(srcValue))){result=isArray(value)?value:isArrayLike(value)?arrayCopy(value):[];
}else if(isPlainObject(srcValue)||isArguments(srcValue)){result=isArguments(value)?toPlainObject(value):isPlainObject(value)?value:{};
}else{isCommon=false}}stackA.push(srcValue);stackB.push(result);if(isCommon){object[key]=mergeFunc(result,srcValue,customizer,stackA,stackB);
}else if(result===result?result!==value:value===value){object[key]=result}}function baseProperty(key){return function(object){return object==null?undefined:object[key];
}}function basePropertyDeep(path){var pathKey=path+"";path=toPath(path);return function(object){return baseGet(object,path,pathKey);
}}function basePullAt(array,indexes){var length=array?indexes.length:0;while(length--){var index=indexes[length];if(index!=previous&&isIndex(index)){
var previous=index;splice.call(array,index,1)}}return array}function baseRandom(min,max){return min+nativeFloor(nativeRandom()*(max-min+1));
}function baseReduce(collection,iteratee,accumulator,initFromCollection,eachFunc){eachFunc(collection,function(value,index,collection){
accumulator=initFromCollection?(initFromCollection=false,value):iteratee(accumulator,value,index,collection)});return accumulator;
}var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func};function baseSlice(array,start,end){var index=-1,length=array.length;
start=start==null?0:+start||0;if(start<0){start=-start>length?0:length+start}end=end===undefined||end>length?length:+end||0;if(end<0){
end+=length}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];
}return result}function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);
return!result});return!!result}function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;
}return array}function baseSortByOrder(collection,iteratees,orders){var callback=getCallback(),index=-1;iteratees=arrayMap(iteratees,function(iteratee){
return callback(iteratee)});var result=baseMap(collection,function(value){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);
});return{criteria:criteria,index:++index,value:value}});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);
})}function baseSum(collection,iteratee){var result=0;baseEach(collection,function(value,index,collection){result+=+iteratee(value,index,collection)||0;
});return result}function baseUniq(array,iteratee){var index=-1,indexOf=getIndexOf(),length=array.length,isCommon=indexOf==baseIndexOf,isLarge=isCommon&&length>=LARGE_ARRAY_SIZE,seen=isLarge?createCache():null,result=[];
if(seen){indexOf=cacheIndexOf;isCommon=false}else{isLarge=false;seen=iteratee?[]:result}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value,index,array):value;
if(isCommon&&value===value){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer}}if(iteratee){
seen.push(computed)}result.push(value)}else if(indexOf(seen,computed,0)<0){if(iteratee||isLarge){seen.push(computed)}result.push(value);
}}return result}function baseValues(object,props){var index=-1,length=props.length,result=Array(length);while(++index<length){result[index]=object[props[index]];
}return result}function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}
return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index);
}function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value()}var index=-1,length=actions.length;
while(++index<length){var action=actions[index];result=action.func.apply(action.thisArg,arrayPush([result],action.args))}return result;
}function binaryIndex(array,value,retHighest){var low=0,high=array?array.length:low;if(typeof value=="number"&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){
while(low<high){var mid=low+high>>>1,computed=array[mid];if((retHighest?computed<=value:computed<value)&&computed!==null){low=mid+1;
}else{high=mid}}return high}return binaryIndexBy(array,value,identity,retHighest)}function binaryIndexBy(array,value,iteratee,retHighest){
value=iteratee(value);var low=0,high=array?array.length:0,valIsNaN=value!==value,valIsNull=value===null,valIsUndef=value===undefined;
while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),isDef=computed!==undefined,isReflexive=computed===computed;
if(valIsNaN){var setLow=isReflexive||retHighest}else if(valIsNull){setLow=isReflexive&&isDef&&(retHighest||computed!=null)}else if(valIsUndef){
setLow=isReflexive&&(retHighest||isDef)}else if(computed==null){setLow=false}else{setLow=retHighest?computed<=value:computed<value;
}if(setLow){low=mid+1}else{high=mid}}return nativeMin(high,MAX_ARRAY_INDEX)}function bindCallback(func,thisArg,argCount){if(typeof func!="function"){
return identity}if(thisArg===undefined){return func}switch(argCount){case 1:return function(value){return func.call(thisArg,value);
};case 3:return function(value,index,collection){return func.call(thisArg,value,index,collection)};case 4:return function(accumulator,value,index,collection){
return func.call(thisArg,accumulator,value,index,collection)};case 5:return function(value,other,key,object,source){return func.call(thisArg,value,other,key,object,source);
}}return function(){return func.apply(thisArg,arguments)}}function bufferClone(buffer){var result=new ArrayBuffer(buffer.byteLength),view=new Uint8Array(result);
view.set(new Uint8Array(buffer));return result}function composeArgs(args,partials,holders){var holdersLength=holders.length,argsIndex=-1,argsLength=nativeMax(args.length-holdersLength,0),leftIndex=-1,leftLength=partials.length,result=Array(leftLength+argsLength);
while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex]}while(++argsIndex<holdersLength){result[holders[argsIndex]]=args[argsIndex];
}while(argsLength--){result[leftIndex++]=args[argsIndex++]}return result}function composeArgsRight(args,partials,holders){var holdersIndex=-1,holdersLength=holders.length,argsIndex=-1,argsLength=nativeMax(args.length-holdersLength,0),rightIndex=-1,rightLength=partials.length,result=Array(argsLength+rightLength);
while(++argsIndex<argsLength){result[argsIndex]=args[argsIndex]}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];
}while(++holdersIndex<holdersLength){result[offset+holders[holdersIndex]]=args[argsIndex++]}return result}function createAggregator(setter,initializer){
return function(collection,iteratee,thisArg){var result=initializer?initializer():{};iteratee=getCallback(iteratee,thisArg,3);if(isArray(collection)){
var index=-1,length=collection.length;while(++index<length){var value=collection[index];setter(result,value,iteratee(value,index,collection),collection);
}}else{baseEach(collection,function(value,key,collection){setter(result,value,iteratee(value,key,collection),collection)})}return result;
}}function createAssigner(assigner){return restParam(function(object,sources){var index=-1,length=object==null?0:sources.length,customizer=length>2?sources[length-2]:undefined,guard=length>2?sources[2]:undefined,thisArg=length>1?sources[length-1]:undefined;
if(typeof customizer=="function"){customizer=bindCallback(customizer,thisArg,5);length-=2}else{customizer=typeof thisArg=="function"?thisArg:undefined;
length-=customizer?1:0}if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1}while(++index<length){
var source=sources[index];if(source){assigner(object,source,customizer)}}return object})}function createBaseEach(eachFunc,fromRight){
return function(collection,iteratee){var length=collection?getLength(collection):0;if(!isLength(length)){return eachFunc(collection,iteratee);
}var index=fromRight?length:-1,iterable=toObject(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){
break}}return collection}}function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var iterable=toObject(object),props=keysFunc(object),length=props.length,index=fromRight?length:-1;
while(fromRight?index--:++index<length){var key=props[index];if(iteratee(iterable[key],key,iterable)===false){break}}return object;
}}function createBindWrapper(func,thisArg){var Ctor=createCtorWrapper(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;
return fn.apply(thisArg,arguments)}return wrapper}function createCache(values){return nativeCreate&&Set?new SetCache(values):null;
}function createCompounder(callback){return function(string){var index=-1,array=words(deburr(string)),length=array.length,result="";
while(++index<length){result=callback(result,array[index],index)}return result}}function createCtorWrapper(Ctor){return function(){
var args=arguments;switch(args.length){case 0:return new Ctor;case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);
case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);
case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);return isObject(result)?result:thisBinding}}function createCurry(flag){
function curryFunc(func,arity,guard){if(guard&&isIterateeCall(func,arity,guard)){arity=undefined}var result=createWrapper(func,flag,undefined,undefined,undefined,undefined,undefined,arity);
result.placeholder=curryFunc.placeholder;return result}return curryFunc}function createDefaults(assigner,customizer){return restParam(function(args){
var object=args[0];if(object==null){return object}args.push(customizer);return assigner.apply(undefined,args)})}function createExtremum(comparator,exValue){
return function(collection,iteratee,thisArg){if(thisArg&&isIterateeCall(collection,iteratee,thisArg)){iteratee=undefined}iteratee=getCallback(iteratee,thisArg,3);
if(iteratee.length==1){collection=isArray(collection)?collection:toIterable(collection);var result=arrayExtremum(collection,iteratee,comparator,exValue);
if(!(collection.length&&result===exValue)){return result}}return baseExtremum(collection,iteratee,comparator,exValue)}}function createFind(eachFunc,fromRight){
return function(collection,predicate,thisArg){predicate=getCallback(predicate,thisArg,3);if(isArray(collection)){var index=baseFindIndex(collection,predicate,fromRight);
return index>-1?collection[index]:undefined}return baseFind(collection,predicate,eachFunc)}}function createFindIndex(fromRight){return function(array,predicate,thisArg){
if(!(array&&array.length)){return-1}predicate=getCallback(predicate,thisArg,3);return baseFindIndex(array,predicate,fromRight)}}function createFindKey(objectFunc){
return function(object,predicate,thisArg){predicate=getCallback(predicate,thisArg,3);return baseFind(object,predicate,objectFunc,true);
}}function createFlow(fromRight){return function(){var wrapper,length=arguments.length,index=fromRight?length:-1,leftIndex=0,funcs=Array(length);
while(fromRight?index--:++index<length){var func=funcs[leftIndex++]=arguments[index];if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT);
}if(!wrapper&&LodashWrapper.prototype.thru&&getFuncName(func)=="wrapper"){wrapper=new LodashWrapper([],true)}}index=wrapper?-1:length;
while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=="wrapper"?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(ARY_FLAG|CURRY_FLAG|PARTIAL_FLAG|REARG_FLAG)&&!data[4].length&&data[9]==1){
wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3])}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);
}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)&&value.length>=LARGE_ARRAY_SIZE){
return wrapper.plant(value).value()}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);
}return result}}}function createForEach(arrayFunc,eachFunc){return function(collection,iteratee,thisArg){return typeof iteratee=="function"&&thisArg===undefined&&isArray(collection)?arrayFunc(collection,iteratee):eachFunc(collection,bindCallback(iteratee,thisArg,3));
}}function createForIn(objectFunc){return function(object,iteratee,thisArg){if(typeof iteratee!="function"||thisArg!==undefined){
iteratee=bindCallback(iteratee,thisArg,3)}return objectFunc(object,iteratee,keysIn)}}function createForOwn(objectFunc){return function(object,iteratee,thisArg){
if(typeof iteratee!="function"||thisArg!==undefined){iteratee=bindCallback(iteratee,thisArg,3)}return objectFunc(object,iteratee);
}}function createObjectMapper(isMapKeys){return function(object,iteratee,thisArg){var result={};iteratee=getCallback(iteratee,thisArg,3);
baseForOwn(object,function(value,key,object){var mapped=iteratee(value,key,object);key=isMapKeys?mapped:key;value=isMapKeys?value:mapped;
result[key]=value});return result}}function createPadDir(fromRight){return function(string,length,chars){string=baseToString(string);
return(fromRight?string:"")+createPadding(string,length,chars)+(fromRight?"":string)}}function createPartial(flag){var partialFunc=restParam(function(func,partials){
var holders=replaceHolders(partials,partialFunc.placeholder);return createWrapper(func,flag,undefined,partials,holders)});return partialFunc;
}function createReduce(arrayFunc,eachFunc){return function(collection,iteratee,accumulator,thisArg){var initFromArray=arguments.length<3;
return typeof iteratee=="function"&&thisArg===undefined&&isArray(collection)?arrayFunc(collection,iteratee,accumulator,initFromArray):baseReduce(collection,getCallback(iteratee,thisArg,4),accumulator,initFromArray,eachFunc);
}}function createHybridWrapper(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&ARY_FLAG,isBind=bitmask&BIND_FLAG,isBindKey=bitmask&BIND_KEY_FLAG,isCurry=bitmask&CURRY_FLAG,isCurryBound=bitmask&CURRY_BOUND_FLAG,isCurryRight=bitmask&CURRY_RIGHT_FLAG,Ctor=isBindKey?undefined:createCtorWrapper(func);
function wrapper(){var length=arguments.length,index=length,args=Array(length);while(index--){args[index]=arguments[index]}if(partials){
args=composeArgs(args,partials,holders)}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight)}if(isCurry||isCurryRight){
var placeholder=wrapper.placeholder,argsHolders=replaceHolders(args,placeholder);length-=argsHolders.length;if(length<arity){var newArgPos=argPos?arrayCopy(argPos):undefined,newArity=nativeMax(arity-length,0),newsHolders=isCurry?argsHolders:undefined,newHoldersRight=isCurry?undefined:argsHolders,newPartials=isCurry?args:undefined,newPartialsRight=isCurry?undefined:args;
bitmask|=isCurry?PARTIAL_FLAG:PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?PARTIAL_RIGHT_FLAG:PARTIAL_FLAG);if(!isCurryBound){bitmask&=~(BIND_FLAG|BIND_KEY_FLAG);
}var newData=[func,bitmask,thisArg,newPartials,newsHolders,newPartialsRight,newHoldersRight,newArgPos,ary,newArity],result=createHybridWrapper.apply(undefined,newData);
if(isLaziable(func)){setData(result,newData)}result.placeholder=placeholder;return result}}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;
if(argPos){args=reorder(args,argPos)}if(isAry&&ary<args.length){args.length=ary}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtorWrapper(func);
}return fn.apply(thisBinding,args)}return wrapper}function createPadding(string,length,chars){var strLength=string.length;length=+length;
if(strLength>=length||!nativeIsFinite(length)){return""}var padLength=length-strLength;chars=chars==null?" ":chars+"";return repeat(chars,nativeCeil(padLength/chars.length)).slice(0,padLength);
}function createPartialWrapper(func,bitmask,thisArg,partials){var isBind=bitmask&BIND_FLAG,Ctor=createCtorWrapper(func);function wrapper(){
var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength);while(++leftIndex<leftLength){
args[leftIndex]=partials[leftIndex]}while(argsLength--){args[leftIndex++]=arguments[++argsIndex]}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;
return fn.apply(isBind?thisArg:this,args)}return wrapper}function createRound(methodName){var func=Math[methodName];return function(number,precision){
precision=precision===undefined?0:+precision||0;if(precision){precision=pow(10,precision);return func(number*precision)/precision;
}return func(number)}}function createSortedIndex(retHighest){return function(array,value,iteratee,thisArg){var callback=getCallback(iteratee);
return iteratee==null&&callback===baseCallback?binaryIndex(array,value,retHighest):binaryIndexBy(array,value,callback(iteratee,thisArg,1),retHighest);
}}function createWrapper(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&BIND_KEY_FLAG;if(!isBindKey&&typeof func!="function"){
throw new TypeError(FUNC_ERROR_TEXT)}var length=partials?partials.length:0;if(!length){bitmask&=~(PARTIAL_FLAG|PARTIAL_RIGHT_FLAG);
partials=holders=undefined}length-=holders?holders.length:0;if(bitmask&PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;
partials=holders=undefined}var data=isBindKey?undefined:getData(func),newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];
if(data){mergeData(newData,data);bitmask=newData[1];arity=newData[9]}newData[9]=arity==null?isBindKey?0:func.length:nativeMax(arity-length,0)||0;
if(bitmask==BIND_FLAG){var result=createBindWrapper(newData[0],newData[2])}else if((bitmask==PARTIAL_FLAG||bitmask==(BIND_FLAG|PARTIAL_FLAG))&&!newData[4].length){
result=createPartialWrapper.apply(undefined,newData)}else{result=createHybridWrapper.apply(undefined,newData)}var setter=data?baseSetData:setData;
return setter(result,newData)}function equalArrays(array,other,equalFunc,customizer,isLoose,stackA,stackB){var index=-1,arrLength=array.length,othLength=other.length;
if(arrLength!=othLength&&!(isLoose&&othLength>arrLength)){return false}while(++index<arrLength){var arrValue=array[index],othValue=other[index],result=customizer?customizer(isLoose?othValue:arrValue,isLoose?arrValue:othValue,index):undefined;
if(result!==undefined){if(result){continue}return false}if(isLoose){if(!arraySome(other,function(othValue){return arrValue===othValue||equalFunc(arrValue,othValue,customizer,isLoose,stackA,stackB);
})){return false}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,customizer,isLoose,stackA,stackB))){return false}}return true;
}function equalByTag(object,other,tag){switch(tag){case boolTag:case dateTag:return+object==+other;case errorTag:return object.name==other.name&&object.message==other.message;
case numberTag:return object!=+object?other!=+other:object==+other;case regexpTag:case stringTag:return object==other+""}return false;
}function equalObjects(object,other,equalFunc,customizer,isLoose,stackA,stackB){var objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;
if(objLength!=othLength&&!isLoose){return false}var index=objLength;while(index--){var key=objProps[index];if(!(isLoose?key in other:hasOwnProperty.call(other,key))){
return false}}var skipCtor=isLoose;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key],result=customizer?customizer(isLoose?othValue:objValue,isLoose?objValue:othValue,key):undefined;
if(!(result===undefined?equalFunc(objValue,othValue,customizer,isLoose,stackA,stackB):result)){return false}skipCtor||(skipCtor=key=="constructor");
}if(!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;if(objCtor!=othCtor&&("constructor"in object&&"constructor"in other)&&!(typeof objCtor=="function"&&objCtor instanceof objCtor&&typeof othCtor=="function"&&othCtor instanceof othCtor)){
return false}}return true}function getCallback(func,thisArg,argCount){var result=lodash.callback||callback;result=result===callback?baseCallback:result;
return argCount?result(func,thisArg,argCount):result}var getData=!metaMap?noop:function(func){return metaMap.get(func)};function getFuncName(func){
var result=func.name,array=realNames[result],length=array?array.length:0;while(length--){var data=array[length],otherFunc=data.func;
if(otherFunc==null||otherFunc==func){return data.name}}return result}function getIndexOf(collection,target,fromIndex){var result=lodash.indexOf||indexOf;
result=result===indexOf?baseIndexOf:result;return collection?result(collection,target,fromIndex):result}var getLength=baseProperty("length");
function getMatchData(object){var result=pairs(object),length=result.length;while(length--){result[length][2]=isStrictComparable(result[length][1]);
}return result}function getNative(object,key){var value=object==null?undefined:object[key];return isNative(value)?value:undefined;
}function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;
switch(data.type){case"drop":start+=size;break;case"dropRight":end-=size;break;case"take":end=nativeMin(end,start+size);break;case"takeRight":
start=nativeMax(start,end-size);break}}return{start:start,end:end}}function initCloneArray(array){var length=array.length,result=new array.constructor(length);
if(length&&typeof array[0]=="string"&&hasOwnProperty.call(array,"index")){result.index=array.index;result.input=array.input}return result;
}function initCloneObject(object){var Ctor=object.constructor;if(!(typeof Ctor=="function"&&Ctor instanceof Ctor)){Ctor=Object}return new Ctor;
}function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return bufferClone(object);
case boolTag:case dateTag:return new Ctor((+object));case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:
case uint8ClampedTag:case uint16Tag:case uint32Tag:var buffer=object.buffer;return new Ctor(isDeep?bufferClone(buffer):buffer,object.byteOffset,object.length);
case numberTag:case stringTag:return new Ctor(object);case regexpTag:var result=new Ctor(object.source,reFlags.exec(object));result.lastIndex=object.lastIndex;
}return result}function invokePath(object,path,args){if(object!=null&&!isKey(path,object)){path=toPath(path);object=path.length==1?object:baseGet(object,baseSlice(path,0,-1));
path=last(path)}var func=object==null?object:object[path];return func==null?undefined:func.apply(object,args)}function isArrayLike(value){
return value!=null&&isLength(getLength(value))}function isIndex(value,length){value=typeof value=="number"||reIsUint.test(value)?+value:-1;
length=length==null?MAX_SAFE_INTEGER:length;return value>-1&&value%1==0&&value<length}function isIterateeCall(value,index,object){
if(!isObject(object)){return false}var type=typeof index;if(type=="number"?isArrayLike(object)&&isIndex(index,object.length):type=="string"&&index in object){
var other=object[index];return value===value?value===other:other!==other}return false}function isKey(value,object){var type=typeof value;
if(type=="string"&&reIsPlainProp.test(value)||type=="number"){return true}if(isArray(value)){return false}var result=!reIsDeepProp.test(value);
return result||object!=null&&value in toObject(object)}function isLaziable(func){var funcName=getFuncName(func);if(!(funcName in LazyWrapper.prototype)){
return false}var other=lodash[funcName];if(func===other){return true}var data=getData(other);return!!data&&func===data[0]}function isLength(value){
return typeof value=="number"&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER}function isStrictComparable(value){return value===value&&!isObject(value);
}function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<ARY_FLAG;
var isCombo=srcBitmask==ARY_FLAG&&bitmask==CURRY_FLAG||srcBitmask==ARY_FLAG&&bitmask==REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(ARY_FLAG|REARG_FLAG)&&bitmask==CURRY_FLAG;
if(!(isCommon||isCombo)){return data}if(srcBitmask&BIND_FLAG){data[2]=source[2];newBitmask|=bitmask&BIND_FLAG?0:CURRY_BOUND_FLAG}
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):arrayCopy(value);data[4]=partials?replaceHolders(data[3],PLACEHOLDER):arrayCopy(source[4]);
}value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):arrayCopy(value);data[6]=partials?replaceHolders(data[5],PLACEHOLDER):arrayCopy(source[6]);
}value=source[7];if(value){data[7]=arrayCopy(value)}if(srcBitmask&ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);
}if(data[9]==null){data[9]=source[9]}data[0]=source[0];data[1]=newBitmask;return data}function mergeDefaults(objectValue,sourceValue){
return objectValue===undefined?sourceValue:merge(objectValue,sourceValue,mergeDefaults)}function pickByArray(object,props){object=toObject(object);
var index=-1,length=props.length,result={};while(++index<length){var key=props[index];if(key in object){result[key]=object[key]}}
return result}function pickByCallback(object,predicate){var result={};baseForIn(object,function(value,key,object){if(predicate(value,key,object)){
result[key]=value}});return result}function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=arrayCopy(array);
while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined}return array}var setData=function(){
var count=0,lastCalled=0;return function(key,value){var stamp=now(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){
if(++count>=HOT_COUNT){return key}}else{count=0}return baseSetData(key,value)}}();function shimKeys(object){var props=keysIn(object),propsLength=props.length,length=propsLength&&object.length;
var allowIndexes=!!length&&isLength(length)&&(isArray(object)||isArguments(object));var index=-1,result=[];while(++index<propsLength){
var key=props[index];if(allowIndexes&&isIndex(key,length)||hasOwnProperty.call(object,key)){result.push(key)}}return result}function toIterable(value){
if(value==null){return[]}if(!isArrayLike(value)){return values(value)}return isObject(value)?value:Object(value)}function toObject(value){
return isObject(value)?value:Object(value)}function toPath(value){if(isArray(value)){return value}var result=[];baseToString(value).replace(rePropName,function(match,number,quote,string){
result.push(quote?string.replace(reEscapeChar,"$1"):number||match)});return result}function wrapperClone(wrapper){return wrapper instanceof LazyWrapper?wrapper.clone():new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__,arrayCopy(wrapper.__actions__));
}function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size==null){size=1}else{size=nativeMax(nativeFloor(size)||1,1);
}var index=0,length=array?array.length:0,resIndex=-1,result=Array(nativeCeil(length/size));while(index<length){result[++resIndex]=baseSlice(array,index,index+=size);
}return result}function compact(array){var index=-1,length=array?array.length:0,resIndex=-1,result=[];while(++index<length){var value=array[index];
if(value){result[++resIndex]=value}}return result}var difference=restParam(function(array,values){return isObjectLike(array)&&isArrayLike(array)?baseDifference(array,baseFlatten(values,false,true)):[];
});function drop(array,n,guard){var length=array?array.length:0;if(!length){return[]}if(guard?isIterateeCall(array,n,guard):n==null){
n=1}return baseSlice(array,n<0?0:n)}function dropRight(array,n,guard){var length=array?array.length:0;if(!length){return[]}if(guard?isIterateeCall(array,n,guard):n==null){
n=1}n=length-(+n||0);return baseSlice(array,0,n<0?0:n)}function dropRightWhile(array,predicate,thisArg){return array&&array.length?baseWhile(array,getCallback(predicate,thisArg,3),true,true):[];
}function dropWhile(array,predicate,thisArg){return array&&array.length?baseWhile(array,getCallback(predicate,thisArg,3),true):[];
}function fill(array,value,start,end){var length=array?array.length:0;if(!length){return[]}if(start&&typeof start!="number"&&isIterateeCall(array,value,start)){
start=0;end=length}return baseFill(array,value,start,end)}var findIndex=createFindIndex();var findLastIndex=createFindIndex(true);
function first(array){return array?array[0]:undefined}function flatten(array,isDeep,guard){var length=array?array.length:0;if(guard&&isIterateeCall(array,isDeep,guard)){
isDeep=false}return length?baseFlatten(array,isDeep):[]}function flattenDeep(array){var length=array?array.length:0;return length?baseFlatten(array,true):[];
}function indexOf(array,value,fromIndex){var length=array?array.length:0;if(!length){return-1}if(typeof fromIndex=="number"){fromIndex=fromIndex<0?nativeMax(length+fromIndex,0):fromIndex;
}else if(fromIndex){var index=binaryIndex(array,value);if(index<length&&(value===value?value===array[index]:array[index]!==array[index])){
return index}return-1}return baseIndexOf(array,value,fromIndex||0)}function initial(array){return dropRight(array,1)}var intersection=restParam(function(arrays){
var othLength=arrays.length,othIndex=othLength,caches=Array(length),indexOf=getIndexOf(),isCommon=indexOf==baseIndexOf,result=[];while(othIndex--){
var value=arrays[othIndex]=isArrayLike(value=arrays[othIndex])?value:[];caches[othIndex]=isCommon&&value.length>=120?createCache(othIndex&&value):null;
}var array=arrays[0],index=-1,length=array?array.length:0,seen=caches[0];outer:while(++index<length){value=array[index];if((seen?cacheIndexOf(seen,value):indexOf(result,value,0))<0){
var othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if((cache?cacheIndexOf(cache,value):indexOf(arrays[othIndex],value,0))<0){
continue outer}}if(seen){seen.push(value)}result.push(value)}}return result});function last(array){var length=array?array.length:0;
return length?array[length-1]:undefined}function lastIndexOf(array,value,fromIndex){var length=array?array.length:0;if(!length){return-1;
}var index=length;if(typeof fromIndex=="number"){index=(fromIndex<0?nativeMax(length+fromIndex,0):nativeMin(fromIndex||0,length-1))+1;
}else if(fromIndex){index=binaryIndex(array,value,true)-1;var other=array[index];if(value===value?value===other:other!==other){return index;
}return-1}if(value!==value){return indexOfNaN(array,index,true)}while(index--){if(array[index]===value){return index}}return-1}function pull(){
var args=arguments,array=args[0];if(!(array&&array.length)){return array}var index=0,indexOf=getIndexOf(),length=args.length;while(++index<length){
var fromIndex=0,value=args[index];while((fromIndex=indexOf(array,value,fromIndex))>-1){splice.call(array,fromIndex,1)}}return array;
}var pullAt=restParam(function(array,indexes){indexes=baseFlatten(indexes);var result=baseAt(array,indexes);basePullAt(array,indexes.sort(baseCompareAscending));
return result});function remove(array,predicate,thisArg){var result=[];if(!(array&&array.length)){return result}var index=-1,indexes=[],length=array.length;
predicate=getCallback(predicate,thisArg,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);
indexes.push(index)}}basePullAt(array,indexes);return result}function rest(array){return drop(array,1)}function slice(array,start,end){
var length=array?array.length:0;if(!length){return[]}if(end&&typeof end!="number"&&isIterateeCall(array,start,end)){start=0;end=length;
}return baseSlice(array,start,end)}var sortedIndex=createSortedIndex();var sortedLastIndex=createSortedIndex(true);function take(array,n,guard){
var length=array?array.length:0;if(!length){return[]}if(guard?isIterateeCall(array,n,guard):n==null){n=1}return baseSlice(array,0,n<0?0:n);
}function takeRight(array,n,guard){var length=array?array.length:0;if(!length){return[]}if(guard?isIterateeCall(array,n,guard):n==null){
n=1}n=length-(+n||0);return baseSlice(array,n<0?0:n)}function takeRightWhile(array,predicate,thisArg){return array&&array.length?baseWhile(array,getCallback(predicate,thisArg,3),false,true):[];
}function takeWhile(array,predicate,thisArg){return array&&array.length?baseWhile(array,getCallback(predicate,thisArg,3)):[]}var union=restParam(function(arrays){
return baseUniq(baseFlatten(arrays,false,true))});function uniq(array,isSorted,iteratee,thisArg){var length=array?array.length:0;if(!length){
return[]}if(isSorted!=null&&typeof isSorted!="boolean"){thisArg=iteratee;iteratee=isIterateeCall(array,isSorted,thisArg)?undefined:isSorted;
isSorted=false}var callback=getCallback();if(!(iteratee==null&&callback===baseCallback)){iteratee=callback(iteratee,thisArg,3)}return isSorted&&getIndexOf()==baseIndexOf?sortedUniq(array,iteratee):baseUniq(array,iteratee);
}function unzip(array){if(!(array&&array.length)){return[]}var index=-1,length=0;array=arrayFilter(array,function(group){if(isArrayLike(group)){
length=nativeMax(group.length,length);return true}});var result=Array(length);while(++index<length){result[index]=arrayMap(array,baseProperty(index));
}return result}function unzipWith(array,iteratee,thisArg){var length=array?array.length:0;if(!length){return[]}var result=unzip(array);
if(iteratee==null){return result}iteratee=bindCallback(iteratee,thisArg,4);return arrayMap(result,function(group){return arrayReduce(group,iteratee,undefined,true);
})}var without=restParam(function(array,values){return isArrayLike(array)?baseDifference(array,values):[]});function xor(){var index=-1,length=arguments.length;
while(++index<length){var array=arguments[index];if(isArrayLike(array)){var result=result?arrayPush(baseDifference(result,array),baseDifference(array,result)):array;
}}return result?baseUniq(result):[]}var zip=restParam(unzip);function zipObject(props,values){var index=-1,length=props?props.length:0,result={};
if(length&&!values&&!isArray(props[0])){values=[]}while(++index<length){var key=props[index];if(values){result[key]=values[index];
}else if(key){result[key[0]]=key[1]}}return result}var zipWith=restParam(function(arrays){var length=arrays.length,iteratee=length>2?arrays[length-2]:undefined,thisArg=length>1?arrays[length-1]:undefined;
if(length>2&&typeof iteratee=="function"){length-=2}else{iteratee=length>1&&typeof thisArg=="function"?(--length,thisArg):undefined;
thisArg=undefined}arrays.length=length;return unzipWith(arrays,iteratee,thisArg)});function chain(value){var result=lodash(value);
result.__chain__=true;return result}function tap(value,interceptor,thisArg){interceptor.call(thisArg,value);return value}function thru(value,interceptor,thisArg){
return interceptor.call(thisArg,value)}function wrapperChain(){return chain(this)}function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);
}var wrapperConcat=restParam(function(values){values=baseFlatten(values);return this.thru(function(array){return arrayConcat(isArray(array)?array:[toObject(array)],values);
})});function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);if(result){
previous.__wrapped__=clone}else{result=clone}var previous=clone;parent=parent.__wrapped__}previous.__wrapped__=value;return result;
}function wrapperReverse(){var value=this.__wrapped__;var interceptor=function(value){return wrapped&&wrapped.__dir__<0?value:value.reverse();
};if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this)}wrapped=wrapped.reverse();
wrapped.__actions__.push({func:thru,args:[interceptor],thisArg:undefined});return new LodashWrapper(wrapped,this.__chain__)}return this.thru(interceptor);
}function wrapperToString(){return this.value()+""}function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);
}var at=restParam(function(collection,props){return baseAt(collection,baseFlatten(props))});var countBy=createAggregator(function(result,value,key){
hasOwnProperty.call(result,key)?++result[key]:result[key]=1});function every(collection,predicate,thisArg){var func=isArray(collection)?arrayEvery:baseEvery;
if(thisArg&&isIterateeCall(collection,predicate,thisArg)){predicate=undefined}if(typeof predicate!="function"||thisArg!==undefined){
predicate=getCallback(predicate,thisArg,3)}return func(collection,predicate)}function filter(collection,predicate,thisArg){var func=isArray(collection)?arrayFilter:baseFilter;
predicate=getCallback(predicate,thisArg,3);return func(collection,predicate)}var find=createFind(baseEach);var findLast=createFind(baseEachRight,true);
function findWhere(collection,source){return find(collection,baseMatches(source))}var forEach=createForEach(arrayEach,baseEach);var forEachRight=createForEach(arrayEachRight,baseEachRight);
var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value)}else{result[key]=[value];
}});function includes(collection,target,fromIndex,guard){var length=collection?getLength(collection):0;if(!isLength(length)){collection=values(collection);
length=collection.length}if(typeof fromIndex!="number"||guard&&isIterateeCall(target,fromIndex,guard)){fromIndex=0}else{fromIndex=fromIndex<0?nativeMax(length+fromIndex,0):fromIndex||0;
}return typeof collection=="string"||!isArray(collection)&&isString(collection)?fromIndex<=length&&collection.indexOf(target,fromIndex)>-1:!!length&&getIndexOf(collection,target,fromIndex)>-1;
}var indexBy=createAggregator(function(result,value,key){result[key]=value});var invoke=restParam(function(collection,path,args){
var index=-1,isFunc=typeof path=="function",isProp=isKey(path),result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){
var func=isFunc?path:isProp&&value!=null?value[path]:undefined;result[++index]=func?func.apply(value,args):invokePath(value,path,args);
});return result});function map(collection,iteratee,thisArg){var func=isArray(collection)?arrayMap:baseMap;iteratee=getCallback(iteratee,thisArg,3);
return func(collection,iteratee)}var partition=createAggregator(function(result,value,key){result[key?0:1].push(value)},function(){
return[[],[]]});function pluck(collection,path){return map(collection,property(path))}var reduce=createReduce(arrayReduce,baseEach);
var reduceRight=createReduce(arrayReduceRight,baseEachRight);function reject(collection,predicate,thisArg){var func=isArray(collection)?arrayFilter:baseFilter;
predicate=getCallback(predicate,thisArg,3);return func(collection,function(value,index,collection){return!predicate(value,index,collection);
})}function sample(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n==null){collection=toIterable(collection);var length=collection.length;
return length>0?collection[baseRandom(0,length-1)]:undefined}var index=-1,result=toArray(collection),length=result.length,lastIndex=length-1;
n=nativeMin(n<0?0:+n||0,length);while(++index<n){var rand=baseRandom(index,lastIndex),value=result[rand];result[rand]=result[index];
result[index]=value}result.length=n;return result}function shuffle(collection){return sample(collection,POSITIVE_INFINITY)}function size(collection){
var length=collection?getLength(collection):0;return isLength(length)?length:keys(collection).length}function some(collection,predicate,thisArg){
var func=isArray(collection)?arraySome:baseSome;if(thisArg&&isIterateeCall(collection,predicate,thisArg)){predicate=undefined}if(typeof predicate!="function"||thisArg!==undefined){
predicate=getCallback(predicate,thisArg,3)}return func(collection,predicate)}function sortBy(collection,iteratee,thisArg){if(collection==null){
return[]}if(thisArg&&isIterateeCall(collection,iteratee,thisArg)){iteratee=undefined}var index=-1;iteratee=getCallback(iteratee,thisArg,3);
var result=baseMap(collection,function(value,key,collection){return{criteria:iteratee(value,key,collection),index:++index,value:value
}});return baseSortBy(result,compareAscending)}var sortByAll=restParam(function(collection,iteratees){if(collection==null){return[];
}var guard=iteratees[2];if(guard&&isIterateeCall(iteratees[0],iteratees[1],guard)){iteratees.length=1}return baseSortByOrder(collection,baseFlatten(iteratees),[]);
});function sortByOrder(collection,iteratees,orders,guard){if(collection==null){return[]}if(guard&&isIterateeCall(iteratees,orders,guard)){
orders=undefined}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees]}if(!isArray(orders)){orders=orders==null?[]:[orders];
}return baseSortByOrder(collection,iteratees,orders)}function where(collection,source){return filter(collection,baseMatches(source));
}var now=nativeNow||function(){return(new Date).getTime()};function after(n,func){if(typeof func!="function"){if(typeof n=="function"){
var temp=n;n=func;func=temp}else{throw new TypeError(FUNC_ERROR_TEXT)}}n=nativeIsFinite(n=+n)?n:0;return function(){if(--n<1){return func.apply(this,arguments);
}}}function ary(func,n,guard){if(guard&&isIterateeCall(func,n,guard)){n=undefined}n=func&&n==null?func.length:nativeMax(+n||0,0);return createWrapper(func,ARY_FLAG,undefined,undefined,undefined,undefined,n);
}function before(n,func){var result;if(typeof func!="function"){if(typeof n=="function"){var temp=n;n=func;func=temp}else{throw new TypeError(FUNC_ERROR_TEXT);
}}return function(){if(--n>0){result=func.apply(this,arguments)}if(n<=1){func=undefined}return result}}var bind=restParam(function(func,thisArg,partials){
var bitmask=BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,bind.placeholder);bitmask|=PARTIAL_FLAG}return createWrapper(func,bitmask,thisArg,partials,holders);
});var bindAll=restParam(function(object,methodNames){methodNames=methodNames.length?baseFlatten(methodNames):functions(object);var index=-1,length=methodNames.length;
while(++index<length){var key=methodNames[index];object[key]=createWrapper(object[key],BIND_FLAG,object)}return object});var bindKey=restParam(function(object,key,partials){
var bitmask=BIND_FLAG|BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,bindKey.placeholder);bitmask|=PARTIAL_FLAG;
}return createWrapper(key,bitmask,object,partials,holders)});var curry=createCurry(CURRY_FLAG);var curryRight=createCurry(CURRY_RIGHT_FLAG);
function debounce(func,wait,options){var args,maxTimeoutId,result,stamp,thisArg,timeoutId,trailingCall,lastCalled=0,maxWait=false,trailing=true;
if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT)}wait=wait<0?0:+wait||0;if(options===true){var leading=true;trailing=false;
}else if(isObject(options)){leading=!!options.leading;maxWait="maxWait"in options&&nativeMax(+options.maxWait||0,wait);trailing="trailing"in options?!!options.trailing:trailing;
}function cancel(){if(timeoutId){clearTimeout(timeoutId)}if(maxTimeoutId){clearTimeout(maxTimeoutId)}lastCalled=0;maxTimeoutId=timeoutId=trailingCall=undefined;
}function complete(isCalled,id){if(id){clearTimeout(id)}maxTimeoutId=timeoutId=trailingCall=undefined;if(isCalled){lastCalled=now();
result=func.apply(thisArg,args);if(!timeoutId&&!maxTimeoutId){args=thisArg=undefined}}}function delayed(){var remaining=wait-(now()-stamp);
if(remaining<=0||remaining>wait){complete(trailingCall,maxTimeoutId)}else{timeoutId=setTimeout(delayed,remaining)}}function maxDelayed(){
complete(trailing,timeoutId)}function debounced(){args=arguments;stamp=now();thisArg=this;trailingCall=trailing&&(timeoutId||!leading);
if(maxWait===false){var leadingCall=leading&&!timeoutId}else{if(!maxTimeoutId&&!leading){lastCalled=stamp}var remaining=maxWait-(stamp-lastCalled),isCalled=remaining<=0||remaining>maxWait;
if(isCalled){if(maxTimeoutId){maxTimeoutId=clearTimeout(maxTimeoutId)}lastCalled=stamp;result=func.apply(thisArg,args)}else if(!maxTimeoutId){
maxTimeoutId=setTimeout(maxDelayed,remaining)}}if(isCalled&&timeoutId){timeoutId=clearTimeout(timeoutId)}else if(!timeoutId&&wait!==maxWait){
timeoutId=setTimeout(delayed,wait)}if(leadingCall){isCalled=true;result=func.apply(thisArg,args)}if(isCalled&&!timeoutId&&!maxTimeoutId){
args=thisArg=undefined}return result}debounced.cancel=cancel;return debounced}var defer=restParam(function(func,args){return baseDelay(func,1,args);
});var delay=restParam(function(func,wait,args){return baseDelay(func,wait,args)});var flow=createFlow();var flowRight=createFlow(true);
function memoize(func,resolver){if(typeof func!="function"||resolver&&typeof resolver!="function"){throw new TypeError(FUNC_ERROR_TEXT);
}var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){
return cache.get(key)}var result=func.apply(this,args);memoized.cache=cache.set(key,result);return result};memoized.cache=new memoize.Cache;
return memoized}var modArgs=restParam(function(func,transforms){transforms=baseFlatten(transforms);if(typeof func!="function"||!arrayEvery(transforms,baseIsFunction)){
throw new TypeError(FUNC_ERROR_TEXT)}var length=transforms.length;return restParam(function(args){var index=nativeMin(args.length,length);
while(index--){args[index]=transforms[index](args[index])}return func.apply(this,args)})});function negate(predicate){if(typeof predicate!="function"){
throw new TypeError(FUNC_ERROR_TEXT)}return function(){return!predicate.apply(this,arguments)}}function once(func){return before(2,func);
}var partial=createPartial(PARTIAL_FLAG);var partialRight=createPartial(PARTIAL_RIGHT_FLAG);var rearg=restParam(function(func,indexes){
return createWrapper(func,REARG_FLAG,undefined,undefined,undefined,baseFlatten(indexes))});function restParam(func,start){if(typeof func!="function"){
throw new TypeError(FUNC_ERROR_TEXT)}start=nativeMax(start===undefined?func.length-1:+start||0,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),rest=Array(length);
while(++index<length){rest[index]=args[start+index]}switch(start){case 0:return func.call(this,rest);case 1:return func.call(this,args[0],rest);
case 2:return func.call(this,args[0],args[1],rest)}var otherArgs=Array(start+1);index=-1;while(++index<start){otherArgs[index]=args[index];
}otherArgs[start]=rest;return func.apply(this,otherArgs)}}function spread(func){if(typeof func!="function"){throw new TypeError(FUNC_ERROR_TEXT);
}return function(array){return func.apply(this,array)}}function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!="function"){
throw new TypeError(FUNC_ERROR_TEXT)}if(options===false){leading=false}else if(isObject(options)){leading="leading"in options?!!options.leading:leading;
trailing="trailing"in options?!!options.trailing:trailing}return debounce(func,wait,{leading:leading,maxWait:+wait,trailing:trailing
})}function wrap(value,wrapper){wrapper=wrapper==null?identity:wrapper;return createWrapper(wrapper,PARTIAL_FLAG,undefined,[value],[]);
}function clone(value,isDeep,customizer,thisArg){if(isDeep&&typeof isDeep!="boolean"&&isIterateeCall(value,isDeep,customizer)){isDeep=false;
}else if(typeof isDeep=="function"){thisArg=customizer;customizer=isDeep;isDeep=false}return typeof customizer=="function"?baseClone(value,isDeep,bindCallback(customizer,thisArg,1)):baseClone(value,isDeep);
}function cloneDeep(value,customizer,thisArg){return typeof customizer=="function"?baseClone(value,true,bindCallback(customizer,thisArg,1)):baseClone(value,true);
}function gt(value,other){return value>other}function gte(value,other){return value>=other}function isArguments(value){return isObjectLike(value)&&isArrayLike(value)&&hasOwnProperty.call(value,"callee")&&!propertyIsEnumerable.call(value,"callee");
}var isArray=nativeIsArray||function(value){return isObjectLike(value)&&isLength(value.length)&&objToString.call(value)==arrayTag;
};function isBoolean(value){return value===true||value===false||isObjectLike(value)&&objToString.call(value)==boolTag}function isDate(value){
return isObjectLike(value)&&objToString.call(value)==dateTag}function isElement(value){return!!value&&value.nodeType===1&&isObjectLike(value)&&!isPlainObject(value);
}function isEmpty(value){if(value==null){return true}if(isArrayLike(value)&&(isArray(value)||isString(value)||isArguments(value)||isObjectLike(value)&&isFunction(value.splice))){
return!value.length}return!keys(value).length}function isEqual(value,other,customizer,thisArg){customizer=typeof customizer=="function"?bindCallback(customizer,thisArg,3):undefined;
var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,customizer):!!result}function isError(value){
return isObjectLike(value)&&typeof value.message=="string"&&objToString.call(value)==errorTag}function isFinite(value){return typeof value=="number"&&nativeIsFinite(value);
}function isFunction(value){return isObject(value)&&objToString.call(value)==funcTag}function isObject(value){var type=typeof value;
return!!value&&(type=="object"||type=="function")}function isMatch(object,source,customizer,thisArg){customizer=typeof customizer=="function"?bindCallback(customizer,thisArg,3):undefined;
return baseIsMatch(object,getMatchData(source),customizer)}function isNaN(value){return isNumber(value)&&value!=+value}function isNative(value){
if(value==null){return false}if(isFunction(value)){return reIsNative.test(fnToString.call(value))}return isObjectLike(value)&&reIsHostCtor.test(value);
}function isNull(value){return value===null}function isNumber(value){return typeof value=="number"||isObjectLike(value)&&objToString.call(value)==numberTag;
}function isPlainObject(value){var Ctor;if(!(isObjectLike(value)&&objToString.call(value)==objectTag&&!isArguments(value))||!hasOwnProperty.call(value,"constructor")&&(Ctor=value.constructor,
typeof Ctor=="function"&&!(Ctor instanceof Ctor))){return false}var result;baseForIn(value,function(subValue,key){result=key});return result===undefined||hasOwnProperty.call(value,result);
}function isRegExp(value){return isObject(value)&&objToString.call(value)==regexpTag}function isString(value){return typeof value=="string"||isObjectLike(value)&&objToString.call(value)==stringTag;
}function isTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objToString.call(value)]}function isUndefined(value){
return value===undefined}function lt(value,other){return value<other}function lte(value,other){return value<=other}function toArray(value){
var length=value?getLength(value):0;if(!isLength(length)){return values(value)}if(!length){return[]}return arrayCopy(value)}function toPlainObject(value){
return baseCopy(value,keysIn(value))}var merge=createAssigner(baseMerge);var assign=createAssigner(function(object,source,customizer){
return customizer?assignWith(object,source,customizer):baseAssign(object,source)});function create(prototype,properties,guard){var result=baseCreate(prototype);
if(guard&&isIterateeCall(prototype,properties,guard)){properties=undefined}return properties?baseAssign(result,properties):result;
}var defaults=createDefaults(assign,assignDefaults);var defaultsDeep=createDefaults(merge,mergeDefaults);var findKey=createFindKey(baseForOwn);
var findLastKey=createFindKey(baseForOwnRight);var forIn=createForIn(baseFor);var forInRight=createForIn(baseForRight);var forOwn=createForOwn(baseForOwn);
var forOwnRight=createForOwn(baseForOwnRight);function functions(object){return baseFunctions(object,keysIn(object))}function get(object,path,defaultValue){
var result=object==null?undefined:baseGet(object,toPath(path),path+"");return result===undefined?defaultValue:result}function has(object,path){
if(object==null){return false}var result=hasOwnProperty.call(object,path);if(!result&&!isKey(path)){path=toPath(path);object=path.length==1?object:baseGet(object,baseSlice(path,0,-1));
if(object==null){return false}path=last(path);result=hasOwnProperty.call(object,path)}return result||isLength(object.length)&&isIndex(path,object.length)&&(isArray(object)||isArguments(object));
}function invert(object,multiValue,guard){if(guard&&isIterateeCall(object,multiValue,guard)){multiValue=undefined}var index=-1,props=keys(object),length=props.length,result={};
while(++index<length){var key=props[index],value=object[key];if(multiValue){if(hasOwnProperty.call(result,value)){result[value].push(key);
}else{result[value]=[key]}}else{result[value]=key}}return result}var keys=!nativeKeys?shimKeys:function(object){var Ctor=object==null?undefined:object.constructor;
if(typeof Ctor=="function"&&Ctor.prototype===object||typeof object!="function"&&isArrayLike(object)){return shimKeys(object)}return isObject(object)?nativeKeys(object):[];
};function keysIn(object){if(object==null){return[]}if(!isObject(object)){object=Object(object)}var length=object.length;length=length&&isLength(length)&&(isArray(object)||isArguments(object))&&length||0;
var Ctor=object.constructor,index=-1,isProto=typeof Ctor=="function"&&Ctor.prototype===object,result=Array(length),skipIndexes=length>0;
while(++index<length){result[index]=index+""}for(var key in object){if(!(skipIndexes&&isIndex(key,length))&&!(key=="constructor"&&(isProto||!hasOwnProperty.call(object,key)))){
result.push(key)}}return result}var mapKeys=createObjectMapper(true);var mapValues=createObjectMapper();var omit=restParam(function(object,props){
if(object==null){return{}}if(typeof props[0]!="function"){var props=arrayMap(baseFlatten(props),String);return pickByArray(object,baseDifference(keysIn(object),props));
}var predicate=bindCallback(props[0],props[1],3);return pickByCallback(object,function(value,key,object){return!predicate(value,key,object);
})});function pairs(object){object=toObject(object);var index=-1,props=keys(object),length=props.length,result=Array(length);while(++index<length){
var key=props[index];result[index]=[key,object[key]]}return result}var pick=restParam(function(object,props){if(object==null){return{};
}return typeof props[0]=="function"?pickByCallback(object,bindCallback(props[0],props[1],3)):pickByArray(object,baseFlatten(props));
});function result(object,path,defaultValue){var result=object==null?undefined:object[path];if(result===undefined){if(object!=null&&!isKey(path,object)){
path=toPath(path);object=path.length==1?object:baseGet(object,baseSlice(path,0,-1));result=object==null?undefined:object[last(path)];
}result=result===undefined?defaultValue:result}return isFunction(result)?result.call(object):result}function set(object,path,value){
if(object==null){return object}var pathKey=path+"";path=object[pathKey]!=null||isKey(path,object)?[pathKey]:toPath(path);var index=-1,length=path.length,lastIndex=length-1,nested=object;
while(nested!=null&&++index<length){var key=path[index];if(isObject(nested)){if(index==lastIndex){nested[key]=value}else if(nested[key]==null){
nested[key]=isIndex(path[index+1])?[]:{}}}nested=nested[key]}return object}function transform(object,iteratee,accumulator,thisArg){
var isArr=isArray(object)||isTypedArray(object);iteratee=getCallback(iteratee,thisArg,4);if(accumulator==null){if(isArr||isObject(object)){
var Ctor=object.constructor;if(isArr){accumulator=isArray(object)?new Ctor:[]}else{accumulator=baseCreate(isFunction(Ctor)?Ctor.prototype:undefined);
}}else{accumulator={}}}(isArr?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);
});return accumulator}function values(object){return baseValues(object,keys(object))}function valuesIn(object){return baseValues(object,keysIn(object));
}function inRange(value,start,end){start=+start||0;if(end===undefined){end=start;start=0}else{end=+end||0}return value>=nativeMin(start,end)&&value<nativeMax(start,end);
}function random(min,max,floating){if(floating&&isIterateeCall(min,max,floating)){max=floating=undefined}var noMin=min==null,noMax=max==null;
if(floating==null){if(noMax&&typeof min=="boolean"){floating=min;min=1}else if(typeof max=="boolean"){floating=max;noMax=true}}if(noMin&&noMax){
max=1;noMax=false}min=+min||0;if(noMax){max=min;min=0}else{max=+max||0}if(floating||min%1||max%1){var rand=nativeRandom();return nativeMin(min+rand*(max-min+parseFloat("1e-"+((rand+"").length-1))),max);
}return baseRandom(min,max)}var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?word.charAt(0).toUpperCase()+word.slice(1):word);
});function capitalize(string){string=baseToString(string);return string&&string.charAt(0).toUpperCase()+string.slice(1)}function deburr(string){
string=baseToString(string);return string&&string.replace(reLatin1,deburrLetter).replace(reComboMark,"")}function endsWith(string,target,position){
string=baseToString(string);target=target+"";var length=string.length;position=position===undefined?length:nativeMin(position<0?0:+position||0,length);
position-=target.length;return position>=0&&string.indexOf(target,position)==position}function escape(string){string=baseToString(string);
return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string}function escapeRegExp(string){
string=baseToString(string);return string&&reHasRegExpChars.test(string)?string.replace(reRegExpChars,escapeRegExpChar):string||"(?:)";
}var kebabCase=createCompounder(function(result,word,index){return result+(index?"-":"")+word.toLowerCase()});function pad(string,length,chars){
string=baseToString(string);length=+length;var strLength=string.length;if(strLength>=length||!nativeIsFinite(length)){return string;
}var mid=(length-strLength)/2,leftLength=nativeFloor(mid),rightLength=nativeCeil(mid);chars=createPadding("",rightLength,chars);return chars.slice(0,leftLength)+string+chars;
}var padLeft=createPadDir();var padRight=createPadDir(true);function parseInt(string,radix,guard){if(guard?isIterateeCall(string,radix,guard):radix==null){
radix=0}else if(radix){radix=+radix}string=trim(string);return nativeParseInt(string,radix||(reHasHexPrefix.test(string)?16:10))}
function repeat(string,n){var result="";string=baseToString(string);n=+n;if(n<1||!string||!nativeIsFinite(n)){return result}do{if(n%2){
result+=string}n=nativeFloor(n/2);string+=string}while(n);return result}var snakeCase=createCompounder(function(result,word,index){
return result+(index?"_":"")+word.toLowerCase()});var startCase=createCompounder(function(result,word,index){return result+(index?" ":"")+(word.charAt(0).toUpperCase()+word.slice(1));
});function startsWith(string,target,position){string=baseToString(string);position=position==null?0:nativeMin(position<0?0:+position||0,string.length);
return string.lastIndexOf(target,position)==position}function template(string,options,otherOptions){var settings=lodash.templateSettings;
if(otherOptions&&isIterateeCall(string,options,otherOptions)){options=otherOptions=undefined}string=baseToString(string);options=assignWith(baseAssign({},otherOptions||options),settings,assignOwnDefaults);
var imports=assignWith(baseAssign({},options.imports),settings.imports,assignOwnDefaults),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);
var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";var reDelimiters=RegExp((options.escape||reNoMatch).source+"|"+interpolate.source+"|"+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+"|"+(options.evaluate||reNoMatch).source+"|$","g");
var sourceURL="//# sourceURL="+("sourceURL"in options?options.sourceURL:"lodash.templateSources["+ ++templateCounter+"]")+"\n";string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){
interpolateValue||(interpolateValue=esTemplateValue);source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);
if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'"}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";
}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'"}index=offset+match.length;return match;
});source+="';\n";var variable=options.variable;if(!variable){source="with (obj) {\n"+source+"\n}\n"}source=(isEvaluating?source.replace(reEmptyStringLeading,""):source).replace(reEmptyStringMiddle,"$1").replace(reEmptyStringTrailing,"$1;");
source="function("+(variable||"obj")+") {\n"+(variable?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(isEscaping?", __e = _.escape":"")+(isEvaluating?", __j = Array.prototype.join;\n"+"function print() { __p += __j.call(arguments, '') }\n":";\n")+source+"return __p\n}";
var result=attempt(function(){return Function(importsKeys,sourceURL+"return "+source).apply(undefined,importsValues)});result.source=source;
if(isError(result)){throw result}return result}function trim(string,chars,guard){var value=string;string=baseToString(string);if(!string){
return string}if(guard?isIterateeCall(value,chars,guard):chars==null){return string.slice(trimmedLeftIndex(string),trimmedRightIndex(string)+1);
}chars=chars+"";return string.slice(charsLeftIndex(string,chars),charsRightIndex(string,chars)+1)}function trimLeft(string,chars,guard){
var value=string;string=baseToString(string);if(!string){return string}if(guard?isIterateeCall(value,chars,guard):chars==null){return string.slice(trimmedLeftIndex(string));
}return string.slice(charsLeftIndex(string,chars+""))}function trimRight(string,chars,guard){var value=string;string=baseToString(string);
if(!string){return string}if(guard?isIterateeCall(value,chars,guard):chars==null){return string.slice(0,trimmedRightIndex(string)+1);
}return string.slice(0,charsRightIndex(string,chars+"")+1)}function trunc(string,options,guard){if(guard&&isIterateeCall(string,options,guard)){
options=undefined}var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(options!=null){if(isObject(options)){var separator="separator"in options?options.separator:separator;
length="length"in options?+options.length||0:length;omission="omission"in options?baseToString(options.omission):omission}else{length=+options||0;
}}string=baseToString(string);if(length>=string.length){return string}var end=length-omission.length;if(end<1){return omission}var result=string.slice(0,end);
if(separator==null){return result+omission}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,newEnd,substring=string.slice(0,end);
if(!separator.global){separator=RegExp(separator.source,(reFlags.exec(separator)||"")+"g")}separator.lastIndex=0;while(match=separator.exec(substring)){
newEnd=match.index}result=result.slice(0,newEnd==null?end:newEnd)}}else if(string.indexOf(separator,end)!=end){var index=result.lastIndexOf(separator);
if(index>-1){result=result.slice(0,index)}}return result+omission}function unescape(string){string=baseToString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string;
}function words(string,pattern,guard){if(guard&&isIterateeCall(string,pattern,guard)){pattern=undefined}string=baseToString(string);
return string.match(pattern||reWords)||[]}var attempt=restParam(function(func,args){try{return func.apply(undefined,args)}catch(e){
return isError(e)?e:new Error(e)}});function callback(func,thisArg,guard){if(guard&&isIterateeCall(func,thisArg,guard)){thisArg=undefined;
}return isObjectLike(func)?matches(func):baseCallback(func,thisArg)}function constant(value){return function(){return value}}function identity(value){
return value}function matches(source){return baseMatches(baseClone(source,true))}function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,true));
}var method=restParam(function(path,args){return function(object){return invokePath(object,path,args)}});var methodOf=restParam(function(object,args){
return function(path){return invokePath(object,path,args)}});function mixin(object,source,options){if(options==null){var isObj=isObject(source),props=isObj?keys(source):undefined,methodNames=props&&props.length?baseFunctions(source,props):undefined;
if(!(methodNames?methodNames.length:isObj)){methodNames=false;options=source;source=object;object=this}}if(!methodNames){methodNames=baseFunctions(source,keys(source));
}var chain=true,index=-1,isFunc=isFunction(object),length=methodNames.length;if(options===false){chain=false}else if(isObject(options)&&"chain"in options){
chain=options.chain}while(++index<length){var methodName=methodNames[index],func=source[methodName];object[methodName]=func;if(isFunc){
object.prototype[methodName]=function(func){return function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=arrayCopy(this.__actions__);
actions.push({func:func,args:arguments,thisArg:object});result.__chain__=chainAll;return result}return func.apply(object,arrayPush([this.value()],arguments));
}}(func)}}return object}function noConflict(){root._=oldDash;return this}function noop(){}function property(path){return isKey(path)?baseProperty(path):basePropertyDeep(path);
}function propertyOf(object){return function(path){return baseGet(object,toPath(path),path+"")}}function range(start,end,step){if(step&&isIterateeCall(start,end,step)){
end=step=undefined}start=+start||0;step=step==null?1:+step||0;if(end==null){end=start;start=0}else{end=+end||0}var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);
while(++index<length){result[index]=start;start+=step}return result}function times(n,iteratee,thisArg){n=nativeFloor(n);if(n<1||!nativeIsFinite(n)){
return[]}var index=-1,result=Array(nativeMin(n,MAX_ARRAY_LENGTH));iteratee=bindCallback(iteratee,thisArg,1);while(++index<n){if(index<MAX_ARRAY_LENGTH){
result[index]=iteratee(index)}else{iteratee(index)}}return result}function uniqueId(prefix){var id=++idCounter;return baseToString(prefix)+id;
}function add(augend,addend){return(+augend||0)+(+addend||0)}var ceil=createRound("ceil");var floor=createRound("floor");var max=createExtremum(gt,NEGATIVE_INFINITY);
var min=createExtremum(lt,POSITIVE_INFINITY);var round=createRound("round");function sum(collection,iteratee,thisArg){if(thisArg&&isIterateeCall(collection,iteratee,thisArg)){
iteratee=undefined}iteratee=getCallback(iteratee,thisArg,3);return iteratee.length==1?arraySum(isArray(collection)?collection:toIterable(collection),iteratee):baseSum(collection,iteratee);
}lodash.prototype=baseLodash.prototype;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;MapCache.prototype["delete"]=mapDelete;
MapCache.prototype.get=mapGet;MapCache.prototype.has=mapHas;MapCache.prototype.set=mapSet;SetCache.prototype.push=cachePush;memoize.Cache=MapCache;
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;
lodash.callback=callback;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.constant=constant;lodash.countBy=countBy;
lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;
lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;
lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flow=flow;
lodash.flowRight=flowRight;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;
lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.functions=functions;lodash.groupBy=groupBy;lodash.indexBy=indexBy;lodash.initial=initial;
lodash.intersection=intersection;lodash.invert=invert;lodash.invoke=invoke;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;
lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;
lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.modArgs=modArgs;lodash.negate=negate;lodash.omit=omit;lodash.once=once;
lodash.pairs=pairs;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pluck=pluck;
lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAt=pullAt;lodash.range=range;lodash.rearg=rearg;
lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.restParam=restParam;lodash.set=set;lodash.shuffle=shuffle;lodash.slice=slice;
lodash.sortBy=sortBy;lodash.sortByAll=sortByAll;lodash.sortByOrder=sortByOrder;lodash.spread=spread;lodash.take=take;lodash.takeRight=takeRight;
lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.times=times;
lodash.toArray=toArray;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.union=union;lodash.uniq=uniq;lodash.unzip=unzip;
lodash.unzipWith=unzipWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.where=where;lodash.without=without;lodash.wrap=wrap;
lodash.xor=xor;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipWith=zipWith;lodash.backflow=flowRight;lodash.collect=map;lodash.compose=flowRight;
lodash.each=forEach;lodash.eachRight=forEachRight;lodash.extend=assign;lodash.iteratee=callback;lodash.methods=functions;lodash.object=zipObject;
lodash.select=filter;lodash.tail=rest;lodash.unique=uniq;mixin(lodash,lodash);lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;
lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.deburr=deburr;lodash.endsWith=endsWith;
lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;
lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.findWhere=findWhere;lodash.first=first;
lodash.floor=floor;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;
lodash.inRange=inRange;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isBoolean=isBoolean;lodash.isDate=isDate;lodash.isElement=isElement;
lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isMatch=isMatch;
lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isPlainObject=isPlainObject;
lodash.isRegExp=isRegExp;lodash.isString=isString;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.kebabCase=kebabCase;
lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.min=min;lodash.noConflict=noConflict;
lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padLeft=padLeft;lodash.padRight=padRight;lodash.parseInt=parseInt;lodash.random=random;
lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;
lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedLastIndex=sortedLastIndex;
lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.sum=sum;lodash.template=template;lodash.trim=trim;lodash.trimLeft=trimLeft;
lodash.trimRight=trimRight;lodash.trunc=trunc;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.words=words;lodash.all=every;
lodash.any=some;lodash.contains=includes;lodash.eq=isEqual;lodash.detect=find;lodash.foldl=reduce;lodash.foldr=reduceRight;lodash.head=first;
lodash.include=includes;lodash.inject=reduce;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!lodash.prototype[methodName]){
source[methodName]=func}});return source}(),false);lodash.sample=sample;lodash.prototype.sample=function(n){if(!this.__chain__&&n==null){
return sample(this.value())}return this.thru(function(value){return sample(value,n)})};lodash.VERSION=VERSION;arrayEach(["bind","bindKey","curry","curryRight","partial","partialRight"],function(methodName){
lodash[methodName].placeholder=lodash});arrayEach(["drop","take"],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){
var filtered=this.__filtered__;if(filtered&&!index){return new LazyWrapper(this)}n=n==null?1:nativeMax(nativeFloor(n)||0,0);var result=this.clone();
if(filtered){result.__takeCount__=nativeMin(result.__takeCount__,n)}else{result.__views__.push({size:n,type:methodName+(result.__dir__<0?"Right":"")
})}return result};LazyWrapper.prototype[methodName+"Right"]=function(n){return this.reverse()[methodName](n).reverse()}});arrayEach(["filter","map","takeWhile"],function(methodName,index){
var type=index+1,isFilter=type!=LAZY_MAP_FLAG;LazyWrapper.prototype[methodName]=function(iteratee,thisArg){var result=this.clone();
result.__iteratees__.push({iteratee:getCallback(iteratee,thisArg,1),type:type});result.__filtered__=result.__filtered__||isFilter;
return result}});arrayEach(["first","last"],function(methodName,index){var takeName="take"+(index?"Right":"");LazyWrapper.prototype[methodName]=function(){
return this[takeName](1).value()[0]}});arrayEach(["initial","rest"],function(methodName,index){var dropName="drop"+(index?"":"Right");
LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1)}});arrayEach(["pluck","where"],function(methodName,index){
var operationName=index?"filter":"map",createCallback=index?baseMatches:property;LazyWrapper.prototype[methodName]=function(value){
return this[operationName](createCallback(value))}});LazyWrapper.prototype.compact=function(){return this.filter(identity)};LazyWrapper.prototype.reject=function(predicate,thisArg){
predicate=getCallback(predicate,thisArg,1);return this.filter(function(value){return!predicate(value)})};LazyWrapper.prototype.slice=function(start,end){
start=start==null?0:+start||0;var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result)}if(start<0){
result=result.takeRight(-start)}else if(start){result=result.drop(start)}if(end!==undefined){end=+end||0;result=end<0?result.dropRight(-end):result.take(end-start);
}return result};LazyWrapper.prototype.takeRightWhile=function(predicate,thisArg){return this.reverse().takeWhile(predicate,thisArg).reverse();
};LazyWrapper.prototype.toArray=function(){return this.take(POSITIVE_INFINITY)};baseForOwn(LazyWrapper.prototype,function(func,methodName){
var checkIteratee=/^(?:filter|map|reject)|While$/.test(methodName),retUnwrapped=/^(?:first|last)$/.test(methodName),lodashFunc=lodash[retUnwrapped?"take"+(methodName=="last"?"Right":""):methodName];
if(!lodashFunc){return}lodash.prototype[methodName]=function(){var args=retUnwrapped?[1]:arguments,chainAll=this.__chain__,value=this.__wrapped__,isHybrid=!!this.__actions__.length,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);
if(useLazy&&checkIteratee&&typeof iteratee=="function"&&iteratee.length!=1){isLazy=useLazy=false}var interceptor=function(value){
return retUnwrapped&&chainAll?lodashFunc(value,1)[0]:lodashFunc.apply(undefined,arrayPush([value],args))};var action={func:thru,args:[interceptor],
thisArg:undefined},onlyLazy=isLazy&&!isHybrid;if(retUnwrapped&&!chainAll){if(onlyLazy){value=value.clone();value.__actions__.push(action);
return func.call(value)}return lodashFunc.call(undefined,this.value())[0]}if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);
var result=func.apply(value,args);result.__actions__.push(action);return new LodashWrapper(result,chainAll)}return this.thru(interceptor);
}});arrayEach(["join","pop","push","replace","shift","sort","splice","split","unshift"],function(methodName){var func=(/^(?:replace|split)$/.test(methodName)?stringProto:arrayProto)[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?"tap":"thru",retUnwrapped=/^(?:join|pop|replace|shift)$/.test(methodName);
lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){return func.apply(this.value(),args);
}return this[chainName](function(value){return func.apply(value,args)})}});baseForOwn(LazyWrapper.prototype,function(func,methodName){
var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name,names=realNames[key]||(realNames[key]=[]);names.push({name:methodName,
func:lodashFunc})}});realNames[createHybridWrapper(undefined,BIND_KEY_FLAG).name]=[{name:"wrapper",func:undefined}];LazyWrapper.prototype.clone=lazyClone;
LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;
lodash.prototype.concat=wrapperConcat;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toString=wrapperToString;
lodash.prototype.run=lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;lodash.prototype.collect=lodash.prototype.map;
lodash.prototype.head=lodash.prototype.first;lodash.prototype.select=lodash.prototype.filter;lodash.prototype.tail=lodash.prototype.rest;
return lodash}var _=runInContext();if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){root._=_;define(function(){
return _})}else if(freeExports&&freeModule){if(moduleExports){(freeModule.exports=_)._=_}else{freeExports._=_}}else{root._=_}}).call(this);
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory():typeof define==="function"&&define.amd?define(factory):global.moment=factory();
})(this,function(){"use strict";var hookCallback;function utils_hooks__hooks(){return hookCallback.apply(null,arguments)}function setHookCallback(callback){
hookCallback=callback}function isArray(input){return Object.prototype.toString.call(input)==="[object Array]"}function isDate(input){
return input instanceof Date||Object.prototype.toString.call(input)==="[object Date]"}function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){
res.push(fn(arr[i],i))}return res}function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function extend(a,b){
for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i]}}if(hasOwnProp(b,"toString")){a.toString=b.toString}if(hasOwnProp(b,"valueOf")){a.valueOf=b.valueOf;
}return a}function create_utc__createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,true).utc();
}function defaultParsingFlags(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,
invalidFormat:false,userInvalidated:false,iso:false}}function getParsingFlags(m){if(m._pf==null){m._pf=defaultParsingFlags()}return m._pf;
}function valid__isValid(m){if(m._isValid==null){var flags=getParsingFlags(m);m._isValid=!isNaN(m._d.getTime())&&flags.overflow<0&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated;
if(m._strict){m._isValid=m._isValid&&flags.charsLeftOver===0&&flags.unusedTokens.length===0&&flags.bigHour===undefined}}return m._isValid;
}function valid__createInvalid(flags){var m=create_utc__createUTC(NaN);if(flags!=null){extend(getParsingFlags(m),flags)}else{getParsingFlags(m).userInvalidated=true;
}return m}var momentProperties=utils_hooks__hooks.momentProperties=[];function copyConfig(to,from){var i,prop,val;if(typeof from._isAMomentObject!=="undefined"){
to._isAMomentObject=from._isAMomentObject}if(typeof from._i!=="undefined"){to._i=from._i}if(typeof from._f!=="undefined"){to._f=from._f;
}if(typeof from._l!=="undefined"){to._l=from._l}if(typeof from._strict!=="undefined"){to._strict=from._strict}if(typeof from._tzm!=="undefined"){
to._tzm=from._tzm}if(typeof from._isUTC!=="undefined"){to._isUTC=from._isUTC}if(typeof from._offset!=="undefined"){to._offset=from._offset;
}if(typeof from._pf!=="undefined"){to._pf=getParsingFlags(from)}if(typeof from._locale!=="undefined"){to._locale=from._locale}if(momentProperties.length>0){
for(i in momentProperties){prop=momentProperties[i];val=from[prop];if(typeof val!=="undefined"){to[prop]=val}}}return to}var updateInProgress=false;
function Moment(config){copyConfig(this,config);this._d=new Date(config._d!=null?config._d.getTime():NaN);if(updateInProgress===false){
updateInProgress=true;utils_hooks__hooks.updateOffset(this);updateInProgress=false}}function isMoment(obj){return obj instanceof Moment||obj!=null&&obj._isAMomentObject!=null;
}function absFloor(number){if(number<0){return Math.ceil(number)}else{return Math.floor(number)}}function toInt(argumentForCoercion){
var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){value=absFloor(coercedNumber)}return value;
}function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;
for(i=0;i<len;i++){if(dontConvert&&array1[i]!==array2[i]||!dontConvert&&toInt(array1[i])!==toInt(array2[i])){diffs++}}return diffs+lengthDiff;
}function Locale(){}var locales={};var globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace("_","-"):key;
}function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split("-");j=split.length;
next=normalizeLocale(names[i+1]);next=next?next.split("-"):null;while(j>0){locale=loadLocale(split.slice(0,j).join("-"));if(locale){
return locale}if(next&&next.length>=j&&compareArrays(split,next,true)>=j-1){break}j--}i++}return null}function loadLocale(name){var oldLocale=null;
if(!locales[name]&&typeof module!=="undefined"&&module&&module.exports){try{oldLocale=globalLocale._abbr;require("./locale/"+name);
locale_locales__getSetGlobalLocale(oldLocale)}catch(e){}}return locales[name]}function locale_locales__getSetGlobalLocale(key,values){
var data;if(key){if(typeof values==="undefined"){data=locale_locales__getLocale(key)}else{data=defineLocale(key,values)}if(data){
globalLocale=data}}return globalLocale._abbr}function defineLocale(name,values){if(values!==null){values.abbr=name;locales[name]=locales[name]||new Locale;
locales[name].set(values);locale_locales__getSetGlobalLocale(name);return locales[name]}else{delete locales[name];return null}}function locale_locales__getLocale(key){
var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr}if(!key){return globalLocale}if(!isArray(key)){locale=loadLocale(key);
if(locale){return locale}key=[key]}return chooseLocale(key)}var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();
aliases[lowerCase]=aliases[lowerCase+"s"]=aliases[shorthand]=unit}function normalizeUnits(units){return typeof units==="string"?aliases[units]||aliases[units.toLowerCase()]:undefined;
}function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){
normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop]}}}return normalizedInput;
}function makeGetSet(unit,keepTime){return function(value){if(value!=null){get_set__set(this,unit,value);utils_hooks__hooks.updateOffset(this,keepTime);
return this}else{return get_set__get(this,unit)}}}function get_set__get(mom,unit){return mom._d["get"+(mom._isUTC?"UTC":"")+unit]();
}function get_set__set(mom,unit,value){return mom._d["set"+(mom._isUTC?"UTC":"")+unit](value)}function getSet(units,value){var unit;
if(typeof units==="object"){for(unit in units){this.set(unit,units[unit])}}else{units=normalizeUnits(units);if(typeof this[units]==="function"){
return this[units](value)}}return this}function zeroFill(number,targetLength,forceSign){var absNumber=""+Math.abs(number),zerosToFill=targetLength-absNumber.length,sign=number>=0;
return(sign?forceSign?"+":"":"-")+Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber}var formattingTokens=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions={};var formatTokenFunctions={};function addFormatToken(token,padded,ordinal,callback){
var func=callback;if(typeof callback==="string"){func=function(){return this[callback]()}}if(token){formatTokenFunctions[token]=func;
}if(padded){formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2])}}if(ordinal){
formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token)}}}function removeFormattingTokens(input){
if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,"")}return input.replace(/\\/g,"")}function makeFormatFunction(format){
var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]];
}else{array[i]=removeFormattingTokens(array[i])}}return function(mom){var output="";for(i=0;i<length;i++){output+=array[i]instanceof Function?array[i].call(mom,format):array[i];
}return output}}function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate()}format=expandFormat(format,m.localeData());
formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](m)}function expandFormat(format,locale){
var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input}localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){
format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1}return format}var match1=/\d/;
var match2=/\d\d/;var match3=/\d{3}/;var match4=/\d{4}/;var match6=/[+-]?\d{6}/;var match1to2=/\d\d?/;var match1to3=/\d{1,3}/;var match1to4=/\d{1,4}/;
var match1to6=/[+-]?\d{1,6}/;var matchUnsigned=/\d+/;var matchSigned=/[+-]?\d+/;var matchOffset=/Z|[+-]\d\d:?\d\d/gi;var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;
var matchWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;var regexes={};
function isFunction(sth){return typeof sth==="function"&&Object.prototype.toString.call(sth)==="[object Function]"}function addRegexToken(token,regex,strictRegex){
regexes[token]=isFunction(regex)?regex:function(isStrict){return isStrict&&strictRegex?strictRegex:regex}}function getParseRegexForToken(token,config){
if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token))}return regexes[token](config._strict,config._locale)}function unescapeFormat(s){
return s.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");
}var tokens={};function addParseToken(token,callback){var i,func=callback;if(typeof token==="string"){token=[token]}if(typeof callback==="number"){
func=function(input,array){array[callback]=toInt(input)}}for(i=0;i<token.length;i++){tokens[token[i]]=func}}function addWeekParseToken(token,callback){
addParseToken(token,function(input,array,config,token){config._w=config._w||{};callback(input,config._w,config,token)})}function addTimeToArrayFromToken(token,input,config){
if(input!=null&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token)}}var YEAR=0;var MONTH=1;var DATE=2;var HOUR=3;
var MINUTE=4;var SECOND=5;var MILLISECOND=6;function daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate();
}addFormatToken("M",["MM",2],"Mo",function(){return this.month()+1});addFormatToken("MMM",0,0,function(format){return this.localeData().monthsShort(this,format);
});addFormatToken("MMMM",0,0,function(format){return this.localeData().months(this,format)});addUnitAlias("month","M");addRegexToken("M",match1to2);
addRegexToken("MM",match1to2,match2);addRegexToken("MMM",matchWord);addRegexToken("MMMM",matchWord);addParseToken(["M","MM"],function(input,array){
array[MONTH]=toInt(input)-1});addParseToken(["MMM","MMMM"],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);
if(month!=null){array[MONTH]=month}else{getParsingFlags(config).invalidMonth=input}});var defaultLocaleMonths="January_February_March_April_May_June_July_August_September_October_November_December".split("_");
function localeMonths(m){return this._months[m.month()]}var defaultLocaleMonthsShort="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function localeMonthsShort(m){return this._monthsShort[m.month()]}function localeMonthsParse(monthName,format,strict){var i,mom,regex;
if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[]}for(i=0;i<12;i++){mom=create_utc__createUTC([2e3,i]);
if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp("^"+this.months(mom,"").replace(".","")+"$","i");this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(mom,"").replace(".","")+"$","i");
}if(!strict&&!this._monthsParse[i]){regex="^"+this.months(mom,"")+"|^"+this.monthsShort(mom,"");this._monthsParse[i]=new RegExp(regex.replace(".",""),"i");
}if(strict&&format==="MMMM"&&this._longMonthsParse[i].test(monthName)){return i}else if(strict&&format==="MMM"&&this._shortMonthsParse[i].test(monthName)){
return i}else if(!strict&&this._monthsParse[i].test(monthName)){return i}}}function setMonth(mom,value){var dayOfMonth;if(typeof value==="string"){
value=mom.localeData().monthsParse(value);if(typeof value!=="number"){return mom}}dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value));
mom._d["set"+(mom._isUTC?"UTC":"")+"Month"](value,dayOfMonth);return mom}function getSetMonth(value){if(value!=null){setMonth(this,value);
utils_hooks__hooks.updateOffset(this,true);return this}else{return get_set__get(this,"Month")}}function getDaysInMonth(){return daysInMonth(this.year(),this.month());
}function checkOverflow(m){var overflow;var a=m._a;if(a&&getParsingFlags(m).overflow===-2){overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||a[HOUR]===24&&(a[MINUTE]!==0||a[SECOND]!==0||a[MILLISECOND]!==0)?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1;
if(getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE}getParsingFlags(m).overflow=overflow}return m;
}function warn(msg){if(utils_hooks__hooks.suppressDeprecationWarnings===false&&typeof console!=="undefined"&&console.warn){console.warn("Deprecation warning: "+msg);
}}function deprecate(msg,fn){var firstTime=true;return extend(function(){if(firstTime){warn(msg+"\n"+(new Error).stack);firstTime=false;
}return fn.apply(this,arguments)},fn)}var deprecations={};function deprecateSimple(name,msg){if(!deprecations[name]){warn(msg);deprecations[name]=true;
}}utils_hooks__hooks.suppressDeprecationWarnings=false;var from_string__isoRegex=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var isoDates=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]];
var isoTimes=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]];
var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i;function configFromISO(config){var i,l,string=config._i,match=from_string__isoRegex.exec(string);
if(match){getParsingFlags(config).iso=true;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(string)){config._f=isoDates[i][0];
break}}for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(string)){config._f+=(match[6]||" ")+isoTimes[i][0];break}}if(string.match(matchOffset)){
config._f+="Z"}configFromStringAndFormat(config)}else{config._isValid=false}}function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);
if(matched!==null){config._d=new Date((+matched[1]));return}configFromISO(config);if(config._isValid===false){delete config._isValid;
utils_hooks__hooks.createFromInputFallback(config)}}utils_hooks__hooks.createFromInputFallback=deprecate("moment construction falls back to js Date. This is "+"discouraged and will be removed in upcoming major "+"release. Please refer to "+"https://github.com/moment/moment/issues/1407 for more info.",function(config){
config._d=new Date(config._i+(config._useUTC?" UTC":""))});function createDate(y,m,d,h,M,s,ms){var date=new Date(y,m,d,h,M,s,ms);if(y<1970){
date.setFullYear(y)}return date}function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(y<1970){date.setUTCFullYear(y);
}return date}addFormatToken(0,["YY",2],0,function(){return this.year()%100});addFormatToken(0,["YYYY",4],0,"year");addFormatToken(0,["YYYYY",5],0,"year");
addFormatToken(0,["YYYYYY",6,true],0,"year");addUnitAlias("year","y");addRegexToken("Y",matchSigned);addRegexToken("YY",match1to2,match2);
addRegexToken("YYYY",match1to4,match4);addRegexToken("YYYYY",match1to6,match6);addRegexToken("YYYYYY",match1to6,match6);addParseToken(["YYYYY","YYYYYY"],YEAR);
addParseToken("YYYY",function(input,array){array[YEAR]=input.length===2?utils_hooks__hooks.parseTwoDigitYear(input):toInt(input)});
addParseToken("YY",function(input,array){array[YEAR]=utils_hooks__hooks.parseTwoDigitYear(input)});function daysInYear(year){return isLeapYear(year)?366:365;
}function isLeapYear(year){return year%4===0&&year%100!==0||year%400===0}utils_hooks__hooks.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2e3);
};var getSetYear=makeGetSet("FullYear",false);function getIsLeapYear(){return isLeapYear(this.year())}addFormatToken("w",["ww",2],"wo","week");
addFormatToken("W",["WW",2],"Wo","isoWeek");addUnitAlias("week","w");addUnitAlias("isoWeek","W");addRegexToken("w",match1to2);addRegexToken("ww",match1to2,match2);
addRegexToken("W",match1to2);addRegexToken("WW",match1to2,match2);addWeekParseToken(["w","ww","W","WW"],function(input,week,config,token){
week[token.substr(0,1)]=toInt(input)});function weekOfYear(mom,firstDayOfWeek,firstDayOfWeekOfYear){var end=firstDayOfWeekOfYear-firstDayOfWeek,daysToDayOfWeek=firstDayOfWeekOfYear-mom.day(),adjustedMoment;
if(daysToDayOfWeek>end){daysToDayOfWeek-=7}if(daysToDayOfWeek<end-7){daysToDayOfWeek+=7}adjustedMoment=local__createLocal(mom).add(daysToDayOfWeek,"d");
return{week:Math.ceil(adjustedMoment.dayOfYear()/7),year:adjustedMoment.year()}}function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;
}var defaultLocaleWeek={dow:0,doy:6};function localeFirstDayOfWeek(){return this._week.dow}function localeFirstDayOfYear(){return this._week.doy;
}function getSetWeek(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,"d")}function getSetISOWeek(input){
var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,"d")}addFormatToken("DDD",["DDDD",3],"DDDo","dayOfYear");
addUnitAlias("dayOfYear","DDD");addRegexToken("DDD",match1to3);addRegexToken("DDDD",match3);addParseToken(["DDD","DDDD"],function(input,array,config){
config._dayOfYear=toInt(input)});function dayOfYearFromWeeks(year,week,weekday,firstDayOfWeekOfYear,firstDayOfWeek){var week1Jan=6+firstDayOfWeek-firstDayOfWeekOfYear,janX=createUTCDate(year,0,1+week1Jan),d=janX.getUTCDay(),dayOfYear;
if(d<firstDayOfWeek){d+=7}weekday=weekday!=null?1*weekday:firstDayOfWeek;dayOfYear=1+week1Jan+7*(week-1)-d+weekday;return{year:dayOfYear>0?year:year-1,
dayOfYear:dayOfYear>0?dayOfYear:daysInYear(year-1)+dayOfYear}}function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;
return input==null?dayOfYear:this.add(input-dayOfYear,"d")}function defaults(a,b,c){if(a!=null){return a}if(b!=null){return b}return c;
}function currentDateArray(config){var now=new Date;if(config._useUTC){return[now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()];
}return[now.getFullYear(),now.getMonth(),now.getDate()]}function configFromArray(config){var i,date,input=[],currentDate,yearToUse;
if(config._d){return}currentDate=currentDateArray(config);if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config);
}if(config._dayOfYear){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)){getParsingFlags(config)._overflowDayOfYear=true;
}date=createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate()}for(i=0;i<3&&config._a[i]==null;++i){
config._a[i]=input[i]=currentDate[i]}for(;i<7;i++){config._a[i]=input[i]=config._a[i]==null?i===2?1:0:config._a[i]}if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){
config._nextDay=true;config._a[HOUR]=0}config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);if(config._tzm!=null){
config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm)}if(config._nextDay){config._a[HOUR]=24}}function dayOfYearFromWeekInfo(config){
var w,weekYear,week,weekday,dow,doy,temp;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(local__createLocal(),1,4).year);
week=defaults(w.W,1);weekday=defaults(w.E,1)}else{dow=config._locale._week.dow;doy=config._locale._week.doy;weekYear=defaults(w.gg,config._a[YEAR],weekOfYear(local__createLocal(),dow,doy).year);
week=defaults(w.w,1);if(w.d!=null){weekday=w.d;if(weekday<dow){++week}}else if(w.e!=null){weekday=w.e+dow}else{weekday=dow}}temp=dayOfYearFromWeeks(weekYear,week,weekday,doy,dow);
config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear}utils_hooks__hooks.ISO_8601=function(){};function configFromStringAndFormat(config){
if(config._f===utils_hooks__hooks.ISO_8601){configFromISO(config);return}config._a=[];getParsingFlags(config).empty=true;var string=""+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;
tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];
if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){getParsingFlags(config).unusedInput.push(skipped);
}string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length}if(formatTokenFunctions[token]){
if(parsedInput){getParsingFlags(config).empty=false}else{getParsingFlags(config).unusedTokens.push(token)}addTimeToArrayFromToken(token,parsedInput,config);
}else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token)}}getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength;
if(string.length>0){getParsingFlags(config).unusedInput.push(string)}if(getParsingFlags(config).bigHour===true&&config._a[HOUR]<=12&&config._a[HOUR]>0){
getParsingFlags(config).bigHour=undefined}config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);
checkOverflow(config)}function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem==null){return hour}if(locale.meridiemHour!=null){
return locale.meridiemHour(hour,meridiem)}else if(locale.isPM!=null){isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12}if(!isPm&&hour===12){
hour=0}return hour}else{return hour}}function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;
if(config._f.length===0){getParsingFlags(config).invalidFormat=true;config._d=new Date(NaN);return}for(i=0;i<config._f.length;i++){
currentScore=0;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC}tempConfig._f=config._f[i];
configFromStringAndFormat(tempConfig);if(!valid__isValid(tempConfig)){continue}currentScore+=getParsingFlags(tempConfig).charsLeftOver;
currentScore+=getParsingFlags(tempConfig).unusedTokens.length*10;getParsingFlags(tempConfig).score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){
scoreToBeat=currentScore;bestMoment=tempConfig}}extend(config,bestMoment||tempConfig)}function configFromObject(config){if(config._d){
return}var i=normalizeObjectUnits(config._i);config._a=[i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond];configFromArray(config);
}function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){res.add(1,"d");res._nextDay=undefined;
}return res}function prepareConfig(config){var input=config._i,format=config._f;config._locale=config._locale||locale_locales__getLocale(config._l);
if(input===null||format===undefined&&input===""){return valid__createInvalid({nullInput:true})}if(typeof input==="string"){config._i=input=config._locale.preparse(input);
}if(isMoment(input)){return new Moment(checkOverflow(input))}else if(isArray(format)){configFromStringAndArray(config)}else if(format){
configFromStringAndFormat(config)}else if(isDate(input)){config._d=input}else{configFromInput(config)}return config}function configFromInput(config){
var input=config._i;if(input===undefined){config._d=new Date}else if(isDate(input)){config._d=new Date((+input))}else if(typeof input==="string"){
configFromString(config)}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10)});configFromArray(config);
}else if(typeof input==="object"){configFromObject(config)}else if(typeof input==="number"){config._d=new Date(input)}else{utils_hooks__hooks.createFromInputFallback(config);
}}function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(typeof locale==="boolean"){strict=locale;locale=undefined;
}c._isAMomentObject=true;c._useUTC=c._isUTC=isUTC;c._l=locale;c._i=input;c._f=format;c._strict=strict;return createFromConfig(c)}
function local__createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,false)}var prototypeMin=deprecate("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){
var other=local__createLocal.apply(null,arguments);return other<this?this:other});var prototypeMax=deprecate("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){
var other=local__createLocal.apply(null,arguments);return other>this?this:other});function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){
moments=moments[0]}if(!moments.length){return local__createLocal()}res=moments[0];for(i=1;i<moments.length;++i){if(!moments[i].isValid()||moments[i][fn](res)){
res=moments[i]}}return res}function min(){var args=[].slice.call(arguments,0);return pickBy("isBefore",args)}function max(){var args=[].slice.call(arguments,0);
return pickBy("isAfter",args)}function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;
this._milliseconds=+milliseconds+seconds*1e3+minutes*6e4+hours*36e5;this._days=+days+weeks*7;this._months=+months+quarters*3+years*12;
this._data={};this._locale=locale_locales__getLocale();this._bubble()}function isDuration(obj){return obj instanceof Duration}function offset(token,separator){
addFormatToken(token,0,0,function(){var offset=this.utcOffset();var sign="+";if(offset<0){offset=-offset;sign="-"}return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~offset%60,2);
})}offset("Z",":");offset("ZZ","");addRegexToken("Z",matchOffset);addRegexToken("ZZ",matchOffset);addParseToken(["Z","ZZ"],function(input,array,config){
config._useUTC=true;config._tzm=offsetFromString(input)});var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(string){var matches=(string||"").match(matchOffset)||[];
var chunk=matches[matches.length-1]||[];var parts=(chunk+"").match(chunkOffset)||["-",0,0];var minutes=+(parts[1]*60)+toInt(parts[2]);
return parts[0]==="+"?minutes:-minutes}function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(isMoment(input)||isDate(input)?+input:+local__createLocal(input))-+res;
res._d.setTime(+res._d+diff);utils_hooks__hooks.updateOffset(res,false);return res}else{return local__createLocal(input).local()}
}function getDateOffset(m){return-Math.round(m._d.getTimezoneOffset()/15)*15}utils_hooks__hooks.updateOffset=function(){};function getSetOffset(input,keepLocalTime){
var offset=this._offset||0,localAdjust;if(input!=null){if(typeof input==="string"){input=offsetFromString(input)}if(Math.abs(input)<16){
input=input*60}if(!this._isUTC&&keepLocalTime){localAdjust=getDateOffset(this)}this._offset=input;this._isUTC=true;if(localAdjust!=null){
this.add(localAdjust,"m")}if(offset!==input){if(!keepLocalTime||this._changeInProgress){add_subtract__addSubtract(this,create__createDuration(input-offset,"m"),1,false);
}else if(!this._changeInProgress){this._changeInProgress=true;utils_hooks__hooks.updateOffset(this,true);this._changeInProgress=null;
}}return this}else{return this._isUTC?offset:getDateOffset(this)}}function getSetZone(input,keepLocalTime){if(input!=null){if(typeof input!=="string"){
input=-input}this.utcOffset(input,keepLocalTime);return this}else{return-this.utcOffset()}}function setOffsetToUTC(keepLocalTime){
return this.utcOffset(0,keepLocalTime)}function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=false;
if(keepLocalTime){this.subtract(getDateOffset(this),"m")}}return this}function setOffsetToParsedOffset(){if(this._tzm){this.utcOffset(this._tzm);
}else if(typeof this._i==="string"){this.utcOffset(offsetFromString(this._i))}return this}function hasAlignedHourOffset(input){input=input?local__createLocal(input).utcOffset():0;
return(this.utcOffset()-input)%60===0}function isDaylightSavingTime(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset();
}function isDaylightSavingTimeShifted(){if(typeof this._isDSTShifted!=="undefined"){return this._isDSTShifted}var c={};copyConfig(c,this);
c=prepareConfig(c);if(c._a){var other=c._isUTC?create_utc__createUTC(c._a):local__createLocal(c._a);this._isDSTShifted=this.isValid()&&compareArrays(c._a,other.toArray())>0;
}else{this._isDSTShifted=false}return this._isDSTShifted}function isLocal(){return!this._isUTC}function isUtcOffset(){return this._isUTC;
}function isUtc(){return this._isUTC&&this._offset===0}var aspNetRegex=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;var create__isoRegex=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
function create__createDuration(input,key){var duration=input,match=null,sign,ret,diffRes;if(isDuration(input)){duration={ms:input._milliseconds,
d:input._days,M:input._months}}else if(typeof input==="number"){duration={};if(key){duration[key]=input}else{duration.milliseconds=input;
}}else if(!!(match=aspNetRegex.exec(input))){sign=match[1]==="-"?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,
m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(match[MILLISECOND])*sign}}else if(!!(match=create__isoRegex.exec(input))){
sign=match[1]==="-"?-1:1;duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),d:parseIso(match[4],sign),h:parseIso(match[5],sign),
m:parseIso(match[6],sign),s:parseIso(match[7],sign),w:parseIso(match[8],sign)}}else if(duration==null){duration={}}else if(typeof duration==="object"&&("from"in duration||"to"in duration)){
diffRes=momentsDifference(local__createLocal(duration.from),local__createLocal(duration.to));duration={};duration.ms=diffRes.milliseconds;
duration.M=diffRes.months}ret=new Duration(duration);if(isDuration(input)&&hasOwnProp(input,"_locale")){ret._locale=input._locale;
}return ret}create__createDuration.fn=Duration.prototype;function parseIso(inp,sign){var res=inp&&parseFloat(inp.replace(",","."));
return(isNaN(res)?0:res)*sign}function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months=other.month()-base.month()+(other.year()-base.year())*12;
if(base.clone().add(res.months,"M").isAfter(other)){--res.months}res.milliseconds=+other-+base.clone().add(res.months,"M");return res;
}function momentsDifference(base,other){var res;other=cloneWithOffset(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other);
}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months}return res}function createAdder(direction,name){
return function(val,period){var dur,tmp;if(period!==null&&!isNaN(+period)){deprecateSimple(name,"moment()."+name+"(period, number) is deprecated. Please use moment()."+name+"(number, period).");
tmp=val;val=period;period=tmp}val=typeof val==="string"?+val:val;dur=create__createDuration(val,period);add_subtract__addSubtract(this,dur,direction);
return this}}function add_subtract__addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=duration._days,months=duration._months;
updateOffset=updateOffset==null?true:updateOffset;if(milliseconds){mom._d.setTime(+mom._d+milliseconds*isAdding)}if(days){get_set__set(mom,"Date",get_set__get(mom,"Date")+days*isAdding);
}if(months){setMonth(mom,get_set__get(mom,"Month")+months*isAdding)}if(updateOffset){utils_hooks__hooks.updateOffset(mom,days||months);
}}var add_subtract__add=createAdder(1,"add");var add_subtract__subtract=createAdder(-1,"subtract");function moment_calendar__calendar(time,formats){
var now=time||local__createLocal(),sod=cloneWithOffset(now,this).startOf("day"),diff=this.diff(sod,"days",true),format=diff<-6?"sameElse":diff<-1?"lastWeek":diff<0?"lastDay":diff<1?"sameDay":diff<2?"nextDay":diff<7?"nextWeek":"sameElse";
return this.format(formats&&formats[format]||this.localeData().calendar(format,this,local__createLocal(now)))}function clone(){return new Moment(this);
}function isAfter(input,units){var inputMs;units=normalizeUnits(typeof units!=="undefined"?units:"millisecond");if(units==="millisecond"){
input=isMoment(input)?input:local__createLocal(input);return+this>+input}else{inputMs=isMoment(input)?+input:+local__createLocal(input);
return inputMs<+this.clone().startOf(units)}}function isBefore(input,units){var inputMs;units=normalizeUnits(typeof units!=="undefined"?units:"millisecond");
if(units==="millisecond"){input=isMoment(input)?input:local__createLocal(input);return+this<+input}else{inputMs=isMoment(input)?+input:+local__createLocal(input);
return+this.clone().endOf(units)<inputMs}}function isBetween(from,to,units){return this.isAfter(from,units)&&this.isBefore(to,units);
}function isSame(input,units){var inputMs;units=normalizeUnits(units||"millisecond");if(units==="millisecond"){input=isMoment(input)?input:local__createLocal(input);
return+this===+input}else{inputMs=+local__createLocal(input);return+this.clone().startOf(units)<=inputMs&&inputMs<=+this.clone().endOf(units);
}}function diff(input,units,asFloat){var that=cloneWithOffset(input,this),zoneDelta=(that.utcOffset()-this.utcOffset())*6e4,delta,output;
units=normalizeUnits(units);if(units==="year"||units==="month"||units==="quarter"){output=monthDiff(this,that);if(units==="quarter"){
output=output/3}else if(units==="year"){output=output/12}}else{delta=this-that;output=units==="second"?delta/1e3:units==="minute"?delta/6e4:units==="hour"?delta/36e5:units==="day"?(delta-zoneDelta)/864e5:units==="week"?(delta-zoneDelta)/6048e5:delta;
}return asFloat?output:absFloor(output)}function monthDiff(a,b){var wholeMonthDiff=(b.year()-a.year())*12+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,"months"),anchor2,adjust;
if(b-anchor<0){anchor2=a.clone().add(wholeMonthDiff-1,"months");adjust=(b-anchor)/(anchor-anchor2)}else{anchor2=a.clone().add(wholeMonthDiff+1,"months");
adjust=(b-anchor)/(anchor2-anchor)}return-(wholeMonthDiff+adjust)}utils_hooks__hooks.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";function toString(){
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function moment_format__toISOString(){var m=this.clone().utc();
if(0<m.year()&&m.year()<=9999){if("function"===typeof Date.prototype.toISOString){return this.toDate().toISOString()}else{return formatMoment(m,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
}}else{return formatMoment(m,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}}function format(inputString){var output=formatMoment(this,inputString||utils_hooks__hooks.defaultFormat);
return this.localeData().postformat(output)}function from(time,withoutSuffix){if(!this.isValid()){return this.localeData().invalidDate();
}return create__createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix)}function fromNow(withoutSuffix){
return this.from(local__createLocal(),withoutSuffix)}function to(time,withoutSuffix){if(!this.isValid()){return this.localeData().invalidDate();
}return create__createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix)}function toNow(withoutSuffix){
return this.to(local__createLocal(),withoutSuffix)}function locale(key){var newLocaleData;if(key===undefined){return this._locale._abbr;
}else{newLocaleData=locale_locales__getLocale(key);if(newLocaleData!=null){this._locale=newLocaleData}return this}}var lang=deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(key){
if(key===undefined){return this.localeData()}else{return this.locale(key)}});function localeData(){return this._locale}function startOf(units){
units=normalizeUnits(units);switch(units){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":
case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}if(units==="week"){
this.weekday(0)}if(units==="isoWeek"){this.isoWeekday(1)}if(units==="quarter"){this.month(Math.floor(this.month()/3)*3)}return this;
}function endOf(units){units=normalizeUnits(units);if(units===undefined||units==="millisecond"){return this}return this.startOf(units).add(1,units==="isoWeek"?"week":units).subtract(1,"ms");
}function to_type__valueOf(){return+this._d-(this._offset||0)*6e4}function unix(){return Math.floor(+this/1e3)}function toDate(){
return this._offset?new Date((+this)):this._d}function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];
}function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),
milliseconds:m.milliseconds()}}function moment_valid__isValid(){return valid__isValid(this)}function parsingFlags(){return extend({},getParsingFlags(this));
}function invalidAt(){return getParsingFlags(this).overflow}addFormatToken(0,["gg",2],0,function(){return this.weekYear()%100});addFormatToken(0,["GG",2],0,function(){
return this.isoWeekYear()%100});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter)}addWeekYearFormatToken("gggg","weekYear");
addWeekYearFormatToken("ggggg","weekYear");addWeekYearFormatToken("GGGG","isoWeekYear");addWeekYearFormatToken("GGGGG","isoWeekYear");
addUnitAlias("weekYear","gg");addUnitAlias("isoWeekYear","GG");addRegexToken("G",matchSigned);addRegexToken("g",matchSigned);addRegexToken("GG",match1to2,match2);
addRegexToken("gg",match1to2,match2);addRegexToken("GGGG",match1to4,match4);addRegexToken("gggg",match1to4,match4);addRegexToken("GGGGG",match1to6,match6);
addRegexToken("ggggg",match1to6,match6);addWeekParseToken(["gggg","ggggg","GGGG","GGGGG"],function(input,week,config,token){week[token.substr(0,2)]=toInt(input);
});addWeekParseToken(["gg","GG"],function(input,week,config,token){week[token]=utils_hooks__hooks.parseTwoDigitYear(input)});function weeksInYear(year,dow,doy){
return weekOfYear(local__createLocal([year,11,31+dow-doy]),dow,doy).week}function getSetWeekYear(input){var year=weekOfYear(this,this.localeData()._week.dow,this.localeData()._week.doy).year;
return input==null?year:this.add(input-year,"y")}function getSetISOWeekYear(input){var year=weekOfYear(this,1,4).year;return input==null?year:this.add(input-year,"y");
}function getISOWeeksInYear(){return weeksInYear(this.year(),1,4)}function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);
}addFormatToken("Q",0,0,"quarter");addUnitAlias("quarter","Q");addRegexToken("Q",match1);addParseToken("Q",function(input,array){
array[MONTH]=(toInt(input)-1)*3});function getSetQuarter(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3);
}addFormatToken("D",["DD",2],"Do","date");addUnitAlias("date","D");addRegexToken("D",match1to2);addRegexToken("DD",match1to2,match2);
addRegexToken("Do",function(isStrict,locale){return isStrict?locale._ordinalParse:locale._ordinalParseLenient});addParseToken(["D","DD"],DATE);
addParseToken("Do",function(input,array){array[DATE]=toInt(input.match(match1to2)[0],10)});var getSetDayOfMonth=makeGetSet("Date",true);
addFormatToken("d",0,"do","day");addFormatToken("dd",0,0,function(format){return this.localeData().weekdaysMin(this,format)});addFormatToken("ddd",0,0,function(format){
return this.localeData().weekdaysShort(this,format)});addFormatToken("dddd",0,0,function(format){return this.localeData().weekdays(this,format);
});addFormatToken("e",0,0,"weekday");addFormatToken("E",0,0,"isoWeekday");addUnitAlias("day","d");addUnitAlias("weekday","e");addUnitAlias("isoWeekday","E");
addRegexToken("d",match1to2);addRegexToken("e",match1to2);addRegexToken("E",match1to2);addRegexToken("dd",matchWord);addRegexToken("ddd",matchWord);
addRegexToken("dddd",matchWord);addWeekParseToken(["dd","ddd","dddd"],function(input,week,config){var weekday=config._locale.weekdaysParse(input);
if(weekday!=null){week.d=weekday}else{getParsingFlags(config).invalidWeekday=input}});addWeekParseToken(["d","e","E"],function(input,week,config,token){
week[token]=toInt(input)});function parseWeekday(input,locale){if(typeof input!=="string"){return input}if(!isNaN(input)){return parseInt(input,10);
}input=locale.weekdaysParse(input);if(typeof input==="number"){return input}return null}var defaultLocaleWeekdays="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
function localeWeekdays(m){return this._weekdays[m.day()]}var defaultLocaleWeekdaysShort="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
function localeWeekdaysShort(m){return this._weekdaysShort[m.day()]}var defaultLocaleWeekdaysMin="Su_Mo_Tu_We_Th_Fr_Sa".split("_");
function localeWeekdaysMin(m){return this._weekdaysMin[m.day()]}function localeWeekdaysParse(weekdayName){var i,mom,regex;this._weekdaysParse=this._weekdaysParse||[];
for(i=0;i<7;i++){if(!this._weekdaysParse[i]){mom=local__createLocal([2e3,1]).day(i);regex="^"+this.weekdays(mom,"")+"|^"+this.weekdaysShort(mom,"")+"|^"+this.weekdaysMin(mom,"");
this._weekdaysParse[i]=new RegExp(regex.replace(".",""),"i")}if(this._weekdaysParse[i].test(weekdayName)){return i}}}function getSetDayOfWeek(input){
var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,"d");
}else{return day}}function getSetLocaleDayOfWeek(input){var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,"d");
}function getSetISODayOfWeek(input){return input==null?this.day()||7:this.day(this.day()%7?input:input-7)}addFormatToken("H",["HH",2],0,"hour");
addFormatToken("h",["hh",2],0,function(){return this.hours()%12||12});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){
return this.localeData().meridiem(this.hours(),this.minutes(),lowercase)})}meridiem("a",true);meridiem("A",false);addUnitAlias("hour","h");
function matchMeridiem(isStrict,locale){return locale._meridiemParse}addRegexToken("a",matchMeridiem);addRegexToken("A",matchMeridiem);
addRegexToken("H",match1to2);addRegexToken("h",match1to2);addRegexToken("HH",match1to2,match2);addRegexToken("hh",match1to2,match2);
addParseToken(["H","HH"],HOUR);addParseToken(["a","A"],function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input;
});addParseToken(["h","hh"],function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=true});function localeIsPM(input){
return(input+"").toLowerCase().charAt(0)==="p"}var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem(hours,minutes,isLower){
if(hours>11){return isLower?"pm":"PM"}else{return isLower?"am":"AM"}}var getSetHour=makeGetSet("Hours",true);addFormatToken("m",["mm",2],0,"minute");
addUnitAlias("minute","m");addRegexToken("m",match1to2);addRegexToken("mm",match1to2,match2);addParseToken(["m","mm"],MINUTE);var getSetMinute=makeGetSet("Minutes",false);
addFormatToken("s",["ss",2],0,"second");addUnitAlias("second","s");addRegexToken("s",match1to2);addRegexToken("ss",match1to2,match2);
addParseToken(["s","ss"],SECOND);var getSetSecond=makeGetSet("Seconds",false);addFormatToken("S",0,0,function(){return~~(this.millisecond()/100);
});addFormatToken(0,["SS",2],0,function(){return~~(this.millisecond()/10)});addFormatToken(0,["SSS",3],0,"millisecond");addFormatToken(0,["SSSS",4],0,function(){
return this.millisecond()*10});addFormatToken(0,["SSSSS",5],0,function(){return this.millisecond()*100});addFormatToken(0,["SSSSSS",6],0,function(){
return this.millisecond()*1e3});addFormatToken(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});addFormatToken(0,["SSSSSSSS",8],0,function(){
return this.millisecond()*1e5});addFormatToken(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});addUnitAlias("millisecond","ms");
addRegexToken("S",match1to3,match1);addRegexToken("SS",match1to3,match2);addRegexToken("SSS",match1to3,match3);var token;for(token="SSSS";token.length<=9;token+="S"){
addRegexToken(token,matchUnsigned)}function parseMs(input,array){array[MILLISECOND]=toInt(("0."+input)*1e3)}for(token="S";token.length<=9;token+="S"){
addParseToken(token,parseMs)}var getSetMillisecond=makeGetSet("Milliseconds",false);addFormatToken("z",0,0,"zoneAbbr");addFormatToken("zz",0,0,"zoneName");
function getZoneAbbr(){return this._isUTC?"UTC":""}function getZoneName(){return this._isUTC?"Coordinated Universal Time":""}var momentPrototype__proto=Moment.prototype;
momentPrototype__proto.add=add_subtract__add;momentPrototype__proto.calendar=moment_calendar__calendar;momentPrototype__proto.clone=clone;
momentPrototype__proto.diff=diff;momentPrototype__proto.endOf=endOf;momentPrototype__proto.format=format;momentPrototype__proto.from=from;
momentPrototype__proto.fromNow=fromNow;momentPrototype__proto.to=to;momentPrototype__proto.toNow=toNow;momentPrototype__proto.get=getSet;
momentPrototype__proto.invalidAt=invalidAt;momentPrototype__proto.isAfter=isAfter;momentPrototype__proto.isBefore=isBefore;momentPrototype__proto.isBetween=isBetween;
momentPrototype__proto.isSame=isSame;momentPrototype__proto.isValid=moment_valid__isValid;momentPrototype__proto.lang=lang;momentPrototype__proto.locale=locale;
momentPrototype__proto.localeData=localeData;momentPrototype__proto.max=prototypeMax;momentPrototype__proto.min=prototypeMin;momentPrototype__proto.parsingFlags=parsingFlags;
momentPrototype__proto.set=getSet;momentPrototype__proto.startOf=startOf;momentPrototype__proto.subtract=add_subtract__subtract;momentPrototype__proto.toArray=toArray;
momentPrototype__proto.toObject=toObject;momentPrototype__proto.toDate=toDate;momentPrototype__proto.toISOString=moment_format__toISOString;
momentPrototype__proto.toJSON=moment_format__toISOString;momentPrototype__proto.toString=toString;momentPrototype__proto.unix=unix;
momentPrototype__proto.valueOf=to_type__valueOf;momentPrototype__proto.year=getSetYear;momentPrototype__proto.isLeapYear=getIsLeapYear;
momentPrototype__proto.weekYear=getSetWeekYear;momentPrototype__proto.isoWeekYear=getSetISOWeekYear;momentPrototype__proto.quarter=momentPrototype__proto.quarters=getSetQuarter;
momentPrototype__proto.month=getSetMonth;momentPrototype__proto.daysInMonth=getDaysInMonth;momentPrototype__proto.week=momentPrototype__proto.weeks=getSetWeek;
momentPrototype__proto.isoWeek=momentPrototype__proto.isoWeeks=getSetISOWeek;momentPrototype__proto.weeksInYear=getWeeksInYear;momentPrototype__proto.isoWeeksInYear=getISOWeeksInYear;
momentPrototype__proto.date=getSetDayOfMonth;momentPrototype__proto.day=momentPrototype__proto.days=getSetDayOfWeek;momentPrototype__proto.weekday=getSetLocaleDayOfWeek;
momentPrototype__proto.isoWeekday=getSetISODayOfWeek;momentPrototype__proto.dayOfYear=getSetDayOfYear;momentPrototype__proto.hour=momentPrototype__proto.hours=getSetHour;
momentPrototype__proto.minute=momentPrototype__proto.minutes=getSetMinute;momentPrototype__proto.second=momentPrototype__proto.seconds=getSetSecond;
momentPrototype__proto.millisecond=momentPrototype__proto.milliseconds=getSetMillisecond;momentPrototype__proto.utcOffset=getSetOffset;
momentPrototype__proto.utc=setOffsetToUTC;momentPrototype__proto.local=setOffsetToLocal;momentPrototype__proto.parseZone=setOffsetToParsedOffset;
momentPrototype__proto.hasAlignedHourOffset=hasAlignedHourOffset;momentPrototype__proto.isDST=isDaylightSavingTime;momentPrototype__proto.isDSTShifted=isDaylightSavingTimeShifted;
momentPrototype__proto.isLocal=isLocal;momentPrototype__proto.isUtcOffset=isUtcOffset;momentPrototype__proto.isUtc=isUtc;momentPrototype__proto.isUTC=isUtc;
momentPrototype__proto.zoneAbbr=getZoneAbbr;momentPrototype__proto.zoneName=getZoneName;momentPrototype__proto.dates=deprecate("dates accessor is deprecated. Use date instead.",getSetDayOfMonth);
momentPrototype__proto.months=deprecate("months accessor is deprecated. Use month instead",getSetMonth);momentPrototype__proto.years=deprecate("years accessor is deprecated. Use year instead",getSetYear);
momentPrototype__proto.zone=deprecate("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",getSetZone);
var momentPrototype=momentPrototype__proto;function moment__createUnix(input){return local__createLocal(input*1e3)}function moment__createInZone(){
return local__createLocal.apply(null,arguments).parseZone()}var defaultCalendar={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",
nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function locale_calendar__calendar(key,mom,now){
var output=this._calendar[key];return typeof output==="function"?output.call(mom,now):output}var defaultLongDateFormat={LTS:"h:mm:ss A",
LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function longDateFormat(key){
var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format}this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){
return val.slice(1)});return this._longDateFormat[key]}var defaultInvalidDate="Invalid date";function invalidDate(){return this._invalidDate;
}var defaultOrdinal="%d";var defaultOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace("%d",number)}function preParsePostFormat(string){
return string}var defaultRelativeTime={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",
d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function relative__relativeTime(number,withoutSuffix,string,isFuture){
var output=this._relativeTime[string];return typeof output==="function"?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);
}function pastFuture(diff,output){var format=this._relativeTime[diff>0?"future":"past"];return typeof format==="function"?format(output):format.replace(/%s/i,output);
}function locale_set__set(config){var prop,i;for(i in config){prop=config[i];if(typeof prop==="function"){this[i]=prop}else{this["_"+i]=prop;
}}this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}var prototype__proto=Locale.prototype;prototype__proto._calendar=defaultCalendar;
prototype__proto.calendar=locale_calendar__calendar;prototype__proto._longDateFormat=defaultLongDateFormat;prototype__proto.longDateFormat=longDateFormat;
prototype__proto._invalidDate=defaultInvalidDate;prototype__proto.invalidDate=invalidDate;prototype__proto._ordinal=defaultOrdinal;
prototype__proto.ordinal=ordinal;prototype__proto._ordinalParse=defaultOrdinalParse;prototype__proto.preparse=preParsePostFormat;prototype__proto.postformat=preParsePostFormat;
prototype__proto._relativeTime=defaultRelativeTime;prototype__proto.relativeTime=relative__relativeTime;prototype__proto.pastFuture=pastFuture;
prototype__proto.set=locale_set__set;prototype__proto.months=localeMonths;prototype__proto._months=defaultLocaleMonths;prototype__proto.monthsShort=localeMonthsShort;
prototype__proto._monthsShort=defaultLocaleMonthsShort;prototype__proto.monthsParse=localeMonthsParse;prototype__proto.week=localeWeek;
prototype__proto._week=defaultLocaleWeek;prototype__proto.firstDayOfYear=localeFirstDayOfYear;prototype__proto.firstDayOfWeek=localeFirstDayOfWeek;
prototype__proto.weekdays=localeWeekdays;prototype__proto._weekdays=defaultLocaleWeekdays;prototype__proto.weekdaysMin=localeWeekdaysMin;
prototype__proto._weekdaysMin=defaultLocaleWeekdaysMin;prototype__proto.weekdaysShort=localeWeekdaysShort;prototype__proto._weekdaysShort=defaultLocaleWeekdaysShort;
prototype__proto.weekdaysParse=localeWeekdaysParse;prototype__proto.isPM=localeIsPM;prototype__proto._meridiemParse=defaultLocaleMeridiemParse;
prototype__proto.meridiem=localeMeridiem;function lists__get(format,index,field,setter){var locale=locale_locales__getLocale();var utc=create_utc__createUTC().set(setter,index);
return locale[field](utc,format)}function list(format,index,field,count,setter){if(typeof format==="number"){index=format;format=undefined;
}format=format||"";if(index!=null){return lists__get(format,index,field,setter)}var i;var out=[];for(i=0;i<count;i++){out[i]=lists__get(format,i,field,setter);
}return out}function lists__listMonths(format,index){return list(format,index,"months",12,"month")}function lists__listMonthsShort(format,index){
return list(format,index,"monthsShort",12,"month")}function lists__listWeekdays(format,index){return list(format,index,"weekdays",7,"day");
}function lists__listWeekdaysShort(format,index){return list(format,index,"weekdaysShort",7,"day")}function lists__listWeekdaysMin(format,index){
return list(format,index,"weekdaysMin",7,"day")}locale_locales__getSetGlobalLocale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){
var b=number%10,output=toInt(number%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th";return number+output}});utils_hooks__hooks.lang=deprecate("moment.lang is deprecated. Use moment.locale instead.",locale_locales__getSetGlobalLocale);
utils_hooks__hooks.langData=deprecate("moment.langData is deprecated. Use moment.localeData instead.",locale_locales__getLocale);var mathAbs=Math.abs;
function duration_abs__abs(){var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);
data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);
data.months=mathAbs(data.months);data.years=mathAbs(data.years);return this}function duration_add_subtract__addSubtract(duration,input,value,direction){
var other=create__createDuration(input,value);duration._milliseconds+=direction*other._milliseconds;duration._days+=direction*other._days;
duration._months+=direction*other._months;return duration._bubble()}function duration_add_subtract__add(input,value){return duration_add_subtract__addSubtract(this,input,value,1);
}function duration_add_subtract__subtract(input,value){return duration_add_subtract__addSubtract(this,input,value,-1)}function absCeil(number){
if(number<0){return Math.floor(number)}else{return Math.ceil(number)}}function bubble(){var milliseconds=this._milliseconds;var days=this._days;
var months=this._months;var data=this._data;var seconds,minutes,hours,years,monthsFromDays;if(!(milliseconds>=0&&days>=0&&months>=0||milliseconds<=0&&days<=0&&months<=0)){
milliseconds+=absCeil(monthsToDays(months)+days)*864e5;days=0;months=0}data.milliseconds=milliseconds%1e3;seconds=absFloor(milliseconds/1e3);
data.seconds=seconds%60;minutes=absFloor(seconds/60);data.minutes=minutes%60;hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24);
monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays));years=absFloor(months/12);
months%=12;data.days=days;data.months=months;data.years=years;return this}function daysToMonths(days){return days*4800/146097}function monthsToDays(months){
return months*146097/4800}function as(units){var days;var months;var milliseconds=this._milliseconds;units=normalizeUnits(units);if(units==="month"||units==="year"){
days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);return units==="month"?months:months/12}else{days=this._days+Math.round(monthsToDays(this._months));
switch(units){case"week":return days/7+milliseconds/6048e5;case"day":return days+milliseconds/864e5;case"hour":return days*24+milliseconds/36e5;
case"minute":return days*1440+milliseconds/6e4;case"second":return days*86400+milliseconds/1e3;case"millisecond":return Math.floor(days*864e5)+milliseconds;
default:throw new Error("Unknown unit "+units)}}}function duration_as__valueOf(){return this._milliseconds+this._days*864e5+this._months%12*2592e6+toInt(this._months/12)*31536e6;
}function makeAs(alias){return function(){return this.as(alias)}}var asMilliseconds=makeAs("ms");var asSeconds=makeAs("s");var asMinutes=makeAs("m");
var asHours=makeAs("h");var asDays=makeAs("d");var asWeeks=makeAs("w");var asMonths=makeAs("M");var asYears=makeAs("y");function duration_get__get(units){
units=normalizeUnits(units);return this[units+"s"]()}function makeGetter(name){return function(){return this._data[name]}}var milliseconds=makeGetter("milliseconds");
var seconds=makeGetter("seconds");var minutes=makeGetter("minutes");var hours=makeGetter("hours");var days=makeGetter("days");var months=makeGetter("months");
var years=makeGetter("years");function weeks(){return absFloor(this.days()/7)}var round=Math.round;var thresholds={s:45,m:45,h:22,
d:26,M:11};function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);
}function duration_humanize__relativeTime(posNegDuration,withoutSuffix,locale){var duration=create__createDuration(posNegDuration).abs();
var seconds=round(duration.as("s"));var minutes=round(duration.as("m"));var hours=round(duration.as("h"));var days=round(duration.as("d"));
var months=round(duration.as("M"));var years=round(duration.as("y"));var a=seconds<thresholds.s&&["s",seconds]||minutes===1&&["m"]||minutes<thresholds.m&&["mm",minutes]||hours===1&&["h"]||hours<thresholds.h&&["hh",hours]||days===1&&["d"]||days<thresholds.d&&["dd",days]||months===1&&["M"]||months<thresholds.M&&["MM",months]||years===1&&["y"]||["yy",years];
a[2]=withoutSuffix;a[3]=+posNegDuration>0;a[4]=locale;return substituteTimeAgo.apply(null,a)}function duration_humanize__getSetRelativeTimeThreshold(threshold,limit){
if(thresholds[threshold]===undefined){return false}if(limit===undefined){return thresholds[threshold]}thresholds[threshold]=limit;
return true}function humanize(withSuffix){var locale=this.localeData();var output=duration_humanize__relativeTime(this,!withSuffix,locale);
if(withSuffix){output=locale.pastFuture(+this,output)}return locale.postformat(output)}var iso_string__abs=Math.abs;function iso_string__toISOString(){
var seconds=iso_string__abs(this._milliseconds)/1e3;var days=iso_string__abs(this._days);var months=iso_string__abs(this._months);
var minutes,hours,years;minutes=absFloor(seconds/60);hours=absFloor(minutes/60);seconds%=60;minutes%=60;years=absFloor(months/12);
months%=12;var Y=years;var M=months;var D=days;var h=hours;var m=minutes;var s=seconds;var total=this.asSeconds();if(!total){return"P0D";
}return(total<0?"-":"")+"P"+(Y?Y+"Y":"")+(M?M+"M":"")+(D?D+"D":"")+(h||m||s?"T":"")+(h?h+"H":"")+(m?m+"M":"")+(s?s+"S":"")}var duration_prototype__proto=Duration.prototype;
duration_prototype__proto.abs=duration_abs__abs;duration_prototype__proto.add=duration_add_subtract__add;duration_prototype__proto.subtract=duration_add_subtract__subtract;
duration_prototype__proto.as=as;duration_prototype__proto.asMilliseconds=asMilliseconds;duration_prototype__proto.asSeconds=asSeconds;
duration_prototype__proto.asMinutes=asMinutes;duration_prototype__proto.asHours=asHours;duration_prototype__proto.asDays=asDays;duration_prototype__proto.asWeeks=asWeeks;
duration_prototype__proto.asMonths=asMonths;duration_prototype__proto.asYears=asYears;duration_prototype__proto.valueOf=duration_as__valueOf;
duration_prototype__proto._bubble=bubble;duration_prototype__proto.get=duration_get__get;duration_prototype__proto.milliseconds=milliseconds;
duration_prototype__proto.seconds=seconds;duration_prototype__proto.minutes=minutes;duration_prototype__proto.hours=hours;duration_prototype__proto.days=days;
duration_prototype__proto.weeks=weeks;duration_prototype__proto.months=months;duration_prototype__proto.years=years;duration_prototype__proto.humanize=humanize;
duration_prototype__proto.toISOString=iso_string__toISOString;duration_prototype__proto.toString=iso_string__toISOString;duration_prototype__proto.toJSON=iso_string__toISOString;
duration_prototype__proto.locale=locale;duration_prototype__proto.localeData=localeData;duration_prototype__proto.toIsoString=deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",iso_string__toISOString);
duration_prototype__proto.lang=lang;addFormatToken("X",0,0,"unix");addFormatToken("x",0,0,"valueOf");addRegexToken("x",matchSigned);
addRegexToken("X",matchTimestamp);addParseToken("X",function(input,array,config){config._d=new Date(parseFloat(input,10)*1e3)});addParseToken("x",function(input,array,config){
config._d=new Date(toInt(input))});utils_hooks__hooks.version="2.10.6";setHookCallback(local__createLocal);utils_hooks__hooks.fn=momentPrototype;
utils_hooks__hooks.min=min;utils_hooks__hooks.max=max;utils_hooks__hooks.utc=create_utc__createUTC;utils_hooks__hooks.unix=moment__createUnix;
utils_hooks__hooks.months=lists__listMonths;utils_hooks__hooks.isDate=isDate;utils_hooks__hooks.locale=locale_locales__getSetGlobalLocale;
utils_hooks__hooks.invalid=valid__createInvalid;utils_hooks__hooks.duration=create__createDuration;utils_hooks__hooks.isMoment=isMoment;
utils_hooks__hooks.weekdays=lists__listWeekdays;utils_hooks__hooks.parseZone=moment__createInZone;utils_hooks__hooks.localeData=locale_locales__getLocale;
utils_hooks__hooks.isDuration=isDuration;utils_hooks__hooks.monthsShort=lists__listMonthsShort;utils_hooks__hooks.weekdaysMin=lists__listWeekdaysMin;
utils_hooks__hooks.defineLocale=defineLocale;utils_hooks__hooks.weekdaysShort=lists__listWeekdaysShort;utils_hooks__hooks.normalizeUnits=normalizeUnits;
utils_hooks__hooks.relativeTimeThreshold=duration_humanize__getSetRelativeTimeThreshold;var _moment=utils_hooks__hooks;return _moment;
});var Translator=function(document,undefined){"use strict";var _messages={},_domains=[],_sPluralRegex=new RegExp(/^\w+\: +(.+)$/),_cPluralRegex=new RegExp(/^\s*((\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]]))\s?(.+?)$/),_iPluralRegex=new RegExp(/^\s*(\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]])/);
function replace_placeholders(message,placeholders){var _i,_prefix=Translator.placeHolderPrefix,_suffix=Translator.placeHolderSuffix;
for(_i in placeholders){var _r=new RegExp(_prefix+_i+_suffix,"g");if(_r.test(message)){message=message.replace(_r,placeholders[_i]);
}}return message}function get_message(id,domain,locale,currentLocale,localeFallback){var _locale=locale||currentLocale||localeFallback,_domain=domain;
if(undefined==_messages[_locale]){if(undefined==_messages[localeFallback]){return id}_locale=localeFallback}if(undefined===_domain||null===_domain){
for(var i=0;i<_domains.length;i++){if(has_message(_locale,_domains[i],id)||has_message(localeFallback,_domains[i],id)){_domain=_domains[i];
break}}}if(has_message(_locale,_domain,id)){return _messages[_locale][_domain][id]}var _length,_parts,_last,_lastLength;while(_locale.length>2){
_length=_locale.length;_parts=_locale.split(/[\s_]+/);_last=_parts[_parts.length-1];_lastLength=_last.length;if(1===_parts.length){
break}_locale=_locale.substring(0,_length-(_lastLength+1));if(has_message(_locale,_domain,id)){return _messages[_locale][_domain][id];
}}if(has_message(localeFallback,_domain,id)){return _messages[localeFallback][_domain][id]}return id}function has_message(locale,domain,id){
if(undefined==_messages[locale]){return false}if(undefined==_messages[locale][domain]){return false}if(undefined==_messages[locale][domain][id]){
return false}return true}function pluralize(message,number,locale){var _p,_e,_explicitRules=[],_standardRules=[],_parts=message.split(Translator.pluralSeparator),_matches=[];
for(_p=0;_p<_parts.length;_p++){var _part=_parts[_p];if(_cPluralRegex.test(_part)){_matches=_part.match(_cPluralRegex);_explicitRules[_matches[0]]=_matches[_matches.length-1];
}else if(_sPluralRegex.test(_part)){_matches=_part.match(_sPluralRegex);_standardRules.push(_matches[1])}else{_standardRules.push(_part);
}}for(_e in _explicitRules){if(_iPluralRegex.test(_e)){_matches=_e.match(_iPluralRegex);if(_matches[1]){var _ns=_matches[2].split(","),_n;
for(_n in _ns){if(number==_ns[_n]){return _explicitRules[_e]}}}else{var _leftNumber=convert_number(_matches[4]);var _rightNumber=convert_number(_matches[5]);
if(("["===_matches[3]?number>=_leftNumber:number>_leftNumber)&&("]"===_matches[6]?number<=_rightNumber:number<_rightNumber)){return _explicitRules[_e];
}}}}return _standardRules[plural_position(number,locale)]||_standardRules[0]||undefined}function convert_number(number){if("-Inf"===number){
return Number.NEGATIVE_INFINITY}else if("+Inf"===number||"Inf"===number){return Number.POSITIVE_INFINITY}return parseInt(number,10);
}function plural_position(number,locale){var _locale=locale;if("pt_BR"===_locale){_locale="xbr"}if(_locale.length>3){_locale=_locale.split("_")[0];
}switch(_locale){case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":
case"zh":return 0;case"af":case"az":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":
case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":
case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":
case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return number==1?0:1;case"am":case"bh":case"fil":case"fr":
case"gun":case"hi":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return number===0||number==1?0:1;case"be":case"bs":case"hr":
case"ru":case"sr":case"uk":return number%10==1&&number%100!=11?0:number%10>=2&&number%10<=4&&(number%100<10||number%100>=20)?1:2;case"cs":
case"sk":return number==1?0:number>=2&&number<=4?1:2;case"ga":return number==1?0:number==2?1:2;case"lt":return number%10==1&&number%100!=11?0:number%10>=2&&(number%100<10||number%100>=20)?1:2;
case"sl":return number%100==1?0:number%100==2?1:number%100==3||number%100==4?2:3;case"mk":return number%10==1?0:1;case"mt":return number==1?0:number===0||number%100>1&&number%100<11?1:number%100>10&&number%100<20?2:3;
case"lv":return number===0?0:number%10==1&&number%100!=11?1:2;case"pl":return number==1?0:number%10>=2&&number%10<=4&&(number%100<12||number%100>14)?1:2;
case"cy":return number==1?0:number==2?1:number==8||number==11?2:3;case"ro":return number==1?0:number===0||number%100>0&&number%100<20?1:2;
case"ar":return number===0?0:number==1?1:number==2?2:number>=3&&number<=10?3:number>=11&&number<=99?4:5;default:return 0}}function exists(array,element){
for(var i=0;i<array.length;i++){if(element===array[i]){return true}}return false}function get_current_locale(){return document.documentElement.lang.replace("-","_");
}return{locale:get_current_locale(),fallback:"en",placeHolderPrefix:"%",placeHolderSuffix:"%",defaultDomain:"messages",pluralSeparator:"|",
add:function(id,message,domain,locale){var _locale=locale||this.locale||this.fallback,_domain=domain||this.defaultDomain;if(!_messages[_locale]){
_messages[_locale]={}}if(!_messages[_locale][_domain]){_messages[_locale][_domain]={}}_messages[_locale][_domain][id]=message;if(false===exists(_domains,_domain)){
_domains.push(_domain)}return this},trans:function(id,parameters,domain,locale){var _message=get_message(id,domain,locale,this.locale,this.fallback);
return replace_placeholders(_message,parameters||{})},transChoice:function(id,number,parameters,domain,locale){var _message=get_message(id,domain,locale,this.locale,this.fallback);
var _number=parseInt(number,10);if(undefined!=_message&&!isNaN(_number)){_message=pluralize(_message,_number,locale||this.locale||this.fallback);
}return replace_placeholders(_message,parameters||{})},fromJSON:function(data){if(typeof data==="string"){data=JSON.parse(data)}if(data.locale){
this.locale=data.locale}if(data.fallback){this.fallback=data.fallback}if(data.defaultDomain){this.defaultDomain=data.defaultDomain;
}if(data.translations){for(var locale in data.translations){for(var domain in data.translations[locale]){for(var id in data.translations[locale][domain]){
this.add(id,data.translations[locale][domain][id],domain,locale)}}}}return this},reset:function(){_messages={};_domains=[];this.locale=get_current_locale();
}}}(document,undefined);if(typeof window.define==="function"&&window.define.amd){window.define("Translator",[],function(){return Translator;
})}if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){module.exports=Translator}}!function(){var e=function(n){
return e.utils.extend({},e.plugins,(new e.Storage).init(n))};e.version="0.4.4",e.utils={extend:function(){for(var e="object"==typeof arguments[0]?arguments[0]:{},n=1;n<arguments.length;n++)if(arguments[n]&&"object"==typeof arguments[n])for(var t in arguments[n])e[t]=arguments[n][t];
return e},each:function(e,n,t){if(this.isArray(e)){for(var i=0;i<e.length;i++)if(n.call(t,e[i],i)===!1)return}else if(e)for(var o in e)if(n.call(t,e[o],o)===!1)return;
},tryEach:function(e,n,t,i){this.each(e,function(e,o){try{return n.call(i,e,o)}catch(r){if(this.isFunction(t))try{t.call(i,e,o,r);
}catch(r){}}},this)},registerPlugin:function(n){e.plugins=this.extend(n,e.plugins)},getTypeOf:function(e){return"undefined"==typeof e||null===e?""+e:Object.prototype.toString.call(e).replace(/^\[object\s(.*)\]$/,function(e,n){
return n.toLowerCase()})}};for(var n=["Arguments","Boolean","Function","String","Array","Number","Date","RegExp","Undefined","Null"],t=0;t<n.length;t++)e.utils["is"+n[t]]=function(n){
return function(t){return e.utils.getTypeOf(t)===n.toLowerCase()}}(n[t]);e.plugins={},e.options=e.utils.extend({namespace:"b45i1",
storages:["local","cookie","session","memory"],expireDays:365},window.Basil?window.Basil.options:{}),e.Storage=function(){var n="b45i1"+(Math.random()+1).toString(36).substring(7),t={},i=function(n){
var t=e.utils.getTypeOf(n);return"string"===t&&n||"number"===t||"boolean"===t},o=function(n){return e.utils.isArray(n)?n:e.utils.isString(n)?[n]:[];
},r=function(n,t){var o="";return i(t)?o+=t:e.utils.isArray(t)&&(t=e.utils.isFunction(t.filter)?t.filter(i):t,o=t.join(".")),o&&i(n)?n+"."+o:o;
},s=function(e,n){return i(e)?n.replace(new RegExp("^"+e+"."),""):n},u=function(e){return JSON.stringify(e)},a=function(e){return e?JSON.parse(e):null;
},c={engine:null,check:function(){try{window[this.engine].setItem(n,!0),window[this.engine].removeItem(n)}catch(e){return!1}return!0;
},set:function(e,n,t){if(!e)throw Error("invalid key");window[this.engine].setItem(e,n)},get:function(e){return window[this.engine].getItem(e);
},remove:function(e){window[this.engine].removeItem(e)},reset:function(e){for(var n,t=0;t<window[this.engine].length;t++)n=window[this.engine].key(t),
e&&0!==n.indexOf(e)||(this.remove(n),t--)},keys:function(e){for(var n,t=[],i=0;i<window[this.engine].length;i++)n=window[this.engine].key(i),
e&&0!==n.indexOf(e)||t.push(s(e,n));return t}};return t.local=e.utils.extend({},c,{engine:"localStorage"}),t.session=e.utils.extend({},c,{
engine:"sessionStorage"}),t.memory={_hash:{},check:function(){return!0},set:function(e,n,t){if(!e)throw Error("invalid key");this._hash[e]=n;
},get:function(e){return this._hash[e]||null},remove:function(e){delete this._hash[e]},reset:function(e){for(var n in this._hash)e&&0!==n.indexOf(e)||this.remove(n);
},keys:function(e){var n=[];for(var t in this._hash)e&&0!==t.indexOf(e)||n.push(s(e,t));return n}},t.cookie={check:function(){if(!navigator.cookieEnabled)return!1;
if(window.self!==window.top){var e="thirdparty.check="+Math.round(1e3*Math.random());return document.cookie=e+"; path=/",-1!==document.cookie.indexOf(e);
}return!0},set:function(e,n,t){if(!this.check())throw Error("cookies are disabled");if(t=t||{},!e)throw Error("invalid key");var i=encodeURIComponent(e)+"="+encodeURIComponent(n);
if(t.expireDays){var o=new Date;o.setTime(o.getTime()+24*t.expireDays*60*60*1e3),i+="; expires="+o.toGMTString()}if(t.domain&&t.domain!==document.domain){
var r=t.domain.replace(/^\./,"");if(-1===document.domain.indexOf(r)||r.split(".").length<=1)throw Error("invalid domain");i+="; domain="+t.domain;
}t.secure===!0&&(i+="; secure"),document.cookie=i+"; path=/"},get:function(e){if(!this.check())throw Error("cookies are disabled");
for(var n,t=encodeURIComponent(e),i=document.cookie?document.cookie.split(";"):[],o=i.length-1;o>=0;o--)if(n=i[o].replace(/^\s*/,""),
0===n.indexOf(t+"="))return decodeURIComponent(n.substring(t.length+1,n.length));return null},remove:function(e){this.set(e,"",{expireDays:-1
});for(var n=document.domain.split("."),t=n.length;t>=0;t--)this.set(e,"",{expireDays:-1,domain:"."+n.slice(-t).join(".")})},reset:function(e){
for(var n,t,i=document.cookie?document.cookie.split(";"):[],o=0;o<i.length;o++)n=i[o].replace(/^\s*/,""),t=n.substr(0,n.indexOf("=")),
e&&0!==t.indexOf(e)||this.remove(t)},keys:function(e){if(!this.check())throw Error("cookies are disabled");for(var n,t,i=[],o=document.cookie?document.cookie.split(";"):[],r=0;r<o.length;r++)n=o[r].replace(/^\s*/,""),
t=decodeURIComponent(n.substr(0,n.indexOf("="))),e&&0!==t.indexOf(e)||i.push(s(e,t));return i}},{init:function(e){return this.setOptions(e),
this},setOptions:function(n){this.options=e.utils.extend({},this.options||e.options,n)},support:function(e){return t.hasOwnProperty(e);
},check:function(e){return this.support(e)?t[e].check():!1},set:function(n,i,s){if(s=e.utils.extend({},this.options,s),!(n=r(s.namespace,n)))return!1;
i=s.raw===!0?i:u(i);var a=null;return e.utils.tryEach(o(s.storages),function(e,o){return t[e].set(n,i,s),a=e,!1},null,this),a?(e.utils.tryEach(o(s.storages),function(e,i){
e!==a&&t[e].remove(n)},null,this),!0):!1},get:function(n,i){if(i=e.utils.extend({},this.options,i),!(n=r(i.namespace,n)))return null;
var s=null;return e.utils.tryEach(o(i.storages),function(e,o){return null!==s?!1:(s=t[e].get(n,i)||null,void(s=i.raw===!0?s:a(s)));
},function(e,n,t){s=null},this),s},remove:function(n,i){i=e.utils.extend({},this.options,i),(n=r(i.namespace,n))&&e.utils.tryEach(o(i.storages),function(e){
t[e].remove(n)},null,this)},reset:function(n){n=e.utils.extend({},this.options,n),e.utils.tryEach(o(n.storages),function(e){t[e].reset(n.namespace);
},null,this)},keys:function(e){e=e||{};var n=[];for(var t in this.keysMap(e))n.push(t);return n},keysMap:function(n){n=e.utils.extend({},this.options,n);
var i={};return e.utils.tryEach(o(n.storages),function(o){e.utils.each(t[o].keys(n.namespace),function(n){i[n]=e.utils.isArray(i[n])?i[n]:[],
i[n].push(o)},this)},null,this),i}}},e.memory=(new e.Storage).init({storages:"memory",namespace:null,raw:!0}),e.cookie=(new e.Storage).init({
storages:"cookie",namespace:null,raw:!0}),e.localStorage=(new e.Storage).init({storages:"local",namespace:null,raw:!0}),e.sessionStorage=(new e.Storage).init({
storages:"session",namespace:null,raw:!0}),window.Basil=e,"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports&&(module.exports=e);
}();
//# sourceMappingURL=web_vendors.js.map