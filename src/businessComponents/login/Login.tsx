import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorModel } from "../../api/models";
import { AppDispatch, RootState } from "../../redux";
import Canvas, { CanvasSize } from "../../ui/canvases/Canvas";
import { AnimationEnum } from "../../ui/constants/Constants";
import Card, { CardColors } from "../../ui/containers/cards/Card";
import SimpleForm, { FormFieldValidationResult, SimpleFormButtonStyle } from "../../ui/forms/simpleForm/SimpleForm";
import { InputType } from "../../ui/inputs/input/Input";
import { fetchLogin } from "./login.reducer";

const Login = () => {
    const navigate = useNavigate();
    const dispach = useDispatch<AppDispatch>();
    const loggedSuccessfully = useSelector<RootState, boolean | undefined>((state) => state.login.loggedSuccessFully);
    const isLoading = useSelector<RootState, boolean | undefined>((state) => state.api.isLoading);
    const error = useSelector<RootState, ErrorModel | undefined>((state) => state.api.error);

    const loginHandler = (item: any) => {
        dispach(fetchLogin(item, () => navigate("/dishes")));
    };

    const registrationHandler = () => {
        navigate("/registration");
    };

    return (
        <Canvas size={CanvasSize.fullscreen}>
            <Canvas size={CanvasSize.extraSmall} animation={AnimationEnum.slideDown}>
                <Card color={CardColors.grey}>
                    <SimpleForm
                        isLoading={isLoading}
                        onSubmit={loginHandler}
                        onSecondChoiceClick={registrationHandler}
                        simpleFormButtonStyle={SimpleFormButtonStyle.loginSignUp}
                        createdSuccesfully={loggedSuccessfully}
                        serverErrorMessage={error?.detail}
                        title="Login"
                        item={{
                            email: "",
                            password: "",
                        }}
                        fields={[
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
                        ]}
                    />
                </Card>
            </Canvas>
        </Canvas>
    );
};

export default Login;
