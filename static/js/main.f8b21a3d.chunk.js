(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),o=a(2),n=a.n(o),l=a(3),s=a(4),i=a(6),m=a(5),u=a(7);var d=function(e){return c.a.createElement("div",{className:"row p-2 bg-warning border-bottom border-dark"},c.a.createElement("div",{className:"col-3 text-center"},c.a.createElement("h1",null,c.a.createElement("b",null,"Clicky Game"))),c.a.createElement("div",{className:"col-6 text-center"},c.a.createElement("p",{className:"mt-3"},"Click on an image to earn points, but don't click on any more than once!")),c.a.createElement("div",{className:"col-3 text-left"},c.a.createElement("h6",{className:"mt-1"},"Score: ",e.score),c.a.createElement("h6",null,"Top Score: ",e.topscore)))},p={card:{width:200,height:200}};var g=function(e){return c.a.createElement("img",{className:"bg-warning p-2 rounded m-4 border border-dark box-shadow",src:e.source,onClick:e.confirm,alt:"nick-character",style:p.card})},h=[{location:0,clicked:!1,url:"https://static.giantbomb.com/uploads/square_small/0/1122/187741-avatar_the_legend_of_aang_ps2.jpg"},{location:1,clicked:!1,url:"https://static.giantbomb.com/uploads/square_small/0/7383/1810812-angelicapro.jpg"},{location:2,clicked:!1,url:"https://static.giantbomb.com/uploads/square_small/0/5768/764402-bootsthemonkey.jpg"},{location:3,clicked:!1,url:"https://static.giantbomb.com/uploads/square_small/0/3698/375861-chuckie4.jpg"},{location:4,clicked:!1,url:"https://static.giantbomb.com/uploads/square_small/0/1697/267605-jimmy_13_1_.jpg"},{location:5,clicked:!1,url:"https://static.giantbomb.com/uploads/square_small/0/966/461214-squidbio.jpg"},{location:6,clicked:!1,url:"https://static.giantbomb.com/uploads/square_small/0/9493/1743979-images.jpg"},{location:7,clicked:!1,url:"https://static.giantbomb.com/uploads/square_small/0/3083/1074517-otto_1.png"}],b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={score:0,topScore:0,imageArray:[]},a.clickHandler=function(e,t){e.preventDefault();var r=a.state.imageArray,c=a.state.score;!0===t.clicked?(a.state.topScore>c?(a.setState({score:0}),console.log("topscore greater than current score")):(a.setState({topScore:c,score:0}),console.log("new topscore")),a.setState({imageArray:h}),a.resetArray(h),a.shuffle(h),a.setState({imageArray:h})):(r[t.location].clicked=!0,a.shuffle(r),a.setState({score:a.state.score+1,imageArray:r}),console.log(t))},a.resetArray=function(e){for(var t=0;t<e.length;t++)e[t].clicked=!1;return e},a.shuffle=function(e){for(var t,a,r=e.length;0!==r;)a=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[a],e[a]=t;for(var c=0;c<e.length;c++)e[c].location=c;return console.log(e),e},a.returnImages=function(){return c.a.createElement("div",null,a.state.imageArray.map(function(e){return c.a.createElement(g,{key:e.location,source:e.url,confirm:function(t){a.clickHandler(t,e)}})}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=h;this.setState({imageArray:e})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,{score:this.state.score,topscore:this.state.topScore}),c.a.createElement("div",{className:"text-center"},this.returnImages()))}}]),t}(r.Component);var f=function(){return c.a.createElement("div",null,c.a.createElement(b,null))};a(14);n.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f8b21a3d.chunk.js.map