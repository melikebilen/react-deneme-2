(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{14:function(e,t,c){},28:function(e,t,c){},39:function(e,t,c){},48:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(4),i=c(32),a=c.n(i),s=c(22),r=c(23),l=c(25),o=c(24),j=(c(14),c(34)),b=c(16),h=(c(39),c(2));var d=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],i=t[1],a=function(){return i(!1)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("div",{className:"navbar-container",children:[Object(h.jsxs)(b.b,{to:"/react-deneme-2",className:"navbar-logo",onClick:a,children:["RobotLocation",Object(h.jsx)("i",{className:"fas fa-robot"})]}),Object(h.jsx)("div",{className:"menu-icon",onClick:function(){return i(!c)},children:Object(h.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(h.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{to:"/react-deneme-2/aboutus",className:"nav-links",onClick:a,children:"About Us"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{to:"/react-deneme-2/aboutrobot",className:"nav-links",onClick:a,children:"About Robot"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{to:"/react-deneme-2/resources",className:"nav-links",onClick:a,children:"Resources"})})]})]})})})},m=c(8),u=c(19);c(48);var p=function(){return Object(h.jsx)("div",{className:"hero-container",children:Object(h.jsx)("video",{src:"https://melikebilen.github.io/react-deneme-2/videos/robot.mp4",autoPlay:!0,loop:!0,muted:!0})})},O=c(20);O.a.initializeApp({apiKey:"AIzaSyBQjxxJqCcYhjYDH6GFwjSGdQ7VeqVGhCI",authDomain:"tdoa-23cf7.firebaseapp.com",databaseURL:"https://tdoa-23cf7-default-rtdb.firebaseio.com",projectId:"tdoa-23cf7",storageBucket:"tdoa-23cf7.appspot.com",messagingSenderId:"611153024504",appId:"1:611153024504:web:0f5e82fbf77d611aaf720d",measurementId:"G-YYER7FY9DQ"});O.a;var x=O.a.database(),g=O.a.storage(),v=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).state={data:null,image:null},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=null;x.ref().on("value",(function(c){g.ref().child("images/").listAll().then((function(e){e.items.forEach((function(e){e.getDownloadURL().then((function(e){null!==e&&null===t&&(t=e,console.log(e))}))}))})),e.setState({data:c.val(),newData:"",count:c.child("Count/count").val(),x:c.child("RobotLocation/x").val(),y:c.child("RobotLocation/y").val(),image:t})}))}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({newData:t})}},{key:"handleSubmit",value:function(e){e.preventDefault(),x.ref().child("AMAZINGNEWDATA").set(this.state.newData)}},{key:"render",value:function(){var e;return e=null===this.state.image?"https://firebasestorage.googleapis.com/v0/b/tdoa-23cf7.appspot.com/o/images%2Fxyplot.png?alt=media&token=835a49fa-b80b-408e-bfed-cedd43b96ee1":this.state.image,null===this.state.x&&(e=null),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p,{})}),Object(h.jsxs)("div",{className:"App--position",children:[Object(h.jsxs)("h3",{children:[" Count : ",JSON.stringify(this.state.count,null,2)]}),Object(h.jsxs)("h3",{children:[" X : ",JSON.stringify(this.state.x,null,2)]}),Object(h.jsxs)("h3",{children:[" Y : ",JSON.stringify(this.state.y,null,2)]})]}),Object(h.jsx)("img",{src:e}),Object(h.jsx)("p",{children:"Please refresh the page to see the updated image"})]})}}]),c}(n.Component);c(28);var f=function(){return Object(h.jsxs)("div",{className:"hero-container",children:[Object(h.jsxs)("div",{className:"Row",children:[Object(h.jsxs)("div",{className:"Column",children:[Object(h.jsx)("img",{className:"ourpictures",src:"https://melikebilen.github.io/react-deneme-2/images/pinar.jpg"})," ",Object(h.jsx)("p",{children:"P\u0131nar O\u011fuz Ekim"}),Object(h.jsx)("p",{children:"Asst. Prof. P\u0131nar O\u011fuz Ekim"}),Object(h.jsx)("p",{children:"pinar.ekim@ieu.edu.tr"})]}),Object(h.jsxs)("div",{className:"Column",children:[Object(h.jsx)("img",{className:"ourpictures",src:"https://melikebilen.github.io/react-deneme-2/images/melike.jpeg"})," ",Object(h.jsx)("p",{children:"Melike Bilen"}),Object(h.jsx)("p",{children:"Computer Engineering"}),Object(h.jsx)("p",{children:"bilenmelike@gmail.com"})]}),Object(h.jsxs)("div",{className:"Column",children:[Object(h.jsx)("img",{className:"ourpictures",src:"https://melikebilen.github.io/react-deneme-2/images/nergis.jpeg"}),Object(h.jsx)("p",{children:"Nergis Gizem Y\u0131lmaz"}),Object(h.jsx)("p",{children:"Mechatronics and Computer Engineering"}),Object(h.jsx)("p",{children:"nergisgizem.yilmaz@gmail.com"})]}),Object(h.jsxs)("div",{className:"Column",children:[Object(h.jsx)("img",{className:"ourpictures",src:"https://melikebilen.github.io/react-deneme-2/images/mehmet.jpeg"}),Object(h.jsx)("p",{children:"Mehmet Alp \xc7ankaya"}),Object(h.jsx)("p",{children:"Mechanical Engineering"}),Object(h.jsx)("p",{children:"mehmetalpcankaya@gmail.com"})]}),Object(h.jsxs)("div",{className:"Column",children:[Object(h.jsx)("img",{className:"ourpictures",src:"https://melikebilen.github.io/react-deneme-2/images/orhun.png"}),Object(h.jsx)("p",{children:"Orhun Onar"}),Object(h.jsx)("p",{children:"Mechatronics Engineering"}),Object(h.jsx)("p",{children:"orhunonar@outlook.com"})]})]}),Object(h.jsx)("video",{className:"frontvideo",src:"https://melikebilen.github.io/react-deneme-2/videos/robotvideo2.MP4",autoPlay:!0,loop:!0,muted:!0})]})};var k=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(f,{})})};var N=function(){return Object(h.jsxs)("div",{className:"hero-container",children:[Object(h.jsxs)("div",{className:"Row",children:[Object(h.jsx)("img",{className:"robotpictures",src:"https://melikebilen.github.io/react-deneme-2/images/robotimg.JPG"}),Object(h.jsxs)("div",{className:"Column",children:[Object(h.jsx)("h2",{children:"Materials"}),Object(h.jsx)("p",{children:"Motor"}),Object(h.jsx)("p",{children:"Lipo battery"}),Object(h.jsx)("p",{children:"Sensor"}),Object(h.jsx)("p",{children:"Battery Charger"}),Object(h.jsx)("p",{children:"PLA Filament"}),Object(h.jsx)("p",{children:"Arduino"}),Object(h.jsx)("p",{children:"Jumper"}),Object(h.jsx)("p",{children:"Drunk wheel 14mm"}),Object(h.jsx)("p",{children:"70x8 mm wheel"}),Object(h.jsx)("p",{children:"Encoder Motor Driver"}),Object(h.jsx)("p",{children:"Regulator"}),Object(h.jsx)("p",{children:"Spare Motor Driver"}),Object(h.jsx)("p",{children:"Klon Arduino Uno "}),Object(h.jsx)("p",{children:"Breadboard"}),Object(h.jsx)("p",{children:"HC05"}),Object(h.jsx)("p",{children:"32 GB SD CARD"})]})]}),Object(h.jsx)("video",{className:"frontvideo",src:"https://melikebilen.github.io/react-deneme-2/videos/robotvideo2.MP4",autoPlay:!0,loop:!0,muted:!0})]})};var y=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(N,{})})};var w=function(){return Object(h.jsxs)("div",{className:"resources",children:[Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p,{})}),Object(h.jsx)("h1",{children:"The Github Pages"}),Object(h.jsx)("h3",{children:"This project is implemented with Python, Firebase and React. "}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("h3",{children:"If you would like to learn more about how the TDOA algorithm is implemented with Python, you can take a look at the following github repository. You can read the README. file and follow the steps to use it."}),Object(h.jsx)("div",{className:"githubLink",children:Object(h.jsx)("a",{href:"https://github.com/melikebilen/TDOA_Project/tree/tdoaFirebase",target:"blank",children:"The github repo for Python code"})}),Object(h.jsx)("h3",{children:"If you would like to learn more about how this website is built with React, you can take a look at the following github repository. You can read the README. file and follow the steps to use it."}),Object(h.jsx)("div",{className:"githubLink",children:Object(h.jsx)("a",{href:"https://github.com/melikebilen/react-deneme-2",target:"blank",children:"The github repository for React code"})})]})]})};var C=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(w,{})})},A=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("div",{className:"App--header",children:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(d,{}),Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:"/react-deneme-2",exact:!0,component:v}),Object(h.jsx)(m.a,{path:"/react-deneme-2/aboutus",exact:!0,component:k}),Object(h.jsx)(m.a,{path:"/react-deneme-2/aboutrobot",exact:!0,component:y}),Object(h.jsx)(m.a,{path:"/react-deneme-2/resources",exact:!0,component:C})]})]})})})})}}]),c}(n.Component);c(52);a.a.render(Object(h.jsx)(A,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.2e856fe6.chunk.js.map