webpackJsonp([17],{BJXg:function(t,s){},IA2S:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("4YfN"),n=a.n(e),i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"block",on:{click:t.showDetail}},[a("div",{staticClass:"top"},[a("span",{staticClass:"title"},[t._v(t._s(t.data.product_name))]),t._v(" "),a("span",{staticClass:"chara"},[t._v(t._s(t.data.product_label))])]),t._v(" "),a("div",{staticClass:"middle"},[a("div",[a("p",{staticStyle:{color:"#FE3525"}},[t._v(t._s(t.data.monthly_rate))]),t._v(" "),a("p",{staticClass:"name"},[t._v("综合月利润")])]),t._v(" "),a("div",[a("p",[t._v(t._s(t.data.amount))]),t._v(" "),a("p",{staticClass:"name"},[t._v("可贷额度")])])]),t._v(" "),a("div",{staticClass:"bottom"},t._l(t.data.feature,function(s){return a("span",{key:s},[t._v(t._s(s))])}),0)])},staticRenderFns:[]};var o=a("C7Lr")({props:["data"],methods:{showDetail:function(){this.$emit("click",this.data.id)}}},i,!1,function(t){a("BJXg")},"data-v-30461b46",null).exports,c=a("cShy"),r={components:{LoansBlock:o},created:function(){this.getProductList()},data:function(){return{lists:[]}},methods:{getProductList:function(){var t=this,s={token:this.$store.getters.token,limit:"99",page:"1",search:"",sort:""};Object(c.s)(s).then(function(s){0===s.code&&s&&(t.lists=s.data.list.map(function(t){return n()({},t,{monthly_rate:t.monthly_rate+"%"})}))}).catch(function(){})},showDetail:function(t){this.$router.push({path:"/loansdetail",query:{token:this.$router.history.current.query.token,productid:t}})}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"loans-list"},t._l(t.lists,function(s){return a("loans-block",{key:s.id,attrs:{data:s},on:{click:t.showDetail}})}),1)},staticRenderFns:[]};var u=a("C7Lr")(r,l,!1,function(t){a("wx8Q")},"data-v-0c3999b3",null);s.default=u.exports},wx8Q:function(t,s){}});