(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{414:function(t,s,n){"use strict";n.r(s);var a=n(9),p=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("css 垂直居中")]),t._v(" "),n("ul",[n("li",[t._v("inline元素\n"),n("ul",[n("li",[t._v("height和line-height一致")])])]),t._v(" "),n("li",[t._v("block元素\n"),n("ul",[n("li",[t._v("绝对定位（当已知子元素的宽高）\n"),n("ul",[n("li",[t._v("利用父元素相对定位，子元素绝对定位，并且处置、水平方向个偏移50%")]),t._v(" "),n("li",[t._v("子元素利用负值margin偏移自身宽度、长度的一半")])])]),t._v(" "),n("li",[t._v("translate()属性（不知子元素的宽高）\n"),n("ul",[n("li",[t._v("利用父元素相对定位，子元素绝对定位，并且处置、水平方向个偏移50%")]),t._v(" "),n("li",[t._v("子元素transform: translate(-50%, 50%)")])])]),t._v(" "),n("li",[t._v("flex:align-item")]),t._v(" "),n("li",[t._v("grid")]),t._v(" "),n("li",[t._v("display: table-cell")])])])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v("// 绝对定位（当已知子元素的宽高）\n.parent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("position")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".child")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("position")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("top")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("left")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("margin-left")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -100px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("margin-top")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -150px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v("// translate()属性（不知子元素的宽高）\n.parent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("position")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".child")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("position")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("top")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("left")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("transform")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("translate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%, 50%"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v("// flex\ndiv.parent")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("justify-content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("align-items")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v("// grid\ndiv.parent")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v("div.child")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("justify-self")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("align-self")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v("// table\n.parent")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table-cell"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("background-color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("text-align")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("vertical-align")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".child")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("background-color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v("// other\ndiv.parent")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("font-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("text-align")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{attrs:{class:"token selector"}},[t._v(";\n    &::before")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("vertical-align")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v("div.child")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("vertical-align")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);p.options.__file="css垂直居中.md";s.default=p.exports}}]);