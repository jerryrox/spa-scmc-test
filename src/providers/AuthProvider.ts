import { AsyncResponse, Bindable } from "jrx-ts";
import VariantProvider from "./variants/VariantProvider";

interface IDeps {
    variantProvider: VariantProvider;
}

export default class AuthProvider {
    readonly uid = new Bindable<string | undefined>(undefined);
    readonly isLoggedIn = new Bindable<boolean>(false);

    constructor(
        private readonly deps: IDeps,
    ) {
        this.uid.bind((value) => {
            this.isLoggedIn.value = value !== undefined;
        });
    }

    async autoLogin(): Promise<AsyncResponse<string>> {
        const response = await this.deps.variantProvider.getApi("autoLogin").request();
        if (response.isSuccess) {
            this.uid.value = response.value!;
        }
        return response;
    }

    async login(email: string, password: string): Promise<AsyncResponse<string>> {
        const api = this.deps.variantProvider.getApi("login");
        api.setCredential(email, password);
        
        const response = await api.request();
        if (response.isSuccess) {
            this.uid.value = response.value!;
        }
        return response;
    }

    async logout(): Promise<AsyncResponse<void>> {
        const response = await this.deps.variantProvider.getApi("logout").request();
        if (response.isSuccess) {
            this.uid.value = undefined;
        }
        return response;
    }

    async register(email: string, password: string): Promise<AsyncResponse> {
        const api = this.deps.variantProvider.getApi("register");
        api.setEmailPassword(email, password);

        const response = await api.request();
        if (response.isSuccess) {
            this.uid.value = response.value!;
        }
        return response;
    }
}