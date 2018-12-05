
/**
 * 练习表格中行扩展相关属性
 */
import React, { Component } from 'react';
import { Table } from 'antd';
import style from './index.less';
import { Button } from 'antd/lib/radio';
const columns = [
	{ title: 'Name', dataIndex: 'name', key: 'name' },
	{ title: 'Age', dataIndex: 'age', key: 'age' },
	{ title: 'Address', dataIndex: 'address', key: 'address' },
	{ title: 'Action', dataIndex: '', key: 'x', render: () => <a href="#">Delete</a> },
];

const data = [
	{ key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
	{ key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
	{ key: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
];
export default class Grid extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expandedRowKeys: [1, 2, 3],
			columns: columns,
		}
	}
	expandedRowRender = (record) => {
		if (!record.description) {
			return null
		} else {
			return (
				<p style={{ margin: 0 }}>{record.description}</p>
			)
		}
	}

	onExpand = (expanded, record) => {
		if (!expanded) {
			let newArry = this.state.expandedRowKeys.filter(item => { return item !== record.key })
			this.setState({
				expandedRowKeys: newArry
			})
		} else {
			this.state.expandedRowKeys.push(record.key)
			this.setState({
				expandedRowKeys: this.state.expandedRowKeys
			})
		}
	}
	hiddenFirstCollumns = () => {
		const { columns } = this.state;
		columns[0].className = 'hidden';
		this.setState({
			columns: columns
		})
	}

	showFirstCollumns = () => {
		const { columns } = this.state;
		columns[0].className = '';
		this.setState({
			columns: columns
		})
	}

	render() {
		return (
			<div>
				<p>
					<Button onClick={this.hiddenFirstCollumns}>隐藏第一列</Button>
					<Button onClick={this.showFirstCollumns}>显示第一列</Button>
				</p>
				<p>通过给collumns添加className来隐藏列，样式内容为 display:none; 显示时调为:className=''</p>
				<Table
					columns={this.state.columns}
					expandedRowRender={record => this.expandedRowRender(record)}
					dataSource={data}
					// defaultExpandAllRows={true}
					expandedRowKeys={this.state.expandedRowKeys}
					onExpand={(expanded, record) => this.onExpand(expanded, record)}
				// 使控制子行显示与隐藏的按钮不在新追加的列中显示，而是在第一个td中显示
				// expandIconAsCell={false}
				// 控制收缩与隐藏子行的icon在哪列显示，值为number，当值为null时，不显示此icon
				// expandIconColumnIndex={2}
				/>
			</div>
		)
	}
}