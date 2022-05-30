import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux";
import DishModel from "./models/DishModel";
import Dish from "./components/dish/Dish";
import { fetchDish } from "./redux/actions/dishActions";
function App() {
    const dispach = useDispatch<AppDispatch>();

    useEffect(() => {
        dispach(fetchDish("627fa36e5435ede271d99fd5"));
    }, [dispach]);

    const dish = useSelector<RootState, DishModel | undefined>((state) => state.dish.dish);
    console.log(dish);

    return <Dish dish={dish}></Dish>;
}

export default App;
