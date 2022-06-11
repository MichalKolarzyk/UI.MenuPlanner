import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { UserModel } from "../../api/models";
import { AppDispatch, RootState } from "../../redux";
import Button from "../../ui/buttons/button/Button";
import { BoxShadowEnum, FontsizeEnum, PaddingEnum, ShapeEnum } from "../../ui/constants/Constants";
import Card, { CardColors } from "../../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexJustify, FlexStyle } from "../../ui/containers/flexes/Flex";
import Label from "../../ui/labels/label/Label";
import { setLogin } from "../login/login.reducer";
import { setUserIsLogged } from "../user/user.reducer";

const Main = () => {
    const navigate = useNavigate();
    const dispach = useDispatch<AppDispatch>();

    const logoutClick = () => {
        dispach(
            setLogin({
                authorizationMethod: "",
                token: "",
            })
        );
        dispach(setUserIsLogged(false));
        navigate("/login");
    };

    return (
        <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
            <Card color={CardColors.grey} boxShadow={BoxShadowEnum.none} padding={PaddingEnum.paddingZero}>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                    <Flex justify={FlexJustify.center}>
                        <Label italic size={FontsizeEnum.large}>
                            Menu Planner
                        </Label>
                    </Flex>
                    <Flex justify={FlexJustify.spaceBetween}>
                        <Flex>
                            <Button onClick={() => navigate("recipes")} shape={ShapeEnum.sharp}>
                                Recipes
                            </Button>
                            <Button onClick={() => navigate("dishes")} shape={ShapeEnum.sharp}>
                                Dishes
                            </Button>
                        </Flex>
                        <Flex>
                            <Button onClick={() => navigate("profile")} shape={ShapeEnum.sharp}>
                                Profile
                            </Button>
                            <Button onClick={logoutClick} shape={ShapeEnum.sharp}>
                                Logout
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Card>
            <Outlet />
        </Flex>
    );
};

export default Main;
