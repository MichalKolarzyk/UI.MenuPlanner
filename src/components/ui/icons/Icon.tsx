import classes from "./Icon.module.css";
import React from "react";
import * as FontAwesome from "react-icons/fa";

const Icon = (props: IconButtonProps) => {
    let iconClassName = classes.base;
    iconClassName += " " + classes[props.style ?? IconStyle.black];
    iconClassName += " " + classes[props.size ?? IconSize.small];

    const image = props.image ?? IconImage.edit;
    const iconComponent = React.createElement(FontAwesome[image], {
        className: iconClassName,
    });

    return iconComponent
};

type IconButtonProps = {
    image?: IconImage;
    size?: IconSize;
    style?: IconStyle;
};

export enum IconImage {
    close = "FaRegTimesCircle",
    edit = "FaEdit",
    save = "FaSave",
    add = "FaPlus",
    remove = "FaTrash",
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
