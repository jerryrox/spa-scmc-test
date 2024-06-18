import { AsyncResponse, JrxPromiseUtils } from "jrx-ts";
import LoginApi from "./LoginApi";
import { getAuth } from "firebase/auth";

export default class FirebaseAutoLoginApi extends LoginApi {
    get genericErrorMessage(): string {
        return "Failed to auto login";
    }
    
    protected async requestInternal(): Promise<AsyncResponse<string>> {
        for (let i = 0; i < 6; i++) {
            await JrxPromiseUtils.wait(1000);
            const user = getAuth().currentUser;
            if (user !== null) {
                return AsyncResponse.success(user.uid);
            }
        }
        return AsyncResponse.failed("Auto login timed out");
    }
}