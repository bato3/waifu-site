(this["webpackJsonpwaifu-site"]=this["webpackJsonpwaifu-site"]||[]).push([[0],{68:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),i=a(20),s=a.n(i),o=a(27),j=a(7),d=(a(68),a(24)),u=a(117),l=a(118),b=a(125),h=a(119),p=a(126),x=a(115),O=a(18),m=a(53),f=a.n(m),g=a(54),v=a.n(g),w=Object(x.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%"}}}));function k(){var e=w();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(u.a,{position:"static",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(b.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(n.jsx)(f.a,{})}),Object(n.jsx)(h.a,{className:e.title,variant:"h6",noWrap:!0,children:"Pocket-Waifu"}),Object(n.jsxs)("div",{className:e.search,children:[Object(n.jsx)("div",{className:e.searchIcon,children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(p.a,{placeholder:"Szukaj u\u017cytkownika...",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var I=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k,{}),Object(n.jsx)("div",{className:"divWhite",children:"/user/204697/cards"})]})},y=function(e){var t=e.match,a=(e.history,t.params.userID);return Object(n.jsx)("div",{children:"user id: ".concat(a)})},C=a(56),N=a(120),D=a(121),F=a(122),L=a(123),R=a(124),S=a(55),P=a.n(S),B=Object(x.a)({cardsContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardStyle:{backgroundColor:"#272a33"},cardContent:{textAlign:"left",color:"white"},cardMedia:{width:"190px",height:"276px",margin:"auto"}}),T=function(e){var t=e.match,a=(e.history,t.params.userID),r=B(),i=Object(c.useState)(),s=Object(C.a)(i,2),o=s[0],j=s[1];Object(c.useEffect)((function(){P.a.get("https://api.sanakan.pl/api/waifu/user/".concat(a,"/cards/0/10000")).then((function(e){var t=e.data;j(t)}))}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k,{}),o?Object(n.jsx)(N.a,{container:!0,spacing:2,className:r.cardsContainer,children:o.map((function(e){return function(e){var t=e.id,a=e.imageUrl,c=e.name,i=e.animeTitle;return Object(n.jsx)(N.a,{item:!0,xs:2,sm:2,children:Object(n.jsxs)(D.a,{className:r.cardStyle,children:[Object(n.jsx)(F.a,{image:a,className:r.cardMedia}),Object(n.jsxs)(L.a,{className:r.cardContent,children:[t," : ",c,Object(n.jsx)("br",{}),"Anime: ",i]})]})},t)}(e)}))}):Object(n.jsx)("center",{children:Object(n.jsx)(R.a,{size:100})})]})},E=function(e){var t=e.match,a=(e.history,t.params.userID);return Object(n.jsx)("div",{children:"profil / user id: ".concat(a)})};var M=function(){return Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(I,Object(o.a)({},e))}}),Object(n.jsx)(j.a,{exact:!0,path:"/user/:userID",render:function(e){return Object(n.jsx)(y,Object(o.a)({},e))}}),Object(n.jsx)(j.a,{exact:!0,path:"/user/:userID/Cards",render:function(e){return Object(n.jsx)(T,Object(o.a)({},e))}}),Object(n.jsx)(j.a,{exact:!0,path:"/user/:userID/Profile",render:function(e){return Object(n.jsx)(E,Object(o.a)({},e))}})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,128)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},z=a(35),A=a(11),G=Object(A.a)();s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(z.a,{history:G,children:Object(n.jsx)(M,{})})}),document.getElementById("root")),W()}},[[94,1,2]]]);
//# sourceMappingURL=main.e23e3a1b.chunk.js.map