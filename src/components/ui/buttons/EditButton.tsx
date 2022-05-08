import { MouseEventHandler, SetStateAction } from "react";

const EditButton = (props: EditButtonProps) => {
    if(props.editMode){
        return <div>
            <button onClick={props.onClick}>Save</button>
            <button onClick={props.onClick}>Cancel</button>
        </div>
    } 
    return <button onClick={props.onClick}>Edit</button>;
};

type EditButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    editMode: boolean;
};

export default EditButton;
