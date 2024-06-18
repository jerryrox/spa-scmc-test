import { PublicClientApplication } from "@azure/msal-browser";
import LoginApi from "./LoginApi";
import { AsyncResponse } from "jrx-ts";

export default class AzureLoginApi extends LoginApi {
    get genericErrorMessage(): string {
        return "Failed to log in.";
    }

    constructor(
        private deps: {
            app: PublicClientApplication;
        },
    ) {
        super();
    }

    protected async requestInternal(): Promise<AsyncResponse<string>> {
        const result = await this.deps.app.loginPopup({
            scopes: ["user.read"],
        });
        return AsyncResponse.success(result.account.username);
    }
}