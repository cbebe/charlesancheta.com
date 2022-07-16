"use strict";(self.webpackChunkcharlesancheta_com=self.webpackChunkcharlesancheta_com||[]).push([[7113],{9613:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>u});var n=o(9496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(o),u=r,m=g["".concat(c,".").concat(u)]||g[u]||b[u]||a;return o?n.createElement(m,l(l({ref:t},s),{},{components:o})):n.createElement(m,l({ref:t},s))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},1808:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(665),r=(o(9496),o(9613));const a={title:"Dev Log: Boboman - Day 2",authors:"cbebe",slug:"dev-log/boboman/day2",tags:["dev-log","love","lua","gh-pages"]},l=void 0,i={permalink:"/blog/dev-log/boboman/day2",editUrl:"https://github.com/cbebe/charlesancheta.com/edit/master/blog/dev-log/boboman/2022-07-04-day2.md",source:"@site/blog/dev-log/boboman/2022-07-04-day2.md",title:"Dev Log: Boboman - Day 2",description:"MAJOR BUG ALERT!!",date:"2022-07-04T00:00:00.000Z",formattedDate:"July 4, 2022",tags:[{label:"dev-log",permalink:"/blog/tags/dev-log"},{label:"love",permalink:"/blog/tags/love"},{label:"lua",permalink:"/blog/tags/lua"},{label:"gh-pages",permalink:"/blog/tags/gh-pages"}],readingTime:.715,truncated:!1,authors:[{name:"Charles Ancheta",title:"Computer Engineering Student",url:"https://github.com/cbebe",imageURL:"https://github.com/cbebe.png",key:"cbebe"}],frontMatter:{title:"Dev Log: Boboman - Day 2",authors:"cbebe",slug:"dev-log/boboman/day2",tags:["dev-log","love","lua","gh-pages"]},prevItem:{title:"Dev Log: Boboman - Day 3",permalink:"/blog/dev-log/boboman/day3"},nextItem:{title:"Dev Log: Boboman - Day 1",permalink:"/blog/dev-log/boboman/day1"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function b(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"MAJOR BUG ALERT!!"),(0,r.kt)("p",null,'Apparently my collision logic for the bombs weren\'t going to hold up. Every\ntime a bomb explodes, there is a small time window where you can place a bomb\nand the bomb would not recognize the player, making it a "not new" bomb.\nBecause of that, the player gets pushed off right away and could end up in the\nweirdest of places.'),(0,r.kt)("p",null,"After hours of debugging I couldn't really solve it because of how the\ncollision library orders the entity updates. I didn't feel like giving up for\ntoday, though, and making no progress. I simply created a deployment script to\ndeploy the game to ",(0,r.kt)("a",{parentName:"p",href:"https://cbebe.github.io/boboman/"},"GitHub pages")," and fixed\nthe player update logic so it at least doesn't end up outside of the map. Still\na pretty good day even if I didn't make as much progress as I wanted."))}b.isMDXComponent=!0}}]);