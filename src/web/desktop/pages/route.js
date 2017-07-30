import Frame from 'frame'
import Home from './home';

export default {
  path: '/',
  component: Frame,
  indexRoute: { component: Home },
  childRoutes: [
    {
			path:'questions',
			component:require('./questions').default
		},
    require('./doc/route').default,
    require('./js/route').default,
    require('./react/route').default,
    require('./webpackPages/route').default
  ]
}


