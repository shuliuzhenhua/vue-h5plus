<template>
    <div>
      <van-nav-bar title="表单"  :left-arrow="true" @click-left="$view.close()" />
      <van-cell-group>
        <van-field
          v-model="mobile"
          required
          clearable
          label="手机号"
          placeholder="请填写手机号"
          :error-message="mobileError"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          :error-message="passwordError"
        />

        <van-button
          size="large"
          type="primary"
          @click="submit"
        >
          提交订单
        </van-button>
      </van-cell-group>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Field, CellGroup, Cell, Button } from 'vant'
import validate from '../../validate/login'
Vue.use(NavBar).use(Field).use(CellGroup).use(Cell).use(Button)

export default {
  data () {
    return {
      mobile: '',
      password: '',
      passwordError: '',
      mobileError: ''
    }
  },
  methods: {
    submit () {
      validate(this.$data).then(() => {
        alert('验证成功')
      })
    }
  }
}
</script>

<style scoped>

</style>
