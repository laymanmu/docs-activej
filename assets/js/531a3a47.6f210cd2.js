(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[5220],{3149:function(e,t,n){"use strict";var r=n(67294),a=n(39962),o=n(41106),i=n.n(o),l=n(15835);n.n(l)().interpolate=/{{([\s\S]+?)}}/g,t.Z=function(e){var t=e.href,n=e.children,o=e.target,l=void 0===o?"_blank":o,s=(0,a.Z)().siteConfig,c=i()(t);return r.createElement("a",{href:c(s.customFields),target:l},n)}},77618:function(e,t,n){"use strict";var r=n(67294),a=n(39962);t.Z=function(e){var t=e.url,n=e.text,o=e.isInline,i=void 0===o||o,l=e.children,s=(0,a.Z)().siteConfig;return r.createElement("a",{style:i?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+t,target:"_blank"},n||l)}},77815:function(e,t,n){"use strict";n(67294);var r=n(39962);t.Z=function(e){var t=e.name,n=(0,r.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]}},87603:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=n(77618),l=n(77815),s=n(3149),c=["components"],p={title:"ActiveJ Codegen Overview | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",sidebar_label:"Overview",slug:"/codegen"},u="Overview",d={unversionedId:"codegen/overview",id:"codegen/overview",isDocsHomePage:!1,title:"ActiveJ Codegen Overview | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",source:"@site/docs/codegen/overview.mdx",sourceDirName:"codegen",slug:"/codegen",permalink:"/codegen",version:"current",frontMatter:{title:"ActiveJ Codegen Overview | Dynamic bytecode generator with minimal overhead",description:"ActiveJ Codegen is a dynamic bytecode generator with minimal overhead and convenient API",sidebar_label:"Overview",slug:"/codegen"},sidebar:"docs",previous:{title:"Examples",permalink:"/inject/examples"},next:{title:"Examples",permalink:"/codegen/examples"}},m=[{value:"Why ActiveJ Codegen?",id:"why-activej-codegen",children:[]},{value:"Code generation",id:"code-generation",children:[]},{value:"Add ActiveJ Codegen to your project",id:"add-activej-codegen-to-your-project",children:[]}],v={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"ActiveJ Codegen is an efficient Java code generator with streamlined and simple API. It is built on top of ObjectWeb ASM and has zero-overhead performance. ActiveJ Codegen is widely utilised at ",(0,o.kt)("a",{parentName:"p",href:"/serializer"},"ActiveJ Serializer"),", making it the fastest JVM-based serializer in the world.\nActiveJ Codegen is one of the ActiveJ technologies, but it has minimal third-party dependencies and can be used as a stand-alone component."),(0,o.kt)("h2",{id:"why-activej-codegen"},"Why ActiveJ Codegen?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Utilizes powerful ASM library for code generation and manipulation"),(0,o.kt)("li",{parentName:"ul"},"Provides concise Expressions API that provides Lisp-like DSL for describing new classes"),(0,o.kt)("li",{parentName:"ul"},"Supports caching of generated classes"),(0,o.kt)("li",{parentName:"ul"},"Suitable for dynamic class generation based on runtime parameters (e.g. query processing)"),(0,o.kt)("li",{parentName:"ul"},"Supports relational algebra operations for individual items: aggregate functions, predicates, ordering, group-by, etc."),(0,o.kt)("li",{parentName:"ul"},"Features automatic type inference"),(0,o.kt)("li",{parentName:"ul"},"Zero-overhead performance"),(0,o.kt)("li",{parentName:"ul"},"Support for Records (heterogeneous data containers)")),(0,o.kt)("h2",{id:"code-generation"},"Code generation"),(0,o.kt)("p",null,"Let's say that we want to create a class that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface Greeter {\n    void sayHello();\n}\n")),(0,o.kt)("p",null,'A generated class should simply print "Hello World" when ',(0,o.kt)("inlineCode",{parentName:"p"},"sayHello()")," method is called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class WorldGreeter implements Greeter {\n    @Override\n    public void sayHello() {\n        System.out.println("Hello World");\n    }\n}\n')),(0,o.kt)("p",null,"To generate such class programmatically we should use a ",(0,o.kt)(i.Z,{url:"/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java",mdxType:"Githublink"},(0,o.kt)("inlineCode",{parentName:"p"},"ClassBuilder"))," class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Class<Greeter> greeterClass = ClassBuilder\n        .create(DefiningClassLoader.create(), Greeter.class)\n        .withMethod("sayHello",\n                call(staticField(System.class, "out"), "println", value("Hello world")))\n        .build();\n')),(0,o.kt)("p",null,"Notice the ",(0,o.kt)("inlineCode",{parentName:"p"},'call(staticField(System.class, "out"), "println", value("Hello world"))')," expression."),(0,o.kt)("p",null,"This is how Expressions DSL looks like.\nFirst, we access static field ",(0,o.kt)("inlineCode",{parentName:"p"},"out")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"System")," class. Then we call ",(0,o.kt)("inlineCode",{parentName:"p"},"println()")," method on it, passing value ",(0,o.kt)("inlineCode",{parentName:"p"},'"Hello world"')," as an argument.\nThis is equivalent to a ",(0,o.kt)("inlineCode",{parentName:"p"},'System.out.println("Hello world)')),(0,o.kt)("p",null,"When a new instance of this class is created and ",(0,o.kt)("inlineCode",{parentName:"p"},"sayHello()")," method is called, the output is ",(0,o.kt)("em",{parentName:"p"},'"Hello world"')," as expected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Greeter greeter = greeterClass.getDeclaredConstructor().newInstance();\ngreeter.sayHello(); // prints "Hello world" to stdout\n')),(0,o.kt)("p",null,"This is merely a hint of what ActiveJ Codegen is capable of. For more information, please refer to examples or internal documentation."),(0,o.kt)("h2",{id:"add-activej-codegen-to-your-project"},"Add ActiveJ Codegen to your project"),(0,o.kt)("p",null,"You can add ActiveJ Codegen to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ Codegen ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)(l.Z,{name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,o.kt)(s.Z,{href:"https://github.com/activej/activej/tree/{{currentVersion}}/core-codegen",mdxType:"DynamicLink"},"Github")," or ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-codegen"},"Maven"),")."))}g.isMDXComponent=!0},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},24626:function(e,t,n){var r=n(77813),a=Object.prototype,o=a.hasOwnProperty;e.exports=function(e,t,n,i){return void 0===e||r(e,a[n])&&!o.call(i,n)?t:e}},89464:function(e,t,n){var r=n(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=r},31994:function(e){var t={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+t[e]}},79865:function(e){e.exports=/<%-([\s\S]+?)%>/g},76051:function(e){e.exports=/<%([\s\S]+?)%>/g},5712:function(e){e.exports=/<%=([\s\S]+?)%>/g},29018:function(e,t,n){var r=n(98363),a=n(21463),o=n(81704),i=a((function(e,t,n,a){r(t,o(t),e,a)}));e.exports=i},9591:function(e,t,n){var r=n(96874),a=n(5976),o=n(64647),i=a((function(e,t){try{return r(e,void 0,t)}catch(n){return o(n)?n:new Error(n)}}));e.exports=i},7187:function(e,t,n){var r=n(89464),a=n(79833),o=/[&<>"']/g,i=RegExp(o.source);e.exports=function(e){return(e=a(e))&&i.test(e)?e.replace(o,r):e}},64647:function(e,t,n){var r=n(44239),a=n(37005),o=n(68630);e.exports=function(e){if(!a(e))return!1;var t=r(e);return"[object Error]"==t||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!o(e)}},41106:function(e,t,n){var r=n(29018),a=n(9591),o=n(47415),i=n(24626),l=n(31994),s=n(64647),c=n(16612),p=n(3674),u=n(5712),d=n(15835),m=n(79833),v=/\b__p \+= '';/g,g=/\b(__p \+=) '' \+/g,f=/(__e\(.*?\)|\b__t\)) \+\n'';/g,h=/[()=,{}\[\]\/\s]/,k=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,y=/($^)/,b=/['\n\r\u2028\u2029\\]/g,w=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var C=d.imports._.templateSettings||d;n&&c(e,t,n)&&(t=void 0),e=m(e),t=r({},t,C,i);var _,j,x=r({},t.imports,C.imports,i),N=p(x),A=o(x,N),J=0,S=t.interpolate||y,H="__p += '",E=RegExp((t.escape||y).source+"|"+S.source+"|"+(S===u?k:y).source+"|"+(t.evaluate||y).source+"|$","g"),O=w.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(E,(function(t,n,r,a,o,i){return r||(r=a),H+=e.slice(J,i).replace(b,l),n&&(_=!0,H+="' +\n__e("+n+") +\n'"),o&&(j=!0,H+="';\n"+o+";\n__p += '"),r&&(H+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),J=i+t.length,t})),H+="';\n";var D=w.call(t,"variable")&&t.variable;if(D){if(h.test(D))throw new Error("Invalid `variable` option passed into `_.template`")}else H="with (obj) {\n"+H+"\n}\n";H=(j?H.replace(v,""):H).replace(g,"$1").replace(f,"$1;"),H="function("+(D||"obj")+") {\n"+(D?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(_?", __e = _.escape":"")+(j?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+H+"return __p\n}";var Z=a((function(){return Function(N,O+"return "+H).apply(void 0,A)}));if(Z.source=H,s(Z))throw Z;return Z}},15835:function(e,t,n){var r=n(7187),a={escape:n(79865),evaluate:n(76051),interpolate:n(5712),variable:"",imports:{_:{escape:r}}};e.exports=a}}]);