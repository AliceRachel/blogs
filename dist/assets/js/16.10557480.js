(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{192:function(e,t,s){"use strict";s.r(t);var i=s(0),r=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("笔者认为，读源码需要从全局到局部，先了解整个源码的目录结构，懂得项目里有哪些内容，然后列举出来，再通过个人兴趣研究点，逐个攻破。比如通读Vue目录结构，里面有core/compile/weex/ssr等，再提取出研究的web核心：双向数据绑定/组件系统/事件/生命周期/ast编译/vnode等。读源码切忌一行一行分析，这样容易陷入局部思考，也容易有挫折感。源码也不是只读一遍就能理解，所以需要反复回溯，细细思考。")]),e._v(" "),s("p",[e._v("源码分析顺序：")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("下图整理了vue初始化流程以及代码流转，建议配合"),s("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/prepare/entrance.html#vue-%E7%9A%84%E5%85%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js技术揭秘"),s("OutboundLink")],1),e._v("文章去了解。")]),e._v(" "),e._m(10)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vue2-0源码分析-框架结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue2-0源码分析-框架结构","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue2.0源码分析 - 框架结构")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("看过Vue源码有一段时间了，对里面的研究也有一些心得。对于Vue源码分析文章，笔者以前不是很想写，因为网上有太多优质的Vue源码分析文章，笔者读源码时也受益于此。但思维的转变，发生在一次团队Code Review。笔者所在的团队主要使用Vue技术栈(团队小伙伴都是多面手，一专多能)，但有些小伙伴受限于业务开发，Vue停留在API使用层。所以笔者组织大家对Vue进行源码分析，各自分工并且每周Code Review分享给所有人，借此提升团队的工作效率，也形成一个良好的团队氛围。故以文字记录下来，一方面沉淀自己，另一方面也为团队code review做备忘录。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("目录结构")]),this._v(" "),t("li",[this._v("核心内容")]),this._v(" "),t("li",[this._v("重点突破")]),this._v(" "),t("li",[this._v("回归溯源")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录结构")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("思维导图可以清晰的了解到全局内容。看目录结构，除去build打包，类型定义以及ssr/weex，能了解到我们研究的核心就"),t("code",[this._v("compiler、core、platforms.web")]),this._v("三个文件夹。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/45196761-6daeb100-b290-11e8-89fd-31e965e1fcee.png",alt:"image"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"核心内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心内容","aria-hidden":"true"}},[this._v("#")]),this._v(" 核心内容")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("通过分析，按照工作常用API权重配比，优先研究"),t("code",[this._v("vue core")]),this._v("，接下来插件"),t("code",[this._v("plugin")]),this._v("，最后再其他细枝末节"),t("code",[this._v("detail")]),this._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/45197180-85873480-b292-11e8-909d-37cc2dbdc5b2.png",alt:"image"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"整体流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 整体流程")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/6310131/45197312-1231f280-b293-11e8-83e0-93c4844924c9.png",alt:"image"}})])}],!1,null,null,null);r.options.__file="vue-code-frame.md";t.default=r.exports}}]);