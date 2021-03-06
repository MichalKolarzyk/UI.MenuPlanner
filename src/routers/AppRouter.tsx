import { BrowserRouter, Routes, Route } from "react-router-dom";
import DishDay from "../businessComponents/dishDay/DishDay";
import Dishes from "../businessComponents/dishes/Dishes";
import EditStep from "../businessComponents/editStep/EditStep";
import Login from "../businessComponents/login/Login";
import Main from "../businessComponents/main/Main";
import NewRecipe from "../businessComponents/newRecipe/NewRecipe";
import Profile from "../businessComponents/profile/Profile";
import RecipeController from "../businessComponents/recipe/RecipeController";
import Recipes from "../businessComponents/recipes/Recipes";
import Registration from "../businessComponents/registration/Registration";
import Card, { CardColors } from "../ui/containers/cards/Card";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route path="/" element={<Main />}>
                    <Route path="dishes" element={<Dishes />}>
                        <Route path=":day" element={<DishDay />} />
                    </Route>
                    <Route path="recipes" element={<Recipes />}>
                        <Route path="newRecipe" element={<NewRecipe />} />
                    </Route>
                    <Route path="recipes/:recipeId" element={<RecipeController />}>
                        <Route path="step/:stepIndex" element={<EditStep />} />
                    </Route>
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<Card color={CardColors.white}>Nothing here</Card>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
