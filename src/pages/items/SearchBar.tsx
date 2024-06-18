import { Button, Checkbox, Divider, TextField, Typography } from "@mui/material";
import { Row, useBindable } from "jrx-ts-react";
import "react";
import { useDependency } from "../../deps/Dependencies";

const SearchBar = () => {
    const model = useDependency("itemsPageModel");

    const nameFilter = useBindable(model.nameFilter);
    const limit = useBindable(model.limit);
    const isDescending = useBindable(model.isDescending);

    const onNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        model.nameFilter.value = e.target.value;
    };

    const onLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        model.limit.value = e.target.value;
    };

    const onIsDescendingChange = (_: any, checked: boolean) => {
        model.isDescending.value = checked;
    };

    const onSearchButton = () => {
        model.loadItems();
    };

    return (
        <Row style={{
            width: "100%",
            gap: "8px",
        }}>
            <TextField
                label="Name"
                value={nameFilter}
                placeholder="Filter by name"
                onChange={onNameFilterChange}
                size="small"
                style={{
                    flex: 1,
                }}
            />
            <TextField
                label="Limit"
                value={limit}
                type="number"
                onChange={onLimitChange}
                size="small"
                style={{
                    width: "100px",
                }}
            />
            <Checkbox
                checked={isDescending}
                onChange={onIsDescendingChange}
            />
            <Typography>
                Descending?
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Button
                onClick={onSearchButton}
                variant="contained"
                color="primary"
            >
                Search
            </Button>
        </Row>
    );
};
export default SearchBar;