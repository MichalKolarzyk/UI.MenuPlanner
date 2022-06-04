import { UPDATE_STEP } from "../../redux/actionTypes";

export const updateStep = (index: number, value: string) => {
    return {
        type: UPDATE_STEP,
        payload: { index: index, value: value },
    };
};