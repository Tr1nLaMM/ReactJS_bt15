import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BookProvider } from './context/book'
import { UserProvider } from "./context/user";
const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);


root.render(
    <UserProvider>
        <BookProvider>
            <App />
        </BookProvider>
    </UserProvider>
);