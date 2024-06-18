import { Typography } from "@mui/material";
import { Column, Gap } from "jrx-ts-react";
import "react";

interface IParam {
    title: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const PageContainer = ({
    title,
    style,
    children,
}: IParam) => {

    return (
        <div style={{
            width: "100%",
            maxWidth: "800px",
        }}>
            <Column style={{
                width: "100%",
                alignItems: "flex-start",
                ...style,
            }}>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Gap height="16px" />
                {children}
            </Column>
        </div>
    );
};
export default PageContainer;