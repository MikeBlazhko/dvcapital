import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import Image from "next/image";
import HeaderImage from "@/assets/images/header.png";
import { LogoIcon } from "@/assets/icons/logo-icon";
import { Button, Input } from "@/atoms";
import { PhoneIcon } from "@/assets/icons/phone-icon";
import { MenuIcon } from "@/assets/icons/menu-icon";
import { Drawer } from "antd";
import { XCircleIcon } from "@/assets/icons/x-circle-icon";
import { Modal } from "../Modal";
import Link from "next/link";
import { UserIcon } from "@/assets/icons/user-icon";
import { LockIcon } from "@/assets/icons/lock-icon";
import { ArrowIcon } from "@/assets/icons/arrow-icon";
import { classNames } from "@/utils";
import FormItem from "antd/es/form/FormItem";
import { useInView } from "react-intersection-observer";

export const ProfileBlock: React.FC = () => {
    const [drawer, setDrawer] = useState(false);
    const [modal, setModal] = useState(false);
    const [login, setLogin] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [ref, inView] = useInView({ threshold: 0.2 });

    const onScrollToBlock = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setDrawer(false);
        }
    }

    useEffect(() => {
        if (login){
            setPassword('');
            setUserName('');
            setLogin(false);
        }

    },[password, userName]);

    return (
        <div className={styles.block} id='HeaderBlock'>
            <div className={styles.background}>
                <Image src={HeaderImage} alt="image"/>
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                   <Link href={'/'}>
                        <LogoIcon/>
                    </Link>
                    <div className={styles.menu}>
                        <Link href={'/'}>
                            <div 
                                className={styles.button} 
                                onClick={() => onScrollToBlock('MapBlock')}
                                >
                                О компании
                            </div>
                        </Link>
                        <Link href={'/'}>
                            <div 
                                className={styles.button} 
                                onClick={() => onScrollToBlock('ServicesBlock')}>
                                Услуги
                            </div>
                        </Link>
                      <Link href={'/'}>
                          <div 
                            className={styles.button}
                            onClick={() => onScrollToBlock('StagesBlock')}>
                            Этапы работы
                            </div>
                      </Link>
                        <Link href={'/'}>
                            <div 
                            className={styles.button} 
                            onClick={() => onScrollToBlock('FaqBlock')}>
                                FAQ
                        </div>
                        </Link>
                       <Link href={'/'}>
                            <div 
                                className={styles.button}
                                onClick={() => onScrollToBlock('FooterBlock')}>
                                    Контакты
                            </div>
                       </Link>
                        <Link href="/profile">
                            <div className={classNames(styles.button, styles.activeButton)}>
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
               <Link href={'/'}>
                    <div className={styles.back}>
                        <ArrowIcon/>
                        <span>Назад</span>
                    </div>
                </Link>
                <div ref={ref}  className={classNames(styles.form, 
                    //@ts-ignore
                    inView && styles.fade)}>
                    <div className={styles.formHeader}>
                        Вход в личный кабинет
                    </div>
                    <Input white before={<UserIcon/>} 
                        placeholder="Логин" 
                        value={userName} 
                        onChange={(e) => {
                            setUserName(e);
                        }}/>
                    <div className={styles.passwordInput}>
                        {login && <span>Неверно введен пароль</span>}
                        <Input 
                            white 
                            before={<LockIcon/>} 
                            className={login ? styles.redIcon : undefined} 
                            placeholder="Пароль" 
                            value={password} onChange={(e) => {
                                setPassword(e);

                            }}
                            type="password"/>
                    </div>
                    <Button flex disabled={login} onClick={() => setLogin(!login)}>Войти</Button>
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
                    <Link href={'/'}>
                    <div 
                        className={styles.drawwerButton} 
                        onClick={() => onScrollToBlock('MapBlock')}
                        >
                        О компании
                    </div></Link>
                    <Link href={'/'}>
                        <div 
                        className={styles.drawwerButton} 
                        onClick={() => onScrollToBlock('MapBlock')}>
                        Услуги</div>
                    </Link>
                   <Link href={'/'}>
                     <div 
                        className={styles.drawwerButton}
                        onClick={() => onScrollToBlock('StagesBlock')}>
                        Этапы работы
                    </div>
                   </Link>
                    <Link href={'/'}>
                        <div 
                            className={styles.drawwerButton} 
                            onClick={() => onScrollToBlock('FaqBlock')}>
                                FAQ
                        </div>
                    </Link>
                   <Link href={'/'}>
                        <div 
                            className={styles.drawwerButton}
                            onClick={() => onScrollToBlock('FooterBlock')}>
                                Контакты
                        </div>
                   </Link>
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