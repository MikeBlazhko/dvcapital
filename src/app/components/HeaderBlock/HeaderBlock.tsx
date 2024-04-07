import React from "react";
import styles from './styles.module.css';
import Image from "next/image";
import HeaderImage from "@/app/assets/images/header.png";
import { LogoIcon } from "@/app/assets/icons/logo-icon";
import { Button } from "@/app/atoms";

export const HeaderBlock: React.FC = () => {
    return (
        <div className={styles.block} >
            <div className={styles.background}>
                <Image src={HeaderImage} alt="image"/>
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    <LogoIcon/>
                    <div className={styles.menu}>
                        <div className={styles.button}>О компании</div>
                        <div className={styles.button}>Услуги</div>
                        <div className={styles.button}>Этапы работы</div>
                        <div className={styles.button}>FAQ</div>
                        <div className={styles.button}>Контакты</div>
                        <div className={styles.button}>Личный кабинет</div>
                        <Button>Связаться</Button>
                    </div>
                </div>
                <div className={styles.mainText}>
                    {"Факторинговые услуги\nдля дальневосточных\nкомпаний"}
                </div>
                <div className={styles.subText}>
                    {"Помогаем компаниям управлять своими\nфинансами и снижать риски"}
                </div>
            </div>
        </div>
        
    );

}