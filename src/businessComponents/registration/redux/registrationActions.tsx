import { apiMenuPlanner } from "../../../api";
import { ErrorModel, UserModel } from "../../../api/models";
import { SET_REGISTRATION_ERROR, SET_REGISTRATION_USER, SET_REGISTRATION_USER_SUCCESFULLY_CREATED } from "../../../redux/actionTypes";

export const setRegistrationUser = (user: UserModel) => {
    return {
        type: SET_REGISTRATION_USER,
        payload: user,
    };
};

export const setRegistrationError = (error?: ErrorModel) => {
    return {
        type: SET_REGISTRATION_ERROR,
        payload: error,
    };
}

export const setRegistrationUserSuccesfullyCreated = (createdSuccesfully?: boolean) => {
    return {
        type: SET_REGISTRATION_USER_SUCCESFULLY_CREATED,
        payload: createdSuccesfully,
    };
}

export const createRegistrationUser = (user?: UserModel) => {
    return async (dispach: any) => {
        if (!user) {
            return;
        }
        dispach(setRegistrationUserSuccesfullyCreated(false));
        dispach(setRegistrationError(undefined))
        try{
            const response = await apiMenuPlanner.registerUser(user);
            dispach(setRegistrationUser(response.data))
            dispach(setRegistrationUserSuccesfullyCreated(true));
        }
        catch(error : any){
            dispach(setRegistrationError(error.response.data))
        }
    };
};