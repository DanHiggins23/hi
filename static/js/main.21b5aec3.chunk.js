(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/java.7c17a5f1.png"},,,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/DanHiggins.1b0122e5.pdf"},,,function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){},,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(18),c=t.n(i),s=(t(32),t(7)),m=t(8),r=t(10),o=t(9),_=t(11),E=t(19);function d(){var e=Object(E.a)(["\n  position:  fixed;\n  background:  linear-gradient(\n    to right,\n    #90a4ae ",",\n    transparent  0);\n  width:  100%;\n  height:  4px;\n  margin-top: 98px;\n"]);return d=function(){return e},e}var v=t(20).a.div(d(),function(e){return e.scroll}),u=(t(36),t(2)),N=t(3),h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).handleClick=function(){t.setState({display:!t.state.display})},t.listenToScrollEvent=function(){document.addEventListener("scroll",function(){requestAnimationFrame(function(){t.calculateScrollDistance()})})},t.calculateScrollDistance=function(){var e=window.pageYOffset,a=window.innerHeight,n=t.getDocHeight()-a,l=Math.ceil(e/n*100);t.setState({scrollPosition:l})},t.getDocHeight=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},t.state={display:!1,scrollPosition:0},t}return Object(_.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.listenToScrollEvent()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"nav"},l.a.createElement("h1",{className:"nav__logo"},"Dan Higgins"),l.a.createElement("h1",{className:"nav__logo--mobile"},"DH"),l.a.createElement("ul",{className:"nav__list"},l.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},l.a.createElement("a",{className:"nav__list-items-link",href:"#"},"ABOUT")),l.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},l.a.createElement("a",{className:"nav__list-items-link",href:"#"},"PROJECTS")),l.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},l.a.createElement("a",{className:"nav__list-items-link",href:"#"},"SKILLS")),l.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},l.a.createElement("a",{className:"nav__list-items-link",href:"#"},"EXPERIENCES")),l.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},l.a.createElement("a",{className:"nav__list-items-link",href:"#"},"CONTACT"))),l.a.createElement(u.a,{onClick:this.props.buttonClick,className:"nav__hamburger",icon:N.a})),l.a.createElement(v,{scroll:this.state.scrollPosition+"%"}))}}]),a}(n.Component);t(39);function p(e){return l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,e.text),l.a.createElement("div",{className:"title__border"}))}t(40);var f=t(5);function k(e){return l.a.createElement("div",{className:"section contact-me"},l.a.createElement(p,{text:"Contact me"}),l.a.createElement("div",{className:"contact-me__container"},l.a.createElement("div",{className:"contact-me__container-item"},l.a.createElement(u.a,{icon:f.a}),l.a.createElement("span",{className:"contact-me__link"},l.a.createElement("a",{href:"#"},"DanHiggins23"))),l.a.createElement("div",{className:"contact-me__container-item"},l.a.createElement(u.a,{icon:N.b}),l.a.createElement("span",{className:"contact-me__link"},l.a.createElement("a",{href:"#"},"danhiggins23@outlook.com"))),l.a.createElement("div",{className:"contact-me__container-item"},l.a.createElement(u.a,{icon:f.b}),l.a.createElement("span",{className:"contact-me__link"},l.a.createElement("a",{href:"#"},"Dan Higgins")))))}t(41),t(42),t(43);function g(e){return l.a.createElement("div",{className:e.className},l.a.createElement(u.a,{className:"overlay__close",icon:N.c,onClick:e.buttonClick}),l.a.createElement("div",{className:"overlay__content"},l.a.createElement("h1",{className:"overlay__logo"},"DH"),l.a.createElement("ul",{className:"overlay__nav"},l.a.createElement("li",{className:"overlay__nav-item"},l.a.createElement("a",{className:"overlay__nav-link",href:"#"},"ABOUT")),l.a.createElement("li",{className:"overlay__nav-item"},l.a.createElement("a",{className:"overlay__nav-link",href:"#"},"PROJECTS")),l.a.createElement("li",{className:"overlay__nav-item"},l.a.createElement("a",{className:"overlay__nav-link",href:"#"},"SKILLS")),l.a.createElement("li",{className:"overlay__nav-item"},l.a.createElement("a",{className:"overlay__nav-link",href:"#"},"EXPERIENCES")),l.a.createElement("li",{className:"overlay__nav-item"},l.a.createElement("a",{className:"overlay__nav-link",href:"#"},"CONTACT"))),l.a.createElement("div",{className:"overlay__socials"},l.a.createElement(u.a,{className:"overlay__socials-icon",icon:f.a}),l.a.createElement(u.a,{className:"overlay__socials-icon",icon:N.b}),l.a.createElement(u.a,{className:"overlay__socials-icon",icon:f.b}))))}var y=t(23),b=t.n(y),x=(t(44),t(24)),w=t.n(x);function O(e){return l.a.createElement("div",{className:"download-cv"},l.a.createElement("h2",{className:"download-cv__title"},"Want to find out more?"),l.a.createElement("h3",{className:"download-cv__description"},"Click below to view my CV (.pdf)"),l.a.createElement("span",null,l.a.createElement("a",{className:"download-cv__button",href:w.a},"Download CV")))}var C=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).handleOverlay=function(){t.setState({visible:!t.state.visible},function(){!0===t.state.visible?document.getElementsByTagName("html")[0].style.overflowY="hidden":document.getElementsByTagName("html")[0].style.overflowY="auto"})},t.state={visible:!1},t}return Object(_.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,{className:b()(this.state.visible?"overlay slideIn":"overlay slideOut"),buttonClick:this.handleOverlay}),l.a.createElement(h,{buttonClick:this.handleOverlay}),l.a.createElement("div",{className:"section home"}),l.a.createElement("div",{className:"section about-me"},l.a.createElement(p,{text:"About me"})),l.a.createElement("div",{className:"section projects"},l.a.createElement(p,{text:"Projects"})),l.a.createElement("div",{className:"section skills"},l.a.createElement(p,{text:"My skills"}),l.a.createElement("div",{className:"skills__container"},l.a.createElement("div",{className:"skills__container-item"},l.a.createElement("img",{className:"skills__icon",src:t(4)}),l.a.createElement("span",{className:"skills__link"},l.a.createElement("a",{href:"#"},"Java")),l.a.createElement("p",{className:"skills__description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.")),l.a.createElement("div",{className:"skills__container-item"},l.a.createElement("img",{className:"skills__icon",src:t(4)}),l.a.createElement("span",{className:"skills__link"},l.a.createElement("a",{href:"#"},"Java")),l.a.createElement("p",{className:"skills__description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.")),l.a.createElement("div",{className:"skills__container-item"},l.a.createElement("img",{className:"skills__icon",src:t(4)}),l.a.createElement("span",{className:"skills__link"},l.a.createElement("a",{href:"#"},"Java")),l.a.createElement("p",{className:"skills__description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."))),l.a.createElement("div",{className:"skills__container"},l.a.createElement("div",{className:"skills__container-item"},l.a.createElement("img",{className:"skills__icon",src:t(4)}),l.a.createElement("span",{className:"skills__link"},l.a.createElement("a",{href:"#"},"Java")),l.a.createElement("p",{className:"skills__description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.")),l.a.createElement("div",{className:"skills__container-item"},l.a.createElement("img",{className:"skills__icon",src:t(4)}),l.a.createElement("span",{className:"skills__link"},l.a.createElement("a",{href:"#"},"Java")),l.a.createElement("p",{className:"skills__description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.")),l.a.createElement("div",{className:"skills__container-item"},l.a.createElement("img",{className:"skills__icon",src:t(4)}),l.a.createElement("span",{className:"skills__link"},l.a.createElement("a",{href:"#"},"Java")),l.a.createElement("p",{className:"skills__description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.")))),l.a.createElement("div",{className:"section experiences"},l.a.createElement(p,{text:"Experiences"})),l.a.createElement(O,null),l.a.createElement(k,null),l.a.createElement("div",{className:"section footer"},l.a.createElement("h4",null,"\xa9 Dan Higgins 2019")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[27,1,2]]]);
//# sourceMappingURL=main.21b5aec3.chunk.js.map