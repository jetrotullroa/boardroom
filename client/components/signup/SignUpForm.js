import React from 'react';
import map from 'lodash/map';


import timezones from '../../data/timezones'

class SignUpForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirm: '',
			timezone: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		const option = map(timezones, (val, key) =>
			<option key={val} value={key}>{key}</option>
			);
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community!</h1>
				<div className="form-group">
					<label className="control-label">Username</label>
					<input 
					value={this.state.username}
					onChange={this.onChange}
					type="text" 
					name="username" 
					className="form-control" 
					/>
					<label className="control-label">Email</label>
					<input 
					value={this.state.email}
					onChange={this.onChange}
					type="email" 
					name="email" 
					className="form-control" 
					/>
					<label className="control-label">Password</label>
					<input 
					value={this.state.password}
					onChange={this.onChange}
					type="password" 
					name="password" 
					className="form-control" 
					/>
					<label className="control-label">Confirm Password</label>
					<input 
					value={this.state.passwordConfirm}
					onChange={this.onChange}
					type="password" 
					name="passwordConfirm" 
					className="form-control" 
					/>
					<label className="control-label">Time Zone</label>
					<select 
					value={this.state.timezone}
					onChange={this.onChange}
					type="text" 
					name="timezone" 
					className="form-control" 
					>
					<option value="" disabled>Choose your timezone
					</option>
						{option}
					</select>
				</div>
				<div className="form-group">
					<button className="btn btn-large btn-primary">Sign up!</button>
				</div>
			</form>	
		);
	}
}
	
export default SignUpForm;



