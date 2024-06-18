import "react";
import { Route, Routes } from "react-router-dom";
import NavUtils from "../utils/NavUtils";
import HomePage from "../pages/home/HomePage";
import ItemsPage from "../pages/items/ItemsPage";
import LoginPage from "../pages/login/LoginPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={NavUtils.homePath()} Component={HomePage}/>
            <Route path={NavUtils.itemsPath()} Component={ItemsPage}/>
            <Route path={NavUtils.loginPath()} Component={LoginPage}/>
        </Routes>
    );
};
export default AppRouter;