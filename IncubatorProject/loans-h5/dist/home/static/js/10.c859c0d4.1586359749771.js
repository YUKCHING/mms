webpackJsonp([10],{"78vk":function(t,e){},Pou1:function(t,e,a){t.exports=a.p+"static/img/mask-img.aec5f1d.png"},bSQA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("cShy"),s=a("9YcK"),i=a("h+rX"),r=a("GClJ"),c=a.n(r),o=a("PWgw"),l=a.n(o),v={components:{ShareCard:s.a,SelectButton:i.a},data:function(){return{dataURL:"",qrcode:"",contentHeight:"",valId:"",loanMin:"",loanMax:"",info:{brand_name:"",model_name:"",city_name:"",reg_date:"",mile_age:""},tabInfo:[{title:"车况普通",value:"1",select:!1},{title:"车况良好",value:"2",select:!1},{title:"车况优秀",value:"3",select:!1}]}},created:function(){var t=this.$route.query;this.valId=t.valId,this.info.brand_name=t.brand_name,this.info.model_name=t.model_name,this.info.city_name=t.city_name,this.info.reg_date=t.reg_date,this.info.mile_age=t.mile_age,this.loanMin=t.loanMin,this.loanMax=t.loanMax;var e=t.tabValue;this.tabInfo.forEach(function(t){t.select=t.value===e})},mounted:function(){this.createQrcode()},methods:{createQrcode:function(){var t=this;this.tLoading("请稍等...");var e={valuation_id:this.valId};Object(n.c)(e).then(function(e){if(0===e.code){var a=e.data.url;t.getQrcodeImage(a)}})},getQrcodeImage:function(t){var e=this;this.qrcode=l.a.getQrBase64(t,{padding:0,width:80,height:80,reverse:!1,background:"#ffffff",foreground:"#000000"});var a=null;a=setInterval(function(){var t=window.getComputedStyle(e.$refs.img1).height,n=window.getComputedStyle(e.$refs.img2).height;console.log("setInterval"),"0px"!==t&&"0px"!==n&&(console.log("getHtmlImage"),e.contentHeight=window.getComputedStyle(e.$refs.content).height,clearInterval(a),e.getHtmlImage())},100)},getHtmlImage:function(){var t=this;c()(document.querySelector("#content"),{async:!0}).then(function(e){var a=e.toDataURL("image/png");t.dataURL=a,t.tClear()})}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-image"},[n("div",{ref:"content",staticClass:"content",attrs:{id:"content"}},[n("div",{staticClass:"block1"},[t._v("\n      "+t._s(t.info.brand_name)+" "+t._s(t.info.model_name)+"\n    ")]),t._v(" "),n("div",{staticClass:"block2"},[n("share-card",{attrs:{title:"所在城市",value:t.info.city_name}}),t._v(" "),n("share-card",{attrs:{title:"上牌日期",value:t.info.reg_date}}),t._v(" "),n("share-card",{attrs:{title:"行程里程",value:t.info.mile_age+"万公里"}})],1),t._v(" "),n("div",{staticClass:"block3"},[n("div",{staticClass:"part1"},[n("p",[t._v("可贷款额度")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.loanMin)+"~"+t._s(t.loanMax)+"\n          "),n("span",[t._v(" 万")])]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"part2"},t._l(t.tabInfo,function(t){return n("select-button",{key:t.value,attrs:{info:t}})}),1),t._v(" "),n("div",{staticClass:"part3"},[t._m(1),t._v(" "),n("img",{ref:"img1",staticClass:"mask-panel",attrs:{src:a("Pou1")}})])]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"block5"},[n("img",{ref:"img2",attrs:{src:a("ttfm"),alt:""}}),t._v(" "),n("p",{staticClass:"exp"},[t._v("长按可保存图片")]),t._v(" "),n("img",{staticClass:"qrcode-img",attrs:{src:t.qrcode}})])]),t._v(" "),n("img",{staticClass:"show-img",style:{height:t.contentHeight},attrs:{src:t.dataURL}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"share-button"},[e("img",{attrs:{src:a("HN9g")}}),this._v(" "),e("span",[this._v("分享")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"line1"},[a("div",{staticClass:"left"},[a("p",[t._v("估值(万)")]),t._v(" "),a("div",{staticClass:"mask"},[t._v("\n              扫码查看结果\n            ")])]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"right"},[a("span",{staticClass:"button"},[t._v("\n              选择产品\n            ")]),t._v(" "),a("p",[t._v("超"),a("span",{staticStyle:{color:"#EE5150"}},[t._v("*款")]),t._v("产品可选")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block4"},[e("div",{staticClass:"mask"},[this._v("\n        扫码查看结果\n      ")])])}]};var _=a("C7Lr")(v,d,!1,function(t){a("78vk")},"data-v-43fea80a",null);e.default=_.exports},ttfm:function(t,e,a){t.exports=a.p+"static/img/share-bottom.14b54ba.png"}});