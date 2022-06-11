import { apiMenuPlanner } from "../../api";
import { ErrorModel, LoginRequestModel, LoginResponseModel } from "../../api/models";
import { SET_LOGIN } from "../../redux/actionTypes";
import { setApiError, setApiIsLoading } from "../api/Api.reducer";

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
        case SET_LOGIN:
            return {
                ...state,
                login: payload,
            };
        default:
            return state;
    }
};
export default loginReducer;

export const setLogin = (login: LoginResponseModel) => {
    return {
        type: SET_LOGIN,
        payload: login,
    };
};

export const fetchLogin = (login?: LoginRequestModel, callback?: () => void) => {
    return async (dispach: any) => {
        dispach(setApiError(undefined));
        if (!login) {
            return;
        }
        try {
            dispach(setApiIsLoading(true));
            const loginResponse = await apiMenuPlanner.loginUser(login);
            dispach(setLogin(loginResponse.data));
            callback?.();
        } catch (error: any) {
            dispach(setApiError(error));
        } finally {
            dispach(setApiIsLoading(false));
        }
    };
};
