import DishModel from "../../models/DishModel";
import { SET_DISH } from "../actionTypes";

export class DishReducerState {
    dishes?: Array<DishModel>;
    dish?: DishModel;
}

export const initialState = new DishReducerState();

const dishReducer = (state: DishReducerState = initialState, action: any) : DishReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_DISH:
            const newState = {...state};
            newState.dish = payload
            return newState;
        default:
            return state;
    }
};

export default dishReducer;
