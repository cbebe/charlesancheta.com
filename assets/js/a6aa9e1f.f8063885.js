"use strict";(self.webpackChunkcharlesancheta_com=self.webpackChunkcharlesancheta_com||[]).push([[3089],{2963:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(9496),r=a(1626),i=a(6163),l=a(3787),s=a(796),c=a(2075),o=a(7380),m=a(7456),u=a(6317);function g(e){var t=e.metadata,a=(0,i.Z)().siteConfig.title,r=t.blogDescription,s=t.blogTitle,c="/"===t.permalink?a:s;return n.createElement(n.Fragment,null,n.createElement(l.d,{title:c,description:r}),n.createElement(u.Z,{tag:"blog_posts_list"}))}function p(e){var t=e.metadata,a=e.items,r=e.sidebar;return n.createElement(c.Z,{sidebar:r},a.map((function(e){var t=e.content;return n.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(m.Z,{metadata:t}))}function d(e){return n.createElement(l.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},n.createElement(g,e),n.createElement(p,e))}},7456:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(9496),r=a(6019),i=a(8224);function l(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(i.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(i.Z,{permalink:l,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},7380:function(e,t,a){var n=a(9244),r=a(829),i=a(9496);t.Z=function(e){var t=(0,n.I)().isDarkTheme?"github-dark":"github-light",a=(0,i.useRef)(null);return(0,i.useEffect)((function(){if(e.isBlogPostPage){var n,r,i=a.current.querySelector("iframe.utterances-frame");i?(r={type:"set-theme",theme:t},i.contentWindow.postMessage(r,"https://utteranc.es")):((n=document.createElement("script")).src="https://utteranc.es/client.js",n.setAttribute("repo","cbebe/charlesancheta.com"),n.setAttribute("issue-term","pathname"),n.setAttribute("label","comment"),n.setAttribute("theme",t),n.crossOrigin="anonymous",n.async=!0,a.current.appendChild(n))}}),[t]),i.createElement(i.Fragment,null,i.createElement(r.Z,e),e.isBlogPostPage&&i.createElement("div",{ref:a}))}}}]);