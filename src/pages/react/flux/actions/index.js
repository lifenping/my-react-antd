/**
 * 用flux实现一个代办事项程序
 * 程序相关的action
 */
import Dispatcher from '../dispatcher/index.js';
export default {
	create(todo) {
		Dispatcher.dispatch({
			actionType: 'CREATE_TODO',
			todo
		})
	},
	delete(id) {
		Dispatcher.dispatch({
			actionType: 'DELETE_TODO',
			id
		})
	}
}