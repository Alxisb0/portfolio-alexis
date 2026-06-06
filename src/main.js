import { createApp } from 'vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

import Accueil from './pages/Accueil.vue'
import Technique from './pages/Technique.vue'
import SuiviProjet from './pages/SuiviProjet.vue'
import Integration from './pages/Integration.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Accueil },
    { path: '/technique', component: Technique },
    { path: '/suivi-projet', component: SuiviProjet },
    { path: '/integration', component: Integration },
  ],
})

const app = createApp(App)

app.use(createVuestic({
  config: {
    colors: {
      variables: {
        primary: '#6366f1',
        secondary: '#ec4899',
        success: '#10b981',
        backgroundPrimary: '#111827',
        backgroundSecondary: '#1f2937',
        backgroundElement: '#374151',
        textPrimary: '#e2e8f0',
        textInverted: '#111827',
      },
    },
  },
}))

app.use(router)
app.mount('#app')
