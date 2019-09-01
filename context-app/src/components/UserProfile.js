import React from 'react';
import { UserConsumer } from '../context/UserContext';
import UserDetails from '../components/UserDetails';

const UserProfile = (props) => (
    <UserConsumer>
        {
            ({ state }) => {
                return (
                    <div>
                        <h2>User profile of {state.username} </h2>
                        <UserDetails />
                    </div>
                )
            }
        }
    </UserConsumer>
)

export default UserProfile;