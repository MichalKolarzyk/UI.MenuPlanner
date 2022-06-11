import { ErrorModel } from "../../api/models";
import { SET_API_ERROR, SET_API_IS_LOADING } from "../../redux/actionTypes";

export class ApiReducerState {
    error?: ErrorModel;
    isLoading?: boolean;
}

export const initialState = new ApiReducerState();

const apiReducer = (state: ApiReducerState = initialState, action: any): ApiReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_API_ERROR:
            return {
                ...state,
                error: payload,
            };
        case SET_API_IS_LOADING:
            return {
                ...state,
                isLoading: payload,
            };
        default:
            return state;
    }
};

export const setApiIsLoading = (isLoading: boolean) => {
    return {
        type: SET_API_IS_LOADING,
        payload: isLoading,
    };
};

export const setApiError = (error?: any) => {
    let errorModel: ErrorModel | undefined;

    console.log(error);
    if (!error) {
        errorModel = undefined;
    } else if (!error.response) {
        errorModel = {
            title: "Tmieout",
            detail: "The server is not responding",
        };
    } else if (!error.response.data) {
        errorModel = {
            status: error.response.status,
        };
    } else {
        errorModel = error.response.data;
    }
    return {
        type: SET_API_ERROR,
        payload: errorModel,
    };
};

export default apiReducer;
