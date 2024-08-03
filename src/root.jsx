import { Outlet } from "react-router-dom";
import CustomNavbar from "./components/navigation/navbar";

export default function Root() {
    return (
        <>
            <CustomNavbar />
            <Outlet />
        </>
    );
}
