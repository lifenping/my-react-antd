const path = require('path');

module.exports = {
	port: 8005,
	source: {
		src: 'src'
	},
	output: './site/output',
	theme: './site/theme/',
	themeConfig: {
		rootLink: '/index',
		siteTitle: 'Fego-RN 组件库',
		copyright: 'Fego',
		navigation: [{
			link: '/src/common',
			title: 'common目录下的md目录'
		}, {
			link: '/src/pages',
			title: 'pages目录下的md目录'
		}]
	},
	htmlTemplate: path.join(__dirname, './theme/static/template.html'),
	devServerConfig: {},
	webpackConfig(config) {
		return config;
	},
	entryName: 'index',
	root: '/',
};