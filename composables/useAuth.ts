export const useAuth = () => {
    const user = useState('user', () => null);

    const initAuth = () => {
        if (import.meta.client) {
            const savedUser = localStorage.getItem('user');
            if (savedUser) {
                user.value = JSON.parse(savedUser);
            }
        }
    };

    const login = (email, password) => {
        // Simulate login - accepts any email/password for demo
        const mockUser = { name: 'Demo User', email };
        user.value = mockUser;
        if (import.meta.client) {
            localStorage.setItem('user', JSON.stringify(mockUser));
        }
        return true;
    };

    const signup = (name, email, password) => {
        // Simulate signup
        const newUser = { name, email };
        user.value = newUser;
        if (import.meta.client) {
            localStorage.setItem('user', JSON.stringify(newUser));
        }
        return true;
    };

    const logout = () => {
        user.value = null;
        if (import.meta.client) {
            localStorage.removeItem('user');
        }
    };

    return {
        user,
        initAuth,
        login,
        signup,
        logout
    };
};

