import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../redux";

export const AuthLayout = () => {
    const userIsLogged = useSelector<RootState, boolean | undefined>((state) => state.user.isLogged);
    if(userIsLogged){
        return <Outlet/>;
    }
    return <Navigate to="/login" replace/>
};

export const NotAuthLayout = () => {
    const userIsLogged = useSelector<RootState, boolean | undefined>((state) => state.user.isLogged);
    if(!userIsLogged){
        return <Outlet/>;
    }
    return <Navigate to="/recipes" replace/>
};