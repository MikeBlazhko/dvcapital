import React, { PropsWithChildren } from "react";
import styles from './styles.module.css';
import { classNames } from "@/utils";

interface Props {
    flex?: boolean;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: HTMLButtonElement['type']
}

export const Button: React.FC<PropsWithChildren<Props>> = ({children, flex = false, className, onClick, disabled, type = "button"}) => {
    return (
      
        <button 
            //@ts-ignore
            className={classNames(styles.button, flex && styles.flex, disabled && styles.disabled, className)}disabled={disabled} 
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
    );
}