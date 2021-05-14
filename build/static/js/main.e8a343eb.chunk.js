(this.webpackJsonpempl_directory=this.webpackJsonpempl_directory||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(14),c=n.n(s),a=(n(24),n(25),n(0)),i=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(a.jsx)("p",{className:"text-center",children:"#Click on the columns below to filter or use search for precise results.#"})]})},o=n(3),l=n(4),d=n(15),h=n(16),u=n(19),m=n(18),j=function(e){return Object(a.jsx)("nav",{className:"navbar justify-content-center",children:Object(a.jsx)("form",{className:"form-inline m-2",onSubmit:e.handleFormSubmit,children:Object(a.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search Here"})})})},b=function(e){return Object(a.jsxs)("table",{className:"table table-striped table-sortable text-center",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Image"}),Object(a.jsx)("th",{scope:"col","data-field":"name","data-sortable":"true",children:Object(a.jsx)("span",{onClick:function(){return e.sortBy("name","last","first")},children:"Name"})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsx)("span",{onClick:function(){return e.sortBy("phone")},children:"Phone"})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsx)("span",{onClick:function(){return e.sortBy("email")},children:"Email"})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsx)("span",{onClick:function(){return e.sortBy("dob","date")},children:"DoB"})})]})}),Object(a.jsx)("tbody",{children:e.state.filteredEmployees.map((function(t){var n=t.name,r=n.first,s=n.last,c="".concat(r," ").concat(s),i=e.formatDate(t.dob.date);return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:t.picture.thumbnail,alt:c})}),Object(a.jsx)("td",{className:"align-middle",children:c}),Object(a.jsx)("td",{className:"align-middle",children:Object(a.jsx)("a",{href:"tel:+1".concat(t.phone),children:t.phone})}),Object(a.jsx)("td",{className:"align-middle email",children:Object(a.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})}),Object(a.jsx)("td",{className:"align-middle",children:i})]},t.login.uuid)}))})]})},p=n(17),f=n.n(p),O={getRandomUsers:function(){return f.a.get("https://randomuser.me/api/?results=25&nat=fr&seed=foobar&exc=login,registered")}},x=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={search:"",employees:[],filteredEmployees:[],sortDirections:e.initialSortDirections},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.filterEmployees(n.toLowerCase().trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.sortyBy=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=e.state.filteredEmployees;e.state.sortDirections[t]?e.setState({filteredEmployees:s.reverse(),sortDirections:Object(l.a)(Object(l.a)({},e.initialSortDirections),{},Object(o.a)({},t,"asc"===e.state.sortDirections[t]?"desc":"asc"))}):(s=e.state.filteredEmployees.sort((function(e,s){return e=e[t],s=s[t],n?r&&e[n]===s[n]?e[r].localeCompare(s[r]):e[n].localeCompary(s[n]):e.localeCompare(s)})),e.setState({filteredEmployees:s,sortDirections:Object(l.a)(Object(l.a)({},e.initialSortDirections),{},Object(o.a)({},t,"asc"))}))},e.filterEmployees=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(n){return n.name.first.toLowerCase().concat(" ",n.name.last.toLowerCase()).includes(t)||n.phone.includes(t)||n.phone.replace(/[^\w\s]/gi,"").includes(t)||n.email.includes(t)||e.formatDate(n.dob.date).includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.formatDate=function(e){e=new Date(e);var t=[];return t.push(("0"+(e.getMonth()+1)).slice(-2)),t.push(("0"+e.getDate()).slice(-2)),t.push(e.getFullYear()),t.join("-")},e}return Object(h.a)(n,[{key:"initialSortDirections",get:function(){return{name:"",phone:"",email:"",dob:""}}},{key:"componentDidMount",value:function(){var e=this;O.getRandomEmployees().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(a.jsx)("div",{className:"container mt-4",children:Object(a.jsx)(b,{state:this.state,sortBy:this.sortBy,filteredEmployees:this.filterEmployees,formatDate:this.formatDate})})]})}}]),n}(r.Component),y=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i,{}),Object(a.jsx)(x,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};n(45);c.a.render(Object(a.jsx)(y,{}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.e8a343eb.chunk.js.map