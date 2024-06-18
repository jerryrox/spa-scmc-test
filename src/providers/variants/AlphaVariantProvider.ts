import { Color } from "jrx-ts";
import VariantProvider from "./VariantProvider";
import { createFirebaseApiContainer } from "../../api/ApiContainer";
import { initializeApp } from "firebase/app";

export default class AlphaVariantProvider extends VariantProvider {
    private primaryCol = Color.hex("#c1996c");
    private apiContainer = createFirebaseApiContainer();

    get appName() {
        return "Alpha App 💪";
    }

    get organizationName() {
        return "Alpha Org 💪";
    }

    get primaryColor() {
        return this.primaryCol;
    }

    get apis() {
        return this.apiContainer;
    }

    constructor() {
        super();
        initializeApp({
            apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
            authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
            projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
            storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
            appId: import.meta.env.VITE_FIREBASE_APP_ID,
        });
    }
}