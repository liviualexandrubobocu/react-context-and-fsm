import { createContext } from 'react';

const AuthContext = createContext(
    {
        authState: 'loggedOut',
        error: '',
        logout: () => { },
        user: {}
    }
);
export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;
