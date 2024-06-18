import "react";
import { useDependency } from "../../deps/Dependencies";
import { Row, useBindable } from "jrx-ts-react";
import { Button, TextField } from "@mui/material";

const NewItemForm = () => {
    const model = useDependency("itemsPageModel");

    const name = useBindable(model.newItemName);
    const price = useBindable(model.newItemPrice);

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        model.newItemName.value = e.target.value;
    };

    const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        model.newItemPrice.value = e.target.value;
    };

    const onAddButton = () => {
        model.addItem();
    };

    return (
        <Row style={{
            width: "100%",
            gap: "8px",
        }}>
            <TextField
                label="Name"
                value={name}
                onChange={onNameChange}
                size="small"
                style={{
                    flex: 1,
                }}
            />
            <TextField
                label="Price"
                value={price}
                type="number"
                onChange={onPriceChange}
                size="small"
                style={{
                    flex: 1,
                }}
            />
            <Button
                variant="contained"
                onClick={onAddButton}
            >
                Add
            </Button>
        </Row>
    );
};
export default NewItemForm;