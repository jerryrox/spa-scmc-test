import { AsyncResponse } from "jrx-ts";
import LogoutApi from "./LogoutApi";
import { PublicClientApplication } from "@azure/msal-browser";

export default class AzureLogoutApi extends LogoutApi {
    constructor(
        private deps: {
            app: PublicClientApplication;
        },
    ) {
        super();
    }

    protected async requestInternal(): Promise<AsyncResponse<any>> {
        await this.deps.app.logoutRedirect();
        return AsyncResponse.success(undefined);
    }
}