/**
 * 上传组件：上传完成后获取后端上传接口的返回值，并把返回值赋给一个隐藏的文本域，用于提交表单接口的请求参数
 * 
 * 1 antd中的 upload 中的 fileList列表只有在上传接口找不到时上传的fileList才会显示红色，表示上传失败，
 * 当上传接口ok，但接口返回非200时，filseList中的名称展示不会是红色，故我们把这个fileList功能去掉了，即上传完不显示上传的fileList列表，
 * 即添加属性 showUploadList={false}来隐藏，但隐藏时会把antd中上传的进度条也隐藏掉，因为他们是一起的。
 * 
 * 2 上传成功（即接口地址ok且接口返回200时），把上传文件的名称值赋给input框。
 * 3 上传成功后，把接口的返回值赋给一个隐藏的文本框，提来表单时作为表单的请求参数传给后端。
 * 4 另外：此上传按钮可连续上传多个文件，但文本框中始终显示最后一次上传的文件名称。
 * 
 */
import React, { Component } from 'react'
import { Form, Input, Icon, Progress, Upload, message } from 'antd'
import style from './index.less'

const FormItem = Form.Item

export default class UploadItem extends Component {
	static defaultProps = {
		_NSIPDisplayName: 'UploadItem'
	}
	static propTypes = {
		name: React.PropTypes.string.isRequired,
		label: React.PropTypes.string.isRequired
	}

	constructor(props) {
		super(props)
		this.state = {
			uploading: false
		}
	}

	render() {
		let { label, name, initialValue, layout, rules, getFieldDecorator, action, params, dataKey, form, _NSIPDisplayName, ...othersProps } = this.props
		let {filename } = this.state
		// console.log(this)

		return (
			<FormItem label={label} {...layout} hasFeedback={rules ? true : false} >
				{/* 上传组件,默认文件名称为 file */}
				<Upload className={style.uploader} beforeUpload={this.beforeUpload}
					action={action}
					showUploadList={false}
					data={params || {}}
					onChange={this.onChange}
				>
					<Input disabled defaultValue='请上传文件' value={this.state.filename} suffix={<Icon type="upload" />} />
				</Upload>
				{/* 隐藏文本域，用来获取上传接口成功时的返回值 */}
				{getFieldDecorator(name, {
					initialValue: initialValue,
					rules: rules
				})(
					<Input {...othersProps} disabled={true} style={{ 'display': 'none' }} />
					)}
			</FormItem>
		)
	}
	// 上传文件状态改变时
	onChange = (info) => {
		// 上传中、完成、失败都会调用这个函数
		// event 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持
		if (info.file.status !== 'uploading') {
			// message.success(`${info.file.name} file uploading`);
		}
		if (info.file.status === 'done') {
			if (info.file.response.retcode != 200) {
				message.error(info.file.response.retdesc || '后台上传失败描述');
			} else {
				this.setState({
					filename: info.file.name
				}, () => {
					message.success('上传成功');
					this.props.form.setFieldsValue({
						[name]: info.file.response.data['rs']
					})
				})
			}
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} 文件上传失败.`);
		}
	}

	// 上传之前校验文件格式
	beforeUpload = (file) => {
		let arryName = file.name.split('.')
		if (['xls', 'xlsx'].indexOf(arryName.slice(-1)[0]) === -1) {
			message.error('仅支持上传excel格式的文件');
			return false
		}

	}
}