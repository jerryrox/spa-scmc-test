import { Color } from "jrx-ts";
import VariantProvider from "./VariantProvider";
import { IApis, createAzureApiContainer } from "../../api/ApiContainer";
import CloudType from "../../models/CloudType";
import { PublicClientApplication } from "@azure/msal-browser";
import { AwilixContainer } from "awilix";
import VariantType from "../../models/VariantType";

let azureApp: PublicClientApplication | undefined = undefined;

export default class BetaVariantProvider extends VariantProvider {
    private primaryCol = Color.hex("#ad5072");
    private apiContainer: AwilixContainer<IApis>;

    get appName(): string {
        return "Beta App 👍";
    }

    get organizationName(): string {
        return "Beta Org 👍";
    }

    get primaryColor(): Color {
        return this.primaryCol;
    }

    get variantType(): VariantType {
        return "beta";
    }

    get cloudType(): CloudType {
        return "azure";
    }

    get cloudApp(): any {
        return azureApp;
    }

    get apis(): AwilixContainer<IApis> {
        return this.apiContainer;
    }

    constructor() {
        super();
        if(azureApp === undefined) {
            azureApp = new PublicClientApplication({
                auth: {
                    clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
                    authority: import.meta.env.VITE_AZURE_AUTHORITY,
                    redirectUri: import.meta.env.VITE_AZURE_REDIRECT_URI,
                },
                cache: {
                    cacheLocation: "localStorage",
                    storeAuthStateInCookie: true,
                },
            });
        }
        this.apiContainer = createAzureApiContainer(azureApp);
    }
}