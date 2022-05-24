import classes from "./Icon.module.css";
import React from "react";
import * as FontAwesome from "react-icons/fa";
import { AnimationEnum, useClasses } from "../constants/Constants";

const Icon = (props: IconProps) => {
    let iconClassName = classes.base;
    iconClassName += " " + classes[props.style ?? IconStyle.black];
    iconClassName += " " + classes[props.size ?? IconSize.small];
    iconClassName += " " + useClasses(props.animation ?? AnimationEnum.static);

    const image = props.image ?? IconImage.edit;
    const iconComponent = React.createElement(FontAwesome[image], {
        className: iconClassName,
    });

    return iconComponent
};

export class IconProps {
    image?: IconImage;
    size?: IconSize;
    style?: IconStyle;
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
    spin="FaCircleNotch"
}

export enum IconStyle {
    greay = "gray",
    black = "black",
    white = "white",
}

export enum IconSize {
    small = "small",
    medium = "medium",
    large = "large",
}

export default Icon;
