import { Button } from "@mui/material";
import "react";
import { useDependency } from "../../../deps/Dependencies";
import { useNavigate } from "react-router-dom";

const BetaLoginForm = () => {
    const navigate = useNavigate();

    const model = useDependency("loginPageModel");

    const onLoginButton = () => {
        model.login(navigate);
    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onLoginButton}
            fullWidth
        >
            Login with Microsoft
        </Button>
    );
};
export default BetaLoginForm;