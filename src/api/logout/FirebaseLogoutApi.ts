import { AsyncResponse } from "jrx-ts";
import LogoutApi from "./LogoutApi";
import { getAuth, signOut } from "firebase/auth";

export default class FirebaseLogoutApi extends LogoutApi {
    get genericErrorMessage(): string {
        return "Failed to sign out";
    }

    protected async requestInternal(): Promise<AsyncResponse> {
        await signOut(getAuth());
        return AsyncResponse.success(undefined);
    }
}