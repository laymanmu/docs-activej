(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9579],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return m},withMDXComponents:function(){return d}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){return function(n){var t=m(n.components);return a.createElement(e,r({},n,{components:t}))}},m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(t),c=o,v=d["".concat(i,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(v,l(l({ref:n},p),{},{components:t})):a.createElement(v,l({ref:n},p))}));function x(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=v;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},77618:function(e,n,t){"use strict";var a=t(95318).default;n.Z=void 0;var o=a(t(67294)),r=a(t(39962)),i=function(e){var n=e.url,t=e.text,a=e.isInline,i=void 0===a||a,l=e.children,s=(0,r.default)().siteConfig;return o.default.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+n,target:"_blank"},t||l)};n.Z=i},77815:function(e,n,t){"use strict";var a=t(95318).default;n.Z=void 0;a(t(67294));var o=a(t(39962)),r=function(e){var n=e.name,t=(0,o.default)().siteConfig;if(!n)throw new Error("Variable name is required");if(void 0===t.customFields[n])throw new Error("Variable "+n+" not exist");return t.customFields[n]};n.Z=r},11184:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var a=t(22122),o=t(19756),r=(t(67294),t(3905)),i=t(77618),l=t(77815),s=["components"],p={title:"ActiveJ | Eventloop, single-threaded event loop for developing asynchronous Java applications",description:"Node.js-inspired single-threaded Eventloop for developing asynchronous Java applications",keywords:["nodejs","node js","java","java framework","asynchronous","asynchronous application","client-server application"]},d={unversionedId:"async-io/eventloop",id:"async-io/eventloop",isDocsHomePage:!1,title:"Eventloop",description:"Node.js-inspired single-threaded Eventloop for developing asynchronous Java applications",source:"@site/docs/async-io/eventloop.mdx",sourceDirName:"async-io",slug:"/async-io/eventloop",permalink:"/docs/async-io/eventloop",version:"current",frontMatter:{title:"ActiveJ | Eventloop, single-threaded event loop for developing asynchronous Java applications",description:"Node.js-inspired single-threaded Eventloop for developing asynchronous Java applications",keywords:["nodejs","node js","java","java framework","asynchronous","asynchronous application","client-server application"]},sidebar:"docs",previous:{title:"HTTP",permalink:"/docs/async-io/http"},next:{title:"Promise",permalink:"/docs/async-io/promise"}},m=[{value:"Overview",id:"overview",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic Example",id:"basic-example",children:[]},{value:"Eventloop Example",id:"eventloop-example",children:[]}]}],c={toc:m};function u(e){var n=e.components,t=(0,o.default)(e,s);return(0,r.mdx)("wrapper",(0,a.default)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"Eventloop module is the foundation of other modules that run their code asynchronously inside event loops and threads.\nIt ",(0,r.mdx)("strong",{parentName:"p"},"provides efficient management of asynchronous operations without multithreading overhead"),". Particularly useful\nfor building client-server applications with high-performance requirements."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Eventloop utilizes Java's NIO to allow asynchronous computations and I/O operations (TCP, UDP)."),(0,r.mdx)("li",{parentName:"ul"},"Eliminates traditional bottleneck of I/O for further business logic processing."),(0,r.mdx)("li",{parentName:"ul"},"Can run multiple eventloop threads on available cores."),(0,r.mdx)("li",{parentName:"ul"},"Minimal GC load: arrays and byte buffers are reused."),(0,r.mdx)("li",{parentName:"ul"},"Eventloop can schedule/delay certain tasks for later execution or background execution."),(0,r.mdx)("li",{parentName:"ul"},"Eventloop is single-threaded, so it doesn't have concurrency overhead.")),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Eventloop is a low-level tool that you won't use directly in most use cases. Yet, it is an\nextremely important component that will give you an understanding of ActiveJ async model set-up."))),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#"},(0,r.mdx)(i.Z,{url:"/core-eventloop/src/main/java/io/activej/eventloop/Eventloop.java",mdxType:"Githublink"},(0,r.mdx)("inlineCode",{parentName:"a"},"Eventloop")))," represents an infinite loop, where each ",(0,r.mdx)("inlineCode",{parentName:"p"},"loop")," executes all the tasks that are provided by ",(0,r.mdx)("inlineCode",{parentName:"p"},"Selector")," or stored in\nspecial queues. Each of these tasks should be small and its execution is called ",(0,r.mdx)("inlineCode",{parentName:"p"},"tick"),"."),(0,r.mdx)("p",null,"The only blocking operation of Eventloop infinite loop is ",(0,r.mdx)("inlineCode",{parentName:"p"},"Selector.select()"),". This operation selects a set of keys\nwhose corresponding channels are ready for I/O operations. With these keys and queues with tasks, eventloop asynchronously\nexecutes them in one thread in the overridden method ",(0,r.mdx)("inlineCode",{parentName:"p"},"run()")," (",(0,r.mdx)("inlineCode",{parentName:"p"},"Eventloop")," is an implementation of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Runnable"),")."),(0,r.mdx)("p",null,"Eventloop works with different types of tasks that are stored in separate queues:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Tasks"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Local tasks")),(0,r.mdx)("td",{parentName:"tr",align:null},"Added from current Eventloop thread")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Concurrent tasks")),(0,r.mdx)("td",{parentName:"tr",align:null},"Added from other threads")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Scheduled tasks")),(0,r.mdx)("td",{parentName:"tr",align:null},"Scheduled to be executed later")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Background tasks")),(0,r.mdx)("td",{parentName:"tr",align:null},"Same as ",(0,r.mdx)("em",{parentName:"td"},"Scheduled"),", but if there are only ",(0,r.mdx)("em",{parentName:"td"},"Background")," tasks left, Eventloop will be closed")))),(0,r.mdx)("p",null,"Eventloop will be stopped if its queues with non-background tasks are empty, ",(0,r.mdx)("strong",{parentName:"p"},"Selector")," has no selected\nkeys and the amount of concurrent operations in other threads equals 0. To prevent Eventloop from closing, apply\n",(0,r.mdx)("inlineCode",{parentName:"p"},"keepAlive")," flag. When it's set ",(0,r.mdx)("inlineCode",{parentName:"p"},"true"),", Eventloop will continue running even without tasks."),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#basic-example"},"BasicExample"),' - a simple example of an eventloop which prints out a "Hello World" message.'),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#eventloop-example"},"EventloopExample")," - represents the sequence of operations execution in eventloops.")),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub:"),(0,r.mdx)("pre",{parentName:"div"},(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,r.mdx)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)(l.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project. These examples are located at ",(0,r.mdx)("inlineCode",{parentName:"p"},"activej/examples/core/eventloop"),"."))),(0,r.mdx)("h3",{id:"basic-example"},"Basic Example"),(0,r.mdx)("p",null,'In this example we create an eventloop, post a task to it (which is printing out "Hello World" message) and\nthen start the eventloop:'),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/eventloop/src/main/java/BasicExample.java tag=EXAMPLE",url:"/examples/core/eventloop/src/main/java/BasicExample.java",tag:"EXAMPLE"},'public final class BasicExample {\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create();\n\n    eventloop.post(() -> System.out.println("Hello World"));\n\n    eventloop.run();\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)(i.Z,{url:"/examples/core/eventloop/src/main/java/BasicExample.java",mdxType:"Githublink"},"See full example on GitHub"))),(0,r.mdx)("h3",{id:"eventloop-example"},"Eventloop Example"),(0,r.mdx)("p",null,"This example represents how tasks are scheduled in eventloops:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/eventloop/src/main/java/EventloopExample.java tag=EXAMPLE",url:"/examples/core/eventloop/src/main/java/EventloopExample.java",tag:"EXAMPLE"},'public final class EventloopExample {\n  public static void main(String[] args) {\n    Eventloop eventloop = Eventloop.create().withCurrentThread();\n    long startTime = currentTimeMillis();\n\n    // #2\n    eventloop.delay(3000L, () -> System.out.println("Eventloop.delay(3000) is finished, time: " + (currentTimeMillis() - startTime)));\n    eventloop.delay(1000L, () -> System.out.println("Eventloop.delay(1000) is finished, time: " + (currentTimeMillis() - startTime)));\n    eventloop.delay(100L, () -> System.out.println("Eventloop.delay(100) is finished, time: " + (currentTimeMillis() - startTime)));\n\n    // #1\n    System.out.println("Before running eventloop, time: " + (currentTimeMillis() - startTime));\n\n    eventloop.run();\n  }\n}\n')),(0,r.mdx)("p",null,"If you run the example, you'll receive an output which looks something like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},"Before running eventloop, time: 2\nEventloop.delay(100) is finished, time: 106\nEventloop.delay(1000) is finished, time: 1001\nEventloop.delay(3000) is finished, time: 3001\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)(i.Z,{url:"/examples/core/eventloop/src/main/java/EventloopExample.java",mdxType:"Githublink"},"See full example on GitHub"))))}u.isMDXComponent=!0}}]);