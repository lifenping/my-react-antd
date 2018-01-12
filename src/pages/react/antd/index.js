
/**
 * antd库的练习
 */
import React, { Component } from 'react';
import { Form, Checkbox, Input, Upload, Icon, Button, message } from 'antd';
import UploadItemBtn from './UploadItemBtn'
import UploadItemInput from './UploadItemInput'

import FormBase from './FormBase'
import CheckBoxItem from './CheckBoxItem'
import FormInput from './FormInput'
import TableExpand from './TableExpand'
import TabelChildren from './TabelChildren';

import style from './index.less'

const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group

// 页面组件
export default class Item extends Component {
	constructor(props) {
		super(props)
		this.state = {
			previewVisible: false,
			previewImage: '',

			imageUrl: '',
			fileList: [{
				uid: -1,
				name: 'xxx.png',
				status: 'done',
				url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}]
		}
	}

	beforeUpload(file) {
		const isPNG = file.type === 'image/png';
		if (!isPNG) {
			message.error('You can only upload JPG file!');
		}
		message.info('图片大小为：' + file.size + '字节')
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!');
		}
		return isPNG && isLt2M;
	}

	handleChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
			this.getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	}

	getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	onClickUpload = (e) => {
		console.log(e)
	}

	render() {
		return (
			<div className={style.page}>
				<h3>表格组件中行的扩展应用总结</h3>
				<div>
					在分页表格中实现默认展开所有追加的行内容，可应用defaultExpandAllRows属性，默认展开所有子行内容。<br />
					常见问题：<br />
					如果数据源中的dataSource是异步加载的，则defaultExpandAllRows会失效，即它的值会一直是[]。<br />
					原因是：defaultExpandAllRows只会渲染一次,解决办法：<br />
					1. 当dataSource有值时再渲染Tabel表格，延时渲染时机<br />
					2. 用expandedRowKeys属性来实现，并结合onExpand来控制子行的显示与隐藏
				</div>
				<h3>应用实例：</h3>
				<p className={style.bgGray}>1. 可用 表格组件中 expandedRowRender / (defaultExpandAllRows / defaultExpandedRowKeys / expandedRowKeys)onExpand/onExpandedRowsChange 这几个属性来实现，<br />
					优点：功能属性较多。<br />
					缺点：无子行的数据也会显示收缩与隐藏按钮。不能实现无子行内容时隐藏父行中的收缩或隐藏按钮。
				</p>
				<TableExpand />
				<p  className={style.bgGray}>
					2. 在dataSource的每条数据中追加children属性，并且可用defaultExpandAllRows / defaultExpandedRowKeys / expandedRowKeys来控制children的内容默认展开。<br />
					优点：有childen的行前会默认显示 收缩与隐藏 按钮，无childen的行此按钮不会显示。<br />
					缺点：只适用于子行内容和父行内容的列内容是一样的场景。
				</p>
				<TabelChildren />

				<h3>Form及控件应用练习</h3>
				<ul>
					<li>1. 不在表单中应用表单控件</li>
					<Input value='value' readOnly />
					<Input defaultValue='defaultValue' />
					<Input placeholder='placeholder' />

					<li style={{ paddingTop: '20px' }}>2. 表单中应用控件，表单和控件都写成一个组件</li>
					<FormBase>
						<CheckBoxItem layout={{ labelCol: { span: 1 }, wrapperCol: { span: 23 } }} name="checkBox" label="复选框" options={[{ "value": "1", "label": "选项一" }, { "value": "2", "label": "选项二" }]} />
					</FormBase>

					<li>3. 表单中插入一个文本框组件（整个内容当成一个组件）</li>
					<FormInput />

				</ul>

				<h3>练习上传组件（antd upload）的应用：</h3>
				<ul>
					<li>1m = 1024*1024字节， 231个字节大小为：231/1024/1024</li>
					<li>1. listStyle='text'</li>

					<Upload
						className="avatar-uploader"
						name="avatar"
						// showUploadList={false}
						action="http://localhost:1112/posts"
						beforeUpload={this.beforeUpload.bind(this)}
					>
						<Button style={{ marginBottom: '10px' }}>
							<Icon type="upload" /> Click to Upload
						</Button>
					</Upload>

					<li>2. listType='picture-card'</li>
					<Upload
						name="avatar"
						action="http://localhost:1112/posts2"
						beforeUpload={this.beforeUpload.bind(this)}
						onChange={({ fileList }) => this.setState({ fileList })}
						// 默认值为true
						// showUploadList={true}
						onPreview={this.handlePreview}
						listType="picture-card"
						// 所显示的已上传文件列表，若有值，则在onChange时更新此fileList，否则fileList不变
						fileList={this.state.fileList}
					>
						{
							this.state.imageUrl ? <img src={this.state.imageUrl} alt="" /> :
								<div><Icon type="plus" />
									<div className="ant-upload-text">Upload</div></div>
						}
					</Upload>

					<li>3. form表单中含有一上传按钮</li>
					<UploadItemBtn />

					<li>4. form表单中含有一文本控件，且点击控件进行上传并把上传后的名子显示在文本框中，提交表单时把上传接口的返回值当作请求参数提交</li>
					<FormBase>
						<UploadItemInput
							name="rs"
							label="上传"
							action="http://127.0.0.1:1111/api/antd/upload"
							layout={{
								labelCol: {
									span: 1
								},
								wrapperCol: {
									span: 5
								}
							}}
						/>
						<p>
							<Button htmlType='submit' type='primary'>提交 - Upload未被getFieldDecorator修饰，且Upload组件中有隐藏文本域且被getFieldDecorator修饰，值为上传接口返回的数据</Button>
						</p>
					</FormBase>

					<li>5. antd上传组件有action，且上传完毕后接口返回图片的url地址，前端显示缩略图，表单提交请求图片的url地址</li>
					<li>6. antd上传组件无action，且上传完毕后接口只返回200，无其它值，前端显示缩略图，可通过canvas画图来实现预览本地路径下的图片，且表单提交时给后端传递上传文件的参数</li>

					<li>5. FormData实现异步上传，上传控件用原生的 {`<input type='file' />`}</li>
					<form id="uploadForm" enctype="multipart/form-data">
						<input id="file" type="file" name="file" />
						<button id="upload" type="submit">upload</button>
					</form>

					<pre>
						{`
						可用FormData来实现文件的异步上传:FormData类型其实是在XMLHttpRequest 2级定义的，它是为序列化表以及创建与表单格式相同的数据（当然是用于XHR传输）提供便利。
						使用FormData的最大优点就是我们可以异步上传一个二进制文件。
						var xhr = new XMLHttpRequest();
						xhr.open("post","login");
						xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
						xhr.send(formData);
						`}
					</pre>
					<p>
						<a href="https://www.jianshu.com/p/46e6e03a0d53">https://www.jianshu.com/p/46e6e03a0d53</a><br />
						<a href="https://segmentfault.com/a/1190000006716454">https://segmentfault.com/a/1190000006716454</a>
					</p>
					<pre>
						{`
						通过jQuery Ajax使用FormData对象上传文件
						1. 使用<form>表单初始化FormData对象方式上传文件
						<form id="uploadForm" enctype="multipart/form-data">
							<input id="file" type="file" name="file"/>
							<button id="upload" type="button">upload</button>
						</form>
						$.ajax({
							url: '/upload',
							type: 'POST',
							cache: false,
							data: new FormData($('#uploadForm')[0]),
							processData: false,
							contentType: false
						}).done(function(res) {
						}).fail(function(res) {});

						2. 使用FormData对象添加字段方式上传文件
						<div id="uploadForm">
							<input id="file" type="file"/>
							<button id="upload" type="button">upload</button>
						</div>
						这里没有<form>标签，也没有enctype="multipart/form-data"属性。
						var formData = new FormData();
						formData.append('file', $('#file')[0].files[0]);
						$.ajax({
							url: '/upload',
							type: 'POST',
							cache: false,
							data: formData,
							processData: false,
							contentType: false
						}).done(function(res) {
						}).fail(function(res) {});
						`}
					</pre>
				</ul>
			</div>

		)
	}
}






