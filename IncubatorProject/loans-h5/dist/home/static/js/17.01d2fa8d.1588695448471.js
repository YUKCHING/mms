webpackJsonp([17],{"5Xdm":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("4YfN"),a=s.n(i),n=s("cShy"),c=s("GClJ"),r=s.n(c),o=s("PWgw"),l=s.n(o),v={data:function(){return{otherCost:"",form:{name:"张三",idcard:"440307199405180710",phone:"13713697967",carNo:"粤B 34567",city:"深圳",licensingDate:"2017-01-02",mileage:"10.0",standard:"国5"},dataURL:"",showQrcodePicker:!1,qrcode:"",timerSec:0,timer:"",info:{},product:{},audit:{},screenInfo:{},showPreview:!1,showImages:"",previewIndex:0}},computed:{isSetProduct:function(){return this.product.product_name}},created:function(){this.getInfo()},destroyed:function(){clearTimeout(this.timer)},methods:{getInfo:function(){var t=this,e={order_id:this.$route.query.order_id};Object(n.s)(e).then(function(e){if(console.log(e),0===e.code){var s=t.moment(1e3*e.data.expire_in),i=t.moment(new Date),n=s.diff(i,"minute"),c=Math.floor(n/60),r=n%60;t.info=a()({},e.data,{expire_time:c+":"+r}),t.product=e.data.product,t.audit=e.data.audit,t.screenInfo=e.data.screen_info,t.showImages=[t.screenInfo.id_card_front_img_url,t.screenInfo.id_card_back_img_url,t.screenInfo.vehicle_license_front_img_url,t.screenInfo.vehicle_license_duplicate_img_url]}})},submitAction:function(){this.$router.go(-1)},createQrcode:function(){var t=this,e={order_id:this.$route.query.order_id};this.tLoading(),Object(n.d)(e).then(function(e){if(0===e.code){var s=e.data.url;t.getQrcodeImage(s)}else t.tClear()})},getQrcodeImage:function(t){var e=this;this.qrcode=l.a.getQrBase64(t,{padding:0,width:80,height:80,reverse:!1,background:"#ffffff",foreground:"#000000"}),this.showQrcodePicker=!0,setTimeout(function(){e.getHtmlImage()},2e3)},getHtmlImage:function(){var t=this,e=this.$refs.content.scrollTop,s=this.$refs.content.scrollLeft;r()(document.querySelector("#content"),{async:!0,scrollY:-e,scrollX:-s}).then(function(e){var s=e.toDataURL("image/png");t.dataURL=s,t.tClear()})},showImagePreview:function(t){this.previewIndex=t,this.showPreview=!0},onChange:function(t){this.previewIndex=t}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"SystemScreen"},[i("div",{staticClass:"loansBlock"},[i("div",{staticClass:"loansTitle"},[i("span",[t._v(t._s(t.product.product_name||"-"))]),t._v(" "),i("div",{staticClass:"button"},[t._v("选择产品")])]),t._v(" "),i("div",{staticClass:"loansInfo"},[i("div",{staticClass:"item"},[i("p",[t._v(t._s(t.audit.amount?t.audit.amount+"万元":"-"))]),t._v(" "),i("p",[t._v("审批额度")])]),t._v(" "),i("div",{staticClass:"item"},[i("p",[t._v(t._s(t.audit.monthly_rate?t.audit.monthly_rate+"%":"-"))]),t._v(" "),i("p",[t._v("月利率")])]),t._v(" "),i("div",{staticClass:"item"},[i("p",[t._v(t._s(t.audit.time_limit||"-"))]),t._v(" "),i("p",[t._v("申请期限")])])]),t._v(" "),i("div",{staticClass:"other"},[i("van-field",{attrs:{type:"number",label:"其他费用：",placeholder:"请输入"},model:{value:t.otherCost,callback:function(e){t.otherCost=e},expression:"otherCost"}})],1)]),t._v(" "),i("div",{staticClass:"panel"},[i("van-field",{attrs:{label:"姓名",readonly:""},model:{value:t.info.user_name,callback:function(e){t.$set(t.info,"user_name",e)},expression:"info.user_name"}}),t._v(" "),i("van-field",{attrs:{label:"身份证号码",readonly:""},model:{value:t.info.id_card,callback:function(e){t.$set(t.info,"id_card",e)},expression:"info.id_card"}}),t._v(" "),i("van-field",{attrs:{label:"联系电话",readonly:""},model:{value:t.info.mobile,callback:function(e){t.$set(t.info,"mobile",e)},expression:"info.mobile"}})],1),t._v(" "),i("div",{staticClass:"panel panel2"},[t._m(0),t._v(" "),i("div",{staticClass:"car-panel"},[i("p",{staticClass:"p1"},[t._v("2018款 奔驰C级(进口) C 180 旅行轿车")]),t._v(" "),i("div",{staticClass:"base-info"},[i("div",{staticClass:"card"},[t._v(t._s(t.form.city))]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"card"},[t._v(t._s(t.form.licensingDate))]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"card"},[t._v(t._s(t.form.mileage)+"万公里")]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"card"},[t._v(t._s(t.form.standard))])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])]),t._v(" "),i("div",{staticClass:"panel panel2"},[t._m(5),t._v(" "),i("van-field",{staticClass:"title-field",attrs:{label:"身份证",readonly:""}}),t._v(" "),i("div",{staticClass:"img-content"},[i("div",{staticClass:"img-panel"},[i("div",{staticClass:"content"},[i("img",{staticClass:"real-img",attrs:{src:t.screenInfo.id_card_front_img_url},on:{click:function(e){return t.showImagePreview(0)}}})])]),t._v(" "),i("div",{staticClass:"img-panel"},[i("div",{staticClass:"content"},[i("img",{staticClass:"real-img",attrs:{src:t.screenInfo.id_card_back_img_url},on:{click:function(e){return t.showImagePreview(1)}}})])])]),t._v(" "),i("div",{staticClass:"remark"},[t._v("\n      备注：\n    ")]),t._v(" "),i("van-field",{staticClass:"title-field",attrs:{label:"行驶证",readonly:""}}),t._v(" "),i("div",{staticClass:"img-content"},[i("div",{staticClass:"img-panel"},[i("div",{staticClass:"content"},[i("img",{staticClass:"real-img",attrs:{src:t.screenInfo.vehicle_license_front_img_url},on:{click:function(e){return t.showImagePreview(2)}}})])]),t._v(" "),i("div",{staticClass:"img-panel"},[i("div",{staticClass:"content"},[i("img",{staticClass:"real-img",attrs:{src:t.screenInfo.vehicle_license_duplicate_img_url},on:{click:function(e){return t.showImagePreview(3)}}})])])]),t._v(" "),i("div",{staticClass:"remark"},[t._v("\n      备注：\n    ")])],1),t._v(" "),i("div",{staticClass:"buttonPanel"},[i("van-button",{staticClass:"button1",on:{click:t.createQrcode}},[t._v("通知客人修改")]),t._v(" "),i("van-button",{staticClass:"button2",attrs:{type:"danger",disabled:!t.isSetProduct},on:{click:t.submitAction}},[t._v("确定OK")])],1),t._v(" "),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showQrcodePicker,callback:function(e){t.showQrcodePicker=e},expression:"showQrcodePicker"}},[i("div",{ref:"content",staticClass:"pop-block",attrs:{id:"content"}},[i("div",{staticClass:"top"},[i("div",{staticClass:"button"},[t._v("\n          请扫码进行系统初筛\n        ")])]),t._v(" "),i("div",{staticClass:"qrcode-block"},[i("img",{attrs:{src:s("tKQY")}}),t._v(" "),i("p",{staticClass:"exp"},[t._v("- 长按可保存图片 -")]),t._v(" "),i("img",{staticClass:"qrcode-img",attrs:{src:t.qrcode}})]),t._v(" "),i("img",{staticClass:"show-img",attrs:{src:t.dataURL}})])]),t._v(" "),i("van-image-preview",{attrs:{images:t.showImages,startPosition:t.previewIndex},on:{change:t.onChange},scopedSlots:t._u([{key:"index",fn:function(){return[t._v("第"+t._s(t.previewIndex+1)+"页")]},proxy:!0}]),model:{value:t.showPreview,callback:function(e){t.showPreview=e},expression:"showPreview"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("车辆信息")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"base-info",staticStyle:{"margin-bottom":"22px"}},[s("div",{staticClass:"card"},[t._v("所在城市")]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"card"},[t._v("上牌日期")]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"card"},[t._v("行程里数")]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"card"},[t._v("排放标准")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"div-info"},[e("span",[this._v("车牌号")]),this._v(" "),e("span",[this._v("粤B 34567")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"div-info"},[e("span",[this._v("注册日期")]),this._v(" "),e("span",[this._v("2017-01-10")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"div-info"},[e("span",[this._v("发证日期")]),this._v(" "),e("span",[this._v("2017-01-10")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",[this._v("上传资料")])])}]};var _=s("C7Lr")(v,d,!1,function(t){s("qkuE")},"data-v-b2d52496",null);e.default=_.exports},qkuE:function(t,e){},tKQY:function(t,e,s){t.exports=s.p+"static/img/share-bottom.02fe41d.png"}});