(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(49)},23:function(e,a,t){},24:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(15),c=t.n(r),l=t(52),s=t(53),i=t(54);t(23);var m=function(){return o.a.createElement("nav",{className:"nav-bg"},o.a.createElement("div",{className:"nav-div overlay"},o.a.createElement("ul",{className:" nav-ul nav justify-content-end"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{class:"nav-link navLink",href:"/"},"Home",o.a.createElement("i",{class:"fas fa-home mx-2"}))),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{class:"nav-link navLink",href:"/favorites"},"Favorites",o.a.createElement("i",{class:"fas fa-heart mx-2"}))))))},u=(t(24),t(4)),v=t(6),f=t.n(v),h={getBook:function(e){return f.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&key=AIzaSyAQyE5qbJ1H76JhCYlBO72T6qYHyv5TjQ8"))},saveBook:function(e){return f.a.post("/api/books",e)},getAllFavorites:function(){return f.a.get("/api/books")},deleteBook:function(e){return f.a.delete("/api/books/"+e)}};t(43);var E=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){h.getAllFavorites().then(function(e){return r(e.data)}).catch(function(e){return console.log(e)})},[]),console.log(t),o.a.createElement("div",{className:"container book-favorites-container "},o.a.createElement("p",{className:"favorite-header"},"Your Favorite list ",o.a.createElement("i",{className:"far hear-icon-fav fa-heart"})),o.a.createElement("div",{className:"row"},t.map(function(e){return o.a.createElement("div",{key:e._id,className:"col-md-3   col-sm-12  book-card"},o.a.createElement("img",{src:e.cover,className:"book-cover center-align",alt:"Book Cover"}),o.a.createElement("h5",{className:!0}," Title: ",e.title),o.a.createElement("h6",null," ",e.subtitle),o.a.createElement("h6",null,"Author: ",e.author),o.a.createElement("h6",null,"Category: ",e.category)," ",o.a.createElement("div",{className:"row float-right"},o.a.createElement("i",{onClick:function(){return function(e){var a=e._id;h.deleteBook(a).then(function(e){return console.log(e.data)}),window.location.reload()}(e)},class:"far  delete-icon fa-trash-alt"})))})))},d=(t(44),t(17));t(45);var b=function(e){var a=Object(n.useState)([]),t=Object(u.a)(a,2),r=t[0],c=t[1];return console.log(r),o.a.createElement("div",{className:"book-card-container  "},o.a.createElement("div",{className:"row"},e.results.map(function(e){return o.a.createElement("div",{key:e.title,className:"col-md-3   col-sm-12  book-card"},o.a.createElement("img",{onError:function(e){e.target.onerror=null,e.target.src="https://via.placeholder.com/150"},src:e.imageLinks.thumbnail,className:"book-cover center-align",alt:"Book Cover"}),o.a.createElement("h5",{className:!0}," Title: ",e.title),o.a.createElement("h6",null," ",e.subtitle),o.a.createElement("h6",null,"Author: ",e.authors),o.a.createElement("h6",null,"Category: ",e.categories)," ",o.a.createElement("i",{onClick:function(){return function(e){var a={title:e.title,cover:e.imageLinks.thumbnail,author:e.authors,category:e.categories};h.saveBook(a).then(function(e){return console.log("Book added to Favorites and saved to database")}),c(function(e){return[].concat(Object(d.a)(e),[a])})}(e)},id:e.title,className:"far fa-heart"}))})))};var k=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),l=Object(u.a)(c,2),s=l[0],i=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h6",{className:"bookQuote"},"You don\u2019t have to burn books to destroy a culture. Just get people to stop reading them.\u201d \u2013 Ray Bradbury"),o.a.createElement("div",{className:" container search-box "},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"row"},o.a.createElement("label",{className:"search-label",htmlFor:"search"},"Search a book by tittle/word/author:")),o.a.createElement("div",{className:"row input-row "},o.a.createElement("input",{className:" form-control  col-md-10 col-sm-12 search-input",type:"text",name:"search",id:"searchInput",value:t,onChange:function(e){return r(e.target.value)}}),o.a.createElement("button",{className:"search-button button ",onClick:function(){h.getBook(t).then(function(e){var a=e.data.items,t=[];a.forEach(function(e){var a=e.volumeInfo;t.push(a)}),i(t)})}},"Find Book",o.a.createElement("i",{class:"mx-2 fas fa-search"}))))),o.a.createElement("section",{className:"container-fluid"},o.a.createElement(b,{results:s,search:t}))))};var g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),o.a.createElement(l.a,null,o.a.createElement(s.a,null,o.a.createElement(i.a,{exact:!0,path:"/favorites",component:E}),o.a.createElement(i.a,{exact:!0,path:"/",component:k}))))};c.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.15eafb3b.chunk.js.map