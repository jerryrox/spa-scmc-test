/* eslint-disable @typescript-eslint/no-explicit-any */

import { AwilixContainer, asClass, asValue, createContainer } from "awilix";
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
import AzureLogoutApi from "./logout/AzureLogoutApi";
import AzureLoginApi from "./login/AzureLoginApi";
import AzureAutoLoginApi from "./login/AzureAutoLoginApi";
import AzureAddItemApi from "./addItem/AzureAddItemApi";
import AzureDeleteItemApi from "./deleteItem/AzureDeleteItemApi";
import AzureGetItemsApi from "./getItems/AzureGetItemsApi";

export interface IApis {
    app: any;

    addItem: AddItemApi;
    deleteItem: DeleteItemApi;
    getItems: GetItemsApi;
    login: LoginApi;
    autoLogin: LoginApi;
    logout: LogoutApi;
    register: RegisterApi;
}

export function createFirebaseApiContainer(app: any): AwilixContainer<IApis> {
    const container = createContainer<IApis>({
        injectionMode: "PROXY",
        strict: true,
    });
    container.register({
        app: asValue(app),

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

export function createAzureApiContainer(app: any): AwilixContainer<IApis> {
    const container = createContainer<IApis>({
        injectionMode: "PROXY",
        strict: true,
    });
    container.register({
        app: asValue(app),

        addItem: asClass(AzureAddItemApi).transient(),
        deleteItem: asClass(AzureDeleteItemApi).transient(),
        getItems: asClass(AzureGetItemsApi).transient(),
        login: asClass(AzureLoginApi).transient(),
        autoLogin: asClass(AzureAutoLoginApi).transient(),
        logout: asClass(AzureLogoutApi).transient(),
    });
    return container;
}