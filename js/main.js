const helloComponent = {
  template: '<p>hello!</p>'
}

const app = Vue.createApp({
  data: () => ({

  }),
  components: {
    'hello-component': helloComponent
  }
})


app.mount('#app')
