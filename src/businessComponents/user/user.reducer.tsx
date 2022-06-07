import { RegisterUserModel } from "../../api/models";
import { SET_USER, SET_USER_ISLOGGED } from "../../redux/actionTypes";

export class UserReducerState {
    user?: RegisterUserModel;
    isLogged?: boolean;
}

export const initialState = new UserReducerState()

const userReducer = (state: UserReducerState = initialState, action: any): UserReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_USER:
            return {
                ...state,
                user: payload,
            };
        case SET_USER_ISLOGGED:
            return {
                ...state,
                isLogged: payload,
            };
        default:
            return state;
    }
};
export default userReducer;

export const setUser = (user?: RegisterUserModel) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

export const setUserIsLogged = (isLogged: boolean) => {
    return {
        type: SET_USER_ISLOGGED,
        payload: isLogged,
    };
};
