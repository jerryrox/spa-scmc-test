import CloudType from "../models/CloudType";
import VariantType from "../models/VariantType";

class EnvUtils {
    readonly cloudType: CloudType;
    readonly variantType: VariantType;

    constructor() {
        this.cloudType = import.meta.env.VITE_CLOUD_TYPE as CloudType;
        this.variantType = import.meta.env.VITE_VARIANT_TYPE as VariantType;
    }
}
export default new EnvUtils();