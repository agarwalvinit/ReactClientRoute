import React from 'react'
import { render } from 'react-dom'
import About from '../components/about';
import Contact from '../components/contactus';
import Home from '../components/home';
import { Router, Route, browserHistory, hashHistory} from 'react-router'

render((
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
		<Route path="/About" component={About} />
		<Route path="/Contact" component={Contact} />
	</Router>
), document.getElementById('app'));
