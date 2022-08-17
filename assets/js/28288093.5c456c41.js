"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91843],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"atan (Function)"},u=void 0,c={unversionedId:"cep/reference/functions/math/atan",id:"cep/reference/functions/math/atan",title:"atan (Function)",description:"If a single p1 is received, this function returns the arc-tangent (inverse tangent) value of p1.",source:"@site/docs/cep/reference/functions/math/atan.md",sourceDirName:"cep/reference/functions/math",slug:"/cep/reference/functions/math/atan",permalink:"/docs/cep/reference/functions/math/atan",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/math/atan.md",tags:[],version:"current",frontMatter:{title:"atan (Function)"},sidebar:"tutorialSidebar",previous:{title:"asin (Function)",permalink:"/docs/cep/reference/functions/math/asin"},next:{title:"bin (Function)",permalink:"/docs/cep/reference/functions/math/bin"}},p={},s=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example 1",id:"example-1",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If a single ",(0,i.kt)("inlineCode",{parentName:"p"},"p1")," is received, this function returns the arc-tangent (inverse tangent) value of ",(0,i.kt)("inlineCode",{parentName:"p"},"p1"),"."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"p1")," is received along with an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"p1"),", it considers them as x and y coordinates and returns the arc-tangent (inverse tangent) value. The returned value is in radian scale. This function wraps the ",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.Math.atan()")," function."),(0,i.kt)("p",null,"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<DOUBLE> math:atan(<INT|LONG|FLOAT|DOUBLE> p1)\n<DOUBLE> math:atan(<INT|LONG|FLOAT|DOUBLE> p1, <INT|LONG|FLOAT|DOUBLE> p2)\n")),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"p1"),(0,i.kt)("td",{parentName:"tr",align:null},"The value of the parameter whose arc-tangent (inverse tangent) is found. If the optional second parameter is given this represents the x coordinate of the (x,y) coordinate pair."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"INT LONG FLOAT DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"p2"),(0,i.kt)("td",{parentName:"tr",align:null},"This optional parameter represents the y coordinate of the (x,y) coordinate pair."),(0,i.kt)("td",{parentName:"tr",align:null},"0D"),(0,i.kt)("td",{parentName:"tr",align:null},"INT LONG FLOAT DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE STREAM InValueStream (inValue1 double, inValue2 double);\n\ninsert into OutMediationStream\nselect math:atan(inValue1, inValue2) as convertedValue\nfrom InValueStream;\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"inValue1")," in the input stream is given, the function calculates the arc-tangent value of it and returns the arc-tangent value to the output stream, OutMediationStream. If both the ",(0,i.kt)("inlineCode",{parentName:"p"},"inValue1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"inValue2")," are given, then the function considers them to be x and y coordinates respectively and returns the calculated arc-tangent value to the output stream, OutMediationStream. For example, atan(12d, 5d) returns 1.1760052070951352."))}d.isMDXComponent=!0}}]);