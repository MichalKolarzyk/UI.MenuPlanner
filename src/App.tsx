import { stat } from "fs";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux";
import { UserReducerState } from "./redux/reducers/user.reducer";
import { setUser } from "./redux/userActions";
function App() {
    const dispach = useDispatch();

    useEffect(() => {
        const user = new UserReducerState()
        dispach(setUser({
            userFirstName: "Michal123",
            userId: "12",
            userLastName: "ds",
            userLogin: "Michal",
        }))
    }, [])
    const userName = useSelector<RootState, string>(state => state.userReducer.userFirstName);
    console.log(userName);
    return <div>{userName}</div>
}

export default App;
