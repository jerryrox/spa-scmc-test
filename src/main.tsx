import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/App.tsx"
import { HashRouter } from "react-router-dom";
import "normalize.css";
import { SnackbarProvider } from "notistack";
import { getDependency } from "./deps/Dependencies.ts";
import { MsalProvider } from "@azure/msal-react";

const variantProvider = getDependency("variantProvider");

const drawApp = () => {
    if (variantProvider.cloudType === "azure") {
        return (
            <MsalProvider instance={variantProvider.cloudApp}>
                <App/>
            </MsalProvider>
        );
    }
    return (
        <App/>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HashRouter>
            <SnackbarProvider/>
            {drawApp()}
        </HashRouter>
    </React.StrictMode>,
)
