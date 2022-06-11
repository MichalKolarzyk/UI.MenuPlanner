import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorModel } from "../../api/models";
import { AppDispatch, RootState } from "../../redux";
import IconButton from "../../ui/buttons/iconButton/IconButton";
import Canvas, { CanvasSize } from "../../ui/canvases/Canvas";
import { AnimationEnum } from "../../ui/constants/Constants";
import Card from "../../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexStyle } from "../../ui/containers/flexes/Flex";
import SimpleForm, { FormFieldValidationResult, SimpleFormButtonStyle } from "../../ui/forms/simpleForm/SimpleForm";
import { IconImage } from "../../ui/icons/Icon";
import { InputType } from "../../ui/inputs/input/Input";
import { createRegistrationUser, setRegistrationUser, setRegistrationUserSuccesfullyCreated } from "./redux/registrationActions";

const Registration = () => {
    const navigate = useNavigate();
    const dispach = useDispatch<AppDispatch>();
    const error = useSelector<RootState, ErrorModel | undefined>((state) => state.api.error);
    const isLoading = useSelector<RootState, boolean | undefined>((state) => state.api.isLoading);
    const userSuccesfullyCreated = useSelector<RootState, boolean | undefined>(
        (state) => state.registration.userSuccesfullyCreated
    );

    const loginHandler = () => {
        navigate("/login");
    };

    const submitHandler = async (item: any) => {
        dispach(createRegistrationUser(item));
    };

    const loginClick = () => {
        dispach(setRegistrationUserSuccesfullyCreated(false))
        dispach(setRegistrationUser(undefined))
        navigate("/login");
    };

    return (
        <Canvas size={CanvasSize.fullscreen}>
            <Canvas size={CanvasSize.extraSmall} animation={AnimationEnum.slideDown}>
                <Card>
                    <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                        <SimpleForm
                            isLoading={isLoading}
                            onSubmit={submitHandler}
                            onSecondChoiceClick={loginHandler}
                            simpleFormButtonStyle={SimpleFormButtonStyle.signUpSignIn}
                            createdSuccesfully={userSuccesfullyCreated}
                            serverErrorMessage={error?.detail}
                            title="Registration"
                            item={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                confirmPassword: "",
                            }}
                            fields={[
                                {
                                    property: "firstName",
                                    text: "Firstname",
                                    onValidation: (property: string) => {
                                        if (property.length < 3) {
                                            return FormFieldValidationResult.invalidField(
                                                "Firstname should have at list 3 characters"
                                            );
                                        }
                                        return FormFieldValidationResult.ValidField;
                                    },
                                },
                                {
                                    property: "lastName",
                                    text: "Lastname",
                                    onValidation: (property: string) => {
                                        if (property.length < 3) {
                                            return FormFieldValidationResult.invalidField(
                                                "Lastname should have at list 3 characters"
                                            );
                                        }
                                        return FormFieldValidationResult.ValidField;
                                    },
                                },
                                {
                                    property: "email",
                                    text: "Email",
                                    onValidation: (property: string) => {
                                        if (property.length < 3) {
                                            return FormFieldValidationResult.invalidField(
                                                "Email should have at list 3 characters"
                                            );
                                        }
                                        return FormFieldValidationResult.ValidField;
                                    },
                                },
                                {
                                    property: "password",
                                    text: "Password",
                                    type: InputType.password,
                                    onValidation: (property: string) => {
                                        if (property.length < 3) {
                                            return FormFieldValidationResult.invalidField(
                                                "Password should have at list 3 characters"
                                            );
                                        }
                                        return FormFieldValidationResult.ValidField;
                                    },
                                },
                                {
                                    property: "confirmPassword",
                                    text: "Confirm password",
                                    type: InputType.password,
                                    onValidation: (property: string, item: any) => {
                                        if (item.password !== property) {
                                            return FormFieldValidationResult.invalidField(
                                                "Confirm password is not equal to password"
                                            );
                                        }
                                        return FormFieldValidationResult.ValidField;
                                    },
                                },
                            ]}
                        />
                        {userSuccesfullyCreated && (
                            <Flex>
                                <IconButton onClick={loginClick} image={IconImage.user} text="Login" />
                            </Flex>
                        )}
                    </Flex>
                </Card>
            </Canvas>
        </Canvas>
    );
};

export default Registration;
