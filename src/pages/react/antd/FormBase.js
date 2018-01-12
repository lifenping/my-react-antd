import React, { Component } from 'react';
import { Form } from 'antd';

const FormItem = Form.Item

// 定义一个 Form 组件
class FormBase extends Component {
	onSubmit = () => {
		console.log(this)
		this.props.form.validateFields((errors, values) => {
			if (!errors) {
				console.log(values)
			}
		})
	}
	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				{React.Children.map(this.props.children, child => {
					// console.log(child.type)
					if (child.type === "p" || child.type === "pre") {
						return child
					} else {
						return React.cloneElement(child, {
							key: child.props.name,
							layout: child.props.layout || {},
							getFieldDecorator: this.props.form.getFieldDecorator
						})
					}
				})}
			</Form>
		);
	}
}
FormBase = Form.create({})(FormBase);
export default FormBase