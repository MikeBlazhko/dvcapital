import React from "react";
import styles from './styles.module.css';
import { CheckIcon } from "@/assets/icons/check-icon";

interface Props {
    value?: boolean;
    onChange?: (value: boolean)=> void;

}


export const Checkbox: React.FC<Props> = ({value, onChange}) => {
    return (
        <label className={styles.checkboxWrapper}>
            <input type="checkbox" checked={value} onChange={(e)=>{
                if (onChange){
                    onChange(e.target.checked);
                }
            }} className={styles.checkbox}/>
            <span className={styles.customCheckbox}>
                <CheckIcon/>
            </span>
        </label>
    );
}
