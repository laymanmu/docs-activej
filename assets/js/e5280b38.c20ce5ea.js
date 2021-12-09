"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[93],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),v=u(a),m=r,g=v["".concat(o,".").concat(m)]||v[m]||c[m]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=v;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},77618:function(e,t,a){var n=a(67294),r=a(39962);t.Z=function(e){var t=e.url,a=e.text,i=e.isInline,l=void 0===i||i,s=e.children,o=(0,r.Z)().siteConfig,u=t.startsWith("/examples")?o.customFields.githubExamplesBranch:o.customFields.githubBranch;return n.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:o.customFields.githubUrl+"/"+u+t,target:"_blank"},a||s)}},77815:function(e,t,a){a(67294);var n=a(39962);t.Z=function(e){var t=e.name,a=(0,n.Z)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===a.customFields[t])throw new Error("Variable "+t+" not exist");return a.customFields[t]}},43338:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=(a(77815),a(77618)),s=["components"],o={keywords:["java","java framework","tutorial","guide","rpc","client-server","web application","key-value storage"],sidebar_label:"Key-Value Storage",description:"A key-value storage with high performance RPC communication protocol"},u="Key-Value Storage",p={unversionedId:"rpc/key-value-storage",id:"rpc/key-value-storage",isDocsHomePage:!1,title:"Key-Value Storage",description:"A key-value storage with high performance RPC communication protocol",source:"@site/docs/rpc/key-value-storage.mdx",sourceDirName:"rpc",slug:"/rpc/key-value-storage",permalink:"/rpc/key-value-storage",tags:[],version:"current",frontMatter:{keywords:["java","java framework","tutorial","guide","rpc","client-server","web application","key-value storage"],sidebar_label:"Key-Value Storage",description:"A key-value storage with high performance RPC communication protocol"},sidebar:"docs",previous:{title:"Basic Examples",permalink:"/rpc/basic-examples"},next:{title:"Memcached-like Application",permalink:"/rpc/memcached-like-application"}},c=[{value:"What you will need:",id:"what-you-will-need",children:[],level:2},{value:"Working Example",id:"working-example",children:[{value:"Source code",id:"source-code",children:[{value:"Basic app functionality",id:"basic-app-functionality",children:[],level:4},{value:"Client and server",id:"client-and-server",children:[],level:4}],level:3},{value:"Testing",id:"testing",children:[],level:3}],level:2}],v={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"key-value-storage"},"Key-Value Storage"),(0,i.kt)("p",null,"In this guide we will look at a remote key-value storage which has 2 basic operations: ",(0,i.kt)("inlineCode",{parentName:"p"},"put")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),". When\nwriting distributed application the common concern is what protocol to use for communication. There are two main\noptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP/REST"),(0,i.kt)("li",{parentName:"ul"},"RPC")),(0,i.kt)("p",null,"While HTTP is more popular and well-specified, it has some overhead. When performance is a significant aspect of application,\nyou should use something faster. For this purpose ActiveJ RPC was designed based on\nfast serializers and custom optimized communication protocol that allows to significantly improve application performance."),(0,i.kt)("h2",{id:"what-you-will-need"},"What you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IDE or terminal"),(0,i.kt)("li",{parentName:"ul"},"JDK 1.8+"),(0,i.kt)("li",{parentName:"ul"},"Maven 3.0+")),(0,i.kt)("p",null,"To proceed with this guide you have need to download and run a ",(0,i.kt)("a",{parentName:"p",href:"#working-example"},"working example")),(0,i.kt)("h2",{id:"working-example"},"Working Example"),(0,i.kt)("p",null,"First, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/activej/activej/tree/examples-5.0"},"clone ActiveJ project")," locally first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone -b examples-5.0 https://github.com/activej/activej.git\n")),(0,i.kt)("p",null,"Then open the project in your IDE of choice. Before running the example, build the project (",(0,i.kt)("strong",{parentName:"p"},"Ctrl + F9")," for IntelliJ IDEA)."),(0,i.kt)("p",null,"If you want to skip source code explanation, you can go straight to ",(0,i.kt)("a",{parentName:"p",href:"#testing"},"testing")," section."),(0,i.kt)("h3",{id:"source-code"},"Source code"),(0,i.kt)("h4",{id:"basic-app-functionality"},"Basic app functionality"),(0,i.kt)("p",null,"Since we have two basic operations to implement (",(0,i.kt)("inlineCode",{parentName:"p"},"put")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"), let's start with looking at message classes that are used for communication between client and server, specifically ",(0,i.kt)(l.Z,{text:"PutRequest",url:"/examples/tutorials/rpc-kv-storage/src/main/java/PutRequest.java",mdxType:"Githublink"}),", ",(0,i.kt)(l.Z,{text:"PutResponse",url:"/examples/tutorials/rpc-kv-storage/src/main/java/PutResponse.java",mdxType:"Githublink"}),", ",(0,i.kt)(l.Z,{text:"GetRequest",url:"/examples/tutorials/rpc-kv-storage/src/main/java/GetRequest.java",mdxType:"Githublink"}),", and ",(0,i.kt)(l.Z,{text:"GetResponse",url:"/examples/tutorials/rpc-kv-storage/src/main/java/GetResponse.java",mdxType:"Githublink"}),".\nInstances of these classes are serialized by a lightning-fast serializer library ",(0,i.kt)("a",{parentName:"p",href:"/serializer"},"ActiveJ Serializer"),". It requires some meta information about these classes, which is provided by appropriate annotations. The basic rules are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)(l.Z,{text:"@Serialize",url:"/core-serializer/src/main/java/io/activej/serializer/annotations/Serialize.java",mdxType:"Githublink"})," annotation on properties that need to be serialized."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)(l.Z,{text:"@Deserialize",url:"/core-serializer/src/main/java/io/activej/serializer/annotations/Deserialize.java",mdxType:"Githublink"})," annotation with a property name (which should be the same as the one in the getter) in constructor."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)(l.Z,{text:"@SerializeNullable",url:"/core-serializer/src/main/java/io/activej/serializer/annotations/SerializeNullable.java",mdxType:"Githublink"})," on properties that can have null values.")),(0,i.kt)("p",null,"Message classes look like these:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/PutRequest.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/PutRequest.java",tag:"EXAMPLE"},'public class PutRequest {\n\n  private final String key;\n  private final String value;\n\n  public PutRequest(@Deserialize("key") String key, @Deserialize("value") String value) {\n    this.key = key;\n    this.value = value;\n  }\n\n  @Serialize\n  public String getKey() {\n    return key;\n  }\n\n  @Serialize\n  public String getValue() {\n    return value;\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/PutResponse.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/PutResponse.java",tag:"EXAMPLE"},"public class PutResponse {\n  private final String previousValue;\n\n  public PutResponse(@Deserialize(\"previousValue\") String previousValue) {\n    this.previousValue = previousValue;\n  }\n\n  @Serialize\n  @SerializeNullable\n  public String getPreviousValue() {\n    return previousValue;\n  }\n\n  @Override\n  public String toString() {\n    return \"{previousValue='\" + previousValue + '\\'' + '}';\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/GetRequest.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/GetRequest.java",tag:"EXAMPLE"},'public class GetRequest {\n\n  private final String key;\n\n  public GetRequest(@Deserialize("key") String key) {\n    this.key = key;\n  }\n\n  @Serialize\n  public String getKey() {\n    return key;\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/GetResponse.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/GetResponse.java",tag:"EXAMPLE"},"public class GetResponse {\n  private final String value;\n\n  public GetResponse(@Deserialize(\"value\") String value) {\n    this.value = value;\n  }\n\n  @Serialize\n  @SerializeNullable\n  public String getValue() {\n    return value;\n  }\n\n  @Override\n  public String toString() {\n    return \"{value='\" + value + '\\'' + '}';\n  }\n}\n")),(0,i.kt)("p",null,"Next, let's look at a simple implementation of a key-value storage ",(0,i.kt)(l.Z,{text:"KeyValueStore",url:"/examples/tutorials/rpc-kv-storage/src/main/java/KeyValueStore.java",mdxType:"Githublink"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/KeyValueStore.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/KeyValueStore.java",tag:"EXAMPLE"},"public class KeyValueStore {\n\n  private final Map<String, String> store = new HashMap<>();\n\n  public String put(String key, String value) {\n    return store.put(key, value);\n  }\n\n  public String get(String key) {\n    return store.get(key);\n  }\n}\n")),(0,i.kt)("p",null,"A key-value store is very minimalistic. It uses a regular Java's ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," to store keys with corresponding values."),(0,i.kt)("h4",{id:"client-and-server"},"Client and server"),(0,i.kt)("p",null,"Now, let's look at an ",(0,i.kt)(l.Z,{text:"AbstractModule",url:"/core-inject/src/main/java/io/activej/inject/module/AbstractModule.java",mdxType:"Githublink"})," for the RPC server using ",(0,i.kt)("a",{parentName:"p",href:"/inject"},"ActiveJ Inject")," dependency injection library to handle the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"put")," requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/ServerModule.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ServerModule.java",tag:"EXAMPLE"},"public class ServerModule extends AbstractModule {\n  private static final int RPC_SERVER_PORT = 5353;\n\n  @Provides\n  Eventloop eventloop() {\n    return Eventloop.create()\n        .withEventloopFatalErrorHandler(rethrow());\n  }\n\n  @Provides\n  KeyValueStore keyValueStore() {\n    return new KeyValueStore();\n  }\n\n  @Provides\n  RpcServer rpcServer(Eventloop eventloop, KeyValueStore store) {\n    return RpcServer.create(eventloop)\n        .withSerializerBuilder(SerializerBuilder.create())\n        .withMessageTypes(PutRequest.class, PutResponse.class, GetRequest.class, GetResponse.class)\n        .withHandler(PutRequest.class, req -> Promise.of(new PutResponse(store.put(req.getKey(), req.getValue()))))\n        .withHandler(GetRequest.class, req -> Promise.of(new GetResponse(store.get(req.getKey()))))\n        .withListenPort(RPC_SERVER_PORT);\n  }\n}\n")),(0,i.kt)("p",null,"As you can see, in order to properly define an ",(0,i.kt)(l.Z,{text:"RpcServer",url:"/cloud-rpc/src/main/java/io/activej/rpc/server/RpcServer.java",mdxType:"Githublink"})," we have indicated all the message classes that are sent between client and server, and have specified the appropriate ",(0,i.kt)(l.Z,{text:"RpcRequestHandler",url:"/cloud-rpc/src/main/java/io/activej/rpc/server/RpcRequestHandler.java",mdxType:"Githublink"})," for each request class."),(0,i.kt)("p",null,"We have represented them as the second arguments in these lines using lambdas."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},".withHandler(PutRequest.class, req -> Promise.of(new PutResponse(store.put(req.getKey(), req.getValue()))))\n.withHandler(GetRequest.class, req -> Promise.of(new GetResponse(store.get(req.getKey()))))\n")),(0,i.kt)("p",null,"Next, let's look at the ",(0,i.kt)(l.Z,{url:"/examples/tutorials/rpc-kv-storage/src/main/java/ServerLauncher.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"ServerLauncher"))," for the RPC server. ",(0,i.kt)("a",{parentName:"p",href:"/boot/launcher"},"ActiveJ Launcher")," is used here to manage application lifecycle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/ServerLauncher.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ServerLauncher.java",tag:"EXAMPLE"},"public class ServerLauncher extends Launcher {\n  @Inject\n  private RpcServer server;\n\n  @Override\n  protected Module getModule() {\n    return combine(\n        ServiceGraphModule.create(),\n        new ServerModule());\n  }\n\n  @Override\n  protected void run() throws Exception {\n    awaitShutdown();\n  }\n\n  public static void main(String[] args) throws Exception {\n    ServerLauncher launcher = new ServerLauncher();\n    launcher.launch(args);\n  }\n}\n")),(0,i.kt)("p",null,"Since we have extended ",(0,i.kt)("strong",{parentName:"p"},"Launcher")," class, we also had to override 2 methods: ",(0,i.kt)("em",{parentName:"p"},"getModule")," to provide ",(0,i.kt)("a",{parentName:"p",href:"/boot/servicegraph"},"ServiceGraphModule")," and ",(0,i.kt)("em",{parentName:"p"},"run")," to describe the main logic of the example."),(0,i.kt)("p",null,"Now, let's look at the RPC client. We have once again indicated all the message classes that are used for communication and have specified the ",(0,i.kt)("a",{parentName:"p",href:"/rpc/basic-examples#round-robin-strategy"},"RPC strategy"),". All strategies can be combined, but since we have only one server, we use a ",(0,i.kt)(l.Z,{text:"single-server",url:"/cloud-rpc/src/main/java/io/activej/rpc/client/sender/RpcStrategySingleServer.java",mdxType:"Githublink"})," strategy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/ClientModule.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ClientModule.java",tag:"EXAMPLE"},'public class ClientModule extends AbstractModule {\n  private static final int RPC_SERVER_PORT = 5353;\n\n  @Provides\n  Eventloop eventloop() {\n    return Eventloop.create()\n        .withEventloopFatalErrorHandler(rethrow())\n        .withCurrentThread();\n  }\n\n  @Provides\n  RpcClient rpcClient(Eventloop eventloop) {\n    return RpcClient.create(eventloop)\n        .withConnectTimeout(Duration.ofSeconds(1))\n        .withSerializerBuilder(SerializerBuilder.create())\n        .withMessageTypes(PutRequest.class, PutResponse.class, GetRequest.class, GetResponse.class)\n        .withStrategy(RpcStrategies.server(new InetSocketAddress("localhost", RPC_SERVER_PORT)));\n  }\n}\n')),(0,i.kt)("p",null,"Let's also look at ",(0,i.kt)(l.Z,{text:"ClientLauncher",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ClientLauncher.java",mdxType:"Githublink"}),". In ",(0,i.kt)("inlineCode",{parentName:"p"},"run()")," we are considering command line arguments and make appropriate requests to ",(0,i.kt)("strong",{parentName:"p"},"RpcServer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/ClientLauncher.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ClientLauncher.java",tag:"EXAMPLE"},'public class ClientLauncher extends Launcher {\n  private static final int TIMEOUT = 1000;\n\n  @Inject\n  private RpcClient client;\n\n  @Inject\n  Eventloop eventloop;\n\n  @Override\n  protected Module getModule() {\n    return combine(\n        ServiceGraphModule.create(),\n        new ClientModule());\n  }\n\n  @Override\n  protected void run() throws Exception {\n    if (args.length < 2) {\n      System.err.println("Command line args:\\n\\t--put key value\\n\\t--get key");\n      return;\n    }\n\n    switch (args[0]) {\n      case "--put":\n        CompletableFuture<PutResponse> future1 = eventloop.submit(() ->\n            client.sendRequest(new PutRequest(args[1], args[2]), TIMEOUT)\n        );\n        PutResponse putResponse = future1.get();\n        System.out.println("PutResponse: " + putResponse);\n        break;\n      case "--get":\n        CompletableFuture<GetResponse> future2 = eventloop.submit(() ->\n            client.sendRequest(new GetRequest(args[1]), TIMEOUT)\n        );\n        GetResponse getResponse = future2.get();\n        System.out.println("GetResponse: " + getResponse);\n        break;\n      default:\n        throw new RuntimeException("Unsupported option: " + args[0]);\n    }\n  }\n\n  public static void main(String[] args) throws Exception {\n    ClientLauncher launcher = new ClientLauncher();\n    launcher.launch(args);\n  }\n}\n')),(0,i.kt)("p",null,"Congratulations! We've finished exploring the code for this app."),(0,i.kt)("h3",{id:"testing"},"Testing"),(0,i.kt)("p",null,"First, launch the server. Open ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerLauncher")," class and run its ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," method."),(0,i.kt)("p",null,"Then make a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request. Open ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientLauncher")," class which is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"activej/examples/tutorials/rpc-kv-storage"),"\nand set up program arguments to ",(0,i.kt)("inlineCode",{parentName:"p"},"--put key1 value1"),". For IntelliJ IDEA: ",(0,i.kt)("inlineCode",{parentName:"p"},"Run -> Edit configurations ->\n|Run/Debug Configurations -> |Program arguments -> --put key1 value1||"),". Then run launcher's ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," method."),(0,i.kt)("p",null,"You will see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PutResponse: {previousValue='null'}\n")),(0,i.kt)("p",null,"Finally, make a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request."),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientLauncher")," class again and set up program arguments to ",(0,i.kt)("inlineCode",{parentName:"p"},"--get key1"),". For IntelliJ IDEA: ",(0,i.kt)("inlineCode",{parentName:"p"},"Run ->\nEdit configurations -> |Run/Debug Configurations -> |Program arguments -> --get key1||"),". Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," method of the\nclient launcher."),(0,i.kt)("p",null,"You will see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"GetResponse: {value='value1'}\n")),(0,i.kt)("p",null,"Congratulations, you've just launched a remote key-value storage with RPC communication protocol!"))}m.isMDXComponent=!0}}]);