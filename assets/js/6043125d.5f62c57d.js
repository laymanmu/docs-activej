(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[2632],{3905:function(e,n,t){"use strict";t.d(n,{kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||c;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},77618:function(e,n,t){"use strict";var r=t(95318).default;n.Z=void 0;var a=r(t(67294)),c=r(t(39962)),o=function(e){var n=e.url,t=e.text,r=e.isInline,o=void 0===r||r,i=e.children,s=(0,c.default)().siteConfig;return a.default.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+n,target:"_blank"},t||i)};n.Z=o},88652:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=t(22122),a=t(19756),c=(t(67294),t(3905)),o=t(77618),i=["components"],s={},u={unversionedId:"inject/benchmarks",id:"inject/benchmarks",isDocsHomePage:!1,title:"Benchmarks",description:"We've compared ActiveJ Inject to Guice and Spring in the same scenario, using JMH as the benchmark tool.",source:"@site/docs/inject/benchmarks.mdx",sourceDirName:"inject",slug:"/inject/benchmarks",permalink:"/docs/inject/benchmarks",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Advanced",permalink:"/docs/inject/advanced"},next:{title:"Examples",permalink:"/docs/inject/examples"}},l=[],p={toc:l};function m(e){var n=e.components,t=(0,a.default)(e,i);return(0,c.kt)("wrapper",(0,r.default)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"We've compared ",(0,c.kt)("strong",{parentName:"p"},"ActiveJ Inject")," to ",(0,c.kt)("strong",{parentName:"p"},"Guice")," and ",(0,c.kt)("strong",{parentName:"p"},"Spring")," in the same scenario, using JMH as the benchmark tool.\nWe ran benchmarks in ",(0,c.kt)("em",{parentName:"p"},"AverageTime")," mode and made 20 measurements.\nAll measurement results are represented in nanoseconds."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"ActiveInjectScopesBenchmark.measure\nScore: 138.475; Error: \xb1 6.156; Units: ns/op;\n\nGuiceDiScopesBenchmark.measure\nScore: 780.017; Error: \xb1 23.994: Units: ns/op;\n\nSpringDiBenchmark.measure\nScore: 77191; Error: \xb1 322.6; Units: ns/op;\n")),(0,c.kt)("p",null,"Benchmarks were launched on a machine with the following parameters: Ubuntu 18.04 bionic,\nKernel: x86_64 Linux 4.15.0-55-generic,\nCPU: Intel Core i5-8400 @ 6x 4GHz ","[27.8\xb0C]","."),(0,c.kt)("p",null,"You can find benchmark sources on ",(0,c.kt)(o.Z,{text:"GitHub",url:"/benchmarks/inject/src/main/java/io/activej/inject",mdxType:"Githublink"})))}m.isMDXComponent=!0}}]);