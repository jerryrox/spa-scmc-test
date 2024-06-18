import { AsyncResponse } from "jrx-ts";
import CosmosDB from "../CosmosDB";
import AddItemApi from "./AddItemApi";
import CosmosUtils from "../../utils/CosmosUtils";
import { IItem } from "../../models/IItem";
import { v4 } from "uuid";

export default class AzureAddItemApi extends AddItemApi {
    protected async requestInternal(): Promise<AsyncResponse<IItem>> {
        if (this.item === undefined) {
            return AsyncResponse.failed("Item is not specified");
        }

        this.item.id = v4();

        const db = new CosmosDB();
        await db.getContainer(CosmosUtils.itemsContainer).items.create(
            this.converter.toPlain(this.item)
        );

        return AsyncResponse.success(this.item);
    }
}