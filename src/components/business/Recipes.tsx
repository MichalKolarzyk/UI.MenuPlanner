import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Sorter from "../../helpers/Sorters";
import RecipeModel from "../../models/RecipeModel";
import { AppDispatch, RootState } from "../../redux";
import { fetchRecipes } from "../../redux/actions/recipeActions";
import Flex, { FlexAlignItems, FlexStyle } from "../ui/containers/flexes/Flex";
import Label, { LabelSize } from "../ui/labels/label/Label";
import Table from "../ui/lists/Table/Table";

const Recipes = () => {
    const dispach = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    useEffect(() => {
        dispach(fetchRecipes())
    },[dispach])
    const recipes = useSelector<RootState, Array<RecipeModel> | undefined>((state) => state.recipe.recipes);

    const rowClickHandler = (row: any) => {
        navigate(row.id);
    }

    return (
        <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignLeft}>
            <Label bold size={LabelSize.large}>Recipes</Label>
            <Table
                onRowClick={rowClickHandler}
                defaultSorter={Sorter.stringSorter}
                columns={[
                    {
                        name: "Title",
                        property: "title",
                    },
                    {
                        name: "Description",
                        property: "description",
                    },
                ]}
                items={recipes}
            />
            <Outlet />
        </Flex>
    );
};

export default Recipes;
