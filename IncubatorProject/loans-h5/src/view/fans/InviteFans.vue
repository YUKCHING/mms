<template>
  <div class='InviteFans'>
    <div class="panel" id="share-block">
      <div class="top">
        <!-- <img src="@/assets/imgs/img-tainuo-logo.png">
        <div class="line"></div> -->
        <span class="banner">
          做车贷  找77汽车
        </span>
      </div>
      <div class="content">
        <p class="p1">分享海报</p>
        <p class="p2">超10款车贷产品，总有一款适合您！</p>
        <p class="p2">咱们做车贷找77汽车！</p>
        <div class="img-block">
          <img :src="imgUrl" ref="imgUrlBlock">
          <van-uploader
            class="uploader"
            :after-read="afterRead"
            :preview-image="false"
            v-if="showInput"
          />
        </div>
        <!-- <canvas
          id="mycanvas"
          :style="{
            width: canvarWidth + 'px',
            height: canvarHeight + 'px'
          }"
          v-else
        >
        </canvas> -->
        <div class="edit-block">
          <div class="left">
            <van-field
              v-model="writing"
              type="textarea"
              autosize
              clearable
              placeholder="请在此输入您的分享文案"
              v-if="showInput"
            />
            <p class="multi-p" v-else>{{writing}}</p>
            <div class="info">
              <img :src="userInfo.avatar" alt="">
              <span>{{userInfo.username}}</span>
            </div>
          </div>
          <img class="right" :src="codeUrl">
        </div>
      </div>
    </div>
    <div class="bottom-block">
      <!-- <div class="bottom1" @click="shareAction">
        <img src="@/assets/icon/icon-share.png" alt="">
        点击分享
      </div>
      <div class="bottom2" @click="createImgAction">
        <img src="@/assets/icon/icon-download.png" alt="">
        生成照片
      </div> -->
      <div class="bottom1" @click="createImgAction">
        <img src="@/assets/icon/icon-download.png" alt="">
        生成照片
      </div>
    </div>
    <van-image-preview v-model="showPreview" :images="[shareUrl]" @close="closePreviewAction">
    </van-image-preview>
    <qr-overlay></qr-overlay>
    <back-home />
  </div>
</template>
<script>
import { createQrCode, uploadImageRequest } from '@/apis/api.js'
import imgProcessor from '@/common/js/ImageProcessor.js'
import jrQrcode from 'jr-qrcode'
import html2canvas from 'html2canvas'
import initLoginCheckInfo from '@/common/js/login.js'
import QrOverlay from '@/components/QrOverlay'
import BackHome from '@/components/BackHome'
export default {
  components: {
    QrOverlay, BackHome
  },
  data () {
    return {
      imgUrl: require('@/assets/imgs/img-share-bg.png'),
      codeUrl: '',
      shareUrl: '',
      userInfo: this.$store.getters.userInfo,
      writing: '',
      showPreview: false,
      showInput: true,
      canvarWidth: '',
      canvarHeight: ''
    }
  },
  beforeCreate () {
    window.shareUrl = location.href.split('#')[0]
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      if (process.env.NODE_ENV === 'production' && !process.env.ISAPPLET) {
        let title = '汽车平台-邀请粉丝'
        let des = '超10款车贷产品，总有一款适合您！做车贷，找77汽车。'
        if (!window.isReady) {
          initLoginCheckInfo(this.$route).then(info => {
            if (info && info.code === -1000104) {
              this.bus.$emit('showQrOverlay')
              return
            }
            // 分享设置
            let shareLink = 'http://77car-api.shanshuijv.com/home/' + this.$route.name + '?invite=' + this.$store.getters.userInfo['invite_code']
            this.initWxShare(window.shareUrl, title, des, shareLink)
            window.isReady = true
            this.$store.dispatch('setIsFirstVisit', {
              isFirstVisit: info.showBack
            })

            this.getCode()
          })
        } else {
        // 分享设置
          let shareLink = 'http://77car-api.shanshuijv.com/home/' + this.$route.name + '?invite=' + this.$store.getters.userInfo['invite_code']
          this.initWxShare(window.shareUrl, title, des, shareLink)

          this.getCode()
        }
      } else {
        this.getCode()
      }
    },
    shareAction () {

    },
    createImgAction () {
      this.getHtmlImage()
    },
    getCode () {
      let req = {
        invite_code: this.userInfo.invite_code
      }
      createQrCode(req).then(res => {
        if (res.code === 0) {
          this.getQrcodeImage(res.data.url)
        }
      })
    },
    getQrcodeImage (url) {
      let option = {
        padding: 0,
        width: 80, // 二维码图片宽度（默认为256px）
        height: 80, // 二维码图片高度（默认为256px
        reverse: false, // 反色二维码，二维码颜色为上层容器的背景颜色
        background: '#ffffff', // 二维码背景颜色（默认白色）
        foreground: '#000000' // 二维码颜色（默认黑色
      }
      this.codeUrl = jrQrcode.getQrBase64(url, option)
    },
    afterRead (file) {
      imgProcessor.uploadImage(file, 'picture', 0.7).then(formData => {
        this.uploadShareImage(formData)
      })
    },
    uploadShareImage (file) {
      uploadImageRequest(file).then(res => {
        if (res.code === 0) {
          this.imgUrl = res.data.url
          console.log(this.imgUrl)
        }
      })
    },
    getHtmlImage () {
      this.showInput = !this.showInput
      // this.creatCanvas()
      this.tLoading()
      setTimeout(() => {
        html2canvas(document.querySelector('#share-block'), {
          useCORS: true
        }).then(canvas => {
          this.shareUrl = canvas.toDataURL('image/png')
          this.showPreview = true
          this.tClear()
        })
      }, 1000)
    },
    creatCanvas () {
      let width = this.$refs['imgUrlBlock'].offsetWidth
      let height = this.$refs['imgUrlBlock'].offsetHeight
      this.canvarWidth = width
      this.canvarHeight = height

      var img = new Image()
      img.src = this.imgUrl
      img.onload = function () {
        var canvas = document.getElementById('mycanvas')
        var context = canvas.getContext('2d')
        var that = this
        var w = that.width
        var h = that.height
        var scale = w / h
        h = (w / scale)
        var anw = document.createAttribute('width')
        anw.nodeValue = w
        var anh = document.createAttribute('height')
        anh.nodeValue = h
        canvas.setAttributeNode(anw)
        canvas.setAttributeNode(anh)
        context.drawImage(that, 0, 0, w, h)
      }
    },
    closePreviewAction () {
      this.showInput = true
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.InviteFans /deep/
  padding 3px 2rem
  box-sizing border-box
  background #ffffff

  .van-cell
    padding 0

  .panel
    background linear-gradient(to bottom, #FC7550 0%, #FC3726 100%)
    border-radius 0.83rem
    padding-bottom .7rem
    width 100%

    .top
      display flex
      align-items center
      justify-content space-between
      box-sizing border-box
      padding 1rem

      img
        height 2.5rem

      .line
        width 0.08rem
        background #ffffff
        height 1.33rem

      .banner
        display inline-block
        color #ffffff
        letter-spacing 3px
        font-size 1.25rem

    .content
      background #ffffff
      border-radius .67rem
      box-sizing border-box
      margin 0 .7rem
      padding 1rem .8rem

      .p1
        color #000000
        font-size 1.33rem
        font-weight 600

      .p2
        font-size 1.1rem
        margin-top .2rem
        color rgba(0, 0, 0, .8)

      .img-block
        width 100%
        margin-top .8rem
        position relative

        .uploader
          position absolute
          left calc(50% - 30px)
          top calc(50% - 30px)

        .van-uploader__upload
          width 60px
          height 60px

        img
          width 100%

      .edit-block
        display flex

        .left
          overflow hidden
          flex-grow 1
          display inline-flex
          flex-direction column

          .multi-p
            box-sizing border-box
            word-wrap break-word
            font-size 1.18rem

          .info
            display flex
            align-items center
            font-size 1.08rem
            margin-top .5rem

            img
              width 2rem
              height 2rem
              border-radius 50%
              margin-right 5px

        .right
          width 6.33rem
          height 6.33rem
          margin-left .5rem

  .bottom-block
    margin-top 2rem
    display flex
    justify-content space-around
    align-items center
    color #ffffff

    .bottom1
      display inline-flex
      background linear-gradient(to right, #FC7550 0%, #FC3726 100%)
      align-items center
      justify-content space-around
      font-size 1.25rem
      letter-spacing 3px
      padding 1rem 2rem
      border-radius 22px

      img
        width 1.23rem
        margin-right 10px

    .bottom2
      display inline-flex
      flex-direction column
      justify-content center
      align-items center
      background #338AFF
      border-radius 22px
      font-size 1rem
      padding .6rem 1.5rem

      img
        width 1.23rem

</style>
