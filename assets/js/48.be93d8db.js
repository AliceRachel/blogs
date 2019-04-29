(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{400:function(t,s,a){"use strict";a.r(s);var n=a(9),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue2-x源码分析-模版编译以及挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x源码分析-模版编译以及挂载","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue2.x源码分析 - 模版编译以及挂载")]),t._v(" "),a("p",[t._v("由于2.x版本中引入虚拟DOM的缘故，Vue支持模板和手写render两种方式（也支持jsx，属于第三方插件帮你转换为render函数；当然模板方式最终也是转换为render函数，但属于官方内置编译器），官方推荐模板这种写法，降低使用门槛。")]),t._v(" "),a("p",[t._v("Vue是如何解析模板并挂载到真实的DOM上呢？")]),t._v(" "),a("h2",{attrs:{id:"api层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api层","aria-hidden":"true"}},[t._v("#")]),t._v(" API层")]),t._v(" "),a("p",[t._v("先看下Vue API层是如何使用的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 使用Vue.prototype.$mount(el)或者放在options.el里")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("template"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$mount")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" template"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"源码层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码层","aria-hidden":"true"}},[t._v("#")]),t._v(" 源码层")]),t._v(" "),a("p",[t._v("以下看下笔者简化的源码流程，注意高亮的关键代码：\n带编译器入口： platforms/entry-runtime-with-compiler.js")]),t._v(" "),a("h3",{attrs:{id:"_1-解析template模板，得到render函数并绑定到vue选项上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-解析template模板，得到render函数并绑定到vue选项上","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 解析template模板，得到render函数并绑定到Vue选项上")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("const { render } = compileToFunctions(options.template, ...)")]),t._v(" "),a("ul",[a("li",[t._v("const { compileToFunctions } = "),a("code",[t._v("createCompiler")]),t._v("(baseOptions) 'src/platforms/web/compiler/index.js'\n"),a("ul",[a("li",[t._v("const createCompiler = createCompilerCreator("),a("code",[t._v("baseCompile(template, options)")]),t._v(") 'src/compiler/index.js'\n"),a("ol",[a("li",[a("code",[t._v("ast = parse(template.trim(), options)")]),t._v(" 解析模板字符串生成 AST 'src/compiler/parser/index.js'\n"),a("ul",[a("li",[t._v("parse 的过程是利用正则表达式顺序解析模板，当解析到开始标签、闭合标签、文本的时候都会分别执行对应的回调函数，来达到构造 AST 树的目的。")]),t._v(" "),a("li",[t._v("type 为 1 表示是普通元素，为 2 表示是表达式，为 3 表示是纯文本")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// AST数据结构")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 最终生成的是一颗AST树结构")]),t._v("\ndeclare type ASTElement "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    tag"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    attrsList"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    attrsMap"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    parent"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ASTElement "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("ASTNode"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ASTNode = ASTElement | ASTText | ASTExpression;")]),t._v("\n\n    processed"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    staticRoot"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    staticInFor"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    staticProcessed"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    hasBindings"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    text"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    attrs"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    props"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    plain"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    pre"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ns"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    component"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    inlineTemplate"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    transitionMode"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    slotName"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    slotTarget"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    slotScope"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    scopedSlots"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ASTElement "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    ref"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    refInFor"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ifProcessed"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    elseif"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ifConditions"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ASTIfConditions"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    forProcessed"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    key"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    alias"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    iterator1"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    iterator2"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    staticClass"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    classBinding"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    staticStyle"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    styleBinding"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    events"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ASTElementHandlers"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    nativeEvents"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ASTElementHandlers"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    transition"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    transitionOnAppear"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    model"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        expression"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    directives"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("ASTDirective"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    forbidden"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    once"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    onceProcessed"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    wrapData"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    wrapListeners"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" string"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 2.4 ssr optimization")]),t._v("\n    ssrOptimizability"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// weex specific")]),t._v("\n    appendAsTree"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("code",[t._v("optimize(ast, options)")]),t._v(" 优化语法树 'src/compiler/optimizer.js'\n"),a("ul",[a("li",[t._v("很多数据是首次渲染后就永远不会变化的，那么这部分数据生成的 DOM 也不会变化，我们可以在 patch 的过程跳过对他们的比对。")]),t._v(" "),a("li",[t._v("只干两件事：1. 标记静态节点 2. 标记静态根（静态根一定是静态节点）")])])]),t._v(" "),a("li",[a("code",[t._v("code = generate(ast, options)")]),t._v(" 生成代码(code对象包含render函数) 'src/compiler/codegen/index.js'\n"),a("ul",[a("li",[t._v("把优化后的 AST 树转换成可执行的代码。可执行代码最终获得VNode（虚拟DOM的基础）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isShow"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("_c")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'ul'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        staticClass"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"list"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bindCls\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("_l")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("_c")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'li'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        on"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"click"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("clickItem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token function"}},[t._v("_v")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("_s")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("_s")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("_e")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])])])])])]),t._v(" "),a("h3",{attrs:{id:"_2-挂载渲染-mount-call-this-el"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-挂载渲染-mount-call-this-el","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 挂载渲染. "),a("code",[t._v("mount.call(this, el)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Vue.prototype.$mount")]),t._v(" 'platforms/web/runtime/index.js'\n"),a("ul",[a("li",[a("code",[t._v("mountComponent")]),t._v(" 'core/instance/lifecycle.js'\n"),a("ul",[a("li",[t._v("new Watch(vm, "),a("code",[t._v("updateComponent")]),t._v(")\n"),a("ol",[a("li",[a("code",[t._v("vm._render()")]),t._v(" 'src/core/instance/render.js'\n"),a("ul",[a("li",[t._v("执行render函数，拿到VNode")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" render "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options\n"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vnode "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" render"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_renderProxy"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$createElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("code",[t._v("vm._update(VNode)")]),t._v(" 'src/core/instance/lifecycle.js'\n"),a("ul",[a("li",[t._v("更新DOM, "),a("code",[t._v("vm.__patch__(preVNode, VNode)")]),t._v(" 'src/platforms/web/runtime/patch.js'\n"),a("ul",[a("li",[a("code",[t._v("createPatchFunction")]),t._v(" 'src/core/vdom/patch.js'\n"),a("ul",[a("li",[t._v("diff等，真正的操作 更新DOM")])])])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevVnode "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("prevVnode"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// initial render")]),t._v("\n    vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("__patch__")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* removeOnly */")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// updates")]),t._v("\n    vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("__patch__")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevVnode"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])])])])])]),t._v(" "),a("h3",{attrs:{id:"一图胜千言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一图胜千言","aria-hidden":"true"}},[t._v("#")]),t._v(" 一图胜千言")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ustbhuangyi.github.io/vue-analysis/assets/new-vue.png",alt:""}})])])},[],!1,null,null,null);o.options.__file="vue-code-how-to-mount-vue.md";s.default=o.exports}}]);