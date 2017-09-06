
import React, { Component } from 'react';
import { Form, Input } from 'antd';

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
					this.props.children.map(function (child,index) {
						return <li key={index}>{child}</li>
					})
				}
			</ol>
		);
	}
});


export default class Item extends Component {
	render() {
		return (
			<div>
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


			</div>
		)
	}
}