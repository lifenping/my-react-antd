
import React, {Component} from 'react';

/**
	jsx中html转义：
	默认插入到dom中的内容是会被转义的，防止xxs。
	解决办法：
	给标签添加dangerouslySetInnerHTML属性，来转出html代码
 */
class item extends Component {
	render() {
		return (
			<pre>
<h3>了解组件的生命周期及应用</h3>
{`
创建时（实例化）：
getDefaultProps
getInitialState
componentWillMount
render
componentDidMount
存在期：
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
销毁：
componentWillUnmount
`}										
						
{console.log("render")}
{/* <img src="/#/web/desktop/pages/react/images/life.png" alt=""/> */}
<img src={require('./images/life.png')} style={{width:"60%"}} alt=""/>

            </pre>
		);
	}
	// 将挂载
	componentWillMount=()=>{
		console.log('将挂载')
	}
	// 挂载
	componentDidMount=()=>{
		console.log('挂载')
	}
	// 销毁
	componentWillUnmount=()=>{
		console.log('销毁')
	}
	// 更新状态
	componentWillUpdate=()=>{
		console.log('更新状态')
	}
	
}

export default item;