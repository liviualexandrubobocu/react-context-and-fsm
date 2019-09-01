import React from 'react';
import { AuthConsumer } from '../context/AuthContext';

const Dashboard = () => (
    <AuthConsumer>
        {
            ({ user, logout }) => (
                <div>
                    <div>Hello { user.name }</div>
                    <button onClick={ e => logout(e)}>Logout</button>
                </div>
            )
        }
    </AuthConsumer>
)

export default Dashboard;