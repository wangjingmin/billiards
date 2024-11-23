"use strict";(self.webpackChunkbilliards=self.webpackChunkbilliards||[]).push([[893],{"./src/mathaven.ts":(t,e,n)=>{var i=n("./src/model/physics/claude/constants.ts"),o=n("./src/model/physics/claude/qwen.ts");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n||t):o.value}})(t,e,n||t)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(c=function(){return!!t})()}var l=/*#__PURE__*/function(t){var e;function n(){var t,e,i,o;return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),e=n,i=arguments,e=s(e),r(t=(o=c()?Reflect.construct(e,i||[],s(this).constructor):e.apply(this,i))&&("object"==(o&&"undefined"!=typeof Symbol&&o.constructor===Symbol?"symbol":typeof o)||"function"==typeof o)?o:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this),"h",[]),r(t,"extractValues",function(e){return t.h.map(e).map(function(t){return null!=t?t:0})}),t}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(n,t),e=[{key:"updateSingleStep",value:function(t){a(s(n.prototype),"updateSingleStep",this).call(this,t),this.h.push(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}({},this))}}],function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(n.prototype,e),n}(o.z),h={responsive:!0,showLink:!0,plotlyServerURL:"https://chart-studio.plotly.com"},f={legend:{font:{color:"#4D5663"},bgcolor:"#e5e6F9"},title:{text:"",font:{size:11}},xaxis:{title:"impulse",tickfont:{color:"#4D5663"},gridcolor:"#E1E5ED",titlefont:{color:"#4D5663"},zerolinecolor:"#E1E5ED"},yaxis:{title:"value",tickfont:{color:"#4D5663"},zeroline:!1,gridcolor:"#E1E5ED",titlefont:{color:"#4D5663"},zerolinecolor:"#E1E5ED"},plot_bgcolor:"#F5F6F9",paper_bgcolor:"#F2F6F9"};function p(t){return"hsl(".concat(137.5*t%360,", ").concat(70,"%, ").concat(50,"%)")}function v(t,e,n,i){return{x:t,y:e,name:n,line:{color:i,width:1.3},mode:"lines",type:"scatter"}}var y=/*#__PURE__*/function(){var t;function e(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e)}return t=[{key:"plot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.PI/4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2*t/i.R,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5*t/i.R,r=new l(i.M,i.R,i.ee,i.o,i._);try{r.solvePaper(t,e,n,o)}catch(t){console.error(t)}var a=r.extractValues,s=a(function(t){return t.P});f.title.text="<b>Figure.12</b> Slip–impulse curves \nfor V0 = 2 m/s, α = 45◦,ωS0 = 2V0/R, and ωT0 = 1.5V0/R \n<br>(s and φ are for the slip at the cushion, \nand sʹ and φʹ are for the slip at the table)",window.Plotly.newPlot("mathaven-impulse",[v(s,a(function(t){return t.s}),"s",p(0)),v(s,a(function(t){return t.φ}),"φ",p(1)),v(s,a(function(t){return t.sʹ}),"s'",p(2)),v(s,a(function(t){return t.φʹ}),"φʹ",p(3)),v(s,a(function(t){return t.WzI}),"WzI",p(4)),v(s,a(function(t){return t.P}),"P",p(5))],f,h),f.title.text="";var u=a(function(t){return t.i});window.Plotly.newPlot("mathaven-vel",[v(u,a(function(t){return t.vy}),"vy",p(0)),v(u,a(function(t){return t.vx}),"vx",p(1)),v(u,a(function(t){return t.ωx*i.R}),"ωx",p(2)),v(u,a(function(t){return t.ωy*i.R}),"ωy",p(3)),v(u,a(function(t){return t.ωz*i.R}),"ωz",p(4)),v(u,a(function(t){return t.WzI}),"WzI",p(5)),v(u,a(function(t){return t.P}),"P",p(6))],f,h)}}],function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(e.prototype,t),e}(),d=/*#__PURE__*/function(){var t;function e(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e)}return t=[{key:"getFinalState",value:function(t,e,n,r){try{var a=new o.z(i.M,i.R,i.ee,i.o,i._);a.solvePaper(t,e,n,r);var s=a.vy,u=a.vx;return{beta:180/Math.PI*Math.atan2(-s,u),speed:Math.sqrt(u*u+s*s)}}catch(t){return console.error(t),{beta:NaN,speed:NaN}}}},{key:"plot",value:function(t,e,n){for(var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t){return 0},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(t){return t/i.R},a=[],s=[],u=[],c=-1;c<=2;c++){var l=[],y=[];u=[];for(var d=1;d<90;d+=9){u.push(d);var b=this.getFinalState(1,Math.PI/180*d,o(c),r(c));l.push(b.speed),y.push(b.beta)}a.push(l),s.push(y)}var g=u;f.title.text=n,window.Plotly.newPlot(t,[v(g,a[0],"k=-1",p(0)),v(g,a[1],"k=0",p(1)),v(g,a[2],"k=1",p(2)),v(g,a[3],"k=2",p(3))],f,h),window.Plotly.newPlot(e,[v(g,s[0],"k=-1",p(0)),v(g,s[1],"k=0",p(1)),v(g,s[2],"k=1",p(2)),v(g,s[3],"k=2",p(3))],f,h)}}],function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(e.prototype,t),e}(),b=n("./src/model/physics/constants.ts"),g=/*#__PURE__*/function(){var t;function e(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e)}return t=[{key:"relativeVelocity",value:function(t,n,i,o){return Math.sqrt(Math.pow(t*Math.sin(o)-i*e.R,2)+Math.pow(t*Math.cos(o)+n*e.R,2))}},{key:"throwAngle",value:function(t,e,n,i){return Math.atan2(Math.min(.06*this.relativeVelocity(t,e,n,i),t*Math.cos(i)),t*Math.sin(i))}}],function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(e.prototype,t),e}();!function(t,e,n){"R"in t?Object.defineProperty(t,"R",{value:.029,enumerable:!0,configurable:!0,writable:!0}):t.R=.029}(g,"R",0);var w=/*#__PURE__*/function(){var t;function e(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e)}return t=[{key:"plot",value:function(){for(var t=[],e=[],n=1;n<=3;n++){var i=[];e=[];for(var o=1;o<90;o+=9){e.push(o);var r=new g().throwAngle(n,n/b.R,0,o);i.push(r)}t.push(i)}var a=e;f.title.text="Throw effect",window.Plotly.newPlot("collision-throw",[v(a,t[0],"k=-1",p(0)),v(a,t[1],"k=0",p(1)),v(a,t[2],"k=1",p(2)),v(a,t[3],"k=2",p(3))],f,h)}}],function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(e.prototype,t),e}();new y().plot(),new d().plot("mathaven-figure9-speed","mathaven-figure9-angle","<b>Figure.9</b> Rebound speed and rebound angle versus incident angle <br>\n    for different topspins of the ball, ωT0 = kV0/R and V0 = 1 m/s with no sidespin"),new d().plot("mathaven-figure10-speed","mathaven-figure10-angle","<b>Figure.10</b> Rebound speed and rebound angle versus incident angle <br>\nfor different sidespins of the ball,ωS0 = kV0/R and V0 = 1 m/s with the ball rolling (ωT0 = V0/R)",function(t){return t/i.R},function(t){return 1/i.R}),new w().plot()},"./src/model/physics/claude/constants.ts":(t,e,n)=>{n.d(e,{M:()=>i,R:()=>o,_:()=>s,ee:()=>r,o:()=>a});var i=.1406,o=.02625,r=.98,a=.212,s=.14},"./src/model/physics/claude/qwen.ts":(t,e,n)=>{n.d(e,{z:()=>r});var i=n("./src/model/physics/constants.ts");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r=/*#__PURE__*/function(){var t;function e(t,n,i,r,a){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),o(this,"P",0),o(this,"WzI",0),o(this,"vx",void 0),o(this,"vy",void 0),o(this,"ωx",void 0),o(this,"ωy",void 0),o(this,"ωz",void 0),o(this,"s",void 0),o(this,"φ",void 0),o(this,"sʹ",void 0),o(this,"φʹ",void 0),o(this,"i",0),o(this,"N",100),o(this,"M",void 0),o(this,"R",void 0),o(this,"μs",void 0),o(this,"μw",void 0),o(this,"ee",void 0),this.M=t,this.R=n,this.ee=i,this.μs=r,this.μw=a}return t=[{key:"updateSlipSpeedsAndAngles",value:function(){var t=this.R,e=this.vx+this.ωy*t*i.Z3-this.ωz*t*i.o5,n=-this.vy*i.Z3+this.ωx*t,o=this.vx-this.ωy*t,r=this.vy+this.ωx*t;this.s=Math.sqrt(Math.pow(e,2)+Math.pow(n,2)),this.φ=Math.atan2(n,e),this.φ<0&&(this.φ+=2*Math.PI),this.sʹ=Math.sqrt(Math.pow(o,2)+Math.pow(r,2)),this.φʹ=Math.atan2(r,o),this.φʹ<0&&(this.φʹ+=2*Math.PI)}},{key:"compressionPhase",value:function(){for(var t=Math.max(this.M*this.vy/this.N,.001);this.vy>0;)this.updateSingleStep(t)}},{key:"restitutionPhase",value:function(t){var e=Math.max(t/this.N,.001);for(this.WzI=0;this.WzI<t;)this.updateSingleStep(e)}},{key:"updateSingleStep",value:function(t){if(this.updateSlipSpeedsAndAngles(),this.updateVelocity(t),this.updateAngularVelocity(t),this.updateWorkDone(t),this.i++>10*this.N)throw"Solution not found"}},{key:"updateVelocity",value:function(t){var e=this.μs,n=this.μw,o=this.M;this.vx-=1/o*(n*Math.cos(this.φ)+e*Math.cos(this.φʹ)*(i.Z3+n*Math.sin(this.φ)*i.o5))*t,this.vy-=1/o*(i.o5-n*i.Z3*Math.sin(this.φ)+e*Math.sin(this.φʹ)*(i.Z3+n*Math.sin(this.φ)*i.o5))*t}},{key:"updateAngularVelocity",value:function(t){var e=this.μs,n=this.μw,o=this.M,r=this.R;this.ωx+=-(5/(2*o*r))*(n*Math.sin(this.φ)+e*Math.sin(this.φʹ)*(i.Z3+n*Math.sin(this.φ)*i.o5))*t,this.ωy+=-(5/(2*o*r))*(n*Math.cos(this.φ)*i.Z3-e*Math.cos(this.φʹ)*(i.Z3+n*Math.sin(this.φ)*i.o5))*t,this.ωz+=5/(2*o*r)*(n*Math.cos(this.φ)*i.o5)*t}},{key:"updateWorkDone",value:function(t){var e=t*Math.abs(this.vy);this.WzI+=e,this.P+=t}},{key:"solvePaper",value:function(t,e,n,i){this.solve(t*Math.cos(e),t*Math.sin(e),-i*Math.sin(e),i*Math.cos(e),n)}},{key:"solve",value:function(t,e,n,i,o){this.vx=t,this.vy=e,this.ωx=n,this.ωy=i,this.ωz=o,this.WzI=0,this.P=0,this.i=0,this.compressionPhase();var r=this.WzI-(1-this.ee*this.ee)*this.WzI;this.restitutionPhase(r)}}],function(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(e.prototype,t),e}()},"./src/model/physics/constants.ts":(t,e,n)=>{n.d(e,{I:()=>r,Mz:()=>i,Qg:()=>g,R:()=>f,Wv:()=>M,Ys:()=>m,Z3:()=>v,cM:()=>k,e:()=>p,g:()=>a,gT:()=>c,gf:()=>u,jG:()=>b,kL:()=>l,kM:()=>P,m:()=>h,mu:()=>s,o5:()=>y,x3:()=>o,xO:()=>w});var i,o,r,a=9.8,s=.00985,u=.15,c=.8,l=.034,h=.23,f=.03275,p=.86,v=.4,y=Math.sqrt(21)/5;function d(){i=s*h*a*2/3*l,o=7/(5*Math.sqrt(2))*f*s*h*a,r=.4*h*f*f}function b(t){f=t,d()}function g(t){h=t,d()}function w(t){s=t,d()}function M(t){l=t,d()}function m(t){u=t}function k(t){p=t}function P(t){c=t}d()}},t=>{t(t.s="./src/mathaven.ts")}]);