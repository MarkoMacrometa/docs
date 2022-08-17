"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97191],{3905:function(t,e,o){o.d(e,{Zo:function(){return p},kt:function(){return d}});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(o),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return o?n.createElement(f,i(i({ref:e},p),{},{components:o})):n.createElement(f,i({ref:e},p))}));function d(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},24457:function(t,e,o){o.r(e),o.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=o(83117),r=o(80102),a=(o(67294),o(3905)),i=["components"],s={sidebar_position:5,title:"PostHog Analytics Integration"},l=void 0,c={unversionedId:"apps/posthog",id:"apps/posthog",title:"PostHog Analytics Integration",description:"You can use PostHog with your Macrometa GDN tenants to quickly and easily capture usage data for your applications and make them readily available to anybody who needs it.",source:"@site/docs/apps/posthog.md",sourceDirName:"apps",slug:"/apps/posthog",permalink:"/docs/apps/posthog",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/apps/posthog.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"PostHog Analytics Integration"},sidebar:"tutorialSidebar",previous:{title:"Realtime Log Analytics",permalink:"/docs/apps/realtime-log-analytics"},next:{title:"Data Privacy User Management Portal",permalink:"/docs/apps/data-privacy"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Solution",id:"solution",level:2}],m={toc:u};function d(t){var e=t.components,o=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://posthog.com"},"PostHog")," with your Macrometa GDN tenants to quickly and easily capture usage data for your applications and make them readily available to anybody who needs it."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Follow the PostHog deployment instructions for your preferred method: ",(0,a.kt)("a",{parentName:"li",href:"https://posthog.com/docs/self-host"},"Self-hosted")," or ",(0,a.kt)("a",{parentName:"li",href:"https://posthog.com/docs/cloud"},"cloud-based"),"."),(0,a.kt)("li",{parentName:"ul"},"In Macrometa GDN, create an API key.")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"To enable PostHog analytics in your tenant:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the Integrate PostHog documentation for ",(0,a.kt)("a",{parentName:"li",href:"https://posthog.com/docs/self-host/configure/securing-posthog"},"JavaScript")," or ",(0,a.kt)("a",{parentName:"li",href:"https://posthog.com/docs/integrate/server/node"},"Node.js"),"."),(0,a.kt)("li",{parentName:"ol"},"In Macrometa GDN, log into an administrator account in the ",(0,a.kt)("inlineCode",{parentName:"li"},"_system")," GeoFabric."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"TENANTS")," to navigate to the Tenants management page."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Platform Limits")," tab, select the ",(0,a.kt)("strong",{parentName:"li"},"Enable PostHog Analytics")," check box."),(0,a.kt)("li",{parentName:"ol"},"Enter the ",(0,a.kt)("strong",{parentName:"li"},"Server URL")," of your PostHog Analytics server, and enter an ",(0,a.kt)("strong",{parentName:"li"},"API Key"),". ")),(0,a.kt)("p",null,"To verify, log into PostHog and check the ",(0,a.kt)("strong",{parentName:"p"},"Events")," tab to see if GDN events display properly. If you deselect the check box in the future, PostHog Analytics integration is disabled and the data is deleted."),(0,a.kt)("p",null,"Follow security recommendations listed in the ",(0,a.kt)("a",{parentName:"p",href:"https://posthog.com/docs/self-host/configure/securing-posthog"},"Securing PostHog")," documentation. Most important is to restrict access by IP."))}d.isMDXComponent=!0}}]);