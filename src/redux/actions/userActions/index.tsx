import { SET_USER } from "../../actionTypes"
import { UserReducerState } from "../../reducers/user.reducer"

export const setUser = (payload: UserReducerState) => {
    return {
        type: SET_USER,
        payload
    }
}

export const asyncActionExample = (payload : any) => {
    return async (dispach : any, getState: any) => {
        const userState = getState()
        //await menuApi.userLogin(login, password);

        dispach(setUser(new UserReducerState()))
    }
}