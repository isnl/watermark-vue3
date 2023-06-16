import { App } from 'vue';
import Watermark from './Watermark/index.vue';
const install = (app: App) => {
	app.component("Watermark", Watermark);
};
export default { install };
