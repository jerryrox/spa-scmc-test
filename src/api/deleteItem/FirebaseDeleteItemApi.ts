import { AsyncResponse } from "jrx-ts";
import DeleteItemApi from "./DeleteItemApi";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import FirestoreUtils from "../../utils/FirestoreUtils";

export default class FirebaseDeleteItemApi extends DeleteItemApi {
    get genericErrorMessage(): string {
        return "Failed to delete item";
    }

    protected async requestInternal(): Promise<AsyncResponse> {
        if (this.itemId === undefined) {
            return AsyncResponse.failed("Item id is not specified");
        }

        const d = doc(getFirestore(), FirestoreUtils.itemPath(this.itemId));
        await deleteDoc(d);

        return AsyncResponse.success(undefined);
    }
}