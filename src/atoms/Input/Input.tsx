import React, { useState } from "react";
import styles from './styles.module.css';
import InputMask from 'react-input-mask';

interface Props {
    placeholder: string;
    before: React.ReactNode;
    withMask?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    name?: string;
    type?: string;
}

export const Input: React.FC<Props> = (props) => {
    const {placeholder, before, withMask, value, onChange, name, type} = props;
    const [localValue, setLocalValue] = useState(value ?? '');

      const handleChange =(e: any)=> {
        setLocalValue(e.target.value);
        if (onChange){
            onChange(e.target.value);
        }
    }

    return (
        <div className={styles.input} id={name} >
            <>{before}</>
            {withMask ? 
            (<InputMask mask={"+9 (999) 999-99-99"} id={name} name={name} type={type}
                value={localValue} 
                onChange={handleChange} >
                <input name={name} id={name} type={type} placeholder={placeholder} />
            </InputMask>)
            : (
                <input 
                    id={name}
                    type={type}
                    placeholder={placeholder} 
                    name={name}
                    value={localValue} 
                    onChange={handleChange} />
            )}
            
        </div>
    );

}