const EnumInput = (props: EnumInputProps) => {
    const options = props.options?.map((o, index) => <option key={index}>{o}</option>);

    return <select disabled={props.disabled} className={props.className} onChange={props.onChange} value={props.value}>{options}</select>;
};

type EnumInputProps = {
    value?: string;
    options?: Array<string>;
    onChange?: (event: any) => void;
    className?: string;
    disabled?: boolean;
};

export default EnumInput;
