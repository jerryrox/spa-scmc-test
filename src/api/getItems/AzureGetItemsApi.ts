import { AsyncResponse } from "jrx-ts";
import { IItem } from "../../models/IItem";
import GetItemsApi from "./GetItemsApi";
import CosmosDB from "../CosmosDB";
import CosmosUtils from "../../utils/CosmosUtils";

export default class AzureGetItemsApi extends GetItemsApi {
    
    protected async requestInternal(): Promise<AsyncResponse<IItem[]>> {
        const db = new CosmosDB();

        const response = await db.getContainer(CosmosUtils.itemsContainer).items.query(this.getSQL()).fetchAll();
        const items = response.resources.map((data) => (
            this.converter.toModel(data.id, data)
        ));

        return AsyncResponse.success(items);
    }

    // Security risk 😂
    private getSQL(): string {
        const container = CosmosUtils.itemsContainer;
        let sql = `SELECT * FROM ${container}`;

        if (this.options.name) {
            sql += ` WHERE ${container}.name = "${this.options.name}"`;
        }
        if (this.options.descending !== undefined) {
            sql += ` ORDER BY ${container}.createdAt ${this.options.descending ? "DESC" : "ASC"}`;
        }
        if (this.options.limit && this.options.limit > 0) {
            sql += ` OFFSET 0 LIMIT ${this.options.limit}`;
        }

        return sql;
    }
}