import AddButton from "../ui/buttons/AddButton";
import RemoveButton from "../ui/buttons/RemoveButton";

const Steps = (props: StepsProps) => {
    if (!props.steps || props.steps.length === 0) {
        return (
            <>
                <div>There is no steps in the list</div>
                {props.editMode && <AddButton />}
            </>
        );
    }

    return (
        <>
            <div>Steps:</div>
            <ul>
                {props.steps?.map((s) => (
                    <li>
                        <span>{s}</span>
                        {props.editMode && <RemoveButton />}
                    </li>
                ))}
                {props.editMode && (
                    <li>
                        <AddButton />
                    </li>
                )}
            </ul>
        </>
    );
};

type StepsProps = {
    steps?: Array<string>;
    editMode?: boolean;
};

export default Steps;
