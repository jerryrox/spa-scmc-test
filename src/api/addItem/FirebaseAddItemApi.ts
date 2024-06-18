import { AsyncResponse } from "jrx-ts";
import { IItem } from "../../models/IItem";
import AddItemApi from "./AddItemApi";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import FirestoreUtils from "../../utils/FirestoreUtils";
import { v4 } from "uuid";

export default class FirebaseAddItemApi extends AddItemApi {
    get genericErrorMessage(): string {
        return "Failed to add item";
    }

    constructor() {
        super();
        FirestoreUtils.adjustConverter(this.converter);
    }

    protected async requestInternal(): Promise<AsyncResponse<IItem>> {
        if(this.item === undefined) {
            return AsyncResponse.failed("Item is not specified");
        }

        const d = doc(getFirestore(), FirestoreUtils.itemPath(v4()));
        await setDoc(d, this.converter.toPlain(this.item));

        return AsyncResponse.success(this.item);
    }
}