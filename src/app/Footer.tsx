import { Typography } from "@mui/material";
import { Column } from "jrx-ts-react";
import "react";
import { Link } from "react-router-dom";
import { useDependency } from "../deps/Dependencies";

const Footer = () => {
    const variantProvider = useDependency("variantProvider");

    return (
        <Column style={{
            paddingTop: "32px",
            paddingBottom: "64px",
            width: "100%",
        }}>
            <Typography>
                {variantProvider.appName} made for {variantProvider.organizationName} by <Link to="https://github.com/jerryrox" target="_blank">Jerryrox</Link>. 2024
            </Typography>
        </Column>
    );
};
export default Footer;