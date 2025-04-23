```javascript
import React, { createContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt.decode(token);
            setUser(user);
        }
    }, []);
    
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
```