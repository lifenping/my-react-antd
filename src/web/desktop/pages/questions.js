import React, { Component } from 'react'
import style from './index.less'

class item extends Component {
	constructor (props) {
		super(props)
	}
	render() {
		return (
			<pre>
				{/* <h3>要完成的内容：</h3>
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
bundle-loader的使用
koa
抽空把路由的history调为：browserHistory，并添加服务器配置：
router中的history="browserHistory"时，<img src= />加载不到，并且页面路由只有第一次加载时显示ok,再次刷新或来回跳转就会不显示了，此时服务器要也要添加配置（？？）
https://ant-tool.github.io/quick-start.html  项目的练习
确认模块热加载是否开启：开启方式可在.bebelrc文件中添加配置代码或应用  --hot?待确认
state的设计原择？
确认module css和公共css的一块引入的方式
学习react-redux及应用 



				`}
				<h3>已完成的内容</h3>
				{`
项目tag标签的了解及合代码时和master中tag不一致时的操作；
了解后台系统前后端菜单的配置代码；
阅读moment插件文档及及从控制台运行文档中的moment方法； 
wepack中 eslint 的使用及CleanWebpackPlugin插件的应用；
了解react-router中的history的api；

学习定义组件
// 定义一个InputTextAreaItem组件：
/* class InputTextAreaItem extends Component{
	render(){
		const {name,getFieldDecorator, label, rules,initialValue,...othersProps} = this.props
		return(
			<FormItem label={label} {...layout} hasFeedback={hasFeedback === undefined ? !!rules : hasFeedback} >
				{getFieldDecorator(name, {
					initialValue: initialValue,
					rules: rules
				})(
					<InputTextArea {...othersProps} />
					)}
			</FormItem>
		)
	}
} */



				`} */}


			</pre>
		);
	}
}

export default item
