(this["webpackJsonpcountries-details"]=this["webpackJsonpcountries-details"]||[]).push([[0],{43:function(e,t,n){e.exports=n(76)},48:function(e,t,n){},49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),o=n.n(l),i=(n(48),n(49),n(20)),c=n(15),s=n(21),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,countries:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COUNTRIES":return Object(s.a)({},e,{isLoading:!1,errMess:null,countries:t.payload});case"COUNTRIES_LOADING":return Object(s.a)({},e,{isLoading:!0,errMess:null,countries:[]});case"COUNTRIES_FAILED":return Object(s.a)({},e,{isLoading:!1,errMess:t.payload,countries:[]});default:return e}},m=n(39),p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,d=n(10),h=n(11),g=n(12),E=n(13),f=n(40),y=n.n(f),b=function(e){return{type:"ADD_COUNTRIES",payload:e}},v=function(){return{type:"COUNTRIES_LOADING"}},N=function(e){return{type:"COUNTRIES_FAILED",payload:e}},k=n(2),C=n(42),O=n(41),L=n.n(O),P=n(3),x={start:{x:"0%"},end:{x:"100%"}},w={duration:.4,yoyo:1/0,ease:"easeInOut"},M=function(){return r.a.createElement("section",{className:"container container-loading"},r.a.createElement(P.b.section,{className:"loading"},r.a.createElement(P.b.section,null,r.a.createElement(P.b.span,{className:"loading-circle",variants:x,initial:"start",animate:"end",transition:w}),r.a.createElement(P.b.span,{className:"loading-circle",variants:x,initial:"start",animate:"end",transition:w}),r.a.createElement(P.b.span,{className:"loading-circle",variants:x,initial:"start",animate:"end",transition:w}))))},S=n(8),j=n(14),I=n(7);I.b.add(S.f,S.e,S.a);var D=function(e){var t=e.changeName,n=e.isOpen,a=e.handleOpen,l=e.changeRegion,o=e.region;return n?document.addEventListener("click",a):document.removeEventListener("click",a),r.a.createElement("section",{className:"container container-filter"},r.a.createElement("section",{className:"filters"},r.a.createElement("section",{className:"search"},r.a.createElement(j.a,{icon:["fas","search"]}),r.a.createElement("input",{type:"text",placeholder:"Search for a country...",onChange:function(e){return t(e.target.value)}})),r.a.createElement("section",{className:"select"},r.a.createElement("section",{className:"selected",onClick:a},""===o?r.a.createElement("span",null,"Filter by Region"):r.a.createElement("span",null,o),r.a.createElement(j.a,{icon:["fas","angle-down"]})),r.a.createElement("section",{className:"list",style:{transform:n?"scale(1, 1)":"scale(0, 0)"}},r.a.createElement("ul",null,""!==o?r.a.createElement("li",{onClick:function(){a(),l("")}},"All"):null,["Africa","Americas","Asia","Europe","Oceania"].map((function(e){return r.a.createElement("li",{key:Math.random(),onClick:function(){a(),l(e)}},e)})))))))},R=n(9),_={initial:{y:"100vh"},in:{y:"0"},out:{x:"-100vw",transition:{ease:"easeInOut"}}},A={transition:"easeInOut"},F=function(e){var t=e.countries,n=e.state;return r.a.createElement(r.a.Fragment,null,0===t.length?r.a.createElement("p",null,"Sorry, no countries found match ",r.a.createElement("strong",null,n.name)," ",""!==n.region&&"israel"!==n.name.trim().toLowerCase()?r.a.createElement(r.a.Fragment,null,"in ",n.region):null):null,"israel"===n.name.trim().toLowerCase()?r.a.createElement("p",null,"Did you mean ",r.a.createElement(R.b,{to:"/home/PSE"},r.a.createElement("strong",null,"Palestine?"))):null,t.slice(n.offset,n.offset+n.perPage).map((function(e){return r.a.createElement(P.b.section,{className:"box",key:e.name},r.a.createElement(R.b,{to:"/home/".concat(e.alpha3Code)},r.a.createElement("section",{className:"img",style:{backgroundImage:"url(".concat(e.flag,")")}}),r.a.createElement("p",{className:"click"},"Click to view details about ",r.a.createElement("strong",null,e.name)),r.a.createElement("section",{className:"text"},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"Population: ",e.population?r.a.createElement("span",null,e.population.toLocaleString()):r.a.createElement("i",null,"No informations found")),r.a.createElement("p",null,"Region: ",e.region?r.a.createElement("span",null,e.region):r.a.createElement("i",null,"No informations found")),r.a.createElement("p",null,"Capital: ",e.capital?r.a.createElement("span",null,e.capital):r.a.createElement("i",null,"No informations found")))))})))},T=function(e){return e.isDataLoading||e.isComponentLoading?r.a.createElement(M,null):e.errMess?r.a.createElement("p",null,"props.errMess"):r.a.createElement(P.b.section,{variants:_,initial:"initial",animate:"in",exit:"out",transition:A},r.a.createElement(D,{changeName:e.changeName,changeRegion:e.changeRegion,region:e.region,isOpen:e.isOpen,handleOpen:e.handleOpen}),r.a.createElement("section",{className:"container".concat(0===e.countries.length?" container-no-match":"")},r.a.createElement(F,{countries:e.countries,state:e.state})),e.countries.length>12?r.a.createElement("section",{className:"container container-pagination"},r.a.createElement(L.a,{previousLabel:"Prev",nextLabel:"Next",breakLabel:"...",breakClassName:"break",pageCount:Math.ceil(e.countries.length/e.state.perPage),forcePage:e.state.currentPage,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e.handlePageClick,containerClassName:"pagination",activeClassName:"active"})):null)},U=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleOpen=function(){a.setState({isOpen:!a.state.isOpen})},a.changeName=function(e){a.setState({name:e,offset:0,currentPage:0})},a.changeRegion=function(e){a.setState({region:e,offset:0,currentPage:0})},a.handlePageClick=function(e){var t=e.selected,n=t*a.state.perPage;a.setState({currentPage:t,offset:n})},a.state={offset:0,perPage:12,currentPage:0,name:"",region:"",isLoading:!0,isOpen:!1},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(T,{isComponentLoading:this.state.isLoading,isDataLoading:this.props.isLoading,errMess:this.props.errMess,animating:this.props.prepareAnimating,countries:this.props.countries.filter((function(t){var n=e.state.name.trim().toLowerCase(),a=t.name.trim().toLowerCase(),r=""===e.state.name,l=""===e.state.region,o=a.includes(n),i=n===t.alpha2Code.trim().toLowerCase(),c=n===t.alpha3Code.trim().toLowerCase(),s=t.altSpellings.filter((function(e){return n.length>4?e.trim().toLowerCase().includes(n):e.trim().toLowerCase()===n})),u=t.nativeName.trim().toLowerCase().includes(n),m=o||i||c||function(){var e,t=Object(C.a)(s);try{for(t.s();!(e=t.n()).done;){return e.value}}catch(n){t.e(n)}finally{t.f()}}()||u,p=e.state.region===t.region;return r&&l?t:!r&&l?m:!l&&r?p:p&&m})),state:this.state,changeName:this.changeName,changeRegion:this.changeRegion,region:this.state.region,isOpen:this.state.isOpen,handleOpen:this.handleOpen,handlePageClick:this.handlePageClick})}}]),n}(a.Component);I.b.add(S.f,S.b);var B={initial:{x:"100vw"},in:{x:"0"},out:{x:"-100vw",transition:{ease:"easeInOut"}}},J={transition:"linear"},W=function(e){var t=e.country,n=e.countries;return r.a.createElement("section",{className:"box details",key:t.alpha3Code},r.a.createElement("section",{className:"img",style:{backgroundImage:"url(".concat(t.flag,")")}},"            "),r.a.createElement("section",{className:"text"},r.a.createElement("section",{className:"info"},r.a.createElement("section",null,r.a.createElement("h2",null,t.name)),r.a.createElement("section",{className:"main"},r.a.createElement("section",null,r.a.createElement("p",null,"Native Name: ",t.nativeName?r.a.createElement("span",null,t.nativeName):r.a.createElement("i",null,"No informations found")),r.a.createElement("p",null,"Population: ",t.population?r.a.createElement("span",null,t.population.toLocaleString()):r.a.createElement("i",null,"No informations found")),r.a.createElement("p",null,"Region: ",t.region?r.a.createElement("span",null,t.region):r.a.createElement("i",null,"No informations found")),r.a.createElement("p",null,"Sub Region: ",t.subregion?r.a.createElement("span",null,t.subregion):r.a.createElement("i",null,"No informations found")),r.a.createElement("p",null,"Capital: ",t.capital?r.a.createElement("span",null,t.capital):r.a.createElement("i",null,"No informations found"))),r.a.createElement("section",{className:"other-info"},r.a.createElement("p",null,"Top Level Domain: ",0!==t.topLevelDomain.length?t.topLevelDomain.map((function(e,t){return r.a.createElement("span",{key:Math.random()},(t?", ":"")+e)})):r.a.createElement("i",null,"No informations found")),r.a.createElement("p",null,"Currencies: ",0!==t.currencies.length?t.currencies.map((function(e,t){return r.a.createElement("span",{key:Math.random()},(t?", ":"")+e.name)})):r.a.createElement("i",null,"No informations found")),r.a.createElement("p",null,"Languages: ",0!==t.languages.length?t.languages.map((function(e,t){return r.a.createElement("span",{key:Math.random()},(t?", ":"")+e.name)})):r.a.createElement("i",null,"No informations found"))))),r.a.createElement("section",{className:"borders"},r.a.createElement("p",null,"Border Countries: ",0!==t.borders.length?t.borders.map((function(e){return n.filter((function(t){return t.alpha3Code===e})).map((function(e){return r.a.createElement(R.b,{to:"/home/".concat(e.alpha3Code),key:e.alpha3Code},r.a.createElement("span",null,e.name," "))}))})):r.a.createElement("i",null,"No informations found")))))},G=function(){return r.a.createElement("section",{className:"filters",style:{position:"relative",margin:"0 auto 0 0"}},r.a.createElement(R.b,{to:"/home",className:"btn"},r.a.createElement(j.a,{style:{position:"absolute",top:"10px",left:"10px"},icon:["fas","arrow-left"]})," Back"))},X=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLoading:!0},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1})}},{key:"render",value:function(){return void 0!==this.props.country?r.a.createElement(P.b.section,{variants:B,initial:"initial",animate:"in",exit:"out",transition:J,style:{overflow:"hidden"}},r.a.createElement("section",{className:"container",style:{display:"flex",padding:"3% 5% 20px 5%"}},r.a.createElement(G,null)),r.a.createElement("section",{className:"container",style:{display:"block"}},r.a.createElement(W,{country:this.props.country,countries:this.props.countries}))):this.props.isLoading||this.state.isLoading?r.a.createElement(M,null):this.props.errMess?r.a.createElement("p",null,this.props.errMess):null}}]),n}(a.Component),q=n(27);I.b.add(q.a,S.d),I.b.add(q.a,S.c);var V=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).checkIfChecked=function(e){var t=document.documentElement;e.checked?(t.style.setProperty("--bg","hsl(207, 26%, 17%)"),t.style.setProperty("--elements","hsl(209, 23%, 22%)"),t.style.setProperty("--text","hsl(0, 0%, 100%)"),t.style.setProperty("--shadow","1px 1px 8px rgba(0, 0, 0, 0.2)"),t.style.setProperty("--input","hsl(0, 0%, 100%)"),t.style.setProperty("--focused","#3E505B")):(t.style.setProperty("--bg","hsl(0, 0%, 98%)"),t.style.setProperty("--elements","hsl(0, 0%, 100%)"),t.style.setProperty("--text","hsl(200, 15%, 8%)"),t.style.setProperty("--shadow","1px 1px 8px rgba(0, 0, 0, 0.1)"),t.style.setProperty("--input","hsl(0, 0%, 52%)"),t.style.setProperty("--focused","#F5F5F5"))},a.handleCheck=function(e){localStorage.setItem("checked",e.target.checked),a.checkIfChecked(e.target),a.setState({checked:e.target.checked})},a.state={checked:JSON.parse(localStorage.getItem("checked"))},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=document.querySelector(".header input");e.checked=this.state.checked,this.checkIfChecked(e)}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("section",{className:"header"},r.a.createElement("h2",null,"Where in the world?"),r.a.createElement("label",null,this.state.checked?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{icon:["far","lightbulb"]})," ",r.a.createElement("span",null,"Light Mode")):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{icon:["far","moon"]})," ",r.a.createElement("span",null,"Dark Mode")),r.a.createElement("input",{type:"checkbox",onClick:this.handleCheck}))))}}]),n}(a.Component),$=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchCountries()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(P.a,{exitBeforeEnter:!0},r.a.createElement(k.d,{location:this.props.location,key:this.props.location.pathname},r.a.createElement(k.b,{exact:!0,path:"/home",component:function(){return r.a.createElement(U,{countries:e.props.countries,isLoading:e.props.isLoading,errMess:e.props.errMess})}}),r.a.createElement(k.b,{path:"/home/:alpha3Code",component:function(t){var n=t.match;return r.a.createElement(X,{country:e.props.countries.filter((function(e){return n.params.alpha3Code===e.alpha3Code}))[0],countries:e.props.countries,isLoading:e.props.isLoading,errMess:e.props.errMess})}}),r.a.createElement(P.b.section,{exit:"undefined"},r.a.createElement(k.a,{to:"/home"})))))}}]),n}(a.Component),z=Object(k.g)(Object(i.b)((function(e){return{countries:e.countries,isLoading:e.isLoading,errMess:e.errMess}}),(function(e){return{fetchCountries:function(){e((function(e){e(v(!0)),y.a.get("https://restcountries.eu/rest/v2/all").then((function(t){return e(b(t.data.filter((function(e){return"Palestine, State of"===e.name?e.name="Palestine":"Israel"!==e.name}))))})).catch((function(t){return e(N(t.message))}))}))}}}))($));var H=function(){return r.a.createElement(i.a,{store:Object(c.d)(u,p(Object(c.a)(m.a)))},r.a.createElement(R.a,null,r.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.e81a8c2b.chunk.js.map