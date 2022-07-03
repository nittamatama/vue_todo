const app = Vue.createApp({
  data: () => ({
    message: 'hellovue'
  }),
  watch: {
    message: function (newValue, oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue)
    }
  }
})
app.mount('#app')