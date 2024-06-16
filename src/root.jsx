import { Outlet } from "react-router-dom";
import CustomNavbar from "./components/navigation/Navbar";

export default function Root() {
    return (
        <>
            <CustomNavbar />
            <Outlet />
        </>
    );
}
