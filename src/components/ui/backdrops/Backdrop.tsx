import classes from "./Backdrop.module.css";

const Backdrop = (props: BackdropProps) => {
    return (
        <div onClick={props.onClick} className={classes.base}>
            {props.children}
        </div>
    );
};

export class BackdropProps {
    onClick?: () => void;
    children?: any;
}

export default Backdrop;
