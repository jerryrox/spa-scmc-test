import { ModelConverter } from "jrx-ts";
import { IItem, ItemFactory } from "./IItem";

export default class ItemConverter extends ModelConverter<IItem> {

    toModel(id: string, data: any): IItem {
        return ItemFactory.new({
            id,
            name: this.decodeString(data.name),
            price: this.decodeFloat(data.price),
            createdAt: this.decodeDate(data.createdAt),
        });
    }

    toPlain(model: IItem): Record<string, any> {
        return {
            name: this.encodeString(model.name),
            price: this.encodeNumber(model.price),
            createdAt: this.encodeDate(model.createdAt),
        };
    }
}