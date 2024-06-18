import { Color } from "jrx-ts";
import VariantProvider from "./VariantProvider";
import { IApis, createFirebaseApiContainer } from "../../api/ApiContainer";
import { FirebaseApp, initializeApp } from "firebase/app";
import CloudType from "../../models/CloudType";
import { AwilixContainer } from "awilix";
import VariantType from "../../models/VariantType";

let firebaseApp: FirebaseApp | undefined;

export default class AlphaVariantProvider extends VariantProvider {
    private primaryCol = Color.hex("#c1996c");
    private apiContainer: AwilixContainer<IApis>;

    get appName(): string {
        return "Alpha App 💪";
    }

    get organizationName(): string {
        return "Alpha Org 💪";
    }

    get primaryColor(): Color {
        return this.primaryCol;
    }

    get variantType(): VariantType {
        return "alpha";
    }

    get cloudType(): CloudType {
        return "firebase";
    }

    get cloudApp(): any {
        return firebaseApp;
    }

    get apis(): AwilixContainer<IApis> {
        return this.apiContainer;
    }

    constructor() {
        super();
        if (firebaseApp === undefined) {
            firebaseApp = initializeApp({
                apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
                authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
                projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
                storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
                messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
                appId: import.meta.env.VITE_FIREBASE_APP_ID,
            });
        }
        this.apiContainer = createFirebaseApiContainer(firebaseApp);
    }
}