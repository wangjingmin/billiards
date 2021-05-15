(self.webpackChunkbilliards=self.webpackChunkbilliards||[]).push([[465],{"./src/diagram/diagram.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Diagram=void 0;const i=s("./src/model/table.ts"),l=s("./src/view/tablegeometry.ts"),o=s("./src/diagram/diagraminputs.ts");t.Diagram=class{constructor(e,t,s){this.last=performance.now(),this.step=.001,this.tablecolor="#0a5c5c",this.colors=["#aaaaaa","#ff0000","#ffff00"],this.table=i.Table.fromSerialised(e),this.diagram=t,this.diagramInputs=new o.DiagramInputs(e,s,(()=>this.restart())),this.scale(),this.drawTable(),this.animate(this.last)}scale(){const e=this.diagram.canvas.clientWidth,t=this.diagram.canvas.clientHeight,s=.45*e/l.TableGeometry.X;this.diagram.setTransform(s,0,0,s,.5*e,.5*t)}drawTable(){const e=l.TableGeometry.X,t=l.TableGeometry.Y;this.diagram.fillStyle=this.tablecolor,this.diagram.fillRect(-e,-t,2*e,2*t)}drawBall(e,t,s){this.diagram.fillStyle=s,this.diagram.beginPath(),this.diagram.ellipse(e,t,.5,.5,0,0,2*Math.PI),this.diagram.fill()}drawBalls(){var e=0;this.table.balls.forEach((t=>this.drawBall(t.pos.x,t.pos.y,this.colors[e++])))}clearBalls(){this.table.balls.forEach((e=>this.drawBall(e.pos.x,e.pos.y,this.tablecolor)))}advance(e){const t=Math.floor(e/this.step);for(var s=0;s<t;s++)this.table.advance(this.step)}animate(e){this.clearBalls(),this.advance((e-this.last)/1e3),this.last=e,this.drawBalls(),this.table.allStationary()?console.log("diagram complete"):requestAnimationFrame((e=>{this.animate(e)}))}restart(){this.diagramInputs.readControls(),this.table.updateFromSerialised(this.diagramInputs.state),this.drawTable(),this.last=performance.now(),this.animate(this.last)}}},"./src/diagram/diagraminputs.ts":(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiagramInputs=void 0;t.DiagramInputs=class{constructor(e,t,s){this.state=e,this.control=t,this.addControls(t,s)}readValue(e){var t=this.control.querySelector(e);return t?t.valueAsNumber:0}readControls(){var e=this.state.balls[0];e.pos.x=this.readValue("#x"),e.pos.y=this.readValue("#y"),e.vel.x=this.readValue("#vx"),e.vel.y=this.readValue("#vy"),e.rvel.x=this.readValue("#wx"),e.rvel.y=this.readValue("#wy"),e.rvel.z=this.readValue("#wz")}addControls(e,t){const s=this.state.balls[0],i='type="number" step="0.1"';e.innerHTML=`\n        x <input id="x" ${i} value="${s.pos.x}">\n\t\t  <input id="y" ${i} value="${s.pos.y}">\n        ẋ <input id="vx" ${i} value="${s.vel.x}">\n\t\t  <input id="vy" ${i} value="${s.vel.y}">\n        ω <input id="wx" ${i} value="${s.rvel.x}">\n\t\t  <input id="wy" ${i} value="${s.rvel.y}">\n          <input id="wz" ${i} value="${s.rvel.z}"><div id="restart">↻</div>`,e.getElementsByTagName("div")[0].onclick=t}}},"./src/diagrams.ts":(e,t,s)=>{"use strict";const i=s("./src/diagram/diagram.ts");console.log("Diagrams");var l=20;function o(e,t){new i.Diagram({balls:t},n(e,"canvas").getContext("2d"),n(e,"control"))}function a(e,t,s,i,l,o,a){return{pos:{x:e,y:t,z:0},vel:{x:s,y:i,z:0},rvel:{x:l,y:o,z:a},state:"Sliding"}}function n(e,t){let s="#"+e+" #"+t,i=document.querySelector(s);if(null==i)throw new Error("Element not found "+s);return i}o("diagram1",[a(0,0,-20,0,0,0,0),a(2,2,-20,0,0,0,l),a(-2,-2,-20,0,0,0,-20)]),o("diagram2",[a(-17,2,0,-36,-35,0,-5),a(-17.38,-2,0,0,0,0,0)])},"./src/events/aimevent.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AimEvent=void 0;const i=s("./src/events/gameevent.ts"),l=s("./src/events/eventtype.ts"),o=s("./src/utils/utils.ts"),a=s("./node_modules/three/build/three.module.js");class n extends i.GameEvent{constructor(){super(),this.verticalOffset=0,this.sideOffset=0,this.angle=0,this.power=0,this.pos=new a.Vector3(1,0,0),this.spinOnly=!1,this.type=l.EventType.AIM}applyToController(e){return e.handleAim(this)}static fromJson(e){let t=new n;return t.pos=o.vec(e.pos),t.angle=e.angle,t.verticalOffset=e.verticalOffset,t.sideOffset=e.sideOffset,t.power=e.power,t.spinOnly=e.spinOnly,t}copy(){return n.fromJson(this)}round(){this.angle=o.round(this.angle),this.power=o.round(this.power),this.verticalOffset=o.round(this.verticalOffset),this.sideOffset=o.round(this.sideOffset),o.roundVec(this.pos)}}t.AimEvent=n},"./src/events/eventtype.ts":(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventType=void 0,function(e){e[e.BEGIN=0]="BEGIN",e[e.BREAK=1]="BREAK",e[e.WATCHAIM=2]="WATCHAIM",e[e.AIM=3]="AIM",e[e.HIT=4]="HIT",e[e.STATIONARY=5]="STATIONARY",e[e.CHAT=6]="CHAT",e[e.ABORT=7]="ABORT",e[e.REPOSITION=8]="REPOSITION"}(t.EventType||(t.EventType={}))},"./src/events/gameevent.ts":(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GameEvent=void 0;t.GameEvent=class{}},"./src/model/ball.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Ball=t.State=void 0;const i=s("./node_modules/three/build/three.module.js"),l=s("./src/utils/utils.ts"),o=s("./src/model/physics/physics.ts"),a=s("./src/view/ballmesh.ts"),n=s("./src/model/physics/constants.ts");var r;!function(e){e.Stationary="Stationary",e.Rolling="Rolling",e.Sliding="Sliding",e.Falling="Falling",e.InPocket="InPocket"}(r=t.State||(t.State={}));class c{constructor(e,t){this.vel=l.zero.clone(),this.rvel=l.zero.clone(),this.state=r.Stationary,this.futurePos=l.zero.clone(),this.transition=.05,this.dv=new i.Vector3,this.dw=new i.Vector3,this.pos=e.clone(),this.ballmesh=new a.BallMesh(t||5592405*Math.random())}update(e){this.updatePosition(e),this.updateVelocity(e),this.state==r.Falling&&this.updateFalling(e)}updateMesh(e){this.ballmesh.updatePosition(this.pos),this.ballmesh.updateArrows(this.pos,this.rvel,this.state),0!=this.rvel.lengthSq()&&this.ballmesh.updateRotation(this.rvel,e)}updatePosition(e){this.pos.addScaledVector(this.vel,e)}updateFalling(e){if(this.vel.addScaledVector(l.up,-10*e*n.g),this.pos.z<-2&&(this.pos.z+=i.MathUtils.randFloat(-.5,.25),this.setStationary(),this.state=r.InPocket),this.pos.distanceTo(this.pocket.pos)>this.pocket.radius-.5){const e=this.pocket.pos.clone().sub(this.pos).normalize().multiplyScalar(.5*this.vel.length());this.vel.dot(e)<0&&(this.vel.x=e.x,this.vel.y=e.y)}}updateVelocity(e){this.inMotion()&&(this.isRolling()?this.updateVelocityRolling(e):this.updateVelocitySliding(e))}updateVelocityRolling(e){o.rollingFull(this.rvel,this.dv,this.dw),this.dv.multiplyScalar(e),this.dw.multiplyScalar(e),l.passesThroughZero(this.rvel,this.dw)||l.passesThroughZero(this.vel,this.dv)?this.setStationary():(this.vel.add(this.dv),this.rvel.add(this.dw),this.state=r.Rolling)}updateVelocitySliding(e){o.sliding(this.vel,this.rvel,this.dv,this.dw),this.dv.multiplyScalar(e),this.dw.multiplyScalar(e),l.passesThroughZero(this.rvel,this.dw)&&l.passesThroughZero(this.vel,this.dv)?this.setStationary():(this.vel.add(this.dv),this.rvel.add(this.dw),this.state=r.Sliding)}setStationary(){this.vel.copy(l.zero),this.rvel.copy(l.zero),this.state=r.Stationary}isRolling(){return 0!=this.vel.lengthSq()&&0!=this.rvel.lengthSq()&&o.surfaceVelocityFull(this.vel,this.rvel).length()<this.transition}onTable(){return this.state!==r.Falling&&this.state!==r.InPocket}inMotion(){return this.state==r.Rolling||this.state==r.Sliding}isFalling(){return this.state==r.Falling}futurePosition(e){return this.futurePos.copy(this.pos).addScaledVector(this.vel,e),this.futurePos}serialise(){return{pos:this.pos,vel:this.vel,rvel:this.rvel,state:this.state}}static fromSerialised(e){return c.updateFromSerialised(new c(l.vec(e.pos)),e)}static updateFromSerialised(e,t){return e.pos.copy(t.pos),e.vel.copy(l.vec(t.vel)),e.rvel.copy(l.vec(t.rvel)),e.state=t.state,e}}t.Ball=c},"./src/model/physics/collision.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Collision=void 0;const i=s("./src/model/ball.ts");class l{static willCollide(e,t,s){return e.onTable()&&t.onTable()&&e.futurePosition(s).distanceToSquared(t.futurePosition(s))<1}static collide(e,t){return l.updateVelocities(e,t)}static updateVelocities(e,t){const s=t.pos.clone().sub(e.pos).normalize(),l=s.dot(e.vel),o=s.dot(t.vel);return e.vel.addScaledVector(s,o).addScaledVector(s,-l),t.vel.addScaledVector(s,l).addScaledVector(s,-o),e.state=i.State.Sliding,t.state=i.State.Sliding,Math.abs(l)+Math.abs(o)}}t.Collision=l},"./src/model/physics/constants.ts":(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.I=t.R=t.e=t.Mxy=t.Mz=t.m=t.rho=t.g=t.mu=void 0,t.mu=.8,t.g=9.8,t.rho=.1,t.m=1,t.Mz=t.mu*t.m*t.g*2/3*t.rho,t.Mxy=7/(5*Math.sqrt(2))*t.mu*t.m*t.g*.25,t.e=.85,t.R=.5,t.I=.4*t.m*t.R*t.R},"./src/model/physics/cushion.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Cushion=void 0;const i=s("./src/view/tablegeometry.ts"),l=s("./src/model/physics/physics.ts"),o=s("./node_modules/three/build/three.module.js");class a{static willBounce(e,t){let s=e.futurePosition(t);return!(Math.abs(s.y)<i.TableGeometry.tableY&&Math.abs(s.x)<i.TableGeometry.tableX)&&(e.onTable()&&(a.willBounceLongSegment(i.TableGeometry.pockets.pocketNW.knuckleNE.pos.x,i.TableGeometry.pockets.pocketN.knuckleNW.pos.x,s)||a.willBounceLongSegment(i.TableGeometry.pockets.pocketN.knuckleNE.pos.x,i.TableGeometry.pockets.pocketNE.knuckleNW.pos.x,s)||a.willBounceShortSegment(i.TableGeometry.pockets.pocketNW.knuckleSW.pos.y,i.TableGeometry.pockets.pocketSW.knuckleNW.pos.y,s)))}static willBounceLongSegment(e,t,s){return s.x>e&&s.x<t&&Math.abs(s.y)>i.TableGeometry.tableY}static willBounceShortSegment(e,t,s){return s.y>t&&s.y<e&&Math.abs(s.x)>i.TableGeometry.tableX}static bounce(e,t){const s=e.futurePosition(t);return s.x>i.TableGeometry.tableX?a.bounceIn(0,e):s.x<-i.TableGeometry.tableX?a.bounceIn(Math.PI,e):s.y>i.TableGeometry.tableY?a.bounceIn(-Math.PI/2,e):s.y<-i.TableGeometry.tableY?a.bounceIn(Math.PI/2,e):void 0}static bounceIn(e,t){let s=new o.Vector3,i=new o.Vector3;return l.rotateApplyUnrotate(e,t.vel,t.rvel,s,i),t.vel.add(s),t.rvel.add(i),s.length()}}t.Cushion=a},"./src/model/physics/knuckle.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Knuckle=void 0;const i=s("./src/view/tablegeometry.ts"),l=s("./src/model/physics/constants.ts");class o{constructor(e,t){this.pos=e,this.radius=t}static willBounce(e,t){return t.distanceTo(e.pos)<.5+e.radius}bounce(e){const t=e.pos.clone().sub(this.pos).normalize();let s=t.dot(e.vel);return e.vel.addScaledVector(t,-2*l.e*s),Math.abs(s)}static willBounceAny(e,t){const s=e.futurePosition(t);return e.onTable()&&i.TableGeometry.knuckles.find((e=>o.willBounce(e,s)))}}t.Knuckle=o},"./src/model/physics/physics.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bounceWithSlipX=t.bounceWithoutSlipX=t.gripInXCushion=t.bounceWithSideX=t.isCushionXGrip=t.rotateApplyUnrotate=t.forceRoll=t.rollingFull=t.slidingFull=t.sliding=t.surfaceVelocityFull=t.surfaceVelocity=void 0;const i=s("./node_modules/three/build/three.module.js"),l=s("./src/utils/utils.ts"),o=s("./src/model/physics/constants.ts");function a(e,t){return n(e,t).setZ(0)}function n(e,t){return e.clone().add(l.upCross(t))}t.surfaceVelocity=a,t.surfaceVelocityFull=n,t.sliding=function(e,t,s,i){const n=a(e,t);s.copy(l.norm(n).multiplyScalar(-o.mu*o.g)),i.copy(l.norm(l.upCross(n)).multiplyScalar(2.5*o.mu*o.g)),i.setZ(-2.5*o.Mz*Math.sign(t.z))},t.slidingFull=function(e,t,s,l){const a=new i.Vector3(e.x-t.y,e.y+t.x,0).normalize();s.set(-o.mu*o.g*a.x,-o.mu*o.g*a.y,0),l.set(-2.5*o.mu*o.g*a.y,2.5*o.mu*o.g*a.x,-2.5*o.Mz*Math.sign(t.z))},t.rollingFull=function(e,t,s){const l=new i.Vector3(e.x,e.y,0).length(),a=5/7*o.Mxy/l;t.set(-a*e.y,a*e.x,0),s.set(-a*e.x,-a*e.y,-2.5*o.Mz*Math.sign(e.z))},t.forceRoll=function(e,t){e.sub(a(e,t).multiplyScalar(.5)),t.copy(l.upCross(e))};const r=Math.sin(9.25/32.5),c=Math.cos(9.25/32.5),u=r*r,h=c*c;t.rotateApplyUnrotate=function(e,t,s,i,o){m(t.clone().applyAxisAngle(l.up,e),s.clone().applyAxisAngle(l.up,e),i,o),i.applyAxisAngle(l.up,-e),o.applyAxisAngle(l.up,-e)};const d=7/(2*o.m),p=1/o.m;function m(e,t,s,i){var l=-e.x*o.e,a=e.y+o.R*(-t.z*c*Math.abs(e.x)/30),n=.9*t.x,r=t.z/2;s.set(l-e.x,a-e.y,0),i.set(n-t.x,0-t.y,r-t.z)}t.isCushionXGrip=function(e,t){var s,l=(s=function(e){return-e.y}(e),(1+o.e)*s/p),a=function(e,t){return new i.Vector3(e.x*r-e.z*c+o.R*t.y,-e.y-o.R*t.z*c+o.R*t.x*r)}(e,t).length()/d;return console.log(l+" < "+a+" isGrip = "+(l<a?"true":"false")),l<a},t.bounceWithSideX=m,t.gripInXCushion=function(e,t){var s=Math.abs(e.y+t.z*o.R);console.log(s,s>20?"slip":"grip")},t.bounceWithoutSlipX=function(e,t,s,i){var l=e.x-e.x*(2/7*u+(1+o.e)*h)-2/7*o.R*t.y*r,a=5/7*e.y+2/7*o.R*(t.x*r-t.z*c),n=o.m*(a-e.y),d=o.m*(l-e.x),p=-o.m,m=t.x-o.R/o.I*n*r,k=t.y+o.R/o.I*(d*r-p*c),y=t.z+o.R/o.I*n*c;s.set(l-e.x,a-e.y,0),i.set(m-t.x,k-t.y,y-t.z)},t.bounceWithSlipX=function(e,t,s,i){var l=e.x-e.x*(1+o.e)*c*(o.mu*c*r+c),a=e.y+o.mu*(1+o.e)*c*r*e.x,n=o.m*(a-e.y),u=o.m*(l-e.x),h=-o.m,d=t.x-o.R/o.I*n*r,p=t.y+o.R/o.I*(u*r-h*c),m=t.z+o.R/o.I*n*c;s.set(l-e.x,a-e.y,0),i.set(d-t.x,p-t.y,m-t.z)}},"./src/model/physics/pocket.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Pocket=void 0;const i=s("./src/model/ball.ts"),l=s("./src/view/tablegeometry.ts"),o=s("./src/model/physics/constants.ts");class a{constructor(e,t){this.pos=e,this.radius=t}static willFall(e,t){return t.distanceTo(e.pos)<e.radius}fall(e,t){return e.vel.z=-o.g*t,e.state=i.State.Falling,e.pocket=this,e.vel.length()}static willFallAny(e,t){const s=e.futurePosition(t);return e.onTable()&&l.TableGeometry.pocketCenters.find((e=>a.willFall(e,s)))}}t.Pocket=a},"./src/model/table.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Table=void 0;const i=s("./src/model/physics/cushion.ts"),l=s("./src/model/physics/collision.ts"),o=s("./src/model/physics/knuckle.ts"),a=s("./src/model/physics/pocket.ts"),n=s("./src/view/cue.ts"),r=s("./src/model/ball.ts"),c=s("./src/events/aimevent.ts"),u=s("./src/utils/utils.ts"),h=s("./src/view/tablegeometry.ts");class d{constructor(e){this.cue=new n.Cue,this.outcome=[],this.initialiseBalls(e)}initialiseBalls(e){this.balls=e,this.pairs=[],this.balls.forEach((e=>{this.balls.forEach((t=>{e!==t&&this.pairs.push({a:e,b:t})}))}))}advance(e){let t=0;for(;!this.prepareAdvanceAll(e);)if(t++>100)throw new Error("Depth exceeded resolving collisions");this.balls.forEach((t=>{t.update(e)}))}updateBallMesh(e){this.balls.forEach((t=>{t.updateMesh(e)}))}prepareAdvanceAll(e){return this.pairs.length>0?!this.pairs.some((t=>!this.prepareAdvancePair(t.a,t.b,e))):!this.balls.some((t=>!this.prepareAdvanceToCushions(t,e)))}prepareAdvancePair(e,t,s){if(!e.inMotion()&&!t.inMotion())return!0;if(l.Collision.willCollide(e,t,s)){var i=l.Collision.collide(e,t);return this.outcome.push({type:"collision",a:e,b:t,incidentSpeed:i}),!1}return this.prepareAdvanceToCushions(e,s)}prepareAdvanceToCushions(e,t){let s=e.futurePosition(t);if(Math.abs(s.y)<h.TableGeometry.tableY&&Math.abs(s.x)<h.TableGeometry.tableX)return!0;if(i.Cushion.willBounce(e,t)){var l=i.Cushion.bounce(e,t);return this.outcome.push({type:"cushion",a:e,incidentSpeed:l}),!1}let n=o.Knuckle.willBounceAny(e,t);if(n){var r=n.bounce(e);return this.outcome.push({type:"cushion",a:e,incidentSpeed:r}),!1}let c=a.Pocket.willFallAny(e,t);if(c){var u=c.fall(e,t);return this.outcome.push({type:"pot",a:e,incidentSpeed:u}),!1}return!0}allStationary(){return this.balls.every((e=>!e.inMotion()||!e.onTable()))}hit(){let e=this.cue.aim;this.balls[0].vel.copy(u.unitAtAngle(e.angle).multiplyScalar(e.power)),e.spinOnly&&this.balls[0].vel.copy(u.zero),this.balls[0].state=r.State.Sliding;let t=Math.atan2(-e.sideOffset,e.verticalOffset);if(0==t)this.balls[0].rvel.copy(u.zero);else{let s=Math.sqrt(e.verticalOffset*e.verticalOffset+e.sideOffset*e.sideOffset),i=u.unitAtAngle(e.angle),l=u.upCross(i).applyAxisAngle(i,t).multiplyScalar(s*e.power*2);this.balls[0].rvel.copy(l)}e.power=0}serialise(){return{balls:this.balls.map((e=>e.serialise())),aim:this.cue.aim.copy()}}static fromSerialised(e){let t=new d(e.balls.map((e=>r.Ball.fromSerialised(e))));return t.updateFromSerialised(e),t}updateFromSerialised(e){this.balls.forEach(((t,s)=>r.Ball.updateFromSerialised(t,e.balls[s]))),e.aim&&(this.cue.aim=c.AimEvent.fromJson(e.aim))}shortSerialise(){return this.balls.map((e=>[e.pos.x,e.pos.y])).reduce(((e,t)=>e.concat(t)),[])}updateFromShortSerialised(e){this.balls.forEach(((t,s)=>{t.pos.x=e[2*s],t.pos.y=e[2*s+1]}))}}t.Table=d},"./src/utils/utils.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNotNaNVec=t.roundVec=t.round=t.unitAtAngle=t.passesThroughZero=t.norm=t.upCross=t.vec=t.up=t.zero=void 0;const i=s("./node_modules/three/build/three.module.js");function l(e){return Math.round(1e3*(e+Number.EPSILON))/1e3}t.zero=new i.Vector3(0,0,0),t.up=new i.Vector3(0,0,1),t.vec=function(e){return new i.Vector3(e.x,e.y,e.z)},t.upCross=function(e){return t.up.clone().cross(e)},t.norm=function(e){return e.clone().normalize()},t.passesThroughZero=function(e,t){return e.clone().add(t).dot(e)<=0},t.unitAtAngle=function(e){return new i.Vector3(1,0,0).applyAxisAngle(t.up,e)},t.round=l,t.roundVec=function(e){return e.x=l(e.x),e.y=l(e.y),e.z=l(e.z),e},t.assertNotNaNVec=function(e,t){if(isNaN(e.x)||isNaN(e.y)||isNaN(e.z))throw t?console.log(t):console.log(e),new Error("Error vector contains NaN")}},"./src/view/ballmesh.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BallMesh=void 0;const i=s("./node_modules/three/build/three.module.js"),l=s("./src/model/ball.ts"),o=s("./src/utils/utils.ts");t.BallMesh=class{constructor(e){this.m=new i.Matrix4,this.initialiseMesh(e)}updatePosition(e){this.mesh.position.copy(e),this.shadow.position.copy(e)}updateRotation(e,t){let s=e.length()*t*Math.PI/2,i=this.m.identity().makeRotationAxis(o.norm(e),s);this.mesh.geometry.applyMatrix4(i)}updateArrows(e,t,s){this.spinAxisArrow.setLength(.4+t.length()/2,.1,.1),this.spinAxisArrow.position.copy(e),this.spinAxisArrow.setDirection(o.norm(t)),s==l.State.Rolling?this.spinAxisArrow.setColor(16711680):this.spinAxisArrow.setColor(65280)}initialiseMesh(e){var t=new i.IcosahedronGeometry(.5,1),s=new i.MeshPhongMaterial({color:e,emissive:0,flatShading:!0});this.mesh=new i.Mesh(t,s),this.mesh.name="ball";const l=new i.CircleGeometry(.45,9);l.applyMatrix4((new i.Matrix4).identity().makeTranslation(0,0,-.49));const a=new i.MeshBasicMaterial({color:1118498});this.shadow=new i.Mesh(l,a),this.spinAxisArrow=new i.ArrowHelper(o.up,o.zero,2,0)}}},"./src/view/cue.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Cue=void 0;const i=s("./src/view/tablegeometry.ts"),l=s("./src/utils/utils.ts"),o=s("./src/events/aimevent.ts"),a=s("./node_modules/three/build/three.module.js");class n{constructor(){this.limit=.4,this.maxPower=60,this.t=0,this.aim=new o.AimEvent,this.length=1*i.TableGeometry.tableX,this.initialise(.05,.15,this.length)}createHelper(){var e=new a.CylinderGeometry(.5,.5,30,12);this.helperMesh=new a.Mesh(e,n.helpermaterial),this.helperMesh.geometry.applyMatrix4((new a.Matrix4).identity().makeRotationAxis(l.up,-Math.PI/2)).applyMatrix4((new a.Matrix4).identity().makeTranslation(15,0,0)),this.helperMesh.visible=!1}initialise(e,t,s){var i=new a.CylinderGeometry(e,t,s,11);this.mesh=new a.Mesh(i,n.material),this.mesh.castShadow=!1,this.mesh.geometry.applyMatrix4((new a.Matrix4).identity().makeRotationAxis(new a.Vector3(1,0,0),-.1)).applyMatrix4((new a.Matrix4).identity().makeRotationAxis(l.up,-Math.PI/2)).applyMatrix4((new a.Matrix4).identity().makeTranslation(-s/2-.5,0,1)),this.mesh.rotation.z=this.aim.angle,this.createHelper()}rotateAim(e){this.aim.angle+=e,this.mesh.rotation.z=this.aim.angle,this.helperMesh.rotation.z=this.aim.angle}adjustHeight(e){this.aim.verticalOffset=a.MathUtils.clamp(this.aim.verticalOffset+e,-this.limit,this.limit),this.mesh.position.z=this.aim.verticalOffset}adjustSide(e){this.aim.sideOffset=a.MathUtils.clamp(this.aim.sideOffset+e,-this.limit,this.limit)}adjustPower(e){this.aim.power=Math.min(this.maxPower,this.aim.power+e)}setPower(e){this.aim.power=e*this.maxPower}setSpin(e,t){return this.aim.verticalOffset=a.MathUtils.clamp(t,-this.limit,this.limit),this.aim.sideOffset=a.MathUtils.clamp(e,-this.limit,this.limit),{x:this.aim.sideOffset,y:this.aim.verticalOffset}}moveTo(e){this.aim.pos.copy(e),this.mesh.rotation.z=this.aim.angle;let t=l.upCross(l.unitAtAngle(this.aim.angle)).multiplyScalar(this.aim.sideOffset).setZ(this.aim.verticalOffset),s=.25*(Math.sin(this.t/3)-1),i=l.unitAtAngle(this.aim.angle).clone().multiplyScalar(s-this.aim.power/this.maxPower*3);this.mesh.position.copy(e.clone().add(t).add(i)),this.helperMesh.position.copy(e)}update(e){this.t+=e,this.moveTo(this.aim.pos)}intersectsAnything(e){let t=e.balls[0].pos.clone().addScaledVector(l.unitAtAngle(this.aim.angle),-this.length/2);t.z=this.aim.verticalOffset;let s=l.unitAtAngle(this.aim.angle);return new a.Raycaster(t,s,0,this.length/2-.6).intersectObjects(e.balls.map((e=>e.ballmesh.mesh))).length>0}}t.Cue=n,n.material=new a.MeshPhongMaterial({color:8934775,wireframe:!1,flatShading:!1}),n.helpermaterial=new a.MeshPhongMaterial({color:8934775,wireframe:!1,flatShading:!0,transparent:!0,opacity:.3})},"./src/view/tablegeometry.ts":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TableGeometry=void 0;const i=s("./node_modules/three/build/three.module.js"),l=s("./node_modules/three/build/three.module.js"),o=s("./src/model/physics/knuckle.ts"),a=s("./src/model/physics/pocket.ts");class n{static addToScene(e){n.knuckles.forEach((t=>n.knuckleCylinder(t,e))),n.pocketCenters.forEach((t=>n.knuckleCylinder(t,e)))}static knuckleCylinder(e,t){n.cylinder(e.pos,e.radius,.75,t).position.setZ(-.125)}static cylinder(e,t,s,o){var a=new l.CylinderGeometry(t,t,s,16),r=new l.Mesh(a,n.material);return r.position.copy(e),r.geometry.applyMatrix4((new i.Matrix4).identity().makeRotationAxis(new i.Vector3(1,0,0),Math.PI/2)),o.add(r),r}static addCushions(e){n.plane(new i.Vector3(0,0,-5.5),2*n.X,2*n.Y,10,e);let t=.75,s=-.125,l=Math.abs(n.pockets.pocketNW.knuckleNE.pos.x-n.pockets.pocketN.knuckleNW.pos.x),o=Math.abs(n.pockets.pocketNW.knuckleSW.pos.y-n.pockets.pocketSW.knuckleNW.pos.y);n.plane(new i.Vector3(n.X+.5,0,s),1,o,t,e),n.plane(new i.Vector3(-n.X-.5,0,s),1,o,t,e),n.plane(new i.Vector3(-n.X/2,n.Y+.5,s),l,1,t,e),n.plane(new i.Vector3(-n.X/2,-n.Y-.5,s),l,1,t,e),n.plane(new i.Vector3(n.X/2,n.Y+.5,s),l,1,t,e),n.plane(new i.Vector3(n.X/2,-n.Y-.5,s),l,1,t,e)}static plane(e,t,s,i,o){var a=new l.BoxGeometry(t,s,i),r=new l.Mesh(a,n.material);r.receiveShadow=!0,r.position.copy(e),o.add(r)}}t.TableGeometry=n,n.tableX=21.5,n.tableY=10.5,n.X=n.tableX+.5,n.Y=n.tableY+.5,n.PX=n.tableX+.8,n.PY=n.tableY+.8,n.knuckleInset=1.6,n.knuckleRadius=.31,n.middleKnuckleInset=1.385,n.middleKnuckleRadius=.2,n.cornerRadius=1.1,n.middleRadius=.9,n.pockets={pocketNW:{pocket:new a.Pocket(new i.Vector3(-n.PX,n.PY,0),n.cornerRadius),knuckleNE:new o.Knuckle(new i.Vector3(-n.X+n.knuckleInset,n.Y+n.knuckleRadius,0),n.knuckleRadius),knuckleSW:new o.Knuckle(new i.Vector3(-n.X-n.knuckleRadius,n.Y-n.knuckleInset,0),n.knuckleRadius)},pocketN:{pocket:new a.Pocket(new i.Vector3(0,n.PY+.7,0),n.middleRadius),knuckleNE:new o.Knuckle(new i.Vector3(n.middleKnuckleInset,n.Y+n.middleKnuckleRadius,0),n.middleKnuckleRadius),knuckleNW:new o.Knuckle(new i.Vector3(-n.middleKnuckleInset,n.Y+n.middleKnuckleRadius,0),n.middleKnuckleRadius)},pocketS:{pocket:new a.Pocket(new i.Vector3(0,-n.PY-.7,0),n.middleRadius),knuckleSE:new o.Knuckle(new i.Vector3(n.middleKnuckleInset,-n.Y-n.middleKnuckleRadius,0),n.middleKnuckleRadius),knuckleSW:new o.Knuckle(new i.Vector3(-n.middleKnuckleInset,-n.Y-n.middleKnuckleRadius,0),n.middleKnuckleRadius)},pocketNE:{pocket:new a.Pocket(new i.Vector3(n.PX,n.PY,0),n.cornerRadius),knuckleNW:new o.Knuckle(new i.Vector3(n.X-n.knuckleInset,n.Y+n.knuckleRadius,0),n.knuckleRadius),knuckleSE:new o.Knuckle(new i.Vector3(n.X+n.knuckleRadius,n.Y-n.knuckleInset,0),n.knuckleRadius)},pocketSE:{pocket:new a.Pocket(new i.Vector3(n.PX,-n.PY,0),n.cornerRadius),knuckleNE:new o.Knuckle(new i.Vector3(n.X+n.knuckleRadius,-n.Y+n.knuckleInset,0),n.knuckleRadius),knuckleSW:new o.Knuckle(new i.Vector3(n.X-n.knuckleInset,-n.Y-n.knuckleRadius,0),n.knuckleRadius)},pocketSW:{pocket:new a.Pocket(new i.Vector3(-n.PX,-n.PY,0),n.cornerRadius),knuckleSE:new o.Knuckle(new i.Vector3(-n.X+n.knuckleInset,-n.Y-n.knuckleRadius,0),n.knuckleRadius),knuckleNW:new o.Knuckle(new i.Vector3(-n.X-n.knuckleRadius,-n.Y+n.knuckleInset,0),n.knuckleRadius)}},n.knuckles=[n.pockets.pocketNW.knuckleNE,n.pockets.pocketNW.knuckleSW,n.pockets.pocketN.knuckleNW,n.pockets.pocketN.knuckleNE,n.pockets.pocketS.knuckleSW,n.pockets.pocketS.knuckleSE,n.pockets.pocketNE.knuckleNW,n.pockets.pocketNE.knuckleSE,n.pockets.pocketSE.knuckleNE,n.pockets.pocketSE.knuckleSW,n.pockets.pocketSW.knuckleSE,n.pockets.pocketSW.knuckleNW],n.pocketCenters=[n.pockets.pocketNW.pocket,n.pockets.pocketSW.pocket,n.pockets.pocketN.pocket,n.pockets.pocketS.pocket,n.pockets.pocketNE.pocket,n.pockets.pocketSE.pocket],n.material=new l.MeshPhongMaterial({color:4478361,wireframe:!1,flatShading:!0,transparent:!0,opacity:.4})}},e=>{"use strict";var t;t="./src/diagrams.ts",e(e.s=t)}]);