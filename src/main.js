import './style.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')

// createChat({
//   webhookUrl: 'https://gen.rps-home-lab.com/webhook/9baf0bfa-c3e6-42c5-8084-b11aa4c65ce4/chat',

//   mode: 'window',

//   showWelcomeScreen: false,

//   initialMessages: [
//     'Hey 👋',
//     'I’m Genesis AI Assistant. Ask me about projects, tech stack, or services.'
//   ],

//   i18n: {
//     en: {
//       title: 'Genesis AI',
//       subtitle: 'Senior Software Developer',
//       footer: '',
//       getStarted: 'Start Chat',
//       inputPlaceholder: 'Ask something...'
//     }
//   }
// })