import { Button, TextField } from "@mui/material";
import { Row, useBindable } from "jrx-ts-react";
import "react";
import { useDependency } from "../../../deps/Dependencies";
import { useNavigate } from "react-router-dom";

const AlphaLoginForm = () => {
    const navigate = useNavigate();

    const model = useDependency("loginPageModel");

    const email = useBindable(model.email);
    const password = useBindable(model.password);

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        model.email.value = e.target.value;
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        model.password.value = e.target.value;
    };

    const onLoginButton = () => {
        model.login(navigate);
    };

    const onRegisterButton = () => {
        model.register(navigate);
    };

    return (
        <>
            <form action="" style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
            }}>
                <TextField
                    label="Email"
                    size="small"
                    autoComplete="email"
                    value={email}
                    onChange={onEmailChange}
                    fullWidth
                />
                <TextField
                    label="Password"
                    size="small"
                    autoComplete="current-password"
                    value={password}
                    onChange={onPasswordChange}
                    type="password"
                    fullWidth
                />
            </form>
            <Row style={{
                width: "100%",
                gap: "8px",
            }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onLoginButton}
                    fullWidth
                >
                    Login
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={onRegisterButton}
                    fullWidth
                >
                    Register
                </Button>
            </Row>
        </>
    );
};
export default AlphaLoginForm;