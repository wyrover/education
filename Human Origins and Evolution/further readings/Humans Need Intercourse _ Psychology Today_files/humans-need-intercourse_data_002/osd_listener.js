(function(){var aa=function(a,b){function c(){}c.prototype=b.prototype;a.pa=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ca=function(){ca=function(){};l.Symbol||(l.Symbol=da)},ea=0,da=function(a){return"jscomp_symbol_"+(a||"")+ea++},ga=function(){ca();var a=l.Symbol.iterator;a||(a=l.Symbol.iterator=l.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});ga=function(){}},fa=function(a){var b=0;return ha(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},ha=function(a){ga();a={next:a};a[l.Symbol.iterator]=function(){return this};return a},m=this,p=function(a){return"string"==typeof a},ia=function(){},la=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ma=function(a,b,c){return a.call.apply(a.bind,arguments)},na=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},oa=function(a,b,c){oa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:na;return oa.apply(null,arguments)},pa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},r=Date.now||function(){return+new Date},t=function(a,b){a=a.split(".");var c=m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};var qa=function(a,b,c,d,e){if(e)c=a+("&"+b+"="+c);else{var f="&"+b+"=",g=a.indexOf(f);0>g?c=a+f+c:(g+=f.length,f=a.indexOf("&",g),c=0<=f?a.substring(0,g)+c+a.substring(f):a.substring(0,g)+c)}return 2E3<c.length?void 0!==d?qa(a,b,d,void 0,e):a:c};var u=document,v=window;var ra={T:"ud=1",S:"ts=0",ja:"sc=1",P:"gz=1",ia:"rz=1",la:"efp=1",ga:"dcl=1",ha:"mlc=1",ea:"rafv=1",da:"rafx=1",R:"opp=1",ma:"mcvt=1",fa:"lom=1",ka:"ifp=1",O:"dm=1"};var sa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},ta=function(a,b){return null!==a&&b in a};var w=function(){this.H={};this.s=!0};w.prototype.disable=function(){this.s=!1};w.prototype.enable=function(){this.s=!0};w.prototype.isEnabled=function(){return this.s};w.prototype.reset=function(){this.H={};this.s=!0};var ua=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},wa=function(a,b){var c=0;a=ua(String(a)).split(".");b=ua(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=va(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||va(0==f[2].length,0==g[2].length)||va(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c},va=function(a,b){return a<b?-1:a>b?1:0};var xa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ya=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var h=g[k];b.call(c,h,k,a)&&(e[f++]=h)}return e},Aa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ba=Array.prototype.reduce?function(a,b,c,d){d&&(b=oa(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;ya(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Ca=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},Da=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Ea=function(a){Ea[" "](a);return a};Ea[" "]=ia;var Ga=function(a,b){var c=Fa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var Ha=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ea(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Ia=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Ka=function(){var a=Ja;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};var La=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(c){}return a}(),Ma=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,La?d:d?d.capture||!1:!1):a.attachEvent&&a.attachEvent("on"+b,c)},Pa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,La?void 0:!1):a.detachEvent&&a.detachEvent("on"+b,c)};var x=!1,Qa=function(a){if(a=a.match(/[\d]+/g))a.length=3};(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(x=!0,a.description)){Qa(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){x=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],x=!(!a||!a.enabledPlugin))){Qa(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");x=!0;Qa(b.GetVariable("$version"));return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");x=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),x=!0,Qa(b.GetVariable("$version"))}catch(c){}})();var y;a:{var Ra=m.navigator;if(Ra){var Sa=Ra.userAgent;if(Sa){y=Sa;break a}}y=""}var z=function(a){return-1!=y.indexOf(a)},Ta=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};var Ua=function(){return z("Trident")||z("MSIE")},Va=function(){return(z("Chrome")||z("CriOS"))&&!z("Edge")},Xa=function(){function a(a){a:{var b=d;for(var e=a.length,k=p(a)?a.split(""):a,h=0;h<e;h++)if(h in k&&b.call(void 0,k[h],h,a)){b=h;break a}b=-1}return c[0>b?null:p(a)?a.charAt(b):a[b]]||""}var b=y;if(Ua())return Wa(b);var b=Ta(b),c={};ya(b,function(a){c[a[0]]=a[1]});var d=pa(ta,c);return z("Opera")?a(["Version","Opera"]):z("Edge")?a(["Edge"]):Va()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""},Wa=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];var b="",c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};var A=function(){return z("iPhone")&&!z("iPod")&&!z("iPad")};var Ya=z("Opera"),B=Ua(),Za=z("Edge"),$a=z("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),ab=-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"),bb=z("Macintosh"),cb=z("Windows"),db=z("Android"),eb=A(),fb=z("iPad"),gb=z("iPod"),hb=function(){var a=m.document;return a?a.documentMode:void 0},ib;a:{var jb="",kb=function(){var a=y;if($a)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Za)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ab)return/WebKit\/(\S+)/.exec(a);if(Ya)return/(?:Version)[ \/]?(\S+)/.exec(a)}();kb&&(jb=kb?kb[1]:"");if(B){var lb=hb();if(null!=lb&&lb>parseFloat(jb)){ib=String(lb);break a}}ib=jb}var mb=ib,Fa={},nb=function(a){Ga(a,function(){return 0<=wa(mb,a)})},ob;var pb=m.document;ob=pb&&B?hb()||("CSS1Compat"==pb.compatMode?parseInt(mb,10):5):void 0;(function(){if(cb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(y))?a[1]:"0"}return bb?(a=/10[_.][0-9_.]+/,(a=a.exec(y))?a[0].replace(/_/g,"."):"10"):db?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(y))?a[1]:""):eb||fb||gb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(y))?a[1].replace(/_/g,"."):""):""})();var qb=z("Firefox"),rb=A()||z("iPod"),sb=z("iPad"),tb=z("Android")&&!(Va()||z("Firefox")||z("Opera")||z("Silk")),ub=Va(),vb=z("Safari")&&!(Va()||z("Coast")||z("Opera")||z("Edge")||z("Silk")||z("Android"))&&!(A()||z("iPad")||z("iPod"));var C=function(a){return(a=a.exec(y))?a[1]:""};(function(){if(qb)return C(/Firefox\/([0-9.]+)/);if(B||Za||Ya)return mb;if(ub)return A()||z("iPad")||z("iPod")?C(/CriOS\/([0-9.]+)/):C(/Chrome\/([0-9.]+)/);if(vb&&!(A()||z("iPad")||z("iPod")))return C(/Version\/([0-9.]+)/);if(rb||sb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(y);if(a)return a[1]+"."+a[2]}else if(tb)return(a=C(/Android\s+([0-9.]+)/))?a:C(/Version\/([0-9.]+)/);return""})();var wb;if(!(wb=!$a&&!B)){var xb;if(xb=B)xb=9<=Number(ob);wb=xb}wb||$a&&nb("1.9.1");B&&nb("9");var yb=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(a){c(a);Pa(d,"load",e);Pa(d,"error",e)};Ma(d,"load",e);Ma(d,"error",e)}d.src=b;a.google_image_requests.push(d)};var zb=null,D=function(a,b){yb(a,b,void 0)},Ab=function(){if(!u.body)return!1;if(!zb){var a=u.createElement("iframe");a.style.display="none";a.id="anonIframe";zb=a;u.body.appendChild(a)}return!0},Bb=!!window.google_async_iframe_id,E=Bb&&window.parent||window;var Cb=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var Db=function(a,b,c){if("array"==la(b))for(var d=0;d<b.length;d++)Db(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))},Eb=function(a,b){var c=[];for(b=b||0;b<a.length;b+=2)Db(a[b],a[b+1],c);return c.join("&")},Fb=function(a,b){var c=2==arguments.length?Eb(arguments[1],0):Eb(arguments,1);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c};var Gb=function(a,b){this.L=a;this.M=b},Hb=function(a,b){this.url=a;this.I=!!b;this.depth=null};var Ib=function(a,b,c,d,e){this.J=c||4E3;this.o=a||"&";this.U=b||",$";this.w=void 0!==d?d:"trn";this.ca=e||null;this.F=!1;this.j={};this.Z=0;this.g=[]},Jb=function(a,b){var c={};c[a]=b;return[c]},Lb=function(a,b,c,d,e){var f=[];Ia(a,function(a,k){(a=Kb(a,b,c,d,e))&&f.push(k+"="+a)});return f.join(b)},Kb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Kb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Lb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},F=function(a,b,c,d){a.g.push(b);a.j[b]=Jb(c,d)},Nb=function(a,b,c,d){b=b+"//"+c+d;var e=Mb(a)-d.length-0;if(0>e)return"";a.g.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.g.length;f++)for(var g=a.g[f],k=a.j[g],h=0;h<k.length;h++){if(!e){d=null==d?g:d;break}var n=Lb(k[h],a.o,a.U);if(n){n=c+n;if(e>=n.length){e-=n.length;b+=n;c=a.o;break}else a.F&&(c=e,n[c-1]==a.o&&--c,b+=n.substr(0,c),c=a.o,e=0);d=null==d?g:d}}f="";a.w&&null!=d&&(f=c+a.w+"="+(a.ca||d));return b+f+""},Mb=function(a){if(!a.w)return a.J;var b=1,c;for(c in a.j)b=c.length>b?c.length:b;return a.J-a.w.length-b-a.o.length-1};var Ob=function(a,b,c,d,e){if((d?a.ba:Math.random())<(e||a.V))try{if(c instanceof Ib)var f=c;else f=new Ib,Ia(c,function(a,b){var c=f,d=c.Z++;a=Jb(b,a);c.g.push(d);c.j[d]=a});var g=Nb(f,a.aa,a.W,a.$+b+"&");g&&yb(m,g)}catch(k){}};var Qb=function(a,b){var c=Pb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random()};var G=function(a,b){this.m=[];this.h=b||m;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.m=b.google_js_reporting_queue,c=b.google_measure_js_timing);a:{try{var d=(this.h||m).top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);var f=e&&e[1]||"";break a}}catch(g){}f=""}b=f;b=b.indexOf&&0<=b.indexOf("1337");this.f=(this.f=null!=c?c:Math.random()<a)||b;a=this.h.performance;this.v=!!(a&&a.mark&&a.clearMarks&&b)};G.prototype.disable=function(){this.m!=this.h.google_js_reporting_queue&&(this.m.length=0,this.v&&ya(this.m,this.G,this));this.f=!1};G.prototype.G=function(a){if(a&&this.v){var b=this.h.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};G.prototype.start=function(a,b){if(!this.f)return null;a=new Qb(a,b);this.v&&this.h.performance.mark("goog_"+a.uniqueId+"_start");return a};G.prototype.end=function(a){this.f&&(a.duration=Pb()-a.value,this.v&&this.h.performance.mark("goog_"+a.uniqueId+"_end"),this.f&&this.m.push(a))};var Pb=function(){var a=m.performance;return a&&a.now?a.now():r()};var Rb=function(a,b,c,d){this.K=a;this.Y=b;this.B=c;this.C=null;this.X=this.A;this.i=void 0===d?null:d;this.N=!1},Tb=function(a,b,c){try{if(a.i&&a.i.f){var d=a.i.start(b.toString(),3);var e=c();a.i.end(d)}else e=c()}catch(g){c=a.B;try{a.i&&d&&a.i.G(d);var f=Sb(g);c=a.X.call(a,b,f,void 0,void 0)}catch(k){a.A(217,k)}if(!c)throw g;}return e},H=function(a,b){var c=Ub;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return Tb(c,a,function(){return b.apply(void 0,e)})}};Rb.prototype.A=function(a,b,c,d,e){e=e||this.Y;try{var f=new Ib;f.F=!0;F(f,1,"context",a);b.error&&b.meta&&b.id||(b=Sb(b));b.msg&&F(f,2,"msg",b.msg.substring(0,512));b.file&&F(f,3,"file",b.file);0<b.line&&F(f,4,"line",b.line);var g=b.meta||{};if(this.C)try{this.C(g)}catch(ja){}if(d)try{d(g)}catch(ja){}b=[g];f.g.push(5);f.j[5]=b;d=m;b=[];var g=null;do{var k=d;if(Ha(k)){var h=k.location.href;g=k.document&&k.document.referrer||null}else h=g,g=null;b.push(new Hb(h||""));try{d=k.parent}catch(ja){d=null}}while(d&&k!=d);h=0;for(var n=b.length-1;h<=n;++h)b[h].depth=n-h;k=m;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==b.length-1)for(h=1;h<b.length;++h){var q=b[h];q.url||(q.url=k.location.ancestorOrigins[h-1]||"",q.I=!0)}var Na=new Hb(m.location.href,!1),Oa=b.length-1;for(k=Oa;0<=k;--k){var K=b[k];if(K.url&&!K.I){Na=K;break}}var K=null,Pc=b.length&&b[Oa].url;0!=Na.depth&&Pc&&(K=b[Oa]);var ka=new Gb(Na,K);ka.M&&F(f,6,"top",ka.M.url||"");F(f,7,"url",ka.L.url||"");Ob(this.K,e,f,this.N,c)}catch(ja){try{Ob(this.K,e,{context:"ecmserr",rctx:a,msg:Vb(ja),url:ka.L.url},this.N,c)}catch(fd){}}return this.B};var Sb=function(a){return new Wb(Vb(a),a.fileName,a.lineNumber)},Vb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},Wb=function(a,b,c){Cb.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};aa(Wb,Cb);var Ub;if(Bb&&!Ha(E)){var Xb="."+u.domain;try{for(;2<Xb.split(".").length&&!Ha(E);)u.domain=Xb=Xb.substr(Xb.indexOf(".")+1),E=window.parent}catch(a){}Ha(E)||(E=window)}var I=E,Yb=new G(1,I);Ub=new Rb(new function(){this.aa="http:"===v.location.protocol?"http:":"https:";this.W="pagead2.googlesyndication.com";this.$="/pagead/gen_204?id=";this.V=.01;this.ba=Math.random()},"jserror",!0,Yb);"complete"==I.document.readyState?I.google_measure_js_timing||Yb.disable():Yb.f&&Ma(I,"load",function(){I.google_measure_js_timing||Yb.disable()});var J=function(a,b){return H(a,b)};if(u&&u.URL){var Ja=u.URL,Zb=!(Ja&&0<Ka().length);Ub.B=Zb}var L=function(a,b,c,d){Ma(a,b,H(d,c),{capture:void 0})},$b=function(a){var b=["IMG","FRAME","IFRAME"];return Ca(b,function(b){return a.nodeName==String(b)})?[a]:Ba(b,function(b,d){return b.concat(Da((a||document).getElementsByTagName(String(d))))},[])},bc=function(){var a=M.c,b=ac;if(a){for(var c=0,d=null,a=$b(a),e=0;e<a.length;e++){var f=!1,d=a[e];switch(d.nodeName){case "IMG":if(d.complete||d.naturalWidth)f=!0;break;case "FRAME":case "IFRAME":"complete"==d.readyState&&(f=!0)}f||(c++,L(d,"load",function(){c--;c||b(null)},116))}a=d=null;c||b(null)}},cc=function(a,b){var c=0,d=function(){a();c++;10>c&&v.setTimeout(H(b,d),100)};d()};var dc=function(a,b){this.b=a||0;this.a=b||""},N=function(a,b){a.b&&(b[4]=a.b);a.a&&(b[12]=a.a)};dc.prototype.match=function(a){return(this.b||this.a)&&(a.b||a.a)?this.a||a.a?this.a==a.a:this.b||a.b?this.b==a.b:!1:!1};dc.prototype.toString=function(){var a=""+this.b;this.a&&(a+="-"+this.a);return a};var ec=function(){var a=O,b=[];a.b&&b.push("adk="+a.b);a.a&&b.push("exk="+a.a);return b},fc=function(a){var b=[];sa(a,function(a,d){d=encodeURIComponent(d);p(a)&&(a=encodeURIComponent(a));b.push(d+"="+a)});b.push("24="+(new Date).getTime());return b.join("\n")},P=0,gc=0,hc=function(a){var b=0,c=v;try{if(c&&c.Goog_AdSense_getAdAdapterInstance)return c}catch(d){}for(;c&&5>b;){try{if(c.google_osd_static_frame)return c}catch(d){}try{if(c.aswift_0&&(!a||c.aswift_0.google_osd_static_frame))return c.aswift_0}catch(d){}b++;c=c!=c.parent?c.parent:null}return null},ic=function(a,b,c,d,e,f,g,k){g=g||ia;if(10<gc)v.clearInterval(P),g();else if(++gc,v.postMessage&&(b.b||b.a)){if(g=hc(!0)){var h={};N(b,h);h[0]="goog_request_monitoring";h[6]=a;c&&(h[27]=c);h[16]=!!d;e&&e.length&&(h[17]=e.join(","));f&&(h[19]=f);k&&(h[28]=k);try{var n=fc(h);g.postMessage(n,"*")}catch(q){}}}else v.clearInterval(P),g()};var jc=function(){this.c=null;this.u=this.D=this.l=0},kc=function(a){return za(a,function(a){return 15<a.clientHeight&&15<a.clientWidth})},lc=function(a){if(!a.length)return null;var b=kc(a);return 0<b.length?b[0]:a[0]},mc=function(a){return"data-"+String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};var nc=function(){var a=/[&\?#]exk=([^& ]+)/.exec(v.location.href);return a&&2==a.length?a[1]:null};var Q=0,R="",S=[],T=!1,U=!1,oc=!1,pc=!0,qc=!1,rc=!1,sc=new w,V=!1,tc=!1,uc=!1,vc=!1,wc=0,xc=0,W=0,yc=[],O=null,zc="",Ac=[],Bc=null,Cc=[],Dc=!1,Ec="",Fc="",Gc=(new Date).getTime(),M=null,Hc=!1,Ic=["1","0","3"],X=0,Y=0,Jc=0,Kc="",Lc=!1,Z=function(){var a=M;return a?a.c:null},Mc=function(){if(!Z())return 0;var a=Z();return a?a.hasAttribute(mc("googleAvDm"))?1:2:0},Oc=function(a,b,c){T&&(pc||3!=(c||3)||rc)&&Nc(a,b,!0);if(oc||U&&qc)Nc(a,b),U=oc=!1},Qc=function(){var a=Bc;return a?2!=a():!0},Nc=function(a,b,c){if((b=b||zc)&&!Dc&&(2==Y||c)&&Qc()){for(var d=0;d<S.length;++d){var e=Rc(S[d],b,c);D(a,e)}uc=!0;c?T=!1:Dc=!0}},Sc=function(a,b){var c=[];a&&c.push("avi="+a);b&&c.push("cid="+b);return c.length?"//pagead2.googlesyndication.com/activeview?"+c.join("&"):"//pagead2.googlesyndication.com/activeview"},Rc=function(a,b,c){c=c?"osdim":oc?"osd2":"osdtos";a=[a,-1<a.indexOf("?")?"&id=":"?id=",c];"osd2"==c&&U&&qc&&a.push("&ts=1");a.push("&ti=1");a.push("&",b);a.push("&uc="+Jc);Z()?a.push("&tgt="+(Z()?M.c.tagName:"")):a.push("&tgt=nf");a.push("&cl="+(Hc?1:0));vc&&(a.push("&lop=1"),b=r()-wc,a.push("&tslp="+b));if(b=M)a.push("&cec="+b.l),a.push("&clc="+b.u),a.push("&cac="+b.D),b.c?a.push("&cd="+b.c.clientWidth+"x"+b.c.clientHeight):a.push("&cd=nf");V&&a.push("&dmsg=1");b=a.join("");for(a=0;a<Ac.length;a++){try{var d=Ac[a]()}catch(e){}c="max_length";2<=d.length&&(3==d.length&&(c=d[2]),b=qa(b,encodeURIComponent(d[0]),encodeURIComponent(d[1]),c))}2E3<b.length&&(b=b.substring(0,2E3));return b},Tc=function(a){if(Ec){try{var b=qa(Ec,"vi",a);Ab()&&D(zb.contentWindow,b)}catch(c){}0<=xa(Ic,a)&&(Ec="")}},Uc=function(){Tc("-1")},Wc=function(a){if(a&&a.data&&p(a.data)){var b=a.data;if(p(b)){var c={};for(var b=b.split("\n"),d=0;d<b.length;d++){var e=b[d].indexOf("=");if(!(0>=e)){var f=Number(b[d].substr(0,e)),e=b[d].substr(e+1);switch(f){case 5:case 8:case 11:case 15:case 16:case 18:case 26:e="true"==e;break;case 4:case 7:case 6:case 14:case 20:case 21:case 22:case 23:case 24:case 25:e=Number(e);break;case 3:case 19:if("function"==la(decodeURIComponent))try{e=decodeURIComponent(e)}catch(k){throw Error("Error: URI malformed: "+e);}break;case 17:e=Aa(decodeURIComponent(e).split(","),Number)}c[f]=e}}c=c[0]?c:null}else c=null;if(c&&(b=new dc(c[4],c[12]),O&&O.match(b))){for(b=0;b<Cc.length;b++)Cc[b](c);c&&(b=100*c[25],"number"==typeof b&&!isNaN(b)&&(window.document["4CGeArbVQ"]=b|0));void 0!=c[18]&&(rc=c[18],rc||2!=W||(W=3,Vc()));Lc&&void 0!=c[7]&&0<c[7]&&(b="//pagead2.googlesyndication.com/pagead/gen_204?id=ac_opp&vsblt="+c[7],R&&(b+="&avi="+R),D(v,b),Lc=!1);b=c[0];if("goog_acknowledge_monitoring"==b)v.clearInterval(P),X=2;else if("goog_get_mode"==b){X=1;d={};O&&N(O,d);d[0]="goog_provide_mode";d[6]=Y;d[19]=Kc;d[16]=U;try{var g=fc(d);a.source.postMessage(g,a.origin)}catch(k){}v.clearInterval(P);X=2}else"goog_update_data"==b?(zc=c[3],++Jc):"goog_image_request"==b&&(Oc(v,c[3]),c[5]||c[11]||Tc("0"));if("goog_update_data"==b||"goog_image_request"==b)(1==Y||2==Y||T)&&c[5]&&(a=1==c[15]&&"goog_update_data"==b,qc=!0,Tc("1"),Fc&&Qc()&&(g=Fc,Ab()&&D(zb.contentWindow,g),Fc=""),T&&!a&&(Nc(v,void 0,!0),tc=!0,xc=r()),3==W&&(W=4,Vc()),T||1!=Y||(Dc=!0)),(1==Y||2==Y||T)&&c[11]&&(U=!1,Tc("3"),T&&(Nc(v,void 0,!0),1==W&&rc&&(W=2)))}}},Vc=function(){var a=W;0!=a&&1!=a&&Xc("osdim","zas="+a)},Xc=function(a,b){var c=[];R&&c.push("avi="+R);c.push("id="+a);c.push("ovr_value="+Q);vc&&c.push("lop=1");O&&(c=c.concat(ec()));c.push("tt="+((new Date).getTime()-Gc));c.push(b);v.document&&v.document.referrer&&c.push("ref="+encodeURIComponent(v.document.referrer));try{D(v,"//pagead2.googlesyndication.com/pagead/gen_204?"+c.join("&"))}catch(d){}},Yc=function(){Oc(v);Tc("0");2>X&&!U&&2==Y&&Xc("osd2","hs="+X)},Zc=function(a){if(O&&(O.b||O.a)){var b=v.document.domain;X=1;P=v.setInterval(H(197,pa(ic,Y,O,b,U,yc,Kc,void 0,a)),500)}},$c=function(a,b){var c=fc(a);try{cc(function(){var a=hc(!1),b=!a;!a&&v&&(a=v.parent);if(a&&a.postMessage)try{a.postMessage(c,"*"),b&&v.postMessage(c,"*")}catch(f){}},b)}catch(d){}},ad=function(a,b){switch(b){case 1:a[26]=!0;break;case 2:a[26]=!1}},cd=function(){if(V&&1===Mc()){var a=Z();if(m.MutationObserver&&a){var b={attributes:!0};b.attributeFilter=[mc("googleAvDm")];(new m.MutationObserver(H(283,bd))).observe(a,b)}else a&&a.addEventListener?a.addEventListener("DOMAttrModified",H(283,bd)):Ub.A(286,Error(),void 0,void 0)}a={};O&&N(O,a);a[0]="goog_dom_content_loaded";V&&(b=Mc(),ad(a,b));$c(a,114)},ac=function(){var a={};O&&N(O,a);a[0]="goog_creative_loaded";if(V){var b=Mc();ad(a,b)}$c(a,115);Hc=!0},bd=function(){var a=Mc();if(V&&0!=a){var b={};O&&N(O,b);b[0]="goog_av_measurement_hold_update";ad(b,a);$c(b,282)}},dd=function(a){if(p(a)){a=a.split("&");for(var b=a.length-1;0<=b;b--){var c=a[b].split("="),d=c[1];(c=sc.H[c[0]])&&c.oa(parseInt(d,10))&&c.na()&&a.splice(b,1)}a=a.join("&").split("&");for(b=a.length-1;0<=b;b--)d=a[b],c=ra,d==c.O?(V=!0,a.splice(b,1)):d==c.T?(pc=!1,a.splice(b,1)):d==c.P?(W=1,a.splice(b,1)):d==c.S?(U=!1,a.splice(b,1)):d==c.R&&(Lc=!0,a.splice(b,1));Kc=a.join("&")}},ed=function(a){if(!Z()){var b=null,c=(v.document||document).getElementsByTagName("SCRIPT");0<c.length&&(c=c[c.length-1])&&c.parentElement&&(b=c.parentElement);b||(b=v.document.body);c=new jc;if(b){a=String(a);var d=b||document;if(d.querySelectorAll&&d.querySelector)d=d.querySelectorAll(".GoogleActiveViewClass");else{var e,d=document,f,g,d=b||d;if(d.querySelectorAll&&d.querySelector)d=d.querySelectorAll(".GoogleActiveViewClass");else if(d.getElementsByClassName)d=g=d.getElementsByClassName("GoogleActiveViewClass");else{g=d.getElementsByTagName("*");var k={};for(e=f=0;d=g[e];e++){var h=d.className,n;if(n="function"==typeof h.split)n=0<=xa(h.split(/\s+/),"GoogleActiveViewClass");n&&(k[f++]=d)}k.length=f;d=k}}d=Da(d);e=mc("googleAvAdk");f=[];k=[];ga();g=(g=d[Symbol.iterator])?g.call(d):fa(d);for(h=g.next();!h.done;h=g.next())h=h.value,h.hasAttribute(e)?h.getAttribute(e)==a&&f.push(h):k.push(h);c.l=d.length;c.D=f.length;c.u=f.length+k.length;c.c=lc(f);c.c||(c.c=lc(k));!c.c&&b.children&&(a=kc(Da(b.children)),c.l=b.children.length,c.u=a.length,1==c.l?c.c=b.children[0]:1==c.u?c.c=a[0]:1<c.l&&(c.c=b))}M=c;Z()&&bc()}};t("osdlfm",J(123,function(a,b,c,d,e,f,g,k,h,n){Q=a;Ec=b;Fc=d;T=f;g&&dd(g);U=f;1==k?yc.push(947190538):2==k?yc.push(947190541):3==k&&yc.push(947190542);O=new dc(e,nc());L(v,"load",Uc,117);L(v,"message",Wc,118);R=c||"";S=[n||Sc(c,h)];L(v,"unload",Yc,119);var q=v.document;0==({visible:1,hidden:2,prerender:3,preview:4}[q.webkitVisibilityState||q.mozVisibilityState||q.visibilityState||""]||0)?(Nc(v,"r=pv",!0),Zc(!0)):(!q.readyState||"complete"!=q.readyState&&"loaded"!=q.readyState?!Ua()||0<=wa(Xa(),11)?L(q,"DOMContentLoaded",cd,121):L(q,"readystatechange",function(){"complete"!=q.readyState&&"loaded"!=q.readyState||cd()},120):cd(),-1==Q?Y=f?3:1:-2==Q?Y=3:0<Q&&(Y=2,oc=!0),U&&!oc&&-1==Q&&(Y=2),Zc(),cc(ed,122))}));t("osdlac",J(124,function(a){Ac.push(a)}));t("osdlamrc",J(125,function(a){Cc.push(a)}));t("osdsir",H(126,Oc));t("osdacrc",J(127,function(a){Bc=a}));t("osdpcls",J(128,function(a){var b=/^(http[s]?:)?\/\//.test(a)?a:Sc(a);if(vc&&0<=xa(S,b))return!0;(a=!a)||(a=!(null!==v&&v.top!=v));if(a||Dc||uc&&!tc)return!1;vc=!0;if(tc){a=Rc(b,zc,!0);var c=r()-xc;a=Fb(a,"tsvp",c);D(v,a)}S.push(b);wc=r();return!0}));}).call(this);
