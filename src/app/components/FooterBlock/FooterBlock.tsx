import React from "react";
import styles from './styles.module.css';
import { Button } from "@/app/atoms";
import { PhoneIcon } from "@/app/assets/icons/phone-icon";
import { AtSignIcon } from "@/app/assets/icons/at-sign-icon";

export const FooterBlock: React.FC = () => {
    return (
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.header}>Контакты</div>
                <div className={styles.mainRow}>
                    <div className={styles.column}>
                       <div className={styles.infoValue}>
                            <PhoneIcon/>
                            <span>
                                8 (800) 222-24-23
                            </span>
                       </div>
                        <div className={styles.infoValue}>
                            <AtSignIcon/>
                            <span>
                                info@dvcapital.ru
                            </span>
                        </div>
                        <Button className={styles.button}>Связаться</Button>
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
                        <span>О компании</span>
                        <span>Услуги</span>
                        <span>Этапы работы</span>
                        <span>FAQ</span>
                        <span>Контакты</span>
                        <span>Личный кабинет</span>
                    </div>
                    <div className={styles.footerLinks}>
                        <span className={styles.link}>Политика конфиденциальности</span>
                        <span>© Все права защищены</span>
                    </div>
                </div>
            </div>
        </div>
    );
}