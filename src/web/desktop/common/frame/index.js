import React, { Component } from 'react'
import { Menu, Icon } from 'antd'


import Header from './header'
import Footer from './footer'
import Nav from './Nav'
import './core.less'
import './style.less'

class Frame extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<Header />
				<artical className="f-flex midWrap">
					<Nav className="nav" />
					<section className="cell wrap">
						{this.props.children}
					</section>
				</artical>
				<Footer />
			</div>

		);
	}
}
export default Frame;






// // 2eg：==============================
// function formatName(user) {
// 	return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
// 	if (user) {
// 		return <h3>例子2：元素中插入表达式 <br />{formatName(user)}!<hr /></h3>;
// 	}
// 	return <h3>例子2：Stranger.<hr /></h3>;
// }

// const user = {
// 	firstName: 'Harper',
// 	lastName: 'Perez'
// };

// const element2 = (
// 	<div>
// 		{getGreeting(user)}
// 	</div>
// );

// ReactDOM.render(
// 	element2,
// 	document.getElementById('root2')
// );

// // ==============================================
// // 3eg: 通过 React.createElement 创建元素的方法：

// const element3 = React.createElement(
// 	'h3',
// 	{
// 		className: 'greeting',
// 		children: '例子3：通过 React.createElement 创建元素的方法'
// 	}
// );
// ReactDOM.render(
// 	element3,
// 	document.getElementById('root3')
// );

// // ======================================
// // 4eg:时钟
// // function tick() {
// // 	const element4 = (
// // 		<div>
// // 			<hr />
// // 			<h3>例子4：时钟的应用</h3>
// // 			<h4>It is {new Date().toLocaleTimeString()}.</h4>
// // 			<hr />
// // 		</div>
// // 	);
// // 	ReactDOM.render(
// // 		element4,
// // 		document.getElementById('root4')
// // 	);
// // }

// // setInterval(tick, 1000);

// // 5eg:创建组件
// // ==============================================
// // 1 通过函数创建组件
// function Welcome(props) {
// 	return <span>{props.name}&nbsp; </span>;
// }

// function App() {
// 	return (
// 		<div>
// 			<h3>例子5：创建组件</h3>
// 			<h3>1 通过函数创建组件：<Welcome name="Sara" /><Welcome name="Cahal" /></h3>
// 		</div>
// 	);
// }

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root5')
// );


// // ===============================================================
// // 2  通过es6 class定义组件
// class Welcome2 extends React.Component {
// 	render() {
// 		return <h3>2 通过es6 class定义组件, <span>{this.props.name}</span><hr /></h3>;
// 	}
// }
// ReactDOM.render(
// 	<Welcome2 name="组件中的属性值" fontSize="12px" />,
// 	document.getElementById('root6')
// );


// // =============================================================

// //6eg state的应用 
// class Clock extends React.Component {
// 	constructor(props) {
// 		// Super class calls with super
// 		super(props);
// 		this.state = { date: new Date() };
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h3>用super方法来继承父类及state的应用</h3>
// 				<h3>Super class calls with super</h3>
// 				<h4>The time is {this.state.date.toLocaleTimeString()}.<hr /></h4>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<Clock />,
// 	document.getElementById('root7')
// );


// /**

// 1 更新状态用(Do Not Modify State Directly) this.setState({comment: 'Hello'});
// 2 更新异步状态 State Updates May Be Asynchronous：
// this.setState((prevState, props) => ({
//   counter: prevState.counter + props.increment
// }));
// 3 更新状态：
//   componentDidMount() {
//     fetchPosts().then(response => {
//       this.setState({
//         posts: response.posts
//       });
//     });

//     fetchComments().then(response => {
//       this.setState({
//         comments: response.comments
//       });
//     });
//   }
//  */

// // 7eg: react的生命周期
// class Clock2 extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { date: new Date() };
// 	}

// 	// 存在期
// 	componentDidMount() {
// 		this.timerID = setInterval(
// 			() => this.tick(),
// 			1000
// 		);
// 	}
// 	// 销毁期
// 	componentWillUnmount() {
// 		clearInterval(this.timerID);
// 	}

// 	tick() {
// 		this.setState({
// 			date: new Date()
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h3>react的生命周期</h3>
// 				<h4>The time is {this.state.date.toLocaleTimeString()}.</h4>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<Clock2 />,
// 	document.getElementById('root8')
// );

// // ==============================================
// /*
// 处理事件注意：

// 1 调方法：放在大括号中，而非js中的写法onclick="activateLasers()"
// <button onClick={activateLasers}>
//   Activate Lasers
// </button>
// 2 阻止默认行为不能用return false.应用e.preventDefault();
// 3 

// this.handleClick = this.handleClick.bind(this);

// */








