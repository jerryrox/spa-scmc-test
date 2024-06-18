import { BaseApi } from "jrx-ts";

export default abstract class DeleteItemApi extends BaseApi {
    protected itemId: string | undefined;

    get genericErrorMessage(): string {
        return "Failed to delete item.";
    }

    setItemId(itemId: string) {
        this.itemId = itemId;
    }
}