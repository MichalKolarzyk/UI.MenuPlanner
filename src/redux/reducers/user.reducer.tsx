export class UserReducerState {
    userId: string = "";
    userLogin: string = "";
    userFirstName: string = "";
    userLastName: string = "";
}

export const initialState = new UserReducerState();

const userReducer = (state: UserReducerState = initialState, action: any) : UserReducerState => {
    const { payload, type } = action;
    switch (type) {
        case "SET_USER":
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export default userReducer;
