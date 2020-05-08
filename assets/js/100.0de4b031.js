(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{493:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浅谈函数式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅谈函数式编程"}},[t._v("#")]),t._v(" 浅谈函数式编程")]),t._v(" "),a("p",[t._v("程序设计时，各语言只是实现的过程，目的都相同：清晰可读易扩展。表现在设计原则：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("可扩展")]),t._v(" - 需求变了，能不改动以前的代码，而是拥有扩展的能力（设计模式就是从中总结出来的一些经验）。")]),t._v(" "),a("li",[a("code",[t._v("可重用")]),t._v(" - 避免到处是重复的代码，万一逻辑变动，所有地方都得改。")]),t._v(" "),a("li",[a("code",[t._v("模块化")]),t._v(" - 拆分模块，使得各模块各司其职，而不是杂柔在一起（大型项目必备）")]),t._v(" "),a("li",[a("code",[t._v("可推理")]),t._v(" - 读代码次数比写代码次数多，易于维护")]),t._v(" "),a("li",[a("code",[t._v("可测试")]),t._v(" - 代码健壮性")])]),t._v(" "),a("p",[t._v("在符合以上基础原则上，可以使用任何语言去实现最终的程序。但现实是各语言都有各自特点以及适用场景，实现同一个功能，可能一个及其简单，一个复杂。比如JavaScript是一种动态类型语言，函数也是类型的一种(当作对象类型)，所以可以把函数当作参数值进行传递（这就是FP(functional programming)中常说的函数天生是“一等公民”）。而Java这种强类型面向对象语言，是无法把定义的函数/方法当作一个参数，传入到另外一个函数/方法中。两者的编程风格区别看以下案例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js函数式编程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数作为参数值传入，使得逻辑更清晰并且无污染")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("funciton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js命令式编程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相比函数式，1. 更多的中间状态，如mapArr 2. 逻辑可读性差 3. 代码复用差")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mapArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mapArp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// java命令式编程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义的参数互相串行，复用性差")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// filter")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" filterArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filterArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// map")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MapArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filterArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("以上得知，不同语言受限于语法不同，代码风格不一致。同一种语言（如：js）实现相同的功能，风格也大不一样，如上面的“函数式编程实现”以及“命令式编程实现”。所以"),a("code",[t._v("函数式编程是一种编程风格，也可以说是编程范式")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("编程范式是如何编写程序的方法论。")])]),t._v(" "),a("h2",{attrs:{id:"函数式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程"}},[t._v("#")]),t._v(" 函数式编程")]),t._v(" "),a("p",[t._v("以函数作为主要载体的编程方式，用函数去拆解、抽象一般的表达式。它的目的是使用函数来"),a("code",[t._v("抽象作用在数据之上的控制流和操作")]),t._v("，从而在系统中"),a("code",[t._v("消除副作用")]),t._v("以及"),a("code",[t._v("减少对状态的改变")]),t._v("。")]),t._v(" "),a("p",[t._v("函数式编程旨在尽可能的提高代码的无状态性和不变性。要做到这一点，就要学会使用纯函数。"),a("code",[t._v("纯函数，就是无副作用的函数")]),t._v('。所谓"副作用"（side effect），指的是函数内部与外部互动（最典型的情况，就是修改全局变量的值），产生运算以外的其他结果。\n函数式编程强调没有"副作用"，意味着函数要保持独立，所有功能就是返回一个新的值，没有其他行为，尤其是不得修改外部变量的值。')]),t._v(" "),a("p",[t._v("所以"),a("code",[t._v("函数式编程有如下特性")]),t._v("：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v('函数是"第一等公民"')]),t._v("。指的是函数与其他数据类型一样，处于平等地位，可以赋值给其他变量，也可以作为参数，传入另一个函数，或者作为别的函数的返回值。")]),t._v(" "),a("li",[a("code",[t._v("不修改状态")]),t._v("。不得修改外部变量的值")]),t._v(" "),a("li",[a("code",[t._v("引用透明")]),t._v("。同样的输入，那么函数总是返回同样的结果（单元测试梦寐以求的）")]),t._v(" "),a("li",[a("code",[t._v("无副作用")]),t._v("。调用函数只会计算出结果，不会出现其他效果。")])]),t._v(" "),a("p",[t._v("以上决定了"),a("code",[t._v("函数式编程有如下优点")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("语义更加清晰")]),t._v(" "),a("li",[t._v("可复用性更高(函数为可调用的最小单位)")]),t._v(" "),a("li",[t._v("可维护性更好(只需关注表达式的内部的实现，更易定位bug)")]),t._v(" "),a("li",[t._v("作用域局限，副作用少")])]),t._v(" "),a("blockquote",[a("p",[t._v("面向对象编程通过封装变化使得代码易于理解。")])]),t._v(" "),a("blockquote",[a("p",[t._v("函数式编程通过最小变化使得代码易于理解。")])]),t._v(" "),a("h2",{attrs:{id:"常见的函数式编程模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的函数式编程模型"}},[t._v("#")]),t._v(" 常见的函数式编程模型")]),t._v(" "),a("p",[t._v("以函数作为主要载体的编程方式：")]),t._v(" "),a("ul",[a("li",[t._v("闭包（Closure）")]),t._v(" "),a("li",[t._v("高阶函数。接受1个或多个函数作为输入或输出一个函数的函数。简单说"),a("code",[t._v("高阶函数是操作其他函数的函数。")]),t._v(" "),a("ul",[a("li",[t._v("map")]),t._v(" "),a("li",[t._v("filter")]),t._v(" "),a("li",[t._v("reduce")])])]),t._v(" "),a("li",[t._v("柯里化（Currying）\n"),a("ul",[a("li",[t._v("Currying 为实现多参函数提供了一个递归降解的实现思路——把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数")]),t._v(" "),a("li",[t._v("使用场景\n"),a("ul",[a("li",[t._v("参数复用")]),t._v(" "),a("li",[t._v("延迟执行")])])]),t._v(" "),a("li",[t._v("实现方式\n"),a("ul",[a("li",[t._v("bind语法糖 使得JSX可以绑定数据，同时延迟执行")]),t._v(" "),a("li",[t._v("箭头函数 使得JSX延迟执行")]),t._v(" "),a("li",[t._v("自定义curry函数")])])])])]),t._v(" "),a("li",[t._v("组合(Composing)/ 管道(Pipe)")])]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://taobaofed.org/blog/2017/03/16/javascript-functional-programing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("我眼中的 JavaScript 函数式编程"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://juejin.im/post/5af13664f265da0ba266efcf",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 柯里化，了解一下"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/HDOXCMRk_nd59cY9rWXsOQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("函数式编程，真香"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=r.exports}}]);