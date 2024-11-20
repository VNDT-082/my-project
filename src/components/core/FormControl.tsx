import { useId, useState } from "react";

interface FormControlItem {
    label: string,
    className: string,
    labelType: number,
    type:string
}

const FormControl = (props: FormControlItem) => {
    const { label, className, labelType,type } = props;

    ////
    // labelType = 0: background white outline none text white 
    // labelType = 1: background white outline cyan text blue 950
    ////

    const id = useId();

    const [labelState, setLabelState] = useState<boolean>(false);

    return (
        <div className="relative w-full flex justify-center items-center mx-auto my-6">
            <input id={`input_form_element_${id}`} className={`${className} font-bold
             ${!labelState ? 'text-white' : 'text-blue-950'}`} type={ `${type}`}
                onFocus={() => setLabelState(true)} onBlur={(e) => {
                    if(e.target.value=='')
                        setLabelState(false)
                }} />
            {labelType == 0 ?
                <label htmlFor={`input_form_element_${id}`} id={`input_form_label_${id}`}
                    className={`input_form_label w-full  ${labelState ? 'transform -translate-y-[22px] text-white' : 'mb-0 text-blue-950'}`}>{label}</label>
                :
                <label htmlFor={`input_form_element_${id}`} id={`input_form_label_${id}`}
                className={`input_form_label w-full  text-blue-950 ${labelState ? 'transform -translate-y-[22px]' : 'mb-0'}`}>{label}</label>


            }

        </div>
    );
}

export default FormControl;