
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
一、在form表单中插入input组件，且给Input组件添加getFieldDecorator等属性，同时也可以在该组件中插入其它不带getFieldDecorator属性的标签
					`}
				</pre>
				<FormBase>
				
					<CheckboxItem name="checkBox" label="复选框" options={[{ "value": "1","label":"选项一" }, { "value": "2","label":"选项二" }]} />
					<p>Form中插入p标签</p>
	
				</FormBase>
			</div>
			
		)
	}
}