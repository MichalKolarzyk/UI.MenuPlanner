import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Card, { CardColors } from "./components/ui/containers/cards/card/Card";
import { store } from "./redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const app = <Provider store={store}><App/></Provider>

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Card color={CardColors.green}>Main<Outlet/></Card>}>
                    <Route index element={app}/>
                    <Route path="home" element={<Card color={CardColors.grey}>Home</Card>} />
                    <Route path="teams" element={<Card color={CardColors.green}>Teams<Outlet/></Card>}>
                        <Route path=":teamId" element={<Card color={CardColors.green}>Team</Card>} />
                        <Route path="new" element={<Card color={CardColors.green}>New team form</Card>} />
                        {false && <Route index element={<Card color={CardColors.green}>Settings</Card>} />}
                    </Route>
                    <Route path="*" element={<Card color={CardColors.white}>Nothing here</Card>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
