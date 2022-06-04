import classes from "./Icon.module.css";
import React from "react";
import * as FontAwesome from "react-icons/fa";
import { AnimationEnum, ColorEnum, useClasses } from "../constants/Constants";

const Icon = (props: IconProps) => {
    let iconClassName = classes.base;
    iconClassName += " " + useClasses(props.color ?? ColorEnum.black);
    iconClassName += " " + classes[props.size ?? IconSize.small];
    iconClassName += " " + useClasses(props.animation ?? AnimationEnum.static);

    let iconComponent = <></>
    if(props.image){
        iconComponent = React.createElement(FontAwesome[props.image], {
            className: iconClassName,
        });
    }

    return iconComponent
};

export interface IconProps {
    image?: IconImage;
    size?: IconSize;
    color?: ColorEnum;
    animation?: AnimationEnum;
};

export enum IconImage {
    close = "FaRegTimesCircle",
    edit = "FaEdit",
    save = "FaSave",
    add = "FaPlus",
    remove = "FaTrash",
    sort="FaSort",
    sortDown="FaSortDown",
    spin="FaCircleNotch",
    user="FaUserAlt",
    envelope="FaEnvelope",
}

export enum IconSize {
    small = "small",
    medium = "medium",
    large = "large",
}

export default Icon;
