
import React, { Component } from 'react';
import { Form, Checkbox} from 'antd';

const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group

// 创建CheckboxItem组件
export default class CheckBoxItem extends Component {
	render() {
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