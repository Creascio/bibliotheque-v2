(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{a69b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("navigation-bar",{attrs:{title:e.course}}),a("list-display",{attrs:{listClass:"q-pa-md",itemClass:"q-pa-sm q-mb-sm bg-grey-10 text-h6 text-accent",content:e.chapters,redirection:e.course+"/"}})],1)},r=[],n=a("a6f4"),c=a("ab91"),o=a("8fcf"),i=a("641e"),p=Object(n["b"])({components:{ListDisplay:o["a"],NavigationBar:i["a"]},props:{courseName:{type:String,required:!0}},setup(e){const t=c["a"].find((t=>t.title.toLowerCase().replaceAll(" ","-")===e.courseName));return{course:e.courseName,chapters:t.chapters}}}),l=p,u=a("2877"),b=a("9989"),m=a("eebe"),d=a.n(m),f=Object(u["a"])(l,s,r,!1,null,null,null);t["default"]=f.exports;d()(f,"components",{QPage:b["a"]})}}]);