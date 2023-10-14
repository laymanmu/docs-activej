"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[3264],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,v=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93353:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],c={title:"ActiveJ 5.4.3 - Simplified custom serializers",hide_table_of_contents:!1},l=void 0,s={permalink:"/zh/blog/2022/09/16/v5.4.3",source:"@site/blog/2022-09-16-v5.4.3.md",title:"ActiveJ 5.4.3 - Simplified custom serializers",description:"ActiveJ v5.4.3 was released on Sep 16,",date:"2022-09-16T00:00:00.000Z",formattedDate:"2022\u5e749\u670816\u65e5",tags:[],readingTime:.255,truncated:!1,authors:[],prevItem:{title:"ActiveJ 5.5 - Performance improvements and bug fixes",permalink:"/zh/blog/2023/06/15/v5.5"},nextItem:{title:"ActiveJ 5.4.2 - Minor bug fixes",permalink:"/zh/blog/2022/09/05/v5.4.2"}},u={authorsImageUrls:[]},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ActiveJ v5.4.3 was released on Sep 16,\n2022 (",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej/5.4.3"},"see on Maven"),"). This release introduces a simplified\napproach for creating serializers for custom classes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added an abstract ",(0,i.kt)("inlineCode",{parentName:"li"},"SimpleSerializerDef")," class that simplifies the creation of custom serializers. Serializers for custom\nclasses can now be created without the use of the Expressions API")))}m.isMDXComponent=!0}}]);