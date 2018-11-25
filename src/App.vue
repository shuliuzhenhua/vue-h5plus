<template>
  <div id="app">
    <button @click="toTest">去测试页面</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  created () {
    this.listener()
  },
  methods: {
    toTest () {
      this.$view.open('test')
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
