"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[3111],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},21709:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"ActiveJ 5.5 - Performance improvements and bug fixes",hide_table_of_contents:!1},p=void 0,m={permalink:"/blog/2023/06/15/v5.5",source:"@site/blog/2023-06-15-v5.5.md",title:"ActiveJ 5.5 - Performance improvements and bug fixes",description:"ActiveJ v5.5 was released on Jun 15,",date:"2023-06-15T00:00:00.000Z",formattedDate:"June 15, 2023",tags:[],readingTime:1.62,truncated:!1,authors:[],nextItem:{title:"ActiveJ 5.4.3 - Simplified custom serializers",permalink:"/blog/2022/09/16/v5.4.3"}},c={authorsImageUrls:[]},d=[],s={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ActiveJ v5.5 was released on Jun 15,\n2023 (",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej/5.5"},"see on Maven"),"). This release\nintroduces bug fixes, as well as some performance improvements."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"General",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Updated dependency versions."),(0,i.kt)("li",{parentName:"ul"},"Changed logging levels in some components to be more appropriate."),(0,i.kt)("li",{parentName:"ul"},"Added method for parsing ",(0,i.kt)("inlineCode",{parentName:"li"},"InetSocketAddress")," that tries to resolve the address."),(0,i.kt)("li",{parentName:"ul"},"Made ",(0,i.kt)("inlineCode",{parentName:"li"},"Checks")," enabled by default if Java's assertions are enabled."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/misc/bytebuf"},"ByteBuf"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fixed UTF-8 encoding in ",(0,i.kt)("inlineCode",{parentName:"li"},"ByteBufStrings"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/async-io/eventloop"},"Eventloop"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Improved performance of scheduled tasks. Minimized garbage collection required for task scheduling."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/inject"},"Inject"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Added the ability to create bindings out of Java's constructors."),(0,i.kt)("li",{parentName:"ul"},"Simplified wildcard types in ",(0,i.kt)("inlineCode",{parentName:"li"},"KeyPattern"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rpc"},"RPC"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Improved ",(0,i.kt)("inlineCode",{parentName:"li"},"RpcClient")," start/stop routine."),(0,i.kt)("li",{parentName:"ul"},"Added launcher for multithreaded RPC server."),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"RpcClient#withForcedShutdown")," method to allow shutting down the ",(0,i.kt)("inlineCode",{parentName:"li"},"RpcClient")," even if there are\nactive connections."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/http"},"HTTP"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fixed inspector notification about malformed data exceptions."),(0,i.kt)("li",{parentName:"ul"},"Improved shutdown routine of ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient"),"."),(0,i.kt)("li",{parentName:"ul"},"Added the ability to forcefully shutdown ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient"),"."),(0,i.kt)("li",{parentName:"ul"},"Made response code of ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpResponse")," mutable."),(0,i.kt)("li",{parentName:"ul"},"Fixed multipart/form-data request parsing by considering the last ",(0,i.kt)("inlineCode",{parentName:"li"},"CRLF")," optional,\nas per ",(0,i.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc2046#section-5.1.1"},"RFC"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/async-io/datastream"},"Datastream"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"li"},"ChannelSerializer")," behavior on exception occurances."),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamLimiter")," class that limits number of items that pass via datastream pipeline."),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamSkip")," class that omits N first items that pass via datastream pipeline."),(0,i.kt)("li",{parentName:"ul"},"Fixed stats aggregation in ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamStatsForwarder"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/codegen"},"Codegen"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fixed method invocations on interfaces."),(0,i.kt)("li",{parentName:"ul"},"Improved class caching in ",(0,i.kt)("inlineCode",{parentName:"li"},"RecordScheme"),"."),(0,i.kt)("li",{parentName:"ul"},"Compared fields in ",(0,i.kt)("inlineCode",{parentName:"li"},"RecordScheme")," are now transfered to the projection."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/serializer"},"Serializer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Restricted non-static inner classes to be used for serialization."),(0,i.kt)("li",{parentName:"ul"},"Fixed closing routine in ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamInput"),"."),(0,i.kt)("li",{parentName:"ul"},"Removed caching from ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamCodecs"),"."),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamCodecs#reference")," method that introduces an effective way to serialize/deserialize duplicate item\ninstances."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/specializer"},"Specializer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Refactored ActiveJ Specializer to perform well on conditional code."))),(0,i.kt)("li",{parentName:"ul"},"JMX",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Added JMX reducers (",(0,i.kt)("inlineCode",{parentName:"li"},"Average"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Any"),")."),(0,i.kt)("li",{parentName:"ul"},"Added built-in support for JMX attributes/operations of ",(0,i.kt)("inlineCode",{parentName:"li"},"Enum")," type."),(0,i.kt)("li",{parentName:"ul"},"Added built-in support for JMX attributes/operations of ",(0,i.kt)("inlineCode",{parentName:"li"},"InetSocketAddress")," type.")))))}u.isMDXComponent=!0}}]);