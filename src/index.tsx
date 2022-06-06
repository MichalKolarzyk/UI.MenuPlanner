import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Card, { CardColors } from "./ui/containers/cards/card/Card";
import { store } from "./redux";
import { Provider } from "react-redux";
import Login from "./businessComponents/login/Login";
import Recipes from "./businessComponents/recipes/Recipes";
import Recipe from "./businessComponents/recipe/Recipe";
import Registration from "./businessComponents/registration/Registration";
import Main from "./businessComponents/main/Main";
import EditStep from "./businessComponents/editStep/EditStep";
import NewRecipe from "./businessComponents/newRecipe/NewRecipe";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="" element={<Main />}>
                        <Route path="recipes" element={<Recipes />}>
                            <Route path="newRecipe" element={<NewRecipe />} />
                        </Route>
                        <Route path="recipes/:recipeId" element={<Recipe />}>
                            <Route path="step/:stepIndex" element={<EditStep />} />
                        </Route>

                        <Route
                            path="teams"
                            element={
                                <Card color={CardColors.green}>
                                    Teams
                                    <Outlet />
                                </Card>
                            }
                        >
                            <Route path=":id" element={<Card color={CardColors.green}>Team</Card>} />
                            <Route path="new" element={<Card color={CardColors.green}>New team form</Card>} />
                            {false && <Route index element={<Card color={CardColors.green}>Settings</Card>} />}
                        </Route>
                        <Route path="*" element={<Card color={CardColors.white}>Nothing here</Card>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
