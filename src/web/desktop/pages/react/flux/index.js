/**
 * 用flux实现一个代办事项程序
 * 页面框架及相关组件
 */
import React, { Component } from 'react';
import { Button } from 'antd'
import TodoAction from './actions'
import TodoStore from './stores';
export default class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: TodoStore.getAll()
		}
	}

	componentDidMount() {
		TodoStore.addChangeListener(this.onChange);
	}
	componentWillUnmount() {
		TodoStore.removeChangeListener(this.onChange);
	}
	onChange = () => {
		this.setState({
			todos: TodoStore.getAll()
		});
	}
	createTodo = () => {
		TodoAction.create({ id: 4, content: '4rd stuff' });
	}
	deleteTodo = (id) => {
		// console.log(id)
		TodoAction.delete(id);
	}

	render() {
		const { todos } = this.state
		return (
			<div>
				{`
				单项数据流是flux的核心
				`}
				<h3>这是今天的代办事项</h3>
				<List todos={todos} onDelete={this.deleteTodo} />

				<div style={{ marginTop: '5px' }}>
					<Button onClick={this.createTodo}>创建新的todo</Button>
				</div>
			</div>
		)
	}
}
/**
 * 代办列表组件
 */
class List extends Component {
	constructor(props) {
		super(props)
	}
	onDelete = (id) => {
		this.props.onDelete(id)
	}
	render() {
		let listArr = []
		return (
			<div>
				<ul>
					{this.props.todos.map((item, index) => {
						return <li style={{ padding: '5px 0' }} key={index}> {item.content}
							<Button onClick={() => this.onDelete(item.id)} style={{ marginLeft: '10px' }}>删除</Button>
						</li>
					})}

				</ul>
			</div>
		)
	}
}
