import classes from './Flex.module.css'

const Flex = (props: FlexProps) => {
    let className = classes.base;
    className += " " + classes[props.style ?? FlexStyle.row]
    className += " " + classes[props.gapSize ?? FlexGapSize.gapSize1]

    return <div className={className}>{props.children}</div>
}

type FlexProps = {
    children?: any,
    style?: FlexStyle,
    gapSize?: FlexGapSize
}

export enum FlexStyle{
    row = "row",
    column = "column",
}

export enum FlexGapSize{
    gapSize1="gapSize1",
    gapSize2="gapSize2",
    gapSize3="gapSize3",
}

export default Flex;
