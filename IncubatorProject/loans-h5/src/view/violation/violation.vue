<template>
  <div class="violation">
    <div class="top-block">
      <p>有违章 早知道</p>
      <p class="p2">免费查询，官方同步</p>
    </div>
    <div class="content-block">
      <van-form @submit="onSubmit">
        <p class="label">VIN码</p>
        <van-field
          v-model="vin"
          placeholder="请输入17位VIN码"
          :rules="[{ required: false, message: '请输入17位VIN码', trigger: 'onBlur' }]"
          class="border-bottom"
          clearable
        >
          <div slot="right-icon" class="button-panel">
            <img class="arrow-button" src="@/assets/icon/icon-arrow-down.png" @click="showHistoryPicker = true">
            <van-uploader
              class="uploader"
              :after-read="afterRead"
              :preview-image="false"
            >
              <img src="@/assets/icon/icon-camera.png" style="width: 1.5rem;">
            </van-uploader>
          </div>

        </van-field>
        <p class="label">发动机号</p>
        <van-field
          v-model="engine_no"
          placeholder="请输入发动机号"
          :rules="[{ required: false, message: '请输入发动机号' }]"
          class="border-bottom"
          clearable
        >
          <!-- <van-uploader
            slot="right-icon"
            class="uploader"
            :after-read="afterRead"
            :preview-image="false"
          >
            <img src="@/assets/icon/icon-camera.png" style="width: 1.5rem;">
          </van-uploader> -->
        </van-field>
        <p class="label">车牌号码</p>
        <div class="plate-block border-bottom">
          <p class="plate-select" @click="showPicker = true">
            <span style="color: #FF2323;">{{plate_first}}</span>
            <img src="@/assets/icon/icon-arrow-down.png" />
          </p>
          <van-field
            v-model="plate_show"
            placeholder="请输入车牌号码"
            :rules="[{ required: true, message: '请输入车牌号码' }]"
            class="plate-field"
            clearable
          />
        </div>
        <p class="label">是否需要我们向您推送违章消息？</p>
        <van-radio-group v-model="need_push" direction="horizontal">
          <van-radio name="1" checked-color="#FE422D" style="margin-right: 50px">是</van-radio>
          <van-radio name="-1" checked-color="#FE422D">否</van-radio>
        </van-radio-group>
        <div style="margin: 4rem;">
          <van-button round block type="info" native-type="submit" style="background: linear-gradient(to right, #FF7952 0%, #FE3525 100%); border: none">
            查询
          </van-button>
        </div>
      </van-form>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onPickerConfirm"
      />
    </van-popup>
    <van-popup v-model="showHistoryPicker" position="bottom" style="background: rgba(0, 0, 0, 0); overflow: visible;">
      <history-picker @select="historyPickerSelect" @close="showHistoryPicker = false"/>
    </van-popup>
    <qr-overlay></qr-overlay>
    <back-home />
  </div>
</template>
<script>
import { uploadDriverLicense, getVinHistory } from '@/apis/api'
import initLoginCheckInfo from '@/common/js/login.js'
// import imgProcessor from '@/common/js/ImageProcessor.js'
import QrOverlay from '@/components/QrOverlay'
import BackHome from '@/components/BackHome'
import HistoryPicker from './component/HistoryPicker'
export default {
  components: {
    QrOverlay, BackHome, HistoryPicker
  },
  data () {
    return {
      vin: '',
      engine_no: '',
      plate_show: '',
      plate_first: '粤',
      ocr_id: '',
      need_push: '1',
      columns: ['粤', '京', '沪', '津', '渝', '鲁', '冀', '晋', '蒙', '辽', '吉', '黑', '苏', '浙', '皖', '闽', '赣', '豫', '湘', '鄂', '桂', '琼', '川', '贵', '云', '藏', '陕', '甘', '青', '宁', '新', '港', '澳', '台'],
      showPicker: false,
      showHistoryPicker: false,
      history: []
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
        let title = '汽车平台-违章查询'
        let des = '一键识别，有违章，早知道，免费查询，官方同步。'

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

            this.getStoreInfo()
            this.getHistory()
          })
        } else {
        // 分享设置
          let shareLink = 'http://77car-api.shanshuijv.com/home/' + this.$route.name + '?invite=' + this.$store.getters.userInfo['invite_code']
          this.initWxShare(window.shareUrl, title, des, shareLink)

          this.getStoreInfo()
          this.getHistory()
        }
      } else {
        this.getStoreInfo()
        this.getHistory()
      }
    },
    getStoreInfo () {
      if (this.$store.getters.violationInfo) {
        let item = this.$store.getters.violationInfo
        this.vin = item.vin
        this.engine_no = item.engine_no
        this.plate_first = item.plate_first
        this.plate_show = item.plate_show
        this.ocr_id = item.ocr_id
        this.need_push = item.need_push || '1'
      }
    },
    getHistory () {
      getVinHistory({}).then(res => {
        console.log(res)
      })
    },
    onSubmit (values) {
      this.createAction()
    },
    onPickerConfirm (value) {
      this.plate_first = value
      this.showPicker = false
    },
    afterRead (file) {
      console.log(file)
      this.uploadDriverImage(file.file)
      // imgProcessor.uploadOrigin(file, 'license_img').then(formData => {
      //   this.uploadDriverImage(formData)
      // })
    },
    uploadDriverImage (file) {
      var formdata = new FormData()
      formdata.append('license_img', file)
      uploadDriverLicense(formdata).then(res => {
        if (res.code === 0) {
          this.vin = res.data.vin
          this.engine_no = res.data.engine_no
          this.plate_first = res.data.plate_no.slice(0, 1)
          this.plate_show = res.data.plate_no.slice(1)
          this.ocr_id = res.data.ocr_id
        }
      })
    },
    createAction () {
      this.$store.dispatch('setViolationInfo', {
        violationInfo: JSON.stringify({
          vin: this.vin,
          engine_no: this.engine_no,
          plate_first: this.plate_first,
          plate_show: this.plate_show,
          ocr_id: this.ocr_id,
          need_push: this.need_push
        })
      })
      this.$router.push({
        path: '/violationdetail',
        query: {
          vin: this.vin,
          engine_no: this.engine_no,
          license_no: this.plate_first + this.plate_show,
          ocr_id: this.ocr_id,
          need_push: this.need_push
        }
      })
    },
    historyPickerSelect (item) {
      console.log(item)
      this.showHistoryPicker = false
      this.vin = item.vin
      this.engine_no = item.engine_no
      this.ocr_id = item.id
      this.plate_first = item.plate_no.slice(0, 1)
      this.plate_show = item.plate_no.slice(1)
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.violation /deep/
  height 100%
  padding 2rem 1.5rem 0
  box-sizing border-box

  .top-block
    text-align center
    font-size 1.67rem
    color #030303

    .p2
      font-size 1.17rem

  .content-block
    margin-top 4rem

    .button-panel
      display flex
      justify-content center
      align-items center

      .arrow-button
        height 20px
        margin-right 5px

    .label
      font-size 1.17rem
      color #000000
      margin 1rem 0

    .van-cell
      padding 0

      // .van-field__error-message
      //   display none

    .van-cell:not(:last-child)::after
      display none

    .border-bottom
      padding-bottom .5rem
      border-bottom 1px solid #ebedf0

    .plate-block
      display flex
      align-items center

      .plate-select
        display inline-flex
        align-items center

        span
          color #ff2323

        img
          width 1.2rem
          margin 0 .5rem

      .plate-field
        display inline
        flex-grow 1
</style>
