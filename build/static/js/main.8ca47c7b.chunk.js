(this["webpackJsonpgithub-card-graphql"]=this["webpackJsonpgithub-card-graphql"]||[]).push([[0],{220:function(e,t,a){},222:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){},237:function(e,t,a){},369:function(e,t,a){},371:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(55),n=a.n(c),r=a(113),i=(a(220),a(32)),l=a(15),j=a.n(l),o=a(30),d=a(21),b=a(209),h=a(23),m=(a(222),a(188)),u=a.n(m),O={"Content-Type":"application/json",Authorization:"bearer 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"},x=a(2);var p=function(){var e=Object(h.f)(),t=Object(s.useState)(!1),a=Object(d.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(!1),l=Object(d.a)(r,2),m=l[0],p=l[1],g=Object(b.a)(),v=g.register,f=g.handleSubmit,N=function(){var t=Object(o.a)(j.a.mark((function t(a,s){var c,r,i,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!1),n(!0),s=a.username,c='query {\n\tuser(login: "'.concat(s,'") {\n\t\t\tavatarUrl\n\t\t\tname\n\t\t\tbio\n\t\t\tlogin\n\t\t\tlocation\n\t\t\tcreatedAt\n\t\t\turl\n\t\t\ttwitterUsername\n\t\t\tfollowers {\n\t\t\t\ttotalCount \n\t\t\t}\n\t\t\tfollowing {\n\t\t\t\ttotalCount \n\t\t\t}\n\t\t\trepositories(last: 10) {\n\t\t\t\tnodes {\n\t\t\t\t\tname\n\t\t\t\t\turl\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tstargazerCount\n\t\t\t\t\tforkCount\n\t\t\t\t\tdescription\n\t\t\t\t\tdiskUsage\n\t\t\t\t\tprimaryLanguage {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tcolor\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t}\n}\n'),t.next=5,fetch("https://api.github.com/graphql",{method:"POST",headers:O,body:JSON.stringify({query:c})});case 5:return r=t.sent,t.next=8,r.json();case 8:i=t.sent,l=i.data.user,localStorage.setItem("user",JSON.stringify(l)),null===l?(p(!0),n(!1)):(JSON.parse(localStorage.getItem("user")),p(!1),n(!1),e.push("/profile"));case 12:case"end":return t.stop()}var s}),t)})));return function(e,a){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"homeMain",children:Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsxs)("div",{className:"intro",children:[Object(x.jsx)(u.a,{className:"gitIcon"}),Object(x.jsx)("h1",{className:"title",children:"GitHub Profiler"}),Object(x.jsxs)("p",{className:"description",children:["A simple app to fetch github user and display the information in a nice modern card design"," "]})]}),Object(x.jsx)("div",{className:"inputSection",children:Object(x.jsxs)("form",{onSubmit:f(N),children:[Object(x.jsx)("label",{htmlFor:"githubUsername",children:"Enter username"}),Object(x.jsx)("input",Object(i.a)({type:"text",id:"githubUsername",className:"inputField",placeholder:"Valid Github username",name:"username"},v("username",{required:!0}))),Object(x.jsx)("button",{type:"submit",disabled:c,children:"Submit"})]})}),m&&Object(x.jsx)("div",{className:"errorMsg",children:"User not found!!!"}),Object(x.jsxs)("div",{className:"footerSection",children:["designed and developed by Prosper Atu",Object(x.jsx)("img",{src:"assets/prospernew.png",alt:"",className:"img"})]})]})})},g=(a(234),a(235),a(393)),v=a(394),f=a(395),N=a(406),y=a(390),S=a(391),w=a(392);var k=function(){var e=JSON.parse(localStorage.getItem("user"));return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsxs)("div",{className:"headerTop",children:[Object(x.jsxs)("div",{className:"headerSocials",children:[Object(x.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"socialIcons",children:Object(x.jsx)(y.a,{})}),Object(x.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"socialIcons",children:Object(x.jsx)(S.a,{})}),Object(x.jsx)("a",{href:"https://twitter.com/"+e.twitterUsername,target:"_blank",rel:"noreferrer",className:"socialIcons",children:Object(x.jsx)(w.a,{})})]}),Object(x.jsx)("img",{src:e.avatarUrl,alt:""})]}),Object(x.jsxs)("h1",{className:"githubName",children:["Hi, I am ",e.name]}),Object(x.jsxs)("h4",{children:["@",e.login]}),Object(x.jsx)("p",{children:e.bio}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsx)(g.a,{className:"infoIcon"})," Joined: \xa0",new Date(e.createdAt).toDateString(),Object(x.jsx)(v.a,{className:"infoIcon lastChild"}),e.location]}),Object(x.jsxs)("div",{className:"repoInfo",children:[Object(x.jsxs)("div",{className:"circleShape",children:[Object(x.jsx)("div",{className:"number",children:e.repositories.nodes.length}),"Repository"]}),Object(x.jsxs)("div",{className:"circleShape center",children:[Object(x.jsx)("div",{className:"number",children:e.followers.totalCount}),"Followers"]}),Object(x.jsxs)("div",{className:"circleShape",children:[Object(x.jsx)("div",{className:"number",children:e.following.totalCount}),"Following"]})]}),Object(x.jsx)(N.a,{children:Object(x.jsx)(f.a,{className:"backIcon",onClick:function(){window.location.replace("/")}})})]})},C=(a(237),a(396)),I=a(400),A=a(120),P=a(121),z=a(102),J=a(119),K=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3}];function L(){return Object(x.jsxs)(C.a,{width:300,height:270,fontSize:12,data:K,margin:{top:20,right:10,left:-20,bottom:0},children:[Object(x.jsx)(I.a,{strokeDasharray:"3 3"}),Object(x.jsx)(A.a,{dataKey:"name"}),Object(x.jsx)(P.a,{}),Object(x.jsx)(z.a,{}),Object(x.jsx)(J.a,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"})]})}var M=a(407),U=a(201),F=a(81),T=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300}],q=["rgb(168, 0, 168)","rgb(46, 4, 235)","rgb(0, 133, 138)","#FF8042"],D=Math.PI/180;var B=function(){return Object(x.jsx)(M.a,{width:250,height:250,children:Object(x.jsx)(U.a,{data:T,cx:120,cy:100,labelLine:!1,label:function(e){var t=e.cx,a=e.cy,s=e.midAngle,c=e.innerRadius,n=e.outerRadius,r=e.percent,i=(e.index,c+.5*(n-c)),l=t+i*Math.cos(-s*D),j=a+i*Math.sin(-s*D);return Object(x.jsx)("text",{x:l,y:j,fill:"white",textAnchor:l>t?"start":"end",dominantBaseline:"central",children:"".concat((100*r).toFixed(0),"%")})},outerRadius:80,fill:"#8884d8",dataKey:"value",children:T.map((function(e,t){return Object(x.jsx)(F.a,{fill:q[t%q.length]},"cell-".concat(t))}))})})},R=a(401),G=a(408),_=a(99),E=a(207),H=a(206),V=[{name:"Page A",uv:590,pv:800,amt:1400},{name:"Page B",uv:868,pv:967,amt:1506},{name:"Page C",uv:1397,pv:1098,amt:989},{name:"Page D",uv:1480,pv:1200,amt:1228}];var W=function(){return Object(x.jsx)("div",{style:{width:"100%",height:300,fontSize:".75rem"},children:Object(x.jsx)(R.a,{children:Object(x.jsxs)(G.a,{width:250,height:250,data:V,margin:{top:20,right:10,bottom:10,left:-20},children:[Object(x.jsx)(I.a,{stroke:"#f5f5f5"}),Object(x.jsx)(A.a,{dataKey:"name",scale:"band"}),Object(x.jsx)(P.a,{}),Object(x.jsx)(z.a,{}),Object(x.jsx)(_.a,{}),Object(x.jsx)(J.a,{type:"monotone",dataKey:"amt",fill:"#8884d8",stroke:"#8884d8"}),Object(x.jsx)(E.a,{dataKey:"pv",barSize:15,fill:"#413ea0"}),Object(x.jsx)(H.a,{type:"monotone",dataKey:"uv",stroke:"#ff7300"})]})})})};var X=function(){return Object(x.jsx)("div",{className:"charts section",children:Object(x.jsxs)("div",{className:"cards grid",children:[Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("h2",{children:"Top Languages"}),Object(x.jsxs)("div",{className:"languages",children:[Object(x.jsxs)("div",{className:"language",children:["Javascript ",Object(x.jsx)("div",{className:"rectangle first"})]}),Object(x.jsxs)("div",{className:"language",children:["HTML ",Object(x.jsx)("div",{className:"rectangle second"})]}),Object(x.jsxs)("div",{className:"language",children:["CSS ",Object(x.jsx)("div",{className:"rectangle third"})]})]}),Object(x.jsx)("div",{className:"pieChart",children:Object(x.jsx)(B,{})})]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("h2",{children:"Most Starred"}),Object(x.jsx)("div",{className:"pieChart",children:Object(x.jsx)(W,{})})]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("h2",{children:"Activities"}),Object(x.jsx)("div",{className:"pieChart",children:Object(x.jsx)(L,{})})]})]})})},Z=(a(369),a(402)),Q=a(403),Y=a(404);var $=function(){var e=JSON.parse(localStorage.getItem("user")).repositories.nodes;return Object(x.jsxs)("div",{className:"repo section",children:[Object(x.jsx)("h2",{className:"repoTitle",children:"Latest Repositories"}),Object(x.jsx)("div",{className:"repoContainer grid",children:e.map((function(e){return Object(x.jsxs)("a",{href:e.url,target:"_blank",className:"repoContent",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(Z.a,{size:"30",className:"repoIcon"}),Object(x.jsx)("h3",{className:"repoTitle",children:e.name}),Object(x.jsx)("p",{className:"repoDescription",children:e.description})]}),Object(x.jsxs)("div",{className:"repoMeta",children:[Object(x.jsxs)("div",{className:"leftMeta",children:[Object(x.jsxs)("div",{className:"language",children:[Object(x.jsx)("div",{style:{backgroundColor:null===e.primaryLanguage?"":e.primaryLanguage.color},className:"circle"}),null===e.primaryLanguage?"":e.primaryLanguage.name]}),Object(x.jsxs)("div",{className:"starRating",children:[Object(x.jsx)(Q.a,{size:"15"}),e.stargazerCount]}),Object(x.jsxs)("div",{className:"forked",children:[Object(x.jsx)(Y.a,{size:"15"}),e.forkCount]})]}),Object(x.jsxs)("div",{className:"repoSize",children:[e.diskUsage," KB"]})]})]})}))})]})};var ee=function(){return Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)(k,{}),Object(x.jsx)(X,{}),Object(x.jsx)($,{})]})};var te=function(){var e=JSON.parse(localStorage.getItem("user"));return Object(x.jsx)("div",{className:"app",children:Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.a,{exact:!0,path:"/",children:Object(x.jsx)(p,{})}),Object(x.jsx)(h.a,{path:"/profile",children:e?Object(x.jsx)(ee,{}):Object(x.jsx)(p,{})})]})})};n.a.render(Object(x.jsx)(r.a,{children:Object(x.jsx)(te,{})}),document.getElementById("root"))}},[[371,1,2]]]);
//# sourceMappingURL=main.8ca47c7b.chunk.js.map