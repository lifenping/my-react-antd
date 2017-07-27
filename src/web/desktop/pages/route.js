
import Frame from 'frame'
import Home from './home';

export default {
  path: '/',
  component: Frame,
  indexRoute: { component: Home },
  childRoutes: [
    {
			path:'question',
			component:require('./question').default
		},
     {
			path:'gitTag',
			component:require('./gitTag').default
		},
    require('./doc/route').default,
    require('./js/route').default,
    require('./react/route').default,
    require('./webpackPages/route').default
  ]
}


