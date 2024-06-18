/* eslint-disable @typescript-eslint/no-explicit-any */

import { AwilixContainer, asClass, createContainer } from "awilix";
import LoginApi from "./login/LoginApi";
import FirebaseLoginApi from "./login/FirebaseLoginApi";
import FirebaseAutoLoginApi from "./login/FirebaseAutoLoginApi";
import AddItemApi from "./addItem/AddItemApi";
import DeleteItemApi from "./deleteItem/DeleteItemApi";
import GetItemsApi from "./getItems/GetItemsApi";
import LogoutApi from "./logout/LogoutApi";
import FirebaseAddItemApi from "./addItem/FirebaseAddItemApi";
import FirebaseDeleteItemApi from "./deleteItem/FirebaseDeleteItemApi";
import FirebaseGetItemsApi from "./getItems/FirebaseGetItemsApi";
import FirebaseLogoutApi from "./logout/FirebaseLogoutApi";
import RegisterApi from "./register/RegisterApi";
import FirebaseRegisterApi from "./register/FirebaseRegisterApi";

export interface IApis {
    addItem: AddItemApi;
    deleteItem: DeleteItemApi;
    getItems: GetItemsApi;
    login: LoginApi;
    autoLogin: LoginApi;
    logout: LogoutApi;
    register: RegisterApi;
}

export function createFirebaseApiContainer(): AwilixContainer<IApis> {
    const container = createContainer<IApis>({
        injectionMode: "PROXY",
        strict: true,
    });
    container.register({
        addItem: asClass(FirebaseAddItemApi).transient(),
        deleteItem: asClass(FirebaseDeleteItemApi).transient(),
        getItems: asClass(FirebaseGetItemsApi).transient(),
        login: asClass(FirebaseLoginApi).transient(),
        autoLogin: asClass(FirebaseAutoLoginApi).transient(),
        logout: asClass(FirebaseLogoutApi).transient(),
        register: asClass(FirebaseRegisterApi).transient(),
    });
    return container;
}