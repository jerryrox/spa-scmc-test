import { Timestamp } from "firebase/firestore";
import { JrxStringUtils, ModelConverter } from "jrx-ts";

class FirestoreUtils {

    adjustConverter<T extends object>(converter: ModelConverter<T>) {
        converter.encodeDate = (date: Date) => {
            return Timestamp.fromDate(date);
        };

        const baseDecodeDate = converter.decodeDate;
        converter.decodeDate = (date: unknown) => {
            if(date instanceof Timestamp) {
                return date.toDate();
            }
            return baseDecodeDate(date);
        };

        for (const subconverter of converter.subconverters) {
            this.adjustConverter(subconverter);
        }
    }
    
    itemPath(itemId?: string) {
        return this.combinePath("items", itemId);
    }

    private combinePath(...segments: (string | undefined)[]) {
        return JrxStringUtils.combine(
            segments,
            {
                separator: "/",
            }
        );
    }
}
export default new FirestoreUtils();