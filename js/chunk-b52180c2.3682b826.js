(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b52180c2"],{"0b42":function(e,t,n){var r=n("da84"),a=n("e8b5"),o=n("68ee"),c=n("861d"),i=n("b622"),s=i("species"),l=r.Array;e.exports=function(e){var t;return a(e)&&(t=e.constructor,o(t)&&(t===l||a(t.prototype))?t=void 0:c(t)&&(t=t[s],null===t&&(t=void 0))),void 0===t?l:t}},"0cb2":function(e,t,n){var r=n("e330"),a=n("7b0b"),o=Math.floor,c=r("".charAt),i=r("".replace),s=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,f){var b=n+e.length,v=r.length,p=u;return void 0!==d&&(d=a(d),p=l),i(f,p,(function(a,i){var l;switch(c(i,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,b);case"<":l=d[s(i,1,-1)];break;default:var u=+i;if(0===u)return a;if(u>v){var f=o(u/10);return 0===f?a:f<=v?void 0===r[f-1]?c(i,1):r[f-1]+c(i,1):a}l=r[u-1]}return void 0===l?"":l}))}},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),o=n("825a"),c=n("1626"),i=n("c6b6"),s=n("9263"),l=r.TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var r=a(n,e,t);return null!==r&&o(r),r}if("RegExp"===i(e))return a(s,e,t);throw l("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),a=n("fdbc"),o=n("785a"),c=n("17c2"),i=n("9112"),s=function(e){if(e&&e.forEach!==c)try{i(e,"forEach",c)}catch(t){e.forEach=c}};for(var l in a)a[l]&&s(r[l]&&r[l].prototype);s(o)},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,a=n("a640"),o=a("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1cb2":function(e,t,n){"use strict";n("965e")},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),o=n("2d00"),c=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"3aef":function(e,t,n){},"459d":function(e,t,n){"use strict";var r=n("7a23"),a={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1500"}},o={class:"toast-header"},c={class:"me-auto"},i=["onClick"],s={key:0,class:"toast-body"};function l(e,t,n,l,u,d){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(u.messages,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:t,class:Object(r["normalizeClass"])(["toast show","toast".concat(t)]),role:"alert"},[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("span",{class:Object(r["normalizeClass"])(["bg-".concat(e.style),"p-2 rounded me-2 d-inline-block"])},null,2),Object(r["createElementVNode"])("strong",c,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("button",{type:"button",class:"btn-close",onClick:function(e){return d.clearToast(t)},"aria-label":"Close"},null,8,i)]),e.content?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,Object(r["toDisplayString"])(e.content),1)):Object(r["createCommentVNode"])("",!0)],2)})),128))])}n("a434");var u=n("4dcd"),d={data:function(){return{messages:[]}},methods:{toastShow:function(){var e=this;setTimeout((function(){e.messages.shift()}),3e3)},clearToast:function(e){this.messages.splice(e,1)}},mounted:function(){var e=this;u["a"].on("push-message",(function(t){var n=t.style,r=void 0===n?"success":n,a=t.title,o=t.content;e.messages.push({style:r,title:a,content:o}),e.toastShow()}))}},f=n("6b0d"),b=n.n(f);const v=b()(d,[["render",l]]);t["a"]=v},5319:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),o=n("e330"),c=n("d784"),i=n("d039"),s=n("825a"),l=n("1626"),u=n("5926"),d=n("50c4"),f=n("577e"),b=n("1d80"),v=n("8aa5"),p=n("dc4a"),g=n("0cb2"),h=n("14c3"),x=n("b622"),m=x("replace"),O=Math.max,j=Math.min,E=o([].concat),k=o([].push),y=o("".indexOf),N=o("".slice),w=function(e){return void 0===e?e:String(e)},$=function(){return"$0"==="a".replace(/./,"$0")}(),V=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),C=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));c("replace",(function(e,t,n){var o=V?"$":"$0";return[function(e,n){var r=b(this),o=void 0==e?void 0:p(e,m);return o?a(o,e,r,n):a(t,f(r),e,n)},function(e,a){var c=s(this),i=f(e);if("string"==typeof a&&-1===y(a,o)&&-1===y(a,"$<")){var b=n(t,c,i,a);if(b.done)return b.value}var p=l(a);p||(a=f(a));var x=c.global;if(x){var m=c.unicode;c.lastIndex=0}var $=[];while(1){var V=h(c,i);if(null===V)break;if(k($,V),!x)break;var C=f(V[0]);""===C&&(c.lastIndex=v(i,d(c.lastIndex),m))}for(var I="",S=0,T=0;T<$.length;T++){V=$[T];for(var B=f(V[0]),R=O(j(u(V.index),i.length),0),A=[],M=1;M<V.length;M++)k(A,w(V[M]));var _=V.groups;if(p){var D=E([B],A,R,i);void 0!==_&&k(D,_);var L=f(r(a,void 0,D))}else L=g(B,i,R,A,_,a);R>=S&&(I+=N(i,S,R)+L,S=R+B.length)}return I+N(i,S)}]}),!C||!$||V)},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},7277:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function a(e,t,n,a,o,c){var i=Object(r["resolveComponent"])("Loading"),s=Object(r["resolveComponent"])("ToastMessage"),l=Object(r["resolveComponent"])("Navbar"),u=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(i,{active:o.loadingStatus},null,8,["active"]),Object(r["createVNode"])(s),Object(r["createVNode"])(l,{onLogout:c.logout},null,8,["onLogout"]),Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])((function(e){var t=e.Component;return[Object(r["createVNode"])(r["Transition"],{name:"fade-transform",mode:"out-in","enter-from-class":"fade-transform-enter"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(t)))]})),_:2},1024)]})),_:1})],64)}n("ac1f"),n("5319");var o={class:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark"},c={class:"container-fluid"},i=Object(r["createTextVNode"])(" 後台管理頁面 "),s={class:"navbar-toggler ms-auto",ref:"toggleBtn",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l=Object(r["createElementVNode"])("span",{class:"navbar-toggler-icon"},null,-1),u=[l],d={class:"collapse navbar-collapse",id:"navbarNavDropdown"},f={class:"navbar-nav"},b={class:"nav-item"},v=Object(r["createTextVNode"])("產品列表"),p={class:"nav-item"},g=Object(r["createTextVNode"])("訂單列表"),h=Object(r["createElementVNode"])("b",null,[Object(r["createElementVNode"])("i",{class:"bi bi-book-half",style:{color:"green"}}),Object(r["createTextVNode"])(" Logout "),Object(r["createElementVNode"])("i",{class:"bi bi-book-half",style:{color:"green"}})],-1),x=[h];function m(e,t,n,a,l,h){var m=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("nav",o,[Object(r["createElementVNode"])("div",c,[Object(r["createVNode"])(m,{class:"navbar-brand",to:"/admin"},{default:Object(r["withCtx"])((function(){return[i]})),_:1}),Object(r["createElementVNode"])("button",s,u,512),Object(r["createElementVNode"])("div",d,[Object(r["createElementVNode"])("ul",f,[Object(r["createElementVNode"])("li",b,[Object(r["createVNode"])(m,{class:"nav-link cancel",to:"/admin/products"},{default:Object(r["withCtx"])((function(){return[v]})),_:1})]),Object(r["createElementVNode"])("li",p,[Object(r["createVNode"])(m,{class:"nav-link cancel",to:"/admin/orders"},{default:Object(r["withCtx"])((function(){return[g]})),_:1})])]),Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-warning ms-auto",onClick:t[0]||(t[0]=function(t){return e.$emit("logout")})},x)])])])}n("d3b7"),n("159b");var O={data:function(){return{tmpdata:"hahaha"}},methods:{test:function(){console.log(this.$refs.toggleBtn),this.$refs.toggleBtn.click()}},mounted:function(){var e=this;console.log(window.innerWidth);var t=document.querySelectorAll(".cancel");console.log(t),t.forEach((function(t){t.addEventListener("click",(function(){window.innerWidth<1e3&&e.$refs.toggleBtn.click()}))}))}},j=(n("1cb2"),n("6b0d")),E=n.n(j);const k=E()(O,[["render",m]]);var y=k,N=n("459d"),w=n("4dcd"),$={data:function(){return{loadingStatus:!1}},components:{Navbar:y,ToastMessage:N["a"]},methods:{checkToken:function(){var e=this;this.loadingStatus=!0;var t=document.cookie.replace(/(?:(?:^|.*;\s*)hexFarmerToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common["Authorization"]=t;var n="".concat("https://vue3-course-api.hexschool.io/v2","/api/user/check");this.$http.post(n).then((function(t){e.loadingStatus=!1,e.$pushToastMessage(t,"登入")})).catch((function(t){e.loadingStatus=!1,alert("帳號驗證失敗，請重新登入。"),e.$router.push("/login"),console.dir(t)}))},logout:function(){var e=this;this.loadingStatus=!0;var t="".concat("https://vue3-course-api.hexschool.io/v2","/logout");this.$http.post(t).then((function(t){t.data.success&&(e.loadingStatus=!1,alert("成功登出！"),e.$router.push("/"))})).catch((function(t){e.loadingStatus=!1,e.$pushToastMessage(t.response,"登出")}))}},mounted:function(){var e=this;this.checkToken(),w["a"].on("loading",(function(){e.loadingStatus=!0})),w["a"].on("un-loading",(function(){e.loadingStatus=!1}))}};n("92aa");const V=E()($,[["render",a],["__scopeId","data-v-37ebc02d"]]);t["default"]=V},8418:function(e,t,n){"use strict";var r=n("a04b"),a=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var c=r(t);c in e?a.f(e,c,o(0,n)):e[c]=n}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("c65b"),a=n("e330"),o=n("577e"),c=n("ad6d"),i=n("9f7f"),s=n("5692"),l=n("7c73"),u=n("69f3").get,d=n("fce3"),f=n("107c"),b=s("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,p=v,g=a("".charAt),h=a("".indexOf),x=a("".replace),m=a("".slice),O=function(){var e=/a/,t=/b*/g;return r(v,e,"a"),r(v,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),j=i.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],k=O||E||j||d||f;k&&(p=function(e){var t,n,a,i,s,d,f,k=this,y=u(k),N=o(e),w=y.raw;if(w)return w.lastIndex=k.lastIndex,t=r(p,w,N),k.lastIndex=w.lastIndex,t;var $=y.groups,V=j&&k.sticky,C=r(c,k),I=k.source,S=0,T=N;if(V&&(C=x(C,"y",""),-1===h(C,"g")&&(C+="g"),T=m(N,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==g(N,k.lastIndex-1))&&(I="(?: "+I+")",T=" "+T,S++),n=new RegExp("^(?:"+I+")",C)),E&&(n=new RegExp("^"+I+"$(?!\\s)",C)),O&&(a=k.lastIndex),i=r(v,V?n:k,T),V?i?(i.input=m(i.input,S),i[0]=m(i[0],S),i.index=k.lastIndex,k.lastIndex+=i[0].length):k.lastIndex=0:O&&i&&(k.lastIndex=k.global?i.index+i[0].length:a),E&&i&&i.length>1&&r(b,i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i&&$)for(i.groups=d=l(null),s=0;s<$.length;s++)f=$[s],d[f[0]]=i[f[1]];return i}),e.exports=p},"92aa":function(e,t,n){"use strict";n("3aef")},"965e":function(e,t,n){},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp,c=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),i=c||r((function(){return!o("a","y").sticky})),s=c||r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:s,MISSED_STICKY:i,UNSUPPORTED_Y:c}},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("23cb"),c=n("5926"),i=n("07fa"),s=n("7b0b"),l=n("65f0"),u=n("8418"),d=n("1dde"),f=d("splice"),b=a.TypeError,v=Math.max,p=Math.min,g=9007199254740991,h="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var n,r,a,d,f,x,m=s(this),O=i(m),j=o(e,O),E=arguments.length;if(0===E?n=r=0:1===E?(n=0,r=O-j):(n=E-2,r=p(v(c(t),0),O-j)),O+n-r>g)throw b(h);for(a=l(m,r),d=0;d<r;d++)f=j+d,f in m&&u(a,d,m[f]);if(a.length=r,n<r){for(d=j;d<O-r;d++)f=d+r,x=d+n,f in m?m[x]=m[f]:delete m[x];for(d=O;d>O-r+n;d--)delete m[d-1]}else if(n>r)for(d=O-r;d>j;d--)f=d+r-1,x=d+n-1,f in m?m[x]=m[f]:delete m[x];for(d=0;d<n;d++)m[d+j]=arguments[d+2];return m.length=O-r+n,a}})},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b727:function(e,t,n){var r=n("0366"),a=n("e330"),o=n("44ad"),c=n("7b0b"),i=n("07fa"),s=n("65f0"),l=a([].push),u=function(e){var t=1==e,n=2==e,a=3==e,u=4==e,d=6==e,f=7==e,b=5==e||d;return function(v,p,g,h){for(var x,m,O=c(v),j=o(O),E=r(p,g),k=i(j),y=0,N=h||s,w=t?N(v,k):n||f?N(v,0):void 0;k>y;y++)if((b||y in j)&&(x=j[y],m=E(x,y,O),e))if(t)w[y]=m;else if(m)switch(e){case 3:return!0;case 5:return x;case 6:return y;case 2:l(w,x)}else switch(e){case 4:return!1;case 7:l(w,x)}return d?-1:a||u?u:w}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),o=n("9263"),c=n("d039"),i=n("b622"),s=n("9112"),l=i("species"),u=RegExp.prototype;e.exports=function(e,t,n,d){var f=i(e),b=!c((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),v=b&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!b||!v||n){var p=r(/./[f]),g=t(f,""[e],(function(e,t,n,a,c){var i=r(e),s=t.exec;return s===o||s===u.exec?b&&!c?{done:!0,value:p(t,n,a)}:{done:!0,value:i(n,t,a)}:{done:!1}}));a(String.prototype,e,g[0]),a(u,f,g[1])}d&&s(u[f],"sham",!0)}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-b52180c2.3682b826.js.map