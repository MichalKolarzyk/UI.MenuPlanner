import { Outlet, useNavigate, useParams } from "react-router-dom";
import RecipeModel from "../../models/RecipeModel";
import { ButtonStyle } from "../../ui/buttons/button/Button";
import IconButton from "../../ui/buttons/iconButton/IconButton";
import { AnimationEnum, ColorEnum, PaddingEnum } from "../../ui/constants/Constants";
import Card from "../../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexGapSize, FlexJustify, FlexStyle } from "../../ui/containers/flexes/Flex";
import Icon, { IconImage } from "../../ui/icons/Icon";
import Label, { LabelSize } from "../../ui/labels/label/Label";
import { SimpleList, StringList } from "../../ui/lists/SimpleList/SimpleList";
import { RecipeReducerModes } from "./redux/recipe.reducer";
import Multiselect from "../../ui/lists/multiselect/Multiselect";
import { TagModel } from "../../api/models";

const Recipe = (props: RecipeProps) => {
    const recipeMode = props.recipeMode ?? RecipeReducerModes.default;

    if (!props.recipe) {
        return (
            <Flex justify={FlexJustify.center}>
                <Icon image={IconImage.spin} animation={AnimationEnum.spin} />
            </Flex>
        );
    }

    if (props.deletedSuccesfully) {
        return (
            <Card padding={PaddingEnum.paddingOne}>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                    <Label bold size={LabelSize.medium} color={ColorEnum.green}>
                        Recipe deleted succesfully
                    </Label>
                    <Flex>
                        <IconButton onClick={props.onRecipesClick} text="Recipes" />
                    </Flex>
                </Flex>
            </Card>
        );
    }

    return (
        <Card padding={PaddingEnum.paddingOne}>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize2}>
                <Outlet />
                <Flex justify={FlexJustify.spaceBetween}>
                    <Label bold={true} size={LabelSize.large}>
                        {props.recipe?.title ?? ""}
                    </Label>
                    {recipeMode === RecipeReducerModes.default && (
                        <Flex>
                            <IconButton
                                onClick={props.onEditClick}
                                style={ButtonStyle.transparent}
                                image={IconImage.edit}
                            />
                            <IconButton
                                onClick={props.onDeleteModeClick}
                                style={ButtonStyle.transparent}
                                image={IconImage.remove}
                            />
                        </Flex>
                    )}
                </Flex>
                <Label size={LabelSize.medium}>{props.recipe?.description ?? ""}</Label>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset} gapSize={FlexGapSize.gapSize2}>
                    <StringList
                        title="Steps"
                        items={props.recipe?.steps}
                        isDisabled={recipeMode !== RecipeReducerModes.edit}
                        onEditClick={props.onEditStepClick}
                        onAddNewItem={props.onAddNewStepClick}
                        onDeleteClick={props.onDeleteStep}
                        onRowClick={props.onEditStepClick}
                    />
                    <SimpleList
                        title="Ingreadients"
                        items={props.recipe?.ingreadients}
                        isDisabled={recipeMode !== RecipeReducerModes.edit}
                        itemToString={(item) => `${item?.name}: ${item?.amount}`}
                        onAddNewItem={() => {}}
                        onEditClick={() => {}}
                    />
                    <Multiselect
                        isDisabled={recipeMode !== RecipeReducerModes.edit}
                        items={props.tags}
                        itemToString={(t: TagModel) => t.name || " "}
                        itemKey={(t: TagModel) => t.id}
                        seletedKeys={props.recipe.tagIds}
                        title="Tags"
                        onItemClick={props.onTagClick}
                    />
                </Flex>
                {recipeMode === RecipeReducerModes.edit && (
                    <Flex justify={FlexJustify.spaceBetween}>
                        <IconButton
                            image={IconImage.save}
                            style={ButtonStyle.accept}
                            onClick={props.onSubmitClick}
                            text="Submit"
                            isLoading={props.isLoading}
                            isDisabled={props.isLoading}
                        />
                        <IconButton
                            image={IconImage.close}
                            style={ButtonStyle.cancel}
                            onClick={props.onCancelClick}
                            text="Cancel"
                            isDisabled={props.isLoading}
                        />
                    </Flex>
                )}
                {recipeMode === RecipeReducerModes.delete && (
                    <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                        <Label bold size={LabelSize.medium} color={ColorEnum.red}>
                            Czy na pewno chcesz usunąć przepis?
                        </Label>
                        <Flex justify={FlexJustify.spaceBetween}>
                            <IconButton
                                image={IconImage.remove}
                                style={ButtonStyle.cancel}
                                onClick={props.onDeleteClick}
                                text="Delete"
                            />
                            <IconButton
                                image={IconImage.close}
                                style={ButtonStyle.cancel}
                                onClick={props.onCancelClick}
                                text="Cancel"
                            />
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Card>
    );
};

export interface RecipeProps {
    recipe?: RecipeModel;
    deletedSuccesfully?: boolean;
    recipeMode?: RecipeReducerModes;
    tags?: Array<TagModel>;
    isLoading?: boolean;
    onRecipesClick?: () => void;
    onEditClick?: () => void;
    onEditStepClick?: (intex?: number) => void;
    onDeleteStep?: (index?: number) => void;
    onDeleteModeClick?: () => void;
    onAddNewStepClick?: (item: string) => void;
    onTagClick?: (key: string, selected: boolean) => void;
    onSubmitClick?: () => void;
    onCancelClick?: () => void;
    onDeleteClick?: () => void;
}

export default Recipe;
