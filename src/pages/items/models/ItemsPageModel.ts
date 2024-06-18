import { Bindable } from "jrx-ts";
import VariantProvider from "../../../providers/variants/VariantProvider";
import { IItem, ItemFactory } from "../../../models/IItem";
import { enqueueSnackbar } from "notistack";

interface IDeps {
    variantProvider: VariantProvider;
}

export default class ItemsPageModel {
    readonly items = new Bindable<IItem[]>([]);
    readonly loadingItems = new Bindable(false);

    readonly nameFilter = new Bindable("");
    readonly limit = new Bindable("0");
    readonly isDescending = new Bindable(false);

    readonly newItemName = new Bindable("");
    readonly newItemPrice = new Bindable("0");

    constructor(
        private deps: IDeps
    ) {
    }

    init() {
        this.loadingItems.value = false;

        this.nameFilter.value = "";
        this.limit.value = "0";
        this.isDescending.value = false;

        this.newItemName.value = "";
        this.newItemPrice.value = "0";

        this.loadItems();
    }

    async loadItems() {
        this.loadingItems.value = true;

        const limit = this.parseNumber(this.limit.value);
        if (limit === undefined) {
            this.loadingItems.value = false;
            enqueueSnackbar({
                message: "Invalid limit value",
                variant: "error",
            });
            return;
        }

        const api = this.deps.variantProvider.getApi("getItems");
        api.setOptions({
            name: this.nameFilter.value,
            limit: limit <= 0 ? undefined : limit,
            descending: this.isDescending.value,
        });

        const response = await api.request();
        if (!response.isSuccess) {
            console.log(response);
            this.loadingItems.value = false;
            enqueueSnackbar({
                message: "Failed to load items",
                variant: "error",
            });
            return;
        }

        this.items.value = response.value!;

        this.loadingItems.value = false;
    }

    async deleteItem(item: IItem) {
        const api = this.deps.variantProvider.getApi("deleteItem");
        api.setItemId(item.id);

        const response = await api.request();
        if (response.isSuccess) {
            this.items.value = this.items.value.filter((i) => i.id !== item.id);
            enqueueSnackbar({
                message: "Item deleted successfully!",
                variant: "success",
            });
        }
        else {
            enqueueSnackbar({
                message: "Failed to delete item",
                variant: "error",
            });
        }
    }

    async addItem() {
        const price = this.parseNumber(this.newItemPrice.value);
        if (price === undefined) {
            enqueueSnackbar({
                message: "Invalid price value",
                variant: "error",
            });
            return;
        }
        
        const api = this.deps.variantProvider.getApi("addItem");
        api.setItem(ItemFactory.new({
            id: "",
            createdAt: new Date(),
            name: this.newItemName.value,
            price,
        }));

        const response = await api.request();
        if (response.isSuccess) {
            this.newItemName.value = "";
            this.newItemPrice.value = "0";
            this.loadItems();
            enqueueSnackbar({
                message: "Item added successfully!",
                variant: "success",
            });
        }
        else {
            enqueueSnackbar({
                message: "Failed to add item",
                variant: "error",
            });
        }
    }

    private parseNumber(str: string): number | undefined {
        try {
            const value = parseInt(str);
            if (isNaN(value)) {
                return undefined;
            }
            return value;
        }
        catch (e: any) {
            return undefined;
        }
    }
}