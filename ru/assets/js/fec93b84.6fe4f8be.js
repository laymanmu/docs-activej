"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9895],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),s=a,v=f["".concat(l,".").concat(s)]||f[s]||m[s]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79440:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={title:"ActiveJ 5.0-beta1 - \u0423\u043b\u0443\u0447\u0448\u0435\u043d\u043e type resolution \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435",hide_table_of_contents:!1},l=void 0,p={permalink:"/ru/blog/2021/06/30/v5.0-beta1",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2021-06-30-v5.0-beta1.md",title:"ActiveJ 5.0-beta1 - \u0423\u043b\u0443\u0447\u0448\u0435\u043d\u043e type resolution \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435",description:"ActiveJ v5.0-beta1 \u0431\u044b\u043b \u0432\u044b\u043f\u0443\u0449\u0435\u043d 30 \u0438\u044e\u043d\u044f 2021 (\u0441\u043c. \u043d\u0430 Maven). \u0412 \u044d\u0442\u043e\u043c \u0440\u0435\u043b\u0438\u0437\u0435 \u0431\u044b\u043b\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0438\u043c\u043f\u043e\u0442\u0435\u043d\u0442\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432.",date:"2021-06-30T00:00:00.000Z",formattedDate:"30 \u0438\u044e\u043d\u044f 2021 \u0433.",tags:[],readingTime:.745,truncated:!1,authors:[],prevItem:{title:"ActiveJ 5.0-beta2 - \u0423\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u043c\u0438\u0441\u044b, \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043a\u043b\u0430\u0441\u0441\u043e\u0432",permalink:"/ru/blog/2021/09/01/v5.0-beta2"},nextItem:{title:"ActiveJ 4.3 - \u041d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439",permalink:"/ru/blog/2021/05/28/v4.3"}},u={authorsImageUrls:[]},m=[],f={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ActiveJ v5.0-beta1 \u0431\u044b\u043b \u0432\u044b\u043f\u0443\u0449\u0435\u043d 30 \u0438\u044e\u043d\u044f 2021 (",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej/5.0-beta1"},"\u0441\u043c. \u043d\u0430 Maven"),"). \u0412 \u044d\u0442\u043e\u043c \u0440\u0435\u043b\u0438\u0437\u0435 \u0431\u044b\u043b\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0438\u043c\u043f\u043e\u0442\u0435\u043d\u0442\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041c\u043e\u0434\u0443\u043b\u044c Refactored ",(0,i.kt)("a",{parentName:"li",href:"/inject"},"ActiveJ Inject"),". \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 (\u0441\u043c. ",(0,i.kt)("a",{parentName:"li",href:"/inject/binding-transformations"},"\u043f\u0440\u0438\u043c\u0435\u0440"),")"),(0,i.kt)("li",{parentName:"ul"},"\u0423\u043b\u0443\u0447\u0448\u0435\u043d ",(0,i.kt)("a",{parentName:"li",href:"/serializer"},"ActiveJ Serializer")," \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u0430 \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0442\u0438\u043f\u0430 (\u0441\u043c. ",(0,i.kt)("a",{parentName:"li",href:"/serializer/examples#path-based-serialization"},"\u043f\u0440\u0438\u043c\u0435\u0440"),"). \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0437\u0430\u043a\u0430\u0437 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430 \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c \u0436\u0435 JVM"),(0,i.kt)("li",{parentName:"ul"},"\u041c\u043e\u0434\u0443\u043b\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"codec")," \u0443\u0434\u0430\u043b\u0435\u043d. \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u0442\u0440\u0435\u0431\u0443\u044e\u0449\u0438\u0435 \u043c\u0430\u0440\u0448\u0438\u0440\u043e\u0432\u043a\u0438 JSON, \u0442\u0435\u043f\u0435\u0440\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ngs-doo/dsl-json"},"DSL-JSON")),(0,i.kt)("li",{parentName:"ul"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043d\u043e\u0432\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/tree/v5.0-beta1/util-types"},"types")," \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u0430\u043c\u0438 \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438 \u0442\u0438\u043f\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u0441\u043a\u0430\u043d\u0435\u0440 \u0442\u0438\u043f\u043e\u0432"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/activej/activej/tree/v5.0-beta1/util-common"},"Common")," \u043c\u043e\u0434\u0443\u043b\u044c \u0431\u044b\u043b \u043c\u0430\u0441\u0441\u043e\u0432\u043e \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u043d, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043e\u0431\u0449\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0431\u043e\u043b\u0435\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438"),(0,i.kt)("li",{parentName:"ul"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"DiscoveryService")," \u0434\u043b\u044f \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 (",(0,i.kt)("a",{parentName:"li",href:"/rpc"},"RPC"),", ",(0,i.kt)("a",{parentName:"li",href:"/fs"},"FS"),")"),(0,i.kt)("li",{parentName:"ul"},"\u0423\u043b\u0443\u0447\u0448\u0435\u043d ",(0,i.kt)("a",{parentName:"li",href:"/codegen"},"ActiveJ Codegen")," \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0443\u043f\u0435\u0440 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0432\u044b\u0437\u043e\u0432\u0430 \u0438 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432"),(0,i.kt)("li",{parentName:"ul"},"\u0420\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"),(0,i.kt)("li",{parentName:"ul"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c \u0441 Java 16"),(0,i.kt)("li",{parentName:"ul"},"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0439")))}s.isMDXComponent=!0}}]);