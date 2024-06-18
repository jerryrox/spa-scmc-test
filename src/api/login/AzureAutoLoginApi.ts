import { AsyncResponse, JrxPromiseUtils } from "jrx-ts";
import LoginApi from "./LoginApi";
import { PublicClientApplication } from "@azure/msal-browser";

export default class AzureAutoLoginApi extends LoginApi {
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
        for (let i = 0; i < 6; i++) {
            await JrxPromiseUtils.wait(1000);
            const account = this.deps.app.getActiveAccount();
            if (account !== null) {
                return AsyncResponse.success(account.username);
            }
        }
        return AsyncResponse.failed("Auto login timed out");
    }
}