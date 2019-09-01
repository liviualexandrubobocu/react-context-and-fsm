import React, { Component } from 'react';
import { AuthConsumer } from '../context/AuthContext';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yourName: ''
        };
    }

    handleInput = (e) => {
        this.setState({
            yourName: e.target.value
        });
    }

    login = (e) => {
        e.preventDefault();
        console.log('here');
        this.props.transition({ type: 'SUBMIT' });
        setTimeout(() => {
            console.log('here2', this.state.yourName);
            if (this.state.yourName) {
                this.props.transition({
                    type: 'SUCCESS',
                    username: this.state.yourName
                }, () => {
                    console.log(this.props);
                    this.setState({ yourName: '' });
                });
            }

            return this.props.transition({
                type: 'FAIL',
                error: 'Please enter your name!'
            });
        }, 2000);
    }

    render() {
        return (
            <AuthConsumer>
                {
                    ({ authState }) => (
                        <form>
                            <label htmlFor="yourName">
                                <span>Your name</span>
                                <input
                                    id="yourName"
                                    name="yourName"
                                    type="text"
                                    value={this.state.yourName}
                                    onChange={this.handleInput}
                                />
                            </label>
                            <input
                                onClick={e => this.login(e)}
                                type="button"
                                value={authState === 'loading' ? 'Logging in...' : 'Login'}
                                disabled={authState === 'loading' ? true : false}
                            />
                        </form>
                    )
                }
            </AuthConsumer>
        )
    }
}

export default Login;