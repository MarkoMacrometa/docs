"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35875],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27670:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],s={sidebar_position:9,title:"Projections & Filters"},l=void 0,u={unversionedId:"c8ql/examples/projections-and-filters",id:"c8ql/examples/projections-and-filters",title:"Projections & Filters",description:"Returning unaltered documents",source:"@site/docs/c8ql/examples/projections-and-filters.md",sourceDirName:"c8ql/examples",slug:"/c8ql/examples/projections-and-filters",permalink:"/docs/c8ql/examples/projections-and-filters",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/c8ql/examples/projections-and-filters.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Projections & Filters"},sidebar:"tutorialSidebar",previous:{title:"Multiple Path Search",permalink:"/docs/c8ql/examples/multiple-path-search"},next:{title:"Queries Without Collections",permalink:"/docs/c8ql/examples/queries-without-collections"}},c={},p=[{value:"Returning unaltered documents",id:"returning-unaltered-documents",level:2},{value:"Projections",id:"projections",level:2},{value:"Filters",id:"filters",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"returning-unaltered-documents"},"Returning unaltered documents"),(0,o.kt)("p",null,"To return three complete documents from collection ",(0,o.kt)("inlineCode",{parentName:"p"},"users"),", the following query can be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR u IN users \n  LIMIT 0, 3\n  RETURN u\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ \n  { \n    "_id" : "users/229886047207520", \n    "_rev" : "229886047207520", \n    "_key" : "229886047207520", \n    "active" : true, \n    "id" : 206, \n    "age" : 31, \n    "gender" : "f", \n    "name" : "Abigail" \n  }, \n  { \n    "_id" : "users/229886045175904", \n    "_rev" : "229886045175904", \n    "_key" : "229886045175904", \n    "active" : true, \n    "id" : 101, \n    "age" : 36, \n    "name" : "Fred", \n    "gender" : "m" \n  }, \n  { \n    "_id" : "users/229886047469664", \n    "_rev" : "229886047469664", \n    "_key" : "229886047469664", \n    "active" : true, \n    "id" : 208, \n    "age" : 29, \n    "name" : "Mary", \n    "gender" : "f" \n  }\n]\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There is a ",(0,o.kt)("inlineCode",{parentName:"p"},"LIMIT")," clause but no ",(0,o.kt)("inlineCode",{parentName:"p"},"SORT")," clause. In this case it is not guaranteed which of the user documents are returned. Effectively the document return order is unspecified if no ",(0,o.kt)("inlineCode",{parentName:"p"},"SORT")," clause is used, and you should not rely on the order in such queries.")),(0,o.kt)("h2",{id:"projections"},"Projections"),(0,o.kt)("p",null,"To return a projection from the collection ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," use a modified ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," instruction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users \n  LIMIT 0, 3\n  RETURN { \n    "user" : { \n      "isActive" : u.active ? "yes" : "no", \n      "name" : u.name \n    } \n  }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ \n  { \n    "user" : { \n      "isActive" : "yes", \n      "name" : "John" \n    } \n  }, \n  { \n    "user" : { \n      "isActive" : "yes", \n      "name" : "Anthony" \n    } \n  }, \n  { \n    "user" : { \n      "isActive" : "yes", \n      "name" : "Fred" \n    } \n  }\n]\n')),(0,o.kt)("h2",{id:"filters"},"Filters"),(0,o.kt)("p",null,"To return a filtered projection from collection ",(0,o.kt)("inlineCode",{parentName:"p"},"users"),", you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FILTER")," keyword. Additionally, a ",(0,o.kt)("inlineCode",{parentName:"p"},"SORT")," clause is used to have the result returned in a specific order:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users \n  FILTER u.active == true && u.age >= 30\n  SORT u.age DESC\n  LIMIT 0, 5\n  RETURN { \n    "age" : u.age, \n    "name" : u.name \n  }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[ \n  { \n    "age" : 37, \n      "name" : "Sophia" \n  }, \n  { \n    "age" : 37, \n    "name" : "John" \n  }, \n  { \n    "age" : 36, \n    "name" : "Emma" \n  }, \n  { \n    "age" : 36, \n    "name" : "Fred" \n  }, \n  { \n    "age" : 34, \n    "name" : "Madison" \n  } \n]\n')))}m.isMDXComponent=!0}}]);