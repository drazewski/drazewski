"use strict";(self.webpackChunkldrazewski_blog=self.webpackChunkldrazewski_blog||[]).push([[883],{1111:function(e,t,n){var i=n(7294),l=n(9),a=n(6805),o=l.ZP.div.withConfig({displayName:"HeroImageTitle__HeroImageTitleWrapper",componentId:"sc-oy8ghw-0"})(["max-width:1030px;width:100%;position:absolute;bottom:5%;left:50%;right:50%;transform:translateX(-50%);"]),r=l.ZP.div.withConfig({displayName:"HeroImageTitle__Title",componentId:"sc-oy8ghw-1"})(["position:absolute;bottom:0px;color:white;left:15px;"]),m=l.ZP.h1.withConfig({displayName:"HeroImageTitle__Name",componentId:"sc-oy8ghw-2"})(["font-size:22px;margin-bottom:1px;padding-bottom:12px;font-weight:300;@media(min-width:","){font-size:30px;}"],a.J.sm),d=l.ZP.div.withConfig({displayName:"HeroImageTitle__Border",componentId:"sc-oy8ghw-3"})(["height:2px;background:linear-gradient(77deg,#c805f1,#84b3f9ed,#cbe0ff00);"]),s=l.ZP.h5.withConfig({displayName:"HeroImageTitle__Subname",componentId:"sc-oy8ghw-4"})(["font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;margin:10px 0;@media(min-width:","){margin:15px 0;}"],a.J.sm);t.Z=function(){return i.createElement(o,null,i.createElement(r,null,i.createElement(m,null,"Lukasz Drazewski"),i.createElement(d,null),i.createElement(s,null,"personal blog")))}},2778:function(e,t,n){n.d(t,{Z:function(){return S}});var i=n(7294),l=n(5072),a=n(5444),o=n(2359),r=n(9),m=n(1111),d=(0,r.ZP)(o.G).withConfig({displayName:"HeroImage__ExportedImage",componentId:"sc-yb1rid-0"})(["margin:auto;position:unset !important;"]),s=r.ZP.section.withConfig({displayName:"HeroImage__HeroImageWrapper",componentId:"sc-yb1rid-1"})(["margin:0 0 20px 0;overflow:hidden;padding:0;position:relative;"]),c=function(){var e=(0,i.useState)("calc(100vh)"),t=e[0],n=e[1],l=(0,a.useStaticQuery)("2524963988");(0,i.useEffect)((function(){localStorage.getItem("nextTimeVisited")?n("69vh"):localStorage.setItem("nextTimeVisited",1)}),[]);var r=(0,o.d)(l.placeholderImage);return i.createElement(s,{style:{maxHeight:t}},i.createElement(d,{image:r,alt:"Łukasz Drążewski Personal Blog"}),i.createElement(m.Z,null))},p=n(7862),g=n(9777),u=r.ZP.div.withConfig({displayName:"SidebarTitle__BorderedWrapper",componentId:"sc-w6no3n-0"})(["padding-top:30px;border-top:1px solid #ddd;"]),h=r.ZP.h2.withConfig({displayName:"SidebarTitle__Title",componentId:"sc-w6no3n-1"})(["font-size:16px;font-weight:500;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:-40px;margin-bottom:0px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"]),f=r.ZP.span.withConfig({displayName:"SidebarTitle__TitleText",componentId:"sc-w6no3n-2"})(["display:inline-block;padding:0 20px;background-color:#fff;"]),x=function(e){var t=e.title;return i.createElement(u,null,i.createElement(h,null,i.createElement(f,null,t)))},w=n(5593),b=n(6805),E=r.ZP.div.withConfig({displayName:"FeaturedPost__PostItem",componentId:"sc-72h1g4-0"})(["display:flex;margin-bottom:15px;"]),y=r.ZP.h4.withConfig({displayName:"FeaturedPost__PostItemTitle",componentId:"sc-72h1g4-1"})(["color:",";font-size:16px;font-weight:400;line-height:1.5;margin:0;margin-bottom:6px;@media(min-width:","){font-size:14px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}@media(min-width:","){-webkit-line-clamp:3;}"],w.O.headingsPrimary,b.J.sm,b.J.md),_=r.ZP.span.withConfig({displayName:"FeaturedPost__PostItemSubtitle",componentId:"sc-72h1g4-2"})(["color:",";text-transform:uppercase;font-size:13px;font-family:'Open sans';font-style:italic;@media(min-width:","){font-size:11px;}"],w.O.textLight,b.J.sm),I=r.ZP.img.withConfig({displayName:"FeaturedPost__Thumbnail",componentId:"sc-72h1g4-3"})(["flex:2;margin:10px 0px;width:60px;min-height:60px;max-width:140px;"]),v=r.ZP.div.withConfig({displayName:"FeaturedPost__Meta",componentId:"sc-72h1g4-4"})(["flex:3;margin:5px 0 10px 10px;"]),P=function(e){var t=e.title,n=e.imageUrl,l=e.link,o=e.subtitle;return i.createElement(E,null,i.createElement(I,{alt:t,src:n}),i.createElement(v,null,i.createElement(y,null,i.createElement(a.Link,{to:l},t)),i.createElement(_,null,o)))},C=r.ZP.aside.withConfig({displayName:"RightColumn__Aside",componentId:"sc-1v022bw-0"})(["min-height:calc(100vh - 210px);max-width:1030px;margin:0 auto;padding:30px 0;width:calc(100% - 60px);"]),Z=r.ZP.img.withConfig({displayName:"RightColumn__IMG",componentId:"sc-1v022bw-1"})(["max-width:70%;margin:auto;display:flex;padding-bottom:20px;"]),k=r.ZP.p.withConfig({displayName:"RightColumn__Text",componentId:"sc-1v022bw-2"})(["font-size:14px;margin:0 0 20px 0;"]),N=r.ZP.div.withConfig({displayName:"RightColumn__WidgetArea",componentId:"sc-1v022bw-3"})(["padding-bottom:30px;"]),T=function(){var e=(0,a.useStaticQuery)("784764993");return i.createElement(C,null,i.createElement(N,null,i.createElement(x,{title:"Here I Am"}),i.createElement(Z,{srcSet:e.allContentfulAsset.nodes[0].fluid.srcSet}),i.createElement(k,null,e.contentfulElements.content.content)),i.createElement(N,null,i.createElement(x,{title:"Random posts"}),e.allContentfulBlogPosts.edges.map((function(e){return i.createElement(P,{key:e.node.slug,title:e.node.title,imageUrl:e.node.featuredImage.fixed.src,link:"/blog/"+e.node.slug,subtitle:e.node.date})}))),i.createElement(N,null,i.createElement(x,{title:"Recommended"}),i.createElement(k,null,"Here you will find interesting articles on various topics that I have read recently."),e.allContentfulExternalLinks.edges.map((function(e){return i.createElement(P,{key:e.node.title,title:e.node.title,imageUrl:e.node.featuredImage.fixed.src,link:e.node.url,subtitle:e.node.author})}))))},z=n(1633),H=r.ZP.div.withConfig({displayName:"Layout__Grid",componentId:"sc-e2s9ie-0"})(["display:grid;grid-template-columns:1fr;margin:auto;max-width:1030px;@media(min-width:","){grid-template-columns:70% 1fr;}"],b.J.sm),S=function(e){var t=e.children;return i.createElement(i.Fragment,null,i.createElement(z.Z,null),i.createElement(l.Z,null),i.createElement(c,null),i.createElement(H,null,i.createElement(g.Z,null,t),i.createElement(T,null)),i.createElement(p.Z,null))}},9616:function(e,t,n){n.r(t);var i=n(7294),l=n(2778);t.default=function(){return i.createElement(l.Z,null,i.createElement("h1",null,"NOT FOUND"),i.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}}]);
//# sourceMappingURL=component---src-pages-404-js-0da7e4d92d8f39a804de.js.map