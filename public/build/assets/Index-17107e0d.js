import{_ as i}from"./AppLayout-cf47eb09.js";import{o as s,c,w as a,a as t,e as o,h as d,F as r,t as l}from"./app-921b1b55.js";import"./_plugin-vue_export-helper-c27b6911.js";const _=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," User ",-1),h={class:"py-12"},u={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},m={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg text-black"},x={class:"overflow-x-auto"},p={class:"table"},f=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Email"),t("th",null,"Action")])],-1),g={props:{users:Object}},B=Object.assign(g,{__name:"Index",setup(n){return(b,w)=>(s(),c(i,{title:"User"},{header:a(()=>[_]),default:a(()=>[t("div",h,[t("div",u,[t("div",m,[t("div",x,[t("table",p,[f,(s(!0),o(r,null,d(n.users,e=>(s(),o("tbody",{key:e.id},[t("tr",null,[t("th",null,l(e.name),1),t("th",null,l(e.email),1),t("th",null,l(e.id),1)])]))),128))])])])])])]),_:1}))}});export{B as default};