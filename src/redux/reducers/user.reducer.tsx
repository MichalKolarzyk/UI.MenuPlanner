import { SET_USER } from "../actionTypes";

export class UserReducerState {
    userId: string = "";
    userLogin: string = "";
    userFirstName: string = "";
    userLastName: string = "";
    userEmail?: string = "";
}

export const initialState = new UserReducerState();

const userReducer = (state: UserReducerState = initialState, action: any) : UserReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_USER:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default userReducer;
