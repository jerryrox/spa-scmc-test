import "react";
import { useDependency } from "../../deps/Dependencies";
import { Center, Column, useBindable } from "jrx-ts-react";
import { CircularProgress } from "@mui/material";
import ItemCell from "./ItemCell";

const ItemsList = () => {
    const model = useDependency("itemsPageModel");

    const isLoading = useBindable(model.loadingItems);
    const items = useBindable(model.items);

    if (isLoading) {
        return (
            <Center style={{
                width: "100%",
                height: "100px",
            }}>
                <CircularProgress/>
            </Center>
        );
    }
    return (
        <Column style={{
            width: "100%",
        }}>
            {
                items.map((item) => (
                    <ItemCell
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </Column>
    );
};
export default ItemsList;