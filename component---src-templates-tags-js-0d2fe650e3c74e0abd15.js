(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{MN1z:function(e,t,a){"use strict";a.r(t),a.d(t,"tagPageQuery",(function(){return m}));var n=a("dI71"),s=a("q1tI"),l=a.n(s),r=a("qhky"),i=a("Wbzz"),o=a("7oih"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges.map((function(e){return l.a.createElement("li",{key:e.node.fields.slug},l.a.createElement(i.a,{to:e.node.fields.slug},l.a.createElement("h2",{className:"is-size-2"},e.node.frontmatter.title)))})),t=this.props.pageContext.tag,a=this.props.data.site.siteMetadata.title,n=this.props.data.allMarkdownRemark.totalCount,s=n+" post"+(1===n?"":"s")+" tagged with “"+t+"”";return l.a.createElement(o.a,null,l.a.createElement("section",{className:"section"},l.a.createElement(r.a,{title:t+" | "+a}),l.a.createElement("div",{className:"container content"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-10 is-offset-1",style:{marginBottom:"6rem"}},l.a.createElement("h3",{className:"title is-size-4 is-bold-light"},s),l.a.createElement("ul",{className:"taglist"},e),l.a.createElement("p",null,l.a.createElement(i.a,{to:"/tags/"},"Browse all tags")))))))},t}(l.a.Component);t.default=c;var m="4099979173"}}]);
//# sourceMappingURL=component---src-templates-tags-js-0d2fe650e3c74e0abd15.js.map