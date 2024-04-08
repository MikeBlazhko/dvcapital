import React, { PropsWithChildren } from "react";
import styles from './styles.module.css';
import { classNames } from "@/app/utils";

interface Props {
    flex?: boolean;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({children, flex = false, className, onClick, disabled}) => {
    return (
      
        <button 
            //@ts-ignore
            className={classNames(styles.button, flex && styles.flex, disabled && styles.disabled, className)}disabled={disabled} 
            onClick={onClick}
            >
                {children}
            </button>
    );
}