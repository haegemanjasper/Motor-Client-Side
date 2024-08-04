import Loading from "./Loading"
import Error from "./Error";

export default function AsyncData({ loading, error, children }) {
    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Error error={error} />
    }

    return (
        <>
            {children}
        </>
    );
}
