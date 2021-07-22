(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[4529],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return x},useMDXComponents:function(){return m},withMDXComponents:function(){return l}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),l=function(e){return function(n){var t=m(n.components);return o.createElement(e,a({},n,{components:t}))}},m=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=m(t),p=r,f=l["".concat(c,".").concat(p)]||l[p]||u[p]||a;return t?o.createElement(f,s(s({ref:n},d),{},{components:t})):o.createElement(f,s({ref:n},d))}));function x(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var d=2;d<a;d++)c[d]=t[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77618:function(e,n,t){"use strict";var o=t(95318).default;n.Z=void 0;var r=o(t(67294)),a=o(t(39962)),c=function(e){var n=e.url,t=e.text,o=e.isInline,c=void 0===o||o,s=e.children,i=(0,a.default)().siteConfig;return r.default.createElement("a",{style:c?{}:{display:"block",marginBottom:"16px"},href:i.customFields.githubUrl+"/"+i.customFields.githubBranch+n,target:"_blank"},t||s)};n.Z=c},77815:function(e,n,t){"use strict";var o=t(95318).default;n.Z=void 0;o(t(67294));var r=o(t(39962)),a=function(e){var n=e.name,t=(0,r.default)().siteConfig;if(!n)throw new Error("Variable name is required");if(void 0===t.customFields[n])throw new Error("Variable "+n+" not exist");return t.customFields[n]};n.Z=a},54080:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var o=t(22122),r=t(19756),a=(t(67294),t(3905)),c=t(77618),s=t(77815),i=["components"],d={title:"ActiveJ | Codec, fast and efficient tool for encoding and decoding custom objects",description:"Fast and efficient codec for encoding and decoding custom objects of different complexity - POJOs, collections, JSONs, etc.",keywords:["codec","decode","encode","java","java codec","custom codec","json codec","java framework"]},l={unversionedId:"misc/codec",id:"misc/codec",isDocsHomePage:!1,title:"Codec",description:"Fast and efficient codec for encoding and decoding custom objects of different complexity - POJOs, collections, JSONs, etc.",source:"@site/docs/misc/codec.mdx",sourceDirName:"misc",slug:"/misc/codec",permalink:"/misc/codec",version:"current",frontMatter:{title:"ActiveJ | Codec, fast and efficient tool for encoding and decoding custom objects",description:"Fast and efficient codec for encoding and decoding custom objects of different complexity - POJOs, collections, JSONs, etc.",keywords:["codec","decode","encode","java","java codec","custom codec","json codec","java framework"]},sidebar:"docs",previous:{title:"Bytebuf",permalink:"/misc/bytebuf"}},m=[{value:"Examples",id:"examples",children:[{value:"Structured Binary Example",id:"structured-binary-example",children:[]},{value:"Structured JSON Example",id:"structured-json-example",children:[]},{value:"Structured Collection Example",id:"structured-collection-example",children:[]}]}],p={toc:m};function u(e){var n=e.components,t=(0,r.default)(e,i);return(0,a.mdx)("wrapper",(0,o.default)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Codec module allows to encode and decode custom objects in a fast and efficient way."),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"To run the examples, you need to clone ActiveJ from GitHub"),(0,a.mdx)("pre",{parentName:"div"},(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/activej/activej\n")),(0,a.mdx)("p",{parentName:"div"},"And import it as a Maven project. Check out tag ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)(s.Z,{name:"currentVersion",mdxType:"Variable"})),". Before running the examples, build the project.\nThese examples are located at ",(0,a.mdx)("inlineCode",{parentName:"p"},"activej/examples/core/codec")))),(0,a.mdx)("p",null,"All of these examples utilize two utility classes. The first one is a simple POJO ",(0,a.mdx)("inlineCode",{parentName:"p"},"Person")," with three values: ",(0,a.mdx)("em",{parentName:"p"},"id"),",\n",(0,a.mdx)("em",{parentName:"p"},"name"),", ",(0,a.mdx)("em",{parentName:"p"},"dateOfBirth"),". The second one is ",(0,a.mdx)("inlineCode",{parentName:"p"},"Registry")," that contains a configured ",(0,a.mdx)(c.Z,{url:"/util-codec/src/main/java/io/activej/codec/registry/CodecRegistry.java",mdxType:"Githublink"},(0,a.mdx)("inlineCode",{parentName:"p"},"CodecRegistry"))," needed for encoding/decoding ",(0,a.mdx)("inlineCode",{parentName:"p"},"Person")," objects:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codec/src/main/java/util/Registry.java tag=EXAMPLE",url:"/examples/core/codec/src/main/java/util/Registry.java",tag:"EXAMPLE"},'public final class Registry {\n  public static final CodecRegistry REGISTRY = CodecRegistry.create()\n      .with(LocalDate.class, StructuredCodec.of(\n          in -> LocalDate.parse(in.readString()),\n          (out, item) -> out.writeString(item.toString())))\n      .with(Person.class, registry -> object(Person::new,\n          "id", Person::getId, INT_CODEC,\n          "name", Person::getName, STRING_CODEC,\n          "date of birth", Person::getDateOfBirth, registry.get(LocalDate.class)));\n}\n')),(0,a.mdx)("h3",{id:"structured-binary-example"},"Structured Binary Example"),(0,a.mdx)("p",null,"In this example we encode ",(0,a.mdx)("inlineCode",{parentName:"p"},"Person")," ",(0,a.mdx)("em",{parentName:"p"},"john")," instance to ",(0,a.mdx)("inlineCode",{parentName:"p"},"ByteBuf")," and then decode it back to ",(0,a.mdx)("inlineCode",{parentName:"p"},"Person"),". To perform such\noperations, we first need to create a ",(0,a.mdx)(c.Z,{url:"/util-codec/src/main/java/io/activej/codec/StructuredCodec.java",mdxType:"Githublink"},(0,a.mdx)("inlineCode",{parentName:"p"},"StructuredCodec")),"\nand then use it for ",(0,a.mdx)("em",{parentName:"p"},"encode")," and ",(0,a.mdx)("em",{parentName:"p"},"decode")," operations."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codec/src/main/java/CodecStructuredBinaryExample.java tag=EXAMPLE",url:"/examples/core/codec/src/main/java/CodecStructuredBinaryExample.java",tag:"EXAMPLE"},'public final class CodecStructuredBinaryExample {\n  public static void main(String[] args) throws MalformedDataException {\n    StructuredCodec<Person> PERSON_CODEC = Registry.REGISTRY.get(Person.class);\n\n    Person john = new Person(121, "John", LocalDate.of(1990, 3, 12));\n    System.out.println("Person before encoding: " + john);\n\n    ByteBuf byteBuf = BinaryUtils.encode(PERSON_CODEC, john);\n    Person decodedPerson = BinaryUtils.decode(PERSON_CODEC, byteBuf);\n    System.out.println("Person after encoding: " + decodedPerson);\n    System.out.println("Persons are equal? : " + john.equals(decodedPerson));\n  }\n}\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)(c.Z,{url:"/examples/core/codec/src/main/java/CodecStructuredBinaryExample.java",mdxType:"Githublink"},"See this example on GitHub"))),(0,a.mdx)("h3",{id:"structured-json-example"},"Structured JSON Example"),(0,a.mdx)("p",null,"This example represents how to encode/decode objects to/from JSONs:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codec/src/main/java/CodecStructuredJsonExample.java tag=EXAMPLE",url:"/examples/core/codec/src/main/java/CodecStructuredJsonExample.java",tag:"EXAMPLE"},'public final class CodecStructuredJsonExample {\n  public static void main(String[] args) throws MalformedDataException {\n    StructuredCodec<Person> PERSON_CODEC = Registry.REGISTRY.get(Person.class);\n\n    Person sarah = new Person(124, "Sarah", LocalDate.of(1992, 6, 27));\n    System.out.println("Person before encoding: " + sarah);\n\n    String json = JsonUtils.toJson(PERSON_CODEC, sarah);\n    System.out.println("Object as json: " + json);\n\n    Person decodedPerson = JsonUtils.fromJson(PERSON_CODEC, json);\n    System.out.println("Person after encoding: " + decodedPerson);\n    System.out.println("Persons are equal? : " + sarah.equals(decodedPerson));\n    System.out.println();\n  }\n}\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)(c.Z,{url:"/examples/core/codec/src/main/java/CodecStructuredJsonExample.java",mdxType:"Githublink"},"See this example on GitHub"))),(0,a.mdx)("h3",{id:"structured-collection-example"},"Structured Collection Example"),(0,a.mdx)("p",null,"In this example we perform encode/decode operations on a List and a Map of two ",(0,a.mdx)("inlineCode",{parentName:"p"},"Person")," objects to/from JSONs:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/codec/src/main/java/CodecStructuredCollectionsExample.java tag=EXAMPLE",url:"/examples/core/codec/src/main/java/CodecStructuredCollectionsExample.java",tag:"EXAMPLE"},'public final class CodecStructuredCollectionsExample {\n  private static final StructuredCodec<Person> PERSON_CODEC = Registry.REGISTRY.get(Person.class);\n  private static final Person john = new Person(121, "John", LocalDate.of(1990, 3, 12));\n  private static final Person sarah = new Person(124, "Sarah", LocalDate.of(1992, 6, 27));\n\n  private static void encodeDecodeList() throws MalformedDataException {\n    List<Person> persons = new ArrayList<>(asList(john, sarah));\n\n    StructuredCodec<List<Person>> listCodec = StructuredCodecs.ofList(PERSON_CODEC);\n    System.out.println("Persons before encoding: " + persons);\n\n    String json = JsonUtils.toJson(listCodec, persons);\n    System.out.println("List as json: " + json);\n\n    List<Person> decodedPersons = JsonUtils.fromJson(listCodec, json);\n    System.out.println("Persons after encoding: " + decodedPersons);\n    System.out.println("Persons are equal? : " + persons.equals(decodedPersons));\n    System.out.println();\n  }\n\n  private static void encodeDecodeMap() throws MalformedDataException {\n    Map<Integer, Person> personsMap = new HashMap<>();\n    personsMap.put(sarah.getId(), sarah);\n    personsMap.put(john.getId(), john);\n\n    StructuredCodec<Map<Integer, Person>> mapCodec = StructuredCodecs.ofMap(INT_CODEC, PERSON_CODEC);\n    System.out.println("Map of persons before encoding: " + personsMap);\n\n    String json = JsonUtils.toJson(mapCodec, personsMap);\n    System.out.println("Map as json: " + json);\n\n    Map<Integer, Person> decodedPersons = JsonUtils.fromJson(mapCodec, json);\n    System.out.println("Map of persons after encoding: " + decodedPersons);\n    System.out.println("Maps are equal? : " + personsMap.equals(decodedPersons));\n  }\n\n  public static void main(String[] args) throws MalformedDataException {\n    encodeDecodeList();\n    encodeDecodeMap();\n  }\n}\n')),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)(c.Z,{url:"/examples/core/codec/src/main/java/CodecStructuredCollectionsExample.java",mdxType:"Githublink"},"See this example on GitHub"))))}u.isMDXComponent=!0}}]);