import { AsyncResponse } from "jrx-ts";
import DeleteItemApi from "./DeleteItemApi";
import CosmosDB from "../CosmosDB";
import CosmosUtils from "../../utils/CosmosUtils";

export default class AzureDeleteItemApi extends DeleteItemApi {
    protected async requestInternal(): Promise<AsyncResponse<any>> {
        if (this.itemId === undefined) {
            return AsyncResponse.failed("Item id is not specified");
        }

        const db = new CosmosDB();
        const item = db.getContainer(CosmosUtils.itemsContainer).item(this.itemId, this.itemId);
        console.log(await item.read());
        await item.delete();

        return AsyncResponse.success(undefined);
    }
}