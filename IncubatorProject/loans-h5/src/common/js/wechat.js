import store from '@/store'
import Vue from 'vue'
import { getWxShare } from '@/apis/api.js'

Vue.prototype.initWxShare = initWxShare
Vue.prototype.wechatShareReady = wechatShareReady

export function initWxShare (iniUrl, title, des, link) {
  return new Promise((resolve, reject) => {
    let req = {
      apis: [
        'updateTimelineShareData',
        'updateAppMessageShareData'
        // 'onMenuShareTimeline',
        // 'onMenuShareAppMessage'
      ],
      url: iniUrl
    }
    getWxShare(req).then(res => {
      if (res.code === 0) {
        let config = res.data
        store.dispatch('setWxConfig', {
          wxConfig: JSON.stringify({
            appId: config.appId,
            timestamp: config.timestamp,
            noncestr: config.nonceStr,
            signature: config.signature
          })
        }).then(() => {
          console.log('分享link ', link)
          wechatShareReady(title, des, link).then(() => {
            resolve()
          })
        })
      }
    })
  })
}

function wechatShareReady (title, des, link) {
  let info = {
    title: title, // 分享标题
    desc: des, // 分享描述
    link: link, // 分享链接
    // link: location.href.split('#')[0],
    // link: window.shareUrl,
    imgUrl: 'http://tainuocar.oss-cn-zhangjiakou.aliyuncs.com/my-share/image/125wiXpjf7tgcixRv2z.png' // 分享图标
  }
  return new Promise((resolve, reject) => {
    let wxConfig = store.getters.wxConfig
    window.wx.config({
      debug: false,
      appId: wxConfig.appId, // 必填，公众号的唯一标识
      timestamp: wxConfig.timestamp, // 必填，生成签名的时间戳
      nonceStr: wxConfig.noncestr, // 必填，生成签名的随机串
      signature: wxConfig.signature, // 必填，签名，见附录1
      jsApiList: [
        'updateTimelineShareData',
        'updateAppMessageShareData'
        // 'onMenuShareTimeline', // 分享朋友圈
        // 'onMenuShareAppMessage' // 分享朋友
      ] // 必填，需要使用的 JS 接口列表，所有JS接口列表见附录2
    })

    setTimeout(() => {
      window.wx.ready(() => {
        window.wx.updateTimelineShareData({
          title: info.title, // 分享标题
          link: info.link, // 分享链接
          imgUrl: info.imgUrl // 分享图标
          // success: function () {
          //   console.log('updateTimelineShareData 设置成功')
          // }
        })
        window.wx.updateAppMessageShareData({
          title: info.title, // 分享标题
          desc: info.desc, // 分享描述
          link: info.link, // 分享链接
          imgUrl: info.imgUrl // 分享图标
          // success: function () {
          //   console.log('updateAppMessageShareData 设置成功')
          // }
        })
        resolve()
      })
    }, 1000)
  })
}
