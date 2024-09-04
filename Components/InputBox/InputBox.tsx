import React, { TextareaHTMLAttributes } from 'react'

import styles from './InputBox.module.css'

interface InputBoxProps {
    labelText: string,
    Id: string,
    InputType: string,
    value: string,
    OnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export const InputBox = (
    {
        labelText, Id, InputType, value, OnChange
    }: InputBoxProps
) => {
    return (
        <div className={styles.InputBox}>
            <label htmlFor={Id}>{labelText}</label><br />
            <input type={InputType} id={Id} required value={value} onChange={OnChange} />
        </div>
    )
}


interface TextAreaBoxProps {
    labelText: string,
    Id: string,
    value: string,
    OnChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}


export const TextareaBox = (
    {
        labelText, Id, value, OnChange
    }: TextAreaBoxProps
) => {
    return (
        <div className={styles.InputBox}>
            <label htmlFor={Id}>{labelText}</label><br />
            <textarea id={Id} required value={value} onChange={OnChange} />
        </div>
    )
}

