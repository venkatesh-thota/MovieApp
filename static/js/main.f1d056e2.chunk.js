(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(7),s=c.n(r),i=c(9),o=c(6),l=c.n(o),j=c(8),u=c(4),d=(c(15),c(16),c(0)),m=function(e){var t=e.favouriteComponent;return Object(d.jsx)(d.Fragment,{children:e.movies.map((function(c,a){return Object(d.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(d.jsx)("img",{src:c.Poster,alt:"movie"}),Object(d.jsx)("div",{onClick:function(){return e.handleFavouritesClick(c)},className:"overlay d-flex align-items-center justify-content-center",children:Object(d.jsx)(t,{})})]})}))})},v=function(e){return Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("h1",{children:e.heading})})},h=function(e){return Object(d.jsx)("div",{className:"col col-sm-4",children:Object(d.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search..."})})},b=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"mr-2",children:"Add to Favourites"}),Object(d.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},f=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"mr-2",children:"Remove from favourites"}),Object(d.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-x-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},x=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(u.a)(r,2),o=s[0],x=s[1],O=Object(a.useState)(""),p=Object(u.a)(O,2),g=p[0],w=p[1],N=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://www.omdbapi.com/?s=".concat(t,"&apikey=263d22d8"),e.next=3,fetch(c);case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).Search&&n(r.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){N(g)}),[g]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favourites"));e&&x(e)}),[]);var S=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return Object(d.jsxs)("div",{className:"container-fluid movie-app",children:[Object(d.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(d.jsx)(v,{heading:"Movies"}),Object(d.jsx)(h,{searchValue:g,setSearchValue:w})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(m,{movies:c,handleFavouritesClick:function(e){var t=[].concat(Object(i.a)(o),[e]);x(t),S(t)},favouriteComponent:b})}),Object(d.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(d.jsx)(v,{heading:"Favourites"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(m,{movies:o,handleFavouritesClick:function(e){var t=o.filter((function(t){return t.imdbID!==e.imdbID}));x(t),S(t)},favouriteComponent:f})})]})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f1d056e2.chunk.js.map