(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{273:function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"a",function(){return u}),n.d(e,"j",function(){return c}),n.d(e,"i",function(){return h}),n.d(e,"f",function(){return p}),n.d(e,"g",function(){return d}),n.d(e,"h",function(){return f}),n.d(e,"b",function(){return g}),n.d(e,"e",function(){return v}),n.d(e,"l",function(){return m}),n.d(e,"m",function(){return b}),n.d(e,"c",function(){return _}),n.d(e,"k",function(){return k});n(324);var i=n(77),s=n.n(i),a=(n(284),n(346),n(353),n(280),n(282),n(297)),r=n.n(a),o=(n(298),n(279),/#.*$/),l=/\.(md|html)$/,u=/\/$/,c=/^(https?:|mailto:|tel:)/;function h(t){return decodeURI(t).replace(o,"").replace(l,"")}function p(t){return c.test(t)}function d(t){return/^mailto:/.test(t)}function f(t){return/^tel:/.test(t)}function g(t){if(p(t))return t;var e=t.match(o),n=e?e[0]:"",i=h(t);return u.test(i)?t:i+".html"+n}function v(t,e){var n=t.hash,i=function(t){var e=t.match(o);if(e)return e[0]}(e);return(!i||n===i)&&h(t.path)===h(e)}function m(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var a=t.replace(/^\//,"").split("/"),r=0;r<a.length;r++){var o=a[r];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));for(var i=h(e),s=0;s<t.length;s++)if(h(t[s].regularPath)===i)return r()({},t[s],{type:"page",path:g(t[s].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function b(t,e,n,i){var a=n.pages,o=n.themeConfig,l=i&&o.locales&&o.locales[i]||o;if("auto"===(t.frontmatter.sidebar||l.sidebar||o.sidebar))return function(t){var e=_(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var u=l.sidebar||o.sidebar;if(u){var c=function(t,e){if(s()(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,u),h=c.base,p=c.config;return p?p.map(function(t){return function t(e,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return m(n,e,i);if(s()(e))return r()(m(n,e[0],i),{title:e[1]});a>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var o=e.children||[];return 0===o.length&&e.path?r()(m(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:o.map(function(e){return t(e,n,i,a+1)}),collapsable:!1!==e.collapsable}}(t,a,h)}):[]}return[]}function _(t){var e;return(t=t.map(function(t){return r()({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function k(t){return r()(t,{type:t.items&&t.items.length?"links":"link"})}},286:function(t,e,n){"use strict";var i=n(354),s=n.n(i),a=n(327),r=n(333),o=(n(360),n(6)),l=Object(o.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports,u=n(331),c=n(305),h=n.n(c);function p(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var d={components:{SidebarButton:l,NavLinks:u.a,SearchBox:r.a,AlgoliaSearchBox:a.a},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=s()(p(this.$el,"paddingLeft"))+s()(p(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1);var i=0;window.addEventListener("scroll",function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=h()(".navbar");t>i?t>200?e.css({top:"-100px",position:"fixed",transition:"0"}):e.css({top:-t+"px",position:"absoule",transition:"0"}):t>200?e.css({top:"0",position:"fixed",transition:".2s"}):e.css({top:"0",position:"fixed",transition:"0"}),i=t},!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},f=(n(366),Object(o.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[n("NavLinks",{staticClass:"can-hide"})],1),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e()],1)],1)},[],!1,null,null,null));e.a=f.exports},287:function(t,e,n){"use strict";var i=n(76),s=n.n(i),a=(n(285),n(344),n(273)),r={props:{item:{required:!0}},computed:{link:function(){return Object(a.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?s()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:a.f,isMailto:a.g,isTel:a.h}},o=n(6),l=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);e.a=l.exports},288:function(t,e,n){"use strict";n(279),n(282);var i=n(273);function s(t,e,n){var i=[];!function t(e,n){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var a=i[s];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[s+n]}}var a={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},resolvePath:function(){var t=this.$page.path.split("/").length;return t>=2&&(t-=2),function(t,e){return new Array(e+1).join(t)}("../",t)},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(i.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,s(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(i.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,s(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,s=t.docsDir,a=void 0===s?"":s,r=t.docsBranch,o=void 0===r?"master":r,l=t.docsRepo,u=void 0===l?e:l,c=Object(i.i)(this.$page.path);return i.a.test(c)?c+="README.md":c+=".md",u&&n?this.createEditLink(e,u,a,o,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,s,a){return/bitbucket.org/.test(t)?(i.j.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(s)+(n?"/"+n.replace(i.a,""):"")+a+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(i.j.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit/".concat(s)+(n?"/"+n.replace(i.a,""):"")+a}}},r=(n(367),n(6)),o=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),t.$page.frontmatter.poster?n("div",{staticStyle:{"max-width":"660px",margin:"0 auto","padding-top":"120px"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:t.resolvePath+t.$page.frontmatter.poster}})]):t._e(),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null);e.a=o.exports},289:function(t,e,n){"use strict";var i=n(330),s=n(331),a={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:s.a},props:["items"]},r=(n(370),n(6)),o=Object(r.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null);e.a=o.exports},300:function(t,e,n){},301:function(t,e,n){},302:function(t,e,n){},303:function(t,e,n){},304:function(t,e,n){},306:function(t,e,n){},307:function(t,e,n){},308:function(t,e,n){},309:function(t,e,n){},310:function(t,e,n){},327:function(t,e,n){"use strict";e.a={}},330:function(t,e,n){"use strict";n.r(e);n(285);var i=n(273),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(334).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(330).default},methods:{isActive:i.e}},a=(n(368),n(6)),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;n(280);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,s,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var u=Object(i.e)(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,u),l(t,e.children,n,s,a,r+1)])}))}var u={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,s=n.$page,a=(n.$site,n.$route),r=n.$themeConfig,u=n.$themeLocaleConfig,c=e.props,h=c.item,p=c.sidebarDepth,d=Object(i.e)(a,h.path),f="auto"===h.type?d||h.children.some(function(t){return Object(i.e)(a,h.basePath+"#"+t.slug)}):d,g=o(t,h.path,h.title||h.path,f),v=s.frontmatter.sidebarDepth||p||u.sidebarDepth||r.sidebarDepth,m=null==v?1:v,b=u.displayAllHeaders||r.displayAllHeaders;return"auto"===h.type?[g,l(t,h.children,h.basePath,a,m)]:(f||b)&&h.headers&&!i.d.test(h.path)?[g,l(t,Object(i.c)(h.headers),h.path,a,m)]:g}};n(369);var c={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(a.a)(u,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var s=e[n];if("group"===s.type&&s.children.some(function(e){return"page"===e.type&&Object(i.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(a.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=h.exports},331:function(t,e,n){"use strict";n(361),n(298);var i=n(297),s=n.n(i),a=n(117),r=(n(285),n(279),n(280),n(76)),o=n.n(r),l=n(287),u=n(334),c={components:{NavLink:l.a,DropdownTransition:u.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},h=(n(364),n(6)),p=Object(h.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports,d=n(273),f=n(327),g=n(333),v={components:{NavLink:l.a,DropdownLink:p,AlgoliaSearchBox:f.a,SearchBox:g.a},data:function(){return{searchShow:!1}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&o()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",items:o()(e).map(function(a){var r,o=e[a],l=s[a]&&s[a].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,a),i.some(function(t){return t.path===r})||(r=a)),{text:l,link:r}})};return[].concat(Object(a.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return s()(Object(d.k)(t),{items:(t.items||[]).map(d.k)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},m=(n(365),Object(h.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n      "+t._s(t.repoLabel)+"\n      "),n("OutboundLink")],1):t._e()]],2):t._e()},[],!1,null,null,null));e.a=m.exports},333:function(t,e,n){"use strict";n(298),n(284);var i=n(77),s=n.n(i),a=n(297),r=n.n(a),o=(n(324),n(295),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],a=0;a<e.length&&!(s.length>=5);a++){var o=e[a];if(this.getPageLocalePath(o)===n&&this.isSearchable(o))if(i(o))s.push(o);else if(o.headers)for(var l=0;l<o.headers.length&&!(s.length>=5);l++){var u=o.headers[l];i(u)&&s.push(r()({},o,{path:o.path+"#"+u.slug,header:u}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=s()(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),l=(n(359),n(6)),u=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box cb_business--placeholder"},[n("div",{staticClass:"cursor "}),t._v(" "),n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false",placeholder:"search"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null);e.a=u.exports},334:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},s=(n(363),n(6)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=a.exports},359:function(t,e,n){"use strict";var i=n(300);n.n(i).a},360:function(t,e,n){"use strict";var i=n(301);n.n(i).a},363:function(t,e,n){"use strict";var i=n(302);n.n(i).a},364:function(t,e,n){"use strict";var i=n(303);n.n(i).a},365:function(t,e,n){"use strict";var i=n(304);n.n(i).a},366:function(t,e,n){"use strict";var i=n(306);n.n(i).a},367:function(t,e,n){"use strict";var i=n(307);n.n(i).a},368:function(t,e,n){"use strict";var i=n(308);n.n(i).a},369:function(t,e,n){"use strict";var i=n(309);n.n(i).a},370:function(t,e,n){"use strict";var i=n(310);n.n(i).a}}]);