import Watermark from './Watermark';

//按需引入
export { Watermark };

const components = [Watermark];

const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

export default { install };
