import { BaseApi } from "jrx-ts";

export default abstract class DeleteItemApi extends BaseApi {
    protected itemId: string | undefined;

    setItemId(itemId: string) {
        this.itemId = itemId;
    }
}