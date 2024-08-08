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
const KLANT_ID_KEY = "klantId";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
    const [klant, setKlant] = useState(
        JSON.parse(localStorage.getItem("klant"))
    );
    const [ready, setReady] = useState(false);
    const [isAuthed, setIsAuthed] = useState(false);

    useEffect(() => {
        console.log("Klant bij herladen:", klant);
        api.setAuthToken(token);
        setIsAuthed(Boolean(token));
        setReady(true);
    }, [token]);

    const {
        isMutating: loading,
        error,
        trigger: doLogin,
    } = useSWRMutation("klanten/login", api.post);

    const login = useCallback(
        async (email, password) => {
            try {
                const { token, klant } = await doLogin({ email, password });

                console.log("Klant Info na inloggen:", klant);

                setToken(token);
                setKlant(klant);

                localStorage.setItem(JWT_TOKEN_KEY, token);
                localStorage.setItem(KLANT_ID_KEY, klant.id);
                localStorage.setItem("klant", JSON.stringify(klant));

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
        setKlant(null);

        localStorage.removeItem(JWT_TOKEN_KEY);
        localStorage.removeItem(KLANT_ID_KEY);
        localStorage.removeItem("klant");
    }, []);

    // Function to update profile information
    const updateProfile = useCallback(async (klantId, profileData) => {
        try {
            const updatedKlant = await api.updateProfile(klantId, profileData);

            setKlant(updatedKlant);
            localStorage.setItem("klant", JSON.stringify(updatedKlant));

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }, []);

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
            updateProfile,
        }),
        [
            token,
            klant,
            error,
            ready,
            loading,
            isAuthed,
            login,
            logout,
            updateProfile,
        ]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
