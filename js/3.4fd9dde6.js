(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",{staticClass:"bg-primary row justify-between",staticStyle:{height:"55px"}},[a("div",[a("q-btn",{staticClass:"text-h6 text-white",attrs:{to:"/","no-caps":"",flat:"",dense:""}},[a("q-img",{staticStyle:{height:"40px",width:"40px"},attrs:{src:"icons/logo-bibliotheque-v2.png"}}),a("div",{staticClass:"gt-xs"},[t._v("Creascio")])],1)],1),a("search-bar")],1)],1),a("q-page-container",[a("router-view")],1)],1)},s=[],r=a("a6f4"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"q-gutter-md row"},[a("q-select",{attrs:{dense:"",label:"Rechercher un chapitre (2 caractères)",standout:"bg-white text-grey","use-input":"","input-class":"text-grey-9","bg-color":"white",options:t.options},on:{filter:t.filter},scopedSlots:t._u([{key:"option",fn:function(e){return[a("q-item",{staticClass:"text-grey-9",attrs:{to:t.getPath(e.opt)}},[a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(e.opt)}})],1)],1),a("q-separator",{attrs:{color:"grey"}})]}},{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey-9"},[t._v("No results")])],1)]},proxy:!0}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1)])},i=[],l=a("ab91");const c=[];l["a"].forEach((t=>{t.chapters.forEach((t=>c.push(t.title)))}));var p={data(){return{model:null,options:c}},methods:{filter(t,e,a){t.length<2?a():e((()=>{const e=t.toLowerCase();this.options=c.filter((t=>t.toLowerCase().indexOf(e)>-1))}))},getPath(t){let e="";return l["a"].forEach((a=>{const o=a.chapters.find((e=>e.title===t));o&&(e=`/${a.title}/${o.title}`)})),e.toLowerCase().split(" ").join("-")}}},u=p,h=a("2877"),d=a("ddd8"),f=a("66e5"),b=a("4074"),m=a("0170"),g=a("eb85"),w=a("eebe"),v=a.n(w),q=Object(h["a"])(u,n,i,!1,null,null,null),x=q.exports;v()(q,"components",{QSelect:d["a"],QItem:f["a"],QItemSection:b["a"],QItemLabel:m["a"],QSeparator:g["a"]});var y=Object(r["b"])({components:{SearchBar:x},setup(){}}),C=y,Q=a("4d5a"),_=a("e359"),L=a("65c6"),S=a("9c40"),j=a("068f"),k=a("09e3"),E=Object(h["a"])(C,o,s,!1,null,null,null);e["default"]=E.exports;v()(E,"components",{QLayout:Q["a"],QHeader:_["a"],QToolbar:L["a"],QBtn:S["a"],QImg:j["a"],QPageContainer:k["a"]})}}]);