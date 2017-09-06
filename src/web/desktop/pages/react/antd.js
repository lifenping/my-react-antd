
import React, { Component } from 'react';
import { Form, Checkbox } from 'antd';

const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group

// 定义一个 Form 组件
class FormBase extends Component {
	render() {
		return (
			<Form>
				{React.Children.map(this.props.children, child => {
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

// 创建CheckboxItem组件
class CheckboxItem extends Component {
	render() {
		console.log(this.props)
		const { label, name, initialValue, layout, rules, getFieldDecorator, options, ...othersProps } = this.props;
		return (
			<FormItem label={label} {...layout}>
				{getFieldDecorator(name, {
					initialValue: initialValue,
					rules: rules
				})(
					<CheckboxGroup options={options} {...othersProps} />
					)}
			</FormItem>
		)
	}
}

// 页面组件
export default class Item extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<pre>
					{`
一、antd中的form表单及表单元素的应用, Form.create({})()及getFieldDecorator的应用
					`}
				</pre>
				<FormBase>
				
					<CheckboxItem name="checkBox" label="复选框" options={[{ "value": "1","label":"选项一" }, { "value": "2","label":"选项二" }]} />
					<p>Form组件中插入不带有getFieldDecorator属性的child元素</p>
	
				</FormBase>
			</div>
			
		)
	}
}