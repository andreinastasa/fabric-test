import{u as l,r as p,j as a,a as s,H as u}from"./app-371f93f6.js";import{G as c}from"./GuestLayout-ddf355eb.js";import{T as f,I as w}from"./TextInput-be3c209d.js";import{I as h}from"./InputLabel-29cd3220.js";import{P as g}from"./PrimaryButton-81193de4.js";import"./ApplicationLogo-83c6d73e.js";function C(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=l({password:""});p.exports.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(c,{children:[s(u,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600 ",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(w,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{C as default};