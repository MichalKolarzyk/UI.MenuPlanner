import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { UserModel } from "../../api/models";
import { AppDispatch, RootState } from "../../redux";
import Button from "../../ui/buttons/button/Button";
import { BoxShadowEnum, PaddingEnum, ShapeEnum } from "../../ui/constants/Constants";
import Card, { CardColors } from "../../ui/containers/cards/card/Card";
import Flex, { FlexAlignItems, FlexJustify, FlexStyle } from "../../ui/containers/flexes/Flex";
import Label, { LabelSize } from "../../ui/labels/label/Label";
import { setLogin, setLoginLoggedSuccessfully } from "../login/login.reducer";
import { setUserIsLogged } from "../user/user.reducer";

const Main = () => {
    const navigate = useNavigate();
    const dispach = useDispatch<AppDispatch>();
    const user = useSelector<RootState, UserModel | undefined>((state) => state.user.user);

    const logoutClick = () => {
        dispach(setLogin(undefined))
        dispach(setLoginLoggedSuccessfully(false))
        dispach(setUserIsLogged(false))
    }

    return (
        <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
            <Card color={CardColors.grey} boxShadow={BoxShadowEnum.none} padding={PaddingEnum.paddingZero}>
                <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                    <Flex justify={FlexJustify.center}>
                        <Label italic size={LabelSize.large}>
                            Menu Planner
                        </Label>
                    </Flex>
                    <Flex justify={FlexJustify.spaceBetween}>
                        <Flex>
                            <Button onClick={() => navigate("recipes")} shape={ShapeEnum.sharp}>
                                Recipes
                            </Button>
                        </Flex>
                        <Flex>
                            <Button onClick={() => navigate("login")} shape={ShapeEnum.sharp}>
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
