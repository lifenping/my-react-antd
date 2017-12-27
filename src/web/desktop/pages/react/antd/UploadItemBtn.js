
/**
 * 创建一表单且含有一上传控件
 * 启动mock服务，action地址：hhttp://127.0.0.1:1112/upload
 * 1.上传控件为一上传按钮
 * 
 * 注：
 * 1 此文件没有对接口返回200及非200的情况做处理，若要处理请查看文件：UploadItemInput.js
 * 2 此文件对上传接口的合法性及异常进行过测试，具体查看注释
 */
import React, { Component } from 'react';
import { Form, Upload, Icon, Button, message } from 'antd';
const FormItem = Form.Item

class FormUpload extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fileList: [],
			uploading:false
		}
	}
	onChange = (info) => {
		// console.log(info)
		if (info.file.status !== 'uploading') {
			// message.success(`${info.file.name} file uploading`);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
		// fileList为受控组件，故放到这里
		this.setState({
			fileList: info.fileList
		})
	}
	onSubmit=()=>{
		this.props.form.validateFields((errors, values) => {
			if (!errors) {
				console.log(values)
				
			}
		})
	}
	render() {
		// console.log(this)
		return (
			<Form onSubmit={this.onSubmit}>
				<FormItem>
					{this.props.form.getFieldDecorator('uploadName', {
						initialValue: 'upload',
						rules: []
					})(
						<Upload
							className="avatar-uploader"
							name="upload"
							// 上传接口正常
							// action="http://127.0.0.1:1111/api/antd/upload"
							// 上传接口正常
							action="http://127.0.0.1:1111/api/antd/uploadError"
							// 上传失败且会调两次action:可能是因为跨域才会调两次????????
							// action='http://jsonplaceholder.typicode.com/posts/'
							// 上传失败
							// action="http://baidu.com"
							// 注:fileList 受控
							fileList={this.state.fileList}
							onChange={this.onChange}
						>
							<Button style={{ marginBottom: '10px' }}>
								<Icon type="upload" /> Click to Upload
							</Button>
						</Upload>
						)}
				</FormItem>
				<Button htmlType='submit' type='primary'>提交 - Upload被getFieldDecorator修饰</Button>
			</Form>
		)
	}
}
export default FormUpload = Form.create({})(FormUpload);