webpackJsonp([21],{d7Zf:function(t,s){},kdwg:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n("cShy"),i={data:function(){return{orderId:this.$route.query.id,info:{},goods:{}}},created:function(){this.getDetail()},methods:{getDetail:function(){var t=this,s={token:this.$store.getters.token,order_id:this.orderId};Object(a.p)(s).then(function(s){0===s.code&&(t.info=s.data,t.goods=s.data.goods,console.log(s))})}}},o={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"OrderDetail"},[n("div",{staticClass:"block1"},[n("img",{staticClass:"goodimg",attrs:{src:t.goods.thumb_url,alt:""}}),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v(t._s(t.goods.name))]),t._v(" "),n("p",{staticClass:"price"},[t._v("￥"+t._s(t.goods.price))])])]),t._v(" "),n("div",{staticClass:"block2"},[n("p",[n("span",[t._v("优惠券：")]),t._v(" "),n("span",[t._v("￥"+t._s(t.info.coupon_price))])]),t._v(" "),n("p",[n("span",[t._v("运费：")]),t._v(" "),n("span",[t._v("￥"+t._s(t.info.freight))])]),t._v(" "),n("p",[n("span",[t._v("需付款：")]),t._v(" "),n("span",[t._v("￥"+t._s(t.info.pay_amount))])])]),t._v(" "),n("div",{staticClass:"block3"},[n("p",[n("span",[t._v("订单编号：")]),t._v(" "),n("span",[t._v(t._s(t.info.vin))])]),t._v(" "),n("p",[n("span",[t._v("下单时间：")]),t._v(" "),n("span",[t._v(t._s(t.info.order_time))])]),t._v(" "),n("p",[n("span",[t._v("支付方式：")]),t._v(" "),n("span",[t._v(t._s(1===t.info.payment_method?"微信":"其它"))])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-block"},[s("div",{staticClass:"button cancel-button"},[this._v("\n      取消订单\n    ")]),this._v(" "),s("div",{staticClass:"button pay-button"},[this._v("\n      去支付\n    ")])])}]};var e=n("C7Lr")(i,o,!1,function(t){n("d7Zf")},"data-v-2bffc410",null);s.default=e.exports}});