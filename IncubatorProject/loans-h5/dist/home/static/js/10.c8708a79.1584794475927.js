webpackJsonp([10],{BJXg:function(t,a){},IA2S:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("4YfN"),n=s.n(e),i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"block",on:{click:t.showDetail}},[s("div",{staticClass:"top"},[s("span",{staticClass:"title"},[t._v(t._s(t.data.product_name))]),t._v(" "),s("span",{staticClass:"chara"},[t._v(t._s(t.data.product_label))])]),t._v(" "),s("div",{staticClass:"middle"},[s("div",[s("p",{staticStyle:{color:"#FE3525"}},[t._v(t._s(t.data.monthly_rate))]),t._v(" "),s("p",{staticClass:"name"},[t._v("综合月利润")])]),t._v(" "),s("div",[s("p",[t._v(t._s(t.data.amount))]),t._v(" "),s("p",{staticClass:"name"},[t._v("可贷额度")])])]),t._v(" "),s("div",{staticClass:"bottom"},t._l(t.data.feature,function(a){return s("span",{key:a},[t._v(t._s(a))])}),0)])},staticRenderFns:[]};var o=s("C7Lr")({props:["data"],methods:{showDetail:function(){this.$emit("click",this.data.id)}}},i,!1,function(t){s("BJXg")},"data-v-30461b46",null).exports,c=s("cShy"),r={components:{LoansBlock:o},created:function(){this.getProductList()},data:function(){return{lists:[]}},methods:{getProductList:function(){var t=this,a={token:this.$store.getters.token,limit:"99",page:"1",search:"",sort:""};Object(c.n)(a).then(function(a){0===a.code&&a&&(t.lists=a.data.list.map(function(t){return n()({},t,{monthly_rate:t.monthly_rate+"%"})}))}).catch(function(){})},showDetail:function(t){this.$router.push({path:"/loansdetail",query:{token:this.$router.history.current.query.token,productid:t}})}}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"loans-list"},t._l(t.lists,function(a){return s("loans-block",{key:a.id,attrs:{data:a},on:{click:t.showDetail}})}),1)},staticRenderFns:[]};var u=s("C7Lr")(r,l,!1,function(t){s("wx8Q")},"data-v-0c3999b3",null);a.default=u.exports},wx8Q:function(t,a){}});