import "react";
import { IItem } from "../../models/IItem";
import { Column, Row } from "jrx-ts-react";
import { IconButton, Typography, useTheme } from "@mui/material";
import Icons from "../../utils/Icons";
import { useDependency } from "../../deps/Dependencies";
import { useMemo } from "react";

interface IParam {
    item: IItem;
}

const ItemCell = ({
    item,
}: IParam) => {
    const theme = useTheme();

    const model = useDependency("itemsPageModel");

    const onDeleteButton = () => {
        model.deleteItem(item);
    };

    const date = useMemo(() => {
        return item.createdAt.toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });
    }, [item.createdAt]);

    return (
        <Row style={{
            width: "100%",
            gap: "8px",
            padding: "8px",
        }}>
            <Column style={{
                flex: 1,
                alignItems: "flex-start",
            }}>
                <Typography style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                }}>
                    {item.name} (${item.price})
                </Typography>
                <Typography style={{
                    fontSize: "12px",
                    color: theme.palette.text.disabled,
                }}>
                    {date}
                </Typography>
            </Column>
            <IconButton onClick={onDeleteButton}>
                <Icons.delete />
            </IconButton>
        </Row>
    );
};
export default ItemCell;