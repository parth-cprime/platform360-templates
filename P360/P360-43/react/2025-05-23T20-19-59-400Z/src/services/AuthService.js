// Mock AuthService for demonstration purposes
// In a real application, these functions would interact with a backend service

export const login = async (username, password) => {
    // Mock login logic
    console.log(`Logging in user: ${username}`);
    // Assuming the login was successful and we received a JWT token
    return {
        token: "mock-jwt-token",
        user: {
            username,
            email: `${username}@example.com`
        }
    };
};

export const verifyToken = (token) => {
    // Mock token verification logic
    console.log(`Verifying token: ${token}`);
    // This is a placeholder. In a real application, token verification would involve decoding the JWT and checking its validity
    return true;
};

export const hashPassword = async (password) => {
    // Mock password hashing
    console.log(`Hashing password: ${password}`);
    // Return a mock hashed password
    return `hashed-${password}`;
};