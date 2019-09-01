import React from 'react';
import { UserConsumer } from '../context/UserContext';

const UserDetails = () => (
    <div>
        <UserConsumer>
            {
                ({ state, actions }) => {
                    return (
                        <div>
                            <h1>Profile information</h1>
                            <p>User name: {state.username}</p>
                            <p>First Name: {state.firstName}</p>
                            <p>Last Name: {state.lastName}</p>

                            <div>
                                <div>
                                    <input type="text" value={state.firstName} onChange={actions.handleFirstNameChange} />
                                </div>
                                <div>
                                    <input type="text" value={state.lastName} onChange={actions.handleLastNameChange} />
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        </UserConsumer>
    </div>
);

export default UserDetails;