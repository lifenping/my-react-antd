// 首页
import React, { Component } from 'react';
import style from 'index.less'

class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		 return (
			 <div className={style.home}>
				<p>Welcome to the app!</p>
				<p>一个基于react antd框架的web app站点，主要内容是学习react，antd库，并实践及记录一些常用知识点。</p>
				<br />
				<p>
					站点说明：<br />1 基于antd <br />2 构建工具基于webpack
				</p>
			</div>
		 )
	}
}

export default Home;