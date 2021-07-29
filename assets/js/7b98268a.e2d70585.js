(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1970],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return c},kt:function(){return u}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?t.createElement(g,o(o({ref:n},c),{},{components:a})):t.createElement(g,o({ref:n},c))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77618:function(e,n,a){"use strict";var t=a(67294),r=a(39962);n.Z=function(e){var n=e.url,a=e.text,i=e.isInline,o=void 0===i||i,l=e.children,s=(0,r.Z)().siteConfig;return t.createElement("a",{style:o?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+s.customFields.githubBranch+n,target:"_blank"},a||l)}},65942:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var t=a(22122),r=a(19756),i=(a(67294),a(3905)),o=a(77618),l=["components"],s={sidebar_label:"Binding transformations"},p="Binding transformations",c={unversionedId:"inject/binding-transformations",id:"inject/binding-transformations",isDocsHomePage:!1,title:"Binding transformations",description:"In this tutorial we will transform bindings declared in a separate standalone module. We will intercept a dependency exported in another module and",source:"@site/docs/inject/binding-transformations.mdx",sourceDirName:"inject",slug:"/inject/binding-transformations",permalink:"/inject/binding-transformations",version:"current",frontMatter:{sidebar_label:"Binding transformations"},sidebar:"docs",previous:{title:"Class scanning",permalink:"/inject/class-scanning"},next:{title:"Basic",permalink:"/inject/basic"}},d=[{value:"Example Launcher",id:"example-launcher",children:[]},{value:"Person module",id:"person-module",children:[]},{value:"Person transformation module",id:"person-transformation-module",children:[]},{value:"Launching the example",id:"launching-the-example",children:[]}],m={toc:d};function u(e){var n=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"binding-transformations"},"Binding transformations"),(0,i.kt)("p",null,"In this tutorial we will transform bindings declared in a separate standalone module. We will intercept a dependency exported in another module and\ntransform it so that it adds some basic logging before executing the method and after the method finishes."),(0,i.kt)("h2",{id:"example-launcher"},"Example Launcher"),(0,i.kt)("p",null,"First, we will create a new Launcher by extending a ",(0,i.kt)(o.Z,{url:"//launcher/src/main/java/io/activej/launcher/Launcher.java",mdxType:"Githublink"},(0,i.kt)("inlineCode",{parentName:"p"},"Launcher"))," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class BindingTransformationExample extends Launcher {\n    ...\n}\n")),(0,i.kt)("p",null,"Then let's define a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," interface with a single method ",(0,i.kt)("inlineCode",{parentName:"p"},"void greet()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_5",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_5"},"public interface Person {\n  void greet();\n}\n")),(0,i.kt)("p",null,"And inject an instance of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class into the application launcher by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"person")," field annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject")," annotation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_1",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_1"},"@Inject\nPerson person;\n")),(0,i.kt)("p",null,"Our application launcher overrides ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher#run")," method just to call ",(0,i.kt)("inlineCode",{parentName:"p"},"person.greet()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_3",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_3"},"@Override\nprotected void run() {\n  person.greet();\n}\n")),(0,i.kt)("h2",{id:"person-module"},"Person module"),(0,i.kt)("p",null,"An application launcher would use 2 modules to inject a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person person")," dependency. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_2",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_2"},"@Override\nprotected Module getModule() {\n  return Modules.combine(\n      new PersonModule(),\n      new PersonTransformModule()\n  );\n}\n")),(0,i.kt)("p",null,"The first one (",(0,i.kt)("inlineCode",{parentName:"p"},"PersonModule"),") is a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractModule")," that provides a single dependency for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_6",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_6"},'public static class PersonModule extends AbstractModule {\n  @Provides\n  Person greeter() {\n    return () -> System.out.println("Hello!");\n  }\n}\n')),(0,i.kt)("p",null,"A provided ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," simply prints ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello!"')," when ",(0,i.kt)("inlineCode",{parentName:"p"},"greet()")," method is called."),(0,i.kt)("h2",{id:"person-transformation-module"},"Person transformation module"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"PersonTransformModule")," is a module that would intercept a provided ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class and add logging to ",(0,i.kt)("inlineCode",{parentName:"p"},"greet()")," method calls."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_7",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_7"},'public static class PersonTransformModule extends AbstractModule {\n  @Override\n  protected void configure() {\n    transform(0, (bindings, scope, key, binding) -> {\n      if (!Person.class.isAssignableFrom(key.getRawType())) {\n        // Ignore any class that is not Person\n        return binding;\n      }\n\n      return binding.mapInstance(person ->\n          (Person) () -> {\n            System.out.println("Start of greeting");\n            ((Person) person).greet();\n            System.out.println("End of greeting");\n          }\n      );\n    });\n  }\n}\n')),(0,i.kt)("p",null,"The module does not export any dependency using ",(0,i.kt)("inlineCode",{parentName:"p"},"@Provides")," annotation. Instead it overrides ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractModule#configure")," method just to call ",(0,i.kt)("inlineCode",{parentName:"p"},"transform(...)")," method.\nLet's take a closer look at ",(0,i.kt)("inlineCode",{parentName:"p"},"transform(...)")," call. It takes 2 arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int priority")," - that is used to resolve conflicting transformations, we can ignore it here and pass ",(0,i.kt)("inlineCode",{parentName:"li"},"0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BindingTransformer<T>")," - a transformer which is itself a functional interfaces that takes bindings, scope, current key and binding\nand returns a new binding (or the same binding if no transformation happened)")),(0,i.kt)("p",null,"First, we check a ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," to make sure that we transform a binding for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class. If a key does not match a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class we return the binding without any transformation."),(0,i.kt)("p",null,"If it is in fact a binding for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," class we call ",(0,i.kt)("inlineCode",{parentName:"p"},"Binding#mapInstance")," method and specify how an instance of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," should be transformed.\nHere, we return a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," instance that adds some ",(0,i.kt)("inlineCode",{parentName:"p"},"System.out")," logging before and after calling ",(0,i.kt)("inlineCode",{parentName:"p"},"person.greet()")," on an original person instance. "),(0,i.kt)("h2",{id:"launching-the-example"},"Launching the example"),(0,i.kt)("p",null,"To launch the example we need to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," method which would simply create a new instance of our application launcher and pass application arguments to ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher#launch")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/inject-2/src/main/java/BindingTransformationExample.java tag=REGION_4",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",tag:"REGION_4"},"public static void main(String[] args) throws Exception {\n  BindingTransformationExample launcher = new BindingTransformationExample();\n  launcher.launch(args);\n}\n")),(0,i.kt)("p",null,"When launching the application it should print to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Start of greeting\nHello!\nEnd of greeting\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Binding transformations will be greatly improved and simplified in ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveJ v5.0")),(0,i.kt)("p",{parentName:"div"},"It would feature a ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," pattern matching to determine whether or not to transform a given binding."))),(0,i.kt)("p",null,"You can find example sources on ",(0,i.kt)(o.Z,{text:"GitHub",url:"/examples/core/inject-2/src/main/java/BindingTransformationExample.java",mdxType:"Githublink"})))}u.isMDXComponent=!0}}]);