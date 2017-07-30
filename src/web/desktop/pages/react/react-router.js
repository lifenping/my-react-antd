
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
                <p>react-router 的使用总结：</p>
                <p><a target="_blank" href="https://react-guide.github.io/react-router-cn/docs/API.html">https://react-guide.github.io/react-router-cn/docs/API.html</a></p>
				<div>
					<h3>路由配置</h3>
					<ul>
						<li>
{`
一、配置路由
1、使用JSX的嵌套写法：
React.render((
  <Router>
    <Route path="/" component={App}>
      {/* 当 url 为/时渲染 Dashboard */}
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
		{/* 可使用 /messages/:id 替换 messages/:id */}
        <Route path="/messages/:id" component={Message} />
		{/* 跳转 /inbox/messages/:id 到 /messages/:id */}
        <Redirect from="messages/:id" to="/messages/:id" />
      </Route>
    </Route>
  </Router>
), document.body)

2、使用原生 route 数组对象：
const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [
      { path: 'about', component: About },
      { path: 'inbox',
        component: Inbox,
        childRoutes: [
          { path: '/messages/:id', component: Message },
          { path: 'messages/:id',
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/messages/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  }
]

React.render(<Router routes={routeConfig} />, document.body)

二、Historie
常用的 history 有三种形式， 但是你也可以使用 React Router 实现自定义的 history。

browserHistory
hashHistory
createMemoryHistory

browserHistory：
Browser history 是使用 React Router 的应用推荐的 history。它使用浏览器中的 History API 用于处理 URL，创建一个像example.com/some/path这样真实的 URL 。
但需要在服务器上设置配置
location对象包括：
pathname      同window.location.pathname
search        同window.location.search
state         一个捆绑在这个地址上的object对象
action        PUSH, REPLACE, 或者 POP中的一个
key           唯一ID

hashHistory：
不需要服务器任何配置就可以运行，但每一个 web 应用都应该用不带#的路由，推荐使用 browserHistory，所以hashHistory不适用于正式环境中

createMemoryHistory：
会在地址栏被操作或读取。这就解释了我们是如何实现服务器渲染的。同时它也非常适合测试和其他的渲染环境（像 React Native ）

`}						
						
<h3>服务端渲染的应用？？？？</h3>	
{`
服务端渲染与客户端渲染有些许不同，因为你需要：

发生错误时发送一个 500 的响应
需要重定向时发送一个 30x 的响应
在渲染之前获得数据 (用 router 帮你完成这点)

import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from './routes'

serve((req, res) => {
  // 注意！这里的 req.url 应该是从初始请求中获得的
  // 完整的 URL 路径，包括查询字符串。
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.send(500, error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.send(200, renderToString(<RoutingContext {...renderProps} />))
    } else {
      res.send(404, 'Not found')
    }
  })
})

`}
<h3>了解组件的生命周期及应用</h3>
{`
<Route path="/" component={App}>
  <IndexRoute component={Home}/>
  <Route path="invoices/:invoiceId" component={Invoice}/>
  <Route path="accounts/:accountId" component={Account}/>
</Route>
路由切换时，组件生命周期的变化情况

1. 当用户打开应用的 '/' 页面

组件	生命周期
App	componentDidMount
Home	componentDidMount
Invoice	N/A
Account	N/A
2. 当用户从 '/' 跳转到 '/invoice/123'

组件	生命周期
App	componentWillReceiveProps, componentDidUpdate
Home	componentWillUnmount
Invoice	componentDidMount
Account	N/A
App 从 router 中接收到新的 props（例如 children、params、location 等数据), 所以 App 触发了 componentWillReceiveProps 和 componentDidUpdate 两个生命周期方法
Home 不再被渲染，所以它将被移除
Invoice 首次被挂载
3. 当用户从 /invoice/123 跳转到 /invoice/789

组件	生命周期
App	componentWillReceiveProps, componentDidUpdate
Home	N/A
Invoice	componentWillReceiveProps, componentDidUpdate
Account	N/A
所有的组件之前都已经被挂载， 所以只是从 router 更新了 props.

4. 当从 /invoice/789 跳转到 /accounts/123

组件	生命周期
App	componentWillReceiveProps, componentDidUpdate
Home	N/A
Invoice	componentWillUnmount
Account	componentDidMount
`}										
						
{console.log("render")}

					</li>
					</ul>
				</div>
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