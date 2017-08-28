
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

export default class Item extends Component {
	render() {
		return (
			<div>
				<h3>props children属性的应用</h3>
				<sonComponent>
					<p>使用纯函数定义一个组件</p>
				</sonComponent>

				<Comm2>
					<p>使用es6类的继承定义一个组件</p>
				</Comm2>

			</div>
		)
	}
}