/// <reference types="vite/client" />

/*
In practice, these variables should be injected from the CI/CD pipeline.
*/

interface ImportMetaEnv {
    readonly VITE_VARIANT_TYPE: STRING;

    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_FIREBASE_STORAGE_BUCKET: string;
    readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;

    readonly VITE_AZURE_CLIENT_ID: string;
    readonly VITE_AZURE_AUTHORITY: string;
    readonly VITE_AZURE_REDIRECT_URI: string;
    readonly VITE_AZURE_COSMOS_URI: string;
    readonly VITE_AZURE_COSMOS_KEY: string;
}