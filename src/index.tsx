import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import LoginListener from "./listeners/LoginListener";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <LoginListener>
                <AppRouter />
            </LoginListener>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
