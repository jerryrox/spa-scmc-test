import { AwilixContainer } from "awilix";
import { Color } from "jrx-ts";
import { IApis } from "../../api/ApiContainer";
import CloudType from "../../models/CloudType";
import VariantType from "../../models/VariantType";

export default abstract class VariantProvider {
    abstract get appName(): string;

    abstract get organizationName(): string;

    abstract get primaryColor(): Color;

    abstract get variantType(): VariantType;

    abstract get cloudType(): CloudType;

    abstract get cloudApp(): any;

    abstract get apis(): AwilixContainer<IApis>;

    getApi<T extends keyof IApis>(name: T): IApis[T] {
        return this.apis.resolve(name);
    }
}