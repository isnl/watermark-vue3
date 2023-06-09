import Watermark from './src/Watermark.vue';

Watermark.install = (App) => {
	App.component(Watermark.__name, Watermark);
};

export default Watermark;
