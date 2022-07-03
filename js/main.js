const app = Vue.createApp({
  data: () => ({
    message: 'hellovue',
  }),
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessagemethod: function () {
      return this.message.split('').reverse().join('')
    }
  }
})
app.mount('#app')