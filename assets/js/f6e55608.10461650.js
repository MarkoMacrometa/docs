"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17656],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),o=n(34334),a="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),o=n(67294),a=n(34334),s=n(72389),i=n(67392),l=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,s=e.lazy,d=e.block,m=e.defaultValue,f=e.values,b=e.groupId,v=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,l.U)(),E=T.tabGroupChoices,x=T.setTabGroupChoices,O=(0,o.useState)(k),w=O[0],N=O[1],j=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var D=E[b];null!=D&&D!==w&&y.some((function(e){return e.value===D}))&&N(D)}var P=function(e){var t=e.currentTarget,n=j.indexOf(t),r=y[n].value;r!==w&&(C(t),N(r),null!=b&&x(b,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=j.indexOf(e.currentTarget)+1;n=null!=(r=j[o])?r:j[0];break;case"ArrowLeft":var a,s=j.indexOf(e.currentTarget)-1;n=null!=(a=j[s])?a:j[j.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,n=e.label,s=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:P,onClick:P},s,{className:(0,a.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,s.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},39717:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),s=n(65488),i=n(85162),l=["components"],u={sidebar_position:10,title:"Connect to GDN"},c=void 0,p={unversionedId:"sdks/connect-to-gdn",id:"sdks/connect-to-gdn",title:"Connect to GDN",description:"The first step in using GDN is to establish a connection to a local region. When this code executes, it initializes the server connection to the region URL you sepcified. You can create an API key from the GUI or REST API.",source:"@site/docs/sdks/connect-to-gdn.md",sourceDirName:"sdks",slug:"/sdks/connect-to-gdn",permalink:"/docs/sdks/connect-to-gdn",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/sdks/connect-to-gdn.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Connect to GDN"},sidebar:"tutorialSidebar",previous:{title:"SDKs",permalink:"/docs/sdks/"},next:{title:"Create API Key",permalink:"/docs/sdks/create-api-key"}},d={},m=[],f={toc:m};function b(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The first step in using GDN is to establish a connection to a local region. When this code executes, it initializes the server connection to the region URL you sepcified. You can create an API key from the GUI or REST API."),(0,a.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const jsc8 = require("jsc8");\nconst client = new jsc8({url: "https://gdn.paas.macrometa.io", token: "xxxx", fabricName: \'_system\'});\n'))),(0,a.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from c8 import C8Client\nclient = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443,\n                    email='nemo@nautilus.com', password='xxxxx',\n                    geofabric='_system')\n\n# OR Using token\nclient = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443, token=\"XXXX\")\n"))),(0,a.kt)(i.Z,{value:"",label:"Rest",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import requests\nimport json\n\n# Constants\nFEDERATION = "api-gdn.macrometa.io"\nFED_URL = "https://{}".format(FEDERATION)\nEMAIL = "nemo@nautilus.com"\nPASSWORD = "xxxxxx"\nAUTH_TOKEN = "bearer "\n\n# Create a HTTPS Session\nurl = "{}/_open/auth".format(FED_URL)\npayload = {\n\'email\':EMAIL,\n\'password\':PASSWORD\n}\nheaders = {\n\'content-type\': \'application/json\'\n}\n\nresponse = requests.post(url, data = json.dumps(payload), headers = headers)\n\nif response.status_code == 200:\nresp_body = json.loads(response.text)\nAUTH_TOKEN += resp_body["jwt"]\nTENANT = resp_body["tenant"]\nelse:\nraise Exception("Error while getting auth token. Code:{}, Reason:{}".format(response.status_code,response.reason))\n\n\nsession = requests.session()\nsession.headers.update({"content-type": \'application/json\'})\nsession.headers.update({"authorization": AUTH_TOKEN})  \n')))))}b.isMDXComponent=!0}}]);