import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greeting from './components/Greeting';
import SignUpPage from './components/signup/SignUpPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greeting} />
		<Route path="signup" component={SignUpPage} />
	</Route>
)
