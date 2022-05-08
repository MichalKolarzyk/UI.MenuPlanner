import { MouseEventHandler } from "react"

const AddButton = (props: AddButtonProps) => {
    return <button onClick={props.onClick}>
        +
    </button>
}

type AddButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
}
export default AddButton