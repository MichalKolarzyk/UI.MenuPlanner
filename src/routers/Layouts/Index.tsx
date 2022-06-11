import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../redux";

export const AuthLayout = () => {
    const userIsLogged = useSelector<RootState, boolean | undefined>((state) => state.user.isLogged);
    if(userIsLogged){
        return <Outlet/>;
    }
    console.log("to login")
    return <Navigate to="/login" replace/>
};

// export const NotAuthLayout = (props: any) => {
//     const userIsLogged = useSelector<RootState, boolean | undefined>((state) => state.user.isLogged);
//     if(!userIsLogged){
//         return props.children
//     }
//     console.log("to recipes")
//     return <Navigate to="/recipes" replace/>
// };