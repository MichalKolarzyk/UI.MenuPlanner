import classes from "./Constants.module.css";

export enum AnimationEnum {
    static = "",
    spin = "animation_spin",
    slideDown="animation_slideDown",
}

export enum FontsizeEnum {
    small = "fontsize_small",
    medium = "fontsize_medium",
    large = "fontsize_large",
}

export enum PaddingEnum {
    paddingZero = "padding_Zero",
    paddingQuarter = "padding_Quarter",
    paddingHalf = "padding_Half",
    paddingTreeQuarters = "padding_TreeQuarters",
    paddingOne= "padding_One",
}

export enum ShapeEnum {
    sharp = "shape_sharp",
    slightlyRounded = "shape_slightlyRounded",
    rounded = "shape_rounded",
    elipse = "shape_elipse",
}

export enum BoxShadowEnum{
    none = "boxshadow_none",
    light = "boxshadow_light"
}

export enum ZIndexEnum{
    zIndex0 = "zIndex0",
    zIndex10 = "zIndex10",
    zIndex20 = "zIndex20",
    zIndex30 = "zIndex30",
    zIndex40 = "zIndex40",
}

export enum ColorEnum {
    green = "color_green",
    greenL1= "color_greenL1",
    blue= "color_blue",
    blueL1= "color_blueL1",
    white= "color_white",
    whiteL1= "color_whiteL1",
    gray= "color_gray",
    grayL1= "color_grayL1",
    grayL2= "color_grayL2",
    grayL3= "color_grayL3",
    red= "color_red",
    redL1= "color_redL1",
    transparent= "color_transparent",
    transparentD1= "color_transparentD1",
    black="color_black",
}


export const useClasses = (value: string) => {
    return classes[value];
};
