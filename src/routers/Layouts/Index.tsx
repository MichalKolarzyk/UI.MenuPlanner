import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../redux";

export const AuthLayout = () => {
    const token = useSelector<RootState, string | undefined>((state) => state.login.login?.token);
    console.log(token);
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
};
