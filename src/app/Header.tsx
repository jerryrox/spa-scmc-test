import { Button, Typography, useTheme } from "@mui/material";
import { Column, Gap, Row, useBindable } from "jrx-ts-react";
import "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavUtils from "../utils/NavUtils";
import { useMemo } from "react";
import { Color } from "jrx-ts";
import { useDependency as useDependency } from "../deps/Dependencies";

const Header = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const authProvider = useDependency("authProvider");
    const variantProvider = useDependency("variantProvider");
    const appModel = useDependency("appModel");

    const isLoggedIn = useBindable(authProvider.isLoggedIn);

    const bg = useMemo(() => {
        const primary = Color.hex(theme.palette.primary.main).withAlpha(0.1);
        return primary.rgba;
    }, [theme]);

    const {
        isHome,
        isLogin,
        isItems,
    } = useMemo(() => {
        return {
            isHome: location.pathname === NavUtils.homePath(),
            isLogin: location.pathname === NavUtils.loginPath(),
            isItems: location.pathname === NavUtils.itemsPath(),
        };
    }, [location]);

    const onHomeButton = () => {
        navigate(NavUtils.homePath());
    };

    const onLoginButton = () => {
        navigate(NavUtils.loginPath());
    };

    const onLogoutButton = () => {
        appModel.logout();
    };

    const onItemsButton = () => {
        navigate(NavUtils.itemsPath());
    };

    return (
        <Column style={{
            padding: "64px 32px 32px 32px",
            width: "100%",
            background: bg,
        }}>
            <Typography variant="h4">
                {variantProvider.appName}
            </Typography>
            <Gap height="16px" />
            <Row style={{
                width: "100%",
                gap: "16px",
                justifyContent: "center",
            }}>
                <Button onClick={onHomeButton} variant={isHome ? "contained" : "outlined"}>
                    Home
                </Button>
                {
                    isLoggedIn &&
                    <Button onClick={onItemsButton} variant={isItems ? "contained" : "outlined"}>
                        Items
                    </Button>
                }
                <Gap flex={1} />
                {
                    !isLoggedIn ?
                        <Button onClick={onLoginButton} variant={isLogin ? "contained" : "outlined"}>
                            Login
                        </Button> :
                        <Button onClick={onLogoutButton} variant="outlined">
                            Logout
                        </Button>
                }
            </Row>
        </Column>
    );
};
export default Header;