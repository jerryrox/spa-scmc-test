import { AwilixContainer } from "awilix";
import { Color } from "jrx-ts";
import { IApis } from "../../api/ApiContainer";

export default abstract class VariantProvider {
    abstract get appName(): string;

    abstract get organizationName(): string;

    abstract get primaryColor(): Color;

    abstract get apis(): AwilixContainer<IApis>;


    getApi<T extends keyof IApis>(name: T): IApis[T] {
        return this.apis.resolve(name);
    }
}