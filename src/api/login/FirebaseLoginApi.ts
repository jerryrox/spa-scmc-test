import { AsyncResponse } from "jrx-ts";
import LoginApi from "./LoginApi";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class FirebaseLoginApi extends LoginApi {
    get genericErrorMessage(): string {
        return "Failed to login";
    }

    protected async requestInternal(): Promise<AsyncResponse<string>> {
        const credential = await signInWithEmailAndPassword(getAuth(), this.email, this.password);
        return AsyncResponse.success(credential.user.uid);
    }
}