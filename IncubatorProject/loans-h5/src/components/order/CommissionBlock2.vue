<template>
  <div class='CommissionBlock'>
    <div class="title">
      <span>佣金分配</span>
    </div>
    <div class="com-item" v-if="showField(4)">
      <span class="label">总代理</span>
      <span class="value">{{ac_general_agent}}%</span>
      <span class="value">{{money_general_agent}}</span>
    </div>
    <div class="com-item" v-if="showField(3)">
      <span class="label">一级会员</span>
      <span class="value">{{ac_first_agent}}%</span>
      <span class="value">{{money_first_agent}}</span>
    </div>
    <div class="com-item" v-if="showField(2)">
      <span class="label">高级会员</span>
      <span class="value">{{ac_senior_member}}%</span>
      <span class="value">{{money_senior_member}}</span>
    </div>
    <div class="com-item" v-if="showField(1)">
      <span class="label">会员</span>
      <span class="value">{{ac_member}}%</span>
      <span class="value">{{money_member}}</span>
    </div>
    <div class="com-item">
      <span class="label">粉丝</span>
      <span class="value">{{ac_fans}}%</span>
      <span class="value">{{money_fans}}</span>
    </div>
    <div class="com-item">
      <span class="label"></span>
      <span class="value2">比例</span>
      <span class="value2">金额</span>
    </div>
  </div>
</template>
<script>
import { getCommissionAssign } from '@/apis/api.js'
export default {
  props: {
    orderId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ac_general_agent: 0,
      ac_first_agent: 0,
      ac_senior_member: 0,
      ac_member: 0,
      ac_fans: 0,
      money_general_agent: 0,
      money_first_agent: 0,
      money_senior_member: 0,
      money_member: 0,
      money_fans: 0
    }
  },
  created () {
    this.getCommission()
  },
  methods: {
    getCommission () {
      let req = {
        order_id: this.orderId
      }
      getCommissionAssign(req).then(res => {
        if (res.code === 0) {
          if (res.data.commissions.length > 0) {
            let commissions = res.data.commissions
            let general = commissions.filter(ele => ele.grade === 4)
            if (general.length > 0) {
              this.ac_general_agent = Number(general.rate).toFixed(1)
              this.money_general_agent = general.length > 1 ? general.reduce((a, b) => {
                return Number(a.commission) + Number(b.commission)
              }) : Number(general[0].commission)
            }
            let first = commissions.filter(ele => ele.grade === 3)
            if (first.length > 0) {
              this.ac_first_agent = Number(first.rate).toFixed(1)
              this.money_first_agent = first.length > 1 ? first.reduce((a, b) => {
                return Number(a.commission) + Number(b.commission)
              }) : Number(first[0].commission)
            }
            let senior = commissions.filter(ele => ele.grade === 2)
            if (senior.length > 0) {
              this.ac_senior_member = Number(senior[0].rate).toFixed(1)
              this.money_senior_member = senior.length > 1 ? senior.reduce((a, b) => {
                return Number(a.commission) + Number(b.commission)
              }) : Number(senior[0].commission)
            }
            let member = commissions.filter(ele => ele.grade === 1)
            if (member.length > 0) {
              this.ac_member = Number(member[0].rate).toFixed(1)
              this.money_member = member.length > 1 ? member.reduce((a, b) => {
                return Number(a.commission) + Number(b.commission)
              }) : Number(member[0].commission)
            }
            let fans = commissions.filter(ele => ele.grade === 0)
            if (fans.length > 0) {
              this.ac_fans = Number(fans[0].rate).toFixed(1)
              this.money_fans = fans.length > 1 ? fans.reduce((a, b) => {
                return Number(a.commission) + Number(b.commission)
              }) : Number(fans[0].commission)
            }
          }
        }
      })
    },
    showField (val) {
      var grade = this.$store.getters.userInfo.grade
      // var grade = 2
      return grade >= val
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.CommissionBlock
  padding-bottom 16px

  .title
    display flex
    justify-content space-between
    align-items center
    padding 6px 10px
    background #E8E9EB
    color rgba(0, 0, 0, .5)
    font-size 1rem
    font-weight 600

    .right
      display inline-flex
      align-items center
      color #6DD400

      img
        width 15px

    .right2
      color rgba(0, 0, 0, .85)

  .com-item
    display flex
    align-items center
    margin-top 16px

    span
      display inline-block
      box-sizing border-box
      text-align center

    .label
      color #868686
      font-weight 600
      font-size 15px
      width 23%
      text-align right
      margin-right 18px

    .value
      background rgba(0, 0, 0, .1)
      opacity .6
      margin-right 27px
      padding 10px 0
      width 28%
      color #000
      font-size 14px

    .value2
      margin-right 27px
      width 28%
      color #101010
      font-size 12px
</style>
