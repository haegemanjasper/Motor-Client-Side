import {
    createContext,
    useState,
    useCallback,
    useMemo,
    useContext,
    useEffect,
} from "react";
import useSWRMutation from "swr/mutation";
import * as api from "../api";

const JWT_TOKEN_KEY = "jwtToken";
const USER_ID_KEY = "userId";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// 👇 2
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
    const [user, setUser] = useState(localStorage.getItem("user"));
    const [ready, setReady] = useState(false);
    const [isAuthed, setIsAuthed] = useState(false);

    useEffect(() => {
        api.setAuthToken(token);
        setIsAuthed(Boolean(token));
        setReady(true);
    }, [token]);

    const {
        isMutating: loading,
        error,
        trigger: doLogin,
    } = useSWRMutation("users/login", api.post);

    // 👇 6
    const login = useCallback(
        async (email, password) => {
            try {
                const { token, user } = await doLogin({
                    email,
                    password,
                });

                setToken(token);
                setUser(user);

                localStorage.setItem(JWT_TOKEN_KEY, token);
                localStorage.setItem(USER_ID_KEY, user.id);
                localStorage.setItem("user", JSON.stringify(user));

                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        [doLogin]
    );

    const logout = useCallback(() => {
        setToken(null);
        setUser(null);

        localStorage.removeItem(JWT_TOKEN_KEY);
        localStorage.removeItem(USER_ID_KEY);
        localStorage.removeItem("user");
    }, []);

    const value = useMemo(
        () => ({
            token,
            user,
            error,
            ready,
            loading,
            isAuthed,
            login,
            logout,
        }),
        [token, user, error, ready, loading, isAuthed, login, logout]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
