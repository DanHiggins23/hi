(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(46),l=a.n(o),c=(a(62),a(16)),r=a(17),s=a(20),m=a(18),d=a(21),u=a(47);function h(){var e=Object(u.a)(["\n  position:  fixed;\n  background:  linear-gradient(\n    to right,\n    #90a4ae ",",\n    transparent  0);\n  width:  100%;\n  height:  5px;\n  margin-top: 102px;\n  z-index: 900;\n"]);return h=function(){return e},e}var p=a(48).a.div(h(),function(e){return e.scroll}),g=(a(66),a(2)),f=a(3),v=a(5),_=a(26),E=a.n(_),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({display:!a.state.display})},a.listenToScrollEvent=function(){document.addEventListener("scroll",function(){requestAnimationFrame(function(){a.calculateScrollDistance()})})},a.calculateScrollDistance=function(){var e=window.pageYOffset,t=window.innerHeight,n=a.getDocHeight()-t,i=Math.ceil(e/n*100);a.setState({scrollPosition:i})},a.getDocHeight=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a.state={display:!1,scrollPosition:0},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.listenToScrollEvent()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"nav"},i.a.createElement(v.b,{className:"nav__logo",to:"/"},i.a.createElement("h1",null,"Dan Higgins")),i.a.createElement(v.b,{className:"nav__logo--mobile",to:"/"},i.a.createElement("h1",null,"DH")),i.a.createElement("ul",{className:"nav__list"},i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:"https://www.linkedin.com/in/danhiggins23"},"Linked In")),i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:"https://github.com/DanHiggins23"},"GitHub")),i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:E.a,target:"_blank",rel:"noopener noreferrer"},"CV")),i.a.createElement("li",{className:"nav__list-items nav__list-items--desktop"},i.a.createElement("a",{className:"nav__list-items-link",href:"mailto:danhiggins23@outlook.com"},i.a.createElement(g.a,{icon:f.h})))),i.a.createElement(g.a,{onClick:this.props.buttonClick,className:"nav__hamburger",icon:f.c})),i.a.createElement(p,{scroll:this.state.scrollPosition+"%"}))}}]),t}(n.Component);a(70),a(71);function b(e){return i.a.createElement("div",{className:"intro"},i.a.createElement("h1",{className:"intro__title"},e.title),e.description?i.a.createElement("h4",{className:"intro__description"},e.description):null)}var y=a(6),N=a(8),k=a.n(N);function I(e){return i.a.createElement("div",{className:"section contact-me"},i.a.createElement(k.a,{bottom:!0},i.a.createElement(b,{title:"Want to get in touch? \ud83d\udcde",description:"Want to say Hello? Check out what I've been up to on Linked In or GitHub. Otherwise just drop me an email!"}),i.a.createElement("div",{className:"contact-me__container"},i.a.createElement("div",{className:"contact-me__container-item"},i.a.createElement("a",{className:"contact-me__icon",href:"https://www.linkedin.com/in/danhiggins23"},i.a.createElement(g.a,{icon:y.f}))),i.a.createElement("div",{className:"contact-me__container-item"},i.a.createElement("a",{className:"contact-me__icon",href:"https://github.com/DanHiggins23"},i.a.createElement(g.a,{icon:y.c}))),i.a.createElement("div",{className:"contact-me__container-item"},i.a.createElement("a",{className:"contact-me__icon",href:"mailto:danhiggins23@outlook.com"},i.a.createElement(g.a,{icon:f.h}))))))}a(73),a(74),a(75);function j(e){return i.a.createElement("div",{className:e.className},i.a.createElement(g.a,{className:"overlay__close",icon:f.l,onClick:e.buttonClick}),i.a.createElement("div",{className:"overlay__content"},i.a.createElement("h1",{className:"overlay__logo"},"DH"),i.a.createElement("ul",{className:"overlay__nav"},i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement(v.b,{className:"overlay__nav-link",to:"/bt",onClick:e.buttonClick},"BT")),i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement(v.b,{className:"overlay__nav-link",to:"/ford",onClick:e.buttonClick},"FORD")),i.a.createElement("li",{className:"overlay__nav-item"},i.a.createElement(v.b,{className:"overlay__nav-link",to:"/santander",onClick:e.buttonClick},"SANTANDER"))),i.a.createElement("div",{className:"overlay__socials"},i.a.createElement("a",{href:"https://www.linkedin.com/in/danhiggins23"},i.a.createElement(g.a,{className:"overlay__socials-icon",icon:y.f})),i.a.createElement("a",{href:"https://github.com/DanHiggins23"},i.a.createElement(g.a,{className:"overlay__socials-icon",icon:y.c})),i.a.createElement("a",{href:"mailto:danhiggins23@outlook.com"},i.a.createElement(g.a,{className:"overlay__socials-icon",icon:f.h})))))}var S=a(52),C=a.n(S);a(76);function x(e){return i.a.createElement("div",{className:"download-cv"},i.a.createElement(k.a,{bottom:!0},i.a.createElement("h2",{className:"download-cv__title"},"Want to find out more?"),i.a.createElement("h3",{className:"download-cv__description"},"Click below to view my CV (.pdf)"),i.a.createElement("span",null,i.a.createElement("a",{className:"download-cv__button",href:E.a,target:"_blank",rel:"noopener noreferrer"},"Download CV"))))}a(77);var T=a(54);function A(e){return i.a.createElement("div",{className:"section about-me"},i.a.createElement("div",{className:"about-me"},i.a.createElement("div",{className:"about-me__title"},i.a.createElement(k.a,{bottom:!0},i.a.createElement("div",null,i.a.createElement("span",null,"Hi, I'm"),i.a.createElement(T.a,{delay:"1000",interval:"2000"},i.a.createElement("span",null,"\xa0Dan Higgins"),i.a.createElement("span",null,"\xa0a Developer"),i.a.createElement("span",null,"\xa0a Consultant")),i.a.createElement("span",{role:"img","aria-label":"jsx-a11y/aria-proptypes"},"\xa0\ud83d\udc4b")))),i.a.createElement(k.a,{bottom:!0,delay:500},i.a.createElement("h3",{className:"about-me__description"},"I've been working on a range of projects with companies such as ",i.a.createElement("span",{className:"ford-underline"},i.a.createElement(v.b,{to:"/ford"},"Ford")),", ",i.a.createElement("span",{className:"bt-underline"},i.a.createElement(v.b,{to:"/bt"},"BT"))," and ",i.a.createElement("span",{className:"santander-underline"},i.a.createElement(v.b,{to:"/santander"},"Santander"))," for the last few years. Have a look what I've been up to!"))),i.a.createElement(k.a,{bottom:!0,delay:500},i.a.createElement("img",{className:"about-me__image",src:a(85),alt:"Me in Amsterdam"})))}a(86);function O(e){return i.a.createElement("div",{className:"section clients"},i.a.createElement(k.a,{bottom:!0},i.a.createElement(b,{title:"Who've I been working with? \ud83e\udd1d",description:"Here's a few of the companies I've been working with over the last few years. My roles have ranged from project management to back-end, front-end and full-stack developer. I'm currently employed by QA as a Consultant, deployed at Santander as a Back-end Developer."}),i.a.createElement("div",{className:"clients__container"},i.a.createElement("img",{className:"clients__image clients__image--santander",src:a(33),alt:"Santander Logo"}),i.a.createElement("img",{className:"clients__image clients__image--bt",src:a(34),alt:"BT Logo"}),i.a.createElement("img",{className:"clients__image clients__image--nb",src:a(87),alt:"NETbuilder Logo"}),i.a.createElement("img",{className:"clients__image clients__image--qa",src:a(88),alt:"QA Logo"}),i.a.createElement("img",{className:"clients__image clients__image--ford",src:a(89),alt:"Ford Logo"}))))}a(90);function H(e){return i.a.createElement("div",{className:"section projects"},i.a.createElement(k.a,{bottom:!0},i.a.createElement(b,{title:"What have I been doing? \ud83d\udc68\u200d\ud83d\udcbb",description:"Want to see what I've been up to? Click any tile to have a look at the projects I've been involved in with my biggest clients."}),i.a.createElement("div",{className:"projects__tile-container"},i.a.createElement("div",{className:"projects__tile projects__tile--santander"},i.a.createElement(v.b,{className:"projects__tile-image",to:"/santander"},i.a.createElement("img",{className:"projects__tile-image projects__tile-image--santander",src:a(33),alt:"Santander Logo"}))),i.a.createElement("div",{className:"projects__tile projects__tile--ford"},i.a.createElement(v.b,{className:"projects__tile-image",to:"/ford"},i.a.createElement("img",{className:"projects__tile-image projects__tile-image--ford",src:a(45),alt:"BT Logo"}))),i.a.createElement("div",{className:"projects__tile projects__tile--bt"},i.a.createElement(v.b,{className:"projects__tile-image",to:"/bt"},i.a.createElement("img",{className:"projects__tile-image--bt",src:a(34),alt:"BT Logo"}))))))}a(91),a(92);var D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({showText:!a.state.showText,animate:!a.state.animate})},a.state={showText:!1,aniamte:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"getStringLength",value:function(e){return this.state.showText?e:e.slice(0,115)+"..."}},{key:"render",value:function(){return i.a.createElement("div",{className:"skills__container-item"},i.a.createElement(g.a,{icon:this.props.icon}),this.props.imagePath?i.a.createElement("img",{className:"qualifications__image qualifications__image",src:this.props.imagePath,alt:this.props.altText}):null,i.a.createElement("span",{className:"skills__link"},this.props.title),this.props.text?i.a.createElement("p",{onClick:this.handleClick,className:this.state.showText?"skills__description skills__test hvr-icon-up":"skills__description hvr-icon-down"},this.getStringLength(this.props.text),i.a.createElement(g.a,{icon:this.state.showText?f.b:f.a,className:"skills__more hvr-icon",onClick:this.handleClick})):null)}}]),t}(n.Component);function L(e){return i.a.createElement("div",{className:"section skills"},i.a.createElement(k.a,{bottom:!0},i.a.createElement(b,{title:"What can I do? \ud83d\udcbb",description:"I'm always learning to expand my skills further. Here's a few examples of what I've been doing recently in the projects I've currently been working on."}),i.a.createElement("div",null,i.a.createElement("div",{className:"skills__container"},i.a.createElement(D,{icon:y.g,title:"React JS",text:"I've spent the last 6 months working with an AEM React implementation creating functional and stateful components that are unit tested, documented and example files created. I also created this portfolio in React!"}),i.a.createElement(D,{icon:y.d,title:"Java",text:"I've been using Java recently to create sling models for the AEM React components. I've also produced many projects, such as a bank GUI application and a text-based adventure game."}),i.a.createElement(D,{icon:f.d,title:"Testing",text:"I have experience using Selenium and Chrome web driver with JUnit to automate processes, as well as using JEST with sinon, React Test and DOM rendered in order to unit test components. More recently, I have also been using Cypress to test an internal node project at Santander efficiently."}),i.a.createElement(D,{icon:y.a,title:"AEM",text:"I've recently been using AEM 6.2-6.5 and creating Angular and React components end-to-end. The majority of my time was spent using an AEM React SPA implementation of AEM."}),i.a.createElement(D,{icon:f.g,title:"HTML & CSS",text:"I've been doing HTML and CSS for a long time now, with knowledge in HTML5 and CSS3, where I've created multiple websites and Javascript projects. I now continue to use it with JSX in React components."}),i.a.createElement(D,{icon:y.h,title:"SASS",text:"I've been using SASS as my primary css pre-processor using the BEM notation. I've got very comfortable with this procedure and utlised it in the project I was involved with at BT as well as this portfolio."}),i.a.createElement(D,{icon:y.e,title:"Jenkins",text:"During my time at Santander I gained a far clearer understanding of Continuous Integration with gitlab and Jenkins, ensuring pipelines passed before deployments and creating new pipelines within Jenkins."})))))}a(93);function B(e){return i.a.createElement("div",{className:"section qualifications"},i.a.createElement(k.a,{bottom:!0},i.a.createElement(b,{title:"My qualifcations \ud83c\udfc6",description:"Below are the qualifications I've earnt to date. I'm very keen to delve more into Cloud and Cyber Security, so expect more qualifications soon.."}),i.a.createElement("div",{className:"qualifications__container"},i.a.createElement(D,{imagePath:a(94),altText:"Teesside Logo",title:"BSc Computer & Digital Forensics"}),i.a.createElement(D,{imagePath:a(95),altText:"Open University Logo",title:"Introduction to Cyber Security"}))))}var J=a(4),M=(a(35),a(19)),W=a.n(M);a(104);function R(e){return i.a.createElement("div",{className:"body"},i.a.createElement("h2",{className:"body__title"},e.title),e.description?i.a.createElement("h4",{className:"body__description"},e.description):null)}a(105);function U(e){var t=Object(J.f)();return i.a.createElement("button",{className:"back hvr-icon-wobble-horizontal"},i.a.createElement(g.a,{className:"back__icon hvr-icon",icon:f.f,onClick:function(){t.goBack()}}))}function P(e){return i.a.createElement("div",{className:"section projectInfo"},i.a.createElement(W.a,null,i.a.createElement(b,{title:"Overview",description:"After learning AEM in my first month at NETbuilder, I put the skills into practise in 2 projects across BT developing components for the support & mobile feature management/usage section of the BT Business site. I began developing components in Angular JS using HTL and then shortly moved to a react implementation. I was personally the first individual to use this implementation across the company and learnt a lot in the process. I then moved onto a single page application implementation within React, where I was producing components end-to-end, documenting each component utilising styleguidist and ensuring high test coverage by writing unit tests for each component using jest. I was also following agile methodologies and ceremonies daily and became very familiar with this process."}),i.a.createElement("div",{className:"projectInfo__tile projectInfo__tile--bt"},i.a.createElement("img",{className:"projectInfo__tile-image projectInfo__tile-image--bt",src:a(34),alt:"BT Logo"})),i.a.createElement(R,{title:"What technologies did I use?",description:"I used range of technologies at my time with BT, including; Adobe Experience Manager, React JS, Angular JS, Java, JUnit, React Test Utils, React Test Rendered, Styleguidist and SASS."}),i.a.createElement("div",{className:"projectInfo__tech-container"},i.a.createElement(g.a,{className:"projectInfo__tech-icon",icon:y.a}),i.a.createElement(g.a,{className:"projectInfo__tech-icon",icon:y.g}),i.a.createElement(g.a,{className:"projectInfo__tech-icon",icon:y.d})),i.a.createElement(R,{title:"What did I learn?",description:"At this point, the majority of technologies were fairly new to me. I\u2019d begun to learn them all during my training at QA, but had no real-life experience with them. I feel like my skills in multiple technologies really developed throughout my time at BT. Working with a full-stack technology helped me understand how all the \u201cpieces\u201d go together. In Addition to this, working very closely with other members in my team, I was heavily involved in the process from conception to UX, to UI, to development. This I really enjoyed."}),i.a.createElement("div",{className:"projectInfo__line"})),i.a.createElement(U,null))}function q(e){return i.a.createElement("div",{className:"section projectInfo"},i.a.createElement(W.a,null,i.a.createElement(b,{title:"Overview",description:"During my time at Santander, I was situated in an agile squad working within the fraud prevention department within Santech UK as a Full Stack Developer. My initial responsibility was to test an internal rule engine node project, end-to-end. I did this using the Cypress testing framework and integrated it headlessly into a Jenkins pipeline. I was also involved creating micro-services to manipulate payloads and add business logic to allow/prevent/challenge transactions, as well as creating additional operators and end points within the internal rule engine project to allow internal memebers to create more accurate rules."}),i.a.createElement("div",{className:"projectInfo__tile projectInfo__tile--santander"},i.a.createElement("img",{className:"projectInfo__tile-image projectInfo__tile-image--santander",src:a(33),alt:"Santander Logo"})),i.a.createElement(R,{title:"What technologies did I use?",description:"I used range of technologies at my time with Santander, including; Cypress, Node, Angular JS, Java, JUnit, Jenkins and SQL."}),i.a.createElement("div",{className:"projectInfo__tech-container"},i.a.createElement(g.a,{className:"projectInfo__tech-icon",icon:y.b}),i.a.createElement(g.a,{className:"projectInfo__tech-icon",icon:y.d}),i.a.createElement(g.a,{className:"projectInfo__tech-icon",icon:f.d})),i.a.createElement(R,{title:"What did I learn?",description:"I learnt a lot during my time at Santander. Although I had already had become very familiar with the Agile way of working, it was very great to gain further experience and adapt to a new, more structured enviroment and way of working at a Bank. I really enjoyed learning the Cypress framework and thought it was a great way to really understand the details of the internal project that I was to working on. Although I used Java within AEM at BT, it was great to gain further knowledge of creating micro-services and testing them with Postman which I had little prior experience with."}),i.a.createElement("div",{className:"projectInfo__line"})),i.a.createElement(U,null))}function F(e){return i.a.createElement("div",{className:"section projectInfo"},i.a.createElement(W.a,null,i.a.createElement(b,{title:"Overview",description:"During this 3-month summer placement as Project Manager at Ford, I was involved in multiple\r different projects, responsible for holding meetings with world-wide clients, working with large\r amounts of capital. I personally solely managed a pilot project for the company and brought a\r project from Red status to Green in my time at Ford, in which I collaboratively managed a remote team in the United States. During this time, I got very accustomed to\r using software such as WebEx and developing my ability to make relationships over the phone."}),i.a.createElement("div",{className:"projectInfo__tile projectInfo__tile--ford"},i.a.createElement("img",{className:"projectInfo__tile-image projectInfo__tile-image--ford",src:a(45),alt:"Ford Logo"})),i.a.createElement("div",{className:"projectInfo__tech-container"},i.a.createElement(g.a,{className:"projectInfo__tech-icon",icon:f.i}),i.a.createElement(g.a,{className:"projectInfo__tech-icon",icon:f.k}),i.a.createElement(g.a,{className:"projectInfo__tech-icon",icon:f.j})),i.a.createElement(R,{title:"What did I learn?",description:"As Ford was my first proper placement and my first taste of working life, I learnt a vast amount. I really developed my ability to develop relationships with colleagues and clients, especially over the phone. A lot of our team worked in the United States, and therefore I never got to meet them face to face. However, taking the time to chat with each team member at the start of each meeting really allowed me to get to know them. As I solely managed a pilot project, it was a great opportunity to put to use my leadership skills - which I really enjoyed."}),i.a.createElement("div",{className:"projectInfo__line"})),i.a.createElement(U,null))}a(106);function Q(e){return i.a.createElement("button",{className:"scroll-up hvr-icon-wobble-vertical"},i.a.createElement(g.a,{className:"scroll-up__icon hvr-icon",icon:f.e,onClick:e.buttonClick}))}var G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleOverlay=function(){a.setState({visible:!a.state.visible},function(){a.state.visible?document.getElementsByTagName("html")[0].style.overflowY="hidden":document.getElementsByTagName("html")[0].style.overflowY="auto"})},a.state={visible:!1,showBack:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"scrollUp",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(j,{className:C()(this.state.visible?"overlay slideIn":"overlay slideOut"),buttonClick:this.handleOverlay}),i.a.createElement(w,{buttonClick:this.handleOverlay}),i.a.createElement(J.c,null,i.a.createElement(J.a,{exact:!0,path:"/"},i.a.createElement(A,null),i.a.createElement(O,null),i.a.createElement(L,null),i.a.createElement(H,null),i.a.createElement(B,null),i.a.createElement(x,null),i.a.createElement(I,null)),i.a.createElement(J.a,{path:"/bt"},i.a.createElement(P,null)),i.a.createElement(J.a,{path:"/santander"},i.a.createElement(q,null)),i.a.createElement(J.a,{path:"/ford"},i.a.createElement(F,null))),i.a.createElement(Q,{buttonClick:this.scrollUp}),i.a.createElement("div",{className:"footer"},i.a.createElement("h4",null,"\xa9 Dan Higgins 2020")))}}]),t}(n.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(i.a.createElement(v.a,null,i.a.createElement(function(){var e=Object(J.g)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e]),null},null),i.a.createElement(G,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");V?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Y(t,e)})}}()},26:function(e,t,a){e.exports=a.p+"static/media/DanHiggins.fb6b8ca4.pdf"},33:function(e,t,a){e.exports=a.p+"static/media/santander-logo.602a604c.png"},34:function(e,t,a){e.exports=a.p+"static/media/bt-logo.5c8f04b3.png"},35:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/ford-logo-trans.f6f24dfc.png"},57:function(e,t,a){e.exports=a(107)},62:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},85:function(e,t,a){e.exports=a.p+"static/media/amsterdam.50b1e498.jpg"},86:function(e,t,a){},87:function(e,t,a){e.exports=a.p+"static/media/nb-logo.b2f8a129.png"},88:function(e,t,a){e.exports=a.p+"static/media/QA-logo.fbf3ad9e.png"},89:function(e,t,a){e.exports=a.p+"static/media/ford-logo.919a39e1.png"},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){e.exports=a.p+"static/media/teesside-uni.faeb3ef8.png"},95:function(e,t,a){e.exports=a.p+"static/media/open-university.e1a632c3.png"}},[[57,1,2]]]);
//# sourceMappingURL=main.b99e4062.chunk.js.map