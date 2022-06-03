import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RecipeModel from "../../models/RecipeModel";
import { overlayPortal } from "../../portals";
import { AppDispatch, RootState } from "../../redux";
import { createRecipe, setRecipe } from "../../redux/actions/recipeActions";
import Canvas, { CanvasOpacity, CanvasSize } from "../ui/canvases/Canvas";
import { ZIndexEnum } from "../ui/constants/Constants";
import SimpleForm, { FormFieldValidationResult } from "../ui/forms/simpleForm/SimpleForm";
import { InputType } from "../ui/inputs/input/Input";

const NewRecipe = () => {
    const dispach = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const portal = overlayPortal;
    const recipe = useSelector<RootState, RecipeModel | undefined>(state => state.recipe.recipe);
    const isLoading = useSelector<RootState, boolean | undefined>(state => state.recipe.isLoading);

    const goBack = () => {
        navigate("../");
    };

    useEffect(() => {
        if(isLoading || !recipe ){
            return;
        }
        navigate(`../${recipe.id}`)
    },[dispach])

    const submitHandler = (item: any) => {
        const newRecipe = item as RecipeModel;
        dispach(createRecipe(newRecipe));
    }



    if (!portal) {
        return <></>;
    }

    const element = (
        <>
            <Canvas onClick={goBack} zIndex={ZIndexEnum.zIndex20} opacity={CanvasOpacity.light} />
            <Canvas opacity={CanvasOpacity.light} size={CanvasSize.extraSmall} zIndex={ZIndexEnum.zIndex30}>
                <SimpleForm
                    onSubmit={submitHandler}
                    onCancelClick={goBack}
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
            </Canvas>
        </>
    );

    return createPortal(element, portal);
};

export default NewRecipe;