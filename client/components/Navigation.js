import React from 'react';

export default () => {
	return (
		<nav className="navbar navbar-light bg-faded">
	  		<a className="navbar-brand" href="/">BoardRoom</a>
		  	<ul className="nav navbar-nav">
		  		<div className="form-inline pull-xs-right">
		  			<li className="nav-item">
			    		<a href="/signup"><button className="btn btn-outline-success" type="submit">Sign Up</button></a>
			    	</li>
		  		</div>	
		  	</ul>
		</nav>
	);
}