(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Mood & Music",description:"Front-end app that analyzes a photo and returns the song associated with the facial emotion that has been detected. Users can enable the app to use their webcam to take facial snapshots or upload an image file of their own.",github:"https://github.com/do-kevin/Project-One",live:"https://do-kevin.github.io/Mood-and-Music/"},{id:2,name:"The Neverending Dead",description:"A full-stack browser RPG game where players must defeat the last boss from a line of enemies. If the player dies, he/she joins the line of enemies. Players can buy items or skills after each round.",github:"https://github.com/do-kevin/Project-Two",live:"https://neverending-dead.herokuapp.com/"},{id:3,name:"Zephyr Node",description:"Productivity app that helps users organize their notes, flashcards, to-dos, and reminders. Users have the option to send flashcards and reminders as text messages.",github:"https://github.com/do-kevin/Project-Three",live:"https://zephyr-node.herokuapp.com/"},{id:4,name:"Pokemon Memory Game",description:"A React.js memory game that is Pokemon-themed. The user must not click on the same Pokemon twice.",github:"https://github.com/do-kevin/react-clicky-game",live:"https://do-kevin.github.io/react-clicky-game/"},{id:5,name:"NPR Mongo Scraper",description:"A scraping app that grabs articles from NPR.org and allows the user to save notes on them. It is a React app that uses MongoDB and Mongoose.",github:"https://github.com/do-kevin/Scrape-Scrape-News",live:"https://npr-mongo-scrape-scrape.herokuapp.com"}]},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/moodNmusic.3b6a3bf5.png"},function(e,t,a){e.exports=a.p+"static/media/neverending.29fcdc95.png"},function(e,t,a){e.exports=a.p+"static/media/zephyrnode.a3bab1ce.png"},function(e,t,a){e.exports=a.p+"static/media/memorygame.1de52593.png"},function(e,t,a){e.exports=a.p+"static/media/nprscraper.ba9383c3.png"},,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/about-picture.9cd80e06.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),o=a.n(i),l=(a(20),a(2)),s=a(3),c=a(5),m=a(4),h=a(6),d=a(7),u=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={toStickOrNot:{height:"25vmin"},sticky:{top:"0",width:"100%",height:"17vmin",position:"fixed",zIndex:"1",opacity:"0.97"},placeholderStyles:null,stickyFontSize:{fontSize:"7vw"}},a.handleScroll=a.handleScroll.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){window.scrollY>.25*window.innerHeight?this.setState({toStickOrNot:this.state.sticky,placeholderStyles:{height:"0"},stickyFontSize:{fontSize:"5vw"}}):window.scrollY<window.innerHeight&&this.setState({toStickOrNot:{height:"22vmin"},placeholderStyles:{height:"2vmin"},stickyFontSize:{fontSize:"7vw"}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"hero has-text-centered",id:"portfolio-banner"},r.a.createElement("h1",{className:"title noselect animated flipInX",id:"banner-title"},"Kevin Do"),r.a.createElement("h2",{className:"title noselect animated fadeIn delay-470ms",id:"banner-subtitle"},"A Front-End Engineer")),r.a.createElement("nav",{className:"breadcrumb is-centered",id:"menu-bar",style:this.state.toStickOrNot},r.a.createElement("div",{id:"menu-box-placeholder",style:this.state.placeholderStyles}),r.a.createElement("ul",{id:"menu-ul"},r.a.createElement("li",{className:"animated bounceInLeft"},r.a.createElement("button",{className:"menu-choice",id:"left-menu-item",style:this.state.stickyFontSize,onClick:this.props.clickedAbout},"ABOUT")),r.a.createElement("li",{className:"animated bounceInRight"},r.a.createElement("button",{className:"menu-choice",id:"right-menu-item",style:this.state.stickyFontSize,onClick:this.props.clickedPortfolio},"PORTFOLIO")))))}}]),t}(n.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer animated slideInUp",id:"page-footer"},r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"has-text-centered noselect",id:"footer-text"},r.a.createElement("a",{href:"https://github.com/do-kevin",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fab fa-github"})),"\xa0\xa0Handcrafted by me\xa0\xa0",r.a.createElement("a",{href:"https://www.linkedin.com/in/kevin-v-do/",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fab fa-linkedin linkedin-foot"})),r.a.createElement("br",null),"20 ",r.a.createElement("i",{className:"fas fa-copyright"})," 18")))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card showcase is-horizontal ".concat(this.props.animateClassNames)},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-16by9"},r.a.createElement("img",{src:this.props.image,alt:this.props.name,className:"project-img animated fadeIn"}))),r.a.createElement("div",{className:"card-content project-content"},r.a.createElement("p",{className:"title has-text-centered noselect project-body"},this.props.name),r.a.createElement("div",{className:"content noselect project-body"},this.props.description),r.a.createElement("div",{className:"content noselect has-text-centered project-body"},r.a.createElement("h6",null,"Developers"),this.props.developers)),r.a.createElement("footer",{className:"card-footer footer-links"},r.a.createElement("p",{className:"project-links"},r.a.createElement("span",null,r.a.createElement("a",{href:this.props.github,rel:"noreferrer noopener",target:"_blank"},r.a.createElement("i",{className:"fab fa-github-square",id:"gh-icon"})))),r.a.createElement("p",{className:"project-links"},r.a.createElement("span",null,r.a.createElement("a",{href:this.props.live,rel:"noreferrer noopener",target:"_blank"},r.a.createElement("i",{className:"fas fa-external-link-square-alt",id:"ext-link-icon"}))))))}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(this.props.aboutAnimateClassNames),id:"about-page"},r.a.createElement("figure",{id:"image-wrapper"},r.a.createElement("img",{src:a(23),alt:"avatar",id:"about-picture",className:"animated pulse delay-200ms"})),r.a.createElement("article",{className:"section has-text-left"},r.a.createElement("p",{id:"profile-info"},"I am a front-end engineer and an UCLAX coding bootcamp graduate that is based in Los Angeles. Driven by curiosity, I strive to build a fun interactive experience between websites and users. I aim to hone my skills and to practice my craft so I can deliver functional and beautiful websites."),r.a.createElement("br",null),r.a.createElement("p",{id:"profile-info",className:"has-text-centered"},"View my resume or contact me:",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{className:"external-links button",href:"https://www.visualcv.com/kevin-do-tech-18",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fas fa-portrait"}),"\xa0Resume"),"\xa0\xa0",r.a.createElement("a",{className:"external-links button",href:"https://www.linkedin.com/in/kevin-v-do",target:"_blank",rel:"noreferrer noopener"},"Linked",r.a.createElement("i",{className:"fab fa-linkedin"})))))}}]),t}(n.Component),g=a(1),v=g.length,E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentPage:"portfolio",showcaseAnimations:"animated fadeIn",aboutAnimations:"",lastCardAnimation:"animated fadeIn",horizontalOrNot:!1},a.horizontalCardToNorm=function(){window.innerWidth<1200?a.setState({horizontalOrNot:!0}):window.innerWidth>1200&&a.setState({horizontalOrNot:!1})},a.handleAbout=function(){setTimeout(function(){a.setState({currentPage:"about"})},1700),a.setState({showcaseAnimations:"animated fadeOut",aboutAnimations:"animated fadeIn",lastCardAnimation:"animated fadeOut"}),document.querySelector("#right-menu-item").setAttribute("disabled",""),document.querySelector("#left-menu-item").setAttribute("disabled",""),setTimeout(function(){document.querySelector("#right-menu-item").removeAttribute("disabled")},100+v)},a.handlePortfolio=function(){setTimeout(function(){a.setState({currentPage:"portfolio"})},1100),a.setState({showcaseAnimations:"animated fadeIn",aboutAnimations:"animated fadeOut",lastCardAnimation:"animated fadeIn"}),document.querySelector("#left-menu-item").setAttribute("disabled",""),document.querySelector("#right-menu-item").setAttribute("disabled",""),setTimeout(function(){document.querySelector("#left-menu-item").removeAttribute("disabled")},v-400)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.horizontalCardToNorm)}},{key:"render",value:function(){var e;return"portfolio"===this.state.currentPage&&!1===this.state.horizontalOrNot?e=r.a.createElement("div",{style:{paddingBottom:"200px"}},r.a.createElement(b,{key:g[0].id,animateClassNames:this.state.showcaseAnimations,name:g[0].name,image:a(9),description:g[0].description,developers:r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/do-kevin",rel:"noreferrer noopener",target:"_blank"},"Kevin Do"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/JSR88431",rel:"noreferrer noopener",target:"_blank"},"Josephson Reynoso"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/ironaidan",rel:"noreferrer noopener",target:"_blank"},"Aidan Nemeth")),github:g[0].github,live:g[0].live}),r.a.createElement(b,{key:g[1].id,animateClassNames:"".concat(this.state.showcaseAnimations," delay-250ms"),name:g[1].name,image:a(10),description:g[1].description,developers:r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/do-kevin",rel:"noreferrer noopener",target:"_blank"},"Kevin Do"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TimGorodnitski",rel:"noreferrer noopener",target:"_blank"},"Tim Gorodnitski"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/ajz003",rel:"noreferrer noopener",target:"_blank"},"Anthony Zheng"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/karlChainBLX",rel:"noreferrer noopener",target:"_blank"},"Karl Seelig")),github:g[1].github,live:g[1].live}),r.a.createElement(b,{key:g[2].id,animateClassNames:"".concat(this.state.showcaseAnimations," delay-500ms"),name:g[2].name,image:a(11),description:g[2].description,developers:r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/do-kevin",rel:"noreferrer noopener",target:"_blank"},"Kevin Do"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/aparakaki",rel:"noreferrer noopener",target:"_blank"},"Ana Arakaki"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/pauline-ann",rel:"noreferrer noopener",target:"_blank"},"Pauline Bantayan"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/chrisArmo",rel:"noreferrer noopener",target:"_blank"},"Chris Armendarez")),github:g[2].github,live:g[2].live}),r.a.createElement(b,{key:g[3].id,animateClassNames:"short-showcase ".concat(this.state.lastCardAnimation," delay-750ms"),name:g[3].name,image:a(12),description:g[3].description,developers:r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/do-kevin",rel:"noreferrer noopener",target:"_blank"},"Kevin Do"),r.a.createElement("br",null)),github:g[3].github,live:g[3].live}),r.a.createElement(b,{key:g[4].id,animateClassNames:"short-showcase ".concat(this.state.lastCardAnimation," delay-1000ms"),name:g[4].name,image:a(13),description:g[4].description,developers:r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/do-kevin",rel:"noreferrer noopener",target:"_blank"},"Kevin Do"),r.a.createElement("br",null)),github:g[4].github,live:g[4].live})):"portfolio"===this.state.currentPage&&!0===this.state.horizontalOrNot?e=r.a.createElement("div",{style:{paddingBottom:"200px"}},r.a.createElement("div",{className:"columns",style:{margin:"auto",width:"95%"}},r.a.createElement(b,{key:g[0].id,animateClassNames:this.state.showcaseAnimations,name:g[0].name,image:a(9),description:g[0].description,developers:r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/do-kevin",rel:"noreferrer noopener",target:"_blank"},"Kevin Do"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/JSR88431",rel:"noreferrer noopener",target:"_blank"},"Josephson Reynoso"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/ironaidan",rel:"noreferrer noopener",target:"_blank"},"Aidan Nemeth")),github:g[0].github,live:g[0].live}),r.a.createElement(b,{key:g[1].id,animateClassNames:"".concat(this.state.showcaseAnimations," delay-250ms"),name:g[1].name,image:a(10),description:g[1].description,developers:r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/do-kevin",rel:"noreferrer noopener",target:"_blank"},"Kevin Do"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TimGorodnitski",rel:"noreferrer noopener",target:"_blank"},"Tim Gorodnitski"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/ajz003",rel:"noreferrer noopener",target:"_blank"},"Anthony Zheng"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/karlChainBLX",rel:"noreferrer noopener",target:"_blank"},"Karl Seelig")),github:g[1].github,live:g[1].live}),r.a.createElement(b,{key:g[2].id,animateClassNames:"".concat(this.state.showcaseAnimations," delay-500ms"),name:g[2].name,image:a(11),description:g[2].description,developers:r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/do-kevin",rel:"noreferrer noopener",target:"_blank"},"Kevin Do"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/JSR88431",rel:"noreferrer noopener",target:"_blank"},"Josephson Reynoso"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/ironaidan",rel:"noreferrer noopener",target:"_blank"},"Aidan Nemeth")),github:g[2].github,live:g[2].live})),r.a.createElement("div",{className:"columns",style:{margin:"auto",width:"95%"}},r.a.createElement(b,{key:g[3].id,animateClassNames:"short-showcase ".concat(this.state.lastCardAnimation," delay-750ms"),name:g[3].name,image:a(12),description:g[3].description,developers:r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/do-kevin",rel:"noreferrer noopener",target:"_blank"},"Kevin Do"),r.a.createElement("br",null)),github:g[3].github,live:g[3].live}),r.a.createElement(b,{key:g[4].id,animateClassNames:"short-showcase ".concat(this.state.lastCardAnimation," delay-1000ms"),name:g[4].name,image:a(13),description:g[4].description,developers:r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/do-kevin",rel:"noreferrer noopener",target:"_blank"},"Kevin Do"),r.a.createElement("br",null)),github:g[4].github,live:g[4].live}))):"about"===this.state.currentPage&&(e=r.a.createElement(f,{aboutAnimateClassNames:this.state.aboutAnimations})),r.a.createElement("div",{className:"app"},r.a.createElement(u,{clickedAbout:this.handleAbout,clickedPortfolio:this.handlePortfolio}),e,r.a.createElement(p,null))}}]),t}(n.Component);o.a.render(r.a.createElement(E,null),document.querySelector("#root"))}],[[15,2,1]]]);
//# sourceMappingURL=main.04880a69.chunk.js.map