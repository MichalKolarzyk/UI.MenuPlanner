import { apiMenuPlanner } from "../../../api";
import { RegisterUserModel } from "../../../api/models";
import { SET_REGISTRATION_USER, SET_REGISTRATION_USER_SUCCESFULLY_CREATED } from "../../../redux/actionTypes";
import { setApiError, setApiIsLoading } from "../../api/Api.reducer";

export const setRegistrationUser = (user?: RegisterUserModel) => {
    return {
        type: SET_REGISTRATION_USER,
        payload: user,
    };
};

export const setRegistrationUserSuccesfullyCreated = (createdSuccesfully?: boolean) => {
    return {
        type: SET_REGISTRATION_USER_SUCCESFULLY_CREATED,
        payload: createdSuccesfully,
    };
}

export const createRegistrationUser = (user?: RegisterUserModel, callback?: () => void) => {
    return async (dispach: any) => {
        if (!user) {
            return;
        }
        dispach(setApiError(undefined))
        dispach(setApiIsLoading(true))
        dispach(setRegistrationUserSuccesfullyCreated(false))
        try{
            const response = await apiMenuPlanner.registerUser(user);
            dispach(setRegistrationUser(response.data))
            dispach(setRegistrationUserSuccesfullyCreated(true))
            callback?.();
        }
        catch(error : any){
            dispach(setApiError(error))
        }
        finally{
            dispach(setApiIsLoading(false))
        }
    };
};