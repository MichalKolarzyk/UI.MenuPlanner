import jwtDecode from "jwt-decode";
import { apiMenuPlanner } from "../../api";
import { ErrorModel, LoginRequestModel, LoginResponseModel } from "../../api/models";
import {
    SET_LOGIN,
    SET_LOGIN_ERROR,
    SET_LOGIN_IS_LOADING,
    SET_LOGIN_LOGGED_SUCCESSFULLY,
} from "../../redux/actionTypes";
import { setUser, setUserIsLogged } from "../user/user.reducer";

export class LoginReducerState {
    login?: LoginResponseModel;
    isLoading?: boolean;
    loggedSuccessFully?: boolean;
    error?: ErrorModel;
}

export const initialState = new LoginReducerState();

const loginReducer = (state: LoginReducerState = initialState, action: any): LoginReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_LOGIN_IS_LOADING:
            return {
                ...state,
                isLoading: payload,
            };
        case SET_LOGIN_LOGGED_SUCCESSFULLY:
            return {
                ...state,
                loggedSuccessFully: payload,
            };
        case SET_LOGIN:
            return {
                ...state,
                login: payload,
            };
        case SET_LOGIN_ERROR:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};
export default loginReducer;

export const setLoginIsLoading = (isLoading?: boolean) => {
    return {
        type: SET_LOGIN_IS_LOADING,
        payload: isLoading,
    };
};

export const setLoginLoggedSuccessfully = (loggedSuccessfully?: boolean) => {
    return {
        type: SET_LOGIN_LOGGED_SUCCESSFULLY,
        payload: loggedSuccessfully,
    };
};

export const setLogin = (login?: LoginResponseModel) => {
    return {
        type: SET_LOGIN,
        payload: login,
    };
};

export const setLoginError = (error?: ErrorModel) => {
    return {
        type: SET_LOGIN_ERROR,
        payload: error,
    };
};

export const fetchLogin = (login?: LoginRequestModel) => {
    return async (dispach: any) => {
        dispach(setLoginLoggedSuccessfully(false));
        dispach(setLoginError(undefined));
        if (!login) {
            return;
        }
        dispach(setLoginIsLoading(true));
        try {
            const loginResponse = await apiMenuPlanner.loginUser(login);
            dispach(setLogin(loginResponse.data));
            dispach(setLoginLoggedSuccessfully(true));

            const userResponse = await apiMenuPlanner.profileUser(loginResponse.data.token);
            dispach(setUserIsLogged(true));
            dispach(setUser(userResponse.data))
        } catch (error: any) {
            dispach(setLoginError(error.response.data));
        }
    };
};
