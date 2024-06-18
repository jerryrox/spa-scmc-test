import { Bindable } from "jrx-ts";
import AuthProvider from "../../../providers/AuthProvider";
import { enqueueSnackbar } from "notistack";
import { NavigateFunction } from "react-router-dom";
import NavUtils from "../../../utils/NavUtils";

interface IDeps {
    authProvider: AuthProvider;
}

export default class LoginPageModel {
    readonly email = new Bindable("");
    readonly password = new Bindable("");

    constructor(
        private readonly deps: IDeps,
    ) {
    }

    init() {
        this.email.value = "";
        this.password.value = "";
    }

    async login(navigate: NavigateFunction) {
        const response = await this.deps.authProvider.login(
            this.email.value,
            this.password.value
        );
        if (response.isSuccess) {
            enqueueSnackbar({
                message: "Logged in successfully!",
                variant: "success",
            });
            navigate(NavUtils.homePath());
        }
        else {
            enqueueSnackbar({
                message: response.message,
                variant: "error",
            });
        }
    }

    async register(navigate: NavigateFunction) {
        const response = await this.deps.authProvider.register(
            this.email.value,
            this.password.value
        );
        if (response.isSuccess) {
            enqueueSnackbar({
                message: "Registered and logged in successfully!",
                variant: "success",
            });
            navigate(NavUtils.homePath());
        }
        else {
            console.log(response);
            enqueueSnackbar({
                message: response.message,
                variant: "error",
            });
        }
    }
}