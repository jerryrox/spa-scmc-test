import { asClass, createContainer } from "awilix";
import { useMemo } from "react";
import HomePageModel from "../pages/home/models/HomePageModel";
import ItemsPageModel from "../pages/items/models/ItemsPageModel";
import LoginPageModel from "../pages/login/models/LoginPageModel";
import EnvUtils from "../utils/EnvUtils";
import AuthProvider from "../providers/AuthProvider";
import AppModel from "../app/models/AppModel";
import VariantProvider from "../providers/variants/VariantProvider";
import AlphaVariantProvider from "../providers/variants/AlphaVariantProvider";
import BetaVariantProvider from "../providers/variants/BetaVariantProvider";

interface IDependencies {
    variantProvider: VariantProvider;
    authProvider: AuthProvider;

    appModel: AppModel;

    homePageModel: HomePageModel;
    itemsPageModel: ItemsPageModel;
    loginPageModel: LoginPageModel;
}

const dependencies = createContainer<IDependencies>({
    injectionMode: "PROXY",
    strict: true,
});

dependencies.register({
    authProvider: asClass(AuthProvider).singleton(),

    appModel: asClass(AppModel).singleton(),

    homePageModel: asClass(HomePageModel).singleton(),
    itemsPageModel: asClass(ItemsPageModel).singleton(),
    loginPageModel: asClass(LoginPageModel).singleton(),
});

// Cloud and/or variant-specific dependencies
if (EnvUtils.variantType === "alpha") {
    dependencies.register({
        variantProvider: asClass(AlphaVariantProvider).singleton(),
    });
}
if (EnvUtils.variantType === "beta") {
    dependencies.register({
        variantProvider: asClass(BetaVariantProvider).singleton(),
    });
}

export function getDependency<T extends keyof IDependencies>(t: T): IDependencies[T] {
    return dependencies.resolve(t);
}

export function useDependency<T extends keyof IDependencies>(t: T): IDependencies[T] {
    const dependency = useMemo(() => {
        return getDependency(t);
    }, [t]);
    return dependency;
}

export default dependencies;