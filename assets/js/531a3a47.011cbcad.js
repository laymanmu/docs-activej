(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[5220],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77618:function(e,t,n){"use strict";var r=n(95318).default;t.Z=void 0;var a=r(n(67294)),o=r(n(39962)),i=function(e){var t=e.url,n=e.text,r=e.isInline,i=void 0===r||r,l=e.children,s=(0,o.default)().siteConfig;return a.default.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+t,target:"_blank"},n||l)};t.Z=i},77815:function(e,t,n){"use strict";var r=n(95318).default;t.Z=void 0;r(n(67294));var a=r(n(39962)),o=function(e){var t=e.name,n=(0,a.default)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]};t.Z=o},87603:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=n(77618),l=n(77815),s=["components"],c={slug:"/codegen"},d={unversionedId:"codegen/overview",id:"codegen/overview",isDocsHomePage:!1,title:"Overview",description:"ActiveJ Codegen is an efficient Java code generator with streamlined and simple API. It is built on top of ObjectWeb ASM and has zero-overhead performance. ActiveJ Codegen is widely utilised at ActiveJ Serializer, making it the fastest JVM-based serializer in the world.",source:"@site/docs/codegen/overview.mdx",sourceDirName:"codegen",slug:"/codegen",permalink:"/codegen",version:"current",frontMatter:{slug:"/codegen"},sidebar:"docs",previous:{title:"Examples",permalink:"/inject/examples"},next:{title:"Examples",permalink:"/codegen/examples"}},p=[{value:"Why ActiveJ Codegen?",id:"why-activej-codegen",children:[]},{value:"Code generation",id:"code-generation",children:[]},{value:"Add ActiveJ Codegen to your project",id:"add-activej-codegen-to-your-project",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.default)(e,s);return(0,o.mdx)("wrapper",(0,r.default)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"ActiveJ Codegen is an efficient Java code generator with streamlined and simple API. It is built on top of ObjectWeb ASM and has zero-overhead performance. ActiveJ Codegen is widely utilised at ",(0,o.mdx)("a",{parentName:"p",href:"/serializer"},"ActiveJ Serializer"),", making it the fastest JVM-based serializer in the world.\nActiveJ Codegen is one of the ActiveJ technologies, but it has minimal third-party dependencies and can be used as a stand-alone component."),(0,o.mdx)("h2",{id:"why-activej-codegen"},"Why ActiveJ Codegen?"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Utilizes powerful ASM library for code generation and manipulation"),(0,o.mdx)("li",{parentName:"ul"},"Provides concise Expressions API that provides Lisp-like DSL for describing new classes"),(0,o.mdx)("li",{parentName:"ul"},"Supports caching of generated classes"),(0,o.mdx)("li",{parentName:"ul"},"Suitable for dynamic class generation based on runtime parameters (e.g. query processing)"),(0,o.mdx)("li",{parentName:"ul"},"Supports relational algebra operations for individual items: aggregate functions, predicates, ordering, group-by, etc."),(0,o.mdx)("li",{parentName:"ul"},"Features automatic type inference"),(0,o.mdx)("li",{parentName:"ul"},"Zero-overhead performance"),(0,o.mdx)("li",{parentName:"ul"},"Support for Records (heterogeneous data containers)")),(0,o.mdx)("h2",{id:"code-generation"},"Code generation"),(0,o.mdx)("p",null,"Let's say that we want to create a class that implements ",(0,o.mdx)("inlineCode",{parentName:"p"},"Person")," interface."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"public interface Greeter {\n    void sayHello();\n}\n")),(0,o.mdx)("p",null,'A generated class should simply print "Hello World" when ',(0,o.mdx)("inlineCode",{parentName:"p"},"sayHello()")," method is called."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'public class WorldGreeter implements Greeter {\n    @Override\n    public void sayHello() {\n        System.out.println("Hello World");\n    }\n}\n')),(0,o.mdx)("p",null,"To generate such class programmatically we should use a ",(0,o.mdx)(i.Z,{url:"/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java",mdxType:"Githublink"},(0,o.mdx)("inlineCode",{parentName:"p"},"ClassBuilder"))," class."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'Class<Greeter> greeterClass = ClassBuilder\n        .create(DefiningClassLoader.create(), Greeter.class)\n        .withMethod("sayHello",\n                call(staticField(System.class, "out"), "println", value("Hello world")))\n        .build();\n')),(0,o.mdx)("p",null,"Notice the ",(0,o.mdx)("inlineCode",{parentName:"p"},'call(staticField(System.class, "out"), "println", value("Hello world"))')," expression."),(0,o.mdx)("p",null,"This is how Expressions DSL looks like.\nFirst, we access static field ",(0,o.mdx)("inlineCode",{parentName:"p"},"out")," of ",(0,o.mdx)("inlineCode",{parentName:"p"},"System")," class. Then we call ",(0,o.mdx)("inlineCode",{parentName:"p"},"println()")," method on it, passing value ",(0,o.mdx)("inlineCode",{parentName:"p"},'"Hello world"')," as an argument.\nThis is equivalent to a ",(0,o.mdx)("inlineCode",{parentName:"p"},'System.out.println("Hello world)')),(0,o.mdx)("p",null,"When a new instance of this class is created and ",(0,o.mdx)("inlineCode",{parentName:"p"},"sayHello()")," method is called, the output is ",(0,o.mdx)("em",{parentName:"p"},'"Hello world"')," as expected."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'Greeter greeter = greeterClass.getDeclaredConstructor().newInstance();\ngreeter.sayHello(); // prints "Hello world" to stdout\n')),(0,o.mdx)("p",null,"This is merely a hint of what ActiveJ Codegen is capable of. For more information, please refer to examples or internal documentation."),(0,o.mdx)("h2",{id:"add-activej-codegen-to-your-project"},"Add ActiveJ Codegen to your project"),(0,o.mdx)("p",null,"You can add ActiveJ Codegen to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ Codegen ",(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)(l.Z,{style:{display:"inline"},name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/master/core-codegen"},"Github")," or ",(0,o.mdx)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-codegen"},"Maven"),")."))}m.isMDXComponent=!0}}]);