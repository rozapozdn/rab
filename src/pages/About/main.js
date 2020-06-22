import Vue from 'vue'
import App from './App.vue'
import vueHeadful from 'vue-headful'
import VueRosource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRosource)
Vue.component('vue-headful', vueHeadful)

new Vue({
  render: h => h(App)
}).$mount('#app')
