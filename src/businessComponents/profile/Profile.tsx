import { useSelector } from "react-redux";
import { UserModel } from "../../api/models";
import { RootState } from "../../redux";
import { FontsizeEnum, PaddingEnum } from "../../ui/constants/Constants";
import Card from "../../ui/containers/cards/Card";
import Flex, { FlexAlignItems, FlexStyle } from "../../ui/containers/flexes/Flex";
import Label from "../../ui/labels/label/Label";

const Profile = () => {
    const user = useSelector<RootState, UserModel | undefined>(state => state.user.user);
    return (
        <Card padding={PaddingEnum.paddingOne}>
            <Flex style={FlexStyle.column} alignItems={FlexAlignItems.alignUnset}>
                <Label bold size={FontsizeEnum.large}>
                    Profile
                </Label>
                <Label>Role: {user?.role}</Label>
                <Label>Id: {user?.id}</Label>
                <Label>Email: {user?.email}</Label>
                <Label>Firsname: {user?.firstName}</Label>
                <Label>Lastname: {user?.lastName}</Label>
            </Flex>
        </Card>
    );
};

export default Profile;
