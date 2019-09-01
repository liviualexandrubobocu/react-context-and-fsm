import React, { Component } from 'react';
import { UserProvider } from './context/UserContext';
import User from './components/User';

class App extends Component {
  state = {
    user: {
      username: 'omega',
      firstName: 'Liviu',
      lastName: 'Bobocu'
    }
  };

  render() {
    return (
      <div>
        <UserProvider value={
          {
            state: this.state.user,
            actions: {
              handleFirstNameChange: event => {
                const value = event.target.value;
                this.setState(prevState => (
                  {
                    user: {
                      ...prevState.user,
                      firstName: value
                    }
                  }
                ))
              },
              handleLastNameChange: event => {
                const value = event.target.value;
                this.setState(prevState => ({
                  user: {
                    ...prevState.user,
                    lastName: value
                  }
                }
                ));
              }
            }
          }
        }>
          <User />
        </UserProvider>
      </div >
    );
  }

}

export default App;
