import React, { Component } from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item

// 创建一表单且含有一文本框控件
class FormInput extends Component {
	render() {
		return (
			<Form>
				<FormItem>
					{this.props.form.getFieldDecorator('inputName', {
						initialValue: 'Form模块测试',
						rules: []
					})(
						<Input />
						)}
				</FormItem>
			</Form>
		)
	}
}
FormInput = Form.create({})(FormInput);

export default FormInput;
