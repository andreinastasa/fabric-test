import{a as s,r as e}from"./app-e988f306.js";function g({message:r,className:t=""}){return r?s("p",{className:"text-sm text-red-600 "+t,children:r}):null}const h=e.exports.forwardRef(function({type:t="text",name:u,id:a,value:c,className:i,autoComplete:f,required:d,isFocused:x,handleChange:p},n){const o=n||e.exports.useRef();return e.exports.useEffect(()=>{x&&o.current.focus()},[]),s("div",{className:"flex flex-col items-start",children:s("input",{type:t,name:u,id:a,value:c,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+i,ref:o,autoComplete:f,required:d,onChange:l=>p(l)})})});export{g as I,h as T};
