import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import InputMask from 'react-input-mask';
import { classNames } from "@/utils";

interface Props {
    placeholder: string;
    before: React.ReactNode;
    withMask?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    name?: string;
    type?: string;
    white?: boolean;
    className?: string;
    readOnly?: boolean;
}

export const Input: React.FC<Props> = (props) => {
    const {placeholder, before, withMask, value, onChange, name, type, white, className, readOnly} = props;


    const handleChange =(e: any)=> {
        if (onChange){
            onChange(e.target.value);
        }
    }


    return (
        // @ts-ignore
        <div className={classNames(styles.input, white && styles.white, className)} id={name} >
            <>{before}</>
            {withMask ? 
            (<InputMask 
                mask={"+9 (999) 999-99-99"} 
                id={name} 
                name={name} 
                type={type}
                value={value} 
                readOnly={readOnly}
                onChange={handleChange} >
                <input 
                    name={name}
                    id={name} 
                    autoComplete="true" 
                    type={type} 
                    placeholder={placeholder} />
            </InputMask>)
            : (
                <input 
                    id={name}
                    type={type}
                    readOnly={readOnly}
                    placeholder={placeholder} 
                    name={name}
                    value={value} 
                    onChange={handleChange} />
            )}
            
        </div>
    );

}