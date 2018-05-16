
/**
 * 路由文件
 */
import Router from 'Router'
// import Frame from 'frame'
export default {
	path: 'js',
	component: Router,
	/**
	 * 子路由配置
	 * 子路径下路由较为简单时，直接配置路由
	 * 子路径下路由较为复杂时，需引用其目录下的路由配置文件
	 */
	childRoutes: [
		{
			path:'note',
			component:require('./note').default
		},
		{
			path:'moment',
			component:require('./moment').default
		},
		{
			path:'es6-Promise',
			component:require('./es6-Promise').default
		},
		{
			path:'es6-Symbol',
			component:require('./es6-Symbol').default
		},
		// __proto__
		{
			path:'__proto__',
			component:require('./__proto__').default
		},
		{
			path:'this',
			component:require('./this').default
		},
		{
			path:'module',
			component:require('./module').default
		},
		{
			path:'module',
			component:require('./module').default
		},
		// /node/note
	]
}
