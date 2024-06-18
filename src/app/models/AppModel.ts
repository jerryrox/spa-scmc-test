import AuthProvider from "../../providers/AuthProvider";
import { enqueueSnackbar } from "notistack";

interface IDeps {
    authProvider: AuthProvider;
}

export default class AppModel {
    constructor(
        private readonly deps: IDeps,
    ) {
    }

    async logout() {
        const response = await this.deps.authProvider.logout();
        if (response.isSuccess) {
            enqueueSnackbar({
                message: "Logged out successfully",
                variant: "success",
            });
        }
        else {
            enqueueSnackbar({
                message: response.message,
                variant: "error",
            });
        }
    }
}