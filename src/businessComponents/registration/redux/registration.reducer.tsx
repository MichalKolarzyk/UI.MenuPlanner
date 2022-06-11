import { ErrorModel, RegisterUserModel } from "../../../api/models";
import {
    SET_REGISTRATION_USER,
    SET_REGISTRATION_USER_SUCCESFULLY_CREATED,
} from "../../../redux/actionTypes";

export class RegistrationReducerState {
    user?: RegisterUserModel;
    userSuccesfullyCreated?: boolean;
}

export const initialState = new RegistrationReducerState();

const registrationReducer = (state: RegistrationReducerState = initialState, action: any): RegistrationReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_REGISTRATION_USER:
            return {
                ...state,
                user: payload,
            };
        case SET_REGISTRATION_USER_SUCCESFULLY_CREATED:
            return {
                ...state,
                userSuccesfullyCreated: payload,
            };
        default:
            return state;
    }
};

export default registrationReducer;
