import{r,j as o,F as a}from"./index.b4996719.js";import{C as d}from"./icons.41acdf4c.js";import{m as l}from"./motion.23885cc3.js";const m=({darkMode:n})=>{const[e,s]=r.exports.useState(!1);r.exports.useEffect(()=>{const t=()=>{s(window.pageYOffset>400)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]);const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o(a,{children:o(l.div,{onClick:i,className:`flex items-center fixed bottom-4 right-4 rounded-md py-2 px-4 z-10 cursor-pointer
                ${e?"flex":"hidden"}
                ${n?"bg-[#00000099] text-white border border-solid border-[#ffffff26] shadow-lg hover:bg-[#0e0e0e]":"bg-[#ffffffcc] text-black border border-solid border-[#00000026] shadow-lg hover:brightness-95"} `,initial:{opacity:0},animate:{opacity:e?1:0},transition:{duration:.1},children:o(d,{fill:"currentColor",size:"18px",className:"rotate-180"})})})};export{m as default};
