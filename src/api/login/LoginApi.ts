import { BaseApi } from "jrx-ts";

export default abstract class LoginApi extends BaseApi<string> {
    protected email = "";
    protected password = "";

    setCredential(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}