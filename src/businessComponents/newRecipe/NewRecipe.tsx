import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorModel, RecipeModel } from "../../api/models";
import { overlayPortal } from "../../portals";
import { AppDispatch, RootState } from "../../redux";
import IconButton from "../../ui/buttons/iconButton/IconButton";
import Canvas, { CanvasOpacity, CanvasSize } from "../../ui/canvases/Canvas";
import { ZIndexEnum } from "../../ui/constants/Constants";
import Card from "../../ui/containers/cards/Card";
import Flex, { FlexAlignItems, FlexStyle } from "../../ui/containers/flexes/Flex";
import SimpleForm, { FormFieldValidationResult, SimpleFormButtonStyle } from "../../ui/forms/simpleForm/SimpleForm";
import { IconImage } from "../../ui/icons/Icon";
import { InputType } from "../../ui/inputs/input/Input";
import { createRecipe, setCreatedRecipe, setCreatedSuccessfully } from "./redux/newRecipeActions";

const NewRecipe = () => {
    const dispach = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const portal = overlayPortal;
    const createdRecipe = useSelector<RootState, RecipeModel | undefined>((state) => state.newRecipe.newRecipe);
    const error = useSelector<RootState, ErrorModel | undefined>((state) => state.newRecipe.error);
    const createdSuccesfully = useSelector<RootState, boolean | undefined>(
        (state) => state.newRecipe.createdSuccesfully
    );

    useEffect(() => {
        dispach(setCreatedSuccessfully(false));
        dispach(setCreatedRecipe(undefined));
    }, []);

    const goBack = () => {
        navigate("../");
    };

    const goToRecipeClick = () => {
        navigate(`../${createdRecipe?.id}`);
    };

    const newRecipeClick = () => {
        dispach(setCreatedSuccessfully(false));
        dispach(setCreatedRecipe(undefined));
    };

    const submitHandler = async (item: any) => {
        console.log(item);
        const newRecipe = item as RecipeModel;
        await dispach(createRecipe(newRecipe));
    };

    const element = (
        <>
            <Canvas onClick={goBack} zIndex={ZIndexEnum.zIndex20} opacity={CanvasOpacity.light} />
            <Canvas opacity={CanvasOpacity.light} size={CanvasSize.extraSmall} zIndex={ZIndexEnum.zIndex30}>
                <Card>
                    <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                        <SimpleForm
                            onSubmit={submitHandler}
                            createdSuccesfully={createdSuccesfully}
                            serverErrorMessage={error?.detail}
                            onSecondChoiceClick={goBack}
                            simpleFormButtonStyle={SimpleFormButtonStyle.sumbitCancel}
                            title="New Recipe"
                            item={{
                                title: "",
                                description: "",
                            }}
                            fields={[
                                {
                                    property: "title",
                                    text: "Title",
                                    type: InputType.text,
                                    onValidation: (item: string) => {
                                        if (item.length < 3) {
                                            return FormFieldValidationResult.invalidField(
                                                "Firstname should have at list 3 characters"
                                            );
                                        }
                                        return FormFieldValidationResult.ValidField;
                                    },
                                },
                                {
                                    property: "description",
                                    text: "Description",
                                    onValidation: (item: string) => {
                                        if (item.length < 3) {
                                            return FormFieldValidationResult.invalidField(
                                                "Lastname should have at list 3 characters"
                                            );
                                        }
                                        return FormFieldValidationResult.ValidField;
                                    },
                                },
                            ]}
                        />
                        {createdSuccesfully && (
                            <Flex>
                                <IconButton onClick={newRecipeClick} image={IconImage.add} text="New" />
                                <IconButton onClick={goToRecipeClick} text="Go to recipe" />
                            </Flex>
                        )}
                    </Flex>
                </Card>
            </Canvas>
        </>
    );

    if (!portal) {
        return <></>;
    }
    return createPortal(element, portal);
};

export default NewRecipe;
