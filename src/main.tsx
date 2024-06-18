import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/App.tsx"
import { HashRouter } from "react-router-dom";
import "normalize.css";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HashRouter>
            <SnackbarProvider/>
            <App />
        </HashRouter>
    </React.StrictMode>,
)
