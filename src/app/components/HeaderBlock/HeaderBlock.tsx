import React, { useState } from "react";
import styles from './styles.module.css';
import Image from "next/image";
import HeaderImage from "@/app/assets/images/header.png";
import { LogoIcon } from "@/app/assets/icons/logo-icon";
import { Button } from "@/app/atoms";
import { PhoneIcon } from "@/app/assets/icons/phone-icon";
import { MenuIcon } from "@/app/assets/icons/menu-icon";
import { Drawer } from "antd";
import { XCircleIcon } from "@/app/assets/icons/x-circle-icon";
import { Modal } from "../Modal";
import Link from "next/link";

export const HeaderBlock: React.FC = () => {
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
                            onClick={() => onScrollToBlock('MapBlock')}>
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
                <div className={styles.mainText}>
                    {"Факторинговые услуги\nдля дальневосточных\nкомпаний"}
                </div>
                <div className={styles.subText}>
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