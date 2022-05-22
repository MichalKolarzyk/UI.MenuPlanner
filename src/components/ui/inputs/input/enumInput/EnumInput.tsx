const EnumInput = (props: EnumInputProps) => {
    const options = props.options?.map((o, index) => <option key={index}>{o}</option>);

    return <select className={props.className} onChange={props.onChange} value={props.value}>{options}</select>;
};

type EnumInputProps = {
    value?: string;
    options?: Array<string>;
    onChange?: (event: any) => void;
    className?: string;
};

export default EnumInput;
