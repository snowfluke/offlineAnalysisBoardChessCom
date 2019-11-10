//
//
//  Copyright Chess.com, LLC. All rights reserved.
//
//
if(!window.ChessCom){window.ChessCom=function ChessCom(callback){callback(window)}}ChessCom(function(globals){var Config=globals.config=globals.config||globals.Config||{};
if(!Config.MainDomain){Config.MainDomain=Config["domain.main"]}if(!Config.CssJsDomain){Config.CssJsDomain=Config["domain.cssjs"]}
if(!Config.ChessBoardAssetsDomain){Config.ChessBoardAssetsDomain="//images.chesscomfiles.com/chess-themes"}if(!Config.AppVersion){
Config.AppVersion=Config["application.version"]}if(!Config.AppVersion){Config.AppVersion=Math.floor(Math.random()*1e4)+1e4}if(!Config.GfxUrl){
Config.GfxUrl=Config.ChessBoardAssetsDomain}if(!Config.ChessBoardPiecesPath){Config.ChessBoardPiecesPath="/pieces"}if(!Config.ChessBoardBackgroundsPath){
Config.ChessBoardBackgroundsPath="/boards"}if(!Config.ChessBoardArrowsPath){Config.ChessBoardArrowsPath="/arrows"}if(!Config.AudioSet){
Config.AudioSet="default"}if(!Config.AudioUrl){Config.AudioUrl=Config.ChessBoardAssetsDomain+"/sounds/"}if(!Config.DiagramGetPostUrl){
Config.DiagramGetPostUrl="/api/get_diagram"}if(!Config.DailyPuzzleGetUrl){Config.DailyPuzzleGetUrl="/api/get_puzzle"}});ChessCom(function(globals){
"use strict";var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;
function toObject(val){if(val===null||val===undefined){throw new TypeError("Object.assign cannot be called with null or undefined");
}return Object(val)}function shouldUseNative(){try{if(!Object.assign){return false}var test1=new String("abc");test1[5]="de";if(Object.getOwnPropertyNames(test1)[0]==="5"){
return false}var test2={};for(var i=0;i<10;i++){test2["_"+String.fromCharCode(i)]=i}var order2=Object.getOwnPropertyNames(test2).map(function(n){
return test2[n]});if(order2.join("")!=="0123456789"){return false}var test3={};"abcdefghijklmnopqrst".split("").forEach(function(letter){
test3[letter]=letter});if(Object.keys(Object.assign({},test3)).join("")!=="abcdefghijklmnopqrst"){return false}return true}catch(err){
return false}}globals.objectAssign=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;
for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];
}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){
to[symbols[i]]=from[symbols[i]]}}}}return to}});ChessCom(function(globals){globals.insertContentAt=function(ref,cont,posn){var tmpElement=document.createElement("div");
tmpElement.innerHTML=cont;if(posn!=="top"||!ref.firstChild){while(tmpElement.firstChild){ref.appendChild(tmpElement.firstChild)}}else{
var refChild=ref.firstChild;while(tmpElement.firstChild){refChild.parentNode.insertBefore(tmpElement.removeChild(tmpElement.firstChild),refChild);
}}tmpElement.innerHTML=""};globals._bind=function(func){return func.bind.apply(func,Array.prototype.slice.call(arguments,1))}});ChessCom(function(globals){
if(globals.ElementTools){return}var Element=globals.ElementTools={hasClassName:function(element,className){if(typeof element=="string"){
element=document.getElementById(element)}if(!element){return}var elementClassName=element.className;var classNameRegexp=new RegExp("(^|\\s)"+className+"(\\s|$)");
return elementClassName.length>0&&(elementClassName==className||classNameRegexp.test(elementClassName))},addClassName:function(element,className){
if(typeof element=="string"){element=document.getElementById(element)}if(!element){return}if(!Element.hasClassName(element,className)){
element.className+=(element.className?" ":"")+className}return element},removeClassName:function(element,className){if(typeof element=="string"){
element=document.getElementById(element)}if(!element){return}element.className=element.className.replace(new RegExp("(^|\\s+)"+className+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"");
return element}}});ChessCom(function(globals){if(globals.myEvent){return}var myEvent=globals.myEvent={componentRegistry:[],componentBounds:[],
observe:function(n,evt,hnl){if(n){if(n.addEventListener){n.addEventListener(evt,hnl,false)}else{if(n.attachEvent){n.attachEvent("on"+evt,hnl);
}}}},stopObserving:function(n,evt,hnl){if(n){if(n.removeEventListener){n.removeEventListener(evt,hnl,false)}else{if(n.detachEvent){
n.detachEvent("on"+evt,hnl)}}}},fireEvent:function(target,type){var event;if(document.createEvent){try{event=new Event(type)}catch(e){
var customEvent=document.createEvent("CustomEvent");if(customEvent&&customEvent.initCustomEvent){customEvent.initCustomEvent(type,false,false,undefined);
event=customEvent}}if(event){target.dispatchEvent(event)}}else{event=document.createEventObject();target.fireEvent("on"+type,event);
}},getTarget:function(evt){return evt["pointer"]?evt["pointer"].target:evt.target?evt.target:evt.srcElement},getPointXY:function(evt){
if(evt["pointer"]){return{x:evt["pointer"].x,y:evt["pointer"].y}}else{var touches=evt.touches;var changedTouches=evt.changedTouches;
var pointer={x:evt.pageX||evt.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft),y:evt.pageY||evt.clientY+(document.documentElement.scrollTop||document.body.scrollTop)
};if(touches&&touches[0]){pointer.x=touches[0].pageX;pointer.y=touches[0].pageY}else if(changedTouches&&changedTouches[0]){pointer.x=changedTouches[0].pageX;
pointer.y=changedTouches[0].pageY}return pointer}},preventDefault:function(e,alsoStopPropagation){if(typeof e.preventDefault=="function")e.preventDefault();
e.returnValue=false;if(alsoStopPropagation){if(typeof e.stopPropagation=="function")e.stopPropagation();e.cancelBubble=true}},registerComponent:function(htmlElement_id){
var found=false;for(var n=0;n<myEvent.componentRegistry;n++){if(htmlElement_id==myEvent.componentRegistry[n]){found=true;break}}if(!found){
myEvent.componentRegistry[myEvent.componentRegistry.length]=htmlElement_id}},findComponent:function(e){var curNode=e.target?e.target:e.srcElement;
var obj=null;while(!(obj=myEvent._findComponent(curNode.id))){if(curNode.parentNode)curNode=curNode.parentNode;else return false}
curNode=null;return obj},_findComponent:function(htmlElement_id){var found=null;for(var n=0;n<myEvent.componentRegistry.length;n++){
if(htmlElement_id==myEvent.componentRegistry[n]){found=document.getElementById(htmlElement_id);break}}return found},registerRelated:function(cmpId,relatedId){
var found=false;for(var n=0;n<myEvent.componentBounds.length;n++){if(myEvent.componentBounds[n].cmpId==cmpId&&myEvent.componentBounds[n].relatedId==relatedId){
found=true;break}}if(!found)myEvent.componentBounds[myEvent.componentBounds.length]={cmpId:cmpId,relatedId:relatedId}},findRelated:function(cmpId){
var ret=null;for(var n=0;n<myEvent.componentBounds.length;n++){if(myEvent.componentBounds[n].cmpId==cmpId){ret=myEvent.componentBounds[n].relatedId;
}}if(!ret){var curElem=document.getElementById(cmpId);while(curElem){for(var n=0;n<myEvent.componentBounds.length;n++){if(myEvent.componentBounds[n].cmpId==curElem.id){
ret=myEvent.componentBounds[n].relatedId;return ret}}curElem=curElem.parentElement}}return ret}}});(function(globals){"use strict";
if(globals.getDefaultSoundManager){return}globals.getDefaultSoundManager=function getDefaultSoundManager(){Howler.autoSuspend=false;
function createSoundManager(){var sounds={};return{loadSound:function(code,url){var src;if(typeof url==="string"){src=url.split("|");
}else{src=url}sounds[code]=new Howl({src:src,preload:true,html5:false})},playSound:function(code){sounds[code].play()},removeAllSounds:function(){
Object.keys(sounds).forEach(function(key){try{sounds[key].unload()}catch(e){console.log(e)}});sounds={}},_getSoundManager:function(){
return createSoundManager()}}}return createSoundManager()}})(window);ChessCom(function(globals){"use strict";var easingFunctions=globals.AnimationEasings={
easeLinear:function(t,b,c,d){return c*t/d+b},easeInQuad:function(t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(t,b,c,d){return-c*(t/=d)*(t-2)+b;
},easeInOutQuad:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b}return-c/2*(--t*(t-2)-1)+b},easeInCubic:function(t,b,c,d){return c*(t/=d)*t*t+b;
},easeOutCubic:function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t+b;
}return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;
},easeInOutQuart:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t+b}return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(t,b,c,d){
return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(t,b,c,d){if((t/=d/2)<1){
return c/2*t*t*t*t*t+b}return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(t,b,c,d){
return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(t,b,c,d){
return t==0?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(t,b,c,d){return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(t,b,c,d){
if(t==0){return b}if(t==d){return b+c}if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b}return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(t,b,c,d){
return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(t,b,c,d){
if((t/=d/2)<1){return-c/2*(Math.sqrt(1-t*t)-1)+b}return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(t,b,c,d){var s=1.70158;
var p=0;var a=c;if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*.3}if(a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a);
}return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(t,b,c,d){var s=1.70158;var p=0;var a=c;
if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*.3}if(a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}
return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0){
return b}if((t/=d/2)==2){return b+c}if(!p){p=d*(.3*1.5)}if(a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}if(t<1){
return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b}return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;
},easeInBack:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(t,b,c,d,s){if(s==undefined){
s=1.70158}return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(t,b,c,d,s){if(s==undefined){s=1.70158}if((t/=d/2)<1){return c/2*(t*t*(((s*=1.525)+1)*t-s))+b;
}return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b},easeInBounce:function(t,b,c,d){return c-easingFunctions["easeOutBounce"](d-t,0,c,d)+b;
},easeOutBounce:function(t,b,c,d){if((t/=d)<1/2.75){return c*(7.5625*t*t)+b}else if(t<2/2.75){return c*(7.5625*(t-=1.5/2.75)*t+.75)+b;
}else if(t<2.5/2.75){return c*(7.5625*(t-=2.25/2.75)*t+.9375)+b}else{return c*(7.5625*(t-=2.625/2.75)*t+.984375)+b}},easeInOutBounce:function(t,b,c,d){
if(t<d/2){return easingFunctions["easeInBounce"](t*2,0,c,d)*.5+b}return easingFunctions["easeOutBounce"](t*2-d,0,c,d)*.5+c*.5+b}};
});ChessCom(function(globals){"use strict";var transformStyle="webkitTransform"in document.body.style?"webkitTransform":"transform";
function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1))+min}function getElementPosition(element){return element.style[transformStyle].replace("translate(","").replace(")","").split(", ");
}globals.AnimationTypes={pieceAnimations:{get:function(animationType,moveType){var moveTypeAnimations=null;if(this._animations[animationType]&&this._animations[animationType][moveType]){
moveTypeAnimations=this._animations[animationType][moveType];var randomIndex=getRandomInt(0,moveTypeAnimations.length-1);return moveTypeAnimations[randomIndex];
}else if(moveType==="move"){return this._animations["defaultMove"]}return null},_animations:{battle:{moveImageEffect:[{easing:"easeOutCubic",
duration:.5,keyframes:{0:{fxScale:1,fxOpacity:1},30:{fxOpacity:1},100:{fxScale:2,fxOpacity:0}},onStart:function(target,animation){
var keyframes=animation.getKeyframes();var extraData=animation.getExtraData();var targetStyle=target.style;var fxImg=document.createElement("img");
var fxImgStyle=fxImg.style;var fxImgIndex=getRandomInt(1,4);fxImg.src=this.gfxUrl+"/effects/poof"+fxImgIndex+".png";fxImgStyle.position="absolute";
fxImgStyle.width=targetStyle.width;fxImgStyle.height=targetStyle.height;fxImgStyle.left=keyframes[100].left+"px";fxImgStyle.top=keyframes[100].top+"px";
fxImgStyle.zIndex=2;target.parentNode.appendChild(fxImg);animation.addExtraData({fxImg:fxImg})},onUpdate:function(target,updatedValues,animation,elapsedInterval){
var extraData=animation.getExtraData();var fxImg=extraData.fxImg;var fxImgStyle=fxImg.style;fxImgStyle.opacity=updatedValues.fxOpacity;
fxImgStyle[transformStyle]="scale("+updatedValues.fxScale+")"},onEnd:function(target,animation){var extraData=animation.getExtraData();
extraData.fxImg.parentNode.removeChild(extraData.fxImg)}}],move:[{easing:"easeInOutCubic",duration:.2,keyframes:{},onStart:function(target,animation){},
onUpdate:function(target,updatedValues,animation,elapsedInterval){target.style[transformStyle]="translate("+updatedValues.left+"px, "+updatedValues.top+"px)";
},onEnd:function(target,animation){}},{easing:"easeInOutCubic",duration:.2,keyframes:{0:{scale:1},50:{scale:1.5},100:{scale:1}},onStart:function(target,animation){},
onUpdate:function(target,updatedValues,animation,elapsedInterval){target.style[transformStyle]="translate("+updatedValues.left+"px, "+updatedValues.top+"px) scale("+updatedValues.scale+")";
},onEnd:function(target,animation){}},{easing:"easeInOutCubic",duration:.3,keyframes:{},onStart:function(target,animation){var keyframes=animation.getKeyframes();
animation.addKeyframes({0:{scale:1},30:{scale:1.5,left:keyframes[0].left,top:keyframes[0].top},70:{scale:1.5,left:keyframes[100].left,
top:keyframes[100].top},100:{scale:1}})},onUpdate:function(target,updatedValues,animation,elapsedInterval){target.style[transformStyle]="translate("+updatedValues.left+"px, "+updatedValues.top+"px) scale("+updatedValues.scale+")";
},onEnd:function(target,animation){}},{easing:"easeInOutCubic",duration:.3,keyframes:{},onStart:function(target,animation){var keyframes=animation.getKeyframes();
animation.addKeyframes({0:{scale:1},30:{scale:1},70:{scale:1.5,left:keyframes[100].left,top:keyframes[100].top},100:{scale:1}})},
onUpdate:function(target,updatedValues,animation,elapsedInterval){target.style[transformStyle]="translate("+updatedValues.left+"px, "+updatedValues.top+"px) scale("+updatedValues.scale+")";
},onEnd:function(target,animation){}}],drop:[{easing:"easeInOutCubic",duration:.05,keyframes:{0:{scale:1},50:{scale:1.5},100:{scale:1
}},onStart:function(target,animation){},onUpdate:function(target,updatedValues,animation,elapsedInterval){target.style[transformStyle]="translate("+updatedValues.left+"px, "+updatedValues.top+"px) scale("+updatedValues.scale+")";
},onEnd:function(target,animation){}}],captureImageEffect:[{easing:"easeOutCubic",duration:.5,keyframes:{0:{fxScale:1,fxOpacity:1
},30:{fxOpacity:1},100:{fxScale:2,fxOpacity:0}},onStart:function(target,animation){var targetStyle=target.style;var targetPosition=getElementPosition(target);
var fxImg=document.createElement("img");var fxImgStyle=fxImg.style;var fxImgIndex=getRandomInt(1,4);fxImg.src=this.gfxUrl+"/effects/battle"+fxImgIndex+".png";
fxImgStyle.position="absolute";fxImgStyle.width=targetStyle.width;fxImgStyle.height=targetStyle.height;fxImgStyle.left=targetPosition[0];
fxImgStyle.top=targetPosition[1];target.parentNode.appendChild(fxImg);animation.addExtraData({fxImg:fxImg})},onUpdate:function(target,updatedValues,animation,elapsedInterval){
var extraData=animation.getExtraData();var fxImg=extraData.fxImg;var fxImgStyle=fxImg.style;fxImgStyle.opacity=updatedValues.fxOpacity;
fxImgStyle[transformStyle]="scale("+updatedValues.fxScale+")"},onEnd:function(target,animation){var extraData=animation.getExtraData();
extraData.fxImg.parentNode.removeChild(extraData.fxImg)}}],capture:[{easing:"easeOutCubic",duration:.1,keyframes:{0:{opacity:1},100:{
opacity:0}},onStart:function(target,animation){},onUpdate:function(target,updatedValues,animation,elapsedInterval){target.style.opacity=updatedValues.opacity;
},onEnd:function(target,animation){}},{easing:"easeOutCubic",duration:.5,keyframes:{0:{move:0,opacity:1},30:{opacity:1},100:{move:1,
opacity:0}},onStart:function(target,animation){},onUpdate:function(target,updatedValues,animation,elapsedInterval){var extraData=animation.getExtraData();
var attackDirection=extraData.attackDirection;var targetStyle=target.style;var x=updatedValues.move*extraData.squareSize*2;var y=updatedValues.move*extraData.squareSize*2;
switch(attackDirection){case"n":x=0;break;case"s":x=0;y*=-1;break;case"w":y=0;break;case"e":x*=-1;y=0;break;case"ne":x*=-1;break;case"nw":
break;case"se":x*=-1;y*=-1;break;case"sw":y*=-1;break}targetStyle.opacity=updatedValues.opacity;targetStyle.left=x+"px";targetStyle.top=y+"px";
},onEnd:function(target,animation){target.style.left="0px";target.style.top="0px"}},{easing:"easeOutCubic",duration:.5,keyframes:{
0:{move:0,rotation:0,opacity:1},65:{opacity:1},70:{opacity:0},75:{opacity:1},80:{opacity:0},95:{opacity:1},100:{move:1,rotation:90,
opacity:0}},onStart:function(target,animation){var targetStyle=target.style;var targetPosition=getElementPosition(target);targetStyle.left=targetPosition[0];
targetStyle.top=targetPosition[1]},onUpdate:function(target,updatedValues,animation,elapsedInterval){var extraData=animation.getExtraData();
var targetStyle=target.style;var targetPosition=getElementPosition(target);var x=updatedValues.move*extraData.squareSize*1;var y=0;
targetStyle.opacity=updatedValues.opacity;targetStyle[transformStyle]="translate("+x+"px, "+y+"px) rotate("+updatedValues.rotation+"deg)";
},onEnd:function(target,animation){target.style.left="0px";target.style.top="0px"}}],kingInCheck:[{easing:"easeLinear",duration:.3,
keyframes:{0:{scale:1,rotation:0,fxOpacity:0},25:{scale:1.25,rotation:10,fxOpacity:1},50:{rotation:-10},75:{rotation:10},90:{scale:1.25,
rotation:-10,fxOpacity:1},100:{scale:1,rotation:0,fxOpacity:0}},onStart:function(target,animation){var fxImg=document.createElement("img");
var targetStyle=target.style;var targetPosition=getElementPosition(target);var fxImgStyle=fxImg.style;var fxImgIndex=getRandomInt(1,4);
fxImg.src=this.gfxUrl+"/effects/check"+fxImgIndex+".png";fxImgStyle.position="absolute";fxImgStyle.width=targetStyle.width;fxImgStyle.height=targetStyle.height;
fxImgStyle.left=targetPosition[0];fxImgStyle.top=targetPosition[1];fxImgStyle.zIndex=parseInt(targetStyle.zIndex,10)+1;target.parentNode.appendChild(fxImg);
animation.addExtraData({piecePos:targetPosition,fxImg:fxImg})},onUpdate:function(target,updatedValues,animation,elapsedInterval){
var extraData=animation.getExtraData();target.style[transformStyle]="translate("+extraData.piecePos[0]+", "+extraData.piecePos[1]+") scale("+updatedValues.scale+") rotate("+updatedValues.rotation+"deg)";
extraData.fxImg.style.opacity=updatedValues.fxOpacity},onEnd:function(target,animation){var extraData=animation.getExtraData();extraData.fxImg.parentNode.removeChild(extraData.fxImg);
}},{easing:"easeLinear",duration:.3,keyframes:{0:{scale:1,rotation:0,fxOpacity:0},25:{scale:1.5,fxOpacity:1},50:{scale:1.15},75:{
scale:1.5},90:{fxOpacity:1},100:{scale:1,fxOpacity:0}},onStart:function(target,animation){var targetStyle=target.style;var targetPosition=getElementPosition(target);
var fxImg=document.createElement("img");var fxImgStyle=fxImg.style;var fxImgIndex=getRandomInt(1,4);fxImg.src=this.gfxUrl+"/effects/check"+fxImgIndex+".png";
fxImgStyle.position="absolute";fxImgStyle.width=targetStyle.width;fxImgStyle.height=targetStyle.height;fxImgStyle.left=targetPosition[0];
fxImgStyle.top=targetPosition[1];fxImgStyle.zIndex=parseInt(targetStyle.zIndex,10)+1;target.parentNode.appendChild(fxImg);animation.addExtraData({
piecePos:targetPosition,fxImg:fxImg})},onUpdate:function(target,updatedValues,animation,elapsedInterval){var extraData=animation.getExtraData();
target.style[transformStyle]="translate("+extraData.piecePos[0]+", "+extraData.piecePos[1]+") scale("+updatedValues.scale+")";extraData.fxImg.style.opacity=updatedValues.fxOpacity;
},onEnd:function(target,animation){var extraData=animation.getExtraData();extraData.fxImg.parentNode.removeChild(extraData.fxImg);
}}]}}}}});ChessCom(function(globals){"use strict";var requestAnimationFrame=window.requestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame;
var cancelAnimationFrame=window.cancelAnimationFrame||window.cancelRequestAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame;
var AnimationLoop=function AnimationLoop(){Object.keys(AnimationLoop.prototype).forEach(function(method){this[method]=this[method].bind(this);
},this);this.animations=[];this.callbacks=[];this.isTimeHiRes=!!(window.performance&&window.performance.now);this.isSupported=typeof requestAnimationFrame==="function";
};AnimationLoop.prototype={requestAnimationFrame:function(callback){if(this.animations.length){this.callbacks[this.callbacks.length]=callback;
return callback}else{return requestAnimationFrame(callback)}},cancelAnimationFrame:function(frameId){if(typeof frameId==="function"){
for(var i=0;i<this.callbacks.length;i++){if(this.callbacks[i]===frameId){this.callbacks.splice(i,1);break}}}else{cancelAnimationFrame(frameId);
}},isAnimating:function(){var isAnimating=false;if(this.animations.length>0){isAnimating=true}else{var now=this.isTimeHiRes?window.performance.now():Date.now();
if(now-this.currentTime<250){isAnimating=true}}return isAnimating},isBlocking:function(){for(var i=0;i<this.animations.length;i++){
if(this.animations[i]._options.isBlocking){return true}}return false},canAnimate:function(){var hidden;if(typeof document.hidden!=="undefined"){
hidden="hidden"}else if(typeof document.mozHidden!=="undefined"){hidden="mozHidden"}else if(typeof document.msHidden!=="undefined"){
hidden="msHidden"}else if(typeof document.webkitHidden!=="undefined"){hidden="webkitHidden"}if(hidden){return!document[hidden]}if(document.hasFocus){
return document.hasFocus()}},add:function(animation){this.animations[this.animations.length]=animation;if(this.animations.length===1){
this.frameId=requestAnimationFrame(this.frame)}},frame:function(currentTime){this.currentTime=this.isTimeHiRes?currentTime:Date.now();
if(this.animations.length===1){this.animate(this.animations[0],0)}else{this.animations.forEach(this.animate)}var length=this.callbacks.length;
if(this.animations.length){if(length){this.callbacks.shift()(this.currentTime)}this.frameId=requestAnimationFrame(this.frame)}else if(length){
for(var i=0;i<length;i++){this.callbacks.shift()(this.currentTime)}}},animate:function(animation,index){var elapsedInterval=0;var keyframeElapsedInterval=0;
var elapsedPercentage=0;var property;var updatedProperties={};var fromValue=null;var toValue=null;var startKeyframe=null;var endKeyframe=null;
if(animation._ended){elapsedInterval=1}else{elapsedInterval=(this.currentTime-animation._startTime)/(animation._endTime-animation._startTime);
if(elapsedInterval>1){elapsedInterval=1}else if(elapsedInterval<0){elapsedInterval=0}}elapsedPercentage=parseInt(elapsedInterval*100,10);
for(var property in animation._animProperties){fromValue=null;toValue=null;for(var i=1;i<animation._animProperties[property].length;i++){
startKeyframe=animation._animProperties[property][i-1];endKeyframe=animation._animProperties[property][i];if(elapsedPercentage>=startKeyframe&&elapsedPercentage<=endKeyframe){
fromValue=animation._keyframes[startKeyframe][property];toValue=animation._keyframes[endKeyframe][property];break}}keyframeElapsedInterval=(elapsedPercentage-startKeyframe)/(endKeyframe-startKeyframe);
updatedProperties[property]=animation.easing(keyframeElapsedInterval,fromValue,toValue-fromValue,1);if(!animation._isHTMLElement){
animation._target[property]=updatedProperties[property]}}if(animation._onUpdate){animation._onUpdate(animation._target,updatedProperties,animation,elapsedInterval);
}if(animation._onElapsedPercentageStack&&animation._onElapsedPercentageStack.length&&animation._onElapsedPercentageStack[0][0]<=elapsedPercentage){
for(var percentageCallbackIndex in animation._onElapsedPercentageStack[0][1]){animation._onElapsedPercentageStack[0][1][percentageCallbackIndex]();
}animation._onElapsedPercentageStack.shift()}if(animation._stopped){if(animation._onStop){animation._onStop(animation._target,animation._nextProperties,animation,elapsedInterval);
}this.animations.splice(index,1)}else if(elapsedInterval===1){this.animations.splice(index,1);if(animation._onEnd){if(animation._ended){
animation._onEnd()}else{this.requestAnimationFrame(animation._onEnd)}}}},stopAll:function(){for(var i=0;i<this.animations.length;i++){
this.animations[i]._stopped=true}},endAll:function(callback){for(var i=0;i<this.animations.length;i++){this.animations[i]._ended=true;
}if(callback){this.requestAnimationFrame(callback)}}};globals.AnimationLoop=new AnimationLoop});ChessCom(function(globals){"use strict";
var AnimationLoop=globals.AnimationLoop;var easingFunctions=globals.AnimationEasings;function mixinAll(target){var mixins=Array.prototype.slice.call(arguments,1);
var len=mixins.length;var empty={};for(var i=0,props;i<len;i+=1){props=mixins[i];for(var member in props){if(!(i in empty)){target[member]=props[member];
}}}return target}var Animation=globals.Animation=function Animation(target,options){if(!target){throw"You need to specify an animation target.";
}this._target=target;this._options={duration:0,easing:"easeLinear",isBlocking:true};for(var option in options){this._options[option]=options[option];
}this._keyframes=null;this._animProperties=null;this._startTime=0;this._endTime=0;this._stopped=false;this._ended=false;this._onStart=null;
this._onUpdate=null;this._onStop=null;this._onEnd=null;this._onElapsedPercentageStack=null;this.easing=easingFunctions[this._options.easing];
this.isHTMLElement=target instanceof HTMLElement;this._extraData=null};Animation.prototype.target=function(target){if(target){this._target=target;
this._isHTMLElement=target instanceof HTMLElement;return this}else{return this._target}};Animation.prototype.addKeyframes=function(keyframes){
if(this._keyframes===null){this._keyframes={}}for(var key in keyframes){if(this._keyframes[key]){this._keyframes[key]=mixinAll({},this._keyframes[key],keyframes[key]);
}else{this._keyframes[key]=keyframes[key]}}};Animation.prototype.getKeyframes=function(){return this._keyframes};Animation.prototype.addExtraData=function(data,append){
if(append===undefined){append=true}if(append){if(!this._extraData){this._extraData={}}this._extraData=mixinAll({},this._extraData,data);
}else{this._extraData=data}};Animation.prototype.getExtraData=function(){return this._extraData};Animation.prototype.onStart=function(callback,context){
if(!callback){return}if(context){this._onStart=callback.bind(context)}else{this._onStart=callback}return this};Animation.prototype.onUpdate=function(callback,context){
if(!callback){return}if(context){this._onUpdate=callback.bind(context)}else{this._onUpdate=callback}return this};Animation.prototype.onStop=function(callback,context){
if(!callback){return}if(context){this._onStop=callback.bind(context)}else{this._onStop=callback}return this};Animation.prototype.onEnd=function(callback,context){
if(!callback){return}if(context){this._onEnd=callback.bind(context,this._target,this)}else{this._onEnd=callback.bind(this,this._target,this);
}return this};Animation.prototype.onElapsedPercentage=function(percentage,callback,context){var contextCallback;if(context){contextCallback=callback.bind(context);
}else{contextCallback=callback.bind(this)}if(!this._onElapsedPercentageStack||this._onElapsedPercentageStack.length===0){this._onElapsedPercentageStack=[[percentage,[contextCallback]]];
}else{for(var i=0;i<this._onElapsedPercentageStack.length;i++){if(this._onElapsedPercentageStack[i][0]===percentage){this._onElapsedPercentageStack[i][1].push(contextCallback);
return this}}for(var i=0;i<this._onElapsedPercentageStack.length;i++){if(percentage<this._onElapsedPercentageStack[i][0]){this._onElapsedPercentageStack.splice(i,0,[percentage,[contextCallback]]);
return this}else if(i===this._onElapsedPercentageStack.length-1){this._onElapsedPercentageStack.push([percentage,[contextCallback]]);
return this}}}};Animation.prototype.start=function(){if(!this._keyframes){throw'You need to define the "keyframes" values.'}this._startTime=window.performance&&window.performance.now?window.performance.now():Date.now();
this._endTime=this._startTime+this._options.duration*1e3;if(this._onStart){this._onStart(this._target,this)}var sortedKeyframes=[];
for(var keyframe in this._keyframes){if(this._keyframes.hasOwnProperty(keyframe)){sortedKeyframes.push(parseInt(keyframe,10))}}sortedKeyframes.sort(function(a,b){
return a-b});this._animProperties={};for(var property in this._keyframes[0]){if(this._keyframes[0].hasOwnProperty(property)){this._animProperties[property]=[];
}}for(var i in sortedKeyframes){var sortedKey=sortedKeyframes[i];if(this._keyframes.hasOwnProperty(sortedKey)){for(var property in this._animProperties){
if(this._keyframes[sortedKey].hasOwnProperty(property)){this._animProperties[property].push(sortedKey)}}}}AnimationLoop.add(this);
return this};Animation.prototype.stop=function(){this._stopped=true;return this};Animation.prototype.end=function(){this._ended=true;
return this};Animation.endAll=AnimationLoop.endAll;Animation.stopAll=AnimationLoop.stopAll;Animation.isAnimating=AnimationLoop.isAnimating;
Animation.isBlocking=AnimationLoop.isBlocking;Animation.canAnimate=function(){return AnimationLoop.canAnimate()};Animation.isSupported=function(){
return AnimationLoop.isSupported}});if(!window.ChessCom){window.ChessCom=function ChessCom(callback){callback(window)}}ChessCom(function(globals){
if(globals.ChessColorScheme){return}var ChessColorScheme=globals.ChessColorScheme={};ChessColorScheme["default"]=["#B58863","#F0D9B5",null,".png","#ffff33"];
ChessColorScheme["8_bit"]=["#6a9b41","#f3f3f4","8_bit",".png","#ffff33"];ChessColorScheme["bases"]=["#c26b38","#efcca1","bases",".jpg","#f5cc2a"];
ChessColorScheme["blue"]=["#4D6D92","#ECECD7","blue",".png","#00a5ff"];ChessColorScheme["brown"]=["#B58863","#F0D9B5","brown",".png","#ffff33"];
ChessColorScheme["bubblegum"]=["#f9cdd3","#fff3f3","bubblegum",".png","#de5d6f"];ChessColorScheme["burled_wood"]=["#895132","#d9b088","burled_wood",".jpg","#ee9016"];
ChessColorScheme["dark_wood"]=["#8d675e","#e7cdb2","dark_wood",".jpg","#cc9122"];ChessColorScheme["dash"]=["#6b3a27","#bd9257","dash",".jpg","#eca722"];
ChessColorScheme["glass"]=["#282f3f","#667188","glass",".png","#5b91b3"];ChessColorScheme["graffiti"]=["#b96f18","#aeaeae","graffiti",".jpg","#f39011"];
ChessColorScheme["green"]=["#779952","#edeed1","green",".png","#ffff33"];ChessColorScheme["icy_sea"]=["#7a9db2","#c5d5dc","icy_sea",".jpg","#5ed7f1"];
ChessColorScheme["light"]=["#aaaaaa","#dcdcdc","light",".png","#a4b8c4"];ChessColorScheme["lolz"]=["#909898","#e0e9e9","lolz",".jpg","#a3becd"];
ChessColorScheme["marble"]=["#706b66","#c7bdaa","marble",".jpg","#f0db86"];ChessColorScheme["metal"]=["#6e6e6e","#c9c9c9","metal",".jpg","#a3becd"];
ChessColorScheme["nature"]=["#8c976e","#c3d1a4","translucent",".png","#eef396"];ChessColorScheme["neon"]=["#636363","#b9b9b9","neon",".png","#6d90a6"];
ChessColorScheme["newspaper"]=["#5a5956","#5a5956","newspaper",".jpg","#99976e"];ChessColorScheme["orange"]=["#D08B18","#FCE4B2","orange",".png","#ffff33"];
ChessColorScheme["overlay"]=["#789ebd","#4878a0","overlay",".png","#0d9acf"];ChessColorScheme["parchment"]=["#B58863","#F0D9B5","parchment",".jpg","#d8cc66"];
ChessColorScheme["purple"]=["#8877B7","#EFEFEF","purple",".png"];ChessColorScheme["red"]=["#BA5546","#F0D8BF","red",".png","#f8f893"];
ChessColorScheme["sand"]=["#b8a590","#e5d3c4","sand",".jpg","#e2bc87"];ChessColorScheme["sky"]=["#c2d7e2","#efefef","sky",".png","#65daf7"];
ChessColorScheme["stone"]=["#666463","#c8c3bd","stone",".jpg","#36525f"];ChessColorScheme["tan"]=["#D08B18","#FCE4B2","tan",".png","#f7d84a"];
ChessColorScheme["tournament"]=["#316549","#ebece8","tournament",".jpg","#a4c25b"];ChessColorScheme["translucent"]=["#667188","#282f3f","translucent",".png","#5b91b3"];
ChessColorScheme["walnut"]=["#835f42","#c0a684","walnut",".jpg","#d1a52d"];ChessColorScheme["wood"]=["#8d675e","#e7cdb2","dark_wood",".jpg","#cc9122"];
ChessColorScheme["grey"]=["#aaaaaa","#dcdcdc","light",".png","#a4b8c4"];ChessColorScheme["pink"]=["#f9cdd3","#fff3f3","bubblegum",".png","#de5d6f"];
ChessColorScheme["natural"]=["#D08B18","#FCE4B2","tan",".png","#f0e464"];ChessColorScheme["winboard"]=["#316549","#ebece8","tournament",".jpg","#a4c25b"];
ChessColorScheme["blackwhite"]=["#667188","#282f3f","translucent",".png","#5b91b3"];ChessColorScheme["marbleblue"]=["#c2d7e2","#efefef","marbleblue",".jpg","#65daf7"];
ChessColorScheme["marblebrown"]=["#b96f18","#aeaeae","graffiti",".jpg","#f39011"];ChessColorScheme["marblegreen"]=["#706b66","#c7bdaa","marblegreen",".jpg","#f0db86"];
ChessColorScheme["wooddark"]=["#895132","#d9b088","burled_wood",".jpg","#ee9016"];ChessColorScheme["woodlight"]=["#B58863","#F0D9B5","parchment",".jpg","#d8cc66"];
ChessColorScheme["woodmid"]=["#8d675e","#e7cdb2","dark_wood",".jpg","#cc9122"];ChessColorScheme["woodolive"]=["#6e6e6e","#c9c9c9","woodolive",".jpg","#a3becd"];
});if(!window.ChessCom){window.ChessCom=function ChessCom(callback){callback(window)}}ChessCom(function(globals){if(globals.ChessPieceStyle&&globals.ChessPiece3dInfo){
return}var ChessPieceStyle=globals.ChessPieceStyle={};var ChessPiece3dInfo=globals.ChessPiece3dInfo={};ChessPieceStyle["modern2"]={
imgPath:"modern",imgFormat:"png"};ChessPieceStyle["lines"]={imgPath:"alpha",imgFormat:"png"};ChessPieceStyle["3dwood"]={imgPath:"3d_wood",
imgFormat:"png"};ChessPieceStyle["3dplastic"]={imgPath:"3d_plastic",imgFormat:"png"};ChessPieceStyle["3dchesskid"]={imgPath:"3d_chesskid",
imgFormat:"png"};ChessPiece3dInfo["3dwood"]={p:97/94,r:113/94,n:106/94,b:112/94,q:121/94,k:123/94};ChessPiece3dInfo["3d_staunton"]={
p:98/94,r:114/94,n:106/94,b:112/94,q:121/94,k:123/94};ChessPiece3dInfo["3dplastic"]={p:97/94,r:113/94,n:106/94,b:112/94,q:121/94,
k:123/94};ChessPiece3dInfo["3dchesskid"]={p:97/94,r:109/94,n:120/94,b:118/94,q:131/94,k:135/94}});ChessCom(function(globals){if(globals.useFen&&globals.getFen&&globals.chessMoveNotation){
return}globals.useFen=useFen;globals.getFen=getFen;globals.chessMoveNotation=chessMoveNotation;var fenValidators=[null,/^[wb]$/,/^([A-HK]?[A-HQ]?[a-hk]?[a-hq]?|\-)$/,/^(\-|[a-h][36])$/,/^\d+$/,/^\d+$/];
function disambiguate960Rook(color,right,gameSetup){var dir=right?-1:1;var rank=color==1?"1":"8";var startFile=right?104:97;var i;
var count=0;var possiblePiece;var piece;var rookFile;var curFile;for(i=startFile;count<8;i+=dir){curFile=String.fromCharCode(i);possiblePiece=gameSetup.areas[curFile+rank].pieces[0];
if(typeof possiblePiece!=="undefined"){piece=gameSetup.pieces[possiblePiece];if(piece.color==color){if(piece.type==="r"){if(typeof rookFile==="string"){
return}rookFile=curFile}else if(piece.type==="k"){return rookFile}}}++count}}function determineCastleSide(color,file,gameSetup){var dir=1;
var rank=color==1?"1":"8";var startFile=97;var i;var count=0;var possiblePiece;var piece;var kingFile;var curFile;file=file.toLowerCase();
if(/[a-h]/.test(file)){for(i=startFile;count<8;i+=dir){curFile=String.fromCharCode(i);possiblePiece=gameSetup.areas[curFile+rank].pieces[0];
if(typeof possiblePiece!=="undefined"){piece=gameSetup.pieces[possiblePiece];if(piece.color==color&&piece.type==="k"){kingFile=curFile;
break}}++count}}if(kingFile){if(file>kingFile){return"right"}else{return"left"}}}function useFen(gameSetup,fen){gameSetup.clear();
var parts=fen.split(" ");if(parts.length<3){return false}for(var i=0;i<parts.length;i++){if(fenValidators[i]&&!parts[i].match(fenValidators[i])){
return false}}var fenPieces=parts[0];var fenSide=parts[1];var fenCastling=parts[2]||"-";var fenEnpassant=parts[3]||"-";var fenPly50=Number(parts[4])||0;
var fenMove=Number(parts[5])||1;var castleInfo={1:{},2:{}};var rookFile;var castlingSide;var castlingColor;var castling="";var i=1;
var j=1;var index=0;while(index<fenPieces.length){var c=fenPieces.charAt(index++);if(c>="0"&&c<="9"){j+=1*c}else if(c=="/"){i++;j=1;
}else if(c>="A"&&c<="Z"||c>="a"&&c<="z"){var color=c>="A"&&c<="Z"?1:2;var areaId=String.fromCharCode(96+j)+(9-i);gameSetup.createPiece(color,c.toLowerCase(),areaId);
j++}else{return false}}gameSetup.flags["sm"]=fenSide=="w"?1:2;if(String(gameSetup.variant).toLowerCase()==="chess960"){for(i=fenCastling.length-1;i>=0;--i){
castlingSide=undefined;rookFile=undefined;if(fenCastling[i]==="K"){rookFile=disambiguate960Rook(1,true,gameSetup);castlingSide="right";
castlingColor=1}else if(fenCastling[i]==="Q"){rookFile=disambiguate960Rook(1,false,gameSetup);castlingSide="left";castlingColor=1;
}else if(fenCastling[i]==="k"){rookFile=disambiguate960Rook(2,true,gameSetup);castlingSide="right";castlingColor=2}else if(fenCastling[i]==="q"){
rookFile=disambiguate960Rook(2,false,gameSetup);castlingSide="left";castlingColor=2}else if(/[a-h]/i.test(fenCastling[i])){rookFile=fenCastling[i];
if(rookFile>="a"){castlingColor=2}else{castlingColor=1}castlingSide=determineCastleSide(castlingColor,rookFile,gameSetup)}if(rookFile&&castlingSide&&castlingColor){
if(castlingColor==1){rookFile=rookFile.toLowerCase()}else{rookFile=rookFile.toUpperCase()}castleInfo[castlingColor][castlingSide]=rookFile;
}}castling+=castleInfo["1"]["right"]||"-";castling+=castleInfo["1"]["left"]||"-";castling+=castleInfo["2"]["right"]||"-";castling+=castleInfo["2"]["left"]||"-";
}else{castling+=fenCastling.indexOf("K")>-1?"k":"-";castling+=fenCastling.indexOf("Q")>-1?"q":"-";castling+=fenCastling.indexOf("k")>-1?"K":"-";
castling+=fenCastling.indexOf("q")>-1?"Q":"-"}gameSetup.flags["cs"]=castling;gameSetup.flags["ep"]=fenEnpassant;gameSetup.movecount=(fenMove-1)*2;
gameSetup.fiftyMoveCount=fenPly50;if(fenSide=="b"){gameSetup.movecount++}gameSetup.promotedPieces={};gameSetup.hands={1:"",2:""};if(parts[6]&&parts[6]!=="-"){
var holdings=parts[6].split("");var piece,pieceType;for(var i=0;i<holdings.length;i++){piece=holdings[i];pieceType=piece.toLowerCase();
gameSetup.hands[pieceType===piece?"2":"1"]+=pieceType}}if(parts[7]){var promotedAreas=parts[7].split(",");for(var i=0;i<promotedAreas.length;i++){
gameSetup.promotedPieces[promotedAreas[i]]=true}}return true}function getFen(gameSetup){var fen="";var counter=0;for(var i=1;i<=8;i++){
for(var j=1;j<=8;j++){var areaId=String.fromCharCode(j+96)+(9-i);var bitem=gameSetup.areas[areaId].pieces[0];if(bitem){var piece=gameSetup.pieces[bitem];
if(counter>0){fen+=counter}fen+=piece.color==1?piece.type.toUpperCase():piece.type;counter=0}else{counter++}}if(counter>0){fen+=counter;
}if(i<8){fen+="/"}counter=0}var castling="";var cs=gameSetup.flags["cs"];for(var n=0;n<cs.length;n++){var cn=cs.charAt(n);if(cn!="-"){
switch(cn){case"K":castling+="k";break;case"Q":castling+="q";break;case"A":castling+="a";break;case"B":castling+="b";break;case"C":
castling+="c";break;case"D":castling+="d";break;case"E":castling+="e";break;case"F":castling+="f";break;case"G":castling+="g";break;
case"H":castling+="h";break;case"k":castling+="K";break;case"q":castling+="Q";break;case"a":castling+="A";break;case"b":castling+="B";
break;case"c":castling+="C";break;case"d":castling+="D";break;case"e":castling+="E";break;case"f":castling+="F";break;case"g":castling+="G";
break;case"h":castling+="H";break}}}if(castling==""){castling+="-"}fen+=" "+(gameSetup.flags["sm"]==1?"w":"b")+" "+castling+" "+gameSetup.flags["ep"]+" "+(gameSetup.fiftyMoveCount||0)+" "+(Math.floor(gameSetup.movecount/2)+1);
return fen}function chessMoveNotation(pieceId,fromSquare,toSquare,gameSetup,additionalInfo,chessRules,capture){var pieceAt=gameSetup.areas[toSquare].pieces[0]?gameSetup.pieces[gameSetup.areas[toSquare].pieces[0]]:null;
var isDrop=fromSquare===globals.Variants.DROP_MOVE_FROM;var moveText="";var disambiguityText="";if(isDrop){var pieceType=additionalInfo.toUpperCase();
moveText=(pieceType==="P"?"":pieceType)+"@"+toSquare}else{var pieceType=gameSetup.pieces[pieceId].type;var pieceColor=gameSetup.pieces[pieceId].color;
{var ambi=[];for(p in gameSetup.pieces){if(p==pieceId)continue;var piece=gameSetup.pieces[p];if(!piece.area){continue}if(piece.type==pieceType){
if(piece.color==pieceColor){ambi.push(p)}}}if(ambi.length>0){var fromSquares=[];for(var i=0;i<ambi.length;i++){var p=ambi[i];var area=gameSetup.pieces[p].area;
if(chessRules.isLegalMove(gameSetup,area,toSquare)){fromSquares.push(area)}}if(fromSquares.length>0){var i;for(i=0;i<fromSquares.length;i++){
if(fromSquares[i].charAt(0)==fromSquare.charAt(0)){break}}if(i==fromSquares.length){disambiguityText=fromSquare.charAt(0)}else{for(i=0;i<fromSquares.length;i++){
if(fromSquares[i].charAt(1)==fromSquare.charAt(1)){break}}if(i==fromSquares.length){disambiguityText=fromSquare.charAt(1)}else{disambiguityText=fromSquare;
}}}}}var shortCastle=false;var longCastle=false;if(pieceType=="k"){if(fromSquare.charAt(1)=="1"&&toSquare.charAt(1)=="1"||fromSquare.charAt(1)=="8"&&toSquare.charAt(1)=="8"){
if(pieceAt&&pieceAt.type=="r"&&pieceAt.color==pieceColor){if(fromSquare.charCodeAt(0)<toSquare.charCodeAt(0)){shortCastle=true}else{
longCastle=true}}else if(Math.abs(toSquare.charCodeAt(0)-fromSquare.charCodeAt(0))>1){if(fromSquare.charCodeAt(0)<toSquare.charCodeAt(0)){
shortCastle=true}else{longCastle=true}}}}if(shortCastle){moveText="O-O"}else if(longCastle){moveText="O-O-O"}else{if(pieceType=="p"||additionalInfo){
if(!additionalInfo&&(toSquare.charAt(1)=="1"||toSquare.charAt(1)=="8"))additionalInfo="q";if(fromSquare.charAt(0)!=toSquare.charAt(0))moveText+=fromSquare.charAt(0)+"x";
}else{moveText+=pieceType.toUpperCase();moveText+=disambiguityText;if(capture)moveText+="x"}moveText+=toSquare;if(additionalInfo)moveText+="="+additionalInfo.toUpperCase();
}}var sideToMove=gameSetup.flags["sm"];var kingarea=null;if(isDrop&&sideToMove===1){additionalInfo=additionalInfo.toUpperCase()}chessRules.makeMove(pieceId,toSquare,gameSetup,additionalInfo,false,null);
if(chessRules.isCheck(gameSetup)){if(chessRules.isMate(gameSetup,true)){moveText+="#"}else{moveText+="+"}}chessRules.takeBackMove(pieceId,toSquare,gameSetup,additionalInfo,false);
return moveText}});ChessCom(function(globals){if(globals.GameRules){return}var GameRules=globals.GameRules={};GameRules.Base=function(){};
GameRules.Base.prototype={initialize:function(){},isLegalPosition:function(gamesetup){},isLegalMove:function(gamesetup,fromId,areaId,additionalInfo,legalMoveCheck){},
onDropPiece:function(what,where,gamesetup){},defineAreas:function(gameSetup){},clearArea:function(area,gamesetup){if(gamesetup.areas[area]){
var piecesAtArea=gamesetup.areas[area].pieces;while(piecesAtArea&&piecesAtArea.length>0){var piece=piecesAtArea.pop();if(gamesetup.pieces[piece]){
gamesetup.pieces[piece].area=null}}}},takeBackMove:function(what,where,gamesetup,additionalInfo,noswitchside){},makeMove:function(what,where,gamesetup,additionalInfo,noswitchside,text){},
makeMoves:function(gamesetup,moves,text){for(var i=0;i<moves.length;i+=4){var what=moves.substring(i,i+2);var where=moves.substring(i+2,i+4);
var additionalInfo=null;if(moves.length>i+4&&moves.substring(i+4,i+5)=="("){var closingBracket=moves.indexOf(")",i+4);additionalInfo=moves.substring(i+5,closingBracket);
i+=additionalInfo.length+2}this.makeMove(what,where,gamesetup,additionalInfo,false,text)}},isCheck:function(gamesetup){},isMate:function(gamesetup,isCheck){}
}});ChessCom(function(globals){if(globals.GameSetup){return}var GameSetup=globals.GameSetup=function GameSetup(){this.pieces={};this.areas={};
this.flags={};this.movecount=0;this.fiftyMoveCount=0;this.idSequencer=0;this.tbType=[];this.tbFrom=[];this.tbCaptured=[];this.tbEnpassant=[];
this.tbIsCastling=[];this.tbCastling=[]};GameSetup.prototype={clone:function(){var gs=new GameSetup;gs.idSequencer=this.idSequencer;
for(var piece in this.pieces){gs.pieces[piece]={};gs.pieces[piece].color=this.pieces[piece].color;gs.pieces[piece].type=this.pieces[piece].type;
gs.pieces[piece].area=this.pieces[piece].area}for(var area in this.areas){gs.areas[area]={};gs.areas[area].pieces=[];for(var piece in this.areas[area].pieces)if(typeof this.areas[area].pieces[piece]!="function")gs.areas[area].pieces.push(this.areas[area].pieces[piece]);
}for(var flag in this.flags)gs.flags[flag]=this.flags[flag];for(var n=0;n<this.tbFrom.length;n++){gs.tbFrom.push(this.tbFrom[n]);gs.tbType.push(this.tbType[n]);
gs.tbCaptured.push(this.tbCaptured[n]);gs.tbEnpassant.push(this.tbEnpassant[n]);gs.tbCastling.push(this.tbCastling[n])}gs.movecount=this.movecount;
gs.fiftyMoveCount=this.fiftyMoveCount;gs.variant=this.variant;return gs},clear:function(){this.pieces={};for(var area in this.areas)this.areas[area].pieces.length=0;
this.flags={};this.movecount=0;this.fiftyMoveCount=0;this.tbType=[];this.tbFrom=[];this.tbCaptured=[];this.tbEnpassant=[];this.tbIsCastling=[];
this.tbCastling=[];this.idSequencer=0},createArea:function(areaId){this.areas[areaId]={};this.areas[areaId].pieces=[]},createPiece:function(color,type,areaId){
var piece={};var id=this.idSequencer<10?"0"+this.idSequencer:this.idSequencer;this.idSequencer++;piece.color=color;piece.type=type;
piece.area=areaId;this.pieces[id]=piece;this.areas[areaId].pieces.push(id);return piece},assign:function(gs){this.clear();this.idSequencer=gs.idSequencer;
for(var piece in gs.pieces){this.pieces[piece]={};this.pieces[piece].color=gs.pieces[piece].color;this.pieces[piece].type=gs.pieces[piece].type;
this.pieces[piece].area=gs.pieces[piece].area}for(var area in gs.areas){this.areas[area]={};this.areas[area].pieces=[];for(var piece in gs.areas[area].pieces){
if(typeof gs.areas[area].pieces[piece]!="function"){this.areas[area].pieces.push(gs.areas[area].pieces[piece])}}}for(var n=0;n<gs.tbFrom.length;n++){
this.tbFrom.push(gs.tbFrom[n]);this.tbType.push(gs.tbType[n]);this.tbCaptured.push(gs.tbCaptured[n]);this.tbEnpassant.push(gs.tbEnpassant[n]);
this.tbCastling.push(gs.tbCastling[n])}for(var flag in gs.flags){this.flags[flag]=gs.flags[flag]}this.movecount=gs.movecount;this.fiftyMoveCount=gs.fiftyMoveCount;
}}});ChessCom(function(globals){if(globals.GameRulesInstance){return}var useFen=globals.useFen;var getFen=globals.getFen;var GameRules=globals.GameRules;
function arrayValue(array,x,y){if(array[x])if(array[x][y])return array[x][y];return null}function signum(n){if(n==0)return 0;else if(n>0)return 1;else return-1;
}GameRules.ChessEditor=function(opts){if(!opts)opts={};this._legalPositionCheck=opts.legalPositionCheck||"full";this._legalMoveCheck=opts.legalMoveCheck||"full";
this.promotion_what="-";this.promotion_where="-";this.promotion_gamesetup=null;this.positionEditor=true};GameRules.ChessEditor.prototype={
makeMoves:GameRules.Base.prototype.makeMoves,clearArea:GameRules.Base.prototype.clearArea,defineAreas:function(gamesetup){for(var j=8;j>=1;j--)for(var i=1;i<=8;i++){
var areaid=String.fromCharCode(96+i)+j;gamesetup.createArea(areaid)}},getFen:function(gamesetup){return getFen(gamesetup)},useFen:function(gamesetup,fen){
return useFen(gamesetup,fen)},createBoardArray:function(gamesetup){var board=new Array(9);for(var i=1;i<=8;i++)board[i]=new Array(null,null,null,null,null,null,null,null,null);
for(var pieceid in gamesetup.pieces){{var areaid=gamesetup.pieces[pieceid].area;if(areaid){var wherex=areaid.charCodeAt(0)-96;var wherey=areaid.charCodeAt(1)-48;
if(wherex>=1&&wherex<=8&&wherey>=1&&wherey<=8)board[wherex][wherey]=pieceid}}}return board},isLegalPosition:function(gamesetup){if(this._legalPositionCheck=="off"||this._legalPositionCheck=="sideonly")return{};
{for(var pieceid in gamesetup.pieces){var piece=gamesetup.pieces[pieceid];if(piece.type=="p"&&piece.area){var rank=piece.area.charCodeAt(1)-48;
if(rank==1||rank==8)return null}}}if(this._legalPositionCheck=="pawns")return{};if(this._legalPositionCheck!=="analysis"){var whitekings=0;
var blackkings=0;for(var pieceid in gamesetup.pieces){var piece=gamesetup.pieces[pieceid];if(piece.type=="k"&&piece.area)if(piece.color==1)whitekings++;else if(piece.color==2)blackkings++;
}if(whitekings!=1||blackkings!=1)return null}if(this._legalPositionCheck=="partial")return{};if(this._legalPositionCheck=="full"||this._legalPositionCheck=="analysis"){
var sideToMove=gamesetup.flags["sm"];for(var pieceid in gamesetup.pieces){var piece=gamesetup.pieces[pieceid];{if(piece.type=="k"&&piece.color==3-sideToMove&&this.isAttacked(piece.area,sideToMove,gamesetup))return null;
}}var cs=gamesetup.flags["cs"];var castleRegExp=/[KkQq\-]{4}/;if(!cs.match(castleRegExp))return null}return{}},isLegalMove:function(gamesetup,fromId,areaId,additionalInfo,lmc){
var legalMoveCheck=lmc?lmc:this._legalMoveCheck;if(this.positionEditor)return{};if(!fromId){return null}var pieceId=gamesetup.areas[fromId].pieces[0]||null;
if(!pieceId){return null}var piece=gamesetup.pieces[pieceId];var sideToMove=gamesetup.flags["sm"];var availCastles=gamesetup.flags["cs"];
var pieceColor=piece.color;var board=this.createBoardArray(gamesetup);var fromx=fromId.charCodeAt(0)-96;var fromy=fromId.charCodeAt(1)-48;
var tox=areaId.charCodeAt(0)-96;var toy=areaId.charCodeAt(1)-48;var piecetype=piece.type;var toempty=!board[tox][toy];var capture=board[tox][toy]&&gamesetup.pieces[board[tox][toy]].color!=pieceColor;
var direction=pieceColor==1?1:-1;var canMove=false;var pawnPromotion=false;var castling=null;if(fromx==tox&&fromy==toy){return null;
}if(sideToMove!=pieceColor&&legalMoveCheck!="off")return null;if(legalMoveCheck=="off"||legalMoveCheck=="sideonly"){if(piecetype=="p")if(toy==1&&pieceColor==2||toy==8&&pieceColor==1)return{
pawnPromotion:true};return{}}var minimalMoveCheck=legalMoveCheck=="minimal";var notFullMoveCheck=legalMoveCheck!="full";if(piecetype=="p"){
if(tox==fromx&&toy==fromy+direction&&(toempty||minimalMoveCheck))canMove=true;else if(tox==fromx&&toy==fromy+direction+direction&&(toempty||minimalMoveCheck)&&(!board[fromx][fromy+direction]||minimalMoveCheck)&&(pieceColor==1&&fromy==2||pieceColor==2&&fromy==7))canMove=true;else if((capture||minimalMoveCheck)&&Math.abs(tox-fromx)==1&&toy==fromy+direction)canMove=true;else if(toempty&&Math.abs(tox-fromx)==1&&toy==fromy+direction&&areaId==gamesetup.flags["ep"])canMove=true;
if(canMove&&(toy==1&&pieceColor==2||toy==8&&pieceColor==1))pawnPromotion=true}if(piecetype=="k"){var shortCastle;var longCastle;if(pieceColor==1){
shortCastle=availCastles.indexOf("k")!=-1||notFullMoveCheck&&board[8][1]&&gamesetup.pieces[board[8][1]].type=="r"&&gamesetup.pieces[board[8][1]].color=="1";
longCastle=availCastles.indexOf("q")!=-1||notFullMoveCheck&&board[1][1]&&gamesetup.pieces[board[1][1]].type=="r"&&gamesetup.pieces[board[1][1]].color=="1";
}else{shortCastle=availCastles.indexOf("K")!=-1||notFullMoveCheck&&board[8][8]&&gamesetup.pieces[board[8][8]].type=="r"&&gamesetup.pieces[board[8][8]].color=="2";
longCastle=availCastles.indexOf("Q")!=-1||notFullMoveCheck&&board[1][8]&&gamesetup.pieces[board[1][8]].type=="r"&&gamesetup.pieces[board[1][8]].color=="2";
}if(Math.abs(tox-fromx)<=1&&Math.abs(toy-fromy)<=1&&(toempty||capture||minimalMoveCheck))canMove=true;else if(shortCastle&&(pieceColor==1&&fromy==1&&toy==1||pieceColor==2&&fromy==8&&toy==8)&&fromx==5&&tox==7&&(toempty&&(board[8][fromy]&&gamesetup.pieces[board[8][fromy]].type=="r"&&gamesetup.pieces[board[8][fromy]].color==pieceColor)&&!board[6][fromy])){
var kingarea1=pieceColor==1?"e1":"e8";var kingarea2=pieceColor==1?"f1":"f8";var kingarea3=pieceColor==1?"g1":"g8";if(!this.isAttacked(kingarea1,3-pieceColor,gamesetup)&&!this.isAttacked(kingarea2,3-pieceColor,gamesetup)&&!this.isAttacked(kingarea3,3-pieceColor,gamesetup)||minimalMoveCheck){
canMove=true;if(fromId===kingarea1&&areaId===kingarea3){if(areaId==="g1"){castling={fromAreaId:"h1",toAreaId:"f1"}}else{castling={
fromAreaId:"h8",toAreaId:"f8"}}}}}else if(longCastle&&(pieceColor==1&&fromy==1&&toy==1||pieceColor==2&&fromy==8&&toy==8)&&fromx==5&&tox==3&&(toempty&&(board[1][fromy]&&gamesetup.pieces[board[1][fromy]].type=="r"&&gamesetup.pieces[board[1][fromy]].color==pieceColor)&&!board[4][fromy]&&!board[2][fromy])){
var kingarea1=pieceColor==1?"e1":"e8";var kingarea2=pieceColor==1?"d1":"d8";var kingarea3=pieceColor==1?"c1":"c8";if(!this.isAttacked(kingarea1,3-pieceColor,gamesetup)&&!this.isAttacked(kingarea2,3-pieceColor,gamesetup)&&!this.isAttacked(kingarea3,3-pieceColor,gamesetup)||minimalMoveCheck){
canMove=true;if(fromId===kingarea1&&areaId===kingarea3){if(areaId==="c1"){castling={fromAreaId:"a1",toAreaId:"d1"}}else{castling={
fromAreaId:"a8",toAreaId:"d8"}}}}}}if(piecetype=="n"){if((toempty||capture||minimalMoveCheck)&&(Math.abs(tox-fromx)==1&&Math.abs(toy-fromy)==2||Math.abs(tox-fromx)==2&&Math.abs(toy-fromy)==1))canMove=true;
}if(piecetype=="r"||piecetype=="q"){if(toempty||capture||minimalMoveCheck){var directx=signum(tox-fromx);var directy=signum(toy-fromy);
if(directy==0){var i=fromx+directx;while(i!=tox){if(board[i][fromy]&&!minimalMoveCheck)break;i+=directx}if(i==tox)canMove=true}else if(directx==0){
var j=fromy+directy;while(j!=toy){if(board[fromx][j]&&!minimalMoveCheck)break;j+=directy}if(j==toy)canMove=true}}}if(piecetype=="b"||piecetype=="q"){
if(toempty||capture||minimalMoveCheck){var directx=signum(tox-fromx);var directy=signum(toy-fromy);if(directx!=0&&directy!=0&&Math.abs(tox-fromx)==Math.abs(toy-fromy)){
var i=fromx+directx;var j=fromy+directy;while(i!=tox&&j!=toy){if(board[i][j]&&!minimalMoveCheck)break;i+=directx;j+=directy}if(i==tox&&j==toy)canMove=true;
}}}if(canMove&&legalMoveCheck=="full"){this.makeMove(pieceId,areaId,gamesetup,"",true);if(this.isCheck(gamesetup)){canMove=false}
this.takeBackMove(pieceId,areaId,gamesetup,"",true)}var result=canMove?{}:null;if(result){if(pawnPromotion){result.pawnPromotion=true;
}result.castling=castling}return result},getDefaultPieceSetup:function(){return"Wke1Wqd1Wra1Wrh1Wbc1Wbf1Wnb1Wng1Wpa2Wpb2Wpc2Wpd2Wpe2Wpf2Wpg2Wph2Bke8Bqd8Bra8Brh8Bbc8Bbf8Bnb8Bng8Bpa7Bpb7Bpc7Bpd7Bpe7Bpf7Bpg7Bph7";
},takeBackMove:function(what,where,gamesetup,additionalInfo,noswitchside){if(!gamesetup.tbFrom.length){return}var tbType=gamesetup.tbType.pop();
var tbFrom=gamesetup.tbFrom.pop();var tbCaptured=gamesetup.tbCaptured.pop();var tbEnpassant=gamesetup.tbEnpassant.pop();var tbCastling=gamesetup.tbCastling.pop();
var from=tbFrom;var move=from+where;gamesetup.areas[from].pieces.push(what);gamesetup.pieces[what].area=from;gamesetup.pieces[what].type=tbType;
gamesetup.areas[where].pieces.length=0;if(tbCaptured)if(gamesetup.pieces[what].type=="p"&&tbEnpassant==where){}else{gamesetup.areas[where].pieces.push(tbCaptured);
gamesetup.pieces[tbCaptured].area=where}if(this.positionEditor)return;if(!noswitchside){gamesetup.flags["sm"]=3-gamesetup.flags["sm"];
gamesetup.movecount--;gamesetup.fiftyMoveCount=Math.max(0,gamesetup.fiftyMoveCount-1)}gamesetup.flags["ep"]=tbEnpassant;if(gamesetup.pieces[what].type=="k"){
if(move=="e1g1")this.takeBackMove(gamesetup.areas["f1"].pieces[0],"f1",gamesetup,"",true);else if(move=="e1c1")this.takeBackMove(gamesetup.areas["d1"].pieces[0],"d1",gamesetup,"",true);else if(move=="e8g8")this.takeBackMove(gamesetup.areas["f8"].pieces[0],"f8",gamesetup,"",true);else if(move=="e8c8")this.takeBackMove(gamesetup.areas["d8"].pieces[0],"d8",gamesetup,"",true);
}else if(gamesetup.pieces[what].type=="p"){if(tbEnpassant!="-"&&where==tbEnpassant&&tbCaptured){var row=1*tbEnpassant.substring(1);
if(gamesetup.pieces[what].color==1)row--;else row++;var areaKilled=tbEnpassant.substring(0,1)+row;gamesetup.areas[areaKilled].pieces.push(tbCaptured);
gamesetup.pieces[tbCaptured].area=areaKilled}}gamesetup.flags["cs"]=tbCastling},makeMove:function(what,where,gamesetup,additionalInfo,noswitchside,text){
var from=gamesetup.pieces[what].area;var move=from+where;var capture=gamesetup.areas[where].pieces.length>0;var promotionPiece=null;
gamesetup.tbType.push(gamesetup.pieces[what].type);gamesetup.tbFrom.push(from);gamesetup.tbCaptured.push(gamesetup.areas[where].pieces[0]);
gamesetup.tbEnpassant.push(gamesetup.flags["ep"]);gamesetup.tbCastling.push(gamesetup.flags["cs"]);if(from)this.clearArea(from,gamesetup);
this.clearArea(where,gamesetup);gamesetup.areas[where].pieces.push(what);gamesetup.pieces[what].area=where;if(this.positionEditor)return;
if(!noswitchside){gamesetup.flags["sm"]=3-gamesetup.flags["sm"];gamesetup.movecount++}var enpassant=gamesetup.flags["ep"];gamesetup.flags["ep"]="-";
if(gamesetup.pieces[what].type=="k"){var tbType=gamesetup.tbType.pop();var tbFrom=gamesetup.tbFrom.pop();var tbCaptured=gamesetup.tbCaptured.pop();
var tbEnpassant=gamesetup.tbEnpassant.pop();var tbCastling=gamesetup.tbCastling.pop();if(move=="e1g1")this.makeMove(gamesetup.areas["h1"].pieces[0],"f1",gamesetup,"",true);else if(move=="e1c1")this.makeMove(gamesetup.areas["a1"].pieces[0],"d1",gamesetup,"",true);else if(move=="e8g8")this.makeMove(gamesetup.areas["h8"].pieces[0],"f8",gamesetup,"",true);else if(move=="e8c8")this.makeMove(gamesetup.areas["a8"].pieces[0],"d8",gamesetup,"",true);
gamesetup.tbType.push(tbType);gamesetup.tbFrom.push(tbFrom);gamesetup.tbCaptured.push(tbCaptured);gamesetup.tbEnpassant.push(tbEnpassant);
gamesetup.tbCastling.push(tbCastling)}else if(gamesetup.pieces[what].type=="p"){if(enpassant!="-"&&where==enpassant){var row=1*enpassant.substring(1);
if(gamesetup.pieces[what].color==1)row--;else row++;var areaToKill=enpassant.substring(0,1)+row;gamesetup.tbCaptured.pop();gamesetup.tbCaptured.push(gamesetup.areas[areaToKill].pieces[0]);
this.clearArea(areaToKill,gamesetup);capture=true}var fromRow=from.substring(1);var toRow=where.substring(1);if(gamesetup.pieces[what].color==1&&fromRow==2&&toRow==4||gamesetup.pieces[what].color==2&&fromRow==7&&toRow==5){
var row=gamesetup.pieces[what].color==1?3:6;var epArea=where.substring(0,1)+row;gamesetup.flags["ep"]=epArea}if(toRow==1&&gamesetup.pieces[what].color==2||toRow==8&&gamesetup.pieces[what].color==1){
promotionPiece="q";if(additionalInfo)promotionPiece=additionalInfo;gamesetup.pieces[what].type=promotionPiece}}var cs=gamesetup.flags["cs"];
if(cs!="----"){var removeWhiteKingCastle=false;var removeWhiteQueenCastle=false;var removeBlackKingCastle=false;var removeBlackQueenCastle=false;
if(gamesetup.pieces[what].type=="k"){if(gamesetup.pieces[what].color==1){removeWhiteKingCastle=true;removeWhiteQueenCastle=true}else{
removeBlackKingCastle=true;removeBlackQueenCastle=true}}else if(gamesetup.pieces[what].type=="r"){if(from=="h1")removeWhiteKingCastle=true;else if(from=="a1")removeWhiteQueenCastle=true;else if(from=="h8")removeBlackKingCastle=true;else if(from=="a8")removeBlackQueenCastle=true;
}if(capture){if(where=="h1")removeWhiteKingCastle=true;else if(where=="a1")removeWhiteQueenCastle=true;else if(where=="h8")removeBlackKingCastle=true;else if(where=="a8")removeBlackQueenCastle=true;
}if(removeWhiteKingCastle)cs=cs.replace("k","-");if(removeWhiteQueenCastle)cs=cs.replace("q","-");if(removeBlackKingCastle)cs=cs.replace("K","-");
if(removeBlackQueenCastle)cs=cs.replace("Q","-");gamesetup.flags["cs"]=cs}if(!noswitchside){if(gamesetup.tbCaptured[gamesetup.tbCaptured.length-1]||gamesetup.pieces[what].type=="p"){
gamesetup.fiftyMoveCount=0}else{gamesetup.fiftyMoveCount++}}if(text)alert("not implemented")},getAttackers:function(areaId,attackerSide,gamesetup){
var attackers=[];var areax=areaId.charCodeAt(0)-96;var areay=areaId.charCodeAt(1)-48;var direction=attackerSide==1?1:-1;var board=this.createBoardArray(gamesetup);
var what,piece;for(var i=-1;i<=1;i+=2){what=arrayValue(board,areax+i,areay-direction);piece=what?gamesetup.pieces[what]:null;if(piece&&piece.type=="p"&&piece.color==attackerSide){
attackers.push(piece)}}for(var j=-1;j<=1;j++)for(var i=-1;i<=1;i++)if(i!=0||j!=0){what=arrayValue(board,areax+i,areay+j);piece=what?gamesetup.pieces[what]:null;
if(piece&&piece.type=="k"&&piece.color==attackerSide)attackers.push(piece)}for(var i=0;i<8;i++){var x;var y;switch(i){case 0:x=1;y=-2;
break;case 1:x=2;y=-1;break;case 2:x=2;y=1;break;case 3:x=1;y=2;break;case 4:x=-1;y=2;break;case 5:x=-2;y=1;break;case 6:x=-2;y=-1;
break;case 7:x=-1;y=-2}what=arrayValue(board,areax+x,areay+y);piece=what?gamesetup.pieces[what]:null;if(piece&&piece.type=="n"&&piece.color==attackerSide)attackers.push(piece);
}for(var i=0;i<8;i++){var x;var y;switch(i){case 0:x=0;y=-1;break;case 1:x=1;y=-1;break;case 2:x=1;y=0;break;case 3:x=1;y=1;break;
case 4:x=0;y=1;break;case 5:x=-1;y=1;break;case 6:x=-1;y=0;break;case 7:x=-1;y=-1}var cx=areax;var cy=areay;while(true){cx+=x;cy+=y;
if(cx<1||cx>8||cy<1||cy>8)break;what=arrayValue(board,cx,cy);piece=what?gamesetup.pieces[what]:null;if(piece){if(piece.color==attackerSide){
var pieceType=piece.type;if(x==0||y==0){if(pieceType=="r"||pieceType=="q")attackers.push(piece)}else{if(pieceType=="b"||pieceType=="q")attackers.push(piece);
}}break}}}return attackers},isAttacked:function(areaId,attackerSide,gamesetup){var areax=areaId.charCodeAt(0)-96;var areay=areaId.charCodeAt(1)-48;
var direction=attackerSide==1?1:-1;var board=this.createBoardArray(gamesetup);var what;what=arrayValue(board,areax-1,areay-direction);
if(what&&gamesetup.pieces[what]&&gamesetup.pieces[what].type=="p"&&gamesetup.pieces[what].color==attackerSide)return true;what=arrayValue(board,areax+1,areay-direction);
if(what&&gamesetup.pieces[what]&&gamesetup.pieces[what].type=="p"&&gamesetup.pieces[what].color==attackerSide)return true;for(var j=-1;j<=1;j++)for(var i=-1;i<=1;i++)if(i!=0||j!=0){
what=arrayValue(board,areax+i,areay+j);if(what&&gamesetup.pieces[what]&&gamesetup.pieces[what].type=="k"&&gamesetup.pieces[what].color==attackerSide)return true;
}for(var i=0;i<8;i++){var x;var y;switch(i){case 0:x=1;y=-2;break;case 1:x=2;y=-1;break;case 2:x=2;y=1;break;case 3:x=1;y=2;break;
case 4:x=-1;y=2;break;case 5:x=-2;y=1;break;case 6:x=-2;y=-1;break;case 7:x=-1;y=-2}what=arrayValue(board,areax+x,areay+y);if(what&&gamesetup.pieces[what]&&gamesetup.pieces[what].type=="n"&&gamesetup.pieces[what].color==attackerSide)return true;
}for(var i=0;i<8;i++){var x;var y;switch(i){case 0:x=0;y=-1;break;case 1:x=1;y=-1;break;case 2:x=1;y=0;break;case 3:x=1;y=1;break;
case 4:x=0;y=1;break;case 5:x=-1;y=1;break;case 6:x=-1;y=0;break;case 7:x=-1;y=-1}var cx=areax;var cy=areay;while(true){cx+=x;cy+=y;
if(cx<1||cx>8||cy<1||cy>8)break;what=arrayValue(board,cx,cy);if(what){if(gamesetup.pieces[what]&&gamesetup.pieces[what].color==attackerSide){
var pieceType=gamesetup.pieces[what].type;if(x==0||y==0){if(pieceType=="r"||pieceType=="q"){return true}}else{if(pieceType=="b"||pieceType=="q"){
return true}}}break}}}return false},getKingArea:function(gamesetup,color){for(var pieceid in gamesetup.pieces){var piece=gamesetup.pieces[pieceid];
if(piece.type=="k"&&piece.color==color){return piece.area}}return null},getCheckingPieces:function(gamesetup){var sideToMove=gamesetup.flags["sm"];
var kingarea=this.getKingArea(gamesetup,sideToMove);if(kingarea){return this.getAttackers(kingarea,3-sideToMove,gamesetup)}return[];
},isCheck:function(gamesetup){var sideToMove=gamesetup.flags["sm"];var kingarea=this.getKingArea(gamesetup,sideToMove);return kingarea&&this.isAttacked(kingarea,3-sideToMove,gamesetup);
},isMate:function(gamesetup,isCheck){if(isCheck===undefined){isCheck=this.isCheck(gamesetup)}return isCheck&&!this.hasLegalMoves(gamesetup);
},hasLegalMoves:function(gamesetup){for(var piece in gamesetup.pieces)if(gamesetup.pieces[piece].area){var fromId=gamesetup.pieces[piece].area;
for(var areaId in gamesetup.areas)if(this.isLegalMove(gamesetup,fromId,areaId))return true}return false},getLegalMoves:function(piece,gamesetup,lmc){
var moves=[];if(typeof piece!=="undefined"&&gamesetup.pieces[piece].area){var fromId=gamesetup.pieces[piece].area;for(var areaId in gamesetup.areas){
if(this.isLegalMove(gamesetup,fromId,areaId,null,lmc)){moves[moves.length]=areaId}}}return moves},setPositionEditor:function(bool){
this.positionEditor=bool}};globals.GameRulesInstance=new GameRules.ChessEditor});ChessCom(function(globals){if(globals.GameRules960Instance){
return}var GameRules=globals.GameRules;function arrayValue(array,x,y){if(array[x])if(array[x][y])return array[x][y];return null}function signum(n){
if(n==0)return 0;else if(n>0)return 1;else return-1}var parent=GameRules.ChessEditor.prototype;GameRules.Chess960Editor=function(opts){
if(!opts)opts={};this._legalPositionCheck=opts.legalPositionCheck||"full";this._legalMoveCheck=opts.legalMoveCheck||"full";this.promotion_what="-";
this.promotion_where="-";this.promotion_gamesetup=null;this.positionEditor=true};globals.objectAssign(GameRules.Chess960Editor.prototype,parent,{
defineAreas:function(gameSetup){gameSetup.variant="chess960";for(var j=8;j>=1;j--)for(var i=1;i<=8;i++){var areaid=String.fromCharCode(96+i)+j;
gameSetup.createArea(areaid)}},createBoardArray:function(gamesetup){var board=new Array(9);for(var i=1;i<=8;i++)board[i]=new Array(null,null,null,null,null,null,null,null,null);
for(var pieceid in gamesetup.pieces){{var areaid=gamesetup.pieces[pieceid].area;if(areaid){var wherex=areaid.charCodeAt(0)-96;var wherey=areaid.charCodeAt(1)-48;
if(wherex>=1&&wherex<=8&&wherey>=1&&wherey<=8)board[wherex][wherey]=pieceid}}}return board},isLegalPosition:function(gamesetup){if(this._legalPositionCheck=="off"||this._legalPositionCheck=="sideonly")return{};
{for(var pieceid in gamesetup.pieces){var piece=gamesetup.pieces[pieceid];if(piece.type=="p"&&piece.area){var rank=piece.area.charCodeAt(1)-48;
if(rank==1||rank==8)return null}}}if(this._legalPositionCheck=="pawns")return{};if(this._legalPositionCheck!=="analysis"){var whitekings=0;
var blackkings=0;for(var pieceid in gamesetup.pieces){var piece=gamesetup.pieces[pieceid];if(piece.type=="k"&&piece.area)if(piece.color==1)whitekings++;else if(piece.color==2)blackkings++;
}if(whitekings!=1||blackkings!=1)return null}if(this._legalPositionCheck=="partial")return{};if(this._legalPositionCheck=="full"||this._legalPositionCheck=="analysis"){
var sideToMove=gamesetup.flags["sm"];for(var pieceid in gamesetup.pieces){var piece=gamesetup.pieces[pieceid];{if(piece.type=="k"&&piece.color==3-sideToMove&&this.isAttacked(piece.area,sideToMove,gamesetup))return null;
}}if(!/^(?:[A-HKQ\-]{4})$/i.test(gamesetup.flags["cs"])){return null}}return{}},isLegalMove:function(gamesetup,fromId,areaId,additionalInfo,lmc){
var legalMoveCheck=lmc?lmc:this._legalMoveCheck;if(this.positionEditor){return{}}if(!fromId){return null}var pieceId=gamesetup.areas[fromId].pieces[0]||null;
if(!pieceId){return null}var piece=gamesetup.pieces[pieceId];var sideToMove=gamesetup.flags["sm"];var availCastles=gamesetup.flags["cs"];
var pieceColor=piece.color;var board=this.createBoardArray(gamesetup);var origAreaId=areaId;var fromx=fromId.charCodeAt(0)-96;var fromy=fromId.charCodeAt(1)-48;
var tox=areaId.charCodeAt(0)-96;var toy=areaId.charCodeAt(1)-48;var piecetype=piece.type;var toempty=!board[tox][toy];var capture=board[tox][toy]&&gamesetup.pieces[board[tox][toy]].color!=pieceColor;
var direction=pieceColor==1?1:-1;var canMove=false;var pawnPromotion=false;var leftRook;var rightRook;var castleFiles={};var castleRank;
var possibleRookPiece;var rookPiece;if(fromx==tox&&fromy==toy){return null}if(sideToMove!=pieceColor&&legalMoveCheck!="off"){return null;
}if(legalMoveCheck=="off"||legalMoveCheck=="sideonly"){if(piecetype=="p"){if(toy==1&&pieceColor==2||toy==8&&pieceColor==1){return{
pawnPromotion:true}}}return{}}var minimalMoveCheck=legalMoveCheck=="minimal";if(piecetype=="p"){if(tox==fromx&&toy==fromy+direction&&(toempty||minimalMoveCheck)){
canMove=true}else if(tox==fromx&&toy==fromy+direction+direction&&(toempty||minimalMoveCheck)&&(!board[fromx][fromy+direction]||minimalMoveCheck)&&(pieceColor==1&&fromy==2||pieceColor==2&&fromy==7)){
canMove=true}else if((capture||minimalMoveCheck)&&Math.abs(tox-fromx)==1&&toy==fromy+direction){canMove=true}else if(toempty&&Math.abs(tox-fromx)==1&&toy==fromy+direction&&areaId==gamesetup.flags["ep"]){
canMove=true}if(canMove&&(toy==1&&pieceColor==2||toy==8&&pieceColor==1)){pawnPromotion=true}}if(piecetype=="k"){if(pieceColor==1){
castleFiles.r=availCastles.charAt(0).toLowerCase();castleFiles.l=availCastles.charAt(1).toLowerCase();castleRank=1}else{castleFiles.r=availCastles.charAt(2).toLowerCase();
castleFiles.l=availCastles.charAt(3).toLowerCase();castleRank=8}if(/[a-h]/.test(castleFiles.r)){possibleRookPiece=gamesetup.areas[castleFiles.r+castleRank].pieces[0];
if(possibleRookPiece){rookPiece=gamesetup.pieces[possibleRookPiece];if(rookPiece.type==="r"&&rookPiece.color==pieceColor){rightRook=castleFiles.r.charCodeAt(0)-96;
}}}if(/[a-h]/.test(castleFiles.l)){possibleRookPiece=gamesetup.areas[castleFiles.l+castleRank].pieces[0];if(possibleRookPiece){rookPiece=gamesetup.pieces[possibleRookPiece];
if(rookPiece.type==="r"&&rookPiece.color==pieceColor){leftRook=castleFiles.l.charCodeAt(0)-96}}}var origTox=tox;if(Math.abs(tox-fromx)>1&&(pieceColor==1&&fromy==1&&toy==1||pieceColor==2&&fromy==8&&toy==8)){
if(tox<fromx){tox=leftRook?leftRook:tox;areaId=String.fromCharCode(96+tox)+(pieceColor==1?"1":"8")}else{tox=rightRook?rightRook:tox;
areaId=String.fromCharCode(96+tox)+(pieceColor==1?"1":"8")}}if(Math.abs(origTox-fromx)<=1&&Math.abs(toy-fromy)<=1&&(toempty||capture||minimalMoveCheck)){
canMove=true}else if((pieceColor==1&&fromy==1&&toy==1||pieceColor==2&&fromy==8&&toy==8)&&(tox==rightRook||tox==leftRook)&&(gamesetup.pieces[board[tox][toy]]&&gamesetup.pieces[board[tox][toy]].type=="r"&&gamesetup.pieces[board[tox][toy]].color==pieceColor)){
var freeAreasFrom,freeAreasTo;if(tox==leftRook){freeAreasFrom=Math.min(origTox,tox,3);freeAreasTo=Math.max(fromx,4)}else{freeAreasFrom=Math.min(fromx,6);
freeAreasTo=Math.max(origTox,tox,7)}var actingRank=pieceColor==1?1:8;var occupied=false;var freeAreaPiece;for(var n=freeAreasFrom;n<=freeAreasTo;n++){
if(board[n][actingRank]){freeAreaPiece=gamesetup.pieces[board[n][actingRank]];if(board[n][actingRank]!=pieceId&&freeAreaPiece.area!=areaId){
occupied=true;break}}}if(!occupied){if(legalMoveCheck==="full"){var attackingAreasFrom,attackingAreasTo;if(tox==leftRook){attackingAreasFrom=Math.min(fromx,3);
attackingAreasTo=Math.max(fromx,3)}else if(tox==rightRook){attackingAreasFrom=Math.min(fromx,7);attackingAreasTo=Math.max(fromx,7);
}var attacked=false;for(var n=attackingAreasFrom;n<=attackingAreasTo;n++){if(this.isAttacked(String.fromCharCode(96+n)+String(actingRank),3-pieceColor,gamesetup)){
attacked=true;break}}if(!attacked){canMove=true}}else{canMove=true}}}}if(piecetype=="n"){if((toempty||capture||minimalMoveCheck)&&(Math.abs(tox-fromx)==1&&Math.abs(toy-fromy)==2||Math.abs(tox-fromx)==2&&Math.abs(toy-fromy)==1)){
canMove=true}}if(piecetype=="r"||piecetype=="q"){if(toempty||capture||minimalMoveCheck){var directx=signum(tox-fromx);var directy=signum(toy-fromy);
if(directy==0){var i=fromx+directx;while(i!=tox){if(board[i][fromy]&&!minimalMoveCheck){break}i+=directx}if(i==tox){canMove=true}
}else if(directx==0){var j=fromy+directy;while(j!=toy){if(board[fromx][j]&&!minimalMoveCheck){break}j+=directy}if(j==toy){canMove=true;
}}}}if(piecetype=="b"||piecetype=="q"){if(toempty||capture||minimalMoveCheck){var directx=signum(tox-fromx);var directy=signum(toy-fromy);
if(directx!=0&&directy!=0&&Math.abs(tox-fromx)==Math.abs(toy-fromy)){var i=fromx+directx;var j=fromy+directy;while(i!=tox&&j!=toy){
if(board[i][j]&&!minimalMoveCheck){break}i+=directx;j+=directy}if(i==tox&&j==toy){canMove=true}}}}if(canMove&&legalMoveCheck=="full"){
this.makeMove(pieceId,origAreaId,gamesetup,"",true);var kingarea=null;var tmpPiece;for(var id in gamesetup.pieces){tmpPiece=gamesetup.pieces[id];
{if(tmpPiece.type=="k"&&tmpPiece.color==pieceColor){kingarea=tmpPiece.area}}}if(kingarea){if(this.isAttacked(kingarea,3-pieceColor,gamesetup)){
canMove=false}}this.takeBackMove(pieceId,origAreaId,gamesetup,"",true)}var result=canMove?{}:null;if(result&&pawnPromotion){result.pawnPromotion=true;
}return result},getDefaultPieceSetup:function(){return"Wke1Wqd1Wra1Wrh1Wbc1Wbf1Wnb1Wng1Wpa2Wpb2Wpc2Wpd2Wpe2Wpf2Wpg2Wph2Bke8Bqd8Bra8Brh8Bbc8Bbf8Bnb8Bng8Bpa7Bpb7Bpc7Bpd7Bpe7Bpf7Bpg7Bph7";
},takeBackMove:function(what,where,gamesetup,additionalInfo,noswitchside){if(!gamesetup.tbFrom.length)return;var tbType=gamesetup.tbType.pop();
var tbFrom=gamesetup.tbFrom.pop();var tbCaptured=gamesetup.tbCaptured.pop();var tbEnpassant=gamesetup.tbEnpassant.pop();var tbIsCastling=gamesetup.tbIsCastling.pop();
var tbCastling=gamesetup.tbCastling.pop();var from=tbFrom;var move=from+where;if(!tbIsCastling){gamesetup.areas[from].pieces.push(what);
gamesetup.pieces[what].area=from;gamesetup.pieces[what].type=tbType;gamesetup.areas[where].pieces.length=0;if(tbCaptured)if(gamesetup.pieces[what].type=="p"&&tbEnpassant==where){}else{
gamesetup.areas[where].pieces.push(tbCaptured);gamesetup.pieces[tbCaptured].area=where}}if(this.positionEditor)return;if(!noswitchside){
gamesetup.flags["sm"]=3-gamesetup.flags["sm"];gamesetup.movecount--;gamesetup.fiftyMoveCount=Math.max(0,gamesetup.fiftyMoveCount-1);
}gamesetup.flags["ep"]=tbEnpassant;if(tbIsCastling){if(where.charCodeAt(0)>from.charCodeAt(0)){if(where.charAt(1)=="1"){var rookId=gamesetup.areas["f1"].pieces[0];
gamesetup.areas[from].pieces.length=0;gamesetup.areas[tbIsCastling].pieces.length=0;gamesetup.areas["f1"].pieces.length=0;gamesetup.areas["g1"].pieces.length=0;
gamesetup.pieces[rookId].area=tbIsCastling;gamesetup.areas[tbIsCastling].pieces.push(rookId);gamesetup.pieces[what].area=tbFrom;gamesetup.areas[from].pieces.push(what);
}else if(where.charAt(1)=="8"){var rookId=gamesetup.areas["f8"].pieces[0];gamesetup.areas[from].pieces.length=0;gamesetup.areas[tbIsCastling].pieces.length=0;
gamesetup.areas["f8"].pieces.length=0;gamesetup.areas["g8"].pieces.length=0;gamesetup.pieces[rookId].area=tbIsCastling;gamesetup.areas[tbIsCastling].pieces.push(rookId);
gamesetup.pieces[what].area=tbFrom;gamesetup.areas[from].pieces.push(what)}}else{if(where.charAt(1)=="1"){var rookId=gamesetup.areas["d1"].pieces[0];
gamesetup.areas[from].pieces.length=0;gamesetup.areas[tbIsCastling].pieces.length=0;gamesetup.areas["d1"].pieces.length=0;gamesetup.areas["c1"].pieces.length=0;
gamesetup.pieces[rookId].area=tbIsCastling;gamesetup.areas[tbIsCastling].pieces.push(rookId);gamesetup.pieces[what].area=tbFrom;gamesetup.areas[from].pieces.push(what);
}else if(where.charAt(1)=="8"){var rookId=gamesetup.areas["d8"].pieces[0];gamesetup.areas[from].pieces.length=0;gamesetup.areas[tbIsCastling].pieces.length=0;
gamesetup.areas["d8"].pieces.length=0;gamesetup.areas["c8"].pieces.length=0;gamesetup.pieces[rookId].area=tbIsCastling;gamesetup.areas[tbIsCastling].pieces.push(rookId);
gamesetup.pieces[what].area=tbFrom;gamesetup.areas[from].pieces.push(what)}}}else if(gamesetup.pieces[what].type=="p"){if(tbEnpassant!="-"&&where==tbEnpassant&&tbCaptured){
var row=1*tbEnpassant.substring(1);if(gamesetup.pieces[what].color==1)row--;else row++;var areaKilled=tbEnpassant.substring(0,1)+row;
gamesetup.areas[areaKilled].pieces.push(tbCaptured);gamesetup.pieces[tbCaptured].area=areaKilled}}gamesetup.flags["cs"]=tbCastling;
},makeMove:function(what,where,gamesetup,additionalInfo,noswitchside,text){var from=gamesetup.pieces[what].area;var move=from+where;
var capture=gamesetup.areas[where].pieces.length>0;var capturedPiece=null;if(capture)capturedPiece=gamesetup.pieces[gamesetup.areas[where].pieces[0]];
var promotionPiece=null;var isCastling=gamesetup.pieces[what].type=="k"&&capture&&capturedPiece.type=="r"&&capturedPiece.color==gamesetup.pieces[what].color&&from.charAt(1)==where.charAt(1)&&(from.charAt(1)=="1"&&gamesetup.pieces[what].color==1||from.charAt(1)=="8"&&gamesetup.pieces[what].color==2);
var cs=gamesetup.flags["cs"];var WhiteKingCastle=cs.charAt(0);var WhiteQueenCastle=cs.charAt(1);var BlackKingCastle=cs.charAt(2);var BlackQueenCastle=cs.charAt(3);
var actingRank=gamesetup.pieces[what].color==1?"1":"8";var kingRook=gamesetup.pieces[what].color==1?WhiteKingCastle:BlackKingCastle;
var queenRook=gamesetup.pieces[what].color==1?WhiteQueenCastle:BlackQueenCastle;var ret={};if(!isCastling){isCastling=gamesetup.pieces[what].type=="k"&&from.charAt(1)==where.charAt(1)&&(from.charAt(1)=="1"&&gamesetup.pieces[what].color==1||from.charAt(1)=="8"&&gamesetup.pieces[what].color==2)&&Math.abs(from.charCodeAt(0)-where.charCodeAt(0))>1;
if(isCastling){castlingFlag="-";if(from.charCodeAt(0)>where.charCodeAt(0)){if(gamesetup.pieces[what].color==1){castlingFlag=queenRook.toUpperCase();
}else{castlingFlag=queenRook.toLowerCase()}}else{if(gamesetup.pieces[what].color==1){castlingFlag=kingRook.toUpperCase()}else{castlingFlag=kingRook.toLowerCase();
}}if(castlingFlag!="-"){where=castlingFlag.toLowerCase()+where.charAt(1);var move=from+where;var capture=gamesetup.areas[where].pieces.length>0;
var capturedPiece=null;if(capture)capturedPiece=gamesetup.pieces[gamesetup.areas[where].pieces[0]]}else{isCastling=false}}}gamesetup.tbType.push(gamesetup.pieces[what].type);
gamesetup.tbFrom.push(from);gamesetup.tbIsCastling.push(isCastling?where:null);gamesetup.tbCaptured.push(gamesetup.areas[where].pieces[0]);
gamesetup.tbEnpassant.push(gamesetup.flags["ep"]);gamesetup.tbCastling.push(gamesetup.flags["cs"]);if(from)this.clearArea(from,gamesetup);
if(!isCastling)this.clearArea(where,gamesetup);if(!isCastling){gamesetup.areas[where].pieces.push(what);gamesetup.pieces[what].area=where;
}if(this.positionEditor)return;if(!noswitchside){gamesetup.flags["sm"]=3-gamesetup.flags["sm"];gamesetup.movecount++}var enpassant=gamesetup.flags["ep"];
gamesetup.flags["ep"]="-";if(gamesetup.pieces[what].type=="k"){if(isCastling){if(Number(where.charCodeAt(0))<Number(from.charCodeAt(0))){
if(gamesetup.pieces[what].color==1){var rookId=gamesetup.areas[where].pieces[0];this.clearArea(where,gamesetup);this.clearArea("c1",gamesetup);
gamesetup.areas["c1"].pieces.push(what);gamesetup.pieces[what].area="c1";this.clearArea("d1",gamesetup);gamesetup.areas["d1"].pieces.push(rookId);
gamesetup.pieces[rookId].area="d1";ret.moveFrom=from;ret.moveTo=queenRook.toLowerCase()+"1";ret.animatedFrom=from;ret.animatedTo="c1";
}else{var rookId=gamesetup.areas[where].pieces[0];this.clearArea(where,gamesetup);this.clearArea("c8",gamesetup);gamesetup.areas["c8"].pieces.push(what);
gamesetup.pieces[what].area="c8";this.clearArea("d8",gamesetup);gamesetup.areas["d8"].pieces.push(rookId);gamesetup.pieces[rookId].area="d8";
ret.moveFrom=from;ret.moveTo=queenRook.toLowerCase()+"8";ret.animatedFrom=from;ret.animatedTo="c8"}}else{if(gamesetup.pieces[what].color==1){
var rookId=gamesetup.areas[where].pieces[0];this.clearArea(where,gamesetup);this.clearArea("g1",gamesetup);gamesetup.areas["g1"].pieces.push(what);
gamesetup.pieces[what].area="g1";this.clearArea("f1",gamesetup);gamesetup.areas["f1"].pieces.push(rookId);gamesetup.pieces[rookId].area="f1";
ret.moveFrom=from;ret.moveTo=kingRook.toLowerCase()+"1";ret.animatedFrom=from;ret.animatedTo="g1"}else{var rookId=gamesetup.areas[where].pieces[0];
this.clearArea(where,gamesetup);this.clearArea("g8",gamesetup);gamesetup.areas["g8"].pieces.push(what);gamesetup.pieces[what].area="g8";
this.clearArea("f8",gamesetup);gamesetup.areas["f8"].pieces.push(rookId);gamesetup.pieces[rookId].area="f8";ret.moveFrom=from;ret.moveTo=kingRook.toLowerCase()+"8";
ret.animatedFrom=from;ret.animatedTo="g8"}}}}else if(gamesetup.pieces[what].type=="p"){if(enpassant!="-"&&where==enpassant){var row=1*enpassant.substring(1);
if(gamesetup.pieces[what].color==1)row--;else row++;var areaToKill=enpassant.substring(0,1)+row;gamesetup.tbCaptured.pop();gamesetup.tbCaptured.push(gamesetup.areas[areaToKill].pieces[0]);
this.clearArea(areaToKill,gamesetup);capture=true}var fromRow=from.substring(1);var toRow=where.substring(1);if(gamesetup.pieces[what].color==1&&fromRow==2&&toRow==4||gamesetup.pieces[what].color==2&&fromRow==7&&toRow==5){
var row=gamesetup.pieces[what].color==1?3:6;var epArea=where.substring(0,1)+row;gamesetup.flags["ep"]=epArea}if(toRow==1&&gamesetup.pieces[what].color==2||toRow==8&&gamesetup.pieces[what].color==1){
promotionPiece="q";if(additionalInfo)promotionPiece=additionalInfo;gamesetup.pieces[what].type=promotionPiece;gamesetup.pieces[what].promoted=true;
}}if(cs!="----"){if(gamesetup.pieces[what].type=="k"){if(gamesetup.pieces[what].color==1){WhiteKingCastle="-";WhiteQueenCastle="-";
}else{BlackKingCastle="-";BlackQueenCastle="-"}cs=WhiteKingCastle+WhiteQueenCastle+BlackKingCastle+BlackQueenCastle;gamesetup.flags["cs"]=cs;
}else if(gamesetup.pieces[what].type=="r"){if(from==kingRook.toLowerCase()+"1"){WhiteKingCastle="-";WhiteQueenCastle=queenRook}else if(from==queenRook.toLowerCase()+"1"){
WhiteQueenCastle="-";WhiteKingCastle=kingRook}else if(from==kingRook.toLowerCase()+"8"){BlackKingCastle="-";BlackQueenCastle=queenRook;
}else if(from==queenRook.toLowerCase()+"8"){BlackQueenCastle="-";BlackKingCastle=kingRook}cs=WhiteKingCastle+WhiteQueenCastle+BlackKingCastle+BlackQueenCastle;
gamesetup.flags["cs"]=cs}if(capturedPiece&&capturedPiece.type==="r"){if(where==WhiteKingCastle.toLowerCase()+"1"){WhiteKingCastle="-";
}else if(where==WhiteQueenCastle.toLowerCase()+"1"){WhiteQueenCastle="-"}else if(where==BlackKingCastle.toLowerCase()+"8"){BlackKingCastle="-";
}else if(where==BlackQueenCastle.toLowerCase()+"8"){BlackQueenCastle="-"}cs=WhiteKingCastle+WhiteQueenCastle+BlackKingCastle+BlackQueenCastle;
gamesetup.flags["cs"]=cs}}if(!noswitchside){if(gamesetup.tbCaptured[gamesetup.tbCaptured.length-1]||gamesetup.pieces[what].type=="p"){
gamesetup.fiftyMoveCount=0}else{gamesetup.fiftyMoveCount++}}if(text)alert("not implemented");return ret},isAttacked:function(areaId,attackerSide,gamesetup){
var areax=areaId.charCodeAt(0)-96;var areay=areaId.charCodeAt(1)-48;var direction=attackerSide==1?1:-1;var board=this.createBoardArray(gamesetup);
var what;what=arrayValue(board,areax-1,areay-direction);if(what&&gamesetup.pieces[what]&&gamesetup.pieces[what].type=="p"&&gamesetup.pieces[what].color==attackerSide)return true;
what=arrayValue(board,areax+1,areay-direction);if(what&&gamesetup.pieces[what]&&gamesetup.pieces[what].type=="p"&&gamesetup.pieces[what].color==attackerSide)return true;
for(var j=-1;j<=1;j++)for(var i=-1;i<=1;i++)if(i!=0||j!=0){what=arrayValue(board,areax+i,areay+j);if(what&&gamesetup.pieces[what]&&gamesetup.pieces[what].type=="k"&&gamesetup.pieces[what].color==attackerSide)return true;
}for(var i=0;i<8;i++){var x;var y;switch(i){case 0:x=1;y=-2;break;case 1:x=2;y=-1;break;case 2:x=2;y=1;break;case 3:x=1;y=2;break;
case 4:x=-1;y=2;break;case 5:x=-2;y=1;break;case 6:x=-2;y=-1;break;case 7:x=-1;y=-2}what=arrayValue(board,areax+x,areay+y);if(what&&gamesetup.pieces[what]&&gamesetup.pieces[what].type=="n"&&gamesetup.pieces[what].color==attackerSide)return true;
}for(var i=0;i<8;i++){var x;var y;switch(i){case 0:x=0;y=-1;break;case 1:x=1;y=-1;break;case 2:x=1;y=0;break;case 3:x=1;y=1;break;
case 4:x=0;y=1;break;case 5:x=-1;y=1;break;case 6:x=-1;y=0;break;case 7:x=-1;y=-1}var cx=areax;var cy=areay;while(true){cx+=x;cy+=y;
if(cx<1||cx>8||cy<1||cy>8)break;what=arrayValue(board,cx,cy);if(what){if(gamesetup.pieces[what]&&gamesetup.pieces[what].color==attackerSide){
var pieceType=gamesetup.pieces[what].type;if(x==0||y==0){if(pieceType=="r"||pieceType=="q"){return true}}else{if(pieceType=="b"||pieceType=="q"){
return true}}}break}}}return false},hasLegalMoves:function(gameSetup){for(var piece in gameSetup.pieces)if(gameSetup.pieces[piece].area){
var fromId=gameSetup.pieces[piece].area;for(var areaId in gameSetup.areas)if(this.isLegalMove(gameSetup,fromId,areaId))return true;
}return false},getLegalMoves:function(piece,gameSetup){var moves=[];if(typeof piece!=="undefined"&&gameSetup.pieces[piece].area){
var fromId=gameSetup.pieces[piece].area;for(var areaId in gameSetup.areas){if(this.isLegalMove(gameSetup,fromId,areaId)){moves[moves.length]=areaId;
}}}return moves},setPositionEditor:function(bool){this.positionEditor=bool}});globals.GameRules960Instance=new GameRules.Chess960Editor;
});ChessCom(function(globals){if(globals.GameRules.DropMoveEditor){return}var GameRules=globals.GameRules;var parent=GameRules.ChessEditor.prototype;
var DropMoveEditor=GameRules.DropMoveEditor=function DropMoveEditor(opts){GameRules.ChessEditor.apply(this,arguments)};globals.objectAssign(DropMoveEditor.prototype,parent,{
onCapture:function(){},onTakeBackCapture:function(){},getFen:function(gamesetup){var fen=parent.getFen.apply(this,arguments);var holdings=this.getHand(gamesetup,1).toUpperCase()+this.getHand(gamesetup,2)||"-";
var promotedPieces=this.getPromotedPieces(gamesetup).join(",");fen+=" "+holdings;if(promotedPieces){fen+=" "+promotedPieces}return fen;
},useFen:function(gamesetup,fen){if(!parent.useFen.apply(this,arguments)){return false}var parts=fen.split(" ");this.setHand(gamesetup,1,"");
this.setHand(gamesetup,2,"");if(parts[6]&&parts[6]!=="-"){var holdings=parts[6].split("");var piece,pieceType;for(var i=0;i<holdings.length;i++){
piece=holdings[i];pieceType=piece.toLowerCase();this.addHandPiece(gamesetup,pieceType===piece?"2":"1",pieceType)}}if(parts[7]){this.setPromotedPieces(gamesetup,parts[7].split(","));
}return true},isPromotedPiece:function(gamesetup,areaId){return gamesetup.promotedPieces&&gamesetup.promotedPieces[areaId]},setPromotedPiece:function(gamesetup,areaId,promoted){
if(!gamesetup.promotedPieces){gamesetup.promotedPieces={}}if(promoted){gamesetup.promotedPieces[areaId]=true}else{delete gamesetup.promotedPieces[areaId];
}},setPromotedPieces:function(gamesetup,areas){gamesetup.promotedPieces={};for(var i=0;i<areas.length;i++){gamesetup.promotedPieces[areas[i]]=true;
}},movePromotedPiece:function(gamesetup,fromArea,toArea){this.setPromotedPiece(gamesetup,fromArea,false);this.setPromotedPiece(gamesetup,toArea,true);
},getPromotedPieces:function(gamesetup){if(!gamesetup.promotedPieces){gamesetup.promotedPieces={}}var areas=[];for(var areaId in gamesetup.promotedPieces){
areas.push(areaId)}return areas},isLegalMove:function(gamesetup,fromId,areaId,additionalInfo,lmc){if(fromId===globals.Variants.DROP_MOVE_FROM){
var legalMoveCheck=lmc||this._legalMoveCheck;var pieceType=additionalInfo;if(legalMoveCheck==="off"){return{}}if(legalMoveCheck!=="minimal"&&gamesetup.areas[areaId].pieces.length>0){
return null}if(pieceType==="p"){var rank=areaId.charAt(1);if(rank==="1"||rank==="8"){return null}}var legal=true;this.makeMove(Variants.DROP_PIECE_ID,areaId,gamesetup,"",true);
if(this.isCheck(gamesetup)){legal=false}this.takeBackMove(Variants.DROP_PIECE_ID,areaId,gamesetup,"",true);return legal?{}:null}else{
return parent.isLegalMove.apply(this,arguments)}},takeBackMove:function(what,where,gamesetup,additionalInfo,noswitchside){if(gamesetup.tbFrom[gamesetup.tbFrom.length-1]===Variants.DROP_MOVE_FROM){
gamesetup.tbCaptured.pop();gamesetup.tbFrom.pop();gamesetup.tbPromoted.pop();var tbEnpassant=gamesetup.tbEnpassant.pop();var tbCastling=gamesetup.tbCastling.pop();
var tbType=gamesetup.tbType.pop();var pieceId=gamesetup.areas[where].pieces[0];var piece=gamesetup.pieces[pieceId];this.clearArea(where,gamesetup);
this.addHandPiece(gamesetup,piece.color,piece.type);if(this.positionEditor){return}if(!noswitchside){gamesetup.flags["sm"]=3-gamesetup.flags["sm"];
gamesetup.movecount--;gamesetup.fiftyMoveCount=Math.max(0,gamesetup.fiftyMoveCount-1)}gamesetup.flags["ep"]=tbEnpassant;gamesetup.flags["cs"]=tbCastling;
}else{var tbCaptured=gamesetup.tbCaptured[gamesetup.tbCaptured.length-1];var capturedPiece=tbCaptured?gamesetup.pieces[tbCaptured]:null;
var tbPromoted=gamesetup.tbPromoted.pop();this.setPromotedPieces(gamesetup,tbPromoted);if(capturedPiece){this.onTakeBackCapture(gamesetup,capturedPiece,where);
}return parent.takeBackMove.apply(this,arguments)}},makeMove:function(what,where,gamesetup,additionalInfo,noswitchside,text){if(!gamesetup.tbPromoted){
gamesetup.tbPromoted=[]}gamesetup.tbPromoted.push(this.getPromotedPieces(gamesetup));if(what===Variants.DROP_PIECE_ID){var piece=additionalInfo;
var pieceType=piece.toLowerCase();var pieceColor=pieceType===piece?2:1;gamesetup.tbType.push(pieceType);gamesetup.tbFrom.push(Variants.DROP_MOVE_FROM);
gamesetup.tbCaptured.push(null);gamesetup.tbEnpassant.push(gamesetup.flags["ep"]);gamesetup.tbCastling.push(gamesetup.flags["cs"]);
this.clearArea(where,gamesetup);gamesetup.createPiece(pieceColor,pieceType,where);this.removeHandPiece(gamesetup,pieceColor,pieceType);
if(this.positionEditor){return}if(!noswitchside){gamesetup.flags["sm"]=3-gamesetup.flags["sm"];gamesetup.movecount++;gamesetup.fiftyMoveCount=0;
}gamesetup.flags["ep"]="-"}else{var capture=gamesetup.areas[where].pieces[0];var capturedPiece=capture?gamesetup.pieces[capture]:null;
var enpassant=gamesetup.flags["ep"];var piece=gamesetup.pieces[what];var toRow=where.charAt(1);if(enpassant!=="-"&&where===enpassant){
var row=Number(enpassant.substring(1));if(piece.color===1){row--}else{row++}var capturedPawnArea=enpassant.substring(0,1)+row;capturedPiece=gamesetup.pieces[gamesetup.areas[capturedPawnArea].pieces[0]];
}if(capturedPiece){this.onCapture(gamesetup,capturedPiece,where)}if(this.isPromotedPiece(gamesetup,piece.area)){this.movePromotedPiece(gamesetup,piece.area,where);
}if(piece.type==="p"&&(toRow==="1"&&piece.color==2||toRow==="8"&&piece.color==1)){this.setPromotedPiece(gamesetup,where,true)}return parent.makeMove.apply(this,arguments);
}},setHand:function(gamesetup,color,pieces){if(!gamesetup.hands){gamesetup.hands={1:"",2:""}}gamesetup.hands[color]=pieces},getHand:function(gamesetup,color){
if(!gamesetup.hands){gamesetup.hands={1:"",2:""}}return gamesetup.hands[color]},addHandPiece:function(gamesetup,color,pieceType){
var hand=this.getHand(gamesetup,color);this.setHand(gamesetup,color,hand+pieceType)},removeHandPiece:function(gamesetup,color,pieceType){
var hand=this.getHand(gamesetup,color);this.setHand(gamesetup,color,hand.replace(pieceType,""))},hasLegalMoves:function(gamesetup){
var hasRegularMoves=parent.hasLegalMoves.apply(this,arguments);if(hasRegularMoves){return true}var sideToMove=gamesetup.flags["sm"];
var hand=this.getHand(gamesetup,sideToMove);var hasPiecesToDrop=hand.length>0;if(!hasPiecesToDrop){return false}if(!this.isCheck(gamesetup)){
return true}var checkers=this.getCheckingPieces(gamesetup);if(checkers.length>1){return false}var kingarea=this.getKingArea(gamesetup,sideToMove);
var interveningSquares=this.getInterveningSquares(checkers[0].area,kingarea);for(var i=0;i<interveningSquares.length;i++){var square=interveningSquares[i];
var rank=parseInt(square.charAt(1));if(rank>1&&rank<8){return true}for(var j=0;j<hand.length;j++){if(hand.charAt(j)!=="p"){return true;
}}}return false},getInterveningSquares:function(a,b){var squares=[];var ax=a.charCodeAt(0)-96-1;var ay=a.charCodeAt(1)-48-1;var bx=b.charCodeAt(0)-96-1;
var by=b.charCodeAt(1)-48-1;var indexA=ay*8+ax;var indexB=by*8+bx;if(indexA>indexB){var tmpx=ax;var tmpy=ay;ax=bx;ay=by;bx=tmpx;by=tmpy;
}var dx=bx-ax;var dy=by-ay;var dirx=dx>0?1:-1;var diry=dy>0?1:-1;if(Math.abs(dx)===Math.abs(dy)||dx===0||dy===0){while(dx||dy){if(dx){
ax+=dirx;dx-=dirx}if(dy){ay+=diry;dy-=diry}squares.push(String.fromCharCode(ax+96+1,ay+48+1))}}squares.pop();return squares}})});ChessCom(function(globals){
if(globals.GameRules.CrazyhouseEditor){return}var GameRules=globals.GameRules;var parent=GameRules.DropMoveEditor.prototype;GameRules.CrazyhouseEditor=function CrazyhouseEditor(){
GameRules.DropMoveEditor.apply(this,arguments)};globals.objectAssign(GameRules.CrazyhouseEditor.prototype,parent,{onCapture:function(gamesetup,capturedPiece,where){
var pieceType=capturedPiece.type;if(this.isPromotedPiece(gamesetup,where)){this.setPromotedPiece(gamesetup,where,false);pieceType="p";
}this.addHandPiece(gamesetup,3-capturedPiece.color,pieceType)},onTakeBackCapture:function(gamesetup,capturedPiece,where){var pieceType=this.isPromotedPiece(gamesetup,where)?"p":capturedPiece.type;
this.removeHandPiece(gamesetup,3-capturedPiece.color,pieceType)}})});ChessCom(function(globals){if(globals.GameRules.BughouseEditor){
return}var GameRules=globals.GameRules;var DropMoveEditor=GameRules.DropMoveEditor;var parent=DropMoveEditor.prototype;GameRules.BughouseEditor=function BughouseEditor(){
DropMoveEditor.apply(this,arguments)};globals.objectAssign(GameRules.BughouseEditor.prototype,parent,{hasLegalMoves:function(gamesetup){
var hasLegalMoves=DropMoveEditor.prototype.hasLegalMoves.call(this,gamesetup);if(!hasLegalMoves&&this.isCheck(gamesetup)){var sideToMove=gamesetup.flags["sm"];
var currentHand=this.getHand(gamesetup,sideToMove);gamesetup.hands[sideToMove]="q";hasLegalMoves=DropMoveEditor.prototype.hasLegalMoves.call(this,gamesetup);
gamesetup.hands[sideToMove]=currentHand}return hasLegalMoves}})});ChessCom(function(globals){if(globals.GameRules.KingOfTheHillEditor){
return}var GameRules=globals.GameRules;var parent=GameRules.ChessEditor.prototype;GameRules.KingOfTheHillEditor=function KingOfTheHillEditor(opts){
GameRules.ChessEditor.apply(this,arguments)};globals.objectAssign(GameRules.KingOfTheHillEditor.prototype,parent,{isLegalMove:function(gamesetup,fromId,areaId,additionalInfo,lmc){
var standardLegality=parent.isLegalMove.apply(this,arguments);if(standardLegality){var centerSquares=["d4","e4","d5","e5"];for(var i=0;i<4;i++){
var area=gamesetup.areas[centerSquares[i]];if(area.pieces.length===1&&gamesetup.pieces[area.pieces[0]].type==="k"){return null}}}
return standardLegality},isMate:function(){var isLegalMove=this.isLegalMove;this.isLegalMove=parent.isLegalMove;var isMate=parent.isMate.apply(this,arguments);
this.isLegalMove=isLegalMove;return isMate}})});ChessCom(function(globals){if(globals.GameRules.LosersChessEditor){return}var GameRules=globals.GameRules;
GameRules.LosersChessEditor=function(){};GameRules.LosersChessEditor.prototype=new GameRules.ChessEditor({legalMoveCheck:"partial",
legalPositionCheck:"partial"});var proto=GameRules.LosersChessEditor.prototype;var parent=GameRules.ChessEditor.prototype;proto.isLegalMove=function(gamesetup,fromId,areaId,additionalInfo,lmc){
var isLegal=parent.isLegalMove.apply(this,arguments);if(!isLegal||lmc==="minimal"){return isLegal}var capture=gamesetup.areas[areaId].pieces.length>0;
var sideToMove=gamesetup.flags["sm"];if(!capture){for(var id in gamesetup.pieces){var piece=gamesetup.pieces[id];if(piece.area&&piece.color===3-sideToMove){
if(this.isAttacked(piece.area,sideToMove,gamesetup)){console.log("Illegal move - you can capture on "+piece.area);return null}}}}
return isLegal}});ChessCom(function(globals){if(globals.GameRules.ThreeCheckEditor){return}var GameRules=globals.GameRules;var parent=GameRules.ChessEditor.prototype;
GameRules.ThreeCheckEditor=function ThreeCheckEditor(opts){GameRules.ChessEditor.apply(this,arguments)};globals.objectAssign(GameRules.ThreeCheckEditor.prototype,parent,{
getFen:function(gamesetup){var fen=parent.getFen.apply(this,arguments);var checks="+"+this.getChecks(gamesetup,1)+"+"+this.getChecks(gamesetup,2);
return fen+" "+checks},useFen:function(gamesetup,fen){if(!parent.useFen.apply(this,arguments)){return false}var parts=fen.split(" ");
if(parts[6]){this.setChecks(gamesetup,1,parseInt(parts[6].charAt(1)));this.setChecks(gamesetup,2,parseInt(parts[6].charAt(3)))}else{
this.setChecks(gamesetup,1,0);this.setChecks(gamesetup,2,0)}return true},isLegalMove:function(gamesetup){var standardLegality=parent.isLegalMove.apply(this,arguments);
if(standardLegality){if(this.getChecks(gamesetup,"1")===3||this.getChecks(gamesetup,"2")===3){return null}}return standardLegality;
},takeBackMove:function(what,where,gamesetup,additionalInfo,noswitchside){if(this.isCheck(gamesetup)){this.decrementChecks(gamesetup,3-gamesetup.flags["sm"]);
}return parent.takeBackMove.apply(this,arguments)},makeMove:function(what,where,gamesetup,additionalInfo,noswitchside,text){var move=parent.makeMove.apply(this,arguments);
if(this.isCheck(gamesetup)){this.incrementChecks(gamesetup,3-gamesetup.flags["sm"])}return move},setChecks:function(gamesetup,color,checks){
if(!gamesetup.checks){gamesetup.checks={1:0,2:0}}gamesetup.checks[color]=checks},getChecks:function(gamesetup,color){if(!gamesetup.checks){
gamesetup.checks={1:0,2:0}}return gamesetup.checks[color]},incrementChecks:function(gamesetup,color){var checks=this.getChecks(gamesetup,color);
this.setChecks(gamesetup,color,checks+1)},decrementChecks:function(gamesetup,color){var checks=this.getChecks(gamesetup,color);this.setChecks(gamesetup,color,checks-1);
},isMate:function(){var isLegalMove=this.isLegalMove;this.isLegalMove=parent.isLegalMove;var isMate=parent.isMate.apply(this,arguments);
this.isLegalMove=isLegalMove;return isMate}})});ChessCom(function(globals){if(globals.PgnParser){return}var GameRules=globals.GameRules;
var ChessEditor=globals.GameRules.ChessEditor;var GameSetup=globals.GameSetup;var useFen=globals.useFen;var initRules=function(that,ChessEditor,options){
that.gameRules=new ChessEditor(options);that.gameRules.setPositionEditor(false);that.gameSetup=new GameSetup("pgntemp");that.gameRules.defineAreas(that.gameSetup);
};var PgnParser=globals.PgnParser=function PgnParser(){this.re_tag=/^\s*\[(.+)\s+\"(.*)\"\]\s*$/;this.re_move=/^(([0-9]+([.\s]+))?)\s*((([KQRBN]?)([a-h]?[1-8]?)x?([a-h][1-8])(=?([QRBN]))?|O-O-O|O-O|0-0-0|0-0)(\+|#)?)((\!|\?)?(\!|\?)?)?$/;
this.re_comment=/^\{(?:.|[\n\r])*?\}$/;this.re_comment2=/\;(?:.|[\n\r])*?\n/;this.re_scoreExtractor=/\(([^\)]+)\)/;this.re_commandExtractor=/\[\s*%(\S+)\s*([^\]]+)\s*\]/g;
this.re_clk=/\s*\[\s*%clk\s*([^\]]+)\s*\]/g;this.re_result=/(1-0)|(0-1)|(1\/2-1\/2)|\*/;this.re_glyph=/^\$([0-9]+)$/;this.re_symbolicGlyph=/^(?:N|\u003d|\u2a72|\u2a71|\u00b1|\u2213|\u221e|\u2a00|\+-|-\+)$/;
this.re_token=/\[(.+)\s+\"(.*)\"\]|([0-9]+([.\s]+))?\s*(([KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](=?[QRBN])?|O-O-O|O-O|0-0-0|0-0)(\+|#)?)((\!|\?)?(\!|\?)?)?|\{(?:.|[\n\r])*?\}|\;(?:.|[\n\r])*?\n|((1-0)|(0-1)|(1\/2-1\/2)|\*)|\$[0-9]+|\+-|-\+|\s|\S/g;
this.TAGS_STATE=1;this.MOVES_STATE=2;this.moveNodes=null;this.currentNode=null;this.currentComment=null;this.currentScore=null;this.rootNodes=null;
this.state=null;this.options={}};var convertTimestamp=function(clkTime){var parts=clkTime.split(":");return(parts[0]*3600+parts[1]*60+Number(parts[2]))*10;
};PgnParser.prototype={getLastErrorMessage:function(){return this._lastErrorMessage},parse:function(pgnBody,moveListControl,pgnTags,options){
var variantMatch;this._lastErrorMessage=null;this.moveListControl=moveListControl;this.curMoveList=moveListControl;this.currentNode=0;
this.inFirstNode=true;this.currentComment=null;this.currentScore=null;this.rootNodes=new Array;this.state=this.TAGS_STATE;this.prevFen=null;
this.options=options||{};var a=pgnBody.match(this.re_token);if(options._variant){initRules(this,options._variant.Rules)}else{variantMatch=pgnBody.match(/(?:^|\n)\s*\[(Variant)\s+"([^"]+)"\]\s*(?:\n|$)/);
if(variantMatch){if(GameRules[variantMatch[2]+"Editor"]){initRules(this,GameRules[variantMatch[2]+"Editor"],options)}else{initRules(this,GameRules.ChessEditor,options);
}}else{initRules(this,GameRules.ChessEditor,options)}}useFen(this.gameSetup,this.curMoveList._moveNodes[this.currentNode].fen);if(!a)return null;
for(var i=0;i<a.length;i++){var token=a[i].trim();var result=false;if(token.match(this.re_move)){if(this.inFirstNode){this.inFirstNode=false;
this.moveListControl._firstMoveNumber=Number(token.substr(0,token.indexOf(".")))||1;if(token.indexOf("...")!=-1)this.curMoveList.startsWithBlack=true;
}result=this.handleMove(token)}else if(token.match(this.re_tag))result=this.handleTag(token,pgnTags);else if(token.match(this.re_comment)||token.match(this.re_comment2))result=this.handleComment(token);else if(token.match(this.re_result))result=this.handleResult(token,pgnTags);else if(token.match(this.re_glyph))result=this.handleGlyph(token);else if(token.match(this.re_symbolicGlyph))result=this.handleSymbolicGlyph(token);else if(token==="")result=true;else if(token=="(")result=this.handleVariationStart();else if(token==")")result=this.handleVariationEnd();
if(!result){var s="";for(var j=-2;j<=2;j++)if(i+j>=0&&i+j<a.length)s+=a[i+j];this._lastErrorMessage='"'+s+'" - error around "'+a[i]+'".';
return null}}if(this.moveListControl._moveNodes.length==1){var fenParts=this.moveListControl._moveNodes[0].fen.split(" ");var sideToMove=fenParts[1];
if(sideToMove&&sideToMove.toLowerCase()=="b")this.moveListControl.startsWithBlack=true}if(this.rootNodes.length!=0)return null;if(this.state==this.TAGS_STATE&&!pgnTags["FEN"])return null;
return true},handleTag:function(token,pgnTags){if(this.state!=this.TAGS_STATE)return false;var parts=this.re_tag.exec(token);var tagName=parts[1];
var tagValue=parts[2];var tagNameLower=tagName.toLowerCase();if(tagNameLower=="eco")tagName="ECO";else if(tagNameLower=="fen")tagName="FEN";else if(tagNameLower=="whiteelo")tagName="WhiteElo";else if(tagNameLower=="blackelo")tagName="BlackElo";else if(tagNameLower=="timecontrol")tagName="TimeControl";else if(tagNameLower=="currentposition")tagName="CurrentPosition";else if(tagNameLower=="setup")tagName="SetUp";else if(tagNameLower=="plycount")tagName="PlyCount";else if(tagNameLower=="eventdate")tagName="EventDate";else if(tagNameLower=="eventsponsor")tagName="EventSponsor";else if(tagNameLower=="subvariation")tagName="SubVariation";else if(tagNameLower=="nic")tagName="NIC";else if(tagNameLower=="utctime")tagName="UTCTime";else if(tagNameLower=="utcdate")tagName="UTCDate";else if(tagNameLower=="endtime")tagName="EndTime";else if(tagNameLower=="enddate")tagName="EndDate";else tagName=tagName.substring(0,1).toUpperCase()+tagName.substring(1).toLowerCase();
if(tagName=="Date"){if(tagValue.length==4)tagValue=tagValue+".??.??"}pgnTags[tagName]=tagValue;if(tagName.toUpperCase()=="FEN"){tagValue=String(tagValue).trim();
if(!useFen(this.gameSetup,tagValue)){return false}if(!this.gameRules.isLegalPosition(this.gameSetup)){return false}tagValue=getFen(this.gameSetup);
this.curMoveList._moveNodes[this.currentNode].fen=tagValue;this.moveListControl.startsWithBlack=tagValue.split(" ")[1]==="b";var fenParts=tagValue.split(" ");
if(fenParts[5]){this.moveListControl._firstMoveNumber=Number(fenParts[5])||1}}if(tagName=="Variant"){tagValue=tagValue.split(" ").join("");
if(tagValue.toLowerCase()=="chess960"){tagValue="Chess960";pgnTags[tagName]=tagValue}else{tagValue="Chess"}}return true},handleComment:function(token){
var comment=(token.substring(1,token.length-1)||"").replace(/^\s+/,"").replace(/\s+$/,"");var score;var time;var parts=this.re_scoreExtractor.exec(comment);
if(parts&&parts[1]){score=parts[1]}do{parts=this.re_commandExtractor.exec(comment);if(parts&&parts[1]==="clk"){comment=comment.replace(this.re_clk,"").trim();
time=convertTimestamp(parts[2])}}while(parts);this.curMoveList._moveNodes[this.currentNode].comment=comment;this.curMoveList._moveNodes[this.currentNode].score=score;
this.curMoveList._moveNodes[this.currentNode].timestamp=time;this.state=this.MOVES_STATE;return true},handleResult:function(token,pgnTags){
if(!pgnTags["Result"])pgnTags["Result"]=token;this.state=this.MOVES_STATE;this.curMoveList.pgnResult=pgnTags["Result"];return true;
},handleVariationStart:function(){this.rootNodes.push(this.currentNode);useFen(this.gameSetup,this.curMoveList._moveNodes[this.currentNode-1].fen);
this.curMoveList=this.moveListControl.createAlternateLine(this.curMoveList);this.currentNode=0;this.state=this.MOVES_STATE;return true;
},handleVariationEnd:function(){this.currentNode=this.rootNodes.pop();if(this.curMoveList._parentLine)this.curMoveList=this.curMoveList._parentLine;
useFen(this.gameSetup,this.curMoveList._moveNodes[this.currentNode].fen);this.state=this.MOVES_STATE;return true},handleGlyph:function(token){
var parts=this.re_glyph.exec(token);var glyph=1*parts[1];if(glyph<0||glyph>255)return false;if(glyph>6){this.curMoveList._moveNodes[this.currentNode].evalGlyph=glyph;
}else{this.curMoveList._moveNodes[this.currentNode].glyph=glyph}this.state=this.MOVES_STATE;return true},handleSymbolicGlyph:function(token){
var map={N:146,"=":10,"⩲":14,"⩱":15,"±":16,"∓":17,"∞":13,"⨀":22,"+-":18,"-+":19};if(map[token]){this.state=this.MOVES_STATE;this.curMoveList._moveNodes[this.currentNode].evalGlyph=map[token];
return true}return false},handleFen:function(token){var fen=token.substring(1,token.length-1);this.curMoveList._moveNodes[this.currentNode].fen=fen;
var fenParts=fen.split(" ");if(fenParts[5])this.moveListControl._firstMoveNumber=Number(fenParts[5])||1},handleMove:function(token){
var moveInfo=this.getMoveInfo(this.currentNode,token,this.gameSetup);if(!moveInfo||!this.makeLegalMove(this.gameSetup,moveInfo)){
return false}if(moveInfo.glyph){this.curMoveList._moveNodes[this.currentNode].glyph=moveInfo.glyph}this.state=this.MOVES_STATE;return true;
},getMoveInfo:function(moveNode,token,gamesetup){var result=new Object;result.pieceType=null;result.pieceColor=null;result.squareFrom=null;
result.squareTo=null;result.promotePiece=null;result.fen=null;result.moveText=null;result.glyph=null;var parts=this.re_move.exec(token);
var startsWithBlack=this.curMoveList.startsWithBlack;var player=moveNode%2==0&&!this.curMoveList.startsWithBlack||moveNode%2==1&&this.curMoveList.startsWithBlack?1:2;
var kingPos;var rookPos;var kingCastlingDirection;var kingRank;var kingFile;var i;var count=0;var possiblePiece;var possiblePos;result.pieceColor=player;
if(/O-O-O|0-0-0/.test(parts[5])){kingCastlingDirection=-1}else if(/O-O|0-0/.test(parts[5])){kingCastlingDirection=1}if(kingCastlingDirection){
result.pieceType="k";for(var pieceId in gamesetup.pieces){var piece=gamesetup.pieces[pieceId];if(piece.color==result.pieceColor&&piece.type=="k"){
kingPos=piece.area;break}}if(!kingPos){return false}if(String(gamesetup.variant).toLowerCase()==="chess960"){kingRank=Number(kingPos.charAt(1));
kingFile=kingPos.charCodeAt(0);for(i=kingFile+kingCastlingDirection;count<8;i+=kingCastlingDirection){possiblePos=String.fromCharCode(i)+kingRank;
possiblePiece=gamesetup.areas[possiblePos].pieces[0];if(possiblePiece&&gamesetup.pieces[possiblePiece].color===result.pieceColor&&gamesetup.pieces[possiblePiece].type==="r"){
rookPos=possiblePos;break}++count}result.squareTo=rookPos}else{result.squareTo=String.fromCharCode(kingPos.charCodeAt(0)+kingCastlingDirection*2)+kingPos.charAt(1);
}result.squareFrom=kingPos}else{var parsedWhat=parts[6];var parsedFrom=parts[7];var parsedTo=parts[8];var parsedPromote=parts[10];
var parsedHumanGlyph=parts[12];switch(parsedWhat){case"":result.pieceType="p";break;case"K":result.pieceType="k";break;case"Q":result.pieceType="q";
break;case"R":result.pieceType="r";break;case"B":result.pieceType="b";break;case"N":result.pieceType="n";break;default:return null;
}result.squareTo=parsedTo;result.squareFrom=parsedFrom?parsedFrom:result.pieceType=="p"?result.squareTo.substring(0,1):"";if(!parsedPromote){
result.promotePiece=null}else{switch(parsedPromote){case"Q":result.promotePiece="q";break;case"R":result.promotePiece="r";break;case"B":
result.promotePiece="b";break;case"N":result.promotePiece="n";break;default:return null}}if(parsedHumanGlyph){if(parsedHumanGlyph=="!")result.glyph=1;else if(parsedHumanGlyph=="?")result.glyph=2;else if(parsedHumanGlyph=="!!")result.glyph=3;else if(parsedHumanGlyph=="??")result.glyph=4;else if(parsedHumanGlyph=="!?")result.glyph=5;else if(parsedHumanGlyph=="?!")result.glyph=6;else return null;
}}result.moveText=parts[4];return result},makeLegalMove:function(gameSetup,moveInfo){var moveFound=false;var ambi=[];var found=null;
for(p in gameSetup.pieces){var piece=gameSetup.pieces[p];if(!piece.area)continue;if(piece.type==moveInfo.pieceType)if(piece.color==moveInfo.pieceColor)if(piece.area.indexOf(moveInfo.squareFrom)!=-1){
ambi.push(p)}}if(ambi.length==0){return false}else if(ambi.length==1&&!this.options.checkSingleMoveLegality){found=ambi[0]}else{for(var i=0;i<ambi.length;i++){
var p=ambi[i];if(this.gameRules.isLegalMove(gameSetup,gameSetup.pieces[p].area,moveInfo.squareTo)){found=p;break}}}if(gameSetup.pieces[found]&&this.gameRules.isLegalMove(this.gameSetup,gameSetup.pieces[found].area,moveInfo.squareTo,moveInfo.promotePiece)){
moveInfo.moveText=moveInfo.moveText.replace("0-0-0","O-O-O");moveInfo.moveText=moveInfo.moveText.replace("0-0","O-O");this.curMoveList.addNode(gameSetup,this.gameRules,{
fromAreaId:gameSetup.pieces[found].area,toAreaId:moveInfo.squareTo,additionalInfo:moveInfo.promotePiece,pgnText:moveInfo.moveText
});this.currentNode++;return true}else{return false}}};globals.PgnParserInstance=new globals.PgnParser});ChessCom(function(globals){
var StandardMoveEncoder=globals.StandardMoveEncoder=function StandardMoveEncoder(){this._encodeMap={a1:"a",a2:"i",a3:"q",a4:"y",a5:"G",
a6:"O",a7:"W",a8:"4",b1:"b",b2:"j",b3:"r",b4:"z",b5:"H",b6:"P",b7:"X",b8:"5",c1:"c",c2:"k",c3:"s",c4:"A",c5:"I",c6:"Q",c7:"Y",c8:"6",
d1:"d",d2:"l",d3:"t",d4:"B",d5:"J",d6:"R",d7:"Z",d8:"7",e1:"e",e2:"m",e3:"u",e4:"C",e5:"K",e6:"S",e7:"0",e8:"8",f1:"f",f2:"n",f3:"v",
f4:"D",f5:"L",f6:"T",f7:"1",f8:"9",g1:"g",g2:"o",g3:"w",g4:"E",g5:"M",g6:"U",g7:"2",g8:"!",h1:"h",h2:"p",h3:"x",h4:"F",h5:"N",h6:"V",
h7:"3",h8:"?"};this._decodeMap={_a:"a1",_i:"a2",_q:"a3",_y:"a4",_G:"a5",_O:"a6",_W:"a7",_4:"a8",_b:"b1",_j:"b2",_r:"b3",_z:"b4",_H:"b5",
_P:"b6",_X:"b7",_5:"b8",_c:"c1",_k:"c2",_s:"c3",_A:"c4",_I:"c5",_Q:"c6",_Y:"c7",_6:"c8",_d:"d1",_l:"d2",_t:"d3",_B:"d4",_J:"d5",_R:"d6",
_Z:"d7",_7:"d8",_e:"e1",_m:"e2",_u:"e3",_C:"e4",_K:"e5",_S:"e6",_0:"e7",_8:"e8",_f:"f1",_n:"f2",_v:"f3",_D:"f4",_L:"f5",_T:"f6",_1:"f7",
_9:"f8",_g:"g1",_o:"g2",_w:"g3",_E:"g4",_M:"g5",_U:"g6",_2:"g7","_!":"g8",_h:"h1",_p:"h2",_x:"h3",_F:"h4",_N:"h5",_V:"h6",_3:"h7",
"_?":"h8"};this._promoLeftQ="{";this._promoStraightQ="~";this._promoRightQ="}";this._promoLeftN="(";this._promoStraightN="^";this._promoRightN=")";
this._promoLeftR="[";this._promoStraightR="_";this._promoRightR="]";this._promoLeftB="@";this._promoStraightB="#";this._promoRightB="$";
};StandardMoveEncoder.prototype={encodeMove:function(fromArea,toArea,additionalInfo){var fromAreaEncoded=this._encodeMap[fromArea];
var toAreaEncoded=this._encodeMap[toArea];if(additionalInfo){var dir=toArea.charCodeAt(0)-fromArea.charCodeAt(0);if(additionalInfo=="q"){
toAreaEncoded=dir==-1?this._promoLeftQ:dir==+1?this._promoRightQ:this._promoStraightQ}else if(additionalInfo=="n"){toAreaEncoded=dir==-1?this._promoLeftN:dir==+1?this._promoRightN:this._promoStraightN;
}else if(additionalInfo=="r"){toAreaEncoded=dir==-1?this._promoLeftR:dir==+1?this._promoRightR:this._promoStraightR}else if(additionalInfo=="b"){
toAreaEncoded=dir==-1?this._promoLeftB:dir==+1?this._promoRightB:this._promoStraightB}}return fromAreaEncoded+toAreaEncoded},decodeMove:function(encodedMove){
var fromAreaEncoded=encodedMove.charAt(0);var toAreaEncoded=encodedMove.charAt(1);var fromArea=this._decodeMap["_"+fromAreaEncoded];
var toArea;var additionalInfo=null;var fromFileCode=fromArea.charCodeAt(0);var toFileCode=null;if(toAreaEncoded==this._promoLeftQ){
toFileCode=fromFileCode-1;additionalInfo="q"}else if(toAreaEncoded==this._promoStraightQ){toFileCode=fromFileCode;additionalInfo="q";
}else if(toAreaEncoded==this._promoRightQ){toFileCode=fromFileCode+1;additionalInfo="q"}else if(toAreaEncoded==this._promoLeftN){
toFileCode=fromFileCode-1;additionalInfo="n"}else if(toAreaEncoded==this._promoStraightN){toFileCode=fromFileCode;additionalInfo="n";
}else if(toAreaEncoded==this._promoRightN){toFileCode=fromFileCode+1;additionalInfo="n"}else if(toAreaEncoded==this._promoLeftR){
toFileCode=fromFileCode-1;additionalInfo="r"}else if(toAreaEncoded==this._promoStraightR){toFileCode=fromFileCode;additionalInfo="r";
}else if(toAreaEncoded==this._promoRightR){toFileCode=fromFileCode+1;additionalInfo="r"}else if(toAreaEncoded==this._promoLeftB){
toFileCode=fromFileCode-1;additionalInfo="b"}else if(toAreaEncoded==this._promoStraightB){toFileCode=fromFileCode;additionalInfo="b";
}else if(toAreaEncoded==this._promoRightB){toFileCode=fromFileCode+1;additionalInfo="b"}if(toFileCode!=null){var fromRank=fromArea.charAt(1);
if(fromRank==7){toArea=String.fromCharCode(toFileCode)+"8"}else if(fromRank==2){toArea=String.fromCharCode(toFileCode)+"1"}else{return null;
}}else{toArea=this._decodeMap["_"+toAreaEncoded];if(!toArea){return null}}var decodedMove={};decodedMove["fromArea"]=fromArea;decodedMove["toArea"]=toArea;
decodedMove["additionalInfo"]=additionalInfo;return decodedMove},encodeArea:function(areaId){return this._encodeMap[areaId]},decodeArea:function(encodedArea){
return this._decodeMap["_"+encodedArea]}}});ChessCom(function(globals){"use strict";var StandardMoveEncoder=globals.StandardMoveEncoder;
var DropMoveEncoder=globals.DropMoveEncoder=function DropMoveEncoder(){this._pieceTypeDecodeMap={"=":"p","-":"n","+":"b","*":"r",
"&":"q","%":"k"};this._pieceTypeEncodeMap={p:"=",n:"-",b:"+",r:"*",q:"&",k:"%"}};DropMoveEncoder.prototype=globals.objectAssign(new StandardMoveEncoder,{
encodeMove:function(fromArea,toArea,pieceType){if(fromArea===globals.Variants.DROP_MOVE_FROM){return this._pieceTypeEncodeMap[pieceType]+this._encodeMap[toArea];
}else{return StandardMoveEncoder.prototype.encodeMove.apply(this,arguments)}},decodeMove:function(encodedMove){var fromAreaEncoded=encodedMove.charAt(0);
var toAreaEncoded=encodedMove.charAt(1);if(fromAreaEncoded in this._pieceTypeDecodeMap){var pieceTypeEncoded=fromAreaEncoded;var pieceType=this._pieceTypeDecodeMap[pieceTypeEncoded];
var toArea=this._decodeMap["_"+toAreaEncoded];return{fromArea:Variants.DROP_MOVE_FROM,toArea:toArea,additionalInfo:pieceType}}else{
return StandardMoveEncoder.prototype.decodeMove.apply(this,arguments)}}})});ChessCom(function(globals){var StandardMoveEncoder=globals.StandardMoveEncoder;
var parent=StandardMoveEncoder.prototype;var LosersMoveEncoder=globals.LosersMoveEncoder=function LosersMoveEncoder(){StandardMoveEncoder.call(this);
};globals.objectAssign(LosersMoveEncoder.prototype,parent,{_kingPromoChars:{"-1":",",0:".",1:"'"},_kingPromoDirs:{",":-1,".":0,"'":1
},encodeMove:function(fromArea,toArea,additionalInfo){if(additionalInfo==="k"){var dir=toArea.charCodeAt(0)-fromArea.charCodeAt(0);
return this.encodeArea(fromArea)+this._kingPromoChars[dir]}else{return parent.encodeMove.apply(this,arguments)}},decodeMove:function(encodedMove){
var fromAreaEncoded=encodedMove.charAt(0);var toAreaEncoded=encodedMove.charAt(1);if(toAreaEncoded in this._kingPromoDirs){var fromArea=this.decodeArea(fromAreaEncoded);
var fromFileCode=fromArea.charCodeAt(0);var toFileCode=fromFileCode+this._kingPromoDirs[toAreaEncoded];var toRank=fromArea.charAt(1)==="7"?"8":"1";
var toArea=String.fromCharCode(toFileCode)+toRank;var decodedMove={};decodedMove["fromArea"]=null;decodedMove["toArea"]=toArea;decodedMove["additionalInfo"]=pieceType;
return decodedMove}else{return parent.decodeMove.apply(this,arguments)}}})});ChessCom(function(globals){"use strict";if(globals.ChessBoardEvents){
return}var hasTouch="ontouchstart"in window||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0;var hasPointer=window.navigator.pointerEnabled||window.navigator.msPointerEnabled;
var documentElement=document.documentElement;var mouseUp="mouseup";var mouseDown="mousedown";var mouseMove="mousemove";var dragStart="dragstart";
var contextMenu="contextmenu";var touchEnd="touchend";var touchStart="touchstart";var touchMove="touchmove";var touchCancel="touchcancel";
var leftKeyCode=1;var leftButtonCode=1;var rightKeyCode=3;var rightButtonCode=2;var dragDistance=1;var ChessBoardEvents=globals.ChessBoardEvents=function ChessBoardEvents(chessboard){
this.chessboard=chessboard};ChessBoardEvents.prototype={setFixed:function(inFixedElement){this.inFixedElement=!!inFixedElement},observe:function(events){
if(hasTouch){this.observeTouch(events)}this.observeMouse(events)},observeTouch:function(events){var node=this.chessboard;var startX;
var startY;var startTarget;var currentX;var currentY;var isDragging=false;var handleMove=function(event){if(!events.keepDefault){
event.returnValue=false;if(typeof event.preventDefault==="function"){event.preventDefault()}}event.cancelBubble=true;if(typeof event.stopPropagation==="function"){
event.stopPropagation()}if(event.touches&&event.touches[0]){currentX=event.touches[0].pageX;currentY=event.touches[0].pageY}else if(event.changedTouches&&event.changedTouches[0]){
currentX=event.changedTouches[0].pageX;currentY=event.changedTouches[0].pageY}if(isDragging){if(typeof events.dragmove==="function"){
event["pointer"]={x:currentX,y:currentY,type:"touch",target:startTarget};events.dragmove.call(node,event)}}else{var isDraggingX=Math.abs(currentX-startX)>dragDistance;
var isDraggingY=Math.abs(currentY-startY)>dragDistance;isDragging=isDraggingX||isDraggingY;if(isDragging){if(typeof events.dragstart==="function"){
event["pointer"]={x:startX,y:startY,type:"touch",target:startTarget};events.dragstart.call(node,event)}}}};var handleEnd=function(event){
if(!events.keepDefault){event.returnValue=false;if(typeof event.preventDefault==="function"){event.preventDefault()}}if(isDragging){
if(typeof events.dragstop==="function"){event["pointer"]={x:currentX,y:currentY,type:"touch",target:startTarget};events.dragstop.call(node,event);
}}else{if(typeof events.click==="function"){event["pointer"]={x:currentX,y:currentY,type:"touch",target:startTarget};events.click.call(node,event);
}}startX=undefined;startY=undefined;startTarget=undefined;currentX=undefined;currentY=undefined;isDragging=false;documentElement.removeEventListener(touchMove,handleMove);
documentElement.removeEventListener(touchEnd,handleEnd)};var handleStart=function(event){if(!events.keepDefault){event.returnValue=false;
if(typeof event.preventDefault==="function"){event.preventDefault()}}startTarget=event.target;if(event.touches&&event.touches[0]){
currentX=startX=event.touches[0].pageX;currentY=startY=event.touches[0].pageY}else if(event.changedTouches&&event.changedTouches[0]){
currentX=startX=event.changedTouches[0].pageX;currentY=startY=event.changedTouches[0].pageY}if(typeof events.pointerdown==="function"){
event["pointer"]={x:startX,y:startY,type:"touch",target:startTarget};events.pointerdown.call(node,event)}documentElement.addEventListener(touchMove,handleMove,false);
documentElement.addEventListener(touchEnd,handleEnd,false)};var handleCancel=function(){startX=undefined;startY=undefined;startTarget=undefined;
currentX=undefined;currentY=undefined;isDragging=false;documentElement.removeEventListener(touchMove,handleMove);documentElement.removeEventListener(documentElement,touchEnd,handleEnd);
};node.addEventListener(touchStart,handleStart,false);node.addEventListener(touchCancel,handleCancel,false)},observeMouse:function(events){
var node=this.chessboard;if(hasPointer){node.style["touchAction"]="none";node.style["msTouchAction"]="none"}var startX;var startY;
var startTarget;var isDragging=false;var isLeftButton=false;var isRightButton=false;var isDragPrevented=false;var inFixedElement=this.inFixedElement;
var hasButtonChanged=function(event){if(event.buttons){if(isRightButton&&event.buttons===leftButtonCode){return true}if(isLeftButton&&event.buttons===rightButtonCode){
return true}}else if(event.button){if(isRightButton&&event.button===leftButtonCode){return true}if(isLeftButton&&event.button===rightButtonCode){
return true}}else if(event.which){if(isRightButton&&event.which===leftKeyCode){return true}if(isLeftButton&&event.which===rightKeyCode){
return true}}};var handleDrag=function(event){if(!events.keepDefault){event.returnValue=false;if(typeof event.preventDefault==="function"){
event.preventDefault()}}event.cancelBubble=true;if(typeof event.stopPropagation==="function"){event.stopPropagation()}};var handleMenu=function(event){
if(!events.keepDefault){event.returnValue=false;if(typeof event.preventDefault==="function"){event.preventDefault()}}event.cancelBubble=true;
if(typeof event.stopPropagation==="function"){event.stopPropagation()}if(typeof events.contextmenu==="function"){events.contextmenu.call(node,event);
}};var handleMove=function(event){if(!events.keepDefault){event.returnValue=false;if(typeof event.preventDefault==="function"){event.preventDefault();
}}if(isDragPrevented){return}var currentX;var currentY;if(inFixedElement){currentX=event.clientX;currentY=event.clientY}else{currentX=event.pageX;
currentY=event.pageY}if(!startTarget.parentNode){startTarget=event.target||event.srcElement}if(hasButtonChanged(event)){if(isDragging){
if(typeof events.dragcancel==="function"){event["pointer"]={x:currentX,y:currentY,type:"mouse",target:startTarget};event["isRightClick"]=isRightButton;
events.dragcancel.call(node,event)}isDragging=false}}else if(isDragging){if(typeof events.dragmove==="function"){event["pointer"]={
x:currentX,y:currentY,type:"mouse",target:startTarget};event["isRightClick"]=isRightButton;events.dragmove.call(node,event)}}else if(isLeftButton||isRightButton){
var isDraggingX=Math.abs(currentX-startX)>dragDistance;var isDraggingY=Math.abs(currentY-startY)>dragDistance;isDragging=isDraggingX||isDraggingY;
if(isDragging){if(typeof events.dragstart==="function"){event["pointer"]={x:startX,y:startY,type:"mouse",target:startTarget};event["isRightClick"]=isRightButton;
var ret=events.dragstart.call(node,event);if(ret===false){isDragPrevented=true}}}}};var handleUp=function(event){if(!events.keepDefault){
event.returnValue=false;if(typeof event.preventDefault==="function"){event.preventDefault()}}var currentX;var currentY;if(inFixedElement){
currentX=event.clientX;currentY=event.clientY}else{currentX=event.pageX;currentY=event.pageY}if(!startTarget.parentNode){startTarget=event.target||event.srcElement;
}if(hasButtonChanged(event)){if(isDragging){if(typeof events.dragcancel==="function"){event["pointer"]={x:currentX,y:currentY,type:"mouse",
target:startTarget};event["isRightClick"]=isRightButton;events.dragcancel.call(node,event)}isDragging=false}}else if(isDragging){
if(!isDragPrevented){if(typeof events.dragstop==="function"){event["pointer"]={x:currentX,y:currentY,type:"mouse",target:startTarget
};event["isRightClick"]=isRightButton;events.dragstop.call(node,event)}}}else if(isLeftButton){if(typeof events.click==="function"){
event["pointer"]={x:currentX,y:currentY,type:"mouse",target:startTarget};event["isRightClick"]=isRightButton;events.click.call(node,event);
}}else if(isRightButton){if(typeof events.rightclick==="function"){event["pointer"]={x:currentX,y:currentY,type:"mouse",target:startTarget
};event["isRightClick"]=isRightButton;events.rightclick.call(node,event)}}if(typeof events.pointerup==="function"){event["pointer"]={
x:startX,y:startY,type:"mouse",target:startTarget};event["isRightClick"]=isRightButton;events.pointerup.call(node,event)}startX=undefined;
startY=undefined;startTarget=undefined;isDragging=false;isLeftButton=false;isRightButton=false;isDragPrevented=false;documentElement.removeEventListener(mouseMove,handleMove);
documentElement.removeEventListener(mouseUp,handleUp)};var handleDown=function(event){if(!events.keepDefault){event.returnValue=false;
if(typeof event.preventDefault==="function"){event.preventDefault()}}if(event.which){isLeftButton=event.which===leftKeyCode;isRightButton=event.which===rightKeyCode;
}else if(event.button){isLeftButton=event.button===leftButtonCode;isRightButton=event.button===rightButtonCode}else if(event.buttons){
isLeftButton=event.buttons===leftButtonCode;isRightButton=event.buttons===rightButtonCode}if(isLeftButton||isRightButton){if(isDragging){
if(typeof events.dragcancel==="function"){event["pointer"]={x:startX,y:startY,type:"mouse",target:startTarget};event["isRightClick"]=isRightButton;
events.dragcancel.call(node,event)}isDragging=false}startTarget=event.target||event.srcElement;if(inFixedElement){startX=event.clientX;
startY=event.clientY}else{startX=event.pageX;startY=event.pageY}if(typeof events.pointerdown==="function"){event["pointer"]={x:startX,
y:startY,type:"mouse",target:startTarget};event["isRightClick"]=isRightButton;events.pointerdown.call(node,event)}documentElement.addEventListener(mouseMove,handleMove,false);
documentElement.addEventListener(mouseUp,handleUp,false)}};node.addEventListener(mouseDown,handleDown,false);node.addEventListener(dragStart,handleDrag,false);
node.addEventListener(contextMenu,handleMenu,false)}}});ChessCom(function(globals){"use strict";if(globals.ChessBoardEngine){return;
}var ChessBoardEngine=globals.ChessBoardEngine=function ChessBoardEngine(){Object.keys(ChessBoardEngine.prototype).forEach(function(method){
this[method]=this[method].bind(this)},this);this.dragSys={currentBoard:null,activeObj:null,top:0,left:0,origTop:0,origLeft:0};this.refreshScrollPosition(false);
window.addEventListener("load",this.onWindowScroll);window.addEventListener("scroll",this.onWindowScroll);window.addEventListener("resize",this.onWindowScroll);
};ChessBoardEngine.prototype={findChessboard:function(event){var element=event.pointer?event.pointer.target:event.target;var chessboard;
var max=10;var i;for(i=0;i<max;i++){if(!element){break}if(element.chessBoard){chessboard=element.chessBoard;break}else{element=element.parentNode;
}}return chessboard},getScrollPosition:function(){return this.windowScroll},refreshScrollPosition:function(calculateBoardOffset){
this.windowScroll={top:Number(window.pageYOffset),left:Number(window.pageXOffset)};if(calculateBoardOffset!==false){var chessboards=document.getElementsByClassName("chessboard");
for(var i=0;i<chessboards.length;i++){if(chessboards[i].chessBoard){chessboards[i].chessBoard.calculateBoardOffset()}}}},onWindowScroll:function(){
if(this.windowScrollTimeout){clearTimeout(this.windowScrollTimeout)}this.windowScrollTimeout=setTimeout(this.refreshScrollPosition,200);
},onPointerUp:function(event){var chessboard=this.findChessboard(event);if(chessboard){chessboard._clearedMarkings=false}},onPointerDown:function(event){
this.clearMarkings(event);var chessboard=this.findChessboard(event);if(chessboard){chessboard.calculateBoardOffset();if(event.isRightClick){
event.userGenerated=true;chessboard.fireEvent("onRightDown",event)}else{event.position=chessboard._render.getColRowPosition(event.pointer);
chessboard.fireEvent("onPointerDown",event)}}},clearMarkings:function(event){if(!event.isRightClick){var chessboard=this.findChessboard(event);
if(chessboard){var colRow=chessboard._render.getColRowPosition(event.pointer);event.colRow=colRow;var fromAreaId=colRow.area;event.fromAreaId=fromAreaId;
this.dragSys.fromAreaId=fromAreaId;var hasMarkings=chessboard._markedArrows.length||chessboard._rightClickMarkedSquares.size;if(hasMarkings&&fromAreaId){
chessboard._clearedMarkings=true;event.userGenerated=true;chessboard.fireEvent("onClearMarkings",event)}}}},onDragStart:function(event){
var chessboard=this.findChessboard(event);if(!chessboard||!chessboard._enabled||chessboard._viewOnly){return false}if(chessboard.promotionWindowActive){
return false}if(!chessboard._render.isPieceClicked(event)&&!event.isRightClick){return false}var size=chessboard.getBoardSize();var position=chessboard._render.getColRowPosition(event.pointer,size);
position=this.adjustPositionColRow(position,event,chessboard.boardFlip);var fromAreaId=position.area;event.position=position;event.fromAreaId=fromAreaId;
this.dragSys.currentBoard=chessboard;this.dragSys.activeObj=null;this.dragSys.boardSize=size;this.dragSys.fromAreaId=fromAreaId;this.dragSys.x=event.pointer.x;
this.dragSys.y=event.pointer.y;chessboard._dragInProgress=false;chessboard._markingInProgress=false;chessboard._startDragOutsideBoard=fromAreaId==="";
if(event.isRightClick){chessboard._render.restoreDraggedPiece();if(chessboard.rightClickDragPoints&&position.inside){chessboard._markingInProgress=true;
this.dragSys.currentBoard=chessboard;chessboard.fireEvent("onStartDragging",event)}}else{if((chessboard.hasMarkings()||!chessboard._enabled)&&position.inside){
event.userGenerated=true;chessboard.fireEvent("onClearMarkings",event)}else{chessboard.unmarkInProgressMove();if(chessboard._markLastMove){
chessboard._markInProgressMove(event)}chessboard.fireEvent("onStartDragging",event)}}},onDragMove:function(event){var chessboard=this.dragSys.currentBoard;
if(!chessboard||!chessboard._enabled||chessboard._viewOnly){return}event.position=chessboard._render.getColRowPosition(event.pointer,this.dragSys.size);
chessboard.fireEvent("onDragProgress",event);chessboard._dragInProgress=true},onDragCancel:function(){var chessboard=this.dragSys.currentBoard;
if(!chessboard||!chessboard._enabled||chessboard._viewOnly){return}chessboard.cancelDragging()},onDrop:function(event){var chessboard=this.dragSys.currentBoard;
if(!chessboard||!chessboard._enabled||chessboard._viewOnly){if(chessboard){chessboard._render.restoreDraggedPiece()}return}if(chessboard._markingInProgress){
this.onDropArrow(event)}else{this.onDropPiece(event)}chessboard._dragInProgress=false;chessboard._markingInProgress=false;chessboard._render.draggingPiece=undefined;
},onDropPiece:function(event){var chessboard=this.dragSys.currentBoard;if(!chessboard||!chessboard._enabled||chessboard._viewOnly||!chessboard._dragInProgress){
return}if(chessboard.promotionWindowActive){chessboard._render.restoreDraggedPiece();return}var position=chessboard._render.getColRowPosition(event.pointer);
var targetAreaId=position.area;if(targetAreaId===this.dragSys.fromAreaId){chessboard._render.restoreDraggedPiece();return}event.position=position;
event.targetAreaId=targetAreaId;event.fromAreaId=this.dragSys.fromAreaId;if(position.inside){event.pieceDrop=true;chessboard.unmarkInProgressMove();
chessboard.fireEvent("onDropPiece",event)}else{chessboard.fireEvent("onThrowPiece",event)}},onDropArrow:function(){var chessboard=this.dragSys.currentBoard;
if(!chessboard||!chessboard._enabled||chessboard._viewOnly){return}if(chessboard._dragInProgress&&chessboard._render.isValidArrow(chessboard._markingObj)){
var fromAreaId=chessboard._render.getAreaIdFromColRow({col:chessboard._markingObj.fromX,row:chessboard._markingObj.fromY});var toAreaId=chessboard._render.getAreaIdFromColRow({
col:chessboard._markingObj.toX,row:chessboard._markingObj.toY});var arrowFound=false;for(var n=0;n<chessboard._markedArrows.length;n++){
if(chessboard._markedArrows[n].fromAreaId===fromAreaId){if(chessboard._markedArrows[n].toAreaId===toAreaId){arrowFound=true;chessboard.unmarkArrow(fromAreaId,toAreaId,true);
break}}}if(!arrowFound){chessboard.markArrow(fromAreaId,toAreaId,true)}}chessboard._render.cleanUpMarkingArrow();chessboard._markingObj=null;
},onDraggableClick:function(event){var chessboard=this.findChessboard(event);if(!chessboard||!chessboard._enabled||chessboard._viewOnly){
return}chessboard._dragInProgress=false;chessboard._markingInProgress=false;if(chessboard.promotionWindowActive){return}if(chessboard._startDragOutsideBoard){
return}var colRow=chessboard._render.getColRowPosition(event.pointer);colRow=this.adjustPositionColRow(colRow,event,chessboard.boardFlip);
var dropTargetId=colRow.area;event.dropTargetId=dropTargetId;if(dropTargetId){chessboard.fireEvent("onClickBoard",event)}this.dragSys.currentBoard=chessboard;
this.dragSys.activeObj=null;if(dropTargetId){if(chessboard._render.isPieceClicked(event)){chessboard.fireEvent("onClickPiece",event);
}else{chessboard.fireEvent("onClickArea",event)}}},onDraggableRightClick:function(event){var chessboard=this.findChessboard(event);
if(!chessboard||!chessboard._enabled||chessboard._viewOnly){return}chessboard._dragInProgress=false;chessboard._markingInProgress=false;
if(chessboard.promotionWindowActive){return}if(chessboard._startDragOutsideBoard){return}var colRow=chessboard._render.getColRowPosition(event.pointer);
colRow=this.adjustPositionColRow(colRow,event,chessboard.boardFlip);var dropTargetId=colRow.area;if(!dropTargetId){return}event.dropTargetId=dropTargetId;
if(chessboard.rightClickMarkSquare){if(chessboard._rightClickMarkedSquares[dropTargetId]){chessboard.unmarkArea(dropTargetId,true,true);
}else{var markColor=chessboard.rightClickMarkColors[0];if(event.shiftKey||event.ctrlKey){markColor=chessboard.rightClickMarkColors[1];
}else if(event.altKey){markColor=chessboard.rightClickMarkColors[2]}chessboard.markArea(dropTargetId,markColor,true,true)}}else if(chessboard._render.isPieceClicked(event)){
chessboard.fireEvent("onRightClickPiece",event)}else{chessboard.fireEvent("onRightClickArea",event)}},getColRowFromArea:function(areaId,boardFlip){
var file=areaId.charCodeAt(0)-96;var rank=areaId.charCodeAt(1)-48;if(boardFlip){file=8-file;rank--}else{rank=8-rank;file--}return{
row:rank+1,col:file+1}},adjustPositionColRow:function(position,event,boardFlip){if(event.pointer.target.area&&event.pointer.target.area!==position.area){
position.area=event.pointer.target.area;position.inside=true;position.outside=false;var newColRow=this.getColRowFromArea(position.area,boardFlip);
position.col=newColRow.col;position.row=newColRow.row}return position}};globals.chessBoardEngine=globals.chessBoardEngine||new ChessBoardEngine;
});ChessCom(function(globals){"use strict";if(globals.ChessBoard){return}var ChessBoardExtenders=globals.ChessBoardExtenders={};var ChessBoardRenderRegistry=globals.ChessBoardRenderRegistry={};
var useFen=globals.useFen;var myEvent=globals.myEvent;var Animation=globals.Animation;var GameSetup=globals.GameSetup;var ChessPiece3dInfo=globals.ChessPiece3dInfo;
var ChessBoardEvents=globals.ChessBoardEvents;var chessBoardEngine=globals.chessBoardEngine;var ChessBoard=globals.ChessBoard=function ChessBoard(rootName,gameSetup,opts){
if(typeof rootName==="string"){this.rootName=rootName;this.rootElement=document.getElementById(this.rootName)}else{this.rootName=rootName.id;
this.rootElement=rootName}this.rootElement.className+=" chessboard";this.boardAreaNode=this.rootElement;myEvent.registerComponent(this.rootName);
this.opts=opts?opts:{};var divContents;var firstChildNode=this.rootElement.childNodes[0];if(firstChildNode&&firstChildNode.data){
divContents=firstChildNode.data.replace(/^\s+/,"").replace(/\s+$/,"");if(divContents!==""){this.opts=eval("("+divContents+")")}}this.gameSetup=gameSetup?gameSetup:new GameSetup;
this._enabled=typeof this.opts.enabled==="boolean"?this.opts.enabled:true;this._markedSquares={size:0};this._rightClickMarkedSquares={
size:0};this._blinkSettings={};this._markedArrows=[];this._partiallyResized=false;this.defaultSize=45;this.dynamicSizeRange=window.devicePixelRatio>1?[20,150]:[20,300];
this.size=this.opts.boardSize?this.opts.boardSize==="auto"?0:Number(this.opts.boardSize):this.opts.size?this.opts.size==="auto"?0:Number(this.opts.size):this.defaultSize;
this._viewOnly=!!this.opts.viewOnly;this.preloadArrowImages=!!this.opts.preloadArrowImages;this.preloadPiecesImages=typeof this.opts.preloadPiecesImages==="boolean"?this.opts.preloadPiecesImages:true;
this.boardBorder=typeof this.opts.chessBoardBorder==="boolean"?this.opts.chessBoardBorder:true;this.roundedCorners=typeof this.opts.roundedCorners==="boolean"?this.opts.roundedCorners:true;
this.colorScheme=this.opts.colorScheme?this.opts.colorScheme:"green";this.backgroundOverlay=this.opts.backgroundOverlay?this.opts.backgroundOverlay:false;
this.backgroundOverlayRule="linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))";this.pieceStyle=this.opts.pieceStyle?this.opts.pieceStyle:"neo";
this.soundTheme=this.opts.soundTheme?this.opts.soundTheme:"default";this.boardFlip=typeof this.opts.boardFlip==="boolean"?this.opts.boardFlip:false;
this.boardCoords=typeof this.opts.boardCoords==="boolean"?this.opts.boardCoords:false;this.boardCoordsPosition=this.opts.boardCoordsPosition&&this.boardCoords?this.opts.boardCoordsPosition:"in";
this.board3d=!!ChessPiece3dInfo[this.pieceStyle];this.promotionPieces="qnrb";this.markSourceSquare=typeof this.opts.markSourceSquare==="boolean"?this.opts.markSourceSquare:true;
this.showHoverSquare=typeof this.opts.showHoverSquare==="boolean"?this.opts.showHoverSquare:true;this.hoverSquareColor="#FFF";this.hoverSquareAlpha=20;
this.rightClickMarkSquare=!!this.opts.rightClickMarkSquare;this.rightClickDragPoints=!!this.opts.rightClickDragPoints;this.rightClickMarkColors=["#f42a32","#75bb37","#0098c8"];
this.highlightLegalMoves=!!this.opts.highlightLegalMoves;this.highlightLegalMovesColor="#FFF";this._dragInProgress=false;this._markingInProgress=false;
this._markingObj=null;this.promotionWindowActive=false;this.promotionWindowInfo={};this.offsetx=0;this.offsety=0;this._animationIndexes={
default:{standard:.2,normal:.2,live:.2,bullet:0,blitz:.1},slow:{standard:.5,normal:.5,live:.4,bullet:.2,blitz:.2},battle:.6};this._animationType=this.opts["animationType"]||"default";
this._animationSpeedType=this.opts["moveAnimationSpeed"]||"normal";this._animationSpeed=0;this._lastAnimationTime=0;this._animating=false;
this._piecesHidden=false;this.rootElement.chessBoard=this;this._customEventStacks={};this._customEventQueue=[];this._customEventActive=true;
this.registerCustomEvent("onRenderReady");this.registerCustomEvent("onStartDragging");this.registerCustomEvent("onDragProgress");this.registerCustomEvent("onDropPiece");
this.registerCustomEvent("onThrowPiece");this.registerCustomEvent("onClickPiece");this.registerCustomEvent("onClickArea");this.registerCustomEvent("onClickBoard");
this.registerCustomEvent("onRightDown");this.registerCustomEvent("onPointerDown");this.registerCustomEvent("onRightClickPiece");this.registerCustomEvent("onRightClickArea");
this.registerCustomEvent("onBuild");this.registerCustomEvent("onRefresh");this.registerCustomEvent("onMarkSquare");this.registerCustomEvent("onClearSquare");
this.registerCustomEvent("onBlinkSquare");this.registerCustomEvent("onSetSquareColor");this.registerCustomEvent("onMarkArrow");this.registerCustomEvent("onClearArrow");
this.registerCustomEvent("onClearMarkings");this.registerCustomEvent("onBeforeSetPieceStyle");this.registerCustomEvent("onSetPieceStyle");
this.registerCustomEvent("onBeforeSetColorScheme");this.registerCustomEvent("onSetColorScheme");this.registerCustomEvent("onSetBoardSize");
this.registerCustomEvent("onSetBoardCoords");this.registerCustomEvent("onSetBoardCoordsPosition");this.registerCustomEvent("onSetBoardFlip");
this.registerCustomEvent("onSetPromotionPieces");this.registerCustomEvent("onBoardLoaded");this.registerCustomEvent("onShowPromotionWindow");
this.registerCustomEvent("onHidePromotionWindow");this.registerCustomEvent("onPromotionPieceSelected");this.registerCustomEvent("onMoveAnimation");
this.registerCustomEvent("onAfterMoveAnimated");this.registerCustomEvent("onCaptureAnimation");this.registerCustomEvent("onKingInCheckAnimation");
this.registerCustomEvent("onSetEnabled");this.registerCustomEvent("onSetViewOnly");this.registerCustomEvent("onHidePieces");this.registerCustomEvent("onShowPieces");
this.registerCustomEvent("onDynamicResize");this.registerCustomEvent("onPartialResize");this.registerCustomEvent("onSetAnimationType");
this.registerCustomEvent("onCommentElementAdded");this.attachEvent("onRenderReady",function(){this.fireQueuedEvents()},this);this.setAnimationType(this._animationType);
this.initializeRenderer();this.build();this.attachEvent("onBoardLoaded",this.storeStyle,this);this.attachEvent("onSetPieceStyle",this.storeStyle,this);
this.attachEvent("onSetColorScheme",this.storeStyle,this);this.attachEvent("onSetBoardCoords",this.storeStyle,this);this.attachEvent("onSetBoardCoordsPosition",this.storeStyle,this);
};ChessBoard.prototype={initializeRenderer:function(){var Renderer=ChessBoardRenderRegistry.DOM;if(this.pieceStyle==="real3d"){if(ChessBoardRenderRegistry.WebGL3D&&ChessBoardRenderRegistry.WebGL3D.isSupported()){
Renderer=ChessBoardRenderRegistry.WebGL3D}else{this.size=0;this.pieceStyle="classic"}}if(this.opts.forceBoardRender&&ChessBoardRenderRegistry[this.opts.forceBoardRender]){
Renderer=ChessBoardRenderRegistry[this.opts.forceBoardRender]}this._render=new Renderer(this)},registerCustomEvent:function(customName,context){
context=context||this;if(this._customEventStacks){this._customEventStacks[customName]={context:context,stack:[]}}},attachEvent:function(evt,funcObj,context){
if(this._customEventStacks){if(this._customEventStacks[evt]){this.detachEvent(evt,funcObj);this._customEventStacks[evt].stack.push({
callback:funcObj,context:context})}}return[evt,funcObj]},detachEvent:function(){var evt,funcObj;if(typeof arguments[0]=="object"&&arguments[0].length){
evt=arguments[0][0];funcObj=arguments[0][1]}else{evt=arguments[0];funcObj=arguments[1]}if(this._customEventStacks){if(this._customEventStacks[evt]){
for(var n=0;n<this._customEventStacks[evt].stack.length;n++){if(this._customEventStacks[evt].stack[n].callback==funcObj){this._customEventStacks[evt].stack.splice(n,1);
break}}}}},fireEvent:function(evt,evtExtend){var specialEvts={onSetBoardSize:true,onDynamicResize:true,onVariantChanged:true};evtExtend=typeof evtExtend=="object"?evtExtend:{};
evtExtend["customEventName"]=evt;if(evtExtend.returnValue===undefined){evtExtend.returnValue=true}if(!this._customEventStacks||!this._customEventStacks[evt]||!this._customEventStacks[evt].stack.length){
return evtExtend}var args=[evtExtend];for(var n=0;n<this._customEventStacks[evt].stack.length;n++){var context=this._customEventStacks[evt].stack[n].context||this._customEventStacks[evt].context;
if(this._customEventActive||specialEvts[evt]===true){this._customEventStacks[evt].stack[n].callback.apply(context,args)}else{this._customEventQueue.push({
context:context,callback:this._customEventStacks[evt].stack[n].callback,args:args})}}return evtExtend},fireQueuedEvents:function(){
while(this._customEventQueue.length){var evtInstance=this._customEventQueue.shift();evtInstance.callback.apply(evtInstance.context,evtInstance.args);
}for(var areaId in this._markedSquares){if(areaId!="size"&&this._markedSquares[areaId].deleted){delete this._markedSquares[areaId];
this._markedSquares.size--}}for(var areaId in this._rightClickMarkedSquares){if(areaId!="size"&&this._rightClickMarkedSquares[areaId].deleted){
delete this._rightClickMarkedSquares[areaId];this._rightClickMarkedSquares.size--}}for(var n=0;n<this._markedArrows.length;n++){if(this._markedArrows[n].deleted){
this._markedArrows[n].splice(n,1);n--}}},disableEvents:function(){this._customEventActive=false},enableEvents:function(){if(!this._customEventActive){
this._customEventActive=true;this.fireEvent("onRenderReady")}},build:function(){if(!this.built){this.fireEvent("onBuild");this.built=true;
if(!this._render.options.avoidRegisteringMouseEvents){this.chessboardEvents=new ChessBoardEvents(this.boardAreaNode);this.chessboardEvents.observe({
pointerup:chessBoardEngine.onPointerUp,pointerdown:chessBoardEngine.onPointerDown,dragstart:chessBoardEngine.onDragStart,dragmove:chessBoardEngine.onDragMove,
dragstop:chessBoardEngine.onDrop,dragcancel:chessBoardEngine.onDragCancel,click:chessBoardEngine.onDraggableClick,rightclick:chessBoardEngine.onDraggableRightClick
})}}},storeStyle:function(){try{window.localStorage.setItem("v3ChessBoardStyle",JSON.stringify({colorScheme:this.colorScheme,pieceStyle:this.pieceStyle,
boardCoords:this.boardCoords,boardCoordsPosition:this.boardCoordsPosition}))}catch(e){}},updateFromMove:function(moveNode){useFen(this.gameSetup,moveNode.fen);
},refresh:function(node){var e={moveNode:node};if(node){e["fromAreaId"]=node.fromAreaId;e["toAreaId"]=node.toAreaId;e["additionalInfo"]=node.additionalInfo;
e["moveText"]=node.moveText;e["fen"]=node.fen}this.fireEvent("onRefresh",e)},setPieceStyle:function(pieceStyle){if(pieceStyle!==this.pieceStyle&&pieceStyle!=="real3d"){
this.pieceStyle=pieceStyle;this.board3d=typeof ChessPiece3dInfo[this.pieceStyle]!="undefined";this.fireEvent("onBeforeSetPieceStyle");
this.fireEvent("onSetPieceStyle")}},setColorScheme:function(colorScheme){if(colorScheme!=this.colorScheme){var e={oldColorScheme:this.colorScheme
};this.colorScheme=colorScheme;this.fireEvent("onBeforeSetColorScheme");this.fireEvent("onSetColorScheme",e)}},setBoardCoords:function(boardCoords){
if(boardCoords!=this.boardCoords){this.boardCoords=boardCoords;if(this.boardCoordsPosition==="out"&&!boardCoords){this.setOutsideCoords(false);
}this.fireEvent("onSetBoardCoords")}},setOutsideCoords:function(outsideCoords){if(outsideCoords&&this.boardCoordsPosition=="in"||!outsideCoords&&this.boardCoordsPosition=="out"){
if(outsideCoords&&!this.boardCoords){this.setBoardCoords(true)}this.boardCoordsPosition=outsideCoords&&this.boardCoords?"out":"in";
this.fireEvent("onSetBoardCoordsPosition")}},setBoardSize:function(boardSize){boardSize=boardSize==="auto"?0:Number(boardSize);if(typeof boardSize!=="number"||isNaN(boardSize)){
boardSize=this.defaultSize}var sizeChanged=boardSize!==this.size;if(sizeChanged||this._partiallyResized){this.size=boardSize;this.autoSize=0;
this._partiallyResized=false;this.cancelAnimatingMoves();this.cancelDragging();this.fireEvent("onSetBoardSize",{size:boardSize,sizeChanged:sizeChanged
})}},getBoardSize:function(){if(this.size===0){if(!this.autoSize){this.calculateBoardSize()}return this.autoSize}else{return this.size;
}},getMarkingColor:function(){var scheme=this.colorScheme;return ChessColorScheme[scheme]?ChessColorScheme[scheme][4]:this._markSquareColor?this._markSquareColor:ChessColorScheme["default"][4];
},doDynamicResize:function(){this.cancelAnimatingMoves();this.cancelDragging();if(this.size===0){this.calculateBoardSize()}this.fireEvent("onDynamicResize");
},doPartialResize:function(size){this._partiallyResized=true;this.fireEvent("onPartialResize",{size:size})},setBoardFlip:function(boardFlip){
if(boardFlip!==this.boardFlip){this.boardFlip=boardFlip;this.cancelAnimatingMoves();this.cancelDragging();this.fireEvent("onSetBoardFlip");
}},setPromotionPieces:function(pieces){if(pieces!==this.promotionPieces){this.promotionPieces=pieces;this.fireEvent("onSetPromotionPieces");
}},showPromotionWindow:function(whatid,whereid){this.promotionWindowActive=true;this.promotionWindowInfo.promotionWhatId=whatid;this.promotionWindowInfo.promotionWhereId=whereid;
this.fireEvent("onShowPromotionWindow")},hidePromotionWindow:function(){if(this.promotionWindowActive){this.promotionWindowActive=false;
this.promotionWindowInfo={};this.fireEvent("onHidePromotionWindow")}},selectPromotionPiece:function(pieceType){this.fireEvent("onPromotionPieceSelected",{
pieceType:pieceType});this.promotionWindowActive=false},markArea:function(areaId,color,rightClicked,userGenerated,legalMoveHint){
rightClicked=!!rightClicked;var squareStack=rightClicked?this._rightClickMarkedSquares:this._markedSquares;if(!squareStack[areaId]){
squareStack[areaId]={}}if(color){squareStack[areaId].deleted=false;squareStack[areaId].color=color;squareStack.size++;this.fireEvent("onMarkSquare",{
squareStack:squareStack,areaId:areaId,color:color,userGenerated:userGenerated,rightClicked:rightClicked,legalMoveHint:legalMoveHint
})}else{this.unmarkArea(areaId,rightClicked,userGenerated)}},unmarkArea:function(areaId,rightClicked,userGenerated){if(typeof rightClicked=="undefined"){
rightClicked=false}var squareStack=rightClicked?this._rightClickMarkedSquares:this._markedSquares;if(squareStack[areaId]){this.fireEvent("onClearSquare",{
squareStack:squareStack,areaId:areaId,userGenerated:userGenerated,rightClicked:rightClicked});if(this._customEventActive){delete squareStack[areaId];
squareStack.size--}else{squareStack[areaId].deleted=true}}},_markInProgressMove:function(e){if(this.markSourceSquare){if(e["fromAreaId"]){
if(!this._markedSquares[e["fromAreaId"]]){this._markedInProgressMoveAreas=this._markedInProgressMoveAreas||{};var squareColor=this.getMarkingColor();
this.markArea(e["fromAreaId"],squareColor);this._markedInProgressMoveAreas.fromAreaId=e["fromAreaId"]}}}},unmarkInProgressMove:function(){
if(this._markedInProgressMoveAreas){if(this._markedInProgressMoveAreas.fromAreaId){this.unmarkArea(this._markedInProgressMoveAreas.fromAreaId);
delete this._markedInProgressMoveAreas.fromAreaId}}},blinkSquare:function(areaId,color,count,freq){this.markArea(areaId,color);this._blinkSettings={
interval:null,areaId:areaId,color:color,count:count*2,freq:Math.floor(freq/2)};this.fireEvent("onBlinkSquare")},markArrow:function(fromAreaId,toAreaId,userGenerated){
for(var n=0;n<this._markedArrows.length;n++){if(this._markedArrows[n].fromAreaId==fromAreaId&&this._markedArrows[n].toAreaId==toAreaId){
return}}this._markedArrows.push({fromAreaId:fromAreaId,toAreaId:toAreaId});this.fireEvent("onMarkArrow",{arrow:this._markedArrows[this._markedArrows.length-1],
userGenerated:userGenerated})},setSquareColor:function(color,areaId){this.fireEvent("onSetSquareColor",{color:color,areaId:areaId
})},unmarkArrow:function(fromAreaId,toAreaId,userGenerated){for(var n=0;n<this._markedArrows.length;n++){if(this._markedArrows[n].fromAreaId==fromAreaId&&this._markedArrows[n].toAreaId==toAreaId){
this.fireEvent("onClearArrow",{arrow:this._markedArrows[n],userGenerated:userGenerated});if(this._customEventActive){this._markedArrows.splice(n,1);
}else{this._markedArrows[n].deleted=true}break}}},clearMarkedArrows:function(){this.fireEvent("onClearMarkings")},hasMarkings:function(){
return this._markedArrows.length||this._rightClickMarkedSquares.size},setEnabled:function(enabled){if(enabled!==this._enabled){this._enabled=enabled;
this.fireEvent("onSetEnabled")}},canAnimateMove:function(){return this._animationType!=="off"&&!this._animating&&!this._piecesHidden&&!this._preventAnimations&&this._customEventActive&&(!Animation.isAnimating()||!Animation.isBlocking())&&Animation.canAnimate();
},animateMove:function(fromAreaId,toAreaId,opts){opts=opts||{};var animSpeed="animationSpeed"in opts?opts.animationSpeed:this._animationSpeed;
if(this.canAnimateMove()&&animSpeed>0){var customEvent={};customEvent.fromAreaId=fromAreaId;customEvent.toAreaId=toAreaId;customEvent.fileFrom=this.boardFlip?8-(fromAreaId.charCodeAt(0)-96):fromAreaId.charCodeAt(0)-97;
customEvent.rankFrom=this.boardFlip?fromAreaId.charCodeAt(1)-49:8-(fromAreaId.charCodeAt(1)-48);customEvent.fileTo=this.boardFlip?8-(toAreaId.charCodeAt(0)-96):toAreaId.charCodeAt(0)-97;
customEvent.rankTo=this.boardFlip?toAreaId.charCodeAt(1)-49:8-(toAreaId.charCodeAt(1)-48);customEvent.animationType=this._animationType;
customEvent.animationSpeed=animSpeed;customEvent.animationOptions=opts;if(opts.castling){customEvent.castling=true;customEvent.castlingUndo=opts.castlingUndo;
customEvent.rookFromAreaId=opts.castling.fromAreaId;customEvent.rookToAreaId=opts.castling.toAreaId;customEvent.rookFileFrom=this.boardFlip?8-(opts.castling.fromAreaId.charCodeAt(0)-96):opts.castling.fromAreaId.charCodeAt(0)-97;
customEvent.rookRankFrom=this.boardFlip?opts.castling.fromAreaId.charCodeAt(1)-49:8-(opts.castling.fromAreaId.charCodeAt(1)-48);customEvent.rookFileTo=this.boardFlip?8-(opts.castling.toAreaId.charCodeAt(0)-96):opts.castling.toAreaId.charCodeAt(0)-97;
customEvent.rookRankTo=this.boardFlip?opts.castling.toAreaId.charCodeAt(1)-49:8-(opts.castling.toAreaId.charCodeAt(1)-48)}this.fireEvent("onMoveAnimation",customEvent);
if(opts.capture){var captureEvent={};captureEvent.fromAreaId=opts.capture;captureEvent.fileFrom=customEvent.fileTo;captureEvent.rankFrom=customEvent.rankTo;
captureEvent.capturedByFile=customEvent.fileFrom;captureEvent.capturedByRank=customEvent.rankFrom;captureEvent.animationType=this._animationType;
captureEvent.animationSpeed=animSpeed;this.fireEvent("onCaptureAnimation",captureEvent)}if(opts.kingInCheck){var checkEvent={};checkEvent.kingArea=opts.kingInCheck;
checkEvent.animationType=this._animationType;checkEvent.animationSpeed=animSpeed;this.fireEvent("onKingInCheckAnimation",checkEvent);
}this._animating=true}else{this._preventAnimations=true;if(this._preventAnimationsTimeout){clearTimeout(this._preventAnimationsTimeout);
this._preventAnimationsTimeout=undefined}this.cancelAnimatingMoves(function(){this._preventAnimationsTimeout=setTimeout(function(){
this._preventAnimations=false}.bind(this),500);this.afterMoveAnimated(null,opts)}.bind(this))}},afterMoveAnimated:function(anim,animOptions){
this.fireEvent("onAfterMoveAnimated",{animationInstance:anim,animationOptions:animOptions});this._animating=false;if(animOptions.after){
animOptions.after(anim,animOptions)}},cancelAnimatingMoves:function(callback){Animation.endAll(callback);this._animating=false},cancelDragging:function(){
this._dragInProgress=false;this._markingInProgress=false;this._render.restoreDraggedPiece();chessBoardEngine.dragSys.currentBoard=null;
},setViewOnly:function(val){if(val!==this._viewOnly){this._viewOnly=val;this.fireEvent("onSetViewOnly")}},hidePieces:function(){if(!this._piecesHidden){
this._piecesHidden=true;this.fireEvent("onHidePieces")}},showPieces:function(){if(this._piecesHidden){this._piecesHidden=false;this.fireEvent("onShowPieces");
}},calculateBoardOffset:function(){var rect=this.rootElement.getBoundingClientRect();var scroll=chessBoardEngine.getScrollPosition();
this.offsety=rect.top+scroll.top;this.offsetx=rect.left+scroll.left},calculateBoardSize:function(forceRecalculate){var rect=this.rootElement.parentNode.getBoundingClientRect();
var width=rect.width||rect.right-rect.left;var height=rect.height||rect.bottom-rect.top;if(width&&height){if(this.boardCoordsPosition==="out"){
width-=width/8/3;height-=height/8/3}var maxSize=Math.min(width,height);var squareSize=Math.floor(maxSize/8);var minSize=this.dynamicSizeRange[0];
this.autoSize=Math.max(minSize,squareSize)}if(typeof this.autoSize!=="number"||isNaN(this.autoSize)){this.autoSize=this.defaultSize;
}},setAnimationType:function(animationType){this._animationType=animationType;var animationIndex=this._animationIndexes[this._animationType];
if(typeof animationIndex==="object"){this._animationSpeed=animationIndex[this._animationSpeedType]}else{this._animationSpeed=animationIndex;
}this.fireEvent("onSetAnimationType")}}});ChessCom(function(globals){"use strict";if(globals.ChessBoardDOM){return}var Config=globals.config;
var Animation=globals.Animation;var AnimationTypes=globals.AnimationTypes;var ChessPieceStyle=globals.ChessPieceStyle;var ChessPiece3dInfo=globals.ChessPiece3dInfo;
var ChessColorScheme=globals.ChessColorScheme;var ChessBoardRenderRegistry=globals.ChessBoardRenderRegistry;var transformStyle="webkitTransform"in document.body.style?"webkitTransform":"transform";
var ChessBoardDOM=globals.ChessBoardDOM=function ChessBoardDOM(board){this._board=board;this.rootName=board.rootName;this.boardRows=[8,7,6,5,4,3,2,1];
this.boardCols=["a","b","c","d","e","f","g","h"];this.flippedBoardRows=[1,2,3,4,5,6,7,8];this.flippedBoardCols=["h","g","f","e","d","c","b","a"];
this._pieces=[{p:[],n:[],k:[],q:[],r:[],b:[]},{p:[],n:[],k:[],q:[],r:[],b:[]}];this._markElements=[];this._pieceElements=[];this._piecesToDelete={};
this.options={pieceTypes:["p","n","k","q","r","b"],legalMoveHintSquareColor:"#000",legalMoveHintFieldFillRatio:.35,avoidRegisteringMouseEvents:false
};this._pieceStyleUrl=null;this._pieceStyleImageFormat="png";this._pieceStyleImagePath=null;this._promotionPieceStyleUrl=null;this._promotionPieceStyleImageFormat=null;
this.gfxUrl=this._board.opts.gfxUrl||Config.GfxUrl;this.arrowsPath=Config.ChessBoardArrowsPath||"/arrows";this.piecesPath=Config.ChessBoardPiecesPath||"/pieces";
this.backgroundsPath=Config.ChessBoardBackgroundsPath||"/boards";this._bordersWidth=this._useBorders?2:0;this._cacheSize=null;this._currentSize=null;
this._overrideSize=null;this._resizingTimeoutId=null;this._preloadData={};this._preloadImgList=[];this._preloadingImgList=[];this.defaultMoveAnimation={
easing:"easeLinear",onUpdate:function(target,updatedValues){this.setElementPosition(target,updatedValues.top,updatedValues.left)}
};this._moveAnimation=null;this._board.attachEvent("onBuild",this.onBuild,this);this._board.attachEvent("onRefresh",this.onRefresh,this);
this._board.attachEvent("onStartDragging",this.onStartDragging,this);this._board.attachEvent("onDragProgress",this.onDragProgress,this);
this._board.attachEvent("onDropPiece",this.onDropPiece,this);this._board.attachEvent("onThrowPiece",this.onThrowPiece,this);this._board.attachEvent("onClickArea",this.onClickArea,this);
this._board.attachEvent("onRightClickArea",this.onRightClickArea,this);this._board.attachEvent("onSetEnabled",this.onSetViewOnly,this);
this._board.attachEvent("onSetViewOnly",this.onSetViewOnly,this);this._board.attachEvent("onHidePieces",this.onHidePieces,this);this._board.attachEvent("onShowPieces",this.onShowPieces,this);
this._board.attachEvent("onDynamicResize",this.onDynamicResize,this);this._board.attachEvent("onPartialResize",this.onPartialResize,this);
this._board.attachEvent("onSetPieceStyle",this.onSetPieceStyle,this);this._board.attachEvent("onSetColorScheme",this.onSetColorScheme,this);
this._board.attachEvent("onSetBoardCoords",this.onSetBoardCoords,this);this._board.attachEvent("onSetBoardCoordsPosition",this.onSetBoardCoordsPosition,this);
this._board.attachEvent("onSetBoardSize",this.onSetBoardSize,this);this._board.attachEvent("onSetBoardFlip",this.onSetBoardFlip,this);
this._board.attachEvent("onSetPromotionPieces",this.onSetPromotionPieces,this);this._board.attachEvent("onShowPromotionWindow",this.onShowPromotionWindow,this);
this._board.attachEvent("onHidePromotionWindow",this.onHidePromotionWindow,this);this._board.attachEvent("onPromotionPieceSelected",this.onPromotionPieceSelected,this);
this._board.attachEvent("onMoveAnimation",this.onMoveAnimation,this);this._board.attachEvent("onCaptureAnimation",this.onCaptureAnimation,this);
this._board.attachEvent("onKingInCheckAnimation",this.onKingInCheckAnimation,this);this._board.attachEvent("onMarkSquare",this.onMarkSquare,this);
this._board.attachEvent("onClearSquare",this.onClearSquare,this);this._board.attachEvent("onBlinkSquare",this.onBlinkSquare,this);
this._board.attachEvent("onSetSquareColor",this.onSetSquareColor,this);this._board.attachEvent("onMarkArrow",this.onMarkArrow,this);
this._board.attachEvent("onClearArrow",this.onClearArrow,this);this._board.attachEvent("onClearMarkings",this.onClearMarkings,this);
};ChessBoardRenderRegistry["DOM"]=ChessBoardDOM;ChessBoardDOM.prototype={setElementPosition:function(element,top,left){var translate="translate("+left+"px, "+top+"px)";
if(element.style[transformStyle]!==translate){element.style[transformStyle]=translate}},onBuild:function(){var chessboard=this._board;
chessboard.disableEvents();chessboard.rootElement.style.marginLeft="auto";chessboard.rootElement.style.marginRight="auto";chessboard.rootElement.style.cursor="default";
chessboard.rootElement.style.backgroundSize="100% 100%";chessboard.rootElement.style.border=chessboard.boardBorder?"1px solid #777":"none";
this.boardAreaElement=document.createElement("div");this.boardAreaElement.id=chessboard.rootName+"_boardarea";this.boardAreaElement.style.position="relative";
this.boardAreaElement.style.margin="0px";this.boardAreaElement.style.padding="0px";this.boardAreaElement.style.background="none transparent";
this.boardAreaElement.style.border=chessboard.boardBorder?"1px solid #333":"none";if(chessboard.roundedCorners){chessboard.rootElement.style.borderRadius="3px";
chessboard.rootElement.style.WebkitBorderRadius="3px";chessboard.rootElement.style.MozBorderRadius="3px";this.boardAreaElement.style.borderRadius="3px";
this.boardAreaElement.style.WebkitBorderRadius="3px";this.boardAreaElement.style.MozBorderRadius="3px"}this.cachePieceStyle();this.setViewportSize();
this.buildCoords();this.buildPromotionWindow();this.refreshCoords();for(var i=0;i<20;i++){this.removePieceElement(this.createPieceElement());
}chessboard.boardAreaNode=this.boardAreaElement;chessboard.rootElement.appendChild(this.boardAreaElement);this.preloadAssets(function(){
this.refreshBackground();this._board.calculateBoardOffset();this._board.enableEvents();this._board.fireEvent("onBoardLoaded")}.bind(this));
},buildCoords:function(){var coordElement;var darkLight;var digit;var letter;this.coordsNumberElements=[];this.coordsLetterElements=[];
for(digit=0;digit<8;digit++){darkLight=digit%2?"dark":"light";coordElement=document.createElement("div");coordElement.className="coords-item coords-"+darkLight;
coordElement.style.position="absolute";coordElement.style.overflow="hidden";coordElement.style.pointerEvents="none";this.coordsNumberElements[digit]=coordElement;
this.boardAreaElement.appendChild(coordElement)}for(letter=0;letter<8;letter++){darkLight=letter%2?"light":"dark";coordElement=document.createElement("div");
coordElement.className="coords-item coords-"+darkLight;coordElement.style.position="absolute";coordElement.style.overflow="hidden";
coordElement.style.pointerEvents="none";this.coordsLetterElements[letter]=coordElement;this.boardAreaElement.appendChild(coordElement);
}},buildPromotionWindow:function(){var baseName=this._board.rootName;this.promotionAreaElement=document.createElement("div");this.promotionAreaElement.id=baseName+"_promotionarea";
this.promotionAreaElement.className="promotion-area";this.promotionAreaElement.style.position="absolute";this.promotionAreaElement.style.display="none";
this.promotionAreaElement.style.zIndex=66;this.promotionAreaElement.style.margin="0px";this.promotionAreaElement.style.padding="0px";
this.promotionAreaElement.style.background="#fff";this.promotionAreaElement.style.border="none";this.promotionAreaElement.style.overflow="hidden";
this.promotionAreaContentElement=document.createElement("div");this.promotionAreaContentElement.id=baseName+"_promotionarea_content";
this.promotionAreaContentElement.style.position="absolute";this.promotionAreaCloseButtonElement=document.createElement("i");this.promotionAreaCloseButtonElement.id=baseName+"_promotionarea_close_button";
this.promotionAreaCloseButtonElement.className="icon-x";this.promotionAreaCloseButtonElement.style.position="absolute";this.promotionAreaCloseButtonElement.style.left="0px";
this.promotionAreaCloseButtonElement.style.cursor="pointer";this.promotionAreaCloseButtonElement.style.background="#f1f1f1";this.promotionAreaCloseButtonElement.style.width="100%";
this.promotionAreaElement.appendChild(this.promotionAreaContentElement);this.promotionAreaElement.appendChild(this.promotionAreaCloseButtonElement);
this.boardAreaElement.appendChild(this.promotionAreaElement);this.buildPromotionPieces();this.updatePromotionWindowSize();this.promotionAreaElement.addEventListener("click",this.onPromotionAreaClick.bind(this));
this.promotionAreaElement.addEventListener("touchstart",function(event){event.stopPropagation()})},buildPromotionPieces:function(){
var size=this._board.getBoardSize();var promotionAreaContentElement=this.promotionAreaContentElement;while(promotionAreaContentElement.childNodes.length){
promotionAreaContentElement.removeChild(promotionAreaContentElement.firstChild)}this.promotionPieceElements={};var pieces=this._board.promotionPieces;
var pieceElement;var piece;var i;for(i=0;i<pieces.length;i++){piece=pieces.charAt(i);pieceElement=document.createElement("img");pieceElement.setAttribute("piece",piece);
pieceElement.id=this.rootName+"_promotion"+piece;pieceElement.style.position="absolute";pieceElement.style.margin="0px";pieceElement.style.left="0px";
pieceElement.style.top=size*i+"px";pieceElement.style.width=size+"px";pieceElement.style.height=size+"px";pieceElement.style.maxWidth="none";
pieceElement.style.minWidth="none";pieceElement.style.maxHeight="none";pieceElement.style.minHeight="none";pieceElement.style.border="0px";
pieceElement.width=size;pieceElement.height=size;this.promotionPieceElements[piece]=pieceElement;promotionAreaContentElement.appendChild(pieceElement);
}},updatePromotionWindowSize:function(){var size=this._board.getBoardSize();var piecesHeight=size*this._board.promotionPieces.length;
var closeButtonHeight=size/3;this.promotionAreaElement.style.width=size+"px";this.promotionAreaElement.style.height=piecesHeight+closeButtonHeight+"px";
this.promotionAreaCloseButtonElement.style.height=closeButtonHeight+"px";this.promotionAreaCloseButtonElement.style.fontSize=closeButtonHeight+"px";
this.promotionAreaCloseButtonElement.style.lineHeight=closeButtonHeight+"px"},updatePromotionWindowPosition:function(){if(!this._board.promotionWindowActive){
return}var size=this._board.getBoardSize();var closeButtonHeight=size/3;var file=this._board.promotionWindowInfo.promotionWhereId.charCodeAt(0)-96;
var rank=this._board.promotionWindowInfo.promotionWhereId.charCodeAt(1)-48;var row=this._board.boardFlip?9-rank:rank;var column=this._board.boardFlip?9-file:file;
var top=row===1?size*(8-this._board.promotionPieces.length)-closeButtonHeight:0;var left=size*(column-1);this.setElementPosition(this.promotionAreaElement,top,left);
if(row===1){this.promotionAreaContentElement.style.top=closeButtonHeight+"px";this.promotionAreaCloseButtonElement.style.top="0px";
this.promotionAreaCloseButtonElement.style.bottom="auto"}else{this.promotionAreaContentElement.style.top="0px";this.promotionAreaCloseButtonElement.style.top="auto";
this.promotionAreaCloseButtonElement.style.bottom="0px"}},refreshPromotionWindow:function(){this.updatePromotionWindowSize();this.updatePromotionWindowPosition();
},onPromotionAreaClick:function(event){var piece=event.target.getAttribute("piece");if(piece){this._board.selectPromotionPiece(piece);
}else{this.restoreDraggedPiece();this._board.refresh();this._board.hidePromotionWindow()}event.preventDefault();event.stopPropagation();
},onPartialResize:function(event){var size=this._cacheSize=this._board.size=event.size;this.setViewportSize(size);this.placeCoords();
this.refreshAllPiecesStyle();this.refreshAllPiecesSize();this.refreshMarkedSquares();this._board.refresh();this._board.calculateBoardOffset();
},onDynamicResize:function(){this.setViewportSize();this.refreshBackground();this.refreshPromotionWindow();this.placeCoords();this.refreshAllPiecesStyle();
this.refreshAllPiecesSize();this.refreshMarkedSquares();this._board.refresh();this._board.calculateBoardOffset();if(this._resizingTimeoutId){
clearTimeout(this._resizingTimeoutId)}this._resizingTimeoutId=setTimeout(function(){this.preloadAssets(function(){this.refreshBackground();
this.refreshAllPiecesStyle();if(!Animation.isAnimating()){this._board.refresh()}}.bind(this))}.bind(this),200)},setViewportSize:function(size){
size=size||this._board.getBoardSize();var chessboard=this._board;var borderSize=chessboard.boardBorder?2:0;var boardSize=size*8;this.boardAreaElement.style.width=boardSize+"px";
this.boardAreaElement.style.height=boardSize+"px";chessboard.rootElement.style.width=boardSize+borderSize+"px";chessboard.rootElement.style.height=boardSize+borderSize+"px";
chessboard.rootElement.style.marginBottom=chessboard.boardCoordsPosition==="in"?"0":size/2+"px"},haveAssetsChanged:function(){var size=this._board.getBoardSize();
if(window.devicePixelRatio>1){size=size*2}return this._preloadData.size!==size||this._preloadData.pieceStyle!==this._board.pieceStyle||this._preloadData.colorScheme!==this._board.colorScheme;
},preloadAssets:function(callback){if(!this.haveAssetsChanged()){setTimeout(callback,1);return}var size=this._board.getBoardSize();
if(window["devicePixelRatio"]>1){size=size*2}if(size<20){size=20}this.cachePieceStyle();var colorScheme=ChessColorScheme[this._board.colorScheme]||ChessColorScheme["default"];
if(!colorScheme[2]){colorScheme[2]=this._board.colorScheme}var images=[];images.push({src:this.gfxUrl+this.backgroundsPath+"/"+colorScheme[2]+"/"+size+colorScheme[3],
img:null,loaded:false});if(this._board.preloadPiecesImages){var piecesArray=["bp","br","bn","bb","bk","bq","wp","wr","wn","wb","wk","wq"];
for(var n=0;n<piecesArray.length;n++){images.push({src:this._pieceStyleUrl+"/"+piecesArray[n]+"."+this._pieceStyleImageFormat,loaded:false
})}images.push({src:this.gfxUrl+"/effects/boom.png",loaded:false});if(this._promotionPieceStyleUrl!==this._pieceStyleUrl){var colors=["w","b"];
var promotionPieces=this._board.promotionPieces;for(var i=0;i<colors.length;i++){for(var n=0;n<promotionPieces.length;n++){images.push({
src:this._promotionPieceStyleUrl+"/"+colors[i]+promotionPieces[n]+"."+this._promotionPieceStyleImageFormat,loaded:false})}}}}var fullyLoaded=function(){
this._preloadImgList=images;this._currentSize=size;this._preloadData={size:size,pieceStyle:this._board.pieceStyle,colorScheme:this._board.colorScheme
};callback()}.bind(this);var imageLoaded=function(){var loaded=true;var image;var i;for(i=0;i<images.length;i++){image=images[i];if(image.img===this||image.src===this.src){
image.loaded=true}else if(!image.loaded){loaded=false}}if(loaded){fullyLoaded()}};var imageErrored=function(){imageLoaded.call(this);
setTimeout(function(){var cacheSrc=this.src;this.onload=null;this.onerror=null;this.src="";this.src=cacheSrc}.bind(this),1)};images.forEach(function(image){
image.img=new Image;image.img.onload=imageLoaded;image.img.onerror=imageErrored});images.forEach(function(image){image.img.src=image.src;
});if(this._board.preloadArrowImages){setTimeout(this.preloadArrowImages.bind(this),1)}},onRefresh:function(){if(!this._board._piecesHidden){
this.refreshAllAreas();if(this._board._markedArrows.length){this._refreshMarkedArrows()}}},getAllPieces:function(){var all=[];COLORS:for(var color=0;color<2;color++){
TYPES:for(var t=0;t<6;t++){var type=this.options.pieceTypes[t];var pieces=this._pieces[color][type];var length=pieces.length;PIECES:for(var i=0;i<length;i++){
var piece=pieces[i];all.push(piece)}}}return all},getPieceAreas:function(){var areas={};COLORS:for(var color=0;color<2;color++){TYPES:for(var t=0;t<6;t++){
var type=this.options.pieceTypes[t];var pieces=this._pieces[color][type];var length=pieces.length;PIECES:for(var i=0;i<length;i++){
var piece=pieces[i];areas[piece.area]=piece}}}return areas},deleteMarkedPieces:function(){COLORS:for(var color=0;color<2;color++){
TYPES:for(var t=0;t<6;t++){var type=this.options.pieceTypes[t];var deleted=[];var pieces=this._pieces[color][type];var length=pieces.length;
var piece;var i;PIECES:for(i=0;i<length;i++){piece=pieces[i];if(this._piecesToDelete[piece.area]){deleted.push(piece)}}DELETED:while(deleted.length){
piece=deleted.pop();length=pieces.length;PIECES:for(i=0;i<length;i++){if(piece===pieces[i]){pieces.splice(i,1);var element=piece.element;
var parent=element.parentNode;if(parent){parent.removeChild(element)}break PIECES}}}}}this._piecesToDelete={}},getPieceElement:function(area){
COLORS:for(var color=0;color<2;color++){TYPES:for(var t=0;t<6;t++){var type=this.options.pieceTypes[t];var pieces=this._pieces[color][type];
var length=pieces.length;PIECES:for(var i=0;i<length;i++){if(pieces[i].area===area){return pieces[i].element}}}}},createPieceElement:function(){
var pieceElement;if(this._pieceElements.length){pieceElement=this._pieceElements.pop()}else{pieceElement=document.createElement("img");
pieceElement.className="chess_com_piece";pieceElement.style.position="absolute";pieceElement.style.margin="0px";pieceElement.style.padding="0px";
pieceElement.style.display="block";pieceElement.style.overflow="hidden";this.boardAreaElement.appendChild(pieceElement)}pieceElement.style.opacity=1;
pieceElement.style.pointerEvents="";if(this._board._enabled&&!this._board._viewOnly){pieceElement.className="chess_com_piece chess_com_draggable";
}else{pieceElement.className="chess_com_piece"}return pieceElement},removePieceElement:function(pieceElement){pieceElement.className="";
pieceElement.style.opacity=0;pieceElement.style.pointerEvents="none";this._pieceElements.push(pieceElement)},deletePieceAt:function(area){
COLORS:for(var color=0;color<2;color++){TYPES:for(var t=0;t<6;t++){var type=this.options.pieceTypes[t];var pieces=this._pieces[color][type];
var length=pieces.length;PIECES:for(var i=0;i<length;i++){var piece=pieces[i];if(piece.area===area){this.removePieceElement(piece.element);
pieces.splice(i,1);break COLORS}}}}},refreshAllPieces:function(){COLORS:for(var color=0;color<2;color++){TYPES:for(var t=0;t<6;t++){
var type=this.options.pieceTypes[t];var deleted=[];var pieces=this._pieces[color][type];var length=pieces.length;var piece;var pieceRank;
var zIndex;var i;PIECES:for(i=0;i<length;i++){piece=pieces[i];if(piece.refreshed){piece.refreshed=false}else{deleted.push(piece)}
if(this._board.board3d){pieceRank=piece.area.charCodeAt(1)-48;zIndex=!this._board.boardFlip?5+(8-pieceRank):12-(8-pieceRank);if(Number(piece.element.style.zIndex)!==zIndex){
piece.element.style.zIndex=zIndex}}}DELETED:while(deleted.length){piece=deleted.pop();length=pieces.length;PIECES:for(i=0;i<length;i++){
if(piece===pieces[i]){this.removePieceElement(piece.element);pieces.splice(i,1);break PIECES}}}}}},getPieceUrl:function(type,color){
return this._pieceStyleUrl+"/"+(color===1?"w":"b")+type+"."+this._pieceStyleImageFormat},refreshAllPiecesStyle:function(){var pieces=this.getAllPieces();
var length=pieces.length;for(var i=0;i<length;i++){var piece=pieces[i];piece.element.src=this.getPieceUrl(piece.type,piece.color);
}},refreshPieceSize:function(piece){var size=this._board.getBoardSize();var pieceMarginRatio=ChessPiece3dInfo[this._board.pieceStyle];
var pieceElement=piece.element;pieceElement.width=size;pieceElement.style.width=size+"px";if(pieceMarginRatio&&pieceMarginRatio[piece.type]){
var ratio=pieceMarginRatio[piece.type];var margin="-"+(size*ratio-size);pieceElement.height=size*ratio;pieceElement.style.height=size*ratio+"px";
pieceElement.style.marginTop=margin+"px"}else{pieceElement.height=size;pieceElement.style.height=size+"px";pieceElement.style.marginTop="0";
}},refreshAllPiecesSize:function(){this.getAllPieces().forEach(this.refreshPieceSize,this)},refreshAllAreas:function(){for(var area in this._board.gameSetup.areas){
this.refreshArea(area)}this.refreshAllPieces();this.deleteMarkedPieces()},refreshArea:function(areaParam){var gameSetup=this._board.gameSetup;
var area=gameSetup.areas[areaParam];var size=this._board.getBoardSize();var piece=area.pieces[0]?gameSetup.pieces[area.pieces[0]]:undefined;
if(piece){var currentPiece;var pieceList=this._pieces[piece.color-1][piece.type];var pieceListLength=pieceList.length;for(var pp=0;pp<pieceListLength;pp++){
var pieceItem=pieceList[pp];if(!pieceItem.refreshed){if(currentPiece){if(pieceItem.area===areaParam){pieceItem.refreshed=true;currentPiece.refreshed=false;
currentPiece=pieceItem}}else{pieceItem.refreshed=true;currentPiece=pieceItem}}}var isDraggingPiece=this._board._dragInProgress&&this.draggingPiece&&currentPiece&&!this.draggingPiece.dropped&&this.draggingPiece.element===currentPiece.element;
if(isDraggingPiece){var draggingArea=this.draggingPiece.position.area;if(draggingArea===areaParam&&draggingArea===currentPiece.area){
return}else{this.draggingPiece=null}}var areaChanged=true;var pieceElement;if(currentPiece){pieceElement=currentPiece.element;areaChanged=currentPiece.area!==areaParam;
currentPiece.area=areaParam}var file=areaParam.charCodeAt(0)-96;var rank=areaParam.charCodeAt(1)-48;var top;var left;if(this._board.boardFlip){
top=size*(rank-1);left=size*(8-file)}else{top=size*(8-rank);left=size*(file-1)}if(!pieceElement){pieceElement=this.createPieceElement();
piece={area:areaParam,type:piece.type,color:piece.color,element:pieceElement,refreshed:true};this._pieces[piece.color-1][piece.type].push(piece);
pieceElement.src=this.getPieceUrl(piece.type,piece.color);this.refreshPieceSize(piece)}if(areaChanged){var zIndex=!this._board.boardFlip?5+(8-rank):12-(8-rank);
if(Number(pieceElement.style.zIndex)!==zIndex){pieceElement.style.zIndex=zIndex}}pieceElement.area=areaParam;if(pieceElement.className==="chess_com_piece chess_com_dragging"){
pieceElement.className="chess_com_piece chess_com_draggable"}this.setElementPosition(pieceElement,top,left)}else{this._piecesToDelete[areaParam]=true;
}},placeCoords:function(){var size=this._board.getBoardSize();var boardFlip=this._board.boardFlip;var coordsInside=this._board.boardCoordsPosition==="in";
var coordFontSize=coordsInside?Math.round(size/4.5):Math.min(Math.round(size/3),20);var coordElement;var digit;var letter;var top;
var left;for(digit=0;digit<8;digit++){coordElement=this.coordsNumberElements[digit];coordElement.style.fontSize=coordFontSize+"px";
if(coordsInside){coordElement.style.width=size*.93+"px";coordElement.style.marginTop="0";coordElement.style.marginLeft=size*.07+"px";
coordElement.style.textAlign="left"}else{coordElement.style.width=size/6+5+"px";coordElement.style.marginTop=size/3+"px";coordElement.style.marginLeft="0";
coordElement.style.textAlign="center"}top=digit*size;left=coordsInside?0:0-(size/6+5);this.setElementPosition(coordElement,top,left);
coordElement.innerHTML=!boardFlip?8-digit:digit+1}for(letter=0;letter<8;letter++){coordElement=this.coordsLetterElements[letter];coordElement.style.fontSize=coordFontSize+"px";
if(coordsInside){coordElement.style.width=size*.93+"px";coordElement.style.marginTop=size*.9-coordFontSize+"px";coordElement.style.textAlign="right";
}else{coordElement.style.width=size+"px";coordElement.style.marginTop=size-size/3+"px";coordElement.style.textAlign="center"}top=coordsInside?7*size:7*size+size/3+1;
left=letter*size;this.setElementPosition(coordElement,top,left);coordElement.innerHTML=!boardFlip?String.fromCharCode(97+letter):String.fromCharCode(97+(7-letter));
}},setCoordsStyle:function(){var colorScheme=this._board.colorScheme;var rootElement=this._board.rootElement;var className=rootElement.className.replace(/outside-coords|inside-coords|chess-color-scheme-[\w]+/g,"");
if(this._board.boardCoords){if(this._board.boardCoordsPosition==="in"){className+=" inside-coords"}else{className+=" outside-coords";
}className+=" chess-color-scheme-"+colorScheme}rootElement.className=className},cachePieceStyle:function(){var size=this._board.getBoardSize();
if(window["devicePixelRatio"]>1){size=size*2}if(size>this._board.dynamicSizeRange[1]){size=this._board.dynamicSizeRange[1]}if(size<20){
size=20}this._pieceStyleImageFormat="png";this._pieceStyleImagePath=this._board.pieceStyle;this._promotionPieceStyleUrl=this.gfxUrl+this.piecesPath+"/alpha/"+size;
this._promotionPieceStyleImageFormat="png";var chessPieceStyle=ChessPieceStyle[this._board.pieceStyle];if(chessPieceStyle){this._pieceStyleImageFormat=chessPieceStyle.imgFormat;
this._pieceStyleImagePath=chessPieceStyle.imgPath}this._pieceStyleUrl=this.gfxUrl+this.piecesPath+"/"+this._pieceStyleImagePath+"/"+size;
if(this._board.pieceStyle!=="blindfold"){this._promotionPieceStyleUrl=this._pieceStyleUrl}},getBackgroundUrl:function(scheme){if(!scheme){
scheme=scheme||this._board.colorScheme}var size=this._board.getBoardSize();var imageSize=window.devicePixelRatio>1?size*2:size;var backgroundUrl=this.gfxUrl+this.backgroundsPath+"/";
if(imageSize>this._board.dynamicSizeRange[1]){imageSize=this._board.dynamicSizeRange[1]}if(imageSize<20){imageSize=20}var colorScheme=ChessColorScheme[scheme]?ChessColorScheme[scheme]:ChessColorScheme["default"];
if(!colorScheme[2]){colorScheme[2]=scheme}backgroundUrl+=colorScheme[2]+"/"+imageSize+colorScheme[3];return backgroundUrl},refreshMarkings:function(){
if(this._board._markSquareColor){var markingColor=this._board.getMarkingColor();for(var areaId in this._board._markedSquares){var markedSquare=this._board._markedSquares[areaId];
if(markedSquare._DOMSquare){if(markedSquare.color){markedSquare._DOMSquare.style.backgroundColor=markedSquare.color}else{markedSquare._DOMSquare.style.backgroundColor=markingColor;
}}}}},refreshBackground:function(){var backgroundCssRule="url("+this.getBackgroundUrl()+")";if(this._board.backgroundOverlay){backgroundCssRule=this._board.backgroundOverlayRule+", "+backgroundCssRule;
}this.boardAreaElement.style.background=backgroundCssRule;this.boardAreaElement.style.backgroundSize="100% 100%";this.refreshMarkings();
this.setCoordsStyle()},refreshCoords:function(){var size=this._board.getBoardSize();var rootElement=this._board.rootElement;if(this._board.boardCoordsPosition==="in"){
rootElement.style.marginBottom="0"}else{rootElement.style.marginBottom=size/2+"px"}this.placeCoords();this.setCoordsStyle()},refreshMarkedSquares:function(){
var size=this._board.getBoardSize();var legalMoveHintFillSize=size*this.options.legalMoveHintFieldFillRatio;var legalMoveHintOffset=(size-legalMoveHintFillSize)*.5;
if(this.hoverSquareElement){this.hoverSquareElement.style.width=size+"px";this.hoverSquareElement.style.height=size+"px"}var refreshMarkedSquares=function(markedSquares){
for(var areaId in markedSquares){if(areaId!=="size"){var markElement=markedSquares[areaId]._DOMSquare;if(markElement){var position=this.getAreaPosition(areaId);
if(markElement.className==="legal-move-hint"){position.top+=legalMoveHintOffset;position.left+=legalMoveHintOffset;markElement.style.width=legalMoveHintFillSize+"px";
markElement.style.height=legalMoveHintFillSize+"px"}else{markElement.style.width=size+"px";markElement.style.height=size+"px"}this.setElementPosition(markElement,position.top,position.left);
}}}}.bind(this);refreshMarkedSquares(this._board._markedSquares);refreshMarkedSquares(this._board._rightClickMarkedSquares)},showHoverSquare:function(position){
if(this._board.showHoverSquare){var size=this._board.getBoardSize();if(!this.hoverSquareElement){this.hoverSquareElement=document.createElement("div");
this.hoverSquareElement.style.width=size+"px";this.hoverSquareElement.style.height=size+"px";this.hoverSquareElement.style.zIndex="4";
this.hoverSquareElement.style.position="absolute";this.hoverSquareElement.style.display="block";this.hoverSquareElement.style.opacity=0;
this.hoverSquareElement.style.pointerEvents="none";this.hoverSquareElement.style.backgroundColor=this._board.hoverSquareColor;this.boardAreaElement.appendChild(this.hoverSquareElement);
}if(position.inside){if(this.hoverSquareElement.style.opacity==="0"){this.hoverSquareElement.style.opacity=this._board.hoverSquareAlpha/100;
}this.setElementPosition(this.hoverSquareElement,position.top,position.left)}else{if(this.hoverSquareElement.style.opacity!=="0"){
this.hoverSquareElement.style.opacity=0}}}},removeHoverSquare:function(){if(this._board.showHoverSquare&&this.hoverSquareElement){
this.hoverSquareElement.style.opacity=0}},_refreshMarkedArrows:function(){var size=this._board.getBoardSize();for(var n=0;n<this._board._markedArrows.length;n++){
var curArrow=this._board._markedArrows[n];if(curArrow._DOMArrow){curArrow._DOMArrow.fromX=curArrow.fromAreaId.charCodeAt(0)-96;curArrow._DOMArrow.fromY=1*curArrow.fromAreaId.charAt(1);
curArrow._DOMArrow.toX=curArrow.toAreaId.charCodeAt(0)-96;curArrow._DOMArrow.toY=1*curArrow.toAreaId.charAt(1);if(this._board.boardFlip){
curArrow._DOMArrow.fromX=9-curArrow._DOMArrow.fromX;curArrow._DOMArrow.toX=9-curArrow._DOMArrow.toX}else{curArrow._DOMArrow.fromY=9-curArrow._DOMArrow.fromY;
curArrow._DOMArrow.toY=9-curArrow._DOMArrow.toY}curArrow._DOMArrow.elem.style.top=(Math.min(curArrow._DOMArrow.fromY,curArrow._DOMArrow.toY)-1)*size+"px";
curArrow._DOMArrow.elem.style.left=(Math.min(curArrow._DOMArrow.fromX,curArrow._DOMArrow.toX)-1)*size+"px";curArrow._DOMArrow.imgSrc=this.generateArrowName(curArrow._DOMArrow,size);
curArrow._DOMArrow.elem.setAttribute("src",this.gfxUrl+this.arrowsPath+"/"+curArrow._DOMArrow.imgSrc)}}},getPromotionPieceUrl:function(piece){
var sideToMove=this._board.gameSetup.flags["sm"];var promotionPieceUrl=this._promotionPieceStyleUrl+"/";if(this._board.promotionWindowInfo&&this._board.promotionWindowInfo.premoved){
promotionPieceUrl+=sideToMove===1?"b":"w"}else{promotionPieceUrl+=sideToMove===1?"w":"b"}promotionPieceUrl+=piece+"."+this._promotionPieceStyleImageFormat;
return promotionPieceUrl},refreshPromotionPieces:function(){var size=this._board.getBoardSize();var pieces=this._board.promotionPieces;
var promotionPieceElement;var piece;var i;if(this._board.promotionWindowActive){var whereId=this._board.promotionWindowInfo.promotionWhereId;
var promotedPieceRank=whereId.charCodeAt(1)-48;if(this._board.boardFlip^promotedPieceRank===1){pieces=pieces.split("").reverse().join("");
}}for(i=0;i<pieces.length;i++){piece=pieces.charAt(i);promotionPieceElement=this.promotionPieceElements[piece];promotionPieceElement.src=this.getPromotionPieceUrl(piece);
promotionPieceElement.width=size;promotionPieceElement.height=size;promotionPieceElement.style.top=size*i+"px";promotionPieceElement.style.left="0px";
promotionPieceElement.style.width=size+"px";promotionPieceElement.style.height=size+"px";promotionPieceElement.style.marginTop="0";
promotionPieceElement.style.zIndex=i+1;if(this._board.board3d){this.fixPromotionPiece3dMargin(promotionPieceElement)}}},fixPromotionPiece3dMargin:function(promotionPieceElement){
var image=new Image;image.onload=function(){var width=window.devicePixelRatio>1?image.width/2:image.width;var height=window.devicePixelRatio>1?image.height/2:image.height;
promotionPieceElement.height=height;promotionPieceElement.style.height=height+"px";promotionPieceElement.style.marginTop="-"+(height-width)+"px";
};image.src=promotionPieceElement.src},generateArrowName:function(markingObj){var size=this._board.getBoardSize();var fromX=markingObj.fromX;
var toX=markingObj.toX;var fromY=markingObj.fromY;var toY=markingObj.toY;var ext=".png";if(fromX===toX&&fromY===toY){return null}
if(fromX===toX-1&&fromY===toY-2){return size+"/k-4"+ext}if(fromX===toX-2&&fromY===toY-1){return size+"/k-3"+ext}if(fromX===toX-2&&fromY===toY+1){
return size+"/k-2"+ext}if(fromX===toX-1&&fromY===toY+2){return size+"/k-1"+ext}if(fromX===toX+1&&fromY===toY+2){return size+"/k-8"+ext;
}if(fromX===toX+2&&fromY===toY+1){return size+"/k-7"+ext}if(fromX===toX+2&&fromY===toY-1){return size+"/k-6"+ext}if(fromX===toX+1&&fromY===toY-2){
return size+"/k-5"+ext}if(fromY===toY){if(fromX<toX){return size+"/r-"+(toX-fromX+1)+ext}else{return size+"/l-"+(fromX-toX+1)+ext;
}}if(fromX===toX){if(fromY<toY){return size+"/d-"+(toY-fromY+1)+ext}else{return size+"/u-"+(fromY-toY+1)+ext}}if(Math.abs(fromX-toX)===Math.abs(fromY-toY)){
var length=Math.abs(fromX-toX)+1;if(fromY<toY&&fromX<toX){return size+"/dr-"+length+ext}else if(fromY<toY&&fromX>toX){return size+"/dl-"+length+ext;
}else if(fromY>toY&&fromX<toX){return size+"/ur-"+length+ext}else if(fromY>toY&&fromX>toX){return size+"/ul-"+length+ext}}return null;
},preloadArrowImages:function(){var size=this._board.getBoardSize();var pathPrefix=this.gfxUrl+this.arrowsPath+"/"+size+"/";var imgArray=[];
for(var n=1;n<=8;n++){imgArray.push(new Image);imgArray[imgArray.length-1].src=pathPrefix+"k-"+n+".png";if(n>1){imgArray.push(new Image);
imgArray[imgArray.length-1].src=pathPrefix+"u-"+n+".png";imgArray.push(new Image);imgArray[imgArray.length-1].src=pathPrefix+"d-"+n+".png";
imgArray.push(new Image);imgArray[imgArray.length-1].src=pathPrefix+"l-"+n+".png";imgArray.push(new Image);imgArray[imgArray.length-1].src=pathPrefix+"r-"+n+".png";
imgArray.push(new Image);imgArray[imgArray.length-1].src=pathPrefix+"ul-"+n+".png";imgArray.push(new Image);imgArray[imgArray.length-1].src=pathPrefix+"ur-"+n+".png";
imgArray.push(new Image);imgArray[imgArray.length-1].src=pathPrefix+"dl-"+n+".png";imgArray.push(new Image);imgArray[imgArray.length-1].src=pathPrefix+"dr-"+n+".png";
}}},onSetPieceStyle:function(){this.cachePieceStyle();this._board.disableEvents();this.preloadAssets(function(){this.refreshPromotionPieces();
this.refreshAllPiecesStyle();this.refreshAllPiecesSize();this.refreshAllAreas();this._board.enableEvents()}.bind(this))},onSetColorScheme:function(){
this._board.disableEvents();this.preloadAssets(function(){this.refreshBackground();this._board.enableEvents()}.bind(this))},onSetBoardCoords:function(){
this.refreshCoords()},onSetBoardCoordsPosition:function(){this.refreshCoords();this.refreshAllAreas()},onSetBoardSize:function(){
this.setViewportSize();this.refreshBackground();this.refreshPromotionWindow();this.placeCoords();this.refreshAllPiecesStyle();this.refreshAllPiecesSize();
this.refreshMarkedSquares();this._board.refresh();this._board.calculateBoardOffset();this.preloadAssets(function(){this.refreshBackground();
this.refreshAllPiecesStyle();this.refreshAllPiecesSize();this._board.refresh()}.bind(this))},onSetBoardFlip:function(){this.refreshCoords();
this.refreshMarkedSquares();this._board.refresh()},onSetPromotionPieces:function(){this.buildPromotionPieces();this.refreshPromotionPieces();
this.updatePromotionWindowPosition()},onShowPromotionWindow:function(){this.refreshPromotionPieces();this.updatePromotionWindowPosition();
this.promotionAreaElement.style.display="block"},onHidePromotionWindow:function(){this.promotionAreaElement.style.display="none"},
onPromotionPieceSelected:function(){this.promotionAreaElement.style.display="none"},createMarkElement:function(){var markElement;if(this._markElements.length){
markElement=this._markElements.pop();markElement.className=""}else{markElement=document.createElement("div");markElement.style.position="absolute";
markElement.style.zIndex="1";markElement.style.pointerEvents="none";this.boardAreaElement.appendChild(markElement)}return markElement;
},removeMarkElement:function(markElement){markElement.style.opacity="0";this._markElements.push(markElement)},onMarkSquare:function(event){
var squareStack=event.squareStack;var areaId=event.areaId;if(!squareStack[areaId]){return}if(!squareStack[areaId]._DOMSquare){squareStack[areaId]._DOMSquare=this.createMarkElement();
}var markElement=squareStack[areaId]._DOMSquare;if(event.legalMoveHint){markElement.className="legal-move-hint";markElement.style.opacity="0.2";
markElement.style.backgroundColor=this.options.legalMoveHintSquareColor}else{markElement.style.opacity=event.rightClicked?"0.9":"0.5";
markElement.style.backgroundColor=event.color instanceof Array?this.isDarkSquare(areaId)?event.color[1]:event.color[0]:event.color;
markElement.style.zIndex=event.rightClicked?"2":"1"}this.refreshMarkedSquares()},onClearSquare:function(event){var squareStack=event.squareStack;
var areaId=event.areaId;var blinkSettings=this._board._blinkSettings;if(blinkSettings.areaId===areaId){blinkSettings.count=0;if(blinkSettings.interval){
clearInterval(blinkSettings.interval);blinkSettings.interval=undefined}}if(squareStack[areaId]&&squareStack[areaId]._DOMSquare){this.removeMarkElement(squareStack[areaId]._DOMSquare);
squareStack[areaId]._DOMSquare=null}},onBlinkSquare:function(event){var blinkSettings=this._board._blinkSettings;var markedSquares=this._board._markedSquares;
if(markedSquares[blinkSettings.areaId]){blinkSettings.element=markedSquares[blinkSettings.areaId]._DOMSquare}blinkSettings.interval=setInterval(this.doBlink.bind(this),blinkSettings.freq);
},doBlink:function(){var blinkSettings=this._board._blinkSettings;if(blinkSettings.count>0){blinkSettings.count--;if(blinkSettings.count%2===1){
blinkSettings.element.style.opacity="0"}else{blinkSettings.element.style.opacity="1"}}else{if(blinkSettings.interval){clearInterval(blinkSettings.interval);
blinkSettings.interval=undefined}this._board.unmarkArea(blinkSettings.areaId)}},onSetSquareColor:function(event){var markedSquares=this._board._markedSquares;
var color=event.color;var element;if(event.areaId){if(markedSquares[event.areaId]){element=markedSquares[event.areaId]._DOMSquare;
if(color instanceof Array){color=this.isDarkSquare(event.areaId)?color[1]:color[0]}if(element){markedSquares[event.areaId].color=color;
element.style.backgroundColor=color}}}else{for(var areaId in markedSquares){if(areaId!=="size"){element=markedSquares[areaId]._DOMSquare;
if(color instanceof Array){color=this.isDarkSquare(areaId)?color[1]:color[0]}if(element){markedSquares[areaId].color=color;element.style.backgroundColor=color;
}}}}},onMarkArrow:function(event){var size=this._board.getBoardSize();var arrow=event.arrow;var fromAreaId=arrow.fromAreaId;var toAreaId=arrow.toAreaId;
var markingObj={};var boardFlip=this._board.boardFlip;markingObj.fromX=!boardFlip?fromAreaId.toLowerCase().charCodeAt(0)-96:9-(fromAreaId.toLowerCase().charCodeAt(0)-96);
markingObj.fromY=!boardFlip?9-fromAreaId.charAt(1):1*fromAreaId.charAt(1);markingObj.toX=!boardFlip?toAreaId.toLowerCase().charCodeAt(0)-96:9-(toAreaId.toLowerCase().charCodeAt(0)-96);
markingObj.toY=!boardFlip?9-toAreaId.charAt(1):1*toAreaId.charAt(1);markingObj.fromAreaId=fromAreaId;markingObj.toAreaId=toAreaId;
markingObj.elem=document.createElement("img");markingObj.elem.className="chessBoardArrow";markingObj.elem.style.position="absolute";
markingObj.elem.style.zIndex="15";markingObj.elem.style.top=(Math.min(markingObj.fromY,markingObj.toY)-1)*size+"px";markingObj.elem.style.left=(Math.min(markingObj.fromX,markingObj.toX)-1)*size+"px";
markingObj.imgSrc=this.generateArrowName(markingObj,size);if(markingObj.imgSrc){markingObj.elem.src=this.gfxUrl+this.arrowsPath+"/"+markingObj.imgSrc;
markingObj.elem.style.display="block";this.boardAreaElement.appendChild(markingObj.elem);arrow._DOMArrow={fromX:markingObj.fromX,
toX:markingObj.toX,fromY:markingObj.fromY,toY:markingObj.toY,elem:markingObj.elem,imgSrc:markingObj.imgSrc}}else{markingObj.elem=null;
}},onClearArrow:function(event){this.boardAreaElement.removeChild(event.arrow._DOMArrow.elem);event.arrow._DOMArrow.elem=null},onClearMarkings:function(){
var markedArrows=this._board._markedArrows;for(var n=0;n<this._board._markedArrows.length;n++){if(markedArrows[n]._DOMArrow){this.boardAreaElement.removeChild(markedArrows[n]._DOMArrow.elem);
markedArrows[n]._DOMArrow.elem=null}}markedArrows.length=0;var markedSquares=this._board._rightClickMarkedSquares;for(var areaId in markedSquares){
if(areaId!=="size"){if(markedSquares[areaId]._DOMSquare){this.removeMarkElement(markedSquares[areaId]._DOMSquare)}}delete markedSquares[areaId];
}markedSquares.size=0},getAnimationConfig:function(eventType){var animationType=this._board._animationType;var isDefaultAnimation=!animationType||(animationType==="default"||animationType==="slow");
var animationConfig;if(isDefaultAnimation){if(eventType==="move"){animationConfig=this.defaultMoveAnimation}}else{animationConfig=AnimationTypes.pieceAnimations.get(animationType,eventType);
}return animationConfig},animatePieceMove:function(pieceElement,from,to,callback,animationOptions){var size=this._board.getBoardSize();
var animationConfig;var fromPosition;animationOptions=animationOptions||{};if(this._board._animationType==="battle"&&animationOptions.pieceDrop){
var piecePos=pieceElement.style[transformStyle].replace("translate(","").replace(")","").replace("px","").split(", ");animationConfig=this.getAnimationConfig("drop");
fromPosition={left:parseInt(piecePos[0],10),top:parseInt(piecePos[1],10)}}else{animationConfig=this.getAnimationConfig("move");fromPosition={
left:from.file*size,top:from.rank*size}}this._moveAnimation=new Animation(pieceElement,{duration:animationConfig.duration||this._board._animationSpeed,
easing:animationConfig.easing});this._moveAnimation.addKeyframes(animationConfig.keyframes);this._moveAnimation.addKeyframes({0:fromPosition,
100:{left:to.file*size,top:to.rank*size}});this._moveAnimation.onStart(function(target){target.style.zIndex=65;if(animationConfig.onStart){
animationConfig.onStart.apply(this,arguments)}},this);this._moveAnimation.onUpdate(animationConfig.onUpdate,this);this._moveAnimation.onEnd(function(){
if(animationConfig.onEnd){animationConfig.onEnd.apply(this,arguments)}if(callback){callback.apply(this,arguments)}},this);this._moveAnimation.start();
if(this._board._animationType==="battle"&&!animationOptions.capture){var effectAnimationConfig=this.getAnimationConfig("moveImageEffect");
var effectAnimation=new Animation(pieceElement,{duration:effectAnimationConfig.duration||this._board._animationSpeed,easing:effectAnimationConfig.easing,
isBlocking:false});effectAnimation.addKeyframes(effectAnimationConfig.keyframes);effectAnimation.addKeyframes({0:fromPosition,100:{
left:to.file*size,top:to.rank*size}});effectAnimation.onStart(effectAnimationConfig.onStart,this);effectAnimation.onUpdate(effectAnimationConfig.onUpdate,this);
effectAnimation.onEnd(effectAnimationConfig.onEnd,this);this._moveAnimation.onElapsedPercentage(70,function(){effectAnimation.start();
})}},onMoveAnimation:function(event){var pieceElement=this.getPieceElement(event.fromAreaId);if(pieceElement){var pieceFrom={rank:event.rankFrom,
file:event.fileFrom};var pieceTo={rank:event.rankTo,file:event.fileTo};var afterAnimation=function(target,animation){this._board.afterMoveAnimated(animation,event.animationOptions);
};if(event.castling){this.animatePieceMove(pieceElement,pieceFrom,pieceTo,null,event.animationOptions);if(event.castlingUndo){var rookElement=this.getPieceElement(event.rookToAreaId);
var rookFrom={rank:event.rookRankTo,file:event.rookFileTo};var rookTo={rank:event.rookRankFrom,file:event.rookFileFrom};this.animatePieceMove(rookElement,rookFrom,rookTo,afterAnimation);
}else{var rookElement=this.getPieceElement(event.rookFromAreaId);var rookFrom={rank:event.rookRankFrom,file:event.rookFileFrom};var rookTo={
rank:event.rookRankTo,file:event.rookFileTo};this.animatePieceMove(rookElement,rookFrom,rookTo,afterAnimation)}}else{this.animatePieceMove(pieceElement,pieceFrom,pieceTo,afterAnimation,event.animationOptions);
}}},onCaptureAnimation:function(event){var animationConfig=this.getAnimationConfig("capture");if(!animationConfig){return}var animatedElement=this.getPieceElement(event.fromAreaId);
var attackDirection;if(event.rankFrom===event.capturedByRank){if(event.fileFrom<event.capturedByFile){attackDirection="e"}else{attackDirection="w";
}}else if(event.fileFrom==event.capturedByFile){if(event.rankFrom<event.capturedByRank){attackDirection="s"}else{attackDirection="n";
}}else if(event.rankFrom<event.capturedByRank){if(event.fileFrom<event.capturedByFile){attackDirection="se"}else{attackDirection="sw";
}}else{if(event.fileFrom<event.capturedByFile){attackDirection="ne"}else{attackDirection="nw"}}if(animatedElement){var animation=new Animation(animatedElement,{
duration:animationConfig.duration||event.animationSpeed,easing:animationConfig.easing,isBlocking:false});animation.addKeyframes(animationConfig.keyframes);
animation.onStart(animationConfig.onStart,this);animation.onUpdate(animationConfig.onUpdate,this);animation.onEnd(animationConfig.onEnd,this);
animation.addExtraData({attackDirection:attackDirection,squareSize:this._currentSize});var effectAnimationConfig=this.getAnimationConfig("captureImageEffect");
var effectAnimation=new Animation(animatedElement,{duration:effectAnimationConfig.duration||event.animationSpeed,easing:effectAnimationConfig.easing,
isBlocking:false});effectAnimation.addKeyframes(effectAnimationConfig.keyframes);effectAnimation.onStart(effectAnimationConfig.onStart,this);
effectAnimation.onUpdate(effectAnimationConfig.onUpdate,this);effectAnimation.onEnd(effectAnimationConfig.onEnd,this);this._moveAnimation.onElapsedPercentage(70,function(){
animation.start();effectAnimation.start()})}},onKingInCheckAnimation:function(event){var animationConfig=this.getAnimationConfig("kingInCheck");
if(!animationConfig){return}var animatedElement=this.getPieceElement(event.kingArea);var animation=new Animation(animatedElement,{
duration:animationConfig.duration||event.animationSpeed,easing:animationConfig.easing,isBlocking:false});animation.addKeyframes(animationConfig.keyframes);
animation.onStart(animationConfig.onStart,this);animation.onUpdate(animationConfig.onUpdate,this);animation.onEnd(animationConfig.onEnd,this);
animation.addExtraData({squareSize:this._currentSize});this._moveAnimation.onElapsedPercentage(100,function(){animation.start()});
},onClickArea:function(event){this.removeHoverSquare()},onRightClickArea:function(event){this.removeHoverSquare()},onStartDragging:function(event){
var chessboard=this._board;if(chessboard._markingInProgress){chessboard._markingObj={fromX:event.position.col,fromY:event.position.row,
toX:event.position.col,toY:event.position.row,imgSrc:null,elem:null}}else{var target=event.pointer?event.pointer.target:event.target;
this.draggingPiece={element:target,zIndexOriginal:target.style.zIndex,position:event.position};target.className="chess_com_piece chess_com_dragging";
this.showHoverSquare(event)}},onDragProgress:function(event){var chessboard=this._board;if(chessboard._markingInProgress){if(event.position.inside){
var marking=chessboard._markingObj;marking.toX=event.position.col;marking.toY=event.position.row;marking.imgSrc=this.generateArrowName(marking,event.position.size);
}}else if(this.draggingPiece){var top=event.position.top-event.position.size/2;var left=event.position.left-event.position.size/2;
this.setElementPosition(this.draggingPiece.element,top,left);this.showHoverSquare(event)}},onDropPiece:function(){if(this.draggingPiece){
this.draggingPiece.dropped=true}},onThrowPiece:function(){this.restoreDraggedPiece()},onSetViewOnly:function(event){var className=this._board._enabled&&!this._board._viewOnly?"chess_com_piece chess_com_draggable":"chess_com_piece";
var pieces=this.getAllPieces();for(var i=0;i<pieces.length;i++){pieces[i].element.className=className}},onHidePieces:function(event){
var pieces=this.getAllPieces();var length=pieces.length;for(var i=0;i<length;i++){pieces[i].element.style.display="none"}},onShowPieces:function(event){
var pieces=this.getAllPieces();var length=pieces.length;for(var i=0;i<length;i++){pieces[i].element.style.display="block"}this._board.refresh();
},isPieceClicked:function(event){var target=event.pointer?event.pointer.target:event.target;return target.nodeName.toUpperCase()==="IMG"&&target.className!=="chessBoardArrow";
},isValidArrow:function(markingObject){return markingObject.imgSrc?true:false},restoreDraggedPiece:function(){this.removeHoverSquare();
if(this.draggingPiece){var size=this._board.getBoardSize();var top=(this.draggingPiece.position.row-1)*size;var left=(this.draggingPiece.position.col-1)*size;
var zIndex=this.draggingPiece.zIndexOriginal;this.setElementPosition(this.draggingPiece.element,top,left);this.draggingPiece.element.className="chess_com_piece chess_com_draggable";
this.draggingPiece=null}},cleanUpMarkingArrow:function(e){this.removeHoverSquare();if(this._board._markingObj.elem){this.boardAreaNode.removeChild(this._board._markingObj.elem);
}this._board._markingObj.elem=null},getColRowPosition:function(pointer,size){if(!size){size=this._board.getBoardSize()}var position={
row:0,col:0,top:0,left:0,size:size,inside:false,outside:true,area:""};var minX=this._board.offsetx;var minY=this._board.offsety;var maxX=minX+size*8;
var maxY=minY+size*8;var top=pointer.y-minY;var left=pointer.x-minX;if(pointer.x>minX&&pointer.x<maxX&&pointer.y>minY&&pointer.y<maxY){
position.top=top;position.left=left;position.row=Math.floor(position.top/size)+1;position.col=Math.floor(position.left/size)+1;position.inside=true;
position.outside=false;position.area=this.getAreaIdFromColRow(position)}else{if(top<0){position.top=0}else if(top>size*8){position.top=size*8;
}else{position.top=top}if(left<0){position.left=0}else if(left>size*8){position.left=size*8}else{position.left=left}}var pieceTop=pointer.y+size/2;
if(pieceTop>maxY){var maxTop=document.documentElement.clientHeight-5;if(pieceTop>maxTop){position.top=maxTop-minY-size/2}}return position;
},getAreaIdFromColRow:function(position){if(position.col===0||position.row===0){return""}var rows=this._board.boardFlip?this.flippedBoardRows:this.boardRows;
var cols=this._board.boardFlip?this.flippedBoardCols:this.boardCols;return cols[position.col-1]+String(rows[position.row-1])},getAreaPosition:function(areaId){
var size=this._board.getBoardSize();var file=areaId.charCodeAt(0)-96;var rank=areaId.charCodeAt(1)-48;if(this._board.boardFlip){file=8-file;
rank--}else{rank=8-rank;file--}return{top:size*rank,left:size*file}},isDarkSquare:function(areaId){var file=areaId.charCodeAt(0)-96;
var rank=areaId.charCodeAt(1)-48;return(file==="b"||file==="d"||file==="f"||file==="h")&&(rank==="2"||rank==="4"||rank==="6"||rank==="8")||(file==="a"||file==="c"||file==="e"||file==="g")&&(rank==="1"||rank==="3"||rank==="5"||rank==="7");
}}});ChessCom(function(globals){"use strict";if(globals.ChessBoardWebGL3D){return}var Config=globals.Config;var Animation=globals.Animation;
var myEvent=globals.myEvent;var ChessBoardRenderRegistry=globals.ChessBoardRenderRegistry;var PIXEL_RATIO=window.devicePixelRatio||1;
var WHITE=1;var BLACK=2;var DEFAULT_CAMERA_DISTANCE=155;var DEFAULT_CAMERA_PAN_ANGLE=0;var DEFAULT_CAMERA_TILT_ANGLE=90;globals.ChessBoardWebGL3D=function(baseBoard){
this.baseBoard=baseBoard;this.boardId=null;this.renderer=null;this.boardReady=false;this.options={useTransfromForDragAndDrop:false,
avoidRegisteringMouseEvents:false,defaultViewportAspectRatio:1.33,defaultViewportWidth:600};baseBoard.registerCustomEvent("onCameraChange");
baseBoard.attachEvent("onBuild",this.onBuild,this);baseBoard.attachEvent("onRefresh",this.onRefresh,this);baseBoard.attachEvent("onSetPieceStyle",this.onSetPieceStyle,this);
baseBoard.attachEvent("onSetColorScheme",this.onSetColorScheme,this);baseBoard.attachEvent("onSetBoardCoords",this.onSetBoardCoords,this);
baseBoard.attachEvent("onSetBoardSize",this.onSetBoardSize,this);baseBoard.attachEvent("onSetBoardFlip",this.onSetBoardFlip,this);
baseBoard.attachEvent("onShowPromotionWindow",this.onShowPromotionWindow,this);baseBoard.attachEvent("onHidePromotionWindow",this.onHidePromotionWindow,this);
baseBoard.attachEvent("onPromotionPieceSelected",this.onPromotionPieceSelected,this);baseBoard.attachEvent("onMarkSquare",this.onMarkSquare,this);
baseBoard.attachEvent("onClearSquare",this.onClearSquare,this);baseBoard.attachEvent("onBlinkSquare",this.onBlinkSquare,this);baseBoard.attachEvent("onSetSquareColor",this.onSetSquareColor,this);
baseBoard.attachEvent("onMarkArrow",this.onMarkArrow,this);baseBoard.attachEvent("onClearArrow",this.onClearArrow,this);baseBoard.attachEvent("onClearMarkings",this.onClearMarkings,this);
baseBoard.attachEvent("onMoveAnimation",this.onMoveAnimation,this);baseBoard.attachEvent("onAfterMoveAnimated",this.onAfterMoveAnimated,this);
baseBoard.attachEvent("onStartDragging",this.onStartDragging,this);baseBoard.attachEvent("onDragProgress",this.onDragProgress,this);
baseBoard.attachEvent("onThrowPiece",this.onThrowPiece,this);baseBoard.attachEvent("onDropPiece",this.onDropPiece,this);baseBoard.attachEvent("onHidePieces",this.onHidePieces,this);
baseBoard.attachEvent("onShowPieces",this.onShowPieces,this);baseBoard.attachEvent("onCameraChange",this.onCameraChange,this);baseBoard.attachEvent("onDynamicResize",this.onDynamicResize,this);
};globals.ChessBoardWebGL3D.prototype={onBuild:function(){var dataUrl=Config["domain.cssjs"]+"/bundles/web/images/webgl_data/3d/";
this.baseBoard.disableEvents();this.baseBoard.rootElement.parentNode.style.background="none";this.baseBoard.rootElement.style.border="none";
this.baseBoard.rootElement.style.position="relative";this.boardId=this.baseBoard.rootElement.id+"_webglBoard3D";this.renderer=new RendererWebGL({
containerEl:this.baseBoard.rootElement,dataUrl:dataUrl,flipBoard:this.baseBoard.boardFlip,viewOnly:this.baseBoard._viewOnly,pieceStyle:this.baseBoard.pieceStyle,
boardTexture:this.baseBoard.colorScheme,hasBoardNotation:this.baseBoard.boardCoords,callbacksContext:this,owner:this,viewportAspectRatio:this.options.defaultViewportAspectRatio,
cameraDistance:chessBasil.get("cameraDistance")!==null?parseFloat(chessBasil.get("cameraDistance")):DEFAULT_CAMERA_DISTANCE,cameraPanAngle:chessBasil.get("cameraPanAngle")!==null?parseFloat(chessBasil.get("cameraPanAngle")):DEFAULT_CAMERA_PAN_ANGLE,
cameraTiltAngle:chessBasil.get("cameraTiltAngle")!==null?parseFloat(chessBasil.get("cameraTiltAngle")):DEFAULT_CAMERA_TILT_ANGLE,
cameraX:chessBasil.get("cameraX")!==null?parseFloat(chessBasil.get("cameraX")):null,cameraY:chessBasil.get("cameraY")!==null?parseFloat(chessBasil.get("cameraY")):null,
cameraZ:chessBasil.get("cameraZ")!==null?parseFloat(chessBasil.get("cameraZ")):null,cameraTargetX:chessBasil.get("cameraTargetX")!==null?parseFloat(chessBasil.get("cameraTargetX")):null,
cameraTargetY:chessBasil.get("cameraTargetY")!==null?parseFloat(chessBasil.get("cameraTargetY")):null,cameraTargetZ:chessBasil.get("cameraTargetZ")!==null?parseFloat(chessBasil.get("cameraTargetZ")):null
});this.renderer.drawBoard(function(){this.boardReady=true;this.baseBoard.enableEvents();this.baseBoard.fireEvent("onBoardLoaded");
this.onDynamicResize()})},onRefresh:function(e){if(!this.boardReady){return}if(e&&e.moveNode){this.updateMove(e.moveNode);return}
var i;var pieces=this.baseBoard.gameSetup.pieces;var piecesToAdd=[];for(i in pieces){if(pieces.hasOwnProperty(i)){if(pieces[i].area){
piecesToAdd.push(pieces[i])}}}this.renderer.updateBoard(piecesToAdd);this.renderer.setViewOnly(this.baseBoard._viewOnly)},onSetPieceStyle:function(){
this.renderer.setPieceStyle(this.baseBoard.pieceStyle)},onSetColorScheme:function(){this.renderer.setBoardTexture(this.baseBoard.colorScheme);
},onSetBoardCoords:function(){this.renderer.showBoardNotation(this.baseBoard.boardCoords)},onSetBoardSize:function(){this.onDynamicResize();
},onSetBoardFlip:function(){this.renderer.flipBoard(this.baseBoard.boardFlip)},onShowPromotionWindow:function(){var pieceColor=this.sideToMove();
if(this.baseBoard.promotionWindowInfo&&this.baseBoard.promotionWindowInfo.premoved){pieceColor=pieceColor===WHITE?BLACK:WHITE}this.renderer.showPromotionWindow(pieceColor,function(pieceType){
this.baseBoard.selectPromotionPiece(pieceType)})},onHidePromotionWindow:function(){this.renderer.hidePromotionWindow()},onPromotionPieceSelected:function(){
this.renderer.hidePromotionWindow()},onMarkSquare:function(e){if(e.rightClicked){this.renderer.markSquare(e.areaId,e.color,"secondary",{
opacity:.9})}else if(e.legalMoveHint){this.renderer.markSquare(e.areaId,"#000","primary",{opacity:.2,type:"circle"})}else{this.renderer.markSquare(e.areaId,e.color,"primary",{
opacity:.5})}},onClearSquare:function(e){if(e.rightClicked){this.renderer.unmarkSquare(e.areaId,"secondary")}else{this.renderer.unmarkSquare(e.areaId,"primary");
}},onBlinkSquare:function(){this.renderer.blinkSquare(this.baseBoard._blinkSettings,function(areaId){this.baseBoard.unmarkArea(areaId);
})},onSetSquareColor:function(e){this.renderer.setSquareColor(e.color,e.areaId)},onMarkArrow:function(e){var fromAreaId=e.arrow.fromAreaId;
var toAreaId=e.arrow.toAreaId;var markingObj={from:fromAreaId,to:toAreaId,fromX:fromAreaId.toLowerCase().charCodeAt(0)-96,fromY:9-fromAreaId.charAt(1),
toX:toAreaId.toLowerCase().charCodeAt(0)-96,toY:9-toAreaId.charAt(1)};var arrow=this.generateArrowProperties(markingObj);if(arrow){
this.renderer.drawArrow(arrow)}},onClearArrow:function(e){this.renderer.removeArrow({from:e.arrow.fromAreaId,to:e.arrow.toAreaId});
},onClearMarkings:function(){this.renderer.removeAllArrows();for(var square in this.baseBoard._rightClickMarkedSquares){this.renderer.unmarkSquare(square,"secondary");
}this.baseBoard._markedArrows=[];this.baseBoard._rightClickMarkedSquares={size:0}},onMoveAnimation:function(e){this.renderer.movePiece(e.fromAreaId,e.toAreaId,e.animationSpeed,function(animation){
this.baseBoard.afterMoveAnimated(animation,e.animationOptions)})},onAfterMoveAnimated:function(){},onStartDragging:function(e){var mousePoint=myEvent.getPointXY(e);
var mousePointRelativeX=(mousePoint.x-this.baseBoard.offsetx)*PIXEL_RATIO;var mousePointRelativeY=(mousePoint.y-this.baseBoard.offsety)*PIXEL_RATIO;
var mouse3D=this.renderer.getMouse3D(mousePointRelativeX,mousePointRelativeY);if(!this.baseBoard._markingInProgress){this.renderer.selectPiece(mouse3D);
}else{this.baseBoard._markingObj={fromX:e.position.col,fromY:e.position.row,toX:e.position.col,toY:e.position.row,imgSrc:null,elem:null
}}chessBoardEngine.dragSys.xMin=this.baseBoard.offsetx;chessBoardEngine.dragSys.xMax=this.baseBoard.offsetx+this.baseBoard.rootElement.offsetWidth;
chessBoardEngine.dragSys.yMin=this.baseBoard.offsety;chessBoardEngine.dragSys.yMax=this.baseBoard.offsety+this.baseBoard.rootElement.offsetHeight;
},onDragProgress:function(e){var mousePoint=myEvent.getPointXY(e);var mousePointRelativeX=(mousePoint.x-this.baseBoard.offsetx)*PIXEL_RATIO;
var mousePointRelativeY=(mousePoint.y-this.baseBoard.offsety)*PIXEL_RATIO;var mouse3D=this.renderer.getMouse3D(mousePointRelativeX,mousePointRelativeY);
if(!this.baseBoard._markingInProgress){this.renderer.dragSelectedPiece(mouse3D)}else if(e.position.inside){this.baseBoard._markingObj.toX=e.position.col;
this.baseBoard._markingObj.toY=e.position.row;var arrow=this.generateArrowProperties(this.baseBoard._markingObj);if(arrow){arrow.temporary=true;
this.renderer.drawArrow(arrow)}else{this.renderer.removeArrow({temporary:true})}}},onThrowPiece:function(){this.restoreDraggedPiece();
},onDropPiece:function(){this.restoreDraggedPiece()},onHidePieces:function(){this.renderer.showPieces(false)},onShowPieces:function(){
this.renderer.showPieces(true)},onCameraChange:function(camera){chessBasil.set("cameraDistance",camera.distance);chessBasil.set("cameraPanAngle",camera.panAngle);
chessBasil.set("cameraTiltAngle",camera.tiltAngle);chessBasil.set("cameraX",camera.cameraX);chessBasil.set("cameraY",camera.cameraY);
chessBasil.set("cameraZ",camera.cameraZ);chessBasil.set("cameraTargetX",camera.cameraTargetX);chessBasil.set("cameraTargetY",camera.cameraTargetY);
chessBasil.set("cameraTargetZ",camera.cameraTargetZ)},onDynamicResize:function(){var width=this.baseBoard.rootElement.parentNode.offsetWidth;
var height=this.baseBoard.rootElement.parentNode.offsetHeight;this.setViewportSize(width,height)},restoreDraggedPiece:function(){
this.renderer.endPieceDrag()},updateMove:function(moveNode){var rank;if(!moveNode.fromAreaId||!moveNode.toAreaId){return}this.refreshArea(moveNode.fromAreaId);
this.refreshArea(moveNode.toAreaId);if(moveNode.moveText.match(/^[a-h]x[a-h][63][\+\#]?$/)){if(moveNode.moveText.substr(3,1)==="6"){
this.refreshArea(moveNode.toAreaId.substr(0,1)+(Number(moveNode.toAreaId.substr(1,1))-1))}else{this.refreshArea(moveNode.toAreaId.substr(0,1)+(Number(moveNode.toAreaId.substr(1,1))+1));
}}if(moveNode.moveText==="O-O-O"||moveNode.moveText==="O-O-O+"||moveNode.moveText==="O-O-O#"){rank=moveNode.fromAreaId.substr(1,1);
this.refreshArea("a"+rank);this.refreshArea("d"+rank)}else if(moveNode.moveText==="O-O"||moveNode.moveText==="O-O+"||moveNode.moveText==="O-O#"){
rank=moveNode.fromAreaId.substr(1,1);this.refreshArea("f"+rank);this.refreshArea("h"+rank)}},refreshArea:function(area){var pieceId=null;
var piece=null;if(this.baseBoard.gameSetup.areas[area].pieces.length){pieceId=this.baseBoard.gameSetup.areas[area].pieces[0]}this.renderer.removePiece(area);
if(pieceId!==null){piece=this.baseBoard.gameSetup.pieces[pieceId];this.renderer.addPiece(piece.type,area,piece.color)}},isPieceClicked:function(e){
if(this.baseBoard._preventNextRightClick){return false}var mousePoint=myEvent.getPointXY(e);var mousePointRelative={x:(mousePoint.x-this.baseBoard.offsetx)*PIXEL_RATIO,
y:(mousePoint.y-this.baseBoard.offsety)*PIXEL_RATIO};return this.renderer.isPieceOnMousePosition(mousePointRelative)},getColRowPosition:function(mousePoint){
var mousePointRelativeX=(mousePoint.x-this.baseBoard.offsetx)*PIXEL_RATIO;var mousePointRelativeY=(mousePoint.y-this.baseBoard.offsety)*PIXEL_RATIO;
var mouse3D=this.renderer.getMouse3D(mousePointRelativeX,mousePointRelativeY);var boardPos=this.renderer.worldToBoard(mouse3D.x,mouse3D.z);
var position={col:0,row:0,inside:false,outside:true,area:""};if(boardPos){position.col=1+boardPos[1];position.row=8-boardPos[0];position.inside=true;
position.outside=false}position.area=this.getAreaIdFromColRow(position);return position},getAreaIdFromColRow:function(colRow){if(!colRow.col){
return""}var boardPos=[8-colRow.row,colRow.col-1];return this.renderer.boardToNotation(boardPos)},cleanUpMarkingArrow:function(){},
isValidArrow:function(markingObj){if(this.generateArrowProperties(markingObj)===false){return false}else{return true}},generateArrowProperties:function(markingObj){
var fromX=markingObj.fromX;var fromY=markingObj.fromY;var toX=markingObj.toX;var toY=markingObj.toY;var arrow={type:"straight",from:this.getAreaIdFromColRow({
col:fromX,row:fromY}),to:this.getAreaIdFromColRow({col:toX,row:toY}),direction:1,length:1};if(fromX===toX&&fromY===toY){return false;
}arrow.type="L";if(fromX===toX-1&&fromY===toY+2){arrow.direction=1;return arrow}else if(fromX===toX-2&&fromY===toY+1){arrow.direction=2;
return arrow}else if(fromX===toX-2&&fromY===toY-1){arrow.direction=3;return arrow}else if(fromX===toX-1&&fromY===toY-2){arrow.direction=4;
return arrow}else if(fromX===toX+1&&fromY===toY-2){arrow.direction=5;return arrow}else if(fromX===toX+2&&fromY===toY-1){arrow.direction=6;
return arrow}else if(fromX===toX+2&&fromY===toY+1){arrow.direction=7;return arrow}else if(fromX===toX+1&&fromY===toY+2){arrow.direction=8;
return arrow}arrow.type="straight";if(fromY===toY){if(fromX<toX){arrow.direction=3;arrow.length=toX-fromX}else{arrow.direction=7;arrow.length=fromX-toX;
}return arrow}if(fromX===toX){if(fromY<toY){arrow.direction=5;arrow.length=toY-fromY}else{arrow.direction=1;arrow.length=fromY-toY;
}return arrow}if(Math.abs(fromX-toX)===Math.abs(fromY-toY)){var length=Math.abs(fromX-toX);arrow.length=length;if(fromY<toY&&fromX<toX){
arrow.direction=4;return arrow}else if(fromY<toY&&fromX>toX){arrow.direction=6;return arrow}else if(fromY>toY&&fromX<toX){arrow.direction=2;
return arrow}else if(fromY>toY&&fromX>toX){arrow.direction=8;return arrow}}return false},sideToMove:function(){return this.baseBoard.gameSetup.flags.sm;
},setViewportSize:function(width,height,fitBoard){var rootElement=this.baseBoard.rootElement;if(!width){width=this.options.defaultViewportWidth;
}if(!height){height=width/this.options.defaultViewportAspectRatio}var prevWidth=rootElement.style.width.replace("px","");var prevHeight=rootElement.style.height.replace("px","");
if(width==prevWidth&&height==prevHeight){return}rootElement.style.width=width+"px";rootElement.style.height=height+"px";this.renderer.refreshViewport();
if(fitBoard===true){this.renderer.fitBoard()}},updateCamera:function(camera){this.renderer.updateCamera(camera)},calculateBoardSize:function(){
return 0},removeHoverSquare:function(){}};function RendererWebGL(options){options=options||{};var instance=this;var containerEl=options.containerEl||null;
var owner=options.owner||null;var callbacksContext=options.callbacksContext;var config={cameraDistance:options.cameraDistance,cameraDistanceMax:500,
cameraDistanceMin:50,cameraPanAngle:options.cameraPanAngle,cameraTiltAngle:options.cameraTiltAngle,cameraHorizontalPanning:0,cameraVerticalPanning:-12,
viewportAspectRatio:options.viewportAspectRatio||1,dataUrl:options.dataUrl||"",chessSet:"staunton_executive",pieceStyle:options.pieceStyle,
boardTexture:options.boardTexture,hasBoardNotation:options.hasBoardNotation||false,flipBoard:options.flipBoard||false,viewportBackgroundColor:options.viewportBackgroundColor||"none",
viewOnly:options.viewOnly||false};var squareSize=10;var squareBorderSize=.5;var squareOverBorderSize=.75;var boardMarginSize=4;var boardSize=squareSize*8+boardMarginSize*2;
var promotionWindowEl;var renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});var scene;var camera;var cameraTarget=new THREE.Vector3(squareSize*4,0,squareSize*4);
var cameraDistance=config.cameraDistance;var optimalCameraDistance=DEFAULT_CAMERA_DISTANCE;var cameraPanAngle=config.cameraPanAngle;
var cameraTiltAngle=config.cameraTiltAngle;var cameraHorizontalPanning=config.cameraHorizontalPanning;var cameraVerticalPanning=config.cameraVerticalPanning;
var cameraIsRotating=false;var cameraIsPanning=false;var lights={};var materials={};var piecesGeom={};var arrowsGeom={L:null,straight:null
};var markedSquareGeom=null;var boardModel;var boardNotationPlane;var groundModel;var squareOverPlane;var boardFlipped=config.flipBoard;
var isBoardFlipping=false;var flipCameraPanAngle=false;var flipBoardAnimation=null;var viewOnly=config.viewOnly;var piecesHidden=false;
var mouseDown=false;var mouseSecondaryDown=false;var mouseRightDown=false;var mouseDownOnBoard=false;var lastMouseX=0;var lastMouseY=0;
var board=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
var callbacks={};var selectedPiece=null;var intersectedPiece=null;var markedSquares={primary:{},secondary:{}};var markingArrows={};
this.drawBoard=function(callback){containerEl.style.background=config.viewportBackgroundColor;initEngine();initLights();initMaterials(function(){
initObjects(onObjectsLoaded)});function onObjectsLoaded(){initListeners();onAnimationFrame();containerEl.appendChild(renderer.domElement);
createPromotionWindow();if(callback){callback.call(callbacksContext)}}};this.refreshViewport=function(){var viewWidth=containerEl.offsetWidth;
var viewHeight=containerEl.offsetHeight;if(camera){camera.aspect=viewWidth/viewHeight;camera.updateProjectionMatrix()}renderer.setSize(viewWidth,viewHeight);
};this.fitBoard=function(){if(!camera){return}cameraDistance=this.calculateOptimalCameraDistance();this.updateCamera()};this.calculateOptimalCameraDistance=function(){
var currentRatio=containerEl.offsetWidth/containerEl.offsetHeight;if(currentRatio<config.viewportAspectRatio){optimalCameraDistance=DEFAULT_CAMERA_DISTANCE*(config.viewportAspectRatio/currentRatio);
}else{optimalCameraDistance=DEFAULT_CAMERA_DISTANCE}return optimalCameraDistance},this.updateBoard=function(pieces){var i,j,piece,tempPiece,boardPos;
var tempBoard=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
for(i=0;i<pieces.length;i++){piece=pieces[i];boardPos=this.notationToBoard(piece.area);tempBoard[boardPos[0]][boardPos[1]]=piece}
for(i=0;i<board.length;i++){for(j=0;j<board[i].length;j++){piece=board[i][j];tempPiece=tempBoard[i][j];if(piece===0&&tempPiece===0){
continue}else if(piece===0){this.addPiece(tempPiece.type,tempPiece.area,tempPiece.color)}else if(tempPiece===0){this.removePiece([i,j]);
}else if(piece.type!==tempPiece.type||piece.color!==tempPiece.color){this.removePiece([i,j]);this.addPiece(tempPiece.type,tempPiece.area,tempPiece.color);
}}}};this.addPiece=function(pieceType,squareNotation,color){var piece;var pieceObjGroup=new THREE.Object3D;var shadowPlane=new THREE.Mesh(new THREE.PlaneBufferGeometry(squareSize,squareSize,1,1));
rotateAroundWorldAxis(shadowPlane,new THREE.Vector3(1,0,0),-90);if(pieceType==="p"){piece=new THREE.Mesh(piecesGeom.pawn);shadowPlane.material=materials.shadowPlanes.pawn;
}else if(pieceType==="k"){piece=new THREE.Mesh(piecesGeom.king);shadowPlane.material=materials.shadowPlanes.king}else if(pieceType==="q"){
piece=new THREE.Mesh(piecesGeom.queen);shadowPlane.material=materials.shadowPlanes.queen}else if(pieceType==="r"){piece=new THREE.Mesh(piecesGeom.rook);
shadowPlane.material=materials.shadowPlanes.rook}else if(pieceType==="b"){piece=new THREE.Mesh(piecesGeom.bishop);shadowPlane.material=materials.shadowPlanes.bishop;
}else if(pieceType==="n"){piece=new THREE.Mesh(piecesGeom.knight);shadowPlane.material=materials.shadowPlanes.knight;if(color===BLACK){
rotateAroundWorldAxis(piece,new THREE.Vector3(0,1,0),90)}else{rotateAroundWorldAxis(piece,new THREE.Vector3(0,1,0),-90)}}else{return;
}if(color===WHITE){piece.material=materials.whitePieceMaterial}else{piece.material=materials.blackPieceMaterial}pieceObjGroup.add(piece);
pieceObjGroup.add(shadowPlane);pieceObjGroup.type=pieceType;pieceObjGroup.color=color;var worldPos=this.notationToWorld(squareNotation);
var boardPos=this.notationToBoard(squareNotation);pieceObjGroup.position.x=worldPos[0];pieceObjGroup.position.z=worldPos[1];pieceObjGroup.position.y=.01;
board[boardPos[0]][boardPos[1]]=pieceObjGroup;scene.add(pieceObjGroup)};this.removePiece=function(piecePos){var boardPos=typeof piecePos==="string"?this.notationToBoard(piecePos):piecePos;
if(!boardPos){return}var piece=board[boardPos[0]][boardPos[1]];if(piece!==0){scene.remove(piece);delete board[boardPos[0]][boardPos[1]];
board[boardPos[0]][boardPos[1]]=0}};this.removeAllPieces=function(){var i,j;for(i=0;i<board.length;i++){for(j=0;j<board[i].length;j++){
if(board[i][j]!==0){scene.remove(board[i][j]);delete board[i][j]}}}board=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
};this.showPieces=function(visibility){var i,j,k,piece;visibility=visibility===true?true:false;if(piecesHidden!==visibility){return;
}piecesHidden=!visibility;for(i=0;i<board.length;i++){for(j=0;j<board[i].length;j++){piece=board[i][j];if(piece!==0){for(k=0;k<piece.children.length;k++){
piece.children[k].visible=visibility}}}}};this.flipBoard=function(flip){boardFlipped=flip;var panAngleToSubtract=0;if(boardFlipped){
panAngleToSubtract=360}else{panAngleToSubtract=-360}if(!isBoardFlipping){flipCameraPanAngle=cameraPanAngle+panAngleToSubtract}else{
flipBoardAnimation.stop();flipCameraPanAngle=flipCameraPanAngle+panAngleToSubtract}isBoardFlipping=true;flipBoardAnimation=rotateCamera(flipCameraPanAngle,cameraTiltAngle,true,function(){
isBoardFlipping=false})};this.setViewOnly=function(view){if(view===undefined){viewOnly=true}else{viewOnly=view}};this.markSquare=function(squareNotation,color,markType,markStyle){
color=cssHexToHex(color);markStyle=markStyle||{};markStyle.type=markStyle.type||"highlighted";markStyle.opacity=markStyle.opacity!==undefined?markStyle.opacity:1;
var worldPos;var boardPos;var markGeom;var markMesh;var squaresContainer=markedSquares[markType];if(squaresContainer[squareNotation]){
squaresContainer[squareNotation].material.color=new THREE.Color(color)}else{worldPos=this.notationToWorld(squareNotation);boardPos=this.notationToBoard(squareNotation);
var material=new THREE.MeshBasicMaterial({color:color});material.depthWrite=false;if(markStyle.type==="highlighted"){markGeom=new THREE.PlaneBufferGeometry(squareSize,squareSize,1,1);
material.opacity=markStyle.opacity;material.transparent=true}else if(markStyle.type==="circle"){if(board[boardPos[0]][boardPos[1]]){
markGeom=new THREE.CircleGeometry(squareSize*.85/2,32)}else{markGeom=new THREE.CircleGeometry(squareSize*.35/2,16)}material.opacity=markStyle.opacity;
material.transparent=true}else{markGeom=markedSquareGeom}markMesh=new THREE.Mesh(markGeom,material);rotateAroundWorldAxis(markMesh,new THREE.Vector3(1,0,0),-90);
markMesh.position.set(worldPos[0],.005,worldPos[1]);markMesh.renderDepth=2;if(markType==="secondary"){markMesh.position.y=.01}scene.add(markMesh);
squaresContainer[squareNotation]=markMesh}};this.unmarkSquare=function(squareNotation,markType){var squaresContainer=markedSquares[markType];
if(squaresContainer[squareNotation]){scene.remove(squaresContainer[squareNotation]);delete squaresContainer[squareNotation]}};this.blinkSquare=function(options,callback){
var squareNotation=options.areaId;var square=markedSquares.primary[squareNotation];var intervalId=null;var count=options.count;var frequency=options.freq;
if(!square){return}function blink(){if(count-- >0){if(count%2==1){square.visible=false}else{square.visible=true}}else{if(intervalId){
clearInterval(intervalId)}if(callback){callback.call(callbacksContext,squareNotation)}}}intervalId=setInterval(blink,frequency)};this.setSquareColor=function(color,squareNotation){
if(!squareNotation){for(squareNotation in markedSquares.primary){this.setSquareColor(color,squareNotation)}return}var square=markedSquares.primary[squareNotation];
if(!square){return}if(typeof color==="string"){color=cssHexToHex(color);square.material.color=new THREE.Color(color)}else{var column=squareNotation.substr(0,1).charCodeAt()-96;
var row=squareNotation.substr(1,1);var colorToUse=color[0];if(row%2===0&&column%2!==0||row%2!==0&&column%2===0){colorToUse=color[1];
}colorToUse=cssHexToHex(colorToUse);square.material.color=new THREE.Color(colorToUse)}};this.drawArrow=function(arrow){var arrowId;
if(arrow.temporary){arrowId="temporary"}else{arrowId=arrow.from+arrow.to}if(markingArrows[arrowId]){scene.remove(markingArrows[arrowId]);
delete markingArrows[arrowId]}if(markingArrows.temporary){scene.remove(markingArrows.temporary);delete markingArrows.temporary}var arrowMesh=new THREE.Mesh(arrowsGeom[arrow.type].clone());
arrowMesh.material=materials.arrowMaterial;arrowMesh.renderDepth=1;var arrowPosition=this.notationToWorld(arrow.from);arrowMesh.position.x=arrowPosition[0];
arrowMesh.position.z=arrowPosition[1];arrowMesh.position.y=.01;var axisY=new THREE.Vector3(0,1,0);var axisZ=new THREE.Vector3(0,0,1);
if(arrow.type==="L"){if(arrow.direction===1||arrow.direction===3||arrow.direction===5||arrow.direction===7){rotateAroundWorldAxis(arrowMesh,axisZ,180);
}if(arrow.direction===1||arrow.direction===8){rotateAroundWorldAxis(arrowMesh,axisY,180)}else if(arrow.direction===2||arrow.direction===3){
rotateAroundWorldAxis(arrowMesh,axisY,90)}else if(arrow.direction===6||arrow.direction===7){rotateAroundWorldAxis(arrowMesh,axisY,-90);
}}else{var arrowLength=squareSize*arrow.length-squareSize;if(arrow.direction%2===0){arrowLength+=(Math.sqrt(squareSize*squareSize*2)-squareSize)*arrow.length;
}arrowMesh.geometry.vertices[0].x+=arrowLength;arrowMesh.geometry.vertices[1].x+=arrowLength;arrowMesh.geometry.vertices[3].x+=arrowLength;
arrowMesh.geometry.vertices[5].x+=arrowLength;arrowMesh.geometry.vertices[6].x+=arrowLength;if(arrow.direction===1){rotateAroundWorldAxis(arrowMesh,axisY,90);
}else if(arrow.direction===2){rotateAroundWorldAxis(arrowMesh,axisY,45)}else if(arrow.direction===4){rotateAroundWorldAxis(arrowMesh,axisY,-45);
}else if(arrow.direction===5){rotateAroundWorldAxis(arrowMesh,axisY,-90)}else if(arrow.direction===6){rotateAroundWorldAxis(arrowMesh,axisY,-135);
}else if(arrow.direction===7){rotateAroundWorldAxis(arrowMesh,axisY,-180)}else if(arrow.direction===8){rotateAroundWorldAxis(arrowMesh,axisY,135);
}}markingArrows[arrowId]=arrowMesh;scene.add(arrowMesh)};this.removeArrow=function(arrow){var arrowId;if(arrow.temporary){arrowId="temporary";
}else{arrowId=arrow.from+arrow.to}if(markingArrows[arrowId]){scene.remove(markingArrows[arrowId]);delete markingArrows[arrowId]}};
this.removeAllArrows=function(){for(var arrowId in markingArrows){if(markingArrows.hasOwnProperty(arrowId)){scene.remove(markingArrows[arrowId]);
delete markingArrows[arrowId]}}};this.selectPiece=function(mouse3D){var boardPos=this.worldToBoard(mouse3D.x,mouse3D.z);if(board[boardPos[0]][boardPos[1]]===0){
selectedPiece=null;return false}selectedPiece={};selectedPiece.boardPos=boardPos;selectedPiece.obj=board[boardPos[0]][boardPos[1]];
selectedPiece.origPos=selectedPiece.obj.position.clone();return true};this.deselectPiece=function(){if(!selectedPiece){return}selectedPiece.obj.position.x=selectedPiece.origPos.x;
selectedPiece.obj.position.y=selectedPiece.origPos.y;selectedPiece.obj.position.z=selectedPiece.origPos.z;selectedPiece.obj.children[0].position.y=0;
selectedPiece=null};this.dragSelectedPiece=function(mouse3D){if(!selectedPiece){return}selectedPiece.obj.position.x=mouse3D.x;selectedPiece.obj.position.z=mouse3D.z;
selectedPiece.obj.children[0].position.y=1;if(intersectedPiece){if(intersectedPiece.color===WHITE){intersectedPiece.children[0].material=materials.whitePieceMaterial;
}else{intersectedPiece.children[0].material=materials.blackPieceMaterial}intersectedPiece.children[1].visible=true;intersectedPiece=null;
}if(this.isMouseOnBoard(mouse3D)){var worldPos=this.roundWorldPosition(mouse3D.x,mouse3D.z);squareOverPlane.position.x=worldPos[0];
squareOverPlane.position.z=worldPos[1];squareOverPlane.position.y=.005;var boardPos=this.worldToBoard(mouse3D.x,mouse3D.z);intersectedPiece=board[boardPos[0]][boardPos[1]];
if(intersectedPiece&&intersectedPiece!==selectedPiece.obj){if(intersectedPiece.color===WHITE){intersectedPiece.children[0].material=materials.whitePieceMaterialIntersected;
}else{intersectedPiece.children[0].material=materials.blackPieceMaterialIntersected}intersectedPiece.children[1].visible=false}}else{
squareOverPlane.position.set(squareSize,-.2,squareSize)}};this.endPieceDrag=function(){if(!selectedPiece){return}this.deselectPiece();
squareOverPlane.position.y=-.2;if(intersectedPiece){if(intersectedPiece.color===WHITE){intersectedPiece.children[0].material=materials.whitePieceMaterial;
}else{intersectedPiece.children[0].material=materials.blackPieceMaterial}intersectedPiece.children[1].visible=true;intersectedPiece=null;
}};this.movePiece=function(from,to,animDuration,callback){var piece;var capturedPiece;var toWorldPos;if(typeof from==="string"){from=this.notationToBoard(from);
to=this.notationToBoard(to)}toWorldPos=this.boardToWorld(to);piece=board[from[0]][from[1]];capturedPiece=board[to[0]][to[1]];if(piece===0){
return}board[from[0]][from[1]]=0;delete board[to[0]][to[1]];board[to[0]][to[1]]=piece;if(capturedPiece!==0){if(capturedPiece.color===WHITE){
capturedPiece.children[0].material=materials.whitePieceMaterialCaptured}else{capturedPiece.children[0].material=materials.blackPieceMaterialCaptured;
}if(animDuration){var captureAnimation=new Animation(capturedPiece.children[0].material,{duration:animDuration,easing:"easeLinear"
});captureAnimation.addKeyframes({0:{opacity:1},100:{opacity:0}});captureAnimation.onEnd(function(){scene.remove(capturedPiece);capturedPiece.children[0].material.opacity=1;
});captureAnimation.start()}else{scene.remove(capturedPiece)}}if(animDuration){var moveAnimation=new Animation(piece.position,{duration:animDuration,
easing:"easeInOutCubic"});moveAnimation.addKeyframes({0:{x:piece.position.x,z:piece.position.z},100:{x:toWorldPos[0],z:toWorldPos[1]
}});moveAnimation.onUpdate(function(target,updatedValues,animation,elapsedInterval){var pieceElevation=2;if(elapsedInterval<.5){piece.children[0].position.y=elapsedInterval*pieceElevation;
}else{piece.children[0].position.y=pieceElevation-elapsedInterval*pieceElevation}});moveAnimation.onEnd(function(){piece.children[0].position.y=0;
if(callback){callback.call(callbacksContext,moveAnimation)}});moveAnimation.start()}else{piece.position.x=toWorldPos[0];piece.position.z=toWorldPos[1];
if(callback){callback.call(callbacksContext)}}};this.showPromotionWindow=function(color,callback){callbacks.onPromotion=callback;if(color===WHITE){
document.getElementById(owner.boardId+"_pawnPromotionWindow3D_white").style.display="block";document.getElementById(owner.boardId+"_pawnPromotionWindow3D_black").style.display="none";
}else{document.getElementById(owner.boardId+"_pawnPromotionWindow3D_white").style.display="none";document.getElementById(owner.boardId+"_pawnPromotionWindow3D_black").style.display="block";
}promotionWindowEl.style.display="block"};this.hidePromotionWindow=function(){promotionWindowEl.style.display="none"};this.showBoardNotation=function(boardNotation){
boardNotationPlane.visible=boardNotation};this.setPieceStyle=function(style){var pieceTextureUrl=config.dataUrl+"pieces/"+config.chessSet+"/textures/";
var textureLoader=new THREE.TextureLoader;textureLoader.crossOrigin=true;textureLoader.load(pieceTextureUrl+"piece_"+style+"_white.jpg",function(texture){
materials.whitePieceMaterial.map=texture;materials.whitePieceMaterialCaptured.map=materials.whitePieceMaterial.map;materials.whitePieceMaterialIntersected.map=materials.whitePieceMaterial.map;
textureLoader.load(pieceTextureUrl+"piece_"+style+"_black.jpg",function(texture){materials.blackPieceMaterial.map=texture;materials.blackPieceMaterialCaptured.map=materials.blackPieceMaterial.map;
materials.blackPieceMaterialIntersected.map=materials.blackPieceMaterial.map;if(style=="metal"){var envMap=loadTextureCube(pieceTextureUrl+"envmap/");
materials.whitePieceMaterial.envMap=envMap;materials.whitePieceMaterial.reflectivity=1;materials.whitePieceMaterial.needsUpdate=true;
materials.blackPieceMaterial.envMap=envMap;materials.blackPieceMaterial.reflectivity=1;materials.blackPieceMaterial.needsUpdate=true;
}else{materials.whitePieceMaterial.envMap=null;materials.whitePieceMaterial.needsUpdate=true;materials.blackPieceMaterial.envMap=null;
materials.blackPieceMaterial.needsUpdate=true}})})};this.setBoardTexture=function(textureName){var boardTextureUrl=config.dataUrl+"board/textures/board_"+textureName+".jpg";
var boardNotationTextureUrl=config.dataUrl+"board/textures/board_"+textureName+"_notation.png";var textureLoader=new THREE.TextureLoader;
textureLoader.crossOrigin=true;textureLoader.load(boardTextureUrl,function(texture){materials.boardMaterial.map=texture;materials.boardMaterial.map.flipY=true;
textureLoader.load(boardNotationTextureUrl,function(texture){materials.boardNotationMaterial.map=texture})})};this.isPieceOnMousePosition=function(pos){
if(pos.z===undefined){pos=this.getMouse3D(pos.x,pos.y)}var boardPos=this.worldToBoard(pos.x,pos.z);if(boardPos&&board[boardPos[0]][boardPos[1]]!==0){
return true}return false};this.isMouseOnBoard=function(pos){if(pos.z===undefined){pos=this.getMouse3D(pos.x,pos.y)}if(pos.x>=0&&pos.x<=squareSize*8&&pos.z>=0&&pos.z<=squareSize*8){
return true}else{return false}};this.notationToWorld=function(notation){var xSquare=notation.charCodeAt(0)-96;var zSquare=parseInt(notation.charAt(1),10);
var x=xSquare*squareSize-squareSize/2;var z=(9-zSquare)*squareSize-squareSize/2;return[x,z]};this.notationToBoard=function(notation){
var i=parseInt(notation.charAt(1),10)-1;var j=notation.charCodeAt(0)-97;return[i,j]};this.worldToBoard=function(x,z){var i=Math.ceil((squareSize*8-z)/squareSize)-1;
var j=Math.ceil(x/squareSize)-1;if(i>7||i<0||j>7||j<0||isNaN(i)||isNaN(j)){return false}return[i,j]};this.boardToWorld=function(pos){
var x=(1+pos[1])*squareSize-squareSize/2;var z=squareSize*9-(1+pos[0])*squareSize-squareSize/2;return[x,z]};this.boardToNotation=function(pos){
var rank=pos[0]+1;var file=String.fromCharCode(pos[1]+97);return file+rank};this.getMouse3D=function(x,y){var pos=new THREE.Vector3(0,0,0);
var pMouse=new THREE.Vector3(x/renderer.domElement.width*2-1,-(y/renderer.domElement.height)*2+1,1);pMouse.unproject(camera);var cam=camera.position;
var m=pMouse.y/(pMouse.y-cam.y);pos.x=pMouse.x+(cam.x-pMouse.x)*m;pos.z=pMouse.z+(cam.z-pMouse.z)*m;return pos};this.roundWorldPosition=function(x,z){
var newX=(Math.ceil(x/squareSize)-1)*squareSize+squareSize/2;var newZ=(Math.ceil(z/squareSize)-1)*squareSize+squareSize/2;return[newX,newZ];
};this.updateCamera=function(cameraOptions){var cameraPosition={x:0,y:0,z:0};var cameraTargetPosition={x:0,y:0,z:0};if(cameraOptions){
if(cameraOptions.distance!==undefined&&!isNaN(cameraOptions.distance)){cameraDistance=cameraOptions.distance}if(cameraOptions.panAngle!==undefined&&!isNaN(cameraOptions.panAngle)){
cameraPanAngle=boardFlipped?cameraOptions.panAngle+360:cameraOptions.panAngle}if(cameraOptions.tiltAngle!==undefined&&!isNaN(cameraOptions.tiltAngle)){
cameraTiltAngle=cameraOptions.tiltAngle}if(cameraOptions.cameraX!==undefined&&!isNaN(cameraOptions.cameraX)){cameraPosition.x=cameraOptions.cameraX;
}if(cameraOptions.cameraY!==undefined&&!isNaN(cameraOptions.cameraY)){cameraPosition.y=cameraOptions.cameraY}if(cameraOptions.cameraZ!==undefined&&!isNaN(cameraOptions.cameraZ)){
cameraPosition.z=cameraOptions.cameraZ}if(cameraOptions.cameraTargetX!==undefined&&!isNaN(cameraOptions.cameraTargetX)){cameraTargetPosition.x=cameraOptions.cameraTargetX;
}if(cameraOptions.cameraTargetY!==undefined&&!isNaN(cameraOptions.cameraTargetY)){cameraTargetPosition.y=cameraOptions.cameraTargetY;
}if(cameraOptions.cameraTargetZ!==undefined&&!isNaN(cameraOptions.cameraTargetZ)){cameraTargetPosition.z=cameraOptions.cameraTargetZ;
}}if(cameraPosition.x||cameraPosition.y||cameraPosition.z){camera.position.x=cameraPosition.x;camera.position.y=cameraPosition.y;camera.position.z=cameraPosition.z;
cameraTarget.x=cameraTargetPosition.x;cameraTarget.y=cameraTargetPosition.y;cameraTarget.z=cameraTargetPosition.z;camera.lookAt(cameraTarget);
}else{rotateCamera(cameraPanAngle,cameraTiltAngle)}};function initEngine(){THREE.ImageUtils.crossOrigin="";var viewWidth=containerEl.offsetWidth;
var viewHeight=containerEl.offsetHeight;renderer.domElement.style.position="relative";renderer.physicallyBasedShading=true;renderer.setSize(viewWidth,viewHeight);
renderer.setPixelRatio(PIXEL_RATIO);scene=new THREE.Scene;camera=new THREE.PerspectiveCamera(35,viewWidth/viewHeight,1,2e3);if(config.flipBoard){
cameraPanAngle+=360}if(options.cameraX||options.cameraY||options.cameraZ){camera.position.x=options.cameraX;camera.position.y=options.cameraY;
camera.position.z=options.cameraZ;cameraTarget.x=options.cameraTargetX;cameraTarget.y=options.cameraTargetY;cameraTarget.z=options.cameraTargetZ;
camera.lookAt(cameraTarget);rotateCamera(cameraPanAngle,cameraTiltAngle)}else{rotateCamera(cameraPanAngle,cameraTiltAngle);panCamera(cameraHorizontalPanning,cameraVerticalPanning);
}scene.add(camera)}function initLights(){lights.topLight=new THREE.PointLight;lights.topLight.intensity=.65;lights.topLight.position.set(squareSize*4,150,squareSize*4);
lights.whiteSideLight=new THREE.DirectionalLight;lights.whiteSideLight.intensity=.45;lights.whiteSideLight.position.set(squareSize*4,100,squareSize*4+200);
lights.whiteSideLight.target.position.set(squareSize*4,0,squareSize*4);lights.blackSideLight=new THREE.DirectionalLight;lights.blackSideLight.intensity=.45;
lights.blackSideLight.position.set(squareSize*4,100,squareSize*4-200);lights.blackSideLight.target.position.set(squareSize*4,0,squareSize*4);
lights.movingLight=new THREE.PointLight(16379337);lights.movingLight.position.set(0,10,0);lights.movingLight.intensity=.25;lights.movingLight.distance=500;
scene.add(lights.topLight);scene.add(lights.whiteSideLight);scene.add(lights.blackSideLight);scene.add(lights.movingLight)}function initMaterials(callback){
var piecesUrl=config.dataUrl+"pieces/"+config.chessSet+"/";var boardTextureUrl=config.dataUrl+"board/textures/board_"+config.boardTexture+".jpg";
var boardNotationTextureUrl=config.dataUrl+"board/textures/board_"+config.boardTexture+"_notation.png";var totalTextures=11;var loadedTextures=0;
function checkLoad(){loadedTextures++;if(loadedTextures===totalTextures&&callback){callback()}}var textureLoader=new THREE.TextureLoader;
textureLoader.crossOrigin=true;materials.boardMaterial=new THREE.MeshLambertMaterial;materials.boardMaterial.map=textureLoader.load(boardTextureUrl,function(){
checkLoad()});materials.boardMaterial.map.flipY=true;materials.boardNotationMaterial=new THREE.MeshLambertMaterial;materials.boardNotationMaterial.map=textureLoader.load(boardNotationTextureUrl,function(){
checkLoad()});materials.boardNotationMaterial.transparent=true;materials.groundMaterial=new THREE.MeshBasicMaterial;materials.groundMaterial.map=textureLoader.load(config.dataUrl+"board/textures/board_shadow.png",function(){
checkLoad()});materials.groundMaterial.transparent=true;materials.whitePieceMaterial=new THREE.MeshPhongMaterial;materials.whitePieceMaterial.map=textureLoader.load(piecesUrl+"textures/piece_white.jpg",function(){
checkLoad()});materials.whitePieceMaterial.shininess=50;materials.whitePieceMaterialCaptured=new THREE.MeshPhongMaterial;materials.whitePieceMaterialCaptured.transparent=true;
materials.whitePieceMaterialCaptured.map=materials.whitePieceMaterial.map;materials.whitePieceMaterialIntersected=new THREE.MeshPhongMaterial;
materials.whitePieceMaterialIntersected.transparent=true;materials.whitePieceMaterialIntersected.map=materials.whitePieceMaterial.map;
materials.whitePieceMaterialIntersected.opacity=.5;materials.blackPieceMaterial=new THREE.MeshPhongMaterial;materials.blackPieceMaterial.map=textureLoader.load(piecesUrl+"textures/piece_black.jpg",function(){
checkLoad()});materials.blackPieceMaterial.shininess=50;materials.blackPieceMaterialCaptured=new THREE.MeshPhongMaterial;materials.blackPieceMaterialCaptured.transparent=true;
materials.blackPieceMaterialCaptured.map=materials.blackPieceMaterial.map;materials.blackPieceMaterialIntersected=new THREE.MeshPhongMaterial;
materials.blackPieceMaterialIntersected.transparent=true;materials.blackPieceMaterialIntersected.map=materials.blackPieceMaterial.map;
materials.blackPieceMaterialIntersected.opacity=.5;if(config.pieceStyle=="metal"){var envMap=loadTextureCube(piecesUrl+"textures/envmap/");
materials.whitePieceMaterial.envMap=envMap;materials.whitePieceMaterial.reflectivity=1;materials.blackPieceMaterial.envMap=envMap;
materials.blackPieceMaterial.reflectivity=1}materials.squareOverMaterial=new THREE.MeshLambertMaterial;materials.squareOverMaterial.color=new THREE.Color(16771584);
materials.squareOverMaterial.opacity=.75;materials.squareOverMaterial.transparent=true;materials.squareSelectedMaterial=new THREE.MeshLambertMaterial;
materials.squareSelectedMaterial.color=new THREE.Color(1534597);materials.squareSelectedMaterial.opacity=.6;materials.squareSelectedMaterial.transparent=true;
materials.arrowMaterial=new THREE.MeshLambertMaterial;materials.arrowMaterial.color=new THREE.Color(43520);materials.arrowMaterial.opacity=.7;
materials.arrowMaterial.transparent=true;materials.arrowMaterial.side=THREE.DoubleSide;materials.arrowMaterial.depthWrite=false;materials.shadowPlanes={};
materials.shadowPlanes.king=new THREE.MeshBasicMaterial;materials.shadowPlanes.king.transparent=true;materials.shadowPlanes.king.depthWrite=false;
materials.shadowPlanes.king.map=textureLoader.load(piecesUrl+"textures/king_shadow.png",function(){checkLoad()});materials.shadowPlanes.queen=new THREE.MeshBasicMaterial;
materials.shadowPlanes.queen.transparent=true;materials.shadowPlanes.queen.depthWrite=false;materials.shadowPlanes.queen.map=textureLoader.load(piecesUrl+"textures/queen_shadow.png",function(){
checkLoad()});materials.shadowPlanes.rook=new THREE.MeshBasicMaterial;materials.shadowPlanes.rook.transparent=true;materials.shadowPlanes.rook.depthWrite=false;
materials.shadowPlanes.rook.map=textureLoader.load(piecesUrl+"textures/rook_shadow.png",function(){checkLoad()});materials.shadowPlanes.bishop=new THREE.MeshBasicMaterial;
materials.shadowPlanes.bishop.transparent=true;materials.shadowPlanes.bishop.depthWrite=false;materials.shadowPlanes.bishop.map=textureLoader.load(piecesUrl+"textures/bishop_shadow.png",function(){
checkLoad()});materials.shadowPlanes.knight=new THREE.MeshBasicMaterial;materials.shadowPlanes.knight.transparent=true;materials.shadowPlanes.knight.depthWrite=false;
materials.shadowPlanes.knight.map=textureLoader.load(piecesUrl+"textures/knight_shadow.png",function(){checkLoad()});materials.shadowPlanes.pawn=new THREE.MeshBasicMaterial;
materials.shadowPlanes.pawn.transparent=true;materials.shadowPlanes.pawn.depthWrite=false;materials.shadowPlanes.pawn.map=textureLoader.load(piecesUrl+"textures/pawn_shadow.png",function(){
checkLoad()})}function initObjects(callback){var totalObjects=9;var loadedObjects=0;var piecesUrl=config.dataUrl+"pieces/"+config.chessSet+"/";
var boardUrl=config.dataUrl+"board/board.json";function checkLoad(){loadedObjects++;if(loadedObjects===totalObjects&&callback){callback();
}}loadGeometry(boardUrl,function(geom){boardModel=new THREE.Mesh(geom,materials.boardMaterial);boardModel.position.x=squareSize*4;
boardModel.position.z=squareSize*4;lights.topLight.target=boardModel;lights.whiteSideLight.target=boardModel;lights.blackSideLight.target=boardModel;
scene.add(boardModel);checkLoad()});loadGeometry(piecesUrl+"king.json",function(geom){piecesGeom.king=geom;checkLoad()});loadGeometry(piecesUrl+"queen.json",function(geom){
piecesGeom.queen=geom;checkLoad()});loadGeometry(piecesUrl+"rook.json",function(geom){piecesGeom.rook=geom;checkLoad()});loadGeometry(piecesUrl+"bishop.json",function(geom){
piecesGeom.bishop=geom;checkLoad()});loadGeometry(piecesUrl+"knight.json",function(geom){piecesGeom.knight=geom;checkLoad()});loadGeometry(piecesUrl+"pawn.json",function(geom){
piecesGeom.pawn=geom;checkLoad()});loadGeometry(config.dataUrl+"marking_arrow_straight.json",function(geom){arrowsGeom.straight=geom;
checkLoad()});loadGeometry(config.dataUrl+"marking_arrow_L.json",function(geom){arrowsGeom.L=geom;checkLoad()});var boardNotationGeometry=new THREE.PlaneBufferGeometry(boardSize,boardSize,1,1);
boardNotationPlane=new THREE.Mesh(boardNotationGeometry,materials.boardNotationMaterial);boardNotationPlane.position.set(squareSize*4,0,squareSize*4);
boardNotationPlane.visible=config.hasBoardNotation;rotateAroundWorldAxis(boardNotationPlane,new THREE.Vector3(1,0,0),-90);scene.add(boardNotationPlane);
groundModel=new THREE.Mesh(new THREE.PlaneBufferGeometry(110,110,1,1),materials.groundMaterial);groundModel.position.set(squareSize*4,-2,squareSize*4);
rotateAroundWorldAxis(groundModel,new THREE.Vector3(1,0,0),-90);scene.add(groundModel);var markedSquareShape=new THREE.Shape;markedSquareShape.moveTo(-squareSize/2,-squareSize/2);
markedSquareShape.lineTo(squareSize/2,-squareSize/2);markedSquareShape.lineTo(squareSize/2,squareSize/2);markedSquareShape.lineTo(-squareSize/2,squareSize/2);
markedSquareShape.lineTo(-squareSize/2,-squareSize/2);var markedSquareHolePath=new THREE.Path;markedSquareHolePath.moveTo(-(squareSize/2-squareBorderSize),-(squareSize/2-squareBorderSize));
markedSquareHolePath.lineTo(squareSize/2-squareBorderSize,-(squareSize/2-squareBorderSize));markedSquareHolePath.lineTo(squareSize/2-squareBorderSize,squareSize/2-squareBorderSize);
markedSquareHolePath.lineTo(-(squareSize/2-squareBorderSize),squareSize/2-squareBorderSize);markedSquareHolePath.lineTo(-(squareSize/2-squareBorderSize),-(squareSize/2-squareBorderSize));
markedSquareShape.holes.push(markedSquareHolePath);markedSquareGeom=markedSquareShape.makeGeometry();var overPlaneShape=new THREE.Shape;
overPlaneShape.moveTo(-squareSize/2,-squareSize/2);overPlaneShape.lineTo(squareSize/2,-squareSize/2);overPlaneShape.lineTo(squareSize/2,squareSize/2);
overPlaneShape.lineTo(-squareSize/2,squareSize/2);overPlaneShape.lineTo(-squareSize/2,-squareSize/2);var overPlaneHolePath=new THREE.Path;
overPlaneHolePath.moveTo(-(squareSize/2-squareOverBorderSize),-(squareSize/2-squareOverBorderSize));overPlaneHolePath.lineTo(squareSize/2-squareOverBorderSize,-(squareSize/2-squareOverBorderSize));
overPlaneHolePath.lineTo(squareSize/2-squareOverBorderSize,squareSize/2-squareOverBorderSize);overPlaneHolePath.lineTo(-(squareSize/2-squareOverBorderSize),squareSize/2-squareOverBorderSize);
overPlaneHolePath.lineTo(-(squareSize/2-squareOverBorderSize),-(squareSize/2-squareOverBorderSize));overPlaneShape.holes.push(overPlaneHolePath);
var overPlane=overPlaneShape.makeGeometry();squareOverPlane=new THREE.Mesh(overPlane,materials.squareOverMaterial);squareOverPlane.position.set(squareSize,-.2,squareSize);
rotateAroundWorldAxis(squareOverPlane,new THREE.Vector3(1,0,0),-90);squareOverPlane.renderDepth=1;scene.add(squareOverPlane)}function initListeners(){
myEvent.observe(containerEl,"mousedown",onMouseDown);myEvent.observe(document,"mouseup",onMouseUp);myEvent.observe(containerEl,"dblclick",onMouseDoubleClick);
myEvent.observe(containerEl,"mousewheel",onMouseWheel);myEvent.observe(containerEl,"DOMMouseScroll",onMouseWheel)}function createPromotionWindow(){
var piecesUrl=config.dataUrl+"pieces/"+config.chessSet+"/";promotionWindowEl=document.createElement("div");promotionWindowEl.style.display="none";
promotionWindowEl.style.background="#fff";promotionWindowEl.style.position="absolute";promotionWindowEl.style.left="50%";promotionWindowEl.style.top="50%";
promotionWindowEl.style.marginLeft="-90px";promotionWindowEl.style.marginTop="-117px";promotionWindowEl.style.width="180px";promotionWindowEl.style.height="234px";
promotionWindowEl.style.border="1px solid #666";promotionWindowEl.style.borderRadius="3px";promotionWindowEl.style.boxShadow="1px 1px 10px #333";
promotionWindowEl.style.textAlign="center";promotionWindowEl.style.opacity="0.9";promotionWindowEl.innerHTML+='<div style="font-size: 12px; color: #333; margin: 0.5em 0 0 0;">pawn promotion</div>'+'<div id="'+owner.boardId+'_pawnPromotionWindow3D_white" style="display: none;">'+'<img data-pieceType="q" src="'+piecesUrl+'queen_promotion_white.jpg" />'+'<img data-pieceType="n" src="'+piecesUrl+'knight_promotion_white.jpg" />'+'<img data-pieceType="r" src="'+piecesUrl+'rook_promotion_white.jpg" />'+'<img data-pieceType="b" src="'+piecesUrl+'bishop_promotion_white.jpg" />'+"</div>"+'<div id="'+owner.boardId+'_pawnPromotionWindow3D_black" style="display: none;">'+'<img data-pieceType="q" src="'+piecesUrl+'queen_promotion_black.jpg" />'+'<img data-pieceType="n" src="'+piecesUrl+'knight_promotion_black.jpg" />'+'<img data-pieceType="r" src="'+piecesUrl+'rook_promotion_black.jpg" />'+'<img data-pieceType="b" src="'+piecesUrl+'bishop_promotion_black.jpg" />'+"</div>";
myEvent.observe(promotionWindowEl,"click",onPromotionSelection);containerEl.appendChild(promotionWindowEl)}function onAnimationFrame(){
requestAnimationFrame(onAnimationFrame);render()}function render(){lights.movingLight.position.x=camera.position.x;lights.movingLight.position.z=camera.position.z;
renderer.render(scene,camera)}function rotateCamera(panAngle,tiltAngle,animate,callback,returnPosition){returnPosition=returnPosition||false;
if(animate&&!returnPosition){var angles={pan:cameraPanAngle,tilt:cameraTiltAngle};var moveAnimation=new Animation(angles,{duration:.9,
easing:"easeInOutCubic"});moveAnimation.addKeyframes({0:{pan:cameraPanAngle,tilt:cameraTiltAngle},100:{pan:panAngle,tilt:tiltAngle
}});moveAnimation.onUpdate(function(){rotateCamera(angles.pan,angles.tilt)});moveAnimation.onEnd(function(){rotateCamera(angles.pan,angles.tilt);
if(callback){callback()}});moveAnimation.start();return moveAnimation}else{tiltAngle=Math.min(180,Math.max(0,tiltAngle));var x=cameraDistance*Math.sin(panAngle*Math.PI/360)*Math.cos(tiltAngle*Math.PI/360);
var y=cameraDistance*Math.sin(tiltAngle*Math.PI/360);var z=cameraDistance*Math.cos(panAngle*Math.PI/360)*Math.cos(tiltAngle*Math.PI/360);
x+=cameraTarget.x;z+=cameraTarget.z;if(!returnPosition){cameraPanAngle=panAngle;cameraTiltAngle=tiltAngle;camera.position.x=x;camera.position.y=y;
camera.position.z=z;camera.lookAt(cameraTarget)}if(callback){callback()}if(returnPosition){return{x:x,y:y,z:z}}else{return null}}
}function panCamera(panH,panV){var ax=camera.position.x;var az=camera.position.z;var bx=cameraTarget.x;var bz=cameraTarget.z;var x=panH/Math.sqrt(Math.pow(bx-ax,2)+Math.pow(bz-az,2))*(az-bz);
var z=-1*panH/Math.sqrt(Math.pow(bx-ax,2)+Math.pow(bz-az,2))*(ax-bx);var addVector=new THREE.Vector3(x,0,z);camera.position.add(addVector);
cameraTarget.add(addVector);cameraTarget.y+=panV;camera.lookAt(cameraTarget);cameraHorizontalPanning=panH;cameraVerticalPanning=panV;
}function resetCamera(){cameraHorizontalPanning=config.cameraHorizontalPanning;cameraVerticalPanning=config.cameraVerticalPanning;
cameraTarget.x=squareSize*4;cameraTarget.z=squareSize*4;cameraTarget.y=cameraVerticalPanning;if(boardFlipped){rotateCamera(DEFAULT_CAMERA_PAN_ANGLE+360,DEFAULT_CAMERA_TILT_ANGLE,true);
}else{rotateCamera(DEFAULT_CAMERA_PAN_ANGLE,DEFAULT_CAMERA_TILT_ANGLE,true)}var animationTarget={cameraDistance:cameraDistance};var animation=new Animation(animationTarget,{
duration:.7,easing:"easeInOutCubic"});animation.addKeyframes({0:{cameraDistance:cameraDistance},100:{cameraDistance:instance.calculateOptimalCameraDistance()
}});animation.onUpdate(function(){cameraDistance=animationTarget.cameraDistance});animation.start();owner.baseBoard.fireEvent("onCameraChange",{
distance:optimalCameraDistance,panAngle:DEFAULT_CAMERA_PAN_ANGLE,tiltAngle:DEFAULT_CAMERA_TILT_ANGLE,cameraX:0,cameraY:0,cameraZ:0,
cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0})}function onMouseDown(event){mouseDown=true;if(event.which>1){mouseSecondaryDown=true;
if(event.which===3){mouseRightDown=true}}var mousePoint=myEvent.getPointXY(event);var mousePointRelative={x:(mousePoint.x-owner.baseBoard.offsetx)*PIXEL_RATIO,
y:(mousePoint.y-owner.baseBoard.offsety)*PIXEL_RATIO};if(instance.isMouseOnBoard(mousePointRelative)){if(!owner.baseBoard._enabled){
return}mouseDownOnBoard=true}else{mouseDownOnBoard=false;myEvent.observe(document,"mousemove",onMouseMove)}lastMouseX=mousePointRelative.x;
lastMouseY=mousePointRelative.y}function onMouseUp(event){myEvent.stopObserving(document,"mousemove",onMouseMove);if(!owner.baseBoard._enabled){
return}mouseDown=false;mouseSecondaryDown=false;mouseRightDown=false;mouseDownOnBoard=false;var mousePoint=myEvent.getPointXY(event);
var mousePointRelative={x:(mousePoint.x-owner.baseBoard.offsetx)*PIXEL_RATIO,y:(mousePoint.y-owner.baseBoard.offsety)*PIXEL_RATIO
};lastMouseX=mousePointRelative.x;lastMouseY=mousePointRelative.y;if(cameraIsRotating||cameraIsPanning){cameraIsRotating=false;cameraIsPanning=false;
var cameraPosition=camera.position;if(boardFlipped){cameraPosition=rotateCamera(cameraPanAngle-360,cameraTiltAngle,false,null,true);
}owner.baseBoard.fireEvent("onCameraChange",{distance:cameraDistance,panAngle:boardFlipped?cameraPanAngle-360:cameraPanAngle,tiltAngle:cameraTiltAngle,
cameraX:cameraPosition.x,cameraY:cameraPosition.y,cameraZ:cameraPosition.z,cameraTargetX:cameraTarget.x,cameraTargetY:cameraTarget.y,
cameraTargetZ:cameraTarget.z})}}function onMouseMove(event){var mousePoint=myEvent.getPointXY(event);var mousePointRelativeX=(mousePoint.x-owner.baseBoard.offsetx)*PIXEL_RATIO;
var mousePointRelativeY=(mousePoint.y-owner.baseBoard.offsety)*PIXEL_RATIO;if(mouseDown&&!mouseDownOnBoard){if(mouseRightDown){cameraPanAngle-=(mousePointRelativeX-lastMouseX)*.6;
cameraTiltAngle+=(mousePointRelativeY-lastMouseY)*.6;rotateCamera(cameraPanAngle,cameraTiltAngle);cameraIsRotating=true}else if(mouseSecondaryDown){
cameraHorizontalPanning=(mousePointRelativeX-lastMouseX)*.1*-1;cameraVerticalPanning=(mousePointRelativeY-lastMouseY)*.1;panCamera(cameraHorizontalPanning,cameraVerticalPanning);
cameraIsPanning=true}}lastMouseX=mousePointRelativeX;lastMouseY=mousePointRelativeY}function onMouseDoubleClick(event){if(!owner.baseBoard._enabled){
return}var mousePoint=myEvent.getPointXY(event);var mousePointRelative={x:(mousePoint.x-owner.baseBoard.offsetx)*PIXEL_RATIO,y:(mousePoint.y-owner.baseBoard.offsety)*PIXEL_RATIO
};if(!instance.isMouseOnBoard(mousePointRelative)){resetCamera()}}function onMouseWheel(event){myEvent.preventDefault(event);var wheelDelta=event.wheelDelta!==undefined?event.wheelDelta:-event.detail;
if(wheelDelta>0){if(cameraDistance>config.cameraDistanceMax){return}cameraDistance+=5}else{if(cameraDistance<config.cameraDistanceMin){
return}cameraDistance-=5}rotateCamera(cameraPanAngle,cameraTiltAngle);if(this.cameraChangeTimeoutId){clearTimeout(this.cameraChangeTimeoutId);
}this.cameraChangeTimeoutId=setTimeout(function(){var cameraPosition=camera.position;if(boardFlipped){cameraPosition=rotateCamera(cameraPanAngle-360,cameraTiltAngle,false,null,true);
}owner.baseBoard.fireEvent("onCameraChange",{distance:cameraDistance,panAngle:boardFlipped?cameraPanAngle-360:cameraPanAngle,tiltAngle:cameraTiltAngle,
cameraX:cameraPosition.x,cameraY:cameraPosition.y,cameraZ:cameraPosition.z,cameraTargetX:cameraTarget.x,cameraTargetY:cameraTarget.y,
cameraTargetZ:cameraTarget.z})},1e3)}function onPromotionSelection(event){myEvent.preventDefault(event,true);var pieceType=myEvent.getTarget(event).getAttribute("data-pieceType");
if(pieceType!==null&&callbacks.onPromotion){callbacks.onPromotion.call(callbacksContext,pieceType)}}function rotateAroundWorldAxis(object,axis,degrees){
var radians=degrees*Math.PI/180;object.rotateOnAxis(axis,radians)}function cssHexToHex(color){color=color.replace("#","");if(color.length===3){
color=color[0]+color[0]+color[1]+color[1]+color[2]+color[2]}return parseInt(color,16)}function loadGeometry(url,callback){var jsonLoader=new THREE.JSONLoader;
jsonLoader.load(url,callback)}function loadTextureCube(path){var urls=[path+"posx.jpg",path+"negx.jpg",path+"posy.jpg",path+"negy.jpg",path+"posz.jpg",path+"negz.jpg"];
var textureCube=THREE.ImageUtils.loadTextureCube(urls);textureCube.format=THREE.RGBFormat;return textureCube}}globals.ChessBoardWebGL3D.isSupported=function(){
var canvas=document.createElement("canvas");var supported=false;try{supported=canvas.getContext("webgl")}catch(e){}if(!supported){
try{supported=canvas.getContext("experimental-webgl")}catch(e){}}return!!supported};ChessBoardRenderRegistry.WebGL3D=globals.ChessBoardWebGL3D;
});ChessCom(function(globals){"use strict";if(globals.VariantControllers){return}globals.VariantControllers={}});ChessCom(function(globals){
"use strict";if(globals.CheckCounterControl){return}function retinaDisplay(){return window["devicePixelRatio"]>1}function create(tag,parent){
var el=document.createElement(tag);parent.appendChild(el);el.style.position="absolute";return el}function div(parent){return create("div",parent);
}var CheckCounterControl=globals.CheckCounterControl=function CheckCounterControl(board,rootName){this._board=board;this._rootName=rootName;
this._counts={1:0,2:0};this._symbols={1:[],2:[]};this._margin=8;this._spacing=8;this._setupHandlers();this._preloadId=0;this._updateSize();
this._build();this._preloadAssets();this._refresh()};CheckCounterControl.prototype={calculateWidth:function(){return this._size},
_build:function(){this._container=document.getElementById(this._rootName);var root=this._root=div(this._container);root.className="check-counter-control";
for(var color in this._symbols){for(var i=0;i<3;i++){this._symbols[color].push(div(root))}}},_updateCounts:function(){var checks=this._board.gameSetup.checks||{
1:0,2:0};for(var color in this._counts){this._counts[color]=checks[color];for(var i=0;i<3;i++){this._setActive(color,i,i<checks[color]);
}}},destroy:function(){this._handlers.forEach(function(handler){this._board.detachEvent(handler[0],handler[1])},this);this._root.parentNode.removeChild(this._root);
},_setupHandlers:function(){this._handlers=[this._board.attachEvent("onSetBoardSize",this._updateOffsets,this),this._board.attachEvent("onDynamicResize",this._updateOffsets,this),this._board.attachEvent("onSetBoardFlip",this._updateOffsets,this),this._board.attachEvent("onInitBoard",this._refresh,this)];
},_updateClasses:function(){this._root.classList[retinaDisplay()?"add":"remove"]("retina")},_refresh:function(){this._updateSize();
this._updateClasses();this._updateOffsets();this._updateCounts()},_updateSize:function(){this._size=retinaDisplay()?48:24},_updateOffsets:function(){
this._root.style.left=-(this._size+this._margin)+"px";this._root.style.height=this._board.getBoardSize()*8+"px";var viewing=this._board.boardFlip?"2":"1";
for(var color in this._symbols){var baseEdge=color===viewing?"bottom":"top";for(var i=0;i<3;i++){var style={bottom:"",top:""};var offset=this._size;
if(i>0){offset+=this._spacing}style[baseEdge]=offset*i+"px";this._symbols[color][i].style.top=style.top;this._symbols[color][i].style.bottom=style.bottom;
}}},update:function(){this._updateCounts()},_setActive:function(color,index,active){var className=active?"active":"inactive";var symbol=this._symbols[color][index];
if(symbol.className!==className){symbol.className=className}},_preloadAssets:function(){var preloadContainer=div(this._container);
preloadContainer.style.visibility="hidden";["","retina"].forEach(function(sizeClass){var root=div(preloadContainer);root.className="check-counter-control "+sizeClass;
["active","inactive"].forEach(function(activeClass){div(root).className=activeClass})})}}});ChessCom(function(globals){"use strict";
if(globals.DropablePiecesControl){return}var Config=globals.config;var ChessBoardEvents=globals.ChessBoardEvents;function retinaDisplay(){
return window["devicePixelRatio"]>1}function create(tag,parent){var el=document.createElement(tag);parent.appendChild(el);el.style.position="absolute";
return el}function div(parent){return create("div",parent)}var ImageType={NORMAL:"normal",DRAG:"drag"};var userAgent=window.navigator.userAgent;
var versionIE=function(){var rv=-1;var re=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(re.exec(userAgent)!=null){rv=parseFloat(RegExp.$1);
}return rv}();var isOldIe=versionIE!==-1&&versionIE<8;var isGecko=userAgent.indexOf("Gecko")!==-1;var isIe8=versionIE===8;var isOpera=window.opera||userAgent.indexOf("Opera")!==-1;
var DropablePiecesControl=globals.DropablePiecesControl=function DropablePiecesControl(rootName,board){this._board=board;this._rootName=rootName;
this._pieceCounts=[{p:0,n:0,b:0,r:0,q:0},{p:0,n:0,b:0,r:0,q:0}];this._touchedPiece=null;this._selectedPiece=null;this.selectedPiece=null;
this._dragPieceVisible=false;this._dragInfo=null;var pieces="pnbrq".split("");this._pieceDisplayOrder=[pieces,pieces.slice(0).reverse()];
this._pieces=[];this._sizes={};this._calculateSize();this._initConfig();this._preloadId=0;this._build();this._setupHandlers();this._refresh();
this._customEventStacks={};this._customEventQueue=[];this._customEventActive=true;this.registerCustomEvent("onDropPiece");this.registerCustomEvent("onSelectPiece");
};DropablePiecesControl.prototype={calculateWidth:function(boardSize){return Math.floor(boardSize/10)},_build:function(){this._container=document.getElementById(this._rootName);
var root=this._root=div(this._container);this._root.className="dropable-pieces-control";this._dragPiece=create("img",root);this._hideDragPiece();
this._dragPiece.style.zIndex=2;this._dragPiece.className="chess_com_piece chess_com_draggable";for(var i=0;i<2;i++){this._pieces[i]={};
for(var j=0;j<5;j++){var type=this._pieceDisplayOrder[0][j];var container=div(root);var img=create("img",container);var count=div(container);
img.className="chess_com_piece";count.className="dropable-piece-count chess_com_piece";img.style.top="0px";img.style.left="0px";var piece=this._pieces[i][type]={
container:container,img:img,countNode:count,count:0,offset:0,piece:{type:type,color:i===0?1:2}};this._setCount(piece,0);var self=this;
var touchHandler=function(piece){return function(){self._touch(piece)}}(piece);container.addEventListener("mousedown",touchHandler);
if("ontouchstart"in window||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0){container.addEventListener("touchstart",touchHandler);
}}}this.chessboardEvents=new ChessBoardEvents(this._root);this.chessboardEvents.observe({dragstart:this._startDragging.bind(this),
dragmove:this._dragProgress.bind(this),dragstop:this._drop.bind(this),dragcancel:this._cancelDragging.bind(this),click:this._selectPiece.bind(this)
})},updateCounts:function(){var hands=this._board.gameSetup.hands;for(var i=0;i<2;i++){for(var type in this._pieceCounts[i]){this._pieceCounts[i][type]=0;
}}if(hands){for(var color in hands){for(var i=0;i<hands[color].length;i++){this._pieceCounts[color-1][hands[color].charAt(i)]++}}
for(var i=0;i<2;i++){for(var type in this._pieces[i]){this._setCount(this._pieces[i][type],this._pieceCounts[i][type])}}}this._updateDropable();
},_setCount:function(piece,count){piece.count=count;piece.countNode.style.display="none";if(count===0){piece.img.style.visibility="hidden";
}else{piece.img.style.visibility="visible";if(count>1){piece.countNode.style.display="";piece.countNode.innerHTML=count}}},_setDropable:function(piece){
if(this._isDropable(piece)){piece.img.className="chess_com_piece chess_com_draggable"}else{piece.img.className="chess_com_piece"}
},_setDragPiece:function(piece){this._setPiece(this._dragPiece,piece,ImageType.DRAG)},_updatePosition:function(){this._root.style.left="-"+(this._sizes[ImageType.NORMAL]+this._margin)+"px";
},_calculateSize:function(){var size=this._board.getBoardSize();this._sizes[ImageType.DRAG]=size;this._sizes[ImageType.NORMAL]=Math.round(size*8/10);
this._margin=3},_updateOffsets:function(){for(var i=0;i<2;i++){var color=this._board.boardFlip?i:1-i;for(var j=0;j<5;j++){var piece=this._pieces[color][this._pieceDisplayOrder[i][j]];
piece.offset=(i*5+j)*this._sizes[ImageType.NORMAL];piece.container.style.top=piece.offset+"px"}}},_updatePieces:function(){for(var i=0;i<2;i++){
for(var type in this._pieces[i]){var piece=this._pieces[i][type];piece.container.style.width=this._sizes[ImageType.NORMAL]+"px";piece.container.style.height=this._sizes[ImageType.NORMAL]+"px";
this._setPiece(piece.img,piece.piece,ImageType.NORMAL);this._setDropable(piece)}}},_updateDropable:function(){for(var i=0;i<2;i++){
for(var type in this._pieces[i]){this._setDropable(this._pieces[i][type])}}this.checkDraggingPiece()},checkDraggingPiece:function(){
if(this._touchedPiece){var piece=this._touchedPiece.piece;var isPieceStillDroppable=this._pieces[piece.color-1]&&this._pieces[piece.color-1][piece.type]&&this._pieces[piece.color-1][piece.type].count>0;
if(!isPieceStillDroppable){this._cancelDragging()}}},_setPiece:function(img,piece,type){var url=this._pieceStyleUrl[type];var format=this._pieceStyleImageFormat[type];
img.src=url+"/"+(piece.color===1?"w":"b")+piece.type+"."+format;img.width=img.height=this._sizes[type]},_hideDragPiece:function(){
this._dragPiece.style.display="none";this._dragPiece.className="chess_com_piece chess_com_draggable";this._dragPieceVisible=false;
this._root.style.zIndex=""},_showDragPiece:function(){this._dragPiece.style.display="";this._dragPiece.className="chess_com_piece chess_com_dragging";
this._dragPieceVisible=true;this._root.style.zIndex=99},_touch:function(piece){this._touchedPiece=null;var player=this._board.getPlayer();
if(this._isDropable(piece)){this._touchedPiece=piece}},_isDropable:function(piece){return piece.count>0},_selectPiece:function(e){
if(this._selectedPiece===this._touchedPiece){this.clearSelectedPiece()}else{this.clearSelectedPiece();this._selectedPiece=this._touchedPiece;
this.selectedPiece=this._touchedPiece.piece;this._highlightSelectedPiece();this.fireEvent("onSelectPiece")}},clearSelectedPiece:function(){
this._unhighlightSelectedPiece();this._selectedPiece=null;this.selectedPiece=null},_unhighlightSelectedPiece:function(){if(this._selectedPiece){
this._selectedPiece.container.style.background="transparent"}},_highlightSelectedPiece:function(){if(this._selectedPiece){this._selectedPiece.container.style.background="rgba(255, 255, 255, .3)";
}},_drop:function(e){if(this._dragInfo){this._hideDragPiece();this._dragInfo=null;this.fireEvent("onDropPiece",{piece:this._touchedPiece.piece,
event:e})}},_startDragging:function(e){this.clearSelectedPiece();if(this._touchedPiece){var size=this._sizes[ImageType.DRAG];var sizeDiff=Math.round((size-this._sizes[ImageType.NORMAL])/2);
var mouseOffsets=this._getMouseOffsets(e);this._dragInfo={offsets:{x:e["pointer"].x+mouseOffsets.x+sizeDiff,y:e["pointer"].y+mouseOffsets.y+sizeDiff
}};this._setDragPiece(this._touchedPiece.piece)}},_dragProgress:function(e){if(this._dragInfo){if(!this._dragPieceVisible){this._showDragPiece();
}var x=e["pointer"].x-this._dragInfo.offsets.x;var y=e["pointer"].y-this._dragInfo.offsets.y;this._dragPiece.style.top=y+"px";this._dragPiece.style.left=x+"px";
}},_cancelDragging:function(){this._dragInfo=null;this._touchedPiece=null;this._hideDragPiece()},_getMouseOffsets:function(e){var offsets=this._getOffsets();
var size=this._sizes[ImageType.NORMAL];var center=Math.round(size/2);return{x:center-(e["pointer"].x-offsets[0]),y:center-(e["pointer"].y-offsets[1])
}},destroy:function(){this._handlers.forEach(function(handler){this._board.detachEvent(handler[0],handler[1])},this);this._root.parentNode.removeChild(this._root);
},_setupHandlers:function(){this._handlers=[this._board.attachEvent("onSetBoardSize",this._refresh,this),this._board.attachEvent("onPartialResize",this._refresh,this),this._board.attachEvent("onDynamicResize",this._refresh,this),this._board.attachEvent("onBeforeSetPieceStyle",this._updatePieceStyle,this),this._board.attachEvent("onSetBoardFlip",this._onSetBoardFlip,this),this._board.attachEvent("onInitBoard",this._updateDropable,this)];
},_initConfig:function(){this._gfxUrl=this._board.opts["gfxUrl"]||Config.GfxUrl;this._piecesPath=Config.ChessBoardPiecesPath||"/pieces";
},_refresh:function(e){this._calculateSize();this._loadPieceStyleSettings();this._updatePosition();this._updateOffsets();if(!this._preloadingPieces){
this._updatePieces();this.updateCounts()}},_updatePieceStyle:function(){this._preloadingPieces=true;this._preloadAssets(function(){
this._preloadingPieces=false;this._refresh()})},_onSetBoardFlip:function(){this._updateOffsets();this._updatePieces()},_loadPieceStyleSettings:function(){
this._pieceStyleImageFormat={};this._pieceStyleUrl={};this._pieceStyleImagePath={};for(var type in this._sizes){var size=this._sizes[type];
if(retinaDisplay()){size*=2}if(size<20){size=20}this._pieceStyleImageFormat[type]="png";this._pieceStyleImagePath[type]=this._board.pieceStyle;
var chessPieceStyle=ChessPieceStyle[this._board.pieceStyle];if(chessPieceStyle){this._pieceStyleImageFormat[type]=chessPieceStyle.imgFormat;
this._pieceStyleImagePath[type]=chessPieceStyle.imgPath}this._pieceStyleUrl[type]=this._gfxUrl+this._piecesPath+"/"+this._pieceStyleImagePath[type]+"/"+size;
}},_getOffsets:function(){var curOffsetParent=this._root;var x=0;var y=0;if(isIe8||isOpera){x=1;y=1}if(isOldIe){x=1}while(curOffsetParent){
x+=curOffsetParent.offsetLeft;if(isGecko&&curOffsetParent.style.borderLeftWidth&&!isNaN(parseInt(curOffsetParent.style.borderLeftWidth))){
x+=parseInt(curOffsetParent.style.borderLeftWidth)}y+=curOffsetParent.offsetTop;if((isGecko||isOldIe)&&curOffsetParent.style.borderTopWidth&&!isNaN(parseInt(curOffsetParent.style.borderTopWidth))){
y+=parseInt(curOffsetParent.style.borderTopWidth)}if(curOffsetParent.scrollTop){y-=curOffsetParent.scrollTop}if(curOffsetParent.scrollLeft){
x-=curOffsetParent.scrollLeft}curOffsetParent=curOffsetParent.offsetParent;if(curOffsetParent&&(curOffsetParent.tagName.toUpperCase()=="BODY"||curOffsetParent.tagName.toUpperCase()=="HTML")){
curOffsetParent=null}}return[x,y]},_preloadAssets:function(callback){callback=callback.bind(this);this._loadPieceStyleSettings();var self=this;
var loadedCount=0;var images=[];var preloadId=++this._preloadId;var pieces=["bp","br","bn","bb","bq","wp","wr","wn","wb","wq"];function onload(){
if(preloadId===self._preloadId){loadedCount++;if(loadedCount===images.length){callback()}}}for(var type in this._sizes){for(var n=0;n<pieces.length;n++){
images.push(this._pieceStyleUrl[type]+"/"+pieces[n]+"."+this._pieceStyleImageFormat[type])}}for(var n=0;n<images.length;n++){var img=new Image;
img.onload=onload;img.src=images[n]}setTimeout(function(){if(loadedCount<images.length&&preloadId===this._preloadId){callback()}}.bind(this),1e4);
},registerCustomEvent:function(customName,context){context=context||this;if(this._customEventStacks){this._customEventStacks[customName]={
context:context,stack:[]}}},attachEvent:function(evt,funcObj,context){if(this._customEventStacks){if(this._customEventStacks[evt]){
this.detachEvent(evt,funcObj);this._customEventStacks[evt].stack.push({callback:funcObj,context:context})}}return[evt,funcObj]},detachEvent:function(){
var evt,funcObj;if(typeof arguments[0]=="object"&&arguments[0].length){evt=arguments[0][0];funcObj=arguments[0][1]}else{evt=arguments[0];
funcObj=arguments[1]}if(this._customEventStacks){if(this._customEventStacks[evt]){for(var n=0;n<this._customEventStacks[evt].stack.length;n++){
if(this._customEventStacks[evt].stack[n].callback==funcObj){this._customEventStacks[evt].stack.splice(n,1);break}}}}},fireEvent:function(evt,evtExtend){
evtExtend=typeof evtExtend=="object"?evtExtend:{};evtExtend["customEventName"]=evt;if(evtExtend.returnValue===undefined)evtExtend.returnValue=true;
if(!this._customEventStacks||!this._customEventStacks[evt]||!this._customEventStacks[evt].stack.length)return evtExtend;var args=[evtExtend];
for(var n=0;n<this._customEventStacks[evt].stack.length;n++){var context=this._customEventStacks[evt].stack[n].context||this._customEventStacks[evt].context;
if(this._customEventActive||specialEvts[evt]===true){this._customEventStacks[evt].stack[n].callback.apply(context,args)}else{this._customEventQueue.push({
context:context,callback:this._customEventStacks[evt].stack[n].callback,args:args})}}return evtExtend}}});ChessCom(function(globals){
"use strict";if(globals.VariantControllers.Crazyhouse){return}var DropablePiecesControl=globals.DropablePiecesControl;var CrazyhouseController=globals.VariantControllers.Crazyhouse=function CrazyhouseController(board){
this._board=board;this._dropablePieces=new DropablePiecesControl(board._sideControlsId,board);this._initialUpdateDone=false;this._initialSideControls=this._board.getSideControls();
this._userCoordsPosition=this._board.boardCoordsPosition;this._userCoords=this._board.boardCoords;this._board.setOutsideCoords(false);
this._board.setSideControls(this._dropablePieces);this._handlers=[[this._dropablePieces,"onDropPiece",this._dropPiece],[this._dropablePieces,"onSelectPiece",this._selectDropPiece],[this._board,"onClickArea",this._clickBoardArea],[this._board,"onClickPiece",this._clickBoardPiece],[this._board,"onClickPiece",this._clearSelectedDrop],[this._board,"onStartDragging",this._clearSelectedDrop],[this._board,"onMove",this._handleMove],[this._board,"onMakeEncodedMove",this._handleMove],[this._board,"onMoveForwardBackward",this._onMoveForwardBackward],[this._board,"onUpdateState",this._onUpdateState],[this._board,"onSetBoardCoordsPosition",this._onSetBoardCoordsPosition]];
this._handlers.forEach(function(handler){handler[0].attachEvent(handler[1],handler[2],this)},this)};CrazyhouseController.prototype={
refresh:function(){this._dropablePieces.updateCounts()},teardown:function(){this._handlers.forEach(function(handler){handler[0].detachEvent(handler[1],handler[2]);
},this);this._dropablePieces.destroy();this._board.setOutsideCoords(this._userCoordsPosition==="out");this._board.setBoardCoords(this._userCoords);
this._board.setSideControls(this._initialSideControls)},_onSetBoardCoordsPosition:function(){if(!this._settingCoords){this._userCoordsPosition=this._board.boardCoordsPosition;
this._userCoords=this._board.boardCoords;if(this._board.boardCoordsPosition==="out"){this._settingCoords=true;this._board.setOutsideCoords(false);
this._settingCoords=false}}},_dropPiece:function(e){this._board.calculateBoardOffset();var piece=e.piece;var colRow=this._board._render.getColRowPosition(e.event.pointer);
var areaId=colRow.area;if(areaId){this._board.dropMove(areaId,piece.type,piece.color)}},_selectDropPiece:function(){this._board.deselectPiece();
},_clickBoardArea:function(e){var piece=this._dropablePieces.selectedPiece;if(piece){this._board.dropMove(e["dropTargetId"],piece.type,piece.color);
this._dropablePieces.clearSelectedPiece()}},_clickBoardPiece:function(e){var piece=this._dropablePieces.selectedPiece;if(piece){var player=this._board.getPlayer();
if(player&&player!==this._board.gameSetup.flags["sm"]){this._board.deselectPiece();this._board.dropMove(e["dropTargetId"],piece.type,piece.color);
this._dropablePieces.clearSelectedPiece()}else{this._clearSelectedDrop()}}},_clearSelectedDrop:function(){this._dropablePieces.clearSelectedPiece();
},_onUpdateState:function(state){this._board.gameRules.setHand(this._board.gameSetup,1,state["whitehand"]);this._board.gameRules.setHand(this._board.gameSetup,2,state["blackhand"]);
this._dropablePieces.updateCounts();this._initialUpdateDone=true},_handleMove:function(){if(this._initialUpdateDone){this._dropablePieces.updateCounts();
}},_onMoveForwardBackward:function(){}}});ChessCom(function(globals){"use strict";if(globals.VariantControllers.Losers){return}var LosersController=globals.VariantControllers.Losers=function LosersController(board){
this._board=board;this._initialPromotionPieces=board.promotionPieces;board.setPromotionPieces("qnrbk")};LosersController.prototype={
teardown:function(){this._board.setPromotionPieces(this._initialPromotionPieces)}}});ChessCom(function(globals){"use strict";if(globals.VariantControllers.ThreeCheck){
return}var CheckCounterControl=globals.CheckCounterControl;var ThreeCheckController=globals.VariantControllers.ThreeCheck=function ThreeCheckController(board){
this._board=board;this._checkCounter=new CheckCounterControl(board,board._sideControlsId);this._initialSideControls=this._board.getSideControls();
this._board.setSideControls(this._checkCounter);this._handlers=[board.attachEvent("onMove",this.refresh,this),board.attachEvent("onMakeEncodedMove",this.refresh,this),board.attachEvent("onUpdateState",this._onUpdateState,this)];
};ThreeCheckController.prototype={refresh:function(){this._checkCounter.update()},teardown:function(){this._handlers.forEach(function(handler){
this._board.detachEvent(handler[0],handler[1])},this);this._checkCounter.destroy();this._board.setSideControls(this._initialSideControls);
},_onUpdateState:function(state){this._board.gameRules.setChecks(this._board.gameSetup,1,state["whitechecks"]);this._board.gameRules.setChecks(this._board.gameSetup,2,state["blackchecks"]);
this._checkCounter.update()}}});ChessCom(function(globals){"use strict";if(globals.Variants){return}globals.Variants={DROP_MOVE_FROM:"[drop move]",
DROP_PIECE_ID:"[drop move]",all:["chess","chess960","threecheck","crazyhouse","bughouse","kingofthehill","losers"],chess:{code:"chess",
name:"Chess",Rules:globals.GameRules.ChessEditor},chess960:{code:"chess960",name:"Chess960",Rules:globals.GameRules.Chess960Editor
},threecheck:{code:"threecheck",name:"3-Check",Rules:globals.GameRules.ThreeCheckEditor,Controller:globals.VariantControllers.ThreeCheck
},crazyhouse:{code:"crazyhouse",name:"Crazyhouse",Rules:globals.GameRules.CrazyhouseEditor,Controller:globals.VariantControllers.Crazyhouse,
MoveEncoder:globals.DropMoveEncoder},bughouse:{code:"bughouse",name:"Bughouse",Rules:globals.GameRules.BughouseEditor,Controller:globals.VariantControllers.Crazyhouse,
MoveEncoder:globals.DropMoveEncoder},kingofthehill:{code:"kingofthehill",name:"King of the Hill",Rules:globals.GameRules.KingOfTheHillEditor
},losers:{code:"losers",name:"Loser's Chess",Rules:globals.GameRules.LosersChessEditor,MoveEncoder:globals.LosersMoveEncoder,Controller:globals.VariantControllers.Losers
}}});ChessCom(function(globals){"use strict";if(globals.MoveListBasePrototype){return}var myEvent=globals.myEvent;var insertContentAt=globals.insertContentAt;
var chessBoardEngine=globals.chessBoardEngine;var Variants=globals.Variants;var chessMoveNotation=globals.chessMoveNotation;var MoveListBasePrototype=globals.MoveListBasePrototype={
getRootMoveList:function(){return this._rootMoveList||this},isRootMoveList:function(){return this.id==="0"||this.id===0},formatTimestamp:function(timestamp){
var moveTimestamp=timestamp/10;var moveTimeH=Math.floor(moveTimestamp/3600);var moveTimeM=Math.floor(moveTimestamp%3600/60);var moveTimeS=Math.floor(moveTimestamp%3600%60);
return moveTimeH+":"+(moveTimeM<10?"0":"")+moveTimeM+":"+(moveTimeS<10?"0":"")+moveTimeS},translate:function(moveText){if(moveText.indexOf("O-O")!==-1){
return moveText}return moveText.replace(/[BKNRQ]/g,function translatePiece(pieceType){var i18nPhrase="move_list.algebraic."+pieceType;
if(globals.moves_i18n_phrases&&globals.moves_i18n_phrases[i18nPhrase]){return globals.moves_i18n_phrases[i18nPhrase]}else{return pieceType;
}})},renderMoveText:function(move,isBlack){var moveText="";var moveTextTranslated="";var moveHTML="";var moveUnicode="";var moveListDisplayType=this.getRootMoveList()._moveListDisplayType;
var evalGlyphObj={0:"",10:"=",14:"&#x2a72;",15:"&#x2a71;",16:"&plusmn;",17:"&#8723;",18:"+-",19:"-+",13:"&infin;",22:"&#x2A00;",146:"N"
};if(typeof move==="object"){moveText=move.moveText;moveTextTranslated=move.moveTextTranslated||moveText;if(typeof move.glyph!=="undefined"){
var glyphArray=["","!","?","!!","??","!?","?!"];if(move.glyph>0&&move.glyph<7){moveText+=glyphArray[move.glyph];moveTextTranslated+=glyphArray[move.glyph];
}}if(typeof move.evalGlyph!=="undefined"){moveText+=" "+evalGlyphObj[move.evalGlyph];moveTextTranslated+=" "+evalGlyphObj[move.evalGlyph];
}}else{moveText=move;moveTextTranslated=this.translate(moveText)}if(moveText.indexOf("O-O")!==-1){return{text:moveText,html:moveText
}}if(moveListDisplayType==="figurine"){moveHTML=moveText.replace(/[BKNRQ]/g,function(pieceType){var pieceName="";var iconColor=isBlack?"black":"outline";
if(pieceType==="B"){pieceName="bishop"}else if(pieceType==="K"){pieceName="king"}else if(pieceType==="N"){pieceName="knight"}else if(pieceType==="R"){
pieceName="rook"}else if(pieceType==="Q"){pieceName="queen"}return'<i class="figurine icon-'+pieceName+"-"+iconColor+'"></i>'});moveUnicode=moveText.replace(/[BKNRQ]/g,function(pieceType){
var pieces={white:{K:"♔",Q:"♕",R:"♖",B:"♗",N:"♘"},black:{K:"♚",Q:"♛",R:"♜",B:"♝",N:"♞"}};var color=isBlack?"black":"white";return pieces[color][pieceType];
});return{text:moveUnicode,html:moveHTML}}else{return{text:moveTextTranslated,html:moveTextTranslated}}},sanitizeTextComment:function(comment){
if(!comment){return""}return String(comment).replace(/</g,"&lt;")},setVisible:function(val){this._visible=val;for(var n=0;n<this._moveNodes.length;n++){
if(this._moveNodes[n].alternates.length){for(var a=0;a<this._moveNodes[n].alternates.length;a++){this._moveNodes[n].alternates[a].setVisible(val);
}}}},show:function(){if(this.isRootMoveList()&&!this._eventsRegistered){this._registerEventListeners()}if(!this._visible&&this._rootElement){
if(this.isRootMoveList()){this._moveListStylePrefix=this._verticalStyle?"vertical":"horizontal";if(this._refreshMaxTimestamp()){this._refreshAllTimeDeltaNodes();
}}if(this.isRootMoveList()&&this._verticalStyle){this._renderVertical()}else{this._renderHorizontal()}this._visible=true;if(this.isRootMoveList()){
this._updateCommentBox();this._updateScoreBox();this._updateLinesBox()}}},_renderHorizontal:function(){var moveListStylePrefix=this.getRootMoveList()._moveListStylePrefix;
var movePrefix=moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_"+this.id;var rootName=this.rootName;var moveList=this._moveNodes;
var moveListLength=moveList.length;var moveListDisplayType=this.getRootMoveList()._moveListDisplayType;var listElement=this.isRootMoveList()?this._horizontalElement:this._rootElement;
var moveListChanged=false;var moveNode;var moveElement;var moveElementBefore;var moveElementAlt;var moveElementNext;var alternateLineId;
var recalculateAltIds;var nodeHTML;var found;var n;var a;var c;if(moveListLength>1&&!moveList[1].nodeHTML)while(listElement.firstChild)listElement.removeChild(listElement.firstChild);
for(n=1;n<moveListLength;n++){moveNode=moveList[n];nodeHTML=this._renderSingleNode(n);moveElementBefore=document.getElementById(movePrefix+"_"+n+"_before");
if(!moveListChanged&&moveNode.nodeHTML){if(moveNode.nodeHTML!==nodeHTML||moveList.displayType!==moveListDisplayType){moveListChanged=true;
while(moveElementBefore){moveElementNext=moveElementBefore.nextSibling;listElement.removeChild(moveElementBefore);moveElementBefore=moveElementNext;
}moveNode.nodeHTML=nodeHTML;insertContentAt(listElement,nodeHTML,"bottom");moveElement=document.getElementById(movePrefix+"_"+n);myEvent.observe(moveElement,"click",chessBoardEngine._moveToPly);
}}else if(!moveListChanged&&!moveNode.nodeHTML&&moveElementBefore){}else{moveNode.nodeHTML=nodeHTML;insertContentAt(listElement,nodeHTML,"bottom");
moveElement=document.getElementById(movePrefix+"_"+n);myEvent.observe(moveElement,"click",chessBoardEngine._moveToPly)}if(n<=2){this._displaySingleNodeFirstComment(n);
}this._displaySingleNodeComment(n);this._displaySingleNodeNumber(n);if(this.isRootMoveList()){this._displaySingleNodeTimestamp(n);
}this._setSingleNodeClass(n);if(!this.isRootMoveList()){this._displayEmptyLineSpace(n)}moveElementAlt=document.getElementById(movePrefix+"_"+n+"_alt");
recalculateAltIds=false;for(a=0;a<moveElementAlt.childNodes.length;a++){moveElementNext=moveElementAlt.childNodes[a];alternateLineId=moveElementNext.getElementsByTagName("span")[0].id;
found=false;for(c=0;c<moveNode.alternates.length;c++){if(alternateLineId===rootName+"_alternate_"+moveNode.alternates[c].id){found=true;
break}}if(!found){while(moveElementAlt.firstChild){moveElementAlt.removeChild(moveElementAlt.firstChild)}recalculateAltIds=true;break;
}}if(recalculateAltIds){for(a=0;a<moveNode.alternates.length;a++){moveNode.alternates[a].resetId(a)}}for(a=0;a<moveNode.alternates.length;a++){
this._buildLineEnclosure(moveNode.alternates[a],moveElementAlt);moveNode.alternates[a].show()}if(this.isRootMoveList()){if(!this.startsWithBlack&&n%2===1||this.startsWithBlack&&n%2===0){
this._lastBlackElementId=movePrefix+"_0_"+(n+1)}else{this._lastBlackElementId=movePrefix+"_0_"+n}}}moveElementBefore=document.getElementById(movePrefix+"_"+n+"_before");
while(moveElementBefore){moveElementNext=moveElementBefore.nextSibling;moveElementBefore.parentNode.removeChild(moveElementBefore);
moveElementBefore=moveElementNext}moveList.displayType=moveListDisplayType},_renderSingleNode:function(plyCount){var moveNumber=this.startsWithBlack?this._firstMoveNumber+Math.floor(plyCount/2):this._firstMoveNumber+Math.floor((plyCount-1)/2);
var isDuplicateMove=this._parentLine&&plyCount===1&&this._parentLine._moveNodes[this._atNode].moveText===this._moveNodes[plyCount].moveText;
var isPreviousDuplicate=this._parentLine&&plyCount===2&&this._parentLine._moveNodes[this._atNode].moveText===this._moveNodes[1].moveText;
var moveNode=this._moveNodes[plyCount];var moveBuffer="";var moveListStylePrefix=this.getRootMoveList()._moveListStylePrefix;var moveId=moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_"+this.id+"_"+plyCount;
var altWrapper='<span id="'+moveId+'_alt"></span>';var afterMarker='<span id="'+moveId+'_after" style="display:none;"></span>';var beforeMarker='<span id="'+moveId+'_before" style="display:none;"></span>';
var nodeHTML="";var isBlack=false;if(!isDuplicateMove){if(plyCount===1||isPreviousDuplicate){nodeHTML+='<span id="'+moveId+'_firstcomment" class="comment comment-before"></span>';
nodeHTML+='<span id="'+moveId+'_firsthtmlcomment" class="comment comment-before"></span>'}else{nodeHTML+=this._diagramStyle?'<span class="moveListNodeSeparator"> </span>':" ";
}}nodeHTML+='<span id="'+"moveList_"+plyCount+'"'+(isDuplicateMove?' style="display:none"':"")+">";nodeHTML+='<a class="'+this._moveListItemClass+'" id="'+moveId+'">';
nodeHTML+=this.isRootMoveList()&&this["beginNode"]===plyCount?"[[":"";if(!moveNode.result){if(plyCount%2===1&&!this.startsWithBlack||plyCount%2===0&&this.startsWithBlack){
nodeHTML+=moveNumber+".&nbsp;"}else{nodeHTML+='<span id="'+moveId+'_number" style="display:none;">'+moveNumber+"...&nbsp;</span>";
isBlack=true}}nodeHTML+='<span id="'+moveId+'_movetext">'+this.renderMoveText(moveNode,isBlack).html+"</span>";nodeHTML+=this.isRootMoveList()&&this["endNode"]===plyCount?"]]":"";
nodeHTML+="</a></span>";if(!isDuplicateMove){nodeHTML+='<span id="'+moveId+'_comment" class=comment></span>';nodeHTML+='<span id="'+moveId+'_htmlcomment" class=comment></span>';
}else{moveBuffer='<span id="'+moveId+'_hiddenMoveBuffer" class="moveBuffer"></span>'}return beforeMarker+nodeHTML+altWrapper+afterMarker+moveBuffer;
},_displaySingleNodeNumber:function(plyCount){var moveListStylePrefix=this.getRootMoveList()._moveListStylePrefix;var moveId=moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_"+this.id+"_"+plyCount;
var moveElementNumber=document.getElementById(moveId+"_number");var display=this._moveNodes[plyCount-1].comment&&!this._stripCommentsInMoveList||this._moveNodes[plyCount-1].alternates.length||plyCount===1||this._parentLine&&plyCount===2&&this._parentLine._moveNodes[this._atNode].moveText===this._moveNodes[1].moveText;
if(moveElementNumber){moveElementNumber.style.display=display?"inline":"none"}},_displaySingleNodeComment:function(plyCount){var moveListStylePrefix=this.getRootMoveList()._moveListStylePrefix;
var moveId=moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_"+this.id+"_"+plyCount;var moveComment=document.getElementById(moveId+"_comment");
var moveHTMLComment=document.getElementById(moveId+"_htmlcomment");if(!moveComment||!moveHTMLComment){return}var moveText=document.getElementById(moveId+"_movetext");
var moveNode=this._moveNodes[plyCount];var hasHTMLComment=typeof moveNode.HTMLComment==="string"&&moveNode.HTMLComment.length>0&&moveNode.HTMLComment.indexOf("<!--")!==0;
var hasComment=!hasHTMLComment&&typeof moveNode.comment==="string"&&moveNode.comment.length>0;moveComment.style.display=this.getRootMoveList()._HTMLCommentsVisible||!hasComment?"none":"inline";
moveHTMLComment.style.display=this.getRootMoveList()._HTMLCommentsVisible&&hasHTMLComment!==""?"inline":"none";var comment="";if(!this._stripCommentsInMoveList&&hasComment){
comment+=moveNode.comment}if(moveComment._comment!==comment){moveComment.innerHTML=this.sanitizeTextComment(comment);moveComment._comment=comment;
if(myEvent.capturingBoard){myEvent.capturingBoard.fireEvent("onCommentElementAdded",{el:moveComment,comment:comment,lineNum:this.id,
moveNum:plyCount,before:false})}}var HTMLComment="";if(!this._stripCommentsInMoveList&&hasHTMLComment){HTMLComment+=moveNode.HTMLComment;
if(this.isRootMoveList()&&this._diagramStyle){HTMLComment+="<br />"}}if(moveHTMLComment._HTMLComment!==HTMLComment){moveHTMLComment.innerHTML=HTMLComment;
moveHTMLComment._HTMLComment=HTMLComment}if(moveText){if(this.getRootMoveList()._HTMLCommentsVisible&&moveNode.moveClass){moveText.className=moveNode.moveClass;
}else{moveText.className=""}}},_setSingleNodeClass:function(plyCount){var moveListStylePrefix=this.getRootMoveList()._moveListStylePrefix;
var moveId=moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_"+this.id+"_"+plyCount;var moveElement=document.getElementById(moveId);
if(moveElement&&moveElement.parentNode){if(this.getRootMoveList()._currentAlternateLine===this&&plyCount===this.getRootMoveList()._selectedNode){
moveElement.parentNode.classList.add("mhl")}else{moveElement.parentNode.classList.remove("mhl")}if(this.isRootMoveList()&&this["focusNode"]===plyCount){
moveElement.parentNode.classList.add("focusNode")}}},_buildSingleNode:function(plyCount){var nodeHTML=this._renderSingleNode(plyCount);
var domElement=this.isRootMoveList()?this._horizontalElement:this._rootElement;insertContentAt(domElement,nodeHTML,"bottom");if(this.isRootMoveList()&&plyCount===1||!this.isRootMoveList()&&plyCount<=2){
this._displaySingleNodeFirstComment(plyCount)}this._displaySingleNodeComment(plyCount);this._displaySingleNodeNumber(plyCount);if(this.isRootMoveList()){
this._displaySingleNodeTimestamp(plyCount)}this._setSingleNodeClass(plyCount);if(this.isRootMoveList()){this._lastBlackElementId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+plyCount;
}},_buildLineEnclosure:function(lineObj,parentNode){var rootName=lineObj.rootName;var rootElement=document.getElementById(rootName);
if(lineObj._moveNodes.length){if(!rootElement){var nodeHTML="<span class='moveListAlternateLine'> (<span id='"+rootName+"'></span>)</span>";
if(this.getRootMoveList()._diagramStyle){nodeHTML="<span class='moveListAlternateLine'> <span class='moveListAlternateLineDelimiter'>(</span><span class='moveListAlternateLineContent' id='"+rootName+"'></span><span class='moveListAlternateLineDelimiter'>)</span></span>";
}insertContentAt(parentNode,nodeHTML,"bottom");rootElement=document.getElementById(rootName)}lineObj._rootElement=rootElement}else if(rootElement){
parentNode=rootElement.parentNode;parentNode.parentNode.removeChild(parentNode)}},searchAlternateLine:function(id,doNotThrow){var found=null;
if(id!==this.id){if(this._moveNodes.length){for(var n=0;n<this._moveNodes.length;n++){for(var a=0;a<this._moveNodes[n].alternates.length;a++){
if(this._moveNodes[n].alternates[a].id===id){return this._moveNodes[n].alternates[a]}else if(found=this._moveNodes[n].alternates[a].searchAlternateLine(id)){
return found}}}}}else{return this}if(this.isRootMoveList()&&found===null&&!doNotThrow){throw new Error("Alternate line not found for "+id);
}return found},addNode:function(gameSetup,gameRules,options){var opts={};globals.objectAssign(opts,{additionalInfo:null,makeMove:true,
renderMove:true,comment:"",HTMLComment:"",moveClass:null,timeInfo:{timestamp:0,timeDelta:0}},options);if(typeof opts.timeInfo==="undefined"||opts.timeInfo===null){
opts.timeInfo={timestamp:0,timeDelta:0}}if(!opts.fromAreaId||!opts.toAreaId||!gameSetup||!gameRules){return null}var plyCount=this._moveNodes.length;
var fromAreaId=opts.fromAreaId;var toAreaId=opts.toAreaId;var additionalInfo=opts.additionalInfo;var isDrop=fromAreaId===Variants.DROP_MOVE_FROM;
var captures=gameSetup.areas[toAreaId].pieces.length;var pieceId=isDrop?Variants.DROP_PIECE_ID:gameSetup.areas[fromAreaId].pieces[0];
var moveText=typeof opts.pgnText!=="undefined"&&opts.pgnText!==null?opts.pgnText:chessMoveNotation(pieceId,fromAreaId,toAreaId,gameSetup,additionalInfo,gameRules,captures);
var moveTextTranslated=this.translate(moveText);if(isDrop){var dropPiece=additionalInfo;if(gameSetup.flags["sm"]===1){dropPiece=dropPiece.toUpperCase();
}}var correctMove=gameRules.makeMove(pieceId,toAreaId,gameSetup,isDrop?dropPiece:additionalInfo,false,null);var animatedMove=null;
if(correctMove&&correctMove.moveFrom){fromAreaId=correctMove.moveFrom;toAreaId=correctMove.moveTo;if(correctMove.animatedFrom){animatedMove={
moveFrom:correctMove.animatedFrom,moveTo:correctMove.animatedTo}}}this._moveNodes[plyCount]={id:this.rootName+"_"+this._moveListItemPrefix+"_"+this.id+"_"+plyCount,
fen:gameRules.getFen(gameSetup),moveText:moveText,moveTextTranslated:moveTextTranslated,comment:opts.comment,HTMLComment:opts.HTMLComment,
moveClass:opts.moveClass,alternates:[],fromAreaId:fromAreaId,toAreaId:toAreaId,additionalInfo:additionalInfo,animationInfo:animatedMove,
timestamp:opts.timeInfo.timestamp,timeDelta:opts.timeInfo.timeDelta};this._moveNodes.displayType=this.getRootMoveList()._moveListDisplayType;
if(this.isRootMoveList()&&this._refreshMaxTimestamp()){this._refreshAllTimeDeltaNodes()}if(!opts.makeMove){gameRules.takeBackMove(pieceId,toAreaId,gameSetup,isDrop?dropPiece:additionalInfo,false);
}if(this.isRootMoveList()&&opts.renderMove||!this.isRootMoveList()&&this._visible&&opts.renderMove){if(this.isRootMoveList()){this._renderMoveNode(plyCount);
}else{this._buildSingleNode(plyCount)}if(!this.isRootMoveList()){var ItemId=this.getRootMoveList()._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_"+this.id+"_"+plyCount;
if(document.getElementById(ItemId)){myEvent.observe(document.getElementById(ItemId),"click",chessBoardEngine._moveToPly)}}}return correctMove;
}}});ChessCom(function(globals){if(globals.AlternateMoveList){return}var myEvent=globals.myEvent;var MoveListBasePrototype=globals.MoveListBasePrototype;
var glyphArray=["","!","?","!!","??","!?","?!"];var evalGlyphObj={0:"",10:"=",14:"&#x2a72;",15:"&#x2a71;",16:"&plusmn;",17:"&#8723;",
18:"+-",19:"-+",13:"&infin;",22:"&#x2A00;",146:"N"};var generateAlternateId=function(parent,atNode,subId){if(typeof subId==="undefined"){
subId=parent._moveNodes[atNode].alternates.length}return parent.id+"["+atNode+"|"+subId+"]"};var AlternateMoveList=globals.AlternateMoveList=function AlternateMoveList(rootMoveList,parent,stripCommentsInMoveList,atNode){
this._rootMoveList=rootMoveList;this.id=generateAlternateId(parent,atNode);this.rootName=rootMoveList.rootName+"_alternate_"+this.id;
this._rootElement=null;this._parentLine=parent;this._atNode=typeof atNode==="number"?atNode:parent._moveNodes.length-1;this._firstMoveNumber=parent.startsWithBlack?parent._firstMoveNumber+Math.floor(this._atNode/2):parent._firstMoveNumber+Math.floor((this._atNode-1)/2);
this._moveListItemClass=rootMoveList._moveListItemClass;this._moveListItemPrefix=rootMoveList._moveListItemPrefix;this._moveNodes=[{
id:"",fen:parent._moveNodes[atNode-1].fen,comment:"",HTMLComment:"",moveClass:"",alternates:[]}];this._visible=false;this.startsWithBlack=parent.startsWithBlack?(this._atNode+1)%2===0:(this._atNode+1)%2===1;
this._stripCommentsInMoveList=stripCommentsInMoveList};globals.objectAssign(AlternateMoveList.prototype,MoveListBasePrototype,{resetId:function(subId){
this.id=generateAlternateId(this._parentLine,this._atNode,subId);this.rootName=this._rootMoveList.rootName+"_alternate_"+this.id;this._rootElement=null;
for(var i=1;i<this._moveNodes.length;i++){var node=this._moveNodes[i];node.nodeHTML=null;node.id=this.rootName+"_"+this._moveListItemPrefix+"_"+this.id+"_"+i;
for(var a=0;a<node.alternates.length;a++){node.alternates[a].resetId(a)}}},_displayEmptyLineSpace:function(plyCount){var moveId=this._rootMoveList._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_"+this.id+"_"+plyCount;
var bufferEl=document.getElementById(moveId+"_hiddenMoveBuffer");var line=this;var moveListControl=this._rootMoveList;if(bufferEl){
bufferEl.addEventListener("click",function onclick(e){moveListControl._moveForwardBackward("toPly",plyCount,line.id);if(e.preventDefault){
e.preventDefault()}if(e.stopPropagation){e.stopPropagation()}})}},_displaySingleNodeFirstComment:function(plyCount){var moveId=this._rootMoveList._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_"+this.id+"_"+plyCount;
var moveComment=document.getElementById(moveId+"_firstcomment");var moveHTMLComment=document.getElementById(moveId+"_firsthtmlcomment");
if(!moveComment||!moveHTMLComment){return}var moveNode=this._moveNodes[plyCount-1];var textComment=moveNode.comment;var HTMLComment=moveNode.HTMLComment;
if(this._moveNodes[plyCount-2]){if(this._moveNodes[plyCount-2].comment){textComment=(this._moveNodes[plyCount-2].comment+" "+textComment).trim();
this._moveNodes[plyCount-2].comment="";moveNode.comment=textComment}if(this._moveNodes[plyCount-2].HTMLComment){HTMLComment=(this._moveNodes[plyCount-2].HTMLComment+" "+HTMLComment).trim();
this._moveNodes[plyCount-2].HTMLComment="";moveNode.HTMLComment=HTMLComment}}moveComment.style.display=this._rootMoveList._HTMLCommentsVisible||!textComment?"none":"inline";
moveHTMLComment.style.display=!textComment&&this._rootMoveList._HTMLCommentsVisible&&HTMLComment&&HTMLComment.indexOf("<!--")!==0?"inline":"none";
if(moveComment._comment!==textComment&&!this._stripCommentsInMoveList){moveComment.innerHTML=this.sanitizeTextComment(textComment);
moveComment._comment=textComment;if(myEvent.capturingBoard&&myEvent.capturingBoard.isFenPgnEditor){myEvent.capturingBoard.fireEvent("onCommentElementAdded",{
el:moveComment,comment:textComment,lineNum:this.id,moveNum:plyCount,before:true})}}if(moveHTMLComment._HTMLComment!==HTMLComment&&!this._stripCommentsInMoveList){
moveHTMLComment.innerHTML=HTMLComment;moveHTMLComment._HTMLComment=HTMLComment}},printPgn:function(encodeGlyphs){var result="";if(this._moveNodes[0].comment){
result+="{ "+this._moveNodes[0].comment+" } "}for(var n=1;n<this._moveNodes.length;n++){var moveNumber=this.startsWithBlack?this._firstMoveNumber+Math.floor(n/2):this._firstMoveNumber+Math.floor((n-1)/2);
var moveText=this._moveNodes[n].moveText;if(typeof this._moveNodes[n].glyph!=="undefined"){if(this._moveNodes[n].glyph>0&&this._moveNodes[n].glyph<glyphArray.length){
moveText+=encodeGlyphs?" $"+this._moveNodes[n].glyph:glyphArray[this._moveNodes[n].glyph]}}if(typeof this._moveNodes[n].evalGlyph!=="undefined"){
if(this._moveNodes[n].evalGlyph>0){moveText+=" "+encodeGlyphs?" $"+this._moveNodes[n].evalGlyph:evalGlyphObj[this._moveNodes[n].evalGlyph];
}}var nodeNumber="";if(n%2===1&&!this.startsWithBlack||n%2===0&&this.startsWithBlack){nodeNumber=moveNumber+"."}else{if(this._moveNodes[n-1].comment!==""||this._moveNodes[n-1].alternates.length||n===1){
nodeNumber=moveNumber+"..."}}result+=nodeNumber+moveText+" ";if(this._moveNodes[n].timestamp&&this._moveNodes[n].indexOf("[%clk ")===-1){
var moveTimeFormatted=this.formatTimestamp(this._moveNodes[n].timestamp);if(this._moveNodes[n].comment){result+="{[%clk "+moveTimeFormatted+"] "+this._moveNodes[n].comment+"} ";
}else{result+="{[%clk "+moveTimeFormatted+"]} "}}else if(this._moveNodes[n].comment){result+="{ "+this._moveNodes[n].comment+" } ";
}if(this._moveNodes[n].alternates.length){for(var a=0;a<this._moveNodes[n].alternates.length;a++){result+="( ";result+=this._moveNodes[n].alternates[a].printPgn(encodeGlyphs);
result+=") "}}}return result}})});ChessCom(function(globals){if(globals.MoveListControl){return}var useFen=globals.useFen;var Animation=globals.Animation;
var myEvent=globals.myEvent;var insertContentAt=globals.insertContentAt;var AlternateMoveList=globals.AlternateMoveList;var chessBoardEngine=globals.chessBoardEngine;
var Variants=globals.Variants;var ChessBoardEvents=globals.ChessBoardEvents;var MoveListBasePrototype=globals.MoveListBasePrototype;
var glyphArray=["","!","?","!!","??","!?","?!"];var evalGlyphObj={0:"",10:"=",14:"&#x2a72;",15:"&#x2a71;",16:"&plusmn;",17:"&#8723;",
18:"+-",19:"-+",13:"&infin;",22:"&#x2A00;",146:"N"};var _findRelated=function(rootName){var board=myEvent.findRelated(rootName);var boardElm=board?document.getElementById(board):null;
return boardElm?boardElm.chessBoard:null};var MoveListControl=globals.MoveListControl=function MoveListControl(rootName,chessBoardName,opts){
this.rootName=rootName;if(this.rootName){this._rootElement=document.getElementById(rootName)}if(this._rootElement){this._rootElement.moveListControl=this;
}if(this.rootName){myEvent.registerComponent(rootName);myEvent.registerRelated(rootName,chessBoardName)}this._visible=false;this._enabled=true;
this._eventsRegistered=false;this._forwardButton1=null;this._forwardButton10=null;this._forwardButtonEnd=null;this._backwardButton1=null;
this._backwardButton10=null;this._backwardButtonBegin=null;this._backwardButtonBeginElement=null;this._currentStateButton=null;this._resetStateButton=null;
this._playPauseButton=null;this._playPauseButtonElement=null;this._curentPlayButtonElement=null;this._playBackwardButtonSwap=true;
this._scrollableElement=this._rootElement;this._stripCommentsInMoveList=false;this._HTMLCommentsVisible=false;this._timestampsVisible=true;
this._timestampMaxValue=0;this._timestampMaxLength=0;this.playingMoves=false;this.playButtonText="";this.playingMovesRealtime=false;
this.playingIntervalTime=null;this.playingDirection=null;this.playingAnimationSpeed=null;this.playIntervalId=null;this.playTimeoutId=null;
this._moveListItemClass="gotomove";this._moveListItemPrefix="gotomoveid";this._moveListStylePrefix="vertical";this._commentBox=null;
this._scoreBox=null;this._aLinesBox=null;this._verticalStyle=true;this._forceScrollIntoView=false;this._moveListDisplayType=1;this._moveNodes=[{
id:"",fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",comment:"",HTMLComment:"",moveClass:"",alternates:[]}];this._lastMoveInformation=[];
this._tempMoveList=[];if(typeof window.PgnParserInstance!=="undefined"){this.pgnParser=window.PgnParserInstance}this._currentAlternateLine=this;
this.id="0";this._firstMoveNumber=1;this.startsWithBlack=false;this._parentLine=null;this._selectedNode=0;this._highlightedNode=null;
this._currentStateNode=0;this._lastBlackElementId=null;this._onMoveClickedCallback=function(){};this._moveAnimation=false;this._diagramStyle=opts["diagramStyle"]||false;
this._withinDiagram=opts["withinDiagram"]||false;var hasValue=function(val){return typeof val!=="undefined"&&val!==null};if(hasValue(opts["forwardButton1"]))this._forwardButton1=opts["forwardButton1"];
if(hasValue(opts["forwardButton10"]))this._forwardButton10=opts["forwardButton10"];if(hasValue(opts["forwardButtonEnd"]))this._forwardButtonEnd=opts["forwardButtonEnd"];
if(hasValue(opts["backwardButton1"]))this._backwardButton1=opts["backwardButton1"];if(hasValue(opts["backwardButton10"]))this._backwardButton10=opts["backwardButton10"];
if(hasValue(opts["backwardButtonBegin"]))this._backwardButtonBegin=opts["backwardButtonBegin"];if(hasValue(opts["currentStateButton"]))this._currentStateButton=opts["currentStateButton"];
if(hasValue(opts["resetStateButton"]))this._resetStateButton=opts["resetStateButton"];if(hasValue(opts["playPauseButton"]))this._playPauseButton=opts["playPauseButton"];
if(opts["playBackwardButtonSwap"]===false)this._playBackwardButtonSwap=false;if(hasValue(opts["moveListScrollableElement"]))this._scrollableElement=document.getElementById(opts["moveListScrollableElement"]);
if(hasValue(opts["moveListItemClass"]))this._moveListItemClass=opts["moveListItemClass"];if(hasValue(opts["moveListItemPrefix"]))this._moveListItemPrefix=opts["moveListItemPrefix"];
if(hasValue(opts["moveListVerticalStyle"]))this._verticalStyle=opts["moveListVerticalStyle"];if(hasValue(opts["moveAnimation"]))this._moveAnimation=opts["moveAnimation"];
if(hasValue(opts["moveListCommentBox"]))this._commentBox=document.getElementById(opts["moveListCommentBox"]);if(hasValue(opts["moveListScoreBox"]))this._scoreBox=document.getElementById(opts["moveListScoreBox"]);
if(hasValue(opts["moveListAlternateLinesBox"]))this._aLinesBox=document.getElementById(opts["moveListAlternateLinesBox"]);if(hasValue(opts["stripCommentsInMoveList"]))this._stripCommentsInMoveList=opts["stripCommentsInMoveList"];
if(hasValue(opts["forceScrollIntoView"]))this._forceScrollIntoView=opts["forceScrollIntoView"];if(typeof opts["timestampsVisible"]!=="undefined"){
this._timestampsVisible=opts["timestampsVisible"]}if(this._rootElement){this.moveListEvents=new ChessBoardEvents(this._rootElement);
this.moveListEvents.observe({rightclick:chessBoardEngine._onMoveListRightClick,contextmenu:chessBoardEngine._onMoveListContextMenu,
keepDefault:true})}this._moveListDisplayType="text";this.build()};globals.objectAssign(MoveListControl.prototype,MoveListBasePrototype,{
build:function(){if(this._rootElement){if(!this._verticalElement){var verticalElement=document.createElement("div");verticalElement.id=this.rootName+"_vertical";
verticalElement.style.display="none";this._rootElement.appendChild(verticalElement);this._verticalElement=verticalElement}if(!this._horizontalElement){
var horizontalElement=document.createElement("div");horizontalElement.id=this.rootName+"_horizontal";horizontalElement.style.display="none";
horizontalElement.className="notationHorizontal";this._rootElement.appendChild(horizontalElement);this._horizontalElement=horizontalElement;
}if(this._verticalStyle){this._verticalElement.style.display="block";this._horizontalElement.style.display="none";this._verticalElement.innerHTML="";
}else{this._verticalElement.style.display="none";this._horizontalElement.style.display="block"}}},addMoveListControls:function(opts){
var rootName=this.rootName;function addEvent(element,eventName,eventHandler){if(typeof element==="string"){element=document.getElementById(element);
}if(element){myEvent.registerRelated(element.id,rootName);element.addEventListener(eventName,eventHandler);return element}}addEvent(opts.forwardButton1,"click",chessBoardEngine._onMoveForwardButtonClick);
addEvent(opts.forwardButton1,"mousedown",chessBoardEngine._onMoveForwardButtonDown);addEvent(opts.forwardButton10,"click",chessBoardEngine._moveForward10);
addEvent(opts.forwardButtonEnd,"click",chessBoardEngine._moveForwardEnd);addEvent(opts.backwardButton1,"click",chessBoardEngine._onMoveBackwardButtonClick);
addEvent(opts.backwardButton1,"mousedown",chessBoardEngine._onMoveBackwardButtonDown);addEvent(opts.backwardButton10,"click",chessBoardEngine._moveBackward10);
addEvent(opts.backwardButtonBegin,"click",chessBoardEngine._moveBackwardBegin);addEvent(opts.currentStateButton,"click",chessBoardEngine._moveCurrentState);
addEvent(opts.resetStateButton,"click",chessBoardEngine._resetState);this._playPauseButtonElement=addEvent(opts.playPauseButton,"click",chessBoardEngine._playPause);
},attachMenuMaker:function(menuMaker){this.menuMaker=menuMaker},_registerEventListeners:function(){if(this._eventsRegistered){return;
}if(this._forwardButton1){myEvent.registerRelated(this._forwardButton1,this.rootName);myEvent.observe(document.getElementById(this._forwardButton1),"click",chessBoardEngine._onMoveForwardButtonClick);
myEvent.observe(document.getElementById(this._forwardButton1),"mousedown",chessBoardEngine._onMoveForwardButtonDown)}if(this._forwardButton10){
myEvent.registerRelated(this._forwardButton10,this.rootName);myEvent.observe(document.getElementById(this._forwardButton10),"click",chessBoardEngine._moveFordward10);
}if(this._forwardButtonEnd){myEvent.registerRelated(this._forwardButtonEnd,this.rootName);myEvent.observe(document.getElementById(this._forwardButtonEnd),"click",chessBoardEngine._moveForwardEnd);
}if(this._backwardButton1){myEvent.registerRelated(this._backwardButton1,this.rootName);myEvent.observe(document.getElementById(this._backwardButton1),"click",chessBoardEngine._onMoveBackwardButtonClick);
myEvent.observe(document.getElementById(this._backwardButton1),"mousedown",chessBoardEngine._onMoveBackwardButtonDown)}if(this._backwardButton10){
myEvent.registerRelated(this._backwardButton10,this.rootName);myEvent.observe(document.getElementById(this._backwardButton10),"click",chessBoardEngine._moveBackward10);
}if(this._backwardButtonBegin){this._backwardButtonBeginElement=document.getElementById(this._backwardButtonBegin);myEvent.registerRelated(this._backwardButtonBegin,this.rootName);
myEvent.observe(this._backwardButtonBeginElement,"click",chessBoardEngine._moveBackwardBegin)}if(this._currentStateButton){myEvent.registerRelated(this._currentStateButton,this.rootName);
myEvent.observe(document.getElementById(this._currentStateButton),"click",chessBoardEngine._moveCurrentState)}if(this._resetStateButton){
myEvent.registerRelated(this._resetStateButton,this.rootName);myEvent.observe(document.getElementById(this._resetStateButton),"click",chessBoardEngine._resetState);
}if(this._playPauseButton){this._playPauseButtonElement=document.getElementById(this._playPauseButton);myEvent.registerRelated(this._playPauseButton,this.rootName);
myEvent.observe(this._playPauseButtonElement,"click",chessBoardEngine._playPause)}myEvent.observe(this._rootElement,"click",chessBoardEngine._onMoveListClick.bind(this));
this._eventsRegistered=true},_renderVertical:function(){var a,n;for(n=1;n<this._moveNodes.length;n++){var curPlyCount=n;if(this._verticalStyle&&this.startsWithBlack&&curPlyCount===1){
this._buildNodePair(curPlyCount,true);this._lastBlackElementId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+curPlyCount;
}if(!this.startsWithBlack&&curPlyCount%2===1||this.startsWithBlack&&curPlyCount%2===0){var firstItemId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+curPlyCount;
var secondItemId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+(curPlyCount+1);if(this._verticalStyle){
this._buildNodePair(curPlyCount);this._displaySingleNodeTimestamp(curPlyCount)}else{this._buildSingleNode(curPlyCount);for(a=0;a<this._moveNodes[n].alternates.length;a++){
this._buildLineEnclosure(this._moveNodes[n].alternates[a]);this._moveNodes[n].alternates[a].show()}}if(document.getElementById(firstItemId))myEvent.observe(document.getElementById(firstItemId),"click",chessBoardEngine._moveToPly);
this._lastBlackElementId=secondItemId}else{if(this._verticalStyle){if(document.getElementById(this._lastBlackElementId)){document.getElementById(this._lastBlackElementId).innerHTML=this.renderMoveText(this._moveNodes[curPlyCount],true).html;
}this._displaySingleNodeTimestamp(curPlyCount)}else{this._buildSingleNode(curPlyCount);for(a=0;a<this._moveNodes[n].alternates.length;a++){
this._buildLineEnclosure(this._moveNodes[n].alternates[a]);this._moveNodes[n].alternates[a].show()}}if(document.getElementById(this._lastBlackElementId))myEvent.observe(document.getElementById(this._lastBlackElementId),"click",chessBoardEngine._moveToPly);
}}},_clearRender:function(line){if(line){var len=line._moveNodes.length;for(var i=0;i<len;i++){delete line._moveNodes[i].nodeHTML;
var altLen=line._moveNodes[i].alternates.length;for(var a=0;a<altLen;a++){this._clearRender(line._moveNodes[i].alternates[a])}}}else{
this._clearRender(this)}},getSpecialGlyphAsText:function(glyph){switch(glyph){case 7:return"forced move (all others lose quickly)";
case 8:return"singular move (no reasonable alternatives)";case 9:return"worst move";case 10:return"drawish position";case 11:return"equal chances, quiet position";
case 12:return"equal chances, active position";case 13:return"unclear position";case 14:return"White has a slight advantage";case 15:
return"Black has a slight advantage";case 16:return"White has a moderate advantage";case 17:return"Black has a moderate advantage";
case 18:return"White has a decisive advantage";case 19:return"Black has a decisive advantage";case 20:return"White has a crushing advantage (Black should resign)";
case 21:return"Black has a crushing advantage (White should resign)";case 22:return"White is in zugzwang";case 23:return"Black is in zugzwang";
case 24:return"White has a slight space advantage";case 25:return"Black has a slight space advantage";case 26:return"White has a moderate space advantage";
case 27:return"Black has a moderate space advantage";case 28:return"White has a decisive space advantage";case 29:return"Black has a decisive space advantage";
case 30:return"White has a slight time (development) advantage";case 31:return"Black has a slight time (development) advantage";case 32:
return"White has a moderate time (development) advantage";case 33:return"Black has a moderate time (development) advantage";case 34:
return"White has a decisive time (development) advantage";case 35:return"Black has a decisive time (development) advantage";case 36:
return"White has the initiative";case 37:return"Black has the initiative";case 38:return"White has a lasting initiative";case 39:
return"Black has a lasting initiative";case 40:return"White has the attack";case 41:return"Black has the attack";case 42:return"White has insufficient compensation for material deficit";
case 43:return"Black has insufficient compensation for material deficit";case 44:return"White has sufficient compensation for material deficit";
case 45:return"Black has sufficient compensation for material deficit";case 46:return"White has more than adequate compensation for material deficit";
case 47:return"Black has more than adequate compensation for material deficit";case 48:return"White has a slight center control advantage";
case 49:return"Black has a slight center control advantage";case 50:return"White has a moderate center control advantage";case 51:
return"Black has a moderate center control advantage";case 52:return"White has a decisive center control advantage";case 53:return"Black has a decisive center control advantage";
case 54:return"White has a slight kingside control advantage";case 55:return"Black has a slight kingside control advantage";case 56:
return"White has a moderate kingside control advantage";case 57:return"Black has a moderate kingside control advantage";case 58:return"White has a decisive kingside control advantage";
case 59:return"Black has a decisive kingside control advantage";case 60:return"White has a slight queenside control advantage";case 61:
return"Black has a slight queenside control advantage";case 62:return"White has a moderate queenside control advantage";case 63:return"Black has a moderate queenside control advantage";
case 64:return"White has a decisive queenside control advantage";case 65:return"Black has a decisive queenside control advantage";
case 66:return"White has a vulnerable first rank";case 67:return"Black has a vulnerable first rank";case 68:return"White has a well protected first rank";
case 69:return"Black has a well protected first rank";case 70:return"White has a poorly protected king";case 71:return"Black has a poorly protected king";
case 72:return"White has a well protected king";case 73:return"Black has a well protected king";case 74:return"White has a poorly placed king";
case 75:return"Black has a poorly placed king";case 76:return"White has a well placed king";case 77:return"Black has a well placed king";
case 78:return"White has a very weak pawn structure";case 79:return"Black has a very weak pawn structure";case 80:return"White has a moderately weak pawn structure";
case 81:return"Black has a moderately weak pawn structure";case 82:return"White has a moderately strong pawn structure";case 83:return"Black has a moderately strong pawn structure";
case 84:return"White has a very strong pawn structure";case 85:return"Black has a very strong pawn structure";case 86:return"White has poor knight placement";
case 87:return"Black has poor knight placement";case 88:return"White has good knight placement";case 89:return"Black has good knight placement";
case 90:return"White has poor bishop placement";case 91:return"Black has poor bishop placement";case 92:return"White has good bishop placement";
case 93:return"Black has good bishop placement";case 94:return"White has poor rook placement";case 95:return"Black has poor rook placement";
case 96:return"White has good rook placement";case 97:return"Black has good rook placement";case 98:return"White has poor queen placement";
case 99:return"Black has poor queen placement";case 100:return"White has good queen placement";case 101:return"Black has good queen placement";
case 102:return"White has poor piece coordination";case 103:return"Black has poor piece coordination";case 104:return"White has good piece coordination";
case 105:return"Black has good piece coordination";case 106:return"White has played the opening very poorly";case 107:return"Black has played the opening very poorly";
case 108:return"White has played the opening poorly";case 109:return"Black has played the opening poorly";case 110:return"White has played the opening well";
case 111:return"Black has played the opening well";case 112:return"White has played the opening very well";case 113:return"Black has played the opening very well";
case 114:return"White has played the middlegame very poorly";case 115:return"Black has played the middlegame very poorly";case 116:
return"White has played the middlegame poorly";case 117:return"Black has played the middlegame poorly";case 118:return"White has played the middlegame well";
case 119:return"Black has played the middlegame well";case 120:return"White has played the middlegame very well";case 121:return"Black has played the middlegame very well";
case 122:return"White has played the ending very poorly";case 123:return"Black has played the ending very poorly";case 124:return"White has played the ending poorly";
case 125:return"Black has played the ending poorly";case 126:return"White has played the ending well";case 127:return"Black has played the ending well";
case 128:return"White has played the ending very well";case 129:return"Black has played the ending very well";case 130:return"White has slight counterplay";
case 131:return"Black has slight counterplay";case 132:return"White has moderate counterplay";case 133:return"Black has moderate counterplay";
case 134:return"White has decisive counterplay";case 135:return"Black has decisive counterplay";case 136:return"White has moderate time control pressure";
case 137:return"Black has moderate time control pressure";case 138:return"White has severe time control pressure";case 139:return"Black has severe time control pressure";
default:return""}},showHTMLComments:function(visibility){this._HTMLCommentsVisible=!!visibility;this.__refresh()},showTimestamps:function(visibility){
this._timestampsVisible=!!visibility;this.setVisible(false);this.build();this.show()},setVerticalStyle:function(isVerticalStyle){
this._verticalStyle=!!isVerticalStyle;this._moveListStylePrefix=isVerticalStyle?"vertical":"horizontal";this.__refresh()},setMoveListDisplayType:function(moveListDisplayType){
this._moveListDisplayType=moveListDisplayType;if(this._visible){this.__refresh()}},getNextMoves:function(getEndOfLineMoves){var nodeNum=getEndOfLineMoves?this._selectedNode:this._selectedNode+1;
var lineMoveNumber=getEndOfLineMoves?2:1;var node=this._currentAlternateLine._moveNodes[nodeNum];var lines;var moves=[];if(node&&node.alternates){
lines=node.alternates;moves.push({fen:node.fen,moveText:node.moveText,moveTextTranslated:node.moveTextTranslated,toAreaId:node.toAreaId,
fromAreaId:node.fromAreaId,additionalInfo:node.additionalInfo,id:this._selectedNode+1,lineID:String(this._currentAlternateLine.id)||"0"
})}if(lines&&lines.length){lines.forEach(function(line){if(line._moveNodes[lineMoveNumber]&&(!getEndOfLineMoves||line._moveNodes[lineMoveNumber-1]&&line._moveNodes[lineMoveNumber-1].moveText===node.moveText)){
moves.push({fen:line._moveNodes[lineMoveNumber].fen,moveText:line._moveNodes[lineMoveNumber].moveText,moveTextTranslated:line._moveNodes[lineMoveNumber].moveTextTranslated,
toAreaId:line._moveNodes[lineMoveNumber].toAreaId,fromAreaId:line._moveNodes[lineMoveNumber].fromAreaId,additionalInfo:line._moveNodes[lineMoveNumber].additionalInfo,
id:lineMoveNumber,lineID:String(line.id)})}})}return moves},setCurrentLine:function(lineNum,moveNum){lineNum=lineNum||"0";this.setCurrentAlternateLine(this.searchAlternateLine(lineNum));
this.selectNode(Number(moveNum))},parsePgn:function(pgn,options){var pgnTags={};var board=_findRelated(this.rootName);options=options||{};
if(board&&board._variant!==Variants.chess){options._variant=board._variant}if(this.pgnParser)this.pgnParser.parse(pgn,this,pgnTags,options);
return pgnTags},printPgn:function(pgnTags,encodeGlyphs,useSavedMoveList,showTimestamps){var result="";var board;var moveNodes=this._moveNodes;
if(useSavedMoveList&&this._tempMoveList.length){moveNodes=this._tempMoveList}pgnTags=pgnTags||{};if(!pgnTags["Variant"]){board=_findRelated(this.rootName);
if(board&&board._variant&&board._variant.code&&String(board._variant.code).toLowerCase()!=="chess"){pgnTags["Variant"]=board._variant.name;
}}if(!pgnTags["FEN"]&&this._moveNodes[0]&&this._moveNodes[0].fen){pgnTags["FEN"]=this._moveNodes[0].fen}if(pgnTags["FEN"]==="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"){
delete pgnTags["FEN"]}if(pgnTags["FEN"]){pgnTags["SetUp"]="1"}else{delete pgnTags["SetUp"]}pgnTags["Result"]=pgnTags["Result"]||"*";
for(var keys in pgnTags){if(pgnTags.hasOwnProperty(keys)&&typeof pgnTags[keys]==="string"){result+="["+keys+' "'+pgnTags[keys]+'"]\n';
}}result+="\n";if(moveNodes[0].comment)result+="{ "+moveNodes[0].comment+" } ";for(var n=1;n<moveNodes.length;n++){if(!moveNodes[n].result){
var moveNumber=this.startsWithBlack?this._firstMoveNumber+Math.floor(n/2):this._firstMoveNumber+Math.floor((n-1)/2);var moveText=moveNodes[n].moveText;
if(typeof moveNodes[n].glyph!=="undefined"){if(moveNodes[n].glyph>0&&moveNodes[n].glyph<glyphArray.length)moveText+=encodeGlyphs?" $"+moveNodes[n].glyph:glyphArray[moveNodes[n].glyph];
}if(typeof moveNodes[n].evalGlyph!=="undefined"){if(moveNodes[n].evalGlyph>0)moveText+=" "+encodeGlyphs?" $"+moveNodes[n].evalGlyph:evalGlyphObj[moveNodes[n].evalGlyph];
}var nodeNumber="";if(n%2===1&&!this.startsWithBlack||n%2===0&&this.startsWithBlack){nodeNumber=moveNumber+"."}else{if(moveNodes[n-1].comment!==""||moveNodes[n-1].alternates.length||n===1){
nodeNumber=moveNumber+"..."}}result+=nodeNumber+moveText+" ";if(showTimestamps&&moveNodes[n].timestamp){var moveTimeFormatted=this.formatTimestamp(moveNodes[n].timestamp);
if(moveNodes[n].comment){result+="{[%clk "+moveTimeFormatted+"] "+moveNodes[n].comment+"} "}else{result+="{[%clk "+moveTimeFormatted+"]} ";
}}else if(moveNodes[n].comment){result+="{ "+moveNodes[n].comment+" } "}if(moveNodes[n].alternates.length){for(var a=0;a<moveNodes[n].alternates.length;a++){
result+="( ";result+=moveNodes[n].alternates[a].printPgn(encodeGlyphs);result+=") "}}}}result+=" "+pgnTags["Result"];return result;
},__refresh:function(refreshBoard){if(typeof refreshBoard==="undefined")refreshBoard=true;var curLine=this._currentAlternateLine;var curMove=this._selectedNode;
this.setVisible(false);this.build();this.show();var obj=_findRelated(this.rootName);if(obj){if(obj.gameRules){obj.gameRules.useFen(obj.gameSetup,this.getSelectedFen());
}if(refreshBoard){obj.refresh()}if(typeof obj._markSquares==="function")obj._markSquares()}this.setCurrentAlternateLine(curLine);this.selectNode(curMove,true);
},__clear:function(){this._moveNodes.length=1;this._moveNodes[0].alternates=[];this._moveNodes[0].comment="";this._moveNodes[0].HTMLComment="";
this._moveNodes[0].moveClass="";this._selectedNode=0;this._currentAlternateLine=this;this._timestampMaxValue=0;this._timestampMaxLength=0;
},_buildNodePair:function(plyCount,startingWithBlack){var moveNumber=this.startsWithBlack?this._firstMoveNumber+Math.floor(plyCount/2):this._firstMoveNumber+Math.floor((plyCount-1)/2);
var moveNode=this._moveNodes[plyCount];var moveNumberText=moveNode.showNumber===false?"":moveNumber+".";var firstItemId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+plyCount;
var secondItemId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+(plyCount+1);var classCode='class="notationVertical"';
if(moveNumber%2===0)classCode='class="notationVertical odd"';var nodeHTML="";nodeHTML+="<div "+classCode+">";nodeHTML+='<span class="num">'+moveNumberText+"</span>";
if(!startingWithBlack){nodeHTML+='<span id="'+"movelist_"+plyCount+'" class="'+(this._currentAlternateLine===this&&plyCount===this._selectedNode?"mhl":"")+'">';
nodeHTML+='<a class="'+this._moveListItemClass+'" id="'+firstItemId+'">'+this.renderMoveText(moveNode).html+"</a>";nodeHTML+='<span class="move-timestamp move-timestamp-white mtsb-0 mtst-0" id="'+firstItemId+'_timestamp"></span>';
nodeHTML+="</span>";nodeHTML+='<span id="'+"movelist_"+(plyCount+1)+'" class="'+(this._currentAlternateLine===this&&plyCount+1===this._selectedNode?"mhl":"")+'">';
nodeHTML+='<a class="'+this._moveListItemClass+'" id="'+secondItemId+'"></a>';nodeHTML+='<span class="move-timestamp move-timestamp-black mtsb-0 mtst-0" id="'+secondItemId+'_timestamp"></span>';
nodeHTML+="</span>"}else{nodeHTML+="<span>";nodeHTML+="<a></a>";nodeHTML+="</span>";nodeHTML+='<span id="'+"movelist_"+plyCount+'" class="'+(this._currentAlternateLine===this&&plyCount===this._selectedNode?"mhl":"")+'">';
nodeHTML+='<a class="'+this._moveListItemClass+'" id="'+firstItemId+'"></a>';nodeHTML+='<span class="move-timestamp move-timestamp-black mtsb-0 mtst-0" id="'+firstItemId+'_timestamp"></span>';
nodeHTML+="</span>"}nodeHTML+="</div>";insertContentAt(this._verticalElement,nodeHTML,"bottom")},_refreshMaxTimestamp:function(){
var values=this._moveNodes.map(function(node){return node.timeDelta}).slice(1);var maxValue=Math.max.apply(window,values)||0;var changed=this._timestampMaxValue!==maxValue;
if(changed){this._timestampMaxValue=maxValue;this._timestampMaxLength=this._timestampMaxValue?this._formatTimeDelta(this._timestampMaxValue).length+1:1;
}return changed},_refreshAllTimeDeltaNodes:function(){var moveIdPrefix=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_";
for(var i=1;i<this._moveNodes.length;i++){var timestampElement=document.getElementById(moveIdPrefix+i+"_timestamp");if(timestampElement){
this._setNodeTimeDelta(timestampElement,this._moveNodes[i],i)}}},_refreshSingleTimeDeltaNode:function(ply){var moveId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+ply+"_timestamp";
var timestampElement=document.getElementById(moveId);if(timestampElement){this._setNodeTimeDelta(timestampElement,this._moveNodes[ply],ply);
}},_formatTimeDelta:function(timeDelta){var minutes=parseInt(timeDelta/600);var seconds=((timeDelta-minutes*600)/10).toFixed(1);return minutes>0?minutes+":"+(seconds<10?"0"+seconds:seconds):seconds;
},_displaySingleNodeTimestamp:function(plyCount){var moveId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+plyCount;
var moveNode=this._moveNodes[plyCount];var timestampElement=document.getElementById(moveId+"_timestamp");if(!timestampElement){if(moveNode.timestamp&&this._timestampsVisible){
var moveElement=document.getElementById(moveId);if(moveElement){moveElement.title=this.formatTimestamp(moveNode.timestamp)}}return;
}var display=moveNode.timeDelta&&this._timestampsVisible?"inline":"none";if(timestampElement.style.display!==display){timestampElement.style.display=display;
}this._setNodeTimeDelta(timestampElement,moveNode,plyCount)},_setNodeTimeDelta:function(timestampElement,moveNode,plyCount){var timestamp=this._formatTimeDelta(moveNode.timeDelta);
if(timestampElement._timestampText!==timestamp){timestampElement.innerHTML=timestamp;timestampElement._timestampText=timestamp;var dots=this.startsWithBlack^plyCount%2?".":"...";
var moveNumber=this._firstMoveNumber+Math.floor((this.startsWithBlack?plyCount:plyCount-1)/2);var units=timestamp.split(":");var seconds=units[units.length-1];
var minutes=units.length===2?units[0]:null;timestampElement.title="Move "+moveNumber+dots+" "+this.renderMoveText(moveNode).text+" - "+(minutes?minutes+" minutes, ":"")+seconds+" seconds";
}var relative=this._timestampMaxValue?Math.round(moveNode.timeDelta*100/this._timestampMaxValue):0;var className=" mtsb-"+relative+" mtst-"+this._timestampMaxLength;
if(timestampElement.className.indexOf(className)===-1){timestampElement.className=timestampElement.className.replace(/ mtsb\-[0-9]+ mtst\-[0-9]+$/,className);
}},_displaySingleNodeFirstComment:function(){var moveId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_1";
var moveComment=document.getElementById(moveId+"_firstcomment");var moveHTMLComment=document.getElementById(moveId+"_firsthtmlcomment");
if(!moveComment||!moveHTMLComment){return}var moveNode=this._moveNodes[0];var hasComment=typeof moveNode.comment==="string"&&moveNode.comment.length>0;
var hasHTMLComment=typeof moveNode.HTMLComment==="string"&&moveNode.HTMLComment.length>0&&moveNode.HTMLComment.indexOf("<!--")!==0;
moveComment.style.display=this._HTMLCommentsVisible||!hasComment?"none":"inline";moveHTMLComment.style.display=this._HTMLCommentsVisible&&hasHTMLComment!==""?"inline":"none";
var comment="";if(!this._stripCommentsInMoveList&&hasComment){comment+=moveNode.comment}if(moveComment._comment!==comment){moveComment.innerHTML=this.sanitizeTextComment(comment);
moveComment._comment=comment;if(myEvent.capturingBoard&&myEvent.capturingBoard.isFenPgnEditor){myEvent.capturingBoard.fireEvent("onCommentElementAdded",{
el:moveComment,comment:comment,lineNum:"0",moveNum:1,before:true})}}var HTMLComment="";if(!this._stripCommentsInMoveList&&hasHTMLComment){
HTMLComment+=moveNode.HTMLComment}if(moveHTMLComment._HTMLComment!==HTMLComment){moveHTMLComment.innerHTML=HTMLComment;moveHTMLComment._HTMLComment=HTMLComment;
}},setStartingPosition:function(fen){this._moveNodes[0].fen=fen;var fenParts=fen.split(" ");this.startsWithBlack=fenParts[1].toLowerCase()==="b";
if(fenParts[5]&&!isNaN(Number(fenParts[5]))){this._firstMoveNumber=Number(fenParts[5])||1}},addNodeTimeInfo:function(ply,timeInfo){
if(!(ply>0&&ply<this._moveNodes.length)){return}this._moveNodes[ply].timestamp=timeInfo.timestamp;this._moveNodes[ply].timeDelta=timeInfo.timeDelta;
if(this._refreshMaxTimestamp()){this._refreshAllTimeDeltaNodes()}this._displaySingleNodeTimestamp(ply)},updateNodeTimeInfo:function(ply,timeInfo){
if(!(ply>0&&ply<this._moveNodes.length)){return}this._moveNodes[ply].timestamp=timeInfo.timestamp;this._moveNodes[ply].timeDelta=timeInfo.timeDelta;
if(this._refreshMaxTimestamp()){this._refreshAllTimeDeltaNodes()}else{this._refreshSingleTimeDeltaNode(ply)}},removeResultNode:function(){
var moveNodeIndex=this._moveNodes.length-1;if(this._moveNodes[moveNodeIndex]&&this._moveNodes[moveNodeIndex].result){if(this._selectedNode===moveNodeIndex){
this.selectNode(this._selectedNode-1)}this._moveNodes.pop();this.__refresh()}},getCommentEl:function(lineNum,moveNum,before){var line;
if(lineNum!=="0"){line=this.searchAlternateLine(lineNum)}else{line=this}var moveId=this._moveListStylePrefix+"_"+line.rootName+"_"+line._moveListItemPrefix+"_"+lineNum+"_"+moveNum;
var commentId=moveId+(before?"_firstcomment":"_comment");return document.getElementById(commentId)},addResultNode:function(result,timeInfo,renderMove,selectNode){
if(this._ignoreResultNode){return}if(typeof renderMove==="undefined"||renderMove===null){renderMove=true}if(typeof selectNode==="undefined"||selectNode===null){
selectNode=true}if(typeof timeInfo==="undefined"){timeInfo={timestamp:0,timeDelta:0}}var moveText;if(typeof result==="string"){moveText=result;
}else if(result instanceof Array){result=[result[0],result[1]];if(typeof result[0]==="string"){result[0]=GameResult.getGameResultByCode(result[0]).score;
}if(typeof result[1]==="string"){result[1]=GameResult.getGameResultByCode(result[1]).score}if(Number(result[0])===1){moveText="1-0";
}else if(Number(result[1])===1){moveText="0-1"}else if(parseFloat(result[0])===.5){moveText="1/2-1/2"}else{moveText=result.join("-");
}}if(moveText==="0-0"){return"*"}var plyCount=this._moveNodes.length;var lastMoveNode=this._moveNodes[plyCount-1];this._moveNodes[plyCount]={
id:this.rootName+"_"+this._moveListItemPrefix+"_0_"+plyCount,timestamp:timeInfo.timestamp,timeDelta:timeInfo.timeDelta,result:result,
showNumber:false,fen:lastMoveNode.fen,moveText:moveText,fromAreaId:lastMoveNode.fromAreaId,toAreaId:lastMoveNode.toAreaId,alternates:[],
comment:""};if(renderMove){this._renderMoveNode(plyCount)}if(selectNode){this.selectNode(plyCount)}return moveText},_renderMoveNode:function(plyCount){
if(this._visible){if(this._verticalStyle&&this.startsWithBlack&&plyCount===1){this._buildNodePair(plyCount,true);this._lastBlackElementId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+plyCount;
}if(!this.startsWithBlack&&plyCount%2===1||this.startsWithBlack&&plyCount%2===0){var firstItemId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+plyCount;
var secondItemId=this._moveListStylePrefix+"_"+this.rootName+"_"+this._moveListItemPrefix+"_0_"+(plyCount+1);if(this._verticalStyle){
this._buildNodePair(plyCount);this._displaySingleNodeTimestamp(plyCount)}else{this._buildSingleNode(plyCount)}if(document.getElementById(firstItemId))myEvent.observe(document.getElementById(firstItemId),"click",chessBoardEngine._moveToPly);
this._lastBlackElementId=secondItemId}else{if(this._verticalStyle){if(document.getElementById(this._lastBlackElementId)){document.getElementById(this._lastBlackElementId).innerHTML=this.renderMoveText(this._moveNodes[plyCount],true).html;
}this._displaySingleNodeTimestamp(plyCount)}else{this._buildSingleNode(plyCount)}if(document.getElementById(this._lastBlackElementId))myEvent.observe(document.getElementById(this._lastBlackElementId),"click",chessBoardEngine._moveToPly);
}}},saveMoveList:function(){this._tempMoveList.length=0;this._tempCurrentStateNode=this._currentStateNode;var moveNode;for(var n=0;n<this._moveNodes.length;n++){
moveNode=this._moveNodes[n];this._tempMoveList[n]={id:moveNode.id,fen:moveNode.fen,moveText:moveNode.moveText,moveTextTranslated:moveNode.moveTextTranslated,
comment:moveNode.comment,HTMLComment:moveNode.HTMLComment,moveClass:moveNode.moveClass,alternates:[],fromAreaId:moveNode.fromAreaId,
toAreaId:moveNode.toAreaId,additionalInfo:moveNode.additionalInfo,timestamp:moveNode.timestamp,timeDelta:moveNode.timeDelta,showNumber:moveNode.showNumber,
result:moveNode.result}}},_doRestore:function(){var doRestore=false;var is960=false;if(this.rootName){var board=_findRelated(this.rootName);
if(board&&board._variant===Variants.chess960){is960=true}}for(var n=0;n<this._tempMoveList.length;n++){if(!this._moveNodes[n]){doRestore=true;
break}var curMoveNode=this._moveNodes[n];var curTempNode=this._tempMoveList[n];if(curMoveNode.fen!==curTempNode.fen||curMoveNode.moveText!==curTempNode.moveText||curMoveNode.fromAreaId!==curTempNode.fromAreaId||curMoveNode.toAreaId!==curTempNode.toAreaId||curMoveNode.additionalInfo!==curTempNode.additionalInfo){
if(is960){if(curMoveNode.fen.split(" ")[0]!==curTempNode.fen.split(" ")[0]){doRestore=true;break}}doRestore=true;break}}return doRestore;
},restoreMoveList:function(){var doRestore=this._doRestore();if(doRestore){this._moveNodes.length=0;for(var n=0;n<this._tempMoveList.length;n++){
var curTempNode=this._tempMoveList[n];this._moveNodes[n]={id:curTempNode.id,fen:curTempNode.fen,moveText:curTempNode.moveText,moveTextTranslated:curTempNode.moveTextTranslated,
comment:curTempNode.comment,HTMLComment:curTempNode.HTMLComment,moveClass:curTempNode.moveClass,alternates:[],fromAreaId:curTempNode.fromAreaId,
toAreaId:curTempNode.toAreaId,additionalInfo:curTempNode.additionalInfo,timestamp:curTempNode.timestamp,timeDelta:curTempNode.timeDelta,
showNumber:curTempNode.showNumber,result:curTempNode.result}}this.__refresh()}this.setStartingPosition(this._moveNodes[0].fen);this._currentStateNode=this._tempCurrentStateNode;
},toggleCurrentStateButton:function(show){if(this._currentStateButton){var currentStateButton=document.getElementById(this._currentStateButton);
if(currentStateButton){if(typeof show!=="boolean"){show=this._doRestore()}if(show){currentStateButton.style.display=""}else{currentStateButton.style.display="none";
}}}},goToCurrentState:function(){if(this.playingMoves){this.playPause()}if(this._tempMoveList.length){this.restoreMoveList()}this.selectNode(this._currentStateNode);
},selectNode:function(ndx,doNotScroll){if(ndx>=0&&ndx<this._currentAlternateLine._moveNodes.length){var curElem=document.getElementById(this._moveListStylePrefix+"_"+this._currentAlternateLine._moveNodes[this._selectedNode].id);
if(curElem){curElem.parentNode.classList.remove("mhl")}this._selectedNode=Number(ndx);curElem=document.getElementById(this._moveListStylePrefix+"_"+this._currentAlternateLine._moveNodes[this._selectedNode].id);
if(curElem&&curElem.firstChild){curElem.parentNode.classList.add("mhl")}if(this._visible&&!doNotScroll){this.updateScrolling()}this._updateCommentBox();
this._updateScoreBox();this._updateLinesBox();this._updateControlButtons();this._onMoveClickedCallback(this,this.id,this._selectedNode);
this.toggleCurrentStateButton()}},highlightNode:function(lineNum,nodeNum){var nodeElement=null;var curElem=null;if(this._highlightedNode){
this.unHighlightNode()}var alternateLine=this.searchAlternateLine(lineNum);if(alternateLine&&alternateLine._moveNodes[nodeNum]){curElem=document.getElementById(this._moveListStylePrefix+"_"+alternateLine._moveNodes[nodeNum].id);
if(curElem&&curElem.firstChild){nodeElement=curElem.parentNode}if(nodeElement){nodeElement.classList.add("mhl-highlight");this._highlightedNode=nodeElement;
}}},unHighlightNode:function(){if(this._highlightedNode){this._highlightedNode.classList.remove("mhl-highlight");this._highlightedNode=null;
}},_updateCommentBox:function(){if(this._commentBox){var curComment=this._currentAlternateLine._moveNodes[this._selectedNode].comment;
var moveText=this._currentAlternateLine._moveNodes[this._selectedNode].moveText;var glyph=this._currentAlternateLine._moveNodes[this._selectedNode].glyph;
var comment=curComment;if(this._selectedNode===1&&this._currentAlternateLine!==this){var commentBefore=this._currentAlternateLine._moveNodes[0].comment;
if(commentBefore){comment=commentBefore+" [<b>"+moveText+"</b>] "+comment}}if(glyph&&glyph>6){var glyphText=this.getSpecialGlyphAsText(glyph);
if(comment)comment="("+glyphText+") "+comment;else comment=glyphText}this._commentBox.innerHTML=comment}},_updateScoreBox:function(){
if(this._scoreBox){var curScore=this._currentAlternateLine._moveNodes[this._selectedNode].score;if(typeof curScore!=="string")curScore="";
if(this._currentAlternateLine===this&&this._selectedNode===0)curScore="";this._scoreBox.innerHTML=curScore}},_updateLinesBox:function(){
var n,curLine;if(this._aLinesBox){var btnsTemplate="";if(this._currentAlternateLine!==this)btnsTemplate+='<input type="button" value="Main Line ^" id="'+this.rootName+'_goToMainLine" /> ';
if(this._currentAlternateLine._moveNodes[this._selectedNode].alternates.length){btnsTemplate+='<input type="button" value="Main Line" id="'+this.rootName+'_goToNextMove" /> ';
for(n=0;n<this._currentAlternateLine._moveNodes[this._selectedNode].alternates.length;n++){curLine=this._currentAlternateLine._moveNodes[this._selectedNode].alternates[n];
var lineNumber=curLine.startsWithBlack?curLine._firstMoveNumber+"... ":curLine._firstMoveNumber+". ";btnsTemplate+='<input type="button" value="'+lineNumber+curLine._moveNodes[1].moveText+'" id="'+this.rootName+"_line_"+curLine.id+'" /> ';
}}this._aLinesBox.innerHTML=btnsTemplate;if(this._currentAlternateLine!==this){document.getElementById(this.rootName+"_goToMainLine").onclick=chessBoardEngine._jumpToMainLine;
if(!myEvent.findRelated(this.rootName+"_goToMainLine"))myEvent.registerRelated(this.rootName+"_goToMainLine",this.rootName)}if(this._currentAlternateLine._moveNodes[this._selectedNode].alternates.length){
document.getElementById(this.rootName+"_goToNextMove").onclick=chessBoardEngine._moveFordward1;if(!myEvent.findRelated(this.rootName+"_goToNextMove"))myEvent.registerRelated(this.rootName+"_goToNextMove",this.rootName);
for(n=0;n<this._currentAlternateLine._moveNodes[this._selectedNode].alternates.length;n++){curLine=this._currentAlternateLine._moveNodes[this._selectedNode].alternates[n];
document.getElementById(this.rootName+"_line_"+curLine.id).onclick=chessBoardEngine._jumpToAlternateLine;if(!myEvent.findRelated(this.rootName+"_line_"+curLine.id))myEvent.registerRelated(this.rootName+"_line_"+curLine.id,this.rootName);
}}}},_updateControlButtons:function(){if(!this._playBackwardButtonSwap||!this._backwardButtonBeginElement||!this._playPauseButtonElement){
return}if(this._currentAlternateLine===this&&this._selectedNode===this._moveNodes.length-1){this._backwardButtonBeginElement.style.display="block";
this._playPauseButtonElement.style.display="none"}else{this._backwardButtonBeginElement.style.display="none";this._playPauseButtonElement.style.display="block";
}},createAlternateLine:function(parent,atNode){var newLine;if(typeof atNode!=="number"){atNode=parent._moveNodes.length-1}newLine=new AlternateMoveList(this,parent,this._stripCommentsInMoveList,atNode);
parent._moveNodes[atNode].alternates.push(newLine);return newLine},setCurrentAlternateLine:function(ptr){if(this._currentAlternateLine._moveNodes[this._selectedNode]){
var curNode=document.getElementById(this._moveListStylePrefix+"_"+this._currentAlternateLine._moveNodes[this._selectedNode].id);if(curNode){
curNode.parentNode.classList.remove("mhl")}}this._selectedNode=0;this._currentAlternateLine=ptr},insertAlternateLine:function(moveNodes,parent,atNode){
var chessBoard=_findRelated(this.rootName);var alternateLine=null;var resetPosition;var lineToUse;if(!chessBoard||typeof moveNodes!=="object"||!moveNodes.length){
return false}if(parent._moveNodes.length===1){lineToUse=this._currentAlternateLine}else if(atNode+1===parent._moveNodes.length){if(parent._parentLine){
lineToUse=this._currentAlternateLine}else{resetPosition=true;moveNodes.unshift({fromAreaId:parent._moveNodes[atNode].fromAreaId,toAreaId:parent._moveNodes[atNode].toAreaId,
additionalInfo:parent._moveNodes[atNode].additionalInfo,HTMLComment:moveNodes[0].HTMLComment,comment:moveNodes[0].comment});moveNodes[1].HTMLComment="";
moveNodes[1].comment="";this.selectNode(atNode-1);useFen(chessBoard.gameSetup,this.getSelectedFen());alternateLine=this.createAlternateLine(parent,atNode);
}}else{alternateLine=this.createAlternateLine(parent,atNode+1)}if(!lineToUse){lineToUse=alternateLine}var gameRules=chessBoard.gameRules;
if(!gameRules){gameRules=new GameRules.ChessEditor}for(var i=0;i<moveNodes.length;i++){lineToUse.addNode(chessBoard.gameSetup,gameRules,{
fromAreaId:moveNodes[i].fromAreaId,toAreaId:moveNodes[i].toAreaId,additionalInfo:moveNodes[i].additionalInfo,comment:moveNodes[i].comment,
htmlComment:moveNodes[i].HTMLComment,moveClass:moveNodes[i].moveClass});if(moveNodes[i].alternates&&moveNodes[i].alternates.length){
moveNodes[i].alternates.forEach(function oneach(line){line._parentLine=lineToUse;line._atNode=lineToUse._moveNodes.length-1});lineToUse._moveNodes[lineToUse._moveNodes.length-1].alternates=moveNodes[i].alternates;
}lineToUse._moveNodes[lineToUse._moveNodes.length-1].glyph=moveNodes[i].glyph;lineToUse._moveNodes[lineToUse._moveNodes.length-1].evalGlyph=moveNodes[i].evalGlyph;
}if(resetPosition){this.selectNode(atNode);useFen(chessBoard.gameSetup,this.getSelectedFen())}return lineToUse},removeAlternateLines:function(parent,atNode){
if(parent._moveNodes[atNode])parent._moveNodes[atNode].alternates=[]},promoteVariation:function(currentLine,chessboard){var n,b,curNode,fromPiece,queening;
if(typeof chessboard.freeze==="function")chessboard.freeze();while(currentLine._parentLine){var curLineId=currentLine.id;var parentLine=currentLine._parentLine;
var tmpNodes=[];this.setCurrentAlternateLine(parentLine);this.selectNode(currentLine._atNode-1);for(n=1;n<currentLine._moveNodes.length;n++){
curNode=currentLine._moveNodes[n];tmpNodes[n-1]={moveText:curNode.moveText,moveTextTranslated:curNode.moveTextTranslated,comment:curNode.comment,
HTMLComment:curNode.HTMLComment,moveClass:curNode.moveClass,alternates:curNode.alternates,fromAreaId:curNode.fromAreaId,toAreaId:curNode.toAreaId,
fen:curNode.fen,glyph:curNode.glyph,additionalInfo:curNode.additionalInfo}}currentLine._moveNodes.length=1;for(var a=0;a<parentLine._moveNodes[currentLine._atNode].alternates.length;a++){
if(parentLine._moveNodes[currentLine._atNode].alternates[a].id===curLineId)parentLine._moveNodes[currentLine._atNode].alternates.splice(a,1);
}chessboard.gameRules.useFen(chessboard.gameSetup,this.getSelectedFen());for(n=currentLine._atNode;n<parentLine._moveNodes.length;n++){
curNode=parentLine._moveNodes[n];fromPiece=chessboard.gameSetup.pieces[chessboard.gameSetup.areas[curNode.fromAreaId].pieces[0]];queening=null;
if(fromPiece.type==="p"&&(Number(curNode.toAreaId.substr(1,1))===1||Number(curNode.toAreaId.substr(1,1))===8))queening="q";if(curNode.additionalInfo)queening=curNode.additionalInfo;
currentLine.addNode(chessboard.gameSetup,chessboard.gameRules,{fromAreaId:curNode.fromAreaId,toAreaId:curNode.toAreaId,additionalInfo:queening,
comment:curNode.comment,HTMLComment:curNode.HTMLComment,moveClass:curNode.moveClass,pgnText:curNode.moveText,timeInfo:curNode.timeInfo
});if(curNode.glyph)currentLine._moveNodes[currentLine._moveNodes.length-1].glyph=curNode.glyph;currentLine._moveNodes[currentLine._moveNodes.length-1].alternates=curNode.alternates;
for(b=0;b<currentLine._moveNodes[currentLine._moveNodes.length-1].alternates.length;b++){currentLine._moveNodes[currentLine._moveNodes.length-1].alternates[b]._atNode=n-currentLine._atNode+1;
currentLine._moveNodes[currentLine._moveNodes.length-1].alternates[b]._parentLine=currentLine}if(queening){currentLine._moveNodes[currentLine._moveNodes.length-1].fen=curNode.fen;
chessboard.gameRules.useFen(chessboard.gameSetup,curNode.fen)}}parentLine._moveNodes.length=currentLine._atNode;chessboard.gameRules.useFen(chessboard.gameSetup,parentLine._moveNodes[parentLine._moveNodes.length-1].fen);
for(n=0;n<tmpNodes.length;n++){curNode=tmpNodes[n];fromPiece=chessboard.gameSetup.pieces[chessboard.gameSetup.areas[curNode.fromAreaId].pieces[0]];
queening=null;if(fromPiece.type==="p"&&(Number(curNode.toAreaId.substr(1,1))===1||Number(curNode.toAreaId.substr(1,1))===8))queening="q";
if(curNode.additionalInfo)queening=curNode.additionalInfo;parentLine.addNode(chessboard.gameSetup,chessboard.gameRules,{fromAreaId:curNode.fromAreaId,
toAreaId:curNode.toAreaId,additionalInfo:queening,comment:curNode.comment,HTMLComment:curNode.HTMLComment,moveClass:curNode.moveClass,
pgnText:curNode.moveText,timeInfo:curNode.timeInfo});if(curNode.glyph)parentLine._moveNodes[parentLine._moveNodes.length-1].glyph=curNode.glyph;
parentLine._moveNodes[parentLine._moveNodes.length-1].alternates=curNode.alternates;for(b=0;b<parentLine._moveNodes[parentLine._moveNodes.length-1].alternates.length;b++){
parentLine._moveNodes[parentLine._moveNodes.length-1].alternates[b]._atNode=n+currentLine._atNode;parentLine._moveNodes[parentLine._moveNodes.length-1].alternates[b]._parentLine=parentLine;
}if(queening){parentLine._moveNodes[parentLine._moveNodes.length-1].fen=curNode.fen;chessboard.gameRules.useFen(chessboard.gameSetup,curNode.fen);
}}parentLine._moveNodes[currentLine._atNode].alternates.push(currentLine);currentLine=currentLine._parentLine}this._clearRender();
this.__refresh();chessboard.gameRules.useFen(chessboard.gameSetup,this.getSelectedFen());if(chessboard.premoveGameSetup)chessboard.gameRules.useFen(chessboard.premoveGameSetup,this.getSelectedFen());
if(typeof chessboard.unfreeze==="function")chessboard.unfreeze()},updateScrolling:function(){var halfWay;if(this._verticalStyle){
if(this._selectedNode===0){this._scrollableElement.scrollTop=0}else{var lineHeight=28;halfWay=Math.floor(this._scrollableElement.offsetHeight/lineHeight);
if(halfWay%2)halfWay++;var scrollCount=this._selectedNode-halfWay;if(scrollCount<0)scrollCount=0;this._scrollableElement.scrollTop=this._selectedNode<=halfWay+1?0:scrollCount/this._moveNodes.length*this._scrollableElement.scrollHeight;
}}else{var curNode=document.getElementById(this._moveListStylePrefix+"_"+this._currentAlternateLine._moveNodes[this._selectedNode].id);
if(curNode){halfWay=Math.floor(this._scrollableElement.offsetHeight/2);var nodeTop=Number(curNode.offsetTop)+Number(curNode.offsetHeight);
this._scrollableElement.scrollTop=nodeTop<=halfWay?0:nodeTop-halfWay}else if(this._selectedNode===0){this._scrollableElement.scrollTop=0;
}}},getSelectedNode:function(){return this._currentAlternateLine._moveNodes[this._selectedNode]},getSelectedFen:function(){return this._currentAlternateLine._moveNodes[this._selectedNode].fen;
},_moveForwardBackward:function(action,ply,aLine,animationSpeed){var obj=_findRelated(this.rootName);var calledAnimation=false;var skippingDuplicateMove;
var curNode;var from;var to;var animOptions;var castlingMove;if(obj){if(obj.promotionWindowActive)return;if(obj._moveMade&&!obj._liveChessBoard){
obj._cancelMove();return}if(obj._premoves){if(obj._premoves.length&&obj._clearPremoves)obj._clearPremoves()}if(typeof obj._unmarkPreviousMoveHints==="function"){
obj._unmarkPreviousMoveHints();obj._unmarkClickedPiece();obj._clickedPieceElement=null}if(obj.rightClickMarkSquare||obj.rightClickDragPoints){
obj.clearMarkedArrows()}if(obj._openAnalysis&&action!=="forward1"&&action!=="backward1"){return}}this._lastMoveInformation.push(null);
if(action==="forward1"){if(this._selectedNode>this._currentAlternateLine._moveNodes.length-1){return}if(this._currentAlternateLine===this&&this["endNode"]&&this._selectedNode===this["endNode"]){
return}if(this._selectedNode===this._currentAlternateLine._moveNodes.length-1){curNode=this._currentAlternateLine._moveNodes[this._selectedNode];
var altLines=this.getNextMoves(true);var jumpTo=0;if(altLines&&curNode&&curNode.fen&&altLines[0].fen){if(altLines.length>1&&curNode.fen===altLines[0].fen){
jumpTo=1}if(altLines[jumpTo].lineID!==this._currentAlternateLine.id){this.setCurrentAlternateLine(this.searchAlternateLine(altLines[jumpTo].lineID));
this.selectNode(1)}}else{return}}this.selectNode(this._selectedNode+1);this._lastMoveInformation[this._lastMoveInformation.length-1]=this._currentAlternateLine._moveNodes[this._selectedNode];
if(this._moveAnimation&&obj&&Animation.canAnimate()){curNode=this._currentAlternateLine._moveNodes[this._selectedNode];if(curNode.fromAreaId!==Variants.DROP_MOVE_FROM){
from=curNode.animationInfo?curNode.animationInfo.moveFrom:curNode.fromAreaId;to=curNode.animationInfo?curNode.animationInfo.moveTo:curNode.toAreaId;
animOptions={};var captureMove=this.isCaptureMove(this._currentAlternateLine,this._selectedNode);if(captureMove){animOptions.capture=captureMove;
}castlingMove=this.isCastlingMove(this._currentAlternateLine,this._selectedNode);if(castlingMove){animOptions.castling=castlingMove;
}var kingInCheck=this.isKingInCheck(this._currentAlternateLine,this._selectedNode);if(kingInCheck){animOptions.kingInCheck=kingInCheck;
}if(animationSpeed){animOptions.animationSpeed=animationSpeed}obj.animateMove(from,to,animOptions);calledAnimation=true}}}else if(action==="forward10"){
if(this._currentAlternateLine===this&&this["endNode"]&&this._selectedNode<=this["endNode"]&&this._selectedNode+10>=this["endNode"]){
this.selectNode(this["endNode"])}else{if(this._selectedNode<=this._currentAlternateLine._moveNodes.length-11)this.selectNode(this._selectedNode+10);else this.selectNode(this._currentAlternateLine._moveNodes.length-1);
}}else if(action==="forwardEnd"){if(this._currentAlternateLine===this&&this["endNode"]&&this._selectedNode<=this["endNode"])this.selectNode(this["endNode"]);else this.selectNode(this._currentAlternateLine._moveNodes.length-1);
}else if(action==="backward1"){if(this._currentAlternateLine===this&&this["beginNode"]&&this._selectedNode===this["beginNode"])return;
this._lastMoveInformation[this._lastMoveInformation.length-1]=this._currentAlternateLine._moveNodes[this._selectedNode];if(this._moveAnimation&&obj&&Animation.canAnimate()){
curNode=this._currentAlternateLine._moveNodes[this._selectedNode];if(curNode.fromAreaId&&!curNode.result&&curNode.fromAreaId!==Variants.DROP_MOVE_FROM){
from=curNode.animationInfo?curNode.animationInfo.moveFrom:curNode.fromAreaId;to=curNode.animationInfo?curNode.animationInfo.moveTo:curNode.toAreaId;
animOptions={};castlingMove=this.isCastlingMove(this._currentAlternateLine,this._selectedNode);if(castlingMove){animOptions.castling=castlingMove;
animOptions.castlingUndo=true}if(animationSpeed){animOptions.animationSpeed=animationSpeed}obj.animateMove(to,from,animOptions);calledAnimation=true;
}}skippingDuplicateMove=this._currentAlternateLine._parentLine&&this._selectedNode===2&&this._currentAlternateLine._parentLine._moveNodes[this._currentAlternateLine._atNode].moveText===this._currentAlternateLine._moveNodes[1].moveText;
if(this._selectedNode===1||skippingDuplicateMove){if(this._currentAlternateLine._parentLine){var atNode=this._currentAlternateLine._atNode;
this.setCurrentAlternateLine(this._currentAlternateLine._parentLine);this.selectNode(atNode)}else{if(this._selectedNode===0)return;
}}if(!skippingDuplicateMove){this.selectNode(this._selectedNode-1)}}else if(action==="backward10"){if(this._currentAlternateLine===this&&this["beginNode"]&&this._selectedNode>=this["beginNode"]&&this._selectedNode-10<=this["beginNode"]){
this.selectNode(this["beginNode"])}else{if(this._selectedNode>=10)this.selectNode(this._selectedNode-10);else if(this._currentAlternateLine._parentLine)this.selectNode(1);else this.selectNode(0);
}}else if(action==="backwardBegin"){if(this._currentAlternateLine===this&&this["beginNode"]&&this._selectedNode>=this["beginNode"]){
this.selectNode(this["beginNode"])}else{if(this._currentAlternateLine._parentLine){if(this._selectedNode===1){this.setCurrentAlternateLine(this._currentAlternateLine._parentLine);
this.selectNode(this._currentAlternateLine._parentLine?1:0)}else{this.selectNode(1)}}else{this.selectNode(0)}}}else if(action==="currentState"){
this.setCurrentAlternateLine(this);this.goToCurrentState()}else if(action==="toPly"){if(typeof aLine==="undefined"){aLine="0"}if(aLine!==this._currentAlternateLine.id){
this.setCurrentAlternateLine(this.searchAlternateLine(aLine))}this.selectNode(Number(ply))}else{return}if(obj){obj.updateFromMove(this.getSelectedNode());
if(!calledAnimation){obj.cancelAnimatingMoves();var lm=this._lastMoveInformation.pop();obj.refresh(lm);if(obj._afterMakeEncodedMove)obj._afterMakeEncodedMove();else if(obj._markSquares)obj._markSquares();
}}},enable:function(dontChangeStyle){this._enabled=true;if(!dontChangeStyle){if(this._forwardButton1)document.getElementById(this._forwardButton1).style.display="";
if(this._forwardButton10)document.getElementById(this._forwardButton10).style.display="";if(this._forwardButtonEnd)document.getElementById(this._forwardButtonEnd).style.display="";
if(this._backwardButton1)document.getElementById(this._backwardButton1).style.display="";if(this._backwardButton10)document.getElementById(this._backwardButton10).style.display="";
if(this._backwardButtonBegin)document.getElementById(this._backwardButtonBegin).style.display="";if(this._currentStateButton)document.getElementById(this._currentStateButton).style.display="";
if(this._resetStateButton)document.getElementById(this._resetStateButton).style.display=""}},disable:function(dontChangeStyle){this._enabled=false;
if(!dontChangeStyle){if(this._forwardButton1)document.getElementById(this._forwardButton1).style.display="none";if(this._forwardButton10)document.getElementById(this._forwardButton10).style.display="none";
if(this._forwardButtonEnd)document.getElementById(this._forwardButtonEnd).style.display="none";if(this._backwardButton1)document.getElementById(this._backwardButton1).style.display="none";
if(this._backwardButton10)document.getElementById(this._backwardButton10).style.display="none";if(this._backwardButtonBegin)document.getElementById(this._backwardButtonBegin).style.display="none";
if(this._currentStateButton)document.getElementById(this._currentStateButton).style.display="none";if(this._resetStateButton)document.getElementById(this._resetStateButton).style.display="none";
}},playPause:function(intervalTime,direction,updatePlayButton,animationSpeed,playButtonElement){var chessBoard=_findRelated(this.rootName);
this.playingIntervalTime=intervalTime=intervalTime||650;this.playingDirection=direction=direction||"forward";this.playingAnimationSpeed=animationSpeed;
updatePlayButton=updatePlayButton==undefined?true:updatePlayButton;this._curentPlayButtonElement=playButtonElement||this._playPauseButtonElement||this._curentPlayButtonElement;
if(this.playingMoves){this.playingMoves=false;if(updatePlayButton&&this._curentPlayButtonElement){if(this._withinDiagram){this._curentPlayButtonElement.innerHTML=this.playButtonText;
}else{this._curentPlayButtonElement.value=this.playButtonText;if(this._curentPlayButtonElement.children[0]){this._curentPlayButtonElement.children[0].className="icon-play";
}}}if(this.playIntervalId){clearInterval(this.playIntervalId);this.playIntervalId=0}if(this.playTimeoutId){clearTimeout(this.playTimeoutId);
this.playTimeoutId=0}}else{this.playingMoves=true;if(this._curentPlayButtonElement){if(this._withinDiagram){this.playButtonText=this._curentPlayButtonElement.innerHTML;
}else{this.playButtonText=this._curentPlayButtonElement.value;if(this._curentPlayButtonElement.children[0]){this._curentPlayButtonElement.children[0].className="icon-play";
}}if(updatePlayButton){if(this._withinDiagram){this._curentPlayButtonElement.innerHTML="K"}else{this._curentPlayButtonElement.value="||";
if(this._curentPlayButtonElement.children[0]){this._curentPlayButtonElement.children[0].className="icon-pause"}}}}if(direction==="forward"){
if(this._currentAlternateLine._moveNodes.length-1===this._selectedNode||this._currentAlternateLine===this&&this["endNode"]&&this._selectedNode===this["endNode"]){
this._moveForwardBackward("backwardBegin")}else{chessBoardEngine._playNextMove.call(this,animationSpeed)}}else{if(!this._selectedNode||this._currentAlternateLine===this&&this["beginNode"]&&this._selectedNode===this["beginNode"]){
this._moveForwardBackward("forwardEnd")}else{chessBoardEngine._playPreviousMove.call(this,animationSpeed)}}this._doPlay()}if(chessBoard){
chessBoard.fireEvent("onMoveListPlay",{playingMoves:this.playingMoves})}},setPlayingMovesRealtime:function(playRealtime){this.playingMovesRealtime=playRealtime;
if(this.playingMoves){this._doPlay()}},isRealtimePlay:function(){if(this.playingMovesRealtime&&this._currentAlternateLine._moveNodes.length>1&&typeof this._currentAlternateLine._moveNodes[1].timeDelta!==undefined){
return true}else{return false}},_doPlay:function(isRecursive){var timeDelta=null;if(isRecursive){if(this.playingDirection==="forward"){
chessBoardEngine._playNextMove.call(this,this.playingAnimationSpeed)}else{chessBoardEngine._playPreviousMove.call(this,this.playingAnimationSpeed);
}}else{if(this.playIntervalId){clearInterval(this.playIntervalId);this.playIntervalId=0}if(this.playTimeoutId){clearTimeout(this.playTimeoutId);
this.playTimeoutId=0}}if(this.isRealtimePlay()){if(this.playingDirection==="forward"&&this._currentAlternateLine._moveNodes.length>this._selectedNode+1){
timeDelta=this._currentAlternateLine._moveNodes[this._selectedNode+1].timeDelta*100}else if(this.playingDirection==="backward"&&this._selectedNode-1>0){
timeDelta=this._currentAlternateLine._moveNodes[this._selectedNode-1].timeDelta*100}if(timeDelta!==null){this.playTimeoutId=setTimeout(this._doPlay.bind(this,true),timeDelta);
}}else if(!isRecursive){if(this.playingDirection==="forward"){this.playIntervalId=setInterval(chessBoardEngine._playNextMove.bind(this,this.playingAnimationSpeed),this.playingIntervalTime);
}else{this.playIntervalId=setInterval(chessBoardEngine._playPreviousMove.bind(this,this.playingAnimationSpeed),this.playingIntervalTime);
}}},isCaptureMove:function(alternateLine,nodeIndex){var moveNode=alternateLine._moveNodes[nodeIndex];if(moveNode.moveText&&moveNode.moveText.indexOf("x")!==-1){
return moveNode.toAreaId}return false},isCastlingMove:function(alternateLine,nodeIndex){var moveNode=alternateLine._moveNodes[nodeIndex];
var chessBoard=_findRelated(this.rootName);var area;var rank;var fromAreaId;var toAreaId;var i;if(!chessBoard){return false}var currentGameSetup=chessBoard.gameSetup.clone();
useFen(currentGameSetup,moveNode.fen);var previousGameSetup=currentGameSetup.clone();useFen(previousGameSetup,alternateLine._moveNodes[nodeIndex-1].fen);
if(moveNode.moveText==="O-O-O"||moveNode.moveText==="O-O-O+"||moveNode.moveText==="O-O-O#"){rank=moveNode.fromAreaId.substr(1,1);for(i=1;i<=8;i++){
area=String.fromCharCode(96+i)+rank;if(currentGameSetup.areas[area].pieces.length&&currentGameSetup.pieces[currentGameSetup.areas[area].pieces[0]].type==="r"){
toAreaId=area;break}}for(i=1;i<=8;i++){area=String.fromCharCode(96+i)+rank;if(previousGameSetup.areas[area].pieces.length&&previousGameSetup.pieces[previousGameSetup.areas[area].pieces[0]].type==="r"){
fromAreaId=area;break}}return{fromAreaId:fromAreaId,toAreaId:toAreaId}}else if(moveNode.moveText==="O-O"||moveNode.moveText==="O-O+"||moveNode.moveText==="O-O#"){
rank=moveNode.fromAreaId.substr(1,1);for(i=8;i>=1;i--){area=String.fromCharCode(96+i)+rank;if(currentGameSetup.areas[area].pieces.length&&currentGameSetup.pieces[currentGameSetup.areas[area].pieces[0]].type==="r"){
toAreaId=area;break}}for(i=8;i>=1;i--){area=String.fromCharCode(96+i)+rank;if(previousGameSetup.areas[area].pieces.length&&previousGameSetup.pieces[previousGameSetup.areas[area].pieces[0]].type==="r"){
fromAreaId=area;break}}return{fromAreaId:fromAreaId,toAreaId:toAreaId}}return false},isKingInCheck:function(alternateLine,nodeIndex){
var moveNode=alternateLine._moveNodes[nodeIndex];var chessBoard=_findRelated(this.rootName);if(!chessBoard){return false}var currentGameSetup=chessBoard.gameSetup.clone();
useFen(currentGameSetup,moveNode.fen);if(moveNode.moveText&&moveNode.moveText.indexOf("+")!==-1){for(var pieceid in currentGameSetup.pieces){
var piece=currentGameSetup.pieces[pieceid];if(typeof piece!=="function"){if(piece.type==="k"&&piece.color===currentGameSetup.flags["sm"])return piece.area;
}}}return false}})});ChessCom(function(globals){var myEvent=globals.myEvent;var Element=globals.ElementTools;var chessBoardEngine=globals.chessBoardEngine;
var dropDownMenuElement;var dropDownMenuDisplay=false;function getDropDownElement(){if(!dropDownMenuElement){dropDownMenuElement=document.createElement("ul");
dropDownMenuElement.style.display="none";dropDownMenuElement.classList.add("dropdown-menu");dropDownMenuElement.classList.add("context-menu");
document.body.appendChild(dropDownMenuElement)}return dropDownMenuElement}function showDropDownMenu(e){dropDownMenuDisplay=true;updateDropDownMenu(e);
}function hideDropDownMenu(e){dropDownMenuDisplay=false;updateDropDownMenu(e)}function updateDropDownMenu(e){var dropdown=getDropDownElement();
if(dropDownMenuDisplay){dropdown.style.display="block"}else{dropdown.style.display="none"}if(dropDownMenuDisplay){updateDropDownPosition(e);
var hideDropDownMenuHandler=function(e){hideDropDownMenu(e);document.documentElement.removeEventListener("click",hideDropDownMenuHandler);
};document.documentElement.addEventListener("click",hideDropDownMenuHandler)}}function updateDropDownPosition(e,dropdown){var dropdown=getDropDownElement();
var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;var position={top:e.pageY,left:e.pageX};var left=Math.floor(position.left);
var height=10;var style={position:"fixed",width:"auto",zIndex:99999};if(dropdown.offsetHeight&&position.top+height-scrollTop+dropdown.offsetHeight>window.innerHeight&&position.top-scrollTop>=dropdown.offsetHeight){
style.bottom=window.innerHeight-(position.top-scrollTop)+"px";style.top="auto"}else{style.top=position.top+height-scrollTop+"px";style.bottom="auto";
}if(dropdown.offsetWidth&&dropdown.offsetWidth+position.left>window.innerWidth){left=left-dropdown.offsetWidth}style.left=left+"px";
Object.keys(style).forEach(function(prop){dropdown.style[prop]=style[prop]})}chessBoardEngine._createMenu=function(event,menuItems){
function makeActionLink(item,index){var a=document.createElement("a");a.tabindex=-1;a.innerHTML=item.text;a.onclick=function(e){item.action(item.text,index,e);
if(typeof e.preventDefault==="function"){e.preventDefault()}};return a}var annotationArray=[];var dropdown=getDropDownElement();dropdown.innerHTML="";
menuItems.map(function(item,index){if(!item.isAnnotation){var li=document.createElement("li");var a=makeActionLink(item,index);li.appendChild(a);
dropdown.appendChild(li)}else{annotationArray.push(item)}});if(annotationArray.length>0){var hr=document.createElement("hr");dropdown.appendChild(hr);
var li=document.createElement("li");var count=0;annotationArray.map(function(item,index){var a=makeActionLink(item,index);a.classList.add("multiLineMenuItem");
if(item.title){a.title=item.title}if(count<=3){li.appendChild(a)}else{dropdown.appendChild(li);li=document.createElement("li");li.appendChild(a);
count=0}count++});dropdown.appendChild(li)}showDropDownMenu(event)};chessBoardEngine._onMoveListRightClick=function(e){var moveNodeElement=null;
var moveNodeLink=null;var menuItems;var el=e.target?e.target:e.srcElement;if(el.nodeType===3){el=el.parentNode}var chessBoard=null;
var currentTarget=el;var body=document.getElementsByTagName("body")[0];while(chessBoard==null){var targetBoardId=myEvent.findRelated(currentTarget.id);
chessBoard=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;if(chessBoard==null){currentTarget=currentTarget.parentNode;
if(currentTarget==body){return}}}var moveListControl=targetBoardId?chessBoard.moveListControl:null;if(!moveListControl||!moveListControl._enabled){
return}if(!chessBoard._customEventStacks.onMoveRightClick){return}var lineNum=null;var moveNum=null;if(el&&el.id){match=el.id.match(/moveid_([^_]+)_([^_]+)(?:_([^_]+))?/);
if(match&&match[1]&&match[2]&&match[3]!=="comment"&&match[3]!=="firstcomment"&&match[3]!=="firsthtmlcomment"&&match[3]!=="htmlcomment"&&match[3]!=="hiddenMoveBuffer"){
lineNum=match[1];moveNum=Number(match[2]);var moveListNode=null;var line=moveListControl.searchAlternateLine(lineNum);if(line){moveListNode=line._moveNodes[moveNum];
}}}if(!moveListNode){return}e.moveListNodeId=el.id;e.moveListLineId=lineNum;e.moveListPly=moveNum;e.moveListNode=moveListNode;if(moveListControl.menuMaker){
menuItems=moveListControl.menuMaker(e)}if(menuItems&&menuItems.length){moveListControl.highlightNode(lineNum,moveNum);var unhighlightMoveList=function(e){
this.unHighlightNode();document.documentElement.removeEventListener("click",unhighlightMoveList)}.bind(moveListControl);document.documentElement.addEventListener("click",unhighlightMoveList);
chessBoardEngine._createMenu(e,menuItems)}chessBoard.fireEvent("onMoveRightClick",e);e.returnValue=false;if(typeof e.preventDefault==="function"){
e.preventDefault()}};chessBoardEngine._onMoveListContextMenu=function(event){var el=event.target?event.target:event.srcElement;if(el.nodeType===3){
el=el.parentNode}if(el&&el.id){match=el.id.match(/moveid_([^_]+)_([^_]+)(?:_([^_]+))?/);if(match&&match[1]&&match[2]&&match[3]!=="comment"&&match[3]!=="firstcomment"&&match[3]!=="firsthtmlcomment"&&match[3]!=="htmlcomment"){
event.returnValue=false;if(typeof event.preventDefault==="function"){event.preventDefault()}event.cancelBubble=true;if(typeof event.stopPropagation==="function"){
event.stopPropagation()}}}};chessBoardEngine._moveFordward1=function(e){var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}var currentTarget=target;var boardObj=null;var body=document.getElementsByTagName("body")[0];while(boardObj==null){
var targetMoveListId=myEvent.findRelated(currentTarget.id);var targetBoardId=myEvent.findRelated(targetMoveListId);boardObj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;
if(boardObj==null){currentTarget=currentTarget.parentNode;if(currentTarget==body){e.preventDefault();return}}}var obj=boardObj?boardObj.moveListControl:null;
if(!obj||!obj._enabled){e.preventDefault();return}if(obj.playingMoves){chessBoardEngine._playPause(e)}var prevSelected=obj._selectedNode;
obj._moveForwardBackward("forward1");e["command"]="forward1";e["prevSelectedNode"]=prevSelected;boardObj.fireEvent("onMoveForwardBackward",e);
e.preventDefault();return};chessBoardEngine._moveFordward10=function(e){var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}var currentTarget=target;var boardObj=null;var body=document.getElementsByTagName("body")[0];while(boardObj==null){
var targetMoveListId=myEvent.findRelated(currentTarget.id);var targetBoardId=myEvent.findRelated(targetMoveListId);boardObj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;
if(boardObj==null){currentTarget=currentTarget.parentNode;if(currentTarget==body){e.preventDefault();return}}}var obj=boardObj?boardObj.moveListControl:null;
if(!obj||!obj._enabled||boardObj._openAnalysis){e.preventDefault();return}if(obj.playingMoves){chessBoardEngine._playPause(e)}var prevSelected=obj._selectedNode;
obj._moveForwardBackward("forward10");e["command"]="forward10";e["prevSelectedNode"]=prevSelected;boardObj.fireEvent("onMoveForwardBackward",e);
e.preventDefault()};chessBoardEngine._moveForwardEnd=function(e){var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}var currentTarget=target;var boardObj=null;var body=document.getElementsByTagName("body")[0];while(boardObj==null){
var targetMoveListId=myEvent.findRelated(currentTarget.id);var targetBoardId=myEvent.findRelated(targetMoveListId);boardObj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;
if(boardObj==null){currentTarget=currentTarget.parentNode;if(currentTarget==body){e.preventDefault();return}}}var obj=boardObj?boardObj.moveListControl:null;
if(!obj||!obj._enabled||boardObj._openAnalysis){e.preventDefault();return}if(obj.playingMoves){chessBoardEngine._playPause(e)}var prevSelected=obj._selectedNode;
obj._moveForwardBackward("forwardEnd");e["command"]="forwardEnd";e["prevSelectedNode"]=prevSelected;boardObj.fireEvent("onMoveForwardBackward",e);
e.preventDefault()};chessBoardEngine._moveBackward1=function(e){var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}var currentTarget=target;var boardObj=null;var body=document.getElementsByTagName("body")[0];while(boardObj==null){
var targetMoveListId=myEvent.findRelated(currentTarget.id);var targetBoardId=myEvent.findRelated(targetMoveListId);boardObj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;
if(boardObj==null){currentTarget=currentTarget.parentNode;if(currentTarget==body){e.preventDefault();return}}}var obj=boardObj?boardObj.moveListControl:null;
if(!obj||!obj._enabled){e.preventDefault();return}if(obj.playingMoves){chessBoardEngine._playPause(e)}var prevSelected=obj._selectedNode;
obj._moveForwardBackward("backward1");e["command"]="backward1";e["prevSelectedNode"]=prevSelected;boardObj.fireEvent("onMoveForwardBackward",e);
e.preventDefault()};chessBoardEngine._moveBackward10=function(e){var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}var currentTarget=target;var boardObj=null;var body=document.getElementsByTagName("body")[0];while(boardObj==null){
var targetMoveListId=myEvent.findRelated(currentTarget.id);var targetBoardId=myEvent.findRelated(targetMoveListId);boardObj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;
if(boardObj==null){currentTarget=currentTarget.parentNode;if(currentTarget==body){e.preventDefault();return}}}var obj=boardObj?boardObj.moveListControl:null;
if(!obj||!obj._enabled||boardObj._openAnalysis){e.preventDefault();return}if(obj.playingMoves){chessBoardEngine._playPause(e)}var prevSelected=obj._selectedNode;
obj._moveForwardBackward("backward10");e["command"]="backward10";e["prevSelectedNode"]=prevSelected;boardObj.fireEvent("onMoveForwardBackward",e);
e.preventDefault()};chessBoardEngine._moveBackwardBegin=function(e){var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}var currentTarget=target;var boardObj=null;var body=document.getElementsByTagName("body")[0];while(boardObj==null){
var targetMoveListId=myEvent.findRelated(currentTarget.id);var targetBoardId=myEvent.findRelated(targetMoveListId);boardObj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;
if(boardObj==null){currentTarget=currentTarget.parentNode;if(currentTarget==body){e.preventDefault();return}}}var obj=boardObj?boardObj.moveListControl:null;
if(!obj||!obj._enabled||boardObj._openAnalysis){e.preventDefault();return}if(obj.playingMoves){chessBoardEngine._playPause(e)}var prevSelected=obj._selectedNode;
obj._moveForwardBackward("backwardBegin");e["command"]="backwardBegin";e["prevSelectedNode"]=prevSelected;boardObj.fireEvent("onMoveForwardBackward",e);
e.preventDefault()};chessBoardEngine._moveCurrentState=function(e){var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}if(!target.id){target=target.parentNode}var targetMoveListId=myEvent.findRelated(target.id);var targetBoardId=myEvent.findRelated(targetMoveListId);
var boardObj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;var obj=boardObj?boardObj.moveListControl:null;if(!obj||!obj._enabled){
e.preventDefault();return}if(obj.playingMoves){chessBoardEngine._playPause(e)}var prevSelected=obj._selectedNode;obj._moveForwardBackward("currentState");
e["command"]="currentState";e["prevSelectedNode"]=prevSelected;boardObj.fireEvent("onMoveForwardBackward",e);e.preventDefault()};chessBoardEngine._resetState=function(e){
var target=e.target?e.target:e.srcElement;if(target.nodeType==3){target=target.parentNode}var targetMoveListId=myEvent.findRelated(target.id);
var targetBoardId=myEvent.findRelated(targetMoveListId);var chessBoard=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;
if(chessBoard&&chessBoard._loadGame){chessBoard.moveListControl.__clear();chessBoard._loadGame();chessBoard.moveListControl.__refresh();
}};chessBoardEngine._moveToPly=function(e){var target=e.target?e.target:e.srcElement;if(target.nodeType==3){target=target.parentNode;
}if(target.nodeName=="SPAN"){target=target.parentNode}var moveListComponent=myEvent.findComponent(e);var targetBoardId=myEvent.findRelated(moveListComponent.id);
var boardObj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;var obj=moveListComponent.moveListControl;var plyParts=target.id.split("_");
var moveNumber=Number(plyParts[plyParts.length-1]);var alternateLine=plyParts[plyParts.length-2];if(!obj||!obj._enabled){e.preventDefault();
return}obj._moveForwardBackward("toPly",moveNumber,alternateLine);if(boardObj){e["command"]="toPly";e["ply"]=moveNumber;e["alternateLine"]=alternateLine;
boardObj.fireEvent("onMoveForwardBackward",e)}e.preventDefault();return};chessBoardEngine._jumpToMainLine=function(e){var target=e.target?e.target:e.srcElement;
if(target.nodeType==3){target=target.parentNode}var targetMoveListId=myEvent.findRelated(target.id);var targetBoardId=myEvent.findRelated(targetMoveListId);
var boardObj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;var obj=boardObj?boardObj.moveListControl:null;var parentId=obj._currentAlternateLine._parentLine.id;
if(!obj||!obj._enabled){e.preventDefault();return}obj._moveForwardBackward("toPly",obj._currentAlternateLine._atNode,parentId);if(boardObj){
e["command"]="toPly";e["ply"]=obj._currentAlternateLine._atNode;e["alternateLine"]=parentId;boardObj.fireEvent("onMoveForwardBackward",e);
}e.preventDefault();return};chessBoardEngine._jumpToAlternateLine=function(e){var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}var targetMoveListId=myEvent.findRelated(target.id);var targetBoardId=myEvent.findRelated(targetMoveListId);
var boardObj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;var obj=boardObj?boardObj.moveListControl:null;if(!obj||!obj._enabled){
e.preventDefault();return}var plyParts=target.id.split("_");var lineId=plyParts[plyParts.length-1];obj._moveForwardBackward("toPly",1,lineId);
if(boardObj){e["command"]="toPly";e["ply"]=1;e["alternateLine"]=lineId;boardObj.fireEvent("onMoveForwardBackward")}e.preventDefault();
return};chessBoardEngine._playPause=function(e){var target=e.target?e.target:e.srcElement;if(target.nodeType==3){target=target.parentNode;
}if(target.tagName.toLowerCase()==="i"){target=target.parentNode}var targetMoveListId=myEvent.findRelated(target.id);var targetBoardId=myEvent.findRelated(targetMoveListId);
var moveListControl=targetBoardId?document.getElementById(targetBoardId).chessBoard.moveListControl:null;if(!moveListControl||!moveListControl._enabled){
e.preventDefault();return}moveListControl.playPause()};chessBoardEngine._playNextMove=function(animationSpeed){if(this._currentAlternateLine._moveNodes.length-1>this._selectedNode&&!(this._currentAlternateLine==this&&this["endNode"]&&this._selectedNode==this["endNode"])){
this._moveForwardBackward("forward1",null,null,animationSpeed);var boardId=myEvent.findRelated(this.rootName);if(boardId){var boardElm=document.getElementById(boardId);
if(boardElm&&boardElm.chessBoard){boardElm.chessBoard.fireEvent("onMoveForwardBackward",{command:"playNext"})}}}else{this.playPause();
}};chessBoardEngine._playPreviousMove=function(animationSpeed){if(this._selectedNode&&!(this._currentAlternateLine==this&&this["beginNode"]&&this._selectedNode==this["beginNode"])){
this._moveForwardBackward("backward1",null,null,animationSpeed);var boardId=myEvent.findRelated(this.rootName);if(boardId){var boardElm=document.getElementById(boardId);
if(boardElm&&boardElm.chessBoard){boardElm.chessBoard.fireEvent("onMoveForwardBackward",{command:"playPrevious"})}}}else{this.playPause();
}};chessBoardEngine._onMoveForwardButtonClick=function(e){e.preventDefault()};chessBoardEngine._onMoveBackwardButtonClick=function(e){
e.preventDefault()};chessBoardEngine._onMoveForwardButtonDown=function(e){if(e.ctrlKey||e.metaKey){chessBoardEngine._moveForwardEnd.call(this,e);
}else{chessBoardEngine._moveFordward1.call(this,e);chessBoardEngine._onMoveButtonDown.call(this,e,"forward")}};chessBoardEngine._onMoveBackwardButtonDown=function(e){
if(e.ctrlKey||e.metaKey){chessBoardEngine._moveBackwardBegin.call(this,e)}else{chessBoardEngine._moveBackward1.call(this,e);chessBoardEngine._onMoveButtonDown.call(this,e,"backward");
}};chessBoardEngine._onMoveButtonDown=function(e,direction){button=this;if(button._autoPlayTimeoutId){clearTimeout(button._autoPlayTimeoutId);
}var target=e.target?e.target:e.srcElement;if(target.nodeType==3){target=target.parentNode}var chessBoard=null;var currentTarget=target;
var body=document.getElementsByTagName("body")[0];while(chessBoard==null){var targetMoveListId=myEvent.findRelated(currentTarget.id);
var targetBoardId=myEvent.findRelated(targetMoveListId);chessBoard=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;
if(chessBoard==null){currentTarget=currentTarget.parentNode;if(currentTarget==body){e.preventDefault();return}}}var moveListControl=targetBoardId?chessBoard.moveListControl:null;
if(!moveListControl||!moveListControl._enabled){return}button._chessBoard=chessBoard;button._moveListControl=moveListControl;if(button._moveListControl.playingMoves){
button._moveListControl.playPause()}button._autoPlayTimeoutId=setTimeout(function(){button._moveListControl.playPause(500,direction,false,.2);
button._autoPlayTimeoutId=setTimeout(function(){if(button._moveListControl.playingMoves){button._moveListControl.playPause()}button._moveListControl.playPause(150,direction,false,.1);
},1e3)},500);button._onMouseUp=chessBoardEngine._onMoveButtonUp.bind(button);myEvent.observe(document,"mouseup",button._onMouseUp);
};chessBoardEngine._onMoveButtonUp=function(e){var button=this;if(button._autoPlayTimeoutId){clearTimeout(button._autoPlayTimeoutId);
}if(button._moveListControl.playingMoves){button._moveListControl.playPause()}myEvent.stopObserving(document,"mouseup",button._onMouseUp);
};chessBoardEngine._onMoveListClick=function(e){var moveNodeElement=null;var moveNodeLink=null;var target=e.target?e.target:e.srcElement;
if(target.nodeType==3){target=target.parentNode}if(target.nodeName.toLowerCase()==="span"&&target.id&&target.id.indexOf("movelist_")===0){
for(var i=0;i<target.children.length;i++){if(Element.hasClassName(target.children[i],this._moveListItemClass)&&target.children[i].innerHTML!==""){
moveNodeLink=target.children[i];break}}if(!moveNodeLink){target=target.parentNode}}if(!moveNodeLink&&target.nodeName.toLowerCase()==="div"&&Element.hasClassName(target,"notationVertical")){
if(target.children.length>2){moveNodeElement=target.children[2];for(var i=0;i<moveNodeElement.children.length;i++){if(Element.hasClassName(moveNodeElement.children[i],this._moveListItemClass)&&moveNodeElement.children[i].innerHTML!==""){
moveNodeLink=moveNodeElement.children[i];break}}}if(!moveNodeLink&&target.children.length>1){moveNodeElement=target.children[1];for(var i=0;i<moveNodeElement.children.length;i++){
if(Element.hasClassName(moveNodeElement.children[i],this._moveListItemClass)&&moveNodeElement.children[i].innerHTML!==""){moveNodeLink=moveNodeElement.children[i];
break}}}}if(moveNodeLink){myEvent.fireEvent(moveNodeLink,"click")}if(this.playingMoves){this.playPause()}}});var saveAs=saveAs||function(e){
"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,n=function(){return e.URL||e.webkitURL||e;
},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t);
},a=e.webkitRequestFileSystem,c=e.requestFileSystem||a||e.mozRequestFileSystem,u=function(t){(e.setImmediate||e.setTimeout)(function(){
throw t},0)},f="application/octet-stream",s=0,d=500,l=function(t){var o=function(){"string"==typeof t?n().revokeObjectURL(t):t.remove();
};e.chrome?o():setTimeout(o,d)},v=function(e,t,n){t=[].concat(t);for(var o=t.length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{
r.call(e,n||e)}catch(i){u(i)}}},p=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{
type:e.type}):e},w=function(t,u,d){d||(t=p(t));var w,y,m,S=this,h=t.type,O=!1,R=function(){v(S,"writestart progress write writeend".split(" "));
},b=function(){if((O||!w)&&(w=n().createObjectURL(t)),y)y.location.href=w;else{var o=e.open(w,"_blank");void 0==o&&"undefined"!=typeof safari&&(e.location.href=w);
}S.readyState=S.DONE,R(),l(w)},g=function(e){return function(){return S.readyState!==S.DONE?e.apply(this,arguments):void 0}},E={create:!0,
exclusive:!1};return S.readyState=S.INIT,u||(u="download"),r?(w=n().createObjectURL(t),o.href=w,o.download=u,void setTimeout(function(){
i(o),R(),l(w),S.readyState=S.DONE})):(e.chrome&&h&&h!==f&&(m=t.slice||t.webkitSlice,t=m.call(t,0,t.size,f),O=!0),a&&"download"!==u&&(u+=".download"),
(h===f||a)&&(y=e),c?(s+=t.size,void c(e.TEMPORARY,s,g(function(e){e.root.getDirectory("saved",E,g(function(e){var n=function(){e.getFile(u,E,g(function(e){
e.createWriter(g(function(n){n.onwriteend=function(t){y.location.href=e.toURL(),S.readyState=S.DONE,v(S,"writeend",t),l(e)},n.onerror=function(){
var e=n.error;e.code!==e.ABORT_ERR&&b()},"writestart progress write abort".split(" ").forEach(function(e){n["on"+e]=S["on"+e]}),n.write(t),
S.abort=function(){n.abort(),S.readyState=S.DONE},S.readyState=S.WRITING}),b)}),b)};e.getFile(u,{create:!1},g(function(e){e.remove(),
n()}),g(function(e){e.code===e.NOT_FOUND_ERR?n():b()}))}),b)}),b)):void b())},y=w.prototype,m=function(e,t,n){return new w(e,t,n);
};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return n||(e=p(e)),navigator.msSaveOrOpenBlob(e,t||"download");
}:(y.abort=function(){var e=this;e.readyState=e.DONE,v(e,"abort")},y.readyState=y.INIT=0,y.WRITING=1,y.DONE=2,y.error=y.onwritestart=y.onprogress=y.onwrite=y.onabort=y.onerror=y.onwriteend=null,
m)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!=define.amd&&define([],function(){
return saveAs});ChessCom(function(globals){globals.SaveText=function SaveText(data,filename,mimetype){var blob;var is_safari=/Version\/[\d\.]+.*Safari/.test(window.navigator.userAgent);
try{if(is_safari){var form=document.createElement("form");var dataEl=document.createElement("textarea");var mimeEl=document.createElement("input");
var nameEl=document.createElement("input");form.method="post";form.action=Routing.generate("web_game_api_callback_download");form.target="_self";
dataEl.name="data";dataEl.value=data;form.appendChild(dataEl);mimeEl.name="mime";mimeEl.value=mimetype;form.appendChild(mimeEl);nameEl.name="filename";
nameEl.value=filename;form.appendChild(nameEl);document.body.appendChild(form);form.submit();document.body.removeChild(form)}else{
if(!mimetype){if(filename.slice(-4).toLowerCase()===".pgn"){mimetype="application/x-chess-pgn;charset=utf-8"}else{mimetype="text/plain;charset=utf-8";
}}blob=new Blob([data],{type:mimetype});saveAs(blob,filename||"download")}}catch(e){return false}return true}});ChessCom(function(globals){
if(globals.ShareMenuControl){return}var Element=globals.ElementTools;var ShareMenuControl=globals.ShareMenuControl=function(params){
params=params||{};if(typeof params.rootName=="string"){this.rootName=params.rootName;this.rootElement=document.getElementById(this.rootName);
}else{this.rootName=params.rootName.id;this.rootElement=params.rootName}if(typeof params.shareButton=="string"){this.shareButton=document.getElementById(params.shareButton);
}else if(params.shareButton){this.shareButton=params.shareButton}if(typeof params.container=="string"){this.container=document.getElementById(params.container);
}else{this.container=params.container}this._chessBoard=this.rootElement.chessBoard;this._setup=params.viewerSetup||null;this._diagramId=params.diagramId||null;
this._shareMenuLabels=params.shareMenuLabels||{};this._forcePgnDialog=params.forcePgnDialog?true:false;this._pgnData=params.pgnData?params.pgnData:"";
this._pgnDownloadType=params.pgnDownloadType||null;this._pgnDownloadId=params.pgnDownloadId||null;this._pgnDownloadExtra=params.pgnDownloadExtra||null;
this._pgnShowTimestamps=params.pgnShowTimestamps!==undefined?params.pgnShowTimestamps:true;this._pgnHasTimestamps=params.pgnHasTimestamps!==undefined?params.pgnHasTimestamps:true;
this._moveListControl=params.moveListControl;this._globalDialogDivId=this.rootName+"_ShareMenuGlobalDialog";this._globalDialogContentDivId=this.rootName+"_ShareMenuGlobalDialogContent";
this._globalDialogCloseButtonDivId=this.rootName+"_ShareMenuGlobalDialogCloseButton";this._globalDialogFooterBarDivId=this.rootName+"_ShareMenuGlobalDialogFooterBar";
this._globalDialogTabsId=this.rootName+"_ShareMenuGlobalDialogTabs";this._globalDialogShareButtonId=this.rootName+"_ShareMenuGlobalDialogShareButton";
this._globalDialogDownloadButtonId=this.rootName+"_ShareMenuGlobalDialogDownloadButton";this._facebookButtonId=this.rootName+"_ShareMenuFacebookButton";
this._twitterButtonId=this.rootName+"_ShareMenuTwitterButton";this._redditButtonId=this.rootName+"_ShareMenuRedditButton";this._shareExtraId=this.rootName+"_ShareMenuExtra";
this._shareExtraButtonId=this.rootName+"_ShareMenuExtraButton";this._googlePlusButtonId=this.rootName+"_ShareMenuGooglePlusButton";
this._linkedinButtonId=this.rootName+"_ShareMenuLinkedinButton";this._tumblrButtonId=this.rootName+"_ShareMenuTumblrButton";this._stumbleuponButtonId=this.rootName+"_ShareMenuStumbleuponButton";
this._mailButtonId=this.rootName+"_ShareMenuMailButton";this._pgnTimestampsTogglerId=this.rootName+"_ShareMenuPgnTimestampsTogglerId";
this._pgnContentTextareaId=this.rootName+"_ShareMenuPgnContentTextareaId";this._favoritesButtonId=this.rootName+"_ShareMenuFavoritesButton";
this._pgnFenButtonId=this.rootName+"_ShareMenuPgnFenButton";this._pgnDownloadButtonId=this.rootName+"_ShareMenuPgnDownloadButton";
this._embedButtonId=this.rootName+"_ShareMenuEmbedButton";this._shareUrlInputId=this.rootName+"_ShareMenuUrlInput";this._shareFenInputId=this.rootName+"_ShareMenuFenInput";
this._shareAnimatedGifId=this.rootName+"_ShareMenuAnimatedGif";this._shareText=encodeURIComponent(document.title);this._customShareUrl=false;
this._activeTab=null;this._fen="";this._fenPgn="";this._pgnTags=null;this._animatedGifUrl=null;this.generateShareUrl();this.build();
};ShareMenuControl.prototype={build:function(){this.buildDialog();if(this._forcePgnDialog){this.handleClick(this.shareButton,this.showPgnFenDialog);
}else{this.handleClick(this.shareButton,this.toggleShareMenuDialog)}this.handleClick(this._facebookButtonId,this.showFacebookDialog);
this.handleClick(this._twitterButtonId,this.showTwitterDialog);this.handleClick(this._googlePlusButtonId,this.showGooglePlusDialog);
this.handleClick(this._linkedinButtonId,this.showLinkedinDialog);this.handleClick(this._tumblrButtonId,this.showTumblrDialog);this.handleClick(this._stumbleuponButtonId,this.showStumbleuponDialog);
this.handleClick(this._redditButtonId,this.showRedditDialog);this.handleClick(this._favoritesButtonId,this.showFavoritesDialog);this.handleClick(this._mailButtonId,this.showMailDialog);
this.handleClick(this._shareExtraButtonId,this.toggleShareExtraButtons);this.handleClick(this._globalDialogDownloadButtonId,this.showPgnFenDialog);
this.handleClick(this._globalDialogShareButtonId,this.showShareDialog)},buildDialog:function(){var headerBarContent="";headerBarContent='<ul id="'+this._globalDialogTabsId+'" class="nav nav-tabs nav-justified">';
headerBarContent+='<li id="'+this._globalDialogDownloadButtonId+'"><a><i class="icon-download"></i></a></li>';headerBarContent+='<li id="'+this._globalDialogShareButtonId+'"><a><i class="icon-share"></i></a></li>';
headerBarContent+='</ul><button id="'+this._globalDialogCloseButtonDivId+'" type="button" class="close"><i class="icon-x"></i></button>';
var html="";html+='<div class="modal-header">'+headerBarContent+"</div>";html+='<div class="modal-body" id="'+this._globalDialogContentDivId+'"></div>';
html+='<div class="modal-footer" id="'+this._globalDialogFooterBarDivId+'">';html+=' <ul class="social-icons buttons">';html+=' <li id="'+this._facebookButtonId+'"><span class="facebook" title="Facebook"> <i class="icon-facebook"></i></span></li>';
html+=' <li id="'+this._twitterButtonId+'"><span class="twitter" title="Twitter"> <i class="icon-twitter"></i></span></li>';html+=' <li id="'+this._googlePlusButtonId+'"><span class="google-plus" title="Google+"> <i class="icon-google-plus"></i></span></li>';
html+=' <li id="'+this._redditButtonId+'"><span class="reddit" title="Reddit"> <i class="icon-reddit"></i></span></li>';html+=' <li id="'+this._shareExtraButtonId+'"><span class="share" title="Share"> <i class="icon-share"></i></span></li>';
html+=" </ul>";html+=' <ul id="'+this._shareExtraId+'" class="social-icons buttons buttons-extra">';html+=' <li id="'+this._linkedinButtonId+'"><span class="linkedin" title="LinkedIn"> <i class="icon-linkedin"></i></span></li>';
html+=' <li id="'+this._stumbleuponButtonId+'"><span class="stumbleupon" title="Stumbleupon"> <i class="icon-stumbleupon"></i></span></li>';
html+=' <li id="'+this._tumblrButtonId+'"><span class="tumblr" title="Tumblr"> <i class="icon-tumblr"></i></span></li>';html+=' <li id="'+this._favoritesButtonId+'"><span class="favorites" title="Favorites"> <i class="icon-favorites"></i></span></li>';
html+=' <li id="'+this._mailButtonId+'"><span class="mail" title="E-mail"> <i class="icon-mail"></i></span></li>';html+=" </ul>";html+="</div>";
var dialogElement=document.createElement("div");dialogElement.id=this._globalDialogDivId;dialogElement.className="game-popout modal-dialog modal-content shareMenuDialog shareMenuGlobalDialog";
dialogElement.style.display="none";dialogElement.innerHTML=html;this.container.appendChild(dialogElement)},handleClick:function(element,handler){
if(typeof element==="string"){element=document.getElementById(element)}if(element&&element.addEventListener){element.addEventListener("click",handler.bind(this));
}},toggleShareMenuDialog:function(e){this.showShareDialog();if(e&&typeof e.preventDefault==="function"){e.preventDefault()}},toggleShareExtraButtons:function(){
var dialogElement=document.getElementById(this._globalDialogDivId);dialogElement.classList.toggle("extra-share-buttons")},showGlobalDialog:function(content){
var html="";var dialogElement=document.getElementById(this._globalDialogDivId);html+=content;document.getElementById(this._globalDialogContentDivId).innerHTML=html;
this.handleClick(this._globalDialogCloseButtonDivId,this.closeGlobalDialog);Element.addClassName(dialogElement,"has-footer");dialogElement.style.display="block";
},closeGlobalDialog:function(){document.getElementById(this._globalDialogDivId).style.display="none"},setPgnDownloadId:function(pgnDownloadId){
var shareUrlInputElement=null;this._pgnDownloadId=pgnDownloadId;if(this._pgnDownloadType==="tactics_problem"){this.generateShareUrl();
shareUrlInputElement=document.getElementById(this._shareUrlInputId);if(shareUrlInputElement){shareUrlInputElement.value=this.getShareUrl();
}}},togglePgnTimestamps:function(){this._pgnShowTimestamps=!this._pgnShowTimestamps;this._findFenPgn();document.getElementById(this._pgnContentTextareaId).innerHTML=this._fenPgn;
},selectTab:function(tabId){var tab=document.getElementById(tabId);var tabList=document.getElementById(this._globalDialogTabsId).children;
if(this._activeTab===tab){return}for(i=0;i<tabList.length;i++){tabList[i].classList.remove("active")}tab.classList.add("active");this._activeTab=tab;
},setShareUrl:function(shareUrl){if(shareUrl.substring(0,5)==="//www"){shareUrl="https:"+shareUrl}this._shareUrl=shareUrl;this._customShareUrl=true;
},getShareUrl:function(encoded){if(encoded){return encodeURIComponent(this._shareUrl)}else{return this._shareUrl}},generateShareUrl:function(){
var locale=window.document.documentElement.lang;var lang=locale.split("-")[0];var location=window.location;var isLangPresentInPath=location.pathname.split("/")[1]===lang;
if(this._customShareUrl){return}if(isLangPresentInPath||lang==="en"){this._shareUrl=location.href}else{this._shareUrl=location.protocol+"//"+location.hostname+"/"+lang+location.pathname;
}if(this._pgnDownloadType==="tactics_problem"&&this._pgnDownloadId){var regEx=/([\S]+tactics\b)/;var match=this._shareUrl.match(regEx);
if(match!=null&&match.length>0){this._shareUrl=match[0]+"/"+this._pgnDownloadId}}},shouldFlipBoard:function(){this._findFenPgn();if(window.context&&window.context.user&&window.context.user.username===this._pgnTags.Black){
return true}else if(this._pgnDownloadType==="tactics_problem"&&!this._moveListControl.startsWithBlack){return true}else{return this._chessBoard.boardFlip;
}},showFacebookDialog:function(){var facebookUrl="http://www.facebook.com/sharer.php?u="+this.getShareUrl(true);var newWindow=open(facebookUrl,"diagram_facebook_share","width=560,height=510,resizable=no,status=no,menubar=no,scrollbars=no");
newWindow.creator=self;newWindow.focus();this.closeGlobalDialog()},showTwitterDialog:function(){var shareText=this._shareText;this._findFenPgn();
if(this._pgnTags&&this._pgnTags.White&&this._pgnTags.White!=="?"&&this._pgnTags.Black&&this._pgnTags.Black!=="?"){shareText=this._pgnTags.White+" vs "+this._pgnTags.Black;
}var twitterUrl="https://twitter.com/intent/tweet?text="+shareText+"&url="+this.getShareUrl(true)+"&via=chesscom";var newWindow=open(twitterUrl,"diagram_twitter_share","width=560,height=510,resizable=no,status=no,menubar=no,scrollbars=no");
newWindow.creator=self;newWindow.focus();this.closeGlobalDialog()},showRedditDialog:function(){var redditUrl="http://reddit.com/r/chess/submit?text="+this._shareText+"&url="+this.getShareUrl(true);
var newWindow=open(redditUrl,"diagram_reddit_share","resizable=no,status=no,menubar=no,scrollbars=no");newWindow.creator=self;newWindow.focus();
this.closeGlobalDialog()},showGooglePlusDialog:function(){var googlePlusUrl="https://plus.google.com/share?url="+this.getShareUrl(true);
var newWindow=open(googlePlusUrl,"diagram_google_share","width=560,height=510,resizable=no,status=no,menubar=no,scrollbars=no");newWindow.creator=self;
newWindow.focus();this.closeGlobalDialog()},showStumbleuponDialog:function(){var stumbleuponUrl="http://www.stumbleupon.com/submit?title="+this._shareText+"&url="+this.getShareUrl(true);
var newWindow=open(stumbleuponUrl,"diagram_stumbleupon_share","width=560,height=510,resizable=no,status=no,menubar=no,scrollbars=no");
newWindow.creator=self;newWindow.focus();this.closeGlobalDialog()},showLinkedinDialog:function(){var linkedinUrl="https://www.linkedin.com/shareArticle?mini=true&title="+this._shareText+"&url="+this.getShareUrl(true)+"&summary="+this._shareText+"&source=Chess.com";
var newWindow=open(linkedinUrl,"diagram_linkedin_share","width=560,height=510,resizable=no,status=no,menubar=no,scrollbars=no");newWindow.creator=self;
newWindow.focus();this.closeGlobalDialog()},showTumblrDialog:function(){var tumblrUrl="http://www.tumblr.com/share/link?name="+this._shareText+"&url="+this.getShareUrl(true)+"&description="+this._shareText;
var newWindow=open(tumblrUrl,"diagram_tumblr_share","width=560,height=510,resizable=no,status=no,menubar=no,scrollbars=no");newWindow.creator=self;
newWindow.focus();this.closeGlobalDialog()},showFavoritesDialog:function(){var bookmarkURL=window.location.href;var bookmarkTitle=window.document.title;
if(window.sidebar&&window.sidebar.addPanel){window.sidebar.addPanel(bookmarkTitle,bookmarkURL,"")}else if(window.external&&"AddFavorite"in window.external){
window.external.AddFavorite(bookmarkURL,bookmarkTitle)}else{alert("Press "+(window.navigator.userAgent.toLowerCase().indexOf("mac")!==-1?"Cmd":"Ctrl")+"+D to bookmark this page.");
}this.closeGlobalDialog()},showMailDialog:function(){var emailString="mailto:?subject=Check this out on Chess.com&body="+this._shareText+" - "+this.getShareUrl(true)+"%0D%0A%0D%0A"+"PS - I play at Chess.com! Download their free app:%0D%0A%0D%0A"+"… for Android - http://goo.gl/LZVzTV%0D%0A"+"… for iPhone %26 iPad - http://goo.gl/ZLci9 %0D%0A"+"… or sign up online at http://www.chess.com/register"+"%0D%0A%0D%0A ... %0D%0A%0D%0A";
window.location.href=emailString;this.closeGlobalDialog()},showShareDialog:function(){var html="";var dynboardParams="";if(this._pgnDownloadType==="tactics_problem"){
this._moveListControl._moveForwardBackward("toPly",1)}this._findFenPgn();this.generateShareUrl();dynboardParams="fen="+this._fen+"&board="+this._chessBoard.colorScheme+"&piece="+this._chessBoard.pieceStyle+"&size=3"+(this.shouldFlipBoard()?"&flip=true":"");
html+='<div class="share-url"><input id="'+this._shareUrlInputId+'" type="text" onfocus="this.select();" onmouseup="return false;" value="'+this.getShareUrl()+'" readonly /></div>';
html+='<div class="share-board"><i class="icon-download"></i> '+(this._shareMenuLabels.downloadInfo||"Image")+": ";html+='<a href="/dynboard?'+dynboardParams+'" target="_blank">'+(this._shareMenuLabels.currentImage||"Current")+"</a>";
if(this._getAnimatedGifGenerationUrl()){html+=' | <a href="'+(this._animatedGifUrl||"#")+'" id="'+this._shareAnimatedGifId+'"'+(this._animatedGifUrl?' target="_blank"':"")+">"+(this._shareMenuLabels.animatedImage||"Animated GIF")+"</a>";
}html+='<div class="clearfix"></div><div class="board-image"><img src="/dynboard?'+dynboardParams+'" /></div>';html+="</div>";if(!this._forcePgnDialog){
this.closeGlobalDialog()}this.selectTab(this._globalDialogShareButtonId);this.showGlobalDialog(html);document.getElementById(this._shareUrlInputId).focus();
if(!this._animatedGifUrl&&this._getAnimatedGifGenerationUrl()){this.handleClick(this._shareAnimatedGifId,this.downloadAnimatedGif);
}},showPgnFenDialog:function(){var html="";var embedButton="";if(this._diagramId){embedButton+='<a href="#" class="embed-diagram" id="'+this._embedButtonId+'" title="'+(this._shareMenuLabels.embed||"Embed Diagram")+'"><div class="icon">∞</div></a>';
}this._findFenPgn();html+='<div class="share-fen"><input id="'+this._shareFenInputId+'" type="text" onfocus="this.select();" onmouseup="return false;" value="'+this._fen+'" readonly /></div>';
html+='<div class="share-pgn">PGN'+embedButton;if(this._pgnHasTimestamps){html+='<label class="pgn-timestamps" title="'+(this._shareMenuLabels.timestamps||"PGN Timestamps")+'"><input id="'+this._pgnTimestampsTogglerId+'" type="checkbox" name="timestamps" value="" '+(this._pgnShowTimestamps?"checked":"")+"/>";
html+='<i class="icon icon-circle-clock"></i></label>'}html+='<textarea id="'+this._pgnContentTextareaId+'" type="text" readonly="yes" class="full" onfocus="this.select();" onmouseup="return false;">'+this._fenPgn+"</textarea>";
html+='<div class="download-pgn"><button type="button" class="btn btn-primary full-width" id="'+this._pgnDownloadButtonId+'">'+(this._shareMenuLabels.download||"Download")+"</button></div>";
html+="</div>";if(!this._forcePgnDialog){this.closeGlobalDialog()}this.selectTab(this._globalDialogDownloadButtonId);this.showGlobalDialog(html);
if(this._diagramId){document.getElementById(this._embedButtonId).addEventListener("click",function onclick(e){this.showEmbedDialog();
e.preventDefault()}.bind(this))}document.getElementById(this._pgnDownloadButtonId).addEventListener("click",function onclick(e){this.downloadPgn();
e.preventDefault()}.bind(this));if(this._pgnHasTimestamps){this.handleClick(this._pgnTimestampsTogglerId,this.togglePgnTimestamps);
}},isDailyPuzzle:function(){return this.rootName.indexOf("chess_com_dailypuzzle")!=-1},showEmbedDialog:function(){var iframeSource="https:"+Config.MainDomain+"/emboard?id="+this._diagramId+(this.isDailyPuzzle()?"&type=dailypuzzle":"");
var iframeWidth=this.rootElement.offsetWidth;var iframeHeight=this.rootElement.offsetHeight+15;var embedCode='&lt;iframe border="0" frameborder="0" allowtransparency="true" width="'+iframeWidth+'" height="'+iframeHeight+'" src="'+iframeSource+'"&gt;&lt;/iframe&gt;';
document.getElementById(this._pgnContentTextareaId).innerHTML=embedCode},downloadPgn:function(isDynamicPgn){this._findFenPgn();var fileName=this._getPgnFileName();
SaveText(this._fenPgn,fileName,"application/x-chess-pgn;charset=utf-8");return false},downloadAnimatedGif:function(e){e.preventDefault();
e.stopPropagation();if(this._generatingAnimatedGif||this._animatedGifUrl){return false}var genGifUrl=this._getAnimatedGifGenerationUrl();
if(!genGifUrl){return false}var animatedGifLinkEl=document.getElementById(this._shareAnimatedGifId);var generationIntervalId=0;var progressAnimationIntervalId=0;
var progressAnimationDotsCount=0;this._generatingAnimatedGif=true;var genGifRequest=new XMLHttpRequest;genGifRequest.onreadystatechange=function(){
if(genGifRequest.readyState===XMLHttpRequest.DONE&&genGifRequest.status===200){this._animatedGifUrl=genGifRequest.responseText;var gifRequest=new XMLHttpRequest;
gifRequest.onreadystatechange=function(){if(gifRequest.readyState===XMLHttpRequest.DONE&&gifRequest.status===200){clearInterval(generationIntervalId);
clearInterval(progressAnimationIntervalId);this._generatingAnimatedGif=false;animatedGifLinkEl.innerHTML=this._shareMenuLabels.animatedImageReady||"Ready! Download GIF";
animatedGifLinkEl.setAttribute("href",this._animatedGifUrl);animatedGifLinkEl.setAttribute("target","_blank")}else if(gifRequest.status===500){
clearInterval(generationIntervalId);clearInterval(progressAnimationIntervalId);this._generatingAnimatedGif=false;animatedGifLinkEl.innerHTML=this._shareMenuLabels.animatedImageFailure||"GIF can't be generated!";
}}.bind(this);generationIntervalId=setInterval(function(){gifRequest.open("GET",this._animatedGifUrl);gifRequest.send()}.bind(this),2e3);
}else if(genGifRequest.status===500){clearInterval(generationIntervalId);clearInterval(progressAnimationIntervalId);this._generatingAnimatedGif=false;
animatedGifLinkEl.innerHTML=this._shareMenuLabels.animatedImageFailure||"GIF can't be generated!"}}.bind(this);genGifRequest.open("GET",genGifUrl);
genGifRequest.send();progressAnimationIntervalId=setInterval(function(){if(++progressAnimationDotsCount>3){progressAnimationDotsCount=1;
}animatedGifLinkEl.innerHTML="Generating GIF"+new Array(progressAnimationDotsCount+1).join(".")}.bind(this),500);return false},_getAnimatedGifGenerationUrl:function(){
if(globals.context&&!globals.context.user||this._chessBoard._variant!==Variants.chess&&this._chessBoard._variant!==Variants.chess960){
return null}if(this._moveListControl._moveNodes.length<=1){return null}var regExMatch=this._shareUrl.match(/\/(daily|live)\/game\/([0-9]+)/);
if(regExMatch){return Routing.generate("web_game_get_gif_url",{type:regExMatch[1],id:parseInt(regExMatch[2],10)})}else{return null;
}},_getPgnFileName:function(){var fileName="pgn_data";switch(this._pgnDownloadType){case"tactics_problem":fileName="tactic_"+this._pgnDownloadId;
break;case"computer":fileName="vs_computer_"+this._getTodayString();break;case"opening":var openingName=this._pgnDownloadExtra.replace(" ","-");
fileName="opening_"+openingName;break;case"explorer":fileName="explorer";break;default:if(this._fenPgn&&this._pgnTags&&this._pgnTags.White&&this._pgnTags.White!=="?"&&this._pgnTags.Black&&this._pgnTags.Black!=="?"){
fileName=this._pgnTags.White.replace(/\s+/g,"-")+"_vs_"+this._pgnTags.Black.replace(/\s+/g,"-")+(this._pgnTags.Date&&this._pgnTags.Date!=="????.??.??"?"_"+this._pgnTags.Date.replace(/\./g,"-"):"");
}else if(this.isDailyPuzzle()){filename="daily_puzzle"}}if(this._pgnDownloadType==="analysis"){fileName+="_analysis"}return fileName+".pgn";
},_getTodayString:function(){var today=new Date;var dd=today.getDate();var mm=today.getMonth()+1;var yyyy=today.getFullYear();if(dd<10){
dd="0"+dd}if(mm<10){mm="0"+mm}return yyyy+"-"+mm+"-"+dd},_findFenPgn:function(){var selectedFen=null;var abPgn=null;var useSaved=!this._chessBoard||!this._chessBoard.gameRules||this._chessBoard.gameRules._legalPositionCheck==="full";
this._fen="";this._fenPgn="";this._pgnTags=null;if(this._pgnData){this._fenPgn+=this._pgnData}else if(this._diagramId&&this._setup){
this._pgnTags=this._setup.tags}else if(this._chessBoard.pgnTags){this._pgnTags=this._chessBoard.pgnTags}this._fen=this._moveListControl.getSelectedFen();
if(this._pgnTags){if(!this._pgnTags["FEN"]&&this._moveListControl._moveNodes[0].fen!="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"){
this._pgnTags["FEN"]=this._moveListControl._moveNodes[0].fen}selectedFen=this._moveListControl.getSelectedFen();if(selectedFen){this._pgnTags["CurrentPosition"]=selectedFen;
}}this._fenPgn+=this._moveListControl.printPgn(this._pgnTags||{FEN:this._moveListControl._moveNodes[0].fen},null,useSaved,this._pgnShowTimestamps);
if(this._chessBoard&&this._chessBoard._analyzeMode===true){abPgn=this._chessBoard.getBoardApi().getProperty("pgn");if(abPgn){this._fenPgn=abPgn;
}}}}});ChessCom(function(globals){if(globals.VariantControl){return}var VariantControl=globals.VariantControl=function VariantControl(board,variant){
this._board=board;this._variant=variant;this._controller=null;this._init();board.attachEvent("onVariantChanged",function(variant){
this._teardown();this._variant=variant;this._init()},this)};VariantControl.prototype={refresh:function(){if(this._controller&&this._controller.refresh){
this._controller.refresh()}},_init:function(){if(this._variant.Controller){this._controller=new this._variant.Controller(this._board);
}else{this._controller=null}},_teardown:function(){if(this._controller){this._controller.teardown();this._controller=null}}}});ChessCom(function(globals){
if(globals.ChessBoardExtenders.extendToEmailChess){return}var _bind=globals._bind;var Config=globals.config;var ChessColorScheme=globals.ChessColorScheme;
var ChessBoardExtenders=globals.ChessBoardExtenders;var chessBoardEngine=globals.chessBoardEngine;var myEvent=globals.myEvent;var useFen=globals.useFen;
var ShareMenuControl=globals.ShareMenuControl;var CapturedPiecesControl=globals.CapturedPiecesControl;var MoveListControl=globals.MoveListControl;
var GameSetup=globals.GameSetup;var StandardMoveEncoder=globals.StandardMoveEncoder;var Variants=globals.Variants;var VariantControl=globals.VariantControl;
ChessBoardExtenders.extendToEmailChess=function(extendable,opts){var extendOpts={forLiveChess:false,doInit:true};if(typeof opts==="object"){
for(var key in opts){extendOpts[key]=opts[key]}}if(!extendOpts.forLiveChess){extendable._moveOutputField=null;extendable._cancelButton=null;
extendable._submitButton=null;extendable._moveInputField=null;extendable._autoSubmit=false;extendable._pgnBodyElement=null;extendable._doSounds=false;
extendable.soundTheme=extendable.opts["soundTheme"]||Config.AudioSet;extendable._liveChessBoard=false;extendable._firstInitBoard=true;
}else{extendable._liveChessBoard=true}extendable.registerCustomEvent("onMove");extendable.registerCustomEvent("onMoveCancelled");extendable.registerCustomEvent("onMoveForwardBackward");
extendable.registerCustomEvent("onMoveRightClick");extendable.registerCustomEvent("onInitBoard");extendable.registerCustomEvent("onVariantChanged");
extendable.registerCustomEvent("onMoveListPlay");extendable._flipBoardButton=null;extendable._topInfoDiv2=null;extendable._bottomInfoDiv=null;
extendable._initialSetup="";extendable._moveString="";extendable._variant=Variants.chess;extendable._variantControl=new VariantControl(extendable,extendable._variant);
extendable._sideControls=null;extendable.setViewOnly(false);extendable._analyzeMode=false;extendable._markSquareColor="#FF3";extendable._markLastMove=true;
extendable._cancelPieceId=null;extendable._cancelAreaId=null;extendable._cancelAdditionalInfo=null;extendable._clickedPieceElement=null;
extendable._moveMade=false;extendable._moveEncoder=new StandardMoveEncoder;extendable._moveListControl=extendable.rootName+"__moveList";
extendable._capturedPiecesControl=null;extendable._avoidCapturedPiecesControlOnNextRefresh=false;extendable._overrideSetEnabled={
overrideNextMode:false,overrideValue:true};extendable._captureKeyStrokes=true;extendable.getBoardApi=function(){var ChessBoardPropertyMap={
analysisBoard:[function(){return this._analyzeMode}.bind(this),function(analysisBoard){this.setAnalysisBoard(analysisBoard)}.bind(this)],
animating:[function(){return this._animating}.bind(this),function(){}],animationType:[function(){return this._animationType}.bind(this),function(animationType){
this.setAnimationType(animationType)}.bind(this)],boardCoords:[function(){return this.boardCoords}.bind(this),function(boardCoords){
this.setBoardCoords(boardCoords)}.bind(this)],boardCoordsPosition:[function(){return this.boardCoordsPosition}.bind(this),function(value){
this.setOutsideCoords(value==="out")}.bind(this)],boardFlip:[function(){return this.boardFlip}.bind(this),this.setBoardFlip.bind(this)],
captureKeyStrokes:[function(){return this._captureKeyStrokes}.bind(this),this._setCaptureKeyStrokes.bind(this)],colorScheme:[function(){
return this.colorScheme}.bind(this),function(colorScheme){this.setColorScheme(colorScheme);this._markSquares()}.bind(this)],currentLineInfo:[this.getCurrentLineInfo.bind(this),function(){}],
currentPosition:[function(){return this.moveListControl._currentStateNode}.bind(this),this._setCurrentPosition.bind(this)],enabled:[function(){
return this._enabled}.bind(this),this.setEnabled.bind(this)],withPremoves:[function(){return this._withPremoves}.bind(this),function(withPremoves){
this._withPremoves=withPremoves;if(!this._withPremoves&&this._clearPremoves){this._clearPremoves()}}.bind(this)],inFixedElement:[function(){
if(this.chessboardEvents){return this.chessboardEvents.inFixedElement}}.bind(this),function(inFixedElement){if(this.chessboardEvents){
this.chessboardEvents.setFixed(inFixedElement)}}.bind(this)],encodedMoves:[_bind(this.getEncodedMovesFromMoveList,this),function(){}],
currentEncodedMoves:[this.getCurrentEncodedMovesFromMoveList.bind(this),function(){}],firstMoveNumber:[_bind(function(){return this._firstMoveNumber;
},this.moveListControl),function(){}],highlightLegalMoves:[_bind(function(){return this.highlightLegalMoves},this),_bind(function(legalMoves){
if(legalMoves!==this.highlightLegalMoves){this.highlightLegalMoves=legalMoves;this._unmarkPreviousMoveHints()}},this)],ignoreResultNode:[_bind(function(){
return this._ignoreResultNode},this.moveListControl),_bind(function(ignore){this._ignoreResultNode=ignore},this.moveListControl)],
markLastMove:[_bind(function(){return this._markLastMove},this),_bind(function(value){this._markLastMove=value;this._markSquares();
},this)],markSquareColor:[_bind(function(){return ChessColorScheme[this.colorScheme]&&ChessColorScheme[this.colorScheme][4]?ChessColorScheme[this.colorScheme][4]:this._markSquareColor;
},this),function(){}],moveComment:[_bind(function(){return this.moveListControl._currentAlternateLine._moveNodes[this.moveListControl._selectedNode].comment;
},this),_bind(function(comment){this.moveListControl._currentAlternateLine._moveNodes[this.moveListControl._selectedNode].comment=comment;
},this)],moveListDisplayType:[function(){return this.moveListControl._moveListDisplayType}.bind(this),this.moveListControl.setMoveListDisplayType.bind(this.moveListControl)],
moveListEnabled:[_bind(function(){return this._enabled},this.moveListControl),_bind(function(value){if(value){this.enable(true)}else{
this.disable(true)}},this.moveListControl)],moveListVerticalStyle:[_bind(function(){return this.moveListControl._verticalStyle},this),_bind(function(value){
var newValue=value?true:false;if(newValue!=this.moveListControl._verticalStyle){this.moveListControl._verticalStyle=newValue;this.moveListControl._visible=false;
this.moveListControl.build();this.moveListControl.show();this.moveListControl.updateScrolling()}},this)],moveListScrollableElement:[_bind(function(){
return this.moveListControl._scrollableElement},this),_bind(function(scrollableElement){this.moveListControl._scrollableElement=scrollableElement;
},this)],moveListRealtimePlay:[_bind(function(){return this.moveListControl.playingMovesRealtime},this),_bind(this.moveListControl.setPlayingMovesRealtime,this.moveListControl)],
currentLineNodes:[this.getCurrentLineNodes.bind(this),function(){}],moveNodes:[function(){return this._convertMoveNodes(this.moveListControl._moveNodes);
}.bind(this),function(){}],openAnalysis:[_bind(function(){return this.gameRules._legalMoveCheck=="off"},this),_bind(this._setOpenAnalysis,this)],
options:[_bind(function(){return this.opts},this),function(){}],pgn:[_bind(function(){if(!this.pgnTags){this.pgnTags={FEN:this.moveListControl._moveNodes[0].fen
}}return this.moveListControl.printPgn(this.pgnTags)},this),_bind(this._parsePgn,this)],pieceStyle:[_bind(function(){return this.pieceStyle;
},this),_bind(this.setPieceStyle,this)],selectedFen:[_bind(this.moveListControl.getSelectedFen,this.moveListControl),function(){}],
selectedMoveNode:[_bind(this._getSelectedMoveNode,this),_bind(function(nodeNumber){this.setCurrentAlternateLine(this);this.selectNode(nodeNumber);
},this.moveListControl)],shareMenuPgnDownloadId:[_bind(function(){return this._pgnDownloadId},this.shareMenuControl),_bind(function(value){
this.setPgnDownloadId(value)},this.shareMenuControl)],shareMenuCustomUrl:[_bind(function(){return this._shareUrl},this.shareMenuControl),_bind(function(value){
this.setShareUrl(value)},this.shareMenuControl)],shareMenuPgnDownloadType:[_bind(function(){return this._pgnDownloadType},this.shareMenuControl),_bind(function(value){
this._pgnDownloadType=value},this.shareMenuControl)],shareMenuLabels:[_bind(function(){return this._shareMenuLabels},this.shareMenuControl),_bind(function(value){
this._shareMenuLabels=value},this.shareMenuControl)],shareMenuPgnDownloadExtra:[_bind(function(){return this._pgnDownloadExtra},this.shareMenuControl),_bind(function(value){
this._pgnDownloadExtra=value},this.shareMenuControl)],hasSideControls:[_bind(function(){return!!this._sideControls},this),function(){}],
size:[_bind(function(){return this.size},this),_bind(this.setBoardSize,this)],sounds:[_bind(function(){return this._doSounds},this),_bind(function(value){
this.toggleSounds(value)},this)],soundTheme:[_bind(function(){return this.soundTheme},this),_bind(function(value){this.setSoundTheme(value);
},this)],variant:[_bind(function(){return this._variant.code},this),_bind(function(variantCode){if(variantCode!==this._variant.code){
this._setVariant(variantCode)}},this)],variantName:[_bind(function(){return this._variant.name},this),function(){}],viewOnly:[function(){
return this._viewOnly}.bind(this),function(viewOnly){this.setViewOnly(viewOnly)}.bind(this)]};var ChessBoardActionsMap={addMoveClass:[function(moveClass){
var currentNode=this._currentAlternateLine._moveNodes[this._selectedNode];currentNode.moveClass=moveClass;this.__refresh()},this.moveListControl],
addMoveHTMLComment:[function(comment,position){var currentNode=this._currentAlternateLine._moveNodes[this._selectedNode];switch(position){
case"after":currentNode.HTMLComment=comment;break;case"before":if(this._selectedNode==0){currentNode.HTMLComment=comment}else{this._currentAlternateLine._moveNodes[this._selectedNode-1].HTMLComment=comment;
}break;case"position":this._currentAlternateLine._moveNodes[0].HTMLComment=comment;break}this.__refresh()},this.moveListControl],
attachMenuMaker:[this.moveListControl.attachMenuMaker,this.moveListControl],blinkEncodedSquare:[function(encodedSquare,color,count,freq){
this.blinkSquare(this._moveEncoder._decodeMap["_"+encodedSquare],color,count,freq)},this],blinkSquare:[this.blinkSquare,this],cancelMove:[this._cancelMove,this],
createPiece:[function(color,type,areaId){this.gameSetup.createPiece(color,type,areaId);this.refresh()},this],doDynamicResize:[this.doDynamicResize,this],
doPartialResize:[this.doPartialResize,this],downloadPgn:[function(isDynamicPgn){if(this.shareMenuControl){this.shareMenuControl.downloadPgn(isDynamicPgn);
}},this],flip:[this._flipBoard,this],getPgnTag:[function(name){return this.getPgnTag(name)},this],saveMoveList:[this._saveMoveList,this],
getLine:[this.moveListControl.searchAlternateLine,this.moveListControl],goToCurrentState:[this.goToCurrentState,this],hidePieces:[this.hidePieces,this],
initBoard:[this._initBoard,this],calcSideControlsWidth:[this._getSideControlsWidth,this],initializePgnTags:[function(){this.pgnTags={};
this.setPgnTag("Event","?");this.setPgnTag("Site","?");this.setPgnTag("Date","????.??.??");this.setPgnTag("Round","?");this.setPgnTag("White","?");
this.setPgnTag("Black","?");this.setResult("*")},this],insertMoveListAlternateLine:[function(moveNodes){var result=this.insertAlternateLine(moveNodes,this._currentAlternateLine,this._selectedNode);
if(result){this.__refresh();return true}else{return false}},this.moveListControl],makeEncodedMove:[this._makeEncodedMove,this],makeMove:[this._makeUnencodedMove,this],
markEncodedSquare:[function(encodedSquare,color){this._markSquare(this._moveEncoder._decodeMap["_"+encodedSquare],color)},this],markSquare:[this._markSquare,this],
moveForwardBackward:[this.moveListControl._moveForwardBackward,this.moveListControl],parsePgn:[this._parsePgn,this],refreshMoveList:[this.moveListControl.__refresh,this.moveListControl],
removeMoveListAlternateLines:[function(){this.removeAlternateLines(this._currentAlternateLine,this._selectedNode);this.__refresh();
},this.moveListControl],removeResultNode:[this.moveListControl.removeResultNode,this.moveListControl],renderMoveText:[this.moveListControl.renderMoveText,this.moveListControl],
setBackgroundOverlay:[this._setBackgroundOverlay,this],setCurrentPosition:[this._setCurrentPosition,this],setCurrentLine:[this.moveListControl.setCurrentLine,this.moveListControl],
setMoveListVerticalStyle:[this.moveListControl.setVerticalStyle,this.moveListControl],setPgnTag:[function(name,value){this.setPgnTag(name,value);
},this],setResult:[function(result,clocks){this.setResult(result,clocks)},this],setGlyph:[function(glyph,nodeNum){this.setGlyph(glyph,nodeNum);
},this],setSquareColor:[this.setSquareColor,this],showMoveListHTMLComments:[this.moveListControl.showHTMLComments,this.moveListControl],
showMoveListTimestamps:[this.moveListControl.showTimestamps,this.moveListControl],addMoveListControls:[this.moveListControl.addMoveListControls,this.moveListControl],
showPieces:[this.showPieces,this],showShareMenuDialog:[function(){if(this.shareMenuControl){this.shareMenuControl.toggleShareMenuDialog();
}},this],showShareMenuPgnDialog:[function(){if(this.shareMenuControl){this.shareMenuControl.showPgnFenDialog()}},this],takeBackMove:[this._takeBackMove,this],
toggleSounds:[this.toggleSounds,this],translate:[this.moveListControl.translate,this.moveListControl],unmarkSquare:[this.unmarkArea,this],
unmarkEncodedSquare:[function(encodedSquare){this.unmarkArea(this._moveEncoder._decodeMap["_"+encodedSquare])},this],updateMoveListScrolling:[this.moveListControl.updateScrolling,this.moveListControl],
hidePromotionWindow:[this.hidePromotionWindow,this]};return{attachEvent:_bind(this.attachEvent,this),detachEvent:_bind(this.detachEvent,this),
doAction:_bind(function(actionId,params){if(ChessBoardActionsMap[actionId]){var func=ChessBoardActionsMap[actionId][0];var context=ChessBoardActionsMap[actionId][1];
return func.apply(context,params)}},this),setProperty:_bind(function(propertyId,value){return ChessBoardPropertyMap[propertyId]?ChessBoardPropertyMap[propertyId][1](value):null;
},this),getProperty:_bind(function(propertyId){return ChessBoardPropertyMap[propertyId]?ChessBoardPropertyMap[propertyId][0]():null;
},this)}};extendable._convertMoveNodes=function convertMoveNodes(nodes){var moveNodes=[];var length=nodes.length;for(var i=0;i<length;i++){
var node=nodes[i];if(node){moveNodes.push({additionalInfo:node.additionalInfo,fen:node.fen,moveFrom:node.fromAreaId,moveTo:node.toAreaId,
moveText:node.moveText,result:node.result})}}return moveNodes};extendable._getSelectedMoveNode=function(){return this.moveListControl._selectedNode;
};extendable._makeUnencodedMove=function(from,to,flag,overrideSetEnabled,opts){this._makeEncodedMove(this._moveEncoder.encodeMove(from,to,flag),overrideSetEnabled,null,opts);
};extendable._makeEncodedMove=function(encodedMove,overrideSetEnabled,animationSpeed,opts){opts=opts||{};if(arguments.length>1&&overrideSetEnabled!==undefined&&overrideSetEnabled!==null){
this._overrideSetEnabled.overrideNextMove=true;this._overrideSetEnabled.overrideValue=overrideSetEnabled}else{this._overrideSetEnabled.overrideNextMove=false;
}if(this.moveListControl._selectedNode<this.moveListControl._moveNodes.length-1){this.moveListControl._moveNodes.length=this.moveListControl._selectedNode+1;
}this._playEncodedMove(encodedMove,{},true);this._setMoveMade(false);this._markSquares();var lastNode=this.moveListControl._moveNodes[this.moveListControl._moveNodes.length-1];
this.moveListControl._lastMoveInformation.push(lastNode);var animOptions={};var captureMove=this.moveListControl.isCaptureMove(this.moveListControl._currentAlternateLine,this.moveListControl._selectedNode);
if(captureMove){animOptions.capture=captureMove}var castlingMove=this.moveListControl.isCastlingMove(this.moveListControl._currentAlternateLine,this.moveListControl._selectedNode);
if(castlingMove){animOptions.castling=castlingMove}var kingInCheck=this.moveListControl.isKingInCheck(this.moveListControl._currentAlternateLine,this.moveListControl._selectedNode);
if(kingInCheck){animOptions.kingInCheck=kingInCheck}if(opts.pieceDrop){animOptions.pieceDrop=true}if(animationSpeed){animOptions.animationSpeed=animationSpeed;
}var fromAreaId=lastNode.animationInfo?lastNode.animationInfo.moveFrom:lastNode.fromAreaId;var toAreaId=lastNode.animationInfo?lastNode.animationInfo.moveTo:lastNode.toAreaId;
this.animateMove(fromAreaId,toAreaId,animOptions);this.moveListControl._currentStateNode=this.moveListControl._moveNodes.length-1;
var moveText=this.moveListControl._currentAlternateLine._moveNodes[this.moveListControl._selectedNode].moveText;if(moveText){this.Sounds.playMoveSound(moveText,false);
}};extendable._afterMakeEncodedMove=function(e){if(e&&e["animationOptions"]&&e["animationOptions"].isPremove){return}var lm=this.moveListControl._lastMoveInformation.pop();
this.refresh(lm);if(this._overrideSetEnabled.overrideNextMove){this.setEnabled(this._overrideSetEnabled.overrideValue);this._overrideSetEnabled.overrideNextMove=false;
}this._markSquares()};extendable.attachEvent("onAfterMoveAnimated",extendable._afterMakeEncodedMove,extendable);extendable.getEncodedMovesFromMoveList=function(){
var moves="";for(var i=1;i<this.moveListControl._moveNodes.length;i++){var node=this.moveListControl._moveNodes[i];var move=this._moveEncoder.encodeMove(node.fromAreaId,node.toAreaId,node.additionalInfo);
moves+=move}return moves};extendable.getCurrentLineNodes=function(){var moveNodesGroups=[];var modeNodes=[];var tmpNodes;var line=this.moveListControl._currentAlternateLine;
var cutoff;while(line){tmpNodes=this._convertMoveNodes(line._moveNodes);if(typeof cutoff==="number"){tmpNodes.length=cutoff}tmpNodes.forEach(function oneach(node,i){
node.lineId=line.id;node.nodeId=i});moveNodesGroups.unshift(tmpNodes);cutoff=line._atNode;line=line._parentLine}moveNodesGroups.forEach(function oneach(nodes,i){
if(i){nodes.shift()}modeNodes=modeNodes.concat(nodes)});return modeNodes};extendable.getCurrentLineInfo=function(){var offset=0;var line=this.moveListControl._currentAlternateLine;
while(line){offset+=(line._atNode||1)-1;line=line._parentLine}return{id:this.moveListControl._currentAlternateLine.id,offset:offset,
isMainLine:!this.moveListControl._currentAlternateLine._parentLine,parentMoveNode:this.moveListControl._currentAlternateLine._parentLine?this.moveListControl._currentAlternateLine._atNode:null,
selectedMoveNode:this.moveListControl._selectedNode}};extendable.getCurrentEncodedMovesFromMoveList=function(){var moves="";var nodes=this.getCurrentLineNodes();
var offset=this._getSelectedMoveNode()+this.getCurrentLineInfo().offset;var i;for(i=1;i<=offset;i++){var node=nodes[i];var move=this._moveEncoder.encodeMove(node.moveFrom,node.moveTo,node.additionalInfo);
moves+=move}return moves};extendable._markSquare=function(areaId,color){if(color!=null){this.markArea(areaId,color)}else{var squareColor=ChessColorScheme[this.colorScheme]&&ChessColorScheme[this.colorScheme][4]?ChessColorScheme[this.colorScheme][4]:this._markSquareColor;
var fromAreaId=this.moveListControl._moveNodes[this.moveListControl._currentStateNode].fromAreaId;var toAreaId=this.moveListControl._moveNodes[this.moveListControl._currentStateNode].toAreaId;
if(areaId==fromAreaId){this.markArea(fromAreaId,squareColor)}else if(areaId==toAreaId){this.markArea(toAreaId,squareColor)}else{this.unmarkArea(areaId);
}}};extendable._setOpenAnalysis=function(openA){if(openA){this.gameRules._legalMoveCheck="off"}else{this.moveListControl.selectNode(0);
this.moveListControl._moveNodes.length=1;this.gameSetup.movecount=0;this.moveListControl.setStartingPosition(getFen(this.gameSetup));
this.moveListControl.__refresh();this.gameRules._legalMoveCheck="full"}};extendable._setBackgroundOverlay=function(overlay){if(this.backgroundOverlay!==overlay){
this.backgroundOverlay=!!overlay;this._render.refreshBackground()}};extendable._loadFen=function(strfen){var fen;if(this._initialSetup){
fen=this._initialSetup}else{fen=strfen}useFen(this.gameSetup,fen);this.moveListControl._moveNodes[0].fen=fen;this.moveListControl._moveNodes.length=1;
this._playEncodedMoves(this._moveString)};extendable._makeInputMove=function(encMove){var encodedMove=encMove?encMove:this._moveInputField.value;
this._playEncodedMove(encodedMove,{});this._currentStateNode=this._selectedNode;this.refresh();this._markSquares()};extendable._setMoveMade=function(moveMade,fromAreaId,toAreaId){
if(moveMade){if(this._submitButton){this._submitButton.removeAttribute("disabled","disabled")}if(this._cancelButton){this._cancelButton.removeAttribute("disabled","disabled");
}}else{if(this._moveOutputField){this._moveOutputField.value=""}if(this._submitButton){this._submitButton.setAttribute("disabled","disabled");
}if(this._cancelButton){this._cancelButton.setAttribute("disabled","disabled")}}this._moveMade=moveMade};extendable._playEncodedMove=function(encodedMove,timeInfo,selectLastNode){
var decodedMove=this._moveEncoder.decodeMove(encodedMove);var fromAreaId=decodedMove["fromArea"];var isDrop=fromAreaId===Variants.DROP_MOVE_FROM;
if(!isDrop&&!this.gameSetup.areas[fromAreaId]){fromAreaId=null}var toAreaId=this.gameSetup.areas[decodedMove["toArea"]]?decodedMove["toArea"]:null;
var additionalInfo=decodedMove["additionalInfo"];var pieceId=null;if(isDrop){var dropPiece=additionalInfo;if(this.gameSetup.flags["sm"]===1){
dropPiece=dropPiece.toUpperCase()}pieceId=Variants.DROP_PIECE_ID}else if(fromAreaId){pieceId=this.gameSetup.areas[fromAreaId].pieces[0];
}if(toAreaId&&pieceId){if(this._variant!=Variants.chess960&&!isDrop&&this.gameSetup.pieces[pieceId].type=="k"&&(fromAreaId=="e1"||fromAreaId=="e8")){
if(fromAreaId=="e1"){if(toAreaId=="h1"){toAreaId="g1"}else if(toAreaId=="b1"){toAreaId="c1"}else if(toAreaId=="a1"){toAreaId="c1";
}}else{if(toAreaId=="h8"){toAreaId="g8"}else if(toAreaId=="b8"){toAreaId="c8"}else if(toAreaId=="a8"){toAreaId="c8"}}}if(this._variant==Variants.chess960&&this.gameSetup.pieces[pieceId].type=="k"&&!this.gameRules.isLegalMove(this.gameSetup,fromAreaId,toAreaId)){
var fromCol=fromAreaId.charCodeAt(0);var toCol=toAreaId.charCodeAt(0);var fromRow=fromAreaId[1];var toRow=toAreaId[1];if(fromRow=="1"&&toRow=="1"||fromRow=="8"&&toRow=="8"){
if(toCol<fromCol){var searchRookFrom=97;var searchRookTo=fromCol-1}else{var searchRookFrom=fromCol+1;var searchRookTo=104}for(var i=searchRookFrom;i<=searchRookTo;i++){
var searchedArea=String.fromCharCode(i)+toRow;var searchedPieceId=this.gameSetup.areas[searchedArea].pieces[0];if(searchedPieceId&&this.gameSetup.pieces[searchedPieceId].type=="r"){
toAreaId=searchedArea;break}}}}if(this.gameRules.isLegalMove(this.gameSetup,fromAreaId,toAreaId)){this.moveListControl.addNode(this.gameSetup,this.gameRules,{
fromAreaId:fromAreaId,toAreaId:toAreaId,additionalInfo:isDrop?dropPiece:additionalInfo,timeInfo:timeInfo});if(selectLastNode){this.moveListControl.selectNode(this.moveListControl._moveNodes.length-1);
}return true}}return false};extendable._playEncodedMoves=function(encodedMoves,moveTimeInfos){var length=encodedMoves.length;if(length%2==1){
this.setViewOnly(true);return}for(var i=0,j=0;i<length;i+=2,j++){var encodedMove=encodedMoves.charAt(i)+encodedMoves.charAt(i+1);if(!this._playEncodedMove(encodedMove,moveTimeInfos?moveTimeInfos[j]:{},false)){
this.setViewOnly(true);break}}this.moveListControl.show();this.moveListControl.selectNode(this.moveListControl._moveNodes.length-1);
this.moveListControl._currentStateNode=this.moveListControl._selectedNode};extendable._parsePgn=function(pgnData){if(!pgnData&&this._pgnBodyElement&&this._pgnBodyElement.firstChild){
pgnData=this._pgnBodyElement.textContent}if(!pgnData){return}this.moveListControl.__clear();this.moveListControl.__refresh();this.moveListControl.setStartingPosition("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
useFen(this.gameSetup,"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");this.pgnTags=this.moveListControl.parsePgn(pgnData);
this.moveListControl.__refresh();useFen(this.gameSetup,this.moveListControl.getSelectedFen());this.refresh();if(this.pgnTags&&this.pgnTags["Result"]&&this.pgnTags["Result"]!=="*"){
this.setResult(this.pgnTags["Result"])}this._saveMoveList()};extendable.clearPgnTags=function(){this.pgnTags={}};extendable._saveMoveList=function(){
this.moveListControl._currentStateNode=this.moveListControl._selectedNode;this.moveListControl.saveMoveList()};extendable._loadGame=function(){
var fen;if(this._initialSetup){fen=this._initialSetup}else{fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"}useFen(this.gameSetup,fen);
this.moveListControl.setStartingPosition(fen);if(this._pgnBodyElement&&this._pgnBodyElement.firstChild){this.pgnTags=this.moveListControl.parsePgn(getNodeText(this._pgnBodyElement));
this.moveListControl.show();useFen(this.gameSetup,this.moveListControl.getSelectedFen())}else{this._playEncodedMoves(this._moveString,this._getTimeInfos());
}if(this.pgnTags&&this.pgnTags["Result"]&&this.pgnTags["Result"]!=="*"){this.setResult(this.pgnTags["Result"])}this.moveListControl.saveMoveList();
};extendable.__oldRefresh=extendable.refresh;extendable.refresh=function(node){this.__oldRefresh(node);this._variantControl.refresh();
};extendable._initBoard=function(initPos,moves){if(this._firstInitBoard){this.gameRules=new this._variant.Rules;this.gameSetup=new GameSetup;
this.gameRules.setPositionEditor(false);this.gameRules.defineAreas(this.gameSetup)}if(typeof initPos=="string"){this._initialSetup=initPos?initPos:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
}if(typeof moves=="string"){this._moveString=moves}if(!this._firstInitBoard){this.moveListControl.__clear();this.moveListControl._tempMoveList=[];
this.moveListControl.__refresh(false)}this.cancelAnimatingMoves();this._initializeTimestamps();this._loadGame();this.gfxUrl=Config.GfxUrl;
if(this._firstInitBoard){this.attachEvent("onStartDragging",this._onStartDragging);this.attachEvent("onDropPiece",this._onDropPiece);
this.attachEvent("onClickPiece",this._onClickPiece);this.attachEvent("onClickArea",this._onClickArea)}if(this.promotionWindowActive){
this.hidePromotionWindow()}this.refresh();this.clearMarkedArrows();this._unmarkPreviousMoveHints();this._markSquares();if(!this.rootElement.chessBoardAPI){
this.rootElement.chessBoardAPI=this.getBoardApi()}var e={firstInvocation:this._firstInitBoard};this.fireEvent("onInitBoard",e);this.fireEvent("onSetViewOnly");
this._firstInitBoard=false};extendable._markSquares=function(){this._unmarkSquares();if(this._markLastMove){var currentMove=this.moveListControl._currentAlternateLine._moveNodes[this.moveListControl._selectedNode];
if(this.moveListControl._selectedNode>0&&currentMove&&!currentMove.result){var squareColor=ChessColorScheme[this.colorScheme]&&ChessColorScheme[this.colorScheme][4]?ChessColorScheme[this.colorScheme][4]:this._markSquareColor;
if(currentMove.fromAreaId!==Variants.DROP_MOVE_FROM){this.markArea(currentMove.animationInfo?currentMove.animationInfo.moveFrom:currentMove.fromAreaId,squareColor);
}this.markArea(currentMove.animationInfo?currentMove.animationInfo.moveTo:currentMove.toAreaId,squareColor)}}};extendable._unmarkSquares=function(){
var squareColor=ChessColorScheme[this.colorScheme]&&ChessColorScheme[this.colorScheme][4]?ChessColorScheme[this.colorScheme][4]:this._markSquareColor;
for(var areaId in this._markedSquares){if(areaId!="size"&&areaId!=this._clickedPieceElement&&this._markedSquares[areaId].color==squareColor){
this.unmarkArea(areaId)}}};extendable._unmarkClickedPiece=function(){if(this._clickedPieceElement){this.unmarkArea(this._clickedPieceElement);
this._markSquares()}};extendable._cancelMove=function(){if(this.promotionWindowActive){return}if(!this._viewOnly&&this._moveMade){
this.moveListControl.goToCurrentState();useFen(this.gameSetup,this.moveListControl.getSelectedFen());this._render.restoreDraggedPiece();
this._unmarkPreviousMoveHints();this.refresh();this._setMoveMade(false);this._markSquares();if(this.moveListControl._moveNodes.length>this.moveListControl._currentStateNode+1){
this.moveListControl._moveNodes.length=this.moveListControl._currentStateNode+1;this.moveListControl.__refresh()}this.moveListControl.selectNode(this.moveListControl._selectedNode);
this.fireEvent("onMoveCancelled",{})}};extendable._takeBackMove=function(){if(this.promotionWindowActive){return}if(this.moveListControl._selectedNode>0){
var moveNode=this.moveListControl._moveNodes[this.moveListControl._selectedNode];var fromAreaId=moveNode.animationInfo?moveNode.animationInfo.moveFrom:moveNode.fromAreaId;
var toAreaId=moveNode.animationInto?moveNode.animationInfo.moveTo:moveNode.toAreaId;this.moveListControl.selectNode(this.moveListControl._selectedNode-1);
this.moveListControl._currentStateNode=this.moveListControl._selectedNode;this.moveListControl._moveNodes.length=this.moveListControl._selectedNode+1;
this.moveListControl.__refresh(false);useFen(this.gameSetup,this.moveListControl.getSelectedFen());this._setMoveMade(false);if(fromAreaId!==Variants.DROP_MOVE_FROM){
this.animateMove(toAreaId,fromAreaId)}}};extendable.setAnalysisBoard=function(val){this._analyzeMode=val;if(val){if(this._premoves&&this._premoves.length){
this._clearPremoves()}this._setMoveMade(false);if(this._openAnalysis){this.gameRules._legalMoveCheck="off"}else{if(this.gameRules._legalMoveCheck!="full"){
this.moveListControl.selectNode(0);this.moveListControl._moveNodes.length=1;this.gameSetup.movecount=0;this.moveListControl.setStartingPosition(getFen(this.gameSetup));
this.moveListControl.__refresh();this.gameRules._legalMoveCheck="full"}}}else{this.gameRules._legalMoveCheck="full";if(this.pgnTags&&this.pgnTags["Result"]&&this.pgnTags["Result"]!=="*"){
this.setResult(this.pgnTags["Result"])}}};extendable._flipBoard=function(){if(this._topInfoDiv2&&this._bottomInfoDiv){var topContents=this._topInfoDiv2.innerHTML;
var bottomContents=this._bottomInfoDiv.innerHTML;this._topInfoDiv2.innerHTML="";this._bottomInfoDiv.innerHTML="";this._topInfoDiv2.innerHTML=bottomContents;
this._bottomInfoDiv.innerHTML=topContents}this.setBoardFlip(!this.boardFlip)};extendable._makeMove=function(fromId,areaId,additionalInfo){
var pieceId=this.gameSetup.areas[fromId].pieces[0];var capture=this.gameSetup.areas[areaId].pieces.length>0;this.moveListControl.removeResultNode();
if(this.moveListControl!==this.moveListControl._currentAlternateLine){var selectedNode=this.moveListControl._selectedNode;var curLine=this.moveListControl._currentAlternateLine;
while(curLine!==this.moveListControl){selectedNode+=curLine._atNode-1;curLine=this.moveListControl._currentAlternateLine._parentLine;
}this.moveListControl.promoteVariation(this.moveListControl._currentAlternateLine,this);this.moveListControl.selectNode(selectedNode);
useFen(this.gameSetup,this.moveListControl.getSelectedFen())}if(this.moveListControl._moveNodes.length>this.moveListControl._selectedNode+1){
this.moveListControl._moveNodes.length=this.moveListControl._selectedNode+1;this.moveListControl.__refresh()}var correctMove=this.moveListControl.addNode(this.gameSetup,this.gameRules,{
fromAreaId:fromId,toAreaId:areaId,additionalInfo:additionalInfo,renderNode:this.gameRules._legalMoveCheck!=="off"});if(correctMove&&correctMove.moveFrom){
fromId=correctMove.moveFrom;areaId=correctMove.moveTo}this._cancelPieceId=pieceId;this._cancelAreaId=areaId;this._cancelAdditionalInfo=additionalInfo;
this.refresh();var encodedMove=this._moveEncoder.encodeMove(fromId,areaId,additionalInfo);if(!this._analyzeMode){this._setMoveMade(true,fromId,areaId);
if(this._moveOutputField){this._moveOutputField.value=encodedMove}}this.moveListControl.selectNode(this.moveListControl._moveNodes.length-1);
if(this._autoSubmit){this._setMoveMade(true,fromId,areaId);if(this._analyzeMode){this._moveMade=false}if(this._moveOutputField){this._moveOutputField.value=encodedMove;
}this.moveListControl.selectNode(this.moveListControl._moveNodes.length-1);this.moveListControl._currentStateNode=this.moveListControl._moveNodes.length-1;
this._markSquares();setTimeout("document.getElementById('"+this._submitButton.id+"').click();",10)}else{this._markSquares()}var moveText=!this._analyzeMode?this.moveListControl._currentAlternateLine._moveNodes[this.moveListControl._currentAlternateLine._moveNodes.length-1].moveText:this.moveListControl._currentAlternateLine._moveNodes[this.moveListControl._selectedNode].moveText;
if(moveText){this.Sounds.playMoveSound(moveText,false)}this.fireEvent("onMove",{encodedMove:encodedMove,fromId:fromId,areaId:areaId,
additionalInfo:additionalInfo,moveText:moveText})};extendable._jumpToCurrentState=function(){var forceJump=false;if(this.moveListControl._selectedNode!=this.moveListControl._currentStateNode&&!this._analyzeMode){
forceJump=true}if(!this._viewOnly&&forceJump){this._render.restoreDraggedPiece();this.goToCurrentState();return true}return false;
};extendable.goToCurrentState=function(){this.moveListControl.goToCurrentState();this.updateFromMove(this.moveListControl.getSelectedNode());
this._render.restoreDraggedPiece();this.refresh();this._unmarkPreviousMoveHints();this._markSquares()};extendable._setCurrentPosition=function(position,backUp){
this.moveListControl._currentStateNode=position;if(backUp){this.moveListControl._tempCurrentStateNode=position}};extendable.playMoveForwardBackwardSound=function(soundInterfaceFn,event){
var curNode=null;if(event.command==="forward1"||event.command==="playNext"){curNode=this.moveListControl._currentAlternateLine._moveNodes[this.moveListControl._selectedNode];
}if(event.command==="backward1"||event.command==="playPrevious"){curNode=this.moveListControl._currentAlternateLine._moveNodes[this.moveListControl._selectedNode+1];
}if(typeof event.prevSelectedNode!=="undefined"&&event.prevSelectedNode===this.moveListControl._selectedNode){return}if(curNode&&curNode.moveText&&!curNode.result){
soundInterfaceFn(curNode.moveText,false)}};if(!extendOpts.forLiveChess){extendable.toggleSounds=function(toggle){if(toggle){setTimeout(_bind(extendable.Sounds.loadAllSounds,extendable.Sounds),1);
}this._doSounds=toggle};extendable.setSoundTheme=function(theme){extendable.soundTheme=theme;extendable.Sounds.loadAllSounds(true);
};extendable.Sounds={_loadedSounds:{},_soundManager:null,chessViewer:extendable,loadAllSounds:function(reload){if(this._soundsLoaded&&!reload){
return}else if(reload&&this._getSoundManager()){this._getSoundManager().removeAllSounds()}this._soundsLoaded=true;this.loadSound("game-start");
this.loadSound("game-end");this.loadSound("capture");this.loadSound("castle");this.loadSound("premove");this.loadSound("move-self");
this.loadSound("move-check");this.loadSound("move-opponent");this.loadSound("promote");this.loadSound("notify");this.loadSound("tenseconds");
this.loadSound("illegal")},loadSound:function(code){if(this._getSoundManager()){var mp3SoundUrl=Config.AudioUrl+"_MP3_/"+extendable.soundTheme+"/"+code+".mp3";
var oggSoundUrl=Config.AudioUrl+"_OGG_/"+extendable.soundTheme+"/"+code+".ogg";this._loadedSounds[code]=true;this._getSoundManager()["loadSound"](code,[mp3SoundUrl,oggSoundUrl]);
}},playSound:function(code){if(this.chessViewer._doSounds){setTimeout(function(){if(this._loadedSounds[code]){this._getSoundManager().playSound(code);
}}.bind(this),1)}},playMoveSound:function(moveText,me){if(this.chessViewer._doSounds&&moveText){if(moveText.indexOf("#")>=0){this.playSound("move-check");
}else if(moveText.indexOf("+")>=0){this.playSound("move-check")}else if(moveText.indexOf("x")>=0){this.playSound("capture")}else if(moveText.indexOf("O-O")>=0){
this.playSound("castle")}else if(moveText.indexOf("=")>=0){this.playSound("promote")}else{this.playSound(me?"move-self":"move-opponent");
}}},_getSoundManager:function(){if(!this._soundManager){this._soundManager=window.getDefaultSoundManager()}return this._soundManager;
}};extendable.attachEvent("onMoveForwardBackward",extendable.playMoveForwardBackwardSound.bind(extendable,extendable.Sounds.playMoveSound.bind(extendable.Sounds)));
}extendable.updateCapturedPiecesControl=function(){this.capturedPiecesControl.refresh(this.gameSetup)};extendable._unmarkPreviousMoveHints=function(){
var previousMoveHints=this._previousMoveHints||[];for(var i=0;i<previousMoveHints.length;++i){this.unmarkArea(previousMoveHints[i]);
}this._previousMoveHints=[]};extendable._markLegalMoveHints=function(event){var pieceId=null;var moveHints=[];var fromId=event.dropTargetId||event.fromAreaId;
var premove=this._player&&!this._analyzeMode&&this.gameSetup.flags["sm"]!==this._player&&this._withPremoves;var gameSetup=premove?this.premoveGameSetup:this.gameSetup;
this._previousMovehintsTarget=null;if(this.highlightLegalMoves&&this.gameRules._legalMoveCheck!=="off"&&!event.isRightClick){var area=gameSetup.areas[fromId];
if(!area){return}pieceId=area.pieces[0];if(pieceId){moveHints=this.gameRules.getLegalMoves(pieceId,gameSetup,premove?"minimal":null);
}for(var i=0;i<moveHints.length;++i){this.markArea(moveHints[i],this.highlightLegalMovesColor,false,false,true)}this._previousMoveHints=moveHints;
this._previousMovehintsTarget=fromId}};extendable._onDropPiece=function(e){if(!this._enabled&&this._animating){this._render.restoreDraggedPiece();
return}var fromId=e["fromAreaId"];var areaId=e["targetAreaId"];var pieceDrop=e["pieceDrop"];if(fromId===areaId){this._unmarkPreviousMoveHints();
this._unmarkClickedPiece();this._clickedPieceElement=null;return}if(this._moveMade){this._cancelMove();return}if(this._jumpToCurrentState()){
return}this._unmarkPreviousMoveHints();this._unmarkClickedPiece();this._clickedPieceElement=null;if(!this.gameSetup.areas[fromId]||!this.gameSetup.areas[areaId]){
this._render.restoreDraggedPiece();return}var pieceId=this.gameSetup.areas[fromId].pieces[0];var capturePieceId=this.gameSetup.areas[areaId].pieces.length>0?this.gameSetup.areas[areaId].pieces[0]:null;
var capture=capturePieceId&&this.gameSetup.pieces[pieceId].color!==this.gameSetup.pieces[capturePieceId].color;if(typeof this.gameEditEnabled!=="undefined"){
this.gameRules.setPositionEditor(!this.gameEditEnabled)}var legalInfo=this.gameRules.isLegalMove(this.gameSetup,fromId,areaId);var canDrop=legalInfo?true:false;
if(this._analyzeMode&&this.gameRules._legalMoveCheck=="off"){this.gameSetup.flags["sm"]=this.gameSetup.pieces[pieceId].color}if(canDrop){
this._render.removeHoverSquare();if(legalInfo.pawnPromotion){this.showPromotionWindow(fromId,areaId)}else{if(this._animationType==="battle"){
var kingInCheck=false;var tempGameSetup=this.gameSetup.clone();tempGameSetup.areas[areaId]=tempGameSetup.areas[fromId];tempGameSetup.areas[fromId]={
pieces:[]};tempGameSetup.pieces[tempGameSetup.areas[areaId].pieces[0]].area=areaId;tempGameSetup.flags["sm"]=3-tempGameSetup.flags["sm"];
if(this.gameRules.isCheck(tempGameSetup)){kingInCheck=this.gameRules.getKingArea(tempGameSetup,tempGameSetup.flags["sm"])}this.animateMove(fromId,areaId,{
pieceDrop:pieceDrop,capture:capture?areaId:false,castling:legalInfo.castling,kingInCheck:kingInCheck,after:function(){this._makeMove(fromId,areaId,null);
}.bind(this)})}else{this._makeMove(fromId,areaId,null)}}}else{this._render.restoreDraggedPiece();if(fromId==areaId){this.unmarkInProgressMove();
}var kingInCheck=this.moveListControl.isKingInCheck(this.moveListControl._currentAlternateLine,this.moveListControl._selectedNode);
if(kingInCheck&&(!capturePieceId||capture)){this.blinkSquare(kingInCheck,this.rightClickMarkColors[0],3,200);this.Sounds.playSound("illegal");
}}};extendable._onStartDragging=function(e){this._unmarkClickedPiece();var fromId=e.fromAreaId;var squareColor=ChessColorScheme[this.colorScheme]&&ChessColorScheme[this.colorScheme][4]?ChessColorScheme[this.colorScheme][4]:this._markSquareColor;
if(this._markLastMove){this.markArea(fromId,squareColor)}this._clickedPieceElement=fromId;this._unmarkPreviousMoveHints();this._markLegalMoveHints(e);
};extendable._onClickPiece=function(e){if(this._viewOnly||!this._enabled){return}if(this.promotionWindowActive){var eventTarget=myEvent.getTarget(e);
if(!eventTarget.getAttribute("piece")){this.refresh();this.hidePromotionWindow();return}}if(this._moveMade){this._cancelMove();return;
}if(this._jumpToCurrentState()){return}this._unmarkPreviousMoveHints();this._markLegalMoveHints(e);if(this._clickedPieceElement){
this._onDropPiece({fromAreaId:this._clickedPieceElement,targetAreaId:e["dropTargetId"]});return}var fromId=e["dropTargetId"];this._unmarkClickedPiece();
var squareColor=ChessColorScheme[this.colorScheme]&&ChessColorScheme[this.colorScheme][4]?ChessColorScheme[this.colorScheme][4]:this._markSquareColor;
if(this._markLastMove){this.markArea(fromId,squareColor)}this._clickedPieceElement=fromId};extendable._onClickArea=function(e){if(this._viewOnly||!this._enabled){
return}if(this.promotionWindowActive){this.refresh();this.hidePromotionWindow();return}if(this._moveMade){this._cancelMove();return;
}if(this._jumpToCurrentState()){return}if(!this._clickedPieceElement){return}this._onDropPiece({fromAreaId:this._clickedPieceElement,
targetAreaId:e["dropTargetId"]})};extendable._onPromotionPieceSelected=function(e){this._makeMove(this.promotionWindowInfo.promotionWhatId,this.promotionWindowInfo.promotionWhereId,e["pieceType"]);
};extendable.attachEvent("onPromotionPieceSelected",extendable._onPromotionPieceSelected);extendable._setCaptureKeyStrokes=function(capture){
if(typeof myEvent.capturingBoard=="undefined"){myEvent.capturingBoard=this}if(capture){this._captureKeyStrokes=true;myEvent.observe(document,"keydown",chessBoardEngine._onKeyStrokeDown);
}else{this._captureKeyStrokes=false;myEvent.stopObserving(document,"keydown",chessBoardEngine._onKeyStrokeDown)}};extendable.deleteRemainingMoves=function(lineNum,moveNum){
var line=this.moveListControl.searchAlternateLine(lineNum);var node=moveNum-1;var parentNodeNum;if(node<0){node=0}if(lineNum=="0"){
this.moveListControl.setCurrentAlternateLine(this.moveListControl);line._moveNodes.length=node+1}else{if(node>0){this.moveListControl.setCurrentAlternateLine(line);
line._moveNodes.length=node+1}else{parentNodeNum=line._atNode;this.moveListControl.setCurrentAlternateLine(line._parentLine);for(var n=0;n<line._parentLine._moveNodes[parentNodeNum].alternates.length;n++){
if(line._parentLine._moveNodes[parentNodeNum].alternates[n].id==lineNum){line._parentLine._moveNodes[parentNodeNum].alternates.splice(n,1);
break}}node=parentNodeNum}}this.moveListControl.__refresh();this.moveListControl.selectNode(node);useFen(this.gameSetup,this.moveListControl.getSelectedFen());
this.refresh()};extendable.promoteVariation=function(lineNum,moveNum,leaveMainLineUnchanged){var altLine;var parentLine;var promotionMoves;
var insertAt;var oldMoves=[];var i;var finalSelectedNode;var otherLines;var firstComment="";var demotedLine;if(typeof lineNum==="string"){
altLine=this.moveListControl.searchAlternateLine(lineNum)}else{altLine=lineNum}if(altLine&&altLine._parentLine&&(!leaveMainLineUnchanged||altLine._parentLine._parentLine)){
promotionMoves=altLine._moveNodes;insertAt=altLine._atNode;parentLine=altLine._parentLine;if(insertAt===1){firstComment=parentLine._moveNodes[0].comment;
parentLine._moveNodes[0].comment=promotionMoves[0].comment}else if(promotionMoves[0].comment){parentLine._moveNodes[insertAt-1].comment=(parentLine._moveNodes[insertAt-1].comment+" "+promotionMoves[0].comment).trim();
}this.moveListControl.setCurrentAlternateLine(parentLine);if(altLine.id){for(i=0;i<parentLine._moveNodes[insertAt].alternates.length;i++){
if(parentLine._moveNodes[insertAt].alternates[i].id==altLine.id){parentLine._moveNodes[insertAt].alternates.splice(i,1);break}}otherLines=parentLine._moveNodes[insertAt].alternates;
parentLine._moveNodes[insertAt].alternates=[]}for(i=parentLine._moveNodes.length-1;i>=insertAt;i-=1){oldMoves.unshift(parentLine._moveNodes[i]);
}parentLine._moveNodes.length=insertAt;for(i=1;i<promotionMoves.length;i+=1){useFen(this.gameSetup,promotionMoves[i-1].fen);parentLine.addNode(this.gameSetup,this.gameRules,{
fromAreaId:promotionMoves[i].fromAreaId,toAreaId:promotionMoves[i].toAreaId,additionalInfo:promotionMoves[i].additionalInfo,makeMove:false,
comment:promotionMoves[i].comment,HTMLComment:promotionMoves[i].HTMLComment,moveClass:promotionMoves[i].moveClass,pgnText:promotionMoves[i].moveText,
timeInfo:promotionMoves[i].timeInfo});if(promotionMoves[i].alternates&&promotionMoves[i].alternates.length){promotionMoves[i].alternates.forEach(function oneach(line){
line._parentLine=parentLine;line._atNode=parentLine._moveNodes.length-1});parentLine._moveNodes[parentLine._moveNodes.length-1].alternates=promotionMoves[i].alternates;
}parentLine._moveNodes[parentLine._moveNodes.length-1].glyph=promotionMoves[i].glyph;parentLine._moveNodes[parentLine._moveNodes.length-1].evalGlyph=promotionMoves[i].evalGlyph;
}if(otherLines){for(i=0;i<otherLines.length;++i){useFen(this.gameSetup,promotionMoves[0].fen);this.moveListControl.insertAlternateLine(otherLines[i]._moveNodes,parentLine,insertAt-1);
}}finalSelectedNode=moveNum+insertAt-1;useFen(this.gameSetup,promotionMoves[0].fen);demotedLine=this.moveListControl.insertAlternateLine(oldMoves,parentLine,insertAt-1);
demotedLine._moveNodes[0].comment=firstComment;this.moveListControl["beginNode"]=null;this.moveListControl["focusNode"]=null;this.moveListControl["endNode"]=null;
if(typeof this.getSetup==="function"){this.getSetup()["beginNode"]="";this.getSetup()["focusNode"]="";this.getSetup()["endNode"]="";
}this.moveListControl.selectNode(finalSelectedNode);this.moveListControl._clearRender();this.moveListControl.__refresh();useFen(this.gameSetup,this.moveListControl.getSelectedFen());
this.refresh();this.promoteVariation(parentLine,finalSelectedNode,leaveMainLineUnchanged)}};extendable.addTimestamp=function(clocks,ply,timeIncrement){
if(!this._hasTimestamps()){return}if(typeof timeIncrement==="undefined"){timeIncrement=0}var playerUpdateIndex=(ply-1)%2;var timestamp=clocks[playerUpdateIndex]+timeIncrement;
if(typeof this._playerTimestamps[playerUpdateIndex][Math.ceil(ply/2)]==="undefined"){this._playerTimestamps[playerUpdateIndex].push(+timestamp);
}};extendable.updateTimestamp=function(clocks,ply){if(!this._hasTimestamps()){return}var changed=false;var playerUpdateIndex=(ply-1)%2;
var timestamp=clocks[playerUpdateIndex];var index=Math.ceil(ply/2);if(this._playerTimestamps[playerUpdateIndex][index]!==timestamp){
this._playerTimestamps[playerUpdateIndex][index]=timestamp;changed=true}return changed};extendable.getTimeInfo=function(ply){if(!this._hasTimestamps()){
return{}}var timeInfo={};var timeIncrement=+this._timeIncrement;var playerUpdateIndex=(ply-1)%2;var moveIndex=Math.ceil(ply/2);timeInfo.timestamp=this._playerTimestamps[playerUpdateIndex][moveIndex];
if(typeof timeInfo.timestamp==="undefined"){this._playerTimestamps[playerUpdateIndex][moveIndex]=this._playerTimestamps[playerUpdateIndex][moveIndex-1]-1;
timeInfo.timestamp=this._playerTimestamps[playerUpdateIndex][moveIndex]}if(ply<3){timeInfo.timeDelta=this._playerTimestamps[playerUpdateIndex][moveIndex-1]-timeIncrement-(this._playerTimestamps[playerUpdateIndex][moveIndex]-timeIncrement);
}else{timeInfo.timeDelta=this._playerTimestamps[playerUpdateIndex][moveIndex-1]-(this._playerTimestamps[playerUpdateIndex][moveIndex]-timeIncrement);
}return timeInfo};extendable._getTimeInfos=function(){if(!this._hasTimestamps()){return[]}var timeInfos=[];for(var i=1;i<this._playerTimestamps[0].length+this._playerTimestamps[1].length-1;i++){
timeInfos.push(this.getTimeInfo(i))}return timeInfos};extendable.setTimestamps=function(timestamps){this._moveTimestamps=timestamps;
if(this._moveTimestamps!==""){var timestamps=this._moveTimestamps.split(",");for(var ply=0;ply<timestamps.length;ply++){this._playerTimestamps[ply%2].push(+timestamps[ply]);
}}};extendable._initializeTimestamps=function(){if(!this._hasTimestamps()){return}this._playerTimestamps=[];this._playerTimestamps[0]=[+this._baseTime+ +this._timeIncrement];
this._playerTimestamps[1]=[+this._baseTime+ +this._timeIncrement];this.setTimestamps(this._moveTimestamps)};extendable._hasTimestamps=function(){
return typeof this._baseTime!=="undefined"&&typeof this._timeIncrement!=="undefined"};extendable._setVariant=function(code){var variant=Variants[code.toLowerCase()];
if(variant){this._variant=variant;this._moveEncoder=new(variant.MoveEncoder||StandardMoveEncoder);this.gameRules=new variant.Rules;
this.gameRules.setPositionEditor(false);this.gameSetup=new GameSetup;this.gameRules.defineAreas(this.gameSetup);this.fireEvent("onVariantChanged",this._variant);
}};extendable._formatClocks=function(deciseconds){var seconds=deciseconds>=10?Math.floor(deciseconds/10):0;deciseconds-=seconds*10;
var minutes=seconds>=60?Math.floor(seconds/60):0;seconds-=minutes*60;var timer="";timer+=minutes.toString();timer+=":";timer+=seconds>=10?seconds.toString():"0"+seconds.toString();
if(minutes===0&&seconds<10&&deciseconds>0){timer+="."+deciseconds.toFixed(0)}return timer};extendable._updateClocks=function(){var ply=this.moveListControl._selectedNode;
if(ply===0){this._clockWhiteElement.innerHTML=this._formatClocks(this._baseTime);this._clockBlackElement.innerHTML=this._formatClocks(this._baseTime);
return}if(this.resultClocks&&ply===this.moveListControl._moveNodes.length-1){this._clockWhiteElement.innerHTML=this._formatClocks(this.resultClocks[0]);
this._clockBlackElement.innerHTML=this._formatClocks(this.resultClocks[1]);return}this._updateClockByPly(ply);if(ply>1){this._updateClockByPly(ply-1);
}else{this._clockBlackElement.innerHTML=this._formatClocks(this._baseTime)}};extendable._updateClockByPly=function(ply){var playerUpdateIndex=(ply-1)%2;
var clockElement=playerUpdateIndex===0?extendable._clockWhiteElement:extendable._clockBlackElement;var timeInfo=this.getTimeInfo(ply);
if(timeInfo&&typeof timeInfo.timestamp==="number"&&!isNaN(timeInfo.timestamp)){clockElement.innerHTML=this._formatClocks(timeInfo.timestamp);
}};extendable._shouldUpdateClocks=function(){return this.moveListControl._timestampsVisible&&!!this._clockWhiteElement&&!!this._clockBlackElement;
};extendable.setGlyph=function(glyph,nodeNum){var node;if(typeof nodeNum!=="number"){nodeNum=this.moveListControl._selectedNode}node=this.moveListControl._currentAlternateLine._moveNodes[nodeNum];
node.glyph=Math.max(0,["","!","?","!!","??","!?","?!"].indexOf(glyph));this.moveListControl._clearRender();this.moveListControl.__refresh();
};extendable.setResult=function(result,clocks){var ply=this.moveListControl._moveNodes.length;if(clocks){this.resultClocks=clocks;
this.updateTimestamp(clocks,ply)}else{this.resultClocks=undefined}var timeInfo=this.getTimeInfo(ply);timeInfo.timeDelta=0;if(!this.pgnTags){
this.pgnTags={}}result=result||"*";if(result==="*"){this.moveListControl.removeResultNode();this.pgnTags["Result"]=result}else{this.pgnTags["Result"]=this.moveListControl.addResultNode(result,timeInfo);
}if(this._shouldUpdateClocks()){this._updateClocks()}};extendable.setPgnTag=function(name,value){if(!this.pgnTags){this.pgnTags={};
}if(typeof value==="undefined"){delete this.pgnTags[name]}else{this.pgnTags[name]=value}};extendable.getPgnTag=function(name){if(this.pgnTags){
return this.pgnTags[name]}};extendable.toggleClockUpdate=function(enabled,whiteClockElement,blackClockElement){if(enabled){if(whiteClockElement){
this._clockWhiteElement=whiteClockElement}if(blackClockElement){this._clockBlackElement=blackClockElement}if(this._shouldUpdateClocks()){
this.attachEvent("onMoveForwardBackward",this._updateClocks,this);this._updateClocks()}}else{this.detachEvent("onMoveForwardBackward",this._updateClocks,this);
}};extendable.getSideControls=function(){return this._sideControls};extendable.setSideControls=function(sideControls){this._sideControls=sideControls;
};extendable._getSideControlsWidth=function(boardSize){return this._sideControls?this._sideControls.calculateWidth(boardSize):0};if(extendable.opts["moveOutputField"]!=null){
extendable._moveOutputField=document.getElementById(extendable.opts["moveOutputField"])}if(extendable.opts["submitButton"]!=null){
extendable._submitButton=document.getElementById(extendable.opts["submitButton"])}if(extendable.opts["cancelButton"]!=null){extendable._cancelButton=document.getElementById(extendable.opts["cancelButton"]);
}if(extendable.opts["flipBoardButton"]!=null){extendable._flipBoardButton=document.getElementById(extendable.opts["flipBoardButton"]);
}if(extendable.opts["topInfoDiv"]!=null){extendable._topInfoDiv2=document.getElementById(extendable.opts["topInfoDiv"])}if(extendable.opts["bottomInfoDiv"]!=null){
extendable._bottomInfoDiv=document.getElementById(extendable.opts["bottomInfoDiv"])}if(extendable.opts["autoSubmit"]!=null){extendable._autoSubmit=extendable.opts["autoSubmit"];
}if(extendable.opts["initialSetup"]!=null){extendable._initialSetup=extendable.opts["initialSetup"]}if(extendable.opts["pgnBodyElement"]!=null){
extendable._pgnBodyElement=document.getElementById(extendable.opts["pgnBodyElement"])}if(extendable.opts["moves"]!=null){extendable._moveString=extendable.opts["moves"];
}if(typeof extendable.opts["moveTimestamps"]!=="undefined"){extendable._moveTimestamps=extendable.opts["moveTimestamps"]}if(typeof extendable.opts["baseTime"]!=="undefined"){
extendable._baseTime=extendable.opts["baseTime"]}if(typeof extendable.opts["timeIncrement"]!=="undefined"){extendable._timeIncrement=extendable.opts["timeIncrement"];
}if(typeof extendable.opts["clockWhiteElement"]!=="undefined"){extendable._clockWhiteElement=document.getElementById(extendable.opts["clockWhiteElement"]);
}if(typeof extendable.opts["clockBlackElement"]!=="undefined"){extendable._clockBlackElement=document.getElementById(extendable.opts["clockBlackElement"]);
}if(extendable.opts["viewOnly"]!=null){extendable._viewOnly=extendable.opts["viewOnly"]}if(extendable.opts["analyzeMode"]!=null){
extendable._analyzeMode=extendable.opts["analyzeMode"]}if(typeof extendable.opts["markLastMove"]!="undefined"){extendable._markLastMove=extendable.opts["markLastMove"];
}if(extendable.opts["moveListControl"]!=null){extendable._moveListControl=extendable.opts["moveListControl"]}if(extendable.opts["sideControls"]){
extendable._sideControlsId=extendable.opts["sideControls"]}else{extendable._sideControlsId=extendable.rootName+"sideControls"}if(extendable.opts["capturedPiecesControl"]!=null){
extendable._capturedPiecesControl=extendable.opts["capturedPiecesControl"]}if(extendable.opts["moveInputField"]!=null){extendable._moveInputField=document.getElementById(extendable.opts["moveInputField"]);
}if(extendable.opts["captureKeyStrokes"]!=null){extendable._captureKeyStrokes=extendable.opts["captureKeyStrokes"]}if(extendable.opts["sounds"]!=null){
extendable._doSounds=extendable.opts["sounds"]}if(extendable.opts["shareMenuButton"]!=null){extendable._shareMenuButton=extendable.opts["shareMenuButton"];
}if(extendable.opts["shareMenuContainer"]!=null){extendable._shareMenuContainer=extendable.opts["shareMenuContainer"]}if(extendable.opts["shareMenuForcePgnDialog"]!=null){
extendable._shareMenuForcePgnDialog=extendable.opts["shareMenuForcePgnDialog"]}if(extendable.opts["shareMenuPgnDownloadType"]!=null){
extendable._shareMenuPgnDownloadType=extendable.opts["shareMenuPgnDownloadType"]}if(extendable.opts["shareMenuCustomUrl"]!=null){
extendable._shareMenuCustomUrl=extendable.opts["shareMenuCustomUrl"]}if(extendable.opts["shareMenuLabels"]!=null){extendable._shareMenuLabels=extendable.opts["shareMenuLabels"];
}if(extendable.opts["shareMenuPgnDownloadId"]!=null){extendable._shareMenuPgnDownloadId=extendable.opts["shareMenuPgnDownloadId"];
}if(extendable.opts["shareMenuPgnDownloadExtra"]!=null){extendable._shareMenuPgnDownloadExtra=extendable.opts["shareMenuPgnDownloadExtra"];
}if(extendable.opts["variant"]!=null){extendable._setVariant(extendable.opts["variant"])}if(extendOpts.doInit){extendable.moveListControl=new MoveListControl(extendable._moveListControl,extendable.rootName,extendable.opts);
extendable.toggleClockUpdate(true);if(extendable._capturedPiecesControl!=null){extendable.capturedPiecesControl=new CapturedPiecesControl(extendable._capturedPiecesControl,extendable.gameSetup);
extendable.attachEvent("onRefresh",extendable.updateCapturedPiecesControl,extendable)}if(extendable._analyzeMode){extendable.setViewOnly(false);
}if(extendable._shareMenuContainer){extendable.shareMenuControl=new ShareMenuControl({rootName:extendable.rootName,moveListControl:extendable.moveListControl,
shareButton:extendable._shareMenuButton,container:extendable._shareMenuContainer,closerContainer:extendable._shareMenuContainer,forcePgnDialog:extendable._shareMenuForcePgnDialog?true:false,
pgnData:extendable._pgnBodyElement?extendable._pgnBodyElement.innerHTML:null,customUrl:extendable._shareMenuCustomUrl?extendable._shareMenuCustomUrl:null,
pgnDownloadType:extendable._shareMenuPgnDownloadType?extendable._shareMenuPgnDownloadType:null,shareMenuLabels:extendable._shareMenuLabels?extendable._shareMenuLabels:null,
pgnDownloadId:extendable._shareMenuPgnDownloadId?extendable._shareMenuPgnDownloadId:null,pgnDownloadExtra:extendable._shareMenuPgnDownloadExtra?extendable._shareMenuPgnDownloadExtra:null,
pgnHasTimestamps:extendable._hasTimestamps()})}extendable._setMoveMade(false);extendable._initBoard();if(extendable._doSounds){setTimeout(extendable.Sounds.loadAllSounds.bind(extendable.Sounds),1);
}if(extendable._cancelButton){myEvent.registerRelated(extendable._cancelButton.id,extendable.rootName);myEvent.observe(extendable._cancelButton,"click",chessBoardEngine._cancelMove);
}if(extendable._flipBoardButton){extendable._flipBoardButton.checked=extendable.boardFlip;myEvent.registerRelated(extendable._flipBoardButton.id,extendable.rootName);
myEvent.observe(extendable._flipBoardButton,"click",chessBoardEngine._flipBoard)}if(extendable._moveInputField){myEvent.registerRelated(extendable._moveInputField.id,extendable.rootName);
myEvent.observe(extendable._moveInputField,"change",chessBoardEngine._makeInputMove)}if(extendable._captureKeyStrokes){extendable._setCaptureKeyStrokes(true);
}}};chessBoardEngine._cancelMove=function(e){if(!e){e=window.event}var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}var currentTarget=target;var obj=null;var body=document.getElementsByTagName("body")[0];while(obj==null){
var targetBoardId=myEvent.findRelated(currentTarget.id);obj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;if(obj==null){
currentTarget=currentTarget.parentNode;if(currentTarget==body){myEvent.preventDefault(e,true);return false}}}obj._cancelMove();myEvent.preventDefault(e,true);
return false};chessBoardEngine._flipBoard=function(e){if(!e){e=window.event}var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}var targetBoardId=myEvent.findRelated(target.id);var obj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;
obj._flipBoard()};chessBoardEngine._makeInputMove=function(e){if(!e){e=window.event}var target=e.target?e.target:e.srcElement;if(target.nodeType==3){
target=target.parentNode}var targetBoardId=myEvent.findRelated(target.id);var obj=targetBoardId?document.getElementById(targetBoardId).chessBoard:null;
obj._makeInputMove();myEvent.preventDefault(e,true);return false};chessBoardEngine._onKeyStrokeDown=function(e){if(!e){e=window.event;
}var target=e.target?e.target:e.srcElement;if(target.nodeType==3){target=target.parentNode}if(target.nodeName.toLowerCase()!="input"&&target.nodeName.toLowerCase()!="textarea"&&typeof myEvent.capturingBoard!="undefined"&&!target._waitForNextMove){
if(!target._animationSpeed){target._animationSpeed=myEvent.capturingBoard._animationSpeed||0}var prevSelected=myEvent.capturingBoard.moveListControl._selectedNode;
e["prevSelectedNode"]=prevSelected;if(e.keyCode==39){myEvent.capturingBoard.moveListControl._moveForwardBackward("forward1",null,null,target._animationSpeed);
e["command"]="forward1";myEvent.capturingBoard.fireEvent("onMoveForwardBackward",e)}else if(e.keyCode==37){myEvent.capturingBoard.moveListControl._moveForwardBackward("backward1",null,null,target._animationSpeed);
e["command"]="backward1";myEvent.capturingBoard.fireEvent("onMoveForwardBackward",e)}else if(e.keyCode==38){myEvent.capturingBoard.moveListControl._moveForwardBackward("backwardBegin");
e["command"]="backwardBegin";myEvent.capturingBoard.fireEvent("onMoveForwardBackward",e)}else if(e.keyCode==40){myEvent.capturingBoard.moveListControl._moveForwardBackward("forwardEnd");
e["command"]="forwardEnd";myEvent.capturingBoard.fireEvent("onMoveForwardBackward",e)}else if(e.keyCode==88){myEvent.capturingBoard._flipBoard();
myEvent.preventDefault(e,true);return false}if(e.keyCode==39||e.keyCode==37){target._waitForNextMove=true;if(!target._keyMoveIntervalId){
target._movesMadeCount=0;target._keyMoveIntervalId=setInterval(function(){target._waitForNextMove=false;if(target._movesMadeCount>1){
clearInterval(target._keyMoveIntervalId);target._animationSpeed=.1;target._keyMoveIntervalId=setInterval(function(){target._waitForNextMove=false;
},150)}},500);myEvent.observe(document,"keyup",chessBoardEngine._onKeyStrokeUp)}}if(e.keyCode==39||e.keyCode==37||e.keyCode==38||e.keyCode==40){
target._movesMadeCount++;myEvent.preventDefault(e,true);return false}}};chessBoardEngine._onKeyStrokeUp=function(e){if(!e){e=window.event;
}var target=e.target?e.target:e.srcElement;if(target.nodeType==3){target=target.parentNode}if(target._keyMoveIntervalId){clearInterval(target._keyMoveIntervalId);
target._keyMoveIntervalId=null;target._waitForNextMove=false;target._movesMadeCount=0;target._animationSpeed=null;myEvent.stopObserving(document,"keyup",chessBoardEngine._onKeyStrokeUp);
}}});ChessCom(function(globals){if(globals.FenPgnEditorSetup){return}var FenPgnEditorSetup=globals.FenPgnEditorSetup=function FenPgnEditorSetup(setupString,opts){
if(!opts){opts={}}if(opts["pgnParser"]){this.pgnParser=opts["pgnParser"]}this.parse(setupString?setupString:this.getDefaultSetupString());
};FenPgnEditorSetup.prototype={reset:function(){this.tags={};this.diagramType=null;this.colorScheme=null;this.pieceStyle=null;this.boardFloat=null;
this.boardFlip=null;this.boardPrompt=null;this.boardCoords=null;this.boardSize=null;this.lastMove=null;this.moveListControl=null;this.commentBox=null;
this.hideGlobalButtons=null;this["focusNode"]=null;this["beginNode"]=null;this["endNode"]=null},parse:function(setupString){this.reset();
var setupValues=this.getSetupValues(setupString);this.pgnBody=setupValues["pgnbody"];this.diagramType=setupValues["diagramtype"];this.colorScheme=setupValues["colorscheme"];
this.pieceStyle=setupValues["piecestyle"];this.boardFloat=setupValues["float"];this.boardFlip=setupValues["flip"]=="true";this.boardPrompt=setupValues["prompt"]=="true";
this.boardCoords=setupValues["coords"]=="true";this.boardSize=1*setupValues["size"];this.lastMove=setupValues["lastmove"];this.hideGlobalButtons=setupValues["hideglobalbuttons"]=="true";
if(setupValues["movelistcontrol"]){this.moveListControl=setupValues["movelistcontrol"]}if(setupValues["commentbox"]){this.commentBox=setupValues["commentbox"];
}this["focusNode"]=setupValues["focusnode"];this["beginNode"]=setupValues["beginnode"];this["endNode"]=setupValues["endnode"]},getSetupValues:function(setuptext){
var result={};var nameFound=null;var value="";var split=setuptext.split("\n");for(var i=0;i<split.length;i++){split[i]=split[i].replace(/^\s+/,"").replace(/\s+$/,"");
if(nameFound){if(split[i].match("&-[a-z]+:")==null){if(value!="")value+="\n";value+=split[i]}}if(split[i].match("&-[a-z]+:")){if(value!=""){
if(value.indexOf("\n")!=-1)value+="\n";result[nameFound]=value}nameFound=split[i].substring(2,split[i].length-1);if(nameFound.indexOf(":")==nameFound.length-1)nameFound=nameFound.substring(0,nameFound.length-1);
value=""}}if(value!=""){if(value.indexOf("\n")!=-1)value+="\n";result[nameFound]=value}return result},toString:function(){var result="";
result+="&-diagramtype:\n"+this.diagramType+"\n";result+="&-colorscheme:\n"+this.colorScheme+"\n";result+="&-piecestyle:\n"+this.pieceStyle+"\n";
result+="&-float:\n"+this.boardFloat+"\n";result+="&-flip:\n"+(this.boardFlip?"true":"false")+"\n";result+="&-prompt:\n"+(this.boardPrompt?"true":"false")+"\n";
result+="&-coords:\n"+(this.boardCoords?"true":"false")+"\n";result+="&-size:\n"+this.boardSize+"\n";if(this.moveListControl){result+="&-movelistcontrol:\n"+this.moveListControl+"\n";
}if(this.commentBox){result+="&-commentbox:\n"+this.commentBox+"\n"}result+="&-lastmove:\n"+(this.lastMove?this.lastMove:"")+"\n";
result+="&-focusnode:\n"+(this["focusNode"]?this["focusNode"]:"")+"\n";result+="&-beginnode:\n"+(this["beginNode"]?this["beginNode"]:"")+"\n";
result+="&-endnode:\n"+(this["endNode"]?this["endNode"]:"")+"\n";result+="&-hideglobalbuttons:\n"+this.hideGlobalButtons+"\n";if(this.pgnBody)result+="&-pgnbody:\n"+this.pgnBody;else if(this.MLC)result+="&-pgnbody:\n"+this.MLC.printPgn(this.tags);
+"\n";return result},getDefaultSetupString:function(){var setup="";var dateString="????.??.??";setup+="&-diagramtype:\n";setup+="simpleDiagram\n";
setup+="&-colorscheme:\n";setup+="green\n";setup+="&-piecestyle:\n";setup+="neo\n";setup+="&-float:\n";setup+="left\n";setup+="&-flip:\n";
setup+="false\n";setup+="&-size:\n";setup+="45\n";setup+="&-lastmove:\n";setup+="\n";setup+="&-focusnode:\n";setup+="\n";setup+="&-beginnode:\n";
setup+="\n";setup+="&-endnode:\n";setup+="\n";setup+="&-hideglobalbuttons:\n";setup+="false\n";setup+="&-pgnbody:\n";setup+='[Event ""]\n';
setup+='[Site ""]\n';setup+='[Date "'+dateString+'"]\n';setup+='[Round ""]\n';setup+='[White ""]\n';setup+='[Black ""]\n';setup+='[Result "*"]\n';
setup+='[FEN "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"]\n';setup+="\n";setup+="*\n";return setup}}});ChessCom(function(globals){
if(globals.ChessBoardExtenders.extendToFenPgnEditor){return}var _bind=globals._bind;var insertContentAt=globals.insertContentAt;var ChessBoardExtenders=globals.ChessBoardExtenders;
var myEvent=globals.myEvent;var Variants=globals.Variants;var useFen=globals.useFen;var FenPgnEditorSetup=globals.FenPgnEditorSetup;
ChessBoardExtenders.extendToFenPgnEditor=function(extendable){var startingFen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
var manditory=["Event","Site","Date","Round","White","Black"];var originalSetup={type:"fen",data:startingFen};var draggingEventAdded;
var multiLinesEnabled=false;var preventMainLineMoves=false;extendable.isFenPgnEditor=true;ChessBoardExtenders.extendToEmailChess(extendable);
extendable._glyphOptionElements={};extendable.prepareSetup=function(){var tmpPgn=this.moveListControl.printPgn(this.getSetup().tags,true);
tmpPgn=tmpPgn.replace(/--/g," - ");this.getSetup().pgnBody=tmpPgn};extendable.createNewPieceDraggables=function(divNewPieces,chessBoard){
var piecesPath=Config.GfxUrl+Config.ChessBoardPiecesPath;var containerElem=document.getElementById(divNewPieces);var pieceStyle=chessBoard.pieceStyle;
var pieceImgFormat="png";var pieceSize=Math.max(Number(chessBoard.autoSize)||0,90);var pieceElSize=45;var chessPieceStyle=ChessPieceStyle[pieceStyle];
if(chessPieceStyle){pieceImgFormat=chessPieceStyle.imgFormat;pieceStyle=chessPieceStyle.imgPath}if(pieceStyle==="blindfold"){pieceStyle="alpha";
}containerElem.innerHTML="";var tab=[["bp","br","bn","bb","bq","bk"],["wp","wr","wn","wb","wq","wk"]];for(var j=0;j<tab.length;j++){
var rowTab=tab[j];for(var i=0;i<rowTab.length;i++){var pieceId=chessBoard.rootName+"_NEW_"+tab[j][i];insertContentAt(containerElem,'<img id="'+pieceId+'" class="'+chessBoard.rootName+'_piece chess_com_draggable"'+' src="'+piecesPath+"/"+pieceStyle+"/"+pieceSize+"/"+tab[j][i]+"."+pieceImgFormat+'" style="width: '+pieceElSize+"px; position: absolute; top: "+(13+(pieceElSize+3)*j)+"px; left: "+(3+(pieceElSize+3)*i)+'px;" />',"bottom");
if(!draggingEventAdded){myEvent.observe(containerElem,"mousedown",fenPgnEditorEngine._startDragging);myEvent.observe(containerElem,"touchstart",fenPgnEditorEngine._startDragging);
draggingEventAdded=true}}}};extendable.setSetup=function(setup,options){this._setup=setup;this._setup.MLC=this.moveListControl;this._setup.tags=this.moveListControl.parsePgn(this._setup.pgnBody,options);
this.setColorScheme(setup.colorScheme);this.setPieceStyle(setup.pieceStyle);if(this._setup["beginNode"])this.moveListControl["beginNode"]=this._setup["beginNode"];
if(this._setup["focusNode"])this.moveListControl["focusNode"]=this._setup["focusNode"];if(this._setup["endNode"])this.moveListControl["endNode"]=this._setup["endNode"];
this.moveListControl.__refresh();useFen(this.gameSetup,this.moveListControl.getSelectedFen());this.gameEditEnabled=this.moveListControl._moveNodes.length>1;
};extendable.getSetup=function(){return this._setup};extendable.onThrowPiece=function(e){var fromId=e["fromAreaId"];if(this.gameEditEnabled)return;
var pieceId=this.gameSetup.areas[fromId].pieces[0];var setupBackup=getFen(this.gameSetup);this.gameRules.clearArea(fromId,this.gameSetup);
if(!this.gameRules.isLegalPosition(this.gameSetup))this.doParseFen(setupBackup);this._clickedPieceElement=null;this._unmarkSquares();
this.refresh();this.moveListControl.setStartingPosition(getFen(this.gameSetup,this.gameRules));this.getSetup().tags["FEN"]=this.moveListControl._moveNodes[0].fen;
};extendable._makeMoveOrig=extendable._makeMove;extendable._makeMove=function(fromId,areaId,additionalInfo){if(multiLinesEnabled){
extendable._makeMoveAnalysis(fromId,areaId,additionalInfo)}else{extendable._makeMoveOrig(fromId,areaId,additionalInfo)}};extendable._makeMoveAnalysis=function(fromId,areaId,additionalInfo){
var pieceId=this.gameSetup.areas[fromId].pieces[0];var capture=this.gameSetup.areas[areaId].pieces.length>0;var node;if(!this.gameEditEnabled){
this.gameRules.makeMove(pieceId,areaId,this.gameSetup,additionalInfo,false,null);if(!this.gameRules.isLegalPosition(this.gameSetup))this.gameRules.takeBackMove(pieceId,areaId,this.gameSetup,additionalInfo,false);
this.refresh()}if(this.gameEditEnabled){var lineCreated=false;var possibleMoves=this.moveListControl.getNextMoves();var nextMove;if(this.moveListControl._currentAlternateLine._moveNodes.length===this.moveListControl._selectedNode+1&&preventMainLineMoves){
possibleMoves=possibleMoves.concat(this.moveListControl.getNextMoves(true))}possibleMoves.some(function(move){if(move.toAreaId===areaId&&move.fromAreaId===fromId&&move.additionalInfo===additionalInfo||move.moveText.substr(0,5)==="O-O-O"&&move.fromAreaId===fromId&&areaId.charCodeAt(0)-fromId.charCodeAt(0)<-1||move.moveText.substr(0,3)==="O-O"&&move.moveText.substr(0,4)!=="O-O-"&&move.fromAreaId===fromId&&areaId.charCodeAt(0)-fromId.charCodeAt(0)>1){
nextMove=move;return true}});if(nextMove){this.moveListControl.setCurrentLine(nextMove.lineID,nextMove.id)}else{if(this.moveListControl._currentAlternateLine._moveNodes.length>this.moveListControl._selectedNode+1){
this.moveListControl.setCurrentAlternateLine(this.moveListControl.createAlternateLine(this.moveListControl._currentAlternateLine,this.moveListControl._selectedNode+1));
lineCreated=true}else if(preventMainLineMoves&&this.moveListControl._currentAlternateLine.id==="0"){extendable.insertNewLine(this.moveListControl._currentAlternateLine.id,this.moveListControl._selectedNode);
}this.moveListControl._currentAlternateLine.addNode(this.gameSetup,this.gameRules,{fromAreaId:fromId,toAreaId:areaId,additionalInfo:additionalInfo
});if(lineCreated){this.moveListControl.__refresh()}this.moveListControl.selectNode(this.moveListControl._currentAlternateLine._moveNodes.length-1);
}useFen(this.gameSetup,this.moveListControl.getSelectedFen());this.refresh();node=this.moveListControl.getSelectedNode();extendable.Sounds.playMoveSound(node.moveText,node.fen.split(" ")[1]==="b");
}else{this.doParseFen(getFen(this.gameSetup,this.gameRules))}this._markSquares()};extendable.doParseFen=function(fen){var tags;this._initBoard(fen);
tags=this.getSetup().tags;if(fen===startingFen){delete tags["FEN"];delete tags["SetUp"]}else{tags["FEN"]=fen;tags["SetUp"]="1"}originalSetup={
type:"fen",data:fen}};extendable.doParsePgn=function(pgnBody){var setup=this.getSetup();var options={};var gameEditEnabled=this.gameEditEnabled;
options.legalMoveCheck=this.gameRules._legalMoveCheck;options.legalPositionCheck=this.gameRules._legalPositionCheck;setup.tags={};
this.moveListControl.__clear();this.moveListControl.__refresh();this.moveListControl.setStartingPosition(startingFen);useFen(this.gameSetup,startingFen);
this.setGameEditEnabled(true);setup.tags=this.moveListControl.parsePgn(pgnBody,{legalMoveCheck:"full",legalPositionCheck:"analysis"
});if(setup.tags["Variant"]==="Chess960"||setup.tags["Variant"]==="Fischerandom"){this._setVariant(Variants.chess960.code);this.gameRules=new GameRules.Chess960Editor(options);
}else{this._setVariant(Variants.chess.code);this.gameRules=new GameRules.ChessEditor(options)}this.setGameEditEnabled(gameEditEnabled);
this.moveListControl.__refresh();this.refresh();originalSetup={type:"pgn",data:pgnBody};return this.moveListControl.pgnParser.getLastErrorMessage();
};extendable.commentUpdate=function(comment,position){var currentNode=this.moveListControl._currentAlternateLine._moveNodes[this.moveListControl._selectedNode];
switch(position){case"after":currentNode.comment=comment;break;case"before":if(this.moveListControl._selectedNode==0){currentNode.comment=comment;
}else{this.moveListControl._currentAlternateLine._moveNodes[this.moveListControl._selectedNode-1].comment=comment}break;case"position":
this.moveListControl._currentAlternateLine._moveNodes[0].comment=comment;break}this.moveListControl.__refresh()};extendable.getCaption=function(){
return this.moveListControl._currentAlternateLine._moveNodes[0].comment};extendable.setMoveGlyph=function(node,glyph){node.glyph=Math.max(0,["","!","?","!!","??","!?","?!"].indexOf(glyph));
this.moveListControl._clearRender();this.moveListControl.__refresh()};extendable.setMoveEvalGlyph=function(node,glyph){var evalGlyphObj={
0:"",10:"=",14:"&#x2a72;",15:"&#x2a71;",16:"&plusmn;",17:"&#8723;",18:"+-",19:"-+",13:"&infin;",22:"&#x2A00;",146:"N"};for(var x in evalGlyphObj){
if(evalGlyphObj[x]==glyph){node.evalGlyph=x;break}}this.moveListControl._clearRender();this.moveListControl.__refresh()};extendable.tagNode=function(moveNum,tag){
var oldTaggedNode;var beginNode;var focusNode;var endNode;if(moveNum===0)return;oldTaggedNode=this.moveListControl[tag+"Node"];if(oldTaggedNode){
this.moveListControl[tag+"Node"]=null}if(oldTaggedNode!==moveNum){this.moveListControl[tag+"Node"]=moveNum;beginNode=this.moveListControl.beginNode;
focusNode=this.moveListControl.focusNode;endNode=this.moveListControl.endNode;if(beginNode&&focusNode&&beginNode>focusNode){this.moveListControl[tag+"Node"]=null;
}if(beginNode&&endNode&&beginNode>endNode){this.moveListControl[tag+"Node"]=null}if(focusNode&&endNode&&focusNode>endNode){this.moveListControl[tag+"Node"]=null;
}}this.getSetup()[tag+"Node"]=this.moveListControl[tag+"Node"]?String(moveNum):"";this.moveListControl._clearRender();this.moveListControl.__refresh();
};extendable.getTaggedNodes=function(){return{beginNode:this.moveListControl.beginNode,focusNode:this.moveListControl.focusNode,endNode:this.moveListControl.endNode
}};extendable.getNode=function(lineNum,moveNum){var line=this.moveListControl.searchAlternateLine(lineNum);if(line){return line._moveNodes[moveNum];
}};extendable.deleteRemainingMoves=function(lineNum,moveNum){var origLine=this.moveListControl._currentAlternateLine;var origMoveNum=this.moveListControl._selectedNode;
var newLine;var newModeNum;var line=this.moveListControl.searchAlternateLine(lineNum);var node=moveNum-1;var parentNodeNum;if(node<0)node=0;
if(!line._parentLine){if(Number(this.getSetup()["beginNode"])>node){this.getSetup()["beginNode"]="";this.moveListControl["beginNode"]=null;
}if(Number(this.getSetup()["focusNode"])>node){this.getSetup()["focusNode"]="";this.moveListControl["focusNode"]=null}if(Number(this.getSetup()["endNode"])>node){
this.getSetup()["endNode"]="";this.moveListControl["endNode"]=null}newLine=this.moveListControl;newMoveNum=node;line._moveNodes.length=node+1;
}else{if(node===1&&line._parentLine._moveNodes[line._atNode].moveText===line._moveNodes[1].moveText){node=0}if(node>0){line._moveNodes.length=node+1;
newLine=line;newMoveNum=node}else{parentNodeNum=line._atNode;this.moveListControl._clearRender();newLine=line._parentLine;newMoveNum=parentNodeNum;
for(var n=0;n<line._parentLine._moveNodes[parentNodeNum].alternates.length;n++){if(line._parentLine._moveNodes[parentNodeNum].alternates[n].id==lineNum){
line._parentLine._moveNodes[parentNodeNum].alternates.splice(n,1);break}}}}if(!this.moveListControl.searchAlternateLine(origLine.id,true)||origLine._moveNodes.length-1<origMoveNum){
this.moveListControl.setCurrentAlternateLine(newLine);this.moveListControl.selectNode(newMoveNum);useFen(this.gameSetup,this.moveListControl.getSelectedFen());
}this.refresh();this.moveListControl.__refresh()};extendable.getSiblingLineInfo=function getSiblingLineInfo(thisLine){var lines;var foundLine;
var res={};thisLine=thisLine||this.moveListControl._currentAlternateLine;if(thisLine&&thisLine._parentLine&&thisLine._parentLine._moveNodes&&thisLine._parentLine._moveNodes[thisLine._atNode]){
lines=thisLine._parentLine._moveNodes[thisLine._atNode].alternates}if(lines&&lines.length>1){lines.some(function(line){if(line===thisLine){
foundLine=true}else{if(foundLine){res.hasSiblingsAfter=true;return true}else{res.hasSiblingsBefore=true}}})}return res};extendable.moveVariation=function moveVariation(lineNum,moveUp){
var thisLine;var lines;var thisLineNumber;var toLineNumber;var tempLine;var curLine=this.moveListControl._currentAlternateLine;var curMove=this.moveListControl._selectedNode;
if(typeof lineNum==="string"){thisLine=this.moveListControl.searchAlternateLine(lineNum)}else{thisLine=lineNum}if(thisLine&&thisLine._parentLine&&thisLine._parentLine._moveNodes&&thisLine._parentLine._moveNodes[thisLine._atNode]){
lines=thisLine._parentLine._moveNodes[thisLine._atNode].alternates}if(lines&&lines.length>1){lines.some(function(line,i){if(line===thisLine){
thisLineNumber=i;return true}})}if(typeof thisLineNumber==="number"){toLineNumber=thisLineNumber+(moveUp?-1:1);tempLine=lines[toLineNumber];
if(tempLine){lines[toLineNumber]=lines[thisLineNumber];lines[thisLineNumber]=tempLine;this.moveListControl._clearRender();this.moveListControl.__refresh();
}}};extendable.tagUpdate=function(tagName,value){if(value===""&&manditory.indexOf(tagName)>-1){if(tagName==="Date"){value="????.??.??";
}else{value="?"}}this.getSetup().tags[tagName]=value};extendable.getTags=function(){return this.getSetup().tags},extendable.getPgn=function(){
this.prepareSetup();return this.moveListControl.printPgn(this.getSetup().tags)};extendable.getInitialFen=function(){return this.moveListControl._moveNodes[0].fen;
};extendable.getFen=function(){return this.moveListControl.getSelectedFen()};extendable.setGameEditEnabled=function(enabled){this.gameEditEnabled=enabled;
this.gameRules.setPositionEditor(!enabled);this.gameRules._legalMoveCheck=enabled?"full":"off";this.gameRules._legalPositionCheck=enabled?"analysis":"pawns";
};extendable.setCastling=function(castling){this.gameSetup.flags["cs"]=castling.wk+castling.wq+castling.bk+castling.bq;this.doParseFen(getFen(this.gameSetup,this.gameRules));
};extendable.getCastling=function(){return{wk:this.gameSetup.flags["cs"][0]==="-"?"-":"k",wq:this.gameSetup.flags["cs"][1]==="-"?"-":"q",
bk:this.gameSetup.flags["cs"][2]==="-"?"-":"K",bq:this.gameSetup.flags["cs"][3]==="-"?"-":"Q"}};extendable.setSideToMove=function(sideToMove){
this.gameSetup.flags["sm"]=sideToMove==="white"?1:2;this.doParseFen(getFen(this.gameSetup,this.gameRules));if(this.gameSetup.flags["sm"]==1)this.moveListControl.startsWithBlack=false;else this.moveListControl.startsWithBlack=true;
};extendable.getSideToMove=function(){return this.moveListControl.startsWithBlack?"black":"white"};extendable.getMovesCount=function(){
return this.moveListControl._moveNodes.length-1};extendable.getSetupConfig=function(){var setup=this.getSetup();return{colorScheme:setup.colorScheme,
pieceStyle:setup.pieceStyle,boardCoords:setup.boardCoords,boardFlip:setup.boardFlip,pgnBody:setup.pgnBody,diagramType:setup.diagramType
}};extendable.setBoardPrompt=function(boardPrompt){this.getSetup().boardPrompt=boardPrompt};extendable.setDiagramType=function(diagramType){
this.getSetup().diagramType=diagramType};extendable.setTextSetup=function(textSetup){originalSetup={type:"text",data:textSetup};this.setSetup(new FenPgnEditorSetup(textSetup),{
legalMoveCheck:this.gameRules._legalMoveCheck,legalPositionCheck:this.gameRules._legalPositionCheck})};extendable.getTextSetup=function(){
this.getSetup().pgnBody=null;return this.getSetup().toString()};extendable.resetBoard=function(){this.doParsePgn('[Result "*"]\n\n*');
this.clearMoveList()};extendable.clearBoard=function(){this.doParseFen("8/8/8/8/8/8/8/8 w - - 0 1");this.clearMoveList()};extendable.pasteFenString=function(fen){
var valid=false;try{this.doParseFen(fen);valid=true}catch(e){this._fixBoard()}if(valid){this.getCastling();this._refresh()}return valid;
};extendable.pastePgnString=function(pgn){var valid=false;var error;try{error=this.doParsePgn(pgn);if(!error){valid=true}}catch(e){
this._fixBoard()}if(valid){this.getCastling();this._refresh()}return valid};extendable.clearMoveList=function(){this.getSetup()["beginNode"]="";
this.getSetup()["focusNode"]="";this.getSetup()["endNode"]="";this.moveListControl["beginNode"]=null;this.moveListControl["focusNode"]=null;
this.moveListControl["endNode"]=null;this.moveListControl.__clear();this._refresh()};extendable._fixBoard=function(){this.moveListControl.__clear();
this.moveListControl._moveNodes[0].fen=startingFen;this.moveListControl.startsWithBlack=false;useFen(this.gameSetup,this.moveListControl._moveNodes[0].fen);
this.doParseFen(startingFen);this.moveListControl.selectNode(this.moveListControl._moveNodes.length-1);this._refresh()};extendable._refresh=function(){
this.refresh();this.moveListControl.__refresh()};extendable.isLegalPosition=function(){var isGameEditEnabled=this.gameEditEnabled;
var isLegal;if(!isGameEditEnabled){this.setGameEditEnabled(true)}isLegal=this.gameRules.isLegalPosition(this.gameSetup);if(!isGameEditEnabled){
this.setGameEditEnabled(false)}return Boolean(isLegal)};extendable.playpause=function(el){this.moveListControl.playPause(500,"forward",Boolean(el),.2,el);
};function attachComment(lineNum,moveNum,before,options){try{var el=extendable.moveListControl.getCommentEl(lineNum,moveNum,before);
}catch(err){return false}function stripBrackets(str){return str.replace(/\s*[{}]+\s*/g," ").trim()}if(el){var usePlaceholder=options&&options.placeHolder;
el.style.display="inline";if(el.contentEditable!=="true"){el.contentEditable="true";function clearPlaceholder(){var placeHolder=document.getElementById(el.id+"_placeholder");
if(placeHolder){el.removeChild(placeHolder)}}function convertToPlainText(){clearPlaceholder();var textContent=stripBrackets(el.textContent);
var line=extendable.moveListControl.searchAlternateLine(lineNum);line._moveNodes[moveNum-(before?1:0)].comment=textContent.replace(/\u200B/g,"").trim();
}function stopKeyEvents(e){if(usePlaceholder)clearPlaceholder();e.stopPropagation();return false}function saveData(e){extendable.moveListControl.saveMoveList();
return stopKeyEvents(e)}function onPaste(){if(usePlaceholder)clearPlaceholder();setTimeout(function(){var text=stripBrackets(el.textContent);
if(el.innerHTML!==text){el.innerHTML="";el.textContent=text}},0)}el.addEventListener("input",convertToPlainText,false);el.addEventListener("keydown",stopKeyEvents,false);
el.addEventListener("keypress",stopKeyEvents,false);el.addEventListener("keyup",saveData,false);el.addEventListener("paste",onPaste,false);
}if(!el.textContent){if(usePlaceholder){var placeholder=document.createElement("span");placeholder.setAttribute("id",el.id+"_placeholder");
placeholder.classList.add("analysisPlaceholder");placeholder.textContent=options.placeHolder;el.appendChild(placeholder)}else{el.textContent="​";
}}}return el}extendable.selectComment=function(lineNum,moveNum,before,options){var el=attachComment(lineNum,moveNum,before,options);
if(el){el.focus()}};extendable.attachEvent("onCommentElementAdded",function(e){if(e.comment){attachComment(e.lineNum,e.moveNum,e.before);
}},extendable);extendable.jumpToEnd=function(){this.moveListControl._moveForwardBackward("forwardEnd");useFen(this.gameSetup,this.moveListControl.getSelectedFen());
this.moveListControl.__refresh()};extendable.loadOriginalSetup=function(){if(originalSetup.type==="fen"){this.doParseFen(originalSetup.data);
}else if(originalSetup.type==="pgn"){this.doParsePgn(originalSetup.data)}else if(originalSetup.type==="text"){this.setTextSetup(originalSetup.data);
}else{return false}};extendable.insertNewLine=function(lineNum,moveNum){var parent=this.moveListControl.searchAlternateLine(lineNum);
var moveNode=parent._moveNodes[moveNum];var newLine;this.moveListControl.setCurrentLine(lineNum,moveNum-1);this.moveListControl.__refresh();
newLine=this.moveListControl.insertAlternateLine([{fromAreaId:moveNode.fromAreaId,toAreaId:moveNode.toAreaId,additionalInfo:moveNode.additionalInfo
}],parent,moveNum-1);this.moveListControl.setCurrentLine(newLine.id,1);this.moveListControl.__refresh();this.moveListControl.selectNode(1);
};extendable.initDraggablePieces=function(elID){var chessboard=this;function createPieces(){extendable.createNewPieceDraggables(elID,chessboard);
}createPieces();extendable.attachEvent("onSetPieceStyle",createPieces);extendable.attachEvent("onDynamicResize",createPieces)};extendable.setMultiLines=function(enabled){
multiLinesEnabled=Boolean(enabled)};extendable.getMultiLines=function(){return multiLinesEnabled};extendable.setPreventMainLineMoves=function(enabled){
preventMainLineMoves=Boolean(enabled)};extendable.getNextMoves=function(getEndOfLineMoves){return this.moveListControl.getNextMoves(getEndOfLineMoves);
};extendable.getPreventMainLineMoves=function(){return preventMainLineMoves};extendable.getFenPgnEditorAPI=function(){return{tagUpdate:_bind(this.tagUpdate,this),
setMoveGlyph:_bind(this.setMoveGlyph,this),setMoveEvalGlyph:_bind(this.setMoveEvalGlyph,this),tagNode:_bind(this.tagNode,this),getTaggedNodes:_bind(this.getTaggedNodes,this),
getNode:_bind(this.getNode,this),selectComment:_bind(this.selectComment,this),deleteRemainingMoves:_bind(this.deleteRemainingMoves,this),
promoteVariation:_bind(this.promoteVariation,this),getSiblingLineInfo:_bind(this.getSiblingLineInfo,this),moveVariation:_bind(this.moveVariation,this),
doParseFen:_bind(this.doParseFen,this),doParsePgn:_bind(this.doParsePgn,this),getTags:_bind(this.getTags,this),commentUpdate:_bind(this.commentUpdate,this),
getSelectedNode:_bind(this._getSelectedMoveNode,this),getPgn:_bind(this.getPgn,this),getFen:_bind(this.getFen,this),getInitialFen:_bind(this.getInitialFen,this),
setGameEditEnabled:_bind(this.setGameEditEnabled,this),setChessBoardEnabled:_bind(this.setEnabled,this),setCastling:_bind(this.setCastling,this),
getCastling:_bind(this.getCastling,this),getMovesCount:_bind(this.getMovesCount,this),getCaption:_bind(this.getCaption,this),setBoardPrompt:_bind(this.setBoardPrompt,this),
getSetupConfig:_bind(this.getSetupConfig,this),isLegalPosition:_bind(this.isLegalPosition,this),jumpToEnd:_bind(this.jumpToEnd,this),
loadOriginalSetup:_bind(this.loadOriginalSetup,this),makeMove:_bind(this._makeMove,this),insertNewLine:_bind(this.insertNewLine,this),
initDraggablePieces:_bind(this.initDraggablePieces,this),setMultiLines:_bind(this.setMultiLines,this),getMultiLines:_bind(this.getMultiLines,this),
setPreventMainLineMoves:_bind(this.setPreventMainLineMoves,this),getPreventMainLineMoves:_bind(this.getPreventMainLineMoves,this),
setColorScheme:_bind(this.setColorScheme,this),setPieceStyle:_bind(this.setPieceStyle,this),setBoardSize:_bind(this.setBoardSize,this),
setBoardFlip:_bind(this.setBoardFlip,this),setBoardCoords:_bind(this.setBoardCoords,this),setDiagramType:_bind(this.setDiagramType,this),
setTextSetup:_bind(this.setTextSetup,this),getTextSetup:_bind(this.getTextSetup,this),setSideToMove:_bind(this.setSideToMove,this),
getSideToMove:_bind(this.getSideToMove,this),resetBoard:_bind(this.resetBoard,this),clearBoard:_bind(this.clearBoard,this),pasteFenString:_bind(this.pasteFenString,this),
pastePgnString:_bind(this.pastePgnString,this),clearMoveList:_bind(this.clearMoveList,this),playpause:_bind(this.playpause,this),
getNextMoves:_bind(this.getNextMoves,this)}};extendable.rootElement.fenPgnEditorAPI=extendable.getFenPgnEditorAPI();extendable._setup=null;
extendable.setAnalysisBoard(true);extendable.attachEvent("onSetColorScheme",function(e){this.getSetup().colorScheme=this.colorScheme;
},extendable);extendable.attachEvent("onSetPieceStyle",function(e){this.getSetup().pieceStyle=this.pieceStyle},extendable);extendable.attachEvent("onBeforeSetPieceStyle",function(e){
this.getSetup().pieceStyle=this.pieceStyle},extendable);extendable.attachEvent("onBeforeSetColorScheme",function(e){this.getSetup().colorScheme=this.colorScheme;
},extendable);extendable.attachEvent("onSetBoardSize",function(e){this.getSetup().boardSize=this.boardSize},extendable);extendable.attachEvent("onSetBoardFlip",function(e){
this.getSetup().boardFlip=this.boardFlip},extendable);extendable.attachEvent("onSetBoardCoords",function(e){this.getSetup().boardCoords=this.boardCoords;
},extendable);extendable.attachEvent("onThrowPiece",extendable.onThrowPiece,extendable);extendable.gameEditEnabled=false;extendable.setSetup(new FenPgnEditorSetup);
};var fenPgnEditorEngine={dragSys:{origObj:null,activeObj:null,x:0,y:0,scrollX:0,scrollY:0,offsetx:0,offsety:0,cacheBoard:null,_dragInProgress:false
},_doneDragging:function(){if(fenPgnEditorEngine.dragSys.origObj){fenPgnEditorEngine.dragSys.origObj.style.visibility="visible";fenPgnEditorEngine.dragSys.origObj=null;
}if(fenPgnEditorEngine.dragSys.activeObj){document.body.removeChild(fenPgnEditorEngine.dragSys.activeObj);fenPgnEditorEngine.dragSys.activeObj=null;
}fenPgnEditorEngine._dragInProgress=false},_getPointer:function(e){return{x:e.pageX||e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft),
y:e.pageY||e.clientY+(document.documentElement.scrollTop||document.body.scrollTop)}},_startDragging:function(e){if(!e)e=window.event;
var target=myEvent.getTarget(e);var box;var pointer;if(target.nodeName.toUpperCase()!="IMG"){myEvent.preventDefault(e,true);return false;
}var curOffsetParent=document.getElementById("divNewPieces");fenPgnEditorEngine.dragSys.cacheBoard=document.getElementById(target.id.split("_")[0]).chessBoard;
if(!fenPgnEditorEngine._dragInProgress&&e.button!=2){fenPgnEditorEngine._dragInProgress=true;fenPgnEditorEngine.dragSys.origObj=target;
fenPgnEditorEngine.dragSys.activeObj=target.cloneNode();fenPgnEditorEngine.dragSys.activeObj.id="fenPgnEditorFloatingPiece";document.body.appendChild(fenPgnEditorEngine.dragSys.activeObj);
box=fenPgnEditorEngine.dragSys.origObj.getBoundingClientRect();pointer=fenPgnEditorEngine._getPointer(e);fenPgnEditorEngine.dragSys.x=pointer.x;
fenPgnEditorEngine.dragSys.y=pointer.y;fenPgnEditorEngine.dragSys.scrollX=window.pageXOffset;fenPgnEditorEngine.dragSys.scrollY=window.pageYOffset;
fenPgnEditorEngine.dragSys.offsetx=pointer.x-box.left;fenPgnEditorEngine.dragSys.offsety=pointer.y-box.top;fenPgnEditorEngine.dragSys.activeObj.style.left=pointer.x-fenPgnEditorEngine.dragSys.offsetx+"px";
fenPgnEditorEngine.dragSys.activeObj.style.top=pointer.y-fenPgnEditorEngine.dragSys.offsety+"px";myEvent.observe(document,"mousemove",fenPgnEditorEngine._movePiece);
myEvent.observe(document,"touchmove",fenPgnEditorEngine._movePiece);myEvent.observe(document,"mouseup",fenPgnEditorEngine._dropPiece);
myEvent.observe(document,"touchend",fenPgnEditorEngine._dropPiece);fenPgnEditorEngine.dragSys.origObj.style.visibility="hidden";fenPgnEditorEngine.dragSys.activeObj.style.transform="translate("+(pointer.x-box.left-box.width/2-window.pageXOffset)+"px, "+(pointer.y-box.top-box.height/2-window.pageYOffset)+"px) "+"scale("+fenPgnEditorEngine.dragSys.cacheBoard.autoSize/45+","+fenPgnEditorEngine.dragSys.cacheBoard.autoSize/45+")";
}else{fenPgnEditorEngine._doneDragging()}myEvent.preventDefault(e,true);if(typeof e.stopPropagation==="function"){e.stopPropagation();
}return false},_movePiece:function(e){e=e||window.event;var pointer=fenPgnEditorEngine._getPointer(e);fenPgnEditorEngine.dragSys.x=pointer.x-fenPgnEditorEngine.dragSys.offsetx+(fenPgnEditorEngine.dragSys.scrollX-window.pageXOffset);
fenPgnEditorEngine.dragSys.y=pointer.y-fenPgnEditorEngine.dragSys.offsety+(fenPgnEditorEngine.dragSys.scrollY-window.pageYOffset);
fenPgnEditorEngine.dragSys.activeObj.style.left=fenPgnEditorEngine.dragSys.x+"px";fenPgnEditorEngine.dragSys.activeObj.style.top=fenPgnEditorEngine.dragSys.y+"px";
fenPgnEditorEngine._dragInProgress=true;if(typeof e.preventDefault==="function"){e.preventDefault()}e.returnValue=false;if(typeof e.stopPropagation==="function"){
e.stopPropagation()}e.cancelBubble=true;if(e.ctrlKey&&e.shiftKey){fenPgnEditorEngine._dropPiece(e)}return false},_dropPiece:function(e){
e=e||window.event;var obj=fenPgnEditorEngine.dragSys.cacheBoard;var target=myEvent.getTarget(e);var originalFen;if(!e.shiftKey){myEvent.stopObserving(document,"mousemove",fenPgnEditorEngine._movePiece);
myEvent.stopObserving(document,"touchmove",fenPgnEditorEngine._movePiece);myEvent.stopObserving(document,"mouseup",fenPgnEditorEngine._dropPiece);
myEvent.stopObserving(document,"touchend",fenPgnEditorEngine._dropPiece)}obj.calculateBoardOffset();if(fenPgnEditorEngine._dragInProgress){
var rows=[8,7,6,5,4,3,2,1];var cols=["a","b","c","d","e","f","g","h"];if(obj.boardFlip){rows.reverse();cols.reverse()}var colRowPos=obj._render.getColRowPosition(fenPgnEditorEngine._getPointer(e));
var colIdx=colRowPos.col;var rowIdx=colRowPos.row;if(colIdx<=0||colIdx>cols.length||(rowIdx<=0||rowIdx>rows.length)){if(!e.shiftKey){
fenPgnEditorEngine._doneDragging()}myEvent.preventDefault(e,true);return false}if(obj.promotionWindowActive){if(!e.shiftKey){fenPgnEditorEngine._doneDragging();
}myEvent.preventDefault(e,true);return false}originalFen=obj.moveListControl._moveNodes[0].fen;var dropTargetId=cols[colIdx-1]+rows[rowIdx-1];
obj.gameRules.clearArea(dropTargetId,obj.gameSetup);var tId=fenPgnEditorEngine.dragSys.origObj.id.split("_")[2];obj.gameSetup.createPiece(tId.substr(0,1)==="w"?1:2,tId.substr(1,1),dropTargetId);
obj.refresh();obj.moveListControl.setStartingPosition(getFen(obj.gameSetup,obj.gameRules));obj.getSetup().tags["FEN"]=obj.moveListControl._moveNodes[0].fen;
if(!obj.gameRules.isLegalPosition(obj.gameSetup)){obj._initBoard(originalFen)}if(!e.shiftKey){fenPgnEditorEngine._doneDragging();fenPgnEditorEngine._dragInProgress=false;
}myEvent.preventDefault(e);if(typeof e.stopPropagation==="function"){e.stopPropagation()}return false}}}});ChessCom(function(globals){
var ChessBoard=globals.ChessBoard;var ChessBoardExtenders=globals.ChessBoardExtenders;globals.initChessViewers=function(e){var boards=document.getElementsByClassName("chess_viewer");
for(var n=0;n<boards.length;n++){ChessBoardExtenders.extendToFenPgnEditor(new ChessBoard(boards[n]))}}});