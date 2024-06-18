import { Column } from "jrx-ts-react";
import "react";
import { useDependency } from "../../../deps/Dependencies";
import AlphaLoginForm from "./AlphaLoginForm";
import BetaLoginForm from "./BetaLoginForm";

const LoginForm = () => {
    const variantProvider = useDependency("variantProvider");

    const drawForm = () => {
        switch (variantProvider.variantType) {
            case "alpha":
                return <AlphaLoginForm />;
            case "beta":
                return <BetaLoginForm />;
        }
    };

    return (
        <Column style={{
            width: "100%",
            maxWidth: "400px",
            gap: "8px",
        }}>
            {drawForm()}
        </Column>
    );
};
export default LoginForm;