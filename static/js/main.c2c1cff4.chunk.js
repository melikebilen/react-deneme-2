(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{14:function(e,t,c){},28:function(e,t,c){},39:function(e,t,c){},48:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var a=c(4),i=c(32),s=c.n(i),n=c(22),r=c(23),o=c(25),l=c(24),j=(c(14),c(34)),b=c(16),d=(c(39),c(2));var h=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],i=t[1],s=function(){return i(!1)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("div",{className:"navbar-container",children:[Object(d.jsxs)(b.b,{to:"/",className:"navbar-logo",onClick:s,children:["RobotLocation",Object(d.jsx)("i",{className:"fas fa-robot"})]}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return i(!c)},children:Object(d.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(d.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{to:"/aboutus",className:"nav-links",onClick:s,children:"About Us"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{to:"/aboutrobot",className:"nav-links",onClick:s,children:"About Robot"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{to:"/resources",className:"nav-links",onClick:s,children:"Resources"})})]})]})})})},m=c(8),u=c(19);c(48);var p=function(){return Object(d.jsx)("div",{className:"hero-container",children:Object(d.jsx)("video",{src:"https://melikebilen.github.io/react-deneme-2/videos/robot.mp4",autoPlay:!0,loop:!0,muted:!0})})},O=c(20);O.a.initializeApp({apiKey:"AIzaSyBQjxxJqCcYhjYDH6GFwjSGdQ7VeqVGhCI",authDomain:"tdoa-23cf7.firebaseapp.com",databaseURL:"https://tdoa-23cf7-default-rtdb.firebaseio.com",projectId:"tdoa-23cf7",storageBucket:"tdoa-23cf7.appspot.com",messagingSenderId:"611153024504",appId:"1:611153024504:web:0f5e82fbf77d611aaf720d",measurementId:"G-YYER7FY9DQ"});O.a;var x=O.a.database(),g=(O.a.storage(),function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(n.a)(this,c),(a=t.call(this,e)).state={data:null,image:"https://firebasestorage.googleapis.com/v0/b/tdoaproject-5414d.appspot.com/o/images%2Fxyplot.png?alt=media&token=0eafcbe7-4805-49e9-98ef-8692ae98a4bf"},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this;x.ref().on("value",(function(t){e.setState({data:t.val(),newData:"",count:t.child("Count/count").val(),x:t.child("RobotLocation/x").val(),y:t.child("RobotLocation/y").val(),image:"https://firebasestorage.googleapis.com/v0/b/tdoaproject-5414d.appspot.com/o/images%2Fxyplot.png?alt=media&token=0eafcbe7-4805-49e9-98ef-8692ae98a4bf"})}))}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({newData:t,image:"https://firebasestorage.googleapis.com/v0/b/tdoaproject-5414d.appspot.com/o/images%2Fxyplot.png?alt=media&token=0eafcbe7-4805-49e9-98ef-8692ae98a4bf"})}},{key:"handleSubmit",value:function(e){e.preventDefault(),x.ref().child("AMAZINGNEWDATA").set(this.state.newData)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(p,{})}),Object(d.jsxs)("div",{className:"App--position",children:[Object(d.jsxs)("h3",{children:[" Count : ",JSON.stringify(this.state.count,null,2)]}),Object(d.jsxs)("h3",{children:[" X : ",JSON.stringify(this.state.x,null,2)]}),Object(d.jsxs)("h3",{children:[" Y : ",JSON.stringify(this.state.y,null,2)]})]}),Object(d.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/tdoaproject-5414d.appspot.com/o/images%2Fxyplot.png?alt=media&token=0eafcbe7-4805-49e9-98ef-8692ae98a4bf"}),Object(d.jsx)("p",{children:"Please refresh the page to see the updated image"})]})}}]),c}(a.Component));c(28);var f=function(){return Object(d.jsxs)("div",{className:"hero-container",children:[Object(d.jsxs)("div",{className:"Row",children:[Object(d.jsxs)("div",{className:"Column",children:[Object(d.jsx)("img",{className:"ourpictures",src:"https://melikebilen.github.io/react-deneme-2/images/pinar.jpg"})," ",Object(d.jsx)("p",{children:"P\u0131nar O\u011fuz Ekim"}),Object(d.jsx)("p",{children:"Asst. Prof. P\u0131nar O\u011fuz Ekim"}),Object(d.jsx)("p",{children:"pinar.ekim@ieu.edu.tr"})]}),Object(d.jsxs)("div",{className:"Column",children:[Object(d.jsx)("img",{className:"ourpictures",src:"https://melikebilen.github.io/react-deneme-2/images/melike.jpeg"})," ",Object(d.jsx)("p",{children:"Melike Bilen"}),Object(d.jsx)("p",{children:"Computer Engineering"}),Object(d.jsx)("p",{children:"bilenmelike@gmail.com"})]}),Object(d.jsxs)("div",{className:"Column",children:[Object(d.jsx)("img",{className:"ourpictures",src:"https://melikebilen.github.io/react-deneme-2/images/nergis.jpeg"}),Object(d.jsx)("p",{children:"Nergis Gizem Y\u0131lmaz"}),Object(d.jsx)("p",{children:"Mechatronics and Computer Engineering"}),Object(d.jsx)("p",{children:"nergisgizem.yilmaz@gmail.com"})]}),Object(d.jsxs)("div",{className:"Column",children:[Object(d.jsx)("img",{className:"ourpictures",src:"https://melikebilen.github.io/react-deneme-2/images/mehmet.jpeg"}),Object(d.jsx)("p",{children:"Mehmet Alp \xc7ankaya"}),Object(d.jsx)("p",{children:"Mechanical Engineering"}),Object(d.jsx)("p",{children:"mehmetalpcankaya@gmail.com"})]}),Object(d.jsxs)("div",{className:"Column",children:[Object(d.jsx)("img",{className:"ourpictures",src:"https://melikebilen.github.io/react-deneme-2/images/orhun.png"}),Object(d.jsx)("p",{children:"Orhun Onar"}),Object(d.jsx)("p",{children:"Mechatronics Engineering"}),Object(d.jsx)("p",{children:"orhunonar@outlook.com"})]})]}),Object(d.jsx)("video",{className:"frontvideo",src:"https://melikebilen.github.io/react-deneme-2/videos/robotvideo2.MP4",autoPlay:!0,loop:!0,muted:!0})]})};var v=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(f,{})})};var k=function(){return Object(d.jsxs)("div",{className:"hero-container",children:[Object(d.jsxs)("div",{className:"Row",children:[Object(d.jsx)("img",{className:"robotpictures",src:"https://melikebilen.github.io/react-deneme-2/images/robotimg.JPG"}),Object(d.jsxs)("div",{className:"Column",children:[Object(d.jsx)("h2",{children:"Materials"}),Object(d.jsx)("p",{children:"Motor"}),Object(d.jsx)("p",{children:"Lipo battery"}),Object(d.jsx)("p",{children:"Sensor"}),Object(d.jsx)("p",{children:"Battery Charger"}),Object(d.jsx)("p",{children:"PLA Filament"}),Object(d.jsx)("p",{children:"Arduino"}),Object(d.jsx)("p",{children:"Jumper"}),Object(d.jsx)("p",{children:"Drunk wheel 14mm"}),Object(d.jsx)("p",{children:"70x8 mm wheel"}),Object(d.jsx)("p",{children:"Encoder Motor Driver"}),Object(d.jsx)("p",{children:"Regulator"}),Object(d.jsx)("p",{children:"Spare Motor Driver"}),Object(d.jsx)("p",{children:"Klon Arduino Uno "}),Object(d.jsx)("p",{children:"Breadboard"}),Object(d.jsx)("p",{children:"HC05"}),Object(d.jsx)("p",{children:"32 GB SD CARD"})]})]}),Object(d.jsx)("video",{className:"frontvideo",src:"https://melikebilen.github.io/react-deneme-2/videos/robotvideo2.MP4",autoPlay:!0,loop:!0,muted:!0})]})};var N=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(k,{})})};var y=function(){return Object(d.jsxs)("div",{className:"resources",children:[Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(p,{})}),Object(d.jsx)("h1",{children:"The Github Pages"}),Object(d.jsx)("h3",{children:"This project is implemented with Python, Firebase and React. "}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("h3",{children:"If you would like to learn more about how the TDOA algorithm is implemented with Python, you can take a look at the following github repository. You can read the README. file and follow the steps to use it."}),Object(d.jsx)("div",{className:"githubLink",children:Object(d.jsx)("a",{href:"https://github.com/melikebilen/TDOA_Project/tree/tdoaFirebase",target:"blank",children:"The github repo for Python code"})}),Object(d.jsx)("h3",{children:"If you would like to learn more about how this website is built with React, you can take a look at the following github repository. You can read the README. file and follow the steps to use it."}),Object(d.jsx)("div",{className:"githubLink",children:Object(d.jsx)("a",{href:"https://github.com/melikebilen/react-deneme-2",target:"blank",children:"The github repository for React code"})})]})]})};var w=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(y,{})})},C=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"App--header",children:Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/react-deneme-2",exact:!0,component:g}),Object(d.jsx)(m.a,{path:"/react-deneme-2/aboutus",exact:!0,component:v}),Object(d.jsx)(m.a,{path:"/react-deneme-2/aboutrobot",exact:!0,component:N}),Object(d.jsx)(m.a,{path:"react-deneme-2/resources",exact:!0,component:w})]})]})})})})}}]),c}(a.Component);c(52);s.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c2c1cff4.chunk.js.map