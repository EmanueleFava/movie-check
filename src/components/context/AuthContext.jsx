
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('user'));

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setIsLogged(true);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setIsLogged(false);
    };

    return (
        <AuthContext.Provider value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);