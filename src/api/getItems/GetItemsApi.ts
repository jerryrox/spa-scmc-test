import { BaseApi } from "jrx-ts";
import { IItem } from "../../models/IItem";
import ItemConverter from "../../models/ItemConverter";

interface IOptions {
    name?: string;
    limit?: number;
    descending?: boolean;
}

export default abstract class GetItemsApi extends BaseApi<IItem[]> {
    protected converter = new ItemConverter();
    protected options: IOptions = {};

    get genericErrorMessage(): string {
        return "Failed to get items.";
    }

    setOptions(options: IOptions) {
        this.options = options;
    }
}