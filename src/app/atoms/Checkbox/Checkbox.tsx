import React from "react";
import styles from './styles.module.css';
import { CheckIcon } from "@/app/assets/icons/check-icon";

export const Checkbox: React.FC = () => {
    return (
        <label className={styles.checkboxWrapper}>
            <input type="checkbox" className={styles.checkbox}/>
            <span className={styles.customCheckbox}>
                <CheckIcon/>
            </span>
        </label>
    );
}
