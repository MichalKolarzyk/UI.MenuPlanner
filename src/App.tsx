import { useEffect, useState } from "react";
import ApiMenuPlanner from "./api/ApiMenuPlanner";
import Dish from "./components/dish/Dish";
import config from "./config.json";
import DishModel from "./models/DishModel";

function App() {
    const apiMenuPlanner = new ApiMenuPlanner(config.API_MENU_PLANNER_URL);
    const [dish, setDish] = useState<DishModel>();

    // useEffect(() => {
    //     apiMenuPlanner.getDish("627fa36e5435ede271d99fd5").then((value) => {
    //         console.log(value);
    //         setDish(value);
    //     });
    // }, []);


    return <div>{!!dish && <Dish dish={dish} />}</div>;
}

export default App;
