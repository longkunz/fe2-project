import{r as o}from"./vendor.f90e941a.js";import{a as t,j as i}from"./index.779018c9.js";import{s as f}from"./styled-components.browser.esm.63f865f6.js";var k=o.exports.memo(function({coinBankVal:n,plant:e,choosePlant:r,setChoosePlant:m,tool:d}){const s=n<e.purchasePrice,a=()=>{s||d!==null||m(null)};return t("div",{className:`gd-sendBank-item${(e==null?void 0:e.key)!==(r==null?void 0:r.key)?" active":""}`,onClick:()=>a(),children:[i("img",{src:e.image1b}),i("img",{src:s?e.image1b:e.image2b}),i("div",{className:"gd-sendBank-item-price",children:e.purchasePrice})]})}),B=o.exports.memo(function({coinBankVal:n,plants:e,choosePlant:r,setChoosePlant:m,tool:d}){return i(u,{children:e.map(s=>i(k,{coinBankVal:n,plant:s,choosePlant:r,setChoosePlant:()=>m(s),tool:d},s.key))})});const u=f.div`
  position: absolute;
  padding: 13px;
  left: 10px;
  top: 60px;
`;export{B as default};
