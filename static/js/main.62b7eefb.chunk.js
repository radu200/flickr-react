(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(26)},17:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),s=(a(17),a(3)),o=a(4),l=a(7),u=a(5),m=a(6),d=a(1),h=a(2),p=a.n(h),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).extractAuthorName=a.extractAuthorName.bind(Object(d.a)(Object(d.a)(a))),a.extractTags=a.extractTags.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"extractAuthorName",value:function(e){var t=e.indexOf("("),a=e.indexOf(")");return e.slice(t+1,a).replace(/['"]+/g,"")}},{key:"extractTags",value:function(e){return e.split(" ").join(", ")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},this.props.data.map(function(t,a){return r.a.createElement("div",{key:a,className:"card"},r.a.createElement("img",{className:"card-image",alt:t.title,src:t.media.m}),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{className:"card-title",href:t.link},t.title)," ","by"," ",r.a.createElement("a",{className:"author-name",href:"https://www.flickr.com/people/".concat(t.author_id)},e.extractAuthorName(t.author)),r.a.createElement("p",{className:"card-description"},t.description.replace(/<\/?[^>]+(>|$)/g,"")," ")),r.a.createElement("div",{className:"card-footer"},r.a.createElement("p",{className:"card-tags"},"Tags: ",e.extractTags(t.tags))))}))}}]),t}(n.Component);f.protoTypes={data:p.a.arrayOf(p.a.shape({media:p.a.string.isRequired,title:p.a.string.isRequired,description:p.a.string.isRequired,link:p.a.string.isRequired,tags:p.a.string.isRequired}))};var b=f,g=(a(20),function(e){var t=e.onChange,a=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search-container"},r.a.createElement("input",{value:a,onChange:t,className:"search-input",placeholder:"Search",required:!0}),r.a.createElement("button",{className:"search-btn",type:"submit"},"Search")))}),v=(a(21),a(10)),j=a.n(v),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onTextChange=function(e){var t=e.target.value;a.setState({query:t})},a.state={data:[],query:""},a.onTextChange=a.onTextChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;j()("https://api.flickr.com/services/feeds/photos_public.gne?tags=cats&format=json",{param:"jsoncallback"},function(t,a){var n=a.items;e.setState({data:n})})}},{key:"render",value:function(){var e=this,t=this.state.data.filter(function(t){return-1!==t.tags.toLowerCase().indexOf(e.state.query.toLowerCase())});return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{value:this.state.value,onChange:this.onTextChange}),r.a.createElement(b,{data:t}))}}]),t}(n.Component);O.protoTypes={SearchResults:p.a.object.isRequired};var E=O,y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.62b7eefb.chunk.js.map