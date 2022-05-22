import classes from './Flex.module.css'

const Flex = (props: FlexProps) => {
    let className = classes.base;
    className += " " + classes[props.style ?? FlexStyle.row]
    className += " " + classes[props.gapSize ?? FlexGapSize.gapSize1]
    className += " " + classes[props.justify ?? FlexJustify.left]
    className += " " + classes[props.alignItems ?? FlexAlignItems.alignCenter]

    return <div className={className}>{props.children}</div>
}

type FlexProps = {
    children?: any,
    style?: FlexStyle,
    gapSize?: FlexGapSize,
    justify?: FlexJustify,
    alignItems?: FlexAlignItems,
}

export enum FlexStyle{
    row = "row",
    column = "column",
}

export enum FlexGapSize{
    gapSize0="gapSize0",
    gapSize1="gapSize1",
    gapSize2="gapSize2",
    gapSize3="gapSize3",
}

export enum FlexJustify{
    left="left",
    right="right",
    center="center",
    spaceBetween= "spaceBetween",
    spaceEvenly= "spaceEvenly",
    stretch= "stretch",
}

export enum FlexAlignItems{
    alignUnset = "alignUnset",
    alignRight = "alignRight",
    alignLeft = "alignLeft",
    alignCenter = "alignCenter",

}

export default Flex;
