<template>
    <div>
      测试页面
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
        password: 1234567
        // password: 123456
      })
      console.log(res)
    }
  }
}
</script>

<style scoped>

</style>
