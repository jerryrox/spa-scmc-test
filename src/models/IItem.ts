export class ItemFactory {
    private constructor() {} // eslint-disable-line

    static new(fields: IItemField): IItem {
        const model: IItem = {
            ...fields,
        };
        return model;
    }
}
interface IItemField {
    id: string;
    name: string;
    price: number;
    createdAt: Date;
}
export interface IItem extends IItemField { // eslint-disable-line
    
}