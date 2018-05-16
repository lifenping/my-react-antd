
import React, { Component } from 'react';
import { Form, Input } from 'antd';
import style from '../index.less'

const FormItem = Form.Item
// 使用纯函数定义一个组件
const sonComponent = (props) => {
	console.log(this)
	return (
		<div>
			{props.children}
		</div>
	);
}
// 使用es6类的继承定义一个组件
class Comm2 extends Component {
	cache = {}
	constructor(props) {
		super(props)
	}
	render() {
		console.log(this)
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}
// es5原生方式，React.createClass方式
var NotesList = React.createClass({
	render: function () {
		return (
			<ol>
				{
					this.props.children.map(function (child, index) {
						return <li key={index}>{child}</li>
					})
				}
			</ol>
		);
	}
});

/**
 * Context 应用
 */
const ContextCom = (props) => {
	return(
		<div></div>
	)
}

export default class Item extends Component {
	render() {
		return (
			<pre>
				<h3>this.props.children属性的应用</h3>
				<p>this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性,它表示组件的所有子节点</p>
				<sonComponent>
					<h3>使用纯函数定义一个组件</h3>
					<p>节点内容</p>
				</sonComponent>

				<Comm2>
					<h3>使用es6类的继承定义一个组件</h3>
					<p>节点内容</p>
				</Comm2>

				<NotesList>
					<h3>使用es5原生方式：React.createClass方式来创建</h3>
					<span>想应用this.props.children必须有两个children，否则会报错</span>
				</NotesList>

				<ContextCom />

				<h3>
				{`
				组件包含展示组件与容器组件，容器组件是基于react-redux的项目中通过connect的结果函数处理得到的组件，而展示组件是被参数传入或组成其他展示组件的那些组件。
				如何组织项目中connect行为这个问题，等价于如何组织项目中展示组件与容器组件。

				对于逐层传递属性的行为，如果一个中间组件，仅仅是用来向下传递给它的子节点，自己则不消费，当它的子节点发生变化时，都要相应地修改它的props以适应变化。那么这此数据
				则不应该由它传递给它的子节点。此时我们应该插入一个容器组件，来获取传递给子节点的数据。
				
				通过容器组件连接store与展示组件。
				`}
				</h3>

				
				
			</pre>
		)
	}
}

