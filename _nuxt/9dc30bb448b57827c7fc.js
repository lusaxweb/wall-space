(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(t,o,e){var content=e(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("025aecab",content,!0,{sourceMap:!1})},200:function(t,o,e){"use strict";e(25);var n={render:function(t){return t("div",{class:["carbon-ads","".concat(this.type)]})},props:{type:{type:String,default:"default"}},mounted:function(){"index"==this.$route.name&&"<Post>"==this.$parent._name&&this.load(),1!=this.$route.name.indexOf("namePost")&&"<Viewx>"==this.$parent._name&&this.load(),("articles"==this.$route.name||"topics"==this.$route.name||"Assets"==this.$route.name||"About"==this.$route.name||"AddPost"==this.$route.name||"addBlog"==this.$route.name||-1!=this.$route.name.indexOf("search")&&"<Post>"==this.$parent._name||-1!=this.$route.name.indexOf("user")&&"<Post>"==this.$parent._name)&&this.load()},watch:{$route:function(t,o){"index"==o.name&&"<Post>"==this.$parent._name?this.$el.innerHTML="":t.path!=o.path&&"<Viewx>"==this.$parent._name?(this.$el.innerHTML="",this.load()):"index"==t.name&&"<Post>"==this.$parent._name&&(this.$el.innerHTML="",this.load())}},methods:{reload:function(){this.$el.innerHTML="",this.load()},load:function(){var s=document.createElement("script");s.id="_carbonads_js",s.src="//cdn.carbonads.com/carbon.js?serve=CK7DC27J&placement=lusaxwebgithubio",this.$el.appendChild(s)}}},r=(e(201),e(4)),component=Object(r.a)(n,void 0,void 0,!1,null,null,null);o.a=component.exports},201:function(t,o,e){"use strict";var n=e(197);e.n(n).a},202:function(t,o,e){(t.exports=e(12)(!1)).push([t.i,".no-adsx{padding-bottom:calc(75% + 2.335rem)}.carbon-ads{min-height:200px}.carbon-ads.row{width:100%}.carbon-ads.row .carbon-wrap{padding:0;position:relative}.carbon-ads.row div[id*=carbonads]>span{padding:10px!important;position:relative;height:auto!important}.carbon{display:flex;align-items:center;width:100%}div[id*=carbonads]{--width:320px;--font-size:13px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,Helvetica,Arial,sans-serif;display:block;overflow:hidden;width:calc(100% - 16px);border-radius:10px;text-align:center;font-size:13px;line-height:1.5;position:relative;z-index:1000;border:0;transition:all .3s ease;font-size:.7rem;margin:8px}div[id*=carbonads] a{color:inherit;text-decoration:none}div[id*=carbonads] a:hover{color:inherit}div[id*=carbonads]>span{position:relative;display:block;overflow:hidden;padding-bottom:75%;margin:8px}.carbon-wrap{position:absolute;width:100%;left:0;top:0;display:flex;align-items:center;flex-direction:column;height:100%;justify-content:center;transition:all .25s ease}.carbon-wrap:hover{opacity:.7}.carbon-img{display:block;margin-bottom:8px;line-height:1}.carbon-img img{margin:0 auto;max-width:160px;width:100%;height:auto;border-radius:10px}.carbon-img img,.carbon-text{display:block;transition:all .25s ease}.carbon-text{padding-bottom:8px}.carbon-poweredby{display:block;padding:10px 13px;text-transform:uppercase;letter-spacing:.5px;font-weight:600;font-size:9px;line-height:0;z-index:200;position:relative}@media only screen and (max-width:1100){div[id*=carbonads]{float:none;margin:0 auto;right:0;max-width:calc(100% - 20px);position:relative}div[id*=carbonads] span{position:relative}div[id*=carbonads]>span{max-width:none}.carbon-img{float:left;margin:0}.carbon-img img{max-width:130px!important}.carbon-text{float:left;margin-bottom:0;padding:8px 20px;text-align:left;max-width:calc(100% - 130px - 3em)}.carbon-poweredby{left:130px;bottom:0;display:block;width:100%}}",""])},207:function(t,o,e){"use strict";var n=e(5),r=e(21),c=e(28),l=e(110),d=e(64),m=e(14),f=e(65).f,h=e(82).f,x=e(15).f,v=e(511).trim,y=n.Number,w=y,_=y.prototype,k="Number"==c(e(81)(_)),$="trim"in String.prototype,C=function(t){var o=d(t,!1);if("string"==typeof o&&o.length>2){var e,n,r,c=(o=$?o.trim():v(o,3)).charCodeAt(0);if(43===c||45===c){if(88===(e=o.charCodeAt(2))||120===e)return NaN}else if(48===c){switch(o.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+o}for(var code,l=o.slice(2),i=0,m=l.length;i<m;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,n)}}return+o};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var o=arguments.length<1?0:t,e=this;return e instanceof y&&(k?m(function(){_.valueOf.call(e)}):"Number"!=c(e))?l(new w(C(o)),e,y):C(o)};for(var P,j=e(8)?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;j.length>A;A++)r(w,P=j[A])&&!r(y,P)&&x(y,P,h(w,P));y.prototype=_,_.constructor=y,e(16)(n,"Number",y)}},222:function(t,o,e){var content=e(514);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("d34ecd16",content,!0,{sourceMap:!1})},223:function(t,o,e){var content=e(516);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("6edfbe5e",content,!0,{sourceMap:!1})},224:function(t,o,e){var content=e(518);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("23dd2d55",content,!0,{sourceMap:!1})},232:function(t,o,e){"use strict";e(39),e(26),e(62);var n=e(10),r=(e(207),{data:function(){return{ramdom:1}},watch:{"$store.state.posts":function(){this.ramdom=this.numeroAleatorio(1,4)}},mounted:function(){this.ramdom=this.numeroAleatorio(1,4)},updated:function(){this.ramdom=this.numeroAleatorio(1,4)},methods:{numeroAleatorio:function(t,o){return Math.round(Math.random()*(o-t)+t)}}}),c=(e(513),e(4)),l=Object(c.a)(r,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"con-annuncement"},[1==t.ramdom?e("div",{staticClass:"sponsored conx"},[t._m(0)]):t._e(),t._v(" "),2==t.ramdom?e("div",{staticClass:"partner conx"},[t._m(1)]):t._e(),t._v(" "),3==t.ramdom?e("div",{staticClass:"vuesax conx"},[t._m(2)]):t._e(),t._v(" "),4==t.ramdom?e("div",{staticClass:"stars conx"},[t._m(3)]):t._e()])},[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("h4",[t._v("💰 Sponsor with DevAwesome 🙏")]),t._v(" "),e("p",[t._v("\n        DevAwesome is an open source MIT project if you want to contribute to keep improving, If you are interested in supporting this project, please consider becoming a patron.\n      ")]),t._v(" "),e("span",{staticClass:"btns-patreon"},[e("a",{attrs:{target:"_blank",href:"https://www.patreon.com/bePatron?c=1567892"}},[t._v("Sponsor the "),e("b",[t._v("Development")]),t._v(" 💻")]),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://www.patreon.com/manuelrovira"}},[t._v("Sponsor the "),e("b",[t._v("Design")]),t._v(" 🎨")])])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("h4",[this._v("Partner with DevAwesome 🚀")]),this._v(" "),o("p",[this._v("\n        DevAwesome is a project created for the community we want to improve and that everyone does it, it is always a good hand we are partners\n      ")]),this._v(" "),o("span",{staticClass:"become-partner"},[this._v("\n        👍 Become a partners "),o("b",[this._v("dev.awesome.app@gmail.com")])])])},function(){var t=this.$createElement,o=this._self._c||t;return o("a",{attrs:{target:"_blank",href:"https://lusaxweb.github.io/vuesax/"}},[o("img",{attrs:{src:"vuesax-logo-vertical.png",alt:""}}),this._v(" "),o("h4",[this._v("New Framework components for Vuejs")]),this._v(" "),o("p",[this._v("\n        The framework is focused on facilitating the development of applications, improving the design of the same without removing the necessary functionality (This site was created with "),o("b",[this._v("Vuesax")]),this._v(")\n      ")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("img",{attrs:{src:"png/devAwesome.png",alt:""}}),t._v(" "),e("h4",[t._v("DevAwesome is an open source project")]),t._v(" "),e("p",[t._v("\n        If you feel awesome and want to support us in a small way, please consider starring and sharing the repo! This helps us getting known and grow the community 🙏\n      ")]),t._v(" "),e("a",{staticClass:"btn-star",attrs:{href:"https://github.com/lusaxweb/devAwesome",target:"_blank"}},[t._v("👍 Support us with a "),e("b",[t._v("Star")]),t._v(" 🌟")])])}],!1,null,null,null).exports,d={components:{Announcementsx:l,Carbon:e(200).a},props:{post:{default:null,type:Object},displayx:{default:1,type:Number},url:{default:null,type:String},keyPost:{default:null,type:String},announcements:{default:!1,type:Boolean},maxPosts:{default:15,type:Number}},data:function(){return{hiddenAds:!1}},methods:{openEditPost:function(t){t.namePost=this.keyPost,this.$router.push({path:"/edit/".concat(this.keyPost)})},deletePost:function(t,o){var e=this;this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm Deleted",text:"You are sure to eliminate this Project, By doing so you will not be able to have it again and it will be eliminated",accept:function(){e.$firebase.database().ref("posts").child(this.keyPost).remove()}})},openPost:function(t,o){t.namePost=this.keyPost,this.url?this.$router.push({path:this.url+"/"+this.keyPost}):this.$router.push({path:"/".concat(this.keyPost)}),this.$store.state.imgView=t.miniImage,document.querySelector("body").classList.add("hiddenx")},getTextCort:function(text){return text.slice(0,300)+(text.length>300?" ...":"")},getActiveLike:function(t){return!(!t.hasOwnProperty("likes")||!this.$store.state.user)&&t.likes.hasOwnProperty(this.$store.state.user.uid)},addlike:function(t,o){var e=null;this.$store.state.user?this.getActiveLike(o)?(e=this.$store.state.user.uid,this.$store.commit("removePostLike",t,e),this.$firebase.database().ref("posts").child(t+"/likes/"+this.$store.state.user.uid).remove()):(e=this.$store.state.user.uid,this.$store.commit("addPostLike",t,"idx"),this.$firebase.database().ref("posts").child(t+"/likes/"+this.$store.state.user.uid).set({uid:this.$store.state.user.uid})):this.$vs.notify({title:"Necessary Login User",text:"To be able to do this action you need a user in login",color:"danger",icon:"lock"})}}},m=(e(515),{components:{announcements:l,post:Object(c.a)(d,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"post",class:["post-display-"+t.displayx,{postInactive:!!t.post&&!t.post.active},{announcements:t.announcements}]},[t.announcements?e("div",{staticClass:"con-anuncio"},[e("Carbon",{ref:"carbon"})],1):e("div",{staticClass:"con-postx"},[t.$store.state.admin?e("button",{staticClass:"edit-post-btn",on:{click:function(o){return t.openEditPost(t.post,t.post)}}},[e("i",{staticClass:"material-icons"},[t._v("\n              edit\n            ")])]):t._e(),t._v(" "),e("div",{staticClass:"con-img-post",on:{click:function(o){return t.openPost(t.post,t.post)}}},[e("img",{staticClass:"img-post",attrs:{src:t.post.miniImage,alt:""}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"con-textx"},[e("h4",[t._v(t._s(t.post.title))])])]),t._v(" "),e("footer",[e("div",{staticClass:"con-title-description",on:{click:function(o){return t.openPost(t.post,t.post)}}},[e("h4",[t._v(t._s(t.post.title))]),t._v(" "),e("p",[t._v(t._s(t.post.description))])]),t._v(" "),e("div",{staticClass:"con-btns"},[e("button",{staticClass:"btn-link"},[e("a",{attrs:{target:"_blank",href:t.post.website+"?ref=lusaxweb.github.io"}},[e("i",{staticClass:"material-icons"},[t._v("\n                    link\n                  ")])])]),t._v(" "),e("button",{staticClass:"btn-download",on:{click:function(o){return t.openPost(t.post,t.post)}}},[e("i",{staticClass:"material-icons"},[t._v("\n                  remove_red_eye\n                ")]),t._v(" "),e("span",[t._v(t._s(t.post.views))])]),t._v(" "),e("button",{staticClass:"btn-like",class:{disabledx:!t.$store.state.user,activeLike:t.getActiveLike(t.post)},on:{click:function(o){return t.addlike(t.post,t.post)}}},[e("i",{staticClass:"material-icons"},[t._v("\n                    favorite\n                  ")]),t._v(" "),t.post.likes?e("span",[t._v(t._s(Object.keys(t.post.likes).length))]):t._e()])])])])])},[function(){var t=this.$createElement,o=this._self._c||t;return o("button",{staticClass:"open-text"},[o("i",{staticClass:"material-icons"},[this._v("\n                  speaker_notes\n                ")])])}],!1,null,null,null).exports},props:{deletex:{default:!1,type:Boolean},notTwo:{default:!1,type:Boolean},posts:{default:function(){return{}}},section:{default:null,type:String},url:{default:null,type:String},maxPosts:{default:15,type:Number}},data:function(){return{likes:[],displayx:1,anunce:!0}},watch:{display:function(){this.displayx=this.$store.state.display}},created:function(){this.displayx=this.$store.state.display},computed:{getPostsUp:function(){var t=this,o=Object(n.a)({},this.posts);return Object.keys(o).forEach(function(element,i){i>t.$parent.maxPosts-7&&o[element]&&delete o[element]}),o},getPostsDown:function(){var t=this,o=Object(n.a)({},this.posts);return Object.keys(o).forEach(function(element,i){(i+6<t.$parent.maxPosts||i>t.$parent.maxPosts-2&&o[element])&&delete o[element]}),o},display:function(){return this.$store.state.display},numberRamdom:function(){return Math.floor(6*Math.random()+3)+1}}}),f=(e(517),Object(c.a)(m,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"con-posts"},[t._l(t.getPostsUp,function(o,n,r){return e("post",{key:n,attrs:{url:t.url,keyPost:n,post:o,displayx:t.displayx}})}),t._v(" "),t.anunce?e("post",{attrs:{displayx:t.displayx,"max-posts":t.maxPosts,announcements:""}}):t._e(),t._v(" "),t._l(t.getPostsDown,function(o,n,r){return t.notTwo?t._e():e("post",{key:n,attrs:{url:t.url,keyPost:n,post:o,displayx:t.displayx}})}),t._v(" "),0==Object.keys(t.posts).length?e("div",{staticClass:"con-loading-posts"},[e("ul",t._l(t.numberRamdom,function(li){return e("li",{key:li},[e("div",{staticClass:"card",style:"animation-delay: ."+li+"s"},[e("div",{staticClass:"imgx"}),t._v(" "),t._m(0,!0)])])}),0)]):t._e()],2)},[function(){var t=this.$createElement,o=this._self._c||t;return o("ul",{staticClass:"ul-loading"},[o("li",[o("i",{staticClass:"material-icons"},[this._v("\n                link\n              ")])]),this._v(" "),o("li",[o("i",{staticClass:"material-icons"},[this._v("\n                remove_red_eye\n              ")])]),this._v(" "),o("li",[o("i",{staticClass:"material-icons"},[this._v("\n                favorite\n              ")])])])}],!1,null,"ceae51c0",null));o.a=f.exports},511:function(t,o,e){var n=e(9),r=e(27),c=e(14),l=e(512),d="["+l+"]",m=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),h=function(t,o,e){var r={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),m=r[t]=d?o(x):l[t];e&&(r[e]=m),n(n.P+n.F*d,"String",r)},x=h.trim=function(t,o){return t=String(r(t)),1&o&&(t=t.replace(m,"")),2&o&&(t=t.replace(f,"")),t};t.exports=h},512:function(t,o){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},513:function(t,o,e){"use strict";var n=e(222);e.n(n).a},514:function(t,o,e){(t.exports=e(12)(!1)).push([t.i,":root{--fondo:#231f34;--fondo2:#2c2741;--fondo3:#352f4e;--text-color:#fff;--text-alpha:hsla(0,0%,100%,0.6);--text-alpha2:hsla(0,0%,100%,0.2)}.con-annuncement{padding-bottom:calc(75% + 37px)}.conx{width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;color:#fff}.conx h4{font-size:.9rem;padding:10px}.conx p{font-size:.7rem;padding:10px}.conx .btn-star{padding:8px 10px;border-radius:10px;background:#1dc778;color:#fff;display:inline-block;font-size:.8rem}.conx.stars img{width:40px}.conx.vuesax a{color:#fff}.conx.vuesax img{width:85%}.conx.partner .become-partner{padding:6px}.conx.partner .become-partner b{cursor:text}.conx.sponsored .btns-patreon{display:flex;align-items:center;justify-content:center;flex-direction:column}.conx.sponsored .btns-patreon a{padding:5px 10px;display:block;background:#f96854;color:#fff;border-radius:10px;margin:3px 0;font-size:.8rem}",""])},515:function(t,o,e){"use strict";var n=e(223);e.n(n).a},516:function(t,o,e){(t.exports=e(12)(!1)).push([t.i,":root{--fondo:#231f34;--fondo2:#2c2741;--fondo3:#352f4e;--text-color:#fff;--text-alpha:hsla(0,0%,100%,0.6);--text-alpha2:hsla(0,0%,100%,0.2)}.edit-post-btn{position:absolute;top:15px;right:15px;z-index:1000;padding:7px;border-radius:5px;background:#1dc778;color:#fff}.edit-post-btn i{font-size:1.3rem}.post{background:#2c2741;background:var(--fondo2);border-radius:8px;width:100%;max-width:calc(20% - 14px);float:left;margin:7px;box-shadow:0 6px 20px 0 rgba(0,0,0,.1);color:#fff;color:var(--text-color);cursor:pointer;transition:all .25s ease;position:relative}.post.announcements{background:transparent!important}.post .open-text{position:absolute;left:2%;top:2%;z-index:200;width:30px;height:30px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;background:#352f4e;background:var(--fondo3);color:#fff;color:var(--text-color);opacity:0;visibility:hidden;transition:all .25s ease}.post .open-text:hover{left:3%;top:3%}.post .open-text:hover~.con-textx{opacity:1;visibility:visible;transform:scale(1)}.post .con-textx{z-index:100;position:absolute;left:2.5%;top:2.5%;background:#352f4e;background:var(--fondo3);-webkit-backface-visibility:visible;backface-visibility:visible;height:95%;overflow:hidden;width:95%;opacity:0;visibility:hidden;transition:all .25s ease;border-radius:10px;transform:scale(0);transform-origin:left top;padding-bottom:5px}.post .con-textx h4{padding:10px}.post .con-textx p{font-size:.65rem;text-align:left;padding:0 8px 8px}.post.postInactive{background:#ff3a4e!important}.post .btn-delete-item{position:absolute;top:15px;right:15px;width:35px;height:35px;z-index:1000;border-radius:5px;background:#ff3a4e;color:#fff;transition:all .25s ease}.post .btn-delete-item i{font-size:1.5rem}.post .btn-delete-item:hover~.con-img-post{background:#ff3a4e}.post .btn-delete-item:hover~.con-img-post img{opacity:.5}.post .con-title-description{width:calc(100% - 140px)}.post .con-title-description p{width:100%;display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.post:hover:not(.post-display-3):not(.announcements){transform:translateY(4px);box-shadow:0 0 0 0 rgba(0,0,0,.1)!important;background:#231f34;background:var(--fondo)}.post:hover:not(.post-display-3):not(.announcements) .open-text{opacity:1;visibility:visible}.post:hover:not(.post-display-3):not(.announcements) .btn-delete-item{top:22px;right:0}.post:hover:not(.post-display-3):not(.announcements) footer h4,.post:hover:not(.post-display-3):not(.announcements) footer p{opacity:0;transform:translateY(-10px)}.post:hover:not(.post-display-3):not(.announcements) .con-img-post{transform:translateY(15px) scale(1.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.1)}.post:hover:not(.post-display-3):not(.announcements) .con-btns button span{width:auto;opacity:1;padding-left:4px;transform:translate(0)}.post:hover:not(.post-display-3):not(.announcements) .con-btns button i{text-shadow:0 4px 20px rgba(0,0,0,.5)}.post footer{display:flex;align-items:center;justify-content:space-between;padding:5px 5px 5px 10px}.post footer h4{font-size:.8rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.post footer h4,.post footer p{text-align:left;position:relative;transition:all .3s ease;z-index:10}.post footer p{font-size:.6rem}.post footer .con-btns{transition:all .3s ease}.post footer .con-btns,.post footer .con-btns button{display:flex;align-items:center;justify-content:center}.post footer .con-btns button{padding:8px;border-radius:6px;background:#352f4e;background:var(--fondo3);color:#fff;color:var(--text-color);position:relative;margin:0 3px;box-shadow:0 3px 15px 0 rgba(0,0,0,.05);transition:all .25s ease;z-index:200}.post footer .con-btns button.activeLike{background:#ff3a4e!important;color:#fff}.post footer .con-btns button.disabledx{color:hsla(0,0%,100%,.5)}.post footer .con-btns button.btn-link{padding:0!important}.post footer .con-btns button.btn-link:hover{background:#603aff}.post footer .con-btns button.btn-link:hover a{color:#fff!important}.post footer .con-btns button.btn-link a{display:flex;align-items:center;justify-content:center;padding:9px 8px 7px;color:#fff;color:var(--text-color)}.post footer .con-btns button:hover{background:#ff3a4e;color:#fff}.post footer .con-btns button.btn-download:hover{background:#1dc778}.post footer .con-btns button i{font-size:1.05rem;text-shadow:0 4px 20px rgba(0,0,0,.5)}.post footer .con-btns button span{transform:translate(10px);opacity:0;width:0;font-size:.6rem;width:auto;opacity:1;padding-left:4px;transform:translate(0)}.post .con-img-post,.post footer .con-btns button span{position:relative;transition:all .25s ease;overflow:hidden}.post .con-img-post{width:calc(100% - 16px);height:0;display:flex;align-items:center;justify-content:center;margin:8px 8px 3px;z-index:100;background:#231f34;background:var(--fondo);padding-bottom:calc(75% - 16px)}.post .con-img-post,.post .con-img-post img{border-radius:6px;-webkit-backface-visibility:visible;backface-visibility:visible}.post .con-img-post img{z-index:10;width:100%;position:absolute;left:0;top:0;display:block;transition:opacity .3s ease}.post-display-2{max-width:calc(14.28% - 14px)!important}.post-display-2 div[id*=carbonads]>span{padding-bottom:calc(75% + 2.336rem)!important}.post-display-2 footer{flex-direction:column}.post-display-2 footer .con-title-description{width:100%!important}.post-display-2 footer .con-btns{padding-top:10px}.post-display-3,.post-display-4{max-width:calc(50% - 14px)!important;display:flex;align-items:center;justify-content:flex-start}.post-display-3.announcements,.post-display-4.announcements{background:#2c2741!important;background:var(--fondo2)!important}.post-display-3 .con-img-post,.post-display-4 .con-img-post{margin:0!important}.post-display-3 .carbon-ads,.post-display-4 .carbon-ads{min-height:auto!important}.post-display-3 .carbon-img,.post-display-4 .carbon-img{margin:0}.post-display-3 .con-anuncio,.post-display-4 .con-anuncio{width:100%}.post-display-3 .con-anuncio div[id*=carbonads],.post-display-4 .con-anuncio div[id*=carbonads]{margin:5px}.post-display-3 .con-anuncio div[id*=carbonads] .carbon-poweredby,.post-display-4 .con-anuncio div[id*=carbonads] .carbon-poweredby{display:none}.post-display-3 .con-anuncio div[id*=carbonads] img,.post-display-4 .con-anuncio div[id*=carbonads] img{max-width:100px!important}.post-display-3 .con-anuncio div[id*=carbonads]>span,.post-display-4 .con-anuncio div[id*=carbonads]>span{padding-bottom:0;margin:0}.post-display-3 .con-anuncio .carbon-wrap,.post-display-4 .con-anuncio .carbon-wrap{position:relative;display:flex;align-items:center;justify-content:space-between;flex-direction:row}.post-display-3 .con-postx,.post-display-4 .con-postx{display:flex;align-items:center;justify-content:flex-start;width:100%}.post-display-3 footer,.post-display-4 footer{width:calc(100% - 130px)}.post-display-3 .con-img-post,.post-display-4 .con-img-post{width:100px!important;padding-bottom:75px!important;margin:5px!important}.post-display-4{max-width:calc(80% - 14px)!important;margin-left:10%!important;display:flex;align-items:center;justify-content:flex-start}.post-display-4 footer{width:100%}.post-display-4 .con-img-post{display:none!important}@media only screen and (max-width:1400px){.con-loading-posts li,.post:not(.post-display-3):not(.post-display-4){max-width:calc(25% - 14px)!important}}@media only screen and (max-width:1200px){.con-loading-posts li,.post:not(.post-display-3):not(.post-display-4){max-width:calc(33% - 14px)!important}}@media only screen and (max-width:850px){.con-loading-posts li,.post:not(.post-display-3):not(.post-display-4){max-width:calc(50% - 14px)!important}.post-display-3,.post-display-4{max-width:calc(100% - 14px)!important}.post-display-4{margin-left:0!important}}@media only screen and (max-width:600px){.con-posts{padding:20px!important}.con-loading-posts li{max-width:100%!important;margin:5px 0!important}.post:not(.post-display-4):not(.post-display-3){margin-left:0!important;margin-right:0!important;max-width:100%!important;background:#2c2741!important;background:var(--fondo2)!important}.post-display-3 footer{flex-direction:column!important;align-items:flex-start!important;justify-content:flex-start!important}.post-display-3 footer .con-title-description{width:100%!important}.post-display-3 footer .con-btns{margin-top:5px}.post-display-3 h4,.post-display-3 p{opacity:1!important;transform:translate(0)!important}.post-display-3 .con-img-post{transform:translate(0) scale(1)!important;box-shadow:0 6px 20px 0 rgba(0,0,0,.3)}.post-display-3 .con-btns button span{width:auto!important;opacity:1!important;padding-left:4px!important;transform:translate(0)!important}.post-display-3 .con-btns button i{text-shadow:0 4px 20px rgba(0,0,0,.5)!important}}",""])},517:function(t,o,e){"use strict";var n=e(224);e.n(n).a},518:function(t,o,e){(t.exports=e(12)(!1)).push([t.i,'[data-v-ceae51c0]:root{--fondo:#231f34;--fondo2:#2c2741;--fondo3:#352f4e;--text-color:#fff;--text-alpha:hsla(0,0%,100%,0.6);--text-alpha2:hsla(0,0%,100%,0.2)}.con-loading-posts[data-v-ceae51c0],.con-loading-posts>ul>li[data-v-ceae51c0]{position:relative;width:100%}.con-loading-posts>ul>li[data-v-ceae51c0]{max-width:calc(20% - 10px);margin:5px;float:left}.con-loading-posts>ul>li .card[data-v-ceae51c0]{border-radius:10px;background:#2c2741;background:var(--fondo2);display:block;-webkit-animation:example-data-v-ceae51c0 2.5s ease infinite;animation:example-data-v-ceae51c0 2.5s ease infinite;overflow:hidden}.con-loading-posts>ul>li .card .imgx[data-v-ceae51c0]{border-radius:10px;content:"";left:7px;top:7px;width:calc(100% - 14px);height:80%;background:#231f34;background:var(--fondo);position:relative;padding-bottom:75%}.con-loading-posts>ul>li .card .ul-loading[data-v-ceae51c0]{position:relative;width:100%;display:flex;justify-content:flex-end}.con-loading-posts>ul>li .card .ul-loading[data-v-ceae51c0]:after{top:15px;width:30%;height:5px}.con-loading-posts>ul>li .card .ul-loading[data-v-ceae51c0]:after,.con-loading-posts>ul>li .card .ul-loading[data-v-ceae51c0]:before{border-radius:10px;content:"";position:absolute;left:10px;background:#231f34;background:var(--fondo)}.con-loading-posts>ul>li .card .ul-loading[data-v-ceae51c0]:before{top:25px;width:50%;height:3px}.con-loading-posts>ul>li .card .ul-loading li[data-v-ceae51c0]{padding:10px;display:block;color:#231f34;color:var(--fondo);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.posts-enter-active[data-v-ceae51c0],.posts-leave-active[data-v-ceae51c0]{transition:all .3s ease}.posts-enter[data-v-ceae51c0],.posts-leave-to[data-v-ceae51c0]{opacity:0;transform:scale(.8) translateY(30px)}.con-posts[data-v-ceae51c0]{padding:10px;overflow:hidden;transition:all .3s ease}@media only screen and (max-width:1400px){.con-loading-posts li[data-v-ceae51c0],.post[data-v-ceae51c0]:not(.post-display-3):not(.post-display-4){max-width:calc(25% - 14px)!important}}@media only screen and (max-width:1200px){.con-loading-posts li[data-v-ceae51c0],.post[data-v-ceae51c0]:not(.post-display-3):not(.post-display-4){max-width:calc(33% - 14px)!important}}@media only screen and (max-width:850px){.con-loading-posts li[data-v-ceae51c0],.post[data-v-ceae51c0]:not(.post-display-3):not(.post-display-4){max-width:calc(50% - 14px)!important}.post-display-3[data-v-ceae51c0],.post-display-4[data-v-ceae51c0]{max-width:calc(100% - 14px)!important}.post-display-4[data-v-ceae51c0]{margin-left:0!important}}@media only screen and (max-width:600px){.con-posts[data-v-ceae51c0]{padding:20px!important}.con-loading-posts li[data-v-ceae51c0]{max-width:100%!important;margin:5px 0!important}.post[data-v-ceae51c0]:not(.post-display-4):not(.post-display-3){margin-left:0!important;margin-right:0!important;max-width:100%!important;background:#2c2741!important;background:var(--fondo2)!important}.post-display-3 footer[data-v-ceae51c0]{flex-direction:column!important;align-items:flex-start!important;justify-content:flex-start!important}.post-display-3 footer .con-title-description[data-v-ceae51c0]{width:100%!important}.post-display-3 footer .con-btns[data-v-ceae51c0]{margin-top:5px}.post-display-3 h4[data-v-ceae51c0],.post-display-3 p[data-v-ceae51c0]{opacity:1!important;transform:translate(0)!important}.post-display-3 .con-img-post[data-v-ceae51c0]{transform:translate(0) scale(1)!important;box-shadow:0 6px 20px 0 rgba(0,0,0,.3)}.post-display-3 .con-btns button span[data-v-ceae51c0]{width:auto!important;opacity:1!important;padding-left:4px!important;transform:translate(0)!important}.post-display-3 .con-btns button i[data-v-ceae51c0]{text-shadow:0 4px 20px rgba(0,0,0,.5)!important}}@-webkit-keyframes example-data-v-ceae51c0{0%{opacity:1}70%{opacity:0;transform:scale(.9) translateY(-20px)}to{opacity:1}}@keyframes example-data-v-ceae51c0{0%{opacity:1}70%{opacity:0;transform:scale(.9) translateY(-20px)}to{opacity:1}}',""])}}]);