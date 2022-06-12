import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginResponseModel, UserModel } from "../api/models";
import { setLogin } from "../businessComponents/login/login.reducer";
import { fetchUser } from "../businessComponents/user/user.reducer";
import { AppDispatch, RootState } from "../redux";
import Spiner from "../ui/placeHolders/spiner/Spiner";

const KEY_TOKEN = "KEY_TOKEN";
const KEY_AUTHORIZATION_METHOD = "KEY_AUTHORIZATION_METHOD";

const LoginListener = (props: any) => {
    const dispach = useDispatch<AppDispatch>();
    const login = useSelector<RootState, LoginResponseModel | undefined>((state) => state.login.login);
    const userRequestDone = useSelector<RootState, boolean | undefined>((state) => state.user.userRequestDone);

    useEffect(() => {
        const token = localStorage.getItem(KEY_TOKEN) ?? "";
        const authorizationMethod = localStorage.getItem(KEY_AUTHORIZATION_METHOD) ?? "";
        dispach(
            setLogin({
                authorizationMethod,
                token,
            })
        );
    }, []);

    useEffect(() => {
        if (!login) {
            return;
        }
        const newToken = login?.token ?? ""
        const newAuthorizationMethod = login?.authorizationMethod ?? ""
        localStorage.setItem(KEY_TOKEN, newToken);
        localStorage.setItem(KEY_AUTHORIZATION_METHOD, newAuthorizationMethod);
        dispach(fetchUser());
    }, [login]);

    if(!userRequestDone){
        return <Spiner/>
    }

    return props.children;
};

export default LoginListener;
