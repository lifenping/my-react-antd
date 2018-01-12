const path = require('path');

const home = './template/Home';
const componentIndex = './template/ComponentIndex';
const component = './template/Component'

module.exports = {
	lazyLoad: true,
	pick: {
		common(markdownData) {
			let { filename, title, subTitle } = markdownData.meta;
			if (!/^src\/common\//.test(filename)) return;
			return {
				filename,
				title,
				subTitle
			};
		},
		pages(markdownData) {
			let { filename, title, subTitle } = markdownData.meta;
			if (!/^src\/pages\//.test(filename)) return;
			return {
				filename: filename,
				title,
				subTitle
			};
		},
	},
	plugins: [
		'bisheng-plugin-description',
		'bisheng-plugin-toc',
		'bisheng-plugin-react'
	],
	routes: [{
		path: '/',
		component: './template/layout',
		childRoutes: [{
			path: '/index',
			dataPath: '/src',
			component: home,
		}, {
			path: '/src/common',
			component: componentIndex
		}, {
			path: '/src/common/:children',
			component: component
		}, {
			path: '/src/pages',
			component: componentIndex
		}, {
			path: '/src/pages/:children',
			component: component
		}] 
	}]
};
