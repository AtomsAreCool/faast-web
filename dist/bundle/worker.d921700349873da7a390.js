!function(e){function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={};n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/portfolio/",n(n.s=1)}([function(e,n){function r(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function a(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(n){try{return f.call(null,e,0)}catch(n){return f.call(this,e,0)}}}function i(){d&&p&&(d=!1,p.length?m=p.concat(m):b=-1,m.length&&o())}function o(){if(!d){var e=a(i);d=!0;for(var n=m.length;n;){for(p=m,m=[];++b<n;)p&&p[b].run();b=-1,n=m.length}p=null,d=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===t||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{l(e)}catch(n){try{return l.call(null,e)}catch(n){return l.call(this,e)}}}(e)}}function u(e,n){this.fun=e,this.array=n}function s(){}var f,l,c=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{l="function"==typeof clearTimeout?clearTimeout:t}catch(e){l=t}}();var p,m=[],d=!1,b=-1;c.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];m.push(new u(e,n)),1!==m.length||d||a(o)},u.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=s,c.addListener=s,c.once=s,c.off=s,c.removeListener=s,c.removeAllListeners=s,c.emit=s,c.prependListener=s,c.prependOnceListener=s,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(module,exports,__webpack_require__){(function(process){function da(){function e(){}function n(){}return{r:new Promise(function(r,t){n=r,e=t}),resolve:n,reject:e}}function sa(u){function H(e){eval.call(null,e)}function n(e,n){e||D("Assertion failed: "+n)}function Y(b){var d=a["_"+b];if(!d)try{d=eval("_"+b)}catch(e){}return n(d,"Cannot call unknown function "+b+" (perhaps LLVM optimizations or closure removed it?)"),d}function va(e,n,r){switch("*"===(r=r||"i8").charAt(r.length-1)&&(r="i32"),r){case"i1":case"i8":q[e>>0]=n;break;case"i16":R[e>>1]=n;break;case"i32":m[e>>2]=n;break;case"i64":tempI64=[n>>>0,(tempDouble=n,1<=+Xa(tempDouble)?0<tempDouble?(0|Ya(+Za(tempDouble/4294967296),4294967295))>>>0:~~+$a((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],m[e>>2]=tempI64[0],m[e+4>>2]=tempI64[1];break;case"float":Z[e>>2]=n;break;case"double":aa[e>>3]=n;break;default:D("invalid type for setValue: "+r)}}function wa(e,n){switch("*"===(n=n||"i8").charAt(n.length-1)&&(n="i32"),n){case"i1":case"i8":return q[e>>0];case"i16":return R[e>>1];case"i32":case"i64":return m[e>>2];case"float":return Z[e>>2];case"double":return aa[e>>3];default:D("invalid type for setValue: "+n)}return null}function S(e,r,a,i){var o,u;"number"==typeof e?(o=!0,u=e):(o=!1,u=e.length);var s,l="string"==typeof r?r:null;if(s=4==a?i:["function"==typeof T?T:f.n,f.f,f.n,f.p][void 0===a?2:a](Math.max(u,l?1:r.length)),o){for(i=s,n(0==(3&s)),e=s+(-4&u);i<e;i+=4)m[i>>2]=0;for(e=s+u;i<e;)q[i++>>0]=0;return s}if("i8"===l)return e.subarray||e.slice?t.set(e,s):t.set(new Uint8Array(e),s),s;i=0;for(var c,p;i<u;)"function"==typeof(o=e[i])&&(o=f.P(o)),0===(a=l||r[i])?i++:("i64"==a&&(a="i32"),va(s+i,o,a),p!==a&&(c=f.q(a),p=a),i+=c);return s}function J(e,n){if(0===n||!e)return"";for(var r,i=0,o=0;(r=t[e+o>>0],i|=r,0!=r||n)&&(o++,!n||o!=n););if(n||(n=o),r="",128>i){for(;0<n;)i=String.fromCharCode.apply(String,t.subarray(e,e+Math.min(n,1024))),r=r?r+i:i,e+=1024,n-=1024;return r}return a.UTF8ToString(e)}function ya(e,n){for(var r=n;e[r];)++r;if(16<r-n&&e.subarray&&za)return za.decode(e.subarray(n,r));var t,a,i,o,u,s;for(r="";;){if(!(t=e[n++]))return r;128&t?(a=63&e[n++],192==(224&t)?r+=String.fromCharCode((31&t)<<6|a):(i=63&e[n++],224==(240&t)?t=(15&t)<<12|a<<6|i:(o=63&e[n++],240==(248&t)?t=(7&t)<<18|a<<12|i<<6|o:(u=63&e[n++],248==(252&t)?t=(3&t)<<24|a<<18|i<<12|o<<6|u:(s=63&e[n++],t=(1&t)<<30|a<<24|i<<18|o<<12|u<<6|s))),65536>t?r+=String.fromCharCode(t):(t-=65536,r+=String.fromCharCode(55296|t>>10,56320|1023&t)))):r+=String.fromCharCode(t)}}function Aa(e){return ya(t,e)}function ea(e,n,r,t){if(!(0<t))return 0;var a=r;t=r+t-1;for(var i=0;i<e.length;++i){var o=e.charCodeAt(i);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++i)),127>=o){if(r>=t)break;n[r++]=o}else{if(2047>=o){if(r+1>=t)break;n[r++]=192|o>>6}else{if(65535>=o){if(r+2>=t)break;n[r++]=224|o>>12}else{if(2097151>=o){if(r+3>=t)break;n[r++]=240|o>>18}else{if(67108863>=o){if(r+4>=t)break;n[r++]=248|o>>24}else{if(r+5>=t)break;n[r++]=252|o>>30,n[r++]=128|o>>24&63}n[r++]=128|o>>18&63}n[r++]=128|o>>12&63}n[r++]=128|o>>6&63}n[r++]=128|63&o}}return n[r]=0,r-a}function U(e,n,r){return ea(e,t,n,r)}function ba(e){for(var n=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);55296<=t&&57343>=t&&(t=65536+((1023&t)<<10)|1023&e.charCodeAt(++r)),127>=t?++n:n=2047>=t?n+2:65535>=t?n+3:2097151>=t?n+4:67108863>=t?n+5:n+6}return n}function ab(e){return e.replace(/__Z[\w\d_]+/g,function(e){var n;e:{var r=a.___cxa_demangle||a.__cxa_demangle;if(r)try{var t=e.substr(1),i=ba(t)+1,o=T(i);U(t,o,i);var u=T(4),s=r(o,0,0,u);if(0===wa(u,"i32")&&s){n=J(s);break e}}catch(e){}finally{o&&fa(o),u&&fa(u),s&&fa(s)}else f.b("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");n=e}return e===n?e:e+" ["+n+"]"})}function ga(){var e;e:{if(!(e=Error()).stack){try{throw Error(0)}catch(n){e=n}if(!e.stack){e="(no stack trace available)";break e}}e=e.stack.toString()}return a.extraStackTrace&&(e+="\n"+a.extraStackTrace()),ab(e)}function Ba(){a.HEAP8=q=new Int8Array(k),a.HEAP16=R=new Int16Array(k),a.HEAP32=m=new Int32Array(k),a.HEAPU8=t=new Uint8Array(k),a.HEAPU16=Ca=new Uint16Array(k),a.HEAPU32=Da=new Uint32Array(k),a.HEAPF32=Z=new Float32Array(k),a.HEAPF64=aa=new Float64Array(k)}function ha(){D("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+I+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function N(e){for(;0<e.length;){var n=e.shift();if("function"==typeof n)n();else{var r=n.L;"number"==typeof r?void 0===n.k?a.dynCall_v(r):a.dynCall_vi(r,n.k):r(void 0===n.k?null:n.k)}}}function Ea(e){Fa.unshift(e)}function Ga(e){Ha.unshift(e)}function ia(e,n,r){return r=Array(0<r?r:ba(e)+1),e=ea(e,r,0,r.length),n&&(r.length=e),r}function Ia(e,n){q.set(e,n)}function Ja(e,n,r){for(var t=0;t<e.length;++t)q[n++>>0]=e.charCodeAt(t);r||(q[n>>0]=0)}function ja(){K++,a.monitorRunDependencies&&a.monitorRunDependencies(K)}function ka(){if(K--,a.monitorRunDependencies&&a.monitorRunDependencies(K),0==K&&(null!==la&&(clearInterval(la),la=null),V)){var e=V;V=null,e()}}function ma(){var e=ma;return e.a||(e.a=[]),e.a.push(f.g()),e.a.length-1}function O(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function na(e){function n(){if(!a.calledRun&&(a.calledRun=!0,!W)){if(X||(X=!0,N(ca)),N(Ka),a.onRuntimeInitialized&&a.onRuntimeInitialized(),a._main&&La&&a.callMain(e),a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)Ga(a.postRun.shift());N(Ha)}}if(e=e||a.arguments,null===Ma&&(Ma=Date.now()),!(0<K)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)Ea(a.preRun.shift());N(Fa),0<K||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),n()},1)):n())}}function Na(e,n){n&&a.noExitRuntime||(!a.noExitRuntime&&(W=!0,z=bb,N(Oa),a.onExit)&&a.onExit(e),P&&process.exit(e),a.quit(e,new O(e)))}function D(e){void 0!==e?(a.print(e),a.e(e),e=JSON.stringify(e)):e="",W=!0;var n="abort("+e+") at "+ga()+"\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";throw Pa&&Pa.forEach(function(r){n=r(n,e)}),n}var a={};a.wasmBinary=new Uint8Array(u),a||(a=eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));var v={},p;for(p in a)a.hasOwnProperty(p)&&(v[p]=a[p]);var y=!1,L=!1,P=!1,G=!1;if(a.ENVIRONMENT)if("WEB"===a.ENVIRONMENT)y=!0;else if("WORKER"===a.ENVIRONMENT)L=!0;else if("NODE"===a.ENVIRONMENT)P=!0;else{if("SHELL"!==a.ENVIRONMENT)throw Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");G=!0}else y="object"==typeof window,L="function"==typeof importScripts,P="object"==typeof process&&!y&&!L,G=!y&&!P&&!L;if(P){a.print||(a.print=console.log),a.printErr||(a.printErr=console.warn);var oa,pa;a.read=function(e,n){oa||(oa=__webpack_require__(2)),pa||(pa=__webpack_require__(3)),e=pa.normalize(e);var r=oa.readFileSync(e);return n?r:r.toString()},a.readBinary=function(e){return(e=a.read(e,!0)).buffer||(e=new Uint8Array(e)),n(e.buffer),e},a.load=function(e){H(read(e))},a.thisProgram||(a.thisProgram=1<process.argv.length?process.argv[1].replace(/\\/g,"/"):"unknown-program"),a.arguments=process.argv.slice(2),void 0!==module&&(module.exports=a),process.on("uncaughtException",function(e){if(!(e instanceof O))throw e}),a.inspect=function(){return"[Emscripten Module object]"}}else if(G)a.print||(a.print=print),"undefined"!=typeof printErr&&(a.printErr=printErr),a.read="undefined"!=typeof read?read:function(){throw"no read() available"},a.readBinary=function(e){return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(e=read(e,"binary"),n("object"==typeof e),e)},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:void 0!==arguments&&(a.arguments=arguments),"function"==typeof quit&&(a.quit=function(e){quit(e)}),eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined");else{if(!y&&!L)throw"Unknown runtime environment. Where are we?";a.read=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},L&&(a.readBinary=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),a.readAsync=function(e,n,r){var t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="arraybuffer",t.onload=function(){200==t.status||0==t.status&&t.response?n(t.response):r()},t.onerror=r,t.send(null)},void 0!==arguments&&(a.arguments=arguments),"undefined"!=typeof console?(a.print||(a.print=function(e){console.log(e)}),a.printErr||(a.printErr=function(e){console.warn(e)})):a.print||(a.print=function(){}),L&&(a.load=importScripts),void 0===a.setWindowTitle&&(a.setWindowTitle=function(e){document.title=e})}!a.load&&a.read&&(a.load=function(e){H(a.read(e))}),a.print||(a.print=function(){}),a.printErr||(a.printErr=a.print),a.arguments||(a.arguments=[]),a.thisProgram||(a.thisProgram="./this.program"),a.quit||(a.quit=function(e,n){throw n}),a.print=a.print,a.e=a.printErr,a.preRun=[],a.postRun=[];for(p in v)v.hasOwnProperty(p)&&(a[p]=v[p]);var v=void 0,f={s:function(e){return tempRet0=e},A:function(){return tempRet0},g:function(){return z},c:function(e){z=e},q:function(e){switch(e){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:return"*"===e[e.length-1]?f.j:"i"===e[0]?(e=parseInt(e.substr(1)),n(0==e%8),e/8):0}},w:function(e){return Math.max(f.q(e),f.j)},C:16,S:function(e,r){return"double"===r||"i64"===r?7&e&&(n(4==(7&e)),e+=4):n(0==(3&e)),e},M:function(e,n,r){return r||"i64"!=e&&"double"!=e?e?Math.min(n||(e?f.w(e):0),f.j):Math.min(n,8):8},l:function(e,n,r){return r&&r.length?a["dynCall_"+e].apply(null,[n].concat(r)):a["dynCall_"+e].call(null,n)},d:[],t:function(e){for(var n=0;n<f.d.length;n++)if(!f.d[n])return f.d[n]=e,2*(1+n);throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."},B:function(e){f.d[(e-2)/2]=null},b:function(e){f.b.a||(f.b.a={}),f.b.a[e]||(f.b.a[e]=1,a.e(e))},m:{},O:function(e,r){n(r),f.m[r]||(f.m[r]={});var t=f.m[r];return t[e]||(t[e]=1===r.length?function(){return f.l(r,e)}:2===r.length?function(n){return f.l(r,e,[n])}:function(){return f.l(r,e,Array.prototype.slice.call(arguments))}),t[e]},N:function(){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"},f:function(e){var n=z;return z=z+e|0,z=z+15&-16,n},n:function(e){var n=A;return A=A+e|0,A=A+15&-16,n},p:function(e){var n=m[M>>2];return e=-16&(n+e+15|0),m[M>>2]=e,(e=e>=I)&&(ha(),e=!0),e?(m[M>>2]=n,0):n},o:function(e,n){return Math.ceil(e/(n||16))*(n||16)},R:function(e,n,r){return r?+(e>>>0)+4294967296*+(n>>>0):+(e>>>0)+4294967296*+(0|n)},h:1024,j:4,D:0};a.Runtime=f,f.addFunction=f.t,f.removeFunction=f.B;var W=0,Qa,Ra;!function(){function a(e){return e=e.toString().match(r).slice(1),{arguments:e[0],body:e[1],returnValue:e[2]}}function d(){if(!h){h={};for(var e in c)c.hasOwnProperty(e)&&(h[e]=a(c[e]))}}var c={stackSave:function(){f.g()},stackRestore:function(){f.c()},arrayToC:function(e){var n=f.f(e.length);return Ia(e,n),n},stringToC:function(e){var n=0;if(null!==e&&void 0!==e&&0!==e){var r=1+(e.length<<2);U(e,n=f.f(r),r)}return n}},e={string:c.stringToC,array:c.arrayToC};Ra=function(n,r,t,a,i){n=Y(n);var o=[],u=0;if(a)for(var s=0;s<a.length;s++){var l=e[t[s]];l?(0===u&&(u=f.g()),o[s]=l(a[s])):o[s]=a[s]}if(t=n.apply(null,o),"string"===r&&(t=J(t)),0!==u){if(i&&i.async)return void EmterpreterAsync.F.push(function(){f.c(u)});f.c(u)}return t};var r=/^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/,h=null;Qa=function(c,e,f){f=f||[];var r=Y(c);c=f.every(function(e){return"number"===e});var n="string"!==e;if(n&&c)return r;var p=f.map(function(e,n){return"$"+n});e="(function("+p.join(",")+") {";var m=f.length;if(!c){d(),e+="var stack = "+h.stackSave.body+";";for(var x=0;x<m;x++){var t=p[x],k=f[x];"number"!==k&&(k=h[k+"ToC"],e+="var "+k.arguments+" = "+t+";",e+=k.body+";",e+=t+"=("+k.returnValue+");")}}return f=a(function(){return r}).returnValue,e+="var ret = "+f+"("+p.join(",")+");",n||(f=a(function(){return J}).returnValue,e+="ret = "+f+"(ret);"),c||(d(),e+=h.stackRestore.body.replace("()","(stack)")+";"),eval(e+"return ret})")}}(),a.ccall=Ra,a.cwrap=Qa,a.setValue=va,a.getValue=wa,a.ALLOC_NORMAL=0,a.ALLOC_STACK=1,a.ALLOC_STATIC=2,a.ALLOC_DYNAMIC=3,a.ALLOC_NONE=4,a.allocate=S,a.getMemory=function(e){return qa?X?T(e):f.p(e):f.n(e)},a.Pointer_stringify=J,a.AsciiToString=function(e){for(var n="";;){var r=q[e++>>0];if(!r)return n;n+=String.fromCharCode(r)}},a.stringToAscii=function(e,n){return Ja(e,n,!1)};var za="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;a.UTF8ArrayToString=ya,a.UTF8ToString=Aa,a.stringToUTF8Array=ea,a.stringToUTF8=U,a.lengthBytesUTF8=ba,"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le"),a.stackTrace=ga;var k,q,t,R,Ca,m,Da,Z,aa,A,qa,z,M,v=A=y=z=p=y=M=0;qa=!1,p=a.TOTAL_STACK||5242880;var I=a.TOTAL_MEMORY||16777216;if(I<p&&a.e("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+I+"! (TOTAL_STACK="+p+")"),a.buffer?k=a.buffer:"object"==typeof WebAssembly&&"function"==typeof WebAssembly.Memory?(a.wasmMemory=new WebAssembly.Memory({initial:I/65536,maximum:I/65536}),k=a.wasmMemory.buffer):k=new ArrayBuffer(I),Ba(),m[0]=1668509029,R[1]=25459,115!==t[2]||99!==t[3])throw"Runtime error: expected the system to be little-endian!";a.HEAP=void 0,a.buffer=k,a.HEAP8=q,a.HEAP16=R,a.HEAP32=m,a.HEAPU8=t,a.HEAPU16=Ca,a.HEAPU32=Da,a.HEAPF32=Z,a.HEAPF64=aa;var Fa=[],ca=[],Ka=[],Oa=[],Ha=[],X=!1;if(a.addOnPreRun=Ea,a.addOnInit=function(e){ca.unshift(e)},a.addOnPreMain=function(e){Ka.unshift(e)},a.addOnExit=function(e){Oa.unshift(e)},a.addOnPostRun=Ga,a.intArrayFromString=ia,a.intArrayToString=function(e){for(var n=[],r=0;r<e.length;r++){var t=e[r];255<t&&(t&=255),n.push(String.fromCharCode(t))}return n.join("")},a.writeStringToMemory=function(e,n,r){f.b("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var t,a;r&&(a=n+ba(e),t=q[a]),U(e,n,1/0),r&&(q[a]=t)},a.writeArrayToMemory=Ia,a.writeAsciiToMemory=Ja,Math.imul&&-5===Math.imul(4294967295,5)||(Math.imul=function(e,n){var r=65535&e,t=65535&n;return r*t+((e>>>16)*t+r*(n>>>16)<<16)|0}),Math.Q=Math.imul,!Math.fround){var Sa=new Float32Array(1);Math.fround=function(e){return Sa[0]=e,Sa[0]}}Math.K=Math.fround,Math.clz32||(Math.clz32=function(e){e>>>=0;for(var n=0;32>n;n++)if(e&1<<31-n)return n;return 32}),Math.H=Math.clz32,Math.trunc||(Math.trunc=function(e){return 0>e?Math.ceil(e):Math.floor(e)}),Math.trunc=Math.trunc;var Xa=Math.abs,$a=Math.ceil,Za=Math.floor,Ya=Math.min,K=0,la=null,V=null;a.addRunDependency=ja,a.removeRunDependency=ka,a.preloadedImages={},a.preloadedAudios={};var E=null;!function(b){function d(e){0<e%(n=b.usingWasm?65536:16777216)&&(e+=n-e%n);var n,r=(n=b.buffer).byteLength;if(!b.usingWasm)return x.__growWasmMemory((e-r)/65536),b.buffer!==n?b.buffer:null;try{return-1!==b.wasmMemory.grow((e-r)/65536)?b.buffer=b.wasmMemory.buffer:null}catch(e){return null}}function c(e,n){var r=q;if(0>e.indexOf("."))r=(r||{})[e];else{var t=e.split(".");r=(r||{})[t[0]],r=(r||{})[t[1]]}return n&&(r=(r||{})[n]),void 0===r&&D("bad lookupImport to ("+e+")."+n),r}function e(e){var n=b.buffer;e.byteLength<n.byteLength&&b.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");n=new Int8Array(n);var r=new Int8Array(e);E||n.set(r.subarray(b.STATIC_BASE,b.STATIC_BASE+b.STATIC_BUMP),b.STATIC_BASE),r.set(n),a.buffer=k=e,Ba()}function f(){var e;if(b.wasmBinary)e=b.wasmBinary,e=new Uint8Array(e);else{if(!b.readBinary)throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";e=b.readBinary(m)}return e}function h(){return b.wasmBinary||"function"!=typeof fetch?new Promise(function(e){e(f())}):fetch(m,{I:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+m+"'";return e.arrayBuffer()})}function g(a,c,d){return"function"==typeof b.asm&&b.asm!==y||(b.asmPreload?b.asm=b.asmPreload:eval(b.read(v))),"function"!=typeof b.asm?(b.printErr("asm evalling did not set the module properly"),!1):b.asm(a,c,d)}function l(n,r){function t(n){(x=n.exports).memory&&e(x.memory),b.asm=x,b.usingWasm=!0,ka()}if("object"!=typeof WebAssembly)return b.printErr("no native wasm support detected"),!1;if(!(b.wasmMemory instanceof WebAssembly.Memory))return b.printErr("no native wasm Memory in use"),!1;if(r.memory=b.wasmMemory,q.global={NaN:NaN,Infinity:1/0},q["global.Math"]=n.Math,q.env=r,ja(),b.instantiateWasm)try{return b.instantiateWasm(q,t)}catch(e){return b.printErr("Module.instantiateWasm callback failed with error: "+e),!1}return h().then(function(e){return WebAssembly.instantiate(e,q)}).then(function(e){t(e.instance)}).catch(function(e){b.printErr("failed to asynchronously prepare wasm: "+e),b.quit(1,e)}),{}}var p=b.wasmJSMethod||"native-wasm";b.wasmJSMethod=p;var t=b.wasmTextFile||"fastxpub.wast",m=b.wasmBinaryFile||"fastxpub.wasm",v=b.asmjsCodeFile||"fastxpub.temp.asm.js";"function"==typeof b.locateFile&&(t=b.locateFile(t),m=b.locateFile(m),v=b.locateFile(v));var q={global:null,env:null,asm2wasm:{"f64-rem":function(e,n){return e%n},"f64-to-int":function(e){return 0|e},"i32s-div":function(e,n){return(0|e)/(0|n)|0},"i32u-div":function(e,n){return(e>>>0)/(n>>>0)>>>0},"i32s-rem":function(e,n){return(0|e)%(0|n)|0},"i32u-rem":function(e,n){return(e>>>0)%(n>>>0)>>>0},debugger:function(){}},parent:b},x=null;b.asmPreload=b.asm;var u=b.reallocBuffer;b.reallocBuffer=function(e){return"asmjs"===z?u(e):d(e)};var z="";b.asm=function(r,a,i){if(!a.table){void 0===(s=b.wasmTableSize)&&(s=1024);var o=b.wasmMaxTableSize;a.table="object"==typeof WebAssembly&&"function"==typeof WebAssembly.Table?void 0!==o?new WebAssembly.Table({initial:s,maximum:o,element:"anyfunc"}):new WebAssembly.Table({initial:s,element:"anyfunc"}):Array(s),b.wasmTable=a.table}a.memoryBase||(a.memoryBase=b.STATIC_BASE),a.tableBase||(a.tableBase=0);var u,s=p.split(",");for(o=0;o<s.length;o++)if(z=u=s[o],"native-wasm"===u){if(u=l(r,a))break}else if("asmjs"===u){if(u=g(r,a,i))break}else{if("interpret-asm2wasm"!==u&&"interpret-s-expr"!==u&&"interpret-binary"!==u)throw"bad method: "+u;var m=r,d=a,y=i;if("function"!=typeof WasmJS)b.printErr("WasmJS not detected - polyfill not bundled?"),u=!1;else{var h=WasmJS({});if(h.outside=b,h.info=q,h.lookupImport=c,n(y===b.buffer),q.global=m,q.env=d,n(y===b.buffer),d.memory=y,n(d.memory instanceof ArrayBuffer),h.providedTotalMemory=b.buffer.byteLength,m=void 0,m="interpret-binary"===u?f():b.read("interpret-asm2wasm"==u?v:t),d=void 0,"interpret-asm2wasm"==u)d=h._malloc(m.length+1),h.writeAsciiToMemory(m,d),h._load_asm2wasm(d);else if("interpret-s-expr"===u)d=h._malloc(m.length+1),h.writeAsciiToMemory(m,d),h._load_s_expr2wasm(d);else{if("interpret-binary"!==u)throw"what? "+u;d=h._malloc(m.length),h.HEAPU8.set(m,d),h._load_binary2wasm(d,m.length)}h._free(d),h._instantiate(d),b.newBuffer&&(e(b.newBuffer),b.newBuffer=null),u=x=h.asmExports}if(u)break}if(!u)throw"no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods";return u};var y=b.asm}(a),v=f.h,A=v+77952,ca.push(),E=0<=a.wasmJSMethod.indexOf("asmjs")||0<=a.wasmJSMethod.indexOf("interpret-asm2wasm")?"fastxpub.js.mem":null,a.STATIC_BASE=v,a.STATIC_BUMP=77952,v=A,A+=16,a._memset=cb,a._llvm_bswap_i32=ra,a._sbrk=db,a._memcpy=eb,M=S(1,"i32",2),y=z=f.o(A),p=y+p,y=f.o(p),m[M>>2]=y,qa=!0,a.wasmTableSize=0,a.wasmMaxTableSize=0,a.u={Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,NaN:NaN,Infinity:1/0},a.v={abort:D,assert:n,enlargeMemory:function(){ha()},getTotalMemory:function(){return I},abortOnCannotGrowMemory:ha,_ed25519_publickey_keccak:function(){a.printErr("missing function: ed25519_publickey_keccak"),D(-1)},_abort:function(){a.abort()},_curve25519_scalarmult_basepoint:function(){a.printErr("missing function: curve25519_scalarmult_basepoint"),D(-1)},___setErrNo:function(e){return a.___errno_location&&(m[a.___errno_location()>>2]=e),e},_llvm_stacksave:ma,_ed25519_publickey_sha3:function(){a.printErr("missing function: ed25519_publickey_sha3"),D(-1)},_emscripten_memcpy_big:function(e,n,r){return t.set(t.subarray(n,n+r),e),e},_llvm_bswap_i64:function(e,n){var r=ra(n)>>>0,t=ra(e)>>>0;return 0|(f.s(t),r)},_llvm_stackrestore:function(e){var n=ma,r=n.a[e];n.a.splice(e,1),f.c(r)},___assert_fail:function(e,n,r,t){throw W=!0,"Assertion failed: "+J(e)+", at: "+[n?J(n):"unknown filename",r,t?J(t):"unknown function"]+" at "+ga()},_ed25519_publickey:function(){a.printErr("missing function: ed25519_publickey"),D(-1)},DYNAMICTOP_PTR:M,tempDoublePtr:v,ABORT:W,STACKTOP:z,STACK_MAX:p},v=a.asm(a.u,a.v,k),a.asm=v,a._hdnode_serialize_public=function(){return a.asm._hdnode_serialize_public.apply(null,arguments)},a.getTempRet0=function(){return a.asm.getTempRet0.apply(null,arguments)};var fa=a._free=function(){return a.asm._free.apply(null,arguments)};a.runPostSets=function(){return a.asm.runPostSets.apply(null,arguments)},a.setTempRet0=function(){return a.asm.setTempRet0.apply(null,arguments)},a._ecdsa_read_pubkey=function(){return a.asm._ecdsa_read_pubkey.apply(null,arguments)},a.establishStackSpace=function(){return a.asm.establishStackSpace.apply(null,arguments)},a.stackSave=function(){return a.asm.stackSave.apply(null,arguments)};var cb=a._memset=function(){return a.asm._memset.apply(null,arguments)};a._hdnode_fingerprint=function(){return a.asm._hdnode_fingerprint.apply(null,arguments)};var T=a._malloc=function(){return a.asm._malloc.apply(null,arguments)};a._emscripten_get_global_libc=function(){return a.asm._emscripten_get_global_libc.apply(null,arguments)};var eb=a._memcpy=function(){return a.asm._memcpy.apply(null,arguments)};a._hdnode_public_ckd=function(){return a.asm._hdnode_public_ckd.apply(null,arguments)},a.stackAlloc=function(){return a.asm.stackAlloc.apply(null,arguments)},a.setThrew=function(){return a.asm.setThrew.apply(null,arguments)};var db=a._sbrk=function(){return a.asm._sbrk.apply(null,arguments)};a._hdnode_deserialize=function(){return a.asm._hdnode_deserialize.apply(null,arguments)},a.stackRestore=function(){return a.asm.stackRestore.apply(null,arguments)},a._hdnode_public_ckd_address_optimized=function(){return a.asm._hdnode_public_ckd_address_optimized.apply(null,arguments)};var ra=a._llvm_bswap_i32=function(){return a.asm._llvm_bswap_i32.apply(null,arguments)};if(f.f=a.stackAlloc,f.g=a.stackSave,f.c=a.stackRestore,f.J=a.establishStackSpace,f.s=a.setTempRet0,f.A=a.getTempRet0,a.asm=v,E)if("function"==typeof a.locateFile?E=a.locateFile(E):a.memoryInitializerPrefixURL&&(E=a.memoryInitializerPrefixURL+E),P||G)G=a.readBinary(E),t.set(G,f.h);else{var Ua=function(){a.readAsync(E,Ta,function(){throw"could not load memory initializer "+E})};ja();var Ta=function(e){e.byteLength&&(e=new Uint8Array(e)),t.set(e,f.h),a.memoryInitializerRequest&&delete a.memoryInitializerRequest.response,ka()};a.memoryInitializerRequest?(G=function(){var e=a.memoryInitializerRequest;200!==e.status&&0!==e.status?(console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+e.status+", retrying "+E),Ua()):Ta(e.response)},a.memoryInitializerRequest.response?setTimeout(G,0):a.memoryInitializerRequest.addEventListener("load",G)):Ua()}O.prototype=Error(),O.prototype.constructor=O;var bb,Ma=null,V=function e(){a.calledRun||na(),a.calledRun||(V=e)};a.callMain=a.G=function(e){function n(){for(var e=0;3>e;e++)t.push(0)}e=e||[],X||(X=!0,N(ca));var r=e.length+1,t=[S(ia(a.thisProgram),"i8",0)];n();for(var i=0;i<r-1;i+=1)t.push(S(ia(e[i]),"i8",0)),n();t.push(0),t=S(t,"i32",0);try{Na(a._main(r,t,0),!0)}catch(n){n instanceof O||("SimulateInfiniteLoop"==n?a.noExitRuntime=!0:((e=n)&&"object"==typeof n&&n.stack&&(e=[n,n.stack]),a.e("exception thrown: "+e),a.quit(1,n)))}},a.run=a.run=na,a.exit=a.exit=Na;var Pa=[];if(a.abort=a.abort=D,a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();var La=!0;a.noInitialRun&&(La=!1),a.noExitRuntime=!0,na();var Va=da();return a.onRuntimeInitialized=function(){function e(e){var n=new Uint8Array(33);n.set(e.public_key,0),i.set(n,b),(n=new Uint8Array(32)).set(e.chain_code,0),i.set(n,y),p(0,b,d)}function n(e,n,r){if(U(e,_,200),0!==s(_,r,0,h,0))throw Error("Wrong XPUB type!!");if(g=f(h),1!==l(h,n))throw Error("Strange return type");if(0===c(h,g,r,_,200))throw Error("Strange return type");return Aa(_)}function r(e,n,r){return u(d,y,e,n,v,60,r),m(v)}function t(n,t,a,i,o){var u=[];for(e(n),n=t;n<=a;n++)u.push(r(n,i,o));return u}var i=a.HEAPU8,o=a._malloc,u=a._hdnode_public_ckd_address_optimized,s=a._hdnode_deserialize,f=a._hdnode_fingerprint,l=a._hdnode_public_ckd,c=a._hdnode_serialize_public,p=a._ecdsa_read_pubkey,m=a.Pointer_stringify,d=o(72),b=o(33),y=o(32),h=o(109),v=o(60),_=o(200),g=0;Va.resolve({processMessage:function(e){var r=(e=e.data).type;switch(r){case"deriveAddressRange":r=t(e.node,e.firstIndex,e.lastIndex,e.version,e.addressFormat),self.postMessage({addresses:r,firstIndex:e.firstIndex,lastIndex:e.lastIndex,i:e.i});break;case"deriveNode":r=n(e.xpub,e.index,e.version),self.postMessage({xpub:r,i:e.i});break;default:throw Error("Unknown message type: "+r)}},loadNode:e,deriveAddress:r,deriveNode:n,deriveAddressRange:t})},Va.r}if("undefined"==typeof importScripts&&"undefined"!=typeof WorkerGlobalScope&&this instanceof WorkerGlobalScope&&(this.importScripts=function(){throw Error("importScripts is a stub")}),"function"==typeof importScripts){var ta=da();self.onmessage=function(e){var n=e.data;"init"===n.type?sa(n.binary).then(function(e){ta.resolve(e)}):ta.r.then(function(n){n.processMessage(e)})}}var Wa=function(e){return function(){if(null===ua)throw Error("fastxpub not yet inited.");return ua[e].apply(void 0,arguments)}},ua=null;module.exports={deriveNode:Wa("deriveNode"),loadNode:Wa("loadNode"),deriveAddress:Wa("deriveAddress"),deriveAddressRange:Wa("deriveAddressRange"),init:function(e){return sa(e).then(function(e){ua=e})}}}).call(exports,__webpack_require__(0))},function(e,n){},function(e,n,r){(function(e){function r(e,n){for(var r=0,t=e.length-1;t>=0;t--){var a=e[t];"."===a?e.splice(t,1):".."===a?(e.splice(t,1),r++):r&&(e.splice(t,1),r--)}if(n)for(;r--;r)e.unshift("..");return e}function t(e,n){if(e.filter)return e.filter(n);for(var r=[],t=0;t<e.length;t++)n(e[t],t,e)&&r.push(e[t]);return r}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return a.exec(e).slice(1)};n.resolve=function(){for(var n="",a=!1,i=arguments.length-1;i>=-1&&!a;i--){var o=i>=0?arguments[i]:e.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(n=o+"/"+n,a="/"===o.charAt(0))}return n=r(t(n.split("/"),function(e){return!!e}),!a).join("/"),(a?"/":"")+n||"."},n.normalize=function(e){var a=n.isAbsolute(e),i="/"===o(e,-1);return(e=r(t(e.split("/"),function(e){return!!e}),!a).join("/"))||a||(e="."),e&&i&&(e+="/"),(a?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(t(e,function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,r){function t(e){for(var n=0;n<e.length&&""===e[n];n++);for(var r=e.length-1;r>=0&&""===e[r];r--);return n>r?[]:e.slice(n,r-n+1)}e=n.resolve(e).substr(1),r=n.resolve(r).substr(1);for(var a=t(e.split("/")),i=t(r.split("/")),o=Math.min(a.length,i.length),u=o,s=0;s<o;s++)if(a[s]!==i[s]){u=s;break}var f=[];for(s=u;s<a.length;s++)f.push("..");return(f=f.concat(i.slice(u))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var n=i(e),r=n[0],t=n[1];return r||t?(t&&(t=t.substr(0,t.length-1)),r+t):"."},n.basename=function(e,n){var r=i(e)[2];return n&&r.substr(-1*n.length)===n&&(r=r.substr(0,r.length-n.length)),r},n.extname=function(e){return i(e)[3]};var o="b"==="ab".substr(-1)?function(e,n,r){return e.substr(n,r)}:function(e,n,r){return n<0&&(n=e.length+n),e.substr(n,r)}}).call(n,r(0))}]);
//# sourceMappingURL=worker.d921700349873da7a390.js.map