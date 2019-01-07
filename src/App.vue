<template>
  <div id="app">
    <van-nav-bar title="首页"/>
    <button @click="toTest">页面传值</button>
    <button @click="$view.open('form')">表单</button>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
Vue.use(NavBar)
export default {
  name: 'app',
  created () {
    this.listener()
  },
  methods: {
    toTest () {
      this.$view.open('test', {}, { name: 'goudan' })
      // this.$view.open('test', {}, {}, false)
    },
    listener () {
      window.addEventListener('testEvent', (res) => {
        const data = res.detail
        console.log(data)
      })
    }
  }
}
</script>

<style>

</style>
