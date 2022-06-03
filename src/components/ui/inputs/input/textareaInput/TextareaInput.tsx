import classes from './TextareaInput.module.css'

const TextareaInput = (props: TextareaInputProps) => {
    let className = classes.base;
    className += " " + props.className;


    return <textarea disabled={props.disabled} className={className} value={props.value} onChange={props.onChange}></textarea>;
};

export class TextareaInputProps {
    value?: string;
    onChange?: (event: any) => void;
    className?: string;
    disabled?: boolean;
}

export default TextareaInput;
