import React from 'react';
import { Link } from 'react-router'
 
export default () => {
	return (
		<nav className="navbar navbar-default">
	  		<Link className="navbar-brand" to="/" >BoardRoom</Link>
	  		<div className="collapse navbar-collapse">
		  	<ul className="nav navbar-nav navbar-right">
		  		<li><Link to="/signup" >Sign up</Link></li>
		  	</ul>
		  	</div>
		</nav>
	);
}