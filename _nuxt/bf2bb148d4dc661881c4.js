(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{197:function(t,e,o){var content=o(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("025aecab",content,!0,{sourceMap:!1})},200:function(t,e,o){"use strict";o(25);var n={render:function(t){return t("div",{class:["carbon-ads","".concat(this.type)]})},props:{type:{type:String,default:"default"}},mounted:function(){"index"==this.$route.name&&"<Post>"==this.$parent._name&&this.load(),1!=this.$route.name.indexOf("namePost")&&"<Viewx>"==this.$parent._name&&this.load(),("articles"==this.$route.name||"topics"==this.$route.name||"Assets"==this.$route.name||"About"==this.$route.name||"AddPost"==this.$route.name||"addBlog"==this.$route.name||-1!=this.$route.name.indexOf("search")&&"<Post>"==this.$parent._name||-1!=this.$route.name.indexOf("user")&&"<Post>"==this.$parent._name)&&this.load()},watch:{$route:function(t,e){"index"==e.name&&"<Post>"==this.$parent._name?this.$el.innerHTML="":t.path!=e.path&&"<Viewx>"==this.$parent._name?(this.$el.innerHTML="",this.load()):"index"==t.name&&"<Post>"==this.$parent._name&&(this.$el.innerHTML="",this.load())}},methods:{reload:function(){this.$el.innerHTML="",this.load()},load:function(){var s=document.createElement("script");s.id="_carbonads_js",s.src="//cdn.carbonads.com/carbon.js?serve=CK7DC27J&placement=lusaxwebgithubio",this.$el.appendChild(s)}}},r=(o(201),o(4)),component=Object(r.a)(n,void 0,void 0,!1,null,null,null);e.a=component.exports},201:function(t,e,o){"use strict";var n=o(197);o.n(n).a},202:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,".no-adsx{padding-bottom:calc(75% + 2.335rem)}.carbon-ads{min-height:200px}.carbon-ads.row{width:100%}.carbon-ads.row .carbon-wrap{padding:0;position:relative}.carbon-ads.row div[id*=carbonads]>span{padding:10px!important;position:relative;height:auto!important}.carbon{display:flex;align-items:center;width:100%}div[id*=carbonads]{--width:320px;--font-size:13px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,Helvetica,Arial,sans-serif;display:block;overflow:hidden;width:calc(100% - 16px);border-radius:10px;text-align:center;font-size:13px;line-height:1.5;position:relative;z-index:1000;border:0;transition:all .3s ease;font-size:.7rem;margin:8px}div[id*=carbonads] a{color:inherit;text-decoration:none}div[id*=carbonads] a:hover{color:inherit}div[id*=carbonads]>span{position:relative;display:block;overflow:hidden;padding-bottom:75%;margin:8px}.carbon-wrap{position:absolute;width:100%;left:0;top:0;display:flex;align-items:center;flex-direction:column;height:100%;justify-content:center;transition:all .25s ease}.carbon-wrap:hover{opacity:.7}.carbon-img{display:block;margin-bottom:8px;line-height:1}.carbon-img img{margin:0 auto;max-width:160px;width:100%;height:auto;border-radius:10px}.carbon-img img,.carbon-text{display:block;transition:all .25s ease}.carbon-text{padding-bottom:8px}.carbon-poweredby{display:block;padding:10px 13px;text-transform:uppercase;letter-spacing:.5px;font-weight:600;font-size:9px;line-height:0;z-index:200;position:relative}@media only screen and (max-width:1100){div[id*=carbonads]{float:none;margin:0 auto;right:0;max-width:calc(100% - 20px);position:relative}div[id*=carbonads] span{position:relative}div[id*=carbonads]>span{max-width:none}.carbon-img{float:left;margin:0}.carbon-img img{max-width:130px!important}.carbon-text{float:left;margin-bottom:0;padding:8px 20px;text-align:left;max-width:calc(100% - 130px - 3em)}.carbon-poweredby{left:130px;bottom:0;display:block;width:100%}}",""])},229:function(t,e,o){var content=o(524);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("1d0c2a6b",content,!0,{sourceMap:!1})},246:function(t,e,o){"use strict";o.r(e);o(40),o(79),o(63),o(80);var n=o(10),r=(o(39),o(26),o(62),{name:"viewx",transition:"view",components:{Carbon:o(200).a},data:function(){return{renderComponent:!0,star:0,tags:[],imageLoaded:!1,commentx:"",post:{},morePosts:{},namePost:"",readme:null,readmeActive:!1,maxSimilar:4,ads:!1}},watch:{"$route.params.namePost":function(){var t=this;this.$nextTick(function(){t.getPost(),t.readmeActive=!1,t.namePost=t.$route.params.namePost,0==Object.keys(t.morePosts)&&t.getPosts()})}},mounted:function(){var t=this;this.namePost=this.$route.params.namePost,this.getPost(),this.getPosts(),setTimeout(function(){t.ads=!0},300)},beforeDestroy:function(){this.$firebase.database().ref("posts").child(this.namePost).off(),this.$firebase.database().ref("posts").off(),document.querySelector("body").classList.remove("hiddenx")},methods:{clickClose:function(t){t.target.closest(".con-description-view")||t.target.closest(".con-img-view")||t.target.closest(".next-btn")||t.target.closest(".prev-btn")||t.target.closest(".header-post")||this.close()},forceRerender:function(){var t=this;this.renderComponent=!1,this.$nextTick().then(function(){t.renderComponent=!0})},prevPost:function(){var t=Object.keys(this.$store.state.posts),e=t.indexOf(this.$route.params.namePost);if(e>0){var o=t[e-1],n=this.$store.state.posts[o];this.openPost(n,o)}},nextPost:function(){var t=Object.keys(this.$store.state.posts),e=t.indexOf(this.$route.params.namePost);if(e<t.length){var o=t[e+1],n=this.$store.state.posts[o];this.openPost(n,o)}},copyLink:function(){var link="https://lusaxweb.github.io/devAwesome/#"+this.$route.fullPath,t=this.post.title,e=document.createElement("input");e.classList.add("no-input"),e.setAttribute("value",link),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$vs.notify({title:"Link copied",text:t,color:"success",icon:"link"})},openTag:function(t){this.$router.push("/search/"+t)},getActiveLike:function(t){return!!t.hasOwnProperty("likes")&&t.likes.hasOwnProperty(this.$store.state.user.uid)},getIsLike:function(){var t=this.post;return!(!t.hasOwnProperty("likes")||!this.$store.state.user)&&t.likes.hasOwnProperty(this.$store.state.user.uid)},addView:function(){var t=this.post;this.$firebase.database().ref("posts").child(this.$route.params.namePost+"/views").set(t.views+1),this.uploadPost(t)},addlike:function(){var t=this.post;this.$store.state.user?this.getIsLike()?this.$firebase.database().ref("posts").child(this.$route.params.namePost+"/likes/"+this.$store.state.user.uid).remove():(this.$firebase.database().ref("posts").child(this.$route.params.namePost+"/likes/"+this.$store.state.user.uid).set(!0),this.uploadPost(t)):this.$vs.notify({title:"Necessary Login User",text:"To be able to do this action you need a user in login",color:"danger",icon:"lock"})},sendComment:function(t){this.$store.state.user?(this.$firebase.database().ref("posts").child(this.$route.params.namePost+"/comments").push({name:this.$store.state.user.displayName,src:this.$store.state.user.photoURL,comment:this.commentx,githubUrl:this.$store.state.githubUrl}),this.uploadPost(t),this.commentx=""):this.$vs.notify({title:"Necessary Login User",text:"To be able to do this action you need a user in login",color:"danger",icon:"lock"})},uploadPost:function(t){var e=this;this.$firebase.database().ref("posts").child(this.$route.params.namePost).once("value",function(t){e.$store.state.view.post=Object(n.a)({},t.val(),{namePost:e.$route.params.namePost})})},getPost:function(){var t=this,e=this;this.$firebase.database().ref("posts").child(this.$route.params.namePost).on("value",function(o){t.forceRerender();var r=o.val();t.post=Object(n.a)({},r,{namePost:t.$route.params.namePost});var img=new Image;img.onload=function(){e.$refs.image.setAttribute("src",e.post.image),localStorage.hasOwnProperty("postViews")||(localStorage.postViews="[]");var t=JSON.parse(localStorage.getItem("postViews"));t.includes(e.$route.params.namePost)||(t.push(e.$route.params.namePost),e.addView()),localStorage.setItem("postViews",JSON.stringify(t))},img.src=t.post.image,e.tags=r.tags.split(",")})},shuffle:function(t){for(var e,o,n=t.length;0!==n;)o=Math.floor(Math.random()*n),e=t[n-=1],t[n]=t[o],t[o]=e;return t},getPosts:function(){var t=this;this.$firebase.database().ref("posts").once("value",function(e){var o=[];e.forEach(function(element){element.val().active&&t.$route.params.namePost!==element.key&&o.push(Object(n.a)({key:element.key},element.val()))});var r=t.shuffle(o);r=r.slice(0,12);var c={};r.forEach(function(t){t.active&&(c[t.key]=t)}),t.morePosts=c})},getStars:function(t){var e=this;if(!t.github){var o=t.github.replace("https://github.com/","");fetch("https://api.github.com/repos/".concat(o)).then(function(t){return t.json()}).then(function(t){e.star=t.stargazers_count||0})}},getReadme:function(t){var e=this;if(t.github){var o=t.github.replace("https://github.com/","");fetch("https://api.github.com/repos/".concat(o,"/readme"),{headers:{Accept:"application/vnd.github.html"}}).then(function(t){return t.text()}).then(function(data){e.readme=data})}},openPost:function(t,e){var o=this.$route.path,n=this.$route.params.namePost,r=o.replace(n,"");this.$router.push({path:"".concat(r).concat(e)}),this.$store.state.imgView=t.miniImage},close:function(){var path=this.$route.path,t=this.$route.params.namePost,e=path.replace(t,"");this.$router.push({path:e})}}}),c=(o(523),o(4)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"viewx",staticClass:"con-view",on:{click:t.clickClose}},[t.$store.state.posts?o("button",{staticClass:"prev-btn",attrs:{title:"Prev Post"},on:{click:t.prevPost}},[o("i",{staticClass:"material-icons"},[t._v("\n      chevron_left\n    ")])]):t._e(),t._v(" "),t.$store.state.posts?o("button",{staticClass:"next-btn",attrs:{title:"Next Post"},on:{click:t.nextPost}},[o("i",{staticClass:"material-icons"},[t._v("\n      chevron_right\n    ")])]):t._e(),t._v(" "),o("header",{staticClass:"header-post"},[o("h3",[t._v(t._s(t.post.title))]),t._v(" "),o("button",{staticClass:"btn-close",on:{click:function(e){return t.close()}}},[o("i",{staticClass:"material-icons"},[t._v("\n        clear\n      ")])])]),t._v(" "),o("div",{staticClass:"view"},[o("div",{staticClass:"con-img-des"},[o("div",{staticClass:"con-img-view",class:{disabled:!t.post.website}},[o("div",{staticClass:"content-view"},[t.readmeActive?o("div",{staticClass:"readmex",domProps:{innerHTML:t._s(t.readme)}}):t._e(),t._v(" "),o("div",{staticClass:"img-view",attrs:{id:"div-with-loading"}},[o("a",{attrs:{target:"_blank",href:t.post.website+"?ref=lusaxweb.github.io"}},[o("img",{ref:"image",class:{imageLoaded:t.imageLoaded},attrs:{src:t.$store.state.imgView||t.post.miniImage||"",alt:""}}),t._v(" "),o("div",{staticClass:"loadingx"})])]),t._v(" "),o("footer",{staticClass:"footer-content"})]),t._v(" "),o("div",{staticClass:"con-similar-posts"},[o("ul",t._l(t.morePosts,function(e,n,r){return r<t.maxSimilar?o("li",{key:n,attrs:{title:e.title},on:{click:function(o){return t.openPost(e,n)}}},[o("img",{attrs:{src:e.miniImage||"",alt:""}})]):t._e()}),0),t._v(" "),o("button",{staticClass:"expand-similar-btn",on:{click:function(e){4==t.maxSimilar?t.maxSimilar=12:t.maxSimilar=4}}},[o("i",{staticClass:"material-icons"},[t._v("\n            "+t._s(4==t.maxSimilar?"add":"remove")+"\n          ")])])])]),t._v(" "),o("div",{staticClass:"con-description-view"},[o("div",{staticClass:"con-user-view"},[t.post.user?o("div",{staticClass:"text-user"},["devAwesome"!==t.post.user.photoURL?o("router-link",{attrs:{to:"/user/"+t.post.user.uid}},[o("div",{staticClass:"con-img-user-view"},["devAwesome"!==t.post.user.photoURL?o("img",{attrs:{src:t.post.user.photoURL,alt:""}}):o("img",{staticClass:"devAwesome-logo",attrs:{src:"png/devAwesome.png",alt:""}})]),t._v(" "),o("p",[t._v(t._s(t.post.user.displayName))])]):o("a",{attrs:{target:"_blank",href:t.post.user.githubUrl}},[o("div",{staticClass:"con-img-user-view"},["devAwesome"!==t.post.user.photoURL?o("img",{attrs:{src:t.post.user.photoURL,alt:""}}):o("img",{staticClass:"devAwesome-logo",attrs:{src:"png/devAwesome.png",alt:""}})]),t._v(" "),o("p",[t._v(t._s(t.post.user.displayName))])])],1):t._e(),t._v(" "),o("a",{staticClass:"btn-follow",attrs:{target:"_blank",href:t.post.website+"?ref=lusaxweb.github.io"}},[t._v("\n          WebSite\n        ")])]),t._v(" "),o("p",{staticClass:"descriptionx"},[t._v("\n        "+t._s(t.post.description)+"\n      ")]),t._v(" "),o("div",{staticClass:"con-tags"},t._l(t.tags,function(e){return o("span",{key:e,attrs:{title:"Search "+e},on:{click:function(o){return t.openTag(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])}),0),t._v(" "),o("div",{staticClass:"con-interaction-view"},[o("button",{class:{disabledx:!t.$store.state.user,activeLike:t.getIsLike()},on:{click:t.addlike}},[o("i",{staticClass:"material-icons"},[t._v("\n            favorite\n          ")]),t._v("\n          Like\n        ")]),t._v(" "),t.post.github?o("button",{staticClass:"button-a"},[o("a",{staticClass:"btn-follow",attrs:{target:"_blank",href:t.post.github+"?ref=lusaxweb.github.io"}},[t._v("\n          Github\n\n\n\n          ")])]):t._e(),t._v(" "),t.post.twitter?o("button",{staticClass:"button-a"},[o("a",{staticClass:"btn-follow",attrs:{target:"_blank",href:"https://twitter.com/"+t.post.twitter+"?ref=lusaxweb.github.io"}},[t._v("\n          Twitter\n          ")])]):t._e(),t._v(" "),o("button",{staticClass:"btn-share",attrs:{title:"Copy Link"},on:{click:t.copyLink}},[o("i",{staticClass:"material-icons"},[t._v("\n            link\n          ")])])]),t._v(" "),o("div",{staticClass:"con-values"},[o("ul",[o("li",[o("i",{staticClass:"material-icons"},[t._v("\n              visibility\n            ")]),t._v("\n            "+t._s(t.post.views)+"\n          ")]),t._v(" "),o("li",[o("i",{staticClass:"material-icons"},[t._v("\n              favorite\n            ")]),t._v("\n            "+t._s(t.post.likes?Object.keys(t.post.likes).length:0)+"\n          ")])])]),t._v(" "),o("Carbon",{attrs:{type:"row"}}),t._v(" "),o("div",{staticClass:"con-comments"},[o("h5",[t._v("Comments")]),t._v(" "),o("div",{staticClass:"add-comment"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentx,expression:"commentx"}],attrs:{placeholder:"Your comment"},domProps:{value:t.commentx},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.sendComment(t.post))},input:function(e){e.target.composing||(t.commentx=e.target.value)}}}),t._v(" "),o("vs-button",{attrs:{color:"success",type:"filled"},on:{click:function(e){return t.sendComment(t.post)}}},[t._v("Comment")])],1),t._v(" "),o("ul",{staticClass:"comments"},t._l(t.post.comments,function(e,n){return o("li",{key:n},[o("header",[o("a",{attrs:{target:"_blank",href:e.githubUrl}},[o("img",{attrs:{src:e.src,alt:""}}),t._v(" "),o("div",[o("h5",[t._v(t._s(e.name))])])])]),t._v(" "),o("p",[t._v("\n              "+t._s(e.comment)+"\n            ")])])}),0)])],1)])])])},[],!1,null,"17f926ff",null);e.default=component.exports},523:function(t,e,o){"use strict";var n=o(229);o.n(n).a},524:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,'[data-v-17f926ff]:root{--fondo:#231f34;--fondo2:#2c2741;--fondo3:#352f4e;--text-color:#fff;--text-alpha:hsla(0,0%,100%,0.6);--text-alpha2:hsla(0,0%,100%,0.2)}.prev-btn[data-v-17f926ff]{left:0;border-radius:0 10px 10px 0}.next-btn[data-v-17f926ff],.prev-btn[data-v-17f926ff]{position:absolute;top:20%;background:#603aff;padding:10px;cursor:pointer;color:#fff;z-index:500}.next-btn[data-v-17f926ff]{right:0;border-radius:10px 0 0 10px}.content-view[data-v-17f926ff]{position:relative}.content-view .footer-content[data-v-17f926ff]{position:absolute;bottom:0;left:0;padding:0 10px;z-index:200;width:100%}.content-view .footer-content button[data-v-17f926ff]{padding:10px;background:#603aff;color:#fff;border-radius:15px 15px 0 0;position:relative;transition:all .25s ease;box-shadow:0 0 0 -2px rgba(96,58,255,0)}.content-view .footer-content button[data-v-17f926ff]:hover{box-shadow:0 5px 10px -2px rgba(96,58,255,.6)}.readmex[data-v-17f926ff]{width:100%;height:100%;position:absolute;background:#2c2741;background:var(--fondo2);overflow:auto;z-index:200;text-align:left;padding:10px;font-size:.8rem;border-radius:8px}.readmex table[data-v-17f926ff]{width:100%;background:#352f4e;background:var(--fondo3);padding:10px}.readmex table thead[data-v-17f926ff]{border:1px solid #fff!important;border:1px solid var(--text-color)!important;background:#231f34;background:var(--fondo)}.readmex details[data-v-17f926ff],.readmex h1[data-v-17f926ff],.readmex h2[data-v-17f926ff],.readmex h3[data-v-17f926ff],.readmex h4[data-v-17f926ff],.readmex h5[data-v-17f926ff],.readmex h6[data-v-17f926ff]{padding:10px}.readmex h1 a[data-v-17f926ff],.readmex h2 a[data-v-17f926ff],.readmex h3 a[data-v-17f926ff],.readmex h4 a[data-v-17f926ff],.readmex h5 a[data-v-17f926ff],.readmex h6 a[data-v-17f926ff]{margin-right:10px}.readmex h1 svg[data-v-17f926ff],.readmex h2 svg[data-v-17f926ff],.readmex h3 svg[data-v-17f926ff],.readmex h4 svg[data-v-17f926ff],.readmex h5 svg[data-v-17f926ff],.readmex h6 svg[data-v-17f926ff]{fill:#fff;fill:var(--text-color)}.readmex a[data-v-17f926ff]{color:#fff;color:var(--text-color);font-weight:700}.readmex a[data-v-17f926ff]:hover{text-decoration:underline}.readmex ul[data-v-17f926ff]{padding:10px 30px}.readmex ul li[data-v-17f926ff]{list-style-type:disc;padding:2px 0}.readmex p[data-v-17f926ff],.readmex ul li[data-v-17f926ff]{color:#fff;color:var(--text-color)}.readmex p[data-v-17f926ff]{padding:10px}.readmex pre[data-v-17f926ff]{background:#231f34;background:var(--fondo);border-radius:10px;padding:10px}.con-tags[data-v-17f926ff]{width:100%;position:relative;padding:10px;clear:both;overflow:hidden}.con-tags span[data-v-17f926ff]{padding:6px 12px;border-radius:20px;background:#352f4e;background:var(--fondo3);font-size:.7rem;margin:3px 2px;display:block;float:left;cursor:pointer;transition:all .3s ease}.con-tags span[data-v-17f926ff]:hover{background:#ff3a4e;color:#fff}.con-tags span[data-v-17f926ff]:first-child{margin-left:0!important}.disabledx[data-v-17f926ff]{color:hsla(0,0%,100%,.5)!important}.loadingx[data-v-17f926ff]{width:100%;height:100%;border-radius:10px;-webkit-animation:loading-data-v-17f926ff 3s ease infinite;animation:loading-data-v-17f926ff 3s ease infinite;position:absolute;left:0;top:0}.con-view[data-v-17f926ff]{position:fixed;left:0;top:0;background:rgba(35,31,52,.96);width:100vw;height:100vh;z-index:20000;overflow:auto;transition:all .3s ease}.con-view[data-v-17f926ff]:after{content:"";position:absolute;top:0;left:0;width:100%;height:200px;background:linear-gradient(180deg,rgba(35,31,52,.96) 25%,rgba(35,31,52,0));z-index:100}.con-view>header[data-v-17f926ff]{display:flex;align-items:center;justify-content:space-between;padding:10px 30px 10px 40px;z-index:200;position:relative}.con-view>header button.btn-close[data-v-17f926ff]{width:45px;height:45px;display:flex;align-items:center;justify-content:center;border-radius:6px;background:transparent;color:#fff;color:var(--text-color);transition:all .25s ease}.con-view>header button.btn-close[data-v-17f926ff]:hover{background:#2c2741;background:var(--fondo2)}.con-view>header button.btn-close i[data-v-17f926ff]{font-size:1.4rem}.con-view .view[data-v-17f926ff]{position:relative;box-sizing:border-box;padding:0 20px 20px;min-width:100%;width:100%;z-index:200}.con-view .view .con-img-des[data-v-17f926ff]{display:flex;align-items:flex-start;justify-content:center;width:100%;margin:10px 0;overflow:hidden}.con-view .con-img-view[data-v-17f926ff]{float:left;width:100%;max-width:800px;border-radius:8px;margin:0 10px 10px}.con-view .con-img-view.disabled[data-v-17f926ff]{pointer-events:none}.con-view .con-img-view .img-view[data-v-17f926ff]{display:flex;align-items:center;justify-content:center;height:calc(100% - 240px);overflow:hidden;background:#2c2741;background:var(--fondo2);border-radius:8px;transition:all .3s ease;padding-bottom:75%;position:relative}.con-view .con-img-view .img-view .con-vs-loading[data-v-17f926ff]{position:absolute;z-index:200}.con-view .con-img-view .img-view .con-vs-loading .effects[data-v-17f926ff]{z-index:200}.con-view .con-img-view .img-view img[data-v-17f926ff]{border-radius:8px;width:100%;max-width:100%;max-height:100%;left:0;top:0;right:0;bottom:0;z-index:300;position:absolute;background:transparent;z-index:100}.con-view .con-img-view .img-view img.imageLoaded[data-v-17f926ff]{background:#fff}.con-view .con-similar-posts[data-v-17f926ff]{position:relative;height:auto;width:100%;background:#2c2741;background:var(--fondo2);border-radius:8px;transition:all .3s ease;padding:5px;box-sizing:border-box;margin:10px auto auto}.con-view .con-similar-posts .expand-similar-btn[data-v-17f926ff]{position:absolute;bottom:-10px;left:50%;transform:translate(-50%);width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#ff3a4e;color:#fff;box-shadow:0 0 0 -2px rgba(255,58,78,0);transition:all .25s ease}.con-view .con-similar-posts .expand-similar-btn[data-v-17f926ff]:hover{box-shadow:0 5px 10px -2px rgba(255,58,78,.6)}.con-view .con-similar-posts ul[data-v-17f926ff]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.con-view .con-similar-posts li[data-v-17f926ff]{width:25%;border-radius:8px;overflow:hidden;padding:5px;cursor:pointer;display:block;position:relative;transition:all .25s ease}.con-view .con-similar-posts li[data-v-17f926ff]:hover{box-shadow:0 5px 20px 0 rgba(0,0,0,.1);opacity:.6}.con-view .con-similar-posts li img[data-v-17f926ff]{border-radius:8px;width:100%;display:block;transition:all .3s ease}.con-view .con-description-view[data-v-17f926ff]{float:left;width:350px;background:#2c2741;background:var(--fondo2);border-radius:8px;padding:10px;box-sizing:border-box;margin:0 10px 10px;transition:all .3s ease;overflow:auto;max-height:calc(100% - 80px)}.con-view .con-description-view .descriptionx[data-v-17f926ff]{text-align:left;padding:10px 12px;font-size:.75rem;color:#fff;color:var(--text-color)}.con-view .con-description-view .con-comments[data-v-17f926ff]{padding:0 8px 8px;position:relative;display:block}.con-view .con-description-view .con-comments .add-comment[data-v-17f926ff]{display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column}.con-view .con-description-view .con-comments .add-comment button[data-v-17f926ff]{margin-top:8px}.con-view .con-description-view .con-comments .comments[data-v-17f926ff]{width:100%;overflow:auto;position:relative;display:block;margin-top:10px}.con-view .con-description-view .con-comments .comments li[data-v-17f926ff]{padding:5px 0;border-bottom:1px solid hsla(0,0%,100%,.05)}.con-view .con-description-view .con-comments .comments li[data-v-17f926ff]:last-child{border-bottom:1px solid hsla(0,0%,100%,0)}.con-view .con-description-view .con-comments .comments li>p[data-v-17f926ff]{font-size:.7rem;color:#fff;color:var(--text-color);text-align:left;padding:5px 0}.con-view .con-description-view .con-comments .comments li header[data-v-17f926ff]{width:100%}.con-view .con-description-view .con-comments .comments li header a[data-v-17f926ff]{display:flex;align-items:center;justify-content:flex-start}.con-view .con-description-view .con-comments .comments li header h5[data-v-17f926ff]{font-size:.75rem;padding-left:5px;color:#fff;color:var(--text-color)}.con-view .con-description-view .con-comments .comments li header img[data-v-17f926ff]{width:35px;height:35px;border-radius:8px}.con-view .con-description-view .con-comments h5[data-v-17f926ff]{text-align:left;padding:5px 0}.con-view .con-description-view .con-comments textarea[data-v-17f926ff]{width:100%;max-height:80px;resize:none;background:#352f4e;background:var(--fondo3);border-radius:6px;border:0;padding:10px;color:#fff;color:var(--text-color);font-size:.75rem}.con-view .con-description-view .con-comments textarea[data-v-17f926ff]::-webkit-input-placeholder{color:#fff;color:var(--text-color)}.con-view .con-description-view .con-comments textarea[data-v-17f926ff]::-moz-placeholder{color:#fff;color:var(--text-color)}.con-view .con-description-view .con-comments textarea[data-v-17f926ff]:-ms-input-placeholder{color:#fff;color:var(--text-color)}.con-view .con-description-view .con-comments textarea[data-v-17f926ff]::-ms-input-placeholder{color:#fff;color:var(--text-color)}.con-view .con-description-view .con-comments textarea[data-v-17f926ff]::placeholder{color:#fff;color:var(--text-color)}.con-view .con-description-view .con-values[data-v-17f926ff]{width:100%}.con-view .con-description-view .con-values ul[data-v-17f926ff]{width:100%;position:relative;display:flex;align-items:center;justify-content:center;padding:10px;box-sizing:border-box}.con-view .con-description-view .con-values ul li[data-v-17f926ff]{padding:5px 15px;border-left:2px solid hsla(0,0%,100%,.1);display:block;position:relative;font-size:.8rem;display:flex;align-items:center;justify-content:center;color:#fff;color:var(--text-color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.con-view .con-description-view .con-values ul li i[data-v-17f926ff]{font-size:1rem;margin-right:4px}.con-view .con-description-view .con-values ul li[data-v-17f926ff]:first-child{border-left:0 solid hsla(0,0%,100%,.1)}.con-view .con-description-view .con-interaction-view[data-v-17f926ff]{display:flex;align-items:center;flex-wrap:wrap;padding:10px 4px}.con-view .con-description-view .con-interaction-view .star[data-v-17f926ff]{background:#603aff;font-weight:700;position:absolute;font-size:.6rem;padding:3px 5px;display:flex;align-items:center;justify-content:center;border-radius:5px;top:-17px;right:-8px;box-shadow:0 3px 10px 0 rgba(0,0,0,.1);color:#fff}.con-view .con-description-view .con-interaction-view .star i[data-v-17f926ff]{font-size:.7rem!important}.con-view .con-description-view .con-interaction-view button[data-v-17f926ff]{padding:8px 16px;border-radius:6px;background:transparent;margin:5px;border:2px solid hsla(0,0%,100%,.15);color:#fff;font-weight:700;display:flex;align-items:center;box-sizing:border-box;justify-content:center;transition:all .3s ease;position:relative}.con-view .con-description-view .con-interaction-view button[data-v-17f926ff]:hover{color:#fff;background:hsla(0,0%,100%,.15);border:2px solid hsla(0,0%,100%,0)}.con-view .con-description-view .con-interaction-view button.activeLike[data-v-17f926ff]{background:#ff3a4e;border:2px solid #ff3a4e}.con-view .con-description-view .con-interaction-view button.button-a[data-v-17f926ff]{padding:0}.con-view .con-description-view .con-interaction-view button.button-a a[data-v-17f926ff]{padding:8px 16px;display:block;color:#fff;color:var(--text-color)}.con-view .con-description-view .con-interaction-view button i[data-v-17f926ff]{font-size:1.1rem;margin-right:4px}.con-view .con-description-view .con-interaction-view button.btn-mark[data-v-17f926ff],.con-view .con-description-view .con-interaction-view button.btn-share[data-v-17f926ff]{width:38px;height:38px;display:flex;align-items:center;justify-content:center}.con-view .con-description-view .con-interaction-view button.btn-mark i[data-v-17f926ff],.con-view .con-description-view .con-interaction-view button.btn-share i[data-v-17f926ff]{margin-right:0}.con-view .con-description-view .con-interaction-view button.btn-share:hover ul[data-v-17f926ff]{opacity:1;visibility:visible}.con-view .con-description-view .con-interaction-view button.btn-share ul[data-v-17f926ff]{opacity:0;visibility:hidden;position:absolute;top:0;transform:translateY(-100%);transition:all .25s ease;padding:5px}.con-view .con-description-view .con-interaction-view button.btn-share ul li[data-v-17f926ff]{padding:10px;background:#231f34;background:var(--fondo);margin:2px 0;border-radius:4px}.con-view .con-description-view .con-interaction-view button.btn-share ul li[data-v-17f926ff]:hover{background:$success}.con-view .con-description-view .con-user-view[data-v-17f926ff]{display:flex;align-items:center;padding:10px;justify-content:space-between}.con-view .con-description-view .con-user-view .btn-follow[data-v-17f926ff]{padding:9px 20px;border-radius:6px;background:#1dc778;color:#fff;font-weight:700;font-size:.9rem;opacity:1;transition:all .25s ease;box-shadow:0 0 0 0 rgba(29,199,120,0)}.con-view .con-description-view .con-user-view .btn-follow[data-v-17f926ff]:hover{box-shadow:0 5px 10px -2px rgba(29,199,120,.5)}.con-view .con-description-view .con-user-view .text-user[data-v-17f926ff]{width:100%}.con-view .con-description-view .con-user-view .text-user a[data-v-17f926ff]{display:flex;align-items:center;justify-content:flex-start}.con-view .con-description-view .con-user-view img[data-v-17f926ff]{height:100%}.con-view .con-description-view .con-user-view p[data-v-17f926ff]{padding-left:10px;font-size:.8rem;color:#fff;color:var(--text-color)}.con-view .con-description-view .con-user-view .con-img-user-view[data-v-17f926ff]{overflow:hidden;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:10px}.con-view .con-description-view .con-user-view .con-img-user-view .devAwesome-logo[data-v-17f926ff]{width:100%!important;height:auto!important}@media only screen and (max-width:1270px){.view[data-v-17f926ff]{width:100%!important;min-width:auto!important;max-width:900px!important;margin:auto}.con-img-des[data-v-17f926ff]{display:block!important}.con-description-view[data-v-17f926ff],.con-img-view[data-v-17f926ff]{width:100%!important;max-width:100%!important;margin:0!important}}@media only screen and (max-width:600px){.con-img-des[data-v-17f926ff]{margin-top:0!important}.con-view header[data-v-17f926ff]{padding:10px 15px!important}.view[data-v-17f926ff]{padding:5px!important}.con-description-view[data-v-17f926ff],.con-img-view[data-v-17f926ff],.con-similar-posts[data-v-17f926ff]{width:100%!important;max-width:100%!important;margin:10px 0!important}.con-description-view[data-v-17f926ff],.con-img-view[data-v-17f926ff]{margin-top:0!important}.con-similar-posts[data-v-17f926ff]{margin-bottom:0!important}.con-similar-posts li[data-v-17f926ff]{padding:2px!important}}@-webkit-keyframes loading-data-v-17f926ff{0%{background:#231f34;background:var(--fondo);transform:scale(1)}33%{background:#352f4e;background:var(--fondo3);transform:scale(.9)}66%{background:#2c2741;background:var(--fondo2);transform:scale(1.1)}to{background:#231f34;background:var(--fondo);transform:scale(1)}}@keyframes loading-data-v-17f926ff{0%{background:#231f34;background:var(--fondo);transform:scale(1)}33%{background:#352f4e;background:var(--fondo3);transform:scale(.9)}66%{background:#2c2741;background:var(--fondo2);transform:scale(1.1)}to{background:#231f34;background:var(--fondo);transform:scale(1)}}',""])}}]);