import { apiMenuPlanner } from "../../api";
import { RegisterUserModel } from "../../api/models";
import { RootState } from "../../redux";
import { SET_USER, SET_USER_REQUEST_DONE } from "../../redux/actionTypes";

export class UserReducerState {
    user?: RegisterUserModel;
    userRequestDone?: boolean;
}

export const initialState = new UserReducerState();

const userReducer = (state: UserReducerState = initialState, action: any): UserReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_USER:
            return {
                ...state,
                user: payload,
            };
        case SET_USER_REQUEST_DONE:
            return {
                ...state,
                userRequestDone: payload,
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

export const setUserRequestDone = (isUserRequestDone?: boolean) => {
    return {
        type: SET_USER_REQUEST_DONE,
        payload: isUserRequestDone,
    };
};

export const fetchUser = () => {
    return async (dispach: any, getState: () => RootState) => {
        try {
            dispach(setUserRequestDone(false));
            const token = getState().login.login?.token;
            if (!token) {
                return;
            }
            const userResponse = await apiMenuPlanner.profileUser();
            dispach(setUser(userResponse.data));
        } catch {
            dispach(setUser(undefined));
        } finally {
            dispach(setUserRequestDone(true));
        }
    };
};
