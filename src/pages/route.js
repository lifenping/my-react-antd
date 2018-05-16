import Frame from 'frame'
import Home from './home';

export default {
  path: '/',
  component: Frame,
  indexRoute: { component: Home },
  childRoutes: [
    {
			path:'note_test',
			component:require('./note_test').default
    },
    {
			path:'webpack',
			component:require('./webpack').default
    },
    {
			path:'markdown',
			component:require('./markdown').default
    },
    require('./js/route').default,
    require('./nodejs/route').default,
    require('./react/route').default,
  ]
}


