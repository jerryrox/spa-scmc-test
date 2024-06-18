import "react";
import PageContainer from "../../components/PageContainer";
import { useDependency } from "../../deps/Dependencies";
import { useEffect } from "react";
import LoginForm from "./loginForm/LoginForm";

const LoginPage = () => {
    const model = useDependency("loginPageModel");

    useEffect(() => {
        model.init();
    }, [model]);

    return (
        <PageContainer title="Login">
            <LoginForm/>
        </PageContainer>
    );
};
export default LoginPage;