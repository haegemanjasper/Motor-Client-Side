import {
    createContext, // 👈 1
    useState, // 👈 4
    useCallback, // 👈 6
    useMemo, // 👈 5
    useContext, // 👈 5
    useEffect,
} from "react";
import useSWRMutation from "swr/mutation"; // 👈 8
import * as api from "../api"; // 👈 8

const JWT_TOKEN_KEY = "jwtToken"; // 👈 13
const KLANT_ID_KEY = "klantId"; // 👈 13
const AuthContext = createContext(); // 👈 1

export const useAuth = () => useContext(AuthContext); // 👈 5

// 👇 2
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY)); // 👈 4 en 13
    const [klant, setKlant] = useState(localStorage.getItem("klant")); // 👈 4
    const [ready, setReady] = useState(false); // 👈
    const [isAuthed, setIsAuthed] = useState(false); // 👈

    useEffect(() => {
        api.setAuthToken(token);
        setIsAuthed(Boolean(token)); // 👈
        setReady(true); // 👈
    }, [token]);

    const {
        isMutating: loading,
        error,
        trigger: doLogin,
    } = useSWRMutation("klanten/login", api.post); // 👈 8

    // 👇 6
    const login = useCallback(
        async (email, password) => {
            try {
                // 👇 7
                const { token, klant } = await doLogin({
                    email,
                    password,
                });

                setToken(token); // 👈 8
                setKlant(klant); // 👈 8

                localStorage.setItem(JWT_TOKEN_KEY, token); // 👈 13
                localStorage.setItem(KLANT_ID_KEY, klant.id); // 👈 13
                localStorage.setItem("klant", JSON.stringify(klant)); // 👈 13

                return true; // 👈 10
                // 👇 10
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        [doLogin]
    );

    // 👇 11
    const logout = useCallback(() => {
        setToken(null);
        setKlant(null);

        localStorage.removeItem(JWT_TOKEN_KEY);
        localStorage.removeItem(KLANT_ID_KEY);
        localStorage.removeItem("klant");
    }, []);

    // 👇 5 en 9 en 12
    const value = useMemo(
        () => ({
            token,
            klant,
            error,
            ready,
            loading,
            isAuthed,
            login,
            logout,
        }),
        [token, klant, error, ready, loading, isAuthed, login, logout]
    );

    // 👇 3
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
