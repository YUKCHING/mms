webpackJsonp([13],{Fsvt:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACPUlEQVRYR+3Wz4tPURjH8ddsZGNhYUcp5MdslKSQSAlJUWYhIaQIxcbCwig0WVDERig/okSkyMoUmZJiQeTXir8AWVD06Ny6bvOde+5c06Sc5T3P83ne9znnfM7pMsqja5Tr+2cA1mFnw26dwfW6nNwOvMXUOrHK/DtMq8vJAViBu3VCHeZX4t5QuTkAJ7F7mACnsKcNwBw8wLhhAnzBMgx0yi86EJvsILqHWahp2nPcRm8A9KbiTUXe4zG+YwGmNxVATwA8w+wGyUdwDS8qOTOxq+FxfRkAPzOLf8AqvKqJX4qrmFCJ+5w25ORyx3MBos1jBikcYj/wcZC5bxhb+n4La7AZF4rvuQD7cawktiG1e176Frs8nO9yKSa6dacCdgWry6cqB+A+lpeEQmR9h2W4hI2luciNY9hx5AAcwNGksAXnavbAJlxMMYcR+a0AFuFhUog276gBOI+tKSb+PrrQCqBs1+GKi2sA+rGkFDPkKctZgvklKz2LbTUA0f5YhhgBG9CtOrAPJ5JCjmseSu4aKbH+sQ9aAcSjoqek8ARzOyiGNYctF+MG1rYFiPwAKF43ExFd2VsRji4dL5lS3KRPa5br95swx4rfDHLZhAvGGn9Ne6TqhnFyFv4tgNA5ndyvTjPmhzKrP/JzO1AkfUoXys0OFNvRh/E5lBHTFKAMEg/V1+kyirfADEzKLVzEBcCjys5tqtEmfiAAas2iTYWa3O7CZmelozVlBIuVpeM1FR7Rn/MsH1Gm/wC/ABDAaysoROA8AAAAAElFTkSuQmCC"},aOrO:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("3cXf"),n=i.n(a),s=i("cShy"),o=i("RJut"),r={components:{QrOverlay:i("0P7c").a},data:function(){return{vin:"",engine_no:"",plate_show:"",plate_first:"粤",ocr_id:"",columns:["粤","京","沪","津","渝","鲁","冀","晋","蒙","辽","吉","黑","苏","浙","皖","闽","赣","豫","湘","鄂","桂","琼","川","贵","云","藏","陕","甘","青","宁","新","港","澳","台"],showPicker:!1}},beforeCreate:function(){window.shareUrl=location.href.split("#")[0],console.log("beforeCreate ",window.shareUrl)},created:function(){this.init()},methods:{init:function(){var t=this,e="一键识别，有违章，早知道，免费查询，官方同步。";if(window.isReady){var i="http://api.tainuocar.com/home/"+this.$route.name+"?invite="+this.$store.getters.userInfo.invite_code;this.initWxShare(window.shareUrl,"泰诺汽车平台-违章查询",e,i)}else Object(o.a)(this.$route).then(function(i){if(-1000104!==i.code){var a="http://api.tainuocar.com/home/"+t.$route.name+"?invite="+t.$store.getters.userInfo.invite_code;t.initWxShare(window.shareUrl,"泰诺汽车平台-违章查询",e,a),window.isReady=!0}else t.bus.$emit("showQrOverlay")});if(this.$store.getters.violationInfo){var a=this.$store.getters.violationInfo;this.vin=a.vin,this.engine_no=a.engine_no,this.plate_first=a.plate_first,this.plate_show=a.plate_show,this.ocr_id=a.ocr_id}},onSubmit:function(t){this.createAction()},onPickerConfirm:function(t){this.plate_first=t,this.showPicker=!1},afterRead:function(t){console.log(t),this.uploadDriverImage(t.file)},uploadDriverImage:function(t){var e=this,i=new FormData;i.append("license_img",t),Object(s.B)(i).then(function(t){0===t.code&&(e.vin=t.data.vin,e.engine_no=t.data.engine_no,e.plate_first=t.data.plate_no.slice(0,1),e.plate_show=t.data.plate_no.slice(1),e.ocr_id=t.data.ocr_id)})},createAction:function(){this.$store.dispatch("setViolationInfo",{violationInfo:n()({vin:this.vin,engine_no:this.engine_no,plate_first:this.plate_first,plate_show:this.plate_show,ocr_id:this.ocr_id})}),this.$router.push({path:"/violationdetail",query:{vin:this.vin,engine_no:this.engine_no,license_no:this.plate_first+this.plate_show,ocr_id:this.ocr_id}})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"violation"},[t._m(0),t._v(" "),a("div",{staticClass:"content-block"},[a("van-form",{on:{submit:t.onSubmit}},[a("p",{staticClass:"label"},[t._v("VIN码")]),t._v(" "),a("van-field",{staticClass:"border-bottom",attrs:{placeholder:"请输入17位VIN码",rules:[{required:!0,message:"请输入17位VIN码"}],clearable:""},model:{value:t.vin,callback:function(e){t.vin=e},expression:"vin"}},[a("van-uploader",{staticClass:"uploader",attrs:{slot:"right-icon","after-read":t.afterRead,"preview-image":!1},slot:"right-icon"},[a("img",{staticStyle:{width:"1.5rem"},attrs:{src:i("Fsvt")}})])],1),t._v(" "),a("p",{staticClass:"label"},[t._v("发动机号")]),t._v(" "),a("van-field",{staticClass:"border-bottom",attrs:{placeholder:"请输入发动机号",rules:[{required:!0,message:"请输入发动机号"}],clearable:""},model:{value:t.engine_no,callback:function(e){t.engine_no=e},expression:"engine_no"}},[a("van-uploader",{staticClass:"uploader",attrs:{slot:"right-icon","after-read":t.afterRead,"preview-image":!1},slot:"right-icon"},[a("img",{staticStyle:{width:"1.5rem"},attrs:{src:i("Fsvt")}})])],1),t._v(" "),a("p",{staticClass:"label"},[t._v("车牌号码")]),t._v(" "),a("div",{staticClass:"plate-block border-bottom"},[a("p",{staticClass:"plate-select",on:{click:function(e){t.showPicker=!0}}},[a("span",{staticStyle:{color:"#FF2323"}},[t._v(t._s(t.plate_first))]),t._v(" "),a("img",{attrs:{src:i("xua3")}})]),t._v(" "),a("van-field",{staticClass:"plate-field",attrs:{placeholder:"请输入车牌号码",rules:[{required:!0,message:"请输入车牌号码"}],clearable:""},model:{value:t.plate_show,callback:function(e){t.plate_show=e},expression:"plate_show"}})],1),t._v(" "),a("div",{staticStyle:{margin:"4rem"}},[a("van-button",{staticStyle:{background:"linear-gradient(to right, #FF7952 0%, #FE3525 100%)",border:"none"},attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("\n          查询\n        ")])],1)],1)],1),t._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{cancel:function(e){t.showPicker=!1},confirm:t.onPickerConfirm}})],1),t._v(" "),a("qr-overlay")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-block"},[e("p",[this._v("有违章 早知道")]),this._v(" "),e("p",{staticClass:"p2"},[this._v("免费查询，官方同步")])])}]};var c=i("C7Lr")(r,l,!1,function(t){i("nXBE")},"data-v-e1be0866",null);e.default=c.exports},nXBE:function(t,e){},xua3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABaUlEQVRYR+3VL0sEQRjH8e9F34cazPdG/A9yGASDYDAYDAYNBoPhQMEgGAyCGCwGg8FgMIgaDIIGg0XFYLBY5IFnZRie3Z2ZXbgyE5d9nt/nnpuZ7TDg1RlwPhmQJ5An4E9gDJgB9oCPlo/oMNADdoHPorcLGALugVHgEZgEnlpCTAMn2usZGLEA8usluFgPinhpiHDDpdUt0LUA8kyUUlAseVkm8ZqI8MOlzawzDfMm9BE3iniLRFjhc8Cx26fsGPqIa2ACeA9EWOHzwJFfX3UP+IgrRXzVIKzwBeDQqqu7iHzEpSK+SxBW+CJwUIauA1gb80IRP15TK3wJ2K+aWAjAQpwD48CvNrfCl/VCq/zHQgEW4kwnMeUeK01bAfohGzYGYCFOAQG4axXYCQmXd2IBFsLNWgO2Q8NTAWWIdWArJrwJwEdsAJux4U0BUi+7X75udynhbQBSc//rUjZh41C3QQbkCeQJ/AGHOkAhLr3mNwAAAABJRU5ErkJggg=="}});