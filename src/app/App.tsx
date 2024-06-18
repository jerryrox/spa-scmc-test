import { Divider, ThemeProvider, createTheme } from "@mui/material";
import "react";
import AppRouter from "./AppRouter";
import Header from "./Header";
import Footer from "./Footer";
import { Column, Gap } from "jrx-ts-react";
import { useDependency } from "../deps/Dependencies";
import { useEffect, useMemo } from "react";

const App = () => {
    const variantProvider = useDependency("variantProvider");
    const authProvider = useDependency("authProvider");

    useEffect(() => {
        authProvider.autoLogin();
    }, [authProvider]);

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                primary: {
                    main: variantProvider.primaryColor.hex,
                },
            },
            components: {
                MuiButton: {
                    defaultProps: {
                        sx: {
                            textTransform: "none",
                        },
                    },
                },
            },
        })
    }, [variantProvider]);

    return (
        <ThemeProvider theme={theme}>
            <Column style={{
                width: "100vw",
                overflowX: "hidden",
            }}>
                <Header />
                <Divider flexItem />
                <Gap height="16px" />
                <AppRouter />
                <Gap height="16px" />
                <Divider flexItem />
                <Footer/>
            </Column>
        </ThemeProvider>
    );
};
export default App;