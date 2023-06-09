import { createApp } from 'vue';
import App from './App.vue';
// import Vuleaflet from 'vuleaflet'
// import "vuleaflet/lib/style.css"

// createApp(App).use(Vuleaflet).mount('#app')
import Watermark from '../packages/index';
const app = createApp(App);
app.use(Watermark);
app.mount('#app');
