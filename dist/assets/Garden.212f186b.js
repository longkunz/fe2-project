import{r as i}from"./vendor.f90e941a.js";import{s as b}from"./styled-components.browser.esm.63f865f6.js";import{j as m,a as G,i as A,F as C}from"./index.779018c9.js";function L({plantStatus:x,sale:e}){return m("div",{children:x==2&&m(q,{src:"./assets/images/inf/cart.png"})})}const q=b.img`
  position: absolute;
  top: 40px;
  left: 10px;
  width: 40px;
`;function J({plant:x,plantStatus:e,plantOpacity:r}){return G(Q,{children:[m(M,{src:x[`image${e+1}`]}),A(x)&&m(K,{src:r})]})}const K=b.img`
  max-width: 100%;
`,M=b.img`
  max-width: 100%;
`,Q=b.div`
  width: 56px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;var R=i.exports.memo(function({plant:e,choosePlant:r,setPlant:I,deletePlant:j,tool:c,coinBankVal:t,setCoinBankVal:d,costTreeFood:n,costWateringCan:o,costBugSpray:w,costMusicPlayer:y}){const[F,S]=i.exports.useState(null),[u,g]=i.exports.useState(0),[f,s]=i.exports.useState(0),[a,E]=i.exports.useState(!1),[v,p]=i.exports.useState(0),[O,h]=i.exports.useState(0),T=3,$=1;i.exports.useEffect(()=>{if(a){if(u===3&&(g(1),p(v+1),s(e==null?void 0:e.timer)),f===-1&&(g(u+1),s(e==null?void 0:e.timer)),v===3){D(),h(0);return}const z=setInterval(()=>{s(f-1)},1e3);return()=>{clearInterval(z)}}},[f]);const D=()=>{j(),S(null),g(0),s(null),E(!1),p(0)},H=()=>{if(c===null){if(r&&!a&&t>=(r==null?void 0:r.salePrice)){g(0),E(!0),s(r==null?void 0:r.timer),I();return}if(!r&&u===2){d(t+(e==null?void 0:e.salePrice)*2?t+(e==null?void 0:e.salePrice)*2:0),g(1),p(v+1),s(e==null?void 0:e.timer);return}}if(a){switch(c){case"shovel":D();break;case"tree-food":u!=2&&t>=n&&(d(t-n?t-n:0),s(f-T),T>f&&(g(u+1),s(e==null?void 0:e.timer)));break;case"watering-can":u!=2&&t>=o&&(d(t-o?t-o:0),s(f-$),$>f&&(g(u+1),s(e==null?void 0:e.timer)));break}O!=1&&(c==="bug-spray"&&t>=w&&(h(O+1),p(v-1),d(t-w?t-w:0)),c==="phonograph"&&t>=y&&(h(O+1),p(v-2),d(t-y?t-y:0)))}},N=e==null?void 0:e.salePrice;return m(U,{onClick:()=>H(),onMouseEnter:()=>{S(r==null?void 0:r.image2)},onMouseLeave:()=>{S(null)},children:e&&G(i.exports.Fragment,{children:[m(J,{plant:e,plantStatus:u,plantOpacity:F}),a&&G(C,{children:[m(L,{plantStatus:u,sale:N}),m("progress",{value:f,max:"10",style:{width:50,position:"absolute",bottom:66}})]})]})})});const U=b.div`
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
position: relative;
background-color: #fff0;
padding-bottom: 75px;
background-image: url("./assets/images/pots/Pot.png");
background-repeat: no-repeat;
background-position: center;
background-size: 60px 80px;
`;var _=i.exports.memo(function({plants:e,choosePlant:r,setPlant:I,deletePlant:j,tool:c,coinBankVal:t,setCoinBankVal:d}){return m(W,{children:e.map((n,o)=>m(R,{plant:n,choosePlant:r,setPlant:()=>I(o),deletePlant:()=>j(o),tool:c,coinBankVal:t,setCoinBankVal:d},o))})});const W=b.div`
  position: absolute;
  left: 34%;
  top: 14%;
  width: 500px;
  height: 480px;
  display: grid;
  grid-template-columns: repeat(6, auto);
`;export{_ as default};
