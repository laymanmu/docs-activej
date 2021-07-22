(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[7525],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){return function(t){var n=s(t.components);return r.createElement(e,i({},t,{components:n}))}},s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,v=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(v,c(c({ref:t},u),{},{components:n})):r.createElement(v,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},77618:function(e,t,n){"use strict";var r=n(95318).default;t.Z=void 0;var a=r(n(67294)),i=r(n(39962)),o=function(e){var t=e.url,n=e.text,r=e.isInline,o=void 0===r||r,c=e.children,l=(0,i.default)().siteConfig;return a.default.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:l.customFields.githubUrl+"/"+l.customFields.githubBranch+t,target:"_blank"},n||c)};t.Z=o},77815:function(e,t,n){"use strict";var r=n(95318).default;t.Z=void 0;r(n(67294));var a=r(n(39962)),i=function(e){var t=e.name,n=(0,a.default)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]};t.Z=i},3789:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(77618),c=n(77815),l=["components"],u={title:"ActiveJ | Using React in ActiveJ projects",keywords:["java","java for beginners","java framework","guide","tutorial","web application","server","servlet","spring","spring alternative","netty alternative","jetty alternative","async","react","reactjs","react js"],description:"Integrate React.js in your Java web application. In the tutorial you will create a basic app using ActiveJ Java framework and React.js."},p={unversionedId:"tutorials/using-react",id:"tutorials/using-react",isDocsHomePage:!1,title:"Using React in ActiveJ projects",description:"Integrate React.js in your Java web application. In the tutorial you will create a basic app using ActiveJ Java framework and React.js.",source:"@site/docs/tutorials/using-react.mdx",sourceDirName:"tutorials",slug:"/tutorials/using-react",permalink:"/tutorials/using-react",version:"current",frontMatter:{title:"ActiveJ | Using React in ActiveJ projects",keywords:["java","java for beginners","java framework","guide","tutorial","web application","server","servlet","spring","spring alternative","netty alternative","jetty alternative","async","react","reactjs","react js"],description:"Integrate React.js in your Java web application. In the tutorial you will create a basic app using ActiveJ Java framework and React.js."},sidebar:"tutorials",previous:{title:"Deploying ActiveJ Server to AWS Using Docker",permalink:"/tutorials/getting-started-advanced"},next:{title:"To-Do list app using React",permalink:"/tutorials/todo-list-tutorial"}},s=[{value:"Creating launcher",id:"creating-launcher",children:[]},{value:"Running the application",id:"running-the-application",children:[]}],m={toc:s};function d(e){var t=e.components,n=(0,a.default)(e,l);return(0,i.mdx)("wrapper",(0,r.default)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In this example we will integrate React in an ActiveJ project. You can find full example sources on ",(0,i.mdx)(o.Z,{text:"GitHub",url:"/examples/tutorials/react-integration",mdxType:"Githublink"}),". Here we will consider using  ",(0,i.mdx)(o.Z,{url:"/launchers/http/src/main/java/io/activej/launchers/http/HttpServerLauncher.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"HttpServerLauncher"))," and ",(0,i.mdx)(o.Z,{url:"/core-http/src/main/java/io/activej/http/AsyncServlet.java",mdxType:"Githublink"},(0,i.mdx)("inlineCode",{parentName:"p"},"AsyncServlet"))," to set up the ",(0,i.mdx)("a",{parentName:"p",href:"#creating-launcher"},"server")," that processes the requests. See how ActiveJ makes this process extremely simple."),(0,i.mdx)("h2",{id:"creating-launcher"},"Creating launcher"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleApplicationLauncher")," extends ",(0,i.mdx)("inlineCode",{parentName:"p"},"HttpServerLauncher"),". ",(0,i.mdx)("inlineCode",{parentName:"p"},"HttpServerLauncher")," superclass takes care of setting up\nall the required configurations for the HTTP server:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/react-integration/src/main/java/SimpleApplicationLauncher.java tag=REGION_1",url:"/examples/tutorials/react-integration/src/main/java/SimpleApplicationLauncher.java",tag:"REGION_1"},'import io.activej.http.AsyncServlet;\nimport io.activej.http.StaticServlet;\nimport io.activej.inject.annotation.Provides;\nimport io.activej.launchers.http.HttpServerLauncher;\n\nimport java.util.concurrent.Executor;\n\nimport static java.util.concurrent.Executors.newSingleThreadExecutor;\n\n//[START EXAMPLE]\npublic final class SimpleApplicationLauncher extends HttpServerLauncher {\n  @Provides\n  Executor executor() {\n    return newSingleThreadExecutor();\n  }\n\n  @Provides\n  AsyncServlet servlet(Executor executor) {\n    return StaticServlet.ofClassPath(executor, "build")\n        .withIndexHtml();\n  }\n\n  public static void main(String[] args) throws Exception {\n    SimpleApplicationLauncher launcher = new SimpleApplicationLauncher();\n    launcher.launch(args);\n  }\n}\n//[END EXAMPLE]\n\n')),(0,i.mdx)("p",null,"First, we provide an executor for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"AsyncServlet"),".\nThen, we provide an ",(0,i.mdx)("inlineCode",{parentName:"p"},"AsyncServlet")," to open the ",(0,i.mdx)("inlineCode",{parentName:"p"},"index.html")," of the provided path.\nFinally, we write down ",(0,i.mdx)("inlineCode",{parentName:"p"},"main()")," method to launch ",(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleApplicationLauncher"),". And that's it, no additional configurations are required. Simple and streamlined, isn't it?"),(0,i.mdx)("h2",{id:"running-the-application"},"Running the application"),(0,i.mdx)("p",null,"If you want to run the example, ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/activej/activej"},"clone ActiveJ")," and import it\nas a Maven project. Check out branch ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)(c.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the example, build the project (",(0,i.mdx)("strong",{parentName:"p"},"Ctrl + F9")," for IntelliJ IDEA)."),(0,i.mdx)("p",null,"Then, run the following command in ",(0,i.mdx)("inlineCode",{parentName:"p"},"activej/examples/tutorials/react-integration/front")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm i\nnpm run-script build\n")),(0,i.mdx)("p",null,"Open ",(0,i.mdx)("inlineCode",{parentName:"p"},"SimpleApplicationLauncher")," class and run its ",(0,i.mdx)("inlineCode",{parentName:"p"},"main()")," method.\nThen open your favourite browser and go to ",(0,i.mdx)("a",{parentName:"p",href:"http://localhost:8080"},"localhost:8080")))}d.isMDXComponent=!0}}]);