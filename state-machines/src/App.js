import React, { Component } from 'react';
import AppMachine from './machine/StateMachine';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			authState: AppMachine.initialState.value,
			error: '',
			logout: e => this.logout(e),
			user: {}
		}
	}

	transition(event) {
		const currentState = this.state.authState;
		const nextAuthState = AppMachine.transition(currentState, event.type);
		const nextState = nextAuthState.actions.reduce(
			(state, action) => this.command(action, event) || state,
			undefined,
		);
		this.setState({
			authState: nextAuthState.value,
			...nextState,
		});
	}

	command(action, event) {
		switch (action.type) {
			case 'setUser':
				if (event.username) {
					return { user: { name: event.username }, error: '' };
				}
				break;
			case 'unsetUser':
				return {
					user: {},
				};
			case 'error':
				if (event.error) {
					return { error: event.error };
				}
				break;
			default:
				break;
		}
	}

	logout(e) {
		e.preventDefault();
		this.transition({
			type: 'LOGOUT'
		});
	}

	render() {
		const { authState, error } = this.state;
		return (
			<AuthProvider value={this.state}>
				<div>
					<div className="error">{this.state.error}</div>
					{
						authState === 'loggedIn' ?
							(<Dashboard />) :
							(<Login transition={event => this.transition(event)} />)
					}
				</div>
			</AuthProvider>
		);
	}
}

export default App;
