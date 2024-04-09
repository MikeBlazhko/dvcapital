import React, { useState } from "react";
import styles from './styles.module.css';
import { Button } from "@/atoms";
import { PhoneIcon } from "@/assets/icons/phone-icon";
import { AtSignIcon } from "@/assets/icons/at-sign-icon";
import { Modal } from "../Modal";
import Link from "next/link";

export const FooterBlock: React.FC = () => {
    const [modal, setModal] = useState(false);
    
    const onScrollToBlock = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className={styles.block} id='FooterBlock'>
            <div className={styles.content}>
                <div className={styles.header}>Контакты</div>
                <div className={styles.mainRow}>
                    <div className={styles.column}>
                        <a href="tel:+88002222423">
                       <div className={styles.infoValue}>
                            <PhoneIcon/>
                            <span>
                                8 (800) 222-24-23
                            </span>
                       </div>
                       </a>
                       <a href="mailto:info@dvcapital.ru">
                         <div className={styles.infoValue}>
                            <AtSignIcon/>
                            <span>
                                info@dvcapital.ru
                            </span>
                        </div>
                       </a>
                        <Button className={styles.button} onClick={() => setModal(true)}>Связаться</Button>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoTitle}>
                            Общество с ограниченной ответственностью «ДВ Капитал»
                        </div>
                        <span>ОГРН 1085012002470</span>
                        <span>ИНН 5012047676</span>
                        <span>КПП 504101001</span>
                        <span>Юр. адрес: 143914, Московская область, Г.О. Реутов, г. Реутов, Пер Транспортный, д. 10,офис 6</span>
                        <span>Факт. Адрес: 127055, г. Москва, Тихвинский переулок, д.11 стр.2, комната 28</span>
                    </div>
                </div>
                <div className={styles.divider}/>
                <div className={styles.footer}>
                    <div className={styles.buttons}>
                        <span onClick={() => onScrollToBlock('MapBlock')}>О компании</span>
                        <span onClick={() => onScrollToBlock('ServicesBlock')}>Услуги</span>
                        <span onClick={() => onScrollToBlock('StagesBlock')}>Этапы работы</span>
                        <span onClick={() => onScrollToBlock('FaqBlock')}>FAQ</span>
                        <span>Контакты</span>
                        <Link href="/profile">
                            <span>Личный кабинет</span>
                        </Link>
                    </div>
                    <div className={styles.footerLinks}>
                        <span className={styles.link}>Политика конфиденциальности</span>
                        <span>© Все права защищены</span>
                    </div>
                </div>
            </div>
            <Modal open={modal} onClose={() => setModal(false)}/>
        </div>
    );
}