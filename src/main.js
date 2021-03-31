import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import AppDate from '@/components/AppDate'

const app = createApp(App)
app.use(router)
/*
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue/js)$/)
requireComponent.keys().forEach(fileName => {
  let baseComponentConfig = requireComponent(filename)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    filename
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )

  app.component(baseComponentName, baseComponentConfig)
});
*/
app.component('AppDate', AppDate)

app.mount('#app')
