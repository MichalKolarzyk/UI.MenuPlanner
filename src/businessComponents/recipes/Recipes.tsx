import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import RecipeModel from "../../models/RecipeModel";
import { AppDispatch, RootState } from "../../redux";
import { ButtonStyle } from "../../ui/buttons/button/Button";
import IconButton from "../../ui/buttons/iconButton/IconButton";
import { AnimationEnum, PaddingEnum } from "../../ui/constants/Constants";
import Card from "../../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../ui/containers/flexes/Flex";
import Icon, { IconImage } from "../../ui/icons/Icon";
import Label, { LabelSize } from "../../ui/labels/label/Label";
import Table, { Column } from "../../ui/lists/Table/Table";
import { fetchRecipes, setRecipesSkip, setSortedBy } from "./redux/recipesActions";

const Recipes = () => {
    const dispach = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const recipes = useSelector<RootState, Array<RecipeModel> | undefined>((state) => state.recipes.recipes);
    const sortedBy = useSelector<RootState, string | undefined>((state) => state.recipes.sortedBy);
    const skip = useSelector<RootState, number | undefined>((state) => state.recipes.skip);
    const take = useSelector<RootState, number | undefined>((state) => state.recipes.take);


    const rowClickHandler = (row: any) => {
        navigate(row.id);
    };

    const newRecipeClick = () => {
        navigate("newRecipe");
    };

    const columnSortHandler = (column: Column) => {
        dispach(setSortedBy(column.name));
    };

    const nextClickHandler = () => {
        dispach(setRecipesSkip((skip ?? 0) + (take ?? 10)));
    }

    const previousClickHandler = () => {
        let newSkip = (skip ?? 0) - (take ?? 10)
        if(newSkip < 0){
            newSkip = 0
        }
        dispach(setRecipesSkip(newSkip));
    }

    useEffect(() => {
        console.log("USE EFECT")
        dispach(fetchRecipes());
    }, [dispach, sortedBy, skip]);

    if (!recipes) {
        return (
            <Flex justify={FlexJustify.center}>
                <Icon image={IconImage.spin} animation={AnimationEnum.spin} />
            </Flex>
        );
    }

    return (
        <Card padding={PaddingEnum.paddingOne}>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize3}>
                <Outlet />
                <Flex justify={FlexJustify.spaceBetween}>
                    <Label bold size={LabelSize.large}>
                        Recipes
                    </Label>
                    <IconButton
                        onClick={newRecipeClick}
                        style={ButtonStyle.accept}
                        image={IconImage.add}
                        text="New Recipe"
                    />
                </Flex>

                <Table
                    onColumnSort={columnSortHandler}
                    onRowClick={rowClickHandler}
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
                <Flex justify={FlexJustify.spaceBetween}>
                    <IconButton onClick={previousClickHandler} text="Previous"/>
                    <IconButton onClick={nextClickHandler} text="Next"/>
                </Flex>
            </Flex>
        </Card>
    );
};

export default Recipes;
