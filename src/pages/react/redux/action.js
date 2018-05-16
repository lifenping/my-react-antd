/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const DEL_TODO = 'DEL_TODO'


/*
 * action 创建函数
 */

const addTodo = (text) => {
  return { type: ADD_TODO, text }
}

const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index }
}

const deleteFn = (filter) => {
  return { type: DEL_TODO, filter }
}

const setVisidebilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export default {
  addTodo,
  toggleTodo,
  deleteFn,
  setVisidebilityFilter,
}