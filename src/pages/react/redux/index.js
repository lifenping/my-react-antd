
// 参考 http://www.redux.org.cn/docs/basics/Reducers.html 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

// 组件中需要引入action文件
import action from './action';

class AddTodo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Redux 是 JavaScript 状态容器，提供可预测化的状态管理。</h3>
                <pre>
                    {`
                        应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中;
                        惟一改变 state 的办法是触发 action，一个描述发生什么的对象; 
                        为了描述 action 如何改变 state 树，你需要编写 reducers;
                        ---------------------------------------------------------
                        创建流程：
                        1. Provider的角色是store的提供者，一般情况下把所有的组件树根节点包裹在Provider中，这样整个组件树上的节点都可通过connect来获取store;
                        let store = createStore(reducer)
                        
                        import reducer from './pages/react/redux/reducer'
                        ReactDOM.render(
                            <Provider store={store}>
                                <Router history={hashHistory} routes={route} />
                            </Provider>,
                            document.getElementById('app')
                        )
                        详见入口文件：app.js

                        2. 创建action.js
                        3. 创建reducer.js文件，通过在组件中dispatch一个action来更新state
    
                    `}
                </pre>
                <h3>以下为redux应用eg:</h3>
                <div>
                    <Button onClick={() => this.props.dispatch(action.setVisidebilityFilter('show'))}>显示已完成项</Button>
                    <Button onClick={() => this.props.dispatch(action.setVisidebilityFilter('hidden'))}>隐藏已完成项</Button>
                </div>
                {
                    this.props.todos.map((item, index) => {
                        return (
                            <p key={index}>
                                {item.text}&nbsp;&nbsp;
                                <Button onClick={() => this.props.dispatch(action.addTodo('添加内容'))}>添加</Button>&nbsp;&nbsp;
                                <Button type='primary' onClick={() => this.props.dispatch(action.toggleTodo(index))}>{item.completed ? '完成' : '未完成'}</Button>&nbsp;&nbsp;
                                <Button type='' onClick={() => this.props.dispatch(action.deleteFn(index))}>删除</Button>
                            </p>
                        )
                    })
                }
            </div>
        )
    }
}
// connect 是连接store与组件的方法
export default connect(state => (state))(AddTodo)
