import "react";
import PageContainer from "../../components/PageContainer";
import { useDependency } from "../../deps/Dependencies";
import { useBindable } from "jrx-ts-react";
import { Typography } from "@mui/material";

const HomePage = () => {
    const authProvider = useDependency("authProvider");

    const isLoggedIn = useBindable(authProvider.isLoggedIn);

    return (
        <PageContainer title="Home">
            <Typography>
                Welcome to our website! You are {isLoggedIn ? "logged in" : "not logged in"}.
            </Typography>
        </PageContainer>
    );
};
export default HomePage;