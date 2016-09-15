import React from 'react';
import Greeting from './Greeting';
import Navigation from './Navigation';


class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Navigation />
				{this.props.children}
			</div>
		);
	}
}

export default App;