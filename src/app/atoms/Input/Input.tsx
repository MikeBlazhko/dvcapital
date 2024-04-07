import React from "react";
import styles from './styles.module.css';

interface Props {
    placeholder: string;
    before: React.ReactNode;
}

export const Input: React.FC<Props> = (props) => {
    const {placeholder, before} = props;
    return (
        <div className={styles.input}>
            <>{before}</>
            <input placeholder={placeholder} />
        </div>
    );

}