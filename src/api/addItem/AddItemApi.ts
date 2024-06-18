import { BaseApi } from "jrx-ts";
import { IItem } from "../../models/IItem";
import ItemConverter from "../../models/ItemConverter";

export default abstract class AddItemApi extends BaseApi<IItem> {
    protected converter = new ItemConverter();
    protected item: IItem | undefined;

    get genericErrorMessage(): string {
        return "Failed to add item.";
    }

    setItem(item: IItem) {
        this.item = item;
    }
}