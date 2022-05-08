import { MouseEventHandler } from "react"

const RemoveButton = (props: RemoveButtonProps) => {
    return <button onClick={props.onClick}>
        -
    </button>
}

type RemoveButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
}
export default RemoveButton