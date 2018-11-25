<template>
    <div>
      <button @click="toIndex">去首页</button>
      <button @click="back">返回</button>
      <button @click="indexFire">向首页发送 fire 数据</button>
    </div>
</template>

<script>
import { GET_USER_TOKEN } from '../../api'

export default {
  created () {
    this.getUserToken()
  },
  methods: {
    async getUserToken () {
      let res = await this.$http.post(GET_USER_TOKEN, {
        mobile: 15874068303,
        // password: 1234567
        password: 123456
      })
      console.log(res)
    },
    toIndex () {
      let launch = this.$view.launch()
      this.$view.open(launch.id)
    },
    back () {
      this.$view.hide()
      // this.$view.close()
    },
    indexFire () {
      let launch = this.$view.launch()
      this.$view.fire(launch.id, { name: '狗蛋' }, 'testEvent')
    }
  }
}
</script>

<style scoped>

</style>
