import "react";
import PageContainer from "../../components/PageContainer";
import { Column, Row, useBindable } from "jrx-ts-react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDependency } from "../../deps/Dependencies";
import { useEffect } from "react";

const LoginPage = () => {
    const navigate = useNavigate();

    const model = useDependency("loginPageModel");

    const email = useBindable(model.email);
    const password = useBindable(model.password);

    useEffect(() => {
        model.init();
    }, [model]);

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
        <PageContainer title="Login">
            <Column style={{
                width: "100%",
                maxWidth: "400px",
                gap: "8px",
            }}>
                <TextField
                    label="Email"
                    size="small"
                    value={email}
                    onChange={onEmailChange}
                    fullWidth
                />
                <TextField
                    label="Password"
                    size="small"
                    value={password}
                    onChange={onPasswordChange}
                    type="password"
                    fullWidth
                />
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
            </Column>
        </PageContainer>
    );
};
export default LoginPage;