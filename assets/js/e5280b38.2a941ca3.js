(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[93],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),v=r,d=m["".concat(s,".").concat(v)]||m[v]||p[v]||i;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77618:function(e,t,n){"use strict";var a=n(95318).default;t.Z=void 0;var r=a(n(67294)),i=a(n(39962)),l=function(e){var t=e.url,n=e.text,a=e.isInline,l=void 0===a||a,o=e.children,s=(0,i.default)().siteConfig;return r.default.createElement("a",{style:l?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+t,target:"_blank"},n||o)};t.Z=l},77815:function(e,t,n){"use strict";var a=n(95318).default;t.Z=void 0;a(n(67294));var r=a(n(39962)),i=function(e){var t=e.name,n=(0,r.default)().siteConfig;if(!t)throw new Error("Variable name is required");if(void 0===n.customFields[t])throw new Error("Variable "+t+" not exist");return n.customFields[t]};t.Z=i},29818:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return v}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=n(77815),o=n(77618),s=["components"],u={keywords:"java,java framework,tutorial,guide,rpc,client-server,web application,key-value storage",description:"Create a key-value storage with high performance RPC communication protocol"},p={unversionedId:"rpc/key-value-storage",id:"rpc/key-value-storage",isDocsHomePage:!1,title:"Key-Value Storage",description:"Create a key-value storage with high performance RPC communication protocol",source:"@site/docs/rpc/key-value-storage.mdx",sourceDirName:"rpc",slug:"/rpc/key-value-storage",permalink:"/docs/rpc/key-value-storage",version:"current",frontMatter:{keywords:"java,java framework,tutorial,guide,rpc,client-server,web application,key-value storage",description:"Create a key-value storage with high performance RPC communication protocol"},sidebar:"docs",previous:{title:"Basic Examples",permalink:"/docs/rpc/basic-examples"},next:{title:"Memcached-like Application",permalink:"/docs/rpc/memcached-like-application"}},c=[{value:"What you will need:",id:"what-you-will-need",children:[]},{value:"To proceed with this guide you have 2 options:",id:"to-proceed-with-this-guide-you-have-2-options",children:[]},{value:"Working Example",id:"working-example",children:[]},{value:"Step-by-step guide",id:"step-by-step-guide",children:[{value:"1. Set up the project",id:"1-set-up-the-project",children:[]},{value:"2. Define basic app functionality",id:"2-define-basic-app-functionality",children:[]},{value:"3. Create client and server",id:"3-create-client-and-server",children:[]}]},{value:"Testing",id:"testing",children:[]}],m={toc:c};function v(e){var t=e.components,n=(0,r.default)(e,s);return(0,i.kt)("wrapper",(0,a.default)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guide we will create a remote key-value storage which will have 2 basic operations: ",(0,i.kt)("inlineCode",{parentName:"p"},"put")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),". When\nwriting distributed application the common concern is what protocol to use for communication. There are two main\noptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP/REST"),(0,i.kt)("li",{parentName:"ul"},"RPC")),(0,i.kt)("p",null,"While HTTP is more popular and well-specified, it has some overhead. When performance is a significant aspect of application,\nyou should use something faster. For this purpose ActiveJ RPC was designed based on\nfast serializers and custom optimized communication protocol that allows to significantly improve application performance."),(0,i.kt)("h2",{id:"what-you-will-need"},"What you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IDE or terminal"),(0,i.kt)("li",{parentName:"ul"},"JDK 1.8+"),(0,i.kt)("li",{parentName:"ul"},"Maven 3.0+")),(0,i.kt)("h2",{id:"to-proceed-with-this-guide-you-have-2-options"},"To proceed with this guide you have 2 options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download and run ",(0,i.kt)("a",{parentName:"li",href:"#working-example"},"working example")),(0,i.kt)("li",{parentName:"ul"},"Follow ",(0,i.kt)("a",{parentName:"li",href:"#step-by-step-guide"},"step-by-step guide"))),(0,i.kt)("h2",{id:"working-example"},"Working Example"),(0,i.kt)("p",null,"To run the example in IDE, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/activej/activej.git"},"clone ActiveJ project")," locally first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/activej/activej.git\n")),(0,i.kt)("p",null,"And import it as a Maven project. Check out branch ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.Z,{name:"currentVersion",mdxType:"Variable"})),"."),(0,i.kt)("p",null,"Before running the example, build the project (",(0,i.kt)("strong",{parentName:"p"},"Ctrl + F9")," for IntelliJ IDEA)."),(0,i.kt)("p",null,"Then, go to ",(0,i.kt)("a",{parentName:"p",href:"#testing"},"testing")," section."),(0,i.kt)("h2",{id:"step-by-step-guide"},"Step-by-step guide"),(0,i.kt)("h3",{id:"1-set-up-the-project"},"1. Set up the project"),(0,i.kt)("p",null,"First, create a folder for application and build an appropriate project structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"remote-key-value-storage\n\u2514\u2500\u2500 pom.xml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main\n        \u2514\u2500\u2500 java\n            \u2514\u2500\u2500 GetRequest.java\n            \u2514\u2500\u2500 GetResponse.java\n            \u2514\u2500\u2500 PutRequest.java\n            \u2514\u2500\u2500 PutResponse.java\n            \u2514\u2500\u2500 KeyValueStore.java\n            \u2514\u2500\u2500 ServerModule.java\n            \u2514\u2500\u2500 ServerLauncher.java\n            \u2514\u2500\u2500 ClientModule.java\n            \u2514\u2500\u2500 ClientLauncher.java\n")),(0,i.kt)("p",null,"Next, configure your ",(0,i.kt)(o.Z,{text:"pom.xml",url:"/examples/tutorials/rpc-kv-storage/pom.xml",mdxType:"Githublink"})," file like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"url=/examples/tutorials/rpc-kv-storage/pom.xml",url:"/examples/tutorials/rpc-kv-storage/pom.xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>io.activej</groupId>\n  <artifactId>tutorial-rpc-kv-storage</artifactId>\n  <version>4.3</version>\n\n  <name>Tutorials : Rpc-KV-Storage</name>\n\n  <properties>\n    <maven.compiler.source>1.8</maven.compiler.source>\n    <maven.compiler.target>1.8</maven.compiler.target>\n  </properties>\n\n  <dependencies>\n    <dependency>\n      <groupId>io.activej</groupId>\n      <artifactId>activej-boot</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>io.activej</groupId>\n      <artifactId>activej-rpc</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>ch.qos.logback</groupId>\n      <artifactId>logback-classic</artifactId>\n      <version>1.2.3</version>\n    </dependency>\n  </dependencies>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.codehaus.mojo</groupId>\n        <artifactId>exec-maven-plugin</artifactId>\n        <executions>\n          <execution>\n            <id>ClientLauncher</id>\n            <goals>\n              <goal>java</goal>\n            </goals>\n            <configuration>\n              <mainClass>ClientLauncher</mainClass>\n            </configuration>\n          </execution>\n          <execution>\n            <id>ServerLauncher</id>\n            <goals>\n              <goal>java</goal>\n            </goals>\n            <configuration>\n              <mainClass>ServerLauncher</mainClass>\n            </configuration>\n          </execution>\n        </executions>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n\n')),(0,i.kt)("h3",{id:"2-define-basic-app-functionality"},"2. Define basic app functionality"),(0,i.kt)("p",null,"Since we have two basic operations to implement (",(0,i.kt)("inlineCode",{parentName:"p"},"put")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"), let's start with writing down classes that will be used for communication between client and server, specifically ",(0,i.kt)(o.Z,{text:"PutRequest",url:"/examples/tutorials/rpc-kv-storage/src/main/java/PutRequest.java",mdxType:"Githublink"}),", ",(0,i.kt)(o.Z,{text:"PutResponse",url:"/examples/tutorials/rpc-kv-storage/src/main/java/PutResponse.java",mdxType:"Githublink"}),","),(0,i.kt)(o.Z,{text:"GetRequest",url:"/examples/tutorials/rpc-kv-storage/src/main/java/GetRequest.java",mdxType:"Githublink"}),", and ",(0,i.kt)(o.Z,{text:"GetResponse",url:"/examples/tutorials/rpc-kv-storage/src/main/java/GetResponse.java",mdxType:"Githublink"}),". Instances of these classes will be serialized by lightning-fast serializer library [ActiveJ Serializer](/docs/serializer/overview). It requires some meta information about these classes, which is provided by appropriate annotations. The basic rules are:",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)(o.Z,{text:"@Serialize",url:"/core-serializer/src/main/java/io/activej/serializer/annotations/Serialize.java",mdxType:"Githublink"})," annotation with an order number on the getter of property. Ordering provides better compatibility in case classes are changed."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)(o.Z,{text:"@Deserialize",url:"/core-serializer/src/main/java/io/activej/serializer/annotations/Deserialize.java",mdxType:"Githublink"})," annotation with a property name (which should be the same as the one in the getter) in constructor."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)(o.Z,{text:"@SerializeNullable",url:"/core-serializer/src/main/java/io/activej/serializer/annotations/SerializeNullable.java",mdxType:"Githublink"})," on properties that can have null values.")),(0,i.kt)("p",null,"Therefore, classes for communication should look like following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/PutRequest.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/PutRequest.java",tag:"EXAMPLE"},'public class PutRequest {\n\n  private final String key;\n  private final String value;\n\n  public PutRequest(@Deserialize("key") String key, @Deserialize("value") String value) {\n    this.key = key;\n    this.value = value;\n  }\n\n  @Serialize(order = 0)\n  public String getKey() {\n    return key;\n  }\n\n  @Serialize(order = 1)\n  public String getValue() {\n    return value;\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/PutResponse.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/PutResponse.java",tag:"EXAMPLE"},"public class PutResponse {\n  private final String previousValue;\n\n  public PutResponse(@Deserialize(\"previousValue\") String previousValue) {\n    this.previousValue = previousValue;\n  }\n\n  @Serialize(order = 0)\n  @SerializeNullable\n  public String getPreviousValue() {\n    return previousValue;\n  }\n\n  @Override\n  public String toString() {\n    return \"{previousValue='\" + previousValue + '\\'' + '}';\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/GetRequest.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/GetRequest.java",tag:"EXAMPLE"},'public class GetRequest {\n\n  private final String key;\n\n  public GetRequest(@Deserialize("key") String key) {\n    this.key = key;\n  }\n\n  @Serialize(order = 0)\n  public String getKey() {\n    return key;\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/GetResponse.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/GetResponse.java",tag:"EXAMPLE"},"public class GetResponse {\n  private final String value;\n\n  public GetResponse(@Deserialize(\"value\") String value) {\n    this.value = value;\n  }\n\n  @Serialize(order = 0)\n  @SerializeNullable\n  public String getValue() {\n    return value;\n  }\n\n  @Override\n  public String toString() {\n    return \"{value='\" + value + '\\'' + '}';\n  }\n}\n")),(0,i.kt)("p",null,"Next, let's write a simple implementation of key-value storage ",(0,i.kt)(o.Z,{text:"@KeyValueStore",url:"/examples/tutorials/rpc-kv-storage/src/main/java/KeyValueStore.java",mdxType:"Githublink"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/KeyValueStore.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/KeyValueStore.java",tag:"EXAMPLE"},"public class KeyValueStore {\n\n  private final Map<String, String> store = new HashMap<>();\n\n  public String put(String key, String value) {\n    return store.put(key, value);\n  }\n\n  public String get(String key) {\n    return store.get(key);\n  }\n}\n")),(0,i.kt)("h3",{id:"3-create-client-and-server"},"3. Create client and server"),(0,i.kt)("p",null,"Now, let's write down an ",(0,i.kt)(o.Z,{text:"AbstractModule",url:"/core-inject/src/main/java/io/activej/inject/module/AbstractModule.java",mdxType:"Githublink"})," for the RPC server using ",(0,i.kt)("a",{parentName:"p",href:"/docs/inject/overview"},"ActiveJ Inject")," dependency injection library to handle the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"put")," requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/ServerModule.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ServerModule.java",tag:"EXAMPLE"},"public class ServerModule extends AbstractModule {\n  private static final int RPC_SERVER_PORT = 5353;\n\n  @Provides\n  Eventloop eventloop() {\n    return Eventloop.create()\n        .withFatalErrorHandler(rethrowOnAnyError());\n  }\n\n  @Provides\n  KeyValueStore keyValueStore() {\n    return new KeyValueStore();\n  }\n\n  @Provides\n  RpcServer rpcServer(Eventloop eventloop, KeyValueStore store) {\n    return RpcServer.create(eventloop)\n        .withSerializerBuilder(SerializerBuilder.create())\n        .withMessageTypes(PutRequest.class, PutResponse.class, GetRequest.class, GetResponse.class)\n        .withHandler(PutRequest.class, req -> Promise.of(new PutResponse(store.put(req.getKey(), req.getValue()))))\n        .withHandler(GetRequest.class, req -> Promise.of(new GetResponse(store.get(req.getKey()))))\n        .withListenPort(RPC_SERVER_PORT);\n  }\n}\n")),(0,i.kt)("p",null,"As you can see, in order to properly create an ",(0,i.kt)(o.Z,{text:"RpcServer",url:"/cloud-rpc/src/main/java/io/activej/rpc/server/RpcServer.java",mdxType:"Githublink"})," we should indicate all the classes that will be sent between client and server, and specify the appropriate ",(0,i.kt)(o.Z,{text:"RpcRequestHandler",url:"/cloud-rpc/src/main/java/io/activej/rpc/server/RpcRequestHandler.java",mdxType:"Githublink"})," for each request class."),(0,i.kt)("p",null,"We represent them as the third arguments in these lines using lambdas."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},".withHandler(PutRequest.class, PutResponse.class, req -> Promise.of(new PutResponse(store.put(req.getKey(), req.getValue()))))\n.withHandler(GetRequest.class, GetResponse.class, req -> Promise.of(new GetResponse(store.get(req.getKey()))))\n")),(0,i.kt)("p",null,"Next, create ",(0,i.kt)(o.Z,{text:"ServerLauncher",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ServerLauncher.java",mdxType:"Githublink"})," for the RPC server. Use ",(0,i.kt)("a",{parentName:"p",href:"/docs/boot/launcher"},"ActiveJ Launcher")," to manage application lifecycle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/ServerLauncher.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ServerLauncher.java",tag:"EXAMPLE"},"public class ServerLauncher extends Launcher {\n  @Inject\n  private RpcServer server;\n\n  @Override\n  protected Module getModule() {\n    return combine(\n        ServiceGraphModule.create(),\n        new ServerModule());\n  }\n\n  @Override\n  protected void run() throws Exception {\n    awaitShutdown();\n  }\n\n  public static void main(String[] args) throws Exception {\n    ServerLauncher launcher = new ServerLauncher();\n    launcher.launch(args);\n  }\n}\n")),(0,i.kt)("p",null,"Since we extend ",(0,i.kt)("strong",{parentName:"p"},"Launcher"),", we will also override 2 methods: ",(0,i.kt)("em",{parentName:"p"},"getModule")," to provide ",(0,i.kt)("a",{parentName:"p",href:"/docs/boot/servicegraph"},(0,i.kt)("strong",{parentName:"a"},"ServiceGraphModule"))," and ",(0,i.kt)("em",{parentName:"p"},"run")," to describe the main logic of the example."),(0,i.kt)("p",null,"Now, let's write the RPC client. We should indicate all the classes that will be used for communication and specify the ",(0,i.kt)("a",{parentName:"p",href:"/docs/rpc/basic-examples#round-robin-strategy"},"RPC strategy"),". All strategies can be combined, but since we have only one server, we will use ",(0,i.kt)(o.Z,{text:"single-server",url:"/cloud-rpc/src/main/java/io/activej/rpc/client/sender/RpcStrategySingleServer.java",mdxType:"Githublink"})," strategy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/ClientModule.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ClientModule.java",tag:"EXAMPLE"},'public class ClientModule extends AbstractModule {\n  private static final int RPC_SERVER_PORT = 5353;\n\n  @Provides\n  Eventloop eventloop() {\n    return Eventloop.create()\n        .withFatalErrorHandler(rethrowOnAnyError())\n        .withCurrentThread();\n  }\n\n  @Provides\n  RpcClient rpcClient(Eventloop eventloop) {\n    return RpcClient.create(eventloop)\n        .withConnectTimeout(Duration.ofSeconds(1))\n        .withSerializerBuilder(SerializerBuilder.create())\n        .withMessageTypes(PutRequest.class, PutResponse.class, GetRequest.class, GetResponse.class)\n        .withStrategy(RpcStrategies.server(new InetSocketAddress("localhost", RPC_SERVER_PORT)));\n  }\n}\n')),(0,i.kt)("p",null,"Let's also build ",(0,i.kt)(o.Z,{text:"ClientLauncher",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ClientLauncher.java",mdxType:"Githublink"}),". In ",(0,i.kt)("inlineCode",{parentName:"p"},"run()")," we will consider command line arguments and make appropriate requests to ",(0,i.kt)("strong",{parentName:"p"},"RpcServer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/tutorials/rpc-kv-storage/src/main/java/ClientLauncher.java tag=EXAMPLE",url:"/examples/tutorials/rpc-kv-storage/src/main/java/ClientLauncher.java",tag:"EXAMPLE"},'public class ClientLauncher extends Launcher {\n  private static final int TIMEOUT = 1000;\n\n  @Inject\n  private RpcClient client;\n\n  @Inject\n  Eventloop eventloop;\n\n  @Override\n  protected Module getModule() {\n    return combine(\n        ServiceGraphModule.create(),\n        new ClientModule());\n  }\n\n  @Override\n  protected void run() throws Exception {\n    if (args.length < 2) {\n      System.err.println("Command line args:\\n\\t--put key value\\n\\t--get key");\n      return;\n    }\n\n    switch (args[0]) {\n      case "--put":\n        CompletableFuture<PutResponse> future1 = eventloop.submit(() ->\n            client.sendRequest(new PutRequest(args[1], args[2]), TIMEOUT)\n        );\n        PutResponse putResponse = future1.get();\n        System.out.println("PutResponse: " + putResponse);\n        break;\n      case "--get":\n        CompletableFuture<GetResponse> future2 = eventloop.submit(() ->\n            client.sendRequest(new GetRequest(args[1]), TIMEOUT)\n        );\n        GetResponse getResponse = future2.get();\n        System.out.println("GetResponse: " + getResponse);\n        break;\n      default:\n        throw new RuntimeException("Unsupported option: " + args[0]);\n    }\n  }\n\n  public static void main(String[] args) throws Exception {\n    ClientLauncher launcher = new ClientLauncher();\n    launcher.launch(args);\n  }\n}\n')),(0,i.kt)("p",null,"Congratulations! We've finished writing the code for this app."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"First, launch server. Open ",(0,i.kt)("strong",{parentName:"p"},"ServerLauncher")," class and run its ",(0,i.kt)("em",{parentName:"p"},"main()")," method."),(0,i.kt)("p",null,"Then make a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request. Open ",(0,i.kt)("strong",{parentName:"p"},"ClientLauncher")," class which is located at ",(0,i.kt)("strong",{parentName:"p"},"activej -> examples -> tutorials -> rpc-kv-storage"),"\nand set up program arguments to ",(0,i.kt)("inlineCode",{parentName:"p"},"--put key1 value1"),". For IntelliJ IDEA: ",(0,i.kt)("inlineCode",{parentName:"p"},"Run -> Edit configurations ->\n|Run/Debug Configurations -> |Program arguments -> --put key1 value1||"),". Then run launcher's ",(0,i.kt)("em",{parentName:"p"},"main()")," method."),(0,i.kt)("p",null,"You will see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PutResponse: {previousValue='null'}\n")),(0,i.kt)("p",null,"Finally, make a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request."),(0,i.kt)("p",null,"Open ",(0,i.kt)("strong",{parentName:"p"},"ClientLauncher")," class again and set up program arguments to ",(0,i.kt)("inlineCode",{parentName:"p"},"--get key1"),". For IntelliJ IDEA: ",(0,i.kt)("inlineCode",{parentName:"p"},"Run ->\nEdit configurations -> |Run/Debug Configurations -> |Program arguments -> --get key1||"),". Then run ",(0,i.kt)("em",{parentName:"p"},"main()")," method of the\nclient launcher."),(0,i.kt)("p",null,"You will see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"GetResponse: {value='value1'}\n")),(0,i.kt)("p",null,"Congratulations, you've just created a remote key-value storage with RPC communication protocol!"))}v.isMDXComponent=!0}}]);