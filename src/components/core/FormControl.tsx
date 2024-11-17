import { useId, useState } from "react";

interface FormControlItem {
    label: string
}

const FormControl = (props: FormControlItem) => {
    const { label } = props;
    const id = useId();

    const [labelState, setLabelState] = useState<boolean>(false);

    return (
        <div className="relative w-full flex justify-center items-center mx-auto my-6">
            <input id={`input_form_element_${id}`} className={`input_form_element font-bold
             ${!labelState ? 'text-white' : 'text-blue-950'}`} type="text"
                onFocus={() => setLabelState(true)} onBlur={() => { setLabelState(false) }} />
            <label htmlFor={`input_form_element_${id}`} id={`input_form_label_${id}`}
                className={`input_form_label w-full  ${labelState ? 'transform -translate-y-[22px] text-white' : 'mb-0 text-blue-950'}`}>{label}</label>

        </div>
    );
}

export default FormControl;