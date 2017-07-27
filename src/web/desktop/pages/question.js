import React, {Component} from 'react';
import style from "./index.less"

class item extends Component {
	render() {
		return (
<pre>
<h3>要完成的内容：</h3>
{`
web 站点应用webpack与react学习
react native学习及安装工程相关工具
material-ui的了解
redux研究
webpack深入学习及总结
服务端渲染的应用

`}

<h3>进行中的内容：</h3>
{`
支付宝app调研
react学习
并把此站点左侧导航的二级和三级菜单更换到右侧显示
react组件编写规范，antd中form表单的应用及组件的封装及练习


`}
<h3>已完成的内容</h3>
{`
项目tag标签的了解及合代码时和master中tag不一致时的操作；
了解后台系统前后端菜单的配置代码；
阅读moment插件文档及及从控制台运行文档中的moment方法；
bundle-loader的使用

`}


</pre>
		);
	}
}

export default item;