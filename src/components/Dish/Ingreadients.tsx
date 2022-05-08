import Ingreadient from '../../models/IngreadientModel';
import AddButton from '../ui/buttons/AddButton';
import RemoveButton from '../ui/buttons/RemoveButton';
import classes from './Ingreadients.module.css'

const Ingreadients = (props: IngreadientsProps) => {
    if (!props.ingreadients || props.ingreadients.length === 0) {
        return (
            <>
                <div>There are no ingreadients in the list.</div>
                {props.editMode && <AddButton />}
            </>
        );
    }
    return (
        <>
            <div>Ingreadients:</div>
            <ul className={classes.list}>
                {props.ingreadients?.map((i) => (
                    <li className={classes.row}>
                        <span>{i.name}</span>
                        <span>{i.amount}</span>
                        {props.editMode && <RemoveButton />}
                    </li>
                ))}
                {props.editMode && (
                    <li className={classes.row}>
                        <AddButton />
                    </li>
                )}
            </ul>
        </>
    );
};

type IngreadientsProps = {
    ingreadients?: Array<Ingreadient>;
    editMode?: boolean;
};

export default Ingreadients;
