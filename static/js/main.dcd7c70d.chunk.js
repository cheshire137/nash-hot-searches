(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports={socrataApi:{appToken:"MqE8MXblHyd0rfJ7EsKhLPsih"}}},14:function(e,t,n){e.exports=n(27)},20:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(11),c=n.n(o),s=(n(20),n(3)),i=n(4),l=n(6),u=n(5),h=n(7),f=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"getJSON",value:function(){if(!window.localStorage)return console.error("browser does not support local storage"),{};var e=window.localStorage.getItem("nash-hot-searches")||"{}";return JSON.parse(e)}},{key:"get",value:function(e){return this.getJSON()[e]}},{key:"set",value:function(e,t){var n=this.getJSON();n[e]=t,window.localStorage.setItem("nash-hot-searches",JSON.stringify(n))}},{key:"delete",value:function(e){var t=this.getJSON();delete t[e],window.localStorage.setItem("nash-hot-searches",JSON.stringify(t))}}]),e}(),m=n(8),y=n.n(m),d=n(9),p=function(){function e(t,n){Object(s.a)(this,e),this.appToken=t,this.baseUrl=n}return Object(i.a)(e,[{key:"urlFor",value:function(e){return"".concat(this.baseUrl).concat(e||"")}},{key:"get",value:function(){var e=Object(d.a)(y.a.mark(function e(t,n){var a,r,o,c,s,i,l;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.urlFor(t),r=f.get("cached-urls")||{},o=f.get("cached-responses")||{},c=new Date,!r[a]){e.next=9;break}if(s=new Date(r[a]),u=c,h=s,!(Math.abs(u.getTime()-h.getTime())/864e5<=1)){e.next=9;break}return console.log("using cached data for",a),e.abrupt("return",o[a]);case 9:return console.log("GET",a),e.next=12,window.fetch(a,{method:"GET",headers:{"Content-Type":"application/json","X-App-Token":this.appToken}});case 12:return i=e.sent,e.next=15,i.json();case 15:return l=e.sent,o[a]=n(l),r[a]=c,f.set("cached-urls",r),f.set("cached-responses",o),e.abrupt("return",o[a]);case 21:case"end":return e.stop()}var u,h},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),v=function(){function e(t){Object(s.a)(this,e),t.query_count?this.count=parseInt(t.query_count,10):this.count=t.count,this.query=t.query_text||t.query,this.year=parseInt(t.year,10),this.month=t.month_name||t.month}return Object(i.a)(e,[{key:"date",value:function(){if(this.year&&this.month)return new Date(this.year,function(e){switch(e.toLowerCase()){case"january":return 0;case"february":return 1;case"march":return 2;case"april":return 3;case"may":return 4;case"june":return 5;case"july":return 6;case"august":return 7;case"september":return 8;case"october":return 9;case"november":return 10;default:return 11}}(this.month),1)}},{key:"compareDate",value:function(e){var t=this.date(),n=e.date();return t<n?-1:t>n?1:0}},{key:"matches",value:function(e){var t=e.year;return this.matchesYear(t)}},{key:"matchesYear",value:function(e){return e&&this.year.toString()===e||"all"===e}}]),e}(),g="https://data.nashville.gov/resource/fuaa-r5cm.json",b=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e,g))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getMonthlySearches",value:function(){var e=Object(d.a)(y.a.mark(function e(){var t,n,a,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=encodeURIComponent("year DESC"),n="?$limit=50000&$order=".concat(t),a=function(e){return e.map(function(e){return new v(e)})},e.next=5,this.get(n,a);case 5:return r=e.sent,e.abrupt("return",r.map(function(e){return new v(e)}).sort(function(e,t){return t.compareDate(e)}));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(p),j=n(13),O=(n(24),n(25),function(e){var t=e.original;return r.a.createElement("div",{className:"text-center"},t.month," ",t.year)}),S=function(e,t){return e.compareDate(t)},w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.monthlySearches;return e.length<1?null:r.a.createElement(j.a,{filterable:!0,data:e,columns:[{Header:"Query",accessor:"query",headerClassName:"text-bold",minWidth:170},{Header:"Count",accessor:"count",filterable:!1,headerClassName:"text-bold",minWidth:170},{Header:"Date",id:"date",filterable:!1,accessor:function(e){return e},headerClassName:"text-bold",Cell:O,minWidth:170,sortMethod:S}],pageSize:10,showPageSizeOptions:!1,className:"-striped -highlight searches-list"})}}]),t}(a.Component),k=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"uniq",value:function(e){if(!e)return e;var t={},n=function(e){return e.toString()},a={},r=!0,o=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done);r=!0){var l=s.value,u=n(l);a[u]=l,t[u]=1}}catch(h){o=!0,c=h}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return Object.keys(t).map(function(e){return a[e]})}}]),e}(),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){n.props.onChange(e.target.value)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.allYears,n=e.selectedYear,a=k.uniq(t.sort()).reverse();return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"year",className:"mr-1"},"Year:"),r.a.createElement("select",{id:"year",className:"form-select",onChange:this.onChange,value:n},r.a.createElement("option",{value:"all"},"All"),a.map(function(e){return r.a.createElement("option",{value:e,key:e},function(e,t){var n=t.filter(function(t){return t.toString()===e.toString()}).length;return"".concat(e," (").concat(n,")")}(e,t))})))}}]),t}(a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.monthlySearches,n=e.onYearChange,a=e.year,o=t.map(function(e){return e.year});return r.a.createElement("form",{className:"flex-auto flex-justify-end d-flex flex-items-center"},r.a.createElement(E,{onChange:n,selectedYear:a,allYears:o}))}}]),t}(a.Component),N=n(12),C=(n(26),"year"),M=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).filterMonthlySearches=function(e,t){return e.filter(function(e){return e.matches(t)})},n.onDataLoaded=function(e){n.setState(function(t){var a=f.get(C)||t.year||"all";return{monthlySearches:e,isLoading:!1,year:a,filteredMonthlySearches:n.filterMonthlySearches(e,{year:a})}})},n.onYearChange=function(e){f.set(C,e),n.setState(function(t){return{year:e,filteredMonthlySearches:n.filterMonthlySearches(t.monthlySearches,{year:e})}})},n.state={monthlySearches:[],isLoading:!0,filteredMonthlySearches:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){new b(N.socrataApi.appToken).getMonthlySearches().then(this.onDataLoaded)}},{key:"render",value:function(){var e=this.state,t=e.filteredMonthlySearches,n=e.monthlySearches,a=e.isLoading,o=e.year;return r.a.createElement("div",null,r.a.createElement("header",{className:"site-header"},r.a.createElement("div",{className:"container-lg py-2 d-flex flex-items-center flex-justify-between"},r.a.createElement("h1",{className:"f3 text-normal"},"Nashville.gov Top Searches"),a?null:r.a.createElement(x,{monthlySearches:n,onYearChange:this.onYearChange,year:o}))),r.a.createElement("main",{className:"site-main"},r.a.createElement("div",{className:"container-lg"},r.a.createElement(w,{monthlySearches:t}))),r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container-lg text-small py-1 d-flex flex-items-center flex-justify-between"},r.a.createElement("span",null,"Data from ",r.a.createElement("a",{target:"_blank",className:"link-gray",rel:"noopener noreferrer",href:"https://data.nashville.gov/Public-Services/Nashville-gov-Top-500-Monthly-Searches/fuaa-r5cm"},"Nashville.gov - Top 500 Monthly Searches")))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.dcd7c70d.chunk.js.map