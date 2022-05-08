import classes from "./EditButton.module.css";
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";

const EditButton = (props: EditButtonProps) => {
    if (props.editMode) {
        return (
            <div className={classes.buttonContainer}>
                <FaSave className={classes.saveButton} onClick={props.onSaveClick}>Save</FaSave>
                <FaTrashAlt className={classes.cancelButton} onClick={props.onCancelClick}>Cancel</FaTrashAlt>
            </div>
        );
    }
    return <FaEdit className={classes.editButton} onClick={props.onEditClick}>Edit</FaEdit>;
};

type EditButtonProps = {
    editMode: boolean;
    onCancelClick?: () => void;
    onSaveClick?: () => void;
    onEditClick?: () => void;
};

export default EditButton;
