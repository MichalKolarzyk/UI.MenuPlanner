import classes from "./Input.module.css";

const Input = (props: InputProps) => {
    let className = classes.base;
    const isValid = props.isValid ?? true
    className += ` ${isValid ? classes.valid : classes.invalid}`;

    

    return <input className={className} type={props.type}></input>;
};

type InputProps = {
    type?: InputType;
    isValid?: boolean;
};

export enum InputType {
    enum = "enum",
    number = "number",
    date = "date",
}

export default Input;
