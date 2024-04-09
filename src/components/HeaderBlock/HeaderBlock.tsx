import React, { useState } from "react";
import styles from './styles.module.css';
import Image from "next/image";
import HeaderImage from "@/assets/images/header.png";
import { LogoIcon } from "@/assets/icons/logo-icon";
import { Button } from "@/atoms";
import { PhoneIcon } from "@/assets/icons/phone-icon";
import { MenuIcon } from "@/assets/icons/menu-icon";
import { Drawer } from "antd";
import { XCircleIcon } from "@/assets/icons/x-circle-icon";
import { Modal } from "../Modal";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { classNames } from "@/utils";

export const HeaderBlock: React.FC = () => {
    const [mainTextRef, mainTextiInView] = useInView({ threshold: 0.2 })
    const [ref, inView] = useInView({ threshold: 0.2 })
    const [drawer, setDrawer] = useState(false);
    const [modal, setModal] = useState(false);
    const onScrollToBlock = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setDrawer(false);
        }
    }

    return (
        <div className={styles.block} id='HeaderBlock'>
            <div className={styles.background}>
                <Image src={HeaderImage} alt="image"/>
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    <LogoIcon/>
                    <div className={styles.menu}>
                        <div 
                            className={styles.button} 
                            onClick={() => onScrollToBlock('MapBlock')}
                            >
                            О компании
                        </div>
                        <div 
                            className={styles.button} 
                            onClick={() => onScrollToBlock('ServicesBlock')}>
                            Услуги</div>
                        <div 
                            className={styles.button}
                            onClick={() => onScrollToBlock('StagesBlock')}>
                            Этапы работы
                            </div>
                        <div 
                            className={styles.button} 
                            onClick={() => onScrollToBlock('FaqBlock')}>
                                FAQ
                        </div>
                        <div 
                            className={styles.button}
                            onClick={() => onScrollToBlock('FooterBlock')}>
                                Контакты
                        </div>
                        <Link href="/profile">
                            <div className={styles.button}>
                                Личный кабинет
                            </div>
                        </Link>
                        <Button className={styles.bigButton} onClick={() => setModal(true)}>Связаться</Button>
                        <Button className={styles.smallButton} onClick={() => setModal(true)}><PhoneIcon/></Button>
                       <div className={styles.menuIcon} onClick={() => setDrawer(true)}>
                         <MenuIcon/>
                       </div>
                    </div>
                </div>
                <div ref={mainTextRef} 
                    className={classNames(
                    styles.mainText, 
                    // @ts-ignore
                    mainTextiInView && styles.mainTextFade)}>
                    {"Факторинговые услуги\nдля дальневосточных\nкомпаний"}
                </div>
                <div 
                    ref={ref} 
                    className={classNames(
                        styles.subText,
                        // @ts-ignore
                        inView && styles.subTextFade)}>
                    {"Помогаем компаниям управлять своими\nфинансами и снижать риски"}
                </div>
            </div>
            <Drawer 
                className={styles.drawer} 
                width={'100%'} 
                rootClassName={styles.rootDrawer} 
                closeIcon={<div className={styles.drawerIcon}><XCircleIcon/></div>} 
                onClose={() => setDrawer(false)} 
                open={drawer}>
                <div className={styles.drawerMenu}>
                    <div 
                        className={styles.drawwerButton} 
                        onClick={() => onScrollToBlock('MapBlock')}
                        >
                        О компании
                    </div>
                    <div 
                        className={styles.drawwerButton} 
                        onClick={() => onScrollToBlock('MapBlock')}>
                        Услуги</div>
                    <div 
                        className={styles.drawwerButton}
                        onClick={() => onScrollToBlock('StagesBlock')}>
                        Этапы работы
                    </div>
                    <div 
                        className={styles.drawwerButton} 
                        onClick={() => onScrollToBlock('FaqBlock')}>
                            FAQ
                    </div>
                    <div 
                        className={styles.drawwerButton}
                        onClick={() => onScrollToBlock('FooterBlock')}>
                            Контакты
                    </div>
                    <Link href={'/profile'}>
                        <div 
                            className={styles.drawwerButton}>
                                Личный кабинет
                        </div>
                    </Link>
                </div>
            </Drawer>
            <Modal open={modal} onClose={()=> setModal(false)} />
        </div>
        
    );

}