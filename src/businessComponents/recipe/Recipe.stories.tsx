import { ComponentMeta, ComponentStory } from "@storybook/react";
import Flex, { FlexAlignItems, FlexStyle } from "../../ui/containers/flexes/Flex";
import Label from "../../ui/labels/label/Label";
import Recipe from "./Recipe";
import { RecipeReducerModes } from "./redux/recipe.reducer";

export default {
    title: "BusinessComponents/Recipe",
    component: Recipe,
} as ComponentMeta<typeof Recipe>;

const defaultArgs = {
    recipe: {
        id: "1",
        title: "Pizza",
        description: "Pizza italiana",
        steps: ["step 1", "step 2", "step 3"],
        tagIds: ["t1", "t3"],
    },
    tags: [
        {
            id: "t1",
            name: "Słodki",
            description: "",
        },
        {
            id: "t2",
            name: "Słony",
            description: "",
        },
        {
            id: "t3",
            name: "Kwaśny",
            description: "",
        },
    ],
};

const template: ComponentStory<typeof Recipe> = (args) => <Recipe {...args} />;
export const recipe = template.bind({});
recipe.args = defaultArgs;

const templateRecipeModes: ComponentStory<typeof Recipe> = (args) => (
    <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
        <Label>Default</Label>
        <Recipe {...args} />
        <Label>Delete</Label>
        <Recipe {...args} recipeMode={RecipeReducerModes.delete} />
        <Label>Edit</Label>
        <Recipe {...args} recipeMode={RecipeReducerModes.edit} />
    </Flex>
);
export const recipeModes = templateRecipeModes.bind({});
recipeModes.args = defaultArgs;

const templateRecipe: ComponentStory<typeof Recipe> = (args) => <Recipe {...args} />;
export const recipeDeletedSuccesfully = templateRecipe.bind({});
recipeDeletedSuccesfully.args = {
    ...defaultArgs,
    deletedSuccesfully: true,
};

export const recipeNotLoaded = templateRecipe.bind({});
recipeNotLoaded.args = {
    ...defaultArgs,
    recipe: undefined,
};

export const tagsNotLoaded = templateRecipe.bind({});
tagsNotLoaded.args = { ...defaultArgs, tags: undefined };

export const recipeOnSubmit = templateRecipe.bind({});
recipeOnSubmit.args = { ...defaultArgs, recipeMode: RecipeReducerModes.edit, isLoading: true };
