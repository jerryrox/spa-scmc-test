import { BaseApi } from "jrx-ts";

export default abstract class RegisterApi extends BaseApi<string> {
    protected email: string | undefined;
    protected password: string | undefined;

    setEmailPassword(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}