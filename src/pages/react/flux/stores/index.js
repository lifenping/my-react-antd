/**
 * 用flux实现一个代办事项程序
 * 程序中的数据存放
 * 
 * 1 借助node.js中的EventEemitter, npm install events -save
 */

import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/index.js';
const TodoStore = Object.assign({}, EventEmitter.prototype, {
	todos: [
		{ id: 1, content: '事件1' },
		{ id: 2, content: '事件2' },
		{ id: 3, content: '事件3' }
	],
	getAll() {
		return this.todos;
	},
	addTodo(todo) {
		this.todos.push(todo);
	},
	deleteTodo(id) {
		console.log(id)
		this.todos = this.todos.filter(item => item.id !== id);
	},
	emitChange() {
		this.emit('change');
	},
	addChangeListener(callback) {
		this.on('change', callback);
	},
	removeChangeListener(callback) {
		this.removeListener('change', callback);
	}
})

// 利用dispathcer的api方法register,它可以注册不同事件的处理回调，并且在回调中对store进行处理
AppDispatcher.register((action) => {
	switch (action.actionType) {
		case 'CREATE_TODO':
			TodoStore.addTodo(action.todo);
			TodoStore.emitChange();
			break;
		case 'DELETE_TODO':
			TodoStore.deleteTodo(action.id);
			TodoStore.emitChange();
			break;
		default:
		//  nothing to do here
	}
});

export default TodoStore