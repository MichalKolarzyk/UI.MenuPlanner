import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorModel } from "../../api/models";
import { AppDispatch, RootState } from "../../redux";
import Canvas, { CanvasSize } from "../../ui/canvases/Canvas";
import { AnimationEnum } from "../../ui/constants/Constants";
import SimpleForm, { FormFieldValidationResult, SimpleFormButtonStyle } from "../../ui/forms/simpleForm/SimpleForm";
import { InputType } from "../../ui/inputs/input/Input";
import { createRegistrationUser } from "./redux/registrationActions";

const Registration = () => {
    const navigate = useNavigate();
    const dispach = useDispatch<AppDispatch>();
    const error = useSelector<RootState, ErrorModel | undefined>(state => state.registration.error);
    const userSuccesfullyCreated =useSelector<RootState, boolean | undefined>(state => state.registration.userSuccesfullyCreated);

    const loginHandler = () => {
        navigate("/login");
    };

    const submitHandler = async (item: any) => {
        dispach(createRegistrationUser(item));
        //navigate("/login");
    };

    return (
        <Canvas size={CanvasSize.fullscreen}>
            <Canvas size={CanvasSize.extraSmall} animation={AnimationEnum.slideDown}>
                <SimpleForm
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
            </Canvas>
        </Canvas>
    );
};

export default Registration;