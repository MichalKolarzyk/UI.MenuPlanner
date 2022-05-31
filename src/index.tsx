import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Card, { CardColors } from "./components/ui/containers/cards/card/Card";
import { store } from "./redux";
import { Provider } from "react-redux";
import Label, { LabelSize } from "./components/ui/labels/label/Label";
import Login from "./components/business/Login";
import Recipes from "./components/business/Recipes";
import Recipe from "./components/business/Recipe";
import Registration from "./components/business/Registration";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="" element={<Card><Label bold size={LabelSize.large}>Main</Label><Outlet/></Card>}>
                        <Route path="recipes" element={<Recipes/>} >
                            <Route path=":recipeId" element={<Recipe/>} />
                        </Route>
                        <Route path="teams" element={<Card color={CardColors.green}>Teams<Outlet/></Card>}>
                            <Route path=":id" element={<Card color={CardColors.green}>Team</Card>} />
                            <Route path="new" element={<Card color={CardColors.green}>New team form</Card>} />
                            {false && <Route index element={<Card color={CardColors.green}>Settings</Card>} />}
                        </Route>
                        <Route path="*" element={<Card color={CardColors.white}>Nothing here</Card>}/>
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
