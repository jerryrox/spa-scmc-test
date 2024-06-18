import { AsyncResponse } from "jrx-ts";
import RegisterApi from "./RegisterApi";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default class FirebaseRegisterApi extends RegisterApi {
    protected async requestInternal(): Promise<AsyncResponse<string>> {
        if (this.email === undefined) {
            return AsyncResponse.failed("Email is not set.");
        }
        if (this.password === undefined) {
            return AsyncResponse.failed("Password is not set.");
        }

        const credential = await createUserWithEmailAndPassword(
            getAuth(),
            this.email!,
            this.password!,
        );
        return AsyncResponse.success(credential.user.uid);
    }
}