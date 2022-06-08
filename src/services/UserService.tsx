import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginResponseModel } from "../api/models";
import { setLogin } from "../businessComponents/login/login.reducer";
import { fetchUser } from "../businessComponents/user/user.reducer";
import { AppDispatch, RootState } from "../redux";

const KEY_TOKEN = "KEY_TOKEN";
const KEY_AUTHORIZATION_METHOD = "KEY_AUTHORIZATION_METHOD";

const UserService = (props: any) => {
    const dispach = useDispatch<AppDispatch>();
    const login = useSelector<RootState, LoginResponseModel | undefined>((state) => state.login.login);

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

    return props.children;
};

export default UserService;
