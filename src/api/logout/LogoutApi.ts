import { BaseApi } from "jrx-ts";

export default abstract class LogoutApi extends BaseApi {
    get genericErrorMessage(): string {
        return "Failed to log out.";
    }
}