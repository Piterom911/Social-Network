import React from "react";
import s from "./FormControls.module.scss";

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={s.textarea}>
            <textarea {...input} {...props}/>
            {meta.error && meta.touched && <p className={s.warning}>{meta.error}</p>}
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    return (
        <div className={s.textarea}>
            <input {...input} {...props}/>
            {meta.error && meta.touched && <p className={s.warning}>{meta.error}</p>}
        </div>
    )
};