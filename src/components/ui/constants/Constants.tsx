import classes from "./Constants.module.css";

export enum AnimationEnum {
    static = "",
    spin = "animation_spin",
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

export const useClasses = (value: string) => {
    return classes[value];
};
