import { useSelector } from "react-redux";
import { RootState } from "../redux";

export const IfUserLoggedIn = (props: ConfitionalProps) => {
    const userIsLogged = useSelector<RootState, boolean | undefined>((state) => state.user.isLogged);
    const conditionFulfilled = userIsLogged;
    return <>{conditionFulfilled && props.children}</>;
};

export const IfUserNotLoggedIn = (props: ConfitionalProps) => {
    const userIsLogged = useSelector<RootState, boolean | undefined>((state) => state.user.isLogged);
    const conditionFulfilled = !userIsLogged;
    return <>{conditionFulfilled && props.children}</>;
};

export interface ConfitionalProps {
    children: any;
}
