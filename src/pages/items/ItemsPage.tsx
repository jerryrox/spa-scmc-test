import "react";
import { useDependency } from "../../deps/Dependencies";
import { useEffect } from "react";
import PageContainer from "../../components/PageContainer";
import SearchBar from "./SearchBar";
import ItemsList from "./ItemsList";
import { Divider, Typography } from "@mui/material";
import NewItemForm from "./NewItemForm";

const ItemsPage = () => {
    const model = useDependency("itemsPageModel");

    useEffect(() => {
        model.init();
    }, [model]);

    return (
        <PageContainer title="Items" style={{
            gap: "8px",
        }}>
            <Typography style={{
                fontWeight: "bold",
            }}>
                New item
            </Typography>
            <NewItemForm />
            <Divider flexItem />
            <Typography style={{
                fontWeight: "bold",
            }}>
                Search
            </Typography>
            <SearchBar />
            <Divider flexItem />
            <ItemsList />
        </PageContainer>
    );
};
export default ItemsPage;