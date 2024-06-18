import { AsyncResponse } from "jrx-ts";
import { IItem } from "../../models/IItem";
import GetItemsApi from "./GetItemsApi";
import { collection, getDocs, getFirestore, limit, orderBy, query, where } from "firebase/firestore";
import FirestoreUtils from "../../utils/FirestoreUtils";

export default class FirebaseGetItemsApi extends GetItemsApi {
    constructor() {
        super();
        FirestoreUtils.adjustConverter(this.converter);
    }

    protected async requestInternal(): Promise<AsyncResponse<IItem[]>> {
        const q = query(
            collection(getFirestore(), FirestoreUtils.itemPath()),
            ...(this.options.name ? [where("name", "==", this.options.name)] : []),
            ...(this.options.limit ? [limit(this.options.limit)] : []),
            ...(this.options.descending !== undefined ? [orderBy("createdAt", this.options.descending ? "desc" : "asc")] : []),
        );
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map((d) => this.converter.toModel(d.id, d.data()));

        return AsyncResponse.success(items);
    }
}