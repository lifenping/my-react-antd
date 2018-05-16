import React, { Component } from 'react'
import style from './index.less'
class item extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<h3>实现尖角：</h3>
				<div className={style.wrap}><span className={style.arrow}></span></div>
				<div className={style.wrap} style={{ marginTop: '10px' }}><span className={style.arrow2}></span></div>
				<div className={style.wrap2} style={{ marginTop: '10px' }}>
					<span className={style.arrowBorder1}></span>
					<span className={style.arrowBorder2}></span>
				</div>


				<pre>
				{`
				`}
				<h3>浏览器渲染过程：</h3>
                {`获取 HTML 文档及样式表文件
                解析成对应的树形数据结构
                DOM tree
                CSSOM tree
                计算可见节点形成 render tree
                计算 DOM 的形状及位置进行布局
                将每个节点转化为实际像素绘制到视口上（栅格化）
                
				`}
				
				<h3><a href="https://github.com/lifesinger/blog/issues/184">web研发模式演变</a></h3>
				</pre>

			</div>
		);
	}
}

export default item
