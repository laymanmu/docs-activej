(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[6105],{3149:function(e,t,r){"use strict";var n=r(67294),a=r(39962),i=r(41106),o=r.n(i),s=r(15835);r.n(s)().interpolate=/{{([\s\S]+?)}}/g,t.Z=function(e){var t=e.href,r=e.children,i=e.target,s=void 0===i?"_blank":i,l=(0,a.Z)().siteConfig,c=o()(t);return n.createElement("a",{href:c(l.customFields),target:s},r)}},77815:function(e,t,r){"use strict";r(67294);var n=r(39962);t.Z=function(e){var t=e.name,r=(0,n.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===r.customFields[t])throw new Error("Variable "+t+" not exist");return r.customFields[t]}},67715:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=r(77815),s=r(3149),l=["components"],c={description:"ActiveJ FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",sidebar_label:"Overview",keywords:["storage","distributed storage","redundancy","rebelancing","kernel-space","java framework","ftp protocol","append-only"],slug:"/fs"},p="Overview",u={unversionedId:"fs/overview",id:"fs/overview",isDocsHomePage:!1,title:"Overview",description:"ActiveJ FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",source:"@site/docs/fs/overview.mdx",sourceDirName:"fs",slug:"/fs",permalink:"/fs",version:"current",frontMatter:{description:"ActiveJ FS | Java library for efficient and scalable distributed storage with data redundancy, rebalancing, and resharding",sidebar_label:"Overview",keywords:["storage","distributed storage","redundancy","rebelancing","kernel-space","java framework","ftp protocol","append-only"],slug:"/fs"},sidebar:"docs",previous:{title:"Memcached-like Application",permalink:"/rpc/memcached-like-application"},next:{title:"Examples",permalink:"/fs/examples"}},d=[{value:"Why ActiveJ FS?",id:"why-activej-fs",children:[]},{value:"Where ActiveJ FS can be used?",id:"where-activej-fs-can-be-used",children:[]},{value:"Streaming file access",id:"streaming-file-access",children:[]},{value:"Add ActiveJ FS to your project",id:"add-activej-fs-to-your-project",children:[]}],f={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"ActiveJ FS is a lightweight asynchronous Java library that provides a tiny abstraction on top of common file operations. It provides upload, download, append, list, copy, move, delete, and other methods for operating with local, remote or distributed storage."),(0,i.kt)("h2",{id:"why-activej-fs"},"Why ActiveJ FS?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Asynchronous file system"),(0,i.kt)("li",{parentName:"ul"},"Lightweight by design"),(0,i.kt)("li",{parentName:"ul"},"Intuitive API that consists of well-known file operations"),(0,i.kt)("li",{parentName:"ul"},"Supports atomic file uploads"),(0,i.kt)("li",{parentName:"ul"},"Support for client-server communication using custom binary protocol as well as HTTP protocol"),(0,i.kt)("li",{parentName:"ul"},"Can be launched as a distributed file system cluster")),(0,i.kt)("h2",{id:"where-activej-fs-can-be-used"},"Where ActiveJ FS can be used?"),(0,i.kt)("p",null,"There are several ActiveJ FS implementations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Local ActiveJ FS")," designed for working with file systems located on a single machine. Ideal to implement a ",(0,i.kt)("strong",{parentName:"li"},"local file storage for your application"),", for example database storage, backup data storage, local logs storage, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client/Server implementations")," for operating with files that are stored remotely. This implementation supports two protocols:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Custom ",(0,i.kt)("strong",{parentName:"li"},"TCP-based binary protocol")," with zero overhead. Resembles FTP, but simpler and more efficient."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HTTP protocol")," that allows to define a REST API. It also provides third-party clients like browsers access remote ActiveJ FS servers."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cluster ActiveJ FS")," is designed for distributed big data workload. It's optimized for processing large immutable datasets or append-only files. Cluster ActiveJ FS was intentionally made ",(0,i.kt)("strong",{parentName:"li"},"not POSIX-compilant")," and works only with ",(0,i.kt)("strong",{parentName:"li"},"immutable files"),". In this way the whole system is simple, lightweight and resilient to server or network failures. Also, this approach allows to avoid the overhead of master-slave architecture and synchronization of mutable files. With ActiveJ FS you can create distributed, scalable P2P file systems with built-in support for rebalancing, failover, and scalability."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ActiveJ FS Adapters")," enable filtering, mounting, transforming file names, adding and removing prefixes, subdirectories, etc.")),(0,i.kt)("h2",{id:"streaming-file-access"},"Streaming file access"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"upload()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"download()")," operations utilize ",(0,i.kt)("a",{parentName:"p",href:"/async-io/csp"},"CSP")," module so files are uploaded/downloaded using asynchronous data streams."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String filename = "hello.txt";\n\nEventloop eventloop = Eventloop.create().withCurrentThread();\nExecutor executor = Executors.newSingleThreadExecutor();\n\nLocalActiveFs fs = LocalActiveFs.create(eventloop, executor, Paths.get("/tmp/file-storage"));\n\nfs.start()\n        .then(() -> ChannelSupplier.of(ByteBufStrings.wrapAscii("Hello World"))\n                .streamTo(fs.upload(filename)))\n        .then(() -> fs.download(filename))\n        .map(supplier -> supplier.map(buf -> buf.asString(StandardCharsets.US_ASCII)))\n        .then(supplier -> supplier.streamTo(ChannelConsumer.ofConsumer(System.out::println)));\n\neventloop.run();\n')),(0,i.kt)("h2",{id:"add-activej-fs-to-your-project"},"Add ActiveJ FS to your project"),(0,i.kt)("p",null,"You can add ActiveJ FS to your project by importing its Maven repository.\nThese docs cover the most recent release of ActiveJ FS ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.Z,{name:"currentVersion",mdxType:"Variable"}))," (see on ",(0,i.kt)(s.Z,{href:"https://github.com/activej/activej/tree/{{currentVersion}}/cloud-fs",mdxType:"DynamicLink"},"Github")," or ",(0,i.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.activej/activej-fs"},"Maven"),")."))}m.isMDXComponent=!0},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},24626:function(e,t,r){var n=r(77813),a=Object.prototype,i=a.hasOwnProperty;e.exports=function(e,t,r,o){return void 0===e||n(e,a[r])&&!i.call(o,r)?t:e}},89464:function(e,t,r){var n=r(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});e.exports=n},31994:function(e){var t={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};e.exports=function(e){return"\\"+t[e]}},79865:function(e){e.exports=/<%-([\s\S]+?)%>/g},76051:function(e){e.exports=/<%([\s\S]+?)%>/g},5712:function(e){e.exports=/<%=([\s\S]+?)%>/g},29018:function(e,t,r){var n=r(98363),a=r(21463),i=r(81704),o=a((function(e,t,r,a){n(t,i(t),e,a)}));e.exports=o},9591:function(e,t,r){var n=r(96874),a=r(5976),i=r(64647),o=a((function(e,t){try{return n(e,void 0,t)}catch(r){return i(r)?r:new Error(r)}}));e.exports=o},7187:function(e,t,r){var n=r(89464),a=r(79833),i=/[&<>"']/g,o=RegExp(i.source);e.exports=function(e){return(e=a(e))&&o.test(e)?e.replace(i,n):e}},64647:function(e,t,r){var n=r(44239),a=r(37005),i=r(68630);e.exports=function(e){if(!a(e))return!1;var t=n(e);return"[object Error]"==t||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!i(e)}},41106:function(e,t,r){var n=r(29018),a=r(9591),i=r(47415),o=r(24626),s=r(31994),l=r(64647),c=r(16612),p=r(3674),u=r(5712),d=r(15835),f=r(79833),m=/\b__p \+= '';/g,v=/\b(__p \+=) '' \+/g,g=/(__e\(.*?\)|\b__t\)) \+\n'';/g,h=/[()=,{}\[\]\/\s]/,b=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,k=/($^)/,y=/['\n\r\u2028\u2029\\]/g,w=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var S=d.imports._.templateSettings||d;r&&c(e,t,r)&&(t=void 0),e=f(e),t=n({},t,S,o);var _,x,A=n({},t.imports,S.imports,o),j=p(A),N=i(A,j),F=0,J=t.interpolate||k,C="__p += '",T=RegExp((t.escape||k).source+"|"+J.source+"|"+(J===u?b:k).source+"|"+(t.evaluate||k).source+"|$","g"),E=w.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/\s/g," ")+"\n":"";e.replace(T,(function(t,r,n,a,i,o){return n||(n=a),C+=e.slice(F,o).replace(y,s),r&&(_=!0,C+="' +\n__e("+r+") +\n'"),i&&(x=!0,C+="';\n"+i+";\n__p += '"),n&&(C+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),F=o+t.length,t})),C+="';\n";var P=w.call(t,"variable")&&t.variable;if(P){if(h.test(P))throw new Error("Invalid `variable` option passed into `_.template`")}else C="with (obj) {\n"+C+"\n}\n";C=(x?C.replace(m,""):C).replace(v,"$1").replace(g,"$1;"),C="function("+(P||"obj")+") {\n"+(P?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(_?", __e = _.escape":"")+(x?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+C+"return __p\n}";var I=a((function(){return Function(j,E+"return "+C).apply(void 0,N)}));if(I.source=C,l(I))throw I;return I}},15835:function(e,t,r){var n=r(7187),a={escape:r(79865),evaluate:r(76051),interpolate:r(5712),variable:"",imports:{_:{escape:n}}};e.exports=a}}]);