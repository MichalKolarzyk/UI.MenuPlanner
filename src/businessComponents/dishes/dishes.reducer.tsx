import { apiMenuPlanner } from "../../api";
import { DishModel, UserModel } from "../../api/models";
import { DishRequest } from "../../api/requests";
import { RootState } from "../../redux";
import { SET_DISHES, SET_DISHES_USERS } from "../../redux/actionTypes";

export class DishesReducerState {
    dishes?: Array<DishModel>;
    users?: Array<UserModel>;
    numberOfDays?: number = 7;
}

export const initialState = new DishesReducerState();

const dishesReducer = (state: DishesReducerState = initialState, action: any): DishesReducerState => {
    const { payload, type } = action;
    switch (type) {
        case SET_DISHES:
            return {
                ...state,
                dishes: payload,
            };
        case SET_DISHES_USERS:
            return {
                ...state,
                users: payload,
            };
        default:
            return state;
    }
};

export const setDishes = (dishes: Array<DishModel>) => {
    return{
        type: SET_DISHES,
        payload: dishes,
    }
}

export const setDishesUsers = (users: Array<UserModel>) => {
    return{
        type: SET_DISHES_USERS,
        payload: users,
    }
}

export const fetchDishes = () => {
    return async (dispach: any, getState: () => RootState) => {
        const userId = getState().user?.user?.id
        const request: DishRequest = {
            numberOfDays: getState().dishes.numberOfDays,
            userIds: [
                userId ?? ""
            ]
        };
        const response = await apiMenuPlanner.getDishes(request);

        dispach(setDishes(response.data));
    };
}

export default dishesReducer;
