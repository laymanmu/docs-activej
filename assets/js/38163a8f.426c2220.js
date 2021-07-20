(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[119],{14304:function(e,a,t){"use strict";var n=t(95318).default,i=t(20862).default;a.Z=void 0;var r=i(t(67294)),l=n(t(21140));l.default.initialize({startOnLoad:!0});var s=function(e){var a=e.chart;return(0,r.useEffect)((function(){l.default.contentLoaded()}),[]),r.default.createElement("div",{className:"mermaid"},a)};a.Z=s},24390:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=t(22122),i=t(19756),r=(t(67294),t(3905)),l=t(14304),s=["components"],o={},c={unversionedId:"specializer/examples",id:"specializer/examples",isDocsHomePage:!1,title:"Examples",description:"Please keep in mind that ActiveJ Specializer is an experimental project, use it cautiously. It doesn't support lambda expressions and may have difficulties with specializing non-trivial instances.",source:"@site/docs/specializer/examples.mdx",sourceDirName:"specializer",slug:"/specializer/examples",permalink:"/docs/specializer/examples",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/specializer/overview"},next:{title:"Overview",permalink:"/docs/rpc/overview"}},p=[{value:"Simple Calculator",id:"simple-calculator",children:[]}],u={toc:p};function m(e){var a=e.components,t=(0,i.default)(e,s);return(0,r.kt)("wrapper",(0,n.default)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please keep in mind that ActiveJ Specializer is an experimental project, use it cautiously. It doesn't support lambda expressions and may have difficulties with specializing non-trivial instances."))),(0,r.kt)("h2",{id:"simple-calculator"},"Simple Calculator"),(0,r.kt)("p",null,"We took this ",(0,r.kt)("a",{href:"https://github.com/jparsec/jparsec/wiki/Tutorial"},"Parsec calculator tutorial")," and adapted it a little bit for ActiveJ Specializer. In the original tutorial Parsec returns parsed expressions as double values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Parser<Double> parser = new OperatorTable<Double>()\n    .infixl(op("+", (l, r) -> l + r), 10)\n    .infixl(op("-", (l, r) -> l - r), 10)\n    .infixl(Parsers.or(term("*"), WHITESPACE_MUL).retn((l, r) -> l * r), 20)\n    .infixl(op("/", (l, r) -> l / r), 20)\n    .prefix(op("-", v -> -v), 30)\n    .build(unit);\n')),(0,r.kt)("p",null,"ActiveJ Specializer shows its bests with tree-like data structures. So we will parse expressions to AST:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static final Parser<CalculatorExpression> EXPRESSION = new OperatorTable<CalculatorExpression>()\n        .infixl(DELIMITERS.token("+").retn(Sum::new), 10)\n        .infixl(DELIMITERS.token("-").retn(Sub::new), 10)\n        .infixl(DELIMITERS.token("*").retn(Mul::new), 20)\n        .infixl(DELIMITERS.token("/").retn(Div::new), 20)\n        .infixl(DELIMITERS.token("%").retn(Mod::new), 20)\n        .prefix(DELIMITERS.token("-").retn(Neg::new), 30)\n        .infixr(DELIMITERS.token("^").retn(Pow::new), 40)\n        .build(ATOM);\n')),(0,r.kt)("p",null,"Assume we have a simple equation ",(0,r.kt)("inlineCode",{parentName:"p"},"3 + 2 * 4"),". According to the parser, the following AST will be created:"),(0,r.kt)(l.Z,{chart:"\ngraph TD\n+ --\x3e 3\n+ --\x3e *\n* --\x3e 2\n* --\x3e 4\n",mdxType:"Mermaid"}),(0,r.kt)("p",null,"Let's test Specializer out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"url=/examples/core/specializer/src/main/java/calculator/SpecializerCalculatorExample.java tag=REGION_2",url:"/examples/core/specializer/src/main/java/calculator/SpecializerCalculatorExample.java",tag:"REGION_2"},'public static void main(String[] args) {\n  double x = -1;\n\n  // manual code, super fast\n  System.out.println(((2.0 + 2.0 * 2.0) * -x) + 5.0 + 1024.0 / (100.0 + 58.0) * 50.0 * 37.0 - 100.0 + 2.0 * (Math.pow(x, 2.0)) % 3.0);\n\n  CalculatorExpression expression = PARSER.parse("((2 + 2 * 2) * -x) + 5 + 1024 / (100 + 58) * 50 * 37 - 100 + 2 * x ^ 2 % 3");\n\n  System.out.println(expression);\n\n  // tree-walking evaluation, super slow\n  System.out.println(expression.evaluate(x));\n\n  // specialized instance evaluation, about as fast as manual code\n  CalculatorExpression specialized = SPECIALIZER.specialize(expression);\n  System.out.println(specialized.evaluate(x));\n}\n')),(0,r.kt)("p",null,"ActiveJ Specializer transforms the AST to a set of static final classes with baked-in values of the provided\nequation. JIT heavily optimizes and inlines these classes while runtime. As a result, we receive an optimized expression\ninstance that can be reused in case we calculate an equation with an unknown value several times."),(0,r.kt)("p",null,"It's time for some benchmarks. Let's try to process an equation\n",(0,r.kt)("inlineCode",{parentName:"p"},"((2 + 2 * 2) * -x) + 5 + 1024 / (100 + 58) * 50 * 37 - 100 + 2 * x ^ 2 % 3")," in three different ways and compare the performance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"manually enter the equation"),(0,r.kt)("li",{parentName:"ul"},"parse the equation to an AST and evaluate it ",(0,r.kt)("strong",{parentName:"li"},"without specialization")),(0,r.kt)("li",{parentName:"ul"},"parse the equation to an AST and evaluate it ",(0,r.kt)("strong",{parentName:"li"},"with specialization"))),(0,r.kt)("p",null,"The results of the benchmark are very illustrative:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Benchmark                        Mode  Cnt    Score   Error  Units\nCalculatorBenchmark.ast          avgt   10  828.924 \xb1 8.369  ns/op\nCalculatorBenchmark.manual       avgt   10  115.985 \xb1 1.009  ns/op\nCalculatorBenchmark.specialized  avgt   10  117.635 \xb1 1.500  ns/op\n")),(0,r.kt)("p",null,"As you can see, a manually typed equations and specialized AST were processed equally fast. ActiveJ Specializer sped\nup AST processing 8 times."))}m.isMDXComponent=!0},11748:function(e,a,t){var n={"./locale":89234,"./locale.js":89234};function i(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=11748}}]);