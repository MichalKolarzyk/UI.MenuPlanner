import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Sorter from "../../helpers/Sorters";
import RecipeModel from "../../models/RecipeModel";
import { AppDispatch, RootState } from "../../redux";
import { fetchRecipes } from "../../redux/actions/recipeActions";
import { ButtonStyle } from "../ui/buttons/button/Button";
import IconButton from "../ui/buttons/iconButton/IconButton";
import { PaddingEnum } from "../ui/constants/Constants";
import Card from "../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexJustify, FlexStyle } from "../ui/containers/flexes/Flex";
import { IconImage } from "../ui/icons/Icon";
import Label, { LabelSize } from "../ui/labels/label/Label";
import Table from "../ui/lists/Table/Table";

const Recipes = () => {
    const dispach = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    useEffect(() => {
        dispach(fetchRecipes());
    }, [dispach]);
    const recipes = useSelector<RootState, Array<RecipeModel> | undefined>((state) => state.recipe.recipes);

    const rowClickHandler = (row: any) => {
        navigate(row.id);
    };

    const newRecipeClick = () => {
        navigate("newRecipe");
    }

    return (
        <Card padding={PaddingEnum.paddingOne}>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                <Outlet/>
                <Flex justify={FlexJustify.spaceBetween}>
                    <Label bold size={LabelSize.large}>
                        Recipes
                    </Label>
                    <IconButton onClick={newRecipeClick} style={ButtonStyle.accept} image={IconImage.add} text="New Recipe"/>
                </Flex>

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
            </Flex>
        </Card>
    );
};

export default Recipes;
