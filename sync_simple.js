/**
 * This file uses jQuery materials and hashchange plugin licensed under the MIT license
 * Portions, Copyright (c) 2010 "Cowboy" Ben Alman
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * Portions, Copyright 2012 jQueryFoundation and other contributors
 * http://jquery.com/
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var load_jquery=!0;"undefined"!==typeof jQuery&&"1.4.2"===jQuery.fn.jquery&&(load_jquery=!1);
!0===load_jquery&&(function(m,n){function X(){if(!c.isReady){try{j.documentElement.doScroll("left")}catch(a){setTimeout(X,1);return}c.ready()}}function za(a,b){b.src?c.ajax({url:b.src,async:!1,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function I(a,b,d,f,e,h){var g=a.length;if("object"===typeof b){for(var i in b)I(a,i,b[i],f,e,d);return a}if(d!==n){f=!h&&f&&c.isFunction(d);for(i=0;i<g;i++)e(a[i],b,f?d.call(a[i],i,e(a[i],b)):d,
h);return a}return g?e(a[0],b):n}function y(){return(new Date).getTime()}function J(){return!1}function K(){return!0}function Y(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function Z(a){var b,d=[],f=[],e=arguments,h,g,i,k,l,t;g=c.data(this,"events");if(!(a.liveFired===this||!g||!g.live||a.button&&"click"===a.type)){a.liveFired=this;var j=g.live.slice(0);for(k=0;k<j.length;k++)g=j[k],g.origType.replace(A,"")===a.type?f.push(g.selector):j.splice(k--,1);h=c(a.target).closest(f,a.currentTarget);
l=0;for(t=h.length;l<t;l++)for(k=0;k<j.length;k++)if(g=j[k],h[l].selector===g.selector){i=h[l].elem;f=null;if("mouseenter"===g.preType||"mouseleave"===g.preType)f=c(a.relatedTarget).closest(g.selector)[0];(!f||f!==i)&&d.push({elem:i,handleObj:g})}l=0;for(t=d.length;l<t;l++)if(h=d[l],a.currentTarget=h.elem,a.data=h.handleObj.data,a.handleObj=h.handleObj,!1===h.handleObj.origHandler.apply(h.elem,e)){b=!1;break}return b}}function $(a,b){return"live."+(a&&"*"!==a?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function aa(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var b=c.data(a[d++]),e=c.data(this,b);if(b=b&&b.events){delete e.handle;e.events={};for(var h in b)for(var g in b[h])c.event.add(this,h,b[h][g],b[h][g].data)}}})}function ba(a,b,d){var f,e,h,b=b&&b[0]?b[0].ownerDocument||b[0]:j;if(1===a.length&&"string"===typeof a[0]&&512>a[0].length&&b===j&&!ca.test(a[0])&&(c.support.checkClone||!da.test(a[0])))if(e=!0,h=c.fragments[a[0]])1!==h&&(f=h);f||(f=b.createDocumentFragment(),
c.clean(a,b,f,d));e&&(c.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:e}}function w(a,b){var d={};c.each(ea.concat.apply([],ea.slice(0,b)),function(){d[this]=a});return d}function fa(a){return"scrollTo"in a&&a.document?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var c=function(a,b){return new c.fn.init(a,b)},Aa=m.jQuery,Ba=m.$,j=m.document,F,Ca=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Da=/^.[^:#\[\.,]*$/,Ea=/\S/,Fa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Ga=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,z=navigator.userAgent,
ga=!1,C=[],x,L=Object.prototype.toString,M=Object.prototype.hasOwnProperty,N=Array.prototype.push,D=Array.prototype.slice,ha=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if("body"===a&&!b)return this.context=j,this[0]=j.body,this.selector="body",this.length=1,this;if("string"===typeof a){if((d=Ca.exec(a))&&(d[1]||!b)){if(d[1])return f=b?b.ownerDocument||b:j,(a=Ga.exec(a))?c.isPlainObject(b)?(a=
[j.createElement(a[1])],c.fn.attr.call(a,b,!0)):a=[f.createElement(a[1])]:(a=ba([d[1]],[f]),a=(a.cacheable?a.fragment.cloneNode(!0):a.fragment).childNodes),c.merge(this,a);if(b=j.getElementById(d[2])){if(b.id!==d[2])return F.find(a);this.length=1;this[0]=b}this.context=j;this.selector=a;return this}return!b&&/^\w+$/.test(a)?(this.selector=a,this.context=j,a=j.getElementsByTagName(a),c.merge(this,a)):!b||b.jquery?(b||F).find(a):c(b).find(a)}if(c.isFunction(a))return F.ready(a);a.selector!==n&&(this.selector=
a.selector,this.context=a.context);return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return D.call(this,0)},get:function(a){return null==a?this.toArray():0>a?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?N.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;"find"===b?f.selector=this.selector+(this.selector?" ":"")+d:b&&(f.selector=this.selector+"."+b+"("+d+")");return f},each:function(a,
b){return c.each(this,a,b)},ready:function(a){c.bindReady();c.isReady?a.call(j,c):C&&C.push(a);return this},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||c(null)},push:N,sort:[].sort,splice:[].splice};
c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=!1,e,h,g,i;"boolean"===typeof a&&(f=a,a=arguments[1]||{},b=2);"object"!==typeof a&&!c.isFunction(a)&&(a={});d===b&&(a=this,--b);for(;b<d;b++)if(null!=(e=arguments[b]))for(h in e)g=a[h],i=e[h],a!==i&&(f&&i&&(c.isPlainObject(i)||c.isArray(i))?(g=g&&(c.isPlainObject(g)||c.isArray(g))?g:c.isArray(i)?[]:{},a[h]=c.extend(f,g,i)):i!==n&&(a[h]=i));return a};c.extend({noConflict:function(a){m.$=Ba;a&&(m.jQuery=
Aa);return c},isReady:!1,ready:function(){if(!c.isReady){if(!j.body)return setTimeout(c.ready,13);c.isReady=!0;if(C){for(var a,b=0;a=C[b++];)a.call(j,c);C=null}c.fn.triggerHandler&&c(j).triggerHandler("ready")}},bindReady:function(){if(!ga){ga=!0;if("complete"===j.readyState)return c.ready();if(j.addEventListener)j.addEventListener("DOMContentLoaded",x,!1),m.addEventListener("load",c.ready,!1);else if(j.attachEvent){j.attachEvent("onreadystatechange",x);m.attachEvent("onload",c.ready);var a=!1;try{a=
null==m.frameElement}catch(b){}j.documentElement.doScroll&&a&&X()}}},isFunction:function(a){return"[object Function]"===L.call(a)},isArray:function(a){return"[object Array]"===L.call(a)},isPlainObject:function(a){if(!a||("[object Object]"!==L.call(a)||a.nodeType||a.setInterval)||a.constructor&&!M.call(a,"constructor")&&!M.call(a.constructor.prototype,"isPrototypeOf"))return!1;for(var b in a);return b===n||M.call(a,b)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a;
},parseJSON:function(a){if("string"!==typeof a||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return m.JSON&&m.JSON.parse?m.JSON.parse(a):(new Function("return "+a))();c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Ea.test(a)){var b=j.getElementsByTagName("head")[0]||j.documentElement,d=j.createElement("script");
d.type="text/javascript";c.support.scriptEval?d.appendChild(j.createTextNode(a)):d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,h=a.length,g=h===n||c.isFunction(a);if(d)if(g)for(f in a){if(!1===b.apply(a[f],d))break}else for(;e<h&&!1!==b.apply(a[e++],d););else if(g)for(f in a){if(!1===b.call(a[f],f,a[f]))break}else for(d=a[0];e<h&&!1!==b.call(d,e,d);d=a[++e]);return a},
trim:function(a){return(a||"").replace(Fa,"")},makeArray:function(a,b){b=b||[];null!=a&&(null==a.length||"string"===typeof a||c.isFunction(a)||"function"!==typeof a&&a.setInterval?N.call(b,a):c.merge(b,a));return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,f=b.length;c<f;c++)if(b[c]===a)return c;return-1},merge:function(a,b){var c=a.length,f=0;if("number"===typeof b.length)for(var e=b.length;f<e;f++)a[c++]=b[f];else for(;b[f]!==n;)a[c++]=b[f++];a.length=c;return a},grep:function(a,
b,c){for(var f=[],e=0,h=a.length;e<h;e++)!c!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,c){for(var f=[],e,h=0,g=a.length;h<g;h++)e=b(a[h],h,c),null!=e&&(f[f.length]=e);return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){2===arguments.length&&("string"===typeof b?(d=a,a=d[b],b=n):b&&!c.isFunction(b)&&(d=b,b=n));!b&&a&&(b=function(){return a.apply(d||this,arguments)});a&&(b.guid=a.guid=a.guid||b.guid||c.guid++);return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||
/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});z=c.uaMatch(z);z.browser&&(c.browser[z.browser]=!0,c.browser.version=z.version);c.browser.webkit&&(c.browser.safari=!0);ha&&(c.inArray=function(a,b){return ha.call(b,a)});F=c(j);j.addEventListener?x=function(){j.removeEventListener("DOMContentLoaded",x,false);c.ready()}:j.attachEvent&&(x=function(){if(j.readyState===
"complete"){j.detachEvent("onreadystatechange",x);c.ready()}});(function(){c.support={};var a=j.documentElement,b=j.createElement("script"),d=j.createElement("div"),f="script"+y();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=d.getElementsByTagName("*"),h=d.getElementsByTagName("a")[0];if(e&&e.length&&h){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,
htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(h.getAttribute("style")),hrefNormalized:h.getAttribute("href")==="/a",opacity:/^0.55$/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:j.createElement("select").appendChild(j.createElement("option")).selected,parentNode:d.removeChild(d.appendChild(j.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,
boxModel:null};b.type="text/javascript";try{b.appendChild(j.createTextNode("window."+f+"=1;"))}catch(g){}a.insertBefore(b,a.firstChild);if(m[f]){c.support.scriptEval=true;delete m[f]}try{delete b.test}catch(i){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function l(){c.support.noCloneEvent=false;d.detachEvent("onclick",l)});d.cloneNode(true).fireEvent("onclick")}d=j.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";
a=j.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var a=j.createElement("div");a.style.width=a.style.paddingLeft="1px";j.body.appendChild(a);c.boxModel=c.support.boxModel=a.offsetWidth===2;j.body.removeChild(a).style.display="none"});a=function(a){var b=j.createElement("div"),a="on"+a,c=a in b;if(!c){b.setAttribute(a,"return;");c=typeof b[a]==="function"}return c};c.support.submitBubbles=a("submit");c.support.changeBubbles=
a("change");a=b=d=e=h=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var v="jQuery"+y(),Ha=0,ia={};c.extend({cache:{},expando:v,noData:{embed:!0,object:!0,applet:!0},data:function(a,b,d){if(!a.nodeName||!c.noData[a.nodeName.toLowerCase()]){var a=a==m?ia:a,f=a[v],e=c.cache;if(!f&&typeof b==="string"&&d===n)return null;f||(f=++Ha);
if(typeof b==="object"){a[v]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[v]=f;e[f]={}}a=e[f];d!==n&&(a[b]=d);return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!a.nodeName||!c.noData[a.nodeName.toLowerCase()]){var a=a==m?ia:a,d=a[v],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{c.support.deleteExpando?delete a[c.expando]:a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);
if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===n){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);f===n&&this.length&&(f=c.data(this[0],a));return f===n&&d[1]?this.data(d[0]):f}return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){var b=(b||"fx")+"queue",f=c.data(a,b);if(!d)return f||
[];!f||c.isArray(d)?f=c.data(a,b,c.makeArray(d)):f.push(d);return f}},dequeue:function(a,b){var b=b||"fx",d=c.queue(a,b),f=d.shift();f==="inprogress"&&(f=d.shift());if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}return b===n?c.queue(this[0],a):this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,
a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var ja=/[\n\t]/g,O=/\s+/,Ia=/\r/g,Ja=/href|src|style/,Ka=/(button|input)/i,La=/(button|input|object|select|textarea)/i,Ma=/^(a|area)$/i,ka=/radio|checkbox/;c.fn.extend({attr:function(a,b){return I(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===
1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(b){var d=c(this);d.addClass(a.call(this,b,d.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(O),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var h=" "+e.className+" ",g=e.className,i=0,k=b.length;i<k;i++)h.indexOf(" "+b[i]+" ")<0&&(g=g+(" "+b[i]));e.className=c.trim(g)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.removeClass(a.call(this,b,d.attr("class")))});if(a&&typeof a==="string"||a===n)for(var b=(a||"").split(O),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var h=(" "+e.className+" ").replace(ja," "),g=0,i=b.length;g<i;g++)h=h.replace(" "+b[g]+" "," ");e.className=c.trim(h)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";return c.isFunction(a)?this.each(function(d){var f=c(this);f.toggleClass(a.call(this,d,
f.attr("class"),b),b)}):this.each(function(){if(d==="string")for(var e,h=0,g=c(this),i=b,k=a.split(O);e=k[h++];){i=f?i:!g.hasClass(e);g[i?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){for(var a=" "+a+" ",b=0,c=this.length;b<c;b++)if((" "+this[b].className+" ").replace(ja," ").indexOf(a)>-1)return true;return false},
val:function(a){if(a===n){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options,b=b.type==="select-one";if(d<0)return null;for(var h=b?d:0,d=b?d+1:e.length;h<d;h++){var g=e[h];if(g.selected){a=c(g).val();if(b)return a;f.push(a)}}return f}return ka.test(b.type)&&!c.support.checkOn?b.getAttribute("value")===null?"on":b.value:(b.value||"").replace(Ia,"")}return n}var i=c.isFunction(a);return this.each(function(b){var d=
c(this),e=a;if(this.nodeType===1){i&&(e=a.call(this,b,d.val()));typeof e==="number"&&(e=e+"");if(c.isArray(e)&&ka.test(this.type))this.checked=c.inArray(d.val(),e)>=0;else if(c.nodeName(this,"select")){var f=c.makeArray(e);c("option",this).each(function(){this.selected=c.inArray(c(this).val(),f)>=0});if(!f.length)this.selectedIndex=-1}else this.value=e}})}});c.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===
8)return n;if(f&&b in c.attrFn)return c(a)[b](d);var f=a.nodeType!==1||!c.isXMLDoc(a),e=d!==n,b=f&&c.props[b]||b;if(a.nodeType===1){var h=Ja.test(b);if(b in a&&f&&!h){if(e){b==="type"&&Ka.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");a[b]=d}return c.nodeName(a,"form")&&a.getAttributeNode(b)?a.getAttributeNode(b).nodeValue:b==="tabIndex"?(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:La.test(a.nodeName)||Ma.test(a.nodeName)&&a.href?0:n:a[b]}if(!c.support.style&&
f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&h?a.getAttribute(b,2):a.getAttribute(b);return a===null?n:a}return c.style(a,b,d)}});var A=/\.(.*)$/,Na=function(a){return a.replace(/[^\w\s\.\|`]/g,function(a){return"\\"+a})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){a.setInterval&&(a!==m&&!a.frameElement)&&(a=m);var e,h;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(h=c.data(a)){var g=
h.events=h.events||{},i=h.handle;if(!i)h.handle=i=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(i.elem,arguments):n};i.elem=a;for(var b=b.split(" "),k,l=0,j;k=b[l++];){h=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){j=k.split(".");k=j.shift();h.namespace=j.slice(0).sort().join(".")}else{j=[];h.namespace=""}h.type=k;h.guid=d.guid;var u=g[k],p=c.event.special[k]||{};if(!u){u=g[k]=[];if(!p.setup||p.setup.call(a,f,j,i)===false)a.addEventListener?a.addEventListener(k,
i,false):a.attachEvent&&a.attachEvent("on"+k,i)}if(p.add){p.add.call(a,h);if(!h.handler.guid)h.handler.guid=d.guid}u.push(h);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,h=0,g,i,k,l,j,n,p=c.data(a),m=p&&p.events;if(p&&m){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in m)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[h++];){l=e;g=e.indexOf(".")<0;i=[];if(!g){i=e.split(".");e=i.shift();
k=RegExp("(^|\\.)"+c.map(i.slice(0).sort(),Na).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(j=m[e])if(d){l=c.event.special[e]||{};for(q=f||0;q<j.length;q++){n=j[q];if(d.guid===n.guid){if(g||k.test(n.namespace)){f==null&&j.splice(q--,1);l.remove&&l.remove.call(a,n)}if(f!=null)break}}if(j.length===0||f!=null&&j.length===1){(!l.teardown||l.teardown.call(a,i)===false)&&la(a,e,p.handle);delete m[e]}}else for(var q=0;q<j.length;q++){n=j[q];if(g||k.test(n.namespace)){c.event.remove(a,l,n.handler,q);j.splice(q--,
1)}}}if(c.isEmptyObject(m)){if(b=p.handle)b.elem=null;delete p.events;delete p.handle;c.isEmptyObject(p)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[v]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return n;a.result=n;a.target=
d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if((!d||!d.nodeName||!c.noData[d.nodeName.toLowerCase()])&&d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(h){}if(!a.isPropagationStopped()&&f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){var f=a.target,g,i=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!i&&(!f||!f.nodeName||!c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(g=
f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(l){}g&&(f["on"+e]=g);c.event.triggered=false}}},handle:function(a){var b,d,f,e,a=arguments[0]=c.event.fix(a||m.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;if(!b){d=a.type.split(".");a.type=d.shift();f=RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var h=d.length;e<h;e++){var g=d[e];if(b||f.test(g.namespace)){a.handler=g.handler;
a.data=g.data;a.handleObj=g;g=g.handler.apply(this,arguments);if(g!==n){a.result=g;if(g===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[v])return a;for(var b=a,a=c.Event(b),d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||j;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=j.documentElement;d=j.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||d&&
d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==n)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:Z}))},remove:function(a){var b=true,d=a.origType.replace(A,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(A,""))return b=false});b&&c.event.remove(this,a.origType,Z)}},beforeunload:{setup:function(a,b,c){if(this.setInterval)this.onbeforeunload=c;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var la=j.removeEventListener?function(a,b,c){a.removeEventListener(b,c,false)}:function(a,b,c){a.detachEvent("on"+b,c)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=y();this[v]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K;this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,
isImmediatePropagationStopped:J};var ma=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},na=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?na:ma,a)},teardown:function(a){c.event.remove(this,b,a&&a.selector?na:ma)}}});c.support.submitBubbles||(c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return Y("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return Y("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}});
if(!c.support.changeBubbles){var P=/textarea|input|select/i,Q,oa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(a){return a.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},R=function(a,b){var d=a.target,f,e;if(P.test(d.nodeName)&&!d.readOnly){f=c.data(d,"_change_data");e=oa(d);(a.type!=="focusout"||d.type!=="radio")&&c.data(d,"_change_data",e);
if(!(f===n||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:R,click:function(a){var b=a.target,c=b.type;if(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")return R.call(this,a)},keydown:function(a){var b=a.target,c=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")return R.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",oa(a))}},setup:function(){if(this.type==="file")return false;for(var a in Q)c.event.add(this,a+".specialChange",Q[a]);return P.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return P.test(this.nodeName)}};Q=c.event.special.change.filters}j.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(a){a=c.event.fix(a);a.type=b;return c.event.handle.call(this,a)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},
teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(a,f,e){if(typeof a==="object"){for(var h in a)this[b](h,f,a[h],e);return this}if(c.isFunction(f)){e=f;f=n}var g=b==="one"?c.proxy(e,function(a){c(this).unbind(a,g);return e.apply(this,arguments)}):e;if(a==="unload"&&b!=="one")this.one(a,f,e);else{h=0;for(var i=this.length;h<i;h++)c.event.add(this[h],a,g,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&!a.preventDefault)for(var d in a)this.unbind(d,
a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,c,f){return this.live(b,c,f,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},toggle:function(a){for(var b=arguments,d=1;d<
b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var pa={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(a,f,e,h){var g,i=0,k,l,j=h||this.selector,m=h?this:c(this.context);if(c.isFunction(f)){e=
f;f=n}for(a=(a||"").split(" ");(g=a[i++])!=null;){h=A.exec(g);k="";if(h){k=h[0];g=g.replace(A,"")}if(g==="hover")a.push("mouseenter"+k,"mouseleave"+k);else{l=g;if(g==="focus"||g==="blur"){a.push(pa[g]+k);g=g+k}else g=(pa[g]||g)+k;b==="live"?m.each(function(){c.event.add(this,$(g,j),{data:f,selector:j,handler:e,origType:g,origHandler:e,preType:l})}):m.unbind($(g,j),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)};c.attrFn&&(c.attrFn[b]=true)});m.attachEvent&&!m.addEventListener&&m.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(b){for(var c="",d,e=0;b[e];e++){d=b[e];d.nodeType===3||d.nodeType===4?c=c+d.nodeValue:d.nodeType!==8&&(c=c+a(d.childNodes))}return c}function b(a,b,c,d,e,f){for(var e=0,h=d.length;e<h;e++){var g=d[e];if(g){for(var g=
g[a],k=false;g;){if(g.sizcache===c){k=d[g.sizset];break}if(g.nodeType===1&&!f){g.sizcache=c;g.sizset=e}if(g.nodeName.toLowerCase()===b){k=g;break}g=g[a]}d[e]=k}}}function d(a,b,c,d,e,f){for(var e=0,g=d.length;e<g;e++){var h=d[e];if(h){for(var h=h[a],i=false;h;){if(h.sizcache===c){i=d[h.sizset];break}if(h.nodeType===1){if(!f){h.sizcache=c;h.sizset=e}if(typeof b!=="string"){if(h===b){i=true;break}}else if(k.filter(b,[h]).length>0){i=h;break}}h=h[a]}d[e]=i}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,h=Object.prototype.toString,g=false,i=true;[0,0].sort(function(){i=false;return 0});var k=function(a,b,c,d){var c=c||[],e=b=b||j;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!=="string")return c;for(var g=[],i,n,m,q,u=true,s=o(b),qa=a;(f.exec(""),i=f.exec(qa))!==null;){qa=i[3];g.push(i[1]);if(i[2]){q=i[3];break}}if(g.length>1&&t.exec(a))if(g.length===2&&l.relative[g[0]])n=v(g[0]+g[1],b);else for(n=l.relative[g[0]]?[b]:k(g.shift(),b);g.length;){a=g.shift();l.relative[a]&&(a=a+g.shift());
n=v(a,n)}else{if(!d&&g.length>1&&b.nodeType===9&&!s&&l.match.ID.test(g[0])&&!l.match.ID.test(g[g.length-1])){i=k.find(g.shift(),b,s);b=i.expr?k.filter(i.expr,i.set)[0]:i.set[0]}if(b){i=d?{expr:g.pop(),set:p(d)}:k.find(g.pop(),g.length===1&&(g[0]==="~"||g[0]==="+")&&b.parentNode?b.parentNode:b,s);n=i.expr?k.filter(i.expr,i.set):i.set;for(g.length>0?m=p(n):u=false;g.length;){var E=g.pop();i=E;l.relative[E]?i=g.pop():E="";i==null&&(i=b);l.relative[E](m,i,s)}}else m=[]}m||(m=n);m||k.error(E||a);if(h.call(m)===
"[object Array]")if(u)if(b&&b.nodeType===1)for(a=0;m[a]!=null;a++)m[a]&&(m[a]===true||m[a].nodeType===1&&r(b,m[a]))&&c.push(n[a]);else for(a=0;m[a]!=null;a++)m[a]&&m[a].nodeType===1&&c.push(n[a]);else c.push.apply(c,m);else p(m,c);if(q){k(q,e,c,d);k.uniqueSort(c)}return c};k.uniqueSort=function(a){if(q){g=i;a.sort(q);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a};k.matches=function(a,b){return k(a,null,null,b)};k.find=function(a,b,c){var d,e;if(!a)return[];for(var f=0,g=
l.order.length;f<g;f++){var h=l.order[f];if(e=l.leftMatch[h].exec(a)){var i=e[1];e.splice(1,1);if(i.substr(i.length-1)!=="\\"){e[1]=(e[1]||"").replace(/\\/g,"");d=l.find[h](e,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=b.getElementsByTagName("*"));return{set:d,expr:a}};k.filter=function(a,b,c,d){for(var e=a,f=[],g=b,h,i,j=b&&b[0]&&o(b[0]);a&&b.length;){for(var m in l.filter)if((h=l.leftMatch[m].exec(a))!=null&&h[2]){var t=l.filter[m],p,q;q=h[1];i=false;h.splice(1,1);if(q.substr(q.length-
1)!=="\\"){g===f&&(f=[]);if(l.preFilter[m])if(h=l.preFilter[m](h,g,c,f,d,j)){if(h===true)continue}else i=p=true;if(h)for(var s=0;(q=g[s])!=null;s++)if(q){p=t(q,h,s,g);var u=d^!!p;if(c&&p!=null)u?i=true:g[s]=false;else if(u){f.push(q);i=true}}if(p!==n){c||(g=f);a=a.replace(l.match[m],"");if(!i)return[];break}}}if(a===e)if(i==null)k.error(a);else break;e=a}return g};k.error=function(a){throw"Syntax error, unrecognized expression: "+a;};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},
relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!/\W/.test(b),c=c&&!d;d&&(b=b.toLowerCase());for(var d=0,e=a.length,f;d<e;d++)if(f=a[d]){for(;(f=f.previousSibling)&&f.nodeType!==1;);a[d]=c||f&&f.nodeName.toLowerCase()===b?f||false:f===b}c&&k.filter(b,a,true)},">":function(a,b){var c=typeof b==="string";if(c&&!/\W/.test(b))for(var b=b.toLowerCase(),d=0,e=a.length;d<e;d++){var f=a[d];if(f){c=f.parentNode;a[d]=c.nodeName.toLowerCase()===b?c:false}}else{d=0;for(e=a.length;d<e;d++)if(f=a[d])a[d]=
c?f.parentNode:f.parentNode===b;c&&k.filter(b,a,true)}},"":function(a,c,f){var g=e++,h=d;if(typeof c==="string"&&!/\W/.test(c))var i=c=c.toLowerCase(),h=b;h("parentNode",c,g,a,i,f)},"~":function(a,c,f){var g=e++,h=d;if(typeof c==="string"&&!/\W/.test(c))var i=c=c.toLowerCase(),h=b;h("previousSibling",c,g,a,i,f)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(a=b.getElementById(a[1]))?[a]:[]},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){for(var c=[],
b=b.getElementsByName(a[1]),d=0,e=b.length;d<e;d++)b[d].getAttribute("name")===a[1]&&c.push(b[d]);return c.length===0?null:c}},TAG:function(a,b){return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(/\\/g,"")+" ";if(f)return a;for(var f=0,g;(g=b[f])!=null;f++)g&&(e^(g.className&&(" "+g.className+" ").replace(/[\t\n]/g," ").indexOf(a)>=0)?c||d.push(g):c&&(b[f]=false));return false},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a){return a[1].toLowerCase()},
CHILD:function(a){if(a[1]==="nth"){var b=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){b=a[1].replace(/\\/g,"");!f&&l.attrMap[b]&&(a[1]=l.attrMap[b]);a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(a,b,c,d,e){if(a[1]==="not")if((f.exec(a[3])||"").length>1||/^\w/.test(a[3]))a[3]=k(a[3],null,null,b);else{a=k.filter(a[3],b,c,1^e);c||d.push.apply(d,
a);return false}else if(l.match.POS.test(a[0])||l.match.CHILD.test(a[0]))return true;return a},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===true},checked:function(a){return a.checked===true},selected:function(a){return a.selected===true},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},
text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},
setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(b,c,d,e){var f=c[1],g=l.filters[f];if(g)return g(b,d,c,e);if(f==="contains")return(b.textContent||b.innerText||a([b])||"").indexOf(c[3])>=0;if(f==="not"){c=c[3];d=0;for(e=
c.length;d<e;d++)if(c[d]===b)return false;return true}k.error("Syntax error, unrecognized expression: "+f)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(d.nodeType===1)return false;if(c==="first")return true;d=a;case "last":for(;d=d.nextSibling;)if(d.nodeType===1)return false;return true;case "nth":var c=b[2],e=b[3];if(c===1&&e===0)return true;var b=b[0],f=a.parentNode;if(f&&(f.sizcache!==b||!a.nodeIndex)){for(var g=0,d=f.firstChild;d;d=d.nextSibling)if(d.nodeType===
1)d.nodeIndex=++g;f.sizcache=b}a=a.nodeIndex-e;return c===0?a===0:a%c===0&&a/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],a=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),c=a+"",d=b[2],b=b[4];return a==null?d==="!=":d==="="?c===b:d==="*="?c.indexOf(b)>=
0:d==="~="?(" "+c+" ").indexOf(b)>=0:!b?c&&a!==false:d==="!="?c!==b:d==="^="?c.indexOf(b)===0:d==="$="?c.substr(c.length-b.length)===b:d==="|="?c===b||c.substr(0,b.length+1)===b+"-":false},POS:function(a,b,c,d){var e=l.setFilters[b[2]];if(e)return e(a,c,b,d)}}},t=l.match.POS,m;for(m in l.match){l.match[m]=RegExp(l.match[m].source+/(?![^\[]*\])(?![^\(]*\))/.source);l.leftMatch[m]=RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[m].source.replace(/\\(\d+)/g,function(a,b){return"\\"+(b-0+1)}))}var p=function(a,
b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(j.documentElement.childNodes,0)}catch(s){p=function(a,b){b=b||[];if(h.call(a)==="[object Array]")Array.prototype.push.apply(b,a);else if(typeof a.length==="number")for(var c=0,d=a.length;c<d;c++)b.push(a[c]);else for(c=0;a[c];c++)b.push(a[c]);return b}}var q;j.documentElement.compareDocumentPosition?q=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){a==b&&(g=true);
return a.compareDocumentPosition?-1:1}a=a.compareDocumentPosition(b)&4?-1:a===b?0:1;a===0&&(g=true);return a}:"sourceIndex"in j.documentElement?q=function(a,b){if(!a.sourceIndex||!b.sourceIndex){a==b&&(g=true);return a.sourceIndex?-1:1}a=a.sourceIndex-b.sourceIndex;a===0&&(g=true);return a}:j.createRange&&(q=function(a,b){if(!a.ownerDocument||!b.ownerDocument){a==b&&(g=true);return a.ownerDocument?-1:1}var c=a.ownerDocument.createRange(),d=b.ownerDocument.createRange();c.setStart(a,0);c.setEnd(a,
0);d.setStart(b,0);d.setEnd(b,0);a=c.compareBoundaryPoints(Range.START_TO_END,d);a===0&&(g=true);return a});(function(){var a=j.createElement("div"),b="script"+(new Date).getTime();a.innerHTML="<a name='"+b+"'/>";var c=j.documentElement;c.insertBefore(a,c.firstChild);if(j.getElementById(b)){l.find.ID=function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:n:[]};
l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}}c.removeChild(a);c=a=null})();(function(){var a=j.createElement("div");a.appendChild(j.createComment(""));if(a.getElementsByTagName("*").length>0)l.find.TAG=function(a,b){b=b.getElementsByTagName(a[1]);if(a[1]==="*"){for(var a=[],c=0;b[c];c++)b[c].nodeType===1&&a.push(b[c]);b=a}return b};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!==
"undefined"&&a.firstChild.getAttribute("href")!=="#")l.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();j.querySelectorAll&&function(){var a=k,b=j.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)){k=function(b,c,d,e){c=c||j;if(!e&&c.nodeType===9&&!o(c))try{return p(c.querySelectorAll(b),d)}catch(f){}return a(b,c,d,e)};for(var c in a)k[c]=a[c];b=null}}();(function(){var a=j.createElement("div");a.innerHTML=
"<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length!==1){l.order.splice(1,0,"CLASS");l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])};a=null}}})();var r=j.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(a,b){return a!==b&&(a.contains?a.contains(b):true)},
o=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":false},v=function(a,b){for(var c=[],d="",e,b=b.nodeType?[b]:b;e=l.match.PSEUDO.exec(a);){d=d+e[0];a=a.replace(l.match.PSEUDO,"")}a=l.relative[a]?a+"*":a;e=0;for(var f=b.length;e<f;e++)k(a,b[e],c);return k.filter(d,c)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=o;c.contains=r})();var Oa=/Until$/,Pa=/^(?:parents|prevUntil|prevAll)/,Qa=/,/,D=Array.prototype.slice,
ra=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(a,c){return!!b.call(a,c,a)===d});if(b.nodeType)return c.grep(a,function(a){return a===b===d});if(typeof b==="string"){var f=c.grep(a,function(a){return a.nodeType===1});if(Da.test(b))return c.filter(b,f,!d);b=c.filter(b,f)}return c.grep(a,function(a){return c.inArray(a,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;c.find(a,this[f],b);if(f>0)for(var h=d;h<b.length;h++)for(var g=
0;g<d;g++)if(b[g]===b[h]){b.splice(h--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var a=0,f=b.length;a<f;a++)if(c.contains(this,b[a]))return true})},not:function(a){return this.pushStack(ra(this,a,false),"not",a)},filter:function(a){return this.pushStack(ra(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,h={},g;if(f&&a.length){e=0;for(var i=a.length;e<i;e++){g=a[e];h[g]||
(h[g]=c.expr.match.POS.test(g)?c(g,b||this.context):g)}for(;f&&f.ownerDocument&&f!==b;){for(g in h){e=h[g];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:g,elem:f});delete h[g]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(d,e){for(;e&&e.ownerDocument&&e!==b;){if(k?k.index(e)>-1:c(e).is(a))return e;e=e.parentNode}return null})},index:function(a){return!a||typeof a==="string"?c.inArray(this[0],a?c(a):this.parent().children()):c.inArray(a.jquery?
a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(!a[0]||!a[0].parentNode||a[0].parentNode.nodeType===11||!b[0]||!b[0].parentNode||b[0].parentNode.nodeType===11?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},
next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);Oa.test(a)||(f=d);f&&typeof f==="string"&&(e=c.filter(f,e));e=this.length>1?c.unique(e):e;if((this.length>1||Qa.test(f))&&Pa.test(a))e=e.reverse();return this.pushStack(e,a,D.call(arguments).join(","))}});c.extend({filter:function(a,b,d){d&&(a=":not("+a+")");return c.find.matches(a,b)},dir:function(a,b,d){for(var f=[],a=a[b];a&&a.nodeType!==9&&(d===n||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,c){for(var b=b||1,f=0;a;a=a[c])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var sa=/ jQuery\d+="(?:\d+|null)"/g,G=/^\s+/,ta=/(<([\w:]+)[^>]*?)\/>/g,Ra=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,ua=/<([\w:]+)/,Sa=/<tbody/i,Ta=/<|&#?\w+;/,ca=/<script|<object|<embed|<option|<style/i,da=/checked\s*(?:[^=]|=\s*.checked.)/i,va=function(a,b,c){return Ra.test(c)?
a:b+"></"+c+">"},r={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};r.optgroup=r.option;r.tbody=r.tfoot=r.colgroup=r.caption=r.thead;r.th=r.td;c.support.htmlSerialize||(r._default=[1,"div<div>","</div>"]);c.fn.extend({text:function(a){return c.isFunction(a)?
this.each(function(b){var d=c(this);d.text(a.call(this,b,d.text()))}):typeof a!=="object"&&a!==n?this.empty().append((this[0]&&this[0].ownerDocument||j).createTextNode(a)):c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapAll(a.call(this,b))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var a=this;a.firstChild&&a.firstChild.nodeType===1;)a=a.firstChild;return a}).append(this)}return this},
wrapInner:function(a){return c.isFunction(a)?this.each(function(b){c(this).wrapInner(a.call(this,b))}):this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,
true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=
this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);return this},clone:function(a){var b=
this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var a=this.outerHTML,b=this.ownerDocument;if(!a){a=b.createElement("div");a.appendChild(this.cloneNode(true));a=a.innerHTML}return c.clean([a.replace(sa,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(G,"")],b)[0]}return this.cloneNode(true)});if(a===true){aa(this,b);aa(this.find("*"),b.find("*"))}return b},html:function(a){if(a===n)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(sa,""):null;if(typeof a==="string"&&
!ca.test(a)&&(c.support.leadingWhitespace||!G.test(a))&&!r[(ua.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ta,va);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(b){var d=c(this),f=d.html();d.empty().append(function(){return a.call(this,b,f)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=
c(this),f=d.html();d.replaceWith(a.call(this,b,f))});typeof a!=="string"&&(a=c(a).detach());return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){var f,e,h=a[0],g=[],i;if(!c.support.checkClone&&arguments.length===3&&typeof h==="string"&&da.test(h))return this.each(function(){c(this).domManip(a,b,d,
true)});if(c.isFunction(h))return this.each(function(e){var f=c(this);a[0]=h.call(this,e,b?f.html():n);f.domManip(a,b,d)});if(this[0]){f=h&&h.parentNode;f=c.support.parentNode&&f&&f.nodeType===11&&f.childNodes.length===this.length?{fragment:f}:ba(a,this,g);i=f.fragment;if(e=i.childNodes.length===1?i=i.firstChild:i.firstChild){b=b&&c.nodeName(e,"tr");e=0;for(var k=this.length;e<k;e++)d.call(b?c.nodeName(this[e],"table")?this[e].getElementsByTagName("tbody")[0]||this[e].appendChild(this[e].ownerDocument.createElement("tbody")):
this[e]:this[e],e>0||f.cacheable||this.length>1?i.cloneNode(true):i)}g.length&&c.each(g,za)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[],d=c(d),e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);return this}for(var e=0,h=d.length;e<h;e++){var g=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),
g);f=f.concat(g)}return this.pushStack(f,a,d.selector)}});c.extend({clean:function(a,b,d,f){b=b||j;typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||j);for(var e=[],h=0,g;(g=a[h])!=null;h++){typeof g==="number"&&(g=g+"");if(g){if(typeof g==="string"&&!Ta.test(g))g=b.createTextNode(g);else if(typeof g==="string"){g=g.replace(ta,va);var i=(ua.exec(g)||["",""])[1].toLowerCase(),k=r[i]||r._default,l=k[0],m=b.createElement("div");for(m.innerHTML=k[1]+g+k[2];l--;)m=m.lastChild;
if(!c.support.tbody){l=Sa.test(g);i=i==="table"&&!l?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!l?m.childNodes:[];for(k=i.length-1;k>=0;--k)c.nodeName(i[k],"tbody")&&!i[k].childNodes.length&&i[k].parentNode.removeChild(i[k])}!c.support.leadingWhitespace&&G.test(g)&&m.insertBefore(b.createTextNode(G.exec(g)[0]),m.firstChild);g=m.childNodes}g.nodeType?e.push(g):e=c.merge(e,g)}}if(d)for(h=0;e[h];h++)if(f&&c.nodeName(e[h],"script")&&(!e[h].type||e[h].type.toLowerCase()==="text/javascript"))f.push(e[h].parentNode?
e[h].parentNode.removeChild(e[h]):e[h]);else{e[h].nodeType===1&&e.splice.apply(e,[h+1,0].concat(c.makeArray(e[h].getElementsByTagName("script"))));d.appendChild(e[h])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,h=c.support.deleteExpando,g=0,i;(i=a[g])!=null;g++)if(d=i[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?c.event.remove(i,k):la(i,k,b.handle);h?delete i[c.expando]:i.removeAttribute&&i.removeAttribute(c.expando);delete f[d]}}});var Ua=/z-?index|font-?weight|opacity|zoom|line-?height/i,
wa=/alpha\([^)]*\)/,xa=/opacity=([^)]*)/,S=/float/i,T=/-([a-z])/ig,Va=/([A-Z])/g,Wa=/^-?\d+(?:px)?$/i,Xa=/^-?\d/,Ya={position:"absolute",visibility:"hidden",display:"block"},Za=["Left","Right"],$a=["Top","Bottom"],ab=j.defaultView&&j.defaultView.getComputedStyle,ya=c.support.cssFloat?"cssFloat":"styleFloat",U=function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return I(this,a,b,true,function(a,b,e){if(e===n)return c.curCSS(a,b);typeof e==="number"&&!Ua.test(b)&&(e=e+"px");c.style(a,b,e)})};
c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return n;if((b==="width"||b==="height")&&parseFloat(d)<0)d=n;var f=a.style||a,e=d!==n;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=wa.test(a)?a.replace(wa,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(xa.exec(f.filter)[1])/100+"":""}S.test(b)&&(b=ya);b=b.replace(T,U);if(e)try{f[b]=d}catch(h){}return f[b]},
css:function(a,b,d,f){if(b==="width"||b==="height"){var e,h=b==="width"?Za:$a,d=function(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(h,function(){f||(e=e-(parseFloat(c.curCSS(a,"padding"+this,true))||0));e=f==="margin"?e+(parseFloat(c.curCSS(a,"margin"+this,true))||0):e-(parseFloat(c.curCSS(a,"border"+this+"Width",true))||0)})};a.offsetWidth!==0?d():c.swap(a,Ya,d);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&
b==="opacity"&&a.currentStyle){f=xa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}S.test(b)&&(b=ya);if(!d&&e&&e[b])f=e[b];else if(ab){S.test(b)&&(b="float");b=b.replace(Va,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=a.getPropertyValue(b);b==="opacity"&&f===""&&(f="1")}else if(a.currentStyle){d=b.replace(T,U);f=a.currentStyle[b]||a.currentStyle[d];if(!Wa.test(f)&&Xa.test(f)){var b=e.left,h=a.runtimeStyle.left;
a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=h}}return f},swap:function(a,b,c){var f={},e;for(e in b){f[e]=a.style[e];a.style[e]=b[e]}c.call(a);for(e in b)a.style[e]=f[e]}});c.expr&&c.expr.filters&&(c.expr.filters.hidden=function(a){var b=a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"},c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)});
var bb=y(),cb=/<script(.|\s)*?\/script>/gi,db=/select|textarea/i,eb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,B=/=\?(&|$)/,V=/\?/,fb=/(\?|&)_=.*?(&|$)/,gb=/^(\w+:)?\/\/([^\/?#]+)/,hb=/%20/g,ib=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!=="string")return ib.call(this,a);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0)var e=a.slice(f,a.length),a=a.slice(0,f);f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=
c.param(b,c.ajaxSettings.traditional);f="POST"}var h=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(a,b){if(b==="success"||b==="notmodified")h.html(e?c("<div />").append(a.responseText.replace(cb,"")).find(e):a.responseText);d&&h.each(d,[a.responseText,b,a])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&
(this.checked||db.test(this.nodeName)||eb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(a){return{name:b.name,value:a}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(a){return this.bind(b,a)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,
b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,xhr:m.XMLHttpRequest&&("file:"!==m.location.protocol||!m.ActiveXObject)?function(){return new m.XMLHttpRequest}:function(){try{return new m.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},
accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&e.success.call(k,i,g,o);e.global&&f("ajaxSuccess",[o,e])}function d(){e.complete&&e.complete.call(k,o,g);e.global&&f("ajaxComplete",[o,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(a,b){(e.context?c(e.context):c.event).trigger(a,b)}var e=
c.extend(true,{},c.ajaxSettings,a),h,g,i,k=a&&a.context||e,l=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(l==="GET")B.test(e.url)||(e.url=e.url+((V.test(e.url)?"&":"?")+(e.jsonp||"callback")+"=?"));else if(!e.data||!B.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&B.test(e.data)||B.test(e.url))){h=e.jsonpCallback||"jsonp"+bb++;if(e.data)e.data=
(e.data+"").replace(B,"="+h+"$1");e.url=e.url.replace(B,"="+h+"$1");e.dataType="script";m[h]=m[h]||function(a){i=a;b();d();m[h]=n;try{delete m[h]}catch(c){}p&&p.removeChild(s)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===false&&l==="GET"){var t=y(),u=e.url.replace(fb,"$1_="+t+"$2");e.url=u+(u===e.url?(V.test(e.url)?"&":"?")+"_="+t:"")}if(e.data&&l==="GET")e.url=e.url+((V.test(e.url)?"&":"?")+e.data);e.global&&!c.active++&&c.event.trigger("ajaxStart");t=(t=gb.exec(e.url))&&
(t[1]&&t[1]!==location.protocol||t[2]!==location.host);if(e.dataType==="script"&&l==="GET"&&t){var p=j.getElementsByTagName("head")[0]||j.documentElement,s=j.createElement("script");s.src=e.url;if(e.scriptCharset)s.charset=e.scriptCharset;if(!h){var q=false;s.onload=s.onreadystatechange=function(){if(!q&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){q=true;b();d();s.onload=s.onreadystatechange=null;p&&s.parentNode&&p.removeChild(s)}}}p.insertBefore(s,p.firstChild);
return n}var r=false,o=e.xhr();if(o){e.username?o.open(l,e.url,e.async,e.username,e.password):o.open(l,e.url,e.async);try{(e.data||a&&a.contentType)&&o.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&o.setRequestHeader("If-Modified-Since",c.lastModified[e.url]);c.etag[e.url]&&o.setRequestHeader("If-None-Match",c.etag[e.url])}t||o.setRequestHeader("X-Requested-With","XMLHttpRequest");o.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+
", */*":e.accepts._default)}catch(v){}if(e.beforeSend&&e.beforeSend.call(k,o,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");o.abort();return false}e.global&&f("ajaxSend",[o,e]);var w=o.onreadystatechange=function(a){if(!o||o.readyState===0||a==="abort"){r||d();r=true;if(o)o.onreadystatechange=c.noop}else if(!r&&o&&(o.readyState===4||a==="timeout")){r=true;o.onreadystatechange=c.noop;g=a==="timeout"?"timeout":!c.httpSuccess(o)?"error":e.ifModified&&c.httpNotModified(o,e.url)?"notmodified":
"success";var f;if(g==="success")try{i=c.httpData(o,e.dataType,e)}catch(k){g="parsererror";f=k}g==="success"||g==="notmodified"?h||b():c.handleError(e,o,g,f);d();a==="timeout"&&o.abort();e.async&&(o=null)}};try{var x=o.abort;o.abort=function(){o&&x.call(o);w("abort")}}catch(A){}e.async&&e.timeout>0&&setTimeout(function(){o&&!r&&w("timeout")},e.timeout);try{o.send(l==="POST"||l==="PUT"||l==="DELETE"?e.data:null)}catch(z){c.handleError(e,o,null,z);d()}e.async||w();return o}},handleError:function(a,
b,d,f){a.error&&a.error.call(a.context||a,b,d,f);a.global&&(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");d&&(c.lastModified[b]=d);f&&(c.etag[b]=f);return a.status===304||a.status===0},httpData:function(a,
b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0,a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");d&&d.dataFilter&&(a=d.dataFilter(a,b));typeof a==="string"&&(b==="json"||!b&&f.indexOf("json")>=0?a=c.parseJSON(a):(b==="script"||!b&&f.indexOf("javascript")>=0)&&c.globalEval(a));return a},param:function(a,b){function d(a,e){c.isArray(e)?c.each(e,function(e,h){b||/\[\]$/.test(a)?f(a,h):d(a+"["+(typeof h==="object"||
c.isArray(h)?e:"")+"]",h)}):!b&&e!=null&&typeof e==="object"?c.each(e,function(b,c){d(a+"["+b+"]",c)}):f(a,e)}function f(a,b){b=c.isFunction(b)?b():b;e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)}var e=[];if(b===n)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var h in a)d(h,a[h]);return e.join("&").replace(hb,"+")}});var W={},jb=/toggle|show|hide/,kb=/^([+-]=)?([\d+-.]+)(.*)$/,H,ea=[["height","marginTop","marginBottom",
"paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(w("show",3),a,b);a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){var d=this[a].nodeName,f;if(W[d])f=W[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");f==="none"&&(f="block");e.remove();W[d]=f}c.data(this[a],"olddisplay",f)}}a=0;
for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this},hide:function(a,b){if(a||a===0)return this.animate(w("hide",3),a,b);a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";c.isFunction(a)&&c.isFunction(b)?this._toggle.apply(this,arguments):
a==null||d?this.each(function(){var b=d?a:c(this).is(":hidden");c(this)[b?"show":"hide"]()}):this.animate(w("toggle",3),a,b);return this},fadeTo:function(a,b,c){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c)},animate:function(a,b,d,f){var e=c.speed(b,d,f);return c.isEmptyObject(a)?this.each(e.complete):this[e.queue===false?"each":"queue"](function(){var b=c.extend({},e),d,f=this.nodeType===1&&c(this).is(":hidden"),k=this;for(d in a){var j=d.replace(T,U);if(d!==
j){a[j]=a[d];delete a[d];d=j}if(a[d]==="hide"&&f||a[d]==="show"&&!f)return b.complete.call(this);if((d==="height"||d==="width")&&this.style){b.display=c.css(this,"display");b.overflow=this.style.overflow}if(c.isArray(a[d])){(b.specialEasing=b.specialEasing||{})[d]=a[d][1];a[d]=a[d][0]}}if(b.overflow!=null)this.style.overflow="hidden";b.curAnim=c.extend({},a);c.each(a,function(d,e){var g=new c.fx(k,b,d);if(jb.test(e))g[e==="toggle"?f?"show":"hide":e](a);else{var j=kb.exec(e),l=g.cur(true)||0;if(j){var e=
parseFloat(j[2]),m=j[3]||"px";if(m!=="px"){k.style[d]=(e||1)+m;l=(e||1)/g.cur(true)*l;k.style[d]=l+m}j[1]&&(e=(j[1]==="-="?-1:1)*e+l);g.custom(l,e,m)}else g.custom(l,e,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);this.each(function(){for(var a=d.length-1;a>=0;a--)if(d[a].elem===this){b&&d[a](true);d.splice(a,1)}});b||this.dequeue();return this}});c.each({slideDown:w("show",1),slideUp:w("hide",1),slideToggle:w("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},
function(a,b){c.fn[a]=function(a,c){return this.animate(b,a,c)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration==="number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,c,f){return c+f*a},swing:function(a,
b,c,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+c}},timers:[],fx:function(a,b,c){this.options=b;this.elem=a;this.prop=c;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){return this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)?this.elem[this.prop]:
(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-1E4?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(a){return e.step(a)}this.startTime=y();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;this.pos=this.state=0;var e=this;f.elem=this.elem;f()&&(c.timers.push(f)&&!H)&&(H=setInterval(c.fx.tick,13))},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?
1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=y(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)this.options.curAnim[f]!==true&&(d=false);if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,
"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||
a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update();return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||c.fx.stop()},stop:function(){clearInterval(H);H=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,
a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}});c.expr&&c.expr.filters&&(c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length});c.fn.offset="getBoundingClientRect"in j.documentElement?function(a){var b=this[0];if(a)return this.each(function(b){c.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument,b=f.body,f=f.documentElement;return{top:d.top+
(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(b){c.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();for(var d=b.offsetParent,f=b,e=b.ownerDocument,h,g=e.documentElement,i=e.body,f=(e=e.defaultView)?
e.getComputedStyle(b,null):b.currentStyle,k=b.offsetTop,j=b.offsetLeft;(b=b.parentNode)&&b!==i&&b!==g;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;h=e?e.getComputedStyle(b,null):b.currentStyle;k=k-b.scrollTop;j=j-b.scrollLeft;if(b===d){k=k+b.offsetTop;j=j+b.offsetLeft;if(c.offset.doesNotAddBorder&&(!c.offset.doesAddBorderForTableAndCells||!/^t(able|d|h)$/i.test(b.nodeName))){k=k+(parseFloat(h.borderTopWidth)||0);j=j+(parseFloat(h.borderLeftWidth)||0)}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&
h.overflow!=="visible"){k=k+(parseFloat(h.borderTopWidth)||0);j=j+(parseFloat(h.borderLeftWidth)||0)}f=h}if(f.position==="relative"||f.position==="static"){k=k+i.offsetTop;j=j+i.offsetLeft}if(c.offset.supportsFixedPosition&&f.position==="fixed"){k=k+Math.max(g.scrollTop,i.scrollTop);j=j+Math.max(g.scrollLeft,i.scrollLeft)}return{top:k,left:j}};c.offset={initialize:function(){var a=j.body,b=j.createElement("div"),d,f,e,h=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",
top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=
f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==h;a.removeChild(b);c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b=
b+(parseFloat(c.curCSS(a,"marginTop",true))||0);d=d+(parseFloat(c.curCSS(a,"marginLeft",true))||0)}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),h=parseInt(c.curCSS(a,"top",true),10)||0,g=parseInt(c.curCSS(a,"left",true),10)||0;c.isFunction(b)&&(b=b.call(a,d,e));d={top:b.top-e.top+h,left:b.left-e.left+g};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=
this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top=d.top-(parseFloat(c.curCSS(a,"marginTop",true))||0);d.left=d.left-(parseFloat(c.curCSS(a,"marginLeft",true))||0);f.top=f.top+(parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0);f.left=f.left+(parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0);return{top:d.top-f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||j.body;a&&!/^body|html$/i.test(a.nodeName)&&
c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(b){var e=this[0],h;return!e?null:b!==n?this.each(function(){(h=fa(this))?h.scrollTo(!a?b:c(h).scrollLeft(),a?b:c(h).scrollTop()):this[d]=b}):(h=fa(e))?"pageXOffset"in h?h[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&h.document.documentElement[d]||h.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?
c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(a){return this[0]?c.css(this[0],d,false,a?"margin":"border"):null};c.fn[d]=function(a){var e=this[0];return!e?a==null?null:this:c.isFunction(a)?this.each(function(b){var e=c(this);e[d](a.call(this,b,e[d]()))}):"scrollTo"in e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+
b],e.body["offset"+b],e.documentElement["offset"+b]):a===n?c.css(e,d):this.css(d,typeof a==="string"?a:a+"px")}});m.jQuery=c}(window),window.vwo_$=window.vwo_$||jQuery.noConflict(!0),window.$=window.$||window.jQuery);
window.vwo_$ = window.vwo_$ || window.jQuery;
(function() {
  function _iehack(img) {
    !window.vwo_iehack_queue && (window.vwo_iehack_queue = []);
    window.vwo_iehack_queue.push(img)
  }
  function _tld(url) {
    var retval;
    retval = url.split(".");
    var length = retval.length, piece = retval[length - 2];
    if(piece && -1 !== vwo_$.inArray(piece, "co org com net edu au ac".split(" "))) {
      return retval = retval[length - 3] + "." + piece + "." + retval[length - 1], triggerEvent(PARSE_TLD, url, retval), retval
    }
    retval = piece + "." + retval[length - 1];
    triggerEvent(PARSE_TLD, url, retval);
    return retval
  }
  function _pause(ms) {
    for(var duration = ms, ms = ms + (new Date).getTime();(new Date).getTime() < ms;) {
    }
    triggerEvent(PAUSE, duration)
  }
  function _toAbsURL(s) {
    var el = document.createElement("div");
    el.innerHTML = '<a href="' + s.split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;") + '">x</a>';
    return el.firstChild.href
  }
  function isQueryParamPresent(url) {
    var hashIndex = url.indexOf("#"), questionIndex = url.indexOf("?"), url = url.indexOf("=");
    return-1 === hashIndex ? -1 !== questionIndex || -1 !== url : -1 !== questionIndex && hashIndex > questionIndex || -1 !== url && hashIndex > url
  }
  function _matchWildcard(url$$0, pattern, returnVal) {
    function _regexEscape(text) {
      return text.replace(/[\-\[\]{}()*+?.,\/\\^$|#\s]/g, "\\$&")
    }
    function _cleanURL(url, isPattern) {
      return _url && !isPattern ? _url : url.replace(/^(.*[^\*])(\/(home|default|index)\..{3,4})((\?|#).*)*$/i, "$1$4")
    }
    function _removeWWW(url, isPattern) {
      url = url.replace(/^(https?:\/\/)(www\.)?(.*)$/i, "$1$3");
      isPattern && (url = url.replace(/(^\*?|\/\/)www\./i, "$1"));
      return url
    }
    function _stripSlashes(url, isQueryParamPresent, isHashPresent) {
      url = url.replace(/\/$/, "");
      isQueryParamPresent && (isQueryParamPresent = url.indexOf("/?"), url.indexOf("?") - 1 === isQueryParamPresent && (url = url.replace(/\/\?([^\?]*)(.*)/, "?$1$2")));
      isHashPresent && (isHashPresent = url.indexOf("/#"), url.indexOf("#") - 1 === isHashPresent && (url = url.replace(/\/#([^#]*)(.*)/, "#$1$2")));
      return url
    }
    if("string" !== typeof url$$0 || "string" !== typeof pattern) {
      return!1
    }
    var isQueryParamPresentInPattern = isQueryParamPresent(pattern), isHashPresentInPattern = -1 !== pattern.indexOf("#"), isQueryParamPresentInURL = isQueryParamPresent(url$$0), isHashPresentInURL = -1 !== url$$0.indexOf("#");
    isQueryParamPresentInPattern || (isQueryParamPresentInURL && isHashPresentInURL ? url$$0 = url$$0.replace(/^(.*?)(\?[^#]*)(#?.*)$/, "$1$3") : isQueryParamPresentInURL && !isHashPresentInURL && (url$$0 = url$$0.replace(/^(.*)(\?.*)$/, "$1")));
    isHashPresentInPattern || isHashPresentInURL && (url$$0 = url$$0.replace(/^(.*?)(#.*)$/, "$1"));
    "/" !== url$$0 && (url$$0 = _stripSlashes(url$$0, isQueryParamPresentInURL, isHashPresentInURL));
    "/" !== pattern && (pattern = _stripSlashes(pattern, isQueryParamPresentInPattern, isHashPresentInPattern));
    isQueryParamPresentInPattern = RegExp("^" + _regexEscape(pattern).replace(/\\\*/g, "(.*)") + "$", "gi");
    if(isQueryParamPresentInPattern.test(url$$0)) {
      return isQueryParamPresentInPattern = RegExp("^" + _regexEscape(pattern).replace(/\\\*/g, "(.*)") + "$", "gi"), !returnVal || isQueryParamPresentInPattern.exec(url$$0)
    }
    url$$0 = _removeWWW(url$$0);
    pattern = _removeWWW(pattern, 1);
    isQueryParamPresentInPattern = RegExp("^" + _regexEscape(pattern).replace(/\\\*/g, "(.*)") + "$", "gi");
    if(isQueryParamPresentInPattern.test(url$$0)) {
      return isQueryParamPresentInPattern = RegExp("^" + _regexEscape(pattern).replace(/\\\*/g, "(.*)") + "$", "gi"), !returnVal || isQueryParamPresentInPattern.exec(url$$0)
    }
    isQueryParamPresentInPattern = _cleanURL(pattern, 1);
    if(-1 === pattern.indexOf("*") && (isHashPresentInPattern = _removeWWW(_toAbsURL(url$$0)).replace(/\/$/, "").replace(/\/\?/, "?"), isHashPresentInPattern === pattern || isHashPresentInPattern === isQueryParamPresentInPattern)) {
      return!0
    }
    url$$0 = _cleanURL(url$$0);
    pattern = isQueryParamPresentInPattern;
    isQueryParamPresentInPattern = RegExp("^" + _regexEscape(pattern).replace(/\\\*/g, "(.*)") + "$", "gi");
    return isQueryParamPresentInPattern.test(url$$0) ? (isQueryParamPresentInPattern = RegExp("^" + _regexEscape(pattern).replace(/\\\*/g, "(.*)") + "$", "gi"), !returnVal || isQueryParamPresentInPattern.exec(url$$0)) : !1
  }
  function _createCookie(name, value, days, id) {
    window._vis_debug && 0 !== name.indexOf("debug") && (name = "debug" + name);
    var isThirdParty = !1;
    if(!isNaN(_cookieDays = parseFloat(_cookieDays)) && isFinite(_cookieDays)) {
      days = _cookieDays
    }
    var expires = "", domain = "", date;
    days && (date = new Date((new Date).getTime() + 864E5 * days), date = date.toGMTString(), expires += "; expires=" + date);
    "undefined" !== typeof _domain && (domain += "; domain=." + _domain);
    document.cookie = name + "=" + encodeURIComponent(value) + expires + domain + "; path=/";
    "undefined" !== typeof id && _vwo_exp[id].multiple_domains && (isThirdParty = !0, expires = vwo_$("<iframe>").attr({height:"1px", width:"1px", border:"0", "class":"vwo_iframe", name:"vwo_" + Math.random(), style:"position: absolute; left: -2000px; display: none"}).appendTo("head").load(function() {
      name.indexOf("split") != -1 && this.parentNode.removeChild(this)
    }), domain = "//dev.visualwebsiteoptimizer.com/ping_tpc.php?account=" + window._vwo_acc_id + "&name=" + encodeURIComponent(name) + "&value=" + encodeURIComponent(value) + "&days=" + days + "&random=" + Math.random(), /MSIE (\d+\.\d+);/.test(navigator.userAgent) ? expires.attr("src", domain) : (expires = vwo_$("<form>").attr({action:"//dev.visualwebsiteoptimizer.com/ping_tpc.php", "accept-charset":"UTF-8", target:expires.attr("name"), enctype:"application/x-www-form-urlencoded", method:"post", 
    id:"vwo_form", style:"display:none"}).appendTo("head"), expires.attr("action", domain).submit(), expires.remove()));
    triggerEvent(SET_COOKIE, name, value, days, id, isThirdParty)
  }
  function _readCookie(name) {
    window._vis_debug && (name = "debug" + name);
    var match = document.cookie.match(RegExp("(?:^|;)\\s?" + name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "=(.*?)(?:;|$)", "i")), match = match && decodeURIComponent(match[1]);
    triggerEvent(GET_COOKIE, name, match);
    return match
  }
  function _isSplit(id) {
    isTestTriggeredByHashChange && vwo_$("_vis_opt_hidden").remove();
    if("SPLIT_URL" === _vwo_exp[id].type && ("RUNNING" === _vwo_exp[id].status || preview)) {
      var combination, i = _readCookie("_vis_opt_exp_" + id + "_split");
      if(!i) {
        return!1
      }
      if(_matchWildcard(_current_url, _vwo_exp[id].sections[1].variations[i])) {
        return triggerEvent(MATCH_WILDCARD, id, _current_url, _vwo_exp[id].sections[1].variations[i], !0), combination = _readCookie("_vis_opt_exp_" + id + "_combi"), _vwo_exp[id].combination_chosen = i, triggerEvent(CHOOSE_COMBINATION, id, i, !0), !combination && !preview ? (_registerHit(i, id), _createCookie("_vis_opt_exp_" + id + "_combi", i, 100, id)) : (triggerEvent(CONVERT_ALL_VISIT_GOALS_FOR_EXPERIMENT, id, !0), _goalVisit(id)), !0
      }
      triggerEvent(MATCH_WILDCARD, id, _current_url, _vwo_exp[id].sections[1].variations[i], !1)
    }
    return!1
  }
  function checkSegmentOnAllVisits(id) {
    var VWOCheckSegmentAlways = window._vis_opt_check_segment || {};
    return!!(VWOCheckSegmentAlways[id] || void 0 == VWOCheckSegmentAlways[id] && VWOCheckSegmentAlways.global)
  }
  function _eligible(id) {
    if(preview || !checkSegmentOnAllVisits(id) && _readCookie("_vis_opt_exp_" + id + "_combi")) {
      return!0
    }
    "undefined" === typeof _vwo_exp[id].segment_eligble && eval("_vwo_exp['" + id + "'].segment_eligble = " + _vwo_exp[id].segment_code);
    return _vwo_exp[id].segment_eligble
  }
  function _delCSS(ruleName, id) {
    var isIE = !1;
    if("string" === typeof ruleName) {
      var ruleName = ruleName.toLowerCase(), style, styleSheet, xpaths, xpath, i, _vwo_css;
      style = document.getElementById("_vis_opt_path_hides_" + id), _vwo_css = "{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}";
      if(style) {
        if(style.sheet) {
          style.styleSheet || (ruleName = ruleName.replace(/\*:/g, ":"));
          styleSheet = style.sheet;
          xpaths = styleSheet.cssRules.length ? styleSheet.cssRules[0].selectorText.toLowerCase().split(",") : "";
          xpath = "";
          for(i = 0;i < xpaths.length;i++) {
            vwo_$.trim(xpaths[i]) !== ruleName && (xpath += xpaths[i] + ",")
          }
          if(xpath) {
            xpath = xpath.substr(0, xpath.length - 1);
            try {
              styleSheet.insertRule(xpath + _vwo_css, 1)
            }catch(e) {
            }finally {
              styleSheet.deleteRule(0)
            }
          }else {
            style && style.parentNode && style.parentNode.removeChild(style)
          }
        }else {
          if(style.styleSheet) {
            styleSheet = style.styleSheet;
            i = 0;
            isIE = !0;
            do {
              (style = styleSheet.rules[i]) && style.selectorText.toLowerCase() === ruleName ? styleSheet.removeRule(i) : i++
            }while(style)
          }
        }
        triggerEvent(DELETE_CSS_RULE, ruleName, isIE)
      }
    }
  }
  function _unhideVariation(id) {
    var keys = _keys(_vwo_exp[id].sections), length = keys.length, key, section, keys2, length2, key2, length3, variations, xpath;
    if("VISUAL_AB" === _vwo_exp[id].type) {
      for(;length--;) {
        if(key = keys[length], section = _vwo_exp[id].sections[key], section.variations) {
          keys2 = _keys(section.variations);
          length2 = keys2.length;
          for(triggerEvent(UNHIDE_SECTION, id, key, !length2);length2--;) {
            if(key2 = keys2[length2], variations = section.variations[key2], section.variations[key2] = variations = "string" === typeof variations ? variations && vwo_$.parseJSON(variations) : variations) {
              length3 = variations.length;
              for(triggerEvent(UNHIDE_VARIATION, id, key, key2, !length3);length3--;) {
                xpath = variations[length3].xpath, triggerEvent(UNHIDE_ELEMENT, id, key, key2, xpath), _delCSS(xpath)
              }
            }else {
              triggerEvent(UNHIDE_VARIATION, id, key, key2, !variations)
            }
          }
        }else {
          triggerEvent(UNHIDE_SECTION, id, key, !0)
        }
      }
    }else {
      if("VISUAL" === _vwo_exp[id].type) {
        for(;length--;) {
          key = keys[length], xpath = _vwo_exp[id].sections[key].path, triggerEvent(UNHIDE_ELEMENT, id, key, void 0, xpath), _delCSS(xpath)
        }
      }else {
        "SPLIT_URL" === _vwo_exp[id].type && (triggerEvent(UNHIDE_ELEMENT, id, void 0, void 0, "*"), _delCSS("*"), triggerEvent(UNHIDE_ELEMENT, id, void 0, void 0, "body"), _delCSS("body"))
      }
    }
  }
  function _goalVisit(id) {
    for(var keys = _keys(_vwo_exp[id].goals), length = keys.length, key, goal;length--;) {
      key = keys[length], isNaN(parseInt(key, 10)) ? triggerEvent(CONVERT_VISIT_GOAL_FOR_EXPERIMENT, id, void 0, _current_url) : (goal = _vwo_exp[id].goals[key], "SEPARATE_PAGE" === goal.type && _matchWildcard(_current_url, goal.url) && (triggerEvent(CONVERT_VISIT_GOAL_FOR_EXPERIMENT, id, key, _current_url), _registerConversion(key, id)))
    }
  }
  function _isBot() {
    return _vwo_s().f_con(_vwo_s().ua(), "bot") || _vwo_s().f_con(_vwo_s().ua(), "spider") || _vwo_s().f_con(_vwo_s().ua(), "preview")
  }
  function _topInitialize() {
    function _optOut() {
      if(preview) {
        return triggerEvent(OPT_OUT, !1), !1
      }
      var opted_out = _readCookie("_vis_opt_out");
      if(opted_out || -1 < loc.href.indexOf("vwo_opt_out=1")) {
        return opted_out || ((new Image).src = "//dev.visualwebsiteoptimizer.com/optOut.gif?account=" + window._vwo_acc_id + "&domain=" + _domain, _createCookie("_vis_opt_out", 1, 3650), 1 == _readCookie("_vis_opt_out") && alert("You have successfully opted out of Visual Website Optimizer for this website.")), triggerEvent(OPT_OUT, !0), !0
      }
      triggerEvent(OPT_OUT, !1);
      return!1
    }
    var id, exp_length, third_party_length, vwo_temp = document.getElementById("vwo_temp"), xpath = "", canPerformExperiment = !1;
    third_party_length = _createCookie("_vis_opt_test_cookie", "1") || !_readCookie("_vis_opt_test_cookie");
    for(exp_length = _vwo_exp_ids.length;exp_length--;) {
      id = _vwo_exp_ids[exp_length], "SPLIT_URL" === _vwo_exp[id].type && (_vwo_exp_ids.splice(exp_length, 1), _vwo_exp_ids.push(id))
    }
    if(third_party_length || _optOut()) {
      triggerEvent(TOP_INITIALIZE_ERROR, void 0, third_party_length, _optOut())
    }else {
      for(exp_length = _vwo_exp_ids.length;exp_length-- && !_redirect;) {
        id = _vwo_exp_ids[exp_length];
        if("undefined" != typeof _vwo_exp[id].third_party_exclude && _createCookie("_vis_opt_exp_" + id + "_exclude", "1", 100), "undefined" != typeof _vwo_exp[id].third_party_combi && _createCookie("_vis_opt_exp_" + id + "_combi", _vwo_exp[id].third_party_combi, 100), "undefined" != typeof _vwo_exp[id].third_party_goals) {
          for(third_party_length = 0;third_party_length < _vwo_exp[id].third_party_goals.length;third_party_length++) {
            _createCookie("_vis_opt_exp_" + id + "_goal_" + _vwo_exp[id].third_party_goals[third_party_length], "1", 100)
          }
        }
        if("undefined" !== typeof _vwo_exp[id].third_party) {
          for(third_party_length = _keys(_vwo_exp[id].third_party).length;third_party_length;) {
            _createCookie(_vwo_exp[id].third_party[third_party_length].name, _vwo_exp[id].third_party[third_party_length--].value, 100)
          }
        }
        triggerEvent(TOP_INITIALIZE_BEGIN, id);
        third_party_length = _readCookie("_vis_opt_exp_" + id + "_combi");
        _vwo_exp[id].ready = !1;
        if(_readCookie("_vis_opt_exp_" + id + "_exclude") && !preview) {
          triggerEvent(UNHIDE_ALL_VARIATIONS, id, !0, !0)
        }else {
          if(_isSplit(id)) {
            triggerEvent(UNHIDE_ALL_VARIATIONS, id, void 0, void 0, !0), _vwo_exp[id].ready = !checkSegmentOnAllVisits(id) || _eligible(id)
          }else {
            if(!preview && !third_party_length && Math.random() > _vwo_exp[id].pc_traffic / 100) {
              triggerEvent(UNHIDE_ALL_VARIATIONS, id, !0, void 0, void 0, !0), _createCookie("_vis_opt_exp_" + id + "_exclude", "1", 100, id)
            }else {
              if(_eligible(id)) {
                if(("RUNNING" === _vwo_exp[id].status || preview) && ("SPLIT_URL" !== _vwo_exp[id].type && !triggerEvent(CONVERT_ALL_VISIT_GOALS_FOR_EXPERIMENT, id) && _goalVisit(id) || 1) && _doExperimentHere(id)) {
                  canPerformExperiment = !0;
                  if("SPLIT_URL" === _vwo_exp[id].type) {
                    _splitURL(id)
                  }else {
                    third_party_length = !1;
                    var combi;
                    (_vwo_exp[id].combination_chosen = combi = preview || _readCookie("_vis_opt_exp_" + id + "_combi")) && (third_party_length = !0);
                    combi = _vwo_exp[id].combination_chosen = combi || _chooseCombination(id);
                    if(!_vwo_exp[id].combination_chosen) {
                      triggerEvent(UNHIDE_ALL_VARIATIONS, id, void 0, void 0, void 0, void 0, void 0, !0);
                      continue
                    }
                    triggerEvent(CHOOSE_COMBINATION, id, combi, third_party_length);
                    if("VISUAL_AB" === _vwo_exp[id].type && 1 != _vwo_exp[id].combination_chosen) {
                      if(third_party_length = (third_party_length = _vwo_exp[id].sections["1"].variations[_vwo_exp[id].combination_chosen]) && vwo_$.parseJSON(third_party_length)) {
                        for(combi = 0;combi < third_party_length.length;combi++) {
                          third_party_length[combi].xpath && (xpath += third_party_length[combi].xpath + ",")
                        }
                      }
                    }else {
                      keys = _keys(_vwo_exp[id].sections);
                      for(length = keys.length;length--;) {
                        _vwo_exp[id].sections[keys[length]].path && (xpath += _vwo_exp[id].sections[keys[length]].path + ",")
                      }
                    }
                    vwo_temp || vwo_$("head").append("<span style='display:none' id='vwo_temp'></span>");
                    xpath && (xpath = xpath.substr(0, xpath.length - 1), isTestTriggeredByHashChange || document.write("<style class='_vis_opt_hidden' id='_vis_opt_path_hides_" + id + "'>" + xpath + "{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}</style>"));
                    triggerEvent(ELEMENT_LOAD_TIMER_START, id);
                    _elementLoaded(id)
                  }
                  _vwo_exp[id].ready = !0
                }else {
                  triggerEvent(CONVERT_ALL_VISIT_GOALS_FOR_EXPERIMENT, id, void 0, canPerformExperiment), _goalVisit(id)
                }
              }else {
                triggerEvent(UNHIDE_ALL_VARIATIONS, id, void 0, void 0, void 0, !0, !0)
              }
            }
          }
        }
      }
      !isHashChangeEventAdded && (isHashChangeEventAdded = !0) && vwo_$(window).hashchange(function() {
        _redirect = 0;
        window._vis_opt_queue = _backup_queue;
        isTestTriggeredByHashChange = !0;
        _current_url = window._vis_opt_url || loc.href.replace(/_vis_(test_id|opt_(preview_combination|random))=[\.\d,]+&?/g, "").replace(/(\/|\?|&)$/, "");
        triggerEvent(HASH_CHANGE, _current_url, _redirect);
        _vis_opt_top_initialize();
        _vis_opt_bottom_initialize()
      });
      0 == _redirect && (_legacyVariablesSet(), _vwo_queue.finish());
      triggerEvent(TOP_INITIALIZE_END)
    }
  }
  function _elementLoaded(id$$0) {
    _bottomRenderCombination(_vwo_exp[id$$0].combination_chosen, id$$0);
    _vwo_exp[id$$0].timeout = function(fn, id, timeout) {
      var self = this;
      return setTimeout(function() {
        fn.call(self, id)
      }, timeout)
    }.call(this, _elementLoaded, id$$0, 50)
  }
  function _doExperimentHere(id) {
    if(_vwo_exp[id].exclude_url && RegExp(_vwo_exp[id].exclude_url, "gi").test(URL)) {
      return triggerEvent(EXCLUDE_URL, id), !1
    }
    var didMatch = _matchWildcard(_current_url, _vwo_exp[id].url_pattern);
    triggerEvent(MATCH_WILDCARD, id, _current_url, _vwo_exp[id].url_pattern, didMatch);
    return didMatch
  }
  function _registerConversion(_vwo_goal_id, _vwo_exp_id, _vwo_revenue) {
    var _vwo_goal_id = _vwo_goal_id || 1, _vwo_exp_id = _vwo_exp_id || _vwo_exp_ids[0], combination = _readCookie("_vis_opt_exp_" + _vwo_exp_id + "_combi"), cookieString = "_vis_opt_exp_" + _vwo_exp_id + "_goal_" + _vwo_goal_id, img = new Image;
    !combination || _readCookie(cookieString) || _isBot() || !_eligible(_vwo_exp_id) ? triggerEvent(REGISTER_CONVERSION, _vwo_exp_id, _vwo_goal_id, _vwo_revenue, !1) : (window._vis_debug || (img.src = "//dev.visualwebsiteoptimizer.com/c.gif?experiment_id=" + _vwo_exp_id + "&account_id=" + window._vwo_acc_id + "&goal_id=" + _vwo_goal_id + "&combination=" + combination + "&random=" + Math.random() + ("undefined" === typeof _vwo_revenue ? "" : "&r=" + _vwo_revenue), _iehack(img)), _createCookie(cookieString, 
    "1", 100, _vwo_exp_id), triggerEvent(REGISTER_CONVERSION, _vwo_exp_id, _vwo_goal_id, _vwo_revenue, !0))
  }
  function _goalConversion(_vwo_goal_id) {
    if(!isNaN(parseInt(_vwo_goal_id, 10))) {
      triggerEvent(CONVERT_GOAL_FOR_ALL_EXPERIMENTS, _vwo_goal_id);
      for(var exp_length = _vwo_exp_ids.length, id;exp_length--;) {
        id = _vwo_exp_ids[exp_length], "object" === typeof _vwo_exp[id].goals[_vwo_goal_id] && _registerConversion(_vwo_goal_id, id)
      }
    }
  }
  function _revenueConversion(revenue) {
    if(!isNaN(parseFloat(revenue, 10))) {
      var goal_id, id, exp_length = _vwo_exp_ids.length, keys, length;
      for(triggerEvent(CONVERT_ALL_REVENUE_GOALS_FOR_ALL_EXPERIMENTS, revenue);exp_length--;) {
        id = _vwo_exp_ids[exp_length];
        keys = _keys(_vwo_exp[id].goals);
        for(length = keys.length;length--;) {
          goal_id = keys[length], "REVENUE_TRACKING" === _vwo_exp[id].goals[goal_id].type && _registerConversion(goal_id, id, revenue)
        }
      }
    }
  }
  function _chooseCombination(id) {
    var combiChosen = _vwo_exp[id].combination_chosen;
    if(combiChosen) {
      return combiChosen
    }
    var random_number = Math.random(), keys = _keys(_vwo_exp[id].combs), length = keys.length, cumulative_combinations = {}, no_segment_probability = {}, cumulative_probability = 0, segment_qualified = !1, no_seg = !1, i;
    for(i = 0;i < length;i++) {
      combiChosen = keys[i], !isNaN(parseFloat(_vwo_exp[id].combs[combiChosen])) && 0 != _vwo_exp[id].combs[combiChosen] && ("VISUAL_AB" === _vwo_exp[id].type || "SPLIT_URL" === _vwo_exp[id].type ? "undefined" !== typeof _vwo_exp[id].sections["1"].segment && "undefined" !== typeof _vwo_exp[id].sections["1"].segment[combiChosen] && (0 == _vwo_exp[id].sections["1"].segment[combiChosen] ? (no_seg = !0, no_segment_probability[combiChosen] = _vwo_exp[id].combs[combiChosen]) : eval(_vwo_exp[id].sections["1"].segment[combiChosen]) && 
      (1 != _vwo_exp[id].sections["1"].segment[combiChosen] && (segment_qualified = !0), cumulative_combinations[combiChosen] = cumulative_probability + _vwo_exp[id].combs[combiChosen], cumulative_probability += _vwo_exp[id].combs[combiChosen])) : (cumulative_combinations[combiChosen] = cumulative_probability + _vwo_exp[id].combs[combiChosen], cumulative_probability += _vwo_exp[id].combs[combiChosen]))
    }
    if(!segment_qualified && no_seg) {
      keys = _keys(no_segment_probability);
      length = keys.length;
      for(i = 0;i < length;i++) {
        combiChosen = keys[i], cumulative_combinations[combiChosen] = cumulative_probability + no_segment_probability[combiChosen], cumulative_probability += no_segment_probability[combiChosen]
      }
    }
    0 < cumulative_probability && 1 !== cumulative_probability && (random_number *= cumulative_probability);
    keys = _keys(cumulative_combinations);
    length = keys.length;
    for(i = 0;i < length;i++) {
      if(combiChosen = keys[i], !isNaN(parseFloat(_vwo_exp[id].combs[combiChosen])) && random_number <= cumulative_combinations[combiChosen]) {
        return combiChosen
      }
    }
  }
  function _redirectToURL(id, redirect_url) {
    window._vis_opt_queue = [];
    _redirect = 1;
    var star_values = _matchWildcard(_current_url, _vwo_exp[id].url_pattern, !0), i, length, to_redirect, from_url_vars;
    if(!star_values || 1 === star_values.length) {
      to_redirect = redirect_url
    }else {
      to_redirect = "";
      from_url_vars = redirect_url.split("*");
      i = 1;
      for(length = from_url_vars.length;i < length;i++) {
        to_redirect += from_url_vars[i - 1] + star_values[i]
      }
      to_redirect += from_url_vars[from_url_vars.length - 1]
    }
    to_redirect = to_redirect.replace(/\*/g, "");
    if(loc.search) {
      if(isQueryParamPresent(to_redirect)) {
        from_url_vars = _getUrlVars(loc.search);
        i = _getUrlVars(to_redirect);
        keys = _keys(from_url_vars);
        for(length = keys.length;length--;) {
          star_values = keys[length], "undefined" === typeof i[star_values] && (to_redirect += "&" + star_values + "=" + from_url_vars[star_values])
        }
      }else {
        to_redirect = -1 !== to_redirect.indexOf("#") ? to_redirect.replace(/(.*?)#(.*)/, "$1" + loc.search + "#$2") : to_redirect + loc.search
      }
    }
    loc.hash && -1 === to_redirect.indexOf("#") && (to_redirect += loc.hash);
    triggerEvent(BEFORE_REDIRECT_TO_URL, id, to_redirect);
    this.location.replace(to_redirect)
  }
  function _getUrlVars(url) {
    var vars = {}, i, hashes;
    -1 !== url.indexOf("#") && (url = url.slice(0, url.indexOf("#")));
    hashes = url.slice(url.indexOf("?") + 1).split("&").reverse();
    for(i = hashes.length;i--;) {
      url = hashes[i].split("="), vars[url[0]] = "undefined" === typeof vars[url[0]] ? url[1] : vars[url[0]] + "&" + url[0] + "=" + url[1]
    }
    return vars
  }
  function _splitURL(id) {
    var combination = preview || _readCookie("_vis_opt_exp_" + id + "_combi");
    (combination = parseInt(combination, 10)) ? 1 === combination ? (triggerEvent(UNHIDE_ALL_VARIATIONS, id, void 0, void 0, void 0, !0), _goalVisit(id), _vwo_exp[id].combination_chosen = combination, triggerEvent(CHOOSE_COMBINATION, id, combination, !0)) : (_createCookie("_vis_opt_exp_" + id + "_split", combination, 100, id), triggerEvent(SPLIT_URL, id), _redirectToURL(id, _vwo_exp[id].sections[1].variations[combination])) : isNaN(combination = parseInt(_chooseCombination(id),
    10)) ? (triggerEvent(CHOOSE_COMBINATION, id, void 0, !1), triggerEvent(UNHIDE_ALL_VARIATIONS, id, void 0, void 0, void 0, !0)) : _vwo_exp[id].multiple_domains && 1 !== combination ? (_createCookie("_vis_opt_exp_" + id + "_split", combination, 100, id), !isTestTriggeredByHashChange && document.write("<style class='_vis_opt_hidden'>html,body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}</style>"), _redirect = 1, vwo_$(".vwo_iframe").load(function() {
      triggerEvent(SPLIT_URL, id);
      _redirectToURL(id, _vwo_exp[id].sections[1].variations[combination])
    })) : 1 !== combination ? (_createCookie("_vis_opt_exp_" + id + "_split", combination, 100, id), triggerEvent(SPLIT_URL, id), _redirectToURL(id, _vwo_exp[id].sections[1].variations[combination])) : (_vwo_exp[id].combination_chosen = combination, _registerHit(1, id), _createCookie("_vis_opt_exp_" + id + "_combi", combination, 100, id), triggerEvent(CHOOSE_COMBINATION, id, combination, !1), triggerEvent(UNHIDE_ALL_VARIATIONS, id, void 0, void 0, void 0, !0))
  }
  function _getXPath(el) {
    if(!el) {
      return null
    }
    var e = el, names = [], tag = el.tagName, searchElement;
    if("string" == typeof tag && ("body" === tag.toLowerCase() || "head" === tag.toLowerCase())) {
      return tag
    }
    for(;el;) {
      tag = el.tagName;
      searchElement = tag.match(/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/);
      if(!tag || !searchElement || (searchElement && searchElement[0]) !== tag) {
        tag = "*"
      }
      if((searchElement = vwo_$(el).attr("id")) && "string" == typeof searchElement) {
        if(searchElement = vwo_$(tag + "#" + vwo_$(el).attr("id")), 1 === searchElement.length) {
          names.unshift(searchElement.selector);
          break
        }else {
          names.unshift(tag)
        }
      }else {
        names.unshift(tag)
      }
      a: {
        if(el.previousElementSibling) {
          el = el.previousElementSibling
        }else {
          for(;el = el.previousSibling;) {
            if(1 === el.nodeType) {
              break a
            }
          }
          el = void 0
        }
      }
    }
    -1 == names[0].indexOf("#") && (names[0] += ":first-child");
    return _getXPath(e.parentNode) + " > " + names.join(" + ")
  }
  function _click(e) {
    for(var _goal_id, _goal_detected, id, x_percent, y_percent, _vwo_goal_url, exp_length = _vwo_exp_ids.length, $target = vwo_$(e.target), keys, img, isEngagement;exp_length--;) {
      if(id = _vwo_exp_ids[exp_length], "RUNNING" === _vwo_exp[id].status) {
        if("a" === $target.get(0).tagName.toLowerCase()) {
          _vwo_goal_url = $target.attr("href"), isEngagement = !0
        }else {
          if(0 < $target.parents("a").length) {
            _vwo_goal_url = $target.parents("a").first().attr("href"), isEngagement = !0
          }else {
            if("button" === $target.get(0).tagName.toLowerCase() || 0 < $target.parents("button").length || "input" === $target.get(0).tagName.toLowerCase() && ("button" == $target.attr("type") || "image" == $target.attr("type") || "submit" == $target.attr("type"))) {
              isEngagement = !0
            }
          }
        }
        keys = _keys(_vwo_exp[id].goals);
        for(x_percent = keys.length;x_percent--;) {
          if(_goal_id = keys[x_percent], y_percent = _vwo_exp[id].goals[_goal_id].type, img = _vwo_exp[id].goals[_goal_id].url, !isNaN(parseInt(_goal_id, 10)) && img) {
            try {
              if("ENGAGEMENT" === y_percent && isEngagement || "ON_PAGE" === y_percent && _matchWildcard(_vwo_goal_url, img) || "CLICK_ELEMENT" === y_percent && ($target.is(img) || $target.parents(img).length)) {
                _goal_detected = !0, _registerConversion(_goal_id, id)
              }
            }catch(e$$0) {
            }
          }
        }
        if(_vwo_exp[id].clickmap) {
          _goal_id = _readCookie("_vis_opt_exp_" + id + "_combi");
          _vwo_exp[id].clicks = _vwo_exp[id].clicks || 0;
          keys = _getXPath($target.get(0));
          if(-1 != (x_percent = keys.search(/[^>+\s]*#[^#]*$/))) {
            keys = keys.substr(x_percent).replace(/(#[\w_-]+):first-child/g, "$1")
          }
          if(_goal_id && "string" == typeof keys && "html" != keys.toLowerCase() && !_isBot() && ++_vwo_exp[id].clicks <= _vwo_clicks && _eligible(id)) {
            if("a" === $target.get(0).tagName.toLowerCase() || 0 < $target.parents("a").length) {
              _goal_detected = !0
            }
            y_percent = $target.offset();
            x_percent = Math.round(1E3 * (e.pageX - y_percent.left) / $target.width()) / 1E3;
            y_percent = Math.round(1E3 * (e.pageY - y_percent.top) / $target.height()) / 1E3;
            if(0 > x_percent || 1 < x_percent) {
              x_percent = 0.5
            }
            if(0 > y_percent || 1 < y_percent) {
              y_percent = 0.5
            }
            window._vis_debug || (img = new Image, img.src = "//dev.visualwebsiteoptimizer.com/h.gif?experiment_id=" + id + "&account_id=" + window._vwo_acc_id + "&combination=" + _goal_id + "&random=" + Math.random() + "&url=" + encodeURIComponent(loc.href) + "&path=" + encodeURIComponent(keys) + "&x=" + x_percent + "&y=" + y_percent, _iehack(img));
            triggerEvent(HEATMAP_CLICK, id, _goal_id, keys, x_percent, y_percent)
          }
        }
      }
    }
    _vwo_goal_url && _goal_detected && -1 === _vwo_goal_url.indexOf("javascript:") && "#" !== _vwo_goal_url.charAt(0) && _pause(500)
  }
  function _monitorClicks() {
    !preview && vwo_$("body").bind("mousedown", _click);
    isMousedownEventAdded = !0
  }
  function _monitorSubmissions() {
    !preview && vwo_$("body").bind("submit", function(e) {
      var correctedTarget = vwo_$(e.target).get(0);
      "string" == typeof correctedTarget.tagName && ("form" !== correctedTarget.tagName.toLowerCase() && 0 < vwo_$(correctedTarget).parents("form").length) && (correctedTarget = vwo_$(e.target).parents("form").get(0));
      if(!("string" == typeof correctedTarget.tagName && "form" !== correctedTarget.tagName.toLowerCase() || "vwo_form" === vwo_$(correctedTarget).attr("id"))) {
        for(var _goal_detected = !1, id, exp_length = _vwo_exp_ids.length, keys, length;exp_length--;) {
          id = _vwo_exp_ids[exp_length];
          keys = _keys(_vwo_exp[id].goals);
          for(length = keys.length;length--;) {
            if(e = parseInt(keys[length], 10), !isNaN(e) && ("ENGAGEMENT" === _vwo_exp[id].goals[e].type || "FORM_SUBMIT" === _vwo_exp[id].goals[e].type && _matchWildcard(vwo_$(correctedTarget).attr("action"), _vwo_exp[id].goals[e].url))) {
              _goal_detected = !0, _registerConversion(e, id)
            }
          }
        }
        _goal_detected && _pause(500)
      }
    });
    isSubmitEventAdded = !0
  }
  function _registerHit(combination, id) {
    if(!_readCookie("_vis_opt_exp_" + id + "_combi") && !_isBot()) {
      var img = new Image;
      window._vis_debug || (img.src = "//dev.visualwebsiteoptimizer.com/l.gif?experiment_id=" + id + "&account_id=" + window._vwo_acc_id + "&combination=" + combination + "&random=" + Math.random(), _iehack(img));
      triggerEvent(REGISTER_HIT, id, combination)
    }
  }
  function _legacyVariablesSet() {
    for(var _exp_id = 0, i = _vwo_exp_ids.length, id, l;i--;) {
      if(id = _vwo_exp_ids[i], !0 === _vwo_exp[id].ready) {
        _exp_id = id;
        break
      }
    }
    if(window._vis_opt_experiment_id = _exp_id) {
      id = _keys(_vwo_exp[_exp_id].comb_n);
      for(l = id.length;l--;) {
        i = id[l], _comb_name[i] = _vwo_exp[_exp_id].comb_n[i]
      }
    }
  }
  function _bottomRenderCombination(combination, id) {
    var combinations_to_use = combination.split(","), section_id = 0, content, path, selections, experiment_type = _vwo_exp[id].type, combination_use, combination_use_length, variation_data, temp, f;
    try {
      "VISUAL_AB" === experiment_type && ((variation_data = _vwo_exp[id].sections["1"].variations[combination]) ? ("object" !== typeof variation_data && (variation_data = vwo_$.parseJSON(variation_data)), combinations_to_use = Array(variation_data.length)) : combinations_to_use = []);
      combination_use_length = combinations_to_use.length;
      0 === vwo_$("#vwo_temp").length && vwo_$("<span style='display:none' id='vwo_temp'></span>").appendTo("body").html("<p></p>");
      for(combination_use = 0;combination_use < combination_use_length;combination_use++) {
        if("VISUAL_AB" === experiment_type) {
          section_id = 1;
          if(!(path = variation_data[combination_use].xpath)) {
            continue
          }
          "head" !== path.toLowerCase() && !vwo_$(path).hasClass("vwo_loaded") ? currentCombinationXPaths[path] = [section_id, combination] : delete currentCombinationXPaths[path];
          content = 2 === _vwo_exp[id].version ? variation_data[combination_use].js : variation_data[combination_use].content
        }else {
          if(!(path = _vwo_exp[id].sections[++section_id].path)) {
            continue
          }
          "head" !== path.toLowerCase() && !vwo_$(path).hasClass("vwo_loaded") && (currentCombinationXPaths[path] = [section_id, combinations_to_use[combination_use]]);
          if(1 === _vwo_exp[id].version && 1 === parseInt(combinations_to_use[combination_use], 10)) {
            triggerEvent(ELEMENT_LOADED, id, section_id, combinations_to_use[combination_use], path);
            vwo_$(path).addClass("vwo_loaded");
            _delCSS(path, id);
            continue
          }
          content = _vwo_exp[id].sections[section_id].variations[combinations_to_use[combination_use]];
          2 === _vwo_exp[id].version && "string" === typeof content && (content = content && vwo_$.parseJSON(content) || "")
        }
        content = content.replace("VWO_SECTION_ID", section_id);
        if("head" === path.toLowerCase()) {
          !0 !== _vwo_exp[id].sections[section_id].loaded && (_vwo_exp[id].sections[section_id].loaded = !0, triggerEvent(ELEMENT_LOADED, id, section_id, "VISUAL" === experiment_type ? combinations_to_use[combination_use] : combination, path), vwo_$("head").append(vwo_$(content).addClass("vwo_loaded _vwo_variation_" + section_id)), triggerEvent(ELEMENT_CHANGES_APPLIED, id, section_id, "VISUAL" === experiment_type ? combinations_to_use[combination_use] : combination, path, content), delete currentCombinationXPaths[path])
        }else {
          if(selections = vwo_$(path).filter(":not(.vwo_loaded)"), 0 < selections.length) {
            "VISUAL" === experiment_type ? triggerEvent(ELEMENT_LOADED, id, section_id, combinations_to_use[combination_use], path) : triggerEvent(ELEMENT_LOADED, id, "1", combination, path), delete currentCombinationXPaths[path], 2 !== _vwo_exp[id].version && (document.getElementById("vwo_temp").innerHTML = "<span class='vwo_span'>" + content + "<script><\/script></span>"), 2 === _vwo_exp[id].version ? (-1 !== content.indexOf("_vwo_api_section_callback") && (temp = [], selections.each(function() {
              temp.push(vwo_$(this).clone())
            })), f = new Function("var x=arguments[0],vwo_$=arguments[1];" + content), f.call(this, path, vwo_$), void 0 !== temp && vwo_$(temp).each(function() {
              _vwo_api_section_callback[section_id](vwo_$(path), this)
            })) : selections.each(function() {
              if("function" === typeof _vwo_api_section_callback[parseInt(section_id, 10)]) {
                triggerEvent(API_SECTION_CALLBACK, id, section_id, _vwo_api_section_callback[section_id]);
                _vwo_api_section_callback[section_id](vwo_$("#vwo_temp").children(), vwo_$("<span>" + ("undefined" === typeof this.outerHTML ? vwo_$("<div></div>").append(this.cloneNode(true)).html() : this.outerHTML) + "</span>"))
              }
            }).replaceWith(vwo_$("#vwo_temp").html()), document.getElementById("vwo_temp").innerHTML = "<p></p>", _delCSS(path, id), vwo_$(path).addClass("vwo_loaded"), 2 !== _vwo_exp[id].version && vwo_$(path).find("*").addClass("vwo_loaded"), "VISUAL" === experiment_type ? triggerEvent(ELEMENT_CHANGES_APPLIED, id, section_id, combinations_to_use[combination_use], path, content) : triggerEvent(ELEMENT_CHANGES_APPLIED, id, "1", combination, path, content)
          }
        }
      }
    }catch(e) {
      triggerEvent(ELEMENT_LOAD_ERROR, id, combination, e)
    }
    return!0
  }
  function _bottomInitialize() {
    triggerEvent(BOTTOM_INITIALIZE_BEGIN);
    if(1 === _redirect) {
      triggerEvent(BOTTOM_INITIALIZE_END, !0)
    }else {
      for(var id, exp_length = _vwo_exp_ids.length, combination, length, _goal_id;exp_length--;) {
        id = _vwo_exp_ids[exp_length];
        if(_vwo_exp[id].ready) {
          if("SPLIT_URL" !== _vwo_exp[id].type) {
            if(combination = preview || _readCookie("_vis_opt_exp_" + id + "_combi")) {
              triggerEvent(ELEMENT_LOAD_TIMER_STOP, id, combination), _bottomRenderCombination(combination, id)
            }else {
              combination = _chooseCombination(id);
              if(!combination) {
                return
              }
              triggerEvent(ELEMENT_LOAD_TIMER_STOP, id, combination);
              _bottomRenderCombination(combination, id);
              _registerHit(combination, id);
              _createCookie("_vis_opt_exp_" + id + "_combi", combination, 100, id)
            }
            window.clearTimeout(_vwo_exp[id].timeout);
            for(var _xpath in currentCombinationXPaths) {
              triggerEvent(ELEMENT_NOT_LOADED, id, currentCombinationXPaths[_xpath][0], currentCombinationXPaths[_xpath][1], _xpath)
            }
          }
          _vwo_exp[id].GA && (window._gaq = window._gaq || [], _gaTrack(id, _vwo_exp[id].GA.s, _vwo_exp[id].GA.p))
        }
        if("undefined" !== typeof window._vis_opt_revenue) {
          triggerEvent(CONVERT_REVENUE_GOALS_FOR_EXPERIMENT, id, window._vis_opt_revenue);
          combination = _keys(_vwo_exp[id].goals);
          for(length = combination.length;length--;) {
            _goal_id = combination[length], "REVENUE_TRACKING" === _vwo_exp[id].goals[_goal_id].type && _registerConversion(_goal_id, id, window._vis_opt_revenue)
          }
        }
      }
      !isSubmitEventAdded && _monitorSubmissions();
      !isMousedownEventAdded && _monitorClicks();
      vwo_$("._vis_opt_hidden").remove();
      isTestTriggeredByHashChange = !1;
      _vwo_queue.finish();
      triggerEvent(BOTTOM_INITIALIZE_END)
    }
  }
  function _gaTrack(id, GA_slot, GA_prefix) {
    if(!preview && !window._vis_debug) {
      try {
        var GA_prefix = GA_prefix ? GA_prefix + "." : "", id = id || window._vis_opt_experiment_id, GA_slot = GA_slot || _GA_slot || 4, _combination = _vwo_exp[id].combination_chosen || _readCookie("_vis_opt_exp_" + id + "_combi");
        "undefined" !== typeof _vwo_exp[id].comb_n[_combination] && window._gaq.push(function() {
          "undefined" !== typeof window.pageTracker && !GA_prefix ? (window.pageTracker._setCustomVar(GA_slot, "VWO-" + id, _vwo_exp[id].comb_n[_combination], 1), window.pageTracker._trackEvent("VWO", "Visit", "", 0, !0)) : window._gaq.push([GA_prefix + "_setCustomVar", GA_slot, "VWO-" + id, _vwo_exp[id].comb_n[_combination], 1], [GA_prefix + "_trackEvent", "VWO", "Visit", "", 0, !0])
        })
      }catch(err) {
      }
    }
  }
  (function($, window, undefined) {
    function get_fragment(url) {
      url = url || location.href;
      return"#" + url.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var str_hashchange = "hashchange", fake_onhashchange, special = $.event.special, doc_mode = document.documentMode, supports_onhashchange = "on" + str_hashchange in window && (undefined === doc_mode || 7 < doc_mode);
    $.fn[str_hashchange] = function(fn) {
      return fn ? this.bind(str_hashchange, fn) : this.trigger(str_hashchange)
    };
    $.fn[str_hashchange].delay = 50;
    special[str_hashchange] = $.extend(special[str_hashchange], {setup:function() {
      if(supports_onhashchange) {
        return!1
      }
      $(fake_onhashchange.start)
    }, teardown:function() {
      if(supports_onhashchange) {
        return!1
      }
      $(fake_onhashchange.stop)
    }});
    fake_onhashchange = function() {
      function poll() {
        var hash = get_fragment();
        hash !== last_hash && (last_hash = hash, $(window).trigger(str_hashchange));
        timeout_id = setTimeout(poll, $.fn[str_hashchange].delay)
      }
      var self = {}, timeout_id, last_hash = get_fragment();
      self.start = function() {
        timeout_id || poll()
      };
      self.stop = function() {
        timeout_id && clearTimeout(timeout_id);
        timeout_id = undefined
      };
      return self
    }()
  })(vwo_$, this);
  var _vwo_queue = [], _vwo_clicks = window._vwo_clicks || 3, _url = window._vis_opt_url, _vwo_api_section_callback = window._vwo_api_section_callback = {}, _vwo_exp_ids = window._vwo_exp_ids || [], _vwo_exp = window._vwo_exp || {}, _cookieDays = window._vis_opt_cookieDays, loc = location, m, preview = (m = (loc.search + loc.hash).match(/.*_vis_test_id=(.*?)&.*_vis_opt_preview_combination=(.*)$/)) ? 0 <= vwo_$.inArray(m[1], _vwo_exp_ids) && _vwo_exp[m[1]] && void 0 !== _vwo_exp[m[1]].combs[m[2]] ? 
  m[2] : !1 : !1, _redirect = 0, _GA_slot = window._vis_opt_GA_slot;
  m = window._vwo_library_timer;
  var _comb_name = window._vis_opt_comb_name = {}, isHashChangeEventAdded = !1, isMousedownEventAdded = !1, isSubmitEventAdded = !1, isTestTriggeredByHashChange = !1;
  window._vwo_evq = window._vwo_evq || [];
  var eventQueue = window._vwo_evq;
  window._vwo_ev = window._vwo_ev || function() {
    arguments[0] === JSLIB_INIT ? eventQueue.unshift([JSLIB_INIT]) : eventQueue.push([].slice.call(arguments))
  };
  var triggerEvent = function() {
    window._vwo_ev.apply(this, [].slice.call(arguments))
  }, currentCombinationXPaths = {}, PARSE_TLD = "pTLD", PAUSE = "p", MATCH_WILDCARD = "mW", SET_COOKIE = "sC", GET_COOKIE = "gC", REGISTER_HIT = "rH", DELETE_CSS_RULE = "dCSSR", CONVERT_ALL_VISIT_GOALS_FOR_EXPERIMENT = "cAVGFE", CONVERT_VISIT_GOAL_FOR_EXPERIMENT = "cVGFE", CONVERT_GOAL_FOR_ALL_EXPERIMENTS = "cGFAE", CONVERT_ALL_REVENUE_GOALS_FOR_ALL_EXPERIMENTS = "cARGFAE", CONVERT_REVENUE_GOALS_FOR_EXPERIMENT = "cRGFE", REGISTER_CONVERSION = "rC", OPT_OUT = "oO", TOP_INITIALIZE_BEGIN = "tIB", TOP_INITIALIZE_ERROR = 
  "tIE", TOP_INITIALIZE_END = "tIEn", UNHIDE_ALL_VARIATIONS = "uAV", UNHIDE_SECTION = "uS", UNHIDE_VARIATION = "uV", UNHIDE_ELEMENT = "uE", EXCLUDE_URL = "eURL", SPLIT_URL = "sURL", HASH_CHANGE = "hC", ELEMENT_LOAD_TIMER_START = "eLTS", ELEMENT_LOAD_TIMER_STOP = "eLTSt", ELEMENT_LOAD_ERROR = "eLTTE", ELEMENT_LOADED = "eL", ELEMENT_NOT_LOADED = "eNL", ELEMENT_CHANGES_APPLIED = "eCA", API_SECTION_CALLBACK = "aSC", CHOOSE_COMBINATION = "cC", BEFORE_REDIRECT_TO_URL = "bRTR", BOTTOM_INITIALIZE_BEGIN = 
  "bIB", BOTTOM_INITIALIZE_END = "bIE", HEATMAP_CLICK = "hCl", JSLIB_INIT = "jI";
  triggerEvent(JSLIB_INIT);
  window._vis_opt_queue = window._vis_opt_queue || [];
  var _backup_queue = window._vis_opt_queue, _keys = Object.keys || function(obj) {
    var keys = [], key;
    for(key in obj) {
      obj.hasOwnProperty(key) && keys.push(key)
    }
    return keys
  };
  _vwo_queue.execute = function(value) {
    try {
      value()
    }catch(e) {
      triggerEvent("qEE", e)
    }
  };
  _vwo_queue.finish = function(i) {
    window._vis_opt_queue.push = _vwo_queue.execute;
    for(i = 0;i < window._vis_opt_queue.length;i++) {
      _vwo_queue.execute(window._vis_opt_queue[i])
    }
  };
  var _domain = window._vis_opt_domain || _tld(loc.host), URL = window._vis_opt_url || loc.href, _current_url = window._vis_opt_url || URL.replace(/_vis_(test_id|opt_(preview_combination|random))=[\.\d,]+&?/g, "").replace(/(\/|\?|&)$/, "");
  window._vwo_s = function() {
    var D = new Date, N = navigator, d = document, n = N.userAgent, v$$0 = N.vendor, a = d.createElement("a"), nl = n.toLowerCase(), aV = N.appVersion, bs = [{s:n, sS:"Chrome", i:"Chrome"}, {s:v$$0, sS:"Apple", i:"Safari"}, {p:window.opera, i:"Opera"}, {s:v$$0, sS:"KDE", i:"Konqueror"}, {s:n, sS:"Firefox", i:"Firefox"}, {s:n, sS:"Netscape", i:"Netscape"}, {s:n, sS:"MSIE", i:"Explorer"}], or = [{s:"search.yahoo.com/", p:"p", i:1}, {s:"http://www.google.", p:"q", i:2}, {s:"http://www.bing.com/", p:"q", 
    i:3}, {s:".ask.com/", p:"q", i:4}, {s:"http://altavista.com/", p:"q", i:5}, {s:"http://www.search.com/", p:"q", i:6}, {s:"http://www.baidu.com/", p:"wd", i:7}, {s:"http://search.aol.com/", p:"q", i:8}], c = function(s) {
      return"undefined" !== typeof s
    };
    return{ce:function() {
      return N.cookieEnabled
    }, U:function() {
      return d.URL
    }, R:function() {
      return d.referrer
    }, ks:function() {
      return"" === this.R() ? "" : a.search
    }, ors:function() {
      for(c = 0;c < or.length;c++) {
        if(-1 !== this.R().indexOf(or[c].s)) {
          return or[c].i
        }
      }
      return 0
    }, rt:function() {
      return this.ors() ? "org" : this.R() ? "ref" : "dir"
    }, k:function() {
      if(this.ors()) {
        var results = RegExp("[\\?&]" + or[this.ors() - 1].p + "=([^&#]*)").exec(this.R());
        if(null !== results) {
          return results[1].split("+").join(" ")
        }
      }
      return""
    }, gC:function(x) {
      if(0 < d.cookie.length) {
        var cs = d.cookie.indexOf(x + "=");
        if(-1 !== cs) {
          cs = cs + x.length + 1;
          x = d.cookie.indexOf(";", cs);
          if(-1 === x) {
            x = d.cookie.length
          }
          return decodeURIComponent(d.cookie.substring(cs, x))
        }
      }
      return""
    }, T:function() {
      var v = this.gC("_vis_opt_s");
      return v ? 1 < parseInt(v.split("|")[0], 10) ? "ret" : "new" : "new"
    }, qP:function(x) {
      x = x.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      return(x = RegExp("[\\?&]" + x + "=([^&#]*)").exec(this.U())) ? x[1] : ""
    }, f_in:function(s1, s2) {
      return c(s1) && c(s2) && s1.toString().toLowerCase() === s2.toString().toLowerCase()
    }, f_nin:function(s1, s2) {
      return!this.f_in(s1, s2)
    }, f_cs:function(s1, s2) {
      return c(s1) && c(s2) && s1.toString() === s2.toString()
    }, f_ncs:function(s1, s2) {
      return!this.f_cs(s1, s2)
    }, f_re_i:function(s1, s2) {
      return!c(s1) || !c(s2) ? false : s1.match(RegExp(s2, "i"))
    }, f_re_s:function(s1, s2) {
      return!c(s1) || !c(s2) ? false : s1.match(RegExp(s2))
    }, f_con:function(s1, s2) {
      return!c(s1) || !c(s2) ? false : s1.toString().toLowerCase().indexOf(s2.toString().toLowerCase()) > -1
    }, f_d_con:function(s1, s2) {
      return!this.f_con(s1, s2)
    }, f_b:function(s1) {
      return s1 ? false : true
    }, f_n_b:function(s1) {
      return!this.f_b(s1)
    }, f_e:function(s1, s2) {
      var i;
      if("object" === typeof s2) {
        for(i = 0;i < s2.length;i++) {
          if(this.f_in(s1, s2[i])) {
            return true
          }
        }
        return false
      }
      return this.f_in(s1, s2)
    }, wk:function() {
      return nl.indexOf("webkit") > -1
    }, de:function() {
      return nl.indexOf("ipod") > -1 ? "ipod" : nl.indexOf("ipad") > -1 && this.wk() ? "ipad" : nl.indexOf("iphone") > -1 ? "iphone" : nl.indexOf("android") > -1 ? "android" : nl.indexOf("googletv") > -1 ? "googletv" : nl.indexOf("symbian") > -1 || /series[6-9]0/.test(nl) ? "symbian" : nl.indexOf("blackberry") > -1 || nl.indexOf("vnd.rim") > -1 ? "blackberry" : nl.indexOf("windows phone") > -1 ? "winphone" : ""
    }, os:function() {
      if(-1 !== aV.indexOf("Win")) {
        return"windows"
      }
      if(-1 !== aV.indexOf("Mac")) {
        return"macOS"
      }
      if(-1 !== aV.indexOf("X11")) {
        return"unix"
      }
      if(-1 !== aV.indexOf("Linux")) {
        return"linux"
      }
    }, b:function() {
      return this.sS(bs) || ""
    }, sS:function(d) {
      var i, dS, dP;
      for(i = 0;i < d.length;i++) {
        dS = d[i].s;
        dP = d[i].p;
        if(dS) {
          if(-1 !== dS.indexOf(d[i].sS)) {
            return d[i].i
          }
        }else {
          if(dP) {
            return d[i].i
          }
        }
      }
    }, jv:function(x) {
      try {
        return window[x] || eval(x)
      }catch(e) {
      }
    }, ua:function() {
      return n
    }, DoW:function() {
      return D.getDay().toString()
    }, Hr:function() {
      return D.getHours()
    }, Co:function() {
      var geo = window._vwo_geo;
      return"undefined" !== typeof geo && "undefined" !== typeof geo.country ? geo.country : ""
    }, Re:function() {
      var geo = window._vwo_geo;
      return"undefined" !== typeof geo && "undefined" !== typeof geo.region ? geo.region : ""
    }, Ci:function() {
      var geo = window._vwo_geo;
      return"undefined" !== typeof geo && "undefined" !== typeof geo.city ? geo.city : ""
    }}
  };
  var v, keys, length;
  _vwo_s().gC("_vis_opt_test_cookie") || ((v = _vwo_s().gC("_vis_opt_s")) ? _createCookie("_vis_opt_s", parseInt(v.split("|")[0], 10) + 1 + "|", 100) : _createCookie("_vis_opt_s", "1|", 100));
  _createCookie("_vis_opt_test_cookie", 1);
  window._vis_opt_top_initialize = _topInitialize;
  window._vis_opt_bottom_initialize = _bottomInitialize;
  window._vis_opt_goal_conversion = _goalConversion;
  window._vis_opt_revenue_conversion = _revenueConversion;
  window._vis_opt_pause = _pause;
  window._vis_opt_readCookie = _readCookie;
  window._vis_opt_createCookie = _createCookie;
  window._vis_opt_element_loaded = _elementLoaded;
  window._vis_opt_GA_track = _gaTrack;
  window._vis_opt_register_conversion = _registerConversion;
})();
