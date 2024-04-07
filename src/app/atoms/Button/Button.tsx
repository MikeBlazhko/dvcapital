import React, { PropsWithChildren } from "react";
import styles from './styles.module.css';
import { classNames } from "@/app/utils";

interface Props {
    flex?: boolean;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({children, flex = false, className, onClick}) => {
    return (
        //@ts-ignore
        <button className={classNames(styles.button, flex && styles.flex, className)} onClick={onClick}>{children}</button>
    );
}