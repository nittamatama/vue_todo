const app = Vue.createApp({
  data: () => ({
    message: 'hellovue'
  }),
  methods: {
    clickHandler: function (event) {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
app.mount('#app')