import { CosmosClient, Database } from "@azure/cosmos";
import CosmosUtils from "../utils/CosmosUtils";

export default class CosmosDB {
    readonly client = new CosmosClient({
        endpoint: import.meta.env.VITE_AZURE_COSMOS_URI,
        key: import.meta.env.VITE_AZURE_COSMOS_KEY,
    });

    get database(): Database {
        return this.client.database(CosmosUtils.dbId);
    }

    getContainer(containerId: string) {
        return this.database.container(containerId);
    }

    getItem(containerId: string, itemId: string) {
        return this.getContainer(containerId).item(itemId);
    }
}