

/**
 * 
 */
import action from './action';
import { createStore, applyMiddleware, compose, bindActionCreators, combineReducers } from 'redux'

let initialState = {
    todos: [
        {
            text: '旧的state数据1',
            completed: true,
        },
        {
            text: '旧的state数据2',
            completed: false
        },
        {
            text: '旧的state数据3',
            completed: false
        },
        {
            text: '旧的state数据4',
            completed: true
        },
    ]
}

function visibilityFilter(state = initialState.todos, action) {
return {}
}

function todos(state = initialState.todos, action) {
    switch (action.type) {
        case 'ADD_TODO':
            // 注：不要修改 state, return一个新对象
            return [
                ...state,
                { text: action.text, completed: false }
            ];
        case 'TOGGLE_TODO':
            return state.map((item, index) =>
                action.index === index ? { text: item.text, completed: !item.completed } : item
            )
        case 'DEL_TODO':
            return state.filter((item, index) => {
                return index !== action.filter;
            })
        case 'SET_VISIBILITY_FILTER':
            if (action.filter === 'show') {
                return state.filter(item => item.completed);
            }else if (action.filter === 'hidden') {
                return state.filter(item => !item.completed);
            }
        default:
            return state;
    }
}
// function todoApp(state = {}, action) {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     };
// }
const reducer = combineReducers({
    visibilityFilter,
    todos
})

export default reducer